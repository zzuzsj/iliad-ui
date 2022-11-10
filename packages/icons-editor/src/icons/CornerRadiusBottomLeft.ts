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
export const CornerRadiusBottomLeftIcon = (): string | TemplateResult => {
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
                d="M18.4399 20.2072C18.2983 20.2352 18.1512 20.25 18 20.25H17.25V21.75H18C18.2495 21.75 18.494 21.7255 18.731 21.6786L18.4399 20.2072ZM15.75 20.25H14.25V21.75H15.75V20.25ZM12.75 20.25H12H11.25H9.75H9C8.94329 20.25 8.88681 20.2491 8.83057 20.2473C6.06729 20.1597 3.84282 17.9367 3.75282 15.1741C3.75095 15.1163 3.75 15.0583 3.75 15V14.25V12.75V12V11.25H2.25V12V12.75V14.25V15C2.25 15.1053 2.25241 15.21 2.2572 15.3142C2.4213 18.8962 5.37738 21.75 9 21.75H9.75H11.25H12H12.75V20.25ZM19.8715 19.2496C19.707 19.4953 19.4953 19.707 19.2496 19.8715L20.0841 21.1179C20.4927 20.8444 20.8444 20.4927 21.1179 20.0841L19.8715 19.2496ZM20.25 18C20.25 18.1512 20.2352 18.2983 20.2072 18.4399L21.6786 18.731C21.7255 18.494 21.75 18.2495 21.75 18V17.25H20.25V18ZM20.25 14.25V15.75H21.75V14.25H20.25ZM20.25 11.25V12.75H21.75V11.25H20.25ZM20.25 8.25V9.75H21.75V8.25H20.25ZM3.75 9.75V8.25H2.25V9.75H3.75ZM20.25 6V6.75H21.75V6C21.75 5.75051 21.7255 5.506 21.6786 5.26896L20.2072 5.56007C20.2352 5.70175 20.25 5.84877 20.25 6ZM3.75 6.75V6C3.75 5.84877 3.76481 5.70175 3.79284 5.56007L2.32136 5.26896C2.27447 5.506 2.25 5.75051 2.25 6V6.75H3.75ZM19.2496 4.12853C19.4953 4.29301 19.707 4.5047 19.8715 4.75039L21.1179 3.91591C20.8444 3.50729 20.4927 3.15564 20.0841 2.88208L19.2496 4.12853ZM4.12853 4.75039C4.29301 4.5047 4.5047 4.29301 4.75039 4.12853L3.91591 2.88208C3.50729 3.15564 3.15564 3.50729 2.88208 3.91591L4.12853 4.75039ZM18 3.75C18.1512 3.75 18.2983 3.76481 18.4399 3.79284L18.731 2.32136C18.494 2.27447 18.2495 2.25 18 2.25H17.25V3.75H18ZM5.56007 3.79284C5.70175 3.76481 5.84877 3.75 6 3.75H6.75V2.25H6C5.75051 2.25 5.506 2.27447 5.26896 2.32136L5.56007 3.79284ZM14.25 3.75H15.75V2.25H14.25V3.75ZM11.25 2.25V3.75H12.75V2.25H11.25ZM9.75 3.75V2.25H8.25V3.75H9.75Z"
            />
        </svg>
    `;
};
