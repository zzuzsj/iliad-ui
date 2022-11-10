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
export const LocateIcon = (): string | TemplateResult => {
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
                d="M11.25 19.7142V22H12.75V19.7142C16.4315 19.3606 19.3607 16.4315 19.7142 12.75H22V11.25H19.7142C19.3606 7.56849 16.4315 4.63935 12.75 4.28582V2H11.25V4.28582C7.56851 4.63935 4.63937 7.56849 4.28583 11.25H2V12.75H4.28582C4.63933 16.4315 7.56849 19.3606 11.25 19.7142ZM11.25 18.2055C8.39772 17.8644 6.13563 15.6023 5.79453 12.75H9V11.25H5.79454C6.13566 8.39771 8.39774 6.13564 11.25 5.79454V9H12.75V5.79454C15.6023 6.13564 17.8643 8.39771 18.2055 11.25H15V12.75H18.2055C17.8644 15.6023 15.6023 17.8644 12.75 18.2055V15H11.25V18.2055Z"
            />
        </svg>
    `;
};
