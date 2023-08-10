import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import { setupRouter } from '@/logic/setup-router'
import { setupStore } from '@/logic/setup-store'
import { setupI18n } from '@/logic/setup-i18n'

const app = createApp(App)
setupRouter(app, 'popup')
setupStore(app, 'popup')
setupI18n(app, 'popup')
app.mount('#app')
