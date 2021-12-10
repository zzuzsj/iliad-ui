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
    html,
    property,
    SpectrumElement,
    TemplateResult,
} from '@iliad-ui/base';
import { Placement } from '@iliad-ui/overlay';
import panelStyles from './panel.css.js';
import {
    ObserveSlotPresence,
    FocusVisiblePolyfillMixin,
} from '@iliad-ui/shared';
import '@iliad-ui/action-button/sp-action-button.js';
import '@iliad-ui/button/sp-button.js';
import '@iliad-ui/button-group/sp-button-group.js';
import '@iliad-ui/icons-editor/icons/sp-icon-editor-close.js';
import '@iliad-ui/icons-editor/icons/sp-icon-editor-arrow-left.js';

/**
 * @element sp-panel
 *
 * @slot - content to display within the Panel
 * @attr {Boolean} open - The open state of the panel
 * @attr {Boolean} dialog - Adds some padding to the panel
 */
export class Panel extends FocusVisiblePolyfillMixin(
    ObserveSlotPresence(SpectrumElement, [
        '[slot="info"]',
        '[slot="more"]',
        '[slot="footer"]',
    ])
) {
    public static get styles(): CSSResultArray {
        return [panelStyles];
    }

    @property({ type: Boolean, reflect: true })
    public open = false;

    @property()
    public title = '';

    @property({ type: Boolean, reflect: true })
    public dismissable = false;

    @property({ type: Boolean, reflect: true })
    public backable = false;

    @property({ type: Boolean, reflect: true })
    public divider = false;

    @property({ attribute: 'cancel-label' })
    public cancelLabel = '';

    @property({ attribute: 'confirm-label' })
    public confirmLabel = '';

    /**
     * @type {"auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | "none"}
     * @attr
     */
    @property({ reflect: true })
    public placement: Placement = 'none';

    @property({ type: Boolean, reflect: true })
    public tip = false;

    protected get hasFooter(): boolean {
        return this.getSlotContentPresence('[slot="footer"]');
    }

    protected get hasInfo(): boolean {
        return this.getSlotContentPresence('[slot="info"]');
    }
    protected get hasMore(): boolean {
        return this.getSlotContentPresence('[slot="more"]');
    }
    private doClose(): void {
        this.dispatchEvent(
            new Event('close', {
                bubbles: true,
            })
        );
    }
    private doBack(): void {
        this.dispatchEvent(
            new Event('back', {
                bubbles: true,
            })
        );
    }
    private doConfirm(): void {
        this.dispatchEvent(
            new Event('confirm', {
                bubbles: true,
            })
        );
    }
    private doCancel(): void {
        this.dispatchEvent(
            new Event('cancel', {
                bubbles: true,
            })
        );
    }

    public connectedCallback(): void {
        super.connectedCallback();
    }

    public disconnectedCallback(): void {
        super.disconnectedCallback();
    }

    protected render(): TemplateResult {
        return html`
            <div class="panel-header" ?divider=${this.divider}>
                <div
                    class="header-block header-main ${this.backable
                        ? 'handle-space'
                        : ''}"
                >
                    ${this.backable
                        ? html`
                              <sp-icon-editor-arrow-left
                                  class="back-icon"
                                  slot="icon"
                                  @click=${this.doBack}
                              ></sp-icon-editor-arrow-left>
                          `
                        : html``}
                    ${this.title
                        ? html`
                              <h2 class="title">${this.title}</h2>
                          `
                        : html``}
                    <slot name="info"></slot>
                </div>
                <div
                    class="header-block header-others ${this.dismissable
                        ? 'handle-space'
                        : ''}"
                >
                    <slot name="more"></slot>
                    ${this.dismissable
                        ? html`
                              <sp-action-button
                                  class="icon close"
                                  label="Close"
                                  quiet
                                  size="m"
                                  @click=${this.doClose}
                              >
                                  <sp-icon-editor-close
                                      class="spectrum-UIIcon-Cross500"
                                      slot="icon"
                                  ></sp-icon-editor-close>
                              </sp-action-button>
                          `
                        : html``}
                </div>
            </div>
            <div class="panel-content">
                <slot></slot>
            </div>
            ${this.hasFooter
                ? html`
                      <div class="panel-footer">
                          <slot name="footer"></slot>
                      </div>
                  `
                : this.confirmLabel || this.cancelLabel
                ? html`
                      <div class="panel-footer">
                          <sp-button-group class="button-group">
                              ${this.cancelLabel
                                  ? html`
                                        <sp-button
                                            size="m"
                                            variant="primary"
                                            @click=${this.doCancel}
                                        >
                                            ${this.cancelLabel}
                                        </sp-button>
                                    `
                                  : html``}
                              ${this.confirmLabel
                                  ? html`
                                        <sp-button
                                            size="m"
                                            variant="cta"
                                            @click=${this.doConfirm}
                                        >
                                            ${this.confirmLabel}
                                        </sp-button>
                                    `
                                  : html``}
                          </sp-button-group>
                      </div>
                  `
                : html``}
        `;
    }
}
