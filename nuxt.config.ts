export default defineNuxtConfig({
  // Garder le SSR activé (c'est le comportement par défaut de Nuxt)
  devtools: { enabled: false },
  modules: [
    "@nuxt/ui",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxthq/studio",
    "@vueuse/nuxt"
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.ts',
    exposeConfig: false,
    viewer: true,
  },
  css: [
    '~/assets/css/main.css'
  ],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://kenfack-me.vercel.app/',
      ogImageBlogBasePath: '',
      availabilityStatus: process.env.NUXT_PUBLIC_AVAILABILITY_STATUS || 'unavailable'
    }
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
  ui: {
    icons: ["heroicons", "lucide"],
    global: true,
    safelistColors: ['primary']
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      meta: [
        { name: 'theme-color', content: '#000000' }
      ],
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },
  build: {
    transpile: ['@nuxt/ui']
  },
  // Configuration minimale pour empêcher le prérendu sans supprimer Nitro
  routeRules: {
    '/**': { prerender: false }
  }
});