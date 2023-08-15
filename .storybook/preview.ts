import type { Preview } from "@storybook/vue3";
import { setup } from '@storybook/vue3';
import { setupStore } from '../src/logic/setup-store'
import { setupI18n } from '../src/logic/setup-i18n'
import stringify from 'json-stringify-safe'

setup((app) => {
  setupStore(app, 'popup', {
    async get(key) {
      return {
        [key]: JSON.parse(localStorage.getItem(key as any) ?? 'null')
      }
    },
    async set(items: { [key: string]: any }) {
      const entries = Object.entries(items)
      entries.forEach(([key, value]) => {
        const stringifiedValue = stringify(value)
        localStorage.setItem(key, stringifiedValue)
      })
    },
    async remove(keys) {
      localStorage.removeItem(keys)
    },
    async clear() {
      localStorage.clear()
    },
    onChanged: {
      addListener(changes) {
        changes({})
        console.log('onChanged mocked addListener')
      }
    } as any
  })
  setupI18n(app, 'popup')
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
