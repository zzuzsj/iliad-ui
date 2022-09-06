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
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.46967 3.96973L2.46967 7.96973C2.17678 8.26262 2.17678 8.73749 2.46967 9.03039L6.46967 13.0304L7.53033 11.9697L4.06066 8.50006L7.53033 5.03039L6.46967 3.96973ZM12 5.75006H21V4.25006H12V5.75006ZM12 12.7501H21V11.2501H12V12.7501ZM21 18.2501V19.7501H3V18.2501H21Z"
            />
        </svg>
    `;
};
