!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react"),require("antd"),require("classnames"),require("noop"),require("react-dom"),require("object-assign")):"function"==typeof define&&define.amd?define(["prop-types","react","antd","classnames","noop","react-dom","object-assign"],t):"object"==typeof exports?exports.BoilerplateReactComponent=t(require("prop-types"),require("react"),require("antd"),require("classnames"),require("noop"),require("react-dom"),require("object-assign")):e.BoilerplateReactComponent=t(e["prop-types"],e.react,e.antd,e.classnames,e.noop,e["react-dom"],e["object-assign"])}(window,function(e,t,r,n,o,u,i){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=u},function(e,t){e.exports=i},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),u=(r(5),r(0)),i=r.n(u),a=r(3),c=r.n(a),l=r(4),p=r.n(l),f=(r(6),r(2));function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return(r=d(this,(e=v(t)).call.apply(e,[this].concat(o))))._onMenuClick=function(e){(0,r.props.onMenuClick)(e)},r}var r,u,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,n["Component"]),r=t,(u=[{key:"render",value:function(){var e=this.props,t=e.className,r=(e.items,e.valueKey,b(e,["className","items","valueKey"]));return o.a.createElement(f.Dropdown,y({overlay:this.menuView,className:c()("react-ant-dropdown-menu",t)},r))}},{key:"menuView",get:function(){var e=this.props,t=e.items,r=e.valueKey;return o.a.createElement(f.Menu,{onClick:this._onMenuClick},t.map(function(e,t){var n=e[r]||t;return o.a.createElement(f.Menu.Item,{key:n},e.label||e)}))}}])&&m(r.prototype,u),i&&m(r,i),t}();O.propTypes={className:i.a.string,value:i.a.object,items:i.a.array,valueKey:i.a.string,onMenuClick:i.a.func},O.defaultProps={items:[],onMenuClick:p.a,valueKey:"value"};t.default=O}])});