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
export const RotateLeftIcon = (): string | TemplateResult => {
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
                d="M12.4697 11.5304L7.46967 6.53039C7.17678 6.23749 7.17678 5.76262 7.46967 5.46973L12.4697 0.469727L13.5303 1.53039L10.7172 4.34352C11.1361 4.28193 11.5645 4.25006 12 4.25006C16.8325 4.25006 20.75 8.16756 20.75 13.0001C20.75 17.5799 17.2314 21.3379 12.75 21.7184V21.7501H12C11.535 21.7501 11.0779 21.7137 10.6317 21.6436L10.8645 20.1618C11.2341 20.2198 11.6132 20.2501 12 20.2501C16.0041 20.2501 19.25 17.0041 19.25 13.0001C19.25 8.99599 16.0041 5.75006 12 5.75006C11.1093 5.75006 10.2578 5.91033 9.47148 6.20296C9.41648 6.22342 9.36061 6.23703 9.3048 6.24419L13.5303 10.4697L12.4697 11.5304ZM4.75 12.2501V13.0001C4.75 13.3868 4.78022 13.766 4.83829 14.1355L3.35647 14.3684C3.28634 13.9221 3.25 13.4651 3.25 13.0001V12.2501H4.75ZM5.2 18.5071C4.62692 17.8002 4.16154 17.0018 3.82927 16.1369L5.22952 15.599C5.50443 16.3146 5.88982 16.9761 6.36516 17.5624L5.2 18.5071ZM8.86321 21.1708C7.99822 20.8385 7.19982 20.3731 6.49299 19.8001L7.43767 18.6349C8.02394 19.1102 8.68541 19.4956 9.40108 19.7705L8.86321 21.1708Z"
            />
        </svg>
    `;
};
