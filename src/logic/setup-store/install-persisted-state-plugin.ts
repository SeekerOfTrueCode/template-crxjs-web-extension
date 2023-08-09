import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'
import stringify from 'json-stringify-safe'
import { TransportItem } from './types/transport-item'
import { PiniaCustomProperties, PiniaCustomStateProperties, PiniaPluginContext } from 'pinia'
import { USED_STORAGE } from './constants'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    $ignorePersistance: (callback: () => Promise<void> | void) => void
  }
}

export function installPersistedStatePlugin(context: PiniaPluginContext, baseRoute: string): Partial<PiniaCustomProperties & PiniaCustomStateProperties> | void {
  const storeId = context.store.$id
  const ignoreSetItem = ref(false)

  async function $ignorePersistance(callback: () => Promise<void> | void): Promise<Promise<void> | void> {
    ignoreSetItem.value = true
    await nextTick()
    await callback()
    await nextTick()
    ignoreSetItem.value = false
  }

  createPersistedStatePlugin({
    storage: {
      getItem: async (key) => {
        const result: TransportItem = await chrome.storage[USED_STORAGE].get(key)
        return result[key]?.value
      },
      setItem: async (key, value) => {
        if (key !== storeId) return
        if (ignoreSetItem.value) return

        const data: TransportItem = { [key]: { value, from: baseRoute } }
        await chrome.storage[USED_STORAGE].set(data)
      },
      removeItem: async (key) => {
        return await chrome.storage[USED_STORAGE].remove(key)
      }
    },
    serialize: value => stringify(value)
  })(context)

  return {
    $ignorePersistance
  }
}