"use strict";(self.webpackChunkluminsign=self.webpackChunkluminsign||[]).push([[629],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(r),v=o,m=s["".concat(u,".").concat(v)]||s[v]||f[v]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=v;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},22432:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={title:"Overview",sidebar_position:1},a="Overview",c={unversionedId:"beta/authorization/overview",id:"beta/authorization/overview",title:"Overview",description:"Lumin Sign APIs use the OAuth 2.0 protocol for authentication and authorization.",source:"@site/docs/beta/authorization/overview.mdx",sourceDirName:"beta/authorization",slug:"/beta/authorization/overview",permalink:"/docs/beta/authorization/overview",draft:!1,editUrl:"https://github.com/luminpdf/luminsign-docs/blob/main/docs/beta/authorization/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"betaSidebar",previous:{title:"OAuth 2.0",permalink:"/docs/category/oauth-20"},next:{title:"Creating an Application",permalink:"/docs/beta/authorization/create-app"}},u={},p=[],l={toc:p},s="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Lumin Sign APIs use the OAuth 2.0 protocol for authentication and authorization."),(0,o.kt)("p",null,"To begin, obtain OAuth 2.0 client credentials from the ",(0,o.kt)("a",{parentName:"p",href:"https://app-auth-staging.bananasign.co/settings/api"},"Lumin Sign Developer API"),". Then your client application can request a bearer token from the Lumin PDF Authorization Server."))}f.isMDXComponent=!0}}]);