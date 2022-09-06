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
export const FormatIndentIncreaseIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_20_135)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.31066 3.96973L8.31066 7.96973C8.60355 8.26262 8.60355 8.73749 8.31066 9.03039L4.31066 13.0304L3.25 11.9697L6.71967 8.50006L3.25 5.03039L4.31066 3.96973ZM12 5.75006H21V4.25006H12V5.75006ZM12 12.7501H21V11.2501H12V12.7501ZM21 18.2501V19.7501H3V18.2501H21Z"
                />
            </g>
            <defs>
                <clipPath id="clip0_20_135">
                    <rect width="24" height="24" />
                </clipPath>
            </defs>
        </svg>
    `;
};
