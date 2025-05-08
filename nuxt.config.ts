export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
   "@nuxt/ui",
   "nuxt-icon",
   "@nuxtjs/google-fonts",
   "@nuxtjs/fontaine",
   "@nuxt/image",
   "@nuxt/content",
   "@nuxthq/studio",
   "@vueuse/nuxt",
   "nuxt-og-image"
  ],
  tailwindcss: {
    configPath: 'tailwind.config.ts',
    quiet: true,
  },
  css: [
    '~/assets/css/main.css'
  ],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://kenfack-me.vercel.app',
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
  postcss: {
    plugins: {
      // tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production'
        ? {
            cssnano: {
              preset: ['default', { discardComments: { removeAll: true } }],
            },
          }
        : {}),
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    scrollToTop: true,
    head: {
      meta: [
        { name: 'theme-color', content: '#000000' }
      ],
      htmlAttrs: {
        lang: "fr",
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
  nitro: {
    compatibilityDate: '2025-05-08',
  }
});