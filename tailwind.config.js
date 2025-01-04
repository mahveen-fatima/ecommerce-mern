const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Update this path as per your project structure
  theme: {
    extend: {
      fontFamily: {
        helvetica: [
          '"Helvetica Now Text Medium"', // Custom font
          "Helvetica", // Fallback
          "Arial", // Fallback
          ...defaultTheme.fontFamily.sans, // Default Tailwind sans-serif stack
        ],
      },
    },
  },
  plugins: [],
};
