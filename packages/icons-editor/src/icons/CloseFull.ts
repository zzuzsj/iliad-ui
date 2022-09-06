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
export const CloseFullIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_52_682)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 11.75L21 11.75V10.25L14.8107 10.25L21.5303 3.53033L20.4697 2.46967L13.75 9.18934V3L12.25 3V11C12.25 11.1989 12.329 11.3897 12.4697 11.5303C12.6103 11.671 12.8011 11.75 13 11.75ZM11 12.25L3 12.25V13.75L9.18933 13.75L2.46967 20.4697L3.53033 21.5303L10.25 14.8107L10.25 21H11.75V13C11.75 12.8011 11.671 12.6103 11.5303 12.4697C11.3897 12.329 11.1989 12.25 11 12.25Z"
                />
            </g>
            <defs>
                <clipPath id="clip0_52_682">
                    <rect width="24" height="24" />
                </clipPath>
            </defs>
        </svg>
    `;
};
