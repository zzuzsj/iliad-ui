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
export const HeightHugIcon = (): string | TemplateResult => {
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
                d="M8.85356 16.1464L11.6465 13.3536C11.8417 13.1583 12.1583 13.1583 12.3536 13.3536L15.1465 16.1464C15.4614 16.4614 15.2384 17 14.7929 17L12.75 17L12.75 22L11.25 22L11.25 17L9.20712 17C8.76167 17 8.53858 16.4614 8.85356 16.1464ZM8.85356 7.85355L11.6465 10.6464C11.8417 10.8417 12.1583 10.8417 12.3536 10.6464L15.1465 7.85355C15.4614 7.53857 15.2384 7 14.7929 7L12.75 7L12.75 2L11.25 2L11.25 7L9.20712 7C8.76167 7 8.53858 7.53857 8.85356 7.85355Z"
            />
        </svg>
    `;
};
