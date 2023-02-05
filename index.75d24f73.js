!function(){function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}var i={},r={},s=e.parcelRequired7c6;null==s&&((s=function(t){if(t in i)return i[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){r[t]=e},e.parcelRequired7c6=s),s.register("iE7OH",(function(e,n){var i,r;t(e.exports,"register",(function(){return i}),(function(t){return i=t})),t(e.exports,"resolve",(function(){return r}),(function(t){return r=t}));var s={};i=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)s[e[n]]=t[e[n]]},r=function(t){var e=s[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),s.register("aNJCr",(function(e,n){var i;t(e.exports,"getBundleURL",(function(){return i}),(function(t){return i=t}));var r={};function s(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(t){var e=r[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return s(t[2])}return"/"}(),r[t]=e),e}})),s("iE7OH").register(JSON.parse('{"EVgbq":"index.75d24f73.js","hBMgR":"backdrop-kino.27c72f8a.jpg","4O56q":"movie-pic.fe810275.jpg","lk5QZ":"index.b4908166.css"}'));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var o,a,c,l=o={};function u(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}function d(t){if(a===setTimeout)return setTimeout(t,0);if((a===u||!a)&&setTimeout)return a=setTimeout,setTimeout(t,0);try{return a(t,0)}catch(e){try{return a.call(null,t,0)}catch(e){return a.call(this,t,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:u}catch(t){a=u}try{c="function"==typeof clearTimeout?clearTimeout:h}catch(t){c=h}}();var f,p=[],m=!1,g=-1;function y(){m&&f&&(m=!1,f.length?p=f.concat(p):g=-1,p.length&&v())}function v(){if(!m){var t=d(y);m=!0;for(var e=p.length;e;){for(f=p,p=[];++g<e;)f&&f[g].run();g=-1,e=p.length}f=null,m=!1,function(t){if(c===clearTimeout)return clearTimeout(t);if((c===h||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(t);try{c(t)}catch(e){try{return c.call(null,t)}catch(e){return c.call(this,t)}}}(t)}}function b(t,e){this.fun=t,this.array=e}function w(){}l.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new b(t,e)),1!==p.length||m||d(v)},b.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=w,l.addListener=w,l.once=w,l.off=w,l.removeListener=w,l.removeAllListeners=w,l.emit=w,l.prependListener=w,l.prependOnceListener=w,l.listeners=function(t){return[]},l.binding=function(t){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(t){throw new Error("process.chdir is not supported")},l.umask=function(){return 0};const x=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},k={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,l=r>>2,u=(3&r)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(x(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==o||null==a)throw Error();const c=r<<2|s>>4;if(i.push(c),64!==o){const t=s<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},E=function(t){return function(t){const e=x(t);return k.encodeByteArray(e,!0)}(t).replace(/\./g,"")},T=function(t){try{return k.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,N=()=>{try{return I()||(()=>{if(void 0===o||void 0===o.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&T(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},_=t=>{var e,n;return null===(n=null===(e=N())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},C=t=>{const e=_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},S=()=>{var t;return null===(t=N())||void 0===t?void 0:t.config},A=t=>{var e;return null===(e=N())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[E(JSON.stringify({alg:"none",type:"JWT"})),E(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function D(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function P(){const t=O();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function M(){try{return"object"==typeof indexedDB}catch(t){return!1}}class U extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,U.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,F.prototype.create)}}class F{create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(B,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new U(i,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const B=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function j(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(V(n)&&V(s)){if(!j(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function V(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function W(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function H(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t,e){const n=new K(t,e);return n.subscribe.bind(n)}class K{next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=G),void 0===i.error&&(i.error=G),void 0===i.complete&&(i.complete=G);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}}function G(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(t){return t&&t._delegate?t._delegate:t}class Q{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new L;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:J})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=J){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=J){return this.instances.has(t)}getOptions(t=J){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===J?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t=J){return this.component?this.component.multipleInstances?t:J:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Z{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Y(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt=[];var et,nt;(nt=et||(et={}))[nt.DEBUG=0]="DEBUG",nt[nt.VERBOSE=1]="VERBOSE",nt[nt.INFO=2]="INFO",nt[nt.WARN=3]="WARN",nt[nt.ERROR=4]="ERROR",nt[nt.SILENT=5]="SILENT";const it={debug:et.DEBUG,verbose:et.VERBOSE,info:et.INFO,warn:et.WARN,error:et.ERROR,silent:et.SILENT},rt=et.INFO,st={[et.DEBUG]:"log",[et.VERBOSE]:"log",[et.INFO]:"info",[et.WARN]:"warn",[et.ERROR]:"error"},ot=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=st[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class at{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in et))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?it[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,et.DEBUG,...t),this._logHandler(this,et.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,et.VERBOSE,...t),this._logHandler(this,et.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,et.INFO,...t),this._logHandler(this,et.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,et.WARN,...t),this._logHandler(this,et.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,et.ERROR,...t),this._logHandler(this,et.ERROR,...t)}constructor(t){this.name=t,this._logLevel=rt,this._logHandler=ot,this._userLogHandler=null,tt.push(this)}}const ct=(t,e)=>e.some((e=>t instanceof e));let lt,ut;const ht=new WeakMap,dt=new WeakMap,ft=new WeakMap,pt=new WeakMap,mt=new WeakMap;let gt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return dt.get(t);if("objectStoreNames"===e)return t.objectStoreNames||ft.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bt(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function yt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ut||(ut=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(wt(this),e),bt(ht.get(this))}:function(...e){return bt(t.apply(wt(this),e))}:function(e,...n){const i=t.call(wt(this),e,...n);return ft.set(i,e.sort?e.sort():[e]),bt(i)}}function vt(t){return"function"==typeof t?yt(t):(t instanceof IDBTransaction&&function(t){if(dt.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));dt.set(t,e)}(t),ct(t,lt||(lt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,gt):t)}function bt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(bt(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&ht.set(e,t)})).catch((()=>{})),mt.set(e,t),e}(t);if(pt.has(t))return pt.get(t);const e=vt(t);return e!==t&&(pt.set(t,e),mt.set(e,t)),e}const wt=t=>mt.get(t);function xt(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=bt(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(bt(o.result),t.oldVersion,t.newVersion,bt(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const kt=["get","getKey","getAll","getAllKeys","count"],Et=["put","add","delete","clear"],Tt=new Map;function It(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Tt.get(e))return Tt.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Et.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!kt.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return Tt.set(e,s),s}gt=(t=>({...t,get:(e,n,i)=>It(e,n)||t.get(e,n,i),has:(e,n)=>!!It(e,n)||t.has(e,n)}))(gt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const _t="@firebase/app",Ct="0.9.3",St=new at("@firebase/app"),At="[DEFAULT]",Lt={[_t]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Rt=new Map,Ot=new Map;function Dt(t,e){try{t.container.addComponent(e)}catch(n){St.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pt(t){const e=t.name;if(Ot.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;Ot.set(e,t);for(const e of Rt.values())Dt(e,t);return!0}function Mt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ut=new F("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Q("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="9.17.1";function zt(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:At,automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw Ut.create("bad-app-name",{appName:String(r)});if(n||(n=S()),!n)throw Ut.create("no-options");const s=Rt.get(r);if(s){if(j(n,s.options)&&j(i,s.config))return s;throw Ut.create("duplicate-app",{appName:r})}const o=new Z(r);for(const t of Ot.values())o.addComponent(t);const a=new Ft(n,i,o);return Rt.set(r,a),a}function jt(t=At){const e=Rt.get(t);if(!e&&t===At)return zt();if(!e)throw Ut.create("no-app",{appName:t});return e}function Vt(t,e,n){var i;let r=null!==(i=Lt[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void St.warn(t.join(" "))}Pt(new Q(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qt="firebase-heartbeat-database",Wt=1,Ht="firebase-heartbeat-store";let $t=null;function Kt(){return $t||($t=xt(qt,Wt,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(Ht)}}).catch((t=>{throw Ut.create("idb-open",{originalErrorMessage:t.message})}))),$t}async function Gt(t,e){try{const n=(await Kt()).transaction(Ht,"readwrite"),i=n.objectStore(Ht);return await i.put(e,Xt(t)),n.done}catch(t){if(t instanceof U)St.warn(t.message);else{const e=Ut.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});St.warn(e.message)}}}function Xt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=1024;class Jt{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Yt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Yt(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=Qt){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),te(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),te(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=E(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Zt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function Yt(){return(new Date).toISOString().substring(0,10)}class Zt{async runIndexedDBEnvironmentCheck(){return!!M()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await Kt()).transaction(Ht).objectStore(Ht).get(Xt(t))}catch(t){if(t instanceof U)St.warn(t.message);else{const e=Ut.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});St.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Gt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Gt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function te(t){return E(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;ee="",Pt(new Q("platform-logger",(t=>new Nt(t)),"PRIVATE")),Pt(new Q("heartbeat",(t=>new Jt(t)),"PRIVATE")),Vt(_t,Ct,ee),Vt(_t,Ct,"esm2017"),Vt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Vt("firebase","9.17.1","app");const ne={apiKey:"AIzaSyCf4tLspRq68Ljv4DBPIn8lepUq3CBW6kQ",authDomain:"filmoteka-bl6.firebaseapp.com",projectId:"filmoteka-bl6",storageBucket:"filmoteka-bl6.appspot.com",messagingSenderId:"513518233245",appId:"1:513518233245:web:28560022e0c985e2f09674",measurementId:"G-6CEWHL9KG0"};function ie(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function re(t,e){return e.get?e.get.call(t):e.value}function se(t,e){return re(t,ie(t,e,"get"))}function oe(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function ae(t,e,n){oe(t,e),e.set(t,n)}function ce(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}function le(t,e,n){return ce(t,ie(t,e,"set"),n),n}function ue(t,e){return function(){return t.apply(e,arguments)}}const{toString:he}=Object.prototype,{getPrototypeOf:de}=Object,fe=(pe=Object.create(null),t=>{const e=he.call(t);return pe[e]||(pe[e]=e.slice(8,-1).toLowerCase())});var pe;const me=t=>(t=t.toLowerCase(),e=>fe(e)===t),ge=t=>e=>typeof e===t,{isArray:ye}=Array,ve=ge("undefined");const be=me("ArrayBuffer");const we=ge("string"),xe=ge("function"),ke=ge("number"),Ee=t=>null!==t&&"object"==typeof t,Te=t=>{if("object"!==fe(t))return!1;const e=de(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},Ie=me("Date"),Ne=me("File"),_e=me("Blob"),Ce=me("FileList"),Se=me("URLSearchParams");function Ae(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let i,r;if("object"!=typeof t&&(t=[t]),ye(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),s=r.length;let o;for(i=0;i<s;i++)o=r[i],e.call(null,t[o],o,t)}}function Le(t,e){e=e.toLowerCase();const n=Object.keys(t);let i,r=n.length;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const Re="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:e,Oe=t=>!ve(t)&&t!==Re;const De=(Pe="undefined"!=typeof Uint8Array&&de(Uint8Array),t=>Pe&&t instanceof Pe);var Pe;const Me=me("HTMLFormElement"),Ue=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Fe=me("RegExp"),Be=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Ae(n,((n,r)=>{!1!==e(n,r,t)&&(i[r]=n)})),Object.defineProperties(t,i)},ze="abcdefghijklmnopqrstuvwxyz",je="0123456789",Ve={DIGIT:je,ALPHA:ze,ALPHA_DIGIT:ze+ze.toUpperCase()+je};var qe={isArray:ye,isArrayBuffer:be,isBuffer:function(t){return null!==t&&!ve(t)&&null!==t.constructor&&!ve(t.constructor)&&xe(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{const e="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||he.call(t)===e||xe(t.toString)&&t.toString()===e)},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&be(t.buffer),e},isString:we,isNumber:ke,isBoolean:t=>!0===t||!1===t,isObject:Ee,isPlainObject:Te,isUndefined:ve,isDate:Ie,isFile:Ne,isBlob:_e,isRegExp:Fe,isFunction:xe,isStream:t=>Ee(t)&&xe(t.pipe),isURLSearchParams:Se,isTypedArray:De,isFileList:Ce,forEach:Ae,merge:function t(){const{caseless:e}=Oe(this)&&this||{},n={},i=(i,r)=>{const s=e&&Le(n,r)||r;Te(n[s])&&Te(i)?n[s]=t(n[s],i):Te(i)?n[s]=t({},i):ye(i)?n[s]=i.slice():n[s]=i};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&Ae(arguments[t],i);return n},extend:(t,e,n,{allOwnKeys:i}={})=>(Ae(e,((e,i)=>{n&&xe(e)?t[i]=ue(e,n):t[i]=e}),{allOwnKeys:i}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},null==t)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],i&&!i(o,t,e)||a[o]||(e[o]=t[o],a[o]=!0);t=!1!==n&&de(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:fe,kindOfTest:me,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return-1!==i&&i===n},toArray:t=>{if(!t)return null;if(ye(t))return t;let e=t.length;if(!ke(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=n.next())&&!i.done;){const n=i.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const i=[];for(;null!==(n=t.exec(e));)i.push(n);return i},isHTMLForm:Me,hasOwnProperty:Ue,hasOwnProp:Ue,reduceDescriptors:Be,freezeMethods:t=>{Be(t,((e,n)=>{if(xe(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=t[n];xe(i)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},i=t=>{t.forEach((t=>{n[t]=!0}))};return ye(t)?i(t):i(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:Le,global:Re,isContextDefined:Oe,ALPHABET:Ve,generateString:(t=16,e=Ve.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n},isSpecCompliantForm:function(t){return!!(t&&xe(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{const e=new Array(10),n=(t,i)=>{if(Ee(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[i]=t;const r=ye(t)?[]:{};return Ae(t,((t,e)=>{const s=n(t,i+1);!ve(s)&&(r[e]=s)})),e[i]=void 0,r}}return t};return n(t,0)}};function We(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}qe.inherits(We,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:qe.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const He=We.prototype,$e={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{$e[t]={value:t}})),Object.defineProperties(We,$e),Object.defineProperty(He,"isAxiosError",{value:!0}),We.from=(t,e,n,i,r,s)=>{const o=Object.create(He);return qe.toFlatObject(t,o,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),We.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};var Ke,Ge,Xe,Qe=We,Je=null;Ge=function(t){var e,n,i=an(t),r=i[0],s=i[1],o=new nn(function(t,e,n){return 3*(e+n)/4-n}(0,r,s)),a=0,c=s>0?r-4:r;for(n=0;n<c;n+=4)e=en[t.charCodeAt(n)]<<18|en[t.charCodeAt(n+1)]<<12|en[t.charCodeAt(n+2)]<<6|en[t.charCodeAt(n+3)],o[a++]=e>>16&255,o[a++]=e>>8&255,o[a++]=255&e;2===s&&(e=en[t.charCodeAt(n)]<<2|en[t.charCodeAt(n+1)]>>4,o[a++]=255&e);1===s&&(e=en[t.charCodeAt(n)]<<10|en[t.charCodeAt(n+1)]<<4|en[t.charCodeAt(n+2)]>>2,o[a++]=e>>8&255,o[a++]=255&e);return o},Xe=function(t){for(var e,n=t.length,i=n%3,r=[],s=16383,o=0,a=n-i;o<a;o+=s)r.push(cn(t,o,o+s>a?a:o+s));1===i?(e=t[n-1],r.push(tn[e>>2]+tn[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],r.push(tn[e>>10]+tn[e>>4&63]+tn[e<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var Ye,Ze,tn=[],en=[],nn="undefined"!=typeof Uint8Array?Uint8Array:Array,rn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",sn=0,on=rn.length;sn<on;++sn)tn[sn]=rn[sn],en[rn.charCodeAt(sn)]=sn;function an(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function cn(t,e,n){for(var i,r,s=[],o=e;o<n;o+=3)i=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),s.push(tn[(r=i)>>18&63]+tn[r>>12&63]+tn[r>>6&63]+tn[63&r]);return s.join("")}en["-".charCodeAt(0)]=62,en["_".charCodeAt(0)]=63,Ye=function(t,e,n,i,r){var s,o,a=8*r-i-1,c=(1<<a)-1,l=c>>1,u=-7,h=n?r-1:0,d=n?-1:1,f=t[e+h];for(h+=d,s=f&(1<<-u)-1,f>>=-u,u+=a;u>0;s=256*s+t[e+h],h+=d,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=i;u>0;o=256*o+t[e+h],h+=d,u-=8);if(0===s)s=1-l;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,i),s-=l}return(f?-1:1)*o*Math.pow(2,s-i)},Ze=function(t,e,n,i,r,s){var o,a,c,l=8*s-r-1,u=(1<<l)-1,h=u>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:s-1,p=i?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=u):(o=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-o))<1&&(o--,c*=2),(e+=o+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(o++,c/=2),o+h>=u?(a=0,o=u):o+h>=1?(a=(e*c-1)*Math.pow(2,r),o+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,r),o=0));r>=8;t[n+f]=255&a,f+=p,a/=256,r-=8);for(o=o<<r|a,l+=r;l>0;t[n+f]=255&o,f+=p,o/=256,l-=8);t[n+f-p]|=128*m};const ln="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;Ke=dn;const un=2147483647;function hn(t){if(t>un)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,dn.prototype),e}function dn(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return mn(t)}return fn(t,e,n)}function fn(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!dn.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|bn(t,e);let i=hn(n);const r=i.write(t,e);r!==n&&(i=i.slice(0,r));return i}(t,e);if(ArrayBuffer.isView(t))return function(t){if(Zn(t,Uint8Array)){const e=new Uint8Array(t);return yn(e.buffer,e.byteOffset,e.byteLength)}return gn(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Zn(t,ArrayBuffer)||t&&Zn(t.buffer,ArrayBuffer))return yn(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(Zn(t,SharedArrayBuffer)||t&&Zn(t.buffer,SharedArrayBuffer)))return yn(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return dn.from(i,e,n);const r=function(t){if(dn.isBuffer(t)){const e=0|vn(t.length),n=hn(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||ti(t.length)?hn(0):gn(t);if("Buffer"===t.type&&Array.isArray(t.data))return gn(t.data)}(t);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return dn.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function pn(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function mn(t){return pn(t),hn(t<0?0:0|vn(t))}function gn(t){const e=t.length<0?0:0|vn(t.length),n=hn(e);for(let i=0;i<e;i+=1)n[i]=255&t[i];return n}function yn(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(i,dn.prototype),i}function vn(t){if(t>=un)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+un.toString(16)+" bytes");return 0|t}function bn(t,e){if(dn.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Zn(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Qn(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Jn(t).length;default:if(r)return i?-1:Qn(t).length;e=(""+e).toLowerCase(),r=!0}}function wn(t,e,n){let i=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return Dn(this,e,n);case"utf8":case"utf-8":return An(this,e,n);case"ascii":return Rn(this,e,n);case"latin1":case"binary":return On(this,e,n);case"base64":return Sn(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Pn(this,e,n);default:if(i)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function xn(t,e,n){const i=t[e];t[e]=t[n],t[n]=i}function kn(t,e,n,i,r){if(0===t.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),ti(n=+n)&&(n=r?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(r)return-1;n=t.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof e&&(e=dn.from(e,i)),dn.isBuffer(e))return 0===e.length?-1:En(t,e,n,i,r);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):En(t,[e],n,i,r);throw new TypeError("val must be string, number or Buffer")}function En(t,e,n,i,r){let s,o=1,a=t.length,c=e.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||e.length<2)return-1;o=2,a/=2,c/=2,n/=2}function l(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(r){let i=-1;for(s=n;s<a;s++)if(l(t,s)===l(e,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===c)return i*o}else-1!==i&&(s-=s-i),i=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let i=0;i<c;i++)if(l(t,s+i)!==l(e,i)){n=!1;break}if(n)return s}return-1}function Tn(t,e,n,i){n=Number(n)||0;const r=t.length-n;i?(i=Number(i))>r&&(i=r):i=r;const s=e.length;let o;for(i>s/2&&(i=s/2),o=0;o<i;++o){const i=parseInt(e.substr(2*o,2),16);if(ti(i))return o;t[n+o]=i}return o}function In(t,e,n,i){return Yn(Qn(e,t.length-n),t,n,i)}function Nn(t,e,n,i){return Yn(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,i)}function _n(t,e,n,i){return Yn(Jn(e),t,n,i)}function Cn(t,e,n,i){return Yn(function(t,e){let n,i,r;const s=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=t.charCodeAt(o),i=n>>8,r=n%256,s.push(r),s.push(i);return s}(e,t.length-n),t,n,i)}function Sn(t,e,n){return 0===e&&n===t.length?Xe(t):Xe(t.slice(e,n))}function An(t,e,n){n=Math.min(t.length,n);const i=[];let r=e;for(;r<n;){const e=t[r];let s=null,o=e>239?4:e>223?3:e>191?2:1;if(r+o<=n){let n,i,a,c;switch(o){case 1:e<128&&(s=e);break;case 2:n=t[r+1],128==(192&n)&&(c=(31&e)<<6|63&n,c>127&&(s=c));break;case 3:n=t[r+1],i=t[r+2],128==(192&n)&&128==(192&i)&&(c=(15&e)<<12|(63&n)<<6|63&i,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=t[r+1],i=t[r+2],a=t[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(c=(15&e)<<18|(63&n)<<12|(63&i)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(t){const e=t.length;if(e<=Ln)return String.fromCharCode.apply(String,t);let n="",i=0;for(;i<e;)n+=String.fromCharCode.apply(String,t.slice(i,i+=Ln));return n}(i)}dn.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),dn.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(dn.prototype,"parent",{enumerable:!0,get:function(){if(dn.isBuffer(this))return this.buffer}}),Object.defineProperty(dn.prototype,"offset",{enumerable:!0,get:function(){if(dn.isBuffer(this))return this.byteOffset}}),dn.poolSize=8192,dn.from=function(t,e,n){return fn(t,e,n)},Object.setPrototypeOf(dn.prototype,Uint8Array.prototype),Object.setPrototypeOf(dn,Uint8Array),dn.alloc=function(t,e,n){return function(t,e,n){return pn(t),t<=0?hn(t):void 0!==e?"string"==typeof n?hn(t).fill(e,n):hn(t).fill(e):hn(t)}(t,e,n)},dn.allocUnsafe=function(t){return mn(t)},dn.allocUnsafeSlow=function(t){return mn(t)},dn.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==dn.prototype},dn.compare=function(t,e){if(Zn(t,Uint8Array)&&(t=dn.from(t,t.offset,t.byteLength)),Zn(e,Uint8Array)&&(e=dn.from(e,e.offset,e.byteLength)),!dn.isBuffer(t)||!dn.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,i=e.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(t[r]!==e[r]){n=t[r],i=e[r];break}return n<i?-1:i<n?1:0},dn.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},dn.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return dn.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const i=dn.allocUnsafe(e);let r=0;for(n=0;n<t.length;++n){let e=t[n];if(Zn(e,Uint8Array))r+e.length>i.length?(dn.isBuffer(e)||(e=dn.from(e)),e.copy(i,r)):Uint8Array.prototype.set.call(i,e,r);else{if(!dn.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(i,r)}r+=e.length}return i},dn.byteLength=bn,dn.prototype._isBuffer=!0,dn.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)xn(this,e,e+1);return this},dn.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)xn(this,e,e+3),xn(this,e+1,e+2);return this},dn.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)xn(this,e,e+7),xn(this,e+1,e+6),xn(this,e+2,e+5),xn(this,e+3,e+4);return this},dn.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?An(this,0,t):wn.apply(this,arguments)},dn.prototype.toLocaleString=dn.prototype.toString,dn.prototype.equals=function(t){if(!dn.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===dn.compare(this,t)},dn.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},ln&&(dn.prototype[ln]=dn.prototype.inspect),dn.prototype.compare=function(t,e,n,i,r){if(Zn(t,Uint8Array)&&(t=dn.from(t,t.offset,t.byteLength)),!dn.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),e<0||n>t.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&e>=n)return 0;if(i>=r)return-1;if(e>=n)return 1;if(this===t)return 0;let s=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(e>>>=0);const a=Math.min(s,o),c=this.slice(i,r),l=t.slice(e,n);for(let t=0;t<a;++t)if(c[t]!==l[t]){s=c[t],o=l[t];break}return s<o?-1:o<s?1:0},dn.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},dn.prototype.indexOf=function(t,e,n){return kn(this,t,e,n,!0)},dn.prototype.lastIndexOf=function(t,e,n){return kn(this,t,e,n,!1)},dn.prototype.write=function(t,e,n,i){if(void 0===e)i="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)i=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-e;if((void 0===n||n>r)&&(n=r),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return Tn(this,t,e,n);case"utf8":case"utf-8":return In(this,t,e,n);case"ascii":case"latin1":case"binary":return Nn(this,t,e,n);case"base64":return _n(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Cn(this,t,e,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},dn.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const Ln=4096;function Rn(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(127&t[r]);return i}function On(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(t[r]);return i}function Dn(t,e,n){const i=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=e;i<n;++i)r+=ei[t[i]];return r}function Pn(t,e,n){const i=t.slice(e,n);let r="";for(let t=0;t<i.length-1;t+=2)r+=String.fromCharCode(i[t]+256*i[t+1]);return r}function Mn(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function Un(t,e,n,i,r,s){if(!dn.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<s)throw new RangeError('"value" argument is out of bounds');if(n+i>t.length)throw new RangeError("Index out of range")}function Fn(t,e,n,i,r){$n(e,i,r,t,n,7);let s=Number(e&BigInt(4294967295));t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,n}function Bn(t,e,n,i,r){$n(e,i,r,t,n,7);let s=Number(e&BigInt(4294967295));t[n+7]=s,s>>=8,t[n+6]=s,s>>=8,t[n+5]=s,s>>=8,t[n+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=o,o>>=8,t[n+2]=o,o>>=8,t[n+1]=o,o>>=8,t[n]=o,n+8}function zn(t,e,n,i,r,s){if(n+i>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function jn(t,e,n,i,r){return e=+e,n>>>=0,r||zn(t,0,n,4),Ze(t,e,n,i,23,4),n+4}function Vn(t,e,n,i,r){return e=+e,n>>>=0,r||zn(t,0,n,8),Ze(t,e,n,i,52,8),n+8}dn.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const i=this.subarray(t,e);return Object.setPrototypeOf(i,dn.prototype),i},dn.prototype.readUintLE=dn.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||Mn(t,e,this.length);let i=this[t],r=1,s=0;for(;++s<e&&(r*=256);)i+=this[t+s]*r;return i},dn.prototype.readUintBE=dn.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||Mn(t,e,this.length);let i=this[t+--e],r=1;for(;e>0&&(r*=256);)i+=this[t+--e]*r;return i},dn.prototype.readUint8=dn.prototype.readUInt8=function(t,e){return t>>>=0,e||Mn(t,1,this.length),this[t]},dn.prototype.readUint16LE=dn.prototype.readUInt16LE=function(t,e){return t>>>=0,e||Mn(t,2,this.length),this[t]|this[t+1]<<8},dn.prototype.readUint16BE=dn.prototype.readUInt16BE=function(t,e){return t>>>=0,e||Mn(t,2,this.length),this[t]<<8|this[t+1]},dn.prototype.readUint32LE=dn.prototype.readUInt32LE=function(t,e){return t>>>=0,e||Mn(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},dn.prototype.readUint32BE=dn.prototype.readUInt32BE=function(t,e){return t>>>=0,e||Mn(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},dn.prototype.readBigUInt64LE=ni((function(t){Kn(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Gn(t,this.length-8);const i=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,r=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),dn.prototype.readBigUInt64BE=ni((function(t){Kn(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Gn(t,this.length-8);const i=e*2**24+65536*this[++t]+256*this[++t]+this[++t],r=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),dn.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||Mn(t,e,this.length);let i=this[t],r=1,s=0;for(;++s<e&&(r*=256);)i+=this[t+s]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*e)),i},dn.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||Mn(t,e,this.length);let i=e,r=1,s=this[t+--i];for(;i>0&&(r*=256);)s+=this[t+--i]*r;return r*=128,s>=r&&(s-=Math.pow(2,8*e)),s},dn.prototype.readInt8=function(t,e){return t>>>=0,e||Mn(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},dn.prototype.readInt16LE=function(t,e){t>>>=0,e||Mn(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},dn.prototype.readInt16BE=function(t,e){t>>>=0,e||Mn(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},dn.prototype.readInt32LE=function(t,e){return t>>>=0,e||Mn(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},dn.prototype.readInt32BE=function(t,e){return t>>>=0,e||Mn(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},dn.prototype.readBigInt64LE=ni((function(t){Kn(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Gn(t,this.length-8);const i=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),dn.prototype.readBigInt64BE=ni((function(t){Kn(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Gn(t,this.length-8);const i=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(i)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),dn.prototype.readFloatLE=function(t,e){return t>>>=0,e||Mn(t,4,this.length),Ye(this,t,!0,23,4)},dn.prototype.readFloatBE=function(t,e){return t>>>=0,e||Mn(t,4,this.length),Ye(this,t,!1,23,4)},dn.prototype.readDoubleLE=function(t,e){return t>>>=0,e||Mn(t,8,this.length),Ye(this,t,!0,52,8)},dn.prototype.readDoubleBE=function(t,e){return t>>>=0,e||Mn(t,8,this.length),Ye(this,t,!1,52,8)},dn.prototype.writeUintLE=dn.prototype.writeUIntLE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){Un(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=1,s=0;for(this[e]=255&t;++s<n&&(r*=256);)this[e+s]=t/r&255;return e+n},dn.prototype.writeUintBE=dn.prototype.writeUIntBE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){Un(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=n-1,s=1;for(this[e+r]=255&t;--r>=0&&(s*=256);)this[e+r]=t/s&255;return e+n},dn.prototype.writeUint8=dn.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||Un(this,t,e,1,255,0),this[e]=255&t,e+1},dn.prototype.writeUint16LE=dn.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||Un(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},dn.prototype.writeUint16BE=dn.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||Un(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},dn.prototype.writeUint32LE=dn.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||Un(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},dn.prototype.writeUint32BE=dn.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||Un(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},dn.prototype.writeBigUInt64LE=ni((function(t,e=0){return Fn(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),dn.prototype.writeBigUInt64BE=ni((function(t,e=0){return Bn(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),dn.prototype.writeIntLE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);Un(this,t,e,n,i-1,-i)}let r=0,s=1,o=0;for(this[e]=255&t;++r<n&&(s*=256);)t<0&&0===o&&0!==this[e+r-1]&&(o=1),this[e+r]=(t/s>>0)-o&255;return e+n},dn.prototype.writeIntBE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);Un(this,t,e,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[e+r]=255&t;--r>=0&&(s*=256);)t<0&&0===o&&0!==this[e+r+1]&&(o=1),this[e+r]=(t/s>>0)-o&255;return e+n},dn.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||Un(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},dn.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||Un(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},dn.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||Un(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},dn.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||Un(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},dn.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||Un(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},dn.prototype.writeBigInt64LE=ni((function(t,e=0){return Fn(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),dn.prototype.writeBigInt64BE=ni((function(t,e=0){return Bn(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),dn.prototype.writeFloatLE=function(t,e,n){return jn(this,t,e,!0,n)},dn.prototype.writeFloatBE=function(t,e,n){return jn(this,t,e,!1,n)},dn.prototype.writeDoubleLE=function(t,e,n){return Vn(this,t,e,!0,n)},dn.prototype.writeDoubleBE=function(t,e,n){return Vn(this,t,e,!1,n)},dn.prototype.copy=function(t,e,n,i){if(!dn.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);const r=i-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,i):Uint8Array.prototype.set.call(t,this.subarray(n,i),e),r},dn.prototype.fill=function(t,e,n,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!dn.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===t.length){const e=t.charCodeAt(0);("utf8"===i&&e<128||"latin1"===i)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let r;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(r=e;r<n;++r)this[r]=t;else{const s=dn.isBuffer(t)?t:dn.from(t,i),o=s.length;if(0===o)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(r=0;r<n-e;++r)this[r+e]=s[r%o]}return this};const qn={};function Wn(t,e,n){qn[t]=class extends n{get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}}}function Hn(t){let e="",n=t.length;const i="-"===t[0]?1:0;for(;n>=i+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function $n(t,e,n,i,r,s){if(t>n||t<e){const i="bigint"==typeof e?"n":"";let r;throw r=s>3?0===e||e===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(s+1)}${i}`:`>= -(2${i} ** ${8*(s+1)-1}${i}) and < 2 ** ${8*(s+1)-1}${i}`:`>= ${e}${i} and <= ${n}${i}`,new qn.ERR_OUT_OF_RANGE("value",r,t)}!function(t,e,n){Kn(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||Gn(e,t.length-(n+1))}(i,r,s)}function Kn(t,e){if("number"!=typeof t)throw new qn.ERR_INVALID_ARG_TYPE(e,"number",t)}function Gn(t,e,n){if(Math.floor(t)!==t)throw Kn(t,n),new qn.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new qn.ERR_BUFFER_OUT_OF_BOUNDS;throw new qn.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}Wn("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),Wn("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),Wn("ERR_OUT_OF_RANGE",(function(t,e,n){let i=`The value of "${t}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=Hn(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=Hn(r)),r+="n"),i+=` It must be ${e}. Received ${r}`,i}),RangeError);const Xn=/[^+/0-9A-Za-z-_]/g;function Qn(t,e){let n;e=e||1/0;const i=t.length;let r=null;const s=[];for(let o=0;o<i;++o){if(n=t.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===i){(e-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(e-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(e-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((e-=1)<0)break;s.push(n)}else if(n<2048){if((e-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function Jn(t){return Ge(function(t){if((t=(t=t.split("=")[0]).trim().replace(Xn,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Yn(t,e,n,i){let r;for(r=0;r<i&&!(r+n>=e.length||r>=t.length);++r)e[r+n]=t[r];return r}function Zn(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function ti(t){return t!=t}const ei=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)e[i+r]=t[n]+t[r]}return e}();function ni(t){return"undefined"==typeof BigInt?ii:t}function ii(){throw new Error("BigInt not supported")}var ri=Ke;function si(t){return qe.isPlainObject(t)||qe.isArray(t)}function oi(t){return qe.endsWith(t,"[]")?t.slice(0,-2):t}function ai(t,e,n){return t?t.concat(e).map((function(t,e){return t=oi(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const ci=qe.toFlatObject(qe,{},null,(function(t){return/^is[A-Z]/.test(t)}));var li=function(t,e,n){if(!qe.isObject(t))throw new TypeError("target must be an object");e=e||new(Je||FormData);const i=(n=qe.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!qe.isUndefined(e[t])}))).metaTokens,r=n.visitor||l,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&qe.isSpecCompliantForm(e);if(!qe.isFunction(r))throw new TypeError("visitor must be a function");function c(t){if(null===t)return"";if(qe.isDate(t))return t.toISOString();if(!a&&qe.isBlob(t))throw new Qe("Blob is not supported. Use a Buffer instead.");return qe.isArrayBuffer(t)||qe.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):ri.from(t):t}function l(t,n,r){let a=t;if(t&&!r&&"object"==typeof t)if(qe.endsWith(n,"{}"))n=i?n:n.slice(0,-2),t=JSON.stringify(t);else if(qe.isArray(t)&&function(t){return qe.isArray(t)&&!t.some(si)}(t)||(qe.isFileList(t)||qe.endsWith(n,"[]"))&&(a=qe.toArray(t)))return n=oi(n),a.forEach((function(t,i){!qe.isUndefined(t)&&null!==t&&e.append(!0===o?ai([n],i,s):null===o?n:n+"[]",c(t))})),!1;return!!si(t)||(e.append(ai(r,n,s),c(t)),!1)}const u=[],h=Object.assign(ci,{defaultVisitor:l,convertValue:c,isVisitable:si});if(!qe.isObject(t))throw new TypeError("data must be an object");return function t(n,i){if(!qe.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+i.join("."));u.push(n),qe.forEach(n,(function(n,s){!0===(!(qe.isUndefined(n)||null===n)&&r.call(e,n,qe.isString(s)?s.trim():s,i,h))&&t(n,i?i.concat(s):[s])})),u.pop()}}(t),e};function ui(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function hi(t,e){this._pairs=[],t&&li(t,this,e)}const di=hi.prototype;di.append=function(t,e){this._pairs.push([t,e])},di.toString=function(t){const e=t?function(e){return t.call(this,e,ui)}:ui;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var fi=hi;function pi(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function mi(t,e,n){if(!e)return t;const i=n&&n.encode||pi,r=n&&n.serialize;let s;if(s=r?r(e,n):qe.isURLSearchParams(e)?e.toString():new fi(e,n).toString(i),s){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}var gi=class{use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){qe.forEach(this.handlers,(function(e){null!==e&&t(e)}))}constructor(){this.handlers=[]}},yi={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},vi="undefined"!=typeof URLSearchParams?URLSearchParams:fi,bi=FormData;const wi=(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),xi="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var ki={isBrowser:!0,classes:{URLSearchParams:vi,FormData:bi,Blob:Blob},isStandardBrowserEnv:wi,isStandardBrowserWebWorkerEnv:xi,protocols:["http","https","file","blob","url","data"]};function Ei(t,e){return li(t,new ki.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,i){return ki.isNode&&qe.isBuffer(t)?(this.append(e,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}var Ti=function(t){function e(t,n,i,r){let s=t[r++];const o=Number.isFinite(+s),a=r>=t.length;if(s=!s&&qe.isArray(i)?i.length:s,a)return qe.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o;i[s]&&qe.isObject(i[s])||(i[s]=[]);return e(t,n,i[s],r)&&qe.isArray(i[s])&&(i[s]=function(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}(i[s])),!o}if(qe.isFormData(t)&&qe.isFunction(t.entries)){const n={};return qe.forEachEntry(t,((t,i)=>{e(function(t){return qe.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),i,n,0)})),n}return null};const Ii={"Content-Type":void 0};const Ni={transitional:yi,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",i=n.indexOf("application/json")>-1,r=qe.isObject(t);r&&qe.isHTMLForm(t)&&(t=new FormData(t));if(qe.isFormData(t))return i&&i?JSON.stringify(Ti(t)):t;if(qe.isArrayBuffer(t)||qe.isBuffer(t)||qe.isStream(t)||qe.isFile(t)||qe.isBlob(t))return t;if(qe.isArrayBufferView(t))return t.buffer;if(qe.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Ei(t,this.formSerializer).toString();if((s=qe.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return li(s?{"files[]":t}:t,e&&new e,this.formSerializer)}}return r||i?(e.setContentType("application/json",!1),function(t,e,n){if(qe.isString(t))try{return(e||JSON.parse)(t),qe.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||Ni.transitional,n=e&&e.forcedJSONParsing,i="json"===this.responseType;if(t&&qe.isString(t)&&(n&&!this.responseType||i)){const n=!(e&&e.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw Qe.from(t,Qe.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ki.classes.FormData,Blob:ki.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};qe.forEach(["delete","get","head"],(function(t){Ni.headers[t]={}})),qe.forEach(["post","put","patch"],(function(t){Ni.headers[t]=qe.merge(Ii)}));var _i=Ni;const Ci=qe.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Si=t=>{const e={};let n,i,r;return t&&t.split("\n").forEach((function(t){r=t.indexOf(":"),n=t.substring(0,r).trim().toLowerCase(),i=t.substring(r+1).trim(),!n||e[n]&&Ci[n]||("set-cookie"===n?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)})),e};const Ai=Symbol("internals");function Li(t){return t&&String(t).trim().toLowerCase()}function Ri(t){return!1===t||null==t?t:qe.isArray(t)?t.map(Ri):String(t)}function Oi(t,e,n,i){return qe.isFunction(i)?i.call(this,e,n):qe.isString(e)?qe.isString(i)?-1!==e.indexOf(i):qe.isRegExp(i)?i.test(e):void 0:void 0}class Di{set(t,e,n){const i=this;function r(t,e,n){const r=Li(e);if(!r)throw new Error("header name must be a non-empty string");const s=qe.findKey(i,r);(!s||void 0===i[s]||!0===n||void 0===n&&!1!==i[s])&&(i[s||e]=Ri(t))}const s=(t,e)=>qe.forEach(t,((t,n)=>r(t,n,e)));return qe.isPlainObject(t)||t instanceof this.constructor?s(t,e):qe.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z]+$/.test(t.trim())?s(Si(t),e):null!=t&&r(e,t,n),this}get(t,e){if(t=Li(t)){const n=qe.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}(t);if(qe.isFunction(e))return e.call(this,t,n);if(qe.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=Li(t)){const n=qe.findKey(this,t);return!(!n||void 0===this[n]||e&&!Oi(0,this[n],n,e))}return!1}delete(t,e){const n=this;let i=!1;function r(t){if(t=Li(t)){const r=qe.findKey(n,t);!r||e&&!Oi(0,n[r],r,e)||(delete n[r],i=!0)}}return qe.isArray(t)?t.forEach(r):r(t),i}clear(t){const e=Object.keys(this);let n=e.length,i=!1;for(;n--;){const r=e[n];t&&!Oi(0,this[r],r,t)||(delete this[r],i=!0)}return i}normalize(t){const e=this,n={};return qe.forEach(this,((i,r)=>{const s=qe.findKey(n,r);if(s)return e[s]=Ri(i),void delete e[r];const o=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(r):String(r).trim();o!==r&&delete e[r],e[o]=Ri(i),n[o]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return qe.forEach(this,((n,i)=>{null!=n&&!1!==n&&(e[i]=t&&qe.isArray(n)?n.join(", "):n)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[Ai]=this[Ai]={accessors:{}}).accessors,n=this.prototype;function i(t){const i=Li(t);e[i]||(!function(t,e){const n=qe.toCamelCase(" "+e);["get","set","has"].forEach((i=>{Object.defineProperty(t,i+n,{value:function(t,n,r){return this[i].call(this,e,t,n,r)},configurable:!0})}))}(n,t),e[i]=!0)}return qe.isArray(t)?t.forEach(i):i(t),this}constructor(t){t&&this.set(t)}}Di.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),qe.freezeMethods(Di.prototype),qe.freezeMethods(Di);var Pi=Di;function Mi(t,e){const n=this||_i,i=e||n,r=Pi.from(i.headers);let s=i.data;return qe.forEach(t,(function(t){s=t.call(n,s,r.normalize(),e?e.status:void 0)})),r.normalize(),s}function Ui(t){return!(!t||!t.__CANCEL__)}function Fi(t,e,n){Qe.call(this,null==t?"canceled":t,Qe.ERR_CANCELED,e,n),this.name="CanceledError"}qe.inherits(Fi,Qe,{__CANCEL__:!0});var Bi=Fi;function zi(t,e,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(new Qe("Request failed with status code "+n.status,[Qe.ERR_BAD_REQUEST,Qe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var ji=ki.isStandardBrowserEnv?{write:function(t,e,n,i,r,s){const o=[];o.push(t+"="+encodeURIComponent(e)),qe.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),qe.isString(i)&&o.push("path="+i),qe.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Vi(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function qi(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?Vi(t,e):e}var Wi=ki.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function i(n){let i=n;return t&&(e.setAttribute("href",i),i=e.href),e.setAttribute("href",i),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=i(window.location.href),function(t){const e=qe.isString(t)?i(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};function Hi(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}var $i=function(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r,s=0,o=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),l=i[o];r||(r=c),n[s]=a,i[s]=c;let u=o,h=0;for(;u!==s;)h+=n[u++],u%=t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),c-r<e)return;const d=l&&c-l;return d?Math.round(1e3*h/d):void 0}};function Ki(t,e){let n=0;const i=$i(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,c=i(a);n=s;const l={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&s<=o?(o-s)/c:void 0,event:r};l[e?"download":"upload"]=!0,t(l)}}const Gi="undefined"!=typeof XMLHttpRequest;const Xi={http:Je,xhr:Gi&&function(t){return new Promise((function(e,n){let i=t.data;const r=Pi.from(t.headers).normalize(),s=t.responseType;let o;function a(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}qe.isFormData(i)&&(ki.isStandardBrowserEnv||ki.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let c=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";r.set("Authorization","Basic "+btoa(e+":"+n))}const l=qi(t.baseURL,t.url);function u(){if(!c)return;const i=Pi.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());zi((function(t){e(t),a()}),(function(t){n(t),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:i,config:t,request:c}),c=null}if(c.open(t.method.toUpperCase(),mi(l,t.params,t.paramsSerializer),!0),c.timeout=t.timeout,"onloadend"in c?c.onloadend=u:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(u)},c.onabort=function(){c&&(n(new Qe("Request aborted",Qe.ECONNABORTED,t,c)),c=null)},c.onerror=function(){n(new Qe("Network Error",Qe.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const i=t.transitional||yi;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new Qe(e,i.clarifyTimeoutError?Qe.ETIMEDOUT:Qe.ECONNABORTED,t,c)),c=null},ki.isStandardBrowserEnv){const e=(t.withCredentials||Wi(l))&&t.xsrfCookieName&&ji.read(t.xsrfCookieName);e&&r.set(t.xsrfHeaderName,e)}void 0===i&&r.setContentType(null),"setRequestHeader"in c&&qe.forEach(r.toJSON(),(function(t,e){c.setRequestHeader(e,t)})),qe.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),s&&"json"!==s&&(c.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&c.addEventListener("progress",Ki(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Ki(t.onUploadProgress)),(t.cancelToken||t.signal)&&(o=e=>{c&&(n(!e||e.type?new Bi(null,t,c):e),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));const h=Hi(l);h&&-1===ki.protocols.indexOf(h)?n(new Qe("Unsupported protocol "+h+":",Qe.ERR_BAD_REQUEST,t)):c.send(i||null)}))}};qe.forEach(Xi,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));var Qi={getAdapter:t=>{t=qe.isArray(t)?t:[t];const{length:e}=t;let n,i;for(let r=0;r<e&&(n=t[r],!(i=qe.isString(n)?Xi[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new Qe(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(qe.hasOwnProp(Xi,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!qe.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:Xi};function Ji(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Bi(null,t)}function Yi(t){Ji(t),t.headers=Pi.from(t.headers),t.data=Mi.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return Qi.getAdapter(t.adapter||_i.adapter)(t).then((function(e){return Ji(t),e.data=Mi.call(t,t.transformResponse,e),e.headers=Pi.from(e.headers),e}),(function(e){return Ui(e)||(Ji(t),e&&e.response&&(e.response.data=Mi.call(t,t.transformResponse,e.response),e.response.headers=Pi.from(e.response.headers))),Promise.reject(e)}))}const Zi=t=>t instanceof Pi?t.toJSON():t;function tr(t,e){e=e||{};const n={};function i(t,e,n){return qe.isPlainObject(t)&&qe.isPlainObject(e)?qe.merge.call({caseless:n},t,e):qe.isPlainObject(e)?qe.merge({},e):qe.isArray(e)?e.slice():e}function r(t,e,n){return qe.isUndefined(e)?qe.isUndefined(t)?void 0:i(void 0,t,n):i(t,e,n)}function s(t,e){if(!qe.isUndefined(e))return i(void 0,e)}function o(t,e){return qe.isUndefined(e)?qe.isUndefined(t)?void 0:i(void 0,t):i(void 0,e)}function a(n,r,s){return s in e?i(n,r):s in t?i(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(t,e)=>r(Zi(t),Zi(e),!0)};return qe.forEach(Object.keys(t).concat(Object.keys(e)),(function(i){const s=c[i]||r,o=s(t[i],e[i],i);qe.isUndefined(o)&&s!==a||(n[i]=o)})),n}const er="1.3.2",nr={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{nr[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const ir={};nr.transitional=function(t,e,n){function i(t,e){return"[Axios v"+er+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,r,s)=>{if(!1===t)throw new Qe(i(r," has been removed"+(e?" in "+e:"")),Qe.ERR_DEPRECATED);return e&&!ir[r]&&(ir[r]=!0,console.warn(i(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,s)}};var rr={assertOptions:function(t,e,n){if("object"!=typeof t)throw new Qe("options must be an object",Qe.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const e=t[s],n=void 0===e||o(e,s,t);if(!0!==n)throw new Qe("option "+s+" must be "+n,Qe.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Qe("Unknown option "+s,Qe.ERR_BAD_OPTION)}},validators:nr};const sr=rr.validators;class or{request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=tr(this.defaults,e);const{transitional:n,paramsSerializer:i,headers:r}=e;let s;void 0!==n&&rr.assertOptions(n,{silentJSONParsing:sr.transitional(sr.boolean),forcedJSONParsing:sr.transitional(sr.boolean),clarifyTimeoutError:sr.transitional(sr.boolean)},!1),void 0!==i&&rr.assertOptions(i,{encode:sr.function,serialize:sr.function},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase(),s=r&&qe.merge(r.common,r[e.method]),s&&qe.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete r[t]})),e.headers=Pi.concat(s,r);const o=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let u,h=0;if(!a){const t=[Yi.bind(this),void 0];for(t.unshift.apply(t,o),t.push.apply(t,c),u=t.length,l=Promise.resolve(e);h<u;)l=l.then(t[h++],t[h++]);return l}u=o.length;let d=e;for(h=0;h<u;){const t=o[h++],e=o[h++];try{d=t(d)}catch(t){e.call(this,t);break}}try{l=Yi.call(this,d)}catch(t){return Promise.reject(t)}for(h=0,u=c.length;h<u;)l=l.then(c[h++],c[h++]);return l}getUri(t){return mi(qi((t=tr(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}constructor(t){this.defaults=t,this.interceptors={request:new gi,response:new gi}}}qe.forEach(["delete","get","head","options"],(function(t){or.prototype[t]=function(e,n){return this.request(tr(n||{},{method:t,url:e,data:(n||{}).data}))}})),qe.forEach(["post","put","patch"],(function(t){function e(e){return function(n,i,r){return this.request(tr(r||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}or.prototype[t]=e(),or.prototype[t+"Form"]=e(!0)}));var ar=or;class cr{throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new cr((function(e){t=e})),cancel:t}}constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const i=new Promise((t=>{n.subscribe(t),e=t})).then(t);return i.cancel=function(){n.unsubscribe(e)},i},t((function(t,i,r){n.reason||(n.reason=new Bi(t,i,r),e(n.reason))}))}}var lr=cr;const ur={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ur).forEach((([t,e])=>{ur[e]=t}));var hr=ur;const dr=function t(e){const n=new ar(e),i=ue(ar.prototype.request,n);return qe.extend(i,ar.prototype,n,{allOwnKeys:!0}),qe.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return t(tr(e,n))},i}(_i);dr.Axios=ar,dr.CanceledError=Bi,dr.CancelToken=lr,dr.isCancel=Ui,dr.VERSION=er,dr.toFormData=li,dr.AxiosError=Qe,dr.Cancel=dr.CanceledError,dr.all=function(t){return Promise.all(t)},dr.spread=function(t){return function(e){return t.apply(null,e)}},dr.isAxiosError=function(t){return qe.isObject(t)&&!0===t.isAxiosError},dr.mergeConfig=tr,dr.AxiosHeaders=Pi,dr.formToJSON=t=>Ti(qe.isHTMLForm(t)?new FormData(t):t),dr.HttpStatusCode=hr,dr.default=dr;var fr=dr;const{Axios:pr,AxiosError:mr,CanceledError:gr,isCancel:yr,CancelToken:vr,VERSION:br,all:wr,Cancel:xr,isAxiosError:kr,spread:Er,toFormData:Tr,AxiosHeaders:Ir,HttpStatusCode:Nr,formToJSON:_r,mergeConfig:Cr}=fr;var Sr,Ar,Lr={};Sr=void 0!==e?e:"undefined"!=typeof window?window:Lr,Ar=function(t){"use strict";if(void 0===t&&void 0===t.document)return!1;var e,n="Success",i="Failure",r="Warning",s="Info",o={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},a=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},c=function(e){return e||(e="head"),null!==t.document[e]||(a('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},l=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e&&"[object Object]"===Object.prototype.toString.call(n[i])?t[i]=l(t[i],n[i]):t[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return t},u=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},h=0,d=function(a,u,d,p){if(!c("body"))return!1;e||f.Notify.init({});var m=l(!0,e,{});if("object"==typeof d&&!Array.isArray(d)||"object"==typeof p&&!Array.isArray(p)){var g={};"object"==typeof d?g=d:"object"==typeof p&&(g=p),e=l(!0,e,g)}var y,v,b=e[a.toLocaleLowerCase("en")];h++,"string"!=typeof u&&(u="Notiflix "+a),e.plainText&&(y=u,(v=t.document.createElement("div")).innerHTML=y,u=v.textContent||v.innerText||""),!e.plainText&&u.length>e.messageMaxLength&&(e=l(!0,e,{closeButton:!0,messageMaxLength:150}),u='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),u.length>e.messageMaxLength&&(u=u.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(b.fontAwesomeIconColor=b.background),e.cssAnimation||(e.cssAnimationDuration=0);var w=t.document.getElementById(o.wrapID)||t.document.createElement("div");if(w.id=o.wrapID,w.style.width=e.width,w.style.zIndex=e.zindex,w.style.opacity=e.opacity,"center-center"===e.position?(w.style.left=e.distance,w.style.top=e.distance,w.style.right=e.distance,w.style.bottom=e.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===e.position?(w.style.left=e.distance,w.style.right=e.distance,w.style.top=e.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===e.position?(w.style.left=e.distance,w.style.right=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===e.position?(w.style.right=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.left="auto"):"left-top"===e.position?(w.style.left=e.distance,w.style.top=e.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===e.position?(w.style.left=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=e.distance,w.style.top=e.distance,w.style.left="auto",w.style.bottom="auto"),e.backOverlay){var x=t.document.getElementById(o.overlayID)||t.document.createElement("div");x.id=o.overlayID,x.style.width="100%",x.style.height="100%",x.style.position="fixed",x.style.zIndex=e.zindex-1,x.style.left=0,x.style.top=0,x.style.right=0,x.style.bottom=0,x.style.background=b.backOverlayColor||e.backOverlayColor,x.className=e.cssAnimation?"nx-with-animation":"",x.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(o.overlayID)||t.document.body.appendChild(x)}t.document.getElementById(o.wrapID)||t.document.body.appendChild(w);var k=t.document.createElement("div");k.id=e.ID+"-"+h,k.className=e.className+" "+b.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof d?"nx-with-close-button":"")+" "+("function"==typeof d?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=e.fontSize,k.style.color=b.textColor,k.style.background=b.background,k.style.borderRadius=e.borderRadius,k.style.pointerEvents="all",e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(k.style.animationDuration=e.cssAnimationDuration+"ms");var E="";if(e.closeButton&&"function"!=typeof d&&(E='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+b.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)k.innerHTML='<i style="color:'+b.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+b.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+u+"</span>"+(e.closeButton?E:"");else{var T="";a===n?T='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===i?T='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===r?T='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===s&&(T='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=T+'<span class="nx-message nx-with-icon">'+u+"</span>"+(e.closeButton?E:"")}else k.innerHTML='<span class="nx-message">'+u+"</span>"+(e.closeButton?E:"");if("left-bottom"===e.position||"right-bottom"===e.position){var I=t.document.getElementById(o.wrapID);I.insertBefore(k,I.firstChild)}else t.document.getElementById(o.wrapID).appendChild(k);var N=t.document.getElementById(k.id);if(N){var _,C,S=function(){N.classList.add("nx-remove");var e=t.document.getElementById(o.overlayID);e&&w.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(_)},A=function(){if(N&&null!==N.parentNode&&N.parentNode.removeChild(N),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var e=t.document.getElementById(o.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(C)};if(e.closeButton&&"function"!=typeof d&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){S();var t=setTimeout((function(){A(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof d||e.clickToClose)&&N.addEventListener("click",(function(){"function"==typeof d&&d(),S();var t=setTimeout((function(){A(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof d){var L=function(){_=setTimeout((function(){S()}),e.timeout),C=setTimeout((function(){A()}),e.timeout+e.cssAnimationDuration)};L(),e.pauseOnHover&&(N.addEventListener("mouseenter",(function(){N.classList.add("nx-paused"),clearTimeout(_),clearTimeout(C)})),N.addEventListener("mouseleave",(function(){N.classList.remove("nx-paused"),L()})))}}if(e.showOnlyTheLastOne&&h>0)for(var R=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+h+"])"),O=0;O<R.length;O++){var D=R[O];null!==D.parentNode&&D.parentNode.removeChild(D)}e=l(!0,e,m)},f={Notify:{init:function(n){e=l(!0,o,n),function(e,n){if(!c("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}}(u,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return a("You have to initialize the Notify module before call Merge function."),!1;e=l(!0,e,t)},success:function(t,e,i){d(n,t,e,i)},failure:function(t,e,n){d(i,t,e,n)},warning:function(t,e,n){d(r,t,e,n)},info:function(t,e,n){d(s,t,e,n)}}};return"object"==typeof t.Notiflix?l(!0,t.Notiflix,{Notify:f.Notify}):{Notify:f.Notify}},"function"==typeof define&&define.amd?define([],(function(){return Ar(Sr)})):"object"==typeof Lr?Lr=Ar(Sr):Sr.Notiflix=Ar(Sr);var Rr={};Rr=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("hBMgR");var Or={};function Dr(t){return t.map((t=>{const{genres:e,id:n,imgUrl:i,name:r,rating:s,year:o}=t,a=function(t){return 0===t.length?"Other":t.length<=3?t.join(", "):`${t[0]}, ${t[1]}, Other`}(e);return`<li class="films__item js-target" data-id="${n}">\n                <div class="films__img-wrapper">\n                  <img\n                  src="${i}"\n                  alt="${r}"\n                  class="films__img" loading="lazy"\n                  />\n                  <div class="rating">\n                   <p class="films__desk">\n                     <span class="films__rating--text"> Rating: </span>\n                     <span class="films__rating">${s}</span>\n                    </p>\n                  </div>\n                </div>\n               <div class="films__info">\n                 <p class="films__name">${r}</p>\n                 <p class="films__desk">\n                   <span class="films__genre">${a}</span> |\n                   <span class="films__year">${o}</span>\n                 </p> \n                </div>\n              </li>`})).join("")}function Pr(t){const{poster_path:e,title:i,vote_average:r,vote_count:s,popularity:o,original_title:a,genres:c,overview:l}=t,u=` <img class='modal-poster'\n  src="${e?`https://image.tmdb.org/t/p/w500${e}`:n(Or)}"\n   alt=${i}\n  \n   width='240'/>\n <div>\n   <div>\n     <h2 class='modal-movie-title'>${i}</h2>\n\n     <div class='wrap-flex'>\n          <p class='movie-label'>Vote / Votes</p>\n          <p class='movie-disc disc-wrap'>\n           <span class='accent-detail__orange'>\n            ${r.toFixed(1)}</span>\n            <span class='disc-space'> / </span> <span class="accent-detail__gray">${s}</span>\n         </p>\n     </div>\n     <div class='wrap-flex'>\n         <p class='movie-label'>Popularity</p>\n          <p class='movie-disc'>${o.toFixed(1)}</p>\n     </div>\n     <div class='wrap-flex'>\n         <p class='movie-label'>Original Title</p>\n         <p class='movie-disc movie-disc-title'>${a}</p>\n     </div>\n     <div class='wrap-flex'>\n        <p class='movie-label'>Genre</p>\n        <p class='movie-disc movie-disc-genres'>${c.map((t=>t.name)).join(", ")}</p>\n     </div>\n\n     <h3 class='disc-title'>About</h3>\n     <p class='disc-text'>${l}</p>\n   </div>\n   <div class='button-container'>\n     <button type='button'  class='modal-btn btn-watched js-btn-watched'>add to watched</button>\n     <button type='button'class='modal-btn btn-queue js-btn-queue'>\n       add to queue\n     </button>\n   </div>\n   </div>\n </div>`;document.querySelector(".wrap-disc").innerHTML=u,document.querySelector(".backdrop").setAttribute("style",`background-image: url(https://image.tmdb.org/t/p/original/${t.backdrop_path}); background-position: center; background-size: cover;`),null===t.backdrop_path&&document.querySelector(".backdrop").setAttribute("style",`background-image: url(${n(Rr)}); background-position: center; background-size: cover;`)}Or=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("4O56q");const Mr="https://image.tmdb.org/t/p/",Ur="w500";class Fr{getDataTrendMovies(t){return t.map((({poster_path:t,genre_ids:e,vote_average:i,title:r,id:s,release_date:o})=>{let a=Mr+Ur+t,c=Number.parseInt(o);const l=Sw(e);return t||(a=n(Or)),o||(c="Unknown date"),{imgUrl:a,genres:l,rating:i.toFixed(1),name:r,id:s,year:c}}))}getDataSelectedMovie(t){const{poster_path:e,genres:n,vote_average:i,vote_count:r,popularity:s,title:o,original_title:a,overview:c,release_date:l}=t;return{imgUrl:Mr+Ur+e,name:o,vote:i.toFixed(1),votes:r,popularity:s,originalTitle:a,about:c,year:Number.parseInt(l)}}}const Br=document.querySelector("#top");function zr(){window.scrollTo({top:10,behavior:"smooth"})}function jr(t){switch(zr(),t.page){case 1:Vr=1,Hr.firstPage.textContent=1,Hr.plus2Page.classList.remove("btn-active"),Hr.plus1Page.classList.remove("btn-active"),Hr.minus1Page.classList.remove("btn-active"),Hr.minus2Page.classList.remove("btn-active"),Hr.firstPage.classList.remove("btn-active"),Hr.lastPage.classList.remove("btn-active"),Hr.activPage.classList.remove("btn-active"),Hr.firstPage.classList.add("btn-active"),Hr.lastPage.textContent=t.total_pages,Hr.minus2Page.textContent=t.page+1,Hr.minus1Page.textContent=t.page+2,Hr.activPage.textContent=t.page+3,Hr.plus1Page.textContent=t.page+4,Hr.plus2Page.textContent=t.page+5;break;case 2:Hr.firstPage.textContent=1,Hr.firstPage.classList.remove("btn-active"),Hr.plus2Page.classList.remove("btn-active"),Hr.plus1Page.classList.remove("btn-active"),Hr.minus1Page.classList.remove("btn-active"),Hr.firstPage.classList.remove("btn-active"),Hr.lastPage.classList.remove("btn-active"),Hr.activPage.classList.remove("btn-active"),Hr.lastPage.textContent=t.total_pages,Hr.minus2Page.textContent=t.page,Hr.minus2Page.classList.add("btn-active"),Hr.minus1Page.textContent=t.page+1,Hr.activPage.textContent=t.page+2,Hr.plus1Page.textContent=t.page+3,Hr.plus2Page.textContent=t.page+4;break;case 3:Hr.firstPage.textContent=1,Hr.minus2Page.classList.remove("btn-active"),Hr.plus2Page.classList.remove("btn-active"),Hr.plus1Page.classList.remove("btn-active"),Hr.firstPage.classList.remove("btn-active"),Hr.lastPage.classList.remove("btn-active"),Hr.activPage.classList.remove("btn-active"),Hr.lastPage.textContent=t.total_pages,Hr.minus2Page.textContent=t.page-1,Hr.minus1Page.classList.add("btn-active"),Hr.minus1Page.textContent=t.page,Hr.activPage.textContent=t.page+1,Hr.plus1Page.textContent=t.page+2,Hr.plus2Page.textContent=t.page+3;break;case 4:Hr.firstPage.textContent=1,Hr.minus1Page.classList.remove("btn-active"),Hr.plus2Page.classList.remove("btn-active"),Hr.plus1Page.classList.remove("btn-active"),Hr.minus2Page.classList.remove("btn-active"),Hr.firstPage.classList.remove("btn-active"),Hr.activPage.classList.remove("btn-active"),Hr.lastPage.textContent=t.total_pages,Hr.minus2Page.textContent=t.page-2,Hr.activPage.classList.add("btn-active"),Hr.minus1Page.textContent=t.page-1,Hr.activPage.textContent=t.page,Hr.plus1Page.textContent=t.page+1,Hr.plus2Page.textContent=t.page+2;break;case 5:Hr.firstPage.textContent=1,Hr.activPage.classList.remove("btn-active"),Hr.plus2Page.classList.remove("btn-active"),Hr.minus1Page.classList.remove("btn-active"),Hr.minus2Page.classList.remove("btn-active"),Hr.firstPage.classList.remove("btn-active"),Hr.lastPage.textContent=t.total_pages,Hr.minus2Page.textContent=t.page-3,Hr.plus1Page.classList.add("btn-active"),Hr.minus1Page.textContent=t.page-2,Hr.activPage.textContent=t.page-1,Hr.plus1Page.textContent=t.page,Hr.plus2Page.textContent=t.page+1;break;case 6:Hr.firstPage.textContent=1,Hr.plus1Page.classList.remove("btn-active"),Hr.minus1Page.classList.remove("btn-active"),Hr.minus2Page.classList.remove("btn-active"),Hr.firstPage.classList.remove("btn-active"),Hr.activPage.classList.remove("btn-active"),Hr.lastPage.textContent=t.total_pages,Hr.minus2Page.textContent=t.page-4,Hr.plus2Page.classList.add("btn-active"),Hr.minus1Page.textContent=t.page-3,Hr.activPage.textContent=t.page-2,Hr.plus1Page.textContent=t.page-1,Hr.plus2Page.textContent=t.page;break;case t.total_pages-2:Hr.firstPage.textContent=1,Hr.plus2Page.classList.remove("btn-active"),Hr.minus1Page.classList.remove("btn-active"),Hr.minus2Page.classList.remove("btn-active"),Hr.lastPage.classList.remove("btn-active"),Hr.firstPage.classList.remove("btn-active"),Hr.activPage.classList.remove("btn-active"),Hr.lastPage.textContent=t.total_pages,Hr.minus2Page.textContent=t.page-3,Hr.plus1Page.classList.add("btn-active"),Hr.minus1Page.textContent=t.page-2,Hr.activPage.textContent=t.page-1,Hr.plus1Page.textContent=t.page,Hr.plus2Page.textContent=t.page+1;break;case t.total_pages-1:Hr.firstPage.textContent=1,Hr.plus1Page.classList.remove("btn-active"),Hr.minus1Page.classList.remove("btn-active"),Hr.minus2Page.classList.remove("btn-active"),Hr.lastPage.classList.remove("btn-active"),Hr.firstPage.classList.remove("btn-active"),Hr.activPage.classList.remove("btn-active"),Hr.lastPage.textContent=t.total_pages,Hr.minus2Page.textContent=t.page-4,Hr.plus2Page.classList.add("btn-active"),Hr.minus1Page.textContent=t.page-3,Hr.activPage.textContent=t.page-2,Hr.plus1Page.textContent=t.page-1,Hr.plus2Page.textContent=t.page;break;case t.total_pages:Hr.firstPage.textContent=1,Hr.plus2Page.classList.remove("btn-active"),Hr.plus1Page.classList.remove("btn-active"),Hr.minus1Page.classList.remove("btn-active"),Hr.minus2Page.classList.remove("btn-active"),Hr.firstPage.classList.remove("btn-active"),Hr.activPage.classList.remove("btn-active"),Hr.lastPage.textContent=t.total_pages,Hr.minus2Page.textContent=t.page-5,Hr.lastPage.classList.add("btn-active"),Hr.minus1Page.textContent=t.page-4,Hr.activPage.textContent=t.page-3,Hr.plus1Page.textContent=t.page-2,Hr.plus2Page.textContent=t.page-1;break;default:Hr.firstPage.textContent=1,Hr.plus2Page.classList.remove("btn-active"),Hr.plus1Page.classList.remove("btn-active"),Hr.minus1Page.classList.remove("btn-active"),Hr.minus2Page.classList.remove("btn-active"),Hr.firstPage.classList.remove("btn-active"),Hr.lastPage.classList.remove("btn-active"),Hr.activPage.classList.add("btn-active"),Hr.plusQuery.classList.remove("btn-active"),Hr.minusQuery.classList.remove("btn-active"),Hr.lastPage.textContent=t.total_pages,Hr.minus2Page.textContent=t.page-2,Hr.minus1Page.textContent=t.page-1,Hr.activPage.textContent=t.page,Hr.plus1Page.textContent=t.page+1,Hr.plus2Page.textContent=t.page+2}switch(t.total_pages){case 1:Hr.plus2Page.classList.add("visually-hidden"),Hr.plus1Page.classList.add("visually-hidden"),Hr.minus1Page.classList.add("visually-hidden"),Hr.minus2Page.classList.add("visually-hidden"),Hr.lastPage.classList.add("visually-hidden"),Hr.activPage.classList.add("visually-hidden"),Hr.minusTen.classList.add("visually-hidden"),Hr.plusTen.classList.add("visually-hidden"),Hr.minusQuery.classList.add("visually-hidden"),Hr.plusQuery.classList.add("visually-hidden");break;case 2:Hr.plus2Page.classList.add("visually-hidden"),Hr.plus1Page.classList.add("visually-hidden"),Hr.minus1Page.classList.add("visually-hidden"),Hr.minus2Page.classList.remove("visually-hidden"),Hr.lastPage.classList.add("visually-hidden"),Hr.activPage.classList.add("visually-hidden"),Hr.minusTen.classList.add("visually-hidden"),Hr.plusTen.classList.add("visually-hidden"),Hr.minusQuery.classList.add("visually-hidden"),Hr.plusQuery.classList.add("visually-hidden");break;case 3:Hr.plus2Page.classList.add("visually-hidden"),Hr.plus1Page.classList.add("visually-hidden"),Hr.minus1Page.classList.remove("visually-hidden"),Hr.minus2Page.classList.remove("visually-hidden"),Hr.lastPage.classList.add("visually-hidden"),Hr.activPage.classList.add("visually-hidden"),Hr.minusTen.classList.add("visually-hidden"),Hr.plusTen.classList.add("visually-hidden"),Hr.minusQuery.classList.add("visually-hidden"),Hr.plusQuery.classList.add("visually-hidden");break;case 4:Hr.plus2Page.classList.add("visually-hidden"),Hr.plus1Page.classList.add("visually-hidden"),Hr.minus1Page.classList.remove("visually-hidden"),Hr.minus2Page.classList.remove("visually-hidden"),Hr.lastPage.classList.remove("visually-hidden"),Hr.activPage.classList.add("visually-hidden"),Hr.minusTen.classList.add("visually-hidden"),Hr.plusTen.classList.add("visually-hidden"),Hr.minusQuery.classList.remove("visually-hidden"),Hr.plusQuery.classList.remove("visually-hidden");break;case 5:Hr.plus2Page.classList.add("visually-hidden"),Hr.plus1Page.classList.add("visually-hidden"),Hr.minus1Page.classList.remove("visually-hidden"),Hr.minus2Page.classList.remove("visually-hidden"),Hr.lastPage.classList.remove("visually-hidden"),Hr.activPage.classList.remove("visually-hidden"),Hr.minusTen.classList.add("visually-hidden"),Hr.plusTen.classList.add("visually-hidden"),Hr.minusQuery.classList.remove("visually-hidden"),Hr.plusQuery.classList.remove("visually-hidden");break;case 6:Hr.plus2Page.classList.add("visually-hidden"),Hr.plus1Page.classList.remove("visually-hidden"),Hr.minus1Page.classList.remove("visually-hidden"),Hr.minus2Page.classList.remove("visually-hidden"),Hr.lastPage.classList.remove("visually-hidden"),Hr.activPage.classList.remove("visually-hidden"),Hr.minusTen.classList.add("visually-hidden"),Hr.plusTen.classList.add("visually-hidden"),Hr.minusQuery.classList.remove("visually-hidden"),Hr.plusQuery.classList.remove("visually-hidden");break;default:Hr.plus2Page.classList.remove("visually-hidden"),Hr.plus1Page.classList.remove("visually-hidden"),Hr.minus1Page.classList.remove("visually-hidden"),Hr.minus2Page.classList.remove("visually-hidden"),Hr.lastPage.classList.remove("visually-hidden"),Hr.activPage.classList.remove("visually-hidden"),Hr.minusQuery.classList.remove("visually-hidden"),Hr.plusQuery.classList.remove("visually-hidden"),Hr.minusTen.classList.remove("visually-hidden"),Hr.plusTen.classList.remove("visually-hidden")}}window.addEventListener("scroll",(function(){Br.hidden=window.pageYOffset<document.documentElement.clientHeight})),Br.addEventListener("click",zr);let Vr=1,qr=100;async function Wr(t){const e=t.target;if(Vr=Number(e.textContent),"BUTTON"===e.nodeName)try{const t=new Qr,n=new Fr,i=Hr.searchForm.searchQuery.value.trim();if(t.query=i,t.page=Vr,""!==i)return void await t.getSearchMovies().then((t=>{qr=t.total_pages;const i=Dr(n.getDataTrendMovies(t.results));Hr.moviesList.innerHTML=i,e.blur(),jr(t)})).catch((t=>Notify.failure(t)));await t.getTrendMovie().then((t=>{qr=t.total_pages;const i=Dr(n.getDataTrendMovies(t.results));Hr.moviesList.innerHTML=i,e.blur(),jr(t)}))}catch(t){Notify.failure(t)}}const Hr={moviesList:document.querySelector(".js-films-list"),firstPage:document.querySelector(".js-pagination--firstPage"),minus2Page:document.querySelector(".js-pagination--minus2Page"),minus1Page:document.querySelector(".js-pagination--minus1Page"),activPage:document.querySelector(".js-pagination--activPage"),plus1Page:document.querySelector(".js-pagination--plus1Page"),plus2Page:document.querySelector(".js-pagination--plus2Page"),lastPage:document.querySelector(".js-pagination--lastPage"),minusQuery:document.querySelector(".js-btn__minusQuery"),plusQuery:document.querySelector(".js-btn__plusQuery"),containerPage:document.querySelector(".js-pagination__page"),plusTen:document.querySelector(".btn-increment-ten"),minusTen:document.querySelector(".btn-decrement-ten"),containerPagAll:document.querySelector(".js-pagination"),backdrop:document.querySelector(".backdrop"),modalMovies:document.querySelector("[data-modal]"),openModalCard:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),trailerBtn:document.querySelector(".trailer-btn"),openTeamModalBtn:document.querySelector("[data-modal-open-team]"),closeTeamModalBtn:document.querySelector("[data-modal-close-team]"),backdropFooter:document.querySelector(".backdrop-footer"),openRegistrModalBtn:document.querySelector("[data-modal-open-registr]"),closeRegistrModalBtn:document.querySelector("[data-modal-close-registr]"),backdropRegistr:document.querySelector(".backdrop-registr"),searchForm:document.querySelector(".header__form"),searchErrorImg:document.querySelector(".films__error-img"),noMoviesNotification:document.querySelector(".films__no-movies-notification"),notCorrectNotification:document.querySelector(".films__not-correct-notification"),backdropSpinner:document.querySelector(".backdrop-spin"),spinner:document.querySelector(".js-spinner"),signInButtonElement:document.querySelector(".js-sign-in"),signOutButtonElement:document.querySelector(".js-sign-out"),userPicElement:document.getElementById("user-pic"),userNameElement:document.getElementById("user-name"),userInfoElement:document.getElementById("user-container"),signInWithEmail:document.querySelector("[data-modal-sign-in-email]"),signInWithGoogle:document.querySelector("[data-modal-sign-in-google]")};Hr.minusQuery.addEventListener("click",(async function t(e){Vr-=1,Vr>qr&&(Vr=1);const n=e.target,i=new Qr,r=new Fr,s=Hr.searchForm.searchQuery.value.trim();if(i.query=s,i.page=Vr,0===Vr)return Vr=1,void n.blur();try{if(""!==s)return void await i.getSearchMovies().then((i=>{qr=i.total_pages,Vr>i.total_pages&&(Vr=2,t(e));const s=Dr(r.getDataTrendMovies(i.results));Hr.moviesList.innerHTML=s,n.blur(),jr(i)})).catch((t=>Notify.failure(t)));await i.getTrendMovie().then((i=>{qr=i.total_pages,Vr>i.total_pages&&(Vr=1,t(e));const s=Dr(r.getDataTrendMovies(i.results));Hr.moviesList.innerHTML=s,n.blur(),jr(i)}))}catch(t){Notify.failure(t)}})),Hr.plusQuery.addEventListener("click",(async function t(e){Vr+=1,Vr>qr&&(Vr=1);const n=e.target,i=new Qr,r=new Fr,s=Hr.searchForm.searchQuery.value.trim();i.query=s,i.page=Vr;try{if(""!==s)return void await i.getSearchMovies().then((i=>{n.blur(),jr(i),Vr>=i.total_pages&&Hr.lastPage.classList.add("btn-active");const s=Dr(r.getDataTrendMovies(i.results));Hr.moviesList.innerHTML=s,Hr.minusQuery.disabled=!1,qr=i.total_pages,Vr>i.total_pages&&(Vr=1,t(e))})).catch((t=>{Notify.failure(t)}));await i.getTrendMovie().then((i=>{n.blur(),qr=i.total_pages,Vr>i.total_pages&&(Vr=1,t(e)),Vr>=i.total_pages&&Hr.lastPage.classList.add("btn-active");const s=Dr(r.getDataTrendMovies(i.results));Hr.moviesList.innerHTML=s,jr(i)}))}catch(t){Notify.failure(t)}})),Hr.containerPage.addEventListener("click",Wr),Hr.minusTen.addEventListener("click",(async function(t){Vr-=10;const e=t.target;Vr<0&&(Vr=1);const n=new Qr,i=new Fr,r=Hr.searchForm.searchQuery.value.trim();n.query=r,n.page=Vr;try{if(""!==r)return void await n.getSearchMovies().then((t=>{qr=t.total_pages;const n=Dr(i.getDataTrendMovies(t.results));Hr.moviesList.innerHTML=n,e.blur(),jr(t)})).catch((t=>Notify.failure(t)));await n.getTrendMovie().then((t=>{if(qr=t.total_pages,Vr<=0)return;const n=Dr(i.getDataTrendMovies(t.results));Hr.moviesList.innerHTML=n,e.blur(),jr(t)}))}catch(t){Notify.failure(t)}})),Hr.plusTen.addEventListener("click",(async function(t){Vr+=10;const e=t.target;Vr>qr&&(Vr=qr);const n=new Qr,i=new Fr,r=Hr.searchForm.searchQuery.value.trim();n.query=r,n.page=Vr;try{if(""!==r)return void await n.getSearchMovies().then((t=>{if(qr=t.total_pages,Vr>t.total_pages)return;e.blur(),jr(t);const n=Dr(i.getDataTrendMovies(t.results));Hr.moviesList.innerHTML=n,Hr.minusQuery.disabled=!1})).catch((t=>Notify.failure(t)));await n.getTrendMovie().then((t=>{qr=t.total_pages,t.total_pages||Hr.containerPage.classList.add("visually-hidden");const n=Dr(i.getDataTrendMovies(t.results));Hr.moviesList.innerHTML=n,e.blur(),jr(t)}))}catch(t){Notify.failure(t)}})),Hr.lastPage.addEventListener("click",Wr),Hr.firstPage.addEventListener("click",Wr);var $r=new WeakMap,Kr=new WeakMap,Gr=new WeakMap,Xr=new WeakMap;class Qr{async getTrendMovie(){try{const{data:t}=await fr.get(`${se(this,$r)}/trending/movie/day?api_key=${se(this,Kr)}&page=${se(this,Xr)}`);return Hr.containerPagAll.classList.remove("visually-hidden"),t}catch(t){Hr.containerPagAll.classList.add("visually-hidden"),console.error(t)}}async getGenres(){try{const{data:t}=await fr.get(`${se(this,$r)}/genre/movie/list?api_key=${se(this,Kr)}&language=en-US`);return t.genres}catch(t){console.error(t)}}async getSearchMovies(){try{return(await fr.get(`${se(this,$r)}/search/movie?api_key=${se(this,Kr)}&query=${se(this,Gr)}&page=${se(this,Xr)}`)).data}catch(t){Hr.containerPage.classList.add("visually-hidden"),Lr.Notify.failure(t)}}resetPage(){le(this,Xr,1)}get query(){return se(this,Gr)}set query(t){le(this,Gr,t)}get page(){return se(this,Xr)}set page(t){le(this,Xr,t)}constructor(){ae(this,$r,{writable:!0,value:"https://api.themoviedb.org/3"}),ae(this,Kr,{writable:!0,value:"d03712107dcdd723f1173c5ee2c0d8c1"}),ae(this,Gr,{writable:!0,value:""}),ae(this,Xr,{writable:!0,value:1})}}var Jr,Yr,Zr={};Jr=void 0===e?"undefined"==typeof window?Zr:window:e,Yr=function(t){"use strict";if(void 0===t&&void 0===t.document)return!1;var e,n,i,r,s,o="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',c="Success",l="Failure",u="Warning",h="Info",d={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},f="Success",p="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v="Show",b="Ask",w="Prompt",x={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},k="Standard",E="Hourglass",T="Circle",I="Arrows",N="Dots",_="Pulse",C="Custom",S="Notiflix",A={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},L="Standard",R="Hourglass",O="Circle",D="Arrows",P="Dots",M="Pulse",U={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},F=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+o)},B=function(t){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+t+o)},z=function(e){return e||(e="head"),null!==t.document[e]||(F('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},j=function(e,n){if(!z("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}},V=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=e&&"[object Object]"===Object.prototype.toString.call(n[i])?V(t[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return t},q=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},W=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},H=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},$=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+t+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+t+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+t+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+e+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},K=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},G=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},X=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},Q=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},J=0,Y=function(n,i,r,s){if(!z("body"))return!1;e||lt.Notify.init({});var o=V(!0,e,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var f={};"object"==typeof r?f=r:"object"==typeof s&&(f=s),e=V(!0,e,f)}var p=e[n.toLocaleLowerCase("en")];J++,"string"!=typeof i&&(i="Notiflix "+n),e.plainText&&(i=q(i)),!e.plainText&&i.length>e.messageMaxLength&&(e=V(!0,e,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>e.messageMaxLength&&(i=i.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),e.cssAnimation||(e.cssAnimationDuration=0);var m=t.document.getElementById(d.wrapID)||t.document.createElement("div");if(m.id=d.wrapID,m.style.width=e.width,m.style.zIndex=e.zindex,m.style.opacity=e.opacity,"center-center"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.top=e.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===e.position?(m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.left="auto"):"left-top"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===e.position?(m.style.left=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=e.distance,m.style.top=e.distance,m.style.left="auto",m.style.bottom="auto"),e.backOverlay){var g=t.document.getElementById(d.overlayID)||t.document.createElement("div");g.id=d.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=e.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=p.backOverlayColor||e.backOverlayColor,g.className=e.cssAnimation?"nx-with-animation":"",g.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(d.overlayID)||t.document.body.appendChild(g)}t.document.getElementById(d.wrapID)||t.document.body.appendChild(m);var y=t.document.createElement("div");y.id=e.ID+"-"+J,y.className=e.className+" "+p.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=e.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=e.borderRadius,y.style.pointerEvents="all",e.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+e.fontFamily+'", '+a,e.cssAnimation&&(y.style.animationDuration=e.cssAnimationDuration+"ms");var v="";if(e.closeButton&&"function"!=typeof r&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"");else{var b="";n===c?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===l?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===h&&(b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=b+'<span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"")}else y.innerHTML='<span class="nx-message">'+i+"</span>"+(e.closeButton?v:"");if("left-bottom"===e.position||"right-bottom"===e.position){var w=t.document.getElementById(d.wrapID);w.insertBefore(y,w.firstChild)}else t.document.getElementById(d.wrapID).appendChild(y);var x=t.document.getElementById(y.id);if(x){var k,E,T=function(){x.classList.add("nx-remove");var e=t.document.getElementById(d.overlayID);e&&0>=m.childElementCount&&e.classList.add("nx-remove"),clearTimeout(k)},I=function(){if(x&&null!==x.parentNode&&x.parentNode.removeChild(x),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var e=t.document.getElementById(d.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(E)};if(e.closeButton&&"function"!=typeof r&&t.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){T();var t=setTimeout((function(){I(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof r||e.clickToClose)&&x.addEventListener("click",(function(){"function"==typeof r&&r(),T();var t=setTimeout((function(){I(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof r){var N=function(){k=setTimeout((function(){T()}),e.timeout),E=setTimeout((function(){I()}),e.timeout+e.cssAnimationDuration)};N(),e.pauseOnHover&&(x.addEventListener("mouseenter",(function(){x.classList.add("nx-paused"),clearTimeout(k),clearTimeout(E)})),x.addEventListener("mouseleave",(function(){x.classList.remove("nx-paused"),N()})))}}if(e.showOnlyTheLastOne&&0<J)for(var _,C=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+J+"])"),S=0;S<C.length;S++)null!==(_=C[S]).parentNode&&_.parentNode.removeChild(_);e=V(!0,e,o)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},tt=function(e,i,r,s,o,c){if(!z("body"))return!1;n||lt.Report.init({});var l={};if("object"==typeof o&&!Array.isArray(o)||"object"==typeof c&&!Array.isArray(c)){var u={};"object"==typeof o?u=o:"object"==typeof c&&(u=c),l=V(!0,n,{}),n=V(!0,n,u)}var h=n[e.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+e),"string"!=typeof r&&(e===f?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':e===p?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':e===m?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':e===g&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof s&&(s="Okay"),n.plainText&&(i=q(i),r=q(r),s=q(s)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',s="Okay"),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',s="Okay"),s.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',s="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),s.length>n.buttonMaxLength&&(s=s.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var d=t.document.createElement("div");d.id=y.ID,d.className=n.className,d.style.zIndex=n.zindex,d.style.borderRadius=n.borderRadius,d.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on")),d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.alignItems="center",d.style.justifyContent="center";var v="",b=!0===n.backOverlayClickToClose;n.backOverlay&&(v='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(b?" nx-report-click-to-close":"")+'" style="background:'+(h.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var w="";if(e===f?w=function(t,e){return t||(t="110px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):e===p?w=function(t,e){return t||(t="110px"),e||(e="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):e===m?w=function(t,e){return t||(t="110px"),e||(e="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):e===g&&(w=function(t,e){return t||(t="110px"),e||(e="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor)),d.innerHTML=v+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+w+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+h.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+h.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+h.buttonBackground+"; color:"+h.buttonColor+';">'+s+"</a></div>",!t.document.getElementById(d.id)){t.document.body.appendChild(d);var x=function(){var e=t.document.getElementById(d.id);e.classList.add("nx-remove");var i=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e),clearTimeout(i)}),n.cssAnimationDuration)};t.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof o&&o(),x()})),v&&b&&t.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){x()}))}n=V(!0,n,l)},et=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},nt=function(e,n,r,s,o,c,l,u,h){if(!z("body"))return!1;i||lt.Confirm.init({});var d=V(!0,i,{});"object"!=typeof h||Array.isArray(h)||(i=V(!0,i,h)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof o&&(o="Yes"),"string"!=typeof c&&(c="No"),"function"!=typeof l&&(l=void 0),"function"!=typeof u&&(u=void 0),i.plainText&&(n=q(n),r=q(r),o=q(o),c=q(c)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',o="Okay",c="..."),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',o="Okay",c="..."),(o.length||c.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',o="Okay",c="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),o.length>i.buttonsMaxLength&&(o=o.substring(0,i.buttonsMaxLength)+"..."),c.length>i.buttonsMaxLength&&(c=c.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var f=t.document.createElement("div");f.id=x.ID,f.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),f.style.zIndex=i.zindex,f.style.padding=i.distance,i.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on"));var p="string"==typeof i.position?i.position.trim():"center";f.classList.add("nx-position-"+p),f.style.fontFamily='"'+i.fontFamily+'", '+a;var m="";i.backOverlay&&(m='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof l&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+c+"</a>");var y="",v=null,k=void 0;if(e===b||e===w){v=s||"";var E=e===b||200<v.length?Math.ceil(1.5*v.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(e===w?'value="'+v+'"':"")+' maxlength="'+E+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(f.innerHTML=m+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+r+y+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof l?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+o+"</a>"+g+"</div></div>",!t.document.getElementById(f.id)){t.document.body.appendChild(f);var T=t.document.getElementById(f.id),I=t.document.getElementById("NXConfirmButtonOk"),N=t.document.getElementById("NXConfirmValidationInput");N&&(N.focus(),N.setSelectionRange(0,(N.value||"").length),N.addEventListener("keyup",(function(t){var n=t.target.value;e===b&&n!==v?(t.preventDefault(),N.classList.add("nx-validation-failure"),N.classList.remove("nx-validation-success")):(e===b&&(N.classList.remove("nx-validation-failure"),N.classList.add("nx-validation-success")),("enter"===(t.key||"").toLocaleLowerCase("en")||13===t.keyCode)&&I.dispatchEvent(new Event("click")))}))),I.addEventListener("click",(function(t){if(e===b&&v&&N){if((N.value||"").toString()!==v)return N.focus(),N.classList.add("nx-validation-failure"),t.stopPropagation(),t.preventDefault(),t.returnValue=!1,t.cancelBubble=!0,!1;N.classList.remove("nx-validation-failure")}"function"==typeof l&&(e===w&&N&&(k=N.value||""),l(k)),T.classList.add("nx-remove");var n=setTimeout((function(){null!==T.parentNode&&(T.parentNode.removeChild(T),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof l&&t.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(e===w&&N&&(k=N.value||""),u(k)),T.classList.add("nx-remove");var t=setTimeout((function(){null!==T.parentNode&&(T.parentNode.removeChild(T),clearTimeout(t))}),i.cssAnimationDuration)}))}i=V(!0,i,d)},it=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},rt=function(e,n,i,s,o){if(!z("body"))return!1;r||lt.Loading.init({});var c=V(!0,r,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var l={};"object"==typeof n?l=n:"object"==typeof i&&(l=i),r=V(!0,r,l)}var u="";if("string"==typeof n&&0<n.length&&(u=n),s){var h="";0<(u=u.length>r.messageMaxLength?q(u).toString().substring(0,r.messageMaxLength)+"...":q(u).toString()).length&&(h='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+u+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var d="";if(e===k)d=W(r.svgSize,r.svgColor);else if(e===E)d=H(r.svgSize,r.svgColor);else if(e===T)d=$(r.svgSize,r.svgColor);else if(e===I)d=K(r.svgSize,r.svgColor);else if(e===N)d=G(r.svgSize,r.svgColor);else if(e===_)d=X(r.svgSize,r.svgColor);else if(e===C&&null!==r.customSvgCode&&null===r.customSvgUrl)d=r.customSvgCode||"";else if(e===C&&null!==r.customSvgUrl&&null===r.customSvgCode)d='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(e===C&&(null===r.customSvgUrl||null===r.customSvgCode))return F('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;d=function(t,e,n){return t||(t="60px"),e||(e="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+e+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(r.svgSize,"#f8f8f8","#32c682")}var f=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),p=t.innerWidth,m=f>=p?p-40+"px":f+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+r.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+d+"</div>",y=t.document.createElement("div");y.id=A.ID,y.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=r.zindex,y.style.background=r.backgroundColor,y.style.animationDuration=r.cssAnimationDuration+"ms",y.style.fontFamily='"'+r.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",r.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+h,!t.document.getElementById(y.id)&&(t.document.body.appendChild(y),r.clickToClose)&&t.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var t=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(t))}),r.cssAnimationDuration)}))}else if(t.document.getElementById(A.ID))var v=t.document.getElementById(A.ID),b=setTimeout((function(){v.classList.add("nx-remove");var t=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(t))}),r.cssAnimationDuration);clearTimeout(b)}),o);r=V(!0,r,c)},st=function(e){"string"!=typeof e&&(e="");var n=t.document.getElementById(A.ID);if(n)if(0<e.length){e=e.length>r.messageMaxLength?q(e).substring(0,r.messageMaxLength)+"...":q(e);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=e;else{var s=t.document.createElement("p");s.id=r.messageID,s.className="nx-loading-message nx-loading-message-new",s.style.color=r.messageColor,s.style.fontSize=r.messageFontSize,s.innerHTML=e,n.appendChild(s)}}else F("Where is the new message?")},ot=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},at=0,ct=function(e,n,i,r,o,c){var l;if(Array.isArray(i)){if(1>i.length)return F("Array of HTMLElements should contains at least one HTMLElement."),!1;l=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return F("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;l=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return F("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=t.document.querySelectorAll(i);if(1>u.length)return F('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;l=u}s||lt.Block.init({});var h=V(!0,s,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof o&&!Array.isArray(o)){var d={};"object"==typeof r?d=r:"object"==typeof o&&(d=o),s=V(!0,s,d)}var f="";"string"==typeof r&&0<r.length&&(f=r),s.cssAnimation||(s.cssAnimationDuration=0);var p=U.className;"string"==typeof s.className&&(p=s.className.trim());var m="number"==typeof s.querySelectorLimit?s.querySelectorLimit:200,g=(l||[]).length>=m?m:l.length,y="nx-block-temporary-position";if(e){for(var v,b=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],w=0;w<g;w++)if(v=l[w]){if(-1<b.indexOf(v.tagName.toLocaleLowerCase("en")))break;var x=v.querySelectorAll("[id^="+U.ID+"]");if(1>x.length){var k="";n&&(k=n===R?H(s.svgSize,s.svgColor):n===O?$(s.svgSize,s.svgColor):n===D?K(s.svgSize,s.svgColor):n===P?G(s.svgSize,s.svgColor):n===M?X(s.svgSize,s.svgColor):W(s.svgSize,s.svgColor));var E='<span class="'+p+'-icon" style="width:'+s.svgSize+";height:"+s.svgSize+';">'+k+"</span>",T="";0<f.length&&(f=f.length>s.messageMaxLength?q(f).substring(0,s.messageMaxLength)+"...":q(f),T='<span style="font-size:'+s.messageFontSize+";color:"+s.messageColor+';" class="'+p+'-message">'+f+"</span>"),at++;var I=t.document.createElement("div");I.id=U.ID+"-"+at,I.className=p+(s.cssAnimation?" nx-with-animation":""),I.style.position=s.position,I.style.zIndex=s.zindex,I.style.background=s.backgroundColor,I.style.animationDuration=s.cssAnimationDuration+"ms",I.style.fontFamily='"'+s.fontFamily+'", '+a,I.style.display="flex",I.style.flexWrap="wrap",I.style.flexDirection="column",I.style.alignItems="center",I.style.justifyContent="center",s.rtl&&(I.setAttribute("dir","rtl"),I.classList.add("nx-rtl-on")),I.innerHTML=E+T;var N,_=t.getComputedStyle(v).getPropertyValue("position"),C="string"==typeof _?_.toLocaleLowerCase("en"):"relative",S=Math.round(1.25*parseInt(s.svgSize))+40,A="";S>(v.offsetHeight||0)&&(A="min-height:"+S+"px;"),N=v.getAttribute("id")?"#"+v.getAttribute("id"):v.classList[0]?"."+v.classList[0]:(v.tagName||"").toLocaleLowerCase("en");var L="",j=-1>=["absolute","relative","fixed","sticky"].indexOf(C);if(j||0<A.length){if(!z("head"))return!1;j&&(L="position:relative!important;");var Q='<style id="Style-'+U.ID+"-"+at+'">'+N+"."+y+"{"+L+A+"}</style>",J=t.document.createRange();J.selectNode(t.document.head);var Y=J.createContextualFragment(Q);t.document.head.appendChild(Y),v.classList.add(y)}v.appendChild(I)}}}else var Z=function(e){var n=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e);var i=e.getAttribute("id"),r=t.document.getElementById("Style-"+i);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(n)}),s.cssAnimationDuration)},tt=function(t){if(t&&0<t.length)for(var e,n=0;n<t.length;n++)(e=t[n])&&(e.classList.add("nx-remove"),Z(e));else B("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},et=function(t){var e=setTimeout((function(){t.classList.remove(y),clearTimeout(e)}),s.cssAnimationDuration+300)},nt=setTimeout((function(){for(var t,e=0;e<g;e++)(t=l[e])&&(et(t),x=t.querySelectorAll("[id^="+U.ID+"]"),tt(x));clearTimeout(nt)}),c);s=V(!0,s,h)},lt={Notify:{init:function(t){e=V(!0,d,t),j(Q,"NotiflixNotifyInternalCSS")},merge:function(t){return e?void(e=V(!0,e,t)):(F("You have to initialize the Notify module before call Merge function."),!1)},success:function(t,e,n){Y(c,t,e,n)},failure:function(t,e,n){Y(l,t,e,n)},warning:function(t,e,n){Y(u,t,e,n)},info:function(t,e,n){Y(h,t,e,n)}},Report:{init:function(t){n=V(!0,y,t),j(Z,"NotiflixReportInternalCSS")},merge:function(t){return n?void(n=V(!0,n,t)):(F("You have to initialize the Report module before call Merge function."),!1)},success:function(t,e,n,i,r){tt(f,t,e,n,i,r)},failure:function(t,e,n,i,r){tt(p,t,e,n,i,r)},warning:function(t,e,n,i,r){tt(m,t,e,n,i,r)},info:function(t,e,n,i,r){tt(g,t,e,n,i,r)}},Confirm:{init:function(t){i=V(!0,x,t),j(et,"NotiflixConfirmInternalCSS")},merge:function(t){return i?void(i=V(!0,i,t)):(F("You have to initialize the Confirm module before call Merge function."),!1)},show:function(t,e,n,i,r,s,o){nt(v,t,e,null,n,i,r,s,o)},ask:function(t,e,n,i,r,s,o,a){nt(b,t,e,n,i,r,s,o,a)},prompt:function(t,e,n,i,r,s,o,a){nt(w,t,e,n,i,r,s,o,a)}},Loading:{init:function(t){r=V(!0,A,t),j(it,"NotiflixLoadingInternalCSS")},merge:function(t){return r?void(r=V(!0,r,t)):(F("You have to initialize the Loading module before call Merge function."),!1)},standard:function(t,e){rt(k,t,e,!0,0)},hourglass:function(t,e){rt(E,t,e,!0,0)},circle:function(t,e){rt(T,t,e,!0,0)},arrows:function(t,e){rt(I,t,e,!0,0)},dots:function(t,e){rt(N,t,e,!0,0)},pulse:function(t,e){rt(_,t,e,!0,0)},custom:function(t,e){rt(C,t,e,!0,0)},notiflix:function(t,e){rt(S,t,e,!0,0)},remove:function(t){"number"!=typeof t&&(t=0),rt(null,null,null,!1,t)},change:function(t){st(t)}},Block:{init:function(t){s=V(!0,U,t),j(ot,"NotiflixBlockInternalCSS")},merge:function(t){return s?void(s=V(!0,s,t)):(F('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(t,e,n){ct(!0,L,t,e,n)},hourglass:function(t,e,n){ct(!0,R,t,e,n)},circle:function(t,e,n){ct(!0,O,t,e,n)},arrows:function(t,e,n){ct(!0,D,t,e,n)},dots:function(t,e,n){ct(!0,P,t,e,n)},pulse:function(t,e,n){ct(!0,M,t,e,n)},remove:function(t,e){"number"!=typeof e&&(e=0),ct(!1,null,t,null,null,e)}}};return"object"==typeof t.Notiflix?V(!0,t.Notiflix,{Notify:lt.Notify,Report:lt.Report,Confirm:lt.Confirm,Loading:lt.Loading,Block:lt.Block}):{Notify:lt.Notify,Report:lt.Report,Confirm:lt.Confirm,Loading:lt.Loading,Block:lt.Block}},"function"==typeof define&&define.amd?define([],(function(){return Yr(Jr)})):"object"==typeof Zr?Zr=Yr(Jr):Jr.Notiflix=Yr(Jr);var ts={};ts=function t(e,n,i){function r(o,a){if(!n[o]){if(!e[o]){var c=void 0;if(!a&&c)return c(o,!0);if(s)return s(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[o]={exports:{}};e[o][0].call(u.exports,(function(t){return r(e[o][1][t]||t)}),u,u.exports,t,e,n,i)}return n[o].exports}for(var s=void 0,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var i=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=t.trim(),!0===e?n.children:n.firstChild},r=function(t,e){var n=t.children;return 1===n.length&&n[0].tagName===e},s=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};n.visible=s,n.create=function(t,e){var n=function(t,e){var n=i('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),s=n.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return s.appendChild(t)}));var o=r(s,"IMG"),a=r(s,"VIDEO"),c=r(s,"IFRAME");return!0===o&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===c&&n.classList.add("basicLightbox--iframe"),n}(t=function(t){var e="string"==typeof t,n=t instanceof HTMLElement==1;if(!1===e&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(i(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),o=function(t){return!1!==e.onClose(a)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===s(t)||t.parentElement.removeChild(t),e()}),410),!0}(n,(function(){if("function"==typeof t)return t(a)}))};!0===e.closable&&n.addEventListener("click",(function(t){t.target===n&&o()}));var a={element:function(){return n},visible:function(){return s(n)},show:function(t){return!1!==e.onShow(a)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(n,(function(){if("function"==typeof t)return t(a)}))},close:o};return a}},{}]},{},[1])(1);const es="https://api.themoviedb.org/3/movie/",ns="d03712107dcdd723f1173c5ee2c0d8c1";async function is(t){Hr.trailerBtn.classList.remove("visually-hidden");try{const e=await fr.get(`${es}${t}/videos?api_key=${ns}`);return e.data.results[0].key}catch(t){Hr.trailerBtn.classList.add("visually-hidden")}}function rs(t){const e=document.querySelector(".js-btn-watched"),n=document.querySelector(".js-btn-queue"),i="watchedMovies",r="queueMovies";e.addEventListener("click",(()=>{try{let e=localStorage.getItem(i);if(e){let n=JSON.parse(e);n.some((e=>e.id===t.id))?console.log("This film in your collection"):(n.push(t),localStorage.setItem(i,JSON.stringify(n)))}else localStorage.setItem(i,JSON.stringify([t]))}catch(t){console.error("Set state error: ",t.message)}})),n.addEventListener("click",(()=>{try{let e=localStorage.getItem(r);if(e){let n=JSON.parse(e);n.some((e=>e.id===t.id))?console.log("This film in your collection"):(n.push(t),localStorage.setItem(r,JSON.stringify(n)))}else localStorage.setItem(r,JSON.stringify([t]))}catch(t){console.error("Set state error: ",t.message)}}))}function ss(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;function os(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const as=os,cs=new F("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ls=new at("@firebase/auth");function us(t,...e){ls.logLevel<=et.ERROR&&ls.error(`Auth (${Bt}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t,...e){throw ms(t,...e)}function ds(t,...e){return ms(t,...e)}function fs(t,e,n){const i=Object.assign(Object.assign({},as()),{[e]:n});return new F("auth","Firebase",i).create(e,{appName:t.name})}function ps(t,e,n){if(!(e instanceof n))throw n.name!==e.constructor.name&&hs(t,"argument-error"),fs(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ms(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return cs.create(t,...e)}function gs(t,e,...n){if(!t)throw ms(e,...n)}function ys(t){const e="INTERNAL ASSERTION FAILED: "+t;throw us(e),new Error(e)}function vs(t,e){t||ys(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=new Map;function ws(t){vs(t instanceof Function,"Expected a class definition");let e=bs.get(t);return e?(vs(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bs.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xs(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function ks(){return"http:"===Es()||"https:"===Es()}function Es(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(ks()||D()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Is{get(){return Ts()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(t,e){this.shortDelay=t,this.longDelay=e,vs(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(O())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t,e){vs(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ys("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ys("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ys("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Ss=new Is(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ls(t,e,n,i,r={}){return Rs(t,r,(async()=>{let r={},s={};i&&("GET"===e?s=i:r={body:JSON.stringify(i)});const o=q(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),_s.fetch()(Ds(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Rs(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Cs),e);try{const e=new Ps(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Ms(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ms(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Ms(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw Ms(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw fs(t,a,o);hs(t,a)}}catch(e){if(e instanceof U)throw e;hs(t,"network-request-failed")}}async function Os(t,e,n,i,r={}){const s=await Ls(t,e,n,i,r);return"mfaPendingCredential"in s&&hs(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ds(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Ns(t.config,r):`${t.config.apiScheme}://${r}`}class Ps{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(ds(this.auth,"network-request-failed"))),Ss.get())}))}}function Ms(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=ds(t,e,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Us(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){return 1e3*Number(t)}function Bs(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return us("JWT malformed, contained fewer than 3 sections"),null;try{const t=T(n);return t?JSON.parse(t):(us("Failed to decode base64 JWT payload"),null)}catch(t){return us("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function zs(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof U&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class js{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{_initializeTime(){this.lastSignInTime=Us(this.lastLoginAt),this.creationTime=Us(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t){var e;const n=t.auth,i=await t.getIdToken(),r=await zs(t,async function(t,e){return Ls(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));gs(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=ss(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,l=o,[...c.filter((t=>!l.some((e=>e.providerId===t.providerId)))),...l]);var c,l;const u=t.isAnonymous,h=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Vs(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ws{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){gs(t.idToken,"internal-error"),gs(void 0!==t.idToken,"internal-error"),gs(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Bs(t);return gs(e,"internal-error"),gs(void 0!==e.exp,"internal-error"),gs(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return gs(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){const n=await Rs(t,{},(async()=>{const n=q({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,s=Ds(t,i,"/v1/token",`key=${r}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",_s.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new Ws;return n&&(gs("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(gs("string"==typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(gs("number"==typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ws,this.toJSON())}_performRefresh(){return ys("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t,e){gs("string"==typeof t||void 0===t,"internal-error",{appName:e})}class $s{async getIdToken(t){const e=await zs(this,this.stsTokenManager.getToken(this.auth,t));return gs(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=X(t),i=await n.getIdToken(e),r=Bs(i);gs(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Us(Fs(r.auth_time)),issuedAtTime:Us(Fs(r.iat)),expirationTime:Us(Fs(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=X(t);await qs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(gs(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new $s(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){gs(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await qs(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await zs(this,async function(t,e){return Ls(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:x,stsTokenManager:k}=e;gs(v&&k,t,"internal-error");const E=Ws.fromJSON(this.name,k);gs("string"==typeof v,t,"internal-error"),Hs(u,t.name),Hs(h,t.name),gs("boolean"==typeof b,t,"internal-error"),gs("boolean"==typeof w,t,"internal-error"),Hs(d,t.name),Hs(f,t.name),Hs(p,t.name),Hs(m,t.name),Hs(g,t.name),Hs(y,t.name);const T=new $s({uid:v,auth:t,email:h,emailVerified:b,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(T.providerData=x.map((t=>Object.assign({},t)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(t,e,n=!1){const i=new Ws;i.updateFromServerResponse(e);const r=new $s({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await qs(r),r}constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=ss(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new js(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Vs(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}constructor(){this.type="NONE",this.storage={}}}Ks.type="NONE";const Gs=Ks;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t,e,n){return`firebase:${t}:${e}:${n}`}class Qs{setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?$s._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new Qs(ws(Gs),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||ws(Gs);const s=Xs(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const i=$s._fromJSON(t,e);n!==r&&(o=i),r=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(t){}}))),new Qs(r,t,n)):new Qs(r,t,n)}constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Xs(this.userKey,i.apiKey,r),this.fullPersistenceKey=Xs("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ys(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(io(e))return"Blackberry";if(ro(e))return"Webos";if(Zs(e))return"Safari";if((e.includes("chrome/")||to(e))&&!e.includes("edge/"))return"Chrome";if(no(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ys(t=O()){return/firefox\//i.test(t)}function Zs(t=O()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function to(t=O()){return/crios\//i.test(t)}function eo(t=O()){return/iemobile/i.test(t)}function no(t=O()){return/android/i.test(t)}function io(t=O()){return/blackberry/i.test(t)}function ro(t=O()){return/webos/i.test(t)}function so(t=O()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function oo(){return P()&&10===document.documentMode}function ao(t=O()){return so(t)||no(t)||ro(t)||io(t)||/windows phone/i.test(t)||eo(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function co(t,e=[]){let n;switch(t){case"Browser":n=Js(O());break;case"Worker":n=`${Js(O())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bt}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{n(t(e))}catch(t){i(t)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}constructor(t){this.auth=t,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ws(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Qs.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return gs(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await qs(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?X(t):null;return e&&gs(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&gs(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ws(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new F("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ws(t)||this._popupRedirectResolver;gs(e,this,"argument-error"),this.redirectPersistenceManager=await Qs.create(this,[ws(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return gs(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return gs(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=co(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fo(this),this.idTokenSubscription=new fo(this),this.beforeStateQueue=new lo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cs,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}}function ho(t){return X(t)}class fo{get next(){return gs(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(t){this.auth=t,this.observer=null,this.addObserver=$((t=>this.observer=t))}}function po(t,e,n){const i=ho(t);gs(i._canInitEmulator,i,"emulator-config-failed"),gs(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=mo(e),{host:o,port:a}=function(t){const e=mo(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:go(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:go(e)}}}(e),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function mo(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function go(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class yo{toJSON(){return ys("not implemented")}_getIdTokenResponse(t){return ys("not implemented")}_linkToIdToken(t,e){return ys("not implemented")}_getReauthenticationResolver(t){return ys("not implemented")}constructor(t,e){this.providerId=t,this.signInMethod=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(t,e){return Ls(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bo extends yo{static _fromEmailAndPassword(t,e){return new bo(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new bo(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return Os(t,"POST","/v1/accounts:signInWithPassword",As(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return Os(t,"POST","/v1/accounts:signInWithEmailLink",As(t,e))}(t,{email:this._email,oobCode:this._password});default:hs(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return vo(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return Os(t,"POST","/v1/accounts:signInWithEmailLink",As(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:hs(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t,e){return Os(t,"POST","/v1/accounts:signInWithIdp",As(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends yo{static _fromParams(t){const e=new xo(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):hs("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=ss(e,["providerId","signInMethod"]);if(!n||!i)return null;const s=new xo(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(t){return wo(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,wo(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,wo(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=q(e)}return t}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eo extends yo{static _fromVerification(t,e){return new Eo({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Eo({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return Os(t,"POST","/v1/accounts:signInWithPhoneNumber",As(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await Os(t,"POST","/v1/accounts:signInWithPhoneNumber",As(t,e));if(n.temporaryProof)throw Ms(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return Os(t,"POST","/v1/accounts:signInWithPhoneNumber",As(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),ko)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new Eo({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(t){super("phone","phone"),this.params=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{static parseLink(t){const e=function(t){const e=W(H(t)).link,n=e?W(H(e)).deep_link_id:null,i=W(H(t)).deep_link_id;return(i?W(H(i)).link:null)||i||n||e||t}(t);try{return new To(e)}catch(t){return null}}constructor(t){var e,n,i,r,s,o;const a=W(H(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);gs(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Io{static credential(t,e){return bo._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=To.parseLink(e);return gs(n,"argument-error"),bo._fromEmailAndCode(t,n.code,n.tenantId)}constructor(){this.providerId=Io.PROVIDER_ID}}Io.PROVIDER_ID="password",Io.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Io.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class No{setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends No{addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Co extends _o{static credential(t){return xo._fromParams({providerId:Co.PROVIDER_ID,signInMethod:Co.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Co.credentialFromTaggedObject(t)}static credentialFromError(t){return Co.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Co.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("facebook.com")}}Co.FACEBOOK_SIGN_IN_METHOD="facebook.com",Co.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class So extends _o{static credential(t,e){return xo._fromParams({providerId:So.PROVIDER_ID,signInMethod:So.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return So.credentialFromTaggedObject(t)}static credentialFromError(t){return So.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return So.credential(e,n)}catch(t){return null}}constructor(){super("google.com"),this.addScope("profile")}}So.GOOGLE_SIGN_IN_METHOD="google.com",So.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ao extends _o{static credential(t){return xo._fromParams({providerId:Ao.PROVIDER_ID,signInMethod:Ao.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ao.credentialFromTaggedObject(t)}static credentialFromError(t){return Ao.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ao.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("github.com")}}Ao.GITHUB_SIGN_IN_METHOD="github.com",Ao.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lo extends _o{static credential(t,e){return xo._fromParams({providerId:Lo.PROVIDER_ID,signInMethod:Lo.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Lo.credentialFromTaggedObject(t)}static credentialFromError(t){return Lo.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Lo.credential(e,n)}catch(t){return null}}constructor(){super("twitter.com")}}Lo.TWITTER_SIGN_IN_METHOD="twitter.com",Lo.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ro{static async _fromIdTokenResponse(t,e,n,i=!1){const r=await $s._fromIdTokenResponse(t,n,i),s=Oo(n);return new Ro({user:r,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=Oo(n);return new Ro({user:t,providerId:i,_tokenResponse:n,operationType:e})}constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}}function Oo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Do extends U{static _fromErrorAndOperation(t,e,n,i){return new Do(t,e,n,i)}constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Do.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}}function Po(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Do._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(t,e,n=!1){const i=await zs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ro._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Uo(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await zs(t,Po(i,r,e,t),n);gs(s.idToken,i,"internal-error");const o=Bs(s.idToken);gs(o,i,"internal-error");const{sub:a}=o;return gs(t.uid===a,i,"user-mismatch"),Ro._forOperation(t,r,s)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&hs(i,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(t,e,n=!1){const i="signIn",r=await Po(t,i,e),s=await Ro._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}new WeakMap;const Bo="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{_isAvailable(){try{return this.storage?(this.storage.setItem(Bo,"1"),this.storage.removeItem(Bo),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(t,e){this.storageRetriever=t,this.type=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends zo{forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);oo()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=O();return Zs(t)||so(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=ao(),this._shouldAllowMigration=!0}}jo.type="LOCAL";const Vo=jo;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends zo{_addListener(t,e){}_removeListener(t,e){}constructor(){super((()=>window.sessionStorage),"SESSION")}}qo.type="SESSION";const Wo=qo;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ho{static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Ho(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async t=>t(e.origin,r))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $o(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ho.receivers=[];class Ko{removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=$o("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(t){this.target=t,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xo(){return void 0!==Go().WorkerGlobalScope&&"function"==typeof Go().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qo="firebaseLocalStorageDb",Jo=1,Yo="firebaseLocalStorage",Zo="fbase_key";class ta{toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}constructor(t){this.request=t}}function ea(t,e){return t.transaction([Yo],e?"readwrite":"readonly").objectStore(Yo)}function na(){const t=indexedDB.open(Qo,Jo);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Yo,{keyPath:Zo})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Yo)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(Qo);return new ta(t).toPromise()}(),e(await na()))}))}))}async function ia(t,e,n){const i=ea(t,!0).put({[Zo]:e,value:n});return new ta(i).toPromise()}function ra(t,e){const n=ea(t,!0).delete(e);return new ta(n).toPromise()}class sa{async _openDb(){return this.db||(this.db=await na()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ho._getInstance(Xo()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Ko(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await na();return await ia(t,Bo,"1"),await ra(t,Bo),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>ia(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=ea(t,!1).get(e),i=await new ta(n).toPromise();return void 0===i?null:i.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>ra(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=ea(t,!1).getAll();return new ta(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}sa.type="LOCAL";const oa=sa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t){return new Promise(((e,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,s;i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=ds("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function ca(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ca("rcb"),new Is(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const la="recaptcha";async function ua(t,e,n){var i;const r=await n.verify();try{let s;if(gs("string"==typeof r,t,"argument-error"),gs(n.type===la,t,"argument-error"),s="string"==typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){gs("enroll"===e.type,t,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){return Ls(t,"POST","/v2/accounts/mfaEnrollment:start",As(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{gs("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;gs(n,t,"missing-multi-factor-info");const o=await function(t,e){return Ls(t,"POST","/v2/accounts/mfaSignIn:start",As(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return Ls(t,"POST","/v1/accounts:sendVerificationCode",As(t,e))}(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ha{verifyPhoneNumber(t,e){return ua(this.auth,t,X(e))}static credential(t,e){return Eo._fromVerification(t,e)}static credentialFromResult(t){const e=t;return ha.credentialFromTaggedObject(e)}static credentialFromError(t){return ha.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Eo._fromTokenResponse(e,n):null}constructor(t){this.providerId=ha.PROVIDER_ID,this.auth=ho(t)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function da(t,e){return e?ws(e):(gs(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ha.PROVIDER_ID="phone",ha.PHONE_SIGN_IN_METHOD="phone";class fa extends yo{_getIdTokenResponse(t){return wo(t,this._buildIdpRequest())}_linkToIdToken(t,e){return wo(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return wo(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}constructor(t){super("custom","custom"),this.params=t}}function pa(t){return Fo(t.auth,new fa(t),t.bypassAuthState)}function ma(t){const{auth:e,user:n}=t;return gs(n,e,"internal-error"),Uo(n,new fa(t),t.bypassAuthState)}async function ga(t){const{auth:e,user:n}=t;return gs(n,e,"internal-error"),Mo(n,new fa(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return pa;case"linkViaPopup":case"linkViaRedirect":return ga;case"reauthViaPopup":case"reauthViaRedirect":return ma;default:hs(this.auth,"internal-error")}}resolve(t){vs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){vs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=new Is(2e3,1e4);async function ba(t,e,n){const i=ho(t);ps(t,e,No);const r=da(i,n);return new wa(i,"signInViaPopup",e,r).executeNotNull()}class wa extends ya{async executeNotNull(){const t=await this.execute();return gs(t,this.auth,"internal-error"),t}async onExecution(){vs(1===this.filter.length,"Popup operations only handle one event");const t=$o();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(ds(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(ds(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wa.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ds(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,va.get())};t()}constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,wa.currentPopupAction&&wa.currentPopupAction.cancel(),wa.currentPopupAction=this}}wa.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xa="pendingRedirect",ka=new Map;class Ea extends ya{async execute(){let t=ka.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=Na(e),i=Ia(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}ka.set(this.auth._key(),t)}return this.bypassAuthState||ka.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}}function Ta(t,e){ka.set(t._key(),e)}function Ia(t){return ws(t._redirectPersistence)}function Na(t){return Xs(xa,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(t,e,n=!1){const i=ho(t),r=da(i,e),s=new Ea(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}class Ca{registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Aa(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Aa(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(ds(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sa(t))}saveEventToCache(t){this.cachedEventUids.add(Sa(t)),this.lastProcessedEventTime=Date.now()}constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Sa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Aa({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const La=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ra=/^https?/;async function Oa(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return Ls(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Da(t))return}catch(t){}hs(t,"unauthorized-domain")}function Da(t){const e=xs(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Ra.test(n))return!1;if(La.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=new Is(3e4,6e4);function Ma(){const t=Go().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Ua=null;function Fa(t){return Ua=Ua||function(t){return new Promise(((e,n)=>{var i,r,s;function o(){Ma(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ma(),n(ds(t,"network-request-failed"))},timeout:Pa.get()})}if(null===(r=null===(i=Go().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Go().gapi)||void 0===s?void 0:s.load)){const e=ca("iframefcb");return Go()[e]=()=>{gapi.load?o():n(ds(t,"network-request-failed"))},aa(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Ua=null,t}))}(t),Ua}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=new Is(5e3,15e3),za="__/auth/iframe",ja="emulator/auth/iframe",Va={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qa=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wa(t){const e=t.config;gs(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ns(e,ja):`https://${t.config.authDomain}/${za}`,i={apiKey:e.apiKey,appName:t.name,v:Bt},r=qa.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${q(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ha={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$a=500,Ka=600,Ga="_blank",Xa="http://localhost";class Qa{close(){if(this.window)try{this.window.close()}catch(t){}}constructor(t){this.window=t,this.associatedEvent=null}}function Ja(t,e,n,i=$a,r=Ka){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ha),{width:i.toString(),height:r.toString(),top:s,left:o}),l=O().toLowerCase();n&&(a=to(l)?Ga:n),Ys(l)&&(e=e||Xa,c.scrollbars="yes");const u=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=O()){var e;return so(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(l)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",a),new Qa(null);const h=window.open(e||"",a,u);gs(h,t,"popup-blocked");try{h.focus()}catch(t){}return new Qa(h)}const Ya="__/auth/handler",Za="emulator/auth/handler";function tc(t,e,n,i,r,s){gs(t.config.authDomain,t,"auth-domain-config-required"),gs(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Bt,eventId:r};if(e instanceof No){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",z(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof _o){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){return t.emulator?Ns(t,Za):`https://${t.authDomain}/${Ya}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${q(a).slice(1)}`}const ec="webStorageSupport";const nc=class{async _openPopup(t,e,n,i){var r;vs(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Ja(t,tc(t,e,n,xs(),i),$o())}async _openRedirect(t,e,n,i){var r;return await this._originValidation(t),r=tc(t,e,n,xs(),i),Go().location.href=r,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(vs(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await Fa(t),n=Go().gapi;return gs(n,t,"internal-error"),e.open({where:document.body,url:Wa(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Va,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=ds(t,"network-request-failed"),s=Go().setTimeout((()=>{i(r)}),Ba.get());function o(){Go().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{i(r)}))}))))}(t),n=new Ca(t);return e.register("authEvent",(e=>{gs(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(ec,{type:ec},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[ec];void 0!==r&&e(!!r),hs(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Oa(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return ao()||Zs()||so()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wo,this._completeRedirectFn=_a,this._overrideRedirectResult=Ta}};var ic="@firebase/auth",rc="0.21.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sc{getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){gs(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(t){this.auth=t,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oc=A("authIdTokenMaxAge")||300;let ac=null;const cc=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>oc)return;const r=null==n?void 0:n.token;ac!==r&&(ac=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function lc(t=jt()){const e=Mt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=Mt(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(j(n.getOptions(),null!=e?e:{}))return t;hs(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:nc,persistence:[oa,Vo,Wo]}),i=A("authTokenSyncURL");if(i){const t=cc(i);!function(t,e,n){X(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,i){X(t).onIdTokenChanged(e,n,i)}(n,(e=>t(e)))}const r=_("auth");return r&&po(n,`http://${r}`),n}var uc;uc="Browser",Pt(new Q("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((t,n)=>{gs(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),gs(!(null==s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:r,authDomain:s,clientPlatform:uc,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:co(uc)},o=new uo(t,n,i);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ws);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(o,e),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),Pt(new Q("auth-internal",(t=>(t=>new sc(t))(ho(t.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(ic,rc,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(uc)),Vt(ic,rc,"esm2017");var hc,dc="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},fc={},pc=pc||{},mc=dc||self;function gc(){}function yc(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function vc(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var bc="closure_uid_"+(1e9*Math.random()>>>0),wc=0;function xc(t,e,n){return t.call.apply(t.bind,arguments)}function kc(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Ec(t,e,n){return(Ec=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?xc:kc).apply(null,arguments)}function Tc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Ic(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function Nc(){this.s=this.s,this.o=this.o}Nc.prototype.s=!1,Nc.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,bc)&&t[bc]||(t[bc]=++wc))},Nc.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _c=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Cc(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Sc(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(yc(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function Ac(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ac.prototype.h=function(){this.defaultPrevented=!0};var Lc=function(){if(!mc.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{mc.addEventListener("test",gc,e),mc.removeEventListener("test",gc,e)}catch(t){}return t}();function Rc(t){return/^[\s\xa0]*$/.test(t)}var Oc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Dc(t,e){return t<e?-1:t>e?1:0}function Pc(){var t=mc.navigator;return t&&(t=t.userAgent)?t:""}function Mc(t){return-1!=Pc().indexOf(t)}function Uc(t){return Uc[" "](t),t}Uc[" "]=gc;var Fc,Bc,zc=Mc("Opera"),jc=Mc("Trident")||Mc("MSIE"),Vc=Mc("Edge"),qc=Vc||jc,Wc=Mc("Gecko")&&!(-1!=Pc().toLowerCase().indexOf("webkit")&&!Mc("Edge"))&&!(Mc("Trident")||Mc("MSIE"))&&!Mc("Edge"),Hc=-1!=Pc().toLowerCase().indexOf("webkit")&&!Mc("Edge");function $c(){var t=mc.document;return t?t.documentMode:void 0}t:{var Kc="",Gc=(Bc=Pc(),Wc?/rv:([^\);]+)(\)|;)/.exec(Bc):Vc?/Edge\/([\d\.]+)/.exec(Bc):jc?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Bc):Hc?/WebKit\/(\S+)/.exec(Bc):zc?/(?:Version)[ \/]?(\S+)/.exec(Bc):void 0);if(Gc&&(Kc=Gc?Gc[1]:""),jc){var Xc=$c();if(null!=Xc&&Xc>parseFloat(Kc)){Fc=String(Xc);break t}}Fc=Kc}var Qc,Jc={};function Yc(){return function(t){var e=Jc;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Oc(String(Fc)).split("."),n=Oc("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=Dc(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||Dc(0==r[2].length,0==s[2].length)||Dc(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))}if(mc.document&&jc){var Zc=$c();Qc=Zc||(parseInt(Fc,10)||void 0)}else Qc=void 0;var tl=Qc;function el(t,e){if(Ac.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Wc){t:{try{Uc(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:nl[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&el.X.h.call(this)}}Ic(el,Ac);var nl={2:"touch",3:"pen",4:"mouse"};el.prototype.h=function(){el.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var il="closure_listenable_"+(1e6*Math.random()|0),rl=0;function sl(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++rl,this.ba=this.ea=!1}function ol(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function al(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function cl(t){const e={};for(const n in t)e[n]=t[n];return e}const ll="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ul(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<ll.length;e++)n=ll[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function hl(t){this.src=t,this.g={},this.h=0}function dl(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=_c(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ol(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function fl(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}hl.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=fl(t,e,i,r);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new sl(e,this.src,s,!!i,r)).ea=n,t.push(e)),e};var pl="closure_lm_"+(1e6*Math.random()|0),ml={};function gl(t,e,n,i,r){if(i&&i.once)return vl(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)gl(t,e[s],n,i,r);return null}return n=Il(n),t&&t[il]?t.N(e,n,vc(i)?!!i.capture:!!i,r):yl(t,e,n,!1,i,r)}function yl(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=vc(r)?!!r.capture:!!r,a=El(t);if(a||(t[pl]=a=new hl(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=kl;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Lc||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(xl(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function vl(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)vl(t,e[s],n,i,r);return null}return n=Il(n),t&&t[il]?t.O(e,n,vc(i)?!!i.capture:!!i,r):yl(t,e,n,!0,i,r)}function bl(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)bl(t,e[s],n,i,r);else i=vc(i)?!!i.capture:!!i,n=Il(n),t&&t[il]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=fl(s=t.g[e],n,i,r))&&(ol(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=El(t))&&(e=t.g[e.toString()],t=-1,e&&(t=fl(e,n,i,r)),(n=-1<t?e[t]:null)&&wl(n))}function wl(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[il])dl(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(xl(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=El(e))?(dl(n,t),0==n.h&&(n.src=null,e[pl]=null)):ol(t)}}}function xl(t){return t in ml?ml[t]:ml[t]="on"+t}function kl(t,e){if(t.ba)t=!0;else{e=new el(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&wl(t),t=n.call(i,e)}return t}function El(t){return(t=t[pl])instanceof hl?t:null}var Tl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Il(t){return"function"==typeof t?t:(t[Tl]||(t[Tl]=function(e){return t.handleEvent(e)}),t[Tl])}function Nl(){Nc.call(this),this.i=new hl(this),this.P=this,this.I=null}function _l(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new Ac(e,t);else if(e instanceof Ac)e.target=e.target||t;else{var r=e;ul(e=new Ac(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Cl(o,i,!0,e)&&r}if(r=Cl(o=e.g=t,i,!0,e)&&r,r=Cl(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=Cl(o=e.g=n[s],i,!1,e)&&r}function Cl(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&dl(t.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}Ic(Nl,Nc),Nl.prototype[il]=!0,Nl.prototype.removeEventListener=function(t,e,n,i){bl(this,t,e,n,i)},Nl.prototype.M=function(){if(Nl.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)ol(n[i]);delete e.g[t],e.h--}}this.I=null},Nl.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Nl.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Sl=mc.JSON.stringify;function Al(){var t=Ul;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Ll,Rl=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new Ol),(t=>t.reset()));class Ol{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function Dl(t){mc.setTimeout((()=>{throw t}),0)}function Pl(t,e){Ll||function(){var t=mc.Promise.resolve(void 0);Ll=function(){t.then(Fl)}}(),Ml||(Ll(),Ml=!0),Ul.add(t,e)}var Ml=!1,Ul=new class{add(t,e){const n=Rl.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function Fl(){for(var t;t=Al();){try{t.h.call(t.g)}catch(t){Dl(t)}var e=Rl;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ml=!1}function Bl(t,e){Nl.call(this),this.h=t||1,this.g=e||mc,this.j=Ec(this.lb,this),this.l=Date.now()}function zl(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function jl(t,e,n){if("function"==typeof t)n&&(t=Ec(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Ec(t.handleEvent,t)}return 2147483647<Number(e)?-1:mc.setTimeout(t,e||0)}function Vl(t){t.g=jl((()=>{t.g=null,t.i&&(t.i=!1,Vl(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Ic(Bl,Nl),(hc=Bl.prototype).ca=!1,hc.R=null,hc.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),_l(this,"tick"),this.ca&&(zl(this),this.start()))}},hc.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},hc.M=function(){Bl.X.M.call(this),zl(this),delete this.g};class ql extends Nc{l(t){this.h=arguments,this.g?this.i=!0:Vl(this)}M(){super.M(),this.g&&(mc.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Wl(t){Nc.call(this),this.h=t,this.g={}}Ic(Wl,Nc);var Hl=[];function $l(t,e,n,i){Array.isArray(n)||(n&&(Hl[0]=n.toString()),n=Hl);for(var r=0;r<n.length;r++){var s=gl(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Kl(t){al(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wl(t)}),t),t.g={}}function Gl(){this.g=!0}function Xl(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Sl(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}Wl.prototype.M=function(){Wl.X.M.call(this),Kl(this)},Wl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Gl.prototype.Aa=function(){this.g=!1},Gl.prototype.info=function(){};var Ql={},Jl=null;function Yl(){return Jl=Jl||new Nl}function Zl(t){Ac.call(this,Ql.Pa,t)}function tu(t){const e=Yl();_l(e,new Zl(e))}function eu(t,e){Ac.call(this,Ql.STAT_EVENT,t),this.stat=e}function nu(t){const e=Yl();_l(e,new eu(e,t))}function iu(t,e){Ac.call(this,Ql.Qa,t),this.size=e}function ru(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return mc.setTimeout((function(){t()}),e)}Ql.Pa="serverreachability",Ic(Zl,Ac),Ql.STAT_EVENT="statevent",Ic(eu,Ac),Ql.Qa="timingevent",Ic(iu,Ac);var su={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ou={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function au(){}function cu(t){return t.h||(t.h=t.i())}function lu(){}au.prototype.h=null;var uu,hu={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function du(){Ac.call(this,"d")}function fu(){Ac.call(this,"c")}function pu(){}function mu(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new Wl(this),this.O=yu,t=qc?125:void 0,this.T=new Bl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new gu}function gu(){this.i=null,this.g="",this.h=!1}Ic(du,Ac),Ic(fu,Ac),Ic(pu,au),pu.prototype.g=function(){return new XMLHttpRequest},pu.prototype.i=function(){return{}},uu=new pu;var yu=45e3,vu={},bu={};function wu(t,e,n){t.K=1,t.v=Bu(Du(e)),t.s=n,t.P=!0,xu(t,null)}function xu(t,e){t.F=Date.now(),Iu(t),t.A=Du(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),Yu(n.i,"t",i),t.C=0,n=t.l.H,t.h=new gu,t.g=Jh(t.l,n?e:null,!t.s),0<t.N&&(t.L=new ql(Ec(t.La,t,t.g),t.N)),$l(t.S,t.g,"readystatechange",t.ib),e=t.H?cl(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),tu(),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function ku(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Eu(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=Tu(t,n),i==bu){4==e&&(t.o=4,nu(14),r=!1),Xl(t.j,t.m,null,"[Incomplete Response]");break}if(i==vu){t.o=4,nu(15),Xl(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Xl(t.j,t.m,i,null),Au(t,i)}ku(t)&&i!=bu&&i!=vu&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,nu(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),qh(e),e.K=!0,nu(11))):(Xl(t.j,t.m,n,"[Invalid Chunked Response]"),Su(t),Cu(t))}function Tu(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?bu:(n=Number(e.substring(n,i)),isNaN(n)?vu:(i+=1)+n>e.length?bu:(e=e.substr(i,n),t.C=i+n,e))}function Iu(t){t.V=Date.now()+t.O,Nu(t,t.O)}function Nu(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ru(Ec(t.gb,t),e)}function _u(t){t.B&&(mc.clearTimeout(t.B),t.B=null)}function Cu(t){0==t.l.G||t.I||$h(t.l,t)}function Su(t){_u(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,zl(t.T),Kl(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Au(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||rh(n.h,t)))if(!t.J&&rh(n.h,t)&&3==n.G){try{var i=n.Fa.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Hh(n),Ph(n)}Vh(n),nu(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=ru(Ec(n.cb,n),6e3));if(1>=ih(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else Gh(n,11)}else if((t.J||n.g==t)&&Hh(n),!Rc(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],2==n.G)if("c"==l[0]){n.I=l[1],n.ka=l[2];const e=l[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const r=l[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(sh(s,s.h),s.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.za=t,Fu(i.F,i.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((i=n).sa=Qh(i,i.H?i.ka:null,i.V),o.J){oh(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(_u(a),Iu(a)),i.g=o}else jh(i);0<n.i.length&&Uh(n)}else"stop"!=l[0]&&"close"!=l[0]||Gh(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Gh(n,7):Dh(n):"noop"!=l[0]&&n.l&&n.l.wa(l),n.A=0)}tu()}catch(t){}}function Lu(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(yc(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(yc(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(yc(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(hc=mu.prototype).setTimeout=function(t){this.O=t},hc.ib=function(t){t=t.target;const e=this.L;e&&3==Ch(t)?e.l():this.La(t)},hc.La=function(t){try{if(t==this.g)t:{const u=Ch(this.g);var e=this.g.Ea();this.g.aa();if(!(3>u)&&(3!=u||qc||this.g&&(this.h.h||this.g.fa()||Sh(this.g)))){this.I||4!=u||7==e||tu(),_u(this);var n=this.g.aa();this.Y=n;e:if(ku(this)){var i=Sh(this.g);t="";var r=i.length,s=4==Ch(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Su(this),Cu(this);var o="";break e}this.h.i=new mc.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Rc(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,nu(12),Su(this),Cu(this);break t}Xl(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Au(this,n)}this.P?(Eu(this,u,o),qc&&this.i&&3==u&&($l(this.S,this.T,"tick",this.hb),this.T.start())):(Xl(this.j,this.m,o,null),Au(this,o)),4==u&&Su(this),this.i&&!this.I&&(4==u?$h(this.l,this):(this.i=!1,Iu(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,nu(12)):(this.o=0,nu(13)),Su(this),Cu(this)}}}catch(t){}},hc.hb=function(){if(this.g){var t=Ch(this.g),e=this.g.fa();this.C<e.length&&(_u(this),Eu(this,t,e),this.i&&4!=t&&Iu(this))}},hc.cancel=function(){this.I=!0,Su(this)},hc.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(tu(),nu(17)),Su(this),this.o=2,Cu(this)):Nu(this,this.V-t)};var Ru=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ou(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ou){this.h=void 0!==e?e:t.h,Pu(this,t.j),this.s=t.s,this.g=t.g,Mu(this,t.m),this.l=t.l,e=t.i;var n=new Gu;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Uu(this,n),this.o=t.o}else t&&(n=String(t).match(Ru))?(this.h=!!e,Pu(this,n[1]||"",!0),this.s=zu(n[2]||""),this.g=zu(n[3]||"",!0),Mu(this,n[4]),this.l=zu(n[5]||"",!0),Uu(this,n[6]||"",!0),this.o=zu(n[7]||"")):(this.h=!!e,this.i=new Gu(null,this.h))}function Du(t){return new Ou(t)}function Pu(t,e,n){t.j=n?zu(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Mu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Uu(t,e,n){e instanceof Gu?(t.i=e,function(t,e){e&&!t.j&&(Xu(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Qu(this,e),Yu(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=ju(e,$u)),t.i=new Gu(e,t.h))}function Fu(t,e,n){t.i.set(e,n)}function Bu(t){return Fu(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function zu(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ju(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Vu),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Vu(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ou.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ju(e,qu,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ju(e,qu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(ju(n,"/"==n.charAt(0)?Hu:Wu,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ju(n,Ku)),t.join("")};var qu=/[#\/\?@]/g,Wu=/[#\?:]/g,Hu=/[#\?]/g,$u=/[#\?@]/g,Ku=/#/g;function Gu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xu(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Qu(t,e){Xu(t),e=Zu(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ju(t,e){return Xu(t),e=Zu(t,e),t.g.has(e)}function Yu(t,e,n){Qu(t,e),0<n.length&&(t.i=null,t.g.set(Zu(t,e),Cc(n)),t.h+=n.length)}function Zu(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(hc=Gu.prototype).add=function(t,e){Xu(this),this.i=null,t=Zu(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},hc.forEach=function(t,e){Xu(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},hc.oa=function(){Xu(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},hc.W=function(t){Xu(this);let e=[];if("string"==typeof t)Ju(this,t)&&(e=e.concat(this.g.get(Zu(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},hc.set=function(t,e){return Xu(this),this.i=null,Ju(this,t=Zu(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},hc.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},hc.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function th(t){this.l=t||eh,mc.PerformanceNavigationTiming?t=0<(t=mc.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(mc.g&&mc.g.Ga&&mc.g.Ga()&&mc.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var eh=10;function nh(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ih(t){return t.h?1:t.g?t.g.size:0}function rh(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function sh(t,e){t.g?t.g.add(e):t.h=e}function oh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function ah(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Cc(t.i)}function ch(){}function lh(){this.g=new ch}function uh(t,e,n){const i=n||"";try{Lu(t,(function(t,n){let r=t;vc(t)&&(r=Sl(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function hh(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function dh(t){this.l=t.ac||null,this.j=t.jb||!1}function fh(t,e){Nl.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ph,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}th.prototype.cancel=function(){if(this.i=ah(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},ch.prototype.stringify=function(t){return mc.JSON.stringify(t,void 0)},ch.prototype.parse=function(t){return mc.JSON.parse(t,void 0)},Ic(dh,au),dh.prototype.g=function(){return new fh(this.l,this.j)},dh.prototype.i=function(t){return function(){return t}}({}),Ic(fh,Nl);var ph=0;function mh(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function gh(t){t.readyState=4,t.l=null,t.j=null,t.A=null,yh(t)}function yh(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(hc=fh.prototype).open=function(t,e){if(this.readyState!=ph)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,yh(this)},hc.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||mc).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},hc.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,gh(this)),this.readyState=ph},hc.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yh(this)),this.g&&(this.readyState=3,yh(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==mc.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mh(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},hc.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?gh(this):yh(this),3==this.readyState&&mh(this)}},hc.Va=function(t){this.g&&(this.response=this.responseText=t,gh(this))},hc.Ua=function(t){this.g&&(this.response=t,gh(this))},hc.ga=function(){this.g&&gh(this)},hc.setRequestHeader=function(t,e){this.v.append(t,e)},hc.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},hc.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(fh.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var vh=mc.JSON.parse;function bh(t){Nl.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wh,this.K=this.L=!1}Ic(bh,Nl);var wh="",xh=/^https?$/i,kh=["POST","PUT"];function Eh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Th(t),Nh(t)}function Th(t){t.D||(t.D=!0,_l(t,"complete"),_l(t,"error"))}function Ih(t){if(t.h&&void 0!==pc&&(!t.C[1]||4!=Ch(t)||2!=t.aa()))if(t.v&&4==Ch(t))jl(t.Ha,0,t);else if(_l(t,"readystatechange"),4==Ch(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var r=String(t.H).match(Ru)[1]||null;if(!r&&mc.self&&mc.self.location){var s=mc.self.location.protocol;r=s.substr(0,s.length-1)}i=!xh.test(r?r.toLowerCase():"")}n=i}if(n)_l(t,"complete"),_l(t,"success");else{t.m=6;try{var o=2<Ch(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",Th(t)}}finally{Nh(t)}}}function Nh(t,e){if(t.g){_h(t);const n=t.g,i=t.C[0]?gc:null;t.g=null,t.C=null,e||_l(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function _h(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(mc.clearTimeout(t.A),t.A=null)}function Ch(t){return t.g?t.g.readyState:0}function Sh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case wh:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ah(t){let e="";return al(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Lh(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Ah(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Fu(t,e,n))}function Rh(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Oh(t){this.Ca=0,this.i=[],this.j=new Gl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Rh("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Rh("baseRetryDelayMs",5e3,t),this.bb=Rh("retryDelaySeedMs",1e4,t),this.$a=Rh("forwardChannelMaxRetries",2,t),this.ta=Rh("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new th(t&&t.concurrentRequestLimit),this.Fa=new lh,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Dh(t){if(Mh(t),3==t.G){var e=t.U++,n=Du(t.F);Fu(n,"SID",t.I),Fu(n,"RID",e),Fu(n,"TYPE","terminate"),Bh(t,n),(e=new mu(t,t.j,e,void 0)).K=2,e.v=Bu(Du(n)),n=!1,mc.navigator&&mc.navigator.sendBeacon&&(n=mc.navigator.sendBeacon(e.v.toString(),"")),!n&&mc.Image&&((new Image).src=e.v,n=!0),n||(e.g=Jh(e.l,null),e.g.da(e.v)),e.F=Date.now(),Iu(e)}Xh(t)}function Ph(t){t.g&&(qh(t),t.g.cancel(),t.g=null)}function Mh(t){Ph(t),t.u&&(mc.clearTimeout(t.u),t.u=null),Hh(t),t.h.cancel(),t.m&&("number"==typeof t.m&&mc.clearTimeout(t.m),t.m=null)}function Uh(t){nh(t.h)||t.m||(t.m=!0,Pl(t.Ja,t),t.C=0)}function Fh(t,e){var n;n=e?e.m:t.U++;const i=Du(t.F);Fu(i,"SID",t.I),Fu(i,"RID",n),Fu(i,"AID",t.T),Bh(t,i),t.o&&t.s&&Lh(i,t.o,t.s),n=new mu(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=zh(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),sh(t.h,n),wu(n,i,e)}function Bh(t,e){t.ia&&al(t.ia,(function(t,n){Fu(e,n,t)})),t.l&&Lu({},(function(t,n){Fu(e,n,t)}))}function zh(t,e,n){n=Math.min(t.i.length,n);var i=t.l?Ec(t.l.Ra,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),s=!1;else try{uh(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function jh(t){t.g||t.u||(t.Z=1,Pl(t.Ia,t),t.A=0)}function Vh(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=ru(Ec(t.Ia,t),Kh(t,t.A)),t.A++,!0)}function qh(t){null!=t.B&&(mc.clearTimeout(t.B),t.B=null)}function Wh(t){t.g=new mu(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Du(t.sa);Fu(e,"RID","rpc"),Fu(e,"SID",t.I),Fu(e,"CI",t.L?"0":"1"),Fu(e,"AID",t.T),Fu(e,"TYPE","xmlhttp"),Bh(t,e),t.o&&t.s&&Lh(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Bu(Du(e)),n.s=null,n.P=!0,xu(n,t)}function Hh(t){null!=t.v&&(mc.clearTimeout(t.v),t.v=null)}function $h(t,e){var n=null;if(t.g==e){Hh(t),qh(t),t.g=null;var i=2}else{if(!rh(t.h,e))return;n=e.D,oh(t.h,e),i=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;_l(i=Yl(),new iu(i,n)),Uh(t)}else jh(t);else if(3==(r=e.o)||0==r&&0<t.pa||!(1==i&&function(t,e){return!(ih(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=ru(Ec(t.Ja,t,e),Kh(t,t.C)),t.C++,0)))}(t,e)||2==i&&Vh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Gh(t,5);break;case 4:Gh(t,10);break;case 3:Gh(t,6);break;default:Gh(t,2)}}function Kh(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Gh(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var i=Ec(t.kb,t);n||(n=new Ou("//www.google.com/images/cleardot.gif"),mc.location&&"http"==mc.location.protocol||Pu(n,"https"),Bu(n)),function(t,e){const n=new Gl;if(mc.Image){const i=new Image;i.onload=Tc(hh,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Tc(hh,n,i,"TestLoadImage: error",!1,e),i.onabort=Tc(hh,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Tc(hh,n,i,"TestLoadImage: timeout",!1,e),mc.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else nu(2);t.G=0,t.l&&t.l.va(e),Xh(t),Mh(t)}function Xh(t){if(t.G=0,t.la=[],t.l){const e=ah(t.h);0==e.length&&0==t.i.length||(Sc(t.la,e),Sc(t.la,t.i),t.h.i.length=0,Cc(t.i),t.i.length=0),t.l.ua()}}function Qh(t,e,n){var i=n instanceof Ou?Du(n):new Ou(n,void 0);if(""!=i.g)e&&(i.g=e+"."+i.g),Mu(i,i.m);else{var r=mc.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Ou(null,void 0);i&&Pu(s,i),e&&(s.g=e),r&&Mu(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.za,n&&e&&Fu(i,n,e),Fu(i,"VER",t.ma),Bh(t,i),i}function Jh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new bh(new dh({jb:!0})):new bh(t.ra)).Ka(t.H),e}function Yh(){}function Zh(){if(jc&&!(10<=Number(tl)))throw Error("Environmental error: no available transport.")}function td(t,e){Nl.call(this),this.g=new Oh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Rc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Rc(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new id(this)}function ed(t){du.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function nd(){fu.call(this),this.status=1}function id(t){this.g=t}(hc=bh.prototype).Ka=function(t){this.L=t},hc.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():uu.g(),this.C=this.u?cu(this.u):cu(uu),this.g.onreadystatechange=Ec(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Eh(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=mc.FormData&&t instanceof mc.FormData,!(0<=_c(kh,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{_h(this),0<this.B&&((this.K=function(t){return jc&&Yc()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ec(this.qa,this)):this.A=jl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Eh(this,t)}},hc.qa=function(){void 0!==pc&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_l(this,"timeout"),this.abort(8))},hc.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,_l(this,"complete"),_l(this,"abort"),Nh(this))},hc.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Nh(this,!0)),bh.X.M.call(this)},hc.Ha=function(){this.s||(this.F||this.v||this.l?Ih(this):this.fb())},hc.fb=function(){Ih(this)},hc.aa=function(){try{return 2<Ch(this)?this.g.status:-1}catch(t){return-1}},hc.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},hc.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),vh(e)}},hc.Ea=function(){return this.m},hc.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(hc=Oh.prototype).ma=8,hc.G=1,hc.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new mu(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=cl(s),ul(s,this.S)):s=this.S),null!==this.o||this.N||(r.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=zh(this,r,e),Fu(n=Du(this.F),"RID",t),Fu(n,"CVER",22),this.D&&Fu(n,"X-HTTP-Session-Id",this.D),Bh(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(Ah(s)))+"&"+e:this.o&&Lh(n,this.o,s)),sh(this.h,r),this.Ya&&Fu(n,"TYPE","init"),this.O?(Fu(n,"$req",e),Fu(n,"SID","null"),r.Z=!0,wu(r,n,null)):wu(r,n,e),this.G=2}}else 3==this.G&&(t?Fh(this,t):0==this.i.length||nh(this.h)||Fh(this))},hc.Ia=function(){if(this.u=null,Wh(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ru(Ec(this.eb,this),t)}},hc.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,nu(10),Ph(this),Wh(this))},hc.cb=function(){null!=this.v&&(this.v=null,Ph(this),Vh(this),nu(19))},hc.kb=function(t){t?(this.j.info("Successfully pinged google.com"),nu(2)):(this.j.info("Failed to ping google.com"),nu(1))},(hc=Yh.prototype).xa=function(){},hc.wa=function(){},hc.va=function(){},hc.ua=function(){},hc.Ra=function(){},Zh.prototype.g=function(t,e){return new td(t,e)},Ic(td,Nl),td.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;nu(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Qh(t,null,t.V),Uh(t)},td.prototype.close=function(){Dh(this.g)},td.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=Sl(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&Uh(e)},td.prototype.M=function(){this.g.l=null,delete this.j,Dh(this.g),delete this.g,td.X.M.call(this)},Ic(ed,du),Ic(nd,fu),Ic(id,Yh),id.prototype.xa=function(){_l(this.g,"a")},id.prototype.wa=function(t){_l(this.g,new ed(t))},id.prototype.va=function(t){_l(this.g,new nd)},id.prototype.ua=function(){_l(this.g,"b")},Zh.prototype.createWebChannel=Zh.prototype.g,td.prototype.send=td.prototype.u,td.prototype.open=td.prototype.m,td.prototype.close=td.prototype.close,su.NO_ERROR=0,su.TIMEOUT=8,su.HTTP_ERROR=6,ou.COMPLETE="complete",lu.EventType=hu,hu.OPEN="a",hu.CLOSE="b",hu.ERROR="c",hu.MESSAGE="d",Nl.prototype.listen=Nl.prototype.N,bh.prototype.listenOnce=bh.prototype.O,bh.prototype.getLastError=bh.prototype.Oa,bh.prototype.getLastErrorCode=bh.prototype.Ea,bh.prototype.getStatus=bh.prototype.aa,bh.prototype.getResponseJson=bh.prototype.Sa,bh.prototype.getResponseText=bh.prototype.fa,bh.prototype.send=bh.prototype.da,bh.prototype.setWithCredentials=bh.prototype.Ka;var rd=fc.createWebChannelTransport=function(){return new Zh},sd=fc.getStatEventTarget=function(){return Yl()},od=fc.ErrorCode=su,ad=fc.EventType=ou,cd=fc.Event=Ql,ld=fc.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ud=fc.FetchXmlHttpFactory=dh,hd=fc.WebChannel=lu,dd=fc.XhrIo=bh;const fd="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}pd.UNAUTHENTICATED=new pd(null),pd.GOOGLE_CREDENTIALS=new pd("google-credentials-uid"),pd.FIRST_PARTY=new pd("first-party-uid"),pd.MOCK_USER=new pd("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let md="9.17.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd=new at("@firebase/firestore");function yd(){return gd.logLevel}function vd(t,...e){if(gd.logLevel<=et.DEBUG){const n=e.map(xd);gd.debug(`Firestore (${md}): ${t}`,...n)}}function bd(t,...e){if(gd.logLevel<=et.ERROR){const n=e.map(xd);gd.error(`Firestore (${md}): ${t}`,...n)}}function wd(t,...e){if(gd.logLevel<=et.WARN){const n=e.map(xd);gd.warn(`Firestore (${md}): ${t}`,...n)}}function xd(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t="Unexpected state"){const e=`FIRESTORE (${md}) INTERNAL ASSERTION FAILED: `+t;throw bd(e),new Error(e)}function Ed(t,e){t||kd()}function Td(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Nd extends U{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Sd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(pd.UNAUTHENTICATED)))}shutdown(){}}class Ad{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}constructor(t){this.token=t,this.changeListener=null}}class Ld{start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new _d;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new _d,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{vd("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(vd("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new _d)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(vd("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Ed("string"==typeof e.accessToken),new Cd(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ed(null===t||"string"==typeof t),new pd(t)}constructor(t){this.t=t,this.currentUser=pd.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class Rd{I(){return this.g?this.g():(Ed(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i,this.type="FirstParty",this.user=pd.FIRST_PARTY,this.p=new Map}}class Od{getToken(){return Promise.resolve(new Rd(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(pd.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i}}class Dd{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pd{start(t,e){const n=t=>{null!=t.error&&vd("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,vd("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{vd("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?i(t):vd("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Ed("string"==typeof t.token),this.A=t.token,new Dd(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Md(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Md(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function Fd(t,e){return t<e?-1:t>e?1:0}function Bd(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zd{static now(){return zd.fromMillis(Date.now())}static fromDate(t){return zd.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new zd(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Fd(this.nanoseconds,t.nanoseconds):Fd(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Nd(Id.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Nd(Id.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Nd(Id.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Nd(Id.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{static fromTimestamp(t){return new jd(t)}static min(){return new jd(new zd(0,0))}static max(){return new jd(new zd(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{get length(){return this.len}isEqual(t){return 0===Vd.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Vd?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&kd(),void 0===n?n=t.length-e:n>t.length-e&&kd(),this.segments=t,this.offset=e,this.len=n}}class qd extends Vd{construct(t,e,n){return new qd(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Nd(Id.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new qd(e)}static emptyPath(){return new qd([])}}const Wd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Hd extends Vd{construct(t,e,n){return new Hd(t,e,n)}static isValidIdentifier(t){return Wd.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Hd.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Hd(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new Nd(Id.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Nd(Id.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Nd(Id.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new Nd(Id.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Hd(e)}static emptyPath(){return new Hd([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{static fromPath(t){return new $d(qd.fromString(t))}static fromName(t){return new $d(qd.fromString(t).popFirst(5))}static empty(){return new $d(qd.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===qd.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return qd.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new $d(new qd(t.slice()))}constructor(t){this.path=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}Kd.UNKNOWN_ID=-1;function Gd(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=jd.fromTimestamp(1e9===i?new zd(n+1,0):new zd(n,i));return new Qd(r,$d.empty(),e)}function Xd(t){return new Qd(t.readTime,t.key,-1)}class Qd{static min(){return new Qd(jd.min(),$d.empty(),-1)}static max(){return new Qd(jd.max(),$d.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function Jd(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=$d.comparator(t.documentKey,e.documentKey),0!==n?n:Fd(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zd{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tf(t){if(t.code!==Id.FAILED_PRECONDITION||t.message!==Yd)throw t;vd("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&kd(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ef(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ef?e:ef.resolve(e)}catch(t){return ef.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ef.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ef.reject(e)}static resolve(t){return new ef(((e,n)=>{e(t)}))}static reject(t){return new ef(((e,n)=>{n(t)}))}static waitFor(t){return new ef(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=ef.resolve(!1);for(const n of t)e=e.next((t=>t?ef.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new ef(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new ef(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rf{ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}}rf.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sf{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class of{static empty(){return new of("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof of&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cf(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t){return null==t}function hf(t){return 0===t&&1/t==-1/0}function df(t){return"number"==typeof t&&Number.isInteger(t)&&!hf(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ff{static fromBase64String(t){const e=atob(t);return new ff(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ff(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Fd(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}ff.EMPTY_BYTE_STRING=new ff("");const pf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mf(t){if(Ed(!!t),"string"==typeof t){let e=0;const n=pf.exec(t);if(Ed(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:gf(t.seconds),nanos:gf(t.nanos)}}function gf(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function yf(t){return"string"==typeof t?ff.fromBase64String(t):ff.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function bf(t){const e=t.mapValue.fields.__previous_value__;return vf(e)?bf(e):e}function wf(t){const e=mf(t.mapValue.fields.__local_write_time__.timestampValue);return new zd(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function kf(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vf(t)?4:Pf(t)?9007199254740991:10:kd()}function Ef(t,e){if(t===e)return!0;const n=kf(t);if(n!==kf(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wf(t).isEqual(wf(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=mf(t.timestampValue),i=mf(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return yf(t.bytesValue).isEqual(yf(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return gf(t.geoPointValue.latitude)===gf(e.geoPointValue.latitude)&&gf(t.geoPointValue.longitude)===gf(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return gf(t.integerValue)===gf(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=gf(t.doubleValue),i=gf(e.doubleValue);return n===i?hf(n)===hf(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Bd(t.arrayValue.values||[],e.arrayValue.values||[],Ef);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(af(n)!==af(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!Ef(n[t],i[t])))return!1;return!0}(t,e);default:return kd()}}function Tf(t,e){return void 0!==(t.values||[]).find((t=>Ef(t,e)))}function If(t,e){if(t===e)return 0;const n=kf(t),i=kf(e);if(n!==i)return Fd(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Fd(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=gf(t.integerValue||t.doubleValue),i=gf(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Nf(t.timestampValue,e.timestampValue);case 4:return Nf(wf(t),wf(e));case 5:return Fd(t.stringValue,e.stringValue);case 6:return function(t,e){const n=yf(t),i=yf(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=Fd(n[t],i[t]);if(0!==e)return e}return Fd(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Fd(gf(t.latitude),gf(e.latitude));return 0!==n?n:Fd(gf(t.longitude),gf(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=If(n[t],i[t]);if(e)return e}return Fd(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===xf.mapValue&&e===xf.mapValue)return 0;if(t===xf.mapValue)return 1;if(e===xf.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let t=0;t<i.length&&t<s.length;++t){const e=Fd(i[t],s[t]);if(0!==e)return e;const o=If(n[i[t]],r[s[t]]);if(0!==o)return o}return Fd(i.length,s.length)}(t.mapValue,e.mapValue);default:throw kd()}}function Nf(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Fd(t,e);const n=mf(t),i=mf(e),r=Fd(n.seconds,i.seconds);return 0!==r?r:Fd(n.nanos,i.nanos)}function _f(t){return Cf(t)}function Cf(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=mf(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?yf(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$d.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Cf(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${Cf(t.fields[r])}`;return n+"}"}(t.mapValue):kd()}function Sf(t){return!!t&&"integerValue"in t}function Af(t){return!!t&&"arrayValue"in t}function Lf(t){return!!t&&"nullValue"in t}function Rf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Of(t){return!!t&&"mapValue"in t}function Df(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cf(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Df(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Df(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Pf(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mf{constructor(t,e){this.position=t,this.inclusive=e}}function Uf(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?$d.comparator($d.fromName(o.referenceValue),n.key):If(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function Ff(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ef(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{}class zf extends Bf{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Gf(t,e,n):"array-contains"===e?new Yf(t,n):"in"===e?new Zf(t,n):"not-in"===e?new tp(t,n):"array-contains-any"===e?new ep(t,n):new zf(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Xf(t,n):new Qf(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(If(e,this.value)):null!==e&&kf(this.value)===kf(e)&&this.matchesComparison(If(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return kd()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class jf extends Bf{static create(t,e){return new jf(t,e)}matches(t){return Vf(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}}function Vf(t){return"and"===t.op}function qf(t){return Wf(t)&&Vf(t)}function Wf(t){for(const e of t.filters)if(e instanceof jf)return!1;return!0}function Hf(t){if(t instanceof zf)return t.field.canonicalString()+t.op.toString()+_f(t.value);if(qf(t))return t.filters.map((t=>Hf(t))).join(",");{const e=t.filters.map((t=>Hf(t))).join(",");return`${t.op}(${e})`}}function $f(t,e){return t instanceof zf?function(t,e){return e instanceof zf&&t.op===e.op&&t.field.isEqual(e.field)&&Ef(t.value,e.value)}(t,e):t instanceof jf?function(t,e){return e instanceof jf&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&$f(n,e.filters[i])),!0)}(t,e):void kd()}function Kf(t){return t instanceof zf?function(t){return`${t.field.canonicalString()} ${t.op} ${_f(t.value)}`}(t):t instanceof jf?function(t){return t.op.toString()+" {"+t.getFilters().map(Kf).join(" ,")+"}"}(t):"Filter"}class Gf extends zf{matches(t){const e=$d.comparator(t.key,this.key);return this.matchesComparison(e)}constructor(t,e,n){super(t,e,n),this.key=$d.fromName(n.referenceValue)}}class Xf extends zf{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=Jf("in",e)}}class Qf extends zf{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=Jf("not-in",e)}}function Jf(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>$d.fromName(t.referenceValue)))}class Yf extends zf{matches(t){const e=t.data.field(this.field);return Af(e)&&Tf(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class Zf extends zf{matches(t){const e=t.data.field(this.field);return null!==e&&Tf(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class tp extends zf{matches(t){if(Tf(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Tf(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class ep extends zf{matches(t){const e=t.data.field(this.field);return!(!Af(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Tf(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(t,e="asc"){this.field=t,this.dir=e}}function ip(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{insert(t,e){return new rp(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,op.BLACK,null,null))}remove(t){return new rp(this.comparator,this.root.remove(t,this.comparator).copy(null,null,op.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new sp(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new sp(this.root,t,this.comparator,!1)}getReverseIterator(){return new sp(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new sp(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||op.EMPTY}}class sp{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class op{copy(t,e,n,i,r){return new op(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return op.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return op.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,op.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,op.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw kd();if(this.right.isRed())throw kd();const t=this.left.check();if(t!==this.right.check())throw kd();return t+(this.isRed()?0:1)}constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:op.RED,this.left=null!=i?i:op.EMPTY,this.right=null!=r?r:op.EMPTY,this.size=this.left.size+1+this.right.size}}op.EMPTY=null,op.RED=!0,op.BLACK=!1,op.EMPTY=new class{get key(){throw kd()}get value(){throw kd()}get color(){throw kd()}get left(){throw kd()}get right(){throw kd()}copy(t,e,n,i,r){return this}insert(t,e,n){return new op(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ap{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new cp(this.data.getIterator())}getIteratorFrom(t){return new cp(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof ap))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ap(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new rp(this.comparator)}}class cp{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lp{static empty(){return new lp([])}unionWith(t){let e=new ap(Hd.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new lp(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Bd(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(Hd.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{static empty(){return new up({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Of(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Df(e)}setAll(t){let e=Hd.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=Df(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());Of(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ef(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Of(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){cf(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new up(Df(this.value))}constructor(t){this.value=t}}function hp(t){const e=[];return cf(t.fields,((t,n)=>{const i=new Hd([t]);if(Of(n)){const t=hp(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new lp(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class dp{static newInvalidDocument(t){return new dp(t,0,jd.min(),jd.min(),jd.min(),up.empty(),0)}static newFoundDocument(t,e,n,i){return new dp(t,1,e,jd.min(),n,i,0)}static newNoDocument(t,e){return new dp(t,2,e,jd.min(),jd.min(),up.empty(),0)}static newUnknownDocument(t,e){return new dp(t,3,e,jd.min(),jd.min(),up.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(jd.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=up.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=up.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=jd.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof dp&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new dp(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ft=null}}function pp(t,e=null,n=[],i=[],r=null,s=null,o=null){return new fp(t,e,n,i,r,s,o)}function mp(t){const e=Td(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Hf(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),uf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>_f(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>_f(t))).join(",")),e.ft=t}return e.ft}function gp(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ip(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$f(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ff(t.startAt,e.startAt)&&Ff(t.endAt,e.endAt)}function yp(t){return $d.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vp{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function bp(t,e,n,i,r,s,o,a){return new vp(t,e,n,i,r,s,o,a)}function wp(t){return new vp(t)}function xp(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function kp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ep(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function Tp(t){return null!==t.collectionGroup}function Ip(t){const e=Td(t);if(null===e.dt){e.dt=[];const t=Ep(e),n=kp(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new np(t)),e.dt.push(new np(Hd.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new np(Hd.keyField(),t))}}}return e.dt}function Np(t){const e=Td(t);if(!e._t)if("F"===e.limitType)e._t=pp(e.path,e.collectionGroup,Ip(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Ip(e)){const e="desc"===n.dir?"asc":"desc";t.push(new np(n.field,e))}const n=e.endAt?new Mf(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Mf(e.startAt.position,e.startAt.inclusive):null;e._t=pp(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e._t}function _p(t,e,n){return new vp(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cp(t,e){return gp(Np(t),Np(e))&&t.limitType===e.limitType}function Sp(t){return`${mp(Np(t))}|lt:${t.limitType}`}function Ap(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Kf(t))).join(", ")}]`),uf(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>_f(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>_f(t))).join(",")),`Target(${e})`}(Np(t))}; limitType=${t.limitType})`}function Lp(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):$d.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Ip(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=Uf(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,Ip(t),e))&&!(t.endAt&&!function(t,e,n){const i=Uf(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,Ip(t),e))}(t,e)}function Rp(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Op(t){return(e,n)=>{let i=!1;for(const r of Ip(t)){const t=Dp(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function Dp(t,e,n){const i=t.field.isKeyField()?$d.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?If(i,r):kd()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return kd()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hf(e)?"-0":e}}function Mp(t){return{integerValue:""+t}}function Up(t,e){return df(e)?Mp(e):Pp(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(){this._=void 0}}function Bp(t,e,n){return t instanceof Vp?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof qp?Wp(t,e):t instanceof Hp?$p(t,e):function(t,e){const n=jp(t,e),i=Gp(n)+Gp(t.gt);return Sf(n)&&Sf(t.gt)?Mp(i):Pp(t.yt,i)}(t,e)}function zp(t,e,n){return t instanceof qp?Wp(t,e):t instanceof Hp?$p(t,e):n}function jp(t,e){var n;return t instanceof Kp?Sf(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null}class Vp extends Fp{}class qp extends Fp{constructor(t){super(),this.elements=t}}function Wp(t,e){const n=Xp(e);for(const e of t.elements)n.some((t=>Ef(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Hp extends Fp{constructor(t){super(),this.elements=t}}function $p(t,e){let n=Xp(e);for(const e of t.elements)n=n.filter((t=>!Ef(t,e)));return{arrayValue:{values:n}}}class Kp extends Fp{constructor(t,e){super(),this.yt=t,this.gt=e}}function Gp(t){return gf(t.integerValue||t.doubleValue)}function Xp(t){return Af(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(t,e){this.field=t,this.transform=e}}class Jp{constructor(t,e){this.version=t,this.transformResults=e}}class Yp{static none(){return new Yp}static exists(t){return new Yp(void 0,t)}static updateTime(t){return new Yp(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function Zp(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class tm{}function em(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new hm(t.key,Yp.none()):new om(t.key,t.data,Yp.none());{const n=t.data,i=up.empty();let r=new ap(Hd.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new am(t.key,i,new lp(r.toArray()),Yp.none())}}function nm(t,e,n){t instanceof om?function(t,e,n){const i=t.value.clone(),r=lm(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof am?function(t,e,n){if(!Zp(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=lm(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(cm(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function im(t,e,n,i){return t instanceof om?function(t,e,n,i){if(!Zp(t.precondition,e))return n;const r=t.value.clone(),s=um(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof am?function(t,e,n,i){if(!Zp(t.precondition,e))return n;const r=um(t.fieldTransforms,i,e),s=e.data;return s.setAll(cm(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return Zp(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function rm(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=jp(i.transform,t||null);null!=r&&(null===n&&(n=up.empty()),n.set(i.field,r))}return n||null}function sm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Bd(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof qp&&e instanceof qp||t instanceof Hp&&e instanceof Hp?Bd(t.elements,e.elements,Ef):t instanceof Kp&&e instanceof Kp?Ef(t.gt,e.gt):t instanceof Vp&&e instanceof Vp}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class om extends tm{getFieldMask(){return null}constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class am extends tm{getFieldMask(){return this.fieldMask}constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}function cm(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function lm(t,e,n){const i=new Map;Ed(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,zp(o,a,n[r]))}return i}function um(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,Bp(t,s,e))}return i}class hm extends tm{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class dm extends tm{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pm,mm;function gm(t){switch(t){default:return kd();case Id.CANCELLED:case Id.UNKNOWN:case Id.DEADLINE_EXCEEDED:case Id.RESOURCE_EXHAUSTED:case Id.INTERNAL:case Id.UNAVAILABLE:case Id.UNAUTHENTICATED:return!1;case Id.INVALID_ARGUMENT:case Id.NOT_FOUND:case Id.ALREADY_EXISTS:case Id.PERMISSION_DENIED:case Id.FAILED_PRECONDITION:case Id.ABORTED:case Id.OUT_OF_RANGE:case Id.UNIMPLEMENTED:case Id.DATA_LOSS:return!0}}function ym(t){if(void 0===t)return bd("GRPC error has no .code"),Id.UNKNOWN;switch(t){case pm.OK:return Id.OK;case pm.CANCELLED:return Id.CANCELLED;case pm.UNKNOWN:return Id.UNKNOWN;case pm.DEADLINE_EXCEEDED:return Id.DEADLINE_EXCEEDED;case pm.RESOURCE_EXHAUSTED:return Id.RESOURCE_EXHAUSTED;case pm.INTERNAL:return Id.INTERNAL;case pm.UNAVAILABLE:return Id.UNAVAILABLE;case pm.UNAUTHENTICATED:return Id.UNAUTHENTICATED;case pm.INVALID_ARGUMENT:return Id.INVALID_ARGUMENT;case pm.NOT_FOUND:return Id.NOT_FOUND;case pm.ALREADY_EXISTS:return Id.ALREADY_EXISTS;case pm.PERMISSION_DENIED:return Id.PERMISSION_DENIED;case pm.FAILED_PRECONDITION:return Id.FAILED_PRECONDITION;case pm.ABORTED:return Id.ABORTED;case pm.OUT_OF_RANGE:return Id.OUT_OF_RANGE;case pm.UNIMPLEMENTED:return Id.UNIMPLEMENTED;case pm.DATA_LOSS:return Id.DATA_LOSS;default:return kd()}}(mm=pm||(pm={}))[mm.OK=0]="OK",mm[mm.CANCELLED=1]="CANCELLED",mm[mm.UNKNOWN=2]="UNKNOWN",mm[mm.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",mm[mm.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",mm[mm.NOT_FOUND=5]="NOT_FOUND",mm[mm.ALREADY_EXISTS=6]="ALREADY_EXISTS",mm[mm.PERMISSION_DENIED=7]="PERMISSION_DENIED",mm[mm.UNAUTHENTICATED=16]="UNAUTHENTICATED",mm[mm.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",mm[mm.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",mm[mm.ABORTED=10]="ABORTED",mm[mm.OUT_OF_RANGE=11]="OUT_OF_RANGE",mm[mm.UNIMPLEMENTED=12]="UNIMPLEMENTED",mm[mm.INTERNAL=13]="INTERNAL",mm[mm.UNAVAILABLE=14]="UNAVAILABLE",mm[mm.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vm{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){cf(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return lf(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=new rp($d.comparator);function wm(){return bm}const xm=new rp($d.comparator);function km(...t){let e=xm;for(const n of t)e=e.insert(n.key,n);return e}function Em(t){let e=xm;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Tm(){return Nm()}function Im(){return Nm()}function Nm(){return new vm((t=>t.toString()),((t,e)=>t.isEqual(e)))}const _m=new rp($d.comparator),Cm=new ap($d.comparator);function Sm(...t){let e=Cm;for(const n of t)e=e.add(n);return e}const Am=new ap(Fd);function Lm(){return Am}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Om.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Rm(jd.min(),i,Lm(),wm(),Sm())}constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}}class Om{static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Om(n,e,Sm(),Sm(),Sm())}constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(t,e,n,i){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=i}}class Pm{constructor(t,e){this.targetId=t,this.Et=e}}class Mm{constructor(t,e,n=ff.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Um{get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=Sm(),e=Sm(),n=Sm();return this.Rt.forEach(((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:kd()}})),new Om(this.bt,this.Pt,t,e,n)}xt(){this.vt=!1,this.Rt=zm()}Nt(t,e){this.vt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}constructor(){this.At=0,this.Rt=zm(),this.bt=ff.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}}class Fm{Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}jt(t){this.forEachTarget(t,(e=>{const n=this.Wt(e);switch(t.state){case 0:this.zt(e)&&n.Dt(t.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(e);break;case 3:this.zt(e)&&(n.Ft(),n.Dt(t.resumeToken));break;case 4:this.zt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:kd()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach(((t,n)=>{this.zt(n)&&e(n)}))}Jt(t){const e=t.targetId,n=t.Et.count,i=this.Yt(e);if(i){const t=i.target;if(yp(t))if(0===n){const n=new $d(t.path);this.Qt(e,n,dp.newNoDocument(n,jd.min()))}else Ed(1===n);else this.Xt(e)!==n&&(this.Ht(e),this.Ut=this.Ut.add(e))}}Zt(t){const e=new Map;this.Bt.forEach(((n,i)=>{const r=this.Yt(i);if(r){if(n.current&&yp(r.target)){const e=new $d(r.target.path);null!==this.Lt.get(e)||this.te(i,e)||this.Qt(i,e,dp.newNoDocument(e,t))}n.St&&(e.set(i,n.Ct()),n.xt())}}));let n=Sm();this.qt.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Yt(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.Lt.forEach(((e,n)=>n.setReadTime(t)));const i=new Rm(t,e,this.Ut,this.Lt,n);return this.Lt=wm(),this.qt=Bm(),this.Ut=new ap(Fd),i}Gt(t,e){if(!this.zt(t))return;const n=this.te(t,e.key)?2:0;this.Wt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.zt(t))return;const i=this.Wt(t);this.te(t,e)?i.Nt(e,1):i.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Xt(t){const e=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let e=this.Bt.get(t);return e||(e=new Um,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new ap(Fd),this.qt=this.qt.insert(t,e)),e}zt(t){const e=null!==this.Yt(t);return e||vd("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new Um),this.$t.getRemoteKeysForTarget(t).forEach((e=>{this.Qt(t,e,null)}))}te(t,e){return this.$t.getRemoteKeysForTarget(t).has(e)}constructor(t){this.$t=t,this.Bt=new Map,this.Lt=wm(),this.qt=Bm(),this.Ut=new ap(Fd)}}function Bm(){return new rp($d.comparator)}function zm(){return new rp($d.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm={asc:"ASCENDING",desc:"DESCENDING"},Vm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qm={and:"AND",or:"OR"};class Wm{constructor(t,e){this.databaseId=t,this.wt=e}}function Hm(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $m(t,e){return t.wt?e.toBase64():e.toUint8Array()}function Km(t,e){return Hm(t,e.toTimestamp())}function Gm(t){return Ed(!!t),jd.fromTimestamp(function(t){const e=mf(t);return new zd(e.seconds,e.nanos)}(t))}function Xm(t,e){return function(t){return new qd(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Qm(t){const e=qd.fromString(t);return Ed(gg(e)),e}function Jm(t,e){return Xm(t.databaseId,e.path)}function Ym(t,e){const n=Qm(e);if(n.get(1)!==t.databaseId.projectId)throw new Nd(Id.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Nd(Id.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $d(ng(n))}function Zm(t,e){return Xm(t.databaseId,e)}function tg(t){const e=Qm(t);return 4===e.length?qd.emptyPath():ng(e)}function eg(t){return new qd(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ng(t){return Ed(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ig(t,e,n){return{name:Jm(t,e),fields:n.value.mapValue.fields}}function rg(t,e){let n;if(e instanceof om)n={update:ig(t,e.key,e.value)};else if(e instanceof hm)n={delete:Jm(t,e.key)};else if(e instanceof am)n={update:ig(t,e.key,e.data),updateMask:mg(e.fieldMask)};else{if(!(e instanceof dm))return kd();n={verify:Jm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Vp)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof qp)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Hp)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Kp)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw kd()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Km(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:kd()}(t,e.precondition)),n}function sg(t,e){return{documents:[Zm(t,e.path)]}}function og(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=Zm(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Zm(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(t){if(0!==t.length)return pg(jf.create(t,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:dg(t.field),direction:lg(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.wt||uf(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function ag(t){let e=tg(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Ed(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=cg(t);return e instanceof jf&&qf(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new np(fg(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,uf(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Mf(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new Mf(n,e)}(n.endAt)),bp(e,r,o,s,a,"F",c,l)}function cg(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=fg(t.unaryFilter.field);return zf.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=fg(t.unaryFilter.field);return zf.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=fg(t.unaryFilter.field);return zf.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=fg(t.unaryFilter.field);return zf.create(r,"!=",{nullValue:"NULL_VALUE"});default:return kd()}}(t):void 0!==t.fieldFilter?function(t){return zf.create(fg(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return kd()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return jf.create(t.compositeFilter.filters.map((t=>cg(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return kd()}}(t.compositeFilter.op))}(t):kd()}function lg(t){return jm[t]}function ug(t){return Vm[t]}function hg(t){return qm[t]}function dg(t){return{fieldPath:t.canonicalString()}}function fg(t){return Hd.fromServerFormat(t.fieldPath)}function pg(t){return t instanceof zf?function(t){if("=="===t.op){if(Rf(t.value))return{unaryFilter:{field:dg(t.field),op:"IS_NAN"}};if(Lf(t.value))return{unaryFilter:{field:dg(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Rf(t.value))return{unaryFilter:{field:dg(t.field),op:"IS_NOT_NAN"}};if(Lf(t.value))return{unaryFilter:{field:dg(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dg(t.field),op:ug(t.op),value:t.value}}}(t):t instanceof jf?function(t){const e=t.getFilters().map((t=>pg(t)));return 1===e.length?e[0]:{compositeFilter:{op:hg(t.op),filters:e}}}(t):kd()}function mg(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function gg(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],vg=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],bg=vg;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wg{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&nm(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=im(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=im(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Im();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=em(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(jd.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Sm())}isEqual(t){return this.batchId===t.batchId&&Bd(this.mutations,t.mutations,((t,e)=>sm(t,e)))&&Bd(this.baseMutations,t.baseMutations,((t,e)=>sm(t,e)))}constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}}class xg{static from(t,e,n){Ed(t.mutations.length===n.length);let i=_m;const r=t.mutations;for(let t=0;t<r.length;t++)i=i.insert(r[t].key,n[t].version);return new xg(t,e,n,i)}constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{withSequenceNumber(t){return new Eg(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Eg(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Eg(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}constructor(t,e,n,i,r=jd.min(),s=jd.min(),o=ff.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(t){this.ie=t}}function Ig(t){const e=ag({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?_p(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{ue(t,e){this.ce(t,e),e.ae()}ce(t,e){if("nullValue"in t)this.he(e,5);else if("booleanValue"in t)this.he(e,10),e.le(t.booleanValue?1:0);else if("integerValue"in t)this.he(e,15),e.le(gf(t.integerValue));else if("doubleValue"in t){const n=gf(t.doubleValue);isNaN(n)?this.he(e,13):(this.he(e,15),hf(n)?e.le(0):e.le(n))}else if("timestampValue"in t){const n=t.timestampValue;this.he(e,20),"string"==typeof n?e.fe(n):(e.fe(`${n.seconds||""}`),e.le(n.nanos||0))}else if("stringValue"in t)this.de(t.stringValue,e),this._e(e);else if("bytesValue"in t)this.he(e,30),e.we(yf(t.bytesValue)),this._e(e);else if("referenceValue"in t)this.me(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.he(e,45),e.le(n.latitude||0),e.le(n.longitude||0)}else"mapValue"in t?Pf(t)?this.he(e,Number.MAX_SAFE_INTEGER):(this.ge(t.mapValue,e),this._e(e)):"arrayValue"in t?(this.ye(t.arrayValue,e),this._e(e)):kd()}de(t,e){this.he(e,25),this.pe(t,e)}pe(t,e){e.fe(t)}ge(t,e){const n=t.fields||{};this.he(e,55);for(const t of Object.keys(n))this.de(t,e),this.ce(n[t],e)}ye(t,e){const n=t.values||[];this.he(e,50);for(const t of n)this.ce(t,e)}me(t,e){this.he(e,37),$d.fromName(t).path.forEach((t=>{this.he(e,60),this.pe(t,e)}))}he(t,e){t.le(e)}_e(t){t.le(2)}constructor(){}}Ng.Ie=new Ng;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _g{addToCollectionParentIndex(t,e){return this.Je.add(e),ef.resolve()}getCollectionParents(t,e){return ef.resolve(this.Je.getEntries(e))}addFieldIndex(t,e){return ef.resolve()}deleteFieldIndex(t,e){return ef.resolve()}getDocumentsMatchingTarget(t,e){return ef.resolve(null)}getIndexType(t,e){return ef.resolve(0)}getFieldIndexes(t,e){return ef.resolve([])}getNextCollectionGroupToUpdate(t){return ef.resolve(null)}getMinOffset(t,e){return ef.resolve(Qd.min())}getMinOffsetFromCollectionGroup(t,e){return ef.resolve(Qd.min())}updateCollectionGroup(t,e,n){return ef.resolve()}updateIndexEntries(t,e){return ef.resolve()}constructor(){this.Je=new Cg}}class Cg{add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new ap(qd.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new ap(qd.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Sg{static withCacheSize(t){return new Sg(t,Sg.DEFAULT_COLLECTION_PERCENTILE,Sg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sg.DEFAULT_COLLECTION_PERCENTILE=10,Sg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Sg.DEFAULT=new Sg(41943040,Sg.DEFAULT_COLLECTION_PERCENTILE,Sg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Sg.DISABLED=new Sg(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ag{next(){return this.bn+=2,this.bn}static Pn(){return new Ag(0)}static vn(){return new Ag(-1)}constructor(t){this.bn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lg{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,dp.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ef.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new vm((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rg{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&im(n.mutation,t,lp.empty(),zd.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Sm()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Sm()){const i=Tm();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=km();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Tm();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Sm())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=wm();const s=Nm(),o=Nm();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof am)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),im(o.mutation,e,o.mutation.getFieldMask(),zd.now())):s.set(e.key,lp.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Rg(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Nm();let i=new rp(((t,e)=>t-e)),r=Sm();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||lp.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||Sm()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,l=Im();c.forEach((t=>{if(!r.has(t)){const i=em(e.get(t),n.get(t));null!==i&&l.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,l))}return ef.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return $d.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Tp(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):ef.resolve(Tm());let o=-1,a=r;return s.next((e=>ef.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?ef.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,Sm()))).next((t=>({batchId:o,changes:Em(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new $d(e)).next((t=>{let e=km();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let r=km();return this.indexManager.getCollectionParents(t,i).next((s=>ef.forEach(s,(s=>{const o=function(t,e){return new vp(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(i));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i)))).next((t=>{i.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,dp.newInvalidDocument(i)))}));let n=km();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&im(s.mutation,r,lp.empty(),zd.now()),Lp(e,r)&&(n=n.insert(t,r))})),n}))}constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{getBundleMetadata(t,e){return ef.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:Gm(n.createTime)}),ef.resolve()}getNamedQuery(t,e){return ef.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:Ig(t.bundledQuery),readTime:Gm(t.readTime)}}(e)),ef.resolve()}constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{getOverlay(t,e){return ef.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Tm();return ef.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.oe(t,e,i)})),ef.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.es.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),ef.resolve()}getOverlaysForCollection(t,e,n){const i=Tm(),r=e.length+1,s=new $d(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return ef.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new rp(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=Tm(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Tm(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return ef.resolve(o)}oe(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.es.get(i.largestBatchId).delete(n.key);this.es.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new kg(e,n));let r=this.es.get(e);void 0===r&&(r=Sm(),this.es.set(e,r)),this.es.set(e,r.add(n.key))}constructor(){this.overlays=new rp($d.comparator),this.es=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Ug(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new Ug(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new $d(new qd([])),n=new Ug(e,t),i=new Ug(e,t+1),r=[];return this.rs.forEachInRange([n,i],(t=>{this.cs(t),r.push(t.key)})),r}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new $d(new qd([])),n=new Ug(e,t),i=new Ug(e,t+1);let r=Sm();return this.rs.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new Ug(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.ns=new ap(Ug.ss),this.rs=new ap(Ug.os)}}class Ug{static ss(t,e){return $d.comparator(t.key,e.key)||Fd(t._s,e._s)}static os(t,e){return Fd(t._s,e._s)||$d.comparator(t.key,e.key)}constructor(t,e){this.key=t,this._s=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{checkEmpty(t){return ef.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new wg(r,e,n,i);this.mutationQueue.push(s);for(const e of i)this.gs=this.gs.add(new Ug(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return ef.resolve(s)}lookupMutationBatch(t,e){return ef.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ps(n),r=i<0?0:i;return ef.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ef.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return ef.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ug(e,0),i=new Ug(e,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([n,i],(t=>{const e=this.ys(t._s);r.push(e)})),ef.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ap(Fd);return e.forEach((t=>{const e=new Ug(t,0),i=new Ug(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,i],(t=>{n=n.add(t._s)}))})),ef.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;$d.isDocumentKey(r)||(r=r.child(""));const s=new Ug(new $d(r),0);let o=new ap(Fd);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t._s)),!0)}),s),ef.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Ed(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return ef.forEach(e.mutations,(i=>{const r=new Ug(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new Ug(e,0),i=this.gs.firstAfterOrEqual(n);return ef.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,ef.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new ap(Ug.ss)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ef.resolve(n?n.document.mutableCopy():dp.newInvalidDocument(e))}getEntries(t,e){let n=wm();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():dp.newInvalidDocument(t))})),ef.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=wm();const s=e.path,o=new $d(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Jd(Xd(o),n)<=0||(i.has(o.key)||Lp(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return ef.resolve(r)}getAllFromCollectionGroup(t,e,n,i){kd()}As(t,e){return ef.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new zg(this)}getSize(t){return ef.resolve(this.size)}constructor(t){this.Es=t,this.docs=new rp($d.comparator),this.size=0}}class zg extends Lg{applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(n)})),ef.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}constructor(t){super(),this.Yn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),ef.resolve()}getLastRemoteSnapshotVersion(t){return ef.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ef.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),ef.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),ef.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Ag(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,ef.resolve()}updateTargetData(t,e){return this.Dn(e),ef.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,ef.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Rs.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),ef.waitFor(r).next((()=>i))}getTargetCount(t){return ef.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return ef.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),ef.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),ef.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),ef.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return ef.resolve(n)}containsKey(t,e){return ef.resolve(this.Ps.containsKey(e))}constructor(t){this.persistence=t,this.Rs=new vm((t=>mp(t)),gp),this.lastRemoteSnapshotVersion=jd.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Mg,this.targetCount=0,this.vs=Ag.Pn()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Pg,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Fg(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){vd("MemoryPersistence","Starting transaction:",t);const i=new qg(this.Ss.next());return this.referenceDelegate.ks(),n(i).next((t=>this.referenceDelegate.Os(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ms(t,e){return ef.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.Vs={},this.overlays={},this.Ss=new rf(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new jg(this),this.indexManager=new _g,this.remoteDocumentCache=function(t){return new Bg(t)}((t=>this.referenceDelegate.xs(t))),this.yt=new Tg(e),this.Ns=new Dg(this.yt)}}class qg extends Zd{constructor(t){super(),this.currentSequenceNumber=t}}class Wg{static Bs(t){return new Wg(t)}get Ls(){if(this.$s)return this.$s;throw kd()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),ef.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),ef.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),ef.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ef.forEach(this.Ls,(n=>{const i=$d.fromPath(n);return this.qs(t,i).next((t=>{t||e.removeEntry(i,jd.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.qs(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}qs(t,e){return ef.or([()=>ef.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}constructor(t){this.persistence=t,this.Fs=new Mg,this.$s=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hg{static Ci(t,e){let n=Sm(),i=Sm();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new Hg(t,e.fromCache,n,i)}constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,i){return this.ki(t,e).next((r=>r||this.Oi(t,e,i,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(xp(e))return ef.resolve(null);let n=Np(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=_p(e,null,"F"),n=Np(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=Sm(...i);return this.Ni.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Fi(e,i);return this.$i(e,s,r,n.readTime)?this.ki(t,_p(e,null,"F")):this.Bi(t,s,e,n)}))))})))))}Oi(t,e,n,i){return xp(e)||i.isEqual(jd.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((r=>{const s=this.Fi(e,r);return this.$i(e,s,n,i)?this.Mi(t,e):(yd()<=et.DEBUG&&vd("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ap(e)),this.Bi(t,s,e,Gd(i,-1)))}))}Fi(t,e){let n=new ap(Op(t));return e.forEach(((e,i)=>{Lp(t,i)&&(n=n.add(i))})),n}$i(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(t,e){return yd()<=et.DEBUG&&vd("QueryEngine","Using full collection scan to execute query:",Ap(e)),this.Ni.getDocumentsMatchingQuery(t,e,Qd.min())}Bi(t,e,n,i){return this.Ni.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.xi=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Og(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.qi)))}constructor(t,e,n,i){this.persistence=t,this.Li=e,this.yt=i,this.qi=new rp(Fd),this.Ui=new vm((t=>mp(t)),gp),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}}function Gg(t,e,n,i){return new Kg(t,e,n,i)}async function Xg(t,e){const n=Td(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=Sm();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function Qg(t){const e=Td(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function Jg(t,e,n){let i=Sm(),r=Sm();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=wm();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(jd.min())?(e.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),i=i.insert(n,s)):vd("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Wi:i,zi:r}}))}function Yg(t,e){const n=Td(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Zg(t,e){const n=Td(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.Cs.getTargetData(t,e).next((r=>r?(i=r,ef.resolve(i)):n.Cs.allocateTargetId(t).next((r=>(i=new Eg(e,r,0,t.currentSequenceNumber),n.Cs.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.qi.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(t.targetId,t),n.Ui.set(e,t.targetId)),t}))}async function ty(t,e,n){const i=Td(t),r=i.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(t=>i.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!nf(t))throw t;vd("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.qi=i.qi.remove(e),i.Ui.delete(r.target)}function ey(t,e,n){const i=Td(t);let r=jd.min(),s=Sm();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=Td(t),r=i.Ui.get(n);return void 0!==r?ef.resolve(i.qi.get(r)):i.Cs.getTargetData(e,n)}(i,t,Np(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>i.Li.getDocumentsMatchingQuery(t,e,n?r:jd.min(),n?s:Sm()))).next((t=>(ny(i,Rp(e),t),{documents:t,Hi:s})))))}function ny(t,e,n){let i=t.Ki.get(e)||jd.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.Ki.set(e,i)}class iy{er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=Lm()}}class ry{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,e,n){this.qr[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new iy,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.Lr=new iy,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{Ur(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){vd("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){vd("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly extends class{get co(){return!1}ao(t,e,n,i,r){const s=this.ho(t,e);vd("RestConnection","Sending: ",s,n);const o={};return this.lo(o,i,r),this.fo(t,s,o,n).then((t=>(vd("RestConnection","Received: ",t),t)),(e=>{throw wd("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}_o(t,e,n,i,r,s){return this.ao(t,e,n,i,r)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+md,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=ay[t];return`${this.oo}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{fo(t,e,n,i){return new Promise(((r,s)=>{const o=new dd;o.setWithCredentials(!0),o.listenOnce(ad.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case od.NO_ERROR:const e=o.getResponseJson();vd("Connection","XHR received:",JSON.stringify(e)),r(e);break;case od.TIMEOUT:vd("Connection",'RPC "'+t+'" timed out'),s(new Nd(Id.DEADLINE_EXCEEDED,"Request time out"));break;case od.HTTP_ERROR:const n=o.getStatus();if(vd("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Id).indexOf(e)>=0?e:Id.UNKNOWN}(e.status);s(new Nd(t,e.message))}else s(new Nd(Id.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Nd(Id.UNAVAILABLE,"Connection failed."));break;default:kd()}}finally{vd("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=rd(),s=sd(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new ud({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=i.join("");vd("Connection","Creating WebChannel: "+a,o);const c=r.createWebChannel(a,o);let l=!1,u=!1;const h=new cy({Hr:t=>{u?vd("Connection","Not sending because WebChannel is closed:",t):(l||(vd("Connection","Opening WebChannel transport."),c.open(),l=!0),vd("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,hd.EventType.OPEN,(()=>{u||vd("Connection","WebChannel transport opened.")})),d(c,hd.EventType.CLOSE,(()=>{u||(u=!0,vd("Connection","WebChannel transport closed"),h.io())})),d(c,hd.EventType.ERROR,(t=>{u||(u=!0,wd("Connection","WebChannel transport errored:",t),h.io(new Nd(Id.UNAVAILABLE,"The operation could not be completed")))})),d(c,hd.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];Ed(!!n);const i=n,r=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(r){vd("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=pm[t];if(void 0!==e)return ym(e)}(t),n=r.message;void 0===e&&(e=Id.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),u=!0,h.io(new Nd(e,n)),c.close()}else vd("Connection","WebChannel received:",n),h.ro(n)}})),d(s,cd.STAT_EVENT,(t=>{t.stat===ld.PROXY?vd("Connection","Detected buffering proxy"):t.stat===ld.NOPROXY&&vd("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t){return new Wm(t,!0)}class dy{reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),i=Math.max(0,e-n);i>0&&vd("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}constructor(t,e,n=1e3,i=1.5,r=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===Id.RESOURCE_EXHAUSTED?(bd(e.toString()),bd("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===Id.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new Nd(Id.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(t){return vd("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(vd("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,i,r,s,o,a){this.Hs=t,this.vo=n,this.Vo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new dy(t,e)}}class py extends fy{jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:kd()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(t,e){return t.wt?(Ed(void 0===e||"string"==typeof e),ff.fromBase64String(e||"")):(Ed(void 0===e||e instanceof Uint8Array),ff.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Id.UNKNOWN:ym(t.code);return new Nd(e,t.message||"")}(o);n=new Mm(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Ym(t,i.document.name),s=Gm(i.document.updateTime),o=i.document.createTime?Gm(i.document.createTime):jd.min(),a=new up({mapValue:{fields:i.document.fields}}),c=dp.newFoundDocument(r,s,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new Dm(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Ym(t,i.document),s=i.readTime?Gm(i.readTime):jd.min(),o=dp.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Dm([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Ym(t,i.document),s=i.removedTargetIds||[];n=new Dm([],s,r,null)}else{if(!("filter"in e))return kd();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,r=new fm(i),s=t.targetId;n=new Pm(s,r)}}return n}(this.yt,t),n=function(t){if(!("targetChange"in t))return jd.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?jd.min():e.readTime?Gm(e.readTime):jd.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=eg(this.yt),e.addTarget=function(t,e){let n;const i=e.target;return n=yp(i)?{documents:sg(t,i)}:{query:og(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=$m(t,e.resumeToken):e.snapshotVersion.compareTo(jd.min())>0&&(n.readTime=Hm(t,e.snapshotVersion.toTimestamp())),n}(this.yt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return kd()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=eg(this.yt),e.removeTarget=t,this.Bo(e)}constructor(t,e,n,i,r,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,s),this.yt=r}}class my extends fy{get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(Ed(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const e=function(t,e){return t&&t.length>0?(Ed(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Gm(t.updateTime):Gm(e);return n.isEqual(jd.min())&&(n=Gm(e)),new Jp(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Gm(t.commitTime);return this.listener.Zo(n,e)}return Ed(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=eg(this.yt),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>rg(this.yt,t)))};this.Bo(e)}constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.yt=r,this.Jo=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy extends class{}{su(){if(this.nu)throw new Nd(Id.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.ao(t,e,n,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Id.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Nd(Id.UNKNOWN,t.toString())}))}_o(t,e,n,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection._o(t,e,n,r,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Id.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Nd(Id.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.yt=i,this.nu=!1}}class yy{uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(bd(e),this.ou=!1):vd("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur((t=>{n.enqueueAndForget((async()=>{_y(this)&&(vd("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Td(t);e._u.add(4),await wy(e),e.gu.set("Unknown"),e._u.delete(4),await by(e)}(this))}))})),this.gu=new yy(n,i)}}async function by(t){if(_y(t))for(const e of t.wu)await e(!0)}async function wy(t){for(const e of t.wu)await e(!1)}function xy(t,e){const n=Td(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Ny(n)?Iy(n):Hy(n).ko()&&Ey(n,e))}function ky(t,e){const n=Td(t),i=Hy(n);n.du.delete(e),i.ko()&&Ty(n,e),0===n.du.size&&(i.ko()?i.Fo():_y(n)&&n.gu.set("Unknown"))}function Ey(t,e){t.yu.Ot(e.targetId),Hy(t).zo(e)}function Ty(t,e){t.yu.Ot(e),Hy(t).Ho(e)}function Iy(t){t.yu=new Fm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Hy(t).start(),t.gu.uu()}function Ny(t){return _y(t)&&!Hy(t).No()&&t.du.size>0}function _y(t){return 0===Td(t)._u.size}function Cy(t){t.yu=void 0}async function Sy(t){t.du.forEach(((e,n)=>{Ey(t,e)}))}async function Ay(t,e){Cy(t),Ny(t)?(t.gu.hu(e),Iy(t)):t.gu.set("Unknown")}async function Ly(t,e,n){if(t.gu.set("Online"),e instanceof Mm&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.du.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.du.delete(i),t.yu.removeTarget(i))}(t,e)}catch(n){vd("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ry(t,n)}else if(e instanceof Dm?t.yu.Kt(e):e instanceof Pm?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(jd.min()))try{const e=await Qg(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.Zt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.du.get(i);r&&t.du.set(i,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(ff.EMPTY_BYTE_STRING,n.snapshotVersion)),Ty(t,e);const i=new Eg(n.target,e,1,n.sequenceNumber);Ey(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){vd("RemoteStore","Failed to raise snapshot:",e),await Ry(t,e)}}async function Ry(t,e,n){if(!nf(e))throw e;t._u.add(1),await wy(t),t.gu.set("Offline"),n||(n=()=>Qg(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{vd("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await by(t)}))}function Oy(t,e){return e().catch((n=>Ry(t,n,e)))}async function Dy(t){const e=Td(t),n=$y(e);let i=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Py(e);)try{const t=await Yg(e.localStore,i);if(null===t){0===e.fu.length&&n.Fo();break}i=t.batchId,My(e,t)}catch(t){await Ry(e,t)}Uy(e)&&Fy(e)}function Py(t){return _y(t)&&t.fu.length<10}function My(t,e){t.fu.push(e);const n=$y(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Uy(t){return _y(t)&&!$y(t).No()&&t.fu.length>0}function Fy(t){$y(t).start()}async function By(t){$y(t).eu()}async function zy(t){const e=$y(t);for(const n of t.fu)e.Xo(n.mutations)}async function jy(t,e,n){const i=t.fu.shift(),r=xg.from(i,e,n);await Oy(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Dy(t)}async function Vy(t,e){e&&$y(t).Yo&&await async function(t,e){if(gm(n=e.code)&&n!==Id.ABORTED){const n=t.fu.shift();$y(t).Mo(),await Oy(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Dy(t)}var n}(t,e),Uy(t)&&Fy(t)}async function qy(t,e){const n=Td(t);n.asyncQueue.verifyOperationInProgress(),vd("RemoteStore","RemoteStore received new credentials");const i=_y(n);n._u.add(3),await wy(n),i&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await by(n)}async function Wy(t,e){const n=Td(t);e?(n._u.delete(2),await by(n)):e||(n._u.add(2),await wy(n),n.gu.set("Unknown"))}function Hy(t){return t.pu||(t.pu=function(t,e,n){const i=Td(t);return i.su(),new py(e,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,n)}(t.datastore,t.asyncQueue,{Yr:Sy.bind(null,t),Zr:Ay.bind(null,t),Wo:Ly.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Mo(),Ny(t)?Iy(t):t.gu.set("Unknown")):(await t.pu.stop(),Cy(t))}))),t.pu}function $y(t){return t.Iu||(t.Iu=function(t,e,n){const i=Td(t);return i.su(),new my(e,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,n)}(t.datastore,t.asyncQueue,{Yr:By.bind(null,t),Zr:Vy.bind(null,t),tu:zy.bind(null,t),Zo:jy.bind(null,t)}),t.wu.push((async e=>{e?(t.Iu.Mo(),await Dy(t)):(await t.Iu.stop(),t.fu.length>0&&(vd("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))}))),t.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ky{static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new Ky(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Nd(Id.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new _d,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function Gy(t,e){if(bd("AsyncQueue",`${e}: ${t}`),nf(t))return new Nd(Id.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{static emptySet(t){return new Xy(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Xy))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Xy;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}constructor(t){this.comparator=t?(e,n)=>t(e,n)||$d.comparator(e.key,n.key):(t,e)=>$d.comparator(t.key,e.key),this.keyedMap=km(),this.sortedSet=new rp(this.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):kd():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}constructor(){this.Tu=new rp($d.comparator)}}class Jy{static fromInitialDocuments(t,e,n,i,r){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Jy(t,e,Xy.emptySet(e),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Cp(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}constructor(t,e,n,i,r,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(){this.Au=void 0,this.listeners=[]}}class Zy{constructor(){this.queries=new vm((t=>Sp(t)),Cp),this.onlineState="Unknown",this.Ru=new Set}}async function tv(t,e){const n=Td(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new Yy),r)try{s.Au=await n.onListen(i)}catch(t){const n=Gy(t,`Initialization of query '${Ap(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&rv(n)}async function ev(t,e){const n=Td(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function nv(t,e){const n=Td(t);let i=!1;for(const t of e){const e=t.query,r=n.queries.get(e);if(r){for(const e of r.listeners)e.Pu(t)&&(i=!0);r.Au=t}}i&&rv(n)}function iv(t,e,n){const i=Td(t),r=i.queries.get(e);if(r)for(const t of r.listeners)t.onError(n);i.queries.delete(e)}function rv(t){t.Ru.forEach((t=>{t.next()}))}class sv{Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Jy(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=Jy.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ov{constructor(t){this.key=t}}class av{constructor(t){this.key=t}}class cv{get ju(){return this.qu}Wu(t,e){const n=e?e.zu:new Qy,i=e?e.Qu:this.Qu;let r=e?e.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const l=i.get(t),u=Lp(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Hu(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Gu(u,a)>0||c&&this.Gu(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),r=d?r.add(t):r.delete(t)):(s=s.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Qu:s,zu:n,$i:o,mutatedKeys:r}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const r=t.zu.Eu();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return kd()}};return n(t)-n(e)}(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const s=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==r.length||a?{snapshot:new Jy(this.query,t.Qu,i,r,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Qy,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.qu=this.qu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.qu=this.qu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=Sm(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new av(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new ov(n))})),e}tc(t){this.qu=t.Hi,this.Ku=Sm();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return Jy.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}constructor(t,e){this.query=t,this.qu=e,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Sm(),this.mutatedKeys=Sm(),this.Gu=Op(t),this.Qu=new Xy(this.Gu)}}class lv{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class uv{constructor(t){this.key=t,this.nc=!1}}class hv{get isPrimaryClient(){return!0===this.dc}constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new vm((t=>Sp(t)),Cp),this.rc=new Map,this.oc=new Set,this.uc=new rp($d.comparator),this.cc=new Map,this.ac=new Mg,this.hc={},this.lc=new Map,this.fc=Ag.vn(),this.onlineState="Unknown",this.dc=void 0}}async function dv(t,e){const n=Av(t);let i,r;const s=n.ic.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.ec();else{const t=await Zg(n.localStore,Np(e));n.isPrimaryClient&&xy(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,r=await fv(n,e,i,"current"===s,t.resumeToken)}return r}async function fv(t,e,n,i,r){t._c=(e,n,i)=>async function(t,e,n,i){let r=e.view.Wu(n);r.$i&&(r=await ey(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,r))));const s=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,s);return Tv(t,e.targetId,o.Xu),o.snapshot}(t,e,n,i);const s=await ey(t.localStore,e,!0),o=new cv(e,s.Hi),a=o.Wu(s.documents),c=Om.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState,r),l=o.applyChanges(a,t.isPrimaryClient,c);Tv(t,n,l.Xu);const u=new lv(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function pv(t,e){const n=Td(t),i=n.ic.get(e),r=n.rc.get(i.targetId);if(r.length>1)return n.rc.set(i.targetId,r.filter((t=>!Cp(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ty(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),ky(n.remoteStore,i.targetId),kv(n,i.targetId)})).catch(tf)):(kv(n,i.targetId),await ty(n.localStore,i.targetId,!0))}async function mv(t,e){const n=Td(t);try{const t=await function(t,e){const n=Td(t),i=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const o=[];e.targetChanges.forEach(((s,a)=>{const c=r.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,s.addedDocuments,a))));let l=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?l=l.withResumeToken(ff.EMPTY_BYTE_STRING,jd.min()).withLastLimboFreeSnapshotVersion(jd.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,i)),r=r.insert(a,l),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,l,s)&&o.push(n.Cs.updateTargetData(t,l))}));let a=wm(),c=Sm();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(Jg(t,s,e.documentUpdates).next((t=>{a=t.Wi,c=t.zi}))),!i.isEqual(jd.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return ef.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.qi=r,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.cc.get(e);i&&(Ed(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.nc=!0:t.modifiedDocuments.size>0?Ed(i.nc):t.removedDocuments.size>0&&(Ed(i.nc),i.nc=!1))})),await _v(n,t,e)}catch(t){await tf(t)}}function gv(t,e,n){const i=Td(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.ic.forEach(((n,i)=>{const r=i.view.bu(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Td(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.bu(e)&&(i=!0)})),i&&rv(n)}(i.eventManager,e),t.length&&i.sc.Wo(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function yv(t,e,n){const i=Td(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.cc.get(e),s=r&&r.key;if(s){let t=new rp($d.comparator);t=t.insert(s,dp.newNoDocument(s,jd.min()));const n=Sm().add(s),r=new Rm(jd.min(),new Map,new ap(Fd),t,n);await mv(i,r),i.uc=i.uc.remove(s),i.cc.delete(e),Nv(i)}else await ty(i.localStore,e,!1).then((()=>kv(i,e,n))).catch(tf)}async function vv(t,e){const n=Td(t),i=e.batch.batchId;try{const t=await function(t,e){const n=Td(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=ef.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Ed(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Sm();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);xv(n,i,null),wv(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await _v(n,t)}catch(t){await tf(t)}}async function bv(t,e,n){const i=Td(t);try{const t=await function(t,e){const n=Td(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Ed(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);xv(i,e,n),wv(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await _v(i,t)}catch(n){await tf(n)}}function wv(t,e){(t.lc.get(e)||[]).forEach((t=>{t.resolve()})),t.lc.delete(e)}function xv(t,e,n){const i=Td(t);let r=i.hc[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.hc[i.currentUser.toKey()]=r}}function kv(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.rc.get(e))t.ic.delete(i),n&&t.sc.wc(i,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||Ev(t,e)}))}function Ev(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(ky(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Nv(t))}function Tv(t,e,n){for(const i of n)i instanceof ov?(t.ac.addReference(i.key,e),Iv(t,i)):i instanceof av?(vd("SyncEngine","Document no longer in limbo: "+i.key),t.ac.removeReference(i.key,e),t.ac.containsKey(i.key)||Ev(t,i.key)):kd()}function Iv(t,e){const n=e.key,i=n.path.canonicalString();t.uc.get(n)||t.oc.has(i)||(vd("SyncEngine","New document in limbo: "+n),t.oc.add(i),Nv(t))}function Nv(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new $d(qd.fromString(e)),i=t.fc.next();t.cc.set(i,new uv(n)),t.uc=t.uc.insert(n,i),xy(t.remoteStore,new Eg(Np(wp(n.path)),i,2,rf.at))}}async function _v(t,e,n){const i=Td(t),r=[],s=[],o=[];i.ic.isEmpty()||(i.ic.forEach(((t,a)=>{o.push(i._c(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=Hg.Ci(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.sc.Wo(r),await async function(t,e){const n=Td(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ef.forEach(e,(e=>ef.forEach(e.Si,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>ef.forEach(e.Di,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!nf(t))throw t;vd("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.qi.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.qi=n.qi.insert(e,r)}}}(i.localStore,s))}async function Cv(t,e){const n=Td(t);if(!n.currentUser.isEqual(e)){vd("SyncEngine","User change. New user:",e.toKey());const t=await Xg(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach((t=>{t.forEach((t=>{t.reject(new Nd(Id.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.lc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await _v(n,t.ji)}}function Sv(t,e){const n=Td(t),i=n.cc.get(e);if(i&&i.nc)return Sm().add(i.key);{let t=Sm();const i=n.rc.get(e);if(!i)return t;for(const e of i){const i=n.ic.get(e);t=t.unionWith(i.view.ju)}return t}}function Av(t){const e=Td(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yv.bind(null,e),e.sc.Wo=nv.bind(null,e.eventManager),e.sc.wc=iv.bind(null,e.eventManager),e}function Lv(t){const e=Td(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bv.bind(null,e),e}class Rv{async initialize(t){this.yt=hy(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return Gg(this.persistence,new $g,t.initialUser,this.yt)}yc(t){return new Vg(Wg.Bs,this.yt)}gc(t){return new ry}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class Ov{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>gv(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cv.bind(null,this.syncEngine),await Wy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Zy}createDatastore(t){const e=hy(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new ly(i));var i;return function(t,e,n,i){return new gy(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){var e,n,i,r,s;return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=t=>gv(this.syncEngine,t,0),s=oy.C()?new oy:new sy,new vy(e,n,i,r,s)}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new hv(t,e,n,i,r,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Td(t);vd("RemoteStore","RemoteStore shutting down."),e._u.add(5),await wy(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(t,e,n){if(!n)throw new Nd(Id.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Pv(t){if(!$d.isDocumentKey(t))throw new Nd(Id.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Mv(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":kd()}function Uv(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Nd(Id.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mv(t);throw new Nd(Id.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fv=new Map;class Bv{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Nd(Id.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Nd(Id.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new Nd(Id.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{get app(){if(!this._app)throw new Nd(Id.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Nd(Id.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bv(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Sd;switch(t.type){case"gapi":const e=t.client;return new Od(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Nd(Id.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Fv.get(t);e&&(vd("ComponentProvider","Removing Datastore"),Fv.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bv({}),this._settingsFrozen=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jv{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qv(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new jv(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class Vv{withConverter(t){return new Vv(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class qv extends Vv{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new jv(this.firestore,null,new $d(t))}withConverter(t){return new qv(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,wp(n)),this._path=n,this.type="collection"}}function Wv(t,e,...n){if(t=X(t),1===arguments.length&&(e=Ud.R()),Dv("doc","path",e),t instanceof zv){const i=qd.fromString(e,...n);return Pv(i),new jv(t,null,new $d(i))}{if(!(t instanceof jv||t instanceof qv))throw new Nd(Id.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(qd.fromString(e,...n));return Pv(i),new jv(t.firestore,t instanceof qv?t.converter:null,new $d(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hv{next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):bd("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}constructor(t){this.observer=t,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $v{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Nd(Id.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new _d;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Gy(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=pd.UNAUTHENTICATED,this.clientId=Ud.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{vd("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(vd("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function Kv(t,e){t.asyncQueue.verifyOperationInProgress(),vd("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await Xg(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Gv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Xv(t);vd("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>qy(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>qy(e.remoteStore,n))),t.onlineComponents=e}async function Xv(t){return t.offlineComponents||(vd("FirestoreClient","Using default OfflineComponentProvider"),await Kv(t,new Rv)),t.offlineComponents}async function Qv(t){return t.onlineComponents||(vd("FirestoreClient","Using default OnlineComponentProvider"),await Gv(t,new Ov)),t.onlineComponents}function Jv(t){return Qv(t).then((t=>t.syncEngine))}async function Yv(t){const e=await Qv(t),n=e.eventManager;return n.onListen=dv.bind(null,e.syncEngine),n.onUnlisten=pv.bind(null,e.syncEngine),n}function Zv(t,e,n={}){const i=new _d;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const s=new Hv({next:s=>{e.enqueueAndForget((()=>ev(t,o)));const a=s.docs.has(n);!a&&s.fromCache?r.reject(new Nd(Id.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&i&&"server"===i.source?r.reject(new Nd(Id.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(s)},error:t=>r.reject(t)}),o=new sv(wp(n.path),s,{includeMetadataChanges:!0,Nu:!0});return tv(t,o)}(await Yv(t),t.asyncQueue,e,n,i))),i.promise}class tb{get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const e=uy();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise((()=>{}));const e=new _d;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!nf(t))throw t;vd("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t);throw bd("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const i=Ky.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.Uc.push(i),i}zc(){this.Kc&&kd()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new dy(this,"async_queue_retry"),this.Wc=()=>{const t=uy();t&&vd("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=uy();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}}class eb extends zv{_terminate(){return this._firestoreClient||rb(this),this._firestoreClient.terminate()}constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new tb,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}}function nb(t,e){const n="string"==typeof t?t:e||"(default)",i=Mt("object"==typeof t?t:jt(),"firestore").getImmediate({identifier:n});if(!i._initialized){const t=C("firestore");t&&function(t,e,n,i={}){var r;const s=(t=Uv(t,zv))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&wd("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=pd.MOCK_USER;else{e=R(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new Nd(Id.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new pd(s)}t._authCredentials=new Ad(new Cd(e,n))}}(i,...t)}return i}function ib(t){return t._firestoreClient||rb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function rb(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new sf(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new $v(t._authCredentials,t._appCheckCredentials,t._queue,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sb{static fromBase64String(t){try{return new sb(ff.fromBase64String(t))}catch(t){throw new Nd(Id.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new sb(ff.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Nd(Id.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Hd(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ab{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Fd(this._lat,t._lat)||Fd(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Nd(Id.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Nd(Id.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=/^__.*__$/;class ub{toMutation(t,e){return null!==this.fieldMask?new am(t,this.data,this.fieldMask,e,this.fieldTransforms):new om(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function hb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw kd()}}class db{get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new db(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ia({path:n,oa:!1});return i.ua(t),i}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ia({path:n,oa:!1});return i.na(),i}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Tb(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(hb(this.sa)&&lb.test(t))throw this.ha('Document fields cannot begin and end with "__"')}constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.yt=n,this.ignoreUndefinedProperties=i,void 0===r&&this.na(),this.fieldTransforms=r||[],this.fieldMask=s||[]}}class fb{da(t,e,n,i=!1){return new db({sa:t,methodName:e,fa:n,path:Hd.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.yt=n||hy(t)}}function pb(t){const e=t._freezeSettings(),n=hy(t._databaseId);return new fb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mb(t,e,n,i,r,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,r);wb("Data must be an object, but it was:",o,i);const a=vb(i,o);let c,l;if(s.merge)c=new lp(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=xb(e,i,n);if(!o.contains(r))throw new Nd(Id.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Ib(t,r)||t.push(r)}c=new lp(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new ub(new up(a),c,l)}class gb extends ab{_toFieldTransform(t){return new Qp(t.path,new Vp)}isEqual(t){return t instanceof gb}}function yb(t,e){if(bb(t=X(t)))return wb("Unsupported field value:",e,t),vb(t,e);if(t instanceof ab)return function(t,e){if(!hb(e.sa))throw e.ha(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ha(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=yb(r,e.aa(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=X(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Up(e.yt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=zd.fromDate(t);return{timestampValue:Hm(e.yt,n)}}if(t instanceof zd){const n=new zd(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Hm(e.yt,n)}}if(t instanceof cb)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof sb)return{bytesValue:$m(e.yt,t._byteString)};if(t instanceof jv){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Xm(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha(`Unsupported field value: ${Mv(t)}`)}(t,e)}function vb(t,e){const n={};return lf(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cf(t,((t,i)=>{const r=yb(i,e.ra(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function bb(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof zd||t instanceof cb||t instanceof sb||t instanceof jv||t instanceof ab)}function wb(t,e,n){if(!bb(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=Mv(n);throw"an object"===i?e.ha(t+" a custom object"):e.ha(t+" "+i)}}function xb(t,e,n){if((e=X(e))instanceof ob)return e._internalPath;if("string"==typeof e)return Eb(t,e);throw Tb("Field path arguments must be of type string or ",t,!1,void 0,n)}const kb=new RegExp("[~\\*/\\[\\]]");function Eb(t,e,n){if(e.search(kb)>=0)throw Tb(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ob(...e.split("."))._internalPath}catch(i){throw Tb(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Tb(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new Nd(Id.INVALID_ARGUMENT,a+t+c)}function Ib(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{get id(){return this._key.path.lastSegment()}get ref(){return new jv(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new _b(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Cb("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}}class _b extends Nb{data(){return super.data()}}function Cb(t,e){return"string"==typeof e?Eb(t,e):e instanceof ob?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{convertValue(t,e="none"){switch(kf(t)){case 0:return null;case 1:return t.booleanValue;case 2:return gf(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(yf(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw kd()}}convertObject(t,e){const n={};return cf(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new cb(gf(t.latitude),gf(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=bf(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(wf(t));default:return null}}convertTimestamp(t){const e=mf(t);return new zd(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=qd.fromString(t);Ed(gg(n));const i=new of(n.get(1),n.get(3)),r=new $d(n.popFirst(5));return i.isEqual(e)||bd(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lb{isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}}class Rb extends Nb{exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ob(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Cb("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}}class Ob extends Rb{data(t={}){return super.data(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Db(t){t=Uv(t,jv);const e=Uv(t.firestore,eb);return Zv(ib(e),t._key).then((n=>Fb(e,t,n)))}class Pb extends Sb{convertBytes(t){return new sb(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new jv(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function Mb(t,e,n){t=Uv(t,jv);const i=Uv(t.firestore,eb),r=Ab(t.converter,e,n);return Ub(i,[mb(pb(i),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,Yp.none())])}function Ub(t,e){return function(t,e){const n=new _d;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const i=Lv(t);try{const t=await function(t,e){const n=Td(t),i=zd.now(),r=e.reduce(((t,e)=>t.add(e.key)),Sm());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=wm(),c=Sm();return n.Gi.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{s=r;const o=[];for(const t of e){const e=rm(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new am(t.key,e,hp(e.value.mapValue),Yp.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:Em(s)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.hc[t.currentUser.toKey()];i||(i=new rp(Fd)),i=i.insert(e,n),t.hc[t.currentUser.toKey()]=i}(i,t.batchId,n),await _v(i,t.changes),await Dy(i.remoteStore)}catch(t){const e=Gy(t,"Failed to persist write");n.reject(e)}}(await Jv(t),e,n))),n.promise}(ib(t),e)}function Fb(t,e,n){const i=n.docs.get(e._key),r=new Pb(t);return new Rb(t,r,e._key,i,new Lb(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){md=t}(Bt),Pt(new Q("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new eb(new Ld(t.getProvider("auth-internal")),new Pd(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Nd(Id.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new of(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),Vt(fd,"3.8.3",t),Vt(fd,"3.8.3","esm2017")}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bb="firebasestorage.googleapis.com",zb="storageBucket";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jb extends U{get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return $b(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}constructor(t,e,n=0){super($b(t),`Firebase Storage: ${e} (${$b(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,jb.prototype)}}var Vb,qb,Wb,Hb;function $b(t){return"storage/"+t}function Kb(){return new jb(Vb.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function Gb(){return new jb(Vb.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Xb(){return new jb(Vb.CANCELED,"User canceled the upload/download.")}function Qb(t){return new jb(Vb.INVALID_ARGUMENT,t)}function Jb(){return new jb(Vb.APP_DELETED,"The Firebase app was deleted.")}(qb=Vb||(Vb={})).UNKNOWN="unknown",qb.OBJECT_NOT_FOUND="object-not-found",qb.BUCKET_NOT_FOUND="bucket-not-found",qb.PROJECT_NOT_FOUND="project-not-found",qb.QUOTA_EXCEEDED="quota-exceeded",qb.UNAUTHENTICATED="unauthenticated",qb.UNAUTHORIZED="unauthorized",qb.UNAUTHORIZED_APP="unauthorized-app",qb.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",qb.INVALID_CHECKSUM="invalid-checksum",qb.CANCELED="canceled",qb.INVALID_EVENT_NAME="invalid-event-name",qb.INVALID_URL="invalid-url",qb.INVALID_DEFAULT_BUCKET="invalid-default-bucket",qb.NO_DEFAULT_BUCKET="no-default-bucket",qb.CANNOT_SLICE_BLOB="cannot-slice-blob",qb.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",qb.NO_DOWNLOAD_URL="no-download-url",qb.INVALID_ARGUMENT="invalid-argument",qb.INVALID_ARGUMENT_COUNT="invalid-argument-count",qb.APP_DELETED="app-deleted",qb.INVALID_ROOT_OPERATION="invalid-root-operation",qb.INVALID_FORMAT="invalid-format",qb.INTERNAL_ERROR="internal-error",qb.UNSUPPORTED_ENVIRONMENT="unsupported-environment";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yb{get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=Yb.makeFromUrl(t,e)}catch(e){return new Yb(t,"")}if(""===n.path)return n;throw i=t,new jb(Vb.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.");var i}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";const r=new RegExp("^gs://"+i+"(/(.*))?$","i");function s(t){t.path_=decodeURIComponent(t.path)}const o=e.replace(/[.]/g,"\\."),a=[{regex:r,indices:{bucket:1,path:3},postModify:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${i}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${e===Bb?"(?:storage.googleapis.com|storage.cloud.google.com)":e}/${i}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let e=0;e<a.length;e++){const i=a[e],r=i.regex.exec(t);if(r){const t=r[i.indices.bucket];let e=r[i.indices.path];e||(e=""),n=new Yb(t,e),i.postModify(n);break}}if(null==n)throw function(t){return new jb(Vb.INVALID_URL,"Invalid URL '"+t+"'.")}(t);return n}constructor(t,e){this.bucket=t,this.path_=e}}class Zb{getPromise(){return this.promise_}cancel(t=!1){}constructor(t){this.promise_=Promise.reject(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(t,e,n,i){if(i<e)throw Qb(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Qb(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){n=n+(e(i)+"="+e(t[i]))+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nw(t,e){const n=t>=500&&t<600,i=-1!==[408,429].indexOf(t),r=-1!==e.indexOf(t);return n||i||r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Hb=Wb||(Wb={}))[Hb.NO_ERROR=0]="NO_ERROR",Hb[Hb.NETWORK_ERROR=1]="NETWORK_ERROR",Hb[Hb.ABORT=2]="ABORT";class iw{start_(){const t=(t,e)=>{const n=this.resolve_,i=this.reject_,r=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(r,r.getResponse());void 0!==t?n(t):n()}catch(t){i(t)}else if(null!==r){const t=Kb();t.serverResponse=r.getErrorText(),this.errorCallback_?i(this.errorCallback_(r,t)):i(t)}else if(e.canceled){i(this.appDelete_?Jb():Xb())}else{i(Gb())}};this.canceled_?t(0,new rw(!1,null,!0)):this.backoffId_=function(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function c(){return 2===a}let l=!1;function u(...t){l||(l=!0,e.apply(null,t))}function h(e){r=setTimeout((()=>{r=null,t(f,c())}),e)}function d(){s&&clearTimeout(s)}function f(t,...e){if(l)return void d();if(t)return d(),void u.call(null,t,...e);if(c()||o)return d(),void u.call(null,t,...e);let n;i<64&&(i*=2),1===a?(a=2,n=0):n=1e3*(i+Math.random()),h(n)}let p=!1;function m(t){p||(p=!0,d(),l||(null!==r?(t||(a=2),clearTimeout(r),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}(((t,e)=>{if(e)return void t(!1,new rw(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===Wb.NO_ERROR,r=n.getStatus();if(!e||nw(r,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===Wb.ABORT;return void t(!1,new rw(!1,null,e))}const s=-1!==this.successCodes_.indexOf(r);t(!0,new rw(s,n))}))}),t,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}constructor(t,e,n,i,r,s,o,a,c,l,u,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}}class rw{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function sw(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ow{toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new ow(t,e)}get root(){const t=new Yb(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return sw(this._location.path)}get storage(){return this._service}get parent(){const t=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t){if(0===t.length)return null;const e=t.lastIndexOf("/");return-1===e?"":t.slice(0,e)}(this._location.path);if(null===t)return null;const e=new Yb(this._location.bucket,t);return new ow(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw function(t){return new jb(Vb.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(t)}constructor(t,e){this._service=t,this._location=e instanceof Yb?e:Yb.makeFromUrl(e,t.host)}}function aw(t,e){const n=null==e?void 0:e[zb];return null==n?null:Yb.makeFromBucketSpec(n,t)}class cw{get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=Yb.makeFromBucketSpec(this._url,t):this._bucket=aw(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){tw("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){tw("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){return(await t.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ow(this,t)}_makeRequest(t,e,n,i,r=!0){if(this._deleted)return new Zb(Jb());{const s=function(t,e,n,i,r,s,o=!0){const a=ew(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return function(t,e){e&&(t["X-Firebase-GMPID"]=e)}(l,e),function(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}(l,n),function(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!=e?e:"AppManager")}(l,s),function(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}(l,i),new iw(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,this._appId,n,i,e,this._firebaseVersion,r);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}constructor(t,e,n,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Bb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?Yb.makeFromBucketSpec(i,this._host):aw(this._host,this.app.options)}}const lw="@firebase/storage",uw="0.11.1",hw="storage";function dw(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new cw(n,i,r,e,Bt)}function fw(){Hr.backdropRegistr.classList.add("is-hidden"),window.removeEventListener("keydown",pw),window.onscroll=function(){window.scrollTo()}}function pw(t){"Escape"===t.code&&fw()}Pt(new Q(hw,dw,"PUBLIC").setMultipleInstances(!0)),Vt(lw,uw,""),Vt(lw,uw,"esm2017"),Hr.openRegistrModalBtn.addEventListener("click",(function(){Hr.backdropRegistr.classList.remove("is-hidden"),window.addEventListener("keydown",pw),ww()})),Hr.closeRegistrModalBtn.addEventListener("click",fw),Hr.backdropRegistr.addEventListener("click",(function(t){t.currentTarget===t.target&&fw()}));class mw{async signIn(){const t=new So;await ba(lc(),t)}signOutUser(){X(lc()).signOut()}initFirebaseAuth(){var t,e,n,i;t=lc(),e=gw,X(t).onAuthStateChanged(e,n,i)}isUserSignedIn(){return!!lc().currentUser}async saveMovieData(t,e){if(!this.isUserSignedIn())throw"No autenteficate";const n=lc().currentUser.uid,i=Wv(nb(),this.NAME_COLLECTION_FILESTORAGE,e+n),r={name:yw(),timestamp:new gb("serverTimestamp"),arrFilms:t};try{await Mb(i,r)}catch(t){console.error("Error add new movie to Firebase Database",t)}}async readMovieData(t){if(!this.isUserSignedIn())return[];const e=lc().currentUser.uid,n=Wv(nb(),this.NAME_COLLECTION_FILESTORAGE,t+e),i=await Db(n);return i.exists()?i.data():[]}constructor(){this.NAME_COLLECTION_FILESTORAGE="storage_filmoteka"}}function gw(t){if(t){let t=lc().currentUser.photoURL||"../images/profile_placeholder.png",n=yw();Hr.userPicElement.style.backgroundImage="url("+((-1!==(e=t).indexOf("googleusercontent.com")&&-1===e.indexOf("?")?e+"?sz=150":e)+")"),Hr.userNameElement.textContent=n,Hr.userInfoElement.classList.remove("visually-hidden"),Hr.signOutButtonElement.classList.remove("visually-hidden"),Hr.signInButtonElement.classList.add("visually-hidden"),fw()}else Hr.userInfoElement.classList.add("visually-hidden"),Hr.signOutButtonElement.classList.add("visually-hidden"),Hr.signInButtonElement.classList.remove("visually-hidden");var e}function yw(){return lc().currentUser.displayName}const vw=new mw;function bw(t){const e=document.querySelector(".js-btn-watched"),n=document.querySelector(".js-btn-queue");e.addEventListener("click",(()=>{const e="Watched";vw.readMovieData(e).then((({arrFilms:n})=>{if(!n)return vw.saveMovieData([t],e);n.some((e=>e.id===t.id))?console.log("This film in your collection 😂😋😍🤩"):(n.push(t),vw.saveMovieData(n,e))}))})),n.addEventListener("click",(()=>{const e="Queue";vw.readMovieData(e).then((({arrFilms:n})=>{if(!n)return vw.saveMovieData([t],e);n.some((e=>e.id===t.id))?console.log("This film in your collection 😂😋😍🤩"):(n.push(t),vw.saveMovieData(n,e))}))}))}function ww(){let t=window.scrollX,e=window.scrollY;window.onscroll=function(){window.scrollTo(t,e)}}function xw(){window.addEventListener("keydown",kw),Hr.modalMovies.classList.toggle("is-hidden"),Hr.modalMovies.classList.contains("is-hidden")&&(window.removeEventListener("keydown",kw),window.onscroll=function(){window.scrollTo()})}function kw(t){"Escape"===t.key&&(xw(),window.onscroll=function(){window.scrollTo()})}Hr.openModalCard.addEventListener("click",(function(t){if(t.currentTarget===t.target)return;document.querySelector(".wrap-disc").innerHTML="";const e=t.target.closest(".js-target"),n=Number(e.dataset.id);(async function(t){try{return(await fr.get(`${Ew}${t}?api_key=${Tw}`)).data}catch(t){console.log(t)}})(n).then((t=>{Pr(t),rs(t),bw(t)})),is(n).then((t=>{Hr.trailerBtn.onclick=()=>{const e=ts.create(`<div class="modal-trailer">\n                <iframe width="560" height="315" src="https://www.youtube.com/embed/${t}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n                </div>`,{onShow:()=>{window.removeEventListener("keydown",kw),window.addEventListener("keydown",n.bind(e),{once:!0})},onClose:()=>{window.addEventListener("keydown",kw,{once:!0}),window.removeEventListener("keydown",n.bind(e))}});function n(t){"Escape"===t.key&&this.close()}e.show()}})),ww(),xw()})),Hr.closeModalBtn.addEventListener("click",xw),Hr.backdrop.addEventListener("click",(function(t){t.currentTarget===t.target&&(xw(),window.onscroll=function(){window.scrollTo()})}));const Ew="https://api.themoviedb.org/3/movie/",Tw="d03712107dcdd723f1173c5ee2c0d8c1";class Iw{start(){Hr.backdropSpinner.classList.remove("is-hidden")}stop(){Hr.backdropSpinner.classList.add("is-hidden")}}const Nw=new Fr,_w=new Qr,Cw=new Iw;function Sw(t){const e=[];return t.find((t=>{(function(){try{const t=localStorage.getItem("GENRES");return null===t?[]:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}})().forEach((n=>{n.id===t&&e.push(n.name)}))})),e}const Aw=new Iw,Lw=new Fr,Rw=new Qr;function Ow(){Hr.backdropFooter.classList.add("is-hidden"),window.removeEventListener("keydown",Dw),window.onscroll=function(){window.scrollTo()}}function Dw(t){"Escape"===t.code&&Ow()}Hr.searchForm.addEventListener("submit",(function(t){t.preventDefault();const e=t.currentTarget.elements.searchQuery.value.trim();if(Hr.notCorrectNotification.classList.remove("films__not-correct-notification-show"),Hr.noMoviesNotification.classList.remove("films__no-movies-notification-show"),Hr.noMoviesNotification.classList.add("visually-hidden"),!e)return void Hr.notCorrectNotification.classList.add("films__not-correct-notification-show");Hr.moviesList.innerHTML="",Rw.query=e,Aw.start(),Rw.getSearchMovies().then((t=>{if(Hr.notCorrectNotification.classList.remove("films__not-correct-notification-show"),Hr.noMoviesNotification.classList.remove("films__no-movies-notification-show"),Hr.searchErrorImg.classList.add("visually-hidden"),0===t.results.length)return Hr.searchErrorImg.classList.remove("visually-hidden"),Hr.noMoviesNotification.classList.add("films__no-movies-notification-show"),Hr.noMoviesNotification.classList.remove("visually-hidden"),void Hr.containerPagAll.classList.add("visually-hidden");Hr.containerPagAll.classList.remove("visually-hidden"),jr(t);const e=Dr(Lw.getDataTrendMovies(t.results));Hr.moviesList.innerHTML=e})).catch((t=>Lr.Notify.failure(t))).finally((()=>{Aw.stop()}))})),Hr.openTeamModalBtn.addEventListener("click",(function(){Hr.backdropFooter.classList.remove("is-hidden"),window.addEventListener("keydown",Dw),ww()})),Hr.closeTeamModalBtn.addEventListener("click",Ow),Hr.backdropFooter.addEventListener("click",(function(t){t.currentTarget===t.target&&Ow()})),_w.getGenres().then((t=>{localStorage.setItem("GENRES",JSON.stringify(t))})).catch((t=>console.log(t))),Cw.start(),_w.getTrendMovie().then((t=>{const e=Dr(Nw.getDataTrendMovies(t.results));Hr.moviesList.innerHTML=e,jr(t)})).catch((t=>console.log(t))).finally((()=>{Cw.stop()}));const Pw=function(){if(ne&&ne.apiKey)return ne;throw new Error("No Firebase configuration object provided.\nAdd your web app's configuration object to firebase-config.js")}(),Mw=new mw;Hr.signInWithGoogle.addEventListener("click",Mw.signIn),Hr.signOutButtonElement.addEventListener("click",Mw.signOutUser),zt(Pw),Mw.initFirebaseAuth()}();
//# sourceMappingURL=index.75d24f73.js.map
