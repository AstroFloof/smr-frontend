import{S as y,i as x,s as ee,aD as te,G as H,H as L,I as q,n as w,t as C,L as G,aE as se,aF as le,v as T,e as E,a as A,c as I,f as D,g as d,h as S,A as h,aG as F,k,a3 as V,aH as ae,x as z,y as M,z as J,b as B,B as O,C as P,D as K,l as oe,m as ne,an as Q,r as fe,aq as ie,as as re}from"./vendor-1e069c58.js";import{a as R}from"./paths-396f020f.js";import{p as ce,g as ue}from"./navigation-ca50617e.js";const _e=a=>({}),U=a=>({}),me=a=>({}),W=a=>({}),de=a=>({}),X=a=>({});function ge(a){let e,s,t;return{c(){e=E("img"),this.h()},l(l){e=I(l,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Q(e.src,s=a[4])||h(e,"src",s),h(e,"alt",t=""+(a[3]+" Logo")),h(e,"class","logo max-w-full max-h-full svelte-16fsik6")},m(l,o){k(l,e,o)},p(l,o){o&16&&!Q(e.src,s=l[4])&&h(e,"src",s),o&8&&t!==(t=""+(l[3]+" Logo"))&&h(e,"alt",t)},d(l){l&&d(e)}}}function pe(a){let e;return{c(){e=E("div"),this.h()},l(s){e=I(s,"DIV",{class:!0}),D(e).forEach(d),this.h()},h(){h(e,"class","bg-gray-500 logo min-w-full min-h-full max-w-full max-h-full svelte-16fsik6")},m(s,t){k(s,e,t)},p:fe,d(s){s&&d(e)}}}function Y(a){let e,s;return{c(){e=E("span"),s=O("Card stats"),this.h()},l(t){e=I(t,"SPAN",{class:!0});var l=D(e);s=P(l,"Card stats"),l.forEach(d),this.h()},h(){h(e,"class","font-flow")},m(t,l){k(t,e,l),V(e,s)},d(t){t&&d(e)}}}function he(a){let e,s=a[1]&&Y();return{c(){s&&s.c(),e=B()},l(t){s&&s.l(t),e=B()},m(t,l){s&&s.m(t,l),k(t,e,l)},p(t,l){t[1]?s||(s=Y(),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d(t){s&&s.d(t),t&&d(e)}}}function $e(a){let e,s,t,l,o,f,c,u,$,g;const b=a[10].stats,v=T(b,a,a[12],X),m=v||he(a);return{c(){e=E("div"),s=E("a"),t=E("span"),l=O(a[3]),o=A(),f=E("h5"),m&&m.c(),c=A(),u=E("div"),$=O(a[2]),this.h()},l(n){e=I(n,"DIV",{class:!0});var _=D(e);s=I(_,"A",{href:!0,class:!0});var p=D(s);t=I(p,"SPAN",{class:!0});var i=D(t);l=P(i,a[3]),i.forEach(d),p.forEach(d),o=S(_),f=I(_,"H5",{class:!0});var r=D(f);m&&m.l(r),r.forEach(d),_.forEach(d),c=S(n),u=I(n,"DIV",{class:!0});var N=D(u);$=P(N,a[2]),N.forEach(d),this.h()},h(){h(t,"class","text-xl break-words"),h(s,"href",a[0]),h(s,"class","text-white"),h(f,"class","text-sm m-0"),h(e,"class","mb-2"),h(u,"class","break-words"),F(u,"font-flow",a[1])},m(n,_){k(n,e,_),V(e,s),V(s,t),V(t,l),V(e,o),V(e,f),m&&m.m(f,null),k(n,c,_),k(n,u,_),V(u,$),g=!0},p(n,_){(!g||_&8)&&K(l,n[3]),(!g||_&1)&&h(s,"href",n[0]),v?v.p&&(!g||_&4096)&&z(v,b,n,n[12],g?J(b,n[12],_,de):M(n[12]),X):m&&m.p&&(!g||_&2)&&m.p(n,g?_:-1),(!g||_&4)&&K($,n[2]),_&2&&F(u,"font-flow",n[1])},i(n){g||(w(m,n),g=!0)},o(n){C(m,n),g=!1},d(n){n&&d(e),m&&m.d(n),n&&d(c),n&&d(u)}}}function Z(a){let e,s,t;e=new ie({props:{href:a[0],"aria-label":"View "+a[3],title:"View "+a[3],$$slots:{default:[ke]},$$scope:{ctx:a}}});const l=a[10].actions,o=T(l,a,a[12],W);return{c(){H(e.$$.fragment),s=A(),o&&o.c()},l(f){L(e.$$.fragment,f),s=S(f),o&&o.l(f)},m(f,c){q(e,f,c),k(f,s,c),o&&o.m(f,c),t=!0},p(f,c){const u={};c&1&&(u.href=f[0]),c&8&&(u["aria-label"]="View "+f[3]),c&8&&(u.title="View "+f[3]),c&4096&&(u.$$scope={dirty:c,ctx:f}),e.$set(u),o&&o.p&&(!t||c&4096)&&z(o,l,f,f[12],t?J(l,f[12],c,me):M(f[12]),W)},i(f){t||(w(e.$$.fragment,f),w(o,f),t=!0)},o(f){C(e.$$.fragment,f),C(o,f),t=!1},d(f){G(e,f),f&&d(s),o&&o.d(f)}}}function ve(a){let e;return{c(){e=O("info")},l(s){e=P(s,"info")},m(s,t){k(s,e,t)},d(s){s&&d(e)}}}function ke(a){let e,s;return e=new re({props:{class:"material-icons",$$slots:{default:[ve]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){q(e,t,l),s=!0},p(t,l){const o={};l&4096&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){G(e,t)}}}function be(a){let e,s,t=!a[1]&&Z(a);return{c(){t&&t.c(),e=B()},l(l){t&&t.l(l),e=B()},m(l,o){t&&t.m(l,o),k(l,e,o),s=!0},p(l,o){l[1]?t&&(oe(),C(t,1,1,()=>{t=null}),ne()):t?(t.p(l,o),o&2&&w(t,1)):(t=Z(l),t.c(),w(t,1),t.m(e.parentNode,e))},i(l){s||(w(t),s=!0)},o(l){C(t),s=!1},d(l){t&&t.d(l),l&&d(e)}}}function we(a){let e,s,t,l,o,f,c,u,$,g,b;function v(i,r){return i[1]?pe:ge}let m=v(a),n=m(a);o=new se({props:{class:"flex flex-col pb-0",$$slots:{default:[$e]},$$scope:{ctx:a}}}),c=new le({props:{class:"self-end",$$slots:{default:[be]},$$scope:{ctx:a}}});const _=a[10].outer,p=T(_,a,a[12],U);return{c(){e=E("div"),s=E("div"),n.c(),t=A(),l=E("div"),H(o.$$.fragment),f=A(),H(c.$$.fragment),u=A(),p&&p.c(),this.h()},l(i){e=I(i,"DIV",{class:!0});var r=D(e);s=I(r,"DIV",{class:!0});var N=D(s);n.l(N),N.forEach(d),t=S(r),l=I(r,"DIV",{class:!0});var j=D(l);L(o.$$.fragment,j),f=S(j),L(c.$$.fragment,j),j.forEach(d),r.forEach(d),u=S(i),p&&p.l(i),this.h()},h(){h(s,"class","cursor-pointer card-image-container"),h(l,"class","w-full flex flex-col justify-between"),h(e,"class","grid grid-max-auto sm:grid-cols-2 grid-cols-1 justify-items-center svelte-16fsik6"),F(e,"text-gray-500",a[1]),F(e,"font-flow",a[1])},m(i,r){k(i,e,r),V(e,s),n.m(s,null),V(e,t),V(e,l),q(o,l,null),V(l,f),q(c,l,null),k(i,u,r),p&&p.m(i,r),$=!0,g||(b=ae(s,"click",a[11]),g=!0)},p(i,r){m===(m=v(i))&&n?n.p(i,r):(n.d(1),n=m(i),n&&(n.c(),n.m(s,null)));const N={};r&4111&&(N.$$scope={dirty:r,ctx:i}),o.$set(N);const j={};r&4107&&(j.$$scope={dirty:r,ctx:i}),c.$set(j),r&2&&F(e,"text-gray-500",i[1]),r&2&&F(e,"font-flow",i[1]),p&&p.p&&(!$||r&4096)&&z(p,_,i,i[12],$?J(_,i[12],r,_e):M(i[12]),U)},i(i){$||(w(o.$$.fragment,i),w(c.$$.fragment,i),w(p,i),$=!0)},o(i){C(o.$$.fragment,i),C(c.$$.fragment,i),C(p,i),$=!1},d(i){i&&d(e),n.d(),G(o),G(c),i&&d(u),p&&p.d(i),g=!1,b()}}}function Ee(a){let e,s;return e=new te({props:{class:"h-full overflow-hidden",$$slots:{default:[we]},$$scope:{ctx:a}}}),e.$on("mouseover",a[5]),e.$on("mouseout",a[6]),{c(){H(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){q(e,t,l),s=!0},p(t,[l]){const o={};l&4127&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){G(e,t)}}}function Ie(a,e,s){let t,l,o,{$$slots:f={},$$scope:c}=e,{name:u=""}=e,{logo:$=R+"/images/no_image.png"}=e,{description:g=""}=e,{link:b="/"}=e,{fake:v=!1}=e,m=!1,n;const _=()=>{m||(n=setTimeout(()=>{m=!0,ce(b)},250))},p=()=>{m||clearTimeout(n)},i=()=>ue(b);return a.$$set=r=>{"name"in r&&s(7,u=r.name),"logo"in r&&s(8,$=r.logo),"description"in r&&s(9,g=r.description),"link"in r&&s(0,b=r.link),"fake"in r&&s(1,v=r.fake),"$$scope"in r&&s(12,c=r.$$scope)},a.$$.update=()=>{a.$$.dirty&256&&s(4,t=$||R+"/images/no_image.png"),a.$$.dirty&130&&s(3,l=u||v&&"Card Name"),a.$$.dirty&514&&s(2,o=g||v&&"Short card description")},[b,v,o,l,t,_,p,u,$,g,f,i,c]}class Ne extends y{constructor(e){super();x(this,e,Ie,Ee,ee,{name:7,logo:8,description:9,link:0,fake:1})}}export{Ne as F};
//# sourceMappingURL=FicsitCard-ac829fb6.js.map
