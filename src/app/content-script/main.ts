import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

export function mountApp(rootContainer: string | Element) {
    createApp(App)
    .mount(rootContainer)
}