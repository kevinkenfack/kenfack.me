<template>
  <div>
    <div class="mb-6 flex items-center gap-3">
      <div
        class="flex-none rounded-full p-1 text-primary-500 bg-primary-500/10"
      >
        <div class="h-1.5 w-1.5 rounded-full bg-current"></div>
      </div>
      <h2 class="uppercase text-xs font-semibold text-gray-400">
        ARTICLES RÉCENTS
      </h2>
    </div>
    <ul class="space-y-16">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        label="Tous les articles &rarr;"
        to="/articles"
        variant="link"
        color="gray"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: articles } = await useAsyncData("articles-home", () =>
  queryContent("/articles")
    .sort({ published: -1 })
    .limit(3)
    .only(["title", "description", "published", "slug", "thumbnail", "_path"])
    .find()
);
</script>
