import { App, createApp } from 'vue'

export function withSetup<TResult>(composable: () => TResult): [TResult, App<Element>] {
  let result: TResult
  const app = createApp({
    setup() {
      result = composable()
      // suppress missing template warning
      return () => { }
    }
  })
  app.mount(document.createElement('div'))
  // return the result and the app instance
  // for testing provide / unmount
  return [result!, app]
}
