<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Une vitrine pour mes projets open-source." :description="description" />
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </main>
</template>

<script setup>
const description =
  "J'ai travaillé sur des tonnes de petits projets au fil des ans, mais voici ceux dont je suis le plus fier. Beaucoup d'entre eux sont open-source, donc si vous voyez quelque chose qui vous intéresse, regardez le code et contribuez si vous avez des idées pour l'améliorer.";
useSeoMeta({
  title: "Projects | Kevin Kenfack",
  description,
});

const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);
</script>
