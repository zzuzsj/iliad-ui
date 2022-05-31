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
export const ContainerIcon = (): string | TemplateResult => {
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
                d="M6.25 17.75V21.5H7.75V17.75L16.25 17.75V21.5H17.75V17.75H21.5V16.25H17.75V7.75H21.5V6.25H17.75V2.5H16.25V6.25L7.75 6.25V2.5H6.25V6.25H2.5V7.75H6.25V16.25H2.5V17.75H6.25ZM7.75 16.25L16.25 16.25V7.75L7.75 7.75V16.25Z"
            />
        </svg>
    `;
};
