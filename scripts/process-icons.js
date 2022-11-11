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
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 对svg内容做一些处理
const handleSvgContent = (content) => {
    // 去除svg的fill内容
    const reg = /fill=".+?"/gi;
    content = content.replace(reg, '');
    return content;
};
const handleSvgFilter = (name, content) => {
    return name.includes('Static') ? content : handleSvgContent(content);
};

const processIcon = (srcPath, fd, scaleWidth, scaleHeight) => {
    // get icon name from filename
    const iconName = path.basename(srcPath, path.extname(srcPath));
    // regex will extract width, height and svg content into $1, $2 and $3 respectively
    const regex = new RegExp(/<svg.*viewBox=\"(.*?)\".*?>\n?(.*)\n?<\/svg>/i);

    const originContent = fs.readFileSync(srcPath, 'utf8');
    const content = originContent.replace(/\n/g, '');

    const match = content.match(regex);
    if (!match) {
        console.log(`---- match error: ${iconName} ${srcPath}`);
        // no matching result, bail
        return;
    }
    const [, viewBox, svgContent] = match;
    // append the content to the target file handle , remove fill info
    fs.writeSync(
        fd,
        `<symbol id="spectrum-icon-${iconName}" viewBox="${viewBox}">${handleSvgFilter(
            iconName,
            svgContent
        )}</symbol>`
    );
};

// load our license file
const license = fs.readFileSync(
    path.join(__dirname, '..', 'config', 'license.js')
);

// where is spectrum-css?
// TODO: use resolve package to find node_modules
const spectrumIconsPath = path.resolve(
    path.join(__dirname, '..', 'node_modules', '@spectrum-css', 'icon')
);

// define the target icon sizes for each scale
const processIconsList = [
    {
        name: 'medium',
        scale: {
            width: 18,
            height: 18,
        },
        // const srcPath = ;
        srcPath: path.join(spectrumIconsPath, 'medium'),
    },
    {
        name: 'large',
        scale: {
            width: 24,
            height: 24,
        },
        srcPath: path.join(spectrumIconsPath, 'large'),
    },
    {
        name: 'editor',
        scale: {
            width: 24,
            height: 24,
        },
        srcPath: path.join(
            __dirname,
            '..',
            'packages',
            'icons-editor',
            'src',
            `svg`
        ),
    },
];

// process the scales
// Object.keys(scales).forEach((scaleKey) => {});
processIconsList.forEach(createIconsSvg);

function createIconsSvg(item) {
    const { name, scale, srcPath } = item;
    console.log(`processing scale ${name}...`);

    const outputPath = path.join(
        __dirname,
        '..',
        'packages',
        'icons',
        'src',
        `icons-${name}.svg.ts`
    );
    let outputFd = fs.openSync(outputPath, 'w');

    fs.writeSync(outputFd, license);
    fs.writeSync(
        outputFd,
        'import { svg } from \'@iliad-ui/base\'; export default svg`<svg xmlns="http://www.w3.org/2000/svg">'
    );

    fs.readdirSync(srcPath).forEach((iconFile) => {
        const srcIconPath = path.join(srcPath, iconFile);
        console.log(`\ticon ${iconFile}`);
        processIcon(srcIconPath, outputFd, scale.width, scale.height);
    });

    fs.writeSync(outputFd, '</svg>`;');
    fs.closeSync(outputFd);
}

console.log('complete.');
/* eslint-disable */
