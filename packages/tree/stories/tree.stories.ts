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

import { html, TemplateResult } from '@iliad-ui/base';

import '../sp-tree.js';
import '../sp-tree-item.js';
import '@iliad-ui/icons-workflow/icons/sp-icon-edit.js';

export default {
    title: 'Tree',
    component: 'sp-tree',
    args: {
        open: false,
        selected: false,
        disabled: false,
    },
    argTypes: {
        open: {
            name: 'open',
            type: { name: 'boolean', required: false },
            description: 'Whether the second tree item is open.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
            control: {
                type: 'boolean',
            },
        },
        selected: {
            name: 'selected',
            type: { name: 'boolean', required: false },
            description: 'Whether the tree item is selected.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
            control: {
                type: 'boolean',
            },
        },
        disabled: {
            name: 'disabled',
            type: { name: 'boolean', required: false },
            description: 'Whether the tree item is disabled.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
            control: {
                type: 'boolean',
            },
        },
    },
};

type Properties = {
    allowMultiple?: boolean;
    disabled?: boolean;
    open?: boolean;
    selected?: boolean;
};
const Template = (
    { allowMultiple, disabled, open, selected }: Properties = {
        allowMultiple: false,
        disabled: false,
        open: false,
        selected: false,
    }
): TemplateResult => {
    return html`
        <sp-tree
            ?allow-multiple=${allowMultiple}
            style="color: var(--spectrum-global-color-gray-800)"
        >
            <sp-tree-item
                label="Opened Tree Item"
                offset="0"
                ?disabled=${disabled}
                ?open=${open}
            >
                <sp-icon-edit slot="icon"></sp-icon-edit>
                <sp-icon-edit slot="value"></sp-icon-edit>
                <sp-tree-item offset="1" label="Heading 1-1" ?open=${open}>
                    <sp-tree-item
                        offset="2"
                        label="Heading 1-1-1"
                    ></sp-tree-item>
                </sp-tree-item>
                <sp-tree-item offset="1" label="Heading 1-2" ?open=${open}>
                    <sp-icon-edit slot="icon"></sp-icon-edit>
                    <sp-icon-edit slot="value"></sp-icon-edit>
                    <sp-tree-item offset="2" label="Heading 1-2-1">
                        <sp-icon-edit slot="icon"></sp-icon-edit>
                        <sp-icon-edit slot="value"></sp-icon-edit>
                    </sp-tree-item>
                    <sp-tree-item offset="2" label="Heading 1-2-2">
                        <sp-icon-edit slot="icon"></sp-icon-edit>
                        <sp-icon-edit slot="value"></sp-icon-edit>
                    </sp-tree-item>
                    <sp-tree-item
                        offset="2"
                        label="Heading 1-2-3"
                    ></sp-tree-item>
                </sp-tree-item>
            </sp-tree-item>
            <sp-tree-item
                offset="0"
                ?disabled=${disabled}
                label="Disabeld Tree Item"
            ></sp-tree-item>
            <sp-tree-item
                ?selected=${selected}
                ?open=${open}
                label="Selected Tree Item"
            >
                <sp-icon-edit slot="icon"></sp-icon-edit>
                <sp-icon-edit slot="value"></sp-icon-edit>
            </sp-tree-item>
        </sp-tree>
    `;
};

export const Default = (args?: Properties): TemplateResult => Template(args);
