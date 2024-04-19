import{S as it,i as ot,s as nt,d as v,v as st,f as L,n as w,u as h,j as d,e as B,g as I,h as _,N as J,l as Ct,ak as O,m as j,W as S,X as P,Q as k,Y as W,ab as G,a1 as kt,x as vt,b as M,k as U,p as At,t as Z,q as Nt,r as tt,a7 as ct,J as lt,L as rt,O as pt,R as mt,a8 as St,a9 as Pt,aa as Bt}from"./vendor.KW3uvniC.js";import{v as C}from"./graphql.NT0BIh3j.js";import{m as et}from"./markdown.-EOL9owo.js";const Wt="src/lib/components/mods/compatibility/OutdatedBanner.svelte";function ft(e){let t;const o={c:function(){t=B("div"),this.h()},l:function(a){t=I(a,"DIV",{class:!0,style:!0}),_(t).forEach(d),this.h()},h:function(){J(t,"class","mod-outdated-stripe"),Ct(t,"max-width","inherit"),O(t,"mod-damaged",e[1]===C.Damaged),O(t,"mod-broken",e[1]===C.Broken),O(t,"mod-logo-outdated",e[0]),j(t,Wt,33,2,780)},m:function(a,n){w(a,t,n)},p:function(a,n){n&2&&O(t,"mod-damaged",a[1]===C.Damaged),n&2&&O(t,"mod-broken",a[1]===C.Broken),n&1&&O(t,"mod-logo-outdated",a[0])},d:function(a){a&&d(t)}};return v("SvelteRegisterBlock",{block:o,id:ft.name,type:"if",source:"(29:0) {#if !works}",ctx:e}),o}function ut(e){let t,o=!e[2]&&ft(e);const s={c:function(){o&&o.c(),t=L()},l:function(n){o&&o.l(n),t=L()},m:function(n,i){o&&o.m(n,i),w(n,t,i)},p:function(n,[i]){n[2]?o&&(o.d(1),o=null):o?o.p(n,i):(o=ft(n),o.c(),o.m(t.parentNode,t))},i:h,o:h,d:function(n){n&&d(t),o&&o.d(n)}};return v("SvelteRegisterBlock",{block:s,id:ut.name,type:"component",source:"",ctx:e}),s}function Mt(e,t,o){let s,{$$slots:a={},$$scope:n}=t;st("OutdatedBanner",a,[]);let{compatibility:i}=t,{logo:r=!1}=t;function m(l){const u=l.EA.state;return u==C.Broken?u:u==C.Works||l.EXP.state!=C.Works?l.EXP.state:u}let c=C.Works;e.$$.on_mount.push(function(){i===void 0&&!("compatibility"in t||e.$$.bound[e.$$.props.compatibility])&&console.warn("<OutdatedBanner> was created without expected prop 'compatibility'")});const f=["compatibility","logo"];return Object.keys(t).forEach(l=>{!~f.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<OutdatedBanner> was created with unknown prop '${l}'`)}),e.$$set=l=>{"compatibility"in l&&o(3,i=l.compatibility),"logo"in l&&o(0,r=l.logo)},e.$capture_state=()=>({CompatibilityState:C,compatibility:i,logo:r,Worst:m,worst:c,works:s}),e.$inject_state=l=>{"compatibility"in l&&o(3,i=l.compatibility),"logo"in l&&o(0,r=l.logo),"worst"in l&&o(1,c=l.worst),"works"in l&&o(2,s=l.works)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),e.$$.update=()=>{e.$$.dirty&8&&(i?o(1,c=m(i)):o(1,c=C.Works)),e.$$.dirty&2&&o(2,s=c===C.Works)},[r,c,s,i]}class Gt extends it{constructor(t){super(t),ot(this,t,Mt,ut,nt,{compatibility:3,logo:0}),v("SvelteRegisterComponent",{component:this,tagName:"OutdatedBanner",options:t,id:ut.name})}get compatibility(){throw new Error("<OutdatedBanner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<OutdatedBanner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get logo(){throw new Error("<OutdatedBanner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set logo(t){throw new Error("<OutdatedBanner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Ut="src/lib/components/mods/compatibility/CompatibilityIcon.svelte";function dt(e){let t,o;const s={c:function(){t=B("p"),o=S(e[1]),this.h()},l:function(n){t=I(n,"P",{class:!0});var i=_(t);o=P(i,e[1]),i.forEach(d),this.h()},h:function(){J(t,"class","material-icons text-sm"),O(t,"mod-state-works",e[0]?.state===C.Works),O(t,"mod-state-damaged",e[0]?.state===C.Damaged),O(t,"mod-state-broken",e[0]?.state===C.Broken),O(t,"mod-state-unknown",!e[0]),j(t,Ut,12,0,210)},m:function(n,i){w(n,t,i),k(t,o)},p:function(n,[i]){i&2&&W(o,n[1]),i&1&&O(t,"mod-state-works",n[0]?.state===C.Works),i&1&&O(t,"mod-state-damaged",n[0]?.state===C.Damaged),i&1&&O(t,"mod-state-broken",n[0]?.state===C.Broken),i&1&&O(t,"mod-state-unknown",!n[0])},i:h,o:h,d:function(n){n&&d(t)}};return v("SvelteRegisterBlock",{block:s,id:dt.name,type:"component",source:"",ctx:e}),s}function Lt(e,t,o){let{$$slots:s={},$$scope:a}=t;st("CompatibilityIcon",s,[]);let{compatibility:n=null}=t,{EXP:i=!1}=t,r="rocket_launch";i&&(r="science");const m=["compatibility","EXP"];return Object.keys(t).forEach(c=>{!~m.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<CompatibilityIcon> was created with unknown prop '${c}'`)}),e.$$set=c=>{"compatibility"in c&&o(0,n=c.compatibility),"EXP"in c&&o(2,i=c.EXP)},e.$capture_state=()=>({CompatibilityState:C,compatibility:n,EXP:i,iconText:r}),e.$inject_state=c=>{"compatibility"in c&&o(0,n=c.compatibility),"EXP"in c&&o(2,i=c.EXP),"iconText"in c&&o(1,r=c.iconText)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),[n,r,i]}class Kt extends it{constructor(t){super(t),ot(this,t,Lt,dt,nt,{compatibility:0,EXP:2}),v("SvelteRegisterComponent",{component:this,tagName:"CompatibilityIcon",options:t,id:dt.name})}get compatibility(){throw new Error("<CompatibilityIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get EXP(){throw new Error("<CompatibilityIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set EXP(t){throw new Error("<CompatibilityIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Ft="src/lib/components/mods/compatibility/CompatibilityStateText.svelte";function bt(e){let t,o=e[1](`compatibility-info.state.${e[2].toString().toLowerCase()}`)+"",s;const a={c:function(){t=B("p"),s=S(o),this.h()},l:function(i){t=I(i,"P",{class:!0});var r=_(t);s=P(r,o),r.forEach(d),this.h()},h:function(){J(t,"class",e[3](e[2])+" mod-state"),j(t,Ft,11,0,251)},m:function(i,r){w(i,t,r),k(t,s)},p:function(i,[r]){r&2&&o!==(o=i[1](`compatibility-info.state.${i[2].toString().toLowerCase()}`)+"")&&W(s,o)},i:h,o:h,d:function(i){i&&d(t)}};return v("SvelteRegisterBlock",{block:a,id:bt.name,type:"component",source:"",ctx:e}),a}function Jt(e,t,o){let s,a=h,n=()=>(a(),a=vt(c,b=>o(1,s=b)),c);e.$$.on_destroy.push(()=>a());let{$$slots:i={},$$scope:r}=t;st("CompatibilityStateText",i,[]);let{state:m=null}=t;const{t:c}=G();kt(c,"t"),n();const f=m??"Unknown",l=b=>`mod-state-${b.toString().toLowerCase()}`,u=["state"];return Object.keys(t).forEach(b=>{!~u.indexOf(b)&&b.slice(0,2)!=="$$"&&b!=="slot"&&console.warn(`<CompatibilityStateText> was created with unknown prop '${b}'`)}),e.$$set=b=>{"state"in b&&o(4,m=b.state)},e.$capture_state=()=>({getTranslate:G,state:m,t:c,textForState:f,classForState:l,$t:s}),e.$inject_state=b=>{"state"in b&&o(4,m=b.state)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),[c,s,f,l,m]}class ht extends it{constructor(t){super(t),ot(this,t,Jt,bt,nt,{state:4,t:0}),v("SvelteRegisterComponent",{component:this,tagName:"CompatibilityStateText",options:t,id:bt.name})}get state(){throw new Error("<CompatibilityStateText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set state(t){throw new Error("<CompatibilityStateText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[0]}set t(t){throw new Error("<CompatibilityStateText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const N="src/lib/components/mods/compatibility/CompatibilityInfo.svelte";function It(e){let t,o=e[2].Unknown+"",s;const a={c:function(){t=B("div"),s=S(o),this.h()},l:function(i){t=I(i,"DIV",{});var r=_(t);s=P(r,o),r.forEach(d),this.h()},h:function(){j(t,N,51,2,1705)},m:function(i,r){w(i,t,r),k(t,s)},p:h,i:h,o:h,d:function(i){i&&d(t)}};return v("SvelteRegisterBlock",{block:a,id:It.name,type:"else",source:"(45:0) {:else}",ctx:e}),a}function jt(e){let t,o=e[3]("early-access")+"",s,a,n,i,r,m=e[2][e[0]?.EA?.state||"Unknown"]+"",c,f,l,u,b,x,T=e[3]("experimental")+"",q,D,V,H,E,y=e[2][e[0]?.EXP?.state||"Unknown"]+"",g,A,Y,F;n=new ht({props:{state:e[0]?.EA?.state},$$inline:!0});let R=e[0].EA.note&&yt(e);V=new ht({props:{state:e[0]?.EXP?.state},$$inline:!0});let X=e[0].EXP.note&&$t(e);const xt={c:function(){t=B("div"),s=S(o),a=S(": "),lt(n.$$.fragment),i=M(),r=B("div"),c=S(m),f=M(),R&&R.c(),l=M(),u=B("br"),b=M(),x=B("div"),q=S(T),D=S(": "),lt(V.$$.fragment),H=M(),E=B("div"),g=S(y),A=M(),X&&X.c(),Y=L(),this.h()},l:function(p){t=I(p,"DIV",{});var $=_(t);s=P($,o),a=P($,": "),rt(n.$$.fragment,$),$.forEach(d),i=U(p),r=I(p,"DIV",{class:!0});var K=_(r);c=P(K,m),K.forEach(d),f=U(p),R&&R.l(p),l=U(p),u=I(p,"BR",{}),b=U(p),x=I(p,"DIV",{});var z=_(x);q=P(z,T),D=P(z,": "),rt(V.$$.fragment,z),z.forEach(d),H=U(p),E=I(p,"DIV",{class:!0});var Et=_(E);g=P(Et,y),Et.forEach(d),A=U(p),X&&X.l(p),Y=L(),this.h()},h:function(){j(t,N,25,2,778),J(r,"class","compatibility-state-description"),j(r,N,26,2,873),j(u,N,37,2,1231),j(x,N,38,2,1240),J(E,"class","compatibility-state-description"),j(E,N,39,2,1336)},m:function(p,$){w(p,t,$),k(t,s),k(t,a),pt(n,t,null),w(p,i,$),w(p,r,$),k(r,c),w(p,f,$),R&&R.m(p,$),w(p,l,$),w(p,u,$),w(p,b,$),w(p,x,$),k(x,q),k(x,D),pt(V,x,null),w(p,H,$),w(p,E,$),k(E,g),w(p,A,$),X&&X.m(p,$),w(p,Y,$),F=!0},p:function(p,$){(!F||$&8)&&o!==(o=p[3]("early-access")+"")&&W(s,o);const K={};$&1&&(K.state=p[0]?.EA?.state),n.$set(K),(!F||$&1)&&m!==(m=p[2][p[0]?.EA?.state||"Unknown"]+"")&&W(c,m),p[0].EA.note?R?R.p(p,$):(R=yt(p),R.c(),R.m(l.parentNode,l)):R&&(R.d(1),R=null),(!F||$&8)&&T!==(T=p[3]("experimental")+"")&&W(q,T);const z={};$&1&&(z.state=p[0]?.EXP?.state),V.$set(z),(!F||$&1)&&y!==(y=p[2][p[0]?.EXP?.state||"Unknown"]+"")&&W(g,y),p[0].EXP.note?X?X.p(p,$):(X=$t(p),X.c(),X.m(Y.parentNode,Y)):X&&(X.d(1),X=null)},i:function(p){F||(tt(n.$$.fragment,p),tt(V.$$.fragment,p),F=!0)},o:function(p){Z(n.$$.fragment,p),Z(V.$$.fragment,p),F=!1},d:function(p){p&&(d(t),d(i),d(r),d(f),d(l),d(u),d(b),d(x),d(H),d(E),d(A),d(Y)),mt(n),R&&R.d(p),mt(V),X&&X.d(p)}};return v("SvelteRegisterBlock",{block:xt,id:jt.name,type:"if",source:"(19:0) {#if compatibility}",ctx:e}),xt}function yt(e){let t,o=e[3]("compatibility-info.note")+"",s,a,n,i={ctx:e,current:null,token:null,hasCatch:!1,pending:_t,then:Xt,catch:Rt,value:4};ct(n=et(e[0].EA.note),i);const r={c:function(){t=B("div"),s=S(o),a=S(": "),i.block.c(),this.h()},l:function(c){t=I(c,"DIV",{});var f=_(t);s=P(f,o),a=P(f,": "),i.block.l(f),f.forEach(d),this.h()},h:function(){j(t,N,30,4,1038)},m:function(c,f){w(c,t,f),k(t,s),k(t,a),i.block.m(t,i.anchor=null),i.mount=()=>t,i.anchor=null},p:function(c,f){e=c,f&8&&o!==(o=e[3]("compatibility-info.note")+"")&&W(s,o),i.ctx=e,f&1&&n!==(n=et(e[0].EA.note))&&ct(n,i)||St(i,e,f)},d:function(c){c&&d(t),i.block.d(),i.token=null,i=null}};return v("SvelteRegisterBlock",{block:r,id:yt.name,type:"if",source:"(24:2) {#if compatibility.EA.note}",ctx:e}),r}function Rt(e){const t={c:h,l:h,m:h,p:h,d:h};return v("SvelteRegisterBlock",{block:t,id:Rt.name,type:"catch",source:`(1:0) <script lang=\\"ts\\">import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte'; import { markdown }`,ctx:e}),t}function Xt(e){let t,o=e[4]+"",s;const a={c:function(){t=new Pt(!1),s=L(),this.h()},l:function(i){t=Bt(i,!1),s=L(),this.h()},h:function(){t.a=s},m:function(i,r){t.m(o,i,r),w(i,s,r)},p:function(i,r){r&1&&o!==(o=i[4]+"")&&t.p(o)},d:function(i){i&&(d(s),t.d())}};return v("SvelteRegisterBlock",{block:a,id:Xt.name,type:"then",source:"(26:93)          <!-- eslint-disable -->         {@html rendered}",ctx:e}),a}function _t(e){const t={c:h,l:h,m:h,p:h,d:h};return v("SvelteRegisterBlock",{block:t,id:_t.name,type:"pending",source:`(1:0) <script lang=\\"ts\\">import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte'; import { markdown }`,ctx:e}),t}function $t(e){let t,o=e[3]("compatibility-info.note")+"",s,a,n,i={ctx:e,current:null,token:null,hasCatch:!1,pending:Dt,then:Tt,catch:Ot,value:4};ct(n=et(e[0].EXP.note),i);const r={c:function(){t=B("div"),s=S(o),a=S(": "),i.block.c(),this.h()},l:function(c){t=I(c,"DIV",{});var f=_(t);s=P(f,o),a=P(f,": "),i.block.l(f),f.forEach(d),this.h()},h:function(){j(t,N,43,4,1503)},m:function(c,f){w(c,t,f),k(t,s),k(t,a),i.block.m(t,i.anchor=null),i.mount=()=>t,i.anchor=null},p:function(c,f){e=c,f&8&&o!==(o=e[3]("compatibility-info.note")+"")&&W(s,o),i.ctx=e,f&1&&n!==(n=et(e[0].EXP.note))&&ct(n,i)||St(i,e,f)},d:function(c){c&&d(t),i.block.d(),i.token=null,i=null}};return v("SvelteRegisterBlock",{block:r,id:$t.name,type:"if",source:"(37:2) {#if compatibility.EXP.note}",ctx:e}),r}function Ot(e){const t={c:h,l:h,m:h,p:h,d:h};return v("SvelteRegisterBlock",{block:t,id:Ot.name,type:"catch",source:`(1:0) <script lang=\\"ts\\">import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte'; import { markdown }`,ctx:e}),t}function Tt(e){let t,o=e[4]+"",s;const a={c:function(){t=new Pt(!1),s=L(),this.h()},l:function(i){t=Bt(i,!1),s=L(),this.h()},h:function(){t.a=s},m:function(i,r){t.m(o,i,r),w(i,s,r)},p:function(i,r){r&1&&o!==(o=i[4]+"")&&t.p(o)},d:function(i){i&&(d(s),t.d())}};return v("SvelteRegisterBlock",{block:a,id:Tt.name,type:"then",source:"(39:94)          <!-- eslint-disable -->         {@html rendered}",ctx:e}),a}function Dt(e){const t={c:h,l:h,m:h,p:h,d:h};return v("SvelteRegisterBlock",{block:t,id:Dt.name,type:"pending",source:`(1:0) <script lang=\\"ts\\">import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte'; import { markdown }`,ctx:e}),t}function wt(e){let t,o=e[3]("compatibility-info.maintained-by")+"",s,a,n,i=e[3]("discord")+"",r,m,c,f,l,u,b,x,T;const q=[jt,It],D=[];function V(E,y){return E[0]?0:1}u=V(e),b=D[u]=q[u](e);const H={c:function(){t=B("div"),s=S(o),a=M(),n=B("a"),r=S(i),m=S("!"),c=M(),f=B("br"),l=M(),b.c(),x=L(),this.h()},l:function(y){t=I(y,"DIV",{});var g=_(t);s=P(g,o),a=U(g),n=I(g,"A",{href:!0,style:!0});var A=_(n);r=P(A,i),A.forEach(d),m=P(g,"!"),g.forEach(d),c=U(y),f=I(y,"BR",{}),l=U(y),b.l(y),x=L(),this.h()},h:function(){J(n,"href","https://discord.gg/xkVJ73E"),Ct(n,"text-decoration","underline"),j(n,N,21,2,649),j(t,N,19,0,598),j(f,N,23,0,749)},m:function(y,g){w(y,t,g),k(t,s),k(t,a),k(t,n),k(n,r),k(t,m),w(y,c,g),w(y,f,g),w(y,l,g),D[u].m(y,g),w(y,x,g),T=!0},p:function(y,[g]){(!T||g&8)&&o!==(o=y[3]("compatibility-info.maintained-by")+"")&&W(s,o),(!T||g&8)&&i!==(i=y[3]("discord")+"")&&W(r,i);let A=u;u=V(y),u===A?D[u].p(y,g):(At(),Z(D[A],1,1,()=>{D[A]=null}),Nt(),b=D[u],b?b.p(y,g):(b=D[u]=q[u](y),b.c()),tt(b,1),b.m(x.parentNode,x))},i:function(y){T||(tt(b),T=!0)},o:function(y){Z(b),T=!1},d:function(y){y&&(d(t),d(c),d(f),d(l),d(x)),D[u].d(y)}};return v("SvelteRegisterBlock",{block:H,id:wt.name,type:"component",source:"",ctx:e}),H}function qt(e,t,o){let s,a=h,n=()=>(a(),a=vt(c,u=>o(3,s=u)),c);e.$$.on_destroy.push(()=>a());let{$$slots:i={},$$scope:r}=t;st("CompatibilityInfo",i,[]);let{compatibility:m}=t;const{t:c}=G();kt(c,"t"),n();const f={Works:s("compatibility-info.state.works.description"),Damaged:s("compatibility-info.state.damaged.description"),Broken:s("compatibility-info.state.broken.description"),Unknown:s("compatibility-info.state.unknown.description")};e.$$.on_mount.push(function(){m===void 0&&!("compatibility"in t||e.$$.bound[e.$$.props.compatibility])&&console.warn("<CompatibilityInfo> was created without expected prop 'compatibility'")});const l=["compatibility"];return Object.keys(t).forEach(u=>{!~l.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&console.warn(`<CompatibilityInfo> was created with unknown prop '${u}'`)}),e.$$set=u=>{"compatibility"in u&&o(0,m=u.compatibility)},e.$capture_state=()=>({CompatibilityStateText:ht,markdown:et,getTranslate:G,compatibility:m,t:c,compatibilityStateDescriptions:f,$t:s}),e.$inject_state=u=>{"compatibility"in u&&o(0,m=u.compatibility)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),[m,c,f,s]}class Vt extends it{constructor(t){super(t),ot(this,t,qt,wt,nt,{compatibility:0,t:1,compatibilityStateDescriptions:2}),v("SvelteRegisterComponent",{component:this,tagName:"CompatibilityInfo",options:t,id:wt.name})}get compatibility(){throw new Error("<CompatibilityInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(t){throw new Error("<CompatibilityInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get compatibilityStateDescriptions(){return this.$$.ctx[2]}set compatibilityStateDescriptions(t){throw new Error("<CompatibilityInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const at="src/lib/modals/CompatibilityModal.svelte";function gt(e){let t,o,s=e[2]("compatibility-info")+"",a,n,i,r,m;r=new Vt({props:{compatibility:e[0]},$$inline:!0});const c={c:function(){t=B("div"),o=B("h2"),a=S(s),n=M(),i=B("div"),lt(r.$$.fragment),this.h()},l:function(l){t=I(l,"DIV",{class:!0});var u=_(t);o=I(u,"H2",{class:!0});var b=_(o);a=P(b,s),b.forEach(d),n=U(u),i=I(u,"DIV",{});var x=_(i);rt(r.$$.fragment,x),x.forEach(d),u.forEach(d),this.h()},h:function(){J(o,"class","text-2xl"),j(o,at,11,2,277),j(i,at,12,2,332),J(t,"class","card flex flex-col gap-2 p-4"),j(t,at,10,0,232)},m:function(l,u){w(l,t,u),k(t,o),k(o,a),k(t,n),k(t,i),pt(r,i,null),m=!0},p:function(l,[u]){(!m||u&4)&&s!==(s=l[2]("compatibility-info")+"")&&W(a,s);const b={};u&1&&(b.compatibility=l[0]),r.$set(b)},i:function(l){m||(tt(r.$$.fragment,l),m=!0)},o:function(l){Z(r.$$.fragment,l),m=!1},d:function(l){l&&d(t),mt(r)}};return v("SvelteRegisterBlock",{block:c,id:gt.name,type:"component",source:"",ctx:e}),c}function Ht(e,t,o){let s,a=h,n=()=>(a(),a=vt(c,l=>o(2,s=l)),c);e.$$.on_destroy.push(()=>a());let{$$slots:i={},$$scope:r}=t;st("CompatibilityModal",i,[]);let{compatibility:m}=t;const{t:c}=G();kt(c,"t"),n(),e.$$.on_mount.push(function(){m===void 0&&!("compatibility"in t||e.$$.bound[e.$$.props.compatibility])&&console.warn("<CompatibilityModal> was created without expected prop 'compatibility'")});const f=["compatibility"];return Object.keys(t).forEach(l=>{!~f.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<CompatibilityModal> was created with unknown prop '${l}'`)}),e.$$set=l=>{"compatibility"in l&&o(0,m=l.compatibility)},e.$capture_state=()=>({CompatibilityInfo:Vt,getTranslate:G,compatibility:m,t:c,$t:s}),e.$inject_state=l=>{"compatibility"in l&&o(0,m=l.compatibility)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),[m,c,s]}class Zt extends it{constructor(t){super(t),ot(this,t,Ht,gt,nt,{compatibility:0,t:1}),v("SvelteRegisterComponent",{component:this,tagName:"CompatibilityModal",options:t,id:gt.name})}get compatibility(){throw new Error("<CompatibilityModal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityModal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(t){throw new Error("<CompatibilityModal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Kt as C,Gt as O,Zt as a,ht as b};
//# sourceMappingURL=CompatibilityModal.WymYqtgh.js.map
