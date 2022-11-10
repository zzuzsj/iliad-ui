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
export const LabelDIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.44151 5.14795V18H11.9055C13.9215 18 15.4695 17.406 16.5495 16.236C17.5755 15.12 18.0975 13.5539 18.0975 11.5739C18.0975 9.55795 17.6115 7.99195 16.6575 6.91195C15.6135 5.72395 14.0835 5.14795 12.0495 5.14795H7.44151ZM8.91751 6.42595H11.8155C13.5075 6.42595 14.7315 6.85795 15.5235 7.73995C16.2615 8.56795 16.6395 9.84595 16.6395 11.5739C16.6395 13.2479 16.2255 14.5259 15.4335 15.3899C14.5875 16.2719 13.3275 16.722 11.6535 16.722H8.91751V6.42595Z"
            />
        </svg>
    `;
};
