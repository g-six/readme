---
title: Slack
description: Middleware for Slack notifications
---

Send a notification to Slack

## Send a signup notifications

#### POST /slack/signups

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
