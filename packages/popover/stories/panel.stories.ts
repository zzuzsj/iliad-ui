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
import '../sp-panel.js';
import { html, TemplateResult } from '@iliad-ui/base';
import '@iliad-ui/icons-workflow/icons/sp-icon-edit.js';

const args = {
    title: 'Panel Title',
    content: 'The quick brown fox jumps over the lazy dog',
    confirm: 'Confirm',
    cancel: 'Cancel',
};
const argTypes = {
    title: {
        name: 'content',
        type: { name: 'string', required: false },
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: '' },
        },
        control: 'text',
    },
    content: {
        name: 'content',
        type: { name: 'string', required: false },
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: '' },
        },
        control: 'text',
    },
    confirm: {
        name: 'confirm-label',
        type: { name: 'string', required: false },
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: '' },
        },
        control: 'text',
    },
    cancel: {
        name: 'cancel-label',
        type: { name: 'string', required: false },
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: '' },
        },
        control: 'text',
    },
};
export default {
    component: 'sp-panel',
    title: 'Panel',
    argTypes: {
        open: {
            name: 'open',
            type: { name: 'boolean', required: false },
            description: 'Whether the popover is open or not.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
            control: 'boolean',
        },
        placement: {
            name: 'placement',
            type: { name: 'string', required: false },
            description:
                'The placement of the popover content in relation to the tip',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'none' },
            },
            control: 'text',
        },
        tip: {
            name: 'tip',
            description: 'Whether the popover has a tip.',
            type: { name: 'boolean', required: false },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
            control: 'boolean',
        },
    },
    args: {
        open: true,
        placement: 'none',
        tip: false,
    },
};

export const Default = ({
    title,
    content,
}: {
    title: string;
    content: string;
}): TemplateResult => {
    return html`
        <div style="color: var(--spectrum-global-color-gray-800)">
            <sp-panel
                title=${title}
                variant="default"
                open
                style="max-width: 320px"
            >
                <div style="font-size: 14px; padding: 10px">${content}</div>
            </sp-panel>
        </div>
    `;
};
Default.args = {
    title: 'Panel Title',
    content: 'The quick brown fox jumps over the lazy dog',
};
Default.argTypes = {
    title: {
        name: 'content',
        type: { name: 'string', required: false },
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: '' },
        },
        control: 'text',
    },
    content: {
        name: 'content',
        type: { name: 'string', required: false },
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: '' },
        },
        control: 'text',
    },
};

export const CloseAble = ({
    content,
    title,
}: {
    content: string;
    title: string;
}): TemplateResult => {
    return html`
        <div style="color: var(--spectrum-global-color-gray-800)">
            <sp-panel
                variant="default"
                title="${title}"
                open
                dismissable
                style="max-width: 320px"
                @close=${() => {
                    alert('closed');
                }}
            >
                <div style="font-size: 14px; padding: 10px">${content}</div>
            </sp-panel>
        </div>
    `;
};

CloseAble.args = args;
CloseAble.argTypes = argTypes;

export const Divider = ({
    content,
    title,
}: {
    content: string;
    title: string;
}): TemplateResult => {
    return html`
        <div style="color: var(--spectrum-global-color-gray-800)">
            <sp-panel
                variant="default"
                title="${title}"
                open
                dismissable
                divider
                style="max-width: 320px"
                @close=${() => {
                    alert('closed');
                }}
            >
                <div style="font-size: 14px; padding: 10px">${content}</div>
            </sp-panel>
        </div>
    `;
};

Divider.args = args;
Divider.argTypes = argTypes;

export const FullSlot = ({
    content,
    title,
    confirm,
    cancel,
}: {
    content: string;
    title: string;
    confirm: string;
    cancel: string;
}): TemplateResult => {
    return html`
        <div style="color: var(--spectrum-global-color-gray-800)">
            <sp-panel
                variant="default"
                title="${title}"
                open
                dismissable
                backable
                style="max-width: 320px"
                confirm-label="${confirm}"
                cancel-label="${cancel}"
                @back=${() => {
                    alert('back');
                }}
                @close=${() => {
                    alert('close');
                }}
                @confirm=${() => {
                    alert('confirm');
                }}
                @cancel=${() => {
                    alert('cancel');
                }}
            >
                <sp-icon-edit slot="info"></sp-icon-edit>
                <sp-icon-edit slot="more"></sp-icon-edit>
                <div style="font-size: 14px; padding: 10px">${content}</div>
            </sp-panel>
        </div>
    `;
};
FullSlot.args = args;
FullSlot.argTypes = argTypes;
