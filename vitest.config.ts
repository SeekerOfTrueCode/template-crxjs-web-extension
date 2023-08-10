import { defineConfig } from 'vitest/config'
import { sharedConfig, plugins } from './vite.config.shared'

// https://vitejs.dev/config/
export default defineConfig({
  ...sharedConfig,
  plugins,
  test: {
    globals: true,
    environment: 'happy-dom'
  }
})
