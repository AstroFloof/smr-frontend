import{S as y,i as A,s as F,aD as H,u as B,W as I,G as l,a as G,e as D,B as E,ai as L,H as d,g as m,h as N,c as S,f as q,C as M,A as P,I as g,k as _,a3 as T,X as W,n as h,t as b,L as k,Z as X,aE as Z,r as x,D as z}from"../../chunks/vendor-1e069c58.js";import{N as J}from"../../chunks/graphql-4793b2e5.js";import{T as K}from"../../chunks/Toast-a9d3b864.js";import{g as O}from"../../chunks/navigation-ca50617e.js";import{G as Q}from"../../chunks/GuideForm-824debe4.js";import{b as R}from"../../chunks/paths-396f020f.js";import{M as U}from"../../chunks/MetaDescriptors-bbb3ab7e.js";import"../../chunks/singletons-4fc5a6de.js";import"../../chunks/forms-03cc218f.js";import"../../chunks/forms-9437931d.js";import"../../chunks/markdown-17d20b45.js";import"../../chunks/extras-2ac9de80.js";import"../../chunks/stores-fad2d8b8.js";function V(a){let t,n;return t=new Q({props:{onSubmit:a[2]}}),{c(){l(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){g(t,e,r),n=!0},p:x,i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Y(a){let t,n;return t=new Z({props:{$$slots:{default:[V]},$$scope:{ctx:a}}}),{c(){l(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){g(t,e,r),n=!0},p(e,r){const f={};r&32&&(f.$$scope={dirty:r,ctx:e}),t.$set(f)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function ee(a){let t,n;return{c(){t=D("span"),n=E(a[1])},l(e){t=S(e,"SPAN",{});var r=q(t);n=M(r,a[1]),r.forEach(m)},m(e,r){_(e,t,r),T(t,n)},p(e,r){r&2&&z(n,e[1])},d(e){e&&m(t)}}}function te(a){let t,n,e,r,f,u,p,i,c,j;t=new U({props:{description:"Creating a new guide",title:"New guide"}}),u=new H({props:{$$slots:{default:[Y]},$$scope:{ctx:a}}});function v(s){a[3](s)}let C={$$slots:{default:[ee]},$$scope:{ctx:a}};return a[0]!==void 0&&(C.running=a[0]),i=new K({props:C}),B.push(()=>I(i,"running",v)),{c(){l(t.$$.fragment),n=G(),e=D("h1"),r=E("New Guide"),f=G(),l(u.$$.fragment),p=G(),l(i.$$.fragment),this.h()},l(s){const o=L('[data-svelte="svelte-u6ds2"]',document.head);d(t.$$.fragment,o),o.forEach(m),n=N(s),e=S(s,"H1",{class:!0});var $=q(e);r=M($,"New Guide"),$.forEach(m),f=N(s),d(u.$$.fragment,s),p=N(s),d(i.$$.fragment,s),this.h()},h(){P(e,"class","text-4xl my-4 font-bold")},m(s,o){g(t,document.head,null),_(s,n,o),_(s,e,o),T(e,r),_(s,f,o),g(u,s,o),_(s,p,o),g(i,s,o),j=!0},p(s,[o]){const $={};o&32&&($.$$scope={dirty:o,ctx:s}),u.$set($);const w={};o&34&&(w.$$scope={dirty:o,ctx:s}),!c&&o&1&&(c=!0,w.running=s[0],W(()=>c=!1)),i.$set(w)},i(s){j||(h(t.$$.fragment,s),h(u.$$.fragment,s),h(i.$$.fragment,s),j=!0)},o(s){b(t.$$.fragment,s),b(u.$$.fragment,s),b(i.$$.fragment,s),j=!1},d(s){k(t),s&&m(n),s&&m(e),s&&m(f),k(u,s),s&&m(p),k(i,s)}}}function se(a,t,n){let e="",r=!1;const f=X({query:J}),u=i=>{f({guide:i}).then(c=>{c.error?(console.error(c.error.message),n(1,e="Error creating guide: "+c.error.message),n(0,r=!0)):O(R+"/guide/"+c.data.createGuide.id)})};function p(i){r=i,n(0,r)}return a.$$.update=()=>{a.$$.dirty&1&&(r||n(1,e=""))},[r,e,u,p]}class ge extends y{constructor(t){super();A(this,t,se,te,F,{})}}export{ge as default};
//# sourceMappingURL=index.svelte-b27acfc5.js.map
