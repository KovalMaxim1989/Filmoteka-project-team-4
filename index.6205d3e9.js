function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}var i={},s={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in i)return i[t].exports;if(t in s){var e=s[t];delete s[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){s[t]=e},e.parcelRequired7c6=r),r.register("kyEFX",(function(e,n){var i,s;t(e.exports,"register",(function(){return i}),(function(t){return i=t})),t(e.exports,"resolve",(function(){return s}),(function(t){return s=t}));var r={};i=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)r[e[n]]=t[e[n]]},s=function(t){var e=r[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),r("kyEFX").register(JSON.parse('{"5ZPII":"index.6205d3e9.js","dATrs":"movie-pic.fe810275.jpg","lk5QZ":"library.c443c764.css","40Y9m":"library.e6b2eb3a.js"}'));
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
var o,a,c,l=o={};function u(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}function d(t){if(a===setTimeout)return setTimeout(t,0);if((a===u||!a)&&setTimeout)return a=setTimeout,setTimeout(t,0);try{return a(t,0)}catch(e){try{return a.call(null,t,0)}catch(e){return a.call(this,t,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:u}catch(t){a=u}try{c="function"==typeof clearTimeout?clearTimeout:h}catch(t){c=h}}();var f,p=[],m=!1,g=-1;function y(){m&&f&&(m=!1,f.length?p=f.concat(p):g=-1,p.length&&v())}function v(){if(!m){var t=d(y);m=!0;for(var e=p.length;e;){for(f=p,p=[];++g<e;)f&&f[g].run();g=-1,e=p.length}f=null,m=!1,function(t){if(c===clearTimeout)return clearTimeout(t);if((c===h||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(t);try{c(t)}catch(e){try{return c.call(null,t)}catch(e){return c.call(this,t)}}}(t)}}function b(t,e){this.fun=t,this.array=e}function w(){}l.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new b(t,e)),1!==p.length||m||d(v)},b.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=w,l.addListener=w,l.once=w,l.off=w,l.removeListener=w,l.removeAllListeners=w,l.emit=w,l.prependListener=w,l.prependOnceListener=w,l.listeners=function(t){return[]},l.binding=function(t){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(t){throw new Error("process.chdir is not supported")},l.umask=function(){return 0};const x=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296==(64512&s)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++i)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},k={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const s=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,l=s>>2,u=(3&s)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(x(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(r>>10)),e[i++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const s=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==s||null==r||null==o||null==a)throw Error();const c=s<<2|r>>4;if(i.push(c),64!==o){const t=r<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},T=function(t){return function(t){const e=x(t);return k.encodeByteArray(e,!0)}(t).replace(/\./g,"")},I=function(t){try{return k.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
const E=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,_=()=>{try{return E()||(()=>{if(void 0===o||void 0===o.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&I(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},C=t=>{var e,n;return null===(n=null===(e=_())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},S=t=>{const e=C(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},N=()=>{var t;return null===(t=_())||void 0===t?void 0:t.config},A=t=>{var e;return null===(e=_())||void 0===e?void 0:e[`_${t}`]};
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
class R{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */function L(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[T(JSON.stringify({alg:"none",type:"JWT"})),T(JSON.stringify(r)),""].join(".")}
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
 */function D(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function P(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function O(){const t=D();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function M(){try{return"object"==typeof indexedDB}catch(t){return!1}}class F extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,F.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,U.prototype.create)}}class U{create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,e){return t.replace(V,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new F(i,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const V=/\{\$([^}]+)}/g;
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
 */function j(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function B(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const n=t[s],r=e[s];if(z(n)&&z(r)){if(!B(n,r))return!1}else if(n!==r)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function z(t){return null!==t&&"object"==typeof t}
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
 */function $(t,e){const n=new K(t,e);return n.subscribe.bind(n)}class K{next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=G),void 0===i.error&&(i.error=G),void 0===i.complete&&(i.complete=G);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}}function G(){}
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
function Q(t){return t&&t._delegate?t._delegate:t}class X{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
 */class Y{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new R;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:J})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=J){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=J){return this.instances.has(t)}getOptions(t=J){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===J?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t=J){return this.component?this.component.multipleInstances?t:J:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Z{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Y(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}
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
 */const tt=[];var et,nt;(nt=et||(et={}))[nt.DEBUG=0]="DEBUG",nt[nt.VERBOSE=1]="VERBOSE",nt[nt.INFO=2]="INFO",nt[nt.WARN=3]="WARN",nt[nt.ERROR=4]="ERROR",nt[nt.SILENT=5]="SILENT";const it={debug:et.DEBUG,verbose:et.VERBOSE,info:et.INFO,warn:et.WARN,error:et.ERROR,silent:et.SILENT},st=et.INFO,rt={[et.DEBUG]:"log",[et.VERBOSE]:"log",[et.INFO]:"info",[et.WARN]:"warn",[et.ERROR]:"error"},ot=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),s=rt[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${i}]  ${t.name}:`,...n)};class at{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in et))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?it[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,et.DEBUG,...t),this._logHandler(this,et.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,et.VERBOSE,...t),this._logHandler(this,et.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,et.INFO,...t),this._logHandler(this,et.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,et.WARN,...t),this._logHandler(this,et.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,et.ERROR,...t),this._logHandler(this,et.ERROR,...t)}constructor(t){this.name=t,this._logLevel=st,this._logHandler=ot,this._userLogHandler=null,tt.push(this)}}const ct=(t,e)=>e.some((e=>t instanceof e));let lt,ut;const ht=new WeakMap,dt=new WeakMap,ft=new WeakMap,pt=new WeakMap,mt=new WeakMap;let gt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return dt.get(t);if("objectStoreNames"===e)return t.objectStoreNames||ft.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bt(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function yt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ut||(ut=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(wt(this),e),bt(ht.get(this))}:function(...e){return bt(t.apply(wt(this),e))}:function(e,...n){const i=t.call(wt(this),e,...n);return ft.set(i,e.sort?e.sort():[e]),bt(i)}}function vt(t){return"function"==typeof t?yt(t):(t instanceof IDBTransaction&&function(t){if(dt.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",r),t.removeEventListener("abort",r)},s=()=>{e(),i()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",r),t.addEventListener("abort",r)}));dt.set(t,e)}(t),ct(t,lt||(lt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,gt):t)}function bt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",r)},s=()=>{e(bt(t.result)),i()},r=()=>{n(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&ht.set(e,t)})).catch((()=>{})),mt.set(e,t),e}(t);if(pt.has(t))return pt.get(t);const e=vt(t);return e!==t&&(pt.set(t,e),mt.set(e,t)),e}const wt=t=>mt.get(t);function xt(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=bt(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(bt(o.result),t.oldVersion,t.newVersion,bt(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const kt=["get","getKey","getAll","getAllKeys","count"],Tt=["put","add","delete","clear"],It=new Map;function Et(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(It.get(e))return It.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Tt.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!kt.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&r.done]))[0]};return It.set(e,r),r}gt=(t=>({...t,get:(e,n,i)=>Et(e,n)||t.get(e,n,i),has:(e,n)=>!!Et(e,n)||t.has(e,n)}))(gt);
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
class _t{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const Ct="@firebase/app",St="0.9.3",Nt=new at("@firebase/app"),At="[DEFAULT]",Rt={[Ct]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Lt=new Map,Dt=new Map;function Pt(t,e){try{t.container.addComponent(e)}catch(n){Nt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ot(t){const e=t.name;if(Dt.has(e))return Nt.debug(`There were multiple attempts to register component ${e}.`),!1;Dt.set(e,t);for(const e of Lt.values())Pt(e,t);return!0}function Mt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
const Ft=new U("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Ut{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new X("app",(()=>this),"PUBLIC"))}}
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
 */const Vt="9.17.1";function jt(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:At,automaticDataCollectionEnabled:!1},e),s=i.name;if("string"!=typeof s||!s)throw Ft.create("bad-app-name",{appName:String(s)});if(n||(n=N()),!n)throw Ft.create("no-options");const r=Lt.get(s);if(r){if(B(n,r.options)&&B(i,r.config))return r;throw Ft.create("duplicate-app",{appName:s})}const o=new Z(s);for(const t of Dt.values())o.addComponent(t);const a=new Ut(n,i,o);return Lt.set(s,a),a}function Bt(t=At){const e=Lt.get(t);if(!e&&t===At)return jt();if(!e)throw Ft.create("no-app",{appName:t});return e}function zt(t,e,n){var i;let s=null!==(i=Rt[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${e}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Nt.warn(t.join(" "))}Ot(new X(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
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
const qt="firebase-heartbeat-database",Wt=1,Ht="firebase-heartbeat-store";let $t=null;function Kt(){return $t||($t=xt(qt,Wt,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(Ht)}}).catch((t=>{throw Ft.create("idb-open",{originalErrorMessage:t.message})}))),$t}async function Gt(t,e){try{const n=(await Kt()).transaction(Ht,"readwrite"),i=n.objectStore(Ht);return await i.put(e,Qt(t)),n.done}catch(t){if(t instanceof F)Nt.warn(t.message);else{const e=Ft.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Nt.warn(e.message)}}}function Qt(t){return`${t.name}!${t.options.appId}`}
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
 */const Xt=1024;class Jt{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Yt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Yt(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=Xt){const n=[];let i=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),te(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),te(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=T(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Zt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function Yt(){return(new Date).toISOString().substring(0,10)}class Zt{async runIndexedDBEnvironmentCheck(){return!!M()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await Kt()).transaction(Ht).objectStore(Ht).get(Qt(t))}catch(t){if(t instanceof F)Nt.warn(t.message);else{const e=Ft.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Nt.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Gt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Gt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function te(t){return T(JSON.stringify({version:2,heartbeats:t})).length}
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
 */var ee;ee="",Ot(new X("platform-logger",(t=>new _t(t)),"PRIVATE")),Ot(new X("heartbeat",(t=>new Jt(t)),"PRIVATE")),zt(Ct,St,ee),zt(Ct,St,"esm2017"),zt("fire-js","");
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
zt("firebase","9.17.1","app");const ne={apiKey:"AIzaSyCf4tLspRq68Ljv4DBPIn8lepUq3CBW6kQ",authDomain:"filmoteka-bl6.firebaseapp.com",projectId:"filmoteka-bl6",storageBucket:"filmoteka-bl6.appspot.com",messagingSenderId:"513518233245",appId:"1:513518233245:web:28560022e0c985e2f09674",measurementId:"G-6CEWHL9KG0"};function ie(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function se(t,e){return e.get?e.get.call(t):e.value}function re(t,e){return se(t,ie(t,e,"get"))}function oe(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function ae(t,e,n){oe(t,e),e.set(t,n)}function ce(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}function le(t,e,n){return ce(t,ie(t,e,"set"),n),n}r("7Y9D8");var ue,he,de=r("2shzp"),fe={};ue=void 0!==e?e:"undefined"!=typeof window?window:fe,he=function(t){if(void 0===t&&void 0===t.document)return!1;var e,n="Success",i="Failure",s="Warning",r="Info",o={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},a=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},c=function(e){return e||(e="head"),null!==t.document[e]||(a('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},l=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e&&"[object Object]"===Object.prototype.toString.call(n[i])?t[i]=l(t[i],n[i]):t[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return t},u=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},h=0,d=function(a,u,d,p){if(!c("body"))return!1;e||f.Notify.init({});var m=l(!0,e,{});if("object"==typeof d&&!Array.isArray(d)||"object"==typeof p&&!Array.isArray(p)){var g={};"object"==typeof d?g=d:"object"==typeof p&&(g=p),e=l(!0,e,g)}var y,v,b=e[a.toLocaleLowerCase("en")];h++,"string"!=typeof u&&(u="Notiflix "+a),e.plainText&&(y=u,(v=t.document.createElement("div")).innerHTML=y,u=v.textContent||v.innerText||""),!e.plainText&&u.length>e.messageMaxLength&&(e=l(!0,e,{closeButton:!0,messageMaxLength:150}),u='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),u.length>e.messageMaxLength&&(u=u.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(b.fontAwesomeIconColor=b.background),e.cssAnimation||(e.cssAnimationDuration=0);var w=t.document.getElementById(o.wrapID)||t.document.createElement("div");if(w.id=o.wrapID,w.style.width=e.width,w.style.zIndex=e.zindex,w.style.opacity=e.opacity,"center-center"===e.position?(w.style.left=e.distance,w.style.top=e.distance,w.style.right=e.distance,w.style.bottom=e.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===e.position?(w.style.left=e.distance,w.style.right=e.distance,w.style.top=e.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===e.position?(w.style.left=e.distance,w.style.right=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===e.position?(w.style.right=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.left="auto"):"left-top"===e.position?(w.style.left=e.distance,w.style.top=e.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===e.position?(w.style.left=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=e.distance,w.style.top=e.distance,w.style.left="auto",w.style.bottom="auto"),e.backOverlay){var x=t.document.getElementById(o.overlayID)||t.document.createElement("div");x.id=o.overlayID,x.style.width="100%",x.style.height="100%",x.style.position="fixed",x.style.zIndex=e.zindex-1,x.style.left=0,x.style.top=0,x.style.right=0,x.style.bottom=0,x.style.background=b.backOverlayColor||e.backOverlayColor,x.className=e.cssAnimation?"nx-with-animation":"",x.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(o.overlayID)||t.document.body.appendChild(x)}t.document.getElementById(o.wrapID)||t.document.body.appendChild(w);var k=t.document.createElement("div");k.id=e.ID+"-"+h,k.className=e.className+" "+b.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof d?"nx-with-close-button":"")+" "+("function"==typeof d?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=e.fontSize,k.style.color=b.textColor,k.style.background=b.background,k.style.borderRadius=e.borderRadius,k.style.pointerEvents="all",e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(k.style.animationDuration=e.cssAnimationDuration+"ms");var T="";if(e.closeButton&&"function"!=typeof d&&(T='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+b.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)k.innerHTML='<i style="color:'+b.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+b.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+u+"</span>"+(e.closeButton?T:"");else{var I="";a===n?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===i?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===s?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===r&&(I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=I+'<span class="nx-message nx-with-icon">'+u+"</span>"+(e.closeButton?T:"")}else k.innerHTML='<span class="nx-message">'+u+"</span>"+(e.closeButton?T:"");if("left-bottom"===e.position||"right-bottom"===e.position){var E=t.document.getElementById(o.wrapID);E.insertBefore(k,E.firstChild)}else t.document.getElementById(o.wrapID).appendChild(k);var _=t.document.getElementById(k.id);if(_){var C,S,N=function(){_.classList.add("nx-remove");var e=t.document.getElementById(o.overlayID);e&&w.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(C)},A=function(){if(_&&null!==_.parentNode&&_.parentNode.removeChild(_),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var e=t.document.getElementById(o.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(S)};if(e.closeButton&&"function"!=typeof d&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){N();var t=setTimeout((function(){A(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof d||e.clickToClose)&&_.addEventListener("click",(function(){"function"==typeof d&&d(),N();var t=setTimeout((function(){A(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof d){var R=function(){C=setTimeout((function(){N()}),e.timeout),S=setTimeout((function(){A()}),e.timeout+e.cssAnimationDuration)};R(),e.pauseOnHover&&(_.addEventListener("mouseenter",(function(){_.classList.add("nx-paused"),clearTimeout(C),clearTimeout(S)})),_.addEventListener("mouseleave",(function(){_.classList.remove("nx-paused"),R()})))}}if(e.showOnlyTheLastOne&&h>0)for(var L=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+h+"])"),D=0;D<L.length;D++){var P=L[D];null!==P.parentNode&&P.parentNode.removeChild(P)}e=l(!0,e,m)},f={Notify:{init:function(n){e=l(!0,o,n),function(e,n){if(!c("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}}(u,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return a("You have to initialize the Notify module before call Merge function."),!1;e=l(!0,e,t)},success:function(t,e,i){d(n,t,e,i)},failure:function(t,e,n){d(i,t,e,n)},warning:function(t,e,n){d(s,t,e,n)},info:function(t,e,n){d(r,t,e,n)}}};return"object"==typeof t.Notiflix?l(!0,t.Notiflix,{Notify:f.Notify}):{Notify:f.Notify}},"function"==typeof define&&define.amd?define([],(function(){return he(ue)})):"object"==typeof fe?fe=he(ue):ue.Notiflix=he(ue);var pe,me=r("3huUq");pe=new URL(r("kyEFX").resolve("dATrs"),import.meta.url).toString();const ge="https://image.tmdb.org/t/p/",ye="w500";class ve{getDataTrendMovies(t){return t.map((({poster_path:t,genre_ids:e,vote_average:i,title:s,id:r,release_date:o})=>{let a=ge+ye+t,c=Number.parseInt(o);const l=Me(e);return t||(a=n(pe)),o||(c="Unknown date"),{imgUrl:a,genres:l,rating:i.toFixed(1),name:s,id:r,year:c}}))}getDataSelectedMovie(t){const{poster_path:e,genres:n,vote_average:i,vote_count:s,popularity:r,title:o,original_title:a,overview:c,release_date:l}=t;return{imgUrl:ge+ye+e,name:o,vote:i.toFixed(1),votes:s,popularity:r,originalTitle:a,about:c,year:Number.parseInt(l)}}}var be=r("2sxQI");r("bTcpz");class we{start(){Ce.backdropSpinner.classList.remove("is-hidden")}stop(){Ce.backdropSpinner.classList.add("is-hidden")}}const xe={firstPage:document.querySelector(".js-pagination--firstPage"),minus2Page:document.querySelector(".js-pagination--minus2Page"),minus1Page:document.querySelector(".js-pagination--minus1Page"),activPage:document.querySelector(".js-pagination--activPage"),plus1Page:document.querySelector(".js-pagination--plus1Page"),plus2Page:document.querySelector(".js-pagination--plus2Page"),lastPage:document.querySelector(".js-pagination--lastPage"),minusQuery:document.querySelector(".js-btn__minusQuery"),plusQuery:document.querySelector(".js-btn__plusQuery"),containerPage:document.querySelector(".js-pagination__page"),plusTen:document.querySelector(".btn-increment-ten"),minusTen:document.querySelector(".btn-decrement-ten"),containerPagAll:document.querySelector(".js-pagination")};xe.minusQuery.addEventListener("click",(async function t(e){Ie-=1,Ie>Ee&&(Ie=1);const n=e.target,i=new Le,s=new ve,r=Ce.searchForm.searchQuery.value.trim();if(i.query=r,i.page=Ie,0===Ie)return Ie=1,void n.blur();ke.start();try{if(""!==r)return void await i.getSearchMovies().then((i=>{Ee=i.total_pages,Ie>i.total_pages&&(Ie=2,t(e));const r=s.getDataTrendMovies(i.results),o=(0,me.createMarkupFilmsList)(r);Ce.moviesList.innerHTML=o,n.blur(),Te(i)})).catch((t=>{Notify.failure(t)})).finally((()=>{ke.stop()}));await i.getTrendMovie().then((i=>{Ee=i.total_pages,Ie>i.total_pages&&(Ie=1,t(e));const r=s.getDataTrendMovies(i.results),o=(0,me.createMarkupFilmsList)(r);Ce.moviesList.innerHTML=o,n.blur(),Te(i)})).catch((t=>{Notify.failure(t)})).finally((()=>{ke.stop()}))}catch(t){Notify.failure(t)}})),xe.plusQuery.addEventListener("click",(async function t(e){Ie+=1,Ie>Ee&&(Ie=1);const n=e.target,i=new Le,s=new ve,r=Ce.searchForm.searchQuery.value.trim();i.query=r,i.page=Ie,ke.start();try{if(""!==r)return void await i.getSearchMovies().then((i=>{n.blur(),Te(i),Ie>=i.total_pages&&xe.lastPage.classList.add("btn-active");const r=s.getDataTrendMovies(i.results),o=(0,me.createMarkupFilmsList)(r);Ce.moviesList.innerHTML=o,xe.minusQuery.disabled=!1,Ee=i.total_pages,Ie>i.total_pages&&(Ie=1,t(e))})).catch((t=>{Notify.failure(t)})).finally((()=>{ke.stop()}));await i.getTrendMovie().then((i=>{n.blur(),Ee=i.total_pages,Ie>i.total_pages&&(Ie=1,t(e)),Ie>=i.total_pages&&xe.lastPage.classList.add("btn-active");const r=s.getDataTrendMovies(i.results),o=(0,me.createMarkupFilmsList)(r);Ce.moviesList.innerHTML=o,Te(i)})).catch((t=>{Notify.failure(t)})).finally((()=>{ke.stop()}))}catch(t){Notify.failure(t)}})),xe.containerPage.addEventListener("click",_e),xe.minusTen.addEventListener("click",(async function(t){Ie-=10;const e=t.target;Ie<0&&(Ie=1);const n=new Le,i=new ve,s=Ce.searchForm.searchQuery.value.trim();n.query=s,n.page=Ie,ke.start();try{if(""!==s)return void await n.getSearchMovies().then((t=>{Ee=t.total_pages;const n=i.getDataTrendMovies(t.results),s=(0,me.createMarkupFilmsList)(n);Ce.moviesList.innerHTML=s,e.blur(),Te(t)})).catch((t=>{Notify.failure(t)})).finally((()=>{ke.stop()}));await n.getTrendMovie().then((t=>{if(Ee=t.total_pages,Ie<=0)return;const n=i.getDataTrendMovies(t.results),s=(0,me.createMarkupFilmsList)(n);Ce.moviesList.innerHTML=s,e.blur(),Te(t)})).catch((t=>{Notify.failure(t)})).finally((()=>{ke.stop()}))}catch(t){Notify.failure(t)}})),xe.plusTen.addEventListener("click",(async function(t){Ie+=10;const e=t.target;Ie>Ee&&(Ie=Ee);const n=Ce.searchForm.searchQuery.value.trim();movieAPI.query=n,movieAPI.page=Ie,ke.start();try{if(""!==n)return void await movieAPI.getSearchMovies().then((t=>{if(Ee=t.total_pages,Ie>t.total_pages)return;e.blur(),Te(t);const n=dataService.getDataTrendMovies(t.results),i=(0,me.createMarkupFilmsList)(n);Ce.moviesList.innerHTML=i,xe.minusQuery.disabled=!1})).catch((t=>{Notify.failure(t)})).finally((()=>{ke.stop()}));await movieAPI.getTrendMovie().then((t=>{Ee=t.total_pages,t.total_pages||xe.containerPage.classList.add("visually-hidden");const n=dataService.getDataTrendMovies(t.results),i=(0,me.createMarkupFilmsList)(n);Ce.moviesList.innerHTML=i,e.blur(),Te(t)})).catch((t=>{Notify.failure(t)})).finally((()=>{ke.stop()}))}catch(t){Notify.failure(t)}})),xe.lastPage.addEventListener("click",_e),xe.firstPage.addEventListener("click",_e);const ke=new we;function Te(t){switch((0,be.scrollTop)(),t.page){case 1:Ie=1,xe.firstPage.textContent=1,xe.plus2Page.classList.remove("btn-active"),xe.plus1Page.classList.remove("btn-active"),xe.minus1Page.classList.remove("btn-active"),xe.minus2Page.classList.remove("btn-active"),xe.firstPage.classList.remove("btn-active"),xe.lastPage.classList.remove("btn-active"),xe.activPage.classList.remove("btn-active"),xe.firstPage.classList.add("btn-active"),xe.lastPage.textContent=t.total_pages,xe.minus2Page.textContent=t.page+1,xe.minus1Page.textContent=t.page+2,xe.activPage.textContent=t.page+3,xe.plus1Page.textContent=t.page+4,xe.plus2Page.textContent=t.page+5;break;case 2:xe.firstPage.textContent=1,xe.firstPage.classList.remove("btn-active"),xe.plus2Page.classList.remove("btn-active"),xe.plus1Page.classList.remove("btn-active"),xe.minus1Page.classList.remove("btn-active"),xe.firstPage.classList.remove("btn-active"),xe.lastPage.classList.remove("btn-active"),xe.activPage.classList.remove("btn-active"),xe.lastPage.textContent=t.total_pages,xe.minus2Page.textContent=t.page,xe.minus2Page.classList.add("btn-active"),xe.minus1Page.textContent=t.page+1,xe.activPage.textContent=t.page+2,xe.plus1Page.textContent=t.page+3,xe.plus2Page.textContent=t.page+4;break;case 3:xe.firstPage.textContent=1,xe.minus2Page.classList.remove("btn-active"),xe.plus2Page.classList.remove("btn-active"),xe.plus1Page.classList.remove("btn-active"),xe.firstPage.classList.remove("btn-active"),xe.lastPage.classList.remove("btn-active"),xe.activPage.classList.remove("btn-active"),xe.lastPage.textContent=t.total_pages,xe.minus2Page.textContent=t.page-1,xe.minus1Page.classList.add("btn-active"),xe.minus1Page.textContent=t.page,xe.activPage.textContent=t.page+1,xe.plus1Page.textContent=t.page+2,xe.plus2Page.textContent=t.page+3;break;case 4:xe.firstPage.textContent=1,xe.minus1Page.classList.remove("btn-active"),xe.plus2Page.classList.remove("btn-active"),xe.plus1Page.classList.remove("btn-active"),xe.minus2Page.classList.remove("btn-active"),xe.firstPage.classList.remove("btn-active"),xe.activPage.classList.remove("btn-active"),xe.lastPage.textContent=t.total_pages,xe.minus2Page.textContent=t.page-2,xe.activPage.classList.add("btn-active"),xe.minus1Page.textContent=t.page-1,xe.activPage.textContent=t.page,xe.plus1Page.textContent=t.page+1,xe.plus2Page.textContent=t.page+2;break;case 5:xe.firstPage.textContent=1,xe.activPage.classList.remove("btn-active"),xe.plus2Page.classList.remove("btn-active"),xe.minus1Page.classList.remove("btn-active"),xe.minus2Page.classList.remove("btn-active"),xe.firstPage.classList.remove("btn-active"),xe.lastPage.textContent=t.total_pages,xe.minus2Page.textContent=t.page-3,xe.plus1Page.classList.add("btn-active"),xe.minus1Page.textContent=t.page-2,xe.activPage.textContent=t.page-1,xe.plus1Page.textContent=t.page,xe.plus2Page.textContent=t.page+1;break;case 6:xe.firstPage.textContent=1,xe.plus1Page.classList.remove("btn-active"),xe.minus1Page.classList.remove("btn-active"),xe.minus2Page.classList.remove("btn-active"),xe.firstPage.classList.remove("btn-active"),xe.activPage.classList.remove("btn-active"),xe.lastPage.textContent=t.total_pages,xe.minus2Page.textContent=t.page-4,xe.plus2Page.classList.add("btn-active"),xe.minus1Page.textContent=t.page-3,xe.activPage.textContent=t.page-2,xe.plus1Page.textContent=t.page-1,xe.plus2Page.textContent=t.page;break;case t.total_pages-2:xe.firstPage.textContent=1,xe.plus2Page.classList.remove("btn-active"),xe.minus1Page.classList.remove("btn-active"),xe.minus2Page.classList.remove("btn-active"),xe.lastPage.classList.remove("btn-active"),xe.firstPage.classList.remove("btn-active"),xe.activPage.classList.remove("btn-active"),xe.lastPage.textContent=t.total_pages,xe.minus2Page.textContent=t.page-3,xe.plus1Page.classList.add("btn-active"),xe.minus1Page.textContent=t.page-2,xe.activPage.textContent=t.page-1,xe.plus1Page.textContent=t.page,xe.plus2Page.textContent=t.page+1;break;case t.total_pages-1:xe.firstPage.textContent=1,xe.plus1Page.classList.remove("btn-active"),xe.minus1Page.classList.remove("btn-active"),xe.minus2Page.classList.remove("btn-active"),xe.lastPage.classList.remove("btn-active"),xe.firstPage.classList.remove("btn-active"),xe.activPage.classList.remove("btn-active"),xe.lastPage.textContent=t.total_pages,xe.minus2Page.textContent=t.page-4,xe.plus2Page.classList.add("btn-active"),xe.minus1Page.textContent=t.page-3,xe.activPage.textContent=t.page-2,xe.plus1Page.textContent=t.page-1,xe.plus2Page.textContent=t.page;break;case t.total_pages:xe.firstPage.textContent=1,xe.plus2Page.classList.remove("btn-active"),xe.plus1Page.classList.remove("btn-active"),xe.minus1Page.classList.remove("btn-active"),xe.minus2Page.classList.remove("btn-active"),xe.firstPage.classList.remove("btn-active"),xe.activPage.classList.remove("btn-active"),xe.lastPage.textContent=t.total_pages,xe.minus2Page.textContent=t.page-5,xe.lastPage.classList.add("btn-active"),xe.minus1Page.textContent=t.page-4,xe.activPage.textContent=t.page-3,xe.plus1Page.textContent=t.page-2,xe.plus2Page.textContent=t.page-1;break;default:xe.firstPage.textContent=1,xe.plus2Page.classList.remove("btn-active"),xe.plus1Page.classList.remove("btn-active"),xe.minus1Page.classList.remove("btn-active"),xe.minus2Page.classList.remove("btn-active"),xe.firstPage.classList.remove("btn-active"),xe.lastPage.classList.remove("btn-active"),xe.activPage.classList.add("btn-active"),xe.plusQuery.classList.remove("btn-active"),xe.minusQuery.classList.remove("btn-active"),xe.lastPage.textContent=t.total_pages,xe.minus2Page.textContent=t.page-2,xe.minus1Page.textContent=t.page-1,xe.activPage.textContent=t.page,xe.plus1Page.textContent=t.page+1,xe.plus2Page.textContent=t.page+2}switch(t.total_pages){case 1:xe.plus2Page.classList.add("visually-hidden"),xe.plus1Page.classList.add("visually-hidden"),xe.minus1Page.classList.add("visually-hidden"),xe.minus2Page.classList.add("visually-hidden"),xe.lastPage.classList.add("visually-hidden"),xe.activPage.classList.add("visually-hidden"),xe.minusTen.classList.add("visually-hidden"),xe.plusTen.classList.add("visually-hidden"),xe.minusQuery.classList.add("visually-hidden"),xe.plusQuery.classList.add("visually-hidden");break;case 2:xe.plus2Page.classList.add("visually-hidden"),xe.plus1Page.classList.add("visually-hidden"),xe.minus1Page.classList.add("visually-hidden"),xe.minus2Page.classList.remove("visually-hidden"),xe.lastPage.classList.add("visually-hidden"),xe.activPage.classList.add("visually-hidden"),xe.minusTen.classList.add("visually-hidden"),xe.plusTen.classList.add("visually-hidden"),xe.minusQuery.classList.add("visually-hidden"),xe.plusQuery.classList.add("visually-hidden");break;case 3:xe.plus2Page.classList.add("visually-hidden"),xe.plus1Page.classList.add("visually-hidden"),xe.minus1Page.classList.remove("visually-hidden"),xe.minus2Page.classList.remove("visually-hidden"),xe.lastPage.classList.add("visually-hidden"),xe.activPage.classList.add("visually-hidden"),xe.minusTen.classList.add("visually-hidden"),xe.plusTen.classList.add("visually-hidden"),xe.minusQuery.classList.add("visually-hidden"),xe.plusQuery.classList.add("visually-hidden");break;case 4:xe.plus2Page.classList.add("visually-hidden"),xe.plus1Page.classList.add("visually-hidden"),xe.minus1Page.classList.remove("visually-hidden"),xe.minus2Page.classList.remove("visually-hidden"),xe.lastPage.classList.remove("visually-hidden"),xe.activPage.classList.add("visually-hidden"),xe.minusTen.classList.add("visually-hidden"),xe.plusTen.classList.add("visually-hidden"),xe.minusQuery.classList.remove("visually-hidden"),xe.plusQuery.classList.remove("visually-hidden");break;case 5:xe.plus2Page.classList.add("visually-hidden"),xe.plus1Page.classList.add("visually-hidden"),xe.minus1Page.classList.remove("visually-hidden"),xe.minus2Page.classList.remove("visually-hidden"),xe.lastPage.classList.remove("visually-hidden"),xe.activPage.classList.remove("visually-hidden"),xe.minusTen.classList.add("visually-hidden"),xe.plusTen.classList.add("visually-hidden"),xe.minusQuery.classList.remove("visually-hidden"),xe.plusQuery.classList.remove("visually-hidden");break;case 6:xe.plus2Page.classList.add("visually-hidden"),xe.plus1Page.classList.remove("visually-hidden"),xe.minus1Page.classList.remove("visually-hidden"),xe.minus2Page.classList.remove("visually-hidden"),xe.lastPage.classList.remove("visually-hidden"),xe.activPage.classList.remove("visually-hidden"),xe.minusTen.classList.add("visually-hidden"),xe.plusTen.classList.add("visually-hidden"),xe.minusQuery.classList.remove("visually-hidden"),xe.plusQuery.classList.remove("visually-hidden");break;default:xe.plus2Page.classList.remove("visually-hidden"),xe.plus1Page.classList.remove("visually-hidden"),xe.minus1Page.classList.remove("visually-hidden"),xe.minus2Page.classList.remove("visually-hidden"),xe.lastPage.classList.remove("visually-hidden"),xe.activPage.classList.remove("visually-hidden"),xe.minusQuery.classList.remove("visually-hidden"),xe.plusQuery.classList.remove("visually-hidden"),xe.minusTen.classList.remove("visually-hidden"),xe.plusTen.classList.remove("visually-hidden")}}let Ie=1,Ee=100;async function _e(t){const e=t.target;if(Ie=Number(e.textContent),ke.start(),"BUTTON"===e.nodeName)try{const t=new Le,n=new ve,i=Ce.searchForm.searchQuery.value.trim();if(t.query=i,t.page=Ie,""!==i)return void await t.getSearchMovies().then((t=>{Ee=t.total_pages;const i=n.getDataTrendMovies(t.results),s=(0,me.createMarkupFilmsList)(i);Ce.moviesList.innerHTML=s,e.blur(),Te(t)})).catch((t=>{Notify.failure(t)})).finally((()=>{ke.stop()}));await t.getTrendMovie().then((t=>{Ee=t.total_pages;const i=n.getDataTrendMovies(t.results),s=(0,me.createMarkupFilmsList)(i);Ce.moviesList.innerHTML=s,e.blur(),Te(t)})).catch((t=>{Notify.failure(t)})).finally((()=>{ke.stop()}))}catch(t){Notify.failure(t)}}const Ce={moviesList:document.querySelector(".js-films-list"),firstPage:document.querySelector(".js-pagination--firstPage"),minus2Page:document.querySelector(".js-pagination--minus2Page"),minus1Page:document.querySelector(".js-pagination--minus1Page"),activPage:document.querySelector(".js-pagination--activPage"),plus1Page:document.querySelector(".js-pagination--plus1Page"),plus2Page:document.querySelector(".js-pagination--plus2Page"),lastPage:document.querySelector(".js-pagination--lastPage"),minusQuery:document.querySelector(".js-btn__minusQuery"),plusQuery:document.querySelector(".js-btn__plusQuery"),containerPage:document.querySelector(".js-pagination__page"),plusTen:document.querySelector(".btn-increment-ten"),minusTen:document.querySelector(".btn-decrement-ten"),containerPagAll:document.querySelector(".js-pagination"),libraryLink:document.querySelector("#library-link"),backdrop:document.querySelector(".backdrop"),modalMovies:document.querySelector("[data-modal]"),openModalCard:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),trailerBtn:document.querySelector(".trailer-btn"),openTeamModalBtn:document.querySelector("[data-modal-open-team]"),closeTeamModalBtn:document.querySelector("[data-modal-close-team]"),backdropFooter:document.querySelector(".backdrop-footer"),openRegistrModalBtn:document.querySelector("[data-modal-open-registr]"),closeRegistrModalBtn:document.querySelector("[data-modal-close-registr]"),backdropRegistr:document.querySelector(".backdrop-registr"),searchForm:document.querySelector(".header__form"),searchErrorImg:document.querySelector(".films__error-img"),noMoviesNotification:document.querySelector(".films__no-movies-notification"),notCorrectNotification:document.querySelector(".films__not-correct-notification"),backdropSpinner:document.querySelector(".backdrop-spin"),spinner:document.querySelector(".js-spinner"),signInButtonElement:document.querySelector(".js-sign-in"),signOutButtonElement:document.querySelector(".js-sign-out"),userPicElement:document.getElementById("user-pic"),userNameElement:document.getElementById("user-name"),userInfoElement:document.getElementById("user-container"),signInWithEmail:document.querySelector("[data-modal-sign-in-email]"),signInWithGoogle:document.querySelector("[data-modal-sign-in-google]")};var Se=new WeakMap,Ne=new WeakMap,Ae=new WeakMap,Re=new WeakMap;class Le{async getTrendMovie(){try{const{data:t}=await de.default.get(`${re(this,Se)}/trending/movie/day?api_key=${re(this,Ne)}&page=${re(this,Re)}`);return Ce.containerPagAll.classList.remove("visually-hidden"),t}catch(t){Ce.containerPagAll.classList.add("visually-hidden"),console.error(t)}}async getGenres(){try{const{data:t}=await de.default.get(`${re(this,Se)}/genre/movie/list?api_key=${re(this,Ne)}&language=en-US`);return t.genres}catch(t){console.error(t)}}async getSearchMovies(){try{return(await de.default.get(`${re(this,Se)}/search/movie?api_key=${re(this,Ne)}&query=${re(this,Ae)}&page=${re(this,Re)}`)).data}catch(t){Ce.containerPage.classList.add("visually-hidden"),fe.Notify.failure(t)}}resetPage(){le(this,Re,1)}get query(){return re(this,Ae)}set query(t){le(this,Ae,t)}get page(){return re(this,Re)}set page(t){le(this,Re,t)}constructor(){ae(this,Se,{writable:!0,value:"https://api.themoviedb.org/3"}),ae(this,Ne,{writable:!0,value:"d03712107dcdd723f1173c5ee2c0d8c1"}),ae(this,Ae,{writable:!0,value:""}),ae(this,Re,{writable:!0,value:1})}}me=r("3huUq");const De=new ve,Pe=new Le,Oe=new we;function Me(t){const e=[];return t.find((t=>{(function(){try{const t=localStorage.getItem("GENRES");return null===t?[]:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}})().forEach((n=>{n.id===t&&e.push(n.name)}))})),e}me=r("3huUq");const Fe=new we,Ue=new ve,Ve=new Le;Ce.searchForm.addEventListener("submit",(function(t){t.preventDefault();const e=t.currentTarget.elements.searchQuery.value.trim();if(Ce.notCorrectNotification.classList.remove("films__not-correct-notification-show"),Ce.noMoviesNotification.classList.remove("films__no-movies-notification-show"),Ce.noMoviesNotification.classList.add("visually-hidden"),!e)return void Ce.notCorrectNotification.classList.add("films__not-correct-notification-show");Ce.moviesList.innerHTML="",Ve.query=e,Fe.start(),Ve.getSearchMovies().then((t=>{if(Ce.notCorrectNotification.classList.remove("films__not-correct-notification-show"),Ce.noMoviesNotification.classList.remove("films__no-movies-notification-show"),Ce.searchErrorImg.classList.add("visually-hidden"),0===t.results.length)return Ce.searchErrorImg.classList.remove("visually-hidden"),Ce.noMoviesNotification.classList.add("films__no-movies-notification-show"),Ce.noMoviesNotification.classList.remove("visually-hidden"),void Ce.containerPagAll.classList.add("visually-hidden");Ce.containerPagAll.classList.remove("visually-hidden"),Te(t);const e=Ue.getDataTrendMovies(t.results),n=(0,me.createMarkupFilmsList)(e);Ce.moviesList.innerHTML=n})).catch((t=>fe.Notify.failure(t))).finally((()=>{Fe.stop()}))})),r("bTcpz"),r("6HA5D");var je=r("bTcpz");function Be(){Ce.backdropRegistr.classList.add("is-hidden"),window.removeEventListener("keydown",ze),window.onscroll=function(){window.scrollTo()}}function ze(t){"Escape"===t.code&&Be()}Ce.openRegistrModalBtn.addEventListener("click",(function(){Ce.backdropRegistr.classList.remove("is-hidden"),window.addEventListener("keydown",ze),(0,je.bodyScrollOff)()})),Ce.closeRegistrModalBtn.addEventListener("click",Be),Ce.backdropRegistr.addEventListener("click",(function(t){t.currentTarget===t.target&&Be()})),r("2sxQI");function qe(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]])}return n}Object.create;Object.create;function We(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const He=We,$e=new U("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ke=new at("@firebase/auth");function Ge(t,...e){Ke.logLevel<=et.ERROR&&Ke.error(`Auth (${Vt}): ${t}`,...e)}
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
 */function Qe(t,...e){throw Ze(t,...e)}function Xe(t,...e){return Ze(t,...e)}function Je(t,e,n){const i=Object.assign(Object.assign({},He()),{[e]:n});return new U("auth","Firebase",i).create(e,{appName:t.name})}function Ye(t,e,n){if(!(e instanceof n))throw n.name!==e.constructor.name&&Qe(t,"argument-error"),Je(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ze(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return $e.create(t,...e)}function tn(t,e,...n){if(!t)throw Ze(e,...n)}function en(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ge(e),new Error(e)}function nn(t,e){t||en(e)}
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
 */const sn=new Map;function rn(t){nn(t instanceof Function,"Expected a class definition");let e=sn.get(t);return e?(nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sn.set(t,e),e)}
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
function on(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function an(){return"http:"===cn()||"https:"===cn()}function cn(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
 */function ln(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(an()||P()||"connection"in navigator))||navigator.onLine}
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
class un{get(){return ln()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(t,e){this.shortDelay=t,this.longDelay=e,nn(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(D())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
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
 */function hn(t,e){nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
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
 */class dn{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const fn={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},pn=new un(3e4,6e4);
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
 */function mn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gn(t,e,n,i,s={}){return yn(t,s,(async()=>{let s={},r={};i&&("GET"===e?r=i:s={body:JSON.stringify(i)});const o=q(Object.assign({key:t.config.apiKey},r)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),dn.fetch()(bn(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))}))}async function yn(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},fn),e);try{const e=new wn(t),s=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw xn(t,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const e=s.ok?r.errorMessage:r.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw xn(t,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw xn(t,"email-already-in-use",r);if("USER_DISABLED"===n)throw xn(t,"user-disabled",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Je(t,a,o);Qe(t,a)}}catch(e){if(e instanceof F)throw e;Qe(t,"network-request-failed")}}async function vn(t,e,n,i,s={}){const r=await gn(t,e,n,i,s);return"mfaPendingCredential"in r&&Qe(t,"multi-factor-auth-required",{_serverResponse:r}),r}function bn(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?hn(t.config,s):`${t.config.apiScheme}://${s}`}class wn{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(Xe(this.auth,"network-request-failed"))),pn.get())}))}}function xn(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Xe(t,e,i);return s.customData._tokenResponse=n,s}
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
function kn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
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
 */function Tn(t){return 1e3*Number(t)}function In(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return Ge("JWT malformed, contained fewer than 3 sections"),null;try{const t=I(n);return t?JSON.parse(t):(Ge("Failed to decode base64 JWT payload"),null)}catch(t){return Ge("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
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
async function En(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof F&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class _n{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class Cn{_initializeTime(){this.lastSignInTime=kn(this.lastLoginAt),this.creationTime=kn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}}
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
 */async function Sn(t){var e;const n=t.auth,i=await t.getIdToken(),s=await En(t,async function(t,e){return gn(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));tn(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=(null===(e=r.providerUserInfo)||void 0===e?void 0:e.length)?r.providerUserInfo.map((t=>{var{providerId:e}=t,n=qe(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,l=o,[...c.filter((t=>!l.some((e=>e.providerId===t.providerId)))),...l]);var c,l;const u=t.isAnonymous,h=!(t.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Cn(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
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
class Nn{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){tn(t.idToken,"internal-error"),tn(void 0!==t.idToken,"internal-error"),tn(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=In(t);return tn(e,"internal-error"),tn(void 0!==e.exp,"internal-error"),tn(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return tn(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:s}=await
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
async function(t,e){const n=await yn(t,{},(async()=>{const n=q({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,r=bn(t,i,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",dn.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:s}=e,r=new Nn;return n&&(tn("string"==typeof n,"internal-error",{appName:t}),r.refreshToken=n),i&&(tn("string"==typeof i,"internal-error",{appName:t}),r.accessToken=i),s&&(tn("number"==typeof s,"internal-error",{appName:t}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Nn,this.toJSON())}_performRefresh(){return en("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function An(t,e){tn("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Rn{async getIdToken(t){const e=await En(this,this.stsTokenManager.getToken(this.auth,t));return tn(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=Q(t),i=await n.getIdToken(e),s=In(i);tn(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:kn(Tn(s.auth_time)),issuedAtTime:kn(Tn(s.iat)),expirationTime:kn(Tn(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=Q(t);await Sn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(tn(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Rn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){tn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Sn(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await En(this,async function(t,e){return gn(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,s,r,o,a,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(s=e.phoneNumber)&&void 0!==s?s:void 0,f=null!==(r=e.photoURL)&&void 0!==r?r:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:x,stsTokenManager:k}=e;tn(v&&k,t,"internal-error");const T=Nn.fromJSON(this.name,k);tn("string"==typeof v,t,"internal-error"),An(u,t.name),An(h,t.name),tn("boolean"==typeof b,t,"internal-error"),tn("boolean"==typeof w,t,"internal-error"),An(d,t.name),An(f,t.name),An(p,t.name),An(m,t.name),An(g,t.name),An(y,t.name);const I=new Rn({uid:v,auth:t,email:h,emailVerified:b,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(I.providerData=x.map((t=>Object.assign({},t)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(t,e,n=!1){const i=new Nn;i.updateFromServerResponse(e);const s=new Rn({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await Sn(s),s}constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,s=qe(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _n(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Cn(s.createdAt||void 0,s.lastLoginAt||void 0)}}
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
 */class Ln{async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}constructor(){this.type="NONE",this.storage={}}}Ln.type="NONE";const Dn=Ln;
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
 */function Pn(t,e,n){return`firebase:${t}:${e}:${n}`}class On{setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Rn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new On(rn(Dn),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let s=i[0]||rn(Dn);const r=Pn(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(r);if(e){const i=Rn._fromJSON(t,e);n!==s&&(o=i),s=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==s)try{await t._remove(r)}catch(t){}}))),new On(s,t,n)):new On(s,t,n)}constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Pn(this.userKey,i.apiKey,s),this.fullPersistenceKey=Pn("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function Mn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zn(e))return"Blackberry";if(qn(e))return"Webos";if(Un(e))return"Safari";if((e.includes("chrome/")||Vn(e))&&!e.includes("edge/"))return"Chrome";if(Bn(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Fn(t=D()){return/firefox\//i.test(t)}function Un(t=D()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vn(t=D()){return/crios\//i.test(t)}function jn(t=D()){return/iemobile/i.test(t)}function Bn(t=D()){return/android/i.test(t)}function zn(t=D()){return/blackberry/i.test(t)}function qn(t=D()){return/webos/i.test(t)}function Wn(t=D()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Hn(){return O()&&10===document.documentMode}function $n(t=D()){return Wn(t)||Bn(t)||qn(t)||zn(t)||/windows phone/i.test(t)||jn(t)}
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
function Kn(t,e=[]){let n;switch(t){case"Browser":n=Mn(D());break;case"Worker":n=`${Mn(D())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vt}/${i}`}
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
 */class Gn{pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{n(t(e))}catch(t){i(t)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}constructor(t){this.auth=t,this.queue=[]}}
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
 */class Qn{_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=rn(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await On.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return tn(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Sn(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Q(t):null;return e&&tn(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&tn(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(rn(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new U("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&rn(t)||this._popupRedirectResolver;tn(e,this,"argument-error"),this.redirectPersistenceManager=await On.create(this,[rn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const s="function"==typeof e?e:e.next.bind(e),r=this._isInitialized?Promise.resolve():this._initializationPromise;return tn(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return tn(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Kn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jn(this),this.idTokenSubscription=new Jn(this),this.beforeStateQueue=new Gn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$e,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}}function Xn(t){return Q(t)}class Jn{get next(){return tn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(t){this.auth=t,this.observer=null,this.addObserver=$((t=>this.observer=t))}}function Yn(t,e,n){const i=Xn(t);tn(i._canInitEmulator,i,"emulator-config-failed"),tn(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),r=Zn(e),{host:o,port:a}=function(t){const e=Zn(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const t=s[1];return{host:t,port:ti(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:ti(e)}}}(e),c=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
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
 */()}function Zn(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ti(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class ei{toJSON(){return en("not implemented")}_getIdTokenResponse(t){return en("not implemented")}_linkToIdToken(t,e){return en("not implemented")}_getReauthenticationResolver(t){return en("not implemented")}constructor(t,e){this.providerId=t,this.signInMethod=e}}
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
 */async function ni(t,e){return gn(t,"POST","/v1/accounts:update",e)}
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
class ii extends ei{static _fromEmailAndPassword(t,e){return new ii(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new ii(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
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
return async function(t,e){return vn(t,"POST","/v1/accounts:signInWithPassword",mn(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(t,e){return vn(t,"POST","/v1/accounts:signInWithEmailLink",mn(t,e))}(t,{email:this._email,oobCode:this._password});default:Qe(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return ni(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return vn(t,"POST","/v1/accounts:signInWithEmailLink",mn(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:Qe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}}
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
 */async function si(t,e){return vn(t,"POST","/v1/accounts:signInWithIdp",mn(t,e))}
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
 */class ri extends ei{static _fromParams(t){const e=new ri(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Qe("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,s=qe(e,["providerId","signInMethod"]);if(!n||!i)return null;const r=new ri(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(t){return si(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,si(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,si(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=q(e)}return t}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const oi={USER_NOT_FOUND:"user-not-found"};
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
class ai extends ei{static _fromVerification(t,e){return new ai({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new ai({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return vn(t,"POST","/v1/accounts:signInWithPhoneNumber",mn(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await vn(t,"POST","/v1/accounts:signInWithPhoneNumber",mn(t,e));if(n.temporaryProof)throw xn(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return vn(t,"POST","/v1/accounts:signInWithPhoneNumber",mn(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),oi)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:s}=t;return n||e||i||s?new ai({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}constructor(t){super("phone","phone"),this.params=t}}
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
 */class ci{static parseLink(t){const e=function(t){const e=W(H(t)).link,n=e?W(H(e)).deep_link_id:null,i=W(H(t)).deep_link_id;return(i?W(H(i)).link:null)||i||n||e||t}(t);try{return new ci(e)}catch(t){return null}}constructor(t){var e,n,i,s,r,o;const a=W(H(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);tn(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
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
class li{static credential(t,e){return ii._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ci.parseLink(e);return tn(n,"argument-error"),ii._fromEmailAndCode(t,n.code,n.tenantId)}constructor(){this.providerId=li.PROVIDER_ID}}li.PROVIDER_ID="password",li.EMAIL_PASSWORD_SIGN_IN_METHOD="password",li.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class ui{setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class hi extends ui{addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class di extends hi{static credential(t){return ri._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return di.credentialFromTaggedObject(t)}static credentialFromError(t){return di.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return di.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("facebook.com")}}di.FACEBOOK_SIGN_IN_METHOD="facebook.com",di.PROVIDER_ID="facebook.com";
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
class fi extends hi{static credential(t,e){return ri._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return fi.credentialFromTaggedObject(t)}static credentialFromError(t){return fi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return fi.credential(e,n)}catch(t){return null}}constructor(){super("google.com"),this.addScope("profile")}}fi.GOOGLE_SIGN_IN_METHOD="google.com",fi.PROVIDER_ID="google.com";
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
class pi extends hi{static credential(t){return ri._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return pi.credentialFromTaggedObject(t)}static credentialFromError(t){return pi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return pi.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("github.com")}}pi.GITHUB_SIGN_IN_METHOD="github.com",pi.PROVIDER_ID="github.com";
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
class mi extends hi{static credential(t,e){return ri._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return mi.credentialFromTaggedObject(t)}static credentialFromError(t){return mi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return mi.credential(e,n)}catch(t){return null}}constructor(){super("twitter.com")}}mi.TWITTER_SIGN_IN_METHOD="twitter.com",mi.PROVIDER_ID="twitter.com";
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
class gi{static async _fromIdTokenResponse(t,e,n,i=!1){const s=await Rn._fromIdTokenResponse(t,n,i),r=yi(n);return new gi({user:s,providerId:r,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=yi(n);return new gi({user:t,providerId:i,_tokenResponse:n,operationType:e})}constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}}function yi(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class vi extends F{static _fromErrorAndOperation(t,e,n,i){return new vi(t,e,n,i)}constructor(t,e,n,i){var s;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,vi.prototype),this.customData={appName:t.name,tenantId:null!==(s=t.tenantId)&&void 0!==s?s:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}}function bi(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw vi._fromErrorAndOperation(t,n,e,i);throw n}))}
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
 */async function wi(t,e,n=!1){const i=await En(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gi._forOperation(t,"link",i)}
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
async function xi(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await En(t,bi(i,s,e,t),n);tn(r.idToken,i,"internal-error");const o=In(r.idToken);tn(o,i,"internal-error");const{sub:a}=o;return tn(t.uid===a,i,"user-mismatch"),gi._forOperation(t,s,r)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&Qe(i,"user-mismatch"),t}}
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
 */async function ki(t,e,n=!1){const i="signIn",s=await bi(t,i,e),r=await gi._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}new WeakMap;const Ti="__sak";
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
 */class Ii{_isAvailable(){try{return this.storage?(this.storage.setItem(Ti,"1"),this.storage.removeItem(Ti),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(t,e){this.storageRetriever=t,this.type=e}}
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
 */class Ei extends Ii{forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},s=this.storage.getItem(n);Hn()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=D();return Un(t)||Wn(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=$n(),this._shouldAllowMigration=!0}}Ei.type="LOCAL";const _i=Ei;
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
 */class Ci extends Ii{_addListener(t,e){}_removeListener(t,e){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Ci.type="SESSION";const Si=Ci;
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
class Ni{static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Ni(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:s}=e.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async t=>t(e.origin,s))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function Ai(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
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
 */Ni.receivers=[];class Ri{removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const c=Ai("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(e.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}constructor(t){this.target=t,this.handlers=new Set}}
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
 */function Li(){return window}
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
function Di(){return void 0!==Li().WorkerGlobalScope&&"function"==typeof Li().importScripts}
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
const Pi="firebaseLocalStorageDb",Oi=1,Mi="firebaseLocalStorage",Fi="fbase_key";class Ui{toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}constructor(t){this.request=t}}function Vi(t,e){return t.transaction([Mi],e?"readwrite":"readonly").objectStore(Mi)}function ji(){const t=indexedDB.open(Pi,Oi);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Mi,{keyPath:Fi})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Mi)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(Pi);return new Ui(t).toPromise()}(),e(await ji()))}))}))}async function Bi(t,e,n){const i=Vi(t,!0).put({[Fi]:e,value:n});return new Ui(i).toPromise()}function zi(t,e){const n=Vi(t,!0).delete(e);return new Ui(n).toPromise()}class qi{async _openDb(){return this.db||(this.db=await ji()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Di()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ni._getInstance(Di()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Ri(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ji();return await Bi(t,Ti,"1"),await zi(t,Ti),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Bi(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=Vi(t,!1).get(e),i=await new Ui(n).toPromise();return void 0===i?null:i.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>zi(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Vi(t,!1).getAll();return new Ui(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:s}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}qi.type="LOCAL";const Wi=qi;
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
 */function Hi(t){return new Promise(((e,n)=>{const i=document.createElement("script");
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
var s,r;i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=Xe("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)}))}function $i(t){return`__${t}${Math.floor(1e6*Math.random())}`}
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
$i("rcb"),new un(3e4,6e4);
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
const Ki="recaptcha";async function Gi(t,e,n){var i;const s=await n.verify();try{let r;if(tn("string"==typeof s,t,"argument-error"),tn(n.type===Ki,t,"argument-error"),r="string"==typeof e?{phoneNumber:e}:e,"session"in r){const e=r.session;if("phoneNumber"in r){tn("enroll"===e.type,t,"internal-error");const n=await
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
function(t,e){return gn(t,"POST","/v2/accounts/mfaEnrollment:start",mn(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{tn("signin"===e.type,t,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;tn(n,t,"missing-multi-factor-info");const o=await function(t,e){return gn(t,"POST","/v2/accounts/mfaSignIn:start",mn(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return gn(t,"POST","/v1/accounts:sendVerificationCode",mn(t,e))}(t,{phoneNumber:r.phoneNumber,recaptchaToken:s});return e}}finally{n._reset()}}
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
class Qi{verifyPhoneNumber(t,e){return Gi(this.auth,t,Q(e))}static credential(t,e){return ai._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Qi.credentialFromTaggedObject(e)}static credentialFromError(t){return Qi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?ai._fromTokenResponse(e,n):null}constructor(t){this.providerId=Qi.PROVIDER_ID,this.auth=Xn(t)}}
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
function Xi(t,e){return e?rn(e):(tn(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */Qi.PROVIDER_ID="phone",Qi.PHONE_SIGN_IN_METHOD="phone";class Ji extends ei{_getIdTokenResponse(t){return si(t,this._buildIdpRequest())}_linkToIdToken(t,e){return si(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return si(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}constructor(t){super("custom","custom"),this.params=t}}function Yi(t){return ki(t.auth,new Ji(t),t.bypassAuthState)}function Zi(t){const{auth:e,user:n}=t;return tn(n,e,"internal-error"),xi(n,new Ji(t),t.bypassAuthState)}async function ts(t){const{auth:e,user:n}=t;return tn(n,e,"internal-error"),wi(n,new Ji(t),t.bypassAuthState)}
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
 */class es{execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=t;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Yi;case"linkViaPopup":case"linkViaRedirect":return ts;case"reauthViaPopup":case"reauthViaRedirect":return Zi;default:Qe(this.auth,"internal-error")}}resolve(t){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(t,e,n,i,s=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}}
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
 */const ns=new un(2e3,1e4);async function is(t,e,n){const i=Xn(t);Ye(t,e,ui);const s=Xi(i,n);return new ss(i,"signInViaPopup",e,s).executeNotNull()}class ss extends es{async executeNotNull(){const t=await this.execute();return tn(t,this.auth,"internal-error"),t}async onExecution(){nn(1===this.filter.length,"Popup operations only handle one event");const t=Ai();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ss.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,ns.get())};t()}constructor(t,e,n,i,s){super(t,e,i,s),this.provider=n,this.authWindow=null,this.pollId=null,ss.currentPopupAction&&ss.currentPopupAction.cancel(),ss.currentPopupAction=this}}ss.currentPopupAction=null;
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
const rs="pendingRedirect",os=new Map;class as extends es{async execute(){let t=os.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=us(e),i=ls(t);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}os.set(this.auth._key(),t)}return this.bypassAuthState||os.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}}function cs(t,e){os.set(t._key(),e)}function ls(t){return rn(t._redirectPersistence)}function us(t){return Pn(rs,t.config.apiKey,t.name)}
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
 */async function hs(t,e,n=!1){const i=Xn(t),s=Xi(i,e),r=new as(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}class ds{registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ps(t);default:return!1}}
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
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!ps(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(Xe(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(fs(t))}saveEventToCache(t){this.cachedEventUids.add(fs(t)),this.lastProcessedEventTime=Date.now()}constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function fs(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function ps({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
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
const ms=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gs=/^https?/;async function ys(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return gn(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(vs(t))return}catch(t){}Qe(t,"unauthorized-domain")}function vs(t){const e=on(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return""===s.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!gs.test(n))return!1;if(ms.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
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
 */const bs=new un(3e4,6e4);function ws(){const t=Li().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let xs=null;function ks(t){return xs=xs||function(t){return new Promise(((e,n)=>{var i,s,r;function o(){ws(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ws(),n(Xe(t,"network-request-failed"))},timeout:bs.get()})}if(null===(s=null===(i=Li().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)e(gapi.iframes.getContext());else{if(!(null===(r=Li().gapi)||void 0===r?void 0:r.load)){const e=$i("iframefcb");return Li()[e]=()=>{gapi.load?o():n(Xe(t,"network-request-failed"))},Hi(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw xs=null,t}))}(t),xs}
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
 */const Ts=new un(5e3,15e3),Is="__/auth/iframe",Es="emulator/auth/iframe",_s={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cs=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ss(t){const e=t.config;tn(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hn(e,Es):`https://${t.config.authDomain}/${Is}`,i={apiKey:e.apiKey,appName:t.name,v:Vt},s=Cs.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${q(i).slice(1)}`}
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
const Ns={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},As=500,Rs=600,Ls="_blank",Ds="http://localhost";class Ps{close(){if(this.window)try{this.window.close()}catch(t){}}constructor(t){this.window=t,this.associatedEvent=null}}function Os(t,e,n,i=As,s=Rs){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ns),{width:i.toString(),height:s.toString(),top:r,left:o}),l=D().toLowerCase();n&&(a=Vn(l)?Ls:n),Fn(l)&&(e=e||Ds,c.scrollbars="yes");const u=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=D()){var e;return Wn(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(l)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(e||"",a),new Ps(null);const h=window.open(e||"",a,u);tn(h,t,"popup-blocked");try{h.focus()}catch(t){}return new Ps(h)}const Ms="__/auth/handler",Fs="emulator/auth/handler";function Us(t,e,n,i,s,r){tn(t.config.authDomain,t,"auth-domain-config-required"),tn(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Vt,eventId:s};if(e instanceof ui){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",j(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(r||{}))o[t]=e}if(e instanceof hi){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){return t.emulator?hn(t,Fs):`https://${t.authDomain}/${Ms}`}
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
 */(t)}?${q(a).slice(1)}`}const Vs="webStorageSupport";const js=class{async _openPopup(t,e,n,i){var s;nn(null===(s=this.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return Os(t,Us(t,e,n,on(),i),Ai())}async _openRedirect(t,e,n,i){var s;return await this._originValidation(t),s=Us(t,e,n,on(),i),Li().location.href=s,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(nn(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await ks(t),n=Li().gapi;return tn(n,t,"internal-error"),e.open({where:document.body,url:Ss(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_s,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const s=Xe(t,"network-request-failed"),r=Li().setTimeout((()=>{i(s)}),Ts.get());function o(){Li().clearTimeout(r),n(e)}e.ping(o).then(o,(()=>{i(s)}))}))))}(t),n=new ds(t);return e.register("authEvent",(e=>{tn(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Vs,{type:Vs},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[Vs];void 0!==s&&e(!!s),Qe(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=ys(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return $n()||Un()||Wn()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Si,this._completeRedirectFn=hs,this._overrideRedirectResult=cs}};var Bs="@firebase/auth",zs="0.21.3";
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
class qs{getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){tn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(t){this.auth=t,this.internalListeners=new Map}}
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
const Ws=A("authIdTokenMaxAge")||300;let Hs=null;const $s=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Ws)return;const s=null==n?void 0:n.token;Hs!==s&&(Hs=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ks(t=Bt()){const e=Mt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=Mt(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(B(n.getOptions(),null!=e?e:{}))return t;Qe(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:js,persistence:[Wi,_i,Si]}),i=A("authTokenSyncURL");if(i){const t=$s(i);!function(t,e,n){Q(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,i){Q(t).onIdTokenChanged(e,n,i)}(n,(e=>t(e)))}const s=C("auth");return s&&Yn(n,`http://${s}`),n}var Gs;Gs="Browser",Ot(new X("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:r}=n.options;return((t,n)=>{tn(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),tn(!(null==r?void 0:r.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:r,clientPlatform:Gs,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kn(Gs)},o=new Qn(t,n,i);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(rn);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(o,e),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),Ot(new X("auth-internal",(t=>(t=>new qs(t))(Xn(t.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),zt(Bs,zs,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Gs)),zt(Bs,zs,"esm2017");var Qs,Xs="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},Js={},Ys=Ys||{},Zs=Xs||self;function tr(){}function er(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function nr(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var ir="closure_uid_"+(1e9*Math.random()>>>0),sr=0;function rr(t,e,n){return t.call.apply(t.bind,arguments)}function or(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function ar(t,e,n){return(ar=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?rr:or).apply(null,arguments)}function cr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function lr(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function ur(){this.s=this.s,this.o=this.o}ur.prototype.s=!1,ur.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,ir)&&t[ir]||(t[ir]=++sr))},ur.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const hr=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function dr(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function fr(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(er(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let s=0;s<i;s++)t[e+s]=n[s]}else t.push(n)}}function pr(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}pr.prototype.h=function(){this.defaultPrevented=!0};var mr=function(){if(!Zs.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Zs.addEventListener("test",tr,e),Zs.removeEventListener("test",tr,e)}catch(t){}return t}();function gr(t){return/^[\s\xa0]*$/.test(t)}var yr=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function vr(t,e){return t<e?-1:t>e?1:0}function br(){var t=Zs.navigator;return t&&(t=t.userAgent)?t:""}function wr(t){return-1!=br().indexOf(t)}function xr(t){return xr[" "](t),t}xr[" "]=tr;var kr,Tr,Ir=wr("Opera"),Er=wr("Trident")||wr("MSIE"),_r=wr("Edge"),Cr=_r||Er,Sr=wr("Gecko")&&!(-1!=br().toLowerCase().indexOf("webkit")&&!wr("Edge"))&&!(wr("Trident")||wr("MSIE"))&&!wr("Edge"),Nr=-1!=br().toLowerCase().indexOf("webkit")&&!wr("Edge");function Ar(){var t=Zs.document;return t?t.documentMode:void 0}t:{var Rr="",Lr=(Tr=br(),Sr?/rv:([^\);]+)(\)|;)/.exec(Tr):_r?/Edge\/([\d\.]+)/.exec(Tr):Er?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Tr):Nr?/WebKit\/(\S+)/.exec(Tr):Ir?/(?:Version)[ \/]?(\S+)/.exec(Tr):void 0);if(Lr&&(Rr=Lr?Lr[1]:""),Er){var Dr=Ar();if(null!=Dr&&Dr>parseFloat(Rr)){kr=String(Dr);break t}}kr=Rr}var Pr,Or={};function Mr(){return function(t){var e=Or;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=yr(String(kr)).split("."),n=yr("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=vr(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||vr(0==s[2].length,0==r[2].length)||vr(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}if(Zs.document&&Er){var Fr=Ar();Pr=Fr||(parseInt(kr,10)||void 0)}else Pr=void 0;var Ur=Pr;function Vr(t,e){if(pr.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Sr){t:{try{xr(e.nodeName);var s=!0;break t}catch(t){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:jr[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Vr.X.h.call(this)}}lr(Vr,pr);var jr={2:"touch",3:"pen",4:"mouse"};Vr.prototype.h=function(){Vr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Br="closure_listenable_"+(1e6*Math.random()|0),zr=0;function qr(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++zr,this.ba=this.ea=!1}function Wr(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Hr(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function $r(t){const e={};for(const n in t)e[n]=t[n];return e}const Kr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Gr(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<Kr.length;e++)n=Kr[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Qr(t){this.src=t,this.g={},this.h=0}function Xr(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=hr(s,e);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Wr(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Jr(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}Qr.prototype.add=function(t,e,n,i,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=Jr(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new qr(e,this.src,r,!!i,s)).ea=n,t.push(e)),e};var Yr="closure_lm_"+(1e6*Math.random()|0),Zr={};function to(t,e,n,i,s){if(i&&i.once)return no(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)to(t,e[r],n,i,s);return null}return n=lo(n),t&&t[Br]?t.N(e,n,nr(i)?!!i.capture:!!i,s):eo(t,e,n,!1,i,s)}function eo(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=nr(s)?!!s.capture:!!s,a=ao(t);if(a||(t[Yr]=a=new Qr(t)),(n=a.add(e,n,i,o,r)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=oo;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)mr||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(ro(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function no(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)no(t,e[r],n,i,s);return null}return n=lo(n),t&&t[Br]?t.O(e,n,nr(i)?!!i.capture:!!i,s):eo(t,e,n,!0,i,s)}function io(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)io(t,e[r],n,i,s);else i=nr(i)?!!i.capture:!!i,n=lo(n),t&&t[Br]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Jr(r=t.g[e],n,i,s))&&(Wr(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=ao(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Jr(e,n,i,s)),(n=-1<t?e[t]:null)&&so(n))}function so(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[Br])Xr(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(ro(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=ao(e))?(Xr(n,t),0==n.h&&(n.src=null,e[Yr]=null)):Wr(t)}}}function ro(t){return t in Zr?Zr[t]:Zr[t]="on"+t}function oo(t,e){if(t.ba)t=!0;else{e=new Vr(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&so(t),t=n.call(i,e)}return t}function ao(t){return(t=t[Yr])instanceof Qr?t:null}var co="__closure_events_fn_"+(1e9*Math.random()>>>0);function lo(t){return"function"==typeof t?t:(t[co]||(t[co]=function(e){return t.handleEvent(e)}),t[co])}function uo(){ur.call(this),this.i=new Qr(this),this.P=this,this.I=null}function ho(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new pr(e,t);else if(e instanceof pr)e.target=e.target||t;else{var s=e;Gr(e=new pr(i,t),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=fo(o,i,!0,e)&&s}if(s=fo(o=e.g=t,i,!0,e)&&s,s=fo(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)s=fo(o=e.g=n[r],i,!1,e)&&s}function fo(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Xr(t.i,o),s=!1!==a.call(c,i)&&s}}return s&&!i.defaultPrevented}lr(uo,ur),uo.prototype[Br]=!0,uo.prototype.removeEventListener=function(t,e,n,i){io(this,t,e,n,i)},uo.prototype.M=function(){if(uo.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Wr(n[i]);delete e.g[t],e.h--}}this.I=null},uo.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},uo.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var po=Zs.JSON.stringify;function mo(){var t=ko;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var go,yo=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new vo),(t=>t.reset()));class vo{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function bo(t){Zs.setTimeout((()=>{throw t}),0)}function wo(t,e){go||function(){var t=Zs.Promise.resolve(void 0);go=function(){t.then(To)}}(),xo||(go(),xo=!0),ko.add(t,e)}var xo=!1,ko=new class{add(t,e){const n=yo.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function To(){for(var t;t=mo();){try{t.h.call(t.g)}catch(t){bo(t)}var e=yo;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xo=!1}function Io(t,e){uo.call(this),this.h=t||1,this.g=e||Zs,this.j=ar(this.lb,this),this.l=Date.now()}function Eo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function _o(t,e,n){if("function"==typeof t)n&&(t=ar(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=ar(t.handleEvent,t)}return 2147483647<Number(e)?-1:Zs.setTimeout(t,e||0)}function Co(t){t.g=_o((()=>{t.g=null,t.i&&(t.i=!1,Co(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}lr(Io,uo),(Qs=Io.prototype).ca=!1,Qs.R=null,Qs.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ho(this,"tick"),this.ca&&(Eo(this),this.start()))}},Qs.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Qs.M=function(){Io.X.M.call(this),Eo(this),delete this.g};class So extends ur{l(t){this.h=arguments,this.g?this.i=!0:Co(this)}M(){super.M(),this.g&&(Zs.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function No(t){ur.call(this),this.h=t,this.g={}}lr(No,ur);var Ao=[];function Ro(t,e,n,i){Array.isArray(n)||(n&&(Ao[0]=n.toString()),n=Ao);for(var s=0;s<n.length;s++){var r=to(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Lo(t){Hr(t.g,(function(t,e){this.g.hasOwnProperty(e)&&so(t)}),t),t.g={}}function Do(){this.g=!0}function Po(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return po(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}No.prototype.M=function(){No.X.M.call(this),Lo(this)},No.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Do.prototype.Aa=function(){this.g=!1},Do.prototype.info=function(){};var Oo={},Mo=null;function Fo(){return Mo=Mo||new uo}function Uo(t){pr.call(this,Oo.Pa,t)}function Vo(t){const e=Fo();ho(e,new Uo(e))}function jo(t,e){pr.call(this,Oo.STAT_EVENT,t),this.stat=e}function Bo(t){const e=Fo();ho(e,new jo(e,t))}function zo(t,e){pr.call(this,Oo.Qa,t),this.size=e}function qo(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Zs.setTimeout((function(){t()}),e)}Oo.Pa="serverreachability",lr(Uo,pr),Oo.STAT_EVENT="statevent",lr(jo,pr),Oo.Qa="timingevent",lr(zo,pr);var Wo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ho={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function $o(){}function Ko(t){return t.h||(t.h=t.i())}function Go(){}$o.prototype.h=null;var Qo,Xo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Jo(){pr.call(this,"d")}function Yo(){pr.call(this,"c")}function Zo(){}function ta(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new No(this),this.O=na,t=Cr?125:void 0,this.T=new Io(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ea}function ea(){this.i=null,this.g="",this.h=!1}lr(Jo,pr),lr(Yo,pr),lr(Zo,$o),Zo.prototype.g=function(){return new XMLHttpRequest},Zo.prototype.i=function(){return{}},Qo=new Zo;var na=45e3,ia={},sa={};function ra(t,e,n){t.K=1,t.v=Ia(ba(e)),t.s=n,t.P=!0,oa(t,null)}function oa(t,e){t.F=Date.now(),ua(t),t.A=ba(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),Fa(n.i,"t",i),t.C=0,n=t.l.H,t.h=new ea,t.g=Mc(t.l,n?e:null,!t.s),0<t.N&&(t.L=new So(ar(t.La,t,t.g),t.N)),Ro(t.S,t.g,"readystatechange",t.ib),e=t.H?$r(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Vo(),function(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function aa(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function ca(t,e,n){let i,s=!0;for(;!t.I&&t.C<n.length;){if(i=la(t,n),i==sa){4==e&&(t.o=4,Bo(14),s=!1),Po(t.j,t.m,null,"[Incomplete Response]");break}if(i==ia){t.o=4,Bo(15),Po(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Po(t.j,t.m,i,null),ma(t,i)}aa(t)&&i!=sa&&i!=ia&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Bo(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Sc(e),e.K=!0,Bo(11))):(Po(t.j,t.m,n,"[Invalid Chunked Response]"),pa(t),fa(t))}function la(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?sa:(n=Number(e.substring(n,i)),isNaN(n)?ia:(i+=1)+n>e.length?sa:(e=e.substr(i,n),t.C=i+n,e))}function ua(t){t.V=Date.now()+t.O,ha(t,t.O)}function ha(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=qo(ar(t.gb,t),e)}function da(t){t.B&&(Zs.clearTimeout(t.B),t.B=null)}function fa(t){0==t.l.G||t.I||Rc(t.l,t)}function pa(t){da(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Eo(t.T),Lo(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ma(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||qa(n.h,t)))if(!t.J&&qa(n.h,t)&&3==n.G){try{var i=n.Fa.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ac(n),wc(n)}Cc(n),Bo(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&0==n.A&&!n.v&&(n.v=qo(ar(n.cb,n),6e3));if(1>=za(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else Dc(n,11)}else if((t.J||n.g==t)&&Ac(n),!gr(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.T=l[0],l=l[1],2==n.G)if("c"==l[0]){n.I=l[1],n.ka=l[2];const e=l[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const s=l[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Wa(r,r.h),r.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.za=t,Ta(i.F,i.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((i=n).sa=Oc(i,i.H?i.ka:null,i.V),o.J){Ha(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(da(a),ua(a)),i.g=o}else _c(i);0<n.i.length&&kc(n)}else"stop"!=l[0]&&"close"!=l[0]||Dc(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Dc(n,7):bc(n):"noop"!=l[0]&&n.l&&n.l.wa(l),n.A=0)}Vo()}catch(t){}}function ga(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(er(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(er(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(er(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}(Qs=ta.prototype).setTimeout=function(t){this.O=t},Qs.ib=function(t){t=t.target;const e=this.L;e&&3==fc(t)?e.l():this.La(t)},Qs.La=function(t){try{if(t==this.g)t:{const u=fc(this.g);var e=this.g.Ea();this.g.aa();if(!(3>u)&&(3!=u||Cr||this.g&&(this.h.h||this.g.fa()||pc(this.g)))){this.I||4!=u||7==e||Vo(),da(this);var n=this.g.aa();this.Y=n;e:if(aa(this)){var i=pc(this.g);t="";var s=i.length,r=4==fc(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){pa(this),fa(this);var o="";break e}this.h.i=new Zs.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!gr(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,Bo(12),pa(this),fa(this);break t}Po(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ma(this,n)}this.P?(ca(this,u,o),Cr&&this.i&&3==u&&(Ro(this.S,this.T,"tick",this.hb),this.T.start())):(Po(this.j,this.m,o,null),ma(this,o)),4==u&&pa(this),this.i&&!this.I&&(4==u?Rc(this.l,this):(this.i=!1,ua(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Bo(12)):(this.o=0,Bo(13)),pa(this),fa(this)}}}catch(t){}},Qs.hb=function(){if(this.g){var t=fc(this.g),e=this.g.fa();this.C<e.length&&(da(this),ca(this,t,e),this.i&&4!=t&&ua(this))}},Qs.cancel=function(){this.I=!0,pa(this)},Qs.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Vo(),Bo(17)),pa(this),this.o=2,fa(this)):ha(this,this.V-t)};var ya=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function va(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof va){this.h=void 0!==e?e:t.h,wa(this,t.j),this.s=t.s,this.g=t.g,xa(this,t.m),this.l=t.l,e=t.i;var n=new Da;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ka(this,n),this.o=t.o}else t&&(n=String(t).match(ya))?(this.h=!!e,wa(this,n[1]||"",!0),this.s=Ea(n[2]||""),this.g=Ea(n[3]||"",!0),xa(this,n[4]),this.l=Ea(n[5]||"",!0),ka(this,n[6]||"",!0),this.o=Ea(n[7]||"")):(this.h=!!e,this.i=new Da(null,this.h))}function ba(t){return new va(t)}function wa(t,e,n){t.j=n?Ea(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function xa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ka(t,e,n){e instanceof Da?(t.i=e,function(t,e){e&&!t.j&&(Pa(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Oa(this,e),Fa(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=_a(e,Ra)),t.i=new Da(e,t.h))}function Ta(t,e,n){t.i.set(e,n)}function Ia(t){return Ta(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ea(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function _a(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Ca),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ca(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}va.prototype.toString=function(){var t=[],e=this.j;e&&t.push(_a(e,Sa,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(_a(e,Sa,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(_a(n,"/"==n.charAt(0)?Aa:Na,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",_a(n,La)),t.join("")};var Sa=/[#\/\?@]/g,Na=/[#\?:]/g,Aa=/[#\?]/g,Ra=/[#\?@]/g,La=/#/g;function Da(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Pa(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Oa(t,e){Pa(t),e=Ua(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ma(t,e){return Pa(t),e=Ua(t,e),t.g.has(e)}function Fa(t,e,n){Oa(t,e),0<n.length&&(t.i=null,t.g.set(Ua(t,e),dr(n)),t.h+=n.length)}function Ua(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Qs=Da.prototype).add=function(t,e){Pa(this),this.i=null,t=Ua(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Qs.forEach=function(t,e){Pa(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},Qs.oa=function(){Pa(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let t=0;t<s.length;t++)n.push(e[i])}return n},Qs.W=function(t){Pa(this);let e=[];if("string"==typeof t)Ma(this,t)&&(e=e.concat(this.g.get(Ua(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Qs.set=function(t,e){return Pa(this),this.i=null,Ma(this,t=Ua(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Qs.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},Qs.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;""!==o[i]&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Va(t){this.l=t||ja,Zs.PerformanceNavigationTiming?t=0<(t=Zs.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Zs.g&&Zs.g.Ga&&Zs.g.Ga()&&Zs.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ja=10;function Ba(t){return!!t.h||!!t.g&&t.g.size>=t.j}function za(t){return t.h?1:t.g?t.g.size:0}function qa(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Wa(t,e){t.g?t.g.add(e):t.h=e}function Ha(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function $a(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return dr(t.i)}function Ka(){}function Ga(){this.g=new Ka}function Qa(t,e,n){const i=n||"";try{ga(t,(function(t,n){let s=t;nr(t)&&(s=po(t)),e.push(i+n+"="+encodeURIComponent(s))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function Xa(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch(t){}}function Ja(t){this.l=t.ac||null,this.j=t.jb||!1}function Ya(t,e){uo.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Za,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Va.prototype.cancel=function(){if(this.i=$a(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Ka.prototype.stringify=function(t){return Zs.JSON.stringify(t,void 0)},Ka.prototype.parse=function(t){return Zs.JSON.parse(t,void 0)},lr(Ja,$o),Ja.prototype.g=function(){return new Ya(this.l,this.j)},Ja.prototype.i=function(t){return function(){return t}}({}),lr(Ya,uo);var Za=0;function tc(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function ec(t){t.readyState=4,t.l=null,t.j=null,t.A=null,nc(t)}function nc(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Qs=Ya.prototype).open=function(t,e){if(this.readyState!=Za)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,nc(this)},Qs.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Zs).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},Qs.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ec(this)),this.readyState=Za},Qs.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,nc(this)),this.g&&(this.readyState=3,nc(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==Zs.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tc(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},Qs.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ec(this):nc(this),3==this.readyState&&tc(this)}},Qs.Va=function(t){this.g&&(this.response=this.responseText=t,ec(this))},Qs.Ua=function(t){this.g&&(this.response=t,ec(this))},Qs.ga=function(){this.g&&ec(this)},Qs.setRequestHeader=function(t,e){this.v.append(t,e)},Qs.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Qs.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ya.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ic=Zs.JSON.parse;function sc(t){uo.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=rc,this.K=this.L=!1}lr(sc,uo);var rc="",oc=/^https?$/i,ac=["POST","PUT"];function cc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,lc(t),hc(t)}function lc(t){t.D||(t.D=!0,ho(t,"complete"),ho(t,"error"))}function uc(t){if(t.h&&void 0!==Ys&&(!t.C[1]||4!=fc(t)||2!=t.aa()))if(t.v&&4==fc(t))_o(t.Ha,0,t);else if(ho(t,"readystatechange"),4==fc(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var s=String(t.H).match(ya)[1]||null;if(!s&&Zs.self&&Zs.self.location){var r=Zs.self.location.protocol;s=r.substr(0,r.length-1)}i=!oc.test(s?s.toLowerCase():"")}n=i}if(n)ho(t,"complete"),ho(t,"success");else{t.m=6;try{var o=2<fc(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",lc(t)}}finally{hc(t)}}}function hc(t,e){if(t.g){dc(t);const n=t.g,i=t.C[0]?tr:null;t.g=null,t.C=null,e||ho(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function dc(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Zs.clearTimeout(t.A),t.A=null)}function fc(t){return t.g?t.g.readyState:0}function pc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case rc:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function mc(t){let e="";return Hr(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function gc(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=mc(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Ta(t,e,n))}function yc(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function vc(t){this.Ca=0,this.i=[],this.j=new Do,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=yc("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=yc("baseRetryDelayMs",5e3,t),this.bb=yc("retryDelaySeedMs",1e4,t),this.$a=yc("forwardChannelMaxRetries",2,t),this.ta=yc("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Va(t&&t.concurrentRequestLimit),this.Fa=new Ga,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function bc(t){if(xc(t),3==t.G){var e=t.U++,n=ba(t.F);Ta(n,"SID",t.I),Ta(n,"RID",e),Ta(n,"TYPE","terminate"),Ic(t,n),(e=new ta(t,t.j,e,void 0)).K=2,e.v=Ia(ba(n)),n=!1,Zs.navigator&&Zs.navigator.sendBeacon&&(n=Zs.navigator.sendBeacon(e.v.toString(),"")),!n&&Zs.Image&&((new Image).src=e.v,n=!0),n||(e.g=Mc(e.l,null),e.g.da(e.v)),e.F=Date.now(),ua(e)}Pc(t)}function wc(t){t.g&&(Sc(t),t.g.cancel(),t.g=null)}function xc(t){wc(t),t.u&&(Zs.clearTimeout(t.u),t.u=null),Ac(t),t.h.cancel(),t.m&&("number"==typeof t.m&&Zs.clearTimeout(t.m),t.m=null)}function kc(t){Ba(t.h)||t.m||(t.m=!0,wo(t.Ja,t),t.C=0)}function Tc(t,e){var n;n=e?e.m:t.U++;const i=ba(t.F);Ta(i,"SID",t.I),Ta(i,"RID",n),Ta(i,"AID",t.T),Ic(t,i),t.o&&t.s&&gc(i,t.o,t.s),n=new ta(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ec(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Wa(t.h,n),ra(n,i,e)}function Ic(t,e){t.ia&&Hr(t.ia,(function(t,n){Ta(e,n,t)})),t.l&&ga({},(function(t,n){Ta(e,n,t)}))}function Ec(t,e,n){n=Math.min(t.i.length,n);var i=t.l?ar(t.l.Ra,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),r=!1;else try{Qa(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(r){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function _c(t){t.g||t.u||(t.Z=1,wo(t.Ia,t),t.A=0)}function Cc(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=qo(ar(t.Ia,t),Lc(t,t.A)),t.A++,!0)}function Sc(t){null!=t.B&&(Zs.clearTimeout(t.B),t.B=null)}function Nc(t){t.g=new ta(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=ba(t.sa);Ta(e,"RID","rpc"),Ta(e,"SID",t.I),Ta(e,"CI",t.L?"0":"1"),Ta(e,"AID",t.T),Ta(e,"TYPE","xmlhttp"),Ic(t,e),t.o&&t.s&&gc(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ia(ba(e)),n.s=null,n.P=!0,oa(n,t)}function Ac(t){null!=t.v&&(Zs.clearTimeout(t.v),t.v=null)}function Rc(t,e){var n=null;if(t.g==e){Ac(t),Sc(t),t.g=null;var i=2}else{if(!qa(t.h,e))return;n=e.D,Ha(t.h,e),i=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;ho(i=Fo(),new zo(i,n)),kc(t)}else _c(t);else if(3==(s=e.o)||0==s&&0<t.pa||!(1==i&&function(t,e){return!(za(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=qo(ar(t.Ja,t,e),Lc(t,t.C)),t.C++,0)))}(t,e)||2==i&&Cc(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:Dc(t,5);break;case 4:Dc(t,10);break;case 3:Dc(t,6);break;default:Dc(t,2)}}function Lc(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Dc(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var i=ar(t.kb,t);n||(n=new va("//www.google.com/images/cleardot.gif"),Zs.location&&"http"==Zs.location.protocol||wa(n,"https"),Ia(n)),function(t,e){const n=new Do;if(Zs.Image){const i=new Image;i.onload=cr(Xa,n,i,"TestLoadImage: loaded",!0,e),i.onerror=cr(Xa,n,i,"TestLoadImage: error",!1,e),i.onabort=cr(Xa,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=cr(Xa,n,i,"TestLoadImage: timeout",!1,e),Zs.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else Bo(2);t.G=0,t.l&&t.l.va(e),Pc(t),xc(t)}function Pc(t){if(t.G=0,t.la=[],t.l){const e=$a(t.h);0==e.length&&0==t.i.length||(fr(t.la,e),fr(t.la,t.i),t.h.i.length=0,dr(t.i),t.i.length=0),t.l.ua()}}function Oc(t,e,n){var i=n instanceof va?ba(n):new va(n,void 0);if(""!=i.g)e&&(i.g=e+"."+i.g),xa(i,i.m);else{var s=Zs.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new va(null,void 0);i&&wa(r,i),e&&(r.g=e),s&&xa(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&Ta(i,n,e),Ta(i,"VER",t.ma),Ic(t,i),i}function Mc(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new sc(new Ja({jb:!0})):new sc(t.ra)).Ka(t.H),e}function Fc(){}function Uc(){if(Er&&!(10<=Number(Ur)))throw Error("Environmental error: no available transport.")}function Vc(t,e){uo.call(this),this.g=new vc(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!gr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!gr(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new zc(this)}function jc(t){Jo.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Bc(){Yo.call(this),this.status=1}function zc(t){this.g=t}(Qs=sc.prototype).Ka=function(t){this.L=t},Qs.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Qo.g(),this.C=this.u?Ko(this.u):Ko(Qo),this.g.onreadystatechange=ar(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void cc(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=Zs.FormData&&t instanceof Zs.FormData,!(0<=hr(ac,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{dc(this),0<this.B&&((this.K=function(t){return Er&&Mr()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ar(this.qa,this)):this.A=_o(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){cc(this,t)}},Qs.qa=function(){void 0!==Ys&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ho(this,"timeout"),this.abort(8))},Qs.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ho(this,"complete"),ho(this,"abort"),hc(this))},Qs.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hc(this,!0)),sc.X.M.call(this)},Qs.Ha=function(){this.s||(this.F||this.v||this.l?uc(this):this.fb())},Qs.fb=function(){uc(this)},Qs.aa=function(){try{return 2<fc(this)?this.g.status:-1}catch(t){return-1}},Qs.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Qs.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ic(e)}},Qs.Ea=function(){return this.m},Qs.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Qs=vc.prototype).ma=8,Qs.G=1,Qs.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new ta(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=$r(r),Gr(r,this.S)):r=this.S),null!==this.o||this.N||(s.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Ec(this,s,e),Ta(n=ba(this.F),"RID",t),Ta(n,"CVER",22),this.D&&Ta(n,"X-HTTP-Session-Id",this.D),Ic(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(mc(r)))+"&"+e:this.o&&gc(n,this.o,r)),Wa(this.h,s),this.Ya&&Ta(n,"TYPE","init"),this.O?(Ta(n,"$req",e),Ta(n,"SID","null"),s.Z=!0,ra(s,n,null)):ra(s,n,e),this.G=2}}else 3==this.G&&(t?Tc(this,t):0==this.i.length||Ba(this.h)||Tc(this))},Qs.Ia=function(){if(this.u=null,Nc(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=qo(ar(this.eb,this),t)}},Qs.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Bo(10),wc(this),Nc(this))},Qs.cb=function(){null!=this.v&&(this.v=null,wc(this),Cc(this),Bo(19))},Qs.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Bo(2)):(this.j.info("Failed to ping google.com"),Bo(1))},(Qs=Fc.prototype).xa=function(){},Qs.wa=function(){},Qs.va=function(){},Qs.ua=function(){},Qs.Ra=function(){},Uc.prototype.g=function(t,e){return new Vc(t,e)},lr(Vc,uo),Vc.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Bo(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Oc(t,null,t.V),kc(t)},Vc.prototype.close=function(){bc(this.g)},Vc.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=po(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&kc(e)},Vc.prototype.M=function(){this.g.l=null,delete this.j,bc(this.g),delete this.g,Vc.X.M.call(this)},lr(jc,Jo),lr(Bc,Yo),lr(zc,Fc),zc.prototype.xa=function(){ho(this.g,"a")},zc.prototype.wa=function(t){ho(this.g,new jc(t))},zc.prototype.va=function(t){ho(this.g,new Bc)},zc.prototype.ua=function(){ho(this.g,"b")},Uc.prototype.createWebChannel=Uc.prototype.g,Vc.prototype.send=Vc.prototype.u,Vc.prototype.open=Vc.prototype.m,Vc.prototype.close=Vc.prototype.close,Wo.NO_ERROR=0,Wo.TIMEOUT=8,Wo.HTTP_ERROR=6,Ho.COMPLETE="complete",Go.EventType=Xo,Xo.OPEN="a",Xo.CLOSE="b",Xo.ERROR="c",Xo.MESSAGE="d",uo.prototype.listen=uo.prototype.N,sc.prototype.listenOnce=sc.prototype.O,sc.prototype.getLastError=sc.prototype.Oa,sc.prototype.getLastErrorCode=sc.prototype.Ea,sc.prototype.getStatus=sc.prototype.aa,sc.prototype.getResponseJson=sc.prototype.Sa,sc.prototype.getResponseText=sc.prototype.fa,sc.prototype.send=sc.prototype.da,sc.prototype.setWithCredentials=sc.prototype.Ka;var qc=Js.createWebChannelTransport=function(){return new Uc},Wc=Js.getStatEventTarget=function(){return Fo()},Hc=Js.ErrorCode=Wo,$c=Js.EventType=Ho,Kc=Js.Event=Oo,Gc=Js.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Qc=Js.FetchXmlHttpFactory=Ja,Xc=Js.WebChannel=Go,Jc=Js.XhrIo=sc;const Yc="@firebase/firestore";
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
 */class Zc{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}Zc.UNAUTHENTICATED=new Zc(null),Zc.GOOGLE_CREDENTIALS=new Zc("google-credentials-uid"),Zc.FIRST_PARTY=new Zc("first-party-uid"),Zc.MOCK_USER=new Zc("mock-user");
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
let tl="9.17.1";
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
 */const el=new at("@firebase/firestore");function nl(){return el.logLevel}function il(t,...e){if(el.logLevel<=et.DEBUG){const n=e.map(ol);el.debug(`Firestore (${tl}): ${t}`,...n)}}function sl(t,...e){if(el.logLevel<=et.ERROR){const n=e.map(ol);el.error(`Firestore (${tl}): ${t}`,...n)}}function rl(t,...e){if(el.logLevel<=et.WARN){const n=e.map(ol);el.warn(`Firestore (${tl}): ${t}`,...n)}}function ol(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function al(t="Unexpected state"){const e=`FIRESTORE (${tl}) INTERNAL ASSERTION FAILED: `+t;throw sl(e),new Error(e)}function cl(t,e){t||al()}function ll(t,e){return t}
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
 */const ul={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class hl extends F{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class dl{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class fl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class pl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Zc.UNAUTHENTICATED)))}shutdown(){}}class ml{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}constructor(t){this.token=t,this.changeListener=null}}class gl{start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new dl;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new dl,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{il("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(il("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new dl)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(il("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(cl("string"==typeof e.accessToken),new fl(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return cl(null===t||"string"==typeof t),new Zc(t)}constructor(t){this.t=t,this.currentUser=Zc.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class yl{I(){return this.g?this.g():(cl(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i,this.type="FirstParty",this.user=Zc.FIRST_PARTY,this.p=new Map}}class vl{getToken(){return Promise.resolve(new yl(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Zc.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i}}class bl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wl{start(t,e){const n=t=>{null!=t.error&&il("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,il("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{il("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?i(t):il("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(cl("string"==typeof t.token),this.A=t.token,new bl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}}
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
function xl(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
 */class kl{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=xl(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}function Tl(t,e){return t<e?-1:t>e?1:0}function Il(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
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
class El{static now(){return El.fromMillis(Date.now())}static fromDate(t){return El.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new El(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Tl(this.nanoseconds,t.nanoseconds):Tl(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new hl(ul.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new hl(ul.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new hl(ul.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new hl(ul.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
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
 */class _l{static fromTimestamp(t){return new _l(t)}static min(){return new _l(new El(0,0))}static max(){return new _l(new El(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
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
 */class Cl{get length(){return this.len}isEqual(t){return 0===Cl.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Cl?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),s=e.get(i);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&al(),void 0===n?n=t.length-e:n>t.length-e&&al(),this.segments=t,this.offset=e,this.len=n}}class Sl extends Cl{construct(t,e,n){return new Sl(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new hl(ul.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Sl(e)}static emptyPath(){return new Sl([])}}const Nl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Al extends Cl{construct(t,e,n){return new Al(t,e,n)}static isValidIdentifier(t){return Nl.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Al.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Al(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new hl(ul.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new hl(ul.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new hl(ul.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new hl(ul.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Al(e)}static emptyPath(){return new Al([])}}
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
 */class Rl{static fromPath(t){return new Rl(Sl.fromString(t))}static fromName(t){return new Rl(Sl.fromString(t).popFirst(5))}static empty(){return new Rl(Sl.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Sl.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Sl.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Rl(new Sl(t.slice()))}constructor(t){this.path=t}}
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
 */class Ll{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}Ll.UNKNOWN_ID=-1;function Dl(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=_l.fromTimestamp(1e9===i?new El(n+1,0):new El(n,i));return new Ol(s,Rl.empty(),e)}function Pl(t){return new Ol(t.readTime,t.key,-1)}class Ol{static min(){return new Ol(_l.min(),Rl.empty(),-1)}static max(){return new Ol(_l.max(),Rl.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function Ml(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Rl.comparator(t.documentKey,e.documentKey),0!==n?n:Tl(t.largestBatchId,e.largestBatchId))}
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
 */const Fl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ul{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
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
 */async function Vl(t){if(t.code!==ul.FAILED_PRECONDITION||t.message!==Fl)throw t;il("LocalStore","Unexpectedly lost primary lease")}
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
 */class jl{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&al(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new jl(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof jl?e:jl.resolve(e)}catch(t){return jl.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):jl.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):jl.reject(e)}static resolve(t){return new jl(((e,n)=>{e(t)}))}static reject(t){return new jl(((e,n)=>{n(t)}))}static waitFor(t){return new jl(((e,n)=>{let i=0,s=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++s,r&&s===i&&e()}),(t=>n(t)))})),r=!0,s===i&&e()}))}static or(t){let e=jl.resolve(!1);for(const n of t)e=e.next((t=>t?jl.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new jl(((n,i)=>{const s=t.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{r[c]=t,++o,o===s&&n(r)}),(t=>i(t)))}}))}static doWhile(t,e){return new jl(((n,i)=>{const s=()=>{!0===t()?e().next((()=>{s()}),i):n()};s()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
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
 */function Bl(t){return"IndexedDbTransactionError"===t.name}
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
class zl{ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}}zl.at=-1;
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
class ql{constructor(t,e,n,i,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Wl{static empty(){return new Wl("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Wl&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
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
 */function Hl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $l(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */function Gl(t){return null==t}function Ql(t){return 0===t&&1/t==-1/0}function Xl(t){return"number"==typeof t&&Number.isInteger(t)&&!Ql(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
class Jl{static fromBase64String(t){const e=atob(t);return new Jl(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Jl(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Tl(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}Jl.EMPTY_BYTE_STRING=new Jl("");const Yl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zl(t){if(cl(!!t),"string"==typeof t){let e=0;const n=Yl.exec(t);if(cl(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:tu(t.seconds),nanos:tu(t.nanos)}}function tu(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function eu(t){return"string"==typeof t?Jl.fromBase64String(t):Jl.fromUint8Array(t)}
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
 */function nu(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function iu(t){const e=t.mapValue.fields.__previous_value__;return nu(e)?iu(e):e}function su(t){const e=Zl(t.mapValue.fields.__local_write_time__.timestampValue);return new El(e.seconds,e.nanos)}
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
 */const ru={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ou(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nu(t)?4:bu(t)?9007199254740991:10:al()}function au(t,e){if(t===e)return!0;const n=ou(t);if(n!==ou(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return su(t).isEqual(su(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Zl(t.timestampValue),i=Zl(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return eu(t.bytesValue).isEqual(eu(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return tu(t.geoPointValue.latitude)===tu(e.geoPointValue.latitude)&&tu(t.geoPointValue.longitude)===tu(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return tu(t.integerValue)===tu(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=tu(t.doubleValue),i=tu(e.doubleValue);return n===i?Ql(n)===Ql(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Il(t.arrayValue.values||[],e.arrayValue.values||[],au);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(Hl(n)!==Hl(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!au(n[t],i[t])))return!1;return!0}(t,e);default:return al()}}function cu(t,e){return void 0!==(t.values||[]).find((t=>au(t,e)))}function lu(t,e){if(t===e)return 0;const n=ou(t),i=ou(e);if(n!==i)return Tl(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Tl(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=tu(t.integerValue||t.doubleValue),i=tu(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return uu(t.timestampValue,e.timestampValue);case 4:return uu(su(t),su(e));case 5:return Tl(t.stringValue,e.stringValue);case 6:return function(t,e){const n=eu(t),i=eu(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=Tl(n[t],i[t]);if(0!==e)return e}return Tl(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Tl(tu(t.latitude),tu(e.latitude));return 0!==n?n:Tl(tu(t.longitude),tu(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=lu(n[t],i[t]);if(e)return e}return Tl(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===ru.mapValue&&e===ru.mapValue)return 0;if(t===ru.mapValue)return 1;if(e===ru.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),s=e.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let t=0;t<i.length&&t<r.length;++t){const e=Tl(i[t],r[t]);if(0!==e)return e;const o=lu(n[i[t]],s[r[t]]);if(0!==o)return o}return Tl(i.length,r.length)}(t.mapValue,e.mapValue);default:throw al()}}function uu(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Tl(t,e);const n=Zl(t),i=Zl(e),s=Tl(n.seconds,i.seconds);return 0!==s?s:Tl(n.nanos,i.nanos)}function hu(t){return du(t)}function du(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Zl(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?eu(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Rl.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=du(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const s of e)i?i=!1:n+=",",n+=`${s}:${du(t.fields[s])}`;return n+"}"}(t.mapValue):al()}function fu(t){return!!t&&"integerValue"in t}function pu(t){return!!t&&"arrayValue"in t}function mu(t){return!!t&&"nullValue"in t}function gu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yu(t){return!!t&&"mapValue"in t}function vu(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $l(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=vu(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vu(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bu(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class wu{constructor(t,e){this.position=t,this.inclusive=e}}function xu(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(i=r.field.isKeyField()?Rl.comparator(Rl.fromName(o.referenceValue),n.key):lu(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function ku(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!au(t.position[n],e.position[n]))return!1;return!0}
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
 */class Tu{}class Iu extends Tu{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Lu(t,e,n):"array-contains"===e?new Mu(t,n):"in"===e?new Fu(t,n):"not-in"===e?new Uu(t,n):"array-contains-any"===e?new Vu(t,n):new Iu(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Du(t,n):new Pu(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(lu(e,this.value)):null!==e&&ou(this.value)===ou(e)&&this.matchesComparison(lu(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return al()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class Eu extends Tu{static create(t,e){return new Eu(t,e)}matches(t){return _u(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}}function _u(t){return"and"===t.op}function Cu(t){return Su(t)&&_u(t)}function Su(t){for(const e of t.filters)if(e instanceof Eu)return!1;return!0}function Nu(t){if(t instanceof Iu)return t.field.canonicalString()+t.op.toString()+hu(t.value);if(Cu(t))return t.filters.map((t=>Nu(t))).join(",");{const e=t.filters.map((t=>Nu(t))).join(",");return`${t.op}(${e})`}}function Au(t,e){return t instanceof Iu?function(t,e){return e instanceof Iu&&t.op===e.op&&t.field.isEqual(e.field)&&au(t.value,e.value)}(t,e):t instanceof Eu?function(t,e){return e instanceof Eu&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&Au(n,e.filters[i])),!0)}(t,e):void al()}function Ru(t){return t instanceof Iu?function(t){return`${t.field.canonicalString()} ${t.op} ${hu(t.value)}`}(t):t instanceof Eu?function(t){return t.op.toString()+" {"+t.getFilters().map(Ru).join(" ,")+"}"}(t):"Filter"}class Lu extends Iu{matches(t){const e=Rl.comparator(t.key,this.key);return this.matchesComparison(e)}constructor(t,e,n){super(t,e,n),this.key=Rl.fromName(n.referenceValue)}}class Du extends Iu{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=Ou("in",e)}}class Pu extends Iu{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=Ou("not-in",e)}}function Ou(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Rl.fromName(t.referenceValue)))}class Mu extends Iu{matches(t){const e=t.data.field(this.field);return pu(e)&&cu(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class Fu extends Iu{matches(t){const e=t.data.field(this.field);return null!==e&&cu(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class Uu extends Iu{matches(t){if(cu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!cu(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class Vu extends Iu{matches(t){const e=t.data.field(this.field);return!(!pu(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>cu(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}
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
 */class ju{constructor(t,e="asc"){this.field=t,this.dir=e}}function Bu(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class zu{insert(t,e){return new zu(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Wu.BLACK,null,null))}remove(t){return new zu(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Wu.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qu(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qu(this.root,t,this.comparator,!1)}getReverseIterator(){return new qu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qu(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||Wu.EMPTY}}class qu{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class Wu{copy(t,e,n,i,s){return new Wu(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Wu.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Wu.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Wu.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Wu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw al();if(this.right.isRed())throw al();const t=this.left.check();if(t!==this.right.check())throw al();return t+(this.isRed()?0:1)}constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:Wu.RED,this.left=null!=i?i:Wu.EMPTY,this.right=null!=s?s:Wu.EMPTY,this.size=this.left.size+1+this.right.size}}Wu.EMPTY=null,Wu.RED=!0,Wu.BLACK=!1,Wu.EMPTY=new class{get key(){throw al()}get value(){throw al()}get color(){throw al()}get left(){throw al()}get right(){throw al()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Wu(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
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
class Hu{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new $u(this.data.getIterator())}getIteratorFrom(t){return new $u(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Hu))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Hu(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new zu(this.comparator)}}class $u{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
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
class Ku{static empty(){return new Ku([])}unionWith(t){let e=new Hu(Al.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Ku(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Il(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(Al.comparator)}}
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
 */class Gu{static empty(){return new Gu({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!yu(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=vu(e)}setAll(t){let e=Al.emptyPath(),n={},i=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=s.popLast()}t?n[s.lastSegment()]=vu(t):i.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());yu(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return au(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];yu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){$l(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Gu(vu(this.value))}constructor(t){this.value=t}}function Qu(t){const e=[];return $l(t.fields,((t,n)=>{const i=new Al([t]);if(yu(n)){const t=Qu(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Ku(e)
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
 */}class Xu{static newInvalidDocument(t){return new Xu(t,0,_l.min(),_l.min(),_l.min(),Gu.empty(),0)}static newFoundDocument(t,e,n,i){return new Xu(t,1,e,_l.min(),n,i,0)}static newNoDocument(t,e){return new Xu(t,2,e,_l.min(),_l.min(),Gu.empty(),0)}static newUnknownDocument(t,e){return new Xu(t,3,e,_l.min(),_l.min(),Gu.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(_l.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Gu.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Gu.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_l.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Xu&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Xu(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,i,s,r,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=s,this.data=r,this.documentState=o}}
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
 */class Ju{constructor(t,e=null,n=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.ft=null}}function Yu(t,e=null,n=[],i=[],s=null,r=null,o=null){return new Ju(t,e,n,i,s,r,o)}function Zu(t){const e=ll(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Nu(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Gl(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>hu(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>hu(t))).join(",")),e.ft=t}return e.ft}function th(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Bu(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Au(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ku(t.startAt,e.startAt)&&ku(t.endAt,e.endAt)}function eh(t){return Rl.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
class nh{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function ih(t,e,n,i,s,r,o,a){return new nh(t,e,n,i,s,r,o,a)}function sh(t){return new nh(t)}function rh(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function oh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ah(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function ch(t){return null!==t.collectionGroup}function lh(t){const e=ll(t);if(null===e.dt){e.dt=[];const t=ah(e),n=oh(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new ju(t)),e.dt.push(new ju(Al.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new ju(Al.keyField(),t))}}}return e.dt}function uh(t){const e=ll(t);if(!e._t)if("F"===e.limitType)e._t=Yu(e.path,e.collectionGroup,lh(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of lh(e)){const e="desc"===n.dir?"asc":"desc";t.push(new ju(n.field,e))}const n=e.endAt?new wu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new wu(e.startAt.position,e.startAt.inclusive):null;e._t=Yu(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e._t}function hh(t,e,n){return new nh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function dh(t,e){return th(uh(t),uh(e))&&t.limitType===e.limitType}function fh(t){return`${Zu(uh(t))}|lt:${t.limitType}`}function ph(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Ru(t))).join(", ")}]`),Gl(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>hu(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>hu(t))).join(",")),`Target(${e})`}(uh(t))}; limitType=${t.limitType})`}function mh(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Rl.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of lh(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=xu(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,lh(t),e))&&!(t.endAt&&!function(t,e,n){const i=xu(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,lh(t),e))}(t,e)}function gh(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yh(t){return(e,n)=>{let i=!1;for(const s of lh(t)){const t=vh(s,e,n);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}function vh(t,e,n){const i=t.field.isKeyField()?Rl.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),s=n.data.field(t);return null!==i&&null!==s?lu(i,s):al()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return al()}}
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
 */function bh(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ql(e)?"-0":e}}function wh(t){return{integerValue:""+t}}function xh(t,e){return Xl(e)?wh(e):bh(t,e)}
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
 */class kh{constructor(){this._=void 0}}function Th(t,e,n){return t instanceof _h?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Ch?Sh(t,e):t instanceof Nh?Ah(t,e):function(t,e){const n=Eh(t,e),i=Lh(n)+Lh(t.gt);return fu(n)&&fu(t.gt)?wh(i):bh(t.yt,i)}(t,e)}function Ih(t,e,n){return t instanceof Ch?Sh(t,e):t instanceof Nh?Ah(t,e):n}function Eh(t,e){var n;return t instanceof Rh?fu(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null}class _h extends kh{}class Ch extends kh{constructor(t){super(),this.elements=t}}function Sh(t,e){const n=Dh(e);for(const e of t.elements)n.some((t=>au(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Nh extends kh{constructor(t){super(),this.elements=t}}function Ah(t,e){let n=Dh(e);for(const e of t.elements)n=n.filter((t=>!au(t,e)));return{arrayValue:{values:n}}}class Rh extends kh{constructor(t,e){super(),this.yt=t,this.gt=e}}function Lh(t){return tu(t.integerValue||t.doubleValue)}function Dh(t){return pu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class Ph{constructor(t,e){this.field=t,this.transform=e}}class Oh{constructor(t,e){this.version=t,this.transformResults=e}}class Mh{static none(){return new Mh}static exists(t){return new Mh(void 0,t)}static updateTime(t){return new Mh(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function Fh(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Uh{}function Vh(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Qh(t.key,Mh.none()):new Wh(t.key,t.data,Mh.none());{const n=t.data,i=Gu.empty();let s=new Hu(Al.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),s=s.add(t)}return new Hh(t.key,i,new Ku(s.toArray()),Mh.none())}}function jh(t,e,n){t instanceof Wh?function(t,e,n){const i=t.value.clone(),s=Kh(t.fieldTransforms,e,n.transformResults);i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Hh?function(t,e,n){if(!Fh(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Kh(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll($h(t)),s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Bh(t,e,n,i){return t instanceof Wh?function(t,e,n,i){if(!Fh(t.precondition,e))return n;const s=t.value.clone(),r=Gh(t.fieldTransforms,i,e);return s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,i):t instanceof Hh?function(t,e,n,i){if(!Fh(t.precondition,e))return n;const s=Gh(t.fieldTransforms,i,e),r=e.data;return r.setAll($h(t)),r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return Fh(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function zh(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),s=Eh(i.transform,t||null);null!=s&&(null===n&&(n=Gu.empty()),n.set(i.field,s))}return n||null}function qh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Il(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Ch&&e instanceof Ch||t instanceof Nh&&e instanceof Nh?Il(t.elements,e.elements,au):t instanceof Rh&&e instanceof Rh?au(t.gt,e.gt):t instanceof _h&&e instanceof _h}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wh extends Uh{getFieldMask(){return null}constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Hh extends Uh{getFieldMask(){return this.fieldMask}constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function $h(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Kh(t,e,n){const i=new Map;cl(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,Ih(o,a,n[s]))}return i}function Gh(t,e,n){const i=new Map;for(const s of t){const t=s.transform,r=n.data.field(s.field);i.set(s.field,Th(t,r,e))}return i}class Qh extends Uh{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Xh extends Uh{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
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
 */class Jh{constructor(t){this.count=t}}
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
 */var Yh,Zh;function td(t){switch(t){default:return al();case ul.CANCELLED:case ul.UNKNOWN:case ul.DEADLINE_EXCEEDED:case ul.RESOURCE_EXHAUSTED:case ul.INTERNAL:case ul.UNAVAILABLE:case ul.UNAUTHENTICATED:return!1;case ul.INVALID_ARGUMENT:case ul.NOT_FOUND:case ul.ALREADY_EXISTS:case ul.PERMISSION_DENIED:case ul.FAILED_PRECONDITION:case ul.ABORTED:case ul.OUT_OF_RANGE:case ul.UNIMPLEMENTED:case ul.DATA_LOSS:return!0}}function ed(t){if(void 0===t)return sl("GRPC error has no .code"),ul.UNKNOWN;switch(t){case Yh.OK:return ul.OK;case Yh.CANCELLED:return ul.CANCELLED;case Yh.UNKNOWN:return ul.UNKNOWN;case Yh.DEADLINE_EXCEEDED:return ul.DEADLINE_EXCEEDED;case Yh.RESOURCE_EXHAUSTED:return ul.RESOURCE_EXHAUSTED;case Yh.INTERNAL:return ul.INTERNAL;case Yh.UNAVAILABLE:return ul.UNAVAILABLE;case Yh.UNAUTHENTICATED:return ul.UNAUTHENTICATED;case Yh.INVALID_ARGUMENT:return ul.INVALID_ARGUMENT;case Yh.NOT_FOUND:return ul.NOT_FOUND;case Yh.ALREADY_EXISTS:return ul.ALREADY_EXISTS;case Yh.PERMISSION_DENIED:return ul.PERMISSION_DENIED;case Yh.FAILED_PRECONDITION:return ul.FAILED_PRECONDITION;case Yh.ABORTED:return ul.ABORTED;case Yh.OUT_OF_RANGE:return ul.OUT_OF_RANGE;case Yh.UNIMPLEMENTED:return ul.UNIMPLEMENTED;case Yh.DATA_LOSS:return ul.DATA_LOSS;default:return al()}}(Zh=Yh||(Yh={}))[Zh.OK=0]="OK",Zh[Zh.CANCELLED=1]="CANCELLED",Zh[Zh.UNKNOWN=2]="UNKNOWN",Zh[Zh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Zh[Zh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Zh[Zh.NOT_FOUND=5]="NOT_FOUND",Zh[Zh.ALREADY_EXISTS=6]="ALREADY_EXISTS",Zh[Zh.PERMISSION_DENIED=7]="PERMISSION_DENIED",Zh[Zh.UNAUTHENTICATED=16]="UNAUTHENTICATED",Zh[Zh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Zh[Zh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Zh[Zh.ABORTED=10]="ABORTED",Zh[Zh.OUT_OF_RANGE=11]="OUT_OF_RANGE",Zh[Zh.UNIMPLEMENTED=12]="UNIMPLEMENTED",Zh[Zh.INTERNAL=13]="INTERNAL",Zh[Zh.UNAVAILABLE=14]="UNAVAILABLE",Zh[Zh.DATA_LOSS=15]="DATA_LOSS";
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
class nd{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){$l(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return Kl(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
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
 */const id=new zu(Rl.comparator);function sd(){return id}const rd=new zu(Rl.comparator);function od(...t){let e=rd;for(const n of t)e=e.insert(n.key,n);return e}function ad(t){let e=rd;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function cd(){return ud()}function ld(){return ud()}function ud(){return new nd((t=>t.toString()),((t,e)=>t.isEqual(e)))}const hd=new zu(Rl.comparator),dd=new Hu(Rl.comparator);function fd(...t){let e=dd;for(const n of t)e=e.add(n);return e}const pd=new Hu(Tl);function md(){return pd}
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
 */class gd{static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,yd.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new gd(_l.min(),i,md(),sd(),fd())}constructor(t,e,n,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}}class yd{static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new yd(n,e,fd(),fd(),fd())}constructor(t,e,n,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}}
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
 */class vd{constructor(t,e,n,i){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=i}}class bd{constructor(t,e){this.targetId=t,this.Et=e}}class wd{constructor(t,e,n=Jl.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class xd{get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=fd(),e=fd(),n=fd();return this.Rt.forEach(((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:al()}})),new yd(this.bt,this.Pt,t,e,n)}xt(){this.vt=!1,this.Rt=Id()}Nt(t,e){this.vt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}constructor(){this.At=0,this.Rt=Id(),this.bt=Jl.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}}class kd{Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}jt(t){this.forEachTarget(t,(e=>{const n=this.Wt(e);switch(t.state){case 0:this.zt(e)&&n.Dt(t.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(e);break;case 3:this.zt(e)&&(n.Ft(),n.Dt(t.resumeToken));break;case 4:this.zt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:al()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach(((t,n)=>{this.zt(n)&&e(n)}))}Jt(t){const e=t.targetId,n=t.Et.count,i=this.Yt(e);if(i){const t=i.target;if(eh(t))if(0===n){const n=new Rl(t.path);this.Qt(e,n,Xu.newNoDocument(n,_l.min()))}else cl(1===n);else this.Xt(e)!==n&&(this.Ht(e),this.Ut=this.Ut.add(e))}}Zt(t){const e=new Map;this.Bt.forEach(((n,i)=>{const s=this.Yt(i);if(s){if(n.current&&eh(s.target)){const e=new Rl(s.target.path);null!==this.Lt.get(e)||this.te(i,e)||this.Qt(i,e,Xu.newNoDocument(e,t))}n.St&&(e.set(i,n.Ct()),n.xt())}}));let n=fd();this.qt.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Yt(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.Lt.forEach(((e,n)=>n.setReadTime(t)));const i=new gd(t,e,this.Ut,this.Lt,n);return this.Lt=sd(),this.qt=Td(),this.Ut=new Hu(Tl),i}Gt(t,e){if(!this.zt(t))return;const n=this.te(t,e.key)?2:0;this.Wt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.zt(t))return;const i=this.Wt(t);this.te(t,e)?i.Nt(e,1):i.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Xt(t){const e=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let e=this.Bt.get(t);return e||(e=new xd,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new Hu(Tl),this.qt=this.qt.insert(t,e)),e}zt(t){const e=null!==this.Yt(t);return e||il("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new xd),this.$t.getRemoteKeysForTarget(t).forEach((e=>{this.Qt(t,e,null)}))}te(t,e){return this.$t.getRemoteKeysForTarget(t).has(e)}constructor(t){this.$t=t,this.Bt=new Map,this.Lt=sd(),this.qt=Td(),this.Ut=new Hu(Tl)}}function Td(){return new zu(Rl.comparator)}function Id(){return new zu(Rl.comparator)}
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
 */const Ed={asc:"ASCENDING",desc:"DESCENDING"},_d={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Cd={and:"AND",or:"OR"};class Sd{constructor(t,e){this.databaseId=t,this.wt=e}}function Nd(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ad(t,e){return t.wt?e.toBase64():e.toUint8Array()}function Rd(t,e){return Nd(t,e.toTimestamp())}function Ld(t){return cl(!!t),_l.fromTimestamp(function(t){const e=Zl(t);return new El(e.seconds,e.nanos)}(t))}function Dd(t,e){return function(t){return new Sl(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Pd(t){const e=Sl.fromString(t);return cl(tf(e)),e}function Od(t,e){return Dd(t.databaseId,e.path)}function Md(t,e){const n=Pd(e);if(n.get(1)!==t.databaseId.projectId)throw new hl(ul.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new hl(ul.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Rl(jd(n))}function Fd(t,e){return Dd(t.databaseId,e)}function Ud(t){const e=Pd(t);return 4===e.length?Sl.emptyPath():jd(e)}function Vd(t){return new Sl(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jd(t){return cl(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Bd(t,e,n){return{name:Od(t,e),fields:n.value.mapValue.fields}}function zd(t,e){let n;if(e instanceof Wh)n={update:Bd(t,e.key,e.value)};else if(e instanceof Qh)n={delete:Od(t,e.key)};else if(e instanceof Hh)n={update:Bd(t,e.key,e.data),updateMask:Zd(e.fieldMask)};else{if(!(e instanceof Xh))return al();n={verify:Od(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof _h)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ch)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Nh)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Rh)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw al()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Rd(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:al()}(t,e.precondition)),n}function qd(t,e){return{documents:[Fd(t,e.path)]}}function Wd(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=Fd(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fd(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(t){if(0!==t.length)return Yd(Eu.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Xd(t.field),direction:Kd(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.wt||Gl(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Hd(t){let e=Ud(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){cl(1===i);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=function(t){const e=$d(t);return e instanceof Eu&&Cu(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new ju(Jd(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Gl(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new wu(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new wu(n,e)}(n.endAt)),ih(e,s,o,r,a,"F",c,l)}function $d(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Jd(t.unaryFilter.field);return Iu.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Jd(t.unaryFilter.field);return Iu.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jd(t.unaryFilter.field);return Iu.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Jd(t.unaryFilter.field);return Iu.create(s,"!=",{nullValue:"NULL_VALUE"});default:return al()}}(t):void 0!==t.fieldFilter?function(t){return Iu.create(Jd(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return al()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Eu.create(t.compositeFilter.filters.map((t=>$d(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return al()}}(t.compositeFilter.op))}(t):al()}function Kd(t){return Ed[t]}function Gd(t){return _d[t]}function Qd(t){return Cd[t]}function Xd(t){return{fieldPath:t.canonicalString()}}function Jd(t){return Al.fromServerFormat(t.fieldPath)}function Yd(t){return t instanceof Iu?function(t){if("=="===t.op){if(gu(t.value))return{unaryFilter:{field:Xd(t.field),op:"IS_NAN"}};if(mu(t.value))return{unaryFilter:{field:Xd(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(gu(t.value))return{unaryFilter:{field:Xd(t.field),op:"IS_NOT_NAN"}};if(mu(t.value))return{unaryFilter:{field:Xd(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xd(t.field),op:Gd(t.op),value:t.value}}}(t):t instanceof Eu?function(t){const e=t.getFilters().map((t=>Yd(t)));return 1===e.length?e[0]:{compositeFilter:{op:Qd(t.op),filters:e}}}(t):al()}function Zd(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function tf(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */const ef=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],nf=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],sf=nf;
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
class rf{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&jh(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Bh(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Bh(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ld();return this.mutations.forEach((i=>{const s=t.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=e.has(i.key)?null:o;const a=Vh(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(_l.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),fd())}isEqual(t){return this.batchId===t.batchId&&Il(this.mutations,t.mutations,((t,e)=>qh(t,e)))&&Il(this.baseMutations,t.baseMutations,((t,e)=>qh(t,e)))}constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}}class of{static from(t,e,n){cl(t.mutations.length===n.length);let i=hd;const s=t.mutations;for(let t=0;t<s.length;t++)i=i.insert(s[t].key,n[t].version);return new of(t,e,n,i)}constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}}
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
 */class af{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
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
 */class cf{withSequenceNumber(t){return new cf(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new cf(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new cf(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}constructor(t,e,n,i,s=_l.min(),r=_l.min(),o=Jl.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}}
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
 */class lf{constructor(t){this.ie=t}}function uf(t){const e=Hd({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?hh(e,e.limit,"L"):e}
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
 */class hf{ue(t,e){this.ce(t,e),e.ae()}ce(t,e){if("nullValue"in t)this.he(e,5);else if("booleanValue"in t)this.he(e,10),e.le(t.booleanValue?1:0);else if("integerValue"in t)this.he(e,15),e.le(tu(t.integerValue));else if("doubleValue"in t){const n=tu(t.doubleValue);isNaN(n)?this.he(e,13):(this.he(e,15),Ql(n)?e.le(0):e.le(n))}else if("timestampValue"in t){const n=t.timestampValue;this.he(e,20),"string"==typeof n?e.fe(n):(e.fe(`${n.seconds||""}`),e.le(n.nanos||0))}else if("stringValue"in t)this.de(t.stringValue,e),this._e(e);else if("bytesValue"in t)this.he(e,30),e.we(eu(t.bytesValue)),this._e(e);else if("referenceValue"in t)this.me(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.he(e,45),e.le(n.latitude||0),e.le(n.longitude||0)}else"mapValue"in t?bu(t)?this.he(e,Number.MAX_SAFE_INTEGER):(this.ge(t.mapValue,e),this._e(e)):"arrayValue"in t?(this.ye(t.arrayValue,e),this._e(e)):al()}de(t,e){this.he(e,25),this.pe(t,e)}pe(t,e){e.fe(t)}ge(t,e){const n=t.fields||{};this.he(e,55);for(const t of Object.keys(n))this.de(t,e),this.ce(n[t],e)}ye(t,e){const n=t.values||[];this.he(e,50);for(const t of n)this.ce(t,e)}me(t,e){this.he(e,37),Rl.fromName(t).path.forEach((t=>{this.he(e,60),this.pe(t,e)}))}he(t,e){t.le(e)}_e(t){t.le(2)}constructor(){}}hf.Ie=new hf;
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
class df{addToCollectionParentIndex(t,e){return this.Je.add(e),jl.resolve()}getCollectionParents(t,e){return jl.resolve(this.Je.getEntries(e))}addFieldIndex(t,e){return jl.resolve()}deleteFieldIndex(t,e){return jl.resolve()}getDocumentsMatchingTarget(t,e){return jl.resolve(null)}getIndexType(t,e){return jl.resolve(0)}getFieldIndexes(t,e){return jl.resolve([])}getNextCollectionGroupToUpdate(t){return jl.resolve(null)}getMinOffset(t,e){return jl.resolve(Ol.min())}getMinOffsetFromCollectionGroup(t,e){return jl.resolve(Ol.min())}updateCollectionGroup(t,e,n){return jl.resolve()}updateIndexEntries(t,e){return jl.resolve()}constructor(){this.Je=new ff}}class ff{add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Hu(Sl.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Hu(Sl.comparator)).toArray()}constructor(){this.index={}}}
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
 */new Uint8Array(0);class pf{static withCacheSize(t){return new pf(t,pf.DEFAULT_COLLECTION_PERCENTILE,pf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
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
 */pf.DEFAULT_COLLECTION_PERCENTILE=10,pf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pf.DEFAULT=new pf(41943040,pf.DEFAULT_COLLECTION_PERCENTILE,pf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pf.DISABLED=new pf(-1,0,0);
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
class mf{next(){return this.bn+=2,this.bn}static Pn(){return new mf(0)}static vn(){return new mf(-1)}constructor(t){this.bn=t}}
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
class gf{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Xu.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?jl.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new nd((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
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
class yf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class vf{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Bh(n.mutation,t,Ku.empty(),El.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,fd()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=fd()){const i=cd();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=od();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=cd();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,fd())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let s=sd();const r=ud(),o=ud();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof Hh)?s=s.insert(e.key,e):void 0!==o?(r.set(e.key,o.mutation.getFieldMask()),Bh(o.mutation,e,o.mutation.getFieldMask(),El.now())):r.set(e.key,Ku.empty())})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new yf(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=ud();let i=new zu(((t,e)=>t-e)),s=fd();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||Ku.empty();o=s.applyToLocalView(r,o),n.set(t,o);const a=(i.get(s.batchId)||fd()).add(t);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,l=ld();c.forEach((t=>{if(!s.has(t)){const i=Vh(e.get(t),n.get(t));null!==i&&l.set(t,i),s=s.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,l))}return jl.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Rl.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ch(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-s.size):jl.resolve(cd());let o=-1,a=s;return r.next((e=>jl.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?jl.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,fd()))).next((t=>({batchId:o,changes:ad(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Rl(e)).next((t=>{let e=od();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let s=od();return this.indexManager.getCollectionParents(t,i).next((r=>jl.forEach(r,(r=>{const o=function(t,e){return new nh(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(i));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i)))).next((t=>{i.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,Xu.newInvalidDocument(i)))}));let n=od();return t.forEach(((t,s)=>{const r=i.get(t);void 0!==r&&Bh(r.mutation,s,Ku.empty(),El.now()),mh(e,s)&&(n=n.insert(t,s))})),n}))}constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}}
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
 */class bf{getBundleMetadata(t,e){return jl.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:Ld(n.createTime)}),jl.resolve()}getNamedQuery(t,e){return jl.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:uf(t.bundledQuery),readTime:Ld(t.readTime)}}(e)),jl.resolve()}constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}}
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
 */class wf{getOverlay(t,e){return jl.resolve(this.overlays.get(e))}getOverlays(t,e){const n=cd();return jl.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.oe(t,e,i)})),jl.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.es.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),jl.resolve()}getOverlaysForCollection(t,e,n){const i=cd(),s=e.length+1,r=new Rl(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===s&&t.largestBatchId>n&&i.set(t.getKey(),t)}return jl.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let s=new zu(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=cd(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=cd(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return jl.resolve(o)}oe(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.es.get(i.largestBatchId).delete(n.key);this.es.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new af(e,n));let s=this.es.get(e);void 0===s&&(s=fd(),this.es.set(e,s)),this.es.set(e,s.add(n.key))}constructor(){this.overlays=new zu(Rl.comparator),this.es=new Map}}
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
 */class xf{isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new kf(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new kf(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new Rl(new Sl([])),n=new kf(e,t),i=new kf(e,t+1),s=[];return this.rs.forEachInRange([n,i],(t=>{this.cs(t),s.push(t.key)})),s}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new Rl(new Sl([])),n=new kf(e,t),i=new kf(e,t+1);let s=fd();return this.rs.forEachInRange([n,i],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new kf(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.ns=new Hu(kf.ss),this.rs=new Hu(kf.os)}}class kf{static ss(t,e){return Rl.comparator(t.key,e.key)||Tl(t._s,e._s)}static os(t,e){return Tl(t._s,e._s)||Rl.comparator(t.key,e.key)}constructor(t,e){this.key=t,this._s=e}}
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
 */class Tf{checkEmpty(t){return jl.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new rf(s,e,n,i);this.mutationQueue.push(r);for(const e of i)this.gs=this.gs.add(new kf(e.key,s)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return jl.resolve(r)}lookupMutationBatch(t,e){return jl.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ps(n),s=i<0?0:i;return jl.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return jl.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return jl.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new kf(e,0),i=new kf(e,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([n,i],(t=>{const e=this.ys(t._s);s.push(e)})),jl.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Hu(Tl);return e.forEach((t=>{const e=new kf(t,0),i=new kf(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,i],(t=>{n=n.add(t._s)}))})),jl.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;Rl.isDocumentKey(s)||(s=s.child(""));const r=new kf(new Rl(s),0);let o=new Hu(Tl);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t._s)),!0)}),r),jl.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){cl(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return jl.forEach(e.mutations,(i=>{const s=new kf(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new kf(e,0),i=this.gs.firstAfterOrEqual(n);return jl.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,jl.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new Hu(kf.ss)}}
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
 */class If{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),s=i?i.size:0,r=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return jl.resolve(n?n.document.mutableCopy():Xu.newInvalidDocument(e))}getEntries(t,e){let n=sd();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Xu.newInvalidDocument(t))})),jl.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let s=sd();const r=e.path,o=new Rl(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!r.isPrefixOf(t.path))break;t.path.length>r.length+1||Ml(Pl(o),n)<=0||(i.has(o.key)||mh(e,o))&&(s=s.insert(o.key,o.mutableCopy()))}return jl.resolve(s)}getAllFromCollectionGroup(t,e,n,i){al()}As(t,e){return jl.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ef(this)}getSize(t){return jl.resolve(this.size)}constructor(t){this.Es=t,this.docs=new zu(Rl.comparator),this.size=0}}class Ef extends gf{applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(n)})),jl.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}constructor(t){super(),this.Yn=t}}
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
 */class _f{forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),jl.resolve()}getLastRemoteSnapshotVersion(t){return jl.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return jl.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),jl.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),jl.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new mf(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,jl.resolve()}updateTargetData(t,e){return this.Dn(e),jl.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,jl.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.Rs.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),jl.waitFor(s).next((()=>i))}getTargetCount(t){return jl.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return jl.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),jl.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach((e=>{s.push(i.markPotentiallyOrphaned(t,e))})),jl.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),jl.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return jl.resolve(n)}containsKey(t,e){return jl.resolve(this.Ps.containsKey(e))}constructor(t){this.persistence=t,this.Rs=new nd((t=>Zu(t)),th),this.lastRemoteSnapshotVersion=_l.min(),this.highestTargetId=0,this.bs=0,this.Ps=new xf,this.targetCount=0,this.vs=mf.Pn()}}
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
 */class Cf{start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new wf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Tf(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){il("MemoryPersistence","Starting transaction:",t);const i=new Sf(this.Ss.next());return this.referenceDelegate.ks(),n(i).next((t=>this.referenceDelegate.Os(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ms(t,e){return jl.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.Vs={},this.overlays={},this.Ss=new zl(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new _f(this),this.indexManager=new df,this.remoteDocumentCache=function(t){return new If(t)}((t=>this.referenceDelegate.xs(t))),this.yt=new lf(e),this.Ns=new bf(this.yt)}}class Sf extends Ul{constructor(t){super(),this.currentSequenceNumber=t}}class Nf{static Bs(t){return new Nf(t)}get Ls(){if(this.$s)return this.$s;throw al()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),jl.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),jl.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),jl.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return jl.forEach(this.Ls,(n=>{const i=Rl.fromPath(n);return this.qs(t,i).next((t=>{t||e.removeEntry(i,_l.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.qs(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}qs(t,e){return jl.or([()=>jl.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}constructor(t){this.persistence=t,this.Fs=new xf,this.$s=null}}
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
class Af{static Ci(t,e){let n=fd(),i=fd();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new Af(t,e.fromCache,n,i)}constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=i}}
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
 */class Rf{initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,i){return this.ki(t,e).next((s=>s||this.Oi(t,e,i,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(rh(e))return jl.resolve(null);let n=uh(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=hh(e,null,"F"),n=uh(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const s=fd(...i);return this.Ni.getDocuments(t,s).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.Fi(e,i);return this.$i(e,r,s,n.readTime)?this.ki(t,hh(e,null,"F")):this.Bi(t,r,e,n)}))))})))))}Oi(t,e,n,i){return rh(e)||i.isEqual(_l.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((s=>{const r=this.Fi(e,s);return this.$i(e,r,n,i)?this.Mi(t,e):(nl()<=et.DEBUG&&il("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ph(e)),this.Bi(t,r,e,Dl(i,-1)))}))}Fi(t,e){let n=new Hu(yh(t));return e.forEach(((e,i)=>{mh(t,i)&&(n=n.add(i))})),n}$i(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(t,e){return nl()<=et.DEBUG&&il("QueryEngine","Using full collection scan to execute query:",ph(e)),this.Ni.getDocumentsMatchingQuery(t,e,Ol.min())}Bi(t,e,n,i){return this.Ni.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.xi=!1}}
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
 */class Lf{Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new vf(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.qi)))}constructor(t,e,n,i){this.persistence=t,this.Li=e,this.yt=i,this.qi=new zu(Tl),this.Ui=new nd((t=>Zu(t)),th),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}}function Df(t,e,n,i){return new Lf(t,e,n,i)}async function Pf(t,e){const n=ll(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],r=[];let o=fd();for(const t of i){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:s,addedBatchIds:r})))}))}))}function Of(t){const e=ll(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function Mf(t,e,n){let i=fd(),s=fd();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=sd();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),r.isNoDocument()&&r.version.isEqual(_l.min())?(e.removeEntry(n,r.readTime),i=i.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),i=i.insert(n,r)):il("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{Wi:i,zi:s}}))}function Ff(t,e){const n=ll(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Uf(t,e){const n=ll(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.Cs.getTargetData(t,e).next((s=>s?(i=s,jl.resolve(i)):n.Cs.allocateTargetId(t).next((s=>(i=new cf(e,s,0,t.currentSequenceNumber),n.Cs.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.qi.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(t.targetId,t),n.Ui.set(e,t.targetId)),t}))}async function Vf(t,e,n){const i=ll(t),s=i.qi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(t=>i.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!Bl(t))throw t;il("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.qi=i.qi.remove(e),i.Ui.delete(s.target)}function jf(t,e,n){const i=ll(t);let s=_l.min(),r=fd();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=ll(t),s=i.Ui.get(n);return void 0!==s?jl.resolve(i.qi.get(s)):i.Cs.getTargetData(e,n)}(i,t,uh(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,i.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>i.Li.getDocumentsMatchingQuery(t,e,n?s:_l.min(),n?r:fd()))).next((t=>(Bf(i,gh(e),t),{documents:t,Hi:r})))))}function Bf(t,e,n){let i=t.Ki.get(e)||_l.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.Ki.set(e,i)}class zf{er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=md()}}class qf{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,e,n){this.qr[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new zf,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.Lr=new zf,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
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
 */class Wf{Ur(t){}shutdown(){}}
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
 */class Hf{Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){il("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){il("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}}
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
 */const $f={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class Kf{Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}}
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
 */class Gf extends class{get co(){return!1}ao(t,e,n,i,s){const r=this.ho(t,e);il("RestConnection","Sending: ",r,n);const o={};return this.lo(o,i,s),this.fo(t,r,o,n).then((t=>(il("RestConnection","Received: ",t),t)),(e=>{throw rl("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}_o(t,e,n,i,s,r){return this.ao(t,e,n,i,s)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+tl,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=$f[t];return`${this.oo}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{fo(t,e,n,i){return new Promise(((s,r)=>{const o=new Jc;o.setWithCredentials(!0),o.listenOnce($c.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Hc.NO_ERROR:const e=o.getResponseJson();il("Connection","XHR received:",JSON.stringify(e)),s(e);break;case Hc.TIMEOUT:il("Connection",'RPC "'+t+'" timed out'),r(new hl(ul.DEADLINE_EXCEEDED,"Request time out"));break;case Hc.HTTP_ERROR:const n=o.getStatus();if(il("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ul).indexOf(e)>=0?e:ul.UNKNOWN}(e.status);r(new hl(t,e.message))}else r(new hl(ul.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new hl(ul.UNAVAILABLE,"Connection failed."));break;default:al()}}finally{il("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=qc(),r=Wc(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Qc({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=i.join("");il("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let l=!1,u=!1;const h=new Kf({Hr:t=>{u?il("Connection","Not sending because WebChannel is closed:",t):(l||(il("Connection","Opening WebChannel transport."),c.open(),l=!0),il("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,Xc.EventType.OPEN,(()=>{u||il("Connection","WebChannel transport opened.")})),d(c,Xc.EventType.CLOSE,(()=>{u||(u=!0,il("Connection","WebChannel transport closed"),h.io())})),d(c,Xc.EventType.ERROR,(t=>{u||(u=!0,rl("Connection","WebChannel transport errored:",t),h.io(new hl(ul.UNAVAILABLE,"The operation could not be completed")))})),d(c,Xc.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];cl(!!n);const i=n,s=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(s){il("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=Yh[t];if(void 0!==e)return ed(e)}(t),n=s.message;void 0===e&&(e=ul.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),u=!0,h.io(new hl(e,n)),c.close()}else il("Connection","WebChannel received:",n),h.ro(n)}})),d(r,Kc.STAT_EVENT,(t=>{t.stat===Gc.PROXY?il("Connection","Detected buffering proxy"):t.stat===Gc.NOPROXY&&il("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}}
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
 */function Qf(){return"undefined"!=typeof document?document:null}
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
 */function Xf(t){return new Sd(t,!0)}class Jf{reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),i=Math.max(0,e-n);i>0&&il("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}constructor(t,e,n=1e3,i=1.5,s=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}}
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
 */class Yf{No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===ul.RESOURCE_EXHAUSTED?(sl(e.toString()),sl("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===ul.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new hl(ul.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(t){return il("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(il("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,i,s,r,o,a){this.Hs=t,this.vo=n,this.Vo=i,this.connection=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Jf(t,e)}}class Zf extends Yf{jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:al()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(t,e){return t.wt?(cl(void 0===e||"string"==typeof e),Jl.fromBase64String(e||"")):(cl(void 0===e||e instanceof Uint8Array),Jl.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?ul.UNKNOWN:ed(t.code);return new hl(e,t.message||"")}(o);n=new wd(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Md(t,i.document.name),r=Ld(i.document.updateTime),o=i.document.createTime?Ld(i.document.createTime):_l.min(),a=new Gu({mapValue:{fields:i.document.fields}}),c=Xu.newFoundDocument(s,r,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new vd(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Md(t,i.document),r=i.readTime?Ld(i.readTime):_l.min(),o=Xu.newNoDocument(s,r),a=i.removedTargetIds||[];n=new vd([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Md(t,i.document),r=i.removedTargetIds||[];n=new vd([],r,s,null)}else{if(!("filter"in e))return al();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,s=new Jh(i),r=t.targetId;n=new bd(r,s)}}return n}(this.yt,t),n=function(t){if(!("targetChange"in t))return _l.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?_l.min():e.readTime?Ld(e.readTime):_l.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=Vd(this.yt),e.addTarget=function(t,e){let n;const i=e.target;return n=eh(i)?{documents:qd(t,i)}:{query:Wd(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Ad(t,e.resumeToken):e.snapshotVersion.compareTo(_l.min())>0&&(n.readTime=Nd(t,e.snapshotVersion.toTimestamp())),n}(this.yt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return al()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=Vd(this.yt),e.removeTarget=t,this.Bo(e)}constructor(t,e,n,i,s,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,r),this.yt=s}}class tp extends Yf{get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(cl(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const e=function(t,e){return t&&t.length>0?(cl(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Ld(t.updateTime):Ld(e);return n.isEqual(_l.min())&&(n=Ld(e)),new Oh(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Ld(t.commitTime);return this.listener.Zo(n,e)}return cl(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=Vd(this.yt),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>zd(this.yt,t)))};this.Bo(e)}constructor(t,e,n,i,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,r),this.yt=s,this.Jo=!1}}
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
 */class ep extends class{}{su(){if(this.nu)throw new hl(ul.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.ao(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ul.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new hl(ul.UNKNOWN,t.toString())}))}_o(t,e,n,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection._o(t,e,n,s,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ul.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new hl(ul.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.yt=i,this.nu=!1}}class np{uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(sl(e),this.ou=!1):il("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}}
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
 */class ip{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur((t=>{n.enqueueAndForget((async()=>{dp(this)&&(il("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ll(t);e._u.add(4),await rp(e),e.gu.set("Unknown"),e._u.delete(4),await sp(e)}(this))}))})),this.gu=new np(n,i)}}async function sp(t){if(dp(t))for(const e of t.wu)await e(!0)}async function rp(t){for(const e of t.wu)await e(!1)}function op(t,e){const n=ll(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),hp(n)?up(n):Ap(n).ko()&&cp(n,e))}function ap(t,e){const n=ll(t),i=Ap(n);n.du.delete(e),i.ko()&&lp(n,e),0===n.du.size&&(i.ko()?i.Fo():dp(n)&&n.gu.set("Unknown"))}function cp(t,e){t.yu.Ot(e.targetId),Ap(t).zo(e)}function lp(t,e){t.yu.Ot(e),Ap(t).Ho(e)}function up(t){t.yu=new kd({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Ap(t).start(),t.gu.uu()}function hp(t){return dp(t)&&!Ap(t).No()&&t.du.size>0}function dp(t){return 0===ll(t)._u.size}function fp(t){t.yu=void 0}async function pp(t){t.du.forEach(((e,n)=>{cp(t,e)}))}async function mp(t,e){fp(t),hp(t)?(t.gu.hu(e),up(t)):t.gu.set("Unknown")}async function gp(t,e,n){if(t.gu.set("Online"),e instanceof wd&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.du.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.du.delete(i),t.yu.removeTarget(i))}(t,e)}catch(n){il("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await yp(t,n)}else if(e instanceof vd?t.yu.Kt(e):e instanceof bd?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(_l.min()))try{const e=await Of(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.Zt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.du.get(i);s&&t.du.set(i,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(Jl.EMPTY_BYTE_STRING,n.snapshotVersion)),lp(t,e);const i=new cf(n.target,e,1,n.sequenceNumber);cp(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){il("RemoteStore","Failed to raise snapshot:",e),await yp(t,e)}}async function yp(t,e,n){if(!Bl(e))throw e;t._u.add(1),await rp(t),t.gu.set("Offline"),n||(n=()=>Of(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{il("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await sp(t)}))}function vp(t,e){return e().catch((n=>yp(t,n,e)))}async function bp(t){const e=ll(t),n=Rp(e);let i=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;wp(e);)try{const t=await Ff(e.localStore,i);if(null===t){0===e.fu.length&&n.Fo();break}i=t.batchId,xp(e,t)}catch(t){await yp(e,t)}kp(e)&&Tp(e)}function wp(t){return dp(t)&&t.fu.length<10}function xp(t,e){t.fu.push(e);const n=Rp(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function kp(t){return dp(t)&&!Rp(t).No()&&t.fu.length>0}function Tp(t){Rp(t).start()}async function Ip(t){Rp(t).eu()}async function Ep(t){const e=Rp(t);for(const n of t.fu)e.Xo(n.mutations)}async function _p(t,e,n){const i=t.fu.shift(),s=of.from(i,e,n);await vp(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await bp(t)}async function Cp(t,e){e&&Rp(t).Yo&&await async function(t,e){if(td(n=e.code)&&n!==ul.ABORTED){const n=t.fu.shift();Rp(t).Mo(),await vp(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await bp(t)}var n}(t,e),kp(t)&&Tp(t)}async function Sp(t,e){const n=ll(t);n.asyncQueue.verifyOperationInProgress(),il("RemoteStore","RemoteStore received new credentials");const i=dp(n);n._u.add(3),await rp(n),i&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await sp(n)}async function Np(t,e){const n=ll(t);e?(n._u.delete(2),await sp(n)):e||(n._u.add(2),await rp(n),n.gu.set("Unknown"))}function Ap(t){return t.pu||(t.pu=function(t,e,n){const i=ll(t);return i.su(),new Zf(e,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,n)}(t.datastore,t.asyncQueue,{Yr:pp.bind(null,t),Zr:mp.bind(null,t),Wo:gp.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Mo(),hp(t)?up(t):t.gu.set("Unknown")):(await t.pu.stop(),fp(t))}))),t.pu}function Rp(t){return t.Iu||(t.Iu=function(t,e,n){const i=ll(t);return i.su(),new tp(e,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,n)}(t.datastore,t.asyncQueue,{Yr:Ip.bind(null,t),Zr:Cp.bind(null,t),tu:Ep.bind(null,t),Zo:_p.bind(null,t)}),t.wu.push((async e=>{e?(t.Iu.Mo(),await bp(t)):(await t.Iu.stop(),t.fu.length>0&&(il("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))}))),t.Iu
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
 */}class Lp{static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new Lp(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new hl(ul.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new dl,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function Dp(t,e){if(sl("AsyncQueue",`${e}: ${t}`),Bl(t))return new hl(ul.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class Pp{static emptySet(t){return new Pp(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Pp))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Pp;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}constructor(t){this.comparator=t?(e,n)=>t(e,n)||Rl.comparator(e.key,n.key):(t,e)=>Rl.comparator(t.key,e.key),this.keyedMap=od(),this.sortedSet=new zu(this.comparator)}}
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
 */class Op{track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):al():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}constructor(){this.Tu=new zu(Rl.comparator)}}class Mp{static fromInitialDocuments(t,e,n,i,s){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new Mp(t,e,Pp.emptySet(e),r,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&dh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}constructor(t,e,n,i,s,r,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}}
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
 */class Fp{constructor(){this.Au=void 0,this.listeners=[]}}class Up{constructor(){this.queries=new nd((t=>fh(t)),dh),this.onlineState="Unknown",this.Ru=new Set}}async function Vp(t,e){const n=ll(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new Fp),s)try{r.Au=await n.onListen(i)}catch(t){const n=Dp(t,`Initialization of query '${ph(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&qp(n)}async function jp(t,e){const n=ll(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function Bp(t,e){const n=ll(t);let i=!1;for(const t of e){const e=t.query,s=n.queries.get(e);if(s){for(const e of s.listeners)e.Pu(t)&&(i=!0);s.Au=t}}i&&qp(n)}function zp(t,e,n){const i=ll(t),s=i.queries.get(e);if(s)for(const t of s.listeners)t.onError(n);i.queries.delete(e)}function qp(t){t.Ru.forEach((t=>{t.next()}))}class Wp{Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Mp(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=Mp.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}}
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
class Hp{constructor(t){this.key=t}}class $p{constructor(t){this.key=t}}class Kp{get ju(){return this.qu}Wu(t,e){const n=e?e.zu:new Op,i=e?e.Qu:this.Qu;let s=e?e.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const l=i.get(t),u=mh(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Hu(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Gu(u,a)>0||c&&this.Gu(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(r=r.add(u),s=d?s.add(t):s.delete(t)):(r=r.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Qu:r,zu:n,$i:o,mutatedKeys:s}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const s=t.zu.Eu();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return al()}};return n(t)-n(e)}(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const r=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==s.length||a?{snapshot:new Mp(this.query,t.Qu,i,s,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:r}:{Xu:r}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Op,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.qu=this.qu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.qu=this.qu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=fd(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new $p(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new Hp(n))})),e}tc(t){this.qu=t.Hi,this.Ku=fd();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return Mp.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}constructor(t,e){this.query=t,this.qu=e,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=fd(),this.mutatedKeys=fd(),this.Gu=yh(t),this.Qu=new Pp(this.Gu)}}class Gp{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Qp{constructor(t){this.key=t,this.nc=!1}}class Xp{get isPrimaryClient(){return!0===this.dc}constructor(t,e,n,i,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.sc={},this.ic=new nd((t=>fh(t)),dh),this.rc=new Map,this.oc=new Set,this.uc=new zu(Rl.comparator),this.cc=new Map,this.ac=new xf,this.hc={},this.lc=new Map,this.fc=mf.vn(),this.onlineState="Unknown",this.dc=void 0}}async function Jp(t,e){const n=mm(t);let i,s;const r=n.ic.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.ec();else{const t=await Uf(n.localStore,uh(e));n.isPrimaryClient&&op(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,s=await Yp(n,e,i,"current"===r,t.resumeToken)}return s}async function Yp(t,e,n,i,s){t._c=(e,n,i)=>async function(t,e,n,i){let s=e.view.Wu(n);s.$i&&(s=await jf(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,s))));const r=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,r);return lm(t,e.targetId,o.Xu),o.snapshot}(t,e,n,i);const r=await jf(t.localStore,e,!0),o=new Kp(e,r.Hi),a=o.Wu(r.documents),c=yd.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState,s),l=o.applyChanges(a,t.isPrimaryClient,c);lm(t,n,l.Xu);const u=new Gp(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function Zp(t,e){const n=ll(t),i=n.ic.get(e),s=n.rc.get(i.targetId);if(s.length>1)return n.rc.set(i.targetId,s.filter((t=>!dh(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Vf(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),ap(n.remoteStore,i.targetId),am(n,i.targetId)})).catch(Vl)):(am(n,i.targetId),await Vf(n.localStore,i.targetId,!0))}async function tm(t,e){const n=ll(t);try{const t=await function(t,e){const n=ll(t),i=e.snapshotVersion;let s=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.qi;const o=[];e.targetChanges.forEach(((r,a)=>{const c=s.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,r.addedDocuments,a))));let l=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?l=l.withResumeToken(Jl.EMPTY_BYTE_STRING,_l.min()).withLastLimboFreeSnapshotVersion(_l.min()):r.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(r.resumeToken,i)),s=s.insert(a,l),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,l,r)&&o.push(n.Cs.updateTargetData(t,l))}));let a=sd(),c=fd();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(Mf(t,r,e.documentUpdates).next((t=>{a=t.Wi,c=t.zi}))),!i.isEqual(_l.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return jl.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.qi=s,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.cc.get(e);i&&(cl(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.nc=!0:t.modifiedDocuments.size>0?cl(i.nc):t.removedDocuments.size>0&&(cl(i.nc),i.nc=!1))})),await dm(n,t,e)}catch(t){await Vl(t)}}function em(t,e,n){const i=ll(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.ic.forEach(((n,i)=>{const s=i.view.bu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=ll(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.bu(e)&&(i=!0)})),i&&qp(n)}(i.eventManager,e),t.length&&i.sc.Wo(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function nm(t,e,n){const i=ll(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.cc.get(e),r=s&&s.key;if(r){let t=new zu(Rl.comparator);t=t.insert(r,Xu.newNoDocument(r,_l.min()));const n=fd().add(r),s=new gd(_l.min(),new Map,new Hu(Tl),t,n);await tm(i,s),i.uc=i.uc.remove(r),i.cc.delete(e),hm(i)}else await Vf(i.localStore,e,!1).then((()=>am(i,e,n))).catch(Vl)}async function im(t,e){const n=ll(t),i=e.batch.batchId;try{const t=await function(t,e){const n=ll(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const s=n.batch,r=s.keys();let o=jl.resolve();return r.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);cl(null!==r),e.version.compareTo(r)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=fd();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);om(n,i,null),rm(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await dm(n,t)}catch(t){await Vl(t)}}async function sm(t,e,n){const i=ll(t);try{const t=await function(t,e){const n=ll(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(cl(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);om(i,e,n),rm(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await dm(i,t)}catch(n){await Vl(n)}}function rm(t,e){(t.lc.get(e)||[]).forEach((t=>{t.resolve()})),t.lc.delete(e)}function om(t,e,n){const i=ll(t);let s=i.hc[i.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),i.hc[i.currentUser.toKey()]=s}}function am(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.rc.get(e))t.ic.delete(i),n&&t.sc.wc(i,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||cm(t,e)}))}function cm(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(ap(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),hm(t))}function lm(t,e,n){for(const i of n)i instanceof Hp?(t.ac.addReference(i.key,e),um(t,i)):i instanceof $p?(il("SyncEngine","Document no longer in limbo: "+i.key),t.ac.removeReference(i.key,e),t.ac.containsKey(i.key)||cm(t,i.key)):al()}function um(t,e){const n=e.key,i=n.path.canonicalString();t.uc.get(n)||t.oc.has(i)||(il("SyncEngine","New document in limbo: "+n),t.oc.add(i),hm(t))}function hm(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new Rl(Sl.fromString(e)),i=t.fc.next();t.cc.set(i,new Qp(n)),t.uc=t.uc.insert(n,i),op(t.remoteStore,new cf(uh(sh(n.path)),i,2,zl.at))}}async function dm(t,e,n){const i=ll(t),s=[],r=[],o=[];i.ic.isEmpty()||(i.ic.forEach(((t,a)=>{o.push(i._c(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){s.push(t);const e=Af.Ci(a.targetId,t);r.push(e)}})))})),await Promise.all(o),i.sc.Wo(s),await async function(t,e){const n=ll(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>jl.forEach(e,(e=>jl.forEach(e.Si,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>jl.forEach(e.Di,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!Bl(t))throw t;il("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.qi.get(e),i=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(i);n.qi=n.qi.insert(e,s)}}}(i.localStore,r))}async function fm(t,e){const n=ll(t);if(!n.currentUser.isEqual(e)){il("SyncEngine","User change. New user:",e.toKey());const t=await Pf(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach((t=>{t.forEach((t=>{t.reject(new hl(ul.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.lc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await dm(n,t.ji)}}function pm(t,e){const n=ll(t),i=n.cc.get(e);if(i&&i.nc)return fd().add(i.key);{let t=fd();const i=n.rc.get(e);if(!i)return t;for(const e of i){const i=n.ic.get(e);t=t.unionWith(i.view.ju)}return t}}function mm(t){const e=ll(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pm.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nm.bind(null,e),e.sc.Wo=Bp.bind(null,e.eventManager),e.sc.wc=zp.bind(null,e.eventManager),e}function gm(t){const e=ll(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=im.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sm.bind(null,e),e}class ym{async initialize(t){this.yt=Xf(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return Df(this.persistence,new Rf,t.initialUser,this.yt)}yc(t){return new Cf(Nf.Bs,this.yt)}gc(t){return new qf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class vm{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>em(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=fm.bind(null,this.syncEngine),await Np(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Up}createDatastore(t){const e=Xf(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Gf(i));var i;return function(t,e,n,i){return new ep(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){var e,n,i,s,r;return e=this.localStore,n=this.datastore,i=t.asyncQueue,s=t=>em(this.syncEngine,t,0),r=Hf.C()?new Hf:new Wf,new ip(e,n,i,s,r)}createSyncEngine(t,e){return function(t,e,n,i,s,r,o){const a=new Xp(t,e,n,i,s,r);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ll(t);il("RemoteStore","RemoteStore shutting down."),e._u.add(5),await rp(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
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
 */function bm(t,e,n){if(!n)throw new hl(ul.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function wm(t){if(!Rl.isDocumentKey(t))throw new hl(ul.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xm(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":al()}function km(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new hl(ul.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xm(t);throw new hl(ul.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
const Tm=new Map;class Im{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new hl(ul.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new hl(ul.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new hl(ul.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
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
 */class Em{get app(){if(!this._app)throw new hl(ul.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new hl(ul.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Im(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new pl;switch(t.type){case"gapi":const e=t.client;return new vl(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new hl(ul.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Tm.get(t);e&&(il("ComponentProvider","Removing Datastore"),Tm.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Im({}),this._settingsFrozen=!1}}
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
class _m{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sm(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _m(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class Cm{withConverter(t){return new Cm(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class Sm extends Cm{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _m(this.firestore,null,new Rl(t))}withConverter(t){return new Sm(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,sh(n)),this._path=n,this.type="collection"}}function Nm(t,e,...n){if(t=Q(t),1===arguments.length&&(e=kl.R()),bm("doc","path",e),t instanceof Em){const i=Sl.fromString(e,...n);return wm(i),new _m(t,null,new Rl(i))}{if(!(t instanceof _m||t instanceof Sm))throw new hl(ul.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Sl.fromString(e,...n));return wm(i),new _m(t.firestore,t instanceof Sm?t.converter:null,new Rl(i))}}
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
class Am{next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):sl("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}constructor(t){this.observer=t,this.muted=!1}}
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
class Rm{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new hl(ul.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new dl;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Dp(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Zc.UNAUTHENTICATED,this.clientId=kl.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{il("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(il("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function Lm(t,e){t.asyncQueue.verifyOperationInProgress(),il("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await Pf(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Dm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Pm(t);il("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>Sp(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Sp(e.remoteStore,n))),t.onlineComponents=e}async function Pm(t){return t.offlineComponents||(il("FirestoreClient","Using default OfflineComponentProvider"),await Lm(t,new ym)),t.offlineComponents}async function Om(t){return t.onlineComponents||(il("FirestoreClient","Using default OnlineComponentProvider"),await Dm(t,new vm)),t.onlineComponents}function Mm(t){return Om(t).then((t=>t.syncEngine))}async function Fm(t){const e=await Om(t),n=e.eventManager;return n.onListen=Jp.bind(null,e.syncEngine),n.onUnlisten=Zp.bind(null,e.syncEngine),n}function Um(t,e,n={}){const i=new dl;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,s){const r=new Am({next:r=>{e.enqueueAndForget((()=>jp(t,o)));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new hl(ul.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new hl(ul.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:t=>s.reject(t)}),o=new Wp(sh(n.path),r,{includeMetadataChanges:!0,Nu:!0});return Vp(t,o)}(await Fm(t),t.asyncQueue,e,n,i))),i.promise}class Vm{get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const e=Qf();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise((()=>{}));const e=new dl;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Bl(t))throw t;il("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t);throw sl("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const i=Lp.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.Uc.push(i),i}zc(){this.Kc&&al()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Jf(this,"async_queue_retry"),this.Wc=()=>{const t=Qf();t&&il("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=Qf();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}}class jm extends Em{_terminate(){return this._firestoreClient||qm(this),this._firestoreClient.terminate()}constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Vm,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}}function Bm(t,e){const n="string"==typeof t?t:e||"(default)",i=Mt("object"==typeof t?t:Bt(),"firestore").getImmediate({identifier:n});if(!i._initialized){const t=S("firestore");t&&function(t,e,n,i={}){var s;const r=(t=km(t,Em))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==e&&rl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Zc.MOCK_USER;else{e=L(i.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new hl(ul.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Zc(r)}t._authCredentials=new ml(new fl(e,n))}}(i,...t)}return i}function zm(t){return t._firestoreClient||qm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function qm(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new ql(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Rm(t._authCredentials,t._appCheckCredentials,t._queue,i)}
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
class Wm{static fromBase64String(t){try{return new Wm(Jl.fromBase64String(t))}catch(t){throw new hl(ul.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Wm(Jl.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
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
 */class Hm{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new hl(ul.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Al(t)}}
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
class $m{constructor(t){this._methodName=t}}
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
 */class Km{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Tl(this._lat,t._lat)||Tl(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new hl(ul.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new hl(ul.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
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
 */const Gm=/^__.*__$/;class Qm{toMutation(t,e){return null!==this.fieldMask?new Hh(t,this.data,this.fieldMask,e,this.fieldTransforms):new Wh(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function Xm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw al()}}class Jm{get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Jm(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ia({path:n,oa:!1});return i.ua(t),i}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ia({path:n,oa:!1});return i.na(),i}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return lg(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(Xm(this.sa)&&Gm.test(t))throw this.ha('Document fields cannot begin and end with "__"')}constructor(t,e,n,i,s,r){this.settings=t,this.databaseId=e,this.yt=n,this.ignoreUndefinedProperties=i,void 0===s&&this.na(),this.fieldTransforms=s||[],this.fieldMask=r||[]}}class Ym{da(t,e,n,i=!1){return new Jm({sa:t,methodName:e,fa:n,path:Al.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.yt=n||Xf(t)}}function Zm(t){const e=t._freezeSettings(),n=Xf(t._databaseId);return new Ym(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tg(t,e,n,i,s,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,s);rg("Data must be an object, but it was:",o,i);const a=ig(i,o);let c,l;if(r.merge)c=new Ku(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const i of r.mergeFields){const s=og(e,i,n);if(!o.contains(s))throw new hl(ul.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);ug(t,s)||t.push(s)}c=new Ku(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new Qm(new Gu(a),c,l)}class eg extends $m{_toFieldTransform(t){return new Ph(t.path,new _h)}isEqual(t){return t instanceof eg}}function ng(t,e){if(sg(t=Q(t)))return rg("Unsupported field value:",e,t),ig(t,e);if(t instanceof $m)return function(t,e){if(!Xm(e.sa))throw e.ha(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ha(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const s of t){let t=ng(s,e.aa(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Q(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return xh(e.yt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=El.fromDate(t);return{timestampValue:Nd(e.yt,n)}}if(t instanceof El){const n=new El(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Nd(e.yt,n)}}if(t instanceof Km)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Wm)return{bytesValue:Ad(e.yt,t._byteString)};if(t instanceof _m){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Dd(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha(`Unsupported field value: ${xm(t)}`)}(t,e)}function ig(t,e){const n={};return Kl(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$l(t,((t,i)=>{const s=ng(i,e.ra(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function sg(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof El||t instanceof Km||t instanceof Wm||t instanceof _m||t instanceof $m)}function rg(t,e,n){if(!sg(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=xm(n);throw"an object"===i?e.ha(t+" a custom object"):e.ha(t+" "+i)}}function og(t,e,n){if((e=Q(e))instanceof Hm)return e._internalPath;if("string"==typeof e)return cg(t,e);throw lg("Field path arguments must be of type string or ",t,!1,void 0,n)}const ag=new RegExp("[~\\*/\\[\\]]");function cg(t,e,n){if(e.search(ag)>=0)throw lg(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hm(...e.split("."))._internalPath}catch(i){throw lg(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function lg(t,e,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new hl(ul.INVALID_ARGUMENT,a+t+c)}function ug(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class hg{get id(){return this._key.path.lastSegment()}get ref(){return new _m(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new dg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(fg("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,n,i,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=s}}class dg extends hg{data(){return super.data()}}function fg(t,e){return"string"==typeof e?cg(t,e):e instanceof Hm?e._internalPath:e._delegate._internalPath}
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
 */class pg{convertValue(t,e="none"){switch(ou(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tu(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(eu(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw al()}}convertObject(t,e){const n={};return $l(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new Km(tu(t.latitude),tu(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=iu(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(su(t));default:return null}}convertTimestamp(t){const e=Zl(t);return new El(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Sl.fromString(t);cl(tf(n));const i=new Wl(n.get(1),n.get(3)),s=new Rl(n.popFirst(5));return i.isEqual(e)||sl(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
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
 */function mg(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
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
class gg{isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}}class yg extends hg{exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new vg(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(fg("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}constructor(t,e,n,i,s,r){super(t,e,n,i,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}}class vg extends yg{data(t={}){return super.data(t)}}
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
function bg(t){t=km(t,_m);const e=km(t.firestore,jm);return Um(zm(e),t._key).then((n=>Tg(e,t,n)))}class wg extends pg{convertBytes(t){return new Wm(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new _m(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function xg(t,e,n){t=km(t,_m);const i=km(t.firestore,jm),s=mg(t.converter,e,n);return kg(i,[tg(Zm(i),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,Mh.none())])}function kg(t,e){return function(t,e){const n=new dl;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const i=gm(t);try{const t=await function(t,e){const n=ll(t),i=El.now(),s=e.reduce(((t,e)=>t.add(e.key)),fd());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=sd(),c=fd();return n.Gi.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{r=s;const o=[];for(const t of e){const e=zh(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new Hh(t.key,e,Qu(e.value.mapValue),Mh.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(r,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:ad(r)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.hc[t.currentUser.toKey()];i||(i=new zu(Tl)),i=i.insert(e,n),t.hc[t.currentUser.toKey()]=i}(i,t.batchId,n),await dm(i,t.changes),await bp(i.remoteStore)}catch(t){const e=Dp(t,"Failed to persist write");n.reject(e)}}(await Mm(t),e,n))),n.promise}(zm(t),e)}function Tg(t,e,n){const i=n.docs.get(e._key),s=new wg(t);return new yg(t,s,e._key,i,new gg(n.hasPendingWrites,n.fromCache),e.converter)}
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
 */!function(t,e=!0){tl=Vt,Ot(new X("firestore",((t,{instanceIdentifier:n,options:i})=>{const s=t.getProvider("app").getImmediate(),r=new jm(new gl(t.getProvider("auth-internal")),new wl(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new hl(ul.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wl(t.options.projectId,e)}(s,n),s);return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),zt(Yc,"3.8.3",t),zt(Yc,"3.8.3","esm2017")}();
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
const Ig="firebasestorage.googleapis.com",Eg="storageBucket";
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
class _g extends F{get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Rg(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}constructor(t,e,n=0){super(Rg(t),`Firebase Storage: ${e} (${Rg(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_g.prototype)}}var Cg,Sg,Ng,Ag;function Rg(t){return"storage/"+t}function Lg(){return new _g(Cg.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function Dg(){return new _g(Cg.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Pg(){return new _g(Cg.CANCELED,"User canceled the upload/download.")}function Og(t){return new _g(Cg.INVALID_ARGUMENT,t)}function Mg(){return new _g(Cg.APP_DELETED,"The Firebase app was deleted.")}(Sg=Cg||(Cg={})).UNKNOWN="unknown",Sg.OBJECT_NOT_FOUND="object-not-found",Sg.BUCKET_NOT_FOUND="bucket-not-found",Sg.PROJECT_NOT_FOUND="project-not-found",Sg.QUOTA_EXCEEDED="quota-exceeded",Sg.UNAUTHENTICATED="unauthenticated",Sg.UNAUTHORIZED="unauthorized",Sg.UNAUTHORIZED_APP="unauthorized-app",Sg.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",Sg.INVALID_CHECKSUM="invalid-checksum",Sg.CANCELED="canceled",Sg.INVALID_EVENT_NAME="invalid-event-name",Sg.INVALID_URL="invalid-url",Sg.INVALID_DEFAULT_BUCKET="invalid-default-bucket",Sg.NO_DEFAULT_BUCKET="no-default-bucket",Sg.CANNOT_SLICE_BLOB="cannot-slice-blob",Sg.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",Sg.NO_DOWNLOAD_URL="no-download-url",Sg.INVALID_ARGUMENT="invalid-argument",Sg.INVALID_ARGUMENT_COUNT="invalid-argument-count",Sg.APP_DELETED="app-deleted",Sg.INVALID_ROOT_OPERATION="invalid-root-operation",Sg.INVALID_FORMAT="invalid-format",Sg.INTERNAL_ERROR="internal-error",Sg.UNSUPPORTED_ENVIRONMENT="unsupported-environment";
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
class Fg{get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=Fg.makeFromUrl(t,e)}catch(e){return new Fg(t,"")}if(""===n.path)return n;throw i=t,new _g(Cg.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.");var i}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";const s=new RegExp("^gs://"+i+"(/(.*))?$","i");function r(t){t.path_=decodeURIComponent(t.path)}const o=e.replace(/[.]/g,"\\."),a=[{regex:s,indices:{bucket:1,path:3},postModify:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${i}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:r},{regex:new RegExp(`^https?://${e===Ig?"(?:storage.googleapis.com|storage.cloud.google.com)":e}/${i}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:r}];for(let e=0;e<a.length;e++){const i=a[e],s=i.regex.exec(t);if(s){const t=s[i.indices.bucket];let e=s[i.indices.path];e||(e=""),n=new Fg(t,e),i.postModify(n);break}}if(null==n)throw function(t){return new _g(Cg.INVALID_URL,"Invalid URL '"+t+"'.")}(t);return n}constructor(t,e){this.bucket=t,this.path_=e}}class Ug{getPromise(){return this.promise_}cancel(t=!1){}constructor(t){this.promise_=Promise.reject(t)}}
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
 */function Vg(t,e,n,i){if(i<e)throw Og(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Og(`Invalid value for '${t}'. Expected ${n} or less.`)}
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
 */function jg(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){n=n+(e(i)+"="+e(t[i]))+"&"}return n=n.slice(0,-1),n}
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
function Bg(t,e){const n=t>=500&&t<600,i=-1!==[408,429].indexOf(t),s=-1!==e.indexOf(t);return n||i||s}
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
 */(Ag=Ng||(Ng={}))[Ag.NO_ERROR=0]="NO_ERROR",Ag[Ag.NETWORK_ERROR=1]="NETWORK_ERROR",Ag[Ag.ABORT=2]="ABORT";class zg{start_(){const t=(t,e)=>{const n=this.resolve_,i=this.reject_,s=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(s,s.getResponse());void 0!==t?n(t):n()}catch(t){i(t)}else if(null!==s){const t=Lg();t.serverResponse=s.getErrorText(),this.errorCallback_?i(this.errorCallback_(s,t)):i(t)}else if(e.canceled){i(this.appDelete_?Mg():Pg())}else{i(Dg())}};this.canceled_?t(0,new qg(!1,null,!0)):this.backoffId_=function(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function c(){return 2===a}let l=!1;function u(...t){l||(l=!0,e.apply(null,t))}function h(e){s=setTimeout((()=>{s=null,t(f,c())}),e)}function d(){r&&clearTimeout(r)}function f(t,...e){if(l)return void d();if(t)return d(),void u.call(null,t,...e);if(c()||o)return d(),void u.call(null,t,...e);let n;i<64&&(i*=2),1===a?(a=2,n=0):n=1e3*(i+Math.random()),h(n)}let p=!1;function m(t){p||(p=!0,d(),l||(null!==s?(t||(a=2),clearTimeout(s),h(0)):t||(a=1)))}return h(0),r=setTimeout((()=>{o=!0,m(!0)}),n),m}(((t,e)=>{if(e)return void t(!1,new qg(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===Ng.NO_ERROR,s=n.getStatus();if(!e||Bg(s,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===Ng.ABORT;return void t(!1,new qg(!1,null,e))}const r=-1!==this.successCodes_.indexOf(s);t(!0,new qg(r,n))}))}),t,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}constructor(t,e,n,i,s,r,o,a,c,l,u,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=r,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}}class qg{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function Wg(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
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
class Hg{toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Hg(t,e)}get root(){const t=new Fg(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Wg(this._location.path)}get storage(){return this._service}get parent(){const t=
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
function(t){if(0===t.length)return null;const e=t.lastIndexOf("/");return-1===e?"":t.slice(0,e)}(this._location.path);if(null===t)return null;const e=new Fg(this._location.bucket,t);return new Hg(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw function(t){return new _g(Cg.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(t)}constructor(t,e){this._service=t,this._location=e instanceof Fg?e:Fg.makeFromUrl(e,t.host)}}function $g(t,e){const n=null==e?void 0:e[Eg];return null==n?null:Fg.makeFromBucketSpec(n,t)}class Kg{get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=Fg.makeFromBucketSpec(this._url,t):this._bucket=$g(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Vg("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Vg("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){return(await t.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Hg(this,t)}_makeRequest(t,e,n,i,s=!0){if(this._deleted)return new Ug(Mg());{const r=function(t,e,n,i,s,r,o=!0){const a=jg(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return function(t,e){e&&(t["X-Firebase-GMPID"]=e)}(l,e),function(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}(l,n),function(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!=e?e:"AppManager")}(l,r),function(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}(l,i),new zg(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}
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
 */(t,this._appId,n,i,e,this._firebaseVersion,s);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}constructor(t,e,n,i,s){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Ig,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?Fg.makeFromBucketSpec(i,this._host):$g(this._host,this.app.options)}}const Gg="@firebase/storage",Qg="0.11.1",Xg="storage";function Jg(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Kg(n,i,s,e,Vt)}Ot(new X(Xg,Jg,"PUBLIC").setMultipleInstances(!0)),zt(Gg,Qg,""),zt(Gg,Qg,"esm2017");function Yg(t){if(t){let t=Ks().currentUser.photoURL||"../images/profile_placeholder.png",n=Zg();Ce.userPicElement.style.backgroundImage="url("+((-1!==(e=t).indexOf("googleusercontent.com")&&-1===e.indexOf("?")?e+"?sz=150":e)+")"),Ce.userNameElement.textContent=n,Ce.userInfoElement.classList.remove("visually-hidden"),Ce.signOutButtonElement.classList.remove("visually-hidden"),Ce.signInButtonElement.classList.add("visually-hidden"),Be()}else Ce.userInfoElement.classList.add("visually-hidden"),Ce.signOutButtonElement.classList.add("visually-hidden"),Ce.signInButtonElement.classList.remove("visually-hidden");var e}function Zg(){return Ks().currentUser.displayName}var ty={};!function(t,e){"function"==typeof define&&define.amd?define([],(function(){return e(t)})):"object"==typeof ty?ty=e(t):t.Notiflix=e(t)}(void 0!==e?e:"undefined"!=typeof window?window:ty,(function(t){if(void 0===t&&void 0===t.document)return!1;var e,n="Success",i="Failure",s="Warning",r="Info",o={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},a=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},c=function(e){return e||(e="head"),null!==t.document[e]||(a('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},l=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e&&"[object Object]"===Object.prototype.toString.call(n[i])?t[i]=l(t[i],n[i]):t[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return t},u=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},h=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},d=function(a,h,d,p,m,g){if(!c("body"))return!1;e||f.Report.init({});var y={};if("object"==typeof m&&!Array.isArray(m)||"object"==typeof g&&!Array.isArray(g)){var v={};"object"==typeof m?v=m:"object"==typeof g&&(v=g),y=l(!0,e,{}),e=l(!0,e,v)}var b=e[a.toLocaleLowerCase("en")];"string"!=typeof h&&(h="Notiflix "+a),"string"!=typeof d&&(a===n?d='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':a===i?d='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':a===s?d='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':a===r&&(d='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof p&&(p="Okay"),e.plainText&&(h=u(h),d=u(d),p=u(p)),e.plainText||(h.length>e.titleMaxLength&&(h="Possible HTML Tags Error",d='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',p="Okay"),d.length>e.messageMaxLength&&(h="Possible HTML Tags Error",d='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',p="Okay"),p.length>e.buttonMaxLength&&(h="Possible HTML Tags Error",d='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',p="Okay")),h.length>e.titleMaxLength&&(h=h.substring(0,e.titleMaxLength)+"..."),d.length>e.messageMaxLength&&(d=d.substring(0,e.messageMaxLength)+"..."),p.length>e.buttonMaxLength&&(p=p.substring(0,e.buttonMaxLength)+"..."),e.cssAnimation||(e.cssAnimationDuration=0);var w=t.document.createElement("div");w.id=o.ID,w.className=e.className,w.style.zIndex=e.zindex,w.style.borderRadius=e.borderRadius,w.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.rtl&&(w.setAttribute("dir","rtl"),w.classList.add("nx-rtl-on")),w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.alignItems="center",w.style.justifyContent="center";var x="",k=!0===e.backOverlayClickToClose;e.backOverlay&&(x='<div class="'+e.className+"-overlay"+(e.cssAnimation?" nx-with-animation":"")+(k?" nx-report-click-to-close":"")+'" style="background:'+(b.backOverlayColor||e.backOverlayColor)+";animation-duration:"+e.cssAnimationDuration+'ms;"></div>');var T,I,E="";if(a===n?(T=e.svgSize,I=b.svgColor,T||(T="110px"),I||(I="#32c682"),E='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+T+'" height="'+T+'" fill="'+I+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):a===i?E=function(t,e){return t||(t="110px"),e||(e="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(e.svgSize,b.svgColor):a===s?E=function(t,e){return t||(t="110px"),e||(e="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(e.svgSize,b.svgColor):a===r&&(E=function(t,e){return t||(t="110px"),e||(e="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(e.svgSize,b.svgColor)),w.innerHTML=x+'<div class="'+e.className+"-content"+(e.cssAnimation?" nx-with-animation ":"")+" nx-"+e.cssAnimationStyle+'" style="width:'+e.width+"; background:"+e.backgroundColor+"; animation-duration:"+e.cssAnimationDuration+'ms;"><div style="width:'+e.svgSize+"; height:"+e.svgSize+';" class="'+e.className+'-icon">'+E+'</div><h5 class="'+e.className+'-title" style="font-weight:500; font-size:'+e.titleFontSize+"; color:"+b.titleColor+';">'+h+'</h5><p class="'+e.className+'-message" style="font-size:'+e.messageFontSize+"; color:"+b.messageColor+';">'+d+'</p><a id="NXReportButton" class="'+e.className+'-button" style="font-weight:500; font-size:'+e.buttonFontSize+"; background:"+b.buttonBackground+"; color:"+b.buttonColor+';">'+p+"</a></div>",!t.document.getElementById(w.id)){t.document.body.appendChild(w);var _=function(){var n=t.document.getElementById(w.id);n.classList.add("nx-remove");var i=setTimeout((function(){null!==n.parentNode&&n.parentNode.removeChild(n),clearTimeout(i)}),e.cssAnimationDuration)};if(t.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof m&&m(),_()})),x&&k)t.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){_()}))}e=l(!0,e,y)},f={Report:{init:function(n){e=l(!0,o,n),function(e,n){if(!c("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}}(h,"NotiflixReportInternalCSS")},merge:function(t){if(!e)return a("You have to initialize the Report module before call Merge function."),!1;e=l(!0,e,t)},success:function(t,e,i,s,r){d(n,t,e,i,s,r)},failure:function(t,e,n,s,r){d(i,t,e,n,s,r)},warning:function(t,e,n,i,r){d(s,t,e,n,i,r)},info:function(t,e,n,i,s){d(r,t,e,n,i,s)}}};return"object"==typeof t.Notiflix?l(!0,t.Notiflix,{Report:f.Report}):{Report:f.Report}})),Pe.getGenres().then((t=>{localStorage.setItem("GENRES",JSON.stringify(t))})).catch((t=>console.log(t))),Oe.start(),Pe.getTrendMovie().then((t=>{const e=De.getDataTrendMovies(t.results),n=(0,me.createMarkupFilmsList)(e);Ce.moviesList.innerHTML=n,Te(t)})).catch((t=>console.log(t))).finally((()=>{Oe.stop()}));const ey=function(){if(ne&&ne.apiKey)return ne;throw new Error("No Firebase configuration object provided.\nAdd your web app's configuration object to firebase-config.js")}(),ny=new class{async signIn(){const t=new fi;await is(Ks(),t)}async signOutUser(){var t;await(t=Ks(),Q(t).signOut())}initFirebaseAuth(){var t,e,n,i;t=Ks(),e=Yg,Q(t).onAuthStateChanged(e,n,i)}isUserSignedIn(){return!!Ks().currentUser}async saveMovieData(t,e){if(!this.isUserSignedIn())throw"No autenteficate";const n=Ks().currentUser.uid,i=Nm(Bm(),this.NAME_COLLECTION_FILESTORAGE,e+n),s={name:Zg(),timestamp:new eg("serverTimestamp"),arrFilms:t};try{await xg(i,s)}catch(t){console.error("Error add new movie to Firebase Database",t)}}async readMovieData(t){if(!this.isUserSignedIn())return[];const e=Ks().currentUser.uid,n=Nm(Bm(),this.NAME_COLLECTION_FILESTORAGE,t+e),i=await bg(n);return i.exists()?i.data():[]}constructor(){this.NAME_COLLECTION_FILESTORAGE="storage_filmoteka"}};Ce.signInWithGoogle.addEventListener("click",ny.signIn),Ce.signOutButtonElement.addEventListener("click",ny.signOutUser),Ce.libraryLink.addEventListener("click",(async function(){if(!await ny.isUserSignedIn())return ty.Report.warning("Please sign in to your account!","","Okay");Ce.libraryLink.setAttribute("href","./library.html")})),jt(ey),ny.initFirebaseAuth();
//# sourceMappingURL=index.6205d3e9.js.map
