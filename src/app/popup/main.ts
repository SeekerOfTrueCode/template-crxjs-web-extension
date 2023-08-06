import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouter } from '../../logic/setup-router'

const app = createApp(App)
setupRouter(app, 'popup')
app.mount('#app')
