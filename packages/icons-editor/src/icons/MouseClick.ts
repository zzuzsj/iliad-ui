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
export const MouseClickIcon = (): string | TemplateResult => {
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
                d="M3.75 9C3.75 6.10051 6.10051 3.75 9 3.75C11.7538 3.75 14.0124 5.87026 14.2324 8.56738L15.6539 9H15.75C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7088 5.24114 15.719 8.94266 15.7498L8.47843 14.2244C5.82379 13.9626 3.75 11.7235 3.75 9ZM8.8441 8.91042C9.03996 8.71457 9.32782 8.6426 9.5928 8.72325L22.2838 12.5857C22.5997 12.6819 22.8156 12.9735 22.8154 13.3038C22.8151 13.6341 22.5988 13.9253 22.2827 14.021L15.8902 15.9565L13.9547 22.349C13.859 22.6652 13.5677 22.8815 13.2374 22.8817C12.9071 22.8819 12.6156 22.6661 12.5194 22.3501L8.65692 9.65912C8.57628 9.39414 8.64824 9.10628 8.8441 8.91042ZM13.235 19.5497L14.5709 15.1377C14.6435 14.8977 14.8313 14.7099 15.0714 14.6372L19.4834 13.3014L10.5014 10.5677L13.235 19.5497Z"
            />
        </svg>
    `;
};
