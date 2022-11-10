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
export const SkewIcon = (): string | TemplateResult => {
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
                d="M19.3329 4.99634C18.8821 3.37326 17.4043 2.25 15.7198 2.25L2.97347 2.25C1.4855 2.25 0.407312 3.66851 0.805559 5.1022L4.66708 19.0037C5.11793 20.6267 6.59574 21.75 8.28027 21.75L21.0266 21.75C22.5145 21.75 23.5927 20.3315 23.1945 18.8978L19.3329 4.99634ZM15.7198 3.75C16.7305 3.75 17.6172 4.42396 17.8877 5.3978L21.7492 19.2993C21.8819 19.7772 21.5225 20.25 21.0266 20.25L8.28027 20.25C7.26955 20.25 6.38287 19.576 6.11235 18.6022L2.25084 4.70073C2.11809 4.22284 2.47748 3.75 2.97347 3.75L15.7198 3.75Z"
            />
        </svg>
    `;
};
