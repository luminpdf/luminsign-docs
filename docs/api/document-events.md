---
sidebar_position: 80
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Document events

Events which describe changes happened with a document.

## Callback request

```http
POST https://myapp.com/api/callback/bananasign
Content-Type: application/json
Bananasign-Signature: 80C0443F6A7CF5462BFF3E583093B1C845450BB64479B99E920795227D8F6612

{
  "event": "document.approved",
  "timestamp": "2022-09-20T08:22:48.769Z",
  ...
}
```

:::caution
You must always **verify the callback** before handling it to
avoid being compromised.
:::

## Verify the signature of callback

You need to verify the callback signature to make sure that it's coming from
Banansign.

1. Extract the signature from `Banansign-Signature` header
1. Calculate the signature using `HMAC-SHA-256` with your app signing secret
   and the request body

  <Tabs>
    <TabItem value="node" label="NodeJS" default>

    ```js
    import crypto from 'node:crypto'

    const signature = crypto
      .createHmac('sha256', secret)
      .update(body)
      .digest('hex')
    ```

    </TabItem>

    <TabItem value="go" label="Go">

    ```go
    import (
      "crypto/hmac"
      "crypto/sha256"
      "encoding/hex"
    )

    h := hmac.New.Signature(sha256.New, secret)
    h.Write(body)
    signature := hex.EncodeToString(h.Sum(nil))
    ```

    </TabItem>

  </Tabs>

1. Verify the authenticity of the request by comparing the calculated signature
   with the extracted signature.
   If the values are not identical, you should not handle the request.

## Events

### `document.approved`

The document has been signed and approved by all signers.

**Payload**

```json
{
  "event": "document.approved",
  "document": {
    "id": "6322a929b783b12ea0b1d8b9",
    "owner": {
      "id": "6322a929b783b12ea0b1d8b9",
      "name": "John Doe",
      "email": "me@johndoe.com"
    }
  },
  "timestamp": "2022-09-15T08:38:42.869Z"
}
```

### `document.created`

The owner uploaded and sent the document to recipients successfully.

**Payload**

```json
{
  "event": "document.created",
  "document": {
    "id": "6322a929b783b12ea0b1d8b9",
    "owner": {
      "id": "6322a929b783b12ea0b1d8b9",
      "name": "John Doe",
      "email": "me@johndoe.com"
    }
  },
  "user": {
    "id": "6322a929b783b12ea0b1d8b9",
    "email": "me@johndoe.com"
  },
  "timestamp": "2022-09-15T08:38:42.869Z"
}
```

### `document.deleted`

The document has been deleted by the owner.

**Payload**

```json
{
  "event": "document.deleted",
  "document": {
    "id": "6322a929b783b12ea0b1d8b9",
    "owner": {
      "id": "6322a929b783b12ea0b1d8b9",
      "name": "John Doe",
      "email": "me@johndoe.com"
    }
  },
  "user": {
    "id": "6322a929b783b12ea0b1d8b9",
    "email": "me@johndoe.com"
  },
  "timestamp": "2022-09-15T08:38:42.869Z"
}
```

### `document.updated`

The user annotated or edited form fields on the document before they signed or rejected the document.

**Payload**

```json
{
  "event": "document.updated",
  "document": {
    "id": "6322a929b783b12ea0b1d8b9",
    "owner": {
      "id": "6322a929b783b12ea0b1d8b9",
      "name": "John Doe",
      "email": "me@johndoe.com"
    }
  },
  "user": {
    "id": "6322a929b783b12ea0b1d8b9",
    "email": "me@johndoe.com"
  },
  "timestamp": "2022-09-15T08:38:42.869Z"
}
```

### `document.rejected`

One signer rejected the document. The document's status will be rejected.

**Payload**

```json
{
  "event": "document.rejected",
  "document": {
    "id": "6322a929b783b12ea0b1d8b9",
    "owner": {
      "id": "6322a929b783b12ea0b1d8b9",
      "name": "John Doe",
      "email": "me@johndoe.com"
    }
  },
  "user": {
    "id": "6322a929b783b12ea0b1d8b9",
    "email": "me@johndoe.com"
  },
  "timestamp": "2022-09-15T08:38:42.869Z"
}
```

### `document.signed`

The signer signed and approved the document.

**Payload**

```json
{
  "event": "document.signed",
  "document": {
    "id": "6322a929b783b12ea0b1d8b9",
    "owner": {
      "id": "6322a929b783b12ea0b1d8b9",
      "name": "John Doe",
      "email": "me@johndoe.com"
    }
  },
  "user": {
    "id": "6322a929b783b12ea0b1d8b9",
    "email": "me@johndoe.com"
  },
  "timestamp": "2022-09-15T08:38:42.869Z"
}
```

### Properties

#### `event`

Type of the event.

#### `document`

Document associated with the event.

| Key           | Description                |
| ------------- | -------------------------- |
| `id`          | identifier of the document |
| `owner`       | the document creator       |
| `owner.id`    | The owner's ID             |
| `owner.name`  | The owner's name           |
| `owner.email` | The owner's email          |

#### `user`

The user who takes action causing an event.

| Key          | Description                                          |
| ------------ | ---------------------------------------------------- |
| `user.id`    | The user's ID, won't be available for anonymous user |
| `user.email` | The user's email                                     |

#### `timestamp`

The time at which the event occurred.
