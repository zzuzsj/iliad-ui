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
export const WrapIcon = (): string | TemplateResult => {
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
                d="M2.25 20V4H3.75V20H2.25ZM8.81066 15.25L10.5303 13.5303L9.46967 12.4697L6.46967 15.4697C6.17678 15.7626 6.17678 16.2374 6.46967 16.5303L9.46967 19.5303L10.5303 18.4697L8.81066 16.75H12.5C15.3995 16.75 17.75 14.3995 17.75 11.5C17.75 8.6005 15.3995 6.25 12.5 6.25H7V7.75H12.5C14.5711 7.75 16.25 9.42893 16.25 11.5C16.25 13.5711 14.5711 15.25 12.5 15.25H8.81066ZM20.25 4V20H21.75V4H20.25Z"
            />
        </svg>
    `;
};
