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
export const SvgTextBold = (): string | TemplateResult => {
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
                d="M8.49998 17.5V13H12.5H13.25C14.49 13 15.5 14.009 15.5 15.25C15.5 16.491 14.49 17.5 13.25 17.5H8.49998ZM8.49998 6.5H12.5C13.603 6.5 14.5 7.397 14.5 8.5C14.5 9.603 13.603 10.5 12.5 10.5H8.49998V6.5ZM17 8.5C17 6.015 14.985 4 12.5 4H6V10.5V13V20H13.25C15.873 20 18 17.874 18 15.25C18 13.633 17.188 12.209 15.955 11.352C16.598 10.573 17 9.588 17 8.5Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
