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

          <NuxtImg
            v-if="doc.image"
            :src="doc.image"
            :alt="doc.title"
            class="w-full aspect-square object-cover rounded-2xl mb-6"
            :placeholder="[50, 30]"
            width="auto"
            height="auto"
            format="webp"
          />

          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>

    <!-- Section des recommandations -->
    <div class="mt-16">
      <h2 class="text-2xl font-bold mb-8">Articles recommandés</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AppArticleCard v-for="article in recommendedArticles" :key="article._path" :article="article" />
      </div>
    </div>
  </main>
</template>

<script setup>
const config = useRuntimeConfig()
const route = useRoute();
const { slug } = route.params;

// Récupérer l'article actuel
const { data: article } = await useAsyncData(`article-${slug}`, () =>
  queryContent(`/articles/${slug}`).findOne()
);

// Récupérer les articles recommandés
const { data: recommendedArticles } = await useAsyncData("recommended-articles", () =>
  queryContent("/articles")
    .where({ _path: { $ne: `/articles/${slug}` } })
    .sort({ published: -1 })
    .limit(2)
    .find()
);

// Métadonnées SEO
useSeoMeta({
  title: `${article.value?.title} | Kevin Kenfack`,
  description: article.value?.description,
  ogTitle: article.value?.title,
  ogDescription: article.value?.description,
  ogImage: `${config.public.siteUrl}${config.public.ogImageBlogBasePath}/${slug}.png`,
  twitterCard: "summary_large_image",
  twitterTitle: article.value?.title,
  twitterDescription: article.value?.description,
  twitterImage: `${config.public.siteUrl}${config.public.ogImageBlogBasePath}/${slug}.png`,
  articleAuthor: "Kevin Kenfack",
  articlePublishedTime: article.value?.published,
  articleModifiedTime: article.value?.updated,
  articleSection: "Articles",
  articleTag: article.value?.tags?.join(", "),
  ogType: "article",
  ogSiteName: "Kevin Kenfack",
  ogUrl: `${config.public.siteUrl}/articles/${slug}`,
});

// Schema.org pour les articles
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.value?.title,
        description: article.value?.description,
        image: `${config.public.siteUrl}${config.public.ogImageBlogBasePath}/${slug}.png`,
        author: {
          '@type': 'Person',
          name: 'Kevin Kenfack',
          url: config.public.siteUrl
        },
        publisher: {
          '@type': 'Person',
          name: 'Kevin Kenfack',
          url: config.public.siteUrl
        },
        datePublished: article.value?.published,
        dateModified: article.value?.updated,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${config.public.siteUrl}/articles/${slug}`
        }
      })
    }
  ]
});
</script>

<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
