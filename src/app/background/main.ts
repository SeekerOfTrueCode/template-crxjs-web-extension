import App from '@/app/background/app.vue'
import { setupStore } from '@/logic/setup-store'

export function createRenderlessAppAndStore() {
  const app = createApp(App)
  setupStore(app, 'content-script')
}