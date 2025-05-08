<!-- components/GlobalLoader.vue -->
<template>
    <div v-if="isLoading" class="fixed inset-0 bg-gray-100 dark:bg-black z-50 flex items-center justify-center">
      <!-- Ajoutez ici votre animation de chargement -->
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const isLoading = ref(false)
  
  watch(() => route.fullPath, () => {
    isLoading.value = true
    setTimeout(() => {
      isLoading.value = false
    }, 300) // Ajustez ce délai selon vos besoins
  })
  </script>