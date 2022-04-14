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
export const AppearIcon = (): string | TemplateResult => {
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
                d="M5.0822 8.48889C4.73592 8.85666 4.41865 9.25204 4.13402 9.67138L1.45169 6.79745L2.54828 5.77398L5.0822 8.48889ZM11.25 2V5.52917C11.4974 5.50985 11.7476 5.5 12 5.5C12.2524 5.5 12.5025 5.50984 12.75 5.52917V2L11.25 2ZM18.9178 8.48887L21.4517 5.77398L22.5483 6.79745L19.866 9.67135C19.5813 9.25202 19.2641 8.85664 18.9178 8.48887ZM23 18.25V19.75L0.999998 19.75V18.25L23 18.25ZM12 8.75C8.54822 8.75 5.75 11.5482 5.75 15C5.75 15.3404 5.77721 15.6744 5.82957 16H4.31392C4.27174 15.6726 4.25 15.3389 4.25 15C4.25 10.7198 7.71979 7.25 12 7.25C16.2802 7.25 19.75 10.7198 19.75 15C19.75 15.3389 19.7283 15.6726 19.6861 16H18.1704C18.2228 15.6744 18.25 15.3404 18.25 15C18.25 11.5482 15.4518 8.75 12 8.75Z"
            />
        </svg>
    `;
};
