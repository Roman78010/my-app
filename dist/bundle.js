(()=>{"use strict";var t={562:(t,e)=>{function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}Object.defineProperty(e,"__esModule",{value:!0}),e.btn=function(){return"button"},e.default=void 0;var n=function(){function t(e,o,r){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.width=e,this.height=o,this.count=r}return e=t,(o=[{key:"nextSlide",value:function(){console.log("Moving forward")}},{key:"prevSlide",value:function(){console.log("Moving back")}},{key:"whoAmI",value:function(){console.log(this.width,this.height,this.count)}}])&&r(e.prototype,o),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t;var e,o,n}();e.default=n}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,o),i.exports}(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}var e=function(e,o){if(e&&e.__esModule)return e;if(null===e||"object"!==t(e)&&"function"!=typeof e)return{default:e};var n=r(o);if(n&&n.has(e))return n.get(e);var i={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in e)if("default"!==f&&Object.prototype.hasOwnProperty.call(e,f)){var l=u?Object.getOwnPropertyDescriptor(e,f):null;l&&(l.get||l.set)?Object.defineProperty(i,f,l):i[f]=e[f]}return i.default=e,n&&n.set(e,i),i}(o(562));function r(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,o=new WeakMap;return(r=function(t){return t?o:e})(t)}new e.default(400,300,5).whoAmI(),console.log((0,e.btn)())})()})();