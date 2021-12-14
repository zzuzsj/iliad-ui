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
export const ColorpickerIcon = (): string | TemplateResult => {
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
                d="M15.9859 3.73746C17.2551 2.46825 19.3129 2.46825 20.5821 3.73746C21.8513 5.00666 21.8513 7.06445 20.5821 8.33365L16.3802 12.5356L18.0303 14.1857L16.9697 15.2464L15.3195 13.5962L7.33367 21.5821C7.16869 21.747 6.93634 21.8258 6.70504 21.7953L6.69776 21.7943L6.67343 21.7912C6.65175 21.7884 6.61938 21.7844 6.57775 21.7793C6.49445 21.7692 6.3743 21.755 6.22857 21.7393C5.93621 21.7078 5.54507 21.6703 5.14405 21.6454C4.73841 21.6202 4.3433 21.6093 4.03586 21.6263C3.88059 21.6349 3.7711 21.6494 3.70372 21.6647L3.69856 21.6658C3.40593 21.8716 2.9991 21.8437 2.73748 21.5821C2.47585 21.3204 2.44792 20.9136 2.65369 20.621L2.65488 20.6158C2.67011 20.5484 2.68466 20.4389 2.69323 20.2837C2.7102 19.9762 2.69934 19.5811 2.67417 19.1755C2.64928 18.7745 2.61177 18.3833 2.58023 18.091C2.56451 17.9452 2.55038 17.8251 2.54024 17.7418C2.53518 17.7002 2.53111 17.6678 2.52835 17.6461L2.52523 17.6218L2.5243 17.6147M2.64227 20.6602C2.64227 20.6602 2.64336 20.6559 2.64635 20.6489C2.64391 20.6569 2.64227 20.6602 2.64227 20.6602ZM4.19986 20.1197C4.2062 19.7864 4.19241 19.4229 4.17129 19.0826C4.14453 18.6514 4.10459 18.2361 4.07158 17.9301C4.06617 17.88 4.06094 17.8327 4.05597 17.7887L11.784 10.0607L14.2589 12.5356L6.53085 20.2636C6.4868 20.2586 6.43953 20.2534 6.38945 20.248C6.08344 20.215 5.66817 20.175 5.23694 20.1482C4.89659 20.1271 4.53311 20.1133 4.19986 20.1197ZM11.8446 8L10.0303 6.18571L8.96967 7.24637L10.8033 9.08003M3.67064 21.6732C3.66363 21.6762 3.65935 21.6773 3.65935 21.6773C3.65935 21.6773 3.66258 21.6756 3.67064 21.6732Z"
            />
        </svg>
    `;
};
