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
    SpectrumElement,
    CSSResultArray,
    TemplateResult,
    property,
    PropertyValues,
} from '@iliad-ui/base';

import styles from './tree.css.js';
import { TreeItem } from './TreeItem.js';

/**
 * @element sp-tree
 * @slot - The sp-tree-item children to display
 */
export class Tree extends SpectrumElement {
    public static get styles(): CSSResultArray {
        return [styles];
    }

    /**
     *
     * @returns Allows multiple tree items to be selected at the same time
     */
    @property({ type: Boolean, reflect: true, attribute: 'multi-selected' })
    public multiSelected = false;

    @property({ type: Boolean, reflect: true, attribute: 'multi-expand' })
    public multiExpand = false;

    private defaultNodes!: NodeListOf<TreeItem>;
    private get items(): TreeItem[] {
        return [...(this.defaultNodes || [])].filter(
            (node: HTMLElement) => typeof node.tagName !== 'undefined'
        ) as TreeItem[];
    }

    private async onToggle(event: Event): Promise<void> {
        // Let the event pass through the DOM so that it can be
        // prevented from the outside if a user so desires.
        await 0;
        if (this.multiExpand || event.defaultPrevented) {
            // No toggling when `allowMultiple` or the user prevents it.
            return;
        }
        const target = event.target as TreeItem;
        const items = [...this.items] as TreeItem[];
        /* c8 ignore next 3 */
        if (items && !items.length) {
            // no toggling when there aren't items.
            return;
        }
        items.forEach(checkOpen);
        function checkOpen(item: TreeItem): void {
            const { items: children } = item;
            if (item !== target) {
                // Close all the items that didn't dispatch the event.
                item.open = false;
            }
            children.forEach(checkOpen);
        }
    }

    protected render(): TemplateResult {
        return html`
            <slot></slot>
        `;
    }

    protected firstUpdated(changed: PropertyValues): void {
        super.firstUpdated(changed);

        this.addEventListener('sp-tree-item-toggle', this.onToggle);
    }
}
