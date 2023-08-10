import type { UserConfig } from 'vite'
import { resolvePath } from './scripts/resolve-path'
import vue from '@vitejs/plugin-vue'
import vueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import layouts from 'vite-plugin-vue-layouts'
import pages from 'vite-plugin-pages'

export const sharedConfig: UserConfig = {
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
  }
}

export const plugins: UserConfig['plugins'] = [
  vue(),
  vueI18nPlugin({
    include: resolvePath('src/locales/**')
  }),
  autoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/, /\.vue\?vue/, // .vue
      /\.md$/ // .md
    ],
    imports: [
      // presets
      'vue',
      'vue-router',
      {
        'vue-i18n': [
          'useI18n'
        ]
      },
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
      enabled: true, // Default `false`
      filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    }
  }),
  components({
    dts: true,
    dirs: ['src/components'],
    extensions: ['vue'],
    // globs: ['src/components/*.{vue}'], // this prevents from registering
    deep: true,
    include: [/\.vue$/, /\.vue\?vue/],
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/]
    // directoryAsNamespace: false,
  }),
  pages({
    dirs: [
      { dir: 'src/app/popup/pages', baseRoute: 'popup' }
    ],
    exclude: ['**/components/*.vue']
  }),
  layouts({
    layoutsDirs: [
      'src/app/popup/layouts'
    ],
    exclude: ['**/components/*.vue'],
    defaultLayout: 'default'
  })
]