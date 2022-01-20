import { r, S as SpectrumElement, p, _ as __decorate, e, i as iliadCustomElementsDefine, T, l, m as l$1, a as i } from './Theme.js';
import { a as Focusable, e as styles$6, t as tag, I as IconBase, s as setCustomTemplateLiteralTag, L as LikeAnchor, g as getActiveElement } from './sp-toast.js';

const styles$5=r`:host{--spectrum-dialog-confirm-background-exit-animation-duration:var(
--spectrum-global-animation-duration-300
);--spectrum-dialog-confirm-background-exit-animation-ease:var(
--spectrum-global-animation-linear
);--spectrum-dialog-confirm-background-exit-animation-delay:var(
--spectrum-global-animation-duration-200
);--spectrum-dialog-confirm-background-entry-animation-duration:var(
--spectrum-global-animation-duration-600
);--spectrum-dialog-confirm-background-entry-animation-ease:var(
--spectrum-global-animation-linear
);--spectrum-dialog-confirm-overlay-background-color:var(
--spectrum-alias-background-color-modal-overlay
)}:host{opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0s linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]){opacity:1;pointer-events:auto;transition-delay:0s;visibility:visible}:host{--spectrum-dialog-confirm-background-entry-animation-delay:0ms;--spectrum-dialog-confirm-background-exit-animation-ease:cubic-bezier(0.5,0,1,1);--spectrum-dialog-confirm-background-entry-animation-ease:cubic-bezier(0,0,0.4,1)}:host{bottom:0;left:0;overflow:hidden;position:fixed;right:0;top:0;transition:opacity var(
--spectrum-dialog-confirm-background-exit-animation-duration,var(--spectrum-global-animation-duration-300)
) var(
--spectrum-dialog-confirm-background-exit-animation-ease,var(--spectrum-global-animation-linear)
) var(
--spectrum-dialog-confirm-background-exit-animation-delay,var(--spectrum-global-animation-duration-200)
),visibility 0s linear calc(var(--spectrum-dialog-confirm-background-exit-animation-delay,var(--spectrum-global-animation-duration-200)) + var(--spectrum-dialog-confirm-background-exit-animation-duration,var(--spectrum-global-animation-duration-300)));z-index:1}:host([open]){transition:opacity var(
--spectrum-dialog-confirm-background-entry-animation-duration,var(--spectrum-global-animation-duration-600)
) var(
--spectrum-dialog-confirm-background-entry-animation-ease,var(--spectrum-global-animation-linear)
) var(--spectrum-dialog-confirm-background-entry-animation-delay,0ms)}:host{background:var(
--spectrum-dialog-confirm-overlay-background-color,var(--spectrum-alias-background-color-modal-overlay)
)}`;

/**
 * @element sp-underlay
 */class Underlay extends SpectrumElement{constructor(){super(...arguments);this.open=false;}static get styles(){return [styles$5];}render(){return p``;}}__decorate([e({type:Boolean,reflect:true})],Underlay.prototype,"open",void 0);

iliadCustomElementsDefine('sp-underlay',Underlay);

