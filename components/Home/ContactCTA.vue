<template>
  <div>
    <div class="mb-6 flex items-center gap-3">
      <div
        class="flex-none rounded-full p-1 text-primary-500 bg-primary-500/10"
      >
        <div class="h-1.5 w-1.5 rounded-full bg-current"></div>
      </div>
      <h2 class="uppercase text-xs font-semibold text-gray-400">
        CONTACTEZ-MOI
      </h2>
    </div>
    <div class="space-y-6">
      <h3 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Travaillons ensemble
      </h3>
      <p class="text-gray-600 dark:text-gray-400">
        Vous avez un projet en tête ? Discutons-en ! Je suis toujours ouvert à discuter de nouveaux projets, idées créatives ou opportunités de collaboration.
      </p>
      <div class="flex flex-col sm:flex-row items-center gap-4">
        <NuxtLink
          to="https://wa.me/33744953416"
          target="_blank"
          class="w-full sm:w-auto flex items-center justify-center gap-2 rounded-md bg-gray-900 dark:bg-white px-6 py-3 text-base font-semibold text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
        >
          Me contacter
          <span aria-hidden="true">→</span>
        </NuxtLink>
        <a
          href="mailto:contact@kenfack.me"
          class="text-base font-medium text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
        >
          contact@kenfack.me
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// Pas besoin de logique particulière pour ce composant
</script> 