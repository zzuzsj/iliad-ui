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
export const WidthHugIcon = (): string | TemplateResult => {
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
                d="M7.85355 8.85356L10.6464 11.6465C10.8417 11.8417 10.8417 12.1583 10.6464 12.3536L7.85355 15.1465C7.53857 15.4614 7 15.2384 7 14.7929V12.75H2V11.25H7V9.20712C7 8.76167 7.53857 8.53858 7.85355 8.85356ZM16.1464 8.85356L13.3536 11.6465C13.1583 11.8417 13.1583 12.1583 13.3536 12.3536L16.1464 15.1465C16.4614 15.4614 17 15.2384 17 14.7929V12.75H22V11.25H17V9.20712C17 8.76167 16.4614 8.53858 16.1464 8.85356Z"
            />
        </svg>
    `;
};
