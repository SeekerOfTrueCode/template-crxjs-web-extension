<script setup lang="ts">
import { useCountStore } from '@/store/count'

defineProps<{ msg: string }>()

const countStore = useCountStore()
await countStore.$persistedState.isReady()
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="() => countStore.count++">
      count is {{ countStore.count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
