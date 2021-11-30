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
export const FileFolderIcon = (): string | TemplateResult => {
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
                d="M6 3.75C4.75736 3.75 3.75 4.75736 3.75 6V18C3.75 19.2426 4.75736 20.25 6 20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V10C20.25 8.75736 19.2426 7.75 18 7.75H15.618C14.9552 7.75 14.3492 7.3755 14.0528 6.78262L12.6056 3.8882C12.5632 3.8035 12.4767 3.75 12.382 3.75H6ZM2.25 6C2.25 3.92893 3.92893 2.25 6 2.25H12.382C13.0448 2.25 13.6508 2.6245 13.9472 3.21738L15.3944 6.1118C15.4368 6.1965 15.5233 6.25 15.618 6.25H18C20.0711 6.25 21.75 7.92893 21.75 10V18C21.75 20.0711 20.0711 21.75 18 21.75H6C3.92893 21.75 2.25 20.0711 2.25 18V6Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
