parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
var e=document.querySelector(".menu_button"),t=document.querySelector("header div nav");e.addEventListener("click",function(){"menu"===t.getAttribute("class")?t.setAttribute("class","menu_vision"):t.setAttribute("class","menu")}),document.addEventListener("click",function(n){var c=n.target;t.contains(c)||e.contains(c)||t.setAttribute("class","menu")});var n=document.querySelectorAll("img");n.forEach(function(e){e.addEventListener("dragstart",function(e){e.preventDefault()})});var c=70;document.querySelectorAll('a[href^="#"]').forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("href"),n=document.querySelector(t);if(n){var i=n.offsetTop-c;window.scrollTo({top:i,behavior:"smooth"})}})});var i=document.querySelector(".swiper-slider"),r=document.querySelectorAll(".swiper-indicator-element"),o=document.querySelectorAll(".swiper-slide"),u=document.querySelectorAll(".swiper-left"),a=document.querySelectorAll(".swiper-right"),s=0;function l(){r.forEach(function(e,t){t===s?e.setAttribute("class","swiper-indicator-element-active"):e.setAttribute("class","swiper-indicator-element")})}r.forEach(function(e,t){e.addEventListener("click",function(){m(t)})});var d=0,f=!1;u.forEach(function(e){e.addEventListener("click",function(){m(s-1)})}),a.forEach(function(e){e.addEventListener("click",function(){m(s+1)})});var v=0;function m(e){e<0?e=0:e>=o.length&&(e=0);var t=-e*(o[0].offsetWidth+150);i.style.transform="translateX(".concat(t,"px)"),s=e,l()}i.addEventListener("touchstart",function(e){v=e.touches[0].clientX,f=!0}),i.addEventListener("touchmove",function(e){if(f){var t=e.touches[0].clientX-v;t>0?m(s-1):t<0&&m(s+1),f=!1}}),i.addEventListener("touchend",function(){f=!1}),i.addEventListener("mousedown",function(e){f=!0,d=e.clientX}),i.addEventListener("mouseup",function(){f=!1}),i.addEventListener("mouseleave",function(){f=!1}),i.addEventListener("mousemove",function(e){if(f){var t=e.clientX-d;t>0?m(s-1):t<0&&m(s+1),f=!1}}),m(s);var E=document.querySelector(".certificat_swiper_list"),h=document.querySelectorAll(".certificat_swiper_slide"),y=document.querySelectorAll(".certificat_swiper_indicator-element"),L=document.querySelectorAll(".certificat_swiper-left"),p=document.querySelectorAll(".certificat_swiper-right"),A=0;function S(){y.forEach(function(e,t){t===A?e.setAttribute("class","certificat_swiper_indicator-element-active"):e.setAttribute("class","certificat_swiper_indicator-element")})}y.forEach(function(e,t){e.addEventListener("click",function(){b(t)})}),L.forEach(function(e){e.addEventListener("click",function(){b(A-1)})}),p.forEach(function(e){e.addEventListener("click",function(){b(A+1)})});var q=!1,w=0;E.addEventListener("mousedown",function(e){q=!0,w=e.clientX}),E.addEventListener("mouseup",function(){q=!1}),E.addEventListener("mouseleave",function(){q=!1}),E.addEventListener("mousemove",function(e){if(q){var t=e.clientX-w;t<0?b(A+1):t>0&&b(A-1),q=!1}});var _=0;function b(e){e<0?e=0:e>=h.length&&(e=0);var t=-e*(h[0].offsetWidth+20);E.style.transform="translateX(".concat(t,"px)"),A=e,S()}E.addEventListener("touchstart",function(e){_=e.touches[0].clientX,q=!0}),E.addEventListener("touchmove",function(e){if(q){var t=e.touches[0].clientX-_;t<0?b(A+1):t>0&&b(A-1),q=!1}}),E.addEventListener("touchend",function(){q=!1}),b(A);var g=document.querySelectorAll(".accordion_tittle");function k(e){var t=e.nextElementSibling;e.querySelector("img").classList.toggle("rotate"),t&&(t.style.display="block"===t.style.display?"none":"block")}g.forEach(function(e){e.addEventListener("click",function(){k(e)})}),document.addEventListener("click",function(n){var c=n.target;t.contains(c)||e.contains(c)||t.setAttribute("class","menu")});var X=document.querySelector(".accordion");document.addEventListener("click",function(e){var t=e.target,n=document.querySelectorAll(".accordion_text"),c=document.querySelectorAll(".accordion_tittle img");X.contains(t)||(c.forEach(function(e){e.removeAttribute("class")}),n.forEach(function(e){e.style.display="none"}))});
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/script.fbc91c42.js.map