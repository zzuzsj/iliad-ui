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
export const TagIcon = (): string | TemplateResult => {
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
                d="M12 16.398L18.5 18.8355V6C18.5 5.17157 17.8284 4.5 17 4.5H7C6.17157 4.5 5.5 5.17157 5.5 6V18.8355L12 16.398ZM19.3244 20.7467L12 18L4.67556 20.7467C4.34869 20.8692 4 20.6276 4 20.2785V6C4 4.34315 5.34315 3 7 3H17C18.6569 3 20 4.34315 20 6V20.2785C20 20.6276 19.6513 20.8692 19.3244 20.7467Z"
            />
        </svg>
    `;
};
