import{j as e}from"./react-GysCNhY8.js";import{u as l,a as u,P as d}from"./react-redux--uyEwo9-.js";import{c as f,l as j}from"./redux-Le_GWoRy.js";import{i as h}from"./is-plain-object-xrCwLlgG.js";import{i as x}from"./is-plain-obj-72KcJ7RQ.js";import{i as y}from"./isobject-cufAu4Xx.js";import{i as S,a as b,c as g}from"./@reduxjs-VAos4Yjm.js";import{d as P}from"./dot-prop-bcwGIEUn.js";import{e as n}from"./fast-deep-equal-EQVWpV-L.js";import{d as $}from"./dequal-vEqHzq4I.js";import{i as q}from"./react-fast-compare-3jyQPa-J.js";import{d as O}from"./deepmerge-9x65nua1.js";import{i as C}from"./@algolia-6ISQ10fS.js";import{K as D,N as E}from"./@mui-DxaS_dPi.js";import"./hoist-non-react-statics-y4nWN7rF.js";import"./@babel-VMupNkwv.js";import"./react-dom-vCwnROQY.js";import"./scheduler-Xt5_ASe0.js";import"./react-transition-group-f1kv3CCE.js";import"./@emotion-c7wuD7i4.js";import"./stylis-W9rcUKMO.js";import"./@popperjs-v-la0Vhf.js";const c=(t,i)=>(r=i,p)=>{const{type:s}=p;if(!(_.isPlainObject(s)&&h(s)&&x(s)&&y(s)&&S(s)&&D(s)&&b(s)&&_.has(s,t)&&P.has(s,t.join("."))))return r;const o=_.get(s,t);if(_.isEqual(r,o)||q(r,o)||C(r,o)||n(r,o)||$(r,o)||n(r,o))return r;try{return O(r,o)}catch{try{return E(r,o)}catch{return _.merge(_.cloneDeep(r),o)}}},F={count:1},k=c(["s1"],F),A=k,N={name:"hjx"},R=c(["s2"],N),v=R,w=f({s1:A,s2:v}),K=j(w),L=K,a=l,m=(...t)=>u(...t),T="_test_pqy5y_1",z={test:T};g([t=>t],t=>t);function B(){const t=a(r=>r.s1),i=m();return e.jsxs(e.Fragment,{children:[e.jsx("h1",{style:{outline:"solid"},children:t.count}),e.jsx("button",{onClick:()=>{i({type:{s2:{name:new Date().toLocaleString()}}})},className:z.test,children:"111"})]})}function G(){const t=a(r=>r),i=m();return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:t.s2.name}),e.jsx("button",{onClick:()=>{i({type:{s1:{count:t.s1.count+1}}})},children:"111"})]})}function dr(){return e.jsx(e.Fragment,{children:e.jsxs(d,{store:L,children:[e.jsx(B,{}),e.jsx(G,{})]})})}export{dr as default};
