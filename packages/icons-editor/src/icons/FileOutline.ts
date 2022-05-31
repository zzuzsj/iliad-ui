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
export const FileOutlineIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22.75 18C22.75 19.5188 21.5188 20.75 20 20.75H4C2.48122 20.75 1.25 19.5188 1.25 18V6C1.25 4.48122 2.48122 3.25 4 3.25H9.71208C10.7108 3.25 11.631 3.79145 12.116 4.66448L12.4413 5.25H20C21.5188 5.25 22.75 6.48122 22.75 8V18ZM2.75 6V18C2.75 18.6904 3.30964 19.25 4 19.25H20C20.6904 19.25 21.25 18.6904 21.25 18V11C21.25 10.3096 20.6904 9.75 20 9.75H13.2254L10.8048 5.39295C10.5843 4.99611 10.166 4.75 9.71208 4.75H4C3.30964 4.75 2.75 5.30964 2.75 6ZM21.25 8.54985V8C21.25 7.30964 20.6904 6.75 20 6.75H13.2746L14.108 8.25H20C20.4501 8.25 20.875 8.35814 21.25 8.54985Z"
            />
        </svg>
    `;
};
