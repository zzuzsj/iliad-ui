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
export const OpenFullIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_52_592)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.81067 19.25L12 19.25L12 20.75L4.00001 20.75C3.80109 20.75 3.61033 20.671 3.46968 20.5303C3.32902 20.3897 3.25 20.1989 3.25 20L3.25 12L4.75 12L4.75 18.1894L18.1893 4.75001L12 4.75L12 3.25L20 3.25001C20.4142 3.25001 20.75 3.5858 20.75 4.00001L20.75 12L19.25 12L19.25 5.81067L5.81067 19.25Z"
                />
            </g>
            <defs>
                <clipPath id="clip0_52_592">
                    <rect width="24" height="24" />
                </clipPath>
            </defs>
        </svg>
    `;
};
