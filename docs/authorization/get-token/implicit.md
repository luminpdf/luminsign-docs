---
title: Implicit Flow
sidebar_position: 2
---

 Implicit grant as the way JavaScript code can obtain access tokens and call APIs directly from a browser.

## Obtaining access token
The client app makes an authorization request by redirecting user to a page with an authorization proposal.

Example:
```js
GET https://kratos-auth-staging.luminpdf.com/oauth2/auth
?client_id=8447510d-475e-4f65-a3a0-90465ac1417f
&response_type=token
&redirect_uri=http://localhost:3000/
&scope=openid bananasign:document.write
&state=5a7a4c98-40e2-4e2a-a0d5-979fb639b5b5
```
| Key               | Type   | Description                                      |
| :---------------- | :----- | :----------------------------------------------- |
| `response_type` | string | The value is `token` only                         |
| `client_id`        | string | Your app Client ID  |
| `redirect_uri`           | object | The redirect_uri where authentication responses will be sent and received. It is one of the redirect URIs you registered in the Bananasign. |
| `scope`        | string | Scope that you want to request `(openid, bananasign:document.write)`  |
| `state`        | string (optional) | Optional value for prevent attacks and redirect users  |

You can now make requests to the Bananasign API with access token:

```js title="example-request.js"
fetch('https://app-auth-staging.bananasign.co/api/web/oauth2/version', {
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