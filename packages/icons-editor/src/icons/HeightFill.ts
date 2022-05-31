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
export const HeightFillIcon = (): string | TemplateResult => {
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
                d="M11.6464 22.6465L8.85353 19.8536C8.53855 19.5386 8.76164 19 9.20709 19L11.25 19L11.25 5.00002L9.20709 5.00002C8.76164 5.00002 8.53855 4.46144 8.85353 4.14646L11.6464 1.35357C11.8417 1.15831 12.1583 1.15831 12.3535 1.35357L15.1464 4.14646C15.4614 4.46144 15.2383 5.00001 14.7929 5.00001L12.75 5.00002L12.75 19L14.7929 19C15.2383 19 15.4614 19.5386 15.1464 19.8536L12.3535 22.6465C12.1583 22.8417 11.8417 22.8417 11.6464 22.6465Z"
            />
        </svg>
    `;
};
