(()=>{"use strict";class e{constructor(e){this.element=e,this.disable(),this.initEvents()}initEvents(){let e=this.element.querySelector("input[type=file]");e&&e.addEventListener("change",(()=>{e.value?this.enable():this.disable()}))}disable(){this.element.querySelectorAll('input[type="submit"]').forEach((e=>e.setAttribute("disabled","1")))}enable(){this.element.querySelectorAll('input[type="submit"]').forEach((e=>e.removeAttribute("disabled")))}}class t{constructor(e){this.element=e,this.disable(),this.initEvents(),this.checkState()}initEvents(){this.element.querySelectorAll("input[type=checkbox]").forEach((e=>{e.addEventListener("change",(()=>this.checkState()))}))}disable(){this.element.querySelectorAll("button[data-export]").forEach((e=>e.setAttribute("disabled","1")))}enable(){this.element.querySelectorAll("button[data-export]").forEach((e=>e.removeAttribute("disabled")))}checkState(){let e=0;this.element.querySelectorAll('input[name="list_screen_ids[]"]').forEach((t=>{t.checked&&e++})),e>0?this.enable():this.disable()}}document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".ac-tool-section.-import").forEach((t=>new e(t))),document.querySelectorAll(".ac-tool-section.-export").forEach((e=>new t(e)))}))})();