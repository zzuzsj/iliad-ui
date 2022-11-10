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

import {
    CSSResultArray,
    TemplateResult,
    html,
    property,
    PropertyValues,
    SizedMixin,
    ElementSize,
} from '@iliad-ui/base';
import { CheckboxBase } from './CheckboxBase.js';
import '@iliad-ui/icons-editor/icons/sp-icon-editor-remove.js';
import '@iliad-ui/icons-editor/icons/sp-icon-editor-done.js';
import checkboxStyles from './checkbox.css.js';

const checkmarkIcon = {
    s: html`
        <sp-icon-editor-done
            id="checkmark"
            size="s"
            class="spectrum-UIIcon-Checkmark75"
        ></sp-icon-editor-done>
    `,
    m: html`
        <sp-icon-editor-done
            id="checkmark"
            size="m"
            class="spectrum-UIIcon-Checkmark100"
        ></sp-icon-editor-done>
    `,
    l: html`
        <sp-icon-editor-done
            id="checkmark"
            size="l"
            class="spectrum-UIIcon-Checkmark200"
        ></sp-icon-editor-done>
    `,
    xl: html`
        <sp-icon-editor-done
            id="checkmark"
            size="xl"
            class="spectrum-UIIcon-Checkmark300"
        ></sp-icon-editor-done>
    `,
};

const dashIcon = {
    s: html`
        <sp-icon-editor-remove
            id="partialCheckmark"
            size="s"
            class="spectrum-UIIcon-Dash75"
        ></sp-icon-editor-remove>
    `,
    m: html`
        <sp-icon-editor-remove
            id="partialCheckmark"
            size="m"
            class="spectrum-UIIcon-Dash100"
        ></sp-icon-editor-remove>
    `,
    l: html`
        <sp-icon-editor-remove
            id="partialCheckmark"
            size="l"
            class="spectrum-UIIcon-Dash200"
        ></sp-icon-editor-remove>
    `,
    xl: html`
        <sp-icon-editor-remove
            id="partialCheckmark"
            size="xl"
            class="spectrum-UIIcon-Dash300"
        ></sp-icon-editor-remove>
    `,
};

type CheckboxSize = Exclude<ElementSize, 'xxl'>;

/**
 * @element sp-checkbox
 * @slot - content to display as the label for the Checkbox
 */
export class Checkbox extends SizedMixin(CheckboxBase) {
    @property({ type: Boolean, reflect: true })
    public indeterminate = false;

    @property({ type: Boolean, reflect: true })
    public invalid = false;

    @property({ type: Boolean, reflect: true })
    public emphasized = false;

    public static get styles(): CSSResultArray {
        return [checkboxStyles];
    }

    protected render(): TemplateResult {
        return html`
            ${super.render()}
            <span id="box">
                ${checkmarkIcon[this.size as CheckboxSize]}
                ${dashIcon[this.size as CheckboxSize]}
            </span>
            <label id="label"><slot></slot></label>
        `;
    }

    protected updated(changes: PropertyValues): void {
        super.updated(changes);
        if (changes.has('invalid')) {
            if (this.invalid) {
                this.inputElement.setAttribute('aria-invalid', 'true');
            } else {
                this.inputElement.removeAttribute('aria-invalid');
            }
        }
        if (changes.has('indeterminate')) {
            if (this.indeterminate) {
                this.inputElement.setAttribute('aria-checked', 'mixed');
            } else {
                this.inputElement.removeAttribute('aria-checked');
            }
        }
    }
}
