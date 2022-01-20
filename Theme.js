/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(Object.prototype.hasOwnProperty.call(b,p))d[p]=b[p];};return extendStatics(d,b);};function __extends(d,b){if(typeof b!=="function"&&b!==null)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());}var __assign=function(){__assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};function __rest(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;}function __decorate(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;}function __param(paramIndex,decorator){return function(target,key){decorator(target,key,paramIndex);};}function __metadata(metadataKey,metadataValue){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(metadataKey,metadataValue);}function __awaiter(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value);});}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});}function __generator(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return {value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return {value:op[0]?op[1]:void 0,done:true};}}var __createBinding=Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];};function __exportStar(m,o){for(var p in m)if(p!=="default"&&!Object.prototype.hasOwnProperty.call(o,p))__createBinding(o,m,p);}function __values(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return {next:function(){if(o&&i>=o.length)o=void 0;return {value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");}function __read(o,n){var m=typeof Symbol==="function"&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((n===void 0||n-->0)&&!(r=i.next()).done)ar.push(r.value);}catch(error){e={error:error};}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i);}finally{if(e)throw e.error;}}return ar;}/** @deprecated */function __spread(){for(var ar=[],i=0;i<arguments.length;i++)ar=ar.concat(__read(arguments[i]));return ar;}/** @deprecated */function __spreadArrays(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;for(var r=Array(s),k=0,i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r;}function __spreadArray(to,from,pack){if(pack||arguments.length===2)for(var i=0,l=from.length,ar;i<l;i++){if(ar||!(i in from)){if(!ar)ar=Array.prototype.slice.call(from,0,i);ar[i]=from[i];}}return to.concat(ar||Array.prototype.slice.call(from));}function __await(v){return this instanceof __await?(this.v=v,this):new __await(v);}function __asyncGenerator(thisArg,_arguments,generator){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var g=generator.apply(thisArg,_arguments||[]),i,q=[];return i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this;},i;function verb(n){if(g[n])i[n]=function(v){return new Promise(function(a,b){q.push([n,v,a,b])>1||resume(n,v);});};}function resume(n,v){try{step(g[n](v));}catch(e){settle(q[0][3],e);}}function step(r){r.value instanceof __await?Promise.resolve(r.value.v).then(fulfill,reject):settle(q[0][2],r);}function fulfill(value){resume("next",value);}function reject(value){resume("throw",value);}function settle(f,v){if(f(v),q.shift(),q.length)resume(q[0][0],q[0][1]);}}function __asyncDelegator(o){var i,p;return i={},verb("next"),verb("throw",function(e){throw e;}),verb("return"),i[Symbol.iterator]=function(){return this;},i;function verb(n,f){i[n]=o[n]?function(v){return (p=!p)?{value:__await(o[n](v)),done:n==="return"}:f?f(v):v;}:f;}}function __asyncValues(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var m=o[Symbol.asyncIterator],i;return m?m.call(o):(o=typeof __values==="function"?__values(o):o[Symbol.iterator](),i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this;},i);function verb(n){i[n]=o[n]&&function(v){return new Promise(function(resolve,reject){v=o[n](v),settle(resolve,reject,v.done,v.value);});};}function settle(resolve,reject,d,v){Promise.resolve(v).then(function(v){resolve({value:v,done:d});},reject);}}function __makeTemplateObject(cooked,raw){if(Object.defineProperty){Object.defineProperty(cooked,"raw",{value:raw});}else {cooked.raw=raw;}return cooked;};var __setModuleDefault=Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:true,value:v});}:function(o,v){o["default"]=v;};function __importStar(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(k!=="default"&&Object.prototype.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);__setModuleDefault(result,mod);return result;}function __importDefault(mod){return mod&&mod.__esModule?mod:{default:mod};}function __classPrivateFieldGet(receiver,state,kind,f){if(kind==="a"&&!f)throw new TypeError("Private accessor was defined without a getter");if(typeof state==="function"?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot read private member from an object whose class did not declare it");return kind==="m"?f:kind==="a"?f.call(receiver):f?f.value:state.get(receiver);}function __classPrivateFieldSet(receiver,state,value,kind,f){if(kind==="m")throw new TypeError("Private method is not writable");if(kind==="a"&&!f)throw new TypeError("Private accessor was defined without a setter");if(typeof state==="function"?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot write private member to an object whose class did not declare it");return kind==="a"?f.call(receiver,value):f?f.value=value:state.set(receiver,value),value;}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$6=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$a=Symbol(),n$7=new Map();class s$5{constructor(t,n){if(this._$cssResult$=!0,n!==e$a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$7.get(this.cssText);return t$6&&void 0===e&&(n$7.set(this.cssText,e=new CSSStyleSheet()),e.replaceSync(this.cssText)),e;}toString(){return this.cssText;}}const o$7=t=>new s$5("string"==typeof t?t:t+"",e$a),r$5=(t,...n)=>{const o=1===t.length?t[0]:n.reduce((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");})(n)+t[s+1],t[0]);return new s$5(o,e$a);},i$7=(e,n)=>{t$6?e.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):n.forEach(t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);});},S$1=t$6?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$7(e);})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$4;const e$9=window.trustedTypes,r$4=e$9?e$9.emptyScript:"",h$4=window.reactiveElementPolyfillSupport,o$6={toAttribute(t,i){switch(i){case Boolean:t=t?r$4:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t;},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s;}},n$6=(t,i)=>i!==t&&(i==i||t==t),l$6={attribute:!0,type:String,converter:o$6,reflect:!1,hasChanged:n$6};class a$2 extends HTMLElement{constructor(){super(),this._$Et=new Map(),this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));}),t;}static createProperty(t,i=l$6){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i];},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0};}static getPropertyOptions(t){return this.elementProperties.get(t)||l$6;}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map(),this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0;}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s;}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0;}o(){var t;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map(),this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach(t=>t(this));}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1);}_$Em(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);});}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$7(s,this.constructor.elementStyles),s;}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach(t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t);});}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach(t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t);});}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$ES(t,i,s=l$6){var e,r;const h=this.constructor._$Eh(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:o$6.toAttribute)(i,s.type);this._$Ei=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$Ei=null;}}_$AK(t,i){var s,e,r;const h=this.constructor,n=h._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=h.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==r?r:o$6.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$6)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map()),this._$E_.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$EC());}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&(await t),!this.isUpdatePending;}scheduleUpdate(){return this.performUpdate();}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((t,i)=>this[i]=t),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach(t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t);}),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t;}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach(t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t);}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map(),this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete();}getUpdateComplete(){return this._$Ep;}shouldUpdate(t){return !0;}update(t){void 0!==this._$E_&&(this._$E_.forEach((t,i)=>this._$ES(i,this[i],t)),this._$E_=void 0),this._$EU();}updated(t){}firstUpdated(t){}}a$2.finalized=!0,a$2.elementProperties=new Map(),a$2.elementStyles=[],a$2.shadowRootOptions={mode:"open"},null==h$4||h$4({ReactiveElement:a$2}),(null!==(s$4=globalThis.reactiveElementVersions)&&void 0!==s$4?s$4:globalThis.reactiveElementVersions=[]).push("1.0.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var t$5;const i$6=globalThis.trustedTypes,s$3=i$6?i$6.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$8=`lit$${(Math.random()+"").slice(9)}$`,o$5="?"+e$8,n$5=`<${o$5}>`,l$5=document,h$3=(t="")=>l$5.createComment(t),r$3=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d$2=Array.isArray,u$2=t=>{var i;return d$2(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator]);},c$3=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v$1=/-->/g,a$1=/>/g,f$1=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m$1=/"/g,g=/^(?:script|style|textarea)$/i,$=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),p$1=$(1),y=$(2),b=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),x=new WeakMap(),w=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h$3(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l;},A=l$5.createTreeWalker(l$5,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c$3;for(let i=0;i<o;i++){const s=t[i];let o,u,$=-1,p=0;for(;p<s.length&&(d.lastIndex=p,u=d.exec(s),null!==u);)p=d.lastIndex,d===c$3?"!--"===u[1]?d=v$1:void 0!==u[1]?d=a$1:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f$1):void 0!==u[3]&&(d=f$1):d===f$1?">"===u[0]?(d=null!=h?h:c$3,$=-1):void 0===u[1]?$=-2:($=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f$1:'"'===u[3]?m$1:_):d===m$1||d===_?d=f$1:d===v$1||d===a$1?d=c$3:(d=f$1,h=void 0);const y=d===f$1&&t[i+1].startsWith("/>")?" ":"";r+=d===c$3?s+n$5:$>=0?(l.push(o),s.slice(0,$)+"$lit$"+s.slice($)+e$8+y):s+e$8+(-2===$?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");return [void 0!==s$3?s$3.createHTML(u):u,l];};class P{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=P.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$8)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$8),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?H:"@"===i[1]?I:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e$8),s=t.length-1;if(s>0){l.textContent=i$6?i$6.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h$3()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h$3());}}}else if(8===l.nodeType)if(l.data===o$5)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e$8,t+1));)c.push({type:7,index:r}),t+=e$8.length-1;}r++;}}static createElement(t,i){const s=l$5.createElement("template");return s.innerHTML=t,s;}}function V(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r$3(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=V(t,d._$AS(t,i.values),d,e)),i;}class E{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode;}get _$AU(){return this._$AM._$AU;}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$5).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o;}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t;}get startNode(){return this._$AA;}get endNode(){return this._$AB;}_$AI(t,i=this){t=V(this,t,i),r$3(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):u$2(t)?this.M(t):this.$(t);}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i);}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t));}$(t){this._$AH!==T&&r$3(this._$AH)?this._$AA.nextSibling.data=t:this.S(l$5.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=P.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new E(o,this),i=t.p(this.options);t.m(s),this.S(i),this._$AH=t;}}_$AC(t){let i=x.get(t.strings);return void 0===i&&x.set(t.strings,i=new P(t)),i;}M(t){d$2(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.A(h$3()),this.A(h$3()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String()),this.strings=s):this._$AH=T;}get tagName(){return this.element.tagName;}get _$AU(){return this._$AM._$AU;}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=V(this,t,i,0),n=!r$3(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=V(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r$3(h)||h!==this._$AH[l]),h===T?t=T:t!==T&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.k(t);}k(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}k(t){this.element[this.name]=t===T?void 0:t;}}const k=i$6?i$6.emptyScript:"";class H extends S{constructor(){super(...arguments),this.type=4;}k(t){t&&t!==T?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name);}}class I extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=V(this,t,i,0))&&void 0!==s?s:T)===b)return;const e=this._$AH,o=t===T&&e!==T||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==T&&(e===T||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU;}_$AI(t){V(this,t);}}const R={P:"$lit$",V:e$8,L:o$5,I:1,N:C,R:E,D:u$2,j:V,H:N,O:S,F:H,B:I,W:M,Z:L},z=window.litHtmlPolyfillSupport;null==z||z(P,N),(null!==(t$5=globalThis.litHtmlVersions)&&void 0!==t$5?t$5:globalThis.litHtmlVersions=[]).push("2.0.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$4,o$4;const r$2=a$2;class s$2 extends a$2{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i;}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=w(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return b;}}s$2.finalized=!0,s$2._$litElement$=!0,null===(l$4=globalThis.litElementHydrateSupport)||void 0===l$4||l$4.call(globalThis,{LitElement:s$2});const n$4=globalThis.litElementPolyfillSupport;null==n$4||n$4({LitElement:s$2});const h$2={_$AK:(t,e,i)=>{t._$AK(e,i);},_$AL:t=>t._$AL};(null!==(o$4=globalThis.litElementVersions)&&void 0!==o$4?o$4:globalThis.litElementVersions=[]).push("3.0.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n$3=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return {kind:t,elements:i,finisher(e){window.customElements.define(n,e);}};})(n,e);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$5=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$7(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$5(e,n);}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$4(t){return e$7({...t,state:!0});}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$6=(e,t,o)=>{Object.defineProperty(t,o,e);},t$3=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),o$3=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i;}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$5(e){return o$3({finisher:(r,t)=>{Object.assign(r.prototype[t],e);}});}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i$4(i,n){return o$3({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null;},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n];};}return t;}});}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$4(e){return o$3({descriptor:r=>({get(){var r,o;return null!==(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelectorAll(e))&&void 0!==o?o:[];},enumerable:!0,configurable:!0})});}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$3(e){return o$3({descriptor:r=>({async get(){var r;return await this.updateComplete,null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e);},enumerable:!0,configurable:!0})});}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o$2(o="",n=!1,t=""){return o$3({descriptor:e=>({get(){var e,r,l;const i="slot"+(o?`[name=${o}]`:":not([name])");let u=null!==(l=null===(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(i))||void 0===r?void 0:r.assignedNodes({flatten:n}))&&void 0!==l?l:[];return t&&(u=u.filter(e=>e.nodeType===Node.ELEMENT_NODE&&e.matches(t))),u;},enumerable:!0,configurable:!0})});}

const observedForElements=new Set();const updateRTL=()=>{const dir=document.documentElement.dir==='rtl'?document.documentElement.dir:'ltr';observedForElements.forEach(el=>{el.setAttribute('dir',dir);});};const rtlObserver=new MutationObserver(updateRTL);rtlObserver.observe(document.documentElement,{attributes:true,attributeFilter:['dir']});const canManageContentDirection=el=>typeof el.startManagingContentDirection!=='undefined'||el.tagName==='SP-THEME';function SpectrumMixin(constructor){class SlotTextObservingElement extends constructor{constructor(){super(...arguments);/**
             * @private
             */this.dir='ltr';}/**
         * @private
         */get isLTR(){return this.dir==='ltr';}hasVisibleFocusInTree(){const activeElement=this.getRootNode().activeElement;if(!activeElement){return false;}// Browsers without support for the `:focus-visible`
// selector will throw on the following test (Safari, older things).
// Some won't throw, but will be focusing item rather than the menu and
// will rely on the polyfill to know whether focus is "visible" or not.
try{return activeElement.matches(':focus-visible')||activeElement.matches('.focus-visible');}catch(error){return activeElement.matches('.focus-visible');}}connectedCallback(){if(!this.hasAttribute('dir')){let dirParent=this.assignedSlot||this.parentNode;while(dirParent!==document.documentElement&&!canManageContentDirection(dirParent)){dirParent=dirParent.assignedSlot||// step into the shadow DOM of the parent of a slotted node
dirParent.parentNode||// DOM Element detected
dirParent.host;}this.dir=dirParent.dir==='rtl'?dirParent.dir:this.dir||'ltr';if(dirParent===document.documentElement){observedForElements.add(this);}else {const{localName}=dirParent;if(localName.search('-')>-1&&!customElements.get(localName)){customElements.whenDefined(localName).then(()=>{dirParent.startManagingContentDirection(this);});}else {dirParent.startManagingContentDirection(this);}}this._dirParent=dirParent;}super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();if(this._dirParent){if(this._dirParent===document.documentElement){observedForElements.delete(this);}else {this._dirParent.stopManagingContentDirection(this);}this.removeAttribute('dir');}}}__decorate([e$7({reflect:true})],SlotTextObservingElement.prototype,"dir",void 0);return SlotTextObservingElement;}class SpectrumElement extends SpectrumMixin(s$2){}// 自定义 web components注册方法 如果组件已经定义过了 进行warning警告
function lliadCustomElementsHas(tagName){return !!customElements.get(tagName);}// 自定义 web components注册方法 如果组件已经定义过了 进行warning警告
function iliadCustomElementsDefine(tagName,tagClass,options){if(!customElements){console.warn('iliad-ui warning: CustomElements Api is required.');return;}if(lliadCustomElementsHas(tagName)){console.warn(`iliad-ui warning: ${tagName} is already defined.`);}else {customElements.define(tagName,tagClass,options);}}

function SizedMixin(constructor,{validSizes=['s','m','l','xl'],noDefaultSize,defaultSize='m'}={}){class SizedElement extends constructor{constructor(){super(...arguments);this._size=defaultSize;}get size(){return this._size||defaultSize;}set size(value){const fallbackSize=noDefaultSize?null:defaultSize;const size=value?value.toLocaleLowerCase():value;const validSize=validSizes.includes(size)?size:fallbackSize;if(validSize){this.setAttribute('size',validSize);}if(this._size===validSize){return;}const oldSize=this._size;this._size=validSize;this.requestUpdate('size',oldSize);}firstUpdated(changes){super.firstUpdated(changes);if(!this.hasAttribute('size')&&!noDefaultSize){this.setAttribute('size',this.size);}}}__decorate([e$7({type:String,reflect:true})],SizedElement.prototype,"size",null);return SizedElement;}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l$3=l=>null!=l?l:T;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$2={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$2=t=>(...e)=>({_$litDirective$:t,values:e});class i$3{constructor(t){}get _$AU(){return this._$AM._$AU;}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e);}update(t,e){return this.render(...e);}}

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:i$2}=R,t$1=o=>null===o||"object"!=typeof o&&"function"!=typeof o,n$2={HTML:1,SVG:2},v=(o,i)=>{var t,n;return void 0===i?void 0!==(null===(t=o)||void 0===t?void 0:t._$litType$):(null===(n=o)||void 0===n?void 0:n._$litType$)===i;},l$2=o=>{var i;return void 0!==(null===(i=o)||void 0===i?void 0:i._$litDirective$);},d$1=o=>{var i;return null===(i=o)||void 0===i?void 0:i._$litDirective$;},r$1=o=>void 0===o.strings,e$1=()=>document.createComment(""),u$1=(o,t,n)=>{var v;const l=o._$AA.parentNode,d=void 0===t?o._$AB:t._$AA;if(void 0===n){const t=l.insertBefore(e$1(),d),v=l.insertBefore(e$1(),d);n=new i$2(t,v,o,o.options);}else {const i=n._$AB.nextSibling,t=n._$AM,r=t!==o;if(r){let i;null===(v=n._$AQ)||void 0===v||v.call(n,o),n._$AM=o,void 0!==n._$AP&&(i=o._$AU)!==t._$AU&&n._$AP(i);}if(i!==d||r){let o=n._$AA;for(;o!==i;){const i=o.nextSibling;l.insertBefore(o,d),o=i;}}}return n;},c$2=(o,i,t=o)=>(o._$AI(i,t),o),f={},s$1=(o,i=f)=>o._$AH=i,a=o=>o._$AH,m=o=>{var i;null===(i=o._$AP)||void 0===i||i.call(o,!1,!0);let t=o._$AA;const n=o._$AB.nextSibling;for(;t!==n;){const o=t.nextSibling;t.remove(),t=o;}},p=o=>{o._$AR();};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=(e,s,t)=>{const r=new Map();for(let l=s;l<=t;l++)r.set(e[l],l);return r;},c$1=e$2(class extends i$3{constructor(e){if(super(e),e.type!==t$2.CHILD)throw Error("repeat() can only be used in text expressions");}dt(e,s,t){let r;void 0===t?t=s:void 0!==s&&(r=s);const l=[],o=[];let i=0;for(const s of e)l[i]=r?r(s,i):i,o[i]=t(s,i),i++;return {values:o,keys:l};}render(e,s,t){return this.dt(e,s,t).values;}update(s,[t,r,c]){var d;const a$1=a(s),{values:p,keys:v}=this.dt(t,r,c);if(!Array.isArray(a$1))return this.ct=v,p;const h=null!==(d=this.ct)&&void 0!==d?d:this.ct=[],m$1=[];let y,x,j=0,k=a$1.length-1,w=0,A=p.length-1;for(;j<=k&&w<=A;)if(null===a$1[j])j++;else if(null===a$1[k])k--;else if(h[j]===v[w])m$1[w]=c$2(a$1[j],p[w]),j++,w++;else if(h[k]===v[A])m$1[A]=c$2(a$1[k],p[A]),k--,A--;else if(h[j]===v[A])m$1[A]=c$2(a$1[j],p[A]),u$1(s,m$1[A+1],a$1[j]),j++,A--;else if(h[k]===v[w])m$1[w]=c$2(a$1[k],p[w]),u$1(s,a$1[j],a$1[k]),k--,w++;else if(void 0===y&&(y=u(v,w,A),x=u(h,j,k)),y.has(h[j])){if(y.has(h[k])){const e=x.get(v[w]),t=void 0!==e?a$1[e]:null;if(null===t){const e=u$1(s,a$1[j]);c$2(e,p[w]),m$1[w]=e;}else m$1[w]=c$2(t,p[w]),u$1(s,a$1[j],t),a$1[e]=null;w++;}else m(a$1[k]),k--;}else m(a$1[j]),j++;for(;w<=A;){const e=u$1(s,m$1[A+1]);c$2(e,p[w]),m$1[w++]=e;}for(;j<=k;){const e=a$1[j++];null!==e&&m(e);}return this.ct=v,s$1(s,m$1),b;}});

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$1=e$2(class extends i$3{constructor(t){var i;if(super(t),t.type!==t$2.ATTRIBUTE||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");}render(t){return " "+Object.keys(t).filter(i=>t[i]).join(" ")+" ";}update(i,[s]){var r,o;if(void 0===this.st){this.st=new Set(),void 0!==i.strings&&(this.et=new Set(i.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in s)s[t]&&!(null===(r=this.et)||void 0===r?void 0:r.has(t))&&this.st.add(t);return this.render(s);}const e=i.element.classList;this.st.forEach(t=>{t in s||(e.remove(t),this.st.delete(t));});for(const t in s){const i=!!s[t];i===this.st.has(t)||(null===(o=this.et)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.st.add(t)):(e.remove(t),this.st.delete(t)));}return b;}});

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$1=e$2(class extends i$3{constructor(t){var e;if(super(t),t.type!==t$2.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");}render(t){return Object.keys(t).reduce((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`;},"");}update(e,[r]){const{style:s}=e.element;if(void 0===this.ut){this.ut=new Set();for(const t in r)this.ut.add(t);return this.render(r);}this.ut.forEach(t=>{null==r[t]&&(this.ut.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");});for(const t in r){const e=r[t];null!=e&&(this.ut.add(t),t.includes("-")?s.setProperty(t,e):s[t]=e);}return b;}});

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=(i,t)=>{var s,o;const n=i._$AN;if(void 0===n)return !1;for(const i of n)null===(o=(s=i)._$AO)||void 0===o||o.call(s,t,!1),e(i,t);return !0;},o=i=>{let t,s;do{if(void 0===(t=i._$AM))break;s=t._$AN,s.delete(i),i=t;}while(0===(null==s?void 0:s.size));},n$1=i=>{for(let t;t=i._$AM;i=t){let s=t._$AN;if(void 0===s)t._$AN=s=new Set();else if(s.has(i))break;s.add(i),l$1(t);}};function r(i){void 0!==this._$AN?(o(this),this._$AM=i,n$1(this)):this._$AM=i;}function h$1(i,t=!1,s=0){const n=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t){if(Array.isArray(n))for(let i=s;i<n.length;i++)e(n[i],!1),o(n[i]);else null!=n&&(e(n,!1),o(n));}else e(this,i);}const l$1=i=>{var t,e,o,n;i.type==t$2.CHILD&&(null!==(t=(o=i)._$AP)&&void 0!==t||(o._$AP=h$1),null!==(e=(n=i)._$AQ)&&void 0!==e||(n._$AQ=r));};class d extends i$3{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,s){super._$AT(i,t,s),n$1(this),this.isConnected=i._$AU;}_$AO(i,t=!0){var s,n;i!==this.isConnected&&(this.isConnected=i,i?null===(s=this.reconnected)||void 0===s||s.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),t&&(e(this,i),o(this));}setValue(t){if(r$1(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t=async(t,s)=>{for await(const i of t)if(!1===(await s(i)))return;};class s{constructor(t){this.U=t;}disconnect(){this.U=void 0;}reconnect(t){this.U=t;}deref(){return this.U;}}class i{constructor(){this.Y=void 0,this.q=void 0;}get(){return this.Y;}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise(t=>this.q=t));}resume(){var t;null===(t=this.q)||void 0===t||t.call(this),this.Y=this.q=void 0;}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n=t=>!t$1(t)&&"function"==typeof t.then;class h extends d{constructor(){super(...arguments),this._$Cft=1073741823,this._$Cwt=[],this._$CG=new s(this),this._$CK=new i();}render(...s){var i;return null!==(i=s.find(t=>!n(t)))&&void 0!==i?i:b;}update(s,i){const r=this._$Cwt;let e=r.length;this._$Cwt=i;const o=this._$CG,h=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<i.length&&!(t>this._$Cft);t++){const s=i[t];if(!n(s))return this._$Cft=t,s;t<e&&s===r[t]||(this._$Cft=1073741823,e=0,Promise.resolve(s).then(async t=>{for(;h.get();)await h.get();const i=o.deref();if(void 0!==i){const r=i._$Cwt.indexOf(s);r>-1&&r<i._$Cft&&(i._$Cft=r,i.setValue(t));}}));}return b;}disconnected(){this._$CG.disconnect(),this._$CK.pause();}reconnected(){this._$CG.reconnect(this),this._$CK.resume();}}const c=e$2(h);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=e$2(class extends i$3{constructor(r){if(super(r),r.type!==t$2.PROPERTY&&r.type!==t$2.ATTRIBUTE&&r.type!==t$2.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!r$1(r))throw Error("`live` bindings can only contain a single expression");}render(r){return r;}update(i,[t]){if(t===b||t===T)return t;const o=i.element,l=i.name;if(i.type===t$2.PROPERTY){if(t===o[l])return b;}else if(i.type===t$2.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(l))return b;}else if(i.type===t$2.ATTRIBUTE&&o.getAttribute(l)===t+"")return b;return s$1(i),t;}});

const styles=r$5`@charset "UTF-8";:host,:root{--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.3;--spectrum-global-color-static-white:#fff;--spectrum-global-color-static-black:#000;--spectrum-global-color-static-transparent:transparent;--spectrum-global-color-static-extend:#fff;--spectrum-global-color-static-primary:#2576f0;--spectrum-global-color-static-red:#f55240;--spectrum-global-color-static-green:#07b871;--spectrum-global-color-static-orange:#fa9b0c;--spectrum-global-color-static-white-opacity-300:hsla(0,0%,100%,.3);--spectrum-global-color-static-black-opacity-300:rgba(0,0,0,.3);--spectrum-global-color-static-primary-opacity-300:rgba(37,118,240,.3);--spectrum-global-color-static-red-opacity-300:rgba(245,82,64,.3);--spectrum-global-color-static-green-opacity-300:rgba(7,184,113,.3);--spectrum-global-color-static-orange-opacity-300:rgba(250,155,12,.3);--spectrum-global-color-static-celery-200:#58e06f;--spectrum-global-color-static-celery-300:#51d267;--spectrum-global-color-static-celery-400:#4bc35f;--spectrum-global-color-static-celery-500:#44b556;--spectrum-global-color-static-celery-600:#3da74e;--spectrum-global-color-static-celery-700:#379947;--spectrum-global-color-static-celery-800:#318b40;--spectrum-global-color-static-chartreuse-300:#9bec54;--spectrum-global-color-static-chartreuse-400:#8ede49;--spectrum-global-color-static-chartreuse-500:#85d044;--spectrum-global-color-static-chartreuse-600:#7cc33f;--spectrum-global-color-static-chartreuse-700:#73b53a;--spectrum-global-color-static-chartreuse-800:#6aa834;--spectrum-global-color-static-yellow-200:#ffe22e;--spectrum-global-color-static-yellow-300:#fad900;--spectrum-global-color-static-yellow-400:#edcc00;--spectrum-global-color-static-yellow-500:#dfbf00;--spectrum-global-color-static-yellow-600:#d2b200;--spectrum-global-color-static-yellow-700:#c4a600;--spectrum-global-color-static-yellow-800:#b79900;--spectrum-global-color-static-fuchsia-400:#cf3edc;--spectrum-global-color-static-fuchsia-500:#c038cc;--spectrum-global-color-static-fuchsia-600:#b130bd;--spectrum-global-color-static-fuchsia-700:#a228ad;--spectrum-global-color-static-fuchsia-800:#93219e;--spectrum-global-color-static-indigo-200:#9090fa;--spectrum-global-color-static-indigo-300:#8282f6;--spectrum-global-color-static-indigo-400:#7575f1;--spectrum-global-color-static-indigo-500:#6767ec;--spectrum-global-color-static-indigo-600:#5c5ce0;--spectrum-global-color-static-indigo-700:#5151d3;--spectrum-global-color-static-indigo-800:#4646c6;--spectrum-global-color-static-seafoam-200:#26c0c7;--spectrum-global-color-static-seafoam-300:#23b2b8;--spectrum-global-color-static-seafoam-400:#20a3a8;--spectrum-global-color-static-seafoam-500:#1b959a;--spectrum-global-color-static-seafoam-600:#16878c;--spectrum-global-color-static-seafoam-700:#0f797d;--spectrum-global-color-static-seafoam-800:#096c6f;--spectrum-global-color-static-primary-100:#eef4fe;--spectrum-global-color-static-primary-200:#cadefb;--spectrum-global-color-static-primary-300:#8fb8f7;--spectrum-global-color-static-primary-400:#3d86f3;--spectrum-global-color-static-primary-500:#2576f0;--spectrum-global-color-static-primary-600:#1f61ed;--spectrum-global-color-static-primary-700:#1544ea;--spectrum-global-color-static-primary-800:#fff;--spectrum-global-color-static-primary-900:#fff;--spectrum-global-color-static-green-100:#ebf9f4;--spectrum-global-color-static-green-200:#c3eedc;--spectrum-global-color-static-green-300:#7fdbb5;--spectrum-global-color-static-green-400:#28c787;--spectrum-global-color-static-green-500:#07b871;--spectrum-global-color-static-green-600:#06ab5d;--spectrum-global-color-static-green-700:#049a42;--spectrum-global-color-static-green-800:#fff;--spectrum-global-color-static-green-900:#fff;--spectrum-global-color-static-orange-100:#fff7ec;--spectrum-global-color-static-orange-200:#fee7c4;--spectrum-global-color-static-orange-300:#fccc82;--spectrum-global-color-static-orange-400:#fbad37;--spectrum-global-color-static-orange-500:#fa9b0c;--spectrum-global-color-static-orange-600:#f9890a;--spectrum-global-color-static-orange-700:#f87107;--spectrum-global-color-static-orange-800:#fff;--spectrum-global-color-static-orange-900:#fff;--spectrum-global-color-static-red-100:#fef1f0;--spectrum-global-color-static-red-200:#fdd5d1;--spectrum-global-color-static-red-300:#faa69d;--spectrum-global-color-static-red-400:#f76454;--spectrum-global-color-static-red-500:#f55240;--spectrum-global-color-static-red-600:#f34334;--spectrum-global-color-static-red-700:#f13025;--spectrum-global-color-static-red-800:#fff;--spectrum-global-color-static-red-900:#fff;--spectrum-global-color-static-purple-100:#f2f1ff;--spectrum-global-color-static-purple-200:#d7d2ff;--spectrum-global-color-static-purple-300:#aaa0ff;--spectrum-global-color-static-purple-400:#6857ff;--spectrum-global-color-static-purple-500:#5a47ff;--spectrum-global-color-static-purple-600:#4a3aff;--spectrum-global-color-static-purple-700:#3429ff;--spectrum-global-color-static-purple-800:#fff;--spectrum-global-color-static-purple-900:#fff;--spectrum-global-color-static-blue-100:#ebf7fe;--spectrum-global-color-static-blue-200:#c1e7fb;--spectrum-global-color-static-blue-300:#7bccf7;--spectrum-global-color-static-blue-400:#27acf3;--spectrum-global-color-static-blue-500:#009cf0;--spectrum-global-color-static-blue-600:#008aed;--spectrum-global-color-static-blue-700:#0072ea;--spectrum-global-color-static-blue-800:#fff;--spectrum-global-color-static-blue-900:#fff;--spectrum-global-color-static-blue:var(
--spectrum-global-color-static-blue-500
);--spectrum-global-color-static-lakeblue-100:#ebfbfd;--spectrum-global-color-static-lakeblue-200:#c2f2f7;--spectrum-global-color-static-lakeblue-300:#7ee4ef;--spectrum-global-color-static-lakeblue-400:#25d3e6;--spectrum-global-color-static-lakeblue-500:#04cae0;--spectrum-global-color-static-lakeblue-600:#03c0da;--spectrum-global-color-static-lakeblue-700:#02b4d3;--spectrum-global-color-static-lakeblue-800:#fff;--spectrum-global-color-static-lakeblue-900:#fff;--spectrum-global-color-static-magenta-100:#fff1f3;--spectrum-global-color-static-magenta-200:#ffd4db;--spectrum-global-color-static-magenta-300:#ffa4b2;--spectrum-global-color-static-magenta-400:#ff667e;--spectrum-global-color-static-magenta-500:#ff4f6a;--spectrum-global-color-static-magenta-600:#ff4157;--spectrum-global-color-static-magenta-700:#ff2e3d;--spectrum-global-color-static-magenta-800:#fff;--spectrum-global-color-static-magenta-900:#fff;--spectrum-global-color-opacity-100:1;--spectrum-global-color-opacity-90:0.9;--spectrum-global-color-opacity-80:0.8;--spectrum-global-color-opacity-60:0.6;--spectrum-global-color-opacity-50:0.5;--spectrum-global-color-opacity-42:0.42;--spectrum-global-color-opacity-40:0.4;--spectrum-global-color-opacity-30:0.3;--spectrum-global-color-opacity-25:0.25;--spectrum-global-color-opacity-20:0.2;--spectrum-global-color-opacity-15:0.15;--spectrum-global-color-opacity-10:0.1;--spectrum-global-color-opacity-8:0.08;--spectrum-global-color-opacity-7:0.07;--spectrum-global-color-opacity-6:0.06;--spectrum-global-color-opacity-5:0.05;--spectrum-global-color-opacity-4:0.04;--spectrum-global-color-primary-cover-100:rgba(36,114,233,.53);--spectrum-global-color-primary-cover-200:rgba(35,111,226,.56);--spectrum-global-color-red-cover-100:rgba(238,80,62,.53);--spectrum-global-color-red-cover-200:rgba(230,77,60,.56);--spectrum-global-color-green-cover-100:rgba(7,178,110,.53);--spectrum-global-color-green-cover-200:rgba(7,173,106,.56);--spectrum-global-color-gray-cover-100:hsla(0,0%,85%,.53);--spectrum-global-color-gray-cover-200:hsla(0,0%,83%,.56);--spectrum-global-color-gray-100-cover-100:hsla(0,0%,97%,.53);--spectrum-global-color-gray-100-cover-200:hsla(0,0%,94%,.56);--spectrum-global-color-gray-200-cover-100:hsla(0,0%,95%,.53);--spectrum-global-color-gray-200-cover-200:hsla(0,0%,92%,.56);--spectrum-global-color-gray-300-cover-100:hsla(0,0%,93%,.53);--spectrum-global-color-gray-300-cover-200:hsla(0,0%,90%,.56);--spectrum-global-color-gray-400-cover-100:hsla(0,0%,89%,.53);--spectrum-global-color-gray-400-cover-200:hsla(0,0%,87%,.56);--spectrum-global-color-gray-600-cover-100:hsla(0,0%,74%,.53);--spectrum-global-color-gray-600-cover-200:hsla(0,0%,71%,.56);--spectrum-global-color-gray-700-cover-100:hsla(0,0%,56%,.53);--spectrum-global-color-gray-700-cover-200:hsla(0,0%,55%,.56);--spectrum-global-color-gray-800-cover-100:rgba(69,69,69,.53);--spectrum-global-color-gray-800-cover-200:rgba(67,67,67,.56);--spectrum-global-color-gray-900-cover-100:rgba(30,30,30,.53);--spectrum-global-color-gray-900-cover-200:#1f1f1f}:host,:root{--spectrum-global-dimension-static-size-0:0px;--spectrum-global-dimension-static-size-10:1px;--spectrum-global-dimension-static-size-25:2px;--spectrum-global-dimension-static-size-40:3px;--spectrum-global-dimension-static-size-50:4px;--spectrum-global-dimension-static-size-65:5px;--spectrum-global-dimension-static-size-75:6px;--spectrum-global-dimension-static-size-85:7px;--spectrum-global-dimension-static-size-100:8px;--spectrum-global-dimension-static-size-115:9px;--spectrum-global-dimension-static-size-125:10px;--spectrum-global-dimension-static-size-130:11px;--spectrum-global-dimension-static-size-150:12px;--spectrum-global-dimension-static-size-160:13px;--spectrum-global-dimension-static-size-175:14px;--spectrum-global-dimension-static-size-200:16px;--spectrum-global-dimension-static-size-225:18px;--spectrum-global-dimension-static-size-250:20px;--spectrum-global-dimension-static-size-275:22px;--spectrum-global-dimension-static-size-300:24px;--spectrum-global-dimension-static-size-325:26px;--spectrum-global-dimension-static-size-400:32px;--spectrum-global-dimension-static-size-450:36px;--spectrum-global-dimension-static-size-500:40px;--spectrum-global-dimension-static-size-550:44px;--spectrum-global-dimension-static-size-600:48px;--spectrum-global-dimension-static-size-700:56px;--spectrum-global-dimension-static-size-800:64px;--spectrum-global-dimension-static-size-900:72px;--spectrum-global-dimension-static-size-1000:80px;--spectrum-global-dimension-static-size-1200:96px;--spectrum-global-dimension-static-size-1700:136px;--spectrum-global-dimension-static-size-2400:192px;--spectrum-global-dimension-static-size-2500:200px;--spectrum-global-dimension-static-size-2600:208px;--spectrum-global-dimension-static-size-2800:224px;--spectrum-global-dimension-static-size-3200:256px;--spectrum-global-dimension-static-size-3400:272px;--spectrum-global-dimension-static-size-3500:280px;--spectrum-global-dimension-static-size-3600:288px;--spectrum-global-dimension-static-size-3800:304px;--spectrum-global-dimension-static-size-4600:368px;--spectrum-global-dimension-static-size-5000:400px;--spectrum-global-dimension-static-size-6000:480px;--spectrum-global-dimension-static-size-16000:1280px;--spectrum-global-dimension-static-size-max:99999;--spectrum-global-dimension-static-font-size-50:11px;--spectrum-global-dimension-static-font-size-75:12px;--spectrum-global-dimension-static-font-size-100:14px;--spectrum-global-dimension-static-font-size-150:15px;--spectrum-global-dimension-static-font-size-200:16px;--spectrum-global-dimension-static-font-size-300:18px;--spectrum-global-dimension-static-font-size-400:20px;--spectrum-global-dimension-static-font-size-500:22px;--spectrum-global-dimension-static-font-size-600:25px;--spectrum-global-dimension-static-font-size-700:28px;--spectrum-global-dimension-static-font-size-800:32px;--spectrum-global-dimension-static-font-size-900:36px;--spectrum-global-dimension-static-font-size-1000:40px;--spectrum-global-dimension-static-percent-50:50%;--spectrum-global-dimension-static-percent-100:100%;--spectrum-global-dimension-static-breakpoint-xsmall:304px;--spectrum-global-dimension-static-breakpoint-small:768px;--spectrum-global-dimension-static-breakpoint-medium:1280px;--spectrum-global-dimension-static-breakpoint-large:1768px;--spectrum-global-dimension-static-breakpoint-xlarge:2160px;--spectrum-global-dimension-static-grid-columns:12;--spectrum-global-dimension-static-grid-fluid-width:100%;--spectrum-global-dimension-static-grid-fixed-max-width:1280px}:host,:root{--spectrum-global-font-family-base:adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-family-serif:adobe-clean-serif,"Source Serif Pro",Georgia,serif;--spectrum-global-font-family-code:"Source Code Pro",Monaco,monospace;--spectrum-global-font-weight-thin:100;--spectrum-global-font-weight-ultra-light:200;--spectrum-global-font-weight-light:300;--spectrum-global-font-weight-regular:400;--spectrum-global-font-weight-medium:500;--spectrum-global-font-weight-semi-bold:600;--spectrum-global-font-weight-bold:700;--spectrum-global-font-weight-extra-bold:800;--spectrum-global-font-weight-black:900;--spectrum-global-font-style-regular:normal;--spectrum-global-font-style-italic:italic;--spectrum-global-font-letter-spacing-none:0;--spectrum-global-font-letter-spacing-small:0.0125em;--spectrum-global-font-letter-spacing-han:0.05em;--spectrum-global-font-letter-spacing-medium:0.06em;--spectrum-global-font-line-height-large:1.7;--spectrum-global-font-line-height-medium:1.5;--spectrum-global-font-line-height-small:1.3;--spectrum-global-font-multiplier-25:0.25em;--spectrum-global-font-multiplier-75:0.75em}:host,:root{--spectrum-global-animation-duration-0:0ms;--spectrum-global-animation-duration-100:130ms;--spectrum-global-animation-duration-200:160ms;--spectrum-global-animation-duration-300:190ms;--spectrum-global-animation-duration-400:220ms;--spectrum-global-animation-duration-500:250ms;--spectrum-global-animation-duration-600:300ms;--spectrum-global-animation-duration-700:350ms;--spectrum-global-animation-duration-800:400ms;--spectrum-global-animation-duration-900:450ms;--spectrum-global-animation-duration-1000:500ms;--spectrum-global-animation-duration-2000:1000ms;--spectrum-global-animation-duration-4000:2000ms;--spectrum-global-animation-delay-100:50ms;--spectrum-global-animation-ease-in-out:cubic-bezier(0.45,0,0.4,1);--spectrum-global-animation-ease-in:cubic-bezier(0.5,0,1,1);--spectrum-global-animation-ease-out:cubic-bezier(0,0,0.4,1);--spectrum-global-animation-linear:cubic-bezier(0,0,1,1)}:host,:root{--spectrum-alias-border-size-thin:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-border-size-thick:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-border-size-thicker:var(
--spectrum-global-dimension-static-size-50
);--spectrum-alias-border-size-thickest:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-border-offset-thin:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-border-offset-thick:var(
--spectrum-global-dimension-static-size-50
);--spectrum-alias-border-offset-thicker:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-border-offset-thickest:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-baseline:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-grid-gutter-xsmall:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-gutter-small:var(
--spectrum-global-dimension-static-size-300
);--spectrum-alias-grid-gutter-medium:var(
--spectrum-global-dimension-static-size-400
);--spectrum-alias-grid-gutter-large:var(
--spectrum-global-dimension-static-size-500
);--spectrum-alias-grid-gutter-xlarge:var(
--spectrum-global-dimension-static-size-600
);--spectrum-alias-grid-margin-xsmall:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-margin-small:var(
--spectrum-global-dimension-static-size-300
);--spectrum-alias-grid-margin-medium:var(
--spectrum-global-dimension-static-size-400
);--spectrum-alias-grid-margin-large:var(
--spectrum-global-dimension-static-size-500
);--spectrum-alias-grid-margin-xlarge:var(
--spectrum-global-dimension-static-size-600
);--spectrum-alias-grid-layout-region-margin-bottom-xsmall:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-layout-region-margin-bottom-small:var(
--spectrum-global-dimension-static-size-300
);--spectrum-alias-grid-layout-region-margin-bottom-medium:var(
--spectrum-global-dimension-static-size-400
);--spectrum-alias-grid-layout-region-margin-bottom-large:var(
--spectrum-global-dimension-static-size-500
);--spectrum-alias-grid-layout-region-margin-bottom-xlarge:var(
--spectrum-global-dimension-static-size-600
);--spectrum-alias-radial-reaction-size-default:var(
--spectrum-global-dimension-static-size-550
);--spectrum-alias-font-family-ar:myriad-arabic,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-alias-font-family-he:myriad-hebrew,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-alias-font-family-zh:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light","sans-serif";--spectrum-alias-font-family-zhhans:adobe-clean-han-simplified-c,source-han-simplified-c,"SimSun","Heiti SC Light","sans-serif";--spectrum-alias-font-family-ko:adobe-clean-han-korean,source-han-korean,"Malgun Gothic","Apple Gothic","sans-serif";--spectrum-alias-font-family-ja:adobe-clean-han-japanese,source-han-japanese,"Yu Gothic","メイリオ","ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro W3","Osaka","ＭＳＰゴシック","MS PGothic","sans-serif";--spectrum-alias-font-family-condensed:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light",adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-alias-body-text-font-family:var(
--spectrum-global-font-family-base
);--spectrum-alias-body-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-body-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-body-text-font-weight-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-button-text-line-height:var(
--spectrum-global-font-line-height-small
);--spectrum-alias-component-text-line-height:var(
--spectrum-global-font-line-height-small
);--spectrum-alias-han-component-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-heading-text-line-height:var(
--spectrum-global-font-line-height-small
);--spectrum-alias-heading-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-heading-text-font-weight-regular-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-text-font-weight-quiet:var(
--spectrum-global-font-weight-light
);--spectrum-alias-heading-text-font-weight-quiet-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-heading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-text-font-weight-strong-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-subheading-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-subheading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-detail-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-detail-text-font-weight-light:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-detail-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-serif-text-font-family:var(
--spectrum-global-font-family-serif
);--spectrum-alias-article-body-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-article-body-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-heading-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-article-heading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-heading-text-font-weight-quiet:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-article-heading-text-font-weight-quiet-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-article-subheading-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-article-subheading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-detail-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-article-detail-text-font-weight-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-code-text-font-family:var(
--spectrum-global-font-family-code
);--spectrum-alias-han-heading-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-han-heading-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-heading-text-font-weight-regular-emphasis:var(
--spectrum-global-font-weight-extra-bold
);--spectrum-alias-han-heading-text-font-weight-regular-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-heading-text-font-weight-quiet-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-heading-text-font-weight-light:var(
--spectrum-global-font-weight-light
);--spectrum-alias-han-heading-text-font-weight-light-emphasis:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-han-heading-text-font-weight-light-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-heading-text-font-weight-heavy:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-heading-text-font-weight-heavy-emphasis:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-heading-text-font-weight-heavy-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-body-text-line-height:var(
--spectrum-global-font-line-height-large
);--spectrum-alias-han-body-text-font-weight-regular:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-han-body-text-font-weight-emphasis:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-body-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-subheading-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-subheading-text-font-weight-emphasis:var(
--spectrum-global-font-weight-extra-bold
);--spectrum-alias-han-subheading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-detail-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-han-detail-text-font-weight-emphasis:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-detail-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-code-text-font-weight-regular:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-code-text-font-weight-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-code-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-heading-margin-bottom:var(
--spectrum-global-font-multiplier-25
);--spectrum-alias-body-margin-bottom:var(
--spectrum-global-font-multiplier-75
);--spectrum-alias-focus-ring-gap:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-focus-ring-size:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-loupe-entry-animation-duration:var(
--spectrum-global-animation-duration-300
);--spectrum-alias-loupe-exit-animation-duration:var(
--spectrum-global-animation-duration-300
)}:host,:root{--spectrum-alias-font-weight-s:var(--spectrum-global-font-weight-regular);--spectrum-alias-font-weight-m:var(--spectrum-global-font-weight-medium);--spectrum-alias-font-weight-l:var(
--spectrum-global-font-weight-semi-bold
);--spectrum-alias-font-size-s:var(--spectrum-global-dimension-font-size-75);--spectrum-alias-font-size-m:var(--spectrum-global-dimension-font-size-75);--spectrum-alias-font-size-l:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-font-size-xl:var(
--spectrum-global-dimension-font-size-300
)}:host,:root{--spectrum-alias-dropshadow-blur:var(--spectrum-global-dimension-size-50);--spectrum-alias-dropshadow-offset-y:var(
--spectrum-global-dimension-size-10
);--spectrum-alias-font-size-default:var(
--spectrum-global-dimension-font-size-75
);--spectrum-alias-layout-label-gap-size:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-pill-button-text-size:var(
--spectrum-global-dimension-font-size-75
);--spectrum-alias-pill-button-text-baseline:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-border-radius-xsmall:var(
--spectrum-global-dimension-size-10
);--spectrum-alias-border-radius-small:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-border-radius-regular:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-border-radius-medium:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-border-radius-large:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-border-radius-full:var(
--spectrum-global-dimension-static-size-max
);--spectrum-alias-single-line-height:var(
--spectrum-global-dimension-size-400
);--spectrum-alias-single-line-width:var(
--spectrum-global-dimension-size-2400
);--spectrum-alias-item-height-s:var(--spectrum-global-dimension-size-350);--spectrum-alias-item-height-m:var(--spectrum-global-dimension-size-400);--spectrum-alias-item-height-l:var(--spectrum-global-dimension-size-500);--spectrum-alias-item-height-xl:var(--spectrum-global-dimension-size-600);--spectrum-alias-item-rounded-border-radius-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-rounded-border-radius-m:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-rounded-border-radius-l:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-item-rounded-border-radius-xl:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-item-text-size-s:var(
--spectrum-global-dimension-font-size-75
);--spectrum-alias-item-text-size-m:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-item-text-size-l:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-item-text-size-xl:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-item-text-padding-top-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-text-padding-top-m:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-text-padding-top-xl:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-text-padding-bottom-m:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-text-padding-bottom-l:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-text-padding-bottom-xl:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-icon-padding-top-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-icon-padding-top-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-icon-padding-top-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-icon-padding-top-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-icon-padding-bottom-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-icon-padding-bottom-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-icon-padding-bottom-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-icon-padding-bottom-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-mark-padding-top-s:var(
--spectrum-global-dimension-size-40
);--spectrum-alias-item-mark-padding-top-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-mark-padding-top-xl:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-mark-padding-bottom-s:var(
--spectrum-global-dimension-size-40
);--spectrum-alias-item-mark-padding-bottom-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-mark-padding-bottom-xl:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-padding-s:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-padding-m:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-padding-l:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-padding-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-rounded-padding-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-rounded-padding-m:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-rounded-padding-l:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-item-rounded-padding-xl:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-item-icononly-padding-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-icononly-padding-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-icononly-padding-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-icononly-padding-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-workflow-padding-left-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-workflow-padding-left-l:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-workflow-padding-left-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-item-rounded-workflow-padding-left-s:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-rounded-workflow-padding-left-l:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-mark-padding-left-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-mark-padding-left-l:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-mark-padding-left-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-item-control-1-size-s:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-control-1-size-m:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-control-2-size-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-control-2-size-l:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-control-2-size-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-control-2-size-xxl:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-item-control-3-height-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-control-3-height-l:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-control-3-height-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-mark-size-s:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-mark-size-l:var(
--spectrum-global-dimension-size-275
);--spectrum-alias-item-mark-size-xl:var(
--spectrum-global-dimension-size-325
);--spectrum-alias-workflow-icon-size-s:var(--spectrum-alias-icon-size-s);--spectrum-alias-workflow-icon-size-m:var(--spectrum-alias-icon-size-m);--spectrum-alias-workflow-icon-size-l:var(--spectrum-alias-icon-size-l);--spectrum-alias-workflow-icon-size-xl:var(--spectrum-alias-icon-size-xl);--spectrum-alias-ui-icon-alert-size-75:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-ui-icon-alert-size-100:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-ui-icon-alert-size-200:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-ui-icon-alert-size-300:var(
--spectrum-global-dimension-size-275
);--spectrum-alias-ui-icon-triplegripper-size-100-height:var(
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
--spectrum-global-dimension-size-100
);--spectrum-alias-ui-icon-asterisk-size-100:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-control-gap-s:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-gap-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-gap-l:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-control-gap-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-workflow-icon-gap-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-workflow-icon-gap-m:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-workflow-icon-gap-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-workflow-icon-gap-xl:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-mark-gap-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-item-mark-gap-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-mark-gap-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-mark-gap-xl:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-ui-icon-gap-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-ui-icon-gap-m:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-ui-icon-gap-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-ui-icon-gap-xl:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-clearbutton-gap-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-clearbutton-gap-m:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-clearbutton-gap-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-clearbutton-gap-xl:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-heading-xxxl-text-size:var(
--spectrum-global-dimension-font-size-1300
);--spectrum-alias-heading-han-xxxl-text-size:var(
--spectrum-global-dimension-font-size-1300
);--spectrum-alias-heading-han-xxxl-margin-top:var(
--spectrum-global-dimension-font-size-1200
);--spectrum-alias-heading-xxxl-margin-top:var(
--spectrum-global-dimension-font-size-1200
);--spectrum-alias-heading-xxl-text-size:var(
--spectrum-global-dimension-font-size-1100
);--spectrum-alias-heading-xxl-margin-top:var(
--spectrum-global-dimension-font-size-900
);--spectrum-alias-heading-han-xxl-text-size:var(
--spectrum-global-dimension-font-size-900
);--spectrum-alias-heading-han-xxl-margin-top:var(
--spectrum-global-dimension-font-size-800
);--spectrum-alias-heading-xl-text-size:var(
--spectrum-global-dimension-font-size-900
);--spectrum-alias-heading-xl-margin-top:var(
--spectrum-global-dimension-font-size-800
);--spectrum-alias-heading-han-xl-text-size:var(
--spectrum-global-dimension-font-size-800
);--spectrum-alias-heading-han-xl-margin-top:var(
--spectrum-global-dimension-font-size-700
);--spectrum-alias-heading-l-text-size:var(
--spectrum-global-dimension-font-size-700
);--spectrum-alias-heading-l-margin-top:var(
--spectrum-global-dimension-font-size-600
);--spectrum-alias-heading-han-l-text-size:var(
--spectrum-global-dimension-font-size-600
);--spectrum-alias-heading-han-l-margin-top:var(
--spectrum-global-dimension-font-size-500
);--spectrum-alias-heading-m-text-size:var(
--spectrum-global-dimension-font-size-500
);--spectrum-alias-heading-m-margin-top:var(
--spectrum-global-dimension-font-size-400
);--spectrum-alias-heading-han-m-text-size:var(
--spectrum-global-dimension-font-size-400
);--spectrum-alias-heading-han-m-margin-top:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-heading-s-text-size:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-heading-s-margin-top:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-heading-xs-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-heading-xs-margin-top:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-heading-xxs-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-heading-xxs-margin-top:var(
--spectrum-global-dimension-font-size-75
);--spectrum-alias-avatar-size-50:var(--spectrum-global-dimension-size-200);--spectrum-alias-avatar-size-75:var(--spectrum-global-dimension-size-225);--spectrum-alias-avatar-size-200:var(--spectrum-global-dimension-size-275);--spectrum-alias-avatar-size-300:var(--spectrum-global-dimension-size-325);--spectrum-alias-avatar-size-500:var(--spectrum-global-dimension-size-400);--spectrum-alias-avatar-size-700:var(--spectrum-global-dimension-size-500);--spectrum-alias-space-0:var(--spectrum-global-dimension-size-0);--spectrum-alias-space-50:var(--spectrum-global-dimension-size-50);--spectrum-alias-space-100:var(--spectrum-global-dimension-size-100);--spectrum-alias-space-150:var(--spectrum-global-dimension-size-150);--spectrum-alias-space-200:var(--spectrum-global-dimension-size-200);--spectrum-alias-space-300:var(--spectrum-global-dimension-size-300);--spectrum-alias-space-400:var(--spectrum-global-dimension-size-400);--spectrum-alias-space-500:var(--spectrum-global-dimension-size-500);--spectrum-alias-padding-none:var(--spectrum-alias-space-0);--spectrum-alias-padding-s:var(--spectrum-alias-space-50);--spectrum-alias-padding-m:var(--spectrum-alias-space-100);--spectrum-alias-padding-l:var(--spectrum-alias-space-150);--spectrum-alias-padding-xl:var(--spectrum-alias-space-200);--spectrum-alias-control-height-s:var(
--spectrum-global-dimension-size-350
);--spectrum-alias-control-height-m:var(
--spectrum-global-dimension-size-400
);--spectrum-alias-control-height-l:var(
--spectrum-global-dimension-size-500
);--spectrum-alias-control-height-xl:var(
--spectrum-global-dimension-size-600
);--spectrum-alias-icon-size-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-icon-size-m:var(--spectrum-global-dimension-size-200);--spectrum-alias-icon-size-l:var(--spectrum-global-dimension-size-250);--spectrum-alias-icon-size-xl:var(--spectrum-global-dimension-size-300);--spectrum-alias-border-size-s:var(--spectrum-global-dimension-size-10);--spectrum-alias-border-size-m:var(--spectrum-global-dimension-size-25);--spectrum-alias-border-size-l:var(--spectrum-global-dimension-size-50);--spectrum-alias-border-size-xl:var(--spectrum-global-dimension-size-100)}:host,:root{--spectrum-alias-background-color-default:var(
--spectrum-global-color-gray-100
);--spectrum-alias-background-color-transparent:transparent;--spectrum-alias-background-color-over-background-down:hsla(0,0%,100%,.2);--spectrum-alias-background-color-quickactions-overlay:rgba(0,0,0,.2);--spectrum-alias-placeholder-text-color:var(
--spectrum-global-color-gray-800
);--spectrum-alias-placeholder-text-color-hover:var(
--spectrum-global-color-gray-900
);--spectrum-alias-placeholder-text-color-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-placeholder-text-color-selected:var(
--spectrum-global-color-gray-800
);--spectrum-alias-label-text-color:var(--spectrum-global-color-gray-700);--spectrum-alias-text-color:var(--spectrum-global-color-gray-800);--spectrum-alias-text-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-key-focus:var(
--spectrum-global-color-static-primary-500
);--spectrum-alias-text-color-mouse-focus:var(
--spectrum-global-color-static-primary-500
);--spectrum-alias-text-color-disabled:var(--spectrum-global-color-gray-500);--spectrum-alias-text-color-invalid:var(--spectrum-global-color-red-500);--spectrum-alias-text-color-selected:var(
--spectrum-global-color-static-primary-500
);--spectrum-alias-text-color-selected-neutral:var(
--spectrum-global-color-gray-900
);--spectrum-alias-text-color-over-background:var(
--spectrum-global-color-static-white
);--spectrum-alias-text-color-over-background-disabled:hsla(0,0%,100%,.2);--spectrum-alias-heading-text-color:var(--spectrum-global-color-gray-900);--spectrum-alias-border-color:var(--spectrum-global-color-gray-300);--spectrum-alias-border-color-hover:var(
--spectrum-global-color-static-primary-500
);--spectrum-alias-border-color-down:var(
--spectrum-global-color-static-primary-500
);--spectrum-alias-border-color-focus:var(
--spectrum-global-color-static-primary-500
);--spectrum-alias-border-color-mouse-focus:var(
--spectrum-global-color-static-primary-500
);--spectrum-alias-border-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-alias-border-color-extralight:var(
--spectrum-global-color-gray-100
);--spectrum-alias-border-color-light:var(--spectrum-global-color-gray-200);--spectrum-alias-border-color-mid:var(--spectrum-global-color-gray-300);--spectrum-alias-border-color-dark:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-darker-default:var(
--spectrum-global-color-gray-600
);--spectrum-alias-border-color-darker-hover:var(
--spectrum-global-color-gray-900
);--spectrum-alias-border-color-darker-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-border-color-transparent:transparent;--spectrum-alias-border-color-translucent-dark:rgba(0,0,0,.05);--spectrum-alias-border-color-translucent-darker:rgba(0,0,0,.1);--spectrum-alias-focus-color:var(
--spectrum-global-color-static-primary-500
);--spectrum-alias-focus-ring-color:var(--spectrum-alias-focus-color);--spectrum-alias-track-color-default:var(--spectrum-global-color-gray-300);--spectrum-alias-track-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-alias-track-color-over-background:hsla(0,0%,100%,.2);--spectrum-alias-icon-color:var(--spectrum-global-color-gray-700);--spectrum-alias-icon-color-over-background:var(
--spectrum-global-color-static-white
);--spectrum-alias-icon-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-focus:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-disabled:var(--spectrum-global-color-gray-400);--spectrum-alias-icon-color-over-background-disabled:hsla(0,0%,100%,.2);--spectrum-alias-icon-color-selected-neutral:var(
--spectrum-global-color-gray-900
);--spectrum-alias-icon-color-selected:var(
--spectrum-global-color-static-primary-500
);--spectrum-alias-icon-color-selected-hover:var(
--spectrum-global-color-static-primary-500
);--spectrum-alias-icon-color-selected-down:var(
--spectrum-global-color-static-primary-600
);--spectrum-alias-icon-color-selected-focus:var(
--spectrum-global-color-static-primary-500
);--spectrum-alias-image-opacity-disabled:var(
--spectrum-global-color-opacity-30
);--spectrum-alias-toolbar-background-color:var(
--spectrum-global-color-gray-100
);--spectrum-alias-colorhandle-outer-border-color:rgba(0,0,0,.42);--spectrum-alias-code-highlight-color-default:var(
--spectrum-global-color-gray-800
);--spectrum-alias-code-highlight-color-background:var(
--spectrum-global-color-gray-75
);--spectrum-alias-code-highlight-color-keyword:var(
--spectrum-global-color-fuchsia-600
);--spectrum-alias-code-highlight-color-section:var(
--spectrum-global-color-red-600
);--spectrum-alias-code-highlight-color-literal:var(
--spectrum-global-color-static-primary-500
);--spectrum-alias-code-highlight-color-attribute:var(
--spectrum-global-color-seafoam-600
);--spectrum-alias-code-highlight-color-class:var(
--spectrum-global-color-magenta-600
);--spectrum-alias-code-highlight-color-variable:var(
--spectrum-global-color-purple-600
);--spectrum-alias-code-highlight-color-title:var(
--spectrum-global-color-indigo-600
);--spectrum-alias-code-highlight-color-string:var(
--spectrum-global-color-fuchsia-600
);--spectrum-alias-code-highlight-color-function:var(
--spectrum-global-color-static-primary-500
);--spectrum-alias-code-highlight-color-comment:var(
--spectrum-global-color-gray-700
);--spectrum-alias-categorical-color-1:var(
--spectrum-global-color-static-seafoam-200
);--spectrum-alias-categorical-color-2:var(
--spectrum-global-color-static-indigo-700
);--spectrum-alias-categorical-color-3:var(
--spectrum-global-color-static-orange-500
);--spectrum-alias-categorical-color-4:var(
--spectrum-global-color-static-magenta-500
);--spectrum-alias-categorical-color-5:var(
--spectrum-global-color-static-indigo-200
);--spectrum-alias-categorical-color-6:var(
--spectrum-global-color-static-celery-200
);--spectrum-alias-categorical-color-7:var(
--spectrum-global-color-static-blue-500
);--spectrum-alias-categorical-color-8:var(
--spectrum-global-color-static-purple-800
);--spectrum-alias-categorical-color-9:var(
--spectrum-global-color-static-yellow-500
);--spectrum-alias-categorical-color-10:var(
--spectrum-global-color-static-orange-700
);--spectrum-alias-categorical-color-11:var(
--spectrum-global-color-static-green-600
);--spectrum-alias-categorical-color-12:var(
--spectrum-global-color-static-chartreuse-300
);--spectrum-alias-categorical-color-13:var(
--spectrum-global-color-static-blue-200
);--spectrum-alias-categorical-color-14:var(
--spectrum-global-color-static-fuchsia-500
);--spectrum-alias-categorical-color-15:var(
--spectrum-global-color-static-magenta-200
);--spectrum-alias-categorical-color-16:var(
--spectrum-global-color-static-yellow-200
);--spectrum-alias-background-color-primary:var(
--spectrum-global-color-gray-100
);--spectrum-alias-background-color-secondary:var(
--spectrum-global-color-gray-200
);--spectrum-alias-background-color-tertiary:var(
--spectrum-global-color-gray-100
);--spectrum-alias-background-color-quaternary:var(
--spectrum-global-color-gray-300
);--spectrum-alias-background-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-alias-cover-color-0:transparent;--spectrum-alias-cover-color-100:rgba(0,0,0,.06);--spectrum-alias-cover-color-200:rgba(0,0,0,.12);--spectrum-alias-border-color-100:rgba(0,0,0,.08);--spectrum-alias-border-color-200:rgba(0,0,0,.16);--spectrum-alias-border-color-light:var(--spectrum-alias-border-color-100);--spectrum-alias-border-color-dark:var(--spectrum-alias-border-color-200);--spectrum-alias-text-color-primary:rgba(0,0,0,.88);--spectrum-alias-text-color-secondary:rgba(0,0,0,.72);--spectrum-alias-text-color-placeholder:rgba(0,0,0,.42);--spectrum-alias-text-color-disabled:rgba(0,0,0,.24);--spectrum-alias-text-color-link:#2576f0;--spectrum-alias-icon-color-primary:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-secondary:var(
--spectrum-global-color-gray-800
);--spectrum-alias-icon-color-tertiary:var(--spectrum-global-color-gray-700);--spectrum-alias-icon-color-disabled:var(--spectrum-global-color-gray-500);--spectrum-alias-icon-color-activited:var(
--spectrum-global-color-static-primary-500
)}:host,:root{--spectrum-alias-animation-duration-none:0;--spectrum-alias-animation-duration-s:var(
--spectrum-gloabl-animation-duration-100
);--spectrum-alias-animation-duration-m:var(
--spectrum-global-animation-duration-400
);--spectrum-alias-animation-duration-l:var(
--spectrum-global-animation-duration-700
);--spectrum-alias-animation-duration-xl:var(
--spectrum-global-animation-duration-1000
);--spectrum-alias-animation-delay-m:var(
--spectrum-global-animation-delay-100
);--spectrum-alias-animation-ease-in-out:var(
--spectrum-global-animation-ease-in-out
);--spectrum-alias-animation-ease-in:var(
--spectrum-global-animation-ease-in
);--spectrum-alias-animation-ease-out:var(
--spectrum-global-animation-ease-out
);--spectrum-alias-animation-linear:var(--spectrum-global-animation-linear)}:host,:root{--spectrum-semantic-negative-color-background:var(
--spectrum-global-color-static-red-700
);--spectrum-semantic-negative-color-default:var(
--spectrum-global-color-red-500
);--spectrum-semantic-negative-color-state-hover:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-color-dark:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-color-border:var(
--spectrum-global-color-red-400
);--spectrum-semantic-negative-color-icon:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-color-status:var(
--spectrum-global-color-red-400
);--spectrum-semantic-negative-color-text-large:var(
--spectrum-global-color-red-500
);--spectrum-semantic-negative-color-text-small:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-color-state-down:var(
--spectrum-global-color-red-700
);--spectrum-semantic-negative-color-state-focus:var(
--spectrum-global-color-red-400
);--spectrum-semantic-negative-background-color-default:var(
--spectrum-global-color-static-red-600
);--spectrum-semantic-negative-background-color-hover:var(
--spectrum-global-color-static-red-700
);--spectrum-semantic-negative-background-color-down:var(
--spectrum-global-color-static-red-800
);--spectrum-semantic-negative-background-color-key-focus:var(
--spectrum-global-color-static-red-700
);--spectrum-semantic-notice-color-background:var(
--spectrum-global-color-static-orange-700
);--spectrum-semantic-notice-color-default:var(
--spectrum-global-color-orange-500
);--spectrum-semantic-notice-color-dark:var(
--spectrum-global-color-orange-600
);--spectrum-semantic-notice-color-border:var(
--spectrum-global-color-orange-400
);--spectrum-semantic-notice-color-icon:var(
--spectrum-global-color-orange-600
);--spectrum-semantic-notice-color-status:var(
--spectrum-global-color-orange-400
);--spectrum-semantic-notice-color-text-large:var(
--spectrum-global-color-orange-500
);--spectrum-semantic-notice-color-text-small:var(
--spectrum-global-color-orange-600
);--spectrum-semantic-notice-color-state-down:var(
--spectrum-global-color-orange-700
);--spectrum-semantic-notice-color-state-focus:var(
--spectrum-global-color-orange-400
);--spectrum-semantic-notice-background-color-default:var(
--spectrum-global-color-static-orange-600
);--spectrum-semantic-notice-background-color-hover:var(
--spectrum-global-color-static-orange-700
);--spectrum-semantic-notice-background-color-down:var(
--spectrum-global-color-static-orange-800
);--spectrum-semantic-notice-background-color-key-focus:var(
--spectrum-global-color-static-orange-700
);--spectrum-semantic-positive-color-background:var(
--spectrum-global-color-static-green-700
);--spectrum-semantic-positive-color-default:var(
--spectrum-global-color-green-500
);--spectrum-semantic-positive-color-dark:var(
--spectrum-global-color-green-600
);--spectrum-semantic-positive-color-border:var(
--spectrum-global-color-green-400
);--spectrum-semantic-positive-color-icon:var(
--spectrum-global-color-green-600
);--spectrum-semantic-positive-color-status:var(
--spectrum-global-color-green-400
);--spectrum-semantic-positive-color-text-large:var(
--spectrum-global-color-green-500
);--spectrum-semantic-positive-color-text-small:var(
--spectrum-global-color-green-600
);--spectrum-semantic-positive-color-state-down:var(
--spectrum-global-color-green-700
);--spectrum-semantic-positive-color-state-focus:var(
--spectrum-global-color-green-400
);--spectrum-semantic-positive-background-color-default:var(
--spectrum-global-color-static-green-600
);--spectrum-semantic-positive-background-color-hover:var(
--spectrum-global-color-static-green-700
);--spectrum-semantic-positive-background-color-down:var(
--spectrum-global-color-static-green-800
);--spectrum-semantic-positive-background-color-key-focus:var(
--spectrum-global-color-static-green-700
);--spectrum-semantic-informative-color-background:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-informative-color-default:var(
--spectrum-global-color-blue-500
);--spectrum-semantic-informative-color-dark:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-informative-color-border:var(
--spectrum-global-color-blue-400
);--spectrum-semantic-informative-color-icon:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-informative-color-status:var(
--spectrum-global-color-blue-400
);--spectrum-semantic-informative-color-text-large:var(
--spectrum-global-color-blue-500
);--spectrum-semantic-informative-color-text-small:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-informative-color-state-down:var(
--spectrum-global-color-blue-700
);--spectrum-semantic-informative-color-state-focus:var(
--spectrum-global-color-blue-400
);--spectrum-semantic-informative-background-color-default:var(
--spectrum-global-color-static-blue-600
);--spectrum-semantic-informative-background-color-hover:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-informative-background-color-down:var(
--spectrum-global-color-static-blue-800
);--spectrum-semantic-informative-background-color-key-focus:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-cta-color-background-default:var(
--spectrum-global-color-static-primary-500
);--spectrum-semantic-cta-color-background-hover:var(
--spectrum-global-color-static-primary-400
);--spectrum-semantic-cta-color-background-down:var(
--spectrum-global-color-static-primary-600
);--spectrum-semantic-cta-color-background-key-focus:var(
--spectrum-global-color-static-primary-500
);--spectrum-semantic-cta-color-background-disabled:var(
--spectrum-global-color-static-primary-opacity-300
);--spectrum-semantic-neutral-background-color-default:var(
--spectrum-global-color-static-gray-600
);--spectrum-semantic-neutral-background-color-hover:var(
--spectrum-global-color-static-gray-700
);--spectrum-semantic-neutral-background-color-down:var(
--spectrum-global-color-static-gray-800
);--spectrum-semantic-neutral-background-color-key-focus:var(
--spectrum-global-color-static-gray-700
);--spectrum-semantic-presence-color-1:var(
--spectrum-global-color-static-red-500
);--spectrum-semantic-presence-color-2:var(
--spectrum-global-color-static-orange-400
);--spectrum-semantic-presence-color-3:var(
--spectrum-global-color-static-yellow-400
);--spectrum-semantic-presence-color-4:#4bcca2;--spectrum-semantic-presence-color-5:#00c7ff;--spectrum-semantic-presence-color-6:#008cb8;--spectrum-semantic-presence-color-7:#7e4bf3;--spectrum-semantic-presence-color-8:var(
--spectrum-global-color-static-fuchsia-600
);--spectrum-global-color-info:var(--spectrum-global-color-static-primary);--spectrum-global-color-negative:var(--spectrum-global-color-static-red);--spectrum-global-color-tips:var(--spectrum-global-color-static-orange);--spectrum-global-color-positive:var(--spectrum-global-color-static-green)}:host,:root{--spectrum-global-zindex-static-deepdive:-99999;--spectrum-global-zindex-static-default:1;--spectrum-global-zindex-static-docked:4;--spectrum-global-zindex-static-sticky:10;--spectrum-global-zindex-static-popover:5000;--spectrum-global-zindex-static-dialog:6000;--spectrum-global-zindex-static-dropdown:7000;--spectrum-global-zindex-static-overlay:8000;--spectrum-global-zindex-static-modal:9000;--spectrum-global-zindex-static-spinner:9050;--spectrum-global-zindex-static-toast:10000;--spectrum-global-shadow-static-s:0px 0px 4px rgba(0,0,0,.04),0px 4px 24px rgba(0,0,0,.04);--spectrum-global-shadow-static-m:0px 0px 1px rgba(0,0,0,.16),0px 6px 32px 4px rgba(0,0,0,.08);--spectrum-global-shadow-static-l:0px 2px 8px rgba(0,0,0,.03),0px 16px 48px 8px rgba(0,0,0,.08)}:host,:root{font-family:var(--spectrum-alias-body-text-font-family);font-size:var(--spectrum-alias-font-size-default)}:host:lang(ar),:root:lang(ar){font-family:var(--spectrum-alias-font-family-ar)}:host:lang(he),:root:lang(he){font-family:var(--spectrum-alias-font-family-he)}:host:lang(zh-Hans),:root:lang(zh-Hans){font-family:var(--spectrum-alias-font-family-zhhans)}:host:lang(zh-Hant),:root:lang(zh-Hant){font-family:var(--spectrum-alias-font-family-zh)}:host:lang(zh),:root:lang(zh){font-family:var(--spectrum-alias-font-family-zh)}:host:lang(ko),:root:lang(ko){font-family:var(--spectrum-alias-font-family-ko)}:host:lang(ja),:root:lang(ja){font-family:var(--spectrum-alias-font-family-ja)}:host{display:block}#scale,#theme{height:100%;width:100%}`;

const ScaleValues=['medium','large'];const ColorValues=['light','lightest','dark','darkest'];/**
 * @element sp-theme
 *
 * @slot - Content on which to apply the CSS Custom Properties defined by the current theme configuration
 */class Theme extends HTMLElement{constructor(){super();this._color='';this._scale='';this.trackedChildren=new Set();this._updateRequested=false;this._contextConsumers=new Map();this.attachShadow({mode:'open'});const node=document.importNode(Theme.template.content,true);this.shadowRoot.appendChild(node);this.shouldAdoptStyles();this.addEventListener('sp-query-theme',this.onQueryTheme);this.addEventListener('sp-language-context',this._handleContextPresence);this.updateComplete=this.__createDeferredPromise();}static get observedAttributes(){return ['color','scale','lang'];}attributeChangedCallback(attrName,old,value){if(old===value){return;}if(attrName==='color'){this.color=value;}else if(attrName==='scale'){this.scale=value;}else if(attrName==='lang'&&!!value){this.lang=value;this._provideContext();}}requestUpdate(){if(window.ShadyCSS!==undefined&&!window.ShadyCSS.nativeShadow){window.ShadyCSS.styleElement(this);}else {this.shouldAdoptStyles();}}get color(){const themeFragments=Theme.themeFragmentsByKind.get('color');const{name}=themeFragments&&themeFragments.get('default')||{};return this._color||name||'';}set color(newValue){if(newValue===this._color)return;const color=!!newValue&&ColorValues.includes(newValue)?newValue:this.color;if(color!==this._color){this._color=color;this.requestUpdate();}if(color){this.setAttribute('color',color);}else {this.removeAttribute('color');}}get scale(){const themeFragments=Theme.themeFragmentsByKind.get('scale');const{name}=themeFragments&&themeFragments.get('default')||{};return this._scale||name||'';}set scale(newValue){if(newValue===this._scale)return;const scale=!!newValue&&ScaleValues.includes(newValue)?newValue:this.scale;if(scale!==this._scale){this._scale=scale;this.requestUpdate();}if(scale){this.setAttribute('scale',scale);}else {this.removeAttribute('scale');}}get styles(){const themeKinds=[...Theme.themeFragmentsByKind.keys()];const styles=themeKinds.reduce((acc,kind)=>{const kindFragments=Theme.themeFragmentsByKind.get(kind);const addStyles=(name,kind)=>{const currentStyles=kindFragments.get(name);if(currentStyles&&(!kind||this.hasAttribute(kind))){acc.push(currentStyles.styles);}};if(kind==='app'||kind==='core'){addStyles(kind);}else {const{[kind]:name}=this;addStyles(name,kind);}return acc;},[]);return [...styles];}static get template(){if(!this.templateElement){this.templateElement=document.createElement('template');this.templateElement.innerHTML='<slot></slot>';}return this.templateElement;}__createDeferredPromise(){return new Promise(resolve=>{this.__resolve=resolve;});}onQueryTheme(event){if(event.defaultPrevented){return;}event.preventDefault();const{detail:theme}=event;theme.color=this.color||undefined;theme.scale=this.scale||undefined;theme.lang=this.lang||document.documentElement.lang||navigator.language;}connectedCallback(){this.shouldAdoptStyles();// Note, first update/render handles styleElement so we only call this if
// connected after first update.
/* c8 ignore next 3 */if(window.ShadyCSS!==undefined){window.ShadyCSS.styleElement(this);}// Add `this` to the instances array.
Theme.instances.add(this);const manageDir=()=>{const{dir}=this;this.trackedChildren.forEach(el=>{el.setAttribute('dir',dir==='rtl'?dir:'ltr');});};if(!this.observer){this.observer=new MutationObserver(manageDir);}this.observer.observe(this,{attributes:true,attributeFilter:['dir']});if(!this.hasAttribute('dir')){let dirParent=this.assignedSlot||this.parentNode;while(dirParent!==document.documentElement&&!(dirParent instanceof Theme)){dirParent=dirParent.assignedSlot||// step into the shadow DOM of the parent of a slotted node
dirParent.parentNode||// DOM Element detected
dirParent.host;}this.dir=dirParent.dir==='rtl'?dirParent.dir:'ltr';}requestAnimationFrame(()=>manageDir());}disconnectedCallback(){// Remove `this` to the instances array.
Theme.instances.delete(this);this.observer.disconnect();}startManagingContentDirection(el){this.trackedChildren.add(el);}stopManagingContentDirection(el){this.trackedChildren.delete(el);}async shouldAdoptStyles(){if(!this._updateRequested){this.updateComplete=this.__createDeferredPromise();this._updateRequested=true;this._updateRequested=await false;this.adoptStyles();this.__resolve(true);}}adoptStyles(){const styles=this.styles;// No test coverage on Edge
// There are three separate cases here based on Shadow DOM support.
// (1) shadowRoot polyfilled: use ShadyCSS
// (2) shadowRoot.adoptedStyleSheets available: use it.
// (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
// rendering
/* c8 ignore next */if(window.ShadyCSS!==undefined&&!window.ShadyCSS.nativeShadow&&window.ShadyCSS.ScopingShim){// For browsers using the shim, there seems to be one set of
// processed styles per template, so it is hard to nest styles. So,
// for those, we load in all style fragments and then switch using a
// host selector (e.g. :host([color='dark']))
const fragmentCSS=[];for(const[kind,fragments]of Theme.themeFragmentsByKind){for(const[name,{styles}]of fragments){if(name==='default')continue;let cssText=styles.cssText;if(!Theme.defaultFragments.has(name)){cssText=cssText.replace(':host',`:host([${kind}='${name}'])`);}fragmentCSS.push(cssText);}}window.ShadyCSS.ScopingShim.prepareAdoptedCssText(fragmentCSS,this.localName);window.ShadyCSS.prepareTemplate(Theme.template,this.localName);}else if(t$6){const styleSheets=[];for(const style of styles){styleSheets.push(style.styleSheet);}this.shadowRoot.adoptedStyleSheets=styleSheets;}else {const styleNodes=this.shadowRoot.querySelectorAll('style');styleNodes.forEach(element=>element.remove());styles.forEach(s=>{const style=document.createElement('style');style.textContent=s.cssText;this.shadowRoot.appendChild(style);});}}static registerThemeFragment(name,kind,styles){const fragmentMap=Theme.themeFragmentsByKind.get(kind)||new Map();if(fragmentMap.size===0){Theme.themeFragmentsByKind.set(kind,fragmentMap);// we're adding our first fragment for this kind, set as default
fragmentMap.set('default',{name,styles});Theme.defaultFragments.add(name);}fragmentMap.set(name,{name,styles});Theme.instances.forEach(instance=>instance.shouldAdoptStyles());}_provideContext(){this._contextConsumers.forEach(consume=>consume(this.lang));}_handleContextPresence(event){const target=event.composedPath()[0];if(this._contextConsumers.has(target)){this._contextConsumers.delete(target);}else {this._contextConsumers.set(target,event.detail.callback);const callback=this._contextConsumers.get(target);if(callback){callback(this.lang||document.documentElement.lang||navigator.language);}}}}Theme.themeFragmentsByKind=new Map();Theme.defaultFragments=new Set(['core']);Theme.instances=new Set();Theme.registerThemeFragment('core','core',styles);

export { SpectrumElement as S, T, __decorate as _, i$4 as a, Theme as b, SizedMixin as c, o$1 as d, e$7 as e, d as f, e$2 as g, __rest as h, iliadCustomElementsDefine as i, i$1 as j, c$1 as k, l$3 as l, l as m, n$3 as n, o$2 as o, p$1 as p, r$5 as r, s$2 as s, y };
//# sourceMappingURL=Theme.js.map
