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
export const LayoutVertIcon = (): string | TemplateResult => {
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
                d="M5 19.25C4.30964 19.25 3.75 18.6904 3.75 18L3.75 16C3.75 15.3096 4.30964 14.75 5 14.75L19 14.75C19.6904 14.75 20.25 15.3096 20.25 16L20.25 18C20.25 18.6904 19.6904 19.25 19 19.25L5 19.25ZM2.25 18C2.25 19.5188 3.48122 20.75 5 20.75L19 20.75C20.5188 20.75 21.75 19.5188 21.75 18L21.75 16C21.75 14.4812 20.5188 13.25 19 13.25L5 13.25C3.48122 13.25 2.25 14.4812 2.25 16L2.25 18ZM5 9.25C4.30964 9.25 3.75 8.69036 3.75 8L3.75 6C3.75 5.30964 4.30964 4.75 5 4.75L19 4.75C19.6904 4.75 20.25 5.30964 20.25 6L20.25 8C20.25 8.69036 19.6904 9.25 19 9.25L5 9.25ZM2.25 8C2.25 9.51878 3.48122 10.75 5 10.75L19 10.75C20.5188 10.75 21.75 9.51878 21.75 8L21.75 6C21.75 4.48122 20.5188 3.25 19 3.25L5 3.25C3.48122 3.25 2.25 4.48122 2.25 6L2.25 8Z"
            />
        </svg>
    `;
};
