import{r as x,j as e}from"./react-GysCNhY8.js";import{u as y,a as b,P as g}from"./react-redux--uyEwo9-.js";import{c as P,l as D}from"./redux-Le_GWoRy.js";import{i as S}from"./is-plain-object-xrCwLlgG.js";import{i as v}from"./is-plain-obj-72KcJ7RQ.js";import{i as $}from"./isobject-cufAu4Xx.js";import{i as M,a as O}from"./@reduxjs-N9xBYX3C.js";import{d as E}from"./dot-prop-bcwGIEUn.js";import{e as l}from"./fast-deep-equal-EQVWpV-L.js";import{d as q}from"./dequal-vEqHzq4I.js";import{i as C}from"./react-fast-compare-3jyQPa-J.js";import{d as F}from"./deepmerge-9x65nua1.js";import{i as R}from"./@algolia-6ISQ10fS.js";import{O as w,Q as L}from"./@mui-L7sFqeRR.js";import"./hoist-non-react-statics-y4nWN7rF.js";import{d as X}from"./main-Cm7UGfOL.js";import"./@babel-VMupNkwv.js";import"./react-dom-vCwnROQY.js";import"./scheduler-Xt5_ASe0.js";import"./react-transition-group-f1kv3CCE.js";import"./@emotion-c7wuD7i4.js";import"./stylis-W9rcUKMO.js";import"./@popperjs-v-la0Vhf.js";import"./ahooks-2Zz8y5Cu.js";import"./tslib-xX1bOrSW.js";import"./lodash-26GAK-GT.js";import"./echarts-1Iu8elsr.js";import"./zrender-8UwRb6PW.js";import"./immer-U6fk-Zvt.js";import"./react-toastify-TLlLzmv5.js";import"./react-router-dom-C0YLa0lE.js";import"./react-router-lSZP5VRP.js";import"./@remix-run-wEAHOncH.js";import"./react-loadable-beiGpRpV.js";import"./prop-types-g0p8o0B7.js";const u=(r,i)=>(t=i,c)=>{const{type:o}=c;if(!(_.isPlainObject(o)&&S(o)&&v(o)&&$(o)&&M(o)&&w(o)&&O(o)&&_.has(o,r)&&E.has(o,r.join("."))))return t;const s=_.get(o,r);if(_.isEqual(t,s)||C(t,s)||R(t,s)||l(t,s)||q(t,s)||l(t,s))return t;try{return F(t,s)}catch{try{return L(t,s)}catch{return _.merge(_.cloneDeep(t),s)}}},k={count:1},A=u(["s1"],k),T=A,I={name:"hjx"},N=u(["s2"],I),Q=N,U=P({s1:T,s2:Q}),z=D(U),B=z,d=y,f=(...r)=>b(...r),G="_test_1wrjc_1",H={test:G};function J(r=100){const i=r,t=0,c=[];let o=0,s=r*2;for(let n=0;n<=360;n+=1){const a=n*Math.PI/180,m=Math.round(t+i*Math.sin(a)),p=Math.round(r+i*Math.cos(a)),j=m-o,h=p-s;c.push([j,h]),o=m,s=p}return`LeftDown 1
Delay 10
MoveR `+c.map(n=>n[0]+","+n[1]).join(`
Delay 10
MoveR `)+`
Delay 10
LeftUp 1`}const K=X(()=>{});function V(){const r=d(t=>t.s1),i=f();return x.useEffect(()=>{K()},[]),e.jsxs(e.Fragment,{children:[e.jsx("h1",{style:{outline:"solid"},children:r.count}),e.jsx("button",{onClick:()=>{i({type:{s2:{name:new Date().toLocaleString()}}})},className:H.test,children:"111"}),e.jsx("textarea",{value:J(500)})]})}function W(){const r=d(t=>t),i=f();return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:r.s2.name}),e.jsx("button",{onClick:()=>{i({type:{s1:{count:r.s1.count+1}}})},children:"111"})]})}function Rt(){return e.jsx(e.Fragment,{children:e.jsxs(g,{store:B,children:[e.jsx(V,{}),e.jsx(W,{})]})})}export{Rt as default};
