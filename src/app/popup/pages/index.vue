<script setup lang="ts"></script>

<template>
  <Suspense>
    <CountExample />
  </Suspense>
  <RouterLink :to="'/about'">Go to about</RouterLink>
  <RouterLink :to="'/about/complex'">Go to popup</RouterLink>
</template>

<route lang="yaml">
name: "Home"
meta:
  layout: popup-default
</route>
