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
export const EaseoutCubicIcon = (): string | TemplateResult => {
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
                d="M3.94918 19.6392C3.77628 20.1676 3.60184 20.7007 3.42302 21.2372L2 20.7628C2.17511 20.2375 2.34766 19.7087 2.52056 19.1789C3.80543 15.2415 5.10981 11.2443 7.63009 8.15125C10.5531 4.56395 15.0393 2.25 22.7115 2.25V3.75C15.3837 3.75 11.37 5.93605 8.79294 9.09875C6.46228 11.9591 5.24942 15.6657 3.94918 19.6392Z"
            />
        </svg>
    `;
};
