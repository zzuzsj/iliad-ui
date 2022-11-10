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
export const ThemeIcon = (): string | TemplateResult => {
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
                d="M12.1708 2.66459C12.0438 2.4105 11.7841 2.25 11.5 2.25C11.2159 2.25 10.9562 2.4105 10.8292 2.66459L5.03649 14.25H5.00001V14.323L2.32919 19.6646L3.67083 20.3354L5.96354 15.75H12.8996C13.0401 15.4004 13.2146 15.0609 13.4232 14.7364L13.7359 14.25H6.71354L11.5 4.67705L15.1706 12.0182L16.114 10.5508L12.1708 2.66459ZM22.315 20.4525C23.2754 18.9585 23.2754 17.0415 22.315 15.5475L19.1941 10.6927C18.8693 10.1875 18.1308 10.1875 17.806 10.6927L14.685 15.5475C13.7246 17.0415 13.7246 18.9585 14.685 20.4525C16.4703 23.2296 20.5298 23.2296 22.315 20.4525ZM21.0532 16.3586C21.696 17.3585 21.696 18.6415 21.0532 19.6414C19.8584 21.4999 17.1416 21.4999 15.9468 19.6414C15.304 18.6415 15.304 17.3585 15.9468 16.3586L18.5 12.3869L21.0532 16.3586Z"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.1708 2.66459C12.0438 2.4105 11.7841 2.25 11.5 2.25C11.2159 2.25 10.9562 2.4105 10.8292 2.66459L5.03646 14.25H4.99998V14.323L2.32916 19.6646L3.6708 20.3354L5.96351 15.75H12.8995C13.04 15.4004 13.2146 15.0609 13.4232 14.7364L13.7359 14.25H6.71351L11.5 4.67705L15.1706 12.0182L16.1139 10.5508L12.1708 2.66459ZM22.315 20.4525C23.2754 18.9585 23.2754 17.0415 22.315 15.5475L19.194 10.6927C18.8692 10.1875 18.1307 10.1875 17.8059 10.6927L14.685 15.5475C13.7246 17.0415 13.7246 18.9585 14.685 20.4525C16.4702 23.2296 20.5297 23.2296 22.315 20.4525ZM21.0532 16.3586C21.696 17.3585 21.696 18.6415 21.0532 19.6414C19.8584 21.4999 17.1416 21.4999 15.9468 19.6414C15.304 18.6415 15.304 17.3585 15.9468 16.3586L18.5 12.3869L21.0532 16.3586Z"
            />
        </svg>
    `;
};
