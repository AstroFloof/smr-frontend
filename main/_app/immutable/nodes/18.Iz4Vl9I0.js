import{L as lt,S as ct,i as dt,s as ft,b as tt,a as _,e as x,T as O,C as ut,f as m,g as q,c as I,d as D,U as H,F as W,G as T,I as y,j as P,W as mt,m as S,t as L,l as et,K as pt,Z as z,X as ht,ae as gt,A as G,D as K,H as R,J,k as at,w as B,Y as rt,O as ot,V as j,q as U,h as nt}from"../chunks/vendor.6XGvI_6f.js";import{V as vt}from"../chunks/VersionForm.P9f5xx1N.js";import{w as bt,F as wt,x as $t,y as yt,q as xt}from"../chunks/graphql.XSrPrpK2.js";import{M as It}from"../chunks/MetaDescriptors.1jIQqh3N.js";import{E as Et}from"../chunks/EditCompatibilityForm.QA2nST0U.js";const Vt=async({params:n})=>({...n}),Lt=Object.freeze(Object.defineProperty({__proto__:null,load:Vt},Symbol.toStringTag,{value:"Module"})),kt=async(n,t,r,e,o)=>{const p=Math.ceil(n.size/1e7),h=new Array(p).fill(0).map((s,c)=>c).reverse(),f=(s,c,b)=>o.mutation(yt,{modId:t,versionId:b,part:c,file:s}).toPromise(),$=10;let l=0,a=0;const d=s=>{if(l>=$||!h.length)return;const c=h.pop(),b=c*1e7,w=n.slice(b,b+1e7);return l+=1,Promise.all([f(w,c+1,s).then(()=>(l-=1,e.set({total:p,uploaded:p-h.length-l}),d(s))).catch(V=>{if(console.error("Upload failed:",V),l-=1,h.push(c),a+=1,a<5)return d(s);throw new Error("Failed uploading after 5 attempts")}),d(s)])};return o.mutation(bt,{modId:t}).toPromise().then(async s=>(e.set({total:p,uploaded:0}),await d(s.data.createVersion),s.data.createVersion)).then(s=>(console.log("Finalizing",{versionID:s}),o.mutation(wt,{modId:t,versionId:s,version:r}).toPromise().then(()=>new Promise((c,b)=>{let w=0,V=lt({query:$t,client:o,variables:{modId:t,versionId:s},requestPolicy:"network-only"});const g=setInterval(()=>{if(w==60)return clearInterval(g),b(new Error("Timed out waiting for mod processing"));V.pause(),V.resume(),w++},1e4),N=V.subscribe(E=>{if(!E.fetching){if(E.error){clearInterval(g),b(new Error(E.error.message)),setTimeout(N);return}E.data?.checkVersionUploadState?.version?.id&&(N(),clearInterval(g),c(E.data.checkVersionUploadState))}})})))).catch(s=>{throw console.error(s),s})};function st(n){let t,r;return t=new It({props:{description:"Creating a new version of mod "+n[0].data.mod.name,title:"New version of mod "+n[0].data.mod.name}}),{c(){G(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,o){R(t,e,o),r=!0},p(e,o){const v={};o&1&&(v.description="Creating a new version of mod "+e[0].data.mod.name),o&1&&(v.title="New version of mod "+e[0].data.mod.name),t.$set(v)},i(e){r||(S(t.$$.fragment,e),r=!0)},o(e){L(t.$$.fragment,e),r=!1},d(e){J(t,e)}}}function Dt(n){let t=n[0].data.mod.name+"",r;return{c(){r=O(t)},l(e){r=H(e,t)},m(e,o){P(e,r,o)},p(e,o){o&1&&t!==(t=e[0].data.mod.name+"")&&j(r,t)},d(e){e&&m(r)}}}function Tt(n){let t;return{c(){t=O("...")},l(r){t=H(r,"...")},m(r,e){P(r,t,e)},p:U,d(r){r&&m(t)}}}function Pt(n){let t,r,e,o,v="<span>Edit Compatibility Info</span>",p,h,f,$;t=new vt({props:{onSubmit:n[6],modReference:n[0].data.mod.mod_reference,submitIcon:"add_circle"}});let l=n[1]&&it(n);return f=new Et({props:{mod:n[0].data.mod,modId:n[0].data.mod.id}}),f.$on("fail",n[11]),f.$on("submit",n[12]),{c(){G(t.$$.fragment),r=_(),l&&l.c(),e=_(),o=x("div"),o.innerHTML=v,p=_(),h=x("div"),G(f.$$.fragment),this.h()},l(a){K(t.$$.fragment,a),r=q(a),l&&l.l(a),e=q(a),o=I(a,"DIV",{class:!0,"data-svelte-h":!0}),W(o)!=="svelte-uk6ytd"&&(o.innerHTML=v),p=q(a),h=I(a,"DIV",{class:!0});var d=D(h);K(f.$$.fragment,d),d.forEach(m),this.h()},h(){T(o,"class","p-4"),T(h,"class","card p-4")},m(a,d){R(t,a,d),P(a,r,d),l&&l.m(a,d),P(a,e,d),P(a,o,d),P(a,p,d),P(a,h,d),R(f,h,null),$=!0},p(a,d){const s={};d&1&&(s.modReference=a[0].data.mod.mod_reference),t.$set(s),a[1]?l?l.p(a,d):(l=it(a),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null);const c={};d&1&&(c.mod=a[0].data.mod),d&1&&(c.modId=a[0].data.mod.id),f.$set(c)},i(a){$||(S(t.$$.fragment,a),S(f.$$.fragment,a),$=!0)},o(a){L(t.$$.fragment,a),L(f.$$.fragment,a),$=!1},d(a){a&&(m(r),m(e),m(o),m(p),m(h)),J(t,a),l&&l.d(a),J(f)}}}function Nt(n){let t,r,e=n[0].error.message+"",o;return{c(){t=x("p"),r=O("Oh no... "),o=O(e)},l(v){t=I(v,"P",{});var p=D(t);r=H(p,"Oh no... "),o=H(p,e),p.forEach(m)},m(v,p){P(v,t,p),y(t,r),y(t,o)},p(v,p){p&1&&e!==(e=v[0].error.message+"")&&j(o,e)},i:U,o:U,d(v){v&&m(t)}}}function Ct(n){let t,r="Loading...";return{c(){t=x("p"),t.textContent=r},l(e){t=I(e,"P",{"data-svelte-h":!0}),W(t)!=="svelte-qdsr2u"&&(t.textContent=r)},m(e,o){P(e,t,o)},p:U,i:U,o:U,d(e){e&&m(t)}}}function it(n){let t,r,e,o,v,p,h,f,$=n[2].toFixed(0)+"",l,a,d,s,c;return{c(){t=x("div"),r=x("div"),e=x("div"),o=x("span"),v=O(n[1]),p=_(),h=x("div"),f=x("span"),l=O($),a=O("%"),d=_(),s=x("div"),c=x("div"),this.h()},l(b){t=I(b,"DIV",{class:!0});var w=D(t);r=I(w,"DIV",{class:!0});var V=D(r);e=I(V,"DIV",{});var g=D(e);o=I(g,"SPAN",{class:!0});var N=D(o);v=H(N,n[1]),N.forEach(m),g.forEach(m),p=q(V),h=I(V,"DIV",{class:!0});var E=D(h);f=I(E,"SPAN",{class:!0});var i=D(f);l=H(i,$),a=H(i,"%"),i.forEach(m),E.forEach(m),V.forEach(m),d=q(w),s=I(w,"DIV",{class:!0});var C=D(s);c=I(C,"DIV",{style:!0,class:!0}),D(c).forEach(m),C.forEach(m),w.forEach(m),this.h()},h(){T(o,"class","inline-block rounded-full bg-yellow-600 px-2 py-1 text-xs font-semibold uppercase text-white"),T(f,"class","inline-block text-xs font-semibold text-white"),T(h,"class","text-right"),T(r,"class","mb-2 flex items-center justify-between"),nt(c,"width",n[2].toFixed(0)+"%"),T(c,"class","flex flex-col justify-center whitespace-nowrap bg-yellow-600 text-center text-white shadow-none"),T(s,"class","mb-4 flex h-2 overflow-hidden rounded bg-gray-600 text-xs"),T(t,"class","relative pt-4")},m(b,w){P(b,t,w),y(t,r),y(r,e),y(e,o),y(o,v),y(r,p),y(r,h),y(h,f),y(f,l),y(f,a),y(t,d),y(t,s),y(s,c)},p(b,w){w&2&&j(v,b[1]),w&4&&$!==($=b[2].toFixed(0)+"")&&j(l,$),w&4&&nt(c,"width",b[2].toFixed(0)+"%")},d(b){b&&m(t)}}}function Ft(n){let t,r,e,o,v,p,h,f,$=`<span class="material-icons pr-2">arrow_back</span>
      Back to Mod`,l,a,d,s,c,b,w,V,g=!n[0].fetching&&!n[0].error&&n[0].data.mod&&st(n);function N(u,k){if(u[0].fetching)return Tt;if(!u[0].error)return Dt}let E=N(n),i=E&&E(n);const C=[Ct,Nt,Pt],F=[];function X(u,k){return u[0].fetching?0:u[0].error?1:2}return s=X(n),c=F[s]=C[s](n),{c(){g&&g.c(),t=tt(),r=_(),e=x("div"),o=x("h1"),v=O(`New Version for
    `),i&&i.c(),p=_(),h=x("div"),f=x("button"),f.innerHTML=$,l=_(),a=x("div"),d=x("section"),c.c(),this.h()},l(u){const k=ut("svelte-nx2zao",document.head);g&&g.l(k),t=tt(),k.forEach(m),r=q(u),e=I(u,"DIV",{class:!0});var M=D(e);o=I(M,"H1",{class:!0});var A=D(o);v=H(A,`New Version for
    `),i&&i.l(A),A.forEach(m),p=q(M),h=I(M,"DIV",{});var Y=D(h);f=I(Y,"BUTTON",{class:!0,title:!0,"data-svelte-h":!0}),W(f)!=="svelte-3dudi9"&&(f.innerHTML=$),Y.forEach(m),M.forEach(m),l=q(u),a=I(u,"DIV",{class:!0});var Z=D(a);d=I(Z,"SECTION",{});var Q=D(d);c.l(Q),Q.forEach(m),Z.forEach(m),this.h()},h(){T(o,"class","my-4 text-4xl font-bold"),T(f,"class","variant-ghost-primary btn"),T(f,"title","View the description page for this mod"),T(e,"class","flex h-auto flex-wrap items-center justify-between"),T(a,"class","card p-4")},m(u,k){g&&g.m(document.head,null),y(document.head,t),P(u,r,k),P(u,e,k),y(e,o),y(o,v),i&&i.m(o,null),y(e,p),y(e,h),y(h,f),P(u,l,k),P(u,a,k),y(a,d),F[s].m(d,null),b=!0,w||(V=mt(f,"click",n[10]),w=!0)},p(u,[k]){!u[0].fetching&&!u[0].error&&u[0].data.mod?g?(g.p(u,k),k&1&&S(g,1)):(g=st(u),g.c(),S(g,1),g.m(t.parentNode,t)):g&&(at(),L(g,1,1,()=>{g=null}),et()),E===(E=N(u))&&i?i.p(u,k):(i&&i.d(1),i=E&&E(u),i&&(i.c(),i.m(o,null)));let M=s;s=X(u),s===M?F[s].p(u,k):(at(),L(F[M],1,1,()=>{F[M]=null}),et(),c=F[s],c?c.p(u,k):(c=F[s]=C[s](u),c.c()),S(c,1),c.m(d,null))},i(u){b||(S(g),S(c),b=!0)},o(u){L(g),L(c),b=!1},d(u){u&&(m(r),m(e),m(l),m(a)),g&&g.d(u),m(t),i&&i.d(),F[s].d(),w=!1,V()}}}function Mt(n,t,r){let e,o,v,{data:p}=t;const{modId:h}=p,f=pt(),$=B("");z(n,$,i=>r(1,o=i));const l=B(0);z(n,l,i=>r(2,v=i));const a=B();a.subscribe(i=>{i&&(i.uploaded===i.total?($.set("Processing..."),l.set(100)):($.set(`Uploading: ${i.uploaded}/${i.total}`),l.set(i.uploaded/i.total*100)))});const d=ht(),s=lt({query:xt,client:f,variables:{mod:h}});z(n,s,i=>r(0,e=i));const c=async i=>kt(i.file,e.data.mod.id,{changelog:i.changelog,stability:i.stability},a,f).then(C=>{d.trigger({message:"Version created",background:"variant-filled-success",timeout:5e3}),rt(ot+"/mod/"+h+"/version/"+C.version.id)}).catch(C=>{console.error(C),d.trigger({message:"Error creating version: "+C.message,background:"variant-filled-error",autohide:!1}),$.set("")}),b=()=>{rt(ot+"/mod/"+h)},w={type:"confirm",title:"Go Back?",buttonTextCancel:"Keep Editing",buttonTextConfirm:"Go Back",body:"Going back will discard any unsaved changes. Are you sure you wish to continue?",response:i=>{i&&b()}},V=gt(),g=()=>V.trigger(w),N=()=>{alert("Failed to update compatibility information, check browser console for more info.")},E=()=>{alert("Mod compatibility data updated. Don't forget to upload the version too!")};return n.$$set=i=>{"data"in i&&r(9,p=i.data)},[e,o,v,$,l,s,c,w,V,p,g,N,E]}class Ut extends ct{constructor(t){super(),dt(this,t,Mt,Ft,ft,{data:9})}}export{Ut as component,Lt as universal};
//# sourceMappingURL=18.Iz4Vl9I0.js.map