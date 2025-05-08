<template>
  <div>
    <div class="mb-6 flex items-center gap-3">
      <div
        class="flex-none rounded-full p-1 text-primary-500 bg-primary-500/10"
      >
        <div class="h-1.5 w-1.5 rounded-full bg-current"></div>
      </div>
      <h2 class="uppercase text-xs font-semibold text-gray-400">
        PROJETS EN VEDETTE
      </h2>
    </div>
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        label="Tous les projets &rarr;"
        to="/projects"
        variant="link"
        color="gray"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: projects } = await useAsyncData("projects-home", () =>
  queryContent("/projects").limit(3).find()
);
</script>