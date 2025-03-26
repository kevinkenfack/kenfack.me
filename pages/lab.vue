<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Laboratoire" :description="description" />
    <div class="space-y-24">
      <ContentList path="/lab" v-slot="{ list }">
        <ContentQuery
          v-for="item in list"
          :key="item._path"
          :path="item._path"
          find="one"
          v-slot="{ data }"
        >
          <ContentRenderer>
            <ContentRendererMarkdown :value="data" />
          </ContentRenderer>
        </ContentQuery>
      </ContentList>
    </div>
  </main>
</template>

<script setup>
const description = "Quelques expériences aléatoires avec l'assurance-chômage que je fais pendant mon temps libre.";
useSeoMeta({
  title: "Laboratoire | Kevin Kenfack",
  description,
});
</script>
