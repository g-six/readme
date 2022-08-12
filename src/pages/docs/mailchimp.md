---
title: MailChimp
description: Middleware for email sending
---

Send emails via MailChimp / MailChimp Templates
Generic payload structure below:

```json
{
  "email": "buyer@leagent.com",
  "name": "John Doe"
}
```

Additionally, we could specify the reply to:

```json
{
  "email": "buyer@leagent.com",
  "name": "John Doe",
  "reply_to": "agent@leagent.com"
}
```

---

## Send an Email Template

#### POST /mailchimp/template/{template_slug}

```js
/**
 * @param {string} template_slug - The slug of the email template.
 * @param {Object} payload Request payload
 */
```

#### Request Payload

**new-card-order**

```json
{
  "email": "gerard+PLEASECHANGETHIS@setsail.ca",
  "name": "Rey",
  "address": "Please Change This",
  "phone": "pls cge this",
  "postal_code": "PLS CGE",
  "attachments": [
    {
      "type": "application/pdf",
      "name": "card_pdf_page0.pdf",
      "content": "BASE64_ENCODED_CONTENT_HERE"
    }
  ]
}
```

**new-subscriber**

```json
{
  "email": "gerard+PLEASECHANGETHIS@setsail.ca",
  "name": "Rey",
  "phone": "XXX YYY ZZZZ"
}
```
