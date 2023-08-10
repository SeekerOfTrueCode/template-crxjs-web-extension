import { createApp } from 'vue'
// import './style.css' // we have to apply it inside the content-script's shadow element instead
import App from './app.vue'
import { setupStore } from '@/logic/setup-store'
import { setupI18n } from '@/logic/setup-i18n'

export function mountApp(rootContainer: string | Element) {
  const app = createApp(App)
  setupStore(app, 'content-script')
  setupI18n(app, 'content-script')
  app.mount(rootContainer)
}