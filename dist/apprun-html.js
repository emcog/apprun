!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(2);const i=(t,e={})=>(class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return Object.assign({},e).observedAttributes}connectedCallback(){if(this.isConnected&&!this._component){const n=e||{};this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const o={};Array.from(this.attributes).forEach(t=>o[t.name]=t.value);const r=this.children?Array.from(this.children):[];if(r.forEach(t=>t.parentElement.removeChild(t)),this._component=new t(Object.assign(Object.assign({},o),{children:r})).mount(this._shadowRoot,n),this._component.mounted){const t=this._component.mounted(o,r,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==n.render&&this._component.run(".")}}disconnectedCallback(){this._component.unload&&this._component.unload(),this._component.unmount(),this._component=null}attributeChangedCallback(...t){this._component&&this._component.run("attributeChanged",...t)}});var s=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,i(e,n))};const a={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function c(t,e={}){return(n,o,r)=>{const i=t?t.toString():o;return a.defineMetadata(`apprun-update:${i}`,{name:i,key:o,options:e},n),r}}function u(t,e={}){return function(n,o){const r=t?t.toString():o;a.defineMetadata(`apprun-update:${r}`,{name:r,key:o,options:e},n)}}function d(t,e){return function(n){return s(t,n,e),n}}const l=(t,e)=>(e?t.state[e]:t.state)||"",h=(t,e,n)=>{if(e){const o=Object.assign({},t.state);o[e]=n,t.setState(o)}else t.setState(n)};var f=(t,e,n,r)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>r.run(t,e);else if("string"==typeof n)e[t]=t=>r.run(n,t);else if("function"==typeof n)e[t]=t=>r.setState(n(r.state,t));else if(Array.isArray(n)){const[o,...i]=n;"string"==typeof o?e[t]=t=>r.run(o,...i,t):"function"==typeof o&&(e[t]=t=>r.setState(o(r.state,...i,t)))}}else if("$bind"===t){const o=e.type||"text",i="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(o){case"checkbox":e.checked=l(r,i),e.onclick=t=>h(r,i||t.target.name,t.target.checked);break;case"radio":e.checked=l(r,i)===e.value,e.onclick=t=>h(r,i||t.target.name,t.target.value);break;case"number":case"range":e.value=l(r,i),e.oninput=t=>h(r,i||t.target.name,Number(t.target.value));break;default:e.value=l(r,i),e.oninput=t=>h(r,i||t.target.name,t.target.value)}else"select"===n?(e.value=l(r,i),e.onchange=t=>{t.target.multiple||h(r,i||t.target.name,t.target.value)}):"option"===n&&(e.selected=l(r,i),e.onclick=t=>h(r,i||t.target.name,t.target.selected))}else o.b.run("$",{key:t,tag:n,props:e,component:r})};const p={};o.b.on("get-components",t=>t.components=p);const m=t=>t;class b{constructor(t,e,n,r){this.state=t,this.view=e,this.update=n,this.options=r,this._app=new o.a,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e={render:!0})=>this.mount(t,Object.assign(Object.assign({},e),{render:!0}))}render(t,e){o.b.render(t,e,this)}_view(t,e=null){if(!this.view)return;const n=o.b.createElement;o.b.createElement=(t,e,...o)=>(e&&Object.keys(e).forEach(n=>{n.startsWith("$")&&(f(n,e,t,this),delete e[n])}),n(t,e,...o));const r=e?this.view(t,e):this.view(t);return o.b.createElement=n,r}renderState(t){if(!this.view)return;const e=this._view(t);if(o.b.debug&&o.b.run("debug",{component:this,state:t,vdom:e||"[vdom is null - no render]"}),"object"!=typeof document)return;const n="string"==typeof this.element?document.getElementById(this.element):this.element;if(n){const t="_c";this.unload?n._component===this&&n.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),n.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver(t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(n)||(this.unload(this.state),this.observer.disconnect())})),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):n.removeAttribute&&n.removeAttribute(t),n._component=this}this.render(n,e),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)t.then(t=>{this.setState(t,e)}).catch(t=>{throw console.error(t),t}),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){var n,r;if(console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(Object.assign({},this.options),e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),this.add_actions(),this.state=null!=(r=null!=(n=this.state)?n:this.model)?r:{},e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),o.b.debug){const e="string"==typeof t?t:t.id;p[e]=p[e]||[],p[e].push(this)}return this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,e,n={}){e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,(...r)=>{const i=e(this.state,...r);o.b.debug&&o.b.run("debug",{component:this,event:t,e:r,state:this.state,newState:i,options:n}),this.setState(i,n)},n))}add_actions(){const t=this.update||{};a.getMetadataKeys(this).forEach(e=>{if(e.startsWith("apprun-update:")){const n=a.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}});const e={};Array.isArray(t)?t.forEach(t=>{const[n,o,r]=t;n.toString().split(",").forEach(t=>e[t.trim()]=[o,r])}):Object.keys(t).forEach(n=>{const o=t[n];("function"==typeof o||Array.isArray(o))&&n.split(",").forEach(t=>e[t.trim()]=o)}),e["."]||(e["."]=m),Object.keys(e).forEach(t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])})}run(t,...e){const n=t.toString();return this.is_global_event(n)?o.b.run(n,...e):this._app.run(n,...e)}on(t,e,n){const r=t.toString();return this._actions.push({name:r,fn:e}),this.is_global_event(r)?o.b.on(r,e,n):this._app.on(r,e,n)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach(t=>{const{name:e,fn:n}=t;this.is_global_event(e)?o.b.off(e,n):this._app.off(e,n)})}}b.__isAppRunComponent=!0;const g=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");o.b.run(e,...n)||o.b.run("///",e,...n),o.b.run("//",e,...n)}else if(t.startsWith("/")){const[e,n,...r]=t.split("/");o.b.run("/"+n,...r)||o.b.run("///","/"+n,...r),o.b.run("//","/"+n,...r)}else o.b.run(t)||o.b.run("///",t),o.b.run("//",t)};n.d(e,"app",(function(){return o.b})),n.d(e,"Component",(function(){return b})),n.d(e,"on",(function(){return u})),n.d(e,"update",(function(){return c})),n.d(e,"event",(function(){return c})),n.d(e,"ROUTER_EVENT",(function(){return"//"})),n.d(e,"ROUTER_404_EVENT",(function(){return"///"})),n.d(e,"customElement",(function(){return d})),o.b.createElement=r.b,o.b.render=function(t,e,n){Object(r.c)(t,e,n)},o.b.Fragment=r.a,o.b.webComponent=s,o.b.start=(t,e,n,o,r)=>{const i=Object.assign(Object.assign({},r),{render:!0,global_event:!0}),s=new b(e,n,o);return r&&r.rendered&&(s.rendered=r.rendered),s.mount(t,i),s};const y=t=>{};o.b.on("$",y),o.b.on("debug",t=>y),o.b.on("//",y),o.b.on("#",y),o.b.route=g,o.b.on("route",t=>o.b.route&&o.b.route(t)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{o.b.route===g&&(window.onpopstate=()=>g(location.hash),g(location.hash))});e.default=o.b;"object"==typeof window&&(window.Component=b,window.React=o.b)},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));class o{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){const n=this._events[t]||[];this._events[t]=n.filter(t=>t.fn!==e)}find(t){return this._events[t]}run(t,...e){let n=this._events[t]||[];return console.assert(n&&n.length>0,"No subscriber for event: "+t),this._events[t]=n.filter(t=>!t.options.once),n.forEach(n=>{const{fn:o,options:r}=n;return r.delay?this.delay(t,o,e,r):o.apply(this,e),!n.options.once}),n.length}once(t,e,n={}){this.on(t,e,Object.assign(Object.assign({},n),{once:!0}))}delay(t,e,n,o){o._t&&clearTimeout(o._t),o._t=setTimeout(()=>{clearTimeout(o._t),e.apply(this,n)},o.delay)}}let r;const i="object"==typeof self&&self.self===self&&self||"object"==typeof t&&t.global===t&&t;i.app&&i._AppRunVersions?r=i.app:(r=new o,i.app=r,i._AppRunVersions="AppRun-2"),e.b=r}).call(this,n(3))},function(t,e,n){"use strict";var o=n(1);function r(t,e,n){const{tag:r,props:i,children:s}=t;let a=`_${n}`,c=i&&i.id;c?a=c:c=`_${n}${Date.now()}`,e.__componentCache||(e.__componentCache={});let u=e.__componentCache[a];u?c=u.__eid:(u=e.__componentCache[a]=new r(Object.assign(Object.assign({},i),{children:s})).mount(c)).__eid=c;let d=u.state;if(u.mounted){const t=u.mounted(i,s,d);void 0!==t&&(d=u.state=t)}const l=d instanceof Promise?"":u._view(d,i);return o.b.createElement("section",Object.assign({},i,{id:c,ref:t=>(t=>{u.element=t,u.setState(d)})(t)}),l)}let i=0;n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return b}));const s="_props";function a(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach(t=>{Array.isArray(t)?t.forEach(t=>n(t)):n(t)}),e}function c(t,e,...n){const o=a(n);if("string"==typeof t)return{tag:t,props:e,children:o};if(Array.isArray(t))return t;if(void 0===t&&n)return o;if(Object.getPrototypeOf(t).__isAppRunComponent)return{tag:t,props:e,children:o};if("function"==typeof t)return t(e,o);throw new Error(`Unknown tag in vdom ${t}`)}const u={},d=function(t,e,n={}){if(null==e||!1===e)return;if(e=function t(e,n,o=0){if(0===o&&(i=0),"string"==typeof e)return e;if(Array.isArray(e))return e.map(e=>t(e,n,i));let s=e;return e&&"function"==typeof e.tag&&Object.getPrototypeOf(e.tag).__isAppRunComponent&&(s=r(e,n,i++)),s&&Array.isArray(s.children)&&(s.children=s.children.map(e=>t(e,n,i))),s}(e,n),!t)return;Array.isArray(e)?h(t,e):h(t,[e])};function l(t,e){console.assert(!!t),function(t,e){const n=t.nodeName,o=`${e.tag||""}`;return n.toUpperCase()===o.toUpperCase()}(t,e)?(h(t,e.children),m(t,e.props)):t.parentNode.replaceChild(p(e),t)}function h(t,e){const n=Math.min(t.childNodes.length,e.length);for(let o=0;o<n;o++){const n=e[o],r=t.childNodes[o];if(n instanceof HTMLElement)t.insertBefore(n,r);else if("string"==typeof n)r.textContent!==n&&(3===r.nodeType?r.textContent=n:t.replaceChild(f(n),r));else{const e=n.props&&n.props.key;if(e)if(r.key===e)l(t.childNodes[o],n);else{const i=u[e];i?(t.insertBefore(i,r),t.appendChild(r),l(t.childNodes[o],n)):t.insertBefore(p(n),r)}else l(t.childNodes[o],n)}}let o=t.childNodes.length;for(;o>n;)t.removeChild(t.lastChild),o--;if(e.length>n){const o=document.createDocumentFragment();for(let t=n;t<e.length;t++)o.appendChild(p(e[t]));t.appendChild(o)}}function f(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function p(t,e=!1){if(console.assert(null!=t),t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return f(t);if(!t.tag||"function"==typeof t.tag)return f(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return m(n,t.props),t.children&&t.children.forEach(t=>n.appendChild(p(t,e))),n}function m(t,e){console.assert(!!t);const n=t[s]||{};e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach(t=>n[t]=null),e&&Object.keys(e).forEach(t=>n[t]=e[t]),n}(n,e||{}),t[s]=e;for(const n in e){const o=e[n];if("style"===n){t.style.cssText&&(t.style.cssText="");for(const e in o)t.style[e]!==o[e]&&(t.style[e]=o[e])}else if(n.startsWith("data-")){const e=n.substring(5).replace(/-(\w)/g,t=>t[1].toUpperCase());t.dataset[e]!==o&&(o||""===o?t.dataset[e]=o:delete t.dataset[e])}else"id"===n||"class"===n||n.startsWith("role")||n.indexOf("-")>0||t instanceof SVGElement?t.getAttribute(n)!==o&&(o?t.setAttribute(n,o):t.removeAttribute(n)):t[n]!==o&&(t[n]=o);"key"===n&&o&&(u[o]=t)}e&&"function"==typeof e.ref&&window.requestAnimationFrame(()=>e.ref(t))}function b(t,...e){return a(e)}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},,,function(t,e,n){"use strict";n.r(e);var o,r=n(0),i=n(2),s=11;var a="http://www.w3.org/1999/xhtml",c="undefined"==typeof document?void 0:document,u=!!c&&"content"in c.createElement("template"),d=!!c&&c.createRange&&"createContextualFragment"in c.createRange();function l(t){return t=t.trim(),u?function(t){var e=c.createElement("template");return e.innerHTML=t,e.content.childNodes[0]}(t):d?function(t){return o||(o=c.createRange()).selectNode(c.body),o.createContextualFragment(t).childNodes[0]}(t):function(t){var e=c.createElement("body");return e.innerHTML=t,e.childNodes[0]}(t)}function h(t,e){var n=t.nodeName,o=e.nodeName;return n===o||!!(e.actualize&&n.charCodeAt(0)<91&&o.charCodeAt(0)>90)&&n===o.toUpperCase()}function f(t,e,n){t[n]!==e[n]&&(t[n]=e[n],t[n]?t.setAttribute(n,""):t.removeAttribute(n))}var p={OPTION:function(t,e){var n=t.parentNode;if(n){var o=n.nodeName.toUpperCase();"OPTGROUP"===o&&(o=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==o||n.hasAttribute("multiple")||(t.hasAttribute("selected")&&!e.selected&&(t.setAttribute("selected","selected"),t.removeAttribute("selected")),n.selectedIndex=-1)}f(t,e,"selected")},INPUT:function(t,e){f(t,e,"checked"),f(t,e,"disabled"),t.value!==e.value&&(t.value=e.value),e.hasAttribute("value")||t.removeAttribute("value")},TEXTAREA:function(t,e){var n=e.value;t.value!==n&&(t.value=n);var o=t.firstChild;if(o){var r=o.nodeValue;if(r==n||!n&&r==t.placeholder)return;o.nodeValue=n}},SELECT:function(t,e){if(!e.hasAttribute("multiple")){for(var n,o,r=-1,i=0,s=t.firstChild;s;)if("OPTGROUP"===(o=s.nodeName&&s.nodeName.toUpperCase()))s=(n=s).firstChild;else{if("OPTION"===o){if(s.hasAttribute("selected")){r=i;break}i++}!(s=s.nextSibling)&&n&&(s=n.nextSibling,n=null)}t.selectedIndex=r}}},m=1,b=11,g=3,y=8;function _(){}function v(t){if(t)return t.getAttribute&&t.getAttribute("id")||t.id}var E=function(t){return function(e,n,o){if(o||(o={}),"string"==typeof n)if("#document"===e.nodeName||"HTML"===e.nodeName){var r=n;(n=c.createElement("html")).innerHTML=r}else n=l(n);var i=o.getNodeKey||v,s=o.onBeforeNodeAdded||_,u=o.onNodeAdded||_,d=o.onBeforeElUpdated||_,f=o.onElUpdated||_,E=o.onBeforeNodeDiscarded||_,A=o.onNodeDiscarded||_,O=o.onBeforeElChildrenUpdated||_,C=!0===o.childrenOnly,N=Object.create(null),w=[];function T(t){w.push(t)}function x(t,e,n){!1!==E(t)&&(e&&e.removeChild(t),A(t),function t(e,n){if(e.nodeType===m)for(var o=e.firstChild;o;){var r=void 0;n&&(r=i(o))?T(r):(A(o),o.firstChild&&t(o,n)),o=o.nextSibling}}(t,n))}function S(t){u(t);for(var e=t.firstChild;e;){var n=e.nextSibling,o=i(e);if(o){var r=N[o];r&&h(e,r)&&(e.parentNode.replaceChild(r,e),j(r,e))}S(e),e=n}}function j(e,n,o){var r=i(n);if(r&&delete N[r],!o){if(!1===d(e,n))return;if(t(e,n),f(e),!1===O(e,n))return}"TEXTAREA"!==e.nodeName?function(t,e){var n,o,r,a,u,d=e.firstChild,l=t.firstChild;t:for(;d;){for(a=d.nextSibling,n=i(d);l;){if(r=l.nextSibling,d.isSameNode&&d.isSameNode(l)){d=a,l=r;continue t}o=i(l);var f=l.nodeType,b=void 0;if(f===d.nodeType&&(f===m?(n?n!==o&&((u=N[n])?r===u?b=!1:(t.insertBefore(u,l),o?T(o):x(l,t,!0),l=u):b=!1):o&&(b=!1),(b=!1!==b&&h(l,d))&&j(l,d)):f!==g&&f!=y||(b=!0,l.nodeValue!==d.nodeValue&&(l.nodeValue=d.nodeValue))),b){d=a,l=r;continue t}o?T(o):x(l,t,!0),l=r}if(n&&(u=N[n])&&h(u,d))t.appendChild(u),j(u,d);else{var _=s(d);!1!==_&&(_&&(d=_),d.actualize&&(d=d.actualize(t.ownerDocument||c)),t.appendChild(d),S(d))}d=a,l=r}!function(t,e,n){for(;e;){var o=e.nextSibling;(n=i(e))?T(n):x(e,t,!0),e=o}}(t,l,o);var v=p[t.nodeName];v&&v(t,e)}(e,n):p.TEXTAREA(e,n)}!function t(e){if(e.nodeType===m||e.nodeType===b)for(var n=e.firstChild;n;){var o=i(n);o&&(N[o]=n),t(n),n=n.nextSibling}}(e);var k,R,M=e,U=M.nodeType,V=n.nodeType;if(!C)if(U===m)V===m?h(e,n)||(A(e),M=function(t,e){for(var n=t.firstChild;n;){var o=n.nextSibling;e.appendChild(n),n=o}return e}(e,(k=n.nodeName,(R=n.namespaceURI)&&R!==a?c.createElementNS(R,k):c.createElement(k)))):M=n;else if(U===g||U===y){if(V===U)return M.nodeValue!==n.nodeValue&&(M.nodeValue=n.nodeValue),M;M=n}if(M===n)A(e);else{if(n.isSameNode&&n.isSameNode(M))return;if(j(M,n,C),w)for(var P=0,L=w.length;P<L;P++){var $=N[w[P]];$&&x($,$.parentNode,!1)}}return!C&&M!==e&&e.parentNode&&(M.actualize&&(M=M.actualize(e.ownerDocument||c)),e.parentNode.replaceChild(M,e)),M}}((function(t,e){var n,o,r,i,a=e.attributes;if(e.nodeType!==s&&t.nodeType!==s){for(var c=a.length-1;c>=0;c--)o=(n=a[c]).name,r=n.namespaceURI,i=n.value,r?(o=n.localName||o,t.getAttributeNS(r,o)!==i&&("xmlns"===n.prefix&&(o=n.name),t.setAttributeNS(r,o,i))):t.getAttribute(o)!==i&&t.setAttribute(o,i);for(var u=t.attributes,d=u.length-1;d>=0;d--)o=(n=u[d]).name,(r=n.namespaceURI)?(o=n.localName||o,e.hasAttributeNS(r,o)||t.removeAttributeNS(r,o)):e.hasAttribute(o)||t.removeAttribute(o)}}));n.d(e,"app",(function(){return r.app})),n.d(e,"Component",(function(){return r.Component})),n.d(e,"on",(function(){return r.on})),n.d(e,"update",(function(){return r.update})),n.d(e,"event",(function(){return r.event})),n.d(e,"customElement",(function(){return r.customElement})),n.d(e,"ROUTER_404_EVENT",(function(){return r.ROUTER_404_EVENT})),n.d(e,"ROUTER_EVENT",(function(){return r.ROUTER_EVENT})),r.default.createElement=i.b,r.default.render=function(t,e,n){if("string"==typeof e)if(e=e.trim(),t.firstChild){const n=t.cloneNode(!1);n.innerHTML=e,E(t,n)}else t.innerHTML=e;else Object(i.c)(t,e,n)},r.default.Fragment=i.a;e.default=r.default}])}));
//# sourceMappingURL=apprun-html.js.map