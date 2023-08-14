// FIXME: not transformed into js file during development - problematic for offscreen.html
console.log('main offscreen')

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message, sender, sendResponse)
})