const styles$4=r`:host{--spectrum-textfield-m-border-size:var(--spectrum-alias-border-size-thin);--spectrum-textfield-m-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-textfield-m-text-size:var(--spectrum-alias-font-size-m);--spectrum-textfield-m-height:var(--spectrum-alias-control-height-m);--spectrum-textfield-m-padding-left:var(--spectrum-alias-padding-m);--spectrum-textfield-m-padding-right:var(--spectrum-alias-padding-m);--spectrum-textfield-m-min-width:var(--spectrum-global-dimension-size-600);--spectrum-textfield-m-success-icon-height:var(
--spectrum-alias-icon-size-m
);--spectrum-textfield-m-success-icon-width:var(
--spectrum-alias-icon-size-m
);--spectrum-textfield-m-success-icon-margin-left:var(
--spectrum-global-dimension-size-150
);--spectrum-textfield-m-error-icon-height:var(--spectrum-alias-icon-size-m);--spectrum-textfield-m-error-icon-width:var(--spectrum-alias-icon-size-m);--spectrum-textfield-m-error-icon-margin-left:var(
--spectrum-global-dimension-size-150
);--spectrum-textfield-m-placeholder-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-textfield-m-placeholder-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-textfield-m-border-radius:var(
--spectrum-alias-border-radius-medium
);--spectrum-textfield-quiet-m-border-size:var(
--spectrum-alias-border-size-thin
);--spectrum-textfield-quiet-m-padding-left:0;--spectrum-textfield-quiet-m-padding-right:0;--spectrum-textfield-quiet-m-success-icon-margin-left:var(
--spectrum-global-dimension-size-100
);--spectrum-textfield-quiet-m-error-icon-margin-left:var(
--spectrum-global-dimension-size-100
);--spectrum-textfield-quiet-m-border-radius:0px;--spectrum-textarea-m-text-padding-top:var(
--spectrum-global-dimeniion-size-100
);--spectrum-textarea-m-text-padding-bottom:var(
--spectrum-global-dimeniion-size-100
);--spectrum-textarea-m-height:var(--spectrum-alias-item-height-m);--spectrum-textarea-m-padding-left:var(--spectrum-alias-padding-m);--spectrum-textarea-m-padding-right:var(--spectrum-alias-padding-m);--spectrum-alias-body-text-font-family:var(
--spectrum-global-font-family-base
);--spectrum-alias-single-line-width:var(
--spectrum-global-dimension-size-2400
);--spectrum-icon-checkmark-medium-width:undefined;--spectrum-icon-alert-medium-width:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-workflow-icon-size-m:var(
--spectrum-global-dimension-size-225
);--spectrum-semantic-positive-color-icon:var(
--spectrum-global-color-green-600
);--spectrum-textfield-m-border-color-hover:var(
--spectrum-alias-border-color-hover
);--spectrum-textfield-m-placeholder-text-color-hover:var(
--spectrum-alias-text-color-primary
);--spectrum-textfield-m-icon-color-hover:var(
--spectrum-alias-icon-color-primary
);--spectrum-textfield-m-border-color-down:var(
--spectrum-alias-border-color-mouse-focus
);--spectrum-textfield-m-icon-color-down:var(
--spectrum-alias-icon-color-down
);--spectrum-textfield-m-validation-icon-color-valid:var(
--spectrum-global-color-green
);--spectrum-textfield-m-validation-icon-color-error:var(
--spectrum-semantic-negative-color-icon
);--spectrum-textfield-m-border-color-error-hover:var(
--spectrum-semantic-negative-color-state-hover
);--spectrum-textfield-m-validation-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-textfield-m-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-textfield-m-icon-color:var(--spectrum-alias-icon-color-primary);--spectrum-textfield-m-background-color-focus:var(
--spectrum-global-color-gray-100
);--spectrum-textfield-m-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-textfield-m-border-color:var(
--spectrum-textfield-m-background-color
);--spectrum-textfield-m-text-color:var(--spectrum-alias-text-color-primary);--spectrum-textfield-m-placeholder-text-color:var(
--spectrum-alias-text-color-placeholder
);--spectrum-textfield-m-border-color-key-focus:var(
--spectrum-global-color-static-primary
);--spectrum-textfield-m-border-color-error:var(
--spectrum-semantic-negative-color-default
);--spectrum-textfield-m-border-color-error-key-focus:var(
--spectrum-global-color-static-primary
);--spectrum-textfield-m-background-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-textfield-m-border-color-disabled:var(
--spectrum-textfield-m-background-color
);--spectrum-textfield-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-textfield-m-placeholder-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-textfield-quiet-m-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-textfield-quiet-m-border-color:var(
--spectrum-alias-border-color
);--spectrum-textfield-quiet-m-border-color-hover:var(
--spectrum-alias-border-color-hover
);--spectrum-textfield-quiet-m-border-color-down:var(
--spectrum-alias-border-color-mouse-focus
);--spectrum-textfield-quiet-m-border-color-mouse-focus:var(
--spectrum-alias-border-color-mouse-focus
);--spectrum-textfield-quiet-m-border-color-error:var(
--spectrum-semantic-negative-color-default
);--spectrum-textfield-quiet-m-border-color-error-mouse-focus:var(
--spectrum-semantic-negative-color-state-hover
);--spectrum-textfield-quiet-m-border-color-error-key-focus:var(
--spectrum-global-color-static-primary
);--spectrum-textfield-quiet-m-background-color-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-textfield-quiet-m-border-color-disabled:var(
--spectrum-alias-border-color-mid
);--spectrum-textfield-padding-top:calc((var(--spectrum-textfield-height) - var(--spectrum-textfield-text-size)*var(--spectrum-textfield-text-line-height))/2);--spectrum-textfield-padding-bottom:var(--spectrum-textfield-padding-top)}:host{--spectrum-textfield-border-size:var(
--spectrum-textfield-m-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-textfield-text-line-height:var(
--spectrum-textfield-m-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-textfield-text-size:var(
--spectrum-textfield-m-text-size,var(--spectrum-alias-item-text-size-m)
);--spectrum-textfield-height:var(
--spectrum-textfield-m-height,var(--spectrum-alias-item-height-m)
);--spectrum-textfield-padding-left:var(
--spectrum-textfield-m-padding-left,var(--spectrum-alias-item-padding-m)
);--spectrum-textfield-padding-right:var(
--spectrum-textfield-m-padding-right,var(--spectrum-alias-item-padding-m)
);--spectrum-textfield-min-width:var(
--spectrum-textfield-m-min-width,var(--spectrum-global-dimension-size-600)
);--spectrum-textfield-success-icon-height:var(
--spectrum-textfield-m-success-icon-height,var(--spectrum-alias-ui-icon-checkmark-size-100)
);--spectrum-textfield-success-icon-width:var(
--spectrum-textfield-m-success-icon-width,var(--spectrum-alias-ui-icon-checkmark-size-100)
);--spectrum-textfield-success-icon-margin-left:var(
--spectrum-textfield-m-success-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-error-icon-height:var(
--spectrum-textfield-m-error-icon-height,var(--spectrum-alias-ui-icon-alert-size-100)
);--spectrum-textfield-error-icon-width:var(
--spectrum-textfield-m-error-icon-width,var(--spectrum-alias-ui-icon-alert-size-100)
);--spectrum-textfield-error-icon-margin-left:var(
--spectrum-textfield-m-error-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-placeholder-text-font-style:var(
--spectrum-textfield-m-placeholder-text-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-textfield-placeholder-text-font-weight:var(
--spectrum-textfield-m-placeholder-text-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-textfield-border-radius:var(
--spectrum-textfield-m-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-textfield-quiet-border-size:var(
--spectrum-textfield-quiet-m-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-textfield-quiet-padding-left:var(
--spectrum-textfield-quiet-m-padding-left,0
);--spectrum-textfield-quiet-padding-right:var(
--spectrum-textfield-quiet-m-padding-right,0
);--spectrum-textfield-quiet-success-icon-margin-left:var(
--spectrum-textfield-quiet-m-success-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-quiet-error-icon-margin-left:var(
--spectrum-textfield-quiet-m-error-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-quiet-border-radius:var(
--spectrum-textfield-quiet-m-border-radius,0px
);--spectrum-textarea-text-padding-top:var(
--spectrum-textarea-m-text-padding-top,var(--spectrum-alias-item-text-padding-top-m)
);--spectrum-textarea-text-padding-bottom:var(
--spectrum-textarea-m-text-padding-bottom,var(--spectrum-alias-item-text-padding-bottom-m)
);--spectrum-textarea-height:var(
--spectrum-textarea-m-height,var(--spectrum-alias-item-height-m)
);--spectrum-textarea-padding-left:var(
--spectrum-textarea-m-padding-left,var(--spectrum-alias-item-padding-m)
);--spectrum-textarea-padding-right:var(
--spectrum-textarea-m-padding-right,var(--spectrum-alias-item-padding-m)
);--spectrum-textfield-text-font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);--spectrum-textfield-icon-gap:var(--spectrum-global-dimension-size-65);--spectrum-textfield-quiet-icon-gap:var(
--spectrum-global-dimension-size-75
);--spectrum-textarea-min-height:var(--spectrum-textarea-height);--spectrum-textarea-height-adjusted:auto;--spectrum-textarea-padding-top:var(--spectrum-textarea-text-padding-top);--spectrum-textarea-padding-bottom:var(
--spectrum-textarea-text-padding-bottom
)}:host{display:inline-flex;min-width:var(--spectrum-textfield-min-width);position:relative;width:var(
--spectrum-alias-single-line-width,var(--spectrum-global-dimension-size-2400)
)}:host([quiet][multiline]) .input{height:var(
--spectrum-textfield-height
);min-height:var(--spectrum-textfield-height)}.input{-webkit-appearance:none;-moz-appearance:textfield;border:var(--spectrum-textfield-border-size) solid;border-radius:var(--spectrum-textfield-border-radius);box-sizing:border-box;font-family:var(--spectrum-textfield-text-font-family);font-size:var(--spectrum-textfield-text-size);height:var(--spectrum-textfield-height);line-height:var(--spectrum-textfield-text-line-height);margin:0;outline:0;overflow:visible;padding:var(--spectrum-textfield-padding-top) var(--spectrum-textfield-padding-right) var(--spectrum-textfield-padding-bottom) calc(var(--spectrum-textfield-padding-left) - 1px);text-indent:0;text-overflow:ellipsis;transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out;vertical-align:top;width:100%}.input::placeholder{font-style:var(--spectrum-textfield-placeholder-text-font-style);font-weight:var(
--spectrum-textfield-placeholder-text-font-weight
);opacity:1;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}.input:lang(ja)::placeholder,.input:lang(ko)::placeholder,.input:lang(zh)::placeholder{font-style:normal}.input:hover::placeholder{font-weight:var(
--spectrum-textfield-placeholder-text-font-weight
)}.input:disabled{opacity:1;resize:none}.input:disabled::placeholder{font-weight:var(
--spectrum-textfield-placeholder-text-font-weight
)}.input::-ms-clear{height:0;width:0}.input::-webkit-inner-spin-button,.input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}:host([dir=ltr][valid]) .input{padding-right:calc(var(--spectrum-textfield-padding-right) + var(--spectrum-icon-checkmark-medium-width) + var(--spectrum-textfield-success-icon-margin-left))}:host([dir=rtl][valid]) .input{padding-left:calc(var(--spectrum-textfield-padding-right) + var(--spectrum-icon-checkmark-medium-width) + var(--spectrum-textfield-success-icon-margin-left))}:host([dir=ltr][invalid]) .input{padding-right:calc(var(--spectrum-textfield-padding-right) + var(--spectrum-icon-alert-medium-width,var(--spectrum-global-dimension-size-225)) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl][invalid]) .input{padding-left:calc(var(--spectrum-textfield-padding-right) + var(--spectrum-icon-alert-medium-width,var(--spectrum-global-dimension-size-225)) + var(--spectrum-textfield-error-icon-margin-left))}:host([multiline]) .input{height:var(
--spectrum-textarea-height-adjusted
);min-height:var(--spectrum-textarea-min-height);overflow:auto;padding:var(--spectrum-textarea-padding-top) var(--spectrum-textarea-padding-right) var(--spectrum-textarea-padding-bottom) calc(var(--spectrum-textarea-padding-left) - 1px)}:host([dir=ltr][quiet]) .input{padding-left:var(
--spectrum-textfield-quiet-padding-left
)}:host([dir=rtl][quiet]) .input{padding-right:var(
--spectrum-textfield-quiet-padding-left
)}:host([dir=ltr][quiet]) .input{padding-right:var(
--spectrum-textfield-quiet-padding-right
)}:host([dir=rtl][quiet]) .input{padding-left:var(
--spectrum-textfield-quiet-padding-right
)}:host([quiet]) .input{border-bottom-width:var(--spectrum-textfield-quiet-border-size);border-left-width:0;border-radius:var(
--spectrum-textfield-quiet-border-radius
);border-right-width:0;border-top-width:0;overflow-y:hidden;resize:none}:host([dir=ltr][invalid][quiet]) .input{padding-right:calc(var(--spectrum-icon-alert-medium-width,var(--spectrum-global-dimension-size-225)) + var(--spectrum-textfield-quiet-error-icon-margin-left))}:host([dir=rtl][invalid][quiet]) .input{padding-left:calc(var(--spectrum-icon-alert-medium-width,var(--spectrum-global-dimension-size-225)) + var(--spectrum-textfield-quiet-error-icon-margin-left))}:host([dir=ltr][valid][quiet]) .input{padding-right:calc(var(--spectrum-icon-checkmark-medium-width) + var(--spectrum-textfield-quiet-success-icon-margin-left))}:host([dir=rtl][valid][quiet]) .input{padding-left:calc(var(--spectrum-icon-checkmark-medium-width) + var(--spectrum-textfield-quiet-success-icon-margin-left))}.icon{pointer-events:all;position:absolute}:host([dir=ltr][quiet]) .icon{padding-right:0}:host([dir=rtl][quiet]) .icon{padding-left:0}:host([dir=ltr][invalid]) .icon{right:var(
--spectrum-textfield-error-icon-margin-left
)}:host([dir=rtl][invalid]) .icon{left:var(
--spectrum-textfield-error-icon-margin-left
)}:host([invalid]) .icon{bottom:calc(var(--spectrum-textfield-height)/ 2 - var(--spectrum-textfield-error-icon-height)/ 2);height:var(--spectrum-textfield-error-icon-height);width:var(
--spectrum-textfield-error-icon-width
)}:host([dir=ltr][quiet][invalid]) .icon{right:0}:host([dir=rtl][quiet][invalid]) .icon{left:0}:host([dir=ltr][valid]) .icon{right:var(
--spectrum-textfield-success-icon-margin-left
)}:host([dir=rtl][valid]) .icon{left:var(
--spectrum-textfield-success-icon-margin-left
)}:host([valid]) .icon{bottom:calc(var(--spectrum-textfield-height)/ 2 - var(--spectrum-textfield-success-icon-height)/ 2);height:var(--spectrum-textfield-success-icon-height);width:var(
--spectrum-textfield-success-icon-width
)}:host([dir=ltr][quiet][valid]) .icon{right:0}:host([dir=rtl][quiet][valid]) .icon{left:0}:host([dir=ltr]) .icon-workflow{left:var(
--spectrum-textfield-error-icon-margin-left
)}:host([dir=rtl]) .icon-workflow{right:var(
--spectrum-textfield-error-icon-margin-left
)}.icon-workflow{display:block;height:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);position:absolute;top:calc(var(--spectrum-textfield-height)/ 2 - var(--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225))/ 2);width:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
)}:host([dir=ltr][quiet]) .icon-workflow{left:0}:host([dir=rtl][quiet]) .icon-workflow{right:0}:host([dir=ltr][quiet]) .icon-workflow~.input{padding-left:calc(var(--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)) + var(--spectrum-textfield-quiet-icon-gap))}:host([dir=rtl][quiet]) .icon-workflow~.input{padding-right:calc(var(--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)) + var(--spectrum-textfield-quiet-icon-gap))}:host([dir=ltr]) .icon-workflow+.input{padding-left:calc(var(--spectrum-textfield-error-icon-margin-left) + var(--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)) + var(--spectrum-textfield-icon-gap))}:host([dir=rtl]) .icon-workflow+.input{padding-right:calc(var(--spectrum-textfield-error-icon-margin-left) + var(--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)) + var(--spectrum-textfield-icon-gap))}:host([multiline]) .icon-workflow~.input{height:var(
--spectrum-textfield-height
);min-height:var(--spectrum-textfield-height)}:host{--spectrum-textfield-m-validation-icon-color-valid:var(
--spectrum-semantic-positive-color-icon,var(--spectrum-global-color-green-600)
)}:host(:hover) .input{border-color:var(
--spectrum-textfield-m-border-color-hover,var(--spectrum-alias-border-color-hover)
)}:host(:hover) .input::placeholder{color:var(
--spectrum-textfield-m-placeholder-text-color-hover,var(--spectrum-alias-placeholder-text-color-hover)
)}:host(:hover) .icon-workflow{color:var(
--spectrum-textfield-m-icon-color-hover,var(--spectrum-global-color-gray-900)
)}:host(:active) .input{border-color:var(
--spectrum-textfield-m-border-color-down,var(--spectrum-alias-border-color-mouse-focus)
)}:host(:active) .icon-workflow{color:var(
--spectrum-textfield-m-icon-color-down,var(--spectrum-alias-icon-color-down)
)}:host([valid]) .icon{color:var(
--spectrum-textfield-m-validation-icon-color-valid,var(--spectrum-global-color-green-400)
)}:host([invalid]) .icon{color:var(
--spectrum-textfield-m-validation-icon-color-error,var(--spectrum-semantic-negative-color-icon)
)}:host([invalid]:hover) .input{border-color:var(
--spectrum-textfield-m-border-color-error-hover,var(--spectrum-semantic-negative-color-state-hover)
)}:host([disabled]) .icon{color:var(
--spectrum-textfield-m-validation-icon-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([disabled]) .icon-workflow{color:var(
--spectrum-textfield-m-icon-color-disabled,var(--spectrum-global-color-gray-500)
)}.icon-workflow{color:var(
--spectrum-textfield-m-icon-color,var(--spectrum-alias-icon-color)
)}.input{background-color:var(
--spectrum-textfield-m-background-color,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-textfield-m-border-color,var(--spectrum-alias-border-color)
);color:var(
--spectrum-textfield-m-text-color,var(--spectrum-alias-text-color)
)}.input::placeholder{color:var(
--spectrum-textfield-m-placeholder-text-color,var(--spectrum-global-color-gray-600)
)}.input:focus,:host([focused]) .input{border-color:var(
--spectrum-textfield-m-border-color-down,var(--spectrum-alias-border-color-mouse-focus)
)}.input.focus-visible,:host([focused]) .input{border-color:var(
--spectrum-textfield-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}.input:focus-visible,:host([focused]) .input{border-color:var(
--spectrum-textfield-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([invalid]) .input{border-color:var(
--spectrum-textfield-m-border-color-error,var(--spectrum-semantic-negative-color-default)
)}:host([focused][invalid]) .input,:host([invalid]) .input.focus-visible{border-color:var(
--spectrum-textfield-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([focused][invalid]) .input,:host([invalid]) .input:focus-visible{border-color:var(
--spectrum-textfield-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
)}.input :disabled,:host([disabled]) .input,:host([disabled]:hover) .input{-webkit-text-fill-color:var(
--spectrum-textfield-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);background-color:var(
--spectrum-textfield-m-background-color-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-textfield-m-border-color-disabled,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-textfield-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}.input :disabled::placeholder,:host([disabled]) .input::placeholder,:host([disabled]:hover) .input::placeholder{color:var(
--spectrum-textfield-m-placeholder-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([quiet]) .input{background-color:var(
--spectrum-textfield-quiet-m-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-textfield-quiet-m-border-color,var(--spectrum-alias-border-color)
)}:host([focused][quiet]) .input,:host([quiet]) .input:focus{border-color:var(
--spectrum-textfield-quiet-m-border-color-mouse-focus,var(--spectrum-alias-border-color-mouse-focus)
)}:host([focused][quiet]) .input,:host([quiet]) .input.focus-visible{border-color:var(
--spectrum-textfield-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([focused][quiet]) .input,:host([quiet]) .input:focus-visible{border-color:var(
--spectrum-textfield-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([invalid][quiet]) .input{border-color:var(
--spectrum-textfield-quiet-m-border-color-error,var(--spectrum-semantic-negative-color-default)
)}:host([focused][invalid][quiet]) .input,:host([invalid][quiet]) .input:focus{border-color:var(
--spectrum-textfield-quiet-m-border-color-error-mouse-focus,var(--spectrum-semantic-negative-color-state-hover)
)}:host([focused][invalid][quiet]) .input,:host([invalid][quiet]) .input.focus-visible{border-color:var(
--spectrum-textfield-quiet-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([focused][invalid][quiet]) .input,:host([invalid][quiet]) .input:focus-visible{border-color:var(
--spectrum-textfield-quiet-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([disabled][quiet]) .input,:host([disabled][quiet]:hover) .input,:host([quiet]) .input :disabled{background-color:var(
--spectrum-textfield-quiet-m-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-textfield-quiet-m-border-color-disabled,var(--spectrum-alias-border-color-mid)
)}.input:focus,:host([focused]) .input{background-color:var(--spectrum-textfield-m-background-color-focus)}:host([multiline]){resize:both}textarea{resize:inherit}:host([grows]) .input{height:100%;left:0;position:absolute;resize:none;top:0}:host([grows]) #sizer{border:var(
--spectrum-textfield-border-size,var(--spectrum-alias-border-size-thin)
) solid;border-radius:var(
--spectrum-textfield-border-radius,var(--spectrum-alias-border-radius-medium)
);box-sizing:border-box;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);font-size:var(
--spectrum-textfield-text-size,var(--spectrum-alias-font-size-default)
);line-height:var(
--spectrum-textfield-text-line-height,var(--spectrum-alias-body-text-line-height)
);margin:0;overflow-wrap:break-word;padding:var(--spectrum-textarea-padding-top) var(--spectrum-textarea-padding-right) var(--spectrum-textarea-padding-bottom) calc(var(--spectrum-textarea-padding-left) - 1px);text-indent:0;vertical-align:top;width:100%}:host([grows][quiet]) #sizer{border-left-width:0;border-right-width:0;padding-left:var(--spectrum-textfield-quiet-padding-x,0);padding-right:var(--spectrum-textfield-quiet-padding-x,0)}.icon,.icon-workflow{pointer-events:none}`;

