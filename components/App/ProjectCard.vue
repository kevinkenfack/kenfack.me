<template>
  <NuxtLink
    class="group flex items-center gap-4 p-4 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#1a1a1a] rounded-lg transition-all duration-300 hover:border-gray-300 dark:hover:border-[#2a2a2a] hover:bg-gray-50 dark:hover:bg-[#111111]"
    :to="project.url"
    target="_blank"
    external
  >
    <div class="flex-1">
      <h3
        class="text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-300 group-hover:text-primary-400 transition-colors duration-300"
      >
        {{ project.name }}
      </h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
        {{ project.description }}
      </p>
    </div>
    <UAvatar
      :src="project.thumbnail"
      :ui="{ rounded: 'rounded-lg z-10 relative transition-transform duration-300 group-hover:scale-110' }"
      size="md"
      :alt="project.name"
    />
  </NuxtLink>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
