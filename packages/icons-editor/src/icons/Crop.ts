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
export const CropIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5 9.25H17V7.75H5V9.25ZM18.25 10.5V16.5H19.75V10.5H18.25ZM18.25 18.5V23.5H19.75V18.5H18.25ZM17 9.25C17.6903 9.25 18.25 9.80964 18.25 10.5H19.75C19.75 8.98122 18.5187 7.75 17 7.75V9.25Z"
            />
            <path
                d="M23 17.75H11V19.25H23V17.75ZM9.75 16.5V10.5H8.25V16.5H9.75ZM9.75 8.5V4.5H8.25V8.5H9.75ZM11 17.75C10.3096 17.75 9.75 17.1904 9.75 16.5H8.25C8.25 18.0188 9.48122 19.25 11 19.25V17.75Z"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.5 0.899902L16 2.9999L19.5 5.0999V0.899902ZM19.9244 3.6861C20.2362 3.76947 20.5372 3.87959 20.8247 4.01388L21.2479 3.10785C20.9079 2.949 20.5517 2.81868 20.1826 2.72002L19.9244 3.6861ZM21.6546 4.49396C21.9171 4.67814 22.1629 4.88471 22.3891 5.11091L23.0962 4.40381C22.8292 4.13678 22.539 3.89286 22.2288 3.67531L21.6546 4.49396ZM23.006 5.84544C23.1891 6.10642 23.35 6.38395 23.4861 6.67528L24.3922 6.25206C24.2312 5.90748 24.041 5.57945 23.8247 5.27115L23.006 5.84544ZM23.8139 7.57564C23.8954 7.88052 23.9514 8.19598 23.9793 8.5197L24.9756 8.43361C24.9426 8.05131 24.8764 7.67825 24.78 7.3174L23.8139 7.57564ZM7.1753 22.9861C7.4628 23.1204 7.76378 23.2305 8.07566 23.3139L7.81743 24.28C7.44831 24.1813 7.09216 24.051 6.75208 23.8921L7.1753 22.9861ZM5.61094 21.8891C5.83714 22.1153 6.08291 22.3219 6.34546 22.506L5.77118 23.3247C5.46105 23.1071 5.17086 22.8632 4.90383 22.5962L5.61094 21.8891ZM4.5139 20.3247C4.64999 20.6161 4.81091 20.8936 4.99399 21.1546L4.17533 21.7288C3.95906 21.4206 3.76883 21.0925 3.60788 20.7479L4.5139 20.3247ZM4.02068 18.4803C4.04865 18.804 4.10463 19.1195 4.18612 19.4244L3.22004 19.6826C3.12358 19.3218 3.05742 18.9487 3.02439 18.5664L4.02068 18.4803ZM8.50002 26.1L12 24L8.50002 21.9001V26.1Z"
            />
        </svg>
    `;
};
