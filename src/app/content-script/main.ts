import { createApp } from 'vue'
// import './style.css' // we have to apply it inside the content-script's shadow element instead
import App from './_app.vue'
import { setupStore } from '@/logic/setup-store'

export function mountApp(rootContainer: string | Element) {
  const app = createApp(App)
  setupStore(app, 'content-script')
  app.mount(rootContainer)
}