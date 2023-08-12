// FIXME: not transformed into js file during development - problematic for offscreen.html
console.log('main offscreen')

// eslint-disable-next-line @typescript-eslint/no-unused-vars
chrome.runtime.onMessage.addListener((message, sender, _sendResponse) => {
  console.log(message, sender)
})