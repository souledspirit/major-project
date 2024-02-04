/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#E50914",

          secondary: "#221F1F",

          accent: "#FFFFFF",

          neutral: "#141414",

          "base-100": "#000000",

          info: "#2196F3",

          success: "#4CAF50",

          warning: "#FB8C00",

          error: "#F44336",
        },
      },
    ],
  },
};
