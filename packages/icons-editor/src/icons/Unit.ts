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
export const UnitIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.70946 8.44202C6.30546 8.44202 5.27946 9.03602 4.61346 10.224V8.69402H3.26346V21.564H4.70346V16.308C5.42346 17.604 6.44946 18.252 7.78146 18.252C9.11346 18.252 10.1395 17.748 10.8955 16.776C11.5795 15.876 11.9395 14.742 11.9395 13.374C11.9395 11.97 11.5795 10.836 10.8775 9.93602C10.1035 8.92802 9.04146 8.44202 7.70946 8.44202ZM7.52946 9.63002C8.51946 9.63002 9.27546 9.99002 9.79746 10.746C10.2295 11.394 10.4635 12.276 10.4635 13.374C10.4635 14.49 10.2295 15.372 9.76146 16.02C9.23946 16.704 8.48346 17.064 7.47546 17.064C6.61146 17.064 5.94546 16.722 5.44146 16.074C4.90146 15.408 4.64946 14.544 4.64946 13.464V13.284C4.64946 12.24 4.88346 11.376 5.35146 10.728C5.85546 9.99002 6.59346 9.63002 7.52946 9.63002Z"
            />
            <path
                d="M13.1803 8.69402L16.4743 13.068L12.7843 18H14.4943L17.2843 14.13L20.0563 18H21.7663L18.0763 13.068L21.3703 8.69402H19.6783L17.2843 12.006L14.8723 8.69402H13.1803Z"
            />
        </svg>
    `;
};
