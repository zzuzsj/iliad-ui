import{c as e,d as t,f as r,g as o,I as s,p as i,l as a,_ as l,e as c,b as n,a as d,o as m,h as u,j as p,i as h,k as b,S as g,t as v,s as f,O as x,P as y,m as w,n as k,q as z,r as C,L,u as H,F as M,T as V,v as B,y as $,w as A,x as S}from"./01434623.js";import{r as q}from"./db58e7f6.js";import{a as Z,c as E,u as _,m as I,s as P,r as D,g as F,T,S as U,b as R}from"./3512427a.js";import{b as N,l as O,h as j}from"./67a0ba19.js";import{Overlay as K}from"./a7a28efe.js";import"./d58a14ca.js";import"./94be756f.js";import"./ec80e2e1.js";import"./a247aacb.js";import"./82e45230.js";import"./65e06679.js";const G=(e,t,r)=>{const o=new Map;for(let s=t;s<=r;s++)o.set(e[s],s);return o},X=e(class extends t{constructor(e){if(super(e),e.type!==r.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let o;void 0===r?r=t:void 0!==t&&(o=t);const s=[],i=[];let a=0;for(const t of e)s[a]=o?o(t,a):a,i[a]=r(t,a),a++;return{values:i,keys:s}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,s]){var i;const a=Z(e),{values:l,keys:c}=this.dt(t,r,s);if(!Array.isArray(a))return this.ct=c,l;const n=null!==(i=this.ct)&&void 0!==i?i:this.ct=[],d=[];let m,u,p=0,h=a.length-1,b=0,g=l.length-1;for(;p<=h&&b<=g;)if(null===a[p])p++;else if(null===a[h])h--;else if(n[p]===c[b])d[b]=E(a[p],l[b]),p++,b++;else if(n[h]===c[g])d[g]=E(a[h],l[g]),h--,g--;else if(n[p]===c[g])d[g]=E(a[p],l[g]),_(e,d[g+1],a[p]),p++,g--;else if(n[h]===c[b])d[b]=E(a[h],l[b]),_(e,a[p],a[h]),h--,b++;else if(void 0===m&&(m=G(c,b,g),u=G(n,p,h)),m.has(n[p]))if(m.has(n[h])){const t=u.get(c[b]),r=void 0!==t?a[t]:null;if(null===r){const t=_(e,a[p]);E(t,l[b]),d[b]=t}else d[b]=E(r,l[b]),_(e,a[p],r),a[t]=null;b++}else I(a[h]),h--;else I(a[p]),p++;for(;b<=g;){const t=_(e,d[g+1]);E(t,l[b]),d[b++]=t}for(;p<=h;){const e=a[p++];null!==e&&I(e)}return this.ct=c,P(e,d),o}}),Y=e(class extends t{constructor(e){var t;if(super(e),e.type!==r.ATTRIBUTE||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,r)=>{const o=e[r];return null==o?t:t+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`}),"")}update(e,[t]){const{style:r}=e.element;if(void 0===this.ut){this.ut=new Set;for(const e in t)this.ut.add(e);return this.render(t)}this.ut.forEach((e=>{null==t[e]&&(this.ut.delete(e),e.includes("-")?r.removeProperty(e):r[e]="")}));for(const e in t){const o=t[e];null!=o&&(this.ut.add(e),e.includes("-")?r.setProperty(e,o):r[e]=o)}return o}}),W=(e,t)=>{var r,o;const s=e._$AN;if(void 0===s)return!1;for(const e of s)null===(o=(r=e)._$AO)||void 0===o||o.call(r,t,!1),W(e,t);return!0},Q=e=>{let t,r;do{if(void 0===(t=e._$AM))break;r=t._$AN,r.delete(e),e=t}while(0===(null==r?void 0:r.size))},J=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),re(t)}};function ee(e){void 0!==this._$AN?(Q(this),this._$AM=e,J(this)):this._$AM=e}function te(e,t=!1,r=0){const o=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(t)if(Array.isArray(o))for(let e=r;e<o.length;e++)W(o[e],!1),Q(o[e]);else null!=o&&(W(o,!1),Q(o));else W(this,e)}const re=e=>{var t,o,s,i;e.type==r.CHILD&&(null!==(t=(s=e)._$AP)&&void 0!==t||(s._$AP=te),null!==(o=(i=e)._$AQ)&&void 0!==o||(i._$AQ=ee))};class oe extends t{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),J(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,o;e!==this.isConnected&&(this.isConnected=e,e?null===(r=this.reconnected)||void 0===r||r.call(this):null===(o=this.disconnected)||void 0===o||o.call(this)),t&&(W(this,e),Q(this))}setValue(e){if(D(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class se{constructor(){this.iconsetMap=new Map}static getInstance(){return se.instance||(se.instance=new se),se.instance}addIconset(e,t){this.iconsetMap.set(e,t);const r=new CustomEvent("sp-iconset-added",{bubbles:!0,composed:!0,detail:{name:e,iconset:t}});setTimeout((()=>window.dispatchEvent(r)),0)}removeIconset(e){this.iconsetMap.delete(e);const t=new CustomEvent("sp-iconset-removed",{bubbles:!0,composed:!0,detail:{name:e}});setTimeout((()=>window.dispatchEvent(t)),0)}getIconset(e){return this.iconsetMap.get(e)}}class ie extends s{constructor(){super(...arguments),this.iconsetListener=e=>{if(!this.name)return;const t=this.parseIcon(this.name);e.detail.name===t.iconset&&(this.updateIconPromise=this.updateIcon())}}connectedCallback(){super.connectedCallback(),window.addEventListener("sp-iconset-added",this.iconsetListener)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("sp-iconset-added",this.iconsetListener)}firstUpdated(){this.updateIconPromise=this.updateIcon()}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),this.updateIconPromise=this.updateIcon()}render(){return this.name?i`<div id="container"></div>`:this.src?i`<img src="${this.src}" alt="${a(this.label)}">`:super.render()}async updateIcon(){if(this.updateIconPromise&&await this.updateIconPromise,!this.name)return Promise.resolve();const e=this.parseIcon(this.name),t=se.getInstance().getIconset(e.iconset);return t&&this.iconContainer?(this.iconContainer.innerHTML="",t.applyIconToElement(this.iconContainer,e.icon,this.size||"",this.label?this.label:"")):Promise.resolve()}parseIcon(e){const t=e.split(":");let r="default",o=e;return t.length>1&&(r=t[0],o=t[1]),{iconset:r,icon:o}}async getUpdateComplete(){const e=await super.getUpdateComplete();return await this.updateIconPromise,e}}l([c()],ie.prototype,"src",void 0),l([c()],ie.prototype,"name",void 0),l([n("#container")],ie.prototype,"iconContainer",void 0);var ae=q`#trigger{display:contents}:host([disabled]) #trigger{pointer-events:none}#overlay-content{display:none}`;class le extends d{constructor(){super(...arguments),this.placement="bottom",this.offset=6,this.disabled=!1,this.abortOverlay=()=>{},this.openStatePromise=Promise.resolve()}static get styles(){return[ae]}handleClose(e){e&&e.detail.interaction!==this.open&&e.detail.interaction!==this.type||this.removeAttribute("open")}render(){return i`<div id="trigger" @click="${this.onTrigger}" @longpress="${this.onTrigger}" @mouseenter="${this.onTrigger}" @mouseleave="${this.onTrigger}" @focusin="${this.onTrigger}" @focusout="${this.onTrigger}" @sp-closed="${this.handleClose}"><slot @slotchange="${this.onTargetSlotChange}" name="trigger"></slot></div><div id="overlay-content"><slot @slotchange="${this.onClickSlotChange}" name="click-content"></slot><slot @slotchange="${this.onLongpressSlotChange}" name="longpress-content"></slot><slot @slotchange="${this.onHoverSlotChange}" name="hover-content"></slot></div>`}updated(e){super.updated(e),this.disabled&&e.has("disabled")?this.closeAllOverlays():e.has("open")&&this.manageOpen()}closeAllOverlays(){this.abortOverlay&&this.abortOverlay(!0),["closeClickOverlay","closeHoverOverlay","closeLongpressOverlay"].forEach((async e=>{const t=this[e];null!=t&&(delete this[e],(await t)())}))}manageOpen(){var e;({click:()=>this.onTriggerClick(),hover:()=>this.onTriggerMouseEnter(),longpress:()=>this.onTriggerLongpress(),none:()=>this.closeAllOverlays()})[null!==(e=this.open)&&void 0!==e?e:"none"]()}async openOverlay(e,t,r,o){return this.openStatePromise=new Promise((e=>this.openStateResolver=e)),this.addEventListener("sp-opened",(()=>{this.openStateResolver()}),{once:!0}),le.openOverlay(e,t,r,o)}get overlayOptions(){return{offset:this.offset,placement:this.placement,receivesFocus:this.type&&"inline"!==this.type?"auto":void 0}}onTrigger(e){if(!this.disabled)switch(e.type){case"mouseenter":case"focusin":return void(!this.open&&this.hoverContent&&(this.open="hover"));case"mouseleave":case"focusout":return void("hover"===this.open&&this.handleClose());case"click":return void(this.clickContent?this.open=e.type:this.closeHoverOverlay&&e.preventDefault());case"longpress":return void(this.longpressContent&&(this._longpressEvent=e,this.open=e.type))}}prepareToFocusOverlayContent(e){if("modal"!==this.type)return;e.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [focusable]')||(e.tabIndex=0)}async onTriggerClick(){if(!this.targetContent||!this.clickContent||this.closeClickOverlay)return;const{targetContent:e,clickContent:t}=this;this.closeAllOverlays(),this.prepareToFocusOverlayContent(t),this.closeClickOverlay=this.openOverlay(e,this.type?this.type:"click",t,this.overlayOptions)}async onTriggerLongpress(){var e,t;if(!this.targetContent||!this.longpressContent||this.closeLongpressOverlay)return;const{targetContent:r,longpressContent:o}=this;this.closeAllOverlays(),this.prepareToFocusOverlayContent(o);const s="keyboard"!==(null===(t=null===(e=this._longpressEvent)||void 0===e?void 0:e.detail)||void 0===t?void 0:t.source);this.closeLongpressOverlay=this.openOverlay(r,this.type?this.type:"longpress",o,Object.assign(Object.assign({},this.overlayOptions),{receivesFocus:"auto",notImmediatelyClosable:s})),this._longpressEvent=void 0}async onTriggerMouseEnter(){if(!this.targetContent||!this.hoverContent||this.closeHoverOverlay)return;const e=new Promise((e=>{this.abortOverlay=e})),{targetContent:t,hoverContent:r}=this;this.closeHoverOverlay=this.openOverlay(t,"hover",r,Object.assign({abortPromise:e},this.overlayOptions))}onClickSlotChange(e){this.clickContent=this.extractSlotContentFromEvent(e),this.manageOpen()}onLongpressSlotChange(e){this.longpressContent=this.extractSlotContentFromEvent(e),this.manageOpen()}onHoverSlotChange(e){this.hoverContent=this.extractSlotContentFromEvent(e),this.manageOpen()}onTargetSlotChange(e){this.targetContent=this.extractSlotContentFromEvent(e)}extractSlotContentFromEvent(e){return e.target.assignedNodes({flatten:!0}).find((e=>e instanceof HTMLElement))}async getUpdateComplete(){const e=await super.getUpdateComplete();return await this.openStatePromise,e}disconnectedCallback(){this.closeAllOverlays(),super.disconnectedCallback()}}le.openOverlay=async(e,t,r,o)=>m(e,t,r,o),l([c({reflect:!0})],le.prototype,"placement",void 0),l([c()],le.prototype,"type",void 0),l([c({type:Number,reflect:!0})],le.prototype,"offset",void 0),l([c({reflect:!0})],le.prototype,"open",void 0),l([c({type:Boolean,reflect:!0})],le.prototype,"disabled",void 0);document.querySelector("sp-tabs").addEventListener("change",(e=>{const t=e.target,{selected:r}=t,{pathname:o}=location,s=o.search("api")>-1;switch(r){case"api":{if(s)return;const e=(o+"/api/").replace("//a","/a");history.pushState({},document.title,e);break}case"examples":{if(!s)return;const e=o.split("/api")[0]+"/";history.pushState({},document.title,e);break}}}));var ce=q`:host{--spectrum-accordion-item-title-tracking:var(
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
);--spectrum-accordion-icon-width:var(--spectrum-global-dimension-size-125)}:host{display:block;list-style:none;margin:0;padding:0}`;class ne extends u{constructor(){super(...arguments),this.allowMultiple=!1}static get styles(){return[ce]}get items(){return[...this.defaultNodes||[]].filter((e=>void 0!==e.tagName))}focus(){this.focusElement!==this&&super.focus()}get focusElement(){const e=this.items;if(e&&!e.length)return this;let t=0;for(;t<e.length&&e[t]&&e[t].disabled;)t+=1;return e[t]?e[t]:this}startListeningToKeyboard(){const e=this.items;e&&!e.length||this.addEventListener("keydown",this.handleKeydown)}stopListeningToKeyboard(){this.removeEventListener("keydown",this.handleKeydown)}handleKeydown(e){const{code:t}=e;if("ArrowDown"!==t&&"ArrowUp"!==t)return;e.preventDefault();const r="ArrowDown"===t?1:-1;this.focusItemByOffset(r)}focusItemByOffset(e){const t=this.items,r=t.indexOf(F(this));let o=r,s=t[o];for(;s&&(s.disabled||o===r);)o=(t.length+o+e)%t.length,s=t[o];s&&!s.disabled&&o!==r&&s.focus()}async onToggle(e){if(await 0,this.allowMultiple||e.defaultPrevented)return;const t=e.target,r=[...this.items];r&&!r.length||r.forEach((e=>{e!==t&&(e.open=!1)}))}render(){return i`<slot></slot>`}firstUpdated(e){super.firstUpdated(e),this.addEventListener("focusin",this.startListeningToKeyboard),this.addEventListener("focusout",this.stopListeningToKeyboard),this.addEventListener("sp-accordion-item-toggle",this.onToggle)}}l([c({type:Boolean,reflect:!0,attribute:"allow-multiple"})],ne.prototype,"allowMultiple",void 0),l([p()],ne.prototype,"defaultNodes",void 0),h("sp-accordion",ne);var de=q`:host{--spectrum-accordion-item-title-tracking:var(
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
)}:host{--spectrum-accordion-item-header-height:46px}#indicator{top:calc(50% - var(--spectrum-accordion-icon-height,var(--spectrum-global-dimension-size-125))/ 2)}#heading{height:auto;position:relative}#header{min-height:calc(100% - var(--spectrum-accordion-item-border-size,var(--spectrum-alias-border-size-thin)))}:host([open])>#header:after{height:calc(100% - var(--spectrum-accordion-item-border-size,var(--spectrum-alias-border-size-thin)))}`;class me extends u{constructor(){super(),this.open=!1,this.label="",this.disabled=!1,this.addEventListener("keydown",this.onKeyDown)}static get styles(){return[de,b]}get focusElement(){return this.shadowRoot.querySelector("#header")}onKeyDown(e){this.disabled||"Enter"!==e.code&&"Space"!==e.code||(e.preventDefault(),this.toggle())}onClick(){this.disabled||this.toggle()}toggle(){this.open=!this.open;this.dispatchEvent(new CustomEvent("sp-accordion-item-toggle",{bubbles:!0,composed:!0,cancelable:!0}))||(this.open=!this.open)}render(){return i`<h3 id="heading"><button id="header" @click="${this.onClick}" aria-expanded="${this.open}" aria-controls="content">${this.label}</button><sp-icon-chevron100 id="indicator" class="spectrum-UIIcon-ChevronRight100"></sp-icon-chevron100></h3><div id="content" role="region" aria-labelledby="header"><slot></slot></div>`}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}}l([c({type:Boolean,reflect:!0})],me.prototype,"open",void 0),l([c({type:String,reflect:!0})],me.prototype,"label",void 0),l([c({type:Boolean,reflect:!0})],me.prototype,"disabled",void 0),h("sp-accordion-item",me);var ue=q`:host{--spectrum-actionbar-height:var(--spectrum-global-dimension-size-600);--spectrum-actionbar-min-width:var(
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
);pointer-events:auto;position:relative;width:100%}`;const pe=["sticky","fixed"];class he extends g{constructor(){super(...arguments),this.flexible=!1,this.open=!1,this._variant=""}static get styles(){return[ue]}set variant(e){if(e!==this.variant){if(pe.includes(e))return this.setAttribute("variant",e),void(this._variant=e);this.removeAttribute("variant"),this._variant=""}}get variant(){return this._variant}render(){return i`<sp-popover ?open="${this.open}" id="popover"><slot></slot></sp-popover>`}}l([c({type:Boolean,reflect:!0})],he.prototype,"flexible",void 0),l([c({type:Boolean,reflect:!0})],he.prototype,"open",void 0),l([c({type:String,reflect:!0})],he.prototype,"variant",null),h("sp-action-bar",he);var be=q`:host{--spectrum-actiongroup-button-gap-reset:0;--spectrum-actiongroup-quiet-compact-button-gap:var(
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
)/2)}:host([justified]) ::slotted(*){flex:1}:host([compact][divider]) ::slotted(:not(:last-child)):after{background-color:var(--spectrum-action-group-divider-background-color);bottom:0;content:"";display:block;height:var(--spectrum-action-group-divider-height);margin:auto;position:absolute;right:calc(-1*var(--spectrum-actiongroup-quiet-compact-button-gap) - 1px);top:0;width:var(--spectrum-action-group-divider-width)}:host([compact][divider][verticle]) ::slotted(:not(:last-child)):after{background-color:var(--spectrum-action-group-divider-background-color);bottom:calc(-1*var(--spectrum-actiongroup-quiet-compact-button-gap) - 1px);content:"";display:block;height:var(--spectrum-action-group-divider-width);left:0;margin:auto;position:absolute;right:0;width:var(--spectrum-action-group-divider-height)}:host([dir][compact][vertical]) ::slotted(:nth-child(n)){margin-left:0;margin-right:0}:host{width:var(--spectrum-actiongroup-width)}:host([compact]){align-items:center;background:var(--spectrum-actiongroup-quiet-compact-background-color);border-radius:var(--spectrum-actiongroup-quiet-compact-border-radius);display:flex}`;const ge=[];class ve extends g{constructor(){super(...arguments),this.buttons=[],this._buttonSelector="sp-action-button",this.compact=!1,this.emphasized=!1,this.justified=!1,this.label="",this.quiet=!1,this.vertical=!1,this.divider=!1,this._selected=ge,this.handleFocusin=()=>{this.addEventListener("focusout",this.handleFocusout),this.addEventListener("keydown",this.handleKeydown)},this.handleKeydown=e=>{const{code:t}=e;if(!["ArrowUp","ArrowLeft","ArrowRight","ArrowDown","End","Home","PageUp","PageDown"].includes(t))return;const r=this.getRootNode().activeElement;if(!r)return;let o=this.buttons.indexOf(r);if(-1===o)return;const s=(e,t)=>e[(e.length+t)%e.length],i=e=>{for(o+=e;s(this.buttons,o).disabled;)o+=e};switch(t){case"ArrowUp":i(-1);break;case"ArrowLeft":i(this.isLTR?-1:1);break;case"ArrowRight":i(this.isLTR?1:-1);break;case"ArrowDown":i(1);break;case"End":o=this.buttons.length,i(-1);break;case"Home":o=-1,i(1);break;default:const r=[...this.getRootNode().querySelectorAll("sp-action-group")];if(r.length<2)return;e.preventDefault();const a="PageUp"===t?-1:1;let l=r.indexOf(this)+a,c=s(r,l);for(;!c.buttons.length;)l+=a,c=s(r,l);return void c.focus()}e.preventDefault();const a=s(this.buttons,o);r.tabIndex=-1,a.tabIndex=0,a.focus()},this.handleFocusout=e=>{const{relatedTarget:t}=e;if(!t||!this.contains(t)){const e=this.buttons.find((e=>this.selected.length?e.selected:!e.disabled));e&&(e.tabIndex=0)}this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("focusout",this.handleFocusout)},this.manageButtons=()=>{const e=this.shadowRoot.querySelector("slot");if(!e)return;const t=e.assignedElements({flatten:!0}).reduce(((e,t)=>{if(t.matches(this._buttonSelector))e.push(t);else{const r=Array.from(t.querySelectorAll(`:scope > ${this._buttonSelector}`));e.push(...r)}return e}),[]);this.buttons=t,this.manageChildren(),this.manageSelects()}}static get styles(){return[be]}get selected(){return this._selected}set selected(e){if(e===this.selected)return;const t=this.selected;this._selected=e;this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0,cancelable:!0}))||(this._selected=t,this.buttons.map((e=>{e.selected=this.selected.includes(e.value)})))}focus(e){if(!this.buttons.length)return;const t=this.buttons.find((e=>this.selected?e.selected:!e.disabled));t&&t.focus(e)}handleClick(e){const t=e.target;if(void 0!==t.value)switch(this.selects){case"single":[...this.querySelectorAll("[selected]")].forEach((e=>{e.selected=!1,e.tabIndex=-1,e.setAttribute("aria-checked","false")})),t.selected=!0,t.tabIndex=0,t.setAttribute("aria-checked","true"),this.selected=[t.value],t.focus();break;case"multiple":{const e=[...this.selected];t.selected=!t.selected,t.setAttribute("aria-checked",t.selected?"true":"false"),t.selected?e.push(t.value):e.splice(this.selected.indexOf(t.value),1),this.selected=e;break}default:this.selected=ge}}async manageSelects(){if(this.buttons.length)switch(this.selects){case"single":{let e,t;this.setAttribute("role","radiogroup");const r=this.buttons.map((async r=>{await r.updateComplete,r.setAttribute("role","radio"),r.setAttribute("aria-checked",r.selected?"true":"false"),r.tabIndex=r.selected?0:-1,r.selected&&(e=r),t||r.disabled||(t=r)}));await Promise.all(r),(e||t)&&((e||t).tabIndex=0),this.selected=e?[e.value]:ge;break}case"multiple":{this.setAttribute("role","group");const e=[],t=this.buttons.map((async t=>{await t.updateComplete,t.setAttribute("role","checkbox"),t.setAttribute("aria-checked",t.selected?"true":"false"),t.tabIndex=0,t.selected&&e.push(t.value)}));await Promise.all(t),this.selected=e.length?e:ge;break}default:this.buttons.forEach((e=>{e.setAttribute("role","button"),e.tabIndex=0})),this.removeAttribute("role"),this.selected=ge}}render(){return i`<slot role="presentation" @slotchange="${this.manageButtons}"></slot>`}firstUpdated(e){super.firstUpdated(e),this.addEventListener("click",this.handleClick),this.addEventListener("focusin",this.handleFocusin)}updated(e){super.updated(e),e.has("selects")&&this.manageSelects(),(e.has("quiet")&&this.quiet||e.has("emphasized")&&this.emphasized)&&this.manageChildren(),e.has("label")&&(this.label||void 0!==e.get("label"))&&(this.label.length?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label"))}manageChildren(){this.buttons.forEach((e=>{e.quiet=this.quiet,e.emphasized=this.emphasized}))}connectedCallback(){super.connectedCallback(),this.observer||(this.observer=new MutationObserver(this.manageButtons),this.manageButtons()),this.observer.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){this.observer.disconnect(),super.disconnectedCallback()}}l([c({type:Boolean,reflect:!0})],ve.prototype,"compact",void 0),l([c({type:Boolean,reflect:!0})],ve.prototype,"emphasized",void 0),l([c({type:Boolean,reflect:!0})],ve.prototype,"justified",void 0),l([c({type:String})],ve.prototype,"label",void 0),l([c({type:Boolean,reflect:!0})],ve.prototype,"quiet",void 0),l([c({type:String})],ve.prototype,"selects",void 0),l([c({type:Boolean,reflect:!0})],ve.prototype,"vertical",void 0),l([c({type:Boolean,reflect:!0})],ve.prototype,"divider",void 0),l([c({type:Array})],ve.prototype,"selected",null),h("sp-action-group",ve);h("sp-icon-more",class extends s{render(){return f(i),(({width:e=24,height:t=24,hidden:r=!1,title:o="More"}={})=>v`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${t}" viewBox="0 0 36 36" aria-hidden="${r?"true":"false"}" role="img" fill="currentColor" aria-label="${o}"><circle cx="17.8" cy="18.2" r="3.8"/><circle cx="29.5" cy="18.2" r="3.8"/><circle cx="6.1" cy="18.2" r="3.68"/></svg>`)({hidden:!this.label,title:this.label})}});var fe=q`:host{display:inline-flex}:host([quiet]){min-width:0}::slotted([slot=icon]){flex-shrink:0}.icon{flex-shrink:0}#popover{display:none;max-width:none;width:auto}:host([dir=ltr]) .icon,:host([dir=ltr]) ::slotted([slot=icon]){margin-left:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted)))}:host([dir=rtl]) .icon,:host([dir=rtl]) ::slotted([slot=icon]){margin-right:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted)))}:host([dir]) slot[icon-only] .icon,:host([dir]) slot[icon-only]::slotted([slot=icon]){margin-left:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-icononly-padding-left-adjusted)));margin-right:calc(-1*(var(--spectrum-actionbutton-textonly-padding-right-adjusted) - var(--spectrum-actionbutton-icononly-padding-right-adjusted)))}`;class xe extends(x(y,"label")){constructor(){super(...arguments),this.selects=void 0,this.listRole="menu",this.itemRole="menuitem"}static get styles(){return[fe]}get hasLabel(){return this.slotHasContent}get buttonContent(){return[i`<slot name="icon" slot="icon" ?icon-only="${!this.hasLabel}"><sp-icon-more class="icon"></sp-icon-more></slot><slot name="label" ?hidden="${!this.hasLabel}"></slot>`]}get renderButton(){return i`<sp-action-button quiet ?selected="${this.open}" aria-haspopup="true" aria-controls="popover" aria-expanded="${this.open?"true":"false"}" aria-label="${a(this.label||void 0)}" id="button" class="button" size="${this.size}" @blur="${this.onButtonBlur}" @click="${this.onButtonClick}" @focus="${this.onButtonFocus}" ?disabled="${this.disabled}">${this.buttonContent}</sp-action-button>`}get renderPopover(){return i`<sp-popover id="popover" @sp-overlay-closed="${this.onOverlayClosed}"><sp-menu id="menu" role="${this.listRole}" @change="${this.handleChange}" .selects="${this.selects}"></sp-menu></sp-popover>`}updated(e){super.updated(e),e.has("invalid")&&(this.invalid=!1),this.quiet=!0}}l([c({type:String})],xe.prototype,"selects",void 0),h("sp-action-menu",xe);var ye=q`:host{--spectrum-asset-icon-min-width:var(--spectrum-global-dimension-size-600);--spectrum-asset-icon-max-width:var(
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
)}`;class we extends g{constructor(){super(...arguments),this.label=""}static get styles(){return[ye]}render(){return"file"===this.variant?(e=this.label,i`<svg class="file" role="img" viewBox="0 0 128 128" aria-label="${e||"File"}"><path class="fileBackground" d="M24,126c-5.5,0-10-4.5-10-10V12c0-5.5,4.5-10,10-10h61.5c2.1,0,4.1,0.8,5.6,2.3l20.5,20.4c1.5,1.5,2.4,3.5,2.4,5.7V116c0,5.5-4.5,10-10,10H24z"></path><path class="fileOutline" d="M113.1,23.3L92.6,2.9C90.7,1,88.2,0,85.5,0H24c-6.6,0-12,5.4-12,12v104c0,6.6,5.4,12,12,12h80c6.6,0,12-5.4,12-12V30.4C116,27.8,114.9,25.2,113.1,23.3z M90,6l20.1,20H92c-1.1,0-2-0.9-2-2V6z M112,116c0,4.4-3.6,8-8,8H24c-4.4,0-8-3.6-8-8V12c0-4.4,3.6-8,8-8h61.5c0.2,0,0.3,0,0.5,0v20c0,3.3,2.7,6,6,6h20c0,0.1,0,0.3,0,0.4V116z"></path></svg>`):"folder"===this.variant?(e=>i`<svg class="folder" role="img" viewBox="0 0 32 32" aria-label="${e||"Folder"}"><path class="folderBackground" d="M3,29.5c-1.4,0-2.5-1.1-2.5-2.5V5c0-1.4,1.1-2.5,2.5-2.5h10.1c0.5,0,1,0.2,1.4,0.6l3.1,3.1c0.2,0.2,0.4,0.3,0.7,0.3H29c1.4,0,2.5,1.1,2.5,2.5v18c0,1.4-1.1,2.5-2.5,2.5H3z"></path><path class="folderOutline" d="M29,6H18.3c-0.1,0-0.2,0-0.4-0.2l-3.1-3.1C14.4,2.3,13.8,2,13.1,2H3C1.3,2,0,3.3,0,5v22c0,1.6,1.3,3,3,3h26c1.7,0,3-1.4,3-3V9C32,7.3,30.7,6,29,6z M31,27c0,1.1-0.9,2-2,2H3c-1.1,0-2-0.9-2-2V7h28c1.1,0,2,0.9,2,2V27z"></path></svg>`)(this.label):i`<slot></slot>`;var e}}l([c({type:String,reflect:!0})],we.prototype,"variant",void 0),l([c()],we.prototype,"label",void 0),h("sp-asset",we);var ke=q`:host{--spectrum-avatar-size-50-width:var(--spectrum-alias-avatar-size-50);--spectrum-avatar-size-50-height:var(--spectrum-alias-avatar-size-50);--spectrum-avatar-size-50-border-radius:50%;--spectrum-avatar-size-100-opacity:1;--spectrum-avatar-size-100-opacity-disabled:0.3}:host{-webkit-user-drag:none;border-radius:var(--spectrum-avatar-size-50-border-radius,50%);border-style:none;height:var(
--spectrum-avatar-size-50-height,var(--spectrum-alias-avatar-size-50)
);-webkit-user-select:none;user-select:none;width:var(
--spectrum-avatar-size-50-width,var(--spectrum-alias-avatar-size-50)
)}:host{opacity:var(--spectrum-avatar-size-100-opacity,1)}:host([disabled]){opacity:var(
--spectrum-avatar-size-100-opacity-disabled,.3
)}:host{display:block;overflow:hidden}img{height:auto;vertical-align:top;width:100%}`;class ze extends g{constructor(){super(...arguments),this.label="",this.src=""}static get styles(){return[ke]}render(){return i`<img alt="${a(this.label||void 0)}" src="${this.src}">`}}l([c()],ze.prototype,"label",void 0),l([c()],ze.prototype,"src",void 0),h("sp-avatar",ze);var Ce=q`:host{--spectrum-banner-border-radius:var(
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
)}`;class Le extends g{constructor(){super(...arguments),this.type="info",this.corner=!1}static get styles(){return[Ce]}render(){return i`<div id="header"><slot name="header"></slot></div><div id="content"><slot name="content"></slot></div>`}}l([c({reflect:!0,type:String})],Le.prototype,"type",void 0),l([c({reflect:!0,type:Boolean})],Le.prototype,"corner",void 0),h("sp-banner",Le);var He=q`:host{--spectrum-buttongroup-button-gap-x:var(
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
)}:host([vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-flex-grow:1}:host([dir=ltr][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:left}:host([dir=rtl][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:right}`;class Me extends g{constructor(){super(...arguments),this.vertical=!1}static get styles(){return[He]}render(){return i`<slot></slot>`}}l([c({type:Boolean,reflect:!0})],Me.prototype,"vertical",void 0),h("sp-button-group",Me);class Ve extends u{constructor(){super(...arguments),this.checked=!1,this.readonly=!1}get focusElement(){return this.inputElement}handleChange(e){if(this.readonly)return void(this.inputElement.checked=this.checked);this.checked=this.inputElement.checked;const t=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(t)}render(){return i`<input id="input" aria-labelledby="label" type="checkbox" .checked="${this.checked}" @change="${this.handleChange}">`}}l([c({type:Boolean,reflect:!0})],Ve.prototype,"checked",void 0),l([c({type:Boolean,reflect:!0})],Ve.prototype,"readonly",void 0),l([n("#input")],Ve.prototype,"inputElement",void 0);h("sp-icon-checkmark75",class extends s{render(){return k(i),w`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" aria-hidden="true" fill="currentColor"><path d="M3.667 9.07a.96.96 0 01-.737-.344L.753 6.114a.96.96 0 111.474-1.23l1.418 1.701 4.112-5.233a.96.96 0 011.51 1.186L4.422 8.704a.962.962 0 01-.741.367z"/></svg>`}});h("sp-icon-checkmark200",class extends s{render(){return k(i),w`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" aria-hidden="true" fill="currentColor"><path d="M4.313 10.98a1.042 1.042 0 01-.8-.375L.647 7.165a1.042 1.042 0 011.6-1.333l2.042 2.45 5.443-6.928a1.042 1.042 0 011.64 1.287l-6.24 7.94a1.04 1.04 0 01-.804.399z"/></svg>`}});h("sp-icon-checkmark300",class extends s{render(){return k(i),w`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" aria-hidden="true" fill="currentColor"><path d="M5.102 12.514a1.087 1.087 0 01-.834-.39L.988 8.19A1.085 1.085 0 012.656 6.8l2.421 2.906 6.243-7.947a1.085 1.085 0 011.707 1.34L5.955 12.1a1.089 1.089 0 01-.838.415z"/></svg>`}});h("sp-icon-dash75",class extends s{render(){return k(i),w`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" aria-hidden="true" fill="currentColor"><path d="M6.99 4.96H1.01a.96.96 0 010-1.92h5.98a.96.96 0 010 1.92z"/></svg>`}});h("sp-icon-dash100",class extends s{render(){return k(i),w`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" aria-hidden="true" fill="currentColor"><path d="M8.5 6h-7a1 1 0 010-2h7a1 1 0 010 2z"/></svg>`}});h("sp-icon-dash200",class extends s{render(){return k(i),w`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" aria-hidden="true" fill="currentColor"><path d="M10.021 7.042H1.98a1.042 1.042 0 110-2.083h8.043a1.042 1.042 0 010 2.083z"/></svg>`}});h("sp-icon-dash300",class extends s{render(){return k(i),w`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" aria-hidden="true" fill="currentColor"><path d="M10.61 7.085H1.39a1.085 1.085 0 010-2.17h9.22a1.085 1.085 0 010 2.17z"/></svg>`}});var Be=q`:host{--spectrum-alias-focus-ring-gap:var(
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
)}}:host{display:inline-flex;vertical-align:top}:host(:focus){outline:0}:host([disabled]){pointer-events:none}:host(:empty) label{display:none}`;var $e=q`:host{--spectrum-alias-ui-icon-triplegripper-size-100-height:var(
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
)}`;const Ae={s:i`<sp-icon-checkmark75 id="checkmark" class="spectrum-UIIcon-Checkmark75"></sp-icon-checkmark75>`,m:i`<sp-icon-checkmark100 id="checkmark" class="spectrum-UIIcon-Checkmark100"></sp-icon-checkmark100>`,l:i`<sp-icon-checkmark200 id="checkmark" class="spectrum-UIIcon-Checkmark200"></sp-icon-checkmark200>`,xl:i`<sp-icon-checkmark300 id="checkmark" class="spectrum-UIIcon-Checkmark300"></sp-icon-checkmark300>`},Se={s:i`<sp-icon-dash75 id="partialCheckmark" class="spectrum-UIIcon-Dash75"></sp-icon-dash75>`,m:i`<sp-icon-dash100 id="partialCheckmark" class="spectrum-UIIcon-Dash100"></sp-icon-dash100>`,l:i`<sp-icon-dash200 id="partialCheckmark" class="spectrum-UIIcon-Dash200"></sp-icon-dash200>`,xl:i`<sp-icon-dash300 id="partialCheckmark" class="spectrum-UIIcon-Dash300"></sp-icon-dash300>`};class qe extends(z(Ve)){constructor(){super(...arguments),this.indeterminate=!1,this.invalid=!1,this.emphasized=!1}static get styles(){return[Be,C,$e]}render(){return i`${super.render()} <span id="box">${Ae[this.size]} ${Se[this.size]} </span><label id="label"><slot></slot></label>`}updated(e){super.updated(e),e.has("invalid")&&(this.invalid?this.inputElement.setAttribute("aria-invalid","true"):this.inputElement.removeAttribute("aria-invalid")),e.has("indeterminate")&&(this.indeterminate?this.inputElement.setAttribute("aria-checked","mixed"):this.inputElement.removeAttribute("aria-checked"))}}l([c({type:Boolean,reflect:!0})],qe.prototype,"indeterminate",void 0),l([c({type:Boolean,reflect:!0})],qe.prototype,"invalid",void 0),l([c({type:Boolean,reflect:!0})],qe.prototype,"emphasized",void 0),h("sp-checkbox",qe);var Ze=q`:host{--spectrum-picker-m-popover-offset-y:var(
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
)}`;class Ee extends g{constructor(){super(...arguments),this.opened=!1,this.textOnly=!1}static get styles(){return[Ze]}render(){return i`<slot></slot>`}}l([c({type:Boolean,reflect:!0})],Ee.prototype,"opened",void 0),l([c({type:Boolean,attribute:"text-only",hasChanged:()=>!1})],Ee.prototype,"textOnly",void 0),h("sp-quick-actions",Ee);var _e=q`:host{--spectrum-card-min-width:var(--spectrum-global-dimension-size-3000);--spectrum-card-border-size:var(--spectrum-alias-border-size-thin);--spectrum-card-border-radius:var(--spectrum-alias-border-radius-regular);--spectrum-card-actions-margin:var(--spectrum-global-dimension-size-125);--spectrum-quickactions-height:var(--spectrum-global-dimension-size-500);--spectrum-card-checkbox-margin:var(--spectrum-global-dimension-size-200);--spectrum-card-coverphoto-height:var(
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
)}#cover-photo,#preview{order:-1;overflow:hidden}#preview+#cover-photo{display:none}#cover-photo ::slotted(*),#preview ::slotted(*){display:block;object-fit:cover;width:100%}:host(:not([variant=gallery])) #preview ::slotted(*){height:100%}:host([horizontal]) #preview{width:auto}sp-quick-actions{z-index:1}.title{width:var(--spectrum-card-title-width)}.subtitle{text-transform:none}`;var Ie=[N,O,q`:host{--spectrum-alias-body-text-font-family:var(
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
)}`];class Pe extends(L(H(M(g),['[slot="cover-photo"]','[slot="preview"]']))){constructor(){super(...arguments),this.variant="standard",this.selected=!1,this.heading="",this.horizontal=!1,this.focused=!1,this.toggles=!1,this.subheading="",this.handleFocusin=e=>{this.focused=!0;e.composedPath()[0]===this?this.addEventListener("keydown",this.handleKeydown):this.removeEventListener("keydown",this.handleKeydown)}}static get styles(){return[j,Ie,_e]}get hasCoverPhoto(){return this.getSlotContentPresence('[slot="cover-photo"]')}get hasPreview(){return this.getSlotContentPresence('[slot="preview"]')}click(){var e;null===(e=this.likeAnchor)||void 0===e||e.click()}handleFocusout(e){this.focused=!1;e.composedPath()[0]===this&&this.removeEventListener("keydown",this.handleKeydown)}handleKeydown(e){const{code:t}=e;switch(t){case"Space":if(this.toggleSelected(),this.toggles)break;case"Enter":case"NumpadEnter":this.click()}}handleSelectedChange({target:{checked:e}}){this.selected=e,this.announceChange()}toggleSelected(){this.toggles?(this.selected=!this.selected,this.announceChange()):this.dispatchEvent(new Event("click",{bubbles:!0,composed:!0}))}announceChange(){this.dispatchEvent(new Event("change",{cancelable:!0}))||(this.selected=!this.selected)}stopPropagationOnHref(e){this.href&&e.stopPropagation()}handlePointerdown(e){if(e.composedPath().some((e=>"a"===e.localName)))return;const t=+new Date,r=()=>{+new Date-t<200&&this.click(),this.removeEventListener("pointerup",r)};this.addEventListener("pointerup",r)}get renderHeading(){return i`<div class="title spectrum-Heading spectrum-Heading--sizeXS" id="heading"><slot name="heading">${this.heading}</slot></div>`}get renderPreviewImage(){return i`<sp-asset id="preview" variant="${a(this.asset)}"><slot name="preview"></slot></sp-asset>`}get renderCoverImage(){return i`<sp-asset id="cover-photo" variant="${a(this.asset)}"><slot name="cover-photo"></slot></sp-asset>`}get images(){const e=[];return this.hasPreview&&e.push(this.renderPreviewImage),this.hasCoverPhoto&&e.push(this.renderCoverImage),e}renderImage(){return this.horizontal?this.images:"standard"!==this.variant?[this.renderPreviewImage]:this.images}get renderSubtitleAndDescription(){return i`<div class="subtitle spectrum-Detail spectrum-Detail--sizeS"><slot name="subheading">${this.subheading}</slot></div><slot name="description"></slot>`}render(){return i`<div class="body"><div class="header">${this.renderHeading} ${"gallery"===this.variant?this.renderSubtitleAndDescription:i``} ${"quiet"!==this.variant||"s"!==this.size?i`<div class="actionButton" @pointerdown="${this.stopPropagationOnHref}"><slot name="actions"></slot></div>`:i``}</div>${"gallery"!==this.variant?i`<div class="content">${this.renderSubtitleAndDescription}</div>`:i``}</div>${this.href?this.renderAnchor({id:"like-anchor",labelledby:"heading"}):i``} ${"standard"===this.variant?i`<slot name="footer"></slot>`:i``} ${this.renderImage()} ${this.toggles?i`<sp-quick-actions class="quickActions" @pointerdown="${this.stopPropagationOnHref}"><sp-checkbox class="checkbox" @change="${this.handleSelectedChange}" ?checked="${this.selected}"></sp-checkbox></sp-quick-actions>`:i``} ${"quiet"===this.variant&&"s"===this.size?i`<sp-quick-actions class="spectrum-QuickActions actions" @pointerdown="${this.stopPropagationOnHref}"><slot name="actions"></slot></sp-quick-actions>`:i``}`}firstUpdated(e){super.firstUpdated(e),this.addEventListener("pointerdown",this.handlePointerdown),this.addEventListener("focusin",this.handleFocusin),this.shadowRoot.addEventListener("focusin",this.handleFocusin),this.addEventListener("focusout",this.handleFocusout)}}l([c()],Pe.prototype,"asset",void 0),l([c({reflect:!0})],Pe.prototype,"variant",void 0),l([c({type:Boolean,reflect:!0})],Pe.prototype,"selected",void 0),l([c()],Pe.prototype,"heading",void 0),l([c({type:Boolean,reflect:!0})],Pe.prototype,"horizontal",void 0),l([n("#like-anchor")],Pe.prototype,"likeAnchor",void 0),l([c({type:String,reflect:!0})],Pe.prototype,"size",void 0),l([c({type:Boolean,reflect:!0})],Pe.prototype,"focused",void 0),l([c({type:Boolean,reflect:!0})],Pe.prototype,"toggles",void 0),l([c()],Pe.prototype,"subheading",void 0),h("sp-card",Pe);var De=q`:host{--spectrum-coachmark-animation-indicator-keyframe-0-scale:1;--spectrum-coachmark-animation-indicator-keyframe-0-opacity:0;--spectrum-coachmark-animation-indicator-keyframe-50-scale:1.5;--spectrum-coachmark-animation-indicator-keyframe-50-opacity:1;--spectrum-coachmark-animation-indicator-keyframe-100-scale:2;--spectrum-coachmark-animation-indicator-keyframe-100-opacity:0;--spectrum-coachmark-quiet-animation-indicator-keyframe-0-scale:0.8;--spectrum-coachmark-min-width:var(--spectrum-global-dimension-size-3400);--spectrum-coachmark-max-width:var(--spectrum-global-dimension-size-5000);--spectrum-coachmark-border-radius:var(
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
)}:host{display:inline-block}`;class Fe extends g{constructor(){super(...arguments),this.quiet=!1,this.variant=""}static get styles(){return[De]}render(){return i`<div class="ring"></div><div class="ring"></div><div class="ring"></div>`}}l([c({type:Boolean,reflect:!0})],Fe.prototype,"quiet",void 0),l([c({reflect:!0})],Fe.prototype,"variant",void 0),h("sp-coachmark",Fe);const Te=["",()=>{}];const Ue=e(class extends oe{constructor(){super(...arguments),this.start=Te,this.streamInside=Te,this.end=Te,this.streamOutside=Te,this.state="off",this.handleStart=e=>{this.callHandler(this.start[1],e),e.defaultPrevented||(this.removeListeners(),this.addListeners("on"))},this.handleStream=e=>{this.callHandler(this.streamInside[1],e)},this.handleEnd=e=>{this.callHandler(this.end[1],e),this.removeListeners(),this.addListeners("off")},this.handleBetween=e=>{this.callHandler(this.streamOutside[1],e)}}render(e){return V}update(e,[{start:t,end:r,streamInside:o=Te,streamOutside:s=Te}]){var i;this.element!==e.element&&(this.element=e.element,this.removeListeners()),this.host=(null===(i=e.options)||void 0===i?void 0:i.host)||this.element,this.start=t,this.end=r,this.streamInside=o,this.streamOutside=s,this.addListeners()}addListeners(e){this.state=e||this.state,"off"===this.state?(this.addListener(this.streamOutside[0],this.handleBetween),this.addListener(this.start[0],this.handleStart)):"on"===this.state&&(this.addListener(this.streamInside[0],this.handleStream),this.addListener(this.end[0],this.handleEnd))}callHandler(e,t){"function"==typeof e?e.call(this.host,t):e.handleEvent(t)}addListener(e,t){Array.isArray(e)?e.map((e=>{this.element.addEventListener(e,t)})):this.element.addEventListener(e,t)}removeListener(e,t){Array.isArray(e)?e.map((e=>{this.element.removeEventListener(e,t)})):this.element.removeEventListener(e,t)}removeListeners(){this.removeListener(this.start[0],this.handleStart),this.removeListener(this.streamInside[0],this.handleStream),this.removeListener(this.end[0],this.handleEnd),this.removeListener(this.streamOutside[0],this.handleBetween)}disconnected(){this.removeListeners()}reconnected(){this.addListeners()}});var Re=q`:host{--spectrum-colorloupe-width:var(
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
)}@media (forced-colors:active){:host{--spectrum-colorloupe-outer-border-color:CanvasText}}svg{height:inherit;width:inherit}`;class Ne extends g{constructor(){super(...arguments),this.open=!1,this.color="rgba(255, 0, 0, 0.5)"}static get styles(){return[Re]}render(){return i`<svg><g transform="translate(1 1)"><path class="inner" d="M24,0A24,24,0,0,1,48,24c0,16.255-24,40-24,40S0,40.255,0,24A24,24,0,0,1,24,0Z" fill="${this.color}"/><path class="outer" d="M24,2A21.98,21.98,0,0,0,2,24c0,6.2,4,14.794,11.568,24.853A144.233,144.233,0,0,0,24,61.132,144.085,144.085,0,0,0,34.4,48.893C41.99,38.816,46,30.209,46,24A21.98,21.98,0,0,0,24,2m0-2A24,24,0,0,1,48,24c0,16.255-24,40-24,40S0,40.255,0,24A24,24,0,0,1,24,0Z"/></g></svg>`}}l([c({type:Boolean,reflect:!0})],Ne.prototype,"open",void 0),l([c({type:String})],Ne.prototype,"color",void 0),h("sp-color-loupe",Ne);var Oe=q`:host{--spectrum-colorhandle-size:var(--spectrum-global-dimension-size-200);--spectrum-colorhandle-inner-border-size:var(
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
)}@media (forced-colors:active){:host{--spectrum-colorhandle-inner-border-color-disabled:GrayText;--spectrum-colorhandle-fill-color-disabled:Canvas;--spectrum-colorhandle-inner-border-color:CanvasText}:host([disabled]){forced-color-adjust:none}}:host{box-shadow:var(--spectrum-colorhandle-outer-box-shadow)}.color{box-shadow:inset var(--spectrum-colorhandle-outer-box-shadow)}:host(.focus-visible):before,:host([focus]):before{background-color:var(--spectrum-colorhandle-focus-background-color);border-radius:50%;content:"";display:block;height:calc(100% + var(--spectrum-colorhandle-focus-width)*2);margin-left:calc(-1*var(--spectrum-colorhandle-focus-width));margin-top:calc(-1*var(--spectrum-colorhandle-focus-width));width:calc(100% + var(--spectrum-colorhandle-focus-width)*2)}:host{touch-action:none}:host(:focus){outline:0}`;const je=/^hs[v|l]a?\s?\((\d{1,3}\.?\d*?),?\s?(\d{1,3})/,Ke=/(^hs[v|l]a?\s?\()\d{1,3}\.?\d*?(,?\s?)\d{1,3}/,Ge=/(^hs[v|l]a?\()\d{1,3}/;class Xe extends g{constructor(){super(...arguments),this.disabled=!1,this.focused=!1,this.open=!1,this.color="rgba(255, 0, 0, 0.5)"}static get styles(){return[Oe]}handlePointerdown(e){"touch"===e.pointerType&&(this.open=!0),this.setPointerCapture(e.pointerId)}handlePointerup(e){this.open=!1,this.releasePointerCapture(e.pointerId)}render(){return i`<div class="color" style="background-color:${this.color}"></div><sp-color-loupe color="${this.color}" ?open="${this.open&&!this.disabled}"></sp-color-loupe>`}firstUpdated(e){super.firstUpdated(e),this.addEventListener("pointerdown",this.handlePointerdown),this.addEventListener("pointerup",this.handlePointerup),this.addEventListener("pointercancel",this.handlePointerup)}}function Ye(e,t){(function(e){return"string"==typeof e&&-1!==e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var r=function(e){return"string"==typeof e&&-1!==e.indexOf("%")}(e);return e=360===t?e:Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:e=360===t?(e<0?e%t+t:e%t)/parseFloat(String(t)):e%t/parseFloat(String(t))}function We(e){return Math.min(1,Math.max(0,e))}function Qe(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Je(e){return e<=1?100*Number(e)+"%":e}function et(e){return 1===e.length?"0"+e:String(e)}function tt(e,t,r){e=Ye(e,255),t=Ye(t,255),r=Ye(r,255);var o=Math.max(e,t,r),s=Math.min(e,t,r),i=0,a=0,l=(o+s)/2;if(o===s)a=0,i=0;else{var c=o-s;switch(a=l>.5?c/(2-o-s):c/(o+s),o){case e:i=(t-r)/c+(t<r?6:0);break;case t:i=(r-e)/c+2;break;case r:i=(e-t)/c+4}i/=6}return{h:i,s:a,l:l}}function rt(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*r*(t-e):r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ot(e,t,r){e=Ye(e,255),t=Ye(t,255),r=Ye(r,255);var o=Math.max(e,t,r),s=Math.min(e,t,r),i=0,a=o,l=o-s,c=0===o?0:l/o;if(o===s)i=0;else{switch(o){case e:i=(t-r)/l+(t<r?6:0);break;case t:i=(r-e)/l+2;break;case r:i=(e-t)/l+4}i/=6}return{h:i,s:c,v:a}}function st(e,t,r,o){var s=[et(Math.round(e).toString(16)),et(Math.round(t).toString(16)),et(Math.round(r).toString(16))];return o&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function it(e){return Math.round(255*parseFloat(e)).toString(16)}function at(e){return lt(e)/255}function lt(e){return parseInt(e,16)}l([c({type:Boolean,reflect:!0})],Xe.prototype,"disabled",void 0),l([c({type:Boolean,reflect:!0})],Xe.prototype,"focused",void 0),l([c({type:Boolean,reflect:!0})],Xe.prototype,"open",void 0),l([c({type:String})],Xe.prototype,"color",void 0),h("sp-color-handle",Xe);var ct={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function nt(e){var t={r:0,g:0,b:0},r=1,o=null,s=null,i=null,a=!1,l=!1;return"string"==typeof e&&(e=function(e){if(0===(e=e.trim().toLowerCase()).length)return!1;var t=!1;if(ct[e])e=ct[e],t=!0;else if("transparent"===e)return{r:0,g:0,b:0,a:0,format:"name"};var r=pt.rgb.exec(e);if(r)return{r:r[1],g:r[2],b:r[3]};if(r=pt.rgba.exec(e))return{r:r[1],g:r[2],b:r[3],a:r[4]};if(r=pt.hsl.exec(e))return{h:r[1],s:r[2],l:r[3]};if(r=pt.hsla.exec(e))return{h:r[1],s:r[2],l:r[3],a:r[4]};if(r=pt.hsv.exec(e))return{h:r[1],s:r[2],v:r[3]};if(r=pt.hsva.exec(e))return{h:r[1],s:r[2],v:r[3],a:r[4]};if(r=pt.hex8.exec(e))return{r:lt(r[1]),g:lt(r[2]),b:lt(r[3]),a:at(r[4]),format:t?"name":"hex8"};if(r=pt.hex6.exec(e))return{r:lt(r[1]),g:lt(r[2]),b:lt(r[3]),format:t?"name":"hex"};if(r=pt.hex4.exec(e))return{r:lt(r[1]+r[1]),g:lt(r[2]+r[2]),b:lt(r[3]+r[3]),a:at(r[4]+r[4]),format:t?"name":"hex8"};if(r=pt.hex3.exec(e))return{r:lt(r[1]+r[1]),g:lt(r[2]+r[2]),b:lt(r[3]+r[3]),format:t?"name":"hex"};return!1}(e)),"object"==typeof e&&(ht(e.r)&&ht(e.g)&&ht(e.b)?(t=function(e,t,r){return{r:255*Ye(e,255),g:255*Ye(t,255),b:255*Ye(r,255)}}(e.r,e.g,e.b),a=!0,l="%"===String(e.r).substr(-1)?"prgb":"rgb"):ht(e.h)&&ht(e.s)&&ht(e.v)?(o=Je(e.s),s=Je(e.v),t=function(e,t,r){e=6*Ye(e,360),t=Ye(t,100),r=Ye(r,100);var o=Math.floor(e),s=e-o,i=r*(1-t),a=r*(1-s*t),l=r*(1-(1-s)*t),c=o%6;return{r:255*[r,a,i,i,l,r][c],g:255*[l,r,r,a,i,i][c],b:255*[i,i,l,r,r,a][c]}}(e.h,o,s),a=!0,l="hsv"):ht(e.h)&&ht(e.s)&&ht(e.l)&&(o=Je(e.s),i=Je(e.l),t=function(e,t,r){var o,s,i;if(e=Ye(e,360),t=Ye(t,100),r=Ye(r,100),0===t)s=r,i=r,o=r;else{var a=r<.5?r*(1+t):r+t-r*t,l=2*r-a;o=rt(l,a,e+1/3),s=rt(l,a,e),i=rt(l,a,e-1/3)}return{r:255*o,g:255*s,b:255*i}}(e.h,o,i),a=!0,l="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=Qe(r),{ok:a,format:e.format||l,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}var dt="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",mt="[\\s|\\(]+("+dt+")[,|\\s]+("+dt+")[,|\\s]+("+dt+")\\s*\\)?",ut="[\\s|\\(]+("+dt+")[,|\\s]+("+dt+")[,|\\s]+("+dt+")[,|\\s]+("+dt+")\\s*\\)?",pt={CSS_UNIT:new RegExp(dt),rgb:new RegExp("rgb"+mt),rgba:new RegExp("rgba"+ut),hsl:new RegExp("hsl"+mt),hsla:new RegExp("hsla"+ut),hsv:new RegExp("hsv"+mt),hsva:new RegExp("hsva"+ut),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function ht(e){return Boolean(pt.CSS_UNIT.exec(String(e)))}var bt=function(){function e(t,r){var o;if(void 0===t&&(t=""),void 0===r&&(r={}),t instanceof e)return t;"number"==typeof t&&(t=function(e){return{r:e>>16,g:(65280&e)>>8,b:255&e}}(t)),this.originalInput=t;var s=nt(t);this.originalInput=t,this.r=s.r,this.g=s.g,this.b=s.b,this.a=s.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(o=r.format)&&void 0!==o?o:s.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=s.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},e.prototype.getLuminance=function(){var e=this.toRgb(),t=e.r/255,r=e.g/255,o=e.b/255;return.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(e){return this.a=Qe(e),this.roundA=Math.round(100*this.a)/100,this},e.prototype.toHsv=function(){var e=ot(this.r,this.g,this.b);return{h:360*e.h,s:e.s,v:e.v,a:this.a}},e.prototype.toHsvString=function(){var e=ot(this.r,this.g,this.b),t=Math.round(360*e.h),r=Math.round(100*e.s),o=Math.round(100*e.v);return 1===this.a?"hsv("+t+", "+r+"%, "+o+"%)":"hsva("+t+", "+r+"%, "+o+"%, "+this.roundA+")"},e.prototype.toHsl=function(){var e=tt(this.r,this.g,this.b);return{h:360*e.h,s:e.s,l:e.l,a:this.a}},e.prototype.toHslString=function(){var e=tt(this.r,this.g,this.b),t=Math.round(360*e.h),r=Math.round(100*e.s),o=Math.round(100*e.l);return 1===this.a?"hsl("+t+", "+r+"%, "+o+"%)":"hsla("+t+", "+r+"%, "+o+"%, "+this.roundA+")"},e.prototype.toHex=function(e){return void 0===e&&(e=!1),st(this.r,this.g,this.b,e)},e.prototype.toHexString=function(e){return void 0===e&&(e=!1),"#"+this.toHex(e)},e.prototype.toHex8=function(e){return void 0===e&&(e=!1),function(e,t,r,o,s){var i=[et(Math.round(e).toString(16)),et(Math.round(t).toString(16)),et(Math.round(r).toString(16)),et(it(o))];return s&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}(this.r,this.g,this.b,this.a,e)},e.prototype.toHex8String=function(e){return void 0===e&&(e=!1),"#"+this.toHex8(e)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var e=Math.round(this.r),t=Math.round(this.g),r=Math.round(this.b);return 1===this.a?"rgb("+e+", "+t+", "+r+")":"rgba("+e+", "+t+", "+r+", "+this.roundA+")"},e.prototype.toPercentageRgb=function(){var e=function(e){return Math.round(100*Ye(e,255))+"%"};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var e=function(e){return Math.round(100*Ye(e,255))};return 1===this.a?"rgb("+e(this.r)+"%, "+e(this.g)+"%, "+e(this.b)+"%)":"rgba("+e(this.r)+"%, "+e(this.g)+"%, "+e(this.b)+"%, "+this.roundA+")"},e.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var e="#"+st(this.r,this.g,this.b,!1),t=0,r=Object.entries(ct);t<r.length;t++){var o=r[t],s=o[0];if(e===o[1])return s}return!1},e.prototype.toString=function(e){var t=Boolean(e);e=null!=e?e:this.format;var r=!1,o=this.a<1&&this.a>=0;return t||!o||!e.startsWith("hex")&&"name"!==e?("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex4"===e&&(r=this.toHex8String(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString()):"name"===e&&0===this.a?this.toName():this.toRgbString()},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){void 0===t&&(t=10);var r=this.toHsl();return r.l+=t/100,r.l=We(r.l),new e(r)},e.prototype.brighten=function(t){void 0===t&&(t=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-t/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-t/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-t/100*255))),new e(r)},e.prototype.darken=function(t){void 0===t&&(t=10);var r=this.toHsl();return r.l-=t/100,r.l=We(r.l),new e(r)},e.prototype.tint=function(e){return void 0===e&&(e=10),this.mix("white",e)},e.prototype.shade=function(e){return void 0===e&&(e=10),this.mix("black",e)},e.prototype.desaturate=function(t){void 0===t&&(t=10);var r=this.toHsl();return r.s-=t/100,r.s=We(r.s),new e(r)},e.prototype.saturate=function(t){void 0===t&&(t=10);var r=this.toHsl();return r.s+=t/100,r.s=We(r.s),new e(r)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var r=this.toHsl(),o=(r.h+t)%360;return r.h=o<0?360+o:o,new e(r)},e.prototype.mix=function(t,r){void 0===r&&(r=50);var o=this.toRgb(),s=new e(t).toRgb(),i=r/100;return new e({r:(s.r-o.r)*i+o.r,g:(s.g-o.g)*i+o.g,b:(s.b-o.b)*i+o.b,a:(s.a-o.a)*i+o.a})},e.prototype.analogous=function(t,r){void 0===t&&(t=6),void 0===r&&(r=30);var o=this.toHsl(),s=360/r,i=[this];for(o.h=(o.h-(s*t>>1)+720)%360;--t;)o.h=(o.h+s)%360,i.push(new e(o));return i},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){void 0===t&&(t=6);for(var r=this.toHsv(),o=r.h,s=r.s,i=r.v,a=[],l=1/t;t--;)a.push(new e({h:o,s:s,v:i})),i=(i+l)%1;return a},e.prototype.splitcomplement=function(){var t=this.toHsl(),r=t.h;return[this,new e({h:(r+72)%360,s:t.s,l:t.l}),new e({h:(r+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var r=this.toRgb(),o=new e(t).toRgb();return new e({r:o.r+(r.r-o.r)*r.a,g:o.g+(r.g-o.g)*r.a,b:o.b+(r.b-o.b)*r.a})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var r=this.toHsl(),o=r.h,s=[this],i=360/t,a=1;a<t;a++)s.push(new e({h:(o+a*i)%360,s:r.s,l:r.l}));return s},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}();var gt=q`:host{--spectrum-colorarea-default-width:var(
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
)}:host([disabled]) .gradient{display:none}@media (forced-colors:active){:host{--spectrum-colorarea-fill-color-disabled:GrayText}:host([disabled]){forced-color-adjust:none}}:host{touch-action:none}:host:before{pointer-events:none}.gradient{overflow:hidden}.handle{transform:translate(var(--spectrum-colorarea-default-width))}::slotted(*){height:100%;width:100%}`;class vt extends g{constructor(){super(...arguments),this.disabled=!1,this.focused=!1,this.labelX="saturation",this.labelY="luminosity",this._hue=0,this._color=new bt({h:0,s:1,v:1}),this._previousColor=new bt({h:0,s:1,v:1}),this._format={format:"",isString:!1},this.activeAxis="x",this._x=1,this._y=0,this.step=.01,this.altered=0,this.activeKeys=new Set,this._pointerDown=!1}static get styles(){return[gt]}get hue(){return this._hue}set hue(e){const t=Math.min(360,Math.max(0,e));if(t===this.hue)return;const r=this.hue,{s:o,v:s}=this._color.toHsv();this._color=new bt({h:t,s:o,v:s}),this._hue=t,this.requestUpdate("hue",r)}get value(){return this.color}get color(){switch(this._format.format){case"rgb":return this._format.isString?this._color.toRgbString():this._color.toRgb();case"prgb":return this._format.isString?this._color.toPercentageRgbString():this._color.toPercentageRgb();case"hex8":return this._format.isString?this._color.toHex8String():this._color.toHex8();case"name":return this._color.toName()||this._color.toRgbString();case"hsl":if(this._format.isString){return this._color.toHslString().replace(Ge,`$1${this.hue}`)}{const{s:e,l:t,a:r}=this._color.toHsl();return{h:this.hue,s:e,l:t,a:r}}case"hsv":if(this._format.isString){return this._color.toHsvString().replace(Ge,`$1${this.hue}`)}{const{s:e,v:t,a:r}=this._color.toHsv();return{h:this.hue,s:e,v:t,a:r}}default:return this._format.isString?this._color.toHexString():this._color.toHex()}}set color(e){if(e===this.color)return;const t=this._color;this._color=new bt(e);const r=this._color.format;let o="string"==typeof e||e instanceof String;r.startsWith("hex")&&(o=e.startsWith("#")),this._format={format:r,isString:o};const{h:s,s:i,v:a}=this._color.toHsv();let l;if(o&&r.startsWith("hs")){const t=je.exec(e);if(null!==t){const[,e]=t;l=Number(e)}}else if(!o&&r.startsWith("hs")){const e=this._color.originalInput;l=Object.values(e)[0]}this.hue=l||s,this.x=i,this.y=1-a,this.requestUpdate("color",t)}get x(){return this._x}set x(e){if(e===this.x)return;const t=this.x;this.inputX?(this.inputX.value=e.toString(),this._x=this.inputX.valueAsNumber):this._x=e,this.requestUpdate("x",t)}get y(){return this._y}set y(e){if(e===this.y)return;const t=this.y;this.inputY?(this.inputY.value=e.toString(),this._y=this.inputY.valueAsNumber):this._y=e,this.requestUpdate("y",t)}focus(e={}){super.focus(e),this.forwardFocus()}forwardFocus(){const e=this.getRootNode().activeElement;if(e){let t=!1;try{t=e.matches(":focus-visible")||e.matches(".focus-visible")}catch(r){t=e.matches(".focus-visible")}this.focused=t}"x"===this.activeAxis?this.inputX.focus():this.inputY.focus()}handleFocusin(){this.focused=!0}handleFocusout(){this._pointerDown||(this.focused=!1)}handleKeydown(e){const{code:t}=e;this.focused=!0,this.altered=[e.shiftKey,e.ctrlKey,e.altKey].filter((e=>!!e)).length;0===t.search("Arrow")&&(e.preventDefault(),this.activeKeys.add(t),this.handleKeypress())}handleKeypress(){let e=0,t=0;const r=Math.max(this.step,5*this.altered*this.step);if(this.activeKeys.forEach((o=>{switch(o){case"ArrowUp":t=-1*r;break;case"ArrowDown":t=1*r;break;case"ArrowLeft":e=-1*r;break;case"ArrowRight":e=1*r}})),0!=e?(this.activeAxis="x",this.inputX.focus()):0!=t&&(this.activeAxis="y",this.inputY.focus()),this.x=Math.min(1,Math.max(this.x+e,0)),this.y=Math.min(1,Math.max(this.y+t,0)),this._previousColor=this._color.clone(),this._color=new bt({h:this.hue,s:this.x,v:1-this.y}),0!=e||0!=t){this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}));this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0,cancelable:!0}))||(this._color=this._previousColor)}}handleKeyup(e){e.preventDefault();const{code:t}=e;this.activeKeys.delete(t)}handleInput(e){const{valueAsNumber:t,name:r}=e.target;this[r]=t,this._color=new bt({h:this.hue,s:this.x,v:1-this.y})}handleChange(e){this.handleInput(e),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0,cancelable:!0}))}handlePointerdown(e){0===e.button?(this._pointerDown=!0,this._previousColor=this._color.clone(),this.boundingClientRect=this.getBoundingClientRect(),e.target.setPointerCapture(e.pointerId),"mouse"===e.pointerType&&(this.focused=!0)):e.preventDefault()}handlePointermove(e){const[t,r]=this.calculateHandlePosition(e);this._color=new bt({h:this.hue,s:t,v:1-r}),this.x=t,this.y=r,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0,cancelable:!0}))}handlePointerup(e){e.preventDefault(),this._pointerDown=!1,e.target.releasePointerCapture(e.pointerId);const t=this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0,cancelable:!0}));this.inputX.focus(),"mouse"===e.pointerType&&(this.focused=!1),t||(this._color=this._previousColor)}calculateHandlePosition(e){if(!this.boundingClientRect)return[this.x,this.y];const t=this.boundingClientRect,r=t.left,o=t.top,s=e.clientX,i=e.clientY,a=t.width,l=t.height;return[Math.max(0,Math.min(1,(s-r)/a)),Math.max(0,Math.min(1,(i-o)/l))]}handleAreaPointerdown(e){0===e.button&&(e.stopPropagation(),e.preventDefault(),this.handle.dispatchEvent(new PointerEvent("pointerdown",e)),this.handlePointermove(e))}render(){var e,t;const{width:r=0,height:o=0}=this.boundingClientRect||{};return i`<div @pointerdown="${this.handleAreaPointerdown}" class="gradient" style="background:linear-gradient(to top,#000 0,hsla(${this.hue},100%,0,0) 100%),linear-gradient(to right,#fff 0,hsla(${this.hue},100%,0,0) 100%),hsl(${this.hue},100%,50%)"><slot name="gradient"></slot></div><sp-color-handle tabindex="${a(this.focused?void 0:"0")}" @focus="${this.forwardFocus}" ?focused="${this.focused}" class="handle" color="${this._color.toHslString()}" ?disabled="${this.disabled}" style="transform:translate(${this.x*r}px,${this.y*o}px)" ${Ue({start:["pointerdown",this.handlePointerdown],streamInside:["pointermove",this.handlePointermove],end:[["pointerup","pointercancel"],this.handlePointerup]})}></sp-color-handle><div><input type="range" class="slider" name="x" aria-label="${null!==(e=this.label)&&void 0!==e?e:this.labelX}" min="0" max="1" step="${this.step}" tabindex="-1" .value="${String(this.x)}" @input="${this.handleInput}" @change="${this.handleChange}"></div><div><input type="range" class="slider" name="y" aria-label="${null!==(t=this.label)&&void 0!==t?t:this.labelY}" min="0" max="1" step="${this.step}" tabindex="-1" .value="${String(this.y)}" @input="${this.handleInput}" @change="${this.handleChange}"></div>`}firstUpdated(e){super.firstUpdated(e),this.boundingClientRect=this.getBoundingClientRect(),this.addEventListener("focusin",this.handleFocusin),this.addEventListener("focusout",this.handleFocusout),this.addEventListener("keyup",this.handleKeyup),this.addEventListener("keydown",this.handleKeydown)}updated(e){if(super.updated(e),this.x!==this.inputX.valueAsNumber&&(this.x=this.inputX.valueAsNumber),this.y!==this.inputY.valueAsNumber&&(this.y=this.inputY.valueAsNumber),e.has("focused")&&this.focused){const e=this.inputX.parentElement,t=this.inputY.parentElement;if(!e.shadowRoot&&!t.shadowRoot){e.attachShadow({mode:"open"}),t.attachShadow({mode:"open"});const r='<div tabindex="-1"><slot></slot></div>';e.shadowRoot.innerHTML=r,t.shadowRoot.innerHTML=r}}}connectedCallback(){var e;super.connectedCallback(),!this.observer&&window.ResizeObserver&&(this.observer=new window.ResizeObserver((e=>{for(const t of e)this.boundingClientRect=t.contentRect;this.requestUpdate()}))),null===(e=this.observer)||void 0===e||e.observe(this)}disconnectedCallback(){var e;null===(e=this.observer)||void 0===e||e.unobserve(this),super.disconnectedCallback()}}l([c({type:Boolean,reflect:!0})],vt.prototype,"disabled",void 0),l([c({type:Boolean,reflect:!0})],vt.prototype,"focused",void 0),l([c({type:String})],vt.prototype,"label",void 0),l([c({type:String,attribute:"label-x"})],vt.prototype,"labelX",void 0),l([c({type:String,attribute:"label-y"})],vt.prototype,"labelY",void 0),l([n(".handle")],vt.prototype,"handle",void 0),l([c({type:Number})],vt.prototype,"hue",null),l([c({type:String})],vt.prototype,"value",null),l([c({type:String})],vt.prototype,"color",null),l([c({attribute:!1})],vt.prototype,"activeAxis",void 0),l([c({type:Number})],vt.prototype,"x",null),l([c({type:Number})],vt.prototype,"y",null),l([c({type:Number})],vt.prototype,"step",void 0),l([n('[name="x"]')],vt.prototype,"inputX",void 0),l([n('[name="y"]')],vt.prototype,"inputY",void 0),h("sp-color-area",vt);var ft=q`:host{--spectrum-colorslider-default-length:var(
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
)}:host([disabled]) .gradient{display:none}@media (forced-colors:active){:host{--spectrum-colorslider-border-color-disabled:GrayText;--spectrum-colorslider-fill-color-disabled:Canvas}:host{forced-color-adjust:none}}:host{--sp-color-slider-gradient-fallback:red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%;touch-action:none}:host(:focus){outline:0}:host(:not([vertical])){touch-action:pan-y}:host([vertical]){touch-action:pan-x}.gradient{overflow:hidden}::slotted(*){height:100%;width:100%}`;class xt extends u{constructor(){super(...arguments),this.disabled=!1,this.focused=!1,this.label="hue",this.vertical=!1,this._value=0,this.sliderHandlePosition=0,this._color=new bt({h:0,s:1,v:1}),this._previousColor=new bt({h:0,s:1,v:1}),this._format={format:"",isString:!1},this.step=1,this._altered=0,this._pointerDown=!1}static get styles(){return[ft]}get value(){return this._value}set value(e){const t=Math.min(360,Math.max(0,e));if(t===this.value)return;const r=this.value,{s:o,v:s}=this._color.toHsv();this._color=new bt({h:t,s:o,v:s}),this._value=t,t!==this.sliderHandlePosition&&(this.sliderHandlePosition=t/360*100),this.requestUpdate("value",r)}get color(){switch(this._format.format){case"rgb":return this._format.isString?this._color.toRgbString():this._color.toRgb();case"prgb":return this._format.isString?this._color.toPercentageRgbString():this._color.toPercentageRgb();case"hex":case"hex3":case"hex4":case"hex6":return this._format.isString?this._color.toHexString():this._color.toHex();case"hex8":return this._format.isString?this._color.toHex8String():this._color.toHex8();case"name":return this._color.toName()||this._color.toRgbString();case"hsl":if(this._format.isString){return this._color.toHslString().replace(Ke,`$1${this.value}$2${this._saturation}`)}{const{s:e,l:t,a:r}=this._color.toHsl();return{h:this.value,s:e,l:t,a:r}}case"hsv":if(this._format.isString){return this._color.toHsvString().replace(Ke,`$1${this.value}$2${this._saturation}`)}{const{s:e,v:t,a:r}=this._color.toHsv();return{h:this.value,s:e,v:t,a:r}}default:return"No color format applied."}}set color(e){if(e===this.color)return;const t=this._color;this._color=new bt(e);const r=this._color.format;let o="string"==typeof e||e instanceof String;if(r.startsWith("hex")&&(o=e.startsWith("#")),this._format={format:r,isString:o},o&&r.startsWith("hs")){const t=je.exec(e);if(null!==t){const[,e,r]=t;this.value=Number(e),this._saturation=Number(r)}}else if(!o&&r.startsWith("hs")){const e=this._color.originalInput,t=Object.values(e);this.value=t[0],this._saturation=t[1]}else{const{h:e}=this._color.toHsv();this.value=e}this._previousColor=t,this.requestUpdate("color",t)}get altered(){return this._altered}set altered(e){this._altered=e,this.step=Math.max(1,10*this.altered)}get focusElement(){return this.input}handleKeydown(e){const{key:t}=e;this.focused=!0,this.altered=[e.shiftKey,e.ctrlKey,e.altKey].filter((e=>!!e)).length;let r=0;switch(t){case"ArrowUp":r=this.step;break;case"ArrowDown":r=-this.step;break;case"ArrowLeft":r=this.step*(this.isLTR?-1:1);break;case"ArrowRight":r=this.step*(this.isLTR?1:-1);break;default:return}e.preventDefault(),this.sliderHandlePosition=Math.min(100,Math.max(0,this.sliderHandlePosition+r)),this.value=this.sliderHandlePosition/100*360,this._color=new bt(Object.assign(Object.assign({},this._color.toHsl()),{h:this.value})),0!=r&&(this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}handleInput(e){const{valueAsNumber:t}=e.target;this.value=t,this.sliderHandlePosition=this.value/360*100,this._color=new bt(Object.assign(Object.assign({},this._color.toHsl()),{h:this.value}))}handleChange(e){this.handleInput(e),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}focus(e={}){super.focus(e),this.forwardFocus()}forwardFocus(){const e=this.getRootNode().activeElement;if(e){let t=!1;try{t=e.matches(":focus-visible")||e.matches(".focus-visible")}catch(r){t=e.matches(".focus-visible")}this.focused=t}this.input.focus()}handleFocusin(){this.focused=!0}handleFocusout(){this._pointerDown||(this.altered=0,this.focused=!1)}handlePointerdown(e){0===e.button?(this._pointerDown=!0,this._previousColor=this._color.clone(),this.boundingClientRect=this.getBoundingClientRect(),e.target.setPointerCapture(e.pointerId),"mouse"===e.pointerType&&(this.focused=!0)):e.preventDefault()}handlePointermove(e){this.sliderHandlePosition=this.calculateHandlePosition(e),this.value=this.sliderHandlePosition/100*360,this._color=new bt(Object.assign(Object.assign({},this._color.toHsl()),{h:this.value})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0,cancelable:!0}))}handlePointerup(e){this._pointerDown=!1,e.target.releasePointerCapture(e.pointerId);this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0,cancelable:!0}))||(this._color=this._previousColor),this.focus(),"mouse"===e.pointerType&&(this.focused=!1)}calculateHandlePosition(e){if(!this.boundingClientRect)return this.sliderHandlePosition;const t=this.boundingClientRect,r=this.vertical?t.top:t.left,o=this.vertical?e.clientY:e.clientX,s=this.vertical?t.height:t.width;return 100*Math.max(0,Math.min(1,(o-r)/s))}handleGradientPointerdown(e){0===e.button&&(e.stopPropagation(),e.preventDefault(),this.handle.dispatchEvent(new PointerEvent("pointerdown",e)),this.handlePointermove(e))}render(){return i`
            <div
                class="checkerboard"
                role="presentation"
                @pointerdown=${this.handleGradientPointerdown}
            >
                <div
                    class="gradient"
                    role="presentation"
                    style="background: linear-gradient(to ${this.vertical?"bottom":"right"}, var(--sp-color-slider-gradient, var(--sp-color-slider-gradient-fallback)));"
                >
                    <slot name="gradient"></slot>
                </div>
            </div>
            <sp-color-handle
                tabindex=${a(this.focused?void 0:"0")}
                @focus=${this.forwardFocus}
                ?focused=${this.focused}
                class="handle"
                color="hsl(${this.value}, 100%, 50%)"
                ?disabled=${this.disabled}
                style="${this.vertical?"top":"left"}: ${this.sliderHandlePosition}%"
                ${Ue({start:["pointerdown",this.handlePointerdown],streamInside:["pointermove",this.handlePointermove],end:[["pointerup","pointercancel"],this.handlePointerup]})}
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
        `}firstUpdated(e){super.firstUpdated(e),this.boundingClientRect=this.getBoundingClientRect(),this.addEventListener("focusin",this.handleFocusin),this.addEventListener("focusout",this.handleFocusout)}}l([c({type:Boolean,reflect:!0})],xt.prototype,"disabled",void 0),l([c({type:Boolean,reflect:!0})],xt.prototype,"focused",void 0),l([n(".handle")],xt.prototype,"handle",void 0),l([c({type:String})],xt.prototype,"label",void 0),l([c({type:Boolean,reflect:!0})],xt.prototype,"vertical",void 0),l([c({type:Number})],xt.prototype,"value",null),l([c({type:Number,reflect:!0})],xt.prototype,"sliderHandlePosition",void 0),l([c({type:String})],xt.prototype,"color",null),l([c({type:Number})],xt.prototype,"step",void 0),l([n("input")],xt.prototype,"input",void 0),h("sp-color-slider",xt);var yt=q`:host{--spectrum-colorhandle-size:var(--spectrum-global-dimension-size-200);--spectrum-colorwheel-border-size:var(--spectrum-alias-border-size-thin);--spectrum-colorwheel-border-color-disabled:var(
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
)}`;class wt extends u{constructor(){super(...arguments),this.disabled=!1,this.focused=!1,this.label="hue",this.step=1,this._value=0,this._color=new bt({h:0,s:1,v:1}),this._previousColor=new bt({h:0,s:1,v:1}),this._format={format:"",isString:!1},this._altered=0,this._pointerDown=!1}static get styles(){return[yt]}get value(){return this._value}set value(e){const t=Math.min(360,Math.max(0,e));if(t===this.value)return;const r=this.value,{s:o,v:s}=this._color.toHsv();this._color=new bt({h:t,s:o,v:s}),this._value=t,this.requestUpdate("value",r)}get color(){switch(this._format.format){case"rgb":return this._format.isString?this._color.toRgbString():this._color.toRgb();case"prgb":return this._format.isString?this._color.toPercentageRgbString():this._color.toPercentageRgb();case"hex":case"hex3":case"hex4":case"hex6":return this._format.isString?this._color.toHexString():this._color.toHex();case"hex8":return this._format.isString?this._color.toHex8String():this._color.toHex8();case"name":return this._color.toName()||this._color.toRgbString();case"hsl":if(this._format.isString){return this._color.toHslString().replace(Ke,`$1${this.value}$2${this._saturation}`)}{const{s:e,l:t,a:r}=this._color.toHsl();return{h:this.value,s:e,l:t,a:r}}case"hsv":if(this._format.isString){return this._color.toHsvString().replace(Ke,`$1${this.value}$2${this._saturation}`)}{const{s:e,v:t,a:r}=this._color.toHsv();return{h:this.value,s:e,v:t,a:r}}default:return"No color format applied."}}set color(e){if(e===this.color)return;const t=this._color;this._color=new bt(e);const r=this._color.format;let o="string"==typeof e||e instanceof String;if(r.startsWith("hex")&&(o=e.startsWith("#")),this._format={format:r,isString:o},o&&r.startsWith("hs")){const t=je.exec(e);if(null!==t){const[,e,r]=t;this.value=Number(e),this._saturation=Number(r)}}else if(!o&&r.startsWith("hs")){const e=this._color.originalInput,t=Object.values(e);this.value=t[0],this._saturation=t[1]}else{const{h:e}=this._color.toHsv();this.value=e}this.requestUpdate("color",t)}get altered(){return this._altered}set altered(e){this._altered=e,this.step=Math.max(1,10*this.altered)}get focusElement(){return this.input}handleKeydown(e){const{key:t}=e;this.focused=!0,this.altered=[e.shiftKey,e.ctrlKey,e.altKey].filter((e=>!!e)).length;let r=0;switch(t){case"ArrowUp":r=this.step;break;case"ArrowDown":r=-this.step;break;case"ArrowLeft":r=this.step*(this.isLTR?-1:1);break;case"ArrowRight":r=this.step*(this.isLTR?1:-1);break;default:return}e.preventDefault(),this.value=(360+this.value+r)%360,this._previousColor=this._color.clone(),this._color=new bt(Object.assign(Object.assign({},this._color.toHsl()),{h:this.value})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}));this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0,cancelable:!0}))||(this._color=this._previousColor)}handleInput(e){const{valueAsNumber:t}=e.target;this.value=t,this._color=new bt(Object.assign(Object.assign({},this._color.toHsl()),{h:this.value}))}handleChange(e){this.handleInput(e),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}focus(e={}){super.focus(e),this.forwardFocus()}forwardFocus(){const e=this.getRootNode().activeElement;if(e){let t=!1;try{t=e.matches(":focus-visible")||e.matches(".focus-visible")}catch(r){t=e.matches(".focus-visible")}this.focused=t}this.input.focus()}handleFocusin(){this.focused=!0}handleFocusout(){this._pointerDown||(this.altered=0,this.focused=!1)}handlePointerdown(e){0===e.button?(this._pointerDown=!0,this._previousColor=this._color.clone(),this.boundingClientRect=this.getBoundingClientRect(),e.target.setPointerCapture(e.pointerId),"mouse"===e.pointerType&&(this.focused=!0)):e.preventDefault()}handlePointermove(e){this.value=this.calculateHandlePosition(e),this._color=new bt(Object.assign(Object.assign({},this._color.toHsl()),{h:this.value})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0,cancelable:!0}))}handlePointerup(e){this._pointerDown=!1,e.target.releasePointerCapture(e.pointerId);this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0,cancelable:!0}))||(this._color=this._previousColor),this.focus(),"mouse"===e.pointerType&&(this.focused=!1)}calculateHandlePosition(e){if(!this.boundingClientRect)return this.value;const t=this.boundingClientRect,{width:r,height:o,left:s,top:i}=t,a=s+r/2,l=i+o/2,c=e.clientX-a,n=e.clientY-l;return(360+(360+180*Math.atan2(n,c)/Math.PI))%360}handleGradientPointerdown(e){0!==e.button||e.target.classList.contains("innerCircle")||(e.stopPropagation(),e.preventDefault(),this.handle.dispatchEvent(new PointerEvent("pointerdown",e)),this.handlePointermove(e))}render(){const{width:e=160}=this.boundingClientRect||{},t=e/2,r=t-24,o=2*r,s=`path(evenodd, "M ${t} ${t} m -${t} 0 a ${t} ${t} 0 1 0 ${e} 0 a ${t} ${t} 0 1 0 -${e} 0 M ${t} ${t} m -${r} 0 a ${r} ${r} 0 1 0 ${o} 0 a ${r} ${r} 0 1 0 -${o} 0")`,l=`transform: translate(${(t-12.5)*Math.cos(this.value*Math.PI/180)}px, ${(t-12.5)*Math.sin(this.value*Math.PI/180)}px);`;return i`<slot name="gradient" @pointerdown="${this.handleGradientPointerdown}"><div class="wheel" style="clip-path:${s}"></div></slot><sp-color-handle tabindex="${a(this.focused?void 0:"0")}" @focus="${this.forwardFocus}" ?focused="${this.focused}" class="handle" color="hsl(${this.value}, 100%, 50%)" ?disabled="${this.disabled}" style="${l}" ${Ue({start:["pointerdown",this.handlePointerdown],streamInside:["pointermove",this.handlePointermove],end:[["pointerup","pointercancel"],this.handlePointerup]})}></sp-color-handle><input type="range" class="slider" aria-label="${this.label}" min="0" max="360" step="${this.step}" .value="${String(this.value)}" @input="${this.handleInput}" @change="${this.handleChange}" @keydown="${this.handleKeydown}">`}firstUpdated(e){super.firstUpdated(e),this.boundingClientRect=this.getBoundingClientRect(),this.addEventListener("focusin",this.handleFocusin),this.addEventListener("focusout",this.handleFocusout)}connectedCallback(){var e;super.connectedCallback(),!this.observer&&window.ResizeObserver&&(this.observer=new window.ResizeObserver((e=>{for(const t of e)this.boundingClientRect=t.contentRect;this.requestUpdate()}))),null===(e=this.observer)||void 0===e||e.observe(this)}disconnectedCallback(){var e;null===(e=this.observer)||void 0===e||e.unobserve(this),super.disconnectedCallback()}}l([c({type:Boolean,reflect:!0})],wt.prototype,"disabled",void 0),l([c({type:Boolean,reflect:!0})],wt.prototype,"focused",void 0),l([n(".handle")],wt.prototype,"handle",void 0),l([c({type:String})],wt.prototype,"label",void 0),l([c({type:Number})],wt.prototype,"step",void 0),l([c({type:Number})],wt.prototype,"value",null),l([c({type:String})],wt.prototype,"color",null),l([n("input")],wt.prototype,"input",void 0),h("sp-color-wheel",wt);h("sp-icon-cross500",class extends s{render(){return k(i),w`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" aria-hidden="true" fill="currentColor"><path d="M8.457 7l4.54-4.54a1.03 1.03 0 00-1.458-1.456L7 5.543l-4.54-4.54a1.03 1.03 0 00-1.457 1.458L5.543 7l-4.54 4.54a1.03 1.03 0 101.457 1.456L7 8.457l4.54 4.54a1.03 1.03 0 001.456-1.458z"/></svg>`}});var kt=q`:host{--spectrum-dialog-confirm-min-width:var(
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
)}:host([mode=fullscreenTakeover]) ::slotted([slot=heading]),:host([mode=fullscreen]) ::slotted([slot=heading]){font-size:28px}:host([mode=fullscreenTakeover]) .content,:host([mode=fullscreen]) .content{max-height:none}:host([mode=fullscreenTakeover]) .buttonGroup,:host([mode=fullscreenTakeover]) .footer,:host([mode=fullscreen]) .buttonGroup,:host([mode=fullscreen]) .footer{padding-top:0}:host([mode=fullscreenTakeover]) .footer,:host([mode=fullscreen]) .footer{display:none}:host([mode=fullscreenTakeover]) .buttonGroup,:host([mode=fullscreen]) .buttonGroup{align-self:start;grid-area:buttonGroup}`;class zt extends(M(H(g,['[slot="hero"]','[slot="footer"]','[slot="button"]']))){constructor(){super(...arguments),this.error=!1,this.dismissable=!1,this.noDivider=!1,this.shouldManageTabOrderForScrolling=()=>{const{offsetHeight:e,scrollHeight:t}=this.contentElement;e<t?this.contentElement.tabIndex=0:this.contentElement.removeAttribute("tabindex")}}static get styles(){return[kt,B]}get hasFooter(){return this.getSlotContentPresence('[slot="footer"]')}get hasButtons(){return this.getSlotContentPresence('[slot="button"]')}get hasHero(){return this.getSlotContentPresence('[slot="hero"]')}focus(){if(this.shadowRoot){const e=this.shadowRoot.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [focusable]');e&&(e.updateComplete?e.updateComplete.then((()=>e.focus())):e.focus(),this.removeAttribute("tabindex"))}else super.focus()}close(){this.dispatchEvent(new Event("close",{bubbles:!0}))}render(){return i`<div class="grid"><slot name="hero"></slot><slot name="heading" class="${a(this.hasHero?this.hasHero:void 0)}"></slot>${this.error?i`<sp-icon-alert class="type-icon"></sp-icon-alert>`:i``} ${this.noDivider?i``:i`<sp-divider size="m" class="divider"></sp-divider>`}<div class="content"><slot @slotchange="${this.onContentSlotChange}"></slot></div>${this.hasFooter?i`<div class="footer"><slot name="footer"></slot></div>`:i``} ${this.hasButtons?i`<sp-button-group class="buttonGroup ${this.hasFooter?"":"buttonGroup--noFooter"}"><slot name="button"></slot></sp-button-group>`:i``} ${this.dismissable?i`<sp-action-button class="close-button" label="Close" quiet size="m" @click="${this.close}"><sp-icon-cross500 class="spectrum-UIIcon-Cross500" slot="icon"></sp-icon-cross500></sp-action-button>`:i``}</div>`}shouldUpdate(e){return e.has("mode")&&this.mode&&(this.dismissable=!1),e.has("dismissable")&&this.dismissable&&(this.dismissable=!this.mode),super.shouldUpdate(e)}onContentSlotChange(){this.shouldManageTabOrderForScrolling()}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.shouldManageTabOrderForScrolling)}disconnectedCallback(){window.removeEventListener("resize",this.shouldManageTabOrderForScrolling),super.disconnectedCallback()}}l([n(".content")],zt.prototype,"contentElement",void 0),l([c({type:Boolean,reflect:!0})],zt.prototype,"error",void 0),l([c({type:Boolean,reflect:!0})],zt.prototype,"dismissable",void 0),l([c({type:Boolean,reflect:!0,attribute:"no-divider"})],zt.prototype,"noDivider",void 0),l([c({type:String,reflect:!0})],zt.prototype,"mode",void 0),l([c({type:String,reflect:!0})],zt.prototype,"size",void 0),h("sp-dialog",zt);var Ct=q`:host{--spectrum-dialog-confirm-entry-animation-distance:var(
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
)}:host{height:calc(100vh - var(--swc-body-margins-block,0 * 1px));width:calc(100vw - var(--swc-body-margins-inline,0 * 1px))}`;class Lt extends(M(g)){constructor(){super(...arguments),this.error=!1,this.cancelLabel="",this.confirmLabel="",this.dismissable=!1,this.footer="",this.hero="",this.heroLabel="",this.noDivider=!1,this.open=!1,this.secondaryLabel="",this.headline="",this.responsive=!1,this.underlay=!1}static get styles(){return[Ct]}focus(){if(this.shadowRoot){const e=this.shadowRoot.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [focusable]');e?(e.updateComplete?e.updateComplete.then((()=>e.focus())):e.focus(),this.removeAttribute("tabindex")):this.dialog.focus()}else super.focus()}dismiss(){this.dismissable&&this.close()}clickSecondary(){this.dispatchEvent(new Event("secondary",{bubbles:!0}))}clickCancel(){this.dispatchEvent(new Event("cancel",{bubbles:!0}))}clickConfirm(){this.dispatchEvent(new Event("confirm",{bubbles:!0}))}close(){this.open=!1,this.dispatchEvent(new Event("close",{bubbles:!0}))}render(){return i`${this.underlay?i`<sp-underlay ?open="${this.open}" @click="${this.dismiss}"></sp-underlay>`:i``}<div class="modal ${this.mode}"><sp-dialog ?dismissable="${this.dismissable}" ?no-divider="${this.noDivider}" ?error="${this.error}" mode="${a(this.mode?this.mode:void 0)}" size="${a(this.size?this.size:void 0)}" @close="${this.close}">${this.hero?i`<img src="${this.hero}" slot="hero" aria-hidden="${a(this.heroLabel?void 0:"true")}" alt="${a(this.heroLabel?this.heroLabel:void 0)}">`:i``} ${this.headline?i`<h2 slot="heading">${this.headline}</h2>`:i``}<slot></slot>${this.footer?i`<div slot="footer">${this.footer}</div>`:i``} ${this.secondaryLabel?i`<sp-button variant="primary" slot="button" @click="${this.clickSecondary}">${this.secondaryLabel}</sp-button>`:i``} ${this.cancelLabel?i`<sp-button variant="secondary" slot="button" @click="${this.clickCancel}">${this.cancelLabel}</sp-button>`:i``} ${this.confirmLabel?i`<sp-button variant="cta" slot="button" @click="${this.clickConfirm}">${this.confirmLabel}</sp-button>`:i``}</sp-dialog></div>`}updated(e){e.has("open")&&this.open&&this.dialog.updateComplete.then((()=>{this.dialog.shouldManageTabOrderForScrolling()}))}}l([c({type:Boolean,reflect:!0})],Lt.prototype,"error",void 0),l([c({attribute:"cancel-label"})],Lt.prototype,"cancelLabel",void 0),l([c({attribute:"confirm-label"})],Lt.prototype,"confirmLabel",void 0),l([c({type:Boolean,reflect:!0})],Lt.prototype,"dismissable",void 0),l([c()],Lt.prototype,"footer",void 0),l([c()],Lt.prototype,"hero",void 0),l([c({attribute:"hero-label"})],Lt.prototype,"heroLabel",void 0),l([c({type:Boolean,reflect:!0,attribute:"no-divider"})],Lt.prototype,"noDivider",void 0),l([c({type:Boolean,reflect:!0})],Lt.prototype,"open",void 0),l([c({type:String,reflect:!0})],Lt.prototype,"mode",void 0),l([c({type:String,reflect:!0})],Lt.prototype,"size",void 0),l([c({attribute:"secondary-label"})],Lt.prototype,"secondaryLabel",void 0),l([c()],Lt.prototype,"headline",void 0),l([c({type:Boolean})],Lt.prototype,"responsive",void 0),l([c({type:Boolean})],Lt.prototype,"underlay",void 0),l([n("sp-dialog")],Lt.prototype,"dialog",void 0),h("sp-dialog-wrapper",Lt);var Ht=q`:host{--spectrum-dropzone-border-width:var(--spectrum-alias-border-size-thick);--spectrum-dropzone-border-radius:var(
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
)}`;class Mt extends g{constructor(){super(...arguments),this._dropEffect="copy",this.isDragged=!1,this.debouncedDragLeave=null}static get styles(){return[Ht]}get dropEffect(){return this._dropEffect}set dropEffect(e){["copy","move","link","none"].includes(e)&&(this._dropEffect=e)}connectedCallback(){super.connectedCallback(),this.addEventListener("drop",this.onDrop),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("drop",this.onDrop),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave)}onDragOver(e){const t=new CustomEvent("sp-dropzone-should-accept",{bubbles:!0,cancelable:!0,composed:!0,detail:e}),r=this.dispatchEvent(t);if(!e.dataTransfer)return;if(!r)return void(e.dataTransfer.dropEffect="none");e.preventDefault(),this.clearDebouncedDragLeave(),this.isDragged=!0,e.dataTransfer.dropEffect=this.dropEffect;const o=new CustomEvent("sp-dropzone-dragover",{bubbles:!0,composed:!0,detail:e});this.dispatchEvent(o)}onDragLeave(e){this.clearDebouncedDragLeave(),this.debouncedDragLeave=window.setTimeout((()=>{this.isDragged=!1;const t=new CustomEvent("sp-dropzone-dragleave",{bubbles:!0,composed:!0,detail:e});this.dispatchEvent(t)}),100)}onDrop(e){e.preventDefault(),this.clearDebouncedDragLeave(),this.isDragged=!1;const t=new CustomEvent("sp-dropzone-drop",{bubbles:!0,composed:!0,detail:e});this.dispatchEvent(t)}render(){return i`<slot></slot>`}clearDebouncedDragLeave(){this.debouncedDragLeave&&(clearTimeout(this.debouncedDragLeave),this.debouncedDragLeave=null)}}l([c({type:Boolean,reflect:!0,attribute:"dragged"})],Mt.prototype,"isDragged",void 0),h("sp-dropzone",Mt);var Vt=q`:host{--spectrum-fieldgroup-margin:var(
--spectrum-global-dimension-size-200
)}:host{display:flex;flex-wrap:wrap;vertical-align:top}:host([dir=ltr][horizontal]) .spectrum-FieldGroup-item:not(:last-child){margin-right:var(
--spectrum-fieldgroup-margin
)}:host([dir=rtl][horizontal]) .spectrum-FieldGroup-item:not(:last-child){margin-left:var(
--spectrum-fieldgroup-margin
)}:host([vertical]){display:inline-flex;flex-direction:column}:host([dir=rtl]:not([vertical])) ::slotted(:not(:last-child)),:host([horizontal][dir=rtl]) ::slotted(:not(:last-child)){margin:0 0 0 var(--spectrum-global-dimension-size-200)}:host([dir=ltr]:not([vertical])) ::slotted(:not(:last-child)),:host([horizontal][dir=ltr]) ::slotted(:not(:last-child)){margin:0 var(--spectrum-global-dimension-size-200) 0 0}`;class Bt extends g{constructor(){super(...arguments),this.horizontal=!1,this.vertical=!1}static get styles(){return[Vt]}render(){return i`<slot></slot>`}}l([c({type:Boolean,reflect:!0})],Bt.prototype,"horizontal",void 0),l([c({type:Boolean,reflect:!0})],Bt.prototype,"vertical",void 0),h("sp-field-group",Bt),h("sp-icon",ie);class $t extends d{constructor(){super(...arguments),this.registered=!1,this.handleRemoved=({detail:e})=>{e.name===this.name&&(this.registered=!1,this.addIconset())}}firstUpdated(){this.style.display="none"}set name(e){this.registered&&(this._name&&se.getInstance().removeIconset(this._name),e&&se.getInstance().addIconset(e,this)),this._name=e}get name(){return this._name}connectedCallback(){super.connectedCallback(),this.addIconset(),window.addEventListener("sp-iconset-removed",this.handleRemoved)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("sp-iconset-removed",this.handleRemoved),this.removeIconset()}addIconset(){this.name&&!this.registered&&(se.getInstance().addIconset(this.name,this),this.registered=!0)}removeIconset(){this.name&&(se.getInstance().removeIconset(this.name),this.registered=!1)}}l([c()],$t.prototype,"name",null);class At extends $t{constructor(){super(...arguments),this.iconMap=new Map}updated(e){if(!this.slotContainer)return;const t=this.getSVGNodes(this.slotContainer);this.updateSVG(t),super.updated(e)}async applyIconToElement(e,t,r,o){await this.updateComplete;const s=this.iconMap.get(t);if(!s)throw new Error(`Unable to find icon ${t}`);const i=this.prepareSvgClone(s);i.setAttribute("role","img"),o?i.setAttribute("aria-label",o):i.setAttribute("aria-hidden","true"),e.shadowRoot?e.shadowRoot.appendChild(i):e.appendChild(i)}getIconList(){return[...this.iconMap.keys()]}prepareSvgClone(e){const t=e.cloneNode(!0),r=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=t.getAttribute("viewBox")||"";for(r.style.cssText="pointer-events: none; display: block; width: 100%; height: 100%;",r.setAttribute("viewBox",o),r.setAttribute("preserveAspectRatio","xMidYMid meet"),r.setAttribute("focusable","false");t.childNodes.length>0;)r.appendChild(t.childNodes[0]);return r}getSVGIconName(e){return e}getSanitizedIconName(e){return e}renderDefaultContent(){return i``}render(){return i`<slot @slotchange="${this.onSlotChange}">${this.renderDefaultContent()}</slot>`}updateSVG(e){e.reduce(((e,t)=>{const r=t.querySelectorAll("symbol");return e.push(...r),e}),[]).forEach((e=>{this.iconMap.set(this.getSanitizedIconName(e.id),e)}))}getSVGNodes(e){return e.assignedNodes({flatten:!0}).filter((e=>"svg"===e.nodeName))}onSlotChange(e){const t=e.target,r=this.getSVGNodes(t);this.updateSVG(r)}}l([n("slot")],At.prototype,"slotContainer",void 0);var St=$`<svg xmlns="http://www.w3.org/2000/svg"><symbol id="spectrum-icon-Arrow100" viewBox="0 0 14 14"><path d="M12.93 6.227L9.023 2.32a1.094 1.094 0 10-1.546 1.547l2.039 2.04H1.844a1.094 1.094 0 100 2.187h7.672l-2.04 2.039a1.094 1.094 0 001.547 1.547l3.907-3.907a1.093 1.093 0 000-1.546z"/></symbol><symbol id="spectrum-icon-Arrow200" viewBox="0 0 16 16"><path d="M14.606 7.194l-4.458-4.459a1.14 1.14 0 10-1.612 1.612L11.05 6.86H2.108a1.14 1.14 0 000 2.28h8.942l-2.514 2.513a1.14 1.14 0 101.611 1.612l4.46-4.46a1.139 1.139 0 000-1.61z"/></symbol><symbol id="spectrum-icon-Arrow300" viewBox="0 0 16 16"><path d="M15.364 7.161l-5.083-5.083a1.186 1.186 0 00-1.678 1.678l3.057 3.058H1.277a1.187 1.187 0 100 2.373H11.66l-3.056 3.057a1.186 1.186 0 101.677 1.678l5.083-5.083a1.185 1.185 0 000-1.678z"/></symbol><symbol id="spectrum-icon-Arrow400" viewBox="0 0 18 18"><path d="M17.216 8.126l-5.79-5.79a1.236 1.236 0 00-1.746 1.75l3.683 3.683c-.008 0-.014-.004-.021-.004H1.337a1.236 1.236 0 000 2.472H13.34c.007 0 .013-.004.02-.004l-3.68 3.682a1.236 1.236 0 101.748 1.748l5.789-5.789a1.237 1.237 0 000-1.748zm-2.643.895c0-.008.004-.014.004-.021s-.004-.013-.004-.02l.02.02z"/></symbol><symbol id="spectrum-icon-Arrow500" viewBox="0 0 22 22"><path d="M20.17 10.089l-6.585-6.585a1.289 1.289 0 00-1.822 1.822l4.386 4.386H2.276a1.288 1.288 0 000 2.576h13.873l-4.386 4.386a1.289 1.289 0 001.822 1.822l6.585-6.585a1.289 1.289 0 000-1.822z"/></symbol><symbol id="spectrum-icon-Arrow600" viewBox="0 0 24 24"><path d="M22.24 11.052l-7.485-7.485a1.341 1.341 0 00-1.897 1.897l5.194 5.194H2.079a1.342 1.342 0 000 2.684h15.973l-5.194 5.194a1.341 1.341 0 101.897 1.897l7.484-7.485a1.34 1.34 0 000-1.896z"/></symbol><symbol id="spectrum-icon-Arrow75" viewBox="0 0 12 12"><path d="M11.325 5.258L7.91 1.84a1.05 1.05 0 00-1.486 1.484L8.048 4.95H1.494a1.05 1.05 0 000 2.1h6.554L6.423 8.675a1.05 1.05 0 001.486 1.484l3.416-3.417a1.05 1.05 0 000-1.484z"/></symbol><symbol id="spectrum-icon-Asterisk100" viewBox="0 0 10 10"><path d="M8.176 8.281c.069.07.115.163 0 .255l-1.437.927c-.115.07-.161.024-.208-.092l-1.783-3.1-2.339 2.571c-.024.045-.093.091-.161 0L1.136 7.678c-.116-.069-.093-.139 0-.208l2.639-2.2-3.01-1.134c-.046 0-.115-.092-.07-.209l.788-1.574a.123.123 0 01.151-.083.128.128 0 01.058.038l2.639 1.713L4.494.64a.122.122 0 01.1-.139.172.172 0 01.038 0l1.922.255c.116 0 .139.046.116.163l-.9 3.31 3.057-.927c.069-.046.139-.046.185.092l.3 1.713c.023.116 0 .162-.093.162l-3.2.255z"/></symbol><symbol id="spectrum-icon-Asterisk200" viewBox="0 0 12 12"><path d="M9.575 9.696c.077.079.129.183 0 .287L7.96 11.025c-.129.079-.182.027-.234-.1L5.72 7.433l-2.633 2.893c-.027.051-.1.1-.182 0l-1.251-1.3c-.131-.077-.1-.156 0-.234l2.97-2.476-3.388-1.285c-.052 0-.129-.1-.079-.235l.886-1.771a.138.138 0 01.17-.093.144.144 0 01.065.042l2.97 1.928.183-3.8a.137.137 0 01.114-.156.197.197 0 01.042 0l2.163.287c.131 0 .156.052.131.183L6.86 5.136l3.44-1.043c.077-.052.156-.052.208.1l.339 1.928c.025.13 0 .183-.1.183l-3.6.287z"/></symbol><symbol id="spectrum-icon-Asterisk300" viewBox="0 0 12 12"><path d="M10.024 10.155c.087.089.146.206 0 .323l-1.819 1.173c-.146.089-.2.03-.263-.117L5.685 7.605l-2.962 3.254c-.03.057-.117.116-.2 0L1.116 9.392c-.147-.087-.117-.176 0-.263l3.339-2.785L.642 4.908c-.059 0-.146-.117-.089-.264l1-1.993a.156.156 0 01.192-.1.163.163 0 01.073.048l3.337 2.163.206-4.28a.155.155 0 01.128-.176.23.23 0 01.047 0l2.433.323c.147 0 .176.059.147.206l-1.144 4.19 3.87-1.173c.087-.06.176-.06.234.117l.381 2.169c.028.147 0 .206-.117.206l-4.046.323z"/></symbol><symbol id="spectrum-icon-Asterisk75" viewBox="0 0 8 8"><path d="M6.825 6.903c.061.062.1.144 0 .227l-1.277.824c-.1.062-.143.02-.185-.082L3.78 5.112 1.7 7.398c-.021.04-.082.08-.143 0L.569 6.367c-.1-.061-.082-.123 0-.185l2.347-1.957-2.68-1.007c-.041 0-.1-.082-.062-.186l.7-1.4a.109.109 0 01.135-.073.114.114 0 01.051.033l2.347 1.523.145-3.006a.109.109 0 01.09-.123.14.14 0 01.033 0l1.709.227c.1 0 .123.04.1.144l-.8 2.943 2.718-.824c.061-.041.123-.041.165.082l.268 1.523c.02.1 0 .144-.082.144l-2.842.227z"/></symbol><symbol id="spectrum-icon-Checkmark100" viewBox="0 0 14 14"><path d="M5.125 12.625a1.25 1.25 0 01-.96-.45L1.04 8.425a1.25 1.25 0 011.92-1.6l2.136 2.563 5.922-7.536a1.25 1.25 0 111.964 1.545l-6.874 8.75a1.25 1.25 0 01-.965.478z"/></symbol><symbol id="spectrum-icon-Checkmark200" viewBox="0 0 14 14"><path d="M4.891 13.224a1.304 1.304 0 01-1.005-.474l-3.54-4.3a1.302 1.302 0 012.011-1.655l2.508 3.046 6.758-8.647a1.302 1.302 0 112.05 1.604l-7.756 9.926a1.301 1.301 0 01-1.01.5z"/></symbol><symbol id="spectrum-icon-Checkmark300" viewBox="0 0 16 16"><path d="M5.627 14.894a1.357 1.357 0 01-1.042-.488l-4.1-4.92A1.357 1.357 0 012.569 7.75l3.027 3.631L13.4 1.448a1.356 1.356 0 012.133 1.675l-8.84 11.252a1.356 1.356 0 01-1.048.519z"/></symbol><symbol id="spectrum-icon-Checkmark400" viewBox="0 0 18 18"><path d="M6.33 16.642a1.415 1.415 0 01-1.086-.509l-4.683-5.62a1.413 1.413 0 012.171-1.81l3.566 4.28 8.936-11.374a1.413 1.413 0 012.223 1.746L7.441 16.102a1.415 1.415 0 01-1.09.54z"/></symbol><symbol id="spectrum-icon-Checkmark50" viewBox="0 0 12 12"><path d="M4.519 10.608a1.151 1.151 0 01-.885-.414L1.27 7.358a1.152 1.152 0 011.77-1.476l1.453 1.743 4.45-5.665a1.152 1.152 0 011.813 1.424l-5.331 6.784a1.153 1.153 0 01-.89.44z"/></symbol><symbol id="spectrum-icon-Checkmark500" viewBox="0 0 20 20"><path d="M6.997 18.48a1.47 1.47 0 01-1.13-.53L.521 11.538a1.471 1.471 0 112.26-1.885l4.182 5.017L17.18 1.666a1.472 1.472 0 112.314 1.818L8.154 17.917a1.472 1.472 0 01-1.135.562z"/></symbol><symbol id="spectrum-icon-Checkmark600" viewBox="0 0 24 24"><path d="M8.621 21.417a1.535 1.535 0 01-1.178-.552l-6.091-7.31a1.533 1.533 0 112.355-1.962l4.879 5.854L20.249 2.602a1.533 1.533 0 112.41 1.895L9.826 20.831a1.53 1.53 0 01-1.182.585z"/></symbol><symbol id="spectrum-icon-Checkmark75" viewBox="0 0 12 12"><path d="M4.333 11.09a1.2 1.2 0 01-.922-.433L.69 7.392a1.2 1.2 0 111.844-1.536l1.772 2.126 5.14-6.542a1.2 1.2 0 111.886 1.482L5.277 10.63a1.2 1.2 0 01-.927.459z"/></symbol><symbol id="spectrum-icon-Chevron100" viewBox="0 0 14 14"><path d="M4.5 13.25a1.094 1.094 0 01-.773-1.868L8.109 7 3.727 2.618A1.094 1.094 0 015.273 1.07l5.157 5.156a1.094 1.094 0 010 1.546L5.273 12.93a1.091 1.091 0 01-.773.321z"/></symbol><symbol id="spectrum-icon-Chevron200" viewBox="0 0 16 16"><path d="M5.123 15.005a1.14 1.14 0 01-.806-1.945L9.377 8l-5.06-5.06a1.14 1.14 0 011.612-1.61l5.865 5.864a1.139 1.139 0 010 1.612L5.929 14.67a1.135 1.135 0 01-.806.334z"/></symbol><symbol id="spectrum-icon-Chevron300" viewBox="0 0 16 16"><path d="M4.696 15.853a1.187 1.187 0 01-.84-2.026L9.684 8 3.856 2.173A1.187 1.187 0 015.536.495L12.2 7.16a1.187 1.187 0 010 1.678l-6.666 6.666a1.183 1.183 0 01-.84.348z"/></symbol><symbol id="spectrum-icon-Chevron400" viewBox="0 0 18 18"><path d="M5.213 17.805a1.236 1.236 0 01-.874-2.11L11.034 9 4.34 2.305A1.236 1.236 0 016.087.557l7.57 7.569a1.235 1.235 0 010 1.748l-7.57 7.569a1.232 1.232 0 01-.874.362z"/></symbol><symbol id="spectrum-icon-Chevron500" viewBox="0 0 20 20"><path d="M5.667 19.876a1.288 1.288 0 01-.91-2.199L12.433 10 4.756 2.323A1.288 1.288 0 016.578.502l8.588 8.587a1.288 1.288 0 010 1.822l-8.588 8.588a1.284 1.284 0 01-.911.377z"/></symbol><symbol id="spectrum-icon-Chevron600" viewBox="0 0 24 24"><path d="M7.05 23.078a1.341 1.341 0 01-.948-2.29L14.89 12 6.102 3.212a1.341 1.341 0 011.896-1.898l9.737 9.737a1.34 1.34 0 010 1.898l-9.737 9.737a1.335 1.335 0 01-.948.392z"/></symbol><symbol id="spectrum-icon-Chevron75" viewBox="0 0 12 12"><path d="M3.833 11.578a1.05 1.05 0 01-.742-1.793L6.876 6 3.091 2.215A1.05 1.05 0 114.575.73l4.529 4.527a1.05 1.05 0 010 1.486L4.575 11.27a1.047 1.047 0 01-.742.308z"/></symbol><symbol id="spectrum-icon-CornerTriangle100" viewBox="0 0 7 7"><path d="M6.687.75a.311.311 0 00-.221.091L.842 6.466a.312.312 0 00.221.533h5.624a.312.312 0 00.312-.312V1.062A.312.312 0 006.687.75z"/></symbol><symbol id="spectrum-icon-CornerTriangle200" viewBox="0 0 8 8"><path d="M7.65.97a.35.35 0 00-.249.1L1.07 7.401a.352.352 0 00.249.6H7.65a.352.352 0 00.352-.352V1.322A.352.352 0 007.65.97z"/></symbol><symbol id="spectrum-icon-CornerTriangle300" viewBox="0 0 8 8"><path d="M7.605.09a.394.394 0 00-.28.116L.206 7.325A.4.4 0 00.49 8h7.115a.4.4 0 00.4-.4V.49a.4.4 0 00-.4-.4z"/></symbol><symbol id="spectrum-icon-CornerTriangle75" viewBox="0 0 6 6"><path d="M5.718.44a.277.277 0 00-.2.081l-5 5a.278.278 0 00.2.474h5a.278.278 0 00.278-.278v-5A.278.278 0 005.718.44z"/></symbol><symbol id="spectrum-icon-Cross100" viewBox="0 0 10 10"><path d="M6.548 5L9.63 1.917A1.094 1.094 0 008.084.371L5.001 3.454 1.917.37A1.094 1.094 0 00.371 1.917L3.454 5 .37 8.085A1.094 1.094 0 101.917 9.63l3.084-3.083L8.084 9.63a1.094 1.094 0 101.547-1.546z"/></symbol><symbol id="spectrum-icon-Cross200" viewBox="0 0 12 12"><path d="M7.611 6l3.654-3.653A1.14 1.14 0 009.653.735L6 4.39 2.347.735A1.14 1.14 0 00.735 2.347L4.39 6 .735 9.653a1.14 1.14 0 101.612 1.612L6 7.61l3.653 3.654a1.14 1.14 0 001.612-1.612z"/></symbol><symbol id="spectrum-icon-Cross300" viewBox="0 0 14 14"><path d="M8.678 7l4.245-4.244a1.186 1.186 0 00-1.678-1.678L7.001 5.323 2.755 1.077a1.187 1.187 0 00-1.678 1.678L5.322 7l-4.244 4.244a1.187 1.187 0 001.678 1.678l4.245-4.245 4.244 4.245a1.186 1.186 0 001.678-1.678z"/></symbol><symbol id="spectrum-icon-Cross400" viewBox="0 0 16 16"><path d="M9.748 8l4.915-4.915a1.236 1.236 0 00-1.748-1.748L8 6.252 3.085 1.337a1.236 1.236 0 00-1.748 1.748L6.252 8l-4.915 4.915a1.236 1.236 0 101.748 1.748L8 9.748l4.915 4.915a1.236 1.236 0 001.748-1.748z"/></symbol><symbol id="spectrum-icon-Cross500" viewBox="0 0 16 16"><path d="M9.823 8l5.674-5.674A1.289 1.289 0 1013.675.504L8 6.179 2.326.503A1.288 1.288 0 00.504 2.326l5.674 5.675-5.674 5.674a1.288 1.288 0 001.822 1.822L8 9.822l5.674 5.675a1.289 1.289 0 101.823-1.822z"/></symbol><symbol id="spectrum-icon-Cross600" viewBox="0 0 18 18"><path d="M10.897 9l6.537-6.536A1.341 1.341 0 1015.537.567L9 7.104 2.465.567A1.341 1.341 0 00.567 2.464L7.104 9 .567 15.537a1.341 1.341 0 101.897 1.897L9 10.897l6.536 6.537a1.341 1.341 0 101.897-1.897z"/></symbol><symbol id="spectrum-icon-Cross75" viewBox="0 0 10 10"><path d="M6.485 5l2.674-2.674A1.05 1.05 0 107.674.84L5 3.515 2.326.84A1.05 1.05 0 00.84 2.326L3.515 5 .84 7.674A1.05 1.05 0 002.326 9.16L5 6.485 7.674 9.16A1.05 1.05 0 109.16 7.674z"/></symbol><symbol id="spectrum-icon-Dash100" viewBox="0 0 12 12"><path d="M10.375 7.25h-8.75a1.25 1.25 0 010-2.5h8.75a1.25 1.25 0 010 2.5z"/></symbol><symbol id="spectrum-icon-Dash200" viewBox="0 0 14 14"><path d="M12.026 8.302H1.974a1.302 1.302 0 010-2.604h10.052a1.302 1.302 0 010 2.604z"/></symbol><symbol id="spectrum-icon-Dash300" viewBox="0 0 16 16"><path d="M13.763 9.356H2.237a1.356 1.356 0 010-2.712h11.526a1.356 1.356 0 010 2.712z"/></symbol><symbol id="spectrum-icon-Dash400" viewBox="0 0 18 18"><path d="M15.596 10.413H2.404a1.413 1.413 0 010-2.826h13.192a1.413 1.413 0 010 2.826z"/></symbol><symbol id="spectrum-icon-Dash50" viewBox="0 0 10 10"><path d="M8.293 6.152H1.708a1.152 1.152 0 010-2.304h6.585a1.152 1.152 0 110 2.304z"/></symbol><symbol id="spectrum-icon-Dash500" viewBox="0 0 20 20"><path d="M17.54 11.472H2.461a1.472 1.472 0 010-2.944h15.077a1.472 1.472 0 010 2.944z"/></symbol><symbol id="spectrum-icon-Dash600" viewBox="0 0 22 22"><path d="M19.604 12.533H2.398a1.533 1.533 0 110-3.066h17.206a1.533 1.533 0 010 3.066z"/></symbol><symbol id="spectrum-icon-Dash75" viewBox="0 0 10 10"><path d="M8.75 6.2h-7.5a1.2 1.2 0 010-2.4h7.5a1.2 1.2 0 110 2.4z"/></symbol><symbol id="spectrum-icon-DoubleGripper" viewBox="0 0 20 6"><path d="M19.375 1.75H.625a.625.625 0 010-1.25h18.75a.625.625 0 010 1.25zM20 4.875a.626.626 0 00-.625-.625H.625a.625.625 0 000 1.25h18.75A.626.626 0 0020 4.875z"/></symbol><symbol id="spectrum-icon-SingleGripper" viewBox="0 0 30 4"><path d="M28.75 3.25H1.25a1.25 1.25 0 010-2.5h27.5a1.25 1.25 0 010 2.5z"/></symbol><symbol id="spectrum-icon-TripleGripper" viewBox="0 0 14 10"><path d="M12.625 1.25H1.375a.625.625 0 010-1.25h11.25a.625.625 0 010 1.25zm.625 3.125a.626.626 0 00-.625-.625H1.375a.625.625 0 000 1.25h11.25a.626.626 0 00.625-.625zm0 3.75a.626.626 0 00-.625-.625H1.375a.625.625 0 000 1.25h11.25a.626.626 0 00.625-.625z"/></symbol></svg>`;h("sp-icons-large",class extends At{constructor(){super(),this.name="ui"}renderDefaultContent(){return St}getSVGIconName(e){return`spectrum-icon-${e}`}getSanitizedIconName(e){return e.replace("spectrum-icon-","")}});var qt=$`<svg xmlns="http://www.w3.org/2000/svg"><symbol id="spectrum-icon-Arrow100" viewBox="0 0 10 10"><path d="M9.7 4.387L6.623 1.262a.875.875 0 10-1.247 1.226l1.61 1.637H.925a.875.875 0 000 1.75h6.062l-1.61 1.637a.875.875 0 101.247 1.226l3.075-3.125a.874.874 0 000-1.226z"/></symbol><symbol id="spectrum-icon-Arrow200" viewBox="0 0 12 12"><path d="M11.284 5.356L7.718 1.788a.911.911 0 10-1.29 1.29l2.012 2.01H1.286a.911.911 0 100 1.823H8.44L6.429 8.923a.911.911 0 001.289 1.289l3.566-3.567a.912.912 0 000-1.29z"/></symbol><symbol id="spectrum-icon-Arrow300" viewBox="0 0 14 14"><path d="M12.893 6.33L8.826 2.261a.95.95 0 10-1.344 1.341L9.93 6.051H1.621a.95.95 0 100 1.898H9.93l-2.447 2.447a.95.95 0 001.344 1.342l4.067-4.067a.95.95 0 000-1.342z"/></symbol><symbol id="spectrum-icon-Arrow400" viewBox="0 0 16 16"><path d="M14.572 7.3l-4.63-4.63a.989.989 0 00-1.399 1.398l2.942 2.943H1.87a.99.99 0 000 1.978h9.615l-2.942 2.943a.989.989 0 101.398 1.398l4.631-4.63a.988.988 0 000-1.4z"/></symbol><symbol id="spectrum-icon-Arrow500" viewBox="0 0 18 18"><path d="M16.336 8.271l-5.269-5.267A1.03 1.03 0 109.61 4.46l3.51 3.509H2.021a1.03 1.03 0 000 2.06H13.12l-3.51 3.51a1.03 1.03 0 101.457 1.456l5.269-5.268a1.03 1.03 0 000-1.456z"/></symbol><symbol id="spectrum-icon-Arrow600" viewBox="0 0 20 20"><path d="M18.191 9.241l-5.986-5.987a1.073 1.073 0 00-1.518 1.517l4.155 4.156H2.063a1.073 1.073 0 100 2.146h12.779l-4.154 4.155a1.073 1.073 0 101.517 1.518l5.986-5.987a1.073 1.073 0 000-1.518z"/></symbol><symbol id="spectrum-icon-Arrow75" viewBox="0 0 10 10"><path d="M9.26 4.406L6.528 1.672A.84.84 0 005.34 2.859l1.3 1.301H1.396a.84.84 0 000 1.68H6.64l-1.301 1.3a.84.84 0 001.188 1.188l2.734-2.734a.84.84 0 000-1.188z"/></symbol><symbol id="spectrum-icon-Asterisk100" viewBox="0 0 8 8"><path d="M6.575 6.555c.055.056.092.13 0 .2l-1.149.741c-.092.056-.129.019-.166-.074L3.834 4.94 1.963 7c-.019.036-.074.073-.129 0l-.889-.927c-.093-.055-.074-.111 0-.166l2.111-1.76L.648 3.24c-.037 0-.092-.074-.056-.167l.63-1.259a.097.097 0 01.167-.036L3.5 3.148l.13-2.7a.1.1 0 01.081-.111.15.15 0 01.03 0l1.537.2c.093 0 .111.037.093.13l-.723 2.647 2.445-.741c.055-.037.111-.037.148.074l.241 1.37c.018.093 0 .13-.074.13l-2.556.2z"/></symbol><symbol id="spectrum-icon-Asterisk200" viewBox="0 0 10 10"><path d="M7.861 7.953c.062.063.1.146 0 .23l-1.293.834c-.1.063-.145.021-.187-.083l-1.6-2.793-2.105 2.314c-.021.04-.083.082-.145 0l-1-1.043c-.1-.062-.083-.125 0-.187l2.375-1.981-2.715-1.026c-.042 0-.1-.083-.063-.188l.707-1.412a.111.111 0 01.136-.074.116.116 0 01.052.034l2.378 1.54.146-3.043A.11.11 0 014.638.95a.161.161 0 01.034 0l1.73.23c.1 0 .125.042.1.146l-.814 2.979 2.751-.834c.062-.042.125-.042.167.083l.271 1.542c.02.1 0 .146-.083.146l-2.876.23z"/></symbol><symbol id="spectrum-icon-Asterisk300" viewBox="0 0 10 10"><path d="M8.266 8.324c.07.071.116.164 0 .258l-1.454.938c-.116.071-.163.024-.21-.094l-1.8-3.141-2.367 2.6c-.024.045-.094.092-.163 0l-1.13-1.167c-.118-.07-.094-.141 0-.21l2.671-2.227L.766 4.13c-.047 0-.116-.094-.071-.211l.8-1.593a.124.124 0 01.153-.084.13.13 0 01.058.038l2.669 1.738.164-3.422a.124.124 0 01.1-.14.186.186 0 01.038 0l1.945.258c.118 0 .14.047.118.164l-.915 3.349 3.094-.938c.07-.047.14-.047.187.094l.3 1.734c.023.118 0 .164-.094.164l-3.234.258z"/></symbol><symbol id="spectrum-icon-Asterisk75" viewBox="0 0 8 8"><path d="M6.26 6.463c.049.05.082.116 0 .181l-1.022.659c-.082.05-.115.017-.148-.066L3.822 5.03 2.16 6.859c-.017.032-.066.065-.115 0l-.79-.824c-.083-.049-.066-.1 0-.148l1.877-1.565L.99 3.516c-.033 0-.082-.066-.05-.148l.56-1.119a.087.087 0 01.108-.059.09.09 0 01.04.027l1.878 1.218.116-2.4a.087.087 0 01.072-.1h.027l1.367.181c.083 0 .1.033.083.116L4.55 3.581l2.174-.659c.049-.033.1-.033.132.066l.214 1.218c.016.083 0 .115-.066.115l-2.273.181z"/></symbol><symbol id="spectrum-icon-Checkmark100" viewBox="0 0 10 10"><path d="M3.5 9.5a.999.999 0 01-.774-.368l-2.45-3a1 1 0 111.548-1.264l1.657 2.028 4.68-6.01A1 1 0 019.74 2.114l-5.45 7a1 1 0 01-.777.386z"/></symbol><symbol id="spectrum-icon-Checkmark200" viewBox="0 0 12 12"><path d="M4.313 10.98a1.042 1.042 0 01-.8-.375L.647 7.165a1.042 1.042 0 011.6-1.333l2.042 2.45 5.443-6.928a1.042 1.042 0 011.64 1.287l-6.24 7.94a1.04 1.04 0 01-.804.399z"/></symbol><symbol id="spectrum-icon-Checkmark300" viewBox="0 0 14 14"><path d="M5.102 12.514a1.087 1.087 0 01-.834-.39L.988 8.19A1.085 1.085 0 012.656 6.8l2.421 2.906 6.243-7.947a1.085 1.085 0 011.707 1.34L5.955 12.1a1.089 1.089 0 01-.838.415z"/></symbol><symbol id="spectrum-icon-Checkmark400" viewBox="0 0 16 16"><path d="M5.864 14.114a1.13 1.13 0 01-.868-.407L1.25 9.21a1.13 1.13 0 111.736-1.448l2.854 3.425 7.148-9.1a1.13 1.13 0 111.778 1.397L6.753 13.682a1.13 1.13 0 01-.872.432z"/></symbol><symbol id="spectrum-icon-Checkmark50" viewBox="0 0 10 10"><path d="M3.815 8.687a.921.921 0 01-.708-.332l-1.891-2.27a.921.921 0 011.416-1.18L3.794 6.3l3.56-4.531a.921.921 0 111.45 1.138L4.54 8.335a.921.921 0 01-.712.351z"/></symbol><symbol id="spectrum-icon-Checkmark500" viewBox="0 0 16 16"><path d="M5.597 14.784a1.177 1.177 0 01-.905-.424L.417 9.229a1.177 1.177 0 111.809-1.508l3.343 4.013 8.174-10.402a1.177 1.177 0 011.852 1.456L6.523 14.334a1.178 1.178 0 01-.91.45z"/></symbol><symbol id="spectrum-icon-Checkmark600" viewBox="0 0 18 18"><path d="M6.297 16.534a1.228 1.228 0 01-.942-.442L.48 10.244a1.227 1.227 0 011.885-1.57l3.904 4.684L15.6 1.482a1.227 1.227 0 011.93 1.516L7.262 16.065a1.229 1.229 0 01-.947.469z"/></symbol><symbol id="spectrum-icon-Checkmark75" viewBox="0 0 10 10"><path d="M3.667 9.07a.96.96 0 01-.737-.344L.753 6.114a.96.96 0 111.474-1.23l1.418 1.701 4.112-5.233a.96.96 0 011.51 1.186L4.422 8.704a.962.962 0 01-.741.367z"/></symbol><symbol id="spectrum-icon-Chevron100" viewBox="0 0 10 10"><path d="M3 9.95a.875.875 0 01-.615-1.498L5.88 5 2.385 1.547A.875.875 0 013.615.302L7.74 4.377a.876.876 0 010 1.246L3.615 9.698A.872.872 0 013 9.95z"/></symbol><symbol id="spectrum-icon-Chevron200" viewBox="0 0 12 12"><path d="M9.034 5.356L4.343.663a.911.911 0 00-1.29 1.289L7.102 6l-4.047 4.047a.911.911 0 101.289 1.29l4.691-4.692a.912.912 0 000-1.29z"/></symbol><symbol id="spectrum-icon-Chevron300" viewBox="0 0 14 14"><path d="M10.639 7a.947.947 0 00-.278-.671l-.003-.002-5.33-5.33a.95.95 0 00-1.342 1.342L8.346 7l-4.661 4.66a.95.95 0 101.342 1.343l5.33-5.33.003-.001A.947.947 0 0010.64 7z"/></symbol><symbol id="spectrum-icon-Chevron400" viewBox="0 0 16 16"><path d="M4.97 15.044a.989.989 0 01-.698-1.688L9.627 8 4.27 2.644a.989.989 0 011.4-1.398L11.726 7.3a.988.988 0 010 1.398L5.67 14.754a.985.985 0 01-.7.29z"/></symbol><symbol id="spectrum-icon-Chevron500" viewBox="0 0 16 16"><path d="M12.133 7.271L5.263.401a1.03 1.03 0 00-1.457 1.457L9.947 8l-6.141 6.142a1.03 1.03 0 001.457 1.457l6.87-6.87a1.03 1.03 0 000-1.457z"/></symbol><symbol id="spectrum-icon-Chevron600" viewBox="0 0 18 18"><path d="M5.04 17.863a1.073 1.073 0 01-.759-1.832L11.313 9 4.28 1.969A1.073 1.073 0 015.8.45l7.79 7.79a1.073 1.073 0 010 1.518l-7.79 7.79a1.07 1.07 0 01-.759.314z"/></symbol><symbol id="spectrum-icon-Chevron75" viewBox="0 0 10 10"><path d="M7.482 4.406l-.001-.001L3.86.783a.84.84 0 00-1.188 1.188L5.702 5l-3.03 3.03A.84.84 0 003.86 9.216l3.621-3.622h.001a.84.84 0 000-1.19z"/></symbol><symbol id="spectrum-icon-CornerTriangle100" viewBox="0 0 5 5"><path d="M4.763 0a.248.248 0 00-.177.073l-4.5 4.5A.25.25 0 00.263 5h4.5a.25.25 0 00.25-.25V.25a.25.25 0 00-.25-.25z"/></symbol><symbol id="spectrum-icon-CornerTriangle200" viewBox="0 0 6 6"><path d="M5.719.37a.281.281 0 00-.2.082L.452 5.519a.281.281 0 00.2.481h5.067A.281.281 0 006 5.719V.652A.281.281 0 005.72.37z"/></symbol><symbol id="spectrum-icon-CornerTriangle300" viewBox="0 0 7 7"><path d="M6.683.67a.315.315 0 00-.223.093l-5.7 5.7a.316.316 0 00.224.54h5.7A.316.316 0 007 6.687V.986A.316.316 0 006.684.67z"/></symbol><symbol id="spectrum-icon-CornerTriangle75" viewBox="0 0 5 5"><path d="M4.78.558a.222.222 0 00-.157.065l-4 4a.222.222 0 00.157.379h4a.222.222 0 00.222-.222v-4A.222.222 0 004.78.558z"/></symbol><symbol id="spectrum-icon-Cross100" viewBox="0 0 8 8"><path d="M5.238 4l2.456-2.457A.875.875 0 106.456.306L4 2.763 1.543.306A.875.875 0 00.306 1.544L2.763 4 .306 6.457a.875.875 0 101.238 1.237L4 5.237l2.456 2.457a.875.875 0 101.238-1.237z"/></symbol><symbol id="spectrum-icon-Cross200" viewBox="0 0 10 10"><path d="M6.29 5l2.922-2.922a.911.911 0 00-1.29-1.29L5 3.712 2.078.789a.911.911 0 00-1.29 1.289L3.712 5 .79 7.922a.911.911 0 101.289 1.29L5 6.288 7.923 9.21a.911.911 0 001.289-1.289z"/></symbol><symbol id="spectrum-icon-Cross300" viewBox="0 0 12 12"><path d="M7.344 6l3.395-3.396a.95.95 0 00-1.344-1.342L6 4.657 2.604 1.262a.95.95 0 00-1.342 1.342L4.657 6 1.262 9.396a.95.95 0 001.343 1.343L6 7.344l3.395 3.395a.95.95 0 001.344-1.344z"/></symbol><symbol id="spectrum-icon-Cross400" viewBox="0 0 12 12"><path d="M7.398 6l3.932-3.932A.989.989 0 009.932.67L6 4.602 2.068.67A.989.989 0 00.67 2.068L4.602 6 .67 9.932a.989.989 0 101.398 1.398L6 7.398l3.932 3.932a.989.989 0 001.398-1.398z"/></symbol><symbol id="spectrum-icon-Cross500" viewBox="0 0 14 14"><path d="M8.457 7l4.54-4.54a1.03 1.03 0 00-1.458-1.456L7 5.543l-4.54-4.54a1.03 1.03 0 00-1.457 1.458L5.543 7l-4.54 4.54a1.03 1.03 0 101.457 1.456L7 8.457l4.54 4.54a1.03 1.03 0 001.456-1.458z"/></symbol><symbol id="spectrum-icon-Cross600" viewBox="0 0 16 16"><path d="M9.518 8l5.23-5.228a1.073 1.073 0 00-1.518-1.518L8.001 6.483l-5.229-5.23a1.073 1.073 0 00-1.518 1.519L6.483 8l-5.23 5.229a1.073 1.073 0 101.518 1.518l5.23-5.23 5.228 5.23a1.073 1.073 0 001.518-1.518z"/></symbol><symbol id="spectrum-icon-Cross75" viewBox="0 0 8 8"><path d="M5.188 4l2.14-2.14A.84.84 0 106.141.672L4 2.812 1.86.672A.84.84 0 00.672 1.86L2.812 4 .672 6.14A.84.84 0 101.86 7.328L4 5.188l2.14 2.14A.84.84 0 107.328 6.14z"/></symbol><symbol id="spectrum-icon-Dash100" viewBox="0 0 10 10"><path d="M8.5 6h-7a1 1 0 010-2h7a1 1 0 010 2z"/></symbol><symbol id="spectrum-icon-Dash200" viewBox="0 0 12 12"><path d="M10.021 7.042H1.98a1.042 1.042 0 110-2.083h8.043a1.042 1.042 0 010 2.083z"/></symbol><symbol id="spectrum-icon-Dash300" viewBox="0 0 12 12"><path d="M10.61 7.085H1.39a1.085 1.085 0 010-2.17h9.22a1.085 1.085 0 010 2.17z"/></symbol><symbol id="spectrum-icon-Dash400" viewBox="0 0 14 14"><path d="M12.277 8.13H1.723a1.13 1.13 0 110-2.26h10.554a1.13 1.13 0 110 2.26z"/></symbol><symbol id="spectrum-icon-Dash50" viewBox="0 0 8 8"><path d="M6.634 4.921H1.366a.921.921 0 010-1.842h5.268a.921.921 0 110 1.842z"/></symbol><symbol id="spectrum-icon-Dash500" viewBox="0 0 16 16"><path d="M14.03 9.178H1.969a1.178 1.178 0 110-2.356H14.03a1.178 1.178 0 010 2.356z"/></symbol><symbol id="spectrum-icon-Dash600" viewBox="0 0 18 18"><path d="M15.882 10.227H2.117a1.227 1.227 0 010-2.454h13.765a1.227 1.227 0 010 2.454z"/></symbol><symbol id="spectrum-icon-Dash75" viewBox="0 0 8 8"><path d="M6.99 4.96H1.01a.96.96 0 010-1.92h5.98a.96.96 0 010 1.92z"/></symbol><symbol id="spectrum-icon-DoubleGripper" viewBox="0 0 16 4"><path d="M15.45 1.05H.55a.5.5 0 010-1h14.9a.5.5 0 010 1zm.5 2.4a.5.5 0 00-.5-.5H.55a.5.5 0 000 1h14.9a.5.5 0 00.5-.5z"/></symbol><symbol id="spectrum-icon-SingleGripper" viewBox="0 0 24 2"><path d="M23 2H1a1 1 0 010-2h22a1 1 0 010 2z"/></symbol><symbol id="spectrum-icon-TripleGripper" viewBox="0 0 10 8"><path d="M9.45 1.05H.55a.5.5 0 010-1h8.9a.5.5 0 010 1zm.5 2.45a.5.5 0 00-.5-.5H.55a.5.5 0 000 1h8.9a.5.5 0 00.5-.5zm0 3a.5.5 0 00-.5-.5H.55a.5.5 0 000 1h8.9a.5.5 0 00.5-.5z"/></symbol></svg>`;h("sp-icons-medium",class extends At{constructor(){super(),this.name="ui"}renderDefaultContent(){return qt}getSVGIconName(e){return`spectrum-icon-${e}`}getSanitizedIconName(e){return e.replace("spectrum-icon-","")}});var Zt=$`<svg xmlns="http://www.w3.org/2000/svg"><symbol id="spectrum-icon-Add" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 12.75L3 12.75L3 11.25L11.25 11.25L11.25 3L12.75 3L12.75 11.25L21 11.25L21 12.75L12.75 12.75L12.75 21L11.25 21L11.25 12.75Z"/></symbol><symbol id="spectrum-icon-Alert" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.2613 1.25 12.5037 1.38597 12.64 1.60891L23.64 19.6089C23.7814 19.8404 23.7869 20.1302 23.6541 20.3669C23.5214 20.6035 23.2713 20.75 23 20.75H1C0.728705 20.75 0.478559 20.6035 0.345854 20.3669C0.213148 20.1302 0.218572 19.8404 0.360039 19.6089L11.36 1.60891C11.4963 1.38597 11.7387 1.25 12 1.25ZM21.6627 19.25L12 3.4383L2.33729 19.25H21.6627ZM11.25 13V7.5H12.75V13H11.25ZM12 17.5C12.6904 17.5 13.25 16.9404 13.25 16.25C13.25 15.5596 12.6904 15 12 15C11.3096 15 10.75 15.5596 10.75 16.25C10.75 16.9404 11.3096 17.5 12 17.5Z"/></symbol><symbol id="spectrum-icon-AlertFill" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.2613 1.25 12.5037 1.38597 12.64 1.60891L23.64 19.6089C23.7814 19.8404 23.7869 20.1302 23.6541 20.3669C23.5214 20.6035 23.2713 20.75 23 20.75H1C0.728705 20.75 0.478559 20.6035 0.345854 20.3669C0.213148 20.1302 0.218572 19.8404 0.360039 19.6089L11.36 1.60891C11.4963 1.38597 11.7387 1.25 12 1.25ZM11.25 13V7.5H12.75V13H11.25ZM12 17.5C12.6904 17.5 13.25 16.9404 13.25 16.25C13.25 15.5596 12.6904 15 12 15C11.3096 15 10.75 15.5596 10.75 16.25C10.75 16.9404 11.3096 17.5 12 17.5Z"/></symbol><symbol id="spectrum-icon-AlignArrangeHoriz" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 3V21H2.5V3H4ZM22 21V3H20.5V21H22ZM10.5 17V7H13.5V17H10.5Z"/></symbol><symbol id="spectrum-icon-AlignArrangeVert" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.25 3.75L3.25 3.75L3.25 2.25L21.25 2.25L21.25 3.75ZM3.25 21.75L21.25 21.75L21.25 20.25L3.25 20.25L3.25 21.75ZM7.25 10.25L17.25 10.25L17.25 13.25L7.25 13.25L7.25 10.25Z"/></symbol><symbol id="spectrum-icon-AlignHorizBottom" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 22L3 22L3 20.5L21 20.5L21 22ZM7 18.25L7 2.25L10 2.25L10 18.25L7 18.25ZM14 10.25L14 18.25L17 18.25L17 10.25L14 10.25Z"/></symbol><symbol id="spectrum-icon-AlignHorizMiddle" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 11.25L10 11.25L10 4L7 4L7 11.25L3 11.25L3 12.75L7 12.75L7 20L10 20L10 12.75L14 12.75L14 16L17 16L17 12.75L21 12.75L21 11.25L17 11.25L17 8L14 8L14 11.25Z"/></symbol><symbol id="spectrum-icon-AlignHorizTop" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 2.25L3 2.25L3 3.75L21 3.75L21 2.25ZM7 6L7 22L10 22L10 6L7 6ZM14 14L14 6L17 6L17 14L14 14Z"/></symbol><symbol id="spectrum-icon-AlignVertCenter" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 14V10H20V7H12.75V3H11.25V7H4V10H11.25V14H8V17H11.25V21H12.75V17H16V14H12.75Z"/></symbol><symbol id="spectrum-icon-AlignVertLeft" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 21V3H3.75V21H2.25ZM6 7H22V10H6V7ZM14 14H6V17H14V14Z"/></symbol><symbol id="spectrum-icon-AlignVertRight" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 21V3H20.5V21H22ZM18.25 7H2.25V10H18.25V7ZM10.25 14H18.25V17H10.25V14Z"/></symbol><symbol id="spectrum-icon-Animation" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 12C7.75 7.99594 10.9959 4.75 15 4.75C19.0041 4.75 22.25 7.99594 22.25 12C22.25 16.0041 19.0041 19.25 15 19.25C10.9959 19.25 7.75 16.0041 7.75 12ZM15 3.25C10.1675 3.25 6.25 7.16751 6.25 12C6.25 16.8325 10.1675 20.75 15 20.75C19.8325 20.75 23.75 16.8325 23.75 12C23.75 7.16751 19.8325 3.25 15 3.25ZM1.75 12C1.75 8.95855 3.62306 6.35279 6.28141 5.27672L5.71859 3.88631C2.51328 5.18378 0.25 8.32668 0.25 12C0.25 15.6733 2.51328 18.8162 5.71859 20.1137L6.28141 18.7233C3.62306 17.6472 1.75 15.0414 1.75 12Z"/></symbol><symbol id="spectrum-icon-ArrowDown" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5303 15.5303L17.5303 10.5303L16.4697 9.46967L12 13.9393L7.53033 9.46967L6.46968 10.5303L11.4697 15.5303C11.7626 15.8232 12.2374 15.8232 12.5303 15.5303Z"/></symbol><symbol id="spectrum-icon-ArrowLeft" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.96967 11.4697L13.9697 3.46967L15.0303 4.53033L7.56066 12L15.0303 19.4697L13.9697 20.5303L5.96967 12.5303C5.67678 12.2374 5.67678 11.7626 5.96967 11.4697Z"/></symbol><symbol id="spectrum-icon-ArrowRight" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0303 11.4697L10.0303 6.46967L8.96967 7.53033L13.4393 12L8.96967 16.4697L10.0303 17.5303L15.0303 12.5303C15.3232 12.2374 15.3232 11.7626 15.0303 11.4697Z"/></symbol><symbol id="spectrum-icon-Backspace" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 5.75C7.26005 5.75 7.03458 5.86481 6.89345 6.05887L2.89345 11.5589C2.70218 11.8219 2.70218 12.1781 2.89345 12.4411L6.89345 17.9411C7.03458 18.1352 7.26005 18.25 7.5 18.25H19C19.4142 18.25 19.75 17.9142 19.75 17.5V6.5C19.75 6.08579 19.4142 5.75 19 5.75H7.5ZM4.42737 12L7.88192 7.25H18.25V16.75H7.88192L4.42737 12ZM16.5303 9.53033L14.0607 12L16.5303 14.4697L15.4697 15.5303L13 13.0607L10.5303 15.5303L9.46967 14.4697L11.9393 12L9.46967 9.53033L10.5303 8.46967L13 10.9393L15.4697 8.46967L16.5303 9.53033Z"/></symbol><symbol id="spectrum-icon-Check" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.53033 18.5303L21.5303 6.53033L20.4697 5.46967L9 16.9393L3.53033 11.4697L2.46967 12.5303L8.46968 18.5303C8.61033 18.671 8.80109 18.75 9 18.75C9.19892 18.75 9.38968 18.671 9.53033 18.5303Z"/></symbol><symbol id="spectrum-icon-CheckFill" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.25C17.6609 22.25 22.25 17.6609 22.25 12C22.25 6.33908 17.6609 1.75 12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25ZM18.0428 9.01751L10.8928 16.5175C10.7464 16.6712 10.5417 16.7555 10.3295 16.7497C10.1173 16.7439 9.91747 16.6484 9.77963 16.487L5.92963 11.9781L7.07037 11.0041L10.3807 14.8809L16.9572 7.98249L18.0428 9.01751Z"/></symbol><symbol id="spectrum-icon-CloseFull" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 11.75L21 11.75V10.25L14.8107 10.25L21.5303 3.53033L20.4697 2.46967L13.75 9.18934V3L12.25 3V11C12.25 11.1989 12.329 11.3897 12.4697 11.5303C12.6103 11.671 12.8011 11.75 13 11.75ZM11 12.25L3 12.25V13.75L9.18933 13.75L2.46967 20.4697L3.53033 21.5303L10.25 14.8107L10.25 21H11.75V13C11.75 12.8011 11.671 12.6103 11.5303 12.4697C11.3897 12.329 11.1989 12.25 11 12.25Z"/></symbol><symbol id="spectrum-icon-CloudDone" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.75C7.65279 4.75 5.75 6.65279 5.75 9C5.75 9.07263 5.75181 9.14476 5.7554 9.21638L5.78335 9.77555L5.2552 9.96133C3.79496 10.475 2.75 11.8664 2.75 13.5C2.75 15.4015 4.16532 16.9725 6 17.217V18.7265C3.33503 18.4747 1.25 16.2309 1.25 13.5C1.25 11.4027 2.47946 9.59416 4.25521 8.75298C4.38459 5.69193 6.90712 3.25 10 3.25C12.2152 3.25 14.1364 4.50243 15.0967 6.33593C15.3895 6.2795 15.6916 6.25 16 6.25C18.5877 6.25 20.692 8.31918 20.7488 10.8932C21.9495 11.6434 22.75 12.9776 22.75 14.5C22.75 16.8472 20.8472 18.75 18.5 18.75H18V17.25H18.5C20.0188 17.25 21.25 16.0188 21.25 14.5C21.25 13.4 20.6041 12.4493 19.6676 12.0093L19.1966 11.788L19.239 11.2693C19.2463 11.1806 19.25 11.0908 19.25 11C19.25 9.20507 17.7949 7.75 16 7.75C15.6215 7.75 15.2597 7.81439 14.9238 7.9322L14.2341 8.17414L13.9745 7.49086C13.3653 5.88747 11.8145 4.75 10 4.75ZM17.5194 15.541L11.2694 21.541C10.9749 21.8238 10.5083 21.819 10.2197 21.5303L7.46967 18.7803L8.53033 17.7197L10.7607 19.9501L16.4806 14.459L17.5194 15.541Z"/></symbol><symbol id="spectrum-icon-CloudOff" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.75C7.65279 4.75 5.75 6.65279 5.75 9C5.75 9.07263 5.75181 9.14476 5.7554 9.21638L5.78335 9.77555L5.2552 9.96133C3.79496 10.475 2.75 11.8664 2.75 13.5C2.75 15.4015 4.16532 16.9725 6 17.217V18.7265C3.33503 18.4747 1.25 16.2309 1.25 13.5C1.25 11.4027 2.47946 9.59416 4.25521 8.75298C4.38459 5.69193 6.90712 3.25 10 3.25C12.2152 3.25 14.1364 4.50243 15.0967 6.33593C15.3895 6.2795 15.6916 6.25 16 6.25C18.5877 6.25 20.692 8.31918 20.7488 10.8932C21.9495 11.6434 22.75 12.9776 22.75 14.5C22.75 16.8472 20.8472 18.75 18.5 18.75H18V17.25H18.5C20.0188 17.25 21.25 16.0188 21.25 14.5C21.25 13.4 20.6041 12.4493 19.6676 12.0093L19.1966 11.788L19.239 11.2693C19.2463 11.1806 19.25 11.0908 19.25 11C19.25 9.20507 17.7949 7.75 16 7.75C15.6215 7.75 15.2597 7.81439 14.9238 7.9322L14.2341 8.17414L13.9745 7.49086C13.3653 5.88747 11.8145 4.75 10 4.75ZM8.46967 15.5303L10.9393 18L8.46967 20.4697L9.53033 21.5303L12 19.0607L14.4697 21.5303L15.5303 20.4697L13.0607 18L15.5303 15.5303L14.4697 14.4697L12 16.9393L9.53033 14.4697L8.46967 15.5303Z"/></symbol><symbol id="spectrum-icon-Colorpicker" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9859 3.73746C17.2551 2.46825 19.3129 2.46825 20.5821 3.73746C21.8513 5.00666 21.8513 7.06445 20.5821 8.33365L16.3802 12.5356L18.0303 14.1857L16.9697 15.2464L15.3195 13.5962L7.33367 21.5821C7.16869 21.747 6.93634 21.8258 6.70504 21.7953L6.69776 21.7943L6.67343 21.7912C6.65175 21.7884 6.61938 21.7844 6.57775 21.7793C6.49445 21.7692 6.3743 21.755 6.22857 21.7393C5.93621 21.7078 5.54507 21.6703 5.14405 21.6454C4.73841 21.6202 4.3433 21.6093 4.03586 21.6263C3.88059 21.6349 3.7711 21.6494 3.70372 21.6647L3.69856 21.6658C3.40593 21.8716 2.9991 21.8437 2.73748 21.5821C2.47585 21.3204 2.44792 20.9136 2.65369 20.621L2.65488 20.6158C2.67011 20.5484 2.68466 20.4389 2.69323 20.2837C2.7102 19.9762 2.69934 19.5811 2.67417 19.1755C2.64928 18.7745 2.61177 18.3833 2.58023 18.091C2.56451 17.9452 2.55038 17.8251 2.54024 17.7418C2.53518 17.7002 2.53111 17.6678 2.52835 17.6461L2.52523 17.6218L2.5243 17.6147M2.64227 20.6602C2.64227 20.6602 2.64336 20.6559 2.64635 20.6489C2.64391 20.6569 2.64227 20.6602 2.64227 20.6602ZM4.19986 20.1197C4.2062 19.7864 4.19241 19.4229 4.17129 19.0826C4.14453 18.6514 4.10459 18.2361 4.07158 17.9301C4.06617 17.88 4.06094 17.8327 4.05597 17.7887L11.784 10.0607L14.2589 12.5356L6.53085 20.2636C6.4868 20.2586 6.43953 20.2534 6.38945 20.248C6.08344 20.215 5.66817 20.175 5.23694 20.1482C4.89659 20.1271 4.53311 20.1133 4.19986 20.1197ZM11.8446 8L10.0303 6.18571L8.96967 7.24637L10.8033 9.08003M3.67064 21.6732C3.66363 21.6762 3.65935 21.6773 3.65935 21.6773C3.65935 21.6773 3.66258 21.6756 3.67064 21.6732Z"/></symbol><symbol id="spectrum-icon-Command" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 8C5.25 6.48122 6.48122 5.25 8 5.25C9.51878 5.25 10.75 6.48122 10.75 8V9.25H13.25V8C13.25 6.48122 14.4812 5.25 16 5.25C17.5188 5.25 18.75 6.48122 18.75 8C18.75 9.51878 17.5188 10.75 16 10.75H14.75V13.25H16C17.5188 13.25 18.75 14.4812 18.75 16C18.75 17.5188 17.5188 18.75 16 18.75C14.4812 18.75 13.25 17.5188 13.25 16V14.75H10.75V16C10.75 17.5188 9.51878 18.75 8 18.75C6.48122 18.75 5.25 17.5188 5.25 16C5.25 14.4812 6.48122 13.25 8 13.25H9.25V10.75H8C6.48122 10.75 5.25 9.51878 5.25 8ZM9.25 9.25V8C9.25 7.30964 8.69036 6.75 8 6.75C7.30964 6.75 6.75 7.30964 6.75 8C6.75 8.69036 7.30964 9.25 8 9.25H9.25ZM10.75 10.75V13.25H13.25V10.75H10.75ZM9.25 14.75H8C7.30964 14.75 6.75 15.3096 6.75 16C6.75 16.6904 7.30964 17.25 8 17.25C8.69036 17.25 9.25 16.6904 9.25 16V14.75ZM14.75 14.75V16C14.75 16.6904 15.3096 17.25 16 17.25C16.6904 17.25 17.25 16.6904 17.25 16C17.25 15.3096 16.6904 14.75 16 14.75H14.75ZM14.75 9.25H16C16.6904 9.25 17.25 8.69036 17.25 8C17.25 7.30964 16.6904 6.75 16 6.75C15.3096 6.75 14.75 7.30964 14.75 8V9.25Z"/></symbol><symbol id="spectrum-icon-Contacts" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 7C2.25 4.92893 3.92893 3.25 6 3.25H18C20.0711 3.25 21.75 4.92893 21.75 7V10C21.75 12.0711 20.0711 13.75 18 13.75H6C3.92893 13.75 2.25 12.0711 2.25 10V7ZM6 4.75C4.75736 4.75 3.75 5.75736 3.75 7V10C3.75 11.2426 4.75736 12.25 6 12.25H18C19.2426 12.25 20.25 11.2426 20.25 10V7C20.25 5.75736 19.2426 4.75 18 4.75H6ZM2.25 20C2.25 19.5858 2.58579 19.25 3 19.25H21C21.4142 19.25 21.75 19.5858 21.75 20C21.75 20.4142 21.4142 20.75 21 20.75H3C2.58579 20.75 2.25 20.4142 2.25 20ZM3 16.25C2.58579 16.25 2.25 16.5858 2.25 17C2.25 17.4142 2.58579 17.75 3 17.75H21C21.4142 17.75 21.75 17.4142 21.75 17C21.75 16.5858 21.4142 16.25 21 16.25H3Z"/></symbol><symbol id="spectrum-icon-Container" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 17.75V22H7.75V17.75L16.25 17.75V22H17.75V17.75H22V16.25H17.75V7.75H22V6.25H17.75V2H16.25V6.25L7.75 6.25V2H6.25V6.25H2V7.75H6.25V16.25H2V17.75H6.25ZM7.75 16.25L16.25 16.25V7.75L7.75 7.75V16.25Z"/></symbol><symbol id="spectrum-icon-Corner" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2.25C3.92893 2.25 2.25 3.92893 2.25 6V9H3.75V6C3.75 4.75736 4.75736 3.75 6 3.75H9V2.25H6ZM18 21.75C20.0711 21.75 21.75 20.0711 21.75 18V15H20.25V18C20.25 19.2426 19.2426 20.25 18 20.25H15V21.75H18ZM2.25 18C2.25 20.0711 3.92893 21.75 6 21.75H9V20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V15H2.25V18ZM18 2.25C20.0711 2.25 21.75 3.92893 21.75 6V9H20.25V6C20.25 4.75736 19.2426 3.75 18 3.75H15V2.25H18Z"/></symbol><symbol id="spectrum-icon-CornerRadiusBottomLeft" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.4399 20.2072C18.2983 20.2352 18.1512 20.25 18 20.25H17.25V21.75H18C18.2495 21.75 18.494 21.7255 18.731 21.6786L18.4399 20.2072ZM15.75 20.25H14.25V21.75H15.75V20.25ZM12.75 20.25H12H11.25H9.75H9C8.94329 20.25 8.88681 20.2491 8.83057 20.2473C6.06729 20.1597 3.84282 17.9367 3.75282 15.1741C3.75095 15.1163 3.75 15.0583 3.75 15V14.25V12.75V12V11.25H2.25V12V12.75V14.25V15C2.25 15.1053 2.25241 15.21 2.2572 15.3142C2.4213 18.8962 5.37738 21.75 9 21.75H9.75H11.25H12H12.75V20.25ZM19.8715 19.2496C19.707 19.4953 19.4953 19.707 19.2496 19.8715L20.0841 21.1179C20.4927 20.8444 20.8444 20.4927 21.1179 20.0841L19.8715 19.2496ZM20.25 18C20.25 18.1512 20.2352 18.2983 20.2072 18.4399L21.6786 18.731C21.7255 18.494 21.75 18.2495 21.75 18V17.25H20.25V18ZM20.25 14.25V15.75H21.75V14.25H20.25ZM20.25 11.25V12.75H21.75V11.25H20.25ZM20.25 8.25V9.75H21.75V8.25H20.25ZM3.75 9.75V8.25H2.25V9.75H3.75ZM20.25 6V6.75H21.75V6C21.75 5.75051 21.7255 5.506 21.6786 5.26896L20.2072 5.56007C20.2352 5.70175 20.25 5.84877 20.25 6ZM3.75 6.75V6C3.75 5.84877 3.76481 5.70175 3.79284 5.56007L2.32136 5.26896C2.27447 5.506 2.25 5.75051 2.25 6V6.75H3.75ZM19.2496 4.12853C19.4953 4.29301 19.707 4.5047 19.8715 4.75039L21.1179 3.91591C20.8444 3.50729 20.4927 3.15564 20.0841 2.88208L19.2496 4.12853ZM4.12853 4.75039C4.29301 4.5047 4.5047 4.29301 4.75039 4.12853L3.91591 2.88208C3.50729 3.15564 3.15564 3.50729 2.88208 3.91591L4.12853 4.75039ZM18 3.75C18.1512 3.75 18.2983 3.76481 18.4399 3.79284L18.731 2.32136C18.494 2.27447 18.2495 2.25 18 2.25H17.25V3.75H18ZM5.56007 3.79284C5.70175 3.76481 5.84877 3.75 6 3.75H6.75V2.25H6C5.75051 2.25 5.506 2.27447 5.26896 2.32136L5.56007 3.79284ZM14.25 3.75H15.75V2.25H14.25V3.75ZM11.25 2.25V3.75H12.75V2.25H11.25ZM9.75 3.75V2.25H8.25V3.75H9.75Z"/></symbol><symbol id="spectrum-icon-CornerRadiusBottomRight" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.56007 20.2072C5.70175 20.2352 5.84877 20.25 6 20.25H6.75V21.75H6C5.75051 21.75 5.506 21.7255 5.26896 21.6786L5.56007 20.2072ZM8.25 20.25H9.75V21.75H8.25V20.25ZM11.25 20.25H12H12.75H14.25H15C15.0567 20.25 15.1132 20.2491 15.1694 20.2473C17.9327 20.1597 20.1572 17.9367 20.2472 15.1741C20.2491 15.1163 20.25 15.0583 20.25 15V14.25V12.75V12V11.25H21.75V12V12.75V14.25V15C21.75 15.1053 21.7476 15.21 21.7428 15.3142C21.5787 18.8962 18.6226 21.75 15 21.75H14.25H12.75H12H11.25V20.25ZM4.12853 19.2496C4.29302 19.4953 4.5047 19.707 4.75039 19.8715L3.91591 21.1179C3.50729 20.8444 3.15564 20.4927 2.88208 20.0841L4.12853 19.2496ZM3.75 18C3.75 18.1512 3.76481 18.2983 3.79284 18.4399L2.32136 18.731C2.27447 18.494 2.25 18.2495 2.25 18V17.25H3.75V18ZM3.75 14.25V15.75H2.25V14.25H3.75ZM3.75 11.25V12.75H2.25V11.25H3.75ZM3.75 8.25V9.75H2.25V8.25H3.75ZM20.25 9.75V8.25H21.75V9.75H20.25ZM3.75 6V6.75H2.25V6C2.25 5.75051 2.27447 5.506 2.32136 5.26896L3.79284 5.56007C3.76481 5.70175 3.75 5.84877 3.75 6ZM20.25 6.75V6C20.25 5.84877 20.2352 5.70175 20.2072 5.56007L21.6786 5.26896C21.7255 5.506 21.75 5.75051 21.75 6V6.75H20.25ZM4.75039 4.12853C4.5047 4.29301 4.29302 4.5047 4.12853 4.75039L2.88208 3.91591C3.15564 3.50729 3.50729 3.15564 3.91591 2.88208L4.75039 4.12853ZM19.8715 4.75039C19.707 4.5047 19.4953 4.29301 19.2496 4.12853L20.0841 2.88208C20.4927 3.15564 20.8444 3.50729 21.1179 3.91591L19.8715 4.75039ZM6 3.75C5.84877 3.75 5.70175 3.76481 5.56007 3.79284L5.26896 2.32136C5.506 2.27447 5.75052 2.25 6 2.25H6.75V3.75H6ZM18.4399 3.79284C18.2983 3.76481 18.1512 3.75 18 3.75H17.25V2.25H18C18.2495 2.25 18.494 2.27447 18.731 2.32136L18.4399 3.79284ZM9.75 3.75H8.25V2.25H9.75V3.75ZM12.75 2.25V3.75H11.25V2.25H12.75ZM14.25 3.75V2.25H15.75V3.75H14.25Z"/></symbol><symbol id="spectrum-icon-CornerRadiusTopLeft" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.4399 3.79284C18.2983 3.76481 18.1512 3.75 18 3.75H17.25V2.25H18C18.2495 2.25 18.494 2.27447 18.731 2.32136L18.4399 3.79284ZM15.75 3.75H14.25V2.25H15.75V3.75ZM12.75 3.75H12H11.25H9.75H9C8.94329 3.75 8.88681 3.7509 8.83057 3.75267C6.06729 3.84028 3.84282 6.06326 3.75282 8.82594C3.75095 8.8837 3.75 8.94173 3.75 9V9.75V11.25V12V12.75H2.25V12V11.25V9.75V9C2.25 8.89474 2.25241 8.79001 2.2572 8.68584C2.4213 5.10376 5.37738 2.25 9 2.25H9.75H11.25H12H12.75V3.75ZM19.8715 4.75039C19.707 4.5047 19.4953 4.29302 19.2496 4.12853L20.0841 2.88208C20.4927 3.15564 20.8444 3.50729 21.1179 3.91591L19.8715 4.75039ZM20.25 6C20.25 5.84877 20.2352 5.70175 20.2072 5.56007L21.6786 5.26896C21.7255 5.506 21.75 5.75052 21.75 6V6.75H20.25V6ZM20.25 9.75V8.25H21.75V9.75H20.25ZM20.25 12.75V11.25H21.75V12.75H20.25ZM20.25 15.75V14.25H21.75V15.75H20.25ZM3.75 14.25V15.75H2.25V14.25H3.75ZM20.25 18V17.25H21.75V18C21.75 18.2495 21.7255 18.494 21.6786 18.731L20.2072 18.4399C20.2352 18.2983 20.25 18.1512 20.25 18ZM3.75 17.25V18C3.75 18.1512 3.76481 18.2983 3.79284 18.4399L2.32136 18.731C2.27447 18.494 2.25 18.2495 2.25 18V17.25H3.75ZM19.2496 19.8715C19.4953 19.707 19.707 19.4953 19.8715 19.2496L21.1179 20.0841C20.8444 20.4927 20.4927 20.8444 20.0841 21.1179L19.2496 19.8715ZM4.12853 19.2496C4.29301 19.4953 4.5047 19.707 4.75039 19.8715L3.91591 21.1179C3.50729 20.8444 3.15564 20.4927 2.88208 20.0841L4.12853 19.2496ZM18 20.25C18.1512 20.25 18.2983 20.2352 18.4399 20.2072L18.731 21.6786C18.494 21.7255 18.2495 21.75 18 21.75H17.25V20.25H18ZM5.56007 20.2072C5.70175 20.2352 5.84877 20.25 6 20.25H6.75V21.75H6C5.75051 21.75 5.506 21.7255 5.26896 21.6786L5.56007 20.2072ZM14.25 20.25H15.75V21.75H14.25V20.25ZM11.25 21.75V20.25H12.75V21.75H11.25ZM9.75 20.25V21.75H8.25V20.25H9.75Z"/></symbol><symbol id="spectrum-icon-CornerRadiusTopRight" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.56007 3.79284C5.70175 3.76481 5.84877 3.75 6 3.75H6.75V2.25H6C5.75051 2.25 5.506 2.27447 5.26896 2.32136L5.56007 3.79284ZM8.25 3.75H9.75V2.25H8.25V3.75ZM11.25 3.75H12H12.75H14.25H15C15.0567 3.75 15.1132 3.7509 15.1694 3.75267C17.9327 3.84028 20.1572 6.06326 20.2472 8.82594C20.2491 8.8837 20.25 8.94173 20.25 9V9.75V11.25V12V12.75H21.75V12V11.25V9.75V9C21.75 8.89474 21.7476 8.79001 21.7428 8.68584C21.5787 5.10376 18.6226 2.25 15 2.25H14.25H12.75H12H11.25V3.75ZM4.12853 4.75039C4.29302 4.5047 4.5047 4.29302 4.75039 4.12853L3.91591 2.88208C3.50729 3.15564 3.15564 3.50729 2.88208 3.91591L4.12853 4.75039ZM3.75 6C3.75 5.84877 3.76481 5.70175 3.79284 5.56007L2.32136 5.26896C2.27447 5.506 2.25 5.75052 2.25 6V6.75H3.75V6ZM3.75 9.75V8.25H2.25V9.75H3.75ZM3.75 12.75V11.25H2.25V12.75H3.75ZM3.75 15.75V14.25H2.25V15.75H3.75ZM20.25 14.25V15.75H21.75V14.25H20.25ZM3.75 18V17.25H2.25V18C2.25 18.2495 2.27447 18.494 2.32136 18.731L3.79284 18.4399C3.76481 18.2983 3.75 18.1512 3.75 18ZM20.25 17.25V18C20.25 18.1512 20.2352 18.2983 20.2072 18.4399L21.6786 18.731C21.7255 18.494 21.75 18.2495 21.75 18V17.25H20.25ZM4.75039 19.8715C4.5047 19.707 4.29302 19.4953 4.12853 19.2496L2.88208 20.0841C3.15564 20.4927 3.50729 20.8444 3.91591 21.1179L4.75039 19.8715ZM19.8715 19.2496C19.707 19.4953 19.4953 19.707 19.2496 19.8715L20.0841 21.1179C20.4927 20.8444 20.8444 20.4927 21.1179 20.0841L19.8715 19.2496ZM6 20.25C5.84877 20.25 5.70175 20.2352 5.56007 20.2072L5.26896 21.6786C5.506 21.7255 5.75052 21.75 6 21.75H6.75V20.25H6ZM18.4399 20.2072C18.2983 20.2352 18.1512 20.25 18 20.25H17.25V21.75H18C18.2495 21.75 18.494 21.7255 18.731 21.6786L18.4399 20.2072ZM9.75 20.25H8.25V21.75H9.75V20.25ZM12.75 21.75V20.25H11.25V21.75H12.75ZM14.25 20.25V21.75H15.75V20.25H14.25Z"/></symbol><symbol id="spectrum-icon-Crop" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 5.75V16C4.25 18.0711 5.92893 19.75 8 19.75H18.25V22H19.75V19.75H22V18.25H19.75V8C19.75 5.92893 18.0711 4.25 16 4.25H5.75V2H4.25V4.25H2V5.75H4.25ZM5.75 5.75V16C5.75 17.2426 6.75736 18.25 8 18.25H18.25V8C18.25 6.75736 17.2426 5.75 16 5.75H5.75Z"/></symbol><symbol id="spectrum-icon-DataBarchart" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0303 13.0303L21.5303 5.53034L20.4697 4.46968L13.5 11.4393L10.0303 7.96967C9.88967 7.82902 9.69891 7.75 9.49999 7.75C9.30108 7.75 9.11032 7.82902 8.96966 7.96967L2.46967 14.4697L3.53033 15.5303L9.5 9.56066L12.9697 13.0303C13.2626 13.3232 13.7374 13.3232 14.0303 13.0303ZM20 20.25H4V21.75H20V20.25Z"/></symbol><symbol id="spectrum-icon-Desktop" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 2.25C2.92893 2.25 1.25 3.92893 1.25 6V15C1.25 17.0711 2.92893 18.75 5 18.75H19C21.0711 18.75 22.75 17.0711 22.75 15V6C22.75 3.92893 21.0711 2.25 19 2.25H5ZM2.75 6C2.75 4.75736 3.75736 3.75 5 3.75H19C20.2426 3.75 21.25 4.75736 21.25 6V15C21.25 16.2426 20.2426 17.25 19 17.25H5C3.75736 17.25 2.75 16.2426 2.75 15V6ZM8 21.75H16V20.25H8V21.75Z"/></symbol><symbol id="spectrum-icon-DirectionDown" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.53 15.5303L12.53 21.5303C12.2371 21.8232 11.7622 21.8232 11.4693 21.5303L5.46934 15.5303L6.53 14.4697L11.2497 19.1893L11.2497 3L12.7497 3L12.7497 19.1893L17.4693 14.4697L18.53 15.5303Z"/></symbol><symbol id="spectrum-icon-DirectionLeft" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.21967 5.46967L3.21967 11.4697C2.92678 11.7626 2.92678 12.2374 3.21967 12.5303L9.21967 18.5303L10.2803 17.4697L5.56066 12.75H21.75V11.25H5.56066L10.2803 6.53033L9.21967 5.46967Z"/></symbol><symbol id="spectrum-icon-DirectionRight" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 5.46967L21.5303 11.4697C21.8232 11.7626 21.8232 12.2374 21.5303 12.5303L15.5303 18.5303L14.4697 17.4697L19.1893 12.75H3V11.25H19.1893L14.4697 6.53033L15.5303 5.46967Z"/></symbol><symbol id="spectrum-icon-DirectionUp" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.53 8.46967L12.53 2.46967C12.2371 2.17678 11.7622 2.17678 11.4693 2.46967L5.46934 8.46967L6.53 9.53033L11.2497 4.81066L11.2497 21L12.7497 21L12.7497 4.81066L17.4693 9.53033L18.53 8.46967Z"/></symbol><symbol id="spectrum-icon-DragHandle" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 7C13.5 7.82843 14.1716 8.5 15 8.5C15.8284 8.5 16.5 7.82843 16.5 7C16.5 6.17157 15.8284 5.5 15 5.5C14.1716 5.5 13.5 6.17157 13.5 7ZM9 18.5C8.17157 18.5 7.5 17.8284 7.5 17C7.5 16.1716 8.17157 15.5 9 15.5C9.82843 15.5 10.5 16.1716 10.5 17C10.5 17.8284 9.82843 18.5 9 18.5ZM7.5 7C7.5 7.82843 8.17157 8.5 9 8.5C9.82843 8.5 10.5 7.82843 10.5 7C10.5 6.17157 9.82843 5.5 9 5.5C8.17157 5.5 7.5 6.17157 7.5 7ZM7.5 12C7.5 12.8284 8.17157 13.5 9 13.5C9.82843 13.5 10.5 12.8284 10.5 12C10.5 11.1716 9.82843 10.5 9 10.5C8.17157 10.5 7.5 11.1716 7.5 12ZM15 13.5C14.1716 13.5 13.5 12.8284 13.5 12C13.5 11.1716 14.1716 10.5 15 10.5C15.8284 10.5 16.5 11.1716 16.5 12C16.5 12.8284 15.8284 13.5 15 13.5ZM13.5 17C13.5 17.8284 14.1716 18.5 15 18.5C15.8284 18.5 16.5 17.8284 16.5 17C16.5 16.1716 15.8284 15.5 15 15.5C14.1716 15.5 13.5 16.1716 13.5 17Z"/></symbol><symbol id="spectrum-icon-Eye" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.5095 13.342C18.1794 4.68172 5.82064 4.68172 1.49048 13.342L1.32918 13.6646L2.67082 14.3355L2.83212 14.0129C6.60949 6.45811 17.3905 6.45811 21.1679 14.0129L21.3292 14.3355L22.6708 13.6646L22.5095 13.342ZM12 18C13.6569 18 15 16.6569 15 15C15 13.3432 13.6569 12 12 12C10.3431 12 9 13.3432 9 15C9 16.6569 10.3431 18 12 18Z"/></symbol><symbol id="spectrum-icon-EyeDisplay" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.8571 15.9177L20.4697 21.5303L21.5303 20.4697L3.53033 2.46967L2.46967 3.53033L6.91896 7.97962C4.69302 9.03277 2.75137 10.8202 1.49048 13.342L1.32918 13.6646L2.67082 14.3355L2.83212 14.0129C4.02371 11.6297 5.91224 9.99828 8.05802 9.11867L11.0823 12.143C9.87434 12.5307 9 13.6633 9 15C9 16.6569 10.3431 18 12 18C13.3368 18 14.4694 17.1257 14.8571 15.9177ZM10.1503 6.98965L11.5185 8.35782C15.3151 8.18384 19.1959 10.0689 21.1679 14.0129L21.3292 14.3355L22.6708 13.6646L22.5095 13.342C20.0234 8.36971 14.8906 6.25225 10.1503 6.98965Z"/></symbol><symbol id="spectrum-icon-EyeOff" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.67082 9.6646L2.83212 9.98719C6.60949 17.5419 17.3905 17.5419 21.1679 9.98719L21.3292 9.6646L22.6708 10.3354L22.5095 10.658C18.1794 19.3183 5.82064 19.3183 1.49048 10.658L1.32918 10.3354L2.67082 9.6646Z"/></symbol><symbol id="spectrum-icon-FileFolder" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 3.75C4.75736 3.75 3.75 4.75736 3.75 6V18C3.75 19.2426 4.75736 20.25 6 20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V10C20.25 8.75736 19.2426 7.75 18 7.75H15.618C14.9552 7.75 14.3492 7.3755 14.0528 6.78262L12.6056 3.8882C12.5632 3.8035 12.4767 3.75 12.382 3.75H6ZM2.25 6C2.25 3.92893 3.92893 2.25 6 2.25H12.382C13.0448 2.25 13.6508 2.6245 13.9472 3.21738L15.3944 6.1118C15.4368 6.1965 15.5233 6.25 15.618 6.25H18C20.0711 6.25 21.75 7.92893 21.75 10V18C21.75 20.0711 20.0711 21.75 18 21.75H6C3.92893 21.75 2.25 20.0711 2.25 18V6Z"/></symbol><symbol id="spectrum-icon-Focus" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 6C2.25 3.92893 3.92893 2.25 6 2.25H9V3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V9H2.25V6ZM21.75 18C21.75 20.0711 20.0711 21.75 18 21.75H15V20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V15H21.75V18ZM6 21.75C3.92893 21.75 2.25 20.0711 2.25 18V15H3.75V18C3.75 19.2426 4.75736 20.25 6 20.25H9V21.75H6ZM21.75 6C21.75 3.92893 20.0711 2.25 18 2.25H15V3.75H18C19.2426 3.75 20.25 4.75736 20.25 6V9H21.75V6ZM12 10C10.895 10 10 10.895 10 12C10 13.105 10.895 14 12 14C13.105 14 14 13.105 14 12C14 10.895 13.105 10 12 10Z"/></symbol><symbol id="spectrum-icon-FormatCenter" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 6.75H3V5.25H21V6.75ZM21 18.75H3V17.25H21V18.75ZM7 12.75H16V11.25H7V12.75Z"/></symbol><symbol id="spectrum-icon-FormatIndentDecrease" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.46967 3.96967L2.46967 7.96967C2.17678 8.26256 2.17678 8.73743 2.46967 9.03033L6.46967 13.0303L7.53033 11.9697L4.06066 8.5L7.53033 5.03033L6.46967 3.96967ZM12 5.75H21V4.25H12V5.75ZM12 12.75H21V11.25H12V12.75ZM21 18.25V19.75H3V18.25H21Z"/></symbol><symbol id="spectrum-icon-FormatIndentIncrease" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.31066 3.96967L8.31066 7.96967C8.60355 8.26256 8.60355 8.73743 8.31066 9.03033L4.31066 13.0303L3.25 11.9697L6.71967 8.5L3.25 5.03033L4.31066 3.96967ZM12 5.75H21V4.25H12V5.75ZM12 12.75H21V11.25H12V12.75ZM21 18.25V19.75H3V18.25H21Z"/></symbol><symbol id="spectrum-icon-FormatJustified" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 6.75H3V5.25H21V6.75ZM21 12.75H3V11.25H21V12.75ZM3 18.75H12V17.25H3V18.75Z"/></symbol><symbol id="spectrum-icon-FormatLeft" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 6.75H3V5.25H21V6.75ZM12 12.75H3V11.25H12V12.75ZM3 17.25V18.75H21V17.25H3Z"/></symbol><symbol id="spectrum-icon-FormatListBulleted" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.5C4.82843 6.5 5.5 5.82843 5.5 5C5.5 4.17157 4.82843 3.5 4 3.5C3.17157 3.5 2.5 4.17157 2.5 5C2.5 5.82843 3.17157 6.5 4 6.5ZM4 13.5C4.82843 13.5 5.5 12.8284 5.5 12C5.5 11.1716 4.82843 10.5 4 10.5C3.17157 10.5 2.5 11.1716 2.5 12C2.5 12.8284 3.17157 13.5 4 13.5ZM5.5 19C5.5 19.8284 4.82843 20.5 4 20.5C3.17157 20.5 2.5 19.8284 2.5 19C2.5 18.1716 3.17157 17.5 4 17.5C4.82843 17.5 5.5 18.1716 5.5 19ZM9 5.75H21V4.25H9V5.75ZM9 12.75H21V11.25H9V12.75ZM21 19.75H9V18.25H21V19.75Z"/></symbol><symbol id="spectrum-icon-FormatListNumbered" viewBox="0 0 24 24"><path d="M2 17.5H4.66667V18.1667H3.33333V19.5H4.66667V20.1667H2V21.5H6V16.1667H2V17.5ZM3.33333 7.83333H4.66667V2.5H2V3.83333H3.33333V7.83333ZM2 10.8333H4.4L2 13.6333V14.8333H6V13.5H3.6L6 10.7V9.5H2V10.8333Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 5.75H9V4.25H21V5.75ZM21 12.75H9V11.25H21V12.75ZM9 19.75H21V18.25H9V19.75Z"/></symbol><symbol id="spectrum-icon-FormatPacingLines" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 1.25H5V2.75L19 2.75V1.25ZM19 21.25H5V22.75H19V21.25ZM11.7492 5.2501C12.052 5.24498 12.3281 5.42243 12.4493 5.69995L17.6874 17.7L16.3126 18.3L14.763 14.75L9.09658 14.75L7.69712 18.2766L6.30288 17.7234L11.0648 5.72336C11.1765 5.4419 11.4465 5.25522 11.7492 5.2501ZM9.69181 13.25L11.7949 7.95027L14.1082 13.25L9.69181 13.25Z"/></symbol><symbol id="spectrum-icon-FormatRight" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.75H21V5.25H3V6.75ZM12 12.75H21V11.25H12V12.75ZM21 17.25V18.75H3V17.25H21Z"/></symbol><symbol id="spectrum-icon-FormatSpacingLetter" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 20V4H3.75V20H2.25ZM20.25 20V4H21.75V20H20.25ZM11.7492 5.25011C12.052 5.24499 12.3281 5.42244 12.4493 5.69996L17.6874 17.7L16.3126 18.3L14.763 14.75L9.09658 14.75L7.69712 18.2766L6.30288 17.7234L11.0648 5.72337C11.1765 5.44191 11.4465 5.25523 11.7492 5.25011ZM11.7949 7.95028L14.1082 13.25L9.69181 13.25L11.7949 7.95028Z"/></symbol><symbol id="spectrum-icon-Help" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 6.75C10.7574 6.75 9.75 7.75736 9.75 9V9.5H8.25V9C8.25 6.92893 9.92893 5.25 12 5.25H12.3849C14.2434 5.25 15.75 6.75662 15.75 8.61512V8.77512C15.75 10.128 14.8843 11.3291 13.6008 11.757C13.0927 11.9263 12.75 12.4018 12.75 12.9374V14H11.25V12.9374C11.25 11.7562 12.0059 10.7075 13.1265 10.3339C13.7974 10.1103 14.25 9.48238 14.25 8.77512V8.61512C14.25 7.58504 13.415 6.75 12.3849 6.75H12ZM12 18.5C12.6904 18.5 13.25 17.9404 13.25 17.25C13.25 16.5596 12.6904 16 12 16C11.3096 16 10.75 16.5596 10.75 17.25C10.75 17.9404 11.3096 18.5 12 18.5Z"/></symbol><symbol id="spectrum-icon-HelpFill" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 6.75C10.7574 6.75 9.75 7.75736 9.75 9V9.5H8.25V9C8.25 6.92893 9.92893 5.25 12 5.25H12.3849C14.2434 5.25 15.75 6.75662 15.75 8.61512V8.77512C15.75 10.128 14.8843 11.3291 13.6008 11.757C13.0927 11.9263 12.75 12.4018 12.75 12.9374V14H11.25V12.9374C11.25 11.7562 12.0059 10.7075 13.1265 10.3339C13.7974 10.1103 14.25 9.48238 14.25 8.77512V8.61512C14.25 7.58504 13.415 6.75 12.3849 6.75H12ZM12 18.5C12.6904 18.5 13.25 17.9404 13.25 17.25C13.25 16.5596 12.6904 16 12 16C11.3096 16 10.75 16.5596 10.75 17.25C10.75 17.9404 11.3096 18.5 12 18.5Z"/></symbol><symbol id="spectrum-icon-Home" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7519 3.73343C11.5077 3.22958 12.4923 3.22958 13.2481 3.73343L19.2481 7.73343C19.874 8.15073 20.25 8.85325 20.25 9.60555V18C20.25 19.2426 19.2426 20.25 18 20.25H12.75V15H11.25V20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V9.60555C3.75 8.85325 4.12598 8.15073 4.75192 7.73343L10.7519 3.73343ZM14.0801 2.48536C12.8205 1.64561 11.1795 1.64561 9.91987 2.48536L3.91987 6.48536C2.87663 7.18085 2.25 8.35172 2.25 9.60555V18C2.25 20.0711 3.92893 21.75 6 21.75H18C20.0711 21.75 21.75 20.0711 21.75 18V9.60555C21.75 8.35172 21.1234 7.18085 20.0801 6.48536L14.0801 2.48536Z"/></symbol><symbol id="spectrum-icon-Image" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 6C2.25 3.92893 3.92893 2.25 6 2.25H18C20.0711 2.25 21.75 3.92893 21.75 6V18C21.75 20.0711 20.0711 21.75 18 21.75H6C3.92893 21.75 2.25 20.0711 2.25 18V6ZM6 3.75C4.75736 3.75 3.75 4.75736 3.75 6V18C3.75 18.4781 3.89914 18.9214 4.15343 19.2859L10.7626 12.6768C11.446 11.9934 12.554 11.9934 13.2374 12.6768L16 15.4393L17.2626 14.1768C17.946 13.4934 19.054 13.4934 19.7374 14.1768L20.25 14.6893V6C20.25 4.75736 19.2426 3.75 18 3.75H6ZM20.25 16.8107L19.9697 16.5303L18.6768 15.2374C18.5791 15.1398 18.4209 15.1398 18.3232 15.2374L16.5303 17.0303L14.5303 19.0303L14 19.5607L12.9393 18.5L13.4697 17.9697L14.9393 16.5L12.1768 13.7374C12.0791 13.6398 11.9209 13.6398 11.8232 13.7374L5.39338 20.1673C5.58637 20.2212 5.78982 20.25 6 20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V16.8107ZM10.5 8.75C10.5 9.7165 9.7165 10.5 8.75 10.5C7.7835 10.5 7 9.7165 7 8.75C7 7.7835 7.7835 7 8.75 7C9.7165 7 10.5 7.7835 10.5 8.75Z"/></symbol><symbol id="spectrum-icon-Info" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM11.25 11.5H10V10H12C12.4142 10 12.75 10.3358 12.75 10.75V17.5H14V19H12H10V17.5H11.25V11.5ZM12 8.25C12.6904 8.25 13.25 7.69036 13.25 7C13.25 6.30964 12.6904 5.75 12 5.75C11.3096 5.75 10.75 6.30964 10.75 7C10.75 7.69036 11.3096 8.25 12 8.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM11.25 11.5H10V10H12C12.4142 10 12.75 10.3358 12.75 10.75V17.5H14V19H12H10V17.5H11.25V11.5ZM12 8.25C12.6904 8.25 13.25 7.69036 13.25 7C13.25 6.30964 12.6904 5.75 12 5.75C11.3096 5.75 10.75 6.30964 10.75 7C10.75 7.69036 11.3096 8.25 12 8.25Z"/></symbol><symbol id="spectrum-icon-InfoFill" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM11.25 11.5H10V10H12C12.4142 10 12.75 10.3358 12.75 10.75V17.5H14V19H12H10V17.5H11.25V11.5ZM12 8.25C12.6904 8.25 13.25 7.69036 13.25 7C13.25 6.30964 12.6904 5.75 12 5.75C11.3096 5.75 10.75 6.30964 10.75 7C10.75 7.69036 11.3096 8.25 12 8.25Z"/></symbol><symbol id="spectrum-icon-Keyline" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.3767 2.94995C15.0541 2.30922 13.5697 1.94995 12.0014 1.94995C10.4331 1.94995 8.94875 2.30922 7.6261 2.94995H6C4.31554 2.94995 2.95 4.31548 2.95 5.99995V7.62907C2.31105 8.95024 1.95283 10.4326 1.95283 11.9985C1.95283 13.5645 2.31105 15.0468 2.95 16.368V18C2.95 19.6844 4.31553 21.0499 6 21.0499H7.63194C8.95312 21.6889 10.4354 22.0471 12.0014 22.0471C13.5674 22.0471 15.0497 21.6889 16.3709 21.0499H18C19.6845 21.0499 21.05 19.6844 21.05 18V16.3739C21.6907 15.0512 22.05 13.5668 22.05 11.9985C22.05 10.4303 21.6907 8.94587 21.05 7.62322V5.99995C21.05 4.31548 19.6845 2.94995 18 2.94995H16.3767ZM16.5774 3.04995H18C19.6292 3.04995 20.95 4.37071 20.95 5.99995V7.42256C19.9885 5.54598 18.454 4.01149 16.5774 3.04995ZM20.95 7.64628C19.9761 5.64761 18.3523 4.02384 16.3537 3.04995H7.64916C5.64856 4.02479 4.02358 5.65076 3.05 7.65209V16.345C4.02452 18.3483 5.6517 19.9754 7.65497 20.95H16.3479C18.3492 19.9764 19.9752 18.3514 20.95 16.3508V7.64628ZM21.05 7.85782C21.6279 9.11856 21.95 10.5209 21.95 11.9985C21.95 13.4761 21.6279 14.8785 21.05 16.1393V7.85782ZM20.95 16.5745V18C20.95 19.6292 19.6292 20.95 18 20.95H16.5719C18.451 19.9886 19.9875 18.4529 20.95 16.5745ZM16.136 21.0499C14.8768 21.626 13.4766 21.9471 12.0014 21.9471C10.5262 21.9471 9.12601 21.626 7.86687 21.0499H16.136ZM7.43096 20.95H6C4.37076 20.95 3.05 19.6292 3.05 18V16.569C4.0123 18.4499 5.55003 19.9877 7.43096 20.95ZM2.95 16.1331C2.37391 14.8739 2.05283 13.4737 2.05283 11.9985C2.05283 10.5233 2.37391 9.12313 2.95 7.86399V16.1331ZM3.05 7.42808V5.99995C3.05 4.37071 4.37076 3.04995 6 3.04995H7.42544C5.54702 4.01243 4.01136 5.54899 3.05 7.42808ZM7.8607 2.94995H16.1421C14.8814 2.37208 13.479 2.04995 12.0014 2.04995C10.5238 2.04995 9.12144 2.37208 7.8607 2.94995ZM17.05 12C17.05 9.21091 14.789 6.94995 12 6.94995C9.21096 6.94995 6.95 9.21091 6.95 12C6.95 14.789 9.21096 17.05 12 17.05C14.789 17.05 17.05 14.789 17.05 12ZM12 7.04995C14.7338 7.04995 16.95 9.26614 16.95 12C16.95 14.7338 14.7338 16.95 12 16.95C9.26619 16.95 7.05 14.7338 7.05 12C7.05 9.26614 9.26619 7.04995 12 7.04995Z" fill-opacity="0.16"/><rect width="16" height="19.9972" rx="3" transform="matrix(-1 0 0 1 20 2)" stroke="#FF0000" stroke-opacity="0.08" stroke-width="0.1"/><rect width="19.9972" height="16" rx="3" transform="matrix(-1 0 0 1 22 4)" stroke="#0500FF" stroke-opacity="0.08" stroke-width="0.1"/><rect width="14" height="22" rx="3" transform="matrix(-1 0 0 1 19 1)" stroke="#FF0000" stroke-opacity="0.08" stroke-width="0.1"/><rect width="22" height="14" rx="3" transform="matrix(-1 0 0 1 23 5)" stroke="#0500FF" stroke-opacity="0.08" stroke-width="0.1"/></symbol><symbol id="spectrum-icon-LabelC" viewBox="0 0 24 24"><path d="M12.2921 4.896C10.3121 4.896 8.76413 5.562 7.68413 6.93C6.69413 8.154 6.20813 9.72 6.20813 11.628C6.20813 13.536 6.67613 15.084 7.64813 16.272C8.71013 17.586 10.2401 18.252 12.2381 18.252C13.6061 18.252 14.7941 17.856 15.7841 17.082C16.8461 16.254 17.5121 15.084 17.8001 13.59H16.3781C16.1261 14.706 15.6041 15.552 14.8481 16.128C14.1281 16.668 13.2641 16.938 12.2381 16.938C10.7261 16.938 9.59213 16.434 8.80013 15.444C8.04413 14.508 7.68413 13.23 7.68413 11.628C7.68413 10.026 8.06213 8.748 8.81813 7.776C9.62813 6.732 10.7801 6.21 12.2741 6.21C13.2821 6.21 14.1281 6.444 14.8301 6.93C15.5501 7.434 16.0181 8.154 16.1981 9.09H17.6201C17.4401 7.812 16.8641 6.786 15.8921 6.03C14.9201 5.274 13.7141 4.896 12.2921 4.896Z"/></symbol><symbol id="spectrum-icon-LabelD" viewBox="0 0 24 24"><path d="M7.4415 5.14801V18H11.9055C13.9215 18 15.4695 17.406 16.5495 16.236C17.5755 15.12 18.0975 13.554 18.0975 11.574C18.0975 9.55801 17.6115 7.99201 16.6575 6.91201C15.6135 5.72401 14.0835 5.14801 12.0495 5.14801H7.4415ZM8.9175 6.42601H11.8155C13.5075 6.42601 14.7315 6.85801 15.5235 7.74001C16.2615 8.56801 16.6395 9.84601 16.6395 11.574C16.6395 13.248 16.2255 14.526 15.4335 15.39C14.5875 16.272 13.3275 16.722 11.6535 16.722H8.9175V6.42601Z"/></symbol><symbol id="spectrum-icon-LabelG" viewBox="0 0 24 24"><path d="M12.0536 4.896C10.1636 4.896 8.66956 5.562 7.57156 6.912C6.52756 8.154 6.02356 9.72 6.02356 11.628C6.02356 13.536 6.54556 15.102 7.58956 16.308C8.70556 17.604 10.2896 18.252 12.3236 18.252C13.3856 18.252 14.3756 18.108 15.3116 17.82C16.1936 17.532 16.9496 17.154 17.5616 16.65V11.394H12.0716V12.672H16.1036V15.948C15.6536 16.236 15.1136 16.488 14.4836 16.668C13.8356 16.848 13.1696 16.956 12.4676 16.956C10.7936 16.956 9.53356 16.452 8.68756 15.462C7.89556 14.526 7.49956 13.248 7.49956 11.628C7.49956 9.972 7.89556 8.658 8.72356 7.686C9.55156 6.696 10.6496 6.21 12.0536 6.21C13.1876 6.21 14.1056 6.48 14.8076 7.038C15.4736 7.56 15.9056 8.298 16.1036 9.27H17.5796C17.3456 7.866 16.7876 6.804 15.8876 6.066C14.9336 5.274 13.6556 4.896 12.0536 4.896Z"/></symbol><symbol id="spectrum-icon-LabelV" viewBox="0 0 24 24"><path d="M6.34198 5.14801L11.094 18H12.912L17.664 5.14801H16.044L12.03 16.398H11.976L7.96198 5.14801H6.34198Z"/></symbol><symbol id="spectrum-icon-LabelX" viewBox="0 0 24 24"><path d="M6.70153 5.14801L11.0935 11.322L6.35953 18H8.17753L11.9935 12.492L15.8275 18H17.6455L12.8755 11.322L17.3035 5.14801H15.4855L11.9935 10.152L8.51953 5.14801H6.70153Z"/></symbol><symbol id="spectrum-icon-LabelY" viewBox="0 0 24 24"><path d="M6.13101 5.14801L11.261 12.78V18H12.737V12.78L17.867 5.14801H16.085L11.999 11.412L7.91301 5.14801H6.13101Z"/></symbol><symbol id="spectrum-icon-Layers" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.477 2.85616C11.4466 2.42522 12.5534 2.42522 13.523 2.85616L21.3046 6.31464C21.5754 6.43502 21.75 6.70361 21.75 7C21.75 7.29639 21.5754 7.56498 21.3046 7.68536L13.523 11.1438C12.5534 11.5748 11.4466 11.5748 10.477 11.1438L2.6954 7.68536C2.42455 7.56498 2.25 7.29639 2.25 7C2.25 6.70361 2.42455 6.43502 2.6954 6.31464L10.477 2.85616ZM12.9138 4.22688C12.332 3.96831 11.668 3.96831 11.0862 4.22688L4.84666 7L11.0862 9.77312C11.668 10.0317 12.332 10.0317 12.9138 9.77312L19.1533 7L12.9138 4.22688ZM2.61924 16.01L3.3046 16.3146L11.0862 19.7731C11.668 20.0317 12.332 20.0317 12.9138 19.7731L20.6954 16.3146L21.3808 16.01L21.99 17.3808L21.3046 17.6854L13.523 21.1438C12.5534 21.5748 11.4466 21.5748 10.477 21.1438L2.6954 17.6854L2.01004 17.3808L2.61924 16.01ZM3.3046 11.3146L2.61924 11.01L2.01004 12.3808L2.6954 12.6854L10.477 16.1438C11.4466 16.5748 12.5534 16.5748 13.523 16.1438L21.3046 12.6854L21.99 12.3808L21.3808 11.01L20.6954 11.3146L12.9138 14.7731C12.332 15.0317 11.668 15.0317 11.0862 14.7731L3.3046 11.3146Z"/></symbol><symbol id="spectrum-icon-Layout" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 3.75C4.75736 3.75 3.75 4.75736 3.75 6V18C3.75 19.2426 4.75736 20.25 6 20.25H8.25V3.75H6ZM9.75 3.75V20.25H14.25V3.75H9.75ZM15.75 3.75V20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V6C20.25 4.75736 19.2426 3.75 18 3.75H15.75ZM2.25 6C2.25 3.92893 3.92893 2.25 6 2.25H18C20.0711 2.25 21.75 3.92893 21.75 6V18C21.75 20.0711 20.0711 21.75 18 21.75H6C3.92893 21.75 2.25 20.0711 2.25 18V6Z"/></symbol><symbol id="spectrum-icon-Link" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.7119 13.7535L10.6167 14.2409L10.3833 12.7591L13.4786 12.2717C14.5829 12.0979 15.6036 11.5784 16.3941 10.7879L18.5407 8.64124C19.4194 7.76256 19.4194 6.33794 18.5407 5.45926C17.662 4.58058 16.2374 4.58058 15.3587 5.45926L11.8232 8.99479L10.7626 7.93413L14.2981 4.3986C15.7626 2.93413 18.1369 2.93413 19.6014 4.3986C21.0659 5.86306 21.0659 8.23743 19.6014 9.7019L17.4547 11.8486C16.4399 12.8633 15.1296 13.5303 13.7119 13.7535ZM10.2881 10.2465L13.3833 9.75914L13.6167 11.2409L10.5214 11.7283C9.4171 11.9021 8.39638 12.4216 7.60591 13.2121L5.45926 15.3588C4.58058 16.2374 4.58058 17.6621 5.45926 18.5407C6.33794 19.4194 7.76256 19.4194 8.64124 18.5407L12.1768 15.0052L13.2374 16.0659L9.7019 19.6014C8.23743 21.0659 5.86306 21.0659 4.3986 19.6014C2.93413 18.1369 2.93413 15.7626 4.3986 14.2981L6.54525 12.1514C7.56003 11.1367 8.87042 10.4697 10.2881 10.2465Z"/></symbol><symbol id="spectrum-icon-Locked" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C9.37665 1.25 7.25 3.37665 7.25 6V10H8.75V6C8.75 4.20507 10.2051 2.75 12 2.75C13.7949 2.75 15.25 4.20507 15.25 6V10H16.75V6C16.75 3.37665 14.6234 1.25 12 1.25ZM8.75 18V14H7.25V18C7.25 20.6234 9.37665 22.75 12 22.75C14.6234 22.75 16.75 20.6234 16.75 18V14H15.25V18C15.25 19.7949 13.7949 21.25 12 21.25C10.2051 21.25 8.75 19.7949 8.75 18ZM11.25 8V16H12.75V8H11.25Z"/></symbol><symbol id="spectrum-icon-Menu" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 5.75H3V4.25H21V5.75ZM21 12.75H3V11.25H21V12.75ZM3 19.75H21V18.25H3V19.75Z"/></symbol><symbol id="spectrum-icon-MoreHoriz" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 12C6.5 12.8284 5.82843 13.5 5 13.5C4.17157 13.5 3.5 12.8284 3.5 12C3.5 11.1716 4.17157 10.5 5 10.5C5.82843 10.5 6.5 11.1716 6.5 12ZM13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12ZM19 13.5C19.8284 13.5 20.5 12.8284 20.5 12C20.5 11.1716 19.8284 10.5 19 10.5C18.1716 10.5 17.5 11.1716 17.5 12C17.5 12.8284 18.1716 13.5 19 13.5Z"/></symbol><symbol id="spectrum-icon-None" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 12.75H8V11.25H16V12.75Z"/></symbol><symbol id="spectrum-icon-OpenFull" viewBox="0 0 24 24"><g clip-path="url(#clip0_52_592)"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.81067 19.25L12 19.25L12 20.75L4 20.75C3.80109 20.75 3.61032 20.671 3.46967 20.5303C3.32902 20.3897 3.25 20.1989 3.25 20L3.25 12L4.75 12L4.75 18.1894L18.1893 4.75001L12 4.75L12 3.25L20 3.25001C20.4142 3.25001 20.75 3.5858 20.75 4.00001L20.75 12L19.25 12L19.25 5.81067L5.81067 19.25Z"/></g><defs><clipPath id="clip0_52_592"><rect width="24" height="24"/></clipPath></defs></symbol><symbol id="spectrum-icon-PageFooter" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 19C3.25 21.0711 4.92893 22.75 7 22.75H17C19.0711 22.75 20.75 21.0711 20.75 19V18V5C20.75 2.92893 19.0711 1.25 17 1.25H7C4.92893 1.25 3.25 2.92893 3.25 5V18V19ZM4.75 17.25V5C4.75 3.75736 5.75736 2.75 7 2.75H17C18.2426 2.75 19.25 3.75736 19.25 5V17.25H4.75ZM19.25 18.75H4.75V19C4.75 20.2426 5.75736 21.25 7 21.25H17C18.2426 21.25 19.25 20.2426 19.25 19V18.75Z"/></symbol><symbol id="spectrum-icon-PageHeader" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 5C3.25 2.92893 4.92893 1.25 7 1.25H17C19.0711 1.25 20.75 2.92893 20.75 5V6V19C20.75 21.0711 19.0711 22.75 17 22.75H7C4.92893 22.75 3.25 21.0711 3.25 19V6V5ZM4.75 6.75V19C4.75 20.2426 5.75736 21.25 7 21.25H17C18.2426 21.25 19.25 20.2426 19.25 19V6.75H4.75ZM19.25 5.25H4.75V5C4.75 3.75736 5.75736 2.75 7 2.75H17C18.2426 2.75 19.25 3.75736 19.25 5V5.25Z"/></symbol><symbol id="spectrum-icon-Pages" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1.25C4.92893 1.25 3.25 2.92893 3.25 5V19C3.25 21.0711 4.92893 22.75 7 22.75H17C19.0711 22.75 20.75 21.0711 20.75 19V5C20.75 2.92893 19.0711 1.25 17 1.25H7ZM4.75 5C4.75 3.75736 5.75736 2.75 7 2.75H17C18.2426 2.75 19.25 3.75736 19.25 5V19C19.25 20.2426 18.2426 21.25 17 21.25H7C5.75736 21.25 4.75 20.2426 4.75 19V5ZM8 8.75H16V7.25H8V8.75ZM16 12.75H8V11.25H16V12.75ZM8 16.75H16V15.25H8V16.75Z"/></symbol><symbol id="spectrum-icon-Paragraph" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 4C6.25 3.58579 6.58579 3.25 7 3.25H13.5C16.6756 3.25 19.25 5.82436 19.25 9C19.25 12.1756 16.6756 14.75 13.5 14.75H7.75V22H6.25V4ZM7.75 13.25H13.5C15.8472 13.25 17.75 11.3472 17.75 9C17.75 6.65279 15.8472 4.75 13.5 4.75H7.75V13.25Z"/></symbol><symbol id="spectrum-icon-QrCode" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 4.5C2.25 3.25736 3.25736 2.25 4.5 2.25H8.5C9.74264 2.25 10.75 3.25736 10.75 4.5V8.5C10.75 9.74264 9.74264 10.75 8.5 10.75H4.5C3.25736 10.75 2.25 9.74264 2.25 8.5V4.5ZM4.5 3.75C4.08579 3.75 3.75 4.08579 3.75 4.5V8.5C3.75 8.91421 4.08579 9.25 4.5 9.25H8.5C8.91421 9.25 9.25 8.91421 9.25 8.5V4.5C9.25 4.08579 8.91421 3.75 8.5 3.75H4.5ZM2.25 15.5C2.25 14.2574 3.25736 13.25 4.5 13.25H8.5C9.74264 13.25 10.75 14.2574 10.75 15.5V19.5C10.75 20.7426 9.74264 21.75 8.5 21.75H4.5C3.25736 21.75 2.25 20.7426 2.25 19.5V15.5ZM4.5 14.75C4.08579 14.75 3.75 15.0858 3.75 15.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H8.5C8.91421 20.25 9.25 19.9142 9.25 19.5V15.5C9.25 15.0858 8.91421 14.75 8.5 14.75H4.5ZM15.5 13.25C14.2574 13.25 13.25 14.2574 13.25 15.5V19.5C13.25 20.7426 14.2574 21.75 15.5 21.75H19.5C20.7426 21.75 21.75 20.7426 21.75 19.5V15.5C21.75 14.2574 20.7426 13.25 19.5 13.25H15.5ZM14.75 15.5C14.75 15.0858 15.0858 14.75 15.5 14.75H19.5C19.9142 14.75 20.25 15.0858 20.25 15.5V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H15.5C15.0858 20.25 14.75 19.9142 14.75 19.5V15.5ZM16.25 17C16.25 16.5858 16.5858 16.25 17 16.25H18C18.4142 16.25 18.75 16.5858 18.75 17V18C18.75 18.4142 18.4142 18.75 18 18.75H17C16.5858 18.75 16.25 18.4142 16.25 18V17ZM15.5 2.25C14.2574 2.25 13.25 3.25736 13.25 4.5V8.5C13.25 9.74264 14.2574 10.75 15.5 10.75H19.5C20.7426 10.75 21.75 9.74264 21.75 8.5V4.5C21.75 3.25736 20.7426 2.25 19.5 2.25H15.5ZM14.75 4.5C14.75 4.08579 15.0858 3.75 15.5 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V8.5C20.25 8.91421 19.9142 9.25 19.5 9.25H15.5C15.0858 9.25 14.75 8.91421 14.75 8.5V4.5Z"/></symbol><symbol id="spectrum-icon-Redo" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.1893 11.75L14.9697 15.9697L16.0303 17.0303L21.5303 11.5303C21.8232 11.2374 21.8232 10.7626 21.5303 10.4697L16.0303 4.96967L14.9697 6.03033L19.1893 10.25H10.9C6.12274 10.25 2.25 14.1227 2.25 18.9V19H3.75V18.9C3.75 14.9512 6.95116 11.75 10.9 11.75H19.1893Z"/></symbol><symbol id="spectrum-icon-Remove" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 12.75L3 11.25L21 11.25L21 12.75L3 12.75Z"/></symbol><symbol id="spectrum-icon-RotateLeft" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4697 11.5303L7.46967 6.53033C7.17678 6.23743 7.17678 5.76256 7.46967 5.46967L12.4697 0.469666L13.5303 1.53032L10.7172 4.34346C11.1361 4.28187 11.5645 4.25 12 4.25C16.8325 4.25 20.75 8.1675 20.75 13C20.75 17.5798 17.2314 21.3379 12.75 21.7183V21.75H12C11.535 21.75 11.0779 21.7137 10.6317 21.6435L10.8645 20.1617C11.2341 20.2198 11.6132 20.25 12 20.25C16.0041 20.25 19.25 17.0041 19.25 13C19.25 8.99593 16.0041 5.75 12 5.75C11.1093 5.75 10.2578 5.91027 9.47148 6.20289C9.41648 6.22336 9.36061 6.23697 9.3048 6.24413L13.5303 10.4697L12.4697 11.5303ZM4.75 12.25V13C4.75 13.3868 4.78022 13.7659 4.83829 14.1355L3.35647 14.3683C3.28634 13.9221 3.25 13.465 3.25 13V12.25H4.75ZM5.2 18.507C4.62692 17.8002 4.16154 17.0018 3.82927 16.1368L5.22952 15.5989C5.50443 16.3146 5.88982 16.9761 6.36516 17.5623L5.2 18.507ZM8.86321 21.1707C7.99822 20.8385 7.19982 20.3731 6.49299 19.8L7.43767 18.6348C8.02394 19.1102 8.68541 19.4956 9.40108 19.7705L8.86321 21.1707Z"/></symbol><symbol id="spectrum-icon-Settings" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2997 1.31242C12.3848 1.34948 12.4634 1.40238 12.5305 1.46951C12.5899 1.52893 12.6382 1.59734 12.6742 1.67136L13.5302 3.38335C14.807 3.60856 15.9884 4.11064 17.01 4.82536L18.8267 4.2198C18.9045 4.19293 18.987 4.1787 19.0711 4.17871C19.166 4.1787 19.2589 4.19684 19.3454 4.23085C19.4442 4.26958 19.5305 4.32734 19.6015 4.39847C19.6726 4.46948 19.7304 4.55581 19.7691 4.65462C19.8031 4.74104 19.8213 4.834 19.8213 4.92891C19.8213 5.01296 19.8071 5.09548 19.7802 5.17328L19.1746 6.98996C19.8894 8.01159 20.3914 9.19294 20.6166 10.4698L22.3286 11.3258C22.4026 11.3618 22.4711 11.4101 22.5305 11.4695C22.5976 11.5366 22.6505 11.6152 22.6876 11.7003C22.73 11.7976 22.7502 11.8995 22.7502 12C22.7502 12.1005 22.73 12.2024 22.6876 12.2996C22.6505 12.3848 22.5976 12.4634 22.5305 12.5305C22.4711 12.5899 22.4026 12.6382 22.3286 12.6742L20.6167 13.5302C20.3914 14.807 19.8894 15.9884 19.1746 17.01L19.7802 18.8267C19.8071 18.9045 19.8213 18.987 19.8213 19.0711C19.8213 19.166 19.8031 19.2589 19.7691 19.3453C19.7304 19.4442 19.6726 19.5305 19.6015 19.6015C19.5305 19.6726 19.4442 19.7304 19.3454 19.7691C19.2589 19.8031 19.166 19.8213 19.0711 19.8213C18.987 19.8213 18.9045 19.807 18.8267 19.7802L17.0101 19.1746C15.9884 19.8894 14.8071 20.3914 13.5302 20.6167L12.6742 22.3286C12.6382 22.4026 12.5899 22.471 12.5305 22.5305C12.4634 22.5976 12.3848 22.6505 12.2997 22.6875C12.2024 22.73 12.1005 22.7502 12 22.7502C11.8995 22.7502 11.7976 22.73 11.7003 22.6875C11.6152 22.6505 11.5366 22.5976 11.4695 22.5305C11.4101 22.471 11.3618 22.4026 11.3258 22.3286L10.4698 20.6167C9.19295 20.3914 8.01159 19.8894 6.98995 19.1746L5.1733 19.7802C5.0955 19.807 5.01298 19.8213 4.92893 19.8213C4.83402 19.8213 4.74105 19.8031 4.65464 19.7691C4.55583 19.7304 4.4695 19.6726 4.39848 19.6015C4.32736 19.5305 4.2696 19.4442 4.23087 19.3453C4.19686 19.2589 4.17871 19.166 4.17873 19.0711C4.17871 18.987 4.19294 18.9045 4.21982 18.8267L4.82537 17.01C4.11063 15.9884 3.60855 14.807 3.38334 13.5302L1.67137 12.6742C1.59736 12.6382 1.52895 12.5899 1.46952 12.5305C1.4024 12.4634 1.34949 12.3848 1.31244 12.2996C1.26995 12.2024 1.24975 12.1005 1.24983 12C1.24975 11.8995 1.26995 11.7976 1.31244 11.7003C1.34949 11.6152 1.4024 11.5366 1.46952 11.4695C1.52895 11.4101 1.59736 11.3618 1.67137 11.3258L3.38335 10.4698C3.60856 9.19293 4.11064 8.01158 4.82538 6.98995L4.21982 5.17328C4.19295 5.09548 4.17872 5.01296 4.17873 4.92891C4.17872 4.834 4.19686 4.74103 4.23087 4.65462C4.2696 4.55581 4.32736 4.46948 4.39849 4.39846C4.4695 4.32734 4.55583 4.26958 4.65464 4.23085C4.74106 4.19684 4.83402 4.17869 4.92893 4.17871C5.01298 4.17869 5.0955 4.19292 5.1733 4.2198L6.98998 4.82536C8.01161 4.11063 9.19295 3.60856 10.4698 3.38335L11.3258 1.67136C11.3618 1.59734 11.4101 1.52893 11.4695 1.46951C11.5366 1.40238 11.6152 1.34948 11.7003 1.31242C11.7976 1.26994 11.8995 1.24974 12 1.24982C12.1005 1.24974 12.2024 1.26994 12.2997 1.31242ZM12 4.75C7.99593 4.75 4.75 7.99594 4.75 12C4.75 16.0041 7.99593 19.25 12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75Z"/></symbol><symbol id="spectrum-icon-Shift" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.25C12.2073 3.25 12.4054 3.33581 12.5471 3.48704L20.0471 11.487C20.2516 11.7051 20.307 12.0238 20.1882 12.2981C20.0693 12.5725 19.7989 12.75 19.5 12.75H16.25V19C16.25 19.4142 15.9142 19.75 15.5 19.75H8.49999C8.08577 19.75 7.74999 19.4142 7.74999 19V12.75H4.49999C4.20104 12.75 3.93064 12.5725 3.81179 12.2981C3.69295 12.0238 3.74837 11.7051 3.95283 11.487L11.4528 3.48704C11.5946 3.33581 11.7927 3.25 12 3.25ZM6.23116 11.25H8.49999C8.9142 11.25 9.24999 11.5858 9.24999 12V18.25H14.75V12C14.75 11.5858 15.0858 11.25 15.5 11.25H17.7688L12 5.09659L6.23116 11.25Z"/></symbol><symbol id="spectrum-icon-SliderInvisible" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 7.46967L4.46967 11.4697C4.32902 11.6103 4.25 11.8011 4.25 12C4.25 12.1989 4.32902 12.3897 4.46967 12.5303L8.46967 16.5303L9.53033 15.4697L6.06066 12L9.53033 8.53033L8.46967 7.46967ZM15.5303 7.46967L19.5303 11.4697C19.671 11.6103 19.75 11.8011 19.75 12C19.75 12.1989 19.671 12.3897 19.5303 12.5303L15.5303 16.5303L14.4697 15.4697L17.9393 12L14.4697 8.53033L15.5303 7.46967Z"/></symbol><symbol id="spectrum-icon-Smartphone" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 1.25C6.92893 1.25 5.25 2.92893 5.25 5V19C5.25 21.0711 6.92893 22.75 9 22.75H15C17.0711 22.75 18.75 21.0711 18.75 19V5C18.75 2.92893 17.0711 1.25 15 1.25H9ZM6.75 5C6.75 3.75736 7.75736 2.75 9 2.75H15C16.2426 2.75 17.25 3.75736 17.25 5V19C17.25 20.2426 16.2426 21.25 15 21.25H9C7.75736 21.25 6.75 20.2426 6.75 19V5ZM10.5 19.75H13.5V18.25H10.5V19.75Z"/></symbol><symbol id="spectrum-icon-Star" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.84 1.87616C11.2599 0.830503 12.7401 0.830506 13.16 1.87616L15.5189 7.75117L21.8177 8.18759C22.9391 8.26528 23.3961 9.66813 22.5357 10.3914L17.692 14.4633L19.2256 20.6133C19.4979 21.7056 18.3008 22.5731 17.3476 21.9741L12 18.6137L6.65239 21.9741C5.69923 22.5731 4.50207 21.7056 4.77444 20.6133L6.308 14.4633L1.4643 10.3914C0.603911 9.66813 1.06093 8.26528 2.18226 8.18759L8.48109 7.75117L10.84 1.87616ZM12 3.01287L9.69791 8.74634C9.59078 9.01314 9.34057 9.19522 9.05376 9.21509L2.90298 9.64125L7.63161 13.6164C7.85092 13.8008 7.94604 14.094 7.87672 14.372L6.38014 20.3736L11.6009 17.0929C11.8449 16.9396 12.1551 16.9396 12.3991 17.0929L17.6199 20.3736L16.1233 14.372C16.054 14.094 16.1491 13.8008 16.3684 13.6164L21.097 9.64125L14.9462 9.21509C14.6594 9.19522 14.4092 9.01314 14.3021 8.74634L12 3.01287Z"/></symbol><symbol id="spectrum-icon-StopCircle" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.9298 4.86918C15.1222 1.06157 8.87777 1.06157 5.07016 4.86918C1.30545 8.63389 1.2626 14.7791 5.035 18.5515L5.10571 18.6222L6.16637 17.5616L6.09566 17.4908C2.91672 14.3119 2.94419 9.11647 6.13082 5.92984C9.35264 2.70802 14.6474 2.70802 17.8692 5.92984C21.0558 9.11647 21.0833 14.3119 17.9043 17.4908L17.8336 17.5616L18.8943 18.6222L18.965 18.5515C22.7374 14.7791 22.6946 8.63389 18.9298 4.86918ZM15.4697 17.4697L12.75 20.1893L12.75 10H11.25L11.25 20.1893L8.53033 17.4697L7.46967 18.5303L11.4697 22.5303C11.7626 22.8232 12.2374 22.8232 12.5303 22.5303L16.5303 18.5303L15.4697 17.4697Z"/></symbol><symbol id="spectrum-icon-TabletMac" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 5C3.25 2.92893 4.92893 1.25 7 1.25H17C19.0711 1.25 20.75 2.92893 20.75 5V19C20.75 21.0711 19.0711 22.75 17 22.75H7C4.92893 22.75 3.25 21.0711 3.25 19V5ZM7 2.75C5.75736 2.75 4.75 3.75736 4.75 5V19C4.75 20.2426 5.75736 21.25 7 21.25H17C18.2426 21.25 19.25 20.2426 19.25 19V5C19.25 3.75736 18.2426 2.75 17 2.75H7Z"/></symbol><symbol id="spectrum-icon-Text" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 4.75H4V3.25H20V4.75H12.75V22H11.25V4.75Z"/></symbol><symbol id="spectrum-icon-TextBold" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 3C5.25 2.58579 5.58579 2.25 6 2.25H13C15.6234 2.25 17.75 4.37665 17.75 7C17.75 8.62521 16.9338 10.0598 15.6889 10.9162C17.5097 11.8812 18.75 13.7958 18.75 16C18.75 19.1756 16.1756 21.75 13 21.75H6C5.58579 21.75 5.25 21.4142 5.25 21V3ZM13 10.25C14.7949 10.25 16.25 8.79493 16.25 7C16.25 5.20507 14.7949 3.75 13 3.75H6.75V10.25H13ZM6.75 11.75H13C15.3472 11.75 17.25 13.6528 17.25 16C17.25 18.3472 15.3472 20.25 13 20.25H6.75V11.75Z"/></symbol><symbol id="spectrum-icon-TextDeleteline" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.2569 9.1371L8.92464 10.25H21V11.75H3V10.25H7.17536L6.97066 9.90884C6.4991 9.1229 6.25 8.22358 6.25 7.30702C6.25 4.51411 8.51411 2.25 11.307 2.25H12.5C15.3995 2.25 17.75 4.60051 17.75 7.5V8H16.25V7.5C16.25 5.42893 14.5711 3.75 12.5 3.75H11.307C9.34253 3.75 7.75 5.34253 7.75 7.30702C7.75 7.95171 7.92521 8.58428 8.2569 9.1371ZM17.75 16.693C17.75 15.7764 17.5009 14.8771 17.0293 14.0911L15.7431 14.8629C16.0748 15.4157 16.25 16.0483 16.25 16.693C16.25 18.6575 14.6575 20.25 12.693 20.25H11.5C9.42893 20.25 7.75 18.5711 7.75 16.5V16H6.25V16.5C6.25 19.3995 8.6005 21.75 11.5 21.75H12.693C15.4859 21.75 17.75 19.4859 17.75 16.693Z"/></symbol><symbol id="spectrum-icon-TextItaly" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4726 3.75H10.9091V2.25H18V3.75H15.0274L10.5274 20.25H13.0909V21.75H6V20.25H8.97261L13.4726 3.75Z"/></symbol><symbol id="spectrum-icon-TextScale" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1782 2.67975C11.0543 2.41737 10.7902 2.25 10.5 2.25C10.2099 2.25 9.94574 2.41737 9.82184 2.67975L1.32184 20.6797L2.67821 21.3203L5.30861 15.75H10.6294C11.0026 15.054 11.3752 14.5733 11.7422 14.25H6.01694L10.5 4.75641L14.9026 14.0795C15.5196 14.286 16.0341 14.3699 16.3936 13.7242L11.1782 2.67975ZM21.7011 10.75L16.7011 10.75L16.7011 12.25L19.8904 12.25L12.25 19.8904L12.25 16.701L10.75 16.701L10.75 21.701C10.75 22.1152 11.0858 22.451 11.5 22.451L16.7011 22.451L16.7011 20.951H13.3107L20.9511 13.3107V16.701L22.4511 16.701V11.5C22.4511 11.0858 22.1153 10.75 21.7011 10.75Z"/></symbol><symbol id="spectrum-icon-TextUnderline" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 3V11.25C6.75 14.0114 8.98858 16.25 11.75 16.25C14.5114 16.25 16.75 14.0114 16.75 11.25V3H15.25V11.25C15.25 13.183 13.683 14.75 11.75 14.75C9.817 14.75 8.25 13.183 8.25 11.25V3H6.75ZM4 20.75H20V19.25H4V20.75Z"/></symbol><symbol id="spectrum-icon-Theme" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1708 2.66459C12.0438 2.4105 11.7841 2.25 11.5 2.25C11.2159 2.25 10.9562 2.4105 10.8292 2.66459L5.03647 14.25H5V14.323L2.32918 19.6646L3.67082 20.3354L5.96353 15.75H12.8995C13.0401 15.4004 13.2146 15.0609 13.4232 14.7364L13.7359 14.25H6.71353L11.5 4.67705L15.1706 12.0182L16.1139 10.5508L12.1708 2.66459ZM22.315 20.4525C23.2754 18.9585 23.2754 17.0415 22.315 15.5475L19.194 10.6927C18.8693 10.1875 18.1307 10.1875 17.806 10.6927L14.685 15.5475C13.7246 17.0415 13.7246 18.9585 14.685 20.4525C16.4703 23.2296 20.5297 23.2296 22.315 20.4525ZM21.0532 16.3586C21.696 17.3585 21.696 18.6415 21.0532 19.6414C19.8584 21.4999 17.1416 21.4999 15.9468 19.6414C15.304 18.6415 15.304 17.3585 15.9468 16.3586L18.5 12.3869L21.0532 16.3586Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1708 2.66459C12.0438 2.4105 11.7841 2.25 11.5 2.25C11.2159 2.25 10.9562 2.4105 10.8292 2.66459L5.03647 14.25H5V14.323L2.32918 19.6646L3.67082 20.3354L5.96353 15.75H12.8995C13.0401 15.4004 13.2146 15.0609 13.4232 14.7364L13.7359 14.25H6.71353L11.5 4.67705L15.1706 12.0182L16.1139 10.5508L12.1708 2.66459ZM22.315 20.4525C23.2754 18.9585 23.2754 17.0415 22.315 15.5475L19.194 10.6927C18.8693 10.1875 18.1307 10.1875 17.806 10.6927L14.685 15.5475C13.7246 17.0415 13.7246 18.9585 14.685 20.4525C16.4703 23.2296 20.5297 23.2296 22.315 20.4525ZM21.0532 16.3586C21.696 17.3585 21.696 18.6415 21.0532 19.6414C19.8584 21.4999 17.1416 21.4999 15.9468 19.6414C15.304 18.6415 15.304 17.3585 15.9468 16.3586L18.5 12.3869L21.0532 16.3586Z"/></symbol><symbol id="spectrum-icon-Tune" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 5.25C13.0335 5.25 12.25 6.0335 12.25 7C12.25 7.9665 13.0335 8.75 14 8.75C14.9665 8.75 15.75 7.9665 15.75 7C15.75 6.0335 14.9665 5.25 14 5.25ZM10.837 6.25C11.1755 4.81665 12.4632 3.75 14 3.75C15.5368 3.75 16.8245 4.81665 17.163 6.25H21V7.75H17.163C16.8245 9.18335 15.5368 10.25 14 10.25C12.4632 10.25 11.1755 9.18335 10.837 7.75H3V6.25H10.837ZM10 15.25C9.0335 15.25 8.25 16.0335 8.25 17C8.25 17.9665 9.0335 18.75 10 18.75C10.9665 18.75 11.75 17.9665 11.75 17C11.75 16.0335 10.9665 15.25 10 15.25ZM6.83697 16.25C7.17555 14.8166 8.46321 13.75 10 13.75C11.5368 13.75 12.8245 14.8166 13.163 16.25H21V17.75H13.163C12.8245 19.1834 11.5368 20.25 10 20.25C8.46321 20.25 7.17555 19.1834 6.83697 17.75H3V16.25H6.83697Z"/></symbol><symbol id="spectrum-icon-Undo" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.81066 11.75L9.03033 15.9697L7.96967 17.0303L2.46967 11.5303C2.17678 11.2374 2.17678 10.7626 2.46967 10.4697L7.96967 4.96967L9.03033 6.03033L4.81066 10.25H13.1C17.8773 10.25 21.75 14.1227 21.75 18.9V19H20.25V18.9C20.25 14.9512 17.0488 11.75 13.1 11.75H4.81066Z"/></symbol><symbol id="spectrum-icon-Unlocked" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C9.37665 1.25 7.25 3.37665 7.25 6V10H8.75V6C8.75 4.20507 10.2051 2.75 12 2.75C13.7949 2.75 15.25 4.20507 15.25 6V10H16.75V6C16.75 3.37665 14.6234 1.25 12 1.25ZM8.75 18V14H7.25V18C7.25 20.6234 9.37665 22.75 12 22.75C14.6234 22.75 16.75 20.6234 16.75 18V14H15.25V18C15.25 19.7949 13.7949 21.25 12 21.25C10.2051 21.25 8.75 19.7949 8.75 18Z"/></symbol><symbol id="spectrum-icon-Video" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2.25C3.92893 2.25 2.25 3.92893 2.25 6V18C2.25 20.0711 3.92893 21.75 6 21.75H18C20.0711 21.75 21.75 20.0711 21.75 18V6C21.75 3.92893 20.0711 2.25 18 2.25H6ZM3.75 6C3.75 4.75736 4.75736 3.75 6 3.75H18C19.2426 3.75 20.25 4.75736 20.25 6V18C20.25 19.2426 19.2426 20.25 18 20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V6ZM9 9.61803V14.382C9 15.1253 9.78231 15.6088 10.4472 15.2764L15.2111 12.8944C15.9482 12.5259 15.9482 11.4741 15.2111 11.1056L10.4472 8.72361C9.78231 8.39116 9 8.87465 9 9.61803Z"/></symbol><symbol id="spectrum-icon-ViewDay" viewBox="0 0 24 24"><path d="M18 3L18 22L20 22L20 3L18 3ZM10 5L14 5L14 20L10 20L10 5ZM8 4L8 21C8 21.55 8.45 22 9 22L15 22C15.55 22 16 21.55 16 21L16 4C16 3.45 15.55 3 15 3L9 3C8.45 3 8 3.45 8 4ZM4 3L4 22L6 22L6 3L4 3Z"/></symbol><symbol id="spectrum-icon-close" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.9393 12L4.3986 5.45925L5.45926 4.39859L12 10.9393L18.5407 4.39859L19.6014 5.45925L13.0607 12L19.6014 18.5407L18.5407 19.6014L12 13.0606L5.45926 19.6014L4.3986 18.5407L10.9393 12Z"/></symbol></svg>`;h("sp-icons-editor",class extends At{constructor(){super(),this.name="editor"}renderDefaultContent(){return Zt}getSVGIconName(e){return`spectrum-icon-${e}`}getSanitizedIconName(e){return e.replace("spectrum-icon-","")}});var Et=q`:host{border:none;box-sizing:content-box;height:var(--spectrum-listitem-divider-size);margin:calc(var(--spectrum-listitem-divider-padding)/2) var(--spectrum-listitem-padding-y);overflow:visible;padding:0}:host{background-color:var(
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
);--spectrum-divider-margin-size:var(--spectrum-global-dimension-size-100)}:host{margin:var(--spectrum-divider-margin-size) 0}:host{display:block}`;h("sp-menu-divider",class extends g{static get styles(){return[Et]}firstUpdated(){this.setAttribute("role","separator")}});var _t=q`:host{--spectrum-progressbar-s-label-gap-y:var(
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
)}.fill{transform-origin:left}:host([dir=rtl]) .fill{transform-origin:right}`;class It extends(z(x(g,""))){constructor(){super(...arguments),this.progress=0,this.overBackground=!1,this.warning=!1,this.critical=!1,this.positive=!1,this.label="",this.sideLabel=!1}static get styles(){return[_t]}render(){return i`<sp-field-label size="${this.size}" class="label">${this.slotHasContent?i``:this.label}<slot>${this.label}</slot></sp-field-label><sp-field-label size="${this.size}" class="percentage">${this.progress}%</sp-field-label><div class="track"><div class="fill" style="transform:scaleX(calc(${this.progress} / 100))"></div></div>`}firstUpdated(e){super.firstUpdated(e),this.setAttribute("role","progressbar")}updated(e){super.updated(e),e.has("progress")&&this.setAttribute("aria-valuenow",""+this.progress),this.label&&e.has("label")&&this.setAttribute("aria-label",this.label)}}function Pt(){return Pt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Pt.apply(this,arguments)}l([c({type:Number})],It.prototype,"progress",void 0),l([c({type:Boolean,reflect:!0,attribute:"over-background"})],It.prototype,"overBackground",void 0),l([c({type:Boolean,reflect:!0})],It.prototype,"warning",void 0),l([c({type:Boolean,reflect:!0})],It.prototype,"critical",void 0),l([c({type:Boolean,reflect:!0})],It.prototype,"positive",void 0),l([c({type:String,reflect:!0})],It.prototype,"label",void 0),l([c({type:Boolean,reflect:!0,attribute:"side-label"})],It.prototype,"sideLabel",void 0),h("sp-meter",It);let Dt=new Map,Ft=!1;try{Ft="exceptZero"===new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay}catch(W){}let Tt=!1;try{Tt="unit"===new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style}catch(W){}const Ut={degree:{narrow:{default:"°","ja-JP":" 度","zh-TW":"度","sl-SI":" °"}}};class Rt{constructor(e,t){void 0===t&&(t={}),this.numberFormatter=void 0,this.options=void 0,this.numberFormatter=function(e,t){void 0===t&&(t={});let{numberingSystem:r}=t;r&&-1===e.indexOf("-u-nu-")&&(e=e+"-u-nu-"+r);if("unit"===t.style&&!Tt){var o;let{unit:e,unitDisplay:r="short"}=t;if(!e)throw new Error('unit option must be provided with style: "unit"');if(null==(o=Ut[e])||!o[r])throw new Error("Unsupported unit "+e+" with unitDisplay = "+r);t=Pt({},t,{style:"decimal"})}let s=e+(t?Object.entries(t).sort(((e,t)=>e[0]<t[0]?-1:1)).join():"");if(Dt.has(s))return Dt.get(s);let i=new Intl.NumberFormat(e,t);return Dt.set(s,i),i}(e,t),this.options=t}format(e){let t="";if(t=Ft||null==this.options.signDisplay?this.numberFormatter.format(e):function(e,t,r){if("auto"===t)return e.format(r);if("never"===t)return e.format(Math.abs(r));{let o=!1;if("always"===t?o=r>0||Object.is(r,0):"exceptZero"===t&&(Object.is(r,-0)||Object.is(r,0)?r=Math.abs(r):o=r>0),o){let t=e.format(-r),o=e.format(r),s=t.replace(o,"").replace(/\u200e|\u061C/,"");return 1!==[...s].length&&console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),t.replace(o,"!!!").replace(s,"+").replace("!!!",o)}return e.format(r)}}(this.numberFormatter,this.options.signDisplay,e),"unit"===this.options.style&&!Tt){var r;let{unit:e,unitDisplay:o="short",locale:s}=this.resolvedOptions(),i=null==(r=Ut[e])?void 0:r[o];t+=i[s]||i.default}return t}formatToParts(e){return this.numberFormatter.formatToParts(e)}resolvedOptions(){let e=this.numberFormatter.resolvedOptions();return Ft||null==this.options.signDisplay||(e=Pt({},e,{signDisplay:this.options.signDisplay})),Tt||"unit"!==this.options.style||(e=Pt({},e,{style:"unit",unit:this.options.unit,unitDisplay:this.options.unitDisplay})),e}}const Nt=new RegExp("^.*\\(.*\\).*$"),Ot=["latn","arab","hanidec"];class jt{constructor(e,t){void 0===t&&(t={}),this.locale=void 0,this.options=void 0,this.locale=e,this.options=t}parse(e){return Gt(this.locale,this.options,e).parse(e)}isValidPartialNumber(e,t,r){return Gt(this.locale,this.options,e).isValidPartialNumber(e,t,r)}getNumberingSystem(e){return Gt(this.locale,this.options,e).options.numberingSystem}}const Kt=new Map;function Gt(e,t,r){let o=Xt(e,t);if(!e.includes("-nu-")&&!o.isValidPartialNumber(r))for(let s of Ot)if(s!==o.options.numberingSystem){let o=Xt(e+(e.includes("-u-")?"-nu-":"-u-nu-")+s,t);if(o.isValidPartialNumber(r))return o}return o}function Xt(e,t){let r=e+(t?Object.entries(t).sort(((e,t)=>e[0]<t[0]?-1:1)).join():""),o=Kt.get(r);return o||(o=new Yt(e,t),Kt.set(r,o)),o}class Yt{constructor(e,t){void 0===t&&(t={}),this.formatter=void 0,this.options=void 0,this.symbols=void 0,this.formatter=new Intl.NumberFormat(e,t),this.options=this.formatter.resolvedOptions(),this.symbols=function(e,t,r){var o,s,i,a,l;let c=e.formatToParts(-10000.111),n=e.formatToParts(10000.111),d=e.formatToParts(1),m=null!=(o=null==(s=c.find((e=>"minusSign"===e.type)))?void 0:s.value)?o:"-",u=null==(i=n.find((e=>"plusSign"===e.type)))?void 0:i.value;u||"exceptZero"!==(null==r?void 0:r.signDisplay)&&"always"!==(null==r?void 0:r.signDisplay)||(u="+");let p=null==(a=c.find((e=>"decimal"===e.type)))?void 0:a.value,h=null==(l=c.find((e=>"group"===e.type)))?void 0:l.value,b=c.filter((e=>!Wt.has(e.type))).map((e=>Jt(e.value))),g=d.filter((e=>!Wt.has(e.type))).map((e=>Jt(e.value))),v=[...new Set([...g,...b])].sort(((e,t)=>t.length-e.length)),f=new RegExp(v.join("|")+"|[\\p{White_Space}]","gu"),x=[...new Intl.NumberFormat(t.locale,{useGrouping:!1}).format(9876543210)].reverse(),y=new Map(x.map(((e,t)=>[e,t]))),w=new RegExp("["+x.join("")+"]","g"),k=e=>String(y.get(e));return{minusSign:m,plusSign:u,decimal:p,group:h,literals:f,numeral:w,index:k}}(this.formatter,this.options,t)}parse(e){let t=this.sanitize(e);t=Qt(t,this.symbols.group,"").replace(this.symbols.decimal,".").replace(this.symbols.minusSign,"-").replace(this.symbols.numeral,this.symbols.index);let r=t?+t:NaN;if(isNaN(r))return NaN;var o;("accounting"===this.options.currencySign&&Nt.test(e)&&(r*=-1),"percent"===this.options.style)&&(r/=100,r=+r.toFixed((null!=(o=this.options.maximumFractionDigits)?o:0)+2));return r}sanitize(e){return e=(e=e.replace(this.symbols.literals,"")).replace("-",this.symbols.minusSign),"arab"===this.options.numberingSystem&&(e=Qt(e=(e=e.replace(",",this.symbols.decimal)).replace(String.fromCharCode(1548),this.symbols.decimal),".",this.symbols.group)),"fr-FR"===this.options.locale&&(e=Qt(e,".",String.fromCharCode(8239))),e}isValidPartialNumber(e,t,r){return void 0===t&&(t=-1/0),void 0===r&&(r=1/0),(e=this.sanitize(e)).startsWith(this.symbols.minusSign)&&t<0?e=e.slice(this.symbols.minusSign.length):this.symbols.plusSign&&e.startsWith(this.symbols.plusSign)&&r>0&&(e=e.slice(this.symbols.plusSign.length)),!e.startsWith(this.symbols.group)&&0===(e=Qt(e,this.symbols.group,"").replace(this.symbols.numeral,"").replace(this.symbols.decimal,"")).length}}const Wt=new Set(["decimal","fraction","integer","minusSign","plusSign","group"]);function Qt(e,t,r){return e.replaceAll?e.replaceAll(t,r):e.split(t).join(r)}function Jt(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}h("sp-icon-chevron75",class extends s{render(){return k(i),w`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" aria-hidden="true" fill="currentColor"><path d="M7.482 4.406l-.001-.001L3.86.783a.84.84 0 00-1.188 1.188L5.702 5l-3.03 3.03A.84.84 0 003.86 9.216l3.621-3.622h.001a.84.84 0 000-1.19z"/></svg>`}});var er=q`:host{--spectrum-alias-border-size-thin:var(
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
)}:host([dir=ltr][invalid]:not([hide-stepper])) .icon{right:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl][invalid]:not([hide-stepper])) .icon{left:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=ltr][valid]:not([hide-stepper])) .icon{right:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl][valid]:not([hide-stepper])) .icon{left:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=ltr][quiet][invalid]:not([hide-stepper])) .icon{right:var(--spectrum-stepper-button-width)}:host([dir=rtl][quiet][invalid]:not([hide-stepper])) .icon{left:var(--spectrum-stepper-button-width)}:host([dir=ltr][quiet][valid]:not([hide-stepper])) .icon{right:var(--spectrum-stepper-button-width)}:host([dir=rtl][quiet][valid]:not([hide-stepper])) .icon{left:var(--spectrum-stepper-button-width)}:host([dir=ltr]:not([hide-stepper])) .icon-workflow{left:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl]:not([hide-stepper])) .icon-workflow{right:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=ltr][quiet]:not([hide-stepper])) .icon-workflow{left:var(--spectrum-stepper-button-width)}:host([dir=rtl][quiet]:not([hide-stepper])) .icon-workflow{right:var(--spectrum-stepper-button-width)}`;function tr(){return e=/^iPhone/,"undefined"!=typeof window&&null!=window.navigator&&e.test(window.navigator.platform);var e}function rr(){return e=/Android/,"undefined"!=typeof window&&null!=window.navigator&&e.test(window.navigator.userAgent);var e}class or extends T{constructor(){super(...arguments),this.focused=!1,this._forcedUnit="",this.formatOptions={},this.hideStepper=!1,this.indeterminate=!1,this.keyboardFocused=!1,this.resolvedLanguage=document.documentElement.lang||navigator.language,this.stepperActive=!1,this.stepModifier=10,this._value=NaN,this._trackingValue="",this.changeCount=0,this.wasIndeterminate=!1}static get styles(){return[...super.styles,er,b]}set value(e){if(e===this.value)return;const t=this._value;this._value=e,this.requestUpdate("value",t)}get value(){return this._value}get inputValue(){return this.indeterminate?this.formattedValue:this.inputElement.value}get valueAsString(){return this._value.toString()}set valueAsString(e){this.value=this.numberParser.parse(e)}get formattedValue(){return isNaN(this.value)?"":this.numberFormatter.format(this.value)+(this.focused?"":this._forcedUnit)}convertValueToNumber(e){return this.numberParser.parse(e)}get _step(){var e;return void 0!==this.step?this.step:"percent"===(null===(e=this.formatOptions)||void 0===e?void 0:e.style)?.01:1}handlePointerdown(e){if(0!==e.button)return void e.preventDefault();this.stepperActive=!0,this.buttons.setPointerCapture(e.pointerId);const t=this.buttons.children[0].getBoundingClientRect(),r=this.buttons.children[1].getBoundingClientRect();this.findChange=e=>{e.clientX>=t.x&&e.clientY>=t.y&&e.clientX<=t.x+t.width&&e.clientY<=t.y+t.height?this.change=e=>this.increment(e.shiftKey?this.stepModifier:1):e.clientX>=r.x&&e.clientY>=r.y&&e.clientX<=r.x+r.width&&e.clientY<=r.y+r.height&&(this.change=e=>this.decrement(e.shiftKey?this.stepModifier:1))},this.findChange(e),this.startChange(e)}startChange(e){this.changeCount=0,this.doChange(e),this.safty=setTimeout((()=>{this.doNextChange(e)}),400)}doChange(e){this.change(e)}handlePointermove(e){this.findChange(e)}handlePointerup(e){this.buttons.releasePointerCapture(e.pointerId),cancelAnimationFrame(this.nextChange),clearTimeout(this.safty),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.stepperActive=!1}doNextChange(e){return this.changeCount+=1,this.changeCount%5==0&&this.doChange(e),requestAnimationFrame((()=>{this.nextChange=this.doNextChange(e)}))}stepBy(e){const t=void 0!==this.min?this.min:0;let r=this.value;r+=e*this._step,isNaN(this.value)?this.value=t:this.value=r,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.indeterminate=!1,this.focus()}increment(e=1){this.stepBy(1*e)}decrement(e=1){this.stepBy(-1*e)}handleKeydown(e){switch(e.code){case"ArrowUp":e.preventDefault(),this.increment(e.shiftKey?this.stepModifier:1),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}));break;case"ArrowDown":e.preventDefault(),this.decrement(e.shiftKey?this.stepModifier:1),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}}onScroll(e){e.preventDefault();const t=e.shiftKey?e.deltaX/Math.abs(e.deltaX):e.deltaY/Math.abs(e.deltaY);0===t||isNaN(t)||this.stepBy(t*(e.shiftKey?this.stepModifier:1))}onFocus(){super.onFocus(),this._trackingValue=this.inputValue,this.keyboardFocused=!0,this.addEventListener("wheel",this.onScroll)}onBlur(){super.onBlur(),this.keyboardFocused=!1,this.removeEventListener("wheel",this.onScroll)}handleFocusin(){this.focused=!0,this.keyboardFocused=!0}handleFocusout(){this.focused=!1,this.keyboardFocused=!1}onChange(){const e=this.convertValueToNumber(this.inputValue);this.wasIndeterminate&&(this.wasIndeterminate=!1,this.indeterminateValue=void 0,isNaN(e))?this.indeterminate=!0:(this.value=e,super.onChange())}onInput(){this.indeterminate&&(this.wasIndeterminate=!0,this.indeterminateValue=this.value,this.inputElement.value=this.inputElement.value.replace("-",""));const{value:e,selectionStart:t}=this.inputElement;if(this.numberParser.isValidPartialNumber(e)){const t=this.convertValueToNumber(e);return!e&&this.indeterminateValue?(this.indeterminate=!0,this._value=this.indeterminateValue):(this.indeterminate=!1,this._value=this.validateInput(t)),void(this._trackingValue=e)}const r=e.length,o=(t||r)-(r-this._trackingValue.length);this.inputElement.value=this.indeterminate?"-":this._trackingValue,this.inputElement.setSelectionRange(o,o)}validateInput(e){if(void 0!==this.min&&(e=Math.max(this.min,e)),void 0!==this.step){const t=(e-(void 0!==this.min?this.min:0))%this.step;if(!(0===t)){1===Math.round(t/this.step)?e+=this.step-t:e-=t}if(void 0!==this.max)for(;e>this.max;)e-=this.step}return void 0!==this.max&&(e=Math.min(this.max,e)),e}get displayValue(){const e=this.focused?"":"-";return this.indeterminate?e:this.formattedValue}clearNumberFormatterCache(){this._numberFormatter=void 0,this._numberParser=void 0}get numberFormatter(){if(!this._numberFormatter||!this._numberFormatterFocused){const e=this.formatOptions,{style:t,unit:r,unitDisplay:o}=e,s=A(e,["style","unit","unitDisplay"]);"unit"!==t&&(s.style=t),this._numberFormatterFocused=new Rt(this.resolvedLanguage,s);try{this._numberFormatter=new Rt(this.resolvedLanguage,this.formatOptions),this._forcedUnit="",this._numberFormatter.format(1)}catch(e){"unit"===t&&(this._forcedUnit=r),this._numberFormatter=this._numberFormatterFocused}}return this.focused?this._numberFormatterFocused:this._numberFormatter}get numberParser(){if(!this._numberParser||!this._numberParserFocused){const e=this.formatOptions,{style:t,unit:r,unitDisplay:o}=e,s=A(e,["style","unit","unitDisplay"]);"unit"!==t&&(s.style=t),this._numberParserFocused=new jt(this.resolvedLanguage,s);try{this._numberParser=new jt(this.resolvedLanguage,this.formatOptions),this._forcedUnit="",this._numberParser.parse("0")}catch(e){"unit"===t&&(this._forcedUnit=r),this._numberParser=this._numberParserFocused}}return this.focused?this._numberParserFocused:this._numberParser}render(){return this.autocomplete="off",i`${super.render()} ${this.hideStepper?i``:i`<span class="buttons" @focusin="${this.handleFocusin}" @focusout="${this.handleFocusout}" ${Ue({start:["pointerdown",this.handlePointerdown],streamInside:[["pointermove","pointerenter","pointerleave","pointerover","pointerout"],this.handlePointermove],end:[["pointerup","pointercancel"],this.handlePointerup]})}><sp-action-button class="stepUp" label="Increment" tabindex="-1" ?focused="${this.focused}" ?disabled="${this.disabled||this.readonly||void 0!==this.max&&this.value===this.max}"><sp-icon-chevron75 slot="icon" class="stepper-icon spectrum-UIIcon-ChevronUp75"></sp-icon-chevron75></sp-action-button><sp-action-button class="stepDown" label="Decrement" tabindex="-1" ?focused="${this.focused}" ?disabled="${this.disabled||this.readonly||void 0!==this.min&&this.value===this.min}"><sp-icon-chevron75 slot="icon" class="stepper-icon spectrum-UIIcon-ChevronDown75"></sp-icon-chevron75></sp-action-button></span>`}`}update(e){(e.has("formatOptions")||e.has("resolvedLanguage"))&&this.clearNumberFormatterCache(),super.update(e)}firstUpdated(e){super.firstUpdated(e),this.multiline=!1,this.addEventListener("keydown",this.handleKeydown)}updated(e){if(e.has("value")||e.has("max")||e.has("min")||e.has("min")){const e=this.numberParser.parse(this.inputValue.replace(this._forcedUnit,""));this.value=this.validateInput(e)}if(e.has("min")||e.has("formatOptions")){let e="numeric";const t=void 0!==this.min&&this.min<0,{maximumFractionDigits:r}=this.formatOptions,o=r&&r>0;tr()?t?e="text":o&&(e="decimal"):rr()&&(t?e="numeric":o&&(e="decimal")),this.inputElement.inputMode=e}}connectedCallback(){super.connectedCallback(),this.resolveLanguage()}disconnectedCallback(){this.resolveLanguage(),super.disconnectedCallback()}resolveLanguage(){const e=new CustomEvent("sp-language-context",{bubbles:!0,composed:!0,detail:{callback:e=>{this.resolvedLanguage=e}},cancelable:!0});this.dispatchEvent(e)}}l([n(".buttons")],or.prototype,"buttons",void 0),l([c({type:Boolean,reflect:!0})],or.prototype,"focused",void 0),l([c({type:Object,attribute:"format-options"})],or.prototype,"formatOptions",void 0),l([c({type:Boolean,reflect:!0,attribute:"hide-stepper"})],or.prototype,"hideStepper",void 0),l([c({type:Boolean,reflect:!0})],or.prototype,"indeterminate",void 0),l([c({type:Boolean,reflect:!0,attribute:"keyboard-focused"})],or.prototype,"keyboardFocused",void 0),l([c({type:Number})],or.prototype,"max",void 0),l([c({type:Number})],or.prototype,"min",void 0),l([c({attribute:!1})],or.prototype,"resolvedLanguage",void 0),l([c({type:Number})],or.prototype,"step",void 0),l([c({type:Number,reflect:!0,attribute:"step-modifier"})],or.prototype,"stepModifier",void 0),l([c({type:Number})],or.prototype,"value",null),h("sp-number-field",or);var sr=Object.freeze({__proto__:null});h("overlay-trigger",le);var ir=q`:host{--spectrum-panel-background-color:var(--spectrum-global-color-gray-100);--spectrum-panel-divider-color:var(--spectrum-alias-border-color-light);--spectrum-panel-divider-width:var(--spectrum-alias-border-size-thin);--spectrum-panel-border-color:var(--spectrum-alias-border-color-dark);--spectrum-panel-box-shadow:var(--spectrum-global-shadow-static-m);--spectrum-panel-border-size:var(--spectrum-global-dimension-size-0);--spectrum-panel-border-radius:var(--spectrum-alias-border-radius-large);--spectrum-panel-padding:var(--spectrum-global-dimension-size-200);--spectrum-panel-header-padding-left:var(
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
);box-shadow:var(--spectrum-panel-box-shadow);padding:0 0 var(--spectrum-panel-padding) 0}:host .panel-header{align-items:center;box-sizing:border-box;display:flex;height:var(--spectrum-panel-header-height);justify-content:space-between;padding:0 var(--spectrum-panel-header-padding-right) 0 var(--spectrum-panel-header-padding-left);width:100%}:host .panel-header[divider]{border-bottom:var(--spectrum-panel-divider-width) solid var(--spectrum-panel-divider-color)}:host .panel-header .header-block{align-items:center;display:flex;height:100%;justify-content:flex-start;overflow:hidden}:host .panel-header .header-block.header-others{justify-content:flex-end}:host .panel-header .header-main .title{color:var(--spectrum-panel-title-color);font-size:var(--spectrum-panel-title-font-size);font-weight:var(--spectrum-panel-title-font-weight);line-height:var(--spectrum-panel-title-line-height);margin-right:var(--spectrum-panel-icon-gap)}:host .panel-header .header-main .back-icon{color:var(--spectrum-panel-icon-main-color);margin-right:var(--spectrum-panel-icon-gap)}:host .panel-header .header-main .close{color:var(--spectrum-panel-icon-others-color);margin-left:var(--spectrum-panel-icon-gap)}::slotted([slot=info]){color:var(--spectrum-panel-icon-others-color)}::slotted([slot=more]){color:var(--spectrum-panel-icon-others-color)}:host .panel-content{height:auto;min-height:var(--spectrum-panel-content-min-height);width:100%}:host .panel-footer{align-items:center;box-sizing:border-box;display:flex;justify-content:flex-end;margin-top:var(--spectrum-panel-footer-margin-top);padding:0 var(--spectrum-panel-padding)}::slotted(*){overscroll-behavior:contain}`;let ar;const lr=function(e,...t){return ar?ar(e,...t):t.reduce(((t,r,o)=>t+r+e[o+1]),e[0])},cr=e=>{ar=e};h("sp-icon-editor-close",class extends s{render(){return cr(i),lr`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.9393 12L4.3986 5.45925L5.45926 4.39859L12 10.9393L18.5407 4.39859L19.6014 5.45925L13.0607 12L19.6014 18.5407L18.5407 19.6014L12 13.0606L5.45926 19.6014L4.3986 18.5407L10.9393 12Z"/></svg>`}});h("sp-icon-editor-arrow-left",class extends s{render(){return cr(i),lr`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.96967 11.4697L13.9697 3.46967L15.0303 4.53033L7.56066 12L15.0303 19.4697L13.9697 20.5303L5.96967 12.5303C5.67678 12.2374 5.67678 11.7626 5.96967 11.4697Z"/></svg>`}});class nr extends(M(H(g,['[slot="info"]','[slot="more"]','[slot="footer"]']))){constructor(){super(...arguments),this.open=!1,this.title="",this.dismissable=!1,this.backable=!1,this.divider=!1,this.cancelLabel="",this.confirmLabel="",this.placement="none",this.tip=!1}static get styles(){return[ir]}get hasFooter(){return this.getSlotContentPresence('[slot="footer"]')}get hasInfo(){return this.getSlotContentPresence('[slot="info"]')}get hasMore(){return this.getSlotContentPresence('[slot="more"]')}doClose(){this.dispatchEvent(new Event("close",{bubbles:!0}))}doBack(){this.dispatchEvent(new Event("back",{bubbles:!0}))}doConfirm(){this.dispatchEvent(new Event("confirm",{bubbles:!0}))}doCancel(){this.dispatchEvent(new Event("cancel",{bubbles:!0}))}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return i`<div class="panel-header" ?divider="${this.divider}"><div class="header-block header-main ${this.backable?"handle-space":""}">${this.backable?i`<sp-icon-editor-arrow-left class="back-icon" slot="icon" @click="${this.doBack}"></sp-icon-editor-arrow-left>`:i``} ${this.title?i`<h2 class="title">${this.title}</h2>`:i``}<slot name="info"></slot></div><div class="header-block header-others ${this.dismissable?"handle-space":""}"><slot name="more"></slot>${this.dismissable?i`<sp-action-button class="icon close" label="Close" quiet size="m" @click="${this.doClose}"><sp-icon-editor-close class="spectrum-UIIcon-Cross500" slot="icon"></sp-icon-editor-close></sp-action-button>`:i``}</div></div><div class="panel-content"><slot></slot></div>${this.hasFooter?i`<div class="panel-footer"><slot name="footer"></slot></div>`:this.confirmLabel||this.cancelLabel?i`<div class="panel-footer"><sp-button-group class="button-group">${this.cancelLabel?i`<sp-button size="m" variant="primary" @click="${this.doCancel}">${this.cancelLabel}</sp-button>`:i``} ${this.confirmLabel?i`<sp-button size="m" variant="cta" @click="${this.doConfirm}">${this.confirmLabel}</sp-button>`:i``}</sp-button-group></div>`:i``}`}}l([c({type:Boolean,reflect:!0})],nr.prototype,"open",void 0),l([c()],nr.prototype,"title",void 0),l([c({type:Boolean,reflect:!0})],nr.prototype,"dismissable",void 0),l([c({type:Boolean,reflect:!0})],nr.prototype,"backable",void 0),l([c({type:Boolean,reflect:!0})],nr.prototype,"divider",void 0),l([c({attribute:"cancel-label"})],nr.prototype,"cancelLabel",void 0),l([c({attribute:"confirm-label"})],nr.prototype,"confirmLabel",void 0),l([c({reflect:!0})],nr.prototype,"placement",void 0),l([c({type:Boolean,reflect:!0})],nr.prototype,"tip",void 0),h("sp-panel",nr);var dr=q`:host{--spectrum-progressbar-s-label-gap-y:var(
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
)}.fill{transform-origin:left;width:100%}:host([dir=rtl]) .fill{transform-origin:right}`;class mr extends(z(g)){constructor(){super(...arguments),this.indeterminate=!1,this.label="",this.overBackground=!1,this.sideLabel=!1,this.progress=0}static get styles(){return[dr]}render(){return i`${this.label?i`<sp-field-label size="${this.size}" class="label">${this.label}</sp-field-label>${this.indeterminate?i``:i`<sp-field-label size="${this.size}" class="percentage">${this.progress}%</sp-field-label>`}`:i``}<div class="track"><div class="fill" style="transform:scaleX(calc(${this.progress} / 100))"></div></div>`}firstUpdated(e){super.firstUpdated(e),this.hasAttribute("role")||this.setAttribute("role","progressbar")}updated(e){super.updated(e),e.has("indeterminate")&&(this.indeterminate?(this.removeAttribute("aria-valuemin"),this.removeAttribute("aria-valuemax")):(this.setAttribute("aria-valuemin","0"),this.setAttribute("aria-valuemax","100"))),!this.indeterminate&&e.has("progress")?this.setAttribute("aria-valuenow",""+this.progress):this.hasAttribute("aria-valuenow")&&this.removeAttribute("aria-valuenow"),this.label&&e.has("label")&&this.setAttribute("aria-label",this.label)}}l([c({type:Boolean,reflect:!0})],mr.prototype,"indeterminate",void 0),l([c({type:String})],mr.prototype,"label",void 0),l([c({type:Boolean,reflect:!0,attribute:"over-background"})],mr.prototype,"overBackground",void 0),l([c({type:Boolean,reflect:!0,attribute:"side-label"})],mr.prototype,"sideLabel",void 0),l([c({type:Number})],mr.prototype,"progress",void 0),h("sp-progress-bar",mr);var ur=q`:host{--spectrum-progresscircle-medium-width:var(
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
)}`;class pr extends g{constructor(){super(...arguments),this.indeterminate=!1,this.label="",this.overBackground=!1,this.progress=0,this.size=""}static get styles(){return[ur]}makeRotation(e){return this.indeterminate?void 0:`transform: rotate(${e}deg);`}render(){const e=[this.makeRotation(3.6*Math.min(this.progress,50)-180),this.makeRotation(3.6*Math.max(this.progress-50,0)-180)];return i`<div class="track"></div><div class="fills">${["Mask1","Mask2"].map(((t,r)=>i`<div class="fill${t}"><div class="fillSub${t}" style="${a(e[r])}"><div class="fill"></div></div></div>`))}</div>`}firstUpdated(e){super.firstUpdated(e),this.hasAttribute("role")||this.setAttribute("role","progressbar")}updated(e){super.updated(e),!this.indeterminate&&e.has("progress")?this.setAttribute("aria-valuenow",""+this.progress):this.hasAttribute("aria-valuenow")&&this.removeAttribute("aria-valuenow"),this.label&&e.has("label")&&this.setAttribute("aria-label",this.label)}}l([c({type:Boolean,reflect:!0})],pr.prototype,"indeterminate",void 0),l([c({type:String})],pr.prototype,"label",void 0),l([c({type:Boolean,reflect:!0,attribute:"over-background"})],pr.prototype,"overBackground",void 0),l([c({type:Number})],pr.prototype,"progress",void 0),l([c({type:String,reflect:!0})],pr.prototype,"size",void 0),h("sp-progress-circle",pr);var hr,br=q`:host{--spectrum-radio-m-circle-border-size:var(
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
)}:host(:focus){outline:0}:host([disabled]){pointer-events:none}`;!function(e){e.button="button",e.default="default"}(hr||(hr={}));class gr extends(x(H(M(g),'[slot="icon"]'))){constructor(){super(...arguments),this.autofocus=!1,this.value="",this.checked=!1,this.disabled=!1,this.emphasized=!1,this.invalid=!1,this.readonly=!1}static get styles(){return[br]}get hasIcon(){return this.slotContentIsPresent}get hasLabel(){return this.slotHasContent}click(){this.disabled||this.activate()}manageAutoFocus(){this.autofocus&&(this.dispatchEvent(new KeyboardEvent("keydown",{code:"Tab"})),this.focus())}handleChange(e){e.stopPropagation(),this.readonly?this.inputElement.checked=this.checked:(this.checked=this.inputElement.checked,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}activate(){this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}handleKeyup(e){"Space"===e.code&&this.activate()}renderDefault(){return i`<div id="input"></div><span id="button"></span> <span id="label" role="presentation"><slot></slot></span>`}renderButton(){const e=[i`<span id="label" role="presentation"><slot></slot></span>`];return this.hasIcon&&e.unshift(i`<slot name="icon" ?icon-only="${!this.hasLabel}"></slot>`),i`<div id="input"></div>${e}`}render(){return this.type===hr.button?this.renderButton():this.renderDefault()}firstUpdated(e){super.firstUpdated(e),this.setAttribute("role","radio"),this.hasAttribute("tabindex")||(this.tabIndex=0),this.manageAutoFocus(),this.addEventListener("click",this.activate),this.addEventListener("keyup",this.handleKeyup)}updated(e){super.updated(e),e.has("invalid")&&(this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")),e.has("checked")&&(this.checked?this.setAttribute("aria-checked","true"):this.setAttribute("aria-checked","false")),e.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabeld"))}}l([c({type:Boolean})],gr.prototype,"autofocus",void 0),l([c({type:String,reflect:!0})],gr.prototype,"value",void 0),l([c({type:Boolean,reflect:!0})],gr.prototype,"checked",void 0),l([c({type:Boolean,reflect:!0})],gr.prototype,"disabled",void 0),l([c({type:Boolean,reflect:!0})],gr.prototype,"emphasized",void 0),l([c({type:Boolean,reflect:!0})],gr.prototype,"invalid",void 0),l([c({type:Boolean,reflect:!0})],gr.prototype,"readonly",void 0),l([c({type:String,reflect:!0})],gr.prototype,"type",void 0),l([n("#input")],gr.prototype,"inputElement",void 0),h("sp-radio",gr);var vr=q`:host{--spectrum-radio-m-circle-border-size:var(
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
)}:host{display:inline-block}:host([type=button]){background-color:var(--spectrum-radio-button-group-m-background-color);border-radius:var(--spectrum-radio-button-group-m-border-radius);padding:var(--spectrum-radio-button-group-m-padding-y) var(--spectrum-radio-button-group-m-padding-x)}`;class fr extends(M(Bt)){constructor(){super(),this.name="",this.label="",this.handleFocusin=()=>{this.addEventListener("focusout",this.handleFocusout),this.addEventListener("keydown",this.handleKeydown),requestAnimationFrame((()=>{const e=this.buttons.find((e=>0===e.tabIndex));e&&(e.tabIndex=-1)}))},this.handleKeydown=e=>{const{code:t}=e,r=this.getRootNode().activeElement;if(!r)return;let o=this.buttons.indexOf(r);if(-1===o)return;const s=(e,t)=>e[(e.length+t)%e.length],i=e=>{for(o+=e;s(this.buttons,o).disabled;)o+=e};switch(t){case"ArrowUp":i(-1);break;case"ArrowLeft":i(this.isLTR?-1:1);break;case"ArrowRight":i(this.isLTR?1:-1);break;case"ArrowDown":i(1);break;case"End":o=this.buttons.length,i(-1);break;case"Home":o=-1,i(1);break;case"PageUp":case"PageDown":const r=[...this.getRootNode().querySelectorAll("sp-radio-group")];if(r.length<2)return;e.preventDefault();const a="PageUp"===t?-1:1;let l=r.indexOf(this)+a,c=s(r,l);for(;!c.buttons.length;)l+=a,c=s(r,l);return void c.focus();default:return}e.preventDefault();const a=s(this.buttons,o);this._setSelected(a.value),a.focus()},this.handleFocusout=e=>{const t=e.relatedTarget;if(t&&this.contains(t))return;const r=this.buttons.find((e=>this.selected?e.checked:!e.disabled));r&&(r.tabIndex=0),this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("focusout",this.handleFocusout)},this.selected="",this.addEventListener("focusin",this.handleFocusin)}static get styles(){return[vr]}get buttons(){return this.defaultNodes.filter((e=>e instanceof gr))}focus(){if(!this.buttons.length)return;const e=this.buttons.find((e=>this.selected?e.checked:!e.disabled));e&&e.focus()}_setSelected(e){if(e===this.selected)return;const t=this.selected,r=e?this.querySelector(`sp-radio[value="${e}"]`):void 0;this.selected=r?e:"";this.dispatchEvent(new Event("change",{cancelable:!0,bubbles:!0,composed:!0}))?this.validateRadios():this.selected=t}render(){return i`<slot></slot>`}firstUpdated(e){super.firstUpdated(e),this.setAttribute("role","radiogroup");const t=this.querySelector("sp-radio[checked]"),r=t?t.value:"";if(this.selected=r||this.selected,this.selected&&this.selected!==r){const e=this.querySelector(`sp-radio[value="${this.selected}"]`);e?e.checked=!0:this.selected=""}this.addEventListener("change",(e=>{if(e.target===this)return;e.stopPropagation();const t=e.target;this._setSelected(t.value)})),this.buttons.map(((e,t)=>{const r=this.selected?e.disabled||e.value!==this.selected?"-1":"0":e.disabled||0!==t?"-1":"0";e.setAttribute("tabindex",r)}))}updated(e){super.updated(e),e.has("selected")&&this.validateRadios(),e.has("label")&&(this.label?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label"))}validateRadios(){let e=!1;this.buttons.map((t=>{t.checked=this.selected===t.value,e=e||t.checked})),e||(this.selected="")}}l([c({type:String})],fr.prototype,"name",void 0),l([c({type:String,reflect:!0})],fr.prototype,"type",void 0),l([p("")],fr.prototype,"defaultNodes",void 0),l([c()],fr.prototype,"label",void 0),l([c({reflect:!0})],fr.prototype,"selected",void 0),h("sp-radio-group",fr),h("sp-sidenav-heading",U);const xr={toNormalized:(e,t,r)=>(e-t)/(r-t),fromNormalized:(e,t,r)=>e*(r-t)+t},yr={fromAttribute:e=>"previous"===e?e:parseFloat(e),toAttribute:e=>e.toString()},wr={fromAttribute:e=>"next"===e?e:parseFloat(e),toAttribute:e=>e.toString()};class kr extends u{constructor(){super(...arguments),this._forcedUnit="",this.value=10,this.dragging=!1,this.highlight=!1,this.name="",this.resolvedLanguage=document.documentElement.lang||navigator.language,this.label="",this.getAriaHandleText=(e,t)=>t.format(e),this.normalization=xr}get handleName(){return this.name}get focusElement(){var e,t;return null!==(t=null===(e=this.handleController)||void 0===e?void 0:e.inputForHandle(this))&&void 0!==t?t:this}update(e){(e.has("formatOptions")||e.has("resolvedLanguage"))&&delete this._numberFormatCache,super.update(e)}updated(e){var t,r;if(e.has("value")){null!=e.get("value")&&(null===(t=this.handleController)||void 0===t||t.setValueFromHandle(this))}null===(r=this.handleController)||void 0===r||r.handleHasChanged(this),super.updated(e)}dispatchInputEvent(){const e=new Event("input",{bubbles:!0,composed:!0});this.dispatchEvent(e)}getNumberFormat(){var e;if(!this._numberFormatCache||this.resolvedLanguage!==this._numberFormatCache.language){let e;try{e=new Rt(this.resolvedLanguage,this.formatOptions),this._forcedUnit=""}catch(t){const r=this.formatOptions||{},{style:o,unit:s,unitDisplay:i}=r,a=A(r,["style","unit","unitDisplay"]);"unit"===o&&(this._forcedUnit=s),e=new Rt(this.resolvedLanguage,a)}this._numberFormatCache={language:this.resolvedLanguage,numberFormat:e}}return null===(e=this._numberFormatCache)||void 0===e?void 0:e.numberFormat}get numberFormat(){if(this.formatOptions)return this.getNumberFormat()}connectedCallback(){super.connectedCallback(),this.resolveLanguage()}disconnectedCallback(){this.resolveLanguage(),super.disconnectedCallback()}resolveLanguage(){const e=new CustomEvent("sp-language-context",{bubbles:!0,composed:!0,detail:{callback:e=>{this.resolvedLanguage=e}},cancelable:!0});this.dispatchEvent(e)}}l([c({type:Number})],kr.prototype,"value",void 0),l([c({type:Boolean,reflect:!0})],kr.prototype,"dragging",void 0),l([c({type:Boolean})],kr.prototype,"highlight",void 0),l([c({type:String})],kr.prototype,"name",void 0),l([c({reflect:!0,converter:yr})],kr.prototype,"min",void 0),l([c({reflect:!0,converter:wr})],kr.prototype,"max",void 0),l([c({attribute:!1})],kr.prototype,"resolvedLanguage",void 0),l([c({type:Number,reflect:!0})],kr.prototype,"step",void 0),l([c({type:Object,attribute:"format-options"})],kr.prototype,"formatOptions",void 0),l([c({type:String})],kr.prototype,"label",void 0),l([c({attribute:!1})],kr.prototype,"getAriaHandleText",void 0),l([c({attribute:!1})],kr.prototype,"normalization",void 0),h("sp-slider-handle",kr);var zr=q`:host{--spectrum-slider-m-handle-border-size:var(
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
)}:host([dir=ltr]) .track:last-of-type:before{background-position:100%}:host([dir=rtl]) .track:first-of-type:before{background-position:100%}.track:not(:first-of-type):not(:last-of-type){padding-left:calc(var(--spectrum-slider-handle-width)/ 2 + var(--spectrum-slider-track-handleoffset))!important;padding-right:calc(var(--spectrum-slider-handle-width)/ 2 + var(--spectrum-slider-track-handleoffset))!important}:host([dir=ltr][variant=range]) .track,:host([dir=rtl][variant=range]) .track{margin:var(--spectrum-slider-range-track-reset);margin-top:calc(var(--spectrum-slider-track-height)/-2)}:host([dir=ltr]) .track:not(:first-of-type):not(:last-of-type){left:var(--spectrum-slider-track-segment-position)}:host([dir=rtl]) .track:not(:first-of-type):not(:last-of-type){right:var(--spectrum-slider-track-segment-position)}.visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:host([label-visibility=value][dir=ltr]) #value{margin-left:auto}:host([label-visibility=value][dir=rtl]) #value{margin-right:auto}`;class Cr{constructor(e){this.handles=new Map,this.model=[],this.handleOrder=[],this.extractModelFromLightDom=()=>{let e=[...this.host.querySelectorAll('[slot="handle"]')];0===e.length&&(e=[this.host]),this.handles=new Map,this.handleOrder=[],e.forEach(((e,t)=>{var r;(null===(r=e.handleName)||void 0===r?void 0:r.length)||(e.name=`handle${t+1}`),this.handles.set(e.handleName,e),this.handleOrder.push(e.handleName),e.handleController=this})),this.requestUpdate()},this.onInputChange=e=>{const t=e.target;t.model.handle.value=t.valueAsNumber,this.requestUpdate(),this.dispatchChangeEvent(t,t.model.handle)},this.onInputFocus=e=>{const t=e.target;let r;try{r=t.matches(":focus-visible")||this.host.matches(".focus-visible")}catch(e){r=this.host.matches(".focus-visible")}t.model.handle.highlight=r,this.requestUpdate()},this.onInputBlur=e=>{e.target.model.handle.highlight=!1,this.requestUpdate()},this.onInputKeydown=e=>{e.target.model.handle.highlight=!0,this.requestUpdate()},this.host=e}get values(){const e={};for(const t of this.handles.values())e[t.handleName]=t.value;return e}get size(){return this.handles.size}inputForHandle(e){if(this.handles.has(e.handleName)){const{input:t}=this.getHandleElements(e);return t}throw new Error(`No input for handle "${e.name}"`)}requestUpdate(){this.host.requestUpdate()}setValueFromHandle(e){const t=this.getHandleElements(e);if(!t)return;const{input:r}=t;r.valueAsNumber===e.value?e.dragging&&e.dispatchInputEvent():(r.valueAsNumber=e.value,e.value=r.valueAsNumber,this.requestUpdate()),e.value=r.valueAsNumber}handleHasChanged(e){e!==this.host&&this.requestUpdate()}formattedValueForHandle(e){var t;const{handle:r}=e,o=null!==(t=r.numberFormat)&&void 0!==t?t:this.host.numberFormat;return r.getAriaHandleText(e.value,o)}get formattedValues(){const e=new Map;for(const t of this.model)e.set(t.name,this.formattedValueForHandle(t));return e}get focusElement(){const{input:e}=this.getActiveHandleElements();return this.host.editable&&!e.model.handle.dragging?this.host.numberField:e}hostConnected(){this.observer||(this.observer=new MutationObserver(this.extractModelFromLightDom)),this.observer.observe(this.host,{subtree:!0,childList:!0}),this.extractModelFromLightDom()}hostDisconnected(){this.observer.disconnect()}hostUpdate(){this.updateModel()}get activeHandle(){return this.handleOrder[this.handleOrder.length-1]}get activeHandleInputId(){const e=this.activeHandle;return`input-${this.model.findIndex((t=>t.name===e))}`}activateHandle(e){const t=this.handleOrder.findIndex((t=>t===e));t>=0&&this.handleOrder.splice(t,1),this.handleOrder.push(e)}getActiveHandleElements(){const e=this.activeHandle,t=this.handles.get(e),r=this.getHandleElements(t);return Object.assign({model:t},r)}getHandleElements(e){if(!this.handleRefMap){this.handleRefMap=new WeakMap;const e=this.host.shadowRoot.querySelectorAll(".handle > input");for(const t of e){const e=t,r=e.parentElement,o=this.handles.get(r.getAttribute("name"));o&&this.handleRefMap.set(o,{input:e,handle:r})}}return this.handleRefMap.get(e)}clearHandleComponentCache(){delete this.handleRefMap}get boundingClientRect(){return this._boundingClientRect||(this._boundingClientRect=this.host.track.getBoundingClientRect()),this._boundingClientRect}updateBoundingRect(){delete this._boundingClientRect}beginTrackDrag(e){const{handle:t}=this.getActiveHandleElements();if(!this.model.find((e=>e.name===this.activeHandle)))return;e.stopPropagation(),e.preventDefault();if(t.dispatchEvent(new PointerEvent("pointerdown",e))){const t=this.model.find((e=>e.name===this.activeHandle));t&&this.handlePointermove(e,t)}}handlePointerdown(e,t){const r=e.target;this.host.disabled||0!==e.button?e.preventDefault():(this.updateBoundingRect(),this.host.labelEl.click(),this.draggingHandle=t.handle,t.handle.dragging=!0,this.activateHandle(t.name),r.setPointerCapture(e.pointerId),this.host.requestUpdate())}handlePointerup(e,t){const r=e.target,o=r.querySelector("input");this.host.labelEl.click(),t.handle.highlight=!1,delete this.draggingHandle,t.handle.dragging=!1,this.requestUpdate(),r.releasePointerCapture(e.pointerId),this.dispatchChangeEvent(o,t.handle)}handlePointermove(e,t){if(!this.draggingHandle)return;e.stopPropagation();const{input:r}=this.getHandleElements(t.handle);r.value=this.calculateHandlePosition(e,t).toString(),t.handle.value=parseFloat(r.value),this.requestUpdate()}dispatchChangeEvent(e,t){e.valueAsNumber=t.value;const r=new Event("change",{bubbles:!0,composed:!0});t.dispatchEvent(r)}calculateHandlePosition(e,t){const r=this.boundingClientRect,o=r.left,s=(e.clientX-o)/r.width,i=t.normalization.fromNormalized(s,t.range.min,t.range.max);return this.host.isLTR?i:t.range.max-i}renderHandle(e,t,r,o){var s;const l={handle:!0,dragging:(null===(s=this.draggingHandle)||void 0===s?void 0:s.handleName)===e.name,"handle-highlight":e.highlight},c={[this.host.isLTR?"left":"right"]:100*e.normalizedValue+"%","z-index":r.toString(),"background-color":`var(--spectrum-slider-handle-background-color-${t}, var(--spectrum-slider-handle-default-background-color))`,"border-color":`var(--spectrum-slider-handle-border-color-${t}, var(-spectrum-slider-handle-default-border-color))`},n=o?`label input-${t}`:"label";return i`<div class="${S(l)}" name="${e.name}" style="${Y(c)}" ${Ue({start:["pointerdown",t=>this.handlePointerdown(t,e)],streamInside:["pointermove",t=>this.handlePointermove(t,e)],end:[["pointerup","pointercancel"],t=>this.handlePointerup(t,e)]})} role="presentation"><input type="range" class="input" id="input-${t}" min="${e.clamp.min}" max="${e.clamp.max}" step="${e.step}" value="${e.value}" aria-disabled="${a(this.host.disabled?"true":void 0)}" tabindex="${a(this.host.editable?-1:void 0)}" aria-label="${a(e.ariaLabel)}" aria-labelledby="${n}" aria-valuetext="${this.formattedValueForHandle(e)}" @change="${this.onInputChange}" @focus="${this.onInputFocus}" @blur="${this.onInputBlur}" @keydown="${this.onInputKeydown}" .model="${e}"></div>`}render(){return this.clearHandleComponentCache(),this.model.map(((e,t)=>{const r=this.handleOrder.indexOf(e.name)+1;return this.renderHandle(e,t,r,this.model.length>1)}))}trackSegments(){const e=this.model.map((e=>e.normalizedValue));return e.sort(((e,t)=>e-t)),e.unshift(0),e.map(((e,t,r)=>{var o;return[e,null!==(o=r[t+1])&&void 0!==o?o:1]}))}updateModel(){const e=[...this.handles.values()],t=t=>{const r=e[t],o=e[t-1],s=e[t+1],i="number"==typeof r.min?r.min:this.host.min,a="number"==typeof r.max?r.max:this.host.max,l={range:{min:i,max:a},clamp:{min:i,max:a}};if("previous"===r.min)if(o){for(let r=t-1;r>=0;r--){const t=e[r];if("number"==typeof t.min){l.range.min=t.min;break}}l.clamp.min=Math.max(o.value,l.range.min)}else console.warn('First slider handle cannot have attribute min="previous"');if("next"===r.max)if(s){for(let r=t+1;r<e.length;r++){const t=e[r];if("number"==typeof t.max){l.range.max=t.max;break}}l.clamp.max=Math.min(s.value,l.range.max)}else console.warn('Last slider handle cannot have attribute max="next"');return l},r=e.map(((e,r)=>{var o;const s=t(r),{toNormalized:i}=e.normalization,a=Math.max(Math.min(e.value,s.clamp.max),s.clamp.min),l=i(a,s.range.min,s.range.max);return Object.assign({name:e.handleName,value:a,normalizedValue:l,highlight:e.highlight,step:null!==(o=e.step)&&void 0!==o?o:this.host.step,normalization:e.normalization,handle:e,ariaLabel:e!==this.host&&(null==e?void 0:e.label.length)>0?e.label:void 0},s)}));this.model=r}async handleUpdatesComplete(){const e=[...this.handles.values()].filter((e=>e!==this.host)).map((e=>e.updateComplete));await Promise.all(e)}}const Lr=["filled","ramp","range","tick"];class Hr extends(x(kr,"")){constructor(){super(...arguments),this.handleController=new Cr(this),this._editable=!1,this.hideStepper=!1,this.type="",this._variant="",this.getAriaValueText=e=>{const t=[...e.values()];return 2===t.length?`${t[0]}${this._forcedUnit} - ${t[1]}${this._forcedUnit}`:t.join(`${this._forcedUnit}, `)+this._forcedUnit},this.min=0,this.max=100,this.step=1,this.tickStep=0,this.tickLabels=!1,this.disabled=!1,this._numberFieldInput=Promise.resolve()}static get styles(){return[zr]}get editable(){return this._editable}set editable(e){if(e===this.editable)return;const t=this.editable;this._editable=this.handleController.size<2&&e,this.editable&&(this._numberFieldInput=Promise.resolve().then((function(){return sr}))),t!==this.editable&&this.requestUpdate("editable",t)}set variant(e){const t=this.variant;e!==this.variant&&(Lr.includes(e)?(this.setAttribute("variant",e),this._variant=e):(this.removeAttribute("variant"),this._variant=""),this.requestUpdate("variant",t))}get variant(){return this._variant}get values(){return this.handleController.values}get handleName(){return"value"}get ariaValueText(){return this.getAriaValueText?this.getAriaValueText(this.handleController.formattedValues):`${this.value}${this._forcedUnit}`}get numberFormat(){return this.getNumberFormat()}get focusElement(){return this.handleController.focusElement}handleLabelClick(e){this.editable&&(e.preventDefault(),this.focus())}render(){return i`${this.renderLabel()} ${this.renderTrack()} ${this.editable?i`<sp-number-field .formatOptions="${this.formatOptions||{}}" id="number-field" min="${this.min}" max="${this.max}" step="${this.step}" value="${this.value}" ?hide-stepper="${this.hideStepper}" ?disabled="${this.disabled}" @input="${this.handleNumberInput}" @change="${this.handleNumberChange}"></sp-number-field>`:i``}`}connectedCallback(){super.connectedCallback(),this.handleController.hostConnected()}disconnectedCallback(){super.disconnectedCallback(),this.handleController.hostDisconnected()}update(e){this.handleController.hostUpdate(),super.update(e)}renderLabel(){const e="none"===this.labelVisibility||"value"===this.labelVisibility,t="none"===this.labelVisibility||"text"===this.labelVisibility;return i`<div id="labelContainer"><sp-field-label class="${S({"visually-hidden":e})}" ?disabled="${this.disabled}" id="label" for="${this.editable?"number-field":this.handleController.activeHandleInputId}" @click="${this.handleLabelClick}">${this.slotHasContent?i``:this.label}<slot>${this.label}</slot></sp-field-label><output class="${S({"visually-hidden":t})}" id="value" aria-live="off" for="input">${this.ariaValueText}</output></div>`}renderRamp(){return"ramp"!==this.variant?i``:i`<div id="ramp"><svg viewBox="0 0 240 16" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M240,4v8c0,2.3-1.9,4.1-4.2,4L1,9C0.4,9,0,8.5,0,8c0-0.5,0.4-1,1-1l234.8-7C238.1-0.1,240,1.7,240,4z"></path></svg></div>`}renderTicks(){if("tick"!==this.variant)return i``;const e=this.tickStep||this.step,t=(this.max-this.min)/e,r=t%1!=0,o=new Array(Math.floor(t+1));return o.fill(0,0,t+1),i`<div class="${r?"not-exact ":""}ticks" style="${a(r?`--sp-slider-tick-offset: calc(100% / ${this.max} * ${this.tickStep}`:void 0)}">${o.map(((t,r)=>i`<div class="tick">${this.tickLabels?i`<div class="tickLabel">${r*e}</div>`:i``}</div>`))}</div>`}renderTrackSegment(e,t){return"ramp"===this.variant?i``:i`<div class="track" style="${Y(this.trackSegmentStyles(e,t))}" role="presentation"></div>`}renderTrack(){const e=this.handleController.trackSegments(),t=[{id:"track0",html:this.renderTrackSegment(...e[0])},{id:"ramp",html:this.renderRamp()},{id:"ticks",html:this.renderTicks()},{id:"handles",html:this.handleController.render()},...e.slice(1).map((([e,t],r)=>({id:`track${r+1}`,html:this.renderTrackSegment(e,t)})))];return i`<div id="track" @pointerdown="${this.handleTrackPointerdown}"><div id="controls">${X(t,(e=>e.id),(e=>e.html))}</div></div>`}handleTrackPointerdown(e){e.target.classList.contains("handle")||this.handleController.beginTrackDrag(e)}handleNumberInput(e){var t;const{value:r}=e.target;!(null===(t=e.target)||void 0===t?void 0:t.stepperActive)||isNaN(r)?e.stopPropagation():this.value=r}handleNumberChange(e){var t;const{value:r}=e.target;isNaN(r)?(e.target.value=this.value,e.stopPropagation()):(this.value=r,(null===(t=e.target)||void 0===t?void 0:t.stepperActive)||this.dispatchInputEvent())}trackSegmentStyles(e,t){const r=t-e;return{width:100*r+"%","--spectrum-slider-track-background-size":1/r*100+"%","--spectrum-slider-track-segment-position":100*e+"%"}}async getUpdateComplete(){const e=await super.getUpdateComplete();return this.editable&&(await this._numberFieldInput,await this.numberField.updateComplete),await this.handleController.handleUpdatesComplete(),e}}l([c({type:Boolean,reflect:!0})],Hr.prototype,"editable",null),l([c({type:Boolean,reflect:!0,attribute:"hide-stepper"})],Hr.prototype,"hideStepper",void 0),l([c()],Hr.prototype,"type",void 0),l([c({type:String})],Hr.prototype,"variant",null),l([c({attribute:!1})],Hr.prototype,"getAriaValueText",void 0),l([c({type:String,reflect:!0,attribute:"label-visibility"})],Hr.prototype,"labelVisibility",void 0),l([c({type:Number,reflect:!0})],Hr.prototype,"min",void 0),l([c({type:Number,reflect:!0})],Hr.prototype,"max",void 0),l([c({type:Number})],Hr.prototype,"step",void 0),l([c({type:Number,attribute:"tick-step"})],Hr.prototype,"tickStep",void 0),l([c({type:Boolean,attribute:"tick-labels"})],Hr.prototype,"tickLabels",void 0),l([c({type:Boolean,reflect:!0})],Hr.prototype,"disabled",void 0),l([n("#label")],Hr.prototype,"labelEl",void 0),l([n("#number-field")],Hr.prototype,"numberField",void 0),l([n("#track")],Hr.prototype,"track",void 0),h("sp-slider",Hr);var Mr=q`:host{--spectrum-alias-border-radius-small:var(
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
)}sp-button{--spectrum-button-primary-m-border-radius:calc(var(--spectrum-button-padding-y) + var(--spectrum-icon-tshirt-size-height)/2 + var(--spectrum-alias-border-size-thick))}sp-popover{display:none}::slotted(sp-menu){display:none}.more-medium{height:18px;margin:1px -4px 0;width:18px}`;const Vr={s:"spectrum-UIIcon-ChevronDown75",m:"spectrum-UIIcon-ChevronDown100",l:"spectrum-UIIcon-ChevronDown200",xl:"spectrum-UIIcon-ChevronDown300"};class Br extends(z(y)){constructor(){super(...arguments),this.left=!1,this.variant="cta",this.type="field",this.listRole="menu",this.itemRole="menuitem"}static get styles(){return[Mr,b]}get target(){return this}focus(){this.disabled||(this.left?this.trigger.focus():super.focus())}sizePopover(e){e.style.setProperty("min-width",`${this.offsetWidth}px`)}passClick(){const e="more"===this.type?this.menuItems[0]:this.selectedItem||this.menuItems[0];e&&e.click()}get buttonContent(){var e;return[i`<div id="label" role="presentation" class="${a(this.value?void 0:"placeholder")}">${(null===(e=this.selectedItem)||void 0===e?void 0:e.itemText)||""}</div>`]}get renderPopover(){return i`<sp-popover id="popover" @sp-overlay-closed="${this.onOverlayClosed}"><sp-menu id="menu" role="${this.listRole}" @change="${this.handleChange}" .selects="${this.selects}"></sp-menu></sp-popover>`}update(e){e.has("type")&&("more"===this.type?this.selects=void 0:this.selects="single"),super.update(e)}render(){const e=[i`<sp-button aria-haspopup="true" aria-label="${a(this.label||void 0)}" id="button" class="button ${this.variant}" @click="${this.passClick}" ?disabled="${this.disabled}" variant="${this.variant}" size="${this.size}">${this.buttonContent}</sp-button>`,i`<sp-button class="button trigger ${this.variant}" @blur="${this.onButtonBlur}" @click="${this.onButtonClick}" @focus="${this.onButtonFocus}" ?disabled="${this.disabled}" aria-label="More" variant="${this.variant}" size="${this.size}">${"field"===this.type?i`<sp-icon-chevron100 class="icon ${Vr[this.size]}"></sp-icon-chevron100>`:i`<sp-icon-more class="icon"></sp-icon-more>`}</sp-button>`];return this.left&&e.reverse(),i`${e} ${this.renderPopover}`}updated(e){super.updated(e),e.has("value")&&this.manageSplitButtonItems()}manageSelection(){super.manageSelection(),this.manageSplitButtonItems()}async manageSplitButtonItems(){if(this.menuItems.length)return"more"===this.type?(this.menuItems[0].hidden=!0,this.menuItems.forEach((e=>e.selected=!1)),this.selectedItem=this.menuItems[0]):this.selectedItem=this.selectedItem||this.menuItems[0],void(this.value=this.selectedItem.value);await this.updateComplete,this.menuItems.length&&this.manageSplitButtonItems()}}l([c({type:Boolean,reflect:!0})],Br.prototype,"left",void 0),l([c({reflect:!0})],Br.prototype,"variant",void 0),l([c({type:String})],Br.prototype,"type",void 0),l([n(".trigger")],Br.prototype,"trigger",void 0),h("sp-split-button",Br);var $r=q`:host{--spectrum-dragbar-gripper-width:var(
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
)}:host{--spectrum-split-view-first-pane-size:50%}::slotted(*){overflow:auto}::slotted(:first-child){order:1}:host(:not([vertical])) ::slotted(:first-child:not(:last-child)){width:var(--spectrum-split-view-first-pane-size)}:host([vertical]) ::slotted(:first-child:not(:last-child)){height:var(--spectrum-split-view-first-pane-size)}::slotted(:nth-child(2)){flex:1;order:3}::slotted(:nth-child(n+3)){display:none}#splitter{height:auto;order:2}:host([resizable]) #splitter{background-clip:content-box;cursor:ew-resize;margin:0 calc(-1*var(--spectrum-global-dimension-static-size-125));padding:0 var(--spectrum-global-dimension-static-size-125)}:host([vertical][resizable]) #splitter{background-clip:content-box;cursor:ns-resize;margin:calc(-1*var(--spectrum-global-dimension-static-size-125)) 0;padding:var(--spectrum-global-dimension-static-size-125) 0}:host([resizable][dir=ltr]) #splitter.is-resized-start,:host([resizable][dir=rtl]) #splitter.is-resized-end{cursor:e-resize}:host([resizable][dir=ltr]) #splitter.is-resized-end,:host([resizable][dir=rtl]) #splitter.is-resized-start{cursor:w-resize}:host([vertical][resizable]) #splitter.is-resized-start{cursor:s-resize}:host([vertical][resizable]) #splitter.is-resized-end{cursor:n-resize}:host([resizable][collapsible]) #splitter.is-resized-end,:host([resizable][collapsible]) #splitter.is-resized-start{cursor:ew-resize}:host([resizable][dir=ltr][collapsible]) #splitter.is-collapsed-start,:host([resizable][dir=rtl][collapsible]) #splitter.is-collapsed-end{cursor:e-resize}:host([resizable][dir=ltr][collapsible]) #splitter.is-collapsed-end,:host([resizable][dir=rtl][collapsible]) #splitter.is-collapsed-start{cursor:w-resize}:host([vertical][resizable][collapsible]) #splitter.is-collapsed-start{cursor:s-resize}:host([vertical][resizable][collapsible]) #splitter.is-collapsed-end{cursor:n-resize}:host([vertical][resizable][collapsible]) #splitter.is-resized-end,:host([vertical][resizable][collapsible]) #splitter.is-resized-start{cursor:ns-resize}:host([dir=ltr][resizable]) #gripper{left:calc(var(--spectrum-global-dimension-static-size-125) + (var(--spectrum-dragbar-gripper-width,var(--spectrum-global-dimension-static-size-50)) + 2*var(--spectrum-dragbar-gripper-border-width-horizontal,3px) - var(--spectrum-dragbar-handle-width,var(--spectrum-global-dimension-static-size-25)))/ 2*-1)}:host([dir=rtl][resizable]) #gripper{right:calc(var(--spectrum-global-dimension-static-size-125) + (var(--spectrum-dragbar-gripper-width,var(--spectrum-global-dimension-static-size-50)) + 2*var(--spectrum-dragbar-gripper-border-width-horizontal,3px) - var(--spectrum-dragbar-handle-width,var(--spectrum-global-dimension-static-size-25)))/ 2*-1)}:host([vertical][resizable]) #gripper{left:50%;margin-top:var(--spectrum-global-dimension-static-size-125);right:50%}:host([dir=ltr][resizable]) #splitter.is-collapsed-start #gripper{left:var(--spectrum-global-dimension-static-size-125)}:host([dir=rtl][resizable]) #splitter.is-collapsed-start #gripper{right:var(--spectrum-global-dimension-static-size-125)}:host([vertical][resizable]) #splitter.is-collapsed-start #gripper{left:50%;right:50%}:host([dir=ltr][resizable]) #splitter.is-collapsed-end #gripper{left:var(--spectrum-global-dimension-static-size-25)}:host([dir=rtl][resizable]) #splitter.is-collapsed-end #gripper{right:var(--spectrum-global-dimension-static-size-25)}:host([vertical][resizable]) #splitter.is-collapsed-end #gripper{left:50%;margin-top:0;right:50%;top:var(--spectrum-global-dimension-static-size-25)}`;class Ar extends g{constructor(){super(),this.vertical=!1,this.resizable=!1,this.collapsible=!1,this.primaryMin=0,this.primaryMax=3840,this.secondaryMin=0,this.secondaryMax=3840,this.firstPaneSize="auto",this.enoughChildren=!1,this.viewSize=0,this.offset=0,this.minPos=0,this.maxPos=3840;const e=window.ResizeObserver;e&&(this.observer=new e((()=>{this.rect=void 0,this.updateMinMax()})))}static get styles(){return[$r]}connectedCallback(){var e;super.connectedCallback(),null===(e=this.observer)||void 0===e||e.observe(this)}disconnectedCallback(){var e;null===(e=this.observer)||void 0===e||e.unobserve(this),super.disconnectedCallback()}get splitterSize(){return this._splitterSize||(this._splitterSize=this.splitter&&Math.round(parseFloat(window.getComputedStyle(this.splitter).getPropertyValue(this.vertical?"height":"width")))||2),this._splitterSize}render(){const e={"is-resized-start":this.splitterPos===this.minPos,"is-resized-end":this.splitterPos&&this.splitterPos>this.splitterSize&&this.splitterPos===this.maxPos,"is-collapsed-start":0===this.splitterPos,"is-collapsed-end":this.splitterPos&&this.splitterPos>=Math.max(this.splitterSize,this.viewSize-this.splitterSize)};return i`<slot @slotchange="${this.onContentSlotChange}" style="--spectrum-split-view-first-pane-size:${this.firstPaneSize}"></slot>${this.enoughChildren?i`<div id="splitter" class="${S(e)}" role="separator" aria-label="${a(this.label||void 0)}" tabindex="${a(this.resizable?"0":void 0)}" @keydown="${this.onKeydown}" ${Ue({start:["pointerdown",this.onPointerdown],streamInside:["pointermove",this.onPointermove],end:[["pointerup","pointercancel"],this.onPointerup]})}>${this.resizable?i`<div id="gripper"></div>`:i``}</div>`:V}`}onContentSlotChange(){this.enoughChildren=this.children.length>1,this.checkResize()}onPointerdown(e){!this.resizable||e.button&&0!==e.button?e.preventDefault():(this.splitter.setPointerCapture(e.pointerId),this.offset=this.getOffset())}onPointermove(e){e.preventDefault();let t=this.vertical||this.isLTR?this.getPosition(e)-this.offset:this.offset-this.getPosition(e);this.collapsible&&t<this.minPos-50&&(t=0),this.collapsible&&t>this.maxPos+50&&(t=this.viewSize-this.splitterSize),this.updatePosition(t)}onPointerup(e){this.splitter.releasePointerCapture(e.pointerId)}getOffset(){this.rect||(this.rect=this.getBoundingClientRect());const e=this.isLTR?this.rect.left:this.rect.right;return this.vertical?this.rect.top:e}getPosition(e){return this.vertical?e.clientY:e.clientX}movePosition(e,t){e.preventDefault(),void 0!==this.splitterPos&&this.updatePosition(this.splitterPos+t)}onKeydown(e){if(!this.resizable)return;let t=0;const r=this.isLTR||this.vertical;switch(e.key){case"Home":return e.preventDefault(),void this.updatePosition(this.collapsible?0:this.minPos);case"End":return e.preventDefault(),void this.updatePosition(this.collapsible?this.viewSize-this.splitterSize:this.maxPos);case"ArrowLeft":t=r?-1:1;break;case"ArrowRight":t=r?1:-1;break;case"ArrowUp":case"PageUp":t=this.vertical?-1:1;break;case"ArrowDown":case"PageDown":t=this.vertical?1:-1}if(0!==t){const r=e.key.startsWith("Page")?50:10;this.movePosition(e,r*t)}}async checkResize(){if(this.enoughChildren&&(this.updateMinMax(),void 0===this.splitterPos)){const e=await this.calcStartPos();this.updatePosition(e)}}updateMinMax(){this.viewSize=this.vertical?this.offsetHeight:this.offsetWidth,this.minPos=Math.max(this.primaryMin,this.viewSize-this.secondaryMax),this.maxPos=Math.min(this.primaryMax,this.viewSize-Math.max(this.secondaryMin,this.splitterSize))}updatePosition(e){let t=this.getLimitedPosition(e);this.collapsible&&e<=0&&(t=0),this.collapsible&&e>this.maxPos&&e>=this.viewSize-this.splitterSize&&(t=this.viewSize-this.splitterSize),t!==this.splitterPos&&(this.splitterPos=t,this.dispatchChangeEvent())}getLimitedPosition(e){return e<=this.minPos?this.minPos:e>=this.maxPos?this.maxPos:Math.max(this.minPos,Math.min(this.maxPos,e))}async calcStartPos(){if(void 0!==this.primarySize&&/^\d+(px)?$/.test(this.primarySize))return parseInt(this.primarySize,10);if(void 0!==this.primarySize&&/^\d+%$/.test(this.primarySize))return parseInt(this.primarySize,10)*this.viewSize/100;if("auto"===this.primarySize){this.firstPaneSize="auto";const e=this.paneSlot.assignedNodes({flatten:!0}).find((e=>e instanceof HTMLElement));if(void 0!==e.updateComplete&&await e.updateComplete,e){const t=window.getComputedStyle(e).getPropertyValue(this.vertical?"height":"width"),r=parseFloat(t);if(!isNaN(r))return this.getLimitedPosition(Math.ceil(r))}}return this.viewSize/2}dispatchChangeEvent(){const e=new Event("change",{bubbles:!0,composed:!0});this.dispatchEvent(e)}firstUpdated(e){super.firstUpdated(e),this.checkResize()}updated(e){super.updated(e),e.has("primarySize")&&(this.splitterPos=void 0,this.checkResize()),e.has("splitterPos")&&void 0!==this.splitterPos&&this.enoughChildren&&(this.firstPaneSize=`${Math.round(this.splitterPos)}px`)}}l([c({type:Boolean,reflect:!0})],Ar.prototype,"vertical",void 0),l([c({type:Boolean,reflect:!0})],Ar.prototype,"resizable",void 0),l([c({type:Boolean,reflect:!0})],Ar.prototype,"collapsible",void 0),l([c({type:Number,attribute:"primary-min"})],Ar.prototype,"primaryMin",void 0),l([c({type:Number,attribute:"primary-max"})],Ar.prototype,"primaryMax",void 0),l([c({type:String,attribute:"primary-size"})],Ar.prototype,"primarySize",void 0),l([c({type:Number,attribute:"secondary-min"})],Ar.prototype,"secondaryMin",void 0),l([c({type:Number,attribute:"secondary-max"})],Ar.prototype,"secondaryMax",void 0),l([c({type:Number,reflect:!0,attribute:"splitter-pos"})],Ar.prototype,"splitterPos",void 0),l([c({type:String,attribute:!1})],Ar.prototype,"firstPaneSize",void 0),l([c()],Ar.prototype,"label",void 0),l([c({type:Boolean,attribute:!1})],Ar.prototype,"enoughChildren",void 0),l([c({type:Number})],Ar.prototype,"viewSize",void 0),l([n("slot")],Ar.prototype,"paneSlot",void 0),l([n("#splitter")],Ar.prototype,"splitter",void 0),h("sp-split-view",Ar);var Sr=q`:host{--spectrum-statuslight-info-s-text-font-weight:var(
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
)}`;class qr extends(z(g)){constructor(){super(...arguments),this.disabled=!1,this.variant="info"}static get styles(){return[Sr]}render(){return i`<slot></slot>`}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}}l([c({type:Boolean,reflect:!0})],qr.prototype,"disabled",void 0),l([c({reflect:!0})],qr.prototype,"variant",void 0),h("sp-status-light",qr);var Zr=q`:host{--spectrum-switch-m-handle-border-size:var(
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
);--spectrum-switch-track-width:var(--spectrum-global-dimension-size-325);--spectrum-switch-handle-border-radius:50%}:host([disabled]){pointer-events:none}:host([dir=ltr][checked]) #input+#switch:before{transform:translateX(calc(var(--spectrum-switch-track-width) - var(--spectrum-switch-handle-size)))}:host([dir=rtl][checked]) #input+#switch:before{transform:translateX(calc(var(--spectrum-switch-handle-size) - var(--spectrum-switch-track-width)))}`;var Er=q`#switch:before{transition:background var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out}`;class _r extends Ve{constructor(){super(...arguments),this.emphasized=!1}static get styles(){return window.hasOwnProperty("ShadyDOM")?[Zr,Er]:[Zr]}render(){return i`${super.render()} <span id="switch"></span> <label id="label" for="input"><slot></slot></label>`}firstUpdated(e){super.firstUpdated(e),this.inputElement.setAttribute("role","switch")}updated(e){e.has("checked")&&this.inputElement.setAttribute("aria-checked",this.checked?"true":"false")}}l([c({type:Boolean,reflect:!0})],_r.prototype,"emphasized",void 0),h("sp-switch",_r);var Ir=q`:host{--spectrum-tabs-m-compact-item-height:var(--spectrum-alias-item-height-m);--spectrum-tabs-m-compact-vertical-item-height:var(
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
);line-height:1;margin:var(--sp-tab-vertial-margin-y) 0}#itemLabel[hidden]{display:none}`;class Pr extends(M(x(H(g,'[slot="icon"]'),""))){constructor(){super(...arguments),this.disabled=!1,this.label="",this.selected=!1,this.vertical=!1,this.value=""}static get styles(){return[Ir]}get hasIcon(){return this.slotContentIsPresent}get hasLabel(){return!!this.label||this.slotHasContent}render(){return i`${this.hasIcon?i`<slot name="icon"></slot>`:i``} <label id="itemLabel" ?hidden="${!this.hasLabel}">${this.slotHasContent?i``:this.label}<slot>${this.label}</slot></label>`}firstUpdated(e){super.firstUpdated(e),this.setAttribute("role","tab"),this.hasAttribute("id")||(this.id="sp-tab-"+Pr.instanceCount++)}updated(e){super.updated(e),e.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.setAttribute("tabindex",this.selected?"0":"-1")),e.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}}Pr.instanceCount=0,l([c({type:Boolean,reflect:!0})],Pr.prototype,"disabled",void 0),l([c({reflect:!0})],Pr.prototype,"label",void 0),l([c({type:Boolean,reflect:!0})],Pr.prototype,"selected",void 0),l([c({type:Boolean,reflect:!0})],Pr.prototype,"vertical",void 0),l([c({type:String,reflect:!0})],Pr.prototype,"value",void 0),h("sp-tab",Pr);var Dr=q`:host{--spectrum-tabs-m-compact-item-height:var(--spectrum-alias-item-height-m);--spectrum-tabs-m-compact-vertical-item-height:var(
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
)}#selectionIndicator.first-position{transition:none}`;const Fr={vertical:["ArrowUp","ArrowDown"],"vertical-right":["ArrowUp","ArrowDown"],horizontal:["ArrowLeft","ArrowRight"]};class Tr extends u{constructor(){super(...arguments),this.auto=!1,this.direction="horizontal",this.label="",this.selectionIndicatorStyle="transform: translateX(0px) scaleX(0) scaleY(0)",this.shouldAnimate=!1,this._selected="",this.tabs=[],this.shouldApplyFocusVisible=!1,this.manageFocusinType=()=>{if(this.shouldApplyFocusVisible)return;const e=()=>{this.shouldApplyFocusVisible=!1,this.removeEventListener("focusin",e)};this.addEventListener("focusin",e)},this.onClick=e=>{const t=e.target;this.disabled||t.disabled||(this.shouldAnimate=!0,this.selectTarget(t),this.shouldApplyFocusVisible&&e.composedPath()[0]!==this&&(this.dispatchEvent(new KeyboardEvent("keydown",{code:"Tab"})),t.focus()))},this.onKeyDown=e=>{if("Enter"===e.code||"Space"===e.code){e.preventDefault();const t=e.target;t&&this.selectTarget(t)}},this.updateCheckedState=()=>{if(this.tabs.length||(this.tabs=[...this.querySelectorAll('[role="tab"]')]),this.tabs.forEach((e=>{e.removeAttribute("selected")})),this.selected){const e=this.tabs.find((e=>e.value===this.selected));e?e.selected=!0:this.selected=""}else{const e=this.tabs[0];e&&e.setAttribute("tabindex","0")}this.updateSelectionIndicator(),this.tabChangeResolver()},this.updateSelectionIndicator=async()=>{const e=this.tabs.find((e=>e.selected));if(!e)return void(this.selectionIndicatorStyle="transform: translateX(0px) scaleX(0) scaleY(0)");await Promise.all([e.updateComplete,document.fonts?document.fonts.ready:Promise.resolve()]);const t=e.getBoundingClientRect(),r=this.getBoundingClientRect();if("horizontal"===this.direction){const e=t.width,o="ltr"===this.dir?t.left-r.left:t.right-r.right;this.selectionIndicatorStyle=`transform: translateX(${o}px) scaleX(${"ltr"===this.dir?e:-1*e});`}else{const e=t.height,o=t.top-r.top;this.selectionIndicatorStyle=`transform: translateY(${o}px) scaleY(${e});`}},this.tabChangePromise=Promise.resolve(),this.tabChangeResolver=function(){}}static get styles(){return[Dr]}get selected(){return this._selected}set selected(e){const t=this.selected;e!==t&&(this._selected=e,this.shouldUpdateCheckedState(),this.requestUpdate("selected",t))}get focusElement(){const e=this.tabs.find((e=>!e.disabled&&(e.selected||e.value===this.selected)));if(e)return e;return this.tabs.find((e=>!e.disabled))||this}manageAutoFocus(){const e=[...this.children].map((e=>void 0!==e.updateComplete?e.updateComplete:Promise.resolve(!0)));Promise.all(e).then((()=>super.manageAutoFocus()))}managePanels({target:e}){e.assignedElements().map((e=>{const{value:t,id:r}=e,o=this.querySelector(`[role="tab"][value="${t}"]`);o&&(o.setAttribute("aria-controls",r),e.setAttribute("aria-labelledby",o.id)),e.selected=t===this.selected}))}render(){return i`<div aria-label="${a(this.label?this.label:void 0)}" @click="${this.onClick}" @keydown="${this.onKeyDown}" @mousedown="${this.manageFocusinType}" @focusin="${this.startListeningToKeyboard}" id="list" role="tablist"><slot @slotchange="${this.onSlotChange}"></slot><div id="selectionIndicator" class="${a(this.shouldAnimate?void 0:"first-position")}" style="${this.selectionIndicatorStyle}" role="presentation"></div></div><slot name="tab-panel" @slotchange="${this.managePanels}"></slot>`}firstUpdated(e){super.firstUpdated(e);const t=this.querySelector("[selected]");t&&this.selectTarget(t)}updated(e){if(super.updated(e),e.has("selected")){if(e.get("selected")){const t=this.querySelector(`[role="tabpanel"][value="${e.get("selected")}"]`);t&&(t.selected=!1)}const t=this.querySelector(`[role="tabpanel"][value="${this.selected}"]`);t&&(t.selected=!0)}e.has("direction")&&("horizontal"===this.direction?this.removeAttribute("aria-orientation"):this.setAttribute("aria-orientation","vertical")),e.has("dir")&&this.updateSelectionIndicator(),e.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")),this.shouldAnimate||void 0===e.get("shouldAnimate")||(this.shouldAnimate=!0)}startListeningToKeyboard(){this.addEventListener("keydown",this.handleKeydown),this.shouldApplyFocusVisible=!0;const e=this.querySelector("[selected]");e&&(e.tabIndex=-1);const t=()=>{this.removeEventListener("keydown",this.handleKeydown),this.shouldApplyFocusVisible=!1;const e=this.querySelector("[selected]");e&&(e.tabIndex=0),this.removeEventListener("focusout",t)};this.addEventListener("focusout",t)}handleKeydown(e){const{code:t}=e,r=[...Fr[this.direction]];if(!r.includes(t))return;this.isLTR||"horizontal"!==this.direction||r.reverse(),e.preventDefault();const o=F(this);let s=this.tabs.indexOf(o);s+=t===r[0]?-1:1;const i=this.tabs[(s+this.tabs.length)%this.tabs.length];i.focus(),this.auto&&(this.selected=i.value)}selectTarget(e){const t=e.getAttribute("value");if(t){const e=this.selected;this.selected=t;this.dispatchEvent(new Event("change",{cancelable:!0}))||(this.selected=e)}}onSlotChange(){this.tabs=[...this.querySelectorAll('[role="tab"]')],this.shouldUpdateCheckedState()}shouldUpdateCheckedState(){this.tabChangeResolver(),this.tabChangePromise=new Promise((e=>this.tabChangeResolver=e)),setTimeout(this.updateCheckedState)}async getUpdateComplete(){const e=await super.getUpdateComplete();return await this.tabChangePromise,e}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.addEventListener("loadingdone",this.updateSelectionIndicator)}disconnectedCallback(){window.removeEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.removeEventListener("loadingdone",this.updateSelectionIndicator),super.disconnectedCallback()}}l([c({type:Boolean})],Tr.prototype,"auto",void 0),l([c({reflect:!0})],Tr.prototype,"direction",void 0),l([c()],Tr.prototype,"label",void 0),l([c({attribute:!1})],Tr.prototype,"selectionIndicatorStyle",void 0),l([c({attribute:!1})],Tr.prototype,"shouldAnimate",void 0),l([c({reflect:!0})],Tr.prototype,"selected",null),h("sp-tabs",Tr);var Ur=q`:host{display:inline-flex}:host(:not([selected])){display:none}`;class Rr extends g{constructor(){super(...arguments),this.selected=!1,this.value=""}render(){return i`<slot></slot>`}firstUpdated(){this.slot="tab-panel",this.setAttribute("role","tabpanel"),this.tabIndex=0,this.hasAttribute("id")||(this.id="sp-tab-panel-"+Rr.instanceCount++)}updated(e){e.has("selected")&&(this.selected?(this.removeAttribute("aria-hidden"),this.tabIndex=0):(this.setAttribute("aria-hidden","true"),this.tabIndex=-1))}}Rr.styles=[Ur],Rr.instanceCount=0,l([c({type:Boolean,reflect:!0})],Rr.prototype,"selected",void 0),l([c({type:String,reflect:!0})],Rr.prototype,"value",void 0),h("sp-tab-panel",Rr);var Nr=q`:host{--spectrum-tag-s-border-size:var(--spectrum-alias-border-size-thin);--spectrum-tag-s-icon-gap:var(--spectrum-alias-item-workflow-icon-gap-s);--spectrum-tag-s-text-size:var(--spectrum-alias-item-text-size-s);--spectrum-tag-s-height:var(--spectrum-alias-item-height-s);--spectrum-tag-s-padding-left:var(
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
)}`;class Or extends g{constructor(){super(),this.deletable=!1,this.disabled=!1,this.readonly=!1,this.handleFocusin=()=>{this.addEventListener("focusout",this.handleFocusout),this.addEventListener("keydown",this.handleKeydown)},this.handleFocusout=()=>{this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("focusout",this.handleFocusout)},this.handleKeydown=e=>{if(!this.deletable)return;const{code:t}=e;switch(t){case"Backspace":case"Space":case"Delete":return void this.delete();default:return}},this.addEventListener("focusin",this.handleFocusin)}static get styles(){return[Nr]}get hasIcon(){return!!this.querySelector('[slot="icon"]')}get hasAvatar(){return!!this.querySelector('[slot="avatar"]')}delete(){this.readonly||this.dispatchEvent(new Event("delete",{bubbles:!0}))}render(){const e=[];return this.hasAvatar&&e.push(i`<slot name="avatar"></slot>`),this.hasIcon&&e.push(i`<slot name="icon"></slot>`),i`${e} <span class="label"><slot></slot></span>${this.deletable?i`<sp-clear-button class="clear-button" ?disabled="${this.disabled}" label="Remove" small tabindex="-1" @click="${this.delete}"></sp-clear-button>`:i``}`}firstUpdated(e){super.firstUpdated(e),this.hasAttribute("role")||this.setAttribute("role","listitem"),this.deletable&&this.setAttribute("tabindex",!this.disabled&&this.matches(":first-of-type:not([disabled])")?"0":"-1")}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}}l([c({type:Boolean,reflect:!0})],Or.prototype,"deletable",void 0),l([c({type:Boolean,reflect:!0})],Or.prototype,"disabled",void 0),l([c({type:Boolean,reflect:!0})],Or.prototype,"readonly",void 0),h("sp-tag",Or);var jr=q`:host{--spectrum-tag-s-border-size:var(--spectrum-alias-border-size-thin);--spectrum-tag-s-icon-gap:var(--spectrum-alias-item-workflow-icon-gap-s);--spectrum-tag-s-text-size:var(--spectrum-alias-item-text-size-s);--spectrum-tag-s-height:var(--spectrum-alias-item-height-s);--spectrum-tag-s-padding-left:var(
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
);--spectrum-tag-avatar-padding-x:var(--spectrum-tag-icon-gap);--spectrum-taggroup-tag-gap-x:var(--spectrum-global-dimension-size-100);--spectrum-taggroup-tag-gap-y:var(--spectrum-global-dimension-size-100)}:host{display:inline-block;list-style:none;margin:0;padding:0}`;class Kr extends(M(g)){constructor(){super(),this.handleFocusin=()=>{this.addEventListener("focusout",this.handleFocusout),this.addEventListener("keydown",this.handleKeydown),requestAnimationFrame((()=>{const e=this.tags.find((e=>0===e.tabIndex));e&&(e.tabIndex=-1)}))},this.handleKeydown=e=>{const{code:t}=e,r=this.getRootNode().activeElement;if(!r)return;let o=this.tags.indexOf(r);if(-1===o)return;const s=(e,t)=>e[(e.length+t)%e.length],i=e=>{o+=e;let t=s(this.tags,o);for(;t.disabled||!t.deletable;)o+=e,t=s(this.tags,o)};switch(t){case"ArrowUp":i(-1);break;case"ArrowLeft":i(this.isLTR?-1:1);break;case"ArrowRight":i(this.isLTR?1:-1);break;case"ArrowDown":i(1);break;case"End":o=this.tags.length,i(-1);break;case"Home":o=-1,i(1);break;case"PageUp":case"PageDown":const r=[...this.getRootNode().querySelectorAll("sp-tags")];if(r.length<2)return;e.preventDefault();const a="PageUp"===t?-1:1;let l=r.indexOf(this)+a,c=s(r,l);for(;!c.tags.length;)l+=a,c=s(r,l);return void c.focus();default:return}e.preventDefault(),s(this.tags,o).focus()},this.handleFocusout=()=>{const e=this.tags.find((e=>!e.disabled&&e.deletable));e&&(e.tabIndex=0),this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("focusout",this.handleFocusout)},this.addEventListener("focusin",this.handleFocusin)}static get styles(){return[jr]}get tags(){return this.defaultNodes.filter((e=>e instanceof Or))}focus(){if(!this.tags.length)return;const e=this.tags.find((e=>!e.disabled&&e.deletable));e&&e.focus()}render(){return i`<slot></slot>`}firstUpdated(){this.hasAttribute("role")||this.setAttribute("role","list"),this.hasAttribute("aria-label")||this.setAttribute("aria-label","Tags")}}l([p("")],Kr.prototype,"defaultNodes",void 0),h("sp-tags",Kr),h("sp-textfield",R);var Gr=q`:host{--spectrum-alias-border-radius-small:var(
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
);background-image:linear-gradient(-45deg,transparent 75.5%,var(--spectrum-global-color-static-gray-500,#bcbcbc) 75.5%),linear-gradient(45deg,transparent 75.5%,var(--spectrum-global-color-static-gray-500,#bcbcbc) 75.5%),linear-gradient(-45deg,var(--spectrum-global-color-static-gray-500,#bcbcbc) 25.5%,transparent 25.5%),linear-gradient(45deg,var(--spectrum-global-color-static-gray-500,#bcbcbc) 25.5%,transparent 25.5%)}:host:before{box-shadow:inset 0 0 0 var(--spectrum-thumbnail-border-size) var(--spectrum-thumbnail-border-color)}:host([selected]){box-shadow:0 0 0 calc(var(--spectrum-thumbnail-border-size-selected)/2) var(--spectrum-thumbnail-border-color-selected)}:host([selected]):before{box-shadow:inset 0 0 0 calc(var(--spectrum-thumbnail-border-size-selected)/2) var(--spectrum-thumbnail-border-color-selected)}:host(.focus-visible),:host([focused]){box-shadow:0 0 0 calc(var(--spectrum-thumbnail-border-size-focus)/2) var(--spectrum-thumbnail-border-color-focus)}:host(:focus-visible),:host([focused]){box-shadow:0 0 0 calc(var(--spectrum-thumbnail-border-size-focus)/2) var(--spectrum-thumbnail-border-color-focus)}:host(.focus-visible):before,:host([focused]):before{box-shadow:inset 0 0 0 calc(var(--spectrum-thumbnail-border-size-selected)/2) var(--spectrum-thumbnail-border-color-selected)}:host(:focus-visible):before,:host([focused]):before{box-shadow:inset 0 0 0 calc(var(--spectrum-thumbnail-border-size-selected)/2) var(--spectrum-thumbnail-border-color-selected)}::slotted(:not(img)){display:none}:host([cover]) ::slotted(img){height:100%;object-fit:cover;width:100%}`;class Xr extends(z(g,{validSizes:["s","m","l","xl","xxl"],noDefaultSize:!0})){static get styles(){return[Gr]}render(){return i`${this.background?i`<div class="background" style="background:${this.background}"></div>`:i``}<slot></slot>`}}l([c({type:String,reflect:!0})],Xr.prototype,"background",void 0),h("sp-thumbnail",Xr);var Yr=q`:host{--spectrum-picker-m-popover-offset-y:var(
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
)}`;class Wr extends g{constructor(){super(),this._tooltipId="sp-tooltip-describedby-helper-"+Wr.instanceCount++,this.open=!1,this.placement="top",this._variant="",this.addEventListener("sp-overlay-query",this.onOverlayQuery)}static get styles(){return[Yr]}get variant(){return this._variant}set variant(e){if(e!==this.variant){if(["info","positive","negative"].includes(e))return this.setAttribute("variant",e),void(this._variant=e);this.removeAttribute("variant"),this._variant=""}}onOverlayQuery(e){if(!e.target)return;e.target===this&&(e.detail.overlayContentTipElement=this.tipElement)}render(){return i`<slot name="icon"></slot><span id="label"><slot></slot></span><span id="tip"></span>`}overlayWillOpenCallback({trigger:e}){this.setAttribute("aria-hidden","true"),this._proxy||(this._proxy=document.createElement("span"),this._proxy.textContent=this.textContent,this._proxy.id=this._tooltipId,this._proxy.hidden=!0,this._proxy.setAttribute("role","tooltip")),e.setAttribute("aria-describedby",this._tooltipId),e.insertAdjacentElement("beforebegin",this._proxy)}overlayOpenCancelledCallback({trigger:e}){this.overlayCloseCallback({trigger:e})}overlayCloseCallback({trigger:e}){e.removeAttribute("aria-describedby"),this.removeAttribute("aria-hidden"),this.removeProxy()}removeProxy(){this._proxy&&(this._proxy.remove(),this._proxy=void 0)}}Wr.instanceCount=0,l([c({type:Boolean,reflect:!0})],Wr.prototype,"open",void 0),l([c({reflect:!0})],Wr.prototype,"placement",void 0),l([n("#tip")],Wr.prototype,"tipElement",void 0),l([c({type:String})],Wr.prototype,"variant",null),h("sp-tooltip",Wr);class Qr extends g{constructor(){super(...arguments),this.selectionIndicatorStyle="transform: translateX(0px) scaleX(0) scaleY(0)",this.shouldAnimate=!1,this.onClick=e=>{const t=e.target;this.shouldAnimate=!0,this.selectTarget(t)},this.items=[],this.updateSelectionIndicator=async()=>{const e=this.items.find((e=>e.value===this.selected||e.value===window.location.href));if(!e)return void(this.selectionIndicatorStyle="transform: translateX(0px) scaleX(0) scaleY(0)");await Promise.all([e.updateComplete,document.fonts?document.fonts.ready:Promise.resolve()]);const t=e.getBoundingClientRect(),r=this.getBoundingClientRect(),o=t.width,s="ltr"===this.dir?t.left-r.left:t.right-r.right;this.selectionIndicatorStyle=`transform: translateX(${s}px) scaleX(${"ltr"===this.dir?o:-1*o});`}}static get styles(){return[Dr]}set selected(e){const t=this.selected;e!==t&&(this.updateCheckedState(e),this._selected=e,this.requestUpdate("selected",t))}get selected(){return this._selected}manageItems(){this.items=[...this.querySelectorAll("sp-top-nav-item")];const e=this.items.find((e=>e.value===window.location.href));e&&this.selectTarget(e)}render(){return i`<div @click="${this.onClick}" id="list"><slot @slotchange="${this.onSlotChange}"></slot><div id="selectionIndicator" class="${a(this.shouldAnimate?void 0:"first-position")}" style="${this.selectionIndicatorStyle}"></div></div>`}firstUpdated(e){super.firstUpdated(e),this.setAttribute("direction","horizontal"),this.manageItems()}updated(e){super.updated(e),e.has("dir")&&this.updateSelectionIndicator(),this.shouldAnimate||void 0===e.get("shouldAnimate")||(this.shouldAnimate=!0)}selectTarget(e){const{value:t}=e;t&&(this.selected=t)}onSlotChange(){this.manageItems()}updateCheckedState(e){this.items.forEach((e=>{e.selected=!1})),requestAnimationFrame((()=>{if(e&&e.length){const t=this.items.find((t=>t.value===e||t.value===window.location.href));t?t.selected=!0:this.selected=""}this.updateSelectionIndicator()}))}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.addEventListener("loadingdone",this.updateSelectionIndicator)}disconnectedCallback(){window.removeEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.removeEventListener("loadingdone",this.updateSelectionIndicator),super.disconnectedCallback()}}l([c()],Qr.prototype,"selectionIndicatorStyle",void 0),l([c({attribute:!1})],Qr.prototype,"shouldAnimate",void 0),l([c({reflect:!0})],Qr.prototype,"selected",null),h("sp-top-nav",Qr);var Jr=q`a{color:inherit}a:focus{outline:0}`;class eo extends(L(u)){constructor(){super(...arguments),this.selected=!1,this.value=""}static get styles(){return[Ir,Jr]}get focusElement(){return this.anchor}click(){this.anchor.click()}render(){return i`<a id="itemLabel" href="${a(this.href)}" download="${a(this.download)}" target="${a(this.target)}" aria-label="${a(this.label)}" aria-current="${a(this.selected&&this.href?"page":void 0)}" rel="${a(this.rel)}"><slot></slot></a>`}firstUpdated(e){super.firstUpdated(e)}updated(e){super.updated(e),this.value=this.anchor.href}}l([n("a")],eo.prototype,"anchor",void 0),l([c({type:Boolean,reflect:!0})],eo.prototype,"selected",void 0),h("sp-top-nav-item",eo);var to=q`:host{--spectrum-tray-width:100%;--spectrum-tray-max-width:375px;--spectrum-tray-min-height:var(
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
)}@media (max-inline-size:375px){.tray{border-radius:var(--spectrum-tray-border-radius,0)}}:host{align-items:flex-end}.tray{padding:var(--spectrum-tray-padding-y,0) var(--spectrum-tray-padding-x,0)}`;class ro extends g{constructor(){super(...arguments),this.open=!1}static get styles(){return[Ct,to]}focus(){const e=this.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [focusable]');e?e.focus():1===this.children.length?this.tray.focus():super.focus()}close(){this.open=!1,this.dispatchEvent(new Event("close",{bubbles:!0}))}render(){return i`<sp-underlay ?open="${this.open}" @click="${this.close}"></sp-underlay><div class="tray modal" tabindex="-1"><slot></slot></div>`}}l([c({type:Boolean,reflect:!0})],ro.prototype,"open",void 0),l([n(".tray")],ro.prototype,"tray",void 0),h("sp-tray",ro);var oo=q`:host{--spectrum-breadcrumb-s-multiline-title-margin-top:var(
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
)}`;h("sp-breadcrumb",class extends g{static get styles(){return[oo]}render(){return i`Markup goes here`}});var so=q``;h("sp-tree",class extends g{static get styles(){return[so]}render(){return i`Markup goes here`}});h("sp-icon-help",class extends s{render(){return f(i),(({width:e=24,height:t=24,hidden:r=!1,title:o="Help"}={})=>v`<svg xmlns="http://www.w3.org/2000/svg" height="${t}" viewBox="0 0 36 36" width="${e}" aria-hidden="${r?"true":"false"}" role="img" fill="currentColor" aria-label="${o}"><path d="M18 2a16 16 0 1016 16A16 16 0 0018 2zm.047 26.876a2.69 2.69 0 110-5.375 2.62 2.62 0 012.8 2.67 2.581 2.581 0 01-2.8 2.705zm3.566-12.818l-.2.21c-.789.829-1.684 1.768-1.684 2.351a2.771 2.771 0 00.359 1.348l.145.277-.113.429a.617.617 0 01-.567.378h-2.682a.867.867 0 01-.65-.235 4.111 4.111 0 01-.845-2.525c0-1.677.934-2.714 2.225-4.15.2-.219.39-.42.575-.609.629-.651 1.013-1.071 1.013-1.515 0-.308 0-1.245-1.786-1.245a5.918 5.918 0 00-3.159.919.592.592 0 01-.653-.02l-.237-.169-.055-.443v-2.9a.879.879 0 01.393-.819 8.275 8.275 0 014.3-1.1c3.291 0 5.5 2.117 5.5 5.272a6.131 6.131 0 01-1.879 4.546z"/></svg>`)({hidden:!this.label,title:this.label})}});h("sp-icon-star",class extends s{render(){return f(i),(({width:e=24,height:t=24,hidden:r=!1,title:o="Star"}={})=>v`<svg xmlns="http://www.w3.org/2000/svg" height="${t}" viewBox="0 0 36 36" width="${e}" aria-hidden="${r?"true":"false"}" role="img" fill="currentColor" aria-label="${o}"><path d="M18.477.593L22.8 12.029l12.212.578a.51.51 0 01.3.908l-9.54 7.646 3.224 11.793a.51.51 0 01-.772.561L18 26.805l-10.22 6.71a.51.51 0 01-.772-.561l3.224-11.793-9.54-7.646a.51.51 0 01.3-.908l12.208-.578L17.523.593a.51.51 0 01.954 0z"/></svg>`)({hidden:!this.label,title:this.label})}});h("sp-icon-chevron-down",class extends s{render(){return f(i),(({width:e=24,height:t=24,hidden:r=!1,title:o="Chevron Down"}={})=>v`<svg xmlns="http://www.w3.org/2000/svg" height="${t}" viewBox="0 0 36 36" width="${e}" aria-hidden="${r?"true":"false"}" role="img" fill="currentColor" aria-label="${o}"><path d="M8 14.02a2 2 0 013.411-1.411l6.578 6.572 6.578-6.572a2 2 0 012.874 2.773l-.049.049-7.992 7.984a2 2 0 01-2.825 0l-7.989-7.983A1.989 1.989 0 018 14.02z"/></svg>`)({hidden:!this.label,title:this.label})}});h("sp-icon-close",class extends s{render(){return f(i),(({width:e=24,height:t=24,hidden:r=!1,title:o="Close"}={})=>v`<svg xmlns="http://www.w3.org/2000/svg" height="${t}" viewBox="0 0 36 36" width="${e}" aria-hidden="${r?"true":"false"}" role="img" fill="currentColor" aria-label="${o}"><path d="M26.485 6.686L18 15.172 9.515 6.686a1 1 0 00-1.414 0L6.686 8.1a1 1 0 000 1.414L15.172 18l-8.486 8.485a1 1 0 000 1.414L8.1 29.314a1 1 0 001.414 0L18 20.828l8.485 8.486a1 1 0 001.414 0l1.415-1.414a1 1 0 000-1.414L20.828 18l8.486-8.485a1 1 0 000-1.414L27.9 6.686a1 1 0 00-1.415 0z"/></svg>`)({hidden:!this.label,title:this.label})}});h("sp-icon-checkmark",class extends s{render(){return f(i),(({width:e=24,height:t=24,hidden:r=!1,title:o="Checkmark"}={})=>v`<svg xmlns="http://www.w3.org/2000/svg" height="${t}" viewBox="0 0 36 36" width="${e}" aria-hidden="${r?"true":"false"}" role="img" fill="currentColor" aria-label="${o}"><path d="M31.312 7.725l-1.455-1.133a1 1 0 00-1.4.175L14.822 24.283l-6.647-6.612a1 1 0 00-1.414 0L5.436 19a1 1 0 000 1.414l8.926 8.9a1 1 0 001.5-.093L31.487 9.128a1 1 0 00-.175-1.403z"/></svg>`)({hidden:!this.label,title:this.label})}});h("sp-icon-edit",class extends s{render(){return f(i),(({width:e=24,height:t=24,hidden:r=!1,title:o="Edit"}={})=>v`<svg xmlns="http://www.w3.org/2000/svg" height="${t}" viewBox="0 0 36 36" width="${e}" aria-hidden="${r?"true":"false"}" role="img" fill="currentColor" aria-label="${o}"><path d="M33.567 8.2L27.8 2.432a1.215 1.215 0 00-.866-.353H26.9a1.371 1.371 0 00-.927.406L5.084 23.372a.99.99 0 00-.251.422L2.055 33.1c-.114.377.459.851.783.851a.251.251 0 00.062-.007c.276-.063 7.866-2.344 9.311-2.778a.972.972 0 00.414-.249l20.888-20.889a1.372 1.372 0 00.4-.883 1.221 1.221 0 00-.346-.945zM11.4 29.316c-2.161.649-4.862 1.465-6.729 2.022l2.009-6.73z"/></svg>`)({hidden:!this.label,title:this.label})}});h("sp-icon-settings",class extends s{render(){return f(i),(({width:e=24,height:t=24,hidden:r=!1,title:o="Settings"}={})=>v`<svg xmlns="http://www.w3.org/2000/svg" height="${t}" viewBox="0 0 36 36" width="${e}" aria-hidden="${r?"true":"false"}" role="img" fill="currentColor" aria-label="${o}"><path d="M32.9 15.793h-3.111a11.953 11.953 0 00-1.842-4.507l2.205-2.206a1.1 1.1 0 000-1.56l-1.673-1.672a1.1 1.1 0 00-1.56 0l-2.205 2.205a11.925 11.925 0 00-4.507-1.841V3.1A1.1 1.1 0 0019.1 2h-2.2a1.1 1.1 0 00-1.1 1.1v3.112a11.925 11.925 0 00-4.507 1.841l-2.2-2.205a1.1 1.1 0 00-1.56 0L5.848 7.52a1.1 1.1 0 000 1.56l2.205 2.206a11.953 11.953 0 00-1.842 4.507H3.1A1.1 1.1 0 002 16.9v2.2a1.1 1.1 0 001.1 1.1h3.111a11.934 11.934 0 001.842 4.507l-2.205 2.212a1.1 1.1 0 000 1.56l1.673 1.673a1.1 1.1 0 001.56 0l2.205-2.205a11.925 11.925 0 004.507 1.841V32.9A1.1 1.1 0 0016.9 34h2.2a1.1 1.1 0 001.1-1.1v-3.112a11.925 11.925 0 004.507-1.841l2.205 2.205a1.1 1.1 0 001.56 0l1.673-1.673a1.1 1.1 0 000-1.56l-2.205-2.205a11.934 11.934 0 001.842-4.507H32.9A1.1 1.1 0 0034 19.1v-2.2a1.1 1.1 0 00-1.1-1.107zM22.414 18A4.414 4.414 0 1118 13.586 4.414 4.414 0 0122.414 18z"/></svg>`)({hidden:!this.label,title:this.label})}});h("sp-icon-save-floppy",class extends s{render(){return f(i),(({width:e=24,height:t=24,hidden:r=!1,title:o="Save Floppy"}={})=>v`<svg xmlns="http://www.w3.org/2000/svg" height="${t}" viewBox="0 0 36 36" width="${e}" aria-hidden="${r?"true":"false"}" role="img" fill="currentColor" aria-label="${o}"><path d="M20 4h4v6h-4z"/><path d="M31.708 8.293s-4.015-4-4.146-4.114A.969.969 0 0027 4h-1v8H14V4H5a1 1 0 00-1 1v26a1 1 0 001 1h26a1 1 0 001-1V9a1 1 0 00-.292-.707zM26 30H10V16h16z"/></svg>`)({hidden:!this.label,title:this.label})}});h("sp-icon-stopwatch",class extends s{render(){return f(i),(({width:e=24,height:t=24,hidden:r=!1,title:o="Stopwatch"}={})=>v`<svg xmlns="http://www.w3.org/2000/svg" height="${t}" viewBox="0 0 36 36" width="${e}" aria-hidden="${r?"true":"false"}" role="img" fill="currentColor" aria-label="${o}"><path d="M20 2h1a1 1 0 000-2h-4a1 1 0 000 2h1v2h2z"/><path d="M19 4a14.94 14.94 0 00-9.9 3.729L7.437 6.062l.708-.707A1 1 0 106.73 3.941l-.707.707-1.414 1.414-.709.708a1 1 0 001.416 1.414l.707-.707 1.669 1.668A15 15 0 1019 4zm0 28a13 13 0 117.833-23.375l-8.925 8.925c-.021.021-.037.04-.057.062a1.858 1.858 0 102.619 2.635c.023-.021.046-.045.068-.067l8.913-8.912A13 13 0 0119 32z"/></svg>`)({hidden:!this.label,title:this.label})}});h("sp-icon-user-activity",class extends s{render(){return f(i),(({width:e=24,height:t=24,hidden:r=!1,title:o="User Activity"}={})=>v`<svg xmlns="http://www.w3.org/2000/svg" height="${t}" viewBox="0 0 36 36" width="${e}" aria-hidden="${r?"true":"false"}" role="img" fill="currentColor" aria-label="${o}"><path d="M20 2h.086a1 1 0 01.707.293l8.914 8.914a1 1 0 01.293.707V12H20z"/><path d="M19 14a1 1 0 01-1-1V2H7a1 1 0 00-1 1v30a1 1 0 001 1h22a1 1 0 001-1V14zm6.986 18h-15.96c-.01-.121-.026-.6-.026-.727 0-1.105.7-3.908 5.173-4.265a.723.723 0 00.668-.707v-1.016a.673.673 0 00-.2-.455 6.345 6.345 0 01-1.841-3.58 4.359 4.359 0 014.185-4.45 4.347 4.347 0 014.215 4.45 6.358 6.358 0 01-1.853 3.58.678.678 0 00-.2.455v1.021a.726.726 0 00.666.706c4.393.409 5.183 3.2 5.183 4.261.004.127-.01.727-.01.727z"/></svg>`)({hidden:!this.label,title:this.label})}}),window.Overlay=K;class io extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML="\n            <style>\n                :host {\n                    display: block;\n                    background-color: var(--spectrum-global-color-gray-50);\n                    color: var(--spectrum-global-color-gray-800);\n                    border: 1px solid;\n                    padding: 2em;\n                }\n            </style>\n            <slot></slot>\n        "}}h("styled-element",io);
//# sourceMappingURL=8c31ff5b.js.map
