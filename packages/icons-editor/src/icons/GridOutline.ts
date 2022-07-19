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
export const GridOutlineIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9 2.25C9.41421 2.25 9.75 2.58579 9.75 3L9.75 8.25H14.25V3C14.25 2.58579 14.5858 2.25 15 2.25C15.4142 2.25 15.75 2.58579 15.75 3V8.25H21C21.4142 8.25 21.75 8.58579 21.75 9C21.75 9.41421 21.4142 9.75 21 9.75H15.75L15.75 14.25H21C21.4142 14.25 21.75 14.5858 21.75 15C21.75 15.4142 21.4142 15.75 21 15.75H15.75V21C15.75 21.4142 15.4142 21.75 15 21.75C14.5858 21.75 14.25 21.4142 14.25 21V15.75H9.75L9.75 21C9.75 21.4142 9.41421 21.75 9 21.75C8.58579 21.75 8.25 21.4142 8.25 21L8.25 15.75H3C2.58579 15.75 2.25 15.4142 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25H8.25V9.75H3C2.58579 9.75 2.25 9.41421 2.25 9C2.25 8.58579 2.58579 8.25 3 8.25H8.25L8.25 3C8.25 2.58579 8.58579 2.25 9 2.25ZM9.75 9.75V14.25H14.25L14.25 9.75H9.75Z"
            />
        </svg>
    `;
};
