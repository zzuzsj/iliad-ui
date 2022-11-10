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
export const SpacingHorizIcon = (): string | TemplateResult => {
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
                d="M11.25 2V22H12.75V2H11.25ZM2 4.25H4.5C5.74264 4.25 6.75 5.25736 6.75 6.5V17.5C6.75 18.7426 5.74264 19.75 4.5 19.75H2V18.25H4.5C4.91421 18.25 5.25 17.9142 5.25 17.5V6.5C5.25 6.08579 4.91421 5.75 4.5 5.75H2V4.25ZM19.5 5.75C19.0858 5.75 18.75 6.08579 18.75 6.5V17.5C18.75 17.9142 19.0858 18.25 19.5 18.25H22V19.75H19.5C18.2574 19.75 17.25 18.7426 17.25 17.5V6.5C17.25 5.25736 18.2574 4.25 19.5 4.25H22V5.75H19.5Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
