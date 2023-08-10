import { PiniaPluginContext } from 'pinia'
import { TransportObject } from './types/transport-object'
import { USED_STORAGE } from './constants'

export function installPersistedStatePluginExtended(context: PiniaPluginContext, baseRoute: string) {
  const storeId = context.store.$id

  chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace !== USED_STORAGE) return

    for (const [key, { newValue }] of Object.entries(changes)) {
      if (storeId !== key) return
      const newVal = newValue as TransportObject

      if (newVal == null) return
      if (newVal.from === baseRoute) return

      context.store.$ignorePersistance(async () => {
        const storageItem = await chrome.storage[USED_STORAGE].get(storeId)
        context.store.$state = JSON.parse(storageItem[storeId].value)
      })
    }
  })
}
