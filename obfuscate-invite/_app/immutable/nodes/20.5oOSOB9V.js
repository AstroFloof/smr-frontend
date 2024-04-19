import{S as Ve,i as ye,d as M,s as ke,v as xe,F as te,_ as ne,aj as oe,G as se,$ as z,H as F,a0 as we,f as ie,b as A,e as x,W as K,K as Ee,j as g,k as H,g as w,h as B,M as L,X as U,N as T,m as E,Q as k,n as j,Z as Se,r as _,t as O,q as re,u as R,x as Ie,J as de,L as fe,O as me,R as ge,p as ae,Y as Ce}from"../chunks/vendor.KW3uvniC.js";import{t as ce,u as le}from"../chunks/graphql.NT0BIh3j.js";import{V as pe}from"../chunks/VersionForm.4TbxJDQK.js";import{M as ve}from"../chunks/MetaDescriptors.8hVu6LNi.js";const Pe=async({params:o})=>({...o}),Me=Object.freeze(Object.defineProperty({__proto__:null,load:Pe},Symbol.toStringTag,{value:"Module"})),{console:ue}=we,S="src/routes/mod/[modId]/version/[versionId]/edit/+page.svelte";function J(o){let e,s;e=new ve({props:{description:"Editing mod version "+o[0].data.getVersion.mod.name+" "+o[0].data.getVersion.version,title:"Edit mod version "+o[0].data.getVersion.mod.name+" "+o[0].data.getVersion.version},$$inline:!0});const i={c:function(){de(e.$$.fragment)},l:function(t){fe(e.$$.fragment,t)},m:function(t,c){me(e,t,c),s=!0},p:function(t,c){const r={};c&1&&(r.description="Editing mod version "+t[0].data.getVersion.mod.name+" "+t[0].data.getVersion.version),c&1&&(r.title="Edit mod version "+t[0].data.getVersion.mod.name+" "+t[0].data.getVersion.version),e.$set(r)},i:function(t){s||(_(e.$$.fragment,t),s=!0)},o:function(t){O(e.$$.fragment,t),s=!1},d:function(t){ge(e,t)}};return M("SvelteRegisterBlock",{block:i,id:J.name,type:"if",source:"(66:2) {#if !$version.fetching && !$version.error && $version.data.getVersion}",ctx:o}),i}function $e(o){let e,s;e=new pe({props:{onSubmit:o[3],initialValues:o[1],modReference:o[0].data.getVersion.mod.mod_reference,editing:!0,submitText:"Save",submitIcon:"save"},$$inline:!0});const i={c:function(){de(e.$$.fragment)},l:function(t){fe(e.$$.fragment,t)},m:function(t,c){me(e,t,c),s=!0},p:function(t,c){const r={};c&2&&(r.initialValues=t[1]),c&1&&(r.modReference=t[0].data.getVersion.mod.mod_reference),e.$set(r)},i:function(t){s||(_(e.$$.fragment,t),s=!0)},o:function(t){O(e.$$.fragment,t),s=!1},d:function(t){ge(e,t)}};return M("SvelteRegisterBlock",{block:i,id:$e.name,type:"else",source:"(88:4) {:else}",ctx:o}),i}function he(o){let e,s,i=o[0].error.message+"",n;const t={c:function(){e=x("p"),s=K("Oh no... "),n=K(i),this.h()},l:function(r){e=w(r,"P",{});var d=B(e);s=U(d,"Oh no... "),n=U(d,i),d.forEach(g),this.h()},h:function(){E(e,S,99,6,2750)},m:function(r,d){j(r,e,d),k(e,s),k(e,n)},p:function(r,d){d&1&&i!==(i=r[0].error.message+"")&&Ce(n,i)},i:R,o:R,d:function(r){r&&g(e)}};return M("SvelteRegisterBlock",{block:t,id:he.name,type:"if",source:"(86:29) ",ctx:o}),t}function be(o){let e,s="Loading...";const i={c:function(){e=x("p"),e.textContent=s,this.h()},l:function(t){e=w(t,"P",{"data-svelte-h":!0}),L(e)!=="svelte-qdsr2u"&&(e.textContent=s),this.h()},h:function(){E(e,S,97,6,2696)},m:function(t,c){j(t,e,c)},p:R,i:R,o:R,d:function(t){t&&g(e)}};return M("SvelteRegisterBlock",{block:i,id:be.name,type:"if",source:"(84:4) {#if $version.fetching}",ctx:o}),i}function Q(o){let e,s,i,n,t="Edit Version",c,r,d,h,D="arrow_back",N,b,p,V,f,m,I,P,q,u=!o[0].fetching&&!o[0].error&&o[0].data.getVersion&&J(o);const a=[be,he,$e],v=[];function W(y,l){return y[0].fetching?0:y[0].error?1:2}f=W(o),m=v[f]=a[f](o);const X={c:function(){u&&u.c(),e=ie(),s=A(),i=x("div"),n=x("h1"),n.textContent=t,c=A(),r=x("div"),d=x("button"),h=x("span"),h.textContent=D,N=K(`
      Back to Versions`),b=A(),p=x("div"),V=x("section"),m.c(),this.h()},l:function(l){const $=Ee("svelte-wzsk0g",document.head);u&&u.l($),e=ie(),$.forEach(g),s=H(l),i=w(l,"DIV",{class:!0});var C=B(i);n=w(C,"H1",{class:!0,"data-svelte-h":!0}),L(n)!=="svelte-142h57n"&&(n.textContent=t),c=H(C),r=w(C,"DIV",{});var Y=B(r);d=w(Y,"BUTTON",{class:!0});var G=B(d);h=w(G,"SPAN",{class:!0,"data-svelte-h":!0}),L(h)!=="svelte-qua3zr"&&(h.textContent=D),N=U(G,`
      Back to Versions`),G.forEach(g),Y.forEach(g),C.forEach(g),b=H(l),p=w(l,"DIV",{class:!0});var Z=B(p);V=w(Z,"SECTION",{});var ee=B(V);m.l(ee),ee.forEach(g),Z.forEach(g),this.h()},h:function(){T(n,"class","my-4 text-4xl font-bold"),E(n,S,86,2,2364),T(h,"class","material-icons pr-2"),E(h,S,89,6,2526),T(d,"class","variant-ghost-primary btn"),E(d,S,88,4,2430),E(r,S,87,2,2420),T(i,"class","flex h-auto flex-wrap items-center justify-between"),E(i,S,85,0,2297),E(V,S,95,2,2652),T(p,"class","card p-4"),E(p,S,94,0,2627)},m:function(l,$){u&&u.m(document.head,null),k(document.head,e),j(l,s,$),j(l,i,$),k(i,n),k(i,c),k(i,r),k(r,d),k(d,h),k(d,N),j(l,b,$),j(l,p,$),k(p,V),v[f].m(V,null),I=!0,P||(q=Se(d,"click",o[8],!1,!1,!1,!1),P=!0)},p:function(l,[$]){!l[0].fetching&&!l[0].error&&l[0].data.getVersion?u?(u.p(l,$),$&1&&_(u,1)):(u=J(l),u.c(),_(u,1),u.m(e.parentNode,e)):u&&(ae(),O(u,1,1,()=>{u=null}),re());let C=f;f=W(l),f===C?v[f].p(l,$):(ae(),O(v[C],1,1,()=>{v[C]=null}),re(),m=v[f],m?m.p(l,$):(m=v[f]=a[f](l),m.c()),_(m,1),m.m(V,null))},i:function(l){I||(_(u),_(m),I=!0)},o:function(l){O(u),O(m),I=!1},d:function(l){l&&(g(s),g(i),g(b),g(p)),u&&u.d(l),g(e),v[f].d(),P=!1,q()}};return M("SvelteRegisterBlock",{block:X,id:Q.name,type:"component",source:"",ctx:o}),X}function _e(o,e,s){let i,n,t,c,r,d=R,h=()=>(d(),d=Ie(t,a=>s(0,r=a)),t);o.$$.on_destroy.push(()=>d());let{$$slots:D={},$$scope:N}=e;xe("Page",D,[]);let{data:b}=e;const p=te(),V=ne(),f=async a=>p.mutation(le,{versionId:n,version:a}).toPromise().then(v=>{if(v.error)console.error(v.error.message),V.trigger({message:"Error editing version: "+v.error.message,background:"variant-filled-error",autohide:!1});else return V.trigger({message:"Version updated",background:"variant-filled-success",timeout:5e3}),z(F+"/mod/"+i+"/version/"+n)}),m=()=>{z(F+"/mod/"+i+"/version/"+n)},I={type:"confirm",title:"Go Back?",buttonTextCancel:"Keep Editing",buttonTextConfirm:"Go Back",body:"Going back will discard any unsaved changes. Are you sure you wish to continue?",response:a=>{a&&m()}},P=oe();o.$$.on_mount.push(function(){b===void 0&&!("data"in e||o.$$.bound[o.$$.props.data])&&ue.warn("<Page> was created without expected prop 'data'")});const q=["data"];Object.keys(e).forEach(a=>{!~q.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&ue.warn(`<Page> was created with unknown prop '${a}'`)});const u=()=>P.trigger(I);return o.$$set=a=>{"data"in a&&s(6,b=a.data)},o.$capture_state=()=>({queryStore:se,getContextClient:te,GetModVersionDocument:ce,UpdateVersionDocument:le,goto:z,VersionForm:pe,base:F,MetaDescriptors:ve,getModalStore:oe,getToastStore:ne,data:b,client:p,toastStore:V,onSubmit:f,goBackFn:m,backModal:I,modalStore:P,versionId:n,modId:i,initialValues:c,version:t,$version:r}),o.$inject_state=a=>{"data"in a&&s(6,b=a.data),"versionId"in a&&s(7,n=a.versionId),"modId"in a&&(i=a.modId),"initialValues"in a&&s(1,c=a.initialValues),"version"in a&&h(s(2,t=a.version))},e&&"$$inject"in e&&o.$inject_state(e.$$inject),o.$$.update=()=>{o.$$.dirty&64&&s(7,{modId:i,versionId:n}=b,n),o.$$.dirty&128&&h(s(2,t=se({query:ce,client:p,variables:{version:n}}))),o.$$.dirty&1&&s(1,c=r.data?{...r.data.getVersion,logo:void 0}:void 0)},[r,c,t,f,I,P,b,n,u]}class Te extends Ve{constructor(e){super(e),ye(this,e,_e,Q,ke,{data:6}),M("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:Q.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Te as component,Me as universal};
//# sourceMappingURL=20.5oOSOB9V.js.map
