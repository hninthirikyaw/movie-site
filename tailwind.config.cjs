/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },

  variants: {
    extend: {
      display: ["group-hover"],
      visibility: ["group-hover"],
    },
  },

  plugins: [require("daisyui")],
};
