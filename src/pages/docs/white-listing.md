---
title: Domain White-Listing Guide
description: Allow your websites to consume your API Armada
---

Add your domain to the domain configuration file to start consuming your API Armada.

---

## Domain White-List Configuration File

In order for the API Gateway to allow requests from your web app, you should add your app's domain to the configuration file (`./stacks/domain-config.ts`).

### Append to origins

Add your new front-end uri in the form of `http(s)://domain`. For example, to allow your local development machine (running webpack on port `3000`) to consume your API, add `http://localhost:3000` like below.

```js
export const domain_props = {
  domainName: process.env.ARMADA_CUSTOM_DOMAIN as string,
  regionalDomainName: process.env.ARMADA_API_GATEWAY_DOMAIN as string,
}

export const origins: string[] = [
  'https://skywalk.rey.codes',
  'https://dev-skywalk.rey.codes',
  'https://staging-skywalk.rey.codes',
  'http://localhost:3000',
]
```

Re-deploy your API stack after modifying this file.
