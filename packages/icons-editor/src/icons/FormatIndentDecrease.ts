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
export const FormatIndentDecreaseIcon = (): string | TemplateResult => {
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
                d="M6.46967 3.96967L2.46967 7.96967C2.17678 8.26256 2.17678 8.73743 2.46967 9.03033L6.46967 13.0303L7.53033 11.9697L4.06066 8.5L7.53033 5.03033L6.46967 3.96967ZM12 5.75H21V4.25H12V5.75ZM12 12.75H21V11.25H12V12.75ZM21 18.25V19.75H3V18.25H21Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
