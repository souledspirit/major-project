/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],

  daisyui: {
    themes: [
      "light", // This uses DaisyUI's default light theme
      "dark", // This uses DaisyUI's default dark theme
      // Custom themes can still be defined here as well if needed
    ],
  },
};
