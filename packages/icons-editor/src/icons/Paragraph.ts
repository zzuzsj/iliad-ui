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
export const ParagraphIcon = (): string | TemplateResult => {
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
                d="M6.25 4C6.25 3.58579 6.58579 3.25 7 3.25H13.5C16.6756 3.25 19.25 5.82436 19.25 9C19.25 12.1756 16.6756 14.75 13.5 14.75H7.75V22H6.25V4ZM7.75 13.25H13.5C15.8472 13.25 17.75 11.3472 17.75 9C17.75 6.65279 15.8472 4.75 13.5 4.75H7.75V13.25Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
