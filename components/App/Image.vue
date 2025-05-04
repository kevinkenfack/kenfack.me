<!-- components/content/Image.vue -->
<template>
    <NuxtImg
      :src="src"
      :alt="alt"
      :placeholder="[50, 30]"
      format="webp"
      loading="lazy"
      class="rounded-lg ring-1 ring-gray-200 dark:ring-white/10"
    />
  </template>
  
  <script setup>
  defineProps({
    src: String,
    alt: String
  })
  </script>
  