<template>
  <main class="min-h-screen">
    <AppHeader class="mb-16" title="Articles" :description="description" />
    <ul class="space-y-16">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
  </main>
</template>

<script setup>
const config = useRuntimeConfig();
const description =
  "Toutes mes réflexions sur la programmation, les interfaces utilisateur, la conception de produits, etc., rassemblées par ordre chronologique.";

useSeoMeta({
  title: "Articles | Kevin Kenfack",
  description,
  ogTitle: "Articles | Kevin Kenfack",
  ogDescription: description,
  ogImage: `${config.public.siteUrl}/og-image.jpg`,
  twitterCard: "summary_large_image",
  twitterTitle: "Articles | Kevin Kenfack",
  twitterDescription: description,
  twitterImage: `${config.public.siteUrl}/og-image.jpg`,
  ogSiteName: "Kevin Kenfack",
  ogType: "website",
  ogUrl: `${config.public.siteUrl}/articles`
});

// Schema.org pour la page Articles
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Articles | Kevin Kenfack',
        description: description,
        url: `${config.public.siteUrl}/articles`,
        author: {
          '@type': 'Person',
          name: 'Kevin Kenfack',
          url: `${config.public.siteUrl}/about`
        }
      })
    }
  ]
});

const { data: articles } = await useAsyncData("all-articles", () =>
  queryContent("/articles").sort({ published: -1 }).find()
);
</script>
