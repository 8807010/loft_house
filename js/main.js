(()=>{var e={732:()=>{const e=document.querySelector(".burger__btn"),o=document.querySelector(".burger__icon"),d=document.querySelector(".header__top-row");e.onclick=function(){o.classList.toggle("nav-icon--active"),d.classList.toggle("header__top-row--mobile"),document.body.classList.toggle("no-scroll")}},627:()=>{ymaps.ready((function(){var e=new ymaps.Map("map",{center:[59.943543,30.338928],zoom:16}),o=new ymaps.Placemark([59.943543,30.338928],{balloonContent:'\n    <div class="balloon">\n      <div class="balloon__address">Наб. реки Фонтанки 10-15</div>\n      <div class="balloon__contacts">\n        <a href="tel:+78121234567">+8 (812) 123-45-67</a>\n      </div>\n    </div>\n  '},{iconLayout:"default#image",iconImageHref:"./img/map/location-pin.svg",iconImageSize:[40,40],iconImageOffset:[-20,-40]});e.controls.remove("geolocationControl"),e.controls.remove("searchControl"),e.controls.remove("trafficControl"),e.controls.remove("typeSelector"),e.controls.remove("rulerControl"),e.behaviors.disable(["scrollZoom"]),e.geoObjects.add(o),o.balloon.open()}))},598:()=>{function e(e){var o=!0,d=!1,c=null,t={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function n(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function i(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function a(e){o=!1}function s(){document.addEventListener("mousemove",r),document.addEventListener("mousedown",r),document.addEventListener("mouseup",r),document.addEventListener("pointermove",r),document.addEventListener("pointerdown",r),document.addEventListener("pointerup",r),document.addEventListener("touchmove",r),document.addEventListener("touchstart",r),document.addEventListener("touchend",r)}function r(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(o=!1,document.removeEventListener("mousemove",r),document.removeEventListener("mousedown",r),document.removeEventListener("mouseup",r),document.removeEventListener("pointermove",r),document.removeEventListener("pointerdown",r),document.removeEventListener("pointerup",r),document.removeEventListener("touchmove",r),document.removeEventListener("touchstart",r),document.removeEventListener("touchend",r))}document.addEventListener("keydown",(function(d){d.metaKey||d.altKey||d.ctrlKey||(n(e.activeElement)&&i(e.activeElement),o=!0)}),!0),document.addEventListener("mousedown",a,!0),document.addEventListener("pointerdown",a,!0),document.addEventListener("touchstart",a,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(d&&(o=!0),s())}),!0),s(),e.addEventListener("focus",(function(e){var d,c,a;n(e.target)&&(o||(c=(d=e.target).type,"INPUT"===(a=d.tagName)&&t[c]&&!d.readOnly||"TEXTAREA"===a&&!d.readOnly||d.isContentEditable))&&i(e.target)}),!0),e.addEventListener("blur",(function(e){var o;n(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(d=!0,window.clearTimeout(c),c=window.setTimeout((function(){d=!1}),100),(o=e.target).hasAttribute("data-focus-visible-added")&&(o.classList.remove("focus-visible"),o.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var o;window.applyFocusVisiblePolyfill=e;try{o=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(o=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(o)}"undefined"!=typeof document&&e(document)},754:()=>{var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(e,o),navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)/i);var d=document.getElementById("youtubelightbox");d.addEventListener("click",(function(){this.style.display="none",undefined.stopVideo()}),!1),d.querySelector(".youtubelightbox__centeredchild").addEventListener("click",(function(e){e.stopPropagation()}),!1)}},o={};function d(c){var t=o[c];if(void 0!==t)return t.exports;var n=o[c]={exports:{}};return e[c](n,n.exports,d),n.exports}(()=>{"use strict";d(598);const e=[{code:"+247 ####"},{code:"+290 ####"},{code:"+290 ####"},{code:"+683 ####"},{code:"+690 ####"},{code:"+500 #####"},{code:"+676 #####"},{code:"+677 #####"},{code:"+678 #####"},{code:"+688 2####"},{code:"+49 ### ###"},{code:"+682 ## ###"},{code:"+686 ## ###"},{code:"+688 90####"},{code:"+95 ### ###"},{code:"+298 ### ###"},{code:"+376 ### ###"},{code:"+387 ## ####"},{code:"+508 ## ####"},{code:"+597 ### ###"},{code:"+672 1## ###"},{code:"+672 3## ###"},{code:"+681 ## ####"},{code:"+685 ## ####"},{code:"+687 ## ####"},{code:"+850 ### ###"},{code:"+230 ### ####"},{code:"+239 ## #####"},{code:"+245 # ######"},{code:"+246 ### ####"},{code:"+263 # ######"},{code:"+269 ## #####"},{code:"+297 ### ####"},{code:"+299 ## ## ##"},{code:"+354 ### ####"},{code:"+372 ### ####"},{code:"+387 ## #####"},{code:"+49 ### ## ##"},{code:"+501 ### ####"},{code:"+507 ### ####"},{code:"+592 ### ####"},{code:"+597 ### ####"},{code:"+599 ### ####"},{code:"+599 ### ####"},{code:"+599 ### ####"},{code:"+60 # ### ###"},{code:"+62 ## ### ##"},{code:"+65 #### ####"},{code:"+670 ### ####"},{code:"+673 ### ####"},{code:"+674 ### ####"},{code:"+677 ### ####"},{code:"+678 ## #####"},{code:"+679 ## #####"},{code:"+680 ### ####"},{code:"+689 ## ## ##"},{code:"+691 ### ####"},{code:"+692 ### ####"},{code:"+95 # ### ###"},{code:"+960 ### ####"},{code:"+220 ### ## ##"},{code:"+232 ## ######"},{code:"+234 ## ### ##"},{code:"+237 #### ####"},{code:"+238 ### ## ##"},{code:"+248 # ### ###"},{code:"+252 # ### ###"},{code:"+252 # ### ###"},{code:"+265 1 ### ###"},{code:"+291 # ### ###"},{code:"+350 ### #####"},{code:"+356 #### ####"},{code:"+372 #### ####"},{code:"+373 #### ####"},{code:"+47 ### ## ###"},{code:"+49 ### ## ###"},{code:"+504 #### ####"},{code:"+505 #### ####"},{code:"+506 #### ####"},{code:"+52 ## ## ####"},{code:"+53 # ### ####"},{code:"+599 9### ####"},{code:"+60 ## ### ###"},{code:"+62 ## ### ###"},{code:"+64 ## ### ###"},{code:"+66 ## ### ###"},{code:"+670 77# #####"},{code:"+670 78# #####"},{code:"+850 #### ####"},{code:"+852 #### ####"},{code:"+853 #### ####"},{code:"+886 #### ####"},{code:"+95 ## ### ###"},{code:"+961 # ### ###"},{code:"+965 #### ####"},{code:"+967 # ### ###"},{code:"+973 #### ####"},{code:"+974 #### ####"},{code:"+975 # ### ###"},{code:"+1 ### ### ####"},{code:"+1 242 ### ####"},{code:"+1 246 ### ####"},{code:"+1 264 ### ####"},{code:"+1 268 ### ####"},{code:"+1 284 ### ####"},{code:"+1 340 ### ####"},{code:"+1 345 ### ####"},{code:"+1 441 ### ####"},{code:"+1 473 ### ####"},{code:"+1 649 ### ####"},{code:"+1 664 ### ####"},{code:"+1 670 ### ####"},{code:"+1 671 ### ####"},{code:"+1 684 ### ####"},{code:"+1 721 ### ####"},{code:"+1 758 ### ####"},{code:"+1 767 ### ####"},{code:"+1 784 ### ####"},{code:"+1 809 ### ####"},{code:"+1 829 ### ####"},{code:"+1 849 ### ####"},{code:"+1 868 ### ####"},{code:"+1 869 ### ####"},{code:"+1 876 ### ####"},{code:"+216 ## ### ###"},{code:"+218 ## ### ###"},{code:"+222 ## ## ####"},{code:"+223 ## ## ####"},{code:"+224 ## ### ###"},{code:"+225 ## ### ###"},{code:"+226 ## ## ####"},{code:"+227 ## ## ####"},{code:"+228 ## ### ###"},{code:"+229 ## ## ####"},{code:"+231 ## ### ###"},{code:"+234 ## ### ###"},{code:"+236 ## ## ####"},{code:"+241 # ## ## ##"},{code:"+252 ## ### ###"},{code:"+254 ### ######"},{code:"+257 ## ## ####"},{code:"+258 ## ### ###"},{code:"+262 ##### ####"},{code:"+262 ##### ####"},{code:"+266 # ### ####"},{code:"+267 ## ### ###"},{code:"+268 ## ## ####"},{code:"+27 ## ### ####"},{code:"+31 ## ### ####"},{code:"+32 ### ### ###"},{code:"+33 ### ### ###"},{code:"+34 ### ### ###"},{code:"+357 ## ### ###"},{code:"+36 ### ### ###"},{code:"+370 ### ## ###"},{code:"+371 ## ### ###"},{code:"+374 ## ### ###"},{code:"+377 ## ### ###"},{code:"+382 ## ### ###"},{code:"+385 ## ### ###"},{code:"+386 ## ### ###"},{code:"+389 ## ### ###"},{code:"+39 6 698 #####"},{code:"+40 ## ### ####"},{code:"+41 ## ### ####"},{code:"+45 ## ## ## ##"},{code:"+46 ## ### ####"},{code:"+48 ### ### ###"},{code:"+49 ### ## ####"},{code:"+502 # ### ####"},{code:"+503 ## ## ####"},{code:"+509 ## ## ####"},{code:"+51 ### ### ###"},{code:"+56 # #### ####"},{code:"+591 # ### ####"},{code:"+593 # ### ####"},{code:"+594 ##### ####"},{code:"+60 ## ### ####"},{code:"+60 ### ### ###"},{code:"+61 # #### ####"},{code:"+62 ## ### ####"},{code:"+62 8## ### ###"},{code:"+64 ### ### ###"},{code:"+66 ## ### ####"},{code:"+675 ### ## ###"},{code:"+81 ### ### ###"},{code:"+82 ## ### ####"},{code:"+84 ## #### ###"},{code:"+850 ## ### ###"},{code:"+855 ## ### ###"},{code:"+856 ## ### ###"},{code:"+880 ## ### ###"},{code:"+93 ## ### ####"},{code:"+94 ## ### ####"},{code:"+961 ## ### ###"},{code:"+966 # ### ####"},{code:"+967 ## ### ###"},{code:"+968 ## ### ###"},{code:"+971 # ### ####"},{code:"+972 # ### ####"},{code:"+975 17 ### ###"},{code:"+976 ## ## ####"},{code:"+977 ## ### ###"},{code:"+993 # ### ####"},{code:"+20 ### ### ####"},{code:"+211 ## ### ####"},{code:"+212 ## #### ###"},{code:"+213 ## ### ####"},{code:"+218 21 ### ####"},{code:"+221 ## ### ####"},{code:"+233 ### ### ###"},{code:"+235 ## ## ## ##"},{code:"+240 ## ### ####"},{code:"+242 ## ### ####"},{code:"+243 ### ### ###"},{code:"+244 ### ### ###"},{code:"+249 ## ### ####"},{code:"+250 ### ### ###"},{code:"+251 ## ### ####"},{code:"+253 ## ## ## ##"},{code:"+255 ## ### ####"},{code:"+256 ### ### ###"},{code:"+260 ## ### ####"},{code:"+261 ## ## #####"},{code:"+264 ## ### ####"},{code:"+265 # #### ####"},{code:"+30 ### ### ####"},{code:"+351 ## ### ####"},{code:"+352 ### ### ###"},{code:"+353 ### ### ###"},{code:"+355 ### ### ###"},{code:"+359 ### ### ###"},{code:"+377 ### ### ###"},{code:"+378 #### ######"},{code:"+381 ## ### ####"},{code:"+39 ### #### ###"},{code:"+420 ### ### ###"},{code:"+421 ### ### ###"},{code:"+43 ### ### ####"},{code:"+44 ## #### ####"},{code:"+49 ### ### ####"},{code:"+52 ### ### ####"},{code:"+54 ### ### ####"},{code:"+55 ## #### ####"},{code:"+55 ## 7### ####"},{code:"+57 ### ### ####"},{code:"+58 ### ### ####"},{code:"+590 ### ### ###"},{code:"+593 ## ### ####"},{code:"+595 ### ### ###"},{code:"+598 # ### ## ##"},{code:"+62 8## ### ####"},{code:"+63 ### ### ####"},{code:"+64 ### ### ####"},{code:"+7 ### ### ## ##"},{code:"+7 6## ### ## ##"},{code:"+7 7## ### ## ##"},{code:"+81 ## #### ####"},{code:"+84 ### #### ###"},{code:"+86 ### #### ###"},{code:"+886 # #### ####"},{code:"+90 ### ### ####"},{code:"+91 #### ### ###"},{code:"+92 ### ### ####"},{code:"+962 # #### ####"},{code:"+963 ## #### ###"},{code:"+966 5 #### ####"},{code:"+967 ### ### ###"},{code:"+970 ## ### ####"},{code:"+971 5# ### ####"},{code:"+972 5# ### ####"},{code:"+98 ### ### ####"},{code:"+992 ## ### ####"},{code:"+995 ### ### ###"},{code:"+996 ### ### ###"},{code:"+998 ## ### ####"},{code:"+234 ### ### ####"},{code:"+234 ### ### ####"},{code:"+375 ## ### ## ##"},{code:"+380 ## ### ## ##"},{code:"+423 ### ### ####"},{code:"+49 #### ### ####"},{code:"+55 ## 9#### ####"},{code:"+596 ### ## ## ##"},{code:"+850 ### #### ###"},{code:"+850 191 ### ####"},{code:"+856 20## ### ###"},{code:"+86 ### #### ####"},{code:"+964 ### ### ####"},{code:"+994 ## ### ## ##"},{code:"+358 ### ### ## ##"},{code:"+62 8## ### ## ###"},{code:"+86 ## ##### #####"},{code:"+850 #### #############"}];d(754);const o={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body};console.log((()=>{const e=navigator.userAgent||navigator.vendor||window.opera;return/android/i.test(e)?(o.htmlEl.classList.add("page--android"),"Android"):/iPad|iPhone|iPod/.test(e)&&!window.MSStream?(o.htmlEl.classList.add("page--ios"),"iOS"):"unknown"})()),d(732),(o=>{function d(){let o="+###############";e.forEach((e=>{let d=e.code.replace(/[\s#]/g,"");this.value.replace(/[\s#-)(]/g,"").includes(d)&&(o=e.code)}));let d=0,c=this.value.replace(/\D/g,"");this.value=o.replace(/(?!\+)./g,(function(e){return/[#\d]/.test(e)&&d<c.length?c.charAt(d++):d>=c.length?"":e}))}document.querySelectorAll("[data-tel-input]").forEach((e=>{e.addEventListener("input",d),e.addEventListener("focus",d),e.addEventListener("blur",d)}))})(),document.querySelectorAll("[data-tel-input]").forEach((e=>{e.addEventListener("input",(()=>{"+"==e.value&&(e.value="")})),e.addEventListener("blur",(()=>{"+"==e.value&&(e.value="")}))})),d(627)})()})();