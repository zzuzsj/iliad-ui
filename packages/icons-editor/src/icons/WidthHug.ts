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
export const WidthHugIcon = (): string | TemplateResult => {
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
                d="M20.4697 7.46973L16.4697 11.4697C16.329 11.6104 16.25 11.8011 16.25 12.0001C16.25 12.199 16.329 12.3897 16.4697 12.5304L20.4697 16.5304L21.5303 15.4697L18.0607 12.0001L21.5303 8.53039L20.4697 7.46973ZM3.53036 7.46973L7.53036 11.4697C7.67101 11.6104 7.75003 11.8011 7.75003 12.0001C7.75003 12.199 7.67101 12.3897 7.53036 12.5304L3.53036 16.5304L2.4697 15.4697L5.93937 12.0001L2.4697 8.53039L3.53036 7.46973Z"
            />
        </svg>
    `;
};
