import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'
import stringify from 'json-stringify-safe'
import { TransportItem } from './types/transport-item'
import { PiniaCustomProperties, PiniaCustomStateProperties, PiniaPluginContext } from 'pinia'
import { Storage } from './types/storage'
import { TransportObject } from './types/transport-object'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    $ignorePersistance: (callback: () => Promise<void> | void) => void
  }
}

interface Options {
  context: PiniaPluginContext
  baseRoute: string
  storage: Storage
}

export function installPersistedStatePlugin({ context, baseRoute, storage }: Options): Partial<PiniaCustomProperties & PiniaCustomStateProperties> | void {
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
        const result: TransportItem = await storage.get(key)
        return result[key]?.value
      },
      setItem: async (key, value) => {
        if (key !== storeId) return
        if (ignoreSetItem.value) return

        const data: TransportItem = { [key]: { value, from: baseRoute } }
        await storage.set(data)
      },
      removeItem: async (key) => {
        return await storage.remove(key)
      }
    },
    serialize: value => stringify(value)
  })(context)

  storage.onChanged.addListener((changes) => {
    for (const [key, { newValue }] of Object.entries(changes)) {
      if (storeId !== key) return
      const newVal = newValue as TransportObject

      if (newVal == null) return
      if (newVal.from === baseRoute) return

      context.store.$ignorePersistance(async () => {
        const storageItem = await storage.get(storeId)
        context.store.$state = JSON.parse(storageItem[storeId].value)
      })
    }
  })

  return {
    $ignorePersistance
  }
}