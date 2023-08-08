import { createPinia } from 'pinia'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function setupStore(app: App, baseRoute: string) {
  const pinia = createPinia()
  app.use(pinia)
}
