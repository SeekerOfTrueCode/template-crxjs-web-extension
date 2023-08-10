import { defineConfig } from 'vitest/config'
import autoImport from 'unplugin-auto-import/vite'
import vue from '@vitejs/plugin-vue'

import { resolvePath } from './scripts/resolve-path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolvePath('src')
      },
      {
        find: '@@',
        replacement: resolvePath('.')
      }
    ]
  },
  plugins: [vue(), autoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/, /\.vue\?vue/, // .vue
      /\.md$/ // .md
    ],
    imports: [
      // presets
      'vue',
      'vue-router',
      // custom
      {
        '@vueuse/core': [
          // named imports
          // 'useMouse' // import { useMouse } from '@vueuse/core',
          // alias
          // ['useFetch', 'useMyFetch'] // import { useFetch as useMyFetch } from '@vueuse/core',
        ]
        // '[package-name]': [
        //   '[import-names]',
        //   // alias
        //   ['[from]', '[alias]']
        // ]
      },
      // example type import
      {
        from: 'vue-router',
        imports: ['RouteLocationRaw'],
        type: true
      }
    ],
    defaultExportByFilename: false,
    dirs: ['src/composables', './composables/**'],
    dts: './auto-imports.d.ts',
    vueTemplate: false,
    eslintrc: {
      enabled: false, // Default `false`
      filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    }
  })],
  test: {
    globals: true,
    environment: 'happy-dom'
  }
})
