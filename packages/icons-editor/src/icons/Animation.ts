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
export const AnimationIcon = (): string | TemplateResult => {
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
                d="M7.75 12C7.75 7.99594 10.9959 4.75 15 4.75C19.0041 4.75 22.25 7.99594 22.25 12C22.25 16.0041 19.0041 19.25 15 19.25C10.9959 19.25 7.75 16.0041 7.75 12ZM15 3.25C10.1675 3.25 6.25 7.16751 6.25 12C6.25 16.8325 10.1675 20.75 15 20.75C19.8325 20.75 23.75 16.8325 23.75 12C23.75 7.16751 19.8325 3.25 15 3.25ZM1.75 12C1.75 8.95855 3.62306 6.35279 6.28141 5.27672L5.71859 3.88631C2.51328 5.18378 0.25 8.32668 0.25 12C0.25 15.6733 2.51328 18.8162 5.71859 20.1137L6.28141 18.7233C3.62306 17.6472 1.75 15.0414 1.75 12Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
