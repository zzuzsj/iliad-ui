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
import { IconBase } from '@iliad-ui/icon';
import { FixedIcon } from '../icons/Fixed.js';
import { setCustomTemplateLiteralTag } from '../custom-tag.js';

/**
 * @element sp-icon-editor-fixed
 */
export class IconFixed extends IconBase {
    protected render(): TemplateResult {
        setCustomTemplateLiteralTag(html);
        return FixedIcon() as TemplateResult;
    }
}
