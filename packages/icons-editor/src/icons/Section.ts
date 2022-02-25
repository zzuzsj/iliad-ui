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
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 19.25L2.25 19.25L2.25 20.75L3 20.75L21 20.75L21.75 20.75L21.75 19.25L21 19.25L3 19.25ZM4.5 8.75C4.08579 8.75 3.75 9.08579 3.75 9.5L3.75 14.5C3.75 14.9142 4.08579 15.25 4.5 15.25L9 15.25L15 15.25L19.5 15.25C19.9142 15.25 20.25 14.9142 20.25 14.5L20.25 9.5C20.25 9.08579 19.9142 8.75 19.5 8.75L15 8.75L9 8.75L4.5 8.75ZM2.25 9.5C2.25 8.25736 3.25736 7.25 4.5 7.25L9 7.25L15 7.25L19.5 7.25C20.7426 7.25 21.75 8.25736 21.75 9.5L21.75 14.5C21.75 15.7426 20.7426 16.75 19.5 16.75L15 16.75L9 16.75L4.5 16.75C3.25736 16.75 2.25 15.7426 2.25 14.5L2.25 9.5ZM2.25 3.25L3 3.25L21 3.25L21.75 3.25L21.75 4.75L21 4.75L3 4.75L2.25 4.75L2.25 3.25Z"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 19.25L2.25 19.25L2.25 20.75L3 20.75L21 20.75L21.75 20.75L21.75 19.25L21 19.25L3 19.25ZM4.5 8.75C4.08579 8.75 3.75 9.08579 3.75 9.5L3.75 14.5C3.75 14.9142 4.08579 15.25 4.5 15.25L9 15.25L15 15.25L19.5 15.25C19.9142 15.25 20.25 14.9142 20.25 14.5L20.25 9.5C20.25 9.08579 19.9142 8.75 19.5 8.75L15 8.75L9 8.75L4.5 8.75ZM2.25 9.5C2.25 8.25736 3.25736 7.25 4.5 7.25L9 7.25L15 7.25L19.5 7.25C20.7426 7.25 21.75 8.25736 21.75 9.5L21.75 14.5C21.75 15.7426 20.7426 16.75 19.5 16.75L15 16.75L9 16.75L4.5 16.75C3.25736 16.75 2.25 15.7426 2.25 14.5L2.25 9.5ZM2.25 3.25L3 3.25L21 3.25L21.75 3.25L21.75 4.75L21 4.75L3 4.75L2.25 4.75L2.25 3.25Z"
            />
        </svg>
    `;
};
