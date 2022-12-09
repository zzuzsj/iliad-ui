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
export const LoadingWhiteStaticIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_922_764)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z"
                    fill="url(#paint0_angular_922_764)"
                />
            </g>
            <defs>
                <radialGradient
                    id="paint0_angular_922_764"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(12 12) rotate(-90) scale(9.55556)"
                >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                </radialGradient>
                <clipPath id="clip0_922_764">
                    <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="matrix(1 0 0 -1 0 24)"
                    />
                </clipPath>
            </defs>
        </svg>
    `;
};
