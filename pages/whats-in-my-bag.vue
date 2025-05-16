<template>
  <main class="min-h-screen">
    <AppHeader
      class="mb-12"
      title="Qu'y a-t-il dans mon sac ?"
      :description="description"
    />
    <div class="space-y-24">
      <ul class="space-y-8">
        <AppUsesHeader title="Matériel" />
        <AppUsesItem v-for="(item, id) in hardware" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="Logiciel" />
        <AppUsesItem v-for="(item, id) in software" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="Bureau" />
        <AppUsesItem v-for="(item, id) in desk" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="Autres" />
        <AppUsesItem v-for="(item, id) in other" :key="id" :item="item" />
      </ul>
    </div>
  </main>
</template>

<script setup>
const config = useRuntimeConfig();
const description =
  "Les logiciels que j'utilise, les gadgets que j'aime et les autres choses que je recommande. Voici une grande liste de tous mes produits préférés.";

useSeoMeta({
  title: "Qu'y a-t-il dans mon sac ? | Kevin Kenfack",
  description,
  ogTitle: "Qu'y a-t-il dans mon sac ? | Kevin Kenfack",
  ogDescription: description,
  ogImage: `${config.public.siteUrl}/og-image.jpg`,
  twitterCard: "summary_large_image",
  twitterTitle: "Qu'y a-t-il dans mon sac ? | Kevin Kenfack",
  twitterDescription: description,
  twitterImage: `${config.public.siteUrl}/og-image.jpg`,
  ogSiteName: "Kevin Kenfack",
  ogType: "website",
  ogUrl: `${config.public.siteUrl}/whats-in-my-bag`,
});

// Schema.org pour la page "Qu'y a-t-il dans mon sac ?"
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: "Qu'y a-t-il dans mon sac ?",
        description: description,
        url: `${config.public.siteUrl}/whats-in-my-bag`,
        publisher: {
          '@type': 'Person',
          name: 'Kevin Kenfack',
          url: config.public.siteUrl
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${config.public.siteUrl}/whats-in-my-bag`
        },
        about: {
          '@type': 'Thing',
          name: 'Équipement et Outils',
          description: 'Collection de matériel, logiciels et outils utilisés dans le travail quotidien'
        }
      })
    }
  ]
});

const { data: items } = useLazyAsyncData('uses', () =>
  queryContent('/uses').find()
)

const hardware = computed(() =>
  items.value?.filter((item) => item.category === 'hardware') ?? []
)
const software = computed(() =>
  items.value?.filter((item) => item.category === 'software') ?? []
)
const desk = computed(() =>
  items.value?.filter((item) => item.category === 'desk') ?? []
)
const other = computed(() =>
  items.value?.filter((item) => item.category === 'others') ?? []
)

</script>
