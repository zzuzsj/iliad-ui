import { i as iliadCustomElementsDefine, b as Theme, r, S as SpectrumElement, _ as __decorate, e, p, l, a as i, T, o, s, c as SizedMixin, d as o$1 } from './Theme.js';

iliadCustomElementsDefine('sp-theme',Theme);

const styles$j=r`:host{--spectrum-alias-body-text-font-family:var(
--spectrum-global-font-family-base
);--spectrum-picker-s-border-size:var(--spectrum-alias-border-size-thin);--spectrum-picker-s-text-size:var(--spectrum-alias-font-size-s);--spectrum-picker-s-icon-gap:var(
--spectrum-alias-item-workflow-icon-gap-s
);--spectrum-picker-s-height:var(--spectrum-alias-control-height-s);--spectrum-picker-s-placeholder-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-picker-s-placeholder-text-font-weight:var(
--spectrum-alias-font-weight-m
);--spectrum-picker-s-border-radius:var(
--spectrum-alias-border-radius-medium
);--spectrum-picker-s-width:var(--spectrum-global-dimension-size-2000);--spectrum-picker-s-min-width:var(--spectrum-global-dimension-size-450);--spectrum-picker-s-popover-max-width:var(
--spectrum-global-dimension-size-1800
);--spectrum-picker-s-ui-icon-gap:var(--spectrum-alias-item-ui-icon-gap-s);--spectrum-picker-s-error-icon-margin-left:var(
--spectrum-global-dimension-size-100
);--spectrum-picker-s-textonly-padding-left:var(--spectrum-alias-padding-s);--spectrum-picker-s-textonly-padding-right:var(--spectrum-alias-padding-s);--spectrum-picker-m-border-size:var(--spectrum-alias-border-size-thin);--spectrum-picker-m-text-size:var(--spectrum-alias-font-size-m);--spectrum-picker-m-height:var(--spectrum-alias-control-height-m);--spectrum-picker-m-icon-gap:var(
--spectrum-alias-item-workflow-icon-gap-m
);--spectrum-picker-m-placeholder-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-picker-m-placeholder-text-font-weight:var(
--spectrum-alias-font-weight-m
);--spectrum-picker-m-border-radius:var(
--spectrum-alias-border-radius-medium
);--spectrum-picker-m-width:var(--spectrum-global-dimension-size-3000);--spectrum-picker-m-min-width:var(--spectrum-global-dimension-size-600);--spectrum-picker-m-popover-max-width:var(
--spectrum-global-dimension-size-2400
);--spectrum-picker-m-ui-icon-gap:var(--spectrum-alias-item-ui-icon-gap-m);--spectrum-picker-m-error-icon-margin-left:var(
--spectrum-global-dimension-size-150
);--spectrum-picker-m-textonly-padding-left:var(--spectrum-alias-padding-m);--spectrum-picker-m-textonly-padding-right:var(--spectrum-alias-padding-m);--spectrum-picker-l-border-size:var(--spectrum-alias-border-size-thin);--spectrum-picker-l-text-size:var(--spectrum-alias-font-size-l);--spectrum-picker-l-icon-gap:var(
--spectrum-alias-item-workflow-icon-gap-l
);--spectrum-picker-l-height:var(--spectrum-alias-control-height-l);--spectrum-picker-l-placeholder-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-picker-l-placeholder-text-font-weight:var(
--spectrum-alias-font-weight-m
);--spectrum-picker-l-border-radius:var(
--spectrum-alias-border-radius-medium
);--spectrum-picker-l-width:var(--spectrum-global-dimension-size-2000);--spectrum-picker-l-min-width:var(--spectrum-global-dimension-size-750);--spectrum-picker-l-popover-max-width:var(
--spectrum-global-dimension-size-3000
);--spectrum-picker-l-ui-icon-gap:var(--spectrum-alias-item-ui-icon-gap-l);--spectrum-picker-l-error-icon-margin-left:var(
--spectrum-global-dimension-size-185
);--spectrum-picker-l-textonly-padding-left:var(--spectrum-alias-padding-l);--spectrum-picker-l-textonly-padding-right:var(--spectrum-alias-padding-l);--spectrum-picker-xl-border-size:var(--spectrum-alias-border-size-thin);--spectrum-picker-xl-icon-gap:var(
--spectrum-alias-item-workflow-icon-gap-l
);--spectrum-picker-xl-text-size:var(--spectrum-alias-font-size-xl);--spectrum-picker-xl-height:var(--spectrum-alias-control-height-xl);--spectrum-picker-xl-placeholder-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-picker-xl-placeholder-text-font-weight:var(
--spectrum-alias-font-weight-m
);--spectrum-picker-xl-border-radius:var(
--spectrum-alias-border-radius-medium
);--spectrum-picker-xl-width:var(--spectrum-global-dimension-size-3000);--spectrum-picker-xl-min-width:var(--spectrum-global-dimension-size-900);--spectrum-picker-xl-popover-max-width:var(
--spectrum-global-dimension-size-3600
);--spectrum-picker-xl-ui-icon-gap:var(--spectrum-alias-item-ui-icon-gap-xl);--spectrum-picker-xl-error-icon-margin-left:var(
--spectrum-global-dimension-size-225
);--spectrum-picker-xl-textonly-padding-left:var(
--spectrum-alias-padding-xl
);--spectrum-picker-xl-textonly-padding-right:var(
--spectrum-alias-padding-xl
);--spectrum-picker-quiet-m-popover-offset-x:var(
--spectrum-global-dimension-size-150
);--spectrum-popover-border-size:var(--spectrum-alias-border-size-thin);--spectrum-picker-m-text-color:var(--spectrum-alias-text-color-primary);--spectrum-picker-m-background-color:var(--spectrum-global-color-gray-300);--spectrum-picker-m-border-color:var(--spectrum-picker-m-background-color);--spectrum-picker-m-text-color-hover:var(
--spectrum-alias-text-color-primary
);--spectrum-picker-m-background-color-hover:var(
--spectrum-global-color-gray-300
);--spectrum-picker-m-border-color-hover:var(
--spectrum-alias-border-color-hover
);--spectrum-picker-m-icon-color-hover:var(
--spectrum-alias-icon-color-primary
);--spectrum-picker-m-background-color-down:var(
--spectrum-global-color-gray-300
);--spectrum-picker-m-border-color-down:var(
--spectrum-alias-border-color-down
);--spectrum-picker-m-placeholder-text-color-down:var(
--spectrum-alias-text-color-primary
);--spectrum-picker-m-background-color-key-focus:var(
--spectrum-global-color-gray-300
);--spectrum-picker-m-border-color-key-focus:var(
--spectrum-alias-border-color-focus
);--spectrum-picker-m-text-color-key-focus:var(
--spectrum-alias-text-color-primary
);--spectrum-picker-m-placeholder-text-color-key-focus:var(
--spectrum-alias-text-color-primary
);--spectrum-picker-m-border-color-error:var(
--spectrum-global-color-red-500
);--spectrum-picker-m-validation-icon-color-error:var(
--spectrum-semantic-negative-color-icon
);--spectrum-picker-m-border-color-error-hover:var(
--spectrum-global-color-red-600
);--spectrum-picker-m-border-color-error-down:var(
--spectrum-global-color-red-600
);--spectrum-picker-m-border-color-error-key-focus:var(
--spectrum-alias-border-color-focus
);--spectrum-picker-m-background-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-picker-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-picker-m-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-picker-m-placeholder-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-picker-m-icon-color:var(--spectrum-alias-icon-color-primary);--spectrum-picker-m-placeholder-text-color:var(
--spectrum-alias-text-color-placeholder
);--spectrum-picker-m-placeholder-text-color-hover:var(
--spectrum-alias-text-color-primary
);--spectrum-picker-m-placeholder-text-color-mouse-focus:var(
--spectrum-alias-text-color-primary
);--spectrum-picker-quiet-m-border-color:var(
--spectrum-alias-border-color-transparent
);--spectrum-picker-quiet-m-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-picker-quiet-m-background-color-hover:var(
--spectrum-alias-background-color-transparent
);--spectrum-picker-quiet-m-background-color-key-focus:var(
--spectrum-alias-background-color-transparent
);--spectrum-picker-quiet-m-placeholder-text-color-key-focus:var(
--spectrum-alias-text-color-primary
);--spectrum-picker-m-icon-color-key-focus:var(
--spectrum-alias-icon-color-primary
);--spectrum-picker-quiet-m-background-color-down:var(
--spectrum-alias-background-color-transparent
);--spectrum-picker-quiet-m-border-color-down:var(
--spectrum-alias-border-color-transparent
);--spectrum-picker-quiet-m-background-color-disabled:var(
--spectrum-alias-background-color-transparent
)}:host{--spectrum-button-line-height:1.3}#button{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-appearance:button;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);line-height:var(--spectrum-button-line-height);overflow:visible;position:relative;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}#button:focus{outline:0}#button::-moz-focus-inner{border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}#button:disabled{cursor:default}:host([dir=ltr]) #button{padding-left:var(
--spectrum-picker-textonly-padding-left
);padding-right:var(--spectrum-picker-textonly-padding-right)}:host([dir=rtl]) #button{padding-left:var(--spectrum-picker-textonly-padding-right);padding-right:var(
--spectrum-picker-textonly-padding-left
)}#button{align-items:center;border-radius:var(--spectrum-picker-border-radius);border-style:solid;border-width:var(--spectrum-picker-border-size);display:flex;height:var(--spectrum-picker-height);justify-content:center;margin:0;min-width:var(--spectrum-picker-min-width);padding-bottom:0;padding-top:0;transition:background-color var(--spectrum-global-animation-duration-100,.13s),box-shadow var(--spectrum-global-animation-duration-100,.13s),border-color var(--spectrum-global-animation-duration-100,.13s);width:var(--spectrum-picker-width)}#button:disabled,:host([disabled]) #button{border-width:var(
--spectrum-picker-disabled-border-size
);cursor:default}:host([dir=ltr]) #button .icon{margin-right:var(
--spectrum-picker-icon-gap
)}:host([dir=rtl]) #button .icon{margin-left:var(
--spectrum-picker-icon-gap
)}.icon{flex-shrink:0}:host([dir=ltr]) #button #label+.icon{margin-left:var(
--spectrum-picker-icon-gap
)}:host([dir=rtl]) #button #label+.icon{margin-right:var(
--spectrum-picker-icon-gap
)}:host([size=s]){--spectrum-picker-border-size:var(
--spectrum-picker-s-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-text-size:var(
--spectrum-picker-s-text-size,var(--spectrum-alias-item-text-size-s)
);--spectrum-picker-icon-gap:var(
--spectrum-picker-s-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-s)
);--spectrum-picker-height:var(
--spectrum-picker-s-height,var(--spectrum-alias-item-height-s)
);--spectrum-picker-placeholder-text-font-style:var(
--spectrum-picker-s-placeholder-text-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-placeholder-text-font-weight:var(
--spectrum-picker-s-placeholder-text-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-border-radius:var(
--spectrum-picker-s-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-picker-width:var(
--spectrum-picker-s-width,var(--spectrum-global-dimension-size-2000)
);--spectrum-picker-min-width:var(
--spectrum-picker-s-min-width,var(--spectrum-global-dimension-size-450)
);--spectrum-picker-popover-max-width:var(
--spectrum-picker-s-popover-max-width,var(--spectrum-global-dimension-size-1800)
);--spectrum-picker-ui-icon-gap:var(
--spectrum-picker-s-ui-icon-gap,var(--spectrum-alias-item-ui-icon-gap-s)
);--spectrum-picker-error-icon-margin-left:var(
--spectrum-picker-s-error-icon-margin-left,var(--spectrum-global-dimension-size-100)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-s-textonly-padding-left,var(--spectrum-alias-item-padding-s)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-s-textonly-padding-right,var(--spectrum-alias-item-padding-s)
)}:host([size=m]){--spectrum-picker-border-size:var(
--spectrum-picker-m-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-text-size:var(
--spectrum-picker-m-text-size,var(--spectrum-alias-item-text-size-m)
);--spectrum-picker-height:var(
--spectrum-picker-m-height,var(--spectrum-alias-item-height-m)
);--spectrum-picker-icon-gap:var(
--spectrum-picker-m-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-m)
);--spectrum-picker-placeholder-text-font-style:var(
--spectrum-picker-m-placeholder-text-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-placeholder-text-font-weight:var(
--spectrum-picker-m-placeholder-text-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-border-radius:var(
--spectrum-picker-m-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-picker-width:var(
--spectrum-picker-m-width,var(--spectrum-global-dimension-size-3000)
);--spectrum-picker-min-width:var(
--spectrum-picker-m-min-width,var(--spectrum-global-dimension-size-600)
);--spectrum-picker-popover-max-width:var(
--spectrum-picker-m-popover-max-width,var(--spectrum-global-dimension-size-2400)
);--spectrum-picker-ui-icon-gap:var(
--spectrum-picker-m-ui-icon-gap,var(--spectrum-alias-item-ui-icon-gap-m)
);--spectrum-picker-error-icon-margin-left:var(
--spectrum-picker-m-error-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-m-textonly-padding-left,var(--spectrum-alias-item-padding-m)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-m-textonly-padding-right,var(--spectrum-alias-item-padding-m)
)}:host([size=l]){--spectrum-picker-border-size:var(
--spectrum-picker-l-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-text-size:var(
--spectrum-picker-l-text-size,var(--spectrum-alias-item-text-size-l)
);--spectrum-picker-icon-gap:var(
--spectrum-picker-l-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-l)
);--spectrum-picker-height:var(
--spectrum-picker-l-height,var(--spectrum-alias-item-height-l)
);--spectrum-picker-placeholder-text-font-style:var(
--spectrum-picker-l-placeholder-text-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-placeholder-text-font-weight:var(
--spectrum-picker-l-placeholder-text-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-border-radius:var(
--spectrum-picker-l-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-picker-width:var(
--spectrum-picker-l-width,var(--spectrum-global-dimension-size-2000)
);--spectrum-picker-min-width:var(
--spectrum-picker-l-min-width,var(--spectrum-global-dimension-size-750)
);--spectrum-picker-popover-max-width:var(
--spectrum-picker-l-popover-max-width,var(--spectrum-global-dimension-size-3000)
);--spectrum-picker-ui-icon-gap:var(
--spectrum-picker-l-ui-icon-gap,var(--spectrum-alias-item-ui-icon-gap-l)
);--spectrum-picker-error-icon-margin-left:var(
--spectrum-picker-l-error-icon-margin-left,var(--spectrum-global-dimension-size-185)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-l-textonly-padding-left,var(--spectrum-alias-item-padding-l)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-l-textonly-padding-right,var(--spectrum-alias-item-padding-l)
)}:host([size=xl]){--spectrum-picker-border-size:var(
--spectrum-picker-xl-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-icon-gap:var(
--spectrum-picker-xl-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-l)
);--spectrum-picker-text-size:var(
--spectrum-picker-xl-text-size,var(--spectrum-alias-item-text-size-xl)
);--spectrum-picker-height:var(
--spectrum-picker-xl-height,var(--spectrum-alias-item-height-xl)
);--spectrum-picker-placeholder-text-font-style:var(
--spectrum-picker-xl-placeholder-text-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-placeholder-text-font-weight:var(
--spectrum-picker-xl-placeholder-text-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-border-radius:var(
--spectrum-picker-xl-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-picker-width:var(
--spectrum-picker-xl-width,var(--spectrum-global-dimension-size-3000)
);--spectrum-picker-min-width:var(
--spectrum-picker-xl-min-width,var(--spectrum-global-dimension-size-900)
);--spectrum-picker-popover-max-width:var(
--spectrum-picker-xl-popover-max-width,var(--spectrum-global-dimension-size-3600)
);--spectrum-picker-ui-icon-gap:var(
--spectrum-picker-xl-ui-icon-gap,var(--spectrum-alias-item-ui-icon-gap-xl)
);--spectrum-picker-error-icon-margin-left:var(
--spectrum-picker-xl-error-icon-margin-left,var(--spectrum-global-dimension-size-225)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-xl-textonly-padding-left,var(--spectrum-alias-item-padding-xl)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-xl-textonly-padding-right,var(--spectrum-alias-item-padding-xl)
)}:host{--spectrum-picker-min-width:var(
--spectrum-global-dimension-size-400
);--spectrum-picker-disabled-border-size:0;--spectrum-picker-popover-max-width:var(
--spectrum-global-dimension-size-3000
);--spectrum-picker-width:var(--spectrum-global-dimension-size-2400);--spectrum-picker-border-size-increase-focus:1px}:host([quiet]) #button{--spectrum-picker-border-size:0;--spectrum-picker-border-radius:0;--spectrum-picker-textonly-padding-left:0;--spectrum-picker-textonly-padding-right:0}:host([quiet]) #button{min-width:0;width:auto}:host([quiet]) #button:disabled.focus-visible,:host([quiet][disabled]) #button.focus-visible{box-shadow:none}:host([quiet]) #button:disabled:focus-visible,:host([quiet][disabled]) #button:focus-visible{box-shadow:none}:host([dir=ltr]) #label{text-align:left}:host([dir=rtl]) #label{text-align:right}#label{flex:1 1 auto;font-size:var(--spectrum-picker-text-size);height:calc(var(--spectrum-picker-height) - var(--spectrum-picker-border-size)*2);line-height:calc(var(--spectrum-picker-height) - var(--spectrum-picker-border-size)*2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#label.placeholder{font-style:var(--spectrum-picker-placeholder-text-font-style);font-weight:var(
--spectrum-picker-placeholder-text-font-weight
);transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}.picker{display:inline-block;flex-shrink:0;position:relative;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-out;vertical-align:top}:host([dir=ltr]) .validationIcon{margin-left:var(
--spectrum-picker-error-icon-margin-left
)}:host([dir=rtl]) .validationIcon{margin-right:var(
--spectrum-picker-error-icon-margin-left
)}:host([dir=ltr]) #label~.picker{margin-left:var(
--spectrum-picker-ui-icon-gap
)}:host([dir=rtl]) #label~.picker{margin-right:var(
--spectrum-picker-ui-icon-gap
)}#popover{max-width:var(
--spectrum-picker-popover-max-width
)}:host([dir=ltr]) .spectrum-Picker-popover--quiet{margin-left:calc(-1*(var(--spectrum-picker-quiet-m-popover-offset-x,var(--spectrum-global-dimension-size-150)) + var(--spectrum-popover-border-size,var(--spectrum-alias-border-size-thin))))}:host([dir=rtl]) .spectrum-Picker-popover--quiet{margin-right:calc(-1*(var(--spectrum-picker-quiet-m-popover-offset-x,var(--spectrum-global-dimension-size-150)) + var(--spectrum-popover-border-size,var(--spectrum-alias-border-size-thin))))}#button{background-color:var(
--spectrum-picker-m-background-color,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-picker-m-border-color,var(--spectrum-alias-border-color)
);color:var(
--spectrum-picker-m-text-color,var(--spectrum-alias-text-color)
)}#button:hover{background-color:var(
--spectrum-picker-m-background-color-hover,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-picker-m-border-color-hover,var(--spectrum-alias-border-color-hover)
);color:var(
--spectrum-picker-m-text-color-hover,var(--spectrum-alias-text-color-hover)
)}#button:hover .picker{color:var(
--spectrum-picker-m-icon-color-hover,var(--spectrum-alias-icon-color-hover)
)}#button:active,:host([open]) #button{background-color:var(
--spectrum-picker-m-background-color-down,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-picker-m-border-color-down,var(--spectrum-alias-border-color-down)
)}#button:active.placeholder #label,:host([open]) #button.placeholder #label{color:var(
--spectrum-picker-m-placeholder-text-color-down,var(--spectrum-alias-placeholder-text-color-down)
)}#button.focus-visible,:host([focused]) #button{background-color:var(
--spectrum-picker-m-background-color-key-focus,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);box-shadow:0 0 0 var(--spectrum-picker-border-size-increase-focus) var(
--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);color:var(
--spectrum-picker-m-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}#button:focus-visible,:host([focused]) #button{background-color:var(
--spectrum-picker-m-background-color-key-focus,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);box-shadow:0 0 0 var(--spectrum-picker-border-size-increase-focus) var(
--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);color:var(
--spectrum-picker-m-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}#button.focus-visible.placeholder,:host([focused]) #button.placeholder{color:var(
--spectrum-picker-m-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}#button:focus-visible.placeholder,:host([focused]) #button.placeholder{color:var(
--spectrum-picker-m-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([invalid]) #button{border-color:var(
--spectrum-picker-m-border-color-error,var(--spectrum-global-color-red-500)
)}:host([invalid]) #button .validationIcon{color:var(
--spectrum-picker-m-validation-icon-color-error,var(--spectrum-semantic-negative-color-icon)
)}:host([invalid]) #button:hover{border-color:var(
--spectrum-picker-m-border-color-error-hover,var(--spectrum-global-color-red-600)
)}:host([invalid]) #button:active,:host([invalid][open]) #button{border-color:var(
--spectrum-picker-m-border-color-error-down,var(--spectrum-global-color-red-600)
)}:host([invalid]) #button.focus-visible,:host([invalid][focused]) #button{border-color:var(
--spectrum-picker-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
);box-shadow:0 0 0 var(--spectrum-picker-border-size-increase-focus) var(
--spectrum-picker-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([invalid]) #button:focus-visible,:host([invalid][focused]) #button{border-color:var(
--spectrum-picker-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
);box-shadow:0 0 0 var(--spectrum-picker-border-size-increase-focus) var(
--spectrum-picker-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
)}#button:disabled,:host([disabled]) #button{background-color:var(
--spectrum-picker-m-background-color-disabled,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-picker-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}#button:disabled .icon,#button:disabled .picker,#button:disabled .validationIcon,:host([disabled]) #button .icon,:host([disabled]) #button .picker,:host([disabled]) #button .validationIcon{color:var(
--spectrum-picker-m-icon-color-disabled,var(--spectrum-alias-icon-color-disabled)
)}#button:disabled #label.placeholder,:host([disabled]) #button #label.placeholder{color:var(
--spectrum-picker-m-placeholder-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}.picker{color:var(
--spectrum-picker-m-icon-color,var(--spectrum-alias-icon-color)
)}#label.placeholder{color:var(
--spectrum-picker-m-placeholder-text-color,var(--spectrum-alias-placeholder-text-color)
)}#label.placeholder:hover{color:var(
--spectrum-picker-m-placeholder-text-color-hover,var(--spectrum-alias-placeholder-text-color-hover)
)}#label.placeholder:active{color:var(
--spectrum-picker-m-placeholder-text-color-mouse-focus,var(--spectrum-alias-placeholder-text-color)
)}:host([quiet]) #button{background-color:var(
--spectrum-picker-quiet-m-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-picker-quiet-m-border-color,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-picker-m-text-color,var(--spectrum-alias-text-color)
)}:host([quiet]) #button:hover{background-color:var(
--spectrum-picker-quiet-m-background-color-hover,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-picker-m-text-color-hover,var(--spectrum-alias-text-color-hover)
)}:host([quiet]) #button.focus-visible,:host([quiet][focused]) #button{background-color:var(
--spectrum-picker-quiet-m-background-color-key-focus,var(--spectrum-alias-background-color-transparent)
);box-shadow:0 2px 0 0 var(
--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([quiet]) #button:focus-visible,:host([quiet][focused]) #button{background-color:var(
--spectrum-picker-quiet-m-background-color-key-focus,var(--spectrum-alias-background-color-transparent)
);box-shadow:0 2px 0 0 var(
--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([quiet]) #button.focus-visible.placeholder,:host([quiet][focused]) #button.placeholder{color:var(
--spectrum-picker-quiet-m-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([quiet]) #button:focus-visible.placeholder,:host([quiet][focused]) #button.placeholder{color:var(
--spectrum-picker-quiet-m-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([quiet]) #button.focus-visible .picker,:host([quiet][focused]) #button .picker{color:var(
--spectrum-picker-m-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}:host([quiet]) #button:focus-visible .picker,:host([quiet][focused]) #button .picker{color:var(
--spectrum-picker-m-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}:host([quiet]) #button:active,:host([quiet][open]) #button{background-color:var(
--spectrum-picker-quiet-m-background-color-down,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-picker-quiet-m-border-color-down,var(--spectrum-alias-border-color-transparent)
)}:host([quiet]) #button:active.focus-visible,:host([quiet][focused]) #button:active,:host([quiet][open]) #button.focus-visible,:host([quiet][open][focused]) #button{background-color:var(
--spectrum-picker-quiet-m-background-color-key-focus,var(--spectrum-alias-background-color-transparent)
);box-shadow:0 2px 0 0 var(
--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([quiet]) #button:active:focus-visible,:host([quiet][focused]) #button:active,:host([quiet][open]) #button:focus-visible,:host([quiet][open][focused]) #button{background-color:var(
--spectrum-picker-quiet-m-background-color-key-focus,var(--spectrum-alias-background-color-transparent)
);box-shadow:0 2px 0 0 var(
--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([quiet][invalid]) #button.focus-visible,:host([quiet][invalid][focused]) #button{box-shadow:0 2px 0 0 var(
--spectrum-picker-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([quiet][invalid]) #button:focus-visible,:host([quiet][invalid][focused]) #button{box-shadow:0 2px 0 0 var(
--spectrum-picker-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([quiet]) #button:disabled,:host([quiet][disabled]) #button{background-color:var(
--spectrum-picker-quiet-m-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-picker-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host{display:inline-flex;max-width:100%;min-width:var(--spectrum-picker-min-width);vertical-align:top;width:var(--spectrum-picker-width)}:host([quiet]){min-width:0;width:auto}:host([size]){--spectrum-picker-width:var(--spectrum-global-dimension-size-2400)}#button{max-width:100%;min-width:100%;width:100%}:host([readonly]) #button{-webkit-user-select:inherit;user-select:inherit}sp-popover{display:none}.picker,.validationIcon{flex-shrink:0}:host([focused]:not([quiet])) #button #label.placeholder{color:var(
--spectrum-picker-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([focused]:not([quiet])) #button .picker{color:var(
--spectrum-picker-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}.visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:host([dir=ltr]) #label.visually-hidden+.picker{margin-left:auto}:host([dir=rtl]) #label.visually-hidden+.picker{margin-right:auto}`;

const styles$i=r`:host{--spectrum-alias-ui-icon-triplegripper-size-100-height:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-ui-icon-doublegripper-size-100-width:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-ui-icon-singlegripper-size-100-width:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-ui-icon-cornertriangle-size-75:var(
--spectrum-global-dimension-size-65
);--spectrum-alias-ui-icon-cornertriangle-size-200:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-ui-icon-asterisk-size-75:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-asterisk-size-100:var(
--spectrum-global-dimension-size-100
)}@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-ChevronDown100,.spectrum-UIIcon-ChevronDown200,.spectrum-UIIcon-ChevronDown300,.spectrum-UIIcon-ChevronDown400,.spectrum-UIIcon-ChevronDown500,.spectrum-UIIcon-ChevronDown75{transform:rotate(90deg)}.spectrum-UIIcon-ChevronLeft100,.spectrum-UIIcon-ChevronLeft200,.spectrum-UIIcon-ChevronLeft300,.spectrum-UIIcon-ChevronLeft400,.spectrum-UIIcon-ChevronLeft500,.spectrum-UIIcon-ChevronLeft75{transform:rotate(180deg)}.spectrum-UIIcon-ChevronUp100,.spectrum-UIIcon-ChevronUp200,.spectrum-UIIcon-ChevronUp300,.spectrum-UIIcon-ChevronUp400,.spectrum-UIIcon-ChevronUp500,.spectrum-UIIcon-ChevronUp75{transform:rotate(270deg)}.spectrum-UIIcon-ChevronDown75,.spectrum-UIIcon-ChevronLeft75,.spectrum-UIIcon-ChevronRight75,.spectrum-UIIcon-ChevronUp75{height:var(--spectrum-alias-ui-icon-chevron-size-75);width:var(
--spectrum-alias-ui-icon-chevron-size-75
)}.spectrum-UIIcon-ChevronDown100,.spectrum-UIIcon-ChevronLeft100,.spectrum-UIIcon-ChevronRight100,.spectrum-UIIcon-ChevronUp100{height:var(--spectrum-alias-ui-icon-chevron-size-100);width:var(
--spectrum-alias-ui-icon-chevron-size-100
)}.spectrum-UIIcon-ChevronDown200,.spectrum-UIIcon-ChevronLeft200,.spectrum-UIIcon-ChevronRight200,.spectrum-UIIcon-ChevronUp200{height:var(--spectrum-alias-ui-icon-chevron-size-200);width:var(
--spectrum-alias-ui-icon-chevron-size-200
)}.spectrum-UIIcon-ChevronDown300,.spectrum-UIIcon-ChevronLeft300,.spectrum-UIIcon-ChevronRight300,.spectrum-UIIcon-ChevronUp300{height:var(--spectrum-alias-ui-icon-chevron-size-300);width:var(
--spectrum-alias-ui-icon-chevron-size-300
)}.spectrum-UIIcon-ChevronDown400,.spectrum-UIIcon-ChevronLeft400,.spectrum-UIIcon-ChevronRight400,.spectrum-UIIcon-ChevronUp400{height:var(--spectrum-alias-ui-icon-chevron-size-400);width:var(
--spectrum-alias-ui-icon-chevron-size-400
)}.spectrum-UIIcon-ChevronDown500,.spectrum-UIIcon-ChevronLeft500,.spectrum-UIIcon-ChevronRight500,.spectrum-UIIcon-ChevronUp500{height:var(--spectrum-alias-ui-icon-chevron-size-500);width:var(
--spectrum-alias-ui-icon-chevron-size-500
)}`;

(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?factory():typeof define==='function'&&define.amd?define(factory):factory();})(window,function(){'use strict';/**
   * Applies the :focus-visible polyfill at the given scope.
   * A scope in this case is either the top-level Document or a Shadow Root.
   *
   * @param {(Document|ShadowRoot)} scope
   * @see https://github.com/WICG/focus-visible
   */function applyFocusVisiblePolyfill(scope){var hadKeyboardEvent=true;var hadFocusVisibleRecently=false;var hadFocusVisibleRecentlyTimeout=null;var inputTypesAllowlist={text:true,search:true,url:true,tel:true,email:true,password:true,number:true,date:true,month:true,week:true,time:true,datetime:true,'datetime-local':true};/**
     * Helper function for legacy browsers and iframes which sometimes focus
     * elements like document, body, and non-interactive SVG.
     * @param {Element} el
     */function isValidFocusTarget(el){if(el&&el!==document&&el.nodeName!=='HTML'&&el.nodeName!=='BODY'&&'classList'in el&&'contains'in el.classList){return true;}return false;}/**
     * Computes whether the given element should automatically trigger the
     * `focus-visible` class being added, i.e. whether it should always match
     * `:focus-visible` when focused.
     * @param {Element} el
     * @return {boolean}
     */function focusTriggersKeyboardModality(el){var type=el.type;var tagName=el.tagName;if(tagName==='INPUT'&&inputTypesAllowlist[type]&&!el.readOnly){return true;}if(tagName==='TEXTAREA'&&!el.readOnly){return true;}if(el.isContentEditable){return true;}return false;}/**
     * Add the `focus-visible` class to the given element if it was not added by
     * the author.
     * @param {Element} el
     */function addFocusVisibleClass(el){if(el.classList.contains('focus-visible')){return;}el.classList.add('focus-visible');el.setAttribute('data-focus-visible-added','');}/**
     * Remove the `focus-visible` class from the given element if it was not
     * originally added by the author.
     * @param {Element} el
     */function removeFocusVisibleClass(el){if(!el.hasAttribute('data-focus-visible-added')){return;}el.classList.remove('focus-visible');el.removeAttribute('data-focus-visible-added');}/**
     * If the most recent user interaction was via the keyboard;
     * and the key press did not include a meta, alt/option, or control key;
     * then the modality is keyboard. Otherwise, the modality is not keyboard.
     * Apply `focus-visible` to any current active element and keep track
     * of our keyboard modality state with `hadKeyboardEvent`.
     * @param {KeyboardEvent} e
     */function onKeyDown(e){if(e.metaKey||e.altKey||e.ctrlKey){return;}if(isValidFocusTarget(scope.activeElement)){addFocusVisibleClass(scope.activeElement);}hadKeyboardEvent=true;}/**
     * If at any point a user clicks with a pointing device, ensure that we change
     * the modality away from keyboard.
     * This avoids the situation where a user presses a key on an already focused
     * element, and then clicks on a different element, focusing it with a
     * pointing device, while we still think we're in keyboard modality.
     * @param {Event} e
     */function onPointerDown(e){hadKeyboardEvent=false;}/**
     * On `focus`, add the `focus-visible` class to the target if:
     * - the target received focus as a result of keyboard navigation, or
     * - the event target is an element that will likely require interaction
     *   via the keyboard (e.g. a text box)
     * @param {Event} e
     */function onFocus(e){// Prevent IE from focusing the document or HTML element.
if(!isValidFocusTarget(e.target)){return;}if(hadKeyboardEvent||focusTriggersKeyboardModality(e.target)){addFocusVisibleClass(e.target);}}/**
     * On `blur`, remove the `focus-visible` class from the target.
     * @param {Event} e
     */function onBlur(e){if(!isValidFocusTarget(e.target)){return;}if(e.target.classList.contains('focus-visible')||e.target.hasAttribute('data-focus-visible-added')){// To detect a tab/window switch, we look for a blur event followed
// rapidly by a visibility change.
// If we don't see a visibility change within 100ms, it's probably a
// regular focus change.
hadFocusVisibleRecently=true;window.clearTimeout(hadFocusVisibleRecentlyTimeout);hadFocusVisibleRecentlyTimeout=window.setTimeout(function(){hadFocusVisibleRecently=false;},100);removeFocusVisibleClass(e.target);}}/**
     * If the user changes tabs, keep track of whether or not the previously
     * focused element had .focus-visible.
     * @param {Event} e
     */function onVisibilityChange(e){if(document.visibilityState==='hidden'){// If the tab becomes active again, the browser will handle calling focus
// on the element (Safari actually calls it twice).
// If this tab change caused a blur on an element with focus-visible,
// re-apply the class when the user switches back to the tab.
if(hadFocusVisibleRecently){hadKeyboardEvent=true;}addInitialPointerMoveListeners();}}/**
     * Add a group of listeners to detect usage of any pointing devices.
     * These listeners will be added when the polyfill first loads, and anytime
     * the window is blurred, so that they are active when the window regains
     * focus.
     */function addInitialPointerMoveListeners(){document.addEventListener('mousemove',onInitialPointerMove);document.addEventListener('mousedown',onInitialPointerMove);document.addEventListener('mouseup',onInitialPointerMove);document.addEventListener('pointermove',onInitialPointerMove);document.addEventListener('pointerdown',onInitialPointerMove);document.addEventListener('pointerup',onInitialPointerMove);document.addEventListener('touchmove',onInitialPointerMove);document.addEventListener('touchstart',onInitialPointerMove);document.addEventListener('touchend',onInitialPointerMove);}function removeInitialPointerMoveListeners(){document.removeEventListener('mousemove',onInitialPointerMove);document.removeEventListener('mousedown',onInitialPointerMove);document.removeEventListener('mouseup',onInitialPointerMove);document.removeEventListener('pointermove',onInitialPointerMove);document.removeEventListener('pointerdown',onInitialPointerMove);document.removeEventListener('pointerup',onInitialPointerMove);document.removeEventListener('touchmove',onInitialPointerMove);document.removeEventListener('touchstart',onInitialPointerMove);document.removeEventListener('touchend',onInitialPointerMove);}/**
     * When the polfyill first loads, assume the user is in keyboard modality.
     * If any event is received from a pointing device (e.g. mouse, pointer,
     * touch), turn off keyboard modality.
     * This accounts for situations where focus enters the page from the URL bar.
     * @param {Event} e
     */function onInitialPointerMove(e){// Work around a Safari quirk that fires a mousemove on <html> whenever the
// window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
if(e.target.nodeName&&e.target.nodeName.toLowerCase()==='html'){return;}hadKeyboardEvent=false;removeInitialPointerMoveListeners();}// For some kinds of state, we are interested in changes at the global scope
// only. For example, global pointer input, global key presses and global
// visibility change should affect the state at every scope:
document.addEventListener('keydown',onKeyDown,true);document.addEventListener('mousedown',onPointerDown,true);document.addEventListener('pointerdown',onPointerDown,true);document.addEventListener('touchstart',onPointerDown,true);document.addEventListener('visibilitychange',onVisibilityChange,true);addInitialPointerMoveListeners();// For focus and blur, we specifically care about state changes in the local
// scope. This is because focus / blur events that originate from within a
// shadow root are not re-dispatched from the host element if it was already
// the active element in its own scope:
scope.addEventListener('focus',onFocus,true);scope.addEventListener('blur',onBlur,true);// We detect that a node is a ShadowRoot by ensuring that it is a
// DocumentFragment and also has a host property. This check covers native
// implementation and polyfill implementation transparently. If we only cared
// about the native implementation, we could just check if the scope was
// an instance of a ShadowRoot.
if(scope.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&scope.host){// Since a ShadowRoot is a special kind of DocumentFragment, it does not
// have a root element to add a class to. So, we add this attribute to the
// host element instead:
scope.host.setAttribute('data-js-focus-visible','');}else if(scope.nodeType===Node.DOCUMENT_NODE){document.documentElement.classList.add('js-focus-visible');document.documentElement.setAttribute('data-js-focus-visible','');}}// It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199
if(typeof window!=='undefined'&&typeof document!=='undefined'){// Make the polyfill helper globally available. This can be used as a signal
// to interested libraries that wish to coordinate with the polyfill for e.g.,
// applying the polyfill to a shadow root:
window.applyFocusVisiblePolyfill=applyFocusVisiblePolyfill;// Notify interested libraries of the polyfill's presence, in case the
// polyfill was loaded lazily:
var event;try{event=new CustomEvent('focus-visible-polyfill-ready');}catch(error){// IE11 does not support using CustomEvent as a constructor directly:
event=document.createEvent('CustomEvent');event.initCustomEvent('focus-visible-polyfill-ready',false,false,{});}window.dispatchEvent(event);}if(typeof document!=='undefined'){// Apply the polyfill to the global document, so that no JavaScript
// coordination is required to use the polyfill in the top-level document:
applyFocusVisiblePolyfill(document);}});

let hasFocusVisible=true;try{document.body.querySelector(':focus-visible');}catch(error){hasFocusVisible=false;}/**
 * This mixin function is designed to be applied to a class that inherits
 * from HTMLElement. It makes it easy for a custom element to coordinate with
 * the :focus-visible polyfill.
 *
 * NOTE(cdata): The code here was adapted from an example proposed with the
 * introduction of ShadowDOM support in the :focus-visible polyfill.
 *
 * @see https://github.com/WICG/focus-visible/pull/196
 * @param {Function} SuperClass The base class implementation to decorate with
 * implementation that coordinates with the :focus-visible polyfill
 */const FocusVisiblePolyfillMixin=SuperClass=>{var _a;const coordinateWithPolyfill=instance=>{// If there is no shadow root, there is no need to coordinate with
// the polyfill. If we already coordinated with the polyfill, we can
// skip subsequent invokcations:
if(instance.shadowRoot==null||instance.hasAttribute('data-js-focus-visible')){// eslint-disable-next-line @typescript-eslint/no-empty-function
return ()=>{};}// The polyfill might already be loaded. If so, we can apply it to
// the shadow root immediately:
if(self.applyFocusVisiblePolyfill){self.applyFocusVisiblePolyfill(instance.shadowRoot);if(instance.manageAutoFocus){instance.manageAutoFocus();}}else {const coordinationHandler=()=>{if(self.applyFocusVisiblePolyfill&&instance.shadowRoot){self.applyFocusVisiblePolyfill(instance.shadowRoot);}if(instance.manageAutoFocus){instance.manageAutoFocus();}};// Otherwise, wait for the polyfill to be loaded lazily. It might
// never be loaded, but if it is then we can apply it to the
// shadow root at the appropriate time by waiting for the ready
// event:
self.addEventListener('focus-visible-polyfill-ready',coordinationHandler,{once:true});return ()=>{self.removeEventListener('focus-visible-polyfill-ready',coordinationHandler);};}// eslint-disable-next-line @typescript-eslint/no-empty-function
return ()=>{};};const $endPolyfillCoordination=Symbol('endPolyfillCoordination');// IE11 doesn't natively support custom elements or JavaScript class
// syntax The mixin implementation assumes that the user will take the
// appropriate steps to support both:
class FocusVisibleCoordinator extends SuperClass{constructor(){super(...arguments);this[_a]=null;}// Attempt to coordinate with the polyfill when connected to the
// document:
connectedCallback(){super.connectedCallback&&super.connectedCallback();if(!hasFocusVisible){requestAnimationFrame(()=>{if(this[$endPolyfillCoordination]==null){this[$endPolyfillCoordination]=coordinateWithPolyfill(this);}});}}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback();// It's important to remove the polyfill event listener when we
// disconnect, otherwise we will leak the whole element via window:
if(!hasFocusVisible){requestAnimationFrame(()=>{if(this[$endPolyfillCoordination]!=null){// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
this[$endPolyfillCoordination]();this[$endPolyfillCoordination]=null;}});}}}_a=$endPolyfillCoordination;return FocusVisibleCoordinator;};

/**
 * Focusable base class handles tabindex setting into shadowed elements automatically.
 *
 * This implementation is based heavily on the aybolit delegate-focus-mixin at
 * https://github.com/web-padawan/aybolit/blob/master/packages/core/src/mixins/delegate-focus-mixin.js
 */class Focusable extends FocusVisiblePolyfillMixin(SpectrumElement){constructor(){super(...arguments);/**
         * Disable this control. It will not receive focus or events
         */this.disabled=false;/**
         * When this control is rendered, focus it automatically
         * @private
         */this.autofocus=false;this._tabIndex=0;this.manipulatingTabindex=false;}/**
     * The tab index to apply to this control. See general documentation about
     * the tabindex HTML property
     *
     * @private
     */get tabIndex(){if(this.focusElement===this){const tabindex=this.hasAttribute('tabindex')?Number(this.getAttribute('tabindex')):NaN;return !isNaN(tabindex)?tabindex:-1;}const tabIndexAttribute=parseFloat(this.hasAttribute('tabindex')?this.getAttribute('tabindex')||'0':'0');// When `disabled` tabindex is -1.
// When host tabindex -1, use that as the cache.
if(this.disabled||tabIndexAttribute<0){return -1;}// When `focusElement` isn't available yet,
// use host tabindex as the cache.
if(!this.focusElement){return tabIndexAttribute;}// All other times, use the tabindex of `focusElement`
// as the cache for this value.
return this.focusElement.tabIndex;}set tabIndex(tabIndex){// Flipping `manipulatingTabindex` to true before a change
// allows for that change NOT to effect the cached value of tabindex
if(this.manipulatingTabindex){this.manipulatingTabindex=false;return;}if(this.focusElement===this){if(tabIndex!==this.tabIndex){this._tabIndex=tabIndex;const tabindex=this.disabled?'-1':''+tabIndex;this.setAttribute('tabindex',tabindex);}return;}if(tabIndex===-1){this.addEventListener('pointerdown',this.onPointerdownManagementOfTabIndex);}else {// All code paths are about to address the host tabindex without side effect.
this.manipulatingTabindex=true;this.removeEventListener('pointerdown',this.onPointerdownManagementOfTabIndex);}if(tabIndex===-1||this.disabled){// Do not cange the tabindex of `focusElement` as it is the "old" value cache.
// Make element NOT focusable.
this.setAttribute('tabindex','-1');this.removeAttribute('focusable');if(tabIndex!==-1){// Cache all NON-`-1` values on the `focusElement`.
this.manageFocusElementTabindex(tabIndex);}return;}this.setAttribute('focusable','');if(this.hasAttribute('tabindex')){this.removeAttribute('tabindex');}else {// You can't remove an attribute that isn't there,
// manually end the `manipulatingTabindex` guard.
this.manipulatingTabindex=false;}this.manageFocusElementTabindex(tabIndex);}onPointerdownManagementOfTabIndex(){if(this.tabIndex===-1){this.tabIndex=0;this.focus({preventScroll:true});}}async manageFocusElementTabindex(tabIndex){if(!this.focusElement){// allow setting these values to be async when needed.
await this.updateComplete;}if(tabIndex===null){this.focusElement.removeAttribute('tabindex');}else {this.focusElement.tabIndex=tabIndex;}}/**
     * @private
     */get focusElement(){throw new Error('Must implement focusElement getter!');}focus(options){if(this.disabled||!this.focusElement){return;}if(this.focusElement!==this){this.focusElement.focus(options);}else {HTMLElement.prototype.focus.apply(this,[options]);}}blur(){const focusElement=this.focusElement||this;if(focusElement!==this){focusElement.blur();}else {HTMLElement.prototype.blur.apply(this);}}click(){if(this.disabled){return;}const focusElement=this.focusElement||this;if(focusElement!==this){focusElement.click();}else {HTMLElement.prototype.click.apply(this);}}manageAutoFocus(){if(this.autofocus){/**
             * Trick :focus-visible polyfill into thinking keyboard based focus
             *
             * @private
             **/this.dispatchEvent(new KeyboardEvent('keydown',{code:'Tab'}));this.focusElement.focus();}}firstUpdated(changes){super.firstUpdated(changes);this.manageAutoFocus();if(!this.hasAttribute('tabindex')||this.getAttribute('tabindex')!=='-1'){this.setAttribute('focusable','');}}update(changedProperties){if(changedProperties.has('disabled')){this.handleDisabledChanged(this.disabled,changedProperties.get('disabled'));}super.update(changedProperties);}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has('disabled')&&this.disabled){this.blur();}}async handleDisabledChanged(disabled,oldDisabled){const canSetDisabled=()=>this.focusElement!==this&&typeof this.focusElement.disabled!=='undefined';if(disabled){this.manipulatingTabindex=true;this.setAttribute('tabindex','-1');await this.updateComplete;if(canSetDisabled()){this.focusElement.disabled=true;}else {this.setAttribute('aria-disabled','true');}}else if(oldDisabled){this.manipulatingTabindex=true;if(this.focusElement===this){this.setAttribute('tabindex',''+this._tabIndex);}else {this.removeAttribute('tabindex');}await this.updateComplete;if(canSetDisabled()){this.focusElement.disabled=false;}else {this.removeAttribute('aria-disabled');}}}}__decorate([e({type:Boolean,reflect:true})],Focusable.prototype,"disabled",void 0);__decorate([e({type:Boolean})],Focusable.prototype,"autofocus",void 0);__decorate([e({type:Number})],Focusable.prototype,"tabIndex",null);

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/function restoreChildren(placeholderItems,srcElements,cleanupCallbacks=[]){for(let index=0;index<srcElements.length;++index){const srcElement=srcElements[index];const placeholderItem=placeholderItems[index];const parentElement=placeholderItem.parentElement||placeholderItem.getRootNode();if(cleanupCallbacks[index]){cleanupCallbacks[index](srcElement);}if(parentElement&&parentElement!==placeholderItem){parentElement.replaceChild(srcElement,placeholderItem);}delete placeholderItems[index];}return srcElements;}const reparentChildren=(srcElements,newParent,prepareCallback)=>{const placeholderItems=[];const cleanupCallbacks=[];for(let index=0;index<srcElements.length;++index){const srcElement=srcElements[index];if(prepareCallback){cleanupCallbacks.push(prepareCallback(srcElement)||(()=>{return;}));}const placeholderItem=document.createComment('placeholder for reparented element');placeholderItems.push(placeholderItem);const parentElement=srcElement.parentElement||srcElement.getRootNode();if(parentElement&&parentElement!==srcElement){parentElement.replaceChild(placeholderItem,srcElement);}newParent.append(srcElement);}return function(){return restoreChildren(placeholderItems,srcElements,cleanupCallbacks);};};

const styles$h=r`:host{--spectrum-alias-ui-icon-triplegripper-size-100-height:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-ui-icon-doublegripper-size-100-width:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-ui-icon-singlegripper-size-100-width:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-ui-icon-cornertriangle-size-75:var(
--spectrum-global-dimension-size-65
);--spectrum-alias-ui-icon-cornertriangle-size-200:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-ui-icon-asterisk-size-75:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-asterisk-size-100:var(
--spectrum-global-dimension-size-100
)}:host{fill:currentColor;color:inherit;display:inline-block;pointer-events:none}:host(:not(:root)){overflow:hidden}@media (forced-colors:active){.spectrum-UIIcon,:host{forced-color-adjust:auto}}:host{--spectrum-icon-size-s:var(
--spectrum-alias-workflow-icon-size-s,var(--spectrum-global-dimension-size-200)
);--spectrum-icon-size-m:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);--spectrum-icon-size-l:var(--spectrum-alias-workflow-icon-size-l);--spectrum-icon-size-xl:var(
--spectrum-alias-workflow-icon-size-xl,var(--spectrum-global-dimension-size-275)
);--spectrum-icon-size-xxl:var(--spectrum-global-dimension-size-400)}:host([size=s]){height:var(
--spectrum-icon-size-s
);width:var(--spectrum-icon-size-s)}:host([size=m]){height:var(
--spectrum-icon-size-m
);width:var(--spectrum-icon-size-m)}:host([size=l]){height:var(
--spectrum-icon-size-l
);width:var(--spectrum-icon-size-l)}:host([size=xl]){height:var(
--spectrum-icon-size-xl
);width:var(--spectrum-icon-size-xl)}:host([size=xxl]){height:var(
--spectrum-icon-size-xxl
);width:var(--spectrum-icon-size-xxl)}:host{height:var(
--spectrum-icon-tshirt-size-height,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
);width:var(
--spectrum-icon-tshirt-size-width,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
)}#container{height:100%}::slotted(*),img,svg{height:100%;vertical-align:top;width:100%}`;

class IconBase extends SpectrumElement{static get styles(){return [styles$h];}render(){return p`<slot></slot>`;}}__decorate([e()],IconBase.prototype,"label",void 0);__decorate([e({reflect:true})],IconBase.prototype,"size",void 0);

class IconsetRegistry{constructor(){this.iconsetMap=new Map();}// singleton getter
static getInstance(){if(!IconsetRegistry.instance){IconsetRegistry.instance=new IconsetRegistry();}return IconsetRegistry.instance;}addIconset(name,iconset){this.iconsetMap.set(name,iconset);// dispatch a sp-iconset-added event on window to let everyone know we have a new iconset
// note we're using window here for efficiency since we don't need to bubble through the dom since everyone
// will know where to look for this event
const event=new CustomEvent('sp-iconset-added',{bubbles:true,composed:true,detail:{name,iconset}});// we're dispatching this event in the next tick to allow the iconset to finish any slotchange or other event
// listeners caused by connection to the dom and first render to complete, this way any icons listening for
// this iconset will be able to access the completed iconset
setTimeout(()=>window.dispatchEvent(event),0);}removeIconset(name){this.iconsetMap.delete(name);// dispatch a sp-iconset-removed event on window to let everyone know we have a new iconset
// note we're using window here for efficiency since we don't need to bubble through the dom since everyone
// will know where to look for this event
const event=new CustomEvent('sp-iconset-removed',{bubbles:true,composed:true,detail:{name}});// we're dispatching this event in the next tick To keep the event model consistent with the added event
setTimeout(()=>window.dispatchEvent(event),0);}getIconset(name){return this.iconsetMap.get(name);}}

/**
 * @element sp-icon
 */class Icon extends IconBase{constructor(){super(...arguments);this.iconsetListener=event=>{if(!this.name){return;}// parse the icon name to get iconset name
const icon=this.parseIcon(this.name);if(event.detail.name===icon.iconset){this.updateIconPromise=this.updateIcon();}};}connectedCallback(){super.connectedCallback();window.addEventListener('sp-iconset-added',this.iconsetListener);}disconnectedCallback(){super.disconnectedCallback();window.removeEventListener('sp-iconset-added',this.iconsetListener);}firstUpdated(){this.updateIconPromise=this.updateIcon();}attributeChangedCallback(name,old,value){super.attributeChangedCallback(name,old,value);this.updateIconPromise=this.updateIcon();// any of our attributes change, update our icon
}render(){if(this.name){return p`<div id="container"></div>`;}else if(this.src){return p`<img src="${this.src}" alt="${l(this.label)}">`;}return super.render();}async updateIcon(){if(this.updateIconPromise){await this.updateIconPromise;}if(!this.name){return Promise.resolve();}// parse the icon name to get iconset name
const icon=this.parseIcon(this.name);// try to retrieve the iconset
const iconset=IconsetRegistry.getInstance().getIconset(icon.iconset);if(!iconset){// we can stop here as there's nothing to be done till we get the iconset
return Promise.resolve();}if(!this.iconContainer){return Promise.resolve();}this.iconContainer.innerHTML='';return iconset.applyIconToElement(this.iconContainer,icon.icon,this.size||'',this.label?this.label:'');}parseIcon(icon){const iconParts=icon.split(':');let iconsetName='default';let iconName=icon;if(iconParts.length>1){iconsetName=iconParts[0];iconName=iconParts[1];}return {iconset:iconsetName,icon:iconName};}async getUpdateComplete(){const complete=await super.getUpdateComplete();await this.updateIconPromise;return complete;}}__decorate([e()],Icon.prototype,"src",void 0);__decorate([e()],Icon.prototype,"name",void 0);__decorate([i('#container')],Icon.prototype,"iconContainer",void 0);

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
*/let customTemplateLiteralTag$1;const tag$1=function(strings,...values){if(customTemplateLiteralTag$1){return customTemplateLiteralTag$1(strings,...values);}return values.reduce((acc,v,idx)=>acc+v+strings[idx+1],strings[0]);};const setCustomTemplateLiteralTag$1=tag=>{customTemplateLiteralTag$1=tag;};

const Chevron100Icon=()=>{return tag$1`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" aria-hidden="true" fill="currentColor"><path d="M3 9.95a.875.875 0 01-.615-1.498L5.88 5 2.385 1.547A.875.875 0 013.615.302L7.74 4.377a.876.876 0 010 1.246L3.615 9.698A.872.872 0 013 9.95z"/></svg>`;};

/**
 * @element sp-icon-chevron100
 */class IconChevron100 extends IconBase{render(){setCustomTemplateLiteralTag$1(p);return Chevron100Icon();}}

iliadCustomElementsDefine('sp-icon-chevron100',IconChevron100);

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
*/let customTemplateLiteralTag;const tag=function(strings,...values){if(customTemplateLiteralTag){return customTemplateLiteralTag(strings,...values);}return values.reduce((acc,v,idx)=>acc+v+strings[idx+1],strings[0]);};const setCustomTemplateLiteralTag=tag=>{customTemplateLiteralTag=tag;};

const AlertIcon=({width=24,height=24,hidden=false,title='Alert'}={})=>{return tag`<svg xmlns="http://www.w3.org/2000/svg" height="${height}" viewBox="0 0 36 36" width="${width}" aria-hidden="${hidden?'true':'false'}" role="img" fill="currentColor" aria-label="${title}"><path d="M17.127 2.579L.4 32.512A1 1 0 001.272 34h33.456a1 1 0 00.872-1.488L18.873 2.579a1 1 0 00-1.746 0zM20 29.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0-6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-12a.5.5 0 01.5-.5h3a.5.5 0 01.5.5z"/></svg>`;};

/**
 * @element sp-icon-alert
 */class IconAlert extends IconBase{render(){setCustomTemplateLiteralTag(p);return AlertIcon({hidden:!this.label,title:this.label});}}

iliadCustomElementsDefine('sp-icon-alert',IconAlert);

const Checkmark100Icon=()=>{return tag$1`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" aria-hidden="true" fill="currentColor"><path d="M3.5 9.5a.999.999 0 01-.774-.368l-2.45-3a1 1 0 111.548-1.264l1.657 2.028 4.68-6.01A1 1 0 019.74 2.114l-5.45 7a1 1 0 01-.777.386z"/></svg>`;};

/**
 * @element sp-icon-checkmark100
 */class IconCheckmark100 extends IconBase{render(){setCustomTemplateLiteralTag$1(p);return Checkmark100Icon();}}

iliadCustomElementsDefine('sp-icon-checkmark100',IconCheckmark100);

function LikeAnchor(constructor){class LikeAnchorElement extends constructor{renderAnchor({id,className,ariaHidden,labelledby,tabindex,// prettier-ignore
anchorContent=p`<slot></slot>`}){// prettier-ignore
return p`<a id="${id}" class="${l(className)}" href="${l(this.href)}" download="${l(this.download)}" target="${l(this.target)}" aria-label="${l(this.label)}" aria-labelledby="${l(labelledby)}" aria-hidden="${l(ariaHidden?'true':undefined)}" tabindex="${l(tabindex)}" rel="${l(this.rel)}">${anchorContent}</a>`;}}__decorate([e({reflect:true})],LikeAnchorElement.prototype,"download",void 0);__decorate([e()],LikeAnchorElement.prototype,"label",void 0);__decorate([e({reflect:true})],LikeAnchorElement.prototype,"href",void 0);__decorate([e({reflect:true})],LikeAnchorElement.prototype,"target",void 0);__decorate([e({reflect:true})],LikeAnchorElement.prototype,"rel",void 0);return LikeAnchorElement;}

const styles$g=r`:host{--spectrum-alias-body-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-listitem-m-divider-size:var(--spectrum-alias-border-size-thin);--spectrum-listitem-m-divider-padding:3px;--spectrum-listitem-m-focus-indicator-size:var(
--spectrum-global-dimension-size-0
);--spectrum-listitem-m-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-listitem-m-text-size:var(--spectrum-alias-font-size-m);--spectrum-listitem-m-height:var(--spectrum-alias-control-height-m);--spectrum-listitem-m-icon-gap:var(
--spectrum-alias-item-workflow-icon-gap-m
);--spectrum-listitem-m-padding-left:var(--spectrum-alias-padding-m);--spectrum-listitem-m-padding-right:var(--spectrum-alias-padding-l);--spectrum-listitem-m-thumbnail-padding-left:var(
--spectrum-alias-padding-m
);--spectrum-popover-padding-y:var(--spectrum-alias-padding-m);--spectrum-popover-border-size:var(--spectrum-global-dimension-size-0);--spectrum-icon-checkmark-medium-width:undefined;--spectrum-alias-workflow-icon-size-m:var(--spectrum-alias-icon-size-m);--spectrum-listitem-m-background-color:var(
--spectrum-global-color-gray-100
);--spectrum-listitem-m-text-color:var(
--spectrum-alias-text-color-secondary
);--spectrum-listitem-m-icon-color:var(--spectrum-global-color-gray-600;);--spectrum-listitem-m-background-color-selected:var(
--spectrum-global-color-static-primary-500
);--spectrum-listitem-m-text-color-selected:var(
--spectrum-global-color-static-white
);--spectrum-listitem-m-icon-color-selected:var(
--spectrum-global-color-static-white
);--spectrum-listitem-m-focus-indicator-color:var(
--spectrum-global-color-static-transparent
);--spectrum-listitem-m-background-color-key-focus:var(
--spectrum-listitem-m-background-color-selected
);--spectrum-listitem-m-text-color-key-focus:var(
--spectrum-listitem-m-text-color-selected
);--spectrum-listitem-m-background-color-hover:var(
--spectrum-listitem-m-background-color-selected
);--spectrum-listitem-m-text-color-hover:var(
--spectrum-listitem-m-text-color-selected
);--spectrum-listitem-m-icon-color-hover:var(
--spectrum-listitem-m-icon-color-selected
);--spectrum-listitem-m-background-color-down:var(
--spectrum-listitem-m-background-color-selected
);--spectrum-listitem-m-background-color-disabled:var(
--spectrum-global-color-gray-100
);--spectrum-listitem-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-listitem-m-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-listitem-m-divider-color:var(
--spectrum-alias-border-color-light
);--spectrum-listitem-m-border-radius:var(
--spectrum-alias-border-radius-medium
);--spectrum-menu-padding-y:var(--spectrum-global-dimension-size-0);--spectrum-menu-margin-y:var(--spectrum-global-dimension-size-0)}.checkmark{align-self:flex-start;display:none;opacity:1;transform:scale(1)}:host([dir=ltr]) .checkmark{margin-left:var(
--spectrum-listitem-icon-gap
)}:host([dir=rtl]) .checkmark{margin-right:var(
--spectrum-listitem-icon-gap
)}.checkmark{flex-grow:0;margin-top:var(--spectrum-listitem-icon-margin-top)}:host([dir=ltr]) .chevron{margin-left:var(
--spectrum-listitem-icon-gap
)}:host([dir=rtl]) .chevron{margin-right:var(
--spectrum-listitem-icon-gap
)}.chevron{flex-grow:0;margin-top:var(--spectrum-listitem-icon-margin-top)}:host([dir=ltr]){border-left:var(--spectrum-listitem-focus-indicator-size) solid transparent}:host([dir=rtl]){border-right:var(--spectrum-listitem-focus-indicator-size) solid transparent}:host{align-items:center;box-sizing:border-box;cursor:pointer;display:flex;font-size:var(--spectrum-listitem-text-size);font-style:normal;font-weight:var(--spectrum-listitem-text-font-weight);margin:0;min-height:var(--spectrum-listitem-height);padding:var(--spectrum-listitem-padding-y) var(--spectrum-listitem-padding-right) var(--spectrum-listitem-padding-y) var(--spectrum-listitem-padding-left);position:relative;text-decoration:none;transition:background-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out,color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host(:focus){outline:0}:host([dir=ltr][selected]){padding-right:calc(var(--spectrum-listitem-padding-right) - var(--spectrum-popover-border-size,var(--spectrum-alias-border-size-thin)))}:host([dir=rtl][selected]){padding-left:calc(var(--spectrum-listitem-padding-right) - var(--spectrum-popover-border-size,var(--spectrum-alias-border-size-thin)))}:host([selected]) .checkmark{display:block}.icon,::slotted([slot=icon]){align-self:flex-start;flex-shrink:0}:host([dir=ltr]) .icon+#label,:host([dir=ltr]) slot[name=icon]+#label{margin-left:var(
--spectrum-listitem-icon-gap
)}:host([dir=rtl]) .icon+#label,:host([dir=rtl]) slot[name=icon]+#label{margin-right:var(
--spectrum-listitem-icon-gap
)}.icon+#label,slot[name=icon]+#label{width:calc(100% - var(--spectrum-icon-checkmark-medium-width) - var(--spectrum-listitem-icon-gap) - var(--spectrum-listitem-thumbnail-padding-left) - var(--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)))}:host([no-wrap]) #label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([dir=ltr]) .checkmark,:host([dir=ltr]) .chevron{margin-left:var(
--spectrum-listitem-icon-gap
)}:host([dir=rtl]) .checkmark,:host([dir=rtl]) .chevron{margin-right:var(
--spectrum-listitem-icon-gap
)}:host([dir=rtl]) .chevron{transform:matrix(-1,0,0,1,0,0)}:host{background-color:var(
--spectrum-listitem-m-background-color,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-listitem-m-text-color,var(--spectrum-alias-text-color)
)}:host([dir=ltr].focus-visible),:host([dir=ltr][focused]){border-left-color:var(
--spectrum-listitem-m-focus-indicator-color,var(--spectrum-alias-border-color-focus)
)}:host([dir=ltr]:focus-visible),:host([dir=ltr][focused]){border-left-color:var(
--spectrum-listitem-m-focus-indicator-color,var(--spectrum-alias-border-color-focus)
)}:host([dir=rtl].focus-visible),:host([dir=rtl][focused]){border-right-color:var(
--spectrum-listitem-m-focus-indicator-color,var(--spectrum-alias-border-color-focus)
)}:host([dir=rtl]:focus-visible),:host([dir=rtl][focused]){border-right-color:var(
--spectrum-listitem-m-focus-indicator-color,var(--spectrum-alias-border-color-focus)
)}:host(.focus-visible),:host([focused]){background-color:var(
--spectrum-listitem-m-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-text-color-key-focus,var(--spectrum-alias-text-color)
)}:host(:focus-visible),:host([focused]){background-color:var(
--spectrum-listitem-m-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-text-color-key-focus,var(--spectrum-alias-text-color)
)}:host(.is-highlighted),:host(.is-open),:host(:focus),:host(:hover){background-color:var(
--spectrum-listitem-m-background-color-hover,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-text-color-hover,var(--spectrum-alias-text-color)
)}:host([selected]){color:var(
--spectrum-listitem-m-text-color-selected,var(--spectrum-alias-text-color)
)}:host([selected]) .checkmark{color:var(
--spectrum-listitem-m-icon-color-selected,var(--spectrum-alias-icon-color-selected)
)}:host(:active),:host([active]){background-color:var(
--spectrum-listitem-m-background-color-down,var(--spectrum-alias-background-color-hover-overlay)
)}:host([disabled]){background-color:var(
--spectrum-listitem-m-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);background-image:none;color:var(
--spectrum-listitem-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);cursor:default}#label{flex:1 1 auto;-webkit-hyphens:auto;hyphens:auto;line-height:var(--spectrum-listitem-label-line-height);overflow-wrap:break-word;width:calc(100% - var(--spectrum-icon-checkmark-medium-width) - var(--spectrum-listitem-icon-gap))}.spectrum-Menu-itemLabel--wrapping{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host{border-radius:var(--spectrum-listitem-m-border-radius)}:host([selected]){background-color:var(--spectrum-listitem-m-background-color-selected)}:host(:hover) .checkmark{color:var(--spectrum-listitem-m-icon-color-hover)}:host([disabled]) .checkmark{color:var(--spectrum-listitem-m-icon-color-disabled)}slot[name=value]{color:var(--spectrum-listitem-m-icon-color)}:host([selected]) slot[name=value]{color:var(--spectrum-listitem-m-icon-color-selected)}:host(:hover) slot[name=value]{color:var(--spectrum-listitem-m-icon-color-hover)}:host([disabled]) slot[name=value]{color:var(--spectrum-listitem-m-icon-color-disabled)}:host([hidden]){display:none}#button{inset:0;position:absolute}::slotted([slot=value]){align-self:start}:host([dir=ltr]) ::slotted([slot=value]){margin-left:var(--spectrum-listitem-icon-gap)}:host([dir=rtl]) ::slotted([slot=value]){margin-right:var(--spectrum-listitem-icon-gap)}:host([dir=ltr]) [icon-only]::slotted(:last-of-type){margin-right:auto}:host([dir=rtl]) [icon-only]::slotted(:last-of-type){margin-left:auto}:host([dir=ltr]) ::slotted([slot=icon]){margin-right:var(--spectrum-listitem-icon-gap)}:host([dir=rtl]) ::slotted([slot=icon]){margin-left:var(--spectrum-listitem-icon-gap)}:host([dir=rtl]) slot[name=icon]+#label{margin-right:0}:host([dir=ltr]) slot[name=icon]+#label{margin-left:0}`;

const styles$f=r`:host{--spectrum-alias-ui-icon-triplegripper-size-100-height:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-ui-icon-doublegripper-size-100-width:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-ui-icon-singlegripper-size-100-width:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-ui-icon-cornertriangle-size-75:var(
--spectrum-global-dimension-size-65
);--spectrum-alias-ui-icon-cornertriangle-size-200:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-ui-icon-asterisk-size-75:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-asterisk-size-100:var(
--spectrum-global-dimension-size-100
)}@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Checkmark50{height:var(--spectrum-alias-ui-icon-checkmark-size-50);width:var(
--spectrum-alias-ui-icon-checkmark-size-50
)}.spectrum-UIIcon-Checkmark75{height:var(--spectrum-alias-ui-icon-checkmark-size-75);width:var(
--spectrum-alias-ui-icon-checkmark-size-75
)}.spectrum-UIIcon-Checkmark100{height:var(--spectrum-alias-ui-icon-checkmark-size-100);width:var(
--spectrum-alias-ui-icon-checkmark-size-100
)}.spectrum-UIIcon-Checkmark200{height:var(--spectrum-alias-ui-icon-checkmark-size-200);width:var(
--spectrum-alias-ui-icon-checkmark-size-200
)}.spectrum-UIIcon-Checkmark300{height:var(--spectrum-alias-ui-icon-checkmark-size-300);width:var(
--spectrum-alias-ui-icon-checkmark-size-300
)}.spectrum-UIIcon-Checkmark400{height:var(--spectrum-alias-ui-icon-checkmark-size-400);width:var(
--spectrum-alias-ui-icon-checkmark-size-400
)}.spectrum-UIIcon-Checkmark500{height:var(--spectrum-alias-ui-icon-checkmark-size-500);width:var(
--spectrum-alias-ui-icon-checkmark-size-500
)}.spectrum-UIIcon-Checkmark600{height:var(--spectrum-alias-ui-icon-checkmark-size-600);width:var(
--spectrum-alias-ui-icon-checkmark-size-600
)}`;

class MenuItemRemovedEvent extends Event{constructor(){super('sp-menu-item-removed',{bubbles:true,composed:true});this.focused=false;}get item(){return this._item;}reset(item){this._item=item;}}class MenuItemAddedOrUpdatedEvent extends Event{constructor(){super('sp-menu-item-added-or-updated',{bubbles:true,composed:true});}set focusRoot(root){this.item.menuData.focusRoot=this.item.menuData.focusRoot||root;}set selectionRoot(root){this.item.menuData.selectionRoot=this.item.menuData.selectionRoot||root;}get item(){return this._item;}set currentAncestorWithSelects(ancestor){this._currentAncestorWithSelects=ancestor;}get currentAncestorWithSelects(){return this._currentAncestorWithSelects;}reset(item){this._item=item;this._currentAncestorWithSelects=undefined;item.menuData={focusRoot:undefined,selectionRoot:undefined};}}const addOrUpdateEvent=new MenuItemAddedOrUpdatedEvent();const removeEvent=new MenuItemRemovedEvent();/**
 * @element sp-menu-item
 *
 * @slot - text content to display within the Menu Item
 * @slot icon - icon element to be placed at the start of the Menu Item
 * @slot value - content placed at the end of the Menu Item like values, keyboard shortcuts, etc.
 * @fires sp-menu-item-added - announces the item has been added so a parent menu can take ownerships
 * @fires sp-menu-item-removed - announces when removed from the DOM so the parent menu can remove ownership and update selected state
 */class MenuItem extends LikeAnchor(Focusable){constructor(){super();this.active=false;this.focused=false;this.selected=false;this._value='';this.noWrap=false;this.menuData={focusRoot:undefined,selectionRoot:undefined};this.proxyFocus=this.proxyFocus.bind(this);this.addEventListener('click',this.handleClickCapture,{capture:true});}static get styles(){return [styles$g,styles$f];}get value(){return this._value||this.itemText;}set value(value){if(value===this._value){return;}this._value=value||'';if(this._value){this.setAttribute('value',this._value);}else {this.removeAttribute('value');}}/**
     * @private
     */get itemText(){return (this.textContent||/* c8 ignore next */'').trim();}get focusElement(){return this;}get itemChildren(){const iconSlot=this.shadowRoot.querySelector('slot[name="icon"]');const icon=!iconSlot?[]:iconSlot.assignedElements().map(element=>{const newElement=element.cloneNode(true);newElement.removeAttribute('slot');newElement.classList.toggle('icon');return newElement;});const contentSlot=this.shadowRoot.querySelector('slot:not([name])');const content=!contentSlot?[]:contentSlot.assignedNodes().map(node=>node.cloneNode(true));return {icon,content};}click(){if(this.disabled){return;}if(this.shouldProxyClick()){return;}super.click();}handleClickCapture(event){if(this.disabled){event.preventDefault();event.stopImmediatePropagation();event.stopPropagation();return false;}}proxyFocus(){this.focus();}shouldProxyClick(){let handled=false;if(this.anchorElement){this.anchorElement.click();handled=true;}return handled;}render(){return p`<slot name="icon"></slot><div id="label"><slot id="slot"></slot></div><slot name="value"></slot>${this.selected?p`<sp-icon-checkmark100 id="selected" class="spectrum-UIIcon-Checkmark100 icon checkmark"></sp-icon-checkmark100>`:p``} ${this.href&&this.href.length>0?super.renderAnchor({id:'button',ariaHidden:true,className:'button anchor hidden'}):p``}`;}handleRemoveActive(){this.active=false;}handlePointerdown(){this.active=true;}firstUpdated(changes){super.firstUpdated(changes);this.setAttribute('tabindex','-1');this.addEventListener('pointerdown',this.handlePointerdown);if(!this.hasAttribute('id')){this.id=`sp-menu-item-${MenuItem.instanceCount++}`;}}updateAriaSelected(){const role=this.getAttribute('role');if(role==='option'){this.setAttribute('aria-selected',this.selected?'true':'false');}else if(role==='menuitemcheckbox'||role==='menuitemradio'){this.setAttribute('aria-checked',this.selected?'true':'false');}}setRole(role){this.setAttribute('role',role);this.updateAriaSelected();}updated(changes){super.updated(changes);if(changes.has('label')){this.setAttribute('aria-label',this.label||'');}if(changes.has('active')){if(this.active){this.addEventListener('pointerup',this.handleRemoveActive);this.addEventListener('pointerleave',this.handleRemoveActive);}else {this.removeEventListener('pointerup',this.handleRemoveActive);this.removeEventListener('pointerleave',this.handleRemoveActive);}}if(this.anchorElement){this.anchorElement.addEventListener('focus',this.proxyFocus);this.anchorElement.tabIndex=-1;}if(changes.has('selected')){this.updateAriaSelected();}}connectedCallback(){super.connectedCallback();addOrUpdateEvent.reset(this);this.dispatchEvent(addOrUpdateEvent);this._parentElement=this.parentElement;}disconnectedCallback(){var _a;removeEvent.reset(this);(_a=this._parentElement)===null||_a===void 0?void 0:_a.dispatchEvent(removeEvent);super.disconnectedCallback();}async triggerUpdate(){await new Promise(ready=>requestAnimationFrame(ready));addOrUpdateEvent.reset(this);this.dispatchEvent(addOrUpdateEvent);}}MenuItem.instanceCount=0;__decorate([e({type:Boolean,reflect:true})],MenuItem.prototype,"active",void 0);__decorate([e({type:Boolean,reflect:true})],MenuItem.prototype,"focused",void 0);__decorate([e({type:Boolean,reflect:true})],MenuItem.prototype,"selected",void 0);__decorate([e({type:String})],MenuItem.prototype,"value",null);__decorate([e({type:Boolean,reflect:true,attribute:'no-wrap',hasChanged(){return false;}})],MenuItem.prototype,"noWrap",void 0);__decorate([i('.anchor')],MenuItem.prototype,"anchorElement",void 0);

const styles$e=r`:host{--spectrum-alias-body-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-listitem-m-divider-size:var(--spectrum-alias-border-size-thin);--spectrum-listitem-m-divider-padding:3px;--spectrum-listitem-m-focus-indicator-size:var(
--spectrum-global-dimension-size-0
);--spectrum-listitem-m-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-listitem-m-text-size:var(--spectrum-alias-font-size-m);--spectrum-listitem-m-height:var(--spectrum-alias-control-height-m);--spectrum-listitem-m-icon-gap:var(
--spectrum-alias-item-workflow-icon-gap-m
);--spectrum-listitem-m-padding-left:var(--spectrum-alias-padding-m);--spectrum-listitem-m-padding-right:var(--spectrum-alias-padding-l);--spectrum-listitem-m-thumbnail-padding-left:var(
--spectrum-alias-padding-m
);--spectrum-popover-padding-y:var(--spectrum-alias-padding-m);--spectrum-popover-border-size:var(--spectrum-global-dimension-size-0);--spectrum-icon-checkmark-medium-width:undefined;--spectrum-alias-workflow-icon-size-m:var(--spectrum-alias-icon-size-m);--spectrum-listitem-m-background-color:var(
--spectrum-global-color-gray-100
);--spectrum-listitem-m-text-color:var(
--spectrum-alias-text-color-secondary
);--spectrum-listitem-m-icon-color:var(--spectrum-global-color-gray-600;);--spectrum-listitem-m-background-color-selected:var(
--spectrum-global-color-static-primary-500
);--spectrum-listitem-m-text-color-selected:var(
--spectrum-global-color-static-white
);--spectrum-listitem-m-icon-color-selected:var(
--spectrum-global-color-static-white
);--spectrum-listitem-m-focus-indicator-color:var(
--spectrum-global-color-static-transparent
);--spectrum-listitem-m-background-color-key-focus:var(
--spectrum-listitem-m-background-color-selected
);--spectrum-listitem-m-text-color-key-focus:var(
--spectrum-listitem-m-text-color-selected
);--spectrum-listitem-m-background-color-hover:var(
--spectrum-listitem-m-background-color-selected
);--spectrum-listitem-m-text-color-hover:var(
--spectrum-listitem-m-text-color-selected
);--spectrum-listitem-m-icon-color-hover:var(
--spectrum-listitem-m-icon-color-selected
);--spectrum-listitem-m-background-color-down:var(
--spectrum-listitem-m-background-color-selected
);--spectrum-listitem-m-background-color-disabled:var(
--spectrum-global-color-gray-100
);--spectrum-listitem-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-listitem-m-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-listitem-m-divider-color:var(
--spectrum-alias-border-color-light
);--spectrum-listitem-m-border-radius:var(
--spectrum-alias-border-radius-medium
);--spectrum-menu-padding-y:var(--spectrum-global-dimension-size-0);--spectrum-menu-margin-y:var(--spectrum-global-dimension-size-0)}:host{--spectrum-menu-margin-x:var(
--spectrum-global-dimension-size-40
);--spectrum-listitem-heading-text-size:var(
--spectrum-global-dimension-font-size-50
);--spectrum-listitem-heading-text-font-weight:400;--spectrum-listitem-heading-text-transform:uppercase;--spectrum-listitem-heading-letter-spacing:0.06em;--spectrum-listitem-heading-margin:var(--spectrum-global-dimension-size-75) 0 0 0;--spectrum-listitem-heading-padding:0 var(--spectrum-global-dimension-size-450) 0 var(--spectrum-global-dimension-size-150);--spectrum-listitem-padding-y:var(--spectrum-global-dimension-size-85);--spectrum-listitem-icon-margin-top:var(
--spectrum-global-dimension-size-50
);--spectrum-listitem-label-line-height:1.3;--spectrum-listitem-heading-line-height:var(
--spectrum-alias-body-text-line-height,var(--spectrum-global-font-line-height-medium)
)}:host{--spectrum-listitem-divider-size:var(
--spectrum-listitem-m-divider-size,var(--spectrum-alias-border-size-thin)
);--spectrum-listitem-divider-padding:var(
--spectrum-listitem-m-divider-padding,3px
);--spectrum-listitem-focus-indicator-size:var(
--spectrum-listitem-m-focus-indicator-size,var(--spectrum-alias-border-size-thick)
);--spectrum-listitem-text-font-weight:var(
--spectrum-listitem-m-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-listitem-text-size:var(
--spectrum-listitem-m-text-size,var(--spectrum-alias-item-text-size-m)
);--spectrum-listitem-height:var(
--spectrum-listitem-m-height,var(--spectrum-alias-item-height-m)
);--spectrum-listitem-icon-gap:var(
--spectrum-listitem-m-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-m)
);--spectrum-listitem-padding-left:var(
--spectrum-listitem-m-padding-left,var(--spectrum-alias-item-workflow-padding-left-m)
);--spectrum-listitem-padding-right:var(
--spectrum-listitem-m-padding-right,var(--spectrum-alias-item-padding-m)
);--spectrum-listitem-thumbnail-padding-left:var(
--spectrum-listitem-m-thumbnail-padding-left,var(--spectrum-alias-item-padding-m)
)}:host{box-sizing:border-box;display:inline-block;list-style-type:none;margin-bottom:var(
--spectrum-popover-padding-y,var(--spectrum-global-dimension-size-50)
);margin-left:0;margin-right:0;margin-top:var(
--spectrum-popover-padding-y,var(--spectrum-global-dimension-size-50)
);overflow:auto;padding:0}:host([dir=ltr][selects]) ::slotted(sp-menu-item){padding-right:var(
--spectrum-listitem-selectable-padding-right
)}:host([dir=rtl][selects]) ::slotted(sp-menu-item){padding-left:var(
--spectrum-listitem-selectable-padding-right
)}:host([dir=ltr][selects]) ::slotted(sp-menu-item[selected]){padding-right:calc(var(--spectrum-listitem-padding-right) - var(--spectrum-popover-border-size,var(--spectrum-alias-border-size-thin)))}:host([dir=rtl][selects]) ::slotted(sp-menu-item[selected]){padding-left:calc(var(--spectrum-listitem-padding-right) - var(--spectrum-popover-border-size,var(--spectrum-alias-border-size-thin)))}::slotted(sp-menu){display:block}:host{--spectrum-listheading-text-color:var(
--spectrum-global-color-gray-700
)}:host{background-color:var(
--spectrum-listitem-m-background-color,var(--spectrum-alias-background-color-transparent)
)}:host{margin-bottom:var(
--spectrum-menu-margin-y,var(--spectrum-global-dimension-size-50)
);margin-top:var(
--spectrum-menu-margin-y,var(--spectrum-global-dimension-size-50)
)}:host{--spectrum-listitem-selectable-padding-right:var(
--spectrum-listitem-m-padding-right
)}:host(:focus){outline:0}:host sp-menu{display:block}`;

function elementIsOrContains(el,isOrContains){return !!isOrContains&&(el===isOrContains||el.contains(isOrContains));}/**
 * Spectrum Menu Component
 * @element sp-menu
 *
 * @slot - menu items to be listed in the menu
 * @fires change - Announces that the `value` of the element has changed
 * @attr selects - whether the element has a specific selection algorithm that it applies
 *   to its item descendants. `single` allows only one descendent to be selected at a time.
 *   `multiple` allows many descendants to be selected. `inherit` will be applied dynamically
 *   when an ancestor of this element is actively managing the selection of its descendents.
 *   When the `selects` attribute is not present a `value` will not be maintained and the Menu
 *   Item children of this Menu will not have their `selected` state managed.
 */class Menu extends SpectrumElement{constructor(){super();this.label='';this.value='';// For the multiple select case, we'll join the value strings together
// for the value property with this separator
this.valueSeparator=',';// TODO: which of these to keep?
// TODO: allow setting this in the API to change the values
this.selected=[];this.selectedItems=[];this.childItemSet=new Set();this.focusedItemIndex=0;this.focusInItemIndex=0;this.selectedItemsMap=new Map();this._willUpdateItems=false;this._notFirstUpdated=false;this.cacheUpdated=Promise.resolve();this.addEventListener('sp-menu-item-added-or-updated',this.onSelectableItemAddedOrUpdated);this.addEventListener('sp-menu-item-added-or-updated',this.onFocusableItemAddedOrUpdated,{capture:true});this.addEventListener('sp-menu-item-removed',this.removeChildItem);this.addEventListener('click',this.onClick);this.addEventListener('focusin',this.handleFocusin);}static get styles(){return [styles$e];}get childItems(){if(!this.cachedChildItems){this.cachedChildItems=this.updateCachedMenuItems();}return this.cachedChildItems;}updateCachedMenuItems(){this.cachedChildItems=[];const slotElements=this.menuSlot.assignedElements({flatten:true});for(const slotElement of slotElements){const childMenuItems=slotElement instanceof MenuItem?[slotElement]:[...slotElement.querySelectorAll(`*`)];for(const childMenuItem of childMenuItems){if(this.childItemSet.has(childMenuItem)){this.cachedChildItems.push(childMenuItem);}}}return this.cachedChildItems;}/**
     * Hide this getter from web-component-analyzer until
     * https://github.com/runem/web-component-analyzer/issues/131
     * has been addressed.
     *
     * @private
     */get childRole(){if(this.resolvedRole==='listbox'){return 'option';}switch(this.resolvedSelects){case'single':return 'menuitemradio';case'multiple':return 'menuitemcheckbox';default:return 'menuitem';}}get ownRole(){return 'menu';}/**
     * When a descendant `<sp-menu-item>` element is added or updated it will dispatch
     * this event to announce its presence in the DOM. During the capture phase the first
     * Menu based element that the event encounters will manage the focus state of the
     * dispatching `<sp-menu-item>` element.
     * @param event
     */onFocusableItemAddedOrUpdated(event){var _a;if(event.item.menuData.focusRoot){// Only have one tab stop per Menu tree
this.tabIndex=-1;}event.focusRoot=this;this.addChildItem(event.item);if(this.selects==='inherit'){this.resolvedSelects='inherit';this.resolvedRole=((_a=event.currentAncestorWithSelects)===null||_a===void 0?void 0:_a.getAttribute('role'))||this.getAttribute('role')||undefined;}else if(this.selects){this.resolvedRole=this.getAttribute('role')||undefined;this.resolvedSelects=this.selects;event.currentAncestorWithSelects=this;}else {this.resolvedRole=this.getAttribute('role')||undefined;this.resolvedSelects=this.resolvedRole==='none'?'ignore':'none';}}/**
     * When a descendant `<sp-menu-item>` element is added or updated it will dispatch
     * this event to announce its presence in the DOM. During the bubble phase the first
     * Menu based element that the event encounters that does not inherit selection will
     * manage the selection state of the dispatching `<sp-menu-item>` element.
     * @param event
     */onSelectableItemAddedOrUpdated(event){const selects=this.resolvedSelects==='single'||this.resolvedSelects==='multiple';if((selects||!this.selects&&this.resolvedSelects!=='ignore')&&!event.item.menuData.selectionRoot){event.item.setRole(this.childRole);event.selectionRoot=this;}}addChildItem(item){this.childItemSet.add(item);this.handleItemsChanged();}async removeChildItem(event){this.childItemSet.delete(event.item);this.cachedChildItems=undefined;if(event.item.focused){this.handleItemsChanged();await this.updateComplete;this.focus();}}focus({preventScroll}={}){if(!this.childItems.length||this.childItems.every(childItem=>childItem.disabled)){return;}if(this.childItems.some(childItem=>childItem.menuData.focusRoot!==this)){super.focus({preventScroll});return;}this.focusMenuItemByOffset(0);super.focus({preventScroll});const selectedItem=this.querySelector('[selected]');if(selectedItem&&!preventScroll){selectedItem.scrollIntoView({block:'nearest'});}}onClick(event){if(event.defaultPrevented){return;}const path=event.composedPath();const target=path.find(el=>{/* c8 ignore next 3 */if(!(el instanceof Element)){return false;}return el.getAttribute('role')===this.childRole;});if((target===null||target===void 0?void 0:target.href)&&target.href.length){return;}if((target===null||target===void 0?void 0:target.menuData.selectionRoot)===this){event.preventDefault();this.selectOrToggleItem(target);}else {return;}this.prepareToCleanUp();}handleFocusin(event){var _a;const isOrContainsRelatedTarget=elementIsOrContains(this,event.relatedTarget);if(isOrContainsRelatedTarget||this.childItems.some(childItem=>childItem.menuData.focusRoot!==this)){return;}const activeElement=this.getRootNode().activeElement;const selectionRoot=((_a=this.childItems[this.focusedItemIndex])===null||_a===void 0?void 0:_a.menuData.selectionRoot)||this;if(activeElement!==selectionRoot||!isOrContainsRelatedTarget){selectionRoot.focus({preventScroll:true});if(activeElement&&this.focusedItemIndex===0){const offset=this.childItems.findIndex(childItem=>childItem===activeElement);if(offset>0){this.focusMenuItemByOffset(offset);}}}this.startListeningToKeyboard();}startListeningToKeyboard(){this.addEventListener('keydown',this.handleKeydown);this.addEventListener('focusout',this.handleFocusout);}handleFocusout(event){if(elementIsOrContains(this,event.relatedTarget)){event.composedPath()[0].focused=false;return;}this.stopListeningToKeyboard();if(event.target===this&&this.childItems.some(childItem=>childItem.menuData.focusRoot===this)){const focusedItem=this.childItems[this.focusedItemIndex];if(focusedItem){focusedItem.focused=false;}}this.removeAttribute('aria-activedescendant');}stopListeningToKeyboard(){this.removeEventListener('keydown',this.handleKeydown);this.removeEventListener('focusout',this.handleFocusout);}async selectOrToggleItem(targetItem){const resolvedSelects=this.resolvedSelects;const oldSelectedItemsMap=new Map(this.selectedItemsMap);const oldSelected=this.selected.slice();const oldSelectedItems=this.selectedItems.slice();const oldValue=this.value;this.childItems[this.focusedItemIndex].focused=false;this.focusedItemIndex=this.childItems.indexOf(targetItem);this.forwardFocusVisibleToItem(targetItem);if(resolvedSelects==='multiple'){if(this.selectedItemsMap.has(targetItem)){this.selectedItemsMap.delete(targetItem);}else {this.selectedItemsMap.set(targetItem,true);}// Match HTML select and set the first selected
// item as the value. Also set the selected array
// in the order of the menu items.
const selected=[];const selectedItems=[];this.childItemSet.forEach(childItem=>{if(childItem.menuData.selectionRoot!==this)return;if(this.selectedItemsMap.has(childItem)){selected.push(childItem.value);selectedItems.push(childItem);}});this.selected=selected;this.selectedItems=selectedItems;this.value=this.selected.join(this.valueSeparator);}else {this.selectedItemsMap.clear();this.selectedItemsMap.set(targetItem,true);this.value=targetItem.value;this.selected=[targetItem.value];this.selectedItems=[targetItem];}await this.updateComplete;const applyDefault=this.dispatchEvent(new Event('change',{cancelable:true,bubbles:true,composed:true}));if(!applyDefault){// Cancel the event & don't apply the selection
this.selected=oldSelected;this.selectedItems=oldSelectedItems;this.selectedItemsMap=oldSelectedItemsMap;this.value=oldValue;return;}// Apply the selection changes to the menu items
if(resolvedSelects==='single'){for(const oldItem of oldSelectedItemsMap.keys()){if(oldItem!==targetItem){oldItem.selected=false;}}targetItem.selected=true;}else if(resolvedSelects==='multiple'){targetItem.selected=!targetItem.selected;}}handleKeydown(event){var _a;const{code}=event;if(code==='Tab'){this.prepareToCleanUp();return;}if(code==='Space'||code==='Enter'){(_a=this.childItems[this.focusedItemIndex])===null||_a===void 0?void 0:_a.click();return;}if(code!=='ArrowDown'&&code!=='ArrowUp'){return;}const lastFocusedItem=this.childItems[this.focusedItemIndex];const direction=code==='ArrowDown'?1:-1;const itemToFocus=this.focusMenuItemByOffset(direction);if(itemToFocus===lastFocusedItem){return;}event.preventDefault();itemToFocus.scrollIntoView({block:'nearest'});}focusMenuItemByOffset(offset){const step=offset||1;const focusedItem=this.childItems[this.focusedItemIndex];focusedItem.focused=false;this.focusedItemIndex=(this.childItems.length+this.focusedItemIndex+offset)%this.childItems.length;let itemToFocus=this.childItems[this.focusedItemIndex];let availableItems=this.childItems.length;// cycle through the available items in the directions of the offset to find the next non-disabled item
while(itemToFocus.disabled&&availableItems){availableItems-=1;this.focusedItemIndex=(this.childItems.length+this.focusedItemIndex+step)%this.childItems.length;itemToFocus=this.childItems[this.focusedItemIndex];}// if there are no non-disabled items, skip the work to focus a child
if(!(itemToFocus===null||itemToFocus===void 0?void 0:itemToFocus.disabled)){this.forwardFocusVisibleToItem(itemToFocus);}return itemToFocus;}prepareToCleanUp(){document.addEventListener('focusout',()=>{requestAnimationFrame(()=>{const focusedItem=this.childItems[this.focusedItemIndex];if(focusedItem){focusedItem.focused=false;this.updateSelectedItemIndex();}});},{once:true});}updateSelectedItemIndex(){let firstOrFirstSelectedIndex=0;const selectedItemsMap=new Map();const selected=[];const selectedItems=[];let itemIndex=this.childItems.length;while(itemIndex){itemIndex-=1;const childItem=this.childItems[itemIndex];if(childItem.menuData.selectionRoot===this){if(childItem.selected){firstOrFirstSelectedIndex=itemIndex;selectedItemsMap.set(childItem,true);selected.unshift(childItem.value);selectedItems.unshift(childItem);}// Remove "focused" from non-"selected" items ONLY
// Preserve "focused" on index===0 when no selection
if(itemIndex!==firstOrFirstSelectedIndex){childItem.focused=false;}}}selectedItems.map((item,i)=>{// When there is more than one "selected" item,
// ensure only the first one can be "focused"
if(i>0){item.focused=false;}});this.selectedItemsMap=selectedItemsMap;this.selected=selected;this.selectedItems=selectedItems;this.value=this.selected.join(this.valueSeparator);this.focusedItemIndex=firstOrFirstSelectedIndex;this.focusInItemIndex=firstOrFirstSelectedIndex;}handleItemsChanged(){this.cachedChildItems=undefined;if(!this._willUpdateItems){/* c8 ignore next 3 */let resolve=()=>{return;};this.cacheUpdated=new Promise(res=>resolve=res);this._willUpdateItems=true;// Debounce the update so we only update once
// if multiple items have changed
window.requestAnimationFrame(()=>{if(this.cachedChildItems===undefined){this.updateSelectedItemIndex();this.updateItemFocus();}this._willUpdateItems=false;resolve();});}}updateItemFocus(){if(this.childItems.length==0){return;}const focusInItem=this.childItems[this.focusInItemIndex];if(this.getRootNode().activeElement===focusInItem.menuData.focusRoot){this.forwardFocusVisibleToItem(focusInItem);}}forwardFocusVisibleToItem(item){if(item.menuData.focusRoot!==this){return;}const activeElement=this.getRootNode().activeElement;let shouldFocus=false;try{// Browsers without support for the `:focus-visible`
// selector will throw on the following test (Safari, older things).
// Some won't throw, but will be focusing item rather than the menu and
// will rely on the polyfill to know whether focus is "visible" or not.
shouldFocus=activeElement.matches(':focus-visible')||activeElement.matches('.focus-visible');}catch(error){shouldFocus=activeElement.matches('.focus-visible');}item.focused=shouldFocus;this.setAttribute('aria-activedescendant',item.id);if(item.menuData.selectionRoot&&item.menuData.selectionRoot!==this){item.menuData.selectionRoot.focus();}}render(){return p`<slot></slot>`;}firstUpdated(changed){super.firstUpdated(changed);if(!this.hasAttribute('tabindex')){const role=this.getAttribute('role');if(role==='group'){this.tabIndex=-1;}else if(role!=='none'){this.tabIndex=0;}}const updates=[new Promise(res=>requestAnimationFrame(()=>res(true)))];[...this.children].forEach(item=>{if(item.localName==='sp-menu-item'){updates.push(item.updateComplete);}});this.childItemsUpdated=Promise.all(updates);}updated(changes){super.updated(changes);if(changes.has('selects')&&this._notFirstUpdated){this.selectsChanged();}if(changes.has('label')){if(this.label){this.setAttribute('aria-label',this.label);}else {this.removeAttribute('aria-label');}}this._notFirstUpdated=true;}selectsChanged(){const updates=[new Promise(res=>requestAnimationFrame(()=>res(true)))];this.childItemSet.forEach(childItem=>{updates.push(childItem.triggerUpdate());});this.childItemsUpdated=Promise.all(updates);}connectedCallback(){super.connectedCallback();if(!this.hasAttribute('role')){this.setAttribute('role',this.ownRole);}this.updateComplete.then(()=>this.updateItemFocus());}async getUpdateComplete(){const complete=await super.getUpdateComplete();await this.childItemsUpdated;await this.cacheUpdated;return complete;}}__decorate([e({type:String,reflect:true})],Menu.prototype,"label",void 0);__decorate([e({type:String,reflect:true})],Menu.prototype,"selects",void 0);__decorate([e({type:String})],Menu.prototype,"value",void 0);__decorate([e({type:String,attribute:'value-separator'})],Menu.prototype,"valueSeparator",void 0);__decorate([e({attribute:false})],Menu.prototype,"selected",void 0);__decorate([e({attribute:false})],Menu.prototype,"selectedItems",void 0);__decorate([i('slot:not([name])')],Menu.prototype,"menuSlot",void 0);

iliadCustomElementsDefine('sp-menu',Menu);

const styles$d=r`:host{--spectrum-popover-background-color:var(--spectrum-global-color-gray-100);--spectrum-popover-border-color:var(--spectrum-alias-border-color-dark);--spectrum-popover-box-shadow:var(--spectrum-global-shadow-static-m);--spectrum-popover-elevation:2dp;--spectrum-popover-border-size:var(--spectrum-global-dimension-size-0);--spectrum-popover-border-radius:var(--spectrum-alias-border-radius-large);--spectrum-popover-padding-x:var(--spectrum-global-dimension-size-100);--spectrum-popover-padding-y:var(--spectrum-global-dimension-size-100);--spectrum-popover-tip-width:var(--spectrum-global-dimension-size-250);--spectrum-popover-tip-height:var(--spectrum-global-dimension-size-125);--spectrum-popover-source-gap:var(--spectrum-global-dimension-size-75)}:host{--spectrum-overlay-animation-distance:var(
--spectrum-picker-m-popover-offset-y,var(--spectrum-global-dimension-size-75)
);opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0s linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]){opacity:1;pointer-events:auto;transition-delay:0s;visibility:visible}:host([placement*=bottom][open]){transform:translateY(var(--spectrum-overlay-animation-distance))}:host([placement*=top][open]){transform:translateY(calc(-1*var(--spectrum-overlay-animation-distance)))}:host([placement*=right][open]){transform:translateX(var(--spectrum-overlay-animation-distance))}:host([placement*=left][open]){transform:translateX(calc(-1*var(--spectrum-overlay-animation-distance)))}:host{--spectrum-popover-target-offset:13px;--spectrum-popover-dialog-padding:30px 29px;--spectrum-popover-dialog-min-width:270px;--spectrum-popover-min-width:var(--spectrum-global-dimension-size-400);--spectrum-popover-min-height:var(--spectrum-global-dimension-size-400)}:host{border-radius:var(
--spectrum-popover-border-radius,var(--spectrum-alias-border-radius-regular)
);border-style:solid;border-width:var(
--spectrum-popover-border-size,var(--spectrum-alias-border-size-thin)
);box-sizing:border-box;display:inline-flex;flex-direction:column;min-height:var(
--spectrum-popover-min-height,var(--spectrum-global-dimension-size-400)
);min-width:var(
--spectrum-popover-min-width,var(--spectrum-global-dimension-size-400)
);outline:0;position:absolute}#tip{position:absolute;-webkit-transform:translate(0)}#tip .triangle{stroke-linecap:square;stroke-linejoin:miter;stroke-width:var(
--spectrum-popover-border-size,var(--spectrum-alias-border-size-thin)
)}:host([dialog]){min-width:var(
--spectrum-popover-dialog-min-width
);padding:var(--spectrum-popover-dialog-padding)}:host([placement*=left][tip]){margin-right:var(
--spectrum-popover-target-offset
)}:host([placement*=left]) #tip{left:100%}:host([placement*=right][tip]){margin-left:var(
--spectrum-popover-target-offset
)}:host([placement*=right]) #tip{right:100%;transform:scaleX(-1)}:host([placement*=left]) #tip,:host([placement*=right]) #tip{margin-top:calc(var(--spectrum-global-dimension-size-150)*-1);top:50%}:host([placement*=bottom][tip]){margin-top:var(
--spectrum-popover-target-offset
)}:host([placement*=bottom]) #tip{bottom:100%;transform:scaleY(-1)}:host([placement*=top][tip]){margin-bottom:var(
--spectrum-popover-target-offset
)}:host([placement*=top]) #tip{top:100%}:host([placement*=bottom]) #tip,:host([placement*=top]) #tip{left:50%;margin-left:calc(var(--spectrum-global-dimension-size-150)*-1)}:host{background-color:var(
--spectrum-popover-background-color,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-popover-border-color,var(--spectrum-alias-border-color-dark)
);-webkit-clip-path:inset(-30px -30px);clip-path:inset(-30px -30px);filter:drop-shadow(0 1px 4px var(
--spectrum-popover-shadow-color,var(--spectrum-alias-dropshadow-color)
));-webkit-filter:drop-shadow(0 1px 4px var(
--spectrum-popover-shadow-color,var(--spectrum-alias-dropshadow-color)
));will-change:filter}#tip .triangle{fill:var(
--spectrum-popover-background-color,var(--spectrum-global-color-gray-50)
);stroke:var(
--spectrum-popover-border-color,var(--spectrum-alias-border-color-dark)
)}:host{box-shadow:var(--spectrum-popover-box-shadow);filter:none;padding:var(--spectrum-popover-padding-y) var(--spectrum-popover-padding-x);will-change:unset}:host{--sp-popover-tip-size:24px}:host([placement*=bottom]),:host([placement*=top]){max-height:calc(100% - var(--spectrum-overlay-animation-distance))}:host([placement*=left]),:host([placement*=right]){max-width:calc(100% - var(--spectrum-overlay-animation-distance))}::slotted(*){overscroll-behavior:contain}.tip{height:calc(var(--sp-popover-tip-size)/2);left:0;position:absolute;width:var(--sp-popover-tip-size)}:host([placement*=right]) #tip{transform:none}:host([placement*=bottom]) #tip{transform:none}:host([placement*=top]) .tip{top:100%}:host([placement*=bottom]) .tip{bottom:100%;transform:scaleY(-1)}:host([placement*=left]) .tip{transform:rotate(-90deg) translateY(-200%);transform-origin:100% 0}:host([placement*=right]) .tip{transform:rotate(90deg);transform-origin:0 0}`;

/**
 * @element sp-popover
 *
 * @slot - content to display within the Popover
 * @attr {Boolean} open - The open state of the popover
 * @attr {Boolean} dialog - Adds some padding to the popover
 */class Popover extends SpectrumElement{constructor(){super(...arguments);this.open=false;/**
         * @type {"auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | "none"}
         * @attr
         */this.placement='none';this.tip=false;}static get styles(){return [styles$d];}renderTip(){return p`<div id="tip"><svg xmlns="http://www.w3.org/svg/2000" class="tip" viewBox="0 0 24 12"><path class="triangle" d="M 0.7071067811865476 0 L 11.414213562373096 10.707106781186548 L 22.121320343559645 0"></path></svg></div>`;}connectedCallback(){super.connectedCallback();this.addEventListener('sp-overlay-query',this.onOverlayQuery);}disconnectedCallback(){super.disconnectedCallback();this.removeEventListener('sp-overlay-query',this.onOverlayQuery);}onOverlayQuery(event){/* c8 ignore next */if(!event.target)return;const target=event.target;/* c8 ignore next */if(target!==this)return;const tipElement=this.shadowRoot.querySelector('#tip');if(tipElement){event.detail.overlayContentTipElement=tipElement;}}render(){return p`<slot></slot>${this.tip?this.renderTip():T}`;}}__decorate([e({type:Boolean,reflect:true})],Popover.prototype,"open",void 0);__decorate([e({reflect:true})],Popover.prototype,"placement",void 0);__decorate([e({type:Boolean,reflect:true})],Popover.prototype,"tip",void 0);

iliadCustomElementsDefine('sp-popover',Popover);

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/const getActiveElement=el=>{return el.getRootNode().activeElement;};

const slotElementObserver$1=Symbol('slotElementObserver');const startObserving$1=Symbol('startObserving');const slotContentIsPresent=Symbol('slotContentIsPresent');function ObserveSlotPresence(constructor,lightDomSelector){var _a;const lightDomSelectors=Array.isArray(lightDomSelector)?lightDomSelector:[lightDomSelector];class SlotPresenceObservingElement extends constructor{constructor(){super(...arguments);this[_a]=new Map();this.managePresenceObservedSlot=()=>{lightDomSelectors.forEach(selector=>{this[slotContentIsPresent].set(selector,!!this.querySelector(selector));});this.requestUpdate();};}/**
         *  @private
         */get slotContentIsPresent(){if(lightDomSelectors.length===1){return this[slotContentIsPresent].get(lightDomSelectors[0])||false;}else {throw new Error('Multiple selectors provided to `ObserveSlotPresence` use `getSlotContentPresence(selector: string)` instead.');}}getSlotContentPresence(selector){if(this[slotContentIsPresent].has(selector)){return this[slotContentIsPresent].get(selector)||false;}throw new Error(`The provided selector \`\` is not being observed.`);}[(_a=slotContentIsPresent,startObserving$1)](){const config={childList:true,subtree:true};if(!this[slotElementObserver$1]){this[slotElementObserver$1]=new MutationObserver(this.managePresenceObservedSlot);}this[slotElementObserver$1].observe(this,config);this.managePresenceObservedSlot();}connectedCallback(){super.connectedCallback();this[startObserving$1]();}disconnectedCallback(){this[slotElementObserver$1].disconnect();super.disconnectedCallback();}}return SlotPresenceObservingElement;}

const slotElementObserver=Symbol('slotElementObserver');// Fix needed for: https://github.com/lit/lit/issues/1789
const assignedNodesList=Symbol('assignedNodes');const startObserving=Symbol('startObserving');function ObserveSlotText(constructor,slotSelector){var _a;class SlotTextObservingElement extends constructor{constructor(){super(...arguments);this.slotHasContent=false;}manageTextObservedSlot(){if(!this[assignedNodesList])return;const assignedNodes=[...this[assignedNodesList]].filter(node=>{if(node.tagName){return true;}return node.textContent?node.textContent.trim():false;});this.slotHasContent=assignedNodes.length>0;}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.manageTextObservedSlot();}[(_a=assignedNodesList,startObserving)](){const config={characterData:true,subtree:true};if(!this[slotElementObserver]){const callback=mutationsList=>{for(const mutation of mutationsList){if(mutation.type==='characterData'){this.manageTextObservedSlot();}}};this[slotElementObserver]=new MutationObserver(callback);}this[slotElementObserver].observe(this,config);}connectedCallback(){super.connectedCallback();this[startObserving]();}disconnectedCallback(){if(this[slotElementObserver]){this[slotElementObserver].disconnect();}super.disconnectedCallback();}}__decorate([e({type:Boolean,attribute:false})],SlotTextObservingElement.prototype,"slotHasContent",void 0);__decorate([o(slotSelector,true)],SlotTextObservingElement.prototype,_a,void 0);return SlotTextObservingElement;}

const styles$c=r`@keyframes spOverlayFadeIn{0%{opacity:0;transform:var(--sp-overlay-from)}to{opacity:1;transform:translate(0)}}@keyframes spOverlayFadeOut{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:var(--sp-overlay-from)}}:host{display:inline-block;left:0;pointer-events:none;position:absolute;top:0;z-index:1000}:host(:focus){outline:0}#contents,sp-theme{height:100%}#contents{animation-duration:var(--spectrum-global-animation-duration-200,.16s);animation-timing-function:var(
--spectrum-global-animation-ease-out,ease-out
);display:inline-block;opacity:1;pointer-events:none;visibility:visible}:host([data-popper-placement*=top]) #contents{--sp-overlay-from:translateY(var(--spectrum-global-dimension-size-75))}:host([data-popper-placement*=right]) #contents{--sp-overlay-from:translateX(calc(-1*var(--spectrum-global-dimension-size-75)))}:host([data-popper-placement*=bottom]) #contents{--sp-overlay-from:translateY(calc(-1*var(--spectrum-global-dimension-size-75)))}:host([data-popper-placement*=left]) #contents{--sp-overlay-from:translateX(var(--spectrum-global-dimension-size-75))}:host([animating]) ::slotted(*){pointer-events:none}:host(:not([animating])) ::slotted(*){pointer-events:auto}#contents ::slotted(*){position:relative}`;

var top$1='top';var bottom$1='bottom';var right$1='right';var left$1='left';var auto$1='auto';var basePlacements$1=[top$1,bottom$1,right$1,left$1];var start$1='start';var end$1='end';var clippingParents$1='clippingParents';var viewport$1='viewport';var popper$1='popper';var reference$1='reference';var variationPlacements$1=/*#__PURE__*/basePlacements$1.reduce(function(acc,placement){return acc.concat([placement+"-"+start$1,placement+"-"+end$1]);},[]);var placements$1=/*#__PURE__*/[].concat(basePlacements$1,[auto$1]).reduce(function(acc,placement){return acc.concat([placement,placement+"-"+start$1,placement+"-"+end$1]);},[]);// modifiers that need to read the DOM
var beforeRead$1='beforeRead';var read$1='read';var afterRead$1='afterRead';// pure-logic modifiers
var beforeMain$1='beforeMain';var main$1='main';var afterMain$1='afterMain';// modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite$1='beforeWrite';var write$1='write';var afterWrite$1='afterWrite';var modifierPhases$1=[beforeRead$1,read$1,afterRead$1,beforeMain$1,main$1,afterMain$1,beforeWrite$1,write$1,afterWrite$1];

function getBasePlacement$1(placement){return placement.split('-')[0];}

function getWindow$1(node){if(node==null){return window;}if(node.toString()!=='[object Window]'){var ownerDocument=node.ownerDocument;return ownerDocument?ownerDocument.defaultView||window:window;}return node;}

function isElement$1(node){var OwnElement=getWindow$1(node).Element;return node instanceof OwnElement||node instanceof Element;}function isHTMLElement$1(node){var OwnElement=getWindow$1(node).HTMLElement;return node instanceof OwnElement||node instanceof HTMLElement;}function isShadowRoot$1(node){// IE 11 has no ShadowRoot
if(typeof ShadowRoot==='undefined'){return false;}var OwnElement=getWindow$1(node).ShadowRoot;return node instanceof OwnElement||node instanceof ShadowRoot;}

var max$1=Math.max;var min$1=Math.min;var round$1=Math.round;

function getBoundingClientRect$1(element,includeScale){if(includeScale===void 0){includeScale=false;}var rect=element.getBoundingClientRect();var scaleX=1;var scaleY=1;if(isHTMLElement$1(element)&&includeScale){var offsetHeight=element.offsetHeight;var offsetWidth=element.offsetWidth;// Do not attempt to divide by 0, otherwise we get `Infinity` as scale
// Fallback to 1 in case both values are `0`
if(offsetWidth>0){scaleX=round$1(rect.width)/offsetWidth||1;}if(offsetHeight>0){scaleY=round$1(rect.height)/offsetHeight||1;}}return {width:rect.width/scaleX,height:rect.height/scaleY,top:rect.top/scaleY,right:rect.right/scaleX,bottom:rect.bottom/scaleY,left:rect.left/scaleX,x:rect.left/scaleX,y:rect.top/scaleY};}

// means it doesn't take into account transforms.
function getLayoutRect$1(element){var clientRect=getBoundingClientRect$1(element);// Use the clientRect sizes if it's not been transformed.
// Fixes https://github.com/popperjs/popper-core/issues/1223
var width=element.offsetWidth;var height=element.offsetHeight;if(Math.abs(clientRect.width-width)<=1){width=clientRect.width;}if(Math.abs(clientRect.height-height)<=1){height=clientRect.height;}return {x:element.offsetLeft,y:element.offsetTop,width:width,height:height};}

function contains$1(parent,child){var rootNode=child.getRootNode&&child.getRootNode();// First, attempt with faster native method
if(parent.contains(child)){return true;}// then fallback to custom implementation with Shadow DOM support
else if(rootNode&&isShadowRoot$1(rootNode)){var next=child;do{if(next&&parent.isSameNode(next)){return true;}// $FlowFixMe[prop-missing]: need a better way to handle this...
next=next.parentNode||next.host;}while(next);}// Give up, the result is false
return false;}

function getNodeName$1(element){return element?(element.nodeName||'').toLowerCase():null;}

function getComputedStyle$2(element){return getWindow$1(element).getComputedStyle(element);}

function isTableElement$1(element){return ['table','td','th'].indexOf(getNodeName$1(element))>=0;}

function getDocumentElement$1(element){// $FlowFixMe[incompatible-return]: assume body is always available
return ((isElement$1(element)?element.ownerDocument:// $FlowFixMe[prop-missing]
element.document)||window.document).documentElement;}

function getParentNode$1(element){if(getNodeName$1(element)==='html'){return element;}return(// this is a quicker (but less type safe) way to save quite some bytes from the bundle
// $FlowFixMe[incompatible-return]
// $FlowFixMe[prop-missing]
element.assignedSlot||// step into the shadow DOM of the parent of a slotted node
element.parentNode||(// DOM Element detected
isShadowRoot$1(element)?element.host:null)||// ShadowRoot detected
// $FlowFixMe[incompatible-call]: HTMLElement is a Node
getDocumentElement$1(element)// fallback
);}

function getTrueOffsetParent$1(element){if(!isHTMLElement$1(element)||// https://github.com/popperjs/popper-core/issues/837
getComputedStyle$2(element).position==='fixed'){return null;}return element.offsetParent;}// `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock$1(element){var isFirefox=navigator.userAgent.toLowerCase().indexOf('firefox')!==-1;var isIE=navigator.userAgent.indexOf('Trident')!==-1;if(isIE&&isHTMLElement$1(element)){// In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
var elementCss=getComputedStyle$2(element);if(elementCss.position==='fixed'){return null;}}var currentNode=getParentNode$1(element);while(isHTMLElement$1(currentNode)&&['html','body'].indexOf(getNodeName$1(currentNode))<0){var css=getComputedStyle$2(currentNode);// This is non-exhaustive but covers the most common CSS properties that
// create a containing block.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
if(css.transform!=='none'||css.perspective!=='none'||css.contain==='paint'||['transform','perspective'].indexOf(css.willChange)!==-1||isFirefox&&css.willChange==='filter'||isFirefox&&css.filter&&css.filter!=='none'){return currentNode;}else {currentNode=currentNode.parentNode;}}return null;}// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent$1(element){var window=getWindow$1(element);var offsetParent=getTrueOffsetParent$1(element);while(offsetParent&&isTableElement$1(offsetParent)&&getComputedStyle$2(offsetParent).position==='static'){offsetParent=getTrueOffsetParent$1(offsetParent);}if(offsetParent&&(getNodeName$1(offsetParent)==='html'||getNodeName$1(offsetParent)==='body'&&getComputedStyle$2(offsetParent).position==='static')){return window;}return offsetParent||getContainingBlock$1(element)||window;}

function getMainAxisFromPlacement$1(placement){return ['top','bottom'].indexOf(placement)>=0?'x':'y';}

function within$1(min,value,max){return max$1(min,min$1(value,max));}function withinMaxClamp$1(min,value,max){var v=within$1(min,value,max);return v>max?max:v;}

function getFreshSideObject$1(){return {top:0,right:0,bottom:0,left:0};}

function mergePaddingObject$1(paddingObject){return Object.assign({},getFreshSideObject$1(),paddingObject);}

function expandToHashMap$1(value,keys){return keys.reduce(function(hashMap,key){hashMap[key]=value;return hashMap;},{});}

var toPaddingObject$1=function toPaddingObject(padding,state){padding=typeof padding==='function'?padding(Object.assign({},state.rects,{placement:state.placement})):padding;return mergePaddingObject$1(typeof padding!=='number'?padding:expandToHashMap$1(padding,basePlacements$1));};function arrow$2(_ref){var _state$modifiersData$;var state=_ref.state,name=_ref.name,options=_ref.options;var arrowElement=state.elements.arrow;var popperOffsets=state.modifiersData.popperOffsets;var basePlacement=getBasePlacement$1(state.placement);var axis=getMainAxisFromPlacement$1(basePlacement);var isVertical=[left$1,right$1].indexOf(basePlacement)>=0;var len=isVertical?'height':'width';if(!arrowElement||!popperOffsets){return;}var paddingObject=toPaddingObject$1(options.padding,state);var arrowRect=getLayoutRect$1(arrowElement);var minProp=axis==='y'?top$1:left$1;var maxProp=axis==='y'?bottom$1:right$1;var endDiff=state.rects.reference[len]+state.rects.reference[axis]-popperOffsets[axis]-state.rects.popper[len];var startDiff=popperOffsets[axis]-state.rects.reference[axis];var arrowOffsetParent=getOffsetParent$1(arrowElement);var clientSize=arrowOffsetParent?axis==='y'?arrowOffsetParent.clientHeight||0:arrowOffsetParent.clientWidth||0:0;var centerToReference=endDiff/2-startDiff/2;// Make sure the arrow doesn't overflow the popper if the center point is
// outside of the popper bounds
var min=paddingObject[minProp];var max=clientSize-arrowRect[len]-paddingObject[maxProp];var center=clientSize/2-arrowRect[len]/2+centerToReference;var offset=within$1(min,center,max);// Prevents breaking syntax highlighting...
var axisProp=axis;state.modifiersData[name]=(_state$modifiersData$={},_state$modifiersData$[axisProp]=offset,_state$modifiersData$.centerOffset=offset-center,_state$modifiersData$);}function effect$5(_ref2){var state=_ref2.state,options=_ref2.options;var _options$element=options.element,arrowElement=_options$element===void 0?'[data-popper-arrow]':_options$element;if(arrowElement==null){return;}// CSS selector
if(typeof arrowElement==='string'){arrowElement=state.elements.popper.querySelector(arrowElement);if(!arrowElement){return;}}if(false){if(!isHTMLElement$1(arrowElement)){console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).','To use an SVG arrow, wrap it in an HTMLElement that will be used as','the arrow.'].join(' '));}}if(!contains$1(state.elements.popper,arrowElement)){if(false){console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper','element.'].join(' '));}return;}state.elements.arrow=arrowElement;}// eslint-disable-next-line import/no-unused-modules
var arrow$3 = {name:'arrow',enabled:true,phase:'main',fn:arrow$2,effect:effect$5,requires:['popperOffsets'],requiresIfExists:['preventOverflow']};

var hash$3={left:'right',right:'left',bottom:'top',top:'bottom'};function getOppositePlacement$1(placement){return placement.replace(/left|right|bottom|top/g,function(matched){return hash$3[matched];});}

var hash$2={start:'end',end:'start'};function getOppositeVariationPlacement$1(placement){return placement.replace(/start|end/g,function(matched){return hash$2[matched];});}

function getWindowScroll$1(node){var win=getWindow$1(node);var scrollLeft=win.pageXOffset;var scrollTop=win.pageYOffset;return {scrollLeft:scrollLeft,scrollTop:scrollTop};}

function getWindowScrollBarX$1(element){// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
// Popper 1 is broken in this case and never had a bug report so let's assume
// it's not an issue. I don't think anyone ever specifies width on <html>
// anyway.
// Browsers where the left scrollbar doesn't cause an issue report `0` for
// this (e.g. Edge 2019, IE11, Safari)
return getBoundingClientRect$1(getDocumentElement$1(element)).left+getWindowScroll$1(element).scrollLeft;}

function getViewportRect$1(element){var win=getWindow$1(element);var html=getDocumentElement$1(element);var visualViewport=win.visualViewport;var width=html.clientWidth;var height=html.clientHeight;var x=0;var y=0;// NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
// can be obscured underneath it.
// Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
// if it isn't open, so if this isn't available, the popper will be detected
// to overflow the bottom of the screen too early.
if(visualViewport){width=visualViewport.width;height=visualViewport.height;// Uses Layout Viewport (like Chrome; Safari does not currently)
// In Chrome, it returns a value very close to 0 (+/-) but contains rounding
// errors due to floating point numbers, so we need to check precision.
// Safari returns a number <= 0, usually < -1 when pinch-zoomed
// Feature detection fails in mobile emulation mode in Chrome.
// Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
// 0.001
// Fallback here: "Not Safari" userAgent
if(!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){x=visualViewport.offsetLeft;y=visualViewport.offsetTop;}}return {width:width,height:height,x:x+getWindowScrollBarX$1(element),y:y};}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function getDocumentRect$1(element){var _element$ownerDocumen;var html=getDocumentElement$1(element);var winScroll=getWindowScroll$1(element);var body=(_element$ownerDocumen=element.ownerDocument)==null?void 0:_element$ownerDocumen.body;var width=max$1(html.scrollWidth,html.clientWidth,body?body.scrollWidth:0,body?body.clientWidth:0);var height=max$1(html.scrollHeight,html.clientHeight,body?body.scrollHeight:0,body?body.clientHeight:0);var x=-winScroll.scrollLeft+getWindowScrollBarX$1(element);var y=-winScroll.scrollTop;if(getComputedStyle$2(body||html).direction==='rtl'){x+=max$1(html.clientWidth,body?body.clientWidth:0)-width;}return {width:width,height:height,x:x,y:y};}

function isScrollParent$1(element){// Firefox wants us to check `-x` and `-y` variations as well
var _getComputedStyle=getComputedStyle$2(element),overflow=_getComputedStyle.overflow,overflowX=_getComputedStyle.overflowX,overflowY=_getComputedStyle.overflowY;return /auto|scroll|overlay|hidden/.test(overflow+overflowY+overflowX);}

function getScrollParent$1(node){if(['html','body','#document'].indexOf(getNodeName$1(node))>=0){// $FlowFixMe[incompatible-return]: assume body is always available
return node.ownerDocument.body;}if(isHTMLElement$1(node)&&isScrollParent$1(node)){return node;}return getScrollParent$1(getParentNode$1(node));}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/function listScrollParents$1(element,list){var _element$ownerDocumen;if(list===void 0){list=[];}var scrollParent=getScrollParent$1(element);var isBody=scrollParent===((_element$ownerDocumen=element.ownerDocument)==null?void 0:_element$ownerDocumen.body);var win=getWindow$1(scrollParent);var target=isBody?[win].concat(win.visualViewport||[],isScrollParent$1(scrollParent)?scrollParent:[]):scrollParent;var updatedList=list.concat(target);return isBody?updatedList:// $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
updatedList.concat(listScrollParents$1(getParentNode$1(target)));}

function rectToClientRect$1(rect){return Object.assign({},rect,{left:rect.x,top:rect.y,right:rect.x+rect.width,bottom:rect.y+rect.height});}

function getInnerBoundingClientRect$1(element){var rect=getBoundingClientRect$1(element);rect.top=rect.top+element.clientTop;rect.left=rect.left+element.clientLeft;rect.bottom=rect.top+element.clientHeight;rect.right=rect.left+element.clientWidth;rect.width=element.clientWidth;rect.height=element.clientHeight;rect.x=rect.left;rect.y=rect.top;return rect;}function getClientRectFromMixedType$1(element,clippingParent){return clippingParent===viewport$1?rectToClientRect$1(getViewportRect$1(element)):isElement$1(clippingParent)?getInnerBoundingClientRect$1(clippingParent):rectToClientRect$1(getDocumentRect$1(getDocumentElement$1(element)));}// A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents$1(element){var clippingParents=listScrollParents$1(getParentNode$1(element));var canEscapeClipping=['absolute','fixed'].indexOf(getComputedStyle$2(element).position)>=0;var clipperElement=canEscapeClipping&&isHTMLElement$1(element)?getOffsetParent$1(element):element;if(!isElement$1(clipperElement)){return [];}// $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
return clippingParents.filter(function(clippingParent){return isElement$1(clippingParent)&&contains$1(clippingParent,clipperElement)&&getNodeName$1(clippingParent)!=='body'&&(canEscapeClipping?getComputedStyle$2(clippingParent).position!=='static':true);});}// Gets the maximum area that the element is visible in due to any number of
// clipping parents
function getClippingRect$1(element,boundary,rootBoundary){var mainClippingParents=boundary==='clippingParents'?getClippingParents$1(element):[].concat(boundary);var clippingParents=[].concat(mainClippingParents,[rootBoundary]);var firstClippingParent=clippingParents[0];var clippingRect=clippingParents.reduce(function(accRect,clippingParent){var rect=getClientRectFromMixedType$1(element,clippingParent);accRect.top=max$1(rect.top,accRect.top);accRect.right=min$1(rect.right,accRect.right);accRect.bottom=min$1(rect.bottom,accRect.bottom);accRect.left=max$1(rect.left,accRect.left);return accRect;},getClientRectFromMixedType$1(element,firstClippingParent));clippingRect.width=clippingRect.right-clippingRect.left;clippingRect.height=clippingRect.bottom-clippingRect.top;clippingRect.x=clippingRect.left;clippingRect.y=clippingRect.top;return clippingRect;}

function getVariation$1(placement){return placement.split('-')[1];}

function computeOffsets$1(_ref){var reference=_ref.reference,element=_ref.element,placement=_ref.placement;var basePlacement=placement?getBasePlacement$1(placement):null;var variation=placement?getVariation$1(placement):null;var commonX=reference.x+reference.width/2-element.width/2;var commonY=reference.y+reference.height/2-element.height/2;var offsets;switch(basePlacement){case top$1:offsets={x:commonX,y:reference.y-element.height};break;case bottom$1:offsets={x:commonX,y:reference.y+reference.height};break;case right$1:offsets={x:reference.x+reference.width,y:commonY};break;case left$1:offsets={x:reference.x-element.width,y:commonY};break;default:offsets={x:reference.x,y:reference.y};}var mainAxis=basePlacement?getMainAxisFromPlacement$1(basePlacement):null;if(mainAxis!=null){var len=mainAxis==='y'?'height':'width';switch(variation){case start$1:offsets[mainAxis]=offsets[mainAxis]-(reference[len]/2-element[len]/2);break;case end$1:offsets[mainAxis]=offsets[mainAxis]+(reference[len]/2-element[len]/2);break;default:}}return offsets;}

function detectOverflow$1(state,options){if(options===void 0){options={};}var _options=options,_options$placement=_options.placement,placement=_options$placement===void 0?state.placement:_options$placement,_options$boundary=_options.boundary,boundary=_options$boundary===void 0?clippingParents$1:_options$boundary,_options$rootBoundary=_options.rootBoundary,rootBoundary=_options$rootBoundary===void 0?viewport$1:_options$rootBoundary,_options$elementConte=_options.elementContext,elementContext=_options$elementConte===void 0?popper$1:_options$elementConte,_options$altBoundary=_options.altBoundary,altBoundary=_options$altBoundary===void 0?false:_options$altBoundary,_options$padding=_options.padding,padding=_options$padding===void 0?0:_options$padding;var paddingObject=mergePaddingObject$1(typeof padding!=='number'?padding:expandToHashMap$1(padding,basePlacements$1));var altContext=elementContext===popper$1?reference$1:popper$1;var popperRect=state.rects.popper;var element=state.elements[altBoundary?altContext:elementContext];var clippingClientRect=getClippingRect$1(isElement$1(element)?element:element.contextElement||getDocumentElement$1(state.elements.popper),boundary,rootBoundary);var referenceClientRect=getBoundingClientRect$1(state.elements.reference);var popperOffsets=computeOffsets$1({reference:referenceClientRect,element:popperRect,strategy:'absolute',placement:placement});var popperClientRect=rectToClientRect$1(Object.assign({},popperRect,popperOffsets));var elementClientRect=elementContext===popper$1?popperClientRect:referenceClientRect;// positive = overflowing the clipping rect
// 0 or negative = within the clipping rect
var overflowOffsets={top:clippingClientRect.top-elementClientRect.top+paddingObject.top,bottom:elementClientRect.bottom-clippingClientRect.bottom+paddingObject.bottom,left:clippingClientRect.left-elementClientRect.left+paddingObject.left,right:elementClientRect.right-clippingClientRect.right+paddingObject.right};var offsetData=state.modifiersData.offset;// Offsets can be applied only to the popper element
if(elementContext===popper$1&&offsetData){var offset=offsetData[placement];Object.keys(overflowOffsets).forEach(function(key){var multiply=[right$1,bottom$1].indexOf(key)>=0?1:-1;var axis=[top$1,bottom$1].indexOf(key)>=0?'y':'x';overflowOffsets[key]+=offset[axis]*multiply;});}return overflowOffsets;}

function computeAutoPlacement$1(state,options){if(options===void 0){options={};}var _options=options,placement=_options.placement,boundary=_options.boundary,rootBoundary=_options.rootBoundary,padding=_options.padding,flipVariations=_options.flipVariations,_options$allowedAutoP=_options.allowedAutoPlacements,allowedAutoPlacements=_options$allowedAutoP===void 0?placements$1:_options$allowedAutoP;var variation=getVariation$1(placement);var placements=variation?flipVariations?variationPlacements$1:variationPlacements$1.filter(function(placement){return getVariation$1(placement)===variation;}):basePlacements$1;var allowedPlacements=placements.filter(function(placement){return allowedAutoPlacements.indexOf(placement)>=0;});if(allowedPlacements.length===0){allowedPlacements=placements;if(false){console.error(['Popper: The `allowedAutoPlacements` option did not allow any','placements. Ensure the `placement` option matches the variation','of the allowed placements.','For example, "auto" cannot be used to allow "bottom-start".','Use "auto-start" instead.'].join(' '));}}// $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
var overflows=allowedPlacements.reduce(function(acc,placement){acc[placement]=detectOverflow$1(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,padding:padding})[getBasePlacement$1(placement)];return acc;},{});return Object.keys(overflows).sort(function(a,b){return overflows[a]-overflows[b];});}

function getExpandedFallbackPlacements$1(placement){if(getBasePlacement$1(placement)===auto$1){return [];}var oppositePlacement=getOppositePlacement$1(placement);return [getOppositeVariationPlacement$1(placement),oppositePlacement,getOppositeVariationPlacement$1(oppositePlacement)];}function flip$2(_ref){var state=_ref.state,options=_ref.options,name=_ref.name;if(state.modifiersData[name]._skip){return;}var _options$mainAxis=options.mainAxis,checkMainAxis=_options$mainAxis===void 0?true:_options$mainAxis,_options$altAxis=options.altAxis,checkAltAxis=_options$altAxis===void 0?true:_options$altAxis,specifiedFallbackPlacements=options.fallbackPlacements,padding=options.padding,boundary=options.boundary,rootBoundary=options.rootBoundary,altBoundary=options.altBoundary,_options$flipVariatio=options.flipVariations,flipVariations=_options$flipVariatio===void 0?true:_options$flipVariatio,allowedAutoPlacements=options.allowedAutoPlacements;var preferredPlacement=state.options.placement;var basePlacement=getBasePlacement$1(preferredPlacement);var isBasePlacement=basePlacement===preferredPlacement;var fallbackPlacements=specifiedFallbackPlacements||(isBasePlacement||!flipVariations?[getOppositePlacement$1(preferredPlacement)]:getExpandedFallbackPlacements$1(preferredPlacement));var placements=[preferredPlacement].concat(fallbackPlacements).reduce(function(acc,placement){return acc.concat(getBasePlacement$1(placement)===auto$1?computeAutoPlacement$1(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,padding:padding,flipVariations:flipVariations,allowedAutoPlacements:allowedAutoPlacements}):placement);},[]);var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var checksMap=new Map();var makeFallbackChecks=true;var firstFittingPlacement=placements[0];for(var i=0;i<placements.length;i++){var placement=placements[i];var _basePlacement=getBasePlacement$1(placement);var isStartVariation=getVariation$1(placement)===start$1;var isVertical=[top$1,bottom$1].indexOf(_basePlacement)>=0;var len=isVertical?'width':'height';var overflow=detectOverflow$1(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,altBoundary:altBoundary,padding:padding});var mainVariationSide=isVertical?isStartVariation?right$1:left$1:isStartVariation?bottom$1:top$1;if(referenceRect[len]>popperRect[len]){mainVariationSide=getOppositePlacement$1(mainVariationSide);}var altVariationSide=getOppositePlacement$1(mainVariationSide);var checks=[];if(checkMainAxis){checks.push(overflow[_basePlacement]<=0);}if(checkAltAxis){checks.push(overflow[mainVariationSide]<=0,overflow[altVariationSide]<=0);}if(checks.every(function(check){return check;})){firstFittingPlacement=placement;makeFallbackChecks=false;break;}checksMap.set(placement,checks);}if(makeFallbackChecks){// `2` may be desired in some cases – research later
var numberOfChecks=flipVariations?3:1;var _loop=function _loop(_i){var fittingPlacement=placements.find(function(placement){var checks=checksMap.get(placement);if(checks){return checks.slice(0,_i).every(function(check){return check;});}});if(fittingPlacement){firstFittingPlacement=fittingPlacement;return "break";}};for(var _i=numberOfChecks;_i>0;_i--){var _ret=_loop(_i);if(_ret==="break")break;}}if(state.placement!==firstFittingPlacement){state.modifiersData[name]._skip=true;state.placement=firstFittingPlacement;state.reset=true;}}// eslint-disable-next-line import/no-unused-modules
var flip$3 = {name:'flip',enabled:true,phase:'main',fn:flip$2,requiresIfExists:['offset'],data:{_skip:false}};

function distanceAndSkiddingToXY$1(placement,rects,offset){var basePlacement=getBasePlacement$1(placement);var invertDistance=[left$1,top$1].indexOf(basePlacement)>=0?-1:1;var _ref=typeof offset==='function'?offset(Object.assign({},rects,{placement:placement})):offset,skidding=_ref[0],distance=_ref[1];skidding=skidding||0;distance=(distance||0)*invertDistance;return [left$1,right$1].indexOf(basePlacement)>=0?{x:distance,y:skidding}:{x:skidding,y:distance};}function offset$2(_ref2){var state=_ref2.state,options=_ref2.options,name=_ref2.name;var _options$offset=options.offset,offset=_options$offset===void 0?[0,0]:_options$offset;var data=placements$1.reduce(function(acc,placement){acc[placement]=distanceAndSkiddingToXY$1(placement,state.rects,offset);return acc;},{});var _data$state$placement=data[state.placement],x=_data$state$placement.x,y=_data$state$placement.y;if(state.modifiersData.popperOffsets!=null){state.modifiersData.popperOffsets.x+=x;state.modifiersData.popperOffsets.y+=y;}state.modifiersData[name]=data;}// eslint-disable-next-line import/no-unused-modules
var offset$3 = {name:'offset',enabled:true,phase:'main',requires:['popperOffsets'],fn:offset$2};

function getAltAxis$1(axis){return axis==='x'?'y':'x';}

function preventOverflow$2(_ref){var state=_ref.state,options=_ref.options,name=_ref.name;var _options$mainAxis=options.mainAxis,checkMainAxis=_options$mainAxis===void 0?true:_options$mainAxis,_options$altAxis=options.altAxis,checkAltAxis=_options$altAxis===void 0?false:_options$altAxis,boundary=options.boundary,rootBoundary=options.rootBoundary,altBoundary=options.altBoundary,padding=options.padding,_options$tether=options.tether,tether=_options$tether===void 0?true:_options$tether,_options$tetherOffset=options.tetherOffset,tetherOffset=_options$tetherOffset===void 0?0:_options$tetherOffset;var overflow=detectOverflow$1(state,{boundary:boundary,rootBoundary:rootBoundary,padding:padding,altBoundary:altBoundary});var basePlacement=getBasePlacement$1(state.placement);var variation=getVariation$1(state.placement);var isBasePlacement=!variation;var mainAxis=getMainAxisFromPlacement$1(basePlacement);var altAxis=getAltAxis$1(mainAxis);var popperOffsets=state.modifiersData.popperOffsets;var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var tetherOffsetValue=typeof tetherOffset==='function'?tetherOffset(Object.assign({},state.rects,{placement:state.placement})):tetherOffset;var normalizedTetherOffsetValue=typeof tetherOffsetValue==='number'?{mainAxis:tetherOffsetValue,altAxis:tetherOffsetValue}:Object.assign({mainAxis:0,altAxis:0},tetherOffsetValue);var offsetModifierState=state.modifiersData.offset?state.modifiersData.offset[state.placement]:null;var data={x:0,y:0};if(!popperOffsets){return;}if(checkMainAxis){var _offsetModifierState$;var mainSide=mainAxis==='y'?top$1:left$1;var altSide=mainAxis==='y'?bottom$1:right$1;var len=mainAxis==='y'?'height':'width';var offset=popperOffsets[mainAxis];var min=offset+overflow[mainSide];var max=offset-overflow[altSide];var additive=tether?-popperRect[len]/2:0;var minLen=variation===start$1?referenceRect[len]:popperRect[len];var maxLen=variation===start$1?-popperRect[len]:-referenceRect[len];// We need to include the arrow in the calculation so the arrow doesn't go
// outside the reference bounds
var arrowElement=state.elements.arrow;var arrowRect=tether&&arrowElement?getLayoutRect$1(arrowElement):{width:0,height:0};var arrowPaddingObject=state.modifiersData['arrow#persistent']?state.modifiersData['arrow#persistent'].padding:getFreshSideObject$1();var arrowPaddingMin=arrowPaddingObject[mainSide];var arrowPaddingMax=arrowPaddingObject[altSide];// If the reference length is smaller than the arrow length, we don't want
// to include its full size in the calculation. If the reference is small
// and near the edge of a boundary, the popper can overflow even if the
// reference is not overflowing as well (e.g. virtual elements with no
// width or height)
var arrowLen=within$1(0,referenceRect[len],arrowRect[len]);var minOffset=isBasePlacement?referenceRect[len]/2-additive-arrowLen-arrowPaddingMin-normalizedTetherOffsetValue.mainAxis:minLen-arrowLen-arrowPaddingMin-normalizedTetherOffsetValue.mainAxis;var maxOffset=isBasePlacement?-referenceRect[len]/2+additive+arrowLen+arrowPaddingMax+normalizedTetherOffsetValue.mainAxis:maxLen+arrowLen+arrowPaddingMax+normalizedTetherOffsetValue.mainAxis;var arrowOffsetParent=state.elements.arrow&&getOffsetParent$1(state.elements.arrow);var clientOffset=arrowOffsetParent?mainAxis==='y'?arrowOffsetParent.clientTop||0:arrowOffsetParent.clientLeft||0:0;var offsetModifierValue=(_offsetModifierState$=offsetModifierState==null?void 0:offsetModifierState[mainAxis])!=null?_offsetModifierState$:0;var tetherMin=offset+minOffset-offsetModifierValue-clientOffset;var tetherMax=offset+maxOffset-offsetModifierValue;var preventedOffset=within$1(tether?min$1(min,tetherMin):min,offset,tether?max$1(max,tetherMax):max);popperOffsets[mainAxis]=preventedOffset;data[mainAxis]=preventedOffset-offset;}if(checkAltAxis){var _offsetModifierState$2;var _mainSide=mainAxis==='x'?top$1:left$1;var _altSide=mainAxis==='x'?bottom$1:right$1;var _offset=popperOffsets[altAxis];var _len=altAxis==='y'?'height':'width';var _min=_offset+overflow[_mainSide];var _max=_offset-overflow[_altSide];var isOriginSide=[top$1,left$1].indexOf(basePlacement)!==-1;var _offsetModifierValue=(_offsetModifierState$2=offsetModifierState==null?void 0:offsetModifierState[altAxis])!=null?_offsetModifierState$2:0;var _tetherMin=isOriginSide?_min:_offset-referenceRect[_len]-popperRect[_len]-_offsetModifierValue+normalizedTetherOffsetValue.altAxis;var _tetherMax=isOriginSide?_offset+referenceRect[_len]+popperRect[_len]-_offsetModifierValue-normalizedTetherOffsetValue.altAxis:_max;var _preventedOffset=tether&&isOriginSide?withinMaxClamp$1(_tetherMin,_offset,_tetherMax):within$1(tether?_tetherMin:_min,_offset,tether?_tetherMax:_max);popperOffsets[altAxis]=_preventedOffset;data[altAxis]=_preventedOffset-_offset;}state.modifiersData[name]=data;}// eslint-disable-next-line import/no-unused-modules
var preventOverflow$3 = {name:'preventOverflow',enabled:true,phase:'main',fn:preventOverflow$2,requiresIfExists:['offset']};

function getHTMLElementScroll$1(element){return {scrollLeft:element.scrollLeft,scrollTop:element.scrollTop};}

function getNodeScroll$1(node){if(node===getWindow$1(node)||!isHTMLElement$1(node)){return getWindowScroll$1(node);}else {return getHTMLElementScroll$1(node);}}

function isElementScaled$1(element){var rect=element.getBoundingClientRect();var scaleX=round$1(rect.width)/element.offsetWidth||1;var scaleY=round$1(rect.height)/element.offsetHeight||1;return scaleX!==1||scaleY!==1;}// Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.
function getCompositeRect$1(elementOrVirtualElement,offsetParent,isFixed){if(isFixed===void 0){isFixed=false;}var isOffsetParentAnElement=isHTMLElement$1(offsetParent);var offsetParentIsScaled=isHTMLElement$1(offsetParent)&&isElementScaled$1(offsetParent);var documentElement=getDocumentElement$1(offsetParent);var rect=getBoundingClientRect$1(elementOrVirtualElement,offsetParentIsScaled);var scroll={scrollLeft:0,scrollTop:0};var offsets={x:0,y:0};if(isOffsetParentAnElement||!isOffsetParentAnElement&&!isFixed){if(getNodeName$1(offsetParent)!=='body'||// https://github.com/popperjs/popper-core/issues/1078
isScrollParent$1(documentElement)){scroll=getNodeScroll$1(offsetParent);}if(isHTMLElement$1(offsetParent)){offsets=getBoundingClientRect$1(offsetParent,true);offsets.x+=offsetParent.clientLeft;offsets.y+=offsetParent.clientTop;}else if(documentElement){offsets.x=getWindowScrollBarX$1(documentElement);}}return {x:rect.left+scroll.scrollLeft-offsets.x,y:rect.top+scroll.scrollTop-offsets.y,width:rect.width,height:rect.height};}

function order$1(modifiers){var map=new Map();var visited=new Set();var result=[];modifiers.forEach(function(modifier){map.set(modifier.name,modifier);});// On visiting object, check for its dependencies and visit them recursively
function sort(modifier){visited.add(modifier.name);var requires=[].concat(modifier.requires||[],modifier.requiresIfExists||[]);requires.forEach(function(dep){if(!visited.has(dep)){var depModifier=map.get(dep);if(depModifier){sort(depModifier);}}});result.push(modifier);}modifiers.forEach(function(modifier){if(!visited.has(modifier.name)){// check for visited object
sort(modifier);}});return result;}function orderModifiers$1(modifiers){// order based on dependencies
var orderedModifiers=order$1(modifiers);// order based on phase
return modifierPhases$1.reduce(function(acc,phase){return acc.concat(orderedModifiers.filter(function(modifier){return modifier.phase===phase;}));},[]);}

function debounce$1(fn){var pending;return function(){if(!pending){pending=new Promise(function(resolve){Promise.resolve().then(function(){pending=undefined;resolve(fn());});});}return pending;};}

function format$1(str){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}return [].concat(args).reduce(function(p,c){return p.replace(/%s/,c);},str);}

var INVALID_MODIFIER_ERROR$1='Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';var MISSING_DEPENDENCY_ERROR$1='Popper: modifier "%s" requires "%s", but "%s" modifier is not available';var VALID_PROPERTIES$1=['name','enabled','phase','fn','effect','requires','options'];function validateModifiers$1(modifiers){modifiers.forEach(function(modifier){[].concat(Object.keys(modifier),VALID_PROPERTIES$1)// IE11-compatible replacement for `new Set(iterable)`
.filter(function(value,index,self){return self.indexOf(value)===index;}).forEach(function(key){switch(key){case'name':if(typeof modifier.name!=='string'){console.error(format$1(INVALID_MODIFIER_ERROR$1,String(modifier.name),'"name"','"string"',"\""+String(modifier.name)+"\""));}break;case'enabled':if(typeof modifier.enabled!=='boolean'){console.error(format$1(INVALID_MODIFIER_ERROR$1,modifier.name,'"enabled"','"boolean"',"\""+String(modifier.enabled)+"\""));}break;case'phase':if(modifierPhases$1.indexOf(modifier.phase)<0){console.error(format$1(INVALID_MODIFIER_ERROR$1,modifier.name,'"phase"',"either "+modifierPhases$1.join(', '),"\""+String(modifier.phase)+"\""));}break;case'fn':if(typeof modifier.fn!=='function'){console.error(format$1(INVALID_MODIFIER_ERROR$1,modifier.name,'"fn"','"function"',"\""+String(modifier.fn)+"\""));}break;case'effect':if(modifier.effect!=null&&typeof modifier.effect!=='function'){console.error(format$1(INVALID_MODIFIER_ERROR$1,modifier.name,'"effect"','"function"',"\""+String(modifier.fn)+"\""));}break;case'requires':if(modifier.requires!=null&&!Array.isArray(modifier.requires)){console.error(format$1(INVALID_MODIFIER_ERROR$1,modifier.name,'"requires"','"array"',"\""+String(modifier.requires)+"\""));}break;case'requiresIfExists':if(!Array.isArray(modifier.requiresIfExists)){console.error(format$1(INVALID_MODIFIER_ERROR$1,modifier.name,'"requiresIfExists"','"array"',"\""+String(modifier.requiresIfExists)+"\""));}break;case'options':case'data':break;default:console.error("PopperJS: an invalid property has been provided to the \""+modifier.name+"\" modifier, valid properties are "+VALID_PROPERTIES$1.map(function(s){return "\""+s+"\"";}).join(', ')+"; but \""+key+"\" was provided.");}modifier.requires&&modifier.requires.forEach(function(requirement){if(modifiers.find(function(mod){return mod.name===requirement;})==null){console.error(format$1(MISSING_DEPENDENCY_ERROR$1,String(modifier.name),requirement,requirement));}});});});}

function uniqueBy$1(arr,fn){var identifiers=new Set();return arr.filter(function(item){var identifier=fn(item);if(!identifiers.has(identifier)){identifiers.add(identifier);return true;}});}

function mergeByName$1(modifiers){var merged=modifiers.reduce(function(merged,current){var existing=merged[current.name];merged[current.name]=existing?Object.assign({},existing,current,{options:Object.assign({},existing.options,current.options),data:Object.assign({},existing.data,current.data)}):current;return merged;},{});// IE11 does not support Object.values
return Object.keys(merged).map(function(key){return merged[key];});}

var INVALID_ELEMENT_ERROR$1='Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';var INFINITE_LOOP_ERROR$1='Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';var DEFAULT_OPTIONS$1={placement:'bottom',modifiers:[],strategy:'absolute'};function areValidElements$1(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return !args.some(function(element){return !(element&&typeof element.getBoundingClientRect==='function');});}function popperGenerator$1(generatorOptions){if(generatorOptions===void 0){generatorOptions={};}var _generatorOptions=generatorOptions,_generatorOptions$def=_generatorOptions.defaultModifiers,defaultModifiers=_generatorOptions$def===void 0?[]:_generatorOptions$def,_generatorOptions$def2=_generatorOptions.defaultOptions,defaultOptions=_generatorOptions$def2===void 0?DEFAULT_OPTIONS$1:_generatorOptions$def2;return function createPopper(reference,popper,options){if(options===void 0){options=defaultOptions;}var state={placement:'bottom',orderedModifiers:[],options:Object.assign({},DEFAULT_OPTIONS$1,defaultOptions),modifiersData:{},elements:{reference:reference,popper:popper},attributes:{},styles:{}};var effectCleanupFns=[];var isDestroyed=false;var instance={state:state,setOptions:function setOptions(setOptionsAction){var options=typeof setOptionsAction==='function'?setOptionsAction(state.options):setOptionsAction;cleanupModifierEffects();state.options=Object.assign({},defaultOptions,state.options,options);state.scrollParents={reference:isElement$1(reference)?listScrollParents$1(reference):reference.contextElement?listScrollParents$1(reference.contextElement):[],popper:listScrollParents$1(popper)};// Orders the modifiers based on their dependencies and `phase`
// properties
var orderedModifiers=orderModifiers$1(mergeByName$1([].concat(defaultModifiers,state.options.modifiers)));// Strip out disabled modifiers
state.orderedModifiers=orderedModifiers.filter(function(m){return m.enabled;});// Validate the provided modifiers so that the consumer will get warned
// if one of the modifiers is invalid for any reason
if(false){var modifiers=uniqueBy$1([].concat(orderedModifiers,state.options.modifiers),function(_ref){var name=_ref.name;return name;});validateModifiers$1(modifiers);if(getBasePlacement$1(state.options.placement)===auto$1){var flipModifier=state.orderedModifiers.find(function(_ref2){var name=_ref2.name;return name==='flip';});if(!flipModifier){console.error(['Popper: "auto" placements require the "flip" modifier be','present and enabled to work.'].join(' '));}}var _getComputedStyle=getComputedStyle$2(popper),marginTop=_getComputedStyle.marginTop,marginRight=_getComputedStyle.marginRight,marginBottom=_getComputedStyle.marginBottom,marginLeft=_getComputedStyle.marginLeft;// We no longer take into account `margins` on the popper, and it can
// cause bugs with positioning, so we'll warn the consumer
if([marginTop,marginRight,marginBottom,marginLeft].some(function(margin){return parseFloat(margin);})){console.warn(['Popper: CSS "margin" styles cannot be used to apply padding','between the popper and its reference element or boundary.','To replicate margin, use the `offset` modifier, as well as','the `padding` option in the `preventOverflow` and `flip`','modifiers.'].join(' '));}}runModifierEffects();return instance.update();},// Sync update – it will always be executed, even if not necessary. This
// is useful for low frequency updates where sync behavior simplifies the
// logic.
// For high frequency updates (e.g. `resize` and `scroll` events), always
// prefer the async Popper#update method
forceUpdate:function forceUpdate(){if(isDestroyed){return;}var _state$elements=state.elements,reference=_state$elements.reference,popper=_state$elements.popper;// Don't proceed if `reference` or `popper` are not valid elements
// anymore
if(!areValidElements$1(reference,popper)){if(false){console.error(INVALID_ELEMENT_ERROR$1);}return;}// Store the reference and popper rects to be read by modifiers
state.rects={reference:getCompositeRect$1(reference,getOffsetParent$1(popper),state.options.strategy==='fixed'),popper:getLayoutRect$1(popper)};// Modifiers have the ability to reset the current update cycle. The
// most common use case for this is the `flip` modifier changing the
// placement, which then needs to re-run all the modifiers, because the
// logic was previously ran for the previous placement and is therefore
// stale/incorrect
state.reset=false;state.placement=state.options.placement;// On each update cycle, the `modifiersData` property for each modifier
// is filled with the initial data specified by the modifier. This means
// it doesn't persist and is fresh on each update.
// To ensure persistent data, use `${name}#persistent`
state.orderedModifiers.forEach(function(modifier){return state.modifiersData[modifier.name]=Object.assign({},modifier.data);});var __debug_loops__=0;for(var index=0;index<state.orderedModifiers.length;index++){if(false){__debug_loops__+=1;if(__debug_loops__>100){console.error(INFINITE_LOOP_ERROR$1);break;}}if(state.reset===true){state.reset=false;index=-1;continue;}var _state$orderedModifie=state.orderedModifiers[index],fn=_state$orderedModifie.fn,_state$orderedModifie2=_state$orderedModifie.options,_options=_state$orderedModifie2===void 0?{}:_state$orderedModifie2,name=_state$orderedModifie.name;if(typeof fn==='function'){state=fn({state:state,options:_options,name:name,instance:instance})||state;}}},// Async and optimistically optimized update – it will not be executed if
// not necessary (debounced to run at most once-per-tick)
update:debounce$1(function(){return new Promise(function(resolve){instance.forceUpdate();resolve(state);});}),destroy:function destroy(){cleanupModifierEffects();isDestroyed=true;}};if(!areValidElements$1(reference,popper)){if(false){console.error(INVALID_ELEMENT_ERROR$1);}return instance;}instance.setOptions(options).then(function(state){if(!isDestroyed&&options.onFirstUpdate){options.onFirstUpdate(state);}});// Modifiers have the ability to execute arbitrary code before the first
// update cycle runs. They will be executed in the same order as the update
// cycle. This is useful when a modifier adds some persistent data that
// other modifiers need to use, but the modifier is run after the dependent
// one.
function runModifierEffects(){state.orderedModifiers.forEach(function(_ref3){var name=_ref3.name,_ref3$options=_ref3.options,options=_ref3$options===void 0?{}:_ref3$options,effect=_ref3.effect;if(typeof effect==='function'){var cleanupFn=effect({state:state,name:name,instance:instance,options:options});var noopFn=function noopFn(){};effectCleanupFns.push(cleanupFn||noopFn);}});}function cleanupModifierEffects(){effectCleanupFns.forEach(function(fn){return fn();});effectCleanupFns=[];}return instance;};}var createPopper$5=/*#__PURE__*/popperGenerator$1();// eslint-disable-next-line import/no-unused-modules

var passive$1={passive:true};function effect$4(_ref){var state=_ref.state,instance=_ref.instance,options=_ref.options;var _options$scroll=options.scroll,scroll=_options$scroll===void 0?true:_options$scroll,_options$resize=options.resize,resize=_options$resize===void 0?true:_options$resize;var window=getWindow$1(state.elements.popper);var scrollParents=[].concat(state.scrollParents.reference,state.scrollParents.popper);if(scroll){scrollParents.forEach(function(scrollParent){scrollParent.addEventListener('scroll',instance.update,passive$1);});}if(resize){window.addEventListener('resize',instance.update,passive$1);}return function(){if(scroll){scrollParents.forEach(function(scrollParent){scrollParent.removeEventListener('scroll',instance.update,passive$1);});}if(resize){window.removeEventListener('resize',instance.update,passive$1);}};}// eslint-disable-next-line import/no-unused-modules
var eventListeners$1 = {name:'eventListeners',enabled:true,phase:'write',fn:function fn(){},effect:effect$4,data:{}};

function popperOffsets$2(_ref){var state=_ref.state,name=_ref.name;// Offsets are the actual position the popper needs to have to be
// properly positioned near its reference element
// This is the most basic placement, and will be adjusted by
// the modifiers in the next step
state.modifiersData[name]=computeOffsets$1({reference:state.rects.reference,element:state.rects.popper,strategy:'absolute',placement:state.placement});}// eslint-disable-next-line import/no-unused-modules
var popperOffsets$3 = {name:'popperOffsets',enabled:true,phase:'read',fn:popperOffsets$2,data:{}};

var unsetSides$1={top:'auto',right:'auto',bottom:'auto',left:'auto'};// Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR$1(_ref){var x=_ref.x,y=_ref.y;var win=window;var dpr=win.devicePixelRatio||1;return {x:round$1(x*dpr)/dpr||0,y:round$1(y*dpr)/dpr||0};}function mapToStyles$1(_ref2){var _Object$assign2;var popper=_ref2.popper,popperRect=_ref2.popperRect,placement=_ref2.placement,variation=_ref2.variation,offsets=_ref2.offsets,position=_ref2.position,gpuAcceleration=_ref2.gpuAcceleration,adaptive=_ref2.adaptive,roundOffsets=_ref2.roundOffsets,isFixed=_ref2.isFixed;var _ref3=roundOffsets===true?roundOffsetsByDPR$1(offsets):typeof roundOffsets==='function'?roundOffsets(offsets):offsets,_ref3$x=_ref3.x,x=_ref3$x===void 0?0:_ref3$x,_ref3$y=_ref3.y,y=_ref3$y===void 0?0:_ref3$y;var hasX=offsets.hasOwnProperty('x');var hasY=offsets.hasOwnProperty('y');var sideX=left$1;var sideY=top$1;var win=window;if(adaptive){var offsetParent=getOffsetParent$1(popper);var heightProp='clientHeight';var widthProp='clientWidth';if(offsetParent===getWindow$1(popper)){offsetParent=getDocumentElement$1(popper);if(getComputedStyle$2(offsetParent).position!=='static'&&position==='absolute'){heightProp='scrollHeight';widthProp='scrollWidth';}}// $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
offsetParent=offsetParent;if(placement===top$1||(placement===left$1||placement===right$1)&&variation===end$1){sideY=bottom$1;var offsetY=isFixed&&win.visualViewport?win.visualViewport.height:// $FlowFixMe[prop-missing]
offsetParent[heightProp];y-=offsetY-popperRect.height;y*=gpuAcceleration?1:-1;}if(placement===left$1||(placement===top$1||placement===bottom$1)&&variation===end$1){sideX=right$1;var offsetX=isFixed&&win.visualViewport?win.visualViewport.width:// $FlowFixMe[prop-missing]
offsetParent[widthProp];x-=offsetX-popperRect.width;x*=gpuAcceleration?1:-1;}}var commonStyles=Object.assign({position:position},adaptive&&unsetSides$1);if(gpuAcceleration){var _Object$assign;return Object.assign({},commonStyles,(_Object$assign={},_Object$assign[sideY]=hasY?'0':'',_Object$assign[sideX]=hasX?'0':'',_Object$assign.transform=(win.devicePixelRatio||1)<=1?"translate("+x+"px, "+y+"px)":"translate3d("+x+"px, "+y+"px, 0)",_Object$assign));}return Object.assign({},commonStyles,(_Object$assign2={},_Object$assign2[sideY]=hasY?y+"px":'',_Object$assign2[sideX]=hasX?x+"px":'',_Object$assign2.transform='',_Object$assign2));}function computeStyles$2(_ref4){var state=_ref4.state,options=_ref4.options;var _options$gpuAccelerat=options.gpuAcceleration,gpuAcceleration=_options$gpuAccelerat===void 0?true:_options$gpuAccelerat,_options$adaptive=options.adaptive,adaptive=_options$adaptive===void 0?true:_options$adaptive,_options$roundOffsets=options.roundOffsets,roundOffsets=_options$roundOffsets===void 0?true:_options$roundOffsets;if(false){var transitionProperty=getComputedStyle$2(state.elements.popper).transitionProperty||'';if(adaptive&&['transform','top','right','bottom','left'].some(function(property){return transitionProperty.indexOf(property)>=0;})){console.warn(['Popper: Detected CSS transitions on at least one of the following','CSS properties: "transform", "top", "right", "bottom", "left".','\n\n','Disable the "computeStyles" modifier\'s `adaptive` option to allow','for smooth transitions, or remove these properties from the CSS','transition declaration on the popper element if only transitioning','opacity or background-color for example.','\n\n','We recommend using the popper element as a wrapper around an inner','element that can have any CSS property transitioned for animations.'].join(' '));}}var commonStyles={placement:getBasePlacement$1(state.placement),variation:getVariation$1(state.placement),popper:state.elements.popper,popperRect:state.rects.popper,gpuAcceleration:gpuAcceleration,isFixed:state.options.strategy==='fixed'};if(state.modifiersData.popperOffsets!=null){state.styles.popper=Object.assign({},state.styles.popper,mapToStyles$1(Object.assign({},commonStyles,{offsets:state.modifiersData.popperOffsets,position:state.options.strategy,adaptive:adaptive,roundOffsets:roundOffsets})));}if(state.modifiersData.arrow!=null){state.styles.arrow=Object.assign({},state.styles.arrow,mapToStyles$1(Object.assign({},commonStyles,{offsets:state.modifiersData.arrow,position:'absolute',adaptive:false,roundOffsets:roundOffsets})));}state.attributes.popper=Object.assign({},state.attributes.popper,{'data-popper-placement':state.placement});}// eslint-disable-next-line import/no-unused-modules
var computeStyles$3 = {name:'computeStyles',enabled:true,phase:'beforeWrite',fn:computeStyles$2,data:{}};

// and applies them to the HTMLElements such as popper and arrow
function applyStyles$2(_ref){var state=_ref.state;Object.keys(state.elements).forEach(function(name){var style=state.styles[name]||{};var attributes=state.attributes[name]||{};var element=state.elements[name];// arrow is optional + virtual elements
if(!isHTMLElement$1(element)||!getNodeName$1(element)){return;}// Flow doesn't support to extend this property, but it's the most
// effective way to apply styles to an HTMLElement
// $FlowFixMe[cannot-write]
Object.assign(element.style,style);Object.keys(attributes).forEach(function(name){var value=attributes[name];if(value===false){element.removeAttribute(name);}else {element.setAttribute(name,value===true?'':value);}});});}function effect$3(_ref2){var state=_ref2.state;var initialStyles={popper:{position:state.options.strategy,left:'0',top:'0',margin:'0'},arrow:{position:'absolute'},reference:{}};Object.assign(state.elements.popper.style,initialStyles.popper);state.styles=initialStyles;if(state.elements.arrow){Object.assign(state.elements.arrow.style,initialStyles.arrow);}return function(){Object.keys(state.elements).forEach(function(name){var element=state.elements[name];var attributes=state.attributes[name]||{};var styleProperties=Object.keys(state.styles.hasOwnProperty(name)?state.styles[name]:initialStyles[name]);// Set all values to an empty string to unset them
var style=styleProperties.reduce(function(style,property){style[property]='';return style;},{});// arrow is optional + virtual elements
if(!isHTMLElement$1(element)||!getNodeName$1(element)){return;}Object.assign(element.style,style);Object.keys(attributes).forEach(function(attribute){element.removeAttribute(attribute);});});};}// eslint-disable-next-line import/no-unused-modules
var applyStyles$3 = {name:'applyStyles',enabled:true,phase:'write',fn:applyStyles$2,effect:effect$3,requires:['computeStyles']};

var defaultModifiers$2=[eventListeners$1,popperOffsets$3,computeStyles$3,applyStyles$3];var createPopper$4=/*#__PURE__*/popperGenerator$1({defaultModifiers:defaultModifiers$2});// eslint-disable-next-line import/no-unused-modules

var top='top';var bottom='bottom';var right='right';var left='left';var auto='auto';var basePlacements=[top,bottom,right,left];var start='start';var end='end';var clippingParents='clippingParents';var viewport='viewport';var popper='popper';var reference='reference';var variationPlacements=/*#__PURE__*/basePlacements.reduce(function(acc,placement){return acc.concat([placement+"-"+start,placement+"-"+end]);},[]);var placements=/*#__PURE__*/[].concat(basePlacements,[auto]).reduce(function(acc,placement){return acc.concat([placement,placement+"-"+start,placement+"-"+end]);},[]);// modifiers that need to read the DOM
var beforeRead='beforeRead';var read='read';var afterRead='afterRead';// pure-logic modifiers
var beforeMain='beforeMain';var main='main';var afterMain='afterMain';// modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite='beforeWrite';var write='write';var afterWrite='afterWrite';var modifierPhases=[beforeRead,read,afterRead,beforeMain,main,afterMain,beforeWrite,write,afterWrite];

function getNodeName(element){return element?(element.nodeName||'').toLowerCase():null;}

function getWindow(node){if(node==null){return window;}if(node.toString()!=='[object Window]'){var ownerDocument=node.ownerDocument;return ownerDocument?ownerDocument.defaultView||window:window;}return node;}

function isElement(node){var OwnElement=getWindow(node).Element;return node instanceof OwnElement||node instanceof Element;}function isHTMLElement(node){var OwnElement=getWindow(node).HTMLElement;return node instanceof OwnElement||node instanceof HTMLElement;}function isShadowRoot(node){// IE 11 has no ShadowRoot
if(typeof ShadowRoot==='undefined'){return false;}var OwnElement=getWindow(node).ShadowRoot;return node instanceof OwnElement||node instanceof ShadowRoot;}

// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref){var state=_ref.state;Object.keys(state.elements).forEach(function(name){var style=state.styles[name]||{};var attributes=state.attributes[name]||{};var element=state.elements[name];// arrow is optional + virtual elements
if(!isHTMLElement(element)||!getNodeName(element)){return;}// Flow doesn't support to extend this property, but it's the most
// effective way to apply styles to an HTMLElement
// $FlowFixMe[cannot-write]
Object.assign(element.style,style);Object.keys(attributes).forEach(function(name){var value=attributes[name];if(value===false){element.removeAttribute(name);}else {element.setAttribute(name,value===true?'':value);}});});}function effect$2(_ref2){var state=_ref2.state;var initialStyles={popper:{position:state.options.strategy,left:'0',top:'0',margin:'0'},arrow:{position:'absolute'},reference:{}};Object.assign(state.elements.popper.style,initialStyles.popper);state.styles=initialStyles;if(state.elements.arrow){Object.assign(state.elements.arrow.style,initialStyles.arrow);}return function(){Object.keys(state.elements).forEach(function(name){var element=state.elements[name];var attributes=state.attributes[name]||{};var styleProperties=Object.keys(state.styles.hasOwnProperty(name)?state.styles[name]:initialStyles[name]);// Set all values to an empty string to unset them
var style=styleProperties.reduce(function(style,property){style[property]='';return style;},{});// arrow is optional + virtual elements
if(!isHTMLElement(element)||!getNodeName(element)){return;}Object.assign(element.style,style);Object.keys(attributes).forEach(function(attribute){element.removeAttribute(attribute);});});};}// eslint-disable-next-line import/no-unused-modules
var applyStyles$1 = {name:'applyStyles',enabled:true,phase:'write',fn:applyStyles,effect:effect$2,requires:['computeStyles']};

function getBasePlacement(placement){return placement.split('-')[0];}

var max=Math.max;var min=Math.min;var round=Math.round;

function getBoundingClientRect(element,includeScale){if(includeScale===void 0){includeScale=false;}var rect=element.getBoundingClientRect();var scaleX=1;var scaleY=1;if(isHTMLElement(element)&&includeScale){var offsetHeight=element.offsetHeight;var offsetWidth=element.offsetWidth;// Do not attempt to divide by 0, otherwise we get `Infinity` as scale
// Fallback to 1 in case both values are `0`
if(offsetWidth>0){scaleX=round(rect.width)/offsetWidth||1;}if(offsetHeight>0){scaleY=round(rect.height)/offsetHeight||1;}}return {width:rect.width/scaleX,height:rect.height/scaleY,top:rect.top/scaleY,right:rect.right/scaleX,bottom:rect.bottom/scaleY,left:rect.left/scaleX,x:rect.left/scaleX,y:rect.top/scaleY};}

// means it doesn't take into account transforms.
function getLayoutRect(element){var clientRect=getBoundingClientRect(element);// Use the clientRect sizes if it's not been transformed.
// Fixes https://github.com/popperjs/popper-core/issues/1223
var width=element.offsetWidth;var height=element.offsetHeight;if(Math.abs(clientRect.width-width)<=1){width=clientRect.width;}if(Math.abs(clientRect.height-height)<=1){height=clientRect.height;}return {x:element.offsetLeft,y:element.offsetTop,width:width,height:height};}

function contains(parent,child){var rootNode=child.getRootNode&&child.getRootNode();// First, attempt with faster native method
if(parent.contains(child)){return true;}// then fallback to custom implementation with Shadow DOM support
else if(rootNode&&isShadowRoot(rootNode)){var next=child;do{if(next&&parent.isSameNode(next)){return true;}// $FlowFixMe[prop-missing]: need a better way to handle this...
next=next.parentNode||next.host;}while(next);}// Give up, the result is false
return false;}

function getComputedStyle$1(element){return getWindow(element).getComputedStyle(element);}

function isTableElement(element){return ['table','td','th'].indexOf(getNodeName(element))>=0;}

function getDocumentElement(element){// $FlowFixMe[incompatible-return]: assume body is always available
return ((isElement(element)?element.ownerDocument:// $FlowFixMe[prop-missing]
element.document)||window.document).documentElement;}

function getParentNode(element){if(getNodeName(element)==='html'){return element;}return(// this is a quicker (but less type safe) way to save quite some bytes from the bundle
// $FlowFixMe[incompatible-return]
// $FlowFixMe[prop-missing]
element.assignedSlot||// step into the shadow DOM of the parent of a slotted node
element.parentNode||(// DOM Element detected
isShadowRoot(element)?element.host:null)||// ShadowRoot detected
// $FlowFixMe[incompatible-call]: HTMLElement is a Node
getDocumentElement(element)// fallback
);}

function getTrueOffsetParent(element){if(!isHTMLElement(element)||// https://github.com/popperjs/popper-core/issues/837
getComputedStyle$1(element).position==='fixed'){return null;}return element.offsetParent;}// `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element){var isFirefox=navigator.userAgent.toLowerCase().indexOf('firefox')!==-1;var isIE=navigator.userAgent.indexOf('Trident')!==-1;if(isIE&&isHTMLElement(element)){// In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
var elementCss=getComputedStyle$1(element);if(elementCss.position==='fixed'){return null;}}var currentNode=getParentNode(element);while(isHTMLElement(currentNode)&&['html','body'].indexOf(getNodeName(currentNode))<0){var css=getComputedStyle$1(currentNode);// This is non-exhaustive but covers the most common CSS properties that
// create a containing block.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
if(css.transform!=='none'||css.perspective!=='none'||css.contain==='paint'||['transform','perspective'].indexOf(css.willChange)!==-1||isFirefox&&css.willChange==='filter'||isFirefox&&css.filter&&css.filter!=='none'){return currentNode;}else {currentNode=currentNode.parentNode;}}return null;}// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element){var window=getWindow(element);var offsetParent=getTrueOffsetParent(element);while(offsetParent&&isTableElement(offsetParent)&&getComputedStyle$1(offsetParent).position==='static'){offsetParent=getTrueOffsetParent(offsetParent);}if(offsetParent&&(getNodeName(offsetParent)==='html'||getNodeName(offsetParent)==='body'&&getComputedStyle$1(offsetParent).position==='static')){return window;}return offsetParent||getContainingBlock(element)||window;}

function getMainAxisFromPlacement(placement){return ['top','bottom'].indexOf(placement)>=0?'x':'y';}

function within(min$1,value,max$1){return max(min$1,min(value,max$1));}function withinMaxClamp(min,value,max){var v=within(min,value,max);return v>max?max:v;}

function getFreshSideObject(){return {top:0,right:0,bottom:0,left:0};}

function mergePaddingObject(paddingObject){return Object.assign({},getFreshSideObject(),paddingObject);}

function expandToHashMap(value,keys){return keys.reduce(function(hashMap,key){hashMap[key]=value;return hashMap;},{});}

var toPaddingObject=function toPaddingObject(padding,state){padding=typeof padding==='function'?padding(Object.assign({},state.rects,{placement:state.placement})):padding;return mergePaddingObject(typeof padding!=='number'?padding:expandToHashMap(padding,basePlacements));};function arrow(_ref){var _state$modifiersData$;var state=_ref.state,name=_ref.name,options=_ref.options;var arrowElement=state.elements.arrow;var popperOffsets=state.modifiersData.popperOffsets;var basePlacement=getBasePlacement(state.placement);var axis=getMainAxisFromPlacement(basePlacement);var isVertical=[left,right].indexOf(basePlacement)>=0;var len=isVertical?'height':'width';if(!arrowElement||!popperOffsets){return;}var paddingObject=toPaddingObject(options.padding,state);var arrowRect=getLayoutRect(arrowElement);var minProp=axis==='y'?top:left;var maxProp=axis==='y'?bottom:right;var endDiff=state.rects.reference[len]+state.rects.reference[axis]-popperOffsets[axis]-state.rects.popper[len];var startDiff=popperOffsets[axis]-state.rects.reference[axis];var arrowOffsetParent=getOffsetParent(arrowElement);var clientSize=arrowOffsetParent?axis==='y'?arrowOffsetParent.clientHeight||0:arrowOffsetParent.clientWidth||0:0;var centerToReference=endDiff/2-startDiff/2;// Make sure the arrow doesn't overflow the popper if the center point is
// outside of the popper bounds
var min=paddingObject[minProp];var max=clientSize-arrowRect[len]-paddingObject[maxProp];var center=clientSize/2-arrowRect[len]/2+centerToReference;var offset=within(min,center,max);// Prevents breaking syntax highlighting...
var axisProp=axis;state.modifiersData[name]=(_state$modifiersData$={},_state$modifiersData$[axisProp]=offset,_state$modifiersData$.centerOffset=offset-center,_state$modifiersData$);}function effect$1(_ref2){var state=_ref2.state,options=_ref2.options;var _options$element=options.element,arrowElement=_options$element===void 0?'[data-popper-arrow]':_options$element;if(arrowElement==null){return;}// CSS selector
if(typeof arrowElement==='string'){arrowElement=state.elements.popper.querySelector(arrowElement);if(!arrowElement){return;}}if(process.env.NODE_ENV!=="production"){if(!isHTMLElement(arrowElement)){console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).','To use an SVG arrow, wrap it in an HTMLElement that will be used as','the arrow.'].join(' '));}}if(!contains(state.elements.popper,arrowElement)){if(process.env.NODE_ENV!=="production"){console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper','element.'].join(' '));}return;}state.elements.arrow=arrowElement;}// eslint-disable-next-line import/no-unused-modules
var arrow$1 = {name:'arrow',enabled:true,phase:'main',fn:arrow,effect:effect$1,requires:['popperOffsets'],requiresIfExists:['preventOverflow']};

function getVariation(placement){return placement.split('-')[1];}

var unsetSides={top:'auto',right:'auto',bottom:'auto',left:'auto'};// Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref){var x=_ref.x,y=_ref.y;var win=window;var dpr=win.devicePixelRatio||1;return {x:round(x*dpr)/dpr||0,y:round(y*dpr)/dpr||0};}function mapToStyles(_ref2){var _Object$assign2;var popper=_ref2.popper,popperRect=_ref2.popperRect,placement=_ref2.placement,variation=_ref2.variation,offsets=_ref2.offsets,position=_ref2.position,gpuAcceleration=_ref2.gpuAcceleration,adaptive=_ref2.adaptive,roundOffsets=_ref2.roundOffsets,isFixed=_ref2.isFixed;var _ref3=roundOffsets===true?roundOffsetsByDPR(offsets):typeof roundOffsets==='function'?roundOffsets(offsets):offsets,_ref3$x=_ref3.x,x=_ref3$x===void 0?0:_ref3$x,_ref3$y=_ref3.y,y=_ref3$y===void 0?0:_ref3$y;var hasX=offsets.hasOwnProperty('x');var hasY=offsets.hasOwnProperty('y');var sideX=left;var sideY=top;var win=window;if(adaptive){var offsetParent=getOffsetParent(popper);var heightProp='clientHeight';var widthProp='clientWidth';if(offsetParent===getWindow(popper)){offsetParent=getDocumentElement(popper);if(getComputedStyle$1(offsetParent).position!=='static'&&position==='absolute'){heightProp='scrollHeight';widthProp='scrollWidth';}}// $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
offsetParent=offsetParent;if(placement===top||(placement===left||placement===right)&&variation===end){sideY=bottom;var offsetY=isFixed&&win.visualViewport?win.visualViewport.height:// $FlowFixMe[prop-missing]
offsetParent[heightProp];y-=offsetY-popperRect.height;y*=gpuAcceleration?1:-1;}if(placement===left||(placement===top||placement===bottom)&&variation===end){sideX=right;var offsetX=isFixed&&win.visualViewport?win.visualViewport.width:// $FlowFixMe[prop-missing]
offsetParent[widthProp];x-=offsetX-popperRect.width;x*=gpuAcceleration?1:-1;}}var commonStyles=Object.assign({position:position},adaptive&&unsetSides);if(gpuAcceleration){var _Object$assign;return Object.assign({},commonStyles,(_Object$assign={},_Object$assign[sideY]=hasY?'0':'',_Object$assign[sideX]=hasX?'0':'',_Object$assign.transform=(win.devicePixelRatio||1)<=1?"translate("+x+"px, "+y+"px)":"translate3d("+x+"px, "+y+"px, 0)",_Object$assign));}return Object.assign({},commonStyles,(_Object$assign2={},_Object$assign2[sideY]=hasY?y+"px":'',_Object$assign2[sideX]=hasX?x+"px":'',_Object$assign2.transform='',_Object$assign2));}function computeStyles(_ref4){var state=_ref4.state,options=_ref4.options;var _options$gpuAccelerat=options.gpuAcceleration,gpuAcceleration=_options$gpuAccelerat===void 0?true:_options$gpuAccelerat,_options$adaptive=options.adaptive,adaptive=_options$adaptive===void 0?true:_options$adaptive,_options$roundOffsets=options.roundOffsets,roundOffsets=_options$roundOffsets===void 0?true:_options$roundOffsets;if(process.env.NODE_ENV!=="production"){var transitionProperty=getComputedStyle$1(state.elements.popper).transitionProperty||'';if(adaptive&&['transform','top','right','bottom','left'].some(function(property){return transitionProperty.indexOf(property)>=0;})){console.warn(['Popper: Detected CSS transitions on at least one of the following','CSS properties: "transform", "top", "right", "bottom", "left".','\n\n','Disable the "computeStyles" modifier\'s `adaptive` option to allow','for smooth transitions, or remove these properties from the CSS','transition declaration on the popper element if only transitioning','opacity or background-color for example.','\n\n','We recommend using the popper element as a wrapper around an inner','element that can have any CSS property transitioned for animations.'].join(' '));}}var commonStyles={placement:getBasePlacement(state.placement),variation:getVariation(state.placement),popper:state.elements.popper,popperRect:state.rects.popper,gpuAcceleration:gpuAcceleration,isFixed:state.options.strategy==='fixed'};if(state.modifiersData.popperOffsets!=null){state.styles.popper=Object.assign({},state.styles.popper,mapToStyles(Object.assign({},commonStyles,{offsets:state.modifiersData.popperOffsets,position:state.options.strategy,adaptive:adaptive,roundOffsets:roundOffsets})));}if(state.modifiersData.arrow!=null){state.styles.arrow=Object.assign({},state.styles.arrow,mapToStyles(Object.assign({},commonStyles,{offsets:state.modifiersData.arrow,position:'absolute',adaptive:false,roundOffsets:roundOffsets})));}state.attributes.popper=Object.assign({},state.attributes.popper,{'data-popper-placement':state.placement});}// eslint-disable-next-line import/no-unused-modules
var computeStyles$1 = {name:'computeStyles',enabled:true,phase:'beforeWrite',fn:computeStyles,data:{}};

var passive={passive:true};function effect(_ref){var state=_ref.state,instance=_ref.instance,options=_ref.options;var _options$scroll=options.scroll,scroll=_options$scroll===void 0?true:_options$scroll,_options$resize=options.resize,resize=_options$resize===void 0?true:_options$resize;var window=getWindow(state.elements.popper);var scrollParents=[].concat(state.scrollParents.reference,state.scrollParents.popper);if(scroll){scrollParents.forEach(function(scrollParent){scrollParent.addEventListener('scroll',instance.update,passive);});}if(resize){window.addEventListener('resize',instance.update,passive);}return function(){if(scroll){scrollParents.forEach(function(scrollParent){scrollParent.removeEventListener('scroll',instance.update,passive);});}if(resize){window.removeEventListener('resize',instance.update,passive);}};}// eslint-disable-next-line import/no-unused-modules
var eventListeners = {name:'eventListeners',enabled:true,phase:'write',fn:function fn(){},effect:effect,data:{}};

var hash$1={left:'right',right:'left',bottom:'top',top:'bottom'};function getOppositePlacement(placement){return placement.replace(/left|right|bottom|top/g,function(matched){return hash$1[matched];});}

var hash={start:'end',end:'start'};function getOppositeVariationPlacement(placement){return placement.replace(/start|end/g,function(matched){return hash[matched];});}

function getWindowScroll(node){var win=getWindow(node);var scrollLeft=win.pageXOffset;var scrollTop=win.pageYOffset;return {scrollLeft:scrollLeft,scrollTop:scrollTop};}

function getWindowScrollBarX(element){// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
// Popper 1 is broken in this case and never had a bug report so let's assume
// it's not an issue. I don't think anyone ever specifies width on <html>
// anyway.
// Browsers where the left scrollbar doesn't cause an issue report `0` for
// this (e.g. Edge 2019, IE11, Safari)
return getBoundingClientRect(getDocumentElement(element)).left+getWindowScroll(element).scrollLeft;}

function getViewportRect(element){var win=getWindow(element);var html=getDocumentElement(element);var visualViewport=win.visualViewport;var width=html.clientWidth;var height=html.clientHeight;var x=0;var y=0;// NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
// can be obscured underneath it.
// Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
// if it isn't open, so if this isn't available, the popper will be detected
// to overflow the bottom of the screen too early.
if(visualViewport){width=visualViewport.width;height=visualViewport.height;// Uses Layout Viewport (like Chrome; Safari does not currently)
// In Chrome, it returns a value very close to 0 (+/-) but contains rounding
// errors due to floating point numbers, so we need to check precision.
// Safari returns a number <= 0, usually < -1 when pinch-zoomed
// Feature detection fails in mobile emulation mode in Chrome.
// Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
// 0.001
// Fallback here: "Not Safari" userAgent
if(!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){x=visualViewport.offsetLeft;y=visualViewport.offsetTop;}}return {width:width,height:height,x:x+getWindowScrollBarX(element),y:y};}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function getDocumentRect(element){var _element$ownerDocumen;var html=getDocumentElement(element);var winScroll=getWindowScroll(element);var body=(_element$ownerDocumen=element.ownerDocument)==null?void 0:_element$ownerDocumen.body;var width=max(html.scrollWidth,html.clientWidth,body?body.scrollWidth:0,body?body.clientWidth:0);var height=max(html.scrollHeight,html.clientHeight,body?body.scrollHeight:0,body?body.clientHeight:0);var x=-winScroll.scrollLeft+getWindowScrollBarX(element);var y=-winScroll.scrollTop;if(getComputedStyle$1(body||html).direction==='rtl'){x+=max(html.clientWidth,body?body.clientWidth:0)-width;}return {width:width,height:height,x:x,y:y};}

function isScrollParent(element){// Firefox wants us to check `-x` and `-y` variations as well
var _getComputedStyle=getComputedStyle$1(element),overflow=_getComputedStyle.overflow,overflowX=_getComputedStyle.overflowX,overflowY=_getComputedStyle.overflowY;return /auto|scroll|overlay|hidden/.test(overflow+overflowY+overflowX);}

function getScrollParent(node){if(['html','body','#document'].indexOf(getNodeName(node))>=0){// $FlowFixMe[incompatible-return]: assume body is always available
return node.ownerDocument.body;}if(isHTMLElement(node)&&isScrollParent(node)){return node;}return getScrollParent(getParentNode(node));}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/function listScrollParents(element,list){var _element$ownerDocumen;if(list===void 0){list=[];}var scrollParent=getScrollParent(element);var isBody=scrollParent===((_element$ownerDocumen=element.ownerDocument)==null?void 0:_element$ownerDocumen.body);var win=getWindow(scrollParent);var target=isBody?[win].concat(win.visualViewport||[],isScrollParent(scrollParent)?scrollParent:[]):scrollParent;var updatedList=list.concat(target);return isBody?updatedList:// $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
updatedList.concat(listScrollParents(getParentNode(target)));}

function rectToClientRect(rect){return Object.assign({},rect,{left:rect.x,top:rect.y,right:rect.x+rect.width,bottom:rect.y+rect.height});}

function getInnerBoundingClientRect(element){var rect=getBoundingClientRect(element);rect.top=rect.top+element.clientTop;rect.left=rect.left+element.clientLeft;rect.bottom=rect.top+element.clientHeight;rect.right=rect.left+element.clientWidth;rect.width=element.clientWidth;rect.height=element.clientHeight;rect.x=rect.left;rect.y=rect.top;return rect;}function getClientRectFromMixedType(element,clippingParent){return clippingParent===viewport?rectToClientRect(getViewportRect(element)):isElement(clippingParent)?getInnerBoundingClientRect(clippingParent):rectToClientRect(getDocumentRect(getDocumentElement(element)));}// A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element){var clippingParents=listScrollParents(getParentNode(element));var canEscapeClipping=['absolute','fixed'].indexOf(getComputedStyle$1(element).position)>=0;var clipperElement=canEscapeClipping&&isHTMLElement(element)?getOffsetParent(element):element;if(!isElement(clipperElement)){return [];}// $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
return clippingParents.filter(function(clippingParent){return isElement(clippingParent)&&contains(clippingParent,clipperElement)&&getNodeName(clippingParent)!=='body'&&(canEscapeClipping?getComputedStyle$1(clippingParent).position!=='static':true);});}// Gets the maximum area that the element is visible in due to any number of
// clipping parents
function getClippingRect(element,boundary,rootBoundary){var mainClippingParents=boundary==='clippingParents'?getClippingParents(element):[].concat(boundary);var clippingParents=[].concat(mainClippingParents,[rootBoundary]);var firstClippingParent=clippingParents[0];var clippingRect=clippingParents.reduce(function(accRect,clippingParent){var rect=getClientRectFromMixedType(element,clippingParent);accRect.top=max(rect.top,accRect.top);accRect.right=min(rect.right,accRect.right);accRect.bottom=min(rect.bottom,accRect.bottom);accRect.left=max(rect.left,accRect.left);return accRect;},getClientRectFromMixedType(element,firstClippingParent));clippingRect.width=clippingRect.right-clippingRect.left;clippingRect.height=clippingRect.bottom-clippingRect.top;clippingRect.x=clippingRect.left;clippingRect.y=clippingRect.top;return clippingRect;}

function computeOffsets(_ref){var reference=_ref.reference,element=_ref.element,placement=_ref.placement;var basePlacement=placement?getBasePlacement(placement):null;var variation=placement?getVariation(placement):null;var commonX=reference.x+reference.width/2-element.width/2;var commonY=reference.y+reference.height/2-element.height/2;var offsets;switch(basePlacement){case top:offsets={x:commonX,y:reference.y-element.height};break;case bottom:offsets={x:commonX,y:reference.y+reference.height};break;case right:offsets={x:reference.x+reference.width,y:commonY};break;case left:offsets={x:reference.x-element.width,y:commonY};break;default:offsets={x:reference.x,y:reference.y};}var mainAxis=basePlacement?getMainAxisFromPlacement(basePlacement):null;if(mainAxis!=null){var len=mainAxis==='y'?'height':'width';switch(variation){case start:offsets[mainAxis]=offsets[mainAxis]-(reference[len]/2-element[len]/2);break;case end:offsets[mainAxis]=offsets[mainAxis]+(reference[len]/2-element[len]/2);break;default:}}return offsets;}

function detectOverflow(state,options){if(options===void 0){options={};}var _options=options,_options$placement=_options.placement,placement=_options$placement===void 0?state.placement:_options$placement,_options$boundary=_options.boundary,boundary=_options$boundary===void 0?clippingParents:_options$boundary,_options$rootBoundary=_options.rootBoundary,rootBoundary=_options$rootBoundary===void 0?viewport:_options$rootBoundary,_options$elementConte=_options.elementContext,elementContext=_options$elementConte===void 0?popper:_options$elementConte,_options$altBoundary=_options.altBoundary,altBoundary=_options$altBoundary===void 0?false:_options$altBoundary,_options$padding=_options.padding,padding=_options$padding===void 0?0:_options$padding;var paddingObject=mergePaddingObject(typeof padding!=='number'?padding:expandToHashMap(padding,basePlacements));var altContext=elementContext===popper?reference:popper;var popperRect=state.rects.popper;var element=state.elements[altBoundary?altContext:elementContext];var clippingClientRect=getClippingRect(isElement(element)?element:element.contextElement||getDocumentElement(state.elements.popper),boundary,rootBoundary);var referenceClientRect=getBoundingClientRect(state.elements.reference);var popperOffsets=computeOffsets({reference:referenceClientRect,element:popperRect,strategy:'absolute',placement:placement});var popperClientRect=rectToClientRect(Object.assign({},popperRect,popperOffsets));var elementClientRect=elementContext===popper?popperClientRect:referenceClientRect;// positive = overflowing the clipping rect
// 0 or negative = within the clipping rect
var overflowOffsets={top:clippingClientRect.top-elementClientRect.top+paddingObject.top,bottom:elementClientRect.bottom-clippingClientRect.bottom+paddingObject.bottom,left:clippingClientRect.left-elementClientRect.left+paddingObject.left,right:elementClientRect.right-clippingClientRect.right+paddingObject.right};var offsetData=state.modifiersData.offset;// Offsets can be applied only to the popper element
if(elementContext===popper&&offsetData){var offset=offsetData[placement];Object.keys(overflowOffsets).forEach(function(key){var multiply=[right,bottom].indexOf(key)>=0?1:-1;var axis=[top,bottom].indexOf(key)>=0?'y':'x';overflowOffsets[key]+=offset[axis]*multiply;});}return overflowOffsets;}

function computeAutoPlacement(state,options){if(options===void 0){options={};}var _options=options,placement=_options.placement,boundary=_options.boundary,rootBoundary=_options.rootBoundary,padding=_options.padding,flipVariations=_options.flipVariations,_options$allowedAutoP=_options.allowedAutoPlacements,allowedAutoPlacements=_options$allowedAutoP===void 0?placements:_options$allowedAutoP;var variation=getVariation(placement);var placements$1=variation?flipVariations?variationPlacements:variationPlacements.filter(function(placement){return getVariation(placement)===variation;}):basePlacements;var allowedPlacements=placements$1.filter(function(placement){return allowedAutoPlacements.indexOf(placement)>=0;});if(allowedPlacements.length===0){allowedPlacements=placements$1;if(process.env.NODE_ENV!=="production"){console.error(['Popper: The `allowedAutoPlacements` option did not allow any','placements. Ensure the `placement` option matches the variation','of the allowed placements.','For example, "auto" cannot be used to allow "bottom-start".','Use "auto-start" instead.'].join(' '));}}// $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
var overflows=allowedPlacements.reduce(function(acc,placement){acc[placement]=detectOverflow(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,padding:padding})[getBasePlacement(placement)];return acc;},{});return Object.keys(overflows).sort(function(a,b){return overflows[a]-overflows[b];});}

function getExpandedFallbackPlacements(placement){if(getBasePlacement(placement)===auto){return [];}var oppositePlacement=getOppositePlacement(placement);return [getOppositeVariationPlacement(placement),oppositePlacement,getOppositeVariationPlacement(oppositePlacement)];}function flip(_ref){var state=_ref.state,options=_ref.options,name=_ref.name;if(state.modifiersData[name]._skip){return;}var _options$mainAxis=options.mainAxis,checkMainAxis=_options$mainAxis===void 0?true:_options$mainAxis,_options$altAxis=options.altAxis,checkAltAxis=_options$altAxis===void 0?true:_options$altAxis,specifiedFallbackPlacements=options.fallbackPlacements,padding=options.padding,boundary=options.boundary,rootBoundary=options.rootBoundary,altBoundary=options.altBoundary,_options$flipVariatio=options.flipVariations,flipVariations=_options$flipVariatio===void 0?true:_options$flipVariatio,allowedAutoPlacements=options.allowedAutoPlacements;var preferredPlacement=state.options.placement;var basePlacement=getBasePlacement(preferredPlacement);var isBasePlacement=basePlacement===preferredPlacement;var fallbackPlacements=specifiedFallbackPlacements||(isBasePlacement||!flipVariations?[getOppositePlacement(preferredPlacement)]:getExpandedFallbackPlacements(preferredPlacement));var placements=[preferredPlacement].concat(fallbackPlacements).reduce(function(acc,placement){return acc.concat(getBasePlacement(placement)===auto?computeAutoPlacement(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,padding:padding,flipVariations:flipVariations,allowedAutoPlacements:allowedAutoPlacements}):placement);},[]);var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var checksMap=new Map();var makeFallbackChecks=true;var firstFittingPlacement=placements[0];for(var i=0;i<placements.length;i++){var placement=placements[i];var _basePlacement=getBasePlacement(placement);var isStartVariation=getVariation(placement)===start;var isVertical=[top,bottom].indexOf(_basePlacement)>=0;var len=isVertical?'width':'height';var overflow=detectOverflow(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,altBoundary:altBoundary,padding:padding});var mainVariationSide=isVertical?isStartVariation?right:left:isStartVariation?bottom:top;if(referenceRect[len]>popperRect[len]){mainVariationSide=getOppositePlacement(mainVariationSide);}var altVariationSide=getOppositePlacement(mainVariationSide);var checks=[];if(checkMainAxis){checks.push(overflow[_basePlacement]<=0);}if(checkAltAxis){checks.push(overflow[mainVariationSide]<=0,overflow[altVariationSide]<=0);}if(checks.every(function(check){return check;})){firstFittingPlacement=placement;makeFallbackChecks=false;break;}checksMap.set(placement,checks);}if(makeFallbackChecks){// `2` may be desired in some cases – research later
var numberOfChecks=flipVariations?3:1;var _loop=function _loop(_i){var fittingPlacement=placements.find(function(placement){var checks=checksMap.get(placement);if(checks){return checks.slice(0,_i).every(function(check){return check;});}});if(fittingPlacement){firstFittingPlacement=fittingPlacement;return "break";}};for(var _i=numberOfChecks;_i>0;_i--){var _ret=_loop(_i);if(_ret==="break")break;}}if(state.placement!==firstFittingPlacement){state.modifiersData[name]._skip=true;state.placement=firstFittingPlacement;state.reset=true;}}// eslint-disable-next-line import/no-unused-modules
var flip$1 = {name:'flip',enabled:true,phase:'main',fn:flip,requiresIfExists:['offset'],data:{_skip:false}};

function getSideOffsets(overflow,rect,preventedOffsets){if(preventedOffsets===void 0){preventedOffsets={x:0,y:0};}return {top:overflow.top-rect.height-preventedOffsets.y,right:overflow.right-rect.width+preventedOffsets.x,bottom:overflow.bottom-rect.height+preventedOffsets.y,left:overflow.left-rect.width-preventedOffsets.x};}function isAnySideFullyClipped(overflow){return [top,right,bottom,left].some(function(side){return overflow[side]>=0;});}function hide(_ref){var state=_ref.state,name=_ref.name;var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var preventedOffsets=state.modifiersData.preventOverflow;var referenceOverflow=detectOverflow(state,{elementContext:'reference'});var popperAltOverflow=detectOverflow(state,{altBoundary:true});var referenceClippingOffsets=getSideOffsets(referenceOverflow,referenceRect);var popperEscapeOffsets=getSideOffsets(popperAltOverflow,popperRect,preventedOffsets);var isReferenceHidden=isAnySideFullyClipped(referenceClippingOffsets);var hasPopperEscaped=isAnySideFullyClipped(popperEscapeOffsets);state.modifiersData[name]={referenceClippingOffsets:referenceClippingOffsets,popperEscapeOffsets:popperEscapeOffsets,isReferenceHidden:isReferenceHidden,hasPopperEscaped:hasPopperEscaped};state.attributes.popper=Object.assign({},state.attributes.popper,{'data-popper-reference-hidden':isReferenceHidden,'data-popper-escaped':hasPopperEscaped});}// eslint-disable-next-line import/no-unused-modules
var hide$1 = {name:'hide',enabled:true,phase:'main',requiresIfExists:['preventOverflow'],fn:hide};

function distanceAndSkiddingToXY(placement,rects,offset){var basePlacement=getBasePlacement(placement);var invertDistance=[left,top].indexOf(basePlacement)>=0?-1:1;var _ref=typeof offset==='function'?offset(Object.assign({},rects,{placement:placement})):offset,skidding=_ref[0],distance=_ref[1];skidding=skidding||0;distance=(distance||0)*invertDistance;return [left,right].indexOf(basePlacement)>=0?{x:distance,y:skidding}:{x:skidding,y:distance};}function offset(_ref2){var state=_ref2.state,options=_ref2.options,name=_ref2.name;var _options$offset=options.offset,offset=_options$offset===void 0?[0,0]:_options$offset;var data=placements.reduce(function(acc,placement){acc[placement]=distanceAndSkiddingToXY(placement,state.rects,offset);return acc;},{});var _data$state$placement=data[state.placement],x=_data$state$placement.x,y=_data$state$placement.y;if(state.modifiersData.popperOffsets!=null){state.modifiersData.popperOffsets.x+=x;state.modifiersData.popperOffsets.y+=y;}state.modifiersData[name]=data;}// eslint-disable-next-line import/no-unused-modules
var offset$1 = {name:'offset',enabled:true,phase:'main',requires:['popperOffsets'],fn:offset};

function popperOffsets(_ref){var state=_ref.state,name=_ref.name;// Offsets are the actual position the popper needs to have to be
// properly positioned near its reference element
// This is the most basic placement, and will be adjusted by
// the modifiers in the next step
state.modifiersData[name]=computeOffsets({reference:state.rects.reference,element:state.rects.popper,strategy:'absolute',placement:state.placement});}// eslint-disable-next-line import/no-unused-modules
var popperOffsets$1 = {name:'popperOffsets',enabled:true,phase:'read',fn:popperOffsets,data:{}};

function getAltAxis(axis){return axis==='x'?'y':'x';}

function preventOverflow(_ref){var state=_ref.state,options=_ref.options,name=_ref.name;var _options$mainAxis=options.mainAxis,checkMainAxis=_options$mainAxis===void 0?true:_options$mainAxis,_options$altAxis=options.altAxis,checkAltAxis=_options$altAxis===void 0?false:_options$altAxis,boundary=options.boundary,rootBoundary=options.rootBoundary,altBoundary=options.altBoundary,padding=options.padding,_options$tether=options.tether,tether=_options$tether===void 0?true:_options$tether,_options$tetherOffset=options.tetherOffset,tetherOffset=_options$tetherOffset===void 0?0:_options$tetherOffset;var overflow=detectOverflow(state,{boundary:boundary,rootBoundary:rootBoundary,padding:padding,altBoundary:altBoundary});var basePlacement=getBasePlacement(state.placement);var variation=getVariation(state.placement);var isBasePlacement=!variation;var mainAxis=getMainAxisFromPlacement(basePlacement);var altAxis=getAltAxis(mainAxis);var popperOffsets=state.modifiersData.popperOffsets;var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var tetherOffsetValue=typeof tetherOffset==='function'?tetherOffset(Object.assign({},state.rects,{placement:state.placement})):tetherOffset;var normalizedTetherOffsetValue=typeof tetherOffsetValue==='number'?{mainAxis:tetherOffsetValue,altAxis:tetherOffsetValue}:Object.assign({mainAxis:0,altAxis:0},tetherOffsetValue);var offsetModifierState=state.modifiersData.offset?state.modifiersData.offset[state.placement]:null;var data={x:0,y:0};if(!popperOffsets){return;}if(checkMainAxis){var _offsetModifierState$;var mainSide=mainAxis==='y'?top:left;var altSide=mainAxis==='y'?bottom:right;var len=mainAxis==='y'?'height':'width';var offset=popperOffsets[mainAxis];var min$1=offset+overflow[mainSide];var max$1=offset-overflow[altSide];var additive=tether?-popperRect[len]/2:0;var minLen=variation===start?referenceRect[len]:popperRect[len];var maxLen=variation===start?-popperRect[len]:-referenceRect[len];// We need to include the arrow in the calculation so the arrow doesn't go
// outside the reference bounds
var arrowElement=state.elements.arrow;var arrowRect=tether&&arrowElement?getLayoutRect(arrowElement):{width:0,height:0};var arrowPaddingObject=state.modifiersData['arrow#persistent']?state.modifiersData['arrow#persistent'].padding:getFreshSideObject();var arrowPaddingMin=arrowPaddingObject[mainSide];var arrowPaddingMax=arrowPaddingObject[altSide];// If the reference length is smaller than the arrow length, we don't want
// to include its full size in the calculation. If the reference is small
// and near the edge of a boundary, the popper can overflow even if the
// reference is not overflowing as well (e.g. virtual elements with no
// width or height)
var arrowLen=within(0,referenceRect[len],arrowRect[len]);var minOffset=isBasePlacement?referenceRect[len]/2-additive-arrowLen-arrowPaddingMin-normalizedTetherOffsetValue.mainAxis:minLen-arrowLen-arrowPaddingMin-normalizedTetherOffsetValue.mainAxis;var maxOffset=isBasePlacement?-referenceRect[len]/2+additive+arrowLen+arrowPaddingMax+normalizedTetherOffsetValue.mainAxis:maxLen+arrowLen+arrowPaddingMax+normalizedTetherOffsetValue.mainAxis;var arrowOffsetParent=state.elements.arrow&&getOffsetParent(state.elements.arrow);var clientOffset=arrowOffsetParent?mainAxis==='y'?arrowOffsetParent.clientTop||0:arrowOffsetParent.clientLeft||0:0;var offsetModifierValue=(_offsetModifierState$=offsetModifierState==null?void 0:offsetModifierState[mainAxis])!=null?_offsetModifierState$:0;var tetherMin=offset+minOffset-offsetModifierValue-clientOffset;var tetherMax=offset+maxOffset-offsetModifierValue;var preventedOffset=within(tether?min(min$1,tetherMin):min$1,offset,tether?max(max$1,tetherMax):max$1);popperOffsets[mainAxis]=preventedOffset;data[mainAxis]=preventedOffset-offset;}if(checkAltAxis){var _offsetModifierState$2;var _mainSide=mainAxis==='x'?top:left;var _altSide=mainAxis==='x'?bottom:right;var _offset=popperOffsets[altAxis];var _len=altAxis==='y'?'height':'width';var _min=_offset+overflow[_mainSide];var _max=_offset-overflow[_altSide];var isOriginSide=[top,left].indexOf(basePlacement)!==-1;var _offsetModifierValue=(_offsetModifierState$2=offsetModifierState==null?void 0:offsetModifierState[altAxis])!=null?_offsetModifierState$2:0;var _tetherMin=isOriginSide?_min:_offset-referenceRect[_len]-popperRect[_len]-_offsetModifierValue+normalizedTetherOffsetValue.altAxis;var _tetherMax=isOriginSide?_offset+referenceRect[_len]+popperRect[_len]-_offsetModifierValue-normalizedTetherOffsetValue.altAxis:_max;var _preventedOffset=tether&&isOriginSide?withinMaxClamp(_tetherMin,_offset,_tetherMax):within(tether?_tetherMin:_min,_offset,tether?_tetherMax:_max);popperOffsets[altAxis]=_preventedOffset;data[altAxis]=_preventedOffset-_offset;}state.modifiersData[name]=data;}// eslint-disable-next-line import/no-unused-modules
var preventOverflow$1 = {name:'preventOverflow',enabled:true,phase:'main',fn:preventOverflow,requiresIfExists:['offset']};

function getHTMLElementScroll(element){return {scrollLeft:element.scrollLeft,scrollTop:element.scrollTop};}

function getNodeScroll(node){if(node===getWindow(node)||!isHTMLElement(node)){return getWindowScroll(node);}else {return getHTMLElementScroll(node);}}

function isElementScaled(element){var rect=element.getBoundingClientRect();var scaleX=round(rect.width)/element.offsetWidth||1;var scaleY=round(rect.height)/element.offsetHeight||1;return scaleX!==1||scaleY!==1;}// Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.
function getCompositeRect(elementOrVirtualElement,offsetParent,isFixed){if(isFixed===void 0){isFixed=false;}var isOffsetParentAnElement=isHTMLElement(offsetParent);var offsetParentIsScaled=isHTMLElement(offsetParent)&&isElementScaled(offsetParent);var documentElement=getDocumentElement(offsetParent);var rect=getBoundingClientRect(elementOrVirtualElement,offsetParentIsScaled);var scroll={scrollLeft:0,scrollTop:0};var offsets={x:0,y:0};if(isOffsetParentAnElement||!isOffsetParentAnElement&&!isFixed){if(getNodeName(offsetParent)!=='body'||// https://github.com/popperjs/popper-core/issues/1078
isScrollParent(documentElement)){scroll=getNodeScroll(offsetParent);}if(isHTMLElement(offsetParent)){offsets=getBoundingClientRect(offsetParent,true);offsets.x+=offsetParent.clientLeft;offsets.y+=offsetParent.clientTop;}else if(documentElement){offsets.x=getWindowScrollBarX(documentElement);}}return {x:rect.left+scroll.scrollLeft-offsets.x,y:rect.top+scroll.scrollTop-offsets.y,width:rect.width,height:rect.height};}

function order(modifiers){var map=new Map();var visited=new Set();var result=[];modifiers.forEach(function(modifier){map.set(modifier.name,modifier);});// On visiting object, check for its dependencies and visit them recursively
function sort(modifier){visited.add(modifier.name);var requires=[].concat(modifier.requires||[],modifier.requiresIfExists||[]);requires.forEach(function(dep){if(!visited.has(dep)){var depModifier=map.get(dep);if(depModifier){sort(depModifier);}}});result.push(modifier);}modifiers.forEach(function(modifier){if(!visited.has(modifier.name)){// check for visited object
sort(modifier);}});return result;}function orderModifiers(modifiers){// order based on dependencies
var orderedModifiers=order(modifiers);// order based on phase
return modifierPhases.reduce(function(acc,phase){return acc.concat(orderedModifiers.filter(function(modifier){return modifier.phase===phase;}));},[]);}

function debounce(fn){var pending;return function(){if(!pending){pending=new Promise(function(resolve){Promise.resolve().then(function(){pending=undefined;resolve(fn());});});}return pending;};}

function format(str){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}return [].concat(args).reduce(function(p,c){return p.replace(/%s/,c);},str);}

var INVALID_MODIFIER_ERROR='Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';var MISSING_DEPENDENCY_ERROR='Popper: modifier "%s" requires "%s", but "%s" modifier is not available';var VALID_PROPERTIES=['name','enabled','phase','fn','effect','requires','options'];function validateModifiers(modifiers){modifiers.forEach(function(modifier){[].concat(Object.keys(modifier),VALID_PROPERTIES)// IE11-compatible replacement for `new Set(iterable)`
.filter(function(value,index,self){return self.indexOf(value)===index;}).forEach(function(key){switch(key){case'name':if(typeof modifier.name!=='string'){console.error(format(INVALID_MODIFIER_ERROR,String(modifier.name),'"name"','"string"',"\""+String(modifier.name)+"\""));}break;case'enabled':if(typeof modifier.enabled!=='boolean'){console.error(format(INVALID_MODIFIER_ERROR,modifier.name,'"enabled"','"boolean"',"\""+String(modifier.enabled)+"\""));}break;case'phase':if(modifierPhases.indexOf(modifier.phase)<0){console.error(format(INVALID_MODIFIER_ERROR,modifier.name,'"phase"',"either "+modifierPhases.join(', '),"\""+String(modifier.phase)+"\""));}break;case'fn':if(typeof modifier.fn!=='function'){console.error(format(INVALID_MODIFIER_ERROR,modifier.name,'"fn"','"function"',"\""+String(modifier.fn)+"\""));}break;case'effect':if(modifier.effect!=null&&typeof modifier.effect!=='function'){console.error(format(INVALID_MODIFIER_ERROR,modifier.name,'"effect"','"function"',"\""+String(modifier.fn)+"\""));}break;case'requires':if(modifier.requires!=null&&!Array.isArray(modifier.requires)){console.error(format(INVALID_MODIFIER_ERROR,modifier.name,'"requires"','"array"',"\""+String(modifier.requires)+"\""));}break;case'requiresIfExists':if(!Array.isArray(modifier.requiresIfExists)){console.error(format(INVALID_MODIFIER_ERROR,modifier.name,'"requiresIfExists"','"array"',"\""+String(modifier.requiresIfExists)+"\""));}break;case'options':case'data':break;default:console.error("PopperJS: an invalid property has been provided to the \""+modifier.name+"\" modifier, valid properties are "+VALID_PROPERTIES.map(function(s){return "\""+s+"\"";}).join(', ')+"; but \""+key+"\" was provided.");}modifier.requires&&modifier.requires.forEach(function(requirement){if(modifiers.find(function(mod){return mod.name===requirement;})==null){console.error(format(MISSING_DEPENDENCY_ERROR,String(modifier.name),requirement,requirement));}});});});}

function uniqueBy(arr,fn){var identifiers=new Set();return arr.filter(function(item){var identifier=fn(item);if(!identifiers.has(identifier)){identifiers.add(identifier);return true;}});}

function mergeByName(modifiers){var merged=modifiers.reduce(function(merged,current){var existing=merged[current.name];merged[current.name]=existing?Object.assign({},existing,current,{options:Object.assign({},existing.options,current.options),data:Object.assign({},existing.data,current.data)}):current;return merged;},{});// IE11 does not support Object.values
return Object.keys(merged).map(function(key){return merged[key];});}

var INVALID_ELEMENT_ERROR='Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';var INFINITE_LOOP_ERROR='Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';var DEFAULT_OPTIONS={placement:'bottom',modifiers:[],strategy:'absolute'};function areValidElements(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return !args.some(function(element){return !(element&&typeof element.getBoundingClientRect==='function');});}function popperGenerator(generatorOptions){if(generatorOptions===void 0){generatorOptions={};}var _generatorOptions=generatorOptions,_generatorOptions$def=_generatorOptions.defaultModifiers,defaultModifiers=_generatorOptions$def===void 0?[]:_generatorOptions$def,_generatorOptions$def2=_generatorOptions.defaultOptions,defaultOptions=_generatorOptions$def2===void 0?DEFAULT_OPTIONS:_generatorOptions$def2;return function createPopper(reference,popper,options){if(options===void 0){options=defaultOptions;}var state={placement:'bottom',orderedModifiers:[],options:Object.assign({},DEFAULT_OPTIONS,defaultOptions),modifiersData:{},elements:{reference:reference,popper:popper},attributes:{},styles:{}};var effectCleanupFns=[];var isDestroyed=false;var instance={state:state,setOptions:function setOptions(setOptionsAction){var options=typeof setOptionsAction==='function'?setOptionsAction(state.options):setOptionsAction;cleanupModifierEffects();state.options=Object.assign({},defaultOptions,state.options,options);state.scrollParents={reference:isElement(reference)?listScrollParents(reference):reference.contextElement?listScrollParents(reference.contextElement):[],popper:listScrollParents(popper)};// Orders the modifiers based on their dependencies and `phase`
// properties
var orderedModifiers=orderModifiers(mergeByName([].concat(defaultModifiers,state.options.modifiers)));// Strip out disabled modifiers
state.orderedModifiers=orderedModifiers.filter(function(m){return m.enabled;});// Validate the provided modifiers so that the consumer will get warned
// if one of the modifiers is invalid for any reason
if(process.env.NODE_ENV!=="production"){var modifiers=uniqueBy([].concat(orderedModifiers,state.options.modifiers),function(_ref){var name=_ref.name;return name;});validateModifiers(modifiers);if(getBasePlacement(state.options.placement)===auto){var flipModifier=state.orderedModifiers.find(function(_ref2){var name=_ref2.name;return name==='flip';});if(!flipModifier){console.error(['Popper: "auto" placements require the "flip" modifier be','present and enabled to work.'].join(' '));}}var _getComputedStyle=getComputedStyle$1(popper),marginTop=_getComputedStyle.marginTop,marginRight=_getComputedStyle.marginRight,marginBottom=_getComputedStyle.marginBottom,marginLeft=_getComputedStyle.marginLeft;// We no longer take into account `margins` on the popper, and it can
// cause bugs with positioning, so we'll warn the consumer
if([marginTop,marginRight,marginBottom,marginLeft].some(function(margin){return parseFloat(margin);})){console.warn(['Popper: CSS "margin" styles cannot be used to apply padding','between the popper and its reference element or boundary.','To replicate margin, use the `offset` modifier, as well as','the `padding` option in the `preventOverflow` and `flip`','modifiers.'].join(' '));}}runModifierEffects();return instance.update();},// Sync update – it will always be executed, even if not necessary. This
// is useful for low frequency updates where sync behavior simplifies the
// logic.
// For high frequency updates (e.g. `resize` and `scroll` events), always
// prefer the async Popper#update method
forceUpdate:function forceUpdate(){if(isDestroyed){return;}var _state$elements=state.elements,reference=_state$elements.reference,popper=_state$elements.popper;// Don't proceed if `reference` or `popper` are not valid elements
// anymore
if(!areValidElements(reference,popper)){if(process.env.NODE_ENV!=="production"){console.error(INVALID_ELEMENT_ERROR);}return;}// Store the reference and popper rects to be read by modifiers
state.rects={reference:getCompositeRect(reference,getOffsetParent(popper),state.options.strategy==='fixed'),popper:getLayoutRect(popper)};// Modifiers have the ability to reset the current update cycle. The
// most common use case for this is the `flip` modifier changing the
// placement, which then needs to re-run all the modifiers, because the
// logic was previously ran for the previous placement and is therefore
// stale/incorrect
state.reset=false;state.placement=state.options.placement;// On each update cycle, the `modifiersData` property for each modifier
// is filled with the initial data specified by the modifier. This means
// it doesn't persist and is fresh on each update.
// To ensure persistent data, use `${name}#persistent`
state.orderedModifiers.forEach(function(modifier){return state.modifiersData[modifier.name]=Object.assign({},modifier.data);});var __debug_loops__=0;for(var index=0;index<state.orderedModifiers.length;index++){if(process.env.NODE_ENV!=="production"){__debug_loops__+=1;if(__debug_loops__>100){console.error(INFINITE_LOOP_ERROR);break;}}if(state.reset===true){state.reset=false;index=-1;continue;}var _state$orderedModifie=state.orderedModifiers[index],fn=_state$orderedModifie.fn,_state$orderedModifie2=_state$orderedModifie.options,_options=_state$orderedModifie2===void 0?{}:_state$orderedModifie2,name=_state$orderedModifie.name;if(typeof fn==='function'){state=fn({state:state,options:_options,name:name,instance:instance})||state;}}},// Async and optimistically optimized update – it will not be executed if
// not necessary (debounced to run at most once-per-tick)
update:debounce(function(){return new Promise(function(resolve){instance.forceUpdate();resolve(state);});}),destroy:function destroy(){cleanupModifierEffects();isDestroyed=true;}};if(!areValidElements(reference,popper)){if(process.env.NODE_ENV!=="production"){console.error(INVALID_ELEMENT_ERROR);}return instance;}instance.setOptions(options).then(function(state){if(!isDestroyed&&options.onFirstUpdate){options.onFirstUpdate(state);}});// Modifiers have the ability to execute arbitrary code before the first
// update cycle runs. They will be executed in the same order as the update
// cycle. This is useful when a modifier adds some persistent data that
// other modifiers need to use, but the modifier is run after the dependent
// one.
function runModifierEffects(){state.orderedModifiers.forEach(function(_ref3){var name=_ref3.name,_ref3$options=_ref3.options,options=_ref3$options===void 0?{}:_ref3$options,effect=_ref3.effect;if(typeof effect==='function'){var cleanupFn=effect({state:state,name:name,instance:instance,options:options});var noopFn=function noopFn(){};effectCleanupFns.push(cleanupFn||noopFn);}});}function cleanupModifierEffects(){effectCleanupFns.forEach(function(fn){return fn();});effectCleanupFns=[];}return instance;};}var createPopper$3=/*#__PURE__*/popperGenerator();// eslint-disable-next-line import/no-unused-modules

var defaultModifiers$1=[eventListeners,popperOffsets$1,computeStyles$1,applyStyles$1];var createPopper$2=/*#__PURE__*/popperGenerator({defaultModifiers:defaultModifiers$1});// eslint-disable-next-line import/no-unused-modules

var defaultModifiers=[eventListeners,popperOffsets$1,computeStyles$1,applyStyles$1,offset$1,flip$1,preventOverflow$1,arrow$1,hide$1];var createPopper$1=/*#__PURE__*/popperGenerator({defaultModifiers:defaultModifiers});// eslint-disable-next-line import/no-unused-modules

var maxSize={name:'maxSize',enabled:true,phase:'main',requiresIfExists:['offset','preventOverflow','flip'],fn:function fn(_ref){var state=_ref.state,name=_ref.name,options=_ref.options;var overflow=detectOverflow(state,options);var _ref2=state.modifiersData.preventOverflow||{x:0,y:0},x=_ref2.x,y=_ref2.y;var _state$rects$popper=state.rects.popper,width=_state$rects$popper.width,height=_state$rects$popper.height;var _state$placement$spli=state.placement.split('-'),basePlacement=_state$placement$spli[0];var widthProp=basePlacement==='left'?'left':'right';var heightProp=basePlacement==='top'?'top':'bottom';state.modifiersData[name]={width:width-overflow[widthProp]-x,height:height-overflow[heightProp]-y};}};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/const appliedSizeDefaults=new WeakMap();const applyMaxSize={name:'applyMaxSize',enabled:true,phase:'beforeWrite',requires:['maxSize'],fn({state}){const{height:maxHeight}=state.modifiersData.maxSize;if(!appliedSizeDefaults.has(state.elements.popper)){appliedSizeDefaults.set(state.elements.popper,state.rects.popper.height);}const actualHeight=appliedSizeDefaults.get(state.elements.popper);const constrainHeight=maxHeight<actualHeight;const appliedHeight=constrainHeight?`${maxHeight}px`:'';state.styles.popper.maxHeight=appliedHeight;state.styles.popper.height=appliedHeight;}};

const createPopper=popperGenerator$1({defaultModifiers:[...defaultModifiers$2,flip$3,preventOverflow$3,arrow$3,offset$3]});

const stateMachine={initial:'idle',states:{idle:{on:{active:'active'}},active:{on:{visible:'visible',hiding:'hiding',idle:'idle'}},visible:{on:{hiding:'hiding',idle:'idle'}},hiding:{on:{dispose:'dispose'}},dispose:{on:{disposed:'disposed'}},disposed:{on:{}}}};const stateTransition=(state,event)=>{if(!state)return stateMachine.initial;/* c8 ignore next */if(!event)return state;return stateMachine.states[state].on[event]||state;};const parentOverlayOf=el=>{const closestOverlay=el.closest('active-overlay');if(closestOverlay){return closestOverlay;}const rootNode=el.getRootNode();if(rootNode.host){return parentOverlayOf(rootNode.host);}return null;};/**
 * @element active-overlay
 *
 * @slot - content to display in the overlay
 */class ActiveOverlay extends SpectrumElement{constructor(){super();this._state=stateTransition();this.animating=false;this.theme={};this.tabbingAway=false;this.offset=6;this.interaction='hover';this.positionAnimationFrame=0;this.willNotifyClosed=false;this.handleInlineTriggerKeydown=event=>{const{code,shiftKey}=event;/* c8 ignore next */if(code!=='Tab')return;if(shiftKey){this.tabbingAway=true;this.dispatchEvent(new Event('close'));return;}event.stopPropagation();event.preventDefault();this.focus();};this.stealOverlayContentPromise=Promise.resolve();this.stealOverlayContentPromise=new Promise(res=>this.stealOverlayContentResolver=res);}get state(){return this._state;}set state(state){const nextState=stateTransition(this.state,state);if(nextState===this.state){return;}this._state=nextState;if(this.state==='active'||this.state==='visible'||this.state==='hiding'){this.setAttribute('state',this.state);}else {this.removeAttribute('state');}}focus(){const firstFocusable=this.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [focusable]');if(firstFocusable){firstFocusable.focus();/* c8 ignore next 3 */}else {super.focus();}this.removeAttribute('tabindex');}get hasTheme(){return !!this.theme.color||!!this.theme.scale||!!this.theme.lang;}static get styles(){return [styles$c];}get hasModalRoot(){return !!this._modalRoot;}feature(){this.tabIndex=-1;const parentOverlay=parentOverlayOf(this.trigger);const parentIsModal=parentOverlay&&parentOverlay.slot==='open';// If an overlay it triggered from within a "modal" overlay, it needs to continue
// to act like one to get treated correctly in regards to tab trapping.
if(this.interaction==='modal'||parentIsModal||this._modalRoot){this.slot='open';// If this isn't a modal root, walk up the overlays to the next modal root
// and "feature" each on of the intervening overlays.
if(this._modalRoot){parentOverlay===null||parentOverlay===void 0?void 0:parentOverlay.feature();}}}obscure(nextOverlayInteraction){if(this.slot&&nextOverlayInteraction==='modal'){this.removeAttribute('slot');// Obscure upto and including the next modal root.
if(this.interaction!=='modal'){const parentOverlay=parentOverlayOf(this.trigger);this._modalRoot=parentOverlay===null||parentOverlay===void 0?void 0:parentOverlay.obscure(nextOverlayInteraction);return this._modalRoot;}return this;}return undefined;}firstUpdated(changedProperties){super.firstUpdated(changedProperties);/* c8 ignore next */if(!this.overlayContent)return;this.stealOverlayContent(this.overlayContent);/* c8 ignore next */if(!this.overlayContent||!this.trigger)return;if(this.placement&&this.placement!=='none'){this.popper=createPopper(this.virtualTrigger||this.trigger,this,{placement:this.placement,modifiers:[maxSize,applyMaxSize,{name:'arrow',options:{element:this.overlayContentTip}},{name:'offset',options:{offset:[0,this.offset]}}]});}this.state='active';document.addEventListener('sp-update-overlays',()=>{this.updateOverlayPosition();this.state='visible';});this.feature();this.updateOverlayPosition().then(()=>this.applyContentAnimation('spOverlayFadeIn')).then(()=>{if(this.receivesFocus){this.focus();}this.trigger.dispatchEvent(new CustomEvent('sp-opened',{bubbles:true,composed:true,cancelable:true,detail:{interaction:this.interaction}}));});}updateOverlayPopperPlacement(){/* c8 ignore next */if(!this.overlayContent)return;if(this.dataPopperPlacement){// Copy this attribute to the actual overlay node so that it can use
// the attribute for styling shadow DOM elements based on the side
// that popper has chosen for it
this.overlayContent.setAttribute('placement',this.dataPopperPlacement);}else if(this.originalPlacement){this.overlayContent.setAttribute('placement',this.originalPlacement);}else {this.overlayContent.removeAttribute('placement');}}updated(changedProperties){if(changedProperties.has('dataPopperPlacement')){this.updateOverlayPopperPlacement();}}open(openDetail){this.extractDetail(openDetail);}extractDetail(detail){this.overlayContent=detail.content;this.overlayContentTip=detail.contentTip;this.trigger=detail.trigger;this.virtualTrigger=detail.virtualTrigger;this.placement=detail.placement;this.offset=detail.offset;this.interaction=detail.interaction;this.theme=detail.theme;this.receivesFocus=detail.receivesFocus;}dispose(){/* c8 ignore next */if(this.state!=='dispose')return;/* c8 ignore next 4 */if(this.timeout){clearTimeout(this.timeout);delete this.timeout;}if(this.popper){this.popper.destroy();this.popper=undefined;}this.trigger.removeEventListener('keydown',this.handleInlineTriggerKeydown);this.returnOverlayContent();this.state='disposed';if(this.willNotifyClosed){this.overlayContent.dispatchEvent(new Event('sp-overlay-closed'));this.willNotifyClosed=false;}}stealOverlayContent(element){this.originalPlacement=element.getAttribute('placement');this.restoreContent=reparentChildren([element],this,el=>{const slotName=el.slot;el.removeAttribute('slot');return el=>{el.slot=slotName;};});this.stealOverlayContentResolver();}returnOverlayContent(){/* c8 ignore next */if(!this.restoreContent)return;const[element]=this.restoreContent();this.restoreContent=undefined;this.willNotifyClosed=true;if(this.originalPlacement){element.setAttribute('placement',this.originalPlacement);delete this.originalPlacement;}}async updateOverlayPosition(){await(document.fonts?document.fonts.ready:Promise.resolve());if(this.popper){await this.popper.update();}}async hide(animated=true){this.state='hiding';if(animated){await this.applyContentAnimation('spOverlayFadeOut');}this.state='dispose';}schedulePositionUpdate(){// Edge needs a little time to update the DOM before computing the layout
cancelAnimationFrame(this.positionAnimationFrame);this.positionAnimationFrame=requestAnimationFrame(()=>this.updateOverlayPosition());}onSlotChange(){this.schedulePositionUpdate();}connectedCallback(){super.connectedCallback();this.schedulePositionUpdate();}applyContentAnimation(animation){return new Promise(resolve=>{const contents=this.shadowRoot.querySelector('#contents');const doneHandler=event=>{if(animation!==event.animationName)return;contents.removeEventListener('animationend',doneHandler);contents.removeEventListener('animationcancel',doneHandler);this.animating=false;resolve(event.type==='animationcancel');};contents.addEventListener('animationend',doneHandler);contents.addEventListener('animationcancel',doneHandler);contents.style.animationName=animation;this.animating=true;});}renderTheme(content){const{color,scale,lang}=this.theme;return p`<sp-theme color="${l(color)}" scale="${l(scale)}" lang="${l(lang)}" part="theme">${content}</sp-theme>`;}render(){const content=p`<div id="contents"><slot @slotchange="${this.onSlotChange}"></slot></div>`;return this.hasTheme?this.renderTheme(content):content;}static create(details){const overlay=new ActiveOverlay();if(details.content){overlay.open(details);}return overlay;}async getUpdateComplete(){const complete=await super.getUpdateComplete();await this.stealOverlayContentPromise;return complete;}}__decorate([e()],ActiveOverlay.prototype,"_state",void 0);__decorate([e({reflect:true,type:Boolean})],ActiveOverlay.prototype,"animating",void 0);__decorate([e({reflect:true})],ActiveOverlay.prototype,"placement",void 0);__decorate([e({attribute:false})],ActiveOverlay.prototype,"theme",void 0);__decorate([e({attribute:false})],ActiveOverlay.prototype,"receivesFocus",void 0);__decorate([e({attribute:'data-popper-placement'})],ActiveOverlay.prototype,"dataPopperPlacement",void 0);

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/const DEFAULT_WARMUP=1000;const DEFAULT_COOLDOWN=1000;/**
 * A timer to help with implementation of warnup/cooldown behavior as described here:
 * https://spectrum.adobe.com/page/tooltip/#Immediate-or-delayed-appearance
 */class OverlayTimer{constructor(options={}){this.warmUpDelay=DEFAULT_WARMUP;this.coolDownDelay=DEFAULT_COOLDOWN;this.isWarm=false;this.timeout=0;Object.assign(this,options);}async openTimer(component){this.cancelCooldownTimer();if(!this.component||component!==this.component){if(this.component){this.close(this.component);this.cancelCooldownTimer();}this.component=component;if(this.isWarm){return false;}this.promise=new Promise(resolve=>{this.resolve=resolve;this.timeout=window.setTimeout(()=>{if(this.resolve){this.resolve(false);this.isWarm=true;}},this.warmUpDelay);});return this.promise;}else if(this.promise){return this.promise;}else {// This should never happen
throw new Error('Inconsistent state');}}close(component){if(this.component&&this.component===component){this.resetCooldownTimer();if(this.timeout>0){clearTimeout(this.timeout);this.timeout=0;}if(this.resolve){this.resolve(true);delete this.resolve;}delete this.promise;delete this.component;}}resetCooldownTimer(){if(this.isWarm){if(this.cooldownTimeout){window.clearTimeout(this.cooldownTimeout);}this.cooldownTimeout=window.setTimeout(()=>{this.isWarm=false;delete this.cooldownTimeout;},this.coolDownDelay);}}cancelCooldownTimer(){if(this.cooldownTimeout){window.clearTimeout(this.cooldownTimeout);}delete this.cooldownTimeout;}}

iliadCustomElementsDefine('active-overlay',ActiveOverlay);

function isLeftClick(event){return event.button===0;}function hasModifier(event){return !!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey);}class OverlayStack{constructor(){this.overlays=[];this.preventMouseRootClose=false;this.root=document.body;this.handlingResize=false;this.overlayTimer=new OverlayTimer();this.canTabTrap=true;this.trappingInited=false;this._eventsAreBound=false;this.forwardContextmenuEvent=async event=>{const topOverlay=this.overlays[this.overlays.length-1];if(topOverlay.interaction!=='modal'){return;}event.stopPropagation();event.preventDefault();await this.closeTopOverlay();let target=document.elementFromPoint(event.clientX,event.clientY);while(target===null||target===void 0?void 0:target.shadowRoot){const innerTarget=target.shadowRoot.elementFromPoint(event.clientX,event.clientY);if(!innerTarget||innerTarget===target){break;}target=innerTarget;}target===null||target===void 0?void 0:target.dispatchEvent(new MouseEvent('contextmenu',event));};this.handleMouseCapture=event=>{const topOverlay=this.topOverlay;if(!event.target||!topOverlay||!topOverlay.overlayContent||hasModifier(event)||!isLeftClick(event)){this.preventMouseRootClose=true;return;}if(event.target instanceof Node){const path=event.composedPath();if(path.indexOf(topOverlay.overlayContent)>=0){this.preventMouseRootClose=true;return;}this.preventMouseRootClose=false;}};/**
         * A "longpress" occurs before the "click" that creates it has occured.
         * In that way the first click will still be part of the "longpress" and
         * not part of closing the overlay.
         */this._doesNotCloseOnFirstClick=false;this.handleMouse=event=>{if(this._doesNotCloseOnFirstClick){this._doesNotCloseOnFirstClick=false;return;}if(this.preventMouseRootClose||event.defaultPrevented){return;}this.closeTopOverlay();};this.handleKeyUp=event=>{if(event.code==='Escape'){const overlay=this.topOverlay;this.closeTopOverlay();overlay&&overlay.trigger.focus();}};this.handleResize=()=>{if(this.handlingResize)return;this.handlingResize=true;requestAnimationFrame(async()=>{const promises=this.overlays.map(overlay=>overlay.updateOverlayPosition());await Promise.all(promises);this.handlingResize=false;});};}initTabTrapping(){/* c8 ignore next 4 */if(this.document.body.shadowRoot){this.canTabTrap=false;return;}this.document.body.attachShadow({mode:'open'});/* c8 ignore next 3 */if(!this.document.body.shadowRoot){return;}const root=this.document.body.shadowRoot;root.innerHTML=`
            <div id="actual"><slot></slot></div>
            <style>
            #actual {
                position: relative;
                height: calc(100% - var(--swc-body-margins-block, 0px));
                z-index: 0;
                min-height: calc(100vh - var(--swc-body-margins-block, 0px));
            }
            #holder {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-flow: column;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                position: fixed;
                pointer-events: none;
            }
            [name="open"]::slotted(*) {
                pointer-events: all;
            }
            #holder[hidden] {
                display: none !important;
            }
            #actual[tabindex="-1"] ::slotted(*) {
                pointer-events: none;  /* just in case? */
            }
            </style>
            <div id="holder" hidden><slot name="open"></slot></div>
        `;this.tabTrapper=root.querySelector('#actual');this.overlayHolder=root.querySelector('#holder');this.tabTrapper.attachShadow({mode:'open'});if(this.tabTrapper.shadowRoot){this.tabTrapper.shadowRoot.innerHTML='<slot></slot>';}}startTabTrapping(){if(!this.trappingInited){this.initTabTrapping();this.trappingInited=true;}/* c8 ignore next 3 */if(!this.canTabTrap){return;}this.tabTrapper.tabIndex=-1;this.tabTrapper.addEventListener('contextmenu',this.forwardContextmenuEvent,true);this.tabTrapper.setAttribute('aria-hidden','true');this.overlayHolder.hidden=false;requestAnimationFrame(()=>{const bodyStyles=getComputedStyle(document.body);this.tabTrapper.style.setProperty('--swc-body-margins-inline',`calc(${bodyStyles.marginLeft} + ${bodyStyles.marginRight})`);this.tabTrapper.style.setProperty('--swc-body-margins-block',`calc(${bodyStyles.marginTop} + ${bodyStyles.marginBottom})`);});}stopTabTrapping(){/* c8 ignore next 3 */if(!this.canTabTrap||!this.trappingInited){return;}this.tabTrapper.removeAttribute('tabindex');this.tabTrapper.removeEventListener('contextmenu',this.forwardContextmenuEvent,true);this.tabTrapper.removeAttribute('aria-hidden');this.overlayHolder.hidden=true;}get document(){return this.root.ownerDocument/* c8 ignore next */||document;}get topOverlay(){return this.overlays.slice(-1)[0];}findOverlayForContent(overlayContent){for(const item of this.overlays){if(overlayContent===item.overlayContent){return item;}}return undefined;}addEventListeners(){if(this._eventsAreBound)return;this._eventsAreBound=true;this.document.addEventListener('click',this.handleMouseCapture,true);this.document.addEventListener('click',this.handleMouse);this.document.addEventListener('keyup',this.handleKeyUp);window.addEventListener('resize',this.handleResize);}isClickOverlayActiveForTrigger(trigger){return this.overlays.some(item=>trigger===item.trigger&&item.interaction==='click');}async openOverlay(details){this.addEventListeners();if(this.findOverlayForContent(details.content)){return false;}if(details.notImmediatelyClosable){this._doesNotCloseOnFirstClick=true;}if(details.interaction==='modal'){this.startTabTrapping();}const contentWithLifecycle=details.content;if(contentWithLifecycle.overlayWillOpenCallback){const{trigger}=details;contentWithLifecycle.overlayWillOpenCallback({trigger});}if(details.delayed){const cancelledPromise=this.overlayTimer.openTimer(details.content);const promises=[cancelledPromise];if(details.abortPromise){promises.push(details.abortPromise);}const cancelled=await Promise.race(promises);if(cancelled){if(contentWithLifecycle.overlayOpenCancelledCallback){const{trigger}=details;contentWithLifecycle.overlayOpenCancelledCallback({trigger});}return cancelled;}}if(details.interaction==='click'){this.closeAllHoverOverlays();}else if(details.interaction==='hover'&&this.isClickOverlayActiveForTrigger(details.trigger)){// Don't show a hover popover if the click popover is already active
return true;}const activeOverlay=ActiveOverlay.create(details);if(this.overlays.length){const topOverlay=this.overlays[this.overlays.length-1];topOverlay.obscure(activeOverlay.interaction);}document.body.appendChild(activeOverlay);/**
         * The following work to make the new overlay the "top" of the stack
         * has to happen AFTER the current call stack completes in case there
         * is work there in to remove the previous "top" overlay.
         */return new Promise(res=>requestAnimationFrame(res)).then(async()=>{this.overlays.push(activeOverlay);await activeOverlay.updateComplete;this.addOverlayEventListeners(activeOverlay);if(typeof contentWithLifecycle.open!=='undefined'){contentWithLifecycle.open=true;}if(contentWithLifecycle.overlayOpenCallback){const{trigger}=activeOverlay;contentWithLifecycle.overlayOpenCallback({trigger});}if(details.receivesFocus==='auto'){activeOverlay.focus();}return false;});}addOverlayEventListeners(activeOverlay){activeOverlay.addEventListener('close',()=>{this.hideAndCloseOverlay(activeOverlay);});switch(activeOverlay.interaction){case'replace':this.addReplaceOverlayEventListeners(activeOverlay);break;case'inline':this.addInlineOverlayEventListeners(activeOverlay);break;}}addReplaceOverlayEventListeners(activeOverlay){activeOverlay.addEventListener('keydown',event=>{const{code}=event;/* c8 ignore next */if(code!=='Tab')return;event.stopPropagation();this.closeOverlay(activeOverlay.overlayContent);activeOverlay.tabbingAway=true;activeOverlay.trigger.focus();activeOverlay.trigger.dispatchEvent(new KeyboardEvent('keydown',event));});}addInlineOverlayEventListeners(activeOverlay){activeOverlay.trigger.addEventListener('keydown',activeOverlay.handleInlineTriggerKeydown);activeOverlay.addEventListener('keydown',event=>{const{code,shiftKey}=event;/* c8 ignore next */if(code!=='Tab')return;activeOverlay.tabbingAway=true;if(shiftKey){const returnFocusElement=document.createElement('span');returnFocusElement.tabIndex=-1;if(activeOverlay.trigger.hasAttribute('slot')){returnFocusElement.slot=activeOverlay.trigger.slot;}activeOverlay.trigger.insertAdjacentElement('afterend',returnFocusElement);returnFocusElement.focus();returnFocusElement.remove();return;}event.stopPropagation();const triggerWithLifecycle=activeOverlay.trigger;if(typeof triggerWithLifecycle.open!=='undefined'){triggerWithLifecycle.open=false;}this.closeOverlay(activeOverlay.overlayContent);activeOverlay.trigger.focus();});}closeOverlay(content){this.overlayTimer.close(content);requestAnimationFrame(()=>{const overlay=this.findOverlayForContent(content);this.hideAndCloseOverlay(overlay);});}closeAllHoverOverlays(){for(const overlay of this.overlays){if(overlay.interaction==='hover'){this.hideAndCloseOverlay(overlay,false);}}}async hideAndCloseOverlay(overlay,animated){if(overlay){await overlay.hide(animated);const contentWithLifecycle=overlay.overlayContent;if(typeof contentWithLifecycle.open!=='undefined'){contentWithLifecycle.open=false;}if(contentWithLifecycle.overlayCloseCallback){const{trigger}=overlay;contentWithLifecycle.overlayCloseCallback({trigger});}if(overlay.state!='dispose')return;const index=this.overlays.indexOf(overlay);if(index>=0){this.overlays.splice(index,1);}if(this.overlays.length){const topOverlay=this.overlays[this.overlays.length-1];topOverlay.feature();if(topOverlay.interaction==='modal'||topOverlay.hasModalRoot){topOverlay.focus();}else {this.stopTabTrapping();}}else {this.stopTabTrapping();if(overlay.interaction==='modal'||(overlay.interaction==='replace'||overlay.interaction==='inline')&&!overlay.tabbingAway){const overlayRoot=overlay.overlayContent.getRootNode();const overlayContentActiveElement=overlayRoot.activeElement;const triggerRoot=overlay.trigger.getRootNode();const triggerActiveElement=triggerRoot.activeElement;if(overlay.overlayContent.contains(overlayContentActiveElement)||overlay.trigger.getRootNode().contains(triggerActiveElement)||triggerRoot.host&&triggerRoot.host===triggerActiveElement){overlay.trigger.focus();}}overlay.tabbingAway=false;}overlay.remove();overlay.dispose();overlay.trigger.dispatchEvent(new CustomEvent('sp-closed',{bubbles:true,composed:true,cancelable:true,detail:{interaction:overlay.interaction}}));}}closeTopOverlay(){return this.hideAndCloseOverlay(this.topOverlay);}}

/**
 * This class allows access to the overlay system which allows a client to
 * position an element in the overlay positioned relative to another node.
 */class Overlay{/**
     *
     * @param owner the parent element we will use to position the overlay element
     * @param interaction the type of interaction that caused this overlay to be shown
     * @param overlayElement the item to display as an overlay
     */constructor(owner,interaction,overlayElement){this.isOpen=false;this.owner=owner;this.overlayElement=overlayElement;this.interaction=interaction;}/**
     * Open an overlay
     *
     * @param owner the parent element we will use to position the overlay element
     * @param interaction the type of interaction that caused this overlay to be shown
     * @param overlayElement the item to display as an overlay
     * @param options display parameters
     * @param options.delayed if true delay opening of the overlay based on the global warmup/cooldown timer
     * @param options.offset distance to offset the overlay
     * @param options.placement side on which to position the overlay
     * @returns an Overlay object which can be used to close the overlay
     */static async open(owner,interaction,overlayElement,options){const overlay=new Overlay(owner,interaction,overlayElement);await overlay.open(options);return ()=>{overlay.close();};}static update(){const overlayUpdateEvent=new CustomEvent('sp-update-overlays',{bubbles:true,composed:true,cancelable:true});document.dispatchEvent(overlayUpdateEvent);}/**
     * Open an overlay
     *
     * @param options display parameters
     * @param options.delayed delay before opening the overlay
     * @param options.offset distance to offset the overlay
     * @param options.placement side on which to position the overlay
     * @returns a Promise that resolves to true if this operation was cancelled
     */async open({abortPromise,delayed,offset=0,placement='top',receivesFocus,notImmediatelyClosable,virtualTrigger}){/* c8 ignore next */if(this.isOpen)return true;if(delayed===undefined){delayed=this.overlayElement.hasAttribute('delayed');}const queryThemeDetail={color:undefined,scale:undefined,lang:undefined};const queryThemeEvent=new CustomEvent('sp-query-theme',{bubbles:true,composed:true,detail:queryThemeDetail,cancelable:true});this.owner.dispatchEvent(queryThemeEvent);const overlayDetailQuery={};const queryOverlayDetailEvent=new CustomEvent('sp-overlay-query',{bubbles:true,composed:true,detail:overlayDetailQuery,cancelable:true});this.overlayElement.dispatchEvent(queryOverlayDetailEvent);await Overlay.overlayStack.openOverlay(Object.assign({abortPromise,content:this.overlayElement,contentTip:overlayDetailQuery.overlayContentTipElement,delayed,offset:offset,placement:placement,trigger:this.owner,interaction:this.interaction,theme:queryThemeDetail,receivesFocus,notImmediatelyClosable,virtualTrigger},overlayDetailQuery));this.isOpen=true;return true;}/**
     * Close the overlay if it is open
     */close(){Overlay.overlayStack.closeOverlay(this.overlayElement);}}Overlay.overlayStack=new OverlayStack();/**
 * Announces that an overlay-based UI element has opened
 * @event sp-open
 * @type {object}
 * @property {TriggerInteractions} interaction type of interaction that triggered the opening
 */ /**
 * Announces that an overlay-based UI element has opened
 * @event sp-close
 * @type {object}
 * @property {TriggerInteractions} interaction type of interaction that triggered the closing
 */

var overlay = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Overlay: Overlay
});

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/const openOverlay=async(target,interaction,content,options)=>{const{Overlay}=await Promise.resolve().then(function () { return overlay; });return Overlay.open(target,interaction,content,options);};

const styles$b=r`#trigger{display:contents}:host([disabled]) #trigger{pointer-events:none}#overlay-content{display:none}`;

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
*/var _a$1;/**
 * @element overlay-trigger
 *
 * @slot trigger - The content that will trigger the various overlays
 * @slot hover-content - The content that will be displayed on hover
 * @slot click-content - The content that will be displayed on click
 * @slot longpress-content - The content that will be displayed on click
 *
 * @fires sp-opened - Announces that the overlay has been opened
 * @fires sp-closed - Announces that the overlay has been closed
 */class OverlayTrigger extends s{constructor(){super(...arguments);/**
         * @type {"auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | "none"}
         * @attr
         */this.placement='bottom';this.offset=6;this.disabled=false;this.abortOverlay=()=>{return;};this.openStatePromise=Promise.resolve();}static get styles(){return [styles$b];}handleClose(event){if(event&&event.detail.interaction!==this.open&&event.detail.interaction!==this.type){return;}this.removeAttribute('open');}render(){// Keyboard event availability documented in README.md
/* eslint-disable lit-a11y/click-events-have-key-events */return p`<div id="trigger" @click="${this.onTrigger}" @longpress="${this.onTrigger}" @mouseenter="${this.onTrigger}" @mouseleave="${this.onTrigger}" @focusin="${this.onTrigger}" @focusout="${this.onTrigger}" @sp-closed="${this.handleClose}"><slot @slotchange="${this.onTargetSlotChange}" name="trigger"></slot></div><div id="overlay-content"><slot @slotchange="${this.onClickSlotChange}" name="click-content"></slot><slot @slotchange="${this.onLongpressSlotChange}" name="longpress-content"></slot><slot @slotchange="${this.onHoverSlotChange}" name="hover-content"></slot></div>`;/* eslint-enable lit-a11y/click-events-have-key-events */}updated(changes){super.updated(changes);if(this.disabled&&changes.has('disabled')){this.closeAllOverlays();return;}if(changes.has('open')){this.manageOpen();}}closeAllOverlays(){if(this.abortOverlay)this.abortOverlay(true);['closeClickOverlay','closeHoverOverlay','closeLongpressOverlay'].forEach(async name=>{const canClose=this[name];if(canClose==null)return;delete this[name];(await canClose)();});}manageOpen(){var _b;const openHandlers={click:()=>this.onTriggerClick(),hover:()=>this.onTriggerMouseEnter(),longpress:()=>this.onTriggerLongpress(),none:()=>this.closeAllOverlays()};openHandlers[(_b=this.open)!==null&&_b!==void 0?_b:'none']();}async openOverlay(target,interaction,content,options){this.openStatePromise=new Promise(res=>this.openStateResolver=res);this.addEventListener('sp-opened',()=>{this.openStateResolver();},{once:true});return OverlayTrigger.openOverlay(target,interaction,content,options);}get overlayOptions(){return {offset:this.offset,placement:this.placement,receivesFocus:this.type&&this.type!=='inline'?'auto':undefined};}onTrigger(event){if(this.disabled)return;switch(event.type){case'mouseenter':case'focusin':if(!this.open&&this.hoverContent){this.open='hover';}return;case'mouseleave':case'focusout':if(this.open==='hover'){this.handleClose();}return;case'click':if(this.clickContent){this.open=event.type;}else if(this.closeHoverOverlay){event.preventDefault();}return;case'longpress':if(this.longpressContent){this._longpressEvent=event;this.open=event.type;}return;}}prepareToFocusOverlayContent(overlayContent){if(this.type!=='modal'){return;}const firstFocusable=overlayContent.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [focusable]');if(!firstFocusable){overlayContent.tabIndex=0;}}async onTriggerClick(){if(!this.targetContent||!this.clickContent||this.closeClickOverlay){return;}const{targetContent,clickContent}=this;this.closeAllOverlays();this.prepareToFocusOverlayContent(clickContent);this.closeClickOverlay=this.openOverlay(targetContent,this.type?this.type:'click',clickContent,this.overlayOptions);}async onTriggerLongpress(){var _b,_c;if(!this.targetContent||!this.longpressContent||this.closeLongpressOverlay){return;}const{targetContent,longpressContent}=this;this.closeAllOverlays();this.prepareToFocusOverlayContent(longpressContent);const notImmediatelyClosable=((_c=(_b=this._longpressEvent)===null||_b===void 0?void 0:_b.detail)===null||_c===void 0?void 0:_c.source)!=='keyboard';this.closeLongpressOverlay=this.openOverlay(targetContent,this.type?this.type:'longpress',longpressContent,Object.assign(Object.assign({},this.overlayOptions),{receivesFocus:'auto',notImmediatelyClosable}));this._longpressEvent=undefined;}async onTriggerMouseEnter(){if(!this.targetContent||!this.hoverContent||this.closeHoverOverlay){return;}const abortPromise=new Promise(res=>{this.abortOverlay=res;});const{targetContent,hoverContent}=this;this.closeHoverOverlay=this.openOverlay(targetContent,'hover',hoverContent,Object.assign({abortPromise},this.overlayOptions));}onClickSlotChange(event){this.clickContent=this.extractSlotContentFromEvent(event);this.manageOpen();}onLongpressSlotChange(event){this.longpressContent=this.extractSlotContentFromEvent(event);this.manageOpen();}onHoverSlotChange(event){this.hoverContent=this.extractSlotContentFromEvent(event);this.manageOpen();}onTargetSlotChange(event){this.targetContent=this.extractSlotContentFromEvent(event);}extractSlotContentFromEvent(event){const slot=event.target;const nodes=slot.assignedNodes({flatten:true});return nodes.find(node=>node instanceof HTMLElement);}async getUpdateComplete(){const complete=await super.getUpdateComplete();await this.openStatePromise;return complete;}disconnectedCallback(){this.closeAllOverlays();super.disconnectedCallback();}}_a$1=OverlayTrigger;OverlayTrigger.openOverlay=async(target,interaction,content,options)=>{return openOverlay(target,interaction,content,options);};__decorate([e({reflect:true})],OverlayTrigger.prototype,"placement",void 0);__decorate([e()],OverlayTrigger.prototype,"type",void 0);__decorate([e({type:Number,reflect:true})],OverlayTrigger.prototype,"offset",void 0);__decorate([e({reflect:true})],OverlayTrigger.prototype,"open",void 0);__decorate([e({type:Boolean,reflect:true})],OverlayTrigger.prototype,"disabled",void 0);

class VirtualTrigger{constructor(x,y){this.x=0;this.y=0;this.x=x;this.y=y;}updateBoundingClientRect(x,y){this.x=x;this.y=y;Overlay.update();}getBoundingClientRect(){return {width:0,height:0,top:this.y,right:this.x,y:this.y,x:this.x,bottom:this.y,left:this.x,toJSON(){return;}};}}

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
*/var _a;const chevronClass={s:'spectrum-UIIcon-ChevronDown75',m:'spectrum-UIIcon-ChevronDown100',l:'spectrum-UIIcon-ChevronDown200',xl:'spectrum-UIIcon-ChevronDown300'};/**
 * @element sp-picker
 *
 * @slot label - The placeholder content for the Picker
 * @slot - menu items to be listed in the Picker
 * @fires change - Announces that the `value` of the element has changed
 * @fires sp-opened - Announces that the overlay has been opened
 * @fires sp-closed - Announces that the overlay has been closed
 */class PickerBase extends SizedMixin(Focusable){constructor(){super();this.disabled=false;this.focused=false;this.invalid=false;this.open=false;this.readonly=false;this.selects='single';this.menuItems=[];/**
         * @type {"auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | "none"}
         * @attr
         */this.placement='bottom-start';this.quiet=false;this.value='';this.listRole='listbox';this.itemRole='option';this.onKeydown=event=>{if(event.code!=='ArrowDown'&&event.code!=='ArrowUp'){return;}event.preventDefault();this.toggle(true);};this.menuStatePromise=Promise.resolve();this.onKeydown=this.onKeydown.bind(this);}get target(){return this.button;}get focusElement(){if(this.open){return this.optionsMenu;}return this.button;}forceFocusVisible(){this.focused=true;}onButtonBlur(){this.focused=false;this.target.removeEventListener('keydown',this.onKeydown);}onButtonClick(){this.toggle();}onHelperFocus(){// set focused to true here instead of onButtonFocus so clicks don't flash a focus outline
this.focused=true;this.button.focus();}onButtonFocus(){this.target.addEventListener('keydown',this.onKeydown);}handleChange(event){event.stopPropagation();const target=event.target;const[selected]=target.selectedItems;this.setValueFromItem(selected,event);}async setValueFromItem(item,menuChangeEvent){const oldSelectedItem=this.selectedItem;const oldValue=this.value;this.selectedItem=item;this.value=item.value;this.open=false;await this.updateComplete;const applyDefault=this.dispatchEvent(new Event('change',{cancelable:true}));if(!applyDefault){if(menuChangeEvent){menuChangeEvent.preventDefault();}this.selectedItem=oldSelectedItem;this.value=oldValue;this.open=true;return;}if(oldSelectedItem){oldSelectedItem.selected=!!this.selects?false:false;}item.selected=!!this.selects?true:false;}toggle(target){if(this.readonly){return;}this.open=typeof target!=='undefined'?target:!this.open;}close(){if(this.readonly){return;}this.open=false;}onOverlayClosed(){this.close();if(this.restoreChildren){this.restoreChildren();this.restoreChildren=undefined;}this.menuStateResolver();}async openMenu(){/* c8 ignore next 9 */let reparentableChildren=[];const deprecatedMenu=this.querySelector('sp-menu');if(deprecatedMenu){reparentableChildren=Array.from(deprecatedMenu.children);}else {reparentableChildren=Array.from(this.children).filter(element=>{return !element.hasAttribute('slot');});}if(reparentableChildren.length===0){this.menuStateResolver();return;}this.restoreChildren=reparentChildren(reparentableChildren,this.optionsMenu,()=>{return el=>{if(typeof el.focused!=='undefined'){el.focused=false;}};});this.sizePopover(this.popover);const{popover}=this;this.addEventListener('sp-opened',()=>{this.manageSelection();this.optionsMenu.updateComplete.then(()=>{this.menuStateResolver();});},{once:true});this.closeOverlay=await Picker.openOverlay(this,'inline',popover,{placement:this.placement,receivesFocus:'auto'});}sizePopover(popover){// only use `this.offsetWidth` when Standard variant
const menuWidth=!this.quiet&&`${this.offsetWidth}px`;if(menuWidth){popover.style.setProperty('min-width',menuWidth);}}closeMenu(){if(this.closeOverlay){this.closeOverlay();delete this.closeOverlay;}}get selectedItemContent(){if(!this._selectedItemContent&&this.selectedItem){this._selectedItemContent=this.selectedItem.itemChildren;}return this._selectedItemContent||{icon:[],content:[]};}renderLabelContent(content){if(this.value&&this.selectedItem){return content;}return p`<slot name="label">${this.label}</slot>`;}get buttonContent(){const labelClasses={'visually-hidden':this.icons==='only'&&!!this.value,placeholder:!this.value};return [p`<span id="icon" ?hidden="${this.icons==='none'}">${this.selectedItemContent.icon} </span><span id="label" class="${o$1(labelClasses)}">${this.renderLabelContent(this.selectedItemContent.content)} </span>${this.invalid?p`<sp-icon-alert class="validationIcon"></sp-icon-alert>`:T}<sp-icon-chevron100 class="picker ${chevronClass[this.size]}"></sp-icon-chevron100>`];}// a helper to throw focus to the button is needed because Safari
// won't include buttons in the tab order even with tabindex="0"
get renderButton(){return p`<span id="focus-helper" tabindex="${this.focused?'-1':'0'}" @focus="${this.onHelperFocus}"></span> <button aria-haspopup="true" aria-expanded="${this.open?'true':'false'}" aria-labelledby="button icon label" id="button" class="button" @blur="${this.onButtonBlur}" @click="${this.onButtonClick}" @focus="${this.onButtonFocus}" ?disabled="${this.disabled}" tabindex="-1">${this.buttonContent}</button>`;}update(changes){if(changes.has('selectedItem')){this._selectedItemContent=undefined;}if(this.selects){// Always force `selects` to "single" when set.
// TODO: Add support functionally and visually for "multiple"
this.selects='single';}super.update(changes);}render(){return p`${this.renderButton} ${this.renderPopover}`;}get renderPopover(){return p`<sp-popover id="popover" @sp-overlay-closed="${this.onOverlayClosed}"><sp-menu id="menu" role="${this.listRole}" selects="single" @change="${this.handleChange}"></sp-menu></sp-popover>`;}updateMenuItems(){this.menuItems=[...this.querySelectorAll('sp-menu-item')];}firstUpdated(changedProperties){super.firstUpdated(changedProperties);// Since the sp-menu gets reparented by the popover, initialize it here
this.optionsMenu=this.shadowRoot.querySelector('sp-menu');this.updateMenuItems();const deprecatedMenu=this.querySelector('sp-menu');if(deprecatedMenu){console.warn(`Deprecation Notice: You no longer need to provide an sp-menu child to ${this.tagName.toLowerCase()}. Any styling or attributes on the sp-menu will be ignored.`);}}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has('value')&&!changedProperties.has('selectedItem')){this.manageSelection();}if(changedProperties.has('disabled')&&this.disabled){this.open=false;}if(changedProperties.has('open')&&(this.open||typeof changedProperties.get('open')!=='undefined')){this.menuStatePromise=new Promise(res=>this.menuStateResolver=res);if(this.open){this.openMenu();}else {this.closeMenu();}}}manageSelection(){if(!this.open){this.updateMenuItems();}/* c8 ignore next 3 */if(this.menuItems.length>0){let selectedItem;this.menuItems.forEach(item=>{if(this.value===item.value&&!item.disabled){selectedItem=item;}else {item.selected=!!this.selects?false:false;}});if(selectedItem){selectedItem.selected=!!this.selects?true:false;this.selectedItem=selectedItem;}else {this.value='';this.selectedItem=undefined;}if(this.open){this.optionsMenu.updateComplete.then(()=>{this.optionsMenu.updateSelectedItemIndex();});}return;}}async getUpdateComplete(){const complete=await super.getUpdateComplete();await this.menuStatePromise;return complete;}connectedCallback(){if(!this.open){this.updateMenuItems();}super.connectedCallback();}disconnectedCallback(){this.open=false;super.disconnectedCallback();}}_a=PickerBase;/**
 * @private
 */PickerBase.openOverlay=async(target,interaction,content,options)=>{return await openOverlay(target,interaction,content,options);};__decorate([i('#button')],PickerBase.prototype,"button",void 0);__decorate([e({type:Boolean,reflect:true})],PickerBase.prototype,"disabled",void 0);__decorate([e({type:Boolean,reflect:true})],PickerBase.prototype,"focused",void 0);__decorate([e({type:String,reflect:true})],PickerBase.prototype,"icons",void 0);__decorate([e({type:Boolean,reflect:true})],PickerBase.prototype,"invalid",void 0);__decorate([e()],PickerBase.prototype,"label",void 0);__decorate([e({type:Boolean,reflect:true})],PickerBase.prototype,"open",void 0);__decorate([e({type:Boolean,reflect:true})],PickerBase.prototype,"readonly",void 0);__decorate([e()],PickerBase.prototype,"placement",void 0);__decorate([e({type:Boolean,reflect:true})],PickerBase.prototype,"quiet",void 0);__decorate([e({type:String})],PickerBase.prototype,"value",void 0);__decorate([e({attribute:false})],PickerBase.prototype,"selectedItem",void 0);__decorate([i('sp-popover')],PickerBase.prototype,"popover",void 0);class Picker extends PickerBase{constructor(){super(...arguments);this.onKeydown=event=>{const{code}=event;if(!code.startsWith('Arrow')||this.readonly){return;}event.preventDefault();if(code==='ArrowUp'||code==='ArrowDown'){this.toggle(true);return;}const selectedIndex=this.selectedItem?this.menuItems.indexOf(this.selectedItem):-1;// use a positive offset to find the first non-disabled item when no selection is available.
const nextOffset=!this.value||code==='ArrowRight'?1:-1;let nextIndex=selectedIndex+nextOffset;while(this.menuItems[nextIndex]&&this.menuItems[nextIndex].disabled){nextIndex+=nextOffset;}if(!this.menuItems[nextIndex]||this.menuItems[nextIndex].disabled){return;}if(!this.value||nextIndex!==selectedIndex){this.setValueFromItem(this.menuItems[nextIndex]);}};}static get styles(){return [styles$j,styles$i];}}

iliadCustomElementsDefine('sp-picker',Picker);

/**
 * @slot - text content to be displayed in the Button element
 * @slot icon - icon element(s) to display at the start of the button
 */class ButtonBase extends LikeAnchor(ObserveSlotText(ObserveSlotPresence(Focusable,'[slot="icon"]'))){constructor(){super();this.active=false;this.type='button';this.icononly=false;this.proxyFocus=this.proxyFocus.bind(this);this.addEventListener('click',this.handleClickCapture,{capture:true});}get hasIcon(){return this.slotContentIsPresent;}get hasLabel(){return this.slotHasContent;}get focusElement(){return this;}get buttonContent(){const content=[p`<div id="label" ?hidden="${!this.hasLabel}"><slot id="slot" @slotchange="${this.manageTextObservedSlot}"></slot></div>`];if(this.hasIcon){content.unshift(p`<slot name="icon" ?icon-only="${!this.hasLabel}"></slot>`);this.icononly=!this.hasLabel;}return content;}click(){if(this.disabled){return;}if(this.shouldProxyClick()){return;}super.click();}handleClickCapture(event){if(this.disabled){event.preventDefault();event.stopImmediatePropagation();event.stopPropagation();return false;}}proxyFocus(){this.focus();}shouldProxyClick(){let handled=false;if(this.anchorElement){this.anchorElement.click();handled=true;}else if(this.type!=='button'){const proxy=document.createElement('button');proxy.type=this.type;this.insertAdjacentElement('afterend',proxy);proxy.click();proxy.remove();handled=true;}return handled;}renderAnchor(){return p`${this.buttonContent} ${super.renderAnchor({id:'button',ariaHidden:true,className:'button anchor hidden'})}`;}renderButton(){return p`${this.buttonContent}`;}render(){return this.href&&this.href.length>0?this.renderAnchor():this.renderButton();}handleKeydown(event){const{code}=event;switch(code){case'Space':event.preventDefault();if(typeof this.href==='undefined'){this.addEventListener('keyup',this.handleKeyup);this.active=true;}break;default:break;}}handleKeypress(event){const{code}=event;switch(code){case'Enter':case'NumpadEnter':this.click();break;default:break;}}handleKeyup(event){const{code}=event;switch(code){case'Space':this.removeEventListener('keyup',this.handleKeyup);this.active=false;this.click();break;default:break;}}handleRemoveActive(){this.active=false;}handlePointerdown(){this.active=true;}manageAnchor(){if(this.href&&this.href.length>0){if(this.getAttribute('role')==='button'){this.setAttribute('role','link');}this.removeEventListener('click',this.shouldProxyClick);}else {if(!this.hasAttribute('role')||this.getAttribute('role')==='link'){this.setAttribute('role','button');}this.addEventListener('click',this.shouldProxyClick);}}firstUpdated(changed){super.firstUpdated(changed);if(!this.hasAttribute('tabindex')){this.tabIndex=0;}this.manageAnchor();this.addEventListener('keydown',this.handleKeydown);this.addEventListener('keypress',this.handleKeypress);this.addEventListener('pointerdown',this.handlePointerdown);}updated(changed){super.updated(changed);if(changed.has('href')){this.manageAnchor();}if(changed.has('label')){this.setAttribute('aria-label',this.label||'');}if(changed.has('active')){if(this.active){this.addEventListener('focusout',this.handleRemoveActive);this.addEventListener('pointerup',this.handleRemoveActive);this.addEventListener('pointerleave',this.handleRemoveActive);}else {this.removeEventListener('focusout',this.handleRemoveActive);this.removeEventListener('pointerup',this.handleRemoveActive);this.removeEventListener('pointerleave',this.handleRemoveActive);}}if(this.anchorElement){this.anchorElement.addEventListener('focus',this.proxyFocus);this.anchorElement.tabIndex=-1;}}}__decorate([e({type:Boolean,reflect:true})],ButtonBase.prototype,"active",void 0);__decorate([e({type:String})],ButtonBase.prototype,"type",void 0);__decorate([e({type:Boolean,reflect:true})],ButtonBase.prototype,"icononly",void 0);__decorate([i('.anchor')],ButtonBase.prototype,"anchorElement",void 0);

const styles$a=r`:host{--spectrum-alias-body-text-font-family:var(
--spectrum-global-font-family-base
);--spectrum-alias-focus-ring-gap:var(
--spectrum-global-dimension-static-size-25
);--spectrum-logicbutton-and-height:24px;--spectrum-logicbutton-and-padding-x:var(
--spectrum-global-dimension-size-100
);--spectrum-logicbutton-and-border-size:var(
--spectrum-global-dimension-size-0
);--spectrum-logicbutton-and-border-radius:var(
--spectrum-alias-border-radius-regular
);--spectrum-logicbutton-and-text-size:var(
--spectrum-alias-font-size-default
);--spectrum-logicbutton-and-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-button-primary-m-focus-ring-size-key-focus:var(
--spectrum-alias-focus-ring-size
);--spectrum-button-primary-m-focus-ring-color-key-focus:var(
--spectrum-alias-focus-ring-color
);--spectrum-clearbutton-medium-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-clearbutton-medium-icon-color:var(--spectrum-alias-icon-color);--spectrum-clearbutton-medium-background-color-hover:var(
--spectrum-alias-background-color-transparent
);--spectrum-clearbutton-medium-icon-color-hover:var(
--spectrum-alias-icon-color-hover
);--spectrum-clearbutton-medium-background-color-down:var(
--spectrum-alias-background-color-transparent
);--spectrum-clearbutton-medium-icon-color-down:var(
--spectrum-alias-icon-color-down
);--spectrum-clearbutton-medium-background-color-key-focus:var(
--spectrum-alias-background-color-transparent
);--spectrum-clearbutton-medium-icon-color-key-focus:var(
--spectrum-alias-icon-color-focus
);--spectrum-clearbutton-medium-background-color-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-clearbutton-medium-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-logicbutton-and-background-color:var(
--spectrum-global-color-blue-500
);--spectrum-logicbutton-and-border-color:var(
--spectrum-global-color-blue-500
);--spectrum-logicbutton-and-text-color:var(
--spectrum-global-color-static-white
);--spectrum-logicbutton-and-background-color-hover:var(
--spectrum-global-color-blue-700
);--spectrum-logicbutton-and-border-color-hover:var(
--spectrum-global-color-blue-700
);--spectrum-logicbutton-and-background-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-logicbutton-and-border-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-logicbutton-and-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-logicbutton-or-background-color:var(
--spectrum-global-color-magenta-500
);--spectrum-logicbutton-or-border-color:var(
--spectrum-global-color-magenta-500
);--spectrum-logicbutton-or-text-color:var(
--spectrum-global-color-static-white
);--spectrum-logicbutton-or-background-color-hover:var(
--spectrum-global-color-magenta-700
);--spectrum-logicbutton-or-border-color-hover:var(
--spectrum-global-color-magenta-700
);--spectrum-button-secondary-m-background-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-button-secondary-m-border-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-clearbutton-medium-width:var(
--spectrum-alias-single-line-height
);--spectrum-clearbutton-medium-height:var(
--spectrum-alias-single-line-height
);--spectrum-clearbutton-small-width:var(
--spectrum-global-dimension-size-300
);--spectrum-clearbutton-small-height:var(
--spectrum-global-dimension-size-300
);--spectrum-button-primary-s-focus-ring-size-key-focus:var(
--spectrum-alias-focus-ring-size
);--spectrum-button-primary-s-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-button-primary-s-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-button-primary-s-border-size:var(
--spectrum-alias-border-size-thick
);--spectrum-button-primary-s-text-size:var(
--spectrum-alias-item-text-size-s
);--spectrum-button-primary-s-icon-gap:var(
--spectrum-alias-item-workflow-icon-gap-s
);--spectrum-button-primary-s-height:var(--spectrum-alias-item-height-s);--spectrum-button-primary-s-padding-left:var(
--spectrum-alias-item-rounded-workflow-padding-left-s
);--spectrum-button-primary-s-border-radius:var(
--spectrum-alias-item-rounded-border-radius-s
);--spectrum-button-primary-s-min-width:var(
--spectrum-global-dimension-size-675
);--spectrum-button-primary-s-textonly-padding-left:var(
--spectrum-alias-item-rounded-padding-s
);--spectrum-button-primary-s-textonly-padding-right:var(
--spectrum-alias-item-rounded-padding-s
);--spectrum-button-primary-s-text-padding-top:var(
--spectrum-alias-item-text-padding-top-s
);--spectrum-button-primary-m-min-width:undefined;--spectrum-button-primary-m-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-button-primary-m-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-button-primary-m-border-size:var(
--spectrum-global-dimension-size-0
);--spectrum-button-primary-m-text-size:var(
--spectrum-alias-item-text-size-s
);--spectrum-button-primary-m-text-padding-top:var(
--spectrum-alias-item-text-padding-top-m
);--spectrum-button-primary-m-height:var(--spectrum-alias-item-height-m);--spectrum-button-primary-m-icon-gap:var(
--spectrum-global-dimension-size-75
);--spectrum-button-primary-m-padding-left:var(
--spectrum-alias-item-rounded-workflow-padding-left-m
);--spectrum-button-primary-m-border-radius:var(
--spectrum-alias-item-rounded-border-radius-m
);--spectrum-button-primary-m-textonly-padding-left:var(
--spectrum-alias-item-rounded-padding-m
);--spectrum-button-primary-m-textonly-padding-right:var(
--spectrum-alias-item-rounded-padding-m
);--spectrum-button-primary-l-focus-ring-size-key-focus:var(
--spectrum-alias-focus-ring-size
);--spectrum-button-primary-l-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-button-primary-l-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-button-primary-l-border-size:var(
--spectrum-global-dimension-size-0
);--spectrum-button-primary-l-text-size:var(
--spectrum-alias-item-text-size-m
);--spectrum-button-primary-l-text-padding-top:var(
--spectrum-alias-item-text-padding-top-l
);--spectrum-button-primary-l-icon-gap:var(
--spectrum-alias-item-workflow-icon-gap-l
);--spectrum-button-primary-l-height:var(--spectrum-alias-item-height-l);--spectrum-button-primary-l-padding-left:var(
--spectrum-alias-item-rounded-workflow-padding-left-l
);--spectrum-button-primary-l-border-radius:var(
--spectrum-alias-item-rounded-border-radius-l
);--spectrum-button-primary-l-min-width:var(
--spectrum-global-dimension-size-1125
);--spectrum-button-primary-l-textonly-padding-left:var(
--spectrum-alias-item-rounded-padding-l
);--spectrum-button-primary-l-textonly-padding-right:var(
--spectrum-alias-item-rounded-padding-l
);--spectrum-button-primary-xl-focus-ring-size-key-focus:var(
--spectrum-alias-focus-ring-size
);--spectrum-button-primary-xl-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-button-primary-xl-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-button-primary-xl-border-size:var(
--spectrum-global-dimension-size-0
);--spectrum-button-primary-xl-icon-gap:var(
--spectrum-alias-item-workflow-icon-gap-l
);--spectrum-button-primary-xl-text-size:var(
--spectrum-alias-item-text-size-l
);--spectrum-button-primary-xl-text-padding-top:var(
--spectrum-alias-item-text-padding-top-xl
);--spectrum-button-primary-xl-height:var(--spectrum-alias-item-height-xl);--spectrum-button-primary-xl-padding-left:var(
--spectrum-alias-item-rounded-workflow-padding-left-xl
);--spectrum-button-primary-xl-border-radius:var(
--spectrum-alias-item-rounded-border-radius-xl
);--spectrum-button-primary-xl-min-width:var(
--spectrum-global-dimension-size-1250
);--spectrum-button-primary-xl-textonly-padding-left:var(
--spectrum-alias-item-rounded-padding-xl
);--spectrum-button-primary-xl-textonly-padding-right:var(
--spectrum-alias-item-rounded-padding-xl
);--spectrum-button-cta-m-background-color:var(
--spectrum-semantic-cta-color-background-default
);--spectrum-button-cta-m-border-color:var(
--spectrum-semantic-cta-color-background-default
);--spectrum-button-cta-m-text-color:var(
--spectrum-global-color-static-white
);--spectrum-button-cta-m-background-color-hover:var(
--spectrum-semantic-cta-color-background-hover
);--spectrum-button-cta-m-border-color-hover:var(
--spectrum-semantic-cta-color-background-hover
);--spectrum-button-cta-m-text-color-hover:var(
--spectrum-global-color-static-white
);--spectrum-button-cta-m-background-color-key-focus:var(
--spectrum-semantic-cta-color-background-hover
);--spectrum-button-cta-m-border-color-key-focus:var(
--spectrum-semantic-cta-color-background-hover
);--spectrum-button-cta-m-text-color-key-focus:var(
--spectrum-global-color-static-white
);--spectrum-button-cta-m-background-color-down:var(
--spectrum-semantic-cta-color-background-down
);--spectrum-button-cta-m-border-color-down:var(
--spectrum-semantic-cta-color-background-down
);--spectrum-button-cta-m-text-color-down:var(
--spectrum-global-color-static-white
);--spectrum-button-cta-m-background-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-cta-m-border-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-cta-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-button-primary-m-background-color:var(
--spectrum-global-color-gray-400
);--spectrum-button-primary-m-border-color:var(
--spectrum-global-color-gray-400
);--spectrum-button-primary-m-text-color:var(
--spectrum-alias-text-color-primary
);--spectrum-button-primary-m-background-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-button-primary-m-border-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-button-primary-m-text-color-hover:var(
--spectrum-alias-text-color-primary
);--spectrum-button-primary-m-background-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-button-primary-m-border-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-button-primary-m-text-color-key-focus:var(
--spectrum-alias-text-color-primary
);--spectrum-button-primary-m-background-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-button-primary-m-border-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-button-primary-m-text-color-down:var(
--spectrum-alias-text-color-primary
);--spectrum-button-primary-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-button-secondary-m-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-button-secondary-m-border-color:var(
--spectrum-global-color-gray-300
);--spectrum-button-secondary-m-text-color:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-secondary-m-background-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-button-secondary-m-border-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-button-secondary-m-text-color-hover:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-secondary-m-background-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-button-secondary-m-border-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-button-secondary-m-text-color-key-focus:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-secondary-m-background-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-button-secondary-m-border-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-button-secondary-m-text-color-down:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-primary-m-background-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-primary-m-border-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-secondary-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-button-warning-m-background-color:var(
--spectrum-global-color-red-500
);--spectrum-button-warning-m-border-color:var(
--spectrum-global-color-red-500
);--spectrum-button-warning-m-text-color:var(
--spectrum-global-color-static-white
);--spectrum-button-warning-m-background-color-hover:var(
--spectrum-global-color-red-400
);--spectrum-button-warning-m-border-color-hover:var(
--spectrum-global-color-red-400
);--spectrum-button-warning-m-text-color-hover:var(
--spectrum-global-color-static-white
);--spectrum-button-warning-m-background-color-key-focus:var(
--spectrum-global-color-red-400
);--spectrum-button-warning-m-border-color-key-focus:var(
--spectrum-global-color-red-400
);--spectrum-button-warning-m-text-color-key-focus:var(
--spectrum-global-color-static-white
);--spectrum-button-warning-m-background-color-down:var(
--spectrum-global-color-red-600
);--spectrum-button-warning-m-border-color-down:var(
--spectrum-global-color-red-600
);--spectrum-button-warning-m-text-color-down:var(
--spectrum-global-color-static-white
);--spectrum-button-warning-m-background-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-warning-m-border-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-warning-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-button-over-background-m-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-over-background-m-border-color:var(
--spectrum-global-color-static-white
);--spectrum-button-over-background-m-text-color:var(
--spectrum-global-color-static-white
);--spectrum-button-over-background-m-background-color-hover:var(
--spectrum-global-color-static-white
);--spectrum-button-over-background-m-border-color-hover:var(
--spectrum-global-color-static-white
);--spectrum-alias-focus-ring-size:var(
--spectrum-global-dimension-static-size-25
);--spectrum-button-over-background-m-border-color-key-focus:var(
--spectrum-global-color-static-white
);--spectrum-button-over-background-m-background-color-down:var(
--spectrum-global-color-static-white
);--spectrum-button-over-background-m-border-color-down:var(
--spectrum-global-color-static-white
);--spectrum-button-over-background-m-background-color-disabled:hsla(0,0%,100%,.1);--spectrum-button-over-background-m-border-color-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-over-background-m-text-color-disabled:hsla(0,0%,100%,.35);--spectrum-button-quiet-over-background-m-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-quiet-over-background-m-border-color:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-over-background-m-text-color:var(
--spectrum-global-color-static-white
);--spectrum-button-quiet-over-background-m-background-color-hover:hsla(0,0%,100%,.1);--spectrum-button-quiet-over-background-m-border-color-hover:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-over-background-m-text-color-hover:var(
--spectrum-global-color-static-white
);--spectrum-button-quiet-over-background-m-background-color-down:hsla(0,0%,100%,.2);--spectrum-button-quiet-over-background-m-border-color-down:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-over-background-m-text-color-down:var(
--spectrum-global-color-static-white
);--spectrum-button-quiet-over-background-m-background-color-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-quiet-over-background-m-border-color-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-over-background-m-text-color-disabled:hsla(0,0%,100%,.15);--spectrum-button-quiet-primary-m-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-quiet-primary-m-border-color:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-primary-m-text-color:var(
--spectrum-alias-text-color-primary
);--spectrum-button-quiet-primary-m-background-color-hover:var(
--spectrum-global-color-gray-200
);--spectrum-button-quiet-primary-m-border-color-hover:var(
--spectrum-global-color-gray-200
);--spectrum-button-quiet-primary-m-text-color-hover:var(
--spectrum-alias-text-color-primary
);--spectrum-button-quiet-primary-m-background-color-key-focus:var(
--spectrum-global-color-gray-200
);--spectrum-button-quiet-primary-m-border-color-key-focus:var(
--spectrum-global-color-gray-200
);--spectrum-button-quiet-primary-m-text-color-key-focus:var(
--spectrum-alias-text-color-primary
);--spectrum-button-quiet-primary-m-background-color-down:var(
--spectrum-global-color-gray-300
);--spectrum-button-quiet-primary-m-border-color-down:var(
--spectrum-global-color-gray-300
);--spectrum-button-quiet-primary-m-text-color-down:var(
--spectrum-alias-text-color-primary
);--spectrum-button-quiet-primary-m-background-color-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-quiet-primary-m-border-color-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-primary-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-button-quiet-secondary-m-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-quiet-secondary-m-border-color:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-secondary-m-text-color:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-quiet-secondary-m-background-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-button-quiet-secondary-m-border-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-button-quiet-secondary-m-text-color-hover:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-quiet-secondary-m-background-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-button-quiet-secondary-m-border-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-button-quiet-secondary-m-text-color-key-focus:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-quiet-secondary-m-background-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-button-quiet-secondary-m-border-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-button-quiet-secondary-m-text-color-down:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-quiet-secondary-m-background-color-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-quiet-secondary-m-border-color-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-secondary-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-button-quiet-warning-m-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-quiet-warning-m-border-color:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-warning-m-text-color:var(
--spectrum-global-color-red-500
);--spectrum-button-quiet-warning-m-background-color-hover:var(
--spectrum-alias-cover-color-100
);--spectrum-button-quiet-warning-m-border-color-hover:var(
--spectrum-alias-cover-color-100
);--spectrum-button-quiet-warning-m-text-color-hover:var(
--spectrum-global-color-red-500
);--spectrum-button-quiet-warning-m-background-color-key-focus:var(
--spectrum-alias-cover-color-100
);--spectrum-button-quiet-warning-m-border-color-key-focus:var(
--spectrum-alias-cover-color-100
);--spectrum-button-quiet-warning-m-text-color-key-focus:var(
--spectrum-global-color-red-500
);--spectrum-button-quiet-warning-m-background-color-down:var(
--spectrum-alias-cover-color-200
);--spectrum-button-quiet-warning-m-border-color-down:var(
--spectrum-alias-cover-color-200
);--spectrum-button-quiet-warning-m-text-color-down:var(
--spectrum-global-color-red-500
);--spectrum-button-quiet-warning-m-background-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-quiet-warning-m-border-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-quiet-warning-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
)}:host{display:inline-flex;vertical-align:top}:host([dir]){-webkit-appearance:none}:host([disabled]){cursor:auto;pointer-events:none}#button{inset:0;position:absolute}:host:after{pointer-events:none}slot[name=icon]::slotted(img),slot[name=icon]::slotted(svg){fill:currentColor;stroke:currentColor;height:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);width:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
)}`;

class StyledButton extends ButtonBase{static get styles(){return [styles$a];}}

const styles$9=r`:host{--spectrum-alias-body-text-font-family:var(
--spectrum-global-font-family-base
);--spectrum-alias-focus-ring-gap:var(
--spectrum-global-dimension-static-size-25
);--spectrum-logicbutton-and-height:24px;--spectrum-logicbutton-and-padding-x:var(
--spectrum-global-dimension-size-100
);--spectrum-logicbutton-and-border-size:var(
--spectrum-global-dimension-size-0
);--spectrum-logicbutton-and-border-radius:var(
--spectrum-alias-border-radius-regular
);--spectrum-logicbutton-and-text-size:var(
--spectrum-alias-font-size-default
);--spectrum-logicbutton-and-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-button-primary-m-focus-ring-size-key-focus:var(
--spectrum-alias-focus-ring-size
);--spectrum-button-primary-m-focus-ring-color-key-focus:var(
--spectrum-alias-focus-ring-color
);--spectrum-clearbutton-medium-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-clearbutton-medium-icon-color:var(--spectrum-alias-icon-color);--spectrum-clearbutton-medium-background-color-hover:var(
--spectrum-alias-background-color-transparent
);--spectrum-clearbutton-medium-icon-color-hover:var(
--spectrum-alias-icon-color-hover
);--spectrum-clearbutton-medium-background-color-down:var(
--spectrum-alias-background-color-transparent
);--spectrum-clearbutton-medium-icon-color-down:var(
--spectrum-alias-icon-color-down
);--spectrum-clearbutton-medium-background-color-key-focus:var(
--spectrum-alias-background-color-transparent
);--spectrum-clearbutton-medium-icon-color-key-focus:var(
--spectrum-alias-icon-color-focus
);--spectrum-clearbutton-medium-background-color-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-clearbutton-medium-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-logicbutton-and-background-color:var(
--spectrum-global-color-blue-500
);--spectrum-logicbutton-and-border-color:var(
--spectrum-global-color-blue-500
);--spectrum-logicbutton-and-text-color:var(
--spectrum-global-color-static-white
);--spectrum-logicbutton-and-background-color-hover:var(
--spectrum-global-color-blue-700
);--spectrum-logicbutton-and-border-color-hover:var(
--spectrum-global-color-blue-700
);--spectrum-logicbutton-and-background-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-logicbutton-and-border-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-logicbutton-and-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-logicbutton-or-background-color:var(
--spectrum-global-color-magenta-500
);--spectrum-logicbutton-or-border-color:var(
--spectrum-global-color-magenta-500
);--spectrum-logicbutton-or-text-color:var(
--spectrum-global-color-static-white
);--spectrum-logicbutton-or-background-color-hover:var(
--spectrum-global-color-magenta-700
);--spectrum-logicbutton-or-border-color-hover:var(
--spectrum-global-color-magenta-700
);--spectrum-button-secondary-m-background-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-button-secondary-m-border-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-clearbutton-medium-width:var(
--spectrum-alias-single-line-height
);--spectrum-clearbutton-medium-height:var(
--spectrum-alias-single-line-height
);--spectrum-clearbutton-small-width:var(
--spectrum-global-dimension-size-300
);--spectrum-clearbutton-small-height:var(
--spectrum-global-dimension-size-300
);--spectrum-button-primary-s-focus-ring-size-key-focus:var(
--spectrum-alias-focus-ring-size
);--spectrum-button-primary-s-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-button-primary-s-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-button-primary-s-border-size:var(
--spectrum-alias-border-size-thick
);--spectrum-button-primary-s-text-size:var(
--spectrum-alias-item-text-size-s
);--spectrum-button-primary-s-icon-gap:var(
--spectrum-alias-item-workflow-icon-gap-s
);--spectrum-button-primary-s-height:var(--spectrum-alias-item-height-s);--spectrum-button-primary-s-padding-left:var(
--spectrum-alias-item-rounded-workflow-padding-left-s
);--spectrum-button-primary-s-border-radius:var(
--spectrum-alias-item-rounded-border-radius-s
);--spectrum-button-primary-s-min-width:var(
--spectrum-global-dimension-size-675
);--spectrum-button-primary-s-textonly-padding-left:var(
--spectrum-alias-item-rounded-padding-s
);--spectrum-button-primary-s-textonly-padding-right:var(
--spectrum-alias-item-rounded-padding-s
);--spectrum-button-primary-s-text-padding-top:var(
--spectrum-alias-item-text-padding-top-s
);--spectrum-button-primary-m-min-width:undefined;--spectrum-button-primary-m-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-button-primary-m-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-button-primary-m-border-size:var(
--spectrum-global-dimension-size-0
);--spectrum-button-primary-m-text-size:var(
--spectrum-alias-item-text-size-s
);--spectrum-button-primary-m-text-padding-top:var(
--spectrum-alias-item-text-padding-top-m
);--spectrum-button-primary-m-height:var(--spectrum-alias-item-height-m);--spectrum-button-primary-m-icon-gap:var(
--spectrum-global-dimension-size-75
);--spectrum-button-primary-m-padding-left:var(
--spectrum-alias-item-rounded-workflow-padding-left-m
);--spectrum-button-primary-m-border-radius:var(
--spectrum-alias-item-rounded-border-radius-m
);--spectrum-button-primary-m-textonly-padding-left:var(
--spectrum-alias-item-rounded-padding-m
);--spectrum-button-primary-m-textonly-padding-right:var(
--spectrum-alias-item-rounded-padding-m
);--spectrum-button-primary-l-focus-ring-size-key-focus:var(
--spectrum-alias-focus-ring-size
);--spectrum-button-primary-l-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-button-primary-l-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-button-primary-l-border-size:var(
--spectrum-global-dimension-size-0
);--spectrum-button-primary-l-text-size:var(
--spectrum-alias-item-text-size-m
);--spectrum-button-primary-l-text-padding-top:var(
--spectrum-alias-item-text-padding-top-l
);--spectrum-button-primary-l-icon-gap:var(
--spectrum-alias-item-workflow-icon-gap-l
);--spectrum-button-primary-l-height:var(--spectrum-alias-item-height-l);--spectrum-button-primary-l-padding-left:var(
--spectrum-alias-item-rounded-workflow-padding-left-l
);--spectrum-button-primary-l-border-radius:var(
--spectrum-alias-item-rounded-border-radius-l
);--spectrum-button-primary-l-min-width:var(
--spectrum-global-dimension-size-1125
);--spectrum-button-primary-l-textonly-padding-left:var(
--spectrum-alias-item-rounded-padding-l
);--spectrum-button-primary-l-textonly-padding-right:var(
--spectrum-alias-item-rounded-padding-l
);--spectrum-button-primary-xl-focus-ring-size-key-focus:var(
--spectrum-alias-focus-ring-size
);--spectrum-button-primary-xl-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-button-primary-xl-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-button-primary-xl-border-size:var(
--spectrum-global-dimension-size-0
);--spectrum-button-primary-xl-icon-gap:var(
--spectrum-alias-item-workflow-icon-gap-l
);--spectrum-button-primary-xl-text-size:var(
--spectrum-alias-item-text-size-l
);--spectrum-button-primary-xl-text-padding-top:var(
--spectrum-alias-item-text-padding-top-xl
);--spectrum-button-primary-xl-height:var(--spectrum-alias-item-height-xl);--spectrum-button-primary-xl-padding-left:var(
--spectrum-alias-item-rounded-workflow-padding-left-xl
);--spectrum-button-primary-xl-border-radius:var(
--spectrum-alias-item-rounded-border-radius-xl
);--spectrum-button-primary-xl-min-width:var(
--spectrum-global-dimension-size-1250
);--spectrum-button-primary-xl-textonly-padding-left:var(
--spectrum-alias-item-rounded-padding-xl
);--spectrum-button-primary-xl-textonly-padding-right:var(
--spectrum-alias-item-rounded-padding-xl
);--spectrum-button-cta-m-background-color:var(
--spectrum-semantic-cta-color-background-default
);--spectrum-button-cta-m-border-color:var(
--spectrum-semantic-cta-color-background-default
);--spectrum-button-cta-m-text-color:var(
--spectrum-global-color-static-white
);--spectrum-button-cta-m-background-color-hover:var(
--spectrum-semantic-cta-color-background-hover
);--spectrum-button-cta-m-border-color-hover:var(
--spectrum-semantic-cta-color-background-hover
);--spectrum-button-cta-m-text-color-hover:var(
--spectrum-global-color-static-white
);--spectrum-button-cta-m-background-color-key-focus:var(
--spectrum-semantic-cta-color-background-hover
);--spectrum-button-cta-m-border-color-key-focus:var(
--spectrum-semantic-cta-color-background-hover
);--spectrum-button-cta-m-text-color-key-focus:var(
--spectrum-global-color-static-white
);--spectrum-button-cta-m-background-color-down:var(
--spectrum-semantic-cta-color-background-down
);--spectrum-button-cta-m-border-color-down:var(
--spectrum-semantic-cta-color-background-down
);--spectrum-button-cta-m-text-color-down:var(
--spectrum-global-color-static-white
);--spectrum-button-cta-m-background-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-cta-m-border-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-cta-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-button-primary-m-background-color:var(
--spectrum-global-color-gray-400
);--spectrum-button-primary-m-border-color:var(
--spectrum-global-color-gray-400
);--spectrum-button-primary-m-text-color:var(
--spectrum-alias-text-color-primary
);--spectrum-button-primary-m-background-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-button-primary-m-border-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-button-primary-m-text-color-hover:var(
--spectrum-alias-text-color-primary
);--spectrum-button-primary-m-background-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-button-primary-m-border-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-button-primary-m-text-color-key-focus:var(
--spectrum-alias-text-color-primary
);--spectrum-button-primary-m-background-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-button-primary-m-border-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-button-primary-m-text-color-down:var(
--spectrum-alias-text-color-primary
);--spectrum-button-primary-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-button-secondary-m-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-button-secondary-m-border-color:var(
--spectrum-global-color-gray-300
);--spectrum-button-secondary-m-text-color:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-secondary-m-background-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-button-secondary-m-border-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-button-secondary-m-text-color-hover:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-secondary-m-background-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-button-secondary-m-border-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-button-secondary-m-text-color-key-focus:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-secondary-m-background-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-button-secondary-m-border-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-button-secondary-m-text-color-down:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-primary-m-background-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-primary-m-border-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-secondary-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-button-warning-m-background-color:var(
--spectrum-global-color-red-500
);--spectrum-button-warning-m-border-color:var(
--spectrum-global-color-red-500
);--spectrum-button-warning-m-text-color:var(
--spectrum-global-color-static-white
);--spectrum-button-warning-m-background-color-hover:var(
--spectrum-global-color-red-400
);--spectrum-button-warning-m-border-color-hover:var(
--spectrum-global-color-red-400
);--spectrum-button-warning-m-text-color-hover:var(
--spectrum-global-color-static-white
);--spectrum-button-warning-m-background-color-key-focus:var(
--spectrum-global-color-red-400
);--spectrum-button-warning-m-border-color-key-focus:var(
--spectrum-global-color-red-400
);--spectrum-button-warning-m-text-color-key-focus:var(
--spectrum-global-color-static-white
);--spectrum-button-warning-m-background-color-down:var(
--spectrum-global-color-red-600
);--spectrum-button-warning-m-border-color-down:var(
--spectrum-global-color-red-600
);--spectrum-button-warning-m-text-color-down:var(
--spectrum-global-color-static-white
);--spectrum-button-warning-m-background-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-warning-m-border-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-warning-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-button-over-background-m-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-over-background-m-border-color:var(
--spectrum-global-color-static-white
);--spectrum-button-over-background-m-text-color:var(
--spectrum-global-color-static-white
);--spectrum-button-over-background-m-background-color-hover:var(
--spectrum-global-color-static-white
);--spectrum-button-over-background-m-border-color-hover:var(
--spectrum-global-color-static-white
);--spectrum-alias-focus-ring-size:var(
--spectrum-global-dimension-static-size-25
);--spectrum-button-over-background-m-border-color-key-focus:var(
--spectrum-global-color-static-white
);--spectrum-button-over-background-m-background-color-down:var(
--spectrum-global-color-static-white
);--spectrum-button-over-background-m-border-color-down:var(
--spectrum-global-color-static-white
);--spectrum-button-over-background-m-background-color-disabled:hsla(0,0%,100%,.1);--spectrum-button-over-background-m-border-color-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-over-background-m-text-color-disabled:hsla(0,0%,100%,.35);--spectrum-button-quiet-over-background-m-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-quiet-over-background-m-border-color:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-over-background-m-text-color:var(
--spectrum-global-color-static-white
);--spectrum-button-quiet-over-background-m-background-color-hover:hsla(0,0%,100%,.1);--spectrum-button-quiet-over-background-m-border-color-hover:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-over-background-m-text-color-hover:var(
--spectrum-global-color-static-white
);--spectrum-button-quiet-over-background-m-background-color-down:hsla(0,0%,100%,.2);--spectrum-button-quiet-over-background-m-border-color-down:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-over-background-m-text-color-down:var(
--spectrum-global-color-static-white
);--spectrum-button-quiet-over-background-m-background-color-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-quiet-over-background-m-border-color-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-over-background-m-text-color-disabled:hsla(0,0%,100%,.15);--spectrum-button-quiet-primary-m-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-quiet-primary-m-border-color:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-primary-m-text-color:var(
--spectrum-alias-text-color-primary
);--spectrum-button-quiet-primary-m-background-color-hover:var(
--spectrum-global-color-gray-200
);--spectrum-button-quiet-primary-m-border-color-hover:var(
--spectrum-global-color-gray-200
);--spectrum-button-quiet-primary-m-text-color-hover:var(
--spectrum-alias-text-color-primary
);--spectrum-button-quiet-primary-m-background-color-key-focus:var(
--spectrum-global-color-gray-200
);--spectrum-button-quiet-primary-m-border-color-key-focus:var(
--spectrum-global-color-gray-200
);--spectrum-button-quiet-primary-m-text-color-key-focus:var(
--spectrum-alias-text-color-primary
);--spectrum-button-quiet-primary-m-background-color-down:var(
--spectrum-global-color-gray-300
);--spectrum-button-quiet-primary-m-border-color-down:var(
--spectrum-global-color-gray-300
);--spectrum-button-quiet-primary-m-text-color-down:var(
--spectrum-alias-text-color-primary
);--spectrum-button-quiet-primary-m-background-color-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-quiet-primary-m-border-color-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-primary-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-button-quiet-secondary-m-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-quiet-secondary-m-border-color:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-secondary-m-text-color:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-quiet-secondary-m-background-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-button-quiet-secondary-m-border-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-button-quiet-secondary-m-text-color-hover:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-quiet-secondary-m-background-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-button-quiet-secondary-m-border-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-button-quiet-secondary-m-text-color-key-focus:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-quiet-secondary-m-background-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-button-quiet-secondary-m-border-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-button-quiet-secondary-m-text-color-down:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-quiet-secondary-m-background-color-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-quiet-secondary-m-border-color-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-secondary-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-button-quiet-warning-m-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-quiet-warning-m-border-color:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-warning-m-text-color:var(
--spectrum-global-color-red-500
);--spectrum-button-quiet-warning-m-background-color-hover:var(
--spectrum-alias-cover-color-100
);--spectrum-button-quiet-warning-m-border-color-hover:var(
--spectrum-alias-cover-color-100
);--spectrum-button-quiet-warning-m-text-color-hover:var(
--spectrum-global-color-red-500
);--spectrum-button-quiet-warning-m-background-color-key-focus:var(
--spectrum-alias-cover-color-100
);--spectrum-button-quiet-warning-m-border-color-key-focus:var(
--spectrum-alias-cover-color-100
);--spectrum-button-quiet-warning-m-text-color-key-focus:var(
--spectrum-global-color-red-500
);--spectrum-button-quiet-warning-m-background-color-down:var(
--spectrum-alias-cover-color-200
);--spectrum-button-quiet-warning-m-border-color-down:var(
--spectrum-alias-cover-color-200
);--spectrum-button-quiet-warning-m-text-color-down:var(
--spectrum-global-color-red-500
);--spectrum-button-quiet-warning-m-background-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-quiet-warning-m-border-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-quiet-warning-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
)}:host{--spectrum-button-line-height:var(
--spectrum-global-font-line-height-medium
);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);justify-content:center;line-height:var(--spectrum-button-line-height);margin:0;overflow:visible;position:relative;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:0}:host(::-moz-focus-inner){border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}:host(:disabled){cursor:default}::slotted([slot=icon]){flex-shrink:0;max-height:100%}:host:after{border-radius:calc(var(--spectrum-button-primary-border-radius) + var(--spectrum-alias-focus-ring-gap,var(--spectrum-global-dimension-static-size-25)));bottom:0;content:"";display:block;left:0;margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1);position:absolute;right:0;top:0;transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}:host(.focus-visible):after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}:host(:focus-visible):after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}#label{align-self:center;justify-self:center;text-align:center}#label:empty{display:none}:host([size=s]){--spectrum-button-primary-focus-ring-size-key-focus:var(
--spectrum-button-primary-s-focus-ring-size-key-focus,var(--spectrum-alias-focus-ring-size)
);--spectrum-button-primary-text-font-weight:var(
--spectrum-button-primary-s-text-font-weight,var(--spectrum-global-font-weight-bold)
);--spectrum-button-primary-text-line-height:var(
--spectrum-button-primary-s-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-button-primary-border-size:var(
--spectrum-button-primary-s-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-text-size:var(
--spectrum-button-primary-s-text-size,var(--spectrum-alias-item-text-size-s)
);--spectrum-button-primary-icon-gap:var(
--spectrum-button-primary-s-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-s)
);--spectrum-button-primary-height:var(
--spectrum-button-primary-s-height,var(--spectrum-alias-item-height-s)
);--spectrum-button-primary-padding-left:var(
--spectrum-button-primary-s-padding-left,var(--spectrum-alias-item-rounded-workflow-padding-left-s)
);--spectrum-button-primary-border-radius:var(
--spectrum-button-primary-s-border-radius,var(--spectrum-alias-item-rounded-border-radius-s)
);--spectrum-button-primary-min-width:var(
--spectrum-button-primary-s-min-width,var(--spectrum-global-dimension-size-675)
);--spectrum-button-primary-textonly-padding-left:var(
--spectrum-button-primary-s-textonly-padding-left,var(--spectrum-alias-item-rounded-padding-s)
);--spectrum-button-primary-textonly-padding-right:var(
--spectrum-button-primary-s-textonly-padding-right,var(--spectrum-alias-item-rounded-padding-s)
);--spectrum-button-primary-text-padding-top:calc(var(
--spectrum-button-primary-s-text-padding-top,
var(--spectrum-alias-item-text-padding-top-s)
) - 3px)}:host([size=m]){--spectrum-button-primary-min-width:var(
--spectrum-button-primary-m-min-width
);--spectrum-button-primary-focus-ring-size-key-focus:var(
--spectrum-button-primary-m-focus-ring-size-key-focus,var(--spectrum-alias-focus-ring-size)
);--spectrum-button-primary-text-font-weight:var(
--spectrum-button-primary-m-text-font-weight,var(--spectrum-global-font-weight-bold)
);--spectrum-button-primary-text-line-height:var(
--spectrum-button-primary-m-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-button-primary-border-size:var(
--spectrum-button-primary-m-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-text-size:var(
--spectrum-button-primary-m-text-size,var(--spectrum-alias-item-text-size-m)
);--spectrum-button-primary-text-padding-top:var(
--spectrum-button-primary-m-text-padding-top,var(--spectrum-alias-item-text-padding-top-m)
);--spectrum-button-primary-height:var(
--spectrum-button-primary-m-height,var(--spectrum-alias-item-height-m)
);--spectrum-button-primary-icon-gap:var(
--spectrum-button-primary-m-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-m)
);--spectrum-button-primary-padding-left:var(
--spectrum-button-primary-m-padding-left,var(--spectrum-alias-item-rounded-workflow-padding-left-m)
);--spectrum-button-primary-border-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
);--spectrum-button-primary-textonly-padding-left:var(
--spectrum-button-primary-m-textonly-padding-left,var(--spectrum-alias-item-rounded-padding-m)
);--spectrum-button-primary-textonly-padding-right:var(
--spectrum-button-primary-m-textonly-padding-right,var(--spectrum-alias-item-rounded-padding-m)
)}:host([size=l]){--spectrum-button-primary-focus-ring-size-key-focus:var(
--spectrum-button-primary-l-focus-ring-size-key-focus,var(--spectrum-alias-focus-ring-size)
);--spectrum-button-primary-text-font-weight:var(
--spectrum-button-primary-l-text-font-weight,var(--spectrum-global-font-weight-bold)
);--spectrum-button-primary-text-line-height:var(
--spectrum-button-primary-l-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-button-primary-border-size:var(
--spectrum-button-primary-l-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-text-size:var(
--spectrum-button-primary-l-text-size,var(--spectrum-alias-item-text-size-l)
);--spectrum-button-primary-text-padding-top:var(
--spectrum-button-primary-l-text-padding-top,var(--spectrum-alias-item-text-padding-top-l)
);--spectrum-button-primary-icon-gap:var(
--spectrum-button-primary-l-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-l)
);--spectrum-button-primary-height:var(
--spectrum-button-primary-l-height,var(--spectrum-alias-item-height-l)
);--spectrum-button-primary-padding-left:var(
--spectrum-button-primary-l-padding-left,var(--spectrum-alias-item-rounded-workflow-padding-left-l)
);--spectrum-button-primary-border-radius:var(
--spectrum-button-primary-l-border-radius,var(--spectrum-alias-item-rounded-border-radius-l)
);--spectrum-button-primary-min-width:var(
--spectrum-button-primary-l-min-width,var(--spectrum-global-dimension-size-1125)
);--spectrum-button-primary-textonly-padding-left:var(
--spectrum-button-primary-l-textonly-padding-left,var(--spectrum-alias-item-rounded-padding-l)
);--spectrum-button-primary-textonly-padding-right:var(
--spectrum-button-primary-l-textonly-padding-right,var(--spectrum-alias-item-rounded-padding-l)
)}:host([size=xl]){--spectrum-button-primary-focus-ring-size-key-focus:var(
--spectrum-button-primary-xl-focus-ring-size-key-focus,var(--spectrum-alias-focus-ring-size)
);--spectrum-button-primary-text-font-weight:var(
--spectrum-button-primary-xl-text-font-weight,var(--spectrum-global-font-weight-bold)
);--spectrum-button-primary-text-line-height:var(
--spectrum-button-primary-xl-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-button-primary-border-size:var(
--spectrum-button-primary-xl-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-icon-gap:var(
--spectrum-button-primary-xl-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-l)
);--spectrum-button-primary-text-size:var(
--spectrum-button-primary-xl-text-size,var(--spectrum-alias-item-text-size-xl)
);--spectrum-button-primary-text-padding-top:var(
--spectrum-button-primary-xl-text-padding-top,var(--spectrum-alias-item-text-padding-top-xl)
);--spectrum-button-primary-height:var(
--spectrum-button-primary-xl-height,var(--spectrum-alias-item-height-xl)
);--spectrum-button-primary-padding-left:var(
--spectrum-button-primary-xl-padding-left,var(--spectrum-alias-item-rounded-workflow-padding-left-xl)
);--spectrum-button-primary-border-radius:var(
--spectrum-button-primary-xl-border-radius,var(--spectrum-alias-item-rounded-border-radius-xl)
);--spectrum-button-primary-min-width:var(
--spectrum-button-primary-xl-min-width,var(--spectrum-global-dimension-size-1250)
);--spectrum-button-primary-textonly-padding-left:var(
--spectrum-button-primary-xl-textonly-padding-left,var(--spectrum-alias-item-rounded-padding-xl)
);--spectrum-button-primary-textonly-padding-right:var(
--spectrum-button-primary-xl-textonly-padding-right,var(--spectrum-alias-item-rounded-padding-xl)
)}:host{--spectrum-button-primary-padding-left-adjusted:calc(var(--spectrum-button-primary-padding-left) - var(--spectrum-button-primary-border-size));--spectrum-button-primary-textonly-padding-left-adjusted:calc(var(--spectrum-button-primary-textonly-padding-left) - var(--spectrum-button-primary-border-size));--spectrum-button-primary-textonly-padding-right-adjusted:calc(var(--spectrum-button-primary-textonly-padding-right) - var(--spectrum-button-primary-border-size));--spectrum-button-primary-icononly-padding-left:calc((var(--spectrum-button-primary-height) - var(--spectrum-icon-tshirt-size-height))/2);--spectrum-button-primary-icononly-padding-right:calc((var(--spectrum-button-primary-height) - var(--spectrum-icon-tshirt-size-height))/2);--spectrum-button-primary-icononly-padding-left-adjusted:calc(var(--spectrum-button-primary-icononly-padding-left) - var(--spectrum-button-primary-border-size));--spectrum-button-primary-icononly-padding-right-adjusted:calc(var(--spectrum-button-primary-icononly-padding-right) - var(--spectrum-button-primary-border-size));--spectrum-button-padding-y:calc(var(--spectrum-button-primary-text-padding-top) - 1px)}:host([dir=ltr]){padding-left:var(
--spectrum-button-primary-textonly-padding-left-adjusted
);padding-right:var(
--spectrum-button-primary-textonly-padding-right-adjusted
)}:host([dir=rtl]){padding-left:var(
--spectrum-button-primary-textonly-padding-right-adjusted
);padding-right:var(
--spectrum-button-primary-textonly-padding-left-adjusted
)}:host([icononly]){padding-left:var(--spectrum-button-primary-icononly-padding-left-adjusted);padding-right:var(
--spectrum-button-primary-icononly-padding-right-adjusted
)}:host.focus-visible{outline:0}:host.focus-visible,:host:focus-visible{outline:0}:host{border-radius:var(--spectrum-button-primary-border-radius);border-style:solid;border-width:var(
--spectrum-button-primary-border-size
);font-size:var(--spectrum-button-primary-text-size);font-weight:var(--spectrum-button-primary-text-font-weight);height:auto;min-height:var(--spectrum-button-primary-height);min-width:var(--spectrum-button-primary-min-width);padding-bottom:var(--spectrum-button-padding-y);padding-top:var(--spectrum-button-padding-y)}:host(:hover),:host([active]){box-shadow:none}:host([dir=ltr]) slot[name=icon]+#label{padding-left:var(
--spectrum-button-primary-icon-gap
)}:host([dir=rtl]) slot[name=icon]+#label{padding-right:var(
--spectrum-button-primary-icon-gap
)}:host([dir=ltr]) slot[name=icon]+#label{padding-right:0}:host([dir=rtl]) slot[name=icon]+#label{padding-left:0}#label{line-height:var(
--spectrum-button-primary-text-line-height
)}:host(.focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-focus-ring-size-key-focus) var(
--spectrum-button-primary-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
)}:host(:focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-focus-ring-size-key-focus) var(
--spectrum-button-primary-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
)}:host([variant=cta]){background-color:var(
--spectrum-button-cta-m-background-color,var(--spectrum-semantic-cta-color-background-default)
);border-color:var(
--spectrum-button-cta-m-border-color,var(--spectrum-semantic-cta-color-background-default)
);color:var(
--spectrum-button-cta-m-text-color,var(--spectrum-global-color-static-white)
)}:host([variant=cta]:hover){background-color:var(
--spectrum-button-cta-m-background-color-hover,var(--spectrum-semantic-cta-color-background-hover)
);border-color:var(
--spectrum-button-cta-m-border-color-hover,var(--spectrum-semantic-cta-color-background-hover)
);color:var(
--spectrum-button-cta-m-text-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=cta].focus-visible){background-color:var(
--spectrum-button-cta-m-background-color-key-focus,var(--spectrum-semantic-cta-color-background-hover)
);border-color:var(
--spectrum-button-cta-m-border-color-key-focus,var(--spectrum-semantic-cta-color-background-hover)
);color:var(
--spectrum-button-cta-m-text-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=cta]:focus-visible){background-color:var(
--spectrum-button-cta-m-background-color-key-focus,var(--spectrum-semantic-cta-color-background-hover)
);border-color:var(
--spectrum-button-cta-m-border-color-key-focus,var(--spectrum-semantic-cta-color-background-hover)
);color:var(
--spectrum-button-cta-m-text-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=cta][active]){background-color:var(
--spectrum-button-cta-m-background-color-down,var(--spectrum-semantic-cta-color-background-down)
);border-color:var(
--spectrum-button-cta-m-border-color-down,var(--spectrum-semantic-cta-color-background-down)
);color:var(
--spectrum-button-cta-m-text-color-down,var(--spectrum-global-color-static-white)
)}:host([variant=cta]:disabled),:host([variant=cta][disabled]){background-color:var(
--spectrum-button-cta-m-background-color-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-cta-m-border-color-disabled,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-cta-m-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([variant=primary]){background-color:var(
--spectrum-button-primary-m-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-primary-m-border-color,var(--spectrum-global-color-gray-800)
);color:var(
--spectrum-button-primary-m-text-color,var(--spectrum-global-color-gray-800)
)}:host([variant=primary]:hover){background-color:var(
--spectrum-button-primary-m-background-color-hover,var(--spectrum-global-color-gray-800)
);border-color:var(
--spectrum-button-primary-m-border-color-hover,var(--spectrum-global-color-gray-800)
);color:var(
--spectrum-button-primary-m-text-color-hover,var(--spectrum-global-color-gray-50)
)}:host([variant=primary].focus-visible){background-color:var(
--spectrum-button-primary-m-background-color-key-focus,var(--spectrum-global-color-gray-800)
);border-color:var(
--spectrum-button-primary-m-border-color-key-focus,var(--spectrum-global-color-gray-800)
);color:var(
--spectrum-button-primary-m-text-color-key-focus,var(--spectrum-global-color-gray-50)
)}:host([variant=primary]:focus-visible){background-color:var(
--spectrum-button-primary-m-background-color-key-focus,var(--spectrum-global-color-gray-800)
);border-color:var(
--spectrum-button-primary-m-border-color-key-focus,var(--spectrum-global-color-gray-800)
);color:var(
--spectrum-button-primary-m-text-color-key-focus,var(--spectrum-global-color-gray-50)
)}:host([variant=primary][active]){background-color:var(
--spectrum-button-primary-m-background-color-down,var(--spectrum-global-color-gray-900)
);border-color:var(
--spectrum-button-primary-m-border-color-down,var(--spectrum-global-color-gray-900)
);color:var(
--spectrum-button-primary-m-text-color-down,var(--spectrum-global-color-gray-50)
)}:host([variant=primary]:disabled),:host([variant=primary][disabled]){background-color:var(
--spectrum-button-primary-m-background-color-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-primary-m-border-color-disabled,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-primary-m-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([variant=secondary]){background-color:var(
--spectrum-button-secondary-m-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-secondary-m-border-color,var(--spectrum-global-color-gray-700)
);color:var(
--spectrum-button-secondary-m-text-color,var(--spectrum-global-color-gray-700)
)}:host([variant=secondary]:hover){background-color:var(
--spectrum-button-secondary-m-background-color-hover,var(--spectrum-global-color-gray-700)
);border-color:var(
--spectrum-button-secondary-m-border-color-hover,var(--spectrum-global-color-gray-700)
);color:var(
--spectrum-button-secondary-m-text-color-hover,var(--spectrum-global-color-gray-50)
)}:host([variant=secondary].focus-visible){background-color:var(
--spectrum-button-secondary-m-background-color-key-focus,var(--spectrum-global-color-gray-700)
);border-color:var(
--spectrum-button-secondary-m-border-color-key-focus,var(--spectrum-global-color-gray-700)
);color:var(
--spectrum-button-secondary-m-text-color-key-focus,var(--spectrum-global-color-gray-50)
)}:host([variant=secondary]:focus-visible){background-color:var(
--spectrum-button-secondary-m-background-color-key-focus,var(--spectrum-global-color-gray-700)
);border-color:var(
--spectrum-button-secondary-m-border-color-key-focus,var(--spectrum-global-color-gray-700)
);color:var(
--spectrum-button-secondary-m-text-color-key-focus,var(--spectrum-global-color-gray-50)
)}:host([variant=secondary][active]){background-color:var(
--spectrum-button-secondary-m-background-color-down,var(--spectrum-global-color-gray-800)
);border-color:var(
--spectrum-button-secondary-m-border-color-down,var(--spectrum-global-color-gray-800)
);color:var(
--spectrum-button-secondary-m-text-color-down,var(--spectrum-global-color-gray-50)
)}:host([variant=secondary]:disabled),:host([variant=secondary][disabled]){background-color:var(
--spectrum-button-secondary-m-background-color-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-secondary-m-border-color-disabled,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-secondary-m-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([variant=negative]){background-color:var(
--spectrum-button-warning-m-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-warning-m-border-color,var(--spectrum-semantic-negative-color-text-small)
);color:var(
--spectrum-button-warning-m-text-color,var(--spectrum-semantic-negative-color-text-small)
)}:host([variant=negative]:hover){background-color:var(
--spectrum-button-warning-m-background-color-hover,var(--spectrum-semantic-negative-color-text-small)
);border-color:var(
--spectrum-button-warning-m-border-color-hover,var(--spectrum-semantic-negative-color-text-small)
);color:var(
--spectrum-button-warning-m-text-color-hover,var(--spectrum-global-color-gray-50)
)}:host([variant=negative].focus-visible){background-color:var(
--spectrum-button-warning-m-background-color-key-focus,var(--spectrum-semantic-negative-color-text-small)
);border-color:var(
--spectrum-button-warning-m-border-color-key-focus,var(--spectrum-semantic-negative-color-text-small)
);color:var(
--spectrum-button-warning-m-text-color-key-focus,var(--spectrum-global-color-gray-50)
)}:host([variant=negative]:focus-visible){background-color:var(
--spectrum-button-warning-m-background-color-key-focus,var(--spectrum-semantic-negative-color-text-small)
);border-color:var(
--spectrum-button-warning-m-border-color-key-focus,var(--spectrum-semantic-negative-color-text-small)
);color:var(
--spectrum-button-warning-m-text-color-key-focus,var(--spectrum-global-color-gray-50)
)}:host([variant=negative][active]){background-color:var(
--spectrum-button-warning-m-background-color-down,var(--spectrum-global-color-red-700)
);border-color:var(
--spectrum-button-warning-m-border-color-down,var(--spectrum-global-color-red-700)
);color:var(
--spectrum-button-warning-m-text-color-down,var(--spectrum-global-color-gray-50)
)}:host([variant=negative]:disabled),:host([variant=negative][disabled]){background-color:var(
--spectrum-button-warning-m-background-color-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-warning-m-border-color-disabled,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-warning-m-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([variant=overBackground]){background-color:var(
--spectrum-button-over-background-m-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-over-background-m-border-color,var(--spectrum-global-color-static-white)
);color:var(
--spectrum-button-over-background-m-text-color,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground]:hover){background-color:var(
--spectrum-button-over-background-m-background-color-hover,var(--spectrum-global-color-static-white)
);border-color:var(
--spectrum-button-over-background-m-border-color-hover,var(--spectrum-global-color-static-white)
);color:inherit}:host([variant=overBackground].focus-visible){background-color:var(
--spectrum-button-over-background-m-background-color-hover,var(--spectrum-global-color-static-white)
);border-color:var(
--spectrum-button-over-background-m-border-color-hover,var(--spectrum-global-color-static-white)
);color:inherit}:host([variant=overBackground]:focus-visible){background-color:var(
--spectrum-button-over-background-m-background-color-hover,var(--spectrum-global-color-static-white)
);border-color:var(
--spectrum-button-over-background-m-border-color-hover,var(--spectrum-global-color-static-white)
);color:inherit}:host([variant=overBackground].focus-visible):after{box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-button-over-background-m-border-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground]:focus-visible):after{box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-button-over-background-m-border-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][active]){background-color:var(
--spectrum-button-over-background-m-background-color-down,var(--spectrum-global-color-static-white)
);border-color:var(
--spectrum-button-over-background-m-border-color-down,var(--spectrum-global-color-static-white)
);color:inherit}:host([variant=overBackground]:disabled),:host([variant=overBackground][disabled]){background-color:var(
--spectrum-button-over-background-m-background-color-disabled,hsla(0,0%,100%,.1)
);border-color:var(
--spectrum-button-over-background-m-border-color-disabled,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-over-background-m-text-color-disabled,hsla(0,0%,100%,.35)
)}:host([variant=overBackground][quiet]){background-color:var(
--spectrum-button-quiet-over-background-m-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-quiet-over-background-m-border-color,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-quiet-over-background-m-text-color,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][quiet]:hover){background-color:var(
--spectrum-button-quiet-over-background-m-background-color-hover,hsla(0,0%,100%,.1)
);border-color:var(
--spectrum-button-quiet-over-background-m-border-color-hover,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-quiet-over-background-m-text-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][quiet].focus-visible){background-color:var(
--spectrum-button-quiet-over-background-m-background-color-hover,hsla(0,0%,100%,.1)
);border-color:var(
--spectrum-button-quiet-over-background-m-border-color-hover,var(--spectrum-alias-border-color-transparent)
);box-shadow:none;color:var(
--spectrum-button-quiet-over-background-m-text-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][quiet]:focus-visible){background-color:var(
--spectrum-button-quiet-over-background-m-background-color-hover,hsla(0,0%,100%,.1)
);border-color:var(
--spectrum-button-quiet-over-background-m-border-color-hover,var(--spectrum-alias-border-color-transparent)
);box-shadow:none;color:var(
--spectrum-button-quiet-over-background-m-text-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][quiet].focus-visible):after{box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-button-over-background-m-border-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][quiet]:focus-visible):after{box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-button-over-background-m-border-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][quiet][active]){background-color:var(
--spectrum-button-quiet-over-background-m-background-color-down,hsla(0,0%,100%,.2)
);border-color:var(
--spectrum-button-quiet-over-background-m-border-color-down,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-quiet-over-background-m-text-color-down,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][quiet]:disabled),:host([variant=overBackground][quiet][disabled]){background-color:var(
--spectrum-button-quiet-over-background-m-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-quiet-over-background-m-border-color-disabled,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-quiet-over-background-m-text-color-disabled,hsla(0,0%,100%,.15)
)}:host([variant=primary][quiet]){background-color:var(
--spectrum-button-quiet-primary-m-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-quiet-primary-m-border-color,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-quiet-primary-m-text-color,var(--spectrum-global-color-gray-800)
)}:host([variant=primary][quiet]:hover){background-color:var(
--spectrum-button-quiet-primary-m-background-color-hover,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-quiet-primary-m-border-color-hover,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-quiet-primary-m-text-color-hover,var(--spectrum-global-color-gray-900)
)}:host([variant=primary][quiet].focus-visible){background-color:var(
--spectrum-button-quiet-primary-m-background-color-key-focus,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-quiet-primary-m-border-color-key-focus,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-quiet-primary-m-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([variant=primary][quiet]:focus-visible){background-color:var(
--spectrum-button-quiet-primary-m-background-color-key-focus,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-quiet-primary-m-border-color-key-focus,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-quiet-primary-m-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([variant=primary][quiet][active]){background-color:var(
--spectrum-button-quiet-primary-m-background-color-down,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-quiet-primary-m-border-color-down,var(--spectrum-global-color-gray-300)
);color:var(
--spectrum-button-quiet-primary-m-text-color-down,var(--spectrum-global-color-gray-900)
)}:host([variant=primary][quiet]:disabled),:host([variant=primary][quiet][disabled]){background-color:var(
--spectrum-button-quiet-primary-m-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-quiet-primary-m-border-color-disabled,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-quiet-primary-m-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([variant=secondary][quiet]){background-color:var(
--spectrum-button-quiet-secondary-m-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-quiet-secondary-m-border-color,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-quiet-secondary-m-text-color,var(--spectrum-global-color-gray-700)
)}:host([variant=secondary][quiet]:hover){background-color:var(
--spectrum-button-quiet-secondary-m-background-color-hover,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-quiet-secondary-m-border-color-hover,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-quiet-secondary-m-text-color-hover,var(--spectrum-global-color-gray-800)
)}:host([variant=secondary][quiet].focus-visible){background-color:var(
--spectrum-button-quiet-secondary-m-background-color-key-focus,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-quiet-secondary-m-border-color-key-focus,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-quiet-secondary-m-text-color-key-focus,var(--spectrum-global-color-gray-800)
)}:host([variant=secondary][quiet]:focus-visible){background-color:var(
--spectrum-button-quiet-secondary-m-background-color-key-focus,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-quiet-secondary-m-border-color-key-focus,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-quiet-secondary-m-text-color-key-focus,var(--spectrum-global-color-gray-800)
)}:host([variant=secondary][quiet][active]){background-color:var(
--spectrum-button-quiet-secondary-m-background-color-down,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-quiet-secondary-m-border-color-down,var(--spectrum-global-color-gray-300)
);color:var(
--spectrum-button-quiet-secondary-m-text-color-down,var(--spectrum-global-color-gray-800)
)}:host([variant=secondary][quiet]:disabled),:host([variant=secondary][quiet][disabled]){background-color:var(
--spectrum-button-quiet-secondary-m-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-quiet-secondary-m-border-color-disabled,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-quiet-secondary-m-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([variant=negative][quiet]){background-color:var(
--spectrum-button-quiet-warning-m-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-quiet-warning-m-border-color,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-quiet-warning-m-text-color,var(--spectrum-semantic-negative-color-text-small)
)}:host([variant=negative][quiet]:hover){background-color:var(
--spectrum-button-quiet-warning-m-background-color-hover,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-quiet-warning-m-border-color-hover,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-quiet-warning-m-text-color-hover,var(--spectrum-global-color-red-700)
)}:host([variant=negative][quiet].focus-visible){background-color:var(
--spectrum-button-quiet-warning-m-background-color-key-focus,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-quiet-warning-m-border-color-key-focus,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-quiet-warning-m-text-color-key-focus,var(--spectrum-global-color-red-700)
)}:host([variant=negative][quiet]:focus-visible){background-color:var(
--spectrum-button-quiet-warning-m-background-color-key-focus,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-quiet-warning-m-border-color-key-focus,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-quiet-warning-m-text-color-key-focus,var(--spectrum-global-color-red-700)
)}:host([variant=negative][quiet][active]){background-color:var(
--spectrum-button-quiet-warning-m-background-color-down,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-quiet-warning-m-border-color-down,var(--spectrum-global-color-gray-300)
);color:var(
--spectrum-button-quiet-warning-m-text-color-down,var(--spectrum-global-color-red-700)
)}:host([variant=negative][quiet]:disabled),:host([variant=negative][quiet][disabled]){background-color:var(
--spectrum-button-quiet-warning-m-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-quiet-warning-m-border-color-disabled,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-quiet-warning-m-text-color-disabled,var(--spectrum-global-color-gray-500)
)}@media (forced-colors:active){:host{--spectrum-button-cta-m-background-color:ButtonText;--spectrum-button-cta-m-background-color-disabled:ButtonFace;--spectrum-button-cta-m-background-color-down:Highlight;--spectrum-button-cta-m-background-color-hover:Highlight;--spectrum-button-cta-m-background-color-key-focus:Highlight;--spectrum-button-cta-m-border-color-disabled:GrayText;--spectrum-button-cta-m-border-color-down:Highlight;--spectrum-button-cta-m-border-color-hover:Highlight;--spectrum-button-cta-m-border-color-key-focus:Highlight;--spectrum-button-cta-m-border-color:ButtonText;--spectrum-button-cta-m-text-color-disabled:GrayText;--spectrum-button-cta-m-text-color-down:ButtonFace;--spectrum-button-cta-m-text-color-hover:ButtonFace;--spectrum-button-cta-m-text-color-key-focus:ButtonFace;--spectrum-button-cta-m-text-color:ButtonFace;--spectrum-button-over-background-m-background-color:ButtonFace;--spectrum-button-over-background-m-background-color-disabled:ButtonFace;--spectrum-button-over-background-m-background-color-down:ButtonFace;--spectrum-button-over-background-m-background-color-hover:ButtonFace;--spectrum-button-over-background-m-border-color-disabled:GrayText;--spectrum-button-over-background-m-border-color-down:Highlight;--spectrum-button-over-background-m-border-color-hover:Highlight;--spectrum-button-over-background-m-border-color-key-focus:ButtonText;--spectrum-button-over-background-m-border-color:ButtonText;--spectrum-button-over-background-m-text-color-disabled:GrayText;--spectrum-button-over-background-m-text-color:ButtonText;--spectrum-button-quiet-over-background-m-background-color-disabled:ButtonFace;--spectrum-button-quiet-over-background-m-background-color-down:ButtonFace;--spectrum-button-quiet-over-background-m-background-color-hover:ButtonFace;--spectrum-button-quiet-over-background-m-border-color-disabled:ButtonFace;--spectrum-button-quiet-over-background-m-border-color-down:Highlight;--spectrum-button-quiet-over-background-m-border-color-hover:Highlight;--spectrum-button-quiet-over-background-m-border-color:ButtonFace;--spectrum-button-quiet-over-background-m-text-color-disabled:GrayText;--spectrum-button-quiet-over-background-m-text-color-down:ButtonText;--spectrum-button-quiet-over-background-m-text-color-hover:ButtonText;--spectrum-button-quiet-over-background-m-text-color:ButtonText;--spectrum-button-primary-m-background-color:ButtonFace;--spectrum-button-primary-m-background-color-disabled:ButtonFace;--spectrum-button-primary-m-background-color-down:ButtonFace;--spectrum-button-primary-m-background-color-hover:ButtonFace;--spectrum-button-primary-m-background-color-key-focus:ButtonFace;--spectrum-button-primary-m-border-color-disabled:GrayText;--spectrum-button-primary-m-border-color-down:Highlight;--spectrum-button-primary-m-border-color-hover:Highlight;--spectrum-button-primary-m-border-color-key-focus:Highlight;--spectrum-button-primary-m-border-color:ButtonText;--spectrum-button-primary-m-text-color-disabled:GrayText;--spectrum-button-primary-m-text-color-down:ButtonText;--spectrum-button-primary-m-text-color-hover:ButtonText;--spectrum-button-primary-m-text-color-key-focus:ButtonText;--spectrum-button-primary-m-text-color:ButtonText;--spectrum-button-quiet-primary-m-background-color-disabled:ButtonFace;--spectrum-button-quiet-primary-m-background-color-down:ButtonFace;--spectrum-button-quiet-primary-m-background-color-hover:ButtonFace;--spectrum-button-quiet-primary-m-background-color-key-focus:ButtonFace;--spectrum-button-quiet-primary-m-border-color-disabled:ButtonFace;--spectrum-button-quiet-primary-m-border-color-down:Highlight;--spectrum-button-quiet-primary-m-border-color-hover:Highlight;--spectrum-button-quiet-primary-m-border-color-key-focus:Highlight;--spectrum-button-quiet-primary-m-border-color:ButtonFace;--spectrum-button-quiet-primary-m-text-color-disabled:GrayText;--spectrum-button-quiet-primary-m-text-color-down:ButtonText;--spectrum-button-quiet-primary-m-text-color-hover:ButtonText;--spectrum-button-quiet-primary-m-text-color-key-focus:ButtonText;--spectrum-button-quiet-primary-m-text-color:ButtonText;--spectrum-button-secondary-m-background-color:ButtonFace;--spectrum-button-secondary-m-background-color-down:ButtonFace;--spectrum-button-secondary-m-background-color-hover:ButtonFace;--spectrum-button-secondary-m-background-color-key-focus:ButtonFace;--spectrum-button-secondary-m-border-color-disabled:GrayText;--spectrum-button-secondary-m-border-color-down:Highlight;--spectrum-button-secondary-m-border-color-hover:Highlight;--spectrum-button-secondary-m-border-color-key-focus:Highlight;--spectrum-button-secondary-m-border-color:ButtonText;--spectrum-button-secondary-m-text-color-disabled:GrayText;--spectrum-button-secondary-m-text-color-down:ButtonText;--spectrum-button-secondary-m-text-color-hover:ButtonText;--spectrum-button-secondary-m-text-color-key-focus:ButtonText;--spectrum-button-secondary-m-text-color:ButtonText;--spectrum-button-quiet-secondary-m-background-color-disabled:ButtonFace;--spectrum-button-quiet-secondary-m-background-color-down:ButtonFace;--spectrum-button-quiet-secondary-m-background-color-hover:ButtonFace;--spectrum-button-quiet-secondary-m-background-color-key-focus:ButtonFace;--spectrum-button-quiet-secondary-m-border-color-disabled:ButtonFace;--spectrum-button-quiet-secondary-m-border-color-down:Highlight;--spectrum-button-quiet-secondary-m-border-color-hover:Highlight;--spectrum-button-quiet-secondary-m-border-color-key-focus:Highlight;--spectrum-button-quiet-secondary-m-border-color:ButtonFace;--spectrum-button-quiet-secondary-m-text-color-disabled:GrayText;--spectrum-button-quiet-secondary-m-text-color-down:ButtonText;--spectrum-button-quiet-secondary-m-text-color-hover:ButtonText;--spectrum-button-quiet-secondary-m-text-color-key-focus:ButtonText;--spectrum-button-quiet-secondary-m-text-color:ButtonText;--spectrum-button-warning-m-background-color:ButtonFace;--spectrum-button-warning-m-background-color-down:ButtonFace;--spectrum-button-warning-m-background-color-hover:ButtonFace;--spectrum-button-warning-m-background-color-key-focus:ButtonFace;--spectrum-button-warning-m-border-color-disabled:GrayText;--spectrum-button-warning-m-border-color-down:Highlight;--spectrum-button-warning-m-border-color-hover:Highlight;--spectrum-button-warning-m-border-color-key-focus:Highlight;--spectrum-button-warning-m-border-color:ButtonText;--spectrum-button-warning-m-text-color-disabled:GrayText;--spectrum-button-warning-m-text-color-down:ButtonText;--spectrum-button-warning-m-text-color-hover:ButtonText;--spectrum-button-warning-m-text-color-key-focus:ButtonText;--spectrum-button-warning-m-text-color:ButtonText;--spectrum-button-quiet-warning-m-background-color-disabled:ButtonFace;--spectrum-button-quiet-warning-m-background-color-down:ButtonFace;--spectrum-button-quiet-warning-m-background-color-hover:ButtonFace;--spectrum-button-quiet-warning-m-background-color-key-focus:ButtonFace;--spectrum-button-quiet-warning-m-border-color-disabled:ButtonFace;--spectrum-button-quiet-warning-m-border-color-down:Highlight;--spectrum-button-quiet-warning-m-border-color-hover:Highlight;--spectrum-button-quiet-warning-m-border-color-key-focus:Highlight;--spectrum-button-quiet-warning-m-border-color:ButtonFace;--spectrum-button-quiet-warning-m-text-color-disabled:GrayText;--spectrum-button-quiet-warning-m-text-color-down:ButtonText;--spectrum-button-quiet-warning-m-text-color-hover:ButtonText;--spectrum-button-quiet-warning-m-text-color-key-focus:ButtonText;--spectrum-button-quiet-warning-m-text-color:ButtonText;--spectrum-button-secondary-m-background-color-disabled:ButtonFace;--spectrum-button-warning-m-background-color-disabled:ButtonFace;--spectrum-button-primary-m-focus-ring-color-key-focus:ButtonText}:host{forced-color-adjust:none}}:host([size=s]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
)}:host([size=m]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}:host([size=l]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
)}:host([size=xl]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
)}`;

/**
 * @element sp-button
 *
 * @slot - text label of the Button
 * @slot icon - The icon to use for Button
 */class Button extends SizedMixin(StyledButton){constructor(){super(...arguments);/**
         * The visual variant to apply to this button.
         */this.variant='cta';/**
         * There is a warning in place for this control
         */this.warning=false;/**
         * Style this button to be less obvious
         */this.quiet=false;}static get styles(){return [...super.styles,styles$9];}}__decorate([e({reflect:true})],Button.prototype,"variant",void 0);__decorate([e({type:Boolean,reflect:true})],Button.prototype,"warning",void 0);__decorate([e({type:Boolean,reflect:true})],Button.prototype,"quiet",void 0);

iliadCustomElementsDefine('sp-button',Button);

const styles$8=r`:host{--spectrum-alias-body-text-font-family:var(
--spectrum-global-font-family-base
);--spectrum-alias-focus-ring-gap:var(
--spectrum-global-dimension-static-size-25
);--spectrum-logicbutton-and-height:24px;--spectrum-logicbutton-and-padding-x:var(
--spectrum-global-dimension-size-100
);--spectrum-logicbutton-and-border-size:var(
--spectrum-global-dimension-size-0
);--spectrum-logicbutton-and-border-radius:var(
--spectrum-alias-border-radius-regular
);--spectrum-logicbutton-and-text-size:var(
--spectrum-alias-font-size-default
);--spectrum-logicbutton-and-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-button-primary-m-focus-ring-size-key-focus:var(
--spectrum-alias-focus-ring-size
);--spectrum-button-primary-m-focus-ring-color-key-focus:var(
--spectrum-alias-focus-ring-color
);--spectrum-clearbutton-medium-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-clearbutton-medium-icon-color:var(--spectrum-alias-icon-color);--spectrum-clearbutton-medium-background-color-hover:var(
--spectrum-alias-background-color-transparent
);--spectrum-clearbutton-medium-icon-color-hover:var(
--spectrum-alias-icon-color-hover
);--spectrum-clearbutton-medium-background-color-down:var(
--spectrum-alias-background-color-transparent
);--spectrum-clearbutton-medium-icon-color-down:var(
--spectrum-alias-icon-color-down
);--spectrum-clearbutton-medium-background-color-key-focus:var(
--spectrum-alias-background-color-transparent
);--spectrum-clearbutton-medium-icon-color-key-focus:var(
--spectrum-alias-icon-color-focus
);--spectrum-clearbutton-medium-background-color-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-clearbutton-medium-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-logicbutton-and-background-color:var(
--spectrum-global-color-blue-500
);--spectrum-logicbutton-and-border-color:var(
--spectrum-global-color-blue-500
);--spectrum-logicbutton-and-text-color:var(
--spectrum-global-color-static-white
);--spectrum-logicbutton-and-background-color-hover:var(
--spectrum-global-color-blue-700
);--spectrum-logicbutton-and-border-color-hover:var(
--spectrum-global-color-blue-700
);--spectrum-logicbutton-and-background-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-logicbutton-and-border-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-logicbutton-and-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-logicbutton-or-background-color:var(
--spectrum-global-color-magenta-500
);--spectrum-logicbutton-or-border-color:var(
--spectrum-global-color-magenta-500
);--spectrum-logicbutton-or-text-color:var(
--spectrum-global-color-static-white
);--spectrum-logicbutton-or-background-color-hover:var(
--spectrum-global-color-magenta-700
);--spectrum-logicbutton-or-border-color-hover:var(
--spectrum-global-color-magenta-700
);--spectrum-button-secondary-m-background-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-button-secondary-m-border-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-clearbutton-medium-width:var(
--spectrum-alias-single-line-height
);--spectrum-clearbutton-medium-height:var(
--spectrum-alias-single-line-height
);--spectrum-clearbutton-small-width:var(
--spectrum-global-dimension-size-300
);--spectrum-clearbutton-small-height:var(
--spectrum-global-dimension-size-300
);--spectrum-button-primary-s-focus-ring-size-key-focus:var(
--spectrum-alias-focus-ring-size
);--spectrum-button-primary-s-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-button-primary-s-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-button-primary-s-border-size:var(
--spectrum-alias-border-size-thick
);--spectrum-button-primary-s-text-size:var(
--spectrum-alias-item-text-size-s
);--spectrum-button-primary-s-icon-gap:var(
--spectrum-alias-item-workflow-icon-gap-s
);--spectrum-button-primary-s-height:var(--spectrum-alias-item-height-s);--spectrum-button-primary-s-padding-left:var(
--spectrum-alias-item-rounded-workflow-padding-left-s
);--spectrum-button-primary-s-border-radius:var(
--spectrum-alias-item-rounded-border-radius-s
);--spectrum-button-primary-s-min-width:var(
--spectrum-global-dimension-size-675
);--spectrum-button-primary-s-textonly-padding-left:var(
--spectrum-alias-item-rounded-padding-s
);--spectrum-button-primary-s-textonly-padding-right:var(
--spectrum-alias-item-rounded-padding-s
);--spectrum-button-primary-s-text-padding-top:var(
--spectrum-alias-item-text-padding-top-s
);--spectrum-button-primary-m-min-width:undefined;--spectrum-button-primary-m-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-button-primary-m-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-button-primary-m-border-size:var(
--spectrum-global-dimension-size-0
);--spectrum-button-primary-m-text-size:var(
--spectrum-alias-item-text-size-s
);--spectrum-button-primary-m-text-padding-top:var(
--spectrum-alias-item-text-padding-top-m
);--spectrum-button-primary-m-height:var(--spectrum-alias-item-height-m);--spectrum-button-primary-m-icon-gap:var(
--spectrum-global-dimension-size-75
);--spectrum-button-primary-m-padding-left:var(
--spectrum-alias-item-rounded-workflow-padding-left-m
);--spectrum-button-primary-m-border-radius:var(
--spectrum-alias-item-rounded-border-radius-m
);--spectrum-button-primary-m-textonly-padding-left:var(
--spectrum-alias-item-rounded-padding-m
);--spectrum-button-primary-m-textonly-padding-right:var(
--spectrum-alias-item-rounded-padding-m
);--spectrum-button-primary-l-focus-ring-size-key-focus:var(
--spectrum-alias-focus-ring-size
);--spectrum-button-primary-l-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-button-primary-l-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-button-primary-l-border-size:var(
--spectrum-global-dimension-size-0
);--spectrum-button-primary-l-text-size:var(
--spectrum-alias-item-text-size-m
);--spectrum-button-primary-l-text-padding-top:var(
--spectrum-alias-item-text-padding-top-l
);--spectrum-button-primary-l-icon-gap:var(
--spectrum-alias-item-workflow-icon-gap-l
);--spectrum-button-primary-l-height:var(--spectrum-alias-item-height-l);--spectrum-button-primary-l-padding-left:var(
--spectrum-alias-item-rounded-workflow-padding-left-l
);--spectrum-button-primary-l-border-radius:var(
--spectrum-alias-item-rounded-border-radius-l
);--spectrum-button-primary-l-min-width:var(
--spectrum-global-dimension-size-1125
);--spectrum-button-primary-l-textonly-padding-left:var(
--spectrum-alias-item-rounded-padding-l
);--spectrum-button-primary-l-textonly-padding-right:var(
--spectrum-alias-item-rounded-padding-l
);--spectrum-button-primary-xl-focus-ring-size-key-focus:var(
--spectrum-alias-focus-ring-size
);--spectrum-button-primary-xl-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-button-primary-xl-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-button-primary-xl-border-size:var(
--spectrum-global-dimension-size-0
);--spectrum-button-primary-xl-icon-gap:var(
--spectrum-alias-item-workflow-icon-gap-l
);--spectrum-button-primary-xl-text-size:var(
--spectrum-alias-item-text-size-l
);--spectrum-button-primary-xl-text-padding-top:var(
--spectrum-alias-item-text-padding-top-xl
);--spectrum-button-primary-xl-height:var(--spectrum-alias-item-height-xl);--spectrum-button-primary-xl-padding-left:var(
--spectrum-alias-item-rounded-workflow-padding-left-xl
);--spectrum-button-primary-xl-border-radius:var(
--spectrum-alias-item-rounded-border-radius-xl
);--spectrum-button-primary-xl-min-width:var(
--spectrum-global-dimension-size-1250
);--spectrum-button-primary-xl-textonly-padding-left:var(
--spectrum-alias-item-rounded-padding-xl
);--spectrum-button-primary-xl-textonly-padding-right:var(
--spectrum-alias-item-rounded-padding-xl
);--spectrum-button-cta-m-background-color:var(
--spectrum-semantic-cta-color-background-default
);--spectrum-button-cta-m-border-color:var(
--spectrum-semantic-cta-color-background-default
);--spectrum-button-cta-m-text-color:var(
--spectrum-global-color-static-white
);--spectrum-button-cta-m-background-color-hover:var(
--spectrum-semantic-cta-color-background-hover
);--spectrum-button-cta-m-border-color-hover:var(
--spectrum-semantic-cta-color-background-hover
);--spectrum-button-cta-m-text-color-hover:var(
--spectrum-global-color-static-white
);--spectrum-button-cta-m-background-color-key-focus:var(
--spectrum-semantic-cta-color-background-hover
);--spectrum-button-cta-m-border-color-key-focus:var(
--spectrum-semantic-cta-color-background-hover
);--spectrum-button-cta-m-text-color-key-focus:var(
--spectrum-global-color-static-white
);--spectrum-button-cta-m-background-color-down:var(
--spectrum-semantic-cta-color-background-down
);--spectrum-button-cta-m-border-color-down:var(
--spectrum-semantic-cta-color-background-down
);--spectrum-button-cta-m-text-color-down:var(
--spectrum-global-color-static-white
);--spectrum-button-cta-m-background-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-cta-m-border-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-cta-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-button-primary-m-background-color:var(
--spectrum-global-color-gray-400
);--spectrum-button-primary-m-border-color:var(
--spectrum-global-color-gray-400
);--spectrum-button-primary-m-text-color:var(
--spectrum-alias-text-color-primary
);--spectrum-button-primary-m-background-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-button-primary-m-border-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-button-primary-m-text-color-hover:var(
--spectrum-alias-text-color-primary
);--spectrum-button-primary-m-background-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-button-primary-m-border-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-button-primary-m-text-color-key-focus:var(
--spectrum-alias-text-color-primary
);--spectrum-button-primary-m-background-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-button-primary-m-border-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-button-primary-m-text-color-down:var(
--spectrum-alias-text-color-primary
);--spectrum-button-primary-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-button-secondary-m-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-button-secondary-m-border-color:var(
--spectrum-global-color-gray-300
);--spectrum-button-secondary-m-text-color:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-secondary-m-background-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-button-secondary-m-border-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-button-secondary-m-text-color-hover:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-secondary-m-background-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-button-secondary-m-border-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-button-secondary-m-text-color-key-focus:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-secondary-m-background-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-button-secondary-m-border-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-button-secondary-m-text-color-down:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-primary-m-background-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-primary-m-border-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-secondary-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-button-warning-m-background-color:var(
--spectrum-global-color-red-500
);--spectrum-button-warning-m-border-color:var(
--spectrum-global-color-red-500
);--spectrum-button-warning-m-text-color:var(
--spectrum-global-color-static-white
);--spectrum-button-warning-m-background-color-hover:var(
--spectrum-global-color-red-400
);--spectrum-button-warning-m-border-color-hover:var(
--spectrum-global-color-red-400
);--spectrum-button-warning-m-text-color-hover:var(
--spectrum-global-color-static-white
);--spectrum-button-warning-m-background-color-key-focus:var(
--spectrum-global-color-red-400
);--spectrum-button-warning-m-border-color-key-focus:var(
--spectrum-global-color-red-400
);--spectrum-button-warning-m-text-color-key-focus:var(
--spectrum-global-color-static-white
);--spectrum-button-warning-m-background-color-down:var(
--spectrum-global-color-red-600
);--spectrum-button-warning-m-border-color-down:var(
--spectrum-global-color-red-600
);--spectrum-button-warning-m-text-color-down:var(
--spectrum-global-color-static-white
);--spectrum-button-warning-m-background-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-warning-m-border-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-warning-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-button-over-background-m-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-over-background-m-border-color:var(
--spectrum-global-color-static-white
);--spectrum-button-over-background-m-text-color:var(
--spectrum-global-color-static-white
);--spectrum-button-over-background-m-background-color-hover:var(
--spectrum-global-color-static-white
);--spectrum-button-over-background-m-border-color-hover:var(
--spectrum-global-color-static-white
);--spectrum-alias-focus-ring-size:var(
--spectrum-global-dimension-static-size-25
);--spectrum-button-over-background-m-border-color-key-focus:var(
--spectrum-global-color-static-white
);--spectrum-button-over-background-m-background-color-down:var(
--spectrum-global-color-static-white
);--spectrum-button-over-background-m-border-color-down:var(
--spectrum-global-color-static-white
);--spectrum-button-over-background-m-background-color-disabled:hsla(0,0%,100%,.1);--spectrum-button-over-background-m-border-color-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-over-background-m-text-color-disabled:hsla(0,0%,100%,.35);--spectrum-button-quiet-over-background-m-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-quiet-over-background-m-border-color:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-over-background-m-text-color:var(
--spectrum-global-color-static-white
);--spectrum-button-quiet-over-background-m-background-color-hover:hsla(0,0%,100%,.1);--spectrum-button-quiet-over-background-m-border-color-hover:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-over-background-m-text-color-hover:var(
--spectrum-global-color-static-white
);--spectrum-button-quiet-over-background-m-background-color-down:hsla(0,0%,100%,.2);--spectrum-button-quiet-over-background-m-border-color-down:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-over-background-m-text-color-down:var(
--spectrum-global-color-static-white
);--spectrum-button-quiet-over-background-m-background-color-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-quiet-over-background-m-border-color-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-over-background-m-text-color-disabled:hsla(0,0%,100%,.15);--spectrum-button-quiet-primary-m-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-quiet-primary-m-border-color:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-primary-m-text-color:var(
--spectrum-alias-text-color-primary
);--spectrum-button-quiet-primary-m-background-color-hover:var(
--spectrum-global-color-gray-200
);--spectrum-button-quiet-primary-m-border-color-hover:var(
--spectrum-global-color-gray-200
);--spectrum-button-quiet-primary-m-text-color-hover:var(
--spectrum-alias-text-color-primary
);--spectrum-button-quiet-primary-m-background-color-key-focus:var(
--spectrum-global-color-gray-200
);--spectrum-button-quiet-primary-m-border-color-key-focus:var(
--spectrum-global-color-gray-200
);--spectrum-button-quiet-primary-m-text-color-key-focus:var(
--spectrum-alias-text-color-primary
);--spectrum-button-quiet-primary-m-background-color-down:var(
--spectrum-global-color-gray-300
);--spectrum-button-quiet-primary-m-border-color-down:var(
--spectrum-global-color-gray-300
);--spectrum-button-quiet-primary-m-text-color-down:var(
--spectrum-alias-text-color-primary
);--spectrum-button-quiet-primary-m-background-color-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-quiet-primary-m-border-color-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-primary-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-button-quiet-secondary-m-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-quiet-secondary-m-border-color:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-secondary-m-text-color:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-quiet-secondary-m-background-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-button-quiet-secondary-m-border-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-button-quiet-secondary-m-text-color-hover:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-quiet-secondary-m-background-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-button-quiet-secondary-m-border-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-button-quiet-secondary-m-text-color-key-focus:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-quiet-secondary-m-background-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-button-quiet-secondary-m-border-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-button-quiet-secondary-m-text-color-down:var(
--spectrum-alias-text-color-secondary
);--spectrum-button-quiet-secondary-m-background-color-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-quiet-secondary-m-border-color-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-secondary-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-button-quiet-warning-m-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-button-quiet-warning-m-border-color:var(
--spectrum-alias-border-color-transparent
);--spectrum-button-quiet-warning-m-text-color:var(
--spectrum-global-color-red-500
);--spectrum-button-quiet-warning-m-background-color-hover:var(
--spectrum-alias-cover-color-100
);--spectrum-button-quiet-warning-m-border-color-hover:var(
--spectrum-alias-cover-color-100
);--spectrum-button-quiet-warning-m-text-color-hover:var(
--spectrum-global-color-red-500
);--spectrum-button-quiet-warning-m-background-color-key-focus:var(
--spectrum-alias-cover-color-100
);--spectrum-button-quiet-warning-m-border-color-key-focus:var(
--spectrum-alias-cover-color-100
);--spectrum-button-quiet-warning-m-text-color-key-focus:var(
--spectrum-global-color-red-500
);--spectrum-button-quiet-warning-m-background-color-down:var(
--spectrum-alias-cover-color-200
);--spectrum-button-quiet-warning-m-border-color-down:var(
--spectrum-alias-cover-color-200
);--spectrum-button-quiet-warning-m-text-color-down:var(
--spectrum-global-color-red-500
);--spectrum-button-quiet-warning-m-background-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-quiet-warning-m-border-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-button-quiet-warning-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
)}:host{--spectrum-button-line-height:1.3;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;border-style:solid;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);justify-content:center;line-height:var(--spectrum-button-line-height);overflow:visible;position:relative;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:0}:host(::-moz-focus-inner){border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}:host(:disabled){cursor:default}:host:after{border-radius:calc(var(--spectrum-button-primary-border-radius) + var(--spectrum-alias-focus-ring-gap,var(--spectrum-global-dimension-static-size-25)));bottom:0;content:"";display:block;left:0;margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1);position:absolute;right:0;top:0;transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}:host(.focus-visible):after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-2)}:host(:focus-visible):after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-2)}:host{background-color:var(
--spectrum-clearbutton-medium-background-color,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-clearbutton-medium-icon-color,var(--spectrum-alias-icon-color)
)}:host(:hover){background-color:var(
--spectrum-clearbutton-medium-background-color-hover,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-clearbutton-medium-icon-color-hover,var(--spectrum-alias-icon-color-hover)
)}:host([active]){background-color:var(
--spectrum-clearbutton-medium-background-color-down,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-clearbutton-medium-icon-color-down,var(--spectrum-alias-icon-color-down)
)}:host(.focus-visible){background-color:var(
--spectrum-clearbutton-medium-background-color-key-focus,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-clearbutton-medium-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}:host(:focus-visible){background-color:var(
--spectrum-clearbutton-medium-background-color-key-focus,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-clearbutton-medium-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}:host(:disabled),:host([disabled]){background-color:var(
--spectrum-clearbutton-medium-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-clearbutton-medium-icon-color-disabled,var(--spectrum-alias-icon-color-disabled)
)}:host{border:none;border-radius:100%;height:var(
--spectrum-clearbutton-medium-height,var(--spectrum-alias-single-line-height)
);margin:0;padding:0;width:var(
--spectrum-clearbutton-medium-width,var(--spectrum-alias-single-line-height)
)}:host>.icon{margin:0 auto}:host([variant=overBackground].focus-visible):after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}:host([variant=overBackground]:focus-visible):after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){:host>.icon{margin:0}}:host([small]){height:var(
--spectrum-clearbutton-small-height,var(--spectrum-global-dimension-size-300)
);width:var(
--spectrum-clearbutton-small-width,var(--spectrum-global-dimension-size-300)
)}:host([variant=overBackground]){background-color:var(
--spectrum-button-quiet-over-background-m-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-quiet-over-background-m-border-color,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-quiet-over-background-m-text-color,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground]:hover){background-color:var(
--spectrum-button-quiet-over-background-m-background-color-hover,hsla(0,0%,100%,.1)
);border-color:var(
--spectrum-button-quiet-over-background-m-border-color-hover,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-quiet-over-background-m-text-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground].focus-visible){background-color:var(
--spectrum-button-quiet-over-background-m-background-color-hover,hsla(0,0%,100%,.1)
);border-color:var(
--spectrum-button-quiet-over-background-m-border-color-hover,var(--spectrum-alias-border-color-transparent)
);box-shadow:none;color:var(
--spectrum-button-quiet-over-background-m-text-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground]:focus-visible){background-color:var(
--spectrum-button-quiet-over-background-m-background-color-hover,hsla(0,0%,100%,.1)
);border-color:var(
--spectrum-button-quiet-over-background-m-border-color-hover,var(--spectrum-alias-border-color-transparent)
);box-shadow:none;color:var(
--spectrum-button-quiet-over-background-m-text-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground].focus-visible):after{box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-button-over-background-m-border-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground]:focus-visible):after{box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-button-over-background-m-border-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][active]){background-color:var(
--spectrum-button-quiet-over-background-m-background-color-down,hsla(0,0%,100%,.2)
);border-color:var(
--spectrum-button-quiet-over-background-m-border-color-down,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-quiet-over-background-m-text-color-down,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground]:disabled),:host([variant=overBackground][disabled]){background-color:var(
--spectrum-button-quiet-over-background-m-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-quiet-over-background-m-border-color-disabled,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-quiet-over-background-m-text-color-disabled,hsla(0,0%,100%,.15)
)}`;

const Cross75Icon=()=>{return tag$1`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" aria-hidden="true" fill="currentColor"><path d="M5.188 4l2.14-2.14A.84.84 0 106.141.672L4 2.812 1.86.672A.84.84 0 00.672 1.86L2.812 4 .672 6.14A.84.84 0 101.86 7.328L4 5.188l2.14 2.14A.84.84 0 107.328 6.14z"/></svg>`;};

/**
 * @element sp-icon-cross75
 */class IconCross75 extends IconBase{render(){setCustomTemplateLiteralTag$1(p);return Cross75Icon();}}

iliadCustomElementsDefine('sp-icon-cross75',IconCross75);

const styles$7=r`:host{--spectrum-alias-ui-icon-triplegripper-size-100-height:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-ui-icon-doublegripper-size-100-width:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-ui-icon-singlegripper-size-100-width:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-ui-icon-cornertriangle-size-75:var(
--spectrum-global-dimension-size-65
);--spectrum-alias-ui-icon-cornertriangle-size-200:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-ui-icon-asterisk-size-75:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-asterisk-size-100:var(
--spectrum-global-dimension-size-100
)}@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Cross75{height:var(--spectrum-alias-ui-icon-cross-size-75);width:var(
--spectrum-alias-ui-icon-cross-size-75
)}.spectrum-UIIcon-Cross100{height:var(--spectrum-alias-ui-icon-cross-size-100);width:var(
--spectrum-alias-ui-icon-cross-size-100
)}.spectrum-UIIcon-Cross200{height:var(--spectrum-alias-ui-icon-cross-size-200);width:var(
--spectrum-alias-ui-icon-cross-size-200
)}.spectrum-UIIcon-Cross300{height:var(--spectrum-alias-ui-icon-cross-size-300);width:var(
--spectrum-alias-ui-icon-cross-size-300
)}.spectrum-UIIcon-Cross400{height:var(--spectrum-alias-ui-icon-cross-size-400);width:var(
--spectrum-alias-ui-icon-cross-size-400
)}.spectrum-UIIcon-Cross500{height:var(--spectrum-alias-ui-icon-cross-size-500);width:var(
--spectrum-alias-ui-icon-cross-size-500
)}.spectrum-UIIcon-Cross600{height:var(--spectrum-alias-ui-icon-cross-size-600);width:var(
--spectrum-alias-ui-icon-cross-size-600
)}`;

/**
 * @element sp-clear-button
 *
 * @slot - text label of the Clear Button
 * @slot icon - The icon to use for Clear Button
 */class ClearButton extends StyledButton{constructor(){super(...arguments);/**
         * The visual variant to apply to this button.
         */this.variant='';}static get styles(){return [...super.styles,styles$8,styles$7];}get buttonContent(){return [p`<sp-icon-cross75 slot="icon" class="icon spectrum-UIIcon-Cross75"></sp-icon-cross75>`];}}__decorate([e({reflect:true})],ClearButton.prototype,"variant",void 0);

const styles$6=r`:host{--spectrum-alias-body-text-font-family:var(
--spectrum-global-font-family-base
);--spectrum-actionbutton-border-size:var(--spectrum-alias-border-size-s;);--spectrum-actionbutton-s-quiet-border-size:var(
--spectrum-alias-border-size-s
);--spectrum-actionbutton-s-quiet-border-radius:var(
--spectrum-alias-border-radius-medium
);--spectrum-actionbutton-s-quiet-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-actionbutton-s-quiet-text-size:var(
--spectrum-alias-font-size-s
);--spectrum-actionbutton-s-border-size:var(--spectrum-alias-border-size-s);--spectrum-actionbutton-s-border-radius:var(
--spectrum-alias-border-radius-medium
);--spectrum-actionbutton-s-min-width:var(--spectrum-alias-control-height-s);--spectrum-actionbutton-s-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-actionbutton-s-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-actionbutton-s-text-size:var(--spectrum-alias-font-size-s);--spectrum-actionbutton-s-icon-gap:var(
--spectrum-alias-item-workflow-icon-gap-s
);--spectrum-actionbutton-s-height:var(--spectrum-alias-item-height-s);--spectrum-actionbutton-s-padding-left:var(--spectrum-alias-padding-s);--spectrum-actionbutton-s-icononly-padding-left:var(
--spectrum-alias-padding-s
);--spectrum-actionbutton-s-icononly-padding-right:var(
--spectrum-alias-padding-s
);--spectrum-actionbutton-s-textonly-padding-left:var(
--spectrum-alias-padding-s
);--spectrum-actionbutton-s-textonly-padding-right:var(
--spectrum-alias-padding-s
);--spectrum-actionbutton-m-quiet-border-size:var(
--spectrum-alias-border-size-s
);--spectrum-actionbutton-m-quiet-border-radius:var(
--spectrum-alias-border-radius-medium
);--spectrum-actionbutton-m-quiet-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-actionbutton-m-quiet-text-size:var(
--spectrum-alias-font-size-m
);--spectrum-actionbutton-m-border-size:var(--spectrum-alias-border-size-s);--spectrum-actionbutton-m-border-radius:var(
--spectrum-alias-border-radius-medium
);--spectrum-actionbutton-m-min-width:var(--spectrum-alias-control-height-m);--spectrum-actionbutton-m-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-actionbutton-m-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-actionbutton-m-text-size:var(--spectrum-alias-font-size-m);--spectrum-actionbutton-m-height:var(--spectrum-alias-item-height-m);--spectrum-actionbutton-m-icon-gap:var(
--spectrum-alias-item-workflow-icon-gap-s
);--spectrum-actionbutton-m-padding-left:var(--spectrum-alias-padding-m);--spectrum-actionbutton-m-icononly-padding-left:var(
--spectrum-alias-padding-m
);--spectrum-actionbutton-m-icononly-padding-right:var(
--spectrum-alias-padding-m
);--spectrum-actionbutton-m-textonly-padding-left:var(
--spectrum-alias-padding-m
);--spectrum-actionbutton-m-textonly-padding-right:var(
--spectrum-alias-padding-m
);--spectrum-actionbutton-l-quiet-border-size:var(
--spectrum-alias-border-size-s
);--spectrum-actionbutton-l-quiet-border-radius:var(
--spectrum-alias-border-radius-medium
);--spectrum-actionbutton-l-quiet-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-actionbutton-l-quiet-text-size:var(
--spectrum-alias-font-size-l
);--spectrum-actionbutton-l-border-size:var(--spectrum-alias-border-size-s);--spectrum-actionbutton-l-border-radius:var(
--spectrum-alias-border-radius-medium
);--spectrum-actionbutton-l-min-width:var(--spectrum-alias-control-height-l);--spectrum-actionbutton-l-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-actionbutton-l-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-actionbutton-l-text-size:var(--spectrum-alias-font-size-l);--spectrum-actionbutton-l-icon-gap:var(
--spectrum-alias-item-workflow-icon-gap-l
);--spectrum-actionbutton-l-height:var(--spectrum-alias-item-height-l);--spectrum-actionbutton-l-padding-left:var(--spectrum-alias-padding-l);--spectrum-actionbutton-l-icononly-padding-left:var(
--spectrum-alias-padding-l
);--spectrum-actionbutton-l-icononly-padding-right:var(
--spectrum-alias-padding-l
);--spectrum-actionbutton-l-textonly-padding-left:var(
--spectrum-alias-padding-l
);--spectrum-actionbutton-l-textonly-padding-right:var(
--spectrum-alias-padding-l
);--spectrum-actionbutton-xl-quiet-border-size:var(
--spectrum-alias-border-size-s
);--spectrum-actionbutton-xl-quiet-border-radius:var(
--spectrum-alias-border-radius-medium
);--spectrum-actionbutton-xl-quiet-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-actionbutton-xl-quiet-text-size:var(
--spectrum-alias-font-size-xl
);--spectrum-actionbutton-xl-border-size:var(--spectrum-alias-border-size-s);--spectrum-actionbutton-xl-border-radius:var(
--spectrum-alias-border-radius-medium
);--spectrum-actionbutton-xl-min-width:var(
--spectrum-alias-control-height-xl
);--spectrum-actionbutton-xl-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-actionbutton-xl-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-actionbutton-xl-icon-gap:var(
--spectrum-alias-item-workflow-icon-gap-xl
);--spectrum-actionbutton-xl-text-size:var(--spectrum-alias-font-size-xl);--spectrum-actionbutton-xl-height:var(--spectrum-alias-item-height-xl);--spectrum-actionbutton-xl-padding-left:var(--spectrum-alias-padding-xl);--spectrum-actionbutton-xl-icononly-padding-left:var(
--spectrum-alias-padding-xl
);--spectrum-actionbutton-xl-icononly-padding-right:var(
--spectrum-alias-padding-xl
);--spectrum-actionbutton-xl-textonly-padding-left:var(
--spectrum-alias-padding-xl
);--spectrum-actionbutton-xl-textonly-padding-right:var(
--spectrum-alias-padding-xl
);--spectrum-actionbutton-m-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-actionbutton-m-border-color:var(
--spectrum-global-color-gray-300
);--spectrum-actionbutton-m-text-color:var(
--spectrum-alias-text-color-primary
);--spectrum-actionbutton-m-icon-color:var(
--spectrum-alias-icon-color-primary
);--spectrum-actionbutton-m-hold-icon-color:var(
--spectrum-alias-icon-color-primary
);--spectrum-actionbutton-m-background-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-actionbutton-m-border-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-actionbutton-m-text-color-hover:var(
--spectrum-alias-text-color-primary
);--spectrum-actionbutton-m-icon-color-hover:var(
--spectrum-alias-icon-color-primary
);--spectrum-actionbutton-m-hold-icon-color-hover:var(
--spectrum-alias-icon-color-primary
);--spectrum-actionbutton-m-background-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-actionbutton-m-border-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-actionbutton-m-quiet-border-size-key-focus:var(
--spectrum-alias-border-size-s
);--spectrum-actionbutton-m-text-color-key-focus:var(
--spectrum-alias-text-color-primary
);--spectrum-actionbutton-m-icon-color-key-focus:var(
--spectrum-alias-icon-color-primary
);--spectrum-actionbutton-m-hold-icon-color-key-focus:var(
--spectrum-alias-icon-color-primary
);--spectrum-actionbutton-m-background-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-actionbutton-m-border-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-actionbutton-m-text-color-down:var(
--spectrum-alias-text-color-primary
);--spectrum-actionbutton-m-hold-icon-color-down:var(
--spectrum-alias-icon-color-primary
);--spectrum-actionbutton-m-background-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-actionbutton-m-border-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-actionbutton-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-actionbutton-m-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-actionbutton-m-hold-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-actionbutton-m-background-color-selected:var(
--spectrum-global-color-gray-100
);--spectrum-actionbutton-m-border-color-selected:var(
--spectrum-alias-border-color-light
);--spectrum-actionbutton-m-default-border-color-selected:var(
--spectrum-alias-border-color-light
);--spectrum-actionbutton-m-text-color-selected:var(
--spectrum-global-color-static-primary
);--spectrum-actionbutton-m-icon-color-selected:var(
--spectrum-global-color-static-primary
);--spectrum-actionbutton-m-background-color-selected-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-actionbutton-m-border-color-selected-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-actionbutton-m-text-color-selected-key-focus:var(
--spectrum-global-color-static-primary
);--spectrum-actionbutton-m-icon-color-selected-key-focus:var(
--spectrum-global-color-static-primary
);--spectrum-actionbutton-m-background-color-selected-hover:var(
--spectrum-global-color-gray-400
);--spectrum-actionbutton-m-border-color-selected-hover:var(
--spectrum-alias-border-color-light
);--spectrum-actionbutton-m-text-color-selected-hover:var(
--spectrum-global-color-static-primary
);--spectrum-actionbutton-m-icon-color-selected-hover:var(
--spectrum-global-color-static-primary
);--spectrum-actionbutton-m-background-color-selected-down:var(
--spectrum-global-color-gray-500
);--spectrum-actionbutton-m-border-color-selected-down:var(
--spectrum-alias-border-color-light
);--spectrum-actionbutton-m-text-color-selected-down:var(
--spectrum-global-color-static-primary
);--spectrum-actionbutton-m-icon-color-selected-down:var(
--spectrum-global-color-static-primary
);--spectrum-actionbutton-m-background-color-selected-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-actionbutton-m-border-color-selected-disabled:var(
--spectrum-alias-border-color-light
);--spectrum-actionbutton-m-text-color-selected-disabled:var(
--spectrum-global-color-static-primary-opacity-300
);--spectrum-actionbutton-m-icon-color-selected-disabled:var(
--spectrum-global-color-static-primary-opacity-300
);--spectrum-actionbutton-m-emphasized-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-actionbutton-m-emphasized-border-color:var(
--spectrum-global-color-gray-300
);--spectrum-actionbutton-m-emphasized-text-color:var(
--spectrum-alias-text-color-primary
);--spectrum-actionbutton-m-emphasized-icon-color:var(
--spectrum-alias-icon-color-primary
);--spectrum-actionbutton-m-emphasized-hold-icon-color:var(
--spectrum-alias-icon-color-primary
);--spectrum-actionbutton-m-emphasized-hold-icon-color-selected:var(
--spectrum-alias-icon-color-primary
);--spectrum-actionbutton-m-emphasized-text-color-selected-hover:var(
--spectrum-alias-icon-color-primary
);--spectrum-actionbutton-m-emphasized-background-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-actionbutton-m-emphasized-border-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-actionbutton-m-emphasized-text-color-hover:var(
--spectrum-alias-text-color-primary
);--spectrum-actionbutton-m-emphasized-icon-color-hover:var(
--spectrum-alias-icon-color-primary
);--spectrum-actionbutton-m-emphasized-hold-icon-color-hover:var(
--spectrum-alias-icon-color-primary
);--spectrum-actionbutton-m-emphasized-background-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-actionbutton-m-emphasized-border-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-actionbutton-m-emphasized-text-color-key-focus:var(
--spectrum-alias-text-color-primary
);--spectrum-actionbutton-m-emphasized-icon-color-key-focus:var(
--spectrum-alias-icon-color-primary
);--spectrum-actionbutton-m-emphasized-hold-icon-color-key-focus:var(
--spectrum-alias-icon-color-primary
);--spectrum-actionbutton-m-emphasized-background-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-actionbutton-m-emphasized-border-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-actionbutton-m-emphasized-text-color-down:var(
--spectrum-alias-text-color-primary
);--spectrum-actionbutton-m-emphasized-hold-icon-color-down:var(
--spectrum-alias-text-color-primary
);--spectrum-actionbutton-m-emphasized-background-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-actionbutton-m-emphasized-border-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-actionbutton-m-emphasized-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-actionbutton-m-emphasized-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-actionbutton-m-emphasized-hold-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-actionbutton-m-emphasized-background-color-selected:var(
--spectrum-semantic-cta-color-background-default
);--spectrum-actionbutton-m-emphasized-border-color-selected:var(
--spectrum-semantic-cta-color-background-default
);--spectrum-actionbutton-m-emphasized-text-color-selected:var(
--spectrum-global-color-static-white
);--spectrum-actionbutton-m-emphasized-icon-color-selected:var(
--spectrum-global-color-static-white
);--spectrum-actionbutton-m-emphasized-background-color-selected-key-focus:var(
--spectrum-semantic-cta-color-background-key-focus
);--spectrum-actionbutton-m-emphasized-border-color-selected-key-focus:var(
--spectrum-semantic-cta-color-background-key-focus
);--spectrum-actionbutton-m-emphasized-text-color-selected-key-focus:var(
--spectrum-global-color-static-white
);--spectrum-actionbutton-m-emphasized-icon-color-selected-key-focus:var(
--spectrum-global-color-static-white
);--spectrum-actionbutton-m-emphasized-background-color-selected-hover:var(
--spectrum-semantic-cta-color-background-hover
);--spectrum-actionbutton-m-emphasized-border-color-selected-hover:var(
--spectrum-semantic-cta-color-background-hover
);--spectrum-actionbutton-m-emphasized-text-color-selected-hover:var(
--spectrum-global-color-static-white
);--spectrum-actionbutton-m-emphasized-icon-color-selected-hover:var(
--spectrum-global-color-static-white
);--spectrum-actionbutton-m-emphasized-background-color-selected-down:var(
--spectrum-semantic-cta-color-background-down
);--spectrum-actionbutton-m-emphasized-border-color-selected-down:var(
--spectrum-semantic-cta-color-background-down
);--spectrum-actionbutton-m-emphasized-text-color-selected-down:var(
--spectrum-global-color-static-white
);--spectrum-actionbutton-m-emphasized-icon-color-selected-down:var(
--spectrum-global-color-static-white
);--spectrum-actionbutton-m-emphasized-background-color-selected-disabled:var(
--spectrum-semantic-cta-color-background-disabled
);--spectrum-actionbutton-m-emphasized-border-color-selected-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-actionbutton-m-emphasized-text-color-selected-disabled:var(
--spectrum-global-color-static-white
);--spectrum-actionbutton-m-emphasized-icon-color-selected-disabled:var(
--spectrum-global-color-static-white
);--spectrum-actionbutton-m-quiet-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-actionbutton-m-quiet-border-color:var(
--spectrum-alias-border-color-transparent
);--spectrum-actionbutton-m-quiet-text-color:var(
--spectrum-alias-text-color-primary
);--spectrum-actionbutton-m-quiet-background-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-actionbutton-m-quiet-border-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-actionbutton-m-quiet-text-color-hover:var(
--spectrum-alias-text-color-primary
);--spectrum-actionbutton-m-quiet-background-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-actionbutton-m-quiet-border-color-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-actionbutton-m-quiet-text-color-key-focus:var(
--spectrum-alias-text-color-primary
);--spectrum-actionbutton-m-quiet-background-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-actionbutton-m-quiet-border-color-down:var(
--spectrum-global-color-gray-500
);--spectrum-actionbutton-m-quiet-text-color-down:var(
--spectrum-alias-text-color-primary
);--spectrum-actionbutton-m-quiet-background-color-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-actionbutton-m-quiet-border-color-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-actionbutton-m-quiet-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-actionbutton-m-quiet-background-color-selected:var(
--spectrum-global-color-gray-100
);--spectrum-actionbutton-m-quiet-border-color-selected:var(
--spectrum-global-color-gray-100
);--spectrum-actionbutton-m-quiet-text-color-selected:var(
--spectrum-global-color-static-primary
);--spectrum-actionbutton-m-quiet-background-color-selected-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-actionbutton-m-quiet-border-color-selected-key-focus:var(
--spectrum-global-color-gray-400
);--spectrum-actionbutton-m-quiet-text-color-selected-key-focus:var(
--spectrum-global-color-static-primary
);--spectrum-actionbutton-m-quiet-background-color-selected-hover:var(
--spectrum-global-color-gray-400
);--spectrum-actionbutton-m-quiet-border-color-selected-hover:var(
--spectrum-global-color-gray-400
);--spectrum-actionbutton-m-quiet-text-color-selected-hover:var(
--spectrum-global-color-static-primary
);--spectrum-actionbutton-m-quiet-background-color-selected-down:var(
--spectrum-global-color-gray-500
);--spectrum-actionbutton-m-quiet-border-color-selected-down:var(
--spectrum-global-color-gray-500
);--spectrum-actionbutton-m-quiet-text-color-selected-down:var(
--spectrum-global-color-static-primary
);--spectrum-actionbutton-m-quiet-background-color-selected-disabled:var(
--spectrum-global-color-gray-100
);--spectrum-actionbutton-m-quiet-border-color-selected-disabled:var(
--spectrum-global-color-gray-100
);--spectrum-actionbutton-m-quiet-text-color-selected-disabled:var(
--spectrum-global-color-static-primary-opacity-300
)}:host{--spectrum-button-line-height:1.3;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;border-style:solid;box-sizing:border-box;cursor:pointer;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);justify-content:center;line-height:var(--spectrum-button-line-height);margin:0;overflow:visible;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:0}:host(::-moz-focus-inner){border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}:host(:disabled){cursor:default}::slotted([slot=icon]){max-height:100%}#label{align-self:center;justify-self:center;text-align:center}#label:empty{display:none}:host([size=s]){--spectrum-actionbutton-quiet-border-size:var(
--spectrum-actionbutton-s-quiet-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-border-radius:var(
--spectrum-actionbutton-s-quiet-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-actionbutton-quiet-text-font-weight:var(
--spectrum-actionbutton-s-quiet-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-text-size:var(
--spectrum-actionbutton-s-quiet-text-size,var(--spectrum-alias-item-text-size-s)
);--spectrum-actionbutton-border-size:var(
--spectrum-actionbutton-s-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-border-radius:var(
--spectrum-actionbutton-s-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-actionbutton-min-width:var(
--spectrum-actionbutton-s-min-width,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-text-font-weight:var(
--spectrum-actionbutton-s-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-text-line-height:var(
--spectrum-actionbutton-s-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-text-size:var(
--spectrum-actionbutton-s-text-size,var(--spectrum-alias-item-text-size-s)
);--spectrum-actionbutton-icon-gap:var(
--spectrum-actionbutton-s-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-s)
);--spectrum-actionbutton-height:var(
--spectrum-actionbutton-s-height,var(--spectrum-alias-item-height-s)
);--spectrum-actionbutton-padding-left:var(
--spectrum-actionbutton-s-padding-left,var(--spectrum-alias-item-workflow-padding-left-s)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-s-icononly-padding-left,var(--spectrum-alias-item-icononly-padding-s)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-s-icononly-padding-right,var(--spectrum-alias-item-icononly-padding-s)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-s-textonly-padding-left,var(--spectrum-alias-item-padding-s)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-s-textonly-padding-right,var(--spectrum-alias-item-padding-s)
);--spectrum-actionbutton-hold-icon-padding-bottom:var(
--spectrum-global-dimension-size-25
);--spectrum-actionbutton-hold-icon-padding-right:var(
--spectrum-global-dimension-size-25
)}:host([size=m]){--spectrum-actionbutton-quiet-border-size:var(
--spectrum-actionbutton-m-quiet-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-border-radius:var(
--spectrum-actionbutton-m-quiet-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-actionbutton-quiet-text-font-weight:var(
--spectrum-actionbutton-m-quiet-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-text-size:var(
--spectrum-actionbutton-m-quiet-text-size,var(--spectrum-alias-item-text-size-m)
);--spectrum-actionbutton-border-size:var(
--spectrum-actionbutton-m-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-border-radius:var(
--spectrum-actionbutton-m-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-actionbutton-min-width:var(
--spectrum-actionbutton-m-min-width,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-text-font-weight:var(
--spectrum-actionbutton-m-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-text-line-height:var(
--spectrum-actionbutton-m-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-text-size:var(
--spectrum-actionbutton-m-text-size,var(--spectrum-alias-item-text-size-m)
);--spectrum-actionbutton-height:var(
--spectrum-actionbutton-m-height,var(--spectrum-alias-item-height-m)
);--spectrum-actionbutton-icon-gap:var(
--spectrum-actionbutton-m-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-m)
);--spectrum-actionbutton-padding-left:var(
--spectrum-actionbutton-m-padding-left,var(--spectrum-alias-item-workflow-padding-left-m)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-m-icononly-padding-left,var(--spectrum-alias-item-icononly-padding-m)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-m-icononly-padding-right,var(--spectrum-alias-item-icononly-padding-m)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-m-textonly-padding-left,var(--spectrum-alias-item-padding-m)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-m-textonly-padding-right,var(--spectrum-alias-item-padding-m)
);--spectrum-actionbutton-hold-icon-padding-bottom:var(
--spectrum-global-dimension-size-40
);--spectrum-actionbutton-hold-icon-padding-right:var(
--spectrum-global-dimension-size-40
)}:host([size=l]){--spectrum-actionbutton-quiet-border-size:var(
--spectrum-actionbutton-l-quiet-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-border-radius:var(
--spectrum-actionbutton-l-quiet-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-actionbutton-quiet-text-font-weight:var(
--spectrum-actionbutton-l-quiet-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-text-size:var(
--spectrum-actionbutton-l-quiet-text-size,var(--spectrum-alias-item-text-size-l)
);--spectrum-actionbutton-border-size:var(
--spectrum-actionbutton-l-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-border-radius:var(
--spectrum-actionbutton-l-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-actionbutton-min-width:var(
--spectrum-actionbutton-l-min-width,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-text-font-weight:var(
--spectrum-actionbutton-l-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-text-line-height:var(
--spectrum-actionbutton-l-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-text-size:var(
--spectrum-actionbutton-l-text-size,var(--spectrum-alias-item-text-size-l)
);--spectrum-actionbutton-icon-gap:var(
--spectrum-actionbutton-l-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-l)
);--spectrum-actionbutton-height:var(
--spectrum-actionbutton-l-height,var(--spectrum-alias-item-height-l)
);--spectrum-actionbutton-padding-left:var(
--spectrum-actionbutton-l-padding-left,var(--spectrum-alias-item-workflow-padding-left-l)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-l-icononly-padding-left,var(--spectrum-alias-item-icononly-padding-l)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-l-icononly-padding-right,var(--spectrum-alias-item-icononly-padding-l)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-l-textonly-padding-left,var(--spectrum-alias-item-padding-l)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-l-textonly-padding-right,var(--spectrum-alias-item-padding-l)
);--spectrum-actionbutton-hold-icon-padding-bottom:var(
--spectrum-global-dimension-size-50
);--spectrum-actionbutton-hold-icon-padding-right:var(
--spectrum-global-dimension-size-50
)}:host([size=xl]){--spectrum-actionbutton-quiet-border-size:var(
--spectrum-actionbutton-xl-quiet-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-border-radius:var(
--spectrum-actionbutton-xl-quiet-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-actionbutton-quiet-text-font-weight:var(
--spectrum-actionbutton-xl-quiet-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-text-size:var(
--spectrum-actionbutton-xl-quiet-text-size,var(--spectrum-alias-item-text-size-xl)
);--spectrum-actionbutton-border-size:var(
--spectrum-actionbutton-xl-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-border-radius:var(
--spectrum-actionbutton-xl-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-actionbutton-min-width:var(
--spectrum-actionbutton-xl-min-width,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-text-font-weight:var(
--spectrum-actionbutton-xl-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-text-line-height:var(
--spectrum-actionbutton-xl-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-icon-gap:var(
--spectrum-actionbutton-xl-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-l)
);--spectrum-actionbutton-text-size:var(
--spectrum-actionbutton-xl-text-size,var(--spectrum-alias-item-text-size-xl)
);--spectrum-actionbutton-height:var(
--spectrum-actionbutton-xl-height,var(--spectrum-alias-item-height-xl)
);--spectrum-actionbutton-padding-left:var(
--spectrum-actionbutton-xl-padding-left,var(--spectrum-alias-item-workflow-padding-left-xl)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-xl-icononly-padding-left,var(--spectrum-alias-item-icononly-padding-xl)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-xl-icononly-padding-right,var(--spectrum-alias-item-icononly-padding-xl)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-xl-textonly-padding-left,var(--spectrum-alias-item-padding-xl)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-xl-textonly-padding-right,var(--spectrum-alias-item-padding-xl)
);--spectrum-actionbutton-hold-icon-padding-bottom:var(
--spectrum-global-dimension-size-65
);--spectrum-actionbutton-hold-icon-padding-right:var(
--spectrum-global-dimension-size-65
)}:host{--spectrum-actionbutton-padding-left-adjusted:calc(var(--spectrum-actionbutton-padding-left) - var(--spectrum-actionbutton-border-size));--spectrum-actionbutton-textonly-padding-left-adjusted:calc(var(--spectrum-actionbutton-textonly-padding-left) - var(--spectrum-actionbutton-border-size));--spectrum-actionbutton-textonly-padding-right-adjusted:calc(var(--spectrum-actionbutton-textonly-padding-right) - var(--spectrum-actionbutton-border-size));--spectrum-actionbutton-icononly-padding-left-adjusted:calc(var(--spectrum-actionbutton-icononly-padding-left) - var(--spectrum-actionbutton-border-size));--spectrum-actionbutton-icononly-padding-right-adjusted:calc(var(--spectrum-actionbutton-icononly-padding-right) - var(--spectrum-actionbutton-border-size))}:host([dir=ltr]){padding-left:var(
--spectrum-actionbutton-textonly-padding-left-adjusted
);padding-right:var(--spectrum-actionbutton-textonly-padding-right-adjusted)}:host([dir=rtl]){padding-left:var(--spectrum-actionbutton-textonly-padding-right-adjusted);padding-right:var(
--spectrum-actionbutton-textonly-padding-left-adjusted
)}:host{border-radius:var(--spectrum-actionbutton-border-radius);border-width:var(--spectrum-actionbutton-border-size);font-size:var(--spectrum-actionbutton-text-size);font-weight:var(--spectrum-actionbutton-text-font-weight);height:var(--spectrum-actionbutton-height);line-height:var(--spectrum-actionbutton-text-line-height);min-width:var(--spectrum-actionbutton-min-width);position:relative}:host([dir=ltr]) ::slotted([slot=icon]){margin-left:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted)))}:host([dir=rtl]) ::slotted([slot=icon]){margin-right:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted)))}:host([dir=ltr]) slot[name=icon]+#label{padding-left:var(
--spectrum-actionbutton-icon-gap
)}:host([dir=rtl]) slot[name=icon]+#label{padding-right:var(
--spectrum-actionbutton-icon-gap
)}:host([dir=ltr]) slot[name=icon]+#label{padding-right:0}:host([dir=rtl]) slot[name=icon]+#label{padding-left:0}#hold-affordance+::slotted([slot=icon]),:host([dir]) slot[icon-only] sp-icon,:host([dir]) slot[icon-only]::slotted([slot=icon]){margin-left:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-icononly-padding-left-adjusted)));margin-right:calc(-1*(var(--spectrum-actionbutton-textonly-padding-right-adjusted) - var(--spectrum-actionbutton-icononly-padding-right-adjusted)))}#label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([dir=ltr]) #hold-affordance{right:var(
--spectrum-actionbutton-hold-icon-padding-right
)}:host([dir=rtl]) #hold-affordance{left:var(
--spectrum-actionbutton-hold-icon-padding-right
)}:host([dir=rtl]) #hold-affordance{transform:matrix(-1,0,0,1,0,0)}#hold-affordance{bottom:var(--spectrum-actionbutton-hold-icon-padding-bottom);position:absolute}:host([quiet]){border-radius:var(--spectrum-actionbutton-quiet-border-radius);border-width:var(
--spectrum-actionbutton-quiet-border-size
);font-size:var(--spectrum-actionbutton-quiet-text-size);font-weight:var(--spectrum-actionbutton-quiet-text-font-weight)}:host{--spectrum-actionbutton-m-quiet-border-size-key-focus:1px}:host{background-color:var(
--spectrum-actionbutton-m-background-color,var(--spectrum-global-color-gray-75)
);border-color:var(--spectrum-actionbutton-m-border-color);color:var(
--spectrum-actionbutton-m-text-color,var(--spectrum-alias-text-color)
)}::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color,var(--spectrum-alias-icon-color)
)}#hold-affordance{color:inherit}:host(:hover){background-color:var(
--spectrum-actionbutton-m-background-color-hover,var(--spectrum-global-color-gray-50)
);border-color:var(--spectrum-actionbutton-m-border-color-hover);color:var(
--spectrum-actionbutton-m-text-color-hover,var(--spectrum-alias-text-color-hover)
)}:host(:hover) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color-hover,var(--spectrum-alias-icon-color-hover)
)}:host(.focus-visible){background-color:var(
--spectrum-actionbutton-m-background-color-key-focus,var(--spectrum-global-color-gray-50)
);border-color:var(--spectrum-actionbutton-m-border-color-key-focus);color:var(
--spectrum-actionbutton-m-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host(:focus-visible){background-color:var(
--spectrum-actionbutton-m-background-color-key-focus,var(--spectrum-global-color-gray-50)
);border-color:var(--spectrum-actionbutton-m-border-color-key-focus);color:var(
--spectrum-actionbutton-m-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host(.focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host(.focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-border-color-key-focus
)}:host(:focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-border-color-key-focus
)}:host(.focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}:host(:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}:host([active]){background-color:var(
--spectrum-actionbutton-m-background-color-down,var(--spectrum-global-color-gray-200)
);border-color:var(--spectrum-actionbutton-m-border-color-down);color:var(
--spectrum-actionbutton-m-text-color-down,var(--spectrum-alias-text-color-down)
)}:host(:disabled),:host([disabled]){background-color:var(
--spectrum-actionbutton-m-background-color-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(--spectrum-actionbutton-m-border-color-disabled);color:var(
--spectrum-actionbutton-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host(:disabled) ::slotted([slot=icon]),:host([disabled]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color-disabled,var(--spectrum-alias-icon-color-disabled)
)}:host([selected]){background-color:var(
--spectrum-actionbutton-m-background-color-selected,var(--spectrum-global-color-gray-200)
);border-color:var(--spectrum-actionbutton-m-border-color-selected);color:var(
--spectrum-actionbutton-m-text-color-selected,var(--spectrum-alias-text-color)
)}:host([selected]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color-selected,var(--spectrum-alias-icon-color)
)}:host([selected].focus-visible){background-color:var(
--spectrum-actionbutton-m-background-color-selected-key-focus,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-border-color-selected-key-focus
);color:var(
--spectrum-actionbutton-m-text-color-selected-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([selected]:focus-visible){background-color:var(
--spectrum-actionbutton-m-background-color-selected-key-focus,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-border-color-selected-key-focus
);color:var(
--spectrum-actionbutton-m-text-color-selected-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([selected].focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([selected]:focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([selected].focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color-selected-key-focus,var(--spectrum-alias-icon-color-hover)
)}:host([selected]:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color-selected-key-focus,var(--spectrum-alias-icon-color-hover)
)}:host([selected]:hover){background-color:var(
--spectrum-actionbutton-m-background-color-selected-hover,var(--spectrum-global-color-gray-200)
);border-color:var(--spectrum-actionbutton-m-border-color-selected-hover);color:var(
--spectrum-actionbutton-m-text-color-selected-hover,var(--spectrum-alias-text-color-hover)
)}:host([selected]:hover) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color-selected-hover,var(--spectrum-alias-icon-color-hover)
)}:host([selected][active]){background-color:var(
--spectrum-actionbutton-m-background-color-selected-down,var(--spectrum-global-color-gray-200)
);border-color:var(--spectrum-actionbutton-m-border-color-selected-down);color:var(
--spectrum-actionbutton-m-text-color-selected-down,var(--spectrum-alias-text-color-down)
)}:host([selected][active]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color-selected-down,var(--spectrum-alias-icon-color-down)
)}:host([selected]:disabled),:host([selected][disabled]){background-color:var(
--spectrum-actionbutton-m-background-color-selected-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(--spectrum-actionbutton-m-border-color-selected-disabled);color:var(
--spectrum-actionbutton-m-text-color-selected-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([selected]:disabled) ::slotted([slot=icon]),:host([selected][disabled]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-icon-color-selected-disabled,var(--spectrum-alias-icon-color-disabled)
)}:host([emphasized]){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color,var(--spectrum-global-color-gray-75)
);border-color:var(--spectrum-actionbutton-m-emphasized-border-color);color:var(
--spectrum-actionbutton-m-emphasized-text-color,var(--spectrum-alias-text-color)
)}:host([emphasized]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color,var(--spectrum-alias-icon-color)
)}:host([emphasized]:hover){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-hover,var(--spectrum-global-color-gray-50)
);border-color:var(--spectrum-actionbutton-m-emphasized-border-color-hover);color:var(
--spectrum-actionbutton-m-emphasized-text-color-hover,var(--spectrum-alias-text-color-hover)
)}:host([emphasized]:hover) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color-hover,var(--spectrum-alias-icon-color-hover)
)}:host([emphasized].focus-visible){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-key-focus,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-key-focus
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([emphasized]:focus-visible){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-key-focus,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-key-focus
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([emphasized].focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}:host([emphasized]:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}:host([emphasized][active]){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-down,var(--spectrum-global-color-gray-200)
);border-color:var(--spectrum-actionbutton-m-emphasized-border-color-down);color:var(
--spectrum-actionbutton-m-emphasized-text-color-down,var(--spectrum-alias-text-color-down)
)}:host([emphasized]:disabled),:host([emphasized][disabled]){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-disabled
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([emphasized]:disabled) ::slotted([slot=icon]),:host([emphasized][disabled]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color-disabled,var(--spectrum-alias-icon-color-disabled)
)}:host([emphasized][quiet][selected]),:host([emphasized][selected]){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-selected,var(--spectrum-semantic-cta-color-background-default)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-selected
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-selected,var(--spectrum-global-color-static-white)
)}:host([emphasized][quiet][selected]) ::slotted([slot=icon]),:host([emphasized][selected]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color-selected,var(--spectrum-global-color-static-white)
)}:host([emphasized][quiet][selected].focus-visible),:host([emphasized][selected].focus-visible){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-selected-key-focus,var(--spectrum-semantic-cta-color-background-key-focus)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-selected-key-focus
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-selected-key-focus,var(--spectrum-global-color-static-white)
)}:host([emphasized][quiet][selected]:focus-visible),:host([emphasized][selected]:focus-visible){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-selected-key-focus,var(--spectrum-semantic-cta-color-background-key-focus)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-selected-key-focus
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-selected-key-focus,var(--spectrum-global-color-static-white)
)}:host([emphasized][quiet][selected].focus-visible) ::slotted([slot=icon]),:host([emphasized][selected].focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color-selected-key-focus,var(--spectrum-global-color-static-white)
)}:host([emphasized][quiet][selected]:focus-visible) ::slotted([slot=icon]),:host([emphasized][selected]:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color-selected-key-focus,var(--spectrum-global-color-static-white)
)}:host([emphasized][quiet][selected]:hover),:host([emphasized][selected]:hover){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-selected-hover,var(--spectrum-semantic-cta-color-background-hover)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-selected-hover
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-selected-hover,var(--spectrum-global-color-static-white)
)}:host([emphasized][quiet][selected]:hover) ::slotted([slot=icon]),:host([emphasized][selected]:hover) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color-selected-hover,var(--spectrum-global-color-static-white)
)}:host([emphasized][quiet][selected][active]),:host([emphasized][selected][active]){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-selected-down,var(--spectrum-semantic-cta-color-background-down)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-selected-down
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-selected-down,var(--spectrum-global-color-static-white)
)}:host([emphasized][quiet][selected][active]) ::slotted([slot=icon]),:host([emphasized][selected][active]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color-selected-down,var(--spectrum-global-color-static-white)
)}:host([emphasized][quiet][selected]:disabled),:host([emphasized][quiet][selected][disabled]),:host([emphasized][selected]:disabled),:host([emphasized][selected][disabled]){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-selected-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-selected-disabled
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-selected-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([emphasized][quiet][selected]:disabled) ::slotted([slot=icon]),:host([emphasized][quiet][selected][disabled]) ::slotted([slot=icon]),:host([emphasized][selected]:disabled) ::slotted([slot=icon]),:host([emphasized][selected][disabled]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-icon-color-selected-disabled,var(--spectrum-alias-icon-color-disabled)
)}:host([quiet]){background-color:var(
--spectrum-actionbutton-m-quiet-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(--spectrum-actionbutton-m-quiet-border-color);color:var(
--spectrum-actionbutton-m-quiet-text-color,var(--spectrum-alias-text-color)
)}:host([quiet]:hover){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-hover,var(--spectrum-alias-background-color-transparent)
);border-color:var(--spectrum-actionbutton-m-quiet-border-color-hover);color:var(
--spectrum-actionbutton-m-quiet-text-color-hover,var(--spectrum-alias-text-color-hover)
)}:host([quiet].focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-key-focus,var(--spectrum-alias-background-color-transparent)
);border-color:var(--spectrum-actionbutton-m-quiet-border-color-key-focus);color:var(
--spectrum-actionbutton-m-quiet-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([quiet]:focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-key-focus,var(--spectrum-alias-background-color-transparent)
);border-color:var(--spectrum-actionbutton-m-quiet-border-color-key-focus);color:var(
--spectrum-actionbutton-m-quiet-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([quiet][active]){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-down,var(--spectrum-global-color-gray-300)
);border-color:var(--spectrum-actionbutton-m-quiet-border-color-down);color:var(
--spectrum-actionbutton-m-quiet-text-color-down,var(--spectrum-alias-text-color-down)
)}:host([quiet]:disabled),:host([quiet][disabled]){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(--spectrum-actionbutton-m-quiet-border-color-disabled);color:var(
--spectrum-actionbutton-m-quiet-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([quiet][selected]){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-selected,var(--spectrum-global-color-gray-200)
);border-color:var(--spectrum-actionbutton-m-quiet-border-color-selected);color:var(
--spectrum-actionbutton-m-quiet-text-color-selected,var(--spectrum-alias-text-color)
)}:host([quiet][selected].focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-selected-key-focus,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-quiet-border-color-selected-key-focus
);color:var(
--spectrum-actionbutton-m-quiet-text-color-selected-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([quiet][selected]:focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-selected-key-focus,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-quiet-border-color-selected-key-focus
);color:var(
--spectrum-actionbutton-m-quiet-text-color-selected-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([quiet][selected]:hover){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-selected-hover,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-quiet-border-color-selected-hover
);color:var(
--spectrum-actionbutton-m-quiet-text-color-selected-hover,var(--spectrum-alias-text-color-hover)
)}:host([quiet][selected][active]){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-selected-down,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-quiet-border-color-selected-down
);color:var(
--spectrum-actionbutton-m-quiet-text-color-selected-down,var(--spectrum-alias-text-color-down)
)}:host([quiet][selected]:disabled),:host([quiet][selected][disabled]){background-color:var(
--spectrum-actionbutton-m-quiet-background-color-selected-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-actionbutton-m-quiet-border-color-selected-disabled
);color:var(
--spectrum-actionbutton-m-quiet-text-color-selected-disabled,var(--spectrum-alias-text-color-disabled)
)}@media (forced-colors:active){:host{--spectrum-actionbutton-m-background-color:ButtonFace;--spectrum-actionbutton-m-background-color-disabled:ButtonFace;--spectrum-actionbutton-m-background-color-down:ButtonFace;--spectrum-actionbutton-m-background-color-hover:ButtonFace;--spectrum-actionbutton-m-background-color-key-focus:ButtonFace;--spectrum-actionbutton-m-background-color-selected:Highlight;--spectrum-actionbutton-m-background-color-selected-disabled:ButtonFace;--spectrum-actionbutton-m-background-color-selected-down:Highlight;--spectrum-actionbutton-m-background-color-selected-hover:Highlight;--spectrum-actionbutton-m-background-color-selected-key-focus:Highlight;--spectrum-actionbutton-m-border-color:ButtonText;--spectrum-actionbutton-m-border-color-disabled:GrayText;--spectrum-actionbutton-m-border-color-down:Highlight;--spectrum-actionbutton-m-border-color-hover:Highlight;--spectrum-actionbutton-m-border-color-key-focus:ButtonText;--spectrum-actionbutton-m-border-color-selected:HighlightText;--spectrum-actionbutton-m-border-color-selected-disabled:GrayText;--spectrum-actionbutton-m-border-color-selected-down:HighlightText;--spectrum-actionbutton-m-border-color-selected-hover:HighlightText;--spectrum-actionbutton-m-border-color-selected-key-focus:ButtonText;--spectrum-actionbutton-m-emphasized-background-color:ButtonFace;--spectrum-actionbutton-m-emphasized-background-color-disabled:ButtonFace;--spectrum-actionbutton-m-emphasized-background-color-down:Highlight;--spectrum-actionbutton-m-emphasized-background-color-hover:Highlight;--spectrum-actionbutton-m-emphasized-background-color-key-focus:ButtonFace;--spectrum-actionbutton-m-emphasized-background-color-selected:Highlight;--spectrum-actionbutton-m-emphasized-background-color-selected-disabled:ButtonFace;--spectrum-actionbutton-m-emphasized-background-color-selected-down:Highlight;--spectrum-actionbutton-m-emphasized-background-color-selected-hover:Highlight;--spectrum-actionbutton-m-emphasized-background-color-selected-key-focus:Highlight;--spectrum-actionbutton-m-emphasized-border-color:ButtonText;--spectrum-actionbutton-m-emphasized-border-color-disabled:GrayText;--spectrum-actionbutton-m-emphasized-border-color-down:HighlightText;--spectrum-actionbutton-m-emphasized-border-color-hover:HighlightText;--spectrum-actionbutton-m-emphasized-border-color-key-focus:ButtonText;--spectrum-actionbutton-m-emphasized-border-color-selected:HighlightText;--spectrum-actionbutton-m-emphasized-border-color-selected-disabled:GrayText;--spectrum-actionbutton-m-emphasized-border-color-selected-down:HighlightText;--spectrum-actionbutton-m-emphasized-border-color-selected-hover:HighlightText;--spectrum-actionbutton-m-emphasized-border-color-selected-key-focus:ButtonText;--spectrum-actionbutton-m-emphasized-text-color:ButtonText;--spectrum-actionbutton-m-emphasized-text-color-disabled:GrayText;--spectrum-actionbutton-m-emphasized-text-color-down:HighlightText;--spectrum-actionbutton-m-emphasized-text-color-hover:HighlightText;--spectrum-actionbutton-m-emphasized-text-color-key-focus:ButtonText;--spectrum-actionbutton-m-emphasized-text-color-selected:HighlightText;--spectrum-actionbutton-m-emphasized-text-color-selected-disabled:GrayText;--spectrum-actionbutton-m-emphasized-text-color-selected-down:HighlightText;--spectrum-actionbutton-m-emphasized-text-color-selected-hover:HighlightText;--spectrum-actionbutton-m-emphasized-text-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-quiet-background-color:ButtonFace;--spectrum-actionbutton-m-quiet-background-color-disabled:ButtonFace;--spectrum-actionbutton-m-quiet-background-color-down:ButtonFace;--spectrum-actionbutton-m-quiet-background-color-hover:ButtonFace;--spectrum-actionbutton-m-quiet-background-color-key-focus:ButtonFace;--spectrum-actionbutton-m-quiet-background-color-selected:Highlight;--spectrum-actionbutton-m-quiet-background-color-selected-disabled:ButtonFace;--spectrum-actionbutton-m-quiet-background-color-selected-down:Highlight;--spectrum-actionbutton-m-quiet-background-color-selected-hover:Highlight;--spectrum-actionbutton-m-quiet-background-color-selected-key-focus:Highlight;--spectrum-actionbutton-m-quiet-border-color:ButtonFace;--spectrum-actionbutton-m-quiet-border-color-disabled:ButtonFace;--spectrum-actionbutton-m-quiet-border-color-down:Highlight;--spectrum-actionbutton-m-quiet-border-color-hover:Highlight;--spectrum-actionbutton-m-quiet-border-color-key-focus:ButtonText;--spectrum-actionbutton-m-quiet-border-color-selected:ButtonFace;--spectrum-actionbutton-m-quiet-border-color-selected-disabled:ButtonFace;--spectrum-actionbutton-m-quiet-border-color-selected-down:ButtonFace;--spectrum-actionbutton-m-quiet-border-color-selected-hover:ButtonFace;--spectrum-actionbutton-m-quiet-border-color-selected-key-focus:ButtonText;--spectrum-actionbutton-m-quiet-text-color:ButtonText;--spectrum-actionbutton-m-quiet-text-color-disabled:GrayText;--spectrum-actionbutton-m-quiet-text-color-down:ButtonText;--spectrum-actionbutton-m-quiet-text-color-hover:ButtonText;--spectrum-actionbutton-m-quiet-text-color-key-focus:ButtonText;--spectrum-actionbutton-m-quiet-text-color-selected:HighlightText;--spectrum-actionbutton-m-quiet-text-color-selected-disabled:GrayText;--spectrum-actionbutton-m-quiet-text-color-selected-down:HighlightText;--spectrum-actionbutton-m-quiet-text-color-selected-hover:HighlightText;--spectrum-actionbutton-m-quiet-text-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-text-color:ButtonText;--spectrum-actionbutton-m-text-color-disabled:GrayText;--spectrum-actionbutton-m-text-color-down:ButtonText;--spectrum-actionbutton-m-text-color-hover:ButtonText;--spectrum-actionbutton-m-text-color-key-focus:ButtonText;--spectrum-actionbutton-m-text-color-selected:HighlightText;--spectrum-actionbutton-m-text-color-selected-disabled:GrayText;--spectrum-actionbutton-m-text-color-selected-down:HighlightText;--spectrum-actionbutton-m-text-color-selected-hover:HighlightText;--spectrum-actionbutton-m-text-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-quiet-border-size-key-focus:3px;forced-color-adjust:none}:host([quiet][emphasized]:not(:disabled,[disabled]):hover){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-selected-hover,var(--spectrum-semantic-cta-color-background-hover)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-selected-hover,var(--spectrum-semantic-cta-color-background-hover)
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-selected-hover,var(--spectrum-global-color-static-white)
)}:host([quiet][emphasized]:not(:disabled,[disabled])[active]){background-color:var(
--spectrum-actionbutton-m-emphasized-background-color-selected-down,var(--spectrum-semantic-cta-color-background-down)
);border-color:var(
--spectrum-actionbutton-m-emphasized-border-color-selected-down
);color:var(
--spectrum-actionbutton-m-emphasized-text-color-selected-down,var(--spectrum-global-color-static-white)
)}}:host{display:inline-flex;flex-direction:row}:host([disabled]){cursor:auto;pointer-events:none}:host([dir]){-webkit-appearance:none}::slotted([slot=icon]){flex-shrink:0}#button{inset:0;position:absolute}#label{flex-grow:var(--spectrum-actionbutton-label-flex-grow);text-align:var(--spectrum-actionbutton-label-text-align)}:host([size=s]){--spectrum-icon-tshirt-size-height:var(--spectrum-alias-icon-size-s);--spectrum-icon-tshirt-size-width:var(--spectrum-alias-icon-size-s);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
)}:host([size=m]){--spectrum-icon-tshirt-size-height:var(--spectrum-alias-icon-size-m);--spectrum-icon-tshirt-size-width:var(--spectrum-alias-icon-size-m);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}:host([size=l]){--spectrum-icon-tshirt-size-height:var(--spectrum-alias-icon-size-l);--spectrum-icon-tshirt-size-width:var(--spectrum-alias-icon-size-l);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
)}:host([size=xl]){--spectrum-icon-tshirt-size-height:var(--spectrum-alias-icon-size-xl);--spectrum-icon-tshirt-size-width:var(--spectrum-alias-icon-size-xl);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
)}`;

const styles$5=r`:host{--spectrum-alias-ui-icon-triplegripper-size-100-height:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-ui-icon-doublegripper-size-100-width:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-ui-icon-singlegripper-size-100-width:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-ui-icon-cornertriangle-size-75:var(
--spectrum-global-dimension-size-65
);--spectrum-alias-ui-icon-cornertriangle-size-200:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-ui-icon-asterisk-size-75:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-asterisk-size-100:var(
--spectrum-global-dimension-size-100
)}@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-CornerTriangle75{height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65)
);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65)
)}.spectrum-UIIcon-CornerTriangle100{height:var(--spectrum-alias-ui-icon-cornertriangle-size-100);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}.spectrum-UIIcon-CornerTriangle200{height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75)
);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75)
)}.spectrum-UIIcon-CornerTriangle300{height:var(--spectrum-alias-ui-icon-cornertriangle-size-300);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
)}`;

const CornerTriangle300Icon=()=>{return tag$1`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 7" aria-hidden="true" fill="currentColor"><path d="M6.683.67a.315.315 0 00-.223.093l-5.7 5.7a.316.316 0 00.224.54h5.7A.316.316 0 007 6.687V.986A.316.316 0 006.684.67z"/></svg>`;};

/**
 * @element sp-icon-corner-triangle300
 */class IconCornerTriangle300 extends IconBase{render(){setCustomTemplateLiteralTag$1(p);return CornerTriangle300Icon();}}

iliadCustomElementsDefine('sp-icon-corner-triangle300',IconCornerTriangle300);

const holdAffordanceClass={s:'spectrum-UIIcon-CornerTriangle75',m:'spectrum-UIIcon-CornerTriangle100',l:'spectrum-UIIcon-CornerTriangle200',xl:'spectrum-UIIcon-CornerTriangle300'};const LONGPRESS_DURATION=300;let LONGPRESS_TIMEOUT;/**
 * @element sp-action-button
 *
 * @slot - text label of the Action Button
 * @slot icon - The icon to use for Action Button
 * @fires change - Announces a change in the `selected` property of an action button
 * @fires longpress - Synthesizes a "longpress" interaction that signifies a
 * `pointerdown` event that is >=300ms or a keyboard event wher code is `Space` or code is `ArrowDown`
 * while `altKey===true`.
 */class ActionButton extends SizedMixin(ButtonBase){constructor(){super();this.emphasized=false;this.holdAffordance=false;this.quiet=false;this.selected=false;this.toggles=false;this._value='';this.onClick=()=>{if(!this.toggles){return;}this.selected=!this.selected;const applyDefault=this.dispatchEvent(new Event('change',{cancelable:true}));if(!applyDefault){this.selected=!this.selected;}};this.addEventListener('click',this.onClick);this.addEventListener('pointerdown',this.onPointerdown);}static get styles(){return [styles$6,styles$5];}get value(){return this._value||this.itemText;}set value(value){if(value===this._value){return;}this._value=value||'';if(this._value){this.setAttribute('value',this._value);}else {this.removeAttribute('value');}}/**
     * @private
     */get itemText(){return (this.textContent||/* c8 ignore next */'').trim();}onPointerdown(){this.addEventListener('pointerup',this.onPointerup);this.addEventListener('pointercancel',this.onPointerup);LONGPRESS_TIMEOUT=setTimeout(()=>{this.dispatchEvent(new CustomEvent('longpress',{bubbles:true,composed:true,detail:{source:'pointer'}}));},LONGPRESS_DURATION);}onPointerup(){clearTimeout(LONGPRESS_TIMEOUT);this.removeEventListener('pointerup',this.onPointerup);this.removeEventListener('pointercancel',this.onPointerup);}/**
     * @private
     */handleKeydown(event){if(!this.holdAffordance){return super.handleKeydown(event);}const{code,altKey}=event;if(code==='Space'||altKey&&code==='ArrowDown'){event.preventDefault();if(code==='ArrowDown'){event.stopPropagation();event.stopImmediatePropagation();}this.addEventListener('keyup',this.handleKeyup);this.active=true;}}handleKeyup(event){if(!this.holdAffordance){return super.handleKeyup(event);}const{code,altKey}=event;if(code==='Space'||altKey&&code==='ArrowDown'){event.stopPropagation();this.dispatchEvent(new CustomEvent('longpress',{bubbles:true,composed:true,detail:{source:'keyboard'}}));this.active=false;}}get buttonContent(){const buttonContent=super.buttonContent;if(this.holdAffordance){buttonContent.unshift(p`<sp-icon-corner-triangle300 id="hold-affordance" class="${holdAffordanceClass[this.size]}"></sp-icon-corner-triangle300>`);}return buttonContent;}updated(changes){super.updated(changes);if(this.toggles&&changes.has('selected')){this.focusElement.setAttribute('aria-pressed',this.selected?'true':'false');}}}__decorate([e({type:Boolean,reflect:true})],ActionButton.prototype,"emphasized",void 0);__decorate([e({type:Boolean,reflect:true,attribute:'hold-affordance'})],ActionButton.prototype,"holdAffordance",void 0);__decorate([e({type:Boolean,reflect:true})],ActionButton.prototype,"quiet",void 0);__decorate([e({type:Boolean,reflect:true})],ActionButton.prototype,"selected",void 0);__decorate([e({type:Boolean,reflect:true})],ActionButton.prototype,"toggles",void 0);__decorate([e({type:String})],ActionButton.prototype,"value",null);

iliadCustomElementsDefine('sp-action-button',ActionButton);

const Asterisk100Icon=()=>{return tag$1`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" aria-hidden="true" fill="currentColor"><path d="M6.575 6.555c.055.056.092.13 0 .2l-1.149.741c-.092.056-.129.019-.166-.074L3.834 4.94 1.963 7c-.019.036-.074.073-.129 0l-.889-.927c-.093-.055-.074-.111 0-.166l2.111-1.76L.648 3.24c-.037 0-.092-.074-.056-.167l.63-1.259a.097.097 0 01.167-.036L3.5 3.148l.13-2.7a.1.1 0 01.081-.111.15.15 0 01.03 0l1.537.2c.093 0 .111.037.093.13l-.723 2.647 2.445-.741c.055-.037.111-.037.148.074l.241 1.37c.018.093 0 .13-.074.13l-2.556.2z"/></svg>`;};

/**
 * @element sp-icon-asterisk100
 */class IconAsterisk100 extends IconBase{render(){setCustomTemplateLiteralTag$1(p);return Asterisk100Icon();}}

iliadCustomElementsDefine('sp-icon-asterisk100',IconAsterisk100);

const styles$4=r`:host{--spectrum-alias-ui-icon-triplegripper-size-100-height:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-ui-icon-doublegripper-size-100-width:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-ui-icon-singlegripper-size-100-width:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-ui-icon-cornertriangle-size-75:var(
--spectrum-global-dimension-size-65
);--spectrum-alias-ui-icon-cornertriangle-size-200:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-ui-icon-asterisk-size-75:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-asterisk-size-100:var(
--spectrum-global-dimension-size-100
)}@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Asterisk75{height:var(--spectrum-alias-ui-icon-asterisk-size-300);width:var(
--spectrum-alias-ui-icon-asterisk-size-75,var(--spectrum-global-dimension-static-size-100)
)}.spectrum-UIIcon-Asterisk100{height:var(
--spectrum-alias-ui-icon-asterisk-size-100,var(--spectrum-global-dimension-size-100)
);width:var(
--spectrum-alias-ui-icon-asterisk-size-100,var(--spectrum-global-dimension-size-100)
)}.spectrum-UIIcon-Asterisk200{height:var(--spectrum-alias-ui-icon-asterisk-size-200);width:var(
--spectrum-alias-ui-icon-asterisk-size-200
)}.spectrum-UIIcon-Asterisk300{height:var(--spectrum-alias-ui-icon-asterisk-size-300);width:var(
--spectrum-alias-ui-icon-asterisk-size-300
)}`;

const styles$3=r`:host{--spectrum-fieldlabel-s-text-font-weight:var(
--spectrum-alias-font-weight-m
);--spectrum-fieldlabel-s-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-fieldlabel-s-text-size:var(
--spectrum-global-dimension-font-size-75
);--spectrum-fieldlabel-s-asterisk-gap:var(
--spectrum-global-dimension-size-25
);--spectrum-fieldlabel-s-asterisk-margin-y:var(
--spectrum-global-dimension-size-50
);--spectrum-fieldlabel-s-padding-top:var(--spectrum-alias-item-padding-s);--spectrum-fieldlabel-s-padding-bottom:var(
--spectrum-alias-item-padding-s
);--spectrum-fieldlabel-m-text-font-weight:var(
--spectrum-alias-font-weight-m
);--spectrum-fieldlabel-m-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-fieldlabel-m-text-size:var(
--spectrum-global-dimension-font-size-75
);--spectrum-fieldlabel-m-asterisk-gap:var(
--spectrum-global-dimension-size-25
);--spectrum-fieldlabel-m-asterisk-margin-y:var(
--spectrum-global-dimension-size-50
);--spectrum-fieldlabel-m-padding-top:var(--spectrum-alias-padding-m);--spectrum-fieldlabel-m-padding-bottom:var(--spectrum-alias-padding-m);--spectrum-fieldlabel-l-text-font-weight:var(
--spectrum-alias-font-weight-m
);--spectrum-fieldlabel-l-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-fieldlabel-l-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-fieldlabel-l-asterisk-gap:var(
--spectrum-global-dimension-size-25
);--spectrum-fieldlabel-l-asterisk-margin-y:var(
--spectrum-global-dimension-size-50
);--spectrum-fieldlabel-l-padding-top:var(--spectrum-alias-item-padding-l);--spectrum-fieldlabel-l-padding-bottom:var(
--spectrum-alias-item-padding-l
);--spectrum-fieldlabel-xl-text-font-weight:var(
--spectrum-alias-font-weight-m
);--spectrum-fieldlabel-xl-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-fieldlabel-xl-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-fieldlabel-xl-asterisk-gap:var(
--spectrum-global-dimension-size-25
);--spectrum-fieldlabel-xl-asterisk-margin-y:var(
--spectrum-global-dimension-size-50
);--spectrum-fieldlabel-xl-padding-top:var(--spectrum-alias-item-padding-xl);--spectrum-fieldlabel-xl-padding-bottom:var(
--spectrum-alias-item-padding-xl
);--spectrum-fieldlabel-side-m-padding-right:var(
--spectrum-global-dimension-size-150
);--spectrum-fieldlabel-side-m-padding-top:var(
--spectrum-global-dimension-size-100
);--spectrum-fieldlabel-side-m-asterisk-margin-y:var(
--spectrum-global-dimension-size-50
);--spectrum-fieldlabel-m-text-color:var(
--spectrum-alias-text-color-primary
);--spectrum-fieldlabel-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-fieldlabel-m-asterisk-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-fieldlabel-m-asterisk-color:var(
--spectrum-alias-icon-color-primary
)}:host([size=s]){--spectrum-fieldlabel-text-font-weight:var(
--spectrum-fieldlabel-s-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-fieldlabel-text-line-height:var(
--spectrum-fieldlabel-s-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-fieldlabel-text-size:var(
--spectrum-fieldlabel-s-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-fieldlabel-asterisk-gap:var(
--spectrum-fieldlabel-s-asterisk-gap,var(--spectrum-global-dimension-size-25)
);--spectrum-fieldlabel-asterisk-margin-y:var(
--spectrum-fieldlabel-s-asterisk-margin-y,var(--spectrum-global-dimension-size-50)
);--spectrum-fieldlabel-padding-top:var(
--spectrum-fieldlabel-s-padding-top,var(--spectrum-global-dimension-size-50)
);--spectrum-fieldlabel-padding-bottom:var(
--spectrum-fieldlabel-s-padding-bottom,var(--spectrum-global-dimension-size-65)
)}:host([size=m]){--spectrum-fieldlabel-text-font-weight:var(
--spectrum-fieldlabel-m-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-fieldlabel-text-line-height:var(
--spectrum-fieldlabel-m-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-fieldlabel-text-size:var(
--spectrum-fieldlabel-m-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-fieldlabel-asterisk-gap:var(
--spectrum-fieldlabel-m-asterisk-gap,var(--spectrum-global-dimension-size-25)
);--spectrum-fieldlabel-asterisk-margin-y:var(
--spectrum-fieldlabel-m-asterisk-margin-y,var(--spectrum-global-dimension-size-50)
);--spectrum-fieldlabel-padding-top:var(
--spectrum-fieldlabel-m-padding-top,var(--spectrum-global-dimension-size-50)
);--spectrum-fieldlabel-padding-bottom:var(
--spectrum-fieldlabel-m-padding-bottom,var(--spectrum-global-dimension-size-65)
)}:host([size=l]){--spectrum-fieldlabel-text-font-weight:var(
--spectrum-fieldlabel-l-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-fieldlabel-text-line-height:var(
--spectrum-fieldlabel-l-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-fieldlabel-text-size:var(
--spectrum-fieldlabel-l-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-fieldlabel-asterisk-gap:var(
--spectrum-fieldlabel-l-asterisk-gap,var(--spectrum-global-dimension-size-25)
);--spectrum-fieldlabel-asterisk-margin-y:var(
--spectrum-fieldlabel-l-asterisk-margin-y,var(--spectrum-global-dimension-size-50)
);--spectrum-fieldlabel-padding-top:var(
--spectrum-fieldlabel-l-padding-top,var(--spectrum-global-dimension-size-75)
);--spectrum-fieldlabel-padding-bottom:var(
--spectrum-fieldlabel-l-padding-bottom,var(--spectrum-global-dimension-size-115)
)}:host([size=xl]){--spectrum-fieldlabel-text-font-weight:var(
--spectrum-fieldlabel-xl-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-fieldlabel-text-line-height:var(
--spectrum-fieldlabel-xl-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-fieldlabel-text-size:var(
--spectrum-fieldlabel-xl-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-fieldlabel-asterisk-gap:var(
--spectrum-fieldlabel-xl-asterisk-gap,var(--spectrum-global-dimension-size-25)
);--spectrum-fieldlabel-asterisk-margin-y:var(
--spectrum-fieldlabel-xl-asterisk-margin-y,var(--spectrum-global-dimension-size-50)
);--spectrum-fieldlabel-padding-top:var(
--spectrum-fieldlabel-xl-padding-top,var(--spectrum-global-dimension-size-115)
);--spectrum-fieldlabel-padding-bottom:var(
--spectrum-fieldlabel-xl-padding-bottom,var(--spectrum-global-dimension-size-130)
)}:host{-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto;font-smoothing:subpixel-antialiased;box-sizing:border-box;display:block;font-size:var(--spectrum-fieldlabel-text-size);font-weight:var(--spectrum-fieldlabel-text-font-weight);line-height:var(--spectrum-fieldlabel-text-line-height);padding-bottom:var(--spectrum-fieldlabel-padding-bottom);padding-left:0;padding-right:0;padding-top:var(--spectrum-fieldlabel-padding-top);vertical-align:top}:host([dir=ltr]) .requiredIcon{margin-left:var(
--spectrum-fieldlabel-asterisk-gap
);margin-right:0}:host([dir=rtl]) .requiredIcon{margin-left:0;margin-right:var(
--spectrum-fieldlabel-asterisk-gap
)}.requiredIcon{margin-bottom:0;margin-top:var(
--spectrum-fieldlabel-asterisk-margin-y
)}:host([dir=ltr][side-aligned=start]){padding-left:0;padding-right:var(
--spectrum-fieldlabel-side-m-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([dir=rtl][side-aligned=start]){padding-left:var(
--spectrum-fieldlabel-side-m-padding-right,var(--spectrum-global-dimension-size-150)
);padding-right:0}:host([side-aligned=start]){display:inline-block;padding-bottom:0;padding-top:var(
--spectrum-fieldlabel-side-m-padding-top,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr][side-aligned=start]) .requiredIcon{margin-left:var(
--spectrum-fieldlabel-asterisk-gap
);margin-right:0}:host([dir=rtl][side-aligned=start]) .requiredIcon{margin-left:0;margin-right:var(
--spectrum-fieldlabel-asterisk-gap
)}:host([side-aligned=start]) .requiredIcon{margin-bottom:0;margin-top:var(
--spectrum-fieldlabel-side-m-asterisk-margin-y,var(--spectrum-global-dimension-size-50)
)}:host([dir=ltr][side-aligned=end]){text-align:right}:host([dir=rtl][side-aligned=end]){text-align:left}:host([dir=ltr][side-aligned=end]){padding-left:0;padding-right:var(
--spectrum-fieldlabel-side-m-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([dir=rtl][side-aligned=end]){padding-left:var(
--spectrum-fieldlabel-side-m-padding-right,var(--spectrum-global-dimension-size-150)
);padding-right:0}:host([side-aligned=end]){display:inline-block;padding-bottom:0;padding-top:var(
--spectrum-fieldlabel-side-m-padding-top,var(--spectrum-global-dimension-size-100)
)}:host{color:var(
--spectrum-fieldlabel-m-text-color,var(--spectrum-alias-label-text-color)
)}:host([disabled]){color:var(
--spectrum-fieldlabel-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([disabled]) .requiredIcon{color:var(
--spectrum-fieldlabel-m-asterisk-color-disabled,var(--spectrum-alias-text-color-disabled)
)}.requiredIcon{color:var(
--spectrum-fieldlabel-m-asterisk-color,var(--spectrum-global-color-gray-600)
)}`;

/**
 * @element sp-field-label
 *
 * @slot - text content of the label
 */class FieldLabel extends SizedMixin(SpectrumElement){constructor(){super(...arguments);this.disabled=false;this.id='';this.for='';this.required=false;}static get styles(){return [styles$3,styles$4];}handleClick(event){if(!this.target||this.disabled||event.defaultPrevented)return;this.target.focus();const parent=this.getRootNode();const target=this.target;const targetParent=target.getRootNode();const targetHost=targetParent.host;if(targetParent===parent&&target.forceFocusVisible){target.forceFocusVisible();}else if(targetHost&&targetHost.forceFocusVisible){targetHost.forceFocusVisible();}}async manageFor(){if(!this.for){return;}const parent=this.getRootNode();const target=parent.querySelector(`#${this.for}`);if(!target){return;}if(target.localName.search('-')>0){await customElements.whenDefined(target.localName);}if(typeof target.updateComplete!=='undefined'){await target.updateComplete;}this.target=target.focusElement||target;if(this.target){const targetParent=this.target.getRootNode();if(targetParent===parent){this.target.setAttribute('aria-labelledby',this.id);}else {this.target.setAttribute('aria-label',this.labelText);}}return Promise.resolve();}get labelText(){const assignedNodes=this.slotEl.assignedNodes({flatten:true});if(!assignedNodes.length){return '';}const labelText=assignedNodes.map(node=>(node.textContent||/* c8 ignore next */'').trim());return labelText.join(' ');}render(){return p`<label><slot @slotchange="${this.manageFor}"></slot>${this.required?p`<sp-icon-asterisk100 class="requiredIcon spectrum-UIIcon-Asterisk100"></sp-icon-asterisk100>`:p``}</label>`;}firstUpdated(changes){super.firstUpdated(changes);if(!this.hasAttribute('id')){this.setAttribute('id',`${this.tagName.toLowerCase()}-${FieldLabel.instanceCount++}`);}this.addEventListener('click',this.handleClick);}updated(changes){super.updated(changes);if(changes.has('for')||changes.has('id')){this.manageFor();}}}/**
 * @private
 */FieldLabel.instanceCount=0;__decorate([e({type:Boolean,reflect:true})],FieldLabel.prototype,"disabled",void 0);__decorate([e({type:String})],FieldLabel.prototype,"id",void 0);__decorate([e({type:String})],FieldLabel.prototype,"for",void 0);__decorate([e({type:Boolean,reflect:true})],FieldLabel.prototype,"required",void 0);__decorate([i('slot')],FieldLabel.prototype,"slotEl",void 0);__decorate([e({type:String,reflect:true,attribute:'side-aligned'})],FieldLabel.prototype,"sideAligned",void 0);

iliadCustomElementsDefine('sp-field-label',FieldLabel);

iliadCustomElementsDefine('sp-menu-item',MenuItem);

const styles$2=r`:host{--spectrum-link-primary-s-text-size:var(--spectrum-alias-item-text-size-s);--spectrum-link-primary-m-text-size:var(--spectrum-alias-item-text-size-m);--spectrum-link-primary-l-text-size:var(--spectrum-alias-item-text-size-l);--spectrum-link-primary-xl-text-size:var(
--spectrum-alias-item-text-size-xl
);--spectrum-link-primary-m-text-color:var(--spectrum-global-color-blue-600);--spectrum-link-primary-m-text-color-hover:var(
--spectrum-global-color-blue-600
);--spectrum-link-primary-m-text-color-down:var(
--spectrum-global-color-blue-700
);--spectrum-link-primary-m-text-color-key-focus:var(
--spectrum-alias-text-color-key-focus
);--spectrum-link-over-background-m-text-color:var(
--spectrum-alias-text-color-over-background
);--spectrum-link-over-background-m-text-color-hover:var(
--spectrum-alias-text-color-over-background
);--spectrum-link-over-background-m-text-color-down:var(
--spectrum-alias-text-color-over-background
);--spectrum-link-over-background-m-text-color-key-focus:var(
--spectrum-alias-text-color-over-background
)}:host([size=s]){--spectrum-link-primary-text-size:var(
--spectrum-link-primary-s-text-size,var(--spectrum-alias-item-text-size-s)
)}:host([size=m]){--spectrum-link-primary-text-size:var(
--spectrum-link-primary-m-text-size,var(--spectrum-alias-item-text-size-m)
)}:host([size=l]){--spectrum-link-primary-text-size:var(
--spectrum-link-primary-l-text-size,var(--spectrum-alias-item-text-size-l)
)}:host([size=xl]){--spectrum-link-primary-text-size:var(
--spectrum-link-primary-xl-text-size,var(--spectrum-alias-item-text-size-xl)
)}:host([size=l]),:host([size=m]),:host([size=s]),:host([size=xl]){font-size:var(
--spectrum-link-primary-text-size
)}a{-webkit-text-decoration-skip:objects;background-color:transparent;cursor:pointer;outline:0;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}a,a.focus-visible{text-decoration:underline}a.focus-visible{-webkit-text-decoration-style:double;text-decoration-style:double}a:focus-visible{text-decoration:underline;-webkit-text-decoration-style:double;text-decoration-style:double}:host([quiet]) a{text-decoration:none}:host([quiet]) a:hover{text-decoration:underline}a{color:var(
--spectrum-link-primary-m-text-color,var(--spectrum-global-color-blue-600)
)}a:hover{color:var(
--spectrum-link-primary-m-text-color-hover,var(--spectrum-global-color-blue-600)
)}a:active{color:var(
--spectrum-link-primary-m-text-color-down,var(--spectrum-global-color-blue-700)
)}a.focus-visible{color:var(
--spectrum-link-primary-m-text-color-key-focus,var(--spectrum-alias-text-color-key-focus)
)}a:focus-visible{color:var(
--spectrum-link-primary-m-text-color-key-focus,var(--spectrum-alias-text-color-key-focus)
)}:host([variant=secondary]) a{color:inherit}:host([variant=secondary]) a:hover{color:inherit}:host([variant=secondary]) a:active{color:inherit}:host([variant=secondary]) a:focus{color:inherit}:host([over-background]) a{color:var(
--spectrum-link-over-background-m-text-color,var(--spectrum-alias-text-color-over-background)
)}:host([over-background]) a:hover{color:var(
--spectrum-link-over-background-m-text-color-hover,var(--spectrum-alias-text-color-over-background)
)}:host([over-background]) a:active{color:var(
--spectrum-link-over-background-m-text-color-down,var(--spectrum-alias-text-color-over-background)
)}:host([over-background]) a:focus{color:var(
--spectrum-link-over-background-m-text-color-key-focus,var(--spectrum-alias-text-color-over-background)
)}@media (forced-colors:active){:host([variant=secondary]) a{color:linktext}:host([variant=secondary]) a:hover{color:linktext}:host([variant=secondary]) a:active{color:linktext}:host([variant=secondary]) a:focus{color:linktext}}:host{display:inline}:host(:focus){outline:0}:host([href]) a.focus-visible{text-decoration:underline;-webkit-text-decoration-style:double;text-decoration-style:double}:host([href]) a:focus-visible{text-decoration:underline;-webkit-text-decoration-style:double;text-decoration-style:double}`;

/**
 * @element sp-link
 *
 * @attr quiet - uses quiet styles or not
 * @attr over-background - uses over background styles or not
 */class Link extends SizedMixin(LikeAnchor(Focusable),{noDefaultSize:true}){static get styles(){return [styles$2];}get focusElement(){return this.anchorElement;}render(){return this.renderAnchor({id:'anchor'});}}__decorate([i('#anchor')],Link.prototype,"anchorElement",void 0);__decorate([e({type:String,reflect:true})],Link.prototype,"variant",void 0);

iliadCustomElementsDefine('sp-link',Link);

const styles$1=r`:host{--spectrum-divider-s-height:var(--spectrum-global-dimension-size-10);--spectrum-divider-s-vertical-width:var(
--spectrum-global-dimension-size-10
);--spectrum-divider-m-height:var(--spectrum-global-dimension-size-25);--spectrum-divider-m-vertical-width:var(
--spectrum-global-dimension-size-25
);--spectrum-divider-l-height:var(--spectrum-global-dimension-size-50);--spectrum-divider-l-vertical-width:var(
--spectrum-global-dimension-size-50
)}:host([size=s]){--spectrum-divider-height:var(
--spectrum-divider-s-height,var(--spectrum-global-dimension-size-10)
);--spectrum-divider-vertical-width:var(
--spectrum-divider-s-vertical-width,var(--spectrum-global-dimension-size-10)
)}:host([size=m]){--spectrum-divider-height:var(
--spectrum-divider-m-height,var(--spectrum-global-dimension-size-25)
);--spectrum-divider-vertical-width:var(
--spectrum-divider-m-vertical-width,var(--spectrum-global-dimension-size-25)
)}:host([size=l]){--spectrum-divider-height:var(
--spectrum-divider-l-height,var(--spectrum-global-dimension-size-50)
);--spectrum-divider-vertical-width:var(
--spectrum-divider-l-vertical-width,var(--spectrum-global-dimension-size-50)
)}:host{--spectrum-divider-vertical-height:100%}:host{border-width:medium;border:var(--spectrum-divider-height);border-radius:var(--spectrum-divider-height);height:var(--spectrum-divider-height);overflow:visible;width:100%}:host([vertical]){height:var(
--spectrum-divider-vertical-height
);width:var(--spectrum-divider-vertical-width)}:host{--spectrum-divider-l-background-color:var(
--spectrum-global-color-gray-800
);--spectrum-divider-m-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-divider-s-background-color:var(
--spectrum-global-color-gray-300
)}:host([size=l]){background-color:var(
--spectrum-divider-l-background-color,var(--spectrum-global-color-gray-800)
)}:host([size=m]){background-color:var(
--spectrum-divider-m-background-color,var(--spectrum-global-color-gray-300)
)}:host([size=s]){background-color:var(
--spectrum-divider-s-background-color,var(--spectrum-global-color-gray-300)
)}:host{display:block}hr{border:none;margin:0}`;

/**
 * @element sp-divider
 */class Divider extends SizedMixin(SpectrumElement,{validSizes:['s','m','l']}){constructor(){super(...arguments);this.vertical=false;}render(){return p``;}firstUpdated(changed){super.firstUpdated(changed);this.setAttribute('role','separator');}updated(changed){super.updated(changed);if(changed.has('vertical')){if(this.vertical){this.setAttribute('aria-orientation','vertical');}else {this.removeAttribute('aria-orientation');}}}}Divider.styles=[styles$1];__decorate([e({type:Boolean,reflect:true})],Divider.prototype,"vertical",void 0);

iliadCustomElementsDefine('sp-divider',Divider);

iliadCustomElementsDefine('sp-clear-button',ClearButton);

const InfoIcon=({width=24,height=24,hidden=false,title='Info'}={})=>{return tag`<svg xmlns="http://www.w3.org/2000/svg" height="${height}" viewBox="0 0 36 36" width="${width}" aria-hidden="${hidden?'true':'false'}" role="img" fill="currentColor" aria-label="${title}"><path d="M18 2a16 16 0 1016 16A16 16 0 0018 2zm-.3 4.3a2.718 2.718 0 012.864 2.824 2.664 2.664 0 01-2.864 2.863 2.705 2.705 0 01-2.864-2.864A2.717 2.717 0 0117.7 6.3zM22 27a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2a1 1 0 011-1h1v-6h-1a1 1 0 01-1-1v-2a1 1 0 011-1h4a1 1 0 011 1v9h1a1 1 0 011 1z"/></svg>`;};

/**
 * @element sp-icon-info
 */class IconInfo extends IconBase{render(){setCustomTemplateLiteralTag(p);return InfoIcon({hidden:!this.label,title:this.label});}}

iliadCustomElementsDefine('sp-icon-info',IconInfo);

const CheckmarkCircleIcon=({width=24,height=24,hidden=false,title='Checkmark Circle'}={})=>{return tag`<svg xmlns="http://www.w3.org/2000/svg" height="${height}" viewBox="0 0 36 36" width="${width}" aria-hidden="${hidden?'true':'false'}" role="img" fill="currentColor" aria-label="${title}"><path d="M18 2a16 16 0 1016 16A16 16 0 0018 2zm10.666 9.08L16.018 27.341a1.206 1.206 0 01-.875.461h-.073a1.2 1.2 0 01-.849-.351l-7.785-7.793a1.2 1.2 0 010-1.7l1.326-1.325a1.2 1.2 0 011.7 0l5.338 5.349L25.314 8.473A1.2 1.2 0 0127 8.263L28.455 9.4a1.2 1.2 0 01.211 1.68z"/></svg>`;};

/**
 * @element sp-icon-checkmark-circle
 */class IconCheckmarkCircle extends IconBase{render(){setCustomTemplateLiteralTag(p);return CheckmarkCircleIcon({hidden:!this.label,title:this.label});}}

iliadCustomElementsDefine('sp-icon-checkmark-circle',IconCheckmarkCircle);

const styles=r`:host{--spectrum-toast-neutral-padding-right:var(
--spectrum-global-dimension-size-100
);--spectrum-toast-neutral-padding-left:var(
--spectrum-global-dimension-size-200
);--spectrum-toast-neutral-border-radius:var(
--spectrum-global-dimension-static-size-50
);--spectrum-toast-neutral-padding-y:var(
--spectrum-global-dimension-size-100
);--spectrum-toast-neutral-text-size:var(--spectrum-alias-font-size-default);--spectrum-toast-neutral-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-toast-neutral-icon-padding-right:var(
--spectrum-global-dimension-size-150
);--spectrum-toast-neutral-content-padding-right:var(
--spectrum-global-dimension-size-200
);--spectrum-toast-info-text-size:var(--spectrum-alias-font-size-default);--spectrum-toast-info-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-toast-info-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-toast-neutral-button-gap-x:var(
--spectrum-global-dimension-size-100
);--spectrum-toast-neutral-background-color:var(
--spectrum-semantic-neutral-background-color-default
);--spectrum-toast-neutral-text-color:var(
--spectrum-global-color-static-white
);--spectrum-toast-warning-background-color:var(
--spectrum-global-color-static-orange-700
);--spectrum-toast-negative-background-color:var(
--spectrum-semantic-negative-color-background
);--spectrum-toast-info-background-color:var(
--spectrum-semantic-informative-color-background
);--spectrum-toast-positive-background-color:var(
--spectrum-semantic-positive-color-background
)}:host{--spectrum-toast-icon-padding-y:var(
--spectrum-global-dimension-size-85
);--spectrum-toast-neutral-content-padding-top:var(
--spectrum-global-dimension-size-65
);--spectrum-toast-content-padding-bottom:var(
--spectrum-global-dimension-size-65
);--spectrum-toast-button-margin-right:var(
--spectrum-global-dimension-size-130
)}:host([dir=ltr]){padding-right:var(
--spectrum-toast-neutral-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]){padding-left:var(
--spectrum-toast-neutral-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr]){padding-left:var(
--spectrum-toast-neutral-padding-left,var(--spectrum-global-dimension-size-200)
)}:host([dir=rtl]){padding-right:var(
--spectrum-toast-neutral-padding-left,var(--spectrum-global-dimension-size-200)
)}:host{-webkit-font-smoothing:antialiased;align-items:stretch;border-radius:var(
--spectrum-toast-neutral-border-radius,var(--spectrum-global-dimension-static-size-50)
);box-sizing:border-box;display:inline-flex;flex-direction:row;font-size:var(
--spectrum-toast-neutral-text-size,var(--spectrum-alias-font-size-default)
);font-weight:var(
--spectrum-toast-neutral-text-font-weight,var(--spectrum-global-font-weight-regular)
);padding-bottom:var(
--spectrum-toast-neutral-padding-y,var(--spectrum-global-dimension-size-100)
);padding-top:var(
--spectrum-toast-neutral-padding-y,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr]) .type{margin-right:var(
--spectrum-toast-neutral-icon-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([dir=rtl]) .type{margin-left:var(
--spectrum-toast-neutral-icon-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([dir=ltr]) .type{margin-left:0}:host([dir=rtl]) .type{margin-right:0}.type{flex-grow:0;flex-shrink:0;margin-bottom:var(--spectrum-toast-icon-padding-y);margin-top:var(--spectrum-toast-icon-padding-y)}:host([dir=ltr]) .content{padding-right:var(
--spectrum-toast-neutral-content-padding-right,var(--spectrum-global-dimension-size-200)
)}:host([dir=rtl]) .content{padding-left:var(
--spectrum-toast-neutral-content-padding-right,var(--spectrum-global-dimension-size-200)
)}:host([dir=ltr]) .content{padding-left:0}:host([dir=rtl]) .content{padding-right:0}:host([dir=ltr]) .content{text-align:left}:host([dir=rtl]) .content{text-align:right}.content{box-sizing:border-box;display:inline-block;flex:1 1 auto;font-size:var(
--spectrum-toast-info-text-size,var(--spectrum-alias-font-size-default)
);font-weight:var(
--spectrum-toast-info-text-font-weight,var(--spectrum-global-font-weight-regular)
);line-height:var(
--spectrum-toast-info-text-line-height,var(--spectrum-alias-component-text-line-height)
);padding-bottom:var(--spectrum-toast-content-padding-bottom);padding-top:var(
--spectrum-toast-neutral-content-padding-top,var(--spectrum-global-dimension-size-65)
)}.buttons{align-items:flex-start;display:flex;flex:0 0 auto}:host([dir=ltr]) .buttons .spectrum-ClearButton+.spectrum-ClearButton,:host([dir=ltr]) .buttons .spectrum-ClearButton+::slotted([slot=action]),:host([dir=ltr]) .buttons slot[name=action]+.spectrum-ClearButton,:host([dir=ltr]) .buttons slot[name=action]+::slotted([slot=action]){margin-left:var(
--spectrum-toast-neutral-button-gap-x,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) .buttons .spectrum-ClearButton+.spectrum-ClearButton,:host([dir=rtl]) .buttons .spectrum-ClearButton+::slotted([slot=action]),:host([dir=rtl]) .buttons slot[name=action]+.spectrum-ClearButton,:host([dir=rtl]) .buttons slot[name=action]+::slotted([slot=action]){margin-right:var(
--spectrum-toast-neutral-button-gap-x,var(--spectrum-global-dimension-size-100)
)}.body{align-self:center;flex:1 1 auto}:host([dir=ltr]) .body ::slotted([slot=action]){float:right}:host([dir=rtl]) .body ::slotted([slot=action]){float:left}:host([dir=ltr]) .body ::slotted([slot=action]){margin-right:var(
--spectrum-toast-button-margin-right
)}:host([dir=rtl]) .body ::slotted([slot=action]){margin-left:var(
--spectrum-toast-button-margin-right
)}:host([dir=ltr]) .body+.buttons{padding-left:var(
--spectrum-toast-neutral-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) .body+.buttons{padding-right:var(
--spectrum-toast-neutral-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr]) .body+.buttons{border-left-width:1px}:host([dir=rtl]) .body+.buttons{border-right-width:1px}:host([dir=ltr]) .body+.buttons{border-left-style:solid}:host([dir=rtl]) .body+.buttons{border-right-style:solid}:host{background-color:var(
--spectrum-toast-neutral-background-color,var(--spectrum-semantic-neutral-background-color-default)
);color:var(
--spectrum-toast-neutral-background-color,var(--spectrum-semantic-neutral-background-color-default)
)}.content{color:var(
--spectrum-toast-neutral-text-color,var(--spectrum-global-color-static-white)
)}.type{color:#fff}:host([dir=ltr]) .buttons{border-left-color:hsla(0,0%,100%,.2)}:host([dir=rtl]) .buttons{border-right-color:hsla(0,0%,100%,.2)}:host([variant=warning]){background-color:var(
--spectrum-toast-warning-background-color,var(--spectrum-global-color-static-orange-700)
);color:var(
--spectrum-toast-warning-background-color,var(--spectrum-global-color-static-orange-700)
)}:host([variant=warning]) .closeButton.focus-visible:not(:active){color:var(
--spectrum-toast-warning-background-color,var(--spectrum-global-color-static-orange-700)
)}:host([variant=warning]) .closeButton:focus-visible:not(:active){color:var(
--spectrum-toast-warning-background-color,var(--spectrum-global-color-static-orange-700)
)}:host([variant=error]),:host([variant=negative]){background-color:var(
--spectrum-toast-negative-background-color,var(--spectrum-semantic-negative-color-background)
);color:var(
--spectrum-toast-negative-background-color,var(--spectrum-semantic-negative-color-background)
)}:host([variant=error]) .closeButton.focus-visible:not(:active),:host([variant=negative]) .closeButton.focus-visible:not(:active){color:var(
--spectrum-toast-negative-background-color,var(--spectrum-semantic-negative-color-background)
)}:host([variant=error]) .closeButton:focus-visible:not(:active),:host([variant=negative]) .closeButton:focus-visible:not(:active){color:var(
--spectrum-toast-negative-background-color,var(--spectrum-semantic-negative-color-background)
)}:host([variant=info]){background-color:var(
--spectrum-toast-info-background-color,var(--spectrum-semantic-informative-color-background)
);color:var(
--spectrum-toast-info-background-color,var(--spectrum-semantic-informative-color-background)
)}:host([variant=info]) .closeButton.focus-visible:not(:active){color:var(
--spectrum-toast-info-background-color,var(--spectrum-semantic-informative-color-background)
)}:host([variant=info]) .closeButton:focus-visible:not(:active){color:var(
--spectrum-toast-info-background-color,var(--spectrum-semantic-informative-color-background)
)}:host([variant=positive]),:host([variant=success]){background-color:var(
--spectrum-toast-positive-background-color,var(--spectrum-semantic-positive-color-background)
);color:var(
--spectrum-toast-positive-background-color,var(--spectrum-semantic-positive-color-background)
)}:host([variant=positive]) .closeButton.focus-visible:not(:active),:host([variant=success]) .closeButton.focus-visible:not(:active){color:var(
--spectrum-toast-positive-background-color,var(--spectrum-semantic-positive-color-background)
)}:host([variant=positive]) .closeButton:focus-visible:not(:active),:host([variant=success]) .closeButton:focus-visible:not(:active){color:var(
--spectrum-toast-positive-background-color,var(--spectrum-semantic-positive-color-background)
)}.content{line-height:1.5}:host(:not([open])){display:none}`;

const toastVariants=['negative','positive','info','error','warning'];/**
 * @element sp-toast
 *
 * @slot - The toast content
 * @slot action - button element surfacing an action in the Toast
 */class Toast extends SpectrumElement{constructor(){super(...arguments);this.open=false;this._timeout=null;this._variant='';this.countdownStart=0;this.nextCount=-1;this.doCountdown=time=>{if(!this.countdownStart){this.countdownStart=performance.now();}if(time-this.countdownStart>this._timeout){this.open=false;this.countdownStart=0;}else {this.countdown();}};this.countdown=()=>{cancelAnimationFrame(this.nextCount);this.nextCount=requestAnimationFrame(this.doCountdown);};this.holdCountdown=()=>{this.stopCountdown();this.addEventListener('focusout',this.resumeCountdown);};this.resumeCountdown=()=>{this.removeEventListener('focusout',this.holdCountdown);this.countdown();};}static get styles(){return [styles];}set timeout(timeout){const hasTimeout=typeof timeout!==null&&timeout>0;const newTimeout=hasTimeout?Math.max(6000,timeout):null;const oldValue=this.timeout;if(newTimeout&&this.countdownStart){this.countdownStart=performance.now();}this._timeout=newTimeout;this.requestUpdate('timeout',oldValue);}get timeout(){return this._timeout;}/**
     * The variant applies specific styling when set to `negative`, `positive`, `info`, `error`, or `warning`.
     * `variant` attribute is removed when not matching one of the above.
     *
     * @param {String} variant
     */set variant(variant){if(variant===this.variant){return;}const oldValue=this.variant;if(toastVariants.includes(variant)){this.setAttribute('variant',variant);this._variant=variant;}else {this.removeAttribute('variant');this._variant='';}this.requestUpdate('variant',oldValue);}get variant(){return this._variant;}renderIcon(variant){switch(variant){case'info':return p`<sp-icon-info label="Information" class="type"></sp-icon-info>`;case'negative':case'error':// deprecated
case'warning':// deprecated
return p`<sp-icon-alert label="Error" class="type"></sp-icon-alert>`;case'positive':case'success':// deprecated
return p`<sp-icon-checkmark-circle label="Success" class="type"></sp-icon-checkmark-circle>`;default:return p``;}}startCountdown(){this.countdown();this.addEventListener('focusin',this.holdCountdown);}stopCountdown(){cancelAnimationFrame(this.nextCount);this.countdownStart=0;}close(){this.open=false;}render(){return p`${this.renderIcon(this.variant)}<div class="body" role="alert"><div class="content"><slot></slot></div><slot name="action"></slot></div><div class="buttons"><sp-clear-button label="Close" variant="overBackground" @click="${this.close}"></sp-clear-button></div>`;}updated(changes){super.updated(changes);if(changes.has('open')){if(this.open){if(this.timeout){this.startCountdown();}}else {if(this.timeout){this.stopCountdown();}const applyDefault=this.dispatchEvent(new CustomEvent('close',{composed:true,bubbles:true,cancelable:true}));if(!applyDefault){this.open=true;}}}if(changes.has('timeout')){if(this.timeout!==null&&this.open){this.startCountdown();}else {this.stopCountdown();}}}}__decorate([e({type:Boolean,reflect:true})],Toast.prototype,"open",void 0);__decorate([e({type:Number})],Toast.prototype,"timeout",null);__decorate([e({type:String})],Toast.prototype,"variant",null);

iliadCustomElementsDefine('sp-toast',Toast);

export { FocusVisiblePolyfillMixin as F, IconBase as I, LikeAnchor as L, Menu as M, ObserveSlotText as O, PickerBase as P, Focusable as a, styles$i as b, tag$1 as c, setCustomTemplateLiteralTag$1 as d, styles$f as e, ObserveSlotPresence as f, getActiveElement as g, styles$7 as h, Icon as i, IconsetRegistry as j, OverlayTrigger as k, Overlay as l, openOverlay as o, setCustomTemplateLiteralTag as s, tag as t };
//# sourceMappingURL=sp-toast.js.map
