<template>
  <main class="min-h-screen">
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
    >
      <ContentDoc v-slot="{ doc }" tag="article">
        <article>
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ doc.title }}
          </h1>

          <!-- Affichage de l'image si disponible -->
          <img
            v-if="doc.image"
            :src="doc.image"
            :alt="doc.title"
            class="w-full aspect-square object-cover rounded-2xl mb-6"
          />
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
  </main>
</template>
<script setup>
const config = useRuntimeConfig()
const route = useRoute();
const { slug } = route.params;
useSeoMeta({
  ogImage: `${config.public.siteUrl}${config.public.ogImageBlogBasePath}/${slug}.png`,
  twitterImage: `${config.public.siteUrl}${config.public.ogImageBlogBasePath}/${slug}.png`,
  twitterCard: "summary_large_image",
  articleAuthor: "Kevin Kenfack",
});
</script>
<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
