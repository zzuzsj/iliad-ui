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
export const DragHandleIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_24_18)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5 7C13.5 7.82843 14.1716 8.5 15 8.5C15.8284 8.5 16.5 7.82843 16.5 7C16.5 6.17157 15.8284 5.5 15 5.5C14.1716 5.5 13.5 6.17157 13.5 7ZM9 18.5C8.17157 18.5 7.5 17.8284 7.5 17C7.5 16.1716 8.17157 15.5 9 15.5C9.82843 15.5 10.5 16.1716 10.5 17C10.5 17.8284 9.82843 18.5 9 18.5ZM7.5 7C7.5 7.82843 8.17157 8.5 9 8.5C9.82843 8.5 10.5 7.82843 10.5 7C10.5 6.17157 9.82843 5.5 9 5.5C8.17157 5.5 7.5 6.17157 7.5 7ZM7.5 12C7.5 12.8284 8.17157 13.5 9 13.5C9.82843 13.5 10.5 12.8284 10.5 12C10.5 11.1716 9.82843 10.5 9 10.5C8.17157 10.5 7.5 11.1716 7.5 12ZM15 13.5C14.1716 13.5 13.5 12.8284 13.5 12C13.5 11.1716 14.1716 10.5 15 10.5C15.8284 10.5 16.5 11.1716 16.5 12C16.5 12.8284 15.8284 13.5 15 13.5ZM13.5 17C13.5 17.8284 14.1716 18.5 15 18.5C15.8284 18.5 16.5 17.8284 16.5 17C16.5 16.1716 15.8284 15.5 15 15.5C14.1716 15.5 13.5 16.1716 13.5 17Z"
                />
            </g>
            <defs>
                <clipPath id="clip0_24_18">
                    <rect width="24" height="24" />
                </clipPath>
            </defs>
        </svg>
    `;
};
