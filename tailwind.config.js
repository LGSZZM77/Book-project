/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        text: "var(--text)",
        searchBg: "var(--search-bg)",
        searchText: "var(--search-text)",
      },
    },
  },
  plugins: [],
};
