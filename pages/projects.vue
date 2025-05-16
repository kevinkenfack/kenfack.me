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
definePageMeta({
  scrollToTop: false
});
const config = useRuntimeConfig();
const description =
  "J'ai travaillé sur des tonnes de petits projets au fil des ans, mais voici ceux dont je suis le plus fier. Beaucoup d'entre eux sont open-source, donc si vous voyez quelque chose qui vous intéresse, regardez le code et contribuez si vous avez des idées pour l'améliorer.";

useSeoMeta({
  title: "Projets | Kevin Kenfack",
  description,
  ogTitle: "Projets | Kevin Kenfack",
  ogDescription: description,
  ogImage: `${config.public.siteUrl}/og-image.jpg`,
  twitterCard: "summary_large_image",
  twitterTitle: "Projets | Kevin Kenfack",
  twitterDescription: description,
  twitterImage: `${config.public.siteUrl}/og-image.jpg`,
  ogSiteName: "Kevin Kenfack",
  ogType: "website",
  ogUrl: `${config.public.siteUrl}/projects`,
});

// Schema.org pour la page Projets
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Projets',
        description: description,
        url: `${config.public.siteUrl}/projects`,
        publisher: {
          '@type': 'Person',
          name: 'Kevin Kenfack',
          url: config.public.siteUrl
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${config.public.siteUrl}/projects`
        },
        about: {
          '@type': 'Thing',
          name: 'Projets Open Source',
          description: 'Collection de projets open source et personnels dans le domaine du développement web'
        }
      })
    }
  ]
});

const { data: projects } = useLazyAsyncData("projects-all", () =>
  queryContent("/projects").find()
);

</script>
