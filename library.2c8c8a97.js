!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return i[e]=o,r.call(o.exports,o,o.exports),o.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,i){n[e]=i},e.parcelRequired7c6=r);var o=r("8u0gY");r("exC6H");var t=r("5xtVg");r("4F07H"),r("9jVQT");var a=r("j1lrD"),l=r("fkNhc"),d=r("eY4ce"),s=r("iNWLi");t=r("5xtVg");new(0,a.Spinner);const u=document.querySelector(".js-sign-out-lib"),f=(0,d.getFirebaseConfig)(),c=new(0,s.FireBaseService);u.addEventListener("click",(()=>{c.signOutUser()})),(0,l.initializeApp)(f),c.initFirebaseAuth(),(0,t.toFirebase)(c),window.onload=(0,o.onLoadLibrary)(c)}();
//# sourceMappingURL=library.2c8c8a97.js.map