/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'system-ui', 'sans-serif'],
      },
      colors: {
        'ios-bg': '#F2F2F7',
        'ios-card': '#FFFFFF',
        'ios-primary': '#007AFF',
        'ios-secondary': '#5856D6',
        'ios-text': '#1C1C1E',
      },
      borderRadius: {
        'ios': '1rem',
      }
    },
  },
  plugins: [],
}