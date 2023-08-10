import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', () => {
  const count = ref(0)
  return { count }
}, { persistedState: { persist: true } })
