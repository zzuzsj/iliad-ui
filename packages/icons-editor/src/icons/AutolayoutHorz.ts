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
export const AutolayoutHorzIcon = (): string | TemplateResult => {
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
                d="M8.5 3.75C8.91421 3.75 9.25 4.08579 9.25 4.5L9.25 9V15L9.25 19.5C9.25 19.9142 8.91421 20.25 8.5 20.25H5.5C5.08579 20.25 4.75 19.9142 4.75 19.5L4.75 15L4.75 9L4.75 4.5C4.75 4.08579 5.08579 3.75 5.5 3.75L8.5 3.75ZM10.75 4.5C10.75 3.25736 9.74264 2.25 8.5 2.25H5.5C4.25736 2.25 3.25 3.25736 3.25 4.5V9V15V19.5C3.25 20.7426 4.25736 21.75 5.5 21.75H8.5C9.74264 21.75 10.75 20.7426 10.75 19.5V15L10.75 9V4.5ZM18.5 3.75C18.9142 3.75 19.25 4.08579 19.25 4.5V9V15V19.5C19.25 19.9142 18.9142 20.25 18.5 20.25H15.5C15.0858 20.25 14.75 19.9142 14.75 19.5V15L14.75 9V4.5C14.75 4.08579 15.0858 3.75 15.5 3.75L18.5 3.75ZM20.75 4.5C20.75 3.25736 19.7426 2.25 18.5 2.25H15.5C14.2574 2.25 13.25 3.25736 13.25 4.5V9L13.25 15V19.5C13.25 20.7426 14.2574 21.75 15.5 21.75H18.5C19.7426 21.75 20.75 20.7426 20.75 19.5V15V9V4.5Z"
            />
        </svg>
    `;
};
