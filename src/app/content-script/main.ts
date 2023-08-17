import { createApp } from 'vue'
// import './style.css' // we have to apply it inside the content-script's shadow element instead
import App from './app.vue'
import { setupStore } from '@/plugins/setup-store'
import { setupI18n } from '@/plugins/setup-i18n'
import { setupLoading } from '@/plugins/setup-loading'
import { delay } from '@/utils/delay'

export function mountApp(rootContainer: string | Element) {
  const app = createApp(App)
  setupStore(app, 'content-script')
  setupI18n(app, 'content-script')
  setupLoading(app, async () => {
    // FIXME: 
    // Instead of this useless delay here put your async loading logic (for example loading logged in user from the localStorage with async fn)
    // or you could call api here to get something before app loads
    await delay(2000)
  })
  app.mount(rootContainer)
}