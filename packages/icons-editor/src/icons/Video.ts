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
export const SvgVideo = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 2.25C3.92893 2.25 2.25 3.92893 2.25 6V18C2.25 20.0711 3.92893 21.75 6 21.75H18C20.0711 21.75 21.75 20.0711 21.75 18V6C21.75 3.92893 20.0711 2.25 18 2.25H6ZM3.75 6C3.75 4.75736 4.75736 3.75 6 3.75H18C19.2426 3.75 20.25 4.75736 20.25 6V18C20.25 19.2426 19.2426 20.25 18 20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V6ZM9 9.61803V14.382C9 15.1253 9.78231 15.6088 10.4472 15.2764L15.2111 12.8944C15.9482 12.5259 15.9482 11.4741 15.2111 11.1056L10.4472 8.72361C9.78231 8.39116 9 8.87465 9 9.61803Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
