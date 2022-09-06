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
export const LayersIcon = (): string | TemplateResult => {
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
                d="M10.477 2.85617C11.4466 2.42522 12.5534 2.42522 13.523 2.85617L21.3046 6.31465C21.5755 6.43502 21.75 6.70361 21.75 7.00001C21.75 7.2964 21.5755 7.56499 21.3046 7.68536L13.523 11.1438C12.5534 11.5748 11.4466 11.5748 10.477 11.1438L2.6954 7.68536C2.42455 7.56499 2.25 7.2964 2.25 7.00001C2.25 6.70361 2.42455 6.43502 2.6954 6.31465L10.477 2.85617ZM12.9138 4.22688C12.332 3.96832 11.668 3.96832 11.0862 4.22688L4.84666 7.00001L11.0862 9.77313C11.668 10.0317 12.332 10.0317 12.9138 9.77313L19.1533 7.00001L12.9138 4.22688ZM2.61925 16.01L3.30461 16.3146L11.0862 19.7731C11.668 20.0317 12.332 20.0317 12.9138 19.7731L20.6954 16.3146L21.3808 16.01L21.99 17.3808L21.3046 17.6854L13.523 21.1438C12.5534 21.5748 11.4466 21.5748 10.477 21.1438L2.6954 17.6854L2.01004 17.3808L2.61925 16.01ZM3.30461 11.3146L2.61925 11.01L2.01004 12.3808L2.6954 12.6854L10.477 16.1438C11.4466 16.5748 12.5534 16.5748 13.523 16.1438L21.3046 12.6854L21.99 12.3808L21.3808 11.01L20.6954 11.3146L12.9138 14.7731C12.332 15.0317 11.668 15.0317 11.0862 14.7731L3.30461 11.3146Z"
            />
        </svg>
    `;
};
