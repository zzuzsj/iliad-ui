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
export const FormatPacingLinesIcon = (): string | TemplateResult => {
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
                d="M19 1.25H5V2.75L19 2.75V1.25ZM19 21.25H5V22.75H19V21.25ZM11.7492 5.2501C12.052 5.24498 12.3281 5.42243 12.4493 5.69995L17.6874 17.7L16.3126 18.3L14.763 14.75L9.09658 14.75L7.69712 18.2766L6.30288 17.7234L11.0648 5.72336C11.1765 5.4419 11.4465 5.25522 11.7492 5.2501ZM9.69181 13.25L11.7949 7.95027L14.1082 13.25L9.69181 13.25Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
