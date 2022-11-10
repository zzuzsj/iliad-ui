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
export const DeleteIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.2969 2.9453C15.1114 2.6671 14.7992 2.5 14.4648 2.5H9.53518C9.20083 2.5 8.8886 2.6671 8.70313 2.9453L8 4H16L15.2969 2.9453Z"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.5 5.5H19.4143L18.6078 19.6141C18.5473 20.6726 17.6713 21.5 16.611 21.5H7.38898C6.32873 21.5 5.45272 20.6726 5.39223 19.6141L4.58571 5.5H3.5V4H20.5V5.5ZM6.08816 5.5H17.9118L17.1102 19.5285C17.0951 19.7932 16.8761 20 16.611 20H7.38898C7.12391 20 6.90491 19.7932 6.88979 19.5285L6.08816 5.5Z"
            />
        </svg>
    `;
};
