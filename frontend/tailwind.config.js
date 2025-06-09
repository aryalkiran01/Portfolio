/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        // Optional: for better dark mode gradients or custom themes
        darkBg: "#0f172a",
      },
    },
  },
  plugins: [],
};
