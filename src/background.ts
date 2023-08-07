/// <reference lib="webworker" />
declare const self: ServiceWorkerGlobalScope

console.log('custom background script', self)

chrome.runtime.onInstalled.addListener(() => {
  // chrome.runtime.openOptionsPage()
  console.log('onInstalled')
})

export { }