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

import '../sp-badge.js';
import { html, TemplateResult } from '@spectrum-web-components/base';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-checkmark-circle.js';

export default {
    title: 'Badge',
    component: 'sp-badge',
};

export const Default = (): TemplateResult => {
    return html`<sp-badge>Badge</sp-badge>`;
};

export const WithIcon = (): TemplateResult => {
    return html`
        <sp-badge>
            <sp-icon-checkmark-circle slot="icon"></sp-icon-checkmark-circle>
            Badge
        </sp-badge>

        <sp-badge>
            <sp-icon-checkmark-circle slot="icon"></sp-icon-checkmark-circle>
        </sp-badge>
    `;
};

export const Sizes = (): TemplateResult => {
    return html`
        <sp-badge size="s">
            <sp-icon-checkmark-circle slot="icon"></sp-icon-checkmark-circle>
            Small
        </sp-badge>
        <sp-badge size="m">
            <sp-icon-checkmark-circle slot="icon"></sp-icon-checkmark-circle>
            Medium
        </sp-badge>
        <sp-badge size="l">
            <sp-icon-checkmark-circle slot="icon"></sp-icon-checkmark-circle>
            Large
        </sp-badge>
        <sp-badge size="xl">
            <sp-icon-checkmark-circle slot="icon"></sp-icon-checkmark-circle>
            Extra-large
        </sp-badge>
    `;
}

export const Semantic = (): TemplateResult => {
    return html`
        <sp-badge variant="positive">Positive</sp-badge>
        <sp-badge variant="informative">Informative</sp-badge>
        <sp-badge variant="negative">Negative</sp-badge>
        <sp-badge variant="neutral">Neutral</sp-badge>
    `;
} 

export const NonSemantic = (): TemplateResult => {
    return html`
        <sp-badge variant="seafoam">Seafoam</sp-badge>
        <sp-badge variant="indigo">Indigo</sp-badge>
        <sp-badge variant="purple">Purple</sp-badge>
        <sp-badge variant="fuchsia">Fuchsia</sp-badge>
        <sp-badge variant="magenta">Magenta</sp-badge>
        <sp-badge variant="yellow">Yellow</sp-badge>
    `;
}

export const Fixed = (): TemplateResult => {
    return html`
        <div style="width: 400px; height: 300px; background: #eee">
            <sp-badge>None</sp-badge>
            <sp-badge fixed="top">Top</sp-badge>
            <sp-badge fixed="right">Right</sp-badge>
            <sp-badge fixed="bottom">Bottom</sp-badge>
            <sp-badge fixed="left">Left</sp-badge>
        </div>
    `;
}

export const Behaviors = (): TemplateResult => {
    return html`
        <sp-badge disabled>
            <sp-icon-checkmark-circle slot="icon"></sp-icon-checkmark-circle>
            Disabled
        </sp-badge>

        <div style="width: 100px; border: solid 2px #ccc;">
            <sp-badge>
                <sp-icon-checkmark-circle slot="icon"></sp-icon-checkmark-circle>
                This text should automatically wrap, but for no more than two lines
            </sp-badge>
        </div>
    `;
}