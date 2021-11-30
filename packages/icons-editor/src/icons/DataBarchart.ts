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
export const DataBarchartIcon = (): string | TemplateResult => {
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
                d="M14.0303 13.0303L21.5303 5.53034L20.4697 4.46968L13.5 11.4393L10.0303 7.96967C9.88967 7.82902 9.69891 7.75 9.49999 7.75C9.30108 7.75 9.11032 7.82902 8.96966 7.96967L2.46967 14.4697L3.53033 15.5303L9.5 9.56066L12.9697 13.0303C13.2626 13.3232 13.7374 13.3232 14.0303 13.0303ZM20 20.25H4V21.75H20V20.25Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
