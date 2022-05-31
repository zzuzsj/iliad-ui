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
export const EaseinoutcubicIcon = (): string | TemplateResult => {
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
                d="M14.7806 5.33553C16.3228 3.46405 18.5408 2.25 22 2.25V3.75C18.9592 3.75 17.1772 4.78595 15.9382 6.28947C14.6837 7.8118 13.9491 9.84756 13.1498 12.0626C13.1267 12.1265 13.1036 12.1905 13.0804 12.2547C12.2759 14.4826 11.3901 16.8749 9.76111 18.6887C8.08721 20.5524 5.68766 21.75 2 21.75V20.25C5.31234 20.25 7.28779 19.1976 8.64514 17.6863C10.0474 16.1251 10.8491 14.0174 11.6696 11.7453C11.7051 11.6469 11.7406 11.5483 11.7763 11.4493C12.5424 9.32307 13.3563 7.06383 14.7806 5.33553Z"
            />
        </svg>
    `;
};
