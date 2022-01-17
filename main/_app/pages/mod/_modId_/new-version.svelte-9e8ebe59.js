import{S as x,i as ee,s as te,w as T,x as z,y as q,q as E,o as C,B as A,ay as re,M as oe,N as ne,l as U,k as I,e as y,t as M,a2 as se,d as _,m as F,c as S,a as j,h as P,b as N,X as v,g as w,p as H,O as ae,P as O,R as X,T as Z,Q as L,aC as ie,n as J,D as B,j as Q,Z as D,f as K}from"../../../chunks/vendor-1ba4e540.js";import{p as le}from"../../../chunks/routing-689f9c1f.js";import{T as ce}from"../../../chunks/Toast-d9f74c91.js";import{g as fe}from"../../../chunks/navigation-b10cf5bf.js";import{V as ue}from"../../../chunks/VersionForm-efa2cc69.js";import{x as de,C as pe,y as me,z as _e,F as he}from"../../../chunks/graphql-a19cc583.js";import{b as ge}from"../../../chunks/paths-396f020f.js";import{M as be}from"../../../chunks/MetaDescriptors-28c89374.js";import"../../../chunks/singletons-4a680913.js";import"../../../chunks/uplugin-79807cf9.js";import"../../../chunks/api-82c76902.js";import"../../../chunks/user-3cdd149b.js";import"../../../chunks/forms-91d48c56.js";import"../../../chunks/markdown-1c881021.js";import"../../../chunks/formatting-24701f16.js";import"../../../chunks/stores-db79f75e.js";const ke=async(i,e,r,t,n)=>{const a=1e7,o=Math.ceil(i.size/a),u=new Array(o).fill(0).map((p,f)=>f).reverse(),l=(p,f,b)=>n.uploadVersionPart({modId:e,versionId:b,part:f,file:p}),g=10;let h=0,d=0;const $=p=>{if(h>=g||!u.length)return;const f=u.pop(),b=f*a,k=i.slice(b,b+a);return h+=1,Promise.all([l(k,f+1,p).then(()=>(h-=1,t.set({total:o,uploaded:o-u.length-h}),$(p))).catch(s=>{if(console.error("Upload failed:",s),h-=1,u.push(f),d+=1,d<5)return $(p);throw new Error("Failed uploading after 5 attempts")}),$(p)])};return n.createVersion({modId:e}).then(async p=>(t.set({total:o,uploaded:0}),await $(p.data.createVersion),p.data.createVersion)).then(p=>(console.log("Finalizing",{versionID:p}),n.finalizeCreateVersion({modId:e,versionId:p,version:r}).then(()=>new Promise((f,b)=>{let k=0;const s=setInterval(()=>{if(k==60)return clearInterval(s),b(new Error("Timed out waiting for mod processing"));n.checkVersionUploadState.reexecute({requestPolicy:"network-only"}),k++},1e4);n.checkVersionUploadState.variables.versionId=p;const m=n.checkVersionUploadState.subscribe(c=>{if(!c.fetching){if(c.error){clearInterval(s),b(new Error(c.error.message)),setTimeout(m);return}!c.data||!c.data.checkVersionUploadState||!c.data.checkVersionUploadState.version||!c.data.checkVersionUploadState.version.id||(m(),clearInterval(s),f(c.data.checkVersionUploadState))}})})))).catch(p=>{throw console.error(p),p})};function W(i){let e,r;return e=new be({props:{description:"Creating a new version of mod "+i[2].data.getMod.name,title:"New version of mod "+i[2].data.getMod.name}}),{c(){T(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){q(e,t,n),r=!0},p(t,n){const a={};n&4&&(a.description="Creating a new version of mod "+t[2].data.getMod.name),n&4&&(a.title="New version of mod "+t[2].data.getMod.name),e.$set(a)},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){C(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function ve(i){let e=i[2].data.getMod.name+"",r;return{c(){r=M(e)},l(t){r=P(t,e)},m(t,n){w(t,r,n)},p(t,n){n&4&&e!==(e=t[2].data.getMod.name+"")&&Q(r,e)},d(t){t&&_(r)}}}function $e(i){let e;return{c(){e=M("...")},l(r){e=P(r,"...")},m(r,t){w(r,e,t)},p:D,d(r){r&&_(e)}}}function we(i){let e,r,t,n;e=new ue({props:{onSubmit:i[8],modReference:i[2].data.getMod.mod_reference}});let a=i[3]&&Y(i);return{c(){T(e.$$.fragment),r=I(),a&&a.c(),t=U()},l(o){z(e.$$.fragment,o),r=F(o),a&&a.l(o),t=U()},m(o,u){q(e,o,u),w(o,r,u),a&&a.m(o,u),w(o,t,u),n=!0},p(o,u){const l={};u&4&&(l.modReference=o[2].data.getMod.mod_reference),e.$set(l),o[3]?a?a.p(o,u):(a=Y(o),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},i(o){n||(E(e.$$.fragment,o),n=!0)},o(o){C(e.$$.fragment,o),n=!1},d(o){A(e,o),o&&_(r),a&&a.d(o),o&&_(t)}}}function Ve(i){let e,r,t=i[2].error.message+"",n;return{c(){e=y("p"),r=M("Oh no... "),n=M(t)},l(a){e=S(a,"P",{});var o=j(e);r=P(o,"Oh no... "),n=P(o,t),o.forEach(_)},m(a,o){w(a,e,o),v(e,r),v(e,n)},p(a,o){o&4&&t!==(t=a[2].error.message+"")&&Q(n,t)},i:D,o:D,d(a){a&&_(e)}}}function ye(i){let e,r;return{c(){e=y("p"),r=M("Loading...")},l(t){e=S(t,"P",{});var n=j(e);r=P(n,"Loading..."),n.forEach(_)},m(t,n){w(t,e,n),v(e,r)},p:D,i:D,o:D,d(t){t&&_(e)}}}function Y(i){let e,r,t,n,a,o,u,l,g=i[4].toFixed(0)+"",h,d,$,p,f;return{c(){e=y("div"),r=y("div"),t=y("div"),n=y("span"),a=M(i[3]),o=I(),u=y("div"),l=y("span"),h=M(g),d=M("%"),$=I(),p=y("div"),f=y("div"),this.h()},l(b){e=S(b,"DIV",{class:!0});var k=j(e);r=S(k,"DIV",{class:!0});var s=j(r);t=S(s,"DIV",{});var m=j(t);n=S(m,"SPAN",{class:!0});var c=j(n);a=P(c,i[3]),c.forEach(_),m.forEach(_),o=F(s),u=S(s,"DIV",{class:!0});var V=j(u);l=S(V,"SPAN",{class:!0});var R=j(l);h=P(R,g),d=P(R,"%"),R.forEach(_),V.forEach(_),s.forEach(_),$=F(k),p=S(k,"DIV",{class:!0});var G=j(p);f=S(G,"DIV",{style:!0,class:!0}),j(f).forEach(_),G.forEach(_),k.forEach(_),this.h()},h(){N(n,"class","text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-yellow-600"),N(l,"class","text-xs font-semibold inline-block text-white"),N(u,"class","text-right"),N(r,"class","flex mb-2 items-center justify-between"),K(f,"width",i[4].toFixed(0)+"%"),N(f,"class","shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-600"),N(p,"class","overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-600"),N(e,"class","relative pt-4")},m(b,k){w(b,e,k),v(e,r),v(r,t),v(t,n),v(n,a),v(r,o),v(r,u),v(u,l),v(l,h),v(l,d),v(e,$),v(e,p),v(p,f)},p(b,k){k&8&&Q(a,b[3]),k&16&&g!==(g=b[4].toFixed(0)+"")&&Q(h,g),k&16&&K(f,"width",b[4].toFixed(0)+"%")},d(b){b&&_(e)}}}function Se(i){let e,r,t,n;const a=[ye,Ve,we],o=[];function u(l,g){return l[2].fetching?0:l[2].error?1:2}return e=u(i),r=o[e]=a[e](i),{c(){r.c(),t=U()},l(l){r.l(l),t=U()},m(l,g){o[e].m(l,g),w(l,t,g),n=!0},p(l,g){let h=e;e=u(l),e===h?o[e].p(l,g):(J(),C(o[h],1,1,()=>{o[h]=null}),H(),r=o[e],r?r.p(l,g):(r=o[e]=a[e](l),r.c()),E(r,1),r.m(t.parentNode,t))},i(l){n||(E(r),n=!0)},o(l){C(r),n=!1},d(l){o[e].d(l),l&&_(t)}}}function je(i){let e,r;return e=new ie({props:{$$slots:{default:[Se]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){q(e,t,n),r=!0},p(t,n){const a={};n&65564&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){C(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Ee(i){let e,r;return{c(){e=y("span"),r=M(i[1])},l(t){e=S(t,"SPAN",{});var n=j(e);r=P(n,i[1]),n.forEach(_)},m(t,n){w(t,e,n),v(e,r)},p(t,n){n&2&&Q(r,t[1])},d(t){t&&_(e)}}}function Me(i){let e,r,t,n,a,o,u,l,g,h,d=!i[2].fetching&&!i[2].error&&i[2].data.getMod&&W(i);function $(s,m){if(s[2].fetching)return $e;if(!s[2].error)return ve}let p=$(i),f=p&&p(i);o=new re({props:{$$slots:{default:[je]},$$scope:{ctx:i}}});function b(s){i[10](s)}let k={$$slots:{default:[Ee]},$$scope:{ctx:i}};return i[0]!==void 0&&(k.running=i[0]),l=new ce({props:k}),oe.push(()=>ne(l,"running",b)),{c(){d&&d.c(),e=U(),r=I(),t=y("h1"),n=M(`New Version for
  `),f&&f.c(),a=I(),T(o.$$.fragment),u=I(),T(l.$$.fragment),this.h()},l(s){const m=se('[data-svelte="svelte-11v8x8"]',document.head);d&&d.l(m),e=U(),m.forEach(_),r=F(s),t=S(s,"H1",{class:!0});var c=j(t);n=P(c,`New Version for
  `),f&&f.l(c),c.forEach(_),a=F(s),z(o.$$.fragment,s),u=F(s),z(l.$$.fragment,s),this.h()},h(){N(t,"class","text-4xl my-4 font-bold")},m(s,m){d&&d.m(document.head,null),v(document.head,e),w(s,r,m),w(s,t,m),v(t,n),f&&f.m(t,null),w(s,a,m),q(o,s,m),w(s,u,m),q(l,s,m),h=!0},p(s,[m]){!s[2].fetching&&!s[2].error&&s[2].data.getMod?d?(d.p(s,m),m&4&&E(d,1)):(d=W(s),d.c(),E(d,1),d.m(e.parentNode,e)):d&&(J(),C(d,1,1,()=>{d=null}),H()),p===(p=$(s))&&f?f.p(s,m):(f&&f.d(1),f=p&&p(s),f&&(f.c(),f.m(t,null)));const c={};m&65564&&(c.$$scope={dirty:m,ctx:s}),o.$set(c);const V={};m&65538&&(V.$$scope={dirty:m,ctx:s}),!g&&m&1&&(g=!0,V.running=s[0],ae(()=>g=!1)),l.$set(V)},i(s){h||(E(d),E(o.$$.fragment,s),E(l.$$.fragment,s),h=!0)},o(s){C(d),C(o.$$.fragment,s),C(l.$$.fragment,s),h=!1},d(s){d&&d.d(s),_(e),s&&_(r),s&&_(t),f&&f.d(),s&&_(a),A(o,s),s&&_(u),A(l,s)}}}const He=le();function Pe(i,e,r){let t,n,a,{modId:o}=e;const u=B("");O(i,u,c=>r(3,n=c));const l=B(0);O(i,l,c=>r(4,a=c));const g=B();g.subscribe(c=>{c&&(c.uploaded===c.total?(u.set("Processing..."),l.set(100)):(u.set(`Uploading: ${c.uploaded}/${c.total}`),l.set(c.uploaded/c.total*100)))});let h="",d=!1;const $=X(de,{mod:o});O(i,$,c=>r(2,t=c)),Z($);const p=L({query:me}),f=L({query:_e}),b=L({query:he}),k=X(pe,{versionId:void 0,modId:o},{pause:!0});Z(k);const s=async c=>ke(c.file,o,{changelog:c.changelog,stability:c.stability},g,{createVersion:p,uploadVersionPart:f,finalizeCreateVersion:b,checkVersionUploadState:k}).then(V=>{console.log({success:V}),fe(ge+"/mod/"+o+"/version/"+V.version.id)}).catch(V=>{console.error(V),r(1,h="Error creating version: "+V.message),r(0,d=!0),u.set("")});function m(c){d=c,r(0,d)}return i.$$set=c=>{"modId"in c&&r(9,o=c.modId)},i.$$.update=()=>{i.$$.dirty&1&&(d||r(1,h=""))},[d,h,t,n,a,u,l,$,s,o,m]}class Xe extends x{constructor(e){super();ee(this,e,Pe,Me,te,{modId:9})}}export{Xe as default,He as load};
//# sourceMappingURL=new-version.svelte-9e8ebe59.js.map