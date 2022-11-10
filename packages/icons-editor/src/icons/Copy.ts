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
export const CopyIcon = (): string | TemplateResult => {
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
                d="M18 15H16.5V16.5H18C19.6569 16.5 21 15.1569 21 13.5V5.5C21 3.84315 19.6569 2.5 18 2.5H11.5C9.84315 2.5 8.5 3.84315 8.5 5.5V6.5H10V5.5C10 4.67157 10.6716 4 11.5 4H18C18.8284 4 19.5 4.67157 19.5 5.5V13.5C19.5 14.3284 18.8284 15 18 15ZM12.5 20H6C5.17157 20 4.5 19.3284 4.5 18.5V10.5C4.5 9.67157 5.17157 9 6 9H12.5C13.3284 9 14 9.67157 14 10.5V18.5C14 19.3284 13.3284 20 12.5 20ZM3 10.5C3 8.84315 4.34315 7.5 6 7.5H12.5C14.1569 7.5 15.5 8.84315 15.5 10.5V18.5C15.5 20.1569 14.1569 21.5 12.5 21.5H6C4.34315 21.5 3 20.1569 3 18.5V10.5Z"
            />
        </svg>
    `;
};
