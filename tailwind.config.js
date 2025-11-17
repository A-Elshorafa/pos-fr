/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#779341",
        "primary-light": "#E9F1FF",
        "google-blue": "#4285F4",
        "text-gray": "#8D8D8D",
        "input-gray": "#ADADAD",
      },
      boxShadow: {
        primary: "0 4px 19px 0 rgba(119, 147, 65, 0.30)",
      },
      fontFamily: {
        sans: ["Cairo", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        display: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
