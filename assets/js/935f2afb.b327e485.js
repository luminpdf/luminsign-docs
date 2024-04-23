"use strict";(self.webpackChunkluminsign=self.webpackChunkluminsign||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/docs/api/intro","docId":"api/intro"},{"type":"link","label":"Authentication","href":"/docs/api/authentication","docId":"api/authentication"},{"type":"link","label":"Events and Callbacks","href":"/docs/api/events","docId":"api/events"},{"type":"category","label":"Walkthroughs","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Text Tags","href":"/docs/api/walkthrough/text-tag","docId":"api/walkthrough/text-tag"}],"href":"/docs/category/walkthroughs"},{"type":"category","label":"Lumin Sign API v1","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Changelog","href":"/docs/api/api-v1/changelog","docId":"api/api-v1/changelog"}],"href":"/docs/category/lumin-sign-api-v1"}],"betaSidebar":[{"type":"link","label":"Introduction","href":"/docs/beta/intro","docId":"beta/intro"},{"type":"category","label":"Tutorial","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Overview","href":"/docs/beta/tutorial/overview","docId":"beta/tutorial/overview"},{"type":"link","label":"Starting the Signing Flow","href":"/docs/beta/tutorial/startpage","docId":"beta/tutorial/startpage"},{"type":"link","label":"Create a new Document","href":"/docs/beta/tutorial/create-a-new-contract","docId":"beta/tutorial/create-a-new-contract"},{"type":"link","label":"Launch Signing Flow","href":"/docs/beta/tutorial/signing-flow","docId":"beta/tutorial/signing-flow"},{"type":"link","label":"Send and Sign Branding Guidelines","href":"/docs/beta/tutorial/sendAndSign","className":"hidden","docId":"beta/tutorial/sendAndSign"}],"href":"/docs/category/tutorial"},{"type":"category","label":"OAuth 2.0","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Overview","href":"/docs/beta/authorization/overview","docId":"beta/authorization/overview"},{"type":"link","label":"Creating an Application","href":"/docs/beta/authorization/create-app","className":"hidden","docId":"beta/authorization/create-app"},{"type":"link","label":"OAuth2 client libraries","href":"/docs/beta/authorization/client-libraries","docId":"beta/authorization/client-libraries"},{"type":"category","label":"Getting a Bearer Token","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Authorization Code Flow","href":"/docs/beta/authorization/get-token/authorization-code","docId":"beta/authorization/get-token/authorization-code"},{"type":"link","label":"Implicit Flow","href":"/docs/beta/authorization/get-token/implicit","docId":"beta/authorization/get-token/implicit"}],"href":"/docs/category/getting-a-bearer-token"}],"href":"/docs/category/oauth-20"},{"type":"category","label":"API Reference","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Upload","href":"/docs/beta/api/upload","docId":"beta/api/upload"},{"type":"link","label":"Contract Temporary","href":"/docs/beta/api/contract-temporary","docId":"beta/api/contract-temporary"},{"type":"category","label":"Webhooks","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Listen to events","href":"/docs/beta/api/Webhooks/listen-for-events","docId":"beta/api/Webhooks/listen-for-events"},{"type":"link","label":"Document events","href":"/docs/beta/api/Webhooks/document-events","docId":"beta/api/Webhooks/document-events"}],"href":"/docs/category/webhooks"}],"href":"/docs/category/api-reference"},{"type":"category","label":"Lumin JavaScript API Client","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Load the client library","href":"/docs/beta/client/installation","docId":"beta/client/installation"},{"type":"link","label":"Authorization API","href":"/docs/beta/client/authorization","docId":"beta/client/authorization"},{"type":"link","label":"Send And Sign API","href":"/docs/beta/client/sendAndSign","docId":"beta/client/sendAndSign"}],"href":"/docs/category/lumin-javascript-api-client"}]},"docs":{"api/api-v1/changelog":{"id":"api/api-v1/changelog","title":"Changelog","description":"This changelog lists all additions and updates to the Lumin Sign API.","sidebar":"tutorialSidebar"},"api/authentication":{"id":"api/authentication","title":"Authentication","description":"You can authenticate with the Lumin Sign API by using an API key","sidebar":"tutorialSidebar"},"api/events":{"id":"api/events","title":"Events","description":"Lumin Sign events (aka \\"webhooks\\") are payloads of event metadata automatically sent to your system when something happens in Lumin Sign.","sidebar":"tutorialSidebar"},"api/intro":{"id":"api/intro","title":"API Documentation","description":"The Lumin Sign API Documentation supply information and examples about the endpoints and features in the Lumin Sign API.","sidebar":"tutorialSidebar"},"api/walkthrough/text-tag":{"id":"api/walkthrough/text-tag","title":"Text Tags","description":"Introduction","sidebar":"tutorialSidebar"},"beta/api/contract-temporary":{"id":"beta/api/contract-temporary","title":"Contract Temporary","description":"This API allows customers to create a Contract with 2 steps.","sidebar":"betaSidebar"},"beta/api/upload":{"id":"beta/api/upload","title":"Upload","description":"How do API users to upload their PDF to Lumin Sign?","sidebar":"betaSidebar"},"beta/api/Webhooks/document-events":{"id":"beta/api/Webhooks/document-events","title":"Document events","description":"Events which describe changes happened with a document.","sidebar":"betaSidebar"},"beta/api/Webhooks/listen-for-events":{"id":"beta/api/Webhooks/listen-for-events","title":"Listen to events","description":"You can use webhooks to get real-time updates from Lumin Sign via a callback url.","sidebar":"betaSidebar"},"beta/authorization/client-libraries":{"id":"beta/authorization/client-libraries","title":"OAuth2 client libraries","description":"Lumin Sign provides a OAuth2 library that can be used to interact with OAuth 2.0.","sidebar":"betaSidebar"},"beta/authorization/create-app":{"id":"beta/authorization/create-app","title":"Creating an Application","description":"Before we begin, we need to create an application on Lumin Sign in order to get a client ID and client secret.","sidebar":"betaSidebar"},"beta/authorization/get-token/authorization-code":{"id":"beta/authorization/get-token/authorization-code","title":"Authorization Code Flow","description":"Authorization code flow securely obtains bearer access token and refresh token for your client apps. Your app must be server-side because you must also pass along your application\'s Client Secret, which must always be kept secure on your server.","sidebar":"betaSidebar"},"beta/authorization/get-token/implicit":{"id":"beta/authorization/get-token/implicit","title":"Implicit Flow","description":"Implicit grant as the way JavaScript code can obtain bearer token and call APIs directly from a browser.","sidebar":"betaSidebar"},"beta/authorization/overview":{"id":"beta/authorization/overview","title":"Overview","description":"Lumin Sign APIs use the OAuth 2.0 protocol for authentication and authorization.","sidebar":"betaSidebar"},"beta/client/authorization":{"id":"beta/client/authorization","title":"Authorization API","description":"This reference describes the Lumin 3P Authorization JavaScript Library API, which you can use to load authorization codes or access tokens from Lumin.","sidebar":"betaSidebar"},"beta/client/installation":{"id":"beta/client/installation","title":"Load the client library","description":"Install client library on any page that a user might sign in on. Use the following code snippet:","sidebar":"betaSidebar"},"beta/client/sendAndSign":{"id":"beta/client/sendAndSign","title":"Send And Sign API","description":"This reference describes the Send and Sign API, which you can integrate with Lumin Sign send and sign flow.","sidebar":"betaSidebar"},"beta/intro":{"id":"beta/intro","title":"Introduction","description":"This section is under construction. Please check back soon.","sidebar":"betaSidebar"},"beta/tutorial/create-a-new-contract":{"id":"beta/tutorial/create-a-new-contract","title":"Create a new Document","description":"In Lumin Sign, each signing flow is related to a document. A document is a PDF file and some associated metadata, that needs to be signed by one or more parties. In this page, we use the Lumin Sign API to create a new document. The document can then be displayed in an iFrame as explained on the following pages.","sidebar":"betaSidebar"},"beta/tutorial/overview":{"id":"beta/tutorial/overview","title":"Overview","description":"This section is under construction. Please check back soon.","sidebar":"betaSidebar"},"beta/tutorial/sendAndSign":{"id":"beta/tutorial/sendAndSign","title":"Send and Sign Branding Guidelines","description":"Use Send And Sign button with the basic `bananasign","sidebar":"betaSidebar"},"beta/tutorial/signing-flow":{"id":"beta/tutorial/signing-flow","title":"Launch Signing Flow","description":"There are a few more steps for the customer to prepare there document for signing. Luckily, Lumin Sign handles everything from this point onwards. Just load the Lumin Sign iframe using the unique document identifier:","sidebar":"betaSidebar"},"beta/tutorial/startpage":{"id":"beta/tutorial/startpage","title":"Starting the Signing Flow","description":"The Lumin Sign signing workflow is normally started when a customer in your application clicks an action button. On Lumin PDF, the signing flow can be launched by clicking our Sign and Send button.","sidebar":"betaSidebar"}}}')}}]);