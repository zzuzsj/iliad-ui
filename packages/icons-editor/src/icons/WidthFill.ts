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
export const WidthFillIcon = (): string | TemplateResult => {
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
                d="M1.35355 11.6465L4.14645 8.85356C4.46143 8.53858 5 8.76167 5 9.20712V11.25H19V9.20712C19 8.76167 19.5386 8.53858 19.8536 8.85356L22.6464 11.6465C22.8417 11.8417 22.8417 12.1583 22.6464 12.3536L19.8536 15.1465C19.5386 15.4614 19 15.2384 19 14.7929V12.75H5V14.7929C5 15.2384 4.46143 15.4614 4.14645 15.1465L1.35355 12.3536C1.15829 12.1583 1.15829 11.8417 1.35355 11.6465Z"
            />
        </svg>
    `;
};
