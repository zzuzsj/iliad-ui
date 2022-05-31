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
export const FixedIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_490_565)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.616 3.67827C15.5113 3.02993 16.745 3.128 17.5266 3.90964L19.9604 6.34339C20.742 7.12504 20.8401 8.35871 20.1918 9.25403L13.8924 17.9531L15.5615 19.6222L14.5009 20.6829L9.37436 15.5563L3.18718 21.7435L2.12652 20.6829L8.3137 14.4957L3.18718 9.36916L4.24784 8.3085L5.91693 9.9776L14.616 3.67827ZM6.99108 11.0517L12.8183 16.879L18.164 9.49676L14.3733 5.70602L6.99108 11.0517Z"
                />
            </g>
            <defs>
                <clipPath id="clip0_490_565">
                    <rect width="24" height="24" />
                </clipPath>
            </defs>
        </svg>
    `;
};
