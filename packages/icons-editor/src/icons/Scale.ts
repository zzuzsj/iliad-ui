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
export const ScaleIcon = (): string | TemplateResult => {
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
                d="M18 2.25C20.0711 2.25 21.75 3.92893 21.75 6V12V18C21.75 20.0711 20.0711 21.75 18 21.75H12H6C3.92893 21.75 2.25 20.0711 2.25 18V6C2.25 3.92893 3.92893 2.25 6 2.25L18 2.25ZM12.75 20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V12.75H13.5C13.0858 12.75 12.75 13.0858 12.75 13.5V20.25ZM20.25 11.25H13.5C12.2574 11.25 11.25 12.2574 11.25 13.5V20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V6C3.75 4.75736 4.75736 3.75 6 3.75L18 3.75C19.2426 3.75 20.25 4.75736 20.25 6V11.25Z"
            />
        </svg>
    `;
};
