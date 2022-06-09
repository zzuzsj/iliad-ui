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
import fs from 'fs-extra';
import glob from 'glob';
import path from 'path';
import prettier from 'prettier';
import Case from 'case';
import { fileURLToPath } from 'url';

import {
    CopyHeader,
    generateIconComponentElementTemplate,
    generateIconComponentRegistrationTemplate,
    generateIconComponentSvgTemplate,
} from './template.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '../');
// prefix会作为标签名前缀 比如icon名为 close ，导出为标签时 会成为 sp-${prefix}-close
const prefix = 'editor';

const iconsPath = path.resolve(rootDir, 'src/svg');

prepareDir()
    .then(() => {
        const svgPaths = `${iconsPath}/**.svg`;
        const svgArr = getSvgIcons(svgPaths);
        console.log(svgArr);
        return svgArr;
    })
    .then((icons) => {
        console.log('------ icons -------');
        console.log(icons);
        console.log('Build icons generate icons start.');
        createIconsComponent(icons);
        createIconsIcons(icons);
        createIconsIndex();
        console.log('Build icons generate icons end.');
    })
    .catch((error) => {
        throw Error(`Build icons components from Figma error: 
        ${error}`);
    });

function prepareDir() {
    return Promise.all([
        fs.ensureDir(path.resolve(rootDir, 'src/elements')),
        fs.emptyDir(path.resolve(rootDir, 'src/elements')),
        fs.ensureDir(path.resolve(rootDir, 'src/icons')),
        fs.emptyDir(path.resolve(rootDir, 'src/icons')),
        fs.ensureDir(path.resolve(rootDir, 'icons')),
        fs.emptyDir(path.resolve(rootDir, 'icons')),
    ]);
}

function getSvgIcons(svgPaths) {
    console.log(svgPaths);
    return new Promise((resolve, reject) => {
        glob(svgPaths, (error, icons) => {
            if (error) {
                throw Error(`Get icons info error: ${error}`);
            }
            const list = icons.map((cv) => {
                const svg = fs.readFileSync(cv, 'utf-8');
                const name = path.basename(cv, '.svg');
                const componentName = Case.pascal(name);
                const id = Case.kebab(componentName);
                return {
                    id,
                    svg,
                    tag: `sp-icon-${prefix ? `${prefix}-` : ''}${id}`,
                    name: componentName,
                    path: cv,
                };
            });
            resolve(list);
        });
    });
}

function createIconsComponent(icons) {
    icons.forEach((cv) => {
        writeIconContentToFile(
            `src/icons/${cv.name}.ts`,
            generateIconComponentSvgTemplate(cv)
        );
        writeIconContentToFile(
            `src/elements/Icon${cv.name}.ts`,
            generateIconComponentElementTemplate(cv)
        );
        writeIconContentToFile(
            `icons/${cv.tag}.ts`,
            generateIconComponentRegistrationTemplate(cv)
        );
    });
}

function writeIconContentToFile(filePath, fullContent) {
    fullContent = prettierFormat(fullContent);
    filePath = path.resolve(rootDir, filePath);
    fs.writeFileSync(filePath, fullContent, 'utf-8');
}

function createIconsIcons(icons) {
    const iconContent = icons
        .map((cv) => {
            return `export { ${cv.name}Icon } from './icons/${cv.name}.js'`;
        })
        .join('\n');
    const content = `${iconContent}
        export { setCustomTemplateLiteralTag } from './custom-tag.js';
    `;
    const filePath = path.resolve(rootDir, 'src/icons.ts');
    const fullContent = prettierFormat(`${CopyHeader}${content}`);
    fs.writeFileSync(filePath, fullContent, 'utf-8');
}

function createIconsIndex() {
    const content = `
    import { html } from '@iliad-ui/base';
    import { setCustomTemplateLiteralTag } from './custom-tag.js';

    setCustomTemplateLiteralTag(html);

    export { setCustomTemplateLiteralTag };
    export * from './icons.js';
    `;
    const filePath = path.resolve(rootDir, 'src/index.ts');
    const fullContent = prettierFormat(`${CopyHeader}${content}`);
    fs.writeFileSync(filePath, fullContent, 'utf-8');
}

function prettierFormat(content) {
    return prettier.format(content, {
        printWidth: 80,
        tabWidth: 4,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'avoid',
        parser: 'typescript',
    });
}
