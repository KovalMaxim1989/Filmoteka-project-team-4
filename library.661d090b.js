!function(){function s(s,t,e,i){Object.defineProperty(s,t,{get:e,set:i,enumerable:!0,configurable:!0})}function t(s){return s&&s.__esModule?s.default:s}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},a=e.parcelRequired7c6;null==a&&((a=function(s){if(s in i)return i[s].exports;if(s in n){var t=n[s];delete n[s];var e={id:s,exports:{}};return i[s]=e,t.call(e.exports,e,e.exports),e.exports}var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(s,t){n[s]=t},e.parcelRequired7c6=a),a.register("iE7OH",(function(t,e){var i,n;s(t.exports,"register",(function(){return i}),(function(s){return i=s})),s(t.exports,"resolve",(function(){return n}),(function(s){return n=s}));var a={};i=function(s){for(var t=Object.keys(s),e=0;e<t.length;e++)a[t[e]]=s[t[e]]},n=function(s){var t=a[s];if(null==t)throw new Error("Could not resolve bundle with id "+s);return t}})),a.register("aNJCr",(function(t,e){var i;s(t.exports,"getBundleURL",(function(){return i}),(function(s){return i=s}));var n={};function a(s){return(""+s).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(s){var t=n[s];return t||(t=function(){try{throw new Error}catch(t){var s=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(s)return a(s[2])}return"/"}(),n[s]=t),t}})),a("iE7OH").register(JSON.parse('{"2Y0K8":"library.661d090b.js","hBMgR":"backdrop-kino.27c72f8a.jpg","4O56q":"movie-pic.fe810275.jpg"}'));a("aNJCr").getBundleURL("2Y0K8"),a("iE7OH").resolve("hBMgR");var l={};function c(s){return s.map((s=>{const{genres:e,id:i,poster_path:n,title:a,vote_average:c,release_date:r}=s,u=function(s){return 0===s.length?"Other":s.length<=3?s.map((s=>s.name)):`${s[0].name}, ${s[1].name}, Other`}(e);return`<li class="films__item js-target" data-id="${i}">\n                  <div class="films__img-wrapper">\n                   <img\n                    src="${n?`https://image.tmdb.org/t/p/w500${n}`:t(l)}"\n                    alt="${a}"\n                    class="films__img" loading="lazy"\n                   />\n                   <div class="rating">\n                     <p class="films__desk">\n                       <span class="films__rating--text"> Rating: </span>\n                       <span class="films__rating">${c.toFixed(1)}</span>\n                     </p>\n                    </div>\n                  </div>\n               <div class="films__info">\n                 <p class="films__name">${a}</p>\n                 <p class="films__desk">\n                   <span class="films__genre">${u}</span> |\n                    <span class="films__year">${Number.parseInt(r)}</span>\n                  </p>\n               </div>\n             </li>`})).join("")}l=a("aNJCr").getBundleURL("2Y0K8")+a("iE7OH").resolve("4O56q");const r={moviesL:document.querySelector(".js-films-list"),firstP:document.querySelector(".js-pagination--firstPage-library"),minus2P:document.querySelector(".js-pagination--minus2Page-library"),minus1P:document.querySelector(".js-pagination--minus1Page-library"),activP:document.querySelector(".js-pagination--activPage-library"),plus1P:document.querySelector(".js-pagination--plus1Page-library"),plus2P:document.querySelector(".js-pagination--plus2Page-library"),lastP:document.querySelector(".js-pagination--lastPage-library"),minusQu:document.querySelector(".js-btn__minusQuery-library"),plusQu:document.querySelector(".js-btn__plusQuery-library"),containerP:document.querySelector(".js-pagination__page-library"),plusT:document.querySelector(".btn-increment-ten-library"),minusT:document.querySelector(".btn-decrement-ten-library"),containerPag:document.querySelector(".js-pagination-library")};r.minusQu.addEventListener("click",(function(s){b-=1;s.target.blur(),g(b,L,y,h,p)})),r.plusQu.addEventListener("click",(function(s){b+=1;s.target.blur(),g(b,L,y,h,p)})),r.containerP.addEventListener("click",f),r.minusT.addEventListener("click",(function(s){b-=5,t.blur();const t=s.target;g(b,L,y,h,p)})),r.plusT.addEventListener("click",(function(s){b+=5,t.blur();const t=s.target;g(b,L,y,h,p)})),r.lastP.addEventListener("click",f),r.firstP.addEventListener("click",f);const u=document.querySelector(".js-films-list"),d=document.querySelector(".js-btn-library-watched"),o=document.querySelector(".js-btn-library-queue"),v=localStorage.getItem("watchedMovies"),m=localStorage.getItem("queueMovies");function P(s,t){switch(window.scrollTo({top:10,behavior:"smooth"}),t){case 1:r.firstP.textContent=1,r.plus2P.classList.remove("btn-active"),r.plus1P.classList.remove("btn-active"),r.minus1P.classList.remove("btn-active"),r.minus2P.classList.remove("btn-active"),r.firstP.classList.remove("btn-active"),r.lastP.classList.remove("btn-active"),r.activP.classList.remove("btn-active"),r.firstP.classList.add("btn-active"),r.lastP.textContent=t,r.minus2P.textContent=t+1,r.minus1P.textContent=t+2,r.activP.textContent=t+3,r.plus1P.textContent=t+4,r.plus2P.textContent=t+5;break;case 2:r.firstP.textContent=1,r.firstP.classList.remove("btn-active"),r.plus2P.classList.remove("btn-active"),r.plus1P.classList.remove("btn-active"),r.minus1P.classList.remove("btn-active"),r.firstP.classList.remove("btn-active"),r.lastP.classList.remove("btn-active"),r.activP.classList.remove("btn-active"),r.lastP.textContent=t,r.minus2P.textContent=t,r.minus2P.classList.add("btn-active"),r.minus1P.textContent=t+1,r.activP.textContent=t+2,r.plus1P.textContent=t+3,r.plus2P.textContent=t+4;break;case 3:r.firstP.textContent=1,r.minus2P.classList.remove("btn-active"),r.plus2P.classList.remove("btn-active"),r.plus1P.classList.remove("btn-active"),r.firstP.classList.remove("btn-active"),r.lastP.classList.remove("btn-active"),r.activP.classList.remove("btn-active"),r.lastP.textContent=t,r.minus2P.textContent=t-1,r.minus1P.classList.add("btn-active"),r.minus1P.textContent=t,r.activP.textContent=t+1,r.plus1P.textContent=t+2,r.plus2P.textContent=t+3;break;case 4:r.firstP.textContent=1,r.minus1P.classList.remove("btn-active"),r.plus2P.classList.remove("btn-active"),r.plus1P.classList.remove("btn-active"),r.minus2P.classList.remove("btn-active"),r.firstP.classList.remove("btn-active"),r.activP.classList.remove("btn-active"),r.lastP.textContent=t,r.minus2P.textContent=t-2,r.activP.classList.add("btn-active"),r.minus1P.textContent=t-1,r.activP.textContent=t,r.plus1P.textContent=t+1,r.plus2P.textContent=t+2;break;case 5:r.firstP.textContent=1,r.activP.classList.remove("btn-active"),r.plus2P.classList.remove("btn-active"),r.minus1P.classList.remove("btn-active"),r.minus2P.classList.remove("btn-active"),r.firstP.classList.remove("btn-active"),r.lastP.textContent=t,r.minus2P.textContent=t-3,r.plus1P.classList.add("btn-active"),r.minus1P.textContent=t-2,r.activP.textContent=t-1,r.plus1P.textContent=t,r.plus2P.textContent=t+1;break;case 6:r.firstP.textContent=1,r.plus1P.classList.remove("btn-active"),r.minus1P.classList.remove("btn-active"),r.minus2P.classList.remove("btn-active"),r.firstP.classList.remove("btn-active"),r.activP.classList.remove("btn-active"),r.lastP.textContent=t,r.minus2P.textContent=t-4,r.plus2P.classList.add("btn-active"),r.minus1P.textContent=t-3,r.activP.textContent=t-2,r.plus1P.textContent=t-1,r.plus2P.textContent=t;break;default:r.firstP.textContent=1,r.plus2P.classList.remove("btn-active"),r.plus1P.classList.remove("btn-active"),r.minus1P.classList.remove("btn-active"),r.minus2P.classList.remove("btn-active"),r.firstP.classList.remove("btn-active"),r.lastP.classList.remove("btn-active"),r.activP.classList.add("btn-active"),r.plusQu.classList.remove("btn-active"),r.minusQu.classList.remove("btn-active"),r.lastP.textContent=s,r.minus2P.textContent=s-2,r.minus1P.textContent=s-1,r.activP.textContent=s,r.plus1P.textContent=s+1,r.plus2P.textContent=s+2}switch(s){case 0:r.containerPag.classList.add("visually-hidden");break;case 1:r.plus2P.classList.add("visually-hidden"),r.plus1P.classList.add("visually-hidden"),r.minus1P.classList.add("visually-hidden"),r.minus2P.classList.add("visually-hidden"),r.lastP.classList.add("visually-hidden"),r.activP.classList.add("visually-hidden"),r.minusT.classList.add("visually-hidden"),r.plusT.classList.add("visually-hidden"),r.minusQu.classList.add("visually-hidden"),r.plusQu.classList.add("visually-hidden");break;case 2:r.plus2P.classList.add("visually-hidden"),r.plus1P.classList.add("visually-hidden"),r.minus1P.classList.add("visually-hidden"),r.minus2P.classList.remove("visually-hidden"),r.lastP.classList.add("visually-hidden"),r.activP.classList.add("visually-hidden"),r.minusT.classList.add("visually-hidden"),r.plusT.classList.add("visually-hidden"),r.minusQu.classList.add("visually-hidden"),r.plusQu.classList.add("visually-hidden");break;case 3:r.plus2P.classList.add("visually-hidden"),r.plus1P.classList.add("visually-hidden"),r.minus1P.classList.remove("visually-hidden"),r.minus2P.classList.remove("visually-hidden"),r.lastP.classList.add("visually-hidden"),r.activP.classList.add("visually-hidden"),r.minusT.classList.add("visually-hidden"),r.plusT.classList.add("visually-hidden"),r.minusQu.classList.add("visually-hidden"),r.plusQu.classList.add("visually-hidden");break;case 4:r.plus2P.classList.add("visually-hidden"),r.plus1P.classList.add("visually-hidden"),r.minus1P.classList.remove("visually-hidden"),r.minus2P.classList.remove("visually-hidden"),r.lastP.classList.remove("visually-hidden"),r.activP.classList.add("visually-hidden"),r.minusT.classList.add("visually-hidden"),r.plusT.classList.add("visually-hidden"),r.minusQu.classList.remove("visually-hidden"),r.plusQu.classList.remove("visually-hidden");break;case 5:r.plus2P.classList.add("visually-hidden"),r.plus1P.classList.add("visually-hidden"),r.minus1P.classList.remove("visually-hidden"),r.minus2P.classList.remove("visually-hidden"),r.lastP.classList.remove("visually-hidden"),r.activP.classList.remove("visually-hidden"),r.minusT.classList.add("visually-hidden"),r.plusT.classList.add("visually-hidden"),r.minusQu.classList.remove("visually-hidden"),r.plusQu.classList.remove("visually-hidden");break;case 6:r.plus2P.classList.add("visually-hidden"),r.plus1P.classList.remove("visually-hidden"),r.minus1P.classList.remove("visually-hidden"),r.minus2P.classList.remove("visually-hidden"),r.lastP.classList.remove("visually-hidden"),r.activP.classList.remove("visually-hidden"),r.minusT.classList.add("visually-hidden"),r.plusT.classList.add("visually-hidden"),r.minusQu.classList.remove("visually-hidden"),r.plusQu.classList.remove("visually-hidden");break;default:r.plus2P.classList.remove("visually-hidden"),r.plus1P.classList.remove("visually-hidden"),r.minus1P.classList.remove("visually-hidden"),r.minus2P.classList.remove("visually-hidden"),r.lastP.classList.remove("visually-hidden"),r.activP.classList.remove("visually-hidden"),r.minusQu.classList.remove("visually-hidden"),r.plusQu.classList.remove("visually-hidden"),r.minusT.classList.remove("visually-hidden"),r.plusT.classList.remove("visually-hidden")}}let L=[],p=1,b=1,y=0,h=0;function f(s){const t=s.target;"BUTTON"===t.nodeName&&(b=Number(t.textContent),g(b,L,y,h,p),t.blur())}function g(s,t,e,i,n){if(!s||s<0)s=1;else{if(d.classList.contains("main-btn--library-active")){if(t=JSON.parse(v),s>(n=Number.parseInt(t.length/20+1))&&(s=n),1===t.length&&(u.innerHTML=c(a),P(n,s)),1===s){const e=t.slice(0,20);return u.innerHTML=c(e),void P(n,s)}e=20*s-20,i=20*s;const a=t.slice(e,i);u.innerHTML=c(a),P(n,s)}if(o.classList.contains("main-btn--library-active")){if(t=JSON.parse(m),s>(n=Number.parseInt(t.length/20+1))&&(s=n),1===t.length)return u.innerHTML=c(t),void P(n,s);e=20*s-20,i=20*s;const a=t.slice(e,i);if(u.innerHTML=c(a),1===s){const e=t.slice(0,20);return u.innerHTML=c(e),void P(n,s)}P(n,s)}}}const x=document.querySelector(".js-films-list"),C=document.querySelector(".js-btn-library-watched"),_=document.querySelector(".js-btn-library-queue"),S=localStorage.getItem("watchedMovies"),T=localStorage.getItem("queueMovies");let w=[],q=0;function k(){_.classList.remove("main-btn--library-active"),C.classList.add("main-btn--library-active"),E(S)}function j(){C.classList.remove("main-btn--library-active"),_.classList.add("main-btn--library-active"),E(T)}function E(s){if(!s)return x.innerHTML='<div style="height: 500px; font-size: 24px">Add films to your queue!</div>',void P(0,0);x.innerHTML=c(JSON.parse(s)),w=JSON.parse(s),q=Number.parseInt(w.length/20+1),P(q,1)}const Q=document.querySelector("#top");window.addEventListener("scroll",(function(){Q.hidden=window.pageYOffset<document.documentElement.clientHeight})),Q.addEventListener("click",(function(){window.scrollTo({top:10,behavior:"smooth"})})),window.onload=void E(T),_.addEventListener("click",j),C.addEventListener("click",k)}();
//# sourceMappingURL=library.661d090b.js.map
