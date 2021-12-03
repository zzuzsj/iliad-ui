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
export const EditorViewDayIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18 3L18 22L20 22L20 3L18 3ZM10 5L14 5L14 20L10 20L10 5ZM8 4L8 21C8 21.55 8.45 22 9 22L15 22C15.55 22 16 21.55 16 21L16 4C16 3.45 15.55 3 15 3L9 3C8.45 3 8 3.45 8 4ZM4 3L4 22L6 22L6 3L4 3Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
