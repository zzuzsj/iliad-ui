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
export const TextDeletelineIcon = (): string | TemplateResult => {
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
                d="M8.2569 9.1371L8.92464 10.25H21V11.75H3V10.25H7.17536L6.97066 9.90884C6.4991 9.1229 6.25 8.22358 6.25 7.30702C6.25 4.51411 8.51411 2.25 11.307 2.25H12.5C15.3995 2.25 17.75 4.60051 17.75 7.5V8H16.25V7.5C16.25 5.42893 14.5711 3.75 12.5 3.75H11.307C9.34253 3.75 7.75 5.34253 7.75 7.30702C7.75 7.95171 7.92521 8.58428 8.2569 9.1371ZM17.75 16.693C17.75 15.7764 17.5009 14.8771 17.0293 14.0911L15.7431 14.8629C16.0748 15.4157 16.25 16.0483 16.25 16.693C16.25 18.6575 14.6575 20.25 12.693 20.25H11.5C9.42893 20.25 7.75 18.5711 7.75 16.5V16H6.25V16.5C6.25 19.3995 8.6005 21.75 11.5 21.75H12.693C15.4859 21.75 17.75 19.4859 17.75 16.693Z"
            />
        </svg>
    `;
};
