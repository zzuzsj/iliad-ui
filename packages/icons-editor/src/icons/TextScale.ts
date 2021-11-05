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
export const SvgTextScale = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.4713 5H9.52874L4 19H6.49425L7.68965 15.9565H13.5435L15.8767 13.6233L12.4713 5ZM8.64384 13.5217L11.0002 7.55647L13.3565 13.5217H8.64384Z"
                fill="#1F1F1F"
            />
            <path
                d="M20.1931 14.4319L21.8807 16.1194L21.8751 11.6249L17.3806 11.6193L19.0681 13.3069L13.4317 18.9433L11.7442 17.2557L11.7498 21.7502L16.2443 21.7558L14.5567 20.0683L20.1931 14.4319Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
