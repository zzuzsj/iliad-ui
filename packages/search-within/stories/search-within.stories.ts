/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { html, TemplateResult } from 'lit-html';

import '../';
import '@spectrum-web-components/menu/sp-menu-item.js';

export default {
    title: 'Search Within',
    component: 'sp-search-within',
};

export const Default = (): TemplateResult => {
    return html`
        <sp-search-within>
            <sp-menu-item>All</sp-menu-item>
            <sp-menu-item>Most</sp-menu-item>
            <sp-menu-item>Some</sp-menu-item>
            <sp-menu-item>A few</sp-menu-item>
        </sp-search-within>
    `;
};
