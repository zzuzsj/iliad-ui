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
    html,
    CSSResultArray,
    TemplateResult,
    property,
    PropertyValues,
    SpectrumElement,
} from '@iliad-ui/base';
import '@iliad-ui/icons-ui/icons/sp-icon-chevron100.js';
import '@iliad-ui/icons-editor/icons/sp-icon-editor-arrow-triangle.js';
import chevronIconStyles from '@iliad-ui/icon/src/spectrum-icon-chevron.css.js';

import styles from './tree-item.css.js';

/**
 * @element sp-tree-item
 * @slot - The content of the item that is hidden when the item is not open
 */
export class TreeItem extends SpectrumElement {
    public static get styles(): CSSResultArray {
        return [styles, chevronIconStyles];
    }

    // 设置tree的层级 设置缩进
    @property({ type: Number, reflect: true })
    public offset = 0;

    @property({ type: Boolean, reflect: true })
    public open = false;

    @property({ type: Boolean, reflect: true })
    public selected = false;

    @property({ type: Boolean, reflect: true })
    public over = false;

    @property({ type: Boolean, reflect: true })
    public empty = false;

    // 降低label的透明度 但不是disabled
    @property({ type: Boolean, reflect: true })
    public negative = false;

    @property({ type: String, reflect: true })
    public label = '';

    @property({ type: Boolean, reflect: true })
    public disabled = false;

    public get itemChildren(): { icon: Element[]; content: Node[] } {
        const iconSlot = this.shadowRoot.querySelector(
            'slot[name="icon"]'
        ) as HTMLSlotElement;
        const icon = !iconSlot
            ? []
            : iconSlot.assignedElements().map((element) => {
                  const newElement = element.cloneNode(true) as HTMLElement;
                  newElement.removeAttribute('slot');
                  newElement.classList.toggle('icon');
                  return newElement;
              });
        const contentSlot = this.shadowRoot.querySelector(
            'slot:not([name])'
        ) as HTMLSlotElement;
        const content = !contentSlot
            ? []
            : contentSlot.assignedNodes().map((node) => node.cloneNode(true));
        return { icon, content };
    }

    public defaultNodes!: NodeListOf<TreeItem>;
    public get items(): TreeItem[] {
        return [...(this.defaultNodes || [])].filter(
            (node: HTMLElement) => typeof node.tagName !== 'undefined'
        ) as TreeItem[];
    }

    constructor() {
        super();

        this.addEventListener('click', this.handleClickCapture, {
            capture: true,
        });
    }

    public click(): void {
        if (this.disabled) {
            return;
        }

        super.click();
    }

    private handleClickCapture(event: Event): void | boolean {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
            event.stopPropagation();
            return false;
        }
    }

    private onClick(event: MouseEvent): void {
        /* c8 ignore next 3 */
        if (this.disabled) {
            return;
        }
        this.select(event);
    }

    private onToggle(event: MouseEvent): void {
        if (this.disabled) return;
        this.toggle(event);
    }

    private select(event: MouseEvent): void {
        this.selected = !this.selected;
        const applyDefault = this.dispatchEvent(
            new CustomEvent('sp-tree-item-select', {
                bubbles: true,
                composed: true,
                cancelable: true,
                detail: {
                    event,
                },
            })
        );
        if (!applyDefault) {
            this.open = !this.open;
        }
    }

    private toggle(event: MouseEvent): void {
        this.open = !this.open;
        const applyDefault = this.dispatchEvent(
            new CustomEvent('sp-tree-item-toggle', {
                bubbles: true,
                composed: true,
                cancelable: true,
                detail: {
                    event,
                },
            })
        );
        if (!applyDefault) {
            this.open = !this.open;
        }
    }

    protected render(): TemplateResult {
        this.style.setProperty(
            '--spectrum-tree-item-offset-left',
            `${this.offset * 20}px`
        );
        return html`
            <h3 id="heading">
                <div id="headerContainer">
                    <button
                        id="header"
                        @click=${this.onClick}
                        aria-expanded=${this.open}
                        aria-controls="content"
                    >
                        <slot name="icon"></slot>
                        <div id="label">
                            <slot name="label">
                                <span id="label-text">${this.label}</span>
                            </slot>
                        </div>
                    </button>
                </div>
                <button class="indicator" @click=${this.onToggle}>
                    <slot name="indicator">
                        <sp-icon-editor-arrow-triangle
                            size="m"
                        ></sp-icon-editor-arrow-triangle>
                    </slot>
                </button>
                <slot name="value"></slot>
            </h3>
            <div id="content" role="region" aria-labelledby="header">
                <slot></slot>
            </div>
        `;
    }

    protected updated(changes: PropertyValues): void {
        super.updated(changes);
        if (changes.has('disabled')) {
            if (this.disabled) {
                this.setAttribute('aria-disabled', 'true');
            } else {
                this.removeAttribute('aria-disabled');
            }
        }
    }
}
