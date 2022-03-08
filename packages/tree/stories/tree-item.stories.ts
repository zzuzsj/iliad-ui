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

import '../sp-tree-item.js';
import '@iliad-ui/icons-workflow/icons/sp-icon-edit.js';

export default {
    title: 'TreeItem',
    component: 'sp-tree-item',
    args: {
        open: false,
        selected: false,
        disabled: false,
        negative: false,
        empty: false,
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
        negative: {
            name: 'negative',
            type: { name: 'boolean', required: false },
            description: 'Whether the tree item is negative.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
            control: {
                type: 'boolean',
            },
        },
        empty: {
            name: 'empty',
            type: { name: 'boolean', required: false },
            description: 'Whether the tree item is empty.',
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
    disabled?: boolean;
    open?: boolean;
    selected?: boolean;
    negative?: boolean;
    empty?: boolean;
};
const Template = (
    { disabled, open, selected, negative, empty }: Properties = {
        disabled: false,
        open: false,
        selected: false,
        negative: false,
        empty: false,
    }
): TemplateResult => {
    return html`
        <sp-tree-item
            label="Opened Tree Item"
            offset="0"
            ?disabled=${disabled}
            ?open=${open}
        >
            <sp-icon-edit slot="icon"></sp-icon-edit>
            <sp-icon-edit slot="value"></sp-icon-edit>
            <sp-tree-item offset="1" label="Heading 1-1" ?open=${open}>
                <sp-tree-item offset="2" label="Heading 1-1-1"></sp-tree-item>
            </sp-tree-item>
            <sp-tree-item offset="1" label="Heading 1-2" ?open=${open}>
                <sp-icon-edit slot="icon"></sp-icon-edit>
                <sp-icon-edit slot="value"></sp-icon-edit>
                <sp-tree-item offset="2" label="Heading 1-2-1">
                    <sp-icon-edit slot="icon"></sp-icon-edit>
                    <sp-icon-edit slot="value"></sp-icon-edit>
                </sp-tree-item>
                <sp-tree-item ?empty=${empty} offset="2" label="Heading 1-2-2">
                    <sp-icon-edit slot="icon"></sp-icon-edit>
                    <sp-icon-edit slot="value"></sp-icon-edit>
                </sp-tree-item>
                <sp-tree-item offset="2" label="Heading 1-2-3"></sp-tree-item>
            </sp-tree-item>
        </sp-tree-item>
        <sp-tree-item
            offset="0"
            ?disabled=${disabled}
            ?empty=${empty}
            label="Disabeld Tree Item"
        ></sp-tree-item>
        <sp-tree-item
            offset="0"
            ?negative=${negative}
            label="Negative Tree Item"
        >
            <sp-icon-edit slot="icon"></sp-icon-edit>
            <sp-icon-edit slot="value"></sp-icon-edit>
        </sp-tree-item>
        <sp-tree-item
            ?selected=${selected}
            ?open=${open}
            label="Selected Tree Item"
        >
            <sp-icon-edit slot="icon"></sp-icon-edit>
            <sp-icon-edit slot="value"></sp-icon-edit>
            <sp-tree-item offset="1" label="Heading 3-1" ?open=${open}>
                <sp-tree-item offset="2" label="Heading 3-1-1"></sp-tree-item>
            </sp-tree-item>
            <sp-tree-item offset="1" label="Heading 3-2" ?open=${open}>
                <sp-tree-item offset="2" label="Heading 3-2-1"></sp-tree-item>
            </sp-tree-item>
        </sp-tree-item>
    `;
};

export const Default = (args?: Properties): TemplateResult => Template(args);
