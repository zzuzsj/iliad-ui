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
export const HeightHugIcon = (): string | TemplateResult => {
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
                d="M16.5303 20.4697L12.5303 16.4697C12.3897 16.329 12.1989 16.25 12 16.25C11.8011 16.25 11.6103 16.329 11.4697 16.4697L7.46967 20.4697L8.53033 21.5304L12 18.0607L15.4697 21.5304L16.5303 20.4697ZM16.5303 3.53039L12.5303 7.53039C12.3897 7.67104 12.1989 7.75006 12 7.75006C11.8011 7.75006 11.6103 7.67104 11.4697 7.53039L7.46967 3.53039L8.53033 2.46973L12 5.9394L15.4697 2.46973L16.5303 3.53039Z"
            />
        </svg>
    `;
};
