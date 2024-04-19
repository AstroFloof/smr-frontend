import{S as ye,i as be,s as Ce,A as Q,a as x,e as $,b as le,C as Ie,D as W,f as v,g as y,c as E,d as V,G as D,H as Y,j as b,m as A,t as L,l as ie,J as X,K as Ae,L as Be,P as $e,u as Ee,M as Te,I as p,N as we,k as oe,q as De,r as Ne,Q as fe,F as S,R as Ue,T as O,U as _,V as F,O as ce,W as ue,a1 as Le}from"../chunks/vendor.6XGvI_6f.js";import{e as Oe,f as _e,g as Pe}from"../chunks/graphql.XSrPrpK2.js";import{A as he}from"../chunks/api.yOy6Pjbt.js";import"../chunks/user.4zgJI8vt.js";import{M as je}from"../chunks/MetaDescriptors.1jIQqh3N.js";import{p as de}from"../chunks/formatting.G9yDJMit.js";function me(a,e,r){const s=a.slice();return s[17]=e[r],s}function pe(a){let e,r,s,o,c;function f(t){a[8](t)}let n={showFirstLastButtons:!0,showPreviousNextButtons:!0,controlVariant:"variant-filled-surface"};return a[4]!==void 0&&(n.settings=a[4]),s=new $e({props:n}),Ee.push(()=>Te(s,"settings",f)),s.$on("page",a[9]),s.$on("amount",a[10]),{c(){e=$("div"),r=$("div"),Q(s.$$.fragment),this.h()},l(t){e=E(t,"DIV",{class:!0});var h=V(e);r=E(h,"DIV",{});var l=V(r);W(s.$$.fragment,l),l.forEach(v),h.forEach(v),this.h()},h(){D(e,"class","mb-5 ml-auto flex justify-end")},m(t,h){b(t,e,h),p(e,r),Y(s,r,null),c=!0},p(t,h){const l={};!o&&h&16&&(o=!0,l.settings=t[4],we(()=>o=!1)),s.$set(l)},i(t){c||(A(s.$$.fragment,t),c=!0)},o(t){L(s.$$.fragment,t),c=!1},d(t){t&&v(e),X(s)}}}function ke(a){let e,r,s="<tr><th>Mod</th> <th>Version</th> <th>Release Date</th> <th></th></tr>",o,c,f=fe(a[3].data.getUnapprovedVersions.versions),n=[];for(let t=0;t<f.length;t+=1)n[t]=ve(me(a,f,t));return{c(){e=$("table"),r=$("thead"),r.innerHTML=s,o=x(),c=$("tbody");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=E(t,"TABLE",{class:!0});var h=V(e);r=E(h,"THEAD",{"data-svelte-h":!0}),S(r)!=="svelte-zi4vc6"&&(r.innerHTML=s),o=y(h),c=E(h,"TBODY",{});var l=V(c);for(let u=0;u<n.length;u+=1)n[u].l(l);l.forEach(v),h.forEach(v),this.h()},h(){D(e,"class","table table-hover max-w-full")},m(t,h){b(t,e,h),p(e,r),p(e,o),p(e,c);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(c,null)},p(t,h){if(h&200){f=fe(t[3].data.getUnapprovedVersions.versions);let l;for(l=0;l<f.length;l+=1){const u=me(t,f,l);n[l]?n[l].p(u,h):(n[l]=ve(u),n[l].c(),n[l].m(c,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=f.length}},d(t){t&&v(e),Ue(n,t)}}}function qe(a){let e,r,s=a[3].error.message+"",o;return{c(){e=$("section"),r=O("Oh no... "),o=O(s),this.h()},l(c){e=E(c,"SECTION",{class:!0});var f=V(e);r=_(f,"Oh no... "),o=_(f,s),f.forEach(v),this.h()},h(){D(e,"class","p-4")},m(c,f){b(c,e,f),p(e,r),p(e,o)},p(c,f){f&8&&s!==(s=c[3].error.message+"")&&F(o,s)},d(c){c&&v(e)}}}function He(a){let e,r="Loading...";return{c(){e=$("section"),e.textContent=r,this.h()},l(s){e=E(s,"SECTION",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-1e06hs8"&&(e.textContent=r),this.h()},h(){D(e,"class","p-4")},m(s,o){b(s,e,o)},p:De,d(s){s&&v(e)}}}function ve(a){let e,r,s=a[17].mod.name+"",o,c,f,n=a[17].version+"",t,h,l,u=de(a[17].created_at)+"",m,i,g,T,C,k="Approve",P,I,q="Deny",j,d,z,H,R,B,G,M,J,K,Z;function Ve(){return a[11](a[17])}function xe(){return a[12](a[17])}return{c(){e=$("tr"),r=$("td"),o=O(s),c=x(),f=$("td"),t=O(n),h=x(),l=$("td"),m=O(u),i=x(),g=$("td"),T=$("div"),C=$("button"),C.textContent=k,P=x(),I=$("button"),I.textContent=q,j=x(),d=$("a"),z=O("Download"),R=x(),B=$("a"),G=O("View"),J=x(),this.h()},l(U){e=E(U,"TR",{});var w=V(e);r=E(w,"TD",{});var ee=V(r);o=_(ee,s),ee.forEach(v),c=y(w),f=E(w,"TD",{});var te=V(f);t=_(te,n),te.forEach(v),h=y(w),l=E(w,"TD",{});var re=V(l);m=_(re,u),re.forEach(v),i=y(w),g=E(w,"TD",{class:!0});var se=V(g);T=E(se,"DIV",{class:!0});var N=V(T);C=E(N,"BUTTON",{class:!0,"data-svelte-h":!0}),S(C)!=="svelte-qyrrqz"&&(C.textContent=k),P=y(N),I=E(N,"BUTTON",{class:!0,"data-svelte-h":!0}),S(I)!=="svelte-50citx"&&(I.textContent=q),j=y(N),d=E(N,"A",{class:!0,href:!0});var ae=V(d);z=_(ae,"Download"),ae.forEach(v),R=y(N),B=E(N,"A",{class:!0,href:!0});var ne=V(B);G=_(ne,"View"),ne.forEach(v),N.forEach(v),se.forEach(v),J=y(w),w.forEach(v),this.h()},h(){D(C,"class","variant-ghost-primary btn"),D(I,"class","variant-ghost-primary btn"),D(d,"class","variant-ghost-primary btn"),D(d,"href",H=he+"/mod/"+a[17].mod_id+"/versions/"+a[17].id+"/download"),D(B,"class","variant-ghost-primary btn"),D(B,"href",M=ce+"/mod/"+a[17].mod_id+"/version/"+a[17].id),D(T,"class","grid grid-flow-col gap-4"),D(g,"class","!p-2.5")},m(U,w){b(U,e,w),p(e,r),p(r,o),p(e,c),p(e,f),p(f,t),p(e,h),p(e,l),p(l,m),p(e,i),p(e,g),p(g,T),p(T,C),p(T,P),p(T,I),p(T,j),p(T,d),p(d,z),p(T,R),p(T,B),p(B,G),p(e,J),K||(Z=[ue(C,"click",Ve),ue(I,"click",xe)],K=!0)},p(U,w){a=U,w&8&&s!==(s=a[17].mod.name+"")&&F(o,s),w&8&&n!==(n=a[17].version+"")&&F(t,n),w&8&&u!==(u=de(a[17].created_at)+"")&&F(m,u),w&8&&H!==(H=he+"/mod/"+a[17].mod_id+"/versions/"+a[17].id+"/download")&&D(d,"href",H),w&8&&M!==(M=ce+"/mod/"+a[17].mod_id+"/version/"+a[17].id)&&D(B,"href",M)},d(U){U&&v(e),K=!1,Le(Z)}}}function ge(a){let e,r,s,o;function c(n){a[13](n)}let f={showFirstLastButtons:!0,showPreviousNextButtons:!0,controlVariant:"variant-filled-surface"};return a[4]!==void 0&&(f.settings=a[4]),r=new $e({props:f}),Ee.push(()=>Te(r,"settings",c)),r.$on("page",a[14]),r.$on("amount",a[15]),{c(){e=$("div"),Q(r.$$.fragment),this.h()},l(n){e=E(n,"DIV",{class:!0});var t=V(e);W(r.$$.fragment,t),t.forEach(v),this.h()},h(){D(e,"class","ml-auto mt-5 flex justify-end")},m(n,t){b(n,e,t),Y(r,e,null),o=!0},p(n,t){const h={};!s&&t&16&&(s=!0,h.settings=n[4],we(()=>s=!1)),r.$set(h)},i(n){o||(A(r.$$.fragment,n),o=!0)},o(n){L(r.$$.fragment,n),o=!1},d(n){n&&v(e),X(r)}}}function Me(a){let e,r,s,o,c,f,n;e=new je({props:{description:"Unapproved mod versions",title:"Admin: Unapproved Versions"}});let t=a[2]&&pe(a);function h(i,g){return i[3].fetching?He:i[3].error?qe:ke}let l=h(a),u=l(a),m=a[2]&&ge(a);return{c(){Q(e.$$.fragment),r=x(),t&&t.c(),s=x(),o=$("div"),u.c(),c=x(),m&&m.c(),f=le(),this.h()},l(i){const g=Ie("svelte-c87g9p",document.head);W(e.$$.fragment,g),g.forEach(v),r=y(i),t&&t.l(i),s=y(i),o=E(i,"DIV",{class:!0});var T=V(o);u.l(T),T.forEach(v),c=y(i),m&&m.l(i),f=le(),this.h()},h(){D(o,"class","card")},m(i,g){Y(e,document.head,null),b(i,r,g),t&&t.m(i,g),b(i,s,g),b(i,o,g),u.m(o,null),b(i,c,g),m&&m.m(i,g),b(i,f,g),n=!0},p(i,[g]){i[2]?t?(t.p(i,g),g&4&&A(t,1)):(t=pe(i),t.c(),A(t,1),t.m(s.parentNode,s)):t&&(oe(),L(t,1,1,()=>{t=null}),ie()),l===(l=h(i))&&u?u.p(i,g):(u.d(1),u=l(i),u&&(u.c(),u.m(o,null))),i[2]?m?(m.p(i,g),g&4&&A(m,1)):(m=ge(i),m.c(),A(m,1),m.m(f.parentNode,f)):m&&(oe(),L(m,1,1,()=>{m=null}),ie())},i(i){n||(A(e.$$.fragment,i),A(t),A(m),n=!0)},o(i){L(e.$$.fragment,i),L(t),L(m),n=!1},d(i){i&&(v(r),v(s),v(o),v(c),v(f)),X(e),t&&t.d(i),u.d(),m&&m.d(i)}}}function Fe(a,e,r){let s,o,c,f,n=De,t=()=>(n(),n=Ne(s,d=>r(3,f=d)),s);a.$$.on_destroy.push(()=>n());const h=Ae();let l=20,u=1;const m=d=>{h.mutation(_e,{versionId:d}).toPromise().then(()=>{s.pause(),s.resume()})},i=d=>{h.mutation(Pe,{versionId:d}).toPromise().then(()=>{s.pause(),s.resume()})};function g(d){c=d,r(4,c),r(1,u),r(0,l),r(2,o),r(3,f)}const T=d=>r(1,u=d.detail),C=d=>r(0,l=d.detail),k=d=>m(d.id),P=d=>i(d.id);function I(d){c=d,r(4,c),r(1,u),r(0,l),r(2,o),r(3,f)}const q=d=>r(1,u=d.detail),j=d=>r(0,l=d.detail);return a.$$.update=()=>{a.$$.dirty&3&&t(r(5,s=Be({query:Oe,client:h,variables:{filter:{offset:(u-1)*l,limit:l}}}))),a.$$.dirty&8&&r(2,o=f?.data?.getUnapprovedVersions?.count),a.$$.dirty&7&&r(4,c={page:u,limit:l,size:o,amounts:[5,10,20,50,100]})},[l,u,o,f,c,s,m,i,g,T,C,k,P,I,q,j]}class Qe extends ye{constructor(e){super(),be(this,e,Fe,Me,Ce,{})}}export{Qe as component};
//# sourceMappingURL=9.FYbAYo-i.js.map