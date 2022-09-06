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
export const GlobalIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4M4 4V20M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20M4 4L20 4M20 4V20M20 4C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20M20 20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20M20 20H4M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                stroke="#B4B8BF"
                stroke-width="0.1"
                stroke-linecap="square"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.77997 11.25C3.10844 7.15621 6.10236 3.81443 10.0251 2.9613C8.41949 4.99166 7.40079 7.96769 7.26543 11.25H2.77997ZM2.77997 12.75C3.10844 16.8438 6.10236 20.1856 10.0251 21.0387C8.41949 19.0083 7.40079 16.0323 7.26543 12.75H2.77997ZM8.76665 12.75C8.9274 16.3549 10.2362 19.3616 12 20.9692C13.7638 19.3616 15.0726 16.3549 15.2333 12.75H8.76665ZM16.7346 12.75C16.5992 16.0323 15.5805 19.0083 13.9749 21.0387C17.8976 20.1856 20.8916 16.8438 21.22 12.75H16.7346ZM21.22 11.25H16.7346C16.5992 7.96769 15.5805 4.99166 13.9749 2.9613C17.8976 3.81443 20.8916 7.15621 21.22 11.25ZM15.2333 11.25H8.76665C8.9274 7.64509 10.2362 4.63841 12 3.03083C13.7638 4.63841 15.0726 7.64509 15.2333 11.25ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z"
            />
        </svg>
    `;
};
