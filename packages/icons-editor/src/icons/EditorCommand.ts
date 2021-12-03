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
export const EditorCommandIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.25 8C5.25 6.48122 6.48122 5.25 8 5.25C9.51878 5.25 10.75 6.48122 10.75 8V9.25H13.25V8C13.25 6.48122 14.4812 5.25 16 5.25C17.5188 5.25 18.75 6.48122 18.75 8C18.75 9.51878 17.5188 10.75 16 10.75H14.75V13.25H16C17.5188 13.25 18.75 14.4812 18.75 16C18.75 17.5188 17.5188 18.75 16 18.75C14.4812 18.75 13.25 17.5188 13.25 16V14.75H10.75V16C10.75 17.5188 9.51878 18.75 8 18.75C6.48122 18.75 5.25 17.5188 5.25 16C5.25 14.4812 6.48122 13.25 8 13.25H9.25V10.75H8C6.48122 10.75 5.25 9.51878 5.25 8ZM9.25 9.25V8C9.25 7.30964 8.69036 6.75 8 6.75C7.30964 6.75 6.75 7.30964 6.75 8C6.75 8.69036 7.30964 9.25 8 9.25H9.25ZM10.75 10.75V13.25H13.25V10.75H10.75ZM9.25 14.75H8C7.30964 14.75 6.75 15.3096 6.75 16C6.75 16.6904 7.30964 17.25 8 17.25C8.69036 17.25 9.25 16.6904 9.25 16V14.75ZM14.75 14.75V16C14.75 16.6904 15.3096 17.25 16 17.25C16.6904 17.25 17.25 16.6904 17.25 16C17.25 15.3096 16.6904 14.75 16 14.75H14.75ZM14.75 9.25H16C16.6904 9.25 17.25 8.69036 17.25 8C17.25 7.30964 16.6904 6.75 16 6.75C15.3096 6.75 14.75 7.30964 14.75 8V9.25Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
