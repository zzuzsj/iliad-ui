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
export const SectionIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_959_999)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.25 6C20.25 4.75736 19.2426 3.75 18 3.75L6 3.75C4.75736 3.75 3.75 4.75736 3.75 6L3.75 8.25L20.25 8.25L20.25 6ZM20.25 9.75L3.75 9.75L3.75 14.25L20.25 14.25L20.25 9.75ZM20.25 15.75L3.75 15.75L3.75 18C3.75 19.2426 4.75736 20.25 6 20.25L18 20.25C19.2426 20.25 20.25 19.2426 20.25 18L20.25 15.75ZM18 2.25C20.0711 2.25 21.75 3.92893 21.75 6L21.75 18C21.75 20.0711 20.0711 21.75 18 21.75L6 21.75C3.92893 21.75 2.25 20.0711 2.25 18L2.25 6C2.25 3.92893 3.92893 2.25 6 2.25L18 2.25Z"
                />
            </g>
            <defs>
                <clipPath id="clip0_959_999">
                    <rect width="24" height="24" />
                </clipPath>
            </defs>
        </svg>
    `;
};
