import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouter } from '@/logic/setup-router'
import { setupStore } from '@/logic/setup-store'

const app = createApp(App)
setupRouter(app, 'popup')
setupStore(app, 'popup')
app.mount('#app')
