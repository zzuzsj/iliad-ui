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
export const EditIcon = (): string | TemplateResult => {
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
                d="M19.5998 2.65901C18.7211 1.78033 17.2965 1.78033 16.4178 2.65901L15.7624 3.31448L15.5332 3.54359L2.35742 16.7194C2.22365 16.8532 2.14537 17.0326 2.13828 17.2216L2.00053 20.8949C1.99271 21.1035 2.07212 21.3058 2.21967 21.4534C2.36722 21.6009 2.56958 21.6803 2.77811 21.6725L6.45139 21.5348C6.64045 21.5277 6.81984 21.4494 6.95362 21.3156L20.1294 8.13978L20.3586 7.91067L21.014 7.2552C21.8927 6.37652 21.8927 4.9519 21.014 4.07322L19.5998 2.65901ZM15.7624 5.4358L3.6262 17.572L3.52977 20.1433L6.10107 20.0468L18.2372 7.91067L15.7624 5.4358Z"
            />
        </svg>
    `;
};
