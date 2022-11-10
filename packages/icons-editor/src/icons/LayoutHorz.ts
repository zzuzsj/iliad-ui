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
export const LayoutHorzIcon = (): string | TemplateResult => {
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
                d="M4.75 5C4.75 4.30964 5.30964 3.75 6 3.75L8 3.75C8.69036 3.75 9.25 4.30964 9.25 5L9.25 19C9.25 19.6904 8.69036 20.25 8 20.25H6C5.30964 20.25 4.75 19.6904 4.75 19L4.75 5ZM6 2.25C4.48122 2.25 3.25 3.48122 3.25 5L3.25 19C3.25 20.5188 4.48122 21.75 6 21.75H8C9.51878 21.75 10.75 20.5188 10.75 19L10.75 5C10.75 3.48122 9.51878 2.25 8 2.25L6 2.25ZM14.75 5C14.75 4.30964 15.3096 3.75 16 3.75L18 3.75C18.6904 3.75 19.25 4.30964 19.25 5L19.25 19C19.25 19.6904 18.6904 20.25 18 20.25H16C15.3096 20.25 14.75 19.6904 14.75 19L14.75 5ZM16 2.25C14.4812 2.25 13.25 3.48122 13.25 5L13.25 19C13.25 20.5188 14.4812 21.75 16 21.75H18C19.5188 21.75 20.75 20.5188 20.75 19L20.75 5C20.75 3.48122 19.5188 2.25 18 2.25H16Z"
            />
        </svg>
    `;
};
