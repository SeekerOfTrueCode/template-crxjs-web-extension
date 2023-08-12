import { hasOffscreenDocument } from './has-offscreen-document'

interface Options {
    path: string
    reasons: chrome.offscreen.Reason[]
    justification: string
}

let creating: Promise<void> | null // A global promise to avoid concurrency issues
export async function setupOffscreenDocument(serviceWorker: ServiceWorkerGlobalScope, options: Options) {
  // Check all windows controlled by the service worker to see if one 
  // of them is the offscreen document with the given path
  const offscreenUrl = chrome.runtime.getURL(options.path)

  const has = await hasOffscreenDocument(serviceWorker, offscreenUrl)
  console.log('[setupOffscreenDocument] has', has)
  if (has) {
    return
  }

  // create offscreen document
  if (creating) {
    await creating
  } else {
    console.log('[setupOffscreenDocument] before create document', options.path)
    creating = chrome.offscreen.createDocument({
      url: options.path,
      reasons: options.reasons,
      justification: options.justification
    })
    await creating
    creating = null
  }
}