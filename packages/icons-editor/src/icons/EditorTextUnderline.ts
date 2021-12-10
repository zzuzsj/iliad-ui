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
export const EditorTextUnderlineIcon = (): string | TemplateResult => {
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
                d="M6.75 3V11.25C6.75 14.0114 8.98858 16.25 11.75 16.25C14.5114 16.25 16.75 14.0114 16.75 11.25V3H15.25V11.25C15.25 13.183 13.683 14.75 11.75 14.75C9.817 14.75 8.25 13.183 8.25 11.25V3H6.75ZM4 20.75H20V19.25H4V20.75Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
