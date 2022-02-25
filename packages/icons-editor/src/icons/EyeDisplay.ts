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
export const EyeDisplayIcon = (): string | TemplateResult => {
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
                d="M14.857 15.9177L20.4697 21.5303L21.5303 20.4697L3.53031 2.46967L2.46965 3.53033L6.91895 7.97962C4.693 9.03277 2.75136 10.8202 1.49046 13.342L1.32916 13.6646L2.6708 14.3355L2.8321 14.0129C4.02369 11.6297 5.91223 9.99828 8.058 9.11867L11.0823 12.143C9.87432 12.5307 8.99998 13.6633 8.99998 15C8.99998 16.6569 10.3431 18 12 18C13.3368 18 14.4693 17.1257 14.857 15.9177ZM10.1503 6.98965L11.5185 8.35782C15.3151 8.18384 19.1959 10.0689 21.1679 14.0129L21.3292 14.3355L22.6708 13.6646L22.5095 13.342C20.0233 8.36971 14.8906 6.25225 10.1503 6.98965Z"
            />
        </svg>
    `;
};
