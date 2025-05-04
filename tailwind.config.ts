import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/@nuxt/ui/dist/**/*.{js,vue,ts,mjs}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        zoop: "rgba(102, 109, 128, 0.08) 0px 1.2672px 1.2672px 0px, rgba(102, 109, 128, 0.08) 0px 5.06879px 10.1376px 0px",
        zoopdark:
          "rgba(10, 10, 10, 0.2) 0px 1.2672px 1.2672px 0px, rgba(10, 10, 10, 0.2) 0px 5.06879px 10.1376px 0px",
      },
      outlineColor: {
        primary: 'var(--color-primary)',
      },
      colors: {
        primary: {
          DEFAULT: '#10b981', // Vert Emerald medium (équivalent à primary-500)
                50: '#ecfdf5',    // Vert très clair, presque blanc
                100: '#d1fae5',   // Vert très clair
                200: '#a7f3d0',   // Vert clair
                300: '#6ee7b7',   // Vert moyen-clair
                400: '#34d399',   // Vert moyen
                500: '#10b981',   // Vert principal (même que DEFAULT)
                600: '#059669',   // Vert moyen-foncé
                700: '#047857',   // Vert foncé
                800: '#065f46',   // Vert très foncé
                900: '#064e3b',   // Vert très foncé
                950: '#022c22'    // Vert extrêmement foncé
        },
      },
      keyframes: {
        'border-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'rotate-gradient': {
          '0%': {
            'background': 'linear-gradient(0deg, rgb(255, 255, 255), rgb(0, 0, 0))',
          },
          '100%': {
            'background': 'linear-gradient(360deg, rgb(255, 255, 255), rgb(0, 0, 0))',
          }
        }
      },
      animation: {
        'border-glow': 'border-glow 2s ease-in-out infinite',
        'rotate-gradient': 'rotate-gradient 3s linear infinite',
      },
    },
    fontFamily: {
      sans: [
        "Inter",
        "Avenir Next",
        "Roboto",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Ubuntu",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      mono: [
        "Cascadia Code",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms')
  ],
  safelist: [
    'outline-primary',
    'after:bg-primary-500',
    'bg-primary/40',
    'bg-primary/50',
    'bg-primary/60',
    'bg-primary/70',
    'bg-primary/80',
    'bg-primary/90',
    'selection:bg-primary/40'
  ],
  variants: {
    extend: {
      backgroundColor: ['after', 'before', 'selection'],
      outlineColor: ['focus-visible'],
    },
  },
} satisfies Config;