webpackJsonp([3],{224:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=n.n(a),l=n(68),c=n(229),s=n(243),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),f(t,[{key:"render",value:function(){return u.a.createElement(l.a,{id:"article",title:"Home",description:"xx",image:"d"},u.a.createElement(c.a,{type:"h1",title:"Authors",padding:"pt4  mt2",fullWidth:!0,styles:"t-title  ttu  bold  f5  tac"}),u.a.createElement(s.a,Object.assign({},this.props,{padding:"pt2  pb3"})))}}]),t}(a.Component);t.default=p},227:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),s=n(69),f=r(s),p=n(2),d=r(p),h=n(231),m=n(232),y=r(m),b=n(233),v=r(b),w=n(234),g=r(w),O=n(235),_=r(O),E={top:0,right:0,bottom:0,left:0,width:0,height:0},j="data-lazyload-listened",P=[],T=[],C=!1;try{var k=Object.defineProperty({},"passive",{get:function(){C=!0}});window.addEventListener("test",null,k)}catch(e){}var N=!!C&&{capture:!1,passive:!0},M=function(e,t){var n=f.default.findDOMNode(e),r=void 0,o=void 0;try{var i=t.getBoundingClientRect();r=i.top,o=i.height}catch(e){r=E.top,o=E.height}var a=window.innerHeight||document.documentElement.clientHeight,u=Math.max(r,0),l=Math.min(a,r+o)-u,c=void 0,s=void 0;try{var p=n.getBoundingClientRect();c=p.top,s=p.height}catch(e){c=E.top,s=E.height}var d=c-u,h=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return d-h[0]<=l&&d+s+h[1]>=0},x=function(e){var t=f.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,r=void 0;try{var o=t.getBoundingClientRect();n=o.top,r=o.height}catch(e){n=E.top,r=E.height}var i=window.innerHeight||document.documentElement.clientHeight,a=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-a[0]<=i&&n+r+a[1]>=0},z=function(e){var t=f.default.findDOMNode(e);if(t){var n=(0,y.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?M(e,n):x(e))?e.visible||(e.props.once&&T.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},A=function(){T.forEach(function(e){var t=P.indexOf(e);-1!==t&&P.splice(t,1)}),T=[]},L=function(){for(var e=0;e<P.length;++e){var t=P[e];z(t)}A()},D=void 0,I=null,R=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return a(t,e),u(t,[{key:"componentDidMount",value:function(){var e=!1;if(void 0!==this.props.debounce&&"throttle"===D?(console.warn("[react-lazyload] Previous delay function is `throttle`, now switching to `debounce`, try setting them unanimously"),e=!0):"debounce"===D&&void 0===this.props.debounce&&(console.warn("[react-lazyload] Previous delay function is `debounce`, now switching to `throttle`, try setting them unanimously"),e=!0),e&&((0,h.off)(window,"scroll",I,N),(0,h.off)(window,"resize",I,N),I=null),I||(void 0!==this.props.debounce?(I=(0,v.default)(L,"number"===typeof this.props.debounce?this.props.debounce:300),D="debounce"):void 0!==this.props.throttle?(I=(0,g.default)(L,"number"===typeof this.props.throttle?this.props.throttle:300),D="throttle"):I=L),this.props.overflow){var t=(0,y.default)(f.default.findDOMNode(this));if(t&&"function"===typeof t.getAttribute){var n=+t.getAttribute(j)+1;1===n&&t.addEventListener("scroll",I,N),t.setAttribute(j,n)}}else if(0===P.length||e){var r=this.props,o=r.scroll,i=r.resize;o&&(0,h.on)(window,"scroll",I,N),i&&(0,h.on)(window,"resize",I,N)}P.push(this),z(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,y.default)(f.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(j)-1;0===t?(e.removeEventListener("scroll",I,N),e.removeAttribute(j)):e.setAttribute(j,t)}}var n=P.indexOf(this);-1!==n&&P.splice(n,1),0===P.length&&((0,h.off)(window,"resize",I,N),(0,h.off)(window,"scroll",I,N))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:c.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}(l.Component);R.propTypes={once:d.default.bool,height:d.default.oneOfType([d.default.number,d.default.string]),offset:d.default.oneOfType([d.default.number,d.default.arrayOf(d.default.number)]),overflow:d.default.bool,resize:d.default.bool,scroll:d.default.bool,children:d.default.node,throttle:d.default.oneOfType([d.default.number,d.default.bool]),debounce:d.default.oneOfType([d.default.number,d.default.bool]),placeholder:d.default.node,unmountIfInvisible:d.default.bool},R.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};t.lazyload=_.default;t.default=R,t.forceCheck=L}).call(t,n(230))},228:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),u=n.n(a),l=n(227),c=n.n(l),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.lazy,n=e.src,r=e.alt,o=e.styles;return t?u.a.createElement(u.a.Fragment,null,u.a.createElement(c.a,{height:200,offset:100,once:!0},u.a.createElement("div",{className:"over-hidden"},u.a.createElement("img",{className:"fadeIn-zoomIn  objf-cover  objp-center  "+o,src:n,alt:r})))):u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"over-hidden"},u.a.createElement("img",{className:"fadeIn-zoomIn  objf-cover  objp-center  "+o,src:n,alt:r})))}}]),t}(a.Component);t.a=f},229:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),u=n.n(a),l=n(227),c=n.n(l),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){var e,n,i,a;r(this,t);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.heading=function(e,t){switch(t){case"h1":return u.a.createElement("h1",{className:"dn"},e);case"h2":return u.a.createElement("h2",{className:"dn"},e);case"h3":return u.a.createElement("h3",{className:"dn"},e);case"h4":return u.a.createElement("h4",{className:"dn"},e);case"h5":return u.a.createElement("h5",{className:"dn"},e);case"h6":return u.a.createElement("h6",{className:"dn"},e);default:return null}},i.loopChars=function(e,t){for(var n=[],r=0;r<e.length;r++)n.push(u.a.createElement("span",{key:r,className:t+"  animatedHeading__letter  animatedHeading__letter--"+r},e.charAt(r)));return n},a=n,o(i,a)}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.type,n=e.title,r=e.padding,o=e.fullWidth,i=e.styles,a=o?"container  mla  mra  tac":null;return u.a.createElement("div",{className:a+"  "+r},this.heading(n,t),u.a.createElement(c.a,{height:100,offset:-100,once:!0},this.loopChars(n,i)))}}]),t}(a.Component);t.a=f},230:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){m&&d&&(m=!1,d.length?h=d.concat(h):y=-1,h.length&&u())}function u(){if(!m){var e=o(a);m=!0;for(var t=h.length;t;){for(d=h,h=[];++y<t;)d&&d[y].run();y=-1,t=h.length}d=null,m=!1,i(e)}}function l(e,t){this.fun=e,this.array=t}function c(){}var s,f,p=e.exports={};!function(){try{s="function"===typeof setTimeout?setTimeout:n}catch(e){s=n}try{f="function"===typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,h=[],m=!1,y=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new l(e,t)),1!==h.length||m||o(u)},l.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},231:function(e,t,n){"use strict";function r(e,t,n,r){r=r||!1,e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,function(t){n.call(e,t||window.event)})}function o(e,t,n,r){r=r||!1,e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.on=r,t.off=o},232:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,r=e;r;){if(!r.parentNode)return e.ownerDocument||document.documentElement;var o=window.getComputedStyle(r),i=o.position,a=o.overflow,u=o["overflow-x"],l=o["overflow-y"];if("static"===i&&t)r=r.parentNode;else{if(n.test(a)&&n.test(u)&&n.test(l))return r;r=r.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},233:function(e,t,n){"use strict";function r(e,t,n){var r=void 0,o=void 0,i=void 0,a=void 0,u=void 0,l=function l(){var c=+new Date-a;c<t&&c>=0?r=setTimeout(l,t-c):(r=null,n||(u=e.apply(i,o),r||(i=null,o=null)))};return function(){i=this,o=arguments,a=+new Date;var c=n&&!r;return r||(r=setTimeout(l,t)),c&&(u=e.apply(i,o),i=null,o=null),u}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},234:function(e,t,n){"use strict";function r(e,t,n){t||(t=250);var r,o;return function(){var i=n||this,a=+new Date,u=arguments;r&&a<r+t?(clearTimeout(o),o=setTimeout(function(){r=a,e.apply(i,u)},t)):(r=a,e.apply(i,u))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},235:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),s=n(227),f=r(s),p=function(e){return e.displayName||e.name||"Component"};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function r(){o(this,r);var e=i(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.displayName="LazyLoad"+p(t),e}return a(r,n),u(r,[{key:"render",value:function(){return c.default.createElement(f.default,e,c.default.createElement(t,this.props))}}]),r}(l.Component)}}},243:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),u=n.n(a),l=n(11),c=n(18),s=n(244),f=n(74),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),p(t,[{key:"componentDidMount",value:function(e){this.props.getCurrentProfiles(e)}},{key:"componentWillUnmount",value:function(){this.props.removeCurrentProfiles()}},{key:"shouldComponentUpdate",value:function(e){return e.match.path!==this.props.match.path&&this.props.getCurrentProfiles(e),!0}},{key:"render",value:function(){var e=this.props.currentProfiles,t=this.props.padding;return!!e.length&&u.a.createElement(s.a,{items:e,padding:t})}}]),t}(a.Component),h=function(e){return{currentProfiles:e.authors.currentProfiles}},m=function(e){return Object(l.b)({getCurrentProfiles:f.b,removeCurrentProfiles:f.c},e)};t.a=Object(c.connect)(h,m)(d)},244:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),u=n.n(a),l=n(30),c=n(228),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props.items,t=this.props.padding;return u.a.createElement("section",{className:"container-medium  mla  mra  "+t},u.a.createElement("div",{className:"flex  flex-wrap"},e.map(function(e,t){return u.a.createElement("article",{key:t,className:"col-24  col-12-sm  col-6-md  pa3"},u.a.createElement("figure",null,u.a.createElement(l.a,{className:"link  db  shadow2",to:"/article/"+e.slug.current},u.a.createElement(c.a,{lazy:!0,src:e.mainImage,alt:e.name,styles:"trans-all-1  h7  h9-sm  w-100"}))),u.a.createElement(l.a,{className:"link",to:"/article/"+e.slug.current},u.a.createElement("p",{className:"t-title  bold  f6  f5-md  black  pt3  pb2"},e.name)))})))}}]),t}(a.Component);t.a=f}});
//# sourceMappingURL=authors.c6f7e006.chunk.js.map