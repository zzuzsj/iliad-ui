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
export const RedoIcon = (): string | TemplateResult => {
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
                d="M19.1893 11.75L14.9697 15.9697L16.0303 17.0303L21.5303 11.5303C21.8232 11.2374 21.8232 10.7626 21.5303 10.4697L16.0303 4.96967L14.9697 6.03033L19.1893 10.25H10.9C6.12274 10.25 2.25 14.1227 2.25 18.9V19H3.75V18.9C3.75 14.9512 6.95116 11.75 10.9 11.75H19.1893Z"
            />
        </svg>
    `;
};
