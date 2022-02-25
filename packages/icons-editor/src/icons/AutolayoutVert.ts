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
export const AutolayoutVertIcon = (): string | TemplateResult => {
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
                d="M3.75 15.5C3.75 15.0858 4.08579 14.75 4.5 14.75L9 14.75L15 14.75L19.5 14.75C19.9142 14.75 20.25 15.0858 20.25 15.5L20.25 18.5C20.25 18.9142 19.9142 19.25 19.5 19.25L15 19.25L9 19.25L4.5 19.25C4.08579 19.25 3.75 18.9142 3.75 18.5L3.75 15.5ZM4.5 13.25C3.25736 13.25 2.25 14.2574 2.25 15.5L2.25 18.5C2.25 19.7426 3.25736 20.75 4.5 20.75L9 20.75L15 20.75L19.5 20.75C20.7426 20.75 21.75 19.7426 21.75 18.5L21.75 15.5C21.75 14.2574 20.7426 13.25 19.5 13.25L15 13.25L9 13.25L4.5 13.25ZM3.75 5.5C3.75 5.08579 4.08579 4.75 4.5 4.75L9 4.75L15 4.75L19.5 4.75C19.9142 4.75 20.25 5.08579 20.25 5.5L20.25 8.5C20.25 8.91421 19.9142 9.25 19.5 9.25L15 9.25L9 9.25L4.5 9.25C4.08579 9.25 3.75 8.91421 3.75 8.5L3.75 5.5ZM4.5 3.25C3.25736 3.25 2.25 4.25736 2.25 5.5L2.25 8.5C2.25 9.74264 3.25736 10.75 4.5 10.75L9 10.75L15 10.75L19.5 10.75C20.7426 10.75 21.75 9.74264 21.75 8.5L21.75 5.5C21.75 4.25736 20.7426 3.25 19.5 3.25L15 3.25L9 3.25L4.5 3.25Z"
            />
        </svg>
    `;
};
