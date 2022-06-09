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
export const ImportIcon = (): string | TemplateResult => {
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
                d="M12.5303 18.5303L18.5303 12.5303L17.4697 11.4697L12.75 16.1893L12.75 3H11.25L11.25 16.1893L6.53033 11.4697L5.46967 12.5303L11.4697 18.5303C11.7626 18.8232 12.2374 18.8232 12.5303 18.5303ZM20 20.25H4V21.75H20V20.25Z"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.5303 18.5303L18.5303 12.5303L17.4697 11.4697L12.75 16.1893L12.75 3H11.25L11.25 16.1893L6.53033 11.4697L5.46967 12.5303L11.4697 18.5303C11.7626 18.8232 12.2374 18.8232 12.5303 18.5303ZM20 20.25H4V21.75H20V20.25Z"
            />
        </svg>
    `;
};
