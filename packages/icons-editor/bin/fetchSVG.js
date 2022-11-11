/*
Copyright 2020 Adobe. All rights reserved.
Copyright 2021 Gaoding. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
/* eslint-disable */
import got from 'got';
import fs from 'fs-extra';
import path from 'path';
import Figma from 'figma-js';
import PQueue from 'p-queue';
import dotenv from 'dotenv';
import Case from 'case';
dotenv.config();

const { ensureDir, emptyDir, writeFile } = fs;
const { join, resolve } = path;
const { FIGMA_TOKEN, FIGMA_FILE_URL } = process.env;
console.log(FIGMA_TOKEN, FIGMA_FILE_URL);

const options = Object.assign(
    {
        format: 'svg',
        outputDir: 'src',
        scale: '1',
    },
    getArgs()
);

if (!FIGMA_TOKEN) {
    throw Error('Cannot find FIGMA_TOKEN key in process.');
}
const client = Figma.Client({
    personalAccessToken: FIGMA_TOKEN,
});

// Fail is there's no figma file key
let fileId = null;
if (!fileId) {
    try {
        fileId = FIGMA_FILE_URL.match(/file\/([a-z0-9]+)\//i)[1];
    } catch (e) {
        throw Error('Cannot find FIGMA_FILE_URL key in process.');
    }
}

console.log(`Exporting ${FIGMA_FILE_URL} components.`);

client
    .file(fileId)
    .then(({ data }) => {
        console.log(data);
        console.log('Processing response');
        let components = {};
        data.document.children.forEach(check);
        if (Object.values(components).length <= 0) {
            throw Error('No components found!');
        }
        console.log(
            `${
                Object.values(components).length
            } components found in the figma file.`
        );
        return components;
        function check(c) {
            if (c.type === 'COMPONENT') {
                const { name, id } = c;
                const { description = '', key } = data.components[c.id];
                const { width, height } = c.absoluteBoundingBox;

                components[id] = {
                    name,
                    id,
                    key,
                    file: fileId,
                    description,
                    width,
                    height,
                };
            } else if (c.children) {
                c.children.forEach(check);
            }
        }
    })
    .then((components) => {
        console.log('components', components);
        console.log('Getting export urls.');
        return client
            .fileImages(fileId, {
                format: options.format,
                ids: Object.keys(components),
                scale: options.scale,
            })
            .then(({ data }) => {
                for (const id of Object.keys(data.images)) {
                    components[id].image = data.images[id];
                }
                return components;
            });
    })
    .then((components) => {
        return ensureDir(options.outputDir)
            .then(() => {
                writeFile(
                    resolve(options.outputDir, 'data.json'),
                    JSON.stringify(components),
                    'utf8'
                );
            })
            .then(() => {
                emptyDir(join(options.outputDir, options.format));
            })
            .then(() => components);
    })
    .then((components) => {
        const contentTypes = {
            svg: 'image/svg+xml',
            png: 'image/png',
            jpg: 'image/jpeg',
        };
        return queueTasks(
            Object.values(components).map((component) => () => {
                const outputName = `${component.name}`
                    .toLowerCase()
                    .replace(/_/g, '-');
                const pascalOutputName = Case.pascal(outputName);
                return got
                    .get(component.image, {
                        headers: {
                            'Content-Type': contentTypes[options.format],
                        },
                        encoding: options.format === 'svg' ? 'utf8' : null,
                    })
                    .then((response) => {
                        return ensureDir(
                            join(options.outputDir, options.format)
                        ).then(() => {
                            const content = response.body.toString();
                            writeFile(
                                join(
                                    options.outputDir,
                                    options.format,
                                    `${pascalOutputName}.${options.format}`
                                ),
                                content,
                                options.format === 'svg' ? 'utf8' : 'binary'
                            );
                        });
                    })
                    .catch((err) => {
                        console.log('Got Image Failed', pascalOutputName);
                        console.log('Error Info: ', err);
                    });
            })
        );
    })
    .catch((error) => {
        throw Error(`Error fetching components from Figma: ${error}`);
    });

function queueTasks(tasks, options) {
    const queue = new PQueue(Object.assign({ concurrency: 3 }, options));
    for (const task of tasks) {
        queue.add(task);
    }
    queue.start();
    return queue.onIdle();
}

function getArgs() {
    let args = {};
    for (const arg of process.argv.slice(2)) {
        const [param, value] = arg.split('=');
        args[param] = value;
    }
    return args;
}

// 对svg内容做一些处理
function handleSvgContent(content) {
    // 去除svg的fill内容
    const reg = /fill=".+?"/gi;
    content = content.replace(reg, '');
    return content;
}
