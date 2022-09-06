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
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.7519 3.73342C11.5077 3.22957 12.4923 3.22957 13.2481 3.73342L19.2481 7.73342C19.874 8.15071 20.25 8.85324 20.25 9.60553V18C20.25 19.2426 19.2426 20.25 18 20.25H12.75V15H11.25V20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V9.60553C3.75 8.85324 4.12598 8.15071 4.75192 7.73342L10.7519 3.73342ZM14.0801 2.48534C12.8205 1.64559 11.1795 1.64559 9.91987 2.48534L3.91987 6.48534C2.87663 7.18084 2.25 8.35171 2.25 9.60553V18C2.25 20.071 3.92893 21.75 6 21.75H18C20.0711 21.75 21.75 20.071 21.75 18V9.60553C21.75 8.35171 21.1234 7.18084 20.0801 6.48534L14.0801 2.48534Z"
            />
        </svg>
    `;
};
