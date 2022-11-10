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
export const FormatAlignMediumIcon = (): string | TemplateResult => {
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
                d="M16.5303 4.53033L12.5303 8.53033C12.2374 8.82322 11.7626 8.82322 11.4697 8.53033L7.46967 4.53033L8.53033 3.46967L11.25 6.18934L11.25 1H12.75L12.75 6.18934L15.4697 3.46967L16.5303 4.53033ZM16.5303 19.4697L12.5303 15.4697C12.2374 15.1768 11.7626 15.1768 11.4697 15.4697L7.46967 19.4697L8.53033 20.5303L11.25 17.8107L11.25 23H12.75L12.75 17.8107L15.4697 20.5303L16.5303 19.4697ZM20 11.25H4V12.75H20V11.25Z"
            />
        </svg>
    `;
};
