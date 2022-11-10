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
export const EaseoutBackIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.09753 7.3255C7.80155 3.41256 10.2321 0.24995 14.2227 0.24995C16.5959 0.24995 18.3155 0.780359 19.6772 1.29908C19.9687 1.41013 20.2274 1.51378 20.4681 1.61025C20.8107 1.7475 21.117 1.87023 21.43 1.97908C21.9374 2.15558 22.3453 2.24995 22.7227 2.24995V3.74995C22.1 3.74995 21.5079 3.59432 20.9372 3.39582C20.6029 3.27955 20.232 3.13141 19.8554 2.98096C19.6177 2.88603 19.3777 2.79017 19.1432 2.70082C17.8798 2.21954 16.3494 1.74995 14.2227 1.74995C11.2132 1.74995 9.14376 4.08734 7.47278 7.9244C6.19897 10.8495 5.25402 14.4196 4.31085 17.983C4.0252 19.0622 3.73971 20.1408 3.4453 21.2007L2.00002 20.7992C2.28135 19.7864 2.55827 18.7396 2.83851 17.6803C3.78694 14.095 4.77338 10.3661 6.09753 7.3255Z"
            />
        </svg>
    `;
};
