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
export const SmartphoneIcon = (): string | TemplateResult => {
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
                d="M9 1.25C6.92893 1.25 5.25 2.92893 5.25 5V19C5.25 21.0711 6.92893 22.75 9 22.75H15C17.0711 22.75 18.75 21.0711 18.75 19V5C18.75 2.92893 17.0711 1.25 15 1.25H9ZM6.75 5C6.75 3.75736 7.75736 2.75 9 2.75H15C16.2426 2.75 17.25 3.75736 17.25 5V19C17.25 20.2426 16.2426 21.25 15 21.25H9C7.75736 21.25 6.75 20.2426 6.75 19V5ZM10.5 19.75H13.5V18.25H10.5V19.75Z"
            />
        </svg>
    `;
};
