# Kenan Adblocker

Kenan Adblocker is a simple Chrome extension that blocks advertisements on various websites by filtering network requests to known ad-serving domains. This is an educational project to practice Chrome extension development.

## How It Works

AdBlockers are scripts that run alongside your browser, monitoring network traffic. They check for requests sent by advertisers and block any that are deemed unnecessary or intrusive. This extension uses Chrome's `webRequest` API to intercept network requests and block them if they match predefined patterns.

### Default Filters

The extension blocks requests to the following ad-serving domains:

```javascript
const defaultFilters = [
  "*://*.doubleclick.net/*",
  "*://partner.googleadservices.com/*",
  "*://*.googlesyndication.com/*",
  "*://*.google-analytics.com/*",
  "*://creative.ak.fbcdn.net/*",
  "*://*.adbrite.com/*",
  "*://*.exponential.com/*",
  "*://*.quantserve.com/*",
  "*://*.scorecardresearch.com/*",
  "*://*.zedo.com/*",
];
```

```javascript
// Calling Chrome APIs to block unwanted network requests
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    cancel: true;
  }, // Blocks the request before it is sent
  { urls: defaultFilters }, // Filters for ad-related URLs
  ["blocking"] // Ensures that the request is blocked before it reaches the server
);
```

### Manifest File

The manifest.json file is a crucial part of every Chrome extension. It provides information about the extension, its permissions, and how it interacts with the browser.

```json
{
  "name": "Kenan Adblocker",
  "version": "1.0",
  "description": "Practicing Adblocker creation",
  "permissions": ["webRequest", "webRequestBlocking", "<all_urls>"],
  "background": {
    "scripts": ["background.js"]
  },
  "manifest_version": 2
}
```

## Explanation of Fields

- **name**: The name of your extension as it will appear in the Chrome extensions list.
- **version**: The version number of the extension, useful for version control.
- **description**: A short description of what the extension does.
- **permissions**: Defines the permissions the extension requires:
  - **webRequest**: Allows the extension to observe network requests.
  - **webRequestBlocking**: Allows the extension to block requests before they are sent.
  - **all_urls**: Gives access to all websites.
- **background**: Specifies the background script (`background.js`) that contains the main logic of the ad blocker. This script runs continuously in the background.
- **manifest_version**: Indicates the version of the manifest specification being used. Version 2 is the most widely supported for Chrome extensions.
