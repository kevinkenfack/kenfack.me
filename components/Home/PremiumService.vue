<template>
  <div class="relative bg-gradient-to-br from-primary-50 to-primary-50 dark:from-primary-900/20 dark:to-primary-900/20 rounded-2xl overflow-hidden">
    <div class="absolute inset-0 bg-grid-pattern pointer-events-none opacity-5"></div>
    <!-- Image 
    <div class="w-full h-full rounded-t-2xl overflow-hidden">
      <NuxtImg 
        src="/uiroom-preview.png" 
        alt="Uiroom Website Preview" 
        class="w-full h-full object-cover object-top"
        :placeholder="[50, 25]"
        format="webp"
      />
    </div>
    -->

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
          <div class="sm:hidden flex flex-col items-center w-full mb-4">
            <div class="flex items-center justify-center gap-3 mb-3">
              <div class="flex items-center -space-x-3">
                <NuxtImg
                  src="/client1.webp" 
                  alt="Client Avatar 1" 
                  placeholder
                  format="webp"
                  class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                />
                <NuxtImg 
                  src="/client2.webp" 
                  alt="Client Avatar 2" 
                  class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                  placeholder
                  format="webp"
                />
                <NuxtImg 
                  src="/client3.webp" 
                  alt="Client Avatar 3"
                  placeholder
                  format="webp"
                  class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                />
                <div class="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-xs font-bold text-primary-600 dark:text-primary-300 border-2 border-white dark:border-gray-800">
                  54+
                </div>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                ⭐⭐⭐⭐ Trusted by mores
              </p>
            </div>
          </div>

          <NuxtLink
            to="https://uiroom.pro"
            target="_blank"
            class="w-full sm:w-auto flex items-center justify-center gap-2 rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white hover:bg-primary-700 transition-colors duration-200"
          >
            Découvrir
            <span aria-hidden="true">→</span>
          </NuxtLink>
          
          <div class="flex flex-col sm:flex-row items-center gap-3">
            <div class="hidden sm:flex items-center -space-x-3">
              <NuxtImg
                src="/client1.webp" 
                alt="Client Avatar 1" 
                placeholder
                format="webp"
                class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 object-cover"
              />
              <NuxtImg 
                src="/client2.webp" 
                alt="Client Avatar 2" 
                placeholder
                format="webp"
                class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 object-cover"
              />
              <NuxtImg 
                src="/client3.webp" 
                alt="Client Avatar 3"
                placeholder
                format="webp"
                class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 object-cover"
              />
              <div class="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-xs font-bold text-primary-600 dark:text-primary-300 border-2 border-white dark:border-gray-800">
                54+
              </div>
            </div>
            <p class="hidden sm:block text-xs text-gray-500 dark:text-gray-400 ml-3">
              ⭐⭐⭐⭐ startups, founders chose us.
            </p>
          </div>
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