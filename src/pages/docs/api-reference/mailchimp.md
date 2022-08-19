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
  "reply_to": "agent@leagent.com",
  "from_name": "Al Leagent"
}
```

**Caveat:** To avoid conflicts with variables in the email content, `email` and `name` won't be parsed into the email body. Instead, add the `entity_` prefix to the content vars.

For example, instead of `email` for a certain **buyer**, use `buyer_email` instead.

**Full example (curl)**

```bash
curl https://localhost:8080/mailchimp/new-subscriber \
  -H "Content-Type: application/json" \
  -d '{
    "email": "buyer@leagent.com",
    "name": "John Doe",
    "reply_to": "agent@leagent.com",
    "from_name": "Al Leagent",
    "buyer_email": "buyer@leagent.com",
    "buyer_name": "John Doe",
    "phone": "+1 234 567 8910"
  }'
```

The above for example, would send an email from `Al Leagent <agent@leagent.com` to `John Doe <buyer@leagent.com>`

![New Subscriber Email](/images/example-email.png)

---

## Send an Email Template

```
POST /mailchimp/{template_slug}
```

```js
/**
 * @param {string} template_slug - The slug of the email template.
 * @param {Object} payload Request payload
 */
```

### New Card Order

```bash
curl -X POST https://dev-integrations.leagent.com/mailchimp/new-card-order \
  -H 'content-type: application/json' \
  -d '{
    "email": "team@leagent.com",
    "name": "Team Leagent",
    "address": "555 Burrard St., Vancouver",
    "postal_code": "V7X 1M8",
    "customer_email": "rey+baier@setsail.ca",
    "customer_phone": "+1 234 567 8910",
    "customer_name": "Rey Baier",
    "reply_to": "rey+baier@setsail.ca",
    "from_name": "Rey B.",
    "attachments": [
      {
        "type": "application/pdf",
        "name": "card_pdf_page0.pdf",
        "content": "BASE64_ENCODED_CONTENT_HERE"
      }
    ]
  }'
```

![New Card Order](/images/new-card-order.png)

### New Subscriber

```bash
curl -X POST https://dev-integrations.leagent.com/mailchimp/new-card-order \
  -H 'content-type: application/json' \
  -d '{
    "email": "team@leagent.com",
    "name": "Team Leagent",
    "buyer_email": "rey+baier@setsail.ca",
    "buyer_name": "Rey Baier",
    "phone": "+1 234 567 8910",
    "reply_to": "rey+baier@setsail.ca",
    "from_name": "Rey B."
  }'
```

{% centerFigure src="/images/new-subscriber.jpg" alt="New Subscriber" caption="Fig 3. New Subscriber Email Received Template" %}
{% /centerFigure %}
