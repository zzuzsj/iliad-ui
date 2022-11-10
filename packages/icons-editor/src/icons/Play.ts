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
export const PlayIcon = (): string | TemplateResult => {
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
                d="M5.63048 2.34735C5.86561 2.21422 6.15417 2.21786 6.38587 2.35688L21.3859 11.3569C21.6118 11.4924 21.75 11.7366 21.75 12C21.75 12.2634 21.6118 12.5076 21.3859 12.6431L6.38587 21.6431C6.15417 21.7821 5.86561 21.7858 5.63048 21.6526C5.39534 21.5195 5.25 21.2702 5.25 21V3C5.25 2.7298 5.39534 2.48048 5.63048 2.34735ZM6.75 4.32464V19.6754L19.5423 12L6.75 4.32464Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
