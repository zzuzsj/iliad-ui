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
export const EyeIcon = (): string | TemplateResult => {
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
                d="M22.5095 13.342C18.1794 4.68172 5.82064 4.68172 1.49048 13.342L1.32918 13.6646L2.67082 14.3355L2.83212 14.0129C6.60949 6.45811 17.3905 6.45811 21.1679 14.0129L21.3292 14.3355L22.6708 13.6646L22.5095 13.342ZM12 18C13.6569 18 15 16.6569 15 15C15 13.3432 13.6569 12 12 12C10.3431 12 9 13.3432 9 15C9 16.6569 10.3431 18 12 18Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
