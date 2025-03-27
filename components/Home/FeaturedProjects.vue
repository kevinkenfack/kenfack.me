<template>
  <div class="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#1a1a1a] rounded-lg p-6 transition-all duration-300 hover:border-gray-300 dark:hover:border-[#2a2a2a] hover:bg-gray-50 dark:hover:bg-[#111111]">
    <h2 class="
      uppercase text-xs font-semibold 
      text-gray-500 dark:text-gray-400 
      mb-6 
      border-b pb-2 
      border-gray-200 dark:border-gray-800
    ">
      PROJETS EN VEDETTE
    </h2>
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        label="Tout les projets &rarr;"
        to="/projects"
        variant="link"
        color="gray"
        class="
          text-gray-600 dark:text-gray-300 
          hover:text-primary-400 
          transition-colors duration-300
        "
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: projects } = await useAsyncData("projects-home", () =>
  queryContent("/projects").limit(3).find()
);
</script>