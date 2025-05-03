<template>
  <main class="h-screen flex items-center justify-center">
    <div class="text-center px-4">
      <h1 class="text-6xl sm:text-8xl font-bold text-primary-400 mb-4">404</h1>
      <h2 class="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
        Oups ! Page non trouvée
      </h2>
      <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-400 hover:bg-primary-500 transition-colors duration-300"
        >
          Retour à l'accueil
        </NuxtLink>
        <NuxtLink 
          to="/contact" 
          class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-300"
        >
          Me contacter
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

definePageMeta({
  layout: '404'
});

useSeoMeta({
  title: "404 - Page non trouvée",
  description: "La page que vous recherchez n'existe pas ou a été déplacée.",
});
</script> 