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
export const HomeIcon = (): string | TemplateResult => {
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
                d="M10.7519 3.73343C11.5077 3.22958 12.4923 3.22958 13.2481 3.73343L19.2481 7.73343C19.874 8.15073 20.25 8.85325 20.25 9.60555V18C20.25 19.2426 19.2426 20.25 18 20.25H12.75V15H11.25V20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V9.60555C3.75 8.85325 4.12598 8.15073 4.75192 7.73343L10.7519 3.73343ZM14.0801 2.48536C12.8205 1.64561 11.1795 1.64561 9.91987 2.48536L3.91987 6.48536C2.87663 7.18085 2.25 8.35172 2.25 9.60555V18C2.25 20.0711 3.92893 21.75 6 21.75H18C20.0711 21.75 21.75 20.0711 21.75 18V9.60555C21.75 8.35172 21.1234 7.18085 20.0801 6.48536L14.0801 2.48536Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
