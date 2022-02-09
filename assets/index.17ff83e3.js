var Dt=Object.defineProperty,wt=Object.defineProperties;var Tt=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var Mt=Object.prototype.hasOwnProperty,Et=Object.prototype.propertyIsEnumerable;var R=(t,o,e)=>o in t?Dt(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,B=(t,o)=>{for(var e in o||(o={}))Mt.call(o,e)&&R(t,e,o[e]);if(P)for(var e of P(o))Et.call(o,e)&&R(t,e,o[e]);return t},D=(t,o)=>wt(t,Tt(o));import{d as k,o as _,c as f,a as s,n as K,i as W,r as p,b as l,w as i,e as g,f as y,p as G,g as J,h as u,j as z,k as L,l as E,m as I,u as w,t as Q,q as X,F as T,s as Ft,v as Y,x as Lt,y as It,T as Vt,z as O,A as V,B as St,C as At,D as Ht}from"./vendor.d6062cab.js";const Ot=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}};Ot();const Ut=["xlink:href"],U=k({props:{name:null,size:null},setup(t){return(o,e)=>(_(),f("svg",{class:"icon z-icon",style:K({width:t.size+"px",height:t.size+"px"})},[s("use",{"xlink:href":`#icon-${t.name}`},null,8,Ut)],4))}});var v=(t,o)=>{const e=t.__vccOpts||t;for(const[n,r]of o)e[n]=r;return e};const jt={components:{Icon:U},props:{toggleMenuButtonVisible:{type:Boolean,default:!1}},setup(){const t=W("menuVisible");return{toggleMenu:()=>{t.value=!t.value}}}},Nt=t=>(G("data-v-5beea9c4"),t=t(),J(),t),Zt={class:"topnav"},qt={class:"logo-wrapper"},Pt=Nt(()=>s("span",null,"ZUI",-1)),Rt={class:"menu"};function Kt(t,o,e,n,r,a){const c=p("Icon"),d=p("router-link");return _(),f("div",Zt,[l(d,{to:"/",class:"logo"},{default:i(()=>[s("div",qt,[l(c,{name:"flash",size:40}),Pt])]),_:1}),s("ul",Rt,[s("li",null,[l(d,{to:"/doc"},{default:i(()=>[l(c,{name:"github",size:30})]),_:1})])]),e.toggleMenuButtonVisible?(_(),g(c,{key:0,name:"menu",size:40,class:"toggleAside",onClick:n.toggleMenu},null,8,["onClick"])):y("",!0)])}var tt=v(jt,[["render",Kt],["__scopeId","data-v-5beea9c4"]]);const Wt={components:{Topnav:tt,Icon:U}},C=t=>(G("data-v-0365f079"),t=t(),J(),t),Gt={style:{background:"#000","min-height":"100vh"}},Jt={class:"topnavAndBanner"},Qt={class:"banner"},Xt=C(()=>s("div",{innerHTML:"<code>$ yarn add zui</code>"},null,-1)),Yt=u(" or "),te=C(()=>s("div",{innerHTML:"<code>$ npm i zui</code>"},null,-1)),ee={class:"actions"},oe=u("\u5FEB\u901F\u5F00\u59CB"),ne={class:"features"},se=C(()=>s("h3",null,"\u57FA\u4E8E Vue 3",-1)),le=C(()=>s("p",null,"\u4F7F\u7528\u4E86 Vue 3 Composition API",-1)),ce=C(()=>s("h3",null,"\u57FA\u4E8E TypeScript ",-1)),re=C(()=>s("p",null,"\u6E90\u4EE3\u7801\u91C7\u7528 TypeScript \u4E66\u5199",-1)),ae=C(()=>s("h3",null,"\u4EE3\u7801\u6613\u8BFB",-1)),ie=C(()=>s("p",null,"\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u6E90\u4EE3\u7801\u90FD\u6781\u5176\u7B80\u6D01",-1));function ue(t,o,e,n,r,a){const c=p("Topnav"),d=p("Icon"),m=p("router-link");return _(),f("div",Gt,[s("div",Jt,[l(c),s("div",Qt,[l(d,{name:"flash",size:120}),Xt,Yt,te,s("div",ee,[l(m,{to:"/doc",class:"start"},{default:i(()=>[oe]),_:1})])])]),s("div",ne,[s("ul",null,[s("li",null,[l(d,{name:"vue",size:60}),se,le]),s("li",null,[l(d,{name:"ts",size:60}),ce,re]),s("li",null,[l(d,{name:"light",size:60}),ae,ie])])])])}var de=v(Wt,[["render",ue],["__scopeId","data-v-0365f079"]]);const _e={components:{Topnav:tt},setup(){const t=W("menuVisible"),o=z("com");return{menuVisible:t,selectedItem:o,onClick:n=>{o.value=o.value===n?"":n}}}},fe={class:"layout"},pe={class:"content"},me={key:0,class:"install-ol"},he=u("\u4ECB\u7ECD"),ve=u("\u5B89\u88C5"),be=u("\u5F00\u59CB\u4F7F\u7528"),ge={key:0,class:"com-ol"},ze=u("Switch \u7EC4\u4EF6"),$e=u("Button \u7EC4\u4EF6"),ye=u("Dialog \u7EC4\u4EF6"),Ce=u("Tabs \u7EC4\u4EF6"),ke=u("Toast \u7EC4\u4EF6");function xe(t,o,e,n,r,a){const c=p("Topnav"),d=p("router-view"),m=p("router-link");return _(),f("div",fe,[l(c,{toggleMenuButtonVisible:"",class:"nav"}),s("div",pe,[s("main",null,[l(d)]),s("aside",null,[s("div",null,[s("span",{onClick:o[0]||(o[0]=$=>n.onClick("doc"))},"\u6587\u6863"),n.selectedItem==="doc"?(_(),f("ol",me,[s("li",null,[l(m,{to:"/doc/intro"},{default:i(()=>[he]),_:1})]),s("li",null,[l(m,{to:"/doc/install"},{default:i(()=>[ve]),_:1})]),s("li",null,[l(m,{to:"/doc/get-started"},{default:i(()=>[be]),_:1})])])):y("",!0)]),s("div",null,[s("span",{onClick:o[1]||(o[1]=$=>n.onClick("com"))},"\u7EC4\u4EF6\u5217\u8868"),n.selectedItem==="com"?(_(),f("ol",ge,[s("li",null,[l(m,{to:"/doc/switch"},{default:i(()=>[ze]),_:1})]),s("li",null,[l(m,{to:"/doc/button"},{default:i(()=>[$e]),_:1})]),s("li",null,[l(m,{to:"/doc/dialog"},{default:i(()=>[ye]),_:1})]),s("li",null,[l(m,{to:"/doc/tabs"},{default:i(()=>[Ce]),_:1})]),s("li",null,[l(m,{to:"/doc/toast"},{default:i(()=>[ke]),_:1})])])):y("",!0)])])])])}var Be=v(_e,[["render",xe],["__scopeId","data-v-f386b7f0"]]),et=t=>{t.__sourceCode=`<template>\r
<z-switch v-model:value="bool" />\r
</template>\r
\r
<script lang="ts">\r
import {\r
  ref\r
} from 'vue'\r
export default {\r
  setup() {\r
    const bool = ref(false)\r
    return {\r
      bool\r
    }\r
  }\r
}\r
<\/script>`,t.__sourceCodeTitle=" \u5E38\u89C4\u7528\u6CD5 "};const ot={setup(){return{bool:z(!1)}}};function De(t,o,e,n,r,a){const c=p("z-switch");return _(),g(c,{value:n.bool,"onUpdate:value":o[0]||(o[0]=d=>n.bool=d)},null,8,["value"])}typeof et=="function"&&et(ot);var we=v(ot,[["render",De]]),nt=t=>{t.__sourceCode=`<template>\r
<z-switch v-model:value="bool" disabled />\r
</template>\r
\r
<script lang="ts">\r
import {\r
  ref\r
} from 'vue'\r
export default {\r
  setup() {\r
    const bool = ref(false)\r
    return {\r
      bool\r
    }\r
  }\r
}\r
<\/script>`,t.__sourceCodeTitle=" \u652F\u6301 disabled "};const st={setup(){return{bool:z(!1)}}};function Te(t,o,e,n,r,a){const c=p("z-switch");return _(),g(c,{value:n.bool,"onUpdate:value":o[0]||(o[0]=d=>n.bool=d),disabled:""},null,8,["value"])}typeof nt=="function"&&nt(st);var Me=v(st,[["render",Te]]);const Ee=["border","disabled"],Fe={name:"ZButton"},S=k(D(B({},Fe),{props:{theme:{default:"button"},size:{default:"normal"},border:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(t){const o=t,{theme:e,size:n,border:r}=o,a=L(()=>({[`z-theme-${e}`]:e,[`z-size-${n}`]:n,["z-border"]:r}));return(c,d)=>(_(),f("button",{class:I(["z-button",w(a)]),border:w(r),disabled:t.disabled},[E(c.$slots,"default")],10,Ee))}}));const j=window.Prism,Le={components:{Button:S,Icon:U},props:{component:Object},setup(t){const o=L(()=>j.highlight(t.component.__sourceCode,j.languages.html,"html")),e=()=>n.value=!n.value,n=z(!1);return{Prism:j,html:o,codeVisible:n,toggle:e}}},Ie={class:"demo"},Ve={class:"demo-component"},Se={key:0,class:"demo-code"},Ae=["innerHTML"];function He(t,o,e,n,r,a){const c=p("Icon");return _(),f("div",Ie,[s("h2",null,Q(e.component.__sourceCodeTitle),1),s("div",Ve,[(_(),g(X(e.component)))]),s("div",{class:"demo-actions",onClick:o[0]||(o[0]=(...d)=>n.toggle&&n.toggle(...d))},[l(c,{name:"left"}),l(c,{style:K({opacity:n.codeVisible?0:1}),name:"i",size:15},null,8,["style"]),l(c,{name:"right"})]),n.codeVisible?(_(),f("div",Se,[s("pre",{class:"language-html",innerHTML:n.html},null,8,Ae)])):y("",!0)])}var F=v(Le,[["render",He],["__scopeId","data-v-4cd205ea"]]);const Oe={components:{Demo:F},setup(){return{Switch1Demo:we,Switch2Demo:Me}}},Ue=s("h1",null,"Switch \u7EC4\u4EF6\u793A\u4F8B ",-1);function je(t,o,e,n,r,a){const c=p("Demo");return _(),f("div",null,[Ue,l(c,{component:n.Switch1Demo},null,8,["component"]),l(c,{component:n.Switch2Demo},null,8,["component"])])}var Ne=v(Oe,[["render",je]]),lt=t=>{t.__sourceCode=`<template>\r
  <div>\r
    <z-button theme='primary'>\u4F60\u597D</z-button>\r
    <z-button>\u4F60\u597D</z-button>\r
    <z-button theme="text">\u4F60\u597D</z-button>\r
  </div>\r
</template>`,t.__sourceCodeTitle=" \u5E38\u89C4\u4F7F\u7528 "};const ct={},Ze=u("\u4F60\u597D"),qe=u("\u4F60\u597D"),Pe=u("\u4F60\u597D");function Re(t,o){const e=p("z-button");return _(),f("div",null,[l(e,{theme:"primary"},{default:i(()=>[Ze]),_:1}),l(e,null,{default:i(()=>[qe]),_:1}),l(e,{theme:"text"},{default:i(()=>[Pe]),_:1})])}typeof lt=="function"&&lt(ct);var rt=v(ct,[["render",Re]]),at=t=>{t.__sourceCode=`<template>\r
  <div>\r
    <div>\r
      <z-button size="small" theme="primary">\u5C0F\u5C0F\u5C0F</z-button>\r
      <z-button size='small' >\u5C0F\u5C0F\u5C0F</z-button>\r
      <z-button size="small" theme="text">\u5C0F\u5C0F\u5C0F</z-button>\r
    </div>\r
    <div style='margin: 1em 0'>\r
      <z-button theme='primary'>\u666E\u901A</z-button>\r
      <z-button>\u666E\u901A</z-button>\r
      <z-button theme='text'>\u666E\u901A</z-button>\r
    </div>\r
    <div>\r
      <z-button theme='primary' size="big">\u5927\u5927\u5927</z-button>\r
      <z-button size="big">\u5927\u5927\u5927</z-button>\r
      <z-button theme='text' size="big">\u5927\u5927\u5927</z-button>\r
    </div>\r
  </div>\r
</template>`,t.__sourceCodeTitle=" \u652F\u6301 size "};const it={},Ke=u("\u5C0F\u5C0F\u5C0F"),We=u("\u5C0F\u5C0F\u5C0F"),Ge=u("\u5C0F\u5C0F\u5C0F"),Je={style:{margin:"1em 0"}},Qe=u("\u666E\u901A"),Xe=u("\u666E\u901A"),Ye=u("\u666E\u901A"),to=u("\u5927\u5927\u5927"),eo=u("\u5927\u5927\u5927"),oo=u("\u5927\u5927\u5927");function no(t,o){const e=p("z-button");return _(),f("div",null,[s("div",null,[l(e,{size:"small",theme:"primary"},{default:i(()=>[Ke]),_:1}),l(e,{size:"small"},{default:i(()=>[We]),_:1}),l(e,{size:"small",theme:"text"},{default:i(()=>[Ge]),_:1})]),s("div",Je,[l(e,{theme:"primary"},{default:i(()=>[Qe]),_:1}),l(e,null,{default:i(()=>[Xe]),_:1}),l(e,{theme:"text"},{default:i(()=>[Ye]),_:1})]),s("div",null,[l(e,{theme:"primary",size:"big"},{default:i(()=>[to]),_:1}),l(e,{size:"big"},{default:i(()=>[eo]),_:1}),l(e,{theme:"text",size:"big"},{default:i(()=>[oo]),_:1})])])}typeof at=="function"&&at(it);var so=v(it,[["render",no]]),ut=t=>{t.__sourceCode=`<template>\r
    <div>\r
      <z-button theme='primary' size='small' border>\u4E3B\u8981\u6309\u94AE</z-button>\r
      <z-button size='small' border>\u666E\u901A\u6309\u94AE</z-button>\r
    </div>\r
    <div style='margin: 1em 0'>\r
      <z-button theme='primary' border>\u4E3B\u8981\u6309\u94AE</z-button>\r
      <z-button border>\u666E\u901A\u6309\u94AE</z-button>\r
    </div>\r
    <div>\r
      <z-button theme='primary' size='big' border>\u4E3B\u8981\u6309\u94AE</z-button>\r
      <z-button size='big' border>\u666E\u901A\u6309\u94AE</z-button>\r
    </div>\r
</template>`,t.__sourceCodeTitle=" \u652F\u6301 border "};const dt={},lo=u("\u4E3B\u8981\u6309\u94AE"),co=u("\u666E\u901A\u6309\u94AE"),ro={style:{margin:"1em 0"}},ao=u("\u4E3B\u8981\u6309\u94AE"),io=u("\u666E\u901A\u6309\u94AE"),uo=u("\u4E3B\u8981\u6309\u94AE"),_o=u("\u666E\u901A\u6309\u94AE");function fo(t,o){const e=p("z-button");return _(),f(T,null,[s("div",null,[l(e,{theme:"primary",size:"small",border:""},{default:i(()=>[lo]),_:1}),l(e,{size:"small",border:""},{default:i(()=>[co]),_:1})]),s("div",ro,[l(e,{theme:"primary",border:""},{default:i(()=>[ao]),_:1}),l(e,{border:""},{default:i(()=>[io]),_:1})]),s("div",null,[l(e,{theme:"primary",size:"big",border:""},{default:i(()=>[uo]),_:1}),l(e,{size:"big",border:""},{default:i(()=>[_o]),_:1})])],64)}typeof ut=="function"&&ut(dt);var po=v(dt,[["render",fo]]),_t=t=>{t.__sourceCode=`<template>\r
  <z-button  disabled >\u7981\u7528\u6309\u94AE</z-button>\r
  <z-button theme='primary' disabled>\u7981\u7528\u6309\u94AE</z-button>\r
  <z-button disabled>\u7981\u7528\u6309\u94AE</z-button>\r
  <z-button theme="text" disabled>\u7981\u7528\u6309\u94AE</z-button>\r
</template>`,t.__sourceCodeTitle=" \u652F\u6301 disabled "};const ft={},mo=u("\u7981\u7528\u6309\u94AE"),ho=u("\u7981\u7528\u6309\u94AE"),vo=u("\u7981\u7528\u6309\u94AE"),bo=u("\u7981\u7528\u6309\u94AE");function go(t,o){const e=p("z-button");return _(),f(T,null,[l(e,{disabled:""},{default:i(()=>[mo]),_:1}),l(e,{theme:"primary",disabled:""},{default:i(()=>[ho]),_:1}),l(e,{disabled:""},{default:i(()=>[vo]),_:1}),l(e,{theme:"text",disabled:""},{default:i(()=>[bo]),_:1})],64)}typeof _t=="function"&&_t(ft);var zo=v(ft,[["render",go]]),pt=t=>{t.__sourceCode=`<template>\r
<div>\r
  <z-button loading>\u52A0\u8F7D\u4E2D</z-button>\r
  <z-button>\u52A0\u8F7D\u5B8C\u6BD5</z-button>\r
</div>\r
</template>`,t.__sourceCodeTitle=" \u652F\u6301\u663E\u793A\u52A0\u8F7D\u4E2D "};const mt={},$o=u("\u52A0\u8F7D\u4E2D"),yo=u("\u52A0\u8F7D\u5B8C\u6BD5");function Co(t,o){const e=p("z-button");return _(),f("div",null,[l(e,{loading:""},{default:i(()=>[$o]),_:1}),l(e,null,{default:i(()=>[yo]),_:1})])}typeof pt=="function"&&pt(mt);var ko=v(mt,[["render",Co]]);console.log(rt);const xo={components:{Demo:F},setup(){return{Button1Demo:rt,Button2Demo:so,Button3Demo:po,Button4Demo:zo,Button5Demo:ko}}},Bo=s("h1",null,"Button \u793A\u4F8B",-1);function Do(t,o,e,n,r,a){const c=p("Demo");return _(),f("div",null,[Bo,l(c,{component:n.Button1Demo},null,8,["component"]),l(c,{component:n.Button2Demo},null,8,["component"]),l(c,{component:n.Button3Demo},null,8,["component"]),l(c,{component:n.Button4Demo},null,8,["component"]),l(c,{component:n.Button5Demo},null,8,["component"])])}var wo=v(xo,[["render",Do]]),ht=t=>{t.__sourceCode=`<template>\r
<div>\r
  <z-button @click="toggle">\u6253\u5F00\u5BF9\u8BDD\u6846</z-button>\r
  <z-dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">\r
    <template v-slot:content>\r
      <strong>hi</strong>\r
      <div>hi2</div>\r
    </template>\r
    <template v-slot:title>\r
      <strong>\u52A0\u7C97\u7684\u6807\u9898</strong>\r
    </template>\r
  </z-dialog>\r
</div>\r
</template>\r
\r
<script lang="ts">\r
import {\r
  ref\r
} from 'vue'\r
export default {\r
  setup() {\r
    const x = ref(false)\r
    const toggle = () => {\r
      x.value = !x.value\r
    }\r
    const f1 = () => {\r
      return false\r
    }\r
    const f2 = () => {}\r
    return {\r
      x,\r
      toggle,\r
      f1,\r
      f2\r
    }\r
  }\r
}\r
<\/script>`,t.__sourceCodeTitle=" \u5E38\u89C4\u4F7F\u7528 "};const vt={setup(){const t=z(!1);return{x:t,toggle:()=>{t.value=!t.value},f1:()=>!1,f2:()=>{}}}},To=u("\u6253\u5F00\u5BF9\u8BDD\u6846"),Mo=s("strong",null,"hi",-1),Eo=s("div",null,"hi2",-1),Fo=s("strong",null,"\u52A0\u7C97\u7684\u6807\u9898",-1);function Lo(t,o,e,n,r,a){const c=p("z-button"),d=p("z-dialog");return _(),f("div",null,[l(c,{onClick:n.toggle},{default:i(()=>[To]),_:1},8,["onClick"]),l(d,{visible:n.x,"onUpdate:visible":o[0]||(o[0]=m=>n.x=m),closeOnClickOverlay:!1,ok:n.f1,cancel:n.f2},{content:i(()=>[Mo,Eo]),title:i(()=>[Fo]),_:1},8,["visible","ok","cancel"])])}typeof ht=="function"&&ht(vt);var Io=v(vt,[["render",Lo]]);const Vo=s("span",null,null,-1),So=[Vo],Ao={name:"ZSwitch"},Ho=k(D(B({},Ao),{props:{value:{type:Boolean}},emits:["update:value"],setup(t,{emit:o}){const e=t,n=()=>{console.log(e.value),o("update:value",!e.value)};return(r,a)=>(_(),f("button",{class:I(["z-switch",{"z-checked":t.value}]),onClick:n},So,2))}})),Oo={name:"ZTab"};function Uo(t,o,e,n,r,a){return _(),f("div",null,[E(t.$slots,"default")])}var bt=v(Oo,[["render",Uo]]);const jo={class:"z-tabs"},No=["onClick"],Zo={class:"z-tabs-content"},qo={name:"ZTabs"},Po=k(D(B({},qo),{props:{selected:null},emits:["update:selected"],setup(t,{emit:o}){const e=t,n=Ft(),r=z(null),a=z(null),c=z(null);Y(()=>{Lt(()=>{const{width:h}=r.value.getBoundingClientRect();a.value.style.width=h+"px";const{left:b}=c.value.getBoundingClientRect(),{left:x}=r.value.getBoundingClientRect(),H=x-b;a.value.style.left=H+"px"},{flush:"post"})});const d=n.default();d.forEach(h=>{if(h.type.name!==bt.name)throw new Error("Tabs \u5B50\u6807\u7B7E\u5FC5\u987B\u662F Tab")});const m=L(()=>d.find(h=>h.props.title===e.selected)),$=d.map(h=>h.props.title),M=h=>{o("update:selected",h)};return(h,b)=>(_(),f("div",jo,[s("div",{class:"z-tabs-nav",ref_key:"container",ref:c},[(_(!0),f(T,null,It(w($),(x,H)=>(_(),f("div",{class:I(["z-tabs-nav-item",{selected:x===t.selected}]),ref_for:!0,ref:q=>{x===t.selected&&(r.value=q)},onClick:q=>M(x),key:H},Q(x),11,No))),128)),s("div",{class:"z-tabs-nav-indicator",ref_key:"indicator",ref:a},null,512)],512),s("div",Zo,[(_(),g(X(w(m)),{key:w(m).props.title}))])]))}}));const Ro={class:"z-dialog-wrapper"},Ko={class:"z-dialog"},Wo=u("Cancel"),Go=u("OK"),Jo={name:"ZDialog"},gt=k(D(B({},Jo),{props:{visible:{type:Boolean,default:!1},closeOnClickOverlay:{type:Boolean,default:!0},ok:{type:Function,default:()=>{}},cancel:{type:Function,default:()=>{}}},emits:["update:visible"],setup(t,{emit:o}){const e=t,n=()=>{o("update:visible",!1)},r=()=>{e.closeOnClickOverlay&&n()},a=()=>{e.ok&&e.ok()!==!1&&n()},c=()=>{e.cancel&&e.cancel(),n()};return(d,m)=>t.visible?(_(),g(Vt,{key:0,to:"body"},[s("div",{class:"z-dialog-overlay",onClick:r}),s("div",Ro,[s("div",Ko,[s("header",null,[E(d.$slots,"title"),s("span",{onClick:n,class:"z-dialog-close"})]),s("main",null,[E(d.$slots,"content")]),s("footer",null,[t.cancel?(_(),g(S,{key:0,onClick:c},{default:i(()=>[Wo]),_:1})):y("",!0),t.ok?(_(),g(S,{key:1,theme:"primary",onClick:a},{default:i(()=>[Go]),_:1})):y("",!0)])])])])):y("",!0)}})),Qo=t=>{const{title:o,content:e,ok:n,cancel:r}=t,a=document.createElement("div");document.body.appendChild(a);const c=()=>{d.unmount(),a.remove()},d=O({render(){return V(gt,{visible:!0,"onUpdate:visible":m=>{m===!1&&c()},ok:n,cancel:r},{title:o,content:e})}});d.mount(a)},Xo=[Ho,S,Po,bt,gt];function Yo(t){for(const o of Xo)t.component(o.name,o)}var zt=t=>{t.__sourceCode=`<template>\r
  <div>\r
    <z-button @click="showDialog">\u6253\u5F00\u5BF9\u8BDD\u6846</z-button>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import {\r
  openDialog\r
} from "../lib/index";\r
import {h} from 'vue'\r
\r
export default {\r
  setup() {\r
    const showDialog = () => {\r
      openDialog({\r
        title: h('strong', {}, '\u6807\u9898'),\r
        content: '\u4F60\u597D',\r
        ok() {\r
          console.log('ok')\r
        },\r
        cancel() {\r
          console.log('cancel')\r
        }\r
      })\r
    }\r
    return {\r
      showDialog\r
    }\r
  }\r
}\r
<\/script>`,t.__sourceCodeTitle=" \u4E00\u952E\u6253\u5F00 Dialog "};const $t={setup(){return{showDialog:()=>{Qo({title:V("strong",{},"\u6807\u9898"),content:"\u4F60\u597D",ok(){console.log("ok")},cancel(){console.log("cancel")}})}}}},tn=u("\u6253\u5F00\u5BF9\u8BDD\u6846");function en(t,o,e,n,r,a){const c=p("z-button");return _(),f("div",null,[l(c,{onClick:n.showDialog},{default:i(()=>[tn]),_:1},8,["onClick"])])}typeof zt=="function"&&zt($t);var on=v($t,[["render",en]]);const nn={components:{Demo:F},setup(){return{Dialog1Demo:Io,Dialog2Demo:on}}},sn=s("h1",null,"Dialog \u793A\u4F8B",-1);function ln(t,o,e,n,r,a){const c=p("Demo");return _(),f(T,null,[sn,l(c,{component:n.Dialog1Demo},null,8,["component"]),l(c,{component:n.Dialog2Demo},null,8,["component"])],64)}var cn=v(nn,[["render",ln]]),yt=t=>{t.__sourceCode=`<template>\r
<z-tabs v-model:selected="x">\r
  <z-tab title="\u5BFC\u822A1">\u5185\u5BB91</z-tab>\r
  <z-tab title="\u5BFC\u822A2">\u5185\u5BB92</z-tab>\r
</z-tabs>\r
</template>\r
\r
<script lang="ts">\r
import {\r
  ref\r
} from 'vue'\r
export default {\r
\r
  setup() {\r
    const x = ref('\u5BFC\u822A2')\r
    return {\r
      x\r
    }\r
  }\r
}\r
<\/script>`,t.__sourceCodeTitle=" \u5E38\u89C4\u4F7F\u7528 "};const Ct={setup(){return{x:z("\u5BFC\u822A2")}}},rn=u("\u5185\u5BB91"),an=u("\u5185\u5BB92");function un(t,o,e,n,r,a){const c=p("z-tab"),d=p("z-tabs");return _(),g(d,{selected:n.x,"onUpdate:selected":o[0]||(o[0]=m=>n.x=m)},{default:i(()=>[l(c,{title:"\u5BFC\u822A1"},{default:i(()=>[rn]),_:1}),l(c,{title:"\u5BFC\u822A2"},{default:i(()=>[an]),_:1})]),_:1},8,["selected"])}typeof yt=="function"&&yt(Ct);var dn=v(Ct,[["render",un]]);const _n={components:{Demo:F},setup(){return{Tabs1Demo:dn}}},fn=s("h1",null,"Tabs \u793A\u4F8B",-1);function pn(t,o,e,n,r,a){const c=p("Demo");return _(),f(T,null,[fn,l(c,{component:n.Tabs1Demo},null,8,["component"])],64)}var mn=v(_n,[["render",pn]]);const hn={class:"toast",ref:"toast"},vn={class:"message"},bn={name:"ZToast"},gn=k(D(B({},bn),{props:{visible:{type:Boolean,default:!0},autoClose:{default:3},position:{default:"top"},onClose:{type:Function,default:()=>{}}},emits:["update:visible"],setup(t,{emit:o}){const e=t,{position:n,autoClose:r,onClose:a}=e;Y(()=>{d()});const c=L(()=>({[`position-${n}`]:!0})),d=()=>{r&&setTimeout(()=>{m()},r*1e3)},m=()=>{o("update:visible",!1),a&&a()};return($,M)=>t.visible?(_(),f("div",{key:0,class:I(["wrapper",w(c)])},[s("div",hn,[s("div",vn,[E($.$slots,"message",{},void 0,!0)])],512)],2)):y("",!0)}}));var zn=v(gn,[["__scopeId","data-v-f218049e"]]);const $n=t=>{const{message:o,onClose:e,position:n,autoClose:r}=t,a=document.createElement("div");document.body.appendChild(a);const c=()=>{d.unmount(),a.remove()},d=O({render(){return V(zn,{visible:!0,"onUpdate:visible":m=>{m===!1&&c()},onClose:e,autoClose:r,position:n},{message:o})}});d.mount(a)};var kt=t=>{t.__sourceCode=`<template>\r
  <z-button @click='toggle'> show toast</z-button>\r
</template>\r
\r
<script lang="ts">\r
import {showToast} from '../lib/showToast'\r
\r
export default {\r
  setup() {\r
    const toggle = () => {\r
      showToast({\r
        message: '\u8FD9\u662F\u4E00\u6761\u5F39\u6846!',\r
        onClose: () => {\r
          console.log('toast close')\r
        }\r
      })\r
    }\r
    return {toggle}\r
  }\r
}\r
<\/script>`,t.__sourceCodeTitle=" \u5E38\u89C4\u4F7F\u7528 "};const xt={setup(){return{toggle:()=>{$n({message:"\u8FD9\u662F\u4E00\u6761\u5F39\u6846!",onClose:()=>{console.log("toast close")}})}}}},yn=u(" show toast");function Cn(t,o,e,n,r,a){const c=p("z-button");return _(),g(c,{onClick:n.toggle},{default:i(()=>[yn]),_:1},8,["onClick"])}typeof kt=="function"&&kt(xt);var kn=v(xt,[["render",Cn]]);const xn={components:{Demo:F},setup(){return{Toast1Demo:kn}}},Bn=s("h1",null,"Tabs \u793A\u4F8B",-1);function Dn(t,o,e,n,r,a){const c=p("Demo");return _(),f(T,null,[Bn,l(c,{component:n.Toast1Demo},null,8,["component"])],64)}var wn=v(xn,[["render",Dn]]);const Tn={props:{content:{type:String,required:!0}}},Mn=["innerHTML"];function En(t,o,e,n,r,a){return _(),f("article",{class:"markdown-body",innerHTML:e.content},null,8,Mn)}var Bt=v(Tn,[["render",En]]),Fn=`<p><font color='#fff' size=8>\u4ECB\u7ECD</font></p>
<p><font color='#fff'>Z UI \u662F\u4E00\u6B3E\u57FA\u4E8E Vue 3 \u548C TypeScript \u7684 UI \u7EC4\u4EF6\u5E93\u3002</font></p>
<p><font color='#fff'>\u8FD9\u6B3E\u7EC4\u4EF6\u5E93\u5176\u5B9E\u662F\u6211\u4E3A\u4E86\u603B\u7ED3\u81EA\u5DF1\u8FD9\u51E0\u5E74\u7684\u6280\u672F\u7ECF\u9A8C\u800C\u5199\u7684\uFF0C\u5168\u7A0B\u4EB2\u624B\u7F16\u5199\uFF0C\u5C3D\u91CF\u4E0D\u91C7\u7528\u7B2C\u4E09\u65B9\u5E93\uFF0C\u5305\u62EC\u4F60\u73B0\u5728\u770B\u5230\u7684\u8FD9\u4E2A\u5B98\u7F51\u4E5F\u51E0\u4E4E\u90FD\u662F\u6211\u81EA\u5DF1\u5199\u7684\u3002</font></p>
<p><font color='#fff'>\u6240\u4EE5\u5F3A\u70C8\u4E0D\u5EFA\u8BAE\u4F60\u5C06\u6B64 UI \u5E93\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u3002\u4F46\u5982\u679C\u4F60\u662F\u62B1\u7740\u770B\u6E90\u4EE3\u7801\u7684\u76EE\u7684\u6765\u7684\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5E93\u8FD8\u662F\u503C\u5F97\u4E00\u770B\u7684\u3002\u6E90\u4EE3\u7801\u653E\u5728\u4E86 <a href="https://github.com/FrankFang/gulu-for-vue3">GitHub</a>\u3002\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u67E5\u770B\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u6E90\u4EE3\u7801\u548C\u793A\u4F8B\uFF0C\u8FD0\u884C\u65B9\u6CD5\u89C1 README.md\u3002 </font></p>
<p><font color='#fff'>\u4E0B\u4E00\u8282\uFF1A<a href="#/doc/install">\u5B89\u88C5</a> </font></p>
`,Ln=`<p><font color='#fff' size=8>\u5F00\u59CB\u4F7F\u7528</font></p>
<p><font color='#fff'>\u8BF7\u5148<a href="#/doc/install">\u5B89\u88C5</a>\u672C\u7EC4\u4EF6\u5E93\u3002</font></p>
<p><font color='#fff'>\u4EE3\u7801\u793A\u4F8B:</font></p>
<pre><code class="language-vue">&lt;template&gt;
  &lt;div&gt;
    &lt;Button&gt;\u6309\u94AE&lt;/Button&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import {Button, Tabs, Tab, Switch, Dialog, openDialog} from &quot;gulu-ui-1&quot;
export default {
  components: {Button}
}
&lt;/script&gt;</code></pre>
`,In=`<p><font color='#fff' size=8>\u5B89\u88C5</font></p>
<p><font color='#fff'>\u6253\u5F00\u7EC8\u7AEF\u8FD0\u884C\u4E0B\u5217\u547D\u4EE4\uFF1A </font></p>
<pre><code>npm install gulu-ui-1</code></pre>
<p><font color='#fff'>\u6216</font></p>
<pre><code>yarn add gulu-ui-1</code></pre>
<p><font color='#fff'>\u4E0B\u4E00\u8282: <a href="#/doc/get-started">\u5F00\u59CB\u4F7F\u7528</a></font></p>
`;const Vn=St(),N=t=>V(Bt,{content:t,key:t}),Z=At({history:Vn,routes:[{path:"/",component:de},{path:"/doc",component:Be,children:[{path:"",redirect:"/doc/switch"},{path:"intro",component:N(Fn)},{path:"get-started",component:N(Ln)},{path:"install",component:N(In)},{path:"switch",component:Ne},{path:"button",component:wo},{path:"dialog",component:cn},{path:"tabs",component:mn},{path:"toast",component:wn}]}]});Z.afterEach(()=>{});const Sn=k({setup(t){const o=document.documentElement.clientWidth,e=z(!(o<=500));return Ht("menuVisible",e),Z.afterEach(()=>{o<=500&&(e.value=!1)}),(n,r)=>{const a=p("router-view");return _(),g(a)}}});(function(t){var o,e,n,r,a,c='<svg><symbol id="icon-i" viewBox="0 0 1024 1024"><path d="M470.48704 864.64512l-88.77056 0 132.9152-528.1792 88.77056 0L470.48704 864.64512zM532.29568 271.02208l21.20704-100.608 88.77056 0-21.20704 100.608L532.29568 271.02208z" fill="#ffffff" ></path></symbol><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M765.7 486.8L314.9 134.7c-5.3-4.1-12.9-0.4-12.9 6.3v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1c16.4-12.8 16.4-37.6 0-50.4z" fill="#ffffff" ></path></symbol><symbol id="icon-left" viewBox="0 0 1024 1024"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8c-16.4 12.8-16.4 37.5 0 50.3l450.8 352.1c5.3 4.1 12.9 0.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" fill="#ffffff" ></path></symbol><symbol id="icon-vue" viewBox="0 0 1024 1024"><path d="M512 504L764.8 68.8h-134.4L512 275.2 393.6 70.4h-134.4L512 504zM819.2 70.4L512 600 204.8 68.8H0l512 886.4L1024 70.4H819.2z" fill="#ffffff" ></path></symbol><symbol id="icon-github" viewBox="0 0 1024 1024"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" fill="#ffffff" ></path></symbol><symbol id="icon-flash" viewBox="0 0 1024 1024"><path d="M286.53211 667.009174l155.009174-380.477064 234.862386 244.256881 178.495413-169.100918-178.495413 394.568808-201.981652-258.348624z" fill="#72DDF5" ></path><path d="M273.483156 661.69189l-0.281835 0.728073c-4.772404 13.546862 11.82767 24.895413 22.758165 15.064074l176.658789-159.001835 192.681101 246.455192c6.529174 8.342312 19.578128 6.778128 23.941872-2.870018l178.495413-394.568807 0.310018-0.728074c5.458202-13.786422-11.808881-25.759706-22.838018-15.313027l-168.344661 159.480954-225.167266-234.17189c-7.064661-7.351193-19.357358-4.993174-23.204404 4.448294l-155.009174 380.477064z m172.924477-349.766459l219.840587 228.629138 0.657615 0.643523a14.091743 14.091743 0 0 0 19.188257-0.178496l126.365358-119.723449-139.301578 307.93277-187.636257-240.001174-0.554276-0.667009a14.091743 14.091743 0 0 0-19.972697-1.12734L322.74789 615.452183l123.659743-303.526752z" fill="#221937" ></path><path d="M286.53211 667.009174H173.798165l145.614679-380.477064h122.12844z" fill="#F55C92" ></path><path d="M441.541284 272.440367H319.412844a14.091743 14.091743 0 0 0-13.161688 9.056294l-145.614679 380.477064C157.104147 671.199119 163.919853 681.100917 173.798165 681.100917h112.733945a14.091743 14.091743 0 0 0 13.048954-8.774458l155.009175-380.477065C458.366826 282.581725 451.551119 272.440367 441.541284 272.440367z m-20.959119 28.183486l-143.529101 352.293578H194.273468l134.829798-352.293578h91.478899z" fill="#221937" ></path><path d="M399.266055 563.669725l155.009174 211.376147 122.128441-18.788991-197.284404-258.348624z" fill="#F55C92" ></path><path d="M470.161615 487.029431l-79.853211 65.761468a14.091743 14.091743 0 0 0-2.404991 19.211743l155.009174 211.376147a14.091743 14.091743 0 0 0 13.504587 5.594422l122.128441-18.788991c10.573505-1.625248 15.54789-13.979009 9.056293-22.481027l-197.284403-258.348624a14.091743 14.091743 0 0 0-20.15589-2.325138z m6.627816 31.048808l174.000147 227.858789-90.205945 13.875669-142.077651-193.737981 58.283449-47.996477z" fill="#221937" ></path><path d="M620.036697 465.027523l145.614679-140.917431 89.247707 37.577981-178.495413 169.100918z" fill="#FFFFFF" ></path><path d="M685.798165 474.422018a9.394495 9.394495 0 1 1 0 18.788991 9.394495 9.394495 0 0 1 0-18.788991z m-23.486238-18.78899a9.394495 9.394495 0 1 1 0 18.78899 9.394495 9.394495 0 0 1 0-18.78899z m46.972477-4.697248a9.394495 9.394495 0 1 1 0 18.788991 9.394495 9.394495 0 0 1 0-18.788991z m18.78899-18.788991a9.394495 9.394495 0 1 1 0 18.788991 9.394495 9.394495 0 0 1 0-18.788991z m-42.275229 0a9.394495 9.394495 0 1 1 0 18.788991 9.394495 9.394495 0 0 1 0-18.788991z m65.761468-18.788991a9.394495 9.394495 0 1 1 0 18.788991 9.394495 9.394495 0 0 1 0-18.788991z m-46.972477 0a9.394495 9.394495 0 1 1 0 18.788991 9.394495 9.394495 0 0 1 0-18.788991z m18.788991-18.788991a9.394495 9.394495 0 1 1 0 18.788991 9.394495 9.394495 0 0 1 0-18.788991z m42.275229-4.697247a9.394495 9.394495 0 1 1 0 18.78899 9.394495 9.394495 0 0 1 0-18.78899z m-23.486238-18.788991a9.394495 9.394495 0 1 1 0 18.788991 9.394495 9.394495 0 0 1 0-18.788991z m46.972477-4.697248a9.394495 9.394495 0 1 1 0 18.788991 9.394495 9.394495 0 0 1 0-18.788991z m-23.486239-14.091743a9.394495 9.394495 0 1 1 0 18.788991 9.394495 9.394495 0 0 1 0-18.788991z" fill="#221937" ></path><path d="M755.852917 313.982826l-145.614678 140.917431a14.091743 14.091743 0 0 0-0.901872 19.296293l56.366972 65.761468a14.091743 14.091743 0 0 0 20.390753 1.061578l178.495413-169.100917c7.384073-6.998899 5.152881-19.272807-4.222826-23.218496l-89.247707-37.577981a14.091743 14.091743 0 0 0-15.266055 2.865321z m12.908037 26.722642l60.777688 25.590605-152.078092 144.073982-38.094678-44.445358 129.395082-125.219229z" fill="#221937" ></path></symbol><symbol id="icon-go" viewBox="0 0 1024 1024"><path d="M892 928.1H134c-19.9 0-36-16.1-36-36v-758c0-19.9 16.1-36 36-36h314.1c19.9 0 36 16.1 36 36s-16.1 36-36 36H170v686h686V579.6c0-19.9 16.1-36 36-36s36 16.1 36 36v312.5c0 19.9-16.1 36-36 36z" fill="#606062" ></path><path d="M927.9 131.6v-0.5c-0.1-1.7-0.4-3.3-0.7-4.9 0-0.1 0-0.2-0.1-0.3-0.4-1.7-0.9-3.3-1.5-4.9v-0.1c-0.6-1.6-1.4-3.1-2.2-4.6 0-0.1-0.1-0.1-0.1-0.2-0.8-1.4-1.7-2.8-2.7-4.1-0.1-0.1-0.2-0.3-0.3-0.4-0.5-0.6-0.9-1.1-1.4-1.7 0-0.1-0.1-0.1-0.1-0.2-0.5-0.6-1-1.1-1.6-1.6l-0.4-0.4c-0.5-0.5-1.1-1-1.6-1.5l-0.1-0.1c-0.6-0.5-1.2-1-1.9-1.4-0.1-0.1-0.3-0.2-0.4-0.3-1.4-1-2.8-1.8-4.3-2.6l-0.1-0.1c-1.6-0.8-3.2-1.5-4.9-2-1.6-0.5-3.3-1-5-1.2-0.1 0-0.2 0-0.3-0.1l-2.4-0.3h-0.3c-0.7-0.1-1.3-0.1-2-0.1H640.1c-19.9 0-36 16.1-36 36s16.1 36 36 36h165L487.6 487.6c-14.1 14.1-14.1 36.9 0 50.9 7 7 16.2 10.5 25.5 10.5 9.2 0 18.4-3.5 25.5-10.5L856 221v162.8c0 19.9 16.1 36 36 36s36-16.1 36-36V134.1c0-0.8 0-1.7-0.1-2.5z" fill="#606062" ></path></symbol><symbol id="icon-menu" viewBox="0 0 1024 1024"><path d="M935.762 547.304h-599.24c-15.372 0-27.811-12.439-27.811-27.811s12.439-27.811 27.811-27.811h599.24c15.372 0 27.811 12.439 27.811 27.811s-12.438 27.811-27.811 27.811zM935.762 868.569h-599.24c-15.372 0-27.811-12.439-27.811-27.811s12.439-27.811 27.811-27.811h599.24c15.372 0 27.811 12.439 27.811 27.811s-12.438 27.811-27.811 27.811zM199.152 307.787h-52.146c-46.008 0-83.433-37.425-83.433-83.433v-52.2c0-46.008 37.425-83.433 83.433-83.433h52.146c46.008 0 83.433 37.425 83.433 83.433v52.2c0 46.008-37.425 83.433-83.433 83.433z m-52.146-163.444c-15.318 0-27.811 12.466-27.811 27.811v52.2c0 15.345 12.493 27.811 27.811 27.811h52.146c15.318 0 27.811-12.466 27.811-27.811v-52.2c0-15.345-12.493-27.811-27.811-27.811h-52.146zM173.079 627.993c-60.402 0-109.506-49.131-109.506-109.533s49.104-109.533 109.506-109.533 109.506 49.131 109.506 109.533-49.104 109.533-109.506 109.533z m0-163.443c-29.712 0-53.884 24.172-53.884 53.911s24.172 53.911 53.884 53.911 53.884-24.172 53.884-53.911-24.172-53.911-53.884-53.911zM418.218 226.065h-54.481c-15.372 0-27.811-12.439-27.811-27.811s12.439-27.811 27.811-27.811h54.481c15.372 0 27.811 12.439 27.811 27.811s-12.439 27.811-27.811 27.811zM935.762 226.065h-315.48c-15.372 0-27.811-12.439-27.811-27.811s12.439-27.811 27.811-27.811h315.481c15.372 0 27.811 12.439 27.811 27.811s-12.439 27.811-27.812 27.811z" fill="#ffffff" ></path><path d="M527.194 198.245m-27.239 0a27.239 27.239 0 1 0 54.478 0 27.239 27.239 0 1 0-54.478 0Z" fill="#e6e6e6" ></path><path d="M150.048 923.05a27.72 27.72 0 0 1-19.663-8.148l-58.664-58.664c-10.864-10.864-10.864-28.463 0-39.326 10.864-10.864 28.463-10.864 39.326 0l39.001 39 89.299-89.299c10.864-10.864 28.463-10.864 39.326 0 10.864 10.864 10.864 28.463 0 39.326L169.711 914.903a27.717 27.717 0 0 1-19.663 8.147z" fill="#e6e6e6" ></path></symbol><symbol id="icon-light" viewBox="0 0 1024 1024"><path d="M835.84 387.84c0-156.16-125.44-281.6-281.6-281.6s-281.6 125.44-281.6 281.6c0 108.8 62.72 204.8 153.6 250.88v209.92c0 14.08 11.52 25.6 25.6 25.6h204.8c14.08 0 25.6-11.52 25.6-25.6V638.72c92.16-46.08 153.6-140.8 153.6-250.88z" fill="#000000" ></path><path d="M656.64 887.04h-204.8c-21.76 0-38.4-16.64-38.4-38.4V646.4c-94.72-51.2-153.6-149.76-153.6-258.56 0-162.56 131.84-294.4 294.4-294.4s294.4 131.84 294.4 294.4c0 108.8-58.88 207.36-153.6 258.56v202.24c0 21.76-16.64 38.4-38.4 38.4z m-102.4-768c-148.48 0-268.8 120.32-268.8 268.8 0 101.12 56.32 193.28 147.2 239.36 3.84 2.56 6.4 6.4 6.4 11.52v209.92c0 7.68 5.12 12.8 12.8 12.8h204.8c7.68 0 12.8-5.12 12.8-12.8V638.72c0-5.12 2.56-8.96 6.4-11.52 90.88-46.08 147.2-138.24 147.2-239.36 0-148.48-120.32-268.8-268.8-268.8z" fill="#ffffff" ></path><path d="M682.24 848.64c0 14.08-11.52 25.6-25.6 25.6h-204.8c-14.08 0-25.6-11.52-25.6-25.6v-102.4c0-14.08 11.52-25.6 25.6-25.6h204.8c14.08 0 25.6 11.52 25.6 25.6v102.4z" fill="#000000" ></path><path d="M656.64 887.04h-204.8c-21.76 0-38.4-16.64-38.4-38.4v-102.4c0-21.76 16.64-38.4 38.4-38.4h204.8c21.76 0 38.4 16.64 38.4 38.4v102.4c0 21.76-16.64 38.4-38.4 38.4z m-204.8-153.6c-7.68 0-12.8 5.12-12.8 12.8v102.4c0 7.68 5.12 12.8 12.8 12.8h204.8c7.68 0 12.8-5.12 12.8-12.8v-102.4c0-7.68-5.12-12.8-12.8-12.8h-204.8z" fill="#ffffff" ></path><path d="M423.36 772.2752l205.2352-64.1664 7.6288 24.4352-205.2224 64.1664zM423.04 849.1264l256.256-76.8 7.3472 24.512-256.256 76.8z" fill="#ffffff" ></path><path d="M477.44 874.24h25.6v25.6h-25.6z" fill="#ffffff" ></path><path d="M592.64 874.24h25.6v25.6h-25.6z" fill="#ffffff" ></path><path d="M554.24 771.84c-35.84 0-64-28.16-64-64v-204.8c0-3.84 0-15.36 10.24-19.2 11.52-3.84 17.92 5.12 25.6 16.64 6.4 8.96 19.2 28.16 28.16 28.16s21.76-19.2 28.16-28.16c7.68-11.52 14.08-20.48 25.6-16.64 10.24 3.84 10.24 15.36 10.24 19.2v204.8c0 35.84-28.16 64-64 64z m-38.4-241.92v177.92c0 21.76 16.64 38.4 38.4 38.4s38.4-16.64 38.4-38.4V529.92c-10.24 12.8-23.04 24.32-38.4 24.32s-28.16-11.52-38.4-24.32z" fill="#ffffff" ></path></symbol><symbol id="icon-ts" viewBox="0 0 1024 1024"><path d="M929.792 929.792H94.208V94.208h835.584zM135.168 135.168v753.664h753.664V135.168z" fill="#ffffff" ></path><path d="M716.3904 487.1168c-4.806656-0.014336-9.222144 0.106496-12.521472 0.41984-25.790464 2.24256-49.881088 13.50656-66.369536 31.033344-8.259584 8.781824-15.742976 21.372928-19.398656 32.643072-4.028416 12.42112-3.999744 12.183552-3.979264 31.6416 0.02048 24.860672 1.284096 31.019008 9.742336 47.552512 8.505344 16.625664 21.46304 30.205952 40.157184 42.0864 8.192 5.206016 29.17376 15.6672 46.307328 23.0912 37.296128 16.156672 49.094656 23.609344 54.56896 34.47808l2.260992 4.48512v9.40032c0 9.066496-0.036864 9.53344-1.880064 13.27104-4.206592 8.650752-14.137344 15.734784-26.853376 19.156992-4.808704 1.29024-7.012352 1.47456-17.758208 1.478656-10.518528 0-13.072384-0.217088-17.893376-1.417216-8.41728-2.12992-15.509504-5.074944-21.05344-8.747008-6.78912-4.49536-20.135936-17.9712-25.565184-25.810944-2.39616-3.46112-4.80256-6.2976-5.343232-6.2976-0.892928 0-46.913536 26.310656-54.945792 31.412224-2.707456 1.72032-3.393536 2.504704-3.393536 3.883008 0 2.859008 10.752 19.111936 19.175424 28.983296 17.160192 20.115456 51.572736 37.849088 82.055168 42.2912 12.050432 1.753088 32.065536 2.320384 46.04928 1.29024 9.162752-0.671744 18.423808-2.410496 28.37504-5.328896 36.00384-10.561536 60.5696-32.997376 69.67296-63.639552 3.713024-12.498944 5.214208-27.87328 3.987456-40.843264-2.514944-26.611712-10.694656-45.42464-26.841088-61.720576-14.993408-15.130624-35.577856-27.322368-76.204032-45.13792-35.223552-15.44192-44.417024-21.44256-49.494016-32.290816-4.38272-9.365504-3.547136-22.255616 1.96608-30.265344 6.4512-9.375744 19.61984-14.00832 34.306048-12.06272 13.656064 1.80224 22.48704 7.215104 31.13984 19.073024 4.493312 6.156288 7.612416 9.363456 9.107456 9.363456 1.47456 0 7.827456-3.919872 27.547648-17.012736 20.074496-13.324288 26.386432-17.846272 26.81856-19.21024 0.671744-2.111488-2.473984-7.05536-11.677696-18.345984-18.479104-22.665216-40.20224-34.697216-68.096-37.715968-6.848512-0.743424-15.95392-1.155072-23.965696-1.179648z m-221.9008 3.846144c-16.55808-0.01024-35.473408 0-56.489984 0.02048-108.992512 0.106496-134.289408 0.28672-134.971392 0.989184-0.663552 0.663552-0.835584 7.346176-0.835584 32.288768v31.451136l49.5616 0.180224 49.565696 0.178176 0.01024 140.294144c0.004096 77.162496 0.178176 140.947456 0.41984 141.746176l0.372736 1.458176h36.020224c32.249856 0 36.059136-0.07168 36.411392-1.019904 0.21504-0.5632 0.372736-64.34816 0.372736-141.746176v-140.726272l49.563648-0.178176 49.563648-0.180224v-31.830016c0-27.58656-0.106496-31.90784-0.968704-32.444416-0.454656-0.28672-28.932096-0.458752-78.608384-0.483328z" fill="#ffffff" ></path></symbol></svg>',d=(d=document.getElementsByTagName("script"))[d.length-1].getAttribute("data-injectcss"),m=function(h,b){b.parentNode.insertBefore(h,b)};if(d&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(h){console&&console.log(h)}}function $(){a||(a=!0,n())}function M(){try{r.documentElement.doScroll("left")}catch{return void setTimeout(M,50)}$()}o=function(){var h,b;(b=document.createElement("div")).innerHTML=c,c=null,(h=b.getElementsByTagName("svg")[0])&&(h.setAttribute("aria-hidden","true"),h.style.position="absolute",h.style.width=0,h.style.height=0,h.style.overflow="hidden",b=h,(h=document.body).firstChild?m(b,h.firstChild):h.appendChild(b))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(o,0):(e=function(){document.removeEventListener("DOMContentLoaded",e,!1),o()},document.addEventListener("DOMContentLoaded",e,!1)):document.attachEvent&&(n=o,r=t.document,a=!1,M(),r.onreadystatechange=function(){r.readyState=="complete"&&(r.onreadystatechange=null,$())})})(window);const A=O(Sn);A.use(Z);A.use(Yo);A.mount("#app");A.component("Markdown",Bt);
