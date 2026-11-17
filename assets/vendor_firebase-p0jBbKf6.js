var Ug=Object.defineProperty;var Hg=(r,e,t)=>e in r?Ug(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var U=(r,e,t)=>Hg(r,typeof e!="symbol"?e+"":e,t);const Jg=()=>{};var Ol={};/**
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
 */const Vf=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},qg=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],B=r[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|B&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,B=o?r[s+1]:0,c=s+2<r.length,u=c?r[s+2]:0,h=i>>2,d=(i&3)<<4|B>>4;let E=(B&15)<<2|u>>6,v=u&63;c||(v=64,o||(E=64)),n.push(t[h],t[d],t[E],t[v])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Vf(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):qg(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],B=s<r.length?t[r.charAt(s)]:0;++s;const u=s<r.length?t[r.charAt(s)]:64;++s;const d=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||B==null||u==null||d==null)throw new jg;const E=i<<2|B>>4;if(n.push(E),u!==64){const v=B<<4&240|u>>2;if(n.push(v),d!==64){const P=u<<6&192|d;n.push(P)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class jg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kg=function(r){const e=Vf(r);return Mf.encodeByteArray(e,!0)},Jo=function(r){return Kg(r).replace(/\./g,"")},Gf=function(r){try{return Mf.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Wg=()=>zg().__FIREBASE_DEFAULTS__,Qg=()=>{if(typeof process>"u"||typeof Ol>"u")return;const r=Ol.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},$g=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Gf(r[1]);return e&&JSON.parse(e)},la=()=>{try{return Jg()||Wg()||Qg()||$g()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Uf=r=>la()?.emulatorHosts?.[r],Yg=r=>{const e=Uf(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Hf=()=>la()?.config,Jf=r=>la()?.[`_${r}`];/**
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
 */class qf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function Xg(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Jo(JSON.stringify(t)),Jo(JSON.stringify(o)),""].join(".")}/**
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
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function em(){const r=la()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nm(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function rm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sm(){const r=it();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function im(){return!em()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function om(){try{return typeof indexedDB=="object"}catch{return!1}}function am(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const Bm="FirebaseError";class yn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Bm,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xi.prototype.create)}}class xi{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?cm(i,n):"Error",B=`${this.serviceName}: ${o} (${s}).`;return new yn(s,B,n)}}function cm(r,e){try{let t=0,n="";for(;t<r.length;){const s=r.indexOf("{$",t);if(s===-1){n+=r.substring(t);break}const i=r.indexOf("}",s+2);if(i===-1){n+=r.substring(t);break}const o=r.substring(s+2,i),B=e[o];n+=r.substring(t,s)+(B!=null?String(B):`<${o}?>`),t=i+1}return n}catch{return r}}function um(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Dr(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(Ll(i)&&Ll(o)){if(!Dr(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Ll(r){return r!==null&&typeof r=="object"}/**
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
 */function us(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function qs(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function js(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function lm(r,e){const t=new hm(r,e);return t.subscribe.bind(t)}class hm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");fm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=hB),s.error===void 0&&(s.error=hB),s.complete===void 0&&(s.complete=hB);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fm(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function hB(){}/**
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
 */function re(r){return r&&r._delegate?r._delegate:r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jf(r){return(await fetch(r,{credentials:"include"})).ok}class Ir{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ur="[DEFAULT]";/**
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
 */class dm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new qf;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pm(e))try{this.getOrInitializeService({instanceIdentifier:ur})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ur){return this.instances.has(e)}getOptions(e=ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const B=this.normalizeInstanceIdentifier(i);n===B&&o.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Cm(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=ur){return this.component?this.component.multipleInstances?e:ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cm(r){return r===ur?void 0:r}function pm(r){return r.instantiationMode==="EAGER"}/**
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
 */class gm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new dm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ue||(ue={}));const mm={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Em=ue.INFO,_m={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Dm=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=_m[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lc{constructor(e){this.name=e,this._logLevel=Em,this._logHandler=Dm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Im=(r,e)=>e.some(t=>r instanceof t);let Fl,kl;function ym(){return Fl||(Fl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tm(){return kl||(kl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kf=new WeakMap,FB=new WeakMap,zf=new WeakMap,fB=new WeakMap,hc=new WeakMap;function wm(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Mn(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Kf.set(t,r)}).catch(()=>{}),hc.set(e,r),e}function Am(r){if(FB.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});FB.set(r,e)}let kB={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return FB.get(r);if(e==="objectStoreNames")return r.objectStoreNames||zf.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Mn(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function vm(r){kB=r(kB)}function Rm(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(dB(this),e,...t);return zf.set(n,e.sort?e.sort():[e]),Mn(n)}:Tm().includes(r)?function(...e){return r.apply(dB(this),e),Mn(Kf.get(this))}:function(...e){return Mn(r.apply(dB(this),e))}}function bm(r){return typeof r=="function"?Rm(r):(r instanceof IDBTransaction&&Am(r),Im(r,ym())?new Proxy(r,kB):r)}function Mn(r){if(r instanceof IDBRequest)return wm(r);if(fB.has(r))return fB.get(r);const e=bm(r);return e!==r&&(fB.set(r,e),hc.set(e,r)),e}const dB=r=>hc.get(r);function Pm(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),B=Mn(o);return n&&o.addEventListener("upgradeneeded",c=>{n(Mn(o.result),c.oldVersion,c.newVersion,Mn(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),B.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),B}const Sm=["get","getKey","getAll","getAllKeys","count"],Nm=["put","add","delete","clear"],CB=new Map;function xl(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(CB.get(e))return CB.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Nm.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Sm.includes(t)))return;const i=async function(o,...B){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(B.shift())),(await Promise.all([u[t](...B),s&&c.done]))[0]};return CB.set(e,i),i}vm(r=>({...r,get:(e,t,n)=>xl(e,t)||r.get(e,t,n),has:(e,t)=>!!xl(e,t)||r.has(e,t)}));/**
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
 */class Om{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Lm(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Lm(r){return r.getComponent()?.type==="VERSION"}const xB="@firebase/app",Vl="0.16.3";/**
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
 */const gn=new lc("@firebase/app"),Fm="@firebase/app-compat",km="@firebase/analytics-compat",xm="@firebase/analytics",Vm="@firebase/app-check-compat",Mm="@firebase/app-check",Gm="@firebase/auth",Um="@firebase/auth-compat",Hm="@firebase/database",Jm="@firebase/data-connect",qm="@firebase/database-compat",jm="@firebase/functions",Km="@firebase/functions-compat",zm="@firebase/installations",Wm="@firebase/installations-compat",Qm="@firebase/messaging",$m="@firebase/messaging-compat",Ym="@firebase/performance",Xm="@firebase/performance-compat",Zm="@firebase/remote-config",eE="@firebase/remote-config-compat",tE="@firebase/storage",nE="@firebase/storage-compat",rE="@firebase/firestore",sE="@firebase/ai",iE="@firebase/firestore-compat",oE="firebase",aE="13.0.0";/**
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
 */const VB="[DEFAULT]",BE={[xB]:"fire-core",[Fm]:"fire-core-compat",[xm]:"fire-analytics",[km]:"fire-analytics-compat",[Mm]:"fire-app-check",[Vm]:"fire-app-check-compat",[Gm]:"fire-auth",[Um]:"fire-auth-compat",[Hm]:"fire-rtdb",[Jm]:"fire-data-connect",[qm]:"fire-rtdb-compat",[jm]:"fire-fn",[Km]:"fire-fn-compat",[zm]:"fire-iid",[Wm]:"fire-iid-compat",[Qm]:"fire-fcm",[$m]:"fire-fcm-compat",[Ym]:"fire-perf",[Xm]:"fire-perf-compat",[Zm]:"fire-rc",[eE]:"fire-rc-compat",[tE]:"fire-gcs",[nE]:"fire-gcs-compat",[rE]:"fire-fst",[iE]:"fire-fst-compat",[sE]:"fire-vertex","fire-js":"fire-js",[oE]:"fire-js-all"};/**
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
 */const ui=new Map,cE=new Map,MB=new Map;function Ml(r,e){try{r.container.addComponent(e)}catch(t){gn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function es(r){const e=r.name;if(MB.has(e))return gn.debug(`There were multiple attempts to register component ${e}.`),!1;MB.set(e,r);for(const t of ui.values())Ml(t,r);for(const t of cE.values())Ml(t,r);return!0}function fc(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Pe(r){return r==null?!1:r.settings!==void 0}/**
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
 */const uE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bn=new xi("app","Firebase",uE);/**
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
 */class lE{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
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
 */const ls=aE;function hE(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:VB,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw Bn.create("bad-app-name",{appName:String(s)});if(t||(t=Hf()),!t)throw Bn.create("no-options");const i=ui.get(s);if(i)if(Dr(t,i.options)){if(Dr(n,i.config))return i;throw Bn.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(n)})}else throw Bn.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new gm(s);for(const c of MB.values())o.addComponent(c);const B=new lE(t,n,o);return ui.set(s,B),B}function Wf(r=VB){const e=ui.get(r);if(!e&&r===VB&&Hf())return hE();if(!e)throw Bn.create("no-app",{appName:r});return e}function Pv(){return Array.from(ui.values())}function Gn(r,e,t){let n=BE[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gn.warn(o.join(" "));return}es(new Ir(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const fE="firebase-heartbeat-database",dE=1,li="firebase-heartbeat-store";let pB=null;function Qf(){return pB||(pB=Pm(fE,dE,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(li)}catch(t){console.warn(t)}}}}).catch(r=>{throw Bn.create("idb-open",{originalErrorMessage:r.message})})),pB}async function CE(r){try{const t=(await Qf()).transaction(li),n=await t.objectStore(li).get($f(r));return await t.done,n}catch(e){if(e instanceof yn)gn.warn(e.message);else{const t=Bn.create("idb-get",{originalErrorMessage:e?.message});gn.warn(t.message)}}}async function Gl(r,e){try{const n=(await Qf()).transaction(li,"readwrite");await n.objectStore(li).put(e,$f(r)),await n.done}catch(t){if(t instanceof yn)gn.warn(t.message);else{const n=Bn.create("idb-set",{originalErrorMessage:t?.message});gn.warn(n.message)}}}function $f(r){return`${r.name}!${r.options.appId}`}/**
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
 */const pE=1024,gE=30;class mE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _E(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Ul();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(s=>s.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats.length>gE){const s=DE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){gn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ul(),{heartbeatsToSend:t,unsentEntries:n}=EE(this._heartbeatsCache.heartbeats),s=Jo(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return gn.warn(e),""}}}function Ul(){return new Date().toISOString().substring(0,10)}function EE(r,e=pE){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Hl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Hl(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class _E{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return om()?am().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await CE(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Gl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Gl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Hl(r){return Jo(JSON.stringify({version:2,heartbeats:r})).length}function DE(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
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
 */function IE(r){es(new Ir("platform-logger",e=>new Om(e),"PRIVATE")),es(new Ir("heartbeat",e=>new mE(e),"PRIVATE")),Gn(xB,Vl,r),Gn(xB,Vl,"esm2020"),Gn("fire-js","")}/**
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
 */IE("");var yE="firebase",TE="13.0.0";/**
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
 */Gn(yE,TE,"app");/**
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
 */const wE={PHONE:"phone",TOTP:"totp"},AE={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},vE={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},RE={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},bE={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function PE(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function Yf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SE=PE,Xf=Yf,Zf=new xi("auth","Firebase",Yf()),NE={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_PASSWORD:"auth/missing-password",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
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
 */const qo=new lc("@firebase/auth");function Po(r,...e){qo.logLevel<=ue.WARN&&qo.warn(`Auth (${ls}): ${r}`,...e)}function So(r,...e){qo.logLevel<=ue.ERROR&&qo.error(`Auth (${ls}): ${r}`,...e)}/**
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
 */function mt(r,...e){throw dc(r,...e)}function lt(r,...e){return dc(r,...e)}function ha(r,e,t){const n={...Xf(),[e]:t};return new xi("auth","Firebase",n).create(e,{appName:r.name})}function Ye(r){return ha(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hs(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&mt(r,"argument-error"),ha(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function dc(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Zf.create(r,...e)}function G(r,e,...t){if(!r)throw dc(e,...t)}function Ht(r){const e="INTERNAL ASSERTION FAILED: "+r;throw So(e),new Error(e)}function mn(r,e){r||Ht(e)}/**
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
 */function hi(){return typeof self<"u"&&self.location?.href||""}function Cc(){return Jl()==="http:"||Jl()==="https:"}function Jl(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function OE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cc()||nm()||"connection"in navigator)?navigator.onLine:!0}function LE(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Mi{constructor(e,t){this.shortDelay=e,this.longDelay=t,mn(t>e,"Short delay should be less than long delay!"),this.isMobile=Zg()||rm()}get(){return OE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pc(r,e){mn(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ed{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const FE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xE=new Mi(3e4,6e4);function we(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Ae(r,e,t,n,s={}){return td(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const B=us({...o,key:r.config.apiKey}).slice(1),c=await r._getAdditionalHeaders();c["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode);const u={method:e,headers:c,...i};return tm()||(u.referrerPolicy="strict-origin-when-cross-origin"),r.emulatorConfig&&Vi(r.emulatorConfig.host)&&(u.credentials="include"),ed.fetch()(await nd(r,r.config.apiHost,t,B),u)})}async function td(r,e,t){r._canInitEmulator=!1;const n={...FE,...e};try{const s=new ME(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ks(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const B=i.ok?o.errorMessage:o.error.message,[c,u]=B.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ks(r,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ks(r,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ks(r,"user-disabled",o);const h=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ha(r,h,u);mt(r,h)}}catch(s){if(s instanceof yn)throw s;mt(r,"network-request-failed",{message:String(s)})}}async function Tn(r,e,t,n,s={}){const i=await Ae(r,e,t,n,s);return"mfaPendingCredential"in i&&mt(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function nd(r,e,t,n){const s=`${e}${t}?${n}`,i=r,o=i.config.emulator?pc(r.config,s):`${r.config.apiScheme}://${s}`;return kE.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function VE(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ME{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(lt(this.auth,"network-request-failed")),xE.get())})}}function Ks(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=lt(r,e,n);return s.customData._tokenResponse=t,s}/**
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
 */function ql(r){return r!==void 0&&r.getResponse!==void 0}function jl(r){return r!==void 0&&r.enterprise!==void 0}class rd{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return VE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function GE(r){return(await Ae(r,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function sd(r,e){return Ae(r,"GET","/v2/recaptchaConfig",we(r,e))}/**
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
 */async function UE(r,e){return Ae(r,"POST","/v1/accounts:delete",e)}async function HE(r,e){return Ae(r,"POST","/v1/accounts:update",e)}async function jo(r,e){return Ae(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ys(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
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
 */function JE(r,e=!1){return re(r).getIdToken(e)}async function id(r,e=!1){const t=re(r),n=await t.getIdToken(e),s=fa(n);G(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:n,authTime:Ys(gB(s.auth_time)),issuedAtTime:Ys(gB(s.iat)),expirationTime:Ys(gB(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function gB(r){return Number(r)*1e3}function fa(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return So("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gf(t);return s?JSON.parse(s):(So("Failed to decode base64 JWT payload"),null)}catch(s){return So("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Kl(r){const e=fa(r);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function En(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof yn&&qE(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function qE({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class jE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class GB{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ys(this.lastLoginAt),this.creationTime=Ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fi(r){const e=r.auth,t=await r.getIdToken(),n=await En(r,jo(e,{idToken:t}));G(n?.users.length,e,"internal-error");const s=n.users[0];r._notifyReloadListener(s);const i=s.providerUserInfo?.length?ad(s.providerUserInfo):[],o=KE(r.providerData,i),B=r.isAnonymous,c=!(r.email&&s.passwordHash)&&!o?.length,u=B?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new GB(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(r,h)}async function od(r){const e=re(r);await fi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KE(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function ad(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function zE(r,e){const t=await td(r,{},async()=>{const n=us({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=await nd(r,s,"/v1/token",`key=${i}`),B=await r._getAdditionalHeaders();B["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:B,body:n};return r.emulatorConfig&&Vi(r.emulatorConfig.host)&&(c.credentials="include"),ed.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function WE(r,e){return Ae(r,"POST","/v2/accounts:revokeToken",we(r,e))}/**
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
 */class Wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=Kl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await zE(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new Wr;return n&&(G(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wr,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
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
 */function Nn(r,e){G(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Ft{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new jE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new GB(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await En(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return id(this,e)}reload(){return od(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ft({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await fi(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pe(this.auth.app))return Promise.reject(Ye(this.auth));const e=await this.getIdToken();return await En(this,UE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,B=t.tenantId??void 0,c=t._redirectEventId??void 0,u=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:d,emailVerified:E,isAnonymous:v,providerData:P,stsTokenManager:V}=t;G(d&&V,e,"internal-error");const M=Wr.fromJSON(this.name,V);G(typeof d=="string",e,"internal-error"),Nn(n,e.name),Nn(s,e.name),G(typeof E=="boolean",e,"internal-error"),G(typeof v=="boolean",e,"internal-error"),Nn(i,e.name),Nn(o,e.name),Nn(B,e.name),Nn(c,e.name),Nn(u,e.name),Nn(h,e.name);const W=new Ft({uid:d,auth:e,email:s,emailVerified:E,displayName:n,isAnonymous:v,photoURL:o,phoneNumber:i,tenantId:B,stsTokenManager:M,createdAt:u,lastLoginAt:h});return P&&Array.isArray(P)&&(W.providerData=P.map(Be=>({...Be}))),c&&(W._redirectEventId=c),W}static async _fromIdTokenResponse(e,t,n=!1){const s=new Wr;s.updateFromServerResponse(t);const i=new Ft({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await fi(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];G(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ad(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,B=new Wr;B.updateFromIdToken(n);const c=new Ft({uid:s.localId,auth:e,stsTokenManager:B,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new GB(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
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
 */const zl=new Map;function cn(r){mn(r instanceof Function,"Expected a class definition");let e=zl.get(r);return e?(mn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,zl.set(r,e),e)}/**
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
 */class Bd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Bd.type="NONE";const UB=Bd;/**
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
 */function No(r,e,t){return`firebase:${r}:${e}:${t}`}class gr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=No(this.userKey,s.apiKey,i),this.fullPersistenceKey=No("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await jo(this.auth,{idToken:e}).catch(()=>{});return t?Ft._fromGetAccountInfoResponse(this.auth,t,e):null}return Ft._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,n="authUser"){if(!t.length)return new gr(cn(UB),e,n);const s=(await Promise.all(t.map(async u=>{try{if(await u._isAvailable())return u}catch{return}}))).filter(u=>u);let i=s[0]||cn(UB);const o=No(n,e.config.apiKey,e.name);let B=null;for(const u of t)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const E=await jo(e,{idToken:h}).catch(()=>{});if(!E)break;d=await Ft._fromGetAccountInfoResponse(e,E,h)}else d=Ft._fromJSON(e,h);u!==i&&(B=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new gr(i,e,n):(i=c[0],B&&await i._set(o,B.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new gr(i,e,n))}}/**
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
 */function Wl(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dd(e))return"Blackberry";if(Cd(e))return"Webos";if(ud(e))return"Safari";if((e.includes("chrome/")||ld(e))&&!e.includes("edge/"))return"Chrome";if(fd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if(n?.length===2)return n[1]}return"Other"}function cd(r=it()){return/firefox\//i.test(r)}function ud(r=it()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ld(r=it()){return/crios\//i.test(r)}function hd(r=it()){return/iemobile/i.test(r)}function fd(r=it()){return/android/i.test(r)}function dd(r=it()){return/blackberry/i.test(r)}function Cd(r=it()){return/webos/i.test(r)}function gc(r=it()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function QE(r=it()){return gc(r)&&!!window.navigator?.standalone}function $E(){return sm()&&document.documentMode===10}function pd(r=it()){return gc(r)||fd(r)||Cd(r)||dd(r)||/windows phone/i.test(r)||hd(r)}/**
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
 */function gd(r,e=[]){let t;switch(r){case"Browser":t=Wl(it());break;case"Worker":t=`${Wl(it())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ls}/${n}`}/**
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
 */class YE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,B)=>{try{const c=e(i);o(c)}catch(c){B(c)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XE(r,e={}){return Ae(r,"GET","/v2/passwordPolicy",we(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=6;class e_{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??ZE,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class t_{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ql(this),this.idTokenSubscription=new Ql(this),this.beforeStateQueue=new YE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=cn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted){try{this.persistenceManager=await gr.create(this,e)}catch(n){Po(`Failed to initialize persistence: ${n}`),this.persistenceManager=await gr.create(this,[])}finally{this._resolvePersistenceManagerAvailable?.()}if(!this._deleted){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(n){Po(`Failed to initialize current user: ${n}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await jo(this,{idToken:e}),n=await Ft._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Pe(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=n?._redirectEventId,B=await this.tryRedirectSignIn(e);(!i||i===o)&&B?.user&&(n=B.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(i){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await fi(e)}catch(t){const n=t?.code;if(n!=="auth/network-request-failed"&&n!=="auth/too-many-requests"&&!n?.startsWith("auth/quota-exceeded"))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pe(this.app))return Promise.reject(Ye(this));const t=e?re(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pe(this.app)?Promise.reject(Ye(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pe(this.app)?Promise.reject(Ye(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await XE(this),t=new e_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await WE(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&cn(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await gr.create(this,[cn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const B=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(B,this,"internal-error"),B.then(()=>{o||i(this.currentUser)}).catch(c=>{if(!o)if(typeof t!="function"&&t.error)t.error(c);else if(n)n(c);else throw c}),typeof t=="function"){const c=e.addObserver(t,n,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const n=t?.message||String(t),s=ha(this,"internal-error",`An internal AuthError has occurred: ${n}`);throw s.customData={originalError:t},s}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(Pe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Po(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Le(r){return re(r)}class Ql{constructor(e){this.auth=e,this.observer=null,this.addObserver=lm(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Gi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function n_(r){Gi=r}function mc(r){return Gi.loadJS(r)}function r_(){return Gi.recaptchaV2Script}function s_(){return Gi.recaptchaEnterpriseScript}function i_(){return Gi.gapiScript}function md(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */const o_=500,a_=6e4,po=1e12;class B_{constructor(e){this.auth=e,this.counter=po,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new l_(e,this.auth.name,t||{})),this.counter++,n}reset(e){const t=e||po;this._widgets.get(t)?.delete(),this._widgets.delete(t)}getResponse(e){const t=e||po;return this._widgets.get(t)?.getResponse()||""}async execute(e){const t=e||po;return this._widgets.get(t)?.execute(),""}}class c_{constructor(){this.enterprise=new u_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class u_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class l_{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;G(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=h_(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},a_)},o_))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function h_(r){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<r;n++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const f_="recaptcha-enterprise",Xs="NO_RECAPTCHA",$l="onFirebaseAuthREInstanceReady";class tn{constructor(e){this.type=f_,this.auth=Le(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,B)=>{sd(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)B(new Error("recaptcha Enterprise site key undefined"));else{const u=new rd(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{B(c)})})}function s(i,o,B){const c=window.grecaptcha;jl(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Xs)})}):B(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new c_().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{n(this.auth).then(async B=>{if(!t&&jl(window.grecaptcha)&&tn.scriptInjectionDeferred)await tn.scriptInjectionDeferred.promise,s(B,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=s_();c.length!==0&&(c+=B+`&onload=${$l}`),tn.scriptInjectionDeferred=new qf,window[$l]=()=>{tn.scriptInjectionDeferred?.resolve()},mc(c).then(()=>tn.scriptInjectionDeferred?.promise).then(()=>{s(B,i,o)}).catch(u=>{o(u)})}}).catch(B=>{o(B)})})}}tn.scriptInjectionDeferred=null;async function Us(r,e,t,n=!1,s=!1){const i=new tn(r);let o;if(s)o=Xs;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const B={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in B){const c=B.phoneEnrollmentInfo.phoneNumber,u=B.phoneEnrollmentInfo.recaptchaToken;Object.assign(B,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in B){const c=B.phoneSignInInfo.recaptchaToken;Object.assign(B,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return B}return n?Object.assign(B,{captchaResp:o}):Object.assign(B,{captchaResponse:o}),Object.assign(B,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(B,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),B}async function Un(r,e,t,n,s){if(s==="EMAIL_PASSWORD_PROVIDER")if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Us(r,e,t,t==="getOobCode");return n(r,i)}else return n(r,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Us(r,e,t,t==="getOobCode");return n(r,o)}else return Promise.reject(i)});else if(s==="PHONE_PROVIDER")if(r._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await Us(r,e,t);return n(r,i).catch(async o=>{if(r._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const B=await Us(r,e,t,!1,!0);return n(r,B)}return Promise.reject(o)})}else{const i=await Us(r,e,t,!1,!0);return n(r,i)}else return Promise.reject(s+" provider is not supported.")}async function Ed(r){const e=Le(r),t=await sd(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new rd(t);e.tenantId==null?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,n.isAnyProviderEnabled()&&new tn(e).verify()}/**
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
 */function _d(r,e){const t=fc(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Dr(i,e??{}))return s;mt(s,"already-initialized")}return t.initialize({options:e})}function d_(r,e){const t=e?.persistence||[],n=(Array.isArray(t)?t:[t]).map(cn);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e?.popupRedirectResolver)}function Dd(r,e,t){const n=Le(r);G(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!!t?.disableWarnings,i=Id(e),{host:o,port:B}=C_(e),c=B===null?"":`:${B}`,u={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:B,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){G(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),G(Dr(u,n.config.emulator)&&Dr(h,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=u,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,Vi(o)?jf(`${i}//${o}${c}`):s||p_()}function Id(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function C_(r){const e=Id(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:Yl(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:Yl(o)}}}function Yl(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function p_(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class fs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,t){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}}/**
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
 */async function yd(r,e){return Ae(r,"POST","/v1/accounts:resetPassword",we(r,e))}async function g_(r,e){return Ae(r,"POST","/v1/accounts:update",e)}async function m_(r,e){return Ae(r,"POST","/v1/accounts:signUp",e)}async function E_(r,e){return Ae(r,"POST","/v1/accounts:update",we(r,e))}/**
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
 */async function __(r,e){return Tn(r,"POST","/v1/accounts:signInWithPassword",we(r,e))}async function da(r,e){return Ae(r,"POST","/v1/accounts:sendOobCode",we(r,e))}async function D_(r,e){return da(r,e)}async function I_(r,e){return da(r,e)}async function y_(r,e){return da(r,e)}async function T_(r,e){return da(r,e)}/**
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
 */async function w_(r,e){return Tn(r,"POST","/v1/accounts:signInWithEmailLink",we(r,e))}async function A_(r,e){return Tn(r,"POST","/v1/accounts:signInWithEmailLink",we(r,e))}/**
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
 */class ts extends fs{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ts(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ts(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Un(e,t,"signInWithPassword",__,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return w_(e,{email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Un(e,n,"signUpPassword",m_,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return A_(e,{idToken:t,email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Cn(r,e){return Tn(r,"POST","/v1/accounts:signInWithIdp",we(r,e))}/**
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
 */const v_="http://localhost";class Yt extends fs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):mt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...i}=t;if(!n||!s)return null;const o=new Yt(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Cn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Cn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Cn(e,t)}buildRequest(){const e={requestUri:v_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=us(t)}return e}}/**
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
 */async function Xl(r,e){return Ae(r,"POST","/v1/accounts:sendVerificationCode",we(r,e))}async function R_(r,e){return Tn(r,"POST","/v1/accounts:signInWithPhoneNumber",we(r,e))}async function b_(r,e){const t=await Tn(r,"POST","/v1/accounts:signInWithPhoneNumber",we(r,e));if(t.temporaryProof)throw Ks(r,"account-exists-with-different-credential",t);return t}const P_={USER_NOT_FOUND:"user-not-found"};async function S_(r,e){const t={...e,operation:"REAUTH"};return Tn(r,"POST","/v1/accounts:signInWithPhoneNumber",we(r,t),P_)}/**
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
 */class Hn extends fs{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Hn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Hn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return R_(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return b_(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return S_(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:s,temporaryProof:i}=e;return!n&&!t&&!s&&!i?null:new Hn({verificationId:t,verificationCode:n,phoneNumber:s,temporaryProof:i})}}/**
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
 */function N_(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function O_(r){const e=qs(js(r)).link,t=e?qs(js(e)).deep_link_id:null,n=qs(js(r)).deep_link_id;return(n?qs(js(n)).link:null)||n||t||e||r}class ds{constructor(e){const t=qs(js(e)),n=t.apiKey??null,s=t.oobCode??null,i=N_(t.mode??null);G(n&&s&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=O_(e);try{return new ds(t)}catch{return null}}}function L_(r){return ds.parseLink(r)}/**
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
 */class rr{constructor(){this.providerId=rr.PROVIDER_ID}static credential(e,t){return ts._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ds.parseLink(t);return G(n,"argument-error"),ts._fromEmailAndCode(e,n.code,n.tenantId)}}rr.PROVIDER_ID="password";rr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class wn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Cs extends wn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Zs extends Cs{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return G("providerId"in t&&"signInMethod"in t,"argument-error"),Yt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return G(e.idToken||e.accessToken,"argument-error"),Yt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Zs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Zs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:B}=e;if(!n&&!s&&!t&&!i||!B)return null;try{return new Zs(B)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:i})}catch{return null}}}/**
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
 */class nn extends Cs{constructor(){super("facebook.com")}static credential(e){return Yt._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";nn.PROVIDER_ID="facebook.com";/**
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
 */class rn extends Cs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Yt._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return rn.credential(t,n)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
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
 */class sn extends Cs{constructor(){super("github.com")}static credential(e){return Yt._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.GITHUB_SIGN_IN_METHOD="github.com";sn.PROVIDER_ID="github.com";/**
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
 */const F_="http://localhost";class di extends fs{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Cn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Cn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Cn(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,pendingToken:i}=t;return!n||!s||!i||n!==s?null:new di(n,i)}static _create(e,t){return new di(e,t)}buildRequest(){return{requestUri:F_,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const k_="saml.";class Ko extends wn{constructor(e){G(e.startsWith(k_),"argument-error"),super(e)}static credentialFromResult(e){return Ko.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ko.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=di.fromJSON(e);return G(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return di._create(n,t)}catch{return null}}}/**
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
 */class on extends Cs{constructor(){super("twitter.com")}static credential(e,t){return Yt._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return on.credential(t,n)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
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
 */async function Td(r,e){return Tn(r,"POST","/v1/accounts:signUp",we(r,e))}/**
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
 */class Nt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await Ft._fromIdTokenResponse(e,n,s),o=Zl(n);return new Nt({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=Zl(n);return new Nt({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function Zl(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function x_(r){if(Pe(r.app))return Promise.reject(Ye(r));const e=Le(r);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new Nt({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await Td(e,{returnSecureToken:!0}),n=await Nt._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(n.user),n}/**
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
 */class zo extends yn{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,zo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new zo(e,t,n,s)}}function wd(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zo._fromErrorAndOperation(r,i,e,n):i})}/**
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
 */function Ad(r){return new Set(r.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function V_(r,e){const t=re(r);await Ca(!0,t,e);const{providerUserInfo:n}=await HE(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),s=Ad(n||[]);return t.providerData=t.providerData.filter(i=>s.has(i.providerId)),s.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Ec(r,e,t=!1){const n=await En(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Nt._forOperation(r,"link",n)}async function Ca(r,e,t){await fi(e);const n=Ad(e.providerData),s=r===!1?"provider-already-linked":"no-such-provider";G(n.has(t)===r,e.auth,s)}/**
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
 */async function vd(r,e,t=!1){const{auth:n}=r;if(Pe(n.app))return Promise.reject(Ye(n));const s="reauthenticate";try{const i=await En(r,wd(n,s,e,r),t);G(i.idToken,n,"internal-error");const o=fa(i.idToken);G(o,n,"internal-error");const{sub:B}=o;return G(r.uid===B,n,"user-mismatch"),Nt._forOperation(r,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&mt(n,"user-mismatch"),i}}/**
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
 */async function Rd(r,e,t=!1){if(Pe(r.app))return Promise.reject(Ye(r));const n="signIn",s=await wd(r,n,e),i=await Nt._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}async function pa(r,e){return Rd(Le(r),e)}async function bd(r,e){const t=re(r);return await Ca(!1,t,e.providerId),Ec(t,e)}async function Pd(r,e){return vd(re(r),e)}/**
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
 */async function M_(r,e){return Tn(r,"POST","/v1/accounts:signInWithCustomToken",we(r,e))}/**
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
 */async function G_(r,e){if(Pe(r.app))return Promise.reject(Ye(r));const t=Le(r),n=await M_(t,{token:e,returnSecureToken:!0}),s=await Nt._fromIdTokenResponse(t,"signIn",n);return await t._updateCurrentUser(s.user),s}/**
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
 */class Ui{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?_c._fromServerResponse(e,t):"totpInfo"in t?Dc._fromServerResponse(e,t):mt(e,"internal-error")}}class _c extends Ui{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new _c(t)}}class Dc extends Ui{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Dc(t)}}/**
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
 */function ga(r,e,t){G(t.url?.length>0,r,"invalid-continue-uri"),G(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),G(typeof t.linkDomain>"u"||t.linkDomain.length>0,r,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(G(t.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(G(t.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Ic(r){const e=Le(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function U_(r,e,t){const n=Le(r),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&ga(n,s,t),await Un(n,s,"getOobCode",I_,"EMAIL_PASSWORD_PROVIDER")}async function H_(r,e,t){await yd(re(r),{oobCode:e,newPassword:t}).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Ic(r),n})}async function J_(r,e){await E_(re(r),{oobCode:e})}async function Sd(r,e){const t=re(r),n=await yd(t,{oobCode:e}),s=n.requestType;switch(G(s,t,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":G(n.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":G(n.mfaInfo,t,"internal-error");default:G(n.email,t,"internal-error")}let i=null;return n.mfaInfo&&(i=Ui._fromServerResponse(Le(t),n.mfaInfo)),{data:{email:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.newEmail:n.email)||null,previousEmail:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.email:n.newEmail)||null,multiFactorInfo:i},operation:s}}async function q_(r,e){const{data:t}=await Sd(re(r),e);return t.email}async function j_(r,e,t){if(Pe(r.app))return Promise.reject(Ye(r));const n=Le(r),o=await Un(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Td,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Ic(r),c}),B=await Nt._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(B.user),B}function K_(r,e,t){return Pe(r.app)?Promise.reject(Ye(r)):pa(re(r),rr.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Ic(r),n})}/**
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
 */async function z_(r,e,t){const n=Le(r),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function i(o,B){G(B.handleCodeInApp,n,"argument-error"),B&&ga(n,o,B)}i(s,t),await Un(n,s,"getOobCode",y_,"EMAIL_PASSWORD_PROVIDER")}function W_(r,e){return ds.parseLink(e)?.operation==="EMAIL_SIGNIN"}async function Q_(r,e,t){if(Pe(r.app))return Promise.reject(Ye(r));const n=re(r),s=rr.credentialWithLink(e,t||hi());return G(s._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),pa(n,s)}/**
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
 */async function $_(r,e){return Ae(r,"POST","/v1/accounts:createAuthUri",we(r,e))}/**
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
 */async function Y_(r,e){const t=Cc()?hi():"http://localhost",n={identifier:e,continueUri:t},{signinMethods:s}=await $_(re(r),n);return s||[]}async function X_(r,e){const t=re(r),s={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()};e&&ga(t.auth,s,e);const{email:i}=await D_(t.auth,s);i!==r.email&&await r.reload()}async function Z_(r,e,t){const n=re(r),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await r.getIdToken(),newEmail:e};t&&ga(n.auth,i,t);const{email:o}=await T_(n.auth,i);o!==r.email&&await r.reload()}/**
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
 */async function eD(r,e){return Ae(r,"POST","/v1/accounts:update",e)}/**
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
 */async function tD(r,e){const{displayName:t,photoURL:n}=e;if(t===void 0&&n===void 0)return;const s=re(r),o={idToken:await s.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},B=await En(s,eD(s.auth,o));s.displayName=B.displayName||null,s.photoURL=B.photoUrl||null;const c=s.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=s.displayName,c.photoURL=s.photoURL),await s._updateTokensIfNecessary(B)}function nD(r,e){const t=re(r);return Pe(t.auth.app)?Promise.reject(Ye(t.auth)):Nd(t,e,null)}function rD(r,e){return Nd(re(r),null,e)}async function Nd(r,e,t){const{auth:n}=r,i={idToken:await r.getIdToken(),returnSecureToken:!0};e&&(i.email=e),t&&(i.password=t);const o=await En(r,g_(n,i));await r._updateTokensIfNecessary(o,!0)}/**
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
 */function sD(r){if(!r)return null;const{providerId:e}=r,t=r.rawUserInfo?JSON.parse(r.rawUserInfo):{},n=r.isNewUser||r.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&r?.idToken){const s=fa(r.idToken)?.firebase?.sign_in_provider;if(s){const i=s!=="anonymous"&&s!=="custom"?s:null;return new Qr(n,i)}}if(!e)return null;switch(e){case"facebook.com":return new iD(n,t);case"github.com":return new oD(n,t);case"google.com":return new aD(n,t);case"twitter.com":return new BD(n,t,r.screenName||null);case"custom":case"anonymous":return new Qr(n,null);default:return new Qr(n,e,t)}}class Qr{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class Od extends Qr{constructor(e,t,n,s){super(e,t,n),this.username=s}}class iD extends Qr{constructor(e,t){super(e,"facebook.com",t)}}class oD extends Od{constructor(e,t){super(e,"github.com",t,typeof t?.login=="string"?t?.login:null)}}class aD extends Qr{constructor(e,t){super(e,"google.com",t)}}class BD extends Od{constructor(e,t,n){super(e,"twitter.com",t,n)}}function cD(r){const{user:e,_tokenResponse:t}=r;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:sD(t)}/**
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
 */function uD(r,e){return re(r).setPersistence(e)}function lD(r){return Ed(r)}async function hD(r,e){return Le(r).validatePassword(e)}function Ld(r,e,t,n){return re(r).onIdTokenChanged(e,t,n)}function Fd(r,e,t){return re(r).beforeAuthStateChanged(e,t)}function fD(r,e,t,n){return re(r).onAuthStateChanged(e,t,n)}function dD(r){re(r).useDeviceLanguage()}function CD(r,e){return re(r).updateCurrentUser(e)}function pD(r){return re(r).signOut()}function gD(r,e){return Le(r).revokeAccessToken(e)}async function mD(r){return re(r).delete()}/**
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
 */class fr{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new fr("enroll",e,t)}static _fromMfaPendingCredential(e){return new fr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){if(e?.multiFactorSession){if(e.multiFactorSession?.pendingCredential)return fr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(e.multiFactorSession?.idToken)return fr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class yc{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Le(e),s=t.customData._serverResponse,i=(s.mfaInfo||[]).map(B=>Ui._fromServerResponse(n,B));G(s.mfaPendingCredential,n,"internal-error");const o=fr._fromMfaPendingCredential(s.mfaPendingCredential);return new yc(o,i,async B=>{const c=await B._process(n,o);delete s.mfaInfo,delete s.mfaPendingCredential;const u={...s,idToken:c.idToken,refreshToken:c.refreshToken};switch(t.operationType){case"signIn":const h=await Nt._fromIdTokenResponse(n,t.operationType,u);return await n._updateCurrentUser(h.user),h;case"reauthenticate":return G(t.user,n,"internal-error"),Nt._forOperation(t.user,t.operationType,u);default:mt(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function ED(r,e){const t=re(r),n=e;return G(e.customData.operationType,t,"argument-error"),G(n.customData._serverResponse?.mfaPendingCredential,t,"argument-error"),yc._fromError(t,n)}/**
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
 */function eh(r,e){return Ae(r,"POST","/v2/accounts/mfaEnrollment:start",we(r,e))}function _D(r,e){return Ae(r,"POST","/v2/accounts/mfaEnrollment:finalize",we(r,e))}function DD(r,e){return Ae(r,"POST","/v2/accounts/mfaEnrollment:start",we(r,e))}function ID(r,e){return Ae(r,"POST","/v2/accounts/mfaEnrollment:finalize",we(r,e))}function yD(r,e){return Ae(r,"POST","/v2/accounts/mfaEnrollment:withdraw",we(r,e))}class Tc{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(n=>Ui._fromServerResponse(e.auth,n)))})}static _fromUser(e){return new Tc(e)}async getSession(){return fr._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,s=await this.getSession(),i=await En(this.user,n._process(this.user.auth,s,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,n=await this.user.getIdToken();try{const s=await En(this.user,yD(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:i})=>i!==t),await this.user._updateTokensIfNecessary(s),await this.user.reload()}catch(s){throw s}}}const mB=new WeakMap;function TD(r){const e=re(r);return mB.has(e)||mB.set(e,Tc._fromUser(e)),mB.get(e)}const Wo="__sak";/**
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
 */class kd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Wo,"1"),this.storage.removeItem(Wo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const wD=1e3,AD=10;class xd extends kd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,B,c)=>{this.notifyListeners(o,c)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);$E()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,AD):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},wD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xd.type="LOCAL";const Vd=xd;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=1e3;function EB(r){const e=r.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),t=RegExp(`${e}=([^;]+)`);return document.cookie.match(t)?.[1]??null}function _B(r){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${r.split(":")[3]}`}class Md{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=_B(e);return window.cookieStore?(await window.cookieStore.get(t))?.value:EB(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;const n=_B(e);document.cookie=`${n}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const n=_B(e);if(window.cookieStore){const B=u=>{const h=u.changed.find(E=>E.name===n);h&&t(h.value),u.deleted.find(E=>E.name===n)&&t(null)},c=()=>window.cookieStore.removeEventListener("change",B);return this.listenerUnsubscribes.set(t,c),window.cookieStore.addEventListener("change",B)}let s=EB(n);const i=setInterval(()=>{const B=EB(n);B!==s&&(t(B),s=B)},vD),o=()=>clearInterval(i);this.listenerUnsubscribes.set(t,o)}_removeListener(e,t){const n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}}Md.type="COOKIE";const RD=Md;/**
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
 */class Gd extends kd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gd.type="SESSION";const wc=Gd;/**
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
 */function bD(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new ma(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const B=Array.from(o).map(async u=>u(t.origin,i)),c=await bD(B);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ma.receivers=[];/**
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
 */function Ea(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class PD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((B,c)=>{const u=Ea("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(d){const E=d;if(E.data.eventId===u)switch(E.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),B(E.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ve(){return window}function SD(r){Ve().location.href=r}/**
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
 */function Ac(){return typeof Ve().WorkerGlobalScope<"u"&&typeof Ve().importScripts=="function"}async function ND(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OD(){return navigator?.serviceWorker?.controller||null}function LD(){return Ac()?self:null}/**
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
 */const Ud="firebaseLocalStorageDb",FD=1,Qo="firebaseLocalStorage",Hd="fbase_key";class Hi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function _a(r,e){return r.transaction([Qo],e?"readwrite":"readonly").objectStore(Qo)}function kD(){const r=indexedDB.deleteDatabase(Ud);return new Hi(r).toPromise()}function Jd(){const r=indexedDB.open(Ud,FD);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Qo,{keyPath:Hd})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Qo)?e(n):(n.close(),await kD(),e(await Jd()))})})}async function th(r,e,t){const n=_a(r,!0).put({[Hd]:e,value:t});return new Hi(n).toPromise()}async function xD(r,e){const t=_a(r,!1).get(e),n=await new Hi(t).toPromise();return n===void 0?null:n.value}function nh(r,e){const t=_a(r,!0).delete(e);return new Hi(t).toPromise()}const VD=800,MD=3;class qd{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Jd(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>MD)throw n;if(this.dbPromise){const s=this.dbPromise;this.dbPromise=null;try{(await s).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Ac()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ma._getInstance(LD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await ND(),!this.activeServiceWorker)return;this.sender=new PD(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await th(e,Wo,"1"),await nh(e,Wo)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>th(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>xD(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>nh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(s=>{const i=_a(s,!1).getAll();return new Hi(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}catch(e){return this.isClosing||Po(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}qd.type="LOCAL";const jd=qd;/**
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
 */function rh(r,e){return Ae(r,"POST","/v2/accounts/mfaSignIn:start",we(r,e))}function GD(r,e){return Ae(r,"POST","/v2/accounts/mfaSignIn:finalize",we(r,e))}function UD(r,e){return Ae(r,"POST","/v2/accounts/mfaSignIn:finalize",we(r,e))}/**
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
 */const DB=md("rcb"),HD=new Mi(3e4,6e4);class JD{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Ve().grecaptcha?.render}load(e,t=""){return G(qD(t),e,"argument-error"),this.shouldResolveImmediately(t)&&ql(Ve().grecaptcha)?Promise.resolve(Ve().grecaptcha):new Promise((n,s)=>{const i=Ve().setTimeout(()=>{s(lt(e,"network-request-failed"))},HD.get());Ve()[DB]=()=>{Ve().clearTimeout(i),delete Ve()[DB];const B=Ve().grecaptcha;if(!B||!ql(B)){s(lt(e,"internal-error"));return}const c=B.render;B.render=(u,h)=>{const d=c(u,h);return this.counter++,d},this.hostLanguage=t,n(B)};const o=`${r_()}?${us({onload:DB,render:"explicit",hl:t})}`;mc(o).catch(()=>{clearTimeout(i),s(lt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Ve().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function qD(r){return r.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(r)}class jD{async load(e){return new B_(e)}clearedOneInstance(){}}/**
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
 */const ei="recaptcha",KD={theme:"light",type:"image"};class zD{constructor(e,t,n={...KD}){this.parameters=n,this.type=ei,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Le(e),this.isInvisible=this.parameters.size==="invisible",G(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof t=="string"?document.getElementById(t):t;G(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new jD:new JD,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){G(!this.parameters.sitekey,this.auth,"argument-error"),G(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),G(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(n=>n(t)),typeof e=="function")e(t);else if(typeof e=="string"){const n=Ve()[e];typeof n=="function"&&n(t)}}}assertNotDestroyed(){G(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){G(Cc()&&!Ac(),this.auth,"internal-error"),await WD(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await GE(this.auth);G(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return G(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function WD(){let r=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}r=()=>e(),window.addEventListener("load",r)}).catch(e=>{throw r&&window.removeEventListener("load",r),e})}/**
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
 */class vc{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Hn._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function QD(r,e,t){if(Pe(r.app))return Promise.reject(Ye(r));const n=Le(r),s=await Da(n,e,re(t));return new vc(s,i=>pa(n,i))}async function $D(r,e,t){const n=re(r);await Ca(!1,n,"phone");const s=await Da(n.auth,e,re(t));return new vc(s,i=>bd(n,i))}async function YD(r,e,t){const n=re(r);if(Pe(n.auth.app))return Promise.reject(Ye(n.auth));const s=await Da(n.auth,e,re(t));return new vc(s,i=>Pd(n,i))}async function Da(r,e,t){if(!r._getRecaptchaConfig())try{await Ed(r)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let n;if(typeof e=="string"?n={phoneNumber:e}:n=e,"session"in n){const s=n.session;if("phoneNumber"in n){G(s.type==="enroll",r,"internal-error");const i={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:n.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Un(r,i,"mfaSmsEnrollment",async(u,h)=>{if(h.phoneEnrollmentInfo.captchaResponse===Xs){G(t?.type===ei,u,"argument-error");const d=await IB(u,h,t);return eh(u,d)}return eh(u,h)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneSessionInfo.sessionInfo}else{G(s.type==="signin",r,"internal-error");const i=n.multiFactorHint?.uid||n.multiFactorUid;G(i,r,"missing-multi-factor-info");const o={mfaPendingCredential:s.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Un(r,o,"mfaSmsSignIn",async(h,d)=>{if(d.phoneSignInInfo.captchaResponse===Xs){G(t?.type===ei,h,"argument-error");const E=await IB(h,d,t);return rh(h,E)}return rh(h,d)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:n.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Un(r,s,"sendVerificationCode",async(c,u)=>{if(u.captchaResponse===Xs){G(t?.type===ei,c,"argument-error");const h=await IB(c,u,t);return Xl(c,h)}return Xl(c,u)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{t?._reset()}}async function XD(r,e){const t=re(r);if(Pe(t.auth.app))return Promise.reject(Ye(t.auth));await Ec(t,e)}async function IB(r,e,t){G(t.type===ei,r,"argument-error");const n=await t.verify();G(typeof n=="string",r,"argument-error");const s={...e};if("phoneEnrollmentInfo"in s){const i=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,B=s.phoneEnrollmentInfo.clientType,c=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:n,captchaResponse:o,clientType:B,recaptchaVersion:c}}),s}else if("phoneSignInInfo"in s){const i=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,B=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:n,captchaResponse:i,clientType:o,recaptchaVersion:B}}),s}else return Object.assign(s,{recaptchaToken:n}),s}/**
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
 */class mr{constructor(e){this.providerId=mr.PROVIDER_ID,this.auth=Le(e)}verifyPhoneNumber(e,t){return Da(this.auth,e,re(t))}static credential(e,t){return Hn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return mr.credentialFromTaggedObject(t)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Hn._fromTokenResponse(t,n):null}}mr.PROVIDER_ID="phone";mr.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Rr(r,e){return e?cn(e):(G(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Rc extends fs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Cn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ZD(r){return Rd(r.auth,new Rc(r),r.bypassAuthState)}function eI(r){const{auth:e,user:t}=r;return G(t,e,"internal-error"),vd(t,new Rc(r),r.bypassAuthState)}async function tI(r){const{auth:e,user:t}=r;return G(t,e,"internal-error"),Ec(t,new Rc(r),r.bypassAuthState)}/**
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
 */class Kd{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:B}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(B)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZD;case"linkViaPopup":case"linkViaRedirect":return tI;case"reauthViaPopup":case"reauthViaRedirect":return eI;default:mt(this.auth,"internal-error")}}resolve(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const nI=new Mi(2e3,1e4);async function rI(r,e,t){if(Pe(r.app))return Promise.reject(lt(r,"operation-not-supported-in-this-environment"));const n=Le(r);hs(r,e,wn);const s=Rr(n,t);return new un(n,"signInViaPopup",e,s).executeNotNull()}async function sI(r,e,t){const n=re(r);if(Pe(n.auth.app))return Promise.reject(lt(n.auth,"operation-not-supported-in-this-environment"));hs(n.auth,e,wn);const s=Rr(n.auth,t);return new un(n.auth,"reauthViaPopup",e,s,n).executeNotNull()}async function iI(r,e,t){const n=re(r);hs(n.auth,e,wn);const s=Rr(n.auth,t);return new un(n.auth,"linkViaPopup",e,s,n).executeNotNull()}class un extends Kd{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){mn(this.filter.length===1,"Popup operations only handle one event");const e=Ea();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nI.get())};e()}}un.currentPopupAction=null;/**
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
 */const oI="pendingRedirect",Oo=new Map;class aI extends Kd{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Oo.get(this.auth._key());if(!e){try{const n=await BI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Oo.set(this.auth._key(),e)}return this.bypassAuthState||Oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BI(r,e){const t=Wd(e),n=zd(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}async function bc(r,e){return zd(r)._set(Wd(e),"true")}function cI(r,e){Oo.set(r._key(),e)}function zd(r){return cn(r._redirectPersistence)}function Wd(r){return No(oI,r.config.apiKey,r.name)}/**
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
 */function uI(r,e,t){return lI(r,e,t)}async function lI(r,e,t){if(Pe(r.app))return Promise.reject(Ye(r));const n=Le(r);hs(r,e,wn),await n._initializationPromise;const s=Rr(n,t);return await bc(s,n),s._openRedirect(n,e,"signInViaRedirect")}function hI(r,e,t){return fI(r,e,t)}async function fI(r,e,t){const n=re(r);if(hs(n.auth,e,wn),Pe(n.auth.app))return Promise.reject(Ye(n.auth));await n.auth._initializationPromise;const s=Rr(n.auth,t);await bc(s,n.auth);const i=await $d(n);return s._openRedirect(n.auth,e,"reauthViaRedirect",i)}function dI(r,e,t){return CI(r,e,t)}async function CI(r,e,t){const n=re(r);hs(n.auth,e,wn),await n.auth._initializationPromise;const s=Rr(n.auth,t);await Ca(!1,n,e.providerId),await bc(s,n.auth);const i=await $d(n);return s._openRedirect(n.auth,e,"linkViaRedirect",i)}async function pI(r,e){return await Le(r)._initializationPromise,Qd(r,e,!1)}async function Qd(r,e,t=!1){if(Pe(r.app))return Promise.reject(Ye(r));const n=Le(r),s=Rr(n,e),o=await new aI(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}async function $d(r){const e=Ea(`${r.uid}:::`);return r._redirectEventId=e,await r.auth._setRedirectUser(r),await r.auth._persistUserIfCurrent(r),e}/**
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
 */const gI=10*60*1e3;class mI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Yd(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(lt(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gI&&this.cachedEventUids.clear(),this.cachedEventUids.has(sh(e))}saveEventToCache(e){this.cachedEventUids.add(sh(e)),this.lastProcessedEventTime=Date.now()}}function sh(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Yd({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function EI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yd(r);default:return!1}}/**
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
 */async function _I(r,e={}){return Ae(r,"GET","/v1/projects",e)}/**
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
 */const DI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,II=/^https?/;async function yI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await _I(r);for(const t of e)try{if(TI(t))return}catch{}mt(r,"unauthorized-domain")}function TI(r){const e=hi(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!II.test(t))return!1;if(DI.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const wI=new Mi(3e4,6e4);function ih(){const r=Ve().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function AI(r){return new Promise((e,t)=>{function n(){ih(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ih(),t(lt(r,"network-request-failed"))},timeout:wI.get()})}if(Ve().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Ve().gapi?.load)n();else{const s=md("iframefcb");return Ve()[s]=()=>{gapi.load?n():t(lt(r,"network-request-failed"))},mc(`${i_()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw Lo=null,e})}let Lo=null;function vI(r){return Lo=Lo||AI(r),Lo}/**
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
 */const RI=new Mi(5e3,15e3),bI="__/auth/iframe",PI="emulator/auth/iframe",SI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OI(r){const e=r.config;G(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?pc(e,PI):`https://${r.config.authDomain}/${bI}`,n={apiKey:e.apiKey,appName:r.name,v:ls},s=NI.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${us(n).slice(1)}`}async function LI(r){const e=await vI(r),t=Ve().gapi;return G(t,r,"internal-error"),e.open({where:document.body,url:OI(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SI,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=lt(r,"network-request-failed"),B=Ve().setTimeout(()=>{i(o)},RI.get());function c(){Ve().clearTimeout(B),s(n)}n.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const FI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kI=500,xI=600,VI="_blank",MI="http://localhost";class oh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GI(r,e,t,n=kI,s=xI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let B="";const c={...FI,width:n.toString(),height:s.toString(),top:i,left:o},u=it().toLowerCase();t&&(B=ld(u)?VI:t),cd(u)&&(e=e||MI,c.scrollbars="yes");const h=Object.entries(c).reduce((E,[v,P])=>`${E}${v}=${P},`,"");if(QE(u)&&B!=="_self")return UI(e||"",B),new oh(null);const d=window.open(e||"",B,h);G(d,r,"popup-blocked");try{d.focus()}catch{}return new oh(d)}function UI(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const HI="__/auth/handler",JI="emulator/auth/handler",qI=encodeURIComponent("fac");async function ah(r,e,t,n,s,i){G(r.config.authDomain,r,"auth-domain-config-required"),G(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:ls,eventId:s};if(e instanceof wn){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",um(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Cs){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}r.tenantId&&(o.tid=r.tenantId);const B=o;for(const h of Object.keys(B))B[h]===void 0&&delete B[h];const c=await r._getAppCheckToken(),u=c?`#${qI}=${encodeURIComponent(c)}`:"";return`${jI(r)}?${us(B).slice(1)}${u}`}function jI({config:r}){return r.emulator?pc(r,JI):`https://${r.authDomain}/${HI}`}/**
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
 */const yB="webStorageSupport";class KI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wc,this._completeRedirectFn=Qd,this._overrideRedirectResult=cI}async _openPopup(e,t,n,s){mn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await ah(e,t,n,hi(),s);return GI(e,i,Ea())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await ah(e,t,n,hi(),s);return SD(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(mn(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await LI(e),n=new mI(e);return t.register("authEvent",s=>(G(s?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(yB,{type:yB},s=>{const i=s?.[0]?.[yB];i!==void 0&&t(!!i),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return pd()||ud()||gc()}}const Xd=KI;class Zd{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Ht("unexpected MultiFactorSessionType")}}}class Pc extends Zd{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Pc(e)}_finalizeEnroll(e,t,n){return _D(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return GD(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class eC{constructor(){}static assertion(e){return Pc._fromCredential(e)}}eC.FACTOR_ID="phone";class tC{static assertionForEnrollment(e,t){return Ci._fromSecret(e,t)}static assertionForSignIn(e,t){return Ci._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;G(typeof t.user?.auth<"u","internal-error");const n=await DD(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return Ia._fromStartTotpMfaEnrollmentResponse(n,t.user.auth)}}tC.FACTOR_ID="totp";class Ci extends Zd{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Ci(t,void 0,e)}static _fromEnrollmentId(e,t){return new Ci(t,e)}async _finalizeEnroll(e,t,n){return G(typeof this.secret<"u",e,"argument-error"),ID(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){G(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const n={verificationCode:this.otp};return UD(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Ia{constructor(e,t,n,s,i,o,B){this.sessionInfo=o,this.auth=B,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=s,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Ia(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){let n=!1;return(go(e)||go(t))&&(n=!0),n&&(go(e)&&(e=this.auth.currentUser?.email||"unknownuser"),go(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function go(r){return typeof r>"u"||r?.length===0}var Bh="@firebase/auth",ch="1.13.7";/**
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
 */class zI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function WI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function QI(r){es(new Ir("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:B}=n.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:o,authDomain:B,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gd(r)},u=new t_(n,s,i,c);return d_(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),es(new Ir("auth-internal",e=>{const t=Le(e.getProvider("auth").getImmediate());return(n=>new zI(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gn(Bh,ch,WI(r)),Gn(Bh,ch,"esm2020")}/**
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
 */const $I=5*60,YI=Jf("authIdTokenMaxAge")||$I;let uh=null;const XI=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>YI)return;const s=t?.token;uh!==s&&(uh=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ZI(r=Wf()){const e=fc(r,"auth");if(e.isInitialized())return e.getImmediate();const t=_d(r,{popupRedirectResolver:Xd,persistence:[jd,Vd,wc]}),n=Jf("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=XI(i.toString());Fd(t,o,()=>o(t.currentUser)),Ld(t,B=>o(B))}}const s=Uf("auth");return s&&Dd(t,`http://${s}`),t}function ey(){return document.getElementsByTagName("head")?.[0]??document}n_({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=lt("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",ey().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});QI("Browser");const Sv=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:bE,ActionCodeURL:ds,AuthCredential:fs,AuthErrorCodes:NE,EmailAuthCredential:ts,EmailAuthProvider:rr,FacebookAuthProvider:nn,FactorId:wE,GithubAuthProvider:sn,GoogleAuthProvider:rn,OAuthCredential:Yt,OAuthProvider:Zs,OperationType:RE,PhoneAuthCredential:Hn,PhoneAuthProvider:mr,PhoneMultiFactorGenerator:eC,ProviderId:AE,RecaptchaVerifier:zD,SAMLAuthProvider:Ko,SignInMethod:vE,TotpMultiFactorGenerator:tC,TotpSecret:Ia,TwitterAuthProvider:on,applyActionCode:J_,beforeAuthStateChanged:Fd,browserCookiePersistence:RD,browserLocalPersistence:Vd,browserPopupRedirectResolver:Xd,browserSessionPersistence:wc,checkActionCode:Sd,confirmPasswordReset:H_,connectAuthEmulator:Dd,createUserWithEmailAndPassword:j_,debugErrorMap:SE,deleteUser:mD,fetchSignInMethodsForEmail:Y_,getAdditionalUserInfo:cD,getAuth:ZI,getIdToken:JE,getIdTokenResult:id,getMultiFactorResolver:ED,getRedirectResult:pI,inMemoryPersistence:UB,indexedDBLocalPersistence:jd,initializeAuth:_d,initializeRecaptchaConfig:lD,isSignInWithEmailLink:W_,linkWithCredential:bd,linkWithPhoneNumber:$D,linkWithPopup:iI,linkWithRedirect:dI,multiFactor:TD,onAuthStateChanged:fD,onIdTokenChanged:Ld,parseActionCodeURL:L_,prodErrorMap:Xf,reauthenticateWithCredential:Pd,reauthenticateWithPhoneNumber:YD,reauthenticateWithPopup:sI,reauthenticateWithRedirect:hI,reload:od,revokeAccessToken:gD,sendEmailVerification:X_,sendPasswordResetEmail:U_,sendSignInLinkToEmail:z_,setPersistence:uD,signInAnonymously:x_,signInWithCredential:pa,signInWithCustomToken:G_,signInWithEmailAndPassword:K_,signInWithEmailLink:Q_,signInWithPhoneNumber:QD,signInWithPopup:rI,signInWithRedirect:uI,signOut:pD,unlink:V_,updateCurrentUser:CD,updateEmail:nD,updatePassword:rD,updatePhoneNumber:XD,updateProfile:tD,useDeviceLanguage:dD,validatePassword:hD,verifyBeforeUpdateEmail:Z_,verifyPasswordResetCode:q_},Symbol.toStringTag,{value:"Module"}));var lh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jn,nC;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function D(){}D.prototype=m.prototype,w.F=m.prototype,w.prototype=new D,w.prototype.constructor=w,w.D=function(A,T,b){for(var _=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)_[ht-2]=arguments[ht];return m.prototype[T].apply(A,_)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,D){D||(D=0);const A=Array(16);if(typeof m=="string")for(var T=0;T<16;++T)A[T]=m.charCodeAt(D++)|m.charCodeAt(D++)<<8|m.charCodeAt(D++)<<16|m.charCodeAt(D++)<<24;else for(T=0;T<16;++T)A[T]=m[D++]|m[D++]<<8|m[D++]<<16|m[D++]<<24;m=w.g[0],D=w.g[1],T=w.g[2];let b=w.g[3],_;_=m+(b^D&(T^b))+A[0]+3614090360&4294967295,m=D+(_<<7&4294967295|_>>>25),_=b+(T^m&(D^T))+A[1]+3905402710&4294967295,b=m+(_<<12&4294967295|_>>>20),_=T+(D^b&(m^D))+A[2]+606105819&4294967295,T=b+(_<<17&4294967295|_>>>15),_=D+(m^T&(b^m))+A[3]+3250441966&4294967295,D=T+(_<<22&4294967295|_>>>10),_=m+(b^D&(T^b))+A[4]+4118548399&4294967295,m=D+(_<<7&4294967295|_>>>25),_=b+(T^m&(D^T))+A[5]+1200080426&4294967295,b=m+(_<<12&4294967295|_>>>20),_=T+(D^b&(m^D))+A[6]+2821735955&4294967295,T=b+(_<<17&4294967295|_>>>15),_=D+(m^T&(b^m))+A[7]+4249261313&4294967295,D=T+(_<<22&4294967295|_>>>10),_=m+(b^D&(T^b))+A[8]+1770035416&4294967295,m=D+(_<<7&4294967295|_>>>25),_=b+(T^m&(D^T))+A[9]+2336552879&4294967295,b=m+(_<<12&4294967295|_>>>20),_=T+(D^b&(m^D))+A[10]+4294925233&4294967295,T=b+(_<<17&4294967295|_>>>15),_=D+(m^T&(b^m))+A[11]+2304563134&4294967295,D=T+(_<<22&4294967295|_>>>10),_=m+(b^D&(T^b))+A[12]+1804603682&4294967295,m=D+(_<<7&4294967295|_>>>25),_=b+(T^m&(D^T))+A[13]+4254626195&4294967295,b=m+(_<<12&4294967295|_>>>20),_=T+(D^b&(m^D))+A[14]+2792965006&4294967295,T=b+(_<<17&4294967295|_>>>15),_=D+(m^T&(b^m))+A[15]+1236535329&4294967295,D=T+(_<<22&4294967295|_>>>10),_=m+(T^b&(D^T))+A[1]+4129170786&4294967295,m=D+(_<<5&4294967295|_>>>27),_=b+(D^T&(m^D))+A[6]+3225465664&4294967295,b=m+(_<<9&4294967295|_>>>23),_=T+(m^D&(b^m))+A[11]+643717713&4294967295,T=b+(_<<14&4294967295|_>>>18),_=D+(b^m&(T^b))+A[0]+3921069994&4294967295,D=T+(_<<20&4294967295|_>>>12),_=m+(T^b&(D^T))+A[5]+3593408605&4294967295,m=D+(_<<5&4294967295|_>>>27),_=b+(D^T&(m^D))+A[10]+38016083&4294967295,b=m+(_<<9&4294967295|_>>>23),_=T+(m^D&(b^m))+A[15]+3634488961&4294967295,T=b+(_<<14&4294967295|_>>>18),_=D+(b^m&(T^b))+A[4]+3889429448&4294967295,D=T+(_<<20&4294967295|_>>>12),_=m+(T^b&(D^T))+A[9]+568446438&4294967295,m=D+(_<<5&4294967295|_>>>27),_=b+(D^T&(m^D))+A[14]+3275163606&4294967295,b=m+(_<<9&4294967295|_>>>23),_=T+(m^D&(b^m))+A[3]+4107603335&4294967295,T=b+(_<<14&4294967295|_>>>18),_=D+(b^m&(T^b))+A[8]+1163531501&4294967295,D=T+(_<<20&4294967295|_>>>12),_=m+(T^b&(D^T))+A[13]+2850285829&4294967295,m=D+(_<<5&4294967295|_>>>27),_=b+(D^T&(m^D))+A[2]+4243563512&4294967295,b=m+(_<<9&4294967295|_>>>23),_=T+(m^D&(b^m))+A[7]+1735328473&4294967295,T=b+(_<<14&4294967295|_>>>18),_=D+(b^m&(T^b))+A[12]+2368359562&4294967295,D=T+(_<<20&4294967295|_>>>12),_=m+(D^T^b)+A[5]+4294588738&4294967295,m=D+(_<<4&4294967295|_>>>28),_=b+(m^D^T)+A[8]+2272392833&4294967295,b=m+(_<<11&4294967295|_>>>21),_=T+(b^m^D)+A[11]+1839030562&4294967295,T=b+(_<<16&4294967295|_>>>16),_=D+(T^b^m)+A[14]+4259657740&4294967295,D=T+(_<<23&4294967295|_>>>9),_=m+(D^T^b)+A[1]+2763975236&4294967295,m=D+(_<<4&4294967295|_>>>28),_=b+(m^D^T)+A[4]+1272893353&4294967295,b=m+(_<<11&4294967295|_>>>21),_=T+(b^m^D)+A[7]+4139469664&4294967295,T=b+(_<<16&4294967295|_>>>16),_=D+(T^b^m)+A[10]+3200236656&4294967295,D=T+(_<<23&4294967295|_>>>9),_=m+(D^T^b)+A[13]+681279174&4294967295,m=D+(_<<4&4294967295|_>>>28),_=b+(m^D^T)+A[0]+3936430074&4294967295,b=m+(_<<11&4294967295|_>>>21),_=T+(b^m^D)+A[3]+3572445317&4294967295,T=b+(_<<16&4294967295|_>>>16),_=D+(T^b^m)+A[6]+76029189&4294967295,D=T+(_<<23&4294967295|_>>>9),_=m+(D^T^b)+A[9]+3654602809&4294967295,m=D+(_<<4&4294967295|_>>>28),_=b+(m^D^T)+A[12]+3873151461&4294967295,b=m+(_<<11&4294967295|_>>>21),_=T+(b^m^D)+A[15]+530742520&4294967295,T=b+(_<<16&4294967295|_>>>16),_=D+(T^b^m)+A[2]+3299628645&4294967295,D=T+(_<<23&4294967295|_>>>9),_=m+(T^(D|~b))+A[0]+4096336452&4294967295,m=D+(_<<6&4294967295|_>>>26),_=b+(D^(m|~T))+A[7]+1126891415&4294967295,b=m+(_<<10&4294967295|_>>>22),_=T+(m^(b|~D))+A[14]+2878612391&4294967295,T=b+(_<<15&4294967295|_>>>17),_=D+(b^(T|~m))+A[5]+4237533241&4294967295,D=T+(_<<21&4294967295|_>>>11),_=m+(T^(D|~b))+A[12]+1700485571&4294967295,m=D+(_<<6&4294967295|_>>>26),_=b+(D^(m|~T))+A[3]+2399980690&4294967295,b=m+(_<<10&4294967295|_>>>22),_=T+(m^(b|~D))+A[10]+4293915773&4294967295,T=b+(_<<15&4294967295|_>>>17),_=D+(b^(T|~m))+A[1]+2240044497&4294967295,D=T+(_<<21&4294967295|_>>>11),_=m+(T^(D|~b))+A[8]+1873313359&4294967295,m=D+(_<<6&4294967295|_>>>26),_=b+(D^(m|~T))+A[15]+4264355552&4294967295,b=m+(_<<10&4294967295|_>>>22),_=T+(m^(b|~D))+A[6]+2734768916&4294967295,T=b+(_<<15&4294967295|_>>>17),_=D+(b^(T|~m))+A[13]+1309151649&4294967295,D=T+(_<<21&4294967295|_>>>11),_=m+(T^(D|~b))+A[4]+4149444226&4294967295,m=D+(_<<6&4294967295|_>>>26),_=b+(D^(m|~T))+A[11]+3174756917&4294967295,b=m+(_<<10&4294967295|_>>>22),_=T+(m^(b|~D))+A[2]+718787259&4294967295,T=b+(_<<15&4294967295|_>>>17),_=D+(b^(T|~m))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+T&4294967295,w.g[3]=w.g[3]+b&4294967295}n.prototype.v=function(w,m){m===void 0&&(m=w.length);const D=m-this.blockSize,A=this.C;let T=this.h,b=0;for(;b<m;){if(T==0)for(;b<=D;)s(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<m;)if(A[T++]=w.charCodeAt(b++),T==this.blockSize){s(this,A),T=0;break}}else for(;b<m;)if(A[T++]=w[b++],T==this.blockSize){s(this,A),T=0;break}}this.h=T,this.o+=m},n.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;m=this.o*8;for(var D=w.length-8;D<w.length;++D)w[D]=m&255,m/=256;for(this.v(w),w=Array(16),m=0,D=0;D<4;++D)for(let A=0;A<32;A+=8)w[m++]=this.g[D]>>>A&255;return w};function i(w,m){var D=B;return Object.prototype.hasOwnProperty.call(D,w)?D[w]:D[w]=m(w)}function o(w,m){this.h=m;const D=[];let A=!0;for(let T=w.length-1;T>=0;T--){const b=w[T]|0;A&&b==m||(D[T]=b,A=!1)}this.g=D}var B={};function c(w){return-128<=w&&w<128?i(w,function(m){return new o([m|0],m<0?-1:0)}):new o([w|0],w<0?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return d;if(w<0)return M(u(-w));const m=[];let D=1;for(let A=0;w>=D;A++)m[A]=w/D|0,D*=4294967296;return new o(m,0)}function h(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return M(h(w.substring(1),m));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const D=u(Math.pow(m,8));let A=d;for(let b=0;b<w.length;b+=8){var T=Math.min(8,w.length-b);const _=parseInt(w.substring(b,b+T),m);T<8?(T=u(Math.pow(m,T)),A=A.j(T).add(u(_))):(A=A.j(D),A=A.add(u(_)))}return A}var d=c(0),E=c(1),v=c(16777216);r=o.prototype,r.m=function(){if(V(this))return-M(this).m();let w=0,m=1;for(let D=0;D<this.g.length;D++){const A=this.i(D);w+=(A>=0?A:4294967296+A)*m,m*=4294967296}return w},r.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(V(this))return"-"+M(this).toString(w);const m=u(Math.pow(w,6));var D=this;let A="";for(;;){const T=ke(D,m).g;D=W(D,T.j(m));let b=((D.g.length>0?D.g[0]:D.h)>>>0).toString(w);if(D=T,P(D))return b+A;for(;b.length<6;)b="0"+b;A=b+A}},r.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(let m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function V(w){return w.h==-1}r.l=function(w){return w=W(this,w),V(w)?-1:P(w)?0:1};function M(w){const m=w.g.length,D=[];for(let A=0;A<m;A++)D[A]=~w.g[A];return new o(D,~w.h).add(E)}r.abs=function(){return V(this)?M(this):this},r.add=function(w){const m=Math.max(this.g.length,w.g.length),D=[];let A=0;for(let T=0;T<=m;T++){let b=A+(this.i(T)&65535)+(w.i(T)&65535),_=(b>>>16)+(this.i(T)>>>16)+(w.i(T)>>>16);A=_>>>16,b&=65535,_&=65535,D[T]=_<<16|b}return new o(D,D[D.length-1]&-2147483648?-1:0)};function W(w,m){return w.add(M(m))}r.j=function(w){if(P(this)||P(w))return d;if(V(this))return V(w)?M(this).j(M(w)):M(M(this).j(w));if(V(w))return M(this.j(M(w)));if(this.l(v)<0&&w.l(v)<0)return u(this.m()*w.m());const m=this.g.length+w.g.length,D=[];for(var A=0;A<2*m;A++)D[A]=0;for(A=0;A<this.g.length;A++)for(let T=0;T<w.g.length;T++){const b=this.i(A)>>>16,_=this.i(A)&65535,ht=w.i(T)>>>16,sr=w.i(T)&65535;D[2*A+2*T]+=_*sr,Be(D,2*A+2*T),D[2*A+2*T+1]+=b*sr,Be(D,2*A+2*T+1),D[2*A+2*T+1]+=_*ht,Be(D,2*A+2*T+1),D[2*A+2*T+2]+=b*ht,Be(D,2*A+2*T+2)}for(w=0;w<m;w++)D[w]=D[2*w+1]<<16|D[2*w];for(w=m;w<2*m;w++)D[w]=0;return new o(D,0)};function Be(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function ve(w,m){this.g=w,this.h=m}function ke(w,m){if(P(m))throw Error("division by zero");if(P(w))return new ve(d,d);if(V(w))return m=ke(M(w),m),new ve(M(m.g),M(m.h));if(V(m))return m=ke(w,M(m)),new ve(M(m.g),m.h);if(w.g.length>30){if(V(w)||V(m))throw Error("slowDivide_ only works with positive integers.");for(var D=E,A=m;A.l(w)<=0;)D=Dt(D),A=Dt(A);var T=be(D,1),b=be(A,1);for(A=be(A,2),D=be(D,2);!P(A);){var _=b.add(A);_.l(w)<=0&&(T=T.add(D),b=_),A=be(A,1),D=be(D,1)}return m=W(w,T.j(m)),new ve(T,m)}for(T=d;w.l(m)>=0;){for(D=Math.max(1,Math.floor(w.m()/m.m())),A=Math.ceil(Math.log(D)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),b=u(D),_=b.j(m);V(_)||_.l(w)>0;)D-=A,b=u(D),_=b.j(m);P(b)&&(b=E),T=T.add(b),w=W(w,_)}return new ve(T,w)}r.B=function(w){return ke(this,w).h},r.and=function(w){const m=Math.max(this.g.length,w.g.length),D=[];for(let A=0;A<m;A++)D[A]=this.i(A)&w.i(A);return new o(D,this.h&w.h)},r.or=function(w){const m=Math.max(this.g.length,w.g.length),D=[];for(let A=0;A<m;A++)D[A]=this.i(A)|w.i(A);return new o(D,this.h|w.h)},r.xor=function(w){const m=Math.max(this.g.length,w.g.length),D=[];for(let A=0;A<m;A++)D[A]=this.i(A)^w.i(A);return new o(D,this.h^w.h)};function Dt(w){const m=w.g.length+1,D=[];for(let A=0;A<m;A++)D[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(D,w.h)}function be(w,m){const D=m>>5;m%=32;const A=w.g.length-D,T=[];for(let b=0;b<A;b++)T[b]=m>0?w.i(b+D)>>>m|w.i(b+D+1)<<32-m:w.i(b+D);return new o(T,w.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,nC=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Jn=o}).apply(typeof lh<"u"?lh:typeof self<"u"?self:typeof window<"u"?window:{});function Xe(r,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?r!==e||!n:!e.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(r):n?n.value:e.get(r)}var mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rC,zs,sC,Fo,HB,iC,oC,aC;(function(){var r,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof mo=="object"&&mo];for(var l=0;l<a.length;++l){var f=a[l];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function s(a,l){if(l)e:{var f=n;a=a.split(".");for(var C=0;C<a.length-1;C++){var R=a[C];if(!(R in f))break e;f=f[R]}a=a[a.length-1],C=f[a],l=l(C),l!=C&&l!=null&&e(f,a,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(l){var f=[],C;for(C in l)Object.prototype.hasOwnProperty.call(l,C)&&f.push([C,l[C]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function B(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function c(a,l,f){return a.call.apply(a.bind,arguments)}function u(a,l,f){return u=c,u.apply(null,arguments)}function h(a,l){var f=Array.prototype.slice.call(arguments,1);return function(){var C=f.slice();return C.push.apply(C,arguments),a.apply(this,C)}}function d(a,l){function f(){}f.prototype=l.prototype,a.Z=l.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(C,R,S){for(var q=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)q[oe-2]=arguments[oe];return l.prototype[R].apply(C,q)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function v(a){const l=a.length;if(l>0){const f=Array(l);for(let C=0;C<l;C++)f[C]=a[C];return f}return[]}function P(a,l){for(let C=1;C<arguments.length;C++){const R=arguments[C];var f=typeof R;if(f=f!="object"?f:R?Array.isArray(R)?"array":f:"null",f=="array"||f=="object"&&typeof R.length=="number"){f=a.length||0;const S=R.length||0;a.length=f+S;for(let q=0;q<S;q++)a[f+q]=R[q]}else a.push(R)}}class V{constructor(l,f){this.i=l,this.j=f,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function M(a){o.setTimeout(()=>{throw a},0)}function W(){var a=w;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class Be{constructor(){this.h=this.g=null}add(l,f){const C=ve.get();C.set(l,f),this.h?this.h.next=C:this.g=C,this.h=C}}var ve=new V(()=>new ke,a=>a.reset());class ke{constructor(){this.next=this.g=this.h=null}set(l,f){this.h=l,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Dt,be=!1,w=new Be,m=()=>{const a=Promise.resolve(void 0);Dt=()=>{a.then(D)}};function D(){for(var a;a=W();){try{a.h.call(a.g)}catch(f){M(f)}var l=ve;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}be=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,l),o.removeEventListener("test",f,l)}catch{}return a}();function _(a){return/^[\s\xa0]*$/.test(a)}function ht(a,l){T.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}d(ht,T),ht.prototype.init=function(a,l){const f=this.type=a.type,C=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(f=="mouseover"?l=a.fromElement:f=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ht.Z.h.call(this)},ht.prototype.h=function(){ht.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var sr="closure_listenable_"+(Math.random()*1e6|0),cg=0;function ug(a,l,f,C,R){this.listener=a,this.proxy=null,this.src=l,this.type=f,this.capture=!!C,this.ha=R,this.key=++cg,this.da=this.fa=!1}function eo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function to(a,l,f){for(const C in a)l.call(f,a[C],C,a)}function lg(a,l){for(const f in a)l.call(void 0,a[f],f,a)}function Nu(a){const l={};for(const f in a)l[f]=a[f];return l}const Ou="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Lu(a,l){let f,C;for(let R=1;R<arguments.length;R++){C=arguments[R];for(f in C)a[f]=C[f];for(let S=0;S<Ou.length;S++)f=Ou[S],Object.prototype.hasOwnProperty.call(C,f)&&(a[f]=C[f])}}function no(a){this.src=a,this.g={},this.h=0}no.prototype.add=function(a,l,f,C,R){const S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);const q=Ja(a,l,C,R);return q>-1?(l=a[q],f||(l.fa=!1)):(l=new ug(l,this.src,S,!!C,R),l.fa=f,a.push(l)),l};function Ha(a,l){const f=l.type;if(f in a.g){var C=a.g[f],R=Array.prototype.indexOf.call(C,l,void 0),S;(S=R>=0)&&Array.prototype.splice.call(C,R,1),S&&(eo(l),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Ja(a,l,f,C){for(let R=0;R<a.length;++R){const S=a[R];if(!S.da&&S.listener==l&&S.capture==!!f&&S.ha==C)return R}return-1}var qa="closure_lm_"+(Math.random()*1e6|0),ja={};function Fu(a,l,f,C,R){if(Array.isArray(l)){for(let S=0;S<l.length;S++)Fu(a,l[S],f,C,R);return null}return f=Vu(f),a&&a[sr]?a.J(l,f,B(C)?!!C.capture:!1,R):hg(a,l,f,!1,C,R)}function hg(a,l,f,C,R,S){if(!l)throw Error("Invalid event type");const q=B(R)?!!R.capture:!!R;let oe=za(a);if(oe||(a[qa]=oe=new no(a)),f=oe.add(l,f,C,q,S),f.proxy)return f;if(C=fg(),f.proxy=C,C.src=a,C.listener=f,a.addEventListener)b||(R=q),R===void 0&&(R=!1),a.addEventListener(l.toString(),C,R);else if(a.attachEvent)a.attachEvent(xu(l.toString()),C);else if(a.addListener&&a.removeListener)a.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return f}function fg(){function a(f){return l.call(a.src,a.listener,f)}const l=dg;return a}function ku(a,l,f,C,R){if(Array.isArray(l))for(var S=0;S<l.length;S++)ku(a,l[S],f,C,R);else C=B(C)?!!C.capture:!!C,f=Vu(f),a&&a[sr]?(a=a.i,S=String(l).toString(),S in a.g&&(l=a.g[S],f=Ja(l,f,C,R),f>-1&&(eo(l[f]),Array.prototype.splice.call(l,f,1),l.length==0&&(delete a.g[S],a.h--)))):a&&(a=za(a))&&(l=a.g[l.toString()],a=-1,l&&(a=Ja(l,f,C,R)),(f=a>-1?l[a]:null)&&Ka(f))}function Ka(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[sr])Ha(l.i,a);else{var f=a.type,C=a.proxy;l.removeEventListener?l.removeEventListener(f,C,a.capture):l.detachEvent?l.detachEvent(xu(f),C):l.addListener&&l.removeListener&&l.removeListener(C),(f=za(l))?(Ha(f,a),f.h==0&&(f.src=null,l[qa]=null)):eo(a)}}}function xu(a){return a in ja?ja[a]:ja[a]="on"+a}function dg(a,l){if(a.da)a=!0;else{l=new ht(l,this);const f=a.listener,C=a.ha||a.src;a.fa&&Ka(a),a=f.call(C,l)}return a}function za(a){return a=a[qa],a instanceof no?a:null}var Wa="__closure_events_fn_"+(Math.random()*1e9>>>0);function Vu(a){return typeof a=="function"?a:(a[Wa]||(a[Wa]=function(l){return a.handleEvent(l)}),a[Wa])}function tt(){A.call(this),this.i=new no(this),this.M=this,this.G=null}d(tt,A),tt.prototype[sr]=!0,tt.prototype.removeEventListener=function(a,l,f,C){ku(this,a,l,f,C)};function at(a,l){var f,C=a.G;if(C)for(f=[];C;C=C.G)f.push(C);if(a=a.M,C=l.type||l,typeof l=="string")l=new T(l,a);else if(l instanceof T)l.target=l.target||a;else{var R=l;l=new T(C,a),Lu(l,R)}R=!0;let S,q;if(f)for(q=f.length-1;q>=0;q--)S=l.g=f[q],R=ro(S,C,!0,l)&&R;if(S=l.g=a,R=ro(S,C,!0,l)&&R,R=ro(S,C,!1,l)&&R,f)for(q=0;q<f.length;q++)S=l.g=f[q],R=ro(S,C,!1,l)&&R}tt.prototype.N=function(){if(tt.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const f=a.g[l];for(let C=0;C<f.length;C++)eo(f[C]);delete a.g[l],a.h--}}this.G=null},tt.prototype.J=function(a,l,f,C){return this.i.add(String(a),l,!1,f,C)},tt.prototype.K=function(a,l,f,C){return this.i.add(String(a),l,!0,f,C)};function ro(a,l,f,C){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let R=!0;for(let S=0;S<l.length;++S){const q=l[S];if(q&&!q.da&&q.capture==f){const oe=q.listener,qe=q.ha||q.src;q.fa&&Ha(a.i,q),R=oe.call(qe,C)!==!1&&R}}return R&&!C.defaultPrevented}function Cg(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function Mu(a){a.g=Cg(()=>{a.g=null,a.i&&(a.i=!1,Mu(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class pg extends A{constructor(l,f){super(),this.m=l,this.l=f,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Mu(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ws(a){A.call(this),this.h=a,this.g={}}d(ws,A);var Gu=[];function Uu(a){to(a.g,function(l,f){this.g.hasOwnProperty(f)&&Ka(l)},a),a.g={}}ws.prototype.N=function(){ws.Z.N.call(this),Uu(this)},ws.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qa=o.JSON.stringify,gg=o.JSON.parse,mg=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Hu(){}function Ju(){}var As={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function $a(){T.call(this,"d")}d($a,T);function Ya(){T.call(this,"c")}d(Ya,T);var ir={},qu=null;function so(){return qu=qu||new tt}ir.Ia="serverreachability";function ju(a){T.call(this,ir.Ia,a)}d(ju,T);function vs(a){const l=so();at(l,new ju(l))}ir.STAT_EVENT="statevent";function Ku(a,l){T.call(this,ir.STAT_EVENT,a),this.stat=l}d(Ku,T);function Bt(a){const l=so();at(l,new Ku(l,a))}ir.Ja="timingevent";function zu(a,l){T.call(this,ir.Ja,a),this.size=l}d(zu,T);function Rs(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function bs(){this.g=!0}bs.prototype.ua=function(){this.g=!1};function Eg(a,l,f,C,R,S){a.info(function(){if(a.g)if(S){var q="",oe=S.split("&");for(let ge=0;ge<oe.length;ge++){var qe=oe[ge].split("=");if(qe.length>1){const Ke=qe[0];qe=qe[1];const Gt=Ke.split("_");q=Gt.length>=2&&Gt[1]=="type"?q+(Ke+"="+qe+"&"):q+(Ke+"=redacted&")}}}else q=null;else q=S;return"XMLHTTP REQ ("+C+") [attempt "+R+"]: "+l+`
`+f+`
`+q})}function _g(a,l,f,C,R,S,q){a.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+R+"]: "+l+`
`+f+`
`+S+" "+q})}function kr(a,l,f,C){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+Ig(a,f)+(C?" "+C:"")})}function Dg(a,l){a.info(function(){return"TIMEOUT: "+l})}bs.prototype.info=function(){};function Ig(a,l){if(!a.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(a=0;a<S.length;a++)if(Array.isArray(S[a])){var f=S[a];if(!(f.length<2)){var C=f[1];if(Array.isArray(C)&&!(C.length<1)){var R=C[0];if(R!="noop"&&R!="stop"&&R!="close")for(let q=1;q<C.length;q++)C[q]=""}}}}return Qa(S)}catch{return l}}var io={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Wu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Qu;function Xa(){}d(Xa,Hu),Xa.prototype.g=function(){return new XMLHttpRequest},Qu=new Xa;function Ps(a){return encodeURIComponent(String(a))}function yg(a){var l=1;a=a.split(":");const f=[];for(;l>0&&a.length;)f.push(a.shift()),l--;return a.length&&f.push(a.join(":")),f}function An(a,l,f,C){this.j=a,this.i=l,this.l=f,this.S=C||1,this.V=new ws(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new $u}function $u(){this.i=null,this.g="",this.h=!1}var Yu={},Za={};function eB(a,l,f){a.M=1,a.A=ao(Mt(l)),a.u=f,a.R=!0,Xu(a,null)}function Xu(a,l){a.F=Date.now(),oo(a),a.B=Mt(a.A);var f=a.B,C=a.S;Array.isArray(C)||(C=[String(C)]),ll(f.i,"t",C),a.C=0,f=a.j.L,a.h=new $u,a.g=bl(a.j,f?l:null,!a.u),a.P>0&&(a.O=new pg(u(a.Y,a,a.g),a.P)),l=a.V,f=a.g,C=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(Gu[0]=R.toString()),R=Gu);for(let S=0;S<R.length;S++){const q=Fu(f,R[S],C||l.handleEvent,!1,l.h||l);if(!q)break;l.g[q.key]=q}l=a.J?Nu(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),vs(),Eg(a.i,a.v,a.B,a.l,a.S,a.u)}An.prototype.ba=function(a){a=a.target;const l=this.O;l&&bn(a)==3?l.j():this.Y(a)},An.prototype.Y=function(a){try{if(a==this.g)e:{const oe=bn(this.g),qe=this.g.ya(),ge=this.g.ca();if(!(oe<3)&&(oe!=3||this.g&&(this.h.h||this.g.la()||ml(this.g)))){this.K||oe!=4||qe==7||(qe==8||ge<=0?vs(3):vs(2)),tB(this);var l=this.g.ca();this.X=l;var f=Tg(this);if(this.o=l==200,_g(this.i,this.v,this.B,this.l,this.S,oe,l),this.o){if(this.U&&!this.L){t:{if(this.g){var C,R=this.g;if((C=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(C)){var S=C;break t}}S=null}if(a=S)kr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,nB(this,a);else{this.o=!1,this.m=3,Bt(12),or(this),Ss(this);break e}}if(this.R){a=!0;let Ke;for(;!this.K&&this.C<f.length;)if(Ke=wg(this,f),Ke==Za){oe==4&&(this.m=4,Bt(14),a=!1),kr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ke==Yu){this.m=4,Bt(15),kr(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else kr(this.i,this.l,Ke,null),nB(this,Ke);if(Zu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),oe!=4||f.length!=0||this.h.h||(this.m=1,Bt(16),a=!1),this.o=this.o&&a,!a)kr(this.i,this.l,f,"[Invalid Chunked Response]"),or(this),Ss(this);else if(f.length>0&&!this.W){this.W=!0;var q=this.j;q.g==this&&q.aa&&!q.P&&(q.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),uB(q),q.P=!0,Bt(11))}}else kr(this.i,this.l,f,null),nB(this,f);oe==4&&or(this),this.o&&!this.K&&(oe==4?wl(this.j,this):(this.o=!1,oo(this)))}else Mg(this.g),l==400&&f.indexOf("Unknown SID")>0?(this.m=3,Bt(12)):(this.m=0,Bt(13)),or(this),Ss(this)}}}catch{}finally{}};function Tg(a){if(!Zu(a))return a.g.la();const l=ml(a.g);if(l==="")return"";let f="";const C=l.length,R=bn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return or(a),Ss(a),"";a.h.i=new o.TextDecoder}for(let S=0;S<C;S++)a.h.h=!0,f+=a.h.i.decode(l[S],{stream:!(R&&S==C-1)});return l.length=0,a.h.g+=f,a.C=0,a.h.g}function Zu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function wg(a,l){var f=a.C,C=l.indexOf(`
`,f);return C==-1?Za:(f=Number(l.substring(f,C)),isNaN(f)?Yu:(C+=1,C+f>l.length?Za:(l=l.slice(C,C+f),a.C=C+f,l)))}An.prototype.cancel=function(){this.K=!0,or(this)};function oo(a){a.T=Date.now()+a.H,el(a,a.H)}function el(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Rs(u(a.aa,a),l)}function tB(a){a.D&&(o.clearTimeout(a.D),a.D=null)}An.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Dg(this.i,this.B),this.M!=2&&(vs(),Bt(17)),or(this),this.m=2,Ss(this)):el(this,this.T-a)};function Ss(a){a.j.I==0||a.K||wl(a.j,a)}function or(a){tB(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,Uu(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function nB(a,l){try{var f=a.j;if(f.I!=0&&(f.g==a||rB(f.h,a))){if(!a.L&&rB(f.h,a)&&f.I==3){try{var C=f.Ba.g.parse(l)}catch{C=null}if(Array.isArray(C)&&C.length==3){var R=C;if(R[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)ho(f),uo(f);else break e;cB(f),Bt(18)}}else f.xa=R[1],0<f.xa-f.K&&R[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Rs(u(f.Va,f),6e3));rl(f.h)<=1&&f.ta&&(f.ta=void 0)}else Br(f,11)}else if((a.L||f.g==a)&&ho(f),!_(l))for(R=f.Ba.g.parse(l),l=0;l<R.length;l++){let ge=R[l];const Ke=ge[0];if(!(Ke<=f.K))if(f.K=Ke,ge=ge[1],f.I==2)if(ge[0]=="c"){f.M=ge[1],f.ba=ge[2];const Gt=ge[3];Gt!=null&&(f.ka=Gt,f.j.info("VER="+f.ka));const cr=ge[4];cr!=null&&(f.za=cr,f.j.info("SVER="+f.za));const Pn=ge[5];Pn!=null&&typeof Pn=="number"&&Pn>0&&(C=1.5*Pn,f.O=C,f.j.info("backChannelRequestTimeoutMs_="+C)),C=f;const Sn=a.g;if(Sn){const Co=Sn.g?Sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Co){var S=C.h;S.g||Co.indexOf("spdy")==-1&&Co.indexOf("quic")==-1&&Co.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(sB(S,S.h),S.h=null))}if(C.G){const lB=Sn.g?Sn.g.getResponseHeader("X-HTTP-Session-Id"):null;lB&&(C.wa=lB,Ie(C.J,C.G,lB))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),C=f;var q=a;if(C.na=Rl(C,C.L?C.ba:null,C.W),q.L){sl(C.h,q);var oe=q,qe=C.O;qe&&(oe.H=qe),oe.D&&(tB(oe),oo(oe)),C.g=q}else yl(C);f.i.length>0&&lo(f)}else ge[0]!="stop"&&ge[0]!="close"||Br(f,7);else f.I==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?Br(f,7):BB(f):ge[0]!="noop"&&f.l&&f.l.qa(ge),f.A=0)}}vs(4)}catch{}}var Ag=class{constructor(a,l){this.g=a,this.map=l}};function tl(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function nl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function rl(a){return a.h?1:a.g?a.g.size:0}function rB(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function sB(a,l){a.g?a.g.add(l):a.h=l}function sl(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}tl.prototype.cancel=function(){if(this.i=il(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function il(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const f of a.g.values())l=l.concat(f.G);return l}return v(a.i)}var ol=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vg(a,l){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const C=a[f].indexOf("=");let R,S=null;C>=0?(R=a[f].substring(0,C),S=a[f].substring(C+1)):R=a[f],l(R,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function vn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof vn?(this.l=a.l,Ns(this,a.j),this.o=a.o,this.g=a.g,Os(this,a.u),this.h=a.h,iB(this,hl(a.i)),this.m=a.m):a&&(l=String(a).match(ol))?(this.l=!1,Ns(this,l[1]||"",!0),this.o=Ls(l[2]||""),this.g=Ls(l[3]||"",!0),Os(this,l[4]),this.h=Ls(l[5]||"",!0),iB(this,l[6]||"",!0),this.m=Ls(l[7]||"")):(this.l=!1,this.i=new ks(null,this.l))}vn.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(Fs(l,al,!0),":");var f=this.g;return(f||l=="file")&&(a.push("//"),(l=this.o)&&a.push(Fs(l,al,!0),"@"),a.push(Ps(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Fs(f,f.charAt(0)=="/"?Pg:bg,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Fs(f,Ng)),a.join("")},vn.prototype.resolve=function(a){const l=Mt(this);let f=!!a.j;f?Ns(l,a.j):f=!!a.o,f?l.o=a.o:f=!!a.g,f?l.g=a.g:f=a.u!=null;var C=a.h;if(f)Os(l,a.u);else if(f=!!a.h){if(C.charAt(0)!="/")if(this.g&&!this.h)C="/"+C;else{var R=l.h.lastIndexOf("/");R!=-1&&(C=l.h.slice(0,R+1)+C)}if(R=C,R==".."||R==".")C="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){C=R.lastIndexOf("/",0)==0,R=R.split("/");const S=[];for(let q=0;q<R.length;){const oe=R[q++];oe=="."?C&&q==R.length&&S.push(""):oe==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),C&&q==R.length&&S.push("")):(S.push(oe),C=!0)}C=S.join("/")}else C=R}return f?l.h=C:f=a.i.toString()!=="",f?iB(l,hl(a.i)):f=!!a.m,f&&(l.m=a.m),l};function Mt(a){return new vn(a)}function Ns(a,l,f){a.j=f?Ls(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function Os(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function iB(a,l,f){l instanceof ks?(a.i=l,Og(a.i,a.l)):(f||(l=Fs(l,Sg)),a.i=new ks(l,a.l))}function Ie(a,l,f){a.i.set(l,f)}function ao(a){return Ie(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ls(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Fs(a,l,f){return typeof a=="string"?(a=encodeURI(a).replace(l,Rg),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Rg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var al=/[#\/\?@]/g,bg=/[#\?:]/g,Pg=/[#\?]/g,Sg=/[#\?@]/g,Ng=/#/g;function ks(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function ar(a){a.g||(a.g=new Map,a.h=0,a.i&&vg(a.i,function(l,f){a.add(decodeURIComponent(l.replace(/\+/g," ")),f)}))}r=ks.prototype,r.add=function(a,l){ar(this),this.i=null,a=xr(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(l),this.h+=1,this};function Bl(a,l){ar(a),l=xr(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function cl(a,l){return ar(a),l=xr(a,l),a.g.has(l)}r.forEach=function(a,l){ar(this),this.g.forEach(function(f,C){f.forEach(function(R){a.call(l,R,C,this)},this)},this)};function ul(a,l){ar(a);let f=[];if(typeof l=="string")cl(a,l)&&(f=f.concat(a.g.get(xr(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)f=f.concat(a[l]);return f}r.set=function(a,l){return ar(this),this.i=null,a=xr(this,a),cl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},r.get=function(a,l){return a?(a=ul(this,a),a.length>0?String(a[0]):l):l};function ll(a,l,f){Bl(a,l),f.length>0&&(a.i=null,a.g.set(xr(a,l),v(f)),a.h+=f.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let C=0;C<l.length;C++){var f=l[C];const R=Ps(f);f=ul(this,f);for(let S=0;S<f.length;S++){let q=R;f[S]!==""&&(q+="="+Ps(f[S])),a.push(q)}}return this.i=a.join("&")};function hl(a){const l=new ks;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function xr(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function Og(a,l){l&&!a.j&&(ar(a),a.i=null,a.g.forEach(function(f,C){const R=C.toLowerCase();C!=R&&(Bl(this,C),ll(this,R,f))},a)),a.j=l}function Lg(a,l){const f=new bs;if(o.Image){const C=new Image;C.onload=h(Rn,f,"TestLoadImage: loaded",!0,l,C),C.onerror=h(Rn,f,"TestLoadImage: error",!1,l,C),C.onabort=h(Rn,f,"TestLoadImage: abort",!1,l,C),C.ontimeout=h(Rn,f,"TestLoadImage: timeout",!1,l,C),o.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=a}else l(!1)}function Fg(a,l){const f=new bs,C=new AbortController,R=setTimeout(()=>{C.abort(),Rn(f,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:C.signal}).then(S=>{clearTimeout(R),S.ok?Rn(f,"TestPingServer: ok",!0,l):Rn(f,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(R),Rn(f,"TestPingServer: error",!1,l)})}function Rn(a,l,f,C,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),C(f)}catch{}}function kg(){this.g=new mg}function oB(a){this.i=a.Sb||null,this.h=a.ab||!1}d(oB,Hu),oB.prototype.g=function(){return new Bo(this.i,this.h)};function Bo(a,l){tt.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(Bo,tt),r=Bo.prototype,r.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,Vs(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,xs(this)),this.readyState=0},r.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Vs(this)),this.g&&(this.readyState=3,Vs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;fl(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function fl(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}r.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?xs(this):Vs(this),this.readyState==3&&fl(this)}},r.Oa=function(a){this.g&&(this.response=this.responseText=a,xs(this))},r.Na=function(a){this.g&&(this.response=a,xs(this))},r.ga=function(){this.g&&xs(this)};function xs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Vs(a)}r.setRequestHeader=function(a,l){this.A.append(a,l)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var f=l.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=l.next();return a.join(`\r
`)};function Vs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function dl(a){let l="";return to(a,function(f,C){l+=C,l+=":",l+=f,l+=`\r
`}),l}function aB(a,l,f){e:{for(C in f){var C=!1;break e}C=!0}C||(f=dl(f),typeof a=="string"?f!=null&&Ps(f):Ie(a,l,f))}function Ne(a){tt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(Ne,tt);var xg=/^https?$/i,Vg=["POST","PUT"];r=Ne.prototype,r.Fa=function(a){this.H=a},r.ea=function(a,l,f,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Qu.g(),this.g.onreadystatechange=E(u(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(S){Cl(this,S);return}if(a=f||"",f=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var R in C)f.set(R,C[R]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const S of C.keys())f.set(S,C.get(S));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(f.keys()).find(S=>S.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Vg,l,void 0)>=0)||C||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,q]of f)this.g.setRequestHeader(S,q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(S){Cl(this,S)}};function Cl(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,pl(a),co(a)}function pl(a){a.A||(a.A=!0,at(a,"complete"),at(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,at(this,"complete"),at(this,"abort"),co(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),co(this,!0)),Ne.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?gl(this):this.Xa())},r.Xa=function(){gl(this)};function gl(a){if(a.h&&typeof i<"u"){if(a.v&&bn(a)==4)setTimeout(a.Ca.bind(a),0);else if(at(a,"readystatechange"),bn(a)==4){a.h=!1;try{const S=a.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var f;if(!(f=l)){var C;if(C=S===0){let q=String(a.D).match(ol)[1]||null;!q&&o.self&&o.self.location&&(q=o.self.location.protocol.slice(0,-1)),C=!xg.test(q?q.toLowerCase():"")}f=C}if(f)at(a,"complete"),at(a,"success");else{a.o=6;try{var R=bn(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",pl(a)}}finally{co(a)}}}}function co(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,l||at(a,"ready");try{f.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function bn(a){return a.g?a.g.readyState:0}r.ca=function(){try{return bn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),gg(l)}};function ml(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Mg(a){const l={};a=(a.g&&bn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<a.length;C++){if(_(a[C]))continue;var f=yg(a[C]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const S=l[R]||[];l[R]=S,S.push(f)}lg(l,function(C){return C.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ms(a,l,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||l}function El(a){this.za=0,this.i=[],this.j=new bs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ms("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ms("baseRetryDelayMs",5e3,a),this.Za=Ms("retryDelaySeedMs",1e4,a),this.Ta=Ms("forwardChannelMaxRetries",2,a),this.va=Ms("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new tl(a&&a.concurrentRequestLimit),this.Ba=new kg,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=El.prototype,r.ka=8,r.I=1,r.connect=function(a,l,f,C){Bt(0),this.W=a,this.H=l||{},f&&C!==void 0&&(this.H.OSID=f,this.H.OAID=C),this.F=this.X,this.J=Rl(this,null,this.W),lo(this)};function BB(a){if(_l(a),a.I==3){var l=a.V++,f=Mt(a.J);if(Ie(f,"SID",a.M),Ie(f,"RID",l),Ie(f,"TYPE","terminate"),Gs(a,f),l=new An(a,a.j,l),l.M=2,l.A=ao(Mt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(l.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=l.A,f=!0),f||(l.g=bl(l.j,null),l.g.ea(l.A)),l.F=Date.now(),oo(l)}vl(a)}function uo(a){a.g&&(uB(a),a.g.cancel(),a.g=null)}function _l(a){uo(a),a.v&&(o.clearTimeout(a.v),a.v=null),ho(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function lo(a){if(!nl(a.h)&&!a.m){a.m=!0;var l=a.Ea;Dt||m(),be||(Dt(),be=!0),w.add(l,a),a.D=0}}function Gg(a,l){return rl(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Rs(u(a.Ea,a,l),Al(a,a.D)),a.D++,!0)}r.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new An(this,this.j,a);let S=this.o;if(this.U&&(S?(S=Nu(S),Lu(S,this.U)):S=this.U),this.u!==null||this.R||(R.J=S,S=null),this.S)e:{for(var l=0,f=0;f<this.i.length;f++){t:{var C=this.i[f];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(l+=C,l>4096){l=f;break e}if(l===4096||f===this.i.length-1){l=f+1;break e}}l=1e3}else l=1e3;l=Il(this,R,l),f=Mt(this.J),Ie(f,"RID",a),Ie(f,"CVER",22),this.G&&Ie(f,"X-HTTP-Session-Id",this.G),Gs(this,f),S&&(this.R?l="headers="+Ps(dl(S))+"&"+l:this.u&&aB(f,this.u,S)),sB(this.h,R),this.Ra&&Ie(f,"TYPE","init"),this.S?(Ie(f,"$req",l),Ie(f,"SID","null"),R.U=!0,eB(R,f,null)):eB(R,f,l),this.I=2}}else this.I==3&&(a?Dl(this,a):this.i.length==0||nl(this.h)||Dl(this))};function Dl(a,l){var f;l?f=l.l:f=a.V++;const C=Mt(a.J);Ie(C,"SID",a.M),Ie(C,"RID",f),Ie(C,"AID",a.K),Gs(a,C),a.u&&a.o&&aB(C,a.u,a.o),f=new An(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),l&&(a.i=l.G.concat(a.i)),l=Il(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),sB(a.h,f),eB(f,C,l)}function Gs(a,l){a.H&&to(a.H,function(f,C){Ie(l,C,f)}),a.l&&to({},function(f,C){Ie(l,C,f)})}function Il(a,l,f){f=Math.min(a.i.length,f);const C=a.l?u(a.l.Ka,a.l,a):null;e:{var R=a.i;let oe=-1;for(;;){const qe=["count="+f];oe==-1?f>0?(oe=R[0].g,qe.push("ofs="+oe)):oe=0:qe.push("ofs="+oe);let ge=!0;for(let Ke=0;Ke<f;Ke++){var S=R[Ke].g;const Gt=R[Ke].map;if(S-=oe,S<0)oe=Math.max(0,R[Ke].g-100),ge=!1;else try{S="req"+S+"_"||"";try{var q=Gt instanceof Map?Gt:Object.entries(Gt);for(const[cr,Pn]of q){let Sn=Pn;B(Pn)&&(Sn=Qa(Pn)),qe.push(S+cr+"="+encodeURIComponent(Sn))}}catch(cr){throw qe.push(S+"type="+encodeURIComponent("_badmap")),cr}}catch{C&&C(Gt)}}if(ge){q=qe.join("&");break e}}q=void 0}return a=a.i.splice(0,f),l.G=a,q}function yl(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;Dt||m(),be||(Dt(),be=!0),w.add(l,a),a.A=0}}function cB(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Rs(u(a.Da,a),Al(a,a.A)),a.A++,!0)}r.Da=function(){if(this.v=null,Tl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Rs(u(this.Wa,this),a)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Bt(10),uo(this),Tl(this))};function uB(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Tl(a){a.g=new An(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=Mt(a.na);Ie(l,"RID","rpc"),Ie(l,"SID",a.M),Ie(l,"AID",a.K),Ie(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ie(l,"TO",a.ia),Ie(l,"TYPE","xmlhttp"),Gs(a,l),a.u&&a.o&&aB(l,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=ao(Mt(l)),f.u=null,f.R=!0,Xu(f,a)}r.Va=function(){this.C!=null&&(this.C=null,uo(this),cB(this),Bt(19))};function ho(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function wl(a,l){var f=null;if(a.g==l){ho(a),uB(a),a.g=null;var C=2}else if(rB(a.h,l))f=l.G,sl(a.h,l),C=1;else return;if(a.I!=0){if(l.o)if(C==1){f=l.u?l.u.length:0,l=Date.now()-l.F;var R=a.D;C=so(),at(C,new zu(C,f)),lo(a)}else yl(a);else if(R=l.m,R==3||R==0&&l.X>0||!(C==1&&Gg(a,l)||C==2&&cB(a)))switch(f&&f.length>0&&(l=a.h,l.i=l.i.concat(f)),R){case 1:Br(a,5);break;case 4:Br(a,10);break;case 3:Br(a,6);break;default:Br(a,2)}}}function Al(a,l){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*l}function Br(a,l){if(a.j.info("Error code "+l),l==2){var f=u(a.bb,a),C=a.Ua;const R=!C;C=new vn(C||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ns(C,"https"),ao(C),R?Lg(C.toString(),f):Fg(C.toString(),f)}else Bt(2);a.I=0,a.l&&a.l.pa(l),vl(a),_l(a)}r.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Bt(2)):(this.j.info("Failed to ping google.com"),Bt(1))};function vl(a){if(a.I=0,a.ja=[],a.l){const l=il(a.h);(l.length!=0||a.i.length!=0)&&(P(a.ja,l),P(a.ja,a.i),a.h.i.length=0,v(a.i),a.i.length=0),a.l.oa()}}function Rl(a,l,f){var C=f instanceof vn?Mt(f):new vn(f);if(C.g!="")l&&(C.g=l+"."+C.g),Os(C,C.u);else{var R=o.location;C=R.protocol,l=l?l+"."+R.hostname:R.hostname,R=+R.port;const S=new vn(null);C&&Ns(S,C),l&&(S.g=l),R&&Os(S,R),f&&(S.h=f),C=S}return f=a.G,l=a.wa,f&&l&&Ie(C,f,l),Ie(C,"VER",a.ka),Gs(a,C),C}function bl(a,l,f){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new Ne(new oB({ab:f})):new Ne(a.ma),l.Fa(a.L),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pl(){}r=Pl.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function fo(){}fo.prototype.g=function(a,l){return new It(a,l)};function It(a,l){tt.call(this),this.g=new El(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!_(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!_(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new Vr(this)}d(It,tt),It.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){BB(this.g)},It.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=Qa(a),a=f);l.i.push(new Ag(l.Ya++,a)),l.I==3&&lo(l)},It.prototype.N=function(){this.g.l=null,delete this.j,BB(this.g),delete this.g,It.Z.N.call(this)};function Sl(a){$a.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const f in l){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}d(Sl,$a);function Nl(){Ya.call(this),this.status=1}d(Nl,Ya);function Vr(a){this.g=a}d(Vr,Pl),Vr.prototype.ra=function(){at(this.g,"a")},Vr.prototype.qa=function(a){at(this.g,new Sl(a))},Vr.prototype.pa=function(a){at(this.g,new Nl)},Vr.prototype.oa=function(){at(this.g,"b")},fo.prototype.createWebChannel=fo.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,aC=function(){return new fo},oC=function(){return so()},iC=ir,HB={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},io.NO_ERROR=0,io.TIMEOUT=8,io.HTTP_ERROR=6,Fo=io,Wu.COMPLETE="complete",sC=Wu,Ju.EventType=As,As.OPEN="a",As.CLOSE="b",As.ERROR="c",As.MESSAGE="d",tt.prototype.listen=tt.prototype.J,zs=Ju,Ne.prototype.listenOnce=Ne.prototype.K,Ne.prototype.getLastError=Ne.prototype.Ha,Ne.prototype.getLastErrorCode=Ne.prototype.ya,Ne.prototype.getStatus=Ne.prototype.ca,Ne.prototype.getResponseJson=Ne.prototype.La,Ne.prototype.getResponseText=Ne.prototype.la,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Fa,rC=Ne}).apply(typeof mo<"u"?mo:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.8.6
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository github:le0pard/re2js
* @license MIT
*/var me,x=(me=class{},U(me,"FOLD_CASE",1),U(me,"LITERAL",2),U(me,"CLASS_NL",4),U(me,"DOT_NL",8),U(me,"ONE_LINE",16),U(me,"NON_GREEDY",32),U(me,"PERL_X",64),U(me,"UNICODE_GROUPS",128),U(me,"WAS_DOLLAR",256),U(me,"LOOKBEHIND",512),U(me,"MATCH_NL",me.CLASS_NL|me.DOT_NL),U(me,"PERL",me.CLASS_NL|me.ONE_LINE|me.PERL_X|me.UNICODE_GROUPS),U(me,"POSIX",0),U(me,"UNANCHORED",0),U(me,"ANCHOR_START",1),U(me,"ANCHOR_BOTH",2),me);const Mr={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},pi=128,JB=new Int32Array(pi),qB=new Int32Array(pi),Eo=65535;for(let r=0;r<pi;r++)r>=97&&r<=122?JB[r]=r-32:JB[r]=r,r>=65&&r<=90?qB[r]=r+32:qB[r]=r;var LB,N=(LB=class{static toUpperCase(r){if(r<pi)return JB[r];const e=String.fromCodePoint(r).toUpperCase(),t=e.codePointAt(0)>Eo?2:1;if(e.length>t)return r;const n=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),s=n.codePointAt(0)>Eo?2:1;return n.length>s||n.codePointAt(0)!==r?r:e.codePointAt(0)}static toLowerCase(r){if(r<pi)return qB[r];const e=String.fromCodePoint(r).toLowerCase(),t=e.codePointAt(0)>Eo?2:1;if(e.length>t)return r;const n=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),s=n.codePointAt(0)>Eo?2:1;return n.length>s||n.codePointAt(0)!==r?r:e.codePointAt(0)}},U(LB,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["'",39],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["`",96],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]])),LB),p=class{constructor(r,e=!1){this.data=r,this.isStride1=e,this.SIZE=e?2:3}getLo(r){return this.data[r*this.SIZE]}getHi(r){return this.data[r*this.SIZE+1]}getStride(r){return this.isStride1?1:this.data[r*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const BC=new Uint8Array(256);for(let r=0,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-";r<64;r++)BC[e.charCodeAt(r)]=r;const cC=r=>{const e=[];let t=0,n=0;for(let s=0;s<r.length;s++){let i=BC[r.charCodeAt(s)];t|=(i&31)<<n,i&32?n+=5:(e.push(t),t=0,n=0)}return e},g=(r,e)=>{const t=cC(r),n=e?t.length/2:t.length/3,s=new Uint32Array(n*3);let i=0,o=0;for(let B=0;B<n;B++)i+=t[o++],s[B*3]=i,i+=t[o++],s[B*3+1]=i,s[B*3+2]=e?1:t[o++];return s},ty=r=>{const e=cC(r),t=new Map;let n=0;for(let s=0;s<e.length;s+=2){n+=e[s];const i=e[s+1],o=i>>>1^-(i&1);t.set(n,n+o)}return t};var _o=class{constructor(r){this.initializer=r,this.cache=new Map}has(r){return r in this.initializer}get(r){if(this.cache.has(r))return this.cache.get(r);const e=this.initializer[r],t=e?e():null;return this.cache.set(r,t),t}},Ln,dt=(Ln=class{static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=ty("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static get Print(){return this._Print||(this._Print=new p(g("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}static get Upper(){return this.CATEGORIES.get("Lu")}},U(Ln,"_CASE_ORBIT",null),U(Ln,"_Print",null),U(Ln,"CATEGORIES",new _o({C:()=>new p(g("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new p(g("AfgDgB",!0)),Cf:()=>new p(g("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new p(g("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new p(g("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new p(g("gg2B--B",!0)),L:()=>new p(g("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new p(g("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new p(g("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new p(g("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new p(g("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new p(g("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new p(g("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new p(g("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new p(g("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new p(g("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new p(g("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new p(g("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new p(g("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new p(g("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new p(g("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new p(g("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new p(g("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new p(g("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new p(g("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new p(g("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new p(g("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new p(g("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new p(g("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new p(g("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new p(g("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new p(g("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new p(g("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new p(g("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new p(g("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new p(g("ohIA",!0)),Zp:()=>new p(g("phIA",!0)),Zs:()=>new p(g("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new p(g("wBJIFbF",!0)),Alphabetic:()=>new p(g("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new p(g("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new p(g("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new p(g("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new p(g("7-8DE",!0)),Emoji_Modifier_Base:()=>new p(g("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new p(g("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new p(g("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new p(g("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new p(g("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new p(g("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new p(g("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new p(g("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new p(g("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new p(g("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))})),U(Ln,"SCRIPTS",new _o({Adlam:()=>new p(g("go6DrCFJFB",!0)),Ahom:()=>new p(g("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new p(g("ggxCmS",!0)),Arabic:()=>new p(g("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new p(g("xpBlBDxBDCks9BE",!0)),Avestan:()=>new p(g("g4iC1BEG",!0)),Balinese:()=>new p(g("g4GsCCxB",!0)),Bamum:()=>new p(g("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new p(g("w26CdDF",!0)),Batak:()=>new p(g("g+GzBJD",!0)),Bengali:()=>new p(g("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new p(g("g17CYDY",!0)),Bhaiksuki:()=>new p(g("ggnCICsBCNLc",!0)),Bopomofo:()=>new p(g("qXB6wLqBxDf",!0)),Brahmi:()=>new p(g("ggkCtCFjBKA",!0)),Braille:()=>new p(g("ggK-H",!0)),Buginese:()=>new p(g("gwGbDB",!0)),Buhid:()=>new p(g("g6FT",!0)),Canadian_Aboriginal:()=>new p(g("ggF-TxRlC7tgCP",!0)),Carian:()=>new p(g("g1gCwB",!0)),Caucasian_Albanian:()=>new p(g("wphCzBMA",!0)),Chakma:()=>new p(g("gokC0BCR",!0)),Cham:()=>new p(g("gwqB2BKNDJDD",!0)),Cherokee:()=>new p(g("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new p(g("w9jCb",!0)),Common:()=>new p(g("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new p(g("ifNxkKzDGG",!0)),Cuneiform:()=>new p(g("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new p(g("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new p(g("w8rCiD",!0)),Cyrillic:()=>new p(g("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new p(g("gghCvC",!0)),Devanagari:()=>new p(g("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new p(g("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new p(g("ggmC7B",!0)),Duployan:()=>new p(g("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new p(g("ggsC1iBL68D",!0)),Elbasan:()=>new p(g("gohCnB",!0)),Elymaic:()=>new p(g("g-jCW",!0)),Ethiopic:()=>new p(g("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new p(g("gqjClBEcJB",!0)),Georgian:()=>new p(g("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new p(g("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new p(g("w5gCa",!0)),Grantha:()=>new p(g("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new p(g("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new p(g("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new p(g("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new p(g("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new p(g("go4C5B",!0)),Han:()=>new p(g("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new p(g("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new p(g("gojCnBJJ",!0)),Hanunoo:()=>new p(g("g5FU",!0)),Hatran:()=>new p(g("gniCSCBGE",!0)),Hebrew:()=>new p(g("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new p(g("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new p(g("giiCVCI",!0)),Inherited:()=>new p(g("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new p(g("g7iCSGH",!0)),Inscriptional_Parthian:()=>new p(g("g6iCVDH",!0)),Javanese:()=>new p(g("gsqBtCDJFB",!0)),Kaithi:()=>new p(g("gkkCiCLA",!0)),Kannada:()=>new p(g("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new p(g("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new p(g("g4nCQCoBEc",!0)),Kayah_Li:()=>new p(g("goqBtBCA",!0)),Kharoshthi:()=>new p(g("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new p(g("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new p(g("g8F9CDJHJnPf",!0)),Khojki:()=>new p(g("gwkCRCuB",!0)),Khudawadi:()=>new p(g("w1kC6BGJ",!0)),Kirat_Rai:()=>new p(g("gq7C5B",!0)),Lao:()=>new p(g("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new p(g("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new p(g("ggH3BEOEC",!0)),Limbu:()=>new p(g("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new p(g("gwhC2JKVLH",!0)),Linear_B:()=>new p(g("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new p(g("wmpBvBx1eA",!0)),Lycian:()=>new p(g("g0gCc",!0)),Lydian:()=>new p(g("gpiCZGA",!0)),Mahajani:()=>new p(g("wqkCmB",!0)),Makasar:()=>new p(g("g3nCY",!0)),Malayalam:()=>new p(g("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new p(g("giCbDA",!0)),Manichaean:()=>new p(g("g2iCmBFL",!0)),Marchen:()=>new p(g("wjnCfDVCN",!0)),Masaram_Gondi:()=>new p(g("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new p(g("gy7C6C",!0)),Meetei_Mayek:()=>new p(g("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new p(g("gg6DkGDP",!0)),Meroitic_Cursive:()=>new p(g("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new p(g("gsiCf",!0)),Miao:()=>new p(g("g47CqCF4BIQ",!0)),Modi:()=>new p(g("gwlCkCMJ",!0)),Mongolian:()=>new p(g("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new p(g("gy6CeCJFB",!0)),Multani:()=>new p(g("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new p(g("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new p(g("gkiCeJI",!0)),Nag_Mundari:()=>new p(g("wm5DpB",!0)),Nandinagari:()=>new p(g("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new p(g("gsGrBFZHKEB",!0)),Newa:()=>new p(g("gglC7CCE",!0)),Nko:()=>new p(g("g+B6BDC",!0)),Nushu:()=>new p(g("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new p(g("go4DsBENDJFB",!0)),Ogham:()=>new p(g("g0Fc",!0)),Ol_Chiki:()=>new p(g("wiHvB",!0)),Ol_Onal:()=>new p(g("wu5DqBFA",!0)),Old_Hungarian:()=>new p(g("gkjCyBOyBIF",!0)),Old_Italic:()=>new p(g("g4gCjBKC",!0)),Old_North_Arabian:()=>new p(g("g0iCf",!0)),Old_Permic:()=>new p(g("w6gCqB",!0)),Old_Persian:()=>new p(g("g9gCjBFN",!0)),Old_Sogdian:()=>new p(g("g4jCnB",!0)),Old_South_Arabian:()=>new p(g("gziCf",!0)),Old_Turkic:()=>new p(g("ggjCoC",!0)),Old_Uyghur:()=>new p(g("w7jCZ",!0)),Oriya:()=>new p(g("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new p(g("wlhCjBFjB",!0)),Osmanya:()=>new p(g("gkhCdDJ",!0)),Pahawh_Hmong:()=>new p(g("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new p(g("gjiCf",!0)),Pau_Cin_Hau:()=>new p(g("g2mC4B",!0)),Phags_Pa:()=>new p(g("giqB3B",!0)),Phoenician:()=>new p(g("goiCbEA",!0)),Psalter_Pahlavi:()=>new p(g("g8iCRIDNG",!0)),Rejang:()=>new p(g("wpqBjBMA",!0)),Runic:()=>new p(g("g1FqCEK",!0)),Samaritan:()=>new p(g("ggCtBDO",!0)),Saurashtra:()=>new p(g("gkqBlCJL",!0)),Sharada:()=>new p(g("gskC-ChsCH",!0)),Shavian:()=>new p(g("wihCvB",!0)),Siddham:()=>new p(g("gslC1BDlB",!0)),Sidetic:()=>new p(g("gqiCZ",!0)),SignWriting:()=>new p(g("gg2DrUQECO",!0)),Sinhala:()=>new p(g("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new p(g("w5jCpB",!0)),Sora_Sompeng:()=>new p(g("wmkCYIJ",!0)),Soyombo:()=>new p(g("wymCyC",!0)),Sundanese:()=>new p(g("g8G-BhIH",!0)),Sunuwar:()=>new p(g("g+mChBPJ",!0)),Syloti_Nagri:()=>new p(g("ggqBsB",!0)),Syriac:()=>new p(g("g4BNC7BDCxIK",!0)),Tagalog:()=>new p(g("g4FVKA",!0)),Tagbanwa:()=>new p(g("g7FMCCCB",!0)),Tai_Le:()=>new p(g("wqGdDE",!0)),Tai_Tham:()=>new p(g("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new p(g("g0qBiCZE",!0)),Tai_Yo:()=>new p(g("g25DeCVJB",!0)),Takri:()=>new p(g("g0lC5BHJ",!0)),Tamil:()=>new p(g("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new p(g("wz6CuCCJ",!0)),Tangut:()=>new p(g("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new p(g("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new p(g("g8BxB",!0)),Thai:()=>new p(g("hwD5BGb",!0)),Tibetan:()=>new p(g("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new p(g("wpL3BIBPA",!0)),Tirhuta:()=>new p(g("gklCnCJJ",!0)),Todhri:()=>new p(g("guhCzB",!0)),Tolong_Siki:()=>new p(g("wtnCrBFJ",!0)),Toto:()=>new p(g("w04De",!0)),Tulu_Tigalari:()=>new p(g("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new p(g("g8gCdCA",!0)),Unknown:()=>new p(g("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new p(g("gopBrJ",!0)),Vithkuqi:()=>new p(g("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new p(g("g24D5BGA",!0)),Warang_Citi:()=>new p(g("glmCyCNA",!0)),Yezidi:()=>new p(g("g0jCpBCCDB",!0)),Yi:()=>new p(g("ggoBskBE2B",!0)),Zanabazar_Square:()=>new p(g("gwmCnC",!0))})),U(Ln,"FOLD_CATEGORIES",new _o({L:()=>new p(g("laA",!0)),LC:()=>new p(g("laA",!0)),Ll:()=>new p(g("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new p(g("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new p(g("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new p(g("5cgBgBlgHAB",!1)),Mn:()=>new p(g("5cgBgBlgHAB",!1)),Emoji:()=>new p(g("8mJA",!0)),Extended_Pictographic:()=>new p(g("8mJA",!0)),Lowercase:()=>new p(g("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new p(g("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new p(g("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))})),U(Ln,"FOLD_SCRIPT",new _o({Common:()=>new p(g("8cgBgB",!1)),Greek:()=>new p(g("1FwUwU",!1)),Inherited:()=>new p(g("5cgBgBlgHAB",!1))})),Ln),Ee,z=(Ee=class{static is32(e,t){let n=0,s=e.length;for(;n<s;){const i=n+Math.floor((s-n)/2),o=e.getLo(i),B=e.getHi(i);if(o<=t&&t<=B){const c=e.getStride(i);return(t-o)%c===0}t<o?s=i:n=i+1}return!1}static is(e,t){if(t<=Ee.MAX_LATIN1){for(let n=0;n<e.length;n++){if(t>e.getHi(n))continue;const s=e.getLo(n);if(t<s)return!1;const i=e.getStride(n);return(t-s)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&Ee.is32(e,t)}static isUpper(e){if(e<=Ee.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return Ee.is(dt.Upper,e)}static isPrint(e){return e<=Ee.MAX_LATIN1?e>=32&&e<Ee.MAX_ASCII||e>=161&&e!==173:Ee.is(dt.Print,e)}static simpleFold(e){if(dt.CASE_ORBIT.has(e))return dt.CASE_ORBIT.get(e);const t=N.toLowerCase(e);return t!==e?t:N.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=Ee.MAX_ASCII&&t<=Ee.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let n=Ee.simpleFold(e);n!==e;n=Ee.simpleFold(n))if(n===t)return!0;return!1}},U(Ee,"MAX_RUNE",1114111),U(Ee,"MAX_ASCII",127),U(Ee,"MAX_LATIN1",255),U(Ee,"MAX_BMP",65535),U(Ee,"MIN_FOLD",65),U(Ee,"MAX_FOLD",125251),U(Ee,"MIN_HIGH_SURROGATE",55296),U(Ee,"MAX_HIGH_SURROGATE",56319),U(Ee,"MIN_LOW_SURROGATE",56320),U(Ee,"MAX_LOW_SURROGATE",57343),U(Ee,"MIN_SUPPLEMENTARY_CODE_POINT",65536),Ee);const Sc=256,uC=new Uint8Array(Sc);for(let r=0;r<Sc;r++)uC[r]=97<=r&&r<=122||65<=r&&r<=90||48<=r&&r<=57||r===95?1:0;let TB=null,wB=null;var Te,$=(Te=class{static emptyInts(){return[]}static isByteArray(e){return Array.isArray(e)||e instanceof Uint8Array}static isalnum(e){return N.CODES.get("0")<=e&&e<=N.CODES.get("9")||N.CODES.get("a")<=e&&e<=N.CODES.get("z")||N.CODES.get("A")<=e&&e<=N.CODES.get("Z")}static unhex(e){return N.CODES.get("0")<=e&&e<=N.CODES.get("9")?e-N.CODES.get("0"):N.CODES.get("a")<=e&&e<=N.CODES.get("f")?e-N.CODES.get("a")+10:N.CODES.get("A")<=e&&e<=N.CODES.get("F")?e-N.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(z.isPrint(e))Te.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case N.CODES.get('"'):t+='\\"';break;case N.CODES.get("\\"):t+="\\\\";break;case N.CODES.get("	"):t+="\\t";break;case N.CODES.get(`
`):t+="\\n";break;case N.CODES.get("\r"):t+="\\r";break;case N.CODES.get("\b"):t+="\\b";break;case N.CODES.get("\f"):t+="\\f";break;default:{let n=e.toString(16);e<256?(t+="\\x",n.length===1&&(t+="0"),t+=n):t+=`\\x{${n}}`;break}}return t}static stringToRunes(e){const t=String(e),n=[];let s=0;for(;s<t.length;){const i=t.codePointAt(s);n.push(i),s+=i>z.MAX_BMP?2:1}return n}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<Sc?uC[e]===1:!1}static emptyOpContext(e,t){let n=0;return e<0&&(n|=Te.EMPTY_BEGIN_TEXT|Te.EMPTY_BEGIN_LINE),e===10&&(n|=Te.EMPTY_BEGIN_LINE),t<0&&(n|=Te.EMPTY_END_TEXT|Te.EMPTY_END_LINE),t===10&&(n|=Te.EMPTY_END_LINE),Te.isWordRune(e)!==Te.isWordRune(t)?n|=Te.EMPTY_WORD_BOUNDARY:n|=Te.EMPTY_NO_WORD_BOUNDARY,n}static quoteMeta(e){return e.split("").map(t=>Te.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>z.MAX_BMP?2:1}static toArray(e){const t=e.length,n=new Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return TB||(TB=new TextEncoder),TB.encode(e);{let t=[],n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===z.MIN_HIGH_SURROGATE&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===z.MIN_LOW_SURROGATE?(i=z.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){wB||(wB=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return wB.decode(t)}else{let t=[],n=0,s=0;for(;n<e.length;){let i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[n++];t[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[n++],B=e[n++],c=e[n++],u=((i&7)<<18|(o&63)<<12|(B&63)<<6|c&63)-z.MIN_SUPPLEMENTARY_CODE_POINT;t[s++]=String.fromCharCode(z.MIN_HIGH_SURROGATE+(u>>10)),t[s++]=String.fromCharCode(z.MIN_LOW_SURROGATE+(u&1023))}else{let o=e[n++],B=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|B&63)}}return t.join("")}}},U(Te,"METACHARACTERS","\\.+*?()|[]{}^$"),U(Te,"EMPTY_BEGIN_LINE",1),U(Te,"EMPTY_END_LINE",2),U(Te,"EMPTY_BEGIN_TEXT",4),U(Te,"EMPTY_END_TEXT",8),U(Te,"EMPTY_WORD_BOUNDARY",16),U(Te,"EMPTY_NO_WORD_BOUNDARY",32),U(Te,"EMPTY_ALL",-1),Te);const lC=(r=[],e=0)=>{const t=Object.create(null);for(let n=0;n<r.length;n++){const s=r[n],i=e+n;t[s]=i,t[i]=s}return Object.freeze(t)};var Vn,yr=(Vn=class{getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===Vn.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===Vn.Encoding.UTF_16}},U(Vn,"Encoding",lC(["UTF_16","UTF_8"])),Vn),hh=class extends yr{constructor(r=null){super(),this.bytes=r}getEncoding(){return yr.Encoding.UTF_8}asCharSequence(){return $.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},ny=class extends yr{constructor(r=null){super(),this.charSequence=r}getEncoding(){return yr.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return $.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},dr=class{static utf16(r){return new ny(r)}static utf8(r){return $.isByteArray(r)?new hh(r):new hh($.stringToUtf8ByteArray(r))}},ut=class{static EOF(){return-8}constructor(){this.end=0}canCheckPrefix(){return!0}endPos(){return this.end}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},ry=class extends ut{constructor(r,e=0,t=r.length){super(),this.bytes=r,this.start=e,this.end=t}hasString(r,e){const t=r.bytes;if(t.length===0)return!0;const n=this.indexOf(this.bytes,t,this.start+e);return n!==-1&&n<=this.end-t.length}hasAnyString(r,e){return r.ac8?r.ac8.searchUTF8(this.bytes,this.start+e,this.end):!1}step(r){if(r+=this.start,r>=this.end)return ut.EOF();const e=this.bytes[r]&255;if(e<128)return e<<3|1;if(e>=194&&e<=223&&r+1<this.end){const t=this.bytes[r+1]&255;return(t&192)!==128?e<<3|1:((e&31)<<6|t&63)<<3|2}else if(e>=224&&e<=239&&r+2<this.end){const t=this.bytes[r+1]&255;if((t&192)!==128)return e<<3|1;const n=this.bytes[r+2]&255;return(n&192)!==128?e<<3|1:((e&15)<<12|(t&63)<<6|n&63)<<3|3}else if(e>=240&&e<=244&&r+3<this.end){const t=this.bytes[r+1]&255;if((t&192)!==128)return e<<3|1;const n=this.bytes[r+2]&255;if((n&192)!==128)return e<<3|1;const s=this.bytes[r+3]&255;return(s&192)!==128?e<<3|1:((e&7)<<18|(t&63)<<12|(n&63)<<6|s&63)<<3|4}else return e<<3|1}index(r,e){e+=this.start;const t=this.indexOf(this.bytes,r.prefixUTF8,e);return t<0?t:t-e}context(r){r+=this.start;let e=-1;if(r>this.start&&r<=this.end){let n=r-1;if(e=this.bytes[n--],e>=128){let s=r-4;for(s<this.start&&(s=this.start);n>=s&&(this.bytes[n]&192)===128;)n--;n<this.start&&(n=this.start),e=this.step(n-this.start)>>3}}const t=r<this.end?this.step(r-this.start)>>3:-1;return $.emptyOpContext(e,t)}indexOf(r,e,t=0){let n=e.length;if(n===0)return t<=this.end?t:-1;const s=e[0];let i=this.end-n;const o=typeof r.indexOf=="function";let B=t;for(;B<=i;){if(o){if(B=r.indexOf(s,B),B===-1||B>i)return-1}else{for(;B<=i&&r[B]!==s;)B++;if(B>i)return-1}let c=!0;for(let u=1;u<n;u++)if(r[B+u]!==e[u]){c=!1;break}if(c)return B;B++}return-1}prefixLength(r){return r.prefixUTF8.length}},sy=class extends ut{constructor(r,e=0,t=r.length){super(),this.charSequence=r,this.start=e,this.end=t}hasString(r,e){const t=this.charSequence.indexOf(r.str,this.start+e);return t!==-1&&t<=this.end-r.str.length}hasAnyString(r,e){return r.ac16?r.ac16.searchUTF16(this.charSequence,this.start+e,this.end):!1}step(r){if(r+=this.start,r>=this.end)return ut.EOF();const e=this.charSequence.charCodeAt(r);if(e<z.MIN_HIGH_SURROGATE||e>z.MAX_HIGH_SURROGATE||r+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(r+1);return t>=z.MIN_LOW_SURROGATE&&t<=z.MAX_LOW_SURROGATE?(e-z.MIN_HIGH_SURROGATE)*1024+(t-z.MIN_LOW_SURROGATE)+z.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(r,e){e+=this.start;const t=this.charSequence.indexOf(r.prefix,e);return t<0||t>this.end-r.prefix.length?-1:t-e}context(r){r+=this.start;const e=r>this.start&&r<=this.end?this.charSequence.charCodeAt(r-1):-1,t=r<this.end?this.charSequence.charCodeAt(r):-1;return $.emptyOpContext(e,t)}prefixLength(r){return r.prefix.length}},ye=class{static fromUTF8(r,e=0,t=r.length){return new ry(r,e,t)}static fromUTF16(r,e=0,t=r.length){return new sy(r,e,t)}},Ji=class extends Error{constructor(r){super(r),this.name="RE2JSException"}},De=class extends Ji{constructor(r,e=null){let t=`error parsing regexp: ${r}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=r,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},iy=class extends Ji{constructor(r){super(r),this.name="RE2JSCompileException"}},ft=class extends Ji{constructor(r){super(r),this.name="RE2JSGroupException"}},oy=class extends Ji{constructor(r){super(r),this.name="RE2JSFlagsException"}},ti=class extends Ji{constructor(r){super(r),this.name="RE2JSInternalException"}},pr,fh=(pr=class{static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(n=>{const s=n.codePointAt(0);return s===N.CODES.get("\\")||s===N.CODES.get("$")?`\\${n}`:n}).join(""):e.indexOf("$")<0?e:e.split("").map(n=>n.codePointAt(0)===N.CODES.get("$")?"$$":n).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const n=this.patternInput.re2();this.patternGroupCount=n.numberOfCapturingGroups(),this.groups=[],this.namedGroups=n.namedGroups,this.numberOfInstructions=n.numberOfInstructions(),t instanceof yr?this.resetMatcherInput(t):$.isByteArray(t)?this.resetMatcherInput(dr.utf8(t)):this.resetMatcherInput(dr.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof yr||($.isByteArray(e)?e=dr.utf8(e):e=dr.utf16(e)),this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new ft(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new ft(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const s=this.namedGroups[e];if(!Number.isFinite(s))throw new ft(`group '${e}' not found`);e=s}const t=this.start(e),n=this.end(e);return t<0&&n<0?null:this.substring(t,n)}getNamedGroups(){if(!this.hasMatch)throw new ft("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new ft(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new ft("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,n=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!n[0])throw new ft("inconsistency in matching group data");this.groups=n[1],this.hasGroups=!0}matches(){return this.genMatch(0,x.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,x.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new ft(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?ye.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):ye.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,x.UNANCHORED)}genMatch(e,t){const n=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return n[0]?(this.groups=n[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?$.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let n="";const s=this.start(),i=this.end();return this.appendPos<s&&(n+=this.substring(this.appendPos,s)),this.appendPos=i,n+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),n}appendReplacementInternalJava(e){let t="",n=0;const s=e.length;let i=0;for(;i<s;){const o=e.codePointAt(i);if(o===N.CODES.get("\\")){if(n<i&&(t+=e.substring(n,i)),i++,i>=s)throw new ft("character to be escaped is missing");n=i,i++;continue}if(o===N.CODES.get("$")){if(n<i&&(t+=e.substring(n,i)),i+1>=s)throw new ft("Illegal group reference: group index is missing");const B=e.codePointAt(i+1);if(N.CODES.get("0")<=B&&B<=N.CODES.get("9")){let c=B-N.CODES.get("0"),u=i+2;for(;u<s;u++){const d=e.codePointAt(u);if(d<N.CODES.get("0")||d>N.CODES.get("9")||c*10+d-N.CODES.get("0")>this.patternGroupCount)break;c=c*10+d-N.CODES.get("0")}if(c>this.patternGroupCount)throw new ft(`n > number of groups: ${c}`);const h=this.group(c);h!==null&&(t+=h),i=u,n=i}else if(B===N.CODES.get("{")){let c=i+2;for(;c<s&&e.codePointAt(c)!==N.CODES.get("}");)c++;if(c>=s)throw new ft("named capture group is missing trailing '}'");const u=e.substring(i+2,c),h=this.group(u);h!==null&&(t+=h),i=c+1,n=i}else throw new ft("Illegal group reference");continue}i++}return n<s&&(t+=e.substring(n,s)),t}appendReplacementInternalJs(e){let t="",n=0;const s=e.length;for(let i=0;i<s-1;i++)if(e.codePointAt(i)===N.CODES.get("$")){let o=e.codePointAt(i+1);if(N.CODES.get("$")===o){n<i&&(t+=e.substring(n,i)),t+="$",i++,n=i+1;continue}else if(N.CODES.get("&")===o){n<i&&(t+=e.substring(n,i));const B=this.group(0);B!==null?t+=B:t+="$&",i++,n=i+1;continue}else if(N.CODES.get("`")===o){n<i&&(t+=e.substring(n,i)),t+=this.substring(0,this.start(0)),i++,n=i+1;continue}else if(N.CODES.get("'")===o){n<i&&(t+=e.substring(n,i)),t+=this.substring(this.end(0),this.matcherInputLength),i++,n=i+1;continue}else if(N.CODES.get("1")<=o&&o<=N.CODES.get("9")){let B=o-N.CODES.get("0");for(n<i&&(t+=e.substring(n,i)),i+=2;i<s&&(o=e.codePointAt(i),!(o<N.CODES.get("0")||o>N.CODES.get("9")||B*10+o-N.CODES.get("0")>this.patternGroupCount));i++)B=B*10+o-N.CODES.get("0");if(B>this.patternGroupCount){t+=`$${B}`,n=i,i--;continue}const c=this.group(B);c!==null&&(t+=c),n=i,i--;continue}else if(o===N.CODES.get("<")){n<i&&(t+=e.substring(n,i)),i++;let B=i+1;for(;B<e.length&&e.codePointAt(B)!==N.CODES.get(">")&&e.codePointAt(B)!==N.CODES.get(" ");)B++;if(B===e.length||e.codePointAt(B)!==N.CODES.get(">")){t+=e.substring(i-1,B+1),n=B+1,i=B;continue}const c=e.substring(i+1,B);if(Object.prototype.hasOwnProperty.call(this.namedGroups,c)){const u=this.group(c);u!==null&&(t+=u)}else t+=`$<${c}>`;n=B+1,i=B;continue}}return n<s&&(t+=e.substring(n,s)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,n=!1){let s="";this.reset();const i=typeof e=="function",o=Object.keys(this.namedGroups).length>0;let B=null;if(i){if(this.groupCount()>=pr.MAX_REPLACER_ARGS)throw new ft("Too many capture groups to safely invoke replacer function");B=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(s+=i?this.appendReplacementFunc(e,o,B):this.appendReplacement(e,n),!!t););return s+=this.appendTail(),s}appendReplacementFunc(e,t,n){let s="";const i=this.start(),o=this.end();this.appendPos<i&&(s+=this.substring(this.appendPos,i)),this.appendPos=o;const B=this.buildReplacerArgs(i,t,n);return s+=String(e(...B)),s}buildReplacerArgs(e,t,n){const s=[this.group(0)],i=this.groupCount();for(let o=1;o<=i;o++){const B=this.start(o);B<0?s.push(void 0):s.push(this.substring(B,this.end(o)))}if(s.push(e),s.push(n),t){const o=this.getNamedGroups();for(const B in o)o[B]===null&&(o[B]=void 0);s.push(o)}return s}},U(pr,"MAX_REPLACER_ARGS",65535),pr),le,O=(le=class{static isRuneOp(e){return le.RUNE<=e&&e<=le.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let n of e)t+=$.escapeRune(n);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=[],this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return this.arg&x.FOLD_CASE?z.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let n=0,s=t>>1;for(;s>1;){const o=s>>1;n+=this.runes[n+o<<1]<=e?o:0,s-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return this.arg&x.FOLD_CASE?z.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let n=0,s=t>>1;for(;s>1;){const o=s>>1;n+=this.runes[n+o<<1]<=e?o:0,s-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case le.ALT:return`alt -> ${this.out}, ${this.arg}`;case le.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case le.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case le.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case le.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case le.FAIL:return"fail";case le.NOP:return`nop -> ${this.out}`;case le.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case le.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case le.RUNE:return this.runes===null?"rune <null>":["rune ",le.escapeRunes(this.runes),this.arg&x.FOLD_CASE?"/i":""," -> ",this.out].join("");case le.RUNE1:return`rune1 ${le.escapeRunes(this.runes)} -> ${this.out}`;case le.RUNE_ANY:return`any -> ${this.out}`;case le.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},U(le,"ALT",1),U(le,"ALT_MATCH",2),U(le,"CAPTURE",3),U(le,"EMPTY_WIDTH",4),U(le,"FAIL",5),U(le,"MATCH",6),U(le,"NOP",7),U(le,"RUNE",8),U(le,"RUNE1",9),U(le,"RUNE_ANY",10),U(le,"RUNE_ANY_NOT_NL",11),U(le,"LB_WRITE",12),U(le,"LB_CHECK",13),le),dh=class{constructor(r){this.sparse=new Int32Array(r),this.densePcs=new Int32Array(r),this.denseCaps=null,this.size=0,this.ncap=0}init(r){this.ncap=r;const e=this.densePcs.length*r;(!this.denseCaps||this.denseCaps.length<e)&&(this.denseCaps=new Int32Array(e))}contains(r){const e=this.sparse[r];return e<this.size&&this.densePcs[e]===r}isEmpty(){return this.size===0}add(r){const e=this.size++;return this.sparse[r]=e,this.densePcs[e]=r,e}clear(){this.size=0}toString(){let r="{";for(let e=0;e<this.size;e++)e!==0&&(r+=", "),r+=this.densePcs[e];return r+="}",r}},ay=class jB{static fromRE2(e){const t=new jB;return t.prog=e.prog,t.re2=e,t.q0=new dh(t.prog.numInst()),t.q1=new dh(t.prog.numInst()),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}static fromMachine(e){return jB.fromRE2(e.re2)}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?$.emptyInts():$.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,n){const s=this.re2.cond;if(s===$.EMPTY_ALL||(n===x.ANCHOR_START||n===x.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);let i=this.prog.numLb>0?0:t,o=t,B=this.q0,c=this.q1,u=e.step(i),h=u>>3,d=u&7,E=-1,v=0;u!==ut.EOF()&&(u=e.step(i+d),E=u>>3,v=u&7);let P;for(i===0?P=$.emptyOpContext(-1,h):P=e.context(i);;){if(B.isEmpty()){if(s&$.EMPTY_BEGIN_TEXT&&i!==0||(n===x.ANCHOR_START||n===x.ANCHOR_BOTH)&&i!==0||this.matched)break;if(this.prog.numLb===0&&this.re2.prefix.length!==0&&E!==this.re2.prefixRune&&e.canCheckPrefix()){const W=e.index(this.re2,i);if(W<0)break;i+=W,u=e.step(i),h=u>>3,d=u&7,u=e.step(i+d),E=u>>3,v=u&7,P=e.context(i)}}if(i===0&&this.prog.numLb>0)for(let W=0;W<this.prog.lbStarts.length;W++)this.add(B,this.prog.lbStarts[W],i,this.matchcap,0,P);!this.matched&&(i===0||n===x.UNANCHORED)&&i>=o&&(this.ncap>0&&(this.matchcap[0]=i),this.add(B,this.prog.start,i,this.matchcap,0,P));const V=i+d;if(P=e.context(V),this.step(B,c,i,V,h,P,n,i===e.endPos()),d===0||this.ncap===0&&this.matched)break;i+=d,h=E,d=v,h!==-1&&(u=e.step(i+d),E=u>>3,v=u&7);const M=B;B=c,c=M}return c.clear(),this.matched}matchSet(e,t,n){const s=this.re2.cond;if(s===$.EMPTY_ALL)return[];if((n===x.ANCHOR_START||n===x.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,B=this.q0,c=this.q1,u=e.step(i),h=u>>3,d=u&7,E=-1,v=0;u!==ut.EOF()&&(u=e.step(i+d),E=u>>3,v=u&7);let P=i===0?$.emptyOpContext(-1,h):e.context(i);const V=new Set;for(;!(B.isEmpty()&&(s&$.EMPTY_BEGIN_TEXT&&i!==0||(n===x.ANCHOR_START||n===x.ANCHOR_BOTH)&&i!==0));){if(i===0&&this.prog.numLb>0)for(let Be=0;Be<this.prog.lbStarts.length;Be++)this.add(B,this.prog.lbStarts[Be],i,this.matchcap,0,P);(i===0||n===x.UNANCHORED)&&i>=o&&this.add(B,this.prog.start,i,this.matchcap,0,P);const M=i+d;P=e.context(M);for(let Be=0;Be<B.size;Be++){const ve=B.densePcs[Be],ke=this.prog.inst[ve],Dt=Be*this.ncap;let be=!1;switch(ke.op){case O.MATCH:if(n===x.ANCHOR_BOTH&&i!==e.endPos())break;V.add(ke.arg);break;case O.RUNE:be=ke.matchRune(h);break;case O.RUNE1:be=h===ke.runes[0];break;case O.RUNE_ANY:be=!0;break;case O.RUNE_ANY_NOT_NL:be=h!==10;break;default:continue}be&&this.add(c,ke.out,M,B.denseCaps,Dt,P)}if(B.clear(),d===0)break;i+=d,h=E,d=v,h!==-1&&(u=e.step(i+d),E=u>>3,v=u&7);const W=B;B=c,c=W}return c.clear(),Array.from(V).sort((M,W)=>M-W)}step(e,t,n,s,i,o,B,c){const u=this.re2.longest;for(let h=0;h<e.size;h++){const d=e.densePcs[h],E=h*this.ncap;if(u&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[E])continue;const v=this.prog.inst[d];let P=!1;switch(v.op){case O.MATCH:if(B===x.ANCHOR_BOTH&&!c)break;if(this.ncap>0&&(!u||!this.matched||this.matchcap[1]<n)){e.denseCaps[E+1]=n;for(let V=0;V<this.ncap;V++)this.matchcap[V]=e.denseCaps[E+V]}u||(e.size=0),this.matched=!0;break;case O.RUNE:P=v.matchRune(i);break;case O.RUNE1:P=i===v.runes[0];break;case O.RUNE_ANY:P=!0;break;case O.RUNE_ANY_NOT_NL:P=i!==10;break;default:continue}P&&this.add(t,v.out,s,e.denseCaps,E,o)}e.clear()}add(e,t,n,s,i,o){for(;;){if(t===0||e.contains(t))return;const B=e.add(t),c=this.prog.inst[t];switch(c.op){case O.FAIL:return;case O.ALT:case O.ALT_MATCH:this.add(e,c.out,n,s,i,o),t=c.arg;continue;case O.EMPTY_WIDTH:if(!(c.arg&~o)){t=c.out;continue}return;case O.NOP:t=c.out;continue;case O.CAPTURE:if(c.arg<this.ncap){const u=s[i+c.arg];s[i+c.arg]=n,this.add(e,c.out,n,s,i,o),s[i+c.arg]=u;return}else{t=c.out;continue}case O.LB_WRITE:this.lbTable[Math.abs(c.arg)]=n,t=c.out;continue;case O.LB_CHECK:if(c.arg>0){if(this.lbTable[c.arg]===n){t=c.out;continue}}else if(this.lbTable[-c.arg]!==n){t=c.out;continue}return;case O.MATCH:case O.RUNE:case O.RUNE1:case O.RUNE_ANY:case O.RUNE_ANY_NOT_NL:if(this.ncap>0){const u=B*this.ncap;for(let h=0;h<this.ncap;h++)e.denseCaps[u+h]=s[i+h]}return;default:throw new ti("unhandled")}}}};const Ch=r=>{let e=-2128831035;for(let t=0;t<r.length;t++)e^=r[t],e=Math.imul(e,16777619);return e},By=(r,e)=>{if(r.length!==e.length)return!1;for(let t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0};var cy=class{constructor(r,e,t=[]){this.nfaStates=r,this.isMatch=e,this.matchIDs=t,this.nextLatin1=new Array(z.MAX_LATIN1+1).fill(null),this.nextLatin1Anchored=new Array(z.MAX_LATIN1+1).fill(null),this.transKeys=[],this.transVals=[],this.lastSeen=0}},an,uy=(an=class{constructor(e,t=8388608){this.prog=e,this.stateCache=new Map,this.stateCount=0,this.startState=null,this.stateLimit=Math.max(1,Math.floor(t/an.STATE_MEMORY_ESTIMATE)),this.cacheClears=0,this.failed=!1,this.clock=0}computeClosure(e){const t=new Set,n=[...e];let s=!1;const i=[];for(;n.length>0;){const B=n.pop();if(t.has(B))continue;t.add(B);const c=this.prog.getInst(B);switch(c.op){case O.MATCH:s=!0,i.includes(c.arg)||i.push(c.arg);break;case O.ALT:case O.ALT_MATCH:n.push(c.out),n.push(c.arg);break;case O.NOP:case O.CAPTURE:n.push(c.out);break;case O.EMPTY_WIDTH:case O.LB_WRITE:case O.LB_CHECK:return null}}const o=Int32Array.from(t).sort();return i.sort((B,c)=>B-c),{pcs:o,isMatch:s,matchIDs:i}}getState(e){const t=this.computeClosure(e);if(!t)return null;const n=t.pcs,s=Ch(n);let i=this.stateCache.get(s);if(i)for(let B=0;B<i.length;B++){const c=i[B];if(By(c.nfaStates,n))return c.lastSeen=++this.clock,c}else i=[],this.stateCache.set(s,i);if(this.failed)return null;if(this.stateCount>=this.stateLimit){if(this.cacheClears++,this.cacheClears>=an.MAX_CACHE_CLEARS)return this.failed=!0,this.stateCache.clear(),this.stateCount=0,this.startState=null,null;this.evictCache(),i=this.stateCache.get(s),i||(i=[],this.stateCache.set(s,i))}const o=new cy(n,t.isMatch,t.matchIDs);return o.lastSeen=++this.clock,i.push(o),this.stateCount++,o}evictCache(){const e=[];for(const o of this.stateCache.values())for(let B=0;B<o.length;B++)e.push(o[B]);e.sort((o,B)=>o.lastSeen-B.lastSeen);const t=Math.max(1,Math.floor(this.stateLimit/2)),n=e.length-t,s=e.slice(n),i=new Set(s);this.stateCache.clear(),this.stateCount=0;for(let o=0;o<s.length;o++){const B=s[o];B.nextLatin1.fill(null),B.nextLatin1Anchored.fill(null),B.transKeys.length=0,B.transVals.length=0;const c=Ch(B.nfaStates);let u=this.stateCache.get(c);u||(u=[],this.stateCache.set(c,u)),u.push(B),this.stateCount++}this.startState&&!i.has(this.startState)&&(this.startState=null)}step(e,t,n){if(t<=z.MAX_LATIN1)if(n===x.UNANCHORED){const o=e.nextLatin1[t];if(o!==null)return o}else{const o=e.nextLatin1Anchored[t];if(o!==null)return o}else{const o=t+(n===x.UNANCHORED?0:z.MAX_RUNE+1),B=e.transKeys,c=B.length;for(let u=0;u<c;u++)if(B[u]===o)return e.transVals[u]}const s=[];for(let o=0;o<e.nfaStates.length;o++){const B=e.nfaStates[o],c=this.prog.getInst(B);O.isRuneOp(c.op)&&c.matchRune(t)&&s.push(c.out)}n===x.UNANCHORED&&s.push(this.prog.start);const i=this.getState(s);if(t<=z.MAX_LATIN1)n===x.UNANCHORED?e.nextLatin1[t]=i:e.nextLatin1Anchored[t]=i;else{const o=t+(n===x.UNANCHORED?0:z.MAX_RUNE+1);e.transKeys.push(o),e.transVals.push(i)}return i}match(e,t,n){if((n===x.ANCHOR_START||n===x.ANCHOR_BOTH)&&t!==0)return!1;if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;if(i.isMatch)if(n===x.ANCHOR_BOTH){if(t===s)return!0}else return!0;let o=t;for(;o<s;){const B=e.step(o),c=B>>3,u=B&7;if(u===0)break;if(i=n===x.UNANCHORED&&c<=z.MAX_LATIN1&&i.nextLatin1[c]||this.step(i,c,n),i===null)return null;if(i.lastSeen=++this.clock,i.isMatch)if(n===x.ANCHOR_BOTH){if(o+u===s)return!0}else return!0;if(i.nfaStates.length===0&&n!==x.UNANCHORED)return!1;o+=u}return!1}matchSet(e,t,n){if((n===x.ANCHOR_START||n===x.ANCHOR_BOTH)&&t!==0)return[];if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;const o=new Set,B=(u,h)=>{u.isMatch&&(n===x.ANCHOR_BOTH?h===s&&u.matchIDs.forEach(d=>o.add(d)):u.matchIDs.forEach(d=>o.add(d)))};B(i,t);let c=t;for(;c<s;){const u=e.step(c),h=u>>3,d=u&7;if(d===0)break;if(i=n===x.UNANCHORED&&h<=z.MAX_LATIN1&&i.nextLatin1[h]||this.step(i,h,n),i===null)return null;if(i.lastSeen=++this.clock,c+=d,B(i,c),i.nfaStates.length===0&&n!==x.UNANCHORED)break}return Array.from(o).sort((u,h)=>u-h)}},U(an,"MAX_CACHE_CLEARS",5),U(an,"STATE_MEMORY_ESTIMATE",838),an);const ly=32,hy=500,AB=256,fy=256*1024;var dy=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(AB),this.jobArg=new Uint8Array(AB),this.jobPos=new Int32Array(AB),this.jobLen=0,this.visited=new Uint32Array(0)}reset(r,e,t){this.end=e,this.jobLen=0,this.ncap=t;const n=r.numInst()*(e+1)+ly-1>>>5;this.visited.length<n?this.visited=new Uint32Array(n):this.visited.fill(0,0,n),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(r,e){const t=r*(this.end+1)+e,n=t>>>5,s=1<<(t&31);return this.visited[n]&s?!1:(this.visited[n]|=s,!0)}push(r,e,t,n){if(r.prog.getInst(e).op!==O.FAIL&&(n||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const s=this.jobPc.length*2,i=new Int32Array(s);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(s);o.set(this.jobArg),this.jobArg=o;const B=new Int32Array(s);B.set(this.jobPos),this.jobPos=B}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=n?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(r,e,t,n,s){const i=r.longest;for(this.push(r,t,n,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],B=this.jobArg[this.jobLen]===1,c=this.jobPos[this.jobLen],u=!0;for(;!(!u&&!this.shouldVisit(o,c));){u=!1;const h=r.prog.getInst(o);switch(h.op){case O.FAIL:throw new ti("unexpected InstFail");case O.ALT:if(B){B=!1,o=h.arg;continue}else{this.push(r,o,c,!0),o=h.out;continue}case O.ALT_MATCH:{const d=r.prog.getInst(h.out);if(O.isRuneOp(d.op)){this.push(r,h.arg,c,!1),o=h.arg,c=this.end;continue}this.push(r,h.out,this.end,!1),o=h.out;continue}case O.RUNE:{const d=e.step(c);if(d===ut.EOF()||!h.matchRune(d>>3))break;c+=d&7,o=h.out;continue}case O.RUNE1:{const d=e.step(c);if(d===ut.EOF()||d>>3!==h.runes[0])break;c+=d&7,o=h.out;continue}case O.RUNE_ANY_NOT_NL:{const d=e.step(c);if(d===ut.EOF()||d>>3===10)break;c+=d&7,o=h.out;continue}case O.RUNE_ANY:{const d=e.step(c);if(d===ut.EOF())break;c+=d&7,o=h.out;continue}case O.CAPTURE:if(B){this.cap[h.arg]=c;break}else{h.arg<this.ncap&&(this.push(r,o,this.cap[h.arg],!0),this.cap[h.arg]=c),o=h.out;continue}case O.EMPTY_WIDTH:{const d=e.context(c);if(h.arg&~d)break;o=h.out;continue}case O.NOP:o=h.out;continue;case O.MATCH:{if(s===x.ANCHOR_BOTH&&c!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=c);const d=this.matchcap[1];if((d===-1||i&&c>0&&c>d)&&this.matchcap.set(this.cap),!i||c===this.end)return!0;break}case O.LB_WRITE:case O.LB_CHECK:throw new ti("Backtracker cannot evaluate Lookbehind instructions");default:throw new ti("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const Do=[];var Io=class hC{static shouldBacktrack(e){return e.numInst()<=hy}static maxBitStateLen(e){return hC.shouldBacktrack(e)?Math.floor(fy/e.numInst()):0}static execute(e,t,n,s,i){const o=e.cond;if(o===$.EMPTY_ALL||(s===x.ANCHOR_START||s===x.ANCHOR_BOTH)&&n!==0||o&$.EMPTY_BEGIN_TEXT&&n!==0)return null;const B=Do.length>0?Do.pop():new dy,c=t.endPos();B.reset(e.prog,c,i);let u=!1;if(o&$.EMPTY_BEGIN_TEXT||s===x.ANCHOR_START||s===x.ANCHOR_BOTH)B.ncap>0&&(B.cap[0]=n),B.tryBacktrack(e,t,e.prog.start,n,s)&&(u=!0);else{let d=-1;for(;n<=c&&d!==0;n+=d){if(e.prefix.length>0){const v=t.index(e,n);if(v<0)break;n+=v}if(B.ncap>0&&(B.cap[0]=n),B.tryBacktrack(e,t,e.prog.start,n,s)){u=!0;break}const E=t.step(n);d=E===ut.EOF()?0:E&7}}if(!u)return Do.push(B),null;const h=i===0?[]:$.toArray(B.matchcap.subarray(0,i));return Do.push(B),h}},ph=class{constructor(r){this.sparse=new Uint32Array(r),this.dense=new Uint32Array(r),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(r){return r<this.sparse.length&&this.sparse[r]<this.size&&this.dense[this.sparse[r]]===r}insert(r){this.contains(r)||this.insertNew(r)}insertNew(r){r>=this.sparse.length||(this.sparse[r]=this.size,this.dense[this.size]=r,this.size++)}};const Cy=(r,e,t,n)=>{const s=r.length,i=e.length;let o=0,B=0;const c=[],u=[];let h=!0,d=-1;const E=v=>{const P=v?r:e,V=v?o:B,M=v?t:n;return d>0&&P[V]<=c[d]?!1:(c.push(P[V],P[V+1]),v?o+=2:B+=2,d+=2,u.push(M),!0)};for(;o<s||B<i;)if(B>=i?h=E(!0):o>=s||e[B]<r[o]?h=E(!1):h=E(!0),!h)return null;return{merged:c,next:u}};var py=class{constructor(r){this.start=r.start,this.numCap=r.numCap,this.inst=new Array(r.inst.length);for(let e=0;e<r.inst.length;e++){const t=r.inst[e],n=new O(t.op);n.out=t.out,n.arg=t.arg,n.runes=t.runes?t.runes.slice():[],n.next=null,this.inst[e]=n}}};const gy=r=>{const e=new py(r);for(let t=0;t<e.inst.length;t++){const n=e.inst[t];if(n.op!==O.ALT&&n.op!==O.ALT_MATCH)continue;let s="out",i="arg",o=e.inst[n[i]];if(o.op!==O.ALT&&o.op!==O.ALT_MATCH&&(s="arg",i="out",o=e.inst[n[i]],o.op!==O.ALT&&o.op!==O.ALT_MATCH))continue;const B=e.inst[n[s]];if(B.op===O.ALT||B.op===O.ALT_MATCH)continue;let c="out",u="arg",h=!1;o.out===t?h=!0:o.arg===t&&(h=!0,c="arg",u="out"),h&&(o[c]=n[s]),n[s]===o[c]&&(n[i]=o[u])}return e},my=r=>{if(r.inst.length>=1e3)return null;const e=new ph(r.inst.length),t=new ph(r.inst.length),n=new Array(r.inst.length),s=new Array(r.inst.length).fill(!1),i=o=>{let B=!0;const c=r.inst[o];if(t.contains(o))return!0;switch(t.insert(o),c.op){case O.ALT:case O.ALT_MATCH:{B=i(c.out)&&i(c.arg);let u=s[c.out],h=s[c.arg];if(u&&h)return!1;if(h){const P=c.out;c.out=c.arg,c.arg=P;const V=u;u=h,h=V}u&&(s[o]=!0,c.op=O.ALT_MATCH);const d=n[c.out]||[],E=n[c.arg]||[],v=Cy(d,E,c.out,c.arg);if(!v)return!1;n[o]=v.merged,c.next=new Uint32Array(v.next);break}case O.CAPTURE:case O.EMPTY_WIDTH:case O.NOP:B=i(c.out),s[o]=s[c.out],n[o]=n[c.out]?n[c.out].slice():[],c.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(c.out);break;case O.MATCH:case O.FAIL:s[o]=c.op===O.MATCH;break;case O.RUNE:{if(s[o]=!1,c.next&&c.next.length>0)break;if(e.insert(c.out),!c.runes||c.runes.length===0){n[o]=[],c.next=new Uint32Array([c.out]);break}let u=[];if(c.runes.length===1&&c.arg&x.FOLD_CASE){const h=c.runes[0];u.push(h,h);for(let d=z.simpleFold(h);d!==h;d=z.simpleFold(d))u.push(d,d);u.sort((d,E)=>d-E)}else for(let h=0;h<c.runes.length;h++)u.push(c.runes[h]);n[o]=u,c.next=new Uint32Array(Math.floor(u.length/2)+1).fill(c.out),c.op=O.RUNE;break}case O.RUNE1:{if(s[o]=!1,c.next&&c.next.length>0)break;e.insert(c.out);let u=[];if(c.arg&x.FOLD_CASE){const h=c.runes[0];u.push(h,h);for(let d=z.simpleFold(h);d!==h;d=z.simpleFold(d))u.push(d,d);u.sort((d,E)=>d-E)}else u.push(c.runes[0],c.runes[0]);n[o]=u,c.next=new Uint32Array(Math.floor(u.length/2)+1).fill(c.out),c.op=O.RUNE;break}case O.RUNE_ANY:if(s[o]=!1,c.next&&c.next.length>0)break;e.insert(c.out),n[o]=[0,z.MAX_RUNE],c.next=new Uint32Array([c.out]);break;case O.RUNE_ANY_NOT_NL:if(s[o]=!1,c.next&&c.next.length>0)break;e.insert(c.out),n[o]=[0,9,11,z.MAX_RUNE],c.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(c.out);break}return B};for(e.clear(),e.insert(r.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<r.inst.length;o++)n[o]&&(r.inst[o].runes=n[o]);return r},Ey=(r,e)=>{for(let t=0;t<e.inst.length;t++){const n=e.inst[t];switch(n.op){case O.ALT:case O.ALT_MATCH:case O.RUNE:break;case O.CAPTURE:case O.EMPTY_WIDTH:case O.NOP:case O.MATCH:case O.FAIL:r.inst[t].next=null;break;case O.RUNE1:case O.RUNE_ANY:case O.RUNE_ANY_NOT_NL:r.inst[t].next=null,r.inst[t].op=n.op,r.inst[t].runes=n.runes?n.runes.slice():[];break}}};var gh=class fC{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==O.EMPTY_WIDTH||!(t.arg&$.EMPTY_BEGIN_TEXT))return null;let n=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===O.ALT||e.inst[i].op===O.ALT_MATCH){n=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],B=e.inst[o.out].op;switch(o.op){case O.ALT:case O.ALT_MATCH:if(B===O.MATCH||e.inst[o.arg].op===O.MATCH)return null;break;case O.EMPTY_WIDTH:if(B===O.MATCH){if((o.arg&$.EMPTY_END_TEXT)===$.EMPTY_END_TEXT)continue;return null}break;default:if(B===O.MATCH&&n)return null;break}}let s=gy(e);return s=my(s),s!==null&&Ey(s,e),s}static next(e,t){const n=e.matchRunePos(t);return n>=0?e.next[n]:e.op===O.ALT_MATCH?e.out:0}static execute(e,t,n,s,i){const o=e.onepass;if(!o)return null;const B=new Int32Array(i).fill(-1);let c=!1,u=t.step(n),h=u>>3,d=u&7,E=ut.EOF(),v=-1,P=0;u!==ut.EOF()&&(E=t.step(n+d),E!==ut.EOF()&&(v=E>>3,P=E&7));let V=n===0?$.emptyOpContext(-1,h):t.context(n),M=o.start,W;for(;;){switch(W=o.inst[M],M=W.out,W.op){case O.MATCH:return s===x.ANCHOR_BOTH&&n!==t.endPos()?null:(c=!0,B.length>0&&(B[0]=0,B[1]=n),i===0?[]:$.toArray(B));case O.RUNE:if(!W.matchRune(h))return null;break;case O.RUNE1:if(h!==W.runes[0])return null;break;case O.RUNE_ANY:break;case O.RUNE_ANY_NOT_NL:if(h===10)return null;break;case O.ALT:case O.ALT_MATCH:M=fC.next(W,h);continue;case O.FAIL:return null;case O.NOP:continue;case O.EMPTY_WIDTH:if(W.arg&~V)return null;continue;case O.CAPTURE:W.arg<B.length&&(B[W.arg]=n);continue;default:throw new ti("bad inst")}if(d===0)break;V=$.emptyOpContext(h,v),n+=d,h=v,d=P,h!==-1&&(E=t.step(n+d),E!==ut.EOF()?(v=E>>3,P=E&7):(v=-1,P=0))}return c?i===0?[]:$.toArray(B):null}},X,y=(X=class{static isPseudoOp(e){return e>=X.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===N.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new X(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=X.emptySubs(),this.runes=[],this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=X.emptySubs(),this.runes=[],this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case X.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case X.Op.EMPTY_MATCH:e+="(?:)";break;case X.Op.STAR:case X.Op.PLUS:case X.Op.QUEST:case X.Op.REPEAT:{const t=this.subs[0];switch(t.op>X.Op.CAPTURE||t.op===X.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case X.Op.STAR:e+="*";break;case X.Op.PLUS:e+="+";break;case X.Op.QUEST:e+="?";break;case X.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}this.flags&x.NON_GREEDY&&(e+="?");break}case X.Op.CONCAT:for(let t of this.subs)t.op===X.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case X.Op.ALTERNATE:{let t="";for(let n of this.subs)e+=t,t="|",e+=n.appendTo();break}case X.Op.LITERAL:this.flags&x.FOLD_CASE&&(e+="(?i:");for(let t of this.runes)e+=$.escapeRune(t);this.flags&x.FOLD_CASE&&(e+=")");break;case X.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case X.Op.ANY_CHAR:e+="(?s:.)";break;case X.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case X.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case X.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==X.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case X.Op.BEGIN_TEXT:e+="\\A";break;case X.Op.END_TEXT:this.flags&x.WAS_DOLLAR?e+="(?-m:$)":e+="\\z";break;case X.Op.BEGIN_LINE:e+="^";break;case X.Op.END_LINE:e+="$";break;case X.Op.WORD_BOUNDARY:e+="\\b";break;case X.Op.NO_WORD_BOUNDARY:e+="\\B";break;case X.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===z.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const n=this.runes[t]+1,s=this.runes[t+1]-1;e+=X.quoteIfHyphen(n),e+=$.escapeRune(n),n!==s&&(e+="-",e+=X.quoteIfHyphen(s),e+=$.escapeRune(s))}}else for(let t=0;t<this.runes.length;t+=2){const n=this.runes[t],s=this.runes[t+1];e+=X.quoteIfHyphen(n),e+=$.escapeRune(n),n!==s&&(e+="-",e+=X.quoteIfHyphen(s),e+=$.escapeRune(s))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===X.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const n=t.maxCap();e<n&&(e=n)}return e}equals(e){if(!(e!==null&&e instanceof X)||this.op!==e.op)return!1;switch(this.op){case X.Op.END_TEXT:if((this.flags&x.WAS_DOLLAR)!==(e.flags&x.WAS_DOLLAR))return!1;break;case X.Op.LITERAL:case X.Op.CHAR_CLASS:if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case X.Op.ALTERNATE:case X.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case X.Op.STAR:case X.Op.PLUS:case X.Op.QUEST:if((this.flags&x.NON_GREEDY)!==(e.flags&x.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case X.Op.REPEAT:if((this.flags&x.NON_GREEDY)!==(e.flags&x.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case X.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case X.Op.PLB:case X.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1;break}return!0}},U(X,"Op",lC(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"])),X),mh=class{constructor(r){this.next=[Object.create(null)],this.fail=[0],this.match=[!1];for(const t of r){let n=0;for(let s=0;s<t.length;s++){const i=t[s];i in this.next[n]||(this.next.push(Object.create(null)),this.fail.push(0),this.match.push(!1),this.next[n][i]=this.next.length-1),n=this.next[n][i]}this.match[n]=!0}const e=[];for(const t in this.next[0])if(Object.prototype.hasOwnProperty.call(this.next[0],t)){const n=this.next[0][t];this.fail[n]=0,e.push(n)}for(;e.length>0;){const t=e.shift();for(const n in this.next[t])if(Object.prototype.hasOwnProperty.call(this.next[t],n)){const s=this.next[t][n];let i=this.fail[t];for(;i!==0&&!(n in this.next[i]);)i=this.fail[i];n in this.next[i]?this.fail[s]=this.next[i][n]:this.fail[s]=0,this.match[s]=this.match[s]||this.match[this.fail[s]],e.push(s)}}}searchUTF16(r,e,t){let n=0;for(let s=e;s<t;s++){const i=r.charCodeAt(s);for(;n!==0&&!(i in this.next[n]);)n=this.fail[n];if(i in this.next[n]&&(n=this.next[n][i]),this.match[n])return!0}return!1}searchUTF8(r,e,t){let n=0;for(let s=e;s<t;s++){const i=r[s];for(;n!==0&&!(i in this.next[n]);)n=this.fail[n];if(i in this.next[n]&&(n=this.next[n][i]),this.match[n])return!0}return!1}},Kt,de=(Kt=class{constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.ac16=null,this.ac8=null}eval(e,t){switch(this.type){case Kt.Type.NONE:return!0;case Kt.Type.EXACT:return e.hasString(this,t);case Kt.Type.AND:for(let n=0;n<this.subs.length;n++)if(!this.subs[n].eval(e,t))return!1;return!0;case Kt.Type.OR:if(this.ac16&&this.ac8)return e.hasAnyString(this,t);for(let n=0;n<this.subs.length;n++)if(this.subs[n].eval(e,t))return!0;return!1;default:return!0}}},U(Kt,"Type",{NONE:0,EXACT:1,AND:2,OR:3}),Kt),_y=class en{static build(e){const t=en.fromRegexp(e);return en.simplify(t)}static fromRegexp(e){if(!e)return new de(de.Type.NONE);switch(e.op){case y.Op.PLB:case y.Op.NLB:case y.Op.NO_MATCH:case y.Op.EMPTY_MATCH:case y.Op.BEGIN_LINE:case y.Op.END_LINE:case y.Op.BEGIN_TEXT:case y.Op.END_TEXT:case y.Op.WORD_BOUNDARY:case y.Op.NO_WORD_BOUNDARY:case y.Op.CHAR_CLASS:case y.Op.ANY_CHAR_NOT_NL:case y.Op.ANY_CHAR:return new de(de.Type.NONE);case y.Op.LITERAL:{if(e.runes.length===0||e.flags&x.FOLD_CASE)return new de(de.Type.NONE);const t=new de(de.Type.EXACT);let n="";for(let s=0;s<e.runes.length;s++)n+=String.fromCodePoint(e.runes[s]);return t.str=n,t.bytes=$.stringToUtf8ByteArray(t.str),t}case y.Op.CAPTURE:case y.Op.PLUS:return en.fromRegexp(e.subs[0]);case y.Op.REPEAT:return e.min>=1?en.fromRegexp(e.subs[0]):new de(de.Type.NONE);case y.Op.CONCAT:{const t=new de(de.Type.AND);for(const n of e.subs)t.subs.push(en.fromRegexp(n));return t}case y.Op.ALTERNATE:{const t=new de(de.Type.OR);for(const n of e.subs)t.subs.push(en.fromRegexp(n));return t}default:return new de(de.Type.NONE)}}static simplify(e){if(e.type===de.Type.EXACT||e.type===de.Type.NONE)return e;if(e.type===de.Type.AND){const t=[];for(const n of e.subs){const s=en.simplify(n);if(s.type!==de.Type.NONE)if(s.type===de.Type.AND)for(let i=0;i<s.subs.length;i++)t.push(s.subs[i]);else t.push(s)}return t.length===0?new de(de.Type.NONE):t.length===1?t[0]:(e.subs=t,e)}if(e.type===de.Type.OR){const t=[];for(const o of e.subs){const B=en.simplify(o);if(B.type===de.Type.NONE)return new de(de.Type.NONE);if(B.type===de.Type.OR)for(let c=0;c<B.subs.length;c++)t.push(B.subs[c]);else t.push(B)}if(t.length===0)return new de(de.Type.NONE);if(t.length===1)return t[0];const n=new Set,s=[];for(const o of t)o.type===de.Type.EXACT?n.has(o.str)||(n.add(o.str),s.push(o)):s.push(o);e.subs=s;let i=!0;for(const o of s)if(o.type!==de.Type.EXACT){i=!1;break}return i&&s.length>1&&(e.ac16=new mh(s.map(o=>{const B=[];for(let c=0;c<o.str.length;c++)B.push(o.str.charCodeAt(c));return B})),e.ac8=new mh(s.map(o=>o.bytes))),e}return e}},St=class{constructor(r=0,e=0){this.head=r,this.tail=e}},Dy=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0}getInst(r){return this.inst[r]}numInst(){return this.inst.length}addInst(r){this.inst.push(new O(r))}skipNop(r){let e=this.inst[r];for(;e.op===O.NOP||e.op===O.CAPTURE;)e=this.inst[r],r=e.out;return e}prefix(){let r="",e=this.skipNop(this.start);if(!O.isRuneOp(e.op)||e.runes.length!==1)return[e.op===O.MATCH,r];for(;O.isRuneOp(e.op)&&e.runes.length===1&&!(e.arg&x.FOLD_CASE);)r+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===O.MATCH,r]}startCond(){let r=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case O.EMPTY_WIDTH:r|=t.arg;break;case O.FAIL:return-1;case O.CAPTURE:case O.NOP:break;default:break e}e=t.out}return r}patch(r,e){let t=r.head;for(;t!==0;){const n=this.inst[t>>1];t&1?(t=n.arg,n.arg=e):(t=n.out,n.out=e)}}append(r,e){if(r.head===0)return e;if(e.head===0)return r;const t=this.inst[r.tail>>1];return r.tail&1?t.arg=e.head:t.out=e.head,new St(r.head,e.tail)}toString(){let r="";for(let e=0;e<this.inst.length;e++){const t=r.length;r+=e,e===this.start&&(r+="*"),r+="        ".substring(r.length-t),r+=this.inst[e],r+=`
`}return r}},yo=class{constructor(r=0,e=new St,t=!1){this.i=r,this.out=e,this.nullable=t}},Iy=class Gr{static ANY_RUNE_NOT_NL(){return[0,N.CODES.get(`
`)-1,N.CODES.get(`
`)+1,z.MAX_RUNE]}static ANY_RUNE(){return[0,z.MAX_RUNE]}static compileRegexp(e){const t=new Gr,n=t.compile(e);return t.prog.patch(n.out,t.newInst(O.MATCH).i),t.prog.start=n.i,t.prog}static compileSet(e){const t=new Gr;if(e.length===0)return t.prog.start=t.newInst(O.FAIL).i,t.prog;let n=[];for(let i=0;i<e.length;i++){const o=t.compile(e[i]),B=t.newInst(O.MATCH);t.prog.getInst(B.i).arg=i,t.prog.patch(o.out,B.i),n.push(o.i)}let s=n[0];for(let i=1;i<n.length;i++){const o=t.newInst(O.ALT),B=t.prog.getInst(o.i);B.out=s,B.arg=n[i],s=o.i}return t.prog.start=s,t.prog}constructor(){this.prog=new Dy,this.newInst(O.FAIL)}newInst(e){return this.prog.addInst(e),new yo(this.prog.numInst()-1,new St,!0)}nop(){const e=this.newInst(O.NOP);return e.out=new St(e.i<<1,e.i<<1),e}fail(){return new yo}cap(e){const t=this.newInst(O.CAPTURE);return t.out=new St(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new yo(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const n=this.newInst(O.ALT),s=this.prog.getInst(n.i);return s.out=e.i,s.arg=t.i,n.out=this.prog.append(e.out,t.out),n.nullable=e.nullable||t.nullable,n}loop(e,t){const n=this.newInst(O.ALT),s=this.prog.getInst(n.i);return t?(s.arg=e.i,n.out=new St(n.i<<1,n.i<<1)):(s.out=e.i,n.out=new St(n.i<<1|1,n.i<<1|1)),this.prog.patch(e.out,n.i),n}quest(e,t){const n=this.newInst(O.ALT),s=this.prog.getInst(n.i);return t?(s.arg=e.i,n.out=new St(n.i<<1,n.i<<1)):(s.out=e.i,n.out=new St(n.i<<1|1,n.i<<1|1)),n.out=this.prog.append(n.out,e.out),n}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new yo(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(O.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new St(t.i<<1,t.i<<1),t}rune(e,t){const n=this.newInst(O.RUNE);n.nullable=!1;const s=this.prog.getInst(n.i);return s.runes=e,t&=x.FOLD_CASE,(e.length!==1||z.simpleFold(e[0])===e[0])&&(t&=-2),s.arg=t,n.out=new St(n.i<<1,n.i<<1),!(t&x.FOLD_CASE)&&e.length===1||e.length===2&&e[0]===e[1]?s.op=O.RUNE1:e.length===2&&e[0]===0&&e[1]===z.MAX_RUNE?s.op=O.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===N.CODES.get(`
`)-1&&e[2]===N.CODES.get(`
`)+1&&e[3]===z.MAX_RUNE&&(s.op=O.RUNE_ANY_NOT_NL),n}lookBehind(e,t){const n=this.newInst(O.LB_WRITE);this.prog.getInst(n.i).arg=t;const s=this.rune(Gr.ANY_RUNE(),0),i=this.star(s,!0),o=this.cat(i,e);this.prog.patch(o.out,n.i);const B=this.newInst(O.LB_CHECK);return this.prog.getInst(B.i).arg=t,this.prog.lbStarts.push(o.i),Math.abs(t)>this.prog.numLb&&(this.prog.numLb=Math.abs(t)),B.out=new St(B.i<<1,B.i<<1),B}compile(e){switch(e.op){case y.Op.NO_MATCH:return this.fail();case y.Op.EMPTY_MATCH:return this.nop();case y.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let n of e.runes){const s=this.rune([n],e.flags);t=t===null?s:this.cat(t,s)}return t}case y.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case y.Op.ANY_CHAR_NOT_NL:return this.rune(Gr.ANY_RUNE_NOT_NL(),0);case y.Op.ANY_CHAR:return this.rune(Gr.ANY_RUNE(),0);case y.Op.BEGIN_LINE:return this.empty($.EMPTY_BEGIN_LINE);case y.Op.END_LINE:return this.empty($.EMPTY_END_LINE);case y.Op.BEGIN_TEXT:return this.empty($.EMPTY_BEGIN_TEXT);case y.Op.END_TEXT:return this.empty($.EMPTY_END_TEXT);case y.Op.WORD_BOUNDARY:return this.empty($.EMPTY_WORD_BOUNDARY);case y.Op.NO_WORD_BOUNDARY:return this.empty($.EMPTY_NO_WORD_BOUNDARY);case y.Op.PLB:case y.Op.NLB:return this.lookBehind(this.compile(e.subs[0]),e.lb);case y.Op.CAPTURE:{const t=this.cap(e.cap<<1),n=this.compile(e.subs[0]),s=this.cap(e.cap<<1|1);return this.cat(this.cat(t,n),s)}case y.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&x.NON_GREEDY)!==0);case y.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&x.NON_GREEDY)!==0);case y.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&x.NON_GREEDY)!==0);case y.Op.CONCAT:if(e.subs.length===0)return this.nop();{let t=null;for(let n of e.subs){const s=this.compile(n);t=t===null?s:this.cat(t,s)}return t}case y.Op.ALTERNATE:if(e.subs.length===0)return this.nop();{let t=null;for(let n of e.subs){const s=this.compile(n);t=t===null?s:this.alt(t,s)}return t}default:throw new iy("regexp: unhandled case in compile")}}},yy=class yt{static simplify(e){if(e===null)return null;switch(e.op){case y.Op.PLB:case y.Op.NLB:case y.Op.CAPTURE:{const t=yt.simplify(e.subs[0]);if(t!==e.subs[0]){const n=y.fromRegexp(e);return n.runes=[],n.subs=[t],n}return e}case y.Op.CONCAT:case y.Op.ALTERNATE:{const t=[];let n=!1;for(let s=0;s<e.subs.length;s++){const i=e.subs[s],o=yt.simplify(i);if(o!==i&&(n=!0),e.op===y.Op.CONCAT){if(o.op===y.Op.NO_MATCH)return new y(y.Op.NO_MATCH);if(o.op===y.Op.EMPTY_MATCH){n=!0;continue}if(o.op===y.Op.CONCAT){n=!0;for(let B=0;B<o.subs.length;B++)t.push(o.subs[B]);continue}}else if(e.op===y.Op.ALTERNATE){if(o.op===y.Op.NO_MATCH){n=!0;continue}if(o.op===y.Op.ALTERNATE){n=!0;for(let B=0;B<o.subs.length;B++)t.push(o.subs[B]);continue}}t.push(o)}if(n){if(t.length===0)return new y(e.op===y.Op.CONCAT?y.Op.EMPTY_MATCH:y.Op.NO_MATCH);if(t.length===1)return t[0];const s=y.fromRegexp(e);return s.runes=[],s.subs=t,s}return e}case y.Op.CHAR_CLASS:return e.runes===null?e:e.runes.length===0?new y(y.Op.NO_MATCH):e.runes.length===2&&e.runes[0]===0&&e.runes[1]===z.MAX_RUNE?new y(y.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===N.CODES.get(`
`)-1&&e.runes[2]===N.CODES.get(`
`)+1&&e.runes[3]===z.MAX_RUNE?new y(y.Op.ANY_CHAR_NOT_NL):e;case y.Op.STAR:case y.Op.PLUS:case y.Op.QUEST:{const t=yt.simplify(e.subs[0]);return yt.simplify1(e.op,e.flags,t,e)}case y.Op.REPEAT:{if(e.min===0&&e.max===0)return new y(y.Op.EMPTY_MATCH);const t=yt.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return yt.simplify1(y.Op.STAR,e.flags,t,null);if(e.min===1)return yt.simplify1(y.Op.PLUS,e.flags,t,null);const s=new y(y.Op.CONCAT),i=[];for(let o=0;o<e.min-1;o++)i.push(t);return i.push(yt.simplify1(y.Op.PLUS,e.flags,t,null)),s.subs=i.slice(0),yt.simplify(s)}if(e.min===1&&e.max===1)return t;let n=null;if(e.min>0){n=[];for(let s=0;s<e.min;s++)n.push(t)}if(e.max>e.min){let s=yt.simplify1(y.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const o=new y(y.Op.CONCAT);o.subs=[t,s],s=yt.simplify1(y.Op.QUEST,e.flags,o,null)}if(n===null)return s;n.push(s)}if(n!==null){const s=new y(y.Op.CONCAT);return s.subs=n.slice(0),yt.simplify(s)}return new y(y.Op.NO_MATCH)}}return e}static simplify1(e,t,n,s){if(n.op===y.Op.EMPTY_MATCH)return n;if(n.op===y.Op.NO_MATCH)return e===y.Op.PLUS?n:new y(y.Op.EMPTY_MATCH);if(e===n.op&&(t&x.NON_GREEDY)===(n.flags&x.NON_GREEDY))return n;if(s!==null&&s.op===e&&(s.flags&x.NON_GREEDY)===(t&x.NON_GREEDY)&&n===s.subs[0])return s;const i=new y(e);return i.flags=t,i.subs=[n],i}},fe=class{constructor(r,e){this.sign=r,this.cls=e}};const Eh=[48,57],_h=[9,10,12,13,32,32],Dh=[48,57,65,90,95,95,97,122],Ih=new Map([["\\d",new fe(1,Eh)],["\\D",new fe(-1,Eh)],["\\s",new fe(1,_h)],["\\S",new fe(-1,_h)],["\\w",new fe(1,Dh)],["\\W",new fe(-1,Dh)]]),yh=[48,57,65,90,97,122],Th=[65,90,97,122],wh=[0,127],Ah=[9,9,32,32],vh=[0,31,127,127],Rh=[48,57],bh=[33,126],Ph=[97,122],Sh=[32,126],Nh=[33,47,58,64,91,96,123,126],Oh=[9,13,32,32],Lh=[65,90],Fh=[48,57,65,90,95,95,97,122],kh=[48,57,65,70,97,102],xh=new Map([["[:alnum:]",new fe(1,yh)],["[:^alnum:]",new fe(-1,yh)],["[:alpha:]",new fe(1,Th)],["[:^alpha:]",new fe(-1,Th)],["[:ascii:]",new fe(1,wh)],["[:^ascii:]",new fe(-1,wh)],["[:blank:]",new fe(1,Ah)],["[:^blank:]",new fe(-1,Ah)],["[:cntrl:]",new fe(1,vh)],["[:^cntrl:]",new fe(-1,vh)],["[:digit:]",new fe(1,Rh)],["[:^digit:]",new fe(-1,Rh)],["[:graph:]",new fe(1,bh)],["[:^graph:]",new fe(-1,bh)],["[:lower:]",new fe(1,Ph)],["[:^lower:]",new fe(-1,Ph)],["[:print:]",new fe(1,Sh)],["[:^print:]",new fe(-1,Sh)],["[:punct:]",new fe(1,Nh)],["[:^punct:]",new fe(-1,Nh)],["[:space:]",new fe(1,Oh)],["[:^space:]",new fe(-1,Oh)],["[:upper:]",new fe(1,Lh)],["[:^upper:]",new fe(-1,Lh)],["[:word:]",new fe(1,Fh)],["[:^word:]",new fe(-1,Fh)],["[:xdigit:]",new fe(1,kh)],["[:^xdigit:]",new fe(-1,kh)]]);var On=class Fn{static charClassToString(e,t){let n="[";for(let s=0;s<t;s+=2){s>0&&(n+=" ");const i=e[s],o=e[s+1];i===o?n+=`0x${i.toString(16)}`:n+=`0x${i.toString(16)}-0x${o.toString(16)}`}return n+="]",n}static cmp(e,t,n,s){const i=e[t]-n;return i!==0?i:s-e[t+1]}static qsortIntPair(e,t,n){const s=((t+n)/2|0)&-2,i=e[s],o=e[s+1];let B=t,c=n;for(;B<=c;){for(;B<n&&Fn.cmp(e,B,i,o)<0;)B+=2;for(;c>t&&Fn.cmp(e,c,i,o)>0;)c-=2;if(B<=c){if(B!==c){let u=e[B];e[B]=e[c],e[c]=u,u=e[B+1],e[B+1]=e[c+1],e[c+1]=u}B+=2,c-=2}}t<c&&Fn.qsortIntPair(e,t,c),B<n&&Fn.qsortIntPair(e,B,n)}constructor(e=$.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;Fn.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const n=this.r[t],s=this.r[t+1];if(n<=this.r[e-1]+1){s>this.r[e-1]&&(this.r[e-1]=s);continue}this.r[e]=n,this.r[e+1]=s,e+=2}return this.len=e,this}appendLiteral(e,t){return t&x.FOLD_CASE?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let n=2;n<=4;n+=2)if(this.len>=n){const s=this.r[this.len-n],i=this.r[this.len-n+1];if(e<=i+1&&s<=t+1)return e<s&&(this.r[this.len-n]=e),t>i&&(this.r[this.len-n+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=z.MIN_FOLD&&t>=z.MAX_FOLD)return this.appendRange(e,t);if(t<z.MIN_FOLD||e>z.MAX_FOLD)return this.appendRange(e,t);e<z.MIN_FOLD&&(this.appendRange(e,z.MIN_FOLD-1),e=z.MIN_FOLD),t>z.MAX_FOLD&&(this.appendRange(z.MAX_FOLD+1,t),t=z.MAX_FOLD);for(let n=e;n<=t;n++){this.appendRange(n,n);for(let s=z.simpleFold(n);s!==n;s=z.simpleFold(s))this.appendRange(s,s)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let n=0;n<e.length;n+=2){const s=e[n],i=e[n+1];t<=s-1&&this.appendRange(t,s-1),t=i+1}return t<=z.MAX_RUNE&&this.appendRange(t,z.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const n=e.getLo(t),s=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(n,s);continue}for(let o=n;o<=s;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let n=0;n<e.length;++n){const s=e.getLo(n),i=e.getHi(n),o=e.getStride(n);if(o===1){t<=s-1&&this.appendRange(t,s-1),t=i+1;continue}for(let B=s;B<=i;B+=o)t<=B-1&&this.appendRange(t,B-1),t=B+1}return t<=z.MAX_RUNE&&this.appendRange(t,z.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let n=0;n<this.len;n+=2){const s=this.r[n],i=this.r[n+1];e<=s-1&&(this.r[t]=e,this.r[t+1]=s-1,t+=2),e=i+1}return this.len=t,e<=z.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=z.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let n=e.cls;return t&&(n=new Fn().appendFoldedClass(n).cleanClass().toArray()),this.appendClassWithSign(n,e.sign)}toString(){return Fn.charClassToString(this.r,this.len)}},Ty=class{constructor(r){this.str=r,this.position=0}pos(){return this.position}rewindTo(r){this.position=r}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(r){this.position+=r}skipString(r){this.position+=r.length}pop(){const r=this.str.codePointAt(this.position);return this.position+=$.charCount(r),r}lookingAt(r){return this.str.startsWith(r,this.position)}rest(){return this.str.substring(this.position)}from(r){return this.str.substring(r,this.position)}toString(){return this.rest()}},H,wy=(H=class{static unicodeTable(e){return e==="Any"?{tab:H.ANY_TABLE,fold:H.ANY_TABLE,sign:1}:e==="Ascii"?{tab:H.ASCII_TABLE,fold:H.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:dt.CATEGORIES.get("Cn"),fold:dt.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:dt.CATEGORIES.get("LC"),fold:dt.FOLD_CATEGORIES.get("LC"),sign:1}:dt.CATEGORIES.has(e)?{tab:dt.CATEGORIES.get(e),fold:dt.FOLD_CATEGORIES.get(e),sign:1}:dt.SCRIPTS.has(e)?{tab:dt.SCRIPTS.get(e),fold:dt.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<z.MIN_FOLD||e>z.MAX_FOLD)return e;let t=e;const n=e;for(e=z.simpleFold(e);e!==n;e=z.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===y.Op.EMPTY_MATCH)return null;if(e.op===y.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===y.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const n=new y(y.Op.LITERAL);return n.flags=t,n.runes=$.stringToRunes(e),n}static parse(e,t){return new H(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const n=H.parseInt(e);if(n===-1||!e.more())return-1;let s;if(!e.lookingAt(","))s=n;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))s=-1;else if((s=H.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),n<0||n>1e3||s===-2||s>1e3||s>=0&&n>s)throw new De(H.ERR_INVALID_REPEAT_SIZE,e.from(t));return n<<16|s&z.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const n=e.codePointAt(t);if(n!==N.CODES.get("_")&&!$.isalnum(n))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=N.CODES.get("0")&&e.peek()<=N.CODES.get("9");)e.skip(1);const n=e.from(t);return n.length===0||n.length>1&&n.codePointAt(0)===N.CODES.get("0")?-1:n.length>8?-2:parseInt(n,10)}static isCharClass(e){return e.op===y.Op.LITERAL&&e.runes.length===1||e.op===y.Op.CHAR_CLASS||e.op===y.Op.ANY_CHAR_NOT_NL||e.op===y.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case y.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case y.Op.CHAR_CLASS:for(let n=0;n<e.runes.length;n+=2)if(e.runes[n]<=t&&t<=e.runes[n+1])return!0;return!1;case y.Op.ANY_CHAR_NOT_NL:return t!==N.CODES.get(`
`);case y.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case y.Op.ANY_CHAR:break;case y.Op.ANY_CHAR_NOT_NL:H.matchRune(t,N.CODES.get(`
`))&&(e.op=y.Op.ANY_CHAR);break;case y.Op.CHAR_CLASS:t.op===y.Op.LITERAL?e.runes=new On(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new On(e.runes).appendClass(t.runes).toArray();break;case y.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=y.Op.CHAR_CLASS,e.runes=new On().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new De(H.ERR_TRAILING_BACKSLASH);let n=e.pop();e:switch(n){case N.CODES.get("1"):case N.CODES.get("2"):case N.CODES.get("3"):case N.CODES.get("4"):case N.CODES.get("5"):case N.CODES.get("6"):case N.CODES.get("7"):if(!e.more()||e.peek()<N.CODES.get("0")||e.peek()>N.CODES.get("7"))break;case N.CODES.get("0"):{let s=n-N.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<N.CODES.get("0")||e.peek()>N.CODES.get("7"));i++)s=s*8+e.peek()-N.CODES.get("0"),e.skip(1);return s}case N.CODES.get("x"):{if(!e.more())break;if(n=e.pop(),n===N.CODES.get("{")){let o=0,B=0;for(;;){if(!e.more())break e;if(n=e.pop(),n===N.CODES.get("}"))break;const c=$.unhex(n);if(c<0||(B=B*16+c,B>z.MAX_RUNE))break e;o++}if(o===0)break e;return B}const s=$.unhex(n);if(!e.more())break;n=e.pop();const i=$.unhex(n);if(s<0||i<0)break;return s*16+i}case N.CODES.get("a"):return N.CODES.get("\x07");case N.CODES.get("f"):return N.CODES.get("\f");case N.CODES.get("n"):return N.CODES.get(`
`);case N.CODES.get("r"):return N.CODES.get("\r");case N.CODES.get("t"):return N.CODES.get("	");case N.CODES.get("v"):return N.CODES.get("\v");default:if(n<=z.MAX_ASCII&&!$.isalnum(n))return n;break}throw new De(H.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new De(H.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?H.parseEscape(e):e.pop()}static concatRunes(e,t){for(let n=0;n<t.length;n++)e.push(t[n]);return e}static hasCapture(e){if(e===null)return!1;if(e.op===y.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(H.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new y(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>H.MAX_RUNES)throw new De(H.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===y.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(H.MAX_SIZE/this.repeats)?this.repeats=H.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(H.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>H.MAX_SIZE)throw new De(H.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let n=0;switch(e.op){case y.Op.LITERAL:n=e.runes.length;break;case y.Op.PLB:case y.Op.NLB:case y.Op.CAPTURE:case y.Op.STAR:n=2+this.calcSize(e.subs[0]);break;case y.Op.PLUS:case y.Op.QUEST:n=1+this.calcSize(e.subs[0]);break;case y.Op.CONCAT:for(let s of e.subs)n=n+this.calcSize(s);break;case y.Op.ALTERNATE:for(let s of e.subs)n=n+this.calcSize(s);e.subs.length>1&&(n=n+e.subs.length-1);break;case y.Op.REPEAT:{let s=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?n=2+s:n=1+e.min*s;break}n=e.max*s+(e.max-e.min);break}}return n=Math.max(1,n),this.size===null&&(this.size=new Map),this.size.set(e,n),n}checkHeight(e){if(!(this.numRegexp<H.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>H.MAX_HEIGHT)throw new De(H.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let n=1;for(let s of e.subs){const i=this.calcHeight(s);n<1+i&&(n=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,n),n}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!y.isPseudoOp(this.stack[t-1].op);)t--;const n=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),n}push(e){if(this.numRunes+=e.runes.length,e.op===y.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=y.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===y.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&z.simpleFold(e.runes[0])===e.runes[2]&&z.simpleFold(e.runes[2])===e.runes[0]||e.op===y.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&z.simpleFold(e.runes[0])===e.runes[1]&&z.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|x.FOLD_CASE))return null;e.op=y.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|x.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const n=this.stack.length;if(n<2)return!1;const s=this.stack[n-1],i=this.stack[n-2];return s.op!==y.Op.LITERAL||i.op!==y.Op.LITERAL||(s.flags&x.FOLD_CASE)!==(i.flags&x.FOLD_CASE)?!1:(i.runes=H.concatRunes(i.runes,s.runes),e>=0?(s.runes=[e],s.flags=t,!0):(this.pop(),this.reuse(s),!1))}newLiteral(e,t){const n=this.newRegexp(y.Op.LITERAL);return n.flags=t,t&x.FOLD_CASE&&(e=H.minFoldRune(e)),n.runes=[e],n}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,n,s,i,o){let B=this.flags;if(B&x.PERL_X&&(i.more()&&i.lookingAt("?")&&(i.skip(1),B^=x.NON_GREEDY),o!==-1))throw new De(H.ERR_INVALID_REPEAT_OP,i.from(o));const c=this.stack.length;if(c===0)throw new De(H.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const u=this.stack[c-1];if(y.isPseudoOp(u.op))throw new De(H.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const h=this.newRegexp(e);if(h.min=t,h.max=n,h.flags=B,h.subs=[u],this.stack[c-1]=h,this.checkLimits(h),e===y.Op.REPEAT&&(t>=2||n>=2)&&!this.repeatIsValid(h,1e3))throw new De(H.ERR_INVALID_REPEAT_SIZE,i.from(s))}repeatIsValid(e,t){if(e.op===y.Op.REPEAT){let n=e.max;if(n===0)return!0;if(n<0&&(n=e.min),n>t)return!1;n>0&&(t=Math.trunc(t/n))}for(let n of e.subs)if(!this.repeatIsValid(n,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(y.Op.EMPTY_MATCH)):this.push(this.collapse(e,y.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(y.Op.NO_MATCH)):this.push(this.collapse(e,y.Op.ALTERNATE))}cleanAlt(e){e.op===y.Op.CHAR_CLASS&&(e.runes=new On(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===z.MAX_RUNE?(e.runes=[],e.op=y.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===N.CODES.get(`
`)-1&&e.runes[2]===N.CODES.get(`
`)+1&&e.runes[3]===z.MAX_RUNE&&(e.runes=[],e.op=y.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let n=0;for(let B of e)n+=B.op===t?B.subs.length:1;let s=new Array(n).fill(null),i=0;for(let B of e)if(B.op===t){for(let c=0;c<B.subs.length;c++)s[i++]=B.subs[c];this.reuse(B)}else s[i++]=B;let o=this.newRegexp(t);if(o.subs=s,t===y.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const B=o;o=o.subs[0],this.reuse(B)}return o}factor(e){if(e.length<2)return e;let t=0,n=e.length,s=0,i=null,o=0,B=0,c=0;for(let h=0;h<=n;h++){let d=null,E=0,v=0;if(h<n){let P=e[t+h];if(P.op===y.Op.CONCAT&&P.subs.length>0&&(P=P.subs[0]),P.op===y.Op.LITERAL&&(d=P.runes,E=P.runes.length,v=P.flags&x.FOLD_CASE),v===B){let V=0;for(;V<o&&V<E&&i[V]===d[V];)V++;if(V>0){o=V;continue}}}if(h!==c)if(h===c+1)e[s++]=e[t+c];else{const P=this.newRegexp(y.Op.LITERAL);P.flags=B,P.runes=i.slice(0,o);for(let W=c;W<h;W++)e[t+W]=this.removeLeadingString(e[t+W],o),this.checkLimits(e[t+W]);const V=this.collapse(e.slice(t+c,t+h),y.Op.ALTERNATE),M=this.newRegexp(y.Op.CONCAT);M.subs=[P,V],e[s++]=M}c=h,i=d,o=E,B=v}n=s,t=0,c=0,s=0;let u=null;for(let h=0;h<=n;h++){let d=null;if(!(h<n&&(d=H.leadingRegexp(e[t+h]),u!==null&&u.equals(d)&&(H.isCharClass(u)||u.op===y.Op.REPEAT&&u.min===u.max&&H.isCharClass(u.subs[0]))))){if(h!==c)if(h===c+1)e[s++]=e[t+c];else{const E=u;for(let V=c;V<h;V++){const M=V!==c;e[t+V]=this.removeLeadingRegexp(e[t+V],M),this.checkLimits(e[t+V])}const v=this.collapse(e.slice(t+c,t+h),y.Op.ALTERNATE),P=this.newRegexp(y.Op.CONCAT);P.subs=[E,v],e[s++]=P}c=h,u=d}}n=s,t=0,c=0,s=0;for(let h=0;h<=n;h++)if(!(h<n&&H.isCharClass(e[t+h]))){if(h!==c)if(h===c+1)e[s++]=e[t+c];else{let d=c;for(let v=c+1;v<h;v++){const P=e[t+d],V=e[t+v];(P.op<V.op||P.op===V.op&&(P.runes!==null?P.runes.length:0)<(V.runes!==null?V.runes.length:0))&&(d=v)}const E=e[t+c];e[t+c]=e[t+d],e[t+d]=E;for(let v=c+1;v<h;v++)H.mergeCharClass(e[t+c],e[t+v]),this.reuse(e[t+v]);this.cleanAlt(e[t+c]),e[s++]=e[t+c]}h<n&&(e[s++]=e[t+h]),c=h+1}n=s,t=0,c=0,s=0;for(let h=0;h<n;++h)h+1<n&&e[t+h].op===y.Op.EMPTY_MATCH&&e[t+h+1].op===y.Op.EMPTY_MATCH||(e[s++]=e[t+h]);return n=s,t=0,e.slice(t,n)}removeLeadingString(e,t){if(e.op===y.Op.CONCAT&&e.subs.length>0){const n=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=n,n.op===y.Op.EMPTY_MATCH)switch(this.reuse(n),e.subs.length){case 0:case 1:e.op=y.Op.EMPTY_MATCH,e.subs=y.emptySubs();break;case 2:{const s=e;e=e.subs[1],this.reuse(s);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===y.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=y.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===y.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=y.Op.EMPTY_MATCH,e.subs=y.emptySubs();break;case 1:{const n=e;e=e.subs[0],this.reuse(n);break}}return e}return t&&this.reuse(e),this.newRegexp(y.Op.EMPTY_MATCH)}parseInternal(){if(this.flags&x.LITERAL)return H.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,n=-1;const s=new Ty(this.wholeRegexp);for(;s.more();){let i=-1;e:switch(s.peek()){case N.CODES.get("("):if(this.flags&x.LOOKBEHIND){if(s.lookingAt("(?<=")){this.parsePosLookBehind(),s.skip(4);break}if(s.lookingAt("(?<!")){this.parseNegLookBehind(),s.skip(4);break}}if(this.flags&x.PERL_X&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(y.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case N.CODES.get("|"):this.parseVerticalBar(),s.skip(1);break;case N.CODES.get(")"):this.parseRightParen(),s.skip(1);break;case N.CODES.get("^"):this.flags&x.ONE_LINE?this.op(y.Op.BEGIN_TEXT):this.op(y.Op.BEGIN_LINE),s.skip(1);break;case N.CODES.get("$"):this.flags&x.ONE_LINE?this.op(y.Op.END_TEXT).flags|=x.WAS_DOLLAR:this.op(y.Op.END_LINE),s.skip(1);break;case N.CODES.get("."):this.flags&x.DOT_NL?this.op(y.Op.ANY_CHAR):this.op(y.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case N.CODES.get("["):this.parseClass(s);break;case N.CODES.get("*"):case N.CODES.get("+"):case N.CODES.get("?"):{i=s.pos();let o=null;switch(s.pop()){case N.CODES.get("*"):o=y.Op.STAR;break;case N.CODES.get("+"):o=y.Op.PLUS;break;case N.CODES.get("?"):o=y.Op.QUEST;break}this.repeat(o,t,n,i,s,e);break}case N.CODES.get("{"):{i=s.pos();const o=H.parseRepeat(s);if(o<0){s.rewindTo(i),this.literal(s.pop());break}t=o>>16,n=(o&z.MAX_BMP)<<16>>16,this.repeat(y.Op.REPEAT,t,n,i,s,e);break}case N.CODES.get("\\"):{const o=s.pos();if(s.skip(1),this.flags&x.PERL_X&&s.more())switch(s.pop()){case N.CODES.get("A"):this.op(y.Op.BEGIN_TEXT);break e;case N.CODES.get("b"):this.op(y.Op.WORD_BOUNDARY);break e;case N.CODES.get("B"):this.op(y.Op.NO_WORD_BOUNDARY);break e;case N.CODES.get("C"):throw new De(H.ERR_INVALID_ESCAPE,"\\C");case N.CODES.get("Q"):{let u=s.rest();const h=u.indexOf("\\E");h>=0?(u=u.substring(0,h),s.skipString(u),s.skipString("\\E")):s.skipString(u);let d=0;for(;d<u.length;){const E=u.codePointAt(d);this.literal(E),d+=$.charCount(E)}break e}case N.CODES.get("z"):this.op(y.Op.END_TEXT);break e;default:s.rewindTo(o);break}else s.rewindTo(o);const B=this.newRegexp(y.Op.CHAR_CLASS);if(B.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const u=new On;if(this.parseUnicodeClass(s,u)){B.runes=u.toArray(),this.push(B);break e}}const c=new On;if(this.parsePerlClassEscape(s,c)){B.runes=c.toArray(),this.push(B);break e}s.rewindTo(o),this.reuse(B),this.literal(H.parseEscape(s));break}default:this.literal(s.pop());break}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new De(H.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),n=e.rest();if(n.startsWith("(?P<")||n.startsWith("(?<")){const B=n.charAt(2)==="P"?4:3,c=n.indexOf(">");if(c<0)throw new De(H.ERR_INVALID_NAMED_CAPTURE,n);const u=n.substring(B,c);if(e.skipString(u),e.skip(B+1),!H.isValidCaptureName(u))throw new De(H.ERR_INVALID_NAMED_CAPTURE,n.substring(0,c+1));const h=this.op(y.Op.LEFT_PAREN);if(h.cap=++this.numCap,this.namedGroups[u])throw new De(H.ERR_DUPLICATE_NAMED_CAPTURE,u);this.namedGroups[u]=this.numCap,h.name=u;return}e.skip(2);let s=this.flags,i=1,o=!1;e:for(;e.more();){const B=e.pop();switch(B){case N.CODES.get("i"):s|=x.FOLD_CASE,o=!0;break;case N.CODES.get("m"):s&=-17,o=!0;break;case N.CODES.get("s"):s|=x.DOT_NL,o=!0;break;case N.CODES.get("U"):s|=x.NON_GREEDY,o=!0;break;case N.CODES.get("-"):if(i<0)break e;i=-1,s=~s,o=!1;break;case N.CODES.get(":"):case N.CODES.get(")"):if(i<0){if(!o)break e;s=~s}B===N.CODES.get(":")&&this.op(y.Op.LEFT_PAREN),this.flags=s;return;default:break e}}throw new De(H.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(y.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(y.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(y.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===y.Op.VERTICAL_BAR&&H.isCharClass(this.stack[e-1])&&H.isCharClass(this.stack[e-3])){let t=this.stack[e-1],n=this.stack[e-3];if(t.op>n.op){const s=n;n=t,t=s,this.stack[e-3]=n}return H.mergeCharClass(n,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],n=this.stack[e-2];if(n.op===y.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=n,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new De(H.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==y.Op.LEFT_PAREN)throw new De(H.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(H.hasCapture(e))throw new De(H.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=y.Op.PLB:t.op=y.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=y.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const n=e.pos();if(!(this.flags&x.PERL_X)||!e.more()||e.pop()!==N.CODES.get("\\")||!e.more())return!1;e.pop();const s=e.from(n),i=Ih.has(s)?Ih.get(s):null;return i===null?!1:(t.appendGroup(i,(this.flags&x.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const n=e.rest(),s=n.indexOf(":]");if(s<0)return!1;const i=n.substring(0,s+2);e.skipString(i);const o=xh.has(i)?xh.get(i):null;if(o===null)throw new De(H.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&x.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const n=e.pos();if(!(this.flags&x.UNICODE_GROUPS)||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let s=1,i=e.pop();if(i===N.CODES.get("P")&&(s=-1),!e.more())throw e.rewindTo(n),new De(H.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==N.CODES.get("{"))o=$.runeToString(i);else{const h=e.rest(),d=h.indexOf("}");if(d<0)throw e.rewindTo(n),new De(H.ERR_INVALID_CHAR_RANGE,e.rest());o=h.substring(0,d),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===N.CODES.get("^")&&(s=0-s,o=o.substring(1));const B=H.unicodeTable(o);if(B===null)throw new De(H.ERR_INVALID_CHAR_RANGE,e.from(n));B.sign<0&&(s=0-s);const c=B.tab,u=B.fold;if(!(this.flags&x.FOLD_CASE)||u===null)t.appendTableWithSign(c,s);else{const h=new On().appendTable(c).appendTable(u).cleanClass().toArray();t.appendClassWithSign(h,s)}return!0}parseClass(e){const t=e.pos();e.skip(1);const n=this.newRegexp(y.Op.CHAR_CLASS);n.flags=this.flags;const s=new On;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),this.flags&x.CLASS_NL||s.appendRange(N.CODES.get(`
`),N.CODES.get(`
`)));let o=!0;for(;!e.more()||e.peek()!==N.CODES.get("]")||o;){if(e.more()&&e.lookingAt("-")&&!(this.flags&x.PERL_X)&&!o){const h=e.rest();if(h==="-"||!h.startsWith("-]"))throw e.rewindTo(t),new De(H.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const B=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,s))continue;e.rewindTo(B)}if(this.parseUnicodeClass(e,s)||this.parsePerlClassEscape(e,s))continue;e.rewindTo(B);const c=H.parseClassChar(e,t);let u=c;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(u=H.parseClassChar(e,t),u<c)throw new De(H.ERR_INVALID_CHAR_RANGE,e.from(B))}this.flags&x.FOLD_CASE?s.appendFoldedRange(c,u):s.appendRange(c,u)}e.skip(1),s.cleanClass(),i<0&&s.negateClass(),n.runes=s.toArray(),this.push(n)}},U(H,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),U(H,"ERR_INVALID_CHAR_RANGE","invalid character class range"),U(H,"ERR_INVALID_ESCAPE","invalid escape sequence"),U(H,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),U(H,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),U(H,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),U(H,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),U(H,"ERR_MISSING_BRACKET","missing closing ]"),U(H,"ERR_MISSING_PAREN","missing closing )"),U(H,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),U(H,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),U(H,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name"),U(H,"ERR_UNEXPECTED_PAREN","unexpected )"),U(H,"ERR_NESTING_DEPTH","expression nests too deeply"),U(H,"ERR_LARGE","expression too large"),U(H,"ERR_INVALID_CAPTURE_IN_LOOKBEHIND","invalid capture in lookbehind"),U(H,"MAX_HEIGHT",1e3),U(H,"MAX_SIZE",3355443),U(H,"MAX_RUNES",33554432),U(H,"ANY_TABLE",new p(new Uint32Array([0,z.MAX_RUNE,1]))),U(H,"ASCII_TABLE",new p(new Uint32Array([0,127,1]))),U(H,"ASCII_FOLD_TABLE",new p(new Uint32Array([0,127,1,383,383,1,8490,8490,1]))),H),Ay=class lr{static initTest(e){const t=lr.compile(e),n=new lr(t.expr,t.prog,t.numSubexp,t.longest);return n.cond=t.cond,n.prefix=t.prefix,n.prefixUTF8=t.prefixUTF8,n.prefixComplete=t.prefixComplete,n.prefixRune=t.prefixRune,n.prefilter=t.prefilter,n}static compile(e){return lr.compileImpl(e,x.PERL,!1)}static compilePOSIX(e){return lr.compileImpl(e,x.POSIX,!0)}static compileImpl(e,t,n){let s=wy.parse(e,t);const i=s.maxCap();s=yy.simplify(s);const o=_y.build(s),B=Iy.compileRegexp(s),c=new lr(e,B,i,n);c.prefilter=o.type===de.Type.NONE?null:o;const[u,h]=B.prefix();return c.prefixComplete=u,c.prefix=h,c.prefixUTF8=$.stringToUtf8ByteArray(c.prefix),c.prefix.length>0&&(c.prefixRune=c.prefix.codePointAt(0)),c.namedGroups=s.namedGroups,c}static match(e,t){return lr.compile(e).match(t)}constructor(e,t,n=0,s=0){this.expr=e,this.prog=t,this.numSubexp=n,this.longest=s,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.machinePool=[],this.dfa=new uy(this.prog),this.onepass=gh.compile(this.prog),this.prefilter=null}matchPrefixComplete(e,t,n,s){if((n===x.ANCHOR_START||n===x.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const B=e.prefixLength(this);if(n===x.UNANCHORED){const c=e.index(this,t);if(c<0)return null;i=t+c,o=i+B}else if(n===x.ANCHOR_BOTH){if(e.endPos()!==B||e.index(this,0)!==0)return null;i=0,o=B}else if(n===x.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=B}if(i<0)return null;if(s>0){const c=new Int32Array(s).fill(-1);return c[0]=i,c[1]=o,Array.from(c)}return[]}executeEngine(e,t,n,s){if(this.prefixComplete&&(s===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,n,s);if(this.prefilter!==null&&n===x.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return gh.execute(this,e,t,n,s);if(s>0)return this.prog.numLb===0&&e.endPos()<=Io.maxBitStateLen(this.prog)?Io.execute(this,e,t,n,s):this.doExecuteNFA(e,t,n,s);if(this.prog.numLb===0){const i=this.dfa.match(e,t,n);if(i!==null)return i?[]:null;if(e.endPos()<=Io.maxBitStateLen(this.prog))return Io.execute(this,e,t,n,s)}return this.doExecuteNFA(e,t,n,s)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,n,s){let i=this.get();i||(i=ay.fromRE2(this)),i.init(s);const o=i.match(e,t,n)?i.submatches():null;return this.put(i),o}match(e){return this.executeEngine(ye.fromUTF16(e),0,x.UNANCHORED,0)!==null}matchWithGroup(e,t,n,s,i){return e instanceof yr||($.isByteArray(e)?e=dr.utf8(e):e=dr.utf16(e)),this.matchMachineInput(e,t,n,s,i)}matchMachineInput(e,t,n,s,i){if(t>n)return[!1,null];const o=e.isUTF16Encoding()?ye.fromUTF16(e.asCharSequence(),0,n):ye.fromUTF8(e.asBytes(),0,n),B=this.executeEngine(o,t,s,2*i);return B===null?[!1,null]:[!0,B]}matchUTF8(e){return this.executeEngine(ye.fromUTF8(e),0,x.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,n){let s=0,i=0,o="";const B=ye.fromUTF16(e);let c=0;for(;i<=e.length;){const u=this.executeEngine(B,i,x.UNANCHORED,2);if(u===null||u.length===0)break;o+=e.substring(s,u[0]),(u[1]>s||u[0]===0)&&(o+=t(e.substring(u[0],u[1])),c++),s=u[1];const h=B.step(i)&7;if(i+h>u[1]?i+=h:i+1>u[1]?i++:i=u[1],c>=n)break}return o+=e.substring(s),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let n=new Array(t).fill(-1);for(let s=0;s<e.length;s++)n[s]=e[s];e=n}return e}allMatches(e,t,n=s=>s){let s=[];const i=e.endPos();t<0&&(t=i+1);let o=0,B=0,c=-1;for(;B<t&&o<=i;){const u=this.executeEngine(e,o,x.UNANCHORED,this.prog.numCap);if(u===null||u.length===0)break;let h=!0;if(u[1]===o){u[0]===c&&(h=!1);const d=e.step(o);d<0?o=i+1:o+=d&7}else o=u[1];c=u[1],h&&(s.push(n(this.pad(u))),B++)}return s}findUTF8(e){const t=this.executeEngine(ye.fromUTF8(e),0,x.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(ye.fromUTF8(e),0,x.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(ye.fromUTF16(e),0,x.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(ye.fromUTF16(e),0,x.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(ye.fromUTF8(e),0,x.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let s=0;s<n.length;s++)2*s<t.length&&t[2*s]>=0&&(n[s]=e.slice(t[2*s],t[2*s+1]));return n}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(ye.fromUTF8(e),0,x.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(ye.fromUTF16(e),0,x.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let s=0;s<n.length;s++)2*s<t.length&&t[2*s]>=0&&(n[s]=e.substring(t[2*s],t[2*s+1]));return n}findSubmatchIndex(e){return this.pad(this.executeEngine(ye.fromUTF16(e),0,x.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const n=this.allMatches(ye.fromUTF8(e),t,s=>e.slice(s[0],s[1]));return n.length===0?null:n}findAllUTF8Index(e,t){const n=this.allMatches(ye.fromUTF8(e),t,s=>s.slice(0,2));return n.length===0?null:n}findAll(e,t){const n=this.allMatches(ye.fromUTF16(e),t,s=>e.substring(s[0],s[1]));return n.length===0?null:n}findAllIndex(e,t){const n=this.allMatches(ye.fromUTF16(e),t,s=>s.slice(0,2));return n.length===0?null:n}findAllUTF8Submatch(e,t){const n=this.allMatches(ye.fromUTF8(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.slice(s[2*o],s[2*o+1]));return i});return n.length===0?null:n}findAllUTF8SubmatchIndex(e,t){const n=this.allMatches(ye.fromUTF8(e),t);return n.length===0?null:n}findAllSubmatch(e,t){const n=this.allMatches(ye.fromUTF16(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.substring(s[2*o],s[2*o+1]));return i});return n.length===0?null:n}findAllSubmatchIndex(e,t){const n=this.allMatches(ye.fromUTF16(e),t);return n.length===0?null:n}},vy=class Ur{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(e instanceof RegExp&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let n="",s=!1,i=e.length;i===0&&(n="(?:)",s=!0);let o=!1,B=0;for(;B<i;){let u=e[B];if(u==="\\"){if(B+1<i)switch(u=e[B+1],u){case"\\":n+="\\\\",B+=2;continue;case"c":if(B+2<i){let E=e[B+2].charCodeAt(0);if(E>=65&&E<=90||E>=97&&E<=122){let v=E%32;n+="\\x",n+=(v>>4).toString(16).toUpperCase(),n+=(v&15).toString(16).toUpperCase(),B+=3,s=!0;continue}}n+="c",B+=2,s=!0;continue;case"u":if(B+2<i){if(e[B+2]==="{"){let E=B+3,v=!1,P=!1;for(;E<i;){const V=e[E];if(V==="}"){P=!0;break}if(!Ur.isHexadecimal(V))break;v=!0,E++}if(P&&v){n+="\\x",B+=2,s=!0;continue}}else if(B+5<i){let E=!0;for(let v=0;v<4;v++)if(!Ur.isHexadecimal(e[B+2+v])){E=!1;break}if(E){n+="\\x{"+e.substring(B+2,B+6)+"}",B+=6,s=!0;continue}}}n+="u",B+=2,s=!0;continue;case"x":{let E=!1;if(B+2<i&&e[B+2]==="{"){let v=B+3,P=!1,V=!1;for(;v<i;){const M=e[v];if(M==="}"){V=!0;break}if(!Ur.isHexadecimal(M))break;P=!0,v++}V&&P&&(E=!0)}else B+3<i&&Ur.isHexadecimal(e[B+2])&&Ur.isHexadecimal(e[B+3])&&(E=!0);E?(n+="\\x",B+=2):(n+="x",B+=2,s=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":n+="\\"+u,B+=2;continue;default:{let E=e.codePointAt(B+1);if(E>=48&&E<=57||E>=65&&E<=90||E>=97&&E<=122){let v=$.charCount(E);n+=e.substring(B+1,B+1+v),B+=v+1,s=!0}else{n+="\\";let v=$.charCount(E);n+=e.substring(B+1,B+1+v),B+=v+1}continue}}}else if(u==="/"){n+="\\/",B+=1,s=!0;continue}else if(u==="[")o=!0;else if(u==="]")o=!1;else if(!o&&u==="("&&B+2<i&&e[B+1]==="?"&&e[B+2]==="<"&&B+3<i&&!"=!>)".includes(e[B+3])){n+="(?P<",B+=3,s=!0;continue}let h=e.codePointAt(B),d=$.charCount(h);n+=e.substring(B,B+d),B+=d}const c=s?n:e;return t.length>0?`(?${t})${c}`:c}},Me,Nc=(Me=class{static quote(e){return $.quoteMeta(e)}static quoteReplacement(e,t=!1){return fh.quoteReplacement(e,t)}static translateRegExp(e){return vy.translate(e)}static compile(e,t=0){let n=e;if(t&Me.CASE_INSENSITIVE&&(n=`(?i)${n}`),t&Me.DOTALL&&(n=`(?s)${n}`),t&Me.MULTILINE&&(n=`(?m)${n}`),t&-544)throw new oy("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");let s=x.PERL;t&Me.DISABLE_UNICODE_GROUPS&&(s&=-129),t&Me.LOOKBEHINDS&&(s|=x.LOOKBEHIND);const i=new Me(e,t);return i.re2Input=Ay.compileImpl(n,s,(t&Me.LONGEST_MATCH)!==0),i}static matches(e,t){return Me.compile(e).testExact(t)}static initTest(e,t,n){if(e==null)throw new Error("pattern is null");if(n==null)throw new Error("re2 is null");const s=new Me(e,t);return s.re2Input=n,s}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return $.isByteArray(e)&&(e=dr.utf8(e)),new fh(this,e)}test(e){return $.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=$.isByteArray(e)?ye.fromUTF8(e):ye.fromUTF16(e);return this.re2Input.executeEngine(t,0,x.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);if(!t.find())return null;const n=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);n.push(o===null?void 0:o)}n.index=t.start(0),n.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);n.groups=i}else n.groups=void 0;return n}split(e,t=0){const n=this.matcher(e),s=[];let i=0,o=0;for(;n.find();){if(o===0&&n.end()===0){o=n.end();continue}if(t>0&&s.length===t-1)break;if(o===n.start()){if(t===0){i+=1,o=n.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(n.substring(o,n.start())),o=n.end()}if(t===0&&o!==n.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(n.substring(o,n.inputLength()))}return(t!==0||s.length===0&&!(o===n.inputLength()&&o>0))&&s.push(n.substring(o,n.inputLength())),s}*matchAll(e){const t=this.matcher(e);for(;t.find();){const n=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);n.push(o===null?void 0:o)}n.index=t.start(0),n.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);n.groups=i}else n.groups=void 0;yield n}}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}},U(Me,"CASE_INSENSITIVE",Mr.CASE_INSENSITIVE),U(Me,"DOTALL",Mr.DOTALL),U(Me,"MULTILINE",Mr.MULTILINE),U(Me,"DISABLE_UNICODE_GROUPS",Mr.DISABLE_UNICODE_GROUPS),U(Me,"LONGEST_MATCH",Mr.LONGEST_MATCH),U(Me,"LOOKBEHINDS",Mr.LOOKBEHINDS),Me);/**
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
 */let ps="13.0.0";function Ry(r){ps=r}/**
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
 *//**
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
 */const Tr=new lc("@firebase/firestore");function Hr(){return Tr.logLevel}function K(r,...e){if(Tr.logLevel<=ue.DEBUG){const t=e.map(Oc);Tr.debug(`Firestore (${ps}): ${r}`,...t)}}function _n(r,...e){if(Tr.logLevel<=ue.ERROR){const t=e.map(Oc);Tr.error(`Firestore (${ps}): ${r}`,...t)}}function xt(r,...e){if(Tr.logLevel<=ue.WARN){const t=e.map(Oc);Tr.warn(`Firestore (${ps}): ${r}`,...t)}}function Oc(r){if(typeof r=="string")return r;try{return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
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
 */function ee(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,dC(r,n,t)}function dC(r,e,t){let n=`FIRESTORE (${ps}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw _n(n),new Error(n)}function Q(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||dC(e,s,n)}function ie(r,e){return r}/**
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
 */function by(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class Lc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=by(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function ae(r,e){return r<e?-1:r>e?1:0}function gi(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),i=e.charAt(n);if(s!==i)return vB(s)===vB(i)?ae(s,i):vB(s)?1:-1}return ae(r.length,e.length)}const Py=55296,Sy=57343;function vB(r){const e=r.charCodeAt(0);return e>=Py&&e<=Sy}function ns(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}/**
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
 */class Re{constructor(e,t){this.comparator=e,this.root=t||Ze.EMPTY}insert(e,t){return new Re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new To(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new To(this.root,e,this.comparator,!1)}getReverseIterator(){return new To(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new To(this.root,e,this.comparator,!0)}}class To{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Ze(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new Ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Vh(this.data.getIterator())}getIteratorFrom(e){return new Vh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new He(this.comparator);return t.data=e,t}}class Vh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends yn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */const Jt="__name__";class Ut{constructor(e,t,n){t===void 0?t=0:t>e.length&&ee(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&ee(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Ut.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ut?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=Ut.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ae(e.length,t.length)}static compareSegments(e,t){const n=Ut.isNumericId(e),s=Ut.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?Ut.extractNumericId(e).compare(Ut.extractNumericId(t)):gi(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jn.fromString(e.substring(4,e.length-2))}}class Ce extends Ut{construct(e,t,n){return new Ce(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new j(F.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new Ce(t)}static emptyPath(){return new Ce([])}}const Ny=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let Rt=class Jr extends Ut{construct(e,t,n){return new Jr(e,t,n)}static isValidIdentifier(e){return Ny.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Jr.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Jt}static keyField(){return new Jr([Jt])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new j(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const B=e[s];if(B==="\\"){if(s+1===e.length)throw new j(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,s+=2}else B==="`"?(o=!o,s++):B!=="."||o?(n+=B,s++):(i(),s++)}if(i(),o)throw new j(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Jr(t)}static emptyPath(){return new Jr([])}};/**
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
 */class kt{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new kt([])}unionWith(e){let t=new He(Rt.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new kt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ns(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */function wr(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function br(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Oy(r,e){const t=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.push(e(r[n],n,r));return t}function CC(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ce.fromString(e))}static fromName(e){return new Y(Ce.fromString(e).popFirst(5))}static empty(){return new Y(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ce(e.slice()))}}/**
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
 */function pC(r,e,t){if(!t)throw new j(F.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Ly(r,e,t,n){if(e===!0&&n===!0)throw new j(F.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Mh(r){if(!Y.isDocumentKey(r))throw new j(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Gh(r){if(Y.isDocumentKey(r))throw new j(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function qi(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function ya(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ee(12329,{type:typeof r})}function rs(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new j(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ya(r);throw new j(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(r,e){const t={typeString:r};return e&&(t.value=e),t}function ji(r,e){if(!qi(r))throw new j(F.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0,o=e[n].optional;if(!(n in r)){if(o)continue;t=`JSON missing required field: '${n}'`;break}const B=r[n];if(s&&typeof B!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&B!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new j(F.INVALID_ARGUMENT,t);return!0}/**
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
 */const Uh=-62135596800,Hh=1e6;class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Hh);return new pe(t,n)}static fromInstant(e){if(!e||typeof e.t!="bigint")throw new j(F.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return pe._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,n;if(e>=0n)t=Number(e/1000000000n),n=Number(e%1000000000n);else{const s=e%1000000000n;s===0n?(t=Number(e/1000000000n),n=0):(t=Number(e/1000000000n-1n),n=Number(s+1000000000n))}return new pe(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Uh)throw new j(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hh}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new j(F.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ji(e,pe._jsonSchema))return new pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Uh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pe._jsonSchemaVersion="firestore/timestamp/1.0",pe._jsonSchema={type:Fe("string",pe._jsonSchemaVersion),seconds:Fe("number"),nanoseconds:Fe("number")};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Se{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gC("Invalid base64 string: "+i):i}}(e);return new Se(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Se(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Se.EMPTY_BYTE_STRING=new Se("");const Fy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wn(r){if(Q(!!r,39018),typeof r=="string"){let e=0;const t=Fy.exec(r);if(Q(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Oe(r.seconds),nanos:Oe(r.nanos)}}function Oe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ar(r){return typeof r=="string"?Se.fromBase64String(r):Se.fromUint8Array(r)}/**
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
 */const mC="server_timestamp",EC="__type__",_C="__previous_value__",DC="__local_write_time__";function Fc(r){return(r?.mapValue?.fields||{})[EC]?.stringValue===mC}function Ki(r){const e=r.mapValue.fields[_C];return Fc(e)?Ki(e):e}function ss(r){const e=Wn(r.mapValue.fields[DC].timestampValue);return new pe(e.seconds,e.nanos)}/**
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
 */class ky{constructor(e,t,n,s,i,o,B,c,u,h,d,E,v){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=B,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=d,this._customHeaders=E,this.grpcFlowControlWindow=v}}const $o="(default)";class mi{constructor(e,t){this.projectId=e,this.database=t||$o}static empty(){return new mi("","")}get isDefaultDatabase(){return this.database===$o}isEqual(e){return e instanceof mi&&e.projectId===this.projectId&&e.database===this.database}}function xy(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new j(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mi(r.options.projectId,e)}/**
 * Copyright 2021 M.Vokhmentsev
 *
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(){this.exponent=0,this.i=0n,this.o=0n,this.u=new Array(4).fill(0n),this.l=new Array(6).fill(0n),this.h=new Array(6).fill(0n),this.T=new Array(6).fill(0n),this.P=new Array(12).fill(0n)}static I(e,t){let n=new te;return n.parse(e,t),n}parse(e,t){t+=e.length-1,this.exponent=0,this.i=0n,this.o=0n;let n=this.T,s=this.R(e,n);if(s==0&&this.isEmpty(n)||(t+=s)<te.A)return;if(t>te.V)return void(this.exponent=Number(te.m));let i=this.p(t,n);this.S(t,i,n)}R(e,t){for(let i=0;i<6;i++)t[i]=0n;let n=0;for(;n<e.length&&e[n]==0;)n+=1;if(n==e.length)return 0;let s=-n;if(e.length-n>te.v){let i=e[te.v]>=5,o=new Array(te.v).fill(0);for(let B=0;B<te.v;B++)o[B]=e[B+n];i&&(s+=this.D(o)),e=o,n=0}for(let i=e.length-1;i>=n;i--)t[0]|=BigInt(e[i])<<32n,this.C(t);return s}C(e){let t=e.length;for(let n=0;n<t;n++){let s=e[n]%10n;e[n]=e[n]/10n,n+1<t&&(e[n+1]+=s<<32n)}}isEmpty(e){for(let t=0;t<e.length;t++)if(e[t]!=0n)return!1;return!0}D(e){for(let t=e.length-1;t>=0;t--){if(e[t]!=9)return e[t]=e[t]+1,0;e[t]=0}return e[0]=1,1}p(e,t){let n=t[0]<<31n|t[1]>>1n,s=Number(n)/te.F;return Math.floor(Number(e)*te.O+this.log2(s))}log2(e){return te.M*Math.log(e)}S(e,t,n){let s=this.u;this.N(-t,s);let i=this.P;this.B(n,s,i),this.L(i),BigInt(s[0])!=BigInt(-e)&&this.L(i),t+=this.U(i),(t+=te.k)<=0||(t+=this.q(i),BigInt(t)>=te.m?this.exponent=Number(te.m):(this.exponent=Number(t),this.i=(i[0]<<32n)+i[1]&0xffffffffffffffffn,this.o=(i[2]<<32n)+i[3]&0xffffffffffffffffn))}N(e,t){if(e==0)return void this.K(te.$[0],t);let n=te.$;e<0&&(e=-e,n=te.W);let s=te.G,i=32,o=!0;for(;e>0;)e>=s&&(o?(this.K(n[i],t),o=!1):this.j(t,n[i],t),e-=s),i-=1,s*=.5}K(e,t){for(let n=0;n<t.length;n++)t[n]=e[n]}j(e,t,n){this.H(e,t,this.P);let s=this.J(this.P);this.Y(this.P,n),n[0]=e[0]+t[0]+BigInt(s)}H(e,t,n){for(let s=0;s<n.length;s++)n[s]=0n;this.Z(e,this.l),this.Z(t,this.h);for(let s=5;s>=0;s--)for(let i=5;i>=0;i--){let o=this.l[s]*this.h[i];n[i+s+1]=n[i+s+1]+(o&te.X)&0xffffffffffffffffn,n[i+s]=n[i+s]+(o>>32n)&0xffffffffffffffffn}for(let s=11;s>=1;s--)n[s-1]=n[s-1]+(n[s]>>32n)&0xffffffffffffffffn,n[s]&=te.X}J(e){let t=0;for(;this.ee(e);)this.L(e),t-=1;return t}ee(e){if(e[0]<0x19999999n)return!0;if(e[0]>0x19999999n)return!1;for(let t=1;t<e.length;t++){if(e[t]<0x99999999n)return!0;if(e[t]>0x99999999n)return!1}return!1}B(e,t,n){for(let o=0;o<n.length;o++)n[o]=0n;let s=this.h;this.Z(t,s);let i=e.length;for(let o=i-1;o>=0;o--)for(let B=i-1;B>=0;B--){let c=e[o]*s[B];n[B+o+1]=n[B+o+1]+(c&te.X)&0xffffffffffffffffn,n[B+o]=n[B+o]+(c>>32n)&0xffffffffffffffffn}for(let o=11;o>=1;o--)n[o-1]=n[o-1]+(n[o]>>32n)&0xffffffffffffffffn,n[o]&=te.X}L(e){let t=e.length-1;e[0]&=te.X,e[t]*=10n;for(let n=t-1;n>=0;n--)e[n]=10n*e[n]+(e[n+1]>>32n)&0xffffffffffffffffn,e[n+1]&=te.X}U(e){let t=31-te.te(e[0]);return t!=0&&this.ne(e,t),t}q(e){return this.re(e,5,100n),this.re(e,4,0x80000000n),(e[0]&te.ie<<1n)!=0n?(this.ne(e,1),1):0}Y(e,t){t[1]=(e[0]<<32n)+e[1],t[2]=(e[2]<<32n)+e[3],t[3]=(e[4]<<32n)+e[5]}Z(e,t){t[0]=e[1]>>32n,t[1]=e[1]&te.X,t[2]=e[2]>>32n,t[3]=e[2]&te.X,t[4]=e[3]>>32n,t[5]=e[3]&te.X}ne(e,t){let n=e.length-1,s=BigInt(32-Math.abs(t));if(t>0){let i=BigInt(t);for(let o=n+1-1;o>=1;o--)e[o]=e[o]>>i|e[o-1]<<s&te.X;e[0]=e[0]>>i}else if(t<0){let i=BigInt(-t);e[0]=0xffffffffffffffffn&(e[0]<<i|e[1]>>s);for(let o=1;o<n;o++)e[o]=0xffffffffffffffffn&(e[o]<<i&te.X|e[o+1]>>s);e[n]=e[n]<<i&te.X}}re(e,t,n){let s=t;e[s]=e[s]+n&0xffffffffffffffffn;for(let i=s+1-1;i>=1&&(e[i]&te.ie)!=0n;i--)e[i]&=te.X,e[i-1]+=1n}static te(e){let t=Number(e>>32n);return t==0?32+Math.clz32(Number(BigInt.asUintN(32,e))):Math.clz32(t)}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,zr,KB,ko,xo,Ws;te.v=59,te.V=646456993,te.A=-646457032,te.F=0xccccccccccccd00,te.se=0x8000000000000000n,te.G=2147483648,te.X=0x00000000ffffffffn,te.ie=0xffffffff00000000n,te.O=Math.log(10)/Math.log(2),te.M=1/Math.log(2),te.k=2147483647,te.m=0xffffffffn,te.$=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[1n,0x3333333333333333n,0x3333333333333333n,0x3333333333333334n],[1n,0x6666666666666666n,0x6666666666666666n,0x6666666666666667n],[2n,0x28f5c28f5c28f5c2n,0x8f5c28f5c28f5c28n,0xf5c28f5c28f5c290n],[3n,0x4189374bc6a7ef9dn,0xb22d0e5604189374n,0xbc6a7ef9db22d0e6n],[5n,0xa7c5ac471b478423n,0x0fcf80dc33721d53n,0xcddd6e04c0592104n],[10n,0x6df37f675ef6eadfn,0x5ab9a2072d44268dn,0x97df837e6748956en],[20n,0x2f394219248446ban,0xa23d2ec729af3d61n,0x0607aa0167dd94cbn],[39n,0x571cbec554b60dbbn,0xd5f64baf0506840dn,0x451db70d5904029bn],[78n,0x1da48ce468e7c702n,0x6520247d3556476dn,0x1469caf6db224cfan],[155n,0x2252f0e5b39769dcn,0x9ae2eea30ca3ade0n,0xeeaa3c08dfe84e30n],[309n,0x2e055c9a3f6ba793n,0x16583a816eb60a59n,0x22c4b0826cf1ebf7n],[617n,0x52bb45e9cf23f17fn,0x7688c07606e50364n,0xb34479aa9d449a57n],[1234n,0x1abc81c8ff5f846cn,0x8f5e3c9853e38c97n,0x45060097f3bf9296n],[2467n,0x1bec53b510daa7b4n,0x48369ed77dbb0eb1n,0x3b05587b2187b41en],[4933n,0x1e75063a5ba91326n,0x8abfb8e460016ae3n,0x28008702d29e8a3cn],[9865n,0x243c5d8bb5c5fa55n,0x40c6d248c5881915n,0x4c0fd99fd5befc22n],[19729n,0x334a5570c3f4ef3cn,0xa13c36c43f979c90n,0xda7ac473555fb7a8n],[39457n,0x66c304445dd98f3bn,0xa8c293a20e47a41bn,0x4c5b03dc12604964n],[78914n,0x293ffbf5fb028cc4n,0x89d3e5ff44238406n,0x369a339e1bfe8c9bn],[157827n,0x427792fbb68e5d20n,0x7b297cd9fc154b62n,0xf09142114aa9a20cn],[315653n,0xac92bc65ad5c08fcn,0x00beeb115a566c19n,0x4ba882d8a4622437n],[631306n,0x745581440f92e80en,0x4da822cf7f896f41n,0x509d598678164ecdn],[1262612n,0x34dd99b4c69523a5n,0x64bc2e8f0d8b1044n,0xb03b1c96da5dd349n],[2525223n,0x6d2bbea9d6d25a08n,0xa0a4606a88e96b70n,0x182063bbc2fe8520n],[5050446n,0x2e8e47d63bfdd6e3n,0x2b55fa8976eaa3e9n,0x1a6b9d3086412a73n],[10100891n,0x54aa68efa1d719dfn,0xd8505806612c5c8fn,0xad068837fee8b43an],[20201782n,0x1c00464ccb7bae77n,0x9e3877784c77982cn,0xd94af3b61717404fn],[40403563n,0x1ea099c8be2b6cd0n,0x8bfb6d539fa50466n,0x6d3bc37e69a84218n],[80807125n,0x24a457f466ce8d18n,0xf2c8f3b81bc6bb59n,0xa78c757692e02d49n],[161614249n,0x347256677aba6b53n,0x3fbf90d30611a67cn,0x1e039d87e0bdb32bn],[323228497n,0x6b727daf0fd3432an,0x71f71121f9e4200fn,0x8fcd9942d486c10cn],[646456994n,0x2d18e84484d91f78n,0x4079bfe7829dec6fn,0x21551643e365abc6n]],te.W=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[0n,0x8000000000000000n,0x0000000000000000n,0x0000000000000000n],[0n,0x4000000000000000n,0x0000000000000000n,0x0000000000000001n],[-1n,0xa000000000000000n,0x0000000000000000n,0x0000000000000000n],[-2n,0x6400000000000000n,0x0000000000000000n,0x0000000000000000n],[-4n,0x2710000000000000n,0x0000000000000000n,0x0000000000000001n],[-9n,0x3b9aca0000000000n,0x0000000000000000n,0x0000000000000001n],[-19n,0x8ac7230489e80000n,0x0000000000000000n,0x0000000000000000n],[-38n,0x4b3b4ca85a86c47an,0x098a224000000000n,0x0000000000000001n],[-77n,0xdd15fe86affad912n,0x49ef0eb713f39eben,0xaa987b6e6fd2a002n],[-154n,0xbeeefb584aff8603n,0xaafb550ffacfd8fan,0x5ca47e4f88d45371n],[-308n,0x8e679c2f5e44ff8fn,0x570f09eaa7ea7648n,0x5961db50c6d2b888n],[-616n,0x4f371b3399fc2ab0n,0x8170041c9feb05aan,0xc7c343447c75bcf6n],[-1233n,0xf51e928179013fd3n,0xde4bd12cde4d985cn,0x4a573ca6f94bff14n],[-2466n,0xeab388127bccaff7n,0x1667639142b9fbaen,0x775ec9995e1039fbn],[-4932n,0xd72cb2a95c7ef6ccn,0xe81bf1e825ba7515n,0xc2feb521d6cb5dcdn],[-9864n,0xb4dc1be6604502dcn,0xd491079b8eef6535n,0x578d3965d24de84dn],[-19728n,0x7fc6447bee60ea43n,0x2548da5c8b125b27n,0x5f42d1142f41d349n],[-39456n,0x3fc65180f88af8fbn,0x6a6915f383349413n,0x063c3708b6ceb291n],[-78913n,0x9ee0197c8dcd55bfn,0x2b2b9b942c38f4a2n,0x0f8ba634e9c706aen],[-157826n,0x629963a25b8b2d79n,0xd00b9d2286f70876n,0xe97004700c3644fcn],[-315652n,0x25f9cc308ceef4f3n,0x40f19543911a4546n,0xa2cd389452cfc366n],[-631305n,0x385597b0d47e76b8n,0x1b9f67e103bf2329n,0xc3119848595985f7n],[-1262611n,0x7bf795d276c12f66n,0x66a61d62a446659an,0xa1a4d73bebf093d5n],[-2525222n,0x3c07d96ab1ed7799n,0xcb7355c22cc05ac0n,0x4ffc0ab73b1f6a49n],[-5050445n,0x8cc4cd8c3edefb9an,0x6c8ff86a90a97e0cn,0x166cfddbf98b71bfn],[-10100890n,0x4d67d81cc88e1228n,0x1d7cfb06666b79b3n,0x7b916728aaa4e70dn],[-20201781n,0xea0c55494e7a552dn,0xb88cb9484bb86c61n,0x8d44893c610bb7dfn],[-40403562n,0xd5fa8c821ec0c24an,0xa80e46e764e0f8b0n,0xa7276bfa432fac7en],[-80807124n,0xb2dae307426f6791n,0xc970b82f58b12918n,0x0472592f7f39190en],[-161614248n,0x7cf51edd8a15f1c9n,0x656dab3498f8e697n,0x12daa2a80e53c807n],[-323228496n,0x3cfe609ab5883c50n,0xbec8b5d22b198871n,0xe18477703b4622b4n],[-646456993n,0x9152447b9d7cda9an,0x3b4d3f6110d77aadn,0xfa81bad1c394adb4n]];class Z{constructor(e,t,n,s){this.negative=e,this._e=t,this.i=n,this.o=s}exponent(){return this._e-te.k}oe(){return this._e===0&&this.i===0n&&this.o===0n}ae(){return this._e===Xe(Z,ze,"f",zr)&&this.i===0n&&this.o===0n}isNaN(){return this._e===Xe(Z,ze,"f",zr)&&!(this.i===0n&&this.o===0n)}compareTo(e){if(this.isNaN())return e.isNaN()?0:1;if(e.isNaN())return-1;let t,n;if(this.negative){if(!e.negative)return-1;t=1,n=-1}else{if(e.negative)return 1;t=-1,n=1}return this._e<e._e?t:this._e>e._e?n:this.i<e.i?t:this.i>e.i?n:this.o<e.o?t:this.o>e.o?n:0}debug(){return(this.negative?"+":"-")+Xe(Z,ze,"m",KB).call(Z,this.i)+Xe(Z,ze,"m",KB).call(Z,this.o)+"*2^"+this.exponent()}static fromNumber(e){if(isNaN(e))return Z.NaN;if(!isFinite(e))return e<0?Z.ue:Z.ce;if(e===0)return Math.sign(1/e)>0?Z.le:Z.Ee;const t=new DataView(new ArrayBuffer(8));t.setFloat64(0,e);const n=t.getBigUint64(0);let s=BigInt.asUintN(64,n<<12n),i=2047&Number(n>>52n);if(i===0){const o=te.te(s);s=o<63?s<<BigInt(o+1):0n,i=-o}return new Z(e<0,Xe(Z,ze,"m",Ws).call(Z,i-1023),s,0n)}static fromString(e){if(e==="NaN")return Z.NaN;if(e==="-Infinity")return Z.ue;if(e==="Infinity"||e==="+Infinity")return Z.ce;const t=new Array(e.length).fill(0);let n=0,s=0,i=0,o=!1;for(e[n]==="-"?(o=!0,n++):e[n]==="+"&&n++;Xe(Z,ze,"m",ko).call(Z,e,n);)t[s++]=Xe(Z,ze,"m",xo).call(Z,e,n++);if(e[n]==="."){const c=++n;for(;Xe(Z,ze,"m",ko).call(Z,e,n);)t[s++]=Xe(Z,ze,"m",xo).call(Z,e,n++);i=c-n}if(e[n]==="e"||e[n]==="E"){let c=0;n++;let u=1;e[n]==="-"?(u=-1,n++):e[n]==="+"&&n++;const h=n;for(;Xe(Z,ze,"m",ko).call(Z,e,n);)if(c=10*c+Xe(Z,ze,"m",xo).call(Z,e,n++),n-h>9)throw new Error("Exponent too large "+e);if(n===h)throw new Error("Invalid number "+e);i+=c*u}if(s===0||n!==e.length)throw new Error("Invalid number "+e);const B=te.I(t.slice(0,s),i);return new Z(o,B.exponent,B.i,B.o)}}ze=Z,KB=function(e){return e.toString(16).padStart(16,"0")},ko=function(e,t){const n=e.codePointAt(t);return n!==void 0&&n>=48&&n<=57},xo=function(e,t){return e.codePointAt(t)-48},Ws=function(e){return e+te.k},zr={value:Number(te.m)},Z.le=new Z(!1,0,0n,0n),Z.Ee=new Z(!0,0,0n,0n),Z.NaN=new Z(!1,Xe(Z,ze,"f",zr),1n<<63n,0n),Z.ue=new Z(!0,Xe(Z,ze,"f",zr),0n,0n),Z.ce=new Z(!1,Xe(Z,ze,"f",zr),0n,0n),new Z(!0,Xe(Z,ze,"m",Ws).call(Z,63),0n,0n),new Z(!1,Xe(Z,ze,"m",Ws).call(Z,0),0n,0n),new Z(!0,Xe(Z,ze,"m",Ws).call(Z,0),0n,0n);/**
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
 */const kc=-1;function Ta(r){return r==null}function Ei(r){return r===0&&1/r==-1/0}function Vy(r){return typeof r=="number"&&Number.isInteger(r)&&!Ei(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}function My(r){return typeof r=="string"}/**
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
 */const xc="__type__",Vc="__vector__",_i="value",Gy="server_timestamp",IC="__min__",Mc="__max__",xn="__regex__",Yo="pattern",Xo="options",Di="__oid__",Pr="__int__",Qn="__decimal128__",Cr="__request_timestamp__",Zo="seconds",ea="increment",wa="__binary__",is={nullValue:"NULL_VALUE"},wo={mapValue:{}};var _e,Pt;(Pt=_e||(_e={})).he="regexValue",Pt.Te="bsonObjectIdValue",Pt.Pe="int32Value",Pt.Ie="decimal128Value",Pt.Re="bsonTimestampValue",Pt.Ae="bsonBinaryValue",Pt.Ve="minKeyValue",Pt.fe="maxKeyValue",Pt.de="maxValue",Pt.me="vectorValue",Pt.pe="serverTimestampValue",Pt.ge="regularMapValue";const Jh={[Vc]:_e.me,[Mc]:_e.de,[Gy]:_e.pe},yC={[xn]:_e.he,[Di]:_e.Te,[Pr]:_e.Pe,[Qn]:_e.Ie,[Cr]:_e.Re,[wa]:_e.Ae,[IC]:_e.Ve,[Mc]:_e.fe},Uy=new Set(Object.values(yC)),Et={booleanValue:!0},Qe={booleanValue:!1};function Je(r){if("nullValue"in r)return 0;if("booleanValue"in r)return 2;if("integerValue"in r||"doubleValue"in r)return 3;if("timestampValue"in r)return 4;if("stringValue"in r)return 7;if("bytesValue"in r)return 8;if("referenceValue"in r)return 9;if("geoPointValue"in r)return 11;if("arrayValue"in r)return 13;if(!("mapValue"in r))return ee(28295,{value:r});switch(PC(r)){case _e.pe:return 6;case _e.de:return 9007199254740991;case _e.me:return 14;case _e.he:return 12;case _e.Te:return 10;case _e.Pe:case _e.Ie:return 3;case _e.Re:return 5;case _e.Ae:return 8;case _e.Ve:return 1;case _e.fe:return 16;default:return 15}}function Ot(r,e,t){if(r===e)return!0;const n=Je(r);if(n!==Je(e))return!1;switch(n){case 0:case 9007199254740991:case 16:case 1:return!0;case 2:return r.booleanValue===e.booleanValue;case 6:return ss(r).isEqual(ss(e));case 4:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const B=Wn(i.timestampValue),c=Wn(o.timestampValue);return B.seconds===c.seconds&&B.nanos===c.nanos}(r,e);case 7:return r.stringValue===e.stringValue;case 8:return function(i,o){return vC(i,o)===0}(r,e);case 9:return r.referenceValue===e.referenceValue;case 11:return function(i,o){return Oe(i.geoPointValue.latitude)===Oe(o.geoPointValue.latitude)&&Oe(i.geoPointValue.longitude)===Oe(o.geoPointValue.longitude)}(r,e);case 3:return function(i,o,B){if(Lt(i)&&Lt(o))return wC(i,o)===0;if("integerValue"in i&&"integerValue"in o||$n(i)&&$n(o))return yi(i)===yi(o);let c,u;if("doubleValue"in i&&"doubleValue"in o)c=Oe(i.doubleValue),u=Oe(o.doubleValue);else{if(!B?.ye)return!1;c=Oe(i.integerValue??i.doubleValue),u=Oe(o.integerValue??o.doubleValue)}return c===u?!!B?.we||Ei(c)===Ei(u):!!(B===void 0||B.be)&&isNaN(c)&&isNaN(u)}(r,e,t);case 13:return ns(r.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>Ot(s,i,t));case 14:case 15:return function(i,o,B){const c=i.mapValue.fields||{},u=o.mapValue.fields||{};if(wr(c)!==wr(u))return!1;for(const h in c)if(c.hasOwnProperty(h)&&(u[h]===void 0||!Ot(c[h],u[h],B)))return!1;return!0}(r,e,t);case 5:return AC(r,e)===0;case 12:return RC(r,e)===0;case 10:return bC(r,e)===0;default:return ee(52216,{left:r})}}function Ii(r,e){return(r.values||[]).find(t=>Ot(t,e))!==void 0}function _t(r,e){if(r===e)return 0;const t=Je(r),n=Je(e);if(t!==n)return ae(t,n);switch(t){case 0:case 1:case 16:case 9007199254740991:return 0;case 2:return ae(r.booleanValue,e.booleanValue);case 3:return Ti(r,e);case 4:return jh(r.timestampValue,e.timestampValue);case 6:return jh(ss(r),ss(e));case 7:return gi(r.stringValue,e.stringValue);case 8:return vC(r,e);case 9:return function(i,o){const B=i.split("/"),c=o.split("/");for(let u=0;u<B.length&&u<c.length;u++){const h=ae(B[u],c[u]);if(h!==0)return h}return ae(B.length,c.length)}(r.referenceValue,e.referenceValue);case 11:return function(i,o){const B=ae(Oe(i.latitude),Oe(o.latitude));return B!==0?B:ae(Oe(i.longitude),Oe(o.longitude))}(r.geoPointValue,e.geoPointValue);case 13:return Kh(r.arrayValue,e.arrayValue);case 14:return function(i,o){const B=i.fields||{},c=o.fields||{},u=B[_i]?.arrayValue,h=c[_i]?.arrayValue,d=ae(u?.values?.length||0,h?.values?.length||0);return d!==0?d:Kh(u,h)}(r.mapValue,e.mapValue);case 15:return function(i,o){if(i===wo.mapValue&&o===wo.mapValue)return 0;if(i===wo.mapValue)return 1;if(o===wo.mapValue)return-1;const B=i.fields||{},c=Object.keys(B),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const E=gi(c[d],h[d]);if(E!==0)return E;const v=_t(B[c[d]],u[h[d]]);if(v!==0)return v}return ae(c.length,h.length)}(r.mapValue,e.mapValue);case 5:return AC(r,e);case 12:return RC(r,e);case 10:return bC(r,e);default:throw ee(23264,{Se:t})}}function yi(r){let e;return e=$n(r)?r.mapValue.fields[Pr].integerValue:r.integerValue||r.doubleValue,Oe(e)}function TC(r){return r.mapValue.fields[Qn].stringValue}function Ti(r,e){if(Lt(r)||Lt(e))return wC(r,e);const t=yi(r),n=yi(e);return isNaN(t)?isNaN(n)?0:-1:isNaN(n)?1:ae(t,n)}function wC(r,e){const t=qh(r),n=qh(e);return t.oe()&&n.oe()?0:t.isNaN()?n.isNaN()?0:-1:n.isNaN()?1:t.compareTo(n)}function qh(r){return Lt(r)?Z.fromString(TC(r)):Z.fromNumber(yi(r))}function jh(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return ae(r,e);const t=Wn(r),n=Wn(e),s=ae(t.seconds,n.seconds);return s!==0?s:ae(t.nanos,n.nanos)}function Kh(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=_t(t[s],n[s]);if(i!==void 0&&i!==0)return i}return ae(t.length,n.length)}function AC(r,e){const t=r.mapValue.fields?.[Cr].mapValue?.fields?.[Zo],n=e.mapValue.fields?.[Cr].mapValue?.fields?.[Zo],s=r.mapValue.fields?.[Cr].mapValue?.fields?.[ea],i=e.mapValue.fields?.[Cr].mapValue?.fields?.[ea],o=Ti(t,n);return o!==0?o:Ti(s,i)}function zh(r){if("bytesValue"in r)return{subtype:0,bytes:Ar(r.bytesValue)};const e=r.mapValue?.fields,t=e?.[wa],n=t?.bytesValue;if(!n)throw new Error("Received incorrect value for BsonBinaryData");const s=Ar(n).toUint8Array();if(s.length===0)throw new Error("Received empty bytesValue for BsonBinaryData");const i=s[0],o=s.slice(1);return{subtype:i,bytes:Se.fromUint8Array(o)}}function vC(r,e){const t=zh(r),n=zh(e);return t.subtype!==n.subtype?t.subtype<n.subtype?-1:1:t.bytes.compareTo(n.bytes)}function RC(r,e){const t=r.mapValue.fields,n=t?.[xn]?.mapValue?.fields?.[Yo]?.stringValue??"",s=t?.[xn]?.mapValue?.fields?.[Xo]?.stringValue??"",i=e.mapValue.fields,o=i?.[xn]?.mapValue?.fields?.[Yo]?.stringValue??"",B=i?.[xn]?.mapValue?.fields?.[Xo]?.stringValue??"",c=gi(n,o);return c!==0?c:ae(s,B)}function bC(r,e){return gi(r.mapValue.fields?.[Di]?.stringValue??"",e.mapValue.fields?.[Di]?.stringValue??"")}function os(r){return zB(r)}function zB(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=Wn(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Ar(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return Y.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=zB(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${zB(t.fields[o])}`;return s+"}"}(r.mapValue):ee(61005,{value:r})}function ta(r){switch(Je(r)){case 0:case 2:return 4;case 3:return Lt(r)?16:8;case 4:case 11:return 16;case 6:const e=Ki(r);return e?16+ta(e):16;case 7:return 2*r.stringValue.length;case 8:return"bytesValue"in r?Ar(r.bytesValue).approximateByteSize():Wh(r.mapValue);case 9:return r.referenceValue.length;case 13:return function(n){return(n.values||[]).reduce((s,i)=>s+ta(i),0)}(r.arrayValue);case 14:case 15:case 12:case 10:case 5:case 1:case 16:return Wh(r.mapValue);default:throw ee(13486,{value:r})}}function Wh(r){let e=0;return br(r.fields,(t,n)=>{e+=t.length+ta(n)}),e}function Qh(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function qt(r){return!!r&&"integerValue"in r}function jt(r){return!!r&&"doubleValue"in r}function Lt(r){if(!r.mapValue?.fields)return!1;const e=r.mapValue.fields;return wr(e)===1&&e[Qn]&&!!e[Qn].stringValue}function $n(r){if(!r.mapValue?.fields)return!1;const e=r.mapValue.fields;return wr(e)===1&&e[Pr]?.integerValue!==void 0}function Dn(r){return qt(r)||jt(r)||!!r&&$n(r)||!!r&&Lt(r)}function as(r){return!!r&&"arrayValue"in r}function vt(r){return!!r&&"nullValue"in r}function $e(r){return!(!jt(r)||!isNaN(Number(r.doubleValue)))||!(!Lt(r)||TC(r)!=="NaN")}function Er(r){return!!r&&"mapValue"in r}function PC(r){if(!r.mapValue?.fields)return _e.ge;const e=r.mapValue.fields,t=e[xc]?.stringValue;if(t&&Jh[t])return Jh[t];if(wr(e)===1){const n=Object.keys(e);return yC[n[0]]??_e.ge}return _e.ge}function WB(r){return(r?.mapValue?.fields||{})[xc]?.stringValue===Vc}function QB(r){return(r?.mapValue?.fields||{})[_i]?.arrayValue}function ni(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return br(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=ni(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ni(r.arrayValue.values[t]);return e}return{...r}}/**
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
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Er(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ni(t)}setAll(e){let t=Rt.emptyPath(),n={},s=[];e.forEach((o,B)=>{if(!t.isImmediateParentOf(B)){const c=this.getFieldsMap(t);this.applyChanges(c,n,s),n={},s=[],t=B.popLast()}o?n[B.lastSegment()]=ni(o):s.push(B.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());Er(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Er(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){br(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new wt(ni(this.value))}}function SC(r){const e=[];return br(r.fields,(t,n)=>{const s=new Rt([t]);if(Er(n)&&!function(o){return Uy.has(PC(o))}(n)){const i=SC(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new kt(e)}/**
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
 */function Gc(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ei(e)?"-0":e}}function $r(r){return{integerValue:""+r}}function Uc(r,e,t){return Vy(e)?$r(e):Gc(r,e)}/**
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
 */class Aa{constructor(){this._=void 0}}function Hy(r,e,t){return r instanceof wi?function(s,i){const o={fields:{[EC]:{stringValue:mC},[DC]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Fc(i)&&(i=Ki(i)),i&&(o.fields[_C]=i),{mapValue:o}}(t,e):r instanceof Ai?OC(r,e):r instanceof vi?LC(r,e):r instanceof Ri?function(s,i){const o=NC(s,i),B=$h(o)+$h(s.xe);return Lt(o)||Lt(s.xe)?{mapValue:{fields:{[Qn]:{stringValue:B.toString()}}}}:$n(o)?jt(s.xe)?{doubleValue:B}:qt(s.xe)?{integerValue:B.toString()}:{mapValue:{fields:{[Pr]:$r(B)}}}:qt(o)&&(qt(s.xe)||$n(s.xe))?$r(B):Gc(s.serializer,B)}(r,e):r instanceof na?function(s,i){return!Dn(i)||$e(s.xe)?s.xe:$e(i)?i:Ti(s.xe,i)<0?s.xe:i}(r,e):r instanceof ra?function(s,i){return!Dn(i)||$e(s.xe)?s.xe:$e(i)?i:Ti(s.xe,i)>0?s.xe:i}(r,e):void 0}function Jy(r,e,t){return r instanceof Ai?OC(r,e):r instanceof vi?LC(r,e):t}function NC(r,e){return r instanceof Ri?Dn(e)?e:{integerValue:0}:null}class wi extends Aa{}class Ai extends Aa{constructor(e){super(),this.elements=e}}function OC(r,e){const t=FC(e);for(const n of r.elements)t.some(s=>Ot(s,n))||t.push(n);return{arrayValue:{values:t}}}class vi extends Aa{constructor(e){super(),this.elements=e}}function LC(r,e){let t=FC(e);for(const n of r.elements)t=t.filter(s=>!Ot(s,n));return{arrayValue:{values:t}}}class Hc extends Aa{constructor(e,t){super(),this.serializer=e,this.xe=t}}class Ri extends Hc{}class na extends Hc{}class ra extends Hc{}function $h(r){return qt(r)?Oe(r.integerValue):jt(r)?Oe(r.doubleValue):$n(r)?Oe(r.mapValue.fields[Pr].integerValue):Lt(r)?parseFloat(r.mapValue.fields[Qn].stringValue):0}function FC(r){return as(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class qy{constructor(e,t){this.field=e,this.transform=t}}function jy(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof Ai&&s instanceof Ai||n instanceof vi&&s instanceof vi?ns(n.elements,s.elements,Ot):n instanceof Ri&&s instanceof Ri||n instanceof na&&s instanceof na||n instanceof ra&&s instanceof ra?Ot(n.xe,s.xe):n instanceof wi&&s instanceof wi}(r.transform,e.transform)}class Ky{constructor(e,t){this.version=e,this.transformResults=t}}class zt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vo(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class va{}function kC(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Jc(r.key,zt.none()):new zi(r.key,r.data,zt.none());{const t=r.data,n=wt.empty();let s=new He(Rt.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new Sr(r.key,n,new kt(s.toArray()),zt.none())}}function zy(r,e,t){r instanceof zi?function(s,i,o){const B=s.value.clone(),c=Xh(s.fieldTransforms,i,o.transformResults);B.setAll(c),i.convertToFoundDocument(o.version,B).setHasCommittedMutations()}(r,e,t):r instanceof Sr?function(s,i,o){if(!Vo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const B=Xh(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(xC(s)),c.setAll(B),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ri(r,e,t,n){return r instanceof zi?function(i,o,B,c){if(!Vo(i.precondition,o))return B;const u=i.value.clone(),h=Zh(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(r,e,t,n):r instanceof Sr?function(i,o,B,c){if(!Vo(i.precondition,o))return B;const u=Zh(i.fieldTransforms,c,o),h=o.data;return h.setAll(xC(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),B===null?null:B.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(r,e,t,n):function(i,o,B){return Vo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):B}(r,e,t)}function Wy(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=NC(n.transform,s||null);i!=null&&(t===null&&(t=wt.empty()),t.set(n.field,i))}return t||null}function Yh(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ns(n,s,(i,o)=>jy(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class zi extends va{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sr extends va{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function xC(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Xh(r,e,t){const n=new Map;Q(r.length===t.length,32656,{ve:t.length,De:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,B=e.data.field(i.field);n.set(i.field,Jy(o,B,t[s]))}return n}function Zh(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,Hy(i,o,e))}return n}class Jc extends va{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qy extends va{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class sa{constructor(e,t){this.position=e,this.inclusive=t}}function ef(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=Y.comparator(Y.fromName(o.referenceValue),t.key):n=_t(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function tf(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Ot(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class VC{}class Ge extends VC{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Yy(e,t,n):t==="array-contains"?new eT(e,n):t==="in"?new tT(e,n):t==="not-in"?new nT(e,n):t==="array-contains-any"?new rT(e,n):new Ge(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Xy(e,n):new Zy(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(_t(t,this.value)):t!==null&&Je(this.value)===Je(t)&&this.matchesComparison(_t(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vt extends VC{constructor(e,t){super(),this.filters=e,this.op=t,this.Ce=null}static create(e,t){return new Vt(e,t)}matches(e){return MC(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Ce!==null||(this.Ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Ce}getFilters(){return Object.assign([],this.filters)}}function MC(r){return r.op==="and"}function GC(r){return $y(r)&&MC(r)}function $y(r){for(const e of r.filters)if(e instanceof Vt)return!1;return!0}function $B(r){if(r instanceof Ge)return r.field.canonicalString()+r.op.toString()+os(r.value);if(GC(r))return r.filters.map(e=>$B(e)).join(",");{const e=r.filters.map(t=>$B(t)).join(",");return`${r.op}(${e})`}}function UC(r,e){return r instanceof Ge?function(n,s){return s instanceof Ge&&n.op===s.op&&n.field.isEqual(s.field)&&Ot(n.value,s.value)}(r,e):r instanceof Vt?function(n,s){return s instanceof Vt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,B)=>i&&UC(o,s.filters[B]),!0):!1}(r,e):void ee(19439)}function HC(r){return r instanceof Ge?function(t){return`${t.field.canonicalString()} ${t.op} ${os(t.value)}`}(r):r instanceof Vt?function(t){return t.op.toString()+" {"+t.getFilters().map(HC).join(" ,")+"}"}(r):"Filter"}class Yy extends Ge{constructor(e,t,n){super(e,t,n),this.key=Y.fromName(n.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class Xy extends Ge{constructor(e,t){super(e,"in",t),this.keys=JC("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Zy extends Ge{constructor(e,t){super(e,"not-in",t),this.keys=JC("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function JC(r,e){return(e.arrayValue?.values||[]).map(t=>Y.fromName(t.referenceValue))}class eT extends Ge{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return as(t)&&Ii(t.arrayValue,this.value)}}class tT extends Ge{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ii(this.value.arrayValue,t)}}class nT extends Ge{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ii(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ii(this.value.arrayValue,t)}}class rT extends Ge{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!as(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Ii(this.value.arrayValue,n))}}/**
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
 */class bi{constructor(e,t="asc"){this.field=e,this.dir=t}}function sT(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new pe(0,0))}static max(){return new se(new pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class st{constructor(e,t,n,s,i,o,B){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=B}static newInvalidDocument(e){return new st(e,0,se.min(),se.min(),se.min(),wt.empty(),0)}static newFoundDocument(e,t,n,s){return new st(e,1,t,se.min(),n,s,0)}static newNoDocument(e,t){return new st(e,2,t,se.min(),se.min(),wt.empty(),0)}static newUnknownDocument(e,t){return new st(e,3,t,se.min(),se.min(),wt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */const Pi=-1;function iT(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=se.fromTimestamp(n===1e9?new pe(t+1,0):new pe(t,n));return new Yn(s,Y.empty(),e)}function oT(r){return new Yn(r.readTime,r.key,Pi)}class Yn{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Yn(se.min(),Y.empty(),Pi)}static max(){return new Yn(se.max(),Y.empty(),Pi)}}function aT(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(r.documentKey,e.documentKey),t!==0?t:ae(r.largestBatchId,e.largestBatchId))}/**
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
 */class BT{constructor(e,t=null,n=[],s=[],i=null,o=null,B=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=B,this.Fe=null}}function nf(r,e=null,t=[],n=[],s=null,i=null,o=null){return new BT(r,e,t,n,s,i,o)}function qC(r){const e=ie(r);if(e.Fe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>$B(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Ta(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>os(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>os(n)).join(",")),e.Fe=t}return e.Fe}function jC(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!sT(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!UC(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!tf(r.startAt,e.startAt)&&tf(r.endAt,e.endAt)}function hr(r){return!!r.isCorePipeline}function KC(r){return!!r.path&&Y.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class gs{constructor(e,t=null,n=[],s=[],i=null,o="F",B=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=B,this.endAt=c,this.Oe=null,this.Me=null,this.Ne=null,this.startAt,this.endAt}}function cT(r,e,t,n,s,i,o,B){return new gs(r,e,t,n,s,i,o,B)}function zC(r){return new gs(r)}function rf(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function uT(r){return Y.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function WC(r){return r.collectionGroup!==null}function si(r){const e=ie(r);if(e.Oe===null){e.Oe=[];const t=new Set;for(const i of e.explicitOrderBy)e.Oe.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let B=new He(Rt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(B=B.add(u.field))})}),B})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Oe.push(new bi(i,n))}),t.has(Rt.keyField().canonicalString())||e.Oe.push(new bi(Rt.keyField(),n))}return e.Oe}function Wt(r){const e=ie(r);return e.Me||(e.Me=lT(e,si(r))),e.Me}function lT(r,e){if(r.limitType==="F")return nf(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new bi(s.field,i)});const t=r.endAt?new sa(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new sa(r.startAt.position,r.startAt.inclusive):null;return nf(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function YB(r,e){const t=r.filters.concat([e]);return new gs(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function hT(r,e){const t=r.explicitOrderBy.concat([e]);return new gs(r.path,r.collectionGroup,t,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}function XB(r,e,t){return new gs(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function fT(r,e){return jC(Wt(r),Wt(e))&&r.limitType===e.limitType}function ii(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>HC(s)).join(", ")}]`),Ta(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>os(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>os(s)).join(",")),`Target(${n})`}(Wt(r))}; limitType=${r.limitType})`}function Ra(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):Y.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of si(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,B,c){const u=ef(o,B,c);return o.inclusive?u<=0:u<0}(n.startAt,si(n),s)||n.endAt&&!function(o,B,c){const u=ef(o,B,c);return o.inclusive?u>=0:u>0}(n.endAt,si(n),s))}(r,e)}function qc(r){return(e,t)=>{let n=!1;for(const s of si(r)){const i=dT(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function dT(r,e,t){const n=r.field.isKeyField()?Y.comparator(e.key,t.key):function(i,o,B){const c=o.data.field(i),u=B.data.field(i);return c!==null&&u!==null?_t(c,u):ee(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return ee(19790,{direction:r.dir})}}/**
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
 */class CT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var xe,he;function pT(r){switch(r){case F.OK:return ee(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return ee(15467,{code:r})}}function QC(r){if(r===void 0)return _n("GRPC error has no .code"),F.UNKNOWN;switch(r){case xe.OK:return F.OK;case xe.CANCELLED:return F.CANCELLED;case xe.UNKNOWN:return F.UNKNOWN;case xe.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case xe.INTERNAL:return F.INTERNAL;case xe.UNAVAILABLE:return F.UNAVAILABLE;case xe.UNAUTHENTICATED:return F.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case xe.NOT_FOUND:return F.NOT_FOUND;case xe.ALREADY_EXISTS:return F.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return F.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case xe.ABORTED:return F.ABORTED;case xe.OUT_OF_RANGE:return F.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return F.UNIMPLEMENTED;case xe.DATA_LOSS:return F.DATA_LOSS;default:return ee(39323,{code:r})}}(he=xe||(xe={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Nr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){br(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return CC(this.inner)}size(){return this.innerSize}}/**
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
 */const gT=new Re(Y.comparator);function pt(){return gT}const $C=new Re(Y.comparator);function qr(...r){let e=$C;for(const t of r)e=e.insert(t.key,t);return e}function YC(r){let e=$C;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function kn(){return oi()}function XC(){return oi()}function oi(){return new Nr(r=>r.toString(),(r,e)=>r.isEqual(e))}const mT=new Re(Y.comparator),ET=new He(Y.comparator);function ce(...r){let e=ET;for(const t of r)e=e.add(t);return e}const _T=new He(ae);function DT(){return _T}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(){return new TextEncoder}/**
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
 */const yT=new Jn([4294967295,4294967295],0);function sf(r){const e=IT().encode(r),t=new nC;return t.update(e),new Uint8Array(t.digest())}function of(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Jn([t,n],0),new Jn([s,i],0)]}class jc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Qs(`Invalid padding: ${t}`);if(n<0)throw new Qs(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Qs(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Qs(`Invalid padding when bitmap length is 0: ${t}`);this.Be=8*e.length-t,this.Le=Jn.fromNumber(this.Be)}Ue(e,t,n){let s=e.add(t.multiply(Jn.fromNumber(n)));return s.compare(yT)===1&&(s=new Jn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Le).toNumber()}ke(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Be===0)return!1;const t=sf(e),[n,s]=of(t);for(let i=0;i<this.hashCount;i++){const o=this.Ue(n,s,i);if(!this.ke(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new jc(i,s,t);return n.forEach(B=>o.insert(B)),o}insert(e){if(this.Be===0)return;const t=sf(e),[n,s]=of(t);for(let i=0;i<this.hashCount;i++){const o=this.Ue(n,s,i);this.Qe(o)}}Qe(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Wi{constructor(e,t,n,s,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Qi.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Wi(se.min(),s,new Re(ae),pt(),pt(),ce())}}class Qi{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Qi(n,t,ce(),ce(),ce())}}/**
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
 */class Mo{constructor(e,t,n,s){this.qe=e,this.removedTargetIds=t,this.key=n,this.Ke=s}}class ZC{constructor(e,t){this.targetId=e,this.$e=t}}class ep{constructor(e,t,n=Se.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class af{constructor(e){this.targetId=e,this.We=0,this.Ge=Bf(),this.je=Se.EMPTY_BYTE_STRING,this.ze=!1,this.He=!0}get current(){return this.ze}get resumeToken(){return this.je}get Je(){return this.We!==0}get Ye(){return this.He}Ze(e){e.approximateByteSize()>0&&(this.He=!0,this.je=e)}Xe(){let e=ce(),t=ce(),n=ce();return this.Ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:ee(38017,{changeType:i})}}),new Qi(this.je,this.ze,e,t,n)}et(){this.He=!1,this.Ge=Bf()}tt(e,t){this.He=!0,this.Ge=this.Ge.insert(e,t)}nt(e){this.He=!0,this.Ge=this.Ge.remove(e)}rt(){this.We+=1}it(){this.We-=1,Q(this.We>=0,3241,{We:this.We,targetId:this.targetId})}st(){this.He=!0,this.ze=!0}}const Hs="WatchChangeAggregator";class TT{constructor(e){this._t=e,this.ot=new Map,this.ut=pt(),this.ct=Ao(),this.lt=pt(),this.Et=Ao(),this.ht=new Re(ae)}Tt(e){for(const t of e.qe)e.Ke&&e.Ke.isFoundDocument()?this.Pt(t,e.Ke):this.It(t,e.key,e.Ke);for(const t of e.removedTargetIds)this.It(t,e.key,e.Ke)}Rt(e){this.forEachTarget(e,t=>{const n=this.ot.get(t);if(n)switch(e.state){case 0:this.At(t)&&n.Ze(e.resumeToken);break;case 1:n.it(),n.Je||n.et(),n.Ze(e.resumeToken);break;case 2:n.it(),n.Je||this.removeTarget(t);break;case 3:this.At(t)&&(n.st(),n.Ze(e.resumeToken));break;case 4:this.At(t)&&(this.Vt(t),n.Ze(e.resumeToken));break;default:ee(56790,{state:e.state})}else K(Hs,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ot.forEach((n,s)=>{this.At(s)&&t(s)})}ft(e){return hr(e)?e.getPipelineSourceType()==="documents"&&e.getPipelineDocuments()?.length===1:KC(e)}dt(e){const t=e.targetId,n=e.$e.count,s=this.gt(t);if(s){const i=s.target;if(this.ft(i))if(n===0){const o=new Y(hr(i)?Ce.fromString(i.getPipelineDocuments()[0]):i.path);this.It(t,o,st.newNoDocument(o,se.min()))}else Q(n===1,20013,"Single document existence filter with count: "+n);else{const o=this.yt(t);if(o!==n){const B=this.wt(e),c=B?this.bt(B,e,o):1;if(c!==0){this.Vt(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.ht=this.ht.insert(t,u)}}}}}wt(e){const t=e.$e.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,B;try{o=Ar(n).toUint8Array()}catch(c){if(c instanceof gC)return xt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{B=new jc(o,s,i)}catch(c){return xt(c instanceof Qs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return B.Be===0?null:B}bt(e,t,n){return t.$e.count===n-this.vt(e,t.targetId)?0:2}vt(e,t){const n=this._t.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this._t.xt(),B=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(B)||(this.It(t,i,null),s++)}),s}Dt(e){const t=new Map;this.ot.forEach((i,o)=>{const B=this.gt(o);if(B){if(i.current&&this.ft(B.target)){const c=hr(B.target)?Ce.fromString(B.target.getPipelineDocuments()[0]):B.target.path,u=new Y(c);this.Ct(u).has(o)||this.Ft(o,u)||this.It(o,u,st.newNoDocument(u,e))}i.Ye&&(t.set(o,i.Xe()),i.et())}});let n=ce();this.Et.forEach((i,o)=>{let B=!0;o.forEachWhile(c=>{const u=this.gt(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(B=!1,!1)}),B&&(n=n.add(i))}),this.ut.forEach((i,o)=>o.setReadTime(e)),this.lt.forEach((i,o)=>o.setReadTime(e));const s=new Wi(e,t,this.ht,this.ut,this.lt,n);return this.ut=pt(),this.ct=Ao(),this.lt=pt(),this.Et=Ao(),this.ht=new Re(ae),s}Pt(e,t){const n=this.ot.get(e);if(!n||!this.At(e))return void K(Hs,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.Ft(e,t.key)?2:0;n.tt(t.key,s),hr(this.gt(e).target)&&this.gt(e).target.getPipelineFlavor()!=="exact"?this.lt=this.lt.insert(t.key,t):this.ut=this.ut.insert(t.key,t),this.ct=this.ct.insert(t.key,this.Ct(t.key).add(e)),this.Et=this.Et.insert(t.key,this.Ot(t.key).add(e))}It(e,t,n){const s=this.ot.get(e);s&&this.At(e)?(this.Ft(e,t)?s.tt(t,1):s.nt(t),this.Et=this.Et.insert(t,this.Ot(t).delete(e)),this.Et=this.Et.insert(t,this.Ot(t).add(e)),n&&(hr(this.gt(e).target)&&this.gt(e).target.getPipelineFlavor()!=="exact"?this.lt=this.lt.insert(t,n):this.ut=this.ut.insert(t,n))):K(Hs,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ot.delete(e)}yt(e){const t=this.ot.get(e);if(!t)return 0;const n=t.Xe();return this._t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}rt(e){let t=this.ot.get(e);t||(K(Hs,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new af(e),this.ot.set(e,t)),t.rt()}Ot(e){let t=this.Et.get(e);return t||(t=new He(ae),this.Et=this.Et.insert(e,t)),t}Ct(e){let t=this.ct.get(e);return t||(t=new He(ae),this.ct=this.ct.insert(e,t)),t}At(e){const t=this.gt(e)!==null;return t||K(Hs,"Detected inactive target",e),t}gt(e){const t=this.ot.get(e);return t===void 0||t.Je?null:this._t.Mt(e)}Vt(e){this.ot.set(e,new af(e)),this._t.getRemoteKeysForTarget(e).forEach(t=>{this.It(e,t,null)})}Ft(e,t){return this._t.getRemoteKeysForTarget(e).has(t)}}function Ao(){return new Re(Y.comparator)}function Bf(){return new Re(Y.comparator)}const wT={asc:"ASCENDING",desc:"DESCENDING"},AT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vT={and:"AND",or:"OR"};class RT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ZB(r,e){return r.useProto3Json||Ta(e)?e:{value:e}}function ai(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Kc(r){const e=Wn(r);return new pe(e.seconds,e.nanos)}function ec(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Go(r,e){return ai(r,e.toTimestamp())}function Qt(r){return Q(!!r,49232),se.fromTimestamp(Kc(r))}function zc(r,e){return tc(r,e).canonicalString()}function tc(r,e){const t=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function tp(r){const e=Ce.fromString(r);return Q(op(e),10190,{key:e.toString()}),e}function ia(r,e){return zc(r.databaseId,e.path)}function RB(r,e){const t=tp(e);if(t.get(1)!==r.databaseId.projectId)throw new j(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new j(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new Y(rp(t))}function np(r,e){return zc(r.databaseId,e)}function bT(r){const e=tp(r);return e.length===4?Ce.emptyPath():rp(e)}function nc(r){return new Ce(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function rp(r){return Q(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function cf(r,e,t){return{name:ia(r,e),fields:t.value.mapValue.fields}}function PT(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ee(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Q(h===void 0||typeof h=="string",58123),Se.fromBase64String(h||"")):(Q(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Se.fromUint8Array(h||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,B=o&&function(u){const h=u.code===void 0?F.UNKNOWN:QC(u.code);return new j(h,u.message||"")}(o);t=new ep(n,s,i,B||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=RB(r,n.document.name),i=Qt(n.document.updateTime),o=n.document.createTime?Qt(n.document.createTime):se.min(),B=new wt({mapValue:{fields:n.document.fields}}),c=st.newFoundDocument(s,i,o,B),u=n.targetIds||[],h=n.removedTargetIds||[];t=new Mo(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=RB(r,n.document),i=n.readTime?Qt(n.readTime):se.min(),o=st.newNoDocument(s,i),B=n.removedTargetIds||[];t=new Mo([],B,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=RB(r,n.document),i=n.removedTargetIds||[];t=new Mo([],i,s,null)}else{if(!("filter"in e))return ee(11601,{Nt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new CT(s,i),B=n.targetId;t=new ZC(B,o)}}return t}function ST(r,e){let t;if(e instanceof zi)t={update:cf(r,e.key,e.value)};else if(e instanceof Jc)t={delete:ia(r,e.key)};else if(e instanceof Sr)t={update:cf(r,e.key,e.data),updateMask:UT(e.fieldMask)};else{if(!(e instanceof Qy))return ee(16599,{Bt:e.type});t={verify:ia(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const B=o.transform;if(B instanceof wi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(B instanceof Ai)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:B.elements}};if(B instanceof vi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:B.elements}};if(B instanceof Ri)return{fieldPath:o.field.canonicalString(),increment:B.xe};if(B instanceof na)return{fieldPath:o.field.canonicalString(),minimum:B.xe};if(B instanceof ra)return{fieldPath:o.field.canonicalString(),maximum:B.xe};throw ee(20930,{transform:o.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Go(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)}(r,e.precondition)),t}function NT(r,e){return r&&r.length>0?(Q(e!==void 0,14353),r.map(t=>function(s,i){let o=s.updateTime?Qt(s.updateTime):Qt(i);return o.isEqual(se.min())&&(o=Qt(i)),new Ky(o,s.transformResults||[])}(t,e))):[]}function OT(r,e){return{documents:[np(r,e.path)]}}function LT(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=np(r,s);const i=function(u){if(u.length!==0)return ip(Vt.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(E){return{field:jr(E.field),direction:VT(E.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const B=ZB(r,e.limit);return B!==null&&(t.structuredQuery.limit=B),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{Lt:t,parent:s}}function FT(r){let e=bT(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){Q(n===1,65062);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(d){const E=sp(d);return E instanceof Vt&&GC(E)?E.getFilters():[E]}(t.where));let o=[];t.orderBy&&(o=function(d){return d.map(E=>function(P){return new bi(Kr(P.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(E))}(t.orderBy));let B=null;t.limit&&(B=function(d){let E;return E=typeof d=="object"?d.value:d,Ta(E)?null:E}(t.limit));let c=null;t.startAt&&(c=function(d){const E=!!d.before,v=d.values||[];return new sa(v,E)}(t.startAt));let u=null;return t.endAt&&(u=function(d){const E=!d.before,v=d.values||[];return new sa(v,E)}(t.endAt)),cT(e,s,o,i,B,"F",c,u)}function kT(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function xT(r,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(r))}}}}function sp(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Kr(t.unaryFilter.field);return Ge.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Kr(t.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Kr(t.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Kr(t.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}}(r):r.fieldFilter!==void 0?function(t){return Ge.create(Kr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Vt.create(t.compositeFilter.filters.map(n=>sp(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}}(t.compositeFilter.op))}(r):ee(30097,{filter:r})}function VT(r){return wT[r]}function MT(r){return AT[r]}function GT(r){return vT[r]}function jr(r){return{fieldPath:r.canonicalString()}}function Kr(r){return Rt.fromServerFormat(r.fieldPath)}function ip(r){return r instanceof Ge?function(t){if(t.op==="=="){if($e(t.value))return{unaryFilter:{field:jr(t.field),op:"IS_NAN"}};if(vt(t.value))return{unaryFilter:{field:jr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if($e(t.value))return{unaryFilter:{field:jr(t.field),op:"IS_NOT_NAN"}};if(vt(t.value))return{unaryFilter:{field:jr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jr(t.field),op:MT(t.op),value:t.value}}}(r):r instanceof Vt?function(t){const n=t.getFilters().map(s=>ip(s));return n.length===1?n[0]:{compositeFilter:{op:GT(t.op),filters:n}}}(r):ee(54877,{filter:r})}function UT(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function op(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function ap(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}function Si(r,e){const t={fields:{}};return e.forEach((n,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=n._toProto(r)}),{mapValue:t}}function Bp(r){return{stringValue:r}}/**
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
 */function ba(r){return new RT(r,!0)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,t){if(this.seconds=e,this.increment=t,!Number.isInteger(e)||e<0||e>4294967295)throw new Error("BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).");if(!Number.isInteger(t)||t<0||t>4294967295)throw new Error("BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).")}isEqual(e){return this.seconds===e.seconds&&this.increment===e.increment}}/**
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
 */class At{constructor(e,t=0){if(this.subtype=t,!Number.isInteger(t)||t<0||t>255)throw new j(F.INVALID_ARGUMENT,"The subtype for Bytes must be a value in the inclusive [0, 255] range.");this._byteString=e}static fromBase64String(e,t=0){try{return new At(Se.fromBase64String(e),t)}catch(n){throw new j(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e,t=0){return new At(Se.fromUint8Array(e),t)}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}get data(){return this.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+", subtype: "+this.subtype+")"}isEqual(e){return this.subtype===e.subtype&&this._byteString.isEqual(e._byteString)}toJSON(){const e={type:At._jsonSchemaVersion,bytes:this.toBase64()};return this.subtype!==0&&(e.subtype=this.subtype),e}static fromJSON(e){if(ji(e,At._jsonSchema)){const t=e.subtype??0;return At.fromBase64String(e.bytes,t)}}}At._jsonSchemaVersion="firestore/bytes/1.0",At._jsonSchema={type:Fe("string",At._jsonSchemaVersion),bytes:Fe("string"),subtype:{...Fe("number"),optional:!0}};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e){this.stringValue=e,this.value=Z.fromString(e)}isEqual(e){return!(!this.value.oe()||!e.value.oe())||this.value.compareTo(e.value)===0}toJSON(){return{kt:{stringValue:this.stringValue}}}}/**
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
 */class Yc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function HT(){return new Yc(Jt)}/**
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
 */class Xc{constructor(e){this._methodName=e}}/**
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
 */class $t{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$t._jsonSchemaVersion}}static fromJSON(e){if(ji(e,$t._jsonSchema))return new $t(e.latitude,e.longitude)}}$t._jsonSchemaVersion="firestore/geoPoint/1.0",$t._jsonSchema={type:Fe("string",$t._jsonSchemaVersion),latitude:Fe("number"),longitude:Fe("number")};/**
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
 */class Zc{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){this.type="MaxKey"}static instance(){return ln.MAX_KEY_VALUE_INSTANCE||(ln.MAX_KEY_VALUE_INSTANCE=new ln),ln.MAX_KEY_VALUE_INSTANCE}}ln.MAX_KEY_VALUE_INSTANCE=null;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){this.type="MinKey"}static instance(){return hn.MIN_KEY_VALUE_INSTANCE||(hn.MIN_KEY_VALUE_INSTANCE=new hn),hn.MIN_KEY_VALUE_INSTANCE}}hn.MIN_KEY_VALUE_INSTANCE=null;/**
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
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
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
 */class qn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class cp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(rt.UNAUTHENTICATED))}shutdown(){}}class qT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class jT{constructor(e){this.Qt=e,this.currentUser=rt.UNAUTHENTICATED,this.qt=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.Kt===void 0,42304);let n=this.qt;const s=c=>this.qt!==n?(n=this.qt,t(c)):Promise.resolve();let i=new qn;this.Kt=()=>{this.qt++,this.currentUser=this.$t(),i.resolve(),i=new qn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},B=c=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.Kt&&(this.auth.addAuthTokenListener(this.Kt),o())};this.Qt.onInit(c=>B(c)),setTimeout(()=>{if(!this.auth){const c=this.Qt.getImmediate({optional:!0});c?B(c):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qn)}},0),o()}getToken(){const e=this.qt,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.qt!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Q(typeof n.accessToken=="string",31837,{Wt:n}),new cp(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.Kt&&this.auth.removeAuthTokenListener(this.Kt),this.Kt=void 0}$t(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string",2055,{Gt:e}),new rt(e)}}class KT{constructor(e,t,n){this.jt=e,this.zt=t,this.Ht=n,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.Jt=new Map}Yt(){return this.Ht?this.Ht():null}get headers(){this.Jt.set("X-Goog-AuthUser",this.jt);const e=this.Yt();return e&&this.Jt.set("Authorization",e),this.zt&&this.Jt.set("X-Goog-Iam-Authorization-Token",this.zt),this.Jt}}class zT{constructor(e,t,n){this.jt=e,this.zt=t,this.Ht=n}getToken(){return Promise.resolve(new KT(this.jt,this.zt,this.Ht))}start(e,t){e.enqueueRetryable(()=>t(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WT{constructor(e,t){this.Zt=t,this.forceRefresh=!1,this.appCheck=null,this.Xt=null,this.en=null,Pe(e)&&e.settings.appCheckToken&&(this.en=e.settings.appCheckToken)}start(e,t){Q(this.Kt===void 0,3512);const n=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.Xt;return this.Xt=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.Kt=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.Kt&&this.appCheck.addTokenListener(this.Kt)};this.Zt.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.Zt.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.en)return Promise.resolve(new uf(this.en));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Q(typeof t.token=="string",44558,{tokenResult:t}),this.Xt=t.token,new uf(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.Kt&&this.appCheck.removeTokenListener(this.Kt),this.Kt=void 0}}function up(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */class QT{tn(e){}shutdown(){}}/**
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
 */const lf="ConnectivityMonitor";class hf{constructor(){this.nn=()=>this.rn(),this.sn=()=>this._n(),this.an=[],this.un()}tn(e){this.an.push(e)}shutdown(){window.removeEventListener("online",this.nn),window.removeEventListener("offline",this.sn)}un(){window.addEventListener("online",this.nn),window.addEventListener("offline",this.sn)}rn(){K(lf,"Network connectivity changed: AVAILABLE");for(const e of this.an)e(0)}_n(){K(lf,"Network connectivity changed: UNAVAILABLE");for(const e of this.an)e(1)}static cn(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo=null;function rc(){return vo===null?vo=function(){return 268435456+Math.round(2147483648*Math.random())}():vo++,"0x"+vo.toString(16)}/**
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
 */const bB="RestConnection",$T={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class YT{get En(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.hn=t+"://"+e.host,this.Tn=`projects/${n}/databases/${s}`,this.Pn=this.databaseId.database===$o?`project_id=${n}`:`project_id=${n}&database_id=${s}`}In(e,t,n,s,i){const o=rc(),B=this.Rn(e,t.toUriEncodedString());K(bB,`Sending RPC '${e}' ${o}:`,B,n);const c={"google-cloud-resource-prefix":this.Tn,"x-goog-request-params":this.Pn};this.An(c,s,i);const{host:u}=new URL(B),h=Vi(u);return this.Vn(e,B,c,n,h).then(d=>(K(bB,`Received RPC '${e}' ${o}: `,d),d),d=>{throw xt(bB,`RPC '${e}' ${o} failed with error: `,d,"url: ",B,"request:",n),d})}fn(e,t,n,s,i,o){return this.In(e,t,n,s,i)}An(e,t,n){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ps}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),n&&n.headers.forEach((s,i)=>e[i]=s),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}Rn(e,t){const n=$T[e];let s=`${this.hn}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class XT{constructor(e){this.dn=e.dn,this.mn=e.mn}pn(e){this.gn=e}yn(e){this.wn=e}bn(e){this.Sn=e}onMessage(e){this.xn=e}close(){this.mn()}send(e){this.dn(e)}vn(){this.gn()}Dn(){this.wn()}Cn(e){this.Sn(e)}Fn(e){this.xn(e)}}/**
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
 */const nt="WebChannelConnection",Js=(r,e,t)=>{r.listen(e,n=>{try{t(n)}catch(s){setTimeout(()=>{throw s},0)}})};class Yr extends YT{constructor(e){super(e),this.On=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static Mn(){if(!Yr.Nn){const e=oC();Js(e,iC.STAT_EVENT,t=>{t.stat===HB.PROXY?K(nt,"STAT_EVENT: detected buffering proxy"):t.stat===HB.NOPROXY&&K(nt,"STAT_EVENT: detected no buffering proxy")}),Yr.Nn=!0}}Vn(e,t,n,s,i){const o=rc();return new Promise((B,c)=>{const u=new rC;u.setWithCredentials(!0),u.listenOnce(sC.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Fo.NO_ERROR:const d=u.getResponseJson();K(nt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),B(d);break;case Fo.TIMEOUT:K(nt,`RPC '${e}' ${o} timed out`),c(new j(F.DEADLINE_EXCEEDED,"Request time out"));break;case Fo.HTTP_ERROR:const E=u.getStatus();if(K(nt,`RPC '${e}' ${o} failed with status:`,E,"response text:",u.getResponseText()),E>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const P=v?.error;if(P&&P.status&&P.message){const V=function(W){const Be=W.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(Be)>=0?Be:F.UNKNOWN}(P.status);c(new j(V,P.message))}else c(new j(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new j(F.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{Bn:e,streamId:o,Ln:u.getLastErrorCode(),Un:u.getLastError()})}}finally{K(nt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);K(nt,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",h,n,15)})}kn(e,t,n){const s=rc(),i=[this.hn,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),B={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(B.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(B.useFetchStreams=!0),this.An(B.initMessageHeaders,t,n),B.encodeInitMessageHeaders=!0;const u=i.join("");K(nt,`Creating RPC '${e}' stream ${s}: ${u}`,B);const h=o.createWebChannel(u,B);this.Qn(h);let d=!1,E=!1;const v=new XT({dn:P=>{E?K(nt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(d||(K(nt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),K(nt,`RPC '${e}' stream ${s} sending:`,P),h.send(P))},mn:()=>h.close()});return Js(h,zs.EventType.OPEN,()=>{E||(K(nt,`RPC '${e}' stream ${s} transport opened.`),v.vn())}),Js(h,zs.EventType.CLOSE,()=>{E||(E=!0,K(nt,`RPC '${e}' stream ${s} transport closed`),v.Cn(),this.qn(h))}),Js(h,zs.EventType.ERROR,P=>{E||(E=!0,xt(nt,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),v.Cn(new j(F.UNAVAILABLE,"The operation could not be completed")))}),Js(h,zs.EventType.MESSAGE,P=>{if(!E){const V=P.data[0];Q(!!V,16349);const M=V,W=M?.error||M[0]?.error;if(W){K(nt,`RPC '${e}' stream ${s} received error:`,W);const Be=W.status;let ve=function(be){const w=xe[be];if(w!==void 0)return QC(w)}(Be),ke=W.message;Be==="NOT_FOUND"&&ke.includes("database")&&ke.includes("does not exist")&&ke.includes(this.databaseId.database)&&xt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ve===void 0&&(ve=F.INTERNAL,ke="Unknown error status: "+Be+" with message "+W.message),E=!0,v.Cn(new j(ve,ke)),h.close()}else K(nt,`RPC '${e}' stream ${s} received:`,V),v.Fn(V)}}),Yr.Mn(),setTimeout(()=>{v.Dn()},0),v}terminate(){this.On.forEach(e=>e.close()),this.On=[]}Qn(e){this.On.push(e)}qn(e){this.On=this.On.filter(t=>t===e)}An(e,t,n){super.An(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return aC()}}/**
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
 */function ZT(r){return new Yr(r)}Yr.Nn=!1;class lp{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Kn=e,this.timerId=t,this.$n=n,this.Wn=s,this.Gn=i,this.jn=0,this.zn=null,this.Hn=Date.now(),this.reset()}reset(){this.jn=0}Jn(){this.jn=this.Gn}Yn(e){this.cancel();const t=Math.floor(this.jn+this.Zn()),n=Math.max(0,Date.now()-this.Hn),s=Math.max(0,t-n);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.jn} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.zn=this.Kn.enqueueAfterDelay(this.timerId,s,()=>(this.Hn=Date.now(),e())),this.jn*=this.Wn,this.jn<this.$n&&(this.jn=this.$n),this.jn>this.Gn&&(this.jn=this.Gn)}Xn(){this.zn!==null&&(this.zn.skipDelay(),this.zn=null)}cancel(){this.zn!==null&&(this.zn.cancel(),this.zn=null)}Zn(){return(Math.random()-.5)*this.jn}}/**
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
 */const ff="PersistentStream";class hp{constructor(e,t,n,s,i,o,B,c){this.Kn=e,this.er=n,this.tr=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=B,this.listener=c,this.state=0,this.nr=0,this.rr=null,this.ir=null,this.stream=null,this.sr=0,this._r=new lp(e,t)}ar(){return this.state===1||this.state===5||this.ur()}ur(){return this.state===2||this.state===3}start(){this.sr=0,this.state!==4?this.auth():this.cr()}async stop(){this.ar()&&await this.close(0)}lr(){this.state=0,this._r.reset()}Er(){this.ur()&&this.rr===null&&(this.rr=this.Kn.enqueueAfterDelay(this.er,6e4,()=>this.hr()))}Tr(e){this.Pr(),this.stream.send(e)}async hr(){if(this.ur())return this.close(0)}Pr(){this.rr&&(this.rr.cancel(),this.rr=null)}Ir(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,t){this.Pr(),this.Ir(),this._r.cancel(),this.nr++,e!==4?this._r.reset():t&&t.code===F.RESOURCE_EXHAUSTED?(_n(t.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this._r.Jn()):t&&t.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Rr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.bn(t)}Rr(){}auth(){this.state=1;const e=this.Ar(this.nr),t=this.nr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.nr===t&&this.Vr(n,s)},n=>{e(()=>{const s=new j(F.UNKNOWN,"Fetching auth token failed: "+n.message);return this.dr(s)})})}Vr(e,t){const n=this.Ar(this.nr);this.stream=this.mr(e,t),this.stream.pn(()=>{n(()=>this.listener.pn())}),this.stream.yn(()=>{n(()=>(this.state=2,this.ir=this.Kn.enqueueAfterDelay(this.tr,1e4,()=>(this.ur()&&(this.state=3),Promise.resolve())),this.listener.yn()))}),this.stream.bn(s=>{n(()=>this.dr(s))}),this.stream.onMessage(s=>{n(()=>++this.sr==1?this.pr(s):this.onNext(s))})}cr(){this.state=5,this._r.Yn(async()=>{this.state=0,this.start()})}dr(e){return K(ff,`close with error: ${e}`),this.stream=null,this.close(4,e)}Ar(e){return t=>{this.Kn.enqueueAndForget(()=>this.nr===e?t():(K(ff,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ew extends hp{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}mr(e,t){return this.connection.kn("Listen",e,t)}pr(e){return this.onNext(e)}onNext(e){this._r.reset();const t=PT(this.serializer,e),n=function(i){if(!("targetChange"in i))return se.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?Qt(o.readTime):se.min()}(e);return this.listener.gr(t,n)}yr(e){const t={};t.database=nc(this.serializer),t.addTarget=function(i,o){let B;const c=o.target;if(B=hr(c)?{pipelineQuery:xT(i,c)}:KC(c)?{documents:OT(i,c)}:{query:LT(i,c).Lt},B.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){B.resumeToken=ec(i,o.resumeToken);const u=ZB(i,o.expectedCount);u!==null&&(B.expectedCount=u)}else if(o.snapshotVersion.compareTo(se.min())>0){B.readTime=ai(i,o.snapshotVersion.toTimestamp());const u=ZB(i,o.expectedCount);u!==null&&(B.expectedCount=u)}return B}(this.serializer,e);const n=kT(this.serializer,e);n&&(t.labels=n),this.Tr(t)}wr(e){const t={};t.database=nc(this.serializer),t.removeTarget=e,this.Tr(t)}}class tw extends hp{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get br(){return this.sr>0}start(){this.lastStreamToken=void 0,super.start()}Rr(){this.br&&this.Sr([])}mr(e,t){return this.connection.kn("Write",e,t)}pr(e){return Q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0,55816),this.listener.vr()}onNext(e){Q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this._r.reset();const t=NT(e.writeResults,e.commitTime),n=Qt(e.commitTime);return this.listener.Dr(n,t)}Cr(){const e={};e.database=nc(this.serializer),this.Tr(e)}Sr(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>ST(this.serializer,n))};this.Tr(t)}}/**
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
 */class nw{}class rw extends nw{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.Fr=!1}Or(){if(this.Fr)throw new j(F.FAILED_PRECONDITION,"The client has already been terminated.")}In(e,t,n,s){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.In(e,tc(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(F.UNKNOWN,i.toString())})}fn(e,t,n,s,i){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,B])=>this.connection.fn(e,tc(t,n),s,o,B,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(F.UNKNOWN,o.toString())})}terminate(){this.Fr=!0,this.connection.terminate()}}function sw(r,e,t,n){return new rw(r,e,t,n)}/**
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
 */const iw="ComponentProvider",df=new Map;function ow(r,e,t,n,s){return new ky(r,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,up(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n,s._customHeaders,s.grpcFlowControlWindow)}/**
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
 */const Cf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},fp=41943040;class Ct{static withCacheSize(e){return new Ct(e,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}Ct.DEFAULT_COLLECTION_PERCENTILE=10,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ct.DEFAULT=new Ct(fp,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ct.DISABLED=new Ct(-1,0,0);/**
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
 */class Pa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.Mr(n),this.Nr=n=>t.writeSequenceNumber(n))}Mr(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.Nr&&this.Nr(e),e}}Pa.Br=-1;/**
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
 */const aw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ms(r){if(r.code!==F.FAILED_PRECONDITION||r.message!==aw)throw r;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,n)=>{t(e)})}static reject(e){return new k((t,n)=>{n(e)})}static waitFor(e){return new k((t,n)=>{let s=0,i=0,o=!1;e.forEach(B=>{++s,B.next(()=>{++i,o&&i===s&&t()},c=>n(c))}),o=!0,i===s&&t()})}static or(e){let t=k.resolve(!1);for(const n of e)t=t.next(s=>s?k.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new k((n,s)=>{const i=e.length,o=new Array(i);let B=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(h=>{o[u]=h,++B,B===i&&n(o)},h=>s(h))}})}static doWhile(e,t){return new k((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}function cw(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Es(r){return r.name==="IndexedDbTransactionError"}/**
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
 */const pf="LruGarbageCollector",uw=1048576;function gf([r,e],[t,n]){const s=ae(r,t);return s===0?ae(e,n):s}class lw{constructor(e){this.ai=e,this.buffer=new He(gf),this.ui=0}ci(){return++this.ui}li(e){const t=[e,this.ci()];if(this.buffer.size<this.ai)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();gf(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class hw{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ei=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.hi(6e4)}stop(){this.Ei&&(this.Ei.cancel(),this.Ei=null)}get started(){return this.Ei!==null}hi(e){K(pf,`Garbage collection scheduled in ${e}ms`),this.Ei=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ei=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Es(t)?K(pf,"Ignoring IndexedDB error during garbage collection: ",t):await ms(t)}await this.hi(3e5)})}}class fw{constructor(e,t){this.Ti=e,this.params=t}calculateTargetCount(e,t){return this.Ti.Pi(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return k.resolve(Pa.Br);const n=new lw(t);return this.Ti.forEachTarget(e,s=>n.li(s.sequenceNumber)).next(()=>this.Ti.Ii(e,s=>n.li(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Ti.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Ti.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(Cf)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Cf):this.Ri(e,t))}getCacheSize(e){return this.Ti.getCacheSize(e)}Ri(e,t){let n,s,i,o,B,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(n=d,B=Date.now(),this.removeTargets(e,n,t))).next(d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(d=>(u=Date.now(),Hr()<=ue.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(B-o)+`ms
	Removed ${i} targets in `+(c-B)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function dw(r,e){return new fw(r,e)}/**
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
 */const dp="firestore.googleapis.com",mf=!0;class Ef{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new j(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dp,this.ssl=mf}else this.host=e.host,this.ssl=e.ssl??mf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=fp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<uw)throw new j(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(Ly("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=up(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new j(F.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new j(F.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new j(F.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new j(F.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(n,s){if(n===s)return!0;if(!n||!s)return!1;const i=Object.keys(n),o=Object.keys(s);if(i.length!==o.length)return!1;for(const B of i)if(n[B]!==s[B])return!1;return!0}(this._customHeaders,e._customHeaders)}}let Sa=class{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ef({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ef(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new JT;switch(n.type){case"firstParty":return new zT(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new j(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=df.get(t);n&&(K(iw,"Removing Datastore"),df.delete(t),n.terminate())}(this),Promise.resolve()}};function Cw(r,e,t,n={}){r=rs(r,Sa);const s=Vi(e),i=r._getSettings(),o={...i,emulatorOptions:r._getEmulatorOptions()},B=`${e}:${t}`;s&&jf(`https://${B}`),i.host!==dp&&i.host!==B&&xt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:B,ssl:s,emulatorOptions:n};if(!Dr(c,o)&&(r._setSettings(c),n.mockUserToken)){let u,h;if(typeof n.mockUserToken=="string")u=n.mockUserToken,h=rt.MOCK_USER;else{u=Xg(n.mockUserToken,r._app?.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new j(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new rt(d)}r._authCredentials=new qT(new cp(u,h))}}/**
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
 */class Or{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Or(this.firestore,e,this._query)}}class Ue{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}toJSON(){return{type:Ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(ji(t,Ue._jsonSchema))return new Ue(e,n||null,new Y(Ce.fromString(t.referencePath)))}}Ue._jsonSchemaVersion="firestore/documentReference/1.0",Ue._jsonSchema={type:Fe("string",Ue._jsonSchemaVersion),referencePath:Fe("string")};class jn extends Or{constructor(e,t,n){super(e,t,zC(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new Y(e))}withConverter(e){return new jn(this.firestore,e,this._path)}}function Lv(r,e,...t){if(r=re(r),pC("collection","path",e),r instanceof Sa){const n=Ce.fromString(e,...t);return Gh(n),new jn(r,null,n)}{if(!(r instanceof Ue||r instanceof jn))throw new j(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Ce.fromString(e,...t));return Gh(n),new jn(r.firestore,null,n)}}function Fv(r,e,...t){if(r=re(r),arguments.length===1&&(e=Lc.newId()),pC("doc","path",e),r instanceof Sa){const n=Ce.fromString(e,...t);return Mh(n),new Ue(r,null,new Y(n))}{if(!(r instanceof Ue||r instanceof jn))throw new j(F.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Ce.fromString(e,...t));return Mh(n),new Ue(r.firestore,r instanceof jn?r.converter:null,new Y(n))}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t){this.pattern=e,this.options=t}isEqual(e){return this.pattern===e.pattern&&this.options===e.options}}/**
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
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:gt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ji(e,gt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new gt(e.vectorValues);throw new j(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}gt._jsonSchemaVersion="firestore/vectorValue/1.0",gt._jsonSchema={type:Fe("string",gt._jsonSchemaVersion),vectorValues:Fe("object")};/**
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
 */const pw=/^__.*__$/;class gw{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,t,this.fieldTransforms):new zi(e,this.data,t,this.fieldTransforms)}}function Cp(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{dataSource:r})}}class tu{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new tu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePathSegment(e),n}childContextForFieldPath(e){const t=this.path?.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePath(),n}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return oa(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Cp(this.dataSource)&&pw.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class mw{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ba(e)}createContext(e,t,n,s=!1){return new tu({dataSource:e,methodName:t,targetDoc:n,path:Rt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pp(r){const e=r._freezeSettings(),t=ba(r._databaseId);return new mw(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Ew(r,e,t,n,s,i={}){const o=r.createContext(i.merge||i.mergeFields?2:0,e,t,s);_p("Data must be an object, but it was:",o,n);const B=gp(n,o);let c,u;if(i.merge)c=new kt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const E=$i(e,d,t);if(!o.contains(E))throw new j(F.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);yw(h,E)||h.push(E)}c=new kt(h),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new gw(new wt(B),c,u)}class nu extends Xc{_toFieldTransform(e){return new qy(e.path,new wi)}isEqual(e){return e instanceof nu}}function _w(r,e,t,n=!1){return Bs(t,r.createContext(n?4:3,e))}function Bs(r,e,t){if(Ep(r=re(r)))return _p("Unsupported field value:",e,r),gp(r,e);if(r instanceof Xc)return function(s,i){if(!Cp(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){const o=[];let B=0;for(const c of s){let u=Bs(c,i.childContextForArray(B));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),B++}return{arrayValue:{values:o}}}(r,e)}return function(s,i,o){if((s=re(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Uc(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const B=pe.fromDate(s);return{timestampValue:ai(i.serializer,B)}}if(s instanceof pe){const B=new pe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ai(i.serializer,B)}}if(mp(s)){const B=pe.fromInstant(s),c=new pe(B.seconds,1e3*Math.floor(B.nanoseconds/1e3));return{timestampValue:ai(i.serializer,c)}}if(s instanceof $t)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof At)return s.subtype===0?{bytesValue:ec(i.serializer,s._byteString)}:function(c,u){const h=u.toUint8Array(),d=new Uint8Array(h.length+1);return d[0]=u.subtype,d.set(h,1),{mapValue:{fields:{[wa]:{bytesValue:ec(c,Se.fromUint8Array(d))}}}}}(i.serializer,s);if(s instanceof Ue){const B=i.databaseId,c=s.firestore._databaseId;if(!c.isEqual(B))throw i.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${B.projectId}/${B.database}`);return{referenceValue:zc(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof gt)return function(c,u){const h=c instanceof gt?c.toArray():c;return{mapValue:{fields:{[xc]:{stringValue:Vc},[_i]:{arrayValue:{values:h.map(E=>{if(typeof E!="number")throw u.createError("VectorValues must only contain numeric values.");return Gc(u.serializer,E)})}}}}}}(s,i);if(s instanceof eu)return function(c){return{mapValue:{fields:{[xn]:{mapValue:{fields:{[Yo]:{stringValue:c.pattern},[Xo]:{stringValue:c.options}}}}}}}}(s);if(s instanceof Wc)return function(c){return{mapValue:{fields:{[Di]:{stringValue:c.value}}}}}(s);if(s instanceof Zc)return function(c){return{mapValue:{fields:{[Pr]:$r(c.value)}}}}(s);if(s instanceof $c)return function(c){return{mapValue:{fields:{[Qn]:{stringValue:c.stringValue}}}}}(s);if(s instanceof Qc)return function(c){return{mapValue:{fields:{[Cr]:{mapValue:{fields:{[Zo]:$r(c.seconds),[ea]:$r(c.increment)}}}}}}}(s);if(s instanceof hn)return function(){return{mapValue:{fields:{[IC]:{nullValue:"NULL_VALUE"}}}}}();if(s instanceof ln)return function(){return{mapValue:{fields:{[Mc]:{nullValue:"NULL_VALUE"}}}}}();if(ap(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${ya(s)}`)}(r,e)}function gp(r,e){const t={};return CC(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):br(r,(n,s)=>{const i=Bs(s,e.childContextForField(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function mp(r){if(typeof r!="object"||r===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&r instanceof Temporal.Instant)return!0;const e=r;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.t=="bigint"}function Ep(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof pe||r instanceof $t||r instanceof At||r instanceof Ue||r instanceof Xc||r instanceof gt||r instanceof hn||r instanceof ln||r instanceof Zc||r instanceof $c||r instanceof eu||r instanceof Wc||r instanceof Qc||mp(r)||ap(r))}function _p(r,e,t){if(!Ep(t)||!qi(t)){const n=ya(t);throw n==="an object"?e.createError(r+" a custom object"):e.createError(r+" "+n)}}function $i(r,e,t){if((e=re(e))instanceof Yc)return e._internalPath;if(typeof e=="string")return Iw(r,e);throw oa("Field path arguments must be of type string or ",r,!1,void 0,t)}const Dw=new RegExp("[~\\*/\\[\\]]");function Iw(r,e,t){if(e.search(Dw)>=0)throw oa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Yc(...e.split("."))._internalPath}catch{throw oa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function oa(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let B=`Function ${e}() called with invalid data`;t&&(B+=" (via `toFirestore()`)"),B+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${n}`),o&&(c+=` in document ${s}`),c+=")"),new j(F.INVALID_ARGUMENT,B+r+c)}function yw(r,e){return r.some(t=>t.isEqual(e))}function Dp(r){return typeof r._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const n=wt.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const o=e[s];let B;i.nestedOptions&&qi(o)?B={mapValue:{fields:new ot(i.nestedOptions).getOptionsProto(t,o)}}:o&&(B=Bs(o,t)??void 0),B&&n.set(Rt.fromServerFormat(i.serverName),B)}}return n}getOptionsProto(e,t,n){const s=this._getKnownOptions(t,e);if(n){const i=new Map(Oy(n,(o,B)=>[Rt.fromServerFormat(B),o!==void 0?Bs(o,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(r){return typeof r=="object"&&r!==null&&!!("nullValue"in r&&(r.nullValue===null||r.nullValue==="NULL_VALUE")||"booleanValue"in r&&(r.booleanValue===null||typeof r.booleanValue=="boolean")||"integerValue"in r&&(r.integerValue===null||typeof r.integerValue=="number"||typeof r.integerValue=="string")||"doubleValue"in r&&(r.doubleValue===null||typeof r.doubleValue=="number")||"timestampValue"in r&&(r.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(r.timestampValue))||"stringValue"in r&&(r.stringValue===null||typeof r.stringValue=="string")||"bytesValue"in r&&(r.bytesValue===null||r.bytesValue instanceof Uint8Array)||"referenceValue"in r&&(r.referenceValue===null||typeof r.referenceValue=="string")||"geoPointValue"in r&&(r.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(r.geoPointValue))||"arrayValue"in r&&(r.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(r.arrayValue))||"mapValue"in r&&(r.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!qi(t.fields))}(r.mapValue))||"fieldReferenceValue"in r&&(r.fieldReferenceValue===null||typeof r.fieldReferenceValue=="string")||"functionValue"in r&&(r.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(r.functionValue))||"pipelineValue"in r&&(r.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(r.pipelineValue)))}function kv(){return new nu("serverTimestamp")}function ww(r){return new gt(r)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(r){let e;return r instanceof Lr?r:(e=qi(r)?Pw(r):r instanceof Array?Sw(r):Ip(r,void 0),e)}function PB(r){if(r instanceof Lr)return r;if(r instanceof gt)return Ni(r);if(Array.isArray(r))return Ni(ww(r));throw new Error("Unsupported value: "+typeof r)}function ru(r){return My(r)?Uo(r):J(r)}class Lr{constructor(){this._protoValueType="ProtoValue"}add(e){return new L("add",[this,J(e)],"add")}asBoolean(){if(this instanceof Xn)return this;if(this instanceof Ds)return new Tp(this);if(this instanceof _s)return new bw(this);if(this instanceof L)return new yp(this);throw new j("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new L("subtract",[this,J(e)],"subtract")}multiply(e){return new L("multiply",[this,J(e)],"multiply")}divide(e){return new L("divide",[this,J(e)],"divide")}mod(e){return new L("mod",[this,J(e)],"mod")}equal(e){return new L("equal",[this,J(e)],"equal").asBoolean()}notEqual(e){return new L("not_equal",[this,J(e)],"notEqual").asBoolean()}lessThan(e){return new L("less_than",[this,J(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new L("less_than_or_equal",[this,J(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new L("greater_than",[this,J(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new L("greater_than_or_equal",[this,J(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const n=[e,...t].map(s=>J(s));return new L("array_concat",[this,...n],"arrayConcat")}arrayContains(e){return new L("array_contains",[this,J(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new $s(e.map(J),"arrayContainsAll"):e;return new L("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new $s(e.map(J),"arrayContainsAny"):e;return new L("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new L("array_reverse",[this])}arrayLength(){return new L("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new $s(e.map(J),"equalAny"):e;return new L("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new $s(e.map(J),"notEqualAny"):e;return new L("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new L("exists",[this],"exists").asBoolean()}charLength(){return new L("char_length",[this],"charLength")}like(e){return new L("like",[this,J(e)],"like").asBoolean()}regexContains(e){return new L("regex_contains",[this,J(e)],"regexContains").asBoolean()}regexFind(e){return new L("regex_find",[this,J(e)],"regexFind")}regexFindAll(e){return new L("regex_find_all",[this,J(e)],"regexFindAll")}regexMatch(e){return new L("regex_match",[this,J(e)],"regexMatch").asBoolean()}stringContains(e){return new L("string_contains",[this,J(e)],"stringContains").asBoolean()}startsWith(e){return new L("starts_with",[this,J(e)],"startsWith").asBoolean()}endsWith(e){return new L("ends_with",[this,J(e)],"endsWith").asBoolean()}toLower(){return new L("to_lower",[this],"toLower")}toUpper(){return new L("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(J(e)),new L("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(J(e)),new L("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(J(e)),new L("rtrim",t,"rtrim")}type(){return new L("type",[this])}isType(e){return new L("is_type",[this,Ni(e)],"isType").asBoolean()}stringConcat(e,...t){const n=[e,...t].map(J);return new L("string_concat",[this,...n],"stringConcat")}stringIndexOf(e){return new L("string_index_of",[this,J(e)],"stringIndexOf")}stringRepeat(e){return new L("string_repeat",[this,J(e)],"stringRepeat")}stringReplaceAll(e,t){return new L("string_replace_all",[this,J(e),J(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new L("string_replace_one",[this,J(e),J(t)],"stringReplaceOne")}concat(e,...t){const n=[e,...t].map(J);return new L("concat",[this,...n],"concat")}reverse(){return new L("reverse",[this],"reverse")}arrayFilter(e,t){return new L("array_filter",[this,J(e),t],"arrayFilter")}arrayTransform(e,t){return new L("array_transform",[this,J(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,n){return new L("array_transform",[this,J(e),J(t),n],"arrayTransformWithIndex")}arraySlice(e,t){const n=[this,J(e)];return t!==void 0&&n.push(J(t)),new L("array_slice",n,"arraySlice")}arrayFirst(){return new L("array_first",[this],"arrayFirst")}arrayFirstN(e){return new L("array_first_n",[this,J(e)],"arrayFirstN")}arrayLast(){return new L("array_last",[this],"arrayLast")}arrayLastN(e){return new L("array_last_n",[this,J(e)],"arrayLastN")}arrayMaximum(){return new L("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new L("maximum_n",[this,J(e)],"arrayMaximumN")}arrayMinimum(){return new L("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new L("minimum_n",[this,J(e)],"arrayMinimumN")}arrayIndexOf(e){return new L("array_index_of",[this,J(e),J("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new L("array_index_of",[this,J(e),J("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new L("array_index_of_all",[this,J(e)],"arrayIndexOfAll")}byteLength(){return new L("byte_length",[this],"byteLength")}ceil(){return new L("ceil",[this])}floor(){return new L("floor",[this])}abs(){return new L("abs",[this])}exp(){return new L("exp",[this])}mapGet(e){return new L("map_get",[this,Ni(e)],"mapGet")}mapSet(e,t,...n){const s=[this,J(e),J(t),...n.map(J)];return new L("map_set",s,"mapSet")}mapKeys(){return new L("map_keys",[this],"mapKeys")}mapValues(){return new L("map_values",[this],"mapValues")}mapEntries(){return new L("map_entries",[this],"mapEntries")}getField(e){return new L("get_field",[this,J(e)],"get_field")}count(){return Tt._create("count",[this],"count")}sum(){return Tt._create("sum",[this],"sum")}average(){return Tt._create("average",[this],"average")}minimum(){return Tt._create("minimum",[this],"minimum")}maximum(){return Tt._create("maximum",[this],"maximum")}first(){return Tt._create("first",[this],"first")}last(){return Tt._create("last",[this],"last")}arrayAgg(){return Tt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return Tt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return Tt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const n=[e,...t];return new L("maximum",[this,...n.map(J)],"logicalMaximum")}logicalMinimum(e,...t){const n=[e,...t];return new L("minimum",[this,...n.map(J)],"minimum")}vectorLength(){return new L("vector_length",[this],"vectorLength")}cosineDistance(e){return new L("cosine_distance",[this,PB(e)],"cosineDistance")}dotProduct(e){return new L("dot_product",[this,PB(e)],"dotProduct")}euclideanDistance(e){return new L("euclidean_distance",[this,PB(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new L("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new L("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new L("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new L("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new L("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new L("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new L("timestamp_add",[this,J(e),J(t)],"timestampAdd")}timestampSubtract(e,t){return new L("timestamp_subtract",[this,J(e),J(t)],"timestampSubtract")}timestampDiff(e,t){return new L("timestamp_diff",[this,ru(e),J(t)],"timestampDiff")}timestampExtract(e,t){const n=[this,J(e)];return t&&n.push(J(t)),new L("timestamp_extract",n,"timestampExtract")}documentId(){return new L("document_id",[this],"documentId")}parent(){return new L("parent",[this],"parent")}substring(e,t){const n=J(e);return new L("substring",t===void 0?[this,n]:[this,n,J(t)],"substring")}arrayGet(e){return new L("array_get",[this,J(e)],"arrayGet")}isError(){return new L("is_error",[this],"isError").asBoolean()}ifError(e){const t=new L("if_error",[this,J(e)],"ifError");return e instanceof Xn?t.asBoolean():t}isAbsent(){return new L("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new L("map_remove",[this,J(e)],"mapRemove")}mapMerge(e,...t){const n=J(e),s=t.map(J);return new L("map_merge",[this,n,...s],"mapMerge")}pow(e){return new L("pow",[this,J(e)])}trunc(e){return e===void 0?new L("trunc",[this]):new L("trunc",[this,J(e)],"trunc")}round(e){return e===void 0?new L("round",[this]):new L("round",[this,J(e)],"round")}collectionId(){return new L("collection_id",[this])}length(){return new L("length",[this])}ln(){return new L("ln",[this])}sqrt(){return new L("sqrt",[this])}stringReverse(){return new L("string_reverse",[this])}ifAbsent(e){return new L("if_absent",[this,J(e)],"ifAbsent")}ifNull(e){return new L("if_null",[this,J(e)],"ifNull")}coalesce(e,...t){return new L("coalesce",[this,J(e),...t.map(J)],"coalesce")}join(e){return new L("join",[this,J(e)],"join")}log10(){return new L("log10",[this])}arraySum(){return new L("sum",[this])}split(e){return new L("split",[this,J(e)])}timestampTruncate(e,t){const n=[this,J(e)];return t&&n.push(J(t)),new L("timestamp_trunc",n)}ascending(){return Nw(this)}descending(){return Ow(this)}as(e){return new vw(this,e,"as")}}class Tt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,n){const s=new Tt(e,t);return s._methodName=n,s}as(e){return new Aw(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class Aw{constructor(e,t,n){this.aggregate=e,this.alias=t,this._methodName=n}_readUserData(e){this.aggregate._readUserData(e)}}class vw{constructor(e,t,n){this.expr=e,this.alias=t,this._methodName=n,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class $s extends Lr{constructor(e,t){super(),this.fi=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.fi.map(t=>t._toProto(e))}}}_readUserData(e){this.fi.forEach(t=>t._readUserData(e))}}class _s extends Lr{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new L("geo_distance",[this,J(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Uo(r){return Rw(r,"field")}function Rw(r,e){return new _s(typeof r=="string"?Jt===r?HT()._internalPath:$i("field",r):r._internalPath,e)}class Ds extends Lr{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Ds(e,void 0);return t._protoValue=e,t}_toProto(e){return Q(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,Tw(this._protoValue)||(this._protoValue=Bs(this.value,e))}}function Ni(r,e){return Ip(r,"constant")}function Ip(r,e){const t=new Ds(r,e);return typeof r=="boolean"?new Tp(t):t}class L extends Lr{constructor(e,t,n,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,n!==void 0&&(this._methodName=n),s!==void 0&&(this._options=s)}get _optionsUtil(){return new ot({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(n=>n._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class Xn extends Lr{get _methodName(){return this._expr._methodName}countIf(){return Tt._create("count_if",[this],"countIf")}not(){return new L("not",[this],"not").asBoolean()}conditional(e,t){return new L("conditional",[this,e,t],"conditional")}ifError(e){const t=J(e),n=new L("if_error",[this,t],"ifError");return t instanceof Xn?n.asBoolean():n}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class yp extends Xn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class Tp extends Xn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class bw extends Xn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function Pw(r,e){const t=[];for(const n in r)if(Object.prototype.hasOwnProperty.call(r,n)){const s=r[n];t.push(Ni(n)),t.push(J(s))}return new L("map",t,"map")}function Sw(r){return function(t,n){return new L("array",t.map(s=>J(s)),n)}(r,"array")}function Nw(r){return new wp(ru(r),"ascending","ascending")}function Ow(r){return new wp(ru(r),"descending","descending")}class wp{constructor(e,t,n){this.expr=e,this.direction=t,this._methodName=n,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:Bp(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class Ap extends bt{get _name(){return"add_fields"}get _optionsUtil(){return new ot({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[Si(e,this.fields)]}}_readUserData(e){super._readUserData(e),Zn(this.fields,e)}}class vp extends bt{get _name(){return"aggregate"}get _optionsUtil(){return new ot({})}constructor(e,t,n){super(n),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[Si(e,this.accumulators),Si(e,this.groups)]}}_readUserData(e){super._readUserData(e),Zn(this.groups,e),Zn(this.accumulators,e)}}class Rp extends bt{get _name(){return"distinct"}get _optionsUtil(){return new ot({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[Si(e,this.groups)]}}_readUserData(e){super._readUserData(e),Zn(this.groups,e)}}class Na extends bt{get _name(){return"collection"}get _optionsUtil(){return new ot({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.pi=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.pi}]}}_readUserData(e){super._readUserData(e)}}class Oa extends bt{get _name(){return"collection_group"}get _optionsUtil(){return new ot({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class su extends bt{get _name(){return"database"}get _optionsUtil(){return new ot({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class iu extends bt{get _name(){return"documents"}get _optionsUtil(){return new ot({})}constructor(e,t){if(super(t),!e||e.length===0)throw new j(F.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const n=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(n);if(s.size!==n.length)throw new j(F.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.gi=n,this.yi=s}_toProto(e){return{...super._toProto(e),args:this.gi.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class La extends bt{get _name(){return"where"}get _optionsUtil(){return new ot({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),Zn(this.condition,e)}}class vr extends bt{get _name(){return"limit"}get _optionsUtil(){return new ot({})}constructor(e,t){Q(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[Uc(e,this.limit)]}}}class _f extends bt{get _name(){return"offset"}get _optionsUtil(){return new ot({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[Uc(e,this.offset)]}}}class Lw extends bt{get _name(){return"select"}get _optionsUtil(){return new ot({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[Si(e,this.selections)]}}_readUserData(e){super._readUserData(e),Zn(this.selections,e)}}class fn extends bt{get _name(){return"sort"}get _optionsUtil(){return new ot({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),Zn(this.orderings,e)}}class ou extends bt{get _name(){return"replace_with"}get _optionsUtil(){return new ot({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),Bp(ou.wi)]}}_readUserData(e){super._readUserData(e),Zn(this.map,e)}}ou.wi="full_replace";function Zn(r,e){return Dp(r)?r._readUserData(e):Array.isArray(r)?r.forEach(t=>t._readUserData(e)):r instanceof Map?r.forEach(t=>t._readUserData(e)):Object.values(r).forEach(t=>t._readUserData(e)),r}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,n,s){this._db=e,this.userDataReader=t,this._userDataWriter=n,this.stages=s}xi(e,t){const n=this.userDataReader.createContext(3,e);return Dp(t)?t._readUserData(n):Array.isArray(t)?t.forEach(s=>s._readUserData(n)):t.forEach(s=>s._readUserData(n)),t}where(e){const t=this.stages.map(n=>n);return this.xi("where",e),t.push(new La(e,{})),new Bi(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map(n=>n);return t.push(new vr(e,{})),new Bi(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const n=this.stages.map(s=>s);return"orderings"in e?n.push(new fn(this.xi("sort",e.orderings),{})):n.push(new fn(this.xi("sort",[e,...t]),{})),new Bi(this._db,this.userDataReader,this._userDataWriter,n)}Di(e){return{pipeline:{stages:this.stages.map(t=>t._toProto(e))}}}}// Copyright 2024 Google LLC* @license
class ct{constructor(e,t,n){this.serializer=e,this.stages=t,this.listenOptions=n,this.isCorePipeline=!0}getPipelineCollection(){return Fa(this)}getPipelineCollectionGroup(){return au(this)}getPipelineCollectionId(){return Fw(this)}getPipelineDocuments(){return sc(this)}getPipelineFlavor(){return function(t){let n="exact";return t.stages.forEach((s,i)=>{s._name!==Rp.name&&s._name!==vp.name||(n="keyless"),s._name===Lw.name&&n==="exact"&&(n="augmented"),s._name===Ap.name&&i<t.stages.length-1&&n==="exact"&&(n="augmented")}),n}(this)}getPipelineSourceType(){return Kn(this)}}function Kn(r){const e=r.stages[0];return e instanceof Na||e instanceof Oa||e instanceof su||e instanceof iu?e._name:"unknown"}function Fa(r){if(Kn(r)==="collection")return r.stages[0].pi}function au(r){if(Kn(r)==="collection_group")return r.stages[0].collectionId}function Fw(r){switch(Kn(r)){case"collection":return Ce.fromString(Fa(r)).lastSegment();case"collection_group":return au(r);default:return}}function sc(r){if(Kn(r)==="documents")return r.stages[0].gi}class I{constructor(e,t){this.type=e,this.value=t}static Ci(){return new I("ERROR",void 0)}static Fi(){return new I("UNSET",void 0)}static Oi(){return new I("NULL",is)}static newValue(e){return vt(e)?new I("NULL",is):function(n){return!!n&&"booleanValue"in n}(e)?new I("BOOLEAN",e):qt(e)?new I("INT",e):jt(e)?new I("DOUBLE",e):function(n){return!!n&&"timestampValue"in n&&!!n.timestampValue}(e)?new I("TIMESTAMP",e):function(n){return!!n&&"stringValue"in n}(e)?new I("STRING",e):function(n){return!!n&&"bytesValue"in n}(e)?new I("BYTES",e):e.referenceValue?new I("REFERENCE",e):e.geoPointValue?new I("GEO_POINT",e):as(e)?new I("ARRAY",e):WB(e)?new I("VECTOR",e):Er(e)?new I("MAP",e):new I("ERROR",void 0)}Mi(){return this.type==="ERROR"||this.type==="UNSET"}Ni(){return this.type==="NULL"}}function ci(r){if(!r.Mi())return r.value}function bp(r){return r instanceof Xn?r._expr:r}function ne(r){if((r=bp(r))instanceof _s)return new kw(r);if(r instanceof Ds)return new xw(r);if(r instanceof $s)return new Vw(r);if(r instanceof L){if(r.name==="add")return new Uw(r);if(r.name==="subtract")return new Hw(r);if(r.name==="multiply")return new Jw(r);if(r.name==="divide")return new qw(r);if(r.name==="mod")return new jw(r);if(r.name==="and")return new Kw(r);if(r.name==="equal")return new sA(r);if(r.name==="not_equal")return new iA(r);if(r.name==="less_than")return new oA(r);if(r.name==="less_than_or_equal")return new aA(r);if(r.name==="greater_than")return new BA(r);if(r.name==="greater_than_or_equal")return new cA(r);if(r.name==="array_concat")return new uA(r);if(r.name==="array_reverse")return new lA(r);if(r.name==="array_contains")return new hA(r);if(r.name==="array_contains_all")return new fA(r);if(r.name==="array_contains_any")return new dA(r);if(r.name==="array_length")return new CA(r);if(r.name==="array_element")return new pA(r);if(r.name==="equal_any")return new Pp(r);if(r.name==="not_equal_any")return new Ww(r);if(r.name==="is_nan")return new Qw(r);if(r.name==="is_not_nan")return new $w(r);if(r.name==="is_null")return new Yw(r);if(r.name==="is_not_null")return new Xw(r);if(r.name==="is_error")return new Zw(r);if(r.name==="exists")return new eA(r);if(r.name==="not")return new ka(r);if(r.name==="or")return new zw(r);if(r.name==="xor")return new Bu(r);if(r.name==="conditional")return new tA(r);if(r.name==="maximum")return new nA(r);if(r.name==="minimum")return new rA(r);if(r.name==="reverse")return new gA(r);if(r.name==="replace_first")return new mA(r);if(r.name==="replace_all")return new EA(r);if(r.name==="char_length")return new _A(r);if(r.name==="byte_length")return new DA(r);if(r.name==="like")return new IA(r);if(r.name==="regex_contains")return new yA(r);if(r.name==="regex_match")return new TA(r);if(r.name==="string_contains")return new wA(r);if(r.name==="starts_with")return new AA(r);if(r.name==="ends_with")return new vA(r);if(r.name==="to_lower")return new RA(r);if(r.name==="to_upper")return new bA(r);if(r.name==="trim")return new PA(r);if(r.name==="string_concat")return new SA(r);if(r.name==="map_get")return new NA(r);if(r.name==="cosine_distance")return new OA(r);if(r.name==="dot_product")return new LA(r);if(r.name==="euclidean_distance")return new FA(r);if(r.name==="vector_length")return new kA(r);if(r.name==="unix_micros_to_timestamp")return new UA(r);if(r.name==="timestamp_to_unix_micros")return new qA(r);if(r.name==="unix_millis_to_timestamp")return new HA(r);if(r.name==="timestamp_to_unix_millis")return new jA(r);if(r.name==="unix_seconds_to_timestamp")return new JA(r);if(r.name==="timestamp_to_unix_seconds")return new KA(r);if(r.name==="timestamp_add")return new zA(r);if(r.name==="timestamp_subtract")return new WA(r)}throw new Error(`Unknown Expr : ${r}`)}class kw{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Jt)return I.newValue({referenceValue:ia(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return I.newValue({timestampValue:Go(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return I.newValue({timestampValue:Go(e.serializer,t.createTime)});const n=t.data.field(this.expr._fieldPath);return n?Fc(n)?I.newValue(function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:Go(i.serializer,se.fromTimestamp(ss(o)))};if(i.serverTimestampBehavior==="previous"){const B=Ki(o);if(B)return B}return{nullValue:"NULL_VALUE"}}(e,n)):I.newValue(n):I.Fi()}}class xw{constructor(e){this.expr=e}evaluate(e,t){return I.newValue(this.expr._getValue())}}class Vw{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.fi.map(s=>ne(s).evaluate(e,t));return n.some(s=>s.Mi())?I.Ci():I.newValue({arrayValue:{values:n.map(s=>s.value)}})}}function et(r){return jt(r)?Number(r.doubleValue):Number(r.integerValue)}function Xt(r){return BigInt(r.integerValue)}const Mw=BigInt("0x7fffffffffffffff"),Gw=-BigInt("0x8000000000000000");class Yi{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length>=2,24778);const n=ne(this.expr.params[0]).evaluate(e,t),s=ne(this.expr.params[1]).evaluate(e,t);let i=this.Bi(n,s);for(const o of this.expr.params.slice(2)){const B=ne(o).evaluate(e,t);i=this.Bi(i,B)}return i}Bi(e,t){if(e.Mi()||t.Mi())return I.Ci();if(e.Ni()||t.Ni())return I.Oi();const n=e.value,s=t.value;if(!jt(n)&&!qt(n)||!jt(s)&&!qt(s))return I.Ci();if(jt(n)||jt(s)){const i=this.Li(n,s);return i?I.newValue(i):I.Ci()}if(qt(n)&&qt(s)){const i=this.Ui(n,s);return i===void 0?I.Ci():typeof i=="number"?I.newValue({doubleValue:i}):i<Gw||i>Mw?I.Ci():I.newValue({integerValue:`${i}`})}return I.Ci()}}function In(r,e){return Je(r)!==Je(e)?"TYPE_MISMATCH":$e(r)||$e(e)?"NOT_EQ":vt(r)&&vt(e)?"EQ":vt(r)||vt(e)?"NULL":as(r)&&as(e)?function(n,s){if(n.values?.length!==s.values?.length)return"NOT_EQ";let i=!1;for(let o=0;o<(n.values?.length??0);o++){const B=n.values[o],c=s.values[o];switch(In(B,c)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:ee(44609,{ki:B,Qi:c})}}return i?"NULL":"EQ"}(r.arrayValue,e.arrayValue):WB(r)&&WB(e)||Er(r)&&Er(e)?function(n,s){const i=n.fields||{},o=s.fields||{};if(wr(i)!==wr(o))return"NOT_EQ";let B=!1;for(const c in i)if(i.hasOwnProperty(c)){if(o[c]===void 0)return"NOT_EQ";switch(In(i[c],o[c])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":B=!0}}return B?"NULL":"EQ"}(r.mapValue,e.mapValue):function(n,s){return Ot(n,s,{be:!1,ye:!0,we:!0})}(r,e)?"EQ":"NOT_EQ"}class Uw extends Yi{Ui(e,t){return Xt(e)+Xt(t)}Li(e,t){return{doubleValue:et(e)+et(t)}}}class Hw extends Yi{constructor(e){super(e),this.expr=e}Ui(e,t){return Xt(e)-Xt(t)}Li(e,t){return{doubleValue:et(e)-et(t)}}}class Jw extends Yi{constructor(e){super(e),this.expr=e}Ui(e,t){return Xt(e)*Xt(t)}Li(e,t){return{doubleValue:et(e)*et(t)}}}class qw extends Yi{constructor(e){super(e),this.expr=e}Ui(e,t){const n=Xt(t);if(n!==BigInt(0))return Xt(e)/n}Li(e,t){const n=et(t);return n===0?{doubleValue:Ei(n)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:et(e)/n}}}class jw extends Yi{constructor(e){super(e),this.expr=e}Ui(e,t){const n=Xt(t);if(n!==BigInt(0))return Xt(e)%n}Li(e,t){const n=et(t);if(n!==0)return{doubleValue:et(e)%n}}}class Kw{constructor(e){this.expr=e}evaluate(e,t){let n=!1,s=!1;for(const i of this.expr.params){const o=ne(i).evaluate(e,t);switch(o.type){case"BOOLEAN":if(!o.value?.booleanValue)return I.newValue(Qe);break;case"NULL":s=!0;break;default:n=!0}}return n?I.Ci():s?I.Oi():I.newValue(Et)}}class ka{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,9634);const n=ne(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return I.newValue({booleanValue:!n.value?.booleanValue});case"NULL":return I.Oi();default:return I.Ci()}}}class zw{constructor(e){this.expr=e}evaluate(e,t){let n=!1,s=!1;for(const i of this.expr.params){const o=ne(i).evaluate(e,t);switch(o.type){case"BOOLEAN":if(o.value?.booleanValue)return I.newValue(Et);break;case"NULL":s=!0;break;default:n=!0}}return n?I.Ci():s?I.Oi():I.newValue(Qe)}}class Bu{constructor(e){this.expr=e}evaluate(e,t){let n=!1,s=!1;for(const i of this.expr.params){const o=ne(i).evaluate(e,t);switch(o.type){case"BOOLEAN":n=Bu.xor(n,!!o.value?.booleanValue);break;case"NULL":s=!0;break;default:return I.Ci()}}return s?I.Oi():I.newValue({booleanValue:n})}static xor(e,t){return(e||t)&&!(e&&t)}}class Pp{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===2,55094);let n=!1;const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":n=!0;break;case"ERROR":case"UNSET":return I.Ci()}const i=ne(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return I.Ci()}if(n)return I.Oi();for(const o of i.value?.arrayValue?.values??[])switch(vt(s.value)&&vt(o)?"EQ":In(s.value,o)){case"EQ":return I.newValue(Et);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:ee(44608,{value:s.value,candidate:o})}return n?I.Oi():I.newValue(Qe)}}class Ww{constructor(e){this.expr=e}evaluate(e,t){return new ka(new L("not",[new L("equal_any",this.expr.params)])).evaluate(e,t)}}class Qw{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,23322);const n=ne(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return I.newValue(Qe);case"DOUBLE":return I.newValue({booleanValue:isNaN(et(n.value))});case"NULL":return I.Oi();default:return I.Ci()}}}class $w{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===1,50406),new ka(new L("not",[new L("is_nan",this.expr.params)])).evaluate(e,t)}}class Yw{constructor(e){this.expr=e}evaluate(e,t){switch(Q(this.expr.params.length===1,23123),ne(this.expr.params[0]).evaluate(e,t).type){case"NULL":return I.newValue(Et);case"UNSET":case"ERROR":return I.Ci();default:return I.newValue(Qe)}}}class Xw{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===1,23167),new ka(new L("not",[new L("is_null",this.expr.params)])).evaluate(e,t)}}class Zw{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===1,5228),ne(this.expr.params[0]).evaluate(e,t).type==="ERROR"?I.newValue(Et):I.newValue(Qe)}}class eA{constructor(e){this.expr=e}evaluate(e,t){switch(Q(this.expr.params.length===1,6877),ne(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return I.Ci();case"UNSET":return I.newValue(Qe);default:return I.newValue(Et)}}}class tA{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===3,11706);const n=ne(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return n.value?.booleanValue?ne(this.expr.params[1]).evaluate(e,t):ne(this.expr.params[2]).evaluate(e,t);case"NULL":return ne(this.expr.params[2]).evaluate(e,t);default:return I.Ci()}}}class nA{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map(i=>ne(i).evaluate(e,t));let s;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||_t(i.value,s.value)>0?i:s}return s===void 0?I.Oi():s}}class rA{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map(i=>ne(i).evaluate(e,t));let s;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||_t(i.value,s.value)<0?i:s}return s===void 0?I.Oi():s}}class Is{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const n=ne(this.expr.params[0]).evaluate(e,t);switch(n.type){case"ERROR":case"UNSET":return I.Ci()}const s=ne(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return I.Ci()}return this.qi(n,s)}}class sA extends Is{constructor(e){super(e),this.expr=e}qi(e,t){if(e.Ni()&&t.Ni())return I.newValue(Et);if(e.Ni()||t.Ni()||$e(e.value)||$e(t.value)||Je(e.value)!==Je(t.value))return I.newValue(Qe);switch(In(e.value,t.value)){case"EQ":return I.newValue(Et);case"NOT_EQ":return I.newValue(Qe);case"NULL":return I.Oi();default:ee(44615,{left:e,right:t})}}}class iA extends Is{constructor(e){super(e),this.expr=e}qi(e,t){switch(In(e.value,t.value)){case"EQ":return I.newValue(Qe);case"NOT_EQ":case"TYPE_MISMATCH":return I.newValue(Et);case"NULL":return I.Oi();default:ee(44614,{left:e,right:t})}}}class oA extends Is{constructor(e){super(e),this.expr=e}qi(e,t){return Je(e.value)!==Je(t.value)||$e(e.value)||$e(t.value)?I.newValue(Qe):I.newValue({booleanValue:_t(e.value,t.value)<0})}}class aA extends Is{constructor(e){super(e),this.expr=e}qi(e,t){return Je(e.value)!==Je(t.value)||$e(e.value)||$e(t.value)?I.newValue(Qe):In(e.value,t.value)==="EQ"?I.newValue(Et):I.newValue({booleanValue:_t(e.value,t.value)<0})}}class BA extends Is{constructor(e){super(e),this.expr=e}qi(e,t){return Je(e.value)!==Je(t.value)||$e(e.value)||$e(t.value)?I.newValue(Qe):I.newValue({booleanValue:_t(e.value,t.value)>0})}}class cA extends Is{constructor(e){super(e),this.expr=e}qi(e,t){return Je(e.value)!==Je(t.value)||$e(e.value)||$e(t.value)?I.newValue(Qe):In(e.value,t.value)==="EQ"?I.newValue(Et):I.newValue({booleanValue:_t(e.value,t.value)>0})}}class uA{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class lA{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,216);const n=ne(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return I.Oi();case"ARRAY":{const s=n.value.arrayValue?.values??[];return I.newValue({arrayValue:{values:[...s].reverse()}})}default:return I.Ci()}}}class hA{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===2,52884),new Pp(new L("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class fA{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===2,1392);let n=!1;const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return I.Ci()}const i=ne(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return I.Ci()}if(n)return I.Oi();const o=i.value?.arrayValue?.values??[],B=s.value?.arrayValue?.values??[];for(const c of o){let u=!1;n=!1;for(const h of B){switch(vt(c)&&vt(h)?"EQ":In(c,h)){case"EQ":u=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:ee(44613,{value:h,search:c})}if(u)break}if(!u)return I.newValue(Qe)}return I.newValue(Et)}}class dA{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===2,2680);let n=!1;const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return I.Ci()}const i=ne(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return I.Ci()}if(n)return I.Oi();const o=i.value?.arrayValue?.values??[],B=s.value?.arrayValue?.values??[];for(const c of B)for(const u of o)switch(vt(c)&&vt(u)?"EQ":In(c,u)){case"EQ":return I.newValue(Et);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:ee(60403,{value:c,search:u})}return n?I.Oi():I.newValue(Qe)}}class CA{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,38605);const n=ne(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return I.Oi();case"ARRAY":return I.newValue({integerValue:`${n.value?.arrayValue?.values?.length??0}`});default:return I.Ci()}}}class pA{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class gA{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,1508);const n=ne(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return I.Oi();case"BYTES":{const s=n.value?.bytesValue;if(typeof s=="string"){const i=Se.fromBase64String(s).toUint8Array();return i.reverse(),I.newValue({bytesValue:Se.fromUint8Array(i).toBase64()})}return I.newValue({bytesValue:new Uint8Array(s).reverse()})}case"STRING":{const s=n.value?.stringValue,i=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(s),o=Array.from(i,B=>B.segment).reverse();return I.newValue({stringValue:o.join("")})}default:return I.Ci()}}}class mA{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class EA{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class _A{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,19400);const n=ne(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return I.Oi();case"STRING":{const s=function(o){let B=0;for(let c=0;c<o.length;c++){const u=o.codePointAt(c);if(u===void 0)return;if(u<=65535)if(u>=55296&&u<=57343)if(u<=56319){const h=o.codePointAt(c+1);h!==void 0&&h>=56320&&h<=57343?(B+=1,c++):B+=1}else B+=1;else B+=1;else{if(!(u<=1114111))return;B+=1,c++}}return B}(n.value.stringValue);return s===void 0?I.Ci():I.newValue({integerValue:s})}default:return I.Ci()}}}class DA{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,8486);const n=ne(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BYTES":{const s=n.value?.bytesValue;return typeof s=="string"?I.newValue({integerValue:Se.fromBase64String(s).toUint8Array().length}):I.newValue({integerValue:new Uint8Array(s).length})}case"STRING":{const s=function(o){let B=0;for(let c=0;c<o.length;c++){const u=o.codePointAt(c);if(u===void 0)return;if(u>=55296&&u<=57343){if(!(u<=56319))return;{const h=o.codePointAt(c+1);if(h===void 0||!(h>=56320&&h<=57343))return;B+=4,c++}}else if(u<=127)B+=1;else if(u<=2047)B+=2;else if(u<=65535)B+=3;else{if(!(u<=1114111))return;B+=4,c++}}return B}(n.value?.stringValue);return s===void 0?I.Ci():I.newValue({integerValue:s})}case"NULL":return I.Oi();default:return I.Ci()}}}class ys{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let n=!1;const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":n=!0;break;default:return I.Ci()}const i=ne(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":n=!0;break;default:return I.Ci()}return n?I.Oi():this.Ki(s.value?.stringValue,i.value?.stringValue)}}class IA extends ys{Ki(e,t){try{const n=function(o){let B="";for(let c=0;c<o.length;c++){const u=o.charAt(c);switch(u){case"_":B+=".";break;case"%":B+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":B+="\\"+u;break;default:B+=u}}return"^"+B+"$"}(t),s=Nc.compile(n);return I.newValue({booleanValue:s.matches(e)})}catch(n){return xt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${n}`),I.Ci()}}}class yA extends ys{Ki(e,t){try{const n=Nc.compile(t);return I.newValue({booleanValue:n.test(e)})}catch{return xt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),I.Ci()}}}class TA extends ys{Ki(e,t){try{return I.newValue({booleanValue:Nc.compile(t).matches(e)})}catch{return xt(`Invalid regex pattern found in regex_match: ${t}, returning error`),I.Ci()}}}class wA extends ys{Ki(e,t){return I.newValue({booleanValue:e.includes(t)})}}class AA extends ys{Ki(e,t){return I.newValue({booleanValue:e.startsWith(t)})}}class vA extends ys{Ki(e,t){return I.newValue({booleanValue:e.endsWith(t)})}}class RA{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,29079);const n=ne(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return I.newValue({stringValue:n.value?.stringValue?.toLowerCase()});case"NULL":return I.Oi();default:return I.Ci()}}}class bA{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,60487);const n=ne(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return I.newValue({stringValue:n.value?.stringValue?.toUpperCase()});case"NULL":return I.Oi();default:return I.Ci()}}}class PA{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,28544);const n=ne(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return I.newValue({stringValue:n.value?.stringValue?.trim()});case"NULL":return I.Oi();default:return I.Ci()}}}class SA{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map(o=>ne(o).evaluate(e,t));let s="",i=!1;for(const o of n)switch(o.type){case"STRING":s+=o.value.stringValue;break;case"NULL":i=!0;break;default:return I.Ci()}return i?I.Oi():I.newValue({stringValue:s})}}class NA{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===2,4483);const n=ne(this.expr.params[0]).evaluate(e,t);switch(n.type){case"UNSET":return I.Fi();case"MAP":break;default:return I.Ci()}const s=ne(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return I.Ci();const i=n.value?.mapValue?.fields?.[s.value?.stringValue];return i===void 0?I.Fi():I.newValue(i)}}class cu{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let n=!1;const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":n=!0;break;default:return I.Ci()}const i=ne(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":n=!0;break;default:return I.Ci()}if(n)return I.Oi();const o=QB(s.value),B=QB(i.value);if(o===void 0||B===void 0||o.values?.length!==B.values?.length)return I.Ci();const c=this.$i(o,B);return c===void 0||isNaN(c)?I.Ci():I.newValue({doubleValue:c})}}class OA extends cu{$i(e,t){const n=e?.values??[],s=t?.values??[];if(n.length===0)return;let i=0,o=0,B=0;for(let u=0;u<n.length;u++){if(!Dn(n[u])||!Dn(s[u]))return;const h=et(n[u]),d=et(s[u]);i+=h*d,o+=h*h,B+=d*d}const c=Math.sqrt(o)*Math.sqrt(B);if(c!==0)return 1-Math.max(-1,Math.min(1,i/c))}}class LA extends cu{$i(e,t){const n=e?.values??[],s=t?.values??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Dn(n[o])||!Dn(s[o]))return;i+=et(n[o])*et(s[o])}return i}}class FA extends cu{$i(e,t){const n=e?.values??[],s=t?.values??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Dn(n[o])||!Dn(s[o]))return;const B=et(n[o]),c=et(s[o]);i+=Math.pow(B-c,2)}return Math.sqrt(i)}}class kA{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,39044);const n=ne(this.expr.params[0]).evaluate(e,t);switch(n.type){case"VECTOR":{const s=QB(n.value);return I.newValue({integerValue:s?.values?.length??0})}case"NULL":return I.Oi();default:return I.Ci()}}}const Oi=BigInt(-62135596800),Li=BigInt(253402300799),aa=BigInt(1e3),zn=BigInt(1e6),xA=Oi*aa,VA=Li*aa+BigInt(999),MA=Oi*zn,GA=Li*zn+BigInt(999999);function uu(r){return r>=MA&&r<=GA}function Sp(r){return r>=Oi&&r<=Li}function Fi(r,e){const t=BigInt(r);return!(t<Oi||t>Li)&&!(e<0||e>=1e9)&&(t!==Oi||e===0)&&!(t===Li&&e>999999999)}function Np(r,e){return e<0?{seconds:r-1,nanos:e+1e9}:{seconds:r,nanos:e}}function lu(r){return BigInt(r.seconds)*zn+BigInt(Math.trunc(r.nanoseconds/1e3))}class hu{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const n=ne(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return this.toTimestamp(BigInt(n.value.integerValue));case"NULL":return I.Oi();default:return I.Ci()}}}class UA extends hu{toTimestamp(e){if(!uu(e))return I.Ci();let t=Number(e/zn),n=Number(e%zn*BigInt(1e3));const s=Np(t,n);return t=s.seconds,n=s.nanos,Fi(t,n)?I.newValue({timestampValue:{seconds:t,nanos:n}}):I.Ci()}}class HA extends hu{toTimestamp(e){if(!function(o){return o>=xA&&o<=VA}(e))return I.Ci();let t=Number(e/aa),n=Number(e%aa*BigInt(1e6));const s=Np(t,n);return t=s.seconds,n=s.nanos,Fi(t,n)?I.newValue({timestampValue:{seconds:t,nanos:n}}):I.Ci()}}class JA extends hu{toTimestamp(e){if(!Sp(e))return I.Ci();const t=Number(e);return I.newValue({timestampValue:{seconds:t,nanos:0}})}}class fu{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const n=ne(this.expr.params[0]).evaluate(e,t);switch(n.type){case"TIMESTAMP":break;case"NULL":return I.Oi();default:return I.Ci()}const s=Kc(n.value.timestampValue);return Fi(s.seconds,s.nanoseconds)?this.Wi(s):I.Ci()}}class qA extends fu{Wi(e){const t=lu(e);return uu(t)?I.newValue({integerValue:`${t.toString()}`}):I.Ci()}}class jA extends fu{Wi(e){const t=lu(e),n=t/BigInt(1e3),s=t%BigInt(1e3);return n>BigInt(0)||s===BigInt(0)?I.newValue({integerValue:n.toString()}):I.newValue({integerValue:(n-BigInt(1)).toString()})}}class KA extends fu{Wi(e){const t=BigInt(e.seconds);return Sp(t)?I.newValue({integerValue:t.toString()}):I.Ci()}}class Op{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let n=!1;const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":n=!0;break;default:return I.Ci()}const i=ne(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=function(Be){switch(Be){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),o===void 0)return I.Ci();break;case"NULL":n=!0;break;default:return I.Ci()}const B=ne(this.expr.params[2]).evaluate(e,t);switch(B.type){case"INT":break;case"NULL":n=!0;break;default:return I.Ci()}if(n)return I.Oi();const c=BigInt(B.value.integerValue);let u;try{switch(o){case"microsecond":u=c;break;case"millisecond":u=c*BigInt(1e3);break;case"second":u=c*BigInt(1e6);break;case"minute":u=c*BigInt(6e7);break;case"hour":u=c*BigInt(36e8);break;case"day":u=c*BigInt(864e8);break;default:return I.Ci()}if(o!=="microsecond"&&c!==BigInt(0)&&u/c!==BigInt(this.Gi(o)))return I.Ci()}catch(W){return xt(`Error during timestamp arithmetic: ${W}`),I.Ci()}const h=Kc(s.value.timestampValue);if(!Fi(h.seconds,h.nanoseconds))return I.Ci();const d=lu(h),E=this.ji(d,u);if(!uu(E))return I.Ci();const v=Number(E/zn),P=E%zn,V=Number((P<0?P+zn:P)*BigInt(1e3)),M=P<0?v-1:v;return Fi(M,V)?I.newValue({timestampValue:{seconds:M,nanos:V}}):I.Ci()}Gi(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class zA extends Op{ji(e,t){return e+t}}class WA extends Op{ji(e,t){return e-t}}function ki(r){if((r=bp(r))instanceof _s)return`fld(${r.fieldName})`;if(r instanceof Ds)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Ue?`ref(${t.path})`:t instanceof gt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(r.value)})`;if(r instanceof L)return`fn(${r.name},[${r.params.map(ki).join(",")}])`;if(r.expressionType==="ListOfExpressions")return`list([${r.fi.map(ki).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(r,null,2)}`)}function QA(r){if(r instanceof Ap)return`${r._name}(${Ro(r.fields)})`;if(r instanceof vp){let e=`${r._name}(${Ro(r.accumulators)})`;return r.groups.size>0&&(e+=`grouping(${Ro(r.groups)})`),e}if(r instanceof Rp)return`${r._name}(${Ro(r.groups)})`;if(r instanceof Na)return`${r._name}(${r.pi})`;if(r instanceof Oa)return`${r._name}(${r.collectionId})`;if(r instanceof su)return`${r._name}()`;if(r instanceof iu)return`${r._name}(${r.gi.sort()})`;if(r instanceof La)return`${r._name}(${ki(r.condition)})`;if(r instanceof vr)return`${r._name}(${r.limit})`;if(r instanceof fn)return`${r._name}(${function(t){return t.map(n=>`${ki(n.expr)}${n.direction}`).join(",")}(r.orderings)})`;throw new Error(`Unrecognized stage ${r._name}`)}function Ro(r){return`${Array.from(r.entries()).sort().map(([e,t])=>`${e}=${ki(t)}`).join(",")}`}function pn(r){return r.stages.map(e=>QA(e)).join("|")}function Lp(r,e){return pn(r)===pn(e)}function je(r){return r instanceof ct}function Df(r){return je(r)?pn(r):ii(r)}function Fp(r){return je(r)?pn(r):function(t){return`${qC(Wt(t))}|lt:${t.limitType}`}(r)}function xa(r,e){return r instanceof ct&&e instanceof ct?Lp(r,e):!(r instanceof ct&&!(e instanceof ct)||!(r instanceof ct)&&e instanceof ct)&&fT(r,e)}function kp(r){return hr(r)?pn(r):qC(r)}function xp(r,e){return r instanceof ct&&e instanceof ct?Lp(r,e):!(r instanceof ct&&!(e instanceof ct)||!(r instanceof ct)&&e instanceof ct)&&jC(r,e)}function $A(r,e){const t=function(s){let i=!1;const o=[];for(const B of s)if(B instanceof fn)if(i=!0,B.orderings.some(c=>c.expr instanceof _s&&c.expr.fieldName===Jt))o.push(B);else{const c=B.orderings.map(u=>u);c.push(Uo(Jt).ascending()),o.push(new fn(c,{}))}else B instanceof vr&&(i||(o.push(new fn([Uo(Jt).ascending()],{})),i=!0)),o.push(B);return i||o.push(new fn([Uo(Jt).ascending()],{})),o}(r.stages);if(r.userDataReader){const n=r.userDataReader.createContext(3,"toCorePipeline");t.forEach(s=>s._readUserData(n))}return new ct(r.userDataReader.serializer,t,e)}/**
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
 */class YA{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&zy(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ri(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ri(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=XC();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let B=this.applyToLocalView(o,i.mutatedFields);B=t.has(s.key)?null:B;const c=kC(o,B);c!==null&&n.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(se.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ce())}isEqual(e){return this.batchId===e.batchId&&ns(this.mutations,e.mutations,(t,n)=>Yh(t,n))&&ns(this.baseMutations,e.baseMutations,(t,n)=>Yh(t,n))}}class du{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){Q(e.mutations.length===n.length,58842,{zi:e.mutations.length,Hi:n.length});let s=function(){return mT}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new du(e,t,n,s)}}/**
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
 */const Vp="";function XA(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=If(e)),e=ZA(r.get(t),e);return If(e)}function ZA(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case Vp:t+="";break;default:t+=i}}return t}function If(r){return r+Vp+""}/**
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
 */class e0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class dn{constructor(e,t,n,s,i=se.min(),o=se.min(),B=Se.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=B,this.expectedCount=c}withSequenceNumber(e){return new dn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class t0{constructor(e){this.Yi=e}}function n0(r){const e=FT({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?XB(e,e.limit,"L"):e}/**
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
 */class r0{constructor(){this.A_=new s0}addToCollectionParentIndex(e,t){return this.A_.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.A_.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Yn.min())}updateCollectionGroup(e,t,n){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class s0{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new He(Ce.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new He(Ce.comparator)).toArray()}}/**
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
 */class er{constructor(e){this.Q_=e}next(){return this.Q_+=2,this.Q_}static q_(){return new er(0)}static K_(){return new er(-1)}}// Copyright 2024 Google LLC* @license
function Mp(r,e){let t=e;for(const n of r.stages)t=o0({serializer:r.serializer,serverTimestampBehavior:r.listenOptions?.serverTimestampBehavior},n,t);return t}function Va(r,e){return Mp(r,[e]).length>0}function i0(r,e){return je(r)?Va(r,e):Ra(r,e)}function o0(r,e,t){if(e instanceof Na)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&`/${B.key.getCollectionPath().canonicalString()}`===i.pi)}(0,e,t);if(e instanceof La)return function(s,i,o){return o.filter(B=>{const c=ci(ne(i.condition).evaluate(s,B));return c!==void 0&&Ot(c,Et)})}(r,e,t);if(e instanceof Oa)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&B.key.getCollectionPath().lastSegment()===i.collectionId)}(0,e,t);if(e instanceof su)return function(s,i,o){return o.filter(B=>B.isFoundDocument())}(0,0,t);if(e instanceof iu)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&i.yi.has(B.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof vr)return function(s,i,o){return o.slice(0,i.limit)}(0,e,t);if(e instanceof fn)return function(s,i,o){const B=i.orderings.map(c=>({Z_:ne(c.expr),direction:c.direction}));return[...o].sort((c,u)=>{for(const{Z_:h,direction:d}of B){const E=ci(h.evaluate(s,c)),v=ci(h.evaluate(s,u)),P=_t(E??is,v??is);if(P!==0)return d==="ascending"?P:-P}return 0})}(r,e,t);throw new Error(`Unknown stage: ${e._name}`)}function ic(r){const e=function(n){for(let s=n.stages.length-1;s>=0;s--){const i=n.stages[s];if(i instanceof fn)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(r);return(t,n)=>{for(const s of e){const i=ci(ne(s.expr).evaluate({serializer:r.serializer},t)),o=ci(ne(s.expr).evaluate({serializer:r.serializer},n)),B=_t(i||is,o||is);if(B!==0)return s.direction==="ascending"?B:-B}return 0}}function SB(r){for(let e=r.stages.length-1;e>=0;e--){const t=r.stages[e];if(t instanceof vr)return{limit:t.limit}}}/**
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
 */class a0{constructor(){this.changes=new Nr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?k.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class B0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class c0{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&ri(n.mutation,s,kt.empty(),pe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,ce()).next(()=>n))}getLocalViewOfDocuments(e,t,n=ce()){const s=kn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=qr();return i.forEach((B,c)=>{o=o.insert(B,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=kn();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,ce()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,B)=>{t.set(o,B)})})}computeViews(e,t,n,s){let i=pt();const o=oi(),B=function(){return oi()}();return t.forEach((c,u)=>{const h=n.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Sr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ri(h.mutation,u,h.mutation.getFieldMask(),pe.now())):o.set(u.key,kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>B.set(u,new B0(h,o.get(u)??null))),B))}recalculateAndSaveOverlays(e,t){const n=oi();let s=new Re((o,B)=>o-B),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const B of o)B.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let h=n.get(c)||kt.empty();h=B.applyToLocalView(u,h),n.set(c,h);const d=(s.get(B.batchId)||ce()).add(c);s=s.insert(B.batchId,d)})}).next(()=>{const o=[],B=s.getReverseIterator();for(;B.hasNext();){const c=B.getNext(),u=c.key,h=c.value,d=XC();h.forEach(E=>{if(!i.has(E)){const v=kC(t.get(E),n.get(E));v!==null&&d.set(E,v),i=i.add(E)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return k.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return je(t)?this.getDocumentsMatchingPipeline(e,t,n,s):uT(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):WC(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):k.resolve(kn());let B=Pi,c=i;return o.next(u=>k.forEach(u,(h,d)=>(B<d.largestBatchId&&(B=d.largestBatchId),i.get(h)?k.resolve():this.remoteDocumentCache.getEntry(e,h).next(E=>{c=c.insert(h,E)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ce())).next(h=>({batchId:B,changes:YC(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next(n=>{let s=qr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=qr();return this.indexManager.getCollectionParents(e,i).next(B=>k.forEach(B,c=>{const u=function(d,E){return new gs(E,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,n,s).next(h=>{h.forEach((d,E)=>{o=o.insert(d,E)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>this.retrieveMatchingLocalDocuments(i,o,B=>Ra(t,B)))}getDocumentsMatchingPipeline(e,t,n,s){if(Kn(t)==="collection_group"){const i=au(t);let o=qr();return this.indexManager.getCollectionParents(e,i).next(B=>k.forEach(B,c=>{const u=function(d,E){const v=d.stages.map(P=>P instanceof Oa?new Na(E.canonicalString(),{}):P);return new ct(d.serializer,v)}(t,c.child(i));return this.getDocumentsMatchingPipeline(e,u,n,s).next(h=>{h.forEach((d,E)=>{o=o.insert(d,E)})})}).next(()=>o))}{let i;return this.getOverlaysForPipeline(e,t,n.largestBatchId).next(o=>{switch(i=o,Kn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s);case"documents":let B=ce();for(const c of sc(t))B=B.add(Y.fromPath(c));return this.remoteDocumentCache.getEntries(e,B);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new j("invalid-argument",`Invalid pipeline source to execute offline: ${pn(t)}`)}}).next(o=>this.retrieveMatchingLocalDocuments(i,o,B=>Va(t,B)))}}retrieveMatchingLocalDocuments(e,t,n){e.forEach((i,o)=>{const B=o.getKey();t.get(B)===null&&(t=t.insert(B,st.newInvalidDocument(B)))});let s=qr();return t.forEach((i,o)=>{const B=e.get(i);B!==void 0&&ri(B.mutation,o,kt.empty(),pe.now()),n(o)&&(s=s.insert(i,o))}),s}getOverlaysForPipeline(e,t,n){switch(Kn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,Ce.fromString(Fa(t)),n);case"collection_group":throw new j("invalid-argument",`Unexpected collection group pipeline: ${pn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,sc(t).map(s=>Y.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(e,n);default:throw new j("invalid-argument",`Failed to get overlays for pipeline: ${pn(t)}`)}}}/**
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
 */class u0{constructor(e){this.serializer=e,this.ao=new Map,this.uo=new Map}getBundleMetadata(e,t){return k.resolve(this.ao.get(t))}saveBundleMetadata(e,t){return this.ao.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Qt(s.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.uo.get(t))}saveNamedQuery(e,t){return this.uo.set(t.name,function(s){return{name:s.name,query:n0(s.bundledQuery),readTime:Qt(s.readTime)}}(t)),k.resolve()}}/**
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
 */class l0{constructor(){this.overlays=new Re(Y.comparator),this.co=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const n=kn();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}getAllOverlays(e,t){const n=kn();return this.overlays.forEach((s,i)=>{i.largestBatchId>t&&n.set(s,i)}),k.resolve(n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.cs(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.co.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.co.delete(n)),k.resolve()}getOverlaysForCollection(e,t,n){const s=kn(),i=t.length+1,o=new Y(t.child("")),B=this.overlays.getIteratorFrom(o);for(;B.hasNext();){const c=B.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>n&&s.set(c.getKey(),c)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new Re((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>n){let h=i.get(u.largestBatchId);h===null&&(h=kn(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const B=kn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>B.set(u,h)),!(B.size()>=s)););return k.resolve(B)}cs(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.co.get(s.largestBatchId).delete(n.key);this.co.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new e0(t,n));let i=this.co.get(t);i===void 0&&(i=ce(),this.co.set(t,i)),this.co.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(){this.sessionToken=Se.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
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
 */class Cu{constructor(){this.lo=new He(We.Eo),this.ho=new He(We.To)}isEmpty(){return this.lo.isEmpty()}addReference(e,t){const n=new We(e,t);this.lo=this.lo.add(n),this.ho=this.ho.add(n)}Po(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Io(new We(e,t))}Ro(e,t){e.forEach(n=>this.removeReference(n,t))}Ao(e){const t=new Y(new Ce([])),n=new We(t,e),s=new We(t,e+1),i=[];return this.ho.forEachInRange([n,s],o=>{this.Io(o),i.push(o.key)}),i}Vo(){this.lo.forEach(e=>this.Io(e))}Io(e){this.lo=this.lo.delete(e),this.ho=this.ho.delete(e)}fo(e){const t=new Y(new Ce([])),n=new We(t,e),s=new We(t,e+1);let i=ce();return this.ho.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new We(e,0),n=this.lo.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class We{constructor(e,t){this.key=e,this.mo=t}static Eo(e,t){return Y.comparator(e.key,t.key)||ae(e.mo,t.mo)}static To(e,t){return ae(e.mo,t.mo)||Y.comparator(e.key,t.key)}}/**
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
 */class f0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ts=1,this.po=new He(We.Eo)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.ts;this.ts++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new YA(i,t,n,s);this.mutationQueue.push(o);for(const B of s)this.po=this.po.add(new We(B.key,i)),this.indexManager.addToCollectionParentIndex(e,B.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,t){return k.resolve(this.yo(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.wo(n),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?kc:this.ts-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new We(t,0),s=new We(t,Number.POSITIVE_INFINITY),i=[];return this.po.forEachInRange([n,s],o=>{const B=this.yo(o.mo);i.push(B)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new He(ae);return t.forEach(s=>{const i=new We(s,0),o=new We(s,Number.POSITIVE_INFINITY);this.po.forEachInRange([i,o],B=>{n=n.add(B.mo)})}),k.resolve(this.bo(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;Y.isDocumentKey(i)||(i=i.child(""));const o=new We(new Y(i),0);let B=new He(ae);return this.po.forEachWhile(c=>{const u=c.key.path;return!!n.isPrefixOf(u)&&(u.length===s&&(B=B.add(c.mo)),!0)},o),k.resolve(this.bo(B))}bo(e){const t=[];return e.forEach(n=>{const s=this.yo(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Q(this.So(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.po;return k.forEach(t.mutations,s=>{const i=new We(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.po=n})}ss(e){}containsKey(e,t){const n=new We(t,0),s=this.po.firstAfterOrEqual(n);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}So(e,t){return this.wo(e)}wo(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yo(e){const t=this.wo(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class d0{constructor(e){this.xo=e,this.docs=function(){return new Re(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.xo(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return k.resolve(n?n.document.mutableCopy():st.newInvalidDocument(t))}getEntries(e,t){let n=pt();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():st.newInvalidDocument(s))}),k.resolve(n)}getAllEntries(e){let t=pt();return this.docs.forEach((n,s)=>{t=t.insert(n,s.document)}),k.resolve(t)}getDocumentsMatchingQuery(e,t,n,s){let i,o;je(t)?(i=Ce.fromString(Fa(t)),o=h=>Va(t,h)):(i=t.path,o=h=>Ra(t,h));let B=pt();const c=new Y(i.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:d}}=u.getNext();if(!i.isPrefixOf(h.path))break;h.path.length>i.length+1||aT(oT(d),n)<=0||(s.has(d.key)||o(d))&&(B=B.insert(d.key,d.mutableCopy()))}return k.resolve(B)}getAllFromCollectionGroup(e,t,n,s){ee(9500)}vo(e,t){return k.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new C0(this)}getSize(e){return k.resolve(this.size)}}class C0 extends a0{constructor(e){super(),this._o=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this._o.addEntry(e,s)):this._o.removeEntry(n)}),k.waitFor(t)}getFromCache(e,t){return this._o.getEntry(e,t)}getAllFromCache(e,t){return this._o.getEntries(e,t)}}/**
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
 */class p0{constructor(e){this.persistence=e,this.Do=new Nr(t=>kp(t),xp),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Co=0,this.Fo=new Cu,this.targetCount=0,this.Oo=er.q_()}forEachTarget(e,t){return this.Do.forEach((n,s)=>t(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Co)}allocateTargetId(e){return this.highestTargetId=this.Oo.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Co&&(this.Co=t),k.resolve()}j_(e){this.Do.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Oo=new er(t),this.highestTargetId=t),e.sequenceNumber>this.Co&&(this.Co=e.sequenceNumber)}addTargetData(e,t){return this.j_(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.j_(t),k.resolve()}removeTargetData(e,t){return this.Do.delete(t.target),this.Fo.Ao(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.Do.forEach((o,B)=>{B.sequenceNumber<=t&&n.get(B.targetId)===null&&(this.Do.delete(o),i.push(this.removeMatchingKeysForTargetId(e,B.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const n=this.Do.get(t)||null;return k.resolve(n)}addMatchingKeys(e,t,n){return this.Fo.Po(t,n),k.resolve()}removeMatchingKeys(e,t,n){this.Fo.Ro(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Fo.Ao(t),k.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Fo.fo(t);return k.resolve(n)}containsKey(e,t){return k.resolve(this.Fo.containsKey(t))}}/**
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
 */class Gp{constructor(e,t){this.Mo={},this.overlays={},this.No=new Pa(0),this.Bo=!1,this.Bo=!0,this.Lo=new h0,this.referenceDelegate=e(this),this.Uo=new p0(this),this.indexManager=new r0,this.remoteDocumentCache=function(s){return new d0(s)}(n=>this.referenceDelegate.ko(n)),this.serializer=new t0(t),this.Qo=new u0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Bo=!1,Promise.resolve()}get started(){return this.Bo}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new l0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Mo[e.toKey()];return n||(n=new f0(t,this.referenceDelegate),this.Mo[e.toKey()]=n),n}getGlobalsCache(){return this.Lo}getTargetCache(){return this.Uo}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qo}runTransaction(e,t,n){K("MemoryPersistence","Starting transaction:",e);const s=new g0(this.No.next());return this.referenceDelegate.qo(),n(s).next(i=>this.referenceDelegate.Ko(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}$o(e,t){return k.or(Object.values(this.Mo).map(n=>()=>n.containsKey(e,t)))}}class g0 extends Bw{constructor(e){super(),this.currentSequenceNumber=e}}class pu{constructor(e){this.persistence=e,this.Wo=new Cu,this.Go=null}static jo(e){return new pu(e)}get zo(){if(this.Go)return this.Go;throw ee(60996)}addReference(e,t,n){return this.Wo.addReference(n,t),this.zo.delete(n.toString()),k.resolve()}removeReference(e,t,n){return this.Wo.removeReference(n,t),this.zo.add(n.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.zo.add(t.toString()),k.resolve()}removeTarget(e,t){this.Wo.Ao(t.targetId).forEach(s=>this.zo.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.zo.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}qo(){this.Go=new Set}Ko(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.zo,n=>{const s=Y.fromPath(n);return this.Ho(e,s).next(i=>{i||t.removeEntry(s,se.min())})}).next(()=>(this.Go=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ho(e,t).next(n=>{n?this.zo.delete(t.toString()):this.zo.add(t.toString())})}ko(e){return 0}Ho(e,t){return k.or([()=>k.resolve(this.Wo.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.$o(e,t)])}}class Ba{constructor(e,t){this.persistence=e,this.Jo=new Nr(n=>XA(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=dw(this,t)}static jo(e,t){return new Ba(e,t)}qo(){}Ko(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Pi(e){const t=this.H_(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}H_(e){let t=0;return this.Ii(e,n=>{t++}).next(()=>t)}Ii(e,t){return k.forEach(this.Jo,(n,s)=>this.Y_(e,n,s).next(i=>i?k.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.vo(e,o=>this.Y_(e,o,t).next(B=>{B||(n++,i.removeEntry(o,se.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.Jo.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.Jo.set(n,e.currentSequenceNumber),k.resolve()}removeReference(e,t,n){return this.Jo.set(n,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.Jo.set(t,e.currentSequenceNumber),k.resolve()}ko(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ta(e.data.value)),t}Y_(e,t,n){return k.or([()=>this.persistence.$o(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.Jo.get(t);return k.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class gu{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Ba=n,this.La=s}static Ua(e,t){let n=ce(),s=ce();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new gu(e,t.fromCache,n,s)}}/**
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
 */function m0(r,e){return Y.comparator(r.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class _0{constructor(){this.ka=!1,this.Qa=!1,this.qa=100,this.Ka=function(){return im()?8:cw(it())>0?6:4}()}initialize(e,t){this.$a=e,this.indexManager=t,this.ka=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.Wa(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ga(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new E0;return this.ja(e,t,o).next(B=>{if(i.result=B,this.Qa)return this.za(e,t,o,B.size)})}).next(()=>i.result)}za(e,t,n,s){return je(t)?k.resolve():n.documentReadCount<this.qa?(Hr()<=ue.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",ii(t),"since it only creates cache indexes for collection contains","more than or equal to",this.qa,"documents"),k.resolve()):(Hr()<=ue.DEBUG&&K("QueryEngine","Query:",ii(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Ka*s?(Hr()<=ue.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",ii(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Wt(t))):k.resolve())}Wa(e,t){if(je(t))return k.resolve(null);let n=t;if(rf(n))return k.resolve(null);let s=Wt(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=XB(n,null,"F"),s=Wt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(o=>{const B=ce(...o);return this.$a.getDocuments(e,B).next(c=>this.indexManager.getMinOffset(e,s).next(u=>{const h=this.Ha(n,c);return this.Ja(n,h,B,u.readTime)?this.Wa(e,XB(n,null,"F")):this.Ya(e,h,n,u)}))})))}Ga(e,t,n,s){return(je(t)?function(o){for(const B of o.stages){if(B instanceof vr||B instanceof _f)return!1;if(B instanceof La){if(B.condition instanceof yp&&B.condition._expr.name==="exists"&&B.condition._expr.params[0]instanceof _s&&B.condition._expr.params[0].fieldName===Jt)continue;return!1}}return!0}(t):rf(t))||s.isEqual(se.min())?k.resolve(null):this.$a.getDocuments(e,n).next(i=>{const o=this.Ha(t,i);return this.Ja(t,o,n,s)?k.resolve(null):(Hr()<=ue.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Df(t)),this.Ya(e,o,t,iT(s,Pi)).next(B=>B))})}Ha(e,t){let n,s;return je(e)?(n=new He(m0),s=i=>Va(e,i)):(n=new He(qc(e)),s=i=>Ra(e,i)),t.forEach((i,o)=>{s(o)&&(n=n.add(o))}),n}Ja(e,t,n,s){if(je(e))return function(B){return B.stages.some(c=>c instanceof vr||c instanceof _f)}(e);if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ja(e,t,n){return Hr()<=ue.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Df(t)),this.$a.getDocumentsMatchingQuery(e,t,Yn.min(),n)}Ya(e,t,n,s){return this.$a.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const mu="LocalStore",D0=3e8;class I0{constructor(e,t,n,s){this.persistence=e,this.Za=t,this.serializer=s,this.Xa=new Re(ae),this.eu=new Nr(i=>kp(i),xp),this.tu=new Map,this.nu=e.getRemoteDocumentCache(),this.Uo=e.getTargetCache(),this.Qo=e.getBundleCache(),this.ru(n)}ru(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new c0(this.nu,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.nu.setIndexManager(this.indexManager),this.Za.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Xa))}}function y0(r,e,t,n){return new I0(r,e,t,n)}async function Up(r,e){const t=ie(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.ru(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],B=[];let c=ce();for(const u of s){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){B.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(n,c).next(u=>({iu:u,removedBatchIds:o,addedBatchIds:B}))})})}function T0(r,e){const t=ie(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.nu.newChangeBuffer({trackRemovals:!0});return function(B,c,u,h){const d=u.batch,E=d.keys();let v=k.resolve();return E.forEach(P=>{v=v.next(()=>h.getEntry(c,P)).next(V=>{const M=u.docVersions.get(P);Q(M!==null,48541),V.version.compareTo(M)<0&&(d.applyToRemoteDocument(V,u),V.isValidDocument()&&(V.setReadTime(u.commitVersion),h.addEntry(V)))})}),v.next(()=>B.mutationQueue.removeMutationBatch(c,d))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(B){let c=ce();for(let u=0;u<B.mutationResults.length;++u)B.mutationResults[u].transformResults.length>0&&(c=c.add(B.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Hp(r){const e=ie(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Uo.getLastRemoteSnapshotVersion(t))}function w0(r,e){const t=ie(r),n=e.snapshotVersion;let s=t.Xa;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.nu.newChangeBuffer({trackRemovals:!0});s=t.Xa;const B=[];e.targetChanges.forEach((h,d)=>{const E=s.get(d);if(!E)return;B.push(t.Uo.removeMatchingKeys(i,h.removedDocuments,d).next(()=>t.Uo.addMatchingKeys(i,h.addedDocuments,d)));let v=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?v=v.withResumeToken(Se.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,n)),s=s.insert(d,v),function(V,M,W){return V.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=D0?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(E,v,h)&&B.push(t.Uo.updateTargetData(i,v))});let c=pt(),u=ce();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&B.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),B.push(A0(i,o,e.documentUpdates).next(h=>{c=h.su,u=h._u})),!n.isEqual(se.min())){const h=t.Uo.getLastRemoteSnapshotVersion(i).next(d=>t.Uo.setTargetsMetadata(i,i.currentSequenceNumber,n));B.push(h)}return k.waitFor(B).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.Xa=s,i))}function A0(r,e,t){let n=ce(),s=ce();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=pt();return t.forEach((B,c)=>{const u=i.get(B);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(B)),c.isNoDocument()&&c.version.isEqual(se.min())?(e.removeEntry(B,c.readTime),o=o.insert(B,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(B,c)):K(mu,"Ignoring outdated watch update for ",B,". Current version:",u.version," Watch version:",c.version)}),{su:o,_u:s}})}function v0(r,e){const t=ie(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=kc),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function R0(r,e){const t=ie(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Uo.getTargetData(n,e).next(i=>i?(s=i,k.resolve(s)):t.Uo.allocateTargetId(n).next(o=>(s=new dn(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Uo.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.Xa.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Xa=t.Xa.insert(n.targetId,n),t.eu.set(e,n.targetId)),n})}async function oc(r,e,t){const n=ie(r),s=n.Xa.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Es(o))throw o;K(mu,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Xa=n.Xa.remove(e),n.eu.delete(s.target)}function yf(r,e,t){const n=ie(r);let s=se.min(),i=ce();return n.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const d=ie(c),E=d.eu.get(h);return E!==void 0?k.resolve(d.Xa.get(E)):d.Uo.getTargetData(u,h)}(n,o,je(e)?e:Wt(e)).next(B=>{if(B)return s=B.lastLimboFreeSnapshotVersion,n.Uo.getMatchingKeysForTargetId(o,B.targetId).next(c=>{i=c})}).next(()=>n.Za.getDocumentsMatchingQuery(o,e,t?s:se.min(),t?i:ce())).next(B=>(b0(n,B),{documents:B,ou:i})))}function b0(r,e){e.forEach((t,n)=>{const s=n.key.getCollectionGroup(),i=r.tu.get(s)||se.min();n.readTime.compareTo(i)>0&&r.tu.set(s,n.readTime)})}/**
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
 */class P0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.hu=0,this.Tu=null,this.Pu=!0}Iu(){this.hu===0&&(this.Ru("Unknown"),this.Tu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Tu=null,this.Au("Backend didn't respond within 10 seconds."),this.Ru("Offline"),Promise.resolve())))}Vu(e){this.state==="Online"?this.Ru("Unknown"):(this.hu++,this.hu>=1&&(this.fu(),this.Au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ru("Offline")))}set(e){this.fu(),this.hu=0,e==="Online"&&(this.Pu=!1),this.Ru(e)}Ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Au(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Pu?(_n(t),this.Pu=!1):K("OnlineStateTracker",t)}fu(){this.Tu!==null&&(this.Tu.cancel(),this.Tu=null)}}/**
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
 */const Zt="RemoteStore";class S0{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this.mu=new Map,this.pu=new Map,this.gu=new Map,this.yu=new er(1e3),this.wu=new er(1001),this.bu=new Set,this.Su=[],this.xu=i,this.xu.tn(o=>{n.enqueueAndForget(async()=>{Fr(this)&&(K(Zt,"Restarting streams for network reachability change."),await async function(c){const u=ie(c);u.bu.add(4),await Xi(u),u.vu.set("Unknown"),u.bu.delete(4),await Ma(u)}(this))})}),this.vu=new P0(n,s)}}async function Ma(r){if(Fr(r))for(const e of r.Su)await e(!0)}async function Xi(r){for(const e of r.Su)await e(!1)}function ac(r,e){return r.pu.get(e)||void 0}function Jp(r,e){const t=ie(r),n=ac(t,e.targetId);if(n!==void 0&&t.mu.has(n))return;const s=function(B,c){const u=ac(B,c);u!==void 0&&B.gu.delete(u);const h=function(E,v){return v%2!=0?E.wu.next():E.yu.next()}(B,c);return B.pu.set(c,h),B.gu.set(h,c),h}(t,e.targetId);K(Zt,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new dn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.mu.set(s,i),Iu(t)?Du(t):Ts(t).ur()&&_u(t,i)}function Eu(r,e){const t=ie(r),n=Ts(t),s=ac(t,e);K(Zt,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.mu.delete(s),t.pu.delete(e),t.gu.delete(s),n.ur()&&qp(t,s),t.mu.size===0&&(n.ur()?n.Er():Fr(t)&&t.vu.set("Unknown"))}function _u(r,e){if(r.Du.rt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=r.gu.get(e.targetId);if(t===void 0)return void K(Zt,"SDK target ID not found for remote ID: "+e.targetId);const n=r.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(n)}Ts(r).yr(e)}function qp(r,e){r.Du.rt(e),Ts(r).wr(e)}function Du(r){r.Du=new TT({getRemoteKeysForTarget:e=>{const t=r.gu.get(e);return t!==void 0?r.remoteSyncer.getRemoteKeysForTarget(t):ce()},Mt:e=>r.mu.get(e)||null,xt:()=>r.datastore.serializer.databaseId}),Ts(r).start(),r.vu.Iu()}function Iu(r){return Fr(r)&&!Ts(r).ar()&&r.mu.size>0}function Fr(r){return ie(r).bu.size===0}function jp(r){r.Du=void 0}async function N0(r){r.vu.set("Online")}async function O0(r){r.mu.forEach((e,t)=>{_u(r,e)})}async function L0(r,e){jp(r),Iu(r)?(r.vu.Vu(e),Du(r)):r.vu.set("Unknown")}async function F0(r,e,t){if(r.vu.set("Online"),e instanceof ep&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const B of i.targetIds){if(s.mu.has(B)){const c=s.gu.get(B);c!==void 0&&(await s.remoteSyncer.rejectListen(c,o),s.pu.delete(c),s.gu.delete(B)),s.mu.delete(B)}s.Du.removeTarget(B)}}(r,e)}catch(n){K(Zt,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ca(r,n)}else if(e instanceof Mo?r.Du.Tt(e):e instanceof ZC?r.Du.dt(e):r.Du.Rt(e),!t.isEqual(se.min()))try{const n=await Hp(r.localStore);t.compareTo(n)>=0&&await function(i,o){const B=i.Du.Dt(o);B.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.mu.get(h);d&&i.mu.set(h,d.withResumeToken(u.resumeToken,o))}}),B.targetMismatches.forEach((u,h)=>{const d=i.mu.get(u);if(!d)return;i.mu.set(u,d.withResumeToken(Se.EMPTY_BYTE_STRING,d.snapshotVersion)),qp(i,u);const E=new dn(d.target,u,h,d.sequenceNumber);_u(i,E)});const c=function(h,d){const E=new Map;d.targetChanges.forEach((P,V)=>{const M=h.gu.get(V);M!==void 0&&E.set(M,P)});let v=new Re(ae);return d.targetMismatches.forEach((P,V)=>{const M=h.gu.get(P);M!==void 0&&(v=v.insert(M,V))}),new Wi(d.snapshotVersion,E,v,d.documentUpdates,d.augmentedDocumentUpdates,d.resolvedLimboDocuments)}(i,B);return i.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){K(Zt,"Failed to raise snapshot:",n),await ca(r,n)}}async function ca(r,e,t){if(!Es(e))throw e;r.bu.add(1),await Xi(r),r.vu.set("Offline"),t||(t=()=>Hp(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{K(Zt,"Retrying IndexedDB access"),await t(),r.bu.delete(1),await Ma(r)})}function Kp(r,e){return e().catch(t=>ca(r,t,e))}async function Ga(r){const e=ie(r),t=tr(e);let n=e.du.length>0?e.du[e.du.length-1].batchId:kc;for(;k0(e);)try{const s=await v0(e.localStore,n);if(s===null){e.du.length===0&&t.Er();break}n=s.batchId,x0(e,s)}catch(s){await ca(e,s)}zp(e)&&Wp(e)}function k0(r){return Fr(r)&&r.du.length<10}function x0(r,e){r.du.push(e);const t=tr(r);t.ur()&&t.br&&t.Sr(e.mutations)}function zp(r){return Fr(r)&&!tr(r).ar()&&r.du.length>0}function Wp(r){tr(r).start()}async function V0(r){tr(r).Cr()}async function M0(r){const e=tr(r);for(const t of r.du)e.Sr(t.mutations)}async function G0(r,e,t){const n=r.du.shift(),s=du.from(n,e,t);await Kp(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Ga(r)}async function U0(r,e){e&&tr(r).br&&await async function(n,s){if(function(o){return pT(o)&&o!==F.ABORTED}(s.code)){const i=n.du.shift();tr(n).lr(),await Kp(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ga(n)}}(r,e),zp(r)&&Wp(r)}async function Tf(r,e){const t=ie(r);t.asyncQueue.verifyOperationInProgress(),K(Zt,"RemoteStore received new credentials");const n=Fr(t);t.bu.add(3),await Xi(t),n&&t.vu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.bu.delete(3),await Ma(t)}async function H0(r,e){const t=ie(r);e?(t.bu.delete(2),await Ma(t)):e||(t.bu.add(2),await Xi(t),t.vu.set("Unknown"))}function Ts(r){return r.Cu||(r.Cu=function(t,n,s){const i=ie(t);return i.Or(),new ew(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{pn:N0.bind(null,r),yn:O0.bind(null,r),bn:L0.bind(null,r),gr:F0.bind(null,r)}),r.Su.push(async e=>{e?(r.Cu.lr(),Iu(r)?Du(r):r.vu.set("Unknown")):(await r.Cu.stop(),jp(r))})),r.Cu}function tr(r){return r.Fu||(r.Fu=function(t,n,s){const i=ie(t);return i.Or(),new tw(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{pn:()=>Promise.resolve(),yn:V0.bind(null,r),bn:U0.bind(null,r),vr:M0.bind(null,r),Dr:G0.bind(null,r)}),r.Su.push(async e=>{e?(r.Fu.lr(),await Ga(r)):(await r.Fu.stop(),r.du.length>0&&(K(Zt,`Stopping write stream with ${r.du.length} pending writes`),r.du=[]))})),r.Fu}/**
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
 */class J0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):_n("Uncaught Error in snapshot listener:",e.toString()))}Mu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class yu{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,B=new yu(e,t,o,s,i);return B.start(n),B}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tu(r,e){if(_n("AsyncQueue",`${e}: ${r}`),Es(r))return new j(F.UNAVAILABLE,`${e}: ${r}`);throw r}class wf{constructor(){this.activeTargetIds=DT()}ec(e){this.activeTargetIds=this.activeTargetIds.add(e)}tc(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xu(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class q0{constructor(){this.Uc=new wf,this.kc={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Uc.ec(e),this.kc[e]||"not-current"}updateQueryState(e,t,n){this.kc[e]=t}removeLocalQueryTarget(e){this.Uc.tc(e)}isLocalQueryTarget(e){return this.Uc.activeTargetIds.has(e)}clearQueryState(e){delete this.kc[e]}getAllActiveQueryTargets(){return this.Uc.activeTargetIds}isActiveQueryTarget(e){return this.Uc.activeTargetIds.has(e)}start(){return this.Uc=new wf,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function NB(){return typeof document<"u"?document:null}/**
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
 */class _r{static emptySet(e){return new _r(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Y.comparator(t.key,n.key):(t,n)=>Y.comparator(t.key,n.key),this.keyedMap=qr(),this.sortedSet=new Re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _r)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new _r;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class Af{constructor(){this.Qc=new Re(Y.comparator)}track(e){const t=e.doc.key,n=this.Qc.get(t);n?e.type!==0&&n.type===3?this.Qc=this.Qc.insert(t,e):e.type===3&&n.type!==1?this.Qc=this.Qc.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.Qc=this.Qc.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.Qc=this.Qc.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.Qc=this.Qc.remove(t):e.type===1&&n.type===2?this.Qc=this.Qc.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.Qc=this.Qc.insert(t,{type:2,doc:e.doc}):ee(63341,{Nt:e,qc:n}):this.Qc=this.Qc.insert(t,e)}Kc(){const e=[];return this.Qc.inorderTraversal((t,n)=>{e.push(n)}),e}}class cs{constructor(e,t,n,s,i,o,B,c,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=B,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(B=>{o.push({type:0,doc:B})}),new cs(e,t,_r.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class j0{constructor(){this.$c=void 0,this.Wc=[]}Gc(){return this.Wc.some(e=>e.jc())}}class K0{constructor(){this.queries=vf(),this.onlineState="Unknown",this.zc=new Set}terminate(){(function(t,n){const s=ie(t),i=s.queries;s.queries=vf(),i.forEach((o,B)=>{for(const c of B.Wc)c.onError(n)})})(this,new j(F.ABORTED,"Firestore shutting down"))}}function vf(){return new Nr(r=>Fp(r),xa)}async function z0(r,e){const t=ie(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.Gc()&&e.jc()&&(n=2):(i=new j0,n=e.jc()?0:1);try{switch(n){case 0:i.$c=await t.onListen(s,!0);break;case 1:i.$c=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const B=Tu(o,`Initialization of query '${je(e.query)?pn(e.query):ii(e.query)}' failed`);return void e.onError(B)}t.queries.set(s,i),i.Wc.push(e),e.Hc(t.onlineState),i.$c&&e.Jc(i.$c)&&wu(t)}async function W0(r,e){const t=ie(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.Wc.indexOf(e);o>=0&&(i.Wc.splice(o,1),i.Wc.length===0?s=e.jc()?0:1:!i.Gc()&&e.jc()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Q0(r,e){const t=ie(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const B of o.Wc)B.Jc(s)&&(n=!0);o.$c=s}}n&&wu(t)}function $0(r,e,t){const n=ie(r),s=n.queries.get(e);if(s)for(const i of s.Wc)i.onError(t);n.queries.delete(e)}function wu(r){r.zc.forEach(e=>{e.next()})}var Bc;(function(r){r.Default="default",r.Cache="cache"})(Bc||(Bc={}));class Y0{constructor(e,t,n){this.query=e,this.Yc=t,this.Zc=!1,this.Xc=null,this.onlineState="Unknown",this.options=n||{}}Jc(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new cs(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Zc?this.el(e)&&(this.Yc.next(e),t=!0):this.tl(e,this.onlineState)&&(this.nl(e),t=!0),this.Xc=e,t}onError(e){this.Yc.error(e)}Hc(e){this.onlineState=e;let t=!1;return this.Xc&&!this.Zc&&this.tl(this.Xc,e)&&(this.nl(this.Xc),t=!0),t}tl(e,t){if(!e.fromCache||!this.jc())return!0;const n=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}el(e){if(e.docChanges.length>0)return!0;const t=this.Xc&&this.Xc.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}nl(e){e=cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Zc=!0,this.Yc.next(e)}jc(){return this.options.source!==Bc.Cache}}/**
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
 */class Qp{constructor(e){this.key=e}}class $p{constructor(e){this.key=e}}class X0{constructor(e,t){this.query=e,this.ll=t,this.El=null,this.hasCachedResults=!1,this.current=!1,this.hl=ce(),this.mutatedKeys=ce(),this.Tl=je(e)?ic(e):qc(e),this.Pl=new _r(this.Tl)}get Il(){return this.ll}Rl(e,t){const n=t?t.Al:new Af,s=t?t.Pl:this.Pl;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,B=!1;const[c,u]=this.Vl(this.query,s);e.inorderTraversal((d,E)=>{const v=s.get(d),P=i0(this.query,E)?E:null,V=!!v&&this.mutatedKeys.has(v.key),M=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let W=!1;v&&P?v.data.isEqual(P.data)?V!==M&&(n.track({type:3,doc:P}),W=!0):this.fl(v,P)||(n.track({type:2,doc:P}),W=!0,(c&&this.Tl(P,c)>0||u&&this.Tl(P,u)<0)&&(B=!0)):!v&&P?(n.track({type:0,doc:P}),W=!0):v&&!P&&(n.track({type:1,doc:v}),W=!0,(c||u)&&(B=!0)),W&&(P?(o=o.add(P),i=M?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))});const h=this.dl(this.query);if(h)if(je(this.query)){const d=[];o.forEach(P=>d.push(P));const E=Mp(this.query,d);let v=new _r(ic(this.query));for(const P of E)v=v.add(P);o.forEach(P=>{v.has(P.key)||(i=i.delete(P.key),n.track({type:1,doc:P}))}),o=v}else{const d=this.ml(this.query);for(;o.size>h;){const E=d==="F"?o.last():o.first();o=o.delete(E.key),i=i.delete(E.key),n.track({type:1,doc:E})}}return{Pl:o,Al:n,Ja:B,mutatedKeys:i}}dl(e){return je(e)?SB(e)?.limit:e.limit||void 0}ml(e){if(je(e)){const t=SB(e);return t&&t.limit<0?"L":"F"}return e.limitType}Vl(e,t){if(je(e)){const n=SB(e)?.limit;return[t.size===n?t.last():null,null]}return[e.limitType==="F"&&t.size===this.dl(this.query)?t.last():null,e.limitType==="L"&&t.size===this.dl(this.query)?t.first():null]}fl(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Pl;this.Pl=e.Pl,this.mutatedKeys=e.mutatedKeys;const o=e.Al.Kc();o.sort((h,d)=>function(v,P){const V=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{Nt:M})}};return V(v)-V(P)}(h.type,d.type)||this.Tl(h.doc,d.doc)),this.pl(n),s=s??!1;const B=t&&!s?this.gl():[],c=this.hl.size===0&&this.current&&!s?1:0,u=c!==this.El;return this.El=c,o.length!==0||u?{snapshot:new cs(this.query,e.Pl,i,o,e.mutatedKeys,c===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),yl:B}:{yl:B}}Hc(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pl:this.Pl,Al:new Af,mutatedKeys:this.mutatedKeys,Ja:!1},!1)):{yl:[]}}wl(e){return!this.ll.has(e)&&!!this.Pl.has(e)&&!this.Pl.get(e).hasLocalMutations}pl(e){e&&(e.addedDocuments.forEach(t=>this.ll=this.ll.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.ll=this.ll.delete(t)),this.current=e.current)}gl(){if(!this.current)return[];const e=this.hl;this.hl=ce(),this.Pl.forEach(n=>{this.wl(n.key)&&(this.hl=this.hl.add(n.key))});const t=[];return e.forEach(n=>{this.hl.has(n)||t.push(new $p(n))}),this.hl.forEach(n=>{e.has(n)||t.push(new Qp(n))}),t}bl(e){this.ll=e.ou,this.hl=ce();const t=this.Rl(e.documents);return this.applyChanges(t,!0)}Sl(){return cs.fromInitialDocuments(this.query,this.Pl,this.mutatedKeys,this.El===0,this.hasCachedResults)}}const Au="SyncEngine";class Z0{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class ev{constructor(e){this.key=e,this.xl=!1}}class tv{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.vl={},this.Dl=new Nr(B=>Fp(B),xa),this.Cl=new Map,this.Fl=new Set,this.Ol=new Re(Y.comparator),this.Ml=new Map,this.Nl=new Cu,this.Bl={},this.Ll=new Map,this.Ul=er.K_(),this.onlineState="Unknown",this.kl=void 0}get isPrimaryClient(){return this.kl===!0}}async function nv(r,e,t=!0){const n=ng(r);let s;const i=n.Dl.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Sl()):s=await Yp(n,e,t,!0),s}async function rv(r,e){const t=ng(r);await Yp(t,e,!0,!1)}async function Yp(r,e,t,n){const s=await R0(r.localStore,je(e)?e:Wt(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let B;return n&&(B=await sv(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&Jp(r.remoteStore,s),B}async function sv(r,e,t,n,s){r.Ql=(d,E,v)=>async function(V,M,W,Be){let ve=M.view.Rl(W);ve.Ja&&(ve=await yf(V.localStore,M.query,!1).then(({documents:w})=>M.view.Rl(w,ve)));const ke=Be&&Be.targetChanges.get(M.targetId),Dt=Be&&Be.targetMismatches.get(M.targetId)!=null,be=M.view.applyChanges(ve,V.isPrimaryClient,ke,Dt);return bf(V,M.targetId,be.yl),be.snapshot}(r,d,E,v);const i=await yf(r.localStore,e,!0),o=new X0(e,i.ou),B=o.Rl(i.documents),c=Qi.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),u=o.applyChanges(B,r.isPrimaryClient,c);bf(r,t,u.yl);const h=new Z0(e,t,o);return r.Dl.set(e,h),r.Cl.has(t)?r.Cl.get(t).push(e):r.Cl.set(t,[e]),u.snapshot}async function iv(r,e,t){const n=ie(r),s=n.Dl.get(e),i=n.Cl.get(s.targetId);if(i.length>1)return n.Cl.set(s.targetId,i.filter(o=>!xa(o,e))),void n.Dl.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await oc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&Eu(n.remoteStore,s.targetId),cc(n,s.targetId)}).catch(ms)):(cc(n,s.targetId),await oc(n.localStore,s.targetId,!0))}async function ov(r,e){const t=ie(r),n=t.Dl.get(e),s=t.Cl.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Eu(t.remoteStore,n.targetId))}async function av(r,e,t){const n=dv(r);try{const s=await function(o,B){const c=ie(o),u=pe.now(),h=B.reduce((v,P)=>v.add(P.key),ce());let d,E;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let P=pt(),V=ce();return c.nu.getEntries(v,h).next(M=>{P=M,P.forEach((W,Be)=>{Be.isValidDocument()||(V=V.add(W))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,P)).next(M=>{d=M;const W=[];for(const Be of B){const ve=Wy(Be,d.get(Be.key).overlayedDocument);ve!=null&&W.push(new Sr(Be.key,ve,SC(ve.value.mapValue),zt.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,W,B)}).next(M=>{E=M;const W=M.applyToLocalDocumentSet(d,V);return c.documentOverlayCache.saveOverlays(v,M.batchId,W)})}).then(()=>({batchId:E.batchId,changes:YC(d)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,B,c){let u=o.Bl[o.currentUser.toKey()];u||(u=new Re(ae)),u=u.insert(B,c),o.Bl[o.currentUser.toKey()]=u}(n,s.batchId,t),await Zi(n,s.changes),await Ga(n.remoteStore)}catch(s){const i=Tu(s,"Failed to persist write");t.reject(i)}}async function Xp(r,e){const t=ie(r);try{const n=await w0(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Ml.get(i);o&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.xl=!0:s.modifiedDocuments.size>0?Q(o.xl,14607):s.removedDocuments.size>0&&(Q(o.xl,42227),o.xl=!1))}),await Zi(t,n,e)}catch(n){await ms(n)}}function Rf(r,e,t){const n=ie(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Dl.forEach((i,o)=>{const B=o.view.Hc(e);B.snapshot&&s.push(B.snapshot)}),function(o,B){const c=ie(o);c.onlineState=B;let u=!1;c.queries.forEach((h,d)=>{for(const E of d.Wc)E.Hc(B)&&(u=!0)}),u&&wu(c)}(n.eventManager,e),s.length&&n.vl.gr(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Bv(r,e,t){const n=ie(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Ml.get(e),i=s&&s.key;if(i){let o=new Re(Y.comparator);o=o.insert(i,st.newNoDocument(i,se.min()));const B=ce().add(i),c=new Wi(se.min(),new Map,new Re(ae),o,pt(),B);await Xp(n,c),n.Ol=n.Ol.remove(i),n.Ml.delete(e),vu(n)}else await oc(n.localStore,e,!1).then(()=>cc(n,e,t)).catch(ms)}async function cv(r,e){const t=ie(r),n=e.batch.batchId;try{const s=await T0(t.localStore,e);eg(t,n,null),Zp(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Zi(t,s)}catch(s){await ms(s)}}async function uv(r,e,t){const n=ie(r);try{const s=await function(o,B){const c=ie(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,B).next(d=>(Q(d!==null,37113),h=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,B)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(n.localStore,e);eg(n,e,t),Zp(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Zi(n,s)}catch(s){await ms(s)}}function Zp(r,e){(r.Ll.get(e)||[]).forEach(t=>{t.resolve()}),r.Ll.delete(e)}function eg(r,e,t){const n=ie(r);let s=n.Bl[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Bl[n.currentUser.toKey()]=s}}function cc(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Cl.get(e))r.Dl.delete(n),t&&r.vl.ql(n,t);r.Cl.delete(e),r.isPrimaryClient&&r.Nl.Ao(e).forEach(n=>{r.Nl.containsKey(n)||tg(r,n)})}function tg(r,e){r.Fl.delete(e.path.canonicalString());const t=r.Ol.get(e);t!==null&&(Eu(r.remoteStore,t),r.Ol=r.Ol.remove(e),r.Ml.delete(t),vu(r))}function bf(r,e,t){for(const n of t)n instanceof Qp?(r.Nl.addReference(n.key,e),lv(r,n)):n instanceof $p?(K(Au,"Document no longer in limbo: "+n.key),r.Nl.removeReference(n.key,e),r.Nl.containsKey(n.key)||tg(r,n.key)):ee(19791,{Kl:n})}function lv(r,e){const t=e.key,n=t.path.canonicalString();r.Ol.get(t)||r.Fl.has(n)||(K(Au,"New document in limbo: "+t),r.Fl.add(n),vu(r))}function vu(r){for(;r.Fl.size>0&&r.Ol.size<r.maxConcurrentLimboResolutions;){const e=r.Fl.values().next().value;r.Fl.delete(e);const t=new Y(Ce.fromString(e)),n=r.Ul.next();r.Ml.set(n,new ev(t)),r.Ol=r.Ol.insert(t,n),Jp(r.remoteStore,new dn(Wt(zC(t.path)),n,"TargetPurposeLimboResolution",Pa.Br))}}async function Zi(r,e,t){const n=ie(r),s=[],i=[],o=[];n.Dl.isEmpty()||(n.Dl.forEach((B,c)=>{o.push(n.Ql(c,e,t).then(u=>{if((u||t)&&n.isPrimaryClient){const h=u?!u.fromCache:t?.targetChanges.get(c.targetId)?.current;n.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(u){s.push(u);const h=gu.Ua(c.targetId,u);i.push(h)}}))}),await Promise.all(o),n.vl.gr(s),await async function(c,u){const h=ie(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>k.forEach(u,E=>k.forEach(E.Ba,v=>h.persistence.referenceDelegate.addReference(d,E.targetId,v)).next(()=>k.forEach(E.La,v=>h.persistence.referenceDelegate.removeReference(d,E.targetId,v)))))}catch(d){if(!Es(d))throw d;K(mu,"Failed to update sequence numbers: "+d)}for(const d of u){const E=d.targetId;if(!d.fromCache){const v=h.Xa.get(E),P=v.snapshotVersion,V=v.withLastLimboFreeSnapshotVersion(P);h.Xa=h.Xa.insert(E,V)}}}(n.localStore,i))}async function hv(r,e){const t=ie(r);if(!t.currentUser.isEqual(e)){K(Au,"User change. New user:",e.toKey());const n=await Up(t.localStore,e);t.currentUser=e,function(i,o){i.Ll.forEach(B=>{B.forEach(c=>{c.reject(new j(F.CANCELLED,o))})}),i.Ll.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Zi(t,n.iu)}}function fv(r,e){const t=ie(r),n=t.Ml.get(e);if(n&&n.xl)return ce().add(n.key);{let s=ce();const i=t.Cl.get(e);if(!i)return s;for(const o of i??[]){const B=t.Dl.get(o);s=s.unionWith(B.view.Il)}return s}}function ng(r){const e=ie(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Bv.bind(null,e),e.vl.gr=Q0.bind(null,e.eventManager),e.vl.ql=$0.bind(null,e.eventManager),e}function dv(r){const e=ie(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uv.bind(null,e),e}class ua{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ba(e.databaseInfo.databaseId),this.sharedClientState=this.Wl(e),this.persistence=this.Gl(e),await this.persistence.start(),this.localStore=this.jl(e),this.gcScheduler=this.zl(e,this.localStore),this.indexBackfillerScheduler=this.Hl(e,this.localStore)}zl(e,t){return null}Hl(e,t){return null}jl(e){return y0(this.persistence,new _0,e.initialUser,this.serializer)}Gl(e){return new Gp(pu.jo,this.serializer)}Wl(e){return new q0}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ua.provider={build:()=>new ua};class Cv extends ua{constructor(e){super(),this.cacheSizeBytes=e}zl(e,t){Q(this.persistence.referenceDelegate instanceof Ba,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new hw(n,e.asyncQueue,t)}Gl(e){const t=this.cacheSizeBytes!==void 0?Ct.withCacheSize(this.cacheSizeBytes):Ct.DEFAULT;return new Gp(n=>Ba.jo(n,t),this.serializer)}}class uc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Rf(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=hv.bind(null,this.syncEngine),await H0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new K0}()}createDatastore(e){const t=ba(e.databaseInfo.databaseId),n=ZT(e.databaseInfo);return sw(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,B){return new S0(n,s,i,o,B)}(this.localStore,this.datastore,e.asyncQueue,t=>Rf(this.syncEngine,t,0),function(){return hf.cn()?new hf:new QT}())}createSyncEngine(e,t){return function(s,i,o,B,c,u,h){const d=new tv(s,i,o,B,c,u);return h&&(d.kl=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const n=ie(t);K(Zt,"RemoteStore shutting down."),n.bu.add(5),await Xi(n),n.xu.shutdown(),n.vu.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}uc.provider={build:()=>new uc};/**
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
 */const nr="FirestoreClient";class pv{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=s,this.user=rt.UNAUTHENTICATED,this.clientId=Lc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{K(nr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(K(nr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Tu(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function OB(r,e){r.asyncQueue.verifyOperationInProgress(),K(nr,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Up(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Pf(r,e){r.asyncQueue.verifyOperationInProgress();const t=await gv(r);K(nr,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Tf(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Tf(e.remoteStore,s)),r._onlineComponents=e}async function gv(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){K(nr,"Using user provided OfflineComponentProvider");try{await OB(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;xt("Error using user provided cache. Falling back to memory cache: "+t),await OB(r,new ua)}}else K(nr,"Using default OfflineComponentProvider"),await OB(r,new Cv(void 0));return r._offlineComponents}async function rg(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(K(nr,"Using user provided OnlineComponentProvider"),await Pf(r,r._uninitializedComponentsProvider._online)):(K(nr,"Using default OnlineComponentProvider"),await Pf(r,new uc))),r._onlineComponents}function mv(r){return rg(r).then(e=>e.syncEngine)}async function Ev(r){const e=await rg(r),t=e.eventManager;return t.onListen=nv.bind(null,e.syncEngine),t.onUnlisten=iv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=rv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ov.bind(null,e.syncEngine),t}function _v(r,e,t={}){const n=new qn;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,B,c,u){const h=new J0({next:E=>{h.Mu(),o.enqueueAndForget(()=>W0(i,d)),E.fromCache&&c.source==="server"?u.reject(new j(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(E)},error:E=>u.reject(E)}),d=new Y0(B instanceof Bi?$A(B):B,h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return z0(i,d)}(await Ev(r),r.asyncQueue,e,t,n)),n.promise}function Dv(r,e){const t=new qn;return r.asyncQueue.enqueueAndForget(async()=>av(await mv(r),e,t)),t.promise}/**
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
 */let sg=class{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Iv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field($i("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Iv=class extends sg{data(){return super.data()}};/**
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
 */class yv{convertValue(e,t="none"){switch(Je(e)){case 0:return null;case 2:return e.booleanValue;case 3:if("mapValue"in e){if($n(e))return this.convertToInt32Value(e.mapValue);if(Lt(e))return this.convertToDecimal128Value(e.mapValue)}return Oe(e.integerValue||e.doubleValue);case 4:return this.convertTimestamp(e.timestampValue);case 6:return this.convertServerTimestamp(e,t);case 7:return e.stringValue;case 8:return"bytesValue"in e?this.convertBytes(Ar(e.bytesValue)):this.convertToBytesWithSubtype(e.mapValue);case 9:return this.convertReference(e.referenceValue);case 11:return this.convertGeoPoint(e.geoPointValue);case 13:return this.convertArray(e.arrayValue,t);case 15:return this.convertObject(e.mapValue,t);case 14:return this.convertVectorValue(e.mapValue);case 12:return this.convertToRegexValue(e.mapValue);case 10:return this.convertToBsonObjectId(e.mapValue);case 5:return this.convertToBsonTimestamp(e.mapValue);case 16:return ln.instance();case 1:return hn.instance();default:throw ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return br(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){const t=e.fields?.[_i].arrayValue?.values?.map(n=>Oe(n.doubleValue));return new gt(t)}convertToBsonObjectId(e){const t=e.fields?.[Di]?.stringValue??"";return new Wc(t)}convertToBytesWithSubtype(e){const t=e.fields?.[wa],n=t?.bytesValue;if(!n)throw new Error("Received incorrect bytesValue for Bytes with subtype");const s=Ar(n).toUint8Array();if(s.length===0)throw new Error("Received empty bytesValue for Bytes with subtype");const i=s[0],o=s.slice(1);return new At(Se.fromUint8Array(o),i)}convertToBsonTimestamp(e){const t=e.fields?.[Cr],n=Number(t?.mapValue?.fields?.[Zo]?.integerValue),s=Number(t?.mapValue?.fields?.[ea]?.integerValue);return new Qc(n,s)}convertToRegexValue(e){const t=e.fields?.[xn]?.mapValue?.fields?.[Yo]?.stringValue??"",n=e.fields?.[xn]?.mapValue?.fields?.[Xo]?.stringValue??"";return new eu(t,n)}convertToInt32Value(e){const t=Number(e.fields?.[Pr]?.integerValue);return new Zc(t)}convertToDecimal128Value(e){const t=e.fields?.[Qn]?.stringValue??"";return new $c(t)}convertGeoPoint(e){return new $t(Oe(e.latitude),Oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ki(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ss(e));default:return null}}convertTimestamp(e){const t=Wn(e);return new pe(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ce.fromString(e);Q(op(n),9688,{name:e});const s=new mi(n.get(1),n.get(3)),i=new Y(n.popFirst(5));return s.isEqual(t)||_n(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Tv(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}/**
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
 */const Sf="AsyncQueue";class Nf{constructor(e=Promise.resolve()){this.iE=[],this.sE=!1,this._E=[],this.oE=null,this.aE=!1,this.uE=!1,this.cE=[],this._r=new lp(this,"async_queue_retry"),this.lE=()=>{const n=NB();n&&K(Sf,"Visibility state changed to "+n.visibilityState),this._r.Xn()},this.EE=e;const t=NB();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lE)}get isShuttingDown(){return this.sE}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.hE(),this.TE(e)}enterRestrictedMode(e){if(!this.sE){this.sE=!0,this.uE=e||!1;const t=NB();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lE)}}enqueue(e){if(this.hE(),this.sE)return new Promise(()=>{});const t=new qn;return this.TE(()=>this.sE&&this.uE?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.iE.push(e),this.PE()))}async PE(){if(this.iE.length!==0){try{await this.iE[0](),this.iE.shift(),this._r.reset()}catch(e){if(!Es(e))throw e;K(Sf,"Operation failed with retryable error: "+e)}this.iE.length>0&&this._r.Yn(()=>this.PE())}}TE(e){const t=this.EE.then(()=>(this.aE=!0,e().catch(n=>{throw this.oE=n,this.aE=!1,_n("INTERNAL UNHANDLED ERROR: ",Of(n)),n}).then(n=>(this.aE=!1,n))));return this.EE=t,t}enqueueAfterDelay(e,t,n){this.hE(),this.cE.indexOf(e)>-1&&(t=0);const s=yu.createAndSchedule(this,e,t,n,i=>this.IE(i));return this._E.push(s),s}hE(){this.oE&&ee(47125,{RE:Of(this.oE)})}verifyOperationInProgress(){}async AE(){let e;do e=this.EE,await e;while(e!==this.EE)}VE(e){for(const t of this._E)if(t.timerId===e)return!0;return!1}fE(e){return this.AE().then(()=>{this._E.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this._E)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.AE()})}dE(e){this.cE.push(e)}IE(e){const t=this._E.indexOf(e);this._E.splice(t,1)}}function Of(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Ua extends Sa{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Nf,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Nf(e),this._firestoreClient=void 0,await e}}}function Mv(r,e){const t=typeof r=="object"?r:Wf(),n=typeof r=="string"?r:$o,s=fc(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=Yg("firestore");i&&Cw(s,...i)}return s}function ig(r){if(r._terminated)throw new j(F.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||wv(r),r._firestoreClient}function wv(r){const e=r._freezeSettings(),t=ow(r._databaseId,r._app?.options.appId||"",r._persistenceKey,r._app?.options.apiKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new pv(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(r._componentsProvider))}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av extends yv{constructor(e){super(),this.firestore=e}convertBytes(e){return new At(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,t)}}class bo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xr extends sg{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ho(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field($i("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Xr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Xr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Xr._jsonSchema={type:Fe("string",Xr._jsonSchemaVersion),bundleSource:Fe("string","DocumentSnapshot"),bundleName:Fe("string"),bundle:Fe("string")};class Ho extends Xr{data(e={}){return super.data(e)}}class Zr{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new bo(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Ho(this._firestore,this._userDataWriter,n.key,n,new bo(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(B=>{je(s._snapshot.query)?ic(s._snapshot.query):qc(s.query._query);const c=new Ho(s._firestore,s._userDataWriter,B.doc.key,B.doc,new bo(s._snapshot.mutatedKeys.has(B.doc.key),s._snapshot.fromCache),s.query.converter);return B.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(B=>i||B.type!==3).map(B=>{const c=new Ho(s._firestore,s._userDataWriter,B.doc.key,B.doc,new bo(s._snapshot.mutatedKeys.has(B.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return B.type!==0&&(u=o.indexOf(B.doc.key),o=o.delete(B.doc.key)),B.type!==1&&(o=o.add(B.doc),h=o.indexOf(B.doc.key)),{type:vv(B.type),doc:c,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Zr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Lc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function vv(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:r})}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zr._jsonSchemaVersion="firestore/querySnapshot/1.0",Zr._jsonSchema={type:Fe("string",Zr._jsonSchemaVersion),bundleSource:Fe("string","QuerySnapshot"),bundleName:Fe("string"),bundle:Fe("string")};/**
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
 */function Rv(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new j(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ru{}class og extends Ru{}function Gv(r,e,...t){let n=[];e instanceof Ru&&n.push(e),n=n.concat(t),function(i){const o=i.filter(c=>c instanceof Pu).length,B=i.filter(c=>c instanceof bu).length;if(o>1||o>0&&B>0)throw new j(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class bu extends og{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new bu(e,t,n)}_apply(e){const t=this._parse(e);return ag(e._query,t),new Or(e.firestore,e.converter,YB(e._query,t))}_parse(e){const t=pp(e.firestore);return function(i,o,B,c,u,h,d){let E;if(function(V,M){if(typeof V=="number"&&isNaN(V)&&M!=="=="&&M!=="!="&&M!=="array-contains")throw new Error("Invalid query. You can only perform '==' and '!=' comparisons on NaN.");if(V===null&&M!=="=="&&M!=="!="&&M!=="array-contains")throw new Error("Invalid query. You can only perform '==' and '!=' comparisons on Null.")}(d,h),u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new j(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Ff(d,h);const P=[];for(const V of d)P.push(Lf(c,i,V));E={arrayValue:{values:P}}}else E=Lf(c,i,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Ff(d,h),E=_w(B,o,d,h==="in"||h==="not-in");return Ge.create(u,h,E)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Pu extends Ru{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Pu(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:Vt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const B=i.getFlattenedFilters();for(const c of B)ag(o,c),o=YB(o,c)}(e._query,t),new Or(e.firestore,e.converter,YB(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Su extends og{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Su(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new j(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new j(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new bi(i,o)}(e._query,this._field,this._direction);return new Or(e.firestore,e.converter,hT(e._query,t))}}function Uv(r,e="asc"){const t=e,n=$i("orderBy",r);return Su._create(n,t)}function Lf(r,e,t){if(typeof(t=re(t))=="string"){if(t==="")throw new j(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!WC(e)&&t.indexOf("/")!==-1)throw new j(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Ce.fromString(t));if(!Y.isDocumentKey(n))throw new j(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Qh(r,new Y(n))}if(t instanceof Ue)return Qh(r,t._key);throw new j(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ya(t)}.`)}function Ff(r,e){if(!Array.isArray(r)||r.length===0)throw new j(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ag(r,e){const t=function(s,i){for(const o of s)for(const B of o.getFlattenedFilters())if(i.indexOf(B.op)>=0)return B.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new j(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Hv(r){r=rs(r,Or);const e=rs(r.firestore,Ua),t=ig(e),n=new Av(e);return Rv(r._query),_v(t,r._query).then(s=>new Zr(e,n,r,s))}function Jv(r,e,t){r=rs(r,Ue);const n=rs(r.firestore,Ua),s=Tv(r.converter,e,t),i=pp(n);return Bg(n,[Ew(i,"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,zt.none())])}function qv(r){return Bg(rs(r.firestore,Ua),[new Jc(r._key,zt.none())])}function Bg(r,e){const t=ig(r);return Dv(t,e)}const kf="@firebase/firestore",xf="4.18.0";(function(e,t=!0){Ry(ls),es(new Ir("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),B=new Ua(new jT(n.getProvider("auth-internal")),new WT(o,n.getProvider("app-check-internal")),xy(o,s),o);return i={useFetchStreams:t,...i},B._setSettings(i),B},"PUBLIC").setMultipleInstances(!0)),Gn(kf,xf,e),Gn(kf,xf,"esm2020")})();export{zD as R,ZI as a,Mv as b,Jv as c,Fv as d,kv as e,qv as f,Pv as g,Lv as h,hE as i,Hv as j,Sv as k,Uv as o,Gv as q,QD as s};
