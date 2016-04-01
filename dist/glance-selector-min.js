(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(e,t){try{return(0,_css2["default"])("."+e,t)}catch(r){return[]}};var _css=require("./css"),_css2=_interopRequireDefault(_css);
},{"./css":3}],2:[function(require,module,exports){
"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(t,e){return(0,_xpath2["default"])(".//*[not(self::script) and not(self::noscript) and not(self::style) and text()[contains(translate(., 'ABCDEFGHJIKLMNOPQRSTUVWXYZ', 'abcdefghjiklmnopqrstuvwxyz'),translate('"+t+"', 'ABCDEFGHJIKLMNOPQRSTUVWXYZ', 'abcdefghjiklmnopqrstuvwxyz'))]]",e)};var _xpath=require("./xpath"),_xpath2=_interopRequireDefault(_xpath);
},{"./xpath":11}],3:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(e,r){try{var t=r.querySelectorAll(e);return Array.prototype.slice.apply(t)}catch(l){return[]}};
},{}],4:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(e,r,t){t=t||{};var n=t[e],u=n;if("function"==typeof u&&(u=n()),!u)return[];u=[].concat(u);try{var o=[];return u.forEach(function(e){isDescendant(r,e)&&o.push(e)}),o}catch(a){return[]}};var isDescendant=function(e,r){for(var t=r.parentNode;null!=t;){if(t==e)return!0;t=t.parentNode}return!1};
},{}],5:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(e,l,a){_logger2["default"].debug("Searching by custom label:",e);var t=(0,_customLabel2["default"])(e,l,a||{});return t.length>0?(_logger2["default"].info("Matched using custom label:",e),t):(_logger2["default"].debug("Searching for text that contains:",e),t=(0,_containsText2["default"])(e,l),t.length>0?(_logger2["default"].info("Matched using contains text:",e),t):(_logger2["default"].debug("Searching by id:",e),t=(0,_id2["default"])(e,l),t.length>0?(_logger2["default"].info("Matched using ID:",e),t):(_logger2["default"].debug("Searching for css class:",e),t=(0,_className2["default"])(e,l),t.length>0?(_logger2["default"].info("Matched using css class:",e),t):(_logger2["default"].debug("Searching in name:",e),t=(0,_name2["default"])(e,l),t.length>0?(_logger2["default"].info("Matched using name:",e),t):(_logger2["default"].debug("Searching in value:",e),t=(0,_value2["default"])(e,l),t.length>0?(_logger2["default"].info("Matched using value:",e),t):(_logger2["default"].debug("Searching in placeholder:",e),t=(0,_placeholder2["default"])(e,l),t.length>0?(_logger2["default"].info("Matched using placeholder:",e),t):(_logger2["default"].debug("Searching by node type:",e),t=(0,_nodeType2["default"])(e,l),t.length>0?(_logger2["default"].info("Matched using node type:",e),t):t)))))))};var _logger=require("../logger"),_logger2=_interopRequireDefault(_logger),_customLabel=require("./custom-label"),_customLabel2=_interopRequireDefault(_customLabel),_containsText=require("./contains-text"),_containsText2=_interopRequireDefault(_containsText),_id=require("./id"),_id2=_interopRequireDefault(_id),_className=require("./class-name"),_className2=_interopRequireDefault(_className),_name=require("./name"),_name2=_interopRequireDefault(_name),_value=require("./value"),_value2=_interopRequireDefault(_value),_placeholder=require("./placeholder"),_placeholder2=_interopRequireDefault(_placeholder),_nodeType=require("./node-type"),_nodeType2=_interopRequireDefault(_nodeType);
},{"../logger":13,"./class-name":1,"./contains-text":2,"./custom-label":4,"./id":6,"./name":7,"./node-type":8,"./placeholder":9,"./value":10}],6:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(e,t){try{return(0,_css2["default"])("#"+e,t)}catch(r){return[]}};var _css=require("./css"),_css2=_interopRequireDefault(_css);
},{"./css":3}],7:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(e,t){return(0,_xpath2["default"])(".//*[contains(translate(@name, 'ABCDEFGHJIKLMNOPQRSTUVWXYZ', 'abcdefghjiklmnopqrstuvwxyz'), translate('"+e+"', 'ABCDEFGHJIKLMNOPQRSTUVWXYZ', 'abcdefghjiklmnopqrstuvwxyz'))]",t)};var _xpath=require("./xpath"),_xpath2=_interopRequireDefault(_xpath);
},{"./xpath":11}],8:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(e,t){try{return(0,_css2["default"])(""+e,t)}catch(r){return[]}};var _css=require("./css"),_css2=_interopRequireDefault(_css);
},{"./css":3}],9:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(e,t){return(0,_xpath2["default"])(".//*[contains(translate(@placeholder, 'ABCDEFGHJIKLMNOPQRSTUVWXYZ', 'abcdefghjiklmnopqrstuvwxyz'), translate('"+e+"', 'ABCDEFGHJIKLMNOPQRSTUVWXYZ', 'abcdefghjiklmnopqrstuvwxyz'))]",t)};var _xpath=require("./xpath"),_xpath2=_interopRequireDefault(_xpath);
},{"./xpath":11}],10:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(e,t){return(0,_css2["default"])("button,input,option,param",t).filter(function(t){return t.value&&-1!=t.value.toLowerCase().indexOf(e.toLowerCase())})};var _css=require("./css"),_css2=_interopRequireDefault(_css);
},{"./css":3}],11:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(t,e){try{for(var u=[],r=document.evaluate(t,e,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),n=0;n<r.snapshotLength;n++)u.push(r.snapshotItem(n));return u}catch(s){return[]}};
},{}],12:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _selector=require("./selector"),_selector2=_interopRequireDefault(_selector);window.glanceSelector=_selector2["default"];
},{"./selector":18}],13:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var LogLevels={error:0,warn:1,info:2,debug:3,trace:4};exports["default"]={level:LogLevels.error,setLogLevel:function(r){this.level=LogLevels[r]},error:function(){for(var r=arguments.length,e=Array(r),o=0;r>o;o++)e[o]=arguments[o];this._log("error",e)},warn:function(){for(var r=arguments.length,e=Array(r),o=0;r>o;o++)e[o]=arguments[o];this._log("warn",e)},info:function(){for(var r=arguments.length,e=Array(r),o=0;r>o;o++)e[o]=arguments[o];this._log("info",e)},debug:function(){for(var r=arguments.length,e=Array(r),o=0;r>o;o++)e[o]=arguments[o];this._log("debug",e)},trace:function(){for(var r=arguments.length,e=Array(r),o=0;r>o;o++)e[o]=arguments[o];this._log("trace",e)},_log:function(r,e){var o=LogLevels[r];o<=this.level&&console.log(e.join(" "))}};
},{}],14:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={visible:{implicit:!0,filter:function(e){return e.filter(function(e){return"option"==e.tagName.toLowerCase()||e.offsetParent})}}};
},{}],15:[function(require,module,exports){
"use strict";module.exports=function(){function n(n,r){function t(){this.constructor=n}t.prototype=r.prototype,n.prototype=new t}function r(n,t,e,u){this.message=n,this.expected=t,this.found=e,this.location=u,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,r)}function t(n){function t(){return n.substring(un,en)}function e(r){var t,e,u=on[r];if(u)return u;for(t=r-1;!on[t];)t--;for(u=on[t],u={line:u.line,column:u.column,seenCR:u.seenCR};r>t;)e=n.charAt(t),"\n"===e?(u.seenCR||u.line++,u.column=1,u.seenCR=!1):"\r"===e||"\u2028"===e||"\u2029"===e?(u.line++,u.column=1,u.seenCR=!0):(u.column++,u.seenCR=!1),t++;return on[r]=u,u}function u(n,r){var t=e(n),u=e(r);return{start:{offset:n,line:t.line,column:t.column},end:{offset:r,line:u.line,column:u.column}}}function i(n){cn>en||(en>cn&&(cn=en,an=[]),an.push(n))}function o(n,t,e,u){function i(n){var r=1;for(n.sort(function(n,r){return n.description<r.description?-1:n.description>r.description?1:0});r<n.length;)n[r-1]===n[r]?n.splice(r,1):r++}function o(n,r){function t(n){function r(n){return n.charCodeAt(0).toString(16).toUpperCase()}return n.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(n){return"\\x0"+r(n)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(n){return"\\x"+r(n)}).replace(/[\u0100-\u0FFF]/g,function(n){return"\\u0"+r(n)}).replace(/[\u1000-\uFFFF]/g,function(n){return"\\u"+r(n)})}var e,u,i,o=new Array(n.length);for(i=0;i<n.length;i++)o[i]=n[i].description;return e=n.length>1?o.slice(0,-1).join(", ")+" or "+o[n.length-1]:o[0],u=r?'"'+t(r)+'"':"end of input","Expected "+e+" but "+u+" found."}return null!==t&&i(t),new r(null!==n?n:o(t,e),t,e,u)}function c(){var n,r,t;for(n=en,r=[],t=h();t!==j;)r.push(t),t=h();return r!==j&&(un=n,r=B(r)),n=r}function a(){var r;return 62===n.charCodeAt(en)?(r=I,en++):(r=j,0===ln&&i(U)),r}function l(){var r;return 58===n.charCodeAt(en)?(r=q,en++):(r=j,0===ln&&i(z)),r}function f(){var r;return 44===n.charCodeAt(en)?(r=D,en++):(r=j,0===ln&&i(G)),r}function s(){var r;return 35===n.charCodeAt(en)?(r=H,en++):(r=j,0===ln&&i(J)),r}function p(){var r;return 92===n.charCodeAt(en)?(r=K,en++):(r=j,0===ln&&i(L)),r}function h(){var n,r,t;return n=en,r=v(),r!==j?(t=a(),t===j&&(t=null),t!==j?(un=n,r=M(r),n=r):(en=n,n=j)):(en=n,n=j),n}function v(){var n,r,t,e,u;return n=en,r=d(),r!==j?(t=x(),t===j&&(t=null),t!==j?(e=F(),e===j&&(e=null),e!==j?(u=A(),u===j&&(u=null),u!==j?(un=n,r=N(r,t,e),n=r):(en=n,n=j)):(en=n,n=j)):(en=n,n=j)):(en=n,n=j),n}function d(){var n,r,t;if(n=en,r=[],t=g(),t!==j)for(;t!==j;)r.push(t),t=g();else r=j;return r!==j&&(un=n,r=O(r)),n=r}function g(){var n,r,t;return n=en,r=en,ln++,t=p(),t===j&&(t=a(),t===j&&(t=s(),t===j&&(t=l()))),ln--,t===j?r=void 0:(en=r,r=j),r!==j?(t=y(),t!==j?(un=n,r=P(t),n=r):(en=n,n=j)):(en=n,n=j),n===j&&(n=en,r=m(),r!==j&&(un=n,r=P(r)),n=r),n}function y(){var r;return n.length>en?(r=n.charAt(en),en++):(r=j,0===ln&&i(Q)),r}function A(){var r,t;if(r=[],V.test(n.charAt(en))?(t=n.charAt(en),en++):(t=j,0===ln&&i(W)),t!==j)for(;t!==j;)r.push(t),V.test(n.charAt(en))?(t=n.charAt(en),en++):(t=j,0===ln&&i(W));else r=j;return r}function m(){var n,r,t;return n=en,r=p(),r!==j?(t=p(),t===j&&(t=s(),t===j&&(t=a(),t===j&&(t=l()))),t!==j?(un=n,r=X(t),n=r):(en=n,n=j)):(en=n,n=j),n}function x(){var n,r,t;return n=en,r=s(),r!==j?(t=C(),t!==j?(un=n,r=Y(t),n=r):(en=n,n=j)):(en=n,n=j),n}function C(){var r,t,e;if(r=en,t=[],Z.test(n.charAt(en))?(e=n.charAt(en),en++):(e=j,0===ln&&i($)),e!==j)for(;e!==j;)t.push(e),Z.test(n.charAt(en))?(e=n.charAt(en),en++):(e=j,0===ln&&i($));else t=j;return t!==j&&(un=r,t=_()),r=t}function F(){var n,r,t,e;if(n=en,r=l(),r!==j){for(t=[],e=R();e!==j;)t.push(e),e=R();t!==j?(un=n,r=nn(t),n=r):(en=n,n=j)}else en=n,n=j;return n}function R(){var n,r,t;return n=en,r=E(),r!==j?(t=f(),t===j&&(t=null),t!==j?(un=n,r=rn(r),n=r):(en=n,n=j)):(en=n,n=j),n}function E(){var n,r,t;if(n=en,r=[],t=w(),t!==j)for(;t!==j;)r.push(t),t=w();else r=j;return r!==j&&(un=n,r=tn(r)),n=r}function w(){var n,r,t;return n=en,r=en,ln++,t=a(),t===j&&(t=f()),ln--,t===j?r=void 0:(en=r,r=j),r!==j?(t=y(),t!==j?(un=n,r=P(t),n=r):(en=n,n=j)):(en=n,n=j),n}var S,b=arguments.length>1?arguments[1]:{},j={},k={Start:c},T=c,B=function(n){return n},I=">",U={type:"literal",value:">",description:'">"'},q=":",z={type:"literal",value:":",description:'":"'},D=",",G={type:"literal",value:",",description:'","'},H="#",J={type:"literal",value:"#",description:'"#"'},K="\\",L={type:"literal",value:"\\",description:'"\\\\"'},M=function(n){return n},N=function(n,r,t){return{label:n.trim(),position:r,modifiers:t||[]}},O=function(n){return n.join("")},P=function(n){return n},Q={type:"any",description:"any character"},V=/^[ \t\r\n]/,W={type:"class",value:"[ \\t\\r\\n]",description:"[ \\t\\r\\n]"},X=function(n){return n},Y=function(n){return n},Z=/^[0-9]/,$={type:"class",value:"[0-9]",description:"[0-9]"},_=function(){return parseInt(t(),10)},nn=function(n){return n},rn=function(n){return n.trim()},tn=function(n){return n.join("")},en=0,un=0,on=[{line:1,column:1,seenCR:!1}],cn=0,an=[],ln=0;if("startRule"in b){if(!(b.startRule in k))throw new Error("Can't start parsing from rule \""+b.startRule+'".');T=k[b.startRule]}if(S=T(),S!==j&&en===n.length)return S;throw S!==j&&en<n.length&&i({type:"end",description:"end of input"}),o(null,an,cn<n.length?n.charAt(cn):null,cn<n.length?u(cn,cn+1):u(cn,cn))}return n(r,Error),{SyntaxError:r,parse:t}}();
},{}],16:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(r,t){if(null==t)return r;if(0>=t)throw new Error("Position starts at 1");if(r.length<t)throw new Error("Position "+t+" out of range");var e=t-1;return[r[e]]};
},{}],17:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function mergeOptions(e,t){var i={};for(var r in e)i[r]=e[r];for(var r in t)i[r]=t[r];return i}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),_nthFilter=require("../position-filters/nth-filter"),_nthFilter2=_interopRequireDefault(_nthFilter),_visible=require("../modifiers/visible"),_visible2=_interopRequireDefault(_visible),DiscoverParentContainer=function(){function e(t){_classCallCheck(this,e),this.findStrategy=t.findStrategy,this.modifiers=t.modifiers||{},this.modifiers=mergeOptions(this.modifiers,_visible2["default"]),this.customLabels={}}return _createClass(e,[{key:"search",value:function(e,t,i,r){var n=this;i=i||0;for(var o=e[i],u=[],l=t;l&&0==u.length;)u=this.findStrategy(o.label,l,r),l=l.parentNode;u=this._limitToScope(u,t),u=this._limitToNextSibling(u,t),u=Object.keys(this.modifiers).reduce(function(e,t){var i=n.modifiers[t];return"undefined"!=typeof i&&i.implicit&&0==Object.keys(n.modifiers).filter(function(e){return n.modifiers[e].override==t}).length?i.filter(e):e},u),u=o.modifiers.reduce(function(e,t){var i=n.modifiers[t];return"undefined"!=typeof i?0==Object.keys(n.modifiers).filter(function(e){return n.modifiers[e].override==t}).length?i.filter(e):e:void 0},u);var s=(0,_nthFilter2["default"])(u,o.position);if(this._lastItem(e,i))return s;for(var f=[],a=0;a<s.length;a++){var c=s[a],d=this.search(e,c,i+1,r);f=f.concat(d)}return this._unique(f)}},{key:"_lastItem",value:function(e,t){return t+1===e.length}},{key:"_limitToScope",value:function(e,t){for(var i=!1,r=[],n=0;n<e.length;++n)this._isDescendant(e[n],t)&&(i=!0,r.push(e[n]));return i?r:e}},{key:"_limitToNextSibling",value:function(e,t){var i=e.filter(function(e){return t&&t.nextElementSibling==e});return 0==i.length?e:i}},{key:"_unique",value:function(e){return e.filter(function(t,i){return e.indexOf(t)===i})}},{key:"_isDescendant",value:function(e,t){for(var i=t.parentNode;null!=i;){if(i==e)return!0;i=i.parentNode}return!1}}]),e}();exports["default"]=DiscoverParentContainer;
},{"../modifiers/visible":14,"../position-filters/nth-filter":16}],18:[function(require,module,exports){
"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r["default"]=e,r}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function mergeOptions(e,r){var t={};for(var a in e)t[a]=e[a];for(var a in r)t[a]=r[a];return t}function GlanceSelector(e){var r={};r.customLabels=e.customLabels||{},r.modifiers=e.modifiers||{},r.containerStrategyFactory=e.containerStrategyFactory;var t=function(e){var t=Parser.parse(e),a=resolveCustomLabels(t,r.customLabels,r),o=r.containerStrategyFactory({findStrategy:_default2["default"],modifiers:r.modifiers}).search(t,document,0,a);return 1===o.length?o[0]:o};return t.addCustomLabels=function(e){r.customLabels=mergeOptions(r.customLabels,e)},t.addModifiers=function(e){r.modifiers=mergeOptions(r.modifiers,e)},t.setLogLevel=function(e){_logger2["default"].setLogLevel(e)},t}function resolveCustomLabels(e,r,t){var a={};return e.forEach(function(e){var o=r[e.label];"function"==typeof o?a[e.label]=o(GlanceSelector({containerStrategyFactory:t.containerStrategyFactory,customLabels:mergeOptions(r,a)}),e):a[e.label]=r[e.label]}),a}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Parser=void 0;var _discoverParent=require("./scope-strategies/discover-parent"),_discoverParent2=_interopRequireDefault(_discoverParent),_default=require("./find-strategies/default"),_default2=_interopRequireDefault(_default),_parser=require("./parser"),Parser=_interopRequireWildcard(_parser),_logger=require("./logger"),_logger2=_interopRequireDefault(_logger);exports.Parser=Parser,exports["default"]=GlanceSelector({containerStrategyFactory:function(e){return new _discoverParent2["default"](e)}});
},{"./find-strategies/default":5,"./logger":13,"./parser":15,"./scope-strategies/discover-parent":17}]},{},[12])


//# sourceMappingURL=bundle.js.map