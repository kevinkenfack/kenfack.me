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
          DEFAULT: '#0ea5e9', // Ajout de la couleur par défaut
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
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