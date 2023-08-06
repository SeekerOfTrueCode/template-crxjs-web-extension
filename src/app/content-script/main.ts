import { createApp } from 'vue'
// import './style.css' // we have to apply it inside the content-script's shadow element instead
import App from './App.vue'

export function mountApp(rootContainer: string | Element) {
    createApp(App)
    .mount(rootContainer)
}