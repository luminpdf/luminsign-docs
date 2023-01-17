---
title: Launch Signing Flow
sidebar_position: 4
---

# Launch Signing Flow

There are a few more steps for the customer to prepare there document for signing. Luckily, Bananasign handles everything from this point onwards. Just load the Bananasign iframe using the unique document identifier:

:::caution
Prerequisites: You need to obtain an access token from [Getting an Access Token](/docs/authorization/get-token)
:::

```html
  <iframe width="100%" height="100%"
   src="https://app.bananasign.co/embed/WNLW4u4dBOOn?token={accessToken}"
   title="Iframe Upload"
   frameborder="0"
   allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
   id="bananaSignIframe"
   allowfullscreen=""
   style="visibility: visible;">
  </iframe>
```

Bananasign will handle the rest. The customer will be able to step through the setup process, preparing their document for signing.


![image](img/bananasign-iframe.png)

Congratulations 🎉 You have now added a fully compliant signing flow to your application
