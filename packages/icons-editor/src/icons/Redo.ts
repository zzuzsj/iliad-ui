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
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.1893 11.7803L14.9697 16L16.0303 17.0607L21.5303 11.5607C21.8232 11.2678 21.8232 10.7929 21.5303 10.5L16.0303 5L14.9697 6.06066L19.1893 10.2803L10.9 10.2803C6.12274 10.2803 2.25 14.1531 2.25 18.9303L2.25 19.0303L3.75 19.0303L3.75 18.9303C3.75 14.9815 6.95116 11.7803 10.9 11.7803L19.1893 11.7803Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
