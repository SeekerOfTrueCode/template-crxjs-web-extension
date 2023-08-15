import { defineConfig } from 'vitest/config'
import { sharedConfig, plugins } from './vite.config.shared'

export default defineConfig({
  ...sharedConfig,
  plugins,
  test: {
    globals: true,
    environment: 'happy-dom',
    clearMocks: true,
    setupFiles: './scripts/setup-tests.ts' //👈 Our configuration file enabled here
  }
})