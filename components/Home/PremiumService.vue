<template>
  <div class="relative bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-900/40 rounded-2xl overflow-hidden">
    <div class="absolute inset-0 bg-grid-pattern pointer-events-none opacity-5"></div>

    <div class="w-full h-full rounded-t-2xl overflow-hidden">
      <NuxtImg 
        src="/uiroom-preview.png" 
        alt="Uiroom Website Preview" 
        class="w-full h-full object-cover object-top"
        placeholder="[50, 30]"
        width="auto"
        height="auto"
        format="webp"
      />
    </div>

    <div class="relative z-10 px-6 py-8 md:px-12 md:py-8">
      <div class="max-w-2xl">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex-none rounded-full p-1 text-primary-500 bg-primary-500/10">
            <div class="h-1.5 w-1.5 rounded-full bg-current"></div>
          </div>
          <h2 class="uppercase text-xs font-semibold text-gray-500 dark:text-gray-400">
            UIROOM
          </h2>
        </div>

        <h3 class="text-xl md:text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          Sites Web Premium pour Startups.
        </h3>

        <p class="text-gray-600 dark:text-gray-300 mb-6 text-sm md:text-base">
          Transformez votre vision en une présence web exceptionnelle. Design, performance et impact.
        </p>

        <div class="flex flex-col sm:flex-row items-center gap-4">
          <NuxtLink
            to="https://uiroom.pro"
            target="_blank"
            class="w-full sm:w-auto flex items-center justify-center gap-2 rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white hover:bg-primary-700 transition-colors duration-200"
          >
            Découvrir
            <span aria-hidden="true">→</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Composant PremiumService
</script>

<style scoped>
.bg-grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(79, 70, 229, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(79, 70, 229, 0.1) 1px, transparent 1px);
  background-size: 16px 16px;
}
</style>