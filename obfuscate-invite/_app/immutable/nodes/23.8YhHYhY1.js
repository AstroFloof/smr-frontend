import{S as J,i as K,d as H,s as L,v as Q,_ as k,F as C,$ as E,H as G,a0 as V,J as N,b as P,e as p,K as q,L as D,j as l,k as O,g as h,M as z,h as y,N as I,m as v,O as M,n as f,Q as A,u as U,r as R,t as j,R as F}from"../chunks/vendor.KW3uvniC.js";import{h as _}from"../chunks/graphql.NT0BIh3j.js";import{G as T}from"../chunks/GuideForm.3K76_Aq7.js";import{M as B}from"../chunks/MetaDescriptors.8hVu6LNi.js";const{console:W}=V,w="src/routes/new-guide/+page.svelte";function b(d){let t,g,a,$="New Guide",i,s,r,o,n;t=new B({props:{description:"Creating a new guide",title:"New guide"},$$inline:!0}),o=new T({props:{onSubmit:d[0],submitIcon:"add_circle"},$$inline:!0});const c={c:function(){N(t.$$.fragment),g=P(),a=p("h1"),a.textContent=$,i=P(),s=p("div"),r=p("section"),N(o.$$.fragment),this.h()},l:function(e){const u=q("svelte-u6ds2",document.head);D(t.$$.fragment,u),u.forEach(l),g=O(e),a=h(e,"H1",{class:!0,"data-svelte-h":!0}),z(a)!=="svelte-156mhpn"&&(a.textContent=$),i=O(e),s=h(e,"DIV",{class:!0});var x=y(s);r=h(x,"SECTION",{});var S=y(r);D(o.$$.fragment,S),S.forEach(l),x.forEach(l),this.h()},h:function(){I(a,"class","my-4 text-4xl font-bold"),v(a,w,44,0,1296),v(r,w,47,2,1373),I(s,"class","card p-4"),v(s,w,46,0,1348)},m:function(e,u){M(t,document.head,null),f(e,g,u),f(e,a,u),f(e,i,u),f(e,s,u),A(s,r),M(o,r,null),n=!0},p:U,i:function(e){n||(R(t.$$.fragment,e),R(o.$$.fragment,e),n=!0)},o:function(e){j(t.$$.fragment,e),j(o.$$.fragment,e),n=!1},d:function(e){e&&(l(g),l(a),l(i),l(s)),F(t),F(o)}};return H("SvelteRegisterBlock",{block:c,id:b.name,type:"component",source:"",ctx:d}),c}function X(d,t,g){let{$$slots:a={},$$scope:$}=t;Q("Page",a,[]);const i=k(),s=C(),r=n=>{s.mutation(_,{guide:n}).toPromise().then(c=>{c.error?(console.error(c.error.message),i.trigger({message:"Error creating guide: "+c.error.message,background:"variant-filled-error",autohide:!1})):(i.trigger({message:"Guide created",background:"variant-filled-success",timeout:5e3}),E(G+"/guide/"+c.data.createGuide.id))})},o=[];return Object.keys(t).forEach(n=>{!~o.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&W.warn(`<Page> was created with unknown prop '${n}'`)}),d.$capture_state=()=>({getContextClient:C,NewGuideDocument:_,goto:E,GuideForm:T,base:G,MetaDescriptors:B,getToastStore:k,toastStore:i,client:s,onSubmit:r}),[r]}class ae extends J{constructor(t){super(t),K(this,t,X,b,L,{}),H("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:b.name})}}export{ae as component};
//# sourceMappingURL=23.8YhHYhY1.js.map
