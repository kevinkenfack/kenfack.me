<template>
  <div class="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#1a1a1a] rounded-lg p-6 transition-all duration-300 hover:border-gray-300 dark:hover:border-[#2a2a2a] hover:bg-gray-50 dark:hover:bg-[#111111]">
    <h2 class="
      text-xs font-bold uppercase 
      tracking-wider 
      text-gray-500 dark:text-gray-400 
      mb-6 
      border-b pb-2 
      border-gray-200 dark:border-gray-800
    ">
      Retrouvez-moi sur mes réseaux
    </h2>
    <div class="space-y-4">
      <NuxtLink
        v-for="link in links"
        :key="link.icon"
        :to="link.url"
        target="_blank"
        external
        class="
          flex items-center justify-between 
          py-2 px-3 
          rounded-lg 
          transition-all duration-300 
          hover:bg-gray-100 dark:hover:bg-[#111111]
          group
        "
      >
        <div class="flex items-center space-x-3">
          <Icon 
            :name="link.icon" 
            class="
              w-6 h-6 
              text-gray-600 dark:text-gray-500 
              group-hover:text-primary-400 
              transition-colors duration-300
            "
          />
          <span class="
            text-sm font-medium 
            text-gray-700 dark:text-gray-300 
            group-hover:text-primary-400 
            transition-colors duration-300
          ">
            {{ link.name }}
          </span>
        </div>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="
            h-5 w-5 
            text-gray-400 dark:text-gray-600 
            group-hover:text-primary-400 
            transition-colors duration-300
          " 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fill-rule="evenodd" 
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
            clip-rule="evenodd" 
          />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const links = [
  {
    name: "Facebook",
    url: "https://web.facebook.com/kevinkenfackjoel",
    icon: "mdi:facebook-box",
  },
  {
    name: "GitHub",
    url: "https://github.com/kevinkenfack",
    icon: "mdi:github-box",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/fayaz-aralikatti/",
    icon: "mdi:linkedin",
  },
  {
    name: "Telegram",
    url: "https://t.me/kevinkenfack",
    icon: "mdi:telegram",
  },
];
</script>