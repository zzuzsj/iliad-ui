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
export const TextScaleIcon = (): string | TemplateResult => {
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
                d="M11.1782 2.67975C11.0543 2.41737 10.7902 2.25 10.5 2.25C10.2099 2.25 9.94574 2.41737 9.82184 2.67975L1.32184 20.6797L2.67821 21.3203L5.30861 15.75H10.6294C11.0026 15.054 11.3752 14.5733 11.7422 14.25H6.01694L10.5 4.75641L14.9026 14.0795C15.5196 14.286 16.0341 14.3699 16.3936 13.7242L11.1782 2.67975ZM21.7011 10.75L16.7011 10.75L16.7011 12.25L19.8904 12.25L12.25 19.8904L12.25 16.701L10.75 16.701L10.75 21.701C10.75 22.1152 11.0858 22.451 11.5 22.451L16.7011 22.451L16.7011 20.951H13.3107L20.9511 13.3107V16.701L22.4511 16.701V11.5C22.4511 11.0858 22.1153 10.75 21.7011 10.75Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
