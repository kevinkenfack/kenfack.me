<template>
  <li>
    <NuxtLink
      :to="item.url"
      class="group block p-4 bg-white dark:bg-black border border-gray-200 dark:border-[#1a1a1a] rounded-lg transition-all duration-300 hover:border-gray-300 dark:hover:border-[#2a2a2a] hover:bg-gray-50 dark:hover:bg-[#080808]"
      target="_blank"
      external
    >
      <div class="flex flex-col sm:flex-row sm:items-center gap-4">
        <div v-if="item.image" class="flex-shrink-0 self-start sm:self-center">
          <img 
            :src="item.image" 
            :alt="item.name"
            class="w-12 h-12 object-cover rounded-lg border border-gray-200 dark:border-[#1a1a1a]"
          />
        </div>
        <div class="flex-grow min-w-0">
          <p
            class="text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-300 group-hover:text-primary-400 transition-colors duration-300 truncate"
          >
            {{ item.name }}
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
            {{ item.description }}
          </p>
        </div>
      </div>
    </NuxtLink>
  </li>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
