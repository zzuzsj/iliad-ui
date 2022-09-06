/* eslint-disable no-console */
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
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import chalk from 'chalk';
import commandLineArgs from 'command-line-args';
import prettier from 'prettier';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const configPath = path.resolve(path.join(__dirname, '..', 'config'));
const header = fs.readFileSync(path.join(configPath, 'license.js'), 'utf8');

const { publish } = commandLineArgs([{ name: 'publish', type: Boolean }]);

if (publish) {
    console.log(
        chalk.yellow(
            'The --publish flag was used so the package will be published to npm after building!\n'
        )
    );
}

// Clear build directory
process.chdir('./packages/react/');

// Fetch component metadata
// 从documation目录下获取custom-elements.json
const metadata = JSON.parse(fs.readFileSync('./custom-elements.json', 'utf8'));

// Wrap components
console.log('Wrapping components...');

function getAllComponents() {
    const allComponents = [];

    metadata.modules.map((module) => {
        if (module.path.startsWith('packages')) {
            module.declarations?.map((declaration) => {
                if (declaration.customElement && declaration.tagName) {
                    const component = declaration;
                    const modulePath = module.path;

                    if (component) {
                        allComponents.push(
                            Object.assign(component, { modulePath })
                        );
                    }
                }
            });
        }
    });

    return allComponents;
}

const components = getAllComponents();

const mainExports = [];

function formatCode(string) {
    return prettier.format(string, {
        parser: 'babel-ts',
        singleQuote: true,
        printWidth: 80,
        tabWidth: 4,
        semi: true,
        singleQuote: true,
        bracketSpacing: true,
    });
}

// 对于部分组件 他的触发事件在组件外部 所以cem不会讲这个事件加入到custom-elements.json 需要手动添加
const AppendEvents = {
    SliderHandle: ['input', 'change'],
    Slider: ['input', 'change'],
};

// 暂时还没开发完毕
const passedComponents = ['HelpText'];
components
    .filter((cv) => {
        return !passedComponents.includes(cv.name);
    })
    .map((component) => {
        const { name } = component;
        const componentFile = path.join('./src', `${name}.ts`);
        const appendEvents = (AppendEvents[name] || []).map((cv) => {
            return { name: cv };
        });
        const events = (component.events || [])
            .concat(appendEvents)
            .map((event) => {
                return `'${event.name}': '${event.name}'`;
            })
            .join(',\n');

        const source = formatCode(
            `${header}import * as React from 'react';
      import { createComponent } from '@lit-labs/react';
      import { ReactiveEvents } from '../config';
      import { ${name} as Component } from '@iliad-ui/bundle';

      export const ${name} = createComponent(
        React,
        '${component.tagName}',
        Component,
        {
          ...ReactiveEvents,
          ${events}
        },
        '${name}'
      );
    `
        );

        fs.writeFileSync(componentFile, source, 'utf8');
        mainExports.push(`export * from './${name}'`);
        console.log(`✓ <${component.tagName}>`);
    });

// 增加手动导出部分(build:react 不会更新对应src/ts文件，有更新需要手动更新)
mainExports.push(`
    /** 手动添加 */
    export * from './Picker';
    export * from './IconsEditor';
    export { Overlay } from '@iliad-ui/bundle';
`);

fs.writeFileSync(
    './src/index.ts',
    formatCode(`${header}/* 注册 web components sideEffect */
    import '@iliad-ui/bundle/elements';

    /* 脚本自动生成 */
    ${mainExports.join('\n')}`),
    'utf8'
);

// Run TypeScript on the generated src directory
console.log(
    'Source files have been generated. Running the TypeScript compiler...'
);
execSync('npx tsc', { stdio: 'inherit' });

// Publish to npm
if (publish) {
    console.log('Publishing to npm...');
    execSync('npm publish', { stdio: 'inherit' });
}

console.log(chalk.cyan(`\nAll components have been wrapped for React! 📦\n`));
