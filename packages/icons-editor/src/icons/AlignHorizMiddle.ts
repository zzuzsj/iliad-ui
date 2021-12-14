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
export const AlignHorizMiddleIcon = (): string | TemplateResult => {
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
                d="M14 11.25L10 11.25L10 4L7 4L7 11.25L3 11.25L3 12.75L7 12.75L7 20L10 20L10 12.75L14 12.75L14 16L17 16L17 12.75L21 12.75L21 11.25L17 11.25L17 8L14 8L14 11.25Z"
            />
        </svg>
    `;
};
