---
title: Contract Temporary
sidebar_position: 3
---

This API endpoint allows customers to create a Contract.
The API endpoint returns a JSON object describing the new object.
An example call to this API could look like: 

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

**@signerList:** This is an array of people who need to sign the document

**@viewerList:** This is an array of people who will be able to view the contract

**@signerList.name:** The display name of the signer

**@signerList.email:** The contact email of this person. This email will be used to send the contact a unique link.

**@signerList.requestType:** Can be "SIGNER" or "VIEWER" depending on the permissions that this person will have on the file.

**@signerList.dueTimeExpired:** The due date for this person as a UTC timestamp. The signer will not be able to sign the document after this date.

**@inputContract.name:** The display name of the contract

**@inputContract.dueTimeExpired:** The due date for the contract as a UTC timestamp. Nobody will not bee able to sign the document after this date.

**@inputContract.type:** Only local is supported at this time "LOCAL"

**@inputContract.remoteId:** The remoteId of the file, as returned by the upload endpoint

**@inputContract.thumbnail:** The thumbnail of the file, as returned by the upload endpoint

**@inputContract.userId:** Leave empty





