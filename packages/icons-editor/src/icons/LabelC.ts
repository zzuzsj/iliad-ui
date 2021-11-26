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
export const SvgLabelC = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.2921 4.896C10.3121 4.896 8.76413 5.562 7.68413 6.93C6.69413 8.154 6.20813 9.72 6.20813 11.628C6.20813 13.536 6.67613 15.084 7.64813 16.272C8.71013 17.586 10.2401 18.252 12.2381 18.252C13.6061 18.252 14.7941 17.856 15.7841 17.082C16.8461 16.254 17.5121 15.084 17.8001 13.59H16.3781C16.1261 14.706 15.6041 15.552 14.8481 16.128C14.1281 16.668 13.2641 16.938 12.2381 16.938C10.7261 16.938 9.59213 16.434 8.80013 15.444C8.04413 14.508 7.68413 13.23 7.68413 11.628C7.68413 10.026 8.06213 8.748 8.81813 7.776C9.62813 6.732 10.7801 6.21 12.2741 6.21C13.2821 6.21 14.1281 6.444 14.8301 6.93C15.5501 7.434 16.0181 8.154 16.1981 9.09H17.6201C17.4401 7.812 16.8641 6.786 15.8921 6.03C14.9201 5.274 13.7141 4.896 12.2921 4.896Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
