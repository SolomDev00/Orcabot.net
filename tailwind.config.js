/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#1ec8f7",
      },
      backgroundColor: {
        gradient: "linear-gradient(90deg, #127591 0%, #1ec8f7 100%)",
      },
    },
  },
  plugins: [],
};
