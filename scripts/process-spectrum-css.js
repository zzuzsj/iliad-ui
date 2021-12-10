#!/usr/bin/env node

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
import Walker from 'walker';
import path from 'path';
import chalk from 'chalk';
import fs from 'fs-extra';
import postcss from 'postcss';
import { postCSSPlugins } from './css-processing.cjs';
import postcssSpectrumPlugin from './process-spectrum-postcss-plugin.js';
import reporter from 'postcss-reporter';
import postcssCustomProperties from 'postcss-custom-properties';
import { fileURLToPath, pathToFileURL } from 'url';
import postcssRemove from './postcss-remove-declaration-plugins.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const componentRoot = path.resolve(__dirname, '../packages');

async function processComponent(componentPath) {
    const configPath = path.join(componentPath, 'spectrum-config.js');
    const { default: spectrumConfig } = await import(pathToFileURL(configPath));
    const inputCssPath = `node_modules/@spectrum-css/${spectrumConfig.spectrum}/dist/index-vars.css`;
    let packageCss = false;
    if (fs.existsSync(inputCssPath)) {
        packageCss = true;
    } else {
        console.error(
            chalk.bold.red(
                `!!! '${spectrumConfig.spectrum}' does not have a local Spectrum CSS dependency !!!`
            )
        );
        // process.exit(1);
        // 如果未检测到本地spectrum-css代码 直接结束
        return Promise.resolve('');
    }
    const inputCss = await fs.readFile(inputCssPath);
    let inputCustomProperties = await fs.readFile(
        `node_modules/@spectrum-css/${spectrumConfig.spectrum}/dist/vars.css`,
        'utf8'
    );
    inputCustomProperties = inputCustomProperties.replace(
        /(.|\n)*\{/,
        ':root {'
    );
    console.log(chalk.bold.green(`- ${spectrumConfig.spectrum}`));
    return Promise.all(
        // @spectrum-css 过来的css样式文件增加swc后缀，不再覆盖现有css样式
        spectrumConfig.components.map(async (component) => {
            const outputCssPath = path.join(
                componentPath,
                `spectrum-${component.name}.swc.css`
            );
            const outputJsonPath = path.join(
                componentPath,
                `spectrum-vars.json`
            );
            const outputVarCssPath = path.join(componentPath, 'vars.swc.css');
            // 从@spectrum-css的vars.css生成组件库vars.css 单独维护，两者解绑
            const outputCss = await postcss([
                ...(packageCss ? postCSSPlugins() : []),
                postcssSpectrumPlugin({ component }),
                reporter(),
            ]).process(inputCss, {
                from: inputCssPath,
                to: outputCssPath,
            });
            const srcPath = `node_modules/@spectrum-css/${spectrumConfig.spectrum}/dist/vars.css`;
            await postcss([
                // 去除所有的无效变量 比如值为undifined的变量
                postcssRemove({
                    remove: {
                        ':root': {
                            '*': 'undefined',
                        },
                    },
                }),
                postcssCustomProperties({
                    exportTo: [outputJsonPath, outputVarCssPath],
                }),
            ]).process(inputCustomProperties, {
                from: srcPath,
            });
            const cssVars = await fs.readFile(outputVarCssPath, 'utf8');
            await fs.writeFile(
                outputVarCssPath,
                cssVars.replace(':root {', ':host {'),
                {
                    encoding: 'utf8',
                }
            );
            console.log(chalk.bold.green(`  o ${component.name}`));
            // await fs.writeFile(outputJsonPath, outputJson, { encoding: 'utf8' });
            return fs.writeFile(outputCssPath, outputCss.css, {
                encoding: 'utf8',
            });
        })
    );
}

function processComponents() {
    return new Promise((resolve, reject) => {
        const promises = [];

        console.log(chalk.bold.green('Processing Spectrum Components'));

        Walker(componentRoot)
            .on('file', function (filePath, stat) {
                const parsedPath = path.parse(filePath);
                if (parsedPath.base === 'spectrum-config.js') {
                    promises.push(processComponent(parsedPath.dir));
                }
            })
            .on('error', function (error, entry, stat) {
                reject(error);
            })
            .on('end', function () {
                resolve(Promise.all(promises));
            });
    }).then((result) => {
        console.log(chalk.bold.green('Done'));
        return result;
    });
}

async function main() {
    await processComponents();
}

main();
/* eslint-disable */
