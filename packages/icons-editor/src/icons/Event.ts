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
export const EventIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_905_809)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.1872 3.81281C20.3881 4.01368 20.4582 4.31081 20.3684 4.58031L14.7115 21.5509C14.6094 21.8571 14.3228 22.0637 14 22.0637C13.6772 22.0637 13.3906 21.8571 13.2885 21.5509L10.5786 13.4213L2.44913 10.7115C2.14287 10.6094 1.9363 10.3228 1.9363 10C1.9363 9.67718 2.14287 9.39057 2.44913 9.28849L19.4197 3.63162C19.6892 3.54179 19.9863 3.61193 20.1872 3.81281ZM5.05801 10L11.4087 12.1169C11.6327 12.1916 11.8084 12.3673 11.8831 12.5912L14 18.942L18.471 5.52899L5.05801 10Z"
                />
            </g>
            <defs>
                <clipPath id="clip0_905_809">
                    <rect width="24" height="24" />
                </clipPath>
            </defs>
        </svg>
    `;
};
