<template>
  <main class="min-h-screen">
    <AppHeader class="mb-8" title="Favoris" :description="description" />
    <ul class="space-y-2">
      <li v-for="bookmark in bookmarks" :key="bookmark.id">
        <a
          :href="bookmark.url"
          target="_blank"
          class="group flex items-center gap-3 p-4 bg-white dark:bg-black border border-gray-200 dark:border-[#1a1a1a] rounded-lg transition-all duration-300 hover:border-gray-300 dark:hover:border-[#2a2a2a] hover:bg-gray-50 dark:hover:bg-[#080808]"
        >
          <UAvatar
            :src="getThumbnail(bookmark.url)"
            :alt="bookmark.label"
            :ui="{ rounded: 'rounded-md transition-transform duration-300 group-hover:scale-110' }"
          />
          <div class="flex-1 min-w-0">
            <p
              class="text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-300 group-hover:text-primary-400 transition-colors duration-300 truncate"
            >
              {{ bookmark.label }}
            </p>
            <span class="text-xs text-gray-600 dark:text-gray-400">
              {{ getHost(bookmark.url) }}
            </span>
          </div>
        </a>
      </li>
    </ul>
  </main>
</template>

<script setup>
const description =
  "Des choses géniales que j'ai trouvées sur internet. Cette page est encore WIP, je veux ajouter des recherches comme bmrks.com";
useSeoMeta({
  title: "Favoris | Kevin Kenfack",
  description,
  ogDescription: description,
});

const bookmarks = [
  {
    id: 1,
    label: "Adam Wathan - Bonnes pratiques et modèles pour Tailwind CSS",
    url: "https://www.youtube.com/watch?v=J_7_mnFSLDg",
  },
  {
    id: 2,
    label: "Dicebear - Générateur d'avatars impressionnants",
    url: "https://www.dicebear.com/",
  },
  {
    id: 3,
    label: "Image de stock de conception de circuit",
    url: "https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2873&q=80",
  },
  {
    id: 4,
    label: "Générateur de dégradés magnifique",
    url: "https://www.joshwcomeau.com/gradient-generator/",
  },
  {
    id: 5,
    label: "Maquettes d'appareils en 3D",
    url: "https://deviceframes.com/",
  },
  {
    id: 6,
    label: "Exemples d'ombres CSS",
    url: "https://getcssscan.com/css-box-shadow-examples",
  },
  {
    id: 7,
    label: "Illustration de pieuvre",
    url: "https://refine.new/",
  },
  {
    id: 8,
    label: "Agence Metalab",
    url: "https://www.metalab.com/",
  },
  {
    id: 9,
    label: "Tines - Belle page d'atterrissage",
    url: "https://www.tines.com/product",
  },
  {
    id: 10,
    label: "SVG Spinners - Animations de chargement",
    url: "https://github.com/n3r4zzurr0/svg-spinners",
  },
  {
    id: 11,
    label: "ASCII Flow - Dessin d'images en texte",
    url: "https://asciiflow.com/#/",
  },
  {
    id: 12,
    label: "REQRES - APIs mock pour les tests",
    url: "https://reqres.in/",
  },
  {
    id: 13,
    label: "Haikie - Générateur de fonds SVG",
    url: "https://app.haikei.app/",
  },
  {
    id: 14,
    label: "API d'adresse IP",
    url: "https://ipapi.is/",
  },
  {
    id: 15,
    label: "Rakko Tools - Outils en ligne",
    url: "https://en.rakko.tools/",
  },
];

function getHost(url) {
  const parsedUrl = new URL(url);
  let host = parsedUrl.host;
  if (host.startsWith("www.")) {
    host = host.substring(4);
  }
  return host;
}

function getThumbnail(url) {
  const host = getHost(url);
  return `https://logo.clearbit.com/${host}`;
}
</script>
