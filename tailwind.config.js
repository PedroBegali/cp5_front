/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Isso conecta as classes do Tailwind com as variáveis do seu CSS
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        accent: "hsl(var(--accent))",
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))",
      },
      fontFamily: {
        serif: ['Newsreader', 'serif'],
        sans: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
}