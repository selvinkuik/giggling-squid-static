(()=>{var e={968:e=>{function t(e,t){if(!e)throw new Error(t||"AssertionError")}t.notEqual=function(e,n,i){t(e!=n,i)},t.notOk=function(e,n){t(!e,n)},t.equal=function(e,n,i){t(e==n,i)},t.ok=t,e.exports=t},821:(e,t,n)=>{var i=n(250),s=n(715),r=n(968);function o(e){if(!(this instanceof o))return new o(e);this._name=e||"nanobus",this._starListeners=[],this._listeners={}}e.exports=o,o.prototype.emit=function(e){r.ok("string"==typeof e||"symbol"==typeof e,"nanobus.emit: eventName should be type string or symbol");for(var t=[],n=1,i=arguments.length;n<i;n++)t.push(arguments[n]);var o=s(this._name+"('"+e.toString()+"')"),u=this._listeners[e];return u&&u.length>0&&this._emit(this._listeners[e],t),this._starListeners.length>0&&this._emit(this._starListeners,e,t,o.uuid),o(),this},o.prototype.on=o.prototype.addListener=function(e,t){return r.ok("string"==typeof e||"symbol"==typeof e,"nanobus.on: eventName should be type string or symbol"),r.equal(typeof t,"function","nanobus.on: listener should be type function"),"*"===e?this._starListeners.push(t):(this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)),this},o.prototype.prependListener=function(e,t){return r.ok("string"==typeof e||"symbol"==typeof e,"nanobus.prependListener: eventName should be type string or symbol"),r.equal(typeof t,"function","nanobus.prependListener: listener should be type function"),"*"===e?this._starListeners.unshift(t):(this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].unshift(t)),this},o.prototype.once=function(e,t){r.ok("string"==typeof e||"symbol"==typeof e,"nanobus.once: eventName should be type string or symbol"),r.equal(typeof t,"function","nanobus.once: listener should be type function");var n=this;return this.on(e,(function i(){t.apply(n,arguments),n.removeListener(e,i)})),this},o.prototype.prependOnceListener=function(e,t){r.ok("string"==typeof e||"symbol"==typeof e,"nanobus.prependOnceListener: eventName should be type string or symbol"),r.equal(typeof t,"function","nanobus.prependOnceListener: listener should be type function");var n=this;return this.prependListener(e,(function i(){t.apply(n,arguments),n.removeListener(e,i)})),this},o.prototype.removeListener=function(e,t){return r.ok("string"==typeof e||"symbol"==typeof e,"nanobus.removeListener: eventName should be type string or symbol"),r.equal(typeof t,"function","nanobus.removeListener: listener should be type function"),"*"===e?(this._starListeners=this._starListeners.slice(),n(this._starListeners,t)):(void 0!==this._listeners[e]&&(this._listeners[e]=this._listeners[e].slice()),n(this._listeners[e],t));function n(e,t){if(e){var n=e.indexOf(t);return-1!==n?(i(e,n,1),!0):void 0}}},o.prototype.removeAllListeners=function(e){return e?"*"===e?this._starListeners=[]:this._listeners[e]=[]:(this._starListeners=[],this._listeners={}),this},o.prototype.listeners=function(e){var t="*"!==e?this._listeners[e]:this._starListeners,n=[];if(t)for(var i=t.length,s=0;s<i;s++)n.push(t[s]);return n},o.prototype._emit=function(e,t,n,i){if(void 0!==e&&0!==e.length){void 0===n&&(n=t,t=null),t&&(n=void 0!==i?[t].concat(n,i):[t].concat(n));for(var s=e.length,r=0;r<s;r++){var o=e[r];o.apply(o,n)}}}},706:(e,t,n)=>{var i=n(968),s="undefined"!=typeof window;function r(e){this.hasWindow=e,this.hasIdle=this.hasWindow&&window.requestIdleCallback,this.method=this.hasIdle?window.requestIdleCallback.bind(window):this.setTimeout,this.scheduled=!1,this.queue=[]}r.prototype.push=function(e){i.equal(typeof e,"function","nanoscheduler.push: cb should be type function"),this.queue.push(e),this.schedule()},r.prototype.schedule=function(){if(!this.scheduled){this.scheduled=!0;var e=this;this.method((function(t){for(;e.queue.length&&t.timeRemaining()>0;)e.queue.shift()(t);e.scheduled=!1,e.queue.length&&e.schedule()}))}},r.prototype.setTimeout=function(e){setTimeout(e,0,{timeRemaining:function(){return 1}})},e.exports=function(){var e;return s?(window._nanoScheduler||(window._nanoScheduler=new r(!0)),e=window._nanoScheduler):e=new r,e}},715:(e,t,n)=>{var i,s=n(706)(),r=n(968);o.disabled=!0;try{i=window.performance,o.disabled="true"===window.localStorage.DISABLE_NANOTIMING||!i.mark}catch(e){}function o(e){if(r.equal(typeof e,"string","nanotiming: name should be type string"),o.disabled)return u;var t=(1e4*i.now()).toFixed()%Number.MAX_SAFE_INTEGER,n="start-"+t+"-"+e;function a(r){var o="end-"+t+"-"+e;i.mark(o),s.push((function(){var s=null;try{var u=e+" ["+t+"]";i.measure(u,n,o),i.clearMarks(n),i.clearMarks(o)}catch(e){s=e}r&&r(s,e)}))}return i.mark(n),a.uuid=t,a}function u(e){e&&s.push((function(){e(new Error("nanotiming: performance API unavailable"))}))}e.exports=o},250:e=>{"use strict";e.exports=function(e,t,n){var i,s=e.length;if(!(t>=s||0===n)){var r=s-(n=t+n>s?s-t:n);for(i=t;i<r;++i)e[i]=e[i+n];e.length=r}}},513:e=>{function t(e,t){if(!e)throw new Error(t||"AssertionError")}t.notEqual=function(e,n,i){t(e!=n,i)},t.notOk=function(e,n){t(!e,n)},t.equal=function(e,n,i){t(e==n,i)},t.ok=t,e.exports=t},891:(e,t,n)=>{var i=n(212),s=n(595),r=n(513);function o(e){if(!(this instanceof o))return new o(e);this._name=e||"nanobus",this._starListeners=[],this._listeners={}}e.exports=o,o.prototype.emit=function(e){r.ok("string"==typeof e||"symbol"==typeof e,"nanobus.emit: eventName should be type string or symbol");for(var t=[],n=1,i=arguments.length;n<i;n++)t.push(arguments[n]);var o=s(this._name+"('"+e.toString()+"')"),u=this._listeners[e];return u&&u.length>0&&this._emit(this._listeners[e],t),this._starListeners.length>0&&this._emit(this._starListeners,e,t,o.uuid),o(),this},o.prototype.on=o.prototype.addListener=function(e,t){return r.ok("string"==typeof e||"symbol"==typeof e,"nanobus.on: eventName should be type string or symbol"),r.equal(typeof t,"function","nanobus.on: listener should be type function"),"*"===e?this._starListeners.push(t):(this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)),this},o.prototype.prependListener=function(e,t){return r.ok("string"==typeof e||"symbol"==typeof e,"nanobus.prependListener: eventName should be type string or symbol"),r.equal(typeof t,"function","nanobus.prependListener: listener should be type function"),"*"===e?this._starListeners.unshift(t):(this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].unshift(t)),this},o.prototype.once=function(e,t){r.ok("string"==typeof e||"symbol"==typeof e,"nanobus.once: eventName should be type string or symbol"),r.equal(typeof t,"function","nanobus.once: listener should be type function");var n=this;return this.on(e,(function i(){t.apply(n,arguments),n.removeListener(e,i)})),this},o.prototype.prependOnceListener=function(e,t){r.ok("string"==typeof e||"symbol"==typeof e,"nanobus.prependOnceListener: eventName should be type string or symbol"),r.equal(typeof t,"function","nanobus.prependOnceListener: listener should be type function");var n=this;return this.prependListener(e,(function i(){t.apply(n,arguments),n.removeListener(e,i)})),this},o.prototype.removeListener=function(e,t){return r.ok("string"==typeof e||"symbol"==typeof e,"nanobus.removeListener: eventName should be type string or symbol"),r.equal(typeof t,"function","nanobus.removeListener: listener should be type function"),"*"===e?(this._starListeners=this._starListeners.slice(),n(this._starListeners,t)):(void 0!==this._listeners[e]&&(this._listeners[e]=this._listeners[e].slice()),n(this._listeners[e],t));function n(e,t){if(e){var n=e.indexOf(t);return-1!==n?(i(e,n,1),!0):void 0}}},o.prototype.removeAllListeners=function(e){return e?"*"===e?this._starListeners=[]:this._listeners[e]=[]:(this._starListeners=[],this._listeners={}),this},o.prototype.listeners=function(e){var t="*"!==e?this._listeners[e]:this._starListeners,n=[];if(t)for(var i=t.length,s=0;s<i;s++)n.push(t[s]);return n},o.prototype._emit=function(e,t,n,i){if(void 0!==e&&0!==e.length){void 0===n&&(n=t,t=null),t&&(n=void 0!==i?[t].concat(n,i):[t].concat(n));for(var s=e.length,r=0;r<s;r++){var o=e[r];o.apply(o,n)}}}},746:(e,t,n)=>{var i=n(513),s="undefined"!=typeof window;function r(e){this.hasWindow=e,this.hasIdle=this.hasWindow&&window.requestIdleCallback,this.method=this.hasIdle?window.requestIdleCallback.bind(window):this.setTimeout,this.scheduled=!1,this.queue=[]}r.prototype.push=function(e){i.equal(typeof e,"function","nanoscheduler.push: cb should be type function"),this.queue.push(e),this.schedule()},r.prototype.schedule=function(){if(!this.scheduled){this.scheduled=!0;var e=this;this.method((function(t){for(;e.queue.length&&t.timeRemaining()>0;)e.queue.shift()(t);e.scheduled=!1,e.queue.length&&e.schedule()}))}},r.prototype.setTimeout=function(e){setTimeout(e,0,{timeRemaining:function(){return 1}})},e.exports=function(){var e;return s?(window._nanoScheduler||(window._nanoScheduler=new r(!0)),e=window._nanoScheduler):e=new r,e}},595:(e,t,n)=>{var i,s=n(746)(),r=n(513);o.disabled=!0;try{i=window.performance,o.disabled="true"===window.localStorage.DISABLE_NANOTIMING||!i.mark}catch(e){}function o(e){if(r.equal(typeof e,"string","nanotiming: name should be type string"),o.disabled)return u;var t=(1e4*i.now()).toFixed()%Number.MAX_SAFE_INTEGER,n="start-"+t+"-"+e;function a(r){var o="end-"+t+"-"+e;i.mark(o),s.push((function(){var s=null;try{var u=e+" ["+t+"]";i.measure(u,n,o),i.clearMarks(n),i.clearMarks(o)}catch(e){s=e}r&&r(s,e)}))}return i.mark(n),a.uuid=t,a}function u(e){e&&s.push((function(){e(new Error("nanotiming: performance API unavailable"))}))}e.exports=o},212:e=>{"use strict";e.exports=function(e,t,n){var i,s=e.length;if(!(t>=s||0===n)){var r=s-(n=t+n>s?s-t:n);for(i=t;i<r;++i)e[i]=e[i+n];e.length=r}}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(891),t=n.n(e);const i=function(){function e(e){this.element=e,this.state=!1,this.events=new(t()),this.init()}return e.prototype.init=function(){var e=this;this.determinScreenOptionState(),this.element.addEventListener("click",(function(){e.determinScreenOptionState(),e.persist()}))},e.prototype.isEnabled=function(){return this.element.checked},e.prototype.determinScreenOptionState=function(){this.isEnabled()?this.enable():this.disable()},e.prototype.enable=function(){this.state=!0,this.events.emit("changeState",!0)},e.prototype.disable=function(){this.state=!1,this.events.emit("changeState",!1)},e.prototype.persist=function(){jQuery.post(ajaxurl,{action:"acp_new_inline_show_button",value:this.state,layout:AC.layout,list_screen:AC.list_screen,_ajax_nonce:AC.ajax_nonce})},e}(),s=function(){function e(){this.element=this.createElement(),this.state=!0,this.events=new(t()),this.placeElement(),this.initEvents()}return e.prototype.placeElement=function(){var e=this,t=document.querySelector(".page-title-action");t&&setTimeout((function(){t.insertAdjacentElement("afterend",e.element)}),200)},e.prototype.initEvents=function(){var e=this;this.element.addEventListener("click",(function(t){t.preventDefault(),e.state&&e.events.emit("click")}))},e.prototype.getElement=function(){return this.element},e.prototype.hide=function(){this.getElement().style.display="none"},e.prototype.show=function(){this.getElement().style.display="inline-block"},e.prototype.enable=function(){this.show(),this.state=!0},e.prototype.disable=function(){this.hide(),this.state=!1},e.prototype.createElement=function(){var e=document.createElement("a");return e.classList.add("ac-button"),e.classList.add("ac-add-new-inline"),e.classList.add("add-new-h2"),e.id="ac-button-add-new-inline",e.innerText=ACP_ADD_NEW_INLINE.i18n.add_new,e},e}();var r=n(821),o=n.n(r),u=function(e){return a.create(e)},a=function(){function e(e){this.element=e instanceof HTMLElement?e:document.createElement(e)}return e.create=function(t){return new e(t)},e.prototype.addId=function(e){return this.element.id=e,this},e.prototype.addClass=function(e){return this.element.classList.add(e),this},e.prototype.addClasses=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return t.forEach((function(t){return e.addClass(t)})),this},e.prototype.setAttribute=function(e,t){return this.element.setAttribute(e,t),this},e.prototype.setAttributes=function(e){var t=this;return Object.keys(e).forEach((function(n){return t.setAttribute(n,e[n])})),this},e.prototype.addHtml=function(e){return this.element.innerHTML=e,this},e.prototype.append=function(e){return this.element.appendChild(e),this},e.prototype.appendSelfTo=function(e){return e.append(this.element),this},e.prototype.css=function(e,t){return this.element.style[e]=t,this},e.prototype.insertAfter=function(e){try{this.element.parentElement.insertBefore(e,this.element.nextElementSibling)}catch(e){console.error("Not able to insert element after current node",this.element)}},e.prototype.insertSelfBefore=function(e){try{e.parentElement.insertBefore(this.element,e)}catch(e){console.error("Not able to insert element before current node",this.element)}return this},e.prototype.insertBefore=function(e){try{this.element.parentElement.insertBefore(e,this.element)}catch(e){console.error("Not able to insert element before current node",this.element)}return this},e.prototype.addEventListener=function(e,t){return this.element.addEventListener(e,t),this},e.prototype.addEventListeners=function(e,t){var n=this;return e.forEach((function(e){return n.addEventListener(e,t)})),this},e}();const h=function(){function e(){this.services={},this.events=new(o()),this.$=u}return e.prototype.registerService=function(e,t){return this.services[e]=t,this},e.prototype.getService=function(e){return this.hasService(e)?this.services[e]:null},e.prototype.hasService=function(e){return this.services.hasOwnProperty(e)},e.prototype.addListener=function(e,t){this.events.addListener(e,t)},e.prototype.emitEvent=function(e,t){this.events.emit(e,t)},e}();var l=function(){return window.AC_SERVICES||(window.AC_SERVICES=new h),window.AC_SERVICES},c=l();const p=function(){function e(){this.loading=!1,this.createButton=new s,this.screenOption=null;var e=document.getElementById("acp_new_inline_show_button-1");e&&(this.screenOption=new i(e)),this.initEvents()}return e.prototype.initEvents=function(){var e=this;this.screenOption&&!this.screenOption.isEnabled()&&this.createButton.disable(),this.screenOption&&this.screenOption.events.addListener("changeState",(function(t){t?e.createButton.enable():e.createButton.disable()})),this.createButton.events.addListener("click",(function(){e.addNew()}))},e.prototype.addNew=function(){var e=this;this.loading||(this.loading=!0,jQuery.post(window.location.href,{ac_action:"acp_add_new_inline",_ajax_nonce:AC.ajax_nonce,list_screen:AC.list_screen,layout:AC.layout}).done((function(e){if(e&&e.success&&e.data.hasOwnProperty("row")){var t=jQuery(e.data.row);jQuery("table.wp-list-table tbody").prepend(t),t.hide(),t.fadeIn(),c.getService("Table").updateRow(t[0]),c.hasService("Editing")&&c.getService("Editing").hasService("InlineEdit")&&c.getService("Editing").getService("InlineEdit").initRow(e.data.id)}})).always((function(){e.loading=!1})))},e}();var d=l();document.addEventListener("DOMContentLoaded",(function(){d.registerService("AddNewInline",new p)}))})()})();