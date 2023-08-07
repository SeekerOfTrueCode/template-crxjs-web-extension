<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <span>Page:</span>
  <HelloWorld msg="Vite + Vue" />
  <RouterLink :to="'/about'">Go to about</RouterLink>
  <RouterLink :to="'/about/complex'">Go to popup</RouterLink>
</template>

<route lang="yaml">
name: "Home"
meta:
  layout: popup-default
</route>
