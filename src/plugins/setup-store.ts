import type { App } from 'vue'
import { createPinia } from 'pinia'
import { installPersistedStatePlugin } from './setup-store/install-persisted-state-plugin'
import { USED_STORAGE } from './setup-store/constants'
import { Storage } from './setup-store/types/storage'

export function setupStore(app: App, baseRoute: string, externalStorage?: Storage) {
  const pinia = createPinia()
  const storage = externalStorage ?? chrome.storage[USED_STORAGE]
  pinia.use(context => installPersistedStatePlugin({ context, baseRoute, storage }))
  app.use(pinia)
}
