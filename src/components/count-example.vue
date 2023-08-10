<script setup lang="ts">
import { useCountStore } from '@/store/count'

defineProps<{ [key: string]: unknown }>()

const countStore = useCountStore()
await countStore.$persistedState.isReady()
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="() => countStore.count++">
      Count is {{ countStore.count }}
    </button>
    <p>Edit <code>components/count-example.vue</code> to test HMR</p>
    <p></p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
