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
export const StopCircleIcon = (): string | TemplateResult => {
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
                d="M18.9298 4.8692C15.1222 1.06159 8.87777 1.06159 5.07016 4.8692C1.30545 8.6339 1.2626 14.7791 5.035 18.5515L5.10571 18.6222L6.16637 17.5616L6.09566 17.4909C2.91672 14.3119 2.94419 9.11648 6.13082 5.92986C9.35264 2.70803 14.6474 2.70803 17.8692 5.92986C21.0558 9.11648 21.0833 14.3119 17.9043 17.4909L17.8336 17.5616L18.8943 18.6222L18.965 18.5515C22.7374 14.7791 22.6946 8.6339 18.9298 4.8692ZM15.4697 17.4697L12.75 20.1894L12.75 10H11.25L11.25 20.1894L8.53033 17.4697L7.46967 18.5303L11.4697 22.5303C11.7626 22.8232 12.2374 22.8232 12.5303 22.5303L16.5303 18.5303L15.4697 17.4697Z"
            />
        </svg>
    `;
};
