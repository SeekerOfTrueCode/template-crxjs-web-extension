<script setup lang="ts">
const isClicked = ref(false)
defineProps<{ msg: string }>()
defineEmits<{ click: [] }>()
</script>

<template>
  <div
    data-testid="hello-div"
    @click="
      $emit('click');
      isClicked = true;
    "
  >
    {{ msg }}
    <div v-if="isClicked" data-testid="clicked">clicked</div>
  </div>
</template>

<style scoped></style>
