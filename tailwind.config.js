import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        customDark: "#010019",
        customLight: "#27272f",
        moon: "#1A243A"
      },
      
      fontFamily: {
        font: ['"Merriweather", serif'],
      },

      backgroundImage: {
        "custom-gradient":
          "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
      },
      backgroundColor: {
        "custom-bg": "#f09433",
      },

      filter: {
        "custom-gradient-filter":
          "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888', GradientType=1 )",
      },
      maxWidth: {
        "strap-sm": "540px",
        "strap-md": "720px",
        "strap-lg": "960px",
        "strap-xl": "1140px",
        "strap-xxl": "1320px",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [flowbite],
};
