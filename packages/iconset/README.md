## Description

Extend either the `Iconset` or `IconsetSVG` exports of this package to supply your application with a custom icon set to power the use of `<sp-icon>` elements throughout. Give your new icon set a custom name, and you'll be ready to supply them as `<sp-icon name="custom-icons:icon">` across your application.

### Usage

[![See it on NPM!](https://img.shields.io/npm/v/@iliad-ui/iconset?style=for-the-badge)](https://www.npmjs.com/package/@iliad-ui/iconset)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@iliad-ui/iconset?style=for-the-badge)](https://bundlephobia.com/result?p=@iliad-ui/iconset)

```
yarn add @iliad-ui/iconset
```

```ts
import { TemplateResult } from 'lit-element';
import { IconsetSVG } from '@iliad-ui/iconset/src/iconset-svg.js';

import { CustomIconSet } from 'your-icon-set.js';

export class IconsLarge extends IconsetSVG {
    public constructor() {
        super();
        this.name = 'custom-icons'; // default iconset name for these icons
    }

    protected renderDefaultContent(): TemplateResult {
        return CustomIconSet;
    }
}
```
