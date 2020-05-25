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

import { html, CSSResultArray, TemplateResult } from 'lit-element';
import { Search } from '@spectrum-web-components/search';
import '@spectrum-web-components/dropdown';
import '@spectrum-web-components/popover';
import '@spectrum-web-components/menu';

import styles from './search-within.css.js';

/**
 * @element sp-search-within
 */
export class SearchWithin extends Search {
    public static get styles(): CSSResultArray {
        return [...super.styles, styles];
    }

    protected render(): TemplateResult {
        return html`
            <sp-dropdown class="dropdown" overflows>
                <sp-menu>
                    <slot></slot>
                </sp-menu>
            </sp-dropdown>
            ${super.render()}
        `;
    }
}
