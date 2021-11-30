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
export const KeylineIcon = (): string | TemplateResult => {
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
                d="M16.3767 2.94995C15.0541 2.30922 13.5697 1.94995 12.0014 1.94995C10.4331 1.94995 8.94875 2.30922 7.6261 2.94995H6C4.31554 2.94995 2.95 4.31548 2.95 5.99995V7.62907C2.31105 8.95024 1.95283 10.4326 1.95283 11.9985C1.95283 13.5645 2.31105 15.0468 2.95 16.368V18C2.95 19.6844 4.31553 21.0499 6 21.0499H7.63194C8.95312 21.6889 10.4354 22.0471 12.0014 22.0471C13.5674 22.0471 15.0497 21.6889 16.3709 21.0499H18C19.6845 21.0499 21.05 19.6844 21.05 18V16.3739C21.6907 15.0512 22.05 13.5668 22.05 11.9985C22.05 10.4303 21.6907 8.94587 21.05 7.62322V5.99995C21.05 4.31548 19.6845 2.94995 18 2.94995H16.3767ZM16.5774 3.04995H18C19.6292 3.04995 20.95 4.37071 20.95 5.99995V7.42256C19.9885 5.54598 18.454 4.01149 16.5774 3.04995ZM20.95 7.64628C19.9761 5.64761 18.3523 4.02384 16.3537 3.04995H7.64916C5.64856 4.02479 4.02358 5.65076 3.05 7.65209V16.345C4.02452 18.3483 5.6517 19.9754 7.65497 20.95H16.3479C18.3492 19.9764 19.9752 18.3514 20.95 16.3508V7.64628ZM21.05 7.85782C21.6279 9.11856 21.95 10.5209 21.95 11.9985C21.95 13.4761 21.6279 14.8785 21.05 16.1393V7.85782ZM20.95 16.5745V18C20.95 19.6292 19.6292 20.95 18 20.95H16.5719C18.451 19.9886 19.9875 18.4529 20.95 16.5745ZM16.136 21.0499C14.8768 21.626 13.4766 21.9471 12.0014 21.9471C10.5262 21.9471 9.12601 21.626 7.86687 21.0499H16.136ZM7.43096 20.95H6C4.37076 20.95 3.05 19.6292 3.05 18V16.569C4.0123 18.4499 5.55003 19.9877 7.43096 20.95ZM2.95 16.1331C2.37391 14.8739 2.05283 13.4737 2.05283 11.9985C2.05283 10.5233 2.37391 9.12313 2.95 7.86399V16.1331ZM3.05 7.42808V5.99995C3.05 4.37071 4.37076 3.04995 6 3.04995H7.42544C5.54702 4.01243 4.01136 5.54899 3.05 7.42808ZM7.8607 2.94995H16.1421C14.8814 2.37208 13.479 2.04995 12.0014 2.04995C10.5238 2.04995 9.12144 2.37208 7.8607 2.94995ZM17.05 12C17.05 9.21091 14.789 6.94995 12 6.94995C9.21096 6.94995 6.95 9.21091 6.95 12C6.95 14.789 9.21096 17.05 12 17.05C14.789 17.05 17.05 14.789 17.05 12ZM12 7.04995C14.7338 7.04995 16.95 9.26614 16.95 12C16.95 14.7338 14.7338 16.95 12 16.95C9.26619 16.95 7.05 14.7338 7.05 12C7.05 9.26614 9.26619 7.04995 12 7.04995Z"
                fill="black"
                fill-opacity="0.16"
            />
            <rect
                width="16"
                height="19.9972"
                rx="3"
                transform="matrix(-1 0 0 1 20 2)"
                stroke="#FF0000"
                stroke-opacity="0.08"
                stroke-width="0.1"
            />
            <rect
                width="19.9972"
                height="16"
                rx="3"
                transform="matrix(-1 0 0 1 22 4)"
                stroke="#0500FF"
                stroke-opacity="0.08"
                stroke-width="0.1"
            />
            <rect
                width="14"
                height="22"
                rx="3"
                transform="matrix(-1 0 0 1 19 1)"
                stroke="#FF0000"
                stroke-opacity="0.08"
                stroke-width="0.1"
            />
            <rect
                width="22"
                height="14"
                rx="3"
                transform="matrix(-1 0 0 1 23 5)"
                stroke="#0500FF"
                stroke-opacity="0.08"
                stroke-width="0.1"
            />
        </svg>
    `;
};
