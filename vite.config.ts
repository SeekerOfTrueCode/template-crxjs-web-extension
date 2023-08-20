import { defineConfig } from 'vite'
import manifest from './scripts/manifest.config' // Node 14 & 16
import { crx } from '@crxjs/vite-plugin'
import { sharedConfig, plugins } from './vite.config.shared'
import { PATHS } from './shared/constants/paths'
import { defineExtraHtmlPages } from './scripts/utils/define-extra-html-pages'
import { resolvePath } from './scripts/resolve-path'

export default defineConfig({
  ...sharedConfig,
  server: { // FIX: This is related to Vite ^4.3.X
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173
    }
  },
  plugins: [
    ...plugins,
    crx({ manifest })
  ],
  build: {
    rollupOptions: {
      input: {
        ...defineExtraHtmlPages([
          ['offscreen', resolvePath(`./${PATHS.HTML.OFFSCREEN}`)]
        ])
      }
    }
  }
})