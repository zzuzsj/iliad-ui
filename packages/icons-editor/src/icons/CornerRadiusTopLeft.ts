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
export const CornerRadiusTopLeftIcon = (): string | TemplateResult => {
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
                d="M18.4399 3.79284C18.2983 3.76481 18.1512 3.75 18 3.75H17.25V2.25H18C18.2495 2.25 18.494 2.27447 18.731 2.32136L18.4399 3.79284ZM15.75 3.75H14.25V2.25H15.75V3.75ZM12.75 3.75H12H11.25H9.75H9C8.94329 3.75 8.88681 3.7509 8.83057 3.75267C6.06729 3.84028 3.84282 6.06326 3.75282 8.82594C3.75095 8.8837 3.75 8.94173 3.75 9V9.75V11.25V12V12.75H2.25V12V11.25V9.75V9C2.25 8.89474 2.25241 8.79001 2.2572 8.68584C2.4213 5.10376 5.37738 2.25 9 2.25H9.75H11.25H12H12.75V3.75ZM19.8715 4.75039C19.707 4.5047 19.4953 4.29302 19.2496 4.12853L20.0841 2.88208C20.4927 3.15564 20.8444 3.50729 21.1179 3.91591L19.8715 4.75039ZM20.25 6C20.25 5.84877 20.2352 5.70175 20.2072 5.56007L21.6786 5.26896C21.7255 5.506 21.75 5.75052 21.75 6V6.75H20.25V6ZM20.25 9.75V8.25H21.75V9.75H20.25ZM20.25 12.75V11.25H21.75V12.75H20.25ZM20.25 15.75V14.25H21.75V15.75H20.25ZM3.75 14.25V15.75H2.25V14.25H3.75ZM20.25 18V17.25H21.75V18C21.75 18.2495 21.7255 18.494 21.6786 18.731L20.2072 18.4399C20.2352 18.2983 20.25 18.1512 20.25 18ZM3.75 17.25V18C3.75 18.1512 3.76481 18.2983 3.79284 18.4399L2.32136 18.731C2.27447 18.494 2.25 18.2495 2.25 18V17.25H3.75ZM19.2496 19.8715C19.4953 19.707 19.707 19.4953 19.8715 19.2496L21.1179 20.0841C20.8444 20.4927 20.4927 20.8444 20.0841 21.1179L19.2496 19.8715ZM4.12853 19.2496C4.29301 19.4953 4.5047 19.707 4.75039 19.8715L3.91591 21.1179C3.50729 20.8444 3.15564 20.4927 2.88208 20.0841L4.12853 19.2496ZM18 20.25C18.1512 20.25 18.2983 20.2352 18.4399 20.2072L18.731 21.6786C18.494 21.7255 18.2495 21.75 18 21.75H17.25V20.25H18ZM5.56007 20.2072C5.70175 20.2352 5.84877 20.25 6 20.25H6.75V21.75H6C5.75051 21.75 5.506 21.7255 5.26896 21.6786L5.56007 20.2072ZM14.25 20.25H15.75V21.75H14.25V20.25ZM11.25 21.75V20.25H12.75V21.75H11.25ZM9.75 20.25V21.75H8.25V20.25H9.75Z"
            />
        </svg>
    `;
};
