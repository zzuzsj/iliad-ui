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
export const DirectionDownIcon = (): string | TemplateResult => {
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
                d="M18.53 15.5303L12.53 21.5303C12.2371 21.8232 11.7622 21.8232 11.4693 21.5303L5.46934 15.5303L6.53 14.4697L11.2497 19.1893L11.2497 3L12.7497 3L12.7497 19.1893L17.4693 14.4697L18.53 15.5303Z"
            />
        </svg>
    `;
};