class TextfieldBase extends Focusable{constructor(){super(...arguments);this.allowedKeys='';this.focused=false;this.invalid=false;this.label='';this.placeholder='';this.grows=false;this.maxlength=-1;this.minlength=-1;this.multiline=false;this.readonly=false;this.valid=false;this._value='';this.quiet=false;this.required=false;}static get styles(){return [styles$4,styles$6];}set value(value){if(value===this.value){return;}const oldValue=this._value;this._value=value;this.requestUpdate('value',oldValue);}get value(){return this._value;}get focusElement(){return this.inputElement;}onInput(){if(this.allowedKeys&&this.inputElement.value){const regExp=new RegExp(`^[${this.allowedKeys}]*$`,'u');if(!regExp.test(this.inputElement.value)){const selectionStart=this.inputElement.selectionStart;const nextSelectStart=selectionStart-1;this.inputElement.value=this.value.toString();this.inputElement.setSelectionRange(nextSelectStart,nextSelectStart);return;}}this.value=this.inputElement.value;const selectionStart=this.inputElement.selectionStart;this.updateComplete.then(()=>{this.inputElement.setSelectionRange(selectionStart,selectionStart);});}onChange(){this.dispatchEvent(new Event('change',{bubbles:true,composed:true}));}onFocus(){this.focused=true;}onBlur(){this.focused=false;}renderStateIcons(){if(this.invalid){return p`<sp-icon-alert id="invalid" class="icon"></sp-icon-alert>`;}else if(this.valid){return p`<sp-icon-checkmark100 id="valid" class="icon spectrum-UIIcon-Checkmark100"></sp-icon-checkmark100>`;}return T;}get displayValue(){return this.value.toString();}select(){this.inputElement.select();}get renderMultiline(){return p`${this.grows&&!this.quiet?p`<div id="sizer">${this.value}</div>`:T} <textarea aria-label="${this.label||this.placeholder}" aria-invalid="${l(this.invalid||undefined)}" class="input" maxlength="${l(this.maxlength>-1?this.maxlength:undefined)}" minlength="${l(this.minlength>-1?this.minlength:undefined)}" pattern="${l(this.pattern)}" placeholder="${this.placeholder}" .value="${this.displayValue}" @change="${this.onChange}" @input="${this.onInput}" @focus="${this.onFocus}" @blur="${this.onBlur}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" autocomplete="${l(this.autocomplete)}"></textarea>`;}get renderInput(){return p`<input type="text" aria-label="${this.label||this.placeholder}" aria-invalid="${l(this.invalid||undefined)}" class="input" maxlength="${l(this.maxlength>-1?this.maxlength:undefined)}" minlength="${l(this.minlength>-1?this.minlength:undefined)}" pattern="${l(this.pattern)}" placeholder="${this.placeholder}" .value="${l$1(this.displayValue)}" @change="${this.onChange}" @input="${this.onInput}" @focus="${this.onFocus}" @blur="${this.onBlur}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" autocomplete="${l(this.autocomplete)}">`;}render(){return p`${this.renderStateIcons()} ${this.multiline?this.renderMultiline:this.renderInput}`;}updated(changedProperties){if(changedProperties.has('value')||changedProperties.has('required')&&this.required){this.checkValidity();}}checkValidity(){let validity=this.inputElement.checkValidity();if(this.required||this.value&&this.pattern){if((this.disabled||this.multiline)&&this.pattern){const regex=new RegExp(`^${this.pattern}$`,'u');validity=regex.test(this.value.toString());}if(typeof this.minlength!=='undefined'){validity=validity&&this.value.toString().length>this.minlength;}this.valid=validity;this.invalid=!validity;}return validity;}}__decorate([e({attribute:'allowed-keys'})],TextfieldBase.prototype,"allowedKeys",void 0);__decorate([e({type:Boolean,reflect:true})],TextfieldBase.prototype,"focused",void 0);__decorate([i('.input')],TextfieldBase.prototype,"inputElement",void 0);__decorate([e({type:Boolean,reflect:true})],TextfieldBase.prototype,"invalid",void 0);__decorate([e()],TextfieldBase.prototype,"label",void 0);__decorate([e()],TextfieldBase.prototype,"placeholder",void 0);__decorate([e()],TextfieldBase.prototype,"pattern",void 0);__decorate([e({type:Boolean,reflect:true})],TextfieldBase.prototype,"grows",void 0);__decorate([e({type:Number})],TextfieldBase.prototype,"maxlength",void 0);__decorate([e({type:Number})],TextfieldBase.prototype,"minlength",void 0);__decorate([e({type:Boolean,reflect:true})],TextfieldBase.prototype,"multiline",void 0);__decorate([e({type:Boolean,reflect:true})],TextfieldBase.prototype,"readonly",void 0);__decorate([e({type:Boolean,reflect:true})],TextfieldBase.prototype,"valid",void 0);__decorate([e({type:String})],TextfieldBase.prototype,"value",null);__decorate([e({type:Boolean,reflect:true})],TextfieldBase.prototype,"quiet",void 0);__decorate([e({type:Boolean,reflect:true})],TextfieldBase.prototype,"required",void 0);__decorate([e({type:String,reflect:true})],TextfieldBase.prototype,"autocomplete",void 0);/**
 * @element sp-textfield
 */class Textfield extends TextfieldBase{constructor(){super(...arguments);this._value='';}set value(value){if(value===this.value){return;}const oldValue=this._value;this._value=value;this.requestUpdate('value',oldValue);}get value(){return this._value;}}__decorate([e({type:String})],Textfield.prototype,"value",null);

