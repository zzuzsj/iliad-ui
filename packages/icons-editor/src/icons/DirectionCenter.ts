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
export const DirectionCenterIcon = (): string | TemplateResult => {
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
                d="M9 19.25L5.81067 19.25L10.5303 14.5303L9.46966 13.4697L4.75 18.1894L4.75 15L3.25 15V20C3.25 20.1989 3.32902 20.3897 3.46967 20.5304C3.61033 20.671 3.80109 20.75 4.00001 20.75L9.00001 20.75L9 19.25ZM20 3.25001L15 3.25L15 4.75L18.1893 4.75001L13.4697 9.46968L14.5303 10.5303L19.25 5.81067L19.25 9L20.75 9L20.75 4.00001C20.75 3.5858 20.4142 3.25002 20 3.25001ZM9 4.75003L5.81067 4.75001L10.5303 9.46968L9.46968 10.5303L4.75 5.81066L4.75 9.00002L3.25 9.00002V4C3.25 3.80109 3.32902 3.61032 3.46967 3.46967C3.61033 3.32902 3.80109 3.25 4.00001 3.25L9.00001 3.25003L9 4.75003ZM20 20.75L15 20.75L15 19.25L18.1893 19.25L13.4697 14.5303L14.5303 13.4697L19.25 18.1893L19.25 15L20.75 15L20.75 20C20.75 20.4142 20.4142 20.75 20 20.75Z"
            />
        </svg>
    `;
};
