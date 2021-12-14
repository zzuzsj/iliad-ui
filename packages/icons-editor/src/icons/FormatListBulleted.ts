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
export const FormatListBulletedIcon = (): string | TemplateResult => {
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
                d="M4 6.5C4.82843 6.5 5.5 5.82843 5.5 5C5.5 4.17157 4.82843 3.5 4 3.5C3.17157 3.5 2.5 4.17157 2.5 5C2.5 5.82843 3.17157 6.5 4 6.5ZM4 13.5C4.82843 13.5 5.5 12.8284 5.5 12C5.5 11.1716 4.82843 10.5 4 10.5C3.17157 10.5 2.5 11.1716 2.5 12C2.5 12.8284 3.17157 13.5 4 13.5ZM5.5 19C5.5 19.8284 4.82843 20.5 4 20.5C3.17157 20.5 2.5 19.8284 2.5 19C2.5 18.1716 3.17157 17.5 4 17.5C4.82843 17.5 5.5 18.1716 5.5 19ZM9 5.75H21V4.25H9V5.75ZM9 12.75H21V11.25H9V12.75ZM21 19.75H9V18.25H21V19.75Z"
            />
        </svg>
    `;
};
