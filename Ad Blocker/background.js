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
]

//calling our chrome apis
// listnere before request is sent to check where it is going
chrome.webRequest.onBeforeRequest.addListener(
    (details) => {cancel: true},
    { urls: defaultFilters  }, //block rquestt to these pages
    ["blocking"]
)


// {
//     "name": "Kenan Adblocker",
//     "version": "1.0",
//     "description": "Practicing Adblocker creation",
//     "permissions": ["webRequest", "webRequestBlocking", "<all_urls>"], //list of chrome apis that we want our plugin to have access to, all_urls - grant permisions for apis for all urls
//     "background": {
//         "scripts": ["background.js"] //our background scripts that contain chrome event lisnters
//     },
//     "icons": {
//         "16": "icons/logo_16x16.png",
//         "48": "icons/logo_48x48.png",
//         "128": "icons/logo_128x128.png"
//     },
//     "manifest_version": 2
// }