!function(){function s(s,t,e,i){Object.defineProperty(s,t,{get:e,set:i,enumerable:!0,configurable:!0})}function t(s){return s&&s.__esModule?s.default:s}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},a=e.parcelRequired7c6;null==a&&((a=function(s){if(s in i)return i[s].exports;if(s in n){var t=n[s];delete n[s];var e={id:s,exports:{}};return i[s]=e,t.call(e.exports,e,e.exports),e.exports}var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(s,t){n[s]=t},e.parcelRequired7c6=a),a.register("iE7OH",(function(t,e){var i,n;s(t.exports,"register",(function(){return i}),(function(s){return i=s})),s(t.exports,"resolve",(function(){return n}),(function(s){return n=s}));var a={};i=function(s){for(var t=Object.keys(s),e=0;e<t.length;e++)a[t[e]]=s[t[e]]},n=function(s){var t=a[s];if(null==t)throw new Error("Could not resolve bundle with id "+s);return t}})),a.register("aNJCr",(function(t,e){var i;s(t.exports,"getBundleURL",(function(){return i}),(function(s){return i=s}));var n={};function a(s){return(""+s).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(s){var t=n[s];return t||(t=function(){try{throw new Error}catch(t){var s=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(s)return a(s[2])}return"/"}(),n[s]=t),t}})),a("iE7OH").register(JSON.parse('{"2Y0K8":"library.ef73d646.js","hBMgR":"backdrop-kino.27c72f8a.jpg","4O56q":"movie-pic.fe810275.jpg"}'));a("aNJCr").getBundleURL("2Y0K8"),a("iE7OH").resolve("hBMgR");var l={};function r(s){return s.map((s=>{const{genres:e,id:i,poster_path:n,title:a,vote_average:r,release_date:c}=s,u=function(s){return 0===s.length?"Other":s.length<=3?s.map((s=>s.name)):`${s[0].name}, ${s[1].name}, Other`}(e);return`<li class="films__item js-target" data-id="${i}">\n                  <div class="films__img-wrapper">\n                   <img\n                    src="${n?`https://image.tmdb.org/t/p/w500${n}`:t(l)}"\n                    alt="${a}"\n                    class="films__img" loading="lazy"\n                   />\n                   <div class="rating">\n                     <p class="films__desk">\n                       <span class="films__rating--text"> Rating: </span>\n                       <span class="films__rating">${r.toFixed(1)}</span>\n                     </p>\n                    </div>\n                  </div>\n               <div class="films__info">\n                 <p class="films__name">${a}</p>\n                 <p class="films__desk">\n                   <span class="films__genre">${u}</span> |\n                    <span class="films__year">${Number.parseInt(c)}</span>\n                  </p>\n               </div>\n             </li>`})).join("")}l=a("aNJCr").getBundleURL("2Y0K8")+a("iE7OH").resolve("4O56q");const c={moviesL:document.querySelector(".js-films-list"),firstP:document.querySelector(".js-pagination--firstPage-library"),minus2P:document.querySelector(".js-pagination--minus2Page-library"),minus1P:document.querySelector(".js-pagination--minus1Page-library"),activP:document.querySelector(".js-pagination--activPage-library"),plus1P:document.querySelector(".js-pagination--plus1Page-library"),plus2P:document.querySelector(".js-pagination--plus2Page-library"),lastP:document.querySelector(".js-pagination--lastPage-library"),minusQu:document.querySelector(".js-btn__minusQuery-library"),plusQu:document.querySelector(".js-btn__plusQuery-library"),containerP:document.querySelector(".js-pagination__page-library"),plusT:document.querySelector(".btn-increment-ten-library"),minusT:document.querySelector(".btn-decrement-ten-library"),containerPag:document.querySelector(".js-pagination-library")};c.minusQu.addEventListener("click",(function(s){y-=1;s.target.blur(),g(y,L,b,h,p)})),c.plusQu.addEventListener("click",(function(s){y+=1;s.target.blur(),g(y,L,b,h,p)})),c.containerP.addEventListener("click",f),c.minusT.addEventListener("click",(function(s){y-=5,t.blur();const t=s.target;g(y,L,b,h,p)})),c.plusT.addEventListener("click",(function(s){y+=5,t.blur();const t=s.target;g(y,L,b,h,p)})),c.lastP.addEventListener("click",f),c.firstP.addEventListener("click",f);const u=document.querySelector(".js-films-list"),d=document.querySelector(".js-btn-library-watched"),o=document.querySelector(".js-btn-library-queue"),v=localStorage.getItem("watchedMovies"),m=localStorage.getItem("queueMovies");function P(s,t){switch(window.scrollTo({top:10,behavior:"smooth"}),t){case 1:c.firstP.textContent=1,c.plus2P.classList.remove("btn-active"),c.plus1P.classList.remove("btn-active"),c.minus1P.classList.remove("btn-active"),c.minus2P.classList.remove("btn-active"),c.firstP.classList.remove("btn-active"),c.lastP.classList.remove("btn-active"),c.activP.classList.remove("btn-active"),c.firstP.classList.add("btn-active"),c.lastP.textContent=t,c.minus2P.textContent=t+1,c.minus1P.textContent=t+2,c.activP.textContent=t+3,c.plus1P.textContent=t+4,c.plus2P.textContent=t+5;break;case 2:c.firstP.textContent=1,c.firstP.classList.remove("btn-active"),c.plus2P.classList.remove("btn-active"),c.plus1P.classList.remove("btn-active"),c.minus1P.classList.remove("btn-active"),c.firstP.classList.remove("btn-active"),c.lastP.classList.remove("btn-active"),c.activP.classList.remove("btn-active"),c.lastP.textContent=t,c.minus2P.textContent=t,c.minus2P.classList.add("btn-active"),c.minus1P.textContent=t+1,c.activP.textContent=t+2,c.plus1P.textContent=t+3,c.plus2P.textContent=t+4;break;case 3:c.firstP.textContent=1,c.minus2P.classList.remove("btn-active"),c.plus2P.classList.remove("btn-active"),c.plus1P.classList.remove("btn-active"),c.firstP.classList.remove("btn-active"),c.lastP.classList.remove("btn-active"),c.activP.classList.remove("btn-active"),c.lastP.textContent=t,c.minus2P.textContent=t-1,c.minus1P.classList.add("btn-active"),c.minus1P.textContent=t,c.activP.textContent=t+1,c.plus1P.textContent=t+2,c.plus2P.textContent=t+3;break;case 4:c.firstP.textContent=1,c.minus1P.classList.remove("btn-active"),c.plus2P.classList.remove("btn-active"),c.plus1P.classList.remove("btn-active"),c.minus2P.classList.remove("btn-active"),c.firstP.classList.remove("btn-active"),c.activP.classList.remove("btn-active"),c.lastP.textContent=t,c.minus2P.textContent=t-2,c.activP.classList.add("btn-active"),c.minus1P.textContent=t-1,c.activP.textContent=t,c.plus1P.textContent=t+1,c.plus2P.textContent=t+2;break;case 5:c.firstP.textContent=1,c.activP.classList.remove("btn-active"),c.plus2P.classList.remove("btn-active"),c.minus1P.classList.remove("btn-active"),c.minus2P.classList.remove("btn-active"),c.firstP.classList.remove("btn-active"),c.lastP.textContent=t,c.minus2P.textContent=t-3,c.plus1P.classList.add("btn-active"),c.minus1P.textContent=t-2,c.activP.textContent=t-1,c.plus1P.textContent=t,c.plus2P.textContent=t+1;break;case 6:c.firstP.textContent=1,c.plus1P.classList.remove("btn-active"),c.minus1P.classList.remove("btn-active"),c.minus2P.classList.remove("btn-active"),c.firstP.classList.remove("btn-active"),c.activP.classList.remove("btn-active"),c.lastP.textContent=t,c.minus2P.textContent=t-4,c.plus2P.classList.add("btn-active"),c.minus1P.textContent=t-3,c.activP.textContent=t-2,c.plus1P.textContent=t-1,c.plus2P.textContent=t;break;default:c.firstP.textContent=1,c.plus2P.classList.remove("btn-active"),c.plus1P.classList.remove("btn-active"),c.minus1P.classList.remove("btn-active"),c.minus2P.classList.remove("btn-active"),c.firstP.classList.remove("btn-active"),c.lastP.classList.remove("btn-active"),c.activP.classList.add("btn-active"),c.plusQu.classList.remove("btn-active"),c.minusQu.classList.remove("btn-active"),c.lastP.textContent=s,c.minus2P.textContent=s-2,c.minus1P.textContent=s-1,c.activP.textContent=s,c.plus1P.textContent=s+1,c.plus2P.textContent=s+2}switch(s){case 0:c.containerPag.classList.add("visually-hidden");break;case 1:c.plus2P.classList.add("visually-hidden"),c.plus1P.classList.add("visually-hidden"),c.minus1P.classList.add("visually-hidden"),c.minus2P.classList.add("visually-hidden"),c.lastP.classList.add("visually-hidden"),c.activP.classList.add("visually-hidden"),c.minusT.classList.add("visually-hidden"),c.plusT.classList.add("visually-hidden"),c.minusQu.classList.add("visually-hidden"),c.plusQu.classList.add("visually-hidden");break;case 2:c.plus2P.classList.add("visually-hidden"),c.plus1P.classList.add("visually-hidden"),c.minus1P.classList.add("visually-hidden"),c.minus2P.classList.remove("visually-hidden"),c.lastP.classList.add("visually-hidden"),c.activP.classList.add("visually-hidden"),c.minusT.classList.add("visually-hidden"),c.plusT.classList.add("visually-hidden"),c.minusQu.classList.add("visually-hidden"),c.plusQu.classList.add("visually-hidden");break;case 3:c.plus2P.classList.add("visually-hidden"),c.plus1P.classList.add("visually-hidden"),c.minus1P.classList.remove("visually-hidden"),c.minus2P.classList.remove("visually-hidden"),c.lastP.classList.add("visually-hidden"),c.activP.classList.add("visually-hidden"),c.minusT.classList.add("visually-hidden"),c.plusT.classList.add("visually-hidden"),c.minusQu.classList.add("visually-hidden"),c.plusQu.classList.add("visually-hidden");break;case 4:c.plus2P.classList.add("visually-hidden"),c.plus1P.classList.add("visually-hidden"),c.minus1P.classList.remove("visually-hidden"),c.minus2P.classList.remove("visually-hidden"),c.lastP.classList.remove("visually-hidden"),c.activP.classList.add("visually-hidden"),c.minusT.classList.add("visually-hidden"),c.plusT.classList.add("visually-hidden"),c.minusQu.classList.remove("visually-hidden"),c.plusQu.classList.remove("visually-hidden");break;case 5:c.plus2P.classList.add("visually-hidden"),c.plus1P.classList.add("visually-hidden"),c.minus1P.classList.remove("visually-hidden"),c.minus2P.classList.remove("visually-hidden"),c.lastP.classList.remove("visually-hidden"),c.activP.classList.remove("visually-hidden"),c.minusT.classList.add("visually-hidden"),c.plusT.classList.add("visually-hidden"),c.minusQu.classList.remove("visually-hidden"),c.plusQu.classList.remove("visually-hidden");break;case 6:c.plus2P.classList.add("visually-hidden"),c.plus1P.classList.remove("visually-hidden"),c.minus1P.classList.remove("visually-hidden"),c.minus2P.classList.remove("visually-hidden"),c.lastP.classList.remove("visually-hidden"),c.activP.classList.remove("visually-hidden"),c.minusT.classList.add("visually-hidden"),c.plusT.classList.add("visually-hidden"),c.minusQu.classList.remove("visually-hidden"),c.plusQu.classList.remove("visually-hidden");break;default:c.plus2P.classList.remove("visually-hidden"),c.plus1P.classList.remove("visually-hidden"),c.minus1P.classList.remove("visually-hidden"),c.minus2P.classList.remove("visually-hidden"),c.lastP.classList.remove("visually-hidden"),c.activP.classList.remove("visually-hidden"),c.minusQu.classList.remove("visually-hidden"),c.plusQu.classList.remove("visually-hidden"),c.minusT.classList.remove("visually-hidden"),c.plusT.classList.remove("visually-hidden")}}let L=[],p=1,y=1,b=0,h=0;function f(s){const t=s.target;"BUTTON"===t.nodeName&&(y=Number(t.textContent),g(y,L,b,h,p),t.blur())}function g(s,t,e,i,n){if(!y||y<0)y=1;else{if(d.classList.contains("main-btn--library-active")){if(L=JSON.parse(v),p=Number.parseInt(L.length/20+1),y>p&&(y=p),1===L.length&&(u.innerHTML=r(L)),1===y){const s=L.slice(0,20);return void(u.innerHTML=r(s))}b=20*y-20,h=20*y;const s=L.slice(b,h);u.innerHTML=r(s),P(p,y)}if(o.classList.contains("main-btn--library-active")){if(L=JSON.parse(m),p=Number.parseInt(L.length/20+1),y>p&&(y=p),1===L.length)return u.innerHTML=r(L),void P(p,y);b=20*y-20,h=20*y;const s=L.slice(b,h);if(u.innerHTML=r(s),1===y){const s=L.slice(0,20);return u.innerHTML=r(s),void P(p,y)}P(p,y)}}}const x=document.querySelector(".js-films-list"),C=document.querySelector(".js-btn-library-watched"),_=document.querySelector(".js-btn-library-queue"),S=localStorage.getItem("watchedMovies"),T=localStorage.getItem("queueMovies");let q=[],k=0;window.onload=function(){if(!T)return x.innerHTML='<div style="height: 500px; font-size: 24px">Add films to your queue!</div>',void P(0,0);x.innerHTML=r(JSON.parse(T)),q=JSON.parse(T),k=Number.parseInt(q.length/20+1),P(k,1)}(),_.addEventListener("click",(()=>{if(C.classList.remove("main-btn--library-active"),_.classList.add("main-btn--library-active"),!T)return x.innerHTML='<div style="height: 500px; font-size: 24px">Add films to your queue!</div>',void P(0,0);x.innerHTML=r(JSON.parse(T)),q=JSON.parse(T),k=Number.parseInt(q.length/20+1),P(k,1)})),C.addEventListener("click",(()=>{if(_.classList.remove("main-btn--library-active"),C.classList.add("main-btn--library-active"),!S)return x.innerHTML='<div style="height: 500px; font-size: 24px">Add films to your watched!</div>',void P(0,0);x.innerHTML=r(JSON.parse(S)),q=JSON.parse(S),k=Number.parseInt(q.length/20+1),P(k,1)}))}();
//# sourceMappingURL=library.ef73d646.js.map
