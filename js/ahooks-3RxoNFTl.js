import{_ as E,a as S,b as A,c as ce,d as fe,e as re,f as q}from"./tslib-xX1bOrSW.js";import{r as o}from"./react-GysCNhY8.js";import{d as se,t as le}from"./lodash-26GAK-GT.js";import{i as ve}from"./react-fast-compare-3jyQPa-J.js";var de=function(e){return function(n,r){var t=o.useRef(!1);e(function(){return function(){t.current=!1}},[]),e(function(){if(!t.current)t.current=!0;else return n()},r)}},W=function(e){return typeof e=="function"},me=function(e){return typeof e=="string"},ne=function(e){return typeof e=="number"},ge=function(e){return typeof e>"u"};function k(e){var n=o.useRef(e);n.current=o.useMemo(function(){return e},[e]);var r=o.useRef();return r.current||(r.current=function(){for(var t=[],u=0;u<arguments.length;u++)t[u]=arguments[u];return n.current.apply(this,t)}),r.current}const z=de(o.useEffect);var te=function(e,n){var r=n.manual,t=n.ready,u=t===void 0?!0:t,i=n.defaultParams,a=i===void 0?[]:i,l=n.refreshDeps,f=l===void 0?[]:l,c=n.refreshDepsAction,h=o.useRef(!1);return h.current=!1,z(function(){!r&&u&&(h.current=!0,e.run.apply(e,E([],S(a),!1)))},[u]),z(function(){h.current||r||(h.current=!0,c?c():e.refresh())},E([],S(f),!1)),{onBefore:function(){if(!u)return{stopNow:!0}}}};te.onInit=function(e){var n=e.ready,r=n===void 0?!0:n,t=e.manual;return{loading:!t&&r}};const he=te;function G(e,n){if(e===n)return!0;for(var r=0;r<e.length;r++)if(!Object.is(e[r],n[r]))return!1;return!0}function Y(e,n){var r=o.useRef({deps:n,obj:void 0,initialized:!1}).current;return(r.initialized===!1||!G(r.deps,n))&&(r.deps=n,r.obj=e(),r.initialized=!0),r.obj}function B(e){var n=o.useRef(e);return n.current=e,n}var F=function(e){var n=B(e);o.useEffect(function(){return function(){n.current()}},[])},H=new Map,pe=function(e,n,r){var t=H.get(e);t?.timer&&clearTimeout(t.timer);var u=void 0;n>-1&&(u=setTimeout(function(){H.delete(e)},n)),H.set(e,A(A({},r),{timer:u}))},ye=function(e){return H.get(e)},$=new Map,be=function(e){return $.get(e)},Re=function(e,n){$.set(e,n),n.then(function(r){return $.delete(e),r}).catch(function(){$.delete(e)})},K={},Se=function(e,n){K[e]&&K[e].forEach(function(r){return r(n)})},U=function(e,n){return K[e]||(K[e]=[]),K[e].push(n),function(){var t=K[e].indexOf(n);K[e].splice(t,1)}},we=function(e,n){var r=n.cacheKey,t=n.cacheTime,u=t===void 0?5*60*1e3:t,i=n.staleTime,a=i===void 0?0:i,l=n.setCache,f=n.getCache,c=o.useRef(),h=o.useRef(),s=function(m,g){l?l(g):pe(m,u,g),Se(m,g.data)},p=function(m,g){return g===void 0&&(g=[]),f?f(g):ye(m)};return Y(function(){if(r){var m=p(r);m&&Object.hasOwnProperty.call(m,"data")&&(e.state.data=m.data,e.state.params=m.params,(a===-1||new Date().getTime()-m.time<=a)&&(e.state.loading=!1)),c.current=U(r,function(g){e.setState({data:g})})}},[]),F(function(){var m;(m=c.current)===null||m===void 0||m.call(c)}),r?{onBefore:function(m){var g=p(r,m);return!g||!Object.hasOwnProperty.call(g,"data")?{}:a===-1||new Date().getTime()-g.time<=a?{loading:!1,data:g?.data,error:void 0,returnNow:!0}:{data:g?.data,error:void 0}},onRequest:function(m,g){var w=be(r);return w&&w!==h.current?{servicePromise:w}:(w=m.apply(void 0,E([],S(g),!1)),h.current=w,Re(r,w),{servicePromise:w})},onSuccess:function(m,g){var w;r&&((w=c.current)===null||w===void 0||w.call(c),s(r,{data:m,params:g,time:new Date().getTime()}),c.current=U(r,function(C){e.setState({data:C})}))},onMutate:function(m){var g;r&&((g=c.current)===null||g===void 0||g.call(c),s(r,{data:m,params:e.state.params,time:new Date().getTime()}),c.current=U(r,function(w){e.setState({data:w})}))}}:{}};const Ee=we;var Ce=function(e,n){var r=n.debounceWait,t=n.debounceLeading,u=n.debounceTrailing,i=n.debounceMaxWait,a=o.useRef(),l=o.useMemo(function(){var f={};return t!==void 0&&(f.leading=t),u!==void 0&&(f.trailing=u),i!==void 0&&(f.maxWait=i),f},[t,u,i]);return o.useEffect(function(){if(r){var f=e.runAsync.bind(e);return a.current=se(function(c){c()},r,l),e.runAsync=function(){for(var c=[],h=0;h<arguments.length;h++)c[h]=arguments[h];return new Promise(function(s,p){var m;(m=a.current)===null||m===void 0||m.call(a,function(){f.apply(void 0,E([],S(c),!1)).then(s).catch(p)})})},function(){var c;(c=a.current)===null||c===void 0||c.cancel(),e.runAsync=f}}},[r,l]),r?{onCancel:function(){var f;(f=a.current)===null||f===void 0||f.cancel()}}:{}};const Pe=Ce;var Te=function(e,n){var r=n.loadingDelay,t=n.ready,u=o.useRef();if(!r)return{};var i=function(){u.current&&clearTimeout(u.current)};return{onBefore:function(){return i(),t!==!1&&(u.current=setTimeout(function(){e.setState({loading:!0})},r)),{loading:!1}},onFinally:function(){i()},onCancel:function(){i()}}};const Le=Te;var D=!!(typeof window<"u"&&window.document&&window.document.createElement);function Q(){return D?document.visibilityState!=="hidden":!0}var j=[];function Ae(e){return j.push(e),function(){var r=j.indexOf(e);j.splice(r,1)}}if(D){var Oe=function(){if(Q())for(var e=0;e<j.length;e++){var n=j[e];n()}};window.addEventListener("visibilitychange",Oe,!1)}var _e=function(e,n){var r=n.pollingInterval,t=n.pollingWhenHidden,u=t===void 0?!0:t,i=n.pollingErrorRetryCount,a=i===void 0?-1:i,l=o.useRef(),f=o.useRef(),c=o.useRef(0),h=function(){var s;l.current&&clearTimeout(l.current),(s=f.current)===null||s===void 0||s.call(f)};return z(function(){r||h()},[r]),r?{onBefore:function(){h()},onError:function(){c.current+=1},onSuccess:function(){c.current=0},onFinally:function(){a===-1||a!==-1&&c.current<=a?l.current=setTimeout(function(){!u&&!Q()?f.current=Ae(function(){e.refresh()}):e.refresh()},r):c.current=0},onCancel:function(){h()}}:{}};const ke=_e;function Me(e,n){var r=!1;return function(){for(var t=[],u=0;u<arguments.length;u++)t[u]=arguments[u];r||(r=!0,e.apply(void 0,E([],S(t),!1)),setTimeout(function(){r=!1},n))}}function Ke(){return D&&typeof navigator.onLine<"u"?navigator.onLine:!0}var N=[];function We(e){return N.push(e),function(){var r=N.indexOf(e);r>-1&&N.splice(r,1)}}if(D){var Z=function(){if(!(!Q()||!Ke()))for(var e=0;e<N.length;e++){var n=N[e];n()}};window.addEventListener("visibilitychange",Z,!1),window.addEventListener("focus",Z,!1)}var De=function(e,n){var r=n.refreshOnWindowFocus,t=n.focusTimespan,u=t===void 0?5e3:t,i=o.useRef(),a=function(){var l;(l=i.current)===null||l===void 0||l.call(i)};return o.useEffect(function(){if(r){var l=Me(e.refresh.bind(e),u);i.current=We(function(){l()})}return function(){a()}},[r,u]),F(function(){a()}),{}};const je=De;var Ne=function(e,n){var r=n.retryInterval,t=n.retryCount,u=o.useRef(),i=o.useRef(0),a=o.useRef(!1);return t?{onBefore:function(){a.current||(i.current=0),a.current=!1,u.current&&clearTimeout(u.current)},onSuccess:function(){i.current=0},onError:function(){if(i.current+=1,t===-1||i.current<=t){var l=r??Math.min(1e3*Math.pow(2,i.current),3e4);u.current=setTimeout(function(){a.current=!0,e.refresh()},l)}else i.current=0},onCancel:function(){i.current=0,u.current&&clearTimeout(u.current)}}:{}};const Be=Ne;var He=function(e,n){var r=n.throttleWait,t=n.throttleLeading,u=n.throttleTrailing,i=o.useRef(),a={};return t!==void 0&&(a.leading=t),u!==void 0&&(a.trailing=u),o.useEffect(function(){if(r){var l=e.runAsync.bind(e);return i.current=le(function(f){f()},r,a),e.runAsync=function(){for(var f=[],c=0;c<arguments.length;c++)f[c]=arguments[c];return new Promise(function(h,s){var p;(p=i.current)===null||p===void 0||p.call(i,function(){l.apply(void 0,E([],S(f),!1)).then(h).catch(s)})})},function(){var f;e.runAsync=l,(f=i.current)===null||f===void 0||f.cancel()}}},[r,t,u]),r?{onCancel:function(){var l;(l=i.current)===null||l===void 0||l.cancel()}}:{}};const $e=He;var ze=function(e){o.useEffect(function(){e?.()},[])},Fe=function(){var e=S(o.useState({}),2),n=e[1];return o.useCallback(function(){return n({})},[])},xe=function(){function e(n,r,t,u){u===void 0&&(u={}),this.serviceRef=n,this.options=r,this.subscribe=t,this.initState=u,this.count=0,this.state={loading:!1,params:void 0,data:void 0,error:void 0},this.state=A(A(A({},this.state),{loading:!r.manual}),u)}return e.prototype.setState=function(n){n===void 0&&(n={}),this.state=A(A({},this.state),n),this.subscribe()},e.prototype.runPluginHandler=function(n){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];var u=this.pluginImpls.map(function(i){var a;return(a=i[n])===null||a===void 0?void 0:a.call.apply(a,E([i],S(r),!1))}).filter(Boolean);return Object.assign.apply(Object,E([{}],S(u),!1))},e.prototype.runAsync=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return ce(this,void 0,void 0,function(){var t,u,i,a,l,f,c,h,s,p,m,g,w,C,O,y,P,L,v,d,R;return fe(this,function(b){switch(b.label){case 0:if(this.count+=1,t=this.count,u=this.runPluginHandler("onBefore",n),i=u.stopNow,a=i===void 0?!1:i,l=u.returnNow,f=l===void 0?!1:l,c=re(u,["stopNow","returnNow"]),a)return[2,new Promise(function(){})];if(this.setState(A({loading:!0,params:n},c)),f)return[2,Promise.resolve(c.data)];(w=(g=this.options).onBefore)===null||w===void 0||w.call(g,n),b.label=1;case 1:return b.trys.push([1,3,,4]),h=this.runPluginHandler("onRequest",this.serviceRef.current,n).servicePromise,h||(h=(m=this.serviceRef).current.apply(m,E([],S(n),!1))),[4,h];case 2:return s=b.sent(),t!==this.count?[2,new Promise(function(){})]:(this.setState({data:s,error:void 0,loading:!1}),(O=(C=this.options).onSuccess)===null||O===void 0||O.call(C,s,n),this.runPluginHandler("onSuccess",s,n),(P=(y=this.options).onFinally)===null||P===void 0||P.call(y,n,s,void 0),t===this.count&&this.runPluginHandler("onFinally",n,s,void 0),[2,s]);case 3:if(p=b.sent(),t!==this.count)return[2,new Promise(function(){})];throw this.setState({error:p,loading:!1}),(v=(L=this.options).onError)===null||v===void 0||v.call(L,p,n),this.runPluginHandler("onError",p,n),(R=(d=this.options).onFinally)===null||R===void 0||R.call(d,n,void 0,p),t===this.count&&this.runPluginHandler("onFinally",n,void 0,p),p;case 4:return[2]}})})},e.prototype.run=function(){for(var n=this,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this.runAsync.apply(this,E([],S(r),!1)).catch(function(u){n.options.onError})},e.prototype.cancel=function(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")},e.prototype.refresh=function(){this.run.apply(this,E([],S(this.state.params||[]),!1))},e.prototype.refreshAsync=function(){return this.runAsync.apply(this,E([],S(this.state.params||[]),!1))},e.prototype.mutate=function(n){var r=W(n)?n(this.state.data):n;this.runPluginHandler("onMutate",r),this.setState({data:r})},e}();const Ue=xe;function qe(e,n,r){n===void 0&&(n={}),r===void 0&&(r=[]);var t=n.manual,u=t===void 0?!1:t,i=n.ready,a=i===void 0?!0:i,l=re(n,["manual","ready"]),f=A({manual:u,ready:a},l),c=B(e),h=Fe(),s=Y(function(){var p=r.map(function(m){var g;return(g=m?.onInit)===null||g===void 0?void 0:g.call(m,f)}).filter(Boolean);return new Ue(c,f,h,Object.assign.apply(Object,E([{}],S(p),!1)))},[]);return s.options=f,s.pluginImpls=r.map(function(p){return p(s,f)}),ze(function(){if(!u&&a){var p=s.state.params||n.defaultParams||[];s.run.apply(s,E([],S(p),!1))}}),F(function(){s.cancel()}),{loading:s.state.loading,data:s.state.data,error:s.state.error,params:s.state.params||[],cancel:k(s.cancel.bind(s)),refresh:k(s.refresh.bind(s)),refreshAsync:k(s.refreshAsync.bind(s)),run:k(s.run.bind(s)),runAsync:k(s.runAsync.bind(s)),mutate:k(s.mutate.bind(s))}}function or(e,n,r){return qe(e,n,E(E([],S(r||[]),!1),[Pe,Le,ke,je,$e,he,Ee,Be],!1))}function Ge(e,n){e===void 0&&(e=!1);var r=S(o.useState(e),2),t=r[0],u=r[1],i=o.useMemo(function(){var a=n===void 0?!e:n,l=function(){return u(function(s){return s===e?a:e})},f=function(s){return u(s)},c=function(){return u(e)},h=function(){return u(a)};return{toggle:l,set:f,setLeft:c,setRight:h}},[]);return[t,i]}function cr(e){e===void 0&&(e=!1);var n=S(Ge(!!e),2),r=n[0],t=n[1],u=t.toggle,i=t.set,a=o.useMemo(function(){var l=function(){return i(!0)},f=function(){return i(!1)};return{toggle:u,set:function(c){return i(!!c)},setTrue:l,setFalse:f}},[]);return[r,a]}function X(e,n){if(D){if(!e)return n;var r;return W(e)?r=e():"current"in e?r=e.current:r=e,r}}var Je=function(e){var n=function(r,t,u){var i=o.useRef(!1),a=o.useRef([]),l=o.useRef([]),f=o.useRef();e(function(){var c,h=Array.isArray(u)?u:[u],s=h.map(function(p){return X(p)});if(!i.current){i.current=!0,a.current=s,l.current=t,f.current=r();return}(s.length!==a.current.length||!G(a.current,s)||!G(l.current,t))&&((c=f.current)===null||c===void 0||c.call(f),a.current=s,l.current=t,f.current=r())}),F(function(){var c;(c=f.current)===null||c===void 0||c.call(f),i.current=!1})};return n},ue=Je(o.useEffect),ae=function(e,n){return e===void 0&&(e=[]),n===void 0&&(n=[]),ve(e,n)},Ye=function(e){return function(n,r){var t=o.useRef(),u=o.useRef(0);(r===void 0||!ae(r,t.current))&&(u.current+=1),t.current=r,e(n,[u.current])}};const fr=Ye(o.useEffect);function V(e,n,r){r===void 0&&(r={});var t=r.enable,u=t===void 0?!0:t,i=B(n);ue(function(){if(u){var a=X(r.target,window);if(a?.addEventListener){var l=function(c){return i.current(c)},f=Array.isArray(e)?e:[e];return f.forEach(function(c){a.addEventListener(c,l,{capture:r.capture,once:r.once,passive:r.passive})}),function(){f.forEach(function(c){a.removeEventListener(c,l,{capture:r.capture})})}}}},[e,r.capture,r.once,r.passive,u],r.target)}var sr=function(e){e===void 0&&(e=[]);var n=o.useRef(-1),r=o.useRef([]),t=o.useCallback(function(v){n.current+=1,r.current.splice(v,0,n.current)},[]),u=S(o.useState(function(){return e.forEach(function(v,d){t(d)}),e}),2),i=u[0],a=u[1],l=o.useCallback(function(v){r.current=[],a(function(){return v.forEach(function(d,R){t(R)}),v})},[]),f=o.useCallback(function(v,d){a(function(R){var b=E([],S(R),!1);return b.splice(v,0,d),t(v),b})},[]),c=o.useCallback(function(v){return r.current[v]},[]),h=o.useCallback(function(v){return r.current.findIndex(function(d){return d===v})},[]),s=o.useCallback(function(v,d){a(function(R){var b=E([],S(R),!1);return d.forEach(function(T,_){t(v+_)}),b.splice.apply(b,E([v,0],S(d),!1)),b})},[]),p=o.useCallback(function(v,d){a(function(R){var b=E([],S(R),!1);return b[v]=d,b})},[]),m=o.useCallback(function(v){a(function(d){var R=E([],S(d),!1);R.splice(v,1);try{r.current.splice(v,1)}catch{}return R})},[]),g=o.useCallback(function(v){Array.isArray(v)&&v.length&&a(function(d){var R=[],b=d.filter(function(T,_){var M=!v.includes(_);return M&&R.push(c(_)),M});return r.current=R,b})},[]),w=o.useCallback(function(v,d){v!==d&&a(function(R){var b=E([],S(R),!1),T=b.filter(function(M,x){return x!==v});T.splice(d,0,b[v]);try{var _=r.current.filter(function(M,x){return x!==v});_.splice(d,0,r.current[v]),r.current=_}catch{}return T})},[]),C=o.useCallback(function(v){a(function(d){return t(d.length),d.concat([v])})},[]),O=o.useCallback(function(){try{r.current=r.current.slice(0,r.current.length-1)}catch{}a(function(v){return v.slice(0,v.length-1)})},[]),y=o.useCallback(function(v){a(function(d){return t(0),[v].concat(d)})},[]),P=o.useCallback(function(){try{r.current=r.current.slice(1,r.current.length)}catch{}a(function(v){return v.slice(1,v.length)})},[]),L=o.useCallback(function(v){return v.map(function(d,R){return{key:R,item:d}}).sort(function(d,R){return h(d.key)-h(R.key)}).filter(function(d){return!!d.item}).map(function(d){return d.item})},[]);return{list:i,insert:f,merge:s,replace:p,remove:m,batchRemove:g,getKey:c,getIndex:h,move:w,push:C,pop:O,unshift:y,shift:P,sortList:L,resetList:l}},Qe=function(e,n,r){var t=o.useRef(),u=o.useRef(0);ae(n,t.current)||(u.current+=1),t.current=n,ue(e,[u.current],r)},Xe=/(mac|iphone|ipod|ipad)/i.test(typeof navigator<"u"?navigator?.platform:""),ie={0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,pausebreak:19,capslock:20,esc:27,space:32,pageup:33,pagedown:34,end:35,home:36,leftarrow:37,uparrow:38,rightarrow:39,downarrow:40,insert:45,delete:46,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,leftwindowkey:91,rightwindowkey:92,meta:Xe?[91,93]:[91,92],selectkey:93,numpad0:96,numpad1:97,numpad2:98,numpad3:99,numpad4:100,numpad5:101,numpad6:102,numpad7:103,numpad8:104,numpad9:105,multiply:106,add:107,subtract:109,decimalpoint:110,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,numlock:144,scrolllock:145,semicolon:186,equalsign:187,comma:188,dash:189,period:190,forwardslash:191,graveaccent:192,openbracket:219,backslash:220,closebracket:221,singlequote:222},J={ctrl:function(e){return e.ctrlKey},shift:function(e){return e.shiftKey},alt:function(e){return e.altKey},meta:function(e){return e.type==="keyup"?ie.meta.includes(e.keyCode):e.metaKey}};function oe(e){return me(e)||ne(e)}function Ze(e){var n=Object.keys(J).reduce(function(r,t){return J[t](e)?r+1:r},0);return[16,17,18,91,92].includes(e.keyCode)?n:n+1}function I(e,n,r){var t,u;if(!e.key)return!1;if(ne(n))return e.keyCode===n?n:!1;var i=n.split("."),a=0;try{for(var l=q(i),f=l.next();!f.done;f=l.next()){var c=f.value,h=J[c],s=ie[c.toLowerCase()];(h&&h(e)||s&&s===e.keyCode)&&a++}}catch(p){t={error:p}}finally{try{f&&!f.done&&(u=l.return)&&u.call(l)}finally{if(t)throw t.error}}return r?a===i.length&&Ze(e)===i.length?n:!1:a===i.length?n:!1}function Ve(e,n){return W(e)?e:oe(e)?function(r){return I(r,e,n)}:Array.isArray(e)?function(r){return e.find(function(t){return I(r,t,n)})}:function(){return!!e}}var Ie=["keydown"];function lr(e,n,r){var t=r||{},u=t.events,i=u===void 0?Ie:u,a=t.target,l=t.exactMatch,f=l===void 0?!1:l,c=t.useCapture,h=c===void 0?!1:c,s=B(n),p=B(e);Qe(function(){var m,g,w,C=X(a,window);if(C){var O=function(v){var d,R=Ve(p.current,f),b=R(v),T=oe(b)?b:v.key;if(b)return(d=s.current)===null||d===void 0?void 0:d.call(s,v,T)};try{for(var y=q(i),P=y.next();!P.done;P=y.next()){var L=P.value;(w=C?.addEventListener)===null||w===void 0||w.call(C,L,O,h)}}catch(v){m={error:v}}finally{try{P&&!P.done&&(g=y.return)&&g.call(y)}finally{if(m)throw m.error}}return function(){var v,d,R;try{for(var b=q(i),T=b.next();!T.done;T=b.next()){var _=T.value;(R=C?.removeEventListener)===null||R===void 0||R.call(C,_,O,h)}}catch(M){v={error:M}}finally{try{T&&!T.done&&(d=b.return)&&d.call(b)}finally{if(v)throw v.error}}}}},[i],a)}var ee="AHOOKS_SYNC_STORAGE_EVENT_NAME";function er(e){function n(r,t){t===void 0&&(t={});var u,i=t.listenStorageChange,a=i===void 0?!1:i,l=t.onError,f=l===void 0?function(y){}:l;try{u=e()}catch(y){f(y)}var c=function(y){return t.serializer?t.serializer(y):JSON.stringify(y)},h=function(y){return t.deserializer?t.deserializer(y):JSON.parse(y)};function s(){try{var y=u?.getItem(r);if(y)return h(y)}catch(P){f(P)}return W(t.defaultValue)?t.defaultValue():t.defaultValue}var p=S(o.useState(s),2),m=p[0],g=p[1];z(function(){g(s())},[r]);var w=function(y){var P=W(y)?y(m):y;a||g(P);try{var L=void 0,v=u?.getItem(r);ge(P)?(L=null,u?.removeItem(r)):(L=c(P),u?.setItem(r,L)),dispatchEvent(new CustomEvent(ee,{detail:{key:r,newValue:L,oldValue:v,storageArea:u}}))}catch(d){f(d)}},C=function(y){y.key!==r||y.storageArea!==u||g(s())},O=function(y){C(y.detail)};return V("storage",C,{enable:a}),V(ee,O,{enable:a}),[m,k(w)]}return n}var vr=er(function(){return D?localStorage:void 0}),rr=function(e,n){return!Object.is(e,n)};function dr(e,n){n===void 0&&(n=rr);var r=o.useRef(),t=o.useRef();return n(t.current,e)&&(r.current=t.current,t.current=e),r.current}var mr=function(e){var n=o.useRef(e),r=Y(function(){return W(n.current)?n.current():n.current},[]),t=S(o.useState(r),2),u=t[0],i=t[1],a=k(function(){i(r)});return[u,i,a]},nr=function(){var e=o.useRef(!1);return o.useEffect(function(){return e.current=!1,function(){e.current=!0}},[]),e};function gr(e){var n=nr(),r=S(o.useState(e),2),t=r[0],u=r[1],i=o.useCallback(function(a){n.current||u(a)},[]);return[t,i]}var hr=function(e){var n=S(o.useState(e),2),r=n[0],t=n[1],u=k(function(i){t(function(a){var l=W(i)?i(a):i;return l?A(A({},a),l):a})});return[r,u]};export{F as a,k as b,V as c,lr as d,Fe as e,ze as f,gr as g,dr as h,mr as i,hr as j,cr as k,sr as l,z as m,vr as n,or as o,fr as u};
