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
export const SvgTune = (): string | TemplateResult => {
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
                d="M14 5.25C13.0335 5.25 12.25 6.0335 12.25 7C12.25 7.9665 13.0335 8.75 14 8.75C14.9665 8.75 15.75 7.9665 15.75 7C15.75 6.0335 14.9665 5.25 14 5.25ZM10.837 6.25C11.1755 4.81665 12.4632 3.75 14 3.75C15.5368 3.75 16.8245 4.81665 17.163 6.25H21V7.75H17.163C16.8245 9.18335 15.5368 10.25 14 10.25C12.4632 10.25 11.1755 9.18335 10.837 7.75H3V6.25H10.837ZM10 15.25C9.0335 15.25 8.25 16.0335 8.25 17C8.25 17.9665 9.0335 18.75 10 18.75C10.9665 18.75 11.75 17.9665 11.75 17C11.75 16.0335 10.9665 15.25 10 15.25ZM6.83697 16.25C7.17555 14.8166 8.46321 13.75 10 13.75C11.5368 13.75 12.8245 14.8166 13.163 16.25H21V17.75H13.163C12.8245 19.1834 11.5368 20.25 10 20.25C8.46321 20.25 7.17555 19.1834 6.83697 17.75H3V16.25H6.83697Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
