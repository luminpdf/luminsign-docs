"use strict";(self.webpackChunkluminsign=self.webpackChunkluminsign||[]).push([[7470],{45928:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var n=i(74848),l=i(28453);const s={title:"Authorization API",sidebar_position:2},r=void 0,d={id:"beta/client/authorization",title:"Authorization API",description:"This reference describes the Lumin 3P Authorization JavaScript Library API, which you can use to load authorization codes or access tokens from Lumin.",source:"@site/docs/beta/client/authorization.mdx",sourceDirName:"beta/client",slug:"/beta/client/authorization",permalink:"/docs/beta/client/authorization",draft:!1,unlisted:!1,editUrl:"https://github.com/luminpdf/luminsign-docs/blob/main/docs/beta/client/authorization.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Authorization API",sidebar_position:2},sidebar:"betaSidebar",previous:{title:"Load the client library",permalink:"/docs/beta/client/installation"},next:{title:"Send And Sign API",permalink:"/docs/beta/client/sendAndSign"}},c={},o=[{value:"Method: lumin.auth.initialize",id:"method-luminauthinitialize",level:2},{value:"Data type: AuthConfig",id:"data-type-authconfig",level:3},{value:"Method: lumin.auth.signin",id:"method-luminauthsignin",level:2},{value:"Data type: SigninOption (optional)",id:"data-type-signinoption-optional",level:3},{value:"SuccessPayload",id:"successpayload",level:4},{value:"ErrorPayload",id:"errorpayload",level:4},{value:"Method: lumin.auth.signout",id:"method-luminauthsignout",level:2},{value:"Data type: SignoutOption (optional)",id:"data-type-signoutoption-optional",level:3},{value:"ErrorPayload",id:"errorpayload-1",level:4}];function h(e){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This reference describes the Lumin 3P Authorization JavaScript Library API, which you can use to load authorization codes or access tokens from Lumin."}),"\n",(0,n.jsx)(t.h2,{id:"method-luminauthinitialize",children:"Method: lumin.auth.initialize"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"initialize"})," method initializes config for authorization flow"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"window.lumin.auth.initialize(config: AuthConfig)\n"})}),"\n",(0,n.jsx)(t.h3,{id:"data-type-authconfig",children:"Data type: AuthConfig"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Properties"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"client_id"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.strong,{children:"Required"}),". Your application's client ID"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"scope"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.strong,{children:"Required"}),". A space-delimited list of scopes that identify the resources that your application want to access. Supported scopes are: ",(0,n.jsx)(t.code,{children:"openid"}),", ",(0,n.jsx)(t.code,{children:"bananasign:document.create"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"response_type"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.strong,{children:"Required"}),". Which grant to execute. Available values are: ",(0,n.jsx)(t.code,{children:"code"}),", ",(0,n.jsx)(t.code,{children:"code id_token"}),", ",(0,n.jsx)(t.code,{children:"token"}),", ",(0,n.jsx)(t.code,{children:"token id_token"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"nonce"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A random string for ID tokens"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"state"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Specifies any string value for prevent attacks and redirect users"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"redirect_uri"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The redirect_uri where authentication responses will be sent and received. It is one of the redirect URIs you registered in the Lumin Sign."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"ux_mode"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["The UX mode to use for the authorization flow. Valid values are ",(0,n.jsx)(t.code,{children:"popup"})," and ",(0,n.jsx)(t.code,{children:"redirect"}),". (Default: ",(0,n.jsx)(t.code,{children:"redirect"}),")"]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"method-luminauthsignin",children:"Method: lumin.auth.signin"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"signin"})," method start the authorization flow with configuration in initialize step"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"window.lumin.auth.signin(option: SigninOption)\n"})}),"\n",(0,n.jsx)(t.h3,{id:"data-type-signinoption-optional",children:"Data type: SigninOption (optional)"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Properties"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"onSuccess"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["(payload: ",(0,n.jsx)(t.strong,{children:"SuccessPayload"}),"): void"]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The JavaScript function that handles returned response"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"onError"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["(payload: ",(0,n.jsx)(t.strong,{children:"ErrorPayload"}),"): void"]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The JavaScript function that handles error response"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"successpayload",children:"SuccessPayload"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Properties"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"code"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(t.strong,{children:"Authorization code flow"}),") The authorization code of a successful token response."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"access_token"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(t.strong,{children:"Implicit flow"}),") The access token of a successful token response."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"id_token"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(t.strong,{children:"OpenID Connect"}),")The id token of a successful token response."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"token_type"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The type of the token issued."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"state"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Specifies any string value for prevent attacks and redirect users"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"scope"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["A space-delimited list of scopes that identify the resources that your application want to access. Supported scopes are: ",(0,n.jsx)(t.code,{children:"openid"}),", ",(0,n.jsx)(t.code,{children:"bananasign:document.create"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"expires_in"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The lifetime in seconds of the access token."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"error"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(t.strong,{children:"Error of OAuth2 configuration"}),") A single ASCII error code."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"error_description"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(t.strong,{children:"Error of OAuth2 configuration"}),") Human-readable ASCII text providing additional information"]})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"errorpayload",children:"ErrorPayload"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Properties"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"error"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A single ASCII error code."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"error_description"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Human-readable ASCII text providing additional information"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"method-luminauthsignout",children:"Method: lumin.auth.signout"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"signout"})," method start the sign out OAuth2 flow with configuration in initialize step"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"window.lumin.auth.signout(option: SignoutOption)\n"})}),"\n",(0,n.jsx)(t.h3,{id:"data-type-signoutoption-optional",children:"Data type: SignoutOption (optional)"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Properties"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"onSuccess"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(): void"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The JavaScript function that handles after sign out success"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"onError"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["(payload: ",(0,n.jsx)(t.strong,{children:"ErrorPayload"}),"): void"]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The JavaScript function that handles error"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"errorpayload-1",children:"ErrorPayload"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Properties"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"error"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A single ASCII error code."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"error_description"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Human-readable ASCII text providing additional information"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>d});var n=i(96540);const l={},s=n.createContext(l);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);