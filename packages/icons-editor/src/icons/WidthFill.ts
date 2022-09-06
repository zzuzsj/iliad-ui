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
export const WidthFillIcon = (): string | TemplateResult => {
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
                d="M17.5303 7.46973L21.5303 11.4697C21.671 11.6104 21.75 11.8011 21.75 12.0001C21.75 12.199 21.671 12.3897 21.5303 12.5304L17.5303 16.5304L16.4697 15.4697L19.9393 12.0001L16.4697 8.53039L17.5303 7.46973ZM6.46967 7.46973L2.46967 11.4697C2.32902 11.6104 2.25 11.8011 2.25 12.0001C2.25 12.199 2.32902 12.3897 2.46967 12.5304L6.46967 16.5304L7.53033 15.4697L4.06066 12.0001L7.53033 8.53039L6.46967 7.46973Z"
            />
        </svg>
    `;
};
