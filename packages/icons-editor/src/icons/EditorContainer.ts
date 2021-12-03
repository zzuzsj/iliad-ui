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
export const EditorContainerIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15 21H17V19H15V21ZM19 21H21V19H19V21ZM7 21H9V19H7V21ZM11 21H13V19H11V21ZM19 17H21V15H19V17ZM19 13H21V11H19V13ZM19 9H21V7H19V9Z"
                fill="#1F1F1F"
            />
            <path d="M5 21H3V19H5V21Z" fill="#1F1F1F" />
            <path d="M5 17H3V15H5V17Z" fill="#1F1F1F" />
            <path d="M5 13H3V11H5V13Z" fill="#1F1F1F" />
            <path d="M5 9H3V7H5V9Z" fill="#1F1F1F" />
            <path d="M21 5H19V3H21V5Z" fill="#1F1F1F" />
            <path d="M5 5H3V3H5V5Z" fill="#1F1F1F" />
            <path d="M17 5H15V3H17V5Z" fill="#1F1F1F" />
            <path d="M9 5H7V3H9V5Z" fill="#1F1F1F" />
            <path d="M13 5H11V3H13V5Z" fill="#1F1F1F" />
        </svg>
    `;
};
