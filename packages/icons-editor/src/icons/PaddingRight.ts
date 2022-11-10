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
export const PaddingRightIcon = (): string | TemplateResult => {
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
                d="M21.75 20L21.75 4L20.25 4L20.25 20L21.75 20ZM16.75 14.5C16.75 15.7426 15.7426 16.75 14.5 16.75L9.5 16.75C8.25736 16.75 7.25 15.7426 7.25 14.5L7.25 9.5C7.25 8.25736 8.25736 7.25 9.5 7.25L14.5 7.25C15.7426 7.25 16.75 8.25736 16.75 9.5L16.75 14.5ZM14.5 15.25C14.9142 15.25 15.25 14.9142 15.25 14.5L15.25 9.5C15.25 9.08579 14.9142 8.75 14.5 8.75L9.5 8.75C9.08579 8.75 8.75 9.08579 8.75 9.5L8.75 14.5C8.75 14.9142 9.08579 15.25 9.5 15.25L14.5 15.25Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
