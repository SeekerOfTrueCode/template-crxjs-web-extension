import { setupOffscreenDocument } from '@/logic/utils/service-worker/setup-offscreen-document'
import { PATHS } from '@@/scripts/constants/paths'
import { createRenderlessAppAndStore } from '@/app/background/main'
import { useCountStore } from '@/store/count'

declare const self: ServiceWorkerGlobalScope
const serviceWorker = self
console.log('!!custom background script', serviceWorker)

/**
 * All event listeners need to be statically registered in the global scope of the service worker. 
 * In other words, event listeners should not be nested in async functions. 
 * This way Chrome can ensure that all event handlers are restored in case of a service worker reboot.
 */
chrome.runtime.onInstalled.addListener(() => {
  console.log('onInstalled')
});

// eslint-disable-next-line no-unexpected-multiline
(async () => {
  await setupOffscreenDocument(serviceWorker, {
    path: PATHS.HTML.OFFSCREEN,
    reasons: [chrome.offscreen.Reason.AUDIO_PLAYBACK],
    justification: 'To play audio.'
  })

  chrome.runtime.sendMessage({
    type: '...',
    target: 'offscreen',
    data: '...'
  })

  createRenderlessAppAndStore()
  const countStore = useCountStore()
  await countStore.$persistedState.isReady()
  console.log('!!custom background script [count store]', countStore.count)
})()

export { }