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
export const CopyHeader = `/*
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
`;

// 生成并自定义元素
export const generateIconComponentRegistrationTemplate = (icon) => {
    const { name, tag } = icon;
    const content = `
    import { iliadCustomElementsDefine } from '@iliad-ui/base';
    import { Icon${name} } from '../src/elements/Icon${name}.js';

    iliadCustomElementsDefine('${tag}', Icon${name});

    declare global {
        interface HTMLElementTagNameMap {
            '${tag}': Icon${name};
        }
    }
    `;
    return `${CopyHeader}${content}`;
};

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

// 生成到src/elements 输出为icon元素
export const generateIconComponentSvgTemplate = (icon) => {
    const { name, svg } = icon;
    const content = `
    import {tag as html, TemplateResult} from '../custom-tag.js';
    export {setCustomTemplateLiteralTag} from '../custom-tag.js';
    export const ${name}Icon = (): string | TemplateResult => {
        return html\`${handleSvgFilter(name, svg)}\`;
    }
    `;
    return `${CopyHeader}${content}`;
};

// 生成到src/icons 输出为svg元素 可以作为slot插入到Icon
export const generateIconComponentElementTemplate = (icon) => {
    const { name, tag } = icon;
    const content = `
    import { html, TemplateResult } from '@iliad-ui/base';
    import { IconBase } from '@iliad-ui/icon';
    import {
        ${name}Icon
    } from '../icons/${name}.js';
    import {
        setCustomTemplateLiteralTag
    } from '../custom-tag.js';

    /**
     * @element ${tag}
     */
    export class Icon${name} extends IconBase {
        protected render(): TemplateResult {
            setCustomTemplateLiteralTag(html);
            return ${name}Icon() as TemplateResult;
        }
    }
    `;
    return `${CopyHeader}${content}`;
};
