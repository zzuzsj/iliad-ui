(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1079:function(e,t,r){"use strict";r.r(t);var s=r(5),i=r(46),a=r(47);let o;var c=Object(s.b)(o||(o=(e=>e)`
#hero{margin-bottom:3em}#hero .spectrum-Article{padding-bottom:2em}#hero-buttons{margin-top:1em}#features{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between}.feature{flex:0 1 calc(33.33% - 30px);padding:0 0 20px;box-sizing:border-box}@media screen and (max-width:1100px){.feature{flex:0 1 calc(50% - 30px)}.feature:first-of-type{flex-basis:100%}}@media screen and (max-width:960px){.feature,.feature:first-of-type{flex:0 1 calc(33.33% - 30px)}}@media screen and (max-width:725px){.feature{flex:0 1 calc(50% - 30px)}.feature:first-of-type{flex-basis:100%}}@media screen and (max-width:525px){.feature{flex:0 1 100%}}#example{margin-top:2em}.spectrum-Heading4{margin-bottom:16px}
`));r(35),r(50),r(51);let l,n=e=>e;class d extends i.a{static get styles(){return[a.a,c]}render(){return Object(s.d)(l||(l=n` <section id="hero"> <div class="spectrum-Article"> <h1 class="spectrum-Heading1--display"> Spectrum Web Components </h1> </div> <p class="spectrum-Body3"> The Spectrum Web Components project is an implementation of <sp-link href="https://spectrum.adobe.com/">Spectrum, Adobe’s design system</sp-link>. It's designed to work with any web framework — or even without one. </p> <div id="hero-buttons"> <sp-button href="https://github.com/adobe/spectrum-web-components" variant="primary"> View on GitHub </sp-button> </div> </section> <section id="features"> <div class="feature"> <h2 class="spectrum-Heading4"> Standards based </h2> <p class="spectrum-Body3"> <sp-link href="https://developer.mozilla.org/en-US/docs/Web/Web_Components"> Web Components </sp-link> are a set of technologies that work together, letting you create custom elements that work just like the standard HTML elements built into your browser. </p> </div> <div class="feature"> <h2 class="spectrum-Heading4"> Light weight </h2> <p class="spectrum-Body3"> Spectrum Web Components are implemented using the <sp-link href="https://lit-element.polymer-project.org/"> LitElement </sp-link> base class. LitElement is designed for creating web components with a minimum amount of overhead. </p> </div> <div class="feature"> <h2 class="spectrum-Heading4"> Framework agnostic </h2> <p class="spectrum-Body3"> You can use web components with any framework, since they’re supported and encapsulated at the browser level. </p> </div> </section> <section id="example" class="spectrum-Typography"> <div class="headerContainer"> <h2 class="spectrum-Heading2"> Sample element usage </h2> <sp-rule size="large"></sp-rule> </div> <code-example class="language-html"> &lt;sp-button variant='cta' href='components/button'&gt;Use Spectrum Web Component buttons&lt;/sp-button&gt; </code-example> </section> `))}}customElements.define("docs-home",d)},51:function(e,t,r){"use strict";var s=r(2),i=r(1087),a=r(5);let o;var c=Object(a.b)(o||(o=(e=>e)`
:host{width:100%;overflow:visible;border:none;border-width:var(--spectrum-divider-medium-height,var(--spectrum-global-dimension-static-size-25));border-radius:var(--spectrum-divider-medium-height,var(--spectrum-global-dimension-static-size-25))}:host([size=large]){height:var(--spectrum-divider-large-height,var(--spectrum-global-dimension-static-size-50));border-radius:var(--spectrum-divider-large-border-radius,var(--spectrum-global-dimension-static-size-25));background-color:var(--spectrum-rule-large-background-color,var(--spectrum-global-color-gray-800))}:host([size=medium]){height:var(--spectrum-divider-medium-height,var(--spectrum-global-dimension-static-size-25));border-radius:var(--spectrum-divider-medium-border-radius,var(--spectrum-global-dimension-static-size-10));background-color:var(--spectrum-rule-medium-background-color,var(--spectrum-global-color-gray-300))}:host([size=small]){height:var(--spectrum-divider-small-height,var(--spectrum-global-dimension-static-size-10));border-radius:var(--spectrum-divider-small-border-radius,var(--spectrum-global-dimension-static-size-10));background-color:var(--spectrum-rule-small-background-color,var(--spectrum-global-color-gray-300))}:host([vertical]){height:100%}:host([vertical][size=large]){width:var(--spectrum-divider-large-vertical-width,var(--spectrum-global-dimension-static-size-50))}:host([vertical][size=medium]){width:var(--spectrum-divider-medium-vertical-width,var(--spectrum-global-dimension-static-size-25))}:host([vertical][size=small]){width:var(--spectrum-divider-small-veritcal-width,var(--spectrum-global-dimension-static-size-10))}:host{display:block}hr{border:none;margin:0}
`));let l,n,d=e=>e;class m extends i.a{constructor(){super(...arguments),this.vertical=!1}render(){return this.vertical?Object(a.d)(l||(l=d``)):Object(a.d)(n||(n=d`
            <hr />
        `))}}m.styles=[c],Object(s.a)([Object(a.e)({type:Boolean,reflect:!0})],m.prototype,"vertical",void 0),customElements.define("sp-rule",m)}}]);
//# sourceMappingURL=9.c862ce03993588e4a683.js.map