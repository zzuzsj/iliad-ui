(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1016:function(e,t,n){var o={"./developing-components.md":1017,"./generating-components.md":1018,"./getting-started.md":1019,"./spectrum-config.md":1020};function s(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}s.keys=function(){return Object.keys(o)},s.resolve=a,e.exports=s,s.id=1016},1017:function(e,t){e.exports='<div class="spectrum-Article"><h1 class="spectrum-Heading1">Developing a Component</h1></div>\n<p class="spectrum-Body3">This guide explains the techniques involved in the ongoing development a Spectrum control\nas a <sp-link href="https://github.com/adobe/spectrum-web-components">spectrum-web-components</sp-link>.</p>\n<p class="spectrum-Body3">The components in spectrum-web-components are based on the CSS definitions in\n<sp-link href="https://github.com/adobe/spectrum-css">spectrum-css</sp-link>. Typically, component\nimplementations contain very little code. The CSS from the <code>spectrum-css</code>\nproject typically specifies most, if not all, of the presentation details.</p>\n<div class="headerContainer"><h1 class="spectrum-Heading2">What is a web component?</h1><sp-rule size="large"></sp-rule></div>\n<p class="spectrum-Body3">According to <sp-link href="https://www.webcomponents.org/introduction">webcomponents.org</sp-link>,\nweb components are:</p>\n<blockquote>\n<p class="spectrum-Body3">... a set of web platform APIs that allow you to create new custom, reusable,\nencapsulated HTML tags to use in web pages and web apps. Custom components and\nwidgets build on the Web Component standards, will work across modern\nbrowsers, and can be used with any JavaScript library or framework that works\nwith HTML.</p>\n</blockquote>\n<p class="spectrum-Body3">In order to add a new component to this library, you will need to develop a\nworking knowledge of the following technologies:</p>\n<ul class="spectrum-Body3">\n<li><sp-link href="https://github.com/adobe/spectrum-css">Spectrum CSS</sp-link>: A CSS implementation of the Spectrum design language</li>\n<li><sp-link href="https://developers.google.com/web/fundamentals/web-components/customelements">Web Components</sp-link>: Standards based method for adding new HTML tags to a browser</li>\n<li><sp-link href="https://developers.google.com/web/fundamentals/web-components/shadowdom">Shadow DOM</sp-link>: The part of the Web Component spec that allows for encapsulation of component styles and child nodes</li>\n<li><sp-link href="https://lit-element.polymer-project.org/guide">lit-element</sp-link>: A simple base class for creating fast, lightweight web components</li>\n<li><sp-link href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">CSS custom properties</sp-link>: CSS variables that can be used throughout a document</li>\n<li><sp-link href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html">Typescript</sp-link>: A typesafe variant of JavaScript</li>\n</ul>\n<div class="headerContainer"><h1 class="spectrum-Heading2">Setting up the styling</h1><sp-rule size="large"></sp-rule></div>\n<p class="spectrum-Body3">The most complicated part of implementing a Spectrum web component is getting\nthe styles set up correctly. The <sp-link href="https://developers.google.com/web/fundamentals/web-components/shadowdom">shadow\nDOM</sp-link> is\nthe heart of a web component. It isolates the component from the styles and DOM\nof the containing page. While this offers many benefits, it also means that we\nmust structure our CSS very differently.</p>\n<p class="spectrum-Body3">The CSS from the <sp-link href="https://github.com/adobe/spectrum-css">spectrum-css</sp-link> project\nis intended to be installed globally on a web page. Using it in the context of a\nweb component requires that we modify it. To facilitate that, this project comes\nwith a <sp-link href="https://github.com/adobe/spectrum-web-components/blob/master/scripts/process-spectrum-postcss-plugin.js">config-driven processor</sp-link> that can transform the Spectrum CSS into a format\nthat can be consumed in a web component.</p>\n<p class="spectrum-Body3">The first step is to create a directory and a <code>spectrum-config.js</code> file for your\nnew component. This config file contains information about the structure of\nthe web component in relation to the Spectrum CSS classes.</p>\n<p class="spectrum-Body3">Below is a fragment of the <sp-link href="https://github.com/adobe/spectrum-web-components/blob/master/src/button/spectrum-config.js"><code>spectrum-config.js</code> file for <code>sp-button</code></sp-link>.</p>\n<code-example class="language-javascript">module.exports = {\n    spectrum: &#39;button&#39;,\n    components: [\n        {\n            name: &#39;button&#39;,\n            host: {\n                selector: &#39;.spectrum-Button&#39;,\n                shadowSelector: &#39;#button&#39;,\n            },\n            focus: &#39;#button&#39;,\n            attributes: [\n                {\n                    type: &#39;boolean&#39;,\n                    selector: &#39;.spectrum-Button--quiet&#39;,\n                },\n                {\n                    type: &#39;boolean&#39;,\n                    selector: &#39;:disabled&#39;,\n                },\n                {\n                    type: &#39;enum&#39;,\n                    name: &#39;variant&#39;,\n                    values: [\n                        &#39;.spectrum-Button--cta&#39;,\n                        &#39;.spectrum-Button--primary&#39;,\n                        &#39;.spectrum-Button--secondary&#39;,\n                        {\n                            name: &#39;negative&#39;,\n                            selector: &#39;.spectrum-Button--warning&#39;,\n                        },\n                        &#39;.spectrum-Button--overBackground&#39;,\n                        &#39;.spectrum-Button--secondary&#39;,\n                    ],\n                },\n            ],\n            ids: [&#39;.spectrum-Button-label&#39;],\n            slots: [\n                {\n                    name: &#39;icon&#39;,\n                    selector: &#39;.spectrum-Icon&#39;,\n                },\n            ],\n            exclude: [/\\.is-disabled/],\n        },\n    ],\n};</code-example>\n<p class="spectrum-Body3">If we wanted to create a button component using this config file, the steps would be as\nfollows:</p>\n<ol class="spectrum-Body3">\n<li>Make the directory <sp-link href="https://github.com/adobe/spectrum-web-components/tree/master/src/button"><code>src/components/button</code></sp-link></li>\n<li>In that new directory, create a <sp-link href="https://github.com/adobe/spectrum-web-components/blob/main/packages/button/src/spectrum-config.js"><code>spectrum-config.js</code></sp-link>\nfile with the above contents</li>\n<li>Run the command <code>npm run process-spectrum</code> to create the <sp-link href="https://github.com/adobe/spectrum-web-components/blob/main/packages/button/src/spectrum-button.css">CSS file</sp-link></li>\n</ol>\n<p class="spectrum-Body3">When you do the above, the <sp-link href="https://github.com/adobe/spectrum-web-components/blob/main/scripts/process-spectrum-postcss-plugin.js">config-driven processor</sp-link>\nwill look in the <sp-link href="https://github.com/adobe/spectrum-css"><code>spectrum-css</code></sp-link> project\nfor the <sp-link href="https://unpkg.com/@spectrum-css/button/dist/index-vars.css">matching CSS file</sp-link>.\nIt will parse that file and restructure the CSS as per the configuration\ninstructions.</p>\n<div class="headerContainer"><h1 class="spectrum-Heading2">Structure of a Spectrum Web Component</h1><sp-rule size="large"></sp-rule></div>\n<p class="spectrum-Body3">If you look at an <code>sp-button</code> in the Chrome developer tools, you will see a DOM\nstructure that looks like this.</p>\n<style>.indented{padding-left:50pt;padding-right:50pt}.dom-example{background-color:var(--spectrum-global-color-gray-50);max-width:100%;line-height:1.3em;padding:.75rem 1.5rem;box-shadow:0 0 18px rgba(0,0,0,.15);margin:1rem -4px 2rem;border-radius:6px;overflow:auto hidden;white-space:pre}.flip{display:inline-block;transform:scale(-1,1)}</style>\n<div class="dom-example">\n&#x25BC;&lt;sp-button tabindex="0" variant="cta"&gt;\n    &#x25BC; #shadow-root (open)\n        &#x25BC; &lt;button id="button" tabindex="0"&gt;\n            &#x25BC; &lt;div id="label&gt;\n                &#x25BC; &lt;slot&gt;\n                    <div class="flip">&crarr;</div> #text\n                &lt;/slot&gt;\n            &lt;/div&gt;\n        &lt;/button&gt;\n    &#34;Click Me&#34;\n&lt;/sp-button&gt;\n</div>\n\n<p class="spectrum-Body3">If anything here looks unfamiliar, it is probably a good time to do some reading\nabout <sp-link href="https://developers.google.com/web/fundamentals/web-components/customelements">web components</sp-link>.</p>\n<p class="spectrum-Body3">You can compare this markup with the <sp-link href="http://opensource.adobe.com/spectrum-css/2.13.0/docs/#button---cta">reference markup in the <code>spectrum-css</code> documentation</sp-link></p>\n<h3 id="host-class-mapping" class="spectrum-Heading3">Host Class Mapping</h3>\n<p class="spectrum-Body3">We need to determine what the main CSS class is for our component in the\noriginal <code>spectrum-css</code>. In the case of <code>sp-button</code>, we can see that the\ntop-level class is <code>.Spectrum-Button</code>. We then need to determine where we want\nthat CSS to be applied. In many cases, you will want that CSS to be applied to\nthe actual web component via the <code>:host</code> selector. That is the default behaviour\nof the conversion script. In this case, we wanted to preserve all of the default\nbehaviour of the <code>button</code> element in HTML. So, we want the main CSS to be\napplied to our <code>&lt;button&gt;</code> instead. If you look at the <sp-link href="https://github.com/adobe/spectrum-web-components/blob/main/packages/button/src/spectrum-config.js"><code>host</code> definition in\n<code>spectrum-config.js</code></sp-link>\nyou can see that we have supplied a <code>shadowSelector</code> option. That tells the\nscript to move all of the CSS for <code>.Spectrum-Button</code> to the <code>#button</code> element in\nthe shadow DOM.</p>\n<code-example class="language-javascript">    host: {\n        selector: &#39;.spectrum-Button&#39;,\n        shadowSelector: &#39;#button&#39;,\n    },</code-example>\n<h3 id="shadow-dom-structure" class="spectrum-Heading3">Shadow DOM Structure</h3>\n<p class="spectrum-Body3">The next step is to fill out the remaining structure of the shadow DOM portion\nof the component. Note that, in the shadow DOM, we are using ids instead of long\nclass names. We can do that because the namespace of each instance of our web\ncomponent has it&#39;s own DOM scope. So, there can never be an id name collision.</p>\n<p class="spectrum-Body3">Typically, you will reference the <sp-link href="http://opensource.adobe.com/spectrum-css/2.13.0/docs/#checkbox">sample code from the\n<code>spectrum-css</code></sp-link>\ndocumentation and <sp-link href="https://github.com/adobe/spectrum-web-components/blob/main/packages/checkbox/src/Checkbox.ts">recreate that structure in the shadow DOM of your\ncomponent</sp-link>.</p>\n<p class="spectrum-Body3">In the case of <code>sp-checkbox</code>, we turn this sample DOM code:</p>\n<code-example class="language-markup">&lt;label class=&quot;spectrum-Checkbox&quot;&gt;\n  &lt;input type=&quot;checkbox&quot; class=&quot;spectrum-Checkbox-input&quot; id=&quot;checkbox-0&quot;&gt;\n  &lt;span class=&quot;spectrum-Checkbox-box&quot;&gt;\n    &lt;svg class=&quot;spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark&quot; focusable=&quot;false&quot; aria-hidden=&quot;true&quot;&gt;\n      &lt;use xlink:href=&quot;#spectrum-css-icon-CheckmarkSmall&quot; /&gt;\n    &lt;/svg&gt;\n    &lt;svg class=&quot;spectrum-Icon spectrum-UIIcon-DashSmall spectrum-Checkbox-partialCheckmark&quot; focusable=&quot;false&quot; aria-hidden=&quot;true&quot;&gt;\n      &lt;use xlink:href=&quot;#spectrum-css-icon-DashSmall&quot; /&gt;\n    &lt;/svg&gt;\n  &lt;/span&gt;\n  &lt;span class=&quot;spectrum-Checkbox-label&quot;&gt;Checkbox&lt;/span&gt;\n&lt;/label&gt;</code-example>\n<p class="spectrum-Body3">into this code in our component&#39;s render method (actually implementation is\nslightly different):</p>\n<code-example class="language-javascript">return html`\n        &lt;label id=&quot;root&quot;&gt;\n            &lt;input\n                id=&quot;input&quot;\n                type=&quot;checkbox&quot;\n                ?checked=${this.checked}\n                @change=${this.handleChange}\n            &lt;span id=&quot;box&quot;&gt;\n                &lt;sp-icon\n                    id=&quot;checkmark&quot;\n                    size=&quot;s&quot;\n                    name=&quot;ui:CheckmarkSmall&quot;\n                    aria-hidden=&quot;true&quot;\n                &gt;&lt;/sp-icon&gt;\n                &lt;sp-icon\n                    id=&quot;partialCheckmark&quot;\n                    size=&quot;s&quot;\n                    name=&quot;ui:DashSmall&quot;\n                    aria-hidden=&quot;true&quot;\n                &gt;&lt;/sp-icon&gt;\n            &lt;/span&gt;\n            &lt;span id=&quot;label&quot;&gt;&lt;slot&gt;&lt;/slot&gt;&lt;/span&gt;\n        &lt;/label&gt;\n    `;</code-example>\n<p class="spectrum-Body3">You will notice that many of the <code>spectrum-css</code> classes are mapped to ids in the\nweb component. For example, <code>.spectrum-Checkbox-input</code> and\n<code>.spectrum-Checkbox-box</code> become <code>#input</code> and <code>#box</code>. Those transformations are\ndescribed in the <sp-link href="https://github.com/adobe/spectrum-web-components/blob/main/packages/checkbox/src/spectrum-config.js"><code>ids</code> section of the <code>spectrum-config.js</code>\nfile</sp-link>.</p>\n<code-example class="language-javascript">    ids: [\n        {\n            selector: &#39;.spectrum-Checkbox-input&#39;,\n            name: &#39;input&#39;,\n        },\n        {\n            selector: &#39;.spectrum-Checkbox-box&#39;,\n            name: &#39;box&#39;,\n        },\n        {\n            selector: &#39;.spectrum-Checkbox-checkmark&#39;,\n            name: &#39;checkmark&#39;,\n        },\n        {\n            selector: &#39;.spectrum-Checkbox-partialCheckmark&#39;,\n            name: &#39;partialCheckmark&#39;,\n        },\n        {\n            selector: &#39;.spectrum-Checkbox-label&#39;,\n            name: &#39;label&#39;,\n        },\n    ],</code-example>\n<h3 id="properties-and-attributes" class="spectrum-Heading3">Properties and Attributes</h3>\n<p class="spectrum-Body3">Most of our controls have options that affect how they are rendered. For\nexample, Spectrum supports a number of different kinds of buttons (e.g primary,\nsecondary or call-to-action). <code>spectrum-css</code> supports these visual styles using\nCSS classes. In web components, we typically support these options using\nattributes/properties on the component. For example, here is a call-to-action\nstyle button.</p>\n<code-example class="language-html">&lt;sp-button variant=&quot;cta&quot;&gt;CTA&lt;/sp-button&gt;</code-example>\n<p class="spectrum-Body3">We could conditionally add CSS classes to the elements of the shadow DOM during\nrendering, but it is much easier to just let the attributes on the DOM node\ndrive the styling directly. In order to facilitate that, the\n<sp-link href="https://github.com/adobe/spectrum-web-components/blob/main/packages/button/src/spectrum-config.js"><code>spectrum-config.js</code> file lets you specify how to map the various\n<code>spectrum-css</code> classes to CSS that is based on the attributes on the <code>:host</code> of\nthe web\ncomponent</sp-link>.</p>\n<code-example class="language-javascript">    attributes: [\n        {\n            type: &#39;boolean&#39;,\n            selector: &#39;.spectrum-Button--quiet&#39;,\n        },\n        {\n            type: &#39;boolean&#39;,\n            selector: &#39;:disabled&#39;,\n        },\n        {\n            type: &#39;enum&#39;,\n            name: &#39;variant&#39;,\n            values: [\n                &#39;.spectrum-Button--cta&#39;,\n                &#39;.spectrum-Button--primary&#39;,\n                &#39;.spectrum-Button--secondary&#39;,\n                {\n                    name: &#39;negative&#39;,\n                    selector: &#39;.spectrum-Button--warning&#39;,\n                },\n                &#39;.spectrum-Button--overBackground&#39;,\n                &#39;.spectrum-Button--secondary&#39;,\n            ],\n        },\n    ],</code-example>\n<p class="spectrum-Body3">We support two different kinds of attributes, booleans and enums. Booleans are\nturned on or off by the presence or absence of the attribute. Enum attributes\nmust be set to one of the allowed values. The <sp-link href="https://github.com/adobe/spectrum-web-components/blob/main/packages/button/src/spectrum-button.css">CSS generated will reference the\nattributes on the <code>host:</code> element\ndirectly</sp-link>.</p>\n<h3 id="class-to-class-mapping" class="spectrum-Heading3">Class to Class Mapping</h3>\n<p class="spectrum-Body3">In some cases, you will need to retain the <code>spectrum-css</code> classes as classes. An\nexample of that is when you need to apply CSS rules to multiple items in the\nshadow DOM. In that case, we simply map class names to shorter classnames. There\nis an <sp-link href="https://github.com/adobe/spectrum-web-components/blob/main/packages/slider/src/spectrum-config.js">example of remapping classes in the slider\ncomponent</sp-link>.</p>\n<code-example class="language-javacript">    classes: [\n        {\n            selector: &#39;.spectrum-Slider-track&#39;,\n            name: &#39;track&#39;,\n        },\n    ],</code-example>\n<h3 id="slots" class="spectrum-Heading3">Slots</h3>\n<p class="spectrum-Body3"><sp-link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot">Slot tags</sp-link> are\nhow we host our child content (light DOM) in our component&#39;s shadow DOM. The\n<code>spectrum-css</code> for a component sometimes contains rules for laying out the child\ncontent. There is a <sp-link href="https://github.com/adobe/spectrum-web-components/blob/main/packages/button/src/spectrum-config.js"><code>slots</code>\nsection</sp-link>\nin the <code>spectrum-config.js</code> file for mapping those rules to the slotted content.</p>\n<code-example class="language-javascript">    slots: [\n        {\n            name: &#39;icon&#39;,\n            selector: &#39;.spectrum-Icon&#39;,\n        },\n    ],</code-example>\n<p class="spectrum-Body3">The above section tells our CSS processor to map CSS for the <code>.spectrum-Icon</code>\nclass to the content that is being hosted in the <sp-link href="https://github.com/adobe/spectrum-web-components/blob/main/packages/button/src/spectrum-button.css">slot with the name\n<code>icon</code></sp-link>.</p>\n<div class="headerContainer"><h1 class="spectrum-Heading2">Coding the Component</h1><sp-rule size="large"></sp-rule></div>\n<hr class="spectrum-Rule spectrum-Rule--large">\n<p class="spectrum-Body3">All of the <code>spectrum-web-components</code> are written using the\n<sp-link href="https://lit-element.polymer-project.org/guide">lit-element</sp-link> framework and\n<sp-link href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html">Typescript</sp-link>.\nYour best bet is to look at <sp-link href="https://github.com/adobe/spectrum-web-components/tree/main/packages">similar\ncomponents</sp-link>\nand match the style.</p>\n<p class="spectrum-Body3">We have a working specification for the APIs for each of the Spectrum components.\nIf you file an issue for the component that you want to implement, we can provide\nthe necessary specifications for it.</p>\n<h3 id="documenting-the-component" class="spectrum-Heading3">Documenting the component</h3>\n<p class="spectrum-Body3">The documentation for each component in the documentation site is adopted from the <code>README.md</code> in said package. The pages are\nwritten in <sp-link href="https://www.markdownguide.org/cheat-sheet">Markdown</sp-link>. See one of\nthe <sp-link href="https://github.com/adobe/spectrum-web-components/blob/main/packages/button/README.md">existing pages</sp-link> for an example.</p>\n<p class="spectrum-Body3">To run the local documentation server, use the command:</p>\n<code-example>npm run docs:start</code-example><p class="spectrum-Body3">The documentation automatically extracts the properties and attributes from the\nsource code. You should document your component using the <sp-link href="https://github.com/runem/web-component-analyzer#-how-to-document-your-components-using-jsdoc">appropriate jsdoc\ntags</sp-link>.\nSee\n<sp-link href="https://github.com/adobe/spectrum-web-components/blob/main/packages/button/src/Button.ts">Button.ts</sp-link>\nfor an example.</p>\n<h3 id="working-with-storybook" class="spectrum-Heading3">Working with Storybook</h3>\n<p class="spectrum-Body3">We use <sp-link href="https://storybook.js.org/">Storybook</sp-link> for developing our components.\nThis gives us a rapid way to test our components in various configurations. The\nbest way to start is to copy <sp-link href="https://github.com/adobe/spectrum-web-components/blob/main/packages/button/stories/button.stories.ts">one of the existing\nstories</sp-link>.</p>\n<p class="spectrum-Body3">To run Storybook, use the command:</p>\n<code-example>npm run storybook</code-example>'},1018:function(e,t){e.exports='<div class="spectrum-Article"><h1 class="spectrum-Heading1">Generating a new component</h1></div>\n<p class="spectrum-Body3">The fasted way to get started with creating a new component is with our command line generator. Run the following command to have you new component scaffolded for you:</p>\n<code-example class="language-bash">yarn new-package\n? component name please _</code-example>\n<p class="spectrum-Body3">In response to the above, the component name should be the dashified version of the Spectrum CSS pattern that you are looking to add to the repo. In this way, the <code>SpectrumPattern</code> that you want to create will be represented as <code>spectrum-pattern</code> in your response. From here the command will generate a new package for you pattern with the following file structure in the <code>packages</code> directory:</p>\n<code-example>&gt; spectrum-pattern\n   &gt; src/\n       index.ts\n       SpectrumPattern.ts\n       spectrum-pattern.css\n       spectrum-config.js\n   &gt; test/\n       &gt; benchmark/\n           basic-test.ts\n       spectrum-pattern.test.ts\n   &gt; stories/\n       spectrum-pattern.stories.ts\n   sp-spectrum-pattern.ts\n   README.md\n   tsconfig.json\n   package.json</code-example><p class="spectrum-Body3">From here, peek into the <code>package.json</code> file and ensure the &quot;devDependency&quot; of <code>@spectrum-css/spectrumpattern</code> listed there is of the most current version. Once you have confirmed that run <code>yarn</code> in your terminal to get any new packages added to the repository and have the CSS provided therein processed for use in your component using the default configuration. You&#39;ll now be able to review your component via the Storybook command <code>yarn storybook</code> or see it appear in tests via <code>yarn test</code> so that you can dive into fully preparing the patterns for use as a custom element.</p>\n<p class="spectrum-Body3">From here, the next look when continuing to develop your new component pattern is in <code>node_modules/@spectrum-css/spectrumpattern/metadata/spectrumpattern.yml</code>. Here you will find complete Spectrum CSS correct HTML representation of the many states, variants, and capabilities offered by the pattern that you are working with and will support you in ensuring that you have fulfilled the features that are expected of this pattern. The HTML found here is that found in the examples of this pattern made available in the <sp-link href="https://opensource.adobe.com/spectrum-css">Spectrum CSS documentation site</sp-link>.</p>\n<p class="spectrum-Body3">With this scaffold as a baseline in conjunction with these <sp-link href="guides/developing-components">instructions</sp-link> on working with the web components in general and the Spectrum Web Components repository in specific and the specification for the <sp-link href="guides/spectrum-config"><code>spectrum-config.js</code></sp-link> outlining how to translate the Spectrum CSS source you will be working from into shadow DOM optimized CSS you are well on your way to adding a new package to the project. If you run into any issues with the instructions above of linked to across this documentation site, please feel free to raise <sp-link href="https://github.com/adobe/spectrum-web-components/issues">quesitons and issues</sp-link> on GitHub either as brand new issues when specifically related to the process of generating a component or as comments on the broader issue of adding a specific pattern when in reference to bringing a specific component to live.</p>\n<p class="spectrum-Body3">Thanks for stopping by, we look forward to your contribution!</p>\n'},1019:function(e,t){e.exports='<div class="spectrum-Article"><h1 class="spectrum-Heading1">Getting started</h1></div>\n<p class="spectrum-Body3">For the fastest possible start, check out the <code>@spectrum-web-components/bundle</code> package which includes all of the elements defined by Spectrum Web Components in one easy to import entry point. Copy and paste the following HTML sample, and you can be off and running.</p>\n<code-example>&lt;script\n    src=&quot;https://jspm.dev/@spectrum-web-components/bundle/elements.js&quot;\n    type=&quot;module&quot;\n&gt;&lt;/script&gt;\n\n&lt;sp-theme scale=&quot;large&quot; color=&quot;dark&quot;&gt;\n    &lt;!-- Insert content requiring theme application here. --&gt;\n    &lt;sp-button\n        onclick=&quot;alert(&#39;I was clicked&#39;);&quot;\n    &gt;Click me!&lt;/sp-button&gt;\n    &lt;!-- End content requiring theme application. --&gt;\n&lt;/sp-theme&gt;</code-example><p class="spectrum-Body3">The code above renders to the browser as follows (be patient while the JS is loaded from the JSPM CDN...):</p>\n<style>iframe{width:100%;border:none;background:var(--spectrum-global-color-gray-75);border-radius:6px}</style>\n\n<iframe src="data:text/html;base64,PHNjcmlwdCBzcmM9Imh0dHBzOi8vanNwbS5kZXYvQHNwZWN0cnVtLXdlYi1jb21wb25lbnRzL2J1bmRsZS9lbGVtZW50cy5qcyIgdHlwZT0ibW9kdWxlIj48L3NjcmlwdD4NCg0KPHNwLXRoZW1lIHNjYWxlPSJsYXJnZSIgY29sb3I9ImRhcmsiPg0KICAgPHNwLWJ1dHRvbiBvbmNsaWNrPSJhbGVydCgnSSB3YXMgY2xpY2tlZCcpOyI+Q2xpY2sgbWUhPC9zcC1idXR0b24+DQo8L3NwLXRoZW1lPg=="></iframe>\n\n<div class="headerContainer"><h1 class="spectrum-Heading2">What you&#39;re getting...</h1><sp-rule size="large"></sp-rule></div>\n<p class="spectrum-Body3">The <code>@spectrum-web-components/bundle</code> package is <em>litterally</em> everything that Spectrum Web Components has to offer. This is why bundled it <sp-link href="https://bundlephobia.com/result?p=@spectrum-web-components/bundle">weighs in as (quite) large</sp-link> as it does and is why we DO NOT suggest leveraging this technique in a production application. However, it is the shortest path to getting right into developing with Spectrum Web Components, so dive right. Good luck, have fun!</p>\n<div class="headerContainer"><h1 class="spectrum-Heading2">What it&#39;s doing</h1><sp-rule size="large"></sp-rule></div>\n<p class="spectrum-Body3">Visually, all Spectrum Web Components are an expression of the design tokens that are specified by Spectrum, Adobe&#39;s design system. On the web, these tokens are applied as CSS Custom Properties. Not only do they ensure that a component pattern is delivered as specified in a single color/scale/content direction combination, but they ensure this is so in all color/scale/content direction combinations. When you&#39;re ready to look into more advanced usage of the components and themes in your application, there are vanilla CSS implementations of these tokens available in the <code>@spectrum-web-components/styles</code> package. However, to get started immediately, the <code>&lt;sp-theme&gt;</code> element delivers these tokens to a scoped HTML context and is what is applied in the code above. You&#39;ll notice the usage of <code>scale=&quot;large&quot;</code> and <code>color=&quot;dark&quot;</code> to outline the scale and color applied to this theme context respectively. To make a theme context with <code>scale=&quot;medium&quot;</code> and <code>color=&quot;lighest&quot;</code> you can use the following code sample:</p>\n<code-example class="language-html">&lt;sp-theme\n    scale=&quot;medium&quot;\n    color=&quot;lightest&quot;\n    style=&quot;background: var(--spectrum-global-color-gray-75); padding: var(--spectrum-global-dimension-size-400);&quot;\n&gt;\n    &lt;!-- Insert content requiring theme application here. --&gt;\n    &lt;sp-button onclick=&quot;alert(&#39;I was clicked&#39;);&quot;&gt;Click me!&lt;/sp-button&gt;\n    &lt;!-- End content requiring theme application. --&gt;\n&lt;/sp-theme&gt;</code-example>\n<p class="spectrum-Body3"><sp-link href="components/theme">Read about the full range of style customization provided by <code>@spectrum-web-components/theme</code>.</sp-link></p>\n<div class="headerContainer"><h1 class="spectrum-Heading2">What you can do</h1><sp-rule size="large"></sp-rule></div>\n<p class="spectrum-Body3">From this baseline, visit the documentation for each individual component package and find one, some, or all of those that are right for your project. Start building today and use rapid, component-based prototyping to bring your designs to life faster than ever.</p>\n<p class="spectrum-Body3">When you start to find something your happy with, visit our <sp-link href="https://github.com/adobe/spectrum-web-components/tree/main/projects/example-project-rollup" target="_blank">Rollup</sp-link> and/or <sp-link href="https://github.com/adobe/spectrum-web-components/tree/main/projects/example-project-webpack" target="_blank">Webpack</sp-link> example projects for recommendations on how to start preparing your project for production. Leverage the &quot;Usage&quot; listings on each of the individual components to support the patterns you&#39;ll find therein. And then, when you&#39;re ready... ship, ship, ship. We look forward to seeing what you bring to life!</p>\n'},1020:function(e,t){e.exports='<div class="spectrum-Article"><h1 class="spectrum-Heading1">Specification for spectrum-config.js files</h1></div>\n<p class="spectrum-Body3">The following is an annotated example that serves to document the format\nof the spectrum-config.js file. A higher-level explanation may be found\n<sp-link href="adding-component">here</sp-link>.</p>\n<div class="headerContainer"><h1 class="spectrum-Heading2">Annotated Sample</h1><sp-rule size="large"></sp-rule></div>\n<hr class="spectrum-Rule spectrum-Rule--large">\n<code-example class="language-javascript">module.exports = {\n    // This is the name that the component has in spectrum-css. If you look\n    // in node_modules/@adobe/spectrum-css/dist/components, what is the name\n    // of the directory that contains the CSS for the component that you are\n    // implementing\n    spectrum: &#39;button&#39;,\n    // A list of the components that we would like to generate CSS for. We can\n    // generate CSS for multiple related components (e.g button and action button)\n    components: [\n        {\n            // The basename for this component. This will control the naming of the\n            // generated CSS file\n            name: &#39;button&#39;,\n            // Information about the main CSS class for this component. This is the\n            // name of the CSS class in the spectrum-css file that relates to this\n            // component (e.g. .spectrum-Button). You can optionally provide a\n            // shadowSelector which will allow you to map the rules to an element\n            // in your shadow DOM. The default selector for the CSS rules is :host.\n            // If you are mapping to the default host: selector then you can\n            // simply say &quot;host: &#39;.spectrum-Button&#39;&quot;\n            host: {\n                // The selector from spectrum-css for the root of the component\n                selector: &#39;.spectrum-Button&#39;,\n                // The selector in the shadow DOM to map to (defaults to :host)\n                shadowSelector: &#39;#button&#39;,\n            },\n            // For components that can receive focus, this is the element in the\n            // shadow DOM that should receive focus\n            focus: &#39;#button&#39;,\n            // These are the options for the component that are set using attributes\n            // on the web component (e.g. quiet in &lt;sp-button quiet&gt;Click me&lt;/sp-button&gt;)\n            attributes: [\n                // Attributes may have a boolean type. In that case, if the attribute\n                // is present, the option is true\n                {\n                    // Type of the attribute\n                    type: &#39;boolean&#39;,\n                    // The selector whos rules should come into effect when the\n                    // option is true\n                    selector: &#39;.spectrum-Button--quiet&#39;,\n                },\n                {\n                    type: &#39;boolean&#39;,\n                    // An example of mapping a pseudo attribute to an attribute\n                    // on the web component\n                    selector: &#39;:disabled&#39;,\n                },\n                // Attributes may also be of type enum. In that case, there is\n                // usually a list of CSS classes in spectrum-css, of which only\n                // one should be present at a time.\n                {\n                    type: &#39;enum&#39;,\n                    // For enums, we need to provide a name here for the attribute\n                    // as it is defined in the implementation of the component\n                    name: &#39;variant&#39;,\n                    // This is a list of possible values for the attribute. If\n                    // the option is of the form &quot;.spectrum-Button--cta&quot; where\n                    // &quot;.spectrum-Button&quot; is the root CSS class, then we can extract\n                    // the enum value name automatically\n                    values: [\n                        // This related the enum value &lt;sp-button variant=&quot;cta&quot;&gt;\n                        &#39;.spectrum-Button--cta&#39;,\n                        &#39;.spectrum-Button--primary&#39;,\n                        &#39;.spectrum-Button--secondary&#39;,\n                        // If for some reason, we need to override the enum\n                        // values name, we can provide an object with the\n                        // selector and name explicitly\n                        {\n                            name: &#39;negative&#39;,\n                            selector: &#39;.spectrum-Button--warning&#39;,\n                        },\n                        &#39;.spectrum-Button--overBackground&#39;,\n                        &#39;.spectrum-Button--secondary&#39;,\n                    ],\n                },\n            ],\n            // This is a list of all of the spectrum-css class names that we\n            // wish to map to ids in the shadow DOM.\n            ids: [\n                // If the class name follows the patter of starting with the\n                // root class, then we can extract the id automatically. In this\n                // case it would be #label\n                &#39;.spectrum-Button-label&#39;,\n                // We can also explicitly provide the selector and the name\n                {\n                    selector: &#39;.spectrum-Button-label&#39;,\n                    name: &#39;label&#39;\n                }\n            ],\n            // We can provide a list of classes that we wish to map. It is\n            // preferred to use ids when possible. There are some cases\n            // where it is necessary to use a set CSS rules on multiple\n            // components in the shadow DOM. In that case, you should map\n            // the spectrum-css class to a shorter name\n            classes: [\n                {\n                    // Classname in the original spectrum-css\n                    selector: &#39;.spectrum-Slider-track&#39;,\n                    // New name to use. This will create the class .track\n                    name: &#39;track&#39;,\n                },\n            ],\n            // A list of slots on our web component that we wish to apply\n            // spectrum-css rules to\n            slots: [\n                {\n                    // The name of the slot (e.g. &lt;slot name=&quot;icon&quot;&gt;)\n                    name: &#39;icon&#39;,\n                    // The spectrum-css selector who&#39;s rules we wish to apply\n                    selector: &#39;.spectrum-Icon&#39;,\n                },\n            ],\n            // Regular expressions for rules that we wish to exclude from our\n            // processing. There are rules that do not make sense in a web\n            // component, and it is good form to keep our CSS as small as\n            // possible\n            exclude: [/\\.is-disabled/],\n        },\n        {\n            // A second component specification in the same file\n            name: &#39;action-button&#39;,\n            host: {\n                selector: &#39;.spectrum-ActionButton&#39;,\n                shadowSelector: &#39;#button&#39;,\n            },\n            ...\n        }\n    ],\n};</code-example>\n'},22:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(5);function s(e){const t=[`${e}`];return t.raw=[`${e}`],Object(o.d)(t)}},81:function(e,t,n){"use strict";n.r(t);var o=n(5),s=(n(50),n(35),n(82),n(83),n(72),n(22));const a=n(1016),c=new Map;for(const e of a.keys()){const t=/([a-zA-Z-]+)\.md$/.exec(e)[1],n=Object(s.a)(a(e));c.set(t,n)}var r=n(46),i=n(47);let p,l,u=e=>e;class m extends r.a{static get styles(){return[i.a]}get componentName(){return this.location?`sp-${this.location.params.guide}`:""}render(){let e;return this.location&&this.location.params&&(e=Object(o.d)(p||(p=u` <article class="spectrum-Typography"> ${0} </article> `),c.get(this.location.params.guide||"getting-started"))),e||Object(o.d)(l||(l=u``))}}customElements.define("docs-guide",m)}}]);
//# sourceMappingURL=1.c862ce03993588e4a683.js.map