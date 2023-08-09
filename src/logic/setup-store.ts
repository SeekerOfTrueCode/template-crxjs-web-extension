import type { App } from 'vue'
import { createPinia } from 'pinia'
import { installPersistedStatePlugin } from './setup-store/install-persisted-state-plugin'
import { installPersistedStatePluginExtended } from './setup-store/install-persisted-state-plugin-extended'

export function setupStore(app: App, baseRoute: string) {
  const pinia = createPinia()
  pinia.use(context => installPersistedStatePlugin(context, baseRoute))
  pinia.use(context => installPersistedStatePluginExtended(context, baseRoute))
  app.use(pinia)
}
