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
export const EditorFormatIndentIncreaseIcon = (): string | TemplateResult => {
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
                d="M4.31066 3.96967L8.31066 7.96967C8.60355 8.26256 8.60355 8.73743 8.31066 9.03033L4.31066 13.0303L3.25 11.9697L6.71967 8.5L3.25 5.03033L4.31066 3.96967ZM12 5.75H21V4.25H12V5.75ZM12 12.75H21V11.25H12V12.75ZM21 18.25V19.75H3V18.25H21Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
