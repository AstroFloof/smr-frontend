import{S as Z,i as J,s as K,ay as ge,w as B,x as S,y as A,q as p,o as $,B as N,aC as he,e as k,t as D,k as G,c as U,a as w,h as C,d as m,m as q,b as E,g as j,X as g,j as x,aA as re,Z as V,R as pe,l as L,a2 as $e,p as z,P as ve,az as be,T as ke,n as Q,Y as se,aB as ae}from"../../../chunks/vendor-1ba4e540.js";import{M as Ue}from"../../../chunks/MetaDescriptors-28c89374.js";import{l as je}from"../../../chunks/gql-0ffdd8db.js";import{h as we}from"../../../chunks/graphql-a19cc583.js";import{p as Ee}from"../../../chunks/routing-689f9c1f.js";import{a as ne}from"../../../chunks/formatting-24701f16.js";import{a as Ie,b as De}from"../../../chunks/paths-396f020f.js";import{M as Ce}from"../../../chunks/ModCard-c28be5f4.js";import{G as Me}from"../../../chunks/GuideCard-7271a623.js";import{a as Ve}from"../../../chunks/user-3cdd149b.js";import"../../../chunks/stores-db79f75e.js";import"../../../chunks/FicsitCard-98d068ce.js";import"../../../chunks/navigation-b10cf5bf.js";import"../../../chunks/singletons-4a680913.js";import"../../../chunks/launcher-b8cc8a9a.js";import"../../../chunks/mod-9e1e4073.js";function Ge(n){let e,r,t,a,s,f,l,i,c=ne(n[0].created_at)+"",o,u;return{c(){e=k("div"),r=k("h3"),t=D("Info"),a=G(),s=k("span"),f=k("strong"),l=D("Created:"),i=G(),o=D(c),u=k("br"),this.h()},l(d){e=U(d,"DIV",{class:!0});var h=w(e);r=U(h,"H3",{class:!0});var F=w(r);t=C(F,"Info"),F.forEach(m),a=q(h),s=U(h,"SPAN",{});var I=w(s);f=U(I,"STRONG",{});var M=w(f);l=C(M,"Created:"),M.forEach(m),i=q(I),o=C(I,c),I.forEach(m),u=U(h,"BR",{}),h.forEach(m),this.h()},h(){E(r,"class","text-2xl my-4 font-bold"),E(e,"class","text-lg")},m(d,h){j(d,e,h),g(e,r),g(r,t),g(e,a),g(e,s),g(s,f),g(f,l),g(s,i),g(s,o),g(e,u)},p(d,h){h&1&&c!==(c=ne(d[0].created_at)+"")&&x(o,c)},d(d){d&&m(e)}}}function qe(n){let e,r;return e=new he({props:{$$slots:{default:[Ge]},$$scope:{ctx:n}}}),{c(){B(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){A(e,t,a),r=!0},p(t,a){const s={};a&3&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function Be(n){let e,r;return e=new ge({props:{$$slots:{default:[qe]},$$scope:{ctx:n}}}),{c(){B(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){A(e,t,a),r=!0},p(t,[a]){const s={};a&3&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function Se(n,e,r){let{user:t}=e;return n.$$set=a=>{"user"in a&&r(0,t=a.user)},[t]}class Ae extends Z{constructor(e){super();J(this,e,Se,Be,K,{user:0})}}function Ne(n){let e,r,t,a;return{c(){e=k("div"),r=k("img"),this.h()},l(s){e=U(s,"DIV",{});var f=w(e);r=U(f,"IMG",{class:!0,src:!0,alt:!0}),f.forEach(m),this.h()},h(){E(r,"class","rounded-lg sm:max-w-lg max-w-full w-full"),re(r.src,t=n[1])||E(r,"src",t),E(r,"alt",a="Avatar for "+n[0])},m(s,f){j(s,e,f),g(e,r)},p(s,[f]){f&2&&!re(r.src,t=s[1])&&E(r,"src",t),f&1&&a!==(a="Avatar for "+s[0])&&E(r,"alt",a)},i:V,o:V,d(s){s&&m(e)}}}function ye(n,e,r){let t,{avatar:a}=e,{username:s}=e;return n.$$set=f=>{"avatar"in f&&r(2,a=f.avatar),"username"in f&&r(0,s=f.username)},n.$$.update=()=>{n.$$.dirty&4&&r(1,t=a||Ie+"/images/no_image.png")},[s,t,a]}class Pe extends Z{constructor(e){super();J(this,e,ye,Ne,K,{avatar:2,username:0})}}function le(n,e,r){const t=n.slice();return t[8]=e[r],t}function oe(n,e,r){const t=n.slice();return t[5]=e[r],t}function ie(n){let e,r;return e=new Ue({props:{description:""+(n[2].data.getUser.username+" profile"),title:""+(n[2].data.getUser.username+" profile")}}),{c(){B(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){A(e,t,a),r=!0},p(t,a){const s={};a&4&&(s.description=""+(t[2].data.getUser.username+" profile")),a&4&&(s.title=""+(t[2].data.getUser.username+" profile")),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function Te(n){let e;return{c(){e=D("404")},l(r){e=C(r,"404")},m(r,t){j(r,e,t)},p:V,i:V,o:V,d(r){r&&m(e)}}}function Fe(n){let e,r,t,a=n[2].data.getUser.username+"",s,f,l,i,c,o,u,d,h,F,I,M,Y,y,W,v=n[3]&&n[2].data.getUser.id===n[3].id&&ce(n);c=new se({props:{variant:"outlined",$$slots:{default:[Qe]},$$scope:{ctx:n}}}),c.$on("click",n[4]);const ee=[Xe,We],P=[];function te(_,b){return _[1]?1:0}return d=te(n),h=P[d]=ee[d](n),M=new Pe({props:{avatar:n[2].data.getUser.avatar,username:n[2].data.getUser.username}}),y=new Ae({props:{user:n[2].data.getUser}}),{c(){e=k("div"),r=k("div"),t=k("h1"),s=D(a),f=G(),l=k("div"),v&&v.c(),i=G(),B(c.$$.fragment),o=G(),u=k("div"),h.c(),F=G(),I=k("div"),B(M.$$.fragment),Y=G(),B(y.$$.fragment),this.h()},l(_){e=U(_,"DIV",{class:!0});var b=w(e);r=U(b,"DIV",{class:!0});var O=w(r);t=U(O,"H1",{class:!0});var H=w(t);s=C(H,a),H.forEach(m),f=q(O),l=U(O,"DIV",{});var T=w(l);v&&v.l(T),i=q(T),S(c.$$.fragment,T),T.forEach(m),O.forEach(m),o=q(b),u=U(b,"DIV",{class:!0});var R=w(u);h.l(R),F=q(R),I=U(R,"DIV",{class:!0});var X=w(I);S(M.$$.fragment,X),Y=q(X),S(y.$$.fragment,X),X.forEach(m),R.forEach(m),b.forEach(m),this.h()},h(){E(t,"class","text-4xl font-bold"),E(r,"class","flex flex-wrap h-auto justify-between items-center"),E(I,"class","grid grid-cols-1 auto-rows-min gap-8"),E(u,"class","grid grid-auto-max auto-rows-min gap-4"),E(e,"class","grid gap-6 xlx:grid-flow-row")},m(_,b){j(_,e,b),g(e,r),g(r,t),g(t,s),g(r,f),g(r,l),v&&v.m(l,null),g(l,i),A(c,l,null),g(e,o),g(e,u),P[d].m(u,null),g(u,F),g(u,I),A(M,I,null),g(I,Y),A(y,I,null),W=!0},p(_,b){(!W||b&4)&&a!==(a=_[2].data.getUser.username+"")&&x(s,a),_[3]&&_[2].data.getUser.id===_[3].id?v?(v.p(_,b),b&12&&p(v,1)):(v=ce(_),v.c(),p(v,1),v.m(l,i)):v&&(Q(),$(v,1,1,()=>{v=null}),z());const O={};b&2050&&(O.$$scope={dirty:b,ctx:_}),c.$set(O);let H=d;d=te(_),d===H?P[d].p(_,b):(Q(),$(P[H],1,1,()=>{P[H]=null}),z(),h=P[d],h?h.p(_,b):(h=P[d]=ee[d](_),h.c()),p(h,1),h.m(u,F));const T={};b&4&&(T.avatar=_[2].data.getUser.avatar),b&4&&(T.username=_[2].data.getUser.username),M.$set(T);const R={};b&4&&(R.user=_[2].data.getUser),y.$set(R)},i(_){W||(p(v),p(c.$$.fragment,_),p(h),p(M.$$.fragment,_),p(y.$$.fragment,_),W=!0)},o(_){$(v),$(c.$$.fragment,_),$(h),$(M.$$.fragment,_),$(y.$$.fragment,_),W=!1},d(_){_&&m(e),v&&v.d(),N(c),P[d].d(),N(M),N(y)}}}function Oe(n){let e,r,t=n[2].error.message+"",a;return{c(){e=k("p"),r=D("Oh no... "),a=D(t)},l(s){e=U(s,"P",{});var f=w(e);r=C(f,"Oh no... "),a=C(f,t),f.forEach(m)},m(s,f){j(s,e,f),g(e,r),g(e,a)},p(s,f){f&4&&t!==(t=s[2].error.message+"")&&x(a,t)},i:V,o:V,d(s){s&&m(e)}}}function Re(n){let e,r;return{c(){e=k("p"),r=D("Loading...")},l(t){e=U(t,"P",{});var a=w(e);r=C(a,"Loading..."),a.forEach(m)},m(t,a){j(t,e,a),g(e,r)},p:V,i:V,o:V,d(t){t&&m(e)}}}function ce(n){let e,r;return e=new se({props:{variant:"outlined",href:""+(De+"/settings"),$$slots:{default:[He]},$$scope:{ctx:n}}}),{c(){B(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){A(e,t,a),r=!0},p(t,a){const s={};a&2048&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function He(n){let e;return{c(){e=D("Settings")},l(r){e=C(r,"Settings")},m(r,t){j(r,e,t)},d(r){r&&m(e)}}}function Le(n){let e;return{c(){e=D("Mods")},l(r){e=C(r,"Mods")},m(r,t){j(r,e,t)},d(r){r&&m(e)}}}function ze(n){let e;return{c(){e=D("Guides")},l(r){e=C(r,"Guides")},m(r,t){j(r,e,t)},d(r){r&&m(e)}}}function Qe(n){let e;function r(s,f){return s[1]?Le:ze}let t=r(n),a=t(n);return{c(){a.c(),e=L()},l(s){a.l(s),e=L()},m(s,f){a.m(s,f),j(s,e,f)},p(s,f){t!==(t=r(s))&&(a.d(1),a=t(s),a&&(a.c(),a.m(e.parentNode,e)))},d(s){a.d(s),s&&m(e)}}}function We(n){let e,r,t,a=n[2].data.getUser.guides,s=[];for(let i=0;i<a.length;i+=1)s[i]=fe(le(n,a,i));const f=i=>$(s[i],1,1,()=>{s[i]=null});let l=n[2].data.getUser.guides.length===0&&ue();return{c(){e=k("div");for(let i=0;i<s.length;i+=1)s[i].c();r=G(),l&&l.c(),this.h()},l(i){e=U(i,"DIV",{class:!0});var c=w(e);for(let o=0;o<s.length;o+=1)s[o].l(c);r=q(c),l&&l.l(c),c.forEach(m),this.h()},h(){E(e,"class","grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4 h-fit")},m(i,c){j(i,e,c);for(let o=0;o<s.length;o+=1)s[o].m(e,null);g(e,r),l&&l.m(e,null),t=!0},p(i,c){if(c&4){a=i[2].data.getUser.guides;let o;for(o=0;o<a.length;o+=1){const u=le(i,a,o);s[o]?(s[o].p(u,c),p(s[o],1)):(s[o]=fe(u),s[o].c(),p(s[o],1),s[o].m(e,r))}for(Q(),o=a.length;o<s.length;o+=1)f(o);z()}i[2].data.getUser.guides.length===0?l||(l=ue(),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i(i){if(!t){for(let c=0;c<a.length;c+=1)p(s[c]);t=!0}},o(i){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)$(s[c]);t=!1},d(i){i&&m(e),ae(s,i),l&&l.d()}}}function Xe(n){let e,r,t,a=n[2].data.getUser.mods,s=[];for(let i=0;i<a.length;i+=1)s[i]=de(oe(n,a,i));const f=i=>$(s[i],1,1,()=>{s[i]=null});let l=n[2].data.getUser.mods.length===0&&me();return{c(){e=k("div");for(let i=0;i<s.length;i+=1)s[i].c();r=G(),l&&l.c(),this.h()},l(i){e=U(i,"DIV",{class:!0});var c=w(e);for(let o=0;o<s.length;o+=1)s[o].l(c);r=q(c),l&&l.l(c),c.forEach(m),this.h()},h(){E(e,"class","grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4 h-fit")},m(i,c){j(i,e,c);for(let o=0;o<s.length;o+=1)s[o].m(e,null);g(e,r),l&&l.m(e,null),t=!0},p(i,c){if(c&4){a=i[2].data.getUser.mods;let o;for(o=0;o<a.length;o+=1){const u=oe(i,a,o);s[o]?(s[o].p(u,c),p(s[o],1)):(s[o]=de(u),s[o].c(),p(s[o],1),s[o].m(e,r))}for(Q(),o=a.length;o<s.length;o+=1)f(o);z()}i[2].data.getUser.mods.length===0?l||(l=me(),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i(i){if(!t){for(let c=0;c<a.length;c+=1)p(s[c]);t=!0}},o(i){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)$(s[c]);t=!1},d(i){i&&m(e),ae(s,i),l&&l.d()}}}function fe(n){let e,r;return e=new Me({props:{guide:n[8],logo:n[2].data.getUser.avatar}}),{c(){B(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){A(e,t,a),r=!0},p(t,a){const s={};a&4&&(s.guide=t[8]),a&4&&(s.logo=t[2].data.getUser.avatar),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function ue(n){let e;return{c(){e=D("User has no guides")},l(r){e=C(r,"User has no guides")},m(r,t){j(r,e,t)},d(r){r&&m(e)}}}function de(n){let e,r;return e=new Ce({props:{mod:n[5].mod}}),{c(){B(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){A(e,t,a),r=!0},p(t,a){const s={};a&4&&(s.mod=t[5].mod),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function me(n){let e;return{c(){e=D("User has no mods")},l(r){e=C(r,"User has no mods")},m(r,t){j(r,e,t)},d(r){r&&m(e)}}}function Ye(n){let e,r,t,a,s,f,l=!n[2].fetching&&!n[2].error&&n[2].data.getUser&&ie(n);const i=[Re,Oe,Fe,Te],c=[];function o(u,d){return u[2].fetching?0:u[2].error?1:u[2].data.getUser?2:3}return t=o(n),a=c[t]=i[t](n),{c(){l&&l.c(),e=L(),r=G(),a.c(),s=L()},l(u){const d=$e('[data-svelte="svelte-10jr2sa"]',document.head);l&&l.l(d),e=L(),d.forEach(m),r=q(u),a.l(u),s=L()},m(u,d){l&&l.m(document.head,null),g(document.head,e),j(u,r,d),c[t].m(u,d),j(u,s,d),f=!0},p(u,[d]){!u[2].fetching&&!u[2].error&&u[2].data.getUser?l?(l.p(u,d),d&4&&p(l,1)):(l=ie(u),l.c(),p(l,1),l.m(e.parentNode,e)):l&&(Q(),$(l,1,1,()=>{l=null}),z());let h=t;t=o(u),t===h?c[t].p(u,d):(Q(),$(c[h],1,1,()=>{c[h]=null}),z(),a=c[t],a?a.p(u,d):(a=c[t]=i[t](u),a.c()),p(a,1),a.m(s.parentNode,s))},i(u){f||(p(l),p(a),f=!0)},o(u){$(l),$(a),f=!1},d(u){l&&l.d(u),m(e),u&&m(r),c[t].d(u),u&&m(s)}}}const _e=pe(we,{user:void 0}),mt=Ee(async n=>(_e.variables.user=n.params.userId,je({user:_e})(n)));function Ze(n,e,r){let t,a=V,s=()=>(a(),a=be(l,o=>r(2,t=o)),l),f;ve(n,Ve,o=>r(3,f=o)),n.$$.on_destroy.push(()=>a());let{user:l}=e;s();let i=!1;ke(l);const c=()=>r(1,i=!i);return n.$$set=o=>{"user"in o&&s(r(0,l=o.user))},[l,i,t,f,c]}class _t extends Z{constructor(e){super();J(this,e,Ze,Ye,K,{user:0})}}export{_t as default,mt as load};
//# sourceMappingURL=index.svelte-ef136e12.js.map