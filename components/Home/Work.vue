<template>
  <div class="bg-white dark:bg-black border border-gray-200 dark:border-[#1a1a1a] rounded-lg p-6 transition-all duration-300 hover:border-gray-300 dark:hover:border-[#2a2a2a] hover:bg-gray-50 dark:hover:bg-[#080808]">
    <h2 class="
      text-xs font-bold uppercase 
      tracking-wider 
      text-gray-500 dark:text-gray-400 
      mb-6 
      border-b pb-2 
      border-gray-200 dark:border-gray-800
    ">
      Expérience professionnelle
    </h2>
    <div class="space-y-8">
      <div 
        v-for="job in jobs" 
        :key="job.company"
        class="group"
      >
        <div class="flex items-center gap-4">
          <NuxtImg 
            :src="job.logo" 
            :alt="job.company"
            class="w-12 h-12 rounded-lg object-cover"
            placeholder
            format="webp"
          />
          <div class="flex-1">
            <a 
              :href="job.website" 
              target="_blank"
              class="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-400 transition-colors duration-300"
            >
              {{ job.company }}
            </a>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              {{ job.title }} • {{ job.period }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
      <a 
        href="/#" 
        download
        class="
          flex items-center justify-center gap-2 w-full
          px-4 py-2
          text-sm font-medium
          text-primary-600 dark:text-primary-400
          bg-primary-50 dark:bg-primary-900/20
          rounded-lg
          hover:bg-primary-100 dark:hover:bg-primary-900/30
          transition-colors duration-300
        "
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
        Télécharger mon CV
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
const jobs = [
  {
    title: "Dev Frontend",
    company: "Dotworld",
    period: "2023 - Présent",
    logo: "/companies/dotworld.png",
    website: "https://www.dotworld.ch/"
  },
  {
    title: "Développeur",
    company: "Uiroom",
    period: "2022 - Présent",
    logo: "/companies/uiroom.png",
    website: "https://uiroom.pro/"
  },
  {
    title: "Dev Full-stack",
    company: "Freelance",
    period: "2021 - 2022",
    logo: "/companies/3.png",
    website: "#"
  }
];
</script> 