import{S as C,i as N,s as O,at as F,K as G,L as H,j as b,k as T,e as v,t as k,a1 as K,m as V,d as m,n as q,c as w,a as y,g as S,b as Q,o as M,f as d,V as j,M as U,x as $,u as g,v as L,P as X,N as z,O as B,Q as J,au as R,l as P,r as W,w as Y,h as A,X as E}from"../../../../chunks/vendor-897e4d1c.js";import{p as Z}from"../../../../chunks/routing-1d144003.js";import{o as x,p as ee}from"../../../../chunks/graphql-5f517cf7.js";import{T as te}from"../../../../chunks/Toast-b49597c0.js";import{g as se}from"../../../../chunks/navigation-51f4a605.js";import{S as ne}from"../../../../chunks/SMLVersionForm-73d3da61.js";import{b as re}from"../../../../chunks/paths-6758d194.js";import{M as oe}from"../../../../chunks/MetaDescriptors-77020fbf.js";import"../../../../chunks/singletons-12a22614.js";import"../../../../chunks/forms-8d025218.js";import"../../../../chunks/markdown-3b995671.js";import"../../../../chunks/stores-786d084c.js";function ae(i){let e,s;return e=new ne({props:{onSubmit:i[5],initialValues:i[3],submitText:"Save"}}),{c(){b(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,n){M(e,t,n),s=!0},p(t,n){const l={};n&8&&(l.initialValues=t[3]),e.$set(l)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function ie(i){let e,s,t=i[1].error.message+"",n;return{c(){e=v("p"),s=k("Oh no... "),n=k(t)},l(l){e=w(l,"P",{});var a=y(e);s=S(a,"Oh no... "),n=S(a,t),a.forEach(m)},m(l,a){d(l,e,a),j(e,s),j(e,n)},p(l,a){a&2&&t!==(t=l[1].error.message+"")&&A(n,t)},i:E,o:E,d(l){l&&m(e)}}}function le(i){let e,s;return{c(){e=v("p"),s=k("Loading...")},l(t){e=w(t,"P",{});var n=y(e);s=S(n,"Loading..."),n.forEach(m)},m(t,n){d(t,e,n),j(e,s)},p:E,i:E,o:E,d(t){t&&m(e)}}}function ce(i){let e,s,t,n;const l=[le,ie,ae],a=[];function f(o,u){return o[1].fetching?0:o[1].error?1:2}return e=f(i),s=a[e]=l[e](i),{c(){s.c(),t=P()},l(o){s.l(o),t=P()},m(o,u){a[e].m(o,u),d(o,t,u),n=!0},p(o,u){let _=e;e=f(o),e===_?a[e].p(o,u):(W(),g(a[_],1,1,()=>{a[_]=null}),Y(),s=a[e],s?s.p(o,u):(s=a[e]=l[e](o),s.c()),$(s,1),s.m(t.parentNode,t))},i(o){n||($(s),n=!0)},o(o){g(s),n=!1},d(o){a[e].d(o),o&&m(t)}}}function fe(i){let e,s;return e=new R({props:{$$slots:{default:[ce]},$$scope:{ctx:i}}}),{c(){b(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,n){M(e,t,n),s=!0},p(t,n){const l={};n&522&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function me(i){let e,s;return{c(){e=v("span"),s=k(i[2])},l(t){e=w(t,"SPAN",{});var n=y(e);s=S(n,i[2]),n.forEach(m)},m(t,n){d(t,e,n),j(e,s)},p(t,n){n&4&&A(s,t[2])},d(t){t&&m(e)}}}function ue(i){let e,s,t,n,l,a,f,o,u,_;e=new oe({props:{description:"Edit SML Version",title:"Admin: Edit SML Version"}}),a=new F({props:{$$slots:{default:[fe]},$$scope:{ctx:i}}});function D(r){i[7](r)}let p={$$slots:{default:[me]},$$scope:{ctx:i}};return i[0]!==void 0&&(p.running=i[0]),o=new te({props:p}),G.push(()=>H(o,"running",D)),{c(){b(e.$$.fragment),s=T(),t=v("h1"),n=k("Edit SMLVersion"),l=T(),b(a.$$.fragment),f=T(),b(o.$$.fragment),this.h()},l(r){const c=K('[data-svelte="svelte-7e9nlv"]',document.head);V(e.$$.fragment,c),c.forEach(m),s=q(r),t=w(r,"H1",{class:!0});var h=y(t);n=S(h,"Edit SMLVersion"),h.forEach(m),l=q(r),V(a.$$.fragment,r),f=q(r),V(o.$$.fragment,r),this.h()},h(){Q(t,"class","text-4xl my-4 font-bold")},m(r,c){M(e,document.head,null),d(r,s,c),d(r,t,c),j(t,n),d(r,l,c),M(a,r,c),d(r,f,c),M(o,r,c),_=!0},p(r,[c]){const h={};c&522&&(h.$$scope={dirty:c,ctx:r}),a.$set(h);const I={};c&516&&(I.$$scope={dirty:c,ctx:r}),!u&&c&1&&(u=!0,I.running=r[0],U(()=>u=!1)),o.$set(I)},i(r){_||($(e.$$.fragment,r),$(a.$$.fragment,r),$(o.$$.fragment,r),_=!0)},o(r){g(e.$$.fragment,r),g(a.$$.fragment,r),g(o.$$.fragment,r),_=!1},d(r){L(e),r&&m(s),r&&m(t),r&&m(l),L(a,r),r&&m(f),L(o,r)}}}const Ee=Z();function pe(i,e,s){let t,n,{smlVersionId:l}=e,a="",f=!1;const o=X(x,{smlVersionID:l});z(i,o,p=>s(1,n=p));const u=B({query:ee}),_=p=>{u({smlVersionID:l,smlVersion:p}).then(r=>{r.error?(console.error(r.error.message),s(2,a="Error editing sMLVersion: "+r.error.message),s(0,f=!0)):se(re+"/admin/sml-versions")})};J(o);function D(p){f=p,s(0,f)}return i.$$set=p=>{"smlVersionId"in p&&s(6,l=p.smlVersionId)},i.$$.update=()=>{i.$$.dirty&1&&(f||s(2,a="")),i.$$.dirty&2&&s(3,t=n.data?{...n.data.getSMLVersion,logo:void 0}:void 0)},[f,n,a,t,o,_,l,D]}class ve extends C{constructor(e){super();N(this,e,pe,ue,O,{smlVersionId:6})}}export{ve as default,Ee as load};
//# sourceMappingURL=edit.svelte-45574a95.js.map