const MagnifyIcon=({width=24,height=24,hidden=false,title='Magnify'}={})=>{return tag`<svg xmlns="http://www.w3.org/2000/svg" height="${height}" viewBox="0 0 36 36" width="${width}" aria-hidden="${hidden?'true':'false'}" role="img" fill="currentColor" aria-label="${title}"><path d="M33.173 30.215L25.4 22.443a12.826 12.826 0 10-2.957 2.957l7.772 7.772a2.1 2.1 0 002.958-2.958zM6 15a9 9 0 119 9 9 9 0 01-9-9z"/></svg>`;};

/**
 * @element sp-icon-magnify
 */class IconMagnify extends IconBase{render(){setCustomTemplateLiteralTag(p);return MagnifyIcon({hidden:!this.label,title:this.label});}}

iliadCustomElementsDefine('sp-icon-magnify',IconMagnify);

const styles$3=r`:host{--spectrum-actionbutton-m-min-width:var(
--spectrum-global-dimension-size-400
);--spectrum-icon-cross-small-width:var(
--spectrum-global-dimension-size-100
);--spectrum-textfield-m-icon-color:var(--spectrum-alias-icon-color);--spectrum-search-m-icon-color-hover:var(--spectrum-global-color-gray-900);--spectrum-search-m-icon-color-down:var(--spectrum-alias-icon-color-down);--spectrum-search-m-icon-color-key-focus:var(
--spectrum-global-color-gray-900
);--spectrum-textfield-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
)}:host{--spectrum-search-quiet-button-offset:calc(var(
--spectrum-actionbutton-m-min-width,
var(--spectrum-global-dimension-size-400)
)/2 - var(
--spectrum-icon-cross-small-width,
var(--spectrum-global-dimension-size-100)
)/2)}:host{display:inline-block;position:relative}:host([dir=ltr]) #button{right:0}:host([dir=rtl]) #button{left:0}#button{position:absolute;top:0}#input{-webkit-appearance:none;outline-offset:-2px}#input::-webkit-search-cancel-button,#input::-webkit-search-decoration{-webkit-appearance:none}.spectrum-Search--quiet #button{transform:translateX(var(--spectrum-search-quiet-button-offset))}.icon{color:var(
--spectrum-textfield-m-icon-color,var(--spectrum-alias-icon-color)
)}#input:hover~.icon{color:var(
--spectrum-search-m-icon-color-hover,var(--spectrum-global-color-gray-900)
)}#input:active~.icon{color:var(
--spectrum-search-m-icon-color-down,var(--spectrum-alias-icon-color-down)
)}#input.focus-visible~.icon{color:var(
--spectrum-search-m-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}#input:focus-visible~.icon{color:var(
--spectrum-search-m-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}#input:disabled~.icon{color:var(
--spectrum-textfield-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}input::-webkit-search-cancel-button{display:none}`;

