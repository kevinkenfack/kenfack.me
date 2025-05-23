<template>
  <main class="min-h-screen">
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
    >
      <ContentDoc v-slot="{ doc }" tag="article">
        <article>
          <!-- Titre -->
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ doc.title }}
          </h1>

          <!-- Image -->
          <NuxtImg
            v-if="doc.thumbnail"
            :src="doc.thumbnail"
            :alt="doc.title"
            class="w-full aspect-square object-cover rounded-2xl mb-6"
            :placeholder="[50, 30]"
            width="auto"
            height="auto"
            format="webp"
          />

          <!-- Table des matières -->
          <div class="mb-8">
            <div class="rounded-lg overflow-hidden border border-primary-100 dark:border-primary-900/30">
              <button 
                @click="isTocOpen = !isTocOpen"
                class="
                  flex items-center justify-between w-full
                  px-4 py-3
                  text-sm font-medium
                  text-primary-600 dark:text-primary-400
                  bg-primary-50 dark:bg-primary-900/20
                  transition-colors duration-300
                  no-underline
                "
              >
                <span>Table des matières</span>
                <svg 
                  class="w-4 h-4 transform transition-transform duration-300" 
                  :class="{ 'rotate-180': isTocOpen }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                v-show="isTocOpen"
                class="p-4 bg-primary-50 dark:bg-primary-900/20 border-t border-primary-100 dark:border-primary-900/30"
              >
                <nav class="space-y-2">
                  <a 
                    v-for="heading in doc.body.toc.links" 
                    :key="heading.id"
                    :href="`#${heading.id}`"
                    class="
                      block text-sm
                      text-primary-600 dark:text-primary-400
                      hover:text-primary-700 dark:hover:text-primary-300
                      hover:underline
                      transition-colors duration-300
                      no-underline
                    "
                    :class="{ 'ml-4': heading.depth > 2 }"
                  >
                    {{ heading.text }}
                  </a>
                </nav>
              </div>
            </div>
          </div>

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
const isTocOpen = ref(false);

definePageMeta({
  scrollToTop: false
});

// Récupérer l'article actuel avec la table des matières
const { data: article } = useLazyAsyncData(`article-${slug}`, () =>
  queryContent(`/articles/${slug}`).findOne()
);

// Récupérer les articles recommandés
const { data: recommendedArticles } = useLazyAsyncData("recommended-articles", () =>
  queryContent("/articles")
    .where({ _path: { $ne: `/articles/${slug}` } })
    .sort({ published: -1 })
    .limit(2)
    .find()
);

// Génération de l'image OpenGraph pour l'article
const ogImage = defineOgImage({
  component: 'BlogArticle',
  width: 1200,
  height: 630,
  props: {
    title: article.value?.title,
    description: article.value?.description,
    headline: 'Kevin Kenfack - FullStack Developer',
    date: article.value?.published ? new Date(article.value.published).toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }) : '',
    colorMode: 'light'
  }
})
// Métadonnées SEO
useSeoMeta({
  title: `${article.value?.title}`,
  description: article.value?.description,
  ogTitle: article.value?.title,
  ogDescription: article.value?.description,
  ogImage: ogImage,
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogImageAlt: article.value?.title,
  twitterCard: "summary_large_image",
  twitterTitle: article.value?.title,
  twitterDescription: article.value?.description,
  twitterImage: ogImage,
  twitterImageAlt: article.value?.title,
  twitterSite: config.public.siteUrl,
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
        image: `${config.public.siteUrl}${article.value?.thumbnail}`,
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

<style lang="postcss">
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}

/* Style par défaut pour les liens */
.prose a {
  @apply transition-colors;
}

/* Style spécifique pour les liens externes avec un format particulier */
.prose a[href^="http"],
.prose a[href^="https"] {
  @apply text-primary-400 no-underline;
}

.prose a[href^="http"]:hover,
.prose a[href^="https"]:hover {
  @apply text-primary-500 underline;
}
</style>
