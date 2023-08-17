import type { App } from 'vue'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $appLoading: Ref<boolean>;
    }
}

export function setupLoading(app: App, onLoading: () => (Promise<void> | void)) {
  const appLoading = ref(true)
  const isAppLoading = computed(() => appLoading.value)

  nextTick().then(async () => {
    try {
      await onLoading()
    } finally {
      appLoading.value = false
    }
  })

  app.config.globalProperties.$appLoading = isAppLoading
  app.provide<Ref<boolean>>('appLoading', isAppLoading)
}
