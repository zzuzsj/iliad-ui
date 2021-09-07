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

import {
    html,
    SpectrumElement,
    CSSResultArray,
    TemplateResult,
    SizedMixin,
    property,
} from '@spectrum-web-components/base';
import { PropertyValues } from 'lit-element';
import { ObserveSlotText } from '@spectrum-web-components/shared/src/observe-slot-text.js';
import styles from './badge.css.js';

/**
 * @element sp-badge
 */
export class Badge extends SizedMixin(ObserveSlotText(SpectrumElement, '')) {
    @property({ type: String, reflect: true })
    public variant = "informative"

    public static get styles(): CSSResultArray {
        return [styles];
    }

    protected render(): TemplateResult {
        return html`
            <slot name="icon" ?icon-only=${!this.slotHasContent}></slot>
            <div id="label">
                <slot></slot>
            </div>
        `;
    }

    protected updated(_: PropertyValues) {
        const label = this.shadowRoot.querySelector('#label') as HTMLDivElement;
        if (label.scrollHeight > label.clientHeight) {
            this.setAttribute('truncated', '');
        }
        else {
            this.removeAttribute('truncated');
        }
    }
}