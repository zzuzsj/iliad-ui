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

import { tag as html, TemplateResult } from '../custom-tag.js';
export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SketchStaticIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_1405_1066)">
                <path
                    d="M12.0004 22.2721L0.672363 9.09615L5.56836 2.42415L12.0004 1.72815L18.4324 2.42415L23.3284 9.09615L12.0004 22.2721Z"
                    fill="#FFAE00"
                />
                <path
                    d="M12.0004 22.2719L0.672363 9.09595H23.3284L12.0004 22.2719Z"
                    fill="#EC6C00"
                />
                <path
                    d="M11.9999 22.2719L5.25586 9.09595H18.7439L11.9999 22.2719Z"
                    fill="#FFAE00"
                />
                <path
                    d="M11.9999 1.72815L5.25586 9.09615H18.7439L11.9999 1.72815Z"
                    fill="#FFEFB4"
                />
                <path
                    d="M5.56836 2.42395L3.04836 5.78395L0.672363 9.09595H5.30436L5.56836 2.42395ZM18.4324 2.42395L20.9524 5.78395L23.3284 9.09595H18.6964L18.4324 2.42395Z"
                    fill="#FFAE00"
                />
                <path
                    d="M5.56786 2.42415L5.25586 9.09615L11.9999 1.72815L5.56786 2.42415ZM18.4319 2.42415L18.7439 9.09615L11.9999 1.72815L18.4319 2.42415Z"
                    fill="#FED305"
                />
            </g>
            <defs>
                <clipPath id="clip0_1405_1066">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `;
};
