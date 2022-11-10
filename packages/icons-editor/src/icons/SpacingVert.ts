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
export const SpacingVertIcon = (): string | TemplateResult => {
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
                d="M2 12.75L22 12.75L22 11.25L2 11.25L2 12.75ZM4.25 22L4.25 19.5C4.25 18.2574 5.25736 17.25 6.5 17.25L17.5 17.25C18.7426 17.25 19.75 18.2574 19.75 19.5L19.75 22L18.25 22L18.25 19.5C18.25 19.0858 17.9142 18.75 17.5 18.75L6.5 18.75C6.08579 18.75 5.75 19.0858 5.75 19.5L5.75 22L4.25 22ZM5.75 4.5C5.75 4.91421 6.08579 5.25 6.5 5.25L17.5 5.25C17.9142 5.25 18.25 4.91421 18.25 4.5L18.25 2L19.75 2L19.75 4.5C19.75 5.74264 18.7426 6.75 17.5 6.75L6.5 6.75C5.25736 6.75 4.25 5.74264 4.25 4.5L4.25 2L5.75 2L5.75 4.5Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
