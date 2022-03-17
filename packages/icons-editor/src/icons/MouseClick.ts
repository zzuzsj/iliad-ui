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
export const MouseClickIcon = (): string | TemplateResult => {
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
                d="M4.75002 9C4.75002 6.65279 6.65281 4.75 9.00002 4.75C11.3472 4.75 13.25 6.65279 13.25 9H14.75C14.75 5.82436 12.1757 3.25 9.00002 3.25C5.82438 3.25 3.25002 5.82436 3.25002 9C3.25002 12.1756 5.82438 14.75 9.00002 14.75V13.25C6.65281 13.25 4.75002 11.3472 4.75002 9ZM9.48762 8.72323C9.22263 8.64259 8.93477 8.71455 8.73891 8.91041C8.54306 9.10627 8.47109 9.39413 8.55174 9.65911L12.4142 22.3501C12.505 22.6486 12.7712 22.8596 13.0825 22.8801C13.3939 22.9005 13.6854 22.7261 13.8145 22.442L16.457 16.6285L22.2705 13.986C22.5546 13.8569 22.729 13.5654 22.7086 13.254C22.6881 12.9427 22.4771 12.6765 22.1786 12.5857L9.48762 8.72323ZM15.2078 15.7518L13.2709 20.0131L10.3962 10.5677L19.8416 13.4424L15.5803 15.3793C15.4152 15.4544 15.2829 15.5867 15.2078 15.7518Z"
            />
        </svg>
    `;
};
