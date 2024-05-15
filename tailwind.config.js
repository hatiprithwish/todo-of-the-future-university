/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lime-green": "#4eb570",
        gray1: "#f0f1f1",
        wheat: "#fffbf4",
      },
      borderRadius: {
        custom: "0.6rem",
      },
    },
  },
  plugins: [],
};
