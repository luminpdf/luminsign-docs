---
title: Getting an Access Token
sidebar_position: 3
---

# Getting an Access Token

## Authorization Code Grant
Fetch a new authentication token from the Lumin PDF Authentication servers:

```js title="get-token.js"
const response = await fetch('https://auth.luminpdf.com/oauth2/token', {
  method: 'POST',
  body: new URLSearchParams({
    grant_type: 'authorization_code',
    code: 'AUTHORIZATION_CODE', // Authorization code
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_CLIENT_SECRET',
    redirect_uri: `https://your-app.com/verify` // Authorization callback url
  }),
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
```

You can now make requests to the Bananasign API with access token:

```js
fetch('https://app.bananasign.co/api/web/oauth2/version', {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  },
})
  .then(async (response) => {
    const data = await response.json();
    // {version: "1.0.0"}
  })
```