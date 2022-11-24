---
title: Contract Temporary
sidebar_position: 3
---

This API allows customers to create a Contract with 2 steps.

An example call to this API could look like:

### Step 1
```js title="init.js"
  fetch('https://app.bananasign.co/api/web/v1/document-signing/init', {
    method: 'POST',
    body: JSON.stringify({
      fileName: 'sample.pdf',
    }),
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  })
```

The API endpoint returns a JSON object describing the new object

**Payload**

| Key               | Type   | Description                                      |
| :---------------- | :----- | :----------------------------------------------- |
| `flowId` | string | The unique identifier for the newly created document                           |
| `preSignedUrl`        | string | The URL for uploading document to bananasign temporary bucket with an expiration time of 15/30 mins  |
| `owner`           | object | The owner of contract in Bananasign                  |


Using `preSignedUrl` for uploading document to bananasign
```js title="upload.js"
 fetch(preSignedUrl, {
  method: 'PUT',
  body: fileData, // Your document file object
  headers: {
    'Content-Type': 'application/pdf',
  },
})
```

:::caution
You must use preSignedUrl for uploading your document to bananasign before going to step 2
:::

### Step 2

You can create temporary document with your signers and viewers with `flowId`

```js title="create.js"
  fetch('https://app.bananasign.co/api/web/v1/document-signing/create-document-temporary', {
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
**@accessToken:** The OAuth2 access token getting from [Getting an Access Token](/docs/authorization/get-token)

**@fileName:** The contract name

**@signers:** This is an array of people who need to sign the document

**@viewers:** This is an array of people who will be able to view the contract

**@signers.name:** The display name of the signer

**@signers.email:** The contact email of this person. This email will be used to send the contact a unique link.

**@viewers.name:** The display name of the viewer

**@viewers.email:** The contact email of this person. This email will be used to send the contact a unique link.





