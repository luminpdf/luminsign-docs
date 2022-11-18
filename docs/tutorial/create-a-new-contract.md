---
title: Create a new Document
sidebar_position: 3
---

In Bananasign, each signing flow is related to a *document*. A document is a PDF file and some associated metadata, that needs to be signed by one or more parties. In this page, we use the Bananasign API to create a new document. The document can then be displayed in an iFrame as explained on the following pages.

## Create an API Client

An authenticated API client is required to setup a new document on Bananasign.
This page takes you through the process of setting up an authenticated API client.

The Lumin and Bananasign API are protected using OAuth2.0.
Any Oauth2 Client library can be used to fetch a token and make authenticated requests.
In this tutorial, we are using [axios-oauth-client](https://www.npmjs.com/package/axios-oauth-client)

Install the Axios Oauth Client:
```sh
$ npm install --save axios-oauth-client axios-token-interceptor axios
```

## Client Credentials grant
Fetch a new authentication token from the Lumin PDF Authentication servers:

```js title="bananasign.js"
const axios = require('axios');
const oauth = require('axios-oauth-client');
const tokenProvider = require('axios-token-interceptor');

const getAuthorizationCode = oauth.client(axios.create(), {
  url: 'https://auth.luminpdf.com/2.0/token',
  grant_type: 'client_credentials',
  client_id: 'INSERT_CLIENT_ID_HERE',
  client_secret: 'INSERT_CLIENT_SECRET_HERE',
  scope: 'contracts',
});
```

## Authenticated Axios client
Create a new authenticated Axios client. This can be used to make requests to the Lumin PDF API
or the Bananasign API.

```js title="bananasign.js"
const client = axios.create();
client.interceptors.request.use(
  // Wraps axios-token-interceptor with oauth-specific configuration,
  // fetches the token using the desired claim method, and caches until the token expires
  oauth.interceptor(tokenProvider, getOwnerCredentials)
);
```


You can now make requests to the Bananasign API:

```js
client.get('https://lxb.bananasign.co/api/version');
// {version: "1.0.0"}

```


## Creating a document

The Bananasign client can be used to create a new document.
This can be done using a single POST call:

```js title="bananasign.js"
  client.post(
    'https://lxb.luminpdf.com/api/web/auth/contract-temporary',
    {
      "signerList": [
          {
              "name": "First Signer",
              "email": "signer@luminpdf.com",
              "requestType": "SIGNER",
              "dueTimeExpired": 0
          }
      ],
      "viewerList": [],
      "inputContract": {
          "name": "Lumin Brand Guidelines.pdf",
          "dueTimeExpired": 0,
          "type": "MEANDOTHERS",
          "formBuilderType": "KEEP_DATA"
      },
      "type": "LOCAL",
      "remoteId": "b66e35c9-6ef4-44eb-8703-ed00a53779ae.pdf",
      "thumbnail": "thumbnails/0c8d7e8d-57ef-4f8c-a787-b8c42a14ad40.jpeg",
      "userId": "62ad50a2d7d72af7a83356e9"
  });
  // {identify: "5tyeu4il7x"}
```

The Bananasign API returns a unique identifier for the newly created document (5tyeu4il7x).