const stopPropagation=event=>event.stopPropagation();/**
 * @element sp-search
 */class Search extends Textfield{constructor(){super(...arguments);this.action='';this.label='Search';this.placeholder='Search';}static get styles(){return [...super.styles,styles$3];}handleSubmit(event){const applyDefault=this.dispatchEvent(new Event('submit',{cancelable:true,bubbles:true}));if(!applyDefault){event.preventDefault();}}handleKeydown(event){const{code}=event;if(!this.value||code!=='Escape'){return;}this.reset();}async reset(){this.value='';await this.updateComplete;this.focusElement.dispatchEvent(new InputEvent('input',{bubbles:true,composed:true}));// The native `change` event on an `input` element is not composed,
// so this synthetic replication of a `change` event must not be
// either as the `Textfield` baseclass should only need to handle
// the native variant of this interaction.
this.focusElement.dispatchEvent(new InputEvent('change',{bubbles:true}));}render(){return p`<form action="${this.action}" id="form" method="${l(this.method)}" @submit="${this.handleSubmit}" @reset="${this.reset}" @keydown="${this.handleKeydown}"><sp-icon-magnify class="icon magnifier icon-workflow"></sp-icon-magnify>${super.render()} ${this.value?p`<sp-clear-button id="button" label="Reset" tabindex="-1" type="reset" @keydown="${stopPropagation}"></sp-clear-button>`:p``}</form>`;}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.inputElement.setAttribute('type','search');}updated(changedProperties){super.updated(changedProperties);this.multiline=false;}}__decorate([e()],Search.prototype,"action",void 0);__decorate([e()],Search.prototype,"label",void 0);__decorate([e()],Search.prototype,"method",void 0);__decorate([e()],Search.prototype,"placeholder",void 0);__decorate([i('#form')],Search.prototype,"form",void 0);

iliadCustomElementsDefine('sp-search',Search);

const styles$2=r`:host{--spectrum-sidenav-item-gap:var(--spectrum-global-dimension-size-50);--spectrum-sidenav-item-height:var(--spectrum-alias-single-line-height);--spectrum-sidenav-item-padding-x:var(
--spectrum-global-dimension-size-150
);--spectrum-sidenav-item-border-radius:var(
--spectrum-alias-border-radius-regular
);--spectrum-sidenav-item-text-size:var(--spectrum-alias-font-size-default);--spectrum-sidenav-item-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-tabs-m-focus-ring-size:var(--spectrum-alias-border-size-thick);--spectrum-sidenav-icon-gap:var(--spectrum-global-dimension-size-100);--spectrum-sidenav-heading-height:var(--spectrum-alias-single-line-height);--spectrum-sidenav-heading-gap-top:var(
--spectrum-global-dimension-size-200
);--spectrum-sidenav-heading-gap-bottom:var(
--spectrum-global-dimension-size-50
);--spectrum-sidenav-heading-padding-x:var(
--spectrum-global-dimension-size-150
);--spectrum-sidenav-heading-border-radius:var(
--spectrum-alias-border-radius-regular
);--spectrum-sidenav-heading-text-size:var(
--spectrum-global-dimension-font-size-50
);--spectrum-sidenav-heading-text-font-weight:var(
--spectrum-global-font-weight-medium
);--spectrum-sidenav-heading-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-medium
);--spectrum-sidenav-multilevel-main-item-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-sidenav-multilevel-item-indentation:var(
--spectrum-global-dimension-size-150
);--spectrum-sidenav-item-text-color-selected:var(
--spectrum-alias-text-color-hover
);--spectrum-sidenav-item-background-color-selected:var(
--spectrum-alias-highlight-hover
);--spectrum-sidenav-item-background-color-down:var(
--spectrum-alias-highlight-hover
);--spectrum-sidenav-item-background-color-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-sidenav-item-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-sidenav-item-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-sidenav-item-text-color:var(--spectrum-alias-text-color);--spectrum-sidenav-item-background-color-hover:var(
--spectrum-alias-highlight-hover
);--spectrum-sidenav-item-text-color-hover:var(
--spectrum-alias-text-color-hover
);--spectrum-sidenav-item-background-color-key-focus:var(
--spectrum-alias-highlight-hover
);--spectrum-sidenav-item-text-color-key-focus:var(
--spectrum-alias-text-color-hover
);--spectrum-sidenav-item-border-color-key-focus:var(
--spectrum-alias-border-color-focus
);--spectrum-sidenav-heading-text-color:var(
--spectrum-global-color-gray-700
)}:host{--spectrum-sidenav-item-padding-y:var(
--spectrum-global-dimension-size-65
)}:host{list-style-type:none;margin:0;padding:0}:host{--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-item-font-weight,var(--spectrum-global-font-weight-regular)
);display:block;width:240px}:host([variant=multilevel]){--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-multilevel-main-item-font-weight,var(--spectrum-global-font-weight-bold)
)}`;

