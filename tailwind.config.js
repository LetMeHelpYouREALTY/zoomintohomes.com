/** @type {import("tailwindcss").Config} */
const luxury = {
  ivory: "#F7F3EB",
  stone: "#E8E0D2",
  champagne: "#C4A574",
  navy: "#0E1A2B",
  navyHover: "#1A2F4A",
  espresso: "#14110E",
};

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: luxury.navy,
        champagne: luxury.champagne,
        ivory: luxury.ivory,
        blue: {
          50: luxury.ivory,
          100: "#F3E9D4",
          200: "#E2D0A8",
          300: "#D4B984",
          400: luxury.champagne,
          500: luxury.navyHover,
          600: luxury.navy,
          700: "#0A1420",
          800: "#08101A",
          900: luxury.espresso,
        },
        slate: {
          50: luxury.ivory,
          100: luxury.stone,
          200: "#DDD4C4",
          300: "#C9BFAE",
          400: "#A89A86",
          500: "#6B645C",
          600: "#4A453F",
          700: "#3A352F",
          800: "#241F1A",
          900: luxury.navy,
        },
      },
    },
  },
  plugins: [],
};
