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
export const EaseincubicIcon = (): string | TemplateResult => {
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
                d="M20.0508 4.36075C20.2237 3.83238 20.3982 3.29928 20.577 2.76283L22 3.23717C21.8249 3.7625 21.6523 4.29127 21.4794 4.82112C20.1946 8.75851 18.8902 12.7557 16.3699 15.8488C13.4469 19.436 8.9607 21.75 1.28849 21.75V20.25C8.61628 20.25 12.63 18.064 15.2071 14.9012C17.5377 12.0409 18.7506 8.33434 20.0508 4.36075Z"
            />
        </svg>
    `;
};
