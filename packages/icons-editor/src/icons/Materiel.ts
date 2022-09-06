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
export const MaterielIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_439_552)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.75 6C3.75 4.75736 4.75736 3.75 6 3.75L9 3.75L15 3.75L18 3.75C19.2426 3.75 20.25 4.75736 20.25 6L20.25 11.25L3.75 11.25L3.75 6ZM3.75 12.75L3.75 18C3.75 19.2426 4.75736 20.25 6 20.25L9 20.25L15 20.25L18 20.25C19.2426 20.25 20.25 19.2426 20.25 18L20.25 12.75L3.75 12.75ZM6 2.25C3.92893 2.25 2.25 3.92893 2.25 6L2.25 18C2.25 20.0711 3.92893 21.75 6 21.75L9 21.75L15 21.75L18 21.75C20.0711 21.75 21.75 20.0711 21.75 18L21.75 6C21.75 3.92893 20.0711 2.25 18 2.25L15 2.25L9 2.25L6 2.25ZM8.5 7.5C8.5 8.19036 7.94036 8.75 7.25 8.75C6.55964 8.75 6 8.19036 6 7.5C6 6.80964 6.55964 6.25 7.25 6.25C7.94036 6.25 8.5 6.80964 8.5 7.5ZM7.25 17.75C7.94036 17.75 8.5 17.1904 8.5 16.5C8.5 15.8096 7.94036 15.25 7.25 15.25C6.55964 15.25 6 15.8096 6 16.5C6 17.1904 6.55964 17.75 7.25 17.75Z"
                />
            </g>
            <defs>
                <clipPath id="clip0_439_552">
                    <rect width="24" height="24" />
                </clipPath>
            </defs>
        </svg>
    `;
};
