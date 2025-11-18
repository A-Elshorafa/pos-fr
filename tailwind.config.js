/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E6FFF",
          hover: "#2E8CF0",
        },
        success: "#4ADE80",
        error: "#F43F5E",
        warning: "#FACC15",
        dark: {
          primary: "#0B1B33",
        },
        light: "#F5F7FA",
        card: "#FFFFFF",
        border: {
          gray: "#E5E7EB",
          input: "#D1D5DB",
        },
        table: {
          header: "#F0F2F5",
          even: "#FAFBFC",
        },
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
