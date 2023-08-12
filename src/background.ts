import { setupOffscreenDocument } from '@/logic/utils/service-worker/setup-offscreen-document'
import { PATHS } from '@@/scripts/constants/paths'
import { createRenderlessAppAndStore } from '@/app/background/main'
import { useCountStore } from './store/count'

declare const self: ServiceWorkerGlobalScope

// eslint-disable-next-line no-unexpected-multiline
(async () => {
  const serviceWorker = self
  console.log('!!custom background script', serviceWorker)
  chrome.runtime.onInstalled.addListener(() => {
    // chrome.runtime.openOptionsPage()
    console.log('onInstalled')
  })

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