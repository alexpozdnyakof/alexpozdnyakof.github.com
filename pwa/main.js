!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=75)}([function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"a",function(){return o}),n.d(e,"f",function(){return s}),n.d(e,"b",function(){return a}),n.d(e,"d",function(){return c}),n.d(e,"h",function(){return u}),n.d(e,"e",function(){return l}),n.d(e,"g",function(){return h});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function i(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var o=function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}function a(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}function c(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function u(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function l(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}function h(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(l(arguments[e]));return t}},function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n(0),i=n(12),o=n(24),s=n(3),a=n(20),c=n(6),u=n(14),l=function(t){function e(n,r,i){var s=t.call(this)||this;switch(s.syncErrorValue=null,s.syncErrorThrown=!1,s.syncErrorThrowable=!1,s.isStopped=!1,arguments.length){case 0:s.destination=o.a;break;case 1:if(!n){s.destination=o.a;break}if("object"==typeof n){n instanceof e?(s.syncErrorThrowable=n.syncErrorThrowable,s.destination=n,n.add(s)):(s.syncErrorThrowable=!0,s.destination=new h(s,n));break}default:s.syncErrorThrowable=!0,s.destination=new h(s,n,r,i)}return s}return r.c(e,t),e.prototype[a.a]=function(){return this},e.create=function(t,n,r){var i=new e(t,n,r);return i.syncErrorThrowable=!1,i},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(s.a),h=function(t){function e(e,n,r,s){var a,c=t.call(this)||this;c._parentSubscriber=e;var u=c;return Object(i.a)(n)?a=n:n&&(a=n.next,r=n.error,s=n.complete,n!==o.a&&(u=Object.create(n),Object(i.a)(u.unsubscribe)&&c.add(u.unsubscribe.bind(u)),u.unsubscribe=c.unsubscribe.bind(c))),c._context=u,c._next=a,c._error=r,c._complete=s,c}return r.c(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;c.a.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,n=c.a.useDeprecatedSynchronousErrorHandling;if(this._error)n&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)n?(e.syncErrorValue=t,e.syncErrorThrown=!0):Object(u.a)(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;Object(u.a)(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var n=function(){return t._complete.call(t._context)};c.a.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),c.a.useDeprecatedSynchronousErrorHandling)throw t;Object(u.a)(t)}},e.prototype.__tryOrSetError=function(t,e,n){if(!c.a.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,n)}catch(e){return c.a.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(Object(u.a)(e),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(l)},function(t,e,n){"use strict";var r=n(1),i=n(20),o=n(24),s=n(10),a=n(9);var c=n(6);n.d(e,"a",function(){return u});var u=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var s=this.operator,a=function(t,e,n){if(t){if(t instanceof r.a)return t;if(t[i.a])return t[i.a]()}return t||e||n?new r.a(t,e,n):new r.a(o.a)}(t,e,n);if(s?a.add(s.call(a,this.source)):a.add(this.source||c.a.useDeprecatedSynchronousErrorHandling&&!a.syncErrorThrowable?this._subscribe(a):this._trySubscribe(a)),c.a.useDeprecatedSynchronousErrorHandling&&a.syncErrorThrowable&&(a.syncErrorThrowable=!1,a.syncErrorThrown))throw a.syncErrorValue;return a},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){c.a.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),function(t){for(;t;){var e=t,n=e.closed,i=e.destination,o=e.isStopped;if(n||o)return!1;t=i&&i instanceof r.a?i:null}return!0}(t)?t.error(e):console.warn(e)}},t.prototype.forEach=function(t,e){var n=this;return new(e=l(e))(function(e,r){var i;i=n.subscribe(function(e){try{t(e)}catch(t){r(t),i&&i.unsubscribe()}},r,e)})},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[s.a]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:function(t){return t?1===t.length?t[0]:function(e){return t.reduce(function(t,e){return e(t)},e)}:a.a}(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=l(t))(function(t,n){var r;e.subscribe(function(t){return r=t},function(t){return n(t)},function(){return t(r)})})},t.create=function(e){return new t(e)},t}();function l(t){if(t||(t=c.a.Promise||Promise),!t)throw new Error("no Promise impl found");return t}},function(t,e,n){"use strict";var r=n(16),i=n(34),o=n(12);function s(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}s.prototype=Object.create(Error.prototype);var a=s;n.d(e,"a",function(){return c});var c=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var e;if(!this.closed){var n=this._parentOrParents,s=this._unsubscribe,c=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof t)n.remove(this);else if(null!==n)for(var l=0;l<n.length;++l)n[l].remove(this);if(Object(o.a)(s))try{s.call(this)}catch(t){e=t instanceof a?u(t.errors):[t]}if(Object(r.a)(c)){l=-1;for(var h=c.length;++l<h;){var p=c[l];if(Object(i.a)(p))try{p.unsubscribe()}catch(t){e=e||[],t instanceof a?e=e.concat(u(t.errors)):e.push(t)}}}if(e)throw new a(e)}},t.prototype.add=function(e){var n=e;if(!e)return t.EMPTY;switch(typeof e){case"function":n=new t(e);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){var r=n;(n=new t)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var i=n._parentOrParents;if(null===i)n._parentOrParents=this;else if(i instanceof t){if(i===this)return n;n._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return n;i.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[n]:o.push(n),n},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function u(t){return t.reduce(function(t,e){return t.concat(e instanceof a?e.errors:e)},[])}},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(0),i=n(1);function o(t,e){return function(n){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new s(t,e))}}var s=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new a(t,this.project,this.thisArg))},t}(),a=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.project=n,i.count=0,i.thisArg=r||i,i}return r.c(e,t),e.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(i.a)},function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return ut}),n.d(e,"b",function(){return G}),n.d(e,"c",function(){return _t}),n.d(e,"e",function(){return Pt}),n.d(e,"d",function(){return jt});var r=n(15),i=n(27),o=n(30),s=n(80),a=n(59),c=n(60),u=n(26),l=n(81),h=(n(76),n(31)),p=(n(77),n(4)),d=n(32),f=n(61),g=n(43),y=n(44),v=n(83),b=n(82),m=n(78),w=n(79),x=n(0);function _(t){return Array.isArray(t)}function k(t){return!!_(t)&&0===t.length}function S(t,e){return t.hasOwnProperty(e)}function O(t){return t.hasOwnProperty("active")}function E(t){return _(t)}function P(t){var e=t.active,n=t.ids,r=t.entities;return E(e)?function(t,e){var n=t.filter(function(t){return e.indexOf(t)>-1});return n.length===t.length?t:n}(e,n):!1===S(r,e)?null:e}function C(t,e){var n,r,i={};try{for(var o=Object(x.h)(Object.keys(t)),s=o.next();!s.done;s=o.next()){var a=s.value;i[a]=e(t[a])}}catch(t){n={error:t}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return i}function j(t,e){return void 0===e&&(e=!1),{type:2,payload:{name:t,initialState:e}}}!function(t){Object(x.c)(function(e){return t.call(this,e)||this},t)}(Error);var M={type:null,entityIds:null,skip:!1},N=!1;function R(t,e){A(t,e),N=!0}function A(t,e){!1===N&&(M.type=t,M.entityIds=e)}var L=new r.a,D=(L.asObservable(),new i.a(!1)),U=(D.asObservable(),{activeTransactions:0,batchTransaction:null});function I(){return U.activeTransactions>0}function F(t,e){void 0===e&&(e=void 0),I()||(U.batchTransaction=new r.a),U.activeTransactions++,D.next(!0);try{return t.apply(e)}finally{R("@Transaction"),0==--U.activeTransactions&&(U.batchTransaction.next(!0),U.batchTransaction.complete(),D.next(!1),L.next(!0))}}function q(){return function(t,e,n){var r=n.value;return n.value=function(){for(var t=this,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return F(function(){return r.apply(t,e)},this)},n}}function z(t){Object.freeze(t);var e="function"==typeof t,n=Object.prototype.hasOwnProperty;return Object.getOwnPropertyNames(t).forEach(function(r){!n.call(t,r)||e&&("caller"===r||"callee"===r||"arguments"===r)||null===t[r]||"object"!=typeof t[r]&&"function"!=typeof t[r]||Object.isFrozen(t[r])||z(t[r])}),t}var $="akitaConfig";function G(t){return function(e){e[$]={idKey:"id"};for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];"name"===i?e[$].storeName=t[i]:e[$][i]=t[i]}}}var H={resettable:!1};function V(){return H}function B(t){return null!=t&&""+t!="false"}function Y(t){return B(t)&&"Object"===t.constructor.name}function W(t){return"function"==typeof t}var Q=new s.a,K={},X="undefined"!=typeof window,J=void 0!==t&&void 0!==t.__runtimeVersion,Z=!X&&!J,tt=!0;function et(){return tt}var nt=function(){function t(t,e){void 0===e&&(e={}),this.options=e,this.inTransaction=!1,this.cache={active:new i.a(!1),ttl:null},this.onInit(t)}return t.prototype.setLoading=function(t){void 0===t&&(t=!1),t!==this._value().loading&&(et()&&A("Set Loading"),this._setState(function(e){return Object(x.a)({},e,{loading:t})}))},t.prototype.setHasCache=function(t){t!==this.cache.active.value&&this.cache.active.next(t)},t.prototype.setError=function(t){t!==this._value().error&&(et()&&A("Set Error"),this._setState(function(e){return Object(x.a)({},e,{error:t})}))},t.prototype._select=function(t){return this.store.asObservable().pipe(Object(p.a)(t),Object(d.a)())},t.prototype._value=function(){return this.storeValue},t.prototype._cache=function(){return this.cache.active},Object.defineProperty(t.prototype,"config",{get:function(){return this.constructor[$]||{}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"storeName",{get:function(){return this.config.storeName||this.options.storeName||this.options.name},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"deepFreeze",{get:function(){return this.config.deepFreezeFn||this.options.deepFreezeFn||z},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"cacheConfig",{get:function(){return this.config.cache||this.options.cache},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"resettable",{get:function(){return this.config.resettable||this.options.resettable},enumerable:!0,configurable:!0}),t.prototype._setState=function(t,e){if(void 0===e&&(e=!0),this.storeValue=tt?this.deepFreeze(t(this._value())):t(this._value()),!this.store)return this.store=new i.a(this.storeValue),void Q.next(j(this.storeName,!0));I()?this.handleTransaction():this.dispatch(this.storeValue,e)},t.prototype.reset=function(){var t=this;this.isResettable()?(et()&&A("Reset"),this._setState(function(){return Object.assign({},t._initialState)}),this.setHasCache(!1)):et()&&console.warn("You need to enable the reset functionality")},t.prototype.update=function(t){var e=this;et()&&A("Update"),this._setState(function(n){var r=W(t)?t(n):t,i=e.akitaPreUpdate(n,Object(x.a)({},n,r));return Y(n)?i:new n.constructor(i)})},t.prototype.updateStoreConfig=function(t){this.options=Object(x.a)({},this.options,t)},t.prototype.akitaPreUpdate=function(t,e){return e},t.prototype.ngOnDestroy=function(){this.destroy()},t.prototype.destroy=function(){Z||window.hmrEnabled||this!==K[this.storeName]||(delete K[this.storeName],Q.next({type:1,payload:{storeName:this.storeName}}),this.setHasCache(!1),this.cache.active.complete())},t.prototype.onInit=function(t){et()&&A("@@INIT"),K[this.storeName]=this,this._setState(function(){return t}),Q.next({type:0,payload:{store:this}}),this.isResettable()&&(this._initialState=t),et()&&function(t,e){t||console.error("@StoreConfig({ name }) is missing in "+e)}(this.storeName,this.constructor.name)},t.prototype.dispatch=function(t,e){void 0===e&&(e=!0),this.store.next(t),e&&(Q.next(j(this.storeName)),N=!1)},t.prototype.watchTransaction=function(){var t=this;(U.batchTransaction?U.batchTransaction.asObservable():Object(o.a)(!0)).subscribe(function(){t.inTransaction=!1,t.dispatch(t._value())})},t.prototype.isResettable=function(){return!1!==this.resettable&&(this.resettable||V().resettable)},t.prototype.handleTransaction=function(){this.inTransaction||(this.watchTransaction(),this.inTransaction=!0)},t}();function rt(t){return null==t}function it(t){return rt(t)?[]:Array.isArray(t)?t:[t]}var ot=function(){return{entities:{},ids:[],loading:!0,error:null}};function st(t){return!1===rt(t)}function at(t){return void 0===t}var ct={Set:0,Add:1,Update:2,Remove:3};ct[ct.Set]="Set",ct[ct.Add]="Add",ct[ct.Update]="Update",ct[ct.Remove]="Remove";var ut=function(t){function e(e,n){void 0===e&&(e={}),void 0===n&&(n={});var o=t.call(this,Object(x.a)({},ot(),e),n)||this;return o.options=n,o.updatedEntityIds=new i.a([]),o.entityActions=new r.a,o}var n;return Object(x.c)(e,t),Object.defineProperty(e.prototype,"updatedEntityIds$",{get:function(){return this.updatedEntityIds.asObservable()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectEntityAction$",{get:function(){return this.entityActions.asObservable()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"idKey",{get:function(){return this.config.idKey||this.options.idKey||"id"},enumerable:!0,configurable:!0}),e.prototype.set=function(t){var n=this;if(!rt(t)){et()&&A("Set Entity");var r=this.akitaPreAddEntity===e.prototype.akitaPreAddEntity;this._setState(function(e){return function(t){var e,n,r=t.state,i=t.entities,o=t.idKey,s=t.preAddEntity,a=t.isNativePreAdd;if(_(i)){var c=function(t,e,n){var r,i,o={entities:{},ids:[]};try{for(var s=Object(x.h)(t),a=s.next();!a.done;a=s.next()){var c=n(a.value);o.entities[c[e]]=c,o.ids.push(c[e])}}catch(t){r={error:t}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(r)throw r.error}}return o}(i,o,s);e=c.entities,n=c.ids}else!function(t){return t.entities&&t.ids}(i)?(e=a?i:C(i,s),n=Object.keys(e).map(function(t){return isNaN(t)?t:Number(t)})):(e=a?i.entities:C(i.entities,s),n=i.ids);var u=Object(x.a)({},r,{entities:e,ids:n,loading:!1});return O(r)&&(u.active=P(u)),u}({state:e,entities:t,idKey:n.idKey,preAddEntity:n.akitaPreAddEntity,isNativePreAdd:r})}),this.updateCache(),this.hasInitialUIState()&&this.handleUICreation(),this.entityActions.next({type:ct.Set,ids:this.ids})}},e.prototype.add=function(t,e){void 0===e&&(e={loading:!1});var n=it(t);if(!k(n)){et()&&A("Add Entity");var r=function(t){var e,n,r=t.state,i=t.entities,o=t.idKey,s=t.options,a=void 0===s?{}:s,c=t.preAddEntity,u={},l=[],h=!1;try{for(var p=Object(x.h)(i),d=p.next();!d.done;d=p.next()){var f=d.value;if(!1===S(r.entities,f[o])){var g=c(f),y=g[o];u[y]=g,a.prepend?l.unshift(y):l.push(y),h=!0}}}catch(t){e={error:t}}finally{try{d&&!d.done&&(n=p.return)&&n.call(p)}finally{if(e)throw e.error}}return h?{newState:Object(x.a)({},r,{entities:Object(x.a)({},r.entities,u),ids:a.prepend?Object(x.g)(l,r.ids):Object(x.g)(r.ids,l)}),newIds:l}:null}({state:this._value(),preAddEntity:this.akitaPreAddEntity,entities:n,idKey:this.idKey,options:e});r&&(this._setState(function(){return Object(x.a)({},r.newState,{loading:e.loading})}),this.hasInitialUIState()&&this.handleUICreation(!0),this.entityActions.next({type:ct.Add,ids:r.newIds}))}},e.prototype.update=function(e,n){var r=this;if(at(n))t.prototype.update.call(this,e);else{var i;k(i=W(e)?this.ids.filter(function(t){return e(r.entities[t])}):rt(e)?this.ids:it(e))||(et()&&A("Update Entity",i),this._setState(function(t){return function(t){var e,n,r,i=t.state,o=t.ids,s=t.idKey,a=t.newStateOrFn,c=t.preUpdateEntity,u={},l=!1;try{for(var h=Object(x.h)(o),p=h.next();!p.done;p=h.next()){var d=p.value;if(!1!==S(i.entities,d)){var f,g=i.entities[d],y=W(a)?a(g):a,v=y.hasOwnProperty(s)&&y[s]!==g[s];r=d,v&&(l=!0,r=y[s]);var b=Object(x.a)({},g,y);f=Y(g)?b:Y(y)?new g.constructor(b):new y.constructor(b),u[r]=c(g,f)}}}catch(t){e={error:t}}finally{try{p&&!p.done&&(n=h.return)&&n.call(h)}finally{if(e)throw e.error}}var m=i.ids,w=i.entities;if(l){var _=Object(x.e)(o,1)[0],k=i.entities,O=_;k[O],w=Object(x.f)(k,["symbol"==typeof O?O:O+""]),m=i.ids.map(function(t){return t===_?r:t})}return Object(x.a)({},i,{entities:Object(x.a)({},w,u),ids:m})}({idKey:r.idKey,ids:i,preUpdateEntity:r.akitaPreUpdateEntity,state:t,newStateOrFn:n})}),this.updatedEntityIds.next(i),this.entityActions.next({type:ct.Update,ids:i}))}},e.prototype.upsert=function(t,e,n){var r=this;void 0===n&&(n={});var i=it(t),o=function(t){return function(e){return S(r.entities,e)===t}},s=W(n.baseClass),a=i.filter(o(!0)),c=i.filter(o(!1)).map(function(t){var i,o=W(e)?e({}):e,a=Object(x.a)({},o,((i={})[r.idKey]=t,i));return s?new n.baseClass(a):a});this.update(a,e),this.add(c),et()&&R("Upsert Entity")},e.prototype.upsertMany=function(t,e){var n,r;void 0===e&&(e={});var i=[],o=[],s={};try{for(var a=Object(x.h)(t),c=a.next();!c.done;c=a.next()){var u=c.value,l=u[this.idKey];if(S(this.entities,l))s[l]=Object(x.a)({},this._value().entities[l],u),o.push(l);else{var h=e.baseClass?new e.baseClass(u):u;i.push(l),s[l]=h}}}catch(t){n={error:t}}finally{try{c&&!c.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}et()&&R("Upsert Many"),this._setState(function(t){return Object(x.a)({},t,{ids:i.length?Object(x.g)(t.ids,i):t.ids,entities:Object(x.a)({},t.entities,s),loading:!!e.loading})}),o.length&&this.updatedEntityIds.next(o),o.length&&this.entityActions.next({type:ct.Update,ids:o}),i.length&&this.entityActions.next({type:ct.Add,ids:i})},e.prototype.replace=function(t,e){var n,r,i=it(t);if(!k(i)){var o={};try{for(var s=Object(x.h)(i),a=s.next();!a.done;a=s.next()){var c=a.value;e[this.idKey]=c,o[c]=e}}catch(t){n={error:t}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}et()&&A("Replace Entity",t),this._setState(function(t){return Object(x.a)({},t,{entities:Object(x.a)({},t.entities,o)})})}},e.prototype.remove=function(t){var e=this;if(!k(this.ids)){var n,r=st(t);k(n=W(t)?this.ids.filter(function(n){return t(e.entities[n])}):r?it(t):null)||(et()&&A("Remove Entity",n),this._setState(function(t){return function(t){var e,n,r=t.state,i=t.ids;if(rt(i))return function(t){return Object(x.a)({},t,{entities:{},ids:[],active:E(t.active)?[]:null})}(r);var o=r.entities,s={};try{for(var a=Object(x.h)(r.ids),c=a.next();!c.done;c=a.next()){var u=c.value;!1===i.includes(u)&&(s[u]=o[u])}}catch(t){e={error:t}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}var l=Object(x.a)({},r,{entities:s,ids:r.ids.filter(function(t){return!1===i.includes(t)})});return O(r)&&(l.active=P(l)),l}({state:t,ids:n})}),null===n&&this.setHasCache(!1),this.handleUIRemove(n),this.entityActions.next({type:ct.Remove,ids:n}))}},e.prototype.updateActive=function(t){var e=it(this.active);et()&&A("Update Active",e),this.update(e,t)},e.prototype.setActive=function(t){var e=function(t,e,n){var r;if(_(t))r=t;else if(function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}(t)){if(rt(n))return;t=Object.assign({wrap:!0},t);var i=e.indexOf(n);if(t.prev){var o=0===i;if(o&&!t.wrap)return;r=o?e[e.length-1]:e[i-1]}else if(t.next){var s=e.length===i+1;if(s&&!t.wrap)return;r=s?e[0]:e[i+1]}}else{if(t===n)return;r=t}return r}(t,this.ids,this.active);void 0!==e&&(et()&&A("Set Active",e),this._setActive(e))},e.prototype.addActive=function(t){var e=this,n=it(t);k(n)||n.every(function(t){return e.active.indexOf(t)>-1})||(et()&&A("Add Active",t),this._setState(function(t){var e=Array.from(new Set(Object(x.g)(t.active,n)));return Object(x.a)({},t,{active:e})}))},e.prototype.removeActive=function(t){var e=this,n=it(t);k(n)||n.some(function(t){return e.active.indexOf(t)>-1})&&(et()&&A("Remove Active",t),this._setState(function(t){return Object(x.a)({},t,{active:t.active.filter(function(t){return-1===n.indexOf(t)})})}))},e.prototype.toggleActive=function(t){var e=this,n=it(t),r=function(t){return function(n){return e.active.includes(n)===t}},i=n.filter(r(!0)),o=n.filter(r(!1));this.removeActive(i),this.addActive(o),et()&&R("Toggle Active")},e.prototype.createUIStore=function(t,e){void 0===t&&(t={}),void 0===e&&(e={});var n={name:"UI/"+this.storeName,idKey:this.idKey};return this.ui=new lt(t,Object(x.a)({},n,e)),this.ui},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.ui instanceof e&&this.ui.destroy(),this.updatedEntityIds.complete(),this.entityActions.complete()},e.prototype.akitaPreUpdateEntity=function(t,e){return e},e.prototype.akitaPreAddEntity=function(t){return t},Object.defineProperty(e.prototype,"ids",{get:function(){return this._value().ids},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"entities",{get:function(){return this._value().entities},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"active",{get:function(){return this._value().active},enumerable:!0,configurable:!0}),e.prototype._setActive=function(t){this._setState(function(e){return Object(x.a)({},e,{active:t})})},e.prototype.updateCache=function(){var t=this;this.setHasCache(!0);var e=this.cacheConfig&&this.cacheConfig.ttl;e&&(null!==this.cache.ttl&&clearTimeout(this.cache.ttl),this.cache.ttl=setTimeout(function(){return t.setHasCache(!1)},e))},e.prototype.handleUICreation=function(t){var e=this;void 0===t&&(t=!1);var n,r=this.ids,i=W(this.ui._akitaCreateEntityFn),o=function(t){var n,r=e.entities[t],o=i?e.ui._akitaCreateEntityFn(r):e.ui._akitaCreateEntityFn;return Object(x.a)(((n={})[e.idKey]=r[e.idKey],n),o)};n=t?this.ids.filter(function(t){return at(e.ui.entities[t])}).map(o):r.map(o),t?this.ui.add(n):this.ui.set(n)},e.prototype.hasInitialUIState=function(){return this.hasUIStore()&&!1===at(this.ui._akitaCreateEntityFn)},e.prototype.handleUIRemove=function(t){this.hasUIStore()&&this.ui.remove(t)},e.prototype.hasUIStore=function(){return this.ui instanceof lt},Object(x.b)([q(),Object(x.d)("design:type",Function),Object(x.d)("design:paramtypes",[Object,Object,Object]),Object(x.d)("design:returntype",void 0)],e.prototype,"upsert",null),Object(x.b)([q(),Object(x.d)("design:type",Function),Object(x.d)("design:paramtypes",["function"==typeof(n="undefined"!=typeof T&&T)?n:Object]),Object(x.d)("design:returntype",void 0)],e.prototype,"toggleActive",null),e}(nt),lt=function(t){function e(e,n){return void 0===e&&(e={}),void 0===n&&(n={}),t.call(this,e,n)||this}return Object(x.c)(e,t),e.prototype.setInitialEntityState=function(t){this._akitaCreateEntityFn=t},e}(ut);function ht(t){return"string"==typeof t}var pt=function(){function t(t){this.store=t,this.__store__=t}return t.prototype.select=function(t){var e;return e=W(t)?t:ht(t)?function(e){return e[t]}:function(t){return t},this.store._select(e)},t.prototype.selectLoading=function(){return this.select(function(t){return t.loading})},t.prototype.selectError=function(){return this.select(function(t){return t.error})},t.prototype.getValue=function(){return this.store._value()},t.prototype.selectHasCache=function(){return this.store._cache().asObservable()},t.prototype.getHasCache=function(){return this.store._cache().value},Object.defineProperty(t.prototype,"config",{get:function(){return this.constructor.akitaQueryConfig},enumerable:!0,configurable:!0}),t}(),dt={ASC:"asc",DESC:"desc"};var ft=function(t){function e(e,n){void 0===n&&(n={});var r=t.call(this,e)||this;return r.options=n,r.__store__=e,r}return Object(x.c)(e,t),e.prototype.selectAll=function(t){var e=this;return void 0===t&&(t={asObject:!1}),this.select(function(t){return t.entities}).pipe(Object(p.a)(function(){return e.getAll(t)}))},e.prototype.getAll=function(t){return void 0===t&&(t={asObject:!1,filterBy:void 0,limitTo:void 0}),t.asObject?function(t,e){var n={},r=e.filterBy,i=e.limitTo,o=t.ids,s=t.entities;if(!r&&!i)return s;var a=!1===rt(i);if(r&&a)for(var c=0,u=function(t,e){if(c===i)return"break";var a=o[t],u=s[a];it(r).every(function(e){return e(u,t)})&&(n[a]=u,c++)},l=0,h=o.length;l<h&&"break"!==u(l);l++);else{var p=Math.min(i||o.length,o.length),d=function(t){var e=o[t],i=s[e];if(!r)return n[e]=i,"continue";it(r).every(function(e){return e(i,t)})&&(n[e]=i)};for(l=0;l<p;l++)d(l)}return n}(this.getValue(),t):(function(t,e){t.sortBy=t.sortBy||e&&e.sortBy,t.sortByOrder=t.sortByOrder||e&&e.sortByOrder}(t,this.config||this.options),function(t,e){for(var n=[],r=t.ids,i=t.entities,o=e.filterBy,s=e.limitTo,a=e.sortBy,c=e.sortByOrder,u=function(t){var e=i[r[t]];if(!o)return n.push(e),"continue";it(o).every(function(n){return n(e,t)})&&n.push(e)},l=0;l<r.length;l++)u(l);if(a){var h=W(a)?a:function(t,e){return void 0===e&&(e=dt.ASC),function(n,r){if(!n.hasOwnProperty(t)||!r.hasOwnProperty(t))return 0;var i="string"==typeof n[t]?n[t].toUpperCase():n[t],o="string"==typeof r[t]?r[t].toUpperCase():r[t],s=0;return i>o?s=1:i<o&&(s=-1),e==dt.DESC?-1*s:s}}(a,c);n=n.sort(function(e,n){return h(e,n,t)})}var p=Math.min(s||n.length,n.length);return p===n.length?n:n.slice(0,p)}(this.getValue(),t))},e.prototype.selectMany=function(t,e){var n=this;if(!t||!t.length)return Object(o.a)([]);var r=t.map(function(t){return n.selectEntity(t,e)});return Object(a.a)(r).pipe(Object(p.a)(function(t){return t.filter(Boolean)}),Object(f.a)(0))},e.prototype.selectEntity=function(t,e){var n=t;return W(t)&&(n=function(t,e){var n,r;try{for(var i=Object(x.h)(Object.keys(e)),o=i.next();!o.done;o=i.next()){var s=o.value;if(!0===t(e[s]))return s}}catch(t){n={error:t}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}(t,this.getValue().entities)),this.select(function(t){return t.entities}).pipe(Object(p.a)(function(t,e){return function(n){var r=n[t];if(!at(r))return e?ht(e)?r[e]:e(r):r}}(n,e)),Object(d.a)())},e.prototype.getEntity=function(t){return this.getValue().entities[t]},e.prototype.selectActiveId=function(){return this.select(function(t){return t.active})},e.prototype.getActiveId=function(){return this.getValue().active},e.prototype.selectActive=function(t){var e=this;return _(this.getActive())?this.selectActiveId().pipe(Object(h.a)(function(n){return e.selectMany(n,t)})):this.selectActiveId().pipe(Object(h.a)(function(n){return e.selectEntity(n,t)}))},e.prototype.getActive=function(){var t=this,e=this.getActiveId();return _(e)?e.map(function(e){return t.getValue().entities[e]}):B(e)?this.getEntity(e):void 0},e.prototype.selectCount=function(t){var e=this;return this.select(function(t){return t.entities}).pipe(Object(p.a)(function(){return e.getCount(t)}))},e.prototype.getCount=function(t){return W(t)?this.getAll().filter(t).length:this.getValue().ids.length},e.prototype.selectLast=function(t){return this.selectAt(function(t){return t[t.length-1]},t)},e.prototype.selectFirst=function(t){return this.selectAt(function(t){return t[0]},t)},e.prototype.selectUpdatedEntityIds=function(){return this.store.updatedEntityIds$},e.prototype.selectEntityAction=function(t){return at(t)?this.store.selectEntityAction$:this.store.selectEntityAction$.pipe(Object(g.a)(function(e){return e.type===t}),Object(p.a)(function(t){return t.ids}))},e.prototype.hasEntity=function(t){var e=this;return rt(t)?this.getValue().ids.length>0:W(t)?this.getAll().some(t):_(t)?t.every(function(t){return t in e.getValue().entities}):t in this.getValue().entities},e.prototype.hasActive=function(t){var e=this.getValue().active;return Array.isArray(e)?st(t)?e.includes(t):e.length>0:st(e)},e.prototype.createUIQuery=function(){this.ui=new gt(this.__store__.ui)},e.prototype.selectAt=function(t,e){var n=this;return this.select(function(t){return t.ids}).pipe(Object(p.a)(t),Object(d.a)(),Object(h.a)(function(t){return n.selectEntity(t,e)}))},e}(pt),gt=function(t){function e(e){return t.call(this,e)||this}return Object(x.c)(e,t),e}(ft),yt=function(t){return t.pipe(Object(g.a)(function(t){return null!=t}))};function vt(t,e,n){var r=e.split(".");if(1===r.length)return n;t=Object(x.a)({},t);var i=r.length-2;return e.split(".").slice(1).reduce(function(t,e,r){return t[e]=r===i?n:Object(x.a)({},t[e]),t&&t[e]},t),t}new(function(){function t(){}return t.prototype.getStoresSnapshot=function(t){void 0===t&&(t=[]);for(var e={},n=t.length>0?t:Object.keys(K),r=0;r<n.length;r++){var i=n[r];e[i]=K[i]._value()}return e},t.prototype.setStoresSnapshot=function(t,e){void 0===e&&(e={skipStorageUpdate:!1}),e.skipStorageUpdate;var n=t;ht(t)&&(n=JSON.parse(n));for(var r=function(t,e){var r=e[t];K[r]&&K[r]._setState(function(){return n[r]})},i=0,o=Object.keys(n);i<o.length;i++)r(i,o);e.skipStorageUpdate},t}());var bt,mt,wt=function(){function t(t,e){this.query=t,e&&e.resetFn&&V().resettable&&this.onReset(e.resetFn)}return t.prototype.getQuery=function(){return this.query},t.prototype.getStore=function(){return this.getQuery().__store__},t.prototype.isEntityBased=function(t){return B(t)},t.prototype.selectSource=function(t){return this.isEntityBased(t)?this.getQuery().selectEntity(t).pipe(yt):this.getQuery().select(function(t){return t})},t.prototype.getSource=function(t){return this.isEntityBased(t)?this.getQuery().getEntity(t):this.getQuery().getValue()},t.prototype.updateStore=function(t,e){this.isEntityBased(e)?this.getStore().update(e,t):this.getStore()._setState(function(e){return Object(x.a)({},e,t)})},t.prototype.onReset=function(t){var e=this,n=this.getStore().reset;this.getStore().reset=function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];setTimeout(function(){n.apply(e.getStore(),r),t()})}},t}(),xt={pagesControls:!1,range:!1,startWith:1,cacheTimeout:void 0,clearStoreWithCache:!0};function _t(t,e){if(void 0===e&&(e={}),!Z&&window.__REDUX_DEVTOOLS_EXTENSION__){bt&&bt.unsubscribe(),mt&&mt(),t&&t.run||((t=t||{}).run=function(t){return t()},e=t);var n=Object.assign({},{name:"Akita",shallow:!0},e),r=window.__REDUX_DEVTOOLS_EXTENSION__.connect(n),i={};bt=Q.subscribe(function(t){var n;if(1===t.type){var o=t.payload.storeName;return delete i[o],void r.send({type:"["+o+"] - Delete Store"},i)}if(2===t.type){var s=M.type,a=M.entityIds;if(M.skip)return void function(t){void 0===t&&(t=!0),M.skip=t}(!1);var c=K[t.payload.name];if(!c)return;if(!1===e.shallow&&i[t.payload.name]&&JSON.stringify(c._value())===JSON.stringify(i[t.payload.name]))return;i=Object(x.a)({},i,((n={})[t.payload.name]=c._value(),n)),o=function(t){return t&&t.charAt(0).toUpperCase()+t.slice(1)}(t.payload.name);var u=st(a)?"["+o+"] - "+s+" (ids: "+a+")":"["+o+"] - "+s;e.logTrace&&(console.group(u),console.trace(),console.groupEnd()),r.send({type:u},i)}}),mt=r.subscribe(function(e){if("ACTION"===e.type){var n=Object(x.e)(e.payload.split("."),1)[0];K[n]&&t.run(function(){var t=e.payload.replace(n,"this['"+n+"']");try{new Function(""+t).call(K)}catch(t){console.warn("Unknown Method ☹️")}})}if("DISPATCH"===e.type){if("COMMIT"===e.payload.type)return void r.init(i);if(e.state)for(var o=JSON.parse(e.state),s=function(e,n){var r=n[e];K[r]&&t.run(function(){K[r]._setState(function(){return o[r]},!1)})},a=0,c=Object.keys(o);a<c.length;a++)s(a,c)}})}}(function(t){function e(e,n){void 0===n&&(n={});var r=t.call(this,e,{resetFn:function(){r.initial=!1,r.destroy({clearCache:!0,currentPage:1})}})||this;r.query=e,r.config=n,r.metadata=new Map,r.pages=new Map,r.pagination={currentPage:1,perPage:0,total:0,lastPage:0,data:[]},r.initial=!0,r.isLoading$=r.query.selectLoading().pipe(Object(v.a)(0)),r.config=Object.assign(xt,n);var o=r.config,s=o.startWith,a=o.cacheTimeout;return r.page=new i.a(s),Object(c.a)(a)&&(r.clearCacheSubscription=a.subscribe(function(t){return r.clearCache()})),r}Object(x.c)(e,t),Object.defineProperty(e.prototype,"pageChanges",{get:function(){return this.page.asObservable()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentPage",{get:function(){return this.pagination.currentPage},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isFirst",{get:function(){return 1===this.currentPage},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isLast",{get:function(){return this.currentPage===this.pagination.lastPage},enumerable:!0,configurable:!0}),e.prototype.withControls=function(){return this.config.pagesControls=!0,this},e.prototype.withRange=function(){return this.config.range=!0,this},e.prototype.setLoading=function(t){void 0===t&&(t=!0),this.getStore().setLoading(t)},e.prototype.update=function(t){this.pagination=t,this.addPage(t.data)},e.prototype.addPage=function(t){var e=this;this.pages.set(this.currentPage,{ids:t.map(function(t){return t[e.getStore().idKey]})}),this.getStore().add(t)},e.prototype.clearCache=function(t){void 0===t&&(t={}),this.initial||(R("@Pagination - Clear Cache"),!1!==t.clearStore&&(this.config.clearStoreWithCache||t.clearStore)&&this.getStore().remove(),this.pages=new Map,this.metadata=new Map),this.initial=!1},e.prototype.clearPage=function(t){this.pages.delete(t)},e.prototype.destroy=function(t){var e=void 0===t?{}:t,n=e.clearCache,r=e.currentPage;this.clearCacheSubscription&&this.clearCacheSubscription.unsubscribe(),n&&this.clearCache(),at(r)||this.setPage(r),this.initial=!0},e.prototype.isPageActive=function(t){return this.currentPage===t},e.prototype.setPage=function(t){t===this.currentPage&&this.hasPage(t)||this.page.next(this.pagination.currentPage=t)},e.prototype.nextPage=function(){this.currentPage!==this.pagination.lastPage&&this.setPage(this.pagination.currentPage+1)},e.prototype.prevPage=function(){this.pagination.currentPage>1&&this.setPage(this.pagination.currentPage-1)},e.prototype.setLastPage=function(){this.setPage(this.pagination.lastPage)},e.prototype.setFirstPage=function(){this.setPage(1)},e.prototype.hasPage=function(t){return this.pages.has(t)},e.prototype.getPage=function(t){var e=this,n=this.pagination.currentPage;return this.hasPage(n)?this.selectPage(n):(this.setLoading(!0),Object(u.a)(t()).pipe(Object(h.a)(function(t){return n=t.currentPage,F(function(){e.setLoading(!1),e.update(t)}),e.selectPage(n)})))},e.prototype.getQuery=function(){return this.query},e.prototype.refreshCurrentPage=function(){!1===rt(this.currentPage)&&(this.clearPage(this.currentPage),this.setPage(this.currentPage))},e.prototype.getFrom=function(){return this.isFirst?1:(this.currentPage-1)*this.pagination.perPage+1},e.prototype.getTo=function(){return this.isLast?this.pagination.total:this.currentPage*this.pagination.perPage},e.prototype.selectPage=function(t){var e=this;return this.query.selectAll({asObject:!0}).pipe(Object(b.a)(1),Object(p.a)(function(n){var r=Object(x.a)({},e.pagination,{data:e.pages.get(t).ids.map(function(t){return n[t]})}),i=e.config,o=i.range,s=i.pagesControls;return isNaN(e.pagination.total)&&(1===r.lastPage?r.total=r.data?r.data.length:0:r.total=r.perPage*r.lastPage,e.pagination.total=r.total),o&&(r.from=e.getFrom(),r.to=e.getTo()),s&&(r.pageControls=function(t,e){for(var n=Math.ceil(t/e),r=[],i=0;i<n;i++)r.push(i+1);return r}(e.pagination.total,e.pagination.perPage)),r}))},Object(x.b)([function(t,e,n){var r=n.value;return n.value=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return R("@Pagination - New Page",void 0),r.apply(this,t)},n},Object(x.d)("design:type",Function),Object(x.d)("design:paramtypes",[Object]),Object(x.d)("design:returntype",void 0)],e.prototype,"update",null)})(wt),function(t){function e(e,n,r){void 0===r&&(r={});var i=t.call(this,e)||this;return i.query=e,i.factoryFnOrPath=n,i.params=r,i.params=Object(x.a)({debounceTime:300,formKey:"akitaForm",emitEvent:!1,arrControlFactory:function(t){return i.builder.control(t)}},r),i.isRootKeys=!1===B(n),i.isKeyBased=ht(n)||i.isRootKeys,i}Object(x.c)(e,t),e.prototype.setForm=function(t,e){return this.form=t,this.builder=e,this.activate(),this},e.prototype.reset=function(t){var e,n,r=this;n=t||(this.isKeyBased?this.initialValue:this.factoryFnOrPath()),this.isKeyBased&&Object.keys(this.initialValue).forEach(function(t){var e=r.initialValue[t];if(Array.isArray(e)&&r.builder){var n=r.form.controls[t];r.cleanArray(n),e.forEach(function(e,n){r.form.get(t).insert(n,r.params.arrControlFactory(e))})}}),this.form.patchValue(n,{emitEvent:this.params.emitEvent});var i=this.isKeyBased?vt(this.getQuery().getValue(),this.getStore().storeName+"."+this.factoryFnOrPath,n):((e={})[this.params.formKey]=n,e);this.updateStore(i)},e.prototype.cleanArray=function(t){for(;0!==t.length;)t.removeAt(0)},e.prototype.resolveInitialValue=function(t,e){var n=this;if(t)return Object.keys(t).reduce(function(t,r){var i=e[r];if(Array.isArray(i)&&n.builder){var o=n.params.arrControlFactory;n.cleanArray(n.form.get(r)),i.forEach(function(t,e){n.form.get(r).insert(e,o(t))})}return t[r]=e[r],t},{})},e.prototype.activate=function(){var t,e,n=this;if(this.isKeyBased)if(this.isRootKeys)this.initialValue=this.resolveInitialValue(this.form.value,this.getQuery().getValue()),this.form.patchValue(this.initialValue,{emitEvent:this.params.emitEvent});else{e=this.getStore().storeName+"."+this.factoryFnOrPath;var r=function(t,e){return 1===e.split(".").length?t:e.split(".").slice(1).join(".").split(".").reduce(function(t,e){return t&&t[e]},t)}(this.getQuery().getValue(),e);this.initialValue=this.resolveInitialValue(r,r),this.form.patchValue(this.initialValue,{emitEvent:this.params.emitEvent})}else{this.getQuery().getValue()[this.params.formKey]||(R("@PersistNgFormPlugin activate"),this.updateStore(((t={})[this.params.formKey]=this.factoryFnOrPath(),t)));var i=this.getQuery().getValue()[this.params.formKey];this.form.patchValue(i)}this.formChanges=this.form.valueChanges.pipe(Object(m.a)(this.params.debounceTime)).subscribe(function(t){var r;R("@PersistForm - Update"),r=n.isKeyBased?n.isRootKeys?function(e){return Object(x.a)({},e,t)}:function(n){return vt(n,e,t)}:function(){var e;return(e={})[n.params.formKey]=t,e},n.updateStore(r(n.getQuery().getValue()))})},e.prototype.destroy=function(){this.formChanges&&this.formChanges.unsubscribe(),this.form=null,this.builder=null}}(wt);var kt=function(){function t(t,e){this.query=t,this.entityIds=e,this.entities=new Map}return t.prototype.getEntity=function(t){return this.entities.get(t)},t.prototype.hasEntity=function(t){return this.entities.has(t)},t.prototype.removeEntity=function(t){return this.destroy(t),this.entities.delete(t)},t.prototype.createEntity=function(t,e){return this.entities.set(t,e)},t.prototype.getIds=function(){return at(this.entityIds)?this.query.getValue().ids:it(this.entityIds)},t.prototype.resolvedIds=function(t){return at(t)?this.getIds():it(t)},t.prototype.rebase=function(t,e){var n=this;if(void 0===e&&(e={}),B(t))if(at(this.entityIds)){for(var r=0,i=t.length;r<i;r++){var o=t[r];if(!1===this.hasEntity(o)){W(e.beforeAdd)&&e.beforeAdd(o);var s=this.instantiatePlugin(o);this.entities.set(o,s),W(e.afterAdd)&&e.afterAdd(s)}}this.entities.forEach(function(r,i){-1===t.indexOf(i)&&(W(e.beforeRemove)&&e.beforeRemove(r),n.removeEntity(i))})}else{var a=it(this.entityIds);for(r=0,i=a.length;r<i;r++)o=a[r],t.indexOf(o)>-1&&!1===this.hasEntity(o)?(W(e.beforeAdd)&&e.beforeAdd(o),s=this.instantiatePlugin(o),this.entities.set(o,s),W(e.afterAdd)&&e.afterAdd(s)):this.entities.forEach(function(r,i){-1===t.indexOf(i)&&!0===n.hasEntity(i)&&(W(e.beforeRemove)&&e.beforeRemove(r),n.removeEntity(i))})}else this.getIds().forEach(function(t){n.hasEntity(t)||n.createEntity(t,n.instantiatePlugin(t))})},t.prototype.selectIds=function(){return this.query.select(function(t){return t.ids})},t.prototype.activate=function(t){this.rebase(t)},t.prototype.forEachId=function(t,e){for(var n=this.resolvedIds(t),r=0,i=n.length;r<i;r++){var o=n[r];this.hasEntity(o)&&e(this.getEntity(o))}},t}(),St=function(t){function e(e,n,r){void 0===n&&(n={});var i=t.call(this,e,{resetFn:function(){return i.clear()}})||this;return i.query=e,i.params=n,i._entityId=r,i.skip=!1,i.history={past:[],present:null,future:[]},i.skipUpdate=!1,n.maxAge=B(n.maxAge)?n.maxAge:10,n.comparator=n.comparator||function(t,e){return!0},i.activate(),i}return Object(x.c)(e,t),Object.defineProperty(e.prototype,"hasPast",{get:function(){return this.history.past.length>0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasFuture",{get:function(){return this.history.future.length>0},enumerable:!0,configurable:!0}),e.prototype.activate=function(){var t=this;this.history.present=this.getSource(this._entityId),this.subscription=this.selectSource(this._entityId).pipe(Object(w.a)()).subscribe(function(e){var n=Object(x.e)(e,2),r=n[0],i=n[1];if(t.skip)t.skip=!1;else{var o=t.params.comparator(r,i);!t.skipUpdate&&o&&(t.history.past.length===t.params.maxAge&&(t.history.past=t.history.past.slice(1)),t.history.past=Object(x.g)(t.history.past,[r]),t.history.present=i)}})},e.prototype.undo=function(){if(this.history.past.length>0){var t=this.history,e=t.past,n=t.present,r=e[e.length-1];this.history.past=e.slice(0,e.length-1),this.history.present=r,this.history.future=Object(x.g)([n],this.history.future),this.update()}},e.prototype.redo=function(){if(this.history.future.length>0){var t=this.history,e=t.past,n=t.present,r=this.history.future[0],i=this.history.future.slice(1);this.history.past=Object(x.g)(e,[n]),this.history.present=r,this.history.future=i,this.update("Redo")}},e.prototype.jumpToPast=function(t){if(!(t<0||t>=this.history.past.length)){var e=this.history,n=e.past,r=e.future,i=n.slice(0,t),o=Object(x.g)(n.slice(t+1),r),s=n[t];this.history.past=i,this.history.present=s,this.history.future=o,this.update()}},e.prototype.jumpToFuture=function(t){if(!(t<0||t>=this.history.future.length)){var e=this.history,n=e.past,r=e.future,i=Object(x.g)(n,r.slice(0,t)),o=r[t],s=r.slice(t+1);this.history.past=i,this.history.present=o,this.history.future=s,this.update("Redo")}},e.prototype.clear=function(t){this.history=W(t)?t(this.history):{past:[],present:null,future:[]}},e.prototype.destroy=function(t){void 0===t&&(t=!1),t&&this.clear(),this.subscription.unsubscribe()},e.prototype.ignoreNext=function(){this.skip=!0},e.prototype.update=function(t){void 0===t&&(t="Undo"),this.skipUpdate=!0,R("@StateHistory - "+t),this.updateStore(this.history.present,this._entityId),this.skipUpdate=!1},e}(wt),Ot=(function(t){function e(e,n){void 0===n&&(n={});var r=t.call(this,e,n.entityIds)||this;return r.query=e,r.params=n,n.maxAge=B(n.maxAge)?n.maxAge:10,r.activate(),r.selectIds().pipe(Object(y.a)(1)).subscribe(function(t){return r.activate(t)}),r}Object(x.c)(e,t),e.prototype.redo=function(t){this.forEachId(t,function(t){return t.redo()})},e.prototype.undo=function(t){this.forEachId(t,function(t){return t.undo()})},e.prototype.hasPast=function(t){if(this.hasEntity(t))return this.getEntity(t).hasPast},e.prototype.hasFuture=function(t){if(this.hasEntity(t))return this.getEntity(t).hasFuture},e.prototype.jumpToFuture=function(t,e){this.forEachId(t,function(t){return t.jumpToFuture(e)})},e.prototype.jumpToPast=function(t,e){this.forEachId(t,function(t){return t.jumpToPast(e)})},e.prototype.clear=function(t){this.forEachId(t,function(t){return t.clear()})},e.prototype.destroy=function(t,e){void 0===e&&(e=!1),this.forEachId(t,function(t){return t.destroy(e)})},e.prototype.ignoreNext=function(t){this.forEachId(t,function(t){return t.ignoreNext()})},e.prototype.instantiatePlugin=function(t){return new St(this.query,this.params,t)}}(kt),{comparator:function(t,e){return JSON.stringify(t)!==JSON.stringify(e)}});function Tt(t,e){return e.split(".").reduce(function(t,e){return t&&"undefined"!==t[e]?t[e]:void 0},t)}var Et=function(t){function e(e,n,o){var s=t.call(this,e)||this;if(s.query=e,s.params=n,s._entityId=o,s.dirty=new i.a(!1),s.active=!1,s._reset=new r.a,s.isDirty$=s.dirty.asObservable().pipe(Object(d.a)()),s.reset$=s._reset.asObservable(),s.params=Object(x.a)({},Ot,n),s.params.watchProperty){var a=it(s.params.watchProperty);e instanceof ft&&a.includes("entities")&&!a.includes("ids")&&a.push("ids"),s.params.watchProperty=a}return s}return Object(x.c)(e,t),e.prototype.reset=function(t){void 0===t&&(t={});var e=this.head;W(t.updateFn)&&(e=this.isEntityBased(this._entityId)?t.updateFn(this.head,this.getQuery().getEntity(this._entityId)):t.updateFn(this.head,this.getQuery().getValue())),R("@DirtyCheck - Revert"),this.updateStore(e,this._entityId),this._reset.next()},e.prototype.setHead=function(){return this.active?this.head=this._getHead():(this.activate(),this.active=!0),this.updateDirtiness(!1),this},e.prototype.isDirty=function(){return B(this.dirty.value)},e.prototype.hasHead=function(){return B(this.getHead())},e.prototype.destroy=function(){this.head=null,this.subscription&&this.subscription.unsubscribe(),this._reset&&this._reset.complete()},e.prototype.isPathDirty=function(t){var e=this.getHead(),n=Tt(this.getQuery().getValue(),t),r=Tt(e,t);return this.params.comparator(n,r)},e.prototype.getHead=function(){return this.head},e.prototype.activate=function(){var t=this;this.head=this._getHead();var e=this.params.watchProperty?this.params.watchProperty.map(function(e){return t.query.select(function(t){return t[e]}).pipe(Object(p.a)(function(t){return{val:t,__akitaKey:e}}))}):[this.selectSource(this._entityId)];this.subscription=a.a.apply(void 0,Object(x.g)(e)).pipe(Object(y.a)(1)).subscribe(function(e){if(!at(t.head)){var n=e.some(function(e){var n=e.__akitaKey?t.head[e.__akitaKey]:t.head,r=e.__akitaKey?e.val:e;return t.params.comparator(n,r)});t.updateDirtiness(n)}})},e.prototype.updateDirtiness=function(t){this.dirty.next(t)},e.prototype._getHead=function(){var t=this.getSource(this._entityId);return this.params.watchProperty&&(t=this.getWatchedValues(t)),t},e.prototype.getWatchedValues=function(t){return this.params.watchProperty.reduce(function(e,n){return e[n]=t[n],e},{})},e}(wt);function Pt(){return"xxxxxx4xyx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}!function(t){function e(e,n){void 0===n&&(n={});var i=t.call(this,e,n.entityIds)||this;return i.query=e,i.params=n,i._someDirty=new r.a,i.someDirty$=Object(l.a)(i.query.select(function(t){return t.entities}),i._someDirty.asObservable()).pipe(Object(f.a)(0),Object(p.a)(function(){return i.checkSomeDirty()})),i.params=Object(x.a)({},Ot,n),i.activate(),i.selectIds().pipe(Object(y.a)(1)).subscribe(function(e){t.prototype.rebase.call(i,e,{afterAdd:function(t){return t.setHead()}})}),i}Object(x.c)(e,t),e.prototype.setHead=function(t){if(this.params.entityIds&&t){var e=it(t);if(!1===it(this.params.entityIds).some(function(t){return e.indexOf(t)>-1}))return this}return this.forEachId(t,function(t){return t.setHead()}),this._someDirty.next(),this},e.prototype.hasHead=function(t){return!!this.entities.has(t)&&this.getEntity(t).hasHead()},e.prototype.reset=function(t,e){void 0===e&&(e={}),this.forEachId(t,function(t){return t.reset(e)})},e.prototype.isDirty=function(t,e){if(void 0===e&&(e=!0),this.entities.has(t)){var n=this.getEntity(t);return e?n.isDirty$:n.isDirty()}return!1},e.prototype.someDirty=function(){return this.checkSomeDirty()},e.prototype.isPathDirty=function(t,e){if(this.entities.has(t)){var n=this.getEntity(t).getHead(),r=Tt(this.query.getEntity(t),e),i=Tt(n,e);return this.params.comparator(r,i)}return null},e.prototype.destroy=function(t){this.forEachId(t,function(t){return t.destroy()}),t||this._someDirty.complete()},e.prototype.instantiatePlugin=function(t){return new Et(this.query,this.params,t)},e.prototype.checkSomeDirty=function(){var t,e,n=this.resolvedIds();try{for(var r=Object(x.h)(n),i=r.next();!i.done;i=r.next()){var o=i.value;if(this.getEntity(o).isDirty())return!0}}catch(e){t={error:e}}finally{try{i&&!i.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}return!1}}(kt);var Ct={Update:0,AddEntities:1,SetEntities:2,UpdateEntities:3,RemoveEntities:4};function jt(t,e){return new ft(t,e)}Ct[Ct.Update]="Update",Ct[Ct.AddEntities]="AddEntities",Ct[Ct.SetEntities]="SetEntities",Ct[Ct.UpdateEntities]="UpdateEntities",Ct[Ct.RemoveEntities]="RemoveEntities"}).call(this,n(63))},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=!1,i={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack,r=t},get useDeprecatedSynchronousErrorHandling(){return r}}},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(18),i=n(40),o=n(2);function s(t,e,n,s,a){if(void 0===a&&(a=new r.a(t,n,s)),!a.closed)return e instanceof o.a?e.subscribe(a):Object(i.a)(e)(a)}},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(0),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.c(e,t),e.prototype.notifyNext=function(t,e,n,r,i){this.destination.next(e)},e.prototype.notifyError=function(t,e){this.destination.error(t)},e.prototype.notifyComplete=function(t){this.destination.complete()},e}(n(1).a)},function(t,e,n){"use strict";function r(){}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r="function"==typeof Symbol&&Symbol.observable||"@@observable"},function(t,e,n){"use strict";function r(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}n.d(e,"a",function(){return i}),r.prototype=Object.create(Error.prototype);var i=r},function(t,e,n){"use strict";function r(t){return"function"==typeof t}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";function r(t){return t&&"function"==typeof t.schedule}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";function r(t){setTimeout(function(){throw t},0)}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";n.d(e,"a",function(){return h});var r=n(0),i=n(2),o=n(1),s=n(3),a=n(11),c=n(35),u=n(20),l=function(t){function e(e){var n=t.call(this,e)||this;return n.destination=e,n}return r.c(e,t),e}(o.a),h=function(t){function e(){var e=t.call(this)||this;return e.observers=[],e.closed=!1,e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return r.c(e,t),e.prototype[u.a]=function(){return new l(this)},e.prototype.lift=function(t){var e=new p(this,this);return e.operator=t,e},e.prototype.next=function(t){if(this.closed)throw new a.a;if(!this.isStopped)for(var e=this.observers,n=e.length,r=e.slice(),i=0;i<n;i++)r[i].next(t)},e.prototype.error=function(t){if(this.closed)throw new a.a;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var e=this.observers,n=e.length,r=e.slice(),i=0;i<n;i++)r[i].error(t);this.observers.length=0},e.prototype.complete=function(){if(this.closed)throw new a.a;this.isStopped=!0;for(var t=this.observers,e=t.length,n=t.slice(),r=0;r<e;r++)n[r].complete();this.observers.length=0},e.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},e.prototype._trySubscribe=function(e){if(this.closed)throw new a.a;return t.prototype._trySubscribe.call(this,e)},e.prototype._subscribe=function(t){if(this.closed)throw new a.a;return this.hasError?(t.error(this.thrownError),s.a.EMPTY):this.isStopped?(t.complete(),s.a.EMPTY):(this.observers.push(t),new c.a(this,t))},e.prototype.asObservable=function(){var t=new i.a;return t.source=this,t},e.create=function(t,e){return new p(t,e)},e}(i.a),p=function(t){function e(e,n){var r=t.call(this)||this;return r.destination=e,r.source=n,r}return r.c(e,t),e.prototype.next=function(t){var e=this.destination;e&&e.next&&e.next(t)},e.prototype.error=function(t){var e=this.destination;e&&e.error&&this.destination.error(t)},e.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},e.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):s.a.EMPTY},e}(h)},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=Array.isArray||function(t){return t&&"number"==typeof t.length}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(0),i=function(t){function e(e,n,r){var i=t.call(this)||this;return i.parent=e,i.outerValue=n,i.outerIndex=r,i.index=0,i}return r.c(e,t),e.prototype._next=function(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)},e.prototype._error=function(t){this.parent.notifyError(t,this),this.unsubscribe()},e.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},e}(n(1).a)},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(41),i=new(n(42).a)(r.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()},function(t,e,n){"use strict";var r,i=n(39),o=n(30),s=n(2);n.d(e,"a",function(){return a}),r||(r={});var a=function(){function t(t,e,n){this.kind=t,this.value=e,this.error=n,this.hasValue="N"===t}return t.prototype.observe=function(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}},t.prototype.do=function(t,e,n){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return n&&n()}},t.prototype.accept=function(t,e,n){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,n)},t.prototype.toObservable=function(){switch(this.kind){case"N":return Object(o.a)(this.value);case"E":return function(t,e){return new s.a(function(e){return e.error(t)})}(this.error);case"C":return Object(i.a)()}throw new Error("unexpected notification kind value")},t.createNext=function(e){return void 0!==e?new t("N",e):t.undefinedValueNotification},t.createError=function(e){return new t("E",void 0,e)},t.createComplete=function(){return t.completeNotification},t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t}()},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(2),i=n(3);function o(t,e){return new r.a(function(n){var r=new i.a,o=0;return r.add(e.schedule(function(){o!==t.length?(n.next(t[o++]),n.closed||r.add(this.schedule())):n.complete()})),r})}},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(2),i=n(36),o=n(22);function s(t,e){return e?Object(o.a)(t,e):new r.a(Object(i.a)(t))}},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(6),i=n(14),o={closed:!0,next:function(t){},error:function(t){if(r.a.useDeprecatedSynchronousErrorHandling)throw t;Object(i.a)(t)},complete:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(64);e.fromFetch=r.fromFetch},function(t,e,n){"use strict";var r=n(2),i=n(40),o=n(3),s=n(10),a=n(22),c=n(17),u=n(38),l=n(37);function h(t,e){return e?function(t,e){if(null!=t){if(function(t){return t&&"function"==typeof t[s.a]}(t))return function(t,e){return new r.a(function(n){var r=new o.a;return r.add(e.schedule(function(){var i=t[s.a]();r.add(i.subscribe({next:function(t){r.add(e.schedule(function(){return n.next(t)}))},error:function(t){r.add(e.schedule(function(){return n.error(t)}))},complete:function(){r.add(e.schedule(function(){return n.complete()}))}}))})),r})}(t,e);if(Object(u.a)(t))return function(t,e){return new r.a(function(n){var r=new o.a;return r.add(e.schedule(function(){return t.then(function(t){r.add(e.schedule(function(){n.next(t),r.add(e.schedule(function(){return n.complete()}))}))},function(t){r.add(e.schedule(function(){return n.error(t)}))})})),r})}(t,e);if(Object(l.a)(t))return Object(a.a)(t,e);if(function(t){return t&&"function"==typeof t[c.a]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new r.a(function(n){var r,i=new o.a;return i.add(function(){r&&"function"==typeof r.return&&r.return()}),i.add(e.schedule(function(){r=t[c.a](),i.add(e.schedule(function(){if(!n.closed){var t,e;try{var i=r.next();t=i.value,e=i.done}catch(t){return void n.error(t)}e?n.complete():(n.next(t),this.schedule())}}))})),i})}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}(t,e):t instanceof r.a?t:new r.a(Object(i.a)(t))}n.d(e,"a",function(){return h})},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(0),i=n(15),o=n(11),s=function(t){function e(e){var n=t.call(this)||this;return n._value=e,n}return r.c(e,t),Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),e.prototype._subscribe=function(e){var n=t.prototype._subscribe.call(this,e);return n&&!n.closed&&e.next(this._value),n},e.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new o.a;return this._value},e.prototype.next=function(e){t.prototype.next.call(this,this._value=e)},e}(i.a)},,function(t,e,n){"use strict";
/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018, Костя Третяк. (MIT Licensed)
 * https://github.com/KostyaTretyak/marked-ts
 */var r=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t};Object.defineProperty(e,"__esModule",{value:!0});var i=n(56),o=n(55),s=n(49),a=n(33),c=function(){function t(){}return t.setOptions=function(t){return this.options=s.merge(this.options,t),this},t.setBlockRule=function(t,e){return void 0===e&&(e=function(){return""}),o.BlockLexer.simpleRules.push(t),this.simpleRenderers.push(e),this},t.parse=function(t,e){void 0===e&&(e=this.options);try{var n=this.callBlockLexer(t,e),r=n.tokens,i=n.links;return this.callParser(r,i,e)}catch(t){return this.callMe(t)}},t.debug=function(t,e){void 0===e&&(e=this.options);var n=this.callBlockLexer(t,e),o=n.tokens,s=n.links,c=o.slice(),u=new i.Parser(e);u.simpleRenderers=this.simpleRenderers;var l=u.debug(s,o);return{tokens:c=c.map(function(t){t.type=a.TokenType[t.type]||t.type;var e=t.line;return delete t.line,e?r({line:e},t):t}),links:s,result:l}},t.callBlockLexer=function(t,e){return void 0===t&&(t=""),t=t.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n").replace(/^ +$/gm,""),o.BlockLexer.lex(t,e,!0)},t.callParser=function(t,e,n){if(this.simpleRenderers.length){var r=new i.Parser(n);return r.simpleRenderers=this.simpleRenderers,r.parse(e,t)}return i.Parser.parse(t,e,n)},t.callMe=function(t){if(t.message+="\nPlease report this to https://github.com/KostyaTretyak/marked-ts",this.options.silent)return"<p>An error occured:</p><pre>"+this.options.escape(t.message+"",!0)+"</pre>";throw t},t.options=new a.MarkedOptions,t.simpleRenderers=[],t}();e.Marked=c},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(13),i=n(23),o=n(22);function s(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t[t.length-1];return Object(r.a)(n)?(t.pop(),Object(o.a)(t,n)):Object(i.a)(t)}},function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(0),i=n(8),o=n(18),s=n(7),a=n(4),c=n(26);function u(t,e){return"function"==typeof e?function(n){return n.pipe(u(function(n,r){return Object(c.a)(t(n,r)).pipe(Object(a.a)(function(t,i){return e(n,t,r,i)}))}))}:function(e){return e.lift(new l(t))}}var l=function(){function t(t){this.project=t}return t.prototype.call=function(t,e){return e.subscribe(new h(t,this.project))},t}(),h=function(t){function e(e,n){var r=t.call(this,e)||this;return r.project=n,r.index=0,r}return r.c(e,t),e.prototype._next=function(t){var e,n=this.index++;try{e=this.project(t,n)}catch(t){return void this.destination.error(t)}this._innerSub(e,t,n)},e.prototype._innerSub=function(t,e,n){var r=this.innerSubscription;r&&r.unsubscribe();var i=new o.a(this,void 0,void 0);this.destination.add(i),this.innerSubscription=Object(s.a)(this,t,e,n,i)},e.prototype._complete=function(){var e=this.innerSubscription;e&&!e.closed||t.prototype._complete.call(this),this.unsubscribe()},e.prototype._unsubscribe=function(){this.innerSubscription=null},e.prototype.notifyComplete=function(e){this.destination.remove(e),this.innerSubscription=null,this.isStopped&&t.prototype._complete.call(this)},e.prototype.notifyNext=function(t,e,n,r,i){this.destination.next(e)},e}(i.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(0),i=n(1);function o(t,e){return function(n){return n.lift(new s(t,e))}}var s=function(){function t(t,e){this.compare=t,this.keySelector=e}return t.prototype.call=function(t,e){return e.subscribe(new a(t,this.compare,this.keySelector))},t}(),a=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.keySelector=r,i.hasKey=!1,"function"==typeof n&&(i.compare=n),i}return r.c(e,t),e.prototype.compare=function(t,e){return t===e},e.prototype._next=function(t){var e;try{var n=this.keySelector;e=n?n(t):t}catch(t){return this.destination.error(t)}var r=!1;if(this.hasKey)try{r=(0,this.compare)(this.key,e)}catch(t){return this.destination.error(t)}else this.hasKey=!0;r||(this.key=e,this.destination.next(t))},e}(i.a)},function(t,e,n){"use strict";
/**
 * @license
 *
 * Copyright (c) 2018, Костя Третяк. (MIT Licensed)
 * https://github.com/KostyaTretyak/marked-ts
 */Object.defineProperty(e,"__esModule",{value:!0});var r=n(49);!function(t){t[t.space=1]="space",t[t.text=2]="text",t[t.paragraph=3]="paragraph",t[t.heading=4]="heading",t[t.listStart=5]="listStart",t[t.listEnd=6]="listEnd",t[t.looseItemStart=7]="looseItemStart",t[t.looseItemEnd=8]="looseItemEnd",t[t.listItemStart=9]="listItemStart",t[t.listItemEnd=10]="listItemEnd",t[t.blockquoteStart=11]="blockquoteStart",t[t.blockquoteEnd=12]="blockquoteEnd",t[t.code=13]="code",t[t.table=14]="table",t[t.html=15]="html",t[t.hr=16]="hr"}(e.TokenType||(e.TokenType={}));var i=function(){this.gfm=!0,this.tables=!0,this.breaks=!1,this.pedantic=!1,this.sanitize=!1,this.mangle=!0,this.smartLists=!1,this.silent=!1,this.langPrefix="lang-",this.smartypants=!1,this.headerPrefix="",this.xhtml=!1,this.escape=r.escape,this.unescape=r.unescape};e.MarkedOptions=i},function(t,e,n){"use strict";function r(t){return null!==t&&"object"==typeof t}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(0),i=function(t){function e(e,n){var r=t.call(this)||this;return r.subject=e,r.subscriber=n,r.closed=!1,r}return r.c(e,t),e.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,e=t.observers;if(this.subject=null,e&&0!==e.length&&!t.isStopped&&!t.closed){var n=e.indexOf(this.subscriber);-1!==n&&e.splice(n,1)}}},e}(n(3).a)},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t){return function(e){for(var n=0,r=t.length;n<r&&!e.closed;n++)e.next(t[n]);e.complete()}}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t}},function(t,e,n){"use strict";function r(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(2),i=new r.a(function(t){return t.complete()});function o(t){return t?function(t){return new r.a(function(e){return t.schedule(function(){return e.complete()})})}(t):i}},function(t,e,n){"use strict";var r=n(36),i=n(14),o=n(17),s=n(10),a=n(37),c=n(38),u=n(34);n.d(e,"a",function(){return l});var l=function(t){if(t&&"function"==typeof t[s.a])return function(t){return function(e){var n=t[s.a]();if("function"!=typeof n.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return n.subscribe(e)}}(t);if(Object(a.a)(t))return Object(r.a)(t);if(Object(c.a)(t))return function(t){return function(e){return t.then(function(t){e.closed||(e.next(t),e.complete())},function(t){return e.error(t)}).then(null,i.a),e}}(t);if(t&&"function"==typeof t[o.a])return function(t){return function(e){for(var n=t[o.a]();;){var r=n.next();if(r.done){e.complete();break}if(e.next(r.value),e.closed)break}return"function"==typeof n.return&&e.add(function(){n.return&&n.return()}),e}}(t);var e=Object(u.a)(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+e+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")}},function(t,e,n){"use strict";var r=n(0),i=function(t){function e(e,n){return t.call(this)||this}return r.c(e,t),e.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},e}(n(3).a);n.d(e,"a",function(){return o});var o=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.scheduler=e,r.work=n,r.pending=!1,r}return r.c(e,t),e.prototype.schedule=function(t,e){if(void 0===e&&(e=0),this.closed)return this;this.state=t;var n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(r,this.id,e),this},e.prototype.requestAsyncId=function(t,e,n){return void 0===n&&(n=0),setInterval(t.flush.bind(t,this),n)},e.prototype.recycleAsyncId=function(t,e,n){if(void 0===n&&(n=0),null!==n&&this.delay===n&&!1===this.pending)return e;clearInterval(e)},e.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(t,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,e){var n=!1,r=void 0;try{this.work(t)}catch(t){n=!0,r=!!t&&t||new Error(t)}if(n)return this.unsubscribe(),r},e.prototype._unsubscribe=function(){var t=this.id,e=this.scheduler,n=e.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null},e}(i)},function(t,e,n){"use strict";var r=n(0),i=function(){function t(e,n){void 0===n&&(n=t.now),this.SchedulerAction=e,this.now=n}return t.prototype.schedule=function(t,e,n){return void 0===e&&(e=0),new this.SchedulerAction(this,t).schedule(n,e)},t.now=function(){return Date.now()},t}();n.d(e,"a",function(){return o});var o=function(t){function e(n,r){void 0===r&&(r=i.now);var o=t.call(this,n,function(){return e.delegate&&e.delegate!==o?e.delegate.now():r()})||this;return o.actions=[],o.active=!1,o.scheduled=void 0,o}return r.c(e,t),e.prototype.schedule=function(n,r,i){return void 0===r&&(r=0),e.delegate&&e.delegate!==this?e.delegate.schedule(n,r,i):t.prototype.schedule.call(this,n,r,i)},e.prototype.flush=function(t){var e=this.actions;if(this.active)e.push(t);else{var n;this.active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,n){for(;t=e.shift();)t.unsubscribe();throw n}}},e}(i)},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(0),i=n(1);function o(t,e){return function(n){return n.lift(new s(t,e))}}var s=function(){function t(t,e){this.predicate=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new a(t,this.predicate,this.thisArg))},t}(),a=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.predicate=n,i.thisArg=r,i.count=0,i}return r.c(e,t),e.prototype._next=function(t){var e;try{e=this.predicate.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}e&&this.destination.next(t)},e}(i.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(0),i=n(1);function o(t){return function(e){return e.lift(new s(t))}}var s=function(){function t(t){this.total=t}return t.prototype.call=function(t,e){return e.subscribe(new a(t,this.total))},t}(),a=function(t){function e(e,n){var r=t.call(this,e)||this;return r.total=n,r.count=0,r}return r.c(e,t),e.prototype._next=function(t){++this.count>this.total&&this.destination.next(t)},e}(i.a)},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=!1;e.config={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){var e=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+e.stack)}else r&&console.log("RxJS: Back to a better error behavior. Thank you. <3");r=t},get useDeprecatedSynchronousErrorHandling(){return r}}},function(t,e,n){"use strict";
/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018, Костя Третяк. (MIT Licensed)
 * https://github.com/KostyaTretyak/marked-ts
 */Object.defineProperty(e,"__esModule",{value:!0});var r=n(29),i=function(){function t(t){this.options=t||r.Marked.options}return t.prototype.code=function(t,e,n){if(this.options.highlight){var r=this.options.highlight(t,e);null!=r&&r!==t&&(n=!0,t=r)}return e?'\n<pre><code class="'+this.options.langPrefix+this.options.escape(e,!0)+'">'+(n?t:this.options.escape(t,!0))+"\n</code></pre>\n":"\n<pre><code>"+(n?t:this.options.escape(t,!0))+"\n</code></pre>\n"},t.prototype.blockquote=function(t){return"<blockquote>\n"+t+"</blockquote>\n"},t.prototype.html=function(t){return t},t.prototype.heading=function(t,e,n){return"<h"+e+' id="'+(this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-"))+'">'+t+"</h"+e+">\n"},t.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},t.prototype.list=function(t,e){var n=e?"ol":"ul";return"\n<"+n+">\n"+t+"</"+n+">\n"},t.prototype.listitem=function(t){return"<li>"+t+"</li>\n"},t.prototype.paragraph=function(t){return"<p>"+t+"</p>\n"},t.prototype.table=function(t,e){return"\n<table>\n<thead>\n"+t+"</thead>\n<tbody>\n"+e+"</tbody>\n</table>\n"},t.prototype.tablerow=function(t){return"<tr>\n"+t+"</tr>\n"},t.prototype.tablecell=function(t,e){var n=e.header?"th":"td";return(e.align?"<"+n+' style="text-align:'+e.align+'">':"<"+n+">")+t+"</"+n+">\n"},t.prototype.strong=function(t){return"<strong>"+t+"</strong>"},t.prototype.em=function(t){return"<em>"+t+"</em>"},t.prototype.codespan=function(t){return"<code>"+t+"</code>"},t.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},t.prototype.del=function(t){return"<del>"+t+"</del>"},t.prototype.link=function(t,e,n){if(this.options.sanitize){var r=void 0;try{r=decodeURIComponent(this.options.unescape(t)).replace(/[^\w:]/g,"").toLowerCase()}catch(t){return n}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return n}var i='<a href="'+t+'"';return e&&(i+=' title="'+e+'"'),i+">"+n+"</a>"},t.prototype.image=function(t,e,n){var r='<img src="'+t+'" alt="'+n+'"';return e&&(r+=' title="'+e+'"'),r+(this.options.xhtml?"/>":">")},t.prototype.text=function(t){return t},t}();e.Renderer=i},function(t,e,n){"use strict";
/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018, Костя Третяк. (MIT Licensed)
 * https://github.com/KostyaTretyak/marked-ts
 */Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){void 0===e&&(e=""),this.source=t.source,this.flags=e}return t.prototype.setGroup=function(t,e){var n="string"==typeof e?e:e.source;return n=n.replace(/(^|[^\[])\^/g,"$1"),this.source=this.source.replace(t,n),this},t.prototype.getRegexp=function(){return new RegExp(this.source,this.flags)},t}();e.ExtendRegexp=r},function(t,e,n){"use strict";
/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018, Костя Третяк. (MIT Licensed)
 * https://github.com/KostyaTretyak/marked-ts
 */Object.defineProperty(e,"__esModule",{value:!0}),e.merge=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var r=0;r<e.length;r++){var i=e[r];for(var o in i)t[o]=i[o]}return t};var r=/[&<>"']/,i=/[&<>"']/g,o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},s=/[<>"']|&(?!#?\w+;)/,a=/[<>"']|&(?!#?\w+;)/g;e.escape=function(t,e){if(e){if(r.test(t))return t.replace(i,function(t){return o[t]})}else if(s.test(t))return t.replace(a,function(t){return o[t]});return t},e.unescape=function(t){return t.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(t,e){return"colon"===(e=e.toLowerCase())?":":"#"===e.charAt(0)?"x"===e.charAt(1)?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""})}},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=n(51),o=n(52),s=n(67),a=n(54),c=n(46),u=n(53),l=function(t){function e(n,r,i){var s=t.call(this)||this;switch(s.syncErrorValue=null,s.syncErrorThrown=!1,s.syncErrorThrowable=!1,s.isStopped=!1,arguments.length){case 0:s.destination=o.empty;break;case 1:if(!n){s.destination=o.empty;break}if("object"==typeof n){n instanceof e?(s.syncErrorThrowable=n.syncErrorThrowable,s.destination=n,n.add(s)):(s.syncErrorThrowable=!0,s.destination=new h(s,n));break}default:s.syncErrorThrowable=!0,s.destination=new h(s,n,r,i)}return s}return r(e,t),e.prototype[a.rxSubscriber]=function(){return this},e.create=function(t,n,r){var i=new e(t,n,r);return i.syncErrorThrowable=!1,i},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(s.Subscription);e.Subscriber=l;var h=function(t){function e(e,n,r,s){var a,c=t.call(this)||this;c._parentSubscriber=e;var u=c;return i.isFunction(n)?a=n:n&&(a=n.next,r=n.error,s=n.complete,n!==o.empty&&(u=Object.create(n),i.isFunction(u.unsubscribe)&&c.add(u.unsubscribe.bind(u)),u.unsubscribe=c.unsubscribe.bind(c))),c._context=u,c._next=a,c._error=r,c._complete=s,c}return r(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;c.config.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,n=c.config.useDeprecatedSynchronousErrorHandling;if(this._error)n&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)n?(e.syncErrorValue=t,e.syncErrorThrown=!0):u.hostReportError(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;u.hostReportError(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var n=function(){return t._complete.call(t._context)};c.config.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),c.config.useDeprecatedSynchronousErrorHandling)throw t;u.hostReportError(t)}},e.prototype.__tryOrSetError=function(t,e,n){if(!c.config.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,n)}catch(e){return c.config.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(u.hostReportError(e),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(l);e.SafeSubscriber=h},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isFunction=function(t){return"function"==typeof t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(46),i=n(53);e.empty={closed:!0,next:function(t){},error:function(t){if(r.config.useDeprecatedSynchronousErrorHandling)throw t;i.hostReportError(t)},complete:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.hostReportError=function(t){setTimeout(function(){throw t},0)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.rxSubscriber="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),e.$$rxSubscriber=e.rxSubscriber},function(t,e,n){"use strict";
/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018, Костя Третяк. (MIT Licensed)
 * https://github.com/KostyaTretyak/marked-ts
 */var r=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t};Object.defineProperty(e,"__esModule",{value:!0});var i=n(29),o=n(48),s=n(33),a=function(){function t(t,e){this.staticThis=t,this.links={},this.tokens=[],this.options=e||i.Marked.options,this.setRules()}return t.lex=function(t,e,n,r){return new this(this,e).getTokens(t,n,r)},t.getRulesBase=function(){if(this.rulesBase)return this.rulesBase;var t={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/,bullet:/(?:[*+-]|\d+\.)/,item:/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/};t.item=new o.ExtendRegexp(t.item,"gm").setGroup(/bull/g,t.bullet).getRegexp(),t.list=new o.ExtendRegexp(t.list).setGroup(/bull/g,t.bullet).setGroup("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))").setGroup("def","\\n+(?="+t.def.source+")").getRegexp();var e="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";return t.html=new o.ExtendRegexp(t.html).setGroup("comment",/<!--[\s\S]*?-->/).setGroup("closed",/<(tag)[\s\S]+?<\/\1>/).setGroup("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/).setGroup(/tag/g,e).getRegexp(),t.paragraph=new o.ExtendRegexp(t.paragraph).setGroup("hr",t.hr).setGroup("heading",t.heading).setGroup("lheading",t.lheading).setGroup("blockquote",t.blockquote).setGroup("tag","<"+e).setGroup("def",t.def).getRegexp(),this.rulesBase=t},t.getRulesGfm=function(){if(this.rulesGfm)return this.rulesGfm;var t=this.getRulesBase(),e=r({},t,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),n=e.fences.source.replace("\\1","\\2"),i=t.list.source.replace("\\1","\\3");return e.paragraph=new o.ExtendRegexp(t.paragraph).setGroup("(?!","(?!"+n+"|"+i+"|").getRegexp(),this.rulesGfm=e},t.getRulesTable=function(){return this.rulesTables?this.rulesTables:this.rulesTables=r({},this.getRulesGfm(),{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/})},t.prototype.setRules=function(){this.options.gfm?this.options.tables?this.rules=this.staticThis.getRulesTable():this.rules=this.staticThis.getRulesGfm():this.rules=this.staticThis.getRulesBase(),this.hasRulesGfm=void 0!==this.rules.fences,this.hasRulesTables=void 0!==this.rules.table},t.prototype.getTokens=function(t,e,n){var r,i=t;t:for(;i;)if((r=this.rules.newline.exec(i))&&(i=i.substring(r[0].length),r[0].length>1&&this.tokens.push({type:s.TokenType.space})),r=this.rules.code.exec(i)){i=i.substring(r[0].length);var o=r[0].replace(/^ {4}/gm,"");this.tokens.push({type:s.TokenType.code,text:this.options.pedantic?o:o.replace(/\n+$/,"")})}else if(this.hasRulesGfm&&(r=this.rules.fences.exec(i)))i=i.substring(r[0].length),this.tokens.push({type:s.TokenType.code,lang:r[2],text:r[3]||""});else if(r=this.rules.heading.exec(i))i=i.substring(r[0].length),this.tokens.push({type:s.TokenType.heading,depth:r[1].length,text:r[2]});else if(e&&this.hasRulesTables&&(r=this.rules.nptable.exec(i))){i=i.substring(r[0].length);for(var a={type:s.TokenType.table,header:r[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:[]},c=0;c<a.align.length;c++)/^ *-+: *$/.test(a.align[c])?a.align[c]="right":/^ *:-+: *$/.test(a.align[c])?a.align[c]="center":/^ *:-+ *$/.test(a.align[c])?a.align[c]="left":a.align[c]=null;var u=r[3].replace(/\n$/,"").split("\n");for(c=0;c<u.length;c++)a.cells[c]=u[c].split(/ *\| */);this.tokens.push(a)}else if(r=this.rules.lheading.exec(i))i=i.substring(r[0].length),this.tokens.push({type:s.TokenType.heading,depth:"="===r[2]?1:2,text:r[1]});else if(r=this.rules.hr.exec(i))i=i.substring(r[0].length),this.tokens.push({type:s.TokenType.hr});else if(r=this.rules.blockquote.exec(i)){i=i.substring(r[0].length),this.tokens.push({type:s.TokenType.blockquoteStart});var l=r[0].replace(/^ *> ?/gm,"");this.getTokens(l),this.tokens.push({type:s.TokenType.blockquoteEnd})}else if(r=this.rules.list.exec(i)){i=i.substring(r[0].length);var h=r[2];this.tokens.push({type:s.TokenType.listStart,ordered:h.length>1});var p=(l=r[0].match(this.rules.item)).length,d=!1,f=void 0,g=void 0,y=void 0;for(c=0;c<p;c++)f=(a=l[c]).length,-1!==(a=a.replace(/^ *([*+-]|\d+\.) +/,"")).indexOf("\n ")&&(f-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+f+"}","gm"),"")),this.options.smartLists&&c!==p-1&&(h===(g=this.staticThis.getRulesBase().bullet.exec(l[c+1])[0])||h.length>1&&g.length>1||(i=l.slice(c+1).join("\n")+i,c=p-1)),y=d||/\n\n(?!\s*$)/.test(a),c!==p-1&&(d="\n"===a.charAt(a.length-1),y||(y=d)),this.tokens.push({type:y?s.TokenType.looseItemStart:s.TokenType.listItemStart}),this.getTokens(a,!1,n),this.tokens.push({type:s.TokenType.listItemEnd});this.tokens.push({type:s.TokenType.listEnd})}else if(r=this.rules.html.exec(i)){i=i.substring(r[0].length);var v=r[1],b="pre"===v||"script"===v||"style"===v;this.tokens.push({type:this.options.sanitize?s.TokenType.paragraph:s.TokenType.html,pre:!this.options.sanitizer&&b,text:r[0]})}else if(e&&(r=this.rules.def.exec(i)))i=i.substring(r[0].length),this.links[r[1].toLowerCase()]={href:r[2],title:r[3]};else if(e&&this.hasRulesTables&&(r=this.rules.table.exec(i))){for(i=i.substring(r[0].length),a={type:s.TokenType.table,header:r[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:[]},c=0;c<a.align.length;c++)/^ *-+: *$/.test(a.align[c])?a.align[c]="right":/^ *:-+: *$/.test(a.align[c])?a.align[c]="center":/^ *:-+ *$/.test(a.align[c])?a.align[c]="left":a.align[c]=null;for(u=r[3].replace(/(?: *\| *)?\n$/,"").split("\n"),c=0;c<u.length;c++)a.cells[c]=u[c].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(a)}else{if(this.staticThis.simpleRules.length){var m=this.staticThis.simpleRules;for(c=0;c<m.length;c++)if(r=m[c].exec(i)){i=i.substring(r[0].length);var w="simpleRule"+(c+1);this.tokens.push({type:w,execArr:r});continue t}}if(e&&(r=this.rules.paragraph.exec(i)))i=i.substring(r[0].length),"\n"===r[1].slice(-1)?this.tokens.push({type:s.TokenType.paragraph,text:r[1].slice(0,-1)}):this.tokens.push({type:this.tokens.length>0?s.TokenType.paragraph:s.TokenType.text,text:r[1]});else if(r=this.rules.text.exec(i))i=i.substring(r[0].length),this.tokens.push({type:s.TokenType.text,text:r[0]});else if(i)throw new Error("Infinite loop on byte: "+i.charCodeAt(0)+", near text '"+i.slice(0,30)+"...'")}return{tokens:this.tokens,links:this.links}},t.simpleRules=[],t}();e.BlockLexer=a},function(t,e,n){"use strict";
/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018, Костя Третяк. (MIT Licensed)
 * https://github.com/KostyaTretyak/marked-ts
 */Object.defineProperty(e,"__esModule",{value:!0});var r=n(29),i=n(47),o=n(57),s=n(33),a=function(){function t(t){this.simpleRenderers=[],this.line=0,this.tokens=[],this.token=null,this.options=t||r.Marked.options,this.renderer=this.options.renderer||new i.Renderer(this.options)}return t.parse=function(t,e,n){return new this(n).parse(e,t)},t.prototype.parse=function(t,e){this.inlineLexer=new o.InlineLexer(o.InlineLexer,t,this.options,this.renderer),this.tokens=e.reverse();for(var n="";this.next();)n+=this.tok();return n},t.prototype.debug=function(t,e){this.inlineLexer=new o.InlineLexer(o.InlineLexer,t,this.options,this.renderer),this.tokens=e.reverse();for(var n="";this.next();){var r=this.tok();this.token.line=this.line+=r.split("\n").length-1,n+=r}return n},t.prototype.next=function(){return this.token=this.tokens.pop()},t.prototype.getNextElement=function(){return this.tokens[this.tokens.length-1]},t.prototype.parseText=function(){for(var t,e=this.token.text;(t=this.getNextElement())&&t.type==s.TokenType.text;)e+="\n"+this.next().text;return this.inlineLexer.output(e)},t.prototype.tok=function(){switch(this.token.type){case s.TokenType.space:return"";case s.TokenType.paragraph:return this.renderer.paragraph(this.inlineLexer.output(this.token.text));case s.TokenType.text:return this.options.isNoP?this.parseText():this.renderer.paragraph(this.parseText());case s.TokenType.heading:return this.renderer.heading(this.inlineLexer.output(this.token.text),this.token.depth,this.token.text);case s.TokenType.listStart:for(var t="",e=this.token.ordered;this.next().type!=s.TokenType.listEnd;)t+=this.tok();return this.renderer.list(t,e);case s.TokenType.listItemStart:for(t="";this.next().type!=s.TokenType.listItemEnd;)t+=this.token.type==s.TokenType.text?this.parseText():this.tok();return this.renderer.listitem(t);case s.TokenType.looseItemStart:for(t="";this.next().type!=s.TokenType.listItemEnd;)t+=this.tok();return this.renderer.listitem(t);case s.TokenType.code:return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case s.TokenType.table:var n="",r=void(t=""),i=void 0;i="";for(var o=0;o<this.token.header.length;o++){var a={header:!0,align:this.token.align[o]},c=this.inlineLexer.output(this.token.header[o]);i+=this.renderer.tablecell(c,a)}for(n+=this.renderer.tablerow(i),o=0;o<this.token.cells.length;o++){r=this.token.cells[o],i="";for(var u=0;u<r.length;u++)i+=this.renderer.tablecell(this.inlineLexer.output(r[u]),{header:!1,align:this.token.align[u]});t+=this.renderer.tablerow(i)}return this.renderer.table(n,t);case s.TokenType.blockquoteStart:for(t="";this.next().type!=s.TokenType.blockquoteEnd;)t+=this.tok();return this.renderer.blockquote(t);case s.TokenType.hr:return this.renderer.hr();case s.TokenType.html:var l=this.token.pre||this.options.pedantic?this.token.text:this.inlineLexer.output(this.token.text);return this.renderer.html(l);default:if(this.simpleRenderers.length)for(o=0;o<this.simpleRenderers.length;o++)if(this.token.type=="simpleRule"+(o+1))return this.simpleRenderers[o].call(this.renderer,this.token.execArr);var h='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(h);console.log(h)}},t}();e.Parser=a},function(t,e,n){"use strict";
/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018, Костя Третяк. (MIT Licensed)
 * https://github.com/KostyaTretyak/marked-ts
 */var r=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t};Object.defineProperty(e,"__esModule",{value:!0});var i=n(48),o=n(29),s=n(47),a=function(){function t(t,e,n,r){if(void 0===n&&(n=o.Marked.options),this.staticThis=t,this.links=e,this.options=n,this.renderer=r||this.options.renderer||new s.Renderer(this.options),!this.links)throw new Error("InlineLexer requires 'links' parameter.");this.setRules()}return t.output=function(t,e,n){return new this(this,e,n).output(t)},t.getRulesBase=function(){if(this.rulesBase)return this.rulesBase;var t={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ <>]+(@|:\/)[^ <>]+)>/,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^<'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)([\s\S]*?[^`])\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/,_inside:/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,_href:/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/};return t.link=new i.ExtendRegexp(t.link).setGroup("inside",t._inside).setGroup("href",t._href).getRegexp(),t.reflink=new i.ExtendRegexp(t.reflink).setGroup("inside",t._inside).getRegexp(),this.rulesBase=t},t.getRulesPedantic=function(){return this.rulesPedantic?this.rulesPedantic:this.rulesPedantic=r({},this.getRulesBase(),{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/})},t.getRulesGfm=function(){if(this.rulesGfm)return this.rulesGfm;var t=this.getRulesBase(),e=new i.ExtendRegexp(t.escape).setGroup("])","~|])").getRegexp(),n=new i.ExtendRegexp(t.text).setGroup("]|","~]|").setGroup("|","|https?://|").getRegexp();return this.rulesGfm=r({},t,{escape:e,url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:n})},t.getRulesBreaks=function(){if(this.rulesBreaks)return this.rulesBreaks;var t=this.getRulesGfm(),e=this.getRulesGfm();return this.rulesBreaks=r({},e,{br:new i.ExtendRegexp(t.br).setGroup("{2,}","*").getRegexp(),text:new i.ExtendRegexp(e.text).setGroup("{2,}","*").getRegexp()})},t.prototype.setRules=function(){this.options.gfm?this.options.breaks?this.rules=this.staticThis.getRulesBreaks():this.rules=this.staticThis.getRulesGfm():this.options.pedantic?this.rules=this.staticThis.getRulesPedantic():this.rules=this.staticThis.getRulesBase(),this.hasRulesGfm=void 0!==this.rules.url},t.prototype.output=function(t){var e;t=t;for(var n="";t;)if(e=this.rules.escape.exec(t))t=t.substring(e[0].length),n+=e[1];else if(e=this.rules.autolink.exec(t)){var r=void 0,i=void 0;t=t.substring(e[0].length),"@"===e[2]?(r=this.options.escape(":"===e[1].charAt(6)?this.mangle(e[1].substring(7)):this.mangle(e[1])),i=this.mangle("mailto:")+r):i=r=this.options.escape(e[1]),n+=this.renderer.link(i,null,r)}else if(!this.inLink&&this.hasRulesGfm&&(e=this.rules.url.exec(t)))r=void 0,i=void 0,t=t.substring(e[0].length),i=r=this.options.escape(e[1]),n+=this.renderer.link(i,null,r);else if(e=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(e[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(e[0])&&(this.inLink=!1),t=t.substring(e[0].length),n+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):this.options.escape(e[0]):e[0];else if(e=this.rules.link.exec(t))t=t.substring(e[0].length),this.inLink=!0,n+=this.outputLink(e,{href:e[2],title:e[3]}),this.inLink=!1;else if((e=this.rules.reflink.exec(t))||(e=this.rules.nolink.exec(t))){t=t.substring(e[0].length);var o=(e[2]||e[1]).replace(/\s+/g," "),s=this.links[o.toLowerCase()];if(!s||!s.href){n+=e[0].charAt(0),t=e[0].substring(1)+t;continue}this.inLink=!0,n+=this.outputLink(e,s),this.inLink=!1}else if(e=this.rules.strong.exec(t))t=t.substring(e[0].length),n+=this.renderer.strong(this.output(e[2]||e[1]));else if(e=this.rules.em.exec(t))t=t.substring(e[0].length),n+=this.renderer.em(this.output(e[2]||e[1]));else if(e=this.rules.code.exec(t))t=t.substring(e[0].length),n+=this.renderer.codespan(this.options.escape(e[2].trim(),!0));else if(e=this.rules.br.exec(t))t=t.substring(e[0].length),n+=this.renderer.br();else if(this.hasRulesGfm&&(e=this.rules.del.exec(t)))t=t.substring(e[0].length),n+=this.renderer.del(this.output(e[1]));else if(e=this.rules.text.exec(t))t=t.substring(e[0].length),n+=this.renderer.text(this.options.escape(this.smartypants(e[0])));else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0));return n},t.prototype.outputLink=function(t,e){var n=this.options.escape(e.href),r=e.title?this.options.escape(e.title):null;return"!"!==t[0].charAt(0)?this.renderer.link(n,r,this.output(t[1])):this.renderer.image(n,r,this.options.escape(t[1]))},t.prototype.smartypants=function(t){return this.options.smartypants?t.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):t},t.prototype.mangle=function(t){if(!this.options.mangle)return t;for(var e="",n=t.length,r=0;r<n;r++){var i=void 0;Math.random()>.5&&(i="x"+t.charCodeAt(r).toString(16)),e+="&#"+i+";"}return e},t}();e.InlineLexer=a},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),r(n(55)),r(n(49)),r(n(57)),r(n(33)),r(n(29)),r(n(56)),r(n(47)),r(n(48))},function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n(0),i=n(13),o=n(16),s=n(8),a=n(7),c=n(23),u={};function l(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=null,r=null;return Object(i.a)(t[t.length-1])&&(r=t.pop()),"function"==typeof t[t.length-1]&&(n=t.pop()),1===t.length&&Object(o.a)(t[0])&&(t=t[0]),Object(c.a)(t,r).lift(new h(n))}var h=function(){function t(t){this.resultSelector=t}return t.prototype.call=function(t,e){return e.subscribe(new p(t,this.resultSelector))},t}(),p=function(t){function e(e,n){var r=t.call(this,e)||this;return r.resultSelector=n,r.active=0,r.values=[],r.observables=[],r}return r.c(e,t),e.prototype._next=function(t){this.values.push(u),this.observables.push(t)},e.prototype._complete=function(){var t=this.observables,e=t.length;if(0===e)this.destination.complete();else{this.active=e,this.toRespond=e;for(var n=0;n<e;n++){var r=t[n];this.add(Object(a.a)(this,r,r,n))}}},e.prototype.notifyComplete=function(t){0==(this.active-=1)&&this.destination.complete()},e.prototype.notifyNext=function(t,e,n,r,i){var o=this.values,s=o[n],a=this.toRespond?s===u?--this.toRespond:this.toRespond:0;o[n]=e,0===a&&(this.resultSelector?this._tryResultSelector(o):this.destination.next(o.slice()))},e.prototype._tryResultSelector=function(t){var e;try{e=this.resultSelector.apply(this,t)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(s.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(2);function i(t){return!!t&&(t instanceof r.a||"function"==typeof t.lift&&"function"==typeof t.subscribe)}},function(t,e,n){"use strict";var r=n(19),i=n(0),o=n(8),s=n(7),a=function(){function t(t){this.durationSelector=t}return t.prototype.call=function(t,e){return e.subscribe(new c(t,this.durationSelector))},t}(),c=function(t){function e(e,n){var r=t.call(this,e)||this;return r.durationSelector=n,r.hasValue=!1,r}return i.c(e,t),e.prototype._next=function(t){if(this.value=t,this.hasValue=!0,!this.throttled){var e=void 0;try{e=(0,this.durationSelector)(t)}catch(t){return this.destination.error(t)}var n=Object(s.a)(this,e);!n||n.closed?this.clearThrottle():this.add(this.throttled=n)}},e.prototype.clearThrottle=function(){var t=this.value,e=this.hasValue,n=this.throttled;n&&(this.remove(n),this.throttled=null,n.unsubscribe()),e&&(this.value=null,this.hasValue=!1,this.destination.next(t))},e.prototype.notifyNext=function(t,e,n,r){this.clearThrottle()},e.prototype.notifyComplete=function(){this.clearThrottle()},e}(o.a),u=n(2),l=n(16);function h(t){return!Object(l.a)(t)&&t-parseFloat(t)+1>=0}var p=n(13);function d(t){var e=t.index,n=t.period,r=t.subscriber;if(r.next(e),!r.closed){if(-1===n)return r.complete();t.index=e+1,this.schedule(t,n)}}function f(t,e){return void 0===e&&(e=r.a),function(t){return function(e){return e.lift(new a(t))}}(function(){return function(t,e,n){void 0===t&&(t=0);var i=-1;return h(e)?i=Number(e)<1?1:Number(e):Object(p.a)(e)&&(n=e),Object(p.a)(n)||(n=r.a),new u.a(function(e){var r=h(t)?t:+t-n.now();return n.schedule(d,r,{index:0,period:i,subscriber:e})})}(t,e)})}n.d(e,"a",function(){return f})},function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=w;var h="suspendedStart",p="suspendedYield",d="executing",f="completed",g={},y={};y[s]=function(){return this};var v=Object.getPrototypeOf,b=v&&v(v(M([])));b&&b!==r&&i.call(b,s)&&(y=b);var m=S.prototype=_.prototype=Object.create(y);k.prototype=m.constructor=S,S.constructor=k,S[c]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},l.awrap=function(t){return{__await:t}},O(T.prototype),T.prototype[a]=function(){return this},l.AsyncIterator=T,l.async=function(t,e,n,r){var i=new T(w(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},O(m),m[c]="Generator",m[s]=function(){return this},m.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=M,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return a.type="throw",a.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var c=i.call(s,"catchLoc"),u=i.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:M(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}}}function w(t,e,n,r){var i=e&&e.prototype instanceof _?e:_,o=Object.create(i.prototype),s=new j(r||[]);return o._invoke=function(t,e,n){var r=h;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw o;return N()}for(n.method=i,n.arg=o;;){var s=n.delegate;if(s){var a=E(s,n);if(a){if(a===g)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=x(t,e,n);if("normal"===c.type){if(r=n.done?f:p,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=f,n.method="throw",n.arg=c.arg)}}}(t,n,s),o}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function _(){}function k(){}function S(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function T(t){var e;this._invoke=function(n,r){function o(){return new Promise(function(e,o){!function e(n,r,o,s){var a=x(t[n],t,r);if("throw"!==a.type){var c=a.arg,u=c.value;return u&&"object"==typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,s)},function(t){e("throw",t,o,s)}):Promise.resolve(u).then(function(t){c.value=t,o(c)},s)}s(a.arg)}(n,r,e,o)})}return e=e?e.then(o,o):o()}}function E(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,E(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=x(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function M(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(65);e.fromFetch=function(t,e){return new r.Observable(function(n){var r,i=new AbortController,o=i.signal,s=!0,a=!1;return e?(e.signal&&(r=function(){o.aborted||i.abort()},e.signal.addEventListener("abort",r)),e.signal=o):e={signal:o},fetch(t,e).then(function(t){s=!1,n.next(t),n.complete()}).catch(function(t){s=!1,a||n.error(t)}),function(){a=!0,s&&i.abort()}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(66),i=n(71),o=n(72),s=n(73),a=n(46),c=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var r=this.operator,o=i.toSubscriber(t,e,n);if(r?o.add(r.call(o,this.source)):o.add(this.source||a.config.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),a.config.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){a.config.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),r.canReportError(t)?t.error(e):console.warn(e)}},t.prototype.forEach=function(t,e){var n=this;return new(e=u(e))(function(e,r){var i;i=n.subscribe(function(e){try{t(e)}catch(t){r(t),i&&i.unsubscribe()}},r,e)})},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[o.observable]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:s.pipeFromArray(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=u(t))(function(t,n){var r;e.subscribe(function(t){return r=t},function(t){return n(t)},function(){return t(r)})})},t.create=function(e){return new t(e)},t}();function u(t){if(t||(t=a.config.Promise||Promise),!t)throw new Error("no Promise impl found");return t}e.Observable=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(50);e.canReportError=function(t){for(;t;){var e=t,n=e.closed,i=e.destination,o=e.isStopped;if(n||o)return!1;t=i&&i instanceof r.Subscriber?i:null}return!0}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(68),i=n(69),o=n(51),s=n(70),a=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var e;if(!this.closed){var n=this._parentOrParents,a=this._unsubscribe,u=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof t)n.remove(this);else if(null!==n)for(var l=0;l<n.length;++l)n[l].remove(this);if(o.isFunction(a))try{a.call(this)}catch(t){e=t instanceof s.UnsubscriptionError?c(t.errors):[t]}if(r.isArray(u)){l=-1;for(var h=u.length;++l<h;){var p=u[l];if(i.isObject(p))try{p.unsubscribe()}catch(t){e=e||[],t instanceof s.UnsubscriptionError?e=e.concat(c(t.errors)):e.push(t)}}}if(e)throw new s.UnsubscriptionError(e)}},t.prototype.add=function(e){var n=e;if(!e)return t.EMPTY;switch(typeof e){case"function":n=new t(e);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){var r=n;(n=new t)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var i=n._parentOrParents;if(null===i)n._parentOrParents=this;else if(i instanceof t){if(i===this)return n;n._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return n;i.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[n]:o.push(n),n},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function c(t){return t.reduce(function(t,e){return t.concat(e instanceof s.UnsubscriptionError?e.errors:e)},[])}e.Subscription=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isArray=Array.isArray||function(t){return t&&"number"==typeof t.length}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isObject=function(t){return null!==t&&"object"==typeof t}},function(t,e,n){"use strict";function r(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}Object.defineProperty(e,"__esModule",{value:!0}),r.prototype=Object.create(Error.prototype),e.UnsubscriptionError=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(50),i=n(54),o=n(52);e.toSubscriber=function(t,e,n){if(t){if(t instanceof r.Subscriber)return t;if(t[i.rxSubscriber])return t[i.rxSubscriber]()}return t||e||n?new r.Subscriber(t,e,n):new r.Subscriber(o.empty)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.observable="function"==typeof Symbol&&Symbol.observable||"@@observable"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(74);function i(t){return t?1===t.length?t[0]:function(e){return t.reduce(function(t,e){return e(t)},e)}:r.noop}e.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return i(t)},e.pipeFromArray=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.noop=function(){}},function(t,e,n){"use strict";n.r(e),n(62);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=new WeakMap,i=t=>"function"==typeof t&&r.has(t),o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},a={},c={},u=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${u}--\x3e`,h=new RegExp(`${u}|${l}`),p="$lit$";class d{constructor(t,e){this.parts=[],this.element=e;const n=[],r=[],i=document.createTreeWalker(e.content,133,null,!1);let o=0,s=-1,a=0;const{strings:c,values:{length:l}}=t;for(;a<l;){const t=i.nextNode();if(null!==t){if(s++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let r=0;for(let t=0;t<n;t++)f(e[t].name,p)&&r++;for(;r-- >0;){const e=c[a],n=v.exec(e)[2],r=n.toLowerCase()+p,i=t.getAttribute(r);t.removeAttribute(r);const o=i.split(h);this.parts.push({type:"attribute",index:s,name:n,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(u)>=0){const r=t.parentNode,i=e.split(h),o=i.length-1;for(let e=0;e<o;e++){let n,o=i[e];if(""===o)n=y();else{const t=v.exec(o);null!==t&&f(t[2],p)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-p.length)+t[3]),n=document.createTextNode(o)}r.insertBefore(n,t),this.parts.push({type:"node",index:++s})}""===i[o]?(r.insertBefore(y(),t),n.push(t)):t.data=i[o],a+=o}}else if(8===t.nodeType)if(t.data===u){const e=t.parentNode;null!==t.previousSibling&&s!==o||(s++,e.insertBefore(y(),t)),o=s,this.parts.push({type:"node",index:s}),null===t.nextSibling?t.data="":(n.push(t),s--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(u,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=r.pop()}for(const t of n)t.parentNode.removeChild(t)}}const f=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},g=t=>-1!==t.index,y=()=>document.createComment(""),v=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class b{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let i,s=0,a=0,c=r.nextNode();for(;s<n.length;)if(i=n[s],g(i)){for(;a<i.index;)a++,"TEMPLATE"===c.nodeName&&(e.push(c),r.currentNode=c.content),null===(c=r.nextNode())&&(r.currentNode=e.pop(),c=r.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,i.name,i.strings,this.options));s++}else this.__parts.push(void 0),s++;return o&&(document.adoptNode(t),customElements.upgrade(t)),t
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}}const m=` ${u} `;class w{constructor(t,e,n,r){this.strings=t,this.values=e,this.type=n,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let r=0;r<t;r++){const t=this.strings[r],i=t.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===t.indexOf("--\x3e",i+1);const o=v.exec(t);e+=null===o?t+(n?m:l):t.substr(0,o.index)+o[1]+o[2]+p+o[3]+u}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}}const x=t=>null===t||!("object"==typeof t||"function"==typeof t),_=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class k{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new S(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let r=0;r<e;r++){n+=t[r];const e=this.parts[r];if(void 0!==e){const t=e.value;if(x(t)||!_(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||x(t)&&t===this.value||(this.value=t,i(t)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class O{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(y()),this.endNode=t.appendChild(y())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=y()),t.__insert(this.endNode=y())}insertAfterPart(t){t.__insert(this.startNode=y()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}const t=this.__pendingValue;t!==a&&(x(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):_(t)?this.__commitIterable(t):t===c?(this.value=c,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof b&&this.value.template===e)this.value.update(t.values);else{const n=new b(e,t.processor,this.options),r=n._clone();n.update(t.values),this.__commitNode(r),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,r=0;for(const i of t)void 0===(n=e[r])&&(n=new O(this.options),e.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(e[r-1])),n.setValue(i),n.commit(),r++;r<e.length&&(e.length=r,this.clear(n&&n.endNode))}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class T{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=a}}class E extends k{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends S{}let C=!1;try{const e={get capture(){return C=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(t){}class j{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=M(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const M=t=>t&&(C?{capture:t.capture,passive:t.passive,once:t.once}:t.capture),N=new class{handleAttributeExpressions(t,e,n,r){const i=e[0];return"."===i?new E(t,e.slice(1),n).parts:"@"===i?[new j(t,e.slice(1),r.eventContext)]:"?"===i?[new T(t,e.slice(1),n)]:new k(t,e,n).parts}handleTextExpression(t){return new O(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function R(t){let e=A.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},A.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const r=t.strings.join(u);return void 0===(n=e.keyString.get(r))&&(n=new d(t,t.getTemplateElement()),e.keyString.set(r,n)),e.stringsArray.set(t.strings,n),n}const A=new Map,L=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const D=(t,...e)=>new w(t,e,"html",N),U=133;function I(t,e){const{element:{content:n},parts:r}=t,i=document.createTreeWalker(n,U,null,!1);let o=q(r),s=r[o],a=-1,c=0;const u=[];let l=null;for(;i.nextNode();){a++;const t=i.currentNode;for(t.previousSibling===l&&(l=null),e.has(t)&&(u.push(t),null===l&&(l=t)),null!==l&&c++;void 0!==s&&s.index===a;)s.index=null!==l?-1:s.index-c,s=r[o=q(r,o)]}u.forEach(t=>t.parentNode.removeChild(t))}const F=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,U,null,!1);for(;n.nextNode();)e++;return e},q=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(g(e))return n}return-1},z=(t,e)=>`${t}--${e}`;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */let $=!0;void 0===window.ShadyCSS?$=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),$=!1);const G=["html","svg"],H=new Set;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */window.JSCompiler_renameProperty=(t,e)=>t;const V={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},B=(t,e)=>e!==t&&(e==e||t==t),Y={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:B},W=Promise.resolve(!0),Q=1,K=4,X=8,J=16,Z=32;class tt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=W,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const r=this._attributeNameForProperty(n,e);void 0!==r&&(this._attributeToPropertyMap.set(r,n),t.push(r))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=Y){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(e){const r=this[t];this[n]=e,this._requestUpdate(t,r)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t.finalize&&t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=B){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,r=e.converter||V,i="function"==typeof r?r:r.fromAttribute;return i?i(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,r=e.converter;return(r&&r.toAttribute||V.toAttribute)(t,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Z,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=Y){const r=this.constructor,i=r._attributeNameForProperty(t,n);if(void 0!==i){const t=r._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=this._updateState|X,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=this._updateState&~X}}_attributeToProperty(t,e){if(this._updateState&X)return;const n=this.constructor,r=n._attributeToPropertyMap.get(t);if(void 0!==r){const t=n._classProperties.get(r)||Y;this._updateState=this._updateState|J,this[r]=n._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~J}}_requestUpdate(t,e){let n=!0;if(void 0!==t){const r=this.constructor,i=r._classProperties.get(t)||Y;r._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||this._updateState&J||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|K;const n=this._updatePromise;this._updatePromise=new Promise((n,r)=>{t=n,e=r});try{await n}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const n=this.performUpdate();null!=n&&await n}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Z}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&Q}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&Q||(this._updateState=this._updateState|Q,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}tt.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const et=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e),nt=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}}:Object.assign({},e,{finisher(n){n.createProperty(e.key,t)}}),rt=(t,e,n)=>{e.constructor.createProperty(n,t)};function it(t){return(e,n)=>void 0!==n?rt(t,e,n):nt(t,e)}const ot="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,st=Symbol();class at{constructor(t,e){if(e!==st)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(ot?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ct=(t,...e)=>{const n=e.reduce((e,n,r)=>e+(t=>{if(t instanceof at)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[r+1],t[0]);return new at(n,st)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.0");const ut=t=>t.flat?t.flat(1/0):function t(e,n=[]){for(let r=0,i=e.length;r<i;r++){const i=e[r];Array.isArray(i)?t(i,n):n.push(i)}return n}(t);class lt extends tt{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];return Array.isArray(t)?ut(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t)):t&&e.push(t),e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ot?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof w&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}lt.finalized=!0,lt.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,i=L.has(e),o=$&&11===e.nodeType&&!!e.host,a=o&&!H.has(r),c=a?document.createDocumentFragment():e;if(((t,e,n)=>{let r=L.get(e);void 0===r&&(s(e,e.firstChild),L.set(e,r=new O(Object.assign({templateFactory:R},n))),r.appendInto(e)),r.setValue(t),r.commit()})(t,c,Object.assign({templateFactory:(t=>e=>{const n=z(e.type,t);let r=A.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},A.set(n,r));let i=r.stringsArray.get(e.strings);if(void 0!==i)return i;const o=e.strings.join(u);if(void 0===(i=r.keyString.get(o))){const n=e.getTemplateElement();$&&window.ShadyCSS.prepareTemplateDom(n,t),i=new d(e,n),r.keyString.set(o,i)}return r.stringsArray.set(e.strings,i),i})(r)},n)),a){const t=L.get(c);L.delete(c),((t,e,n)=>{H.add(t);const r=n?n.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:o}=i;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(r,t);const s=document.createElement("style");for(let t=0;t<o;t++){const e=i[t];e.parentNode.removeChild(e),s.textContent+=e.textContent}(t=>{G.forEach(e=>{const n=A.get(z(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),I(t,n)})})})(t);const a=r.content;n?function(t,e,n=null){const{element:{content:r},parts:i}=t;if(null==n)return void r.appendChild(e);const o=document.createTreeWalker(r,U,null,!1);let s=q(i),a=0,c=-1;for(;o.nextNode();)for(c++,o.currentNode===n&&(a=F(e),n.parentNode.insertBefore(e,n));-1!==s&&i[s].index===c;){if(a>0){for(;-1!==s;)i[s].index+=a,s=q(i,s);return}s=q(i,s)}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(s,a.firstChild);const t=new Set;t.add(s),I(n,t)}})(r,c,t.value instanceof b?t.value.template:void 0),s(e,e.firstChild),e.appendChild(c),L.set(e,t)}!i&&o&&window.ShadyCSS.styleElement(e.host)};const ht=ct`
    :host{
    position: relative;
    display:block;
    --color-night: #131315;
    --color-steel: #5F6468;
    --color-asbestos: #6C7B8A;
    --color-cloud: #f2f2f2;
    --color-north-eyes: #2839FF;
    }
    root{
    --color-night: #131315;
    --color-steel: #5F6468;
    --color-asbestos: #6C7B8A;
    --color-cloud: #f2f2f2;
    --color-north-eyes: #2839FF;
    }
    .wrapper{
        padding-bottom:80px;
    }
    .page {
        display: none;
    }
    .page[active] {
        display: block;
    }

    .global-elements{
        display: none;
    }
    .global-elements[active] {
        display: block;
    }
    .pwa-header{
        margin-top: 32px;
    }
    .bottom-bar{
        position: fixed;
        background: #FFF;
        width: 100%;
        bottom:0;
        box-sizing: border-box;
        padding: 16px 24px 16px;
        height: 48px;
        z-index: 10;
    }
    span.hasImage {
        color:#FFF !important;
    }
    .pwa-menu{
        padding: 12px 24px;
        overflow: hidden;
    }
    .pwa-menu__inner{
        overflow: scroll;
        display: flex;
        flex-wrap: nowrap;
    }
    .pwa-menu__inner::-webkit-scrollbar {
        width: 0!important;
        background: transparent;
        display: none;
    }
    .pwa-menu a{
        color: #140F26;
        text-decoration: none;
        font-size: 14px;
        margin-right: 16px;
    }
    .pwa-menu a[active]{
        font-weight: 500;
    }

`
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/,pt=ct`
    :host{
        position: relative;
        display:block;
    }
    .homepage-tabs{
        padding: 24px 24px 0;
        box-sizing: border-box;
        background-color:#FFF;
        width: 100%;
    }
    .homepage-tabs_sticky{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        padding: 12px 24px 0     !important;
        box-shadow: rgba(59, 74, 116, 0.14) 0px 3px 29px 0px;
    }
    .tab{
        margin-right: 24px;
    }
    .events{
        margin-top: 24px;
        border-top: 1px solid #f2f2f2;
    }
    .graph-item{
        height: 156px;
        min-width: 64px;
        border-left: 1px solid #f2f2f2;
        box-sizing: border-box;

    }
    .graph-times{
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        margin-top: -56px;
    }
    .graph-time{
        font-size: 10px;
    font-weight: 600;
    letter-spacing: .8px;
    margin-left: 10px;
    margin-top: 138px;
    }
    .schedule-graph{
        position: relative;
        height: 156px;
        padding: 0 24px;
        margin: 24px 0;
        box-sizing: border-box;
        overflow:hidden;
    }
    .graph-events{
        position: relative;
        display: flex;
        top: 20px;
        flex-wrap: nowrap;
    }
    .graph-event{
        height: 48px;
        font-size: 11px;
        text-transform: uppercase;
        font-weight: 600;
        color: #ffF;
        letter-spacing: .5px;
        padding: 8px 12px;
        box-sizing: border-box;

    }
    .graph-scrollable{
        overflow-x:scroll;
        overflow-y:hidden;
    }
    .graph-scrollable::-webkit-scrollbar {
    display: none;
}


    .events {
        display: none;
    }
    .events[active] {
        display: block;
    }
    .news{
        /*padding: 24px;*/
        /*overflow: hidden;*/
        position: relative;
    }
    pwa-card{
        margin-right: 12px;
    }
    .news-scroll{
        display: flex;
        -webkit-scroll-snap-type: proximity;
        scroll-snap-type: x proximity;
        -webkit-scroll-snap-points-x: repeat(100%);
        scroll-snap-points-x: repeat(100%);
        overflow-x: auto;
        overflow-y: hidden;
        height: 164px;
        padding: 24px 0 0 24px;
    }
    .news-scroll::-webkit-scrollbar {
     display: none;
    }
    .news-scroll pwa-card{

        scroll-snap-align: proximity;

    }
    span.hasImage {
        color:#FFF !important;
    }
    .card-photo{
        width: 38px;
        height: 38px;
        box-shadow: 0 3px 18px 0 rgba(59,74,116,0.14);
        display: flex;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
    }
    .card-photo img{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-size: cover;

    }
    .card-background{
        width: 100%;
        height: 140px;
        overflow: hidden;
        position: relative;
        z-index: 1;
    }
    .card-background img{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-size: cover;
        display:block;
    }
    .card-background:before{
        content: '';
        width: 112px;
        height: 140px;
        position: absolute;
        display: block;
        background-color: rgba(0,0,0,.2 );
        top: 0;
        left: 0;
        z-index: 2;
    }
    .icon{
        width: 38px;
        height: 38px;
        box-shadow: 0 3px 18px 0 rgba(59,74,116,0.14);
        display: flex;
        border-radius: 50%;
    }
    .icon svg{
        display: block;
        margin: auto;
    }
    .icon-green{
        background-image: linear-gradient(135deg, #2DC9EB 0%, #14D2B8 100%);
    }

    .pwa-fab{
        position: fixed;
        right: 10px;
        bottom: 10px;
        z-index: 20;
    }
    .pwa-filter{
        width: 100vw;
        height: 100%;
        position: fixed;
        left:0;
        max-height: calc(100% - 135px);
        top: 135px;
        z-index: 200;
        background: #FFF;
        border-radius: 20px 20px 0 0;
        transition: transform 0.2s ease-in-out, visibility 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
        box-shadow: rgba(59, 74, 116, 0.14) 0px 3px 29px 0px;
        visibility: hidden;
        box-sizing: border-box;
        padding: 24px;

    }
    .pwa-filter[active]{
        transform: translateX(0);
        visibility: visible;
    }
    .underlay{
        z-index: 198;
        background-color: #131315;
        bottom: 0;
        height: 100vh;
        left: 0;
        opacity: 0;
        pointer-events: none;
        position: fixed;
        right: 0;
        top: 0;
        transition: opacity 250ms ease-in-out;
        will-change: opacity;
    }
    .underlay[active]{
        pointer-events: auto;
        opacity: 0.67;
    }
    .filter-header{
        display: flex;
        justify-content: space-between;
    }

    .filter-reset{
        padding: 0;
        border: none;
        font-family: inherit;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
        -webkit-appearance: none;
        font-size: 14px;
        line-height: 48px;
        padding: 0 16px;
        margin: -16px 0 0 -16px;
        color: #4048EF;
        font-weight: 500;
    }
    .filter-close{
        width: 48px;
        height: 48px;
        display: flex;
        margin: -12px -12px 0 0;
    }
    .filter-close svg{
        margin: auto;
    }
    .event-link{
        color: inherit;
        text-decoration: none;
    }
`;class dt extends lt{constructor(){super(...arguments),this.active=!1}shouldUpdate(){return this.active}}!function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);o>3&&s&&Object.defineProperty(e,n,s)}([it({type:Boolean})],dt.prototype,"active",void 0);const ft=ct`
    :host{
        position: relative;
        display: inline-block;
    }
    .pwa-tab_button{
        background-color:#FFF;
        font-size: 22px;
        color: var(--color-night);
        line-height: 28px;
        letter-spacing: .56px;
        font-weight: bold;
        font-family: 'Graphik-Web', arial, sans-serif;
        padding: 0 0 8px 0;
        border:none;
        border-bottom: 2px solid rgba(0,0,0,0);
    }
    .pwa-tab_button:active{
        outline: none;
    }
    .pwa-tab_button:focus{
        outline: none;
    }
    .pwa-tab_button[selected]{
        border-bottom: 2px solid rgba(0,0,0,1);
    }
    ::slotted(span) {
        font-family: 'Graphik-Web', arial, sans-serif;
    }

`;var gt=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let yt=class extends lt{constructor(){super(...arguments),this.text="prop",this._selected=!1}firstUpdated(){}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n)}adoptedCallback(){}static get styles(){return[ft]}render(){return D`
        <div class="pwa-tab">
          <button ?selected="${this._selected}" class="pwa-tab_button">

            <slot></slot>
          </button>
        </div>
    `}};gt([it({type:String})],yt.prototype,"text",void 0),gt([it({type:Boolean})],yt.prototype,"_selected",void 0),yt=gt([et("pwa-tab")],yt);const vt=ct`
    :host{
        position: relative;
        display:block;
    }
    .short-event{
         padding: 0 24px;
         display: grid;
         grid-template-columns: 42px 1fr;
         grid-column-gap: 24px;
         padding: 16px 48px 12px 24px;
         border-bottom: 1px solid #F3F4F5;
         padding-right: 48px;
    }
    .event-time{
        font-size: 15px;
        line-height: 20px;
    }
    .event-time__start{
        margin-bottom: 4px;
        text-align: right;
    }
    .event-time__end{
        font-size: 12px;
        line-height: 20px;
        color: var(--color-night);
        text-align: right;
    }
    .event-body__title{
        font-size: 15px;
        line-height: 20px;
        margin-bottom: 4px;
        font-weight: 500;
    }
    .event-body__author{
        font-size: 12px;
        line-height: 20px;
        color: var(--color-asbestos);
        display: flex;
        align-items: center;
    }
    .author__avatar{
        width: 16px;
        height: 16px;
        margin-right: 8px;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
    }
    .author__avatar img{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-size: cover;
    }

`;var bt=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let mt=class extends lt{constructor(){super(...arguments),this.firstProp="prop",this.event={}}firstUpdated(){}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}adoptedCallback(){}static get styles(){return[vt]}render(){return D`
      <div class="short-event">
        <div class="event-time">
            <div class="event-time__start">
             ${this.isValue(this.event.Time_start)}
            </div>
            <div class="event-time__end">
              ${this.isValue(this.event.Time_end)}
            </div>
        </div>
        <div class="event-body">
            <div class="event-body__title">
              ${this.isValue(this.event.Title)}
            </div>
            <div class="event-body__author">
              <div class="author__avatar">
                <img src="${this.isValue(this.event.author.pic)}">
              </div>
              ${this.isValue(this.event.author.Name)} ${this.isValue(this.event.author.Company)}
            </div>
        </div>
      </div>
    `}isValue(t){return t||""}};bt([it({type:String})],mt.prototype,"firstProp",void 0),bt([it({type:Object})],mt.prototype,"event",void 0),mt=bt([et("pwa-event")],mt);const wt=ct`
    :host{
        position: relative;
        display:block;
    }
    .card{
        width: 112px;
        height: 140px;
        background-color: #FFF;
        background: #FFFFFF;
        box-shadow: 0 3px 29px 0 rgba(59,74,116,0.14);
        border-radius:  12px;


        box-sizing: border-box;
        position: relative;
        overflow: hidden;
    }
    .card-title{
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
    }

    .card-content{
        position: absolute;
        bottom: 16px;
        z-index: 2;
        padding: 0 12px;
    }
    .card-link{
        font-size: 14px;
        text-decoration: none;
        font-weight: 500;
        color: var(--color-north-eyes);
        }


    .card-icon {
        position: absolute;
        top: 16px;
        left:12px;
    }



    span.hasImage {
        color:#FFF !important;
    }
`;var xt=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let _t=class extends lt{constructor(){super(...arguments),this.firstProp="prop"}firstUpdated(){this.shadowRoot.querySelector("slot").assignedNodes()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}adoptedCallback(){}static get styles(){return[wt]}render(){return D`
      <div class="card">
        <div class="card-icon">
            <slot name="icon"></slot>
          </div>
        <div class="card-content">
          <div class="card-title">
            <slot name="title"></slot>
          </div>
        </div>
        <div class="background">
          <slot name="background"></slot>
        </div>
      </div>
    `}};xt([it({type:String})],_t.prototype,"firstProp",void 0),_t=xt([et("pwa-card")],_t);const kt=ct`
    :host{
        position: relative;
        display:block;
    }

    .button_fab{
        padding: 0;
        border: none;
        font-family: inherit;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
        -webkit-appearance: none;
        width: 56px;
        /* background-color: #1A73E8; */
        height: 56px;

        background-image: linear-gradient(-45deg, #4048EF 0%, #5A7BEF 100%);

        box-shadow: 0 1px 3px 0 #4048EF4d, 0 4px 8px 3px #4048EF26;
        z-index: 20;
        border-radius: 50%;
    }
    .button_fab:focus{
        outline: none;
    }
    .button_fab:active{
        outline: none;
    }
    ::slotted(svg){
        fill: #FFF;
        display: block;
        margin: auto;
    }
`;var St=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Ot=class extends lt{constructor(){super(...arguments),this.firstProp="prop"}firstUpdated(){}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}attributeChangedCallback(){}adoptedCallback(){}static get styles(){return[kt]}render(){return D`
        <button class="button_fab">
          <div class="fab-icon">
            <slot></slot>
          </div>
        </button>
    `}};St([it({type:String})],Ot.prototype,"firstProp",void 0),Ot=St([et("pwa-fab")],Ot);var Tt=n(5);const Et={active:null,filter:"first",title:"Сессии"};let Pt=class extends Tt.a{constructor(){super(Et)}};const Ct=new(Pt=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}([Object(Tt.b)({name:"event"})],Pt));var jt=n(59);function Mt(t){Ct.update({title:t})}const Nt=Object(Tt.d)(Ct,{});let Rt;Nt.selectActive();const At=Nt.select(t=>t.title);Nt.select(t=>t.filter).subscribe(t=>{Rt=t});const Lt=Object(jt.a)(Nt.select(t=>t.filter),Nt.selectAll(),function(t,e){switch(t){case"first":return e.filter(t=>"2019-05-27T00:00:00.000Z"===t.Date);case"second":return e.filter(t=>"2019-05-28T00:00:00.000Z"===t.Date);default:return e}});var Dt=n(31),Ut=n(0),It=n(8),Ft=n(18),qt=n(7);function zt(t){return function(e){var n=new $t(t),r=e.lift(n);return n.caught=r}}var $t=function(){function t(t){this.selector=t}return t.prototype.call=function(t,e){return e.subscribe(new Gt(t,this.selector,this.caught))},t}(),Gt=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.selector=n,i.caught=r,i}return Ut.c(e,t),e.prototype.error=function(e){if(!this.isStopped){var n=void 0;try{n=this.selector(e,this.caught)}catch(e){return void t.prototype.error.call(this,e)}this._unsubscribeAndRecycle();var r=new Ft.a(this,void 0,void 0);this.add(r),Object(qt.a)(this,n,void 0,void 0,r)}},e}(It.a),Ht=n(25),Vt=n(30);const Bt="https://floating-thicket-54167.herokuapp.coml";var Yt=function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function s(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,a)}c((r=r.apply(t,e||[])).next())})};function Wt(t){return Yt(this,void 0,void 0,function*(){return yield Ct.setActive(t)})}var Qt=n(2),Kt=n(16),Xt=n(12),Jt=n(4);function Zt(t,e,n,r){return Object(Xt.a)(n)&&(r=n,n=void 0),r?Zt(t,e,n).pipe(Object(Jt.a)(function(t){return Object(Kt.a)(t)?r.apply(void 0,t):r(t)})):new Qt.a(function(r){!function t(e,n,r,i,o){var s;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(e)){var a=e;e.addEventListener(n,r,o),s=function(){return a.removeEventListener(n,r,o)}}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(e)){var c=e;e.on(n,r),s=function(){return c.off(n,r)}}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(e)){var u=e;e.addListener(n,r),s=function(){return u.removeListener(n,r)}}else{if(!e||!e.length)throw new TypeError("Invalid event target");for(var l=0,h=e.length;l<h;l++)t(e[l],n,r,i,o)}i.add(s)}(t,e,function(t){arguments.length>1?r.next(Array.prototype.slice.call(arguments)):r.next(t)},r,n)})}Object.prototype.toString;var te=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let ee=class extends dt{constructor(){super(...arguments),this._tab=1,this.times=["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"],this.isSticky=!1,this.isFilter=!1}firstUpdated(){this.getActiveTab()}connectedCallback(){super.connectedCallback(),function(){Yt(this,void 0,void 0,function*(){return yield Object(Ht.fromFetch)(`${Bt}/events`).pipe(Object(Dt.a)(t=>t.ok?t.json():Object(Vt.a)({error:!0,message:`Error ${t.status}`})),zt(t=>(console.error(t),Object(Vt.a)({error:!0,message:t.message})))).subscribe({next:t=>{Ct.add(t)}})})}(),this.scrollEvents(),Lt.subscribe(t=>{this.events=t})}static get styles(){return[pt]}render(){return D`
      <div class="news">
        <div class="news-scroll">
          <pwa-card>
            <span class="hasImage" slot="title">Фотоотчет первого дня</span>
            <div class="card-background" slot="background">
              <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3000&q=80"></img>
            </div>
          </pwa-card>
          <pwa-card>
            <div class="card-icon" slot="icon">
              <div class="icon icon-green" >
                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="bug" fill="#FFFFFF" fill-rule="nonzero">
                            <path d="M23.854,5.148 C23.097,4.391 21.177,4.997 20.12,5.414 L18.587,3.881 C19.004,2.824 19.609,0.902 18.854,0.147 C18.659,-0.048 18.342,-0.048 18.147,0.147 C17.952,0.342 17.952,0.659 18.147,0.854 C18.337,1.044 18.151,2.253 17.645,3.546 L14.43,4.005 C14.183,4.04 14,4.251 14,4.5 C14,4.669 14.01,4.835 14.025,5 L11.328,5 C10.849,5 10.395,5.138 10,5.387 L10,3.5 C10,3.224 9.776,3 9.5,3 C9.224,3 9,3.224 9,3.5 L9,6.292 L6.499,8.793 L4.853,7.147 C4.658,6.952 4.341,6.952 4.146,7.147 C3.951,7.342 3.951,7.659 4.146,7.854 L5.792,9.5 L4.318,10.975 C4.013,11.28 3.774,11.638 3.57,12.014 C3.546,12.01 3.525,12 3.5,12 L0.5,12 C0.224,12 0,12.224 0,12.5 C0,12.776 0.224,13 0.5,13 L3.173,13 C3.071,13.377 3,13.763 3,14.157 L3,16.5 C3,17.733 3.5,18.85 4.306,19.663 C4.311,19.669 4.313,19.676 4.318,19.682 C4.323,19.687 4.331,19.689 4.336,19.694 C5.15,20.5 6.267,21 7.5,21 L9.843,21 C10.241,21 10.625,20.931 11,20.831 L11,23.5 C11,23.776 11.224,24 11.5,24 C11.776,24 12,23.776 12,23.5 L12,20.5 C12,20.477 11.99,20.457 11.987,20.435 C12.361,20.231 12.717,19.991 13.026,19.682 L14.5,18.208 L16.146,19.854 C16.244,19.951 16.372,20 16.5,20 C16.628,20 16.756,19.951 16.853,19.854 C17.048,19.659 17.048,19.342 16.853,19.147 L15.207,17.5 L17.707,14.999 L20.5,14.999 C20.776,14.999 21,14.775 21,14.499 C21,14.223 20.776,14 20.5,14 L18.612,14 C18.861,13.605 19,13.149 19,12.671 L19,9.974 C19.165,9.989 19.331,10 19.5,10 C19.749,10 19.96,9.817 19.996,9.572 L20.455,6.356 C21.747,5.85 22.957,5.664 23.147,5.855 C23.342,6.05 23.659,6.05 23.854,5.855 C24.049,5.66 24.049,5.343 23.854,5.148 Z M4,14.157 C4,13.236 4.374,12.334 5.025,11.682 L6.852,9.855 C6.852,9.855 6.853,9.855 6.853,9.854 C6.853,9.853 6.853,9.853 6.854,9.853 L9.85,6.855 C9.852,6.853 9.854,6.852 9.855,6.85 L10.267,6.438 C10.547,6.16 10.933,6 11.328,6 L14.213,6 C14.426,6.749 14.79,7.435 15.276,8.017 L4.706,18.586 C4.269,18.002 4,17.284 4,16.5 L4,14.157 Z M18,12.671 C18,13.072 17.844,13.448 17.561,13.732 L17.147,14.146 C17.147,14.146 17.147,14.146 17.147,14.146 L14.149,17.145 C14.148,17.146 14.148,17.146 14.147,17.146 C14.146,17.146 14.146,17.147 14.146,17.148 L12.32,18.974 C11.657,19.636 10.779,20 9.843,20 L7.5,20 C6.715,20 5.998,19.731 5.414,19.293 L15.984,8.724 C16.566,9.21 17.251,9.574 18,9.786 L18,12.671 Z M15.02,4.932 L17.823,4.531 L19.469,6.177 L19.068,8.98 C16.93,8.777 15.224,7.07 15.02,4.932 Z" id="Shape"></path>
                        </g>
                    </g>
                </svg>
              </div>
            </div>
            <span slot="title">Конкурсы партнеров</span>
          </pwa-card>
          <pwa-card>
            <div class="card-icon card-photo" slot="icon">
              <img src="https://images.ctfassets.net/nn534z2fqr9f/6hnyeIXnIQ6IqSQuOkw0o4/ff0be71c29d25497ca20da9386e94562/5288.jpg?w=170">
            </div>
            <span slot="title">Виталий Фридман</span>
          </pwa-card>
        </div>
      </div>
      <!--
      <section class="schedule-graph">
        <div class="graph-scrollable">
          <div  class="graph-events">
            <div class="graph-event" style="background: #007aff;width: 192px;">Регистрация</div>
            <div class="graph-event" style="background: #1A88FF;width: 64px;"></div>
          </div>
          <div class="graph-times">
          ${this.times.map(t=>D`
          <div class="graph-item">
            <div class="graph-time">${t}</div>
          </div>
          `)}
          </div>
        </div>
      </section>
      -->
      <section class="homepage-tabs  ${this.isSticky?"homepage-tabs_sticky":""}">
          <pwa-tab class="tab" text="27 мая" ?_selected="${1===this._tab}" @click="${()=>{this.setActive("first")}}">
            <span>27 мая</span>
          </pwa-tab>
          <pwa-tab class="tab" ?_selected="${2===this._tab}" @click="${()=>{this.setActive("second")}}">
            <span>28 мая</span>
          </pwa-tab>
        </section>
        <section class="events" active>
          ${this.events.map(t=>D`
            <a href="/event/${t._id}" class="event-link">
              <pwa-event class="list-event" .event="${t}"></pwa-event>
            </a>
          `)}
        </section>
        <pwa-fab class="pwa-fab" @click="${()=>{this.setFilter(!0)}}">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </pwa-fab>
        <div class="pwa-filter-container">
          <div class="pwa-filter" ?active="${this.isFilter}">
            <div class="filter-header">
              <button class="filter-reset">Сбросить</button>
              <button class="filter-close" @click="${()=>{this.setFilter(!1)}}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0V0z"/>
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="underlay" ?active="${this.isFilter}"  @click="${()=>{this.setFilter(!1)}}">
          </div>
      </div>
    `}setActive(t){console.log(t),this._tab="first"===t?1:2,function(t){Ct.update({filter:t})}(t)}setActiveEvent(t){Wt(t)}setFilter(t){this.isFilter=t}getActiveTab(){Nt.select(t=>t.filter).subscribe(t=>{this._tab="first"===t?1:2})}scrollEvents(){Zt(document,"scroll").subscribe(t=>{let e=window.pageYOffset||document.documentElement.scrollTop;this.isSticky=e>=338})}};te([it({type:Number})],ee.prototype,"_tab",void 0),te([it({type:Array})],ee.prototype,"events",void 0),te([it({type:Array})],ee.prototype,"times",void 0),te([it({type:Boolean})],ee.prototype,"isSticky",void 0),te([it({type:Boolean})],ee.prototype,"isFilter",void 0),ee=te([et("pwa-home")],ee);const ne=ct`
    :host{
        position: relative;
        display:block;
    }
    .event-header{
        font-size: 28px;
        line-height: 32px;
        font-weight: bold;
        letter-spacing: -0.2px;
        margin-bottom: 24px;
    }
    .page-wrapper{
        padding-top: 120px;
        padding-bottom: 64px;
    }
    .page-content{
        padding: 0 24px;
    }
    .event-author{
        font-size: 15px;
        line-height: 20px;
        font-weight: 500;
        display: flex;
        align-items: center;
    }
    .author__avatar{
        width: 24px;
    height: 24px;
        margin-right: 10px;
       position: relative;
        overflow: hidden;
        border-radius: 50%;
     }
     .author__avatar img{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-size: cover;
     }
    .event-content p{
        font-size: 16px;
        line-height: 24px;
        margin: 24px 0;
    }
    .event-image_container{
        width: 100%;
        height: 216px;
        position: relative;
        overflow: hidden;
        margin: 48px 0 ;
    }
    .event-image{
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
    }
    .event-header-2{
        font-size: 22px;
        line-height: 28px;
        font-weight: bold;
        margin-bottom: 16px;
    }
    .page-list{
        font-size: 15px;
        line-height: 24px;
        margin: 0 0 4px 0;
    }
    .event-date{
        text-transform: capitalize;
    }
    .header__button{
        width: 48px;
        height: 48px;
        display: flex;
    }
    .event-controls{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 24px;
        box-sizing: border-box;
        transform: translateY(32px);
        transition: all .2s ease-out;
        background-color:#FFF;
    }
    .header__button svg{
        margin: auto;
        width: 20px;
    }
    .button_back{
        margin: 0 0 0 -12px;
    }
    .button_share{
        margin: 0 -16px 0 0;
    }
    .event-controls_sticky{
        position: fixed;
        top: 0;
        left: 0;
        transform: none;
        transition: all .2s ease-in;
        background-color:#F3F4F5;
        z-index:100;
    }
`,re=D`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>`,ie=(D`
<svg width="27px" height="21px" viewBox="0 0 27 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="@-S-quiet" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="arrow-left-S-quiet" transform="translate(-11.000000, -14.000000)" stroke="#464648" stroke-width="2">
            <g id="arrow-left" transform="translate(12.000000, 15.000000)">
                <path d="M25,9.5 L0,9.5" id="Shape"></path>
                <polyline id="Shape" points="9.375 19 0 9.5 9.375 0"></polyline>
            </g>
        </g>
    </g>
</svg>`,D`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/>
        <path fill="none" d="M0 0h24v24H0z"/>
    </svg>`),oe=D`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
    </svg>
`,se=(D`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
`,D`
<svg width="34px" height="31px" viewBox="0 0 34 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="@-S-quiet" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="log-out" transform="translate(17.000000, 15.500000) rotate(-90.000000) translate(-17.000000, -15.500000) translate(3.000000, 0.000000)" stroke="#2B3542" stroke-width="2">
            <path d="M10.8888889,31 L3.11111111,31 C1.39289189,31 0,29.6120827 0,27.9 L0,3.1 C0,1.38791728 1.39289189,0 3.11111111,0 L10.8888889,0" id="Shape"></path>
            <polyline id="Shape" points="21.7777778 21.7 28 15.5 21.7777778 9.3"></polyline>
            <path d="M28,15.5 L9.33333333,15.5" id="Shape"></path>
        </g>
    </g>
</svg>`,D`
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="calendar" fill="#000000">
            <path d="M20.5,24 L3.5,24 C1.57,24 0,22.43 0,20.5 L0,5.5 C0,3.57 1.57,2 3.5,2 C3.776,2 4,2.224 4,2.5 C4,2.776 3.776,3 3.5,3 C2.122,3 1,4.122 1,5.5 L1,20.5 C1,21.878 2.122,23 3.5,23 L20.5,23 C21.878,23 23,21.878 23,20.5 L23,5.5 C23,4.122 21.878,3 20.5,3 C20.224,3 20,2.776 20,2.5 C20,2.224 20.224,2 20.5,2 C22.43,2 24,3.57 24,5.5 L24,20.5 C24,22.43 22.43,24 20.5,24 Z" id="Path" fill-rule="nonzero"></path>
            <path d="M16.5,3 L7.5,3 C7.224,3 7,2.776 7,2.5 C7,2.224 7.224,2 7.5,2 L16.5,2 C16.776,2 17,2.224 17,2.5 C17,2.776 16.776,3 16.5,3 Z" id="Path" fill-rule="nonzero"></path>
            <path d="M5.5,5 C5.224,5 5,4.776 5,4.5 L5,0.5 C5,0.224 5.224,0 5.5,0 C5.776,0 6,0.224 6,0.5 L6,4.5 C6,4.776 5.776,5 5.5,5 Z" id="Path" fill-rule="nonzero"></path>
            <path d="M18.5,5 C18.224,5 18,4.776 18,4.5 L18,0.5 C18,0.224 18.224,0 18.5,0 C18.776,0 19,0.224 19,0.5 L19,4.5 C19,4.776 18.776,5 18.5,5 Z" id="Path" fill-rule="nonzero"></path>
            <g id="Group-10" transform="translate(7.000000, 9.000000)">
                <rect id="Rectangle" transform="translate(5.000000, 5.000000) rotate(-360.000000) translate(-5.000000, -5.000000) " x="0" y="4.54545455" width="10" height="1"></rect>
                <polygon id="Rectangle" transform="translate(5.000000, 5.000000) rotate(-90.000000) translate(-5.000000, -5.000000) " points="-1.72084569e-15 4.54545455 10 4.54545455 10 5.45454545 -1.72084569e-15 5.45454545"></polygon>
            </g>
        </g>
    </g>
</svg>
`,D`
<svg width="30px" height="33px" viewBox="0 0 30 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  stroke="#2B3542">
    <g id="Page-1" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="home" transform="translate(1.000000, 1.000000)"  stroke-width="2">
            <path d="M0,10.85 L14,0 L28,10.85 L28,27.9 C28,29.6120827 26.6071081,31 24.8888889,31 L3.11111111,31 C1.39289189,31 0,29.6120827 0,27.9 L0,10.85 Z" id="Shape"></path>
            <polyline id="Shape" points="9.33333333 31 9.33333333 15.5 18.6666667 15.5 18.6666667 31"></polyline>
        </g>
    </g>
</svg>`,D`

<svg width="30px" height="33px" viewBox="0 0 30 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#2B3542">
    <g id="Page-1" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="calendar" transform="translate(1.000000, 1.000000)"  stroke-width="2">
            <rect id="Rectangle-path" x="0" y="3.1" width="28" height="27.9" rx="2.60000014"></rect>
            <path d="M20.2222222,0 L20.2222222,6.2" id="Shape"></path>
            <path d="M7.77777778,0 L7.77777778,6.2" id="Shape"></path>
            <path d="M0,12.4 L28,12.4" id="Shape"></path>
        </g>
    </g>
</svg>`,D`
<svg width="37px" height="31px" viewBox="0 0 37 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#2B3542" >
    <g id="Page-1"  stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="heart" transform="translate(1.000000, 1.000000)" stroke-width="2">
            <path d="M31.5636364,3.0455 C29.9225751,1.44588677 27.696356,0.547170287 25.375,0.547170287 C23.053644,0.547170287 20.8274249,1.44588677 19.1863636,3.0455 L17.5,4.6885 L15.8136364,3.0455 C12.3957469,-0.284500814 6.85425318,-0.284500774 3.43636373,3.04550009 C0.0184742787,6.37550095 0.0184742374,11.7744991 3.43636364,15.1045 L5.12272727,16.7475 L17.5,28.8065 L29.8772727,16.7475 L31.5636364,15.1045 C33.2054681,13.5056375 34.1279044,11.3366639 34.1279044,9.075 C34.1279044,6.81333606 33.2054681,4.64436251 31.5636364,3.0455 Z" id="Shape"></path>
        </g>
    </g>
</svg>`,D`

<svg width="37px" height="33px" viewBox="0 0 37 33" stroke="#2B3542"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="map" transform="translate(1.000000, 1.000000)" stroke-width="2">
            <polygon id="Shape" points="0 6.2 0 31 11.1363636 24.8 23.8636364 31 35 24.8 35 0 23.8636364 6.2 11.1363636 0"></polygon>
            <path d="M11.1363636,0 L11.1363636,24.8" id="Shape"></path>
            <path d="M23.8636364,6.2 L23.8636364,31" id="Shape"></path>
        </g>
    </g>
</svg>`,D`
<svg width="33px" height="8px" viewBox="0 0 33 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="more-horizontal" transform="translate(1.000000, 1.000000)" stroke="#2B3542" stroke-width="2">
            <ellipse id="Oval" cx="15.5" cy="3" rx="3.1" ry="3"></ellipse>
            <ellipse id="Oval" cx="27.9" cy="3" rx="3.1" ry="3"></ellipse>
            <ellipse id="Oval" cx="3.1" cy="3" rx="3.1" ry="3"></ellipse>
        </g>
    </g>
</svg>`,D`
<svg width="35px" height="35px" viewBox="0 0 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#d7d8de">
    <g id="Page-1" stroke="none" stroke-width="1">
        <path d="M21.4568949,4.56521739 L6.08578473,4.56521739 C2.72766816,4.56521739 0,7.28991603 0,10.6510021 L0,28.9142153 C0,32.2723318 2.72469863,35 6.08578473,35 L24.3489979,35 C27.7071145,35 30.4347826,32.2753014 30.4347826,28.9142153 L30.4347826,13.5429542 C29.9429196,13.6430845 29.4339885,13.6956522 28.9130435,13.6956522 C24.7108769,13.6956522 21.3043478,10.2805725 21.3043478,6.08695652 C21.3043478,5.56581285 21.3568732,5.05690643 21.4568949,4.56521739 L21.4568949,4.56521739 L21.4568949,4.56521739 L21.4568949,4.56521739 Z M22.826087,6.08695652 C22.826087,2.72522326 25.5581507,0 28.9130435,0 C32.2747767,0 35,2.73206371 35,6.08695652 C35,9.44868978 32.2679363,12.173913 28.9130435,12.173913 C25.5513102,12.173913 22.826087,9.44184933 22.826087,6.08695652 L22.826087,6.08695652 L22.826087,6.08695652 L22.826087,6.08695652 Z"></path>
    </g>
</svg>`,D`
<svg width="22px" height="16px" viewBox="0 0 22 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Pure-Black" transform="translate(-332.000000, -28.000000)">
            <g id="MqIRB0tb9wJ" transform="translate(327.000000, 20.000000)">
                <polygon id="Shape" points="0 0 32 0 32 32 0 32"></polygon>
                <g id="Group" transform="translate(5.000000, 8.000000)" fill="#0E1626" fill-rule="nonzero">
                    <rect id="Rectangle-15" x="0" y="7" width="16" height="2"></rect>
                    <rect id="Rectangle-15" x="0" y="14" width="20" height="2"></rect>
                    <rect id="Rectangle-15" x="0" y="0" width="22" height="2"></rect>
                </g>
            </g>
        </g>
    </g>
</svg>
`,D`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
`,D`
<svg width="25px" height="25px" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Pure-Black" transform="translate(-283.000000, -24.000000)">
            <g id="eJqb3UEuW8s" transform="translate(279.000000, 20.000000)">
                <polygon id="Shape" points="0 0 32 0 32 32 0 32"></polygon>
                <g id="Group-7" transform="translate(5.000000, 5.000000)" stroke="#0E1626" stroke-width="2">
                    <circle id="Oval" cx="8.53333333" cy="8.53333333" r="8.53333333"></circle>
                    <path d="M21.8666667,21.8666667 L15.0784416,15.0784416" id="Line" stroke-linecap="square"></path>
                </g>
            </g>
        </g>
    </g>
</svg>
`);var ae=n(58);function ce(t){if(t)return ae.Marked.parse(t)}var ue={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function le(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var he={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function pe(t){return function(e,n){var r,i=n||{};if("formatting"===(i.context?String(i.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,s=i.width?String(i.width):o;r=t.formattingValues[s]||t.formattingValues[o]}else{var a=t.defaultWidth,c=i.width?String(i.width):t.defaultWidth;r=t.values[c]||t.values[a]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function de(t){return function(e,n){var r=String(e),i=n||{},o=r.match(t.matchPattern);if(!o)return null;var s=o[0],a=r.match(t.parsePattern);if(!a)return null;var c=t.valueCallback?t.valueCallback(a[0]):a[0];return{value:c=i.valueCallback?i.valueCallback(c):c,rest:r.slice(s.length)}}}function fe(t){return function(e,n){var r=String(e),i=n||{},o=i.width,s=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],a=r.match(s);if(!a)return null;var c,u=a[0],l=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(l)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(l,function(t){return t.test(r)}):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(l,function(t){return t.test(r)}),c=t.valueCallback?t.valueCallback(c):c,{value:c=i.valueCallback?i.valueCallback(c):c,rest:r.slice(u.length)}}}var ge={formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof ue[t]?ue[t]:1===e?ue[t].one:ue[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:{date:le({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:le({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:le({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},formatRelative:function(t,e,n,r){return he[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:pe({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:pe({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:pe({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:pe({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:pe({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:de({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:fe({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:fe({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:fe({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:fe({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:fe({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function ye(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function ve(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function be(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");return function(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=ve(t).getTime(),r=ye(e);return new Date(n+r)}(t,-ye(e))}function me(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e=e||{})e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function we(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function xe(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var _e={p:xe,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),i=r[1],o=r[2];if(!o)return we(t,e);switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",we(i,e)).replace("{{time}}",xe(o,e))}},ke=6e4;function Se(t){var e=new Date(t.getTime()),n=e.getTimezoneOffset();e.setSeconds(0,0);var r=e.getTime()%ke;return n*ke+r}var Oe=["D","DD"],Te=["YY","YYYY"];function Ee(t){return-1!==Oe.indexOf(t)}function Pe(t){return-1!==Te.indexOf(t)}function Ce(t){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===t)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===t)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===t)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}function je(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=e||{},r=n.locale,i=r&&r.options&&r.options.weekStartsOn,o=null==i?0:ye(i),s=null==n.weekStartsOn?o:ye(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var a=ve(t),c=a.getUTCDay(),u=(c<s?7:0)+c-s;return a.setUTCDate(a.getUTCDate()-u),a.setUTCHours(0,0,0,0),a}function Me(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=ve(t,e),r=n.getUTCFullYear(),i=e||{},o=i.locale,s=o&&o.options&&o.options.firstWeekContainsDate,a=null==s?1:ye(s),c=null==i.firstWeekContainsDate?a:ye(i.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=new Date(0);u.setUTCFullYear(r+1,0,c),u.setUTCHours(0,0,0,0);var l=je(u,e),h=new Date(0);h.setUTCFullYear(r,0,c),h.setUTCHours(0,0,0,0);var p=je(h,e);return n.getTime()>=l.getTime()?r+1:n.getTime()>=p.getTime()?r:r-1}function Ne(t,e,n){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=n||{},i=r.locale,o=i&&i.options&&i.options.weekStartsOn,s=null==o?0:ye(o),a=null==r.weekStartsOn?s:ye(r.weekStartsOn);if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=ve(t),u=ye(e),l=((u%7+7)%7<a?7:0)+u-c.getUTCDay();return c.setUTCDate(c.getUTCDate()+l),c}function Re(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=ve(t),n=e.getUTCDay(),r=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function Ae(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=ve(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=Re(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var s=Re(o);return e.getTime()>=i.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}var Le=6048e5;function De(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=ve(t),n=Re(e).getTime()-function(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=Ae(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),Re(n)}(e).getTime();return Math.round(n/Le)+1}var Ue=6048e5;function Ie(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=ve(t),r=je(n,e).getTime()-function(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=e||{},r=n.locale,i=r&&r.options&&r.options.firstWeekContainsDate,o=null==i?1:ye(i),s=null==n.firstWeekContainsDate?o:ye(n.firstWeekContainsDate),a=Me(t,e),c=new Date(0);return c.setUTCFullYear(a,0,s),c.setUTCHours(0,0,0,0),je(c,e)}(n,e).getTime();return Math.round(r/Ue)+1}var Fe=36e5,qe=6e4,ze=1e3,$e={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Ge=/^([+-])(\d{2})(\d{2})?|Z/,He=/^([+-])(\d{2})(\d{2})|Z/,Ve=/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,Be=/^([+-])(\d{2}):(\d{2})|Z/,Ye=/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;function We(t,e,n){var r=e.match(t);if(!r)return null;var i=parseInt(r[0],10);return{value:n?n(i):i,rest:e.slice(r[0].length)}}function Qe(t,e){var n=e.match(t);if(!n)return null;if("Z"===n[0])return{value:0,rest:e.slice(1)};var r="+"===n[1]?1:-1,i=n[2]?parseInt(n[2],10):0,o=n[3]?parseInt(n[3],10):0,s=n[5]?parseInt(n[5],10):0;return{value:r*(i*Fe+o*qe+s*ze),rest:e.slice(n[0].length)}}function Ke(t,e){return We($e.anyDigitsSigned,t,e)}function Xe(t,e,n){switch(t){case 1:return We($e.singleDigit,e,n);case 2:return We($e.twoDigits,e,n);case 3:return We($e.threeDigits,e,n);case 4:return We($e.fourDigits,e,n);default:return We(new RegExp("^\\d{1,"+t+"}"),e,n)}}function Je(t,e,n){switch(t){case 1:return We($e.singleDigitSigned,e,n);case 2:return We($e.twoDigitsSigned,e,n);case 3:return We($e.threeDigitsSigned,e,n);case 4:return We($e.fourDigitsSigned,e,n);default:return We(new RegExp("^-?\\d{1,"+t+"}"),e,n)}}function Ze(t){switch(t){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function tn(t,e){var n,r=e>0,i=r?e:1-e;if(i<=50)n=t||100;else{var o=i+50;n=t+100*Math.floor(o/100)-(t>=o%100?100:0)}return r?n:1-n}var en=[31,28,31,30,31,30,31,31,30,31,30,31],nn=[31,29,31,30,31,30,31,31,30,31,30,31];function rn(t){return t%400==0||t%4==0&&t%100!=0}var on={G:{priority:140,parse:function(t,e,n,r){switch(e){case"G":case"GG":case"GGG":return n.era(t,{width:"abbreviated"})||n.era(t,{width:"narrow"});case"GGGGG":return n.era(t,{width:"narrow"});case"GGGG":default:return n.era(t,{width:"wide"})||n.era(t,{width:"abbreviated"})||n.era(t,{width:"narrow"})}},set:function(t,e,n,r){return e.era=n,t.setUTCFullYear(n,0,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["R","u","t","T"]},y:{priority:130,parse:function(t,e,n,r){var i=function(t){return{year:t,isTwoDigitYear:"yy"===e}};switch(e){case"y":return Xe(4,t,i);case"yo":return n.ordinalNumber(t,{unit:"year",valueCallback:i});default:return Xe(e.length,t,i)}},validate:function(t,e,n){return e.isTwoDigitYear||e.year>0},set:function(t,e,n,r){var i=t.getUTCFullYear();if(n.isTwoDigitYear){var o=tn(n.year,i);return t.setUTCFullYear(o,0,1),t.setUTCHours(0,0,0,0),t}var s="era"in e&&1!==e.era?1-n.year:n.year;return t.setUTCFullYear(s,0,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","u","w","I","i","e","c","t","T"]},Y:{priority:130,parse:function(t,e,n,r){var i=function(t){return{year:t,isTwoDigitYear:"YY"===e}};switch(e){case"Y":return Xe(4,t,i);case"Yo":return n.ordinalNumber(t,{unit:"year",valueCallback:i});default:return Xe(e.length,t,i)}},validate:function(t,e,n){return e.isTwoDigitYear||e.year>0},set:function(t,e,n,r){var i=Me(t,r);if(n.isTwoDigitYear){var o=tn(n.year,i);return t.setUTCFullYear(o,0,r.firstWeekContainsDate),t.setUTCHours(0,0,0,0),je(t,r)}var s="era"in e&&1!==e.era?1-n.year:n.year;return t.setUTCFullYear(s,0,r.firstWeekContainsDate),t.setUTCHours(0,0,0,0),je(t,r)},incompatibleTokens:["y","R","u","Q","q","M","L","I","d","D","i","t","T"]},R:{priority:130,parse:function(t,e,n,r){return Je("R"===e?4:e.length,t)},set:function(t,e,n,r){var i=new Date(0);return i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0),Re(i)},incompatibleTokens:["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]},u:{priority:130,parse:function(t,e,n,r){return Je("u"===e?4:e.length,t)},set:function(t,e,n,r){return t.setUTCFullYear(n,0,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["G","y","Y","R","w","I","i","e","c","t","T"]},Q:{priority:120,parse:function(t,e,n,r){switch(e){case"Q":case"QQ":return Xe(e.length,t);case"Qo":return n.ordinalNumber(t,{unit:"quarter"});case"QQQ":return n.quarter(t,{width:"abbreviated",context:"formatting"})||n.quarter(t,{width:"narrow",context:"formatting"});case"QQQQQ":return n.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(t,{width:"wide",context:"formatting"})||n.quarter(t,{width:"abbreviated",context:"formatting"})||n.quarter(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=1&&e<=4},set:function(t,e,n,r){return t.setUTCMonth(3*(n-1),1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]},q:{priority:120,parse:function(t,e,n,r){switch(e){case"q":case"qq":return Xe(e.length,t);case"qo":return n.ordinalNumber(t,{unit:"quarter"});case"qqq":return n.quarter(t,{width:"abbreviated",context:"standalone"})||n.quarter(t,{width:"narrow",context:"standalone"});case"qqqqq":return n.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(t,{width:"wide",context:"standalone"})||n.quarter(t,{width:"abbreviated",context:"standalone"})||n.quarter(t,{width:"narrow",context:"standalone"})}},validate:function(t,e,n){return e>=1&&e<=4},set:function(t,e,n,r){return t.setUTCMonth(3*(n-1),1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]},M:{priority:110,parse:function(t,e,n,r){var i=function(t){return t-1};switch(e){case"M":return We($e.month,t,i);case"MM":return Xe(2,t,i);case"Mo":return n.ordinalNumber(t,{unit:"month",valueCallback:i});case"MMM":return n.month(t,{width:"abbreviated",context:"formatting"})||n.month(t,{width:"narrow",context:"formatting"});case"MMMMM":return n.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(t,{width:"wide",context:"formatting"})||n.month(t,{width:"abbreviated",context:"formatting"})||n.month(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=0&&e<=11},set:function(t,e,n,r){return t.setUTCMonth(n,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]},L:{priority:110,parse:function(t,e,n,r){var i=function(t){return t-1};switch(e){case"L":return We($e.month,t,i);case"LL":return Xe(2,t,i);case"Lo":return n.ordinalNumber(t,{unit:"month",valueCallback:i});case"LLL":return n.month(t,{width:"abbreviated",context:"standalone"})||n.month(t,{width:"narrow",context:"standalone"});case"LLLLL":return n.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(t,{width:"wide",context:"standalone"})||n.month(t,{width:"abbreviated",context:"standalone"})||n.month(t,{width:"narrow",context:"standalone"})}},validate:function(t,e,n){return e>=0&&e<=11},set:function(t,e,n,r){return t.setUTCMonth(n,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]},w:{priority:100,parse:function(t,e,n,r){switch(e){case"w":return We($e.week,t);case"wo":return n.ordinalNumber(t,{unit:"week"});default:return Xe(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=53},set:function(t,e,n,r){return je(function(t,e,n){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=ve(t),i=ye(e),o=Ie(r,n)-i;return r.setUTCDate(r.getUTCDate()-7*o),r}(t,n,r),r)},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","i","t","T"]},I:{priority:100,parse:function(t,e,n,r){switch(e){case"I":return We($e.week,t);case"Io":return n.ordinalNumber(t,{unit:"week"});default:return Xe(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=53},set:function(t,e,n,r){return Re(function(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=ve(t),r=ye(e),i=De(n)-r;return n.setUTCDate(n.getUTCDate()-7*i),n}(t,n,r),r)},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]},d:{priority:90,parse:function(t,e,n,r){switch(e){case"d":return We($e.date,t);case"do":return n.ordinalNumber(t,{unit:"date"});default:return Xe(e.length,t)}},validate:function(t,e,n){var r=rn(t.getUTCFullYear()),i=t.getUTCMonth();return r?e>=1&&e<=nn[i]:e>=1&&e<=en[i]},set:function(t,e,n,r){return t.setUTCDate(n),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","w","I","D","i","e","c","t","T"]},D:{priority:90,parse:function(t,e,n,r){switch(e){case"D":case"DD":return We($e.dayOfYear,t);case"Do":return n.ordinalNumber(t,{unit:"date"});default:return Xe(e.length,t)}},validate:function(t,e,n){return rn(t.getUTCFullYear())?e>=1&&e<=366:e>=1&&e<=365},set:function(t,e,n,r){return t.setUTCMonth(0,n),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]},E:{priority:90,parse:function(t,e,n,r){switch(e){case"E":case"EE":case"EEE":return n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"EEEEE":return n.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"EEEE":default:return n.day(t,{width:"wide",context:"formatting"})||n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=0&&e<=6},set:function(t,e,n,r){return(t=Ne(t,n,r)).setUTCHours(0,0,0,0),t},incompatibleTokens:["D","i","e","c","t","T"]},e:{priority:90,parse:function(t,e,n,r){var i=function(t){var e=7*Math.floor((t-1)/7);return(t+r.weekStartsOn+6)%7+e};switch(e){case"e":case"ee":return Xe(e.length,t,i);case"eo":return n.ordinalNumber(t,{unit:"day",valueCallback:i});case"eee":return n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"eeeee":return n.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"eeee":default:return n.day(t,{width:"wide",context:"formatting"})||n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=0&&e<=6},set:function(t,e,n,r){return(t=Ne(t,n,r)).setUTCHours(0,0,0,0),t},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]},c:{priority:90,parse:function(t,e,n,r){var i=function(t){var e=7*Math.floor((t-1)/7);return(t+r.weekStartsOn+6)%7+e};switch(e){case"c":case"cc":return Xe(e.length,t,i);case"co":return n.ordinalNumber(t,{unit:"day",valueCallback:i});case"ccc":return n.day(t,{width:"abbreviated",context:"standalone"})||n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"});case"ccccc":return n.day(t,{width:"narrow",context:"standalone"});case"cccccc":return n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"});case"cccc":default:return n.day(t,{width:"wide",context:"standalone"})||n.day(t,{width:"abbreviated",context:"standalone"})||n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"})}},validate:function(t,e,n){return e>=0&&e<=6},set:function(t,e,n,r){return(t=Ne(t,n,r)).setUTCHours(0,0,0,0),t},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]},i:{priority:90,parse:function(t,e,n,r){var i=function(t){return 0===t?7:t};switch(e){case"i":case"ii":return Xe(e.length,t);case"io":return n.ordinalNumber(t,{unit:"day"});case"iii":return n.day(t,{width:"abbreviated",context:"formatting",valueCallback:i})||n.day(t,{width:"short",context:"formatting",valueCallback:i})||n.day(t,{width:"narrow",context:"formatting",valueCallback:i});case"iiiii":return n.day(t,{width:"narrow",context:"formatting",valueCallback:i});case"iiiiii":return n.day(t,{width:"short",context:"formatting",valueCallback:i})||n.day(t,{width:"narrow",context:"formatting",valueCallback:i});case"iiii":default:return n.day(t,{width:"wide",context:"formatting",valueCallback:i})||n.day(t,{width:"abbreviated",context:"formatting",valueCallback:i})||n.day(t,{width:"short",context:"formatting",valueCallback:i})||n.day(t,{width:"narrow",context:"formatting",valueCallback:i})}},validate:function(t,e,n){return e>=1&&e<=7},set:function(t,e,n,r){return(t=function(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=ye(e);n%7==0&&(n-=7);var r=ve(t),i=((n%7+7)%7<1?7:0)+n-r.getUTCDay();return r.setUTCDate(r.getUTCDate()+i),r}(t,n,r)).setUTCHours(0,0,0,0),t},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]},a:{priority:80,parse:function(t,e,n,r){switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaaa":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}},set:function(t,e,n,r){return t.setUTCHours(Ze(n),0,0,0),t},incompatibleTokens:["b","B","H","K","k","t","T"]},b:{priority:80,parse:function(t,e,n,r){switch(e){case"b":case"bb":case"bbb":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbbb":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}},set:function(t,e,n,r){return t.setUTCHours(Ze(n),0,0,0),t},incompatibleTokens:["a","B","H","K","k","t","T"]},B:{priority:80,parse:function(t,e,n,r){switch(e){case"B":case"BB":case"BBB":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBBB":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}},set:function(t,e,n,r){return t.setUTCHours(Ze(n),0,0,0),t},incompatibleTokens:["a","b","t","T"]},h:{priority:70,parse:function(t,e,n,r){switch(e){case"h":return We($e.hour12h,t);case"ho":return n.ordinalNumber(t,{unit:"hour"});default:return Xe(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=12},set:function(t,e,n,r){var i=t.getUTCHours()>=12;return i&&n<12?t.setUTCHours(n+12,0,0,0):i||12!==n?t.setUTCHours(n,0,0,0):t.setUTCHours(0,0,0,0),t},incompatibleTokens:["H","K","k","t","T"]},H:{priority:70,parse:function(t,e,n,r){switch(e){case"H":return We($e.hour23h,t);case"Ho":return n.ordinalNumber(t,{unit:"hour"});default:return Xe(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=23},set:function(t,e,n,r){return t.setUTCHours(n,0,0,0),t},incompatibleTokens:["a","b","h","K","k","t","T"]},K:{priority:70,parse:function(t,e,n,r){switch(e){case"K":return We($e.hour11h,t);case"Ko":return n.ordinalNumber(t,{unit:"hour"});default:return Xe(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=11},set:function(t,e,n,r){return t.getUTCHours()>=12&&n<12?t.setUTCHours(n+12,0,0,0):t.setUTCHours(n,0,0,0),t},incompatibleTokens:["a","b","h","H","k","t","T"]},k:{priority:70,parse:function(t,e,n,r){switch(e){case"k":return We($e.hour24h,t);case"ko":return n.ordinalNumber(t,{unit:"hour"});default:return Xe(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=24},set:function(t,e,n,r){var i=n<=24?n%24:n;return t.setUTCHours(i,0,0,0),t},incompatibleTokens:["a","b","h","H","K","t","T"]},m:{priority:60,parse:function(t,e,n,r){switch(e){case"m":return We($e.minute,t);case"mo":return n.ordinalNumber(t,{unit:"minute"});default:return Xe(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=59},set:function(t,e,n,r){return t.setUTCMinutes(n,0,0),t},incompatibleTokens:["t","T"]},s:{priority:50,parse:function(t,e,n,r){switch(e){case"s":return We($e.second,t);case"so":return n.ordinalNumber(t,{unit:"second"});default:return Xe(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=59},set:function(t,e,n,r){return t.setUTCSeconds(n,0),t},incompatibleTokens:["t","T"]},S:{priority:30,parse:function(t,e,n,r){return Xe(e.length,t,function(t){return Math.floor(t*Math.pow(10,3-e.length))})},set:function(t,e,n,r){return t.setUTCMilliseconds(n),t},incompatibleTokens:["t","T"]},X:{priority:10,parse:function(t,e,n,r){switch(e){case"X":return Qe(Ge,t);case"XX":return Qe(He,t);case"XXXX":return Qe(Ve,t);case"XXXXX":return Qe(Ye,t);case"XXX":default:return Qe(Be,t)}},set:function(t,e,n,r){return e.timestampIsSet?t:new Date(t.getTime()-n)},incompatibleTokens:["t","T","x"]},x:{priority:10,parse:function(t,e,n,r){switch(e){case"x":return Qe(Ge,t);case"xx":return Qe(He,t);case"xxxx":return Qe(Ve,t);case"xxxxx":return Qe(Ye,t);case"xxx":default:return Qe(Be,t)}},set:function(t,e,n,r){return e.timestampIsSet?t:new Date(t.getTime()-n)},incompatibleTokens:["t","T","X"]},t:{priority:40,parse:function(t,e,n,r){return Ke(t)},set:function(t,e,n,r){return[new Date(1e3*n),{timestampIsSet:!0}]},incompatibleTokens:"*"},T:{priority:20,parse:function(t,e,n,r){return Ke(t)},set:function(t,e,n,r){return[new Date(n),{timestampIsSet:!0}]},incompatibleTokens:"*"}},sn=10,an=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,cn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,un=/^'([^]*?)'?$/,ln=/''/g,hn=/\S/,pn=/[a-zA-Z]/;function dn(t,e){if(e.timestampIsSet)return t;var n=new Date(0);return n.setFullYear(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()),n.setHours(t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds()),n}function fn(t){return t.match(un)[1].replace(ln,"'")}function gn(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var yn=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return gn("yy"===e?r%100:r,e.length)},vn=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):gn(n+1,2)},bn=function(t,e){return gn(t.getUTCDate(),e.length)},mn=function(t,e){return gn(t.getUTCHours()%12||12,e.length)},wn=function(t,e){return gn(t.getUTCHours(),e.length)},xn=function(t,e){return gn(t.getUTCMinutes(),e.length)},_n=function(t,e){return gn(t.getUTCSeconds(),e.length)},kn=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return gn(Math.floor(r*Math.pow(10,n-3)),e.length)};function Sn(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(0===o)return n+String(i);var s=e||"";return n+String(i)+s+gn(o,2)}function On(t,e){return t%60==0?(t>0?"-":"+")+gn(Math.abs(t)/60,2):Tn(t,e)}function Tn(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t);return r+gn(Math.floor(i/60),2)+n+gn(i%60,2)}var En={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return yn(t,e)},Y:function(t,e,n,r){var i=Me(t,r),o=i>0?i:1-i;return"YY"===e?gn(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):gn(o,e.length)},R:function(t,e){return gn(Ae(t),e.length)},u:function(t,e){return gn(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return gn(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return gn(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return vn(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return gn(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var i=Ie(t,r);return"wo"===e?n.ordinalNumber(i,{unit:"week"}):gn(i,e.length)},I:function(t,e,n){var r=De(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):gn(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):bn(t,e)},D:function(t,e,n){var r=function(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=ve(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=n-e.getTime();return Math.floor(r/864e5)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):gn(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var i=t.getUTCDay(),o=(i-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return gn(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var i=t.getUTCDay(),o=(i-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return gn(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),i=0===r?7:r;switch(e){case"i":return String(i);case"ii":return gn(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,i=t.getUTCHours();switch(r=12===i?"noon":0===i?"midnight":i/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,i=t.getUTCHours();switch(r=i>=17?"evening":i>=12?"afternoon":i>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return mn(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):wn(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):gn(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):gn(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):xn(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):_n(t,e)},S:function(t,e){return kn(t,e)},X:function(t,e,n,r){var i=(r._originalDate||t).getTimezoneOffset();if(0===i)return"Z";switch(e){case"X":return On(i);case"XXXX":case"XX":return Tn(i);case"XXXXX":case"XXX":default:return Tn(i,":")}},x:function(t,e,n,r){var i=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return On(i);case"xxxx":case"xx":return Tn(i);case"xxxxx":case"xxx":default:return Tn(i,":")}},O:function(t,e,n,r){var i=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Sn(i,":");case"OOOO":default:return"GMT"+Tn(i,":")}},z:function(t,e,n,r){var i=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Sn(i,":");case"zzzz":default:return"GMT"+Tn(i,":")}},t:function(t,e,n,r){var i=r._originalDate||t;return gn(Math.floor(i.getTime()/1e3),e.length)},T:function(t,e,n,r){return gn((r._originalDate||t).getTime(),e.length)}},Pn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Cn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,jn=/^'([^]*?)'?$/,Mn=/''/g,Nn=/[a-zA-Z]/;function Rn(t,e){if(void 0!==t.one&&1===e)return t.one;var n=e%10,r=e%100;return 1===n&&11!==r?t.singularNominative.replace("{{count}}",e):n>=2&&n<=4&&(r<10||r>20)?t.singularGenitive.replace("{{count}}",e):t.pluralGenitive.replace("{{count}}",e)}function An(t){return function(e,n){return n.addSuffix?n.comparison>0?t.future?Rn(t.future,e):"через "+Rn(t.regular,e):t.past?Rn(t.past,e):Rn(t.regular,e)+" назад":Rn(t.regular,e)}}var Ln={lessThanXSeconds:An({regular:{one:"меньше секунды",singularNominative:"меньше {{count}} секунды",singularGenitive:"меньше {{count}} секунд",pluralGenitive:"меньше {{count}} секунд"},future:{one:"меньше, чем через секунду",singularNominative:"меньше, чем через {{count}} секунду",singularGenitive:"меньше, чем через {{count}} секунды",pluralGenitive:"меньше, чем через {{count}} секунд"}}),xSeconds:An({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду назад",singularGenitive:"{{count}} секунды назад",pluralGenitive:"{{count}} секунд назад"},future:{singularNominative:"через {{count}} секунду",singularGenitive:"через {{count}} секунды",pluralGenitive:"через {{count}} секунд"}}),halfAMinute:function(t,e){return e.addSuffix?e.comparison>0?"через полминуты":"полминуты назад":"полминуты"},lessThanXMinutes:An({regular:{one:"меньше минуты",singularNominative:"меньше {{count}} минуты",singularGenitive:"меньше {{count}} минут",pluralGenitive:"меньше {{count}} минут"},future:{one:"меньше, чем через минуту",singularNominative:"меньше, чем через {{count}} минуту",singularGenitive:"меньше, чем через {{count}} минуты",pluralGenitive:"меньше, чем через {{count}} минут"}}),xMinutes:An({regular:{singularNominative:"{{count}} минута",singularGenitive:"{{count}} минуты",pluralGenitive:"{{count}} минут"},past:{singularNominative:"{{count}} минуту назад",singularGenitive:"{{count}} минуты назад",pluralGenitive:"{{count}} минут назад"},future:{singularNominative:"через {{count}} минуту",singularGenitive:"через {{count}} минуты",pluralGenitive:"через {{count}} минут"}}),aboutXHours:An({regular:{singularNominative:"около {{count}} часа",singularGenitive:"около {{count}} часов",pluralGenitive:"около {{count}} часов"},future:{singularNominative:"приблизительно через {{count}} час",singularGenitive:"приблизительно через {{count}} часа",pluralGenitive:"приблизительно через {{count}} часов"}}),xHours:An({regular:{singularNominative:"{{count}} час",singularGenitive:"{{count}} часа",pluralGenitive:"{{count}} часов"}}),xDays:An({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} дней"}}),aboutXMonths:An({regular:{singularNominative:"около {{count}} месяца",singularGenitive:"около {{count}} месяцев",pluralGenitive:"около {{count}} месяцев"},future:{singularNominative:"приблизительно через {{count}} месяц",singularGenitive:"приблизительно через {{count}} месяца",pluralGenitive:"приблизительно через {{count}} месяцев"}}),xMonths:An({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяца",pluralGenitive:"{{count}} месяцев"}}),aboutXYears:An({regular:{singularNominative:"около {{count}} года",singularGenitive:"около {{count}} лет",pluralGenitive:"около {{count}} лет"},future:{singularNominative:"приблизительно через {{count}} год",singularGenitive:"приблизительно через {{count}} года",pluralGenitive:"приблизительно через {{count}} лет"}}),xYears:An({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} года",pluralGenitive:"{{count}} лет"}}),overXYears:An({regular:{singularNominative:"больше {{count}} года",singularGenitive:"больше {{count}} лет",pluralGenitive:"больше {{count}} лет"},future:{singularNominative:"больше, чем через {{count}} год",singularGenitive:"больше, чем через {{count}} года",pluralGenitive:"больше, чем через {{count}} лет"}}),almostXYears:An({regular:{singularNominative:"почти {{count}} год",singularGenitive:"почти {{count}} года",pluralGenitive:"почти {{count}} лет"},future:{singularNominative:"почти через {{count}} год",singularGenitive:"почти через {{count}} года",pluralGenitive:"почти через {{count}} лет"}})};function Dn(t,e,n){if(arguments.length<2)throw new TypeError("2 argument required, but only "+arguments.length+" present");var r=je(t,n),i=je(e,n);return r.getTime()===i.getTime()}var Un=["воскресенье","понедельник","вторник","среду","четверг","пятницу","субботу"];function In(t){var e=Un[t];return 2===t?"'во "+e+" в' p":"'в "+e+" в' p"}var Fn={lastWeek:function(t,e,n){var r=t.getUTCDay();return Dn(t,e,n)?In(r):function(t){var e=Un[t];switch(t){case 0:return"'в прошлое "+e+" в' p";case 1:case 2:case 4:return"'в прошлый "+e+" в' p";case 3:case 5:case 6:return"'в прошлую "+e+" в' p"}}(r)},yesterday:"'вчера в' p",today:"'сегодня в' p",tomorrow:"'завтра в' p",nextWeek:function(t,e,n){var r=t.getUTCDay();return Dn(t,e,n)?In(r):function(t){var e=Un[t];switch(t){case 0:return"'в следующее "+e+" в' p";case 1:case 2:case 4:return"'в следующий "+e+" в' p";case 3:case 5:case 6:return"'в следующую "+e+" в' p"}}(r)},other:"P"},qn={formatDistance:function(t,e,n){return n=n||{},Ln[t](e,n)},formatLong:{date:le({formats:{full:"EEEE, do MMMM y 'г.'",long:"do MMMM y 'г.'",medium:"d MMM y 'г.'",short:"dd.MM.y"},defaultWidth:"full"}),time:le({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:le({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})},formatRelative:function(t,e,n,r){var i=Fn[t];return"function"==typeof i?i(e,n,r):i},localize:{ordinalNumber:function(t,e){var n=String((e||{}).unit);return t+("date"===n?"-е":"week"===n||"minute"===n||"second"===n?"-я":"-й")},era:pe({values:{narrow:["до н.э.","н.э."],abbreviated:["до н. э.","н. э."],wide:["до нашей эры","нашей эры"]},defaultWidth:"wide"}),quarter:pe({values:{narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:pe({values:{narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."],wide:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]},defaultWidth:"wide",formattingValues:{narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],wide:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]},defaultFormattingWidth:"wide"}),day:pe({values:{narrow:["В","П","В","С","Ч","П","С"],short:["вс","пн","вт","ср","чт","пт","сб"],abbreviated:["вск","пнд","втр","срд","чтв","птн","суб"],wide:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},defaultWidth:"wide"}),dayPeriod:pe({values:{narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утро",afternoon:"день",evening:"вечер",night:"ночь"}},defaultWidth:"any",formattingValues:{narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утра",afternoon:"дня",evening:"вечера",night:"ночи"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:de({matchPattern:/^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:fe({matchPatterns:{narrow:/^((до )?н\.?\s?э\.?)/i,abbreviated:/^((до )?н\.?\s?э\.?)/i,wide:/^(до нашей эры|нашей эры|наша эра)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^д/i,/^н/i]},defaultParseWidth:"any"}),quarter:fe({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыои]?й?)? кв.?/i,wide:/^[1234](-?[ыои]?й?)? квартал/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:fe({matchPatterns:{narrow:/^[яфмаисонд]/i,abbreviated:/^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)/i,wide:/^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^я/i,/^ф/i,/^м/i,/^а/i,/^м/i,/^и/i,/^и/i,/^а/i,/^с/i,/^о/i,/^н/i,/^я/i],any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^ав/i,/^с/i,/^о/i,/^н/i,/^д/i]},defaultParseWidth:"any"}),day:fe({matchPatterns:{narrow:/^[впсч]/i,short:/^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,abbreviated:/^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,wide:/^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^в/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^в[ос]/i,/^п[он]/i,/^в/i,/^ср/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]},defaultParseWidth:"any"}),dayPeriod:fe({matchPatterns:{narrow:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,abbreviated:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,wide:/^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^дп/i,pm:/^пп/i,midnight:/^полн/i,noon:/^полд/i,morning:/^у/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};function zn(t){return function(t,e,n){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=String(e),i=n||{},o=i.locale||ge,s=o.options&&o.options.firstWeekContainsDate,a=null==s?1:ye(s),c=null==i.firstWeekContainsDate?a:ye(i.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=o.options&&o.options.weekStartsOn,l=null==u?0:ye(u),h=null==i.weekStartsOn?l:ye(i.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var p=ve(t);if(!function(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=ve(t);return!isNaN(e)}(p))throw new RangeError("Invalid time value");var d=be(p,Se(p)),f={firstWeekContainsDate:c,weekStartsOn:h,locale:o,_originalDate:p};return r.match(Cn).map(function(t){var e=t[0];return"p"===e||"P"===e?(0,_e[e])(t,o.formatLong,f):t}).join("").match(Pn).map(function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return function(t){return t.match(jn)[1].replace(Mn,"'")}(t);var n=En[e];if(n)return!i.useAdditionalWeekYearTokens&&Pe(t)&&Ce(t),!i.useAdditionalDayOfYearTokens&&Ee(t)&&Ce(t),n(d,t,o.localize,f);if(e.match(Nn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t}).join("")}(function(t,e,n,r){if(arguments.length<3)throw new TypeError("3 arguments required, but only "+arguments.length+" present");var i=String(t),o=String("yyyy-MM-dd"),s={},a=s.locale||ge;if(!a.match)throw new RangeError("locale must contain match property");var c=a.options&&a.options.firstWeekContainsDate,u=null==c?1:ye(c),l=null==s.firstWeekContainsDate?u:ye(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=a.options&&a.options.weekStartsOn,p=null==h?0:ye(h),d=null==s.weekStartsOn?p:ye(s.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(""===o)return""===i?ve(n):new Date(NaN);var f,g={firstWeekContainsDate:l,weekStartsOn:d,locale:a},y=[{priority:sn,set:dn,index:0}],v=o.match(cn).map(function(t){var e=t[0];return"p"===e||"P"===e?(0,_e[e])(t,a.formatLong,g):t}).join("").match(an),b=[];for(f=0;f<v.length;f++){var m=v[f];!s.useAdditionalWeekYearTokens&&Pe(m)&&Ce(m),!s.useAdditionalDayOfYearTokens&&Ee(m)&&Ce(m);var w=m[0],x=on[w];if(x){var _=x.incompatibleTokens;if(Array.isArray(_)){for(var k=void 0,S=0;S<b.length;S++){var O=b[S].token;if(-1!==_.indexOf(O)||O===w){k=b[S];break}}if(k)throw new RangeError("The format string mustn't contain `".concat(k.fullToken,"` and `").concat(m,"` at the same time"))}else if("*"===x.incompatibleTokens&&b.length)throw new RangeError("The format string mustn't contain `".concat(m,"` and any other token at the same time"));b.push({token:w,fullToken:m});var T=x.parse(i,m,a.match,g);if(!T)return new Date(NaN);y.push({priority:x.priority,set:x.set,validate:x.validate,value:T.value,index:y.length}),i=T.rest}else{if(w.match(pn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+w+"`");if("''"===m?m="'":"'"===w&&(m=fn(m)),0!==i.indexOf(m))return new Date(NaN);i=i.slice(m.length)}}if(i.length>0&&hn.test(i))return new Date(NaN);var E=y.map(function(t){return t.priority}).sort(function(t,e){return e-t}).filter(function(t,e,n){return n.indexOf(t)===e}).map(function(t){return y.filter(function(e){return e.priority===t}).reverse()}).map(function(t){return t[0]}),P=ve(n);if(isNaN(P))return new Date(NaN);var C=be(P,Se(P)),j={};for(f=0;f<E.length;f++){var M=E[f];if(M.validate&&!M.validate(C,M.value,g))return new Date(NaN);var N=M.set(C,j,M.value,g);N[0]?(C=N[0],me(j,N[1])):C=N}return C}(t.slice(0,10),"yyyy-MM-dd",new Date),"cccccc. d MMMM",{locale:qn})}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const $n=new WeakMap,Gn=(t=>(...t)=>{const e=(t=>e=>{if(!(e instanceof O))throw new Error("unsafeHTML can only be used in text bindings");const n=$n.get(e);if(void 0!==n&&(t=>null===t||!("object"==typeof t||"function"==typeof t))(t)&&t===n.value&&e.value===n.fragment)return;const r=document.createElement("template");r.innerHTML=t;const i=document.importNode(r.content,!0);e.setValue(i),$n.set(e,{value:t,fragment:i})})(...t);return r.set(e,!0),e})();function Hn(){return Zt(document,"scroll").pipe(Object(Jt.a)(t=>window.pageYOffset||document.documentElement.scrollTop))}var Vn=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Bn=class extends dt{static get styles(){return[ne]}render(){return this.event?D`
          <header class="event-controls  ${this.isSticky?"event-controls_sticky":""}">
              <a href="/" class="header__button button_back">${ie}</a>
              <button class="header__button button_share" @click="${()=>{this.share()}}">${oe}</button>
          </header>
          <div class="page-wrapper">
            <div class="page-content">
                <div class="event-header">${this.event.Title}</div>
                <div class="event-author">
                  <div class="author__avatar">
                    <img src="${this.event.author.pic}">
                  </div>
                <div>
                  <span>${this.event.author.Name},</span>
                  <span>${this.event.author.Company}</span>
                </div>
              </div>
                <div class="event-content">
                  ${Gn(this.description)}
                </div>
              </div>
              <div class="event-image_container">
                <img src="${this.event.Image}" class="event-image">
              </div>
              <div class="page-content">
                <div class="event-header-2">Информация</div>
                <p class="page-list event-date">${this.date}, ${this.event.Time_start} – ${this.event.Time_end}</p>
                <p class="page-list">Зал «${this.event.place.Title}»</p>
                <p class="page-list">${this.event.conf.Title} Conf.</p>
              </div>
            </div>
          </div>
        </div>`:D`
        <h3> Loading... </h3>
        `}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}firstUpdated(){this.getEvent(),Hn().subscribe(t=>{this.isSticky=t>=32})}getEvent(){(function(t){return Object(Ht.fromFetch)(`${Bt}events/${t}`).pipe(Object(Dt.a)(t=>t.ok?t.json():Object(Vt.a)({error:!0,message:`Error ${t.status}`})),zt(t=>(console.error(t),Object(Vt.a)({error:!0,message:t.message}))))})(window.location.pathname.split("/")[2]).subscribe(t=>{this.event=t,this.description=ce(this.event.Description),console.log(this.event.Date),this.date=zn(this.event.Date),this._setActiveEvent(t._id)})}_setActiveEvent(t){return Wt(t)}share(){!function(t){let e;(e=window.navigator)&&e.share({title:`${t.title}`,text:`${t.text}`,url:`${t.url}`}).then(()=>console.log("Successful share")).catch(t=>console.log("Error sharing",t))}({title:this.event.Title,text:this.event.Description,url:window.location.pathname})}isValue(t){return t||""}};Vn([it({type:Object})],Bn.prototype,"event",void 0),Vn([it({type:String})],Bn.prototype,"description",void 0),Vn([it({type:String})],Bn.prototype,"date",void 0),Vn([it({type:Boolean})],Bn.prototype,"isSticky",void 0),Bn=Vn([et("pwa-event-page")],Bn);const Yn=ct`
    :host{
        position: relative;
        display:block;
    }
    .wrapper{
        padding: 32px 24px 48px;
    }
    .teaser-item{
        margin-bottom: 48px;
    }
    .news-item{
        margin-bottom: 48px;
    }
    .news-link{
        color: inherit;
        text-decoration: none;
    }
`,Wn={active:null};let Qn=class extends Tt.a{constructor(){super(Wn)}};const Kn=new(Qn=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}([Object(Tt.b)({name:"news"})],Qn)),Xn=Object(Tt.d)(Kn,{});Xn.selectActive();const Jn=ct`
    :host{
        position: relative;
        display:block;
    }
    .pwa-news{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .news-pic{
        min-width: 120px;
        min-height: 160px;
        position: relative;
        overflow: hidden;
    }
    ::slotted(h5){
        font-size: 20px;
        line-height: 28px;
        width: 100%;
        box-sizing: border-box;
        display: inline-block;
        font-weight: 600;
    }
    ::slotted(span){
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
        padding-right: 24px;
        box-sizing: border-box;
        width: 100%;
        box-sizing: border-box;
        display: inline-block;
    }
    ::slotted(img){
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        object-fit: cover;
    }
`;var Zn=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let tr=class extends lt{constructor(){super(...arguments),this.firstProp="prop"}firstUpdated(){}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}adoptedCallback(){}static get styles(){return[Jn]}render(){return D`
        <div class="pwa-news">
          <div class="news-title">
            <slot name="title"></slot>
          </div>
          <div class="news-pic">
            <slot name="image"></slot>
          </div>
        </div>
    `}};Zn([it({type:String})],tr.prototype,"firstProp",void 0),tr=Zn([et("pwa-news")],tr);const er=ct`
    :host{
        position: relative;
        display:block;
    }
    .pwa-teaser{
        width: 100%;
    }
    .teaser-pic{
        width: 100%;
        height: 197px;
        position: relative;
        overflow: hidden;
    }
    .teaser-title{
        width: 100%;

    }
    ::slotted(h5){
        line-height: 24px;
        margin: 16px 0 8px;
        font-size: 18px;
        font-weight: 700;
        width: 100%;
        box-sizing: border-box;
        display: inline-block;
    }
    ::slotted(span){
        font-size: 14px;
        line-height: 20px;
        width: 100%;
        display: inline-block;
    }
    ::slotted(img){
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        object-fit: cover;
    }
`;var nr=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let rr=class extends lt{constructor(){super(...arguments),this.firstProp="prop"}firstUpdated(){}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}adoptedCallback(){}static get styles(){return[er]}render(){return D`
        <div class="pwa-teaser">
          <div class="teaser-pic">
            <slot name="image"></slot>
          </div>
          <div class="teaser-title">
            <slot name="title"></slot>
          </div>
          <div class="teaser-lead">
              <slot name="lead"></slot>
          </div>
        </div>
    `}};nr([it({type:String})],rr.prototype,"firstProp",void 0),rr=nr([et("pwa-teaser")],rr);var ir=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let or=class extends dt{firstUpdated(){}connectedCallback(){super.connectedCallback(),function(){!function(t,e,n,r){new(n||(n=Promise))(function(i,o){function s(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,a)}c((r=r.apply(t,e||[])).next())})}(this,void 0,void 0,function*(){return yield Object(Ht.fromFetch)(`${Bt}/news`).pipe(Object(Dt.a)(t=>t.ok?t.json():Object(Vt.a)({error:!0,message:`Error ${t.status}`})),zt(t=>(console.error(t),Object(Vt.a)({error:!0,message:t.message})))).subscribe({next:t=>{Kn.add(t)}})})}(),Xn.selectAll().subscribe(t=>{this.news=t})}static get styles(){return[Yn]}render(){return D`
    <div class="wrapper">
      ${this.news.map(t=>D`
        ${t.Teaser?D`
            <a href="/news-view/${t._id}" class="news-link">
            <pwa-teaser class="teaser-item">
              <img src="${t.image}" slot="image">
              <h5 slot="title">${t.Title}</h5>
              <span slot="lead">${t.Lead}</span>
            </pwa-teaser></a>`:D`<a href="/news-view/${t._id}" class="news-link">
              <pwa-news class="news-item">
              <img src="${t.image}" slot="image">
              <span slot="title">${t.Title}</span>
          </pwa-news></a>`}
      `)}
      </div>
    `}};ir([it({type:Array})],or.prototype,"news",void 0),or=ir([et("pwa-news-page")],or);const sr=ct`
    :host{
        position: relative;
        display:block;
    }
`;var ar=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let cr=class extends dt{constructor(){super(...arguments),this.firstProp="prop"}firstUpdated(){}static get styles(){return[sr]}render(){return D`
        ${this.firstProp}
    `}};ar([it({type:String})],cr.prototype,"firstProp",void 0),cr=ar([et("pwa-cards")],cr);const ur=ct`
    :host{
        position: relative;
        display:block;
    }
`;var lr=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let hr=class extends dt{constructor(){super(...arguments),this.firstProp="prop"}firstUpdated(){}static get styles(){return[ur]}render(){return D`
        ${this.firstProp}
    `}};lr([it({type:String})],hr.prototype,"firstProp",void 0),hr=lr([et("pwa-materials-page")],hr);const pr=ct`
    :host{
        position: relative;
        display:block;
    }
`;var dr=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let fr=class extends dt{constructor(){super(...arguments),this.firstProp="prop"}firstUpdated(){}static get styles(){return[pr]}render(){return D`
        ${this.firstProp}
    `}};dr([it({type:String})],fr.prototype,"firstProp",void 0),fr=dr([et("pwa-speakers-page")],fr);const gr=ct`
    :host{
        position: relative;
        display:block;
    }
`;var yr=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let vr=class extends dt{constructor(){super(...arguments),this.firstProp="prop"}firstUpdated(){}static get styles(){return[gr]}render(){return D`
        ${this.firstProp}
    `}};yr([it({type:String})],vr.prototype,"firstProp",void 0),vr=yr([et("pwa-info-page")],vr);const br=ct`
    :host{
        position: relative;
        display:block;
    }
`;var mr=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let wr=class extends dt{constructor(){super(...arguments),this.firstProp="prop"}firstUpdated(){}static get styles(){return[br]}render(){return D`
        ${this.firstProp}
    `}};mr([it({type:String})],wr.prototype,"firstProp",void 0),wr=mr([et("pwa-ticket-page")],wr);const xr=ct`
    :host{
        position: relative;
        display:block;
    }
`;var _r=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let kr=class extends dt{firstUpdated(){this.getNews(),Hn().subscribe(t=>{this.isSticky=t>=42})}static get styles(){return[xr]}render(){return D`
      <h5>News View</h5>
    `}getNews(){(function(t){return Object(Ht.fromFetch)(`${Bt}/news/${t}`).pipe(Object(Dt.a)(t=>t.ok?t.json():Object(Vt.a)({error:!0,message:`Error ${t.status}`})),zt(t=>(console.error(t),Object(Vt.a)({error:!0,message:t.message}))))})(window.location.pathname.split("/")[2]).subscribe(t=>{console.log(t),this.news=t,this.description=ce(this.news.Description)})}};_r([it({type:String})],kr.prototype,"news",void 0),_r([it({type:String})],kr.prototype,"description",void 0),_r([it({type:Boolean})],kr.prototype,"isSticky",void 0),kr=_r([et("pwa-newsview-page")],kr);const Sr=ct`
    :host{
        position: relative;
        display:block;
    }
    header{
        width: 100%;
        height: 72px;
        background: #FFF;
        padding: 0 24px;
        justify-content: space-between;
        display: flex;
        box-sizing: border-box;
        align-items: center;
    }
    .header-logo{
        font-size: 16px;
        line-height: 24px;
        font-weight: bold;
        padding: 24px 0;
    }

    .header-icons{
        align-items: center;
        padding: 16px 0;
        display: flex;
    }
    .icon-search{
        margin-top: 2px;
        margin-right: 16px;
    }
    .header-title{
        text-decoration: none;
        font-size: 28px;
        letter-spacing: 1px;
        color: var(--color-night);
        font-weight: bold;
    }

    .pwa-avatar{
        width: 32px;
        height: 32px;
        background: #ECEFF5;
        background-image: linear-gradient(132deg, #FAF7FA 0%, #EFF0F1 90%);
        border-radius: 50%;
    }
`,Or=ct`
    :host{
        display: block;
    }
    .menu-button{
        padding: 0;
        border: none;
        font-family: inherit;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
        -webkit-appearance: none;
        width: 48px;
        height: 48px;
        display: flex;
    }
    .menu-button:focus{
        outline: none;
    }
    .menu-button:active{
        outline: none;
    }
    svg{
        display: block;
        margin: auto;
    }
`;var Tr=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Er=class extends lt{constructor(){super(...arguments),this.firstProp="prop"}firstUpdated(){}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}attributeChangedCallback(){}adoptedCallback(){}static get styles(){return[Or]}render(){return D`
        <button class="menu-button">
          ${re}
        </button>
    `}};Tr([it({type:String})],Er.prototype,"firstProp",void 0),Er=Tr([et("pwa-menu-button")],Er);var Pr=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Cr=class extends lt{firstUpdated(){At.subscribe(t=>this.title=t)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}static get styles(){return[Sr]}render(){return D`
        <header>
          <div class="header-logo">
            <a href="/" class="header-title">
              ${this.title}
            </a>
          </div>
          <div class="header-icons">
            <!--
            <div class="icon-search">
              ${se}
            </div>
            -->
            <div class="icon-menu">
              <div class="pwa-avatar"></div>
              <!--<pwa-menu-button></pwa-menu-button>-->
            </div>
          </div>
        </header>
    `}};Pr([it({type:String})],Cr.prototype,"title",void 0),Cr=Pr([et("pwa-header")],Cr);const jr=ct`
    :host{
        position: relative;
        display: block;
    }
    .broadcast{
        height: 48px;
        display: flex;
        position: relative;
        box-sizing: border-box;
        overflow: hidden;
    }
    @keyframes marquee{
            0%   { opacity: 0; }
            5%   { opacity: 1; }
            15%   { -webkit-transform: translateX(0); }
            100% { -webkit-transform: translateX(-100%); }
    }

    .broadcast-content{
        display:inline-block;
        font-size: 13px;
        line-height: 18px;
        position: absolute;
        transform:translateX(48px);
        white-space: nowrap;
        animation:
            marquee 15s linear infinite;
     }
    .broadcast-author{
        font-weight: 600;
        padding: 8px 0;
        border-radius: 4px;
        margin-right: 8px;
    }
`;var Mr=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Nr=class extends lt{constructor(){super(...arguments),this.broadcast={id:1,author:{name:"Павел Малышев",company:"2h company"},text:"Что делать, если хочется больше ванилы?"}}firstUpdated(){}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}attributeChangedCallback(){}adoptedCallback(){}static get styles(){return[jr]}render(){return D`
        <section class="broadcast">
        <div class="broadcast-item ${this.broadcast.id}">
            <div class="broadcast-content ">
                <span class="broadcast-author">${this.broadcast&&this.broadcast.author?this.broadcast.author.name:""}, ${this.broadcast&&this.broadcast.author?this.broadcast.author.company:""}</span>
                <span class="broadcast-teaser">${this.broadcast?this.broadcast.text:""}</span>
            </div>
        </div>
        </section>
    `}};Mr([it({type:Object})],Nr.prototype,"broadcast",void 0),Nr=Mr([et("pwa-broadcast")],Nr);var Rr=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Ar=class extends lt{firstUpdated(){(t=>{document.body.addEventListener("click",e=>{if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)return;const n=e.composedPath().filter(t=>"A"===t.tagName)[0];if(!n||n.target||n.hasAttribute("download")||"external"===n.getAttribute("rel"))return;const r=n.href;if(!r||-1!==r.indexOf("mailto:"))return;const i=window.location,o=i.origin||i.protocol+"//"+i.host;0===r.indexOf(o)&&(e.preventDefault(),r!==i.href&&(window.history.pushState({},"",r),t(i)))}),window.addEventListener("popstate",e=>t(window.location)),t(window.location)})(t=>this._locationChanged(t.pathname))}firstRendered(){}connectedCallback(){super.connectedCallback(),this._offlineChecker()}static get styles(){return[ht]}render(){return D`
      <div class="fixed global-elements" ?active="${this.navigationActive}">
          <pwa-header class="pwa-header"></pwa-header>
      </div>
      <div class="pwa-menu global-elements" ?active="${this.navigationActive}">
        <div class="pwa-menu__inner">
          <a href="/" ?active="${"home"===this._page||"event"===this._page}">Расписание</a>
          <a href="/news" ?active="${"news"===this._page}">Новости</a>
          <a href="/cards" ?active="${"cards"===this._page}">Визитки</a>
          <a href="/speakers" ?active="${"speakers"===this._page}">Спикеры</a>
          <a href="/materials" ?active="${"materials"===this._page}">Материалы</a>
          <a href="/info" ?active="${"info"===this._page}">Информация</a>
        </div>
      </div>
      <div class="wrapper" id="pages">
        ${"home"===this._page?D`<pwa-home class="page" active></pwa-home>`:""}
        ${"event"===this._page?D`<pwa-event-page class="page" active></pwa-event-page>`:""}
        ${"news"===this._page?D`<pwa-news-page class="page" active></pwa-news-page>`:""}
        ${"news-view"===this._page?D`<pwa-newsview-page class="page" active></pwa-newsview-page>`:""}
        ${"cards"===this._page?D`<pwa-cards-page class="page" active></pwa-cards-page>`:""}
        ${"speakers"===this._page?D`<pwa-speakers-page class="page" active></pwa-speakers-page>`:""}
        ${"info"===this._page?D`<pwa-info-page class="page" active></pwa-info-page>`:""}
        ${"materials"===this._page?D`<pwa-materials-page class="materials" active></pwa-materials-page>`:""}
        ${"ticket"===this._page?D`<pwa-ticket-page class="materials" active></pwa-ticket-page>`:""}
      </div>
      <div class="bottom-bar">
        <pwa-broadcast></pwa-broadcast>
      </div>`}_locationChanged(t){const e=t.split("/");switch(this.toggleNavigation(e[1]),e[1]){case"":case"home":return Mt("Сессии"),this._page="home";case"event":return Mt("Сессии"),window.scrollTo(0,0),this._page="event";case"news":return Mt("Новости"),this._page="news";case"news-view":return Mt("Новости"),this._page="news-view";case"cards":return Mt("Визитки"),this._page="cards";case"speakers":return Mt("Спикеры"),this._page="speakers";case"materials":return Mt("Материалы"),this._page="materials";case"info":return Mt("Информация"),this._page="info";case"ticket":return Mt("Билеты"),this._page="ticket"}}metaUpdater(){}toggleNavigation(t){return["event","news-view"].includes(t)?this.navigationActive=!1:this.navigationActive=!0}_offlineChecker(){(t=>{window.addEventListener("online",()=>t(!1)),window.addEventListener("offline",()=>t(!0)),t(!1===navigator.onLine)})(t=>{console.log(`You are ${t?" offline":"online"}`)})}};Rr([it({type:String})],Ar.prototype,"_page",void 0),Rr([it({type:Boolean})],Ar.prototype,"navigationActive",void 0),Ar=Rr([et("pwa-app")],Ar),Object(Tt.c)()},function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n(0),i=n(1),o=n(9),s=n(12);function a(t,e,n){return function(r){return r.lift(new c(t,e,n))}}var c=function(){function t(t,e,n){this.nextOrObserver=t,this.error=e,this.complete=n}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.nextOrObserver,this.error,this.complete))},t}(),u=function(t){function e(e,n,r,i){var a=t.call(this,e)||this;return a._tapNext=o.a,a._tapError=o.a,a._tapComplete=o.a,a._tapError=r||o.a,a._tapComplete=i||o.a,Object(s.a)(n)?(a._context=a,a._tapNext=n):n&&(a._context=n,a._tapNext=n.next||o.a,a._tapError=n.error||o.a,a._tapComplete=n.complete||o.a),a}return r.c(e,t),e.prototype._next=function(t){try{this._tapNext.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.next(t)},e.prototype._error=function(t){try{this._tapError.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.error(t)},e.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(t){return void this.destination.error(t)}return this.destination.complete()},e}(i.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(0),i=n(8),o=n(7);function s(t){return function(e){return e.lift(new a(t))}}var a=function(){function t(t){this.closingNotifier=t}return t.prototype.call=function(t,e){return e.subscribe(new c(t,this.closingNotifier))},t}(),c=function(t){function e(e,n){var r=t.call(this,e)||this;return r.buffer=[],r.add(Object(o.a)(r,n)),r}return r.c(e,t),e.prototype._next=function(t){this.buffer.push(t)},e.prototype.notifyNext=function(t,e,n,r,i){var o=this.buffer;this.buffer=[],this.destination.next(o)},e}(i.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(0),i=n(1),o=n(19);function s(t,e){return void 0===e&&(e=o.a),function(n){return n.lift(new a(t,e))}}var a=function(){function t(t,e){this.dueTime=t,this.scheduler=e}return t.prototype.call=function(t,e){return e.subscribe(new c(t,this.dueTime,this.scheduler))},t}(),c=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.dueTime=n,i.scheduler=r,i.debouncedSubscription=null,i.lastValue=null,i.hasValue=!1,i}return r.c(e,t),e.prototype._next=function(t){this.clearDebounce(),this.lastValue=t,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(u,this.dueTime,this))},e.prototype._complete=function(){this.debouncedNext(),this.destination.complete()},e.prototype.debouncedNext=function(){if(this.clearDebounce(),this.hasValue){var t=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(t)}},e.prototype.clearDebounce=function(){var t=this.debouncedSubscription;null!==t&&(this.remove(t),t.unsubscribe(),this.debouncedSubscription=null)},e}(i.a);function u(t){t.debouncedNext()}},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(0),i=n(1);function o(){return function(t){return t.lift(new s)}}var s=function(){function t(){}return t.prototype.call=function(t,e){return e.subscribe(new a(t))},t}(),a=function(t){function e(e){var n=t.call(this,e)||this;return n.hasPrev=!1,n}return r.c(e,t),e.prototype._next=function(t){var e;this.hasPrev?e=[this.prev,t]:this.hasPrev=!0,this.prev=t,e&&this.destination.next(e)},e}(i.a)},function(t,e,n){"use strict";var r=n(0),i=n(15),o=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.scheduler=e,r.work=n,r}return r.c(e,t),e.prototype.schedule=function(e,n){return void 0===n&&(n=0),n>0?t.prototype.schedule.call(this,e,n):(this.delay=n,this.state=e,this.scheduler.flush(this),this)},e.prototype.execute=function(e,n){return n>0||this.closed?t.prototype.execute.call(this,e,n):this._execute(e,n)},e.prototype.requestAsyncId=function(e,n,r){return void 0===r&&(r=0),null!==r&&r>0||null===r&&this.delay>0?t.prototype.requestAsyncId.call(this,e,n,r):e.flush(this)},e}(n(41).a),s=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.c(e,t),e}(n(42).a))(o),a=n(3),c=n(1),u=n(21),l=function(t){function e(e,n,r){void 0===r&&(r=0);var i=t.call(this,e)||this;return i.scheduler=n,i.delay=r,i}return r.c(e,t),e.dispatch=function(t){var e=t.notification,n=t.destination;e.observe(n),this.unsubscribe()},e.prototype.scheduleMessage=function(t){this.destination.add(this.scheduler.schedule(e.dispatch,this.delay,new h(t,this.destination)))},e.prototype._next=function(t){this.scheduleMessage(u.a.createNext(t))},e.prototype._error=function(t){this.scheduleMessage(u.a.createError(t)),this.unsubscribe()},e.prototype._complete=function(){this.scheduleMessage(u.a.createComplete()),this.unsubscribe()},e}(c.a),h=function(t,e){this.notification=t,this.destination=e},p=n(11),d=n(35);n.d(e,"a",function(){return f});var f=function(t){function e(e,n,r){void 0===e&&(e=Number.POSITIVE_INFINITY),void 0===n&&(n=Number.POSITIVE_INFINITY);var i=t.call(this)||this;return i.scheduler=r,i._events=[],i._infiniteTimeWindow=!1,i._bufferSize=e<1?1:e,i._windowTime=n<1?1:n,n===Number.POSITIVE_INFINITY?(i._infiniteTimeWindow=!0,i.next=i.nextInfiniteTimeWindow):i.next=i.nextTimeWindow,i}return r.c(e,t),e.prototype.nextInfiniteTimeWindow=function(e){var n=this._events;n.push(e),n.length>this._bufferSize&&n.shift(),t.prototype.next.call(this,e)},e.prototype.nextTimeWindow=function(e){this._events.push(new g(this._getNow(),e)),this._trimBufferThenGetEvents(),t.prototype.next.call(this,e)},e.prototype._subscribe=function(t){var e,n=this._infiniteTimeWindow,r=n?this._events:this._trimBufferThenGetEvents(),i=this.scheduler,o=r.length;if(this.closed)throw new p.a;if(this.isStopped||this.hasError?e=a.a.EMPTY:(this.observers.push(t),e=new d.a(this,t)),i&&t.add(t=new l(t,i)),n)for(var s=0;s<o&&!t.closed;s++)t.next(r[s]);else for(s=0;s<o&&!t.closed;s++)t.next(r[s].value);return this.hasError?t.error(this.thrownError):this.isStopped&&t.complete(),e},e.prototype._getNow=function(){return(this.scheduler||s).now()},e.prototype._trimBufferThenGetEvents=function(){for(var t=this._getNow(),e=this._bufferSize,n=this._windowTime,r=this._events,i=r.length,o=0;o<i&&!(t-r[o].time<n);)o++;return i>e&&(o=Math.max(o,i-e)),o>0&&r.splice(0,o),r},e}(i.a),g=function(t,e){this.time=t,this.value=e}},function(t,e,n){"use strict";var r=n(2),i=n(13),o=n(0),s=n(7),a=n(8),c=n(18),u=n(4),l=n(26),h=function(){function t(t,e){void 0===e&&(e=Number.POSITIVE_INFINITY),this.project=t,this.concurrent=e}return t.prototype.call=function(t,e){return e.subscribe(new p(t,this.project,this.concurrent))},t}(),p=function(t){function e(e,n,r){void 0===r&&(r=Number.POSITIVE_INFINITY);var i=t.call(this,e)||this;return i.project=n,i.concurrent=r,i.hasCompleted=!1,i.buffer=[],i.active=0,i.index=0,i}return o.c(e,t),e.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},e.prototype._tryNext=function(t){var e,n=this.index++;try{e=this.project(t,n)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(e,t,n)},e.prototype._innerSub=function(t,e,n){var r=new c.a(this,void 0,void 0);this.destination.add(r),Object(s.a)(this,t,e,n,r)},e.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},e.prototype.notifyNext=function(t,e,n,r,i){this.destination.next(e)},e.prototype.notifyComplete=function(t){var e=this.buffer;this.remove(t),this.active--,e.length>0?this._next(e.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},e}(a.a);function d(t){return t}var f=n(23);function g(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=Number.POSITIVE_INFINITY,o=null,s=t[t.length-1];return Object(i.a)(s)?(o=t.pop(),t.length>1&&"number"==typeof t[t.length-1]&&(n=t.pop())):"number"==typeof s&&(n=t.pop()),null===o&&1===t.length&&t[0]instanceof r.a?t[0]:function(t){return void 0===t&&(t=Number.POSITIVE_INFINITY),function t(e,n,r){return void 0===r&&(r=Number.POSITIVE_INFINITY),"function"==typeof n?function(i){return i.pipe(t(function(t,r){return Object(l.a)(e(t,r)).pipe(Object(u.a)(function(e,i){return n(t,e,r,i)}))},r))}:("number"==typeof n&&(r=n),function(t){return t.lift(new h(e,r))})}(d,t)}(n)(Object(f.a)(t,o))}n.d(e,"a",function(){return g})},function(t,e,n){"use strict";var r=n(0),i=n(1);function o(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}o.prototype=Object.create(Error.prototype);var s=o,a=n(39);function c(t){return function(e){return 0===t?Object(a.a)():e.lift(new u(t))}}n.d(e,"a",function(){return c});var u=function(){function t(t){if(this.total=t,this.total<0)throw new s}return t.prototype.call=function(t,e){return e.subscribe(new l(t,this.total))},t}(),l=function(t){function e(e,n){var r=t.call(this,e)||this;return r.total=n,r.count=0,r}return r.c(e,t),e.prototype._next=function(t){var e=this.total,n=++this.count;n<=e&&(this.destination.next(t),n===e&&(this.destination.complete(),this.unsubscribe()))},e}(i.a)},function(t,e,n){"use strict";var r=n(0),i=n(19),o=n(1),s=n(21);function a(t,e){void 0===e&&(e=i.a);var n=function(t){return t instanceof Date&&!isNaN(+t)}(t)?+t-e.now():Math.abs(t);return function(t){return t.lift(new c(n,e))}}n.d(e,"a",function(){return a});var c=function(){function t(t,e){this.delay=t,this.scheduler=e}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.delay,this.scheduler))},t}(),u=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.delay=n,i.scheduler=r,i.queue=[],i.active=!1,i.errored=!1,i}return r.c(e,t),e.dispatch=function(t){for(var e=t.source,n=e.queue,r=t.scheduler,i=t.destination;n.length>0&&n[0].time-r.now()<=0;)n.shift().notification.observe(i);if(n.length>0){var o=Math.max(0,n[0].time-r.now());this.schedule(t,o)}else this.unsubscribe(),e.active=!1},e.prototype._schedule=function(t){this.active=!0,this.destination.add(t.schedule(e.dispatch,this.delay,{source:this,destination:this.destination,scheduler:t}))},e.prototype.scheduleNotification=function(t){if(!0!==this.errored){var e=this.scheduler,n=new l(e.now()+this.delay,t);this.queue.push(n),!1===this.active&&this._schedule(e)}},e.prototype._next=function(t){this.scheduleNotification(s.a.createNext(t))},e.prototype._error=function(t){this.errored=!0,this.queue=[],this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.scheduleNotification(s.a.createComplete()),this.unsubscribe()},e}(o.a),l=function(t,e){this.time=t,this.notification=e}}]);