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
export const DesktopIcon = (): string | TemplateResult => {
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
                d="M5 2.25C2.92893 2.25 1.25 3.92893 1.25 6V15C1.25 17.0711 2.92893 18.75 5 18.75H19C21.0711 18.75 22.75 17.0711 22.75 15V6C22.75 3.92893 21.0711 2.25 19 2.25H5ZM2.75 6C2.75 4.75736 3.75736 3.75 5 3.75H19C20.2426 3.75 21.25 4.75736 21.25 6V15C21.25 16.2426 20.2426 17.25 19 17.25H5C3.75736 17.25 2.75 16.2426 2.75 15V6ZM8 21.75H16V20.25H8V21.75Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
