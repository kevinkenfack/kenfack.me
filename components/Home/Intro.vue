<template>
  <div class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="relative">
        <NuxtImg 
          src="/avatar.png" 
          alt="Kevin Kenfack"
          class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
          sizes="48px sm:64px" 
          placeholder 
          format="webp" 
        />
        <div 
          class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"
          :class="{
            'bg-green-500': availabilityStatus === 'available',
            'bg-yellow-500': availabilityStatus === 'busy',
            'bg-red-500': availabilityStatus === 'unavailable'
          }"
        ></div>
      </div>
      <div class="flex flex-col">
        <span 
          class="text-sm font-medium px-3 py-1 rounded-full"
          :class="{
            'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400': availabilityStatus === 'available',
            'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400': availabilityStatus === 'busy',
            'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400': availabilityStatus === 'unavailable'
          }"
        >
          {{ availabilityText }}
        </span>
      </div>
    </div>
    <h1 class="text-xl md:text-4xl sm:text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
      Bonjour, je suis Kevin Kenfack,<br />mais vous pouvez m'appeler Joël.
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
       Je suis un Développeur spécialisé dans l'écosystème JavaScript/TypeScript, je travaille
       principalement avec React, Next.js, Node.js Je suis passionné par la création d'interfaces
       web modernes et performantes. J'aime partager mes réflexions sur la tech et le design.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      Actuellement développeur front-end chez 
      <a href="https://www.dotworld.ch/" target="_blank" class="text-primary-400 hover:font-bold">Dotworld</a>, 
      je dirige également 
      <a href="https://uiroom.pro/" target="_blank" class="text-primary-400 hover:font-bold">Uiroom</a>, 
      une agence web où nous aidons startups, SaaS et entrepreneurs à concevoir des produits efficaces grâce à un bon design, un bon message, et un bon code.
    </p>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const availabilityStatus = ref(config.public.availabilityStatus || 'available');

const availabilityText = computed(() => {
  switch (availabilityStatus.value) {
    case 'available':
      return 'Disponible pour des missions';
    case 'busy':
      return 'Occupé, mais contactez-moi';
    case 'unavailable':
      return 'Indisponible pour le moment';
    default:
      return 'Indisponible pour le moment';
  }
});

const description = "Développeur et entrepreneur passionné, je conçois des sites web beaux, intuitifs et réactifs.";

useSeoMeta({
  title: "Kevin Kenfack",
  description,
  ogTitle: "Kevin Kenfack",
  ogDescription: description,
  ogImage: `${config.public.siteUrl}/og-image.jpg`,
  twitterCard: "summary_large_image",
  twitterTitle: "Kevin Kenfack",
  twitterDescription: description,
  twitterImage: `${config.public.siteUrl}/og-image.jpg`,
  ogSiteName: "Kevin Kenfack",
  ogType: "website",
  ogUrl: config.public.siteUrl,
});

// Schema.org pour la page d'accueil
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Kevin Kenfack',
        alternateName: 'Joël',
        description: description,
        image: `${config.public.siteUrl}/picture.jpg`,
        url: config.public.siteUrl,
        sameAs: [
          'https://www.dotworld.ch/',
          'https://uiroom.pro/'
        ],
        jobTitle: 'Développeur Front-end',
        worksFor: {
          '@type': 'Organization',
          name: 'Dotworld',
          url: 'https://www.dotworld.ch/'
        },
        knowsAbout: [
          'JavaScript',
          'TypeScript',
          'React',
          'Next.js',
          'Node.js',
          'Développement Web',
          'Interfaces Utilisateur'
        ],
        alumniOf: {
          '@type': 'Organization',
          name: 'Uiroom',
          url: 'https://uiroom.pro/'
        }
      })
    }
  ]
});
</script>

<style scoped>
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
