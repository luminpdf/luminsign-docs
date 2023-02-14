---
title: Create a new Document
sidebar_position: 3
---

In Bananasign, each signing flow is related to a *document*. A document is a PDF file and some associated metadata, that needs to be signed by one or more parties. In this page, we use the Bananasign API to create a new document. The document can then be displayed in an iFrame as explained on the following pages.

:::caution
Prerequisites: You need to obtain an access token from [Getting an Access Token](/docs/category/getting-an-access-token)
:::

:::info
If you are using our [simple react widget](https://github.com/luminpdf/bananasign-integration), you can skip this step and [Launch Signing Flow](/docs/tutorial/signing-flow/).
:::
## Creating a document

The Bananasign client can be used to create a new document.

Firstly, you need to call init api to obtain unique identifier of document.

```js title="init-flow.js"
  fetch('https://app-auth-staging.bananasign.co/api/web/v1/document-signing/init', {
    method: 'POST',
    body: JSON.stringify({
      fileName: 'sample.pdf',
    }),
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  })
    .then(async (response) => {
      const data = await response.json();
      // { 
      //   flowId: "WNLW4u4dBOOn",
      //   preSignedUrl: "https://bananasign-temporary-contracts.s3...",
      //   owner: {
      //     email: 'signer@luminpdf.com',
      //     name: 'First Signer',
      //   }
      // }
    })
```

This API returns a unique identifier for the newly created document (WNLW4u4dBOOn) and `preSignedUrl` for upload document to bananasign.

After that, you can create temporary document with your signers and viewers by using a single PUT call:
```js title="create-document.js"
  fetch('https://app-auth-staging.bananasign.co/api/web/v1/document-signing/create-document-temporary', {
    method: 'PUT',
    body: JSON.stringify({
      signers: [{
        name: 'First Signer',
        email: 'signer@luminpdf.com',
      }],
      viewers: [],
      flowId: 'WNLW4u4dBOOn',
    }),
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    }
  })
```
:::info
For more information, please visit: [Contract Temporary API](/docs/api/contract-temporary)
:::

