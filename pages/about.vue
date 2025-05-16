<template>
  <main class="min-h-screen">
    <div class="w-full max-w-6xl mx-auto px-0 sm:px-4 py-4">
      <div class="mb-12">
        <div class="relative group w-full">
          <div class="absolute -inset-0.5 rounded-2xl animate-rotate-gradient"></div>
          <div class="relative">
            <NuxtImg
              src="/picture.jpg"
              alt="Kevin Kenfack"
              class="w-full h-full md:h-full lg:h-full rounded-2xl object-cover brightness-75"
              placeholder
              format="webp"
            />
          </div>
        </div>
        <div class="mt-8">
          <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200">Je m'appelle Kevin Kenfack je suis un développeur passionné.</h1>
        </div>
      </div>

      <div class="space-y-8">
        <div class="bg-white dark:bg-black border border-gray-200 dark:border-[#1a1a1a] rounded-lg p-6 transition-all duration-300">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Mon parcours
          </h2>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Je suis actuellement développeur chez Dotworld, où je suis responsable de la création et de l'optimisation des interfaces utilisateur pour nos applications web, dans le but de délivrer une expérience utilisateur remarquable.
          </p>

          <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Partage & Connexion
          </h2>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Je partage régulièrement mon travail sur X, LinkedIn, Threads et GitHub. Je suis toujours à la recherche de nouvelles façons de me connecter avec d'autres développeurs et designers, n'hésitez pas à me contacter pour discuter !
          </p>

          <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Passion & Créativité
          </h2>
          <p class="text-gray-600 dark:text-gray-400">
            Je suis passionné par la photographie et j'aime capturer le monde qui m'entoure. Je cherche constamment de nouvelles façons d'exprimer ma créativité et de partager ma perspective avec les autres.
          </p>
        </div>

        <div class="bg-white dark:bg-black border border-gray-200 dark:border-[#1a1a1a] rounded-lg p-6 transition-all duration-300">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Technologies
          </h2>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Voici les technologies que j'utilise au quotidien pour créer des applications web modernes et performantes.
          </p>
          <TechStack />
        </div>

        <div class="bg-white dark:bg-black border border-gray-200 dark:border-[#1a1a1a] rounded-lg p-6 transition-all duration-300">
          <div class="flex gap-4 justify-center">
            <a 
              href="https://x.com/kenfackdev" 
              target="_blank"
              class="text-gray-500 hover:text-primary-400 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/kevinkenfack" 
              target="_blank"
              class="text-gray-500 hover:text-primary-400 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/kevinkenfack" 
              target="_blank"
              class="text-gray-500 hover:text-primary-400 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        <ContactCTA />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import ContactCTA from '~/components/Home/ContactCTA.vue';
import TechStack from '~/components/App/TechStack.vue';

const config = useRuntimeConfig();
const description = "Développeur web basé à Douala, Cameroun. Spécialisé dans la création d'interfaces utilisateur modernes et performantes.";

definePageMeta({
  scrollToTop: false
});

useSeoMeta({
  title: "À propos - Kevin Kenfack",
  description,
  ogTitle: "À propos - Kevin Kenfack",
  ogDescription: description,
  ogImage: `${config.public.siteUrl}/og-image.jpg`,
  twitterCard: "summary_large_image",
  twitterTitle: "À propos - Kevin Kenfack",
  twitterDescription: description,
  twitterImage: `${config.public.siteUrl}/og-image.jpg`,
  ogSiteName: "Kevin Kenfack",
  ogType: "profile",
  ogUrl: `${config.public.siteUrl}/about`,
  profileFirstName: "Kevin",
  profileLastName: "Kenfack",
  profileUsername: "Kevin Kenfack",
  profileGender: "male"
});

// Schema.org pour la page À propos
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Kevin Kenfack',
        description: description,
        image: `${config.public.siteUrl}/picture.jpg`,
        url: `${config.public.siteUrl}/about`,
        sameAs: [
          'https://twitter.com/kenfackdev',
          'https://linkedin.com/in/kevinkenfackjoel',
          'https://github.com/kevinkenfack'
        ],
        jobTitle: 'Développeur Web',
        worksFor: {
          '@type': 'Organization',
          name: 'Dotworld',
          url: 'https://www.dotworld.ch/'
        },
        homeLocation: {
          '@type': 'Place',
          name: 'Yaounde, Cameroun'
        },
        knowsAbout: [
          'Développement Web',
          'Interfaces Utilisateur',
          'React',
          'Next.js',
          'Node.js'
        ]
      })
    }
  ]
});
</script> 