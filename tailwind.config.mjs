/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'accent': '#1d4ed8',
        'accent-light': '#60a5fa',
        'accent-dark': '#1e3a8a',
        'text-dark': '#111827',
        'text-light': '#ffffff',
        'background': '#f9fafb',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}