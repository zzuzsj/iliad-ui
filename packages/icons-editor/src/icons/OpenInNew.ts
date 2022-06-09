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
export const OpenInNewIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_932_766)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3767 2.95C15.0541 2.30927 13.5697 1.95 12.0014 1.95C10.4331 1.95 8.94874 2.30927 7.62609 2.95H5.99999C4.31552 2.95 2.94999 4.31553 2.94999 6V7.62911C2.31103 8.95029 1.95282 10.4326 1.95282 11.9986C1.95282 13.5646 2.31103 15.0469 2.94999 16.3681V18C2.94999 19.6845 4.31552 21.05 5.99999 21.05H7.63193C8.95311 21.689 10.4354 22.0472 12.0014 22.0472C13.5674 22.0472 15.0497 21.689 16.3709 21.05H18C19.6845 21.05 21.05 19.6845 21.05 18V16.3739C21.6907 15.0512 22.05 13.5669 22.05 11.9986C22.05 10.4303 21.6907 8.94592 21.05 7.62327V6C21.05 4.31553 19.6845 2.95 18 2.95H16.3767ZM16.5774 3.05H18C19.6292 3.05 20.95 4.37076 20.95 6V7.4226C19.9884 5.54602 18.454 4.01154 16.5774 3.05ZM20.95 7.64633C19.9761 5.64766 18.3523 4.02389 16.3537 3.05H7.64915C5.64854 4.02483 4.02356 5.6508 3.04999 7.65214V16.345C4.0245 18.3483 5.65168 19.9755 7.65495 20.95H16.3479C18.3492 19.9764 19.9752 18.3514 20.95 16.3508V7.64633ZM21.05 7.85786C21.6279 9.1186 21.95 10.521 21.95 11.9986C21.95 13.4762 21.6279 14.8786 21.05 16.1393V7.85786ZM20.95 16.5746V18C20.95 19.6292 19.6292 20.95 18 20.95H16.5719C18.451 19.9886 19.9875 18.453 20.95 16.5746ZM16.136 21.05C14.8768 21.6261 13.4766 21.9472 12.0014 21.9472C10.5262 21.9472 9.12599 21.6261 7.86685 21.05H16.136ZM7.43094 20.95H5.99999C4.37075 20.95 3.04999 19.6292 3.04999 18V16.569C4.01229 18.45 5.55001 19.9877 7.43094 20.95ZM2.94999 16.1331C2.3739 14.874 2.05282 13.4738 2.05282 11.9986C2.05282 10.5234 2.3739 9.12318 2.94999 7.86404V16.1331ZM3.04999 7.42813V6C3.04999 4.37076 4.37075 3.05 5.99999 3.05H7.42542C5.547 4.01248 4.01134 5.54904 3.04999 7.42813ZM7.86068 2.95H16.1421C14.8814 2.37213 13.479 2.05 12.0014 2.05C10.5238 2.05 9.12142 2.37213 7.86068 2.95ZM17.05 12C17.05 9.21096 14.789 6.95 12 6.95C9.21095 6.95 6.94999 9.21096 6.94999 12C6.94999 14.789 9.21095 17.05 12 17.05C14.789 17.05 17.05 14.789 17.05 12ZM12 7.05C14.7338 7.05 16.95 9.26619 16.95 12C16.95 14.7338 14.7338 16.95 12 16.95C9.26618 16.95 7.04999 14.7338 7.04999 12C7.04999 9.26619 9.26618 7.05 12 7.05Z"
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
                <path
                    d="M8.00001 16L21 3.00001M21 3.00001L13 2.99999M21 3.00001L21 11"
                    stroke="#1F1F1F"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                />
                <path
                    d="M21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34315 4.34315 3 6 3H10"
                    stroke="#1F1F1F"
                    stroke-width="1.5"
                />
            </g>
            <defs>
                <clipPath id="clip0_932_766">
                    <rect width="24" height="24" />
                </clipPath>
            </defs>
        </svg>
    `;
};
