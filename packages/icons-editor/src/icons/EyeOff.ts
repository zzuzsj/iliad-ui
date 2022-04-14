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
export const EyeOffIcon = (): string | TemplateResult => {
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
                d="M2.83212 9.98719L2.67082 9.6646L1.32918 10.3354L1.49048 10.658C2.33139 12.3398 3.47508 13.6951 4.80396 14.7237C4.57416 15.52 3.80195 16.0635 2.9479 15.9777L2.79796 17.4702C4.22097 17.6131 5.52163 16.8154 6.08226 15.5818C7.67457 16.5017 9.45106 17.0178 11.25 17.1299V20H12.75V17.1299C14.5489 17.0178 16.3254 16.5017 17.9177 15.5818C18.4784 16.8154 19.779 17.6131 21.202 17.4702L21.0521 15.9777C20.1981 16.0635 19.4258 15.52 19.196 14.7237C20.5249 13.6951 21.6686 12.3398 22.5095 10.658L22.6708 10.3354L21.3292 9.6646L21.1679 9.98719C17.3905 17.5419 6.60949 17.5419 2.83212 9.98719Z"
            />
        </svg>
    `;
};
