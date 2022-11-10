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
export const CornerIcon = (): string | TemplateResult => {
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
                d="M6 2.25C3.92893 2.25 2.25 3.92893 2.25 6V9H3.75V6C3.75 4.75736 4.75736 3.75 6 3.75H9V2.25H6ZM18 21.75C20.0711 21.75 21.75 20.0711 21.75 18V15H20.25V18C20.25 19.2426 19.2426 20.25 18 20.25H15V21.75H18ZM2.25 18C2.25 20.0711 3.92893 21.75 6 21.75H9V20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V15H2.25V18ZM18 2.25C20.0711 2.25 21.75 3.92893 21.75 6V9H20.25V6C20.25 4.75736 19.2426 3.75 18 3.75H15V2.25H18Z"
            />
        </svg>
    `;
};
