<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Laboratoire" :description="description" />
    <div class="space-y-12">
      <ContentList path="/lab" v-slot="{ list }">
        <ContentQuery
          v-for="item in list"
          :key="item._path"
          :path="item._path"
          find="one"
          v-slot="{ data }"
        >
          <div
            class="group p-6 bg-white dark:bg-black border border-gray-200 dark:border-[#1a1a1a] rounded-lg transition-all duration-300 hover:border-gray-300 dark:hover:border-[#2a2a2a] hover:bg-gray-50 dark:hover:bg-[#080808]"
          >
            <h2
              class="text-lg font-semibold font-display tracking-tight text-gray-800 dark:text-gray-300 group-hover:text-primary-400 transition-colors duration-300"
            >
              {{ data.title }}
            </h2>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {{ data.description || "Aucune description disponible." }}
            </p>
            <div class="mt-4">
              <ContentRenderer>
                <ContentRendererMarkdown :value="data" />
              </ContentRenderer>
            </div>
          </div>
        </ContentQuery>
      </ContentList>
    </div>
  </main>
</template>

<script setup>
const config = useRuntimeConfig();
const description =
  "Quelques expériences aléatoires que je fais pendant mon temps libre.";

useSeoMeta({
  title: "Laboratoire | Kevin Kenfack",
  description,
  ogTitle: "Laboratoire | Kevin Kenfack",
  ogDescription: description,
  ogImage: `${config.public.siteUrl}/og-image.jpg`,
  twitterCard: "summary_large_image",
  twitterTitle: "Laboratoire | Kevin Kenfack",
  twitterDescription: description,
  twitterImage: `${config.public.siteUrl}/og-image.jpg`,
  ogSiteName: "Kevin Kenfack",
  ogType: "website",
  ogUrl: `${config.public.siteUrl}/lab`,
});

// Schema.org pour la page Laboratoire
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Laboratoire',
        description: description,
        url: `${config.public.siteUrl}/lab`,
        publisher: {
          '@type': 'Person',
          name: 'Kevin Kenfack',
          url: config.public.siteUrl
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${config.public.siteUrl}/lab`
        }
      })
    }
  ]
});
</script>
