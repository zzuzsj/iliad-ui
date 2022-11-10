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
export const CropIcon = (): string | TemplateResult => {
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
                d="M4.25 5.75V16C4.25 18.0711 5.92893 19.75 8 19.75H18.25V22H19.75V19.75H22V18.25H19.75V8C19.75 5.92893 18.0711 4.25 16 4.25H5.75V2H4.25V4.25H2V5.75H4.25ZM5.75 5.75V16C5.75 17.2426 6.75736 18.25 8 18.25H18.25V8C18.25 6.75736 17.2426 5.75 16 5.75H5.75Z"
            />
        </svg>
    `;
};
