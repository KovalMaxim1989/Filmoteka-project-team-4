function s(s,e,t,i){Object.defineProperty(s,e,{get:t,set:i,enumerable:!0,configurable:!0})}function e(s){return s&&s.__esModule?s.default:s}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},a=t.parcelRequired7c6;null==a&&((a=function(s){if(s in i)return i[s].exports;if(s in n){var e=n[s];delete n[s];var t={id:s,exports:{}};return i[s]=t,e.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(s,e){n[s]=e},t.parcelRequired7c6=a),a.register("kyEFX",(function(e,t){var i,n;s(e.exports,"register",(function(){return i}),(function(s){return i=s})),s(e.exports,"resolve",(function(){return n}),(function(s){return n=s}));var a={};i=function(s){for(var e=Object.keys(s),t=0;t<e.length;t++)a[e[t]]=s[e[t]]},n=function(s){var e=a[s];if(null==e)throw new Error("Could not resolve bundle with id "+s);return e}})),a("kyEFX").register(JSON.parse('{"1zJhX":"library.93b8ec9a.js","devKS":"backdrop-kino.27c72f8a.jpg","dATrs":"movie-pic.fe810275.jpg"}'));new URL(a("kyEFX").resolve("devKS"),import.meta.url).toString();var l={};function r(s){return s.map((s=>{const{genres:t,id:i,poster_path:n,title:a,vote_average:r,release_date:c}=s,u=function(s){return 0===s.length?"Other":s.length<=3?s.map((s=>s.name)):`${s[0].name}, ${s[1].name}, Other`}(t);return`<li class="films__item js-target" data-id="${i}">\n                  <div class="films__img-wrapper">\n                   <img\n                    src="${n?`https://image.tmdb.org/t/p/w500${n}`:e(l)}"\n                    alt="${a}"\n                    class="films__img" loading="lazy"\n                   />\n                   <div class="rating">\n                     <p class="films__desk">\n                       <span class="films__rating--text"> Rating: </span>\n                       <span class="films__rating">${r.toFixed(1)}</span>\n                     </p>\n                    </div>\n                  </div>\n               <div class="films__info">\n                 <p class="films__name">${a}</p>\n                 <p class="films__desk">\n                   <span class="films__genre">${u}</span> |\n                    <span class="films__year">${Number.parseInt(c)}</span>\n                  </p>\n               </div>\n             </li>`})).join("")}l=new URL(a("kyEFX").resolve("dATrs"),import.meta.url).toString();const c={moviesL:document.querySelector(".js-films-list"),firstP:document.querySelector(".js-pagination--firstPage-library"),minus2P:document.querySelector(".js-pagination--minus2Page-library"),minus1P:document.querySelector(".js-pagination--minus1Page-library"),activP:document.querySelector(".js-pagination--activPage-library"),plus1P:document.querySelector(".js-pagination--plus1Page-library"),plus2P:document.querySelector(".js-pagination--plus2Page-library"),lastP:document.querySelector(".js-pagination--lastPage-library"),minusQu:document.querySelector(".js-btn__minusQuery-library"),plusQu:document.querySelector(".js-btn__plusQuery-library"),containerP:document.querySelector(".js-pagination__page-library"),plusT:document.querySelector(".btn-increment-ten-library"),minusT:document.querySelector(".btn-decrement-ten-library"),containerPag:document.querySelector(".js-pagination-library")};c.minusQu.addEventListener("click",(function(s){p-=1;if(s.target.blur(),!p||p<0)return void(p=1);if(d.classList.contains("main-btn--library-active")){if(P=JSON.parse(v),b=Number.parseInt(P.length/20+1),p>b&&(p=b),1===P.length&&(u.innerHTML=r(P)),1===p){const s=P.slice(0,20);return void(u.innerHTML=r(s))}y=20*p-20,h=20*p;const s=P.slice(y,h);u.innerHTML=r(s),L(b,p)}if(o.classList.contains("main-btn--library-active")){P=JSON.parse(m),b=Number.parseInt(P.length/20+1),p>b&&(p=b),1===P.length&&(u.innerHTML=r(P)),y=20*p-20,h=20*p;const s=P.slice(y,h);if(u.innerHTML=r(s),1===p){const s=P.slice(0,20);return void(u.innerHTML=r(s))}L(b,p)}})),c.plusQu.addEventListener("click",(function(s){p+=1;if(s.target.blur(),!p||p<0)return void(p=1);if(d.classList.contains("main-btn--library-active")){if(P=JSON.parse(v),b=Number.parseInt(P.length/20+1),p>b&&(p=b),1===P.length&&(u.innerHTML=r(P)),1===p){const s=P.slice(0,20);return u.innerHTML=r(s),void L(b,p)}y=20*p-20,h=20*p;const s=P.slice(y,h);u.innerHTML=r(s),L(b,p)}if(o.classList.contains("main-btn--library-active")){if(P=JSON.parse(m),b=Number.parseInt(P.length/20+1),p>b&&(p=b),1===P.length)return u.innerHTML=r(P),void L(b,p);y=20*p-20,h=20*p;const s=P.slice(y,h);if(u.innerHTML=r(s),1===p){const s=P.slice(0,20);return void(u.innerHTML=r(s))}L(b,p)}})),c.containerP.addEventListener("click",f),c.minusT.addEventListener("click",(function(s){p-=5,e.blur();const e=s.target;if(!p||p<0)return void(p=1);if(d.classList.contains("main-btn--library-active")){if(P=JSON.parse(v),b=Number.parseInt(P.length/20+1),p>b&&(p=b),1===P.length&&(u.innerHTML=r(P),L(b,p)),1===p){const s=P.slice(0,20);return void(u.innerHTML=r(s))}y=20*p-20,h=20*p;const s=P.slice(y,h);u.innerHTML=r(s),L(b,p)}if(o.classList.contains("main-btn--library-active")){P=JSON.parse(m),b=Number.parseInt(P.length/20+1),p>b&&(p=b),1===P.length&&(u.innerHTML=r(P),L(b,p)),y=20*p-20,h=20*p;const s=P.slice(y,h);if(u.innerHTML=r(s),1===p){const s=P.slice(0,20);return void(u.innerHTML=r(s))}L(b,p)}})),c.plusT.addEventListener("click",(function(s){p+=5,e.blur();const e=s.target;if(!p||p<0)return void(p=1);if(d.classList.contains("main-btn--library-active")){if(P=JSON.parse(v),b=Number.parseInt(P.length/20+1),p>b&&(p=b),1===P.length&&(u.innerHTML=r(P)),1===p){const s=P.slice(0,20);return void(u.innerHTML=r(s))}y=20*p-20,h=20*p;const s=P.slice(y,h);u.innerHTML=r(s),L(b,p)}if(o.classList.contains("main-btn--library-active")){if(P=JSON.parse(m),b=Number.parseInt(P.length/20+1),p>b&&(p=b),1===P.length)return u.innerHTML=r(P),void L(b,p);y=20*p-20,h=20*p;const s=P.slice(y,h);if(u.innerHTML=r(s),1===p){const s=P.slice(0,20);return u.innerHTML=r(s),void L(b,p)}L(b,p)}})),c.lastP.addEventListener("click",f),c.firstP.addEventListener("click",f);const u=document.querySelector(".js-films-list"),d=document.querySelector(".js-btn-library-watched"),o=document.querySelector(".js-btn-library-queue"),v=localStorage.getItem("watchedMovies"),m=localStorage.getItem("queueMovies");function L(s,e){switch(window.scrollTo({top:10,behavior:"smooth"}),e){case 1:c.firstP.textContent=1,c.plus2P.classList.remove("btn-active"),c.plus1P.classList.remove("btn-active"),c.minus1P.classList.remove("btn-active"),c.minus2P.classList.remove("btn-active"),c.firstP.classList.remove("btn-active"),c.lastP.classList.remove("btn-active"),c.activP.classList.remove("btn-active"),c.firstP.classList.add("btn-active"),c.lastP.textContent=e,c.minus2P.textContent=e+1,c.minus1P.textContent=e+2,c.activP.textContent=e+3,c.plus1P.textContent=e+4,c.plus2P.textContent=e+5;break;case 2:c.firstP.textContent=1,c.firstP.classList.remove("btn-active"),c.plus2P.classList.remove("btn-active"),c.plus1P.classList.remove("btn-active"),c.minus1P.classList.remove("btn-active"),c.firstP.classList.remove("btn-active"),c.lastP.classList.remove("btn-active"),c.activP.classList.remove("btn-active"),c.lastP.textContent=e,c.minus2P.textContent=e,c.minus2P.classList.add("btn-active"),c.minus1P.textContent=e+1,c.activP.textContent=e+2,c.plus1P.textContent=e+3,c.plus2P.textContent=e+4;break;case 3:c.firstP.textContent=1,c.minus2P.classList.remove("btn-active"),c.plus2P.classList.remove("btn-active"),c.plus1P.classList.remove("btn-active"),c.firstP.classList.remove("btn-active"),c.lastP.classList.remove("btn-active"),c.activP.classList.remove("btn-active"),c.lastP.textContent=e,c.minus2P.textContent=e-1,c.minus1P.classList.add("btn-active"),c.minus1P.textContent=e,c.activP.textContent=e+1,c.plus1P.textContent=e+2,c.plus2P.textContent=e+3;break;case 4:c.firstP.textContent=1,c.minus1P.classList.remove("btn-active"),c.plus2P.classList.remove("btn-active"),c.plus1P.classList.remove("btn-active"),c.minus2P.classList.remove("btn-active"),c.firstP.classList.remove("btn-active"),c.activP.classList.remove("btn-active"),c.lastP.textContent=e,c.minus2P.textContent=e-2,c.activP.classList.add("btn-active"),c.minus1P.textContent=e-1,c.activP.textContent=e,c.plus1P.textContent=e+1,c.plus2P.textContent=e+2;break;case 5:c.firstP.textContent=1,c.activP.classList.remove("btn-active"),c.plus2P.classList.remove("btn-active"),c.minus1P.classList.remove("btn-active"),c.minus2P.classList.remove("btn-active"),c.firstP.classList.remove("btn-active"),c.lastP.textContent=e,c.minus2P.textContent=e-3,c.plus1P.classList.add("btn-active"),c.minus1P.textContent=e-2,c.activP.textContent=e-1,c.plus1P.textContent=e,c.plus2P.textContent=e+1;break;case 6:c.firstP.textContent=1,c.plus1P.classList.remove("btn-active"),c.minus1P.classList.remove("btn-active"),c.minus2P.classList.remove("btn-active"),c.firstP.classList.remove("btn-active"),c.activP.classList.remove("btn-active"),c.lastP.textContent=e,c.minus2P.textContent=e-4,c.plus2P.classList.add("btn-active"),c.minus1P.textContent=e-3,c.activP.textContent=e-2,c.plus1P.textContent=e-1,c.plus2P.textContent=e;break;default:c.firstP.textContent=1,c.plus2P.classList.remove("btn-active"),c.plus1P.classList.remove("btn-active"),c.minus1P.classList.remove("btn-active"),c.minus2P.classList.remove("btn-active"),c.firstP.classList.remove("btn-active"),c.lastP.classList.remove("btn-active"),c.activP.classList.add("btn-active"),c.plusQu.classList.remove("btn-active"),c.minusQu.classList.remove("btn-active"),c.lastP.textContent=s,c.minus2P.textContent=s-2,c.minus1P.textContent=s-1,c.activP.textContent=s,c.plus1P.textContent=s+1,c.plus2P.textContent=s+2}switch(s){case 0:c.containerPag.classList.add("visually-hidden");break;case 1:c.plus2P.classList.add("visually-hidden"),c.plus1P.classList.add("visually-hidden"),c.minus1P.classList.add("visually-hidden"),c.minus2P.classList.add("visually-hidden"),c.lastP.classList.add("visually-hidden"),c.activP.classList.add("visually-hidden"),c.minusT.classList.add("visually-hidden"),c.plusT.classList.add("visually-hidden"),c.minusQu.classList.add("visually-hidden"),c.plusQu.classList.add("visually-hidden");break;case 2:c.plus2P.classList.add("visually-hidden"),c.plus1P.classList.add("visually-hidden"),c.minus1P.classList.add("visually-hidden"),c.minus2P.classList.remove("visually-hidden"),c.lastP.classList.add("visually-hidden"),c.activP.classList.add("visually-hidden"),c.minusT.classList.add("visually-hidden"),c.plusT.classList.add("visually-hidden"),c.minusQu.classList.add("visually-hidden"),c.plusQu.classList.add("visually-hidden");break;case 3:c.plus2P.classList.add("visually-hidden"),c.plus1P.classList.add("visually-hidden"),c.minus1P.classList.remove("visually-hidden"),c.minus2P.classList.remove("visually-hidden"),c.lastP.classList.add("visually-hidden"),c.activP.classList.add("visually-hidden"),c.minusT.classList.add("visually-hidden"),c.plusT.classList.add("visually-hidden"),c.minusQu.classList.add("visually-hidden"),c.plusQu.classList.add("visually-hidden");break;case 4:c.plus2P.classList.add("visually-hidden"),c.plus1P.classList.add("visually-hidden"),c.minus1P.classList.remove("visually-hidden"),c.minus2P.classList.remove("visually-hidden"),c.lastP.classList.remove("visually-hidden"),c.activP.classList.add("visually-hidden"),c.minusT.classList.add("visually-hidden"),c.plusT.classList.add("visually-hidden"),c.minusQu.classList.remove("visually-hidden"),c.plusQu.classList.remove("visually-hidden");break;case 5:c.plus2P.classList.add("visually-hidden"),c.plus1P.classList.add("visually-hidden"),c.minus1P.classList.remove("visually-hidden"),c.minus2P.classList.remove("visually-hidden"),c.lastP.classList.remove("visually-hidden"),c.activP.classList.remove("visually-hidden"),c.minusT.classList.add("visually-hidden"),c.plusT.classList.add("visually-hidden"),c.minusQu.classList.remove("visually-hidden"),c.plusQu.classList.remove("visually-hidden");break;case 6:c.plus2P.classList.add("visually-hidden"),c.plus1P.classList.remove("visually-hidden"),c.minus1P.classList.remove("visually-hidden"),c.minus2P.classList.remove("visually-hidden"),c.lastP.classList.remove("visually-hidden"),c.activP.classList.remove("visually-hidden"),c.minusT.classList.add("visually-hidden"),c.plusT.classList.add("visually-hidden"),c.minusQu.classList.remove("visually-hidden"),c.plusQu.classList.remove("visually-hidden");break;default:c.plus2P.classList.remove("visually-hidden"),c.plus1P.classList.remove("visually-hidden"),c.minus1P.classList.remove("visually-hidden"),c.minus2P.classList.remove("visually-hidden"),c.lastP.classList.remove("visually-hidden"),c.activP.classList.remove("visually-hidden"),c.minusQu.classList.remove("visually-hidden"),c.plusQu.classList.remove("visually-hidden"),c.minusT.classList.remove("visually-hidden"),c.plusT.classList.remove("visually-hidden")}}let P=[],b=1,p=1,y=0,h=0;function f(s){const e=s.target;if("BUTTON"===e.nodeName)if(p=Number(e.textContent),!p||p<0)p=1;else{if(d.classList.contains("main-btn--library-active")){if(P=JSON.parse(v),b=Number.parseInt(P.length/20+1),p>b&&(p=b),1===P.length&&(u.innerHTML=r(P)),1===p){const s=P.slice(0,20);return u.innerHTML=r(s),void L(b,p)}y=20*p-20,h=20*p;const s=P.slice(y,h);u.innerHTML=r(s),L(b,p)}if(o.classList.contains("main-btn--library-active")){P=JSON.parse(m),b=Number.parseInt(P.length/20+1),p>b&&(p=b),1===P.length&&(u.innerHTML=r(P)),y=20*p-20,h=20*p;const s=P.slice(y,h);if(u.innerHTML=r(s),1===p){const s=P.slice(0,20);return u.innerHTML=r(s),void L(b,p)}L(b,p)}e.blur()}}const g=document.querySelector(".js-films-list"),x=document.querySelector(".js-btn-library-watched"),T=document.querySelector(".js-btn-library-queue"),C=localStorage.getItem("watchedMovies"),S=localStorage.getItem("queueMovies");let H=[],M=0;window.onload=function(){if(!S)return g.innerHTML='<div style="height: 500px; font-size: 24px">Add films to your queue!</div>',void L(0,0);g.innerHTML=r(JSON.parse(S)),H=JSON.parse(S),M=Number.parseInt(H.length/20+1),L(M,1)}(),T.addEventListener("click",(()=>{if(x.classList.remove("main-btn--library-active"),T.classList.add("main-btn--library-active"),!S)return g.innerHTML='<div style="height: 500px; font-size: 24px">Add films to your queue!</div>',void L(0,0);g.innerHTML=r(JSON.parse(S)),H=JSON.parse(S),M=Number.parseInt(H.length/20+1),L(M,1)})),x.addEventListener("click",(()=>{if(T.classList.remove("main-btn--library-active"),x.classList.add("main-btn--library-active"),!C)return g.innerHTML='<div style="height: 500px; font-size: 24px">Add films to your watched!</div>',void L(0,0);g.innerHTML=r(JSON.parse(C)),H=JSON.parse(C),M=Number.parseInt(H.length/20+1),L(M,1)}));
//# sourceMappingURL=library.93b8ec9a.js.map
