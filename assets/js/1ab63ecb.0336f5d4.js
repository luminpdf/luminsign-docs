"use strict";(self.webpackChunkluminsign=self.webpackChunkluminsign||[]).push([[8286],{17806:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=t(74848),r=t(28453),i=t(11470),s=t(19365);const o={title:"Create a new Document",sidebar_position:3},l=void 0,c={id:"beta/tutorial/create-a-new-contract",title:"Create a new Document",description:"In Lumin Sign, each signing flow is related to a document. A document is a PDF file and some associated metadata, that needs to be signed by one or more parties. In this page, we use the Lumin Sign API to create a new document. The document can then be displayed in an iFrame as explained on the following pages.",source:"@site/docs/beta/tutorial/create-a-new-contract.mdx",sourceDirName:"beta/tutorial",slug:"/beta/tutorial/create-a-new-contract",permalink:"/docs/beta/tutorial/create-a-new-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/luminpdf/luminsign-docs/blob/main/docs/beta/tutorial/create-a-new-contract.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Create a new Document",sidebar_position:3},sidebar:"betaSidebar",previous:{title:"Starting the Signing Flow",permalink:"/docs/beta/tutorial/startpage"},next:{title:"Launch Signing Flow",permalink:"/docs/beta/tutorial/signing-flow"}},u={},d=[{value:"Creating a document",id:"creating-a-document",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["In Lumin Sign, each signing flow is related to a ",(0,a.jsx)(n.em,{children:"document"}),". A document is a PDF file and some associated metadata, that needs to be signed by one or more parties. In this page, we use the Lumin Sign API to create a new document. The document can then be displayed in an iFrame as explained on the following pages."]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["Prerequisites: You need to obtain a bearer token from ",(0,a.jsx)(n.a,{href:"/docs/beta/category/getting-an-bearer-token",children:"Getting a Bearer Token"})]})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["If you are using our ",(0,a.jsx)(n.a,{href:"https://github.com/luminpdf/bananasign-integration",children:"simple react widget"}),", you can skip this step and ",(0,a.jsx)(n.a,{href:"/docs/beta/tutorial/signing-flow/",children:"Launch Signing Flow"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"creating-a-document",children:"Creating a document"}),"\n",(0,a.jsx)(n.p,{children:"The Lumin Sign client can be used to create a new document."}),"\n",(0,a.jsx)(n.p,{children:"Firstly, you need to call init api to obtain unique identifier of document."}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["For more information, please visit: ",(0,a.jsx)(n.a,{href:"/docs/beta/api/contract-temporary",children:"Contract Temporary API"})]})}),"\n",(0,a.jsxs)(i.A,{defaultValue:"curl",values:[{label:"Shell/cURL",value:"curl"},{label:"Javascript",value:"js"}],children:[(0,a.jsxs)(s.A,{value:"curl",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="init-flow"',children:"  curl --request POST \\\n  --url https://app-auth-staging.bananasign.co/api/web/v1/document-signing/init \\\n  -d '{\"fileName\":\"sample.pdf\"}' \\\n  --header 'Authorization: Bearer $access_token' \\\n  --header 'Content-Type: application/json'\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="response"',children:"  {\n    flowId: \"WNLW4u4dBOOn\",\n    preSignedUrl: \"https://bananasign-temporary-contracts.s3...\",\n    owner: {\n      email: 'signer@luminpdf.com',\n      name: 'First Signer',\n    }\n  }\n"})})]}),(0,a.jsx)(s.A,{value:"js",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="init-flow.js"',children:"  fetch('https://app-auth-staging.bananasign.co/api/web/v1/document-signing/init', {\n    method: 'POST',\n    body: JSON.stringify({\n      fileName: 'sample.pdf',\n    }),\n    headers: {\n      Authorization: `Bearer ${accessToken}`,\n      'Content-Type': 'application/json',\n    },\n  })\n    .then(async (response) => {\n      const data = await response.json();\n      // {\n      //   flowId: \"WNLW4u4dBOOn\",\n      //   preSignedUrl: \"https://bananasign-temporary-contracts.s3...\",\n      //   owner: {\n      //     email: 'signer@luminpdf.com',\n      //     name: 'First Signer',\n      //   }\n      // }\n    })\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["This API returns a unique identifier for the newly created document ",(0,a.jsx)(n.code,{children:"(WNLW4u4dBOOn)"})," and ",(0,a.jsx)(n.code,{children:"preSignedUrl"})," for upload document to Lumin Sign."]}),"\n",(0,a.jsxs)(n.p,{children:["Using ",(0,a.jsx)(n.code,{children:"preSignedUrl"})," for uploading document to Lumin Sign"]}),"\n",(0,a.jsxs)(i.A,{defaultValue:"curl",values:[{label:"Shell/cURL",value:"curl"},{label:"Javascript",value:"js"}],children:[(0,a.jsx)(s.A,{value:"curl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="init-flow"',children:"  curl --request PUT \\\n  --url preSignedUrl \\\n  -d 'your_file' \\\n  --header 'Content-Type: application/pdf'\n"})})}),(0,a.jsx)(s.A,{value:"js",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="upload.js"',children:" fetch(preSignedUrl, {\n  method: 'PUT',\n  body: fileData, // Your document file object\n  headers: {\n    'Content-Type': 'application/pdf',\n  },\n})\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"After that, you can create temporary document with your signers and viewers by using a single PUT call:"}),"\n",(0,a.jsxs)(i.A,{defaultValue:"curl",values:[{label:"Shell/cURL",value:"curl"},{label:"Javascript",value:"js"}],children:[(0,a.jsxs)(s.A,{value:"curl",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="init-flow"',children:'  curl --request PUT \\\n  --url https://app-auth-staging.bananasign.co/api/web/v1/document-signing/create-document-temporary \\\n  -d \'{"signers":[{"name":"First Signer","email":"signer@luminpdf.com"}],"viewers":[],"flowId":"WNLW4u4dBOOn"}\' \\\n  --header \'Authorization: Bearer $access_token\' \\\n  --header \'Content-Type: application/json\'\n'})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="response"',children:'  {\n    flowId: "WNLW4u4dBOOn",\n    message: "You\'ve requested to a save document info successfully",\n    statusCode: 200\n  }\n'})})]}),(0,a.jsx)(s.A,{value:"js",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="create-document.js"',children:"  fetch('https://app-auth-staging.bananasign.co/api/web/v1/document-signing/create-document-temporary', {\n    method: 'PUT',\n    body: JSON.stringify({\n      signers: [{\n        name: 'First Signer',\n        email: 'signer@luminpdf.com',\n      }],\n      viewers: [],\n      flowId: 'WNLW4u4dBOOn',\n    }),\n    headers: {\n      Authorization: `Bearer ${accessToken}`,\n      'Content-Type': 'application/json',\n    }\n  }).then(async (response) => {\n      const data = await response.json();\n      // {\n      //   flowId: \"WNLW4u4dBOOn\",\n      //   message: \"You've requested to a save document info successfully\",\n      //   statusCode: 200\n      // }\n    })\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(96540),r=t(18215),i=t(23104),s=t(56347),o=t(205),l=t(57485),c=t(31682),u=t(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=p(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,d]=h({queryString:t,groupId:r}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),b=(()=>{const e=c??g;return m({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function j(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(c(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(j,{...n,...e}),(0,v.jsx)(x,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(96540);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);