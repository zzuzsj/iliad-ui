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
export const AlertFillIcon = (): string | TemplateResult => {
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
                d="M12 1.25C12.2613 1.25 12.5037 1.38597 12.64 1.60891L23.64 19.6089C23.7814 19.8404 23.7869 20.1302 23.6541 20.3669C23.5214 20.6035 23.2713 20.75 23 20.75H1C0.728705 20.75 0.478559 20.6035 0.345854 20.3669C0.213148 20.1302 0.218572 19.8404 0.360039 19.6089L11.36 1.60891C11.4963 1.38597 11.7387 1.25 12 1.25ZM11.25 13V7.5H12.75V13H11.25ZM12 17.5C12.6904 17.5 13.25 16.9404 13.25 16.25C13.25 15.5596 12.6904 15 12 15C11.3096 15 10.75 15.5596 10.75 16.25C10.75 16.9404 11.3096 17.5 12 17.5Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
