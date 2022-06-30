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
export const LayoutWrapIcon = (): string | TemplateResult => {
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
                d="M2.5 5.75C2.5 3.67893 4.17893 2 6.25 2L18.25 2C20.3211 2 22 3.67893 22 5.75L22 17.75C22 19.8211 20.3211 21.5 18.25 21.5L6.25 21.5C4.17893 21.5 2.5 19.8211 2.5 17.75L2.5 5.75ZM6.25 3.5C5.00736 3.5 4 4.50736 4 5.75L4 11L13.5 11L13.5 3.5L6.25 3.5ZM15 3.5L15 11L20.5 11V5.75C20.5 4.50736 19.4926 3.5 18.25 3.5L15 3.5ZM20.5 12.5L11 12.5L11 20L18.25 20C19.4926 20 20.5 18.9926 20.5 17.75L20.5 12.5ZM9.5 20L9.5 12.5L4 12.5L4 17.75C4 18.9926 5.00736 20 6.25 20H9.5Z"
            />
        </svg>
    `;
};
