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
export const EditorPageFooterIcon = (): string | TemplateResult => {
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
                d="M3.25 19C3.25 21.0711 4.92893 22.75 7 22.75H17C19.0711 22.75 20.75 21.0711 20.75 19V18V5C20.75 2.92893 19.0711 1.25 17 1.25H7C4.92893 1.25 3.25 2.92893 3.25 5V18V19ZM4.75 17.25V5C4.75 3.75736 5.75736 2.75 7 2.75H17C18.2426 2.75 19.25 3.75736 19.25 5V17.25H4.75ZM19.25 18.75H4.75V19C4.75 20.2426 5.75736 21.25 7 21.25H17C18.2426 21.25 19.25 20.2426 19.25 19V18.75Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
