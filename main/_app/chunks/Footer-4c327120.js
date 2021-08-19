import{S as r,i as s,s as e,e as a,t,k as l,c as o,a as c,g as i,d as h,n,b as d,f,a2 as v,a8 as u,Z as p,h as b,a7 as g}from"./vendor-d3bf6e8b.js";import{p as m,l as y}from"./stores-7ab1463b.js";import{a as E}from"./user-679d7474.js";import{b as x}from"./paths-6758d194.js";function w(r){let s,e,u,p,g,m,y,E,w,D=r[0].username+"",V=r[1]&&A();return{c(){s=a("div"),V&&V.c(),e=l(),u=a("a"),p=a("div"),g=t(D),m=l(),y=a("div"),this.h()},l(r){s=o(r,"DIV",{class:!0});var a=c(s);V&&V.l(a),e=n(a),u=o(a,"A",{href:!0,class:!0});var t=c(u);p=o(t,"DIV",{class:!0});var l=c(p);g=i(l,D),l.forEach(h),m=n(t),y=o(t,"DIV",{class:!0,style:!0}),c(y).forEach(h),t.forEach(h),a.forEach(h),this.h()},h(){d(p,"class","mr-3"),d(y,"class","rounded-full bg-cover w-7 h-7"),d(y,"style",E=`background-image: url("${r[0].avatar}")`),d(u,"href",w=x+"/user/"+r[0].id),d(u,"class","grid grid-flow-col hoverable px-4 content-center h-full cursor-pointer svelte-19btens"),d(s,"class","h-full grid grid-flow-col gap-4")},m(r,a){f(r,s,a),V&&V.m(s,null),v(s,e),v(s,u),v(u,p),v(p,g),v(u,m),v(u,y)},p(r,a){r[1]?V?V.p(r,a):(V=A(),V.c(),V.m(s,e)):V&&(V.d(1),V=null),1&a&&D!==(D=r[0].username+"")&&b(g,D),1&a&&E!==(E=`background-image: url("${r[0].avatar}")`)&&d(y,"style",E),1&a&&w!==(w=x+"/user/"+r[0].id)&&d(u,"href",w)},d(r){r&&h(s),V&&V.d()}}}function D(r){let s,e,l,n;return{c(){s=a("button"),e=t("Log in / Sign Up"),this.h()},l(r){s=o(r,"BUTTON",{class:!0});var a=c(s);e=i(a,"Log in / Sign Up"),a.forEach(h),this.h()},h(){d(s,"class","py-2.5 px-4 hoverable cursor-pointer svelte-19btens")},m(a,t){f(a,s,t),v(s,e),l||(n=g(s,"click",r[4]),l=!0)},p:u,d(r){r&&h(s),l=!1,n()}}}function A(r){let s,e,l,n;return{c(){s=a("a"),e=a("div"),l=t("Admin"),this.h()},l(r){s=o(r,"A",{href:!0,class:!0});var a=c(s);e=o(a,"DIV",{});var t=c(e);l=i(t,"Admin"),t.forEach(h),a.forEach(h),this.h()},h(){d(s,"href",n=x+"/admin"),d(s,"class","grid grid-flow-col hoverable px-4 content-center h-full cursor-pointer svelte-19btens")},m(r,a){f(r,s,a),v(s,e),v(e,l)},p:u,d(r){r&&h(s)}}}function V(r){let s,e,p,b,g,m,y,E,A,V,I,S,M,$,k,j,T,P,L,G,U,B,O,z,H,J,N,R,W;function _(r,s){return null===r[0]?D:w}let F=_(r),Z=F(r);return{c(){s=a("div"),e=a("a"),p=t("SMR"),b=l(),g=a("div"),m=a("a"),y=a("div"),E=t("Browse All Mods"),A=l(),V=a("a"),I=a("div"),S=t("Modding Docs"),M=l(),$=a("a"),k=a("div"),j=t("Download the Mod Manager"),T=l(),P=a("a"),L=a("div"),G=t("Guides"),U=l(),B=a("a"),O=a("div"),z=t("Tools"),H=l(),J=a("a"),N=a("div"),R=t("About"),W=l(),Z.c(),this.h()},l(r){s=o(r,"DIV",{class:!0});var a=c(s);e=o(a,"A",{class:!0,href:!0});var t=c(e);p=i(t,"SMR"),t.forEach(h),b=n(a),g=o(a,"DIV",{class:!0});var l=c(g);m=o(l,"A",{class:!0,href:!0});var d=c(m);y=o(d,"DIV",{class:!0});var f=c(y);E=i(f,"Browse All Mods"),f.forEach(h),d.forEach(h),A=n(l),V=o(l,"A",{class:!0,target:!0,href:!0});var v=c(V);I=o(v,"DIV",{class:!0});var u=c(I);S=i(u,"Modding Docs"),u.forEach(h),v.forEach(h),M=n(l),$=o(l,"A",{class:!0,target:!0,href:!0});var x=c($);k=o(x,"DIV",{class:!0});var w=c(k);j=i(w,"Download the Mod Manager"),w.forEach(h),x.forEach(h),T=n(l),P=o(l,"A",{class:!0,href:!0});var D=c(P);L=o(D,"DIV",{class:!0});var _=c(L);G=i(_,"Guides"),_.forEach(h),D.forEach(h),U=n(l),B=o(l,"A",{class:!0,href:!0});var F=c(B);O=o(F,"DIV",{class:!0});var q=c(O);z=i(q,"Tools"),q.forEach(h),F.forEach(h),H=n(l),J=o(l,"A",{class:!0,href:!0});var C=c(J);N=o(C,"DIV",{class:!0});var K=c(N);R=i(K,"About"),K.forEach(h),C.forEach(h),l.forEach(h),W=n(a),Z.l(a),a.forEach(h),this.h()},h(){d(e,"class","py-2.5 px-4 hoverable svelte-19btens"),d(e,"href",x+"/"),d(y,"class","border-r-2 border-white px-4"),d(m,"class","hoverable h-full grid content-center"+r[2]("/mods")+" svelte-19btens"),d(m,"href",x+"/mods"),d(I,"class","border-r-2 border-white px-4"),d(V,"class","hoverable h-full grid content-center svelte-19btens"),d(V,"target","_blank"),d(V,"href","https://docs.ficsit.app"),d(k,"class","border-r-2 border-white px-4 text-white"),d($,"class","font-bold hoverable h-full grid content-center svelte-19btens"),d($,"target","_blank"),d($,"href","https://smm.ficsit.app"),d(L,"class","border-r-2 border-white px-4"),d(P,"class","hoverable h-full grid content-center"+r[2]("/guides")+" svelte-19btens"),d(P,"href",x+"/guides"),d(O,"class","border-r-2 border-white px-4"),d(B,"class","hoverable h-full grid content-center"+r[2]("/tools")+" svelte-19btens"),d(B,"href",x+"/tools"),d(N,"class","px-4"),d(J,"class","hoverable h-full grid content-center"+r[2]("/about")+" svelte-19btens"),d(J,"href",x+"/about"),d(g,"class","grid grid-flow-col items-center h-full text-gray-400"),d(s,"class","menu flex justify-between bg-black items-center")},m(r,a){f(r,s,a),v(s,e),v(e,p),v(s,b),v(s,g),v(g,m),v(m,y),v(y,E),v(g,A),v(g,V),v(V,I),v(I,S),v(g,M),v(g,$),v($,k),v(k,j),v(g,T),v(g,P),v(P,L),v(L,G),v(g,U),v(g,B),v(B,O),v(O,z),v(g,H),v(g,J),v(J,N),v(N,R),v(s,W),Z.m(s,null)},p(r,[e]){F===(F=_(r))&&Z?Z.p(r,e):(Z.d(1),Z=F(r),Z&&(Z.c(),Z.m(s,null)))},i:u,o:u,d(r){r&&h(s),Z.d()}}}function I(r,s,e){let a,t,l,o;p(r,E,(r=>e(0,l=r))),p(r,m,(r=>e(3,o=r)));return r.$$.update=()=>{8&r.$$.dirty&&(a=o.path),1&r.$$.dirty&&e(1,t=!!l&&(l.roles.approveMods||l.roles.approveVersions||l.roles.editSMLVersions))},[l,t,r=>a.startsWith(r)?" active":"",o,()=>y.set(!0)]}class S extends r{constructor(r){super(),s(this,r,I,V,e,{})}}function M(r){let s,e,p,b,g;return{c(){s=a("div"),e=a("input"),p=l(),b=a("a"),g=t("See all tags / See all rewards"),this.h()},l(r){s=o(r,"DIV",{class:!0});var a=c(s);e=o(a,"INPUT",{class:!0,placeholder:!0}),p=n(a),b=o(a,"A",{class:!0,href:!0});var t=c(b);g=i(t,"See all tags / See all rewards"),t.forEach(h),a.forEach(h),this.h()},h(){d(e,"class","bg-transparent w-full focus:outline-none text-gray-300"),d(e,"placeholder","Type here to search, you can use #tags or !awards"),d(b,"class","text-gray-400 cursor-pointer"),d(b,"href",x),d(s,"class","bg-black bg-opacity-70 p-4 grid search-container svelte-1ns4nx5")},m(r,a){f(r,s,a),v(s,e),v(s,p),v(s,b),v(b,g)},p:u,i:u,o:u,d(r){r&&h(s)}}}class $ extends r{constructor(r){super(),s(this,r,null,M,e,{})}}function k(r){let s,e,p,b,g,m,y,E,x;return{c(){s=a("div"),e=a("div"),p=t("Get the mod manager and use mods"),b=l(),g=a("div"),m=t("Join us on Discord"),y=l(),E=a("div"),x=t("Official Satisfactory website"),this.h()},l(r){s=o(r,"DIV",{class:!0});var a=c(s);e=o(a,"DIV",{});var t=c(e);p=i(t,"Get the mod manager and use mods"),t.forEach(h),b=n(a),g=o(a,"DIV",{});var l=c(g);m=i(l,"Join us on Discord"),l.forEach(h),y=n(a),E=o(a,"DIV",{});var d=c(E);x=i(d,"Official Satisfactory website"),d.forEach(h),a.forEach(h),this.h()},h(){d(s,"class","grid grid-flow-col justify-around mb-1 bg-black bg-opacity-70 py-4")},m(r,a){f(r,s,a),v(s,e),v(e,p),v(s,b),v(s,g),v(g,m),v(s,y),v(s,E),v(E,x)},p:u,i:u,o:u,d(r){r&&h(s)}}}class j extends r{constructor(r){super(),s(this,r,null,k,e,{})}}function T(r){let s,e,p,b,g,m,y,E,w,D,A,V,I,S,M,$;return{c(){s=a("div"),e=a("div"),p=a("a"),b=t("SML Versions"),g=l(),m=a("a"),y=t("Help"),E=l(),w=a("a"),D=t("API Docs"),A=l(),V=a("a"),I=t("Privacy Policy"),S=l(),M=a("a"),$=t("Terms of Service"),this.h()},l(r){s=o(r,"DIV",{class:!0});var a=c(s);e=o(a,"DIV",{class:!0});var t=c(e);p=o(t,"A",{class:!0,href:!0});var l=c(p);b=i(l,"SML Versions"),l.forEach(h),g=n(t),m=o(t,"A",{class:!0,href:!0});var d=c(m);y=i(d,"Help"),d.forEach(h),E=n(t),w=o(t,"A",{class:!0,href:!0});var f=c(w);D=i(f,"API Docs"),f.forEach(h),A=n(t),V=o(t,"A",{class:!0,href:!0});var v=c(V);I=i(v,"Privacy Policy"),v.forEach(h),S=n(t),M=o(t,"A",{class:!0,href:!0});var u=c(M);$=i(u,"Terms of Service"),u.forEach(h),t.forEach(h),a.forEach(h),this.h()},h(){d(p,"class","border-r-2 border-white px-4 text-gray-400"+r[0]("/sml-versions")),d(p,"href",x+"/sml-versions"),d(m,"class","border-r-2 border-white px-4 text-gray-400"+r[0]("/help")),d(m,"href",x+"/help"),d(w,"class","border-r-2 border-white px-4 text-gray-400"+r[0]("/api-docs")),d(w,"href",x+"/api-docs"),d(V,"class","border-r-2 border-white px-4 text-gray-400"+r[0]("/privacy-policy")),d(V,"href",x+"/privacy-policy"),d(M,"class","px-4 text-gray-400"+r[0]("/tos")),d(M,"href",x+"/tos"),d(e,"class","grid grid-flow-col justify-self-center items-center svelte-jzryu6"),d(s,"class","menu grid bg-black py-2.5 px-4 items-center mt-8 svelte-jzryu6")},m(r,a){f(r,s,a),v(s,e),v(e,p),v(p,b),v(e,g),v(e,m),v(m,y),v(e,E),v(e,w),v(w,D),v(e,A),v(e,V),v(V,I),v(e,S),v(e,M),v(M,$)},p:u,i:u,o:u,d(r){r&&h(s)}}}function P(r,s,e){let a,t;p(r,m,(r=>e(1,t=r)));return r.$$.update=()=>{2&r.$$.dirty&&(a=t.path)},[r=>a.startsWith(r)?" underline":"",t]}class L extends r{constructor(r){super(),s(this,r,P,T,e,{})}}export{L as F,j as L,S as M,$ as S};