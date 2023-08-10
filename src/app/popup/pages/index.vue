<script setup lang="ts">
const { t } = useI18n({})
</script>

<template>
  <Suspense>
    <CountExample />
  </Suspense>
  <RouterLink :to="'/about'">{{ t("route.about") }}</RouterLink>
  <RouterLink :to="'/about/complex'">{{ t("route.aboutComplex") }}</RouterLink>
</template>

<route lang="yaml">
name: "Home"
meta:
  layout: popup-default
</route>
