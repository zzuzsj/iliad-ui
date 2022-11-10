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
export const CornerRadiusBottomRightIcon = (): string | TemplateResult => {
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
                d="M5.56007 20.2072C5.70175 20.2352 5.84877 20.25 6 20.25H6.75V21.75H6C5.75051 21.75 5.506 21.7255 5.26896 21.6786L5.56007 20.2072ZM8.25 20.25H9.75V21.75H8.25V20.25ZM11.25 20.25H12H12.75H14.25H15C15.0567 20.25 15.1132 20.2491 15.1694 20.2473C17.9327 20.1597 20.1572 17.9367 20.2472 15.1741C20.2491 15.1163 20.25 15.0583 20.25 15V14.25V12.75V12V11.25H21.75V12V12.75V14.25V15C21.75 15.1053 21.7476 15.21 21.7428 15.3142C21.5787 18.8962 18.6226 21.75 15 21.75H14.25H12.75H12H11.25V20.25ZM4.12853 19.2496C4.29302 19.4953 4.5047 19.707 4.75039 19.8715L3.91591 21.1179C3.50729 20.8444 3.15564 20.4927 2.88208 20.0841L4.12853 19.2496ZM3.75 18C3.75 18.1512 3.76481 18.2983 3.79284 18.4399L2.32136 18.731C2.27447 18.494 2.25 18.2495 2.25 18V17.25H3.75V18ZM3.75 14.25V15.75H2.25V14.25H3.75ZM3.75 11.25V12.75H2.25V11.25H3.75ZM3.75 8.25V9.75H2.25V8.25H3.75ZM20.25 9.75V8.25H21.75V9.75H20.25ZM3.75 6V6.75H2.25V6C2.25 5.75051 2.27447 5.506 2.32136 5.26896L3.79284 5.56007C3.76481 5.70175 3.75 5.84877 3.75 6ZM20.25 6.75V6C20.25 5.84877 20.2352 5.70175 20.2072 5.56007L21.6786 5.26896C21.7255 5.506 21.75 5.75051 21.75 6V6.75H20.25ZM4.75039 4.12853C4.5047 4.29301 4.29302 4.5047 4.12853 4.75039L2.88208 3.91591C3.15564 3.50729 3.50729 3.15564 3.91591 2.88208L4.75039 4.12853ZM19.8715 4.75039C19.707 4.5047 19.4953 4.29301 19.2496 4.12853L20.0841 2.88208C20.4927 3.15564 20.8444 3.50729 21.1179 3.91591L19.8715 4.75039ZM6 3.75C5.84877 3.75 5.70175 3.76481 5.56007 3.79284L5.26896 2.32136C5.506 2.27447 5.75052 2.25 6 2.25H6.75V3.75H6ZM18.4399 3.79284C18.2983 3.76481 18.1512 3.75 18 3.75H17.25V2.25H18C18.2495 2.25 18.494 2.27447 18.731 2.32136L18.4399 3.79284ZM9.75 3.75H8.25V2.25H9.75V3.75ZM12.75 2.25V3.75H11.25V2.25H12.75ZM14.25 3.75V2.25H15.75V3.75H14.25Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
