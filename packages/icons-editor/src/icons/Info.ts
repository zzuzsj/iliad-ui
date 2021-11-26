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
export const SvgInfo = (): string | TemplateResult => {
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
                d="M2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM11.25 11.5H10V10H12C12.4142 10 12.75 10.3358 12.75 10.75V17.5H14V19H12H10V17.5H11.25V11.5ZM12 8.25C12.6904 8.25 13.25 7.69036 13.25 7C13.25 6.30964 12.6904 5.75 12 5.75C11.3096 5.75 10.75 6.30964 10.75 7C10.75 7.69036 11.3096 8.25 12 8.25Z"
                fill="#1F1F1F"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM11.25 11.5H10V10H12C12.4142 10 12.75 10.3358 12.75 10.75V17.5H14V19H12H10V17.5H11.25V11.5ZM12 8.25C12.6904 8.25 13.25 7.69036 13.25 7C13.25 6.30964 12.6904 5.75 12 5.75C11.3096 5.75 10.75 6.30964 10.75 7C10.75 7.69036 11.3096 8.25 12 8.25Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
