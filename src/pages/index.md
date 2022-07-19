---
title: Getting started
pageTitle: API Armada - Serverless API Framework.
description: Build your backend without servers.
---

Learn how to get APIArmada set up in your project in under thirty minutes. {% .lead %}

{% quick-links %}

{% quick-link title="Installation" icon="installation" href="/docs/installation" description="Step-by-step guides to setting up your own API Armada." /%}

{% quick-link title="API reference" icon="theming" href="/docs/api-reference" description="Endpoints for Front-end Developers" /%}

{% /quick-links %}

---

## Quick start

Create a simple API that accesses user related data through the Spotify Web API.

{% callout type="warning" title="Spotify Terms of Service" %}
By using the Spotify Tools involved in this exercise, you accept Spotify's [Developer Terms of Service](https://developer.spotify.com/terms).
{% /callout %}

Through the [Spotify Web API](https://developer.spotify.com/documentation/web-api/), external applications retrieve Spotify content such as album data and playlists. To access user-related data through the Web API, an application must be authorized by the user to access that particular information.

In this tutorial we create a simple application using Node.js and JavaScript and demonstrate how to:

- Register an application with Spotify
- Authenticate a user and get authorization to access user data
- Retrieve the data from a Web API endpoint

The authorization flow we use in this tutorial is the [Authorization Code Flow](https://developer.spotify.com/documentation/general/guides/authorization/code-flow). This flow first gets a code from the Spotify Accounts Service, then exchanges that code for an access token. The code-to-token exchange requires a secret key, and for security is done through direct server-to-server communication.

In this example we retrieve data from the Web API /me endpoint, that includes information about the current user.

### Set Up Your Account

To use the Web API, start by creating a Spotify user account (Premium or Free). To do that, simply sign up at [www.spotify.com](http://www.spotify.com/).

When you have a user account, go to the [Dashboard](https://developer.spotify.com/dashboard) page at the Spotify Developer website and, if necessary, log in. Accept the latest [Developer Terms of Service](https://developer.spotify.com/terms) to complete your account set up.

#### Register Your Application

Any application can request data from Spotify Web API endpoints and many endpoints are open and will return data without requiring registration. However, if your application seeks access to a user’s personal data (profile, playlists, etc.) it must be registered. Registered applications also get other benefits, like higher rate limits at some endpoints.

You can [register your application](https://developer.spotify.com/documentation/general/guides/authorization/app-settings), even before you have created it.

### Prepare Your Environment

Now that you have registered the application, set up your environment.

{% callout type="note" title="Tip" %}
If you are already confident of your setup, you might want to skip ahead and download the code of our [Authentication Flow example app](https://github.com/spotify/web-api-auth-examples) from GitHub.
{% /callout %}

### Adding a new Stack

1. Create a new Stack (by copying the existing `MailchimpStack.ts`) with the name `SpotifyStack.ts`
