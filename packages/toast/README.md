## Description

`sp-toast` elements display brief, temporary notifications. They are noticeable but do not disrupt the user experience and do not require an action to be taken.

### Usage

[![See it on NPM!](https://img.shields.io/npm/v/@iliad-ui/toast?style=for-the-badge)](https://www.npmjs.com/package/@iliad-ui/toast)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@iliad-ui/toast?style=for-the-badge)](https://bundlephobia.com/result?p=@iliad-ui/toast)
[![Try it on webcomponents.dev](https://img.shields.io/badge/Try%20it%20on-webcomponents.dev-green?style=for-the-badge)](https://webcomponents.dev/edit/collection/fO75441E1Q5ZlI0e9pgq/74g0Hq6Hwy0ehvo7tssT/src/index.ts)

```
yarn add @iliad-ui/toast
```

Import the side effectful registration of `<sp-toast>` via:

```
import '@iliad-ui/toast/sp-toast.js';
```

When looking to leverage the `Toast` base class as a type and/or for extension purposes, do so via:

```
import { Toast } from '@iliad-ui/toast';
```

## Example

### Default

```html
<sp-toast open>
    This is important information that you should read, soon.
</sp-toast>
```

### With actions

```html
<sp-toast open>
    This is important information that you should read, soon.
    <sp-button slot="action" variant="overBackground" quiet>
        Do something
    </sp-button>
</sp-toast>
```

### Wrapping

```html
<sp-toast open style="width: 300px">
    This is important information that you should read, soon.
    <sp-button slot="action" variant="overBackground" quiet>
        Do something
    </sp-button>
</sp-toast>
```

### Variants

#### Negative

```html
<sp-toast open variant="negative">
    This is negative information that you should read, soon.
</sp-toast>
```

#### Positive

```html
<sp-toast open variant="positive">
    This is positive information that you should read, soon.
</sp-toast>
```

#### Info

```html
<sp-toast open variant="info">
    This is information that you should read.
</sp-toast>
```

## Accessibility

An `<sp-toast>` element is by default rendered with a `role` of `alert`. When rendering the `<sp-toast>` to a page, it should be place in a container with a `role` of `region`.
