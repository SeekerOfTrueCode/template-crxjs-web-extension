<script setup lang="ts"></script>

<template>
  <Suspense>
    <div
      style="
        position: absolute;
        top: 0px;
        right: 0px;
        color-scheme: light dark;
        background-color: #2424249c;
      "
    >
      <!-- <div style="width: 200px">Hey</div>
    <button style="pointer-events: all">Click me</button> -->
      <div style="pointer-events: all"><HelloWorld msg="" /></div>
    </div>
  </Suspense>
</template>

<style scoped></style>
