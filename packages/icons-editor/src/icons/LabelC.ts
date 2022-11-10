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
export const LabelCIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.2922 4.896C10.3122 4.896 8.76416 5.562 7.68416 6.93C6.69416 8.154 6.20816 9.72 6.20816 11.628C6.20816 13.536 6.67616 15.084 7.64816 16.272C8.71016 17.586 10.2402 18.252 12.2382 18.252C13.6062 18.252 14.7942 17.856 15.7842 17.082C16.8462 16.254 17.5122 15.084 17.8002 13.59H16.3782C16.1262 14.706 15.6042 15.552 14.8482 16.128C14.1282 16.668 13.2642 16.938 12.2382 16.938C10.7262 16.938 9.59216 16.434 8.80016 15.444C8.04416 14.508 7.68416 13.23 7.68416 11.628C7.68416 10.026 8.06216 8.748 8.81816 7.776C9.62816 6.732 10.7802 6.21 12.2742 6.21C13.2822 6.21 14.1282 6.444 14.8302 6.93C15.5502 7.434 16.0182 8.154 16.1982 9.09H17.6202C17.4402 7.812 16.8642 6.786 15.8922 6.03C14.9202 5.274 13.7142 4.896 12.2922 4.896Z"
            />
        </svg>
    `;
};
