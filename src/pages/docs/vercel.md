---
title: Vercel
description: Middleware for Vercel API integrations
---

The Vercel API is a REST-styled API that gives full control over the entire Vercel platform by providing all the resources available, exposed as simple HTTP endpoints.

---

## Add a domain to a project

#### POST /vercel/projects/{project_name}/domains

```js
/**
 * @param {string} project_name - The unique name of the Vercel project
 * @param {Object} payload Request payload
 *                  Optional: gitBranch
 */
```

#### Request Payload

```json
{
  "name": "domain.name",
  "gitBranch": "dev"
}
```
