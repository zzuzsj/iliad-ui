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
export const CornerRadiusTopRightIcon = (): string | TemplateResult => {
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
                d="M5.56007 3.79284C5.70175 3.76481 5.84877 3.75 6 3.75H6.75V2.25H6C5.75051 2.25 5.506 2.27447 5.26896 2.32136L5.56007 3.79284ZM8.25 3.75H9.75V2.25H8.25V3.75ZM11.25 3.75H12H12.75H14.25H15C15.0567 3.75 15.1132 3.7509 15.1694 3.75267C17.9327 3.84028 20.1572 6.06326 20.2472 8.82594C20.2491 8.8837 20.25 8.94173 20.25 9V9.75V11.25V12V12.75H21.75V12V11.25V9.75V9C21.75 8.89474 21.7476 8.79001 21.7428 8.68584C21.5787 5.10376 18.6226 2.25 15 2.25H14.25H12.75H12H11.25V3.75ZM4.12853 4.75039C4.29302 4.5047 4.5047 4.29302 4.75039 4.12853L3.91591 2.88208C3.50729 3.15564 3.15564 3.50729 2.88208 3.91591L4.12853 4.75039ZM3.75 6C3.75 5.84877 3.76481 5.70175 3.79284 5.56007L2.32136 5.26896C2.27447 5.506 2.25 5.75052 2.25 6V6.75H3.75V6ZM3.75 9.75V8.25H2.25V9.75H3.75ZM3.75 12.75V11.25H2.25V12.75H3.75ZM3.75 15.75V14.25H2.25V15.75H3.75ZM20.25 14.25V15.75H21.75V14.25H20.25ZM3.75 18V17.25H2.25V18C2.25 18.2495 2.27447 18.494 2.32136 18.731L3.79284 18.4399C3.76481 18.2983 3.75 18.1512 3.75 18ZM20.25 17.25V18C20.25 18.1512 20.2352 18.2983 20.2072 18.4399L21.6786 18.731C21.7255 18.494 21.75 18.2495 21.75 18V17.25H20.25ZM4.75039 19.8715C4.5047 19.707 4.29302 19.4953 4.12853 19.2496L2.88208 20.0841C3.15564 20.4927 3.50729 20.8444 3.91591 21.1179L4.75039 19.8715ZM19.8715 19.2496C19.707 19.4953 19.4953 19.707 19.2496 19.8715L20.0841 21.1179C20.4927 20.8444 20.8444 20.4927 21.1179 20.0841L19.8715 19.2496ZM6 20.25C5.84877 20.25 5.70175 20.2352 5.56007 20.2072L5.26896 21.6786C5.506 21.7255 5.75052 21.75 6 21.75H6.75V20.25H6ZM18.4399 20.2072C18.2983 20.2352 18.1512 20.25 18 20.25H17.25V21.75H18C18.2495 21.75 18.494 21.7255 18.731 21.6786L18.4399 20.2072ZM9.75 20.25H8.25V21.75H9.75V20.25ZM12.75 21.75V20.25H11.25V21.75H12.75ZM14.25 20.25V21.75H15.75V20.25H14.25Z"
            />
        </svg>
    `;
};
