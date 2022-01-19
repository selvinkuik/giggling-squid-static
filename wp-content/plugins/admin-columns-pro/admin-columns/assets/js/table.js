!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=51)}([,function(e,t){e.exports=jQuery},function(e,t,n){var s=n(23),i=n(24),r=n(8);function o(e){if(!(this instanceof o))return new o(e);this._name=e||"nanobus",this._starListeners=[],this._listeners={}}e.exports=o,o.prototype.emit=function(e){r.ok("string"==typeof e||"symbol"==typeof e,"nanobus.emit: eventName should be type string or symbol");for(var t=[],n=1,s=arguments.length;n<s;n++)t.push(arguments[n]);var o=i(this._name+"('"+e.toString()+"')"),l=this._listeners[e];return l&&l.length>0&&this._emit(this._listeners[e],t),this._starListeners.length>0&&this._emit(this._starListeners,e,t,o.uuid),o(),this},o.prototype.on=o.prototype.addListener=function(e,t){return r.ok("string"==typeof e||"symbol"==typeof e,"nanobus.on: eventName should be type string or symbol"),r.equal(typeof t,"function","nanobus.on: listener should be type function"),"*"===e?this._starListeners.push(t):(this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)),this},o.prototype.prependListener=function(e,t){return r.ok("string"==typeof e||"symbol"==typeof e,"nanobus.prependListener: eventName should be type string or symbol"),r.equal(typeof t,"function","nanobus.prependListener: listener should be type function"),"*"===e?this._starListeners.unshift(t):(this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].unshift(t)),this},o.prototype.once=function(e,t){r.ok("string"==typeof e||"symbol"==typeof e,"nanobus.once: eventName should be type string or symbol"),r.equal(typeof t,"function","nanobus.once: listener should be type function");var n=this;return this.on(e,(function s(){t.apply(n,arguments),n.removeListener(e,s)})),this},o.prototype.prependOnceListener=function(e,t){r.ok("string"==typeof e||"symbol"==typeof e,"nanobus.prependOnceListener: eventName should be type string or symbol"),r.equal(typeof t,"function","nanobus.prependOnceListener: listener should be type function");var n=this;return this.prependListener(e,(function s(){t.apply(n,arguments),n.removeListener(e,s)})),this},o.prototype.removeListener=function(e,t){return r.ok("string"==typeof e||"symbol"==typeof e,"nanobus.removeListener: eventName should be type string or symbol"),r.equal(typeof t,"function","nanobus.removeListener: listener should be type function"),"*"===e?(this._starListeners=this._starListeners.slice(),n(this._starListeners,t)):(void 0!==this._listeners[e]&&(this._listeners[e]=this._listeners[e].slice()),n(this._listeners[e],t));function n(e,t){if(e){var n=e.indexOf(t);return-1!==n?(s(e,n,1),!0):void 0}}},o.prototype.removeAllListeners=function(e){return e?"*"===e?this._starListeners=[]:this._listeners[e]=[]:(this._starListeners=[],this._listeners={}),this},o.prototype.listeners=function(e){var t="*"!==e?this._listeners[e]:this._starListeners,n=[];if(t)for(var s=t.length,i=0;i<s;i++)n.push(t[i]);return n},o.prototype._emit=function(e,t,n,s){if(void 0!==e&&0!==e.length){void 0===n&&(n=t,t=null),t&&(n=void 0!==s?[t].concat(n,s):[t].concat(n));for(var i=e.length,r=0;r<i;r++){var o=e[r];o.apply(o,n)}}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));const s={TABLE:{READY:"Table.Ready"},SETTINGS:{FORM:{LOADED:"Settings.Form.Loaded",READY:"Settings.Form.Ready",SAVING:"Settings.Form.Saving",SAVED:"Settings.Form.Saved"},COLUMN:{INIT:"Settings.Column.Init",SWITCH:"Settings.Column.SwitchToType",REFRESHED:"Settings.Column.Refreshed"}}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));const s=e=>i.create(e);class i{constructor(e){this.element=e instanceof HTMLElement?e:document.createElement(e)}static create(e){return new i(e)}addId(e){return this.element.id=e,this}addClass(e){return this.element.classList.add(e),this}addClasses(...e){return e.forEach(e=>this.addClass(e)),this}setAttribute(e,t){return this.element.setAttribute(e,t),this}setAttributes(e){return Object.keys(e).forEach(t=>this.setAttribute(t,e[t])),this}addHtml(e){return this.element.innerHTML=e,this}append(e){return this.element.appendChild(e),this}css(e,t){return this.element.style[e]=t,this}insertAfter(e){try{this.element.parentElement.insertBefore(e,this.element.nextElementSibling)}catch(e){console.error("Not able to insert element after current node",this.element)}}insertSelfBefore(e){try{e.parentElement.insertBefore(this.element,e)}catch(e){console.error("Not able to insert element before current node",this.element)}return this}insertBefore(e){try{this.element.parentElement.insertBefore(e,this.element)}catch(e){console.error("Not able to insert element before current node",this.element)}return this}addEventListener(e,t){return this.element.addEventListener(e,t),this}addEventListeners(e,t){return e.forEach(e=>this.addEventListener(e,t)),this}}},,,function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));const s=()=>{document.querySelectorAll("[data-ac-tip]").forEach(e=>{new i(e)})};class i{constructor(e,t=""){this.element=e,this.content=t||e.dataset.acTip,this.tip=r(this.content),this.initEvents()}initEvents(){"1"!==this.element.dataset.acTooltipInit&&(this.element.dataset.acTooltipInit="1",document.body.appendChild(this.tip),this.element.addEventListener("mouseenter",()=>{const e=document.body.getBoundingClientRect(),t=this.element.getBoundingClientRect();this.tip.style.left=t.left-e.left+this.element.offsetWidth/2+"px",this.tip.style.top=t.top-e.top+this.element.offsetHeight+"px",this.tip.classList.add("hover")}),this.element.addEventListener("mouseleave",()=>{this.tip.classList.remove("hover")}))}}const r=e=>{let t=document.createElement("div");return t.classList.add("ac-tooltip"),t.innerHTML=e,t}},function(e,t){function n(e,t){if(!e)throw new Error(t||"AssertionError")}n.notEqual=function(e,t,s){n(e!=t,s)},n.notOk=function(e,t){n(!e,t)},n.equal=function(e,t,s){n(e==t,s)},n.ok=n,e.exports=n},function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));const s=(e,t)=>{if(!t.includes("?"))return null;return new URLSearchParams(t.split("?")[1]).get(e)},i=(e,t=null)=>(t||(t=new FormData),Object.keys(e).forEach(n=>{r(t,e[n],n)}),t),r=(e,t,n=null)=>{if(!t||"object"!=typeof t||t instanceof Date||t instanceof File){const s=null==t?"":t;e.append(n,s)}else Object.keys(t).forEach(s=>{r(e,t[s],n?`${n}[${s}]`:s)})}},function(e,t,n){"use strict";var s=n(7);t.a=class{constructor(){this.init()}init(){Object(s.b)()}}},function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var s=n(4);const i=(e,t)=>{t.parentNode.insertBefore(e,t.nextSibling)},r=(e,t="div")=>s.b.create(t).addHtml(e).element},,function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));class s{constructor(e){e&&(this.el=e,this.dialog=e.querySelector(".ac-modal__dialog"),this.initEvents())}getElement(){return this.el}initEvents(){let e=this;document.addEventListener("keydown",e=>{const t=e.key;this.isOpen()&&"Escape"===t&&this.close()});let t=this.el.querySelectorAll('[data-dismiss="modal"], .ac-modal__dialog__close');t.length>0&&t.forEach(t=>{t.addEventListener("click",t=>{t.preventDefault(),e.close()})}),this.el.addEventListener("click",t=>{t.target.classList.contains("ac-modal")&&e.close()})}isOpen(){return this.el.classList.contains("-active")}close(){this.onClose(),this.el.classList.remove("-active")}open(){setTimeout(()=>{this.onOpen(),this.el.removeAttribute("style"),this.el.classList.add("-active")})}destroy(){this.el.remove()}onClose(){}onOpen(){}}},,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var s=n(10);const i=n(1);class r{constructor(e){this.element=e,this.settings=this.getDefaults(),this.init(),this.setInitialized()}setInitialized(){o.add(this.element)}getDefaults(){return{width:this.element.getAttribute("data-width")?this.element.getAttribute("data-width"):250,noclick:!!this.element.getAttribute("data-noclick")&&this.element.getAttribute("data-noclick"),position:this.getPosition()}}isInitialized(){return o.isInitialized(this.element)}init(){this.isInitialized()||(i(this.element).pointer({content:this.getRelatedHTML(),position:this.settings.position,pointerWidth:this.settings.width,pointerClass:this.getPointerClass()}),this.initEvents())}getPosition(){let e={at:"left top",my:"right top",edge:"right"},t=this.element.getAttribute("data-pos"),n=this.element.getAttribute("data-pos_edge");return"right"===t&&(e={at:"right middle",my:"left middle",edge:"left"}),"right_bottom"===t&&(e={at:"right middle",my:"left bottom",edge:"none"}),"left"===t&&(e={at:"left middle",my:"right middle",edge:"right"}),n&&(e.edge=n),e}getPointerClass(){let e=["ac-wp-pointer","wp-pointer","wp-pointer-"+this.settings.position.edge];return this.settings.noclick&&e.push("noclick"),e.join(" ")}getRelatedHTML(){let e=document.getElementById(this.element.getAttribute("rel"));return e?e.innerHTML:""}initEvents(){let e=i(this.element);this.settings.noclick||e.click((function(){e.hasClass("open")?e.removeClass("open"):e.addClass("open")})),e.click((function(){e.pointer("open")})),e.mouseenter((function(){e.pointer("open"),setTimeout(()=>{e.pointer("open")},2)})),e.mouseleave((function(){setTimeout(()=>{e.hasClass("open")||0!==i(".ac-wp-pointer.hover").length||e.pointer("close")},1)})),e.on("close",()=>{setTimeout(()=>{e.hasClass("open")||e.pointer("close")})})}}class o{static isInitialized(e){return this.initElements.filter(t=>t===e).length>0}static add(e){this.initElements.push(e)}}o.initElements=[];const l=(e=null)=>{e||(e=document.querySelectorAll(".ac-pointer")),e.forEach(e=>{new r(e)}),i(".ac-wp-pointer").hover((function(){i(this).addClass("hover")}),(function(){i(this).removeClass("hover"),i(".ac-pointer").trigger("close")})).on("click",".close",(function(){i(".ac-pointer").removeClass("open")})),new s.a}},function(e,t,n){"use strict";e.exports=function(e,t,n){var s,i=e.length;if(!(t>=i||0===n)){var r=i-(n=t+n>i?i-t:n);for(s=t;s<r;++s)e[s]=e[s+n];e.length=r}}},function(e,t,n){var s,i=n(25)(),r=n(8);o.disabled=!0;try{s=window.performance,o.disabled="true"===window.localStorage.DISABLE_NANOTIMING||!s.mark}catch(e){}function o(e){if(r.equal(typeof e,"string","nanotiming: name should be type string"),o.disabled)return l;var t=(1e4*s.now()).toFixed()%Number.MAX_SAFE_INTEGER,n="start-"+t+"-"+e;function a(r){var o="end-"+t+"-"+e;s.mark(o),i.push((function(){var i=null;try{var l=e+" ["+t+"]";s.measure(l,n,o),s.clearMarks(n),s.clearMarks(o)}catch(e){i=e}r&&r(i,e)}))}return s.mark(n),a.uuid=t,a}function l(e){e&&i.push((function(){e(new Error("nanotiming: performance API unavailable"))}))}e.exports=o},function(e,t,n){var s=n(8),i="undefined"!=typeof window;function r(e){this.hasWindow=e,this.hasIdle=this.hasWindow&&window.requestIdleCallback,this.method=this.hasIdle?window.requestIdleCallback.bind(window):this.setTimeout,this.scheduled=!1,this.queue=[]}r.prototype.push=function(e){s.equal(typeof e,"function","nanoscheduler.push: cb should be type function"),this.queue.push(e),this.schedule()},r.prototype.schedule=function(){if(!this.scheduled){this.scheduled=!0;var e=this;this.method((function(t){for(;e.queue.length&&t.timeRemaining()>0;)e.queue.shift()(t);e.scheduled=!1,e.queue.length&&e.schedule()}))}},r.prototype.setTimeout=function(e){setTimeout(e,0,{timeRemaining:function(){return 1}})},e.exports=function(){var e;return i?(window._nanoScheduler||(window._nanoScheduler=new r(!0)),e=window._nanoScheduler):e=new r,e}},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var s=n(13);class i{constructor(){this.modals={},this.number=0,this.defaults={modal:s.a},this.initGlobalEvents()}register(e,t=""){return t||(t="m"+this.number),this.modals[t]=e,this.number++,e}get(e){return this.modals.hasOwnProperty(e)?this.modals[e]:null}open(e){this.get(e)&&this.get(e).open()}close(e){this.get(e)&&this.get(e).close()}closeAll(){for(let e in this.modals)this.close(e)}initGlobalEvents(){document.addEventListener("click",e=>{let t=e.target;t.dataset.acModal&&(e.preventDefault(),this.open(t.dataset.acModal))})}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var s=n(2),i=n.n(s),r=n(4);class o{constructor(){this.services={},this.events=new i.a,this.$=r.a}registerService(e,t){return this.services[e]=t,this}getService(e){return this.hasService(e)?this.services[e]:null}hasService(e){return this.services.hasOwnProperty(e)}addListener(e,t){this.events.addListener(e,t)}emitEvent(e,t){this.events.emit(e,t)}}const l=()=>(window.AC_SERVICES||(window.AC_SERVICES=new o),window.AC_SERVICES)},,,,,,function(e,t,n){"use strict";n.r(t);var s=n(11),i=n(2);class r{constructor(e){this.container=e,this.events=i(),this.init()}init(){this.container.addEventListener("update",()=>{this.refresh()});let e=document.querySelectorAll(".tablenav.top .actions");e&&e.length&&(Object(s.b)(this.container,e[e.length-1]),this.container.classList.add("-init"),this.container.dispatchEvent(new CustomEvent("update")))}refresh(){this.container.querySelectorAll(".ac-table-actions-buttons > a").forEach(e=>{e.classList.remove("last")});let e=[].slice.call(this.container.querySelectorAll(".ac-table-actions-buttons > a"),0);e.reverse();for(var t=0;t<e.length;t++)if(e[t].offsetParent){e[t].classList.add("last");break}}}class o{constructor(){this.cells={}}add(e,t){this.cells.hasOwnProperty(e)||(this.cells[e]={}),this.cells[e][t.getName()]=t}getByID(e){let t=[];if(!this.cells.hasOwnProperty(e.toString()))return t;let n=this.cells[e.toString()];return Object.keys(n).forEach(e=>t.push(n[e])),t}getAll(){let e=[];return Object.keys(this.cells).forEach(t=>{let n=this.cells[t];Object.keys(n).forEach(t=>e.push(n[t]))}),e}getByName(e){let t=[];return Object.keys(this.cells).forEach(n=>{let s=this.cells[n];Object.keys(s).forEach(n=>{e===n&&t.push(s[n])})}),t}get(e,t){return this.cells.hasOwnProperty(e.toString())?this.cells[e][t]:null}}class l{constructor(e){this.table=e,this.columns={},this.init()}init(){let e=this,t=this.table.querySelector("thead").querySelectorAll("th");for(let n=0;n<t.length;n++){let s=t[n].id;e.columns[t[n].id]=new a(s,AC.column_types[s],this.sanitizeLabel(t[n]))}}getColumns(){return this.columns}getColumnsMap(){let e=new Map,t=this.getColumns();return Object.keys(t).forEach(n=>{e.set(n,t[n])}),e}getColumnNames(){return Object.keys(this.columns)}get(e){return this.columns.hasOwnProperty(e)?this.columns[e]:null}sanitizeLabel(e){let t=e.querySelector("a"),n=e.innerHTML;if(t){let e=t.getElementsByTagName("span");e.length>0&&(n=e[0].innerHTML)}return n}}class a{constructor(e,t,n){this.name=e,this.type=t,this.label=n,this.services={}}setService(e,t){this.services[e]=t}getService(e){return this.hasService(e)?this.services[e]:null}hasService(e){return this.services.hasOwnProperty(e)}}var c=n(2),h=n.n(c);class u{constructor(e,t,n){this.object_id=e,this.column_name=t,this.original_value=n.innerHTML,this.el=n,this.services={},this.events=new h.a}getOriginalValue(){return this.original_value}getObjectID(){return this.object_id}getName(){return this.column_name}getElement(){return this.el}setElement(e){this.el=e}getRow(){return this.el.parentElement}getSettings(){return AC_SERVICES.getService("Table").Columns.get(this.getName())}hasChanged(e){return this.original_value!==e}setValue(e){let t=this.el.querySelector(".row-actions");return this.original_value=e,this.el.innerHTML=e,t&&this.el.append(t),this.original_value=e,this.events.emit("setValue",this),this}setService(e,t){this.services[e]=t}getService(e){return this.hasService(e)?this.services[e]:null}hasService(e){return this.services.hasOwnProperty(e)}}class d{constructor(e){this.Table=e}getIDs(){let e=[],t=this.Table.getElement().querySelectorAll("tbody th.check-column input[type=checkbox]:checked");if(0===t.length)return e;for(let n=0;n<t.length;n++)e.push(parseInt(t[n].value));return e}getSelectedCells(e){let t=this.getIDs();if(0===t.length)return null;let n=[];return t.forEach(t=>{let s=this.Table.Cells.get(t,e);s&&n.push(s)}),n}getCount(){return this.getIDs().length}isAllSelected(){return!!this.Table.getElement().querySelector("thead #cb input:checked")}}var m=n(9);const p=e=>{if(e.classList.contains("no-items"))return 0;let t=g(e.id);if(!t){let n=e.querySelector(".check-column input[type=checkbox]");n&&(t=g(n.id))}if(!t){let n=e.parentElement.querySelector(".edit a");if(n){let e=n.getAttribute("href");e&&(t=parseInt(Object(m.a)("id",e)))}}return e.dataset.id=t.toString(),t},g=e=>{let t=e.split(/[_,\-]+/);return parseInt(t[t.length-1])};var f=n(3);class v{constructor(){this.services={}}setService(e,t){this.services[e]=t}getService(e){return this.hasService(e)?this.services[e]:null}hasService(e){return this.services.hasOwnProperty(e)}}class b{constructor(e,t){this.el=e,this.AcServices=t,this.Services=new v,this.Columns=new l(e),this.Cells=new o,this.Actions=document.getElementById("ac-table-actions")?new r(document.getElementById("ac-table-actions")):null,this.Selection=new d(this)}getElement(){return this.el}getIdsFromTable(){let e=[];return this.el.getElementsByTagName("tbody")[0].querySelectorAll("tr").forEach(t=>{e.push(p(t))}),e}init(){return this.initTable(),this.addCellClasses(),document.dispatchEvent(new CustomEvent("AC_Table_Ready",{detail:{table:this}})),this.AcServices.emitEvent(f.a.TABLE.READY,{table:this}),this}addCellClasses(){this.Columns.getColumnNames().forEach(e=>{let t=this.Columns.get(e).type;this.Cells.getByName(e).forEach(e=>{e.getElement().classList.add(t)})})}initTable(){this.el.getElementsByTagName("tbody")[0].querySelectorAll("tr").forEach(e=>{this.updateRow(e)})}updateRow(e){let t=p(e);e.dataset.id=t.toString(),this.setCellsForRow(e)}setCellsForRow(e){let t=p(e);this.Columns.getColumnNames().forEach(n=>{let s=n.replace(/\./g,"\\."),i=e.querySelector("td.column-"+s);if(i){let e=new u(t,n,i);this.Cells.add(t,e)}})}}var y=n(10),E=n(4);class S{constructor(e){this.columns=e,e.getColumnNames().forEach(t=>{let n=e.get(t),s=S.getInputByName(n.name);s&&0===s.parentElement.textContent.length&&s.parentElement.appendChild(E.b.create("span").addHtml(n.label).element)})}static getInputByName(e){let t=document.querySelector(`input[name='${e}-hide']`);return t||!1}}const w=n(1);class L{constructor(e){this.element=e,this.initEvents(),this.contentBox=this.element.parentElement.querySelector(".ac-toggle-box-contents"),this.contentBox||this.createContenBox()}isAjax(){return 1===parseInt(this.element.dataset.ajaxPopulate)}isInited(){return this.element.dataset.toggleBoxInit}createContenBox(){let e=document.createElement("div");return e.classList.add("ac-toggle-box-contents"),Object(s.b)(e,this.element),this.contentBox=e,this.contentBox}initEvents(){this.isInited()||(this.element.addEventListener("click",e=>{e.preventDefault(),this.isAjax()&&!this.hasContent()&&this.manageAjaxValue(),this.toggleContentBox()}),this.element.dataset.toggleBoxInit="true")}hasContent(){return this.getContentBox().innerHTML.length>0}setContent(e){this.getContentBox().innerHTML=e}getContentBox(){return this.contentBox?this.contentBox:this.createContenBox()}setLabel(e){let t=this.element.dataset.label;e&&this.element.dataset.labelClose&&(t=this.element.dataset.labelClose),this.element.innerHTML=t+'<span class="spinner"></span>'}toggleContentBox(){this.getContentBox().classList.contains("-open")?(this.getContentBox().classList.remove("-open"),this.setLabel(!1)):(this.getContentBox().classList.add("-open"),this.setLabel(!0))}manageAjaxValue(){this.element.classList.add("loading"),this.retrieveAjaxValue().done(e=>{this.setContent(e),w(this.element.parentElement).trigger("ajax_column_value_ready"),AC_SERVICES.getService("Tooltips").init()}).always(()=>{this.element.classList.remove("loading")})}retrieveAjaxValue(){return w.ajax({url:ajaxurl,method:"POST",data:{action:"ac_get_column_value",list_screen:AC.list_screen,layout:AC.layout,column:this.element.dataset.column,pk:this.element.dataset.itemId,_ajax_nonce:AC.ajax_nonce}})}}var C=n(1),_=n.n(C);const A=()=>{document.querySelectorAll(".ac-show-more").forEach(e=>{new T(e)})};class T{constructor(e){this.element=e,this.initEvents()}initEvents(){this.isInited()||(this.getToggler()&&this.getToggler().addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),this.toggle()}),this.element.dataset.showMoreInit="true")}getToggler(){return this.element.querySelector(".ac-show-more__toggle")}isInited(){return"true"===this.element.dataset.showMoreInit}toggle(){this.element.classList.contains("-on")?this.hide():this.show()}show(){this.element.classList.add("-on"),this.getToggler().innerHTML=this.getToggler().dataset.less}hide(){this.element.classList.remove("-on"),this.getToggler().innerHTML=this.getToggler().dataset.more}}var x=n(7);var I=n(45),O=n(44),k=n(22);let q=Object(I.a)();q.registerService("Modals",new O.a),document.addEventListener("DOMContentLoaded",()=>{let e=(e=>{let t=document.querySelector(e);return t?"TABLE"===t.tagName?t:"TBODY"===t.tagName?t.closest("table"):t.querySelector("table.wp-list-table")?t.querySelector("table.wp-list-table"):null:null})(AC.table_id);if(Object(k.a)(),e){const t=new b(e,q).init();q.registerService("Table",t),q.registerService("ScreenOptionsColumns",new S(t.Columns))}q.registerService("Tooltips",new y.a),document.querySelectorAll(".ac-toggle-box-link").forEach(e=>{new L(e)}),_()(".wp-list-table").on("updated","tr",(function(){q.getService("Table").addCellClasses(),A()}))}),q.addListener(f.a.TABLE.READY,e=>{A(),document.querySelectorAll(".cpac_use_icons").forEach(e=>{e.parentElement.querySelectorAll(".row-actions a").forEach(e=>{new x.a(e,e.innerText)})}),new MutationObserver(e=>{e.forEach(e=>{e.addedNodes.forEach(e=>{"TR"===e.tagName&&e.classList.contains("iedit")&&_()(e).trigger("updated",{id:p(e),row:e})})})}).observe(e.table.getElement(),{childList:!0,subtree:!0}),e.table.Cells.getAll().forEach(e=>{e.events.addListener("setValue",()=>{A()})})})}]);