import { a as Focusable, g as getActiveElement, b as styles$N, t as tag$1, I as IconBase, s as setCustomTemplateLiteralTag$1, O as ObserveSlotText, P as PickerBase, c as tag$2, d as setCustomTemplateLiteralTag$2, e as styles$O, L as LikeAnchor, f as ObserveSlotPresence, F as FocusVisiblePolyfillMixin, h as styles$R, i as Icon, j as IconsetRegistry, k as OverlayTrigger, l as Overlay } from './sp-toast.js';
import { r, p, _ as __decorate, e, o, i as iliadCustomElementsDefine, S as SpectrumElement, l, a as i, c as SizedMixin, f as d, T, g as e$1, s, y, h as __rest, d as o$1, j as i$1, k as c } from './Theme.js';
import { s as styles$P, a as styles$Q, h as headingStyles } from './sp-menu-group.js';
import { T as TextfieldBase, S as SideNavHeading, a as Textfield } from './sp-sidenav-item.js';
import './theme-light.js';
import './theme-lightest.js';
import './theme-dark.js';
import './theme-darkest.js';
import './scale-medium.js';
import './scale-large.js';

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
*/const tabs=document.querySelector('sp-tabs');tabs.addEventListener('change',event=>{const target=event.target;const{selected}=target;const{pathname}=location;const isAPI=pathname.search('api')>-1;switch(selected){case'api':{if(isAPI)return;const dest=(pathname+'/api/').replace('//a','/a');history.pushState({},document.title,dest);break;}case'examples':{if(!isAPI)return;const dest=pathname.split('/api')[0]+'/';history.pushState({},document.title,dest);break;}}});

const styles$M=r`:host{--spectrum-accordion-item-title-tracking:var(
--spectrum-global-font-letter-spacing-medium
);--spectrum-accordion-item-padding-x:var(
--spectrum-global-dimension-size-225
);--spectrum-accordion-icon-height:var(--spectrum-global-dimension-size-125);--spectrum-accordion-item-border-size:var(
--spectrum-alias-border-size-thin
);--spectrum-accordion-icon-width:var(--spectrum-global-dimension-size-75);--spectrum-accordion-icon-gap:var(--spectrum-global-dimension-size-100);--spectrum-accordion-item-border-left-size-key-focus:var(
--spectrum-alias-border-size-thick
);--spectrum-accordion-item-title-text-size:var(
--spectrum-global-dimension-font-size-50
);--spectrum-accordion-item-content-padding:var(
--spectrum-global-dimension-size-200
);--spectrum-accordion-border-color:var(--spectrum-global-color-gray-300);--spectrum-accordion-icon-color:var(--spectrum-global-color-gray-600);--spectrum-accordion-text-color:var(--spectrum-global-color-gray-700);--spectrum-accordion-text-color-hover:var(
--spectrum-global-color-gray-900
);--spectrum-accordion-background-color-hover:var(
--spectrum-global-color-gray-200
);--spectrum-accordion-icon-color-hover:var(
--spectrum-global-color-gray-800
);--spectrum-accordion-item-border-left-color-key-focus:var(
--spectrum-alias-border-color-focus
);--spectrum-accordion-text-color-disabled:var(
--spectrum-global-color-gray-500
);--spectrum-accordion-icon-color-disabled:var(
--spectrum-global-color-gray-400
)}:host{--spectrum-accordion-item-title-tracking-actual:calc(var(
--spectrum-accordion-item-title-tracking,
var(--spectrum-global-font-letter-spacing-medium)
)/100);--spectrum-accordion-item-title-padding-y:var(
--spectrum-global-dimension-size-150
);--spectrum-accordion-item-line-height:1.3;--spectrum-accordion-animation-duration:var(
--spectrum-global-animation-duration-100,130ms
);--spectrum-accordion-icon-width:var(--spectrum-global-dimension-size-125)}:host{display:block;list-style:none;margin:0;padding:0}`;

/**
 * @element sp-accordion
 * @slot - The sp-accordion-item children to display.
 */class Accordion extends Focusable{constructor(){super(...arguments);/**
         * Allows multiple accordion items to be opened at the same time
         */this.allowMultiple=false;}static get styles(){return [styles$M];}get items(){return [...(this.defaultNodes||[])].filter(node=>typeof node.tagName!=='undefined');}focus(){if(this.focusElement===this){return;}super.focus();}/**
     * @private
     */get focusElement(){const items=this.items;if(items&&!items.length){return this;}let index=0;while(index<items.length&&items[index]&&items[index].disabled){index+=1;}if(items[index]){return items[index];}/* c8 ignore next */return this;}startListeningToKeyboard(){const items=this.items;/* c8 ignore next 3 */if(items&&!items.length){return;}this.addEventListener('keydown',this.handleKeydown);}stopListeningToKeyboard(){this.removeEventListener('keydown',this.handleKeydown);}handleKeydown(event){const{code}=event;/* c8 ignore next 3 */if(code!=='ArrowDown'&&code!=='ArrowUp'){return;}event.preventDefault();const direction=code==='ArrowDown'?1:-1;this.focusItemByOffset(direction);}focusItemByOffset(direction){const items=this.items;const focused=items.indexOf(getActiveElement(this));let next=focused;let nextItem=items[next];// cycle through the available items in the directions of the offset to find the next non-disabled item
while(nextItem&&(nextItem.disabled||next===focused)){next=(items.length+next+direction)%items.length;nextItem=items[next];}// if there are no non-disabled items, skip the work to focus a child
if(!nextItem||nextItem.disabled||next===focused){return;}nextItem.focus();}async onToggle(event){// Let the event pass through the DOM so that it can be
// prevented from the outside if a user so desires.
await 0;if(this.allowMultiple||event.defaultPrevented){// No toggling when `allowMultiple` or the user prevents it.
return;}const target=event.target;const items=[...this.items];/* c8 ignore next 3 */if(items&&!items.length){// no toggling when there aren't items.
return;}items.forEach(item=>{if(item!==target){// Close all the items that didn't dispatch the event.
item.open=false;}});}render(){return p`<slot></slot>`;}firstUpdated(changed){super.firstUpdated(changed);this.addEventListener('focusin',this.startListeningToKeyboard);this.addEventListener('focusout',this.stopListeningToKeyboard);this.addEventListener('sp-accordion-item-toggle',this.onToggle);}}__decorate([e({type:Boolean,reflect:true,attribute:'allow-multiple'})],Accordion.prototype,"allowMultiple",void 0);__decorate([o()],Accordion.prototype,"defaultNodes",void 0);

iliadCustomElementsDefine('sp-accordion',Accordion);

const styles$L=r`:host{--spectrum-accordion-item-title-tracking:var(
--spectrum-global-font-letter-spacing-medium
);--spectrum-accordion-item-padding-x:var(
--spectrum-global-dimension-size-225
);--spectrum-accordion-icon-height:var(--spectrum-global-dimension-size-125);--spectrum-accordion-item-border-size:var(
--spectrum-alias-border-size-thin
);--spectrum-accordion-icon-width:var(--spectrum-global-dimension-size-75);--spectrum-accordion-icon-gap:var(--spectrum-global-dimension-size-100);--spectrum-accordion-item-border-left-size-key-focus:var(
--spectrum-alias-border-size-thick
);--spectrum-accordion-item-title-text-size:var(
--spectrum-global-dimension-font-size-50
);--spectrum-accordion-item-content-padding:var(
--spectrum-global-dimension-size-200
);--spectrum-accordion-border-color:var(--spectrum-global-color-gray-300);--spectrum-accordion-icon-color:var(--spectrum-global-color-gray-600);--spectrum-accordion-text-color:var(--spectrum-global-color-gray-700);--spectrum-accordion-text-color-hover:var(
--spectrum-global-color-gray-900
);--spectrum-accordion-background-color-hover:var(
--spectrum-global-color-gray-200
);--spectrum-accordion-icon-color-hover:var(
--spectrum-global-color-gray-800
);--spectrum-accordion-item-border-left-color-key-focus:var(
--spectrum-alias-border-color-focus
);--spectrum-accordion-text-color-disabled:var(
--spectrum-global-color-gray-500
);--spectrum-accordion-icon-color-disabled:var(
--spectrum-global-color-gray-400
)}:host([dir=ltr]) #indicator{left:var(
--spectrum-accordion-item-padding-x,var(--spectrum-global-dimension-size-225)
)}:host([dir=rtl]) #indicator{right:var(
--spectrum-accordion-item-padding-x,var(--spectrum-global-dimension-size-225)
)}:host([dir=rtl]) #indicator{transform:matrix(-1,0,0,1,0,0)}#indicator{display:block;position:absolute;transition:transform ease var(--spectrum-accordion-animation-duration)}:host{border-bottom:var(
--spectrum-accordion-item-border-size,var(--spectrum-alias-border-size-thin)
) solid transparent;display:list-item;margin:0;position:relative;z-index:inherit}:host(:first-of-type){border-top:var(
--spectrum-accordion-item-border-size,var(--spectrum-alias-border-size-thin)
) solid transparent}#heading{box-sizing:border-box;margin:0}:host([dir=ltr]) #header{padding-left:calc(var(--spectrum-accordion-item-padding-x,var(--spectrum-global-dimension-size-225)) + var(--spectrum-accordion-icon-width,var(--spectrum-global-dimension-size-75)) + var(--spectrum-accordion-icon-gap,var(--spectrum-global-dimension-size-100)) + var(--spectrum-accordion-item-border-left-size-key-focus,var(--spectrum-alias-border-size-thick)))}:host([dir=rtl]) #header{padding-right:calc(var(--spectrum-accordion-item-padding-x,var(--spectrum-global-dimension-size-225)) + var(--spectrum-accordion-icon-width,var(--spectrum-global-dimension-size-75)) + var(--spectrum-accordion-icon-gap,var(--spectrum-global-dimension-size-100)) + var(--spectrum-accordion-item-border-left-size-key-focus,var(--spectrum-alias-border-size-thick)))}:host([dir=ltr]) #header{padding-right:var(
--spectrum-accordion-item-padding-x,var(--spectrum-global-dimension-size-225)
)}:host([dir=rtl]) #header{padding-left:var(
--spectrum-accordion-item-padding-x,var(--spectrum-global-dimension-size-225)
)}:host([dir=ltr]) #header{text-align:left}:host([dir=rtl]) #header{text-align:right}#header{align-items:center;-webkit-appearance:none;appearance:none;background-color:inherit;border:0;box-sizing:border-box;cursor:pointer;display:flex;font-family:inherit;font-size:var(
--spectrum-accordion-item-title-text-size,var(--spectrum-global-dimension-font-size-50)
);font-weight:500;justify-content:flex-start;letter-spacing:var(--spectrum-accordion-item-title-tracking-actual);line-height:var(--spectrum-accordion-item-line-height);margin:0;padding-bottom:var(--spectrum-accordion-item-title-padding-y);padding-top:var(--spectrum-accordion-item-title-padding-y);position:relative;text-overflow:ellipsis;text-transform:uppercase;width:100%}#header:focus{outline:0}:host([dir=ltr]) #header:focus:after{left:0}:host([dir=rtl]) #header:focus:after{right:0}#header:focus:after{bottom:calc(-1*var(--spectrum-accordion-item-border-size,var(--spectrum-alias-border-size-thin)));content:"";position:absolute;top:calc(-1*var(--spectrum-accordion-item-border-size,var(--spectrum-alias-border-size-thin)));width:var(
--spectrum-accordion-item-border-left-size-key-focus,var(--spectrum-alias-border-size-thick)
)}#content{display:none;padding-bottom:var(
--spectrum-accordion-item-content-padding,var(--spectrum-global-dimension-size-200)
);padding-left:var(
--spectrum-accordion-item-content-padding,var(--spectrum-global-dimension-size-200)
);padding-right:var(
--spectrum-accordion-item-content-padding,var(--spectrum-global-dimension-size-200)
);padding-top:0}:host([dir=ltr][open])>#heading>#indicator{transform:rotate(90deg)}:host([dir=rtl][open])>#heading>#indicator{transform:matrix(-1,0,0,1,0,0) rotate(90deg)}:host([dir=ltr][open])>#indicator{transform:rotate(90deg)}:host([dir=rtl][open])>#indicator{transform:matrix(-1,0,0,1,0,0) rotate(90deg)}:host([open])>#content{display:block}:host([disabled]) #header{cursor:default}:host{border-color:var(
--spectrum-accordion-border-color,var(--spectrum-global-color-gray-300)
)}#indicator{color:var(
--spectrum-accordion-icon-color,var(--spectrum-global-color-gray-600)
)}#header{color:var(
--spectrum-accordion-text-color,var(--spectrum-global-color-gray-700)
)}#header:hover{background-color:var(
--spectrum-accordion-background-color-hover,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-accordion-text-color-hover,var(--spectrum-global-color-gray-900)
)}#header:hover+#indicator{color:var(
--spectrum-accordion-icon-color-hover,var(--spectrum-global-color-gray-800)
)}#header.focus-visible:after{background-color:var(
--spectrum-accordion-item-border-left-color-key-focus,var(--spectrum-alias-border-color-focus)
)}#header:focus-visible:after{background-color:var(
--spectrum-accordion-item-border-left-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([open]) #header:hover{background-color:transparent}:host([disabled]) #header,:host([disabled]) #header.focus-visible,:host([disabled]) #header:hover{background-color:transparent;color:var(
--spectrum-accordion-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([disabled]) #header,:host([disabled]) #header:focus-visible,:host([disabled]) #header:hover{background-color:transparent;color:var(
--spectrum-accordion-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([disabled]) #header+#indicator{color:var(
--spectrum-accordion-icon-color-disabled,var(--spectrum-global-color-gray-400)
)}:host{--spectrum-accordion-item-header-height:46px}#indicator{top:calc(50% - var(--spectrum-accordion-icon-height,var(--spectrum-global-dimension-size-125))/ 2)}#heading{height:auto;position:relative}#header{min-height:calc(100% - var(--spectrum-accordion-item-border-size,var(--spectrum-alias-border-size-thin)))}:host([open])>#header:after{height:calc(100% - var(--spectrum-accordion-item-border-size,var(--spectrum-alias-border-size-thin)))}`;

/**
 * @element sp-accordion-item
 * @slot - The content of the item that is hidden when the item is not open
 */class AccordionItem extends Focusable{constructor(){super();this.open=false;this.label='';this.disabled=false;this.addEventListener('keydown',this.onKeyDown);}static get styles(){return [styles$L,styles$N];}get focusElement(){return this.shadowRoot.querySelector('#header');}onKeyDown(event){/* c8 ignore next 3 */if(this.disabled){return;}if(event.code==='Enter'||event.code==='Space'){event.preventDefault();this.toggle();}}onClick(){/* c8 ignore next 3 */if(this.disabled){return;}this.toggle();}toggle(){this.open=!this.open;const applyDefault=this.dispatchEvent(new CustomEvent('sp-accordion-item-toggle',{bubbles:true,composed:true,cancelable:true}));if(!applyDefault){this.open=!this.open;}}render(){return p`<h3 id="heading"><button id="header" @click="${this.onClick}" aria-expanded="${this.open}" aria-controls="content">${this.label}</button><sp-icon-chevron100 id="indicator" class="spectrum-UIIcon-ChevronRight100"></sp-icon-chevron100></h3><div id="content" role="region" aria-labelledby="header"><slot></slot></div>`;}updated(changes){super.updated(changes);if(changes.has('disabled')){if(this.disabled){this.setAttribute('aria-disabled','true');}else {this.removeAttribute('aria-disabled');}}}}__decorate([e({type:Boolean,reflect:true})],AccordionItem.prototype,"open",void 0);__decorate([e({type:String,reflect:true})],AccordionItem.prototype,"label",void 0);__decorate([e({type:Boolean,reflect:true})],AccordionItem.prototype,"disabled",void 0);

iliadCustomElementsDefine('sp-accordion-item',AccordionItem);

const styles$K=r`:host{--spectrum-actionbar-height:var(--spectrum-global-dimension-size-600);--spectrum-actionbar-min-width:var(
--spectrum-global-dimension-static-size-3500
);--spectrum-actionbar-max-width:var(
--spectrum-global-dimension-static-size-3500
)}:host{--spectrum-actionbar-height:var(
--spectrum-global-dimension-size-600
);--spectrum-actionbar-padding-left:var(
--spectrum-global-dimension-size-200
);--spectrum-actionbar-padding-right:calc(var(--spectrum-global-dimension-size-200)/2);--spectrum-actionbar-margin-x:var(--spectrum-global-dimension-size-200);--spectrum-actionbar-min-width:280px;--spectrum-actionbar-max-width:960px}:host{bottom:0;box-sizing:border-box;display:flex;height:0;justify-content:center;opacity:0;overflow:hidden;padding:0 var(--spectrum-actionbar-margin-x);pointer-events:none;transition:height var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out;z-index:1}:host([open]){height:calc(var(--spectrum-actionbar-height,var(--spectrum-global-dimension-size-600)) + var(--spectrum-actionbar-margin-x)*2);opacity:1}:host([dir=ltr][variant=sticky]){left:0}:host([dir=rtl][variant=sticky]){right:0}:host([dir=ltr][variant=sticky]){right:0}:host([dir=rtl][variant=sticky]){left:0}:host([variant=sticky]){position:sticky}:host([flexible]) #popover{width:auto}:host([variant=fixed]){position:fixed}:host([dir=ltr]) #popover{padding-left:var(
--spectrum-actionbar-padding-left
)}:host([dir=rtl]) #popover{padding-right:var(
--spectrum-actionbar-padding-left
)}:host([dir=ltr]) #popover{padding-right:var(
--spectrum-actionbar-padding-right
)}:host([dir=rtl]) #popover{padding-left:var(
--spectrum-actionbar-padding-right
)}#popover{align-items:center;box-sizing:border-box;flex-direction:row;height:var(
--spectrum-actionbar-height,var(--spectrum-global-dimension-size-600)
);justify-content:space-between;margin:auto;max-width:var(
--spectrum-actionbar-max-width,var(--spectrum-global-dimension-static-size-3500)
);min-width:var(
--spectrum-actionbar-min-width,var(--spectrum-global-dimension-static-size-3500)
);pointer-events:auto;position:relative;width:100%}`;

const actionBarVariants=['sticky','fixed'];/**
 * @element sp-action-bar
 * @slot - Content to display with the Action Bar
 */class ActionBar extends SpectrumElement{constructor(){super(...arguments);/**
         * When `flexible` the action bar sizes itself to its content
         * rather than a specific width.
         *
         * @param {Boolean} flexible
         */this.flexible=false;this.open=false;this._variant='';}static get styles(){return [styles$K];}/**
     * The variant applies specific styling when set to `sticky` or `fixed`.
     * `variant` attribute is removed when not matching one of the above.
     *
     * @param {String} variant
     */set variant(variant){if(variant===this.variant){return;}if(actionBarVariants.includes(variant)){this.setAttribute('variant',variant);this._variant=variant;return;}this.removeAttribute('variant');this._variant='';}get variant(){return this._variant;}render(){return p`<sp-popover ?open="${this.open}" id="popover"><slot></slot></sp-popover>`;}}__decorate([e({type:Boolean,reflect:true})],ActionBar.prototype,"flexible",void 0);__decorate([e({type:Boolean,reflect:true})],ActionBar.prototype,"open",void 0);__decorate([e({type:String,reflect:true})],ActionBar.prototype,"variant",null);

iliadCustomElementsDefine('sp-action-bar',ActionBar);

const styles$J=r`:host{--spectrum-actiongroup-button-gap-reset:0;--spectrum-actiongroup-quiet-compact-button-gap:var(
--spectrum-global-dimension-size-10
);--spectrum-actiongroup-width:fit-content;--spectrum-actiongroup-button-gap-y:var(
--spectrum-global-dimension-size-100
);--spectrum-actiongroup-button-gap-x:var(
--spectrum-global-dimension-size-100
);--spectrum-actiongroup-quiet-compact-border-radius:var(
--spectrum-alias-border-radius-medium
);--spectrum-actiongroup-quiet-compact-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-action-group-divider-width:1px;--spectrum-action-group-divider-height:66.7%;--spectrum-action-group-divider-background-color:var(
--spectrum-alias-border-color-light
)}:host{display:flex;flex-wrap:wrap}::slotted(*){flex-shrink:0}:host(:not([vertical]):not([compact])){margin-top:calc(-1*var(--spectrum-actiongroup-button-gap-y,var(--spectrum-global-dimension-size-100)))}:host(:not([vertical]):not([compact])) ::slotted(*){flex-shrink:0;margin-top:var(
--spectrum-actiongroup-button-gap-y,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr]:not([vertical]):not([compact])) ::slotted(:not(:last-child)){margin-right:var(
--spectrum-actiongroup-button-gap-x,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]:not([vertical]):not([compact])) ::slotted(:not(:last-child)){margin-left:var(
--spectrum-actiongroup-button-gap-x,var(--spectrum-global-dimension-size-100)
)}:host([vertical]){display:inline-flex;flex-direction:column}:host([dir=ltr][vertical]) ::slotted(:not(:first-child)){margin-left:var(
--spectrum-actiongroup-button-gap-reset
)}:host([dir=rtl][vertical]) ::slotted(:not(:first-child)){margin-right:var(
--spectrum-actiongroup-button-gap-reset
)}:host([vertical]) ::slotted(:not(:first-child)){margin-top:var(
--spectrum-actiongroup-button-gap-y,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr][vertical][vertical]){margin-left:var(
--spectrum-actiongroup-button-gap-reset
)}:host([dir=rtl][vertical][vertical]){margin-right:var(
--spectrum-actiongroup-button-gap-reset
)}:host([vertical][vertical]){margin-top:var(
--spectrum-actiongroup-button-gap-y,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr][compact][quiet]) ::slotted(:not(:first-child)){margin-left:var(
--spectrum-actiongroup-quiet-compact-button-gap
)}:host([dir=rtl][compact][quiet]) ::slotted(:not(:first-child)){margin-right:var(
--spectrum-actiongroup-quiet-compact-button-gap
)}:host([compact][quiet]) ::slotted(:not(:first-child)){margin-top:var(
--spectrum-actiongroup-button-gap-reset
)}:host([dir=ltr][compact][quiet][vertical]) ::slotted(:not(:first-child)){margin-left:var(
--spectrum-actiongroup-button-gap-reset
)}:host([dir=rtl][compact][quiet][vertical]) ::slotted(:not(:first-child)){margin-right:var(
--spectrum-actiongroup-button-gap-reset
)}:host([compact][quiet][vertical]) ::slotted(:not(:first-child)){margin-top:var(
--spectrum-actiongroup-quiet-compact-button-gap
)}:host([compact]:not([quiet])){flex-wrap:nowrap}:host([compact]:not([quiet])) ::slotted(*){position:relative;z-index:0}:host([dir=ltr][compact]:not([quiet])) ::slotted(:first-child){margin-right:calc(-1*var(
--spectrum-actionbutton-m-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([dir=rtl][compact]:not([quiet])) ::slotted(:first-child){margin-left:calc(-1*var(
--spectrum-actionbutton-m-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([dir=ltr][compact]:not([quiet])) ::slotted(:last-child){margin-left:calc(-1*var(
--spectrum-actionbutton-m-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([dir=rtl][compact]:not([quiet])) ::slotted(:last-child){margin-right:calc(-1*var(
--spectrum-actionbutton-m-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([dir=ltr][compact]:not([quiet])) ::slotted(:last-child){margin-right:0}:host([dir=rtl][compact]:not([quiet])) ::slotted(:last-child){margin-left:0}:host([compact]:not([quiet])) ::slotted([selected]){z-index:1}:host([compact]:not([quiet])) ::slotted(:hover){z-index:2}:host([compact]:not([quiet])) ::slotted(.focus-visible){z-index:3}:host([compact]:not([quiet])) ::slotted(:focus-visible){z-index:3}:host([dir=ltr][compact]:not([quiet])) ::slotted(:not(:first-child)){margin-left:calc(-1*var(
--spectrum-actionbutton-m-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([dir=rtl][compact]:not([quiet])) ::slotted(:not(:first-child)){margin-right:calc(-1*var(
--spectrum-actionbutton-m-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([dir=ltr][compact]:not([quiet])) ::slotted(:not(:first-child)){margin-right:calc(-1*var(
--spectrum-actionbutton-m-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([dir=rtl][compact]:not([quiet])) ::slotted(:not(:first-child)){margin-left:calc(-1*var(
--spectrum-actionbutton-m-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([compact][vertical]:not([quiet])) ::slotted(:not(:first-child)){margin-bottom:calc(-1*var(
--spectrum-actionbutton-m-border-size,
var(--spectrum-alias-border-size-thin)
)/2);margin-top:calc(-1*var(
--spectrum-actionbutton-m-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([compact][vertical]:not([quiet])) ::slotted(:first-child){margin-bottom:calc(-1*var(
--spectrum-actionbutton-m-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([compact][vertical]:not([quiet])) ::slotted(:last-child){margin-bottom:0;margin-top:calc(-1*var(
--spectrum-actionbutton-m-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([justified]) ::slotted(*){flex:1}:host([compact][divider]) ::slotted(:not(:last-child)):after{background-color:var(--spectrum-action-group-divider-background-color);bottom:0;content:"";display:block;height:var(--spectrum-action-group-divider-height);margin:auto;position:absolute;right:calc(-1*var(--spectrum-actiongroup-quiet-compact-button-gap) - 1px);top:0;width:var(--spectrum-action-group-divider-width)}:host([compact][divider][verticle]) ::slotted(:not(:last-child)):after{background-color:var(--spectrum-action-group-divider-background-color);bottom:calc(-1*var(--spectrum-actiongroup-quiet-compact-button-gap) - 1px);content:"";display:block;height:var(--spectrum-action-group-divider-width);left:0;margin:auto;position:absolute;right:0;width:var(--spectrum-action-group-divider-height)}:host([dir][compact][vertical]) ::slotted(:nth-child(n)){margin-left:0;margin-right:0}:host{width:var(--spectrum-actiongroup-width)}:host([compact]){align-items:center;background:var(--spectrum-actiongroup-quiet-compact-background-color);border-radius:var(--spectrum-actiongroup-quiet-compact-border-radius);display:flex}`;

const EMPTY_SELECTION=[];/**
 * @element sp-action-group
 * @slot - the sp-action-button elements that make up the group
 */class ActionGroup extends SpectrumElement{constructor(){super(...arguments);this.buttons=[];this._buttonSelector='sp-action-button';this.compact=false;this.emphasized=false;this.justified=false;this.label='';this.quiet=false;this.vertical=false;this.divider=false;this._selected=EMPTY_SELECTION;this.handleFocusin=()=>{this.addEventListener('focusout',this.handleFocusout);this.addEventListener('keydown',this.handleKeydown);};this.handleKeydown=event=>{const{code}=event;if(!['ArrowUp','ArrowLeft','ArrowRight','ArrowDown','End','Home','PageUp','PageDown'].includes(code)){return;}const activeElement=this.getRootNode().activeElement;/* c8 ignore next 3 */if(!activeElement){return;}let nextIndex=this.buttons.indexOf(activeElement);/* c8 ignore next 3 */if(nextIndex===-1){return;}const circularIndexedElement=(list,index)=>list[(list.length+index)%list.length];const buttonFromDelta=delta=>{nextIndex+=delta;while(circularIndexedElement(this.buttons,nextIndex).disabled){nextIndex+=delta;}};switch(code){case'ArrowUp':buttonFromDelta(-1);break;case'ArrowLeft':buttonFromDelta(this.isLTR?-1:1);break;case'ArrowRight':buttonFromDelta(this.isLTR?1:-1);break;case'ArrowDown':buttonFromDelta(1);break;case'End':nextIndex=this.buttons.length;buttonFromDelta(-1);break;case'Home':nextIndex=-1;buttonFromDelta(1);break;case'PageUp':case'PageDown':default:const tagsSiblings=[...this.getRootNode().querySelectorAll('sp-action-group')];if(tagsSiblings.length<2){return;}event.preventDefault();const currentIndex=tagsSiblings.indexOf(this);const offset=code==='PageUp'?-1:1;let nextRadioGroupIndex=currentIndex+offset;let nextRadioGroup=circularIndexedElement(tagsSiblings,nextRadioGroupIndex);while(!nextRadioGroup.buttons.length){nextRadioGroupIndex+=offset;nextRadioGroup=circularIndexedElement(tagsSiblings,nextRadioGroupIndex);}nextRadioGroup.focus();return;}event.preventDefault();const nextRadio=circularIndexedElement(this.buttons,nextIndex);activeElement.tabIndex=-1;nextRadio.tabIndex=0;nextRadio.focus();};this.handleFocusout=event=>{const{relatedTarget}=event;if(!relatedTarget||!this.contains(relatedTarget)){const firstButtonNonDisabled=this.buttons.find(button=>{if(this.selected.length){return button.selected;}return !button.disabled;});if(firstButtonNonDisabled){firstButtonNonDisabled.tabIndex=0;}}this.removeEventListener('keydown',this.handleKeydown);this.removeEventListener('focusout',this.handleFocusout);};this.manageButtons=()=>{const slot=this.shadowRoot.querySelector('slot');if(!slot)return;const assignedElements=slot.assignedElements({flatten:true});const buttons=assignedElements.reduce((acc,el)=>{if(el.matches(this._buttonSelector)){acc.push(el);}else {const buttonDescendents=Array.from(el.querySelectorAll(`:scope > ${this._buttonSelector}`));acc.push(...buttonDescendents);}return acc;},[]);this.buttons=buttons;this.manageChildren();this.manageSelects();};}static get styles(){return [styles$J];}get selected(){return this._selected;}set selected(selected){if(selected===this.selected)return;const old=this.selected;this._selected=selected;const applyDefault=this.dispatchEvent(new Event('change',{bubbles:true,composed:true,cancelable:true}));if(!applyDefault){this._selected=old;this.buttons.map(button=>{button.selected=this.selected.includes(button.value);});}}focus(options){if(!this.buttons.length){return;}const firstButtonNonDisabled=this.buttons.find(button=>{if(this.selected){return button.selected;}return !button.disabled;});if(firstButtonNonDisabled){firstButtonNonDisabled.focus(options);}}handleClick(event){const target=event.target;if(typeof target.value==='undefined'){return;}switch(this.selects){case'single':{const selected=[...this.querySelectorAll('[selected]')];selected.forEach(el=>{el.selected=false;el.tabIndex=-1;el.setAttribute('aria-checked','false');});target.selected=true;target.tabIndex=0;target.setAttribute('aria-checked','true');this.selected=[target.value];target.focus();break;}case'multiple':{const selected=[...this.selected];target.selected=!target.selected;target.setAttribute('aria-checked',target.selected?'true':'false');if(target.selected){selected.push(target.value);}else {selected.splice(this.selected.indexOf(target.value),1);}this.selected=selected;break;}default:this.selected=EMPTY_SELECTION;break;}}async manageSelects(){if(!this.buttons.length){return;}switch(this.selects){case'single':{this.setAttribute('role','radiogroup');let selection;let firstEnabled;const options=this.buttons;const updates=options.map(async option=>{await option.updateComplete;option.setAttribute('role','radio');option.setAttribute('aria-checked',option.selected?'true':'false');option.tabIndex=option.selected?0:-1;if(option.selected){selection=option;}if(!firstEnabled&&!option.disabled){firstEnabled=option;}});await Promise.all(updates);if(selection||firstEnabled){(selection||firstEnabled).tabIndex=0;}this.selected=selection?[selection.value]:EMPTY_SELECTION;break;}case'multiple':{this.setAttribute('role','group');const selection=[];const options=this.buttons;const updates=options.map(async option=>{await option.updateComplete;option.setAttribute('role','checkbox');option.setAttribute('aria-checked',option.selected?'true':'false');option.tabIndex=0;if(option.selected){selection.push(option.value);}});await Promise.all(updates);this.selected=!!selection.length?selection:EMPTY_SELECTION;break;}default:this.buttons.forEach(option=>{option.setAttribute('role','button');option.tabIndex=0;});this.removeAttribute('role');this.selected=EMPTY_SELECTION;break;}}render(){return p`<slot role="presentation" @slotchange="${this.manageButtons}"></slot>`;}firstUpdated(changes){super.firstUpdated(changes);this.addEventListener('click',this.handleClick);this.addEventListener('focusin',this.handleFocusin);}updated(changes){super.updated(changes);if(changes.has('selects')){this.manageSelects();}if(changes.has('quiet')&&this.quiet||changes.has('emphasized')&&this.emphasized){this.manageChildren();}// Update `aria-label` when `label` available or not first `updated`
if(changes.has('label')&&(this.label||typeof changes.get('label')!=='undefined')){if(this.label.length){this.setAttribute('aria-label',this.label);}else {this.removeAttribute('aria-label');}}}manageChildren(){this.buttons.forEach(button=>{button.quiet=this.quiet;button.emphasized=this.emphasized;});}connectedCallback(){super.connectedCallback();if(!this.observer){this.observer=new MutationObserver(this.manageButtons);this.manageButtons();}this.observer.observe(this,{childList:true,subtree:true});}disconnectedCallback(){this.observer.disconnect();super.disconnectedCallback();}}__decorate([e({type:Boolean,reflect:true})],ActionGroup.prototype,"compact",void 0);__decorate([e({type:Boolean,reflect:true})],ActionGroup.prototype,"emphasized",void 0);__decorate([e({type:Boolean,reflect:true})],ActionGroup.prototype,"justified",void 0);__decorate([e({type:String})],ActionGroup.prototype,"label",void 0);__decorate([e({type:Boolean,reflect:true})],ActionGroup.prototype,"quiet",void 0);__decorate([e({type:String})],ActionGroup.prototype,"selects",void 0);__decorate([e({type:Boolean,reflect:true})],ActionGroup.prototype,"vertical",void 0);__decorate([e({type:Boolean,reflect:true})],ActionGroup.prototype,"divider",void 0);__decorate([e({type:Array})],ActionGroup.prototype,"selected",null);

iliadCustomElementsDefine('sp-action-group',ActionGroup);

const MoreIcon=({width=24,height=24,hidden=false,title='More'}={})=>{return tag$1`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 36 36" aria-hidden="${hidden?'true':'false'}" role="img" fill="currentColor" aria-label="${title}"><circle cx="17.8" cy="18.2" r="3.8"/><circle cx="29.5" cy="18.2" r="3.8"/><circle cx="6.1" cy="18.2" r="3.68"/></svg>`;};

/**
 * @element sp-icon-more
 */class IconMore extends IconBase{render(){setCustomTemplateLiteralTag$1(p);return MoreIcon({hidden:!this.label,title:this.label});}}

iliadCustomElementsDefine('sp-icon-more',IconMore);

const styles$I=r`:host{display:inline-flex}:host([quiet]){min-width:0}::slotted([slot=icon]){flex-shrink:0}.icon{flex-shrink:0}#popover{display:none;max-width:none;width:auto}:host([dir=ltr]) .icon,:host([dir=ltr]) ::slotted([slot=icon]){margin-left:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted)))}:host([dir=rtl]) .icon,:host([dir=rtl]) ::slotted([slot=icon]){margin-right:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted)))}:host([dir]) slot[icon-only] .icon,:host([dir]) slot[icon-only]::slotted([slot=icon]){margin-left:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-icononly-padding-left-adjusted)));margin-right:calc(-1*(var(--spectrum-actionbutton-textonly-padding-right-adjusted) - var(--spectrum-actionbutton-icononly-padding-right-adjusted)))}`;

/**
 * @element sp-action-menu
 *
 * @slot - menu items to be listed in the Action Menu
 * @slot icon - The icon to use for Action Menu
 * @slot label - The label to use on for the Action Menu
 * @attr selects - By default `sp-action-menu` does not manage a selection. If
 *   you'd like for a selection to be held by the `sp-menu` that it presents in
 *   its overlay, use `selects="single" to activate this functionality.
 */class ActionMenu extends ObserveSlotText(PickerBase,'label'){constructor(){super(...arguments);this.selects=undefined;this.listRole='menu';this.itemRole='menuitem';}static get styles(){return [styles$I];}get hasLabel(){return this.slotHasContent;}get buttonContent(){return [p`<slot name="icon" slot="icon" ?icon-only="${!this.hasLabel}"><sp-icon-more class="icon"></sp-icon-more></slot><slot name="label" ?hidden="${!this.hasLabel}"></slot>`];}get renderButton(){return p`<sp-action-button quiet ?selected="${this.open}" aria-haspopup="true" aria-controls="popover" aria-expanded="${this.open?'true':'false'}" aria-label="${l(this.label||undefined)}" id="button" class="button" size="${this.size}" @blur="${this.onButtonBlur}" @click="${this.onButtonClick}" @focus="${this.onButtonFocus}" ?disabled="${this.disabled}">${this.buttonContent}</sp-action-button>`;}get renderPopover(){return p`<sp-popover id="popover" @sp-overlay-closed="${this.onOverlayClosed}"><sp-menu id="menu" role="${this.listRole}" @change="${this.handleChange}" .selects="${this.selects}"></sp-menu></sp-popover>`;}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has('invalid')){this.invalid=false;}this.quiet=true;}}__decorate([e({type:String})],ActionMenu.prototype,"selects",void 0);

iliadCustomElementsDefine('sp-action-menu',ActionMenu);

const styles$H=r`:host{--spectrum-asset-icon-min-width:var(--spectrum-global-dimension-size-600);--spectrum-asset-icon-max-width:var(
--spectrum-global-dimension-static-size-1000
);--spectrum-asset-icon-margin:var(--spectrum-global-dimension-size-250);--spectrum-asset-folder-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-asset-file-background-color:var(
--spectrum-global-color-gray-50
);--spectrum-asset-icon-outline-color:var(--spectrum-global-color-gray-500)}:host{align-items:center;display:flex;height:100%;justify-content:center;width:100%}::slotted(*){max-height:100%;max-width:100%;object-fit:contain;transition:opacity var(--spectrum-global-animation-duration-100,.13s)}.file,.folder{height:100%;margin:var(
--spectrum-asset-icon-margin,var(--spectrum-global-dimension-size-250)
);max-width:var(
--spectrum-asset-icon-max-width,var(--spectrum-global-dimension-static-size-1000)
);min-width:var(
--spectrum-asset-icon-min-width,var(--spectrum-global-dimension-size-600)
);width:100%}.folderBackground{fill:var(
--spectrum-asset-folder-background-color,var(--spectrum-global-color-gray-300)
)}.fileBackground{fill:var(
--spectrum-asset-file-background-color,var(--spectrum-global-color-gray-50)
)}.fileOutline,.folderOutline{fill:var(
--spectrum-asset-icon-outline-color,var(--spectrum-global-color-gray-500)
)}`;

const file=label=>p`<svg class="file" role="img" viewBox="0 0 128 128" aria-label="${label||'File'}"><path class="fileBackground" d="M24,126c-5.5,0-10-4.5-10-10V12c0-5.5,4.5-10,10-10h61.5c2.1,0,4.1,0.8,5.6,2.3l20.5,20.4c1.5,1.5,2.4,3.5,2.4,5.7V116c0,5.5-4.5,10-10,10H24z"></path><path class="fileOutline" d="M113.1,23.3L92.6,2.9C90.7,1,88.2,0,85.5,0H24c-6.6,0-12,5.4-12,12v104c0,6.6,5.4,12,12,12h80c6.6,0,12-5.4,12-12V30.4C116,27.8,114.9,25.2,113.1,23.3z M90,6l20.1,20H92c-1.1,0-2-0.9-2-2V6z M112,116c0,4.4-3.6,8-8,8H24c-4.4,0-8-3.6-8-8V12c0-4.4,3.6-8,8-8h61.5c0.2,0,0.3,0,0.5,0v20c0,3.3,2.7,6,6,6h20c0,0.1,0,0.3,0,0.4V116z"></path></svg>`;const folder=label=>p`<svg class="folder" role="img" viewBox="0 0 32 32" aria-label="${label||'Folder'}"><path class="folderBackground" d="M3,29.5c-1.4,0-2.5-1.1-2.5-2.5V5c0-1.4,1.1-2.5,2.5-2.5h10.1c0.5,0,1,0.2,1.4,0.6l3.1,3.1c0.2,0.2,0.4,0.3,0.7,0.3H29c1.4,0,2.5,1.1,2.5,2.5v18c0,1.4-1.1,2.5-2.5,2.5H3z"></path><path class="folderOutline" d="M29,6H18.3c-0.1,0-0.2,0-0.4-0.2l-3.1-3.1C14.4,2.3,13.8,2,13.1,2H3C1.3,2,0,3.3,0,5v22c0,1.6,1.3,3,3,3h26c1.7,0,3-1.4,3-3V9C32,7.3,30.7,6,29,6z M31,27c0,1.1-0.9,2-2,2H3c-1.1,0-2-0.9-2-2V7h28c1.1,0,2,0.9,2,2V27z"></path></svg>`;/**
 * @element sp-asset
 * @slot - content to be displayed in the asset when an acceptable value for `file` is not present
 */class Asset extends SpectrumElement{constructor(){super(...arguments);this.label='';}static get styles(){return [styles$H];}render(){if(this.variant==='file'){return file(this.label);}else if(this.variant==='folder'){return folder(this.label);}return p`<slot></slot>`;}}__decorate([e({type:String,reflect:true})],Asset.prototype,"variant",void 0);__decorate([e()],Asset.prototype,"label",void 0);

iliadCustomElementsDefine('sp-asset',Asset);

const styles$G=r`:host{--spectrum-avatar-size-50-width:var(--spectrum-alias-avatar-size-50);--spectrum-avatar-size-50-height:var(--spectrum-alias-avatar-size-50);--spectrum-avatar-size-50-border-radius:50%;--spectrum-avatar-size-100-opacity:1;--spectrum-avatar-size-100-opacity-disabled:0.3}:host{-webkit-user-drag:none;border-radius:var(--spectrum-avatar-size-50-border-radius,50%);border-style:none;height:var(
--spectrum-avatar-size-50-height,var(--spectrum-alias-avatar-size-50)
);-webkit-user-select:none;user-select:none;width:var(
--spectrum-avatar-size-50-width,var(--spectrum-alias-avatar-size-50)
)}:host{opacity:var(--spectrum-avatar-size-100-opacity,1)}:host([disabled]){opacity:var(
--spectrum-avatar-size-100-opacity-disabled,.3
)}:host{display:block;overflow:hidden}img{height:auto;vertical-align:top;width:100%}`;

/**
 * @element sp-avatar
 */class Avatar extends SpectrumElement{constructor(){super(...arguments);this.label='';this.src='';}static get styles(){return [styles$G];}render(){return p`<img alt="${l(this.label||undefined)}" src="${this.src}">`;}}__decorate([e()],Avatar.prototype,"label",void 0);__decorate([e()],Avatar.prototype,"src",void 0);

iliadCustomElementsDefine('sp-avatar',Avatar);

const styles$F=r`:host{--spectrum-banner-border-radius:var(
--spectrum-global-dimension-static-size-100
);--spectrum-banner-padding-y:var(
--spectrum-global-dimension-static-size-50
);--spectrum-banner-padding-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-banner-text-size:var(--spectrum-global-dimension-font-size-75);--spectrum-banner-text-line-height:var(
--spectrum-alias-heading-text-line-height
);--spectrum-banner-text-color:var(--spectrum-global-color-static-white);--spectrum-banner-info-background-color:var(
--spectrum-semantic-informative-color-default
);--spectrum-banner-warning-background-color:var(
--spectrum-semantic-notice-color-default
);--spectrum-banner-error-background-color:var(
--spectrum-semantic-negative-color-default
)}:host{border-radius:var(
--spectrum-banner-border-radius,var(--spectrum-global-dimension-static-size-100)
);display:inline-block;font-size:var(
--spectrum-banner-text-size,var(--spectrum-global-dimension-font-size-75)
);line-height:var(
--spectrum-banner-text-line-height,var(--spectrum-alias-heading-text-line-height)
);padding:var(
--spectrum-banner-padding-y,var(--spectrum-global-dimension-static-size-50)
) var(
--spectrum-banner-padding-x,var(--spectrum-global-dimension-static-size-100)
)}#header{font-weight:700}:host([dir=ltr][corner]){right:-10px}:host([dir=rtl][corner]){left:-10px}:host([corner]){position:absolute;top:-10px}:host{color:var(
--spectrum-banner-text-color,var(--spectrum-global-color-static-white)
)}:host([type=info]){background-color:var(
--spectrum-banner-info-background-color,var(--spectrum-semantic-informative-color-default)
)}:host([type=warning]){background-color:var(
--spectrum-banner-warning-background-color,var(--spectrum-semantic-notice-color-default)
)}:host([type=error]){background-color:var(
--spectrum-banner-error-background-color,var(--spectrum-semantic-negative-color-default)
)}`;

/**
 * @element sp-banner
 *
 * @attr type - Determines the style, can be "info", "warning", or "error". Default is "info"
 * @attr corner - Determines if banner sets position at upper right corner or not.
 *
 * @slot header - Primary message of the banner.
 * @slot content - Secondary message of the banner. Used to provide a description.
 */class Banner extends SpectrumElement{constructor(){super(...arguments);this.type='info';this.corner=false;}static get styles(){return [styles$F];}render(){return p`<div id="header"><slot name="header"></slot></div><div id="content"><slot name="content"></slot></div>`;}}__decorate([e({reflect:true,type:String})],Banner.prototype,"type",void 0);__decorate([e({reflect:true,type:Boolean})],Banner.prototype,"corner",void 0);

iliadCustomElementsDefine('sp-banner',Banner);

const styles$E=r`:host{--spectrum-buttongroup-button-gap-x:var(
--spectrum-global-dimension-size-100
);--spectrum-buttongroup-button-gap-y:var(
--spectrum-global-dimension-size-100
)}:host{--spectrum-buttongroup-button-gap-reset:0}:host{display:flex}::slotted(*){flex-shrink:0}:host([dir=ltr]) ::slotted(:not(:first-of-type)){margin-left:var(
--spectrum-buttongroup-button-gap-x,var(--spectrum-global-dimension-static-size-200)
)}:host([dir=rtl]) ::slotted(:not(:first-of-type)){margin-right:var(
--spectrum-buttongroup-button-gap-x,var(--spectrum-global-dimension-static-size-200)
)}:host([vertical]){display:inline-flex;flex-direction:column}:host([dir=ltr][vertical]) ::slotted(:not(:first-of-type)){margin-left:var(
--spectrum-buttongroup-button-gap-reset
)}:host([dir=rtl][vertical]) ::slotted(:not(:first-of-type)){margin-right:var(
--spectrum-buttongroup-button-gap-reset
)}:host([vertical]) ::slotted(:not(:first-of-type)){margin-top:var(
--spectrum-buttongroup-button-gap-y,var(--spectrum-global-dimension-static-size-200)
)}:host([vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-flex-grow:1}:host([dir=ltr][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:left}:host([dir=rtl][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:right}`;

/**
 * @element sp-button-group
 * @slot - the sp-button elements that make up the group
 */class ButtonGroup extends SpectrumElement{constructor(){super(...arguments);this.vertical=false;}static get styles(){return [styles$E];}render(){return p`<slot></slot>`;}}__decorate([e({type:Boolean,reflect:true})],ButtonGroup.prototype,"vertical",void 0);

iliadCustomElementsDefine('sp-button-group',ButtonGroup);

class CheckboxBase extends Focusable{constructor(){super(...arguments);this.checked=false;this.readonly=false;}get focusElement(){return this.inputElement;}handleChange(event){if(this.readonly){this.inputElement.checked=this.checked;return;}this.checked=this.inputElement.checked;// Change events from the shadow DOM are not transmitted into
// the parent light DOM
const changeEvent=new CustomEvent('change',{detail:{sourceEvent:event},bubbles:event.bubbles,cancelable:event.cancelable});this.dispatchEvent(changeEvent);}render(){return p`<input id="input" aria-labelledby="label" type="checkbox" .checked="${this.checked}" @change="${this.handleChange}">`;}}__decorate([e({type:Boolean,reflect:true})],CheckboxBase.prototype,"checked",void 0);__decorate([e({type:Boolean,reflect:true})],CheckboxBase.prototype,"readonly",void 0);__decorate([i('#input')],CheckboxBase.prototype,"inputElement",void 0);

const Checkmark75Icon=()=>{return tag$2`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" aria-hidden="true" fill="currentColor"><path d="M3.667 9.07a.96.96 0 01-.737-.344L.753 6.114a.96.96 0 111.474-1.23l1.418 1.701 4.112-5.233a.96.96 0 011.51 1.186L4.422 8.704a.962.962 0 01-.741.367z"/></svg>`;};

/**
 * @element sp-icon-checkmark75
 */class IconCheckmark75 extends IconBase{render(){setCustomTemplateLiteralTag$2(p);return Checkmark75Icon();}}

iliadCustomElementsDefine('sp-icon-checkmark75',IconCheckmark75);

const Checkmark200Icon=()=>{return tag$2`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" aria-hidden="true" fill="currentColor"><path d="M4.313 10.98a1.042 1.042 0 01-.8-.375L.647 7.165a1.042 1.042 0 011.6-1.333l2.042 2.45 5.443-6.928a1.042 1.042 0 011.64 1.287l-6.24 7.94a1.04 1.04 0 01-.804.399z"/></svg>`;};

/**
 * @element sp-icon-checkmark200
 */class IconCheckmark200 extends IconBase{render(){setCustomTemplateLiteralTag$2(p);return Checkmark200Icon();}}

iliadCustomElementsDefine('sp-icon-checkmark200',IconCheckmark200);

const Checkmark300Icon=()=>{return tag$2`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" aria-hidden="true" fill="currentColor"><path d="M5.102 12.514a1.087 1.087 0 01-.834-.39L.988 8.19A1.085 1.085 0 012.656 6.8l2.421 2.906 6.243-7.947a1.085 1.085 0 011.707 1.34L5.955 12.1a1.089 1.089 0 01-.838.415z"/></svg>`;};

/**
 * @element sp-icon-checkmark300
 */class IconCheckmark300 extends IconBase{render(){setCustomTemplateLiteralTag$2(p);return Checkmark300Icon();}}

iliadCustomElementsDefine('sp-icon-checkmark300',IconCheckmark300);

const Dash75Icon=()=>{return tag$2`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" aria-hidden="true" fill="currentColor"><path d="M6.99 4.96H1.01a.96.96 0 010-1.92h5.98a.96.96 0 010 1.92z"/></svg>`;};

/**
 * @element sp-icon-dash75
 */class IconDash75 extends IconBase{render(){setCustomTemplateLiteralTag$2(p);return Dash75Icon();}}

iliadCustomElementsDefine('sp-icon-dash75',IconDash75);

const Dash100Icon=()=>{return tag$2`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" aria-hidden="true" fill="currentColor"><path d="M8.5 6h-7a1 1 0 010-2h7a1 1 0 010 2z"/></svg>`;};

/**
 * @element sp-icon-dash100
 */class IconDash100 extends IconBase{render(){setCustomTemplateLiteralTag$2(p);return Dash100Icon();}}

iliadCustomElementsDefine('sp-icon-dash100',IconDash100);

const Dash200Icon=()=>{return tag$2`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" aria-hidden="true" fill="currentColor"><path d="M10.021 7.042H1.98a1.042 1.042 0 110-2.083h8.043a1.042 1.042 0 010 2.083z"/></svg>`;};

/**
 * @element sp-icon-dash200
 */class IconDash200 extends IconBase{render(){setCustomTemplateLiteralTag$2(p);return Dash200Icon();}}

iliadCustomElementsDefine('sp-icon-dash200',IconDash200);

const Dash300Icon=()=>{return tag$2`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" aria-hidden="true" fill="currentColor"><path d="M10.61 7.085H1.39a1.085 1.085 0 010-2.17h9.22a1.085 1.085 0 010 2.17z"/></svg>`;};

/**
 * @element sp-icon-dash300
 */class IconDash300 extends IconBase{render(){setCustomTemplateLiteralTag$2(p);return Dash300Icon();}}

iliadCustomElementsDefine('sp-icon-dash300',IconDash300);

const styles$D=r`:host{--spectrum-alias-focus-ring-gap:var(
--spectrum-global-dimension-static-size-25
);--spectrum-checkbox-s-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-checkbox-s-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-checkbox-s-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-checkbox-s-box-border-radius:var(
--spectrum-alias-border-radius-small
);--spectrum-checkbox-s-box-border-size:var(
--spectrum-alias-border-size-thick
);--spectrum-checkbox-s-text-size:var(--spectrum-alias-item-text-size-s);--spectrum-checkbox-s-text-padding-top:var(
--spectrum-alias-item-text-padding-top-s
);--spectrum-checkbox-s-height:var(--spectrum-alias-item-height-s);--spectrum-checkbox-s-checkmark-size:var(
--spectrum-alias-ui-icon-checkmark-size-75
);--spectrum-checkbox-s-box-size:var(--spectrum-alias-item-control-2-size-s);--spectrum-checkbox-s-text-gap:var(--spectrum-alias-item-control-gap-s);--spectrum-checkbox-m-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-checkbox-m-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-checkbox-m-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-checkbox-m-box-border-radius:var(
--spectrum-alias-border-radius-small
);--spectrum-checkbox-m-box-border-size:var(
--spectrum-alias-border-size-thick
);--spectrum-checkbox-m-text-size:var(--spectrum-alias-item-text-size-m);--spectrum-checkbox-m-text-padding-top:var(
--spectrum-alias-item-text-padding-top-m
);--spectrum-checkbox-m-height:var(--spectrum-alias-item-height-m);--spectrum-checkbox-m-checkmark-size:var(
--spectrum-alias-ui-icon-checkmark-size-100
);--spectrum-checkbox-m-box-size:var(--spectrum-alias-item-control-2-size-m);--spectrum-checkbox-m-text-gap:var(--spectrum-alias-item-control-gap-m);--spectrum-checkbox-l-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-checkbox-l-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-checkbox-l-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-checkbox-l-box-border-radius:var(
--spectrum-alias-border-radius-small
);--spectrum-checkbox-l-box-border-size:var(
--spectrum-alias-border-size-thick
);--spectrum-checkbox-l-text-size:var(--spectrum-alias-item-text-size-l);--spectrum-checkbox-l-text-padding-top:var(
--spectrum-alias-item-text-padding-top-l
);--spectrum-checkbox-l-height:var(--spectrum-alias-item-height-l);--spectrum-checkbox-l-checkmark-size:var(
--spectrum-alias-ui-icon-checkmark-size-200
);--spectrum-checkbox-l-box-size:var(--spectrum-alias-item-control-2-size-l);--spectrum-checkbox-l-text-gap:var(--spectrum-alias-item-control-gap-l);--spectrum-checkbox-xl-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-checkbox-xl-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-checkbox-xl-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-checkbox-xl-box-border-radius:var(
--spectrum-alias-border-radius-small
);--spectrum-checkbox-xl-box-border-size:var(
--spectrum-alias-border-size-thick
);--spectrum-checkbox-xl-text-size:var(--spectrum-alias-item-text-size-xl);--spectrum-checkbox-xl-text-padding-top:var(
--spectrum-alias-item-text-padding-top-xl
);--spectrum-checkbox-xl-height:var(--spectrum-alias-item-height-xl);--spectrum-checkbox-xl-checkmark-size:var(
--spectrum-alias-ui-icon-checkmark-size-300
);--spectrum-checkbox-xl-box-size:var(
--spectrum-alias-item-control-2-size-xl
);--spectrum-checkbox-xl-text-gap:var(--spectrum-alias-item-control-gap-xl);--spectrum-checkbox-m-text-color:var(--spectrum-alias-text-color);--spectrum-checkbox-m-checkmark-color:var(--spectrum-global-color-gray-75);--spectrum-checkbox-m-box-border-color:var(
--spectrum-global-color-gray-600
);--spectrum-checkbox-m-box-background-color:var(
--spectrum-global-color-gray-75
);--spectrum-checkbox-m-box-border-color-selected:var(
--spectrum-global-color-gray-700
);--spectrum-checkbox-m-box-border-color-selected-hover:var(
--spectrum-global-color-gray-800
);--spectrum-checkbox-m-box-border-color-selected-down:var(
--spectrum-global-color-gray-900
);--spectrum-checkbox-m-box-border-color-hover:var(
--spectrum-global-color-gray-700
);--spectrum-checkbox-m-text-color-hover:var(
--spectrum-alias-text-color-hover
);--spectrum-checkbox-m-box-border-color-down:var(
--spectrum-global-color-gray-800
);--spectrum-checkbox-m-text-color-down:var(
--spectrum-alias-text-color-down
);--spectrum-checkbox-m-box-border-color-disabled:var(
--spectrum-global-color-gray-400
);--spectrum-checkbox-m-box-background-color-disabled:var(
--spectrum-global-color-gray-75
);--spectrum-checkbox-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-checkbox-m-box-border-color-key-focus:var(
--spectrum-global-color-gray-700
);--spectrum-checkbox-m-focus-ring-size-key-focus:var(
--spectrum-alias-focus-ring-size
);--spectrum-checkbox-m-focus-ring-color-key-focus:var(
--spectrum-alias-focus-ring-color
);--spectrum-checkbox-m-box-border-color-selected-key-focus:var(
--spectrum-global-color-gray-800
);--spectrum-checkbox-m-text-color-key-focus:var(
--spectrum-alias-text-color-hover
);--spectrum-checkbox-m-emphasized-box-border-color-selected:var(
--spectrum-global-color-blue-500
);--spectrum-checkbox-m-emphasized-box-border-color-selected-hover:var(
--spectrum-global-color-blue-600
);--spectrum-checkbox-m-emphasized-box-border-color-selected-down:var(
--spectrum-global-color-blue-700
);--spectrum-checkbox-m-box-border-color-error:var(
--spectrum-global-color-red-500
);--spectrum-checkbox-m-text-color-error:var(
--spectrum-global-color-red-600
);--spectrum-checkbox-m-box-border-color-error-hover:var(
--spectrum-global-color-red-600
);--spectrum-checkbox-m-text-color-error-hover:var(
--spectrum-global-color-red-700
);--spectrum-checkbox-m-box-border-color-error-down:var(
--spectrum-global-color-red-700
);--spectrum-checkbox-m-text-color-error-down:var(
--spectrum-global-color-red-700
)}:host{align-items:flex-start;max-width:100%;min-height:var(--spectrum-checkbox-height);position:relative}#input{box-sizing:border-box;cursor:pointer;font-family:inherit;font-size:100%;height:100%;line-height:1.15;margin:0;opacity:.0001;overflow:visible;padding:0;position:absolute;width:100%;z-index:1}#input:disabled{cursor:default}#input:checked+#box:before{border-width:calc(var(--spectrum-checkbox-box-size)/2)}#input:checked+#box #checkmark{opacity:1;transform:scale(1)}#input.focus-visible+#box:after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}#input:focus-visible+#box:after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}:host([size=s]){--spectrum-checkbox-text-font-style:var(
--spectrum-checkbox-s-text-font-style,var(--spectrum-global-font-style-regular)
);--spectrum-checkbox-text-font-weight:var(
--spectrum-checkbox-s-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-checkbox-text-line-height:var(
--spectrum-checkbox-s-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-checkbox-box-border-radius:var(
--spectrum-checkbox-s-box-border-radius,var(--spectrum-alias-border-radius-small)
);--spectrum-checkbox-box-border-size:var(
--spectrum-checkbox-s-box-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-checkbox-text-size:var(
--spectrum-checkbox-s-text-size,var(--spectrum-alias-item-text-size-s)
);--spectrum-checkbox-text-padding-top:var(
--spectrum-checkbox-s-text-padding-top,var(--spectrum-alias-item-text-padding-top-s)
);--spectrum-checkbox-height:var(
--spectrum-checkbox-s-height,var(--spectrum-alias-item-height-s)
);--spectrum-checkbox-checkmark-size:var(
--spectrum-checkbox-s-checkmark-size,var(--spectrum-alias-ui-icon-checkmark-size-75)
);--spectrum-checkbox-box-size:var(
--spectrum-checkbox-s-box-size,var(--spectrum-alias-item-control-2-size-s)
);--spectrum-checkbox-text-gap:var(
--spectrum-checkbox-s-text-gap,var(--spectrum-alias-item-control-gap-s)
)}:host([size=m]){--spectrum-checkbox-text-font-style:var(
--spectrum-checkbox-m-text-font-style,var(--spectrum-global-font-style-regular)
);--spectrum-checkbox-text-font-weight:var(
--spectrum-checkbox-m-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-checkbox-text-line-height:var(
--spectrum-checkbox-m-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-checkbox-box-border-radius:var(
--spectrum-checkbox-m-box-border-radius,var(--spectrum-alias-border-radius-small)
);--spectrum-checkbox-box-border-size:var(
--spectrum-checkbox-m-box-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-checkbox-text-size:var(
--spectrum-checkbox-m-text-size,var(--spectrum-alias-item-text-size-m)
);--spectrum-checkbox-text-padding-top:var(
--spectrum-checkbox-m-text-padding-top,var(--spectrum-alias-item-text-padding-top-m)
);--spectrum-checkbox-height:var(
--spectrum-checkbox-m-height,var(--spectrum-alias-item-height-m)
);--spectrum-checkbox-checkmark-size:var(
--spectrum-checkbox-m-checkmark-size,var(--spectrum-alias-ui-icon-checkmark-size-100)
);--spectrum-checkbox-box-size:var(
--spectrum-checkbox-m-box-size,var(--spectrum-alias-item-control-2-size-m)
);--spectrum-checkbox-text-gap:var(
--spectrum-checkbox-m-text-gap,var(--spectrum-alias-item-control-gap-m)
)}:host([size=l]){--spectrum-checkbox-text-font-style:var(
--spectrum-checkbox-l-text-font-style,var(--spectrum-global-font-style-regular)
);--spectrum-checkbox-text-font-weight:var(
--spectrum-checkbox-l-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-checkbox-text-line-height:var(
--spectrum-checkbox-l-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-checkbox-box-border-radius:var(
--spectrum-checkbox-l-box-border-radius,var(--spectrum-alias-border-radius-small)
);--spectrum-checkbox-box-border-size:var(
--spectrum-checkbox-l-box-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-checkbox-text-size:var(
--spectrum-checkbox-l-text-size,var(--spectrum-alias-item-text-size-l)
);--spectrum-checkbox-text-padding-top:var(
--spectrum-checkbox-l-text-padding-top,var(--spectrum-alias-item-text-padding-top-l)
);--spectrum-checkbox-height:var(
--spectrum-checkbox-l-height,var(--spectrum-alias-item-height-l)
);--spectrum-checkbox-checkmark-size:var(
--spectrum-checkbox-l-checkmark-size,var(--spectrum-alias-ui-icon-checkmark-size-200)
);--spectrum-checkbox-box-size:var(
--spectrum-checkbox-l-box-size,var(--spectrum-alias-item-control-2-size-l)
);--spectrum-checkbox-text-gap:var(
--spectrum-checkbox-l-text-gap,var(--spectrum-alias-item-control-gap-l)
)}:host([size=xl]){--spectrum-checkbox-text-font-style:var(
--spectrum-checkbox-xl-text-font-style,var(--spectrum-global-font-style-regular)
);--spectrum-checkbox-text-font-weight:var(
--spectrum-checkbox-xl-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-checkbox-text-line-height:var(
--spectrum-checkbox-xl-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-checkbox-box-border-radius:var(
--spectrum-checkbox-xl-box-border-radius,var(--spectrum-alias-border-radius-small)
);--spectrum-checkbox-box-border-size:var(
--spectrum-checkbox-xl-box-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-checkbox-text-size:var(
--spectrum-checkbox-xl-text-size,var(--spectrum-alias-item-text-size-xl)
);--spectrum-checkbox-text-padding-top:var(
--spectrum-checkbox-xl-text-padding-top,var(--spectrum-alias-item-text-padding-top-xl)
);--spectrum-checkbox-height:var(
--spectrum-checkbox-xl-height,var(--spectrum-alias-item-height-xl)
);--spectrum-checkbox-checkmark-size:var(
--spectrum-checkbox-xl-checkmark-size,var(--spectrum-alias-ui-icon-checkmark-size-300)
);--spectrum-checkbox-box-size:var(
--spectrum-checkbox-xl-box-size,var(--spectrum-alias-item-control-2-size-xl)
);--spectrum-checkbox-text-gap:var(
--spectrum-checkbox-xl-text-gap,var(--spectrum-alias-item-control-gap-xl)
)}:host([indeterminate]) #box:before,:host([indeterminate]) #input:checked+#box:before{border-width:calc(var(--spectrum-checkbox-box-size)/2)}:host([indeterminate]) #box #checkmark,:host([indeterminate]) #input:checked+#box #checkmark{display:none}:host([indeterminate]) #box #partialCheckmark,:host([indeterminate]) #input:checked+#box #partialCheckmark{display:block;opacity:1;transform:scale(1)}:host([dir=ltr]) #label{text-align:left}:host([dir=rtl]) #label{text-align:right}:host([dir=ltr]) #label{margin-left:var(
--spectrum-checkbox-text-gap
)}:host([dir=rtl]) #label{margin-right:var(
--spectrum-checkbox-text-gap
)}#label{font-size:var(--spectrum-checkbox-text-size);font-style:var(--spectrum-checkbox-text-font-style);font-weight:var(--spectrum-checkbox-text-font-weight);line-height:var(--spectrum-checkbox-text-line-height);margin-top:var(
--spectrum-checkbox-text-padding-top
);transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}#box{box-sizing:border-box;flex-grow:0;flex-shrink:0;height:var(--spectrum-checkbox-box-size);margin:calc((var(--spectrum-checkbox-height) - var(--spectrum-checkbox-box-size))/ 2) 0;position:relative;width:var(--spectrum-checkbox-box-size)}#box:before{border-radius:var(--spectrum-checkbox-box-border-radius);border-style:solid;border-width:var(--spectrum-checkbox-box-border-size);box-sizing:border-box;content:"";display:block;height:var(--spectrum-checkbox-box-size);position:absolute;transition:border var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;width:var(--spectrum-checkbox-box-size);z-index:0}#box:after{border-radius:calc(var(--spectrum-checkbox-box-border-radius) + var(--spectrum-alias-focus-ring-gap,var(--spectrum-global-dimension-static-size-25)));bottom:0;content:"";display:block;left:0;margin:var(
--spectrum-alias-focus-ring-gap,var(--spectrum-global-dimension-static-size-25)
);position:absolute;right:0;top:0;transform:translate(0);transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}:host([dir=ltr]) #checkmark,:host([dir=ltr]) #partialCheckmark{left:50%}:host([dir=rtl]) #checkmark,:host([dir=rtl]) #partialCheckmark{right:50%}#checkmark,#partialCheckmark{opacity:0;position:absolute;top:50%;transform:scale(0);transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([dir=ltr]) #checkmark{margin-left:calc(var(--spectrum-checkbox-checkmark-size)/-2)}:host([dir=rtl]) #checkmark{margin-right:calc(var(--spectrum-checkbox-checkmark-size)/-2)}#checkmark{margin-top:calc(var(--spectrum-checkbox-checkmark-size)/-2)}:host([dir=ltr]) #partialCheckmark{margin-left:calc(var(--spectrum-checkbox-checkmark-size)/-2)}:host([dir=rtl]) #partialCheckmark{margin-right:calc(var(--spectrum-checkbox-checkmark-size)/-2)}#partialCheckmark{display:none;margin-top:calc(var(--spectrum-checkbox-checkmark-size)/-2)}:host{color:var(
--spectrum-checkbox-m-text-color,var(--spectrum-alias-text-color)
)}#checkmark,#partialCheckmark{color:var(
--spectrum-checkbox-m-checkmark-color,var(--spectrum-global-color-gray-75)
)}#box:before{background-color:var(
--spectrum-checkbox-m-box-background-color,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-checkbox-m-box-border-color,var(--spectrum-global-color-gray-600)
);forced-color-adjust:none}#label{color:var(
--spectrum-checkbox-m-text-color,var(--spectrum-alias-text-color)
)}#input:checked+#box:before,:host([indeterminate]) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-selected,var(--spectrum-global-color-gray-700)
)}:host(:hover) #input:checked+#box:before,:host(:hover[indeterminate]) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-selected-hover,var(--spectrum-global-color-gray-800)
)}:host(:active) #input:checked+#box:before,:host(:active[indeterminate]) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-selected-down,var(--spectrum-global-color-gray-900)
)}:host{border-color:var(
--spectrum-checkbox-m-box-border-color,var(--spectrum-global-color-gray-600)
)}:host(:hover) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-hover,var(--spectrum-global-color-gray-700)
)}:host(:hover) #label{color:var(
--spectrum-checkbox-m-text-color-hover,var(--spectrum-alias-text-color-hover)
)}:host(:active) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-down,var(--spectrum-global-color-gray-800)
)}:host(:active) #label{color:var(
--spectrum-checkbox-m-text-color-down,var(--spectrum-alias-text-color-down)
)}#input:disabled+#box:before,:host([dir]) #input:checked:disabled+#box:before{background-color:var(
--spectrum-checkbox-m-box-background-color-disabled,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-checkbox-m-box-border-color-disabled,var(--spectrum-global-color-gray-400)
)}#input:checked:disabled~#label,#input:disabled~#label{color:var(
--spectrum-checkbox-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);forced-color-adjust:none}#input.focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-key-focus,var(--spectrum-global-color-gray-700)
)}#input:focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-key-focus,var(--spectrum-global-color-gray-700)
)}#input.focus-visible+#box:after{box-shadow:0 0 0 var(
--spectrum-checkbox-m-focus-ring-size-key-focus,var(--spectrum-alias-focus-ring-size)
) var(
--spectrum-checkbox-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
);forced-color-adjust:none}#input:focus-visible+#box:after{box-shadow:0 0 0 var(
--spectrum-checkbox-m-focus-ring-size-key-focus,var(--spectrum-alias-focus-ring-size)
) var(
--spectrum-checkbox-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
);forced-color-adjust:none}#input:checked.focus-visible+#box:before,:host([indeterminate]) #input.focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-selected-key-focus,var(--spectrum-global-color-gray-800)
)}#input:checked:focus-visible+#box:before,:host([indeterminate]) #input:focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-selected-key-focus,var(--spectrum-global-color-gray-800)
)}#input.focus-visible~#label{color:var(
--spectrum-checkbox-m-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}#input:focus-visible~#label{color:var(
--spectrum-checkbox-m-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([emphasized]) #input:checked+#box:before,:host([emphasized][indeterminate]) #box:before,:host([emphasized][indeterminate]) #input.focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-emphasized-box-border-color-selected,var(--spectrum-global-color-blue-500)
)}:host([emphasized]) #input:checked+#box:before,:host([emphasized][indeterminate]) #box:before,:host([emphasized][indeterminate]) #input:focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-emphasized-box-border-color-selected,var(--spectrum-global-color-blue-500)
)}:host([emphasized]:hover) #input:checked+#box:before,:host([emphasized][indeterminate]:hover) #box:before{border-color:var(
--spectrum-checkbox-m-emphasized-box-border-color-selected-hover,var(--spectrum-global-color-blue-600)
)}:host([emphasized]:active) #input:checked+#box:before,:host([emphasized][indeterminate]:active) #box:before{border-color:var(
--spectrum-checkbox-m-emphasized-box-border-color-selected-down,var(--spectrum-global-color-blue-700)
)}:host([invalid][dir]) #box:before,:host([invalid][dir]) #input:checked+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error,var(--spectrum-global-color-red-500)
)}:host([invalid]) #label{color:var(
--spectrum-checkbox-m-text-color-error,var(--spectrum-global-color-red-600)
)}:host([invalid]) #input.focus-visible+#box:before,:host([invalid][indeterminate]) #input.focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error-hover,var(--spectrum-global-color-red-600)
)}:host([invalid]) #input:focus-visible+#box:before,:host([invalid][indeterminate]) #input:focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error-hover,var(--spectrum-global-color-red-600)
)}:host([invalid]) #input.focus-visible~#label,:host([invalid][indeterminate]) #input.focus-visible~#label{color:var(
--spectrum-checkbox-m-text-color-error-hover,var(--spectrum-global-color-red-700)
)}:host([invalid]) #input:focus-visible~#label,:host([invalid][indeterminate]) #input:focus-visible~#label{color:var(
--spectrum-checkbox-m-text-color-error-hover,var(--spectrum-global-color-red-700)
)}:host([invalid]:hover) #box:before,:host([invalid][dir]:hover) #input:checked+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error-hover,var(--spectrum-global-color-red-600)
)}:host([invalid]:hover) #label{color:var(
--spectrum-checkbox-m-text-color-error-hover,var(--spectrum-global-color-red-700)
)}:host([invalid]:active) #box:before,:host([invalid]:active) #input:checked+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error-down,var(--spectrum-global-color-red-700)
)}:host([invalid]:active) #label{color:var(
--spectrum-checkbox-m-text-color-error-down,var(--spectrum-global-color-red-700)
)}@media (forced-colors:active){:host{--spectrum-checkbox-m-box-background-color-disabled:ButtonFace;--spectrum-checkbox-m-box-background-color:ButtonFace;--spectrum-checkbox-m-box-border-color-disabled:GrayText;--spectrum-checkbox-m-box-border-color-down:Highlight;--spectrum-checkbox-m-box-border-color-error-down:Highlight;--spectrum-checkbox-m-box-border-color-error-hover:Highlight;--spectrum-checkbox-m-box-border-color-error:Highlight;--spectrum-checkbox-m-box-border-color-hover:Highlight;--spectrum-checkbox-m-box-border-color-key-focus:Highlight;--spectrum-checkbox-m-box-border-color-selected-down:Highlight;--spectrum-checkbox-m-box-border-color-selected-hover:Highlight;--spectrum-checkbox-m-box-border-color-selected-key-focus:Highlight;--spectrum-checkbox-m-box-border-color-selected:Highlight;--spectrum-checkbox-m-box-border-color:ButtonText;--spectrum-checkbox-m-checkmark-color:HighlightText;--spectrum-checkbox-m-emphasized-box-border-color-selected-down:Highlight;--spectrum-checkbox-m-emphasized-box-border-color-selected-hover:Highlight;--spectrum-checkbox-m-emphasized-box-border-color-selected:Highlight;--spectrum-checkbox-m-focus-ring-color-key-focus:FieldText;--spectrum-checkbox-m-text-color-disabled:GrayText;--spectrum-checkbox-m-text-color-down:FieldText;--spectrum-checkbox-m-text-color-error-down:FieldText;--spectrum-checkbox-m-text-color-error-hover:FieldText;--spectrum-checkbox-m-text-color-error:FieldText;--spectrum-checkbox-m-text-color-hover:FieldText;--spectrum-checkbox-m-text-color-key-focus:FieldText;--spectrum-checkbox-m-text-color:FieldText}:host([invalid][dir]) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color,var(--spectrum-global-color-gray-600)
)}:host([invalid][indeterminate]) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error,var(--spectrum-global-color-red-500)
)}:host([invalid][dir]) #input:checked+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error,var(--spectrum-global-color-red-500)
)}}:host{display:inline-flex;vertical-align:top}:host(:focus){outline:0}:host([disabled]){pointer-events:none}:host(:empty) label{display:none}`;

const styles$C=r`:host{--spectrum-alias-ui-icon-triplegripper-size-100-height:var(
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
)}@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Dash50{height:var(--spectrum-alias-ui-icon-dash-size-50);width:var(
--spectrum-alias-ui-icon-dash-size-50
)}.spectrum-UIIcon-Dash75{height:var(--spectrum-alias-ui-icon-dash-size-75);width:var(
--spectrum-alias-ui-icon-dash-size-75
)}.spectrum-UIIcon-Dash100{height:var(--spectrum-alias-ui-icon-dash-size-100);width:var(
--spectrum-alias-ui-icon-dash-size-100
)}.spectrum-UIIcon-Dash200{height:var(--spectrum-alias-ui-icon-dash-size-200);width:var(
--spectrum-alias-ui-icon-dash-size-200
)}.spectrum-UIIcon-Dash300{height:var(--spectrum-alias-ui-icon-dash-size-300);width:var(
--spectrum-alias-ui-icon-dash-size-300
)}.spectrum-UIIcon-Dash400{height:var(--spectrum-alias-ui-icon-dash-size-400);width:var(
--spectrum-alias-ui-icon-dash-size-400
)}.spectrum-UIIcon-Dash500{height:var(--spectrum-alias-ui-icon-dash-size-500);width:var(
--spectrum-alias-ui-icon-dash-size-500
)}.spectrum-UIIcon-Dash600{height:var(--spectrum-alias-ui-icon-dash-size-600);width:var(
--spectrum-alias-ui-icon-dash-size-600
)}`;

const checkmarkIcon={s:p`<sp-icon-checkmark75 id="checkmark" class="spectrum-UIIcon-Checkmark75"></sp-icon-checkmark75>`,m:p`<sp-icon-checkmark100 id="checkmark" class="spectrum-UIIcon-Checkmark100"></sp-icon-checkmark100>`,l:p`<sp-icon-checkmark200 id="checkmark" class="spectrum-UIIcon-Checkmark200"></sp-icon-checkmark200>`,xl:p`<sp-icon-checkmark300 id="checkmark" class="spectrum-UIIcon-Checkmark300"></sp-icon-checkmark300>`};const dashIcon={s:p`<sp-icon-dash75 id="partialCheckmark" class="spectrum-UIIcon-Dash75"></sp-icon-dash75>`,m:p`<sp-icon-dash100 id="partialCheckmark" class="spectrum-UIIcon-Dash100"></sp-icon-dash100>`,l:p`<sp-icon-dash200 id="partialCheckmark" class="spectrum-UIIcon-Dash200"></sp-icon-dash200>`,xl:p`<sp-icon-dash300 id="partialCheckmark" class="spectrum-UIIcon-Dash300"></sp-icon-dash300>`};/**
 * @element sp-checkbox
 * @slot - content to display as the label for the Checkbox
 */class Checkbox extends SizedMixin(CheckboxBase){constructor(){super(...arguments);this.indeterminate=false;this.invalid=false;this.emphasized=false;}static get styles(){return [styles$D,styles$O,styles$C];}render(){return p`${super.render()} <span id="box">${checkmarkIcon[this.size]} ${dashIcon[this.size]} </span><label id="label"><slot></slot></label>`;}updated(changes){super.updated(changes);if(changes.has('invalid')){if(this.invalid){this.inputElement.setAttribute('aria-invalid','true');}else {this.inputElement.removeAttribute('aria-invalid');}}if(changes.has('indeterminate')){if(this.indeterminate){this.inputElement.setAttribute('aria-checked','mixed');}else {this.inputElement.removeAttribute('aria-checked');}}}}__decorate([e({type:Boolean,reflect:true})],Checkbox.prototype,"indeterminate",void 0);__decorate([e({type:Boolean,reflect:true})],Checkbox.prototype,"invalid",void 0);__decorate([e({type:Boolean,reflect:true})],Checkbox.prototype,"emphasized",void 0);

iliadCustomElementsDefine('sp-checkbox',Checkbox);

const styles$B=r`:host{--spectrum-picker-m-popover-offset-y:var(
--spectrum-global-dimension-size-75
);--spectrum-quickactions-padding-y:var(--spectrum-global-dimension-size-50);--spectrum-quickactions-padding-x:var(--spectrum-global-dimension-size-50);--spectrum-quickactions-height:var(--spectrum-global-dimension-size-500);--spectrum-quickactions-border-radius:var(
--spectrum-alias-border-radius-regular
);--spectrum-quickactions-button-gap-x:var(
--spectrum-global-dimension-size-100
);--spectrum-quickactions-text-button-gap-x:var(
--spectrum-global-dimension-size-50
);--spectrum-quickactions-overlay-color:var(
--spectrum-alias-background-color-quickactions-overlay
);--spectrum-quickactions-background-color:var(
--spectrum-alias-background-color-quickactions
)}:host{--spectrum-overlay-animation-distance:var(
--spectrum-picker-m-popover-offset-y,var(--spectrum-global-dimension-size-75)
);opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0s linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([opened]){opacity:1;pointer-events:auto;transition-delay:0s;visibility:visible}:host([enter-from=left][opened]){transform:translateX(var(--spectrum-overlay-animation-distance))}:host([enter-from=right][opened]){transform:translateX(calc(-1*var(--spectrum-overlay-animation-distance)))}:host{align-items:center;border-radius:var(
--spectrum-quickactions-border-radius,var(--spectrum-alias-border-radius-regular)
);box-sizing:border-box;display:inline-flex;height:var(
--spectrum-quickactions-height,var(--spectrum-global-dimension-size-500)
);justify-content:center;padding:var(
--spectrum-quickactions-padding-y,var(--spectrum-global-dimension-size-50)
) var(
--spectrum-quickactions-padding-x,var(--spectrum-global-dimension-size-50)
)}:host([dir=ltr]) slot[name=action]+::slotted([slot=action]){margin-left:var(
--spectrum-quickactions-button-gap-x,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) slot[name=action]+::slotted([slot=action]){margin-right:var(
--spectrum-quickactions-button-gap-x,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr][text-only]) slot[name=action]+::slotted([slot=action]){margin-left:var(
--spectrum-quickactions-text-button-gap-x,var(--spectrum-global-dimension-size-50)
)}:host([dir=rtl][text-only]) slot[name=action]+::slotted([slot=action]){margin-right:var(
--spectrum-quickactions-text-button-gap-x,var(--spectrum-global-dimension-size-50)
)}#overlay{background-color:var(
--spectrum-quickactions-overlay-color,var(--spectrum-alias-background-color-quickactions-overlay)
)}:host{background-color:var(
--spectrum-quickactions-background-color,var(--spectrum-alias-background-color-quickactions)
)}`;

/**
 * @element sp-quick-actions
 *
 * @slot - Action Buttons to displayed for quick use
 */class QuickActions extends SpectrumElement{constructor(){super(...arguments);this.opened=false;this.textOnly=false;}static get styles(){return [styles$B];}render(){return p`<slot></slot>`;}}__decorate([e({type:Boolean,reflect:true})],QuickActions.prototype,"opened",void 0);__decorate([e({type:Boolean,attribute:'text-only',hasChanged(){return false;}})],QuickActions.prototype,"textOnly",void 0);

iliadCustomElementsDefine('sp-quick-actions',QuickActions);

const styles$A=r`:host{--spectrum-card-min-width:var(--spectrum-global-dimension-size-3000);--spectrum-card-border-size:var(--spectrum-alias-border-size-thin);--spectrum-card-border-radius:var(--spectrum-alias-border-radius-regular);--spectrum-card-actions-margin:var(--spectrum-global-dimension-size-125);--spectrum-quickactions-height:var(--spectrum-global-dimension-size-500);--spectrum-card-checkbox-margin:var(--spectrum-global-dimension-size-200);--spectrum-card-coverphoto-height:var(
--spectrum-global-dimension-size-1700
);--spectrum-card-coverphoto-border-bottom-size:var(
--spectrum-alias-border-size-thin
);--spectrum-card-body-padding-right:var(
--spectrum-global-dimension-size-300
);--spectrum-card-body-padding-left:var(
--spectrum-global-dimension-size-300
);--spectrum-card-body-padding-top:var(--spectrum-global-dimension-size-250);--spectrum-card-body-padding-bottom:var(
--spectrum-global-dimension-size-250
);--spectrum-card-body-header-height:var(
--spectrum-global-dimension-size-225
);--spectrum-card-body-content-height:var(
--spectrum-global-dimension-size-175
);--spectrum-card-body-content-margin-top:var(
--spectrum-global-dimension-size-75
);--spectrum-card-title-padding-right:var(
--spectrum-global-dimension-size-100
);--spectrum-card-subtitle-padding-right:var(
--spectrum-global-dimension-size-100
);--spectrum-card-subtitle-text-size:var(
--spectrum-global-dimension-font-size-50
);--spectrum-card-footer-padding-top:var(
--spectrum-global-dimension-size-175
);--spectrum-card-footer-border-top-size:var(
--spectrum-global-dimension-size-10
);--spectrum-card-quiet-min-size:var(--spectrum-global-dimension-size-1700);--spectrum-card-quiet-preview-padding:var(
--spectrum-global-dimension-size-250
);--spectrum-card-quiet-border-radius:var(
--spectrum-alias-border-radius-regular
);--spectrum-card-quiet-border-size:var(--spectrum-alias-border-size-thin);--spectrum-card-quiet-body-header-height:var(
--spectrum-global-dimension-size-225
);--spectrum-card-quiet-body-header-margin-top:var(
--spectrum-global-dimension-size-175
);--spectrum-card-quiet-small-min-size:var(
--spectrum-global-dimension-size-900
);--spectrum-card-quiet-small-checkbox-margin:var(
--spectrum-global-dimension-size-125
);--spectrum-card-quiet-small-preview-padding:var(
--spectrum-global-dimension-size-150
);--spectrum-card-quiet-small-body-margin-top:var(
--spectrum-global-dimension-size-100
);--spectrum-card-quiet-small-body-header-height:var(
--spectrum-global-dimension-size-150
);--spectrum-card-quiet-small-title-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-card-border-color:var(--spectrum-global-color-gray-200);--spectrum-card-background-color:var(--spectrum-global-color-gray-50);--spectrum-card-border-color-hover:var(--spectrum-global-color-gray-400);--spectrum-card-border-color-key-focus:var(
--spectrum-alias-border-color-focus
);--spectrum-card-description-text-color:var(
--spectrum-global-color-gray-700
);--spectrum-card-coverphoto-background-color:var(
--spectrum-global-color-gray-200
);--spectrum-card-coverphoto-border-color:var(
--spectrum-global-color-gray-200
);--spectrum-card-quiet-preview-background-color:var(
--spectrum-global-color-gray-200
);--spectrum-card-quiet-preview-background-color-hover:var(
--spectrum-global-color-gray-300
);--spectrum-card-quiet-border-color-selected:var(
--spectrum-global-color-blue-500
);--spectrum-card-quiet-title-text-color:var(
--spectrum-global-color-gray-800
);--spectrum-card-quiet-subtitle-text-color:var(
--spectrum-global-color-gray-700
)}:host{border:var(
--spectrum-card-border-size,var(--spectrum-alias-border-size-thin)
) solid transparent;border-radius:var(
--spectrum-card-border-radius,var(--spectrum-alias-border-radius-regular)
);box-sizing:border-box;display:inline-flex;flex-direction:column;min-width:var(
--spectrum-card-min-width,var(--spectrum-global-dimension-size-3000)
);position:relative;text-decoration:none}:host(:focus){outline:0}:host(:focus) .actions,:host(:focus) .quickActions,:host(:hover) .actions,:host(:hover) .quickActions,:host([focused]) .actions,:host([focused]) .quickActions,:host([selected]) .actions,:host([selected]) .quickActions{opacity:1;pointer-events:all;visibility:visible}:host([dir=ltr]) .actions{right:var(
--spectrum-card-actions-margin,var(--spectrum-global-dimension-size-125)
)}:host([dir=rtl]) .actions{left:var(
--spectrum-card-actions-margin,var(--spectrum-global-dimension-size-125)
)}.actions{height:var(
--spectrum-quickactions-height,var(--spectrum-global-dimension-size-500)
);position:absolute;top:var(
--spectrum-card-actions-margin,var(--spectrum-global-dimension-size-125)
);visibility:hidden}:host([dir=ltr]) .quickActions{left:var(
--spectrum-card-checkbox-margin,var(--spectrum-global-dimension-size-200)
)}:host([dir=rtl]) .quickActions{right:var(
--spectrum-card-checkbox-margin,var(--spectrum-global-dimension-size-200)
)}.quickActions{height:var(
--spectrum-quickactions-height,var(--spectrum-global-dimension-size-500)
);position:absolute;top:var(
--spectrum-card-checkbox-margin,var(--spectrum-global-dimension-size-200)
);visibility:hidden;width:var(
--spectrum-quickactions-height,var(--spectrum-global-dimension-size-500)
)}:host([dir=ltr]) .quickActions .checkbox,:host([dir=rtl]) .quickActions .checkbox{margin:0}#cover-photo{align-items:center;background-position:50%;background-size:cover;border-bottom:var(
--spectrum-card-coverphoto-border-bottom-size,var(--spectrum-alias-border-size-thin)
) solid transparent;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:calc(var(--spectrum-card-border-radius,var(--spectrum-alias-border-radius-regular)) - 1px);border-top-right-radius:calc(var(--spectrum-card-border-radius,var(--spectrum-alias-border-radius-regular)) - 1px);box-sizing:border-box;display:flex;height:var(
--spectrum-card-coverphoto-height,var(--spectrum-global-dimension-size-1700)
);justify-content:center}:host([dir=ltr]) .body{padding-right:var(
--spectrum-card-body-padding-right,var(--spectrum-global-dimension-size-300)
)}:host([dir=rtl]) .body{padding-left:var(
--spectrum-card-body-padding-right,var(--spectrum-global-dimension-size-300)
)}:host([dir=ltr]) .body{padding-left:var(
--spectrum-card-body-padding-left,var(--spectrum-global-dimension-size-300)
)}:host([dir=rtl]) .body{padding-right:var(
--spectrum-card-body-padding-left,var(--spectrum-global-dimension-size-300)
)}.body{padding-bottom:var(
--spectrum-card-body-padding-bottom,var(--spectrum-global-dimension-size-250)
);padding-top:var(
--spectrum-card-body-padding-top,var(--spectrum-global-dimension-size-250)
)}.body:last-child{border-bottom-left-radius:var(
--spectrum-card-border-radius,var(--spectrum-alias-border-radius-regular)
);border-bottom-right-radius:var(
--spectrum-card-border-radius,var(--spectrum-alias-border-radius-regular)
);border-top-left-radius:0;border-top-right-radius:0}#preview{border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:calc(var(--spectrum-card-border-radius,var(--spectrum-alias-border-radius-regular)) - 1px);border-top-right-radius:calc(var(--spectrum-card-border-radius,var(--spectrum-alias-border-radius-regular)) - 1px);overflow:hidden}.header{height:var(
--spectrum-card-body-header-height,var(--spectrum-global-dimension-size-225)
)}.content{display:flex;height:var(
--spectrum-card-body-content-height,var(--spectrum-global-dimension-size-175)
);margin-top:var(
--spectrum-card-body-content-margin-top,var(--spectrum-global-dimension-size-75)
)}:host([dir=ltr]) .title{padding-right:var(
--spectrum-card-title-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) .title{padding-left:var(
--spectrum-card-title-padding-right,var(--spectrum-global-dimension-size-100)
)}.title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([dir=ltr]) .subtitle{padding-right:var(
--spectrum-card-subtitle-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) .subtitle{padding-left:var(
--spectrum-card-subtitle-padding-right,var(--spectrum-global-dimension-size-100)
)}::slotted([slot=description]){font-size:var(
--spectrum-card-subtitle-text-size,var(--spectrum-global-dimension-font-size-50)
)}:host([dir=ltr]) .subtitle+::slotted([slot=description]):before{padding-right:var(
--spectrum-card-subtitle-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) .subtitle+::slotted([slot=description]):before{padding-left:var(
--spectrum-card-subtitle-padding-right,var(--spectrum-global-dimension-size-100)
)}.subtitle+::slotted([slot=description]):before{content:"•"}:host([dir=ltr]) ::slotted([slot=footer]){margin-right:var(
--spectrum-card-body-padding-right,var(--spectrum-global-dimension-size-300)
)}:host([dir=rtl]) ::slotted([slot=footer]){margin-left:var(
--spectrum-card-body-padding-right,var(--spectrum-global-dimension-size-300)
)}:host([dir=ltr]) ::slotted([slot=footer]){margin-left:var(
--spectrum-card-body-padding-left,var(--spectrum-global-dimension-size-300)
)}:host([dir=rtl]) ::slotted([slot=footer]){margin-right:var(
--spectrum-card-body-padding-left,var(--spectrum-global-dimension-size-300)
)}::slotted([slot=footer]){border-top:var(
--spectrum-card-footer-border-top-size,var(--spectrum-global-dimension-size-10)
) solid;padding-bottom:var(
--spectrum-card-body-padding-bottom,var(--spectrum-global-dimension-size-250)
);padding-top:var(
--spectrum-card-footer-padding-top,var(--spectrum-global-dimension-size-175)
)}.header{align-items:baseline;display:flex}.actionButton{align-self:center;display:flex;flex:1;justify-content:flex-end}:host([variant=quiet]) #preview{min-height:var(
--spectrum-card-quiet-min-size,var(--spectrum-global-dimension-size-1700)
)}:host([variant=gallery]),:host([variant=quiet]){border-radius:0;border-width:0;height:100%;min-width:var(
--spectrum-card-quiet-min-size,var(--spectrum-global-dimension-size-1700)
);overflow:visible;width:100%}:host([variant=gallery]) #preview,:host([variant=quiet]) #preview{border-radius:var(
--spectrum-card-quiet-border-radius,var(--spectrum-alias-border-radius-regular)
);box-sizing:border-box;flex:1;margin:0 auto;overflow:visible;padding:var(
--spectrum-card-quiet-preview-padding,var(--spectrum-global-dimension-size-250)
);position:relative;transition:background-color var(--spectrum-global-animation-duration-100,.13s);width:100%}:host([dir=ltr][variant=gallery]) #preview:before,:host([dir=ltr][variant=quiet]) #preview:before{left:0}:host([dir=rtl][variant=gallery]) #preview:before,:host([dir=rtl][variant=quiet]) #preview:before{right:0}:host([variant=gallery]) #preview:before,:host([variant=quiet]) #preview:before{border:var(
--spectrum-card-quiet-border-size,var(--spectrum-alias-border-size-thin)
) solid transparent;border-radius:inherit;box-sizing:border-box;content:"";height:100%;position:absolute;top:0;width:100%}:host([variant=gallery][drop-target]) #preview,:host([variant=quiet][drop-target]) #preview{transition:none}:host([variant=gallery]) .header,:host([variant=quiet]) .header{height:var(
--spectrum-card-quiet-body-header-height,var(--spectrum-global-dimension-size-225)
);margin-top:var(
--spectrum-card-quiet-body-header-margin-top,var(--spectrum-global-dimension-size-175)
)}:host([variant=gallery]) .body,:host([variant=quiet]) .body{padding:0}:host([size=s]){min-width:var(
--spectrum-card-quiet-small-min-size,var(--spectrum-global-dimension-size-900)
)}:host([dir=ltr][size=s]) .quickActions{left:var(
--spectrum-card-quiet-small-checkbox-margin,var(--spectrum-global-dimension-size-125)
)}:host([dir=rtl][size=s]) .quickActions{right:var(
--spectrum-card-quiet-small-checkbox-margin,var(--spectrum-global-dimension-size-125)
)}:host([size=s]) .quickActions{top:var(
--spectrum-card-quiet-small-checkbox-margin,var(--spectrum-global-dimension-size-125)
)}:host([size=s]) #preview{min-height:var(
--spectrum-card-quiet-small-min-size,var(--spectrum-global-dimension-size-900)
);padding:var(
--spectrum-card-quiet-small-preview-padding,var(--spectrum-global-dimension-size-150)
)}:host([size=s]) .header{height:var(
--spectrum-card-quiet-small-body-header-height,var(--spectrum-global-dimension-size-150)
);margin-top:var(
--spectrum-card-quiet-small-body-margin-top,var(--spectrum-global-dimension-size-100)
)}:host([size=s]) .title{font-size:var(
--spectrum-card-quiet-small-title-text-size,var(--spectrum-global-dimension-font-size-100)
)}:host([horizontal]){flex-direction:row}:host([dir=ltr][horizontal]) #preview{border-top-left-radius:var(
--spectrum-card-quiet-border-radius,var(--spectrum-alias-border-radius-regular)
)}:host([dir=rtl][horizontal]) #preview{border-top-right-radius:var(
--spectrum-card-quiet-border-radius,var(--spectrum-alias-border-radius-regular)
)}:host([dir=ltr][horizontal]) #preview{border-top-right-radius:0}:host([dir=rtl][horizontal]) #preview{border-top-left-radius:0}:host([dir=ltr][horizontal]) #preview{border-bottom-left-radius:var(
--spectrum-card-quiet-border-radius,var(--spectrum-alias-border-radius-regular)
)}:host([dir=rtl][horizontal]) #preview{border-bottom-right-radius:var(
--spectrum-card-quiet-border-radius,var(--spectrum-alias-border-radius-regular)
)}:host([dir=ltr][horizontal]) #preview{border-bottom-right-radius:0}:host([dir=rtl][horizontal]) #preview{border-bottom-left-radius:0}:host([dir=ltr][horizontal]) #preview{border-right:var(
--spectrum-card-border-size,var(--spectrum-alias-border-size-thin)
) solid transparent}:host([dir=rtl][horizontal]) #preview{border-left:var(
--spectrum-card-border-size,var(--spectrum-alias-border-size-thin)
) solid transparent}:host([horizontal]) #preview{align-items:center;display:flex;flex-shrink:0;justify-content:center;min-height:0;padding:var(--spectrum-global-dimension-size-175)}:host([horizontal]) .content,:host([horizontal]) .header{height:auto;margin-top:0}:host([dir=ltr][horizontal]) .title{padding-right:0}:host([dir=rtl][horizontal]) .title{padding-left:0}:host([horizontal]) .body{display:flex;flex-direction:column;flex-shrink:0;justify-content:center;padding-bottom:0;padding-left:var(--spectrum-global-dimension-size-200);padding-right:var(--spectrum-global-dimension-size-200);padding-top:0}:host([variant=gallery]){min-width:0}:host([variant=gallery]) #preview{border-radius:0;padding:0}:host{background-color:var(
--spectrum-card-background-color,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-card-border-color,var(--spectrum-global-color-gray-200)
)}:host(:hover){border-color:var(
--spectrum-card-border-color-hover,var(--spectrum-global-color-gray-400)
)}:host(.focus-visible),:host([selected]){border-color:var(
--spectrum-card-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);box-shadow:0 0 0 1px var(
--spectrum-card-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host(:focus-visible),:host([selected]){border-color:var(
--spectrum-card-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);box-shadow:0 0 0 1px var(
--spectrum-card-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([drop-target]){background-color:var(--spectrum-alias-highlight-selected);border-color:var(
--spectrum-card-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);box-shadow:0 0 0 1px var(
--spectrum-card-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}.subtitle{color:var(
--spectrum-card-description-text-color,var(--spectrum-global-color-gray-700)
)}::slotted([slot=description]){color:var(
--spectrum-card-description-text-color,var(--spectrum-global-color-gray-700)
)}#cover-photo{background-color:var(
--spectrum-card-coverphoto-background-color,var(--spectrum-global-color-gray-200)
);border-bottom-color:var(
--spectrum-card-coverphoto-border-color,var(--spectrum-global-color-gray-200)
)}::slotted([slot=footer]){border-color:var(
--spectrum-card-border-color,var(--spectrum-global-color-gray-200)
)}:host([variant=gallery]),:host([variant=quiet]){background-color:transparent;border-color:transparent}:host([variant=gallery]) #preview,:host([variant=quiet]) #preview{background-color:var(
--spectrum-card-quiet-preview-background-color,var(--spectrum-global-color-gray-200)
)}:host([variant=gallery]:hover),:host([variant=quiet]:hover){border-color:transparent}:host([variant=gallery]:hover) #preview,:host([variant=quiet]:hover) #preview{background-color:var(
--spectrum-card-quiet-preview-background-color-hover,var(--spectrum-global-color-gray-300)
)}:host([variant=gallery].focus-visible),:host([variant=gallery][selected]),:host([variant=quiet].focus-visible),:host([variant=quiet][selected]){border-color:transparent;box-shadow:none}:host([variant=gallery]:focus-visible),:host([variant=gallery][selected]),:host([variant=quiet]:focus-visible),:host([variant=quiet][selected]){border-color:transparent;box-shadow:none}:host([variant=gallery].focus-visible) #preview,:host([variant=gallery][selected]) #preview,:host([variant=quiet].focus-visible) #preview,:host([variant=quiet][selected]) #preview{background-color:var(
--spectrum-card-quiet-preview-background-color,var(--spectrum-global-color-gray-200)
)}:host([variant=gallery]:focus-visible) #preview,:host([variant=gallery][selected]) #preview,:host([variant=quiet]:focus-visible) #preview,:host([variant=quiet][selected]) #preview{background-color:var(
--spectrum-card-quiet-preview-background-color,var(--spectrum-global-color-gray-200)
)}:host([variant=gallery].focus-visible) #preview:before,:host([variant=gallery][selected]) #preview:before,:host([variant=quiet].focus-visible) #preview:before,:host([variant=quiet][selected]) #preview:before{border-color:var(
--spectrum-card-quiet-border-color-selected,var(--spectrum-global-color-blue-500)
);box-shadow:0 0 0 1px var(
--spectrum-card-quiet-border-color-selected,var(--spectrum-global-color-blue-500)
)}:host([variant=gallery]:focus-visible) #preview:before,:host([variant=gallery][selected]) #preview:before,:host([variant=quiet]:focus-visible) #preview:before,:host([variant=quiet][selected]) #preview:before{border-color:var(
--spectrum-card-quiet-border-color-selected,var(--spectrum-global-color-blue-500)
);box-shadow:0 0 0 1px var(
--spectrum-card-quiet-border-color-selected,var(--spectrum-global-color-blue-500)
)}:host([variant=gallery][drop-target]),:host([variant=quiet][drop-target]){background-color:transparent;border-color:transparent;box-shadow:none}:host([variant=gallery][drop-target]) #preview,:host([variant=quiet][drop-target]) #preview{background-color:var(
--spectrum-alias-highlight-selected
)}:host([variant=gallery][drop-target]) #preview:before,:host([variant=quiet][drop-target]) #preview:before{border-color:var(
--spectrum-card-quiet-border-color-selected,var(--spectrum-global-color-blue-500)
);box-shadow:0 0 0 1px var(
--spectrum-card-quiet-border-color-selected,var(--spectrum-global-color-blue-500)
)}:host([variant=gallery][drop-target]) .spectrum-Asset-fileBackground,:host([variant=gallery][drop-target]) .spectrum-Asset-folderBackground,:host([variant=quiet][drop-target]) .spectrum-Asset-fileBackground,:host([variant=quiet][drop-target]) .spectrum-Asset-folderBackground{fill:var(
--spectrum-alias-highlight-selected
)}:host([variant=gallery][drop-target]) .spectrum-Asset-fileOutline,:host([variant=gallery][drop-target]) .spectrum-Asset-folderOutline,:host([variant=quiet][drop-target]) .spectrum-Asset-fileOutline,:host([variant=quiet][drop-target]) .spectrum-Asset-folderOutline{fill:var(
--spectrum-card-quiet-border-color-selected,var(--spectrum-global-color-blue-500)
)}:host([variant=gallery]) .title,:host([variant=quiet]) .title{color:var(
--spectrum-card-quiet-title-text-color,var(--spectrum-global-color-gray-800)
)}:host([variant=gallery]) .subtitle,:host([variant=quiet]) .subtitle{color:var(
--spectrum-card-quiet-subtitle-text-color,var(--spectrum-global-color-gray-700)
)}:host([horizontal]:hover) #preview{border-color:var(
--spectrum-card-border-color-hover,var(--spectrum-global-color-gray-400)
)}:host([horizontal]) #preview{background-color:var(
--spectrum-card-quiet-preview-background-color,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-card-border-color,var(--spectrum-global-color-gray-200)
)}:host([href]:not([href=""])){cursor:pointer}#like-anchor{inset:0;pointer-events:none;position:absolute}.actionButton{flex-grow:0}:host([dir=ltr]) .actionButton{margin-left:auto}:host([dir=rtl]) .actionButton{margin-right:auto}slot[name=description]{font-size:var(
--spectrum-card-subtitle-text-size,var(--spectrum-global-dimension-font-size-50)
)}#cover-photo,#preview{order:-1;overflow:hidden}#preview+#cover-photo{display:none}#cover-photo ::slotted(*),#preview ::slotted(*){display:block;object-fit:cover;width:100%}:host(:not([variant=gallery])) #preview ::slotted(*){height:100%}:host([horizontal]) #preview{width:auto}sp-quick-actions{z-index:1}.title{width:var(--spectrum-card-title-width)}.subtitle{text-transform:none}`;

const styles$z=r`:host{--spectrum-alias-body-text-font-family:var(
--spectrum-global-font-family-base
);--spectrum-alias-font-size-default:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-font-family-ar:myriad-arabic,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-alias-font-family-he:myriad-hebrew,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-alias-font-family-zhhans:adobe-clean-han-simplified-c,source-han-simplified-c,"SimSun","Heiti SC Light","sans-serif";--spectrum-alias-font-family-zh:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light","sans-serif";--spectrum-alias-font-family-ko:adobe-clean-han-korean,source-han-korean,"Malgun Gothic","Apple Gothic","sans-serif";--spectrum-alias-font-family-ja:adobe-clean-han-japanese,source-han-japanese,"Yu Gothic","\30E1 \30A4 \30EA \30AA","\30D2 \30E9 \30AE \30CE \89D2 \30B4  Pro W3","Hiragino Kaku Gothic Pro W3","Osaka","\FF2D \FF33 \FF30 \30B4 \30B7 \30C3 \30AF","MS PGothic","sans-serif";--spectrum-heading-xxxl-text-size:var(
--spectrum-alias-heading-xxxl-text-size
);--spectrum-heading-xxxl-text-font-weight:var(
--spectrum-alias-heading-text-font-weight-regular
);--spectrum-heading-xxxl-text-line-height:var(
--spectrum-alias-heading-text-line-height
);--spectrum-heading-xxxl-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-heading-xxxl-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-none
);--spectrum-heading-xxxl-text-transform:none;--spectrum-heading-xxl-text-size:var(
--spectrum-alias-heading-xxl-text-size
);--spectrum-heading-xxl-text-font-weight:var(
--spectrum-alias-heading-text-font-weight-regular
);--spectrum-heading-xxl-text-line-height:var(
--spectrum-alias-heading-text-line-height
);--spectrum-heading-xxl-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-heading-xxl-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-none
);--spectrum-heading-xxl-text-transform:none;--spectrum-heading-xl-text-size:var(--spectrum-alias-heading-xl-text-size);--spectrum-heading-xl-text-font-weight:var(
--spectrum-alias-heading-text-font-weight-regular
);--spectrum-heading-xl-text-line-height:var(
--spectrum-alias-heading-text-line-height
);--spectrum-heading-xl-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-heading-xl-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-none
);--spectrum-heading-xl-text-transform:none;--spectrum-heading-l-text-size:var(--spectrum-alias-heading-l-text-size);--spectrum-heading-l-text-font-weight:var(
--spectrum-alias-heading-text-font-weight-regular
);--spectrum-heading-l-text-line-height:var(
--spectrum-alias-heading-text-line-height
);--spectrum-heading-l-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-heading-l-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-none
);--spectrum-heading-l-text-transform:none;--spectrum-heading-m-text-size:var(--spectrum-alias-heading-m-text-size);--spectrum-heading-m-text-font-weight:var(
--spectrum-alias-heading-text-font-weight-regular
);--spectrum-heading-m-text-line-height:var(
--spectrum-alias-heading-text-line-height
);--spectrum-heading-m-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-heading-m-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-none
);--spectrum-heading-m-text-transform:none;--spectrum-heading-s-text-size:var(--spectrum-alias-heading-s-text-size);--spectrum-heading-s-text-font-weight:var(
--spectrum-alias-heading-text-font-weight-regular
);--spectrum-heading-s-text-line-height:var(
--spectrum-alias-heading-text-line-height
);--spectrum-heading-s-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-heading-s-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-none
);--spectrum-heading-s-text-transform:none;--spectrum-heading-xs-text-size:var(--spectrum-alias-heading-xs-text-size);--spectrum-heading-xs-text-font-weight:var(
--spectrum-alias-heading-text-font-weight-regular
);--spectrum-heading-xs-text-line-height:var(
--spectrum-alias-heading-text-line-height
);--spectrum-heading-xs-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-heading-xs-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-none
);--spectrum-heading-xs-text-transform:none;--spectrum-heading-xxs-text-size:var(
--spectrum-alias-heading-xxs-text-size
);--spectrum-heading-xxs-text-font-weight:var(
--spectrum-alias-heading-text-font-weight-regular
);--spectrum-heading-xxs-text-line-height:var(
--spectrum-alias-heading-text-line-height
);--spectrum-heading-xxs-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-heading-xxs-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-none
);--spectrum-heading-xxs-text-transform:none;--spectrum-heading-m-text-font-family:var(
--spectrum-alias-body-text-font-family
);--spectrum-heading-m-emphasis-text-font-style:var(
--spectrum-global-font-style-italic
);--spectrum-heading-m-strong-text-font-weight:var(
--spectrum-global-font-weight-black
);--spectrum-body-serif-m-text-font-family:var(
--spectrum-alias-serif-text-font-family
);--spectrum-heading-heavy-m-text-font-weight:var(
--spectrum-global-font-weight-black
);--spectrum-heading-heavy-m-emphasis-text-font-style:var(
--spectrum-global-font-style-italic
);--spectrum-heading-heavy-m-strong-text-font-weight:var(
--spectrum-global-font-weight-black
);--spectrum-heading-light-m-emphasis-text-font-weight:var(
--spectrum-global-font-weight-light
);--spectrum-heading-light-m-emphasis-text-font-style:var(
--spectrum-global-font-style-italic
);--spectrum-heading-light-m-strong-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-body-xxxl-text-size:var(
--spectrum-global-dimension-font-size-600
);--spectrum-body-xxxl-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-body-xxxl-text-line-height:var(
--spectrum-alias-body-text-line-height
);--spectrum-body-xxxl-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-body-xxxl-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-none
);--spectrum-body-xxxl-text-transform:none;--spectrum-body-xxl-text-size:var(
--spectrum-global-dimension-font-size-500
);--spectrum-body-xxl-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-body-xxl-text-line-height:var(
--spectrum-alias-body-text-line-height
);--spectrum-body-xxl-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-body-xxl-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-none
);--spectrum-body-xxl-text-transform:none;--spectrum-body-xl-text-size:var(
--spectrum-global-dimension-font-size-400
);--spectrum-body-xl-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-body-xl-text-line-height:var(
--spectrum-alias-body-text-line-height
);--spectrum-body-xl-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-body-xl-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-none
);--spectrum-body-xl-text-transform:none;--spectrum-body-l-text-size:var(--spectrum-global-dimension-font-size-300);--spectrum-body-l-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-body-l-text-line-height:var(
--spectrum-alias-body-text-line-height
);--spectrum-body-l-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-body-l-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-none
);--spectrum-body-l-text-transform:none;--spectrum-body-m-text-size:var(--spectrum-global-dimension-font-size-200);--spectrum-body-m-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-body-m-text-line-height:var(
--spectrum-alias-body-text-line-height
);--spectrum-body-m-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-body-m-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-none
);--spectrum-body-m-text-transform:none;--spectrum-body-s-text-size:var(--spectrum-alias-font-size-default);--spectrum-body-s-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-body-s-text-line-height:var(
--spectrum-alias-body-text-line-height
);--spectrum-body-s-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-body-s-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-none
);--spectrum-body-s-text-transform:none;--spectrum-body-xs-text-size:var(--spectrum-global-dimension-font-size-75);--spectrum-body-xs-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-body-xs-text-line-height:var(
--spectrum-alias-body-text-line-height
);--spectrum-body-xs-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-body-xs-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-none
);--spectrum-body-xs-text-transform:none;--spectrum-body-m-text-font-family:var(
--spectrum-alias-body-text-font-family
);--spectrum-body-m-strong-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-body-m-emphasis-text-font-style:var(
--spectrum-global-font-style-italic
);--spectrum-detail-m-strong-text-font-weight:var(
--spectrum-global-font-weight-black
);--spectrum-detail-m-emphasis-text-font-style:var(
--spectrum-global-font-style-italic
);--spectrum-detail-light-m-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-light-m-text-font-weight:var(
--spectrum-alias-detail-text-font-weight-light
);--spectrum-detail-xl-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-detail-xl-text-font-weight:var(
--spectrum-alias-detail-text-font-weight
);--spectrum-detail-xl-text-line-height:var(
--spectrum-alias-body-text-line-height
);--spectrum-detail-xl-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-xl-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-medium
);--spectrum-detail-xl-text-transform:uppercase;--spectrum-detail-xl-emphasis-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-detail-xl-emphasis-text-font-weight:var(
--spectrum-alias-detail-text-font-weight
);--spectrum-detail-xl-emphasis-text-line-height:var(
--spectrum-alias-body-text-line-height
);--spectrum-detail-xl-emphasis-text-font-style:var(
--spectrum-global-font-style-italic
);--spectrum-detail-xl-emphasis-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-medium
);--spectrum-detail-xl-emphasis-text-transform:uppercase;--spectrum-detail-xl-strong-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-detail-xl-strong-text-font-weight:var(
--spectrum-global-font-weight-black
);--spectrum-detail-xl-strong-text-line-height:var(
--spectrum-alias-body-text-line-height
);--spectrum-detail-xl-strong-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-xl-strong-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-medium
);--spectrum-detail-xl-strong-text-transform:uppercase;--spectrum-detail-l-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-detail-l-text-font-weight:var(
--spectrum-alias-detail-text-font-weight
);--spectrum-detail-l-text-line-height:var(
--spectrum-alias-body-text-line-height
);--spectrum-detail-l-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-l-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-medium
);--spectrum-detail-l-text-transform:uppercase;--spectrum-detail-l-emphasis-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-detail-l-emphasis-text-font-weight:var(
--spectrum-alias-detail-text-font-weight
);--spectrum-detail-l-emphasis-text-line-height:var(
--spectrum-alias-body-text-line-height
);--spectrum-detail-l-emphasis-text-font-style:var(
--spectrum-global-font-style-italic
);--spectrum-detail-l-emphasis-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-medium
);--spectrum-detail-l-emphasis-text-transform:uppercase;--spectrum-detail-l-strong-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-detail-l-strong-text-font-weight:var(
--spectrum-global-font-weight-black
);--spectrum-detail-l-strong-text-line-height:var(
--spectrum-alias-body-text-line-height
);--spectrum-detail-l-strong-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-l-strong-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-medium
);--spectrum-detail-l-strong-text-transform:uppercase;--spectrum-detail-m-text-size:var(
--spectrum-global-dimension-font-size-75
);--spectrum-detail-m-text-font-weight:var(
--spectrum-alias-detail-text-font-weight
);--spectrum-detail-m-text-line-height:var(
--spectrum-alias-body-text-line-height
);--spectrum-detail-m-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-m-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-medium
);--spectrum-detail-m-text-transform:uppercase;--spectrum-detail-m-emphasis-text-size:var(
--spectrum-global-dimension-font-size-75
);--spectrum-detail-m-emphasis-text-font-weight:var(
--spectrum-alias-detail-text-font-weight
);--spectrum-detail-m-emphasis-text-line-height:var(
--spectrum-alias-body-text-line-height
);--spectrum-detail-m-emphasis-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-medium
);--spectrum-detail-m-emphasis-text-transform:uppercase;--spectrum-detail-m-strong-text-size:var(
--spectrum-global-dimension-font-size-75
);--spectrum-detail-m-strong-text-line-height:var(
--spectrum-alias-body-text-line-height
);--spectrum-detail-m-strong-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-m-strong-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-medium
);--spectrum-detail-m-strong-text-transform:uppercase;--spectrum-detail-s-text-size:var(
--spectrum-global-dimension-font-size-50
);--spectrum-detail-s-text-font-weight:var(
--spectrum-alias-detail-text-font-weight
);--spectrum-detail-s-text-line-height:var(
--spectrum-alias-body-text-line-height
);--spectrum-detail-s-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-s-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-medium
);--spectrum-detail-s-text-transform:uppercase;--spectrum-detail-s-emphasis-text-size:var(
--spectrum-global-dimension-font-size-50
);--spectrum-detail-s-emphasis-text-font-weight:var(
--spectrum-alias-detail-text-font-weight
);--spectrum-detail-s-emphasis-text-line-height:var(
--spectrum-alias-body-text-line-height
);--spectrum-detail-s-emphasis-text-font-style:var(
--spectrum-global-font-style-italic
);--spectrum-detail-s-emphasis-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-medium
);--spectrum-detail-s-emphasis-text-transform:uppercase;--spectrum-detail-s-strong-text-size:var(
--spectrum-global-dimension-font-size-50
);--spectrum-detail-s-strong-text-font-weight:var(
--spectrum-global-font-weight-black
);--spectrum-detail-s-strong-text-line-height:var(
--spectrum-alias-body-text-line-height
);--spectrum-detail-s-strong-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-s-strong-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-medium
);--spectrum-detail-s-strong-text-transform:uppercase;--spectrum-code-m-strong-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-code-m-emphasis-text-font-style:var(
--spectrum-global-font-style-italic
);--spectrum-code-xl-text-size:var(
--spectrum-global-dimension-font-size-400
);--spectrum-code-xl-text-font-weight:var(
--spectrum-alias-code-text-font-weight-regular
);--spectrum-code-xl-text-line-height:var(
--spectrum-alias-code-text-line-height
);--spectrum-code-xl-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-code-xl-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-none
);--spectrum-code-xl-text-font-family:var(
--spectrum-alias-code-text-font-family
);--spectrum-code-l-text-size:var(--spectrum-global-dimension-font-size-300);--spectrum-code-l-text-font-weight:var(
--spectrum-alias-code-text-font-weight-regular
);--spectrum-code-l-text-line-height:var(
--spectrum-alias-code-text-line-height
);--spectrum-code-l-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-code-l-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-none
);--spectrum-code-l-text-font-family:var(
--spectrum-alias-code-text-font-family
);--spectrum-code-m-text-size:var(--spectrum-global-dimension-font-size-200);--spectrum-code-m-text-font-weight:var(
--spectrum-alias-code-text-font-weight-regular
);--spectrum-code-m-text-line-height:var(
--spectrum-alias-code-text-line-height
);--spectrum-code-m-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-code-m-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-none
);--spectrum-code-m-text-font-family:var(
--spectrum-alias-code-text-font-family
);--spectrum-code-s-text-size:var(--spectrum-alias-font-size-default);--spectrum-code-s-text-font-weight:var(
--spectrum-alias-code-text-font-weight-regular
);--spectrum-code-s-text-line-height:var(
--spectrum-alias-code-text-line-height
);--spectrum-code-s-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-code-s-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-none
);--spectrum-code-s-text-font-family:var(
--spectrum-alias-code-text-font-family
);--spectrum-code-xs-text-size:var(--spectrum-global-dimension-font-size-75);--spectrum-code-xs-text-font-weight:var(
--spectrum-alias-code-text-font-weight-regular
);--spectrum-code-xs-text-line-height:var(
--spectrum-alias-code-text-line-height
);--spectrum-code-xs-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-code-xs-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-none
);--spectrum-code-xs-text-font-family:var(
--spectrum-alias-code-text-font-family
);--spectrum-heading-xxxl-margin-top:var(
--spectrum-alias-heading-xxxl-margin-top
);--spectrum-heading-xxxl-margin-bottom:var(
--spectrum-global-dimension-size-130
);--spectrum-heading-xxl-margin-top:var(
--spectrum-alias-heading-xxl-margin-top
);--spectrum-heading-xxl-margin-bottom:var(
--spectrum-global-dimension-size-125
);--spectrum-heading-xl-margin-top:var(
--spectrum-alias-heading-xl-margin-top
);--spectrum-heading-xl-margin-bottom:var(
--spectrum-global-dimension-size-115
);--spectrum-heading-l-margin-top:var(--spectrum-alias-heading-l-margin-top);--spectrum-heading-l-margin-bottom:var(
--spectrum-global-dimension-size-85
);--spectrum-heading-m-margin-top:var(--spectrum-alias-heading-m-margin-top);--spectrum-heading-m-margin-bottom:var(
--spectrum-global-dimension-size-75
);--spectrum-heading-s-margin-top:var(--spectrum-alias-heading-s-margin-top);--spectrum-heading-s-margin-bottom:var(
--spectrum-global-dimension-size-65
);--spectrum-heading-xs-margin-top:var(
--spectrum-alias-heading-xs-margin-top
);--spectrum-heading-xs-margin-bottom:var(
--spectrum-global-dimension-size-50
);--spectrum-heading-xxs-margin-top:var(
--spectrum-alias-heading-xxs-margin-top
);--spectrum-heading-xxs-margin-bottom:var(
--spectrum-global-dimension-size-40
);--spectrum-body-xxxl-margin-top:0px;--spectrum-body-xxxl-margin-bottom:var(
--spectrum-global-dimension-size-400
);--spectrum-body-xxl-margin-top:0px;--spectrum-body-xxl-margin-bottom:var(
--spectrum-global-dimension-size-300
);--spectrum-body-xl-margin-top:0px;--spectrum-body-xl-margin-bottom:var(--spectrum-global-dimension-size-200);--spectrum-body-l-margin-top:0px;--spectrum-body-l-margin-bottom:var(--spectrum-global-dimension-size-160);--spectrum-body-m-margin-top:0px;--spectrum-body-m-margin-bottom:var(--spectrum-global-dimension-size-150);--spectrum-body-s-margin-top:0px;--spectrum-body-s-margin-bottom:var(--spectrum-global-dimension-size-125);--spectrum-body-xs-margin-top:0px;--spectrum-body-xs-margin-bottom:var(--spectrum-global-dimension-size-115);--spectrum-heading-han-xxxl-text-size:var(
--spectrum-alias-heading-xxxl-text-size
);--spectrum-heading-han-xxxl-text-font-weight:var(
--spectrum-alias-han-heading-text-font-weight-regular
);--spectrum-heading-han-xxxl-text-line-height:var(
--spectrum-alias-han-heading-text-line-height
);--spectrum-heading-han-xxxl-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-heading-han-xxxl-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-heading-han-xxxl-text-transform:none;--spectrum-heading-han-xxl-text-size:var(
--spectrum-alias-heading-han-xxl-text-size
);--spectrum-heading-han-xxl-text-font-weight:var(
--spectrum-alias-han-heading-text-font-weight-regular
);--spectrum-heading-han-xxl-text-line-height:var(
--spectrum-alias-han-heading-text-line-height
);--spectrum-heading-han-xxl-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-heading-han-xxl-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-heading-han-xxl-text-transform:none;--spectrum-heading-han-xl-text-size:var(
--spectrum-alias-heading-han-xl-text-size
);--spectrum-heading-han-xl-text-font-weight:var(
--spectrum-alias-han-heading-text-font-weight-regular
);--spectrum-heading-han-xl-text-line-height:var(
--spectrum-alias-han-heading-text-line-height
);--spectrum-heading-han-xl-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-heading-han-xl-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-heading-han-xl-text-transform:none;--spectrum-heading-han-l-text-size:var(
--spectrum-alias-heading-han-l-text-size
);--spectrum-heading-han-l-text-font-weight:var(
--spectrum-alias-han-heading-text-font-weight-regular
);--spectrum-heading-han-l-text-line-height:var(
--spectrum-alias-han-heading-text-line-height
);--spectrum-heading-han-l-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-heading-han-l-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-heading-han-l-text-transform:none;--spectrum-heading-han-m-text-size:var(
--spectrum-alias-heading-han-m-text-size
);--spectrum-heading-han-m-text-font-weight:var(
--spectrum-alias-han-heading-text-font-weight-regular
);--spectrum-heading-han-m-text-line-height:var(
--spectrum-alias-han-heading-text-line-height
);--spectrum-heading-han-m-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-heading-han-m-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-heading-han-m-text-transform:none;--spectrum-heading-han-s-text-size:var(
--spectrum-alias-heading-s-text-size
);--spectrum-heading-han-s-text-font-weight:var(
--spectrum-alias-han-heading-text-font-weight-regular
);--spectrum-heading-han-s-text-line-height:var(
--spectrum-alias-han-heading-text-line-height
);--spectrum-heading-han-s-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-heading-han-s-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-heading-han-s-text-transform:none;--spectrum-heading-han-xs-text-size:var(
--spectrum-alias-heading-xs-text-size
);--spectrum-heading-han-xs-text-font-weight:var(
--spectrum-alias-han-heading-text-font-weight-regular
);--spectrum-heading-han-xs-text-line-height:var(
--spectrum-alias-han-heading-text-line-height
);--spectrum-heading-han-xs-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-heading-han-xs-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-heading-han-xs-text-transform:none;--spectrum-heading-han-xxs-text-size:var(
--spectrum-alias-heading-xxs-text-size
);--spectrum-heading-han-xxs-text-font-weight:var(
--spectrum-alias-han-heading-text-font-weight-regular
);--spectrum-heading-han-xxs-text-line-height:var(
--spectrum-alias-han-heading-text-line-height
);--spectrum-heading-han-xxs-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-heading-han-xxs-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-heading-han-xxs-text-transform:none;--spectrum-heading-han-heavy-m-emphasis-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-heading-han-heavy-m-emphasis-text-font-weight:var(
--spectrum-alias-han-heading-text-font-weight-heavy-emphasis
);--spectrum-heading-heavy-m-strong-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-heading-han-light-m-emphasis-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-heading-han-light-m-emphasis-text-font-weight:var(
--spectrum-alias-han-heading-text-font-weight-light-emphasis
);--spectrum-heading-han-light-m-strong-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-heading-han-light-m-strong-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-body-han-xxxl-text-size:var(
--spectrum-global-dimension-font-size-600
);--spectrum-body-han-xxxl-text-font-weight:var(
--spectrum-alias-han-body-text-font-weight-regular
);--spectrum-body-han-xxxl-text-line-height:var(
--spectrum-alias-han-body-text-line-height
);--spectrum-body-han-xxxl-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-body-han-xxxl-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-body-han-xxxl-text-transform:none;--spectrum-body-han-xxl-text-size:var(
--spectrum-global-dimension-font-size-500
);--spectrum-body-han-xxl-text-font-weight:var(
--spectrum-alias-han-body-text-font-weight-regular
);--spectrum-body-han-xxl-text-line-height:var(
--spectrum-alias-han-body-text-line-height
);--spectrum-body-han-xxl-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-body-han-xxl-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-body-han-xxl-text-transform:none;--spectrum-body-han-xl-text-size:var(
--spectrum-global-dimension-font-size-400
);--spectrum-body-han-xl-text-font-weight:var(
--spectrum-alias-han-body-text-font-weight-regular
);--spectrum-body-han-xl-text-line-height:var(
--spectrum-alias-han-body-text-line-height
);--spectrum-body-han-xl-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-body-han-xl-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-body-han-xl-text-transform:none;--spectrum-body-han-l-text-size:var(
--spectrum-global-dimension-font-size-300
);--spectrum-body-han-l-text-font-weight:var(
--spectrum-alias-han-body-text-font-weight-regular
);--spectrum-body-han-l-text-line-height:var(
--spectrum-alias-han-body-text-line-height
);--spectrum-body-han-l-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-body-han-l-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-body-han-l-text-transform:none;--spectrum-body-han-m-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-body-han-m-text-font-weight:var(
--spectrum-alias-han-body-text-font-weight-regular
);--spectrum-body-han-m-text-line-height:var(
--spectrum-alias-han-body-text-line-height
);--spectrum-body-han-m-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-body-han-m-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-body-han-m-text-transform:none;--spectrum-body-han-s-text-size:var(--spectrum-alias-font-size-default);--spectrum-body-han-s-text-font-weight:var(
--spectrum-alias-han-body-text-font-weight-regular
);--spectrum-body-han-s-text-line-height:var(
--spectrum-alias-han-body-text-line-height
);--spectrum-body-han-s-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-body-han-s-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-body-han-s-text-transform:none;--spectrum-body-han-xs-text-size:var(
--spectrum-global-dimension-font-size-75
);--spectrum-body-han-xs-text-font-weight:var(
--spectrum-alias-han-body-text-font-weight-regular
);--spectrum-body-han-xs-text-line-height:var(
--spectrum-alias-han-body-text-line-height
);--spectrum-body-han-xs-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-body-han-xs-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-body-han-xs-text-transform:none;--spectrum-detail-han-xl-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-detail-han-xl-text-font-weight:var(
--spectrum-alias-detail-text-font-weight
);--spectrum-detail-han-xl-text-line-height:var(
--spectrum-alias-han-heading-text-line-height
);--spectrum-detail-han-xl-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-han-xl-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-detail-han-xl-text-transform:uppercase;--spectrum-detail-han-xl-emphasis-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-detail-han-xl-emphasis-text-font-weight:var(
--spectrum-alias-han-heading-text-font-weight-regular-emphasis
);--spectrum-detail-han-xl-emphasis-text-line-height:var(
--spectrum-alias-han-heading-text-line-height
);--spectrum-detail-han-xl-emphasis-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-han-xl-emphasis-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-detail-han-xl-emphasis-text-transform:uppercase;--spectrum-detail-han-xl-strong-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-detail-han-xl-strong-text-font-weight:var(
--spectrum-global-font-weight-black
);--spectrum-detail-han-xl-strong-text-line-height:var(
--spectrum-alias-han-heading-text-line-height
);--spectrum-detail-han-xl-strong-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-han-xl-strong-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-detail-han-xl-strong-text-transform:uppercase;--spectrum-detail-han-l-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-detail-han-l-text-font-weight:var(
--spectrum-alias-detail-text-font-weight
);--spectrum-detail-han-l-text-line-height:var(
--spectrum-alias-han-heading-text-line-height
);--spectrum-detail-han-l-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-han-l-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-detail-han-l-text-transform:uppercase;--spectrum-detail-han-l-emphasis-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-detail-han-l-emphasis-text-font-weight:var(
--spectrum-alias-han-heading-text-font-weight-regular-emphasis
);--spectrum-detail-han-l-emphasis-text-line-height:var(
--spectrum-alias-han-heading-text-line-height
);--spectrum-detail-han-l-emphasis-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-han-l-emphasis-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-detail-han-l-emphasis-text-transform:uppercase;--spectrum-detail-han-l-strong-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-detail-han-l-strong-text-font-weight:var(
--spectrum-global-font-weight-black
);--spectrum-detail-han-l-strong-text-line-height:var(
--spectrum-alias-han-heading-text-line-height
);--spectrum-detail-han-l-strong-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-han-l-strong-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-detail-han-l-strong-text-transform:uppercase;--spectrum-detail-han-m-text-size:var(
--spectrum-global-dimension-font-size-75
);--spectrum-detail-han-m-text-font-weight:var(
--spectrum-alias-detail-text-font-weight
);--spectrum-detail-han-m-text-line-height:var(
--spectrum-alias-han-heading-text-line-height
);--spectrum-detail-han-m-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-han-m-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-detail-han-m-text-transform:uppercase;--spectrum-detail-han-m-emphasis-text-size:var(
--spectrum-global-dimension-font-size-75
);--spectrum-detail-han-m-emphasis-text-font-weight:var(
--spectrum-alias-han-heading-text-font-weight-regular-emphasis
);--spectrum-detail-han-m-emphasis-text-line-height:var(
--spectrum-alias-han-heading-text-line-height
);--spectrum-detail-han-m-emphasis-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-han-m-emphasis-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-detail-han-m-emphasis-text-transform:uppercase;--spectrum-detail-han-m-strong-text-size:var(
--spectrum-global-dimension-font-size-75
);--spectrum-detail-han-m-strong-text-font-weight:var(
--spectrum-global-font-weight-black
);--spectrum-detail-han-m-strong-text-line-height:var(
--spectrum-alias-han-heading-text-line-height
);--spectrum-detail-han-m-strong-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-han-m-strong-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-detail-han-m-strong-text-transform:uppercase;--spectrum-detail-han-s-text-size:var(
--spectrum-global-dimension-font-size-50
);--spectrum-detail-han-s-text-font-weight:var(
--spectrum-alias-detail-text-font-weight
);--spectrum-detail-han-s-text-line-height:var(
--spectrum-alias-han-heading-text-line-height
);--spectrum-detail-han-s-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-han-s-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-detail-han-s-text-transform:uppercase;--spectrum-detail-han-s-emphasis-text-size:var(
--spectrum-global-dimension-font-size-50
);--spectrum-detail-han-s-emphasis-text-font-weight:var(
--spectrum-alias-han-heading-text-font-weight-regular-emphasis
);--spectrum-detail-han-s-emphasis-text-line-height:var(
--spectrum-alias-han-heading-text-line-height
);--spectrum-detail-han-s-emphasis-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-han-s-emphasis-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-detail-han-s-emphasis-text-transform:uppercase;--spectrum-detail-han-s-strong-text-size:var(
--spectrum-global-dimension-font-size-50
);--spectrum-detail-han-s-strong-text-font-weight:var(
--spectrum-global-font-weight-black
);--spectrum-detail-han-s-strong-text-line-height:var(
--spectrum-alias-han-heading-text-line-height
);--spectrum-detail-han-s-strong-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-han-s-strong-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-detail-han-s-strong-text-transform:uppercase;--spectrum-detail-han-light-m-emphasis-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-han-light-m-emphasis-text-font-weight:var(
--spectrum-alias-han-heading-text-font-weight-light-emphasis
);--spectrum-detail-han-light-m-strong-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-detail-han-light-m-strong-text-font-weight:var(
--spectrum-alias-heading-text-font-weight-regular
);--spectrum-code-han-xl-text-size:var(
--spectrum-global-dimension-font-size-400
);--spectrum-code-han-xl-text-font-weight:var(
--spectrum-alias-han-body-text-font-weight-regular
);--spectrum-code-han-xl-text-line-height:var(
--spectrum-alias-han-body-text-line-height
);--spectrum-code-han-xl-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-code-han-xl-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-code-han-xl-text-font-family:var(
--spectrum-alias-font-family-zh
);--spectrum-code-han-l-text-size:var(
--spectrum-global-dimension-font-size-300
);--spectrum-code-han-l-text-font-weight:var(
--spectrum-alias-han-body-text-font-weight-regular
);--spectrum-code-han-l-text-line-height:var(
--spectrum-alias-han-body-text-line-height
);--spectrum-code-han-l-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-code-han-l-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-code-han-l-text-font-family:var(
--spectrum-alias-font-family-zh
);--spectrum-code-han-m-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-code-han-m-text-font-weight:var(
--spectrum-alias-han-body-text-font-weight-regular
);--spectrum-code-han-m-text-line-height:var(
--spectrum-alias-han-body-text-line-height
);--spectrum-code-han-m-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-code-han-m-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-code-han-m-text-font-family:var(
--spectrum-alias-font-family-zh
);--spectrum-code-han-s-text-size:var(--spectrum-alias-font-size-default);--spectrum-code-han-s-text-font-weight:var(
--spectrum-alias-han-body-text-font-weight-regular
);--spectrum-code-han-s-text-line-height:var(
--spectrum-alias-han-body-text-line-height
);--spectrum-code-han-s-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-code-han-s-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-code-han-s-text-font-family:var(
--spectrum-alias-font-family-zh
);--spectrum-code-han-xs-text-size:var(
--spectrum-global-dimension-font-size-75
);--spectrum-code-han-xs-text-font-weight:var(
--spectrum-alias-han-body-text-font-weight-regular
);--spectrum-code-han-xs-text-line-height:var(
--spectrum-alias-han-body-text-line-height
);--spectrum-code-han-xs-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-code-han-xs-text-letter-spacing:var(
--spectrum-global-font-letter-spacing-han
);--spectrum-code-han-xs-text-font-family:var(
--spectrum-alias-font-family-zh
);--spectrum-heading-xxxl-text-color:var(
--spectrum-alias-heading-text-color
);--spectrum-heading-xxl-text-color:var(--spectrum-alias-heading-text-color);--spectrum-heading-xl-text-color:var(--spectrum-alias-heading-text-color);--spectrum-heading-l-text-color:var(--spectrum-alias-heading-text-color);--spectrum-heading-m-text-color:var(--spectrum-alias-heading-text-color);--spectrum-heading-s-text-color:var(--spectrum-alias-heading-text-color);--spectrum-heading-xs-text-color:var(--spectrum-alias-heading-text-color);--spectrum-heading-xxs-text-color:var(--spectrum-alias-heading-text-color);--spectrum-heading-light-xxxl-text-color:var(
--spectrum-alias-heading-text-color
);--spectrum-heading-light-xxl-text-color:var(
--spectrum-alias-heading-text-color
);--spectrum-heading-light-xl-text-color:var(
--spectrum-alias-heading-text-color
);--spectrum-heading-light-l-text-color:var(
--spectrum-alias-heading-text-color
);--spectrum-heading-heavy-xxxl-text-color:var(
--spectrum-alias-heading-text-color
);--spectrum-heading-heavy-xxl-text-color:var(
--spectrum-alias-heading-text-color
);--spectrum-heading-heavy-xl-text-color:var(
--spectrum-alias-heading-text-color
);--spectrum-heading-heavy-l-text-color:var(
--spectrum-alias-heading-text-color
);--spectrum-body-xxxl-text-color:var(--spectrum-alias-text-color);--spectrum-body-xxl-text-color:var(--spectrum-alias-text-color);--spectrum-body-xl-text-color:var(--spectrum-alias-text-color);--spectrum-body-l-text-color:var(--spectrum-alias-text-color);--spectrum-body-m-text-color:var(--spectrum-alias-text-color);--spectrum-body-s-text-color:var(--spectrum-alias-text-color);--spectrum-body-xs-text-color:var(--spectrum-alias-text-color);--spectrum-detail-xl-text-color:var(--spectrum-alias-heading-text-color);--spectrum-detail-l-text-color:var(--spectrum-alias-heading-text-color);--spectrum-detail-m-text-color:var(--spectrum-alias-heading-text-color);--spectrum-detail-s-text-color:var(--spectrum-alias-heading-text-color);--spectrum-code-xl-text-color:var(--spectrum-alias-text-color);--spectrum-code-l-text-color:var(--spectrum-alias-text-color);--spectrum-code-m-text-color:var(--spectrum-alias-text-color);--spectrum-code-s-text-color:var(--spectrum-alias-text-color);--spectrum-code-xs-text-color:var(--spectrum-alias-text-color);--spectrum-body-han-xxxl-text-color:var(--spectrum-alias-text-color);--spectrum-body-han-xxl-text-color:var(--spectrum-alias-text-color);--spectrum-body-han-xl-text-color:var(--spectrum-alias-text-color);--spectrum-body-han-l-text-color:var(--spectrum-alias-text-color);--spectrum-body-han-m-text-color:var(--spectrum-alias-text-color);--spectrum-body-han-s-text-color:var(--spectrum-alias-text-color);--spectrum-body-han-xs-text-color:var(--spectrum-alias-text-color)}.spectrum-Detail{font-family:var(
--spectrum-heading-m-text-font-family,var(--spectrum-alias-body-text-font-family)
)}.spectrum-Detail .spectrum-Detail-strong,.spectrum-Detail strong{font-weight:var(
--spectrum-detail-m-strong-text-font-weight,var(--spectrum-global-font-weight-black)
)}.spectrum-Detail .spectrum-Detail-emphasis,.spectrum-Detail em{font-style:var(
--spectrum-detail-m-emphasis-text-font-style,var(--spectrum-global-font-style-italic)
)}.spectrum-Detail--light{font-style:var(
--spectrum-detail-light-m-text-font-style,var(--spectrum-global-font-style-regular)
);font-weight:var(
--spectrum-detail-light-m-text-font-weight,var(--spectrum-alias-detail-text-font-weight-light)
)}.spectrum-Detail--serif{font-family:var(
--spectrum-body-serif-m-text-font-family,var(--spectrum-alias-serif-text-font-family)
)}.spectrum-Detail--sizeXL{font-size:var(
--spectrum-detail-xl-text-size,var(--spectrum-global-dimension-font-size-200)
);font-style:var(
--spectrum-detail-xl-text-font-style,var(--spectrum-global-font-style-regular)
);font-weight:var(
--spectrum-detail-xl-text-font-weight,var(--spectrum-alias-detail-text-font-weight)
);letter-spacing:var(
--spectrum-detail-xl-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);line-height:var(
--spectrum-detail-xl-text-line-height,var(--spectrum-alias-body-text-line-height)
);margin-bottom:0;margin-top:0;text-transform:var(--spectrum-detail-xl-text-transform,uppercase)}.spectrum-Detail--sizeXL em{font-size:var(
--spectrum-detail-xl-emphasis-text-size,var(--spectrum-global-dimension-font-size-200)
);font-style:var(
--spectrum-detail-xl-emphasis-text-font-style,var(--spectrum-global-font-style-italic)
);font-weight:var(
--spectrum-detail-xl-emphasis-text-font-weight,var(--spectrum-alias-detail-text-font-weight)
);letter-spacing:var(
--spectrum-detail-xl-emphasis-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);line-height:var(
--spectrum-detail-xl-emphasis-text-line-height,var(--spectrum-alias-body-text-line-height)
);margin-bottom:0;margin-top:0;text-transform:var(
--spectrum-detail-xl-emphasis-text-transform,uppercase
)}.spectrum-Detail--sizeXL strong{font-size:var(
--spectrum-detail-xl-strong-text-size,var(--spectrum-global-dimension-font-size-200)
);font-style:var(
--spectrum-detail-xl-strong-text-font-style,var(--spectrum-global-font-style-regular)
);font-weight:var(
--spectrum-detail-xl-strong-text-font-weight,var(--spectrum-global-font-weight-black)
);letter-spacing:var(
--spectrum-detail-xl-strong-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);line-height:var(
--spectrum-detail-xl-strong-text-line-height,var(--spectrum-alias-body-text-line-height)
);margin-bottom:0;margin-top:0;text-transform:var(--spectrum-detail-xl-strong-text-transform,uppercase)}.spectrum-Detail--sizeL{font-size:var(
--spectrum-detail-l-text-size,var(--spectrum-global-dimension-font-size-100)
);font-style:var(
--spectrum-detail-l-text-font-style,var(--spectrum-global-font-style-regular)
);font-weight:var(
--spectrum-detail-l-text-font-weight,var(--spectrum-alias-detail-text-font-weight)
);letter-spacing:var(
--spectrum-detail-l-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);line-height:var(
--spectrum-detail-l-text-line-height,var(--spectrum-alias-body-text-line-height)
);margin-bottom:0;margin-top:0;text-transform:var(--spectrum-detail-l-text-transform,uppercase)}.spectrum-Detail--sizeL em{font-size:var(
--spectrum-detail-l-emphasis-text-size,var(--spectrum-global-dimension-font-size-100)
);font-style:var(
--spectrum-detail-l-emphasis-text-font-style,var(--spectrum-global-font-style-italic)
);font-weight:var(
--spectrum-detail-l-emphasis-text-font-weight,var(--spectrum-alias-detail-text-font-weight)
);letter-spacing:var(
--spectrum-detail-l-emphasis-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);line-height:var(
--spectrum-detail-l-emphasis-text-line-height,var(--spectrum-alias-body-text-line-height)
);margin-bottom:0;margin-top:0;text-transform:var(--spectrum-detail-l-emphasis-text-transform,uppercase)}.spectrum-Detail--sizeL strong{font-size:var(
--spectrum-detail-l-strong-text-size,var(--spectrum-global-dimension-font-size-100)
);font-style:var(
--spectrum-detail-l-strong-text-font-style,var(--spectrum-global-font-style-regular)
);font-weight:var(
--spectrum-detail-l-strong-text-font-weight,var(--spectrum-global-font-weight-black)
);letter-spacing:var(
--spectrum-detail-l-strong-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);line-height:var(
--spectrum-detail-l-strong-text-line-height,var(--spectrum-alias-body-text-line-height)
);margin-bottom:0;margin-top:0;text-transform:var(--spectrum-detail-l-strong-text-transform,uppercase)}.spectrum-Detail--sizeM{font-size:var(
--spectrum-detail-m-text-size,var(--spectrum-global-dimension-font-size-75)
);font-style:var(
--spectrum-detail-m-text-font-style,var(--spectrum-global-font-style-regular)
);font-weight:var(
--spectrum-detail-m-text-font-weight,var(--spectrum-alias-detail-text-font-weight)
);letter-spacing:var(
--spectrum-detail-m-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);line-height:var(
--spectrum-detail-m-text-line-height,var(--spectrum-alias-body-text-line-height)
);margin-bottom:0;margin-top:0;text-transform:var(--spectrum-detail-m-text-transform,uppercase)}.spectrum-Detail--sizeM em{font-size:var(
--spectrum-detail-m-emphasis-text-size,var(--spectrum-global-dimension-font-size-75)
);font-style:var(
--spectrum-detail-m-emphasis-text-font-style,var(--spectrum-global-font-style-italic)
);font-weight:var(
--spectrum-detail-m-emphasis-text-font-weight,var(--spectrum-alias-detail-text-font-weight)
);letter-spacing:var(
--spectrum-detail-m-emphasis-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);line-height:var(
--spectrum-detail-m-emphasis-text-line-height,var(--spectrum-alias-body-text-line-height)
);margin-bottom:0;margin-top:0;text-transform:var(--spectrum-detail-m-emphasis-text-transform,uppercase)}.spectrum-Detail--sizeM strong{font-size:var(
--spectrum-detail-m-strong-text-size,var(--spectrum-global-dimension-font-size-75)
);font-style:var(
--spectrum-detail-m-strong-text-font-style,var(--spectrum-global-font-style-regular)
);font-weight:var(
--spectrum-detail-m-strong-text-font-weight,var(--spectrum-global-font-weight-black)
);letter-spacing:var(
--spectrum-detail-m-strong-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);line-height:var(
--spectrum-detail-m-strong-text-line-height,var(--spectrum-alias-body-text-line-height)
);margin-bottom:0;margin-top:0;text-transform:var(--spectrum-detail-m-strong-text-transform,uppercase)}.spectrum-Detail--sizeS{font-size:var(
--spectrum-detail-s-text-size,var(--spectrum-global-dimension-font-size-50)
);font-style:var(
--spectrum-detail-s-text-font-style,var(--spectrum-global-font-style-regular)
);font-weight:var(
--spectrum-detail-s-text-font-weight,var(--spectrum-alias-detail-text-font-weight)
);letter-spacing:var(
--spectrum-detail-s-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);line-height:var(
--spectrum-detail-s-text-line-height,var(--spectrum-alias-body-text-line-height)
);margin-bottom:0;margin-top:0;text-transform:var(--spectrum-detail-s-text-transform,uppercase)}.spectrum-Detail--sizeS em{font-size:var(
--spectrum-detail-s-emphasis-text-size,var(--spectrum-global-dimension-font-size-50)
);font-style:var(
--spectrum-detail-s-emphasis-text-font-style,var(--spectrum-global-font-style-italic)
);font-weight:var(
--spectrum-detail-s-emphasis-text-font-weight,var(--spectrum-alias-detail-text-font-weight)
);letter-spacing:var(
--spectrum-detail-s-emphasis-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);line-height:var(
--spectrum-detail-s-emphasis-text-line-height,var(--spectrum-alias-body-text-line-height)
);margin-bottom:0;margin-top:0;text-transform:var(--spectrum-detail-s-emphasis-text-transform,uppercase)}.spectrum-Detail--sizeS strong{font-size:var(
--spectrum-detail-s-strong-text-size,var(--spectrum-global-dimension-font-size-50)
);font-style:var(
--spectrum-detail-s-strong-text-font-style,var(--spectrum-global-font-style-regular)
);font-weight:var(
--spectrum-detail-s-strong-text-font-weight,var(--spectrum-global-font-weight-black)
);letter-spacing:var(
--spectrum-detail-s-strong-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);line-height:var(
--spectrum-detail-s-strong-text-line-height,var(--spectrum-alias-body-text-line-height)
);margin-bottom:0;margin-top:0;text-transform:var(--spectrum-detail-s-strong-text-transform,uppercase)}.spectrum-Detail--sizeXL{color:var(
--spectrum-detail-xl-text-color,var(--spectrum-alias-heading-text-color)
)}.spectrum-Detail--sizeL{color:var(
--spectrum-detail-l-text-color,var(--spectrum-alias-heading-text-color)
)}.spectrum-Detail--sizeM{color:var(
--spectrum-detail-m-text-color,var(--spectrum-alias-heading-text-color)
)}.spectrum-Detail--sizeS{color:var(
--spectrum-detail-s-text-color,var(--spectrum-alias-heading-text-color)
)}`;

var detailStyles = [styles$P,styles$Q,styles$z];

/**
 * @element sp-card
 *
 * @fires change - Announces a change in the `selected` property of a card
 * @slot preview - This is the preview image for Gallery Cards
 * @slot cover-photo - This is the cover photo for Default and Quiet Cards
 * @slot heading - HTML content to be listed as the heading
 * @slot subheading - HTML content to be listed as the subheading
 * @slot description - A description of the card
 * @slot actions - an `sp-action-menu` element outlining actions to take on the represened object
 * @slot footer - Footer text
 */class Card extends LikeAnchor(ObserveSlotPresence(FocusVisiblePolyfillMixin(SpectrumElement),['[slot="cover-photo"]','[slot="preview"]'])){constructor(){super(...arguments);this.variant='standard';this.selected=false;this.heading='';this.horizontal=false;this.focused=false;this.toggles=false;this.subheading='';this.handleFocusin=event=>{this.focused=true;const target=event.composedPath()[0];if(target!==this){this.removeEventListener('keydown',this.handleKeydown);return;}this.addEventListener('keydown',this.handleKeydown);};}static get styles(){return [headingStyles,detailStyles,styles$A];}get hasCoverPhoto(){return this.getSlotContentPresence('[slot="cover-photo"]');}get hasPreview(){return this.getSlotContentPresence('[slot="preview"]');}click(){var _a;(_a=this.likeAnchor)===null||_a===void 0?void 0:_a.click();}handleFocusout(event){this.focused=false;const target=event.composedPath()[0];if(target===this){this.removeEventListener('keydown',this.handleKeydown);}}handleKeydown(event){const{code}=event;switch(code){case'Space':this.toggleSelected();if(this.toggles){break;}case'Enter':case'NumpadEnter':this.click();}}handleSelectedChange({target:{checked}}){this.selected=checked;this.announceChange();}toggleSelected(){if(!this.toggles){this.dispatchEvent(new Event('click',{bubbles:true,composed:true}));return;}this.selected=!this.selected;this.announceChange();}announceChange(){const applyDefault=this.dispatchEvent(new Event('change',{cancelable:true}));if(!applyDefault){this.selected=!this.selected;}}stopPropagationOnHref(event){if(this.href){event.stopPropagation();}}handlePointerdown(event){const path=event.composedPath();const hasAnchor=path.some(el=>el.localName==='a');if(hasAnchor)return;const start=+new Date();const handleEnd=()=>{const end=+new Date();if(end-start<200){this.click();}this.removeEventListener('pointerup',handleEnd);};this.addEventListener('pointerup',handleEnd);}get renderHeading(){return p`<div class="title spectrum-Heading spectrum-Heading--sizeXS" id="heading"><slot name="heading">${this.heading}</slot></div>`;}get renderPreviewImage(){return p`<sp-asset id="preview" variant="${l(this.asset)}"><slot name="preview"></slot></sp-asset>`;}get renderCoverImage(){return p`<sp-asset id="cover-photo" variant="${l(this.asset)}"><slot name="cover-photo"></slot></sp-asset>`;}get images(){const images=[];if(this.hasPreview)images.push(this.renderPreviewImage);if(this.hasCoverPhoto)images.push(this.renderCoverImage);return images;}renderImage(){if(this.horizontal){return this.images;}if(this.variant!=='standard'){return [this.renderPreviewImage];}return this.images;}get renderSubtitleAndDescription(){return p`<div class="subtitle spectrum-Detail spectrum-Detail--sizeS"><slot name="subheading">${this.subheading}</slot></div><slot name="description"></slot>`;}render(){return p`<div class="body"><div class="header">${this.renderHeading} ${this.variant==='gallery'?this.renderSubtitleAndDescription:p``} ${this.variant!=='quiet'||this.size!=='s'?p`<div class="actionButton" @pointerdown="${this.stopPropagationOnHref}"><slot name="actions"></slot></div>`:p``}</div>${this.variant!=='gallery'?p`<div class="content">${this.renderSubtitleAndDescription}</div>`:p``}</div>${this.href?this.renderAnchor({id:'like-anchor',labelledby:'heading'}):p``} ${this.variant==='standard'?p`<slot name="footer"></slot>`:p``} ${this.renderImage()} ${this.toggles?p`<sp-quick-actions class="quickActions" @pointerdown="${this.stopPropagationOnHref}"><sp-checkbox class="checkbox" @change="${this.handleSelectedChange}" ?checked="${this.selected}"></sp-checkbox></sp-quick-actions>`:p``} ${this.variant==='quiet'&&this.size==='s'?p`<sp-quick-actions class="spectrum-QuickActions actions" @pointerdown="${this.stopPropagationOnHref}"><slot name="actions"></slot></sp-quick-actions>`:p``}`;}firstUpdated(changes){super.firstUpdated(changes);this.addEventListener('pointerdown',this.handlePointerdown);this.addEventListener('focusin',this.handleFocusin);this.shadowRoot.addEventListener('focusin',this.handleFocusin);this.addEventListener('focusout',this.handleFocusout);}}__decorate([e()],Card.prototype,"asset",void 0);__decorate([e({reflect:true})],Card.prototype,"variant",void 0);__decorate([e({type:Boolean,reflect:true})],Card.prototype,"selected",void 0);__decorate([e()],Card.prototype,"heading",void 0);__decorate([e({type:Boolean,reflect:true})],Card.prototype,"horizontal",void 0);__decorate([i('#like-anchor')],Card.prototype,"likeAnchor",void 0);__decorate([e({type:String,reflect:true})],Card.prototype,"size",void 0);__decorate([e({type:Boolean,reflect:true})],Card.prototype,"focused",void 0);__decorate([e({type:Boolean,reflect:true})],Card.prototype,"toggles",void 0);__decorate([e()],Card.prototype,"subheading",void 0);

iliadCustomElementsDefine('sp-card',Card);

const styles$y=r`:host{--spectrum-coachmark-animation-indicator-keyframe-0-scale:1;--spectrum-coachmark-animation-indicator-keyframe-0-opacity:0;--spectrum-coachmark-animation-indicator-keyframe-50-scale:1.5;--spectrum-coachmark-animation-indicator-keyframe-50-opacity:1;--spectrum-coachmark-animation-indicator-keyframe-100-scale:2;--spectrum-coachmark-animation-indicator-keyframe-100-opacity:0;--spectrum-coachmark-quiet-animation-indicator-keyframe-0-scale:0.8;--spectrum-coachmark-min-width:var(--spectrum-global-dimension-size-3400);--spectrum-coachmark-max-width:var(--spectrum-global-dimension-size-5000);--spectrum-coachmark-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-coachmark-border-size:var(--spectrum-alias-border-size-thin);--spectrum-coachmark-padding-x:var(--spectrum-global-dimension-size-300);--spectrum-coachmark-padding-y:var(--spectrum-global-dimension-size-300);--spectrum-coachmark-title-margin-bottom:var(
--spectrum-global-dimension-size-200
);--spectrum-coachmark-title-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-coachmark-title-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-coachmark-title-text-line-height:var(
--spectrum-alias-heading-text-line-height
);--spectrum-coachmark-step-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-coachmark-step-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-coachmark-step-text-line-height:var(
--spectrum-alias-body-text-line-height
);--spectrum-coachmark-content-margin-bottom:var(
--spectrum-global-dimension-size-200
);--spectrum-coachmark-indicator-gap:var(
--spectrum-global-dimension-size-75
);--spectrum-coachmark-indicator-ring-border-size:var(
--spectrum-global-dimension-static-size-25
);--spectrum-coachmark-animation-indicator-ring-duration:3000ms;--spectrum-coachmark-animation-inticator-ring-center-delay-multiple:-0.66;--spectrum-coachmark-animation-inticator-ring-outer-delay-multiple:-1;--spectrum-coachmark-indicator-ring-diameter:var(
--spectrum-global-dimension-size-200
);--spectrum-coachmark-animation-inticator-ring-inner-delay-multiple:-0.5;--spectrum-coachmark-quiet-indicator-ring-diameter:var(
--spectrum-global-dimension-size-100
);--spectrum-coachmark-quiet-animation-inticator-ring-inner-delay-multiple:-0.33;--spectrum-coachmark-background-color:var(--spectrum-global-color-gray-50);--spectrum-coachmark-border-color:var(--spectrum-alias-border-color-dark);--spectrum-coachmark-shadow-color:var(--spectrum-alias-dropshadow-color);--spectrum-coachmark-title-text-color:var(
--spectrum-alias-heading-text-color
);--spectrum-coachmark-step-text-color:var(
--spectrum-alias-label-text-color
);--spectrum-coachmark-content-text-color:var(--spectrum-alias-text-color);--spectrum-coachmark-indicator-ring-default-color:var(
--spectrum-alias-focus-color
);--spectrum-coachmark-indicator-ring-low-contrast-color:var(
--spectrum-global-color-gray-50
);--spectrum-coachmark-indicator-ring-high-contrast-color:var(
--spectrum-global-color-gray-900
)}@keyframes pulse{0%{opacity:var(
--spectrum-coachmark-animation-indicator-keyframe-0-opacity,0
);-webkit-transform:scale(var(--spectrum-coachmark-animation-indicator-keyframe-0-scale,1))}50%{opacity:var(
--spectrum-coachmark-animation-indicator-keyframe-50-opacity,1
);-webkit-transform:scale(var(--spectrum-coachmark-animation-indicator-keyframe-50-scale,1.5))}to{opacity:var(
--spectrum-coachmark-animation-indicator-keyframe-100-opacity,0
);-webkit-transform:scale(var(--spectrum-coachmark-animation-indicator-keyframe-100-scale,2))}}@keyframes pulse--quiet{0%{opacity:var(
--spectrum-coachmark-animation-indicator-keyframe-0-opacity,0
);-webkit-transform:scale(var(
--spectrum-coachmark-quiet-animation-indicator-keyframe-0-scale,.8
))}50%{opacity:var(
--spectrum-coachmark-animation-indicator-keyframe-50-opacity,1
);-webkit-transform:scale(var(--spectrum-coachmark-animation-indicator-keyframe-50-scale,1.5))}to{opacity:var(
--spectrum-coachmark-animation-indicator-keyframe-100-opacity,0
);-webkit-transform:scale(var(--spectrum-coachmark-animation-indicator-keyframe-100-scale,2))}}:host([dir=ltr]) .spectrum-CoachMarkPopover-footer{text-align:right}:host([dir=rtl]) .spectrum-CoachMarkPopover-footer{text-align:left}:host{margin:var(
--spectrum-coachmark-indicator-gap,var(--spectrum-global-dimension-size-75)
);position:relative}.ring{border-radius:50%;border-style:solid;border-width:var(
--spectrum-coachmark-indicator-ring-border-size,var(--spectrum-global-dimension-static-size-25)
);display:block;position:absolute}.ring:nth-child(2){animation-delay:calc(var(--spectrum-coachmark-animation-indicator-ring-duration,3s)*var(--spectrum-coachmark-animation-inticator-ring-center-delay-multiple,-.66))}.ring:nth-child(3){animation-delay:calc(var(--spectrum-coachmark-animation-indicator-ring-duration,3s)*var(--spectrum-coachmark-animation-inticator-ring-outer-delay-multiple,-1))}:host{min-height:calc(var(
--spectrum-coachmark-indicator-ring-diameter,
var(--spectrum-global-dimension-size-200)
)*3);min-width:calc(var(
--spectrum-coachmark-indicator-ring-diameter,
var(--spectrum-global-dimension-size-200)
)*3)}:host([dir=ltr]) .ring{left:calc(var(
--spectrum-coachmark-indicator-ring-diameter,
var(--spectrum-global-dimension-size-200)
)*.75)}:host([dir=rtl]) .ring{right:calc(var(
--spectrum-coachmark-indicator-ring-diameter,
var(--spectrum-global-dimension-size-200)
)*.75)}.ring{animation:pulse var(--spectrum-coachmark-animation-indicator-ring-duration,3s) linear infinite;height:var(
--spectrum-coachmark-indicator-ring-diameter,var(--spectrum-global-dimension-size-200)
);top:calc(var(
--spectrum-coachmark-indicator-ring-diameter,
var(--spectrum-global-dimension-size-200)
)*.75);width:var(
--spectrum-coachmark-indicator-ring-diameter,var(--spectrum-global-dimension-size-200)
)}.ring:first-child{animation-delay:calc(var(--spectrum-coachmark-animation-indicator-ring-duration,3s)*var(--spectrum-coachmark-animation-inticator-ring-inner-delay-multiple,-.5))}:host([quiet]){min-height:calc(var(
--spectrum-coachmark-quiet-indicator-ring-diameter,
var(--spectrum-global-dimension-size-100)
)*2.75);min-width:calc(var(
--spectrum-coachmark-quiet-indicator-ring-diameter,
var(--spectrum-global-dimension-size-100)
)*2.75)}:host([dir=ltr][quiet]) .ring{left:calc(var(
--spectrum-coachmark-quiet-indicator-ring-diameter,
var(--spectrum-global-dimension-size-100)
)*.75)}:host([dir=rtl][quiet]) .ring{right:calc(var(
--spectrum-coachmark-quiet-indicator-ring-diameter,
var(--spectrum-global-dimension-size-100)
)*.75)}:host([quiet]) .ring{animation:pulse--quiet var(--spectrum-coachmark-animation-indicator-ring-duration,3s) linear infinite;height:var(
--spectrum-coachmark-quiet-indicator-ring-diameter,var(--spectrum-global-dimension-size-100)
);top:calc(var(
--spectrum-coachmark-quiet-indicator-ring-diameter,
var(--spectrum-global-dimension-size-100)
)*.75);width:var(
--spectrum-coachmark-quiet-indicator-ring-diameter,var(--spectrum-global-dimension-size-100)
)}:host([quiet]) .ring:first-child{animation-delay:calc(var(--spectrum-coachmark-animation-indicator-ring-duration,3s)*var(--spectrum-coachmark-quiet-animation-inticator-ring-inner-delay-multiple,-.33))}.ring{border-color:var(
--spectrum-coachmark-indicator-ring-default-color,var(--spectrum-alias-focus-color)
)}:host([variant=light]) .ring{border-color:var(
--spectrum-coachmark-indicator-ring-low-contrast-color,var(--spectrum-global-color-gray-50)
)}:host([variant=dark]) .ring{border-color:var(
--spectrum-coachmark-indicator-ring-high-contrast-color,var(--spectrum-global-color-gray-900)
)}:host{display:inline-block}`;

/**
 * @element sp-coachmark
 */class Coachmark extends SpectrumElement{constructor(){super(...arguments);this.quiet=false;this.variant='';}static get styles(){return [styles$y];}render(){return p`<div class="ring"></div><div class="ring"></div><div class="ring"></div>`;}}__decorate([e({type:Boolean,reflect:true})],Coachmark.prototype,"quiet",void 0);__decorate([e({reflect:true})],Coachmark.prototype,"variant",void 0);

iliadCustomElementsDefine('sp-coachmark',Coachmark);

/* c8 ignore next 6 */const defaultListener=['',()=>{return;}];/**
 * Performantly manage listening to event in a series, like:
 *   - `input[type="range"]`: input, input, etc. => change
 *   - `sp-color-area`: pointerdown => pointermove, pointermove, etc. => pointerup
 * Lazily bind events to the specific part of the series while
 * throttling streamed events to 1/frame.
 */class StreamingListenerDirective extends d{constructor(){super(...arguments);this.start=defaultListener;this.streamInside=defaultListener;this.end=defaultListener;this.streamOutside=defaultListener;this.state='off';this.handleStart=event=>{this.callHandler(this.start[1],event);if(event.defaultPrevented){return;}this.removeListeners();this.addListeners('on');};this.handleStream=event=>{this.callHandler(this.streamInside[1],event);};this.handleEnd=event=>{this.callHandler(this.end[1],event);this.removeListeners();this.addListeners('off');};this.handleBetween=event=>{this.callHandler(this.streamOutside[1],event);};}/* c8 ignore next 4 */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
render(_configGroup){return T;}update(part,[{start,end,streamInside=defaultListener,streamOutside=defaultListener}]){var _a;if(this.element!==part.element){this.element=part.element;this.removeListeners();}this.host=((_a=part.options)===null||_a===void 0?void 0:_a.host)||this.element;this.start=start;this.end=end;this.streamInside=streamInside;this.streamOutside=streamOutside;this.addListeners();}addListeners(state){this.state=state||this.state;if(this.state==='off'){this.addListener(this.streamOutside[0],this.handleBetween);this.addListener(this.start[0],this.handleStart);}else if(this.state==='on'){this.addListener(this.streamInside[0],this.handleStream);this.addListener(this.end[0],this.handleEnd);}}callHandler(value,event){if(typeof value==='function'){value.call(this.host,event);}else {value.handleEvent(event);}}addListener(type,fn){if(Array.isArray(type)){type.map(eventName=>{this.element.addEventListener(eventName,fn);});}else {this.element.addEventListener(type,fn);}}removeListener(type,fn){if(Array.isArray(type)){type.map(eventName=>{this.element.removeEventListener(eventName,fn);});}else {this.element.removeEventListener(type,fn);}}removeListeners(){this.removeListener(this.start[0],this.handleStart);this.removeListener(this.streamInside[0],this.handleStream);this.removeListener(this.end[0],this.handleEnd);this.removeListener(this.streamOutside[0],this.handleBetween);}disconnected(){this.removeListeners();}reconnected(){this.addListeners();}}const streamingListener=e$1(StreamingListenerDirective);

const styles$x=r`:host{--spectrum-colorloupe-width:var(
--spectrum-global-dimension-static-size-600
);--spectrum-colorhandle-inner-border-size:var(
--spectrum-global-dimension-static-size-25
);--spectrum-colorloupe-height:var(
--spectrum-global-dimension-static-size-800
);--spectrum-colorloupe-outer-border-size:var(
--spectrum-global-dimension-static-size-10
);--spectrum-colorloupe-inner-border-color:var(
--spectrum-global-color-static-white
);--spectrum-colorloupe-outer-border-color:rgba(50,50,50,.1)}:host{--spectrum-colorloupe-width-adjusted:calc(var(
--spectrum-colorloupe-width,
var(--spectrum-global-dimension-static-size-600)
) + var(
--spectrum-colorhandle-inner-border-size,
var(--spectrum-global-dimension-static-size-25)
)*2);--spectrum-colorloupe-height-adjusted:calc(var(
--spectrum-colorloupe-height,
var(--spectrum-global-dimension-static-size-800)
) + var(
--spectrum-colorhandle-inner-border-size,
var(--spectrum-global-dimension-static-size-25)
)*2);--spectrum-colorloupe-offset:var(
--spectrum-global-dimension-static-size-200,16px
);--spectrum-colorloupe-animation-distance:var(
--spectrum-global-dimension-static-size-100,8px
)}:host{bottom:calc(50% + var(--spectrum-colorloupe-offset));height:var(--spectrum-colorloupe-height-adjusted);left:calc(50% - var(--spectrum-colorloupe-width-adjusted)/ 2);opacity:0;pointer-events:none;position:absolute;transform:translateY(var(--spectrum-colorloupe-animation-distance));transform-origin:bottom center;transition:transform .1s ease-in-out,opacity 125ms ease-in-out;width:var(--spectrum-colorloupe-width-adjusted)}:host([open]){opacity:1;transform:translate(0)}.outer{stroke-width:var(
--spectrum-colorloupe-outer-border-size,var(--spectrum-global-dimension-static-size-10)
);fill:var(
--spectrum-colorloupe-inner-border-color,var(--spectrum-global-color-static-white)
);stroke:var(
--spectrum-colorloupe-outer-border-color,rgba(50,50,50,.1)
)}@media (forced-colors:active){:host{--spectrum-colorloupe-outer-border-color:CanvasText}}svg{height:inherit;width:inherit}`;

/**
 * @element sp-color-loupe
 */class ColorLoupe extends SpectrumElement{constructor(){super(...arguments);this.open=false;this.color='rgba(255, 0, 0, 0.5)';}static get styles(){return [styles$x];}render(){return p`<svg><g transform="translate(1 1)"><path class="inner" d="M24,0A24,24,0,0,1,48,24c0,16.255-24,40-24,40S0,40.255,0,24A24,24,0,0,1,24,0Z" fill="${this.color}"/><path class="outer" d="M24,2A21.98,21.98,0,0,0,2,24c0,6.2,4,14.794,11.568,24.853A144.233,144.233,0,0,0,24,61.132,144.085,144.085,0,0,0,34.4,48.893C41.99,38.816,46,30.209,46,24A21.98,21.98,0,0,0,24,2m0-2A24,24,0,0,1,48,24c0,16.255-24,40-24,40S0,40.255,0,24A24,24,0,0,1,24,0Z"/></g></svg>`;}}__decorate([e({type:Boolean,reflect:true})],ColorLoupe.prototype,"open",void 0);__decorate([e({type:String})],ColorLoupe.prototype,"color",void 0);

iliadCustomElementsDefine('sp-color-loupe',ColorLoupe);

const styles$w=r`:host{--spectrum-colorhandle-size:var(--spectrum-global-dimension-size-200);--spectrum-colorhandle-inner-border-size:var(
--spectrum-global-dimension-static-size-25
);--spectrum-colorhandle-inner-border-color:var(
--spectrum-global-color-static-white
);--spectrum-colorhandle-outer-box-shadow:var(
--spectrum-global-shadow-static-m
);--spectrum-colorhandle-outer-border-size:var(
--spectrum-alias-border-size-m
);--spectrum-colorhandle-outer-border-color:var(
--spectrum-alias-colorhandle-outer-border-color
);--spectrum-colorhandle-inner-border-color-disabled:var(
--spectrum-global-color-gray-400
);--spectrum-colorhandle-fill-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-colorhandle-focus-background-color:var(
--spectrum-global-color-static-primary-500;
);--spectrum-colorhandle-focus-background-width:var(
--spectrum-global-color-static-primary-500;
)}:host{--spectrum-colorhandle-animation-duration:var(
--spectrum-global-animation-duration-100,130ms
);--spectrum-colorhandle-animation-easing:ease-in-out;--spectrum-colorhandle-hitarea-size:var(
--spectrum-global-dimension-size-300
)}:host(.focus-visible),:host([focus]){height:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2);margin-left:calc(-1*var(--spectrum-colorhandle-size,var(--spectrum-global-dimension-size-200)));margin-top:calc(-1*var(--spectrum-colorhandle-size,var(--spectrum-global-dimension-size-200)));width:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2)}:host(:focus-visible),:host([focus]){height:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2);margin-left:calc(-1*var(--spectrum-colorhandle-size,var(--spectrum-global-dimension-size-200)));margin-top:calc(-1*var(--spectrum-colorhandle-size,var(--spectrum-global-dimension-size-200)));width:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2)}:host{background-position:var(--spectrum-colorhandle-background-offset) var(--spectrum-colorhandle-background-offset),var(--spectrum-colorhandle-background-offset) calc(var(--spectrum-colorhandle-checkerboard-size) + var(--spectrum-colorhandle-background-offset)),calc(var(--spectrum-colorhandle-checkerboard-size) + var(--spectrum-colorhandle-background-offset)) calc(-1*var(--spectrum-colorhandle-checkerboard-size) + var(--spectrum-colorhandle-background-offset)),calc(-1*var(--spectrum-colorhandle-checkerboard-size) + var(--spectrum-colorhandle-background-offset)) var(--spectrum-colorhandle-background-offset);background-size:var(--spectrum-global-dimension-static-size-200,16px) var(--spectrum-global-dimension-static-size-200,16px);border-style:solid;border-width:var(
--spectrum-colorhandle-inner-border-size,var(--spectrum-global-dimension-static-size-25)
);box-sizing:border-box;display:block;height:var(
--spectrum-colorhandle-size,var(--spectrum-global-dimension-size-200)
);margin-left:calc(-1*var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)/2);margin-top:calc(-1*var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)/2);position:absolute;transition:width var(--spectrum-colorhandle-animation-duration) var(--spectrum-colorhandle-animation-easing),height var(--spectrum-colorhandle-animation-duration) var(--spectrum-colorhandle-animation-easing),border-width var(--spectrum-colorhandle-animation-duration) var(--spectrum-colorhandle-animation-easing),margin-left var(--spectrum-colorhandle-animation-duration) var(--spectrum-colorhandle-animation-easing),margin-top var(--spectrum-colorhandle-animation-duration) var(--spectrum-colorhandle-animation-easing);width:var(
--spectrum-colorhandle-size,var(--spectrum-global-dimension-size-200)
);z-index:1}:host,:host:after{border-radius:100%}:host:after{content:"";display:block;height:var(--spectrum-colorhandle-hitarea-size);left:calc(50% - var(--spectrum-colorhandle-hitarea-size)/ 2);position:absolute;top:calc(50% - var(--spectrum-colorhandle-hitarea-size)/ 2);width:var(--spectrum-colorhandle-hitarea-size)}:host([disabled]){pointer-events:none}.color{border-radius:100%;height:100%;width:100%}:host{--spectrum-colorhandle-background-offset:calc(-1*var(--spectrum-global-dimension-static-size-25, 2px));--spectrum-colorhandle-checkerboard-size:var(
--spectrum-global-dimension-static-size-100,8px
);--spectrum-colorhandle-outer-border-color:rgba(0,0,0,.42)}:host{background-color:var(--spectrum-global-color-static-white,#fff);background-image:linear-gradient(-45deg,transparent 75.5%,var(--spectrum-global-color-static-gray-500,#bcbcbc) 75.5%),linear-gradient(45deg,transparent 75.5%,var(--spectrum-global-color-static-gray-500,#bcbcbc) 75.5%),linear-gradient(-45deg,var(--spectrum-global-color-static-gray-500,#bcbcbc) 25.5%,transparent 25.5%),linear-gradient(45deg,var(--spectrum-global-color-static-gray-500,#bcbcbc) 25.5%,transparent 25.5%);border-color:var(
--spectrum-colorhandle-inner-border-color,var(--spectrum-global-color-static-white)
);box-shadow:0 0 0 var(
--spectrum-colorhandle-outer-border-size,var(--spectrum-global-dimension-static-size-10)
) var(
--spectrum-colorhandle-outer-border-color,var(--spectrum-alias-colorhandle-outer-border-color)
)}:host([disabled]){background:var(
--spectrum-colorhandle-fill-color-disabled,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-colorhandle-inner-border-color-disabled,var(--spectrum-global-color-gray-400)
);box-shadow:none}:host([disabled]) .color{display:none}.color{box-shadow:inset 0 0 0 var(
--spectrum-colorhandle-outer-border-size,var(--spectrum-global-dimension-static-size-10)
) var(
--spectrum-colorhandle-outer-border-color,var(--spectrum-alias-colorhandle-outer-border-color)
)}@media (forced-colors:active){:host{--spectrum-colorhandle-inner-border-color-disabled:GrayText;--spectrum-colorhandle-fill-color-disabled:Canvas;--spectrum-colorhandle-inner-border-color:CanvasText}:host([disabled]){forced-color-adjust:none}}:host{box-shadow:var(--spectrum-colorhandle-outer-box-shadow)}.color{box-shadow:inset var(--spectrum-colorhandle-outer-box-shadow)}:host(.focus-visible):before,:host([focus]):before{background-color:var(--spectrum-colorhandle-focus-background-color);border-radius:50%;content:"";display:block;height:calc(100% + var(--spectrum-colorhandle-focus-width)*2);margin-left:calc(-1*var(--spectrum-colorhandle-focus-width));margin-top:calc(-1*var(--spectrum-colorhandle-focus-width));width:calc(100% + var(--spectrum-colorhandle-focus-width)*2)}:host{touch-action:none}:host(:focus){outline:0}`;

const extractHueAndSaturationRegExp=/^hs[v|l]a?\s?\((\d{1,3}\.?\d*?),?\s?(\d{1,3})/;const replaceHueAndSaturationRegExp=/(^hs[v|l]a?\s?\()\d{1,3}\.?\d*?(,?\s?)\d{1,3}/;const replaceHueRegExp=/(^hs[v|l]a?\()\d{1,3}/;/**
 * @element sp-color-handle
 */class ColorHandle extends SpectrumElement{constructor(){super(...arguments);this.disabled=false;this.focused=false;this.open=false;this.color='rgba(255, 0, 0, 0.5)';}static get styles(){return [styles$w];}handlePointerdown(event){if(event.pointerType==='touch'){this.open=true;}this.setPointerCapture(event.pointerId);}handlePointerup(event){this.open=false;this.releasePointerCapture(event.pointerId);}render(){return p`<div class="color" style="background-color:${this.color}"></div><sp-color-loupe color="${this.color}" ?open="${this.open&&!this.disabled}"></sp-color-loupe>`;}firstUpdated(changed){super.firstUpdated(changed);this.addEventListener('pointerdown',this.handlePointerdown);this.addEventListener('pointerup',this.handlePointerup);this.addEventListener('pointercancel',this.handlePointerup);}}__decorate([e({type:Boolean,reflect:true})],ColorHandle.prototype,"disabled",void 0);__decorate([e({type:Boolean,reflect:true})],ColorHandle.prototype,"focused",void 0);__decorate([e({type:Boolean,reflect:true})],ColorHandle.prototype,"open",void 0);__decorate([e({type:String})],ColorHandle.prototype,"color",void 0);

iliadCustomElementsDefine('sp-color-handle',ColorHandle);

/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */function bound01(n,max){if(isOnePointZero(n)){n='100%';}var isPercent=isPercentage(n);n=max===360?n:Math.min(max,Math.max(0,parseFloat(n)));// Automatically convert percentage into number
if(isPercent){n=parseInt(String(n*max),10)/100;}// Handle floating point rounding errors
if(Math.abs(n-max)<0.000001){return 1;}// Convert into [0, 1] range if it isn't already
if(max===360){// If n is a hue given in degrees,
// wrap around out-of-range values into [0, 360] range
// then convert into [0, 1].
n=(n<0?n%max+max:n%max)/parseFloat(String(max));}else {// If n not a hue given in degrees
// Convert into [0, 1] range if it isn't already.
n=n%max/parseFloat(String(max));}return n;}/**
 * Force a number between 0 and 1
 * @hidden
 */function clamp01(val){return Math.min(1,Math.max(0,val));}/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */function isOnePointZero(n){return typeof n==='string'&&n.indexOf('.')!==-1&&parseFloat(n)===1;}/**
 * Check to see if string passed in is a percentage
 * @hidden
 */function isPercentage(n){return typeof n==='string'&&n.indexOf('%')!==-1;}/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */function boundAlpha(a){a=parseFloat(a);if(isNaN(a)||a<0||a>1){a=1;}return a;}/**
 * Replace a decimal with it's percentage value
 * @hidden
 */function convertToPercentage(n){if(n<=1){return Number(n)*100+"%";}return n;}/**
 * Force a hex value to have 2 characters
 * @hidden
 */function pad2(c){return c.length===1?'0'+c:String(c);}

// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */function rgbToRgb(r,g,b){return {r:bound01(r,255)*255,g:bound01(g,255)*255,b:bound01(b,255)*255};}/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */function rgbToHsl(r,g,b){r=bound01(r,255);g=bound01(g,255);b=bound01(b,255);var max=Math.max(r,g,b);var min=Math.min(r,g,b);var h=0;var s=0;var l=(max+min)/2;if(max===min){s=0;h=0;// achromatic
}else {var d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break;default:break;}h/=6;}return {h:h,s:s,l:l};}function hue2rgb(p,q,t){if(t<0){t+=1;}if(t>1){t-=1;}if(t<1/6){return p+(q-p)*(6*t);}if(t<1/2){return q;}if(t<2/3){return p+(q-p)*(2/3-t)*6;}return p;}/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */function hslToRgb(h,s,l){var r;var g;var b;h=bound01(h,360);s=bound01(s,100);l=bound01(l,100);if(s===0){// achromatic
g=l;b=l;r=l;}else {var q=l<0.5?l*(1+s):l+s-l*s;var p=2*l-q;r=hue2rgb(p,q,h+1/3);g=hue2rgb(p,q,h);b=hue2rgb(p,q,h-1/3);}return {r:r*255,g:g*255,b:b*255};}/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */function rgbToHsv(r,g,b){r=bound01(r,255);g=bound01(g,255);b=bound01(b,255);var max=Math.max(r,g,b);var min=Math.min(r,g,b);var h=0;var v=max;var d=max-min;var s=max===0?0:d/max;if(max===min){h=0;// achromatic
}else {switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break;default:break;}h/=6;}return {h:h,s:s,v:v};}/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */function hsvToRgb(h,s,v){h=bound01(h,360)*6;s=bound01(s,100);v=bound01(v,100);var i=Math.floor(h);var f=h-i;var p=v*(1-s);var q=v*(1-f*s);var t=v*(1-(1-f)*s);var mod=i%6;var r=[v,q,p,p,t,v][mod];var g=[t,v,v,q,p,p][mod];var b=[p,p,t,v,v,q][mod];return {r:r*255,g:g*255,b:b*255};}/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */function rgbToHex(r,g,b,allow3Char){var hex=[pad2(Math.round(r).toString(16)),pad2(Math.round(g).toString(16)),pad2(Math.round(b).toString(16))];// Return a 3 character hex if possible
if(allow3Char&&hex[0].startsWith(hex[0].charAt(1))&&hex[1].startsWith(hex[1].charAt(1))&&hex[2].startsWith(hex[2].charAt(1))){return hex[0].charAt(0)+hex[1].charAt(0)+hex[2].charAt(0);}return hex.join('');}/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * Assumes r, g, b are contained in the set [0, 255] and
 * a in [0, 1]. Returns a 4 or 8 character rgba hex
 */ // eslint-disable-next-line max-params
function rgbaToHex(r,g,b,a,allow4Char){var hex=[pad2(Math.round(r).toString(16)),pad2(Math.round(g).toString(16)),pad2(Math.round(b).toString(16)),pad2(convertDecimalToHex(a))];// Return a 4 character hex if possible
if(allow4Char&&hex[0].startsWith(hex[0].charAt(1))&&hex[1].startsWith(hex[1].charAt(1))&&hex[2].startsWith(hex[2].charAt(1))&&hex[3].startsWith(hex[3].charAt(1))){return hex[0].charAt(0)+hex[1].charAt(0)+hex[2].charAt(0)+hex[3].charAt(0);}return hex.join('');}/**
 * Converts an RGBA color to an ARGB Hex8 string
 * Rarely used, but required for "toFilter()"
 */function rgbaToArgbHex(r,g,b,a){var hex=[pad2(convertDecimalToHex(a)),pad2(Math.round(r).toString(16)),pad2(Math.round(g).toString(16)),pad2(Math.round(b).toString(16))];return hex.join('');}/** Converts a decimal to a hex value */function convertDecimalToHex(d){return Math.round(parseFloat(d)*255).toString(16);}/** Converts a hex value to a decimal */function convertHexToDecimal(h){return parseIntFromHex(h)/255;}/** Parse a base-16 hex value into a base-10 integer */function parseIntFromHex(val){return parseInt(val,16);}function numberInputToObject(color){return {r:color>>16,g:(color&0xff00)>>8,b:color&0xff};}

// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */var names={aliceblue:'#f0f8ff',antiquewhite:'#faebd7',aqua:'#00ffff',aquamarine:'#7fffd4',azure:'#f0ffff',beige:'#f5f5dc',bisque:'#ffe4c4',black:'#000000',blanchedalmond:'#ffebcd',blue:'#0000ff',blueviolet:'#8a2be2',brown:'#a52a2a',burlywood:'#deb887',cadetblue:'#5f9ea0',chartreuse:'#7fff00',chocolate:'#d2691e',coral:'#ff7f50',cornflowerblue:'#6495ed',cornsilk:'#fff8dc',crimson:'#dc143c',cyan:'#00ffff',darkblue:'#00008b',darkcyan:'#008b8b',darkgoldenrod:'#b8860b',darkgray:'#a9a9a9',darkgreen:'#006400',darkgrey:'#a9a9a9',darkkhaki:'#bdb76b',darkmagenta:'#8b008b',darkolivegreen:'#556b2f',darkorange:'#ff8c00',darkorchid:'#9932cc',darkred:'#8b0000',darksalmon:'#e9967a',darkseagreen:'#8fbc8f',darkslateblue:'#483d8b',darkslategray:'#2f4f4f',darkslategrey:'#2f4f4f',darkturquoise:'#00ced1',darkviolet:'#9400d3',deeppink:'#ff1493',deepskyblue:'#00bfff',dimgray:'#696969',dimgrey:'#696969',dodgerblue:'#1e90ff',firebrick:'#b22222',floralwhite:'#fffaf0',forestgreen:'#228b22',fuchsia:'#ff00ff',gainsboro:'#dcdcdc',ghostwhite:'#f8f8ff',goldenrod:'#daa520',gold:'#ffd700',gray:'#808080',green:'#008000',greenyellow:'#adff2f',grey:'#808080',honeydew:'#f0fff0',hotpink:'#ff69b4',indianred:'#cd5c5c',indigo:'#4b0082',ivory:'#fffff0',khaki:'#f0e68c',lavenderblush:'#fff0f5',lavender:'#e6e6fa',lawngreen:'#7cfc00',lemonchiffon:'#fffacd',lightblue:'#add8e6',lightcoral:'#f08080',lightcyan:'#e0ffff',lightgoldenrodyellow:'#fafad2',lightgray:'#d3d3d3',lightgreen:'#90ee90',lightgrey:'#d3d3d3',lightpink:'#ffb6c1',lightsalmon:'#ffa07a',lightseagreen:'#20b2aa',lightskyblue:'#87cefa',lightslategray:'#778899',lightslategrey:'#778899',lightsteelblue:'#b0c4de',lightyellow:'#ffffe0',lime:'#00ff00',limegreen:'#32cd32',linen:'#faf0e6',magenta:'#ff00ff',maroon:'#800000',mediumaquamarine:'#66cdaa',mediumblue:'#0000cd',mediumorchid:'#ba55d3',mediumpurple:'#9370db',mediumseagreen:'#3cb371',mediumslateblue:'#7b68ee',mediumspringgreen:'#00fa9a',mediumturquoise:'#48d1cc',mediumvioletred:'#c71585',midnightblue:'#191970',mintcream:'#f5fffa',mistyrose:'#ffe4e1',moccasin:'#ffe4b5',navajowhite:'#ffdead',navy:'#000080',oldlace:'#fdf5e6',olive:'#808000',olivedrab:'#6b8e23',orange:'#ffa500',orangered:'#ff4500',orchid:'#da70d6',palegoldenrod:'#eee8aa',palegreen:'#98fb98',paleturquoise:'#afeeee',palevioletred:'#db7093',papayawhip:'#ffefd5',peachpuff:'#ffdab9',peru:'#cd853f',pink:'#ffc0cb',plum:'#dda0dd',powderblue:'#b0e0e6',purple:'#800080',rebeccapurple:'#663399',red:'#ff0000',rosybrown:'#bc8f8f',royalblue:'#4169e1',saddlebrown:'#8b4513',salmon:'#fa8072',sandybrown:'#f4a460',seagreen:'#2e8b57',seashell:'#fff5ee',sienna:'#a0522d',silver:'#c0c0c0',skyblue:'#87ceeb',slateblue:'#6a5acd',slategray:'#708090',slategrey:'#708090',snow:'#fffafa',springgreen:'#00ff7f',steelblue:'#4682b4',tan:'#d2b48c',teal:'#008080',thistle:'#d8bfd8',tomato:'#ff6347',turquoise:'#40e0d0',violet:'#ee82ee',wheat:'#f5deb3',white:'#ffffff',whitesmoke:'#f5f5f5',yellow:'#ffff00',yellowgreen:'#9acd32'};

/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */function inputToRGB(color){var rgb={r:0,g:0,b:0};var a=1;var s=null;var v=null;var l=null;var ok=false;var format=false;if(typeof color==='string'){color=stringInputToObject(color);}if(typeof color==='object'){if(isValidCSSUnit(color.r)&&isValidCSSUnit(color.g)&&isValidCSSUnit(color.b)){rgb=rgbToRgb(color.r,color.g,color.b);ok=true;format=String(color.r).substr(-1)==='%'?'prgb':'rgb';}else if(isValidCSSUnit(color.h)&&isValidCSSUnit(color.s)&&isValidCSSUnit(color.v)){s=convertToPercentage(color.s);v=convertToPercentage(color.v);rgb=hsvToRgb(color.h,s,v);ok=true;format='hsv';}else if(isValidCSSUnit(color.h)&&isValidCSSUnit(color.s)&&isValidCSSUnit(color.l)){s=convertToPercentage(color.s);l=convertToPercentage(color.l);rgb=hslToRgb(color.h,s,l);ok=true;format='hsl';}if(Object.prototype.hasOwnProperty.call(color,'a')){a=color.a;}}a=boundAlpha(a);return {ok:ok,format:color.format||format,r:Math.min(255,Math.max(rgb.r,0)),g:Math.min(255,Math.max(rgb.g,0)),b:Math.min(255,Math.max(rgb.b,0)),a:a};}// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER='[-\\+]?\\d+%?';// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER='[-\\+]?\\d*\\.\\d+%?';// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT="(?:"+CSS_NUMBER+")|(?:"+CSS_INTEGER+")";// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3="[\\s|\\(]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")\\s*\\)?";var PERMISSIVE_MATCH4="[\\s|\\(]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")\\s*\\)?";var matchers={CSS_UNIT:new RegExp(CSS_UNIT),rgb:new RegExp('rgb'+PERMISSIVE_MATCH3),rgba:new RegExp('rgba'+PERMISSIVE_MATCH4),hsl:new RegExp('hsl'+PERMISSIVE_MATCH3),hsla:new RegExp('hsla'+PERMISSIVE_MATCH4),hsv:new RegExp('hsv'+PERMISSIVE_MATCH3),hsva:new RegExp('hsva'+PERMISSIVE_MATCH4),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */function stringInputToObject(color){color=color.trim().toLowerCase();if(color.length===0){return false;}var named=false;if(names[color]){color=names[color];named=true;}else if(color==='transparent'){return {r:0,g:0,b:0,a:0,format:'name'};}// Try to match string input using regular expressions.
// Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
// Just return an object and let the conversion functions handle that.
// This way the result will be the same whether the tinycolor is initialized with string or object.
var match=matchers.rgb.exec(color);if(match){return {r:match[1],g:match[2],b:match[3]};}match=matchers.rgba.exec(color);if(match){return {r:match[1],g:match[2],b:match[3],a:match[4]};}match=matchers.hsl.exec(color);if(match){return {h:match[1],s:match[2],l:match[3]};}match=matchers.hsla.exec(color);if(match){return {h:match[1],s:match[2],l:match[3],a:match[4]};}match=matchers.hsv.exec(color);if(match){return {h:match[1],s:match[2],v:match[3]};}match=matchers.hsva.exec(color);if(match){return {h:match[1],s:match[2],v:match[3],a:match[4]};}match=matchers.hex8.exec(color);if(match){return {r:parseIntFromHex(match[1]),g:parseIntFromHex(match[2]),b:parseIntFromHex(match[3]),a:convertHexToDecimal(match[4]),format:named?'name':'hex8'};}match=matchers.hex6.exec(color);if(match){return {r:parseIntFromHex(match[1]),g:parseIntFromHex(match[2]),b:parseIntFromHex(match[3]),format:named?'name':'hex'};}match=matchers.hex4.exec(color);if(match){return {r:parseIntFromHex(match[1]+match[1]),g:parseIntFromHex(match[2]+match[2]),b:parseIntFromHex(match[3]+match[3]),a:convertHexToDecimal(match[4]+match[4]),format:named?'name':'hex8'};}match=matchers.hex3.exec(color);if(match){return {r:parseIntFromHex(match[1]+match[1]),g:parseIntFromHex(match[2]+match[2]),b:parseIntFromHex(match[3]+match[3]),format:named?'name':'hex'};}return false;}/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */function isValidCSSUnit(color){return Boolean(matchers.CSS_UNIT.exec(String(color)));}

var TinyColor=/** @class */function(){function TinyColor(color,opts){if(color===void 0){color='';}if(opts===void 0){opts={};}var _a;// If input is already a tinycolor, return itself
if(color instanceof TinyColor){// eslint-disable-next-line no-constructor-return
return color;}if(typeof color==='number'){color=numberInputToObject(color);}this.originalInput=color;var rgb=inputToRGB(color);this.originalInput=color;this.r=rgb.r;this.g=rgb.g;this.b=rgb.b;this.a=rgb.a;this.roundA=Math.round(100*this.a)/100;this.format=(_a=opts.format)!==null&&_a!==void 0?_a:rgb.format;this.gradientType=opts.gradientType;// Don't let the range of [0,255] come back in [0,1].
// Potentially lose a little bit of precision here, but will fix issues where
// .5 gets interpreted as half of the total, instead of half of 1
// If it was supposed to be 128, this was already taken care of by `inputToRgb`
if(this.r<1){this.r=Math.round(this.r);}if(this.g<1){this.g=Math.round(this.g);}if(this.b<1){this.b=Math.round(this.b);}this.isValid=rgb.ok;}TinyColor.prototype.isDark=function(){return this.getBrightness()<128;};TinyColor.prototype.isLight=function(){return !this.isDark();};/**
     * Returns the perceived brightness of the color, from 0-255.
     */TinyColor.prototype.getBrightness=function(){// http://www.w3.org/TR/AERT#color-contrast
var rgb=this.toRgb();return (rgb.r*299+rgb.g*587+rgb.b*114)/1000;};/**
     * Returns the perceived luminance of a color, from 0-1.
     */TinyColor.prototype.getLuminance=function(){// http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
var rgb=this.toRgb();var R;var G;var B;var RsRGB=rgb.r/255;var GsRGB=rgb.g/255;var BsRGB=rgb.b/255;if(RsRGB<=0.03928){R=RsRGB/12.92;}else {// eslint-disable-next-line prefer-exponentiation-operator
R=Math.pow((RsRGB+0.055)/1.055,2.4);}if(GsRGB<=0.03928){G=GsRGB/12.92;}else {// eslint-disable-next-line prefer-exponentiation-operator
G=Math.pow((GsRGB+0.055)/1.055,2.4);}if(BsRGB<=0.03928){B=BsRGB/12.92;}else {// eslint-disable-next-line prefer-exponentiation-operator
B=Math.pow((BsRGB+0.055)/1.055,2.4);}return 0.2126*R+0.7152*G+0.0722*B;};/**
     * Returns the alpha value of a color, from 0-1.
     */TinyColor.prototype.getAlpha=function(){return this.a;};/**
     * Sets the alpha value on the current color.
     *
     * @param alpha - The new alpha value. The accepted range is 0-1.
     */TinyColor.prototype.setAlpha=function(alpha){this.a=boundAlpha(alpha);this.roundA=Math.round(100*this.a)/100;return this;};/**
     * Returns the object as a HSVA object.
     */TinyColor.prototype.toHsv=function(){var hsv=rgbToHsv(this.r,this.g,this.b);return {h:hsv.h*360,s:hsv.s,v:hsv.v,a:this.a};};/**
     * Returns the hsva values interpolated into a string with the following format:
     * "hsva(xxx, xxx, xxx, xx)".
     */TinyColor.prototype.toHsvString=function(){var hsv=rgbToHsv(this.r,this.g,this.b);var h=Math.round(hsv.h*360);var s=Math.round(hsv.s*100);var v=Math.round(hsv.v*100);return this.a===1?"hsv("+h+", "+s+"%, "+v+"%)":"hsva("+h+", "+s+"%, "+v+"%, "+this.roundA+")";};/**
     * Returns the object as a HSLA object.
     */TinyColor.prototype.toHsl=function(){var hsl=rgbToHsl(this.r,this.g,this.b);return {h:hsl.h*360,s:hsl.s,l:hsl.l,a:this.a};};/**
     * Returns the hsla values interpolated into a string with the following format:
     * "hsla(xxx, xxx, xxx, xx)".
     */TinyColor.prototype.toHslString=function(){var hsl=rgbToHsl(this.r,this.g,this.b);var h=Math.round(hsl.h*360);var s=Math.round(hsl.s*100);var l=Math.round(hsl.l*100);return this.a===1?"hsl("+h+", "+s+"%, "+l+"%)":"hsla("+h+", "+s+"%, "+l+"%, "+this.roundA+")";};/**
     * Returns the hex value of the color.
     * @param allow3Char will shorten hex value to 3 char if possible
     */TinyColor.prototype.toHex=function(allow3Char){if(allow3Char===void 0){allow3Char=false;}return rgbToHex(this.r,this.g,this.b,allow3Char);};/**
     * Returns the hex value of the color -with a # appened.
     * @param allow3Char will shorten hex value to 3 char if possible
     */TinyColor.prototype.toHexString=function(allow3Char){if(allow3Char===void 0){allow3Char=false;}return '#'+this.toHex(allow3Char);};/**
     * Returns the hex 8 value of the color.
     * @param allow4Char will shorten hex value to 4 char if possible
     */TinyColor.prototype.toHex8=function(allow4Char){if(allow4Char===void 0){allow4Char=false;}return rgbaToHex(this.r,this.g,this.b,this.a,allow4Char);};/**
     * Returns the hex 8 value of the color -with a # appened.
     * @param allow4Char will shorten hex value to 4 char if possible
     */TinyColor.prototype.toHex8String=function(allow4Char){if(allow4Char===void 0){allow4Char=false;}return '#'+this.toHex8(allow4Char);};/**
     * Returns the object as a RGBA object.
     */TinyColor.prototype.toRgb=function(){return {r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a};};/**
     * Returns the RGBA values interpolated into a string with the following format:
     * "RGBA(xxx, xxx, xxx, xx)".
     */TinyColor.prototype.toRgbString=function(){var r=Math.round(this.r);var g=Math.round(this.g);var b=Math.round(this.b);return this.a===1?"rgb("+r+", "+g+", "+b+")":"rgba("+r+", "+g+", "+b+", "+this.roundA+")";};/**
     * Returns the object as a RGBA object.
     */TinyColor.prototype.toPercentageRgb=function(){var fmt=function(x){return Math.round(bound01(x,255)*100)+"%";};return {r:fmt(this.r),g:fmt(this.g),b:fmt(this.b),a:this.a};};/**
     * Returns the RGBA relative values interpolated into a string
     */TinyColor.prototype.toPercentageRgbString=function(){var rnd=function(x){return Math.round(bound01(x,255)*100);};return this.a===1?"rgb("+rnd(this.r)+"%, "+rnd(this.g)+"%, "+rnd(this.b)+"%)":"rgba("+rnd(this.r)+"%, "+rnd(this.g)+"%, "+rnd(this.b)+"%, "+this.roundA+")";};/**
     * The 'real' name of the color -if there is one.
     */TinyColor.prototype.toName=function(){if(this.a===0){return 'transparent';}if(this.a<1){return false;}var hex='#'+rgbToHex(this.r,this.g,this.b,false);for(var _i=0,_a=Object.entries(names);_i<_a.length;_i++){var _b=_a[_i],key=_b[0],value=_b[1];if(hex===value){return key;}}return false;};TinyColor.prototype.toString=function(format){var formatSet=Boolean(format);format=format!==null&&format!==void 0?format:this.format;var formattedString=false;var hasAlpha=this.a<1&&this.a>=0;var needsAlphaFormat=!formatSet&&hasAlpha&&(format.startsWith('hex')||format==='name');if(needsAlphaFormat){// Special case for "transparent", all other non-alpha formats
// will return rgba when there is transparency.
if(format==='name'&&this.a===0){return this.toName();}return this.toRgbString();}if(format==='rgb'){formattedString=this.toRgbString();}if(format==='prgb'){formattedString=this.toPercentageRgbString();}if(format==='hex'||format==='hex6'){formattedString=this.toHexString();}if(format==='hex3'){formattedString=this.toHexString(true);}if(format==='hex4'){formattedString=this.toHex8String(true);}if(format==='hex8'){formattedString=this.toHex8String();}if(format==='name'){formattedString=this.toName();}if(format==='hsl'){formattedString=this.toHslString();}if(format==='hsv'){formattedString=this.toHsvString();}return formattedString||this.toHexString();};TinyColor.prototype.toNumber=function(){return (Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b);};TinyColor.prototype.clone=function(){return new TinyColor(this.toString());};/**
     * Lighten the color a given amount. Providing 100 will always return white.
     * @param amount - valid between 1-100
     */TinyColor.prototype.lighten=function(amount){if(amount===void 0){amount=10;}var hsl=this.toHsl();hsl.l+=amount/100;hsl.l=clamp01(hsl.l);return new TinyColor(hsl);};/**
     * Brighten the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */TinyColor.prototype.brighten=function(amount){if(amount===void 0){amount=10;}var rgb=this.toRgb();rgb.r=Math.max(0,Math.min(255,rgb.r-Math.round(255*-(amount/100))));rgb.g=Math.max(0,Math.min(255,rgb.g-Math.round(255*-(amount/100))));rgb.b=Math.max(0,Math.min(255,rgb.b-Math.round(255*-(amount/100))));return new TinyColor(rgb);};/**
     * Darken the color a given amount, from 0 to 100.
     * Providing 100 will always return black.
     * @param amount - valid between 1-100
     */TinyColor.prototype.darken=function(amount){if(amount===void 0){amount=10;}var hsl=this.toHsl();hsl.l-=amount/100;hsl.l=clamp01(hsl.l);return new TinyColor(hsl);};/**
     * Mix the color with pure white, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return white.
     * @param amount - valid between 1-100
     */TinyColor.prototype.tint=function(amount){if(amount===void 0){amount=10;}return this.mix('white',amount);};/**
     * Mix the color with pure black, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return black.
     * @param amount - valid between 1-100
     */TinyColor.prototype.shade=function(amount){if(amount===void 0){amount=10;}return this.mix('black',amount);};/**
     * Desaturate the color a given amount, from 0 to 100.
     * Providing 100 will is the same as calling greyscale
     * @param amount - valid between 1-100
     */TinyColor.prototype.desaturate=function(amount){if(amount===void 0){amount=10;}var hsl=this.toHsl();hsl.s-=amount/100;hsl.s=clamp01(hsl.s);return new TinyColor(hsl);};/**
     * Saturate the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */TinyColor.prototype.saturate=function(amount){if(amount===void 0){amount=10;}var hsl=this.toHsl();hsl.s+=amount/100;hsl.s=clamp01(hsl.s);return new TinyColor(hsl);};/**
     * Completely desaturates a color into greyscale.
     * Same as calling `desaturate(100)`
     */TinyColor.prototype.greyscale=function(){return this.desaturate(100);};/**
     * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
     * Values outside of this range will be wrapped into this range.
     */TinyColor.prototype.spin=function(amount){var hsl=this.toHsl();var hue=(hsl.h+amount)%360;hsl.h=hue<0?360+hue:hue;return new TinyColor(hsl);};/**
     * Mix the current color a given amount with another color, from 0 to 100.
     * 0 means no mixing (return current color).
     */TinyColor.prototype.mix=function(color,amount){if(amount===void 0){amount=50;}var rgb1=this.toRgb();var rgb2=new TinyColor(color).toRgb();var p=amount/100;var rgba={r:(rgb2.r-rgb1.r)*p+rgb1.r,g:(rgb2.g-rgb1.g)*p+rgb1.g,b:(rgb2.b-rgb1.b)*p+rgb1.b,a:(rgb2.a-rgb1.a)*p+rgb1.a};return new TinyColor(rgba);};TinyColor.prototype.analogous=function(results,slices){if(results===void 0){results=6;}if(slices===void 0){slices=30;}var hsl=this.toHsl();var part=360/slices;var ret=[this];for(hsl.h=(hsl.h-(part*results>>1)+720)%360;--results;){hsl.h=(hsl.h+part)%360;ret.push(new TinyColor(hsl));}return ret;};/**
     * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
     */TinyColor.prototype.complement=function(){var hsl=this.toHsl();hsl.h=(hsl.h+180)%360;return new TinyColor(hsl);};TinyColor.prototype.monochromatic=function(results){if(results===void 0){results=6;}var hsv=this.toHsv();var h=hsv.h;var s=hsv.s;var v=hsv.v;var res=[];var modification=1/results;while(results--){res.push(new TinyColor({h:h,s:s,v:v}));v=(v+modification)%1;}return res;};TinyColor.prototype.splitcomplement=function(){var hsl=this.toHsl();var h=hsl.h;return [this,new TinyColor({h:(h+72)%360,s:hsl.s,l:hsl.l}),new TinyColor({h:(h+216)%360,s:hsl.s,l:hsl.l})];};/**
     * Compute how the color would appear on a background
     */TinyColor.prototype.onBackground=function(background){var fg=this.toRgb();var bg=new TinyColor(background).toRgb();return new TinyColor({r:bg.r+(fg.r-bg.r)*fg.a,g:bg.g+(fg.g-bg.g)*fg.a,b:bg.b+(fg.b-bg.b)*fg.a});};/**
     * Alias for `polyad(3)`
     */TinyColor.prototype.triad=function(){return this.polyad(3);};/**
     * Alias for `polyad(4)`
     */TinyColor.prototype.tetrad=function(){return this.polyad(4);};/**
     * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
     * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
     */TinyColor.prototype.polyad=function(n){var hsl=this.toHsl();var h=hsl.h;var result=[this];var increment=360/n;for(var i=1;i<n;i++){result.push(new TinyColor({h:(h+i*increment)%360,s:hsl.s,l:hsl.l}));}return result;};/**
     * compare color vs current color
     */TinyColor.prototype.equals=function(color){return this.toRgbString()===new TinyColor(color).toRgbString();};return TinyColor;}();function tinycolor(color,opts){if(color===void 0){color='';}if(opts===void 0){opts={};}return new TinyColor(color,opts);}

// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)
/**
 * AKA `contrast`
 *
 * Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
 */function readability(color1,color2){var c1=new TinyColor(color1);var c2=new TinyColor(color2);return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05)/(Math.min(c1.getLuminance(),c2.getLuminance())+0.05);}/**
 * Ensure that foreground and background color combinations meet WCAG2 guidelines.
 * The third argument is an object.
 *      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
 *      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
 * If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.
 *
 * Example
 * ```ts
 * new TinyColor().isReadable('#000', '#111') => false
 * new TinyColor().isReadable('#000', '#111', { level: 'AA', size: 'large' }) => false
 * ```
 */function isReadable(color1,color2,wcag2){var _a,_b;if(wcag2===void 0){wcag2={level:'AA',size:'small'};}var readabilityLevel=readability(color1,color2);switch(((_a=wcag2.level)!==null&&_a!==void 0?_a:'AA')+((_b=wcag2.size)!==null&&_b!==void 0?_b:'small')){case'AAsmall':case'AAAlarge':return readabilityLevel>=4.5;case'AAlarge':return readabilityLevel>=3;case'AAAsmall':return readabilityLevel>=7;default:return false;}}/**
 * Given a base color and a list of possible foreground or background
 * colors for that base, returns the most readable color.
 * Optionally returns Black or White if the most readable color is unreadable.
 *
 * @param baseColor - the base color.
 * @param colorList - array of colors to pick the most readable one from.
 * @param args - and object with extra arguments
 *
 * Example
 * ```ts
 * new TinyColor().mostReadable('#123', ['#124", "#125'], { includeFallbackColors: false }).toHexString(); // "#112255"
 * new TinyColor().mostReadable('#123', ['#124", "#125'],{ includeFallbackColors: true }).toHexString();  // "#ffffff"
 * new TinyColor().mostReadable('#a8015a', ["#faf3f3"], { includeFallbackColors:true, level: 'AAA', size: 'large' }).toHexString(); // "#faf3f3"
 * new TinyColor().mostReadable('#a8015a', ["#faf3f3"], { includeFallbackColors:true, level: 'AAA', size: 'small' }).toHexString(); // "#ffffff"
 * ```
 */function mostReadable(baseColor,colorList,args){if(args===void 0){args={includeFallbackColors:false,level:'AA',size:'small'};}var bestColor=null;var bestScore=0;var includeFallbackColors=args.includeFallbackColors,level=args.level,size=args.size;for(var _i=0,colorList_1=colorList;_i<colorList_1.length;_i++){var color=colorList_1[_i];var score=readability(baseColor,color);if(score>bestScore){bestScore=score;bestColor=new TinyColor(color);}}if(isReadable(baseColor,bestColor,{level:level,size:size})||!includeFallbackColors){return bestColor;}args.includeFallbackColors=false;return mostReadable(baseColor,['#fff','#000'],args);}

/**
 * Returns the color represented as a Microsoft filter for use in old versions of IE.
 */function toMsFilter(firstColor,secondColor){var color=new TinyColor(firstColor);var hex8String='#'+rgbaToArgbHex(color.r,color.g,color.b,color.a);var secondHex8String=hex8String;var gradientType=color.gradientType?'GradientType = 1, ':'';if(secondColor){var s=new TinyColor(secondColor);secondHex8String='#'+rgbaToArgbHex(s.r,s.g,s.b,s.a);}return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";}

/**
 * If input is an object, force 1 into "1.0" to handle ratios properly
 * String input requires "1.0" as input, so 1 will be treated as 1
 */function fromRatio(ratio,opts){var newColor={r:convertToPercentage(ratio.r),g:convertToPercentage(ratio.g),b:convertToPercentage(ratio.b)};if(ratio.a!==undefined){newColor.a=Number(ratio.a);}return new TinyColor(newColor,opts);}/** old random function */function legacyRandom(){return new TinyColor({r:Math.random(),g:Math.random(),b:Math.random()});}

// randomColor by David Merfield under the CC0 license
function random(options){if(options===void 0){options={};}// Check if we need to generate multiple colors
if(options.count!==undefined&&options.count!==null){var totalColors=options.count;var colors=[];options.count=undefined;while(totalColors>colors.length){// Since we're generating multiple colors,
// incremement the seed. Otherwise we'd just
// generate the same color each time...
options.count=null;if(options.seed){options.seed+=1;}colors.push(random(options));}options.count=totalColors;return colors;}// First we pick a hue (H)
var h=pickHue(options.hue,options.seed);// Then use H to determine saturation (S)
var s=pickSaturation(h,options);// Then use S and H to determine brightness (B).
var v=pickBrightness(h,s,options);var res={h:h,s:s,v:v};if(options.alpha!==undefined){res.a=options.alpha;}// Then we return the HSB color in the desired format
return new TinyColor(res);}function pickHue(hue,seed){var hueRange=getHueRange(hue);var res=randomWithin(hueRange,seed);// Instead of storing red as two seperate ranges,
// we group them, using negative numbers
if(res<0){res=360+res;}return res;}function pickSaturation(hue,options){if(options.hue==='monochrome'){return 0;}if(options.luminosity==='random'){return randomWithin([0,100],options.seed);}var saturationRange=getColorInfo(hue).saturationRange;var sMin=saturationRange[0];var sMax=saturationRange[1];switch(options.luminosity){case'bright':sMin=55;break;case'dark':sMin=sMax-10;break;case'light':sMax=55;break;default:break;}return randomWithin([sMin,sMax],options.seed);}function pickBrightness(H,S,options){var bMin=getMinimumBrightness(H,S);var bMax=100;switch(options.luminosity){case'dark':bMax=bMin+20;break;case'light':bMin=(bMax+bMin)/2;break;case'random':bMin=0;bMax=100;break;default:break;}return randomWithin([bMin,bMax],options.seed);}function getMinimumBrightness(H,S){var lowerBounds=getColorInfo(H).lowerBounds;for(var i=0;i<lowerBounds.length-1;i++){var s1=lowerBounds[i][0];var v1=lowerBounds[i][1];var s2=lowerBounds[i+1][0];var v2=lowerBounds[i+1][1];if(S>=s1&&S<=s2){var m=(v2-v1)/(s2-s1);var b=v1-m*s1;return m*S+b;}}return 0;}function getHueRange(colorInput){var num=parseInt(colorInput,10);if(!Number.isNaN(num)&&num<360&&num>0){return [num,num];}if(typeof colorInput==='string'){var namedColor=bounds.find(function(n){return n.name===colorInput;});if(namedColor){var color=defineColor(namedColor);if(color.hueRange){return color.hueRange;}}var parsed=new TinyColor(colorInput);if(parsed.isValid){var hue=parsed.toHsv().h;return [hue,hue];}}return [0,360];}function getColorInfo(hue){// Maps red colors to make picking hue easier
if(hue>=334&&hue<=360){hue-=360;}for(var _i=0,bounds_1=bounds;_i<bounds_1.length;_i++){var bound=bounds_1[_i];var color=defineColor(bound);if(color.hueRange&&hue>=color.hueRange[0]&&hue<=color.hueRange[1]){return color;}}throw Error('Color not found');}function randomWithin(range,seed){if(seed===undefined){return Math.floor(range[0]+Math.random()*(range[1]+1-range[0]));}// Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
var max=range[1]||1;var min=range[0]||0;seed=(seed*9301+49297)%233280;var rnd=seed/233280.0;return Math.floor(min+rnd*(max-min));}function defineColor(bound){var sMin=bound.lowerBounds[0][0];var sMax=bound.lowerBounds[bound.lowerBounds.length-1][0];var bMin=bound.lowerBounds[bound.lowerBounds.length-1][1];var bMax=bound.lowerBounds[0][1];return {name:bound.name,hueRange:bound.hueRange,lowerBounds:bound.lowerBounds,saturationRange:[sMin,sMax],brightnessRange:[bMin,bMax]};}/**
 * @hidden
 */var bounds=[{name:'monochrome',hueRange:null,lowerBounds:[[0,0],[100,0]]},{name:'red',hueRange:[-26,18],lowerBounds:[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]},{name:'orange',hueRange:[19,46],lowerBounds:[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]},{name:'yellow',hueRange:[47,62],lowerBounds:[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]},{name:'green',hueRange:[63,178],lowerBounds:[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]},{name:'blue',hueRange:[179,257],lowerBounds:[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]},{name:'purple',hueRange:[258,282],lowerBounds:[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]},{name:'pink',hueRange:[283,334],lowerBounds:[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]}];

const styles$v=r`:host{--spectrum-colorarea-default-width:var(
--spectrum-global-dimension-size-2400
);--spectrum-colorarea-default-height:var(
--spectrum-global-dimension-size-2400
);--spectrum-colorarea-border-radius:var(
--spectrum-alias-border-radius-medium
);--spectrum-colorarea-border-size:var(--spectrum-global-dimension-size-0);--spectrum-colorarea-border-color:undefined;--spectrum-colorarea-fill-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-colorarea-border-color-disabled:var(
--spectrum-global-color-gray-300
)}.slider{height:100%;left:0;margin:0;opacity:.0001;pointer-events:none;position:absolute;top:0;width:100%;z-index:0}:host([focused]) .handle{height:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2);margin-left:calc(-1*var(--spectrum-colorhandle-size,var(--spectrum-global-dimension-size-200)));margin-top:calc(-1*var(--spectrum-colorhandle-size,var(--spectrum-global-dimension-size-200)));width:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2)}:host{border-radius:var(
--spectrum-colorarea-border-radius,var(--spectrum-alias-border-radius-regular)
);cursor:default;display:inline-block;height:var(
--spectrum-colorarea-default-height,var(--spectrum-global-dimension-size-2400)
);position:relative;-webkit-user-select:none;user-select:none;width:var(
--spectrum-colorarea-default-width,var(--spectrum-global-dimension-size-2400)
)}:host([focused]){z-index:2}:host([disabled]){pointer-events:none}:host:before{border-radius:var(
--spectrum-colorarea-border-radius,var(--spectrum-alias-border-radius-regular)
);bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:1}.handle{left:0;top:0}.gradient{border-radius:var(
--spectrum-colorarea-border-radius,var(--spectrum-alias-border-radius-regular)
);height:100%;width:100%}:host:before{box-shadow:inset 0 0 0 var(
--spectrum-colorarea-border-size,var(--spectrum-alias-border-size-thin)
) var(--spectrum-colorarea-border-color)}.gradient{forced-color-adjust:none}:host([disabled]){background:var(
--spectrum-colorarea-fill-color-disabled,var(--spectrum-global-color-gray-300)
)}:host([disabled]):before{box-shadow:inset 0 0 0 var(
--spectrum-colorarea-border-size,var(--spectrum-alias-border-size-thin)
) var(
--spectrum-colorarea-border-color-disabled,var(--spectrum-global-color-gray-300)
)}:host([disabled]) .gradient{display:none}@media (forced-colors:active){:host{--spectrum-colorarea-fill-color-disabled:GrayText}:host([disabled]){forced-color-adjust:none}}:host{touch-action:none}:host:before{pointer-events:none}.gradient{overflow:hidden}.handle{transform:translate(var(--spectrum-colorarea-default-width))}::slotted(*){height:100%;width:100%}`;

/**
 * @element sp-color-area
 * @slot gradient - a custom gradient visually outlining the available color values
 */class ColorArea extends SpectrumElement{constructor(){super(...arguments);this.disabled=false;this.focused=false;this.labelX='saturation';this.labelY='luminosity';this._hue=0;this._color=new TinyColor({h:0,s:1,v:1});this._previousColor=new TinyColor({h:0,s:1,v:1});this._format={format:'',isString:false};this.activeAxis='x';this._x=1;this._y=0;this.step=0.01;this.altered=0;this.activeKeys=new Set();this._pointerDown=false;}static get styles(){return [styles$v];}get hue(){return this._hue;}set hue(value){const hue=Math.min(360,Math.max(0,value));if(hue===this.hue){return;}const oldValue=this.hue;const{s,v}=this._color.toHsv();this._color=new TinyColor({h:hue,s,v});this._hue=hue;this.requestUpdate('hue',oldValue);}get value(){return this.color;}get color(){switch(this._format.format){case'rgb':return this._format.isString?this._color.toRgbString():this._color.toRgb();case'prgb':return this._format.isString?this._color.toPercentageRgbString():this._color.toPercentageRgb();case'hex8':return this._format.isString?this._color.toHex8String():this._color.toHex8();case'name':return this._color.toName()||this._color.toRgbString();case'hsl':if(this._format.isString){const hslString=this._color.toHslString();return hslString.replace(replaceHueRegExp,`$1${this.hue}`);}else {const{s,l,a}=this._color.toHsl();return {h:this.hue,s,l,a};}case'hsv':if(this._format.isString){const hsvString=this._color.toHsvString();return hsvString.replace(replaceHueRegExp,`$1${this.hue}`);}else {const{s,v,a}=this._color.toHsv();return {h:this.hue,s,v,a};}case'hex':case'hex3':case'hex4':case'hex6':default:return this._format.isString?this._color.toHexString():this._color.toHex();}}set color(color){if(color===this.color){return;}const oldValue=this._color;this._color=new TinyColor(color);const format=this._color.format;let isString=typeof color==='string'||color instanceof String;if(format.startsWith('hex')){isString=color.startsWith('#');}this._format={format,isString};const{h,s,v}=this._color.toHsv();let originalHue=undefined;if(isString&&format.startsWith('hs')){const values=extractHueAndSaturationRegExp.exec(color);if(values!==null){const[,h]=values;originalHue=Number(h);}}else if(!isString&&format.startsWith('hs')){const colorInput=this._color.originalInput;const colorValues=Object.values(colorInput);originalHue=colorValues[0];}this.hue=originalHue||h;this.x=s;this.y=1-v;this.requestUpdate('color',oldValue);}get x(){return this._x;}set x(x){if(x===this.x){return;}const oldValue=this.x;if(this.inputX){// Use the native `input[type='range']` control to validate this value after `firstUpdate`
this.inputX.value=x.toString();this._x=this.inputX.valueAsNumber;}else {this._x=x;}this.requestUpdate('x',oldValue);}get y(){return this._y;}set y(y){if(y===this.y){return;}const oldValue=this.y;if(this.inputY){// Use the native `input[type='range']` control to validate this value after `firstUpdate`
this.inputY.value=y.toString();this._y=this.inputY.valueAsNumber;}else {this._y=y;}this.requestUpdate('y',oldValue);}focus(focusOptions={}){super.focus(focusOptions);this.forwardFocus();}forwardFocus(){const activeElement=this.getRootNode().activeElement;if(activeElement){let shouldFocus=false;try{// Browsers without support for the `:focus-visible`
// selector will throw on the following test (Safari, older things).
// Some won't throw, but will be focusing item rather than the menu and
// will rely on the polyfill to know whether focus is "visible" or not.
shouldFocus=activeElement.matches(':focus-visible')||activeElement.matches('.focus-visible');}catch(error){shouldFocus=activeElement.matches('.focus-visible');}this.focused=shouldFocus;}if(this.activeAxis==='x'){this.inputX.focus();}else {this.inputY.focus();}}handleFocusin(){this.focused=true;}handleFocusout(){if(this._pointerDown){return;}this.focused=false;}handleKeydown(event){const{code}=event;this.focused=true;this.altered=[event.shiftKey,event.ctrlKey,event.altKey].filter(key=>!!key).length;const isArrowKey=code.search('Arrow')===0;if(isArrowKey){event.preventDefault();this.activeKeys.add(code);this.handleKeypress();}}handleKeypress(){let deltaX=0;let deltaY=0;const step=Math.max(this.step,this.altered*5*this.step);this.activeKeys.forEach(code=>{switch(code){case'ArrowUp':deltaY=step*-1;break;case'ArrowDown':deltaY=step*1;break;case'ArrowLeft':deltaX=step*-1;break;case'ArrowRight':deltaX=step*1;break;/* c8 ignore next 2 */default:break;}});if(deltaX!=0){this.activeAxis='x';this.inputX.focus();}else if(deltaY!=0){this.activeAxis='y';this.inputY.focus();}this.x=Math.min(1,Math.max(this.x+deltaX,0));this.y=Math.min(1,Math.max(this.y+deltaY,0));this._previousColor=this._color.clone();this._color=new TinyColor({h:this.hue,s:this.x,v:1-this.y});if(deltaX!=0||deltaY!=0){this.dispatchEvent(new Event('input',{bubbles:true,composed:true}));const applyDefault=this.dispatchEvent(new Event('change',{bubbles:true,composed:true,cancelable:true}));if(!applyDefault){this._color=this._previousColor;}}}handleKeyup(event){event.preventDefault();const{code}=event;this.activeKeys.delete(code);}handleInput(event){const{valueAsNumber,name}=event.target;this[name]=valueAsNumber;this._color=new TinyColor({h:this.hue,s:this.x,v:1-this.y});}handleChange(event){this.handleInput(event);this.dispatchEvent(new Event('change',{bubbles:true,composed:true,cancelable:true}));}handlePointerdown(event){if(event.button!==0){event.preventDefault();return;}this._pointerDown=true;this._previousColor=this._color.clone();this.boundingClientRect=this.getBoundingClientRect();event.target.setPointerCapture(event.pointerId);if(event.pointerType==='mouse'){this.focused=true;}}handlePointermove(event){const[x,y]=this.calculateHandlePosition(event);this._color=new TinyColor({h:this.hue,s:x,v:1-y});this.x=x;this.y=y;this.dispatchEvent(new Event('input',{bubbles:true,composed:true,cancelable:true}));}handlePointerup(event){event.preventDefault();this._pointerDown=false;event.target.releasePointerCapture(event.pointerId);const applyDefault=this.dispatchEvent(new Event('change',{bubbles:true,composed:true,cancelable:true}));this.inputX.focus();if(event.pointerType==='mouse'){this.focused=false;}if(!applyDefault){this._color=this._previousColor;}}/**
     * Returns the value under the cursor
     * @param: PointerEvent on slider
     * @return: Slider value that correlates to the position under the pointer
     */calculateHandlePosition(event){/* c8 ignore next 3 */if(!this.boundingClientRect){return [this.x,this.y];}const rect=this.boundingClientRect;const minOffsetX=rect.left;const minOffsetY=rect.top;const offsetX=event.clientX;const offsetY=event.clientY;const width=rect.width;const height=rect.height;const percentX=Math.max(0,Math.min(1,(offsetX-minOffsetX)/width));const percentY=Math.max(0,Math.min(1,(offsetY-minOffsetY)/height));return [percentX,percentY];}handleAreaPointerdown(event){if(event.button!==0){return;}event.stopPropagation();event.preventDefault();this.handle.dispatchEvent(new PointerEvent('pointerdown',event));this.handlePointermove(event);}render(){var _a,_b;const{width=0,height=0}=this.boundingClientRect||{};return p`<div @pointerdown="${this.handleAreaPointerdown}" class="gradient" style="background:linear-gradient(to top,#000 0,hsla(${this.hue},100%,0,0) 100%),linear-gradient(to right,#fff 0,hsla(${this.hue},100%,0,0) 100%),hsl(${this.hue},100%,50%)"><slot name="gradient"></slot></div><sp-color-handle tabindex="${l(this.focused?undefined:'0')}" @focus="${this.forwardFocus}" ?focused="${this.focused}" class="handle" color="${this._color.toHslString()}" ?disabled="${this.disabled}" style="transform:translate(${this.x*width}px,${this.y*height}px)" ${streamingListener({start:['pointerdown',this.handlePointerdown],streamInside:['pointermove',this.handlePointermove],end:[['pointerup','pointercancel'],this.handlePointerup]})}></sp-color-handle><div><input type="range" class="slider" name="x" aria-label="${(_a=this.label)!==null&&_a!==void 0?_a:this.labelX}" min="0" max="1" step="${this.step}" tabindex="-1" .value="${String(this.x)}" @input="${this.handleInput}" @change="${this.handleChange}"></div><div><input type="range" class="slider" name="y" aria-label="${(_b=this.label)!==null&&_b!==void 0?_b:this.labelY}" min="0" max="1" step="${this.step}" tabindex="-1" .value="${String(this.y)}" @input="${this.handleInput}" @change="${this.handleChange}"></div>`;}firstUpdated(changed){super.firstUpdated(changed);this.boundingClientRect=this.getBoundingClientRect();this.addEventListener('focusin',this.handleFocusin);this.addEventListener('focusout',this.handleFocusout);this.addEventListener('keyup',this.handleKeyup);this.addEventListener('keydown',this.handleKeydown);}updated(changed){super.updated(changed);if(this.x!==this.inputX.valueAsNumber){this.x=this.inputX.valueAsNumber;}if(this.y!==this.inputY.valueAsNumber){this.y=this.inputY.valueAsNumber;}if(changed.has('focused')&&this.focused){// Lazily bind the `input[type="range"]` elements in shadow roots
// so that browsers with certain settings (Webkit) aren't allowed
// multiple tab stops within the Color Area.
const parentX=this.inputX.parentElement;const parentY=this.inputY.parentElement;if(!parentX.shadowRoot&&!parentY.shadowRoot){parentX.attachShadow({mode:'open'});parentY.attachShadow({mode:'open'});const slot='<div tabindex="-1"><slot></slot></div>';parentX.shadowRoot.innerHTML=slot;parentY.shadowRoot.innerHTML=slot;}}}connectedCallback(){var _a;super.connectedCallback();if(!this.observer&&window.ResizeObserver){this.observer=new window.ResizeObserver(entries=>{for(const entry of entries){this.boundingClientRect=entry.contentRect;}this.requestUpdate();});}(_a=this.observer)===null||_a===void 0?void 0:_a.observe(this);}disconnectedCallback(){var _a;(_a=this.observer)===null||_a===void 0?void 0:_a.unobserve(this);super.disconnectedCallback();}}__decorate([e({type:Boolean,reflect:true})],ColorArea.prototype,"disabled",void 0);__decorate([e({type:Boolean,reflect:true})],ColorArea.prototype,"focused",void 0);__decorate([e({type:String})],ColorArea.prototype,"label",void 0);__decorate([e({type:String,attribute:'label-x'})],ColorArea.prototype,"labelX",void 0);__decorate([e({type:String,attribute:'label-y'})],ColorArea.prototype,"labelY",void 0);__decorate([i('.handle')],ColorArea.prototype,"handle",void 0);__decorate([e({type:Number})],ColorArea.prototype,"hue",null);__decorate([e({type:String})],ColorArea.prototype,"value",null);__decorate([e({type:String})],ColorArea.prototype,"color",null);__decorate([e({attribute:false})],ColorArea.prototype,"activeAxis",void 0);__decorate([e({type:Number})],ColorArea.prototype,"x",null);__decorate([e({type:Number})],ColorArea.prototype,"y",null);__decorate([e({type:Number})],ColorArea.prototype,"step",void 0);__decorate([i('[name="x"]')],ColorArea.prototype,"inputX",void 0);__decorate([i('[name="y"]')],ColorArea.prototype,"inputY",void 0);

iliadCustomElementsDefine('sp-color-area',ColorArea);

const styles$u=r`:host{--spectrum-colorslider-default-length:var(
--spectrum-global-dimension-size-2400
);--spectrum-colorslider-height:var(--spectrum-global-dimension-size-150);--spectrum-colorslider-vertical-width:var(
--spectrum-global-dimension-size-150
);--spectrum-colorslider-vertical-default-length:var(
--spectrum-global-dimension-size-2400
);--spectrum-colorslider-border-radius:var(
--spectrum-alias-border-radius-medium
);--spectrum-colorarea-border-color:undefined;--spectrum-colorslider-border-size:var(--spectrum-alias-border-size-s);--spectrum-colorslider-border-color:var(--spectrum-alias-border-color-100);--spectrum-colorslider-fill-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-colorslider-border-color-disabled:var(
--spectrum-global-color-gray-300
)}:host{--spectrum-colorslider-handle-hitarea-border-radius:0%;--spectrum-colorslider-handle-hitarea-width:var(
--spectrum-global-dimension-size-300
);--spectrum-colorslider-handle-hitarea-height:var(
--spectrum-global-dimension-size-300
)}:host([focused]) .handle{height:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2);margin-left:calc(-1*var(--spectrum-colorhandle-size,var(--spectrum-global-dimension-size-200)));margin-top:calc(-1*var(--spectrum-colorhandle-size,var(--spectrum-global-dimension-size-200)));width:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2)}.slider{height:100%;left:0;margin:0;opacity:.0001;pointer-events:none;position:absolute;top:0;width:100%;z-index:0}:host{cursor:default;display:block;height:var(
--spectrum-colorslider-height,var(--spectrum-global-dimension-size-300)
);position:relative;-webkit-user-select:none;user-select:none;width:var(
--spectrum-colorslider-default-length,var(--spectrum-global-dimension-size-2400)
)}:host([focused]){z-index:2}:host([disabled]){pointer-events:none}:host([vertical]){display:inline-block;height:var(
--spectrum-colorslider-vertical-default-length,var(--spectrum-global-dimension-size-2400)
);width:var(
--spectrum-colorslider-vertical-width,var(--spectrum-global-dimension-size-300)
)}:host([vertical]) .handle{left:50%;top:0}.handle{left:0;top:50%}.handle:after{border-radius:var(
--spectrum-colorslider-handle-hitarea-border-radius
);height:var(--spectrum-colorslider-handle-hitarea-height);width:var(--spectrum-colorslider-handle-hitarea-width)}.checkerboard{background-position:0 0,0 var(--spectrum-global-dimension-static-size-100,8px),var(--spectrum-global-dimension-static-size-100,8px) calc(-1*var(--spectrum-global-dimension-static-size-100,8px)),calc(-1*var(--spectrum-global-dimension-static-size-100,8px)) 0;background-size:var(--spectrum-global-dimension-static-size-200,16px) var(--spectrum-global-dimension-static-size-200,16px)}.checkerboard:before{border-radius:var(
--spectrum-colorslider-border-radius,var(--spectrum-alias-border-radius-regular)
);bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:1}.checkerboard,.gradient{border-radius:var(
--spectrum-colorslider-border-radius,var(--spectrum-alias-border-radius-regular)
);height:100%;width:100%}:host{--spectrum-colorslider-border-color:var(
--spectrum-colorarea-border-color
)}.checkerboard{background-color:var(
--spectrum-global-color-static-white,#fff
);background-image:linear-gradient(-45deg,transparent 75.5%,var(--spectrum-global-color-static-gray-500,#bcbcbc) 75.5%),linear-gradient(45deg,transparent 75.5%,var(--spectrum-global-color-static-gray-500,#bcbcbc) 75.5%),linear-gradient(-45deg,var(--spectrum-global-color-static-gray-500,#bcbcbc) 25.5%,transparent 25.5%),linear-gradient(45deg,var(--spectrum-global-color-static-gray-500,#bcbcbc) 25.5%,transparent 25.5%)}.checkerboard:before{box-shadow:inset 0 0 0 var(
--spectrum-colorslider-border-size,var(--spectrum-alias-border-size-thin)
) var(--spectrum-colorslider-border-color)}:host([disabled]) .checkerboard{background:var(
--spectrum-colorslider-fill-color-disabled,var(--spectrum-global-color-gray-300)
)}:host([disabled]) .checkerboard:before{box-shadow:0 0 0 var(
--spectrum-colorslider-border-size,var(--spectrum-alias-border-size-thin)
) var(
--spectrum-colorslider-border-color-disabled,var(--spectrum-global-color-gray-300)
)}:host([disabled]) .gradient{display:none}@media (forced-colors:active){:host{--spectrum-colorslider-border-color-disabled:GrayText;--spectrum-colorslider-fill-color-disabled:Canvas}:host{forced-color-adjust:none}}:host{--sp-color-slider-gradient-fallback:red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%;touch-action:none}:host(:focus){outline:0}:host(:not([vertical])){touch-action:pan-y}:host([vertical]){touch-action:pan-x}.gradient{overflow:hidden}::slotted(*){height:100%;width:100%}`;

/**
 * @element sp-color-slider
 * @slot gradient - a custom gradient visually outlining the available color values
 */class ColorSlider extends Focusable{constructor(){super(...arguments);this.disabled=false;this.focused=false;this.label='hue';this.vertical=false;this._value=0;this.sliderHandlePosition=0;this._color=new TinyColor({h:0,s:1,v:1});this._previousColor=new TinyColor({h:0,s:1,v:1});this._format={format:'',isString:false};this.step=1;this._altered=0;this._pointerDown=false;}static get styles(){return [styles$u];}get value(){return this._value;}set value(hue){const value=Math.min(360,Math.max(0,hue));if(value===this.value){return;}const oldValue=this.value;const{s,v}=this._color.toHsv();this._color=new TinyColor({h:value,s,v});this._value=value;if(value!==this.sliderHandlePosition){this.sliderHandlePosition=100*(value/360);}this.requestUpdate('value',oldValue);}get color(){switch(this._format.format){case'rgb':return this._format.isString?this._color.toRgbString():this._color.toRgb();case'prgb':return this._format.isString?this._color.toPercentageRgbString():this._color.toPercentageRgb();case'hex':case'hex3':case'hex4':case'hex6':return this._format.isString?this._color.toHexString():this._color.toHex();case'hex8':return this._format.isString?this._color.toHex8String():this._color.toHex8();case'name':return this._color.toName()||this._color.toRgbString();case'hsl':if(this._format.isString){const hslString=this._color.toHslString();return hslString.replace(replaceHueAndSaturationRegExp,`$1${this.value}$2${this._saturation}`);}else {const{s,l,a}=this._color.toHsl();return {h:this.value,s,l,a};}case'hsv':if(this._format.isString){const hsvString=this._color.toHsvString();return hsvString.replace(replaceHueAndSaturationRegExp,`$1${this.value}$2${this._saturation}`);}else {const{s,v,a}=this._color.toHsv();return {h:this.value,s,v,a};}default:return 'No color format applied.';}}set color(color){if(color===this.color){return;}const oldValue=this._color;this._color=new TinyColor(color);const format=this._color.format;let isString=typeof color==='string'||color instanceof String;if(format.startsWith('hex')){isString=color.startsWith('#');}this._format={format,isString};if(isString&&format.startsWith('hs')){const values=extractHueAndSaturationRegExp.exec(color);if(values!==null){const[,h,s]=values;this.value=Number(h);this._saturation=Number(s);}}else if(!isString&&format.startsWith('hs')){const colorInput=this._color.originalInput;const colorValues=Object.values(colorInput);this.value=colorValues[0];this._saturation=colorValues[1];}else {const{h}=this._color.toHsv();this.value=h;}this._previousColor=oldValue;this.requestUpdate('color',oldValue);}get altered(){return this._altered;}set altered(altered){this._altered=altered;this.step=Math.max(1,this.altered*10);}get focusElement(){return this.input;}handleKeydown(event){const{key}=event;this.focused=true;this.altered=[event.shiftKey,event.ctrlKey,event.altKey].filter(key=>!!key).length;let delta=0;switch(key){case'ArrowUp':delta=this.step;break;case'ArrowDown':delta=-this.step;break;case'ArrowLeft':delta=this.step*(this.isLTR?-1:1);break;case'ArrowRight':delta=this.step*(this.isLTR?1:-1);break;default:return;}event.preventDefault();this.sliderHandlePosition=Math.min(100,Math.max(0,this.sliderHandlePosition+delta));this.value=360*(this.sliderHandlePosition/100);this._color=new TinyColor(Object.assign(Object.assign({},this._color.toHsl()),{h:this.value}));if(delta!=0){this.dispatchEvent(new Event('input',{bubbles:true,composed:true}));this.dispatchEvent(new Event('change',{bubbles:true,composed:true}));}}handleInput(event){const{valueAsNumber}=event.target;this.value=valueAsNumber;this.sliderHandlePosition=100*(this.value/360);this._color=new TinyColor(Object.assign(Object.assign({},this._color.toHsl()),{h:this.value}));}handleChange(event){this.handleInput(event);this.dispatchEvent(new Event('change',{bubbles:true,composed:true}));}focus(focusOptions={}){super.focus(focusOptions);this.forwardFocus();}forwardFocus(){const activeElement=this.getRootNode().activeElement;if(activeElement){let shouldFocus=false;try{// Browsers without support for the `:focus-visible`
// selector will throw on the following test (Safari, older things).
// Some won't throw, but will be focusing item rather than the menu and
// will rely on the polyfill to know whether focus is "visible" or not.
shouldFocus=activeElement.matches(':focus-visible')||activeElement.matches('.focus-visible');}catch(error){shouldFocus=activeElement.matches('.focus-visible');}this.focused=shouldFocus;}this.input.focus();}handleFocusin(){this.focused=true;}handleFocusout(){if(this._pointerDown){return;}this.altered=0;this.focused=false;}handlePointerdown(event){if(event.button!==0){event.preventDefault();return;}this._pointerDown=true;this._previousColor=this._color.clone();this.boundingClientRect=this.getBoundingClientRect();event.target.setPointerCapture(event.pointerId);if(event.pointerType==='mouse'){this.focused=true;}}handlePointermove(event){this.sliderHandlePosition=this.calculateHandlePosition(event);this.value=360*(this.sliderHandlePosition/100);this._color=new TinyColor(Object.assign(Object.assign({},this._color.toHsl()),{h:this.value}));this.dispatchEvent(new Event('input',{bubbles:true,composed:true,cancelable:true}));}handlePointerup(event){this._pointerDown=false;event.target.releasePointerCapture(event.pointerId);const applyDefault=this.dispatchEvent(new Event('change',{bubbles:true,composed:true,cancelable:true}));if(!applyDefault){this._color=this._previousColor;}// Retain focus on input element after mouse up to enable keyboard interactions
this.focus();if(event.pointerType==='mouse'){this.focused=false;}}/**
     * Returns the value under the cursor
     * @param: PointerEvent on slider
     * @return: Slider value that correlates to the position under the pointer
     */calculateHandlePosition(event){/* c8 ignore next 3 */if(!this.boundingClientRect){return this.sliderHandlePosition;}const rect=this.boundingClientRect;const minOffset=this.vertical?rect.top:rect.left;const offset=this.vertical?event.clientY:event.clientX;const size=this.vertical?rect.height:rect.width;const percent=Math.max(0,Math.min(1,(offset-minOffset)/size));const sliderHandlePosition=100*percent;return sliderHandlePosition;}handleGradientPointerdown(event){if(event.button!==0){return;}event.stopPropagation();event.preventDefault();this.handle.dispatchEvent(new PointerEvent('pointerdown',event));this.handlePointermove(event);}render(){return p`
            <div
                class="checkerboard"
                role="presentation"
                @pointerdown=${this.handleGradientPointerdown}
            >
                <div
                    class="gradient"
                    role="presentation"
                    style="background: linear-gradient(to ${this.vertical?'bottom':'right'}, var(--sp-color-slider-gradient, var(--sp-color-slider-gradient-fallback)));"
                >
                    <slot name="gradient"></slot>
                </div>
            </div>
            <sp-color-handle
                tabindex=${l(this.focused?undefined:'0')}
                @focus=${this.forwardFocus}
                ?focused=${this.focused}
                class="handle"
                color="hsl(${this.value}, 100%, 50%)"
                ?disabled=${this.disabled}
                style="${this.vertical?'top':'left'}: ${this.sliderHandlePosition}%"
                ${streamingListener({start:['pointerdown',this.handlePointerdown],streamInside:['pointermove',this.handlePointermove],end:[['pointerup','pointercancel'],this.handlePointerup]})}
            ></sp-color-handle>
            <input
                type="range"
                class="slider"
                min="0"
                max="360"
                step=${this.step}
                aria-label=${this.label}
                .value=${String(this.value)}
                @input=${this.handleInput}
                @change=${this.handleChange}
                @keydown=${this.handleKeydown}
            />
        `;}firstUpdated(changed){super.firstUpdated(changed);this.boundingClientRect=this.getBoundingClientRect();this.addEventListener('focusin',this.handleFocusin);this.addEventListener('focusout',this.handleFocusout);}}__decorate([e({type:Boolean,reflect:true})],ColorSlider.prototype,"disabled",void 0);__decorate([e({type:Boolean,reflect:true})],ColorSlider.prototype,"focused",void 0);__decorate([i('.handle')],ColorSlider.prototype,"handle",void 0);__decorate([e({type:String})],ColorSlider.prototype,"label",void 0);__decorate([e({type:Boolean,reflect:true})],ColorSlider.prototype,"vertical",void 0);__decorate([e({type:Number})],ColorSlider.prototype,"value",null);__decorate([e({type:Number,reflect:true})],ColorSlider.prototype,"sliderHandlePosition",void 0);__decorate([e({type:String})],ColorSlider.prototype,"color",null);__decorate([e({type:Number})],ColorSlider.prototype,"step",void 0);__decorate([i('input')],ColorSlider.prototype,"input",void 0);

iliadCustomElementsDefine('sp-color-slider',ColorSlider);

const styles$t=r`:host{--spectrum-colorhandle-size:var(--spectrum-global-dimension-size-200);--spectrum-colorwheel-border-size:var(--spectrum-alias-border-size-thin);--spectrum-colorwheel-border-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-colorwheel-fill-color-disabled:var(
--spectrum-global-color-gray-300
)}:host{--spectrum-colorwheel-border-radius:100%;--spectrum-colorwheel-width:calc(var(--spectrum-global-dimension-size-125)*16);--spectrum-colorwheel-height:var(--spectrum-colorwheel-width)}:host([focused]) .handle{height:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2);margin-left:calc(-1*var(--spectrum-colorhandle-size,var(--spectrum-global-dimension-size-200)));margin-top:calc(-1*var(--spectrum-colorhandle-size,var(--spectrum-global-dimension-size-200)));width:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2)}.slider{height:100%;left:0;margin:0;opacity:.0001;pointer-events:none;position:absolute;top:0;width:100%;z-index:0}:host{border-radius:var(--spectrum-colorwheel-border-radius);cursor:default;display:block;height:var(--spectrum-colorwheel-height);position:relative;-webkit-user-select:none;user-select:none;width:var(--spectrum-colorwheel-width)}:host([focused]){z-index:2}:host([disabled]){pointer-events:none}:host([dragged]){z-index:2}::slotted([slot=gradient]){border-radius:100%;border-style:solid;border-width:var(
--spectrum-colorwheel-border-size,var(--spectrum-alias-border-size-thin)
);box-sizing:border-box;height:var(--spectrum-colorwheel-height);position:relative;width:var(--spectrum-colorwheel-width);z-index:0}.wheel{position:relative;z-index:1}.innerCircle,.outerCircle{fill:transparent;stroke-width:var(
--spectrum-colorwheel-border-size,var(--spectrum-alias-border-size-thin)
)}.handle{left:50%;top:50%}:host{--spectrum-colorwheel-border-color:var(
--spectrum-colorarea-border-color
)}:host([disabled]) .innerCircle,:host([disabled]) .outerCircle{stroke:var(
--spectrum-colorwheel-border-color-disabled,var(--spectrum-global-color-gray-300)
)}:host([disabled]) .outerCircle{fill:var(
--spectrum-colorwheel-fill-color-disabled,var(--spectrum-global-color-gray-300)
)}:host([disabled]) .segment{display:none}::slotted([slot=gradient]){border-color:var(
--spectrum-colorwheel-border-color
)}.innerCircle,.outerCircle{stroke:var(
--spectrum-colorwheel-border-color
)}@media (forced-colors:active){:host{--spectrum-colorwheel-border-color-disabled:GrayText;--spectrum-colorwheel-fill-color-disabled:Canvas}:host{forced-color-adjust:none}}:host{touch-action:none}:host(:focus){outline:0}.wheel{background:conic-gradient(from 90deg,red,#ff8000,#ff0,#80ff00,#0f0,#00ff80,#0ff,#0080ff,#00f,#8000ff,#f0f,#ff0080,red);height:100%;width:100%}.wheel:after,.wheel:before{border:var(
--spectrum-colorwheel-border-size,var(--spectrum-alias-border-size-thin)
) solid var(--spectrum-colorwheel-border-color);border-radius:50%;content:"";position:absolute}.wheel:after{inset:0}.wheel:before{inset:24px}:host([disabled]) .wheel:after,:host([disabled]) .wheel:before{border-color:var(
--spectrum-colorwheel-border-color-disabled,var(--spectrum-global-color-gray-300)
)}:host([disabled]) .wheel{background:var(
--spectrum-colorwheel-fill-color-disabled,var(--spectrum-global-color-gray-300)
)}`;

/**
 * @element sp-color-wheel
 * @slot gradient - a custom gradient visually outlining the available color values
 */class ColorWheel extends Focusable{constructor(){super(...arguments);this.disabled=false;this.focused=false;this.label='hue';this.step=1;this._value=0;this._color=new TinyColor({h:0,s:1,v:1});this._previousColor=new TinyColor({h:0,s:1,v:1});this._format={format:'',isString:false};this._altered=0;this._pointerDown=false;}static get styles(){return [styles$t];}get value(){return this._value;}set value(hue){const value=Math.min(360,Math.max(0,hue));if(value===this.value){return;}const oldValue=this.value;const{s,v}=this._color.toHsv();this._color=new TinyColor({h:value,s,v});this._value=value;this.requestUpdate('value',oldValue);}get color(){switch(this._format.format){case'rgb':return this._format.isString?this._color.toRgbString():this._color.toRgb();case'prgb':return this._format.isString?this._color.toPercentageRgbString():this._color.toPercentageRgb();case'hex':case'hex3':case'hex4':case'hex6':return this._format.isString?this._color.toHexString():this._color.toHex();case'hex8':return this._format.isString?this._color.toHex8String():this._color.toHex8();case'name':return this._color.toName()||this._color.toRgbString();case'hsl':if(this._format.isString){const hslString=this._color.toHslString();return hslString.replace(replaceHueAndSaturationRegExp,`$1${this.value}$2${this._saturation}`);}else {const{s,l,a}=this._color.toHsl();return {h:this.value,s,l,a};}case'hsv':if(this._format.isString){const hsvString=this._color.toHsvString();return hsvString.replace(replaceHueAndSaturationRegExp,`$1${this.value}$2${this._saturation}`);}else {const{s,v,a}=this._color.toHsv();return {h:this.value,s,v,a};}default:return 'No color format applied.';}}set color(color){if(color===this.color){return;}const oldValue=this._color;this._color=new TinyColor(color);const format=this._color.format;let isString=typeof color==='string'||color instanceof String;if(format.startsWith('hex')){isString=color.startsWith('#');}this._format={format,isString};if(isString&&format.startsWith('hs')){const values=extractHueAndSaturationRegExp.exec(color);if(values!==null){const[,h,s]=values;this.value=Number(h);this._saturation=Number(s);}}else if(!isString&&format.startsWith('hs')){const colorInput=this._color.originalInput;const colorValues=Object.values(colorInput);this.value=colorValues[0];this._saturation=colorValues[1];}else {const{h}=this._color.toHsv();this.value=h;}this.requestUpdate('color',oldValue);}get altered(){return this._altered;}set altered(altered){this._altered=altered;this.step=Math.max(1,this.altered*10);}get focusElement(){return this.input;}handleKeydown(event){const{key}=event;this.focused=true;this.altered=[event.shiftKey,event.ctrlKey,event.altKey].filter(key=>!!key).length;let delta=0;switch(key){case'ArrowUp':delta=this.step;break;case'ArrowDown':delta=-this.step;break;case'ArrowLeft':delta=this.step*(this.isLTR?-1:1);break;case'ArrowRight':delta=this.step*(this.isLTR?1:-1);break;default:return;}event.preventDefault();this.value=(360+this.value+delta)%360;this._previousColor=this._color.clone();this._color=new TinyColor(Object.assign(Object.assign({},this._color.toHsl()),{h:this.value}));this.dispatchEvent(new Event('input',{bubbles:true,composed:true}));const applyDefault=this.dispatchEvent(new Event('change',{bubbles:true,composed:true,cancelable:true}));if(!applyDefault){this._color=this._previousColor;}}handleInput(event){const{valueAsNumber}=event.target;this.value=valueAsNumber;this._color=new TinyColor(Object.assign(Object.assign({},this._color.toHsl()),{h:this.value}));}handleChange(event){this.handleInput(event);this.dispatchEvent(new Event('change',{bubbles:true,composed:true}));}focus(focusOptions={}){super.focus(focusOptions);this.forwardFocus();}forwardFocus(){const activeElement=this.getRootNode().activeElement;if(activeElement){let shouldFocus=false;try{// Browsers without support for the `:focus-visible`
// selector will throw on the following test (Safari, older things).
// Some won't throw, but will be focusing item rather than the menu and
// will rely on the polyfill to know whether focus is "visible" or not.
shouldFocus=activeElement.matches(':focus-visible')||activeElement.matches('.focus-visible');}catch(error){shouldFocus=activeElement.matches('.focus-visible');}this.focused=shouldFocus;}this.input.focus();}handleFocusin(){this.focused=true;}handleFocusout(){if(this._pointerDown){return;}this.altered=0;this.focused=false;}handlePointerdown(event){if(event.button!==0){event.preventDefault();return;}this._pointerDown=true;this._previousColor=this._color.clone();this.boundingClientRect=this.getBoundingClientRect();event.target.setPointerCapture(event.pointerId);if(event.pointerType==='mouse'){this.focused=true;}}handlePointermove(event){this.value=this.calculateHandlePosition(event);this._color=new TinyColor(Object.assign(Object.assign({},this._color.toHsl()),{h:this.value}));this.dispatchEvent(new Event('input',{bubbles:true,composed:true,cancelable:true}));}handlePointerup(event){this._pointerDown=false;event.target.releasePointerCapture(event.pointerId);const applyDefault=this.dispatchEvent(new Event('change',{bubbles:true,composed:true,cancelable:true}));if(!applyDefault){this._color=this._previousColor;}// Retain focus on input element after mouse up to enable keyboard interactions
this.focus();if(event.pointerType==='mouse'){this.focused=false;}}/**
     * Returns the value under the cursor
     * @param: PointerEvent on slider
     * @return: Slider value that correlates to the position under the pointer
     */calculateHandlePosition(event){/* c8 ignore next 3 */if(!this.boundingClientRect){return this.value;}const rect=this.boundingClientRect;const{width,height,left,top}=rect;const centerX=left+width/2;const centerY=top+height/2;const pointX=event.clientX-centerX;const pointY=event.clientY-centerY;const value=Math.atan2(pointY,pointX)*180/Math.PI;return (360+(360+value))%360;}handleGradientPointerdown(event){if(event.button!==0||event.target.classList.contains('innerCircle')){return;}event.stopPropagation();event.preventDefault();this.handle.dispatchEvent(new PointerEvent('pointerdown',event));this.handlePointermove(event);}render(){const{width:diameter=160}=this.boundingClientRect||{};const radius=diameter/2;const trackWidth=24;const innerRadius=radius-trackWidth;const innerDiameter=innerRadius*2;const clipPath=`path(evenodd, "M ${radius} ${radius} m -${radius} 0 a ${radius} ${radius} 0 1 0 ${diameter} 0 a ${radius} ${radius} 0 1 0 -${diameter} 0 M ${radius} ${radius} m -${innerRadius} 0 a ${innerRadius} ${innerRadius} 0 1 0 ${innerDiameter} 0 a ${innerRadius} ${innerRadius} 0 1 0 -${innerDiameter} 0")`;const handleLocationStyles=`transform: translate(${(radius-12.5)*Math.cos(this.value*Math.PI/180)}px, ${(radius-12.5)*Math.sin(this.value*Math.PI/180)}px);`;return p`<slot name="gradient" @pointerdown="${this.handleGradientPointerdown}"><div class="wheel" style="clip-path:${clipPath}"></div></slot><sp-color-handle tabindex="${l(this.focused?undefined:'0')}" @focus="${this.forwardFocus}" ?focused="${this.focused}" class="handle" color="hsl(${this.value}, 100%, 50%)" ?disabled="${this.disabled}" style="${handleLocationStyles}" ${streamingListener({start:['pointerdown',this.handlePointerdown],streamInside:['pointermove',this.handlePointermove],end:[['pointerup','pointercancel'],this.handlePointerup]})}></sp-color-handle><input type="range" class="slider" aria-label="${this.label}" min="0" max="360" step="${this.step}" .value="${String(this.value)}" @input="${this.handleInput}" @change="${this.handleChange}" @keydown="${this.handleKeydown}">`;}firstUpdated(changed){super.firstUpdated(changed);this.boundingClientRect=this.getBoundingClientRect();this.addEventListener('focusin',this.handleFocusin);this.addEventListener('focusout',this.handleFocusout);}connectedCallback(){var _a;super.connectedCallback();if(!this.observer&&window.ResizeObserver){this.observer=new window.ResizeObserver(entries=>{for(const entry of entries){this.boundingClientRect=entry.contentRect;}this.requestUpdate();});}(_a=this.observer)===null||_a===void 0?void 0:_a.observe(this);}disconnectedCallback(){var _a;(_a=this.observer)===null||_a===void 0?void 0:_a.unobserve(this);super.disconnectedCallback();}}__decorate([e({type:Boolean,reflect:true})],ColorWheel.prototype,"disabled",void 0);__decorate([e({type:Boolean,reflect:true})],ColorWheel.prototype,"focused",void 0);__decorate([i('.handle')],ColorWheel.prototype,"handle",void 0);__decorate([e({type:String})],ColorWheel.prototype,"label",void 0);__decorate([e({type:Number})],ColorWheel.prototype,"step",void 0);__decorate([e({type:Number})],ColorWheel.prototype,"value",null);__decorate([e({type:String})],ColorWheel.prototype,"color",null);__decorate([i('input')],ColorWheel.prototype,"input",void 0);

iliadCustomElementsDefine('sp-color-wheel',ColorWheel);

const Cross500Icon=()=>{return tag$2`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" aria-hidden="true" fill="currentColor"><path d="M8.457 7l4.54-4.54a1.03 1.03 0 00-1.458-1.456L7 5.543l-4.54-4.54a1.03 1.03 0 00-1.457 1.458L5.543 7l-4.54 4.54a1.03 1.03 0 101.457 1.456L7 8.457l4.54 4.54a1.03 1.03 0 001.456-1.458z"/></svg>`;};

/**
 * @element sp-icon-cross500
 */class IconCross500 extends IconBase{render(){setCustomTemplateLiteralTag$2(p);return Cross500Icon();}}

iliadCustomElementsDefine('sp-icon-cross500',IconCross500);

const styles$s=r`:host{--spectrum-dialog-confirm-min-width:var(
--spectrum-global-dimension-static-size-3600
);--spectrum-dialog-confirm-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-dialog-confirm-title-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-dialog-confirm-title-text-line-height:var(
--spectrum-alias-heading-text-line-height
);--spectrum-dialog-confirm-divider-margin-top:var(
--spectrum-global-dimension-static-size-150
);--spectrum-dialog-confirm-divider-margin-bottom:var(
--spectrum-global-dimension-static-size-200
);--spectrum-dialog-confirm-description-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-dialog-confirm-description-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-dialog-error-width:90%;--spectrum-dialog-confirm-title-text-color:var(
--spectrum-global-color-gray-900
);--spectrum-dialog-confirm-description-text-color:var(
--spectrum-global-color-gray-800
);--spectrum-dialog-confirm-icon-color:var(--spectrum-global-color-gray-900);--spectrum-dialog-error-icon-color:var(
--spectrum-semantic-negative-color-icon
)}:host{--spectrum-dialog-fullscreen-header-text-size:28px;--spectrum-dialog-confirm-small-width:400px;--spectrum-dialog-confirm-medium-width:480px;--spectrum-dialog-confirm-large-width:640px;--spectrum-dialog-error-width:var(--spectrum-dialog-confirm-medium-width);--spectrum-dialog-confirm-hero-height:var(
--spectrum-global-dimension-size-1600
);--spectrum-dialog-confirm-description-padding:var(
--spectrum-global-dimension-size-25
);--spectrum-dialog-confirm-description-margin:calc(var(--spectrum-global-dimension-size-25)*-1);--spectrum-dialog-confirm-footer-padding-top:var(
--spectrum-global-dimension-static-size-500,40px
);--spectrum-dialog-confirm-gap-size:var(
--spectrum-global-dimension-size-200
);--spectrum-dialog-confirm-buttongroup-padding-top:var(
--spectrum-global-dimension-static-size-500,40px
);--spectrum-dialog-confirm-close-button-size:var(
--spectrum-global-dimension-size-400
);--spectrum-dialog-confirm-close-button-padding:calc(26px - var(--spectrum-global-dimension-size-175));--spectrum-dialog-confirm-divider-height:var(
--spectrum-global-dimension-static-size-25,2px
)}:host{box-sizing:border-box;display:flex;max-height:inherit;max-width:100%;min-width:var(
--spectrum-dialog-confirm-min-width,var(--spectrum-global-dimension-static-size-3600)
);outline:0;width:-moz-fit-content;width:fit-content}:host([size=s]){width:var(
--spectrum-dialog-confirm-small-width
)}:host([size=m]){width:var(
--spectrum-dialog-confirm-medium-width
)}:host([size=l]){width:var(
--spectrum-dialog-confirm-large-width
)}::slotted([slot=hero]){background-position:50%;background-size:cover;border-top-left-radius:var(
--spectrum-dialog-confirm-border-radius,var(--spectrum-global-dimension-size-50)
);border-top-right-radius:var(
--spectrum-dialog-confirm-border-radius,var(--spectrum-global-dimension-size-50)
);grid-area:hero;height:var(--spectrum-dialog-confirm-hero-height);overflow:hidden}.grid{display:grid;grid-template-areas:"hero hero    hero    hero        hero        hero" ".    .       .       .           .           ." ".    heading header  header      typeIcon    ." ".    divider divider divider     divider     ." ".    content content content     content     ." ".    footer  footer  buttonGroup buttonGroup ." ".    .       .       .           .           .";grid-template-columns:var(--spectrum-dialog-confirm-padding) auto 1fr auto minmax(0,auto) var(--spectrum-dialog-confirm-padding);grid-template-rows:auto var(--spectrum-dialog-confirm-padding) auto auto 1fr auto var(
--spectrum-dialog-confirm-padding
);width:100%}:host([dir=ltr]) ::slotted([slot=heading]){padding-right:var(
--spectrum-dialog-confirm-gap-size
)}:host([dir=rtl]) ::slotted([slot=heading]){padding-left:var(
--spectrum-dialog-confirm-gap-size
)}::slotted([slot=heading]){font-size:var(--spectrum-dialog-confirm-title-text-size);font-weight:var(
--spectrum-dialog-confirm-title-text-font-weight,var(--spectrum-global-font-weight-bold)
);grid-area:heading;line-height:var(
--spectrum-dialog-confirm-title-text-line-height,var(--spectrum-alias-heading-text-line-height)
);margin:0;outline:0}:host([dir=ltr]) .no-header::slotted([slot=heading]){padding-right:0}:host([dir=rtl]) .no-header::slotted([slot=heading]){padding-left:0}.no-header::slotted([slot=heading]){grid-area:heading-start/heading-start/header-end/header-end}.header{align-items:center;box-sizing:border-box;display:flex;grid-area:header;justify-content:flex-end;outline:0}.type-icon{grid-area:typeIcon}.divider{grid-area:divider;margin-bottom:var(
--spectrum-dialog-confirm-divider-margin-bottom,var(--spectrum-global-dimension-static-size-200)
);margin-top:var(
--spectrum-dialog-confirm-divider-margin-top,var(--spectrum-global-dimension-static-size-150)
);width:100%}:host([no-divider]) .divider{display:none}:host([no-divider]) ::slotted([slot=heading]){padding-bottom:calc(var(--spectrum-dialog-confirm-divider-margin-top,var(--spectrum-global-dimension-static-size-150)) + var(--spectrum-dialog-confirm-divider-margin-bottom,var(--spectrum-global-dimension-static-size-200)) + var(--spectrum-dialog-confirm-divider-height))}.content{-webkit-overflow-scrolling:touch;box-sizing:border-box;font-size:var(--spectrum-dialog-confirm-description-text-size);font-weight:var(
--spectrum-dialog-confirm-description-text-font-weight,var(--spectrum-global-font-weight-regular)
);grid-area:content;line-height:var(
--spectrum-dialog-confirm-description-text-line-height,var(--spectrum-alias-component-text-line-height)
);margin:0 var(--spectrum-dialog-confirm-description-margin);overflow-y:auto;padding:0 var(--spectrum-dialog-confirm-description-padding)}.content,.footer{outline:0}.footer{display:flex;flex-wrap:wrap;grid-area:footer;padding-top:var(--spectrum-dialog-confirm-footer-padding-top)}.footer>.button+.button,.footer>::slotted(*){margin-bottom:0}:host([dir=ltr]) .buttonGroup{padding-left:var(
--spectrum-dialog-confirm-gap-size
)}:host([dir=rtl]) .buttonGroup{padding-right:var(
--spectrum-dialog-confirm-gap-size
)}.buttonGroup{display:flex;grid-area:buttonGroup;justify-content:flex-end;padding-top:var(--spectrum-dialog-confirm-buttongroup-padding-top)}.buttonGroup.buttonGroup--noFooter{grid-area:footer-start/footer-start/buttonGroup-end/buttonGroup-end}:host([dismissable]) .grid{grid-template-areas:"hero hero    hero    hero        hero        hero        hero" ".    .       .       .           .           closeButton closeButton" ".    heading header  header      typeIcon    closeButton closeButton" ".    divider divider divider     divider     divider     ." ".    content content content     content     content     ." ".    footer  footer  buttonGroup buttonGroup buttonGroup ." ".    .       .       .           .           .           .";grid-template-columns:var(--spectrum-dialog-confirm-padding) auto 1fr auto minmax(0,auto) minmax(0,var(--spectrum-dialog-confirm-close-button-size)) var(--spectrum-dialog-confirm-padding);grid-template-rows:auto var(--spectrum-dialog-confirm-padding) auto auto 1fr auto var(
--spectrum-dialog-confirm-padding
)}:host([dismissable]) .grid .buttonGroup{display:none}:host([dismissable]) .grid .footer{grid-area:footer/footer/buttonGroup/buttonGroup}:host([dir=ltr]) .close-button{margin-right:var(
--spectrum-dialog-confirm-close-button-padding
)}:host([dir=rtl]) .close-button{margin-left:var(
--spectrum-dialog-confirm-close-button-padding
)}.close-button{align-self:start;grid-area:closeButton;justify-self:end;margin-top:var(--spectrum-dialog-confirm-close-button-padding)}:host([error]){width:var(
--spectrum-dialog-error-width,90%
)}:host([mode=fullscreen]){height:100%;width:100%}:host([mode=fullscreenTakeover]){border-radius:0;height:100%;width:100%}:host([mode=fullscreenTakeover]) ::slotted([slot=heading]),:host([mode=fullscreen]) ::slotted([slot=heading]){font-size:var(
--spectrum-dialog-fullscreen-header-text-size
)}@media screen and (max-inline-size:700px){.grid{grid-template-areas:"hero hero    hero    hero        hero        hero" ".    .       .       .           .           ." ".    heading heading heading     typeIcon    ." ".    header  header  header      header      ." ".    divider divider divider     divider     ." ".    content content content     content     ." ".    footer  footer  buttonGroup buttonGroup ." ".    .       .       .           .           .";grid-template-columns:var(--spectrum-dialog-confirm-padding) auto 1fr auto minmax(0,auto) var(--spectrum-dialog-confirm-padding);grid-template-rows:auto var(--spectrum-dialog-confirm-padding) auto auto auto 1fr auto var(
--spectrum-dialog-confirm-padding
)}:host([dismissable]) .grid{grid-template-areas:"hero hero    hero    hero        hero        hero        hero" ".    .       .       .           .           closeButton closeButton" ".    heading heading heading     typeIcon    closeButton closeButton" ".    header  header  header      header      header      ." ".    divider divider divider     divider     divider     ." ".    content content content     content     content     ." ".    footer  footer  buttonGroup buttonGroup buttonGroup ." ".    .       .       .           .           .           .";grid-template-columns:var(--spectrum-dialog-confirm-padding) auto 1fr auto minmax(0,auto) minmax(0,var(--spectrum-dialog-confirm-close-button-size)) var(--spectrum-dialog-confirm-padding);grid-template-rows:auto var(--spectrum-dialog-confirm-padding) auto auto auto 1fr auto var(
--spectrum-dialog-confirm-padding
)}.header{justify-content:flex-start}:host([mode=fullscreenTakeover]) .grid,:host([mode=fullscreen]) .grid{display:grid;grid-template-areas:".    .            ." ".    heading      ." ".    header       ." ".    divider      ." ".    content      ." ".    buttonGroup  ." ".    .            .";grid-template-columns:var(--spectrum-dialog-confirm-padding) 1fr var(
--spectrum-dialog-confirm-padding
);grid-template-rows:var(--spectrum-dialog-confirm-padding) auto auto auto 1fr auto var(
--spectrum-dialog-confirm-padding
)}:host([mode=fullscreenTakeover]) .buttonGroup,:host([mode=fullscreen]) .buttonGroup{padding-top:var(--spectrum-dialog-confirm-buttongroup-padding-top)}:host([mode=fullscreenTakeover]) ::slotted([slot=heading]),:host([mode=fullscreen]) ::slotted([slot=heading]){font-size:var(--spectrum-dialog-confirm-title-text-size)}}@media (forced-colors:active){:host{border:solid}}::slotted([slot=heading]){color:var(
--spectrum-dialog-confirm-title-text-color,var(--spectrum-global-color-gray-900)
)}.content{color:var(
--spectrum-dialog-confirm-description-text-color,var(--spectrum-global-color-gray-800)
)}.type-icon{color:var(
--spectrum-dialog-confirm-icon-color,var(--spectrum-global-color-gray-900)
)}:host([error]) .type-icon{color:var(
--spectrum-dialog-error-icon-color,var(--spectrum-semantic-negative-color-icon)
)}.content{overflow:hidden}.footer{color:var(
--spectrum-dialog-confirm-description-text-color,var(--spectrum-global-color-gray-800)
)}.content[tabindex]{overflow:auto}::slotted(img[slot=hero]){height:auto;width:100%}:host([mode=fullscreenTakeover]),:host([mode=fullscreen]){max-height:none;max-width:none}:host([mode=fullscreenTakeover]) .grid,:host([mode=fullscreen]) .grid{display:grid;grid-template-areas:".    .       .       .            ." ".    heading header  buttonGroup  ." ".    divider divider divider      ." ".    content content content      ." ".    .       .       .            .";grid-template-columns:var(--spectrum-dialog-confirm-padding) 1fr auto auto var(
--spectrum-dialog-confirm-padding
);grid-template-rows:var(--spectrum-dialog-confirm-padding) auto auto 1fr var(
--spectrum-dialog-confirm-padding
)}:host([mode=fullscreenTakeover]) ::slotted([slot=heading]),:host([mode=fullscreen]) ::slotted([slot=heading]){font-size:28px}:host([mode=fullscreenTakeover]) .content,:host([mode=fullscreen]) .content{max-height:none}:host([mode=fullscreenTakeover]) .buttonGroup,:host([mode=fullscreenTakeover]) .footer,:host([mode=fullscreen]) .buttonGroup,:host([mode=fullscreen]) .footer{padding-top:0}:host([mode=fullscreenTakeover]) .footer,:host([mode=fullscreen]) .footer{display:none}:host([mode=fullscreenTakeover]) .buttonGroup,:host([mode=fullscreen]) .buttonGroup{align-self:start;grid-area:buttonGroup}`;

/**
 * @element sp-dialog
 *
 * @slot hero - Accepts a hero image to display at the top of the dialog
 * @slot heading - Acts as the heading of the dialog. This should be an actual heading tag `<h1-6 />`
 * @slot - Content not addressed to a specific slot will be interpreted as the main content of the dialog
 * @slot footer - Content addressed to the `footer` will be placed below the main content and to the side of any `[slot='button']` content
 * @slot button - Button elements addressed to this slot may be placed below the content when not delivered in a fullscreen mode
 * @fires close - Announces that the dialog has been closed.
 */class Dialog extends FocusVisiblePolyfillMixin(ObserveSlotPresence(SpectrumElement,['[slot="hero"]','[slot="footer"]','[slot="button"]'])){constructor(){super(...arguments);this.error=false;this.dismissable=false;this.noDivider=false;this.shouldManageTabOrderForScrolling=()=>{const{offsetHeight,scrollHeight}=this.contentElement;if(offsetHeight<scrollHeight){this.contentElement.tabIndex=0;}else {this.contentElement.removeAttribute('tabindex');}};}static get styles(){return [styles$s,styles$R];}get hasFooter(){return this.getSlotContentPresence('[slot="footer"]');}get hasButtons(){return this.getSlotContentPresence('[slot="button"]');}get hasHero(){return this.getSlotContentPresence('[slot="hero"]');}focus(){if(this.shadowRoot){const firstFocusable=this.shadowRoot.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [focusable]');if(firstFocusable){if(firstFocusable.updateComplete){firstFocusable.updateComplete.then(()=>firstFocusable.focus());/* c8 ignore next 3 */}else {firstFocusable.focus();}this.removeAttribute('tabindex');}/* c8 ignore next 3 */}else {super.focus();}}close(){this.dispatchEvent(new Event('close',{bubbles:true}));}render(){return p`<div class="grid"><slot name="hero"></slot><slot name="heading" class="${l(this.hasHero?this.hasHero:undefined)}"></slot>${this.error?p`<sp-icon-alert class="type-icon"></sp-icon-alert>`:p``} ${this.noDivider?p``:p`<sp-divider size="m" class="divider"></sp-divider>`}<div class="content"><slot @slotchange="${this.onContentSlotChange}"></slot></div>${this.hasFooter?p`<div class="footer"><slot name="footer"></slot></div>`:p``} ${this.hasButtons?p`<sp-button-group class="buttonGroup ${this.hasFooter?'':'buttonGroup--noFooter'}"><slot name="button"></slot></sp-button-group>`:p``} ${this.dismissable?p`<sp-action-button class="close-button" label="Close" quiet size="m" @click="${this.close}"><sp-icon-cross500 class="spectrum-UIIcon-Cross500" slot="icon"></sp-icon-cross500></sp-action-button>`:p``}</div>`;}shouldUpdate(changes){if(changes.has('mode')&&!!this.mode){this.dismissable=false;}if(changes.has('dismissable')&&this.dismissable){this.dismissable=!this.mode;}return super.shouldUpdate(changes);}onContentSlotChange(){this.shouldManageTabOrderForScrolling();}connectedCallback(){super.connectedCallback();window.addEventListener('resize',this.shouldManageTabOrderForScrolling);}disconnectedCallback(){window.removeEventListener('resize',this.shouldManageTabOrderForScrolling);super.disconnectedCallback();}}__decorate([i('.content')],Dialog.prototype,"contentElement",void 0);__decorate([e({type:Boolean,reflect:true})],Dialog.prototype,"error",void 0);__decorate([e({type:Boolean,reflect:true})],Dialog.prototype,"dismissable",void 0);__decorate([e({type:Boolean,reflect:true,attribute:'no-divider'})],Dialog.prototype,"noDivider",void 0);__decorate([e({type:String,reflect:true})],Dialog.prototype,"mode",void 0);__decorate([e({type:String,reflect:true})],Dialog.prototype,"size",void 0);

iliadCustomElementsDefine('sp-dialog',Dialog);

const styles$r=r`:host{--spectrum-dialog-confirm-entry-animation-distance:var(
--spectrum-global-dimension-size-250
);--spectrum-dialog-confirm-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-dialog-confirm-exit-animation-duration:var(
--spectrum-global-animation-duration-100
);--spectrum-dialog-confirm-entry-animation-duration:var(
--spectrum-global-animation-duration-500
);--spectrum-dialog-confirm-entry-animation-delay:var(
--spectrum-global-animation-duration-200
);--spectrum-dialog-confirm-background-color:var(
--spectrum-alias-background-color-default
)}:host{align-items:center;box-sizing:border-box;display:flex;height:100vh;height:-webkit-fill-available;height:fill-available;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:visibility 0s linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden;width:100vw;z-index:2}:host([open]){visibility:visible}@media only screen and (max-device-height:350px),only screen and (max-device-width:400px){:host([responsive]){border-radius:0;height:100%;max-height:100%;max-width:100%;width:100%}:host([responsive]){margin-top:0}}.modal{opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0s linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]) .modal{opacity:1;pointer-events:auto;transition-delay:0s;visibility:visible}:host{--spectrum-dialog-confirm-exit-animation-delay:0ms;--spectrum-dialog-fullscreen-margin:32px;--spectrum-dialog-max-height:90vh}.modal{border-radius:var(
--spectrum-dialog-confirm-border-radius,var(--spectrum-global-dimension-size-50)
);max-height:var(--spectrum-dialog-max-height);outline:0;overflow:hidden;pointer-events:auto;transform:translateY(var(
--spectrum-dialog-confirm-entry-animation-distance,var(--spectrum-global-dimension-size-250)
));transition:opacity var(
--spectrum-dialog-confirm-exit-animation-duration,var(--spectrum-global-animation-duration-100)
) cubic-bezier(.5,0,1,1) var(--spectrum-dialog-confirm-exit-animation-delay,0ms),visibility 0s linear calc(var(--spectrum-dialog-confirm-exit-animation-delay,0ms) + var(--spectrum-dialog-confirm-exit-animation-duration,var(--spectrum-global-animation-duration-100))),transform 0s linear calc(var(--spectrum-dialog-confirm-exit-animation-delay,0ms) + var(--spectrum-dialog-confirm-exit-animation-duration,var(--spectrum-global-animation-duration-100)));z-index:2}:host([open]) .modal{transform:translateY(0);transition:transform var(
--spectrum-dialog-confirm-entry-animation-duration,var(--spectrum-global-animation-duration-500)
) cubic-bezier(0,0,.4,1) var(
--spectrum-dialog-confirm-entry-animation-delay,var(--spectrum-global-animation-duration-200)
),opacity var(
--spectrum-dialog-confirm-entry-animation-duration,var(--spectrum-global-animation-duration-500)
) cubic-bezier(0,0,.4,1) var(
--spectrum-dialog-confirm-entry-animation-delay,var(--spectrum-global-animation-duration-200)
)}@media only screen and (max-device-height:350px),only screen and (max-device-width:400px){:host([responsive]) .modal{border-radius:0;height:100%;max-height:100%;max-width:100%;width:100%}}.fullscreen{bottom:var(--spectrum-dialog-fullscreen-margin);left:var(
--spectrum-dialog-fullscreen-margin
);right:var(--spectrum-dialog-fullscreen-margin);top:var(--spectrum-dialog-fullscreen-margin)}.fullscreen,.fullscreenTakeover{max-height:none;max-width:none;position:fixed}.fullscreenTakeover{border:none;border-radius:0;bottom:0;box-sizing:border-box;left:0;right:0;top:0}.fullscreenTakeover,:host([open]) .fullscreenTakeover{transform:none}.modal{background:var(
--spectrum-dialog-confirm-background-color,var(--spectrum-alias-background-color-default)
)}:host{height:calc(100vh - var(--swc-body-margins-block,0 * 1px));width:calc(100vw - var(--swc-body-margins-inline,0 * 1px))}`;

/**
 * @element sp-dialog-wrapper
 *
 * @slot - content for the dialog
 * @fires secondary - Announces that the "secondary" button has been clicked.
 * @fires cancel - Announces that the "cancel" button has been clicked.
 * @fires confirm - Announces that the "confirm" button has been clicked.
 * @fires close - Announces that the dialog has been closed.
 */class DialogWrapper extends FocusVisiblePolyfillMixin(SpectrumElement){constructor(){super(...arguments);this.error=false;this.cancelLabel='';this.confirmLabel='';this.dismissable=false;this.footer='';this.hero='';this.heroLabel='';this.noDivider=false;this.open=false;this.secondaryLabel='';this.headline='';this.responsive=false;this.underlay=false;}static get styles(){return [styles$r];}focus(){if(this.shadowRoot){const firstFocusable=this.shadowRoot.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [focusable]');if(firstFocusable){if(firstFocusable.updateComplete){firstFocusable.updateComplete.then(()=>firstFocusable.focus());/* c8 ignore next 3 */}else {firstFocusable.focus();}this.removeAttribute('tabindex');}else {this.dialog.focus();}/* c8 ignore next 3 */}else {super.focus();}}dismiss(){if(!this.dismissable){return;}this.close();}clickSecondary(){this.dispatchEvent(new Event('secondary',{bubbles:true}));}clickCancel(){this.dispatchEvent(new Event('cancel',{bubbles:true}));}clickConfirm(){this.dispatchEvent(new Event('confirm',{bubbles:true}));}close(){this.open=false;this.dispatchEvent(new Event('close',{bubbles:true}));}render(){return p`${this.underlay?p`<sp-underlay ?open="${this.open}" @click="${this.dismiss}"></sp-underlay>`:p``}<div class="modal ${this.mode}"><sp-dialog ?dismissable="${this.dismissable}" ?no-divider="${this.noDivider}" ?error="${this.error}" mode="${l(this.mode?this.mode:undefined)}" size="${l(this.size?this.size:undefined)}" @close="${this.close}">${this.hero?p`<img src="${this.hero}" slot="hero" aria-hidden="${l(this.heroLabel?undefined:'true')}" alt="${l(this.heroLabel?this.heroLabel:undefined)}">`:p``} ${this.headline?p`<h2 slot="heading">${this.headline}</h2>`:p``}<slot></slot>${this.footer?p`<div slot="footer">${this.footer}</div>`:p``} ${this.secondaryLabel?p`<sp-button variant="primary" slot="button" @click="${this.clickSecondary}">${this.secondaryLabel}</sp-button>`:p``} ${this.cancelLabel?p`<sp-button variant="secondary" slot="button" @click="${this.clickCancel}">${this.cancelLabel}</sp-button>`:p``} ${this.confirmLabel?p`<sp-button variant="cta" slot="button" @click="${this.clickConfirm}">${this.confirmLabel}</sp-button>`:p``}</sp-dialog></div>`;}updated(changes){if(changes.has('open')&&this.open){this.dialog.updateComplete.then(()=>{this.dialog.shouldManageTabOrderForScrolling();});}}}__decorate([e({type:Boolean,reflect:true})],DialogWrapper.prototype,"error",void 0);__decorate([e({attribute:'cancel-label'})],DialogWrapper.prototype,"cancelLabel",void 0);__decorate([e({attribute:'confirm-label'})],DialogWrapper.prototype,"confirmLabel",void 0);__decorate([e({type:Boolean,reflect:true})],DialogWrapper.prototype,"dismissable",void 0);__decorate([e()],DialogWrapper.prototype,"footer",void 0);__decorate([e()],DialogWrapper.prototype,"hero",void 0);__decorate([e({attribute:'hero-label'})],DialogWrapper.prototype,"heroLabel",void 0);__decorate([e({type:Boolean,reflect:true,attribute:'no-divider'})],DialogWrapper.prototype,"noDivider",void 0);__decorate([e({type:Boolean,reflect:true})],DialogWrapper.prototype,"open",void 0);__decorate([e({type:String,reflect:true})],DialogWrapper.prototype,"mode",void 0);__decorate([e({type:String,reflect:true})],DialogWrapper.prototype,"size",void 0);__decorate([e({attribute:'secondary-label'})],DialogWrapper.prototype,"secondaryLabel",void 0);__decorate([e()],DialogWrapper.prototype,"headline",void 0);__decorate([e({type:Boolean})],DialogWrapper.prototype,"responsive",void 0);__decorate([e({type:Boolean})],DialogWrapper.prototype,"underlay",void 0);__decorate([i('sp-dialog')],DialogWrapper.prototype,"dialog",void 0);

iliadCustomElementsDefine('sp-dialog-wrapper',DialogWrapper);

const styles$q=r`:host{--spectrum-dropzone-border-width:var(--spectrum-alias-border-size-thick);--spectrum-dropzone-border-radius:var(
--spectrum-alias-border-radius-regular
);--spectrum-dropzone-padding:var(--spectrum-global-dimension-size-900);--spectrum-dropzone-border-color:var(--spectrum-global-color-gray-300);--spectrum-dropzone-border-color-selected-hover:var(
--spectrum-global-color-blue-400
);--spectrum-dropzone-background-color-selected-hover:var(
--spectrum-alias-highlight-selected
)}:host{border-radius:var(
--spectrum-dropzone-border-radius,var(--spectrum-alias-border-radius-regular)
);border-style:dashed;border-width:var(
--spectrum-dropzone-border-width,var(--spectrum-alias-border-size-thick)
);padding:var(
--spectrum-dropzone-padding,var(--spectrum-global-dimension-size-900)
);text-align:center}:host([dragged]){border-style:solid}:host(:focus){border-style:dashed;outline:0}:host(:focus.focus-visible){border-style:solid}:host(:focus:focus-visible){border-style:solid}:host{border-color:var(
--spectrum-dropzone-border-color,var(--spectrum-global-color-gray-300)
)}:host([dragged]){background-color:var(
--spectrum-dropzone-background-color-selected-hover,var(--spectrum-alias-highlight-selected)
);border-color:var(
--spectrum-dropzone-border-color-selected-hover,var(--spectrum-global-color-blue-400)
)}:host([dragged]) ::slotted(*){color:var(
--spectrum-global-color-blue-400
)}:host(:focus){border-color:var(
--spectrum-dropzone-border-color,var(--spectrum-global-color-gray-300)
)}:host(:focus) ::slotted(*){color:var(
--spectrum-global-color-static-gray-500,#bcbcbc
)}:host(:focus.focus-visible){border-color:var(
--spectrum-dropzone-border-color-selected-hover,var(--spectrum-global-color-blue-400)
)}:host(:focus:focus-visible){border-color:var(
--spectrum-dropzone-border-color-selected-hover,var(--spectrum-global-color-blue-400)
)}:host(:focus[dragged].focus-visible) ::slotted(*){color:var(
--spectrum-global-color-blue-400
)}:host(:focus[dragged]:focus-visible) ::slotted(*){color:var(
--spectrum-global-color-blue-400
)}:host{--spectrum-dropzone-illustration-color:var(
--spectrum-global-color-static-blue-400
);display:block}::slotted(*){font-family:var(
--spectrum-body-m-text-font-family,var(--spectrum-alias-body-text-font-family)
);font-size:var(
--spectrum-body-s-text-size,var(--spectrum-alias-font-size-default)
);font-style:var(
--spectrum-body-s-text-font-style,var(--spectrum-global-font-style-regular)
);font-weight:var(
--spectrum-body-s-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);letter-spacing:var(
--spectrum-body-s-text-letter-spacing,var(--spectrum-global-font-letter-spacing-none)
);line-height:var(
--spectrum-body-s-text-line-height,var(--spectrum-alias-body-text-line-height)
);margin-bottom:0;margin-top:0;text-transform:var(--spectrum-body-s-text-transform,none)}:host([dragged]) ::slotted(*){--spectrum-global-color-gray-500:var(
--spectrum-dropzone-illustration-color
)}`;

/**
 * @element sp-dropzone
 *
 * @slot - The default slot on an `sp-dropzone` is a great place to place upload instructions
 * built with an `sp-illustrated-message` or other information, possibly even built from data
 * provided by the upload, to support users successfully interacting with the drag and drop
 * based features of your application
 *
 * @fires sp-dropzone-should-accept - A cancellable event that confirms whether or not
 * a file dropped on the UI should be accepted.
 * @fires sp-dropzone-dragover - Announces when files have been dragged over the UI, but not yet dropped.
 * @fires sp-dropzone-dragleave - Announces when dragged files have been moved out of the UI without having been dropped.
 * @fires sp-dropzone-drop - Announces when dragged files have been dropped on the UI.
 */class Dropzone extends SpectrumElement{constructor(){super(...arguments);this._dropEffect='copy';this.isDragged=false;this.debouncedDragLeave=null;}static get styles(){return [styles$q];}/**
     * Controls the feedback (typically visual) the user is given during a drag and drop operation
     * @attr
     * @type {'copy' | 'move' | 'link' | 'none'}
     */get dropEffect(){return this._dropEffect;}set dropEffect(value){if(['copy','move','link','none'].includes(value)){this._dropEffect=value;}}connectedCallback(){super.connectedCallback();this.addEventListener('drop',this.onDrop);this.addEventListener('dragover',this.onDragOver);this.addEventListener('dragleave',this.onDragLeave);}disconnectedCallback(){super.disconnectedCallback();this.removeEventListener('drop',this.onDrop);this.removeEventListener('dragover',this.onDragOver);this.removeEventListener('dragleave',this.onDragLeave);}onDragOver(event){const shouldAcceptEvent=new CustomEvent('sp-dropzone-should-accept',{bubbles:true,cancelable:true,composed:true,detail:event});const shouldAccept=this.dispatchEvent(shouldAcceptEvent);if(!event.dataTransfer){return;}if(!shouldAccept){event.dataTransfer.dropEffect='none';return;}event.preventDefault();this.clearDebouncedDragLeave();this.isDragged=true;event.dataTransfer.dropEffect=this.dropEffect;const dragOverEvent=new CustomEvent('sp-dropzone-dragover',{bubbles:true,composed:true,detail:event});this.dispatchEvent(dragOverEvent);}onDragLeave(event){this.clearDebouncedDragLeave();this.debouncedDragLeave=window.setTimeout(()=>{this.isDragged=false;const dragLeave=new CustomEvent('sp-dropzone-dragleave',{bubbles:true,composed:true,detail:event});this.dispatchEvent(dragLeave);},100);}onDrop(event){event.preventDefault();this.clearDebouncedDragLeave();this.isDragged=false;const dropEvent=new CustomEvent('sp-dropzone-drop',{bubbles:true,composed:true,detail:event});this.dispatchEvent(dropEvent);}render(){return p`<slot></slot>`;}clearDebouncedDragLeave(){if(this.debouncedDragLeave){clearTimeout(this.debouncedDragLeave);this.debouncedDragLeave=null;}}}__decorate([e({type:Boolean,reflect:true,attribute:'dragged'})],Dropzone.prototype,"isDragged",void 0);

iliadCustomElementsDefine('sp-dropzone',Dropzone);

const styles$p=r`:host{--spectrum-fieldgroup-margin:var(
--spectrum-global-dimension-size-200
)}:host{display:flex;flex-wrap:wrap;vertical-align:top}:host([dir=ltr][horizontal]) .spectrum-FieldGroup-item:not(:last-child){margin-right:var(
--spectrum-fieldgroup-margin
)}:host([dir=rtl][horizontal]) .spectrum-FieldGroup-item:not(:last-child){margin-left:var(
--spectrum-fieldgroup-margin
)}:host([vertical]){display:inline-flex;flex-direction:column}:host([dir=rtl]:not([vertical])) ::slotted(:not(:last-child)),:host([horizontal][dir=rtl]) ::slotted(:not(:last-child)){margin:0 0 0 var(--spectrum-global-dimension-size-200)}:host([dir=ltr]:not([vertical])) ::slotted(:not(:last-child)),:host([horizontal][dir=ltr]) ::slotted(:not(:last-child)){margin:0 var(--spectrum-global-dimension-size-200) 0 0}`;

/**
 * @element sp-field-group
 * @slot - the form controls that make up the group
 */class FieldGroup extends SpectrumElement{constructor(){super(...arguments);this.horizontal=false;this.vertical=false;}static get styles(){return [styles$p];}render(){return p`<slot></slot>`;}}__decorate([e({type:Boolean,reflect:true})],FieldGroup.prototype,"horizontal",void 0);__decorate([e({type:Boolean,reflect:true})],FieldGroup.prototype,"vertical",void 0);

iliadCustomElementsDefine('sp-field-group',FieldGroup);

iliadCustomElementsDefine('sp-icon',Icon);

class Iconset extends s{constructor(){super(...arguments);this.registered=false;this.handleRemoved=({detail})=>{if(detail.name===this.name){this.registered=false;this.addIconset();}};}firstUpdated(){// force no display for all iconsets
this.style.display='none';}/**
     * Name of the iconset, used by the IconsetRegistry to serve this icon set
     * to consuming icons.
     */set name(value){// if we're already registered in the iconset registry
// we'll need to update our registration
if(this.registered){if(this._name){// remove from the iconset map using the old name
IconsetRegistry.getInstance().removeIconset(this._name);}if(value){// set in the map using the new name
IconsetRegistry.getInstance().addIconset(value,this);}}this._name=value;}get name(){return this._name;}/**
     * On updated we register the iconset if we're not already registered
     */connectedCallback(){super.connectedCallback();this.addIconset();window.addEventListener('sp-iconset-removed',this.handleRemoved);}/**
     * On disconnected we remove the iconset
     */disconnectedCallback(){super.disconnectedCallback();window.removeEventListener('sp-iconset-removed',this.handleRemoved);this.removeIconset();}addIconset(){if(!this.name||this.registered){return;}IconsetRegistry.getInstance().addIconset(this.name,this);this.registered=true;}removeIconset(){if(!this.name){return;}IconsetRegistry.getInstance().removeIconset(this.name);this.registered=false;}}__decorate([e()],Iconset.prototype,"name",null);

class IconsetSVG extends Iconset{constructor(){super(...arguments);this.iconMap=new Map();}/**
     * First updated handler just ensures we've processed any slotted symbols
     */updated(changedProperties){if(!this.slotContainer){return;}const currentSVGNodes=this.getSVGNodes(this.slotContainer);this.updateSVG(currentSVGNodes);super.updated(changedProperties);}/**
     * Applies the requested icon from this iconset instance to the given element.
     *
     * @param el - the element to apply the icon to
     * @param icon - the name of the icon within this set to apply.
     */async applyIconToElement(el,icon,_size,label){await this.updateComplete;const iconSymbol=this.iconMap.get(icon);if(!iconSymbol){throw new Error(`Unable to find icon ${icon}`);}// we cannot share a single SVG globally across shadowroot boundaries
// so copy the template node so we can inject it where we need it
const clonedNode=this.prepareSvgClone(iconSymbol);clonedNode.setAttribute('role','img');if(label){clonedNode.setAttribute('aria-label',label);}else {clonedNode.setAttribute('aria-hidden','true');}// append the svg to the node either in its shadowroot or directly into its dom
if(el.shadowRoot){el.shadowRoot.appendChild(clonedNode);}else {el.appendChild(clonedNode);}}/**
     * Returns a list of all icons in this iconset.
     */getIconList(){return [...this.iconMap.keys()];}prepareSvgClone(sourceSvg){const content=sourceSvg.cloneNode(true);// we're going to create a new svg element that will have our symbol geometry inside
const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');const viewBox=content.getAttribute('viewBox')||'';// inline style isn't ideal but will work in all cases and means our icons don't need to know
// if they are svg or spritesheet provided
const cssText='pointer-events: none; display: block; width: 100%; height: 100%;';svg.style.cssText=cssText;// copy the viewbox and other properties into the svg
svg.setAttribute('viewBox',viewBox);svg.setAttribute('preserveAspectRatio','xMidYMid meet');svg.setAttribute('focusable','false');// move all the child nodes over to the svg
while(content.childNodes.length>0){svg.appendChild(content.childNodes[0]);}return svg;}getSVGIconName(icon){return icon;}getSanitizedIconName(icon){return icon;}renderDefaultContent(){return p``;}render(){return p`<slot @slotchange="${this.onSlotChange}">${this.renderDefaultContent()}</slot>`;}updateSVG(nodes){// iterate over the nodes that were passed in, and find all the top level symbols
const symbols=nodes.reduce((prev,svgNode)=>{const containedSymbols=svgNode.querySelectorAll('symbol');prev.push(...containedSymbols);return prev;},[]);symbols.forEach(symbol=>{this.iconMap.set(this.getSanitizedIconName(symbol.id),symbol);});}getSVGNodes(slotTarget){const nodes=slotTarget.assignedNodes({flatten:true});// find all the svg nodes
const svgNodes=nodes.filter(node=>{return node.nodeName==='svg';});return svgNodes;}onSlotChange(event){const slotTarget=event.target;const svgNodes=this.getSVGNodes(slotTarget);this.updateSVG(svgNodes);}}__decorate([i('slot')],IconsetSVG.prototype,"slotContainer",void 0);

var iconsSVG$2 = y`<svg xmlns="http://www.w3.org/2000/svg"><symbol id="spectrum-icon-Arrow100" viewBox="0 0 14 14"><path d="M12.93 6.227L9.023 2.32a1.094 1.094 0 10-1.546 1.547l2.039 2.04H1.844a1.094 1.094 0 100 2.187h7.672l-2.04 2.039a1.094 1.094 0 001.547 1.547l3.907-3.907a1.093 1.093 0 000-1.546z"/></symbol><symbol id="spectrum-icon-Arrow200" viewBox="0 0 16 16"><path d="M14.606 7.194l-4.458-4.459a1.14 1.14 0 10-1.612 1.612L11.05 6.86H2.108a1.14 1.14 0 000 2.28h8.942l-2.514 2.513a1.14 1.14 0 101.611 1.612l4.46-4.46a1.139 1.139 0 000-1.61z"/></symbol><symbol id="spectrum-icon-Arrow300" viewBox="0 0 16 16"><path d="M15.364 7.161l-5.083-5.083a1.186 1.186 0 00-1.678 1.678l3.057 3.058H1.277a1.187 1.187 0 100 2.373H11.66l-3.056 3.057a1.186 1.186 0 101.677 1.678l5.083-5.083a1.185 1.185 0 000-1.678z"/></symbol><symbol id="spectrum-icon-Arrow400" viewBox="0 0 18 18"><path d="M17.216 8.126l-5.79-5.79a1.236 1.236 0 00-1.746 1.75l3.683 3.683c-.008 0-.014-.004-.021-.004H1.337a1.236 1.236 0 000 2.472H13.34c.007 0 .013-.004.02-.004l-3.68 3.682a1.236 1.236 0 101.748 1.748l5.789-5.789a1.237 1.237 0 000-1.748zm-2.643.895c0-.008.004-.014.004-.021s-.004-.013-.004-.02l.02.02z"/></symbol><symbol id="spectrum-icon-Arrow500" viewBox="0 0 22 22"><path d="M20.17 10.089l-6.585-6.585a1.289 1.289 0 00-1.822 1.822l4.386 4.386H2.276a1.288 1.288 0 000 2.576h13.873l-4.386 4.386a1.289 1.289 0 001.822 1.822l6.585-6.585a1.289 1.289 0 000-1.822z"/></symbol><symbol id="spectrum-icon-Arrow600" viewBox="0 0 24 24"><path d="M22.24 11.052l-7.485-7.485a1.341 1.341 0 00-1.897 1.897l5.194 5.194H2.079a1.342 1.342 0 000 2.684h15.973l-5.194 5.194a1.341 1.341 0 101.897 1.897l7.484-7.485a1.34 1.34 0 000-1.896z"/></symbol><symbol id="spectrum-icon-Arrow75" viewBox="0 0 12 12"><path d="M11.325 5.258L7.91 1.84a1.05 1.05 0 00-1.486 1.484L8.048 4.95H1.494a1.05 1.05 0 000 2.1h6.554L6.423 8.675a1.05 1.05 0 001.486 1.484l3.416-3.417a1.05 1.05 0 000-1.484z"/></symbol><symbol id="spectrum-icon-Asterisk100" viewBox="0 0 10 10"><path d="M8.176 8.281c.069.07.115.163 0 .255l-1.437.927c-.115.07-.161.024-.208-.092l-1.783-3.1-2.339 2.571c-.024.045-.093.091-.161 0L1.136 7.678c-.116-.069-.093-.139 0-.208l2.639-2.2-3.01-1.134c-.046 0-.115-.092-.07-.209l.788-1.574a.123.123 0 01.151-.083.128.128 0 01.058.038l2.639 1.713L4.494.64a.122.122 0 01.1-.139.172.172 0 01.038 0l1.922.255c.116 0 .139.046.116.163l-.9 3.31 3.057-.927c.069-.046.139-.046.185.092l.3 1.713c.023.116 0 .162-.093.162l-3.2.255z"/></symbol><symbol id="spectrum-icon-Asterisk200" viewBox="0 0 12 12"><path d="M9.575 9.696c.077.079.129.183 0 .287L7.96 11.025c-.129.079-.182.027-.234-.1L5.72 7.433l-2.633 2.893c-.027.051-.1.1-.182 0l-1.251-1.3c-.131-.077-.1-.156 0-.234l2.97-2.476-3.388-1.285c-.052 0-.129-.1-.079-.235l.886-1.771a.138.138 0 01.17-.093.144.144 0 01.065.042l2.97 1.928.183-3.8a.137.137 0 01.114-.156.197.197 0 01.042 0l2.163.287c.131 0 .156.052.131.183L6.86 5.136l3.44-1.043c.077-.052.156-.052.208.1l.339 1.928c.025.13 0 .183-.1.183l-3.6.287z"/></symbol><symbol id="spectrum-icon-Asterisk300" viewBox="0 0 12 12"><path d="M10.024 10.155c.087.089.146.206 0 .323l-1.819 1.173c-.146.089-.2.03-.263-.117L5.685 7.605l-2.962 3.254c-.03.057-.117.116-.2 0L1.116 9.392c-.147-.087-.117-.176 0-.263l3.339-2.785L.642 4.908c-.059 0-.146-.117-.089-.264l1-1.993a.156.156 0 01.192-.1.163.163 0 01.073.048l3.337 2.163.206-4.28a.155.155 0 01.128-.176.23.23 0 01.047 0l2.433.323c.147 0 .176.059.147.206l-1.144 4.19 3.87-1.173c.087-.06.176-.06.234.117l.381 2.169c.028.147 0 .206-.117.206l-4.046.323z"/></symbol><symbol id="spectrum-icon-Asterisk75" viewBox="0 0 8 8"><path d="M6.825 6.903c.061.062.1.144 0 .227l-1.277.824c-.1.062-.143.02-.185-.082L3.78 5.112 1.7 7.398c-.021.04-.082.08-.143 0L.569 6.367c-.1-.061-.082-.123 0-.185l2.347-1.957-2.68-1.007c-.041 0-.1-.082-.062-.186l.7-1.4a.109.109 0 01.135-.073.114.114 0 01.051.033l2.347 1.523.145-3.006a.109.109 0 01.09-.123.14.14 0 01.033 0l1.709.227c.1 0 .123.04.1.144l-.8 2.943 2.718-.824c.061-.041.123-.041.165.082l.268 1.523c.02.1 0 .144-.082.144l-2.842.227z"/></symbol><symbol id="spectrum-icon-Checkmark100" viewBox="0 0 14 14"><path d="M5.125 12.625a1.25 1.25 0 01-.96-.45L1.04 8.425a1.25 1.25 0 011.92-1.6l2.136 2.563 5.922-7.536a1.25 1.25 0 111.964 1.545l-6.874 8.75a1.25 1.25 0 01-.965.478z"/></symbol><symbol id="spectrum-icon-Checkmark200" viewBox="0 0 14 14"><path d="M4.891 13.224a1.304 1.304 0 01-1.005-.474l-3.54-4.3a1.302 1.302 0 012.011-1.655l2.508 3.046 6.758-8.647a1.302 1.302 0 112.05 1.604l-7.756 9.926a1.301 1.301 0 01-1.01.5z"/></symbol><symbol id="spectrum-icon-Checkmark300" viewBox="0 0 16 16"><path d="M5.627 14.894a1.357 1.357 0 01-1.042-.488l-4.1-4.92A1.357 1.357 0 012.569 7.75l3.027 3.631L13.4 1.448a1.356 1.356 0 012.133 1.675l-8.84 11.252a1.356 1.356 0 01-1.048.519z"/></symbol><symbol id="spectrum-icon-Checkmark400" viewBox="0 0 18 18"><path d="M6.33 16.642a1.415 1.415 0 01-1.086-.509l-4.683-5.62a1.413 1.413 0 012.171-1.81l3.566 4.28 8.936-11.374a1.413 1.413 0 012.223 1.746L7.441 16.102a1.415 1.415 0 01-1.09.54z"/></symbol><symbol id="spectrum-icon-Checkmark50" viewBox="0 0 12 12"><path d="M4.519 10.608a1.151 1.151 0 01-.885-.414L1.27 7.358a1.152 1.152 0 011.77-1.476l1.453 1.743 4.45-5.665a1.152 1.152 0 011.813 1.424l-5.331 6.784a1.153 1.153 0 01-.89.44z"/></symbol><symbol id="spectrum-icon-Checkmark500" viewBox="0 0 20 20"><path d="M6.997 18.48a1.47 1.47 0 01-1.13-.53L.521 11.538a1.471 1.471 0 112.26-1.885l4.182 5.017L17.18 1.666a1.472 1.472 0 112.314 1.818L8.154 17.917a1.472 1.472 0 01-1.135.562z"/></symbol><symbol id="spectrum-icon-Checkmark600" viewBox="0 0 24 24"><path d="M8.621 21.417a1.535 1.535 0 01-1.178-.552l-6.091-7.31a1.533 1.533 0 112.355-1.962l4.879 5.854L20.249 2.602a1.533 1.533 0 112.41 1.895L9.826 20.831a1.53 1.53 0 01-1.182.585z"/></symbol><symbol id="spectrum-icon-Checkmark75" viewBox="0 0 12 12"><path d="M4.333 11.09a1.2 1.2 0 01-.922-.433L.69 7.392a1.2 1.2 0 111.844-1.536l1.772 2.126 5.14-6.542a1.2 1.2 0 111.886 1.482L5.277 10.63a1.2 1.2 0 01-.927.459z"/></symbol><symbol id="spectrum-icon-Chevron100" viewBox="0 0 14 14"><path d="M4.5 13.25a1.094 1.094 0 01-.773-1.868L8.109 7 3.727 2.618A1.094 1.094 0 015.273 1.07l5.157 5.156a1.094 1.094 0 010 1.546L5.273 12.93a1.091 1.091 0 01-.773.321z"/></symbol><symbol id="spectrum-icon-Chevron200" viewBox="0 0 16 16"><path d="M5.123 15.005a1.14 1.14 0 01-.806-1.945L9.377 8l-5.06-5.06a1.14 1.14 0 011.612-1.61l5.865 5.864a1.139 1.139 0 010 1.612L5.929 14.67a1.135 1.135 0 01-.806.334z"/></symbol><symbol id="spectrum-icon-Chevron300" viewBox="0 0 16 16"><path d="M4.696 15.853a1.187 1.187 0 01-.84-2.026L9.684 8 3.856 2.173A1.187 1.187 0 015.536.495L12.2 7.16a1.187 1.187 0 010 1.678l-6.666 6.666a1.183 1.183 0 01-.84.348z"/></symbol><symbol id="spectrum-icon-Chevron400" viewBox="0 0 18 18"><path d="M5.213 17.805a1.236 1.236 0 01-.874-2.11L11.034 9 4.34 2.305A1.236 1.236 0 016.087.557l7.57 7.569a1.235 1.235 0 010 1.748l-7.57 7.569a1.232 1.232 0 01-.874.362z"/></symbol><symbol id="spectrum-icon-Chevron500" viewBox="0 0 20 20"><path d="M5.667 19.876a1.288 1.288 0 01-.91-2.199L12.433 10 4.756 2.323A1.288 1.288 0 016.578.502l8.588 8.587a1.288 1.288 0 010 1.822l-8.588 8.588a1.284 1.284 0 01-.911.377z"/></symbol><symbol id="spectrum-icon-Chevron600" viewBox="0 0 24 24"><path d="M7.05 23.078a1.341 1.341 0 01-.948-2.29L14.89 12 6.102 3.212a1.341 1.341 0 011.896-1.898l9.737 9.737a1.34 1.34 0 010 1.898l-9.737 9.737a1.335 1.335 0 01-.948.392z"/></symbol><symbol id="spectrum-icon-Chevron75" viewBox="0 0 12 12"><path d="M3.833 11.578a1.05 1.05 0 01-.742-1.793L6.876 6 3.091 2.215A1.05 1.05 0 114.575.73l4.529 4.527a1.05 1.05 0 010 1.486L4.575 11.27a1.047 1.047 0 01-.742.308z"/></symbol><symbol id="spectrum-icon-CornerTriangle100" viewBox="0 0 7 7"><path d="M6.687.75a.311.311 0 00-.221.091L.842 6.466a.312.312 0 00.221.533h5.624a.312.312 0 00.312-.312V1.062A.312.312 0 006.687.75z"/></symbol><symbol id="spectrum-icon-CornerTriangle200" viewBox="0 0 8 8"><path d="M7.65.97a.35.35 0 00-.249.1L1.07 7.401a.352.352 0 00.249.6H7.65a.352.352 0 00.352-.352V1.322A.352.352 0 007.65.97z"/></symbol><symbol id="spectrum-icon-CornerTriangle300" viewBox="0 0 8 8"><path d="M7.605.09a.394.394 0 00-.28.116L.206 7.325A.4.4 0 00.49 8h7.115a.4.4 0 00.4-.4V.49a.4.4 0 00-.4-.4z"/></symbol><symbol id="spectrum-icon-CornerTriangle75" viewBox="0 0 6 6"><path d="M5.718.44a.277.277 0 00-.2.081l-5 5a.278.278 0 00.2.474h5a.278.278 0 00.278-.278v-5A.278.278 0 005.718.44z"/></symbol><symbol id="spectrum-icon-Cross100" viewBox="0 0 10 10"><path d="M6.548 5L9.63 1.917A1.094 1.094 0 008.084.371L5.001 3.454 1.917.37A1.094 1.094 0 00.371 1.917L3.454 5 .37 8.085A1.094 1.094 0 101.917 9.63l3.084-3.083L8.084 9.63a1.094 1.094 0 101.547-1.546z"/></symbol><symbol id="spectrum-icon-Cross200" viewBox="0 0 12 12"><path d="M7.611 6l3.654-3.653A1.14 1.14 0 009.653.735L6 4.39 2.347.735A1.14 1.14 0 00.735 2.347L4.39 6 .735 9.653a1.14 1.14 0 101.612 1.612L6 7.61l3.653 3.654a1.14 1.14 0 001.612-1.612z"/></symbol><symbol id="spectrum-icon-Cross300" viewBox="0 0 14 14"><path d="M8.678 7l4.245-4.244a1.186 1.186 0 00-1.678-1.678L7.001 5.323 2.755 1.077a1.187 1.187 0 00-1.678 1.678L5.322 7l-4.244 4.244a1.187 1.187 0 001.678 1.678l4.245-4.245 4.244 4.245a1.186 1.186 0 001.678-1.678z"/></symbol><symbol id="spectrum-icon-Cross400" viewBox="0 0 16 16"><path d="M9.748 8l4.915-4.915a1.236 1.236 0 00-1.748-1.748L8 6.252 3.085 1.337a1.236 1.236 0 00-1.748 1.748L6.252 8l-4.915 4.915a1.236 1.236 0 101.748 1.748L8 9.748l4.915 4.915a1.236 1.236 0 001.748-1.748z"/></symbol><symbol id="spectrum-icon-Cross500" viewBox="0 0 16 16"><path d="M9.823 8l5.674-5.674A1.289 1.289 0 1013.675.504L8 6.179 2.326.503A1.288 1.288 0 00.504 2.326l5.674 5.675-5.674 5.674a1.288 1.288 0 001.822 1.822L8 9.822l5.674 5.675a1.289 1.289 0 101.823-1.822z"/></symbol><symbol id="spectrum-icon-Cross600" viewBox="0 0 18 18"><path d="M10.897 9l6.537-6.536A1.341 1.341 0 1015.537.567L9 7.104 2.465.567A1.341 1.341 0 00.567 2.464L7.104 9 .567 15.537a1.341 1.341 0 101.897 1.897L9 10.897l6.536 6.537a1.341 1.341 0 101.897-1.897z"/></symbol><symbol id="spectrum-icon-Cross75" viewBox="0 0 10 10"><path d="M6.485 5l2.674-2.674A1.05 1.05 0 107.674.84L5 3.515 2.326.84A1.05 1.05 0 00.84 2.326L3.515 5 .84 7.674A1.05 1.05 0 002.326 9.16L5 6.485 7.674 9.16A1.05 1.05 0 109.16 7.674z"/></symbol><symbol id="spectrum-icon-Dash100" viewBox="0 0 12 12"><path d="M10.375 7.25h-8.75a1.25 1.25 0 010-2.5h8.75a1.25 1.25 0 010 2.5z"/></symbol><symbol id="spectrum-icon-Dash200" viewBox="0 0 14 14"><path d="M12.026 8.302H1.974a1.302 1.302 0 010-2.604h10.052a1.302 1.302 0 010 2.604z"/></symbol><symbol id="spectrum-icon-Dash300" viewBox="0 0 16 16"><path d="M13.763 9.356H2.237a1.356 1.356 0 010-2.712h11.526a1.356 1.356 0 010 2.712z"/></symbol><symbol id="spectrum-icon-Dash400" viewBox="0 0 18 18"><path d="M15.596 10.413H2.404a1.413 1.413 0 010-2.826h13.192a1.413 1.413 0 010 2.826z"/></symbol><symbol id="spectrum-icon-Dash50" viewBox="0 0 10 10"><path d="M8.293 6.152H1.708a1.152 1.152 0 010-2.304h6.585a1.152 1.152 0 110 2.304z"/></symbol><symbol id="spectrum-icon-Dash500" viewBox="0 0 20 20"><path d="M17.54 11.472H2.461a1.472 1.472 0 010-2.944h15.077a1.472 1.472 0 010 2.944z"/></symbol><symbol id="spectrum-icon-Dash600" viewBox="0 0 22 22"><path d="M19.604 12.533H2.398a1.533 1.533 0 110-3.066h17.206a1.533 1.533 0 010 3.066z"/></symbol><symbol id="spectrum-icon-Dash75" viewBox="0 0 10 10"><path d="M8.75 6.2h-7.5a1.2 1.2 0 010-2.4h7.5a1.2 1.2 0 110 2.4z"/></symbol><symbol id="spectrum-icon-DoubleGripper" viewBox="0 0 20 6"><path d="M19.375 1.75H.625a.625.625 0 010-1.25h18.75a.625.625 0 010 1.25zM20 4.875a.626.626 0 00-.625-.625H.625a.625.625 0 000 1.25h18.75A.626.626 0 0020 4.875z"/></symbol><symbol id="spectrum-icon-SingleGripper" viewBox="0 0 30 4"><path d="M28.75 3.25H1.25a1.25 1.25 0 010-2.5h27.5a1.25 1.25 0 010 2.5z"/></symbol><symbol id="spectrum-icon-TripleGripper" viewBox="0 0 14 10"><path d="M12.625 1.25H1.375a.625.625 0 010-1.25h11.25a.625.625 0 010 1.25zm.625 3.125a.626.626 0 00-.625-.625H1.375a.625.625 0 000 1.25h11.25a.626.626 0 00.625-.625zm0 3.75a.626.626 0 00-.625-.625H1.375a.625.625 0 000 1.25h11.25a.626.626 0 00.625-.625z"/></symbol></svg>`;

/**
 * @element sp-icons-large
 */class IconsLarge extends IconsetSVG{constructor(){super();this.name='ui';// default iconset name for these icons
}renderDefaultContent(){return iconsSVG$2;}/**
     * Overrides createIconName to make icon strings compatible with spectrum-icon id format
     * @param icon
     * @param size
     */getSVGIconName(icon){return `spectrum-icon-${icon}`;}getSanitizedIconName(icon){return icon.replace('spectrum-icon-','');}}

iliadCustomElementsDefine('sp-icons-large',IconsLarge);

var iconsSVG$1 = y`<svg xmlns="http://www.w3.org/2000/svg"><symbol id="spectrum-icon-Arrow100" viewBox="0 0 10 10"><path d="M9.7 4.387L6.623 1.262a.875.875 0 10-1.247 1.226l1.61 1.637H.925a.875.875 0 000 1.75h6.062l-1.61 1.637a.875.875 0 101.247 1.226l3.075-3.125a.874.874 0 000-1.226z"/></symbol><symbol id="spectrum-icon-Arrow200" viewBox="0 0 12 12"><path d="M11.284 5.356L7.718 1.788a.911.911 0 10-1.29 1.29l2.012 2.01H1.286a.911.911 0 100 1.823H8.44L6.429 8.923a.911.911 0 001.289 1.289l3.566-3.567a.912.912 0 000-1.29z"/></symbol><symbol id="spectrum-icon-Arrow300" viewBox="0 0 14 14"><path d="M12.893 6.33L8.826 2.261a.95.95 0 10-1.344 1.341L9.93 6.051H1.621a.95.95 0 100 1.898H9.93l-2.447 2.447a.95.95 0 001.344 1.342l4.067-4.067a.95.95 0 000-1.342z"/></symbol><symbol id="spectrum-icon-Arrow400" viewBox="0 0 16 16"><path d="M14.572 7.3l-4.63-4.63a.989.989 0 00-1.399 1.398l2.942 2.943H1.87a.99.99 0 000 1.978h9.615l-2.942 2.943a.989.989 0 101.398 1.398l4.631-4.63a.988.988 0 000-1.4z"/></symbol><symbol id="spectrum-icon-Arrow500" viewBox="0 0 18 18"><path d="M16.336 8.271l-5.269-5.267A1.03 1.03 0 109.61 4.46l3.51 3.509H2.021a1.03 1.03 0 000 2.06H13.12l-3.51 3.51a1.03 1.03 0 101.457 1.456l5.269-5.268a1.03 1.03 0 000-1.456z"/></symbol><symbol id="spectrum-icon-Arrow600" viewBox="0 0 20 20"><path d="M18.191 9.241l-5.986-5.987a1.073 1.073 0 00-1.518 1.517l4.155 4.156H2.063a1.073 1.073 0 100 2.146h12.779l-4.154 4.155a1.073 1.073 0 101.517 1.518l5.986-5.987a1.073 1.073 0 000-1.518z"/></symbol><symbol id="spectrum-icon-Arrow75" viewBox="0 0 10 10"><path d="M9.26 4.406L6.528 1.672A.84.84 0 005.34 2.859l1.3 1.301H1.396a.84.84 0 000 1.68H6.64l-1.301 1.3a.84.84 0 001.188 1.188l2.734-2.734a.84.84 0 000-1.188z"/></symbol><symbol id="spectrum-icon-Asterisk100" viewBox="0 0 8 8"><path d="M6.575 6.555c.055.056.092.13 0 .2l-1.149.741c-.092.056-.129.019-.166-.074L3.834 4.94 1.963 7c-.019.036-.074.073-.129 0l-.889-.927c-.093-.055-.074-.111 0-.166l2.111-1.76L.648 3.24c-.037 0-.092-.074-.056-.167l.63-1.259a.097.097 0 01.167-.036L3.5 3.148l.13-2.7a.1.1 0 01.081-.111.15.15 0 01.03 0l1.537.2c.093 0 .111.037.093.13l-.723 2.647 2.445-.741c.055-.037.111-.037.148.074l.241 1.37c.018.093 0 .13-.074.13l-2.556.2z"/></symbol><symbol id="spectrum-icon-Asterisk200" viewBox="0 0 10 10"><path d="M7.861 7.953c.062.063.1.146 0 .23l-1.293.834c-.1.063-.145.021-.187-.083l-1.6-2.793-2.105 2.314c-.021.04-.083.082-.145 0l-1-1.043c-.1-.062-.083-.125 0-.187l2.375-1.981-2.715-1.026c-.042 0-.1-.083-.063-.188l.707-1.412a.111.111 0 01.136-.074.116.116 0 01.052.034l2.378 1.54.146-3.043A.11.11 0 014.638.95a.161.161 0 01.034 0l1.73.23c.1 0 .125.042.1.146l-.814 2.979 2.751-.834c.062-.042.125-.042.167.083l.271 1.542c.02.1 0 .146-.083.146l-2.876.23z"/></symbol><symbol id="spectrum-icon-Asterisk300" viewBox="0 0 10 10"><path d="M8.266 8.324c.07.071.116.164 0 .258l-1.454.938c-.116.071-.163.024-.21-.094l-1.8-3.141-2.367 2.6c-.024.045-.094.092-.163 0l-1.13-1.167c-.118-.07-.094-.141 0-.21l2.671-2.227L.766 4.13c-.047 0-.116-.094-.071-.211l.8-1.593a.124.124 0 01.153-.084.13.13 0 01.058.038l2.669 1.738.164-3.422a.124.124 0 01.1-.14.186.186 0 01.038 0l1.945.258c.118 0 .14.047.118.164l-.915 3.349 3.094-.938c.07-.047.14-.047.187.094l.3 1.734c.023.118 0 .164-.094.164l-3.234.258z"/></symbol><symbol id="spectrum-icon-Asterisk75" viewBox="0 0 8 8"><path d="M6.26 6.463c.049.05.082.116 0 .181l-1.022.659c-.082.05-.115.017-.148-.066L3.822 5.03 2.16 6.859c-.017.032-.066.065-.115 0l-.79-.824c-.083-.049-.066-.1 0-.148l1.877-1.565L.99 3.516c-.033 0-.082-.066-.05-.148l.56-1.119a.087.087 0 01.108-.059.09.09 0 01.04.027l1.878 1.218.116-2.4a.087.087 0 01.072-.1h.027l1.367.181c.083 0 .1.033.083.116L4.55 3.581l2.174-.659c.049-.033.1-.033.132.066l.214 1.218c.016.083 0 .115-.066.115l-2.273.181z"/></symbol><symbol id="spectrum-icon-Checkmark100" viewBox="0 0 10 10"><path d="M3.5 9.5a.999.999 0 01-.774-.368l-2.45-3a1 1 0 111.548-1.264l1.657 2.028 4.68-6.01A1 1 0 019.74 2.114l-5.45 7a1 1 0 01-.777.386z"/></symbol><symbol id="spectrum-icon-Checkmark200" viewBox="0 0 12 12"><path d="M4.313 10.98a1.042 1.042 0 01-.8-.375L.647 7.165a1.042 1.042 0 011.6-1.333l2.042 2.45 5.443-6.928a1.042 1.042 0 011.64 1.287l-6.24 7.94a1.04 1.04 0 01-.804.399z"/></symbol><symbol id="spectrum-icon-Checkmark300" viewBox="0 0 14 14"><path d="M5.102 12.514a1.087 1.087 0 01-.834-.39L.988 8.19A1.085 1.085 0 012.656 6.8l2.421 2.906 6.243-7.947a1.085 1.085 0 011.707 1.34L5.955 12.1a1.089 1.089 0 01-.838.415z"/></symbol><symbol id="spectrum-icon-Checkmark400" viewBox="0 0 16 16"><path d="M5.864 14.114a1.13 1.13 0 01-.868-.407L1.25 9.21a1.13 1.13 0 111.736-1.448l2.854 3.425 7.148-9.1a1.13 1.13 0 111.778 1.397L6.753 13.682a1.13 1.13 0 01-.872.432z"/></symbol><symbol id="spectrum-icon-Checkmark50" viewBox="0 0 10 10"><path d="M3.815 8.687a.921.921 0 01-.708-.332l-1.891-2.27a.921.921 0 011.416-1.18L3.794 6.3l3.56-4.531a.921.921 0 111.45 1.138L4.54 8.335a.921.921 0 01-.712.351z"/></symbol><symbol id="spectrum-icon-Checkmark500" viewBox="0 0 16 16"><path d="M5.597 14.784a1.177 1.177 0 01-.905-.424L.417 9.229a1.177 1.177 0 111.809-1.508l3.343 4.013 8.174-10.402a1.177 1.177 0 011.852 1.456L6.523 14.334a1.178 1.178 0 01-.91.45z"/></symbol><symbol id="spectrum-icon-Checkmark600" viewBox="0 0 18 18"><path d="M6.297 16.534a1.228 1.228 0 01-.942-.442L.48 10.244a1.227 1.227 0 011.885-1.57l3.904 4.684L15.6 1.482a1.227 1.227 0 011.93 1.516L7.262 16.065a1.229 1.229 0 01-.947.469z"/></symbol><symbol id="spectrum-icon-Checkmark75" viewBox="0 0 10 10"><path d="M3.667 9.07a.96.96 0 01-.737-.344L.753 6.114a.96.96 0 111.474-1.23l1.418 1.701 4.112-5.233a.96.96 0 011.51 1.186L4.422 8.704a.962.962 0 01-.741.367z"/></symbol><symbol id="spectrum-icon-Chevron100" viewBox="0 0 10 10"><path d="M3 9.95a.875.875 0 01-.615-1.498L5.88 5 2.385 1.547A.875.875 0 013.615.302L7.74 4.377a.876.876 0 010 1.246L3.615 9.698A.872.872 0 013 9.95z"/></symbol><symbol id="spectrum-icon-Chevron200" viewBox="0 0 12 12"><path d="M9.034 5.356L4.343.663a.911.911 0 00-1.29 1.289L7.102 6l-4.047 4.047a.911.911 0 101.289 1.29l4.691-4.692a.912.912 0 000-1.29z"/></symbol><symbol id="spectrum-icon-Chevron300" viewBox="0 0 14 14"><path d="M10.639 7a.947.947 0 00-.278-.671l-.003-.002-5.33-5.33a.95.95 0 00-1.342 1.342L8.346 7l-4.661 4.66a.95.95 0 101.342 1.343l5.33-5.33.003-.001A.947.947 0 0010.64 7z"/></symbol><symbol id="spectrum-icon-Chevron400" viewBox="0 0 16 16"><path d="M4.97 15.044a.989.989 0 01-.698-1.688L9.627 8 4.27 2.644a.989.989 0 011.4-1.398L11.726 7.3a.988.988 0 010 1.398L5.67 14.754a.985.985 0 01-.7.29z"/></symbol><symbol id="spectrum-icon-Chevron500" viewBox="0 0 16 16"><path d="M12.133 7.271L5.263.401a1.03 1.03 0 00-1.457 1.457L9.947 8l-6.141 6.142a1.03 1.03 0 001.457 1.457l6.87-6.87a1.03 1.03 0 000-1.457z"/></symbol><symbol id="spectrum-icon-Chevron600" viewBox="0 0 18 18"><path d="M5.04 17.863a1.073 1.073 0 01-.759-1.832L11.313 9 4.28 1.969A1.073 1.073 0 015.8.45l7.79 7.79a1.073 1.073 0 010 1.518l-7.79 7.79a1.07 1.07 0 01-.759.314z"/></symbol><symbol id="spectrum-icon-Chevron75" viewBox="0 0 10 10"><path d="M7.482 4.406l-.001-.001L3.86.783a.84.84 0 00-1.188 1.188L5.702 5l-3.03 3.03A.84.84 0 003.86 9.216l3.621-3.622h.001a.84.84 0 000-1.19z"/></symbol><symbol id="spectrum-icon-CornerTriangle100" viewBox="0 0 5 5"><path d="M4.763 0a.248.248 0 00-.177.073l-4.5 4.5A.25.25 0 00.263 5h4.5a.25.25 0 00.25-.25V.25a.25.25 0 00-.25-.25z"/></symbol><symbol id="spectrum-icon-CornerTriangle200" viewBox="0 0 6 6"><path d="M5.719.37a.281.281 0 00-.2.082L.452 5.519a.281.281 0 00.2.481h5.067A.281.281 0 006 5.719V.652A.281.281 0 005.72.37z"/></symbol><symbol id="spectrum-icon-CornerTriangle300" viewBox="0 0 7 7"><path d="M6.683.67a.315.315 0 00-.223.093l-5.7 5.7a.316.316 0 00.224.54h5.7A.316.316 0 007 6.687V.986A.316.316 0 006.684.67z"/></symbol><symbol id="spectrum-icon-CornerTriangle75" viewBox="0 0 5 5"><path d="M4.78.558a.222.222 0 00-.157.065l-4 4a.222.222 0 00.157.379h4a.222.222 0 00.222-.222v-4A.222.222 0 004.78.558z"/></symbol><symbol id="spectrum-icon-Cross100" viewBox="0 0 8 8"><path d="M5.238 4l2.456-2.457A.875.875 0 106.456.306L4 2.763 1.543.306A.875.875 0 00.306 1.544L2.763 4 .306 6.457a.875.875 0 101.238 1.237L4 5.237l2.456 2.457a.875.875 0 101.238-1.237z"/></symbol><symbol id="spectrum-icon-Cross200" viewBox="0 0 10 10"><path d="M6.29 5l2.922-2.922a.911.911 0 00-1.29-1.29L5 3.712 2.078.789a.911.911 0 00-1.29 1.289L3.712 5 .79 7.922a.911.911 0 101.289 1.29L5 6.288 7.923 9.21a.911.911 0 001.289-1.289z"/></symbol><symbol id="spectrum-icon-Cross300" viewBox="0 0 12 12"><path d="M7.344 6l3.395-3.396a.95.95 0 00-1.344-1.342L6 4.657 2.604 1.262a.95.95 0 00-1.342 1.342L4.657 6 1.262 9.396a.95.95 0 001.343 1.343L6 7.344l3.395 3.395a.95.95 0 001.344-1.344z"/></symbol><symbol id="spectrum-icon-Cross400" viewBox="0 0 12 12"><path d="M7.398 6l3.932-3.932A.989.989 0 009.932.67L6 4.602 2.068.67A.989.989 0 00.67 2.068L4.602 6 .67 9.932a.989.989 0 101.398 1.398L6 7.398l3.932 3.932a.989.989 0 001.398-1.398z"/></symbol><symbol id="spectrum-icon-Cross500" viewBox="0 0 14 14"><path d="M8.457 7l4.54-4.54a1.03 1.03 0 00-1.458-1.456L7 5.543l-4.54-4.54a1.03 1.03 0 00-1.457 1.458L5.543 7l-4.54 4.54a1.03 1.03 0 101.457 1.456L7 8.457l4.54 4.54a1.03 1.03 0 001.456-1.458z"/></symbol><symbol id="spectrum-icon-Cross600" viewBox="0 0 16 16"><path d="M9.518 8l5.23-5.228a1.073 1.073 0 00-1.518-1.518L8.001 6.483l-5.229-5.23a1.073 1.073 0 00-1.518 1.519L6.483 8l-5.23 5.229a1.073 1.073 0 101.518 1.518l5.23-5.23 5.228 5.23a1.073 1.073 0 001.518-1.518z"/></symbol><symbol id="spectrum-icon-Cross75" viewBox="0 0 8 8"><path d="M5.188 4l2.14-2.14A.84.84 0 106.141.672L4 2.812 1.86.672A.84.84 0 00.672 1.86L2.812 4 .672 6.14A.84.84 0 101.86 7.328L4 5.188l2.14 2.14A.84.84 0 107.328 6.14z"/></symbol><symbol id="spectrum-icon-Dash100" viewBox="0 0 10 10"><path d="M8.5 6h-7a1 1 0 010-2h7a1 1 0 010 2z"/></symbol><symbol id="spectrum-icon-Dash200" viewBox="0 0 12 12"><path d="M10.021 7.042H1.98a1.042 1.042 0 110-2.083h8.043a1.042 1.042 0 010 2.083z"/></symbol><symbol id="spectrum-icon-Dash300" viewBox="0 0 12 12"><path d="M10.61 7.085H1.39a1.085 1.085 0 010-2.17h9.22a1.085 1.085 0 010 2.17z"/></symbol><symbol id="spectrum-icon-Dash400" viewBox="0 0 14 14"><path d="M12.277 8.13H1.723a1.13 1.13 0 110-2.26h10.554a1.13 1.13 0 110 2.26z"/></symbol><symbol id="spectrum-icon-Dash50" viewBox="0 0 8 8"><path d="M6.634 4.921H1.366a.921.921 0 010-1.842h5.268a.921.921 0 110 1.842z"/></symbol><symbol id="spectrum-icon-Dash500" viewBox="0 0 16 16"><path d="M14.03 9.178H1.969a1.178 1.178 0 110-2.356H14.03a1.178 1.178 0 010 2.356z"/></symbol><symbol id="spectrum-icon-Dash600" viewBox="0 0 18 18"><path d="M15.882 10.227H2.117a1.227 1.227 0 010-2.454h13.765a1.227 1.227 0 010 2.454z"/></symbol><symbol id="spectrum-icon-Dash75" viewBox="0 0 8 8"><path d="M6.99 4.96H1.01a.96.96 0 010-1.92h5.98a.96.96 0 010 1.92z"/></symbol><symbol id="spectrum-icon-DoubleGripper" viewBox="0 0 16 4"><path d="M15.45 1.05H.55a.5.5 0 010-1h14.9a.5.5 0 010 1zm.5 2.4a.5.5 0 00-.5-.5H.55a.5.5 0 000 1h14.9a.5.5 0 00.5-.5z"/></symbol><symbol id="spectrum-icon-SingleGripper" viewBox="0 0 24 2"><path d="M23 2H1a1 1 0 010-2h22a1 1 0 010 2z"/></symbol><symbol id="spectrum-icon-TripleGripper" viewBox="0 0 10 8"><path d="M9.45 1.05H.55a.5.5 0 010-1h8.9a.5.5 0 010 1zm.5 2.45a.5.5 0 00-.5-.5H.55a.5.5 0 000 1h8.9a.5.5 0 00.5-.5zm0 3a.5.5 0 00-.5-.5H.55a.5.5 0 000 1h8.9a.5.5 0 00.5-.5z"/></symbol></svg>`;

/**
 * @element sp-icons-medium
 */class IconsMedium extends IconsetSVG{constructor(){super();this.name='ui';// default iconset name for these icons
}renderDefaultContent(){return iconsSVG$1;}/**
     * Overrides createIconName to make icon strings compatible with spectrum-icon id format
     * @param icon
     * @param size
     */getSVGIconName(icon){return `spectrum-icon-${icon}`;}getSanitizedIconName(icon){return icon.replace('spectrum-icon-','');}}

iliadCustomElementsDefine('sp-icons-medium',IconsMedium);

var iconsSVG = y`<svg xmlns="http://www.w3.org/2000/svg"><symbol id="spectrum-icon-Add" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 12.75L3 12.75L3 11.25L11.25 11.25L11.25 3L12.75 3L12.75 11.25L21 11.25L21 12.75L12.75 12.75L12.75 21L11.25 21L11.25 12.75Z"/></symbol><symbol id="spectrum-icon-Alert" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.2613 1.25 12.5037 1.38597 12.64 1.60891L23.64 19.6089C23.7814 19.8404 23.7869 20.1302 23.6541 20.3669C23.5214 20.6035 23.2713 20.75 23 20.75H1C0.728705 20.75 0.478559 20.6035 0.345854 20.3669C0.213148 20.1302 0.218572 19.8404 0.360039 19.6089L11.36 1.60891C11.4963 1.38597 11.7387 1.25 12 1.25ZM21.6627 19.25L12 3.4383L2.33729 19.25H21.6627ZM11.25 13V7.5H12.75V13H11.25ZM12 17.5C12.6904 17.5 13.25 16.9404 13.25 16.25C13.25 15.5596 12.6904 15 12 15C11.3096 15 10.75 15.5596 10.75 16.25C10.75 16.9404 11.3096 17.5 12 17.5Z"/></symbol><symbol id="spectrum-icon-AlertFill" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.2613 1.25 12.5037 1.38597 12.64 1.60891L23.64 19.6089C23.7814 19.8404 23.7869 20.1302 23.6541 20.3669C23.5214 20.6035 23.2713 20.75 23 20.75H1C0.728705 20.75 0.478559 20.6035 0.345854 20.3669C0.213148 20.1302 0.218572 19.8404 0.360039 19.6089L11.36 1.60891C11.4963 1.38597 11.7387 1.25 12 1.25ZM11.25 13V7.5H12.75V13H11.25ZM12 17.5C12.6904 17.5 13.25 16.9404 13.25 16.25C13.25 15.5596 12.6904 15 12 15C11.3096 15 10.75 15.5596 10.75 16.25C10.75 16.9404 11.3096 17.5 12 17.5Z"/></symbol><symbol id="spectrum-icon-AlignArrangeHoriz" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 3V21H2.5V3H4ZM22 21V3H20.5V21H22ZM10.5 17V7H13.5V17H10.5Z"/></symbol><symbol id="spectrum-icon-AlignArrangeVert" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.25 3.75L3.25 3.75L3.25 2.25L21.25 2.25L21.25 3.75ZM3.25 21.75L21.25 21.75L21.25 20.25L3.25 20.25L3.25 21.75ZM7.25 10.25L17.25 10.25L17.25 13.25L7.25 13.25L7.25 10.25Z"/></symbol><symbol id="spectrum-icon-AlignBottom" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 22L3 22L3 20.5L21 20.5L21 22ZM7 18.25L7 2.25L10 2.25L10 18.25L7 18.25ZM14 10.25L14 18.25L17 18.25L17 10.25L14 10.25Z"/></symbol><symbol id="spectrum-icon-AlignHorizCenters" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 14V10H20V7H12.75V3H11.25V7H4V10H11.25V14H8V17H11.25V21H12.75V17H16V14H12.75Z"/></symbol><symbol id="spectrum-icon-AlignLeft" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 21V3H3.75V21H2.25ZM6 7H22V10H6V7ZM14 14H6V17H14V14Z"/></symbol><symbol id="spectrum-icon-AlignRight" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 21V3H20.5V21H22ZM18.25 7H2.25V10H18.25V7ZM10.25 14H18.25V17H10.25V14Z"/></symbol><symbol id="spectrum-icon-AlignTop" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 2.25L3 2.25L3 3.75L21 3.75L21 2.25ZM7 6L7 22L10 22L10 6L7 6ZM14 14L14 6L17 6L17 14L14 14Z"/></symbol><symbol id="spectrum-icon-AlignVertCenters" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 11.25L10 11.25L10 4L7 4L7 11.25L3 11.25L3 12.75L7 12.75L7 20L10 20L10 12.75L14 12.75L14 16L17 16L17 12.75L21 12.75L21 11.25L17 11.25L17 8L14 8L14 11.25Z"/></symbol><symbol id="spectrum-icon-Animation" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 12C7.75 7.99594 10.9959 4.75 15 4.75C19.0041 4.75 22.25 7.99594 22.25 12C22.25 16.0041 19.0041 19.25 15 19.25C10.9959 19.25 7.75 16.0041 7.75 12ZM15 3.25C10.1675 3.25 6.25 7.16751 6.25 12C6.25 16.8325 10.1675 20.75 15 20.75C19.8325 20.75 23.75 16.8325 23.75 12C23.75 7.16751 19.8325 3.25 15 3.25ZM1.75 12C1.75 8.95855 3.62306 6.35279 6.28141 5.27672L5.71859 3.88631C2.51328 5.18378 0.25 8.32668 0.25 12C0.25 15.6733 2.51328 18.8162 5.71859 20.1137L6.28141 18.7233C3.62306 17.6472 1.75 15.0414 1.75 12Z"/></symbol><symbol id="spectrum-icon-ArrowDown" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5303 15.5303L17.5303 10.5303L16.4697 9.46967L12 13.9393L7.53033 9.46967L6.46968 10.5303L11.4697 15.5303C11.7626 15.8232 12.2374 15.8232 12.5303 15.5303Z"/></symbol><symbol id="spectrum-icon-ArrowLeft" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.96967 11.4697L13.9697 3.46967L15.0303 4.53033L7.56066 12L15.0303 19.4697L13.9697 20.5303L5.96967 12.5303C5.67678 12.2374 5.67678 11.7626 5.96967 11.4697Z"/></symbol><symbol id="spectrum-icon-ArrowRight" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0303 11.4697L10.0303 6.46967L8.96967 7.53033L13.4393 12L8.96967 16.4697L10.0303 17.5303L15.0303 12.5303C15.3232 12.2374 15.3232 11.7626 15.0303 11.4697Z"/></symbol><symbol id="spectrum-icon-Backspace" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 5.75C7.26005 5.75 7.03458 5.86481 6.89345 6.05887L2.89345 11.5589C2.70218 11.8219 2.70218 12.1781 2.89345 12.4411L6.89345 17.9411C7.03458 18.1352 7.26005 18.25 7.5 18.25H19C19.4142 18.25 19.75 17.9142 19.75 17.5V6.5C19.75 6.08579 19.4142 5.75 19 5.75H7.5ZM4.42737 12L7.88192 7.25H18.25V16.75H7.88192L4.42737 12ZM16.5303 9.53033L14.0607 12L16.5303 14.4697L15.4697 15.5303L13 13.0607L10.5303 15.5303L9.46967 14.4697L11.9393 12L9.46967 9.53033L10.5303 8.46967L13 10.9393L15.4697 8.46967L16.5303 9.53033Z"/></symbol><symbol id="spectrum-icon-Check" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.53033 18.5303L21.5303 6.53033L20.4697 5.46967L9 16.9393L3.53033 11.4697L2.46967 12.5303L8.46968 18.5303C8.61033 18.671 8.80109 18.75 9 18.75C9.19892 18.75 9.38968 18.671 9.53033 18.5303Z"/></symbol><symbol id="spectrum-icon-CheckFill" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.25C17.6609 22.25 22.25 17.6609 22.25 12C22.25 6.33908 17.6609 1.75 12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25ZM18.0428 9.01751L10.8928 16.5175C10.7464 16.6712 10.5417 16.7555 10.3295 16.7497C10.1173 16.7439 9.91747 16.6484 9.77963 16.487L5.92963 11.9781L7.07037 11.0041L10.3807 14.8809L16.9572 7.98249L18.0428 9.01751Z"/></symbol><symbol id="spectrum-icon-Close" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.9393 12L4.3986 5.45925L5.45926 4.39859L12 10.9393L18.5407 4.39859L19.6014 5.45925L13.0607 12L19.6014 18.5407L18.5407 19.6014L12 13.0606L5.45926 19.6014L4.3986 18.5407L10.9393 12Z"/></symbol><symbol id="spectrum-icon-CloseFull" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 11.75L21 11.75V10.25L14.8107 10.25L21.5303 3.53033L20.4697 2.46967L13.75 9.18934V3L12.25 3V11C12.25 11.1989 12.329 11.3897 12.4697 11.5303C12.6103 11.671 12.8011 11.75 13 11.75ZM11 12.25L3 12.25V13.75L9.18933 13.75L2.46967 20.4697L3.53033 21.5303L10.25 14.8107L10.25 21H11.75V13C11.75 12.8011 11.671 12.6103 11.5303 12.4697C11.3897 12.329 11.1989 12.25 11 12.25Z"/></symbol><symbol id="spectrum-icon-CloudDone" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.75C7.65279 4.75 5.75 6.65279 5.75 9C5.75 9.07263 5.75181 9.14476 5.7554 9.21638L5.78335 9.77555L5.2552 9.96133C3.79496 10.475 2.75 11.8664 2.75 13.5C2.75 15.4015 4.16532 16.9725 6 17.217V18.7265C3.33503 18.4747 1.25 16.2309 1.25 13.5C1.25 11.4027 2.47946 9.59416 4.25521 8.75298C4.38459 5.69193 6.90712 3.25 10 3.25C12.2152 3.25 14.1364 4.50243 15.0967 6.33593C15.3895 6.2795 15.6916 6.25 16 6.25C18.5877 6.25 20.692 8.31918 20.7488 10.8932C21.9495 11.6434 22.75 12.9776 22.75 14.5C22.75 16.8472 20.8472 18.75 18.5 18.75H18V17.25H18.5C20.0188 17.25 21.25 16.0188 21.25 14.5C21.25 13.4 20.6041 12.4493 19.6676 12.0093L19.1966 11.788L19.239 11.2693C19.2463 11.1806 19.25 11.0908 19.25 11C19.25 9.20507 17.7949 7.75 16 7.75C15.6215 7.75 15.2597 7.81439 14.9238 7.9322L14.2341 8.17414L13.9745 7.49086C13.3653 5.88747 11.8145 4.75 10 4.75ZM17.5194 15.541L11.2694 21.541C10.9749 21.8238 10.5083 21.819 10.2197 21.5303L7.46967 18.7803L8.53033 17.7197L10.7607 19.9501L16.4806 14.459L17.5194 15.541Z"/></symbol><symbol id="spectrum-icon-CloudOff" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.75C7.65279 4.75 5.75 6.65279 5.75 9C5.75 9.07263 5.75181 9.14476 5.7554 9.21638L5.78335 9.77555L5.2552 9.96133C3.79496 10.475 2.75 11.8664 2.75 13.5C2.75 15.4015 4.16532 16.9725 6 17.217V18.7265C3.33503 18.4747 1.25 16.2309 1.25 13.5C1.25 11.4027 2.47946 9.59416 4.25521 8.75298C4.38459 5.69193 6.90712 3.25 10 3.25C12.2152 3.25 14.1364 4.50243 15.0967 6.33593C15.3895 6.2795 15.6916 6.25 16 6.25C18.5877 6.25 20.692 8.31918 20.7488 10.8932C21.9495 11.6434 22.75 12.9776 22.75 14.5C22.75 16.8472 20.8472 18.75 18.5 18.75H18V17.25H18.5C20.0188 17.25 21.25 16.0188 21.25 14.5C21.25 13.4 20.6041 12.4493 19.6676 12.0093L19.1966 11.788L19.239 11.2693C19.2463 11.1806 19.25 11.0908 19.25 11C19.25 9.20507 17.7949 7.75 16 7.75C15.6215 7.75 15.2597 7.81439 14.9238 7.9322L14.2341 8.17414L13.9745 7.49086C13.3653 5.88747 11.8145 4.75 10 4.75ZM8.46967 15.5303L10.9393 18L8.46967 20.4697L9.53033 21.5303L12 19.0607L14.4697 21.5303L15.5303 20.4697L13.0607 18L15.5303 15.5303L14.4697 14.4697L12 16.9393L9.53033 14.4697L8.46967 15.5303Z"/></symbol><symbol id="spectrum-icon-Colorpicker" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9859 3.73746C17.2551 2.46825 19.3129 2.46825 20.5821 3.73746C21.8513 5.00666 21.8513 7.06445 20.5821 8.33365L16.3802 12.5356L18.0303 14.1857L16.9697 15.2464L15.3195 13.5962L7.33367 21.5821C7.16869 21.747 6.93634 21.8258 6.70504 21.7953L6.69776 21.7943L6.67343 21.7912C6.65175 21.7884 6.61938 21.7844 6.57775 21.7793C6.49445 21.7692 6.3743 21.755 6.22857 21.7393C5.93621 21.7078 5.54507 21.6703 5.14405 21.6454C4.73841 21.6202 4.3433 21.6093 4.03586 21.6263C3.88059 21.6349 3.7711 21.6494 3.70372 21.6647L3.69856 21.6658C3.40593 21.8716 2.9991 21.8437 2.73748 21.5821C2.47585 21.3204 2.44792 20.9136 2.65369 20.621L2.65488 20.6158C2.67011 20.5484 2.68466 20.4389 2.69323 20.2837C2.7102 19.9762 2.69934 19.5811 2.67417 19.1755C2.64928 18.7745 2.61177 18.3833 2.58023 18.091C2.56451 17.9452 2.55038 17.8251 2.54024 17.7418C2.53518 17.7002 2.53111 17.6678 2.52835 17.6461L2.52523 17.6218L2.5243 17.6147M2.64227 20.6602C2.64227 20.6602 2.64336 20.6559 2.64635 20.6489C2.64391 20.6569 2.64227 20.6602 2.64227 20.6602ZM4.19986 20.1197C4.2062 19.7864 4.19241 19.4229 4.17129 19.0826C4.14453 18.6514 4.10459 18.2361 4.07158 17.9301C4.06617 17.88 4.06094 17.8327 4.05597 17.7887L11.784 10.0607L14.2589 12.5356L6.53085 20.2636C6.4868 20.2586 6.43953 20.2534 6.38945 20.248C6.08344 20.215 5.66817 20.175 5.23694 20.1482C4.89659 20.1271 4.53311 20.1133 4.19986 20.1197ZM11.8446 8L10.0303 6.18571L8.96967 7.24637L10.8033 9.08003M3.67064 21.6732C3.66363 21.6762 3.65935 21.6773 3.65935 21.6773C3.65935 21.6773 3.66258 21.6756 3.67064 21.6732Z"/></symbol><symbol id="spectrum-icon-Command" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 8C5.25 6.48122 6.48122 5.25 8 5.25C9.51878 5.25 10.75 6.48122 10.75 8V9.25H13.25V8C13.25 6.48122 14.4812 5.25 16 5.25C17.5188 5.25 18.75 6.48122 18.75 8C18.75 9.51878 17.5188 10.75 16 10.75H14.75V13.25H16C17.5188 13.25 18.75 14.4812 18.75 16C18.75 17.5188 17.5188 18.75 16 18.75C14.4812 18.75 13.25 17.5188 13.25 16V14.75H10.75V16C10.75 17.5188 9.51878 18.75 8 18.75C6.48122 18.75 5.25 17.5188 5.25 16C5.25 14.4812 6.48122 13.25 8 13.25H9.25V10.75H8C6.48122 10.75 5.25 9.51878 5.25 8ZM9.25 9.25V8C9.25 7.30964 8.69036 6.75 8 6.75C7.30964 6.75 6.75 7.30964 6.75 8C6.75 8.69036 7.30964 9.25 8 9.25H9.25ZM10.75 10.75V13.25H13.25V10.75H10.75ZM9.25 14.75H8C7.30964 14.75 6.75 15.3096 6.75 16C6.75 16.6904 7.30964 17.25 8 17.25C8.69036 17.25 9.25 16.6904 9.25 16V14.75ZM14.75 14.75V16C14.75 16.6904 15.3096 17.25 16 17.25C16.6904 17.25 17.25 16.6904 17.25 16C17.25 15.3096 16.6904 14.75 16 14.75H14.75ZM14.75 9.25H16C16.6904 9.25 17.25 8.69036 17.25 8C17.25 7.30964 16.6904 6.75 16 6.75C15.3096 6.75 14.75 7.30964 14.75 8V9.25Z"/></symbol><symbol id="spectrum-icon-Contacts" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 7C2.25 4.92893 3.92893 3.25 6 3.25H18C20.0711 3.25 21.75 4.92893 21.75 7V10C21.75 12.0711 20.0711 13.75 18 13.75H6C3.92893 13.75 2.25 12.0711 2.25 10V7ZM6 4.75C4.75736 4.75 3.75 5.75736 3.75 7V10C3.75 11.2426 4.75736 12.25 6 12.25H18C19.2426 12.25 20.25 11.2426 20.25 10V7C20.25 5.75736 19.2426 4.75 18 4.75H6ZM2.25 20C2.25 19.5858 2.58579 19.25 3 19.25H21C21.4142 19.25 21.75 19.5858 21.75 20C21.75 20.4142 21.4142 20.75 21 20.75H3C2.58579 20.75 2.25 20.4142 2.25 20ZM3 16.25C2.58579 16.25 2.25 16.5858 2.25 17C2.25 17.4142 2.58579 17.75 3 17.75H21C21.4142 17.75 21.75 17.4142 21.75 17C21.75 16.5858 21.4142 16.25 21 16.25H3Z"/></symbol><symbol id="spectrum-icon-Container" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 17.75V22H7.75V17.75L16.25 17.75V22H17.75V17.75H22V16.25H17.75V7.75H22V6.25H17.75V2H16.25V6.25L7.75 6.25V2H6.25V6.25H2V7.75H6.25V16.25H2V17.75H6.25ZM7.75 16.25L16.25 16.25V7.75L7.75 7.75V16.25Z"/></symbol><symbol id="spectrum-icon-Corner" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2.25C3.92893 2.25 2.25 3.92893 2.25 6V9H3.75V6C3.75 4.75736 4.75736 3.75 6 3.75H9V2.25H6ZM18 21.75C20.0711 21.75 21.75 20.0711 21.75 18V15H20.25V18C20.25 19.2426 19.2426 20.25 18 20.25H15V21.75H18ZM2.25 18C2.25 20.0711 3.92893 21.75 6 21.75H9V20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V15H2.25V18ZM18 2.25C20.0711 2.25 21.75 3.92893 21.75 6V9H20.25V6C20.25 4.75736 19.2426 3.75 18 3.75H15V2.25H18Z"/></symbol><symbol id="spectrum-icon-CornerRadiusBottomLeft" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.4399 20.2072C18.2983 20.2352 18.1512 20.25 18 20.25H17.25V21.75H18C18.2495 21.75 18.494 21.7255 18.731 21.6786L18.4399 20.2072ZM15.75 20.25H14.25V21.75H15.75V20.25ZM12.75 20.25H12H11.25H9.75H9C8.94329 20.25 8.88681 20.2491 8.83057 20.2473C6.06729 20.1597 3.84282 17.9367 3.75282 15.1741C3.75095 15.1163 3.75 15.0583 3.75 15V14.25V12.75V12V11.25H2.25V12V12.75V14.25V15C2.25 15.1053 2.25241 15.21 2.2572 15.3142C2.4213 18.8962 5.37738 21.75 9 21.75H9.75H11.25H12H12.75V20.25ZM19.8715 19.2496C19.707 19.4953 19.4953 19.707 19.2496 19.8715L20.0841 21.1179C20.4927 20.8444 20.8444 20.4927 21.1179 20.0841L19.8715 19.2496ZM20.25 18C20.25 18.1512 20.2352 18.2983 20.2072 18.4399L21.6786 18.731C21.7255 18.494 21.75 18.2495 21.75 18V17.25H20.25V18ZM20.25 14.25V15.75H21.75V14.25H20.25ZM20.25 11.25V12.75H21.75V11.25H20.25ZM20.25 8.25V9.75H21.75V8.25H20.25ZM3.75 9.75V8.25H2.25V9.75H3.75ZM20.25 6V6.75H21.75V6C21.75 5.75051 21.7255 5.506 21.6786 5.26896L20.2072 5.56007C20.2352 5.70175 20.25 5.84877 20.25 6ZM3.75 6.75V6C3.75 5.84877 3.76481 5.70175 3.79284 5.56007L2.32136 5.26896C2.27447 5.506 2.25 5.75051 2.25 6V6.75H3.75ZM19.2496 4.12853C19.4953 4.29301 19.707 4.5047 19.8715 4.75039L21.1179 3.91591C20.8444 3.50729 20.4927 3.15564 20.0841 2.88208L19.2496 4.12853ZM4.12853 4.75039C4.29301 4.5047 4.5047 4.29301 4.75039 4.12853L3.91591 2.88208C3.50729 3.15564 3.15564 3.50729 2.88208 3.91591L4.12853 4.75039ZM18 3.75C18.1512 3.75 18.2983 3.76481 18.4399 3.79284L18.731 2.32136C18.494 2.27447 18.2495 2.25 18 2.25H17.25V3.75H18ZM5.56007 3.79284C5.70175 3.76481 5.84877 3.75 6 3.75H6.75V2.25H6C5.75051 2.25 5.506 2.27447 5.26896 2.32136L5.56007 3.79284ZM14.25 3.75H15.75V2.25H14.25V3.75ZM11.25 2.25V3.75H12.75V2.25H11.25ZM9.75 3.75V2.25H8.25V3.75H9.75Z"/></symbol><symbol id="spectrum-icon-CornerRadiusBottomRight" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.56007 20.2072C5.70175 20.2352 5.84877 20.25 6 20.25H6.75V21.75H6C5.75051 21.75 5.506 21.7255 5.26896 21.6786L5.56007 20.2072ZM8.25 20.25H9.75V21.75H8.25V20.25ZM11.25 20.25H12H12.75H14.25H15C15.0567 20.25 15.1132 20.2491 15.1694 20.2473C17.9327 20.1597 20.1572 17.9367 20.2472 15.1741C20.2491 15.1163 20.25 15.0583 20.25 15V14.25V12.75V12V11.25H21.75V12V12.75V14.25V15C21.75 15.1053 21.7476 15.21 21.7428 15.3142C21.5787 18.8962 18.6226 21.75 15 21.75H14.25H12.75H12H11.25V20.25ZM4.12853 19.2496C4.29302 19.4953 4.5047 19.707 4.75039 19.8715L3.91591 21.1179C3.50729 20.8444 3.15564 20.4927 2.88208 20.0841L4.12853 19.2496ZM3.75 18C3.75 18.1512 3.76481 18.2983 3.79284 18.4399L2.32136 18.731C2.27447 18.494 2.25 18.2495 2.25 18V17.25H3.75V18ZM3.75 14.25V15.75H2.25V14.25H3.75ZM3.75 11.25V12.75H2.25V11.25H3.75ZM3.75 8.25V9.75H2.25V8.25H3.75ZM20.25 9.75V8.25H21.75V9.75H20.25ZM3.75 6V6.75H2.25V6C2.25 5.75051 2.27447 5.506 2.32136 5.26896L3.79284 5.56007C3.76481 5.70175 3.75 5.84877 3.75 6ZM20.25 6.75V6C20.25 5.84877 20.2352 5.70175 20.2072 5.56007L21.6786 5.26896C21.7255 5.506 21.75 5.75051 21.75 6V6.75H20.25ZM4.75039 4.12853C4.5047 4.29301 4.29302 4.5047 4.12853 4.75039L2.88208 3.91591C3.15564 3.50729 3.50729 3.15564 3.91591 2.88208L4.75039 4.12853ZM19.8715 4.75039C19.707 4.5047 19.4953 4.29301 19.2496 4.12853L20.0841 2.88208C20.4927 3.15564 20.8444 3.50729 21.1179 3.91591L19.8715 4.75039ZM6 3.75C5.84877 3.75 5.70175 3.76481 5.56007 3.79284L5.26896 2.32136C5.506 2.27447 5.75052 2.25 6 2.25H6.75V3.75H6ZM18.4399 3.79284C18.2983 3.76481 18.1512 3.75 18 3.75H17.25V2.25H18C18.2495 2.25 18.494 2.27447 18.731 2.32136L18.4399 3.79284ZM9.75 3.75H8.25V2.25H9.75V3.75ZM12.75 2.25V3.75H11.25V2.25H12.75ZM14.25 3.75V2.25H15.75V3.75H14.25Z"/></symbol><symbol id="spectrum-icon-CornerRadiusTopLeft" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.4399 3.79284C18.2983 3.76481 18.1512 3.75 18 3.75H17.25V2.25H18C18.2495 2.25 18.494 2.27447 18.731 2.32136L18.4399 3.79284ZM15.75 3.75H14.25V2.25H15.75V3.75ZM12.75 3.75H12H11.25H9.75H9C8.94329 3.75 8.88681 3.7509 8.83057 3.75267C6.06729 3.84028 3.84282 6.06326 3.75282 8.82594C3.75095 8.8837 3.75 8.94173 3.75 9V9.75V11.25V12V12.75H2.25V12V11.25V9.75V9C2.25 8.89474 2.25241 8.79001 2.2572 8.68584C2.4213 5.10376 5.37738 2.25 9 2.25H9.75H11.25H12H12.75V3.75ZM19.8715 4.75039C19.707 4.5047 19.4953 4.29302 19.2496 4.12853L20.0841 2.88208C20.4927 3.15564 20.8444 3.50729 21.1179 3.91591L19.8715 4.75039ZM20.25 6C20.25 5.84877 20.2352 5.70175 20.2072 5.56007L21.6786 5.26896C21.7255 5.506 21.75 5.75052 21.75 6V6.75H20.25V6ZM20.25 9.75V8.25H21.75V9.75H20.25ZM20.25 12.75V11.25H21.75V12.75H20.25ZM20.25 15.75V14.25H21.75V15.75H20.25ZM3.75 14.25V15.75H2.25V14.25H3.75ZM20.25 18V17.25H21.75V18C21.75 18.2495 21.7255 18.494 21.6786 18.731L20.2072 18.4399C20.2352 18.2983 20.25 18.1512 20.25 18ZM3.75 17.25V18C3.75 18.1512 3.76481 18.2983 3.79284 18.4399L2.32136 18.731C2.27447 18.494 2.25 18.2495 2.25 18V17.25H3.75ZM19.2496 19.8715C19.4953 19.707 19.707 19.4953 19.8715 19.2496L21.1179 20.0841C20.8444 20.4927 20.4927 20.8444 20.0841 21.1179L19.2496 19.8715ZM4.12853 19.2496C4.29301 19.4953 4.5047 19.707 4.75039 19.8715L3.91591 21.1179C3.50729 20.8444 3.15564 20.4927 2.88208 20.0841L4.12853 19.2496ZM18 20.25C18.1512 20.25 18.2983 20.2352 18.4399 20.2072L18.731 21.6786C18.494 21.7255 18.2495 21.75 18 21.75H17.25V20.25H18ZM5.56007 20.2072C5.70175 20.2352 5.84877 20.25 6 20.25H6.75V21.75H6C5.75051 21.75 5.506 21.7255 5.26896 21.6786L5.56007 20.2072ZM14.25 20.25H15.75V21.75H14.25V20.25ZM11.25 21.75V20.25H12.75V21.75H11.25ZM9.75 20.25V21.75H8.25V20.25H9.75Z"/></symbol><symbol id="spectrum-icon-CornerRadiusTopRight" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.56007 3.79284C5.70175 3.76481 5.84877 3.75 6 3.75H6.75V2.25H6C5.75051 2.25 5.506 2.27447 5.26896 2.32136L5.56007 3.79284ZM8.25 3.75H9.75V2.25H8.25V3.75ZM11.25 3.75H12H12.75H14.25H15C15.0567 3.75 15.1132 3.7509 15.1694 3.75267C17.9327 3.84028 20.1572 6.06326 20.2472 8.82594C20.2491 8.8837 20.25 8.94173 20.25 9V9.75V11.25V12V12.75H21.75V12V11.25V9.75V9C21.75 8.89474 21.7476 8.79001 21.7428 8.68584C21.5787 5.10376 18.6226 2.25 15 2.25H14.25H12.75H12H11.25V3.75ZM4.12853 4.75039C4.29302 4.5047 4.5047 4.29302 4.75039 4.12853L3.91591 2.88208C3.50729 3.15564 3.15564 3.50729 2.88208 3.91591L4.12853 4.75039ZM3.75 6C3.75 5.84877 3.76481 5.70175 3.79284 5.56007L2.32136 5.26896C2.27447 5.506 2.25 5.75052 2.25 6V6.75H3.75V6ZM3.75 9.75V8.25H2.25V9.75H3.75ZM3.75 12.75V11.25H2.25V12.75H3.75ZM3.75 15.75V14.25H2.25V15.75H3.75ZM20.25 14.25V15.75H21.75V14.25H20.25ZM3.75 18V17.25H2.25V18C2.25 18.2495 2.27447 18.494 2.32136 18.731L3.79284 18.4399C3.76481 18.2983 3.75 18.1512 3.75 18ZM20.25 17.25V18C20.25 18.1512 20.2352 18.2983 20.2072 18.4399L21.6786 18.731C21.7255 18.494 21.75 18.2495 21.75 18V17.25H20.25ZM4.75039 19.8715C4.5047 19.707 4.29302 19.4953 4.12853 19.2496L2.88208 20.0841C3.15564 20.4927 3.50729 20.8444 3.91591 21.1179L4.75039 19.8715ZM19.8715 19.2496C19.707 19.4953 19.4953 19.707 19.2496 19.8715L20.0841 21.1179C20.4927 20.8444 20.8444 20.4927 21.1179 20.0841L19.8715 19.2496ZM6 20.25C5.84877 20.25 5.70175 20.2352 5.56007 20.2072L5.26896 21.6786C5.506 21.7255 5.75052 21.75 6 21.75H6.75V20.25H6ZM18.4399 20.2072C18.2983 20.2352 18.1512 20.25 18 20.25H17.25V21.75H18C18.2495 21.75 18.494 21.7255 18.731 21.6786L18.4399 20.2072ZM9.75 20.25H8.25V21.75H9.75V20.25ZM12.75 21.75V20.25H11.25V21.75H12.75ZM14.25 20.25V21.75H15.75V20.25H14.25Z"/></symbol><symbol id="spectrum-icon-Crop" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 5.75V16C4.25 18.0711 5.92893 19.75 8 19.75H18.25V22H19.75V19.75H22V18.25H19.75V8C19.75 5.92893 18.0711 4.25 16 4.25H5.75V2H4.25V4.25H2V5.75H4.25ZM5.75 5.75V16C5.75 17.2426 6.75736 18.25 8 18.25H18.25V8C18.25 6.75736 17.2426 5.75 16 5.75H5.75Z"/></symbol><symbol id="spectrum-icon-DataBarchart" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0303 13.0303L21.5303 5.53034L20.4697 4.46968L13.5 11.4393L10.0303 7.96967C9.88967 7.82902 9.69891 7.75 9.49999 7.75C9.30108 7.75 9.11032 7.82902 8.96966 7.96967L2.46967 14.4697L3.53033 15.5303L9.5 9.56066L12.9697 13.0303C13.2626 13.3232 13.7374 13.3232 14.0303 13.0303ZM20 20.25H4V21.75H20V20.25Z"/></symbol><symbol id="spectrum-icon-Desktop" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 2.25C2.92893 2.25 1.25 3.92893 1.25 6V15C1.25 17.0711 2.92893 18.75 5 18.75H19C21.0711 18.75 22.75 17.0711 22.75 15V6C22.75 3.92893 21.0711 2.25 19 2.25H5ZM2.75 6C2.75 4.75736 3.75736 3.75 5 3.75H19C20.2426 3.75 21.25 4.75736 21.25 6V15C21.25 16.2426 20.2426 17.25 19 17.25H5C3.75736 17.25 2.75 16.2426 2.75 15V6ZM8 21.75H16V20.25H8V21.75Z"/></symbol><symbol id="spectrum-icon-DirectionDown" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.53 15.5303L12.53 21.5303C12.2371 21.8232 11.7622 21.8232 11.4693 21.5303L5.46934 15.5303L6.53 14.4697L11.2497 19.1893L11.2497 3L12.7497 3L12.7497 19.1893L17.4693 14.4697L18.53 15.5303Z"/></symbol><symbol id="spectrum-icon-DirectionLeft" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.21967 5.46967L3.21967 11.4697C2.92678 11.7626 2.92678 12.2374 3.21967 12.5303L9.21967 18.5303L10.2803 17.4697L5.56066 12.75H21.75V11.25H5.56066L10.2803 6.53033L9.21967 5.46967Z"/></symbol><symbol id="spectrum-icon-DirectionRight" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 5.46967L21.5303 11.4697C21.8232 11.7626 21.8232 12.2374 21.5303 12.5303L15.5303 18.5303L14.4697 17.4697L19.1893 12.75H3V11.25H19.1893L14.4697 6.53033L15.5303 5.46967Z"/></symbol><symbol id="spectrum-icon-DirectionUp" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.53 8.46967L12.53 2.46967C12.2371 2.17678 11.7622 2.17678 11.4693 2.46967L5.46934 8.46967L6.53 9.53033L11.2497 4.81066L11.2497 21L12.7497 21L12.7497 4.81066L17.4693 9.53033L18.53 8.46967Z"/></symbol><symbol id="spectrum-icon-DragHandle" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 7C13.5 7.82843 14.1716 8.5 15 8.5C15.8284 8.5 16.5 7.82843 16.5 7C16.5 6.17157 15.8284 5.5 15 5.5C14.1716 5.5 13.5 6.17157 13.5 7ZM9 18.5C8.17157 18.5 7.5 17.8284 7.5 17C7.5 16.1716 8.17157 15.5 9 15.5C9.82843 15.5 10.5 16.1716 10.5 17C10.5 17.8284 9.82843 18.5 9 18.5ZM7.5 7C7.5 7.82843 8.17157 8.5 9 8.5C9.82843 8.5 10.5 7.82843 10.5 7C10.5 6.17157 9.82843 5.5 9 5.5C8.17157 5.5 7.5 6.17157 7.5 7ZM7.5 12C7.5 12.8284 8.17157 13.5 9 13.5C9.82843 13.5 10.5 12.8284 10.5 12C10.5 11.1716 9.82843 10.5 9 10.5C8.17157 10.5 7.5 11.1716 7.5 12ZM15 13.5C14.1716 13.5 13.5 12.8284 13.5 12C13.5 11.1716 14.1716 10.5 15 10.5C15.8284 10.5 16.5 11.1716 16.5 12C16.5 12.8284 15.8284 13.5 15 13.5ZM13.5 17C13.5 17.8284 14.1716 18.5 15 18.5C15.8284 18.5 16.5 17.8284 16.5 17C16.5 16.1716 15.8284 15.5 15 15.5C14.1716 15.5 13.5 16.1716 13.5 17Z"/></symbol><symbol id="spectrum-icon-Eye" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.5095 13.342C18.1794 4.68172 5.82064 4.68172 1.49048 13.342L1.32918 13.6646L2.67082 14.3355L2.83212 14.0129C6.60949 6.45811 17.3905 6.45811 21.1679 14.0129L21.3292 14.3355L22.6708 13.6646L22.5095 13.342ZM12 18C13.6569 18 15 16.6569 15 15C15 13.3432 13.6569 12 12 12C10.3431 12 9 13.3432 9 15C9 16.6569 10.3431 18 12 18Z"/></symbol><symbol id="spectrum-icon-EyeDisplay" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.8571 15.9177L20.4697 21.5303L21.5303 20.4697L3.53033 2.46967L2.46967 3.53033L6.91896 7.97962C4.69302 9.03277 2.75137 10.8202 1.49048 13.342L1.32918 13.6646L2.67082 14.3355L2.83212 14.0129C4.02371 11.6297 5.91224 9.99828 8.05802 9.11867L11.0823 12.143C9.87434 12.5307 9 13.6633 9 15C9 16.6569 10.3431 18 12 18C13.3368 18 14.4694 17.1257 14.8571 15.9177ZM10.1503 6.98965L11.5185 8.35782C15.3151 8.18384 19.1959 10.0689 21.1679 14.0129L21.3292 14.3355L22.6708 13.6646L22.5095 13.342C20.0234 8.36971 14.8906 6.25225 10.1503 6.98965Z"/></symbol><symbol id="spectrum-icon-EyeOff" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.67082 9.6646L2.83212 9.98719C6.60949 17.5419 17.3905 17.5419 21.1679 9.98719L21.3292 9.6646L22.6708 10.3354L22.5095 10.658C18.1794 19.3183 5.82064 19.3183 1.49048 10.658L1.32918 10.3354L2.67082 9.6646Z"/></symbol><symbol id="spectrum-icon-FileFolder" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 3.75C4.75736 3.75 3.75 4.75736 3.75 6V18C3.75 19.2426 4.75736 20.25 6 20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V10C20.25 8.75736 19.2426 7.75 18 7.75H15.618C14.9552 7.75 14.3492 7.3755 14.0528 6.78262L12.6056 3.8882C12.5632 3.8035 12.4767 3.75 12.382 3.75H6ZM2.25 6C2.25 3.92893 3.92893 2.25 6 2.25H12.382C13.0448 2.25 13.6508 2.6245 13.9472 3.21738L15.3944 6.1118C15.4368 6.1965 15.5233 6.25 15.618 6.25H18C20.0711 6.25 21.75 7.92893 21.75 10V18C21.75 20.0711 20.0711 21.75 18 21.75H6C3.92893 21.75 2.25 20.0711 2.25 18V6Z"/></symbol><symbol id="spectrum-icon-Focus" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 6C2.25 3.92893 3.92893 2.25 6 2.25H9V3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V9H2.25V6ZM21.75 18C21.75 20.0711 20.0711 21.75 18 21.75H15V20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V15H21.75V18ZM6 21.75C3.92893 21.75 2.25 20.0711 2.25 18V15H3.75V18C3.75 19.2426 4.75736 20.25 6 20.25H9V21.75H6ZM21.75 6C21.75 3.92893 20.0711 2.25 18 2.25H15V3.75H18C19.2426 3.75 20.25 4.75736 20.25 6V9H21.75V6ZM12 10C10.895 10 10 10.895 10 12C10 13.105 10.895 14 12 14C13.105 14 14 13.105 14 12C14 10.895 13.105 10 12 10Z"/></symbol><symbol id="spectrum-icon-FormatCenter" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 6.75H3V5.25H21V6.75ZM21 18.75H3V17.25H21V18.75ZM7 12.75H16V11.25H7V12.75Z"/></symbol><symbol id="spectrum-icon-FormatIndentDecrease" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.46967 3.96967L2.46967 7.96967C2.17678 8.26256 2.17678 8.73743 2.46967 9.03033L6.46967 13.0303L7.53033 11.9697L4.06066 8.5L7.53033 5.03033L6.46967 3.96967ZM12 5.75H21V4.25H12V5.75ZM12 12.75H21V11.25H12V12.75ZM21 18.25V19.75H3V18.25H21Z"/></symbol><symbol id="spectrum-icon-FormatIndentIncrease" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.31066 3.96967L8.31066 7.96967C8.60355 8.26256 8.60355 8.73743 8.31066 9.03033L4.31066 13.0303L3.25 11.9697L6.71967 8.5L3.25 5.03033L4.31066 3.96967ZM12 5.75H21V4.25H12V5.75ZM12 12.75H21V11.25H12V12.75ZM21 18.25V19.75H3V18.25H21Z"/></symbol><symbol id="spectrum-icon-FormatJustified" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 6.75H3V5.25H21V6.75ZM21 12.75H3V11.25H21V12.75ZM3 18.75H12V17.25H3V18.75Z"/></symbol><symbol id="spectrum-icon-FormatLeft" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 6.75H3V5.25H21V6.75ZM12 12.75H3V11.25H12V12.75ZM3 17.25V18.75H21V17.25H3Z"/></symbol><symbol id="spectrum-icon-FormatListBulleted" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.5C4.82843 6.5 5.5 5.82843 5.5 5C5.5 4.17157 4.82843 3.5 4 3.5C3.17157 3.5 2.5 4.17157 2.5 5C2.5 5.82843 3.17157 6.5 4 6.5ZM4 13.5C4.82843 13.5 5.5 12.8284 5.5 12C5.5 11.1716 4.82843 10.5 4 10.5C3.17157 10.5 2.5 11.1716 2.5 12C2.5 12.8284 3.17157 13.5 4 13.5ZM5.5 19C5.5 19.8284 4.82843 20.5 4 20.5C3.17157 20.5 2.5 19.8284 2.5 19C2.5 18.1716 3.17157 17.5 4 17.5C4.82843 17.5 5.5 18.1716 5.5 19ZM9 5.75H21V4.25H9V5.75ZM9 12.75H21V11.25H9V12.75ZM21 19.75H9V18.25H21V19.75Z"/></symbol><symbol id="spectrum-icon-FormatListNumbered" viewBox="0 0 24 24"><path d="M2 17.5H4.66667V18.1667H3.33333V19.5H4.66667V20.1667H2V21.5H6V16.1667H2V17.5ZM3.33333 7.83333H4.66667V2.5H2V3.83333H3.33333V7.83333ZM2 10.8333H4.4L2 13.6333V14.8333H6V13.5H3.6L6 10.7V9.5H2V10.8333Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 5.75H9V4.25H21V5.75ZM21 12.75H9V11.25H21V12.75ZM9 19.75H21V18.25H9V19.75Z"/></symbol><symbol id="spectrum-icon-FormatPacingLines" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 1.25H5V2.75L19 2.75V1.25ZM19 21.25H5V22.75H19V21.25ZM11.7492 5.2501C12.052 5.24498 12.3281 5.42243 12.4493 5.69995L17.6874 17.7L16.3126 18.3L14.763 14.75L9.09658 14.75L7.69712 18.2766L6.30288 17.7234L11.0648 5.72336C11.1765 5.4419 11.4465 5.25522 11.7492 5.2501ZM9.69181 13.25L11.7949 7.95027L14.1082 13.25L9.69181 13.25Z"/></symbol><symbol id="spectrum-icon-FormatRight" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.75H21V5.25H3V6.75ZM12 12.75H21V11.25H12V12.75ZM21 17.25V18.75H3V17.25H21Z"/></symbol><symbol id="spectrum-icon-FormatSpacingLetter" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 20V4H3.75V20H2.25ZM20.25 20V4H21.75V20H20.25ZM11.7492 5.25011C12.052 5.24499 12.3281 5.42244 12.4493 5.69996L17.6874 17.7L16.3126 18.3L14.763 14.75L9.09658 14.75L7.69712 18.2766L6.30288 17.7234L11.0648 5.72337C11.1765 5.44191 11.4465 5.25523 11.7492 5.25011ZM11.7949 7.95028L14.1082 13.25L9.69181 13.25L11.7949 7.95028Z"/></symbol><symbol id="spectrum-icon-Help" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 6.75C10.7574 6.75 9.75 7.75736 9.75 9V9.5H8.25V9C8.25 6.92893 9.92893 5.25 12 5.25H12.3849C14.2434 5.25 15.75 6.75662 15.75 8.61512V8.77512C15.75 10.128 14.8843 11.3291 13.6008 11.757C13.0927 11.9263 12.75 12.4018 12.75 12.9374V14H11.25V12.9374C11.25 11.7562 12.0059 10.7075 13.1265 10.3339C13.7974 10.1103 14.25 9.48238 14.25 8.77512V8.61512C14.25 7.58504 13.415 6.75 12.3849 6.75H12ZM12 18.5C12.6904 18.5 13.25 17.9404 13.25 17.25C13.25 16.5596 12.6904 16 12 16C11.3096 16 10.75 16.5596 10.75 17.25C10.75 17.9404 11.3096 18.5 12 18.5Z"/></symbol><symbol id="spectrum-icon-HelpFill" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 6.75C10.7574 6.75 9.75 7.75736 9.75 9V9.5H8.25V9C8.25 6.92893 9.92893 5.25 12 5.25H12.3849C14.2434 5.25 15.75 6.75662 15.75 8.61512V8.77512C15.75 10.128 14.8843 11.3291 13.6008 11.757C13.0927 11.9263 12.75 12.4018 12.75 12.9374V14H11.25V12.9374C11.25 11.7562 12.0059 10.7075 13.1265 10.3339C13.7974 10.1103 14.25 9.48238 14.25 8.77512V8.61512C14.25 7.58504 13.415 6.75 12.3849 6.75H12ZM12 18.5C12.6904 18.5 13.25 17.9404 13.25 17.25C13.25 16.5596 12.6904 16 12 16C11.3096 16 10.75 16.5596 10.75 17.25C10.75 17.9404 11.3096 18.5 12 18.5Z"/></symbol><symbol id="spectrum-icon-Home" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7519 3.73343C11.5077 3.22958 12.4923 3.22958 13.2481 3.73343L19.2481 7.73343C19.874 8.15073 20.25 8.85325 20.25 9.60555V18C20.25 19.2426 19.2426 20.25 18 20.25H12.75V15H11.25V20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V9.60555C3.75 8.85325 4.12598 8.15073 4.75192 7.73343L10.7519 3.73343ZM14.0801 2.48536C12.8205 1.64561 11.1795 1.64561 9.91987 2.48536L3.91987 6.48536C2.87663 7.18085 2.25 8.35172 2.25 9.60555V18C2.25 20.0711 3.92893 21.75 6 21.75H18C20.0711 21.75 21.75 20.0711 21.75 18V9.60555C21.75 8.35172 21.1234 7.18085 20.0801 6.48536L14.0801 2.48536Z"/></symbol><symbol id="spectrum-icon-Image" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 6C2.25 3.92893 3.92893 2.25 6 2.25H18C20.0711 2.25 21.75 3.92893 21.75 6V18C21.75 20.0711 20.0711 21.75 18 21.75H6C3.92893 21.75 2.25 20.0711 2.25 18V6ZM6 3.75C4.75736 3.75 3.75 4.75736 3.75 6V18C3.75 18.4781 3.89914 18.9214 4.15343 19.2859L10.7626 12.6768C11.446 11.9934 12.554 11.9934 13.2374 12.6768L16 15.4393L17.2626 14.1768C17.946 13.4934 19.054 13.4934 19.7374 14.1768L20.25 14.6893V6C20.25 4.75736 19.2426 3.75 18 3.75H6ZM20.25 16.8107L19.9697 16.5303L18.6768 15.2374C18.5791 15.1398 18.4209 15.1398 18.3232 15.2374L16.5303 17.0303L14.5303 19.0303L14 19.5607L12.9393 18.5L13.4697 17.9697L14.9393 16.5L12.1768 13.7374C12.0791 13.6398 11.9209 13.6398 11.8232 13.7374L5.39338 20.1673C5.58637 20.2212 5.78982 20.25 6 20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V16.8107ZM10.5 8.75C10.5 9.7165 9.7165 10.5 8.75 10.5C7.7835 10.5 7 9.7165 7 8.75C7 7.7835 7.7835 7 8.75 7C9.7165 7 10.5 7.7835 10.5 8.75Z"/></symbol><symbol id="spectrum-icon-Info" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM11.25 11.5H10V10H12C12.4142 10 12.75 10.3358 12.75 10.75V17H14V18.5H12H10V17H11.25V11.5ZM12 8.25C12.6904 8.25 13.25 7.69036 13.25 7C13.25 6.30964 12.6904 5.75 12 5.75C11.3096 5.75 10.75 6.30964 10.75 7C10.75 7.69036 11.3096 8.25 12 8.25Z"/></symbol><symbol id="spectrum-icon-InfoFill" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM11.25 11.5H10V10H12C12.4142 10 12.75 10.3358 12.75 10.75V17H14V18.5H12H10V17H11.25V11.5ZM12 8.25C12.6904 8.25 13.25 7.69036 13.25 7C13.25 6.30964 12.6904 5.75 12 5.75C11.3096 5.75 10.75 6.30964 10.75 7C10.75 7.69036 11.3096 8.25 12 8.25Z"/></symbol><symbol id="spectrum-icon-Keyline" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.3767 2.94995C15.0541 2.30922 13.5697 1.94995 12.0014 1.94995C10.4331 1.94995 8.94875 2.30922 7.6261 2.94995H6C4.31554 2.94995 2.95 4.31548 2.95 5.99995V7.62907C2.31105 8.95024 1.95283 10.4326 1.95283 11.9985C1.95283 13.5645 2.31105 15.0468 2.95 16.368V18C2.95 19.6844 4.31553 21.0499 6 21.0499H7.63194C8.95312 21.6889 10.4354 22.0471 12.0014 22.0471C13.5674 22.0471 15.0497 21.6889 16.3709 21.0499H18C19.6845 21.0499 21.05 19.6844 21.05 18V16.3739C21.6907 15.0512 22.05 13.5668 22.05 11.9985C22.05 10.4303 21.6907 8.94587 21.05 7.62322V5.99995C21.05 4.31548 19.6845 2.94995 18 2.94995H16.3767ZM16.5774 3.04995H18C19.6292 3.04995 20.95 4.37071 20.95 5.99995V7.42256C19.9885 5.54598 18.454 4.01149 16.5774 3.04995ZM20.95 7.64628C19.9761 5.64761 18.3523 4.02384 16.3537 3.04995H7.64916C5.64856 4.02479 4.02358 5.65076 3.05 7.65209V16.345C4.02452 18.3483 5.6517 19.9754 7.65497 20.95H16.3479C18.3492 19.9764 19.9752 18.3514 20.95 16.3508V7.64628ZM21.05 7.85782C21.6279 9.11856 21.95 10.5209 21.95 11.9985C21.95 13.4761 21.6279 14.8785 21.05 16.1393V7.85782ZM20.95 16.5745V18C20.95 19.6292 19.6292 20.95 18 20.95H16.5719C18.451 19.9886 19.9875 18.4529 20.95 16.5745ZM16.136 21.0499C14.8768 21.626 13.4766 21.9471 12.0014 21.9471C10.5262 21.9471 9.12601 21.626 7.86687 21.0499H16.136ZM7.43096 20.95H6C4.37076 20.95 3.05 19.6292 3.05 18V16.569C4.0123 18.4499 5.55003 19.9877 7.43096 20.95ZM2.95 16.1331C2.37391 14.8739 2.05283 13.4737 2.05283 11.9985C2.05283 10.5233 2.37391 9.12313 2.95 7.86399V16.1331ZM3.05 7.42808V5.99995C3.05 4.37071 4.37076 3.04995 6 3.04995H7.42544C5.54702 4.01243 4.01136 5.54899 3.05 7.42808ZM7.8607 2.94995H16.1421C14.8814 2.37208 13.479 2.04995 12.0014 2.04995C10.5238 2.04995 9.12144 2.37208 7.8607 2.94995ZM17.05 12C17.05 9.21091 14.789 6.94995 12 6.94995C9.21096 6.94995 6.95 9.21091 6.95 12C6.95 14.789 9.21096 17.05 12 17.05C14.789 17.05 17.05 14.789 17.05 12ZM12 7.04995C14.7338 7.04995 16.95 9.26614 16.95 12C16.95 14.7338 14.7338 16.95 12 16.95C9.26619 16.95 7.05 14.7338 7.05 12C7.05 9.26614 9.26619 7.04995 12 7.04995Z" fill-opacity="0.16"/><rect width="16" height="19.9972" rx="3" transform="matrix(-1 0 0 1 20 2)" stroke="#FF0000" stroke-opacity="0.08" stroke-width="0.1"/><rect width="19.9972" height="16" rx="3" transform="matrix(-1 0 0 1 22 4)" stroke="#0500FF" stroke-opacity="0.08" stroke-width="0.1"/><rect width="14" height="22" rx="3" transform="matrix(-1 0 0 1 19 1)" stroke="#FF0000" stroke-opacity="0.08" stroke-width="0.1"/><rect width="22" height="14" rx="3" transform="matrix(-1 0 0 1 23 5)" stroke="#0500FF" stroke-opacity="0.08" stroke-width="0.1"/></symbol><symbol id="spectrum-icon-LabelC" viewBox="0 0 24 24"><path d="M12.2921 4.896C10.3121 4.896 8.76413 5.562 7.68413 6.93C6.69413 8.154 6.20813 9.72 6.20813 11.628C6.20813 13.536 6.67613 15.084 7.64813 16.272C8.71013 17.586 10.2401 18.252 12.2381 18.252C13.6061 18.252 14.7941 17.856 15.7841 17.082C16.8461 16.254 17.5121 15.084 17.8001 13.59H16.3781C16.1261 14.706 15.6041 15.552 14.8481 16.128C14.1281 16.668 13.2641 16.938 12.2381 16.938C10.7261 16.938 9.59213 16.434 8.80013 15.444C8.04413 14.508 7.68413 13.23 7.68413 11.628C7.68413 10.026 8.06213 8.748 8.81813 7.776C9.62813 6.732 10.7801 6.21 12.2741 6.21C13.2821 6.21 14.1281 6.444 14.8301 6.93C15.5501 7.434 16.0181 8.154 16.1981 9.09H17.6201C17.4401 7.812 16.8641 6.786 15.8921 6.03C14.9201 5.274 13.7141 4.896 12.2921 4.896Z"/></symbol><symbol id="spectrum-icon-LabelD" viewBox="0 0 24 24"><path d="M7.4415 5.14801V18H11.9055C13.9215 18 15.4695 17.406 16.5495 16.236C17.5755 15.12 18.0975 13.554 18.0975 11.574C18.0975 9.55801 17.6115 7.99201 16.6575 6.91201C15.6135 5.72401 14.0835 5.14801 12.0495 5.14801H7.4415ZM8.9175 6.42601H11.8155C13.5075 6.42601 14.7315 6.85801 15.5235 7.74001C16.2615 8.56801 16.6395 9.84601 16.6395 11.574C16.6395 13.248 16.2255 14.526 15.4335 15.39C14.5875 16.272 13.3275 16.722 11.6535 16.722H8.9175V6.42601Z"/></symbol><symbol id="spectrum-icon-LabelG" viewBox="0 0 24 24"><path d="M12.0536 4.896C10.1636 4.896 8.66956 5.562 7.57156 6.912C6.52756 8.154 6.02356 9.72 6.02356 11.628C6.02356 13.536 6.54556 15.102 7.58956 16.308C8.70556 17.604 10.2896 18.252 12.3236 18.252C13.3856 18.252 14.3756 18.108 15.3116 17.82C16.1936 17.532 16.9496 17.154 17.5616 16.65V11.394H12.0716V12.672H16.1036V15.948C15.6536 16.236 15.1136 16.488 14.4836 16.668C13.8356 16.848 13.1696 16.956 12.4676 16.956C10.7936 16.956 9.53356 16.452 8.68756 15.462C7.89556 14.526 7.49956 13.248 7.49956 11.628C7.49956 9.972 7.89556 8.658 8.72356 7.686C9.55156 6.696 10.6496 6.21 12.0536 6.21C13.1876 6.21 14.1056 6.48 14.8076 7.038C15.4736 7.56 15.9056 8.298 16.1036 9.27H17.5796C17.3456 7.866 16.7876 6.804 15.8876 6.066C14.9336 5.274 13.6556 4.896 12.0536 4.896Z"/></symbol><symbol id="spectrum-icon-LabelV" viewBox="0 0 24 24"><path d="M6.34198 5.14801L11.094 18H12.912L17.664 5.14801H16.044L12.03 16.398H11.976L7.96198 5.14801H6.34198Z"/></symbol><symbol id="spectrum-icon-LabelX" viewBox="0 0 24 24"><path d="M6.70153 5.14801L11.0935 11.322L6.35953 18H8.17753L11.9935 12.492L15.8275 18H17.6455L12.8755 11.322L17.3035 5.14801H15.4855L11.9935 10.152L8.51953 5.14801H6.70153Z"/></symbol><symbol id="spectrum-icon-LabelY" viewBox="0 0 24 24"><path d="M6.13101 5.14801L11.261 12.78V18H12.737V12.78L17.867 5.14801H16.085L11.999 11.412L7.91301 5.14801H6.13101Z"/></symbol><symbol id="spectrum-icon-Layers" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.477 2.85616C11.4466 2.42522 12.5534 2.42522 13.523 2.85616L21.3046 6.31464C21.5754 6.43502 21.75 6.70361 21.75 7C21.75 7.29639 21.5754 7.56498 21.3046 7.68536L13.523 11.1438C12.5534 11.5748 11.4466 11.5748 10.477 11.1438L2.6954 7.68536C2.42455 7.56498 2.25 7.29639 2.25 7C2.25 6.70361 2.42455 6.43502 2.6954 6.31464L10.477 2.85616ZM12.9138 4.22688C12.332 3.96831 11.668 3.96831 11.0862 4.22688L4.84666 7L11.0862 9.77312C11.668 10.0317 12.332 10.0317 12.9138 9.77312L19.1533 7L12.9138 4.22688ZM2.61924 16.01L3.3046 16.3146L11.0862 19.7731C11.668 20.0317 12.332 20.0317 12.9138 19.7731L20.6954 16.3146L21.3808 16.01L21.99 17.3808L21.3046 17.6854L13.523 21.1438C12.5534 21.5748 11.4466 21.5748 10.477 21.1438L2.6954 17.6854L2.01004 17.3808L2.61924 16.01ZM3.3046 11.3146L2.61924 11.01L2.01004 12.3808L2.6954 12.6854L10.477 16.1438C11.4466 16.5748 12.5534 16.5748 13.523 16.1438L21.3046 12.6854L21.99 12.3808L21.3808 11.01L20.6954 11.3146L12.9138 14.7731C12.332 15.0317 11.668 15.0317 11.0862 14.7731L3.3046 11.3146Z"/></symbol><symbol id="spectrum-icon-Layout" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 3.75C4.75736 3.75 3.75 4.75736 3.75 6V18C3.75 19.2426 4.75736 20.25 6 20.25H8.25V3.75H6ZM9.75 3.75V20.25H14.25V3.75H9.75ZM15.75 3.75V20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V6C20.25 4.75736 19.2426 3.75 18 3.75H15.75ZM2.25 6C2.25 3.92893 3.92893 2.25 6 2.25H18C20.0711 2.25 21.75 3.92893 21.75 6V18C21.75 20.0711 20.0711 21.75 18 21.75H6C3.92893 21.75 2.25 20.0711 2.25 18V6Z"/></symbol><symbol id="spectrum-icon-Link" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.7119 13.7535L10.6167 14.2409L10.3833 12.7591L13.4786 12.2717C14.5829 12.0979 15.6036 11.5784 16.3941 10.7879L18.5407 8.64124C19.4194 7.76256 19.4194 6.33794 18.5407 5.45926C17.662 4.58058 16.2374 4.58058 15.3587 5.45926L11.8232 8.99479L10.7626 7.93413L14.2981 4.3986C15.7626 2.93413 18.1369 2.93413 19.6014 4.3986C21.0659 5.86306 21.0659 8.23743 19.6014 9.7019L17.4547 11.8486C16.4399 12.8633 15.1296 13.5303 13.7119 13.7535ZM10.2881 10.2465L13.3833 9.75914L13.6167 11.2409L10.5214 11.7283C9.4171 11.9021 8.39638 12.4216 7.60591 13.2121L5.45926 15.3588C4.58058 16.2374 4.58058 17.6621 5.45926 18.5407C6.33794 19.4194 7.76256 19.4194 8.64124 18.5407L12.1768 15.0052L13.2374 16.0659L9.7019 19.6014C8.23743 21.0659 5.86306 21.0659 4.3986 19.6014C2.93413 18.1369 2.93413 15.7626 4.3986 14.2981L6.54525 12.1514C7.56003 11.1367 8.87042 10.4697 10.2881 10.2465Z"/></symbol><symbol id="spectrum-icon-Locked" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C9.37665 1.25 7.25 3.37665 7.25 6V10H8.75V6C8.75 4.20507 10.2051 2.75 12 2.75C13.7949 2.75 15.25 4.20507 15.25 6V10H16.75V6C16.75 3.37665 14.6234 1.25 12 1.25ZM8.75 18V14H7.25V18C7.25 20.6234 9.37665 22.75 12 22.75C14.6234 22.75 16.75 20.6234 16.75 18V14H15.25V18C15.25 19.7949 13.7949 21.25 12 21.25C10.2051 21.25 8.75 19.7949 8.75 18ZM11.25 8V16H12.75V8H11.25Z"/></symbol><symbol id="spectrum-icon-Menu" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 5.75H3V4.25H21V5.75ZM21 12.75H3V11.25H21V12.75ZM3 19.75H21V18.25H3V19.75Z"/></symbol><symbol id="spectrum-icon-MoreHoriz" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 12C6.5 12.8284 5.82843 13.5 5 13.5C4.17157 13.5 3.5 12.8284 3.5 12C3.5 11.1716 4.17157 10.5 5 10.5C5.82843 10.5 6.5 11.1716 6.5 12ZM13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12ZM19 13.5C19.8284 13.5 20.5 12.8284 20.5 12C20.5 11.1716 19.8284 10.5 19 10.5C18.1716 10.5 17.5 11.1716 17.5 12C17.5 12.8284 18.1716 13.5 19 13.5Z"/></symbol><symbol id="spectrum-icon-None" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 12.75H8V11.25H16V12.75Z"/></symbol><symbol id="spectrum-icon-OpenFull" viewBox="0 0 24 24"><g clip-path="url(#clip0_52_592)"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.81067 19.25L12 19.25L12 20.75L4 20.75C3.80109 20.75 3.61032 20.671 3.46967 20.5303C3.32902 20.3897 3.25 20.1989 3.25 20L3.25 12L4.75 12L4.75 18.1894L18.1893 4.75001L12 4.75L12 3.25L20 3.25001C20.4142 3.25001 20.75 3.5858 20.75 4.00001L20.75 12L19.25 12L19.25 5.81067L5.81067 19.25Z"/></g><defs><clipPath id="clip0_52_592"><rect width="24" height="24"/></clipPath></defs></symbol><symbol id="spectrum-icon-PageFooter" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 19C3.25 21.0711 4.92893 22.75 7 22.75H17C19.0711 22.75 20.75 21.0711 20.75 19V18V5C20.75 2.92893 19.0711 1.25 17 1.25H7C4.92893 1.25 3.25 2.92893 3.25 5V18V19ZM4.75 17.25V5C4.75 3.75736 5.75736 2.75 7 2.75H17C18.2426 2.75 19.25 3.75736 19.25 5V17.25H4.75ZM19.25 18.75H4.75V19C4.75 20.2426 5.75736 21.25 7 21.25H17C18.2426 21.25 19.25 20.2426 19.25 19V18.75Z"/></symbol><symbol id="spectrum-icon-PageHeader" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 5C3.25 2.92893 4.92893 1.25 7 1.25H17C19.0711 1.25 20.75 2.92893 20.75 5V6V19C20.75 21.0711 19.0711 22.75 17 22.75H7C4.92893 22.75 3.25 21.0711 3.25 19V6V5ZM4.75 6.75V19C4.75 20.2426 5.75736 21.25 7 21.25H17C18.2426 21.25 19.25 20.2426 19.25 19V6.75H4.75ZM19.25 5.25H4.75V5C4.75 3.75736 5.75736 2.75 7 2.75H17C18.2426 2.75 19.25 3.75736 19.25 5V5.25Z"/></symbol><symbol id="spectrum-icon-Pages" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1.25C4.92893 1.25 3.25 2.92893 3.25 5V19C3.25 21.0711 4.92893 22.75 7 22.75H17C19.0711 22.75 20.75 21.0711 20.75 19V5C20.75 2.92893 19.0711 1.25 17 1.25H7ZM4.75 5C4.75 3.75736 5.75736 2.75 7 2.75H17C18.2426 2.75 19.25 3.75736 19.25 5V19C19.25 20.2426 18.2426 21.25 17 21.25H7C5.75736 21.25 4.75 20.2426 4.75 19V5ZM8 8.75H16V7.25H8V8.75ZM16 12.75H8V11.25H16V12.75ZM8 16.75H16V15.25H8V16.75Z"/></symbol><symbol id="spectrum-icon-Paragraph" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 4C6.25 3.58579 6.58579 3.25 7 3.25H13.5C16.6756 3.25 19.25 5.82436 19.25 9C19.25 12.1756 16.6756 14.75 13.5 14.75H7.75V22H6.25V4ZM7.75 13.25H13.5C15.8472 13.25 17.75 11.3472 17.75 9C17.75 6.65279 15.8472 4.75 13.5 4.75H7.75V13.25Z"/></symbol><symbol id="spectrum-icon-QrCode" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 4.5C2.25 3.25736 3.25736 2.25 4.5 2.25H8.5C9.74264 2.25 10.75 3.25736 10.75 4.5V8.5C10.75 9.74264 9.74264 10.75 8.5 10.75H4.5C3.25736 10.75 2.25 9.74264 2.25 8.5V4.5ZM4.5 3.75C4.08579 3.75 3.75 4.08579 3.75 4.5V8.5C3.75 8.91421 4.08579 9.25 4.5 9.25H8.5C8.91421 9.25 9.25 8.91421 9.25 8.5V4.5C9.25 4.08579 8.91421 3.75 8.5 3.75H4.5ZM2.25 15.5C2.25 14.2574 3.25736 13.25 4.5 13.25H8.5C9.74264 13.25 10.75 14.2574 10.75 15.5V19.5C10.75 20.7426 9.74264 21.75 8.5 21.75H4.5C3.25736 21.75 2.25 20.7426 2.25 19.5V15.5ZM4.5 14.75C4.08579 14.75 3.75 15.0858 3.75 15.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H8.5C8.91421 20.25 9.25 19.9142 9.25 19.5V15.5C9.25 15.0858 8.91421 14.75 8.5 14.75H4.5ZM15.5 13.25C14.2574 13.25 13.25 14.2574 13.25 15.5V19.5C13.25 20.7426 14.2574 21.75 15.5 21.75H19.5C20.7426 21.75 21.75 20.7426 21.75 19.5V15.5C21.75 14.2574 20.7426 13.25 19.5 13.25H15.5ZM14.75 15.5C14.75 15.0858 15.0858 14.75 15.5 14.75H19.5C19.9142 14.75 20.25 15.0858 20.25 15.5V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H15.5C15.0858 20.25 14.75 19.9142 14.75 19.5V15.5ZM16.25 17C16.25 16.5858 16.5858 16.25 17 16.25H18C18.4142 16.25 18.75 16.5858 18.75 17V18C18.75 18.4142 18.4142 18.75 18 18.75H17C16.5858 18.75 16.25 18.4142 16.25 18V17ZM15.5 2.25C14.2574 2.25 13.25 3.25736 13.25 4.5V8.5C13.25 9.74264 14.2574 10.75 15.5 10.75H19.5C20.7426 10.75 21.75 9.74264 21.75 8.5V4.5C21.75 3.25736 20.7426 2.25 19.5 2.25H15.5ZM14.75 4.5C14.75 4.08579 15.0858 3.75 15.5 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V8.5C20.25 8.91421 19.9142 9.25 19.5 9.25H15.5C15.0858 9.25 14.75 8.91421 14.75 8.5V4.5Z"/></symbol><symbol id="spectrum-icon-Redo" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.1893 11.75L14.9697 15.9697L16.0303 17.0303L21.5303 11.5303C21.8232 11.2374 21.8232 10.7626 21.5303 10.4697L16.0303 4.96967L14.9697 6.03033L19.1893 10.25H10.9C6.12274 10.25 2.25 14.1227 2.25 18.9V19H3.75V18.9C3.75 14.9512 6.95116 11.75 10.9 11.75H19.1893Z"/></symbol><symbol id="spectrum-icon-Remove" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 12.75L3 11.25L21 11.25L21 12.75L3 12.75Z"/></symbol><symbol id="spectrum-icon-RotateLeft" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4697 11.5303L7.46967 6.53033C7.17678 6.23743 7.17678 5.76256 7.46967 5.46967L12.4697 0.469666L13.5303 1.53032L10.7172 4.34346C11.1361 4.28187 11.5645 4.25 12 4.25C16.8325 4.25 20.75 8.1675 20.75 13C20.75 17.5798 17.2314 21.3379 12.75 21.7183V21.75H12C11.535 21.75 11.0779 21.7137 10.6317 21.6435L10.8645 20.1617C11.2341 20.2198 11.6132 20.25 12 20.25C16.0041 20.25 19.25 17.0041 19.25 13C19.25 8.99593 16.0041 5.75 12 5.75C11.1093 5.75 10.2578 5.91027 9.47148 6.20289C9.41648 6.22336 9.36061 6.23697 9.3048 6.24413L13.5303 10.4697L12.4697 11.5303ZM4.75 12.25V13C4.75 13.3868 4.78022 13.7659 4.83829 14.1355L3.35647 14.3683C3.28634 13.9221 3.25 13.465 3.25 13V12.25H4.75ZM5.2 18.507C4.62692 17.8002 4.16154 17.0018 3.82927 16.1368L5.22952 15.5989C5.50443 16.3146 5.88982 16.9761 6.36516 17.5623L5.2 18.507ZM8.86321 21.1707C7.99822 20.8385 7.19982 20.3731 6.49299 19.8L7.43767 18.6348C8.02394 19.1102 8.68541 19.4956 9.40108 19.7705L8.86321 21.1707Z"/></symbol><symbol id="spectrum-icon-Settings" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2997 1.31242C12.3848 1.34948 12.4634 1.40238 12.5305 1.46951C12.5899 1.52893 12.6382 1.59734 12.6742 1.67136L13.5302 3.38335C14.807 3.60856 15.9884 4.11064 17.01 4.82536L18.8267 4.2198C18.9045 4.19293 18.987 4.1787 19.0711 4.17871C19.166 4.1787 19.2589 4.19684 19.3454 4.23085C19.4442 4.26958 19.5305 4.32734 19.6015 4.39847C19.6726 4.46948 19.7304 4.55581 19.7691 4.65462C19.8031 4.74104 19.8213 4.834 19.8213 4.92891C19.8213 5.01296 19.8071 5.09548 19.7802 5.17328L19.1746 6.98996C19.8894 8.01159 20.3914 9.19294 20.6166 10.4698L22.3286 11.3258C22.4026 11.3618 22.4711 11.4101 22.5305 11.4695C22.5976 11.5366 22.6505 11.6152 22.6876 11.7003C22.73 11.7976 22.7502 11.8995 22.7502 12C22.7502 12.1005 22.73 12.2024 22.6876 12.2996C22.6505 12.3848 22.5976 12.4634 22.5305 12.5305C22.4711 12.5899 22.4026 12.6382 22.3286 12.6742L20.6167 13.5302C20.3914 14.807 19.8894 15.9884 19.1746 17.01L19.7802 18.8267C19.8071 18.9045 19.8213 18.987 19.8213 19.0711C19.8213 19.166 19.8031 19.2589 19.7691 19.3453C19.7304 19.4442 19.6726 19.5305 19.6015 19.6015C19.5305 19.6726 19.4442 19.7304 19.3454 19.7691C19.2589 19.8031 19.166 19.8213 19.0711 19.8213C18.987 19.8213 18.9045 19.807 18.8267 19.7802L17.0101 19.1746C15.9884 19.8894 14.8071 20.3914 13.5302 20.6167L12.6742 22.3286C12.6382 22.4026 12.5899 22.471 12.5305 22.5305C12.4634 22.5976 12.3848 22.6505 12.2997 22.6875C12.2024 22.73 12.1005 22.7502 12 22.7502C11.8995 22.7502 11.7976 22.73 11.7003 22.6875C11.6152 22.6505 11.5366 22.5976 11.4695 22.5305C11.4101 22.471 11.3618 22.4026 11.3258 22.3286L10.4698 20.6167C9.19295 20.3914 8.01159 19.8894 6.98995 19.1746L5.1733 19.7802C5.0955 19.807 5.01298 19.8213 4.92893 19.8213C4.83402 19.8213 4.74105 19.8031 4.65464 19.7691C4.55583 19.7304 4.4695 19.6726 4.39848 19.6015C4.32736 19.5305 4.2696 19.4442 4.23087 19.3453C4.19686 19.2589 4.17871 19.166 4.17873 19.0711C4.17871 18.987 4.19294 18.9045 4.21982 18.8267L4.82537 17.01C4.11063 15.9884 3.60855 14.807 3.38334 13.5302L1.67137 12.6742C1.59736 12.6382 1.52895 12.5899 1.46952 12.5305C1.4024 12.4634 1.34949 12.3848 1.31244 12.2996C1.26995 12.2024 1.24975 12.1005 1.24983 12C1.24975 11.8995 1.26995 11.7976 1.31244 11.7003C1.34949 11.6152 1.4024 11.5366 1.46952 11.4695C1.52895 11.4101 1.59736 11.3618 1.67137 11.3258L3.38335 10.4698C3.60856 9.19293 4.11064 8.01158 4.82538 6.98995L4.21982 5.17328C4.19295 5.09548 4.17872 5.01296 4.17873 4.92891C4.17872 4.834 4.19686 4.74103 4.23087 4.65462C4.2696 4.55581 4.32736 4.46948 4.39849 4.39846C4.4695 4.32734 4.55583 4.26958 4.65464 4.23085C4.74106 4.19684 4.83402 4.17869 4.92893 4.17871C5.01298 4.17869 5.0955 4.19292 5.1733 4.2198L6.98998 4.82536C8.01161 4.11063 9.19295 3.60856 10.4698 3.38335L11.3258 1.67136C11.3618 1.59734 11.4101 1.52893 11.4695 1.46951C11.5366 1.40238 11.6152 1.34948 11.7003 1.31242C11.7976 1.26994 11.8995 1.24974 12 1.24982C12.1005 1.24974 12.2024 1.26994 12.2997 1.31242ZM12 4.75C7.99593 4.75 4.75 7.99594 4.75 12C4.75 16.0041 7.99593 19.25 12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75Z"/></symbol><symbol id="spectrum-icon-Shift" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.25C12.2073 3.25 12.4054 3.33581 12.5471 3.48704L20.0471 11.487C20.2516 11.7051 20.307 12.0238 20.1882 12.2981C20.0693 12.5725 19.7989 12.75 19.5 12.75H16.25V19C16.25 19.4142 15.9142 19.75 15.5 19.75H8.49999C8.08577 19.75 7.74999 19.4142 7.74999 19V12.75H4.49999C4.20104 12.75 3.93064 12.5725 3.81179 12.2981C3.69295 12.0238 3.74837 11.7051 3.95283 11.487L11.4528 3.48704C11.5946 3.33581 11.7927 3.25 12 3.25ZM6.23116 11.25H8.49999C8.9142 11.25 9.24999 11.5858 9.24999 12V18.25H14.75V12C14.75 11.5858 15.0858 11.25 15.5 11.25H17.7688L12 5.09659L6.23116 11.25Z"/></symbol><symbol id="spectrum-icon-SliderInvisible" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 7.46967L4.46967 11.4697C4.32902 11.6103 4.25 11.8011 4.25 12C4.25 12.1989 4.32902 12.3897 4.46967 12.5303L8.46967 16.5303L9.53033 15.4697L6.06066 12L9.53033 8.53033L8.46967 7.46967ZM15.5303 7.46967L19.5303 11.4697C19.671 11.6103 19.75 11.8011 19.75 12C19.75 12.1989 19.671 12.3897 19.5303 12.5303L15.5303 16.5303L14.4697 15.4697L17.9393 12L14.4697 8.53033L15.5303 7.46967Z"/></symbol><symbol id="spectrum-icon-Smartphone" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 1.25C6.92893 1.25 5.25 2.92893 5.25 5V19C5.25 21.0711 6.92893 22.75 9 22.75H15C17.0711 22.75 18.75 21.0711 18.75 19V5C18.75 2.92893 17.0711 1.25 15 1.25H9ZM6.75 5C6.75 3.75736 7.75736 2.75 9 2.75H15C16.2426 2.75 17.25 3.75736 17.25 5V19C17.25 20.2426 16.2426 21.25 15 21.25H9C7.75736 21.25 6.75 20.2426 6.75 19V5ZM10.5 19.75H13.5V18.25H10.5V19.75Z"/></symbol><symbol id="spectrum-icon-Star" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.84 1.87616C11.2599 0.830503 12.7401 0.830506 13.16 1.87616L15.5189 7.75117L21.8177 8.18759C22.9391 8.26528 23.3961 9.66813 22.5357 10.3914L17.692 14.4633L19.2256 20.6133C19.4979 21.7056 18.3008 22.5731 17.3476 21.9741L12 18.6137L6.65239 21.9741C5.69923 22.5731 4.50207 21.7056 4.77444 20.6133L6.308 14.4633L1.4643 10.3914C0.603911 9.66813 1.06093 8.26528 2.18226 8.18759L8.48109 7.75117L10.84 1.87616ZM12 3.01287L9.69791 8.74634C9.59078 9.01314 9.34057 9.19522 9.05376 9.21509L2.90298 9.64125L7.63161 13.6164C7.85092 13.8008 7.94604 14.094 7.87672 14.372L6.38014 20.3736L11.6009 17.0929C11.8449 16.9396 12.1551 16.9396 12.3991 17.0929L17.6199 20.3736L16.1233 14.372C16.054 14.094 16.1491 13.8008 16.3684 13.6164L21.097 9.64125L14.9462 9.21509C14.6594 9.19522 14.4092 9.01314 14.3021 8.74634L12 3.01287Z"/></symbol><symbol id="spectrum-icon-StopCircle" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.9298 4.86918C15.1222 1.06157 8.87777 1.06157 5.07016 4.86918C1.30545 8.63389 1.2626 14.7791 5.035 18.5515L5.10571 18.6222L6.16637 17.5616L6.09566 17.4908C2.91672 14.3119 2.94419 9.11647 6.13082 5.92984C9.35264 2.70802 14.6474 2.70802 17.8692 5.92984C21.0558 9.11647 21.0833 14.3119 17.9043 17.4908L17.8336 17.5616L18.8943 18.6222L18.965 18.5515C22.7374 14.7791 22.6946 8.63389 18.9298 4.86918ZM15.4697 17.4697L12.75 20.1893L12.75 10H11.25L11.25 20.1893L8.53033 17.4697L7.46967 18.5303L11.4697 22.5303C11.7626 22.8232 12.2374 22.8232 12.5303 22.5303L16.5303 18.5303L15.4697 17.4697Z"/></symbol><symbol id="spectrum-icon-TabletMac" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 5C3.25 2.92893 4.92893 1.25 7 1.25H17C19.0711 1.25 20.75 2.92893 20.75 5V19C20.75 21.0711 19.0711 22.75 17 22.75H7C4.92893 22.75 3.25 21.0711 3.25 19V5ZM7 2.75C5.75736 2.75 4.75 3.75736 4.75 5V19C4.75 20.2426 5.75736 21.25 7 21.25H17C18.2426 21.25 19.25 20.2426 19.25 19V5C19.25 3.75736 18.2426 2.75 17 2.75H7Z"/></symbol><symbol id="spectrum-icon-Text" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 4.75H4V3.25H20V4.75H12.75V22H11.25V4.75Z"/></symbol><symbol id="spectrum-icon-TextBold" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 3C5.25 2.58579 5.58579 2.25 6 2.25H13C15.6234 2.25 17.75 4.37665 17.75 7C17.75 8.62521 16.9338 10.0598 15.6889 10.9162C17.5097 11.8812 18.75 13.7958 18.75 16C18.75 19.1756 16.1756 21.75 13 21.75H6C5.58579 21.75 5.25 21.4142 5.25 21V3ZM13 10.25C14.7949 10.25 16.25 8.79493 16.25 7C16.25 5.20507 14.7949 3.75 13 3.75H6.75V10.25H13ZM6.75 11.75H13C15.3472 11.75 17.25 13.6528 17.25 16C17.25 18.3472 15.3472 20.25 13 20.25H6.75V11.75Z"/></symbol><symbol id="spectrum-icon-TextDeleteline" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.2569 9.1371L8.92464 10.25H21V11.75H3V10.25H7.17536L6.97066 9.90884C6.4991 9.1229 6.25 8.22358 6.25 7.30702C6.25 4.51411 8.51411 2.25 11.307 2.25H12.5C15.3995 2.25 17.75 4.60051 17.75 7.5V8H16.25V7.5C16.25 5.42893 14.5711 3.75 12.5 3.75H11.307C9.34253 3.75 7.75 5.34253 7.75 7.30702C7.75 7.95171 7.92521 8.58428 8.2569 9.1371ZM17.75 16.693C17.75 15.7764 17.5009 14.8771 17.0293 14.0911L15.7431 14.8629C16.0748 15.4157 16.25 16.0483 16.25 16.693C16.25 18.6575 14.6575 20.25 12.693 20.25H11.5C9.42893 20.25 7.75 18.5711 7.75 16.5V16H6.25V16.5C6.25 19.3995 8.6005 21.75 11.5 21.75H12.693C15.4859 21.75 17.75 19.4859 17.75 16.693Z"/></symbol><symbol id="spectrum-icon-TextItaly" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4726 3.75H10.9091V2.25H18V3.75H15.0274L10.5274 20.25H13.0909V21.75H6V20.25H8.97261L13.4726 3.75Z"/></symbol><symbol id="spectrum-icon-TextScale" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1782 2.67975C11.0543 2.41737 10.7902 2.25 10.5 2.25C10.2099 2.25 9.94574 2.41737 9.82184 2.67975L1.32184 20.6797L2.67821 21.3203L5.30861 15.75H10.6294C11.0026 15.054 11.3752 14.5733 11.7422 14.25H6.01694L10.5 4.75641L14.9026 14.0795C15.5196 14.286 16.0341 14.3699 16.3936 13.7242L11.1782 2.67975ZM21.7011 10.75L16.7011 10.75L16.7011 12.25L19.8904 12.25L12.25 19.8904L12.25 16.701L10.75 16.701L10.75 21.701C10.75 22.1152 11.0858 22.451 11.5 22.451L16.7011 22.451L16.7011 20.951H13.3107L20.9511 13.3107V16.701L22.4511 16.701V11.5C22.4511 11.0858 22.1153 10.75 21.7011 10.75Z"/></symbol><symbol id="spectrum-icon-TextUnderline" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 3V11.25C6.75 14.0114 8.98858 16.25 11.75 16.25C14.5114 16.25 16.75 14.0114 16.75 11.25V3H15.25V11.25C15.25 13.183 13.683 14.75 11.75 14.75C9.817 14.75 8.25 13.183 8.25 11.25V3H6.75ZM4 20.75H20V19.25H4V20.75Z"/></symbol><symbol id="spectrum-icon-Theme" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1708 2.66459C12.0438 2.4105 11.7841 2.25 11.5 2.25C11.2159 2.25 10.9562 2.4105 10.8292 2.66459L5.03647 14.25H5V14.323L2.32918 19.6646L3.67082 20.3354L5.96353 15.75H12.8995C13.0401 15.4004 13.2146 15.0609 13.4232 14.7364L13.7359 14.25H6.71353L11.5 4.67705L15.1706 12.0182L16.1139 10.5508L12.1708 2.66459ZM22.315 20.4525C23.2754 18.9585 23.2754 17.0415 22.315 15.5475L19.194 10.6927C18.8693 10.1875 18.1307 10.1875 17.806 10.6927L14.685 15.5475C13.7246 17.0415 13.7246 18.9585 14.685 20.4525C16.4703 23.2296 20.5297 23.2296 22.315 20.4525ZM21.0532 16.3586C21.696 17.3585 21.696 18.6415 21.0532 19.6414C19.8584 21.4999 17.1416 21.4999 15.9468 19.6414C15.304 18.6415 15.304 17.3585 15.9468 16.3586L18.5 12.3869L21.0532 16.3586Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1708 2.66459C12.0438 2.4105 11.7841 2.25 11.5 2.25C11.2159 2.25 10.9562 2.4105 10.8292 2.66459L5.03647 14.25H5V14.323L2.32918 19.6646L3.67082 20.3354L5.96353 15.75H12.8995C13.0401 15.4004 13.2146 15.0609 13.4232 14.7364L13.7359 14.25H6.71353L11.5 4.67705L15.1706 12.0182L16.1139 10.5508L12.1708 2.66459ZM22.315 20.4525C23.2754 18.9585 23.2754 17.0415 22.315 15.5475L19.194 10.6927C18.8693 10.1875 18.1307 10.1875 17.806 10.6927L14.685 15.5475C13.7246 17.0415 13.7246 18.9585 14.685 20.4525C16.4703 23.2296 20.5297 23.2296 22.315 20.4525ZM21.0532 16.3586C21.696 17.3585 21.696 18.6415 21.0532 19.6414C19.8584 21.4999 17.1416 21.4999 15.9468 19.6414C15.304 18.6415 15.304 17.3585 15.9468 16.3586L18.5 12.3869L21.0532 16.3586Z"/></symbol><symbol id="spectrum-icon-Tune" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 5.25C13.0335 5.25 12.25 6.0335 12.25 7C12.25 7.9665 13.0335 8.75 14 8.75C14.9665 8.75 15.75 7.9665 15.75 7C15.75 6.0335 14.9665 5.25 14 5.25ZM10.837 6.25C11.1755 4.81665 12.4632 3.75 14 3.75C15.5368 3.75 16.8245 4.81665 17.163 6.25H21V7.75H17.163C16.8245 9.18335 15.5368 10.25 14 10.25C12.4632 10.25 11.1755 9.18335 10.837 7.75H3V6.25H10.837ZM10 15.25C9.0335 15.25 8.25 16.0335 8.25 17C8.25 17.9665 9.0335 18.75 10 18.75C10.9665 18.75 11.75 17.9665 11.75 17C11.75 16.0335 10.9665 15.25 10 15.25ZM6.83697 16.25C7.17555 14.8166 8.46321 13.75 10 13.75C11.5368 13.75 12.8245 14.8166 13.163 16.25H21V17.75H13.163C12.8245 19.1834 11.5368 20.25 10 20.25C8.46321 20.25 7.17555 19.1834 6.83697 17.75H3V16.25H6.83697Z"/></symbol><symbol id="spectrum-icon-Undo" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.81066 11.75L9.03033 15.9697L7.96967 17.0303L2.46967 11.5303C2.17678 11.2374 2.17678 10.7626 2.46967 10.4697L7.96967 4.96967L9.03033 6.03033L4.81066 10.25H13.1C17.8773 10.25 21.75 14.1227 21.75 18.9V19H20.25V18.9C20.25 14.9512 17.0488 11.75 13.1 11.75H4.81066Z"/></symbol><symbol id="spectrum-icon-Unlocked" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C9.37665 1.25 7.25 3.37665 7.25 6V10H8.75V6C8.75 4.20507 10.2051 2.75 12 2.75C13.7949 2.75 15.25 4.20507 15.25 6V10H16.75V6C16.75 3.37665 14.6234 1.25 12 1.25ZM8.75 18V14H7.25V18C7.25 20.6234 9.37665 22.75 12 22.75C14.6234 22.75 16.75 20.6234 16.75 18V14H15.25V18C15.25 19.7949 13.7949 21.25 12 21.25C10.2051 21.25 8.75 19.7949 8.75 18Z"/></symbol><symbol id="spectrum-icon-Video" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2.25C3.92893 2.25 2.25 3.92893 2.25 6V18C2.25 20.0711 3.92893 21.75 6 21.75H18C20.0711 21.75 21.75 20.0711 21.75 18V6C21.75 3.92893 20.0711 2.25 18 2.25H6ZM3.75 6C3.75 4.75736 4.75736 3.75 6 3.75H18C19.2426 3.75 20.25 4.75736 20.25 6V18C20.25 19.2426 19.2426 20.25 18 20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V6ZM9 9.61803V14.382C9 15.1253 9.78231 15.6088 10.4472 15.2764L15.2111 12.8944C15.9482 12.5259 15.9482 11.4741 15.2111 11.1056L10.4472 8.72361C9.78231 8.39116 9 8.87465 9 9.61803Z"/></symbol><symbol id="spectrum-icon-ViewDay" viewBox="0 0 24 24"><g opacity="0.3"><path d="M18 3L18 22L20 22L20 3L18 3ZM10 5L14 5L14 20L10 20L10 5ZM8 4L8 21C8 21.55 8.45 22 9 22L15 22C15.55 22 16 21.55 16 21L16 4C16 3.45 15.55 3 15 3L9 3C8.45 3 8 3.45 8 4ZM4 3L4 22L6 22L6 3L4 3Z"/></g></symbol></svg>`;

/**
 * @element sp-icons-editor
 */class IconsEditor extends IconsetSVG{constructor(){super();this.name='editor';// default iconset name for these icons
}renderDefaultContent(){return iconsSVG;}/**
     * Overrides createIconName to make icon strings compatible with spectrum-icon id format
     * @param icon
     * @param size
     */getSVGIconName(icon){return `spectrum-icon-${icon}`;}getSanitizedIconName(icon){return icon.replace('spectrum-icon-','');}}

iliadCustomElementsDefine('sp-icons-editor',IconsEditor);

const styles$o=r`:host{border:none;box-sizing:content-box;height:var(--spectrum-listitem-divider-size);margin:calc(var(--spectrum-listitem-divider-padding)/2) var(--spectrum-listitem-padding-y);overflow:visible;padding:0}:host{background-color:var(
--spectrum-listitem-m-divider-color,var(--spectrum-alias-border-color-extralight)
)}:host{--spectrum-divider-s-background-color:var(
--spectrum-alias-border-color-default
);--spectrum-divider-s-border-radius:var(--spectrum-global-dimension-size-0);--spectrum-divider-s-height:var(--spectrum-global-dimension-size-10);--spectrum-divider-s-vertical-background-color:var(
--spectrum-alias-border-color-default
);--spectrum-divider-s-vertical-border-radius:var(
--spectrum-global-dimension-size-0
);--spectrum-divider-s-vertical-width:var(
--spectrum-global-dimension-size-10
);--spectrum-divider-m-background-color:var(
--spectrum-alias-border-color-default
);--spectrum-divider-m-border-radius:var(--spectrum-global-dimension-size-0);--spectrum-divider-m-height:var(--spectrum-global-dimension-size-25);--spectrum-divider-m-vertical-background-color:var(
--spectrum-alias-border-color-default
);--spectrum-divider-m-vertical-border-radius:var(
--spectrum-global-dimension-size-0
);--spectrum-divider-m-vertical-width:var(
--spectrum-global-dimension-size-25
);--spectrum-divider-l-background-color:var(
--spectrum-alias-border-color-default
);--spectrum-divider-l-border-radius:var(--spectrum-global-dimension-size-0);--spectrum-divider-l-height:var(--spectrum-global-dimension-size-50);--spectrum-divider-l-vertical-background-color:var(
--spectrum-alias-border-color-default
);--spectrum-divider-l-vertical-border-radius:var(
--spectrum-global-dimension-size-0
);--spectrum-divider-l-vertical-width:var(
--spectrum-global-dimension-size-50
);--spectrum-divider-margin-size:var(--spectrum-global-dimension-size-100)}:host{margin:var(--spectrum-divider-margin-size) 0}:host{display:block}`;

/**
 * @element sp-menu-divider
 */class MenuDivider extends SpectrumElement{static get styles(){return [styles$o];}firstUpdated(){this.setAttribute('role','separator');}}

iliadCustomElementsDefine('sp-menu-divider',MenuDivider);

const styles$n=r`:host{--spectrum-progressbar-s-label-gap-y:var(
--spectrum-global-dimension-size-50
);--spectrum-progressbar-s-height:var(--spectrum-global-dimension-size-50);--spectrum-progressbar-s-width:var(
--spectrum-global-dimension-static-size-2400
);--spectrum-progressbar-s-indeterminate-fill-width:var(
--spectrum-global-dimension-size-1700
);--spectrum-progressbar-s-indeterminate-duration:var(
--spectrum-global-animation-duration-2000
);--spectrum-fieldlabel-side-s-padding-right:var(
--spectrum-global-dimension-size-130
);--spectrum-progressbar-m-label-gap-y:var(
--spectrum-global-dimension-size-50
);--spectrum-progressbar-m-height:var(--spectrum-global-dimension-size-75);--spectrum-progressbar-m-width:var(
--spectrum-global-dimension-static-size-2400
);--spectrum-progressbar-m-indeterminate-fill-width:var(
--spectrum-global-dimension-size-1700
);--spectrum-progressbar-m-indeterminate-duration:var(
--spectrum-global-animation-duration-2000
);--spectrum-fieldlabel-side-m-padding-right:var(
--spectrum-global-dimension-size-150
);--spectrum-progressbar-l-label-gap-y:var(
--spectrum-global-dimension-size-50
);--spectrum-progressbar-l-height:var(--spectrum-global-dimension-size-100);--spectrum-progressbar-l-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-progressbar-l-width:var(
--spectrum-global-dimension-static-size-2500
);--spectrum-progressbar-l-indeterminate-fill-width:var(
--spectrum-global-dimension-size-1800
);--spectrum-progressbar-l-indeterminate-duration:var(
--spectrum-global-animation-duration-2000
);--spectrum-fieldlabel-side-l-padding-right:var(
--spectrum-global-dimension-size-175
);--spectrum-progressbar-xl-label-gap-y:var(
--spectrum-global-dimension-size-50
);--spectrum-progressbar-xl-height:var(--spectrum-global-dimension-size-125);--spectrum-progressbar-xl-width:var(
--spectrum-global-dimension-static-size-2800
);--spectrum-progressbar-xl-indeterminate-fill-width:var(
--spectrum-global-dimension-size-2000
);--spectrum-progressbar-xl-indeterminate-duration:var(
--spectrum-global-animation-duration-2000
);--spectrum-fieldlabel-side-xl-padding-right:var(
--spectrum-global-dimension-size-185
);--spectrum-progressbar-m-track-fill-color:var(
--spectrum-global-color-blue-500
);--spectrum-progressbar-m-track-color:var(
--spectrum-alias-track-color-default
);--spectrum-progressbar-m-over-background-track-fill-color:var(
--spectrum-global-color-static-white
);--spectrum-progressbar-m-over-background-track-color:var(
--spectrum-alias-track-color-over-background
);--spectrum-meter-positive-m-track-fill-color:var(
--spectrum-semantic-positive-color-status
);--spectrum-meter-notice-m-track-fill-color:var(
--spectrum-semantic-notice-color-status
);--spectrum-meter-negative-m-track-fill-color:var(
--spectrum-semantic-negative-color-status
);--spectrum-fieldlabel-m-text-color:var(--spectrum-alias-label-text-color)}:host([size=s]){--spectrum-progressbar-border-radius:var(
--spectrum-progressbar-s-border-radius
);--spectrum-progressbar-label-gap-y:var(
--spectrum-progressbar-s-label-gap-y,var(--spectrum-global-dimension-size-50)
);--spectrum-progressbar-height:var(
--spectrum-progressbar-s-height,var(--spectrum-global-dimension-size-50)
);--spectrum-progressbar-width:var(
--spectrum-progressbar-s-width,var(--spectrum-global-dimension-static-size-2400)
);--spectrum-progressbar-indeterminate-fill-width:var(
--spectrum-progressbar-s-indeterminate-fill-width,var(--spectrum-global-dimension-size-1700)
);--spectrum-progressbar-indeterminate-duration:var(
--spectrum-progressbar-s-indeterminate-duration,var(--spectrum-global-animation-duration-2000)
);--spectrum-fieldlabel-side-padding-right:var(
--spectrum-fieldlabel-side-s-padding-right,var(--spectrum-global-dimension-size-130)
)}:host([size=m]){--spectrum-progressbar-border-radius:var(
--spectrum-progressbar-m-border-radius
);--spectrum-progressbar-label-gap-y:var(
--spectrum-progressbar-m-label-gap-y,var(--spectrum-global-dimension-size-50)
);--spectrum-progressbar-height:var(
--spectrum-progressbar-m-height,var(--spectrum-global-dimension-size-75)
);--spectrum-progressbar-width:var(
--spectrum-progressbar-m-width,var(--spectrum-global-dimension-static-size-2400)
);--spectrum-progressbar-indeterminate-fill-width:var(
--spectrum-progressbar-m-indeterminate-fill-width,var(--spectrum-global-dimension-size-1700)
);--spectrum-progressbar-indeterminate-duration:var(
--spectrum-progressbar-m-indeterminate-duration,var(--spectrum-global-animation-duration-2000)
);--spectrum-fieldlabel-side-padding-right:var(
--spectrum-fieldlabel-side-m-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([size=l]){--spectrum-progressbar-label-gap-y:var(
--spectrum-progressbar-l-label-gap-y,var(--spectrum-global-dimension-size-50)
);--spectrum-progressbar-height:var(
--spectrum-progressbar-l-height,var(--spectrum-global-dimension-size-100)
);--spectrum-progressbar-border-radius:var(
--spectrum-progressbar-l-border-radius,var(--spectrum-global-dimension-size-50)
);--spectrum-progressbar-width:var(
--spectrum-progressbar-l-width,var(--spectrum-global-dimension-static-size-2500)
);--spectrum-progressbar-indeterminate-fill-width:var(
--spectrum-progressbar-l-indeterminate-fill-width,var(--spectrum-global-dimension-size-1800)
);--spectrum-progressbar-indeterminate-duration:var(
--spectrum-progressbar-l-indeterminate-duration,var(--spectrum-global-animation-duration-2000)
);--spectrum-fieldlabel-side-padding-right:var(
--spectrum-fieldlabel-side-l-padding-right,var(--spectrum-global-dimension-size-175)
)}:host([size=xl]){--spectrum-progressbar-border-radius:var(
--spectrum-progressbar-xl-border-radius
);--spectrum-progressbar-label-gap-y:var(
--spectrum-progressbar-xl-label-gap-y,var(--spectrum-global-dimension-size-50)
);--spectrum-progressbar-height:var(
--spectrum-progressbar-xl-height,var(--spectrum-global-dimension-size-125)
);--spectrum-progressbar-width:var(
--spectrum-progressbar-xl-width,var(--spectrum-global-dimension-static-size-2800)
);--spectrum-progressbar-indeterminate-fill-width:var(
--spectrum-progressbar-xl-indeterminate-fill-width,var(--spectrum-global-dimension-size-2000)
);--spectrum-progressbar-indeterminate-duration:var(
--spectrum-progressbar-xl-indeterminate-duration,var(--spectrum-global-animation-duration-2000)
);--spectrum-fieldlabel-side-padding-right:var(
--spectrum-fieldlabel-side-xl-padding-right,var(--spectrum-global-dimension-size-185)
)}:host{align-items:center;display:inline-flex;flex-flow:row wrap;justify-content:space-between;position:relative;vertical-align:top;width:var(--spectrum-progressbar-width)}.track{border-radius:var(--spectrum-progressbar-border-radius);overflow:hidden;width:100%;z-index:1}.fill,.track{height:var(--spectrum-progressbar-height)}.fill{border:none;transition:width 1s}:host([dir=ltr]) .label,:host([dir=ltr]) .percentage{text-align:left}:host([dir=rtl]) .label,:host([dir=rtl]) .percentage{text-align:right}.label,.percentage{margin-bottom:var(
--spectrum-progressbar-label-gap-y
)}.label{flex:1 1 0%}:host([dir=ltr]) .percentage{margin-left:var(
--spectrum-fieldlabel-side-padding-right
)}:host([dir=rtl]) .percentage{margin-right:var(
--spectrum-fieldlabel-side-padding-right
)}.percentage{align-self:flex-start}:host([side-label]){display:inline-flex;flex-flow:row;justify-content:space-between;width:auto}:host([side-label]) .track{flex:1 1 var(--spectrum-progressbar-width);min-width:var(
--spectrum-progressbar-width
)}:host([dir=ltr][side-label]) .label{margin-right:var(
--spectrum-fieldlabel-side-padding-right
)}:host([dir=rtl][side-label]) .label{margin-left:var(
--spectrum-fieldlabel-side-padding-right
)}:host([side-label]) .label{flex-grow:0;margin-bottom:0}:host([dir=ltr][side-label]) .percentage{text-align:right}:host([dir=rtl][side-label]) .percentage{text-align:left}:host([dir=ltr][side-label]) .percentage{margin-left:var(
--spectrum-fieldlabel-side-padding-right
)}:host([dir=rtl][side-label]) .percentage{margin-right:var(
--spectrum-fieldlabel-side-padding-right
)}:host([side-label]) .percentage{margin-bottom:0;order:3}:host([indeterminate]) .fill{animation-timing-function:var(
--spectrum-progressbar-indeterminate-animation-ease
);position:relative;width:var(
--spectrum-progressbar-indeterminate-fill-width
);will-change:transform}:host([dir=ltr][indeterminate]) .fill{animation:indeterminate-loop-ltr var(--spectrum-progressbar-indeterminate-duration) infinite}:host([dir=rtl][indeterminate]) .fill{animation:indeterminate-loop-rtl var(--spectrum-progressbar-indeterminate-duration) infinite}@keyframes indeterminate-loop-ltr{0%{transform:translate(calc(-1*var(--spectrum-progressbar-indeterminate-fill-width)))}to{transform:translate(var(--spectrum-progressbar-width))}}@keyframes indeterminate-loop-rtl{0%{transform:translate(var(--spectrum-progressbar-width))}to{transform:translate(calc(-1*var(--spectrum-progressbar-width)))}}.fill{background:var(
--spectrum-progressbar-m-track-fill-color,var(--spectrum-global-color-blue-500)
)}.track{background-color:var(
--spectrum-progressbar-m-track-color,var(--spectrum-alias-track-color-default)
)}:host([over-background]) .fill{background:var(
--spectrum-progressbar-m-over-background-track-fill-color,var(--spectrum-global-color-static-white)
)}:host([over-background]) .label,:host([over-background]) .percentage{color:var(
--spectrum-progressbar-m-over-background-track-fill-color,var(--spectrum-global-color-static-white)
)}:host([over-background]) .track{background-color:var(
--spectrum-progressbar-m-over-background-track-color,var(--spectrum-alias-track-color-over-background)
)}:host([positive]) .fill{background:var(
--spectrum-meter-positive-m-track-fill-color,var(--spectrum-semantic-positive-color-status)
)}:host(.is-notice) .fill{background:var(
--spectrum-meter-notice-m-track-fill-color,var(--spectrum-semantic-notice-color-status)
)}:host(.is-negative) .fill{background:var(
--spectrum-meter-negative-m-track-fill-color,var(--spectrum-semantic-negative-color-status)
)}.label,.percentage{color:var(
--spectrum-fieldlabel-m-text-color,var(--spectrum-alias-label-text-color)
)}.fill{transform-origin:left}:host([dir=rtl]) .fill{transform-origin:right}`;

/**
 * @element sp-meter
 *
 * @slot - text labeling the Meter
 */class Meter extends SizedMixin(ObserveSlotText(SpectrumElement,'')){constructor(){super(...arguments);this.progress=0;this.overBackground=false;this.warning=false;this.critical=false;this.positive=false;this.label='';this.sideLabel=false;}static get styles(){return [styles$n];}render(){return p`<sp-field-label size="${this.size}" class="label">${this.slotHasContent?p``:this.label}<slot>${this.label}</slot></sp-field-label><sp-field-label size="${this.size}" class="percentage">${this.progress}%</sp-field-label><div class="track"><div class="fill" style="transform:scaleX(calc(${this.progress} / 100))"></div></div>`;}firstUpdated(changes){super.firstUpdated(changes);this.setAttribute('role','progressbar');}updated(changes){super.updated(changes);if(changes.has('progress')){this.setAttribute('aria-valuenow',''+this.progress);}if(this.label&&changes.has('label')){this.setAttribute('aria-label',this.label);}}}__decorate([e({type:Number})],Meter.prototype,"progress",void 0);__decorate([e({type:Boolean,reflect:true,attribute:'over-background'})],Meter.prototype,"overBackground",void 0);__decorate([e({type:Boolean,reflect:true})],Meter.prototype,"warning",void 0);__decorate([e({type:Boolean,reflect:true})],Meter.prototype,"critical",void 0);__decorate([e({type:Boolean,reflect:true})],Meter.prototype,"positive",void 0);__decorate([e({type:String,reflect:true})],Meter.prototype,"label",void 0);__decorate([e({type:Boolean,reflect:true,attribute:'side-label'})],Meter.prototype,"sideLabel",void 0);

iliadCustomElementsDefine('sp-meter',Meter);

function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */let $fe87f22deac4debf3eab2ca6a89602ab$var$formatterCache=new Map();let $fe87f22deac4debf3eab2ca6a89602ab$var$supportsSignDisplay=false;try{// @ts-ignore
$fe87f22deac4debf3eab2ca6a89602ab$var$supportsSignDisplay=new Intl.NumberFormat('de-DE',{signDisplay:'exceptZero'}).resolvedOptions().signDisplay==='exceptZero';// eslint-disable-next-line no-empty
}catch(e){}let $fe87f22deac4debf3eab2ca6a89602ab$var$supportsUnit=false;try{// @ts-ignore
$fe87f22deac4debf3eab2ca6a89602ab$var$supportsUnit=new Intl.NumberFormat('de-DE',{style:'unit',unit:'degree'}).resolvedOptions().style==='unit';// eslint-disable-next-line no-empty
}catch(e){}// Polyfill for units since Safari doesn't support them yet. See https://bugs.webkit.org/show_bug.cgi?id=215438.
// Currently only polyfilling the unit degree in narrow format for ColorSlider in our supported locales.
// Values were determined by switching to each locale manually in Chrome.
const $fe87f22deac4debf3eab2ca6a89602ab$var$UNITS={degree:{narrow:{default:'°','ja-JP':' 度','zh-TW':'度','sl-SI':' °'// Arabic?? But Safari already doesn't use Arabic digits so might be ok...
// https://bugs.webkit.org/show_bug.cgi?id=218139
}}};/**
 * A wrapper around Intl.NumberFormat providing additional options, polyfills, and caching for performance.
 */class NumberFormatter{constructor(locale,options){if(options===void 0){options={};}this.numberFormatter=void 0;this.options=void 0;this.numberFormatter=$fe87f22deac4debf3eab2ca6a89602ab$var$getCachedNumberFormatter(locale,options);this.options=options;}format(value){let res='';if(!$fe87f22deac4debf3eab2ca6a89602ab$var$supportsSignDisplay&&this.options.signDisplay!=null){res=$fe87f22deac4debf3eab2ca6a89602ab$export$numberFormatSignDisplayPolyfill(this.numberFormatter,this.options.signDisplay,value);}else {res=this.numberFormatter.format(value);}if(this.options.style==='unit'&&!$fe87f22deac4debf3eab2ca6a89602ab$var$supportsUnit){var _UNITS$unit;let{unit,unitDisplay='short',locale}=this.resolvedOptions();let values=(_UNITS$unit=$fe87f22deac4debf3eab2ca6a89602ab$var$UNITS[unit])==null?void 0:_UNITS$unit[unitDisplay];res+=values[locale]||values.default;}return res;}formatToParts(value){// TODO: implement signDisplay for formatToParts
// @ts-ignore
return this.numberFormatter.formatToParts(value);}resolvedOptions(){let options=this.numberFormatter.resolvedOptions();if(!$fe87f22deac4debf3eab2ca6a89602ab$var$supportsSignDisplay&&this.options.signDisplay!=null){options=_extends({},options,{signDisplay:this.options.signDisplay});}if(!$fe87f22deac4debf3eab2ca6a89602ab$var$supportsUnit&&this.options.style==='unit'){options=_extends({},options,{style:'unit',unit:this.options.unit,unitDisplay:this.options.unitDisplay});}return options;}}function $fe87f22deac4debf3eab2ca6a89602ab$var$getCachedNumberFormatter(locale,options){if(options===void 0){options={};}let{numberingSystem}=options;if(numberingSystem&&locale.indexOf('-u-nu-')===-1){locale=locale+"-u-nu-"+numberingSystem;}if(options.style==='unit'&&!$fe87f22deac4debf3eab2ca6a89602ab$var$supportsUnit){var _UNITS$unit2;let{unit,unitDisplay='short'}=options;if(!unit){throw new Error('unit option must be provided with style: "unit"');}if(!((_UNITS$unit2=$fe87f22deac4debf3eab2ca6a89602ab$var$UNITS[unit])!=null&&_UNITS$unit2[unitDisplay])){throw new Error("Unsupported unit "+unit+" with unitDisplay = "+unitDisplay);}options=_extends({},options,{style:'decimal'});}let cacheKey=locale+(options?Object.entries(options).sort((a,b)=>a[0]<b[0]?-1:1).join():'');if($fe87f22deac4debf3eab2ca6a89602ab$var$formatterCache.has(cacheKey)){return $fe87f22deac4debf3eab2ca6a89602ab$var$formatterCache.get(cacheKey);}let numberFormatter=new Intl.NumberFormat(locale,options);$fe87f22deac4debf3eab2ca6a89602ab$var$formatterCache.set(cacheKey,numberFormatter);return numberFormatter;}/** @private - exported for tests */function $fe87f22deac4debf3eab2ca6a89602ab$export$numberFormatSignDisplayPolyfill(numberFormat,signDisplay,num){if(signDisplay==='auto'){return numberFormat.format(num);}else if(signDisplay==='never'){return numberFormat.format(Math.abs(num));}else {let needsPositiveSign=false;if(signDisplay==='always'){needsPositiveSign=num>0||Object.is(num,0);}else if(signDisplay==='exceptZero'){if(Object.is(num,-0)||Object.is(num,0)){num=Math.abs(num);}else {needsPositiveSign=num>0;}}if(needsPositiveSign){let negative=numberFormat.format(-num);let noSign=numberFormat.format(num);// ignore RTL/LTR marker character
let minus=negative.replace(noSign,'').replace(/\u200e|\u061C/,'');if([...minus].length!==1){console.warn('@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case');}let positive=negative.replace(noSign,'!!!').replace(minus,'+').replace('!!!',noSign);return positive;}else {return numberFormat.format(num);}}}const $e1a22841ad5113a054c8ebe55b24e1a$var$CURRENCY_SIGN_REGEX=new RegExp('^.*\\(.*\\).*$');const $e1a22841ad5113a054c8ebe55b24e1a$var$NUMBERING_SYSTEMS=['latn','arab','hanidec'];/**
 * A NumberParser can be used perform locale aware parsing of numbers from Unicode strings,
 * as well as validation of partial user input. Automatically detects the numbering system
 * used in the input, and supports parsing decimals, percentages, currency values, and units
 * according to the locale.
 */class NumberParser{constructor(locale,options){if(options===void 0){options={};}this.locale=void 0;this.options=void 0;this.locale=locale;this.options=options;}/**
   * Parses the given string to a number. Returns NaN if a valid number could not be parsed.
   */parse(value){return $e1a22841ad5113a054c8ebe55b24e1a$var$getNumberParserImpl(this.locale,this.options,value).parse(value);}/**
   * Returns whether the given string could potentially be a valid number. This should be used to
   * validate user input as the user types. If a `minValue` or `maxValue` is provided, the validity
   * of the minus/plus sign characters can be checked.
   */isValidPartialNumber(value,minValue,maxValue){return $e1a22841ad5113a054c8ebe55b24e1a$var$getNumberParserImpl(this.locale,this.options,value).isValidPartialNumber(value,minValue,maxValue);}/**
   * Returns a numbering system for which the given string is valid in the current locale.
   * If no numbering system could be detected, the default numbering system for the current
   * locale is returned.
   */getNumberingSystem(value){return $e1a22841ad5113a054c8ebe55b24e1a$var$getNumberParserImpl(this.locale,this.options,value).options.numberingSystem;}}const $e1a22841ad5113a054c8ebe55b24e1a$var$numberParserCache=new Map();function $e1a22841ad5113a054c8ebe55b24e1a$var$getNumberParserImpl(locale,options,value){// First try the default numbering system for the provided locale
let defaultParser=$e1a22841ad5113a054c8ebe55b24e1a$var$getCachedNumberParser(locale,options);// If that doesn't match, and the locale doesn't include a hard coded numbering system,
// try each of the other supported numbering systems until we find one that matches.
if(!locale.includes('-nu-')&&!defaultParser.isValidPartialNumber(value)){for(let numberingSystem of $e1a22841ad5113a054c8ebe55b24e1a$var$NUMBERING_SYSTEMS){if(numberingSystem!==defaultParser.options.numberingSystem){let parser=$e1a22841ad5113a054c8ebe55b24e1a$var$getCachedNumberParser(locale+(locale.includes('-u-')?'-nu-':'-u-nu-')+numberingSystem,options);if(parser.isValidPartialNumber(value)){return parser;}}}}return defaultParser;}function $e1a22841ad5113a054c8ebe55b24e1a$var$getCachedNumberParser(locale,options){let cacheKey=locale+(options?Object.entries(options).sort((a,b)=>a[0]<b[0]?-1:1).join():'');let parser=$e1a22841ad5113a054c8ebe55b24e1a$var$numberParserCache.get(cacheKey);if(!parser){parser=new $e1a22841ad5113a054c8ebe55b24e1a$var$NumberParserImpl(locale,options);$e1a22841ad5113a054c8ebe55b24e1a$var$numberParserCache.set(cacheKey,parser);}return parser;}// The actual number parser implementation. Instances of this class are cached
// based on the locale, options, and detected numbering system.
class $e1a22841ad5113a054c8ebe55b24e1a$var$NumberParserImpl{constructor(locale,options){if(options===void 0){options={};}this.formatter=void 0;this.options=void 0;this.symbols=void 0;this.formatter=new Intl.NumberFormat(locale,options);this.options=this.formatter.resolvedOptions();this.symbols=$e1a22841ad5113a054c8ebe55b24e1a$var$getSymbols(this.formatter,this.options,options);}parse(value){// to parse the number, we need to remove anything that isn't actually part of the number, for example we want '-10.40' not '-10.40 USD'
let fullySanitizedValue=this.sanitize(value);// Remove group characters, and replace decimal points and numerals with ASCII values.
fullySanitizedValue=$e1a22841ad5113a054c8ebe55b24e1a$var$replaceAll(fullySanitizedValue,this.symbols.group,'').replace(this.symbols.decimal,'.').replace(this.symbols.minusSign,'-').replace(this.symbols.numeral,this.symbols.index);let newValue=fullySanitizedValue?+fullySanitizedValue:NaN;if(isNaN(newValue)){return NaN;}// accounting will always be stripped to a positive number, so if it's accounting and has a () around everything, then we need to make it negative again
if(this.options.currencySign==='accounting'&&$e1a22841ad5113a054c8ebe55b24e1a$var$CURRENCY_SIGN_REGEX.test(value)){newValue=-1*newValue;}// when reading the number, if it's a percent, then it should be interpreted as being divided by 100
if(this.options.style==='percent'){var _this$options$maximum;newValue/=100;// after dividing to get the percent value, javascript may get .0210999999 instead of .0211, so fix the number of fraction digits
newValue=+newValue.toFixed(((_this$options$maximum=this.options.maximumFractionDigits)!=null?_this$options$maximum:0)+2);}return newValue;}sanitize(value){// Remove literals and whitespace, which are allowed anywhere in the string
value=value.replace(this.symbols.literals,'');// Replace the ASCII minus sign with the minus sign used in the current locale
// so that both are allowed in case the user's keyboard doesn't have the locale's minus sign.
value=value.replace('-',this.symbols.minusSign);// In arab numeral system, their decimal character is 1643, but most keyboards don't type that
// instead they use the , (44) character or apparently the (1548) character.
if(this.options.numberingSystem==='arab'){value=value.replace(',',this.symbols.decimal);value=value.replace(String.fromCharCode(1548),this.symbols.decimal);value=$e1a22841ad5113a054c8ebe55b24e1a$var$replaceAll(value,'.',this.symbols.group);}// fr-FR group character is char code 8239, but that's not a key on the french keyboard,
// so allow 'period' as a group char and replace it with a space
if(this.options.locale==='fr-FR'){value=$e1a22841ad5113a054c8ebe55b24e1a$var$replaceAll(value,'.',String.fromCharCode(8239));}return value;}isValidPartialNumber(value,minValue,maxValue){if(minValue===void 0){minValue=-Infinity;}if(maxValue===void 0){maxValue=Infinity;}value=this.sanitize(value);// Remove minus or plus sign, which must be at the start of the string.
if(value.startsWith(this.symbols.minusSign)&&minValue<0){value=value.slice(this.symbols.minusSign.length);}else if(this.symbols.plusSign&&value.startsWith(this.symbols.plusSign)&&maxValue>0){value=value.slice(this.symbols.plusSign.length);}// Numbers cannot start with a group separator
if(value.startsWith(this.symbols.group)){return false;}// Remove numerals, groups, and decimals
value=$e1a22841ad5113a054c8ebe55b24e1a$var$replaceAll(value,this.symbols.group,'').replace(this.symbols.numeral,'').replace(this.symbols.decimal,'');// The number is valid if there are no remaining characters
return value.length===0;}}const $e1a22841ad5113a054c8ebe55b24e1a$var$nonLiteralParts=new Set(['decimal','fraction','integer','minusSign','plusSign','group']);function $e1a22841ad5113a054c8ebe55b24e1a$var$getSymbols(formatter,intlOptions,originalOptions){var _allParts$find$value,_allParts$find,_posAllParts$find,_allParts$find2,_allParts$find3;// Note: some locale's don't add a group symbol until there is a ten thousands place
let allParts=formatter.formatToParts(-10000.111);let posAllParts=formatter.formatToParts(10000.111);let singularParts=formatter.formatToParts(1);let minusSign=(_allParts$find$value=(_allParts$find=allParts.find(p=>p.type==='minusSign'))==null?void 0:_allParts$find.value)!=null?_allParts$find$value:'-';let plusSign=(_posAllParts$find=posAllParts.find(p=>p.type==='plusSign'))==null?void 0:_posAllParts$find.value;// Safari does not support the signDisplay option, but our number parser polyfills it.
// If no plus sign was returned, but the original options contained signDisplay, default to the '+' character.
// @ts-ignore
if(!plusSign&&((originalOptions==null?void 0:originalOptions.signDisplay)==='exceptZero'||(originalOptions==null?void 0:originalOptions.signDisplay)==='always')){plusSign='+';}let decimal=(_allParts$find2=allParts.find(p=>p.type==='decimal'))==null?void 0:_allParts$find2.value;let group=(_allParts$find3=allParts.find(p=>p.type==='group'))==null?void 0:_allParts$find3.value;// this set is also for a regex, it's all literals that might be in the string we want to eventually parse that
// don't contribute to the numerical value
let pluralLiterals=allParts.filter(p=>!$e1a22841ad5113a054c8ebe55b24e1a$var$nonLiteralParts.has(p.type)).map(p=>$e1a22841ad5113a054c8ebe55b24e1a$var$escapeRegex(p.value));let singularLiterals=singularParts.filter(p=>!$e1a22841ad5113a054c8ebe55b24e1a$var$nonLiteralParts.has(p.type)).map(p=>$e1a22841ad5113a054c8ebe55b24e1a$var$escapeRegex(p.value));let sortedLiterals=[...new Set([...singularLiterals,...pluralLiterals])].sort((a,b)=>b.length-a.length);let literals=new RegExp(sortedLiterals.join('|')+"|[\\p{White_Space}]",'gu');// These are for replacing non-latn characters with the latn equivalent
let numerals=[...new Intl.NumberFormat(intlOptions.locale,{useGrouping:false}).format(9876543210)].reverse();let indexes=new Map(numerals.map((d,i)=>[d,i]));let numeral=new RegExp("["+numerals.join('')+"]",'g');let index=d=>String(indexes.get(d));return {minusSign,plusSign,decimal,group,literals,numeral,index};}function $e1a22841ad5113a054c8ebe55b24e1a$var$replaceAll(str,find,replace){// @ts-ignore
if(str.replaceAll){// @ts-ignore
return str.replaceAll(find,replace);}return str.split(find).join(replace);}function $e1a22841ad5113a054c8ebe55b24e1a$var$escapeRegex(string){return string.replace(/[-/\\^$*+?.()|[\]{}]/g,'\\$&');}

const Chevron75Icon=()=>{return tag$2`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" aria-hidden="true" fill="currentColor"><path d="M7.482 4.406l-.001-.001L3.86.783a.84.84 0 00-1.188 1.188L5.702 5l-3.03 3.03A.84.84 0 003.86 9.216l3.621-3.622h.001a.84.84 0 000-1.19z"/></svg>`;};

/**
 * @element sp-icon-chevron75
 */class IconChevron75 extends IconBase{render(){setCustomTemplateLiteralTag$2(p);return Chevron75Icon();}}

iliadCustomElementsDefine('sp-icon-chevron75',IconChevron75);

const styles$m=r`:host{--spectrum-alias-border-size-thin:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-single-line-height:var(
--spectrum-global-dimension-size-400
);--spectrum-icon-chevron-down-small-width:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-border-radius-regular:var(
--spectrum-global-dimension-size-50
);--spectrum-textfield-m-border-color-hover:var(
--spectrum-alias-border-color-hover
);--spectrum-textfield-m-border-color-mouse-focus:var(
--spectrum-alias-border-color-mouse-focus
);--spectrum-textfield-m-border-color-error-mouse-focus:var(
--spectrum-semantic-negative-color-state-hover
);--spectrum-textfield-m-border-color-key-focus:var(
--spectrum-alias-border-color-focus
);--spectrum-textfield-m-border-color-error-key-focus:var(
--spectrum-alias-border-color-focus
);--spectrum-textfield-m-border-color-error:var(
--spectrum-semantic-negative-color-default
);--spectrum-textfield-m-border-color-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-textfield-m-border-color:var(--spectrum-alias-border-color);--spectrum-textfield-quiet-m-border-color-disabled:var(
--spectrum-alias-border-color-mid
);--spectrum-textfield-quiet-m-border-color:var(
--spectrum-alias-border-color
)}:host{--spectrum-stepper-width:var(
--spectrum-global-dimension-size-900
);--spectrum-stepper-border-size:var(
--spectrum-alias-border-size-thin,var(--spectrum-global-dimension-static-size-10)
);--spectrum-stepper-button-height:calc(var(
--spectrum-alias-single-line-height,
var(--spectrum-global-dimension-size-400)
)/2);--spectrum-stepper-button-width:calc(var(--spectrum-global-dimension-size-300) - var(--spectrum-stepper-border-size));--spectrum-stepper-button-padding:calc(var(--spectrum-global-dimension-size-150)/2);--spectrum-stepper-border-radius-reset:0;--spectrum-stepper-border-size-reset:0;--spectrum-stepper-icon-nudge-top:var(--spectrum-global-dimension-size-10);--spectrum-stepper-icon-nudge:var(--spectrum-global-dimension-size-25);--spectrum-stepper-quiet-width:var(--spectrum-global-dimension-size-600);--spectrum-stepper-button-offset:calc(var(--spectrum-stepper-button-width)/2 - var(
--spectrum-icon-chevron-down-small-width,
var(--spectrum-global-dimension-size-100)
)/2);--spectrum-stepper-quiet-button-width:calc(var(--spectrum-stepper-button-width) - var(--spectrum-stepper-button-offset))}:host{border-radius:var(
--spectrum-alias-border-radius-medium,var(--spectrum-global-dimension-size-100)
);display:inline-flex;flex-direction:row;flex-wrap:nowrap;line-height:0;transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;width:var(--spectrum-stepper-width)}:host:before{content:""}:host([dir=ltr]) .buttons{border-top-left-radius:0}:host([dir=rtl]) .buttons{border-top-right-radius:0}:host([dir=ltr]) .buttons{border-top-right-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=rtl]) .buttons{border-top-left-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=ltr]) .buttons{border-bottom-right-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=rtl]) .buttons{border-bottom-left-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=ltr]) .buttons{border-bottom-left-radius:0}:host([dir=rtl]) .buttons{border-bottom-right-radius:0}.buttons{display:block;transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{padding-left:var(
--spectrum-stepper-button-padding
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{padding-right:var(
--spectrum-stepper-button-padding
)}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{padding-right:var(
--spectrum-stepper-button-padding
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{padding-left:var(
--spectrum-stepper-button-padding
)}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{border-left-width:var(
--spectrum-stepper-border-size-reset
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{border-right-width:var(
--spectrum-stepper-border-size-reset
)}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{border-top-left-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{border-top-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{border-bottom-left-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{border-bottom-right-radius:var(
--spectrum-stepper-border-radius-reset
)}.stepDown,.stepUp{border-width:var(--spectrum-stepper-border-size);box-sizing:border-box;display:flex;height:var(--spectrum-stepper-button-height);margin:0!important;min-width:0;position:relative;width:var(--spectrum-stepper-button-width)}.stepDown .icon,.stepUp .icon{margin:0!important;opacity:1}:host([dir=ltr]) .stepUp{border-bottom-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .stepUp{border-bottom-left-radius:var(
--spectrum-stepper-border-radius-reset
)}.stepUp{border-bottom:none;padding-top:var(--spectrum-stepper-icon-nudge-top)}:host([dir=ltr]) .stepDown{border-top-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .stepDown{border-top-left-radius:var(
--spectrum-stepper-border-radius-reset
)}.stepDown{padding-bottom:var(
--spectrum-stepper-icon-nudge
)}.textfield{flex:1;width:auto}:host([dir=ltr]) .input{border-top-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .input{border-top-left-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=ltr]) .input{border-bottom-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .input{border-bottom-left-radius:var(
--spectrum-stepper-border-radius-reset
)}.input,.textfield{min-width:0}:host([quiet]){border-radius:var(
--spectrum-stepper-border-radius-reset
);width:var(--spectrum-stepper-quiet-width)}:host([quiet]) .buttons{border-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=ltr][quiet]) .stepDown,:host([dir=ltr][quiet]) .stepUp{border-right-width:var(
--spectrum-stepper-border-size-reset
)}:host([dir=rtl][quiet]) .stepDown,:host([dir=rtl][quiet]) .stepUp{border-left-width:var(
--spectrum-stepper-border-size-reset
)}:host([dir=ltr][quiet]) .stepDown,:host([dir=ltr][quiet]) .stepUp{border-left:none}:host([dir=rtl][quiet]) .stepDown,:host([dir=rtl][quiet]) .stepUp{border-right:none}:host([dir=ltr][quiet]) .stepDown,:host([dir=ltr][quiet]) .stepUp{padding-right:0}:host([dir=rtl][quiet]) .stepDown,:host([dir=rtl][quiet]) .stepUp{padding-left:0}:host([quiet]) .stepDown,:host([quiet]) .stepUp{border-radius:var(--spectrum-stepper-border-radius-reset);border-top:none;justify-content:flex-end;min-width:0;width:var(
--spectrum-stepper-quiet-button-width
)}:host([dir=ltr][quiet]) .stepDown:after,:host([dir=ltr][quiet]) .stepUp:after{right:calc(var(--spectrum-stepper-button-offset)*-1)}:host([dir=rtl][quiet]) .stepDown:after,:host([dir=rtl][quiet]) .stepUp:after{left:calc(var(--spectrum-stepper-button-offset)*-1)}:host([quiet]) .stepDown:after,:host([quiet]) .stepUp:after{content:"";height:100%;position:absolute;width:var(--spectrum-stepper-button-offset)}:host(:hover:not([disabled]):not([invalid]):not([focused]):not([keyboard-focused])) .input,:host(:hover:not([disabled]):not([invalid]):not([focused]):not([keyboard-focused])) .stepDown,:host(:hover:not([disabled]):not([invalid]):not([focused]):not([keyboard-focused])) .stepUp{border-color:var(
--spectrum-textfield-m-border-color-hover,var(--spectrum-alias-border-color-hover)
)}:host([focused]){border-color:var(
--spectrum-textfield-m-border-color-mouse-focus,var(--spectrum-alias-border-color-mouse-focus)
)}:host([focused]) .stepDown,:host([focused]) .stepUp{border-color:var(
--spectrum-textfield-m-border-color-mouse-focus,var(--spectrum-alias-border-color-mouse-focus)
)}:host([focused]) .input{border-color:var(
--spectrum-textfield-m-border-color-mouse-focus,var(--spectrum-alias-border-color-mouse-focus)
);box-shadow:none}:host([focused][invalid]){border-color:var(
--spectrum-textfield-m-border-color-error-mouse-focus,var(--spectrum-semantic-negative-color-state-hover)
)}:host([focused][invalid]) .stepDown,:host([focused][invalid]) .stepUp{border-color:var(
--spectrum-textfield-m-border-color-error-mouse-focus,var(--spectrum-semantic-negative-color-state-hover)
)}:host([focused][invalid]) .input{border-color:var(
--spectrum-textfield-m-border-color-error-mouse-focus,var(--spectrum-semantic-negative-color-state-hover)
)}:host([keyboard-focused]){box-shadow:0 0 0 1px var(
--spectrum-textfield-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([keyboard-focused]) .buttons,:host([keyboard-focused]) .input{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([keyboard-focused]) .input,:host([keyboard-focused]) .stepDown,:host([keyboard-focused]) .stepUp{border-color:var(
--spectrum-textfield-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([keyboard-focused][invalid]){box-shadow:0 0 0 1px var(
--spectrum-textfield-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([keyboard-focused][invalid]) .stepDown,:host([keyboard-focused][invalid]) .stepUp{border-color:var(
--spectrum-textfield-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([keyboard-focused][invalid]) .buttons{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([invalid]) .stepDown,:host([invalid]) .stepUp{border-color:var(
--spectrum-textfield-m-border-color-error,var(--spectrum-semantic-negative-color-default)
)}:host([invalid]) .input{border-color:var(
--spectrum-textfield-m-border-color-error,var(--spectrum-semantic-negative-color-default)
)}:host([invalid][keyboard-focused]) .input{border-color:var(
--spectrum-textfield-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
);box-shadow:0 0 0 1px var(
--spectrum-textfield-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([invalid][keyboard-focused]) .buttons{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([disabled]) .stepDown,:host([disabled]) .stepUp{border-color:var(
--spectrum-textfield-m-border-color-disabled,var(--spectrum-alias-border-color-transparent)
)}.stepDown,.stepUp{border-color:var(
--spectrum-textfield-m-border-color,var(--spectrum-alias-border-color)
)}.stepDown:disabled,.stepUp:disabled{border-color:var(
--spectrum-textfield-m-border-color-disabled,var(--spectrum-alias-border-color-transparent)
)}:host([quiet][disabled]) .stepDown,:host([quiet][disabled]) .stepUp{border-color:var(
--spectrum-textfield-quiet-m-border-color-disabled,var(--spectrum-alias-border-color-mid)
)}:host([quiet]) .stepDown,:host([quiet]) .stepUp{border-color:var(
--spectrum-textfield-quiet-m-border-color,var(--spectrum-alias-border-color)
)}:host([quiet]) .stepDown:disabled,:host([quiet]) .stepUp:disabled{border-color:var(
--spectrum-textfield-quiet-m-border-color-disabled,var(--spectrum-alias-border-color-mid)
)}:host([quiet]) .input{box-shadow:none}:host([quiet][invalid]) .input{border-color:var(
--spectrum-textfield-m-border-color-error,var(--spectrum-semantic-negative-color-default)
)}:host([quiet][invalid]) .stepDown{border-color:var(
--spectrum-textfield-m-border-color-error,var(--spectrum-semantic-negative-color-default)
)}:host([quiet][focused]),:host([quiet][keyboard-focused]){box-shadow:none}:host([quiet][focused]) .buttons,:host([quiet][focused]) .input,:host([quiet][keyboard-focused]) .buttons,:host([quiet][keyboard-focused]) .input{box-shadow:0 1px 0 0 var(
--spectrum-textfield-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([quiet][focused]) .stepDown,:host([quiet][keyboard-focused]) .stepDown{border-color:var(
--spectrum-textfield-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
)}:host([quiet][focused][invalid]),:host([quiet][keyboard-focused][invalid]){box-shadow:none}:host([quiet][focused][invalid]) .buttons,:host([quiet][focused][invalid]) .input,:host([quiet][keyboard-focused][invalid]) .buttons,:host([quiet][keyboard-focused][invalid]) .input{box-shadow:0 1px 0 0 var(
--spectrum-textfield-m-border-color-error,var(--spectrum-semantic-negative-color-default)
)}:host([quiet][focused][invalid]) .input,:host([quiet][keyboard-focused][invalid]) .input{border-color:var(
--spectrum-textfield-m-border-color-error,var(--spectrum-semantic-negative-color-default)
)}:host([quiet][focused][invalid]) .stepDown,:host([quiet][keyboard-focused][invalid]) .stepDown{border-color:var(
--spectrum-textfield-m-border-color-error,var(--spectrum-semantic-negative-color-default)
)}sp-field-button{--spectrum-dropdown-height:100%;--spectrum-dropdown-padding-x:0}.input{font-feature-settings:"tnum";font-variant-numeric:tabular-nums}:host([hide-stepper]) .input{border-radius:var(
--spectrum-alias-border-radius-medium,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr][invalid]:not([hide-stepper])) .icon{right:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl][invalid]:not([hide-stepper])) .icon{left:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=ltr][valid]:not([hide-stepper])) .icon{right:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl][valid]:not([hide-stepper])) .icon{left:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=ltr][quiet][invalid]:not([hide-stepper])) .icon{right:var(--spectrum-stepper-button-width)}:host([dir=rtl][quiet][invalid]:not([hide-stepper])) .icon{left:var(--spectrum-stepper-button-width)}:host([dir=ltr][quiet][valid]:not([hide-stepper])) .icon{right:var(--spectrum-stepper-button-width)}:host([dir=rtl][quiet][valid]:not([hide-stepper])) .icon{left:var(--spectrum-stepper-button-width)}:host([dir=ltr]:not([hide-stepper])) .icon-workflow{left:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl]:not([hide-stepper])) .icon-workflow{right:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=ltr][quiet]:not([hide-stepper])) .icon-workflow{left:var(--spectrum-stepper-button-width)}:host([dir=rtl][quiet]:not([hide-stepper])) .icon-workflow{right:var(--spectrum-stepper-button-width)}`;

function testPlatform(re){return typeof window!=='undefined'&&window.navigator!=null?re.test(window.navigator.platform):/* c8 ignore next */false;}function testUserAgent(re){return typeof window!=='undefined'&&window.navigator!=null?re.test(window.navigator.userAgent):/* c8 ignore next */false;}function isIPhone(){return testPlatform(/^iPhone/);}function isAndroid(){return testUserAgent(/Android/);}const FRAMES_PER_CHANGE=5;const indeterminatePlaceholder='-';/**
 * @element sp-number-field
 */class NumberField extends TextfieldBase{constructor(){super(...arguments);this.focused=false;this._forcedUnit='';/**
         * An `<sp-number-field>` element will process its numeric value with
         * `new Intl.NumberFormat(this.resolvedLanguage, this.formatOptions).format(this.valueAsNumber)`
         * in order to prepare it for visual delivery in the input. In order to customize this
         * processing supply your own `Intl.NumberFormatOptions` object here.
         *
         * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
         */this.formatOptions={};/**
         * Whether the stepper UI is hidden or not.
         */this.hideStepper=false;this.indeterminate=false;this.keyboardFocused=false;this.resolvedLanguage=document.documentElement.lang||navigator.language;this.stepperActive=false;this.stepModifier=10;this._value=NaN;this._trackingValue='';this.changeCount=0;this.wasIndeterminate=false;}static get styles(){return [...super.styles,styles$m,styles$N];}set value(value){if(value===this.value){return;}const oldValue=this._value;this._value=value;this.requestUpdate('value',oldValue);}get value(){return this._value;}get inputValue(){return this.indeterminate?this.formattedValue:this.inputElement.value;}/**
     * Retreive the value of the element parsed to a Number.
     */get valueAsString(){return this._value.toString();}set valueAsString(value){this.value=this.numberParser.parse(value);}get formattedValue(){if(isNaN(this.value))return '';return this.numberFormatter.format(this.value)+(this.focused?'':this._forcedUnit);}convertValueToNumber(value){return this.numberParser.parse(value);}get _step(){var _a;if(typeof this.step!=='undefined'){return this.step;}if(((_a=this.formatOptions)===null||_a===void 0?void 0:_a.style)==='percent'){return 0.01;}return 1;}handlePointerdown(event){if(event.button!==0){event.preventDefault();return;}this.stepperActive=true;this.buttons.setPointerCapture(event.pointerId);const stepUpRect=this.buttons.children[0].getBoundingClientRect();const stepDownRect=this.buttons.children[1].getBoundingClientRect();this.findChange=event=>{if(event.clientX>=stepUpRect.x&&event.clientY>=stepUpRect.y&&event.clientX<=stepUpRect.x+stepUpRect.width&&event.clientY<=stepUpRect.y+stepUpRect.height){this.change=event=>this.increment(event.shiftKey?this.stepModifier:1);}else if(event.clientX>=stepDownRect.x&&event.clientY>=stepDownRect.y&&event.clientX<=stepDownRect.x+stepDownRect.width&&event.clientY<=stepDownRect.y+stepDownRect.height){this.change=event=>this.decrement(event.shiftKey?this.stepModifier:1);}};this.findChange(event);this.startChange(event);}startChange(event){this.changeCount=0;this.doChange(event);this.safty=setTimeout(()=>{this.doNextChange(event);},400);}doChange(event){this.change(event);}handlePointermove(event){this.findChange(event);}handlePointerup(event){this.buttons.releasePointerCapture(event.pointerId);cancelAnimationFrame(this.nextChange);clearTimeout(this.safty);this.dispatchEvent(new Event('change',{bubbles:true,composed:true}));this.stepperActive=false;}doNextChange(event){this.changeCount+=1;if(this.changeCount%FRAMES_PER_CHANGE===0){this.doChange(event);}return requestAnimationFrame(()=>{this.nextChange=this.doNextChange(event);});}stepBy(count){const min=typeof this.min!=='undefined'?this.min:0;let value=this.value;value+=count*this._step;if(isNaN(this.value)){this.value=min;}else {this.value=value;}this.dispatchEvent(new Event('input',{bubbles:true,composed:true}));this.indeterminate=false;this.focus();}increment(factor=1){this.stepBy(1*factor);}decrement(factor=1){this.stepBy(-1*factor);}handleKeydown(event){switch(event.code){case'ArrowUp':event.preventDefault();this.increment(event.shiftKey?this.stepModifier:1);this.dispatchEvent(new Event('change',{bubbles:true,composed:true}));break;case'ArrowDown':event.preventDefault();this.decrement(event.shiftKey?this.stepModifier:1);this.dispatchEvent(new Event('change',{bubbles:true,composed:true}));break;}}onScroll(event){event.preventDefault();const direction=event.shiftKey?event.deltaX/Math.abs(event.deltaX):event.deltaY/Math.abs(event.deltaY);if(direction!==0&&!isNaN(direction)){this.stepBy(direction*(event.shiftKey?this.stepModifier:1));}}onFocus(){super.onFocus();this._trackingValue=this.inputValue;this.keyboardFocused=true;this.addEventListener('wheel',this.onScroll);}onBlur(){super.onBlur();this.keyboardFocused=false;this.removeEventListener('wheel',this.onScroll);}handleFocusin(){this.focused=true;this.keyboardFocused=true;}handleFocusout(){this.focused=false;this.keyboardFocused=false;}onChange(){const value=this.convertValueToNumber(this.inputValue);if(this.wasIndeterminate){this.wasIndeterminate=false;this.indeterminateValue=undefined;if(isNaN(value)){this.indeterminate=true;return;}}this.value=value;super.onChange();}onInput(){if(this.indeterminate){this.wasIndeterminate=true;this.indeterminateValue=this.value;this.inputElement.value=this.inputElement.value.replace(indeterminatePlaceholder,'');}const{value,selectionStart}=this.inputElement;if(this.numberParser.isValidPartialNumber(value)){const valueAsNumber=this.convertValueToNumber(value);if(!value&&this.indeterminateValue){this.indeterminate=true;this._value=this.indeterminateValue;}else {this.indeterminate=false;this._value=this.validateInput(valueAsNumber);}this._trackingValue=value;return;}const currentLength=value.length;const previousLength=this._trackingValue.length;const nextSelectStart=(selectionStart||currentLength)-(currentLength-previousLength);this.inputElement.value=this.indeterminate?indeterminatePlaceholder:this._trackingValue;this.inputElement.setSelectionRange(nextSelectStart,nextSelectStart);}validateInput(value){if(typeof this.min!=='undefined'){value=Math.max(this.min,value);}if(typeof this.step!=='undefined'){const min=typeof this.min!=='undefined'?this.min:0;const moduloStep=(value-min)%this.step;const fallsOnStep=moduloStep===0;if(!fallsOnStep){const overUnder=Math.round(moduloStep/this.step);if(overUnder===1){value+=this.step-moduloStep;}else {value-=moduloStep;}}if(typeof this.max!=='undefined'){while(value>this.max){value-=this.step;}}}if(typeof this.max!=='undefined'){value=Math.min(this.max,value);}return value;}get displayValue(){const indeterminateValue=this.focused?'':indeterminatePlaceholder;return this.indeterminate?indeterminateValue:this.formattedValue;}clearNumberFormatterCache(){this._numberFormatter=undefined;this._numberParser=undefined;}get numberFormatter(){if(!this._numberFormatter||!this._numberFormatterFocused){const _a=this.formatOptions,{style,unit,// eslint-disable-next-line @typescript-eslint/no-unused-vars
unitDisplay}=_a,formatOptionsNoUnit=__rest(_a,["style","unit","unitDisplay"]);if(style!=='unit'){formatOptionsNoUnit.style=style;}this._numberFormatterFocused=new NumberFormatter(this.resolvedLanguage,formatOptionsNoUnit);try{this._numberFormatter=new NumberFormatter(this.resolvedLanguage,this.formatOptions);this._forcedUnit='';this._numberFormatter.format(1);}catch(error){if(style==='unit'){this._forcedUnit=unit;}this._numberFormatter=this._numberFormatterFocused;}}return this.focused?this._numberFormatterFocused:this._numberFormatter;}get numberParser(){if(!this._numberParser||!this._numberParserFocused){const _a=this.formatOptions,{style,unit,// eslint-disable-next-line @typescript-eslint/no-unused-vars
unitDisplay}=_a,formatOptionsNoUnit=__rest(_a,["style","unit","unitDisplay"]);if(style!=='unit'){formatOptionsNoUnit.style=style;}this._numberParserFocused=new NumberParser(this.resolvedLanguage,formatOptionsNoUnit);try{this._numberParser=new NumberParser(this.resolvedLanguage,this.formatOptions);this._forcedUnit='';this._numberParser.parse('0');}catch(error){if(style==='unit'){this._forcedUnit=unit;}this._numberParser=this._numberParserFocused;}}return this.focused?this._numberParserFocused:this._numberParser;}render(){this.autocomplete='off';return p`${super.render()} ${this.hideStepper?p``:p`<span class="buttons" @focusin="${this.handleFocusin}" @focusout="${this.handleFocusout}" ${streamingListener({start:['pointerdown',this.handlePointerdown],streamInside:[['pointermove','pointerenter','pointerleave','pointerover','pointerout'],this.handlePointermove],end:[['pointerup','pointercancel'],this.handlePointerup]})}><sp-action-button class="stepUp" label="Increment" tabindex="-1" ?focused="${this.focused}" ?disabled="${this.disabled||this.readonly||typeof this.max!=='undefined'&&this.value===this.max}"><sp-icon-chevron75 slot="icon" class="stepper-icon spectrum-UIIcon-ChevronUp75"></sp-icon-chevron75></sp-action-button><sp-action-button class="stepDown" label="Decrement" tabindex="-1" ?focused="${this.focused}" ?disabled="${this.disabled||this.readonly||typeof this.min!=='undefined'&&this.value===this.min}"><sp-icon-chevron75 slot="icon" class="stepper-icon spectrum-UIIcon-ChevronDown75"></sp-icon-chevron75></sp-action-button></span>`}`;}update(changes){if(changes.has('formatOptions')||changes.has('resolvedLanguage')){this.clearNumberFormatterCache();}super.update(changes);}firstUpdated(changes){super.firstUpdated(changes);this.multiline=false;this.addEventListener('keydown',this.handleKeydown);}updated(changes){if(changes.has('value')||changes.has('max')||changes.has('min')||changes.has('min')){const value=this.numberParser.parse(this.inputValue.replace(this._forcedUnit,''));this.value=this.validateInput(value);}if(changes.has('min')||changes.has('formatOptions')){let inputMode='numeric';const hasNegative=typeof this.min!=='undefined'&&this.min<0;const{maximumFractionDigits}=this.formatOptions;const hasDecimals=maximumFractionDigits&&maximumFractionDigits>0;/* c8 ignore next 18 */if(isIPhone()){// iPhone doesn't have a minus sign in either numeric or decimal.
// Note this is only for iPhone, not iPad, which always has both
// minus and decimal in numeric.
if(hasNegative){inputMode='text';}else if(hasDecimals){inputMode='decimal';}}else if(isAndroid()){// Android numeric has both a decimal point and minus key.
// decimal does not have a minus key.
if(hasNegative){inputMode='numeric';}else if(hasDecimals){inputMode='decimal';}}this.inputElement.inputMode=inputMode;}}connectedCallback(){super.connectedCallback();this.resolveLanguage();}disconnectedCallback(){this.resolveLanguage();super.disconnectedCallback();}resolveLanguage(){const queryThemeEvent=new CustomEvent('sp-language-context',{bubbles:true,composed:true,detail:{callback:lang=>{this.resolvedLanguage=lang;}},cancelable:true});this.dispatchEvent(queryThemeEvent);}}__decorate([i('.buttons')],NumberField.prototype,"buttons",void 0);__decorate([e({type:Boolean,reflect:true})],NumberField.prototype,"focused",void 0);__decorate([e({type:Object,attribute:'format-options'})],NumberField.prototype,"formatOptions",void 0);__decorate([e({type:Boolean,reflect:true,attribute:'hide-stepper'})],NumberField.prototype,"hideStepper",void 0);__decorate([e({type:Boolean,reflect:true})],NumberField.prototype,"indeterminate",void 0);__decorate([e({type:Boolean,reflect:true,attribute:'keyboard-focused'})],NumberField.prototype,"keyboardFocused",void 0);__decorate([e({type:Number})],NumberField.prototype,"max",void 0);__decorate([e({type:Number})],NumberField.prototype,"min",void 0);__decorate([e({attribute:false})],NumberField.prototype,"resolvedLanguage",void 0);__decorate([e({type:Number})],NumberField.prototype,"step",void 0);__decorate([e({type:Number,reflect:true,attribute:'step-modifier'})],NumberField.prototype,"stepModifier",void 0);__decorate([e({type:Number})],NumberField.prototype,"value",null);

iliadCustomElementsDefine('sp-number-field',NumberField);

var spNumberField = /*#__PURE__*/Object.freeze({
    __proto__: null
});

iliadCustomElementsDefine('overlay-trigger',OverlayTrigger);

const styles$l=r`:host{--spectrum-panel-background-color:var(--spectrum-global-color-gray-100);--spectrum-panel-divider-color:var(--spectrum-alias-border-color-light);--spectrum-panel-divider-width:var(--spectrum-alias-border-size-thin);--spectrum-panel-border-color:var(--spectrum-alias-border-color-dark);--spectrum-panel-box-shadow:var(--spectrum-global-shadow-static-m);--spectrum-panel-border-size:var(--spectrum-global-dimension-size-0);--spectrum-panel-border-radius:var(--spectrum-alias-border-radius-large);--spectrum-panel-padding:var(--spectrum-global-dimension-size-200);--spectrum-panel-header-padding-left:var(
--spectrum-global-dimension-size-200
);--spectrum-panel-header-padding-right:var(
--spectrum-global-dimension-size-100
);--spectrum-panel-icon-gap:var(--spectrum-global-dimension-size-50);--spectrum-panel-header-height:var(--spectrum-alias-control-height-xl);--spectrum-panel-min-width:var(
--spectrum-global-dimension-static-size-3200
);--spectrum-panel-content-min-height:var(
--spectrum-global-dimension-static-size-1000
);--spectrum-panel-footer-margin-top:var(--spectrum-panel-padding);--spectrum-panel-title-color:var(--spectrum-alias-text-color-primary);--spectrum-panel-icon-main-color:var(--spectrum-alias-icon-color-primary);--spectrum-panel-icon-others-color:var(
--spectrum-alias-icon-color-tertiary
);--spectrum-panel-title-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-panel-title-font-size:var(--spectrum-alias-font-size-m);--spectrum-panel-title-font-weight:var(--spectrum-alias-font-weight-l)}:host([open]){opacity:1;pointer-events:auto;transition-delay:0s;visibility:visible}:host{border-radius:var(
--spectrum-panel-border-radius,var(--spectrum-alias-border-radius-regular)
);border-style:solid;border-width:var(
--spectrum-panel-border-size,var(--spectrum-alias-border-size-thin)
);box-sizing:border-box;display:inline-flex;flex-direction:column;min-width:var(
--spectrum-panel-min-width,var(--spectrum-global-dimension-size-400)
);outline:0;position:absolute}:host{background-color:var(--spectrum-panel-background-color);border-color:var(
--spectrum-panel-border-color,var(--spectrum-alias-border-color-dark)
);box-shadow:var(--spectrum-panel-box-shadow);padding:0 0 var(--spectrum-panel-padding) 0}:host .panel-header{align-items:center;box-sizing:border-box;display:flex;height:var(--spectrum-panel-header-height);justify-content:space-between;padding:0 var(--spectrum-panel-header-padding-right) 0 var(--spectrum-panel-header-padding-left);width:100%}:host .panel-header[divider]{border-bottom:var(--spectrum-panel-divider-width) solid var(--spectrum-panel-divider-color)}:host .panel-header .header-block{align-items:center;display:flex;height:100%;justify-content:flex-start;overflow:hidden}:host .panel-header .header-block.header-others{justify-content:flex-end}:host .panel-header .header-main .title{color:var(--spectrum-panel-title-color);font-size:var(--spectrum-panel-title-font-size);font-weight:var(--spectrum-panel-title-font-weight);line-height:var(--spectrum-panel-title-line-height);margin-right:var(--spectrum-panel-icon-gap)}:host .panel-header .header-main .back-icon{color:var(--spectrum-panel-icon-main-color);margin-right:var(--spectrum-panel-icon-gap)}:host .panel-header .header-main .close{color:var(--spectrum-panel-icon-others-color);margin-left:var(--spectrum-panel-icon-gap)}::slotted([slot=info]){color:var(--spectrum-panel-icon-others-color)}::slotted([slot=more]){color:var(--spectrum-panel-icon-others-color)}:host .panel-content{height:auto;min-height:var(--spectrum-panel-content-min-height);width:100%}:host .panel-footer{align-items:center;box-sizing:border-box;display:flex;justify-content:flex-end;margin-top:var(--spectrum-panel-footer-margin-top);padding:0 var(--spectrum-panel-padding)}::slotted(*){overscroll-behavior:contain}`;

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

const CloseIcon$1=()=>{return tag`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.9393 12L4.3986 5.45925L5.45926 4.39859L12 10.9393L18.5407 4.39859L19.6014 5.45925L13.0607 12L19.6014 18.5407L18.5407 19.6014L12 13.0606L5.45926 19.6014L4.3986 18.5407L10.9393 12Z"/></svg>`;};

/**
 * @element sp-icon-editor-close
 */class IconClose$1 extends IconBase{render(){setCustomTemplateLiteralTag(p);return CloseIcon$1();}}

iliadCustomElementsDefine('sp-icon-editor-close',IconClose$1);

const ArrowLeftIcon=()=>{return tag`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.96967 11.4697L13.9697 3.46967L15.0303 4.53033L7.56066 12L15.0303 19.4697L13.9697 20.5303L5.96967 12.5303C5.67678 12.2374 5.67678 11.7626 5.96967 11.4697Z"/></svg>`;};

/**
 * @element sp-icon-editor-arrow-left
 */class IconArrowLeft extends IconBase{render(){setCustomTemplateLiteralTag(p);return ArrowLeftIcon();}}

iliadCustomElementsDefine('sp-icon-editor-arrow-left',IconArrowLeft);

/**
 * @element sp-panel
 *
 * @slot - content to display within the Panel
 * @attr {Boolean} open - The open state of the panel
 * @attr {Boolean} dialog - Adds some padding to the panel
 */class Panel extends FocusVisiblePolyfillMixin(ObserveSlotPresence(SpectrumElement,['[slot="info"]','[slot="more"]','[slot="footer"]'])){constructor(){super(...arguments);this.open=false;this.title='';this.dismissable=false;this.backable=false;this.divider=false;this.cancelLabel='';this.confirmLabel='';/**
         * @type {"auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | "none"}
         * @attr
         */this.placement='none';this.tip=false;}static get styles(){return [styles$l];}get hasFooter(){return this.getSlotContentPresence('[slot="footer"]');}get hasInfo(){return this.getSlotContentPresence('[slot="info"]');}get hasMore(){return this.getSlotContentPresence('[slot="more"]');}doClose(){this.dispatchEvent(new Event('close',{bubbles:true}));}doBack(){this.dispatchEvent(new Event('back',{bubbles:true}));}doConfirm(){this.dispatchEvent(new Event('confirm',{bubbles:true}));}doCancel(){this.dispatchEvent(new Event('cancel',{bubbles:true}));}connectedCallback(){super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();}render(){return p`<div class="panel-header" ?divider="${this.divider}"><div class="header-block header-main ${this.backable?'handle-space':''}">${this.backable?p`<sp-icon-editor-arrow-left class="back-icon" slot="icon" @click="${this.doBack}"></sp-icon-editor-arrow-left>`:p``} ${this.title?p`<h2 class="title">${this.title}</h2>`:p``}<slot name="info"></slot></div><div class="header-block header-others ${this.dismissable?'handle-space':''}"><slot name="more"></slot>${this.dismissable?p`<sp-action-button class="icon close" label="Close" quiet size="m" @click="${this.doClose}"><sp-icon-editor-close class="spectrum-UIIcon-Cross500" slot="icon"></sp-icon-editor-close></sp-action-button>`:p``}</div></div><div class="panel-content"><slot></slot></div>${this.hasFooter?p`<div class="panel-footer"><slot name="footer"></slot></div>`:this.confirmLabel||this.cancelLabel?p`<div class="panel-footer"><sp-button-group class="button-group">${this.cancelLabel?p`<sp-button size="m" variant="primary" @click="${this.doCancel}">${this.cancelLabel}</sp-button>`:p``} ${this.confirmLabel?p`<sp-button size="m" variant="cta" @click="${this.doConfirm}">${this.confirmLabel}</sp-button>`:p``}</sp-button-group></div>`:p``}`;}}__decorate([e({type:Boolean,reflect:true})],Panel.prototype,"open",void 0);__decorate([e()],Panel.prototype,"title",void 0);__decorate([e({type:Boolean,reflect:true})],Panel.prototype,"dismissable",void 0);__decorate([e({type:Boolean,reflect:true})],Panel.prototype,"backable",void 0);__decorate([e({type:Boolean,reflect:true})],Panel.prototype,"divider",void 0);__decorate([e({attribute:'cancel-label'})],Panel.prototype,"cancelLabel",void 0);__decorate([e({attribute:'confirm-label'})],Panel.prototype,"confirmLabel",void 0);__decorate([e({reflect:true})],Panel.prototype,"placement",void 0);__decorate([e({type:Boolean,reflect:true})],Panel.prototype,"tip",void 0);

iliadCustomElementsDefine('sp-panel',Panel);

const styles$k=r`:host{--spectrum-progressbar-s-label-gap-y:var(
--spectrum-global-dimension-size-50
);--spectrum-progressbar-s-height:var(--spectrum-global-dimension-size-50);--spectrum-progressbar-s-width:var(
--spectrum-global-dimension-static-size-2400
);--spectrum-progressbar-s-indeterminate-fill-width:var(
--spectrum-global-dimension-size-1700
);--spectrum-progressbar-s-indeterminate-duration:var(
--spectrum-global-animation-duration-2000
);--spectrum-fieldlabel-side-s-padding-right:var(
--spectrum-global-dimension-size-130
);--spectrum-progressbar-m-label-gap-y:var(
--spectrum-global-dimension-size-50
);--spectrum-progressbar-m-height:var(--spectrum-global-dimension-size-75);--spectrum-progressbar-m-width:var(
--spectrum-global-dimension-static-size-2400
);--spectrum-progressbar-m-indeterminate-fill-width:var(
--spectrum-global-dimension-size-1700
);--spectrum-progressbar-m-indeterminate-duration:var(
--spectrum-global-animation-duration-2000
);--spectrum-fieldlabel-side-m-padding-right:var(
--spectrum-global-dimension-size-150
);--spectrum-progressbar-l-label-gap-y:var(
--spectrum-global-dimension-size-50
);--spectrum-progressbar-l-height:var(--spectrum-global-dimension-size-100);--spectrum-progressbar-l-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-progressbar-l-width:var(
--spectrum-global-dimension-static-size-2500
);--spectrum-progressbar-l-indeterminate-fill-width:var(
--spectrum-global-dimension-size-1800
);--spectrum-progressbar-l-indeterminate-duration:var(
--spectrum-global-animation-duration-2000
);--spectrum-fieldlabel-side-l-padding-right:var(
--spectrum-global-dimension-size-175
);--spectrum-progressbar-xl-label-gap-y:var(
--spectrum-global-dimension-size-50
);--spectrum-progressbar-xl-height:var(--spectrum-global-dimension-size-125);--spectrum-progressbar-xl-width:var(
--spectrum-global-dimension-static-size-2800
);--spectrum-progressbar-xl-indeterminate-fill-width:var(
--spectrum-global-dimension-size-2000
);--spectrum-progressbar-xl-indeterminate-duration:var(
--spectrum-global-animation-duration-2000
);--spectrum-fieldlabel-side-xl-padding-right:var(
--spectrum-global-dimension-size-185
);--spectrum-progressbar-m-track-fill-color:var(
--spectrum-global-color-blue-500
);--spectrum-progressbar-m-track-color:var(
--spectrum-alias-track-color-default
);--spectrum-progressbar-m-over-background-track-fill-color:var(
--spectrum-global-color-static-white
);--spectrum-progressbar-m-over-background-track-color:var(
--spectrum-alias-track-color-over-background
);--spectrum-meter-positive-m-track-fill-color:var(
--spectrum-semantic-positive-color-status
);--spectrum-meter-notice-m-track-fill-color:var(
--spectrum-semantic-notice-color-status
);--spectrum-meter-negative-m-track-fill-color:var(
--spectrum-semantic-negative-color-status
);--spectrum-fieldlabel-m-text-color:var(--spectrum-alias-label-text-color)}:host([size=s]){--spectrum-progressbar-border-radius:var(
--spectrum-progressbar-s-border-radius
);--spectrum-progressbar-label-gap-y:var(
--spectrum-progressbar-s-label-gap-y,var(--spectrum-global-dimension-size-50)
);--spectrum-progressbar-height:var(
--spectrum-progressbar-s-height,var(--spectrum-global-dimension-size-50)
);--spectrum-progressbar-width:var(
--spectrum-progressbar-s-width,var(--spectrum-global-dimension-static-size-2400)
);--spectrum-progressbar-indeterminate-fill-width:var(
--spectrum-progressbar-s-indeterminate-fill-width,var(--spectrum-global-dimension-size-1700)
);--spectrum-progressbar-indeterminate-duration:var(
--spectrum-progressbar-s-indeterminate-duration,var(--spectrum-global-animation-duration-2000)
);--spectrum-fieldlabel-side-padding-right:var(
--spectrum-fieldlabel-side-s-padding-right,var(--spectrum-global-dimension-size-130)
)}:host([size=m]){--spectrum-progressbar-border-radius:var(
--spectrum-progressbar-m-border-radius
);--spectrum-progressbar-label-gap-y:var(
--spectrum-progressbar-m-label-gap-y,var(--spectrum-global-dimension-size-50)
);--spectrum-progressbar-height:var(
--spectrum-progressbar-m-height,var(--spectrum-global-dimension-size-75)
);--spectrum-progressbar-width:var(
--spectrum-progressbar-m-width,var(--spectrum-global-dimension-static-size-2400)
);--spectrum-progressbar-indeterminate-fill-width:var(
--spectrum-progressbar-m-indeterminate-fill-width,var(--spectrum-global-dimension-size-1700)
);--spectrum-progressbar-indeterminate-duration:var(
--spectrum-progressbar-m-indeterminate-duration,var(--spectrum-global-animation-duration-2000)
);--spectrum-fieldlabel-side-padding-right:var(
--spectrum-fieldlabel-side-m-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([size=l]){--spectrum-progressbar-label-gap-y:var(
--spectrum-progressbar-l-label-gap-y,var(--spectrum-global-dimension-size-50)
);--spectrum-progressbar-height:var(
--spectrum-progressbar-l-height,var(--spectrum-global-dimension-size-100)
);--spectrum-progressbar-border-radius:var(
--spectrum-progressbar-l-border-radius,var(--spectrum-global-dimension-size-50)
);--spectrum-progressbar-width:var(
--spectrum-progressbar-l-width,var(--spectrum-global-dimension-static-size-2500)
);--spectrum-progressbar-indeterminate-fill-width:var(
--spectrum-progressbar-l-indeterminate-fill-width,var(--spectrum-global-dimension-size-1800)
);--spectrum-progressbar-indeterminate-duration:var(
--spectrum-progressbar-l-indeterminate-duration,var(--spectrum-global-animation-duration-2000)
);--spectrum-fieldlabel-side-padding-right:var(
--spectrum-fieldlabel-side-l-padding-right,var(--spectrum-global-dimension-size-175)
)}:host([size=xl]){--spectrum-progressbar-border-radius:var(
--spectrum-progressbar-xl-border-radius
);--spectrum-progressbar-label-gap-y:var(
--spectrum-progressbar-xl-label-gap-y,var(--spectrum-global-dimension-size-50)
);--spectrum-progressbar-height:var(
--spectrum-progressbar-xl-height,var(--spectrum-global-dimension-size-125)
);--spectrum-progressbar-width:var(
--spectrum-progressbar-xl-width,var(--spectrum-global-dimension-static-size-2800)
);--spectrum-progressbar-indeterminate-fill-width:var(
--spectrum-progressbar-xl-indeterminate-fill-width,var(--spectrum-global-dimension-size-2000)
);--spectrum-progressbar-indeterminate-duration:var(
--spectrum-progressbar-xl-indeterminate-duration,var(--spectrum-global-animation-duration-2000)
);--spectrum-fieldlabel-side-padding-right:var(
--spectrum-fieldlabel-side-xl-padding-right,var(--spectrum-global-dimension-size-185)
)}:host{align-items:center;display:inline-flex;flex-flow:row wrap;justify-content:space-between;position:relative;vertical-align:top;width:var(--spectrum-progressbar-width)}.track{border-radius:var(--spectrum-progressbar-border-radius);overflow:hidden;width:100%;z-index:1}.fill,.track{height:var(--spectrum-progressbar-height)}.fill{border:none;transition:width 1s}:host([dir=ltr]) .label,:host([dir=ltr]) .percentage{text-align:left}:host([dir=rtl]) .label,:host([dir=rtl]) .percentage{text-align:right}.label,.percentage{margin-bottom:var(
--spectrum-progressbar-label-gap-y
)}.label{flex:1 1 0%}:host([dir=ltr]) .percentage{margin-left:var(
--spectrum-fieldlabel-side-padding-right
)}:host([dir=rtl]) .percentage{margin-right:var(
--spectrum-fieldlabel-side-padding-right
)}.percentage{align-self:flex-start}:host([side-label]){display:inline-flex;flex-flow:row;justify-content:space-between;width:auto}:host([side-label]) .track{flex:1 1 var(--spectrum-progressbar-width);min-width:var(
--spectrum-progressbar-width
)}:host([dir=ltr][side-label]) .label{margin-right:var(
--spectrum-fieldlabel-side-padding-right
)}:host([dir=rtl][side-label]) .label{margin-left:var(
--spectrum-fieldlabel-side-padding-right
)}:host([side-label]) .label{flex-grow:0;margin-bottom:0}:host([dir=ltr][side-label]) .percentage{text-align:right}:host([dir=rtl][side-label]) .percentage{text-align:left}:host([dir=ltr][side-label]) .percentage{margin-left:var(
--spectrum-fieldlabel-side-padding-right
)}:host([dir=rtl][side-label]) .percentage{margin-right:var(
--spectrum-fieldlabel-side-padding-right
)}:host([side-label]) .percentage{margin-bottom:0;order:3}:host([indeterminate]) .fill{animation-timing-function:var(
--spectrum-progressbar-indeterminate-animation-ease
);position:relative;width:var(
--spectrum-progressbar-indeterminate-fill-width
);will-change:transform}:host([dir=ltr][indeterminate]) .fill{animation:indeterminate-loop-ltr var(--spectrum-progressbar-indeterminate-duration) infinite}:host([dir=rtl][indeterminate]) .fill{animation:indeterminate-loop-rtl var(--spectrum-progressbar-indeterminate-duration) infinite}@keyframes indeterminate-loop-ltr{0%{transform:translate(calc(-1*var(--spectrum-progressbar-indeterminate-fill-width)))}to{transform:translate(var(--spectrum-progressbar-width))}}@keyframes indeterminate-loop-rtl{0%{transform:translate(var(--spectrum-progressbar-width))}to{transform:translate(calc(-1*var(--spectrum-progressbar-width)))}}.fill{background:var(
--spectrum-progressbar-m-track-fill-color,var(--spectrum-global-color-blue-500)
)}.track{background-color:var(
--spectrum-progressbar-m-track-color,var(--spectrum-alias-track-color-default)
)}:host([over-background]) .fill{background:var(
--spectrum-progressbar-m-over-background-track-fill-color,var(--spectrum-global-color-static-white)
)}:host([over-background]) .label,:host([over-background]) .percentage{color:var(
--spectrum-progressbar-m-over-background-track-fill-color,var(--spectrum-global-color-static-white)
)}:host([over-background]) .track{background-color:var(
--spectrum-progressbar-m-over-background-track-color,var(--spectrum-alias-track-color-over-background)
)}:host([positive]) .fill{background:var(
--spectrum-meter-positive-m-track-fill-color,var(--spectrum-semantic-positive-color-status)
)}:host(.is-notice) .fill{background:var(
--spectrum-meter-notice-m-track-fill-color,var(--spectrum-semantic-notice-color-status)
)}:host(.is-negative) .fill{background:var(
--spectrum-meter-negative-m-track-fill-color,var(--spectrum-semantic-negative-color-status)
)}.label,.percentage{color:var(
--spectrum-fieldlabel-m-text-color,var(--spectrum-alias-label-text-color)
)}.fill{transform-origin:left;width:100%}:host([dir=rtl]) .fill{transform-origin:right}`;

/**
 * @element sp-progress-bar
 */class ProgressBar extends SizedMixin(SpectrumElement){constructor(){super(...arguments);this.indeterminate=false;this.label='';this.overBackground=false;this.sideLabel=false;this.progress=0;}static get styles(){return [styles$k];}render(){return p`${this.label?p`<sp-field-label size="${this.size}" class="label">${this.label}</sp-field-label>${this.indeterminate?p``:p`<sp-field-label size="${this.size}" class="percentage">${this.progress}%</sp-field-label>`}`:p``}<div class="track"><div class="fill" style="transform:scaleX(calc(${this.progress} / 100))"></div></div>`;}firstUpdated(changes){super.firstUpdated(changes);if(!this.hasAttribute('role')){this.setAttribute('role','progressbar');}}updated(changes){super.updated(changes);if(changes.has('indeterminate')){if(this.indeterminate){this.removeAttribute('aria-valuemin');this.removeAttribute('aria-valuemax');}else {this.setAttribute('aria-valuemin','0');this.setAttribute('aria-valuemax','100');}}if(!this.indeterminate&&changes.has('progress')){this.setAttribute('aria-valuenow',''+this.progress);}else if(this.hasAttribute('aria-valuenow')){this.removeAttribute('aria-valuenow');}if(this.label&&changes.has('label')){this.setAttribute('aria-label',this.label);}}}__decorate([e({type:Boolean,reflect:true})],ProgressBar.prototype,"indeterminate",void 0);__decorate([e({type:String})],ProgressBar.prototype,"label",void 0);__decorate([e({type:Boolean,reflect:true,attribute:'over-background'})],ProgressBar.prototype,"overBackground",void 0);__decorate([e({type:Boolean,reflect:true,attribute:'side-label'})],ProgressBar.prototype,"sideLabel",void 0);__decorate([e({type:Number})],ProgressBar.prototype,"progress",void 0);

iliadCustomElementsDefine('sp-progress-bar',ProgressBar);

const styles$j=r`:host{--spectrum-progresscircle-medium-width:var(
--spectrum-global-dimension-size-400
);--spectrum-progresscircle-medium-height:var(
--spectrum-global-dimension-size-400
);--spectrum-progresscircle-small-width:var(
--spectrum-global-dimension-size-200
);--spectrum-progresscircle-small-height:var(
--spectrum-global-dimension-size-200
);--spectrum-progresscircle-large-width:var(
--spectrum-global-dimension-size-800
);--spectrum-progresscircle-large-height:var(
--spectrum-global-dimension-size-800
);--spectrum-progresscircle-large-border-size:var(
--spectrum-global-dimension-size-50
);--spectrum-progresscircle-medium-track-color:var(
--spectrum-alias-track-color-default
);--spectrum-progresscircle-medium-track-fill-color:var(
--spectrum-global-color-blue-500
);--spectrum-progresscircle-medium-over-background-track-color:var(
--spectrum-alias-track-color-over-background
);--spectrum-progresscircle-medium-over-background-track-fill-color:var(
--spectrum-global-color-static-white
)}.fill-submask-2{animation:spectrum-fill-mask-2 1s linear infinite}@keyframes spectrum-fill-mask-1{0%{transform:rotate(90deg)}1.69%{transform:rotate(72.3deg)}3.39%{transform:rotate(55.5deg)}5.08%{transform:rotate(40.3deg)}6.78%{transform:rotate(25deg)}8.47%{transform:rotate(10.6deg)}10.17%{transform:rotate(0)}11.86%{transform:rotate(0)}13.56%{transform:rotate(0)}15.25%{transform:rotate(0)}16.95%{transform:rotate(0)}18.64%{transform:rotate(0)}20.34%{transform:rotate(0)}22.03%{transform:rotate(0)}23.73%{transform:rotate(0)}25.42%{transform:rotate(0)}27.12%{transform:rotate(0)}28.81%{transform:rotate(0)}30.51%{transform:rotate(0)}32.2%{transform:rotate(0)}33.9%{transform:rotate(0)}35.59%{transform:rotate(0)}37.29%{transform:rotate(0)}38.98%{transform:rotate(0)}40.68%{transform:rotate(0)}42.37%{transform:rotate(5.3deg)}44.07%{transform:rotate(13.4deg)}45.76%{transform:rotate(20.6deg)}47.46%{transform:rotate(29deg)}49.15%{transform:rotate(36.5deg)}50.85%{transform:rotate(42.6deg)}52.54%{transform:rotate(48.8deg)}54.24%{transform:rotate(54.2deg)}55.93%{transform:rotate(59.4deg)}57.63%{transform:rotate(63.2deg)}59.32%{transform:rotate(67.2deg)}61.02%{transform:rotate(70.8deg)}62.71%{transform:rotate(73.8deg)}64.41%{transform:rotate(76.2deg)}66.1%{transform:rotate(78.7deg)}67.8%{transform:rotate(80.6deg)}69.49%{transform:rotate(82.6deg)}71.19%{transform:rotate(83.7deg)}72.88%{transform:rotate(85deg)}74.58%{transform:rotate(86.3deg)}76.27%{transform:rotate(87deg)}77.97%{transform:rotate(87.7deg)}79.66%{transform:rotate(88.3deg)}81.36%{transform:rotate(88.6deg)}83.05%{transform:rotate(89.2deg)}84.75%{transform:rotate(89.2deg)}86.44%{transform:rotate(89.5deg)}88.14%{transform:rotate(89.9deg)}89.83%{transform:rotate(89.7deg)}91.53%{transform:rotate(90.1deg)}93.22%{transform:rotate(90.2deg)}94.92%{transform:rotate(90.1deg)}96.61%{transform:rotate(90deg)}98.31%{transform:rotate(89.8deg)}to{transform:rotate(90deg)}}@keyframes spectrum-fill-mask-2{0%{transform:rotate(180deg)}1.69%{transform:rotate(180deg)}3.39%{transform:rotate(180deg)}5.08%{transform:rotate(180deg)}6.78%{transform:rotate(180deg)}8.47%{transform:rotate(180deg)}10.17%{transform:rotate(179.2deg)}11.86%{transform:rotate(164deg)}13.56%{transform:rotate(151.8deg)}15.25%{transform:rotate(140.8deg)}16.95%{transform:rotate(130.3deg)}18.64%{transform:rotate(120.4deg)}20.34%{transform:rotate(110.8deg)}22.03%{transform:rotate(101.6deg)}23.73%{transform:rotate(93.5deg)}25.42%{transform:rotate(85.4deg)}27.12%{transform:rotate(78.1deg)}28.81%{transform:rotate(71.2deg)}30.51%{transform:rotate(89.1deg)}32.2%{transform:rotate(105.5deg)}33.9%{transform:rotate(121.3deg)}35.59%{transform:rotate(135.5deg)}37.29%{transform:rotate(148.4deg)}38.98%{transform:rotate(161deg)}40.68%{transform:rotate(173.5deg)}42.37%{transform:rotate(180deg)}44.07%{transform:rotate(180deg)}45.76%{transform:rotate(180deg)}47.46%{transform:rotate(180deg)}49.15%{transform:rotate(180deg)}50.85%{transform:rotate(180deg)}52.54%{transform:rotate(180deg)}54.24%{transform:rotate(180deg)}55.93%{transform:rotate(180deg)}57.63%{transform:rotate(180deg)}59.32%{transform:rotate(180deg)}61.02%{transform:rotate(180deg)}62.71%{transform:rotate(180deg)}64.41%{transform:rotate(180deg)}66.1%{transform:rotate(180deg)}67.8%{transform:rotate(180deg)}69.49%{transform:rotate(180deg)}71.19%{transform:rotate(180deg)}72.88%{transform:rotate(180deg)}74.58%{transform:rotate(180deg)}76.27%{transform:rotate(180deg)}77.97%{transform:rotate(180deg)}79.66%{transform:rotate(180deg)}81.36%{transform:rotate(180deg)}83.05%{transform:rotate(180deg)}84.75%{transform:rotate(180deg)}86.44%{transform:rotate(180deg)}88.14%{transform:rotate(180deg)}89.83%{transform:rotate(180deg)}91.53%{transform:rotate(180deg)}93.22%{transform:rotate(180deg)}94.92%{transform:rotate(180deg)}96.61%{transform:rotate(180deg)}98.31%{transform:rotate(180deg)}to{transform:rotate(180deg)}}@keyframes spectrum-fills-rotate{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}:host{direction:ltr;display:inline-block;height:var(
--spectrum-progresscircle-medium-height,var(--spectrum-global-dimension-size-400)
);position:relative;width:var(
--spectrum-progresscircle-medium-width,var(--spectrum-global-dimension-size-400)
)}.track{border-radius:var(
--spectrum-progresscircle-medium-width,var(--spectrum-global-dimension-size-400)
);border-style:solid;border-width:var(--spectrum-progresscircle-medium-border-size);box-sizing:border-box;height:var(
--spectrum-progresscircle-medium-height,var(--spectrum-global-dimension-size-400)
);width:var(
--spectrum-progresscircle-medium-width,var(--spectrum-global-dimension-size-400)
)}:host([dir=ltr]) .fills{left:0}:host([dir=rtl]) .fills{right:0}.fills{height:100%;position:absolute;top:0;width:100%}.fill{border-radius:var(
--spectrum-progresscircle-medium-width,var(--spectrum-global-dimension-size-400)
);border-style:solid;border-width:var(--spectrum-progresscircle-medium-border-size);box-sizing:border-box;height:var(
--spectrum-progresscircle-medium-height,var(--spectrum-global-dimension-size-400)
);width:var(
--spectrum-progresscircle-medium-width,var(--spectrum-global-dimension-size-400)
)}.fillMask1,.fillMask2{height:100%;overflow:hidden;position:absolute;transform:rotate(180deg);transform-origin:100% center;width:50%}.fillSubMask1,.fillSubMask2{height:100%;overflow:hidden;transform:rotate(-180deg);transform-origin:100% center;width:100%}.fillMask2{transform:rotate(0)}:host([size=small]){height:var(
--spectrum-progresscircle-small-height,var(--spectrum-global-dimension-size-200)
);width:var(
--spectrum-progresscircle-small-width,var(--spectrum-global-dimension-size-200)
)}:host([size=small]) .track{border-radius:var(
--spectrum-progresscircle-small-width,var(--spectrum-global-dimension-size-200)
);border-style:solid;border-width:var(--spectrum-progresscircle-small-border-size);height:var(
--spectrum-progresscircle-small-height,var(--spectrum-global-dimension-size-200)
);width:var(
--spectrum-progresscircle-small-width,var(--spectrum-global-dimension-size-200)
)}:host([size=small]) .fill{border-radius:var(
--spectrum-progresscircle-small-width,var(--spectrum-global-dimension-size-200)
);border-style:solid;border-width:var(--spectrum-progresscircle-small-border-size);height:var(
--spectrum-progresscircle-small-height,var(--spectrum-global-dimension-size-200)
);width:var(
--spectrum-progresscircle-small-width,var(--spectrum-global-dimension-size-200)
)}:host([size=large]){height:var(
--spectrum-progresscircle-large-height,var(--spectrum-global-dimension-size-800)
);width:var(
--spectrum-progresscircle-large-width,var(--spectrum-global-dimension-size-800)
)}:host([size=large]) .track{border-radius:var(
--spectrum-progresscircle-large-width,var(--spectrum-global-dimension-size-800)
);border-style:solid;border-width:var(
--spectrum-progresscircle-large-border-size,var(--spectrum-global-dimension-size-50)
);height:var(
--spectrum-progresscircle-large-height,var(--spectrum-global-dimension-size-800)
);width:var(
--spectrum-progresscircle-large-width,var(--spectrum-global-dimension-size-800)
)}:host([size=large]) .fill{border-radius:var(
--spectrum-progresscircle-large-width,var(--spectrum-global-dimension-size-800)
);border-style:solid;border-width:var(
--spectrum-progresscircle-large-border-size,var(--spectrum-global-dimension-size-50)
);height:var(
--spectrum-progresscircle-large-height,var(--spectrum-global-dimension-size-800)
);width:var(
--spectrum-progresscircle-large-width,var(--spectrum-global-dimension-size-800)
)}:host([indeterminate]) .fills{animation:spectrum-fills-rotate 1s cubic-bezier(.25,.78,.48,.89) infinite;transform:translateZ(0);transform-origin:center;will-change:transform}:host([indeterminate]) .fillSubMask1{animation:spectrum-fill-mask-1 1s linear infinite;transform:translateZ(0);will-change:transform}:host([indeterminate]) .fillSubMask2{animation:spectrum-fill-mask-2 1s linear infinite;transform:translateZ(0);will-change:transform}.track{border-color:var(
--spectrum-progresscircle-medium-track-color,var(--spectrum-alias-track-color-default)
)}.fill{border-color:var(
--spectrum-progresscircle-medium-track-fill-color,var(--spectrum-global-color-blue-500)
)}:host([over-background]) .track{border-color:var(
--spectrum-progresscircle-medium-over-background-track-color,var(--spectrum-alias-track-color-over-background)
)}:host([over-background]) .fill{border-color:var(
--spectrum-progresscircle-medium-over-background-track-fill-color,var(--spectrum-global-color-static-white)
)}:host([indeterminate][over-background]) .track{border-color:var(
--spectrum-progresscircle-medium-over-background-track-color,var(--spectrum-alias-track-color-over-background)
)}:host([indeterminate][over-background]) .fill{border-color:var(
--spectrum-progresscircle-medium-over-background-track-fill-color,var(--spectrum-global-color-static-white)
)}`;

/**
 * @element sp-progress-circle
 */class ProgressCircle extends SpectrumElement{constructor(){super(...arguments);this.indeterminate=false;this.label='';this.overBackground=false;this.progress=0;this.size='';}static get styles(){return [styles$j];}makeRotation(rotation){return this.indeterminate?undefined:`transform: rotate(${rotation}deg);`;}render(){const styles=[this.makeRotation(-180+180/50*Math.min(this.progress,50)),this.makeRotation(-180+180/50*Math.max(this.progress-50,0))];const masks=['Mask1','Mask2'];return p`<div class="track"></div><div class="fills">${masks.map((mask,index)=>p`<div class="fill${mask}"><div class="fillSub${mask}" style="${l(styles[index])}"><div class="fill"></div></div></div>`)}</div>`;}firstUpdated(changes){super.firstUpdated(changes);if(!this.hasAttribute('role')){this.setAttribute('role','progressbar');}}updated(changes){super.updated(changes);if(!this.indeterminate&&changes.has('progress')){this.setAttribute('aria-valuenow',''+this.progress);}else if(this.hasAttribute('aria-valuenow')){this.removeAttribute('aria-valuenow');}if(this.label&&changes.has('label')){this.setAttribute('aria-label',this.label);}}}__decorate([e({type:Boolean,reflect:true})],ProgressCircle.prototype,"indeterminate",void 0);__decorate([e({type:String})],ProgressCircle.prototype,"label",void 0);__decorate([e({type:Boolean,reflect:true,attribute:'over-background'})],ProgressCircle.prototype,"overBackground",void 0);__decorate([e({type:Number})],ProgressCircle.prototype,"progress",void 0);__decorate([e({type:String,reflect:true})],ProgressCircle.prototype,"size",void 0);

iliadCustomElementsDefine('sp-progress-circle',ProgressCircle);

const styles$i=r`:host{--spectrum-radio-m-circle-border-size:var(
--spectrum-alias-border-size-thick
);--spectrum-radio-m-circle-dot-size:var(
--spectrum-global-dimension-static-size-50
);--spectrum-radio-m-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-radio-m-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-radio-m-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-radio-m-text-size:var(--spectrum-alias-font-size-m);--spectrum-radio-m-height:var(--spectrum-alias-control-height-m);--spectrum-radio-m-circle-diameter:var(
--spectrum-alias-item-control-2-size-m
);--spectrum-radio-m-text-gap:var(--spectrum-alias-item-control-gap-m);--spectrum-alias-focus-ring-gap:var(
--spectrum-global-dimension-static-size-25
);--spectrum-radio-m-emphasized-circle-border-color-selected-hover:var(
--spectrum-global-color-primary-500
);--spectrum-radio-m-circle-border-color-selected:var(
--spectrum-global-color-gray-700
);--spectrum-radio-m-text-color:var(--spectrum-alias-text-color-secondary);--spectrum-radio-m-circle-background-color:var(
--spectrum-global-color-gray-75
);--spectrum-radio-m-circle-border-color:var(
--spectrum-global-color-gray-600
);--spectrum-radio-m-circle-border-color-hover:var(
--spectrum-global-color-gray-700
);--spectrum-radio-m-circle-border-color-selected-hover:var(
--spectrum-global-color-gray-800
);--spectrum-radio-m-text-color-hover:var(
--spectrum-alias-text-color-primary
);--spectrum-radio-m-circle-border-color-down:var(
--spectrum-global-color-gray-800
);--spectrum-radio-m-circle-border-color-selected-down:var(
--spectrum-global-color-gray-900
);--spectrum-radio-m-text-color-down:var(
--spectrum-alias-text-color-primary
);--spectrum-radio-m-emphasized-circle-border-color-selected:var(
--spectrum-global-color-primary-500
);--spectrum-radio-m-emphasized-circle-border-color-selected-down:var(
--spectrum-global-color-primary-600
);--spectrum-radio-m-emphasized-circle-border-color-error-hover:var(
--spectrum-global-color-red-500
);--spectrum-radio-m-emphasized-text-color-error-hover:var(
--spectrum-global-color-red-400
);--spectrum-radio-m-emphasized-text-color-error-down:var(
--spectrum-global-color-red-600
);--spectrum-radio-m-emphasized-circle-border-color-error:var(
--spectrum-global-color-red-500
);--spectrum-radio-m-emphasized-text-color-error:var(
--spectrum-global-color-red-600
);--spectrum-radio-m-emphasized-circle-border-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-radio-m-emphasized-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-radio-m-circle-border-color-key-focus:var(
--spectrum-global-color-gray-700
);--spectrum-radio-m-focus-ring-size-key-focus:var(
--spectrum-alias-focus-ring-size
);--spectrum-radio-m-focus-ring-color-key-focus:var(
--spectrum-alias-focus-ring-color
);--spectrum-radio-m-emphasized-circle-border-color-selected-key-focus:var(
--spectrum-global-color-primary-500
);--spectrum-radio-button-m-height:var(--spectrum-global-dimension-size-300);--spectrum-radio-button-m-padding-x:var(
--spectrum-global-dimension-size-200
);--spectrum-radio-button-m-padding-y:calc((var(--spectrum-radio-button-m-height) - var(--spectrum-radio-m-text-size)*var(--spectrum-radio-m-text-line-height))/2);--spectrum-radio-button-m-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-radio-button-m-border-radius:var(
--spectrum-alias-border-radius-regular
);--spectrum-radio-button-m-background-color-selected:var(
--spectrum-global-color-gray-100
);--spectrum-radio-button-m-box-shadow-selected:0px 0px 2px rgba(0,0,0,.2);--spectrum-radio-button-group-m-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-radio-button-group-m-border-radius:var(
--spectrum-alias-border-radius-medium
);--spectrum-radio-button-group-m-padding-x:var(
--spectrum-global-dimension-size-50
);--spectrum-radio-button-group-m-padding-y:var(
--spectrum-global-dimension-size-50
);--spectrum-radio-button-m-icon-color:var(
--spectrum-alias-icon-color-secondary
);--spectrum-radio-button-m-icon-color-hover:var(
--spectrum-alias-icon-color-primary
);--spectrum-radio-button-m-icon-color-selected:var(
--spectrum-alias-icon-color-primary
);--spectrum-radio-button-m-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
)}:host{--spectrum-radio-circle-border-size:var(
--spectrum-radio-m-circle-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-radio-circle-dot-size:var(
--spectrum-radio-m-circle-dot-size,var(--spectrum-global-dimension-static-size-50)
);--spectrum-radio-text-font-style:var(
--spectrum-radio-m-text-font-style,var(--spectrum-global-font-style-regular)
);--spectrum-radio-text-font-weight:var(
--spectrum-radio-m-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-radio-text-line-height:var(
--spectrum-radio-m-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-radio-text-size:var(
--spectrum-radio-m-text-size,var(--spectrum-alias-item-text-size-m)
);--spectrum-radio-height:var(
--spectrum-radio-m-height,var(--spectrum-alias-item-height-m)
);--spectrum-radio-circle-diameter:var(
--spectrum-radio-m-circle-diameter,var(--spectrum-alias-item-control-2-size-m)
);--spectrum-radio-text-gap:var(
--spectrum-radio-m-text-gap,var(--spectrum-alias-item-control-gap-m)
);--spectrum-radio-radius:calc(var(--spectrum-radio-circle-diameter)/2);--spectrum-radio-border-width-checked:calc(var(--spectrum-radio-circle-diameter)/2 - var(--spectrum-radio-circle-dot-size)/2);--spectrum-radio-labelbelow-label-margin:var(
--spectrum-global-dimension-size-50
) 0 0 0;--spectrum-radio-labelbelow-height:auto;--spectrum-radio-label-margin-top:var(--spectrum-global-dimension-size-75)}:host{align-items:flex-start;display:inline-flex;max-width:100%;min-height:var(--spectrum-radio-height);position:relative;vertical-align:top}#input{box-sizing:border-box;cursor:pointer;font-family:inherit;font-size:100%;height:100%;left:0;line-height:1.15;margin:0;opacity:.0001;overflow:visible;padding:0;position:absolute;top:0;width:100%;z-index:1}:host([disabled]) #input{cursor:default}:host([checked]) #input+#button:before{border-width:var(
--spectrum-radio-border-width-checked
)}:host(.focus-visible) #input+#button:after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}:host(:focus-visible) #input+#button:after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}:host([dir=ltr]) #label{text-align:left}:host([dir=rtl]) #label{text-align:right}:host([dir=ltr]) #label{margin-left:var(
--spectrum-radio-text-gap
)}:host([dir=rtl]) #label{margin-right:var(
--spectrum-radio-text-gap
)}#label{font-size:var(--spectrum-radio-text-size);font-style:var(--spectrum-radio-text-font-style);font-weight:var(--spectrum-radio-text-font-weight);line-height:var(--spectrum-radio-text-line-height);margin-top:var(
--spectrum-radio-label-margin-top
);transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}#button{box-sizing:border-box;flex-grow:0;flex-shrink:0;height:var(--spectrum-radio-circle-diameter);margin:calc((var(--spectrum-radio-height) - var(--spectrum-radio-circle-diameter))/ 2) 0;position:relative;width:var(--spectrum-radio-circle-diameter)}#button:before{border-radius:var(--spectrum-radio-radius);border-style:solid;border-width:var(--spectrum-radio-circle-border-size);box-sizing:border-box;content:"";display:block;height:var(--spectrum-radio-circle-diameter);position:absolute;transition:border var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;width:var(--spectrum-radio-circle-diameter);z-index:0}#button:after{border-radius:100%;bottom:0;content:"";display:block;left:0;margin:var(
--spectrum-alias-focus-ring-gap,var(--spectrum-global-dimension-static-size-25)
);position:absolute;right:0;top:0;transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}:host([label-below]){align-items:center;display:inline-flex;flex-direction:column;height:var(--spectrum-radio-labelbelow-height)}:host([label-below]) #button{flex-shrink:0;margin:0}:host([label-below]) #label{margin:var(
--spectrum-radio-labelbelow-label-margin
)}:host{--spectrum-radio-m-emphasized-circle-border-color-selected-key-focus:var(
--spectrum-radio-m-emphasized-circle-border-color-selected-hover,var(--spectrum-global-color-blue-600)
)}:host([checked]) #input+#button:before{border-color:var(
--spectrum-radio-m-circle-border-color-selected,var(--spectrum-global-color-gray-700)
)}#label{color:var(
--spectrum-radio-m-text-color,var(--spectrum-alias-text-color)
)}#button:before{background-color:var(
--spectrum-radio-m-circle-background-color,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-radio-m-circle-border-color,var(--spectrum-global-color-gray-600)
);forced-color-adjust:none}:host(:hover) #button:before{border-color:var(
--spectrum-radio-m-circle-border-color-hover,var(--spectrum-global-color-gray-700)
);box-shadow:none}:host(:hover[checked]) #input+#button:before{border-color:var(
--spectrum-radio-m-circle-border-color-selected-hover,var(--spectrum-global-color-gray-800)
)}:host(:hover) #label{color:var(
--spectrum-radio-m-text-color-hover,var(--spectrum-alias-text-color-hover)
)}:host(:active) #button:before{border-color:var(
--spectrum-radio-m-circle-border-color-down,var(--spectrum-global-color-gray-800)
)}:host(:active[checked]) #input+#button:before{border-color:var(
--spectrum-radio-m-circle-border-color-selected-down,var(--spectrum-global-color-gray-900)
)}:host(:active) #label{color:var(
--spectrum-radio-m-text-color-down,var(--spectrum-alias-text-color-down)
)}:host([emphasized][checked]) #input+#button:before{border-color:var(
--spectrum-radio-m-emphasized-circle-border-color-selected,var(--spectrum-global-color-blue-500)
)}:host([emphasized][checked]:hover) #input+#button:before{border-color:var(
--spectrum-radio-m-emphasized-circle-border-color-selected-hover,var(--spectrum-global-color-blue-600)
)}:host([emphasized][checked]:active) #input+#button:before{border-color:var(
--spectrum-radio-m-emphasized-circle-border-color-selected-down,var(--spectrum-global-color-blue-700)
)}:host([emphasized][invalid]:hover) #input+#button:before,:host([invalid]:hover) #input+#button:before{border-color:var(
--spectrum-radio-m-emphasized-circle-border-color-error-hover,var(--spectrum-global-color-red-600)
)}:host([emphasized][invalid]:hover) #label,:host([invalid]:hover) #label{color:var(
--spectrum-radio-m-emphasized-text-color-error-hover,var(--spectrum-global-color-red-700)
)}:host([emphasized][invalid]:active) #input+#button:before,:host([invalid]:active) #input+#button:before{border-color:var(
--spectrum-radio-m-emphasized-text-color-error-hover,var(--spectrum-global-color-red-700)
)}:host([emphasized][invalid]:active) #label,:host([invalid]:active) #label{color:var(
--spectrum-radio-m-emphasized-text-color-error-down,var(--spectrum-global-color-red-700)
)}:host([emphasized][invalid]) #button:before,:host([emphasized][invalid][checked]) #input+#button:before,:host([invalid]) #button:before,:host([invalid][checked]) #input+#button:before{border-color:var(
--spectrum-radio-m-emphasized-circle-border-color-error,var(--spectrum-global-color-red-500)
)}:host([emphasized][invalid]) #label,:host([invalid]) #label{color:var(
--spectrum-radio-m-emphasized-text-color-error,var(--spectrum-global-color-red-600)
)}:host([checked][disabled]) #input+#button:before,:host([disabled]) #input+#button:before{border-color:var(
--spectrum-radio-m-emphasized-circle-border-color-disabled,var(--spectrum-global-color-gray-400)
)}:host([checked][disabled]) #input~#label,:host([disabled]) #input~#label{color:var(
--spectrum-radio-m-emphasized-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host(.focus-visible) #input+#button:before,:host(:hover.focus-visible) #input+#button:before,:host([emphasized].focus-visible) #input+#button:before,:host([emphasized]:hover.focus-visible) #input+#button:before{border-color:var(
--spectrum-radio-m-circle-border-color-key-focus,var(--spectrum-global-color-gray-700)
)}:host(:focus-visible) #input+#button:before,:host(:hover:focus-visible) #input+#button:before,:host([emphasized]:focus-visible) #input+#button:before,:host([emphasized]:hover:focus-visible) #input+#button:before{border-color:var(
--spectrum-radio-m-circle-border-color-key-focus,var(--spectrum-global-color-gray-700)
)}:host(.focus-visible) #input+#button:after,:host(:hover.focus-visible) #input+#button:after,:host([emphasized].focus-visible) #input+#button:after,:host([emphasized]:hover.focus-visible) #input+#button:after{box-shadow:0 0 0 var(
--spectrum-radio-m-focus-ring-size-key-focus,var(--spectrum-alias-focus-ring-size)
) var(
--spectrum-radio-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
);forced-color-adjust:none}:host(:focus-visible) #input+#button:after,:host(:hover:focus-visible) #input+#button:after,:host([emphasized]:focus-visible) #input+#button:after,:host([emphasized]:hover:focus-visible) #input+#button:after{box-shadow:0 0 0 var(
--spectrum-radio-m-focus-ring-size-key-focus,var(--spectrum-alias-focus-ring-size)
) var(
--spectrum-radio-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
);forced-color-adjust:none}:host(.focus-visible[checked]) #input+#button:before,:host(:hover.focus-visible[checked]) #input+#button:before,:host([emphasized][checked].focus-visible) #input+#button:before,:host([emphasized][checked]:hover.focus-visible) #input+#button:before{border-color:var(
--spectrum-radio-m-emphasized-circle-border-color-selected-key-focus,var(--spectrum-global-color-blue-600)
)}:host(:focus-visible[checked]) #input+#button:before,:host(:hover:focus-visible[checked]) #input+#button:before,:host([emphasized][checked]:focus-visible) #input+#button:before,:host([emphasized][checked]:hover:focus-visible) #input+#button:before{border-color:var(
--spectrum-radio-m-emphasized-circle-border-color-selected-key-focus,var(--spectrum-global-color-blue-600)
)}@media (forced-colors:active){:host{--spectrum-radio-m-circle-background-color:ButtonFace;--spectrum-radio-m-circle-border-color-down:Highlight;--spectrum-radio-m-circle-border-color-hover:Highlight;--spectrum-radio-m-circle-border-color-key-focus:Highlight;--spectrum-radio-m-circle-border-color-selected-down:Highlight;--spectrum-radio-m-circle-border-color-selected-hover:Highlight;--spectrum-radio-m-circle-border-color-selected:Highlight;--spectrum-radio-m-circle-border-color:ButtonText;--spectrum-radio-m-emphasized-circle-border-color-disabled:GrayText;--spectrum-radio-m-emphasized-circle-border-color-error-hover:Highlight;--spectrum-radio-m-emphasized-circle-border-color-error:ButtonText;--spectrum-radio-m-emphasized-circle-border-color-selected-down:Highlight;--spectrum-radio-m-emphasized-circle-border-color-selected-hover:Highlight;--spectrum-radio-m-emphasized-circle-border-color-selected-key-focus:Highlight;--spectrum-radio-m-emphasized-circle-border-color-selected:Highlight;--spectrum-radio-m-emphasized-text-color-disabled:GrayText;--spectrum-radio-m-emphasized-text-color-error-down:CanvasText;--spectrum-radio-m-emphasized-text-color-error-hover:CanvasText;--spectrum-radio-m-emphasized-text-color-error:CanvasText;--spectrum-radio-m-focus-ring-color-key-focus:CanvasText;--spectrum-radio-m-text-color-down:CanvasText;--spectrum-radio-m-text-color-hover:CanvasText;--spectrum-radio-m-text-color:CanvasText}:host([invalid][checked]) #input+#button:before{border-color:var(
--spectrum-radio-m-circle-border-color-selected,var(--spectrum-global-color-gray-700)
)}}:host([type=button]){background-color:var(--spectrum-radio-button-m-background-color);border-radius:var(--spectrum-radio-button-m-border-radius);box-sizing:border-box;height:var(--spectrum-radio-button-m-height);min-height:var(--spectrum-radio-button-m-height);padding:var(--spectrum-radio-button-m-padding-y) var(--spectrum-radio-button-m-padding-x);transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out}:host([type=button][checked]){background-color:var(--spectrum-radio-button-m-background-color-selected);box-shadow:var(--spectrum-radio-button-m-box-shadow-selected)}:host([type=button]) #label{margin:0}:host ::slotted([slot=icon]){color:var(--spectrum-radio-button-m-icon-color);flex-shrink:0;max-height:100%}:host(:hover) ::slotted([slot=icon]){color:var(--spectrum-radio-button-m-icon-color-hover)}:host([disabled]) ::slotted([slot=icon]){color:var(--spectrum-radio-button-m-icon-color-disabled)}:host([checked]) ::slotted([slot=icon]){color:var(--spectrum-radio-button-m-icon-color-selected)}:host{--spectrum-radio-label-margin-top:var(
--spectrum-global-dimension-size-75,6px
)}:host(:focus){outline:0}:host([disabled]){pointer-events:none}`;

var RatioType;(function(RatioType){RatioType["button"]="button";RatioType["default"]="default";})(RatioType||(RatioType={}));/**
 * @element sp-radio
 *
 * @slot - text label of the Radio button
 * @slot icon - icon element(s) to display at the start of the button
 * @attr label-below - Moves the label below the radio button
 * @attr invalid - Uses the invalid style
 * @attr disabled - Uses the disabled style
 * @attr checked - Represents when the input is checked
 * @attr value - Identifies this radio button within its radio group
 *
 * @event sp-radio:change - When the input is interacted with and its state is changed
 */class Radio extends ObserveSlotText(ObserveSlotPresence(FocusVisiblePolyfillMixin(SpectrumElement),'[slot="icon"]')){constructor(){super(...arguments);/**
         * When this control is rendered, focus it automatically
         * @private
         */this.autofocus=false;this.value='';this.checked=false;this.disabled=false;this.emphasized=false;this.invalid=false;this.readonly=false;}static get styles(){return [styles$i];}get hasIcon(){return this.slotContentIsPresent;}get hasLabel(){return this.slotHasContent;}click(){if(this.disabled){return;}this.activate();}manageAutoFocus(){if(this.autofocus){/**
             * Trick :focus-visible polyfill into thinking keyboard based focus
             *
             * @private
             **/this.dispatchEvent(new KeyboardEvent('keydown',{code:'Tab'}));this.focus();}}handleChange(event){event.stopPropagation();if(this.readonly){this.inputElement.checked=this.checked;return;}this.checked=this.inputElement.checked;this.dispatchEvent(new Event('change',{bubbles:true,composed:true}));}activate(){this.checked=true;this.dispatchEvent(new Event('change',{bubbles:true,composed:true}));}handleKeyup(event){if(event.code==='Space'){this.activate();}}renderDefault(){return p`<div id="input"></div><span id="button"></span> <span id="label" role="presentation"><slot></slot></span>`;}renderButton(){const content=[p`<span id="label" role="presentation"><slot></slot></span>`];if(this.hasIcon){content.unshift(p`<slot name="icon" ?icon-only="${!this.hasLabel}"></slot>`);}return p`<div id="input"></div>${content}`;}render(){return this.type===RatioType.button?this.renderButton():this.renderDefault();}firstUpdated(changes){super.firstUpdated(changes);this.setAttribute('role','radio');if(!this.hasAttribute('tabindex')){this.tabIndex=0;}this.manageAutoFocus();this.addEventListener('click',this.activate);this.addEventListener('keyup',this.handleKeyup);}updated(changes){super.updated(changes);if(changes.has('invalid')){if(this.invalid){this.setAttribute('aria-invalid','true');}else {this.removeAttribute('aria-invalid');}}if(changes.has('checked')){if(this.checked){this.setAttribute('aria-checked','true');}else {this.setAttribute('aria-checked','false');}}if(changes.has('disabled')){if(this.disabled){this.setAttribute('aria-disabled','true');}else {this.removeAttribute('aria-disabeld');}}}}__decorate([e({type:Boolean})],Radio.prototype,"autofocus",void 0);__decorate([e({type:String,reflect:true})],Radio.prototype,"value",void 0);__decorate([e({type:Boolean,reflect:true})],Radio.prototype,"checked",void 0);__decorate([e({type:Boolean,reflect:true})],Radio.prototype,"disabled",void 0);__decorate([e({type:Boolean,reflect:true})],Radio.prototype,"emphasized",void 0);__decorate([e({type:Boolean,reflect:true})],Radio.prototype,"invalid",void 0);__decorate([e({type:Boolean,reflect:true})],Radio.prototype,"readonly",void 0);__decorate([e({type:String,reflect:true})],Radio.prototype,"type",void 0);__decorate([i('#input')],Radio.prototype,"inputElement",void 0);

iliadCustomElementsDefine('sp-radio',Radio);

const styles$h=r`:host{--spectrum-radio-m-circle-border-size:var(
--spectrum-alias-border-size-thick
);--spectrum-radio-m-circle-dot-size:var(
--spectrum-global-dimension-static-size-50
);--spectrum-radio-m-text-font-style:var(
--spectrum-global-font-style-regular
);--spectrum-radio-m-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-radio-m-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-radio-m-text-size:var(--spectrum-alias-font-size-m);--spectrum-radio-m-height:var(--spectrum-alias-control-height-m);--spectrum-radio-m-circle-diameter:var(
--spectrum-alias-item-control-2-size-m
);--spectrum-radio-m-text-gap:var(--spectrum-alias-item-control-gap-m);--spectrum-alias-focus-ring-gap:var(
--spectrum-global-dimension-static-size-25
);--spectrum-radio-m-emphasized-circle-border-color-selected-hover:var(
--spectrum-global-color-primary-500
);--spectrum-radio-m-circle-border-color-selected:var(
--spectrum-global-color-gray-700
);--spectrum-radio-m-text-color:var(--spectrum-alias-text-color-secondary);--spectrum-radio-m-circle-background-color:var(
--spectrum-global-color-gray-75
);--spectrum-radio-m-circle-border-color:var(
--spectrum-global-color-gray-600
);--spectrum-radio-m-circle-border-color-hover:var(
--spectrum-global-color-gray-700
);--spectrum-radio-m-circle-border-color-selected-hover:var(
--spectrum-global-color-gray-800
);--spectrum-radio-m-text-color-hover:var(
--spectrum-alias-text-color-primary
);--spectrum-radio-m-circle-border-color-down:var(
--spectrum-global-color-gray-800
);--spectrum-radio-m-circle-border-color-selected-down:var(
--spectrum-global-color-gray-900
);--spectrum-radio-m-text-color-down:var(
--spectrum-alias-text-color-primary
);--spectrum-radio-m-emphasized-circle-border-color-selected:var(
--spectrum-global-color-primary-500
);--spectrum-radio-m-emphasized-circle-border-color-selected-down:var(
--spectrum-global-color-primary-600
);--spectrum-radio-m-emphasized-circle-border-color-error-hover:var(
--spectrum-global-color-red-500
);--spectrum-radio-m-emphasized-text-color-error-hover:var(
--spectrum-global-color-red-400
);--spectrum-radio-m-emphasized-text-color-error-down:var(
--spectrum-global-color-red-600
);--spectrum-radio-m-emphasized-circle-border-color-error:var(
--spectrum-global-color-red-500
);--spectrum-radio-m-emphasized-text-color-error:var(
--spectrum-global-color-red-600
);--spectrum-radio-m-emphasized-circle-border-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-radio-m-emphasized-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-radio-m-circle-border-color-key-focus:var(
--spectrum-global-color-gray-700
);--spectrum-radio-m-focus-ring-size-key-focus:var(
--spectrum-alias-focus-ring-size
);--spectrum-radio-m-focus-ring-color-key-focus:var(
--spectrum-alias-focus-ring-color
);--spectrum-radio-m-emphasized-circle-border-color-selected-key-focus:var(
--spectrum-global-color-primary-500
);--spectrum-radio-button-m-height:var(--spectrum-global-dimension-size-300);--spectrum-radio-button-m-padding-x:var(
--spectrum-global-dimension-size-200
);--spectrum-radio-button-m-padding-y:calc((var(--spectrum-radio-button-m-height) - var(--spectrum-radio-m-text-size)*var(--spectrum-radio-m-text-line-height))/2);--spectrum-radio-button-m-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-radio-button-m-border-radius:var(
--spectrum-alias-border-radius-regular
);--spectrum-radio-button-m-background-color-selected:var(
--spectrum-global-color-gray-100
);--spectrum-radio-button-m-box-shadow-selected:0px 0px 2px rgba(0,0,0,.2);--spectrum-radio-button-group-m-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-radio-button-group-m-border-radius:var(
--spectrum-alias-border-radius-medium
);--spectrum-radio-button-group-m-padding-x:var(
--spectrum-global-dimension-size-50
);--spectrum-radio-button-group-m-padding-y:var(
--spectrum-global-dimension-size-50
);--spectrum-radio-button-m-icon-color:var(
--spectrum-alias-icon-color-secondary
);--spectrum-radio-button-m-icon-color-hover:var(
--spectrum-alias-icon-color-primary
);--spectrum-radio-button-m-icon-color-selected:var(
--spectrum-alias-icon-color-primary
);--spectrum-radio-button-m-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
)}:host{display:inline-block}:host([type=button]){background-color:var(--spectrum-radio-button-group-m-background-color);border-radius:var(--spectrum-radio-button-group-m-border-radius);padding:var(--spectrum-radio-button-group-m-padding-y) var(--spectrum-radio-button-group-m-padding-x)}`;

/**
 * @element sp-radio-group
 *
 * @slot - The `sp-radio` elements to display/manage in the group.
 */class RadioGroup extends FocusVisiblePolyfillMixin(FieldGroup){constructor(){super();this.name='';this.label='';this.handleFocusin=()=>{this.addEventListener('focusout',this.handleFocusout);this.addEventListener('keydown',this.handleKeydown);requestAnimationFrame(()=>{const firstButtonWithTabIndex=this.buttons.find(button=>button.tabIndex===0);if(firstButtonWithTabIndex){firstButtonWithTabIndex.tabIndex=-1;}});};this.handleKeydown=event=>{const{code}=event;const activeElement=this.getRootNode().activeElement;/* c8 ignore next 3 */if(!activeElement){return;}let nextIndex=this.buttons.indexOf(activeElement);/* c8 ignore next 3 */if(nextIndex===-1){return;}const circularIndexedElement=(list,index)=>list[(list.length+index)%list.length];const buttonFromDelta=delta=>{nextIndex+=delta;while(circularIndexedElement(this.buttons,nextIndex).disabled){nextIndex+=delta;}};switch(code){case'ArrowUp':buttonFromDelta(-1);break;case'ArrowLeft':buttonFromDelta(this.isLTR?-1:1);break;case'ArrowRight':buttonFromDelta(this.isLTR?1:-1);break;case'ArrowDown':buttonFromDelta(1);break;case'End':nextIndex=this.buttons.length;buttonFromDelta(-1);break;case'Home':nextIndex=-1;buttonFromDelta(1);break;case'PageUp':case'PageDown':const tagsSiblings=[...this.getRootNode().querySelectorAll('sp-radio-group')];if(tagsSiblings.length<2){return;}event.preventDefault();const currentIndex=tagsSiblings.indexOf(this);const offset=code==='PageUp'?-1:1;let nextRadioGroupIndex=currentIndex+offset;let nextRadioGroup=circularIndexedElement(tagsSiblings,nextRadioGroupIndex);while(!nextRadioGroup.buttons.length){nextRadioGroupIndex+=offset;nextRadioGroup=circularIndexedElement(tagsSiblings,nextRadioGroupIndex);}nextRadioGroup.focus();return;default:return;}event.preventDefault();const nextRadio=circularIndexedElement(this.buttons,nextIndex);this._setSelected(nextRadio.value);nextRadio.focus();};this.handleFocusout=event=>{const nextActiveElement=event.relatedTarget;if(nextActiveElement&&this.contains(nextActiveElement)){return;}const firstButtonNonDisabled=this.buttons.find(button=>{if(this.selected){return button.checked;}return !button.disabled;});if(firstButtonNonDisabled){firstButtonNonDisabled.tabIndex=0;}this.removeEventListener('keydown',this.handleKeydown);this.removeEventListener('focusout',this.handleFocusout);};this.selected='';this.addEventListener('focusin',this.handleFocusin);}static get styles(){return [styles$h];}get buttons(){return this.defaultNodes.filter(node=>node instanceof Radio);}focus(){if(!this.buttons.length){return;}const firstButtonNonDisabled=this.buttons.find(button=>{if(this.selected){return button.checked;}return !button.disabled;});if(firstButtonNonDisabled){firstButtonNonDisabled.focus();}}_setSelected(value){if(value===this.selected){return;}const oldValue=this.selected;const radio=value?this.querySelector(`sp-radio[value="${value}"]`):undefined;// If no matching radio, selected is reset to empty string
this.selected=radio?value:'';const applyDefault=this.dispatchEvent(new Event('change',{cancelable:true,bubbles:true,composed:true}));if(!applyDefault){this.selected=oldValue;return;}this.validateRadios();}render(){return p`<slot></slot>`;}firstUpdated(changes){super.firstUpdated(changes);this.setAttribute('role','radiogroup');const checkedRadio=this.querySelector('sp-radio[checked]');const checkedRadioValue=checkedRadio?checkedRadio.value:'';// Prefer the checked item over the selected value
this.selected=checkedRadioValue||this.selected;// Validate the selected value is actual a radio option
if(this.selected&&this.selected!==checkedRadioValue){const selectedRadio=this.querySelector(`sp-radio[value="${this.selected}"]`);if(!selectedRadio){this.selected='';}else {selectedRadio.checked=true;}}this.addEventListener('change',event=>{if(event.target===this){return;}event.stopPropagation();const target=event.target;this._setSelected(target.value);});this.buttons.map((button,index)=>{const focusable=this.selected?!button.disabled&&button.value===this.selected?'0':'-1':!button.disabled&&index===0?'0':'-1';button.setAttribute('tabindex',focusable);});}updated(changes){super.updated(changes);if(changes.has('selected')){this.validateRadios();}if(changes.has('label')){if(this.label){this.setAttribute('aria-label',this.label);}else {this.removeAttribute('aria-label');}}}validateRadios(){let validSelection=false;this.buttons.map(button=>{button.checked=this.selected===button.value;validSelection=validSelection||button.checked;});if(!validSelection){this.selected='';}}}__decorate([e({type:String})],RadioGroup.prototype,"name",void 0);__decorate([e({type:String,reflect:true})],RadioGroup.prototype,"type",void 0);__decorate([o('')],RadioGroup.prototype,"defaultNodes",void 0);__decorate([e()],RadioGroup.prototype,"label",void 0);__decorate([e({reflect:true})],RadioGroup.prototype,"selected",void 0);

iliadCustomElementsDefine('sp-radio-group',RadioGroup);

iliadCustomElementsDefine('sp-sidenav-heading',SideNavHeading);

const defaultNormalization={toNormalized(value,min,max){return (value-min)/(max-min);},fromNormalized(value,min,max){return value*(max-min)+min;}};const MinConverter={fromAttribute:value=>{if(value==='previous')return value;return parseFloat(value);},toAttribute:value=>{return value.toString();}};const MaxConverter={fromAttribute:value=>{if(value==='next')return value;return parseFloat(value);},toAttribute:value=>{return value.toString();}};/**
 * @element sp-slider-handle
 */class SliderHandle extends Focusable{constructor(){super(...arguments);this._forcedUnit='';this.value=10;this.dragging=false;this.highlight=false;this.name='';this.resolvedLanguage=document.documentElement.lang||navigator.language;this.label='';this.getAriaHandleText=(value,numberFormat)=>{return numberFormat.format(value);};this.normalization=defaultNormalization;}get handleName(){return this.name;}get focusElement(){var _a,_b;/* c8 ignore next */return (_b=(_a=this.handleController)===null||_a===void 0?void 0:_a.inputForHandle(this))!==null&&_b!==void 0?_b:this;}update(changes){if(changes.has('formatOptions')||changes.has('resolvedLanguage')){delete this._numberFormatCache;}super.update(changes);}updated(changedProperties){var _a,_b;if(changedProperties.has('value')){const oldValue=changedProperties.get('value');if(oldValue!=null){(_a=this.handleController/* c8 ignore next */)===null||_a===void 0?void 0:_a.setValueFromHandle(this);}}(_b=this.handleController)===null||_b===void 0?void 0:_b.handleHasChanged(this);super.updated(changedProperties);}dispatchInputEvent(){const inputEvent=new Event('input',{bubbles:true,composed:true});this.dispatchEvent(inputEvent);}getNumberFormat(){var _a;/* c8 ignore next */if(!this._numberFormatCache||this.resolvedLanguage!==this._numberFormatCache.language){let numberFormatter;try{numberFormatter=new NumberFormatter(this.resolvedLanguage,this.formatOptions);this._forcedUnit='';// numberFormatter.format(1);
}catch(error){const _b=this.formatOptions||{},{style,unit,// eslint-disable-next-line @typescript-eslint/no-unused-vars
unitDisplay}=_b,formatOptionsNoUnit=__rest(_b,["style","unit","unitDisplay"]);if(style==='unit'){this._forcedUnit=unit;}numberFormatter=new NumberFormatter(this.resolvedLanguage,formatOptionsNoUnit);}this._numberFormatCache={language:this.resolvedLanguage,numberFormat:numberFormatter};}/* c8 ignore next */return (_a=this._numberFormatCache)===null||_a===void 0?void 0:_a.numberFormat;}get numberFormat(){if(!this.formatOptions)return;return this.getNumberFormat();}connectedCallback(){super.connectedCallback();this.resolveLanguage();}disconnectedCallback(){this.resolveLanguage();super.disconnectedCallback();}resolveLanguage(){const queryThemeEvent=new CustomEvent('sp-language-context',{bubbles:true,composed:true,detail:{callback:lang=>{this.resolvedLanguage=lang;}},cancelable:true});this.dispatchEvent(queryThemeEvent);}}__decorate([e({type:Number})],SliderHandle.prototype,"value",void 0);__decorate([e({type:Boolean,reflect:true})],SliderHandle.prototype,"dragging",void 0);__decorate([e({type:Boolean})],SliderHandle.prototype,"highlight",void 0);__decorate([e({type:String})],SliderHandle.prototype,"name",void 0);__decorate([e({reflect:true,converter:MinConverter})],SliderHandle.prototype,"min",void 0);__decorate([e({reflect:true,converter:MaxConverter})],SliderHandle.prototype,"max",void 0);__decorate([e({attribute:false})],SliderHandle.prototype,"resolvedLanguage",void 0);__decorate([e({type:Number,reflect:true})],SliderHandle.prototype,"step",void 0);__decorate([e({type:Object,attribute:'format-options'})],SliderHandle.prototype,"formatOptions",void 0);__decorate([e({type:String})],SliderHandle.prototype,"label",void 0);__decorate([e({attribute:false})],SliderHandle.prototype,"getAriaHandleText",void 0);__decorate([e({attribute:false})],SliderHandle.prototype,"normalization",void 0);

iliadCustomElementsDefine('sp-slider-handle',SliderHandle);

const styles$g=r`:host{--spectrum-slider-m-handle-border-size:var(
--spectrum-alias-border-size-thick
);--spectrum-slider-m-handle-border-size-down:var(
--spectrum-global-dimension-size-75
);--spectrum-slider-m-track-border-radius:var(
--spectrum-global-dimension-static-size-10
);--spectrum-slider-m-track-height:var(--spectrum-alias-border-size-thick);--spectrum-slider-m-handle-gap:var(--spectrum-alias-border-size-thicker);--spectrum-slider-m-animation-duration:var(
--spectrum-global-animation-duration-100
);--spectrum-slider-m-height:var(--spectrum-alias-item-height-m);--spectrum-slider-m-min-width:var(--spectrum-global-dimension-size-1250);--spectrum-slider-m-handle-width:var(
--spectrum-alias-item-control-2-size-l
);--spectrum-slider-m-handle-height:var(
--spectrum-alias-item-control-2-size-l
);--spectrum-slider-m-handle-border-radius:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-m-label-gap-x:var(--spectrum-alias-item-control-gap-m);--spectrum-slider-tick-m-mark-width:var(
--spectrum-alias-border-size-thick
);--spectrum-slider-tick-m-mark-border-radius:var(
--spectrum-alias-border-radius-xsmall
);--spectrum-slider-tick-m-mark-height:var(
--spectrum-global-dimension-size-125
);--spectrum-slider-ramp-track-height:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-focus-ring-gap:var(
--spectrum-global-dimension-static-size-25
);--spectrum-fieldlabel-m-padding-top:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-focus-ring-size:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-focus-color:var(--spectrum-global-color-blue-400);--spectrum-alias-label-text-color:var(--spectrum-global-color-gray-700);--spectrum-alias-text-color-disabled:var(--spectrum-global-color-gray-500);--spectrum-slider-m-track-color:var(--spectrum-global-color-gray-400);--spectrum-slider-m-track-fill-color:var(--spectrum-global-color-gray-700);--spectrum-slider-m-handle-border-color:var(
--spectrum-global-color-gray-700
);--spectrum-slider-m-handle-background-color:var(
--spectrum-alias-background-color-transparent
);--spectrum-slider-m-handle-border-color-hover:var(
--spectrum-global-color-gray-800
);--spectrum-slider-m-focus-ring-size-key-focus:var(
--spectrum-alias-focus-ring-size
);--spectrum-slider-m-handle-border-color-down:var(
--spectrum-global-color-gray-800
);--spectrum-alias-background-color-default:var(
--spectrum-global-color-gray-100
);--spectrum-slider-tick-m-mark-color:var(
--spectrum-alias-track-color-default
);--spectrum-slider-m-handle-background-color-down:var(
--spectrum-alias-background-color-transparent
);--spectrum-slider-m-handle-border-color-disabled:var(
--spectrum-global-color-gray-400
);--spectrum-slider-m-track-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-slider-m-track-fill-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-slider-ramp-track-color-disabled:var(
--spectrum-global-color-gray-200
)}:host{--spectrum-slider-handle-border-size:var(
--spectrum-slider-m-handle-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-slider-handle-border-size-down:var(
--spectrum-slider-m-handle-border-size-down,var(--spectrum-global-dimension-size-75)
);--spectrum-slider-track-border-radius:var(
--spectrum-slider-m-track-border-radius,var(--spectrum-global-dimension-static-size-10)
);--spectrum-slider-track-height:var(
--spectrum-slider-m-track-height,var(--spectrum-alias-border-size-thick)
);--spectrum-slider-handle-gap:var(
--spectrum-slider-m-handle-gap,var(--spectrum-alias-border-size-thicker)
);--spectrum-slider-animation-duration:var(
--spectrum-slider-m-animation-duration,var(--spectrum-global-animation-duration-100)
);--spectrum-slider-height:var(
--spectrum-slider-m-height,var(--spectrum-alias-item-height-m)
);--spectrum-slider-min-width:var(
--spectrum-slider-m-min-width,var(--spectrum-global-dimension-size-1250)
);--spectrum-slider-handle-width:var(
--spectrum-slider-m-handle-width,var(--spectrum-alias-item-control-2-size-l)
);--spectrum-slider-handle-height:var(
--spectrum-slider-m-handle-height,var(--spectrum-alias-item-control-2-size-l)
);--spectrum-slider-handle-border-radius:var(
--spectrum-slider-m-handle-border-radius,var(--spectrum-global-dimension-size-100)
);--spectrum-slider-label-gap-x:var(
--spectrum-slider-m-label-gap-x,var(--spectrum-alias-item-control-gap-m)
);--spectrum-slider-tick-mark-width:var(
--spectrum-slider-tick-m-mark-width,var(--spectrum-alias-border-size-thick)
);--spectrum-slider-tick-mark-border-radius:var(
--spectrum-slider-tick-m-mark-border-radius,var(--spectrum-alias-border-radius-xsmall)
);--spectrum-slider-tick-mark-height:var(
--spectrum-slider-tick-m-mark-height,var(--spectrum-global-dimension-size-125)
);--spectrum-slider-label-gap-y:var(--spectrum-global-dimension-size-85);--spectrum-slider-controls-margin:calc(var(--spectrum-slider-handle-width)/2);--spectrum-slider-track-margin-offset:calc(var(--spectrum-slider-controls-margin)*-1);--spectrum-slider-handle-margin-top:calc(var(--spectrum-slider-handle-width)/-2);--spectrum-slider-handle-margin-left:calc(var(--spectrum-slider-handle-width)/-2);--spectrum-slider-track-handleoffset:var(--spectrum-slider-handle-gap);--spectrum-slider-track-middle-handleoffset:calc(var(--spectrum-slider-handle-gap) + var(--spectrum-slider-handle-width)/2);--spectrum-slider-input-top:calc(var(--spectrum-slider-handle-margin-top)/4);--spectrum-slider-input-left:calc(var(--spectrum-slider-handle-margin-left)/4);--spectrum-slider-ramp-margin-top:0;--spectrum-slider-range-track-reset:0;--spectrum-slide-label-text-size:var(
--spectrum-global-dimension-font-size-75
);--spectrum-slide-label-text-line-height:var(
--spectrum-global-font-line-height-small,1.3
)}:host{display:block;min-height:var(--spectrum-slider-height);min-width:var(--spectrum-slider-min-width);position:relative;-webkit-user-select:none;user-select:none;z-index:1}:host([dir=ltr]) #controls{margin-left:var(
--spectrum-slider-controls-margin
)}:host([dir=rtl]) #controls{margin-right:var(
--spectrum-slider-controls-margin
)}#controls{box-sizing:border-box;display:inline-block;min-height:var(--spectrum-slider-height);position:relative;vertical-align:top;width:calc(100% - var(--spectrum-slider-controls-margin)*2);z-index:auto}:host([dir=ltr]) #fill,:host([dir=ltr]) .track{left:0}:host([dir=rtl]) #fill,:host([dir=rtl]) .track{right:0}:host([dir=ltr]) #fill,:host([dir=ltr]) .track{right:auto}:host([dir=rtl]) #fill,:host([dir=rtl]) .track{left:auto}#fill,.track{box-sizing:border-box;height:var(
--spectrum-slider-track-height
);margin-top:calc(var(--spectrum-slider-track-height)/-2);pointer-events:none;position:absolute;top:calc(var(--spectrum-slider-height)/2);z-index:1}:host([dir=ltr]) #fill,:host([dir=ltr]) .track{padding-left:0;padding-right:var(--spectrum-slider-track-handleoffset)}:host([dir=rtl]) #fill,:host([dir=rtl]) .track{padding-left:var(--spectrum-slider-track-handleoffset);padding-right:0}:host([dir=ltr]) #fill,:host([dir=ltr]) .track{margin-left:var(
--spectrum-slider-track-margin-offset
)}:host([dir=rtl]) #fill,:host([dir=rtl]) .track{margin-right:var(
--spectrum-slider-track-margin-offset
)}#fill,.track{padding-bottom:0;padding-top:0}#fill:before,.track:before{border-radius:var(--spectrum-slider-track-border-radius);content:"";display:block;height:100%}:host([dir=ltr]) #fill{margin-left:0}:host([dir=rtl]) #fill{margin-right:0}:host([dir=ltr]) #fill{padding-left:calc(var(--spectrum-slider-controls-margin) + var(--spectrum-slider-track-handleoffset));padding-right:0}:host([dir=rtl]) #fill{padding-left:0;padding-right:calc(var(--spectrum-slider-controls-margin) + var(--spectrum-slider-track-handleoffset))}#fill{padding-bottom:0;padding-top:0}:host([dir=ltr]) .spectrum-Slider-fill--right{padding-left:0;padding-right:calc(var(--spectrum-slider-controls-margin) + var(--spectrum-slider-track-handleoffset))}:host([dir=rtl]) .spectrum-Slider-fill--right{padding-left:calc(var(--spectrum-slider-controls-margin) + var(--spectrum-slider-track-handleoffset));padding-right:0}.spectrum-Slider-fill--right{padding-bottom:0;padding-top:0}:host([dir=ltr]) .track~.track{left:auto}:host([dir=rtl]) .track~.track{right:auto}:host([dir=ltr]) .track~.track{right:var(
--spectrum-slider-range-track-reset
)}:host([dir=rtl]) .track~.track{left:var(
--spectrum-slider-range-track-reset
)}:host([dir=ltr]) .track~.track{padding-left:var(
--spectrum-slider-track-handleoffset
);padding-right:0}:host([dir=rtl]) .track~.track{padding-left:0;padding-right:var(
--spectrum-slider-track-handleoffset
)}:host([dir=ltr]) .track~.track{margin-left:var(
--spectrum-slider-range-track-reset
)}:host([dir=rtl]) .track~.track{margin-right:var(
--spectrum-slider-range-track-reset
)}:host([dir=ltr]) .track~.track{margin-right:var(
--spectrum-slider-track-margin-offset
)}:host([dir=rtl]) .track~.track{margin-left:var(
--spectrum-slider-track-margin-offset
)}.track~.track{padding-bottom:0;padding-top:0}:host([variant=range]) #value{-webkit-user-select:text;user-select:text}:host([dir=ltr][variant=range]) .track:first-of-type{padding-left:0;padding-right:var(--spectrum-slider-track-handleoffset)}:host([dir=rtl][variant=range]) .track:first-of-type{padding-left:var(--spectrum-slider-track-handleoffset);padding-right:0}:host([dir=ltr][variant=range]) .track:first-of-type{left:var(
--spectrum-slider-range-track-reset
)}:host([dir=rtl][variant=range]) .track:first-of-type{right:var(
--spectrum-slider-range-track-reset
)}:host([dir=ltr][variant=range]) .track:first-of-type{right:auto}:host([dir=rtl][variant=range]) .track:first-of-type{left:auto}:host([dir=ltr][variant=range]) .track:first-of-type{margin-left:var(
--spectrum-slider-track-margin-offset
)}:host([dir=rtl][variant=range]) .track:first-of-type{margin-right:var(
--spectrum-slider-track-margin-offset
)}:host([variant=range]) .track:first-of-type{padding-bottom:0;padding-top:0}:host([dir=ltr][variant=range]) [dir=ltr] .track,:host([dir=ltr][variant=range]) [dir=rtl] .track{left:auto}:host([dir=ltr][variant=range]) [dir=rtl] .track,:host([dir=rtl][variant=range]) [dir=rtl] .track{right:auto}:host([dir=ltr][variant=range]) [dir=ltr] .track,:host([dir=ltr][variant=range]) [dir=rtl] .track{right:auto}:host([dir=ltr][variant=range]) [dir=rtl] .track,:host([dir=rtl][variant=range]) [dir=rtl] .track{left:auto}:host([dir=ltr][variant=range]) .track,:host([dir=rtl][variant=range]) .track{padding-bottom:0;padding-left:var(--spectrum-slider-track-middle-handleoffset);padding-right:var(--spectrum-slider-track-middle-handleoffset);padding-top:0}:host([dir=ltr][variant=range]) .track:last-of-type{padding-left:var(
--spectrum-slider-track-handleoffset
);padding-right:0}:host([dir=rtl][variant=range]) .track:last-of-type{padding-left:0;padding-right:var(
--spectrum-slider-track-handleoffset
)}:host([dir=ltr][variant=range]) .track:last-of-type{left:auto}:host([dir=rtl][variant=range]) .track:last-of-type{right:auto}:host([dir=ltr][variant=range]) .track:last-of-type{right:var(
--spectrum-slider-range-track-reset
)}:host([dir=rtl][variant=range]) .track:last-of-type{left:var(
--spectrum-slider-range-track-reset
)}:host([dir=ltr][variant=range]) .track:last-of-type{margin-right:var(
--spectrum-slider-track-margin-offset
)}:host([dir=rtl][variant=range]) .track:last-of-type{margin-left:var(
--spectrum-slider-track-margin-offset
)}:host([variant=range]) .track:last-of-type{padding-bottom:0;padding-top:0}:host([dir=ltr]) #ramp{left:var(
--spectrum-slider-track-margin-offset
)}:host([dir=rtl]) #ramp{right:var(
--spectrum-slider-track-margin-offset
)}:host([dir=ltr]) #ramp{right:var(
--spectrum-slider-track-margin-offset
)}:host([dir=rtl]) #ramp{left:var(
--spectrum-slider-track-margin-offset
)}#ramp{height:var(
--spectrum-slider-ramp-track-height,var(--spectrum-global-dimension-static-size-200)
);margin-top:var(
--spectrum-slider-ramp-margin-top
);position:absolute;top:calc(var(
--spectrum-slider-ramp-track-height,
var(--spectrum-global-dimension-static-size-200)
)/2)}:host([dir=rtl]) #ramp svg{transform:matrix(-1,0,0,1,0,0)}#ramp svg{height:100%;width:100%}:host([dir=ltr]) .handle{left:0}:host([dir=rtl]) .handle{right:0}:host([dir=ltr]) .handle{margin-left:calc(var(--spectrum-slider-handle-width)/-2);margin-right:0}:host([dir=rtl]) .handle{margin-left:0;margin-right:calc(var(--spectrum-slider-handle-width)/-2)}.handle{border-radius:var(--spectrum-slider-handle-border-radius);border-style:solid;border-width:var(--spectrum-slider-handle-border-size);box-sizing:border-box;display:inline-block;height:var(--spectrum-slider-handle-height);margin-bottom:0;margin-top:var(--spectrum-slider-handle-margin-top);outline:0;position:absolute;top:calc(var(--spectrum-slider-height)/2);transition:border-width var(--spectrum-slider-animation-duration) ease-in-out;width:var(--spectrum-slider-handle-width);z-index:2}.handle.dragging,.handle.handle-highlight,.handle:active{border-width:var(
--spectrum-slider-handle-border-size-down
)}.handle.dragging,.handle.handle-highlight,.handle.is-tophandle,.handle:active{z-index:3}.handle:before{border-radius:100%;content:" ";display:block;height:var(--spectrum-slider-handle-height);left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out,width var(--spectrum-global-animation-duration-100,.13s) ease-out,height var(--spectrum-global-animation-duration-100,.13s) ease-out;width:var(--spectrum-slider-handle-width)}.handle.handle-highlight:before{height:calc(var(--spectrum-slider-handle-height) + var(--spectrum-alias-focus-ring-gap,var(--spectrum-global-dimension-static-size-25))*2);width:calc(var(--spectrum-slider-handle-width) + var(--spectrum-alias-focus-ring-gap,var(--spectrum-global-dimension-static-size-25))*2)}:host([dir=ltr]) .input{left:var(
--spectrum-slider-input-left
)}:host([dir=rtl]) .input{right:var(
--spectrum-slider-input-left
)}.input{-webkit-appearance:none;border:0;cursor:default;height:var(--spectrum-slider-handle-height);margin:0;opacity:.000001;overflow:hidden;padding:0;pointer-events:none;position:absolute;top:var(--spectrum-slider-input-top);width:var(--spectrum-slider-handle-width)}.input:focus{outline:0}#labelContainer{display:flex;font-size:var(--spectrum-slide-label-text-size);line-height:var(--spectrum-slide-label-text-line-height);padding-top:var(
--spectrum-fieldlabel-m-padding-top,var(--spectrum-global-dimension-size-50)
);position:relative;width:auto}:host([dir=ltr]) #label{padding-left:0}:host([dir=rtl]) #label{padding-right:0}#label{flex-grow:1}:host([dir=ltr]) #value{padding-right:0}:host([dir=rtl]) #value{padding-left:0}:host([dir=ltr]) #value{text-align:right}:host([dir=rtl]) #value{text-align:left}#value{font-feature-settings:"tnum";cursor:default;flex-grow:0}:host([dir=ltr]) #value{margin-left:var(
--spectrum-slider-label-gap-x
)}:host([dir=rtl]) #value{margin-right:var(
--spectrum-slider-label-gap-x
)}.ticks{display:flex;justify-content:space-between;margin:0 var(--spectrum-slider-track-margin-offset);margin-top:calc(var(--spectrum-slider-tick-mark-height) + var(--spectrum-slider-track-height)/ 2);z-index:0}.tick{position:relative;width:var(--spectrum-slider-tick-mark-width)}:host([dir=ltr]) .tick:after{left:calc(50% - var(--spectrum-slider-tick-mark-width)/ 2)}:host([dir=rtl]) .tick:after{right:calc(50% - var(--spectrum-slider-tick-mark-width)/ 2)}.tick:after{border-radius:var(--spectrum-slider-tick-mark-border-radius);content:"";display:block;height:var(--spectrum-slider-tick-mark-height);position:absolute;top:0;width:var(--spectrum-slider-tick-mark-width)}.tick .tickLabel{align-items:center;display:flex;font-size:var(--spectrum-slide-label-text-size);justify-content:center;line-height:var(--spectrum-slide-label-text-line-height);margin-bottom:0;margin-left:calc(var(--spectrum-slider-label-gap-x)*-1);margin-right:calc(var(--spectrum-slider-label-gap-x)*-1);margin-top:calc(var(--spectrum-slider-label-gap-y) + var(--spectrum-slider-tick-mark-height))}.tick:first-of-type .tickLabel,.tick:last-of-type .tickLabel{display:block;margin-left:0;margin-right:0;position:absolute}:host([dir=ltr]) .tick:first-of-type .tickLabel{left:0}:host([dir=rtl]) .tick:first-of-type .tickLabel{right:0}:host([dir=ltr]) .tick:last-of-type .tickLabel{right:0}:host([dir=rtl]) .tick:last-of-type .tickLabel{left:0}:host([disabled]){cursor:default}:host([disabled]) .handle{cursor:default;pointer-events:none}:host{--spectrum-slider-m-focus-ring-size-key-focus:var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
);--spectrum-slider-m-handle-border-color-key-focus:var(
--spectrum-global-color-gray-800
);--spectrum-slider-m-handle-focus-ring-color-key-focus:var(
--spectrum-alias-focus-color,var(--spectrum-global-color-blue-400)
);--spectrum-slider-m-label-text-color:var(
--spectrum-alias-label-text-color,var(--spectrum-global-color-gray-700)
);--spectrum-slider-m-label-text-color-disabled:var(
--spectrum-alias-text-color-disabled,var(--spectrum-global-color-gray-500)
)}.track:before{background:var(
--spectrum-slider-m-track-color,var(--spectrum-global-color-gray-400)
)}#labelContainer{color:var(
--spectrum-slider-m-label-text-color
)}:host([variant=filled]) .track:first-child:before{background:var(
--spectrum-slider-m-track-fill-color,var(--spectrum-global-color-gray-700)
)}#fill:before{background:var(
--spectrum-slider-m-track-fill-color,var(--spectrum-global-color-gray-700)
)}#ramp path{fill:var(
--spectrum-slider-m-track-color,var(--spectrum-global-color-gray-400)
)}.handle{background:var(
--spectrum-slider-m-handle-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-slider-m-handle-border-color,var(--spectrum-global-color-gray-700)
)}.handle:hover{border-color:var(
--spectrum-slider-m-handle-border-color-hover,var(--spectrum-global-color-gray-800)
)}.handle.handle-highlight{border-color:var(
--spectrum-slider-m-handle-border-color-key-focus,var(--spectrum-global-color-gray-800)
)}.handle.handle-highlight:before{box-shadow:0 0 0 var(
--spectrum-slider-m-focus-ring-size-key-focus,var(--spectrum-alias-focus-ring-size)
) var(--spectrum-slider-m-handle-focus-ring-color-key-focus)}.handle.dragging,.handle:active{border-color:var(
--spectrum-slider-m-handle-border-color-down,var(--spectrum-global-color-gray-800)
)}:host([variant=ramp]) .handle{box-shadow:0 0 0 4px var(
--spectrum-alias-background-color-default,var(--spectrum-global-color-gray-100)
)}.input{background:0 0}.tick:after{background-color:var(
--spectrum-slider-tick-m-mark-color,var(--spectrum-alias-track-color-default)
)}.handle.dragging{background:var(
--spectrum-slider-m-handle-background-color-down,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-slider-m-handle-border-color-down,var(--spectrum-global-color-gray-800)
)}:host([variant=range]) .track:not(:first-of-type):not(:last-of-type):before{background:var(
--spectrum-slider-m-track-fill-color,var(--spectrum-global-color-gray-700)
)}:host([disabled]) #labelContainer{color:var(
--spectrum-slider-m-label-text-color-disabled
)}:host([disabled]) .handle{background:var(
--spectrum-alias-background-color-default,var(--spectrum-global-color-gray-100)
);border-color:var(
--spectrum-slider-m-handle-border-color-disabled,var(--spectrum-global-color-gray-400)
)}:host([disabled]) .handle:active,:host([disabled]) .handle:hover{background:var(
--spectrum-slider-m-handle-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-slider-m-handle-border-color-disabled,var(--spectrum-global-color-gray-400)
)}:host([disabled]) .track:before{background:var(
--spectrum-slider-m-track-color-disabled,var(--spectrum-global-color-gray-300)
)}:host([disabled][variant=filled]) .track:first-child:before{background:var(
--spectrum-slider-m-track-fill-color-disabled,var(--spectrum-global-color-gray-300)
)}:host([disabled]) #fill:before{background:var(
--spectrum-slider-m-track-fill-color-disabled,var(--spectrum-global-color-gray-300)
)}:host([disabled]) #ramp path{fill:var(
--spectrum-slider-ramp-track-color-disabled,var(--spectrum-global-color-gray-200)
)}:host([disabled][variant=range]) .track:not(:first-of-type):not(:last-of-type):before{background:var(
--spectrum-slider-m-track-fill-color-disabled,var(--spectrum-global-color-gray-300)
)}:host{--spectrum-slider-handle-default-background-color:var(
--spectrum-slider-m-handle-background-color,var(--spectrum-alias-background-color-transparent)
);--spectrum-slider-handle-default-border-color:var(
--spectrum-slider-m-handle-border-color,var(--spectrum-global-color-gray-700)
)}sp-field-label{padding-bottom:0;padding-top:0}:host(:focus){outline:0}:host([editable]){display:grid;grid-template-areas:"label ." "slider number";grid-template-columns:1fr auto}:host([editable]) #labelContainer{grid-area:label}:host([editable]) #labelContainer+div{grid-area:slider}:host([editable]) sp-number-field{--spectrum-stepper-width:var(
--spectrum-slider-editable-number-field-width,var(--spectrum-global-dimension-size-1000)
);grid-area:number}:host([hide-stepper]) sp-number-field{--spectrum-stepper-width:var(
--spectrum-slider-editable-number-field-width,var(--spectrum-global-dimension-size-900)
)}:host([editable][dir=ltr]) sp-number-field{margin-left:var(--spectrum-global-dimension-size-200)}:host([editable][dir=rtl]) sp-number-field{margin-right:var(--spectrum-global-dimension-size-200)}:host([editable]) output{opacity:0}:host([disabled]){pointer-events:none}.track{touch-action:none}.not-exact.ticks{justify-content:start}:host([dir=ltr]) .not-exact .tick{padding-right:var(--sp-slider-tick-offset)}:host([dir=rtl]) .not-exact .tick{padding-left:var(--sp-slider-tick-offset)}:host([dir=ltr]) .not-exact .tick:after{left:auto;transform:translate(-50%)}:host([dir=rtl]) .not-exact .tick:after{right:auto;transform:translate(50%)}.track:before{background-size:var(--spectrum-slider-track-background-size)!important}:host([dir=ltr]) .track:before{background:var(
--spectrum-slider-track-color,var(--spectrum-global-color-gray-300)
)}:host([dir=rtl]) .track:before{background:var(
--spectrum-slider-track-color-rtl,var(
--spectrum-slider-track-color,var(--spectrum-global-color-gray-300)
)
)}:host([dir=ltr]) .track:last-of-type:before{background-position:100%}:host([dir=rtl]) .track:first-of-type:before{background-position:100%}.track:not(:first-of-type):not(:last-of-type){padding-left:calc(var(--spectrum-slider-handle-width)/ 2 + var(--spectrum-slider-track-handleoffset))!important;padding-right:calc(var(--spectrum-slider-handle-width)/ 2 + var(--spectrum-slider-track-handleoffset))!important}:host([dir=ltr][variant=range]) .track,:host([dir=rtl][variant=range]) .track{margin:var(--spectrum-slider-range-track-reset);margin-top:calc(var(--spectrum-slider-track-height)/-2)}:host([dir=ltr]) .track:not(:first-of-type):not(:last-of-type){left:var(--spectrum-slider-track-segment-position)}:host([dir=rtl]) .track:not(:first-of-type):not(:last-of-type){right:var(--spectrum-slider-track-segment-position)}.visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:host([label-visibility=value][dir=ltr]) #value{margin-left:auto}:host([label-visibility=value][dir=rtl]) #value{margin-right:auto}`;

class HandleController{constructor(host){this.handles=new Map();this.model=[];this.handleOrder=[];this.extractModelFromLightDom=()=>{let handles=[...this.host.querySelectorAll('[slot="handle"]')];if(handles.length===0){handles=[this.host];}this.handles=new Map();this.handleOrder=[];handles.forEach((handle,index)=>{var _a;/* c8 ignore next */if(!((_a=handle.handleName)===null||_a===void 0?void 0:_a.length)){handle.name=`handle${index+1}`;}this.handles.set(handle.handleName,handle);this.handleOrder.push(handle.handleName);handle.handleController=this;});this.requestUpdate();};/**
         * Keep the slider value property in sync with the input element's value
         */this.onInputChange=event=>{const input=event.target;input.model.handle.value=input.valueAsNumber;this.requestUpdate();this.dispatchChangeEvent(input,input.model.handle);};this.onInputFocus=event=>{const input=event.target;let isFocusVisible;try{isFocusVisible=input.matches(':focus-visible')||this.host.matches('.focus-visible');/* c8 ignore next 3 */}catch(error){isFocusVisible=this.host.matches('.focus-visible');}input.model.handle.highlight=isFocusVisible;this.requestUpdate();};this.onInputBlur=event=>{const input=event.target;input.model.handle.highlight=false;this.requestUpdate();};this.onInputKeydown=event=>{const input=event.target;input.model.handle.highlight=true;this.requestUpdate();};this.host=host;}get values(){const result={};for(const model of this.handles.values()){result[model.handleName]=model.value;}return result;}get size(){return this.handles.size;}inputForHandle(handle){if(this.handles.has(handle.handleName)){const{input}=this.getHandleElements(handle);return input;}/* c8 ignore next 2 */throw new Error(`No input for handle "${handle.name}"`);}requestUpdate(){this.host.requestUpdate();}/**
     * It is possible for value attributes to be set programmatically. The <input>
     * for a particular slider needs to have an opportunity to validate any such
     * values
     *
     * @param handle Handle who's value needs validation
     */setValueFromHandle(handle){const elements=this.getHandleElements(handle);/* c8 ignore next */if(!elements)return;const{input}=elements;if(input.valueAsNumber===handle.value){if(handle.dragging){handle.dispatchInputEvent();}}else {input.valueAsNumber=handle.value;handle.value=input.valueAsNumber;this.requestUpdate();}handle.value=input.valueAsNumber;}handleHasChanged(handle){if(handle!==this.host){this.requestUpdate();}}formattedValueForHandle(model){var _a;const{handle}=model;const numberFormat=(_a=handle.numberFormat)!==null&&_a!==void 0?_a:this.host.numberFormat;return handle.getAriaHandleText(model.value,numberFormat);}get formattedValues(){const result=new Map();for(const model of this.model){result.set(model.name,this.formattedValueForHandle(model));}return result;}get focusElement(){const{input}=this.getActiveHandleElements();if(this.host.editable&&!input.model.handle.dragging){return this.host.numberField;}return input;}hostConnected(){if(!this.observer){this.observer=new MutationObserver(this.extractModelFromLightDom);}this.observer.observe(this.host,{subtree:true,childList:true});this.extractModelFromLightDom();}hostDisconnected(){this.observer.disconnect();}hostUpdate(){this.updateModel();}get activeHandle(){return this.handleOrder[this.handleOrder.length-1];}get activeHandleInputId(){const active=this.activeHandle;const index=this.model.findIndex(model=>model.name===active);return `input-${index}`;}activateHandle(name){const index=this.handleOrder.findIndex(item=>item===name);if(index>=0){this.handleOrder.splice(index,1);}this.handleOrder.push(name);}getActiveHandleElements(){const name=this.activeHandle;const handleSlider=this.handles.get(name);const elements=this.getHandleElements(handleSlider);return Object.assign({model:handleSlider},elements);}getHandleElements(sliderHandle){if(!this.handleRefMap){this.handleRefMap=new WeakMap();const inputNodes=this.host.shadowRoot.querySelectorAll('.handle > input');for(const inputNode of inputNodes){const input=inputNode;const handle=input.parentElement;const model=this.handles.get(handle.getAttribute('name'));if(model){this.handleRefMap.set(model,{input,handle});}}}const components=this.handleRefMap.get(sliderHandle);return components;}clearHandleComponentCache(){delete this.handleRefMap;}get boundingClientRect(){if(!this._boundingClientRect){this._boundingClientRect=this.host.track.getBoundingClientRect();}return this._boundingClientRect;}updateBoundingRect(){delete this._boundingClientRect;}/**
     * Receives an event from a track click and turns it into a drag
     * of the active handle
     * @param event Track click event
     */beginTrackDrag(event){const{handle}=this.getActiveHandleElements();const model=this.model.find(item=>item.name===this.activeHandle);/* c8 ignore next */if(!model)return;event.stopPropagation();event.preventDefault();const applyDefault=handle.dispatchEvent(new PointerEvent('pointerdown',event));if(applyDefault){const model=this.model.find(model=>model.name===this.activeHandle);if(model){this.handlePointermove(event,model);}}}handlePointerdown(event,model){const handle=event.target;if(this.host.disabled||event.button!==0){event.preventDefault();return;}this.updateBoundingRect();this.host.labelEl.click();this.draggingHandle=model.handle;model.handle.dragging=true;this.activateHandle(model.name);handle.setPointerCapture(event.pointerId);this.host.requestUpdate();}handlePointerup(event,model){// Retain focus on input element after mouse up to enable keyboard interactions
const handle=event.target;const input=handle.querySelector('input');this.host.labelEl.click();model.handle.highlight=false;delete this.draggingHandle;model.handle.dragging=false;this.requestUpdate();handle.releasePointerCapture(event.pointerId);this.dispatchChangeEvent(input,model.handle);}handlePointermove(event,model){/* c8 ignore next 3 */if(!this.draggingHandle){return;}event.stopPropagation();const{input}=this.getHandleElements(model.handle);input.value=this.calculateHandlePosition(event,model).toString();model.handle.value=parseFloat(input.value);this.requestUpdate();}dispatchChangeEvent(input,handle){input.valueAsNumber=handle.value;const changeEvent=new Event('change',{bubbles:true,composed:true});handle.dispatchEvent(changeEvent);}/**
     * Returns the value under the cursor
     * @param: PointerEvent on slider
     * @return: Slider value that correlates to the position under the pointer
     */calculateHandlePosition(event,model){const rect=this.boundingClientRect;const minOffset=rect.left;const offset=event.clientX;const size=rect.width;const normalized=(offset-minOffset)/size;const value=model.normalization.fromNormalized(normalized,model.range.min,model.range.max);/* c8 ignore next */return this.host.isLTR?value:model.range.max-value;}renderHandle(model,index,zIndex,isMultiHandle){var _a;const classes={handle:true,dragging:((_a=this.draggingHandle)===null||_a===void 0?void 0:_a.handleName)===model.name,'handle-highlight':model.highlight};const style={[this.host.isLTR?'left':'right']:`${model.normalizedValue*100}%`,'z-index':zIndex.toString(),// Allow setting background per-handle
'background-color':`var(--spectrum-slider-handle-background-color-${index}, var(--spectrum-slider-handle-default-background-color))`,'border-color':`var(--spectrum-slider-handle-border-color-${index}, var(-spectrum-slider-handle-default-border-color))`};const ariaLabelledBy=isMultiHandle?`label input-${index}`:'label';return p`<div class="${o$1(classes)}" name="${model.name}" style="${i$1(style)}" ${streamingListener({start:['pointerdown',event=>this.handlePointerdown(event,model)],streamInside:['pointermove',event=>this.handlePointermove(event,model)],end:[['pointerup','pointercancel'],event=>this.handlePointerup(event,model)]})} role="presentation"><input type="range" class="input" id="input-${index}" min="${model.clamp.min}" max="${model.clamp.max}" step="${model.step}" value="${model.value}" aria-disabled="${l(this.host.disabled?'true':undefined)}" tabindex="${l(this.host.editable?-1:undefined)}" aria-label="${l(model.ariaLabel)}" aria-labelledby="${ariaLabelledBy}" aria-valuetext="${this.formattedValueForHandle(model)}" @change="${this.onInputChange}" @focus="${this.onInputFocus}" @blur="${this.onInputBlur}" @keydown="${this.onInputKeydown}" .model="${model}"></div>`;}render(){this.clearHandleComponentCache();return this.model.map((model,index)=>{const zIndex=this.handleOrder.indexOf(model.name)+1;return this.renderHandle(model,index,zIndex,this.model.length>1);});}/**
     * Returns a list of track segment [start, end] tuples where the values are
     * normalized to be between 0 and 1.
     * @returns A list of track segment tuples [start, end]
     */trackSegments(){const values=this.model.map(model=>model.normalizedValue);values.sort((a,b)=>a-b);// The first segment always starts at 0
values.unshift(0);return values.map((value,index,array)=>{var _a;return [value,(_a=array[index+1])!==null&&_a!==void 0?_a:1];});}updateModel(){const handles=[...this.handles.values()];const getRangeAndClamp=index=>{const handle=handles[index];const previous=handles[index-1];const next=handles[index+1];const min=typeof handle.min==='number'?handle.min:this.host.min;const max=typeof handle.max==='number'?handle.max:this.host.max;const result={range:{min:min,max:max},clamp:{min:min,max:max}};if(handle.min==='previous'){if(previous){for(let j=index-1;j>=0;j--){const item=handles[j];if(typeof item.min==='number'){result.range.min=item.min;break;}}result.clamp.min=Math.max(previous.value,result.range.min);/* c8 ignore next 5 */}else {console.warn('First slider handle cannot have attribute min="previous"');}}if(handle.max==='next'){if(next){for(let j=index+1;j<handles.length;j++){const item=handles[j];if(typeof item.max==='number'){result.range.max=item.max;break;}}result.clamp.max=Math.min(next.value,result.range.max);/* c8 ignore next 5 */}else {console.warn('Last slider handle cannot have attribute max="next"');}}return result;};const modelValues=handles.map((handle,index)=>{var _a;const rangeAndClamp=getRangeAndClamp(index);const{toNormalized}=handle.normalization;const clampedValue=Math.max(Math.min(handle.value,rangeAndClamp.clamp.max),rangeAndClamp.clamp.min);const normalizedValue=toNormalized(clampedValue,rangeAndClamp.range.min,rangeAndClamp.range.max);const model=Object.assign({name:handle.handleName,value:clampedValue,normalizedValue,highlight:handle.highlight,step:(_a=handle.step)!==null&&_a!==void 0?_a:this.host.step,normalization:handle.normalization,handle,ariaLabel:handle!==this.host&&(handle===null||handle===void 0?void 0:handle.label.length)>0?handle.label:undefined},rangeAndClamp);return model;});this.model=modelValues;}async handleUpdatesComplete(){const updates=[...this.handles.values()].filter(handle=>handle!==this.host).map(handle=>handle.updateComplete);await Promise.all(updates);}}

const variants=['filled','ramp','range','tick'];/**
 * @element sp-slider
 *
 * @slot - text label for the Slider
 */class Slider extends ObserveSlotText(SliderHandle,''){constructor(){super(...arguments);this.handleController=new HandleController(this);this._editable=false;/**
         * Whether the stepper UI of the Number Field is hidden or not
         */this.hideStepper=false;this.type='';/* Ensure that a '' value for `variant` removes the attribute instead of a blank value */this._variant='';this.getAriaValueText=values=>{const valueArray=[...values.values()];if(valueArray.length===2)return `${valueArray[0]}${this._forcedUnit} - ${valueArray[1]}${this._forcedUnit}`;return valueArray.join(`${this._forcedUnit}, `)+this._forcedUnit;};this.min=0;this.max=100;this.step=1;this.tickStep=0;this.tickLabels=false;this.disabled=false;this._numberFieldInput=Promise.resolve();}static get styles(){return [styles$g];}/**
     * Whether to display a Number Field along side the slider UI
     */get editable(){return this._editable;}set editable(editable){if(editable===this.editable)return;const oldValue=this.editable;this._editable=this.handleController.size<2?editable:false;if(this.editable){this._numberFieldInput=Promise.resolve().then(function () { return spNumberField; });}if(oldValue!==this.editable){this.requestUpdate('editable',oldValue);}}set variant(variant){const oldVariant=this.variant;if(variant===this.variant){return;}if(variants.includes(variant)){this.setAttribute('variant',variant);this._variant=variant;}else {this.removeAttribute('variant');this._variant='';}this.requestUpdate('variant',oldVariant);}get variant(){return this._variant;}get values(){return this.handleController.values;}get handleName(){return 'value';}get ariaValueText(){if(!this.getAriaValueText){return `${this.value}${this._forcedUnit}`;}return this.getAriaValueText(this.handleController.formattedValues);}get numberFormat(){return this.getNumberFormat();}get focusElement(){return this.handleController.focusElement;}handleLabelClick(event){if(this.editable){event.preventDefault();this.focus();}}render(){return p`${this.renderLabel()} ${this.renderTrack()} ${this.editable?p`<sp-number-field .formatOptions="${this.formatOptions||{}}" id="number-field" min="${this.min}" max="${this.max}" step="${this.step}" value="${this.value}" ?hide-stepper="${this.hideStepper}" ?disabled="${this.disabled}" @input="${this.handleNumberInput}" @change="${this.handleNumberChange}"></sp-number-field>`:p``}`;}connectedCallback(){super.connectedCallback();this.handleController.hostConnected();}disconnectedCallback(){super.disconnectedCallback();this.handleController.hostDisconnected();}update(changedProperties){this.handleController.hostUpdate();super.update(changedProperties);}renderLabel(){const textLabelVisible=this.labelVisibility==='none'||this.labelVisibility==='value';const valueLabelVisible=this.labelVisibility==='none'||this.labelVisibility==='text';return p`<div id="labelContainer"><sp-field-label class="${o$1({'visually-hidden':textLabelVisible})}" ?disabled="${this.disabled}" id="label" for="${this.editable?'number-field':this.handleController.activeHandleInputId}" @click="${this.handleLabelClick}">${this.slotHasContent?p``:this.label}<slot>${this.label}</slot></sp-field-label><output class="${o$1({'visually-hidden':valueLabelVisible})}" id="value" aria-live="off" for="input">${this.ariaValueText}</output></div>`;}renderRamp(){if(this.variant!=='ramp'){return p``;}return p`<div id="ramp"><svg viewBox="0 0 240 16" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M240,4v8c0,2.3-1.9,4.1-4.2,4L1,9C0.4,9,0,8.5,0,8c0-0.5,0.4-1,1-1l234.8-7C238.1-0.1,240,1.7,240,4z"></path></svg></div>`;}renderTicks(){if(this.variant!=='tick'){return p``;}const tickStep=this.tickStep||this.step;const tickCount=(this.max-this.min)/tickStep;const partialFit=tickCount%1!==0;const ticks=new Array(Math.floor(tickCount+1));ticks.fill(0,0,tickCount+1);return p`<div class="${partialFit?'not-exact ':''}ticks" style="${l(partialFit?`--sp-slider-tick-offset: calc(100% / ${this.max} * ${this.tickStep}`:undefined)}">${ticks.map((_tick,i)=>p`<div class="tick">${this.tickLabels?p`<div class="tickLabel">${i*tickStep}</div>`:p``}</div>`)}</div>`;}renderTrackSegment(start,end){if(this.variant==='ramp'){return p``;}return p`<div class="track" style="${i$1(this.trackSegmentStyles(start,end))}" role="presentation"></div>`;}renderTrack(){const segments=this.handleController.trackSegments();const trackItems=[{id:'track0',html:this.renderTrackSegment(...segments[0])},{id:'ramp',html:this.renderRamp()},{id:'ticks',html:this.renderTicks()},{id:'handles',html:this.handleController.render()},...segments.slice(1).map(([start,end],index)=>({id:`track${index+1}`,html:this.renderTrackSegment(start,end)}))];return p`<div id="track" @pointerdown="${this.handleTrackPointerdown}"><div id="controls">${c(trackItems,item=>item.id,item=>item.html)}</div></div>`;}/**
     * Move the handle under the cursor and begin start a pointer capture when the track
     * is moused down
     */handleTrackPointerdown(event){const target=event.target;if(target.classList.contains('handle')){return;}this.handleController.beginTrackDrag(event);}handleNumberInput(event){var _a;const{value}=event.target;if(((_a=event.target)===null||_a===void 0?void 0:_a.stepperActive)&&!isNaN(value)){this.value=value;return;}// Do not apply uncommited values to the parent element unless interacting with the stepper UI.
// Stop uncommited input from being annoucned to the parent application.
event.stopPropagation();}handleNumberChange(event){var _a;const{value}=event.target;if(isNaN(value)){event.target.value=this.value;event.stopPropagation();}else {this.value=value;if(!((_a=event.target)===null||_a===void 0?void 0:_a.stepperActive)){// When stepper is not active, sythesize an `input` event so that the
// `change` event isn't surprising.
this.dispatchInputEvent();}}}trackSegmentStyles(start,end){const size=end-start;const styles={width:`${size*100}%`,'--spectrum-slider-track-background-size':`${1/size*100}%`,'--spectrum-slider-track-segment-position':`${start*100}%`};return styles;}async getUpdateComplete(){const complete=await super.getUpdateComplete();if(this.editable){await this._numberFieldInput;await this.numberField.updateComplete;}await this.handleController.handleUpdatesComplete();return complete;}}__decorate([e({type:Boolean,reflect:true})],Slider.prototype,"editable",null);__decorate([e({type:Boolean,reflect:true,attribute:'hide-stepper'})],Slider.prototype,"hideStepper",void 0);__decorate([e()],Slider.prototype,"type",void 0);__decorate([e({type:String})],Slider.prototype,"variant",null);__decorate([e({attribute:false})],Slider.prototype,"getAriaValueText",void 0);__decorate([e({type:String,reflect:true,attribute:'label-visibility'})],Slider.prototype,"labelVisibility",void 0);__decorate([e({type:Number,reflect:true})],Slider.prototype,"min",void 0);__decorate([e({type:Number,reflect:true})],Slider.prototype,"max",void 0);__decorate([e({type:Number})],Slider.prototype,"step",void 0);__decorate([e({type:Number,attribute:'tick-step'})],Slider.prototype,"tickStep",void 0);__decorate([e({type:Boolean,attribute:'tick-labels'})],Slider.prototype,"tickLabels",void 0);__decorate([e({type:Boolean,reflect:true})],Slider.prototype,"disabled",void 0);__decorate([i('#label')],Slider.prototype,"labelEl",void 0);__decorate([i('#number-field')],Slider.prototype,"numberField",void 0);__decorate([i('#track')],Slider.prototype,"track",void 0);

iliadCustomElementsDefine('sp-slider',Slider);

const styles$f=r`:host{--spectrum-alias-border-radius-small:var(
--spectrum-global-dimension-size-25
);--spectrum-button-primary-m-border-size:var(
--spectrum-alias-border-size-thick
);--spectrum-button-primary-m-padding-left:var(
--spectrum-alias-item-rounded-workflow-padding-left-m
);--spectrum-button-primary-m-padding-right:var(
--spectrum-alias-item-rounded-padding-m
);--spectrum-button-primary-m-border-radius:var(
--spectrum-alias-item-rounded-border-radius-m
)}:host{--spectrum-splitbutton-trigger-border-left:0;--spectrum-splitbutton-trigger-min-width:0;--spectrum-spltibutton-margin-left:0;--spectrum-splitbutton-icon-gap:var(--spectrum-global-dimension-size-150);--spectrum-splitbutton-border-radius-edge:var(
--spectrum-alias-border-radius-small,var(--spectrum-global-dimension-size-25)
)}.trigger{--spectrum-splitbutton-trigger-round-edge-padding:var(
--spectrum-global-dimension-size-125
);--spectrum-splitbutton-trigger-flat-edge-padding:var(
--spectrum-global-dimension-size-100
);--spectrum-splitbutton-cta-trigger-flat-edge-padding:calc(var(--spectrum-splitbutton-trigger-flat-edge-padding) - var(
--spectrum-button-primary-m-border-size,
var(--spectrum-alias-border-size-thick)
))}#button{--spectrum-splitbutton-flat-edge-padding:calc(var(
--spectrum-button-primary-m-padding-left,
var(--spectrum-alias-item-rounded-workflow-padding-left-m)
) - var(
--spectrum-button-primary-m-border-size,
var(--spectrum-alias-border-size-thick)
)*2);--spectrum-splitbutton-round-edge-padding:var(
--spectrum-button-primary-m-padding-right,var(--spectrum-alias-item-rounded-padding-m)
);--spectrum-splitbutton-cta-flat-edge-padding:calc(var(
--spectrum-button-primary-m-padding-left,
var(--spectrum-alias-item-rounded-workflow-padding-left-m)
) - var(
--spectrum-button-primary-m-border-size,
var(--spectrum-alias-border-size-thick)
)*3)}:host{display:inline-flex;flex-direction:row;position:relative;vertical-align:top}:host([dir=ltr]) #button{margin-left:0}:host([dir=rtl]) #button{margin-right:0}:host([dir=ltr]) #button{border-top-left-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=rtl]) #button{border-top-right-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=ltr]) #button{border-top-right-radius:0}:host([dir=rtl]) #button{border-top-left-radius:0}:host([dir=ltr]) #button{border-bottom-right-radius:0}:host([dir=rtl]) #button{border-bottom-left-radius:0}:host([dir=ltr]) #button{border-bottom-left-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=rtl]) #button{border-bottom-right-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=ltr]) #button{padding-right:var(
--spectrum-splitbutton-flat-edge-padding
)}:host([dir=rtl]) #button{padding-left:var(
--spectrum-splitbutton-flat-edge-padding
)}:host([dir=ltr]) #button{padding-left:var(
--spectrum-splitbutton-round-edge-padding
)}:host([dir=rtl]) #button{padding-right:var(
--spectrum-splitbutton-round-edge-padding
)}:host([dir=ltr][variant=cta]) #button{padding-right:var(
--spectrum-splitbutton-cta-flat-edge-padding
)}:host([dir=rtl][variant=cta]) #button{padding-left:var(
--spectrum-splitbutton-cta-flat-edge-padding
)}:host([dir=ltr][variant=cta]) #button{margin-right:var(
--spectrum-button-primary-m-border-size,var(--spectrum-alias-border-size-thick)
)}:host([dir=rtl][variant=cta]) #button{margin-left:var(
--spectrum-button-primary-m-border-size,var(--spectrum-alias-border-size-thick)
)}:host([dir=ltr]) #button:after{border-top-right-radius:var(
--spectrum-splitbutton-border-radius-edge
)}:host([dir=rtl]) #button:after{border-top-left-radius:var(
--spectrum-splitbutton-border-radius-edge
)}:host([dir=ltr]) #button:after{border-bottom-right-radius:var(
--spectrum-splitbutton-border-radius-edge
)}:host([dir=rtl]) #button:after{border-bottom-left-radius:var(
--spectrum-splitbutton-border-radius-edge
)}:host([dir=ltr]) .trigger{margin-left:0}:host([dir=rtl]) .trigger{margin-right:0}:host([dir=ltr]) .trigger{border-top-left-radius:0}:host([dir=rtl]) .trigger{border-top-right-radius:0}:host([dir=ltr]) .trigger{border-top-right-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=rtl]) .trigger{border-top-left-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=ltr]) .trigger{border-bottom-right-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=rtl]) .trigger{border-bottom-left-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=ltr]) .trigger{border-bottom-left-radius:0}:host([dir=rtl]) .trigger{border-bottom-right-radius:0}:host([dir=ltr]) .trigger{border-left-width:var(
--spectrum-splitbutton-trigger-border-left
)}:host([dir=rtl]) .trigger{border-right-width:var(
--spectrum-splitbutton-trigger-border-left
)}:host([dir=ltr]) .trigger{padding-left:var(
--spectrum-splitbutton-trigger-flat-edge-padding
)}:host([dir=rtl]) .trigger{padding-right:var(
--spectrum-splitbutton-trigger-flat-edge-padding
)}:host([dir=ltr]) .trigger{padding-right:var(
--spectrum-splitbutton-trigger-round-edge-padding
)}:host([dir=rtl]) .trigger{padding-left:var(
--spectrum-splitbutton-trigger-round-edge-padding
)}.trigger{min-width:var(
--spectrum-splitbutton-trigger-min-width
)}:host([dir=ltr][variant=cta]) .trigger{padding-left:var(
--spectrum-splitbutton-cta-trigger-flat-edge-padding
)}:host([dir=rtl][variant=cta]) .trigger{padding-right:var(
--spectrum-splitbutton-cta-trigger-flat-edge-padding
)}:host([dir=ltr][variant=cta]) .trigger{border-left-width:var(
--spectrum-button-primary-m-border-size,var(--spectrum-alias-border-size-thick)
)}:host([dir=rtl][variant=cta]) .trigger{border-right-width:var(
--spectrum-button-primary-m-border-size,var(--spectrum-alias-border-size-thick)
)}.trigger.focus-visible{box-shadow:none}.trigger:focus-visible{box-shadow:none}:host([dir=ltr]) .trigger:after{border-top-left-radius:var(
--spectrum-splitbutton-border-radius-edge
)}:host([dir=rtl]) .trigger:after{border-top-right-radius:var(
--spectrum-splitbutton-border-radius-edge
)}:host([dir=ltr]) .trigger:after{border-bottom-left-radius:var(
--spectrum-splitbutton-border-radius-edge
)}:host([dir=rtl]) .trigger:after{border-bottom-right-radius:var(
--spectrum-splitbutton-border-radius-edge
)}.icon{display:block;margin-top:1px}#button,.trigger{position:relative}#button:focus,.trigger:focus{z-index:1}:host([dir=ltr]) #button .label+.spectrum-Icon{margin-left:var(
--spectrum-splitbutton-icon-gap
)}:host([dir=rtl]) #button .label+.spectrum-Icon{margin-right:var(
--spectrum-splitbutton-icon-gap
)}:host([dir=ltr][left]) #button{border-top-left-radius:0}:host([dir=rtl][left]) #button{border-top-right-radius:0}:host([dir=ltr][left]) #button{border-top-right-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=rtl][left]) #button{border-top-left-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=ltr][left]) #button{border-bottom-right-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=rtl][left]) #button{border-bottom-left-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=ltr][left]) #button{border-bottom-left-radius:0}:host([dir=rtl][left]) #button{border-bottom-right-radius:0}:host([dir=ltr][left]) #button{margin-right:0}:host([dir=rtl][left]) #button{margin-left:0}:host([dir=ltr][left]) #button{margin-left:var(
--spectrum-spltibutton-margin-left
)}:host([dir=rtl][left]) #button{margin-right:var(
--spectrum-spltibutton-margin-left
)}:host([dir=ltr][left]) #button{padding-left:var(
--spectrum-splitbutton-flat-edge-padding
)}:host([dir=rtl][left]) #button{padding-right:var(
--spectrum-splitbutton-flat-edge-padding
)}:host([dir=ltr][left]) #button{padding-right:var(
--spectrum-splitbutton-round-edge-padding
)}:host([dir=rtl][left]) #button{padding-left:var(
--spectrum-splitbutton-round-edge-padding
)}:host([dir=ltr][left][variant=cta]) #button{padding-left:var(
--spectrum-splitbutton-cta-flat-edge-padding
)}:host([dir=rtl][left][variant=cta]) #button{padding-right:var(
--spectrum-splitbutton-cta-flat-edge-padding
)}:host([dir=ltr][left][variant=cta]) #button{margin-left:var(
--spectrum-button-primary-m-border-size,var(--spectrum-alias-border-size-thick)
)}:host([dir=rtl][left][variant=cta]) #button{margin-right:var(
--spectrum-button-primary-m-border-size,var(--spectrum-alias-border-size-thick)
)}:host([dir=ltr][left]) #button:after{border-top-left-radius:var(
--spectrum-splitbutton-border-radius-edge
)}:host([dir=rtl][left]) #button:after{border-top-right-radius:var(
--spectrum-splitbutton-border-radius-edge
)}:host([dir=ltr][left]) #button:after{border-top-right-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=rtl][left]) #button:after{border-top-left-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=ltr][left]) #button:after{border-bottom-right-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=rtl][left]) #button:after{border-bottom-left-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=ltr][left]) #button:after{border-bottom-left-radius:var(
--spectrum-splitbutton-border-radius-edge
)}:host([dir=rtl][left]) #button:after{border-bottom-right-radius:var(
--spectrum-splitbutton-border-radius-edge
)}:host([dir=ltr][left]) .trigger{margin-right:0}:host([dir=rtl][left]) .trigger{margin-left:0}:host([dir=ltr][left]) .trigger{border-top-left-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=rtl][left]) .trigger{border-top-right-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=ltr][left]) .trigger{border-top-right-radius:0}:host([dir=rtl][left]) .trigger{border-top-left-radius:0}:host([dir=ltr][left]) .trigger{border-bottom-right-radius:0}:host([dir=rtl][left]) .trigger{border-bottom-left-radius:0}:host([dir=ltr][left]) .trigger{border-bottom-left-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=rtl][left]) .trigger{border-bottom-right-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=ltr][left]) .trigger{border-left-width:var(
--spectrum-button-primary-m-border-size,var(--spectrum-alias-border-size-thick)
)}:host([dir=rtl][left]) .trigger{border-right-width:var(
--spectrum-button-primary-m-border-size,var(--spectrum-alias-border-size-thick)
)}:host([dir=ltr][left]) .trigger{border-right-width:var(
--spectrum-splitbutton-trigger-border-left
)}:host([dir=rtl][left]) .trigger{border-left-width:var(
--spectrum-splitbutton-trigger-border-left
)}:host([dir=ltr][left]) .trigger{padding-right:var(
--spectrum-splitbutton-trigger-flat-edge-padding
)}:host([dir=rtl][left]) .trigger{padding-left:var(
--spectrum-splitbutton-trigger-flat-edge-padding
)}:host([dir=ltr][left]) .trigger{padding-left:var(
--spectrum-splitbutton-trigger-round-edge-padding
)}:host([dir=rtl][left]) .trigger{padding-right:var(
--spectrum-splitbutton-trigger-round-edge-padding
)}:host([dir=ltr][left][variant=cta]) .trigger{padding-right:var(
--spectrum-splitbutton-cta-trigger-flat-edge-padding
)}:host([dir=rtl][left][variant=cta]) .trigger{padding-left:var(
--spectrum-splitbutton-cta-trigger-flat-edge-padding
)}:host([dir=ltr][left][variant=cta]) .trigger{border-right-width:var(
--spectrum-button-primary-m-border-size,var(--spectrum-alias-border-size-thick)
)}:host([dir=rtl][left][variant=cta]) .trigger{border-left-width:var(
--spectrum-button-primary-m-border-size,var(--spectrum-alias-border-size-thick)
)}:host([dir=ltr][left]) .trigger:after{border-top-left-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=rtl][left]) .trigger:after{border-top-right-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=ltr][left]) .trigger:after{border-top-right-radius:var(
--spectrum-splitbutton-border-radius-edge
)}:host([dir=rtl][left]) .trigger:after{border-top-left-radius:var(
--spectrum-splitbutton-border-radius-edge
)}:host([dir=ltr][left]) .trigger:after{border-bottom-right-radius:var(
--spectrum-splitbutton-border-radius-edge
)}:host([dir=rtl][left]) .trigger:after{border-bottom-left-radius:var(
--spectrum-splitbutton-border-radius-edge
)}:host([dir=ltr][left]) .trigger:after{border-bottom-left-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}:host([dir=rtl][left]) .trigger:after{border-bottom-right-radius:var(
--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m)
)}sp-button{--spectrum-button-primary-m-border-radius:calc(var(--spectrum-button-padding-y) + var(--spectrum-icon-tshirt-size-height)/2 + var(--spectrum-alias-border-size-thick))}sp-popover{display:none}::slotted(sp-menu){display:none}.more-medium{height:18px;margin:1px -4px 0;width:18px}`;

const chevronClass={s:'spectrum-UIIcon-ChevronDown75',m:'spectrum-UIIcon-ChevronDown100',l:'spectrum-UIIcon-ChevronDown200',xl:'spectrum-UIIcon-ChevronDown300'};class SplitButton extends SizedMixin(PickerBase){constructor(){super(...arguments);this.left=false;/**
         * The visual variant to apply to this button.
         */this.variant='cta';this.type='field';this.listRole='menu';this.itemRole='menuitem';}static get styles(){return [styles$f,styles$N];}get target(){return this;}focus(){if(this.disabled){return;}if(this.left){this.trigger.focus();return;}super.focus();}sizePopover(popover){popover.style.setProperty('min-width',`${this.offsetWidth}px`);}passClick(){const target=this.type==='more'?this.menuItems[0]:this.selectedItem||this.menuItems[0];if(target){target.click();}}get buttonContent(){var _a;return [p`<div id="label" role="presentation" class="${l(this.value?undefined:'placeholder')}">${((_a=this.selectedItem)===null||_a===void 0?void 0:_a.itemText)||''}</div>`];}get renderPopover(){return p`<sp-popover id="popover" @sp-overlay-closed="${this.onOverlayClosed}"><sp-menu id="menu" role="${this.listRole}" @change="${this.handleChange}" .selects="${this.selects}"></sp-menu></sp-popover>`;}update(changes){if(changes.has('type')){if(this.type==='more'){this.selects=undefined;}else {this.selects='single';}}super.update(changes);}render(){const buttons=[p`<sp-button aria-haspopup="true" aria-label="${l(this.label||undefined)}" id="button" class="button ${this.variant}" @click="${this.passClick}" ?disabled="${this.disabled}" variant="${this.variant}" size="${this.size}">${this.buttonContent}</sp-button>`,p`<sp-button class="button trigger ${this.variant}" @blur="${this.onButtonBlur}" @click="${this.onButtonClick}" @focus="${this.onButtonFocus}" ?disabled="${this.disabled}" aria-label="More" variant="${this.variant}" size="${this.size}">${this.type==='field'?p`<sp-icon-chevron100 class="icon ${chevronClass[this.size]}"></sp-icon-chevron100>`:p`<sp-icon-more class="icon"></sp-icon-more>`}</sp-button>`];if(this.left){buttons.reverse();}return p`${buttons} ${this.renderPopover}`;}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has('value')){this.manageSplitButtonItems();}}manageSelection(){super.manageSelection();this.manageSplitButtonItems();}async manageSplitButtonItems(){if(this.menuItems.length){if(this.type==='more'){this.menuItems[0].hidden=true;this.menuItems.forEach(el=>el.selected=false);this.selectedItem=this.menuItems[0];}else {this.selectedItem=this.selectedItem||this.menuItems[0];}this.value=this.selectedItem.value;return;}await this.updateComplete;if(this.menuItems.length){this.manageSplitButtonItems();}}}__decorate([e({type:Boolean,reflect:true})],SplitButton.prototype,"left",void 0);__decorate([e({reflect:true})],SplitButton.prototype,"variant",void 0);__decorate([e({type:String})],SplitButton.prototype,"type",void 0);__decorate([i('.trigger')],SplitButton.prototype,"trigger",void 0);

iliadCustomElementsDefine('sp-split-button',SplitButton);

const styles$e=r`:host{--spectrum-dragbar-gripper-width:var(
--spectrum-global-dimension-static-size-50
);--spectrum-dragbar-gripper-border-width-horizontal:3px;--spectrum-dragbar-handle-width:var(
--spectrum-global-dimension-static-size-25
);--spectrum-dragbar-gripper-border-radius:var(
--spectrum-alias-border-radius-small
);--spectrum-dragbar-gripper-height:var(
--spectrum-global-dimension-static-size-200
);--spectrum-dragbar-gripper-border-width-vertical:4px;--spectrum-panel-background-color:var(--spectrum-global-color-gray-100);--spectrum-dragbar-handle-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-dragbar-handle-background-color-hover:var(
--spectrum-global-color-gray-400
);--spectrum-dragbar-handle-background-color-down:var(
--spectrum-global-color-gray-800
);--spectrum-alias-focus-color:var(--spectrum-global-color-blue-400)}:host{--spectrum-splitview-vertical-width:100%;--spectrum-splitview-vertical-gripper-width:50%;--spectrum-splitview-vertical-gripper-outer-width:100%;--spectrum-splitview-vertical-gripper-reset:0}:host{display:flex;overflow:hidden}::slotted(*){height:100%}:host([dir=ltr]) #gripper{left:calc((var(--spectrum-dragbar-gripper-width,var(--spectrum-global-dimension-static-size-50)) + 2*var(--spectrum-dragbar-gripper-border-width-horizontal,3px) - var(--spectrum-dragbar-handle-width,var(--spectrum-global-dimension-static-size-25)))/ 2*-1)}:host([dir=rtl]) #gripper{right:calc((var(--spectrum-dragbar-gripper-width,var(--spectrum-global-dimension-static-size-50)) + 2*var(--spectrum-dragbar-gripper-border-width-horizontal,3px) - var(--spectrum-dragbar-handle-width,var(--spectrum-global-dimension-static-size-25)))/ 2*-1)}#gripper{border-radius:var(
--spectrum-dragbar-gripper-border-radius,var(--spectrum-alias-border-radius-small)
);border-style:solid;border-width:var(--spectrum-dragbar-gripper-border-width-vertical,4px) var(--spectrum-dragbar-gripper-border-width-horizontal,3px);content:"";display:block;height:var(
--spectrum-dragbar-gripper-height,var(--spectrum-global-dimension-static-size-200)
);position:absolute;top:50%;transform:translateY(-50%);width:var(
--spectrum-dragbar-gripper-width,var(--spectrum-global-dimension-static-size-50)
)}#splitter{height:100%;position:relative;-webkit-user-select:none;user-select:none;width:var(
--spectrum-dragbar-handle-width,var(--spectrum-global-dimension-static-size-25)
);z-index:1}:host([dir=ltr]) #splitter.is-collapsed-end #gripper:before,:host([dir=ltr]) #splitter.is-collapsed-start #gripper:before{left:calc(50% - var(--spectrum-dragbar-handle-width,var(--spectrum-global-dimension-static-size-25))/ 2)}:host([dir=rtl]) #splitter.is-collapsed-end #gripper:before,:host([dir=rtl]) #splitter.is-collapsed-start #gripper:before{right:calc(50% - var(--spectrum-dragbar-handle-width,var(--spectrum-global-dimension-static-size-25))/ 2)}#splitter.is-collapsed-end #gripper:before,#splitter.is-collapsed-start #gripper:before{content:"";height:100%;position:absolute;top:0;width:var(
--spectrum-dragbar-handle-width,var(--spectrum-global-dimension-static-size-25)
)}:host([dir=ltr]) #splitter.is-collapsed-start #gripper{left:0}:host([dir=rtl]) #splitter.is-collapsed-start #gripper{right:0}:host([dir=ltr]) #splitter.is-collapsed-end #gripper{right:0}:host([dir=rtl]) #splitter.is-collapsed-end #gripper{left:0}:host([dir=ltr]) #splitter.is-collapsed-end #gripper{left:auto}:host([dir=rtl]) #splitter.is-collapsed-end #gripper{right:auto}:host([vertical]){flex-direction:column}:host([vertical]) ::slotted(*){height:auto;width:var(--spectrum-splitview-vertical-width)}:host([dir=ltr][vertical]) #gripper{left:var(
--spectrum-splitview-vertical-gripper-width
)}:host([dir=rtl][vertical]) #gripper{right:var(
--spectrum-splitview-vertical-gripper-width
)}:host([vertical]) #gripper{border-width:var(--spectrum-dragbar-gripper-border-width-horizontal,3px) var(--spectrum-dragbar-gripper-border-width-vertical,4px);height:var(
--spectrum-dragbar-gripper-width,var(--spectrum-global-dimension-static-size-50)
);top:calc((var(--spectrum-dragbar-gripper-width,var(--spectrum-global-dimension-static-size-50)) + 2*var(--spectrum-dragbar-gripper-border-width-horizontal,3px) - var(--spectrum-dragbar-handle-width,var(--spectrum-global-dimension-static-size-25)))/ 2*-1);transform:translate(calc(-1*var(--spectrum-splitview-vertical-gripper-width)));width:var(
--spectrum-dragbar-gripper-height,var(--spectrum-global-dimension-static-size-200)
)}:host([vertical]) #splitter{height:var(
--spectrum-dragbar-handle-width,var(--spectrum-global-dimension-static-size-25)
);width:var(
--spectrum-splitview-vertical-width
)}:host([dir=ltr][vertical]) #splitter.is-collapsed-end #gripper,:host([dir=ltr][vertical]) #splitter.is-collapsed-start #gripper{left:var(
--spectrum-splitview-vertical-gripper-width
)}:host([dir=rtl][vertical]) #splitter.is-collapsed-end #gripper,:host([dir=rtl][vertical]) #splitter.is-collapsed-start #gripper{right:var(
--spectrum-splitview-vertical-gripper-width
)}:host([dir=ltr][vertical]) #splitter.is-collapsed-end #gripper:before,:host([dir=ltr][vertical]) #splitter.is-collapsed-start #gripper:before{left:var(
--spectrum-splitview-vertical-gripper-reset
)}:host([dir=rtl][vertical]) #splitter.is-collapsed-end #gripper:before,:host([dir=rtl][vertical]) #splitter.is-collapsed-start #gripper:before{right:var(
--spectrum-splitview-vertical-gripper-reset
)}:host([vertical]) #splitter.is-collapsed-end #gripper:before,:host([vertical]) #splitter.is-collapsed-start #gripper:before{height:var(
--spectrum-dragbar-handle-width,var(--spectrum-global-dimension-static-size-25)
);top:calc(var(--spectrum-splitview-vertical-gripper-width) - var(--spectrum-dragbar-handle-width,var(--spectrum-global-dimension-static-size-25))/ 2);width:var(--spectrum-splitview-vertical-gripper-outer-width)}:host([vertical]) #splitter.is-collapsed-start #gripper{top:var(
--spectrum-splitview-vertical-gripper-reset
)}:host([vertical]) #splitter.is-collapsed-end #gripper{bottom:var(--spectrum-splitview-vertical-gripper-reset);top:auto}::slotted(*){background-color:var(
--spectrum-panel-background-color,var(--spectrum-global-color-gray-100)
)}#splitter{background-color:var(
--spectrum-dragbar-handle-background-color,var(--spectrum-global-color-gray-300)
)}#gripper{border-color:var(
--spectrum-dragbar-handle-background-color,var(--spectrum-global-color-gray-300)
)}#gripper:before{background-color:var(
--spectrum-dragbar-handle-background-color,var(--spectrum-global-color-gray-300)
)}:host([resizable]) #splitter.is-hovered,:host([resizable]) #splitter:hover{background-color:var(
--spectrum-dragbar-handle-background-color-hover,var(--spectrum-global-color-gray-400)
)}:host([resizable]) #splitter.is-hovered #gripper,:host([resizable]) #splitter:hover #gripper{border-color:var(
--spectrum-dragbar-handle-background-color-hover,var(--spectrum-global-color-gray-400)
)}:host([resizable]) #splitter.is-hovered #gripper:before,:host([resizable]) #splitter:hover #gripper:before{background-color:var(
--spectrum-dragbar-handle-background-color-hover,var(--spectrum-global-color-gray-400)
)}:host([resizable]) #splitter.is-active,:host([resizable]) #splitter:active{background-color:var(
--spectrum-dragbar-handle-background-color-down,var(--spectrum-global-color-gray-800)
)}:host([resizable]) #splitter.is-active #gripper,:host([resizable]) #splitter:active #gripper{border-color:var(
--spectrum-dragbar-handle-background-color-down,var(--spectrum-global-color-gray-800)
)}:host([resizable]) #splitter.is-active #gripper:before,:host([resizable]) #splitter:active #gripper:before{background-color:var(
--spectrum-dragbar-handle-background-color-down,var(--spectrum-global-color-gray-800)
)}:host([resizable]) #splitter:focus{outline:0}:host([resizable]) #splitter.focus-visible{background-color:var(
--spectrum-alias-focus-color,var(--spectrum-global-color-blue-400)
)}:host([resizable]) #splitter:focus-visible{background-color:var(
--spectrum-alias-focus-color,var(--spectrum-global-color-blue-400)
)}:host([resizable]) #splitter.focus-visible #gripper{border-color:var(
--spectrum-alias-focus-color,var(--spectrum-global-color-blue-400)
);box-shadow:0 0 0 1px var(--spectrum-alias-focus-color,var(--spectrum-global-color-blue-400))}:host([resizable]) #splitter:focus-visible #gripper{border-color:var(
--spectrum-alias-focus-color,var(--spectrum-global-color-blue-400)
);box-shadow:0 0 0 1px var(--spectrum-alias-focus-color,var(--spectrum-global-color-blue-400))}:host([resizable]) #splitter.focus-visible #gripper:before{background-color:var(
--spectrum-alias-focus-color,var(--spectrum-global-color-blue-400)
)}:host([resizable]) #splitter:focus-visible #gripper:before{background-color:var(
--spectrum-alias-focus-color,var(--spectrum-global-color-blue-400)
)}:host{--spectrum-split-view-first-pane-size:50%}::slotted(*){overflow:auto}::slotted(:first-child){order:1}:host(:not([vertical])) ::slotted(:first-child:not(:last-child)){width:var(--spectrum-split-view-first-pane-size)}:host([vertical]) ::slotted(:first-child:not(:last-child)){height:var(--spectrum-split-view-first-pane-size)}::slotted(:nth-child(2)){flex:1;order:3}::slotted(:nth-child(n+3)){display:none}#splitter{height:auto;order:2}:host([resizable]) #splitter{background-clip:content-box;cursor:ew-resize;margin:0 calc(-1*var(--spectrum-global-dimension-static-size-125));padding:0 var(--spectrum-global-dimension-static-size-125)}:host([vertical][resizable]) #splitter{background-clip:content-box;cursor:ns-resize;margin:calc(-1*var(--spectrum-global-dimension-static-size-125)) 0;padding:var(--spectrum-global-dimension-static-size-125) 0}:host([resizable][dir=ltr]) #splitter.is-resized-start,:host([resizable][dir=rtl]) #splitter.is-resized-end{cursor:e-resize}:host([resizable][dir=ltr]) #splitter.is-resized-end,:host([resizable][dir=rtl]) #splitter.is-resized-start{cursor:w-resize}:host([vertical][resizable]) #splitter.is-resized-start{cursor:s-resize}:host([vertical][resizable]) #splitter.is-resized-end{cursor:n-resize}:host([resizable][collapsible]) #splitter.is-resized-end,:host([resizable][collapsible]) #splitter.is-resized-start{cursor:ew-resize}:host([resizable][dir=ltr][collapsible]) #splitter.is-collapsed-start,:host([resizable][dir=rtl][collapsible]) #splitter.is-collapsed-end{cursor:e-resize}:host([resizable][dir=ltr][collapsible]) #splitter.is-collapsed-end,:host([resizable][dir=rtl][collapsible]) #splitter.is-collapsed-start{cursor:w-resize}:host([vertical][resizable][collapsible]) #splitter.is-collapsed-start{cursor:s-resize}:host([vertical][resizable][collapsible]) #splitter.is-collapsed-end{cursor:n-resize}:host([vertical][resizable][collapsible]) #splitter.is-resized-end,:host([vertical][resizable][collapsible]) #splitter.is-resized-start{cursor:ns-resize}:host([dir=ltr][resizable]) #gripper{left:calc(var(--spectrum-global-dimension-static-size-125) + (var(--spectrum-dragbar-gripper-width,var(--spectrum-global-dimension-static-size-50)) + 2*var(--spectrum-dragbar-gripper-border-width-horizontal,3px) - var(--spectrum-dragbar-handle-width,var(--spectrum-global-dimension-static-size-25)))/ 2*-1)}:host([dir=rtl][resizable]) #gripper{right:calc(var(--spectrum-global-dimension-static-size-125) + (var(--spectrum-dragbar-gripper-width,var(--spectrum-global-dimension-static-size-50)) + 2*var(--spectrum-dragbar-gripper-border-width-horizontal,3px) - var(--spectrum-dragbar-handle-width,var(--spectrum-global-dimension-static-size-25)))/ 2*-1)}:host([vertical][resizable]) #gripper{left:50%;margin-top:var(--spectrum-global-dimension-static-size-125);right:50%}:host([dir=ltr][resizable]) #splitter.is-collapsed-start #gripper{left:var(--spectrum-global-dimension-static-size-125)}:host([dir=rtl][resizable]) #splitter.is-collapsed-start #gripper{right:var(--spectrum-global-dimension-static-size-125)}:host([vertical][resizable]) #splitter.is-collapsed-start #gripper{left:50%;right:50%}:host([dir=ltr][resizable]) #splitter.is-collapsed-end #gripper{left:var(--spectrum-global-dimension-static-size-25)}:host([dir=rtl][resizable]) #splitter.is-collapsed-end #gripper{right:var(--spectrum-global-dimension-static-size-25)}:host([vertical][resizable]) #splitter.is-collapsed-end #gripper{left:50%;margin-top:0;right:50%;top:var(--spectrum-global-dimension-static-size-25)}`;

const DEFAULT_MAX_SIZE=3840;const SPLITTERSIZE=2;const ARROW_KEY_CHANGE_VALUE=10;const PAGEUPDOWN_KEY_CHANGE_VALUE=50;const COLLAPSE_THREASHOLD=50;/**
 * @element sp-split-view
 *
 * @slot Two sibling elements to be sized by the element attritubes
 */class SplitView extends SpectrumElement{constructor(){super();this.vertical=false;this.resizable=false;this.collapsible=false;/** The minimum size of the primary pane */this.primaryMin=0;/** The maximum size of the primary pane */this.primaryMax=DEFAULT_MAX_SIZE;/** The minimum size of the secondary pane */this.secondaryMin=0;/** The maximum size of the secondary pane */this.secondaryMax=DEFAULT_MAX_SIZE;/** The current size of first pane of split-view */this.firstPaneSize='auto';this.enoughChildren=false;this.viewSize=0;this.offset=0;this.minPos=0;this.maxPos=DEFAULT_MAX_SIZE;const RO=window.ResizeObserver;if(RO){this.observer=new RO(()=>{this.rect=undefined;this.updateMinMax();});}}static get styles(){return [styles$e];}connectedCallback(){var _a;super.connectedCallback();(_a=this.observer)===null||_a===void 0?void 0:_a.observe(this);}disconnectedCallback(){var _a;(_a=this.observer)===null||_a===void 0?void 0:_a.unobserve(this);super.disconnectedCallback();}/**
     * @private
     **/get splitterSize(){if(!this._splitterSize){this._splitterSize=this.splitter&&Math.round(parseFloat(window.getComputedStyle(this.splitter).getPropertyValue(this.vertical?'height':'width')))||SPLITTERSIZE;}return this._splitterSize;}render(){const splitterClasses={'is-resized-start':this.splitterPos===this.minPos,'is-resized-end':this.splitterPos&&this.splitterPos>this.splitterSize&&this.splitterPos===this.maxPos,'is-collapsed-start':this.splitterPos===0,'is-collapsed-end':this.splitterPos&&this.splitterPos>=Math.max(this.splitterSize,this.viewSize-this.splitterSize)};return p`<slot @slotchange="${this.onContentSlotChange}" style="--spectrum-split-view-first-pane-size:${this.firstPaneSize}"></slot>${this.enoughChildren?p`<div id="splitter" class="${o$1(splitterClasses)}" role="separator" aria-label="${l(this.label||undefined)}" tabindex="${l(this.resizable?'0':undefined)}" @keydown="${this.onKeydown}" ${streamingListener({start:['pointerdown',this.onPointerdown],streamInside:['pointermove',this.onPointermove],end:[['pointerup','pointercancel'],this.onPointerup]})}>${this.resizable?p`<div id="gripper"></div>`:p``}</div>`:T}`;}onContentSlotChange(){this.enoughChildren=this.children.length>1;this.checkResize();}onPointerdown(event){if(!this.resizable||event.button&&event.button!==0){event.preventDefault();return;}this.splitter.setPointerCapture(event.pointerId);this.offset=this.getOffset();}onPointermove(event){event.preventDefault();let pos=this.vertical||this.isLTR?this.getPosition(event)-this.offset:this.offset-this.getPosition(event);if(this.collapsible&&pos<this.minPos-COLLAPSE_THREASHOLD){pos=0;}if(this.collapsible&&pos>this.maxPos+COLLAPSE_THREASHOLD){pos=this.viewSize-this.splitterSize;}this.updatePosition(pos);}onPointerup(event){this.splitter.releasePointerCapture(event.pointerId);}getOffset(){if(!this.rect){this.rect=this.getBoundingClientRect();}const offsetX=this.isLTR?this.rect.left:this.rect.right;return this.vertical?this.rect.top:offsetX;}getPosition(event){return this.vertical?event.clientY:event.clientX;}movePosition(event,offset){event.preventDefault();if(this.splitterPos!==undefined){this.updatePosition(this.splitterPos+offset);}}onKeydown(event){if(!this.resizable){return;}let direction=0;const isLTRorVertical=this.isLTR||this.vertical;switch(event.key){case'Home':event.preventDefault();this.updatePosition(this.collapsible?0:this.minPos);return;case'End':event.preventDefault();this.updatePosition(this.collapsible?this.viewSize-this.splitterSize:this.maxPos);return;case'ArrowLeft':direction=isLTRorVertical?-1:1;break;case'ArrowRight':direction=isLTRorVertical?1:-1;break;case'ArrowUp':direction=this.vertical?-1:1;break;case'ArrowDown':direction=this.vertical?1:-1;break;case'PageUp':direction=this.vertical?-1:1;break;case'PageDown':direction=this.vertical?1:-1;break;}if(direction!==0){const moveBy=event.key.startsWith('Page')?PAGEUPDOWN_KEY_CHANGE_VALUE:ARROW_KEY_CHANGE_VALUE;this.movePosition(event,moveBy*direction);}}async checkResize(){if(!this.enoughChildren){return;}this.updateMinMax();if(this.splitterPos===undefined){const startPos=await this.calcStartPos();this.updatePosition(startPos);}}updateMinMax(){this.viewSize=this.vertical?this.offsetHeight:this.offsetWidth;this.minPos=Math.max(this.primaryMin,this.viewSize-this.secondaryMax);this.maxPos=Math.min(this.primaryMax,this.viewSize-Math.max(this.secondaryMin,this.splitterSize));}updatePosition(x){let pos=this.getLimitedPosition(x);if(this.collapsible&&x<=0){pos=0;}if(this.collapsible&&x>this.maxPos&&x>=this.viewSize-this.splitterSize){pos=this.viewSize-this.splitterSize;}if(pos!==this.splitterPos){this.splitterPos=pos;this.dispatchChangeEvent();}}getLimitedPosition(input){if(input<=this.minPos){return this.minPos;}if(input>=this.maxPos){return this.maxPos;}return Math.max(this.minPos,Math.min(this.maxPos,input));}async calcStartPos(){if(this.primarySize!==undefined&&/^\d+(px)?$/.test(this.primarySize)){return parseInt(this.primarySize,10);}if(this.primarySize!==undefined&&/^\d+%$/.test(this.primarySize)){return parseInt(this.primarySize,10)*this.viewSize/100;}if(this.primarySize==='auto'){this.firstPaneSize='auto';const nodes=this.paneSlot.assignedNodes({flatten:true});const firstEl=nodes.find(node=>node instanceof HTMLElement);if(typeof firstEl.updateComplete!=='undefined'){await firstEl.updateComplete;}if(firstEl){const size=window.getComputedStyle(firstEl).getPropertyValue(this.vertical?'height':'width');const size_i=parseFloat(size);if(!isNaN(size_i)){return this.getLimitedPosition(Math.ceil(size_i));}}}return this.viewSize/2;}dispatchChangeEvent(){const changeEvent=new Event('change',{bubbles:true,composed:true});this.dispatchEvent(changeEvent);}firstUpdated(changed){super.firstUpdated(changed);this.checkResize();}updated(changed){super.updated(changed);if(changed.has('primarySize')){this.splitterPos=undefined;this.checkResize();}if(changed.has('splitterPos')&&this.splitterPos!==undefined&&this.enoughChildren){this.firstPaneSize=`${Math.round(this.splitterPos)}px`;}}}__decorate([e({type:Boolean,reflect:true})],SplitView.prototype,"vertical",void 0);__decorate([e({type:Boolean,reflect:true})],SplitView.prototype,"resizable",void 0);__decorate([e({type:Boolean,reflect:true})],SplitView.prototype,"collapsible",void 0);__decorate([e({type:Number,attribute:'primary-min'})],SplitView.prototype,"primaryMin",void 0);__decorate([e({type:Number,attribute:'primary-max'})],SplitView.prototype,"primaryMax",void 0);__decorate([e({type:String,attribute:'primary-size'})],SplitView.prototype,"primarySize",void 0);__decorate([e({type:Number,attribute:'secondary-min'})],SplitView.prototype,"secondaryMin",void 0);__decorate([e({type:Number,attribute:'secondary-max'})],SplitView.prototype,"secondaryMax",void 0);__decorate([e({type:Number,reflect:true,attribute:'splitter-pos'})],SplitView.prototype,"splitterPos",void 0);__decorate([e({type:String,attribute:false})],SplitView.prototype,"firstPaneSize",void 0);__decorate([e()],SplitView.prototype,"label",void 0);__decorate([e({type:Boolean,attribute:false})],SplitView.prototype,"enoughChildren",void 0);__decorate([e({type:Number})],SplitView.prototype,"viewSize",void 0);__decorate([i('slot')],SplitView.prototype,"paneSlot",void 0);__decorate([i('#splitter')],SplitView.prototype,"splitter",void 0);

iliadCustomElementsDefine('sp-split-view',SplitView);

const styles$d=r`:host{--spectrum-statuslight-info-s-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-statuslight-info-s-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-statuslight-info-s-text-size:var(
--spectrum-alias-item-text-size-s
);--spectrum-statuslight-info-s-dot-size:var(
--spectrum-alias-item-control-1-size-s
);--spectrum-statuslight-info-s-text-gap:var(
--spectrum-alias-item-control-gap-s
);--spectrum-statuslight-info-s-height:var(--spectrum-alias-item-height-s);--spectrum-statuslight-info-m-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-statuslight-info-m-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-statuslight-info-m-text-size:var(
--spectrum-alias-item-text-size-m
);--spectrum-statuslight-info-m-dot-size:var(
--spectrum-alias-item-control-1-size-m
);--spectrum-statuslight-info-m-text-gap:var(
--spectrum-alias-item-control-gap-m
);--spectrum-statuslight-info-m-height:var(--spectrum-alias-item-height-m);--spectrum-statuslight-info-l-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-statuslight-info-l-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-statuslight-info-l-text-size:var(
--spectrum-alias-item-text-size-l
);--spectrum-statuslight-info-l-dot-size:var(
--spectrum-alias-item-control-1-size-l
);--spectrum-statuslight-info-l-text-gap:var(
--spectrum-alias-item-control-gap-l
);--spectrum-statuslight-info-l-height:var(--spectrum-alias-item-height-l);--spectrum-statuslight-info-xl-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-statuslight-info-xl-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-statuslight-info-xl-text-size:var(
--spectrum-alias-item-text-size-xl
);--spectrum-statuslight-info-xl-dot-size:var(
--spectrum-alias-item-control-1-size-xl
);--spectrum-statuslight-info-xl-text-gap:var(
--spectrum-alias-item-control-gap-xl
);--spectrum-statuslight-info-xl-height:var(--spectrum-alias-item-height-xl);--spectrum-statuslight-info-m-text-color:var(--spectrum-alias-text-color);--spectrum-statuslight-info-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-statuslight-info-m-dot-color-disabled:var(
--spectrum-global-color-gray-400
);--spectrum-statuslight-negative-m-dot-color:var(
--spectrum-semantic-negative-color-status
);--spectrum-statuslight-notice-m-dot-color:var(
--spectrum-semantic-notice-color-status
);--spectrum-statuslight-positive-m-dot-color:var(
--spectrum-semantic-positive-color-status
);--spectrum-statuslight-info-m-dot-color:var(
--spectrum-semantic-informative-color-status
);--spectrum-statuslight-neutral-m-text-color:var(
--spectrum-alias-label-text-color
);--spectrum-statuslight-neutral-m-dot-color:var(
--spectrum-global-color-gray-500
);--spectrum-statuslight-celery-m-dot-color:var(
--spectrum-global-color-celery-400
);--spectrum-statuslight-yellow-m-dot-color:var(
--spectrum-global-color-yellow-400
);--spectrum-statuslight-fuchsia-m-dot-color:var(
--spectrum-global-color-fuchsia-400
);--spectrum-statuslight-indigo-m-dot-color:var(
--spectrum-global-color-indigo-400
);--spectrum-statuslight-seafoam-m-dot-color:var(
--spectrum-global-color-seafoam-400
);--spectrum-statuslight-chartreuse-m-dot-color:var(
--spectrum-global-color-chartreuse-400
);--spectrum-statuslight-magenta-m-dot-color:var(
--spectrum-global-color-magenta-400
);--spectrum-statuslight-purple-m-dot-color:var(
--spectrum-global-color-purple-400
)}:host([size=s]){--spectrum-statuslight-info-text-font-weight:var(
--spectrum-statuslight-info-s-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-statuslight-info-text-line-height:var(
--spectrum-statuslight-info-s-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-statuslight-info-text-size:var(
--spectrum-statuslight-info-s-text-size,var(--spectrum-alias-item-text-size-s)
);--spectrum-statuslight-info-dot-size:var(
--spectrum-statuslight-info-s-dot-size,var(--spectrum-alias-item-control-1-size-s)
);--spectrum-statuslight-info-text-gap:var(
--spectrum-statuslight-info-s-text-gap,var(--spectrum-alias-item-control-gap-s)
);--spectrum-statuslight-info-height:var(
--spectrum-statuslight-info-s-height,var(--spectrum-alias-item-height-s)
)}:host([size=m]){--spectrum-statuslight-info-text-font-weight:var(
--spectrum-statuslight-info-m-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-statuslight-info-text-line-height:var(
--spectrum-statuslight-info-m-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-statuslight-info-text-size:var(
--spectrum-statuslight-info-m-text-size,var(--spectrum-alias-item-text-size-m)
);--spectrum-statuslight-info-dot-size:var(
--spectrum-statuslight-info-m-dot-size,var(--spectrum-alias-item-control-1-size-m)
);--spectrum-statuslight-info-text-gap:var(
--spectrum-statuslight-info-m-text-gap,var(--spectrum-alias-item-control-gap-m)
);--spectrum-statuslight-info-height:var(
--spectrum-statuslight-info-m-height,var(--spectrum-alias-item-height-m)
)}:host([size=l]){--spectrum-statuslight-info-text-font-weight:var(
--spectrum-statuslight-info-l-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-statuslight-info-text-line-height:var(
--spectrum-statuslight-info-l-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-statuslight-info-text-size:var(
--spectrum-statuslight-info-l-text-size,var(--spectrum-alias-item-text-size-l)
);--spectrum-statuslight-info-dot-size:var(
--spectrum-statuslight-info-l-dot-size,var(--spectrum-alias-item-control-1-size-l)
);--spectrum-statuslight-info-text-gap:var(
--spectrum-statuslight-info-l-text-gap,var(--spectrum-alias-item-control-gap-l)
);--spectrum-statuslight-info-height:var(
--spectrum-statuslight-info-l-height,var(--spectrum-alias-item-height-l)
)}:host([size=xl]){--spectrum-statuslight-info-text-font-weight:var(
--spectrum-statuslight-info-xl-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-statuslight-info-text-line-height:var(
--spectrum-statuslight-info-xl-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-statuslight-info-text-size:var(
--spectrum-statuslight-info-xl-text-size,var(--spectrum-alias-item-text-size-xl)
);--spectrum-statuslight-info-dot-size:var(
--spectrum-statuslight-info-xl-dot-size,var(--spectrum-alias-item-control-1-size-xl)
);--spectrum-statuslight-info-text-gap:var(
--spectrum-statuslight-info-xl-text-gap,var(--spectrum-alias-item-control-gap-xl)
);--spectrum-statuslight-info-height:var(
--spectrum-statuslight-info-xl-height,var(--spectrum-alias-item-height-xl)
)}:host([dir]){--spectrum-statuslight-info-padding-y:var(
--spectrum-global-dimension-size-65
);--spectrum-statuslight-info-text-line-height:1.44;--spectrum-statuslight-info-padding-top:calc(var(--spectrum-statuslight-info-padding-y) - 1px);--spectrum-statuslight-info-padding-bottom:calc(var(--spectrum-statuslight-info-padding-y) + 1px)}:host([dir]){align-items:flex-start;box-sizing:border-box;display:flex;flex-direction:row;font-size:var(--spectrum-statuslight-info-text-size);font-weight:var(--spectrum-statuslight-info-text-font-weight);line-height:var(--spectrum-statuslight-info-text-line-height);min-height:var(
--spectrum-statuslight-info-height
);padding-bottom:var(--spectrum-statuslight-info-padding-bottom);padding-left:0;padding-right:0;padding-top:var(--spectrum-statuslight-info-padding-top)}:host:before{-ms-high-contrast-adjust:none;border-radius:50%;content:"";display:inline-block;flex-grow:0;flex-shrink:0;forced-color-adjust:none;height:var(--spectrum-statuslight-info-dot-size);margin:var(--spectrum-statuslight-info-padding-bottom) var(--spectrum-statuslight-info-text-gap) var(--spectrum-statuslight-info-padding-top);width:var(--spectrum-statuslight-info-dot-size)}:host([variant=neutral]){font-style:italic}:host([dir]){color:var(
--spectrum-statuslight-info-m-text-color,var(--spectrum-alias-text-color)
)}:host([disabled]){color:var(
--spectrum-statuslight-info-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([disabled]):before{background-color:var(
--spectrum-statuslight-info-m-dot-color-disabled,var(--spectrum-global-color-gray-400)
)}:host([variant=negative]):before{background-color:var(
--spectrum-statuslight-negative-m-dot-color,var(--spectrum-semantic-negative-color-status)
)}:host([variant=notice]):before{background-color:var(
--spectrum-statuslight-notice-m-dot-color,var(--spectrum-semantic-notice-color-status)
)}:host([variant=positive]):before{background-color:var(
--spectrum-statuslight-positive-m-dot-color,var(--spectrum-semantic-positive-color-status)
)}:host([active]):before,:host([variant=info]):before{background-color:var(
--spectrum-statuslight-info-m-dot-color,var(--spectrum-semantic-informative-color-status)
)}:host([variant=neutral]){color:var(
--spectrum-statuslight-neutral-m-text-color,var(--spectrum-alias-label-text-color)
)}:host([variant=neutral]):before{background-color:var(
--spectrum-statuslight-neutral-m-dot-color,var(--spectrum-global-color-gray-500)
)}:host([variant=celery]):before{background-color:var(
--spectrum-statuslight-celery-m-dot-color,var(--spectrum-global-color-celery-400)
)}:host([variant=yellow]):before{background-color:var(
--spectrum-statuslight-yellow-m-dot-color,var(--spectrum-global-color-yellow-400)
)}:host([variant=fuchsia]):before{background-color:var(
--spectrum-statuslight-fuchsia-m-dot-color,var(--spectrum-global-color-fuchsia-400)
)}:host([variant=indigo]):before{background-color:var(
--spectrum-statuslight-indigo-m-dot-color,var(--spectrum-global-color-indigo-400)
)}:host([variant=seafoam]):before{background-color:var(
--spectrum-statuslight-seafoam-m-dot-color,var(--spectrum-global-color-seafoam-400)
)}:host([variant=chartreuse]):before{background-color:var(
--spectrum-statuslight-chartreuse-m-dot-color,var(--spectrum-global-color-chartreuse-400)
)}:host([variant=magenta]):before{background-color:var(
--spectrum-statuslight-magenta-m-dot-color,var(--spectrum-global-color-magenta-400)
)}:host([variant=purple]):before{background-color:var(
--spectrum-statuslight-purple-m-dot-color,var(--spectrum-global-color-purple-400)
)}:host([disabled]):before{background-color:var(
--spectrum-statuslight-dot-color-disabled,var(--spectrum-global-color-gray-400)
)}`;

/**
 * @element sp-status-light
 *
 * @slot - text label of the Status Light
 */class StatusLight extends SizedMixin(SpectrumElement){constructor(){super(...arguments);/**
         * A status light in a disabled state shows that a status exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that a status may become available later.
         */this.disabled=false;/**
         * The visual variant to apply to this status light.
         */this.variant='info';}static get styles(){return [styles$d];}render(){return p`<slot></slot>`;}updated(changes){super.updated(changes);if(changes.has('disabled')){if(this.disabled){this.setAttribute('aria-disabled','true');}else {this.removeAttribute('aria-disabled');}}}}__decorate([e({type:Boolean,reflect:true})],StatusLight.prototype,"disabled",void 0);__decorate([e({reflect:true})],StatusLight.prototype,"variant",void 0);

iliadCustomElementsDefine('sp-status-light',StatusLight);

const styles$c=r`:host{--spectrum-switch-m-handle-border-size:var(
--spectrum-alias-border-size-thick
);--spectrum-switch-m-cursor-hit-x:var(--spectrum-global-dimension-size-100);--spectrum-switch-m-text-size:var(--spectrum-alias-item-text-size-m);--spectrum-switch-m-height:var(--spectrum-alias-item-height-m);--spectrum-switch-m-track-height:var(
--spectrum-alias-item-control-3-height-m
);--spectrum-switch-m-track-width:var(
--spectrum-alias-item-control-3-width-m
);--spectrum-switch-m-handle-size:var(
--spectrum-alias-item-control-2-size-m
);--spectrum-switch-m-text-gap:var(--spectrum-alias-item-control-gap-m);--spectrum-alias-focus-ring-gap:var(
--spectrum-global-dimension-static-size-25
);--spectrum-switch-m-track-color:var(--spectrum-global-color-gray-300);--spectrum-switch-m-handle-background-color:var(
--spectrum-global-color-gray-75
);--spectrum-switch-m-handle-border-color:var(
--spectrum-global-color-gray-600
);--spectrum-switch-m-text-color:var(--spectrum-alias-text-color);--spectrum-switch-m-track-color-selected:var(
--spectrum-global-color-gray-700
);--spectrum-switch-m-handle-border-color-selected:var(
--spectrum-global-color-gray-700
);--spectrum-switch-m-handle-border-color-hover:var(
--spectrum-global-color-gray-700
);--spectrum-switch-m-text-color-hover:var(
--spectrum-alias-text-color-hover
);--spectrum-switch-m-track-color-selected-hover:var(
--spectrum-global-color-gray-800
);--spectrum-switch-m-handle-border-color-selected-hover:var(
--spectrum-global-color-gray-800
);--spectrum-switch-m-handle-border-color-down:var(
--spectrum-global-color-gray-800
);--spectrum-switch-m-text-color-down:var(--spectrum-alias-text-color-down);--spectrum-switch-m-track-color-selected-down:var(
--spectrum-global-color-gray-900
);--spectrum-switch-m-handle-border-color-selected-down:var(
--spectrum-global-color-gray-900
);--spectrum-switch-m-track-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-switch-m-handle-border-color-disabled:var(
--spectrum-global-color-gray-400
);--spectrum-switch-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-switch-m-track-color-selected-disabled:var(
--spectrum-global-color-gray-400
);--spectrum-switch-m-handle-border-color-selected-disabled:var(
--spectrum-global-color-gray-400
);--spectrum-switch-m-text-color-selected-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-switch-m-emphasized-track-color-selected:var(
--spectrum-global-color-blue-500
);--spectrum-switch-m-emphasized-handle-border-color-selected:var(
--spectrum-global-color-blue-500
);--spectrum-switch-m-emphasized-track-color-selected-hover:var(
--spectrum-global-color-blue-600
);--spectrum-switch-m-emphasized-handle-border-color-selected-hover:var(
--spectrum-global-color-blue-600
);--spectrum-switch-m-emphasized-track-color-selected-down:var(
--spectrum-global-color-blue-700
);--spectrum-switch-m-emphasized-handle-border-color-selected-down:var(
--spectrum-global-color-blue-700
);--spectrum-switch-m-focus-ring-size-key-focus:var(
--spectrum-alias-focus-ring-size
);--spectrum-switch-m-focus-ring-color-key-focus:var(
--spectrum-alias-focus-ring-color
);--spectrum-switch-m-handle-border-color-key-focus:var(
--spectrum-global-color-gray-700
);--spectrum-switch-m-track-color-selected-key-focus:var(
--spectrum-global-color-gray-800
);--spectrum-switch-m-handle-border-color-selected-key-focus:var(
--spectrum-global-color-gray-800
);--spectrum-switch-m-emphasized-track-color-selected-key-focus:var(
--spectrum-global-color-blue-600
);--spectrum-switch-m-emphasized-handle-border-color-selected-key-focus:var(
--spectrum-global-color-blue-600
)}:host{--spectrum-switch-handle-border-radius:var(
--spectrum-switch-m-handle-border-radius
);--spectrum-switch-handle-border-size:var(
--spectrum-switch-m-handle-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-switch-cursor-hit-x:var(
--spectrum-switch-m-cursor-hit-x,var(--spectrum-global-dimension-size-100)
);--spectrum-switch-text-size:var(
--spectrum-switch-m-text-size,var(--spectrum-alias-item-text-size-m)
);--spectrum-switch-height:var(
--spectrum-switch-m-height,var(--spectrum-alias-item-height-m)
);--spectrum-switch-track-height:var(
--spectrum-switch-m-track-height,var(--spectrum-alias-item-control-3-height-m)
);--spectrum-switch-track-width:var(
--spectrum-switch-m-track-width,var(--spectrum-alias-item-control-3-width-m)
);--spectrum-switch-handle-size:var(
--spectrum-switch-m-handle-size,var(--spectrum-alias-item-control-2-size-m)
);--spectrum-switch-text-gap:var(
--spectrum-switch-m-text-gap,var(--spectrum-alias-item-control-gap-m)
);--spectrum-switch-label-margin-top:var(
--spectrum-global-dimension-size-65
);--spectrum-switch-label-line-height:1.49}:host([dir=ltr]){margin-right:calc(var(--spectrum-switch-cursor-hit-x)*2)}:host([dir=rtl]){margin-left:calc(var(--spectrum-switch-cursor-hit-x)*2)}:host{align-items:flex-start;display:inline-flex;max-width:100%;min-height:var(--spectrum-switch-height);position:relative;vertical-align:top}:host([dir=ltr]) #input{left:0}:host([dir=rtl]) #input{right:0}#input{box-sizing:border-box;cursor:pointer;height:100%;margin:0;opacity:.0001;padding:0;position:absolute;top:0;width:100%;z-index:1}:host([dir=ltr][checked]) #input+#switch:before{transform:translateX(calc(var(--spectrum-switch-track-width) - 100%))}:host([dir=rtl][checked]) #input+#switch:before{transform:translateX(calc(-1*(var(--spectrum-switch-track-width) - 100%)))}#input[disabled],:host([disabled]) #input{cursor:default}#input.focus-visible+#switch:after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}#input:focus-visible+#switch:after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}#label{font-size:var(--spectrum-switch-text-size);line-height:var(--spectrum-switch-label-line-height);margin-bottom:0;margin-left:var(--spectrum-switch-text-gap);margin-right:var(--spectrum-switch-text-gap);margin-top:var(--spectrum-switch-label-margin-top);transition:color var(--spectrum-global-animation-duration-200,.16s) ease-in-out}:host([dir=ltr]) #switch{left:0}:host([dir=rtl]) #switch{right:0}:host([dir=ltr]) #switch{right:0}:host([dir=rtl]) #switch{left:0}#switch{border-radius:calc(var(--spectrum-switch-track-height)/2);box-sizing:border-box;display:inline-block;flex-grow:0;flex-shrink:0;height:var(--spectrum-switch-track-height);margin-bottom:calc((var(--spectrum-switch-height) - var(--spectrum-switch-track-height))/ 2);margin-left:0;margin-right:0;margin-top:calc((var(--spectrum-switch-height) - var(--spectrum-switch-track-height))/ 2);position:relative;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border var(--spectrum-global-animation-duration-100,.13s) ease-in-out;vertical-align:middle;width:var(--spectrum-switch-track-width)}#switch:before{box-sizing:border-box;content:"";display:block;position:absolute}:host([dir=ltr]) #switch:before{left:0}:host([dir=rtl]) #switch:before{right:0}#switch:before{border-radius:var(--spectrum-switch-handle-border-radius);border-style:solid;border-width:var(--spectrum-switch-handle-border-size);height:var(--spectrum-switch-handle-size);top:0;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border var(--spectrum-global-animation-duration-100,.13s) ease-in-out,transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;width:var(--spectrum-switch-handle-size)}:host([dir=ltr]) #switch:after{left:0}:host([dir=rtl]) #switch:after{right:0}:host([dir=ltr]) #switch:after{right:0}:host([dir=rtl]) #switch:after{left:0}#switch:after{border-radius:calc(var(--spectrum-switch-track-height) + var(--spectrum-alias-focus-ring-gap,var(--spectrum-global-dimension-static-size-25)));bottom:0;content:"";display:block;margin:0;position:absolute;top:0;transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}#switch{background-color:var(
--spectrum-switch-m-track-color,var(--spectrum-global-color-gray-300)
)}#switch:before{background-color:var(
--spectrum-switch-m-handle-background-color,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-switch-m-handle-border-color,var(--spectrum-global-color-gray-600)
)}#input~#label{color:var(
--spectrum-switch-m-text-color,var(--spectrum-alias-text-color)
)}:host([checked]) #input+#switch{background-color:var(
--spectrum-switch-m-track-color-selected,var(--spectrum-global-color-gray-700)
)}:host([checked]) #input+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected,var(--spectrum-global-color-gray-700)
)}:host(:hover) #input+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-hover,var(--spectrum-global-color-gray-700)
);box-shadow:none}:host(:hover) #input~#label{color:var(
--spectrum-switch-m-text-color-hover,var(--spectrum-alias-text-color-hover)
)}:host(:hover[checked]) #input:enabled+#switch{background-color:var(
--spectrum-switch-m-track-color-selected-hover,var(--spectrum-global-color-gray-800)
)}:host(:hover[checked]) #input:enabled+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected-hover,var(--spectrum-global-color-gray-800)
)}:host(:active) #input+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-down,var(--spectrum-global-color-gray-800)
)}:host(:active) #input~#label{color:var(
--spectrum-switch-m-text-color-down,var(--spectrum-alias-text-color-down)
)}:host(:active[checked]) #input:enabled+#switch{background-color:var(
--spectrum-switch-m-track-color-selected-down,var(--spectrum-global-color-gray-900)
)}:host(:active[checked]) #input:enabled+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected-down,var(--spectrum-global-color-gray-900)
)}:host([disabled]) #input+#switch{background-color:var(
--spectrum-switch-m-track-color-disabled,var(--spectrum-global-color-gray-300)
)}:host([disabled]) #input+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-disabled,var(--spectrum-global-color-gray-400)
)}:host([disabled]) #input~#label{color:var(
--spectrum-switch-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([disabled][checked][dir]) #input+#switch{background-color:var(
--spectrum-switch-m-track-color-selected-disabled,var(--spectrum-global-color-gray-400)
)}:host([disabled][checked][dir]) #input+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected-disabled,var(--spectrum-global-color-gray-400)
)}:host([disabled][checked][dir]) #input~#label{color:var(
--spectrum-switch-m-text-color-selected-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([emphasized][checked]) #input+#switch{background-color:var(
--spectrum-switch-m-emphasized-track-color-selected,var(--spectrum-global-color-blue-500)
)}:host([emphasized][checked]) #input+#switch:before{border-color:var(
--spectrum-switch-m-emphasized-handle-border-color-selected,var(--spectrum-global-color-blue-500)
)}:host([emphasized][checked]:hover) #input:enabled+#switch{background-color:var(
--spectrum-switch-m-emphasized-track-color-selected-hover,var(--spectrum-global-color-blue-600)
)}:host([emphasized][checked]:hover) #input:enabled+#switch:before{border-color:var(
--spectrum-switch-m-emphasized-handle-border-color-selected-hover,var(--spectrum-global-color-blue-600)
)}:host([emphasized]:active[checked]) #input:enabled+#switch{background-color:var(
--spectrum-switch-m-emphasized-track-color-selected-down,var(--spectrum-global-color-blue-700)
)}:host([emphasized]:active[checked]) #input:enabled+#switch:before{border-color:var(
--spectrum-switch-m-emphasized-handle-border-color-selected-down,var(--spectrum-global-color-blue-700)
)}#input.focus-visible+#switch:after,:host(:hover) #input.focus-visible+#switch:after{box-shadow:0 0 0 var(
--spectrum-switch-m-focus-ring-size-key-focus,var(--spectrum-alias-focus-ring-size)
) var(
--spectrum-switch-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
)}#input:focus-visible+#switch:after,:host(:hover) #input:focus-visible+#switch:after{box-shadow:0 0 0 var(
--spectrum-switch-m-focus-ring-size-key-focus,var(--spectrum-alias-focus-ring-size)
) var(
--spectrum-switch-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
)}#input.focus-visible+#switch:before,:host(:hover) #input.focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-key-focus,var(--spectrum-global-color-gray-700)
)}#input:focus-visible+#switch:before,:host(:hover) #input:focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-key-focus,var(--spectrum-global-color-gray-700)
)}:host(:hover[checked]) #input.focus-visible+#switch,:host([checked]) #input.focus-visible+#switch{background-color:var(
--spectrum-switch-m-track-color-selected-key-focus,var(--spectrum-global-color-gray-800)
)}:host(:hover[checked]) #input:focus-visible+#switch,:host([checked]) #input:focus-visible+#switch{background-color:var(
--spectrum-switch-m-track-color-selected-key-focus,var(--spectrum-global-color-gray-800)
)}:host(:hover[checked]) #input.focus-visible+#switch:before,:host([checked]) #input.focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected-key-focus,var(--spectrum-global-color-gray-800)
)}:host(:hover[checked]) #input:focus-visible+#switch:before,:host([checked]) #input:focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected-key-focus,var(--spectrum-global-color-gray-800)
)}:host([emphasized][checked]) #input.focus-visible+#switch,:host([emphasized][checked]:hover) #input.focus-visible+#switch{background-color:var(
--spectrum-switch-m-emphasized-track-color-selected-key-focus,var(--spectrum-global-color-blue-600)
)}:host([emphasized][checked]) #input:focus-visible+#switch,:host([emphasized][checked]:hover) #input:focus-visible+#switch{background-color:var(
--spectrum-switch-m-emphasized-track-color-selected-key-focus,var(--spectrum-global-color-blue-600)
)}:host([emphasized][checked]) #input.focus-visible+#switch:before,:host([emphasized][checked]:hover) #input.focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-emphasized-handle-border-color-selected-key-focus,var(--spectrum-global-color-blue-600)
)}:host([emphasized][checked]) #input:focus-visible+#switch:before,:host([emphasized][checked]:hover) #input:focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-emphasized-handle-border-color-selected-key-focus,var(--spectrum-global-color-blue-600)
)}:host{--spectrum-switch-label-margin-top:var(
--spectrum-global-dimension-size-65,5px
);--spectrum-switch-track-width:var(--spectrum-global-dimension-size-325);--spectrum-switch-handle-border-radius:50%}:host([disabled]){pointer-events:none}:host([dir=ltr][checked]) #input+#switch:before{transform:translateX(calc(var(--spectrum-switch-track-width) - var(--spectrum-switch-handle-size)))}:host([dir=rtl][checked]) #input+#switch:before{transform:translateX(calc(var(--spectrum-switch-handle-size) - var(--spectrum-switch-track-width)))}`;

const styles$b=r`#switch:before{transition:background var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out}`;

/**
 * @element sp-switch
 *
 * @slot - text label of the Switch
 */class Switch extends CheckboxBase{constructor(){super(...arguments);this.emphasized=false;}static get styles(){/* c8 ignore next 4 */if(window.hasOwnProperty('ShadyDOM')){// Override some styles if we are using the web component polyfill
return [styles$c,styles$b];}return [styles$c];}render(){return p`${super.render()} <span id="switch"></span> <label id="label" for="input"><slot></slot></label>`;}firstUpdated(changes){super.firstUpdated(changes);this.inputElement.setAttribute('role','switch');}updated(changes){if(changes.has('checked')){this.inputElement.setAttribute('aria-checked',this.checked?'true':'false');}}}__decorate([e({type:Boolean,reflect:true})],Switch.prototype,"emphasized",void 0);

iliadCustomElementsDefine('sp-switch',Switch);

const styles$a=r`:host{--spectrum-tabs-m-compact-item-height:var(--spectrum-alias-item-height-m);--spectrum-tabs-m-compact-vertical-item-height:var(
--spectrum-global-dimension-size-400
);--spectrum-tabs-m-compact-vertical-item-gap:var(
--spectrum-global-dimension-size-50
);--spectrum-tabs-m-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-tabs-m-rule-border-radius:var(
--spectrum-global-dimension-static-size-10
);--spectrum-tabs-m-rule-size:var(--spectrum-alias-border-size-thick);--spectrum-tabs-m-focus-ring-size:var(--spectrum-alias-border-size-thick);--spectrum-tabs-m-text-size:var(--spectrum-alias-item-text-size-m);--spectrum-tabs-m-height:var(--spectrum-global-dimension-size-600);--spectrum-tabs-m-item-height:var(--spectrum-alias-item-height-m);--spectrum-tabs-m-icon-gap:var(--spectrum-alias-item-workflow-icon-gap-m);--spectrum-tabs-m-focus-ring-height:var(--spectrum-alias-item-height-m);--spectrum-tabs-m-focus-ring-padding-x:var(
--spectrum-alias-item-padding-m
);--spectrum-tabs-m-item-gap:var(--spectrum-global-dimension-size-300);--spectrum-tabs-m-selection-indicator-animation-duration:var(
--spectrum-global-animation-duration-100
);--spectrum-tabs-m-vertical-rule-size:var(
--spectrum-alias-border-size-thick
);--spectrum-tabs-m-vertical-item-height:var(
--spectrum-global-dimension-size-550
);--spectrum-tabs-m-vertical-item-gap:var(
--spectrum-global-dimension-size-50
);--spectrum-tabs-m-vertical-item-margin-left:var(
--spectrum-global-dimension-size-150
);--spectrum-tabs-quiet-m-compact-height:var(--spectrum-alias-item-height-m);--spectrum-alias-font-size-default:var(
--spectrum-global-dimension-font-size-100
);--spectrum-tabs-m-rule-color:var(--spectrum-alias-border-color-light);--spectrum-tabs-m-vertical-rule-color:var(
--spectrum-alias-border-color-light
);--spectrum-tabs-m-selection-indicator-color:var(
--spectrum-global-color-gray-900
);--spectrum-tabs-m-text-color:var(--spectrum-alias-label-text-color);--spectrum-tabs-m-icon-color:var(--spectrum-alias-icon-color);--spectrum-tabs-m-text-color-hover:var(--spectrum-alias-text-color-hover);--spectrum-tabs-m-icon-color-hover:var(--spectrum-alias-icon-color-hover);--spectrum-tabs-m-text-color-selected:var(
--spectrum-global-color-gray-900
);--spectrum-tabs-m-icon-color-selected:var(
--spectrum-global-color-gray-900
);--spectrum-tabs-m-text-color-key-focus:var(
--spectrum-alias-text-color-hover
);--spectrum-tabs-m-focus-ring-color:var(
--spectrum-alias-border-color-focus
);--spectrum-tabs-m-icon-color-key-focus:var(
--spectrum-alias-icon-color-focus
);--spectrum-tabs-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-tabs-m-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-tabs-quiet-m-rule-color:var(
--spectrum-alias-border-color-transparent
);--spectrum-tabs-quiet-m-selection-indicator-color:var(
--spectrum-global-color-gray-900
);--spectrum-tabs-quiet-m-vertical-rule-color:var(
--spectrum-alias-border-color-transparent
)}:host{box-sizing:border-box;cursor:pointer;height:var(--spectrum-tabs-item-height);line-height:var(--spectrum-tabs-item-height);outline:0;position:relative;text-decoration:none;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-out;white-space:nowrap;z-index:1}:host([disabled]){cursor:default}:host([disabled]) #itemLabel{cursor:default}:host(:not([vertical])) ::slotted([slot=icon]){height:var(
--spectrum-tabs-item-height
)}:host([dir=ltr]) slot[name=icon]+#itemLabel{margin-left:calc(var(--spectrum-tabs-icon-gap) - var(--spectrum-global-dimension-size-40))}:host([dir=rtl]) slot[name=icon]+#itemLabel{margin-right:calc(var(--spectrum-tabs-icon-gap) - var(--spectrum-global-dimension-size-40))}:host([dir=ltr]):before{left:calc(-1*var(--spectrum-tabs-focus-ring-padding-x))}:host([dir=rtl]):before{right:calc(-1*var(--spectrum-tabs-focus-ring-padding-x))}:host([dir=ltr]):before{right:calc(-1*var(--spectrum-tabs-focus-ring-padding-x))}:host([dir=rtl]):before{left:calc(-1*var(--spectrum-tabs-focus-ring-padding-x))}:host:before{border:var(--spectrum-tabs-focus-ring-size) solid transparent;border-radius:var(--spectrum-tabs-focus-ring-border-radius);box-sizing:border-box;content:"";height:var(--spectrum-tabs-focus-ring-height);margin-top:calc(var(--spectrum-tabs-focus-ring-height)/ -2 + var(--spectrum-tabs-rule-size)/ 2);pointer-events:none;position:absolute;top:50%}#itemLabel{cursor:pointer;display:inline-block;font-size:var(--spectrum-tabs-text-size);font-weight:var(--spectrum-tabs-text-font-weight);text-decoration:none;vertical-align:top}#itemLabel:empty{display:none}:host{color:var(
--spectrum-tabs-m-text-color,var(--spectrum-alias-label-text-color)
)}:host(:not([vertical])) ::slotted([slot=icon]){color:var(
--spectrum-tabs-m-icon-color,var(--spectrum-alias-icon-color)
)}:host(:hover){color:var(
--spectrum-tabs-m-text-color-hover,var(--spectrum-alias-text-color-hover)
)}:host(:hover) ::slotted([slot=icon]){color:var(
--spectrum-tabs-m-icon-color-hover,var(--spectrum-alias-icon-color-hover)
)}:host([selected]){color:var(
--spectrum-tabs-m-text-color-selected,var(--spectrum-global-color-gray-900)
)}:host([selected]) ::slotted([slot=icon]){color:var(
--spectrum-tabs-m-icon-color-selected,var(--spectrum-global-color-gray-900)
)}:host(.focus-visible){color:var(
--spectrum-tabs-m-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host(:focus-visible){color:var(
--spectrum-tabs-m-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host(.focus-visible):before{border-color:var(
--spectrum-tabs-m-focus-ring-color,var(--spectrum-alias-border-color-focus)
)}:host(:focus-visible):before{border-color:var(
--spectrum-tabs-m-focus-ring-color,var(--spectrum-alias-border-color-focus)
)}:host(.focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-tabs-m-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}:host(:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-tabs-m-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}:host([disabled]){color:var(
--spectrum-tabs-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([disabled]) ::slotted([slot=icon]){color:var(
--spectrum-tabs-m-icon-color-disabled,var(--spectrum-alias-icon-color-disabled)
)}:host([disabled]){pointer-events:none}:host([vertical]){--sp-tab-vertial-margin-y:calc((var(
--spectrum-tabs-vertical-item-height,
var(--spectrum-global-dimension-size-550)
) - var(
--spectrum-tabs-focus-ring-height,
var(--spectrum-alias-single-line-height)
))/2);align-items:center;display:flex;flex-direction:column;height:auto!important;justify-content:center}:host([vertical]):before{bottom:0;height:auto;left:calc(-1*var(--spectrum-tabs-focus-ring-size,var(--spectrum-alias-border-size-thick)));margin-top:0!important;right:calc(-1*var(--spectrum-tabs-focus-ring-size,var(--spectrum-alias-border-size-thick)));top:0}:host([vertical]) ::slotted([slot=icon]){flex-shrink:0;margin-top:var(--sp-tab-vertial-margin-y)}:host([dir][vertical]) slot[name=icon]+#itemLabel{font-size:var(
--spectrum-tabs-text-size,var(--spectrum-alias-font-size-default)
);font-weight:var(
--spectrum-tabs-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);line-height:1;margin:var(--sp-tab-vertial-margin-y) 0}#itemLabel[hidden]{display:none}`;

/**
 * @element sp-tab
 *
 * @slot - text label of the Tab
 * @slot icon - The icon that appears on the left of the label
 */class Tab extends FocusVisiblePolyfillMixin(ObserveSlotText(ObserveSlotPresence(SpectrumElement,'[slot="icon"]'),'')){constructor(){super(...arguments);this.disabled=false;this.label='';this.selected=false;this.vertical=false;this.value='';}static get styles(){return [styles$a];}get hasIcon(){return this.slotContentIsPresent;}get hasLabel(){return !!this.label||this.slotHasContent;}render(){return p`${this.hasIcon?p`<slot name="icon"></slot>`:p``} <label id="itemLabel" ?hidden="${!this.hasLabel}">${this.slotHasContent?p``:this.label}<slot>${this.label}</slot></label>`;}firstUpdated(changes){super.firstUpdated(changes);this.setAttribute('role','tab');if(!this.hasAttribute('id')){this.id=`sp-tab-${Tab.instanceCount++}`;}}updated(changes){super.updated(changes);if(changes.has('selected')){this.setAttribute('aria-selected',this.selected?'true':'false');this.setAttribute('tabindex',this.selected?'0':'-1');}if(changes.has('disabled')){if(this.disabled){this.setAttribute('aria-disabled','true');}else {this.removeAttribute('aria-disabled');}}}}/**
 * @private
 */Tab.instanceCount=0;__decorate([e({type:Boolean,reflect:true})],Tab.prototype,"disabled",void 0);__decorate([e({reflect:true})],Tab.prototype,"label",void 0);__decorate([e({type:Boolean,reflect:true})],Tab.prototype,"selected",void 0);__decorate([e({type:Boolean,reflect:true})],Tab.prototype,"vertical",void 0);__decorate([e({type:String,reflect:true})],Tab.prototype,"value",void 0);

iliadCustomElementsDefine('sp-tab',Tab);

const styles$9=r`:host{--spectrum-tabs-m-compact-item-height:var(--spectrum-alias-item-height-m);--spectrum-tabs-m-compact-vertical-item-height:var(
--spectrum-global-dimension-size-400
);--spectrum-tabs-m-compact-vertical-item-gap:var(
--spectrum-global-dimension-size-50
);--spectrum-tabs-m-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-tabs-m-rule-border-radius:var(
--spectrum-global-dimension-static-size-10
);--spectrum-tabs-m-rule-size:var(--spectrum-alias-border-size-thick);--spectrum-tabs-m-focus-ring-size:var(--spectrum-alias-border-size-thick);--spectrum-tabs-m-text-size:var(--spectrum-alias-item-text-size-m);--spectrum-tabs-m-height:var(--spectrum-global-dimension-size-600);--spectrum-tabs-m-item-height:var(--spectrum-alias-item-height-m);--spectrum-tabs-m-icon-gap:var(--spectrum-alias-item-workflow-icon-gap-m);--spectrum-tabs-m-focus-ring-height:var(--spectrum-alias-item-height-m);--spectrum-tabs-m-focus-ring-padding-x:var(
--spectrum-alias-item-padding-m
);--spectrum-tabs-m-item-gap:var(--spectrum-global-dimension-size-300);--spectrum-tabs-m-selection-indicator-animation-duration:var(
--spectrum-global-animation-duration-100
);--spectrum-tabs-m-vertical-rule-size:var(
--spectrum-alias-border-size-thick
);--spectrum-tabs-m-vertical-item-height:var(
--spectrum-global-dimension-size-550
);--spectrum-tabs-m-vertical-item-gap:var(
--spectrum-global-dimension-size-50
);--spectrum-tabs-m-vertical-item-margin-left:var(
--spectrum-global-dimension-size-150
);--spectrum-tabs-quiet-m-compact-height:var(--spectrum-alias-item-height-m);--spectrum-alias-font-size-default:var(
--spectrum-global-dimension-font-size-100
);--spectrum-tabs-m-rule-color:var(--spectrum-alias-border-color-light);--spectrum-tabs-m-vertical-rule-color:var(
--spectrum-alias-border-color-light
);--spectrum-tabs-m-selection-indicator-color:var(
--spectrum-global-color-gray-900
);--spectrum-tabs-m-text-color:var(--spectrum-alias-label-text-color);--spectrum-tabs-m-icon-color:var(--spectrum-alias-icon-color);--spectrum-tabs-m-text-color-hover:var(--spectrum-alias-text-color-hover);--spectrum-tabs-m-icon-color-hover:var(--spectrum-alias-icon-color-hover);--spectrum-tabs-m-text-color-selected:var(
--spectrum-global-color-gray-900
);--spectrum-tabs-m-icon-color-selected:var(
--spectrum-global-color-gray-900
);--spectrum-tabs-m-text-color-key-focus:var(
--spectrum-alias-text-color-hover
);--spectrum-tabs-m-focus-ring-color:var(
--spectrum-alias-border-color-focus
);--spectrum-tabs-m-icon-color-key-focus:var(
--spectrum-alias-icon-color-focus
);--spectrum-tabs-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-tabs-m-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-tabs-quiet-m-rule-color:var(
--spectrum-alias-border-color-transparent
);--spectrum-tabs-quiet-m-selection-indicator-color:var(
--spectrum-global-color-gray-900
);--spectrum-tabs-quiet-m-vertical-rule-color:var(
--spectrum-alias-border-color-transparent
)}:host{--spectrum-tabs-focus-ring-border-radius:var(
--spectrum-tabs-m-focus-ring-border-radius
);--spectrum-tabs-compact-item-height:var(
--spectrum-tabs-m-compact-item-height,var(--spectrum-alias-item-height-m)
);--spectrum-tabs-compact-vertical-item-height:var(
--spectrum-tabs-m-compact-vertical-item-height,var(--spectrum-global-dimension-size-400)
);--spectrum-tabs-compact-vertical-item-gap:var(
--spectrum-tabs-m-compact-vertical-item-gap,var(--spectrum-global-dimension-size-50)
);--spectrum-tabs-text-font-weight:var(
--spectrum-tabs-m-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-tabs-rule-border-radius:var(
--spectrum-tabs-m-rule-border-radius,var(--spectrum-global-dimension-static-size-10)
);--spectrum-tabs-rule-size:var(
--spectrum-tabs-m-rule-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-focus-ring-size:var(
--spectrum-tabs-m-focus-ring-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-text-size:var(
--spectrum-tabs-m-text-size,var(--spectrum-alias-item-text-size-m)
);--spectrum-tabs-height:var(
--spectrum-tabs-m-height,var(--spectrum-global-dimension-size-600)
);--spectrum-tabs-item-height:var(
--spectrum-tabs-m-item-height,var(--spectrum-alias-item-height-m)
);--spectrum-tabs-icon-gap:var(
--spectrum-tabs-m-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-m)
);--spectrum-tabs-focus-ring-height:var(
--spectrum-tabs-m-focus-ring-height,var(--spectrum-alias-item-height-m)
);--spectrum-tabs-focus-ring-padding-x:var(
--spectrum-tabs-m-focus-ring-padding-x,var(--spectrum-alias-item-padding-m)
);--spectrum-tabs-item-gap:var(
--spectrum-tabs-m-item-gap,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-selection-indicator-animation-duration:var(
--spectrum-tabs-m-selection-indicator-animation-duration,var(--spectrum-global-animation-duration-100)
);--spectrum-tabs-vertical-rule-size:var(
--spectrum-tabs-m-vertical-rule-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-vertical-item-height:var(
--spectrum-tabs-m-vertical-item-height,var(--spectrum-global-dimension-size-550)
);--spectrum-tabs-vertical-item-gap:var(
--spectrum-tabs-m-vertical-item-gap,var(--spectrum-global-dimension-size-50)
);--spectrum-tabs-vertical-item-margin-left:var(
--spectrum-tabs-m-vertical-item-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-tabs-quiet-compact-height:var(
--spectrum-tabs-quiet-m-compact-height,var(--spectrum-alias-item-height-m)
)}:host{--spectrum-tabs-item-height:calc(var(--spectrum-tabs-height) - var(--spectrum-tabs-rule-size));--spectrum-tabs-compact-item-height:calc(var(--spectrum-tabs-quiet-compact-height) - var(--spectrum-tabs-rule-size));--spectrum-tabs-text-size:var(
--spectrum-alias-font-size-default,var(--spectrum-global-dimension-font-size-100)
)}#list{display:flex;margin:0;padding-bottom:0;padding-left:var(--spectrum-tabs-focus-ring-padding-x);padding-right:var(--spectrum-tabs-focus-ring-padding-x);padding-top:0;position:relative;vertical-align:top;z-index:0}:host([dir=ltr]) ::slotted(*):before{left:calc(-1*var(--spectrum-tabs-focus-ring-padding-x))}:host([dir=rtl]) ::slotted(*):before{right:calc(-1*var(--spectrum-tabs-focus-ring-padding-x))}:host([dir=ltr]) ::slotted(*):before{right:calc(-1*var(--spectrum-tabs-focus-ring-padding-x))}:host([dir=rtl]) ::slotted(*):before{left:calc(-1*var(--spectrum-tabs-focus-ring-padding-x))}:host([dir=ltr]) #selectionIndicator{left:0}:host([dir=rtl]) #selectionIndicator{right:0}#selectionIndicator{border-radius:var(--spectrum-tabs-rule-border-radius);position:absolute;transform-origin:top left;transition:transform var(--spectrum-tabs-selection-indicator-animation-duration) ease-in-out;z-index:0}:host([compact]) ::slotted(*){height:var(
--spectrum-tabs-compact-item-height
);line-height:var(--spectrum-tabs-compact-item-height)}:host([direction=horizontal]) #list{align-items:center;border-bottom:var(--spectrum-tabs-rule-size) solid}:host([direction=horizontal]) ::slotted(*){vertical-align:top}:host([dir=ltr][direction=horizontal]) ::slotted(:not([slot]):not(:first-child)){margin-left:var(
--spectrum-tabs-item-gap
)}:host([dir=rtl][direction=horizontal]) ::slotted(:not([slot]):not(:first-child)){margin-right:var(
--spectrum-tabs-item-gap
)}:host([direction=horizontal]) #selectionIndicator{bottom:0;bottom:calc(-1*var(--spectrum-tabs-rule-size));height:var(--spectrum-tabs-rule-size);position:absolute}:host([direction=horizontal][compact]) #list{align-items:end;box-sizing:content-box;height:var(--spectrum-tabs-compact-item-height)}:host([quiet]) #list{display:inline-flex}:host([dir=ltr][direction=vertical]) #list{border-left:var(--spectrum-tabs-vertical-rule-size) solid}:host([dir=rtl][direction=vertical]) #list{border-right:var(--spectrum-tabs-vertical-rule-size) solid}:host([direction=vertical]) #list{display:inline-flex;flex-direction:column;padding:0}:host([dir=ltr][direction=vertical]) ::slotted(*){margin-left:calc(var(--spectrum-tabs-vertical-item-margin-left) - var(--spectrum-tabs-focus-ring-padding-x))}:host([dir=rtl][direction=vertical]) ::slotted(*){margin-right:calc(var(--spectrum-tabs-vertical-item-margin-left) - var(--spectrum-tabs-focus-ring-padding-x))}:host([direction=vertical]) ::slotted(*){height:var(
--spectrum-tabs-vertical-item-height
);margin-bottom:var(--spectrum-tabs-vertical-item-gap);padding-bottom:0;padding-left:var(--spectrum-tabs-focus-ring-padding-x);padding-right:var(--spectrum-tabs-focus-ring-padding-x);padding-top:0}:host([dir=ltr][direction=vertical]) ::slotted(*):before{left:calc(-1*var(--spectrum-tabs-focus-ring-size))}:host([dir=rtl][direction=vertical]) ::slotted(*):before{right:calc(-1*var(--spectrum-tabs-focus-ring-size))}:host([dir=ltr][direction=vertical]) ::slotted(*):before{right:calc(-1*var(--spectrum-tabs-focus-ring-size))}:host([dir=rtl][direction=vertical]) ::slotted(*):before{left:calc(-1*var(--spectrum-tabs-focus-ring-size))}:host([direction=vertical]) ::slotted(*):before{margin-top:calc(var(--spectrum-tabs-focus-ring-height)/-2)}:host([direction=vertical][compact]) #list ::slotted(*){height:var(
--spectrum-tabs-compact-vertical-item-height
);line-height:var(--spectrum-tabs-compact-vertical-item-height);margin-bottom:var(--spectrum-tabs-compact-vertical-item-gap)}:host([dir=ltr][direction=vertical]) #selectionIndicator{left:0}:host([dir=rtl][direction=vertical]) #selectionIndicator{right:0}:host([dir=ltr][direction=vertical]) #selectionIndicator{left:calc(-1*var(--spectrum-tabs-vertical-rule-size))}:host([dir=rtl][direction=vertical]) #selectionIndicator{right:calc(-1*var(--spectrum-tabs-vertical-rule-size))}:host([direction=vertical]) #selectionIndicator{position:absolute;width:var(--spectrum-tabs-vertical-rule-size)}#list{border-bottom-color:var(
--spectrum-tabs-m-rule-color,var(--spectrum-alias-border-color-light)
)}:host([dir=ltr][direction=vertical]) #list{border-left-color:var(
--spectrum-tabs-m-vertical-rule-color,var(--spectrum-alias-border-color-light)
)}:host([dir=rtl][direction=vertical]) #list{border-right-color:var(
--spectrum-tabs-m-vertical-rule-color,var(--spectrum-alias-border-color-light)
)}#selectionIndicator{background-color:var(
--spectrum-tabs-m-selection-indicator-color,var(--spectrum-global-color-gray-900)
)}:host([quiet]) #list{border-bottom-color:var(
--spectrum-tabs-quiet-m-rule-color,var(--spectrum-alias-border-color-transparent)
)}:host([quiet]) #selectionIndicator{background-color:var(
--spectrum-tabs-quiet-m-selection-indicator-color,var(--spectrum-global-color-gray-900)
)}:host([dir=ltr][direction=vertical][compact]) #list,:host([dir=ltr][direction=vertical][quiet]) #list{border-left-color:var(
--spectrum-tabs-quiet-m-vertical-rule-color,var(--spectrum-alias-border-color-transparent)
)}:host([dir=rtl][direction=vertical][compact]) #list,:host([dir=rtl][direction=vertical][quiet]) #list{border-right-color:var(
--spectrum-tabs-quiet-m-vertical-rule-color,var(--spectrum-alias-border-color-transparent)
)}:host([direction=vertical][compact]) #list #selectionIndicator,:host([direction=vertical][quiet]) #list #selectionIndicator{background-color:var(
--spectrum-tabs-quiet-m-selection-indicator-color,var(--spectrum-global-color-gray-900)
)}:host{display:grid}:host([direction^=vertical]){grid-template-columns:auto 1fr}:host([disabled]) #selectionIndicator{background-color:var(
--spectrum-tabs-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([disabled]) ::slotted(sp-tab){color:var(
--spectrum-tabs-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}#list{justify-content:var(--swc-tabs-list-justify-content)}:host([disabled]) #list{pointer-events:none}:host([direction=vertical-right]) #selectionIndicator,:host([direction=vertical]) #selectionIndicator{height:1px;top:0}:host([compact]){--spectrum-tabs-height:var(--spectrum-tabs-quiet-compact-height)}:host([direction=horizontal]:not([quiet])) #list{border-bottom-color:var(
--spectrum-tabs-rule-color,var(--spectrum-global-color-gray-200)
)}:host([dir][direction=horizontal]) #selectionIndicator{width:1px}:host([dir=ltr][direction=vertical-right]) #list{border-right:var(
--spectrum-tabs-vertical-rule-width,var(--spectrum-alias-border-size-thick)
) solid;border-right-color:var(
--spectrum-tabs-vertical-rule-color,var(--spectrum-global-color-gray-200)
);display:inline-flex;flex-direction:column;padding:0}:host([dir=rtl][direction=vertical-right]) #list{border-left:var(
--spectrum-tabs-vertical-rule-width,var(--spectrum-alias-border-size-thick)
) solid;border-left-color:var(
--spectrum-tabs-vertical-rule-color,var(--spectrum-global-color-gray-200)
);display:inline-flex;flex-direction:column;padding:0}:host([dir=ltr][direction=vertical-right]) ::slotted(*){height:var(
--spectrum-tabs-vertical-item-height,var(--spectrum-global-dimension-size-550)
);margin-bottom:var(
--spectrum-tabs-vertical-item-gap,var(--spectrum-global-dimension-size-50)
);margin-right:calc(var(--spectrum-tabs-vertical-item-margin-left,var(--spectrum-global-dimension-size-150)) - var(--spectrum-tabs-focus-ring-padding-x,var(--spectrum-global-dimension-size-100)));padding:0 var(
--spectrum-tabs-focus-ring-padding-x,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl][direction=vertical-right]) ::slotted(*){height:var(
--spectrum-tabs-vertical-item-height,var(--spectrum-global-dimension-size-550)
);margin-bottom:var(
--spectrum-tabs-vertical-item-gap,var(--spectrum-global-dimension-size-50)
);margin-left:calc(var(--spectrum-tabs-vertical-item-margin-left,var(--spectrum-global-dimension-size-150)) - var(--spectrum-tabs-focus-ring-padding-x,var(--spectrum-global-dimension-size-100)));padding:0 var(
--spectrum-tabs-focus-ring-padding-x,var(--spectrum-global-dimension-size-100)
)}:host([direction=vertical-right][compact]) ::slotted(*){height:var(
--spectrum-tabs-compact-vertical-item-height,var(--spectrum-global-dimension-size-400)
);line-height:var(
--spectrum-tabs-compact-vertical-item-height,var(--spectrum-global-dimension-size-400)
);margin-bottom:var(
--spectrum-tabs-compact-vertical-item-gap,var(--spectrum-global-dimension-size-50)
)}:host([dir=ltr][direction=vertical-right]) #selectionIndicator{left:auto;position:absolute;right:calc(-1*var(--spectrum-tabs-vertical-rule-width,var(--spectrum-alias-border-size-thick)));width:var(
--spectrum-tabs-vertical-rule-width,var(--spectrum-alias-border-size-thick)
)}:host([dir=rtl][direction=vertical-right]) #selectionIndicator{left:calc(-1*var(--spectrum-tabs-vertical-rule-width,var(--spectrum-alias-border-size-thick)));position:absolute;right:auto;width:var(
--spectrum-tabs-vertical-rule-width,var(--spectrum-alias-border-size-thick)
)}:host([dir=ltr][direction=vertical-right][compact]) #list,:host([dir=ltr][direction=vertical-right][quiet]) #list{border-right-color:var(
--spectrum-tabs-quiet-vertical-rule-color,var(--spectrum-alias-border-color-transparent)
)}:host([dir=rtl][direction=vertical-right][compact]) #list,:host([dir=rtl][direction=vertical-right][quiet]) #list{border-left-color:var(
--spectrum-tabs-quiet-vertical-rule-color,var(--spectrum-alias-border-color-transparent)
)}:host([direction=vertical-right][compact]) #selectionIndicator,:host([direction=vertical-right][quiet]) #selectionIndicator{background-color:var(
--spectrum-tabs-quiet-selection-indicator-color,var(--spectrum-global-color-gray-900)
)}#selectionIndicator.first-position{transition:none}`;

const availableArrowsByDirection={vertical:['ArrowUp','ArrowDown'],['vertical-right']:['ArrowUp','ArrowDown'],horizontal:['ArrowLeft','ArrowRight']};const noSelectionStyle$1='transform: translateX(0px) scaleX(0) scaleY(0)';/**
 * @element sp-tabs
 *
 * @slot - Tab elements to manage as a group
 * @slot tab-panel - Tab Panel elements related to the listed Tab elements
 * @attr {Boolean} quiet - The tabs border is a lot smaller
 * @attr {Boolean} compact - The collection of tabs take up less space
 */class Tabs extends Focusable{constructor(){super(...arguments);/**
         * Whether to activate a tab on keyboard focus or not.
         *
         * By default a tab is activated via a "click" interaction. This is specifically intended for when
         * tab content cannot be displayed instantly, e.g. not all of the DOM content is available, etc.
         * To learn more about "Deciding When to Make Selection Automatically Follow Focus", visit:
         * https://w3c.github.io/aria-practices/#kbd_selection_follows_focus
         */this.auto=false;this.direction='horizontal';this.label='';this.selectionIndicatorStyle=noSelectionStyle$1;this.shouldAnimate=false;this._selected='';this.tabs=[];/**
         * This will force apply the focus visible styling.
         * It should always do so when this styling is already applied.
         */this.shouldApplyFocusVisible=false;this.manageFocusinType=()=>{if(this.shouldApplyFocusVisible){return;}const handleFocusin=()=>{this.shouldApplyFocusVisible=false;this.removeEventListener('focusin',handleFocusin);};this.addEventListener('focusin',handleFocusin);};this.onClick=event=>{const target=event.target;if(this.disabled||target.disabled){return;}this.shouldAnimate=true;this.selectTarget(target);if(this.shouldApplyFocusVisible&&event.composedPath()[0]!==this){/* Trick :focus-visible polyfill into thinking keyboard based focus */this.dispatchEvent(new KeyboardEvent('keydown',{code:'Tab'}));target.focus();}};this.onKeyDown=event=>{if(event.code==='Enter'||event.code==='Space'){event.preventDefault();const target=event.target;if(target){this.selectTarget(target);}}};this.updateCheckedState=()=>{if(!this.tabs.length){this.tabs=[...this.querySelectorAll('[role="tab"]')];}this.tabs.forEach(element=>{element.removeAttribute('selected');});if(this.selected){const currentChecked=this.tabs.find(el=>el.value===this.selected);if(currentChecked){currentChecked.selected=true;}else {this.selected='';}}else {const firstTab=this.tabs[0];if(firstTab){firstTab.setAttribute('tabindex','0');}}this.updateSelectionIndicator();this.tabChangeResolver();};this.updateSelectionIndicator=async()=>{const selectedElement=this.tabs.find(el=>el.selected);if(!selectedElement){this.selectionIndicatorStyle=noSelectionStyle$1;return;}await Promise.all([selectedElement.updateComplete,document.fonts?document.fonts.ready:Promise.resolve()]);const tabBoundingClientRect=selectedElement.getBoundingClientRect();const parentBoundingClientRect=this.getBoundingClientRect();if(this.direction==='horizontal'){const width=tabBoundingClientRect.width;const offset=this.dir==='ltr'?tabBoundingClientRect.left-parentBoundingClientRect.left:tabBoundingClientRect.right-parentBoundingClientRect.right;this.selectionIndicatorStyle=`transform: translateX(${offset}px) scaleX(${this.dir==='ltr'?width:-1*width});`;}else {const height=tabBoundingClientRect.height;const offset=tabBoundingClientRect.top-parentBoundingClientRect.top;this.selectionIndicatorStyle=`transform: translateY(${offset}px) scaleY(${height});`;}};this.tabChangePromise=Promise.resolve();this.tabChangeResolver=function(){return;};}static get styles(){return [styles$9];}get selected(){return this._selected;}set selected(value){const oldValue=this.selected;if(value===oldValue){return;}this._selected=value;this.shouldUpdateCheckedState();this.requestUpdate('selected',oldValue);}/**
     * @private
     */get focusElement(){const focusElement=this.tabs.find(tab=>!tab.disabled&&(tab.selected||tab.value===this.selected));if(focusElement){return focusElement;}const fallback=this.tabs.find(tab=>!tab.disabled);return fallback||this;}manageAutoFocus(){const tabs=[...this.children];const tabUpdateCompletes=tabs.map(tab=>{if(typeof tab.updateComplete!=='undefined'){return tab.updateComplete;}return Promise.resolve(true);});Promise.all(tabUpdateCompletes).then(()=>super.manageAutoFocus());}managePanels({target}){const panels=target.assignedElements();panels.map(panel=>{const{value,id}=panel;const tab=this.querySelector(`[role="tab"][value="${value}"]`);if(tab){tab.setAttribute('aria-controls',id);panel.setAttribute('aria-labelledby',tab.id);}panel.selected=value===this.selected;});}render(){return p`<div aria-label="${l(this.label?this.label:undefined)}" @click="${this.onClick}" @keydown="${this.onKeyDown}" @mousedown="${this.manageFocusinType}" @focusin="${this.startListeningToKeyboard}" id="list" role="tablist"><slot @slotchange="${this.onSlotChange}"></slot><div id="selectionIndicator" class="${l(this.shouldAnimate?undefined:'first-position')}" style="${this.selectionIndicatorStyle}" role="presentation"></div></div><slot name="tab-panel" @slotchange="${this.managePanels}"></slot>`;}firstUpdated(changes){super.firstUpdated(changes);const selectedChild=this.querySelector('[selected]');if(selectedChild){this.selectTarget(selectedChild);}}updated(changes){super.updated(changes);if(changes.has('selected')){if(changes.get('selected')){const previous=this.querySelector(`[role="tabpanel"][value="${changes.get('selected')}"]`);if(previous)previous.selected=false;}const next=this.querySelector(`[role="tabpanel"][value="${this.selected}"]`);if(next)next.selected=true;}if(changes.has('direction')){if(this.direction==='horizontal'){this.removeAttribute('aria-orientation');}else {this.setAttribute('aria-orientation','vertical');}}if(changes.has('dir')){this.updateSelectionIndicator();}if(changes.has('disabled')){if(this.disabled){this.setAttribute('aria-disabled','true');}else {this.removeAttribute('aria-disabled');}}if(!this.shouldAnimate&&typeof changes.get('shouldAnimate')!=='undefined'){this.shouldAnimate=true;}}startListeningToKeyboard(){this.addEventListener('keydown',this.handleKeydown);this.shouldApplyFocusVisible=true;const selected=this.querySelector('[selected]');if(selected){selected.tabIndex=-1;}const stopListeningToKeyboard=()=>{this.removeEventListener('keydown',this.handleKeydown);this.shouldApplyFocusVisible=false;const selected=this.querySelector('[selected]');if(selected){selected.tabIndex=0;}this.removeEventListener('focusout',stopListeningToKeyboard);};this.addEventListener('focusout',stopListeningToKeyboard);}handleKeydown(event){const{code}=event;const availableArrows=[...availableArrowsByDirection[this.direction]];if(!availableArrows.includes(code)){return;}if(!this.isLTR&&this.direction==='horizontal'){availableArrows.reverse();}event.preventDefault();const currentFocusedTab=getActiveElement(this);let currentFocusedTabIndex=this.tabs.indexOf(currentFocusedTab);currentFocusedTabIndex+=code===availableArrows[0]?-1:1;const nextTab=this.tabs[(currentFocusedTabIndex+this.tabs.length)%this.tabs.length];nextTab.focus();if(this.auto){this.selected=nextTab.value;}}selectTarget(target){const value=target.getAttribute('value');if(value){const selected=this.selected;this.selected=value;const applyDefault=this.dispatchEvent(new Event('change',{cancelable:true}));if(!applyDefault){this.selected=selected;}}}onSlotChange(){this.tabs=[...this.querySelectorAll('[role="tab"]')];this.shouldUpdateCheckedState();}shouldUpdateCheckedState(){this.tabChangeResolver();this.tabChangePromise=new Promise(res=>this.tabChangeResolver=res);setTimeout(this.updateCheckedState);}async getUpdateComplete(){const complete=await super.getUpdateComplete();await this.tabChangePromise;return complete;}connectedCallback(){super.connectedCallback();window.addEventListener('resize',this.updateSelectionIndicator);if('fonts'in document){document.fonts.addEventListener('loadingdone',this.updateSelectionIndicator);}}disconnectedCallback(){window.removeEventListener('resize',this.updateSelectionIndicator);if('fonts'in document){document.fonts.removeEventListener('loadingdone',this.updateSelectionIndicator);}super.disconnectedCallback();}}__decorate([e({type:Boolean})],Tabs.prototype,"auto",void 0);__decorate([e({reflect:true})],Tabs.prototype,"direction",void 0);__decorate([e()],Tabs.prototype,"label",void 0);__decorate([e({attribute:false})],Tabs.prototype,"selectionIndicatorStyle",void 0);__decorate([e({attribute:false})],Tabs.prototype,"shouldAnimate",void 0);__decorate([e({reflect:true})],Tabs.prototype,"selected",null);

iliadCustomElementsDefine('sp-tabs',Tabs);

const styles$8=r`:host{display:inline-flex}:host(:not([selected])){display:none}`;

/**
 * @element sp-tab-panel
 *
 * @slot - content of the Tab Panel
 */class TabPanel extends SpectrumElement{constructor(){super(...arguments);this.selected=false;this.value='';}render(){return p`<slot></slot>`;}firstUpdated(){this.slot='tab-panel';this.setAttribute('role','tabpanel');this.tabIndex=0;if(!this.hasAttribute('id')){this.id=`sp-tab-panel-${TabPanel.instanceCount++}`;}}updated(changes){if(changes.has('selected')){if(this.selected){this.removeAttribute('aria-hidden');this.tabIndex=0;}else {this.setAttribute('aria-hidden','true');this.tabIndex=-1;}}}}TabPanel.styles=[styles$8];/**
 * @private
 */TabPanel.instanceCount=0;__decorate([e({type:Boolean,reflect:true})],TabPanel.prototype,"selected",void 0);__decorate([e({type:String,reflect:true})],TabPanel.prototype,"value",void 0);

iliadCustomElementsDefine('sp-tab-panel',TabPanel);

const styles$7=r`:host{--spectrum-tag-s-border-size:var(--spectrum-alias-border-size-thin);--spectrum-tag-s-icon-gap:var(--spectrum-alias-item-workflow-icon-gap-s);--spectrum-tag-s-text-size:var(--spectrum-alias-item-text-size-s);--spectrum-tag-s-height:var(--spectrum-alias-item-height-s);--spectrum-tag-s-padding-left:var(
--spectrum-alias-item-workflow-padding-left-s
);--spectrum-tag-s-padding-right:var(--spectrum-alias-item-padding-s);--spectrum-alias-border-radius-regular:var(
--spectrum-global-dimension-size-50
);--spectrum-tag-m-text-color:var(--spectrum-alias-label-text-color);--spectrum-tag-m-background-color:var(--spectrum-global-color-gray-75);--spectrum-tag-m-border-color:var(
--spectrum-alias-border-color-darker-default
);--spectrum-tag-m-removable-icon-color:var(--spectrum-alias-icon-color);--spectrum-tag-m-background-color-hover:var(
--spectrum-global-color-gray-75
);--spectrum-tag-m-text-color-hover:var(--spectrum-alias-text-color-hover);--spectrum-tag-m-border-color-hover:var(
--spectrum-alias-border-color-darker-hover
);--spectrum-tag-m-removable-icon-color-hover:var(
--spectrum-alias-icon-color-hover
);--spectrum-tag-m-background-color-key-focus:var(
--spectrum-global-color-gray-75
);--spectrum-tag-m-text-color-key-focus:var(
--spectrum-alias-text-color-hover
);--spectrum-tag-m-border-color-key-focus:var(
--spectrum-alias-border-color-focus
);--spectrum-alias-focus-ring-size:var(
--spectrum-global-dimension-static-size-25
);--spectrum-tag-m-removable-icon-color-key-focus:var(
--spectrum-alias-icon-color-focus
);--spectrum-tag-m-background-color-selected:var(
--spectrum-global-color-gray-700
);--spectrum-tag-m-text-color-selected:var(
--spectrum-alias-text-color-over-background
);--spectrum-tag-m-border-color-selected:var(
--spectrum-global-color-gray-700
);--spectrum-tag-m-icon-color-selected:var(
--spectrum-alias-icon-color-over-background
);--spectrum-tag-m-background-color-selected-hover:var(
--spectrum-global-color-gray-800
);--spectrum-tag-m-border-color-selected-key-focus:var(
--spectrum-global-color-gray-800
);--spectrum-tag-m-text-color-selected-key-focus:var(
--spectrum-alias-text-color-over-background
);--spectrum-tag-m-border-color-error-selected:var(
--spectrum-semantic-negative-background-color-default
);--spectrum-tag-m-background-color-error-selected:var(
--spectrum-semantic-negative-background-color-default
);--spectrum-tag-m-text-color-error-selected:var(
--spectrum-alias-text-color-over-background
);--spectrum-tag-m-border-color-error-selected-key-focus:var(
--spectrum-semantic-negative-background-color-key-focus
);--spectrum-tag-m-background-color-error-selected-hover:var(
--spectrum-semantic-negative-background-color-hover
);--spectrum-tag-m-icon-color-error:var(
--spectrum-semantic-negative-color-icon
);--spectrum-tag-m-border-color-error:var(
--spectrum-semantic-negative-color-default
);--spectrum-tag-m-icon-color-error-hover:var(
--spectrum-semantic-negative-color-icon
);--spectrum-tag-m-border-color-error-hover:var(
--spectrum-semantic-negative-color-state-hover
);--spectrum-tag-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-tag-m-background-color-disabled:var(
--spectrum-alias-background-color-disabled
);--spectrum-tag-m-border-color-disabled:var(
--spectrum-alias-border-color-disabled
);--spectrum-avatar-size-100-opacity-disabled:0.3;--spectrum-tag-m-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-tag-m-removable-text-color-hover:var(
--spectrum-alias-text-color-hover
);--spectrum-tag-m-removable-text-color-down:var(
--spectrum-alias-text-color-down
);--spectrum-tag-m-removable-icon-color-down:var(
--spectrum-alias-icon-color-down
);--spectrum-tag-m-removable-border-color-error-hover:var(
--spectrum-semantic-negative-color-state-hover
);--spectrum-tag-m-removable-text-color-error-hover:var(
--spectrum-semantic-negative-color-state-down
);--spectrum-tag-m-removable-icon-color-error-hover:var(
--spectrum-semantic-negative-color-icon
);--spectrum-tag-m-removable-border-color-error-down:var(
--spectrum-semantic-negative-color-state-down
);--spectrum-tag-m-removable-text-color-error-down:var(
--spectrum-semantic-negative-color-state-down
);--spectrum-tag-m-removable-icon-color-error-down:var(
--spectrum-semantic-negative-color-icon
);--spectrum-tag-m-removable-text-color-key-focus:var(
--spectrum-alias-text-color-hover
);--spectrum-tag-m-removable-text-color-selected:var(
--spectrum-alias-text-color-over-background
);--spectrum-tag-m-removable-text-color-selected-key-focus:var(
--spectrum-alias-text-color-over-background
);--spectrum-tag-m-removable-button-icon-color-selected:var(
--spectrum-alias-icon-color-over-background
);--spectrum-tag-m-removable-button-icon-color-selected-hover:var(
--spectrum-alias-icon-color-over-background
);--spectrum-tag-m-removable-text-color-error-key-focus:var(
--spectrum-semantic-negative-color-state-down
);--spectrum-tag-m-removable-border-color-key-focus:var(
--spectrum-alias-border-color-focus
);--spectrum-tag-m-removable-button-background-color-key-focus:var(
--spectrum-global-color-gray-75
);--spectrum-tag-m-removable-button-icon-color-key-focus:var(
--spectrum-alias-icon-color-focus
);--spectrum-tag-m-removable-button-icon-color-hover:var(
--spectrum-alias-icon-color-hover
);--spectrum-tag-m-removable-button-background-color-hover:var(
--spectrum-global-color-gray-75
)}:host([dir=ltr]){padding-left:calc(var(--spectrum-tag-padding-left) - var(--spectrum-tag-border-size))}:host([dir=rtl]){padding-right:calc(var(--spectrum-tag-padding-left) - var(--spectrum-tag-border-size))}:host([dir=ltr]){padding-right:calc(var(--spectrum-tag-padding-right) - var(--spectrum-tag-border-size))}:host([dir=rtl]){padding-left:calc(var(--spectrum-tag-padding-right) - var(--spectrum-tag-border-size))}:host{align-items:center;border-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
);border-style:solid;border-width:var(--spectrum-tag-border-size);box-sizing:border-box;display:inline-flex;height:var(--spectrum-tag-height);margin:calc(var(--spectrum-taggroup-tag-gap-y)/2) calc(var(--spectrum-taggroup-tag-gap-x)/2);max-width:100%;outline:0;padding-bottom:0;padding-top:0;transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out,color var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out,background-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out;-webkit-user-select:none;user-select:none}:host([disabled]){pointer-events:none}:host([dir=ltr])>::slotted([slot=avatar]),:host([dir=ltr])>::slotted([slot=icon]){margin-right:var(
--spectrum-tag-icon-gap
)}:host([dir=rtl])>::slotted([slot=avatar]),:host([dir=rtl])>::slotted([slot=icon]){margin-left:var(
--spectrum-tag-icon-gap
)}:host([dir=ltr])>::slotted([slot=avatar]),:host([dir=ltr])>::slotted([slot=icon]){margin-left:calc(var(--spectrum-tag-avatar-padding-x) - var(--spectrum-tag-padding-left))}:host([dir=rtl])>::slotted([slot=avatar]),:host([dir=rtl])>::slotted([slot=icon]){margin-right:calc(var(--spectrum-tag-avatar-padding-x) - var(--spectrum-tag-padding-left))}:host([dir=ltr])>slot[name=avatar]~.label,:host([dir=ltr])>slot[name=icon]~.label{margin-right:calc(var(--spectrum-tag-avatar-padding-x) - var(--spectrum-tag-padding-right))}:host([dir=rtl])>slot[name=avatar]~.label,:host([dir=rtl])>slot[name=icon]~.label{margin-left:calc(var(--spectrum-tag-avatar-padding-x) - var(--spectrum-tag-padding-right))}:host([dir=ltr]) .clear-button{margin-right:calc(-1*var(--spectrum-tag-padding-right))}:host([dir=rtl]) .clear-button{margin-left:calc(-1*var(--spectrum-tag-padding-right))}.label{cursor:default;flex:1 1 auto;font-size:var(--spectrum-tag-text-size);height:100%;line-height:calc(var(--spectrum-tag-height) - var(--spectrum-tag-border-size)*2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host{background-color:var(
--spectrum-tag-m-background-color,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-tag-m-border-color,var(--spectrum-alias-border-color-darker-default)
);color:var(
--spectrum-tag-m-text-color,var(--spectrum-alias-label-text-color)
)}.clear-button{color:var(
--spectrum-tag-m-removable-icon-color,var(--spectrum-alias-icon-color)
)}:host(:hover){background-color:var(
--spectrum-tag-m-background-color-hover,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-tag-m-border-color-hover,var(--spectrum-alias-border-color-darker-hover)
);color:var(
--spectrum-tag-m-text-color-hover,var(--spectrum-alias-text-color-hover)
)}:host(:hover) .clear-button{color:var(
--spectrum-tag-m-removable-icon-color-hover,var(--spectrum-alias-icon-color-hover)
)}:host(.focus-visible){background-color:var(
--spectrum-tag-m-background-color-key-focus,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-tag-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-tag-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);color:var(
--spectrum-tag-m-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host(:focus-visible){background-color:var(
--spectrum-tag-m-background-color-key-focus,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-tag-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-tag-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);color:var(
--spectrum-tag-m-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host(.focus-visible) .clear-button{color:var(
--spectrum-tag-m-removable-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}:host(:focus-visible) .clear-button{color:var(
--spectrum-tag-m-removable-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}:host([selected]){background-color:var(
--spectrum-tag-m-background-color-selected,var(--spectrum-global-color-gray-700)
);border-color:var(
--spectrum-tag-m-border-color-selected,var(--spectrum-global-color-gray-700)
);color:var(
--spectrum-tag-m-text-color-selected,var(--spectrum-alias-text-color-over-background)
)}:host([selected]) .itemIcon{color:var(
--spectrum-tag-m-icon-color-selected,var(--spectrum-alias-icon-color-over-background)
)}:host([selected]:hover){background-color:var(
--spectrum-tag-m-background-color-selected-hover,var(--spectrum-global-color-gray-800)
)}:host([selected].focus-visible){border-color:var(
--spectrum-tag-m-text-color-selected-key-focus,var(--spectrum-alias-text-color-over-background)
);box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-tag-m-border-color-selected-key-focus,var(--spectrum-global-color-gray-800)
)}:host([selected]:focus-visible){border-color:var(
--spectrum-tag-m-text-color-selected-key-focus,var(--spectrum-alias-text-color-over-background)
);box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-tag-m-border-color-selected-key-focus,var(--spectrum-global-color-gray-800)
)}:host([selected][invalid]){background-color:var(
--spectrum-tag-m-background-color-error-selected,var(--spectrum-semantic-negative-background-color-default)
);border-color:var(
--spectrum-tag-m-border-color-error-selected,var(--spectrum-semantic-negative-background-color-default)
)}:host([selected][invalid]) .itemIcon,:host([selected][invalid]) .label,:host([selected][invalid]) .spectrum-Tags-itemClearButton{color:var(
--spectrum-tag-m-text-color-error-selected,var(--spectrum-alias-text-color-over-background)
)}:host([selected][invalid].focus-visible){border-color:var(
--spectrum-tag-m-text-color-selected-key-focus,var(--spectrum-alias-text-color-over-background)
);box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-tag-m-border-color-error-selected-key-focus,var(--spectrum-semantic-negative-background-color-key-focus)
)}:host([selected][invalid]:focus-visible){border-color:var(
--spectrum-tag-m-text-color-selected-key-focus,var(--spectrum-alias-text-color-over-background)
);box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-tag-m-border-color-error-selected-key-focus,var(--spectrum-semantic-negative-background-color-key-focus)
)}:host([selected][invalid]:hover){background-color:var(
--spectrum-tag-m-background-color-error-selected-hover,var(--spectrum-semantic-negative-background-color-hover)
);border-color:var(
--spectrum-tag-m-border-color-selected,var(--spectrum-global-color-gray-700)
)}:host([selected][invalid]:hover) .itemIcon{color:var(
--spectrum-tag-m-icon-color-selected,var(--spectrum-alias-icon-color-over-background)
)}:host([invalid]){border-color:var(
--spectrum-tag-m-border-color-error,var(--spectrum-semantic-negative-color-default)
);color:var(
--spectrum-tag-m-icon-color-error,var(--spectrum-semantic-negative-color-icon)
)}:host([invalid]:hover){border-color:var(
--spectrum-tag-m-border-color-error-hover,var(--spectrum-semantic-negative-color-state-hover)
);color:var(
--spectrum-tag-m-icon-color-error-hover,var(--spectrum-semantic-negative-color-icon)
)}:host([invalid]:hover) .itemIcon,:host([invalid]:hover) .spectrum-Tags-itemClearButton{color:var(
--spectrum-tag-m-icon-color-error-hover,var(--spectrum-semantic-negative-color-icon)
)}:host([invalid].focus-visible){border-color:var(
--spectrum-tag-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-tag-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);color:var(
--spectrum-tag-m-icon-color-error-hover,var(--spectrum-semantic-negative-color-icon)
)}:host([invalid]:focus-visible){border-color:var(
--spectrum-tag-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-tag-m-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);color:var(
--spectrum-tag-m-icon-color-error-hover,var(--spectrum-semantic-negative-color-icon)
)}:host([invalid]) .itemIcon,:host([invalid]) .spectrum-Tags-itemClearButton{color:var(
--spectrum-tag-m-icon-color-error,var(--spectrum-semantic-negative-color-icon)
)}:host([disabled]){background-color:var(
--spectrum-tag-m-background-color-disabled,var(--spectrum-alias-background-color-disabled)
);border-color:var(
--spectrum-tag-m-border-color-disabled,var(--spectrum-alias-border-color-disabled)
);color:var(
--spectrum-tag-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([disabled]) ::slotted([slot=avatar]){opacity:var(
--spectrum-avatar-size-100-opacity-disabled,.3
)}:host([disabled]) .itemIcon{color:var(
--spectrum-tag-m-icon-color-disabled,var(--spectrum-alias-icon-color-disabled)
)}:host([removable]:hover){color:var(
--spectrum-tag-m-removable-text-color-hover,var(--spectrum-alias-text-color-hover)
)}:host([removable]:hover) .clear-button{color:var(
--spectrum-tag-m-removable-icon-color-hover,var(--spectrum-alias-icon-color-hover)
)}:host([removable]:active){color:var(
--spectrum-tag-m-removable-text-color-down,var(--spectrum-alias-text-color-down)
)}:host([removable]:active) .clear-button{color:var(
--spectrum-tag-m-removable-icon-color-down,var(--spectrum-alias-icon-color-down)
)}:host([removable][invalid]:hover){border-color:var(
--spectrum-tag-m-removable-border-color-error-hover,var(--spectrum-semantic-negative-color-state-hover)
);color:var(
--spectrum-tag-m-removable-text-color-error-hover,var(--spectrum-semantic-negative-color-state-down)
)}:host([removable][invalid]:hover) .clear-button{color:var(
--spectrum-tag-m-removable-icon-color-error-hover,var(--spectrum-semantic-negative-color-icon)
)}:host([removable][invalid]:active){border-color:var(
--spectrum-tag-m-removable-border-color-error-down,var(--spectrum-semantic-negative-color-state-down)
);color:var(
--spectrum-tag-m-removable-text-color-error-down,var(--spectrum-semantic-negative-color-state-down)
)}:host([removable][invalid]:active) .clear-button{color:var(
--spectrum-tag-m-removable-icon-color-error-down,var(--spectrum-semantic-negative-color-icon)
)}:host([removable].focus-visible){color:var(
--spectrum-tag-m-removable-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([removable]:focus-visible){color:var(
--spectrum-tag-m-removable-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([removable].focus-visible) .clear-button{color:var(
--spectrum-tag-m-removable-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}:host([removable]:focus-visible) .clear-button{color:var(
--spectrum-tag-m-removable-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}:host([removable][selected]){color:var(
--spectrum-tag-m-removable-text-color-selected,var(--spectrum-alias-text-color-over-background)
)}:host([removable][selected]) .is-focused{color:var(
--spectrum-tag-m-removable-text-color-selected-key-focus,var(--spectrum-alias-text-color-over-background)
)}:host([removable][selected]) .spectrum-Tags-itemClearButton{color:var(
--spectrum-tag-m-removable-button-icon-color-selected,var(--spectrum-alias-icon-color-over-background)
)}:host([removable][selected]) .spectrum-Tags-itemClearButton:hover{color:var(
--spectrum-tag-m-removable-button-icon-color-selected-hover,var(--spectrum-alias-icon-color-over-background)
)}:host([removable][selected][invalid]){color:var(
--spectrum-tag-m-removable-text-color-error-key-focus,var(--spectrum-semantic-negative-color-state-down)
)}:host([removable]) .spectrum-Tags-itemClearButton.is-focused{background-color:var(
--spectrum-tag-m-removable-button-background-color-key-focus,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-tag-m-removable-border-color-key-focus,var(--spectrum-alias-border-color-focus)
);color:var(
--spectrum-tag-m-removable-button-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}:host([removable]) .spectrum-Tags-itemClearButton:hover{color:var(
--spectrum-tag-m-removable-button-icon-color-hover,var(--spectrum-alias-icon-color-hover)
)}:host([removable]) .spectrum-Tags-itemClearButton:active{background-color:var(
--spectrum-tag-m-removable-button-background-color-hover,var(--spectrum-global-color-gray-75)
)}:host([invalid]) .clear-button{--spectrum-clearbutton-medium-icon-color:var(
--spectrum-tag-icon-color-error-key-focus,var(--spectrum-global-color-red-600)
);--spectrum-clearbutton-medium-icon-color-hover:var(
--spectrum-clearbutton-medium-icon-color
);--spectrum-clearbutton-medium-icon-color-down:var(
--spectrum-tag-deletable-icon-color-error-down,var(--spectrum-global-color-red-700)
)}:host([invalid]):hover .clear-button{--spectrum-clearbutton-medium-icon-color:var(
--spectrum-tag-icon-color-error-hover,var(--spectrum-global-color-red-600)
);--spectrum-clearbutton-medium-icon-color-hover:var(
--spectrum-clearbutton-medium-icon-color
);--spectrum-clearbutton-medium-icon-color-down:var(
--spectrum-tag-deletable-icon-color-error-down,var(--spectrum-global-color-red-700)
)}:host([invalid]):active .clear-button{--spectrum-clearbutton-medium-icon-color:var(
--spectrum-tag-icon-color-error-hover,var(--spectrum-global-color-red-600)
);--spectrum-clearbutton-medium-icon-color-hover:var(
--spectrum-clearbutton-medium-icon-color
);--spectrum-clearbutton-medium-icon-color-down:var(
--spectrum-tag-deletable-icon-color-error-down,var(--spectrum-global-color-red-700)
)}`;

/**
 * @element sp-tag
 *
 * @slot - text content for labeling the tag
 * @slot avatar - an avatar element to display within the Tag
 * @slot icon - an icon element to display within the Tag
 */class Tag extends SpectrumElement{constructor(){super();this.deletable=false;this.disabled=false;this.readonly=false;this.handleFocusin=()=>{this.addEventListener('focusout',this.handleFocusout);this.addEventListener('keydown',this.handleKeydown);};this.handleFocusout=()=>{this.removeEventListener('keydown',this.handleKeydown);this.removeEventListener('focusout',this.handleFocusout);};this.handleKeydown=event=>{if(!this.deletable){return;}const{code}=event;switch(code){case'Backspace':case'Space':case'Delete':this.delete();return;default:return;}};this.addEventListener('focusin',this.handleFocusin);}static get styles(){return [styles$7];}get hasIcon(){return !!this.querySelector('[slot="icon"]');}get hasAvatar(){return !!this.querySelector('[slot="avatar"]');}delete(){if(this.readonly){return;}this.dispatchEvent(new Event('delete',{bubbles:true}));}render(){const slots=[];if(this.hasAvatar){slots.push(p`<slot name="avatar"></slot>`);}if(this.hasIcon){slots.push(p`<slot name="icon"></slot>`);}return p`${slots} <span class="label"><slot></slot></span>${this.deletable?p`<sp-clear-button class="clear-button" ?disabled="${this.disabled}" label="Remove" small tabindex="-1" @click="${this.delete}"></sp-clear-button>`:p``}`;}firstUpdated(changes){super.firstUpdated(changes);if(!this.hasAttribute('role')){this.setAttribute('role','listitem');}if(this.deletable){this.setAttribute('tabindex',!this.disabled&&this.matches(':first-of-type:not([disabled])')?'0':'-1');}}updated(changes){super.updated(changes);if(changes.has('disabled')){if(this.disabled){this.setAttribute('aria-disabled','true');}else {this.removeAttribute('aria-disabled');}}}}__decorate([e({type:Boolean,reflect:true})],Tag.prototype,"deletable",void 0);__decorate([e({type:Boolean,reflect:true})],Tag.prototype,"disabled",void 0);__decorate([e({type:Boolean,reflect:true})],Tag.prototype,"readonly",void 0);

iliadCustomElementsDefine('sp-tag',Tag);

const styles$6=r`:host{--spectrum-tag-s-border-size:var(--spectrum-alias-border-size-thin);--spectrum-tag-s-icon-gap:var(--spectrum-alias-item-workflow-icon-gap-s);--spectrum-tag-s-text-size:var(--spectrum-alias-item-text-size-s);--spectrum-tag-s-height:var(--spectrum-alias-item-height-s);--spectrum-tag-s-padding-left:var(
--spectrum-alias-item-workflow-padding-left-s
);--spectrum-tag-s-padding-right:var(--spectrum-alias-item-padding-s);--spectrum-alias-border-radius-regular:var(
--spectrum-global-dimension-size-50
);--spectrum-tag-m-text-color:var(--spectrum-alias-label-text-color);--spectrum-tag-m-background-color:var(--spectrum-global-color-gray-75);--spectrum-tag-m-border-color:var(
--spectrum-alias-border-color-darker-default
);--spectrum-tag-m-removable-icon-color:var(--spectrum-alias-icon-color);--spectrum-tag-m-background-color-hover:var(
--spectrum-global-color-gray-75
);--spectrum-tag-m-text-color-hover:var(--spectrum-alias-text-color-hover);--spectrum-tag-m-border-color-hover:var(
--spectrum-alias-border-color-darker-hover
);--spectrum-tag-m-removable-icon-color-hover:var(
--spectrum-alias-icon-color-hover
);--spectrum-tag-m-background-color-key-focus:var(
--spectrum-global-color-gray-75
);--spectrum-tag-m-text-color-key-focus:var(
--spectrum-alias-text-color-hover
);--spectrum-tag-m-border-color-key-focus:var(
--spectrum-alias-border-color-focus
);--spectrum-alias-focus-ring-size:var(
--spectrum-global-dimension-static-size-25
);--spectrum-tag-m-removable-icon-color-key-focus:var(
--spectrum-alias-icon-color-focus
);--spectrum-tag-m-background-color-selected:var(
--spectrum-global-color-gray-700
);--spectrum-tag-m-text-color-selected:var(
--spectrum-alias-text-color-over-background
);--spectrum-tag-m-border-color-selected:var(
--spectrum-global-color-gray-700
);--spectrum-tag-m-icon-color-selected:var(
--spectrum-alias-icon-color-over-background
);--spectrum-tag-m-background-color-selected-hover:var(
--spectrum-global-color-gray-800
);--spectrum-tag-m-border-color-selected-key-focus:var(
--spectrum-global-color-gray-800
);--spectrum-tag-m-text-color-selected-key-focus:var(
--spectrum-alias-text-color-over-background
);--spectrum-tag-m-border-color-error-selected:var(
--spectrum-semantic-negative-background-color-default
);--spectrum-tag-m-background-color-error-selected:var(
--spectrum-semantic-negative-background-color-default
);--spectrum-tag-m-text-color-error-selected:var(
--spectrum-alias-text-color-over-background
);--spectrum-tag-m-border-color-error-selected-key-focus:var(
--spectrum-semantic-negative-background-color-key-focus
);--spectrum-tag-m-background-color-error-selected-hover:var(
--spectrum-semantic-negative-background-color-hover
);--spectrum-tag-m-icon-color-error:var(
--spectrum-semantic-negative-color-icon
);--spectrum-tag-m-border-color-error:var(
--spectrum-semantic-negative-color-default
);--spectrum-tag-m-icon-color-error-hover:var(
--spectrum-semantic-negative-color-icon
);--spectrum-tag-m-border-color-error-hover:var(
--spectrum-semantic-negative-color-state-hover
);--spectrum-tag-m-text-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-tag-m-background-color-disabled:var(
--spectrum-alias-background-color-disabled
);--spectrum-tag-m-border-color-disabled:var(
--spectrum-alias-border-color-disabled
);--spectrum-avatar-size-100-opacity-disabled:0.3;--spectrum-tag-m-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-tag-m-removable-text-color-hover:var(
--spectrum-alias-text-color-hover
);--spectrum-tag-m-removable-text-color-down:var(
--spectrum-alias-text-color-down
);--spectrum-tag-m-removable-icon-color-down:var(
--spectrum-alias-icon-color-down
);--spectrum-tag-m-removable-border-color-error-hover:var(
--spectrum-semantic-negative-color-state-hover
);--spectrum-tag-m-removable-text-color-error-hover:var(
--spectrum-semantic-negative-color-state-down
);--spectrum-tag-m-removable-icon-color-error-hover:var(
--spectrum-semantic-negative-color-icon
);--spectrum-tag-m-removable-border-color-error-down:var(
--spectrum-semantic-negative-color-state-down
);--spectrum-tag-m-removable-text-color-error-down:var(
--spectrum-semantic-negative-color-state-down
);--spectrum-tag-m-removable-icon-color-error-down:var(
--spectrum-semantic-negative-color-icon
);--spectrum-tag-m-removable-text-color-key-focus:var(
--spectrum-alias-text-color-hover
);--spectrum-tag-m-removable-text-color-selected:var(
--spectrum-alias-text-color-over-background
);--spectrum-tag-m-removable-text-color-selected-key-focus:var(
--spectrum-alias-text-color-over-background
);--spectrum-tag-m-removable-button-icon-color-selected:var(
--spectrum-alias-icon-color-over-background
);--spectrum-tag-m-removable-button-icon-color-selected-hover:var(
--spectrum-alias-icon-color-over-background
);--spectrum-tag-m-removable-text-color-error-key-focus:var(
--spectrum-semantic-negative-color-state-down
);--spectrum-tag-m-removable-border-color-key-focus:var(
--spectrum-alias-border-color-focus
);--spectrum-tag-m-removable-button-background-color-key-focus:var(
--spectrum-global-color-gray-75
);--spectrum-tag-m-removable-button-icon-color-key-focus:var(
--spectrum-alias-icon-color-focus
);--spectrum-tag-m-removable-button-icon-color-hover:var(
--spectrum-alias-icon-color-hover
);--spectrum-tag-m-removable-button-background-color-hover:var(
--spectrum-global-color-gray-75
)}:host{--spectrum-tag-border-size:var(
--spectrum-tag-s-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-tag-icon-gap:var(
--spectrum-tag-s-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-s)
);--spectrum-tag-text-size:var(
--spectrum-tag-s-text-size,var(--spectrum-alias-item-text-size-s)
);--spectrum-tag-height:var(
--spectrum-tag-s-height,var(--spectrum-alias-item-height-s)
);--spectrum-tag-padding-left:var(
--spectrum-tag-s-padding-left,var(--spectrum-alias-item-workflow-padding-left-s)
);--spectrum-tag-padding-right:var(
--spectrum-tag-s-padding-right,var(--spectrum-alias-item-padding-s)
);--spectrum-tag-avatar-padding-x:var(--spectrum-tag-icon-gap);--spectrum-taggroup-tag-gap-x:var(--spectrum-global-dimension-size-100);--spectrum-taggroup-tag-gap-y:var(--spectrum-global-dimension-size-100)}:host{display:inline-block;list-style:none;margin:0;padding:0}`;

/**
 * @element sp-tags
 *
 * @slot - Tag elements to manage as a group
 */class Tags extends FocusVisiblePolyfillMixin(SpectrumElement){constructor(){super();this.handleFocusin=()=>{this.addEventListener('focusout',this.handleFocusout);this.addEventListener('keydown',this.handleKeydown);requestAnimationFrame(()=>{const firstTagWithTabIndex=this.tags.find(tag=>tag.tabIndex===0);if(firstTagWithTabIndex){firstTagWithTabIndex.tabIndex=-1;}});};this.handleKeydown=event=>{const{code}=event;const activeElement=this.getRootNode().activeElement;/* c8 ignore next 3 */if(!activeElement){return;}let nextIndex=this.tags.indexOf(activeElement);/* c8 ignore next 3 */if(nextIndex===-1){return;}const circularIndexedElement=(list,index)=>list[(list.length+index)%list.length];const tagFromDelta=delta=>{nextIndex+=delta;let nextTag=circularIndexedElement(this.tags,nextIndex);while(nextTag.disabled||!nextTag.deletable){nextIndex+=delta;nextTag=circularIndexedElement(this.tags,nextIndex);}};switch(code){case'ArrowUp':tagFromDelta(-1);break;case'ArrowLeft':tagFromDelta(this.isLTR?-1:1);break;case'ArrowRight':tagFromDelta(this.isLTR?1:-1);break;case'ArrowDown':tagFromDelta(1);break;case'End':nextIndex=this.tags.length;tagFromDelta(-1);break;case'Home':nextIndex=-1;tagFromDelta(1);break;case'PageUp':case'PageDown':const tagsSiblings=[...this.getRootNode().querySelectorAll('sp-tags')];if(tagsSiblings.length<2){return;}event.preventDefault();const currentIndex=tagsSiblings.indexOf(this);const offset=code==='PageUp'?-1:1;let nextTagsIndex=currentIndex+offset;let nextTags=circularIndexedElement(tagsSiblings,nextTagsIndex);while(!nextTags.tags.length){nextTagsIndex+=offset;nextTags=circularIndexedElement(tagsSiblings,nextTagsIndex);}nextTags.focus();return;default:return;}event.preventDefault();circularIndexedElement(this.tags,nextIndex).focus();};this.handleFocusout=()=>{const firstFocusableTag=this.tags.find(tag=>!tag.disabled&&tag.deletable);if(firstFocusableTag){firstFocusableTag.tabIndex=0;}this.removeEventListener('keydown',this.handleKeydown);this.removeEventListener('focusout',this.handleFocusout);};this.addEventListener('focusin',this.handleFocusin);}static get styles(){return [styles$6];}get tags(){return this.defaultNodes.filter(node=>node instanceof Tag);}focus(){if(!this.tags.length){return;}const firstFocusableTag=this.tags.find(tag=>!tag.disabled&&tag.deletable);if(firstFocusableTag){firstFocusableTag.focus();}}render(){return p`<slot></slot>`;}firstUpdated(){if(!this.hasAttribute('role')){this.setAttribute('role','list');}if(!this.hasAttribute('aria-label')){this.setAttribute('aria-label','Tags');}}}__decorate([o('')],Tags.prototype,"defaultNodes",void 0);

iliadCustomElementsDefine('sp-tags',Tags);

iliadCustomElementsDefine('sp-textfield',Textfield);

const styles$5=r`:host{--spectrum-alias-border-radius-small:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-border-size-thin:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-border-size-thick:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-border-color-focus:var(--spectrum-global-color-blue-400)}:host{--spectrum-thumbnail-border-radius:var(
--spectrum-alias-border-radius-small,var(--spectrum-global-dimension-size-25)
);--spectrum-thumbnail-size-S:var(--spectrum-global-dimension-size-300);--spectrum-thumbnail-size-M:var(--spectrum-global-dimension-size-400);--spectrum-thumbnail-size-L:var(--spectrum-global-dimension-size-500);--spectrum-thumbnail-size-XL:var(--spectrum-global-dimension-size-600);--spectrum-thumbnail-size-XXL:var(--spectrum-global-dimension-size-700)}:host{align-items:center;background-position:0 0,0 var(--spectrum-global-dimension-static-size-100,8px),var(--spectrum-global-dimension-static-size-100,8px) calc(-1*var(--spectrum-global-dimension-static-size-100,8px)),calc(-1*var(--spectrum-global-dimension-static-size-100,8px)) 0;background-size:var(--spectrum-global-dimension-static-size-200,16px) var(--spectrum-global-dimension-static-size-200,16px);border-radius:var(--spectrum-thumbnail-border-radius);display:flex;height:var(--spectrum-thumbnail-size-M);justify-content:center;margin:0;overflow:hidden;padding:0;position:relative;vertical-align:top;width:var(--spectrum-thumbnail-size-M)}:host:before{border-radius:var(--spectrum-thumbnail-border-radius);content:"";height:100%;position:absolute;width:100%;z-index:2}:host([size=s]){height:var(--spectrum-thumbnail-size-S);width:var(--spectrum-thumbnail-size-S)}:host([size=m]){height:var(--spectrum-thumbnail-size-M);width:var(--spectrum-thumbnail-size-M)}:host([size=l]){height:var(--spectrum-thumbnail-size-L);width:var(--spectrum-thumbnail-size-L)}:host([size=xl]){height:var(--spectrum-thumbnail-size-XL);width:var(--spectrum-thumbnail-size-XL)}:host([size=xxl]){height:var(--spectrum-thumbnail-size-XXL);width:var(--spectrum-thumbnail-size-XXL)}::slotted(*){max-height:100%;max-width:100%;z-index:1}.background{background-position:50%;background-size:cover;bottom:0;height:100%;left:0;position:absolute;right:0;top:0;width:100%;z-index:0}:host{--spectrum-thumbnail-border-size:var(
--spectrum-alias-border-size-thin,var(--spectrum-global-dimension-static-size-10)
);--spectrum-thumbnail-border-size-selected:var(
--spectrum-alias-border-size-thick,var(--spectrum-global-dimension-static-size-25)
);--spectrum-thumbnail-border-size-focus:var(
--spectrum-alias-border-size-thick,var(--spectrum-global-dimension-static-size-25)
);--spectrum-thumbnail-border-color:var(--spectrum-alias-dropshadow-color);--spectrum-thumbnail-border-color-focus:var(
--spectrum-alias-border-color-focus,var(--spectrum-global-color-blue-400)
);--spectrum-thumbnail-border-color-selected:var(
--spectrum-global-color-blue-500
)}:host{background-color:var(
--spectrum-global-color-static-white,#fff
);background-image:linear-gradient(-45deg,transparent 75.5%,var(--spectrum-global-color-static-gray-500,#bcbcbc) 75.5%),linear-gradient(45deg,transparent 75.5%,var(--spectrum-global-color-static-gray-500,#bcbcbc) 75.5%),linear-gradient(-45deg,var(--spectrum-global-color-static-gray-500,#bcbcbc) 25.5%,transparent 25.5%),linear-gradient(45deg,var(--spectrum-global-color-static-gray-500,#bcbcbc) 25.5%,transparent 25.5%)}:host:before{box-shadow:inset 0 0 0 var(--spectrum-thumbnail-border-size) var(--spectrum-thumbnail-border-color)}:host([selected]){box-shadow:0 0 0 calc(var(--spectrum-thumbnail-border-size-selected)/2) var(--spectrum-thumbnail-border-color-selected)}:host([selected]):before{box-shadow:inset 0 0 0 calc(var(--spectrum-thumbnail-border-size-selected)/2) var(--spectrum-thumbnail-border-color-selected)}:host(.focus-visible),:host([focused]){box-shadow:0 0 0 calc(var(--spectrum-thumbnail-border-size-focus)/2) var(--spectrum-thumbnail-border-color-focus)}:host(:focus-visible),:host([focused]){box-shadow:0 0 0 calc(var(--spectrum-thumbnail-border-size-focus)/2) var(--spectrum-thumbnail-border-color-focus)}:host(.focus-visible):before,:host([focused]):before{box-shadow:inset 0 0 0 calc(var(--spectrum-thumbnail-border-size-selected)/2) var(--spectrum-thumbnail-border-color-selected)}:host(:focus-visible):before,:host([focused]):before{box-shadow:inset 0 0 0 calc(var(--spectrum-thumbnail-border-size-selected)/2) var(--spectrum-thumbnail-border-color-selected)}::slotted(:not(img)){display:none}:host([cover]) ::slotted(img){height:100%;object-fit:cover;width:100%}`;

/**
 * @element sp-thumbnail
 *
 * @slot - image element to present in the Thumbnail
 */class Thumbnail extends SizedMixin(SpectrumElement,{validSizes:['s','m','l','xl','xxl'],noDefaultSize:true}){static get styles(){return [styles$5];}render(){return p`${this.background?p`<div class="background" style="background:${this.background}"></div>`:p``}<slot></slot>`;}}__decorate([e({type:String,reflect:true})],Thumbnail.prototype,"background",void 0);

iliadCustomElementsDefine('sp-thumbnail',Thumbnail);

const styles$4=r`:host{--spectrum-picker-m-popover-offset-y:var(
--spectrum-global-dimension-size-75
);--spectrum-tooltip-tip-height:var(--spectrum-global-dimension-size-50);--spectrum-tooltip-padding-top:var(--spectrum-global-dimension-size-50);--spectrum-tooltip-padding-x:var(--spectrum-global-dimension-size-125);--spectrum-tooltip-border-radius:var(--spectrum-global-dimension-size-50);--spectrum-tooltip-min-height:var(--spectrum-global-dimension-size-300);--spectrum-tooltip-max-width:var(--spectrum-global-dimension-size-2000);--spectrum-tooltip-text-size:var(--spectrum-global-dimension-font-size-75);--spectrum-tooltip-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-tooltip-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-tooltip-tip-width:var(--spectrum-global-dimension-size-100);--spectrum-tooltip-icon-margin-x:var(--spectrum-global-dimension-size-100);--spectrum-tooltip-icon-size:var(--spectrum-global-dimension-size-175);--spectrum-tooltip-tip-margin:var(--spectrum-global-dimension-size-50);--spectrum-tooltip-background-color:var(
--spectrum-global-color-static-gray-700
);--spectrum-tooltip-text-color:var(--spectrum-global-color-static-white);--spectrum-tooltip-negative-background-color:var(
--spectrum-global-color-static-red-700
);--spectrum-tooltip-info-background-color:var(
--spectrum-global-color-static-blue-700
);--spectrum-tooltip-positive-background-color:var(
--spectrum-global-color-static-green-700
)}:host{--spectrum-overlay-animation-distance:var(
--spectrum-picker-m-popover-offset-y,var(--spectrum-global-dimension-size-75)
);opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0s linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]){opacity:1;pointer-events:auto;transition-delay:0s;visibility:visible}:host([placement*=bottom][open]){transform:translateY(var(--spectrum-overlay-animation-distance))}:host([placement*=top][open]){transform:translateY(calc(-1*var(--spectrum-overlay-animation-distance)))}:host([placement*=right][open]){transform:translateX(var(--spectrum-overlay-animation-distance))}:host([placement*=left][open]){transform:translateX(calc(-1*var(--spectrum-overlay-animation-distance)))}:host{--spectrum-tooltip-target-offset:3px;--spectrum-tooltip-tip-width:var(
--spectrum-tooltip-tip-height,var(--spectrum-global-dimension-size-50)
)}:host{-webkit-font-smoothing:antialiased;align-items:center;border-radius:var(
--spectrum-tooltip-border-radius,var(--spectrum-global-dimension-size-50)
);box-sizing:border-box;display:inline-flex;flex-direction:row;font-size:var(
--spectrum-tooltip-text-size,var(--spectrum-global-dimension-font-size-75)
);font-weight:var(
--spectrum-tooltip-text-font-weight,var(--spectrum-global-font-weight-regular)
);left:0;line-height:var(
--spectrum-tooltip-text-line-height,var(--spectrum-alias-component-text-line-height)
);max-width:var(
--spectrum-tooltip-max-width,var(--spectrum-global-dimension-size-2000)
);min-height:var(
--spectrum-tooltip-min-height,var(--spectrum-global-dimension-size-300)
);padding:var(
--spectrum-tooltip-padding-top,var(--spectrum-global-dimension-size-50)
) var(
--spectrum-tooltip-padding-x,var(--spectrum-global-dimension-size-125)
);position:relative;top:0;vertical-align:top;width:auto;word-break:break-word}:host{cursor:default;-webkit-user-select:none;user-select:none}p{margin:0}#tip{border-bottom:var(
--spectrum-tooltip-tip-width,var(--spectrum-global-dimension-size-100)
) solid transparent;border-left:var(
--spectrum-tooltip-tip-width,var(--spectrum-global-dimension-size-100)
) solid transparent;border-right:var(
--spectrum-tooltip-tip-width,var(--spectrum-global-dimension-size-100)
) solid transparent;border-top-style:solid;border-top-width:var(
--spectrum-tooltip-tip-width,var(--spectrum-global-dimension-size-100)
);height:0;position:absolute;width:0}:host([placement*=left]) #tip,:host([placement*=right]) #tip{margin-top:calc(-1*var(--spectrum-tooltip-tip-width,var(--spectrum-global-dimension-size-100)));top:50%}:host([placement*=right]){margin-left:var(
--spectrum-tooltip-target-offset
)}:host([placement*=right]) #tip{right:100%;transform:rotate(90deg)}:host([placement*=left]){margin-right:var(
--spectrum-tooltip-target-offset
)}:host([placement*=left]) #tip{left:100%;transform:rotate(-90deg)}:host([placement*=top]){margin-bottom:var(
--spectrum-tooltip-target-offset
)}:host([placement*=top]) #tip{top:100%}:host([placement*=bottom]){margin-top:var(
--spectrum-tooltip-target-offset
)}:host([placement*=bottom]) #tip{bottom:100%;transform:rotate(-180deg)}:host([placement*=bottom]) #tip,:host([placement*=top]) #tip{left:50%;margin-left:calc(-1*var(--spectrum-tooltip-tip-width,var(--spectrum-global-dimension-size-100)))}:host([dir=ltr]) ::slotted([slot=icon]){margin-left:calc(var(--spectrum-tooltip-icon-margin-x,var(--spectrum-global-dimension-size-100)) - var(--spectrum-tooltip-padding-x,var(--spectrum-global-dimension-size-125)))}:host([dir=rtl]) ::slotted([slot=icon]){margin-right:calc(var(--spectrum-tooltip-icon-margin-x,var(--spectrum-global-dimension-size-100)) - var(--spectrum-tooltip-padding-x,var(--spectrum-global-dimension-size-125)))}:host([dir=ltr]) ::slotted([slot=icon]){margin-right:var(
--spectrum-tooltip-icon-margin-x,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) ::slotted([slot=icon]){margin-left:var(
--spectrum-tooltip-icon-margin-x,var(--spectrum-global-dimension-size-100)
)}::slotted([slot=icon]){align-self:flex-start;flex-shrink:0;height:var(
--spectrum-tooltip-icon-size,var(--spectrum-global-dimension-size-175)
);margin-top:1px;width:var(
--spectrum-tooltip-icon-size,var(--spectrum-global-dimension-size-175)
)}#label{line-height:var(
--spectrum-tooltip-text-line-height,var(--spectrum-alias-component-text-line-height)
)}:host{background-color:var(
--spectrum-tooltip-background-color,var(--spectrum-global-color-static-gray-700)
);color:var(
--spectrum-tooltip-text-color,var(--spectrum-global-color-static-white)
)}#tip{border-top-color:var(
--spectrum-tooltip-background-color,var(--spectrum-global-color-static-gray-700)
)}.spectrum-Tooltip--error,:host([variant=negative]){background-color:var(
--spectrum-tooltip-negative-background-color,var(--spectrum-global-color-static-red-700)
)}.spectrum-Tooltip--error #tip,:host([variant=negative]) #tip{border-top-color:var(
--spectrum-tooltip-negative-background-color,var(--spectrum-global-color-static-red-700)
)}.spectrum-Tooltip--help,:host([variant=info]){background-color:var(
--spectrum-tooltip-info-background-color,var(--spectrum-global-color-static-blue-700)
)}.spectrum-Tooltip--help #tip,:host([variant=info]) #tip{border-top-color:var(
--spectrum-tooltip-info-background-color,var(--spectrum-global-color-static-blue-700)
)}.spectrum-Tooltip--success,:host([variant=positive]){background-color:var(
--spectrum-tooltip-positive-background-color,var(--spectrum-global-color-static-green-700)
)}.spectrum-Tooltip--success #tip,:host([variant=positive]) #tip{border-top-color:var(
--spectrum-tooltip-positive-background-color,var(--spectrum-global-color-static-green-700)
)}#tip{border:none}:host([placement*=bottom]) #tip,:host([placement*=left]) #tip,:host([placement*=right]) #tip{transform:none}#tip:after{border:var(
--spectrum-tooltip-tip-height,var(--spectrum-global-dimension-size-50)
) solid transparent;content:"";height:0;left:0;position:absolute;width:0}:host([placement*=bottom]) #tip:after{bottom:100%;transform:scaleY(-1)}:host([placement*=left]) #tip:after{left:100%;transform:rotate(-90deg)}:host([placement*=right]) #tip:after{left:auto;right:100%;transform:rotate(90deg)}:host([placement]) #tip:after{border-top-color:var(
--spectrum-tooltip-background-color,var(--spectrum-global-color-static-gray-700)
)}:host([variant=negative]) #tip:after{border-top-color:var(
--spectrum-tooltip-negative-background-color,var(--spectrum-global-color-static-red-700)
)}:host([variant=info]) #tip:after{border-top-color:var(
--spectrum-tooltip-info-background-color,var(--spectrum-global-color-static-blue-700)
)}:host([variant=positive]) #tip:after{border-top-color:var(
--spectrum-tooltip-positive-background-color,var(--spectrum-global-color-static-green-700)
)}`;

/**
 * @element sp-tooltip
 *
 * @slot icon - the icon element appearing at the start of the label
 * @slot - the text label of the Tooltip
 */class Tooltip extends SpectrumElement{constructor(){super();this._tooltipId=`sp-tooltip-describedby-helper-${Tooltip.instanceCount++}`;this.open=false;/**
         * @type {"auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | "none"}
         * @attr
         */this.placement='top';/* Ensure that a '' value for `variant` removes the attribute instead of a blank value */this._variant='';this.addEventListener('sp-overlay-query',this.onOverlayQuery);}static get styles(){return [styles$4];}get variant(){return this._variant;}set variant(variant){if(variant===this.variant){return;}if(['info','positive','negative'].includes(variant)){this.setAttribute('variant',variant);this._variant=variant;return;}this.removeAttribute('variant');this._variant='';}onOverlayQuery(event){/* c8 ignore next */if(!event.target)return;const target=event.target;/* c8 ignore next */if(target!==this)return;event.detail.overlayContentTipElement=this.tipElement;}render(){return p`<slot name="icon"></slot><span id="label"><slot></slot></span><span id="tip"></span>`;}overlayWillOpenCallback({trigger}){this.setAttribute('aria-hidden','true');if(!this._proxy){this._proxy=document.createElement('span');this._proxy.textContent=this.textContent;this._proxy.id=this._tooltipId;this._proxy.hidden=true;this._proxy.setAttribute('role','tooltip');}trigger.setAttribute('aria-describedby',this._tooltipId);trigger.insertAdjacentElement('beforebegin',this._proxy);}overlayOpenCancelledCallback({trigger}){this.overlayCloseCallback({trigger});}overlayCloseCallback({trigger}){trigger.removeAttribute('aria-describedby');this.removeAttribute('aria-hidden');this.removeProxy();}removeProxy(){if(this._proxy){this._proxy.remove();this._proxy=undefined;}}}/**
 * @private
 */Tooltip.instanceCount=0;__decorate([e({type:Boolean,reflect:true})],Tooltip.prototype,"open",void 0);__decorate([e({reflect:true})],Tooltip.prototype,"placement",void 0);__decorate([i('#tip')],Tooltip.prototype,"tipElement",void 0);__decorate([e({type:String})],Tooltip.prototype,"variant",null);

iliadCustomElementsDefine('sp-tooltip',Tooltip);

const noSelectionStyle='transform: translateX(0px) scaleX(0) scaleY(0)';/**
 * @element sp-top-nav
 *
 * @slot - Nav Items to display as a group
 * @attr {Boolean} quiet - The tabs border is a lot smaller
 * @attr {Boolean} compact - The collection of tabs take up less space
 */class TopNav extends SpectrumElement{constructor(){super(...arguments);this.selectionIndicatorStyle=noSelectionStyle;this.shouldAnimate=false;this.onClick=event=>{const target=event.target;this.shouldAnimate=true;this.selectTarget(target);};this.items=[];this.updateSelectionIndicator=async()=>{const selectedItem=this.items.find(item=>item.value===this.selected||item.value===window.location.href);if(!selectedItem){this.selectionIndicatorStyle=noSelectionStyle;return;}await Promise.all([selectedItem.updateComplete,document.fonts?document.fonts.ready:Promise.resolve()]);const itemBoundingClientRect=selectedItem.getBoundingClientRect();const parentBoundingClientRect=this.getBoundingClientRect();const width=itemBoundingClientRect.width;const offset=this.dir==='ltr'?itemBoundingClientRect.left-parentBoundingClientRect.left:itemBoundingClientRect.right-parentBoundingClientRect.right;this.selectionIndicatorStyle=`transform: translateX(${offset}px) scaleX(${this.dir==='ltr'?width:-1*width});`;};}static get styles(){return [styles$9];}set selected(value){const oldValue=this.selected;if(value===oldValue){return;}this.updateCheckedState(value);this._selected=value;this.requestUpdate('selected',oldValue);}get selected(){return this._selected;}manageItems(){this.items=[...this.querySelectorAll('sp-top-nav-item')];const selectedChild=this.items.find(item=>item.value===window.location.href);if(selectedChild){this.selectTarget(selectedChild);}}render(){return p`<div @click="${this.onClick}" id="list"><slot @slotchange="${this.onSlotChange}"></slot><div id="selectionIndicator" class="${l(this.shouldAnimate?undefined:'first-position')}" style="${this.selectionIndicatorStyle}"></div></div>`;}firstUpdated(changes){super.firstUpdated(changes);this.setAttribute('direction','horizontal');this.manageItems();}updated(changes){super.updated(changes);if(changes.has('dir')){this.updateSelectionIndicator();}if(!this.shouldAnimate&&typeof changes.get('shouldAnimate')!=='undefined'){this.shouldAnimate=true;}}selectTarget(target){const{value}=target;if(value){this.selected=value;}}onSlotChange(){this.manageItems();}updateCheckedState(value){this.items.forEach(item=>{item.selected=false;});requestAnimationFrame(()=>{if(value&&value.length){const currentItem=this.items.find(item=>item.value===value||item.value===window.location.href);if(currentItem){currentItem.selected=true;}else {this.selected='';}}this.updateSelectionIndicator();});}connectedCallback(){super.connectedCallback();window.addEventListener('resize',this.updateSelectionIndicator);if('fonts'in document){document.fonts.addEventListener('loadingdone',this.updateSelectionIndicator);}}disconnectedCallback(){window.removeEventListener('resize',this.updateSelectionIndicator);if('fonts'in document){document.fonts.removeEventListener('loadingdone',this.updateSelectionIndicator);}super.disconnectedCallback();}}__decorate([e()],TopNav.prototype,"selectionIndicatorStyle",void 0);__decorate([e({attribute:false})],TopNav.prototype,"shouldAnimate",void 0);__decorate([e({reflect:true})],TopNav.prototype,"selected",null);

iliadCustomElementsDefine('sp-top-nav',TopNav);

const styles$3=r`a{color:inherit}a:focus{outline:0}`;

/**
 * @element sp-top-nav-item
 *
 * @slot - text label of the Top Nav Item
 */class TopNavItem extends LikeAnchor(Focusable){constructor(){super(...arguments);this.selected=false;this.value='';}static get styles(){return [styles$a,styles$3];}get focusElement(){return this.anchor;}click(){this.anchor.click();}render(){return p`<a id="itemLabel" href="${l(this.href)}" download="${l(this.download)}" target="${l(this.target)}" aria-label="${l(this.label)}" aria-current="${l(this.selected&&this.href?'page':undefined)}" rel="${l(this.rel)}"><slot></slot></a>`;}firstUpdated(changes){super.firstUpdated(changes);}updated(changes){super.updated(changes);this.value=this.anchor.href;}}__decorate([i('a')],TopNavItem.prototype,"anchor",void 0);__decorate([e({type:Boolean,reflect:true})],TopNavItem.prototype,"selected",void 0);

iliadCustomElementsDefine('sp-top-nav-item',TopNavItem);

const styles$2=r`:host{--spectrum-tray-width:100%;--spectrum-tray-max-width:375px;--spectrum-tray-min-height:var(
--spectrum-global-dimension-static-size-800
);--spectrum-tray-full-width-border-radius:var(
--spectrum-alias-border-radius-regular
);--spectrum-tray-border-radius:0px;--spectrum-tray-padding-y:0;--spectrum-tray-padding-x:var(--spectrum-global-dimension-static-size-100);--spectrum-dialog-confirm-exit-animation-duration:var(
--spectrum-global-animation-duration-100
);--spectrum-dialog-confirm-entry-animation-duration:var(
--spectrum-global-animation-duration-500
);--spectrum-dialog-confirm-entry-animation-delay:var(
--spectrum-global-animation-duration-200
)}.tray{opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0s linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]) .tray{opacity:1;pointer-events:auto;transition-delay:0s;visibility:visible}:host{--spectrum-dialog-confirm-exit-animation-delay:0ms;--spectrum-tray-margin-top:64px}:host([dir=ltr]) .spectrum-Tray-wrapper{left:0}:host([dir=rtl]) .spectrum-Tray-wrapper{right:0}.spectrum-Tray-wrapper{bottom:0;display:flex;justify-content:center;position:fixed;width:100%;z-index:2}.tray{border-radius:var(
--spectrum-tray-full-width-border-radius,var(--spectrum-alias-border-radius-regular)
) var(
--spectrum-tray-full-width-border-radius,var(--spectrum-alias-border-radius-regular)
) var(--spectrum-tray-border-radius,0) var(--spectrum-tray-border-radius,0);max-height:calc(100vh - var(--spectrum-tray-margin-top));max-width:var(--spectrum-tray-max-width,375px);min-height:var(
--spectrum-tray-min-height,var(--spectrum-global-dimension-static-size-800)
);outline:0;overflow:auto;padding:var(--spectrum-tray-padding-y,0) var(
--spectrum-tray-padding-x,var(--spectrum-global-dimension-static-size-100)
);transform:translateY(100%);transition:opacity var(
--spectrum-dialog-confirm-exit-animation-duration,var(--spectrum-global-animation-duration-100)
) cubic-bezier(.5,0,1,1) var(--spectrum-dialog-confirm-exit-animation-delay,0ms),visibility 0s linear calc(var(--spectrum-dialog-confirm-exit-animation-delay,0ms) + var(--spectrum-dialog-confirm-exit-animation-duration,var(--spectrum-global-animation-duration-100))),transform var(
--spectrum-dialog-confirm-exit-animation-duration,var(--spectrum-global-animation-duration-100)
) cubic-bezier(.5,0,1,1) var(--spectrum-dialog-confirm-exit-animation-delay,0ms);width:var(--spectrum-tray-width,100%)}:host([open]) .tray{transform:translateY(0);transition:transform var(
--spectrum-dialog-confirm-entry-animation-duration,var(--spectrum-global-animation-duration-500)
) cubic-bezier(0,0,.4,1) var(
--spectrum-dialog-confirm-entry-animation-delay,var(--spectrum-global-animation-duration-200)
),opacity var(
--spectrum-dialog-confirm-entry-animation-duration,var(--spectrum-global-animation-duration-500)
) cubic-bezier(0,0,.4,1) var(
--spectrum-dialog-confirm-entry-animation-delay,var(--spectrum-global-animation-duration-200)
)}@media (max-inline-size:375px){.tray{border-radius:var(--spectrum-tray-border-radius,0)}}:host{align-items:flex-end}.tray{padding:var(--spectrum-tray-padding-y,0) var(--spectrum-tray-padding-x,0)}`;

/**
 * @element sp-tray
 *
 * @slot - content to display within the Tray
 */class Tray extends SpectrumElement{constructor(){super(...arguments);this.open=false;}static get styles(){return [styles$r,styles$2];}focus(){const firstFocusable=this.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [focusable]');if(firstFocusable){firstFocusable.focus();}else if(this.children.length===1){this.tray.focus();}else {super.focus();}}close(){this.open=false;this.dispatchEvent(new Event('close',{bubbles:true}));}render(){return p`<sp-underlay ?open="${this.open}" @click="${this.close}"></sp-underlay><div class="tray modal" tabindex="-1"><slot></slot></div>`;}}__decorate([e({type:Boolean,reflect:true})],Tray.prototype,"open",void 0);__decorate([i('.tray')],Tray.prototype,"tray",void 0);

iliadCustomElementsDefine('sp-tray',Tray);

const styles$1=r`:host{--spectrum-breadcrumb-s-multiline-title-margin-top:var(
--spectrum-global-dimension-static-size-0
);--spectrum-breadcrumb-s-multiline-title-text-line-height:var(
--spectrum-alias-heading-text-line-height
);--spectrum-breadcrumb-s-multiline-title-text-font-weight:var(
--spectrum-alias-body-text-font-weight-strong
);--spectrum-breadcrumb-s-multiline-title-text-size:var(
--spectrum-global-dimension-font-size-300
);--spectrum-breadcrumb-s-multiline-item-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-breadcrumb-s-multiline-item-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-breadcrumb-s-multiline-item-text-size:var(
--spectrum-global-dimension-font-size-75
);--spectrum-breadcrumb-s-item-border-size-key-focus:var(
--spectrum-alias-border-size-thick
);--spectrum-breadcrumb-s-list-height:var(
--spectrum-global-dimension-size-400
);--spectrum-breadcrumb-s-title-text-font-weight:var(
--spectrum-alias-body-text-font-weight-strong
);--spectrum-breadcrumb-s-button-gap:var(
--spectrum-global-dimension-static-size-10
);--spectrum-breadcrumb-s-item-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-breadcrumb-s-item-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-breadcrumb-s-item-padding-x:var(
--spectrum-global-dimension-size-100
);--spectrum-breadcrumb-s-item-text-size:var(
--spectrum-global-dimension-font-size-75
);--spectrum-breadcrumb-s-item-margin-right:var(
--spectrum-global-dimension-static-size-10
);--spectrum-breadcrumb-s-item-border-radius:var(
--spectrum-alias-border-radius-regular
);--spectrum-breadcrumb-m-multiline-title-margin-top:var(
--spectrum-global-dimension-static-size-0
);--spectrum-breadcrumb-m-multiline-title-text-line-height:var(
--spectrum-alias-heading-text-line-height
);--spectrum-breadcrumb-m-multiline-title-text-font-weight:var(
--spectrum-alias-body-text-font-weight-strong
);--spectrum-breadcrumb-m-multiline-title-text-size:var(
--spectrum-global-dimension-font-size-300
);--spectrum-breadcrumb-m-multiline-item-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-breadcrumb-m-multiline-item-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-breadcrumb-m-multiline-item-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-breadcrumb-m-item-border-size-key-focus:var(
--spectrum-alias-border-size-thick
);--spectrum-breadcrumb-m-list-height:var(
--spectrum-global-dimension-size-400
);--spectrum-breadcrumb-m-title-text-font-weight:var(
--spectrum-alias-body-text-font-weight-strong
);--spectrum-breadcrumb-m-button-gap:var(
--spectrum-global-dimension-static-size-10
);--spectrum-breadcrumb-m-item-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-breadcrumb-m-item-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-breadcrumb-m-item-padding-x:var(
--spectrum-global-dimension-size-100
);--spectrum-breadcrumb-m-item-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-breadcrumb-m-item-margin-right:var(
--spectrum-global-dimension-static-size-10
);--spectrum-breadcrumb-m-item-border-radius:var(
--spectrum-alias-border-radius-regular
);--spectrum-breadcrumb-l-multiline-title-margin-top:var(
--spectrum-global-dimension-static-size-0
);--spectrum-breadcrumb-l-multiline-title-text-line-height:var(
--spectrum-alias-heading-text-line-height
);--spectrum-breadcrumb-l-multiline-title-text-font-weight:var(
--spectrum-alias-body-text-font-weight-strong
);--spectrum-breadcrumb-l-multiline-title-text-size:var(
--spectrum-global-dimension-font-size-300
);--spectrum-breadcrumb-l-multiline-item-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-breadcrumb-l-multiline-item-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-breadcrumb-l-multiline-item-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-breadcrumb-l-item-border-size-key-focus:var(
--spectrum-alias-border-size-thick
);--spectrum-breadcrumb-l-list-height:var(
--spectrum-global-dimension-size-400
);--spectrum-breadcrumb-l-title-text-font-weight:var(
--spectrum-alias-body-text-font-weight-strong
);--spectrum-breadcrumb-l-button-gap:var(
--spectrum-global-dimension-static-size-10
);--spectrum-breadcrumb-l-item-text-font-weight:var(
--spectrum-alias-body-text-font-weight
);--spectrum-breadcrumb-l-item-text-line-height:var(
--spectrum-alias-component-text-line-height
);--spectrum-breadcrumb-l-item-padding-x:var(
--spectrum-global-dimension-size-100
);--spectrum-breadcrumb-l-item-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-breadcrumb-l-item-margin-right:var(
--spectrum-global-dimension-static-size-10
);--spectrum-breadcrumb-l-item-border-radius:var(
--spectrum-alias-border-radius-regular
);--spectrum-breadcrumb-m-item-text-color:var(
--spectrum-alias-label-text-color
);--spectrum-breadcrumb-m-item-text-color-drop:var(
--spectrum-alias-text-color-hover
);--spectrum-breadcrumb-m-item-background-color-drop:var(
--spectrum-alias-highlight-selected
);--spectrum-breadcrumb-m-item-border-color-drop:var(
--spectrum-global-color-blue-500
);--spectrum-breadcrumb-m-separator-icon-color:var(
--spectrum-alias-icon-color
);--spectrum-breadcrumb-m-item-text-color-hover:var(
--spectrum-alias-text-color-hover
);--spectrum-breadcrumb-m-item-text-color-key-focus:var(
--spectrum-alias-text-color-hover
);--spectrum-breadcrumb-m-item-border-color-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-breadcrumb-m-item-text-color-down:var(
--spectrum-alias-text-color-down
);--spectrum-breadcrumb-m-item-text-color-disabled:var(
--spectrum-alias-text-color-disabled
)}.spectrum-Breadcrumbs--sizeS{--spectrum-breadcrumb-multiline-title-margin-top:var(
--spectrum-breadcrumb-s-multiline-title-margin-top,var(--spectrum-global-dimension-static-size-0)
);--spectrum-breadcrumb-multiline-title-text-line-height:var(
--spectrum-breadcrumb-s-multiline-title-text-line-height,var(--spectrum-alias-heading-text-line-height)
);--spectrum-breadcrumb-multiline-title-text-font-weight:var(
--spectrum-breadcrumb-s-multiline-title-text-font-weight,var(--spectrum-alias-body-text-font-weight-strong)
);--spectrum-breadcrumb-multiline-title-text-size:var(
--spectrum-breadcrumb-s-multiline-title-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-breadcrumb-multiline-item-text-font-weight:var(
--spectrum-breadcrumb-s-multiline-item-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-breadcrumb-multiline-item-text-line-height:var(
--spectrum-breadcrumb-s-multiline-item-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-breadcrumb-multiline-item-text-size:var(
--spectrum-breadcrumb-s-multiline-item-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-breadcrumb-item-border-size-key-focus:var(
--spectrum-breadcrumb-s-item-border-size-key-focus,var(--spectrum-alias-border-size-thick)
);--spectrum-breadcrumb-list-height:var(
--spectrum-breadcrumb-s-list-height,var(--spectrum-global-dimension-size-400)
);--spectrum-breadcrumb-title-text-font-weight:var(
--spectrum-breadcrumb-s-title-text-font-weight,var(--spectrum-alias-body-text-font-weight-strong)
);--spectrum-breadcrumb-button-gap:var(
--spectrum-breadcrumb-s-button-gap,var(--spectrum-global-dimension-static-size-10)
);--spectrum-breadcrumb-item-text-font-weight:var(
--spectrum-breadcrumb-s-item-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-breadcrumb-item-text-line-height:var(
--spectrum-breadcrumb-s-item-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-breadcrumb-item-padding-x:var(
--spectrum-breadcrumb-s-item-padding-x,var(--spectrum-global-dimension-size-100)
);--spectrum-breadcrumb-item-text-size:var(
--spectrum-breadcrumb-s-item-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-breadcrumb-item-margin-right:var(
--spectrum-breadcrumb-s-item-margin-right,var(--spectrum-global-dimension-static-size-10)
);--spectrum-breadcrumb-item-border-radius:var(
--spectrum-breadcrumb-s-item-border-radius,var(--spectrum-alias-border-radius-regular)
)}.spectrum-Breadcrumbs--sizeM{--spectrum-breadcrumb-multiline-title-margin-top:var(
--spectrum-breadcrumb-m-multiline-title-margin-top,var(--spectrum-global-dimension-static-size-0)
);--spectrum-breadcrumb-multiline-title-text-line-height:var(
--spectrum-breadcrumb-m-multiline-title-text-line-height,var(--spectrum-alias-heading-text-line-height)
);--spectrum-breadcrumb-multiline-title-text-font-weight:var(
--spectrum-breadcrumb-m-multiline-title-text-font-weight,var(--spectrum-alias-body-text-font-weight-strong)
);--spectrum-breadcrumb-multiline-title-text-size:var(
--spectrum-breadcrumb-m-multiline-title-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-breadcrumb-multiline-item-text-font-weight:var(
--spectrum-breadcrumb-m-multiline-item-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-breadcrumb-multiline-item-text-line-height:var(
--spectrum-breadcrumb-m-multiline-item-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-breadcrumb-multiline-item-text-size:var(
--spectrum-breadcrumb-m-multiline-item-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-breadcrumb-item-border-size-key-focus:var(
--spectrum-breadcrumb-m-item-border-size-key-focus,var(--spectrum-alias-border-size-thick)
);--spectrum-breadcrumb-list-height:var(
--spectrum-breadcrumb-m-list-height,var(--spectrum-global-dimension-size-400)
);--spectrum-breadcrumb-title-text-font-weight:var(
--spectrum-breadcrumb-m-title-text-font-weight,var(--spectrum-alias-body-text-font-weight-strong)
);--spectrum-breadcrumb-button-gap:var(
--spectrum-breadcrumb-m-button-gap,var(--spectrum-global-dimension-static-size-10)
);--spectrum-breadcrumb-item-text-font-weight:var(
--spectrum-breadcrumb-m-item-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-breadcrumb-item-text-line-height:var(
--spectrum-breadcrumb-m-item-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-breadcrumb-item-padding-x:var(
--spectrum-breadcrumb-m-item-padding-x,var(--spectrum-global-dimension-size-100)
);--spectrum-breadcrumb-item-text-size:var(
--spectrum-breadcrumb-m-item-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-breadcrumb-item-margin-right:var(
--spectrum-breadcrumb-m-item-margin-right,var(--spectrum-global-dimension-static-size-10)
);--spectrum-breadcrumb-item-border-radius:var(
--spectrum-breadcrumb-m-item-border-radius,var(--spectrum-alias-border-radius-regular)
)}.spectrum-Breadcrumbs--sizeL{--spectrum-breadcrumb-multiline-title-margin-top:var(
--spectrum-breadcrumb-l-multiline-title-margin-top,var(--spectrum-global-dimension-static-size-0)
);--spectrum-breadcrumb-multiline-title-text-line-height:var(
--spectrum-breadcrumb-l-multiline-title-text-line-height,var(--spectrum-alias-heading-text-line-height)
);--spectrum-breadcrumb-multiline-title-text-font-weight:var(
--spectrum-breadcrumb-l-multiline-title-text-font-weight,var(--spectrum-alias-body-text-font-weight-strong)
);--spectrum-breadcrumb-multiline-title-text-size:var(
--spectrum-breadcrumb-l-multiline-title-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-breadcrumb-multiline-item-text-font-weight:var(
--spectrum-breadcrumb-l-multiline-item-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-breadcrumb-multiline-item-text-line-height:var(
--spectrum-breadcrumb-l-multiline-item-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-breadcrumb-multiline-item-text-size:var(
--spectrum-breadcrumb-l-multiline-item-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-breadcrumb-item-border-size-key-focus:var(
--spectrum-breadcrumb-l-item-border-size-key-focus,var(--spectrum-alias-border-size-thick)
);--spectrum-breadcrumb-list-height:var(
--spectrum-breadcrumb-l-list-height,var(--spectrum-global-dimension-size-400)
);--spectrum-breadcrumb-title-text-font-weight:var(
--spectrum-breadcrumb-l-title-text-font-weight,var(--spectrum-alias-body-text-font-weight-strong)
);--spectrum-breadcrumb-button-gap:var(
--spectrum-breadcrumb-l-button-gap,var(--spectrum-global-dimension-static-size-10)
);--spectrum-breadcrumb-item-text-font-weight:var(
--spectrum-breadcrumb-l-item-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-breadcrumb-item-text-line-height:var(
--spectrum-breadcrumb-l-item-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-breadcrumb-item-padding-x:var(
--spectrum-breadcrumb-l-item-padding-x,var(--spectrum-global-dimension-size-100)
);--spectrum-breadcrumb-item-text-size:var(
--spectrum-breadcrumb-l-item-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-breadcrumb-item-margin-right:var(
--spectrum-breadcrumb-l-item-margin-right,var(--spectrum-global-dimension-static-size-10)
);--spectrum-breadcrumb-item-border-radius:var(
--spectrum-breadcrumb-l-item-border-radius,var(--spectrum-alias-border-radius-regular)
)}.spectrum-Breadcrumbs{display:flex;flex-basis:0%;flex-grow:1;flex-shrink:0;flex-wrap:nowrap;justify-content:start;list-style-type:none;margin:0;padding:0}:host([dir=rtl]) .spectrum-Breadcrumbs-itemSeparator{transform:matrix(-1,0,0,1,0,0) scale(1)}.spectrum-Breadcrumbs-itemSeparator{opacity:1;position:relative;top:var(--spectrum-global-dimension-size-10)}.spectrum-Breadcrumbs-item--sizeS{--spectrum-breadcrumb-multiline-title-margin-top:var(
--spectrum-breadcrumb-s-multiline-title-margin-top,var(--spectrum-global-dimension-static-size-0)
);--spectrum-breadcrumb-multiline-title-text-line-height:var(
--spectrum-breadcrumb-s-multiline-title-text-line-height,var(--spectrum-alias-heading-text-line-height)
);--spectrum-breadcrumb-multiline-title-text-font-weight:var(
--spectrum-breadcrumb-s-multiline-title-text-font-weight,var(--spectrum-alias-body-text-font-weight-strong)
);--spectrum-breadcrumb-multiline-title-text-size:var(
--spectrum-breadcrumb-s-multiline-title-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-breadcrumb-multiline-item-text-font-weight:var(
--spectrum-breadcrumb-s-multiline-item-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-breadcrumb-multiline-item-text-line-height:var(
--spectrum-breadcrumb-s-multiline-item-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-breadcrumb-multiline-item-text-size:var(
--spectrum-breadcrumb-s-multiline-item-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-breadcrumb-item-border-size-key-focus:var(
--spectrum-breadcrumb-s-item-border-size-key-focus,var(--spectrum-alias-border-size-thick)
);--spectrum-breadcrumb-list-height:var(
--spectrum-breadcrumb-s-list-height,var(--spectrum-global-dimension-size-400)
);--spectrum-breadcrumb-title-text-font-weight:var(
--spectrum-breadcrumb-s-title-text-font-weight,var(--spectrum-alias-body-text-font-weight-strong)
);--spectrum-breadcrumb-button-gap:var(
--spectrum-breadcrumb-s-button-gap,var(--spectrum-global-dimension-static-size-10)
);--spectrum-breadcrumb-item-text-font-weight:var(
--spectrum-breadcrumb-s-item-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-breadcrumb-item-text-line-height:var(
--spectrum-breadcrumb-s-item-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-breadcrumb-item-padding-x:var(
--spectrum-breadcrumb-s-item-padding-x,var(--spectrum-global-dimension-size-100)
);--spectrum-breadcrumb-item-text-size:var(
--spectrum-breadcrumb-s-item-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-breadcrumb-item-margin-right:var(
--spectrum-breadcrumb-s-item-margin-right,var(--spectrum-global-dimension-static-size-10)
);--spectrum-breadcrumb-item-border-radius:var(
--spectrum-breadcrumb-s-item-border-radius,var(--spectrum-alias-border-radius-regular)
)}.spectrum-Breadcrumbs-item--sizeM{--spectrum-breadcrumb-multiline-title-margin-top:var(
--spectrum-breadcrumb-m-multiline-title-margin-top,var(--spectrum-global-dimension-static-size-0)
);--spectrum-breadcrumb-multiline-title-text-line-height:var(
--spectrum-breadcrumb-m-multiline-title-text-line-height,var(--spectrum-alias-heading-text-line-height)
);--spectrum-breadcrumb-multiline-title-text-font-weight:var(
--spectrum-breadcrumb-m-multiline-title-text-font-weight,var(--spectrum-alias-body-text-font-weight-strong)
);--spectrum-breadcrumb-multiline-title-text-size:var(
--spectrum-breadcrumb-m-multiline-title-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-breadcrumb-multiline-item-text-font-weight:var(
--spectrum-breadcrumb-m-multiline-item-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-breadcrumb-multiline-item-text-line-height:var(
--spectrum-breadcrumb-m-multiline-item-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-breadcrumb-multiline-item-text-size:var(
--spectrum-breadcrumb-m-multiline-item-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-breadcrumb-item-border-size-key-focus:var(
--spectrum-breadcrumb-m-item-border-size-key-focus,var(--spectrum-alias-border-size-thick)
);--spectrum-breadcrumb-list-height:var(
--spectrum-breadcrumb-m-list-height,var(--spectrum-global-dimension-size-400)
);--spectrum-breadcrumb-title-text-font-weight:var(
--spectrum-breadcrumb-m-title-text-font-weight,var(--spectrum-alias-body-text-font-weight-strong)
);--spectrum-breadcrumb-button-gap:var(
--spectrum-breadcrumb-m-button-gap,var(--spectrum-global-dimension-static-size-10)
);--spectrum-breadcrumb-item-text-font-weight:var(
--spectrum-breadcrumb-m-item-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-breadcrumb-item-text-line-height:var(
--spectrum-breadcrumb-m-item-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-breadcrumb-item-padding-x:var(
--spectrum-breadcrumb-m-item-padding-x,var(--spectrum-global-dimension-size-100)
);--spectrum-breadcrumb-item-text-size:var(
--spectrum-breadcrumb-m-item-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-breadcrumb-item-margin-right:var(
--spectrum-breadcrumb-m-item-margin-right,var(--spectrum-global-dimension-static-size-10)
);--spectrum-breadcrumb-item-border-radius:var(
--spectrum-breadcrumb-m-item-border-radius,var(--spectrum-alias-border-radius-regular)
)}.spectrum-Breadcrumbs-item--sizeL{--spectrum-breadcrumb-multiline-title-margin-top:var(
--spectrum-breadcrumb-l-multiline-title-margin-top,var(--spectrum-global-dimension-static-size-0)
);--spectrum-breadcrumb-multiline-title-text-line-height:var(
--spectrum-breadcrumb-l-multiline-title-text-line-height,var(--spectrum-alias-heading-text-line-height)
);--spectrum-breadcrumb-multiline-title-text-font-weight:var(
--spectrum-breadcrumb-l-multiline-title-text-font-weight,var(--spectrum-alias-body-text-font-weight-strong)
);--spectrum-breadcrumb-multiline-title-text-size:var(
--spectrum-breadcrumb-l-multiline-title-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-breadcrumb-multiline-item-text-font-weight:var(
--spectrum-breadcrumb-l-multiline-item-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-breadcrumb-multiline-item-text-line-height:var(
--spectrum-breadcrumb-l-multiline-item-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-breadcrumb-multiline-item-text-size:var(
--spectrum-breadcrumb-l-multiline-item-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-breadcrumb-item-border-size-key-focus:var(
--spectrum-breadcrumb-l-item-border-size-key-focus,var(--spectrum-alias-border-size-thick)
);--spectrum-breadcrumb-list-height:var(
--spectrum-breadcrumb-l-list-height,var(--spectrum-global-dimension-size-400)
);--spectrum-breadcrumb-title-text-font-weight:var(
--spectrum-breadcrumb-l-title-text-font-weight,var(--spectrum-alias-body-text-font-weight-strong)
);--spectrum-breadcrumb-button-gap:var(
--spectrum-breadcrumb-l-button-gap,var(--spectrum-global-dimension-static-size-10)
);--spectrum-breadcrumb-item-text-font-weight:var(
--spectrum-breadcrumb-l-item-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-breadcrumb-item-text-line-height:var(
--spectrum-breadcrumb-l-item-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-breadcrumb-item-padding-x:var(
--spectrum-breadcrumb-l-item-padding-x,var(--spectrum-global-dimension-size-100)
);--spectrum-breadcrumb-item-text-size:var(
--spectrum-breadcrumb-l-item-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-breadcrumb-item-margin-right:var(
--spectrum-breadcrumb-l-item-margin-right,var(--spectrum-global-dimension-static-size-10)
);--spectrum-breadcrumb-item-border-radius:var(
--spectrum-breadcrumb-l-item-border-radius,var(--spectrum-alias-border-radius-regular)
)}.spectrum-Breadcrumbs-item{align-items:center;box-sizing:border-box;display:inline-flex;font-size:var(--spectrum-breadcrumb-item-text-size);font-weight:var(--spectrum-breadcrumb-item-text-font-weight);height:var(--spectrum-breadcrumb-list-height);justify-content:start;line-height:var(--spectrum-breadcrumb-item-text-line-height);position:relative;white-space:nowrap}.spectrum-Breadcrumbs-item:last-of-type{font-weight:var(
--spectrum-breadcrumb-title-text-font-weight
)}.spectrum-Breadcrumbs-item:last-of-type .spectrum-Breadcrumbs-itemSeparator{display:none}:host([dir=ltr]) .spectrum-Breadcrumbs-item>.spectrum-ActionButton{margin-right:var(
--spectrum-breadcrumb-button-gap
)}:host([dir=rtl]) .spectrum-Breadcrumbs-item>.spectrum-ActionButton{margin-left:var(
--spectrum-breadcrumb-button-gap
)}:host([dir=ltr]) .spectrum-Breadcrumbs-itemLink{margin-right:var(
--spectrum-breadcrumb-item-margin-right
)}:host([dir=rtl]) .spectrum-Breadcrumbs-itemLink{margin-left:var(
--spectrum-breadcrumb-item-margin-right
)}.spectrum-Breadcrumbs-itemLink{align-items:center;border-radius:var(--spectrum-breadcrumb-item-border-radius);cursor:default;display:inline-flex;height:var(--spectrum-breadcrumb-list-height);justify-content:start;outline:0;padding-bottom:0;padding-left:var(--spectrum-breadcrumb-item-padding-x);padding-right:var(--spectrum-breadcrumb-item-padding-x);padding-top:0;position:relative;text-decoration:none}.spectrum-Breadcrumbs-itemLink[href],.spectrum-Breadcrumbs-itemLink[tabindex="0"]{cursor:pointer}.spectrum-Breadcrumbs-itemLink[href].focus-visible,.spectrum-Breadcrumbs-itemLink[href]:hover,.spectrum-Breadcrumbs-itemLink[tabindex="0"].focus-visible,.spectrum-Breadcrumbs-itemLink[tabindex="0"]:hover{text-decoration:underline}.spectrum-Breadcrumbs-itemLink[href]:focus-visible,.spectrum-Breadcrumbs-itemLink[href]:hover,.spectrum-Breadcrumbs-itemLink[tabindex="0"]:focus-visible,.spectrum-Breadcrumbs-itemLink[tabindex="0"]:hover{text-decoration:underline}:host([dir=ltr]) .spectrum-Breadcrumbs-item.is-dragged .spectrum-Breadcrumbs-itemLink:before,:host([dir=ltr]) .spectrum-Breadcrumbs-itemLink.focus-visible:before{left:0}:host([dir=ltr]) .spectrum-Breadcrumbs-item.is-dragged .spectrum-Breadcrumbs-itemLink:before,:host([dir=ltr]) .spectrum-Breadcrumbs-itemLink:focus-visible:before{left:0}:host([dir=rtl]) .spectrum-Breadcrumbs-item.is-dragged .spectrum-Breadcrumbs-itemLink:before,:host([dir=rtl]) .spectrum-Breadcrumbs-itemLink.focus-visible:before{right:0}:host([dir=rtl]) .spectrum-Breadcrumbs-item.is-dragged .spectrum-Breadcrumbs-itemLink:before,:host([dir=rtl]) .spectrum-Breadcrumbs-itemLink:focus-visible:before{right:0}.spectrum-Breadcrumbs-item.is-dragged .spectrum-Breadcrumbs-itemLink:before,.spectrum-Breadcrumbs-itemLink.focus-visible:before{border-radius:var(--spectrum-breadcrumb-item-border-radius);border-style:solid;border-width:var(--spectrum-breadcrumb-item-border-size-key-focus);box-sizing:border-box;content:"";display:block;height:100%;pointer-events:none;position:absolute;top:0;width:100%}.spectrum-Breadcrumbs-item.is-dragged .spectrum-Breadcrumbs-itemLink:before,.spectrum-Breadcrumbs-itemLink:focus-visible:before{border-radius:var(--spectrum-breadcrumb-item-border-radius);border-style:solid;border-width:var(--spectrum-breadcrumb-item-border-size-key-focus);box-sizing:border-box;content:"";display:block;height:100%;pointer-events:none;position:absolute;top:0;width:100%}.spectrum-Breadcrumbs--multiline{flex-wrap:wrap}.spectrum-Breadcrumbs--multiline .spectrum-Breadcrumbs-item{font-size:var(
--spectrum-breadcrumb-multiline-item-text-size
);font-weight:var(--spectrum-breadcrumb-multiline-item-text-font-weight);line-height:var(--spectrum-breadcrumb-multiline-item-text-line-height)}.spectrum-Breadcrumbs--multiline .spectrum-Breadcrumbs-item:last-of-type{font-size:var(--spectrum-breadcrumb-multiline-title-text-size);font-weight:var(--spectrum-breadcrumb-multiline-title-text-font-weight);height:auto;line-height:var(--spectrum-breadcrumb-multiline-title-text-line-height);margin-top:var(--spectrum-breadcrumb-multiline-title-margin-top);width:100%}.spectrum-Breadcrumbs--multiline .spectrum-Breadcrumbs-item:last-of-type .spectrum-Breadcrumbs-itemLink{height:auto;text-decoration:none}.spectrum-Breadcrumbs-item{color:var(
--spectrum-breadcrumb-m-item-text-color,var(--spectrum-alias-label-text-color)
)}.spectrum-Breadcrumbs-item.is-dragged .spectrum-Breadcrumbs-itemLink{background-color:var(
--spectrum-breadcrumb-m-item-background-color-drop,var(--spectrum-alias-highlight-selected)
);color:var(
--spectrum-breadcrumb-m-item-text-color-drop,var(--spectrum-alias-text-color-hover)
)}.spectrum-Breadcrumbs-item.is-dragged .spectrum-Breadcrumbs-itemLink:before{border-color:var(
--spectrum-breadcrumb-m-item-border-color-drop,var(--spectrum-global-color-blue-500)
)}.spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemSeparator{color:var(
--spectrum-breadcrumb-m-separator-icon-color,var(--spectrum-alias-icon-color)
)}.spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink{color:inherit}.spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink:hover{color:var(
--spectrum-breadcrumb-m-item-text-color-hover,var(--spectrum-alias-text-color-hover)
)}.spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink.focus-visible{color:var(
--spectrum-breadcrumb-m-item-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}.spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink:focus-visible{color:var(
--spectrum-breadcrumb-m-item-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}.spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink.focus-visible:before{border-color:var(
--spectrum-breadcrumb-m-item-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}.spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink:focus-visible:before{border-color:var(
--spectrum-breadcrumb-m-item-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}.spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink:active{border-bottom:0;color:var(
--spectrum-breadcrumb-m-item-text-color-down,var(--spectrum-alias-text-color-down)
)}.spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink.is-disabled{color:var(
--spectrum-breadcrumb-m-item-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}.spectrum-Breadcrumbs-item.is-selected,.spectrum-Breadcrumbs-item:last-of-type{color:var(
--spectrum-breadcrumb-m-item-text-color-down,var(--spectrum-alias-text-color-down)
)}.spectrum-Breadcrumbs-item.is-selected~.spectrum-Breadcrumb:last-of-type{color:var(
--spectrum-breadcrumb-m-item-text-color,var(--spectrum-alias-label-text-color)
)}.spectrum-Breadcrumbs-item.is-selected .spectrum-Breadcrumbs-itemLink.focus-visible{border-bottom:0;color:var(
--spectrum-breadcrumb-m-item-text-color-down,var(--spectrum-alias-text-color-down)
)}.spectrum-Breadcrumbs-item.is-selected .spectrum-Breadcrumbs-itemLink:focus-visible{border-bottom:0;color:var(
--spectrum-breadcrumb-m-item-text-color-down,var(--spectrum-alias-text-color-down)
)}`;

/**
 * @element sp-breadcrumb
 */class Breadcrumb extends SpectrumElement{static get styles(){return [styles$1];}render(){return p`Markup goes here`;}}

iliadCustomElementsDefine('sp-breadcrumb',Breadcrumb);

const styles=r``;

/**
 * @element sp-tree
 */class Tree extends SpectrumElement{static get styles(){return [styles];}render(){return p`Markup goes here`;}}

iliadCustomElementsDefine('sp-tree',Tree);

const HelpIcon=({width=24,height=24,hidden=false,title='Help'}={})=>{return tag$1`<svg xmlns="http://www.w3.org/2000/svg" height="${height}" viewBox="0 0 36 36" width="${width}" aria-hidden="${hidden?'true':'false'}" role="img" fill="currentColor" aria-label="${title}"><path d="M18 2a16 16 0 1016 16A16 16 0 0018 2zm.047 26.876a2.69 2.69 0 110-5.375 2.62 2.62 0 012.8 2.67 2.581 2.581 0 01-2.8 2.705zm3.566-12.818l-.2.21c-.789.829-1.684 1.768-1.684 2.351a2.771 2.771 0 00.359 1.348l.145.277-.113.429a.617.617 0 01-.567.378h-2.682a.867.867 0 01-.65-.235 4.111 4.111 0 01-.845-2.525c0-1.677.934-2.714 2.225-4.15.2-.219.39-.42.575-.609.629-.651 1.013-1.071 1.013-1.515 0-.308 0-1.245-1.786-1.245a5.918 5.918 0 00-3.159.919.592.592 0 01-.653-.02l-.237-.169-.055-.443v-2.9a.879.879 0 01.393-.819 8.275 8.275 0 014.3-1.1c3.291 0 5.5 2.117 5.5 5.272a6.131 6.131 0 01-1.879 4.546z"/></svg>`;};

/**
 * @element sp-icon-help
 */class IconHelp extends IconBase{render(){setCustomTemplateLiteralTag$1(p);return HelpIcon({hidden:!this.label,title:this.label});}}

iliadCustomElementsDefine('sp-icon-help',IconHelp);

const StarIcon=({width=24,height=24,hidden=false,title='Star'}={})=>{return tag$1`<svg xmlns="http://www.w3.org/2000/svg" height="${height}" viewBox="0 0 36 36" width="${width}" aria-hidden="${hidden?'true':'false'}" role="img" fill="currentColor" aria-label="${title}"><path d="M18.477.593L22.8 12.029l12.212.578a.51.51 0 01.3.908l-9.54 7.646 3.224 11.793a.51.51 0 01-.772.561L18 26.805l-10.22 6.71a.51.51 0 01-.772-.561l3.224-11.793-9.54-7.646a.51.51 0 01.3-.908l12.208-.578L17.523.593a.51.51 0 01.954 0z"/></svg>`;};

/**
 * @element sp-icon-star
 */class IconStar extends IconBase{render(){setCustomTemplateLiteralTag$1(p);return StarIcon({hidden:!this.label,title:this.label});}}

iliadCustomElementsDefine('sp-icon-star',IconStar);

const ChevronDownIcon=({width=24,height=24,hidden=false,title='Chevron Down'}={})=>{return tag$1`<svg xmlns="http://www.w3.org/2000/svg" height="${height}" viewBox="0 0 36 36" width="${width}" aria-hidden="${hidden?'true':'false'}" role="img" fill="currentColor" aria-label="${title}"><path d="M8 14.02a2 2 0 013.411-1.411l6.578 6.572 6.578-6.572a2 2 0 012.874 2.773l-.049.049-7.992 7.984a2 2 0 01-2.825 0l-7.989-7.983A1.989 1.989 0 018 14.02z"/></svg>`;};

/**
 * @element sp-icon-chevron-down
 */class IconChevronDown extends IconBase{render(){setCustomTemplateLiteralTag$1(p);return ChevronDownIcon({hidden:!this.label,title:this.label});}}

iliadCustomElementsDefine('sp-icon-chevron-down',IconChevronDown);

const CloseIcon=({width=24,height=24,hidden=false,title='Close'}={})=>{return tag$1`<svg xmlns="http://www.w3.org/2000/svg" height="${height}" viewBox="0 0 36 36" width="${width}" aria-hidden="${hidden?'true':'false'}" role="img" fill="currentColor" aria-label="${title}"><path d="M26.485 6.686L18 15.172 9.515 6.686a1 1 0 00-1.414 0L6.686 8.1a1 1 0 000 1.414L15.172 18l-8.486 8.485a1 1 0 000 1.414L8.1 29.314a1 1 0 001.414 0L18 20.828l8.485 8.486a1 1 0 001.414 0l1.415-1.414a1 1 0 000-1.414L20.828 18l8.486-8.485a1 1 0 000-1.414L27.9 6.686a1 1 0 00-1.415 0z"/></svg>`;};

/**
 * @element sp-icon-close
 */class IconClose extends IconBase{render(){setCustomTemplateLiteralTag$1(p);return CloseIcon({hidden:!this.label,title:this.label});}}

iliadCustomElementsDefine('sp-icon-close',IconClose);

const CheckmarkIcon=({width=24,height=24,hidden=false,title='Checkmark'}={})=>{return tag$1`<svg xmlns="http://www.w3.org/2000/svg" height="${height}" viewBox="0 0 36 36" width="${width}" aria-hidden="${hidden?'true':'false'}" role="img" fill="currentColor" aria-label="${title}"><path d="M31.312 7.725l-1.455-1.133a1 1 0 00-1.4.175L14.822 24.283l-6.647-6.612a1 1 0 00-1.414 0L5.436 19a1 1 0 000 1.414l8.926 8.9a1 1 0 001.5-.093L31.487 9.128a1 1 0 00-.175-1.403z"/></svg>`;};

/**
 * @element sp-icon-checkmark
 */class IconCheckmark extends IconBase{render(){setCustomTemplateLiteralTag$1(p);return CheckmarkIcon({hidden:!this.label,title:this.label});}}

iliadCustomElementsDefine('sp-icon-checkmark',IconCheckmark);

const EditIcon=({width=24,height=24,hidden=false,title='Edit'}={})=>{return tag$1`<svg xmlns="http://www.w3.org/2000/svg" height="${height}" viewBox="0 0 36 36" width="${width}" aria-hidden="${hidden?'true':'false'}" role="img" fill="currentColor" aria-label="${title}"><path d="M33.567 8.2L27.8 2.432a1.215 1.215 0 00-.866-.353H26.9a1.371 1.371 0 00-.927.406L5.084 23.372a.99.99 0 00-.251.422L2.055 33.1c-.114.377.459.851.783.851a.251.251 0 00.062-.007c.276-.063 7.866-2.344 9.311-2.778a.972.972 0 00.414-.249l20.888-20.889a1.372 1.372 0 00.4-.883 1.221 1.221 0 00-.346-.945zM11.4 29.316c-2.161.649-4.862 1.465-6.729 2.022l2.009-6.73z"/></svg>`;};

/**
 * @element sp-icon-edit
 */class IconEdit extends IconBase{render(){setCustomTemplateLiteralTag$1(p);return EditIcon({hidden:!this.label,title:this.label});}}

iliadCustomElementsDefine('sp-icon-edit',IconEdit);

const SettingsIcon=({width=24,height=24,hidden=false,title='Settings'}={})=>{return tag$1`<svg xmlns="http://www.w3.org/2000/svg" height="${height}" viewBox="0 0 36 36" width="${width}" aria-hidden="${hidden?'true':'false'}" role="img" fill="currentColor" aria-label="${title}"><path d="M32.9 15.793h-3.111a11.953 11.953 0 00-1.842-4.507l2.205-2.206a1.1 1.1 0 000-1.56l-1.673-1.672a1.1 1.1 0 00-1.56 0l-2.205 2.205a11.925 11.925 0 00-4.507-1.841V3.1A1.1 1.1 0 0019.1 2h-2.2a1.1 1.1 0 00-1.1 1.1v3.112a11.925 11.925 0 00-4.507 1.841l-2.2-2.205a1.1 1.1 0 00-1.56 0L5.848 7.52a1.1 1.1 0 000 1.56l2.205 2.206a11.953 11.953 0 00-1.842 4.507H3.1A1.1 1.1 0 002 16.9v2.2a1.1 1.1 0 001.1 1.1h3.111a11.934 11.934 0 001.842 4.507l-2.205 2.212a1.1 1.1 0 000 1.56l1.673 1.673a1.1 1.1 0 001.56 0l2.205-2.205a11.925 11.925 0 004.507 1.841V32.9A1.1 1.1 0 0016.9 34h2.2a1.1 1.1 0 001.1-1.1v-3.112a11.925 11.925 0 004.507-1.841l2.205 2.205a1.1 1.1 0 001.56 0l1.673-1.673a1.1 1.1 0 000-1.56l-2.205-2.205a11.934 11.934 0 001.842-4.507H32.9A1.1 1.1 0 0034 19.1v-2.2a1.1 1.1 0 00-1.1-1.107zM22.414 18A4.414 4.414 0 1118 13.586 4.414 4.414 0 0122.414 18z"/></svg>`;};

/**
 * @element sp-icon-settings
 */class IconSettings extends IconBase{render(){setCustomTemplateLiteralTag$1(p);return SettingsIcon({hidden:!this.label,title:this.label});}}

iliadCustomElementsDefine('sp-icon-settings',IconSettings);

const SaveFloppyIcon=({width=24,height=24,hidden=false,title='Save Floppy'}={})=>{return tag$1`<svg xmlns="http://www.w3.org/2000/svg" height="${height}" viewBox="0 0 36 36" width="${width}" aria-hidden="${hidden?'true':'false'}" role="img" fill="currentColor" aria-label="${title}"><path d="M20 4h4v6h-4z"/><path d="M31.708 8.293s-4.015-4-4.146-4.114A.969.969 0 0027 4h-1v8H14V4H5a1 1 0 00-1 1v26a1 1 0 001 1h26a1 1 0 001-1V9a1 1 0 00-.292-.707zM26 30H10V16h16z"/></svg>`;};

/**
 * @element sp-icon-save-floppy
 */class IconSaveFloppy extends IconBase{render(){setCustomTemplateLiteralTag$1(p);return SaveFloppyIcon({hidden:!this.label,title:this.label});}}

iliadCustomElementsDefine('sp-icon-save-floppy',IconSaveFloppy);

const StopwatchIcon=({width=24,height=24,hidden=false,title='Stopwatch'}={})=>{return tag$1`<svg xmlns="http://www.w3.org/2000/svg" height="${height}" viewBox="0 0 36 36" width="${width}" aria-hidden="${hidden?'true':'false'}" role="img" fill="currentColor" aria-label="${title}"><path d="M20 2h1a1 1 0 000-2h-4a1 1 0 000 2h1v2h2z"/><path d="M19 4a14.94 14.94 0 00-9.9 3.729L7.437 6.062l.708-.707A1 1 0 106.73 3.941l-.707.707-1.414 1.414-.709.708a1 1 0 001.416 1.414l.707-.707 1.669 1.668A15 15 0 1019 4zm0 28a13 13 0 117.833-23.375l-8.925 8.925c-.021.021-.037.04-.057.062a1.858 1.858 0 102.619 2.635c.023-.021.046-.045.068-.067l8.913-8.912A13 13 0 0119 32z"/></svg>`;};

/**
 * @element sp-icon-stopwatch
 */class IconStopwatch extends IconBase{render(){setCustomTemplateLiteralTag$1(p);return StopwatchIcon({hidden:!this.label,title:this.label});}}

iliadCustomElementsDefine('sp-icon-stopwatch',IconStopwatch);

const UserActivityIcon=({width=24,height=24,hidden=false,title='User Activity'}={})=>{return tag$1`<svg xmlns="http://www.w3.org/2000/svg" height="${height}" viewBox="0 0 36 36" width="${width}" aria-hidden="${hidden?'true':'false'}" role="img" fill="currentColor" aria-label="${title}"><path d="M20 2h.086a1 1 0 01.707.293l8.914 8.914a1 1 0 01.293.707V12H20z"/><path d="M19 14a1 1 0 01-1-1V2H7a1 1 0 00-1 1v30a1 1 0 001 1h22a1 1 0 001-1V14zm6.986 18h-15.96c-.01-.121-.026-.6-.026-.727 0-1.105.7-3.908 5.173-4.265a.723.723 0 00.668-.707v-1.016a.673.673 0 00-.2-.455 6.345 6.345 0 01-1.841-3.58 4.359 4.359 0 014.185-4.45 4.347 4.347 0 014.215 4.45 6.358 6.358 0 01-1.853 3.58.678.678 0 00-.2.455v1.021a.726.726 0 00.666.706c4.393.409 5.183 3.2 5.183 4.261.004.127-.01.727-.01.727z"/></svg>`;};

/**
 * @element sp-icon-user-activity
 */class IconUserActivity extends IconBase{render(){setCustomTemplateLiteralTag$1(p);return UserActivityIcon({hidden:!this.label,title:this.label});}}

iliadCustomElementsDefine('sp-icon-user-activity',IconUserActivity);

window.Overlay=Overlay;class StyledElement extends HTMLElement{constructor(){super();this.attachShadow({mode:'open'});this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: block;
                    background-color: var(--spectrum-global-color-gray-50);
                    color: var(--spectrum-global-color-gray-800);
                    border: 1px solid;
                    padding: 2em;
                }
            </style>
            <slot></slot>
        `;}}iliadCustomElementsDefine('styled-element',StyledElement);
//# sourceMappingURL=components.js.map