const styles$1=r`:host{--spectrum-sidenav-item-gap:var(--spectrum-global-dimension-size-50);--spectrum-sidenav-item-height:var(--spectrum-alias-single-line-height);--spectrum-sidenav-item-padding-x:var(
--spectrum-global-dimension-size-150
);--spectrum-sidenav-item-border-radius:var(
--spectrum-alias-border-radius-regular
);--spectrum-sidenav-item-text-size:var(--spectrum-alias-font-size-default);--spectrum-sidenav-item-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-tabs-m-focus-ring-size:var(--spectrum-alias-border-size-thick);--spectrum-sidenav-icon-gap:var(--spectrum-global-dimension-size-100);--spectrum-sidenav-heading-height:var(--spectrum-alias-single-line-height);--spectrum-sidenav-heading-gap-top:var(
--spectrum-global-dimension-size-200
);--spectrum-sidenav-heading-gap-bottom:var(
--spectrum-global-dimension-size-50
);--spectrum-sidenav-heading-padding-x:var(
--spectrum-global-dimension-size-150
);--spectrum-sidenav-heading-border-radius:var(
--spectrum-alias-border-radius-regular
);--spectrum-sidenav-heading-text-size:var(
--spectrum-global-dimension-font-size-50
);--spectrum-sidenav-heading-text-font-weight:var(
--spectrum-global-font-weight-medium
);--spectrum-sidenav-heading-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-medium
);--spectrum-sidenav-multilevel-main-item-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-sidenav-multilevel-item-indentation:var(
--spectrum-global-dimension-size-150
);--spectrum-sidenav-item-text-color-selected:var(
--spectrum-alias-text-color-hover
);--spectrum-sidenav-item-background-color-selected:var(
--spectrum-alias-highlight-hover
);--spectrum-sidenav-item-background-color-down:var(
--spectrum-alias-highlight-hover
);--spectrum-sidenav-item-background-color-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-sidenav-item-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-sidenav-item-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-sidenav-item-text-color:var(--spectrum-alias-text-color);--spectrum-sidenav-item-background-color-hover:var(
--spectrum-alias-highlight-hover
);--spectrum-sidenav-item-text-color-hover:var(
--spectrum-alias-text-color-hover
);--spectrum-sidenav-item-background-color-key-focus:var(
--spectrum-alias-highlight-hover
);--spectrum-sidenav-item-text-color-key-focus:var(
--spectrum-alias-text-color-hover
);--spectrum-sidenav-item-border-color-key-focus:var(
--spectrum-alias-border-color-focus
);--spectrum-sidenav-heading-text-color:var(
--spectrum-global-color-gray-700
)}#list{--spectrum-sidenav-item-padding-y:var(
--spectrum-global-dimension-size-65
);list-style-type:none;margin:0;padding:0}:host{list-style-type:none;margin-bottom:var(
--spectrum-sidenav-item-gap,var(--spectrum-global-dimension-size-50)
);margin-left:0;margin-right:0;margin-top:var(
--spectrum-sidenav-item-gap,var(--spectrum-global-dimension-size-50)
)}#itemLink{align-items:center;border-radius:var(
--spectrum-sidenav-item-border-radius,var(--spectrum-alias-border-radius-regular)
);box-sizing:border-box;cursor:pointer;display:inline-flex;font-size:var(
--spectrum-sidenav-item-text-size,var(--spectrum-alias-font-size-default)
);font-style:normal;font-weight:var(
--spectrum-sidenav-item-text-font-weight,var(--spectrum-global-font-weight-regular)
);-webkit-hyphens:auto;hyphens:auto;justify-content:left;min-height:var(
--spectrum-sidenav-item-height,var(--spectrum-alias-single-line-height)
);padding:var(--spectrum-sidenav-item-padding-y) var(
--spectrum-sidenav-item-padding-x,var(--spectrum-global-dimension-size-150)
);position:relative;text-decoration:none;transition:background-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out;width:100%;word-break:break-word}#itemLink:focus{outline:0}:host([dir=ltr]) #itemLink.focus-visible:before{left:0}:host([dir=ltr]) #itemLink:focus-visible:before{left:0}:host([dir=rtl]) #itemLink.focus-visible:before{right:0}:host([dir=rtl]) #itemLink:focus-visible:before{right:0}:host([dir=ltr]) #itemLink.focus-visible:before{right:0}:host([dir=ltr]) #itemLink:focus-visible:before{right:0}:host([dir=rtl]) #itemLink.focus-visible:before{left:0}:host([dir=rtl]) #itemLink:focus-visible:before{left:0}#itemLink.focus-visible:before{border-bottom:var(
--spectrum-tabs-m-focus-ring-size,var(--spectrum-alias-border-size-thick)
) solid transparent;border-radius:var(
--spectrum-sidenav-item-border-radius,var(--spectrum-alias-border-radius-regular)
);border-top:var(
--spectrum-tabs-m-focus-ring-size,var(--spectrum-alias-border-size-thick)
) solid transparent;bottom:0;content:"";position:absolute;top:0}#itemLink:focus-visible:before{border-bottom:var(
--spectrum-tabs-m-focus-ring-size,var(--spectrum-alias-border-size-thick)
) solid transparent;border-radius:var(
--spectrum-sidenav-item-border-radius,var(--spectrum-alias-border-radius-regular)
);border-top:var(
--spectrum-tabs-m-focus-ring-size,var(--spectrum-alias-border-size-thick)
) solid transparent;bottom:0;content:"";position:absolute;top:0}:host([dir=ltr]) #itemLink ::slotted([slot=icon]){margin-right:var(
--spectrum-sidenav-icon-gap,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) #itemLink ::slotted([slot=icon]){margin-left:var(
--spectrum-sidenav-icon-gap,var(--spectrum-global-dimension-size-100)
)}#itemLink ::slotted([slot=icon]){flex-shrink:0}:host([dir=ltr]) .spectrum-SideNav-heading{margin-right:0}:host([dir=rtl]) .spectrum-SideNav-heading{margin-left:0}:host([dir=ltr]) .spectrum-SideNav-heading{margin-left:0}:host([dir=rtl]) .spectrum-SideNav-heading{margin-right:0}:host([dir=ltr]) .spectrum-SideNav--multiLevel #list #itemLink{padding-left:calc(var(--spectrum-sidenav-multilevel-item-indentation,var(--spectrum-global-dimension-size-150)) + var(--spectrum-sidenav-item-padding-x,var(--spectrum-global-dimension-size-150)))}:host([dir=rtl]) .spectrum-SideNav--multiLevel #list #itemLink{padding-right:calc(var(--spectrum-sidenav-multilevel-item-indentation,var(--spectrum-global-dimension-size-150)) + var(--spectrum-sidenav-item-padding-x,var(--spectrum-global-dimension-size-150)))}:host([dir=ltr]) .spectrum-SideNav--multiLevel #list #list #itemLink{padding-left:calc(var(--spectrum-sidenav-multilevel-item-indentation,var(--spectrum-global-dimension-size-150)) + var(--spectrum-sidenav-item-padding-x,var(--spectrum-global-dimension-size-150)))}:host([dir=rtl]) .spectrum-SideNav--multiLevel #list #list #itemLink{padding-right:calc(var(--spectrum-sidenav-multilevel-item-indentation,var(--spectrum-global-dimension-size-150)) + var(--spectrum-sidenav-item-padding-x,var(--spectrum-global-dimension-size-150)))}:host([selected])>#itemLink{background-color:var(
--spectrum-sidenav-item-background-color-selected,var(--spectrum-alias-highlight-hover)
);color:var(
--spectrum-sidenav-item-text-color-selected,var(--spectrum-alias-text-color-hover)
)}.is-active>#itemLink{background-color:var(
--spectrum-sidenav-item-background-color-down,var(--spectrum-alias-highlight-hover)
)}:host([disabled]) #itemLink{background-color:var(
--spectrum-sidenav-item-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-sidenav-item-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);cursor:default;pointer-events:none}#itemLink{background-color:var(
--spectrum-sidenav-item-background-color,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-sidenav-item-text-color,var(--spectrum-alias-text-color)
)}#itemLink:hover{background-color:var(
--spectrum-sidenav-item-background-color-hover,var(--spectrum-alias-highlight-hover)
);color:var(
--spectrum-sidenav-item-text-color-hover,var(--spectrum-alias-text-color-hover)
)}#itemLink:active{background-color:var(
--spectrum-sidenav-item-background-color-down,var(--spectrum-alias-highlight-hover)
)}#itemLink.focus-visible{background-color:var(
--spectrum-sidenav-item-background-color-key-focus,var(--spectrum-alias-highlight-hover)
);color:var(
--spectrum-sidenav-item-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}#itemLink:focus-visible{background-color:var(
--spectrum-sidenav-item-background-color-key-focus,var(--spectrum-alias-highlight-hover)
);color:var(
--spectrum-sidenav-item-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}#itemLink.focus-visible:before{border-color:var(
--spectrum-sidenav-item-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}#itemLink:focus-visible:before{border-color:var(
--spectrum-sidenav-item-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host{display:block}:host([disabled]){pointer-events:none}:host([multiLevel]){--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-item-font-weight,700
)}::slotted(sp-sidenav-item:not([multiLevel])){--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-item-font-weight,400
)}#itemLink{font-weight:var(--spectrum-web-component-sidenav-font-weight);justify-content:start}:host([dir=ltr]) #itemLink[data-level="1"]{padding-left:calc(var(--spectrum-sidenav-multilevel-item-indentation-level1,var(--spectrum-global-dimension-size-150)) + var(--spectrum-sidenav-item-padding-x,var(--spectrum-global-dimension-size-150)))}:host([dir=ltr]) #itemLink[data-level="2"]{padding-left:calc(var(--spectrum-sidenav-multilevel-item-indentation-level2,var(--spectrum-global-dimension-size-300)) + var(--spectrum-sidenav-item-padding-x,var(--spectrum-global-dimension-size-150)))}:host([dir=rtl]) #itemLink[data-level="1"]{padding-right:calc(var(--spectrum-sidenav-multilevel-item-indentation-level1,var(--spectrum-global-dimension-size-150)) + var(--spectrum-sidenav-item-padding-x,var(--spectrum-global-dimension-size-150)))}:host([dir=rtl]) #itemLink[data-level="2"]{padding-right:calc(var(--spectrum-sidenav-multilevel-item-indentation-level2,var(--spectrum-global-dimension-size-300)) + var(--spectrum-sidenav-item-padding-x,var(--spectrum-global-dimension-size-150)))}a ::slotted(sp-sidenav-item){display:none}`;

/**
 * @element sp-sidenav-item
 *
 * @slot - the Sidenav Items to display as children of this item
 */class SideNavItem extends LikeAnchor(Focusable){constructor(){super(...arguments);this.value=undefined;this.manageTabIndex=false;this.selected=false;this.expanded=false;}static get styles(){return [styles$1];}get parentSideNav(){if(!this._parentSidenav){this._parentSidenav=this.closest('sp-sidenav');}return this._parentSidenav;}get hasChildren(){return !!this.querySelector('sp-sidenav-item');}get depth(){let depth=0;let element=this.parentElement;while(element instanceof SideNavItem){depth++;element=element.parentElement;}return depth;}handleSideNavSelect(event){this.selected=event.target===this;}handleClick(event){if(!this.href&&event){event.preventDefault();}if(!this.disabled){if(this.hasChildren){this.expanded=!this.expanded;}else if(this.value){this.announceSelected(this.value);}}}announceSelected(value){const selectDetail={value};const selectionEvent=new CustomEvent('sidenav-select',{bubbles:true,composed:true,detail:selectDetail});this.dispatchEvent(selectionEvent);}click(){this.handleClick();}get focusElement(){return this.shadowRoot.querySelector('#itemLink');}update(changes){if(!this.hasAttribute('slot')){this.slot='descendant';}super.update(changes);}render(){return p`<a href="${this.href||'#'}" target="${l(this.target)}" download="${l(this.download)}" rel="${l(this.rel)}" data-level="${this.depth}" @click="${this.handleClick}" id="itemLink" aria-current="${l(this.selected&&this.href?'page':undefined)}"><slot name="icon"></slot>${this.label}<slot></slot></a>${this.expanded?p`<slot name="descendant"></slot>`:p``}`;}updated(changes){if(changes.has('selected')||changes.has('manageTabIndex')){const tabIndexForSelectedState=this.selected?0:-1;this.tabIndex=this.manageTabIndex?tabIndexForSelectedState:0;}super.updated(changes);}connectedCallback(){super.connectedCallback();this.startTrackingSelection();}disconnectedCallback(){this.stopTrackingSelection();super.disconnectedCallback();}async startTrackingSelection(){const parentSideNav=this.parentSideNav;if(parentSideNav){await parentSideNav.updateComplete;this.manageTabIndex=parentSideNav.manageTabIndex;parentSideNav.startTrackingSelectionForItem(this);this.selected=this.value!=null&&this.value===parentSideNav.value;}}stopTrackingSelection(){const parentSideNav=this.parentSideNav;if(parentSideNav){parentSideNav.stopTrackingSelectionForItem(this);}this._parentSidenav=undefined;}}__decorate([e()],SideNavItem.prototype,"value",void 0);__decorate([e({type:Boolean,attribute:false})],SideNavItem.prototype,"manageTabIndex",void 0);__decorate([e({type:Boolean,reflect:true})],SideNavItem.prototype,"selected",void 0);__decorate([e({type:Boolean,reflect:true})],SideNavItem.prototype,"expanded",void 0);

const styles=r`:host{--spectrum-sidenav-item-gap:var(--spectrum-global-dimension-size-50);--spectrum-sidenav-item-height:var(--spectrum-alias-single-line-height);--spectrum-sidenav-item-padding-x:var(
--spectrum-global-dimension-size-150
);--spectrum-sidenav-item-border-radius:var(
--spectrum-alias-border-radius-regular
);--spectrum-sidenav-item-text-size:var(--spectrum-alias-font-size-default);--spectrum-sidenav-item-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-tabs-m-focus-ring-size:var(--spectrum-alias-border-size-thick);--spectrum-sidenav-icon-gap:var(--spectrum-global-dimension-size-100);--spectrum-sidenav-heading-height:var(--spectrum-alias-single-line-height);--spectrum-sidenav-heading-gap-top:var(
--spectrum-global-dimension-size-200
);--spectrum-sidenav-heading-gap-bottom:var(
--spectrum-global-dimension-size-50
);--spectrum-sidenav-heading-padding-x:var(
--spectrum-global-dimension-size-150
);--spectrum-sidenav-heading-border-radius:var(
--spectrum-alias-border-radius-regular
);--spectrum-sidenav-heading-text-size:var(
--spectrum-global-dimension-font-size-50
);--spectrum-sidenav-heading-text-font-weight:var(
--spectrum-global-font-weight-medium
);--spectrum-sidenav-heading-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-medium
);--spectrum-sidenav-multilevel-main-item-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-sidenav-multilevel-item-indentation:var(
--spectrum-global-dimension-size-150
);--spectrum-sidenav-item-text-color-selected:var(
--spectrum-alias-text-color-hover
);--spectrum-sidenav-item-background-color-selected:var(
--spectrum-alias-highlight-hover
);--spectrum-sidenav-item-background-color-down:var(
--spectrum-alias-highlight-hover
);--spectrum-sidenav-item-background-color-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-sidenav-item-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-sidenav-item-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-sidenav-item-text-color:var(--spectrum-alias-text-color);--spectrum-sidenav-item-background-color-hover:var(
--spectrum-alias-highlight-hover
);--spectrum-sidenav-item-text-color-hover:var(
--spectrum-alias-text-color-hover
);--spectrum-sidenav-item-background-color-key-focus:var(
--spectrum-alias-highlight-hover
);--spectrum-sidenav-item-text-color-key-focus:var(
--spectrum-alias-text-color-hover
);--spectrum-sidenav-item-border-color-key-focus:var(
--spectrum-alias-border-color-focus
);--spectrum-sidenav-heading-text-color:var(
--spectrum-global-color-gray-700
)}#list{--spectrum-sidenav-item-padding-y:var(
--spectrum-global-dimension-size-65
);list-style-type:none;margin:0;padding:0}:host([dir=ltr]) .spectrum-SideNav-itemLink.focus-visible:before{left:0}:host([dir=ltr]) .spectrum-SideNav-itemLink:focus-visible:before{left:0}:host([dir=rtl]) .spectrum-SideNav-itemLink.focus-visible:before{right:0}:host([dir=rtl]) .spectrum-SideNav-itemLink:focus-visible:before{right:0}:host([dir=ltr]) .spectrum-SideNav-itemLink.focus-visible:before{right:0}:host([dir=ltr]) .spectrum-SideNav-itemLink:focus-visible:before{right:0}:host([dir=rtl]) .spectrum-SideNav-itemLink.focus-visible:before{left:0}:host([dir=rtl]) .spectrum-SideNav-itemLink:focus-visible:before{left:0}:host([dir=ltr]) .spectrum-SideNav-itemLink .spectrum-SideNav-itemIcon{margin-right:var(
--spectrum-sidenav-icon-gap,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) .spectrum-SideNav-itemLink .spectrum-SideNav-itemIcon{margin-left:var(
--spectrum-sidenav-icon-gap,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr]) #heading{margin-right:0}:host([dir=rtl]) #heading{margin-left:0}:host([dir=ltr]) #heading{margin-left:0}:host([dir=rtl]) #heading{margin-right:0}#heading{border-radius:var(
--spectrum-sidenav-heading-border-radius,var(--spectrum-alias-border-radius-regular)
);font-size:var(
--spectrum-sidenav-heading-text-size,var(--spectrum-global-dimension-font-size-50)
);font-style:normal;font-weight:var(
--spectrum-sidenav-heading-text-font-weight,var(--spectrum-global-font-weight-medium)
);height:var(
--spectrum-sidenav-heading-height,var(--spectrum-alias-single-line-height)
);letter-spacing:var(
--spectrum-sidenav-heading-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);line-height:var(
--spectrum-sidenav-heading-height,var(--spectrum-alias-single-line-height)
);margin-bottom:var(
--spectrum-sidenav-heading-gap-bottom,var(--spectrum-global-dimension-size-50)
);margin-top:var(
--spectrum-sidenav-heading-gap-top,var(--spectrum-global-dimension-size-200)
);padding-bottom:0;padding-left:var(
--spectrum-sidenav-heading-padding-x,var(--spectrum-global-dimension-size-150)
);padding-right:var(
--spectrum-sidenav-heading-padding-x,var(--spectrum-global-dimension-size-150)
);padding-top:0;text-transform:uppercase}:host([dir=ltr]) .spectrum-SideNav--multiLevel #list .spectrum-SideNav-itemLink{padding-left:calc(var(--spectrum-sidenav-multilevel-item-indentation,var(--spectrum-global-dimension-size-150)) + var(--spectrum-sidenav-item-padding-x,var(--spectrum-global-dimension-size-150)))}:host([dir=rtl]) .spectrum-SideNav--multiLevel #list .spectrum-SideNav-itemLink{padding-right:calc(var(--spectrum-sidenav-multilevel-item-indentation,var(--spectrum-global-dimension-size-150)) + var(--spectrum-sidenav-item-padding-x,var(--spectrum-global-dimension-size-150)))}:host([dir=ltr]) .spectrum-SideNav--multiLevel #list #list .spectrum-SideNav-itemLink{padding-left:calc(var(--spectrum-sidenav-multilevel-item-indentation,var(--spectrum-global-dimension-size-150)) + var(--spectrum-sidenav-item-padding-x,var(--spectrum-global-dimension-size-150)))}:host([dir=rtl]) .spectrum-SideNav--multiLevel #list #list .spectrum-SideNav-itemLink{padding-right:calc(var(--spectrum-sidenav-multilevel-item-indentation,var(--spectrum-global-dimension-size-150)) + var(--spectrum-sidenav-item-padding-x,var(--spectrum-global-dimension-size-150)))}#heading{color:var(
--spectrum-sidenav-heading-text-color,var(--spectrum-global-color-gray-700)
)}:host{display:block}`;

/**
 * @element sp-sidenav-heading
 *
 * @slot - the Sidenav Items to display in association with the heading
 */class SideNavHeading extends SpectrumElement{constructor(){super(...arguments);this.label='';}static get styles(){return [styles$1,styles];}update(changes){if(!this.hasAttribute('slot')){this.slot='descendant';}super.update(changes);}render(){return p`<h2 id="heading">${this.label}</h2><div id="list" aria-labelledby="heading"><slot name="descendant"></slot></div>`;}}__decorate([e({reflect:true})],SideNavHeading.prototype,"label",void 0);

/**
 * @element sp-sidenav
 *
 * @slot - the Sidenav Items to display
 * @fires change - Announces a change in the `value` property of the navigation element.
 * This change can be "canceled" via `event.preventDefault()`.
 */class SideNav extends Focusable{constructor(){super();this.items=new Set();this.manageTabIndex=false;this.value=undefined;this.addEventListener('focusin',this.startListeningToKeyboard);}static get styles(){return [styles$2];}startTrackingSelectionForItem(item){this.items.add(item);}stopTrackingSelectionForItem(item){this.items.delete(item);}handleSelect(event){event.stopPropagation();if(this.value===event.detail.value){return;}const oldValue=this.value;this.value=event.detail.value;const applyDefault=this.dispatchEvent(new Event('change',{bubbles:true,composed:true,cancelable:true}));if(!applyDefault){this.value=oldValue;event.target.selected=false;event.preventDefault();}else {this.items.forEach(item=>item.handleSideNavSelect(event));}}focus(){if(this.focusElement===this){return;}super.focus();}blur(){if(this.focusElement===this){return;}super.blur();}click(){if(this.focusElement===this){return;}super.click();}get focusElement(){const selected=this.querySelector('[selected]');if(selected&&!this.isDisabledChild(selected)){return selected;}const items=[...this.querySelectorAll('sp-sidenav-item')];let index=0;while(index<items.length&&items[index]&&this.isDisabledChild(items[index])){index+=1;}if(items[index]){return items[index];}/* c8 ignore next */return this;}startListeningToKeyboard(){this.addEventListener('keydown',this.handleKeydown);this.addEventListener('focusout',this.stopListeningToKeyboard);if(this.value&&this.manageTabIndex){const selected=this.querySelector(`[value="${this.value}"]`);if(selected){selected.tabIndex=-1;}}}stopListeningToKeyboard(){this.removeEventListener('keydown',this.handleKeydown);this.removeEventListener('focusout',this.stopListeningToKeyboard);if(this.value&&this.manageTabIndex){const selected=this.querySelector(`[value="${this.value}"]`);if(selected){selected.tabIndex=0;}}}handleKeydown(event){const{code}=event;/* c8 ignore next */if(code!=='ArrowDown'&&code!=='ArrowUp'){return;}event.preventDefault();const direction=code==='ArrowDown'?1:-1;this.focusItemByOffset(direction);}focusItemByOffset(direction){const items=[...this.querySelectorAll('sp-sidenav-item')];const focused=items.indexOf(getActiveElement(this));let next=focused;next=(items.length+next+direction)%items.length;let nextItem=items[next];// cycle through the available items in the directions of the offset to find the next non-disabled item
while(nextItem&&this.isDisabledChild(nextItem)){next=(items.length+next+direction)%items.length;nextItem=items[next];}// if there are no non-disabled items, skip the work to focus a child
if(!nextItem||this.isDisabledChild(nextItem)){return;}nextItem.focus();}isDisabledChild(child){if(child.disabled){return true;}let parent=child.parentElement;while(parent instanceof SideNavHeading||!parent.disabled&&parent instanceof SideNavItem&&parent.expanded){parent=parent.parentElement;}return parent!==this;}handleSlotchange(){this.manageTabIndexes();}async manageTabIndexes(){if(!this.value&&this.manageTabIndex){const managed=this.querySelector('sp-sidenav-item:not([tabindex])');if(managed){managed.tabIndex=-1;}const first=this.querySelector('sp-sidenav-item');if(first){await first.updateComplete;first.tabIndex=0;}}}render(){return p`<nav @sidenav-select="${this.handleSelect}"><slot name="descendant" @slotchange="${this.handleSlotchange}"></slot></nav>`;}firstUpdated(changes){super.firstUpdated(changes);const selectedChild=this.querySelector('[selected]');if(selectedChild){this.value=selectedChild.value;}else {this.manageTabIndexes();}}updated(changes){super.updated(changes);if(changes.has('manageTabIndex')){const items=[...this.querySelectorAll('sp-sidenav-item')];items.map(item=>item.manageTabIndex=this.manageTabIndex);}}}__decorate([e({type:Boolean,reflect:true,attribute:'manage-tab-index'})],SideNav.prototype,"manageTabIndex",void 0);__decorate([e({reflect:true})],SideNav.prototype,"value",void 0);

iliadCustomElementsDefine('sp-sidenav',SideNav);

iliadCustomElementsDefine('sp-sidenav-item',SideNavItem);

export { SideNavHeading as S, TextfieldBase as T, Textfield as a };
//# sourceMappingURL=sp-sidenav-item.js.map
