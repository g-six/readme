---
title: Stripe
description: Middleware for Stripe
---

Set a customer's subscription plan, downgrade, etc.

## Set a customer's subscription plan

#### POST /stripe/subscriptions

```js
/**
 * @param {Object} payload Request payload
 */
```

#### Request Payload

```json
{
  "first_name": "Gerard",
  "last_name": "Rey",
  "email": "rey+fa9@setsail.ca",
  "tel": "(236) 777-1283",
  "agent_id": "12345",
  "profile_slug": "gerard-rey-618"
}
```
