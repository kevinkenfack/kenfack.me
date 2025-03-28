<template>
  <div class="space-y-6">
    <NuxtImg src="/avatar.png" alt="Kevin Kenfack"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px" placeholder format="webp" />
    <h1 class=" text-xl md:text-4xl sm:text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
      Bonjour je suis Kevin Kenfack,<br/> mais vous pouvez m'appeler Joël.
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      Je suis un développeur fullstack spécialisé dans l'écosystème JavaScript et
      TypeScript, notamment avec React Next.js, Node.js et Express.js. Passionné
      par la création d'applications web et de sites web, je partages mes
      réflexions principalement autour de la tech et du design.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      Je suis actuellement développeur front-end chez
      <a href="https://www.dotworld.ch/" target="_blank" class="text-primary-400 font-bold">Dotworld</a>
      et en parallèle, je gère
      <a href="https://uiroom.pro/" target="_blank" class="text-primary-400 font-bold">Uiroom</a>, 
      mon agence web où nous offrons des services de design, copywriting et développement
      pour les startups, SaaS et entrepreneurs.
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Kevin Kenfack",
  ogTitle: "Kevin Kenfack",
  ogDescription: "Je suis un developpeur FrontEnd et un jeune entrepreneur du Cameroun, je suis passionne par la creation de sites web beaux, intuitifs et réactifs.",
  ogImage: "/og-image.jpg",
  twitterCard: "summary_large_image",
  ogSiteName: "Kevin Kenfack",
  ogUrl: "https://kevin-kenfack.vercel.app/",
  description:
    "Je suis un développeur FrontEnd et un jeune entrepreneur du Cameroun, je suis passionné par la création de sites web beaux, intuitifs et réactifs.",
});
</script>
