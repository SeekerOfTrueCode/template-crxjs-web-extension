import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { crx } from '@crxjs/vite-plugin'
import manifest from './scripts/manifest.config' // Node 14 & 16
import layouts from 'vite-plugin-vue-layouts'
import pages from 'vite-plugin-pages'

import { PATHS } from './scripts/constants/paths'
import { resolvePath } from './scripts/resolve-path'

export default defineConfig({
  server: { // FIX: This is related to Vite ^4.3.X
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolvePath('src')
      },
      {
        find: '@@',
        replacement: resolvePath('.')
      },
    ]
  },
  plugins: [
    vue(),
    crx({ manifest }),
    pages({
      dirs: [
        { dir: 'src/app/popup/pages', baseRoute: 'popup' },
      ],
      exclude: ['**/components/*.vue']
    }),
    layouts({
      layoutsDirs: [
        'src/app/popup/layouts',
      ],
      exclude: ['**/components/*.vue'],
      defaultLayout: 'default'
    })
  ]
})