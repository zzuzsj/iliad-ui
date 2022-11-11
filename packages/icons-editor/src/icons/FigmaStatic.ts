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
export const FigmaStaticIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_1405_1016)">
                <path
                    d="M12 2H15.5C17.433 2 19 3.567 19 5.5C19 7.433 17.433 9 15.5 9H12V2Z"
                    fill="#FF7262"
                />
                <path
                    d="M12 12.5C12 10.567 13.567 9 15.5 9C17.433 9 19 10.567 19 12.5C19 14.433 17.433 16 15.5 16C13.567 16 12 14.433 12 12.5Z"
                    fill="#1ABCFE"
                />
                <path
                    d="M12 2H8.5C6.567 2 5 3.567 5 5.5C5 7.433 6.567 9 8.5 9H12V2Z"
                    fill="#F24E1E"
                />
                <path
                    d="M12 9H8.5C6.567 9 5 10.567 5 12.5C5 14.433 6.567 16 8.5 16H12V9Z"
                    fill="#A259FF"
                />
                <path
                    d="M12 16H8.5C6.567 16 5 17.567 5 19.5C5 21.433 6.567 23 8.5 23C10.433 23 12 21.433 12 19.5V16Z"
                    fill="#0ACF83"
                />
            </g>
            <defs>
                <clipPath id="clip0_1405_1016">
                    <rect
                        width="14"
                        height="21"
                        fill="white"
                        transform="translate(5 2)"
                    />
                </clipPath>
            </defs>
        </svg>
    `;
};
