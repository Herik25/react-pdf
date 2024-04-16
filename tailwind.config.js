import { transform } from '@babel/core';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        slideDown: {
          "0%": {
            transform: "translateY(0px)",
          },
          "25%": {
            transform: "translateY(450px)",
          },
          "50%": {
            transform: "translate(400px, 450px)"
          },
          "75%": {
            transform: "translate(400px, 0px)"
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
        slideUp: {
          "0%": {
            transform: "translateY(0px)",
          },
          "25%": {
            transform: "translateY(-450px)",
          },
          "50%": {
            transform: "translate(-400px, -450px)"
          },
          "75%": {
            transform: "translate(-400px, 0px)"
          },
          "100%": {
            transform: "translateX(0px)",
          },
        }
      },
      animation: {
        slideDown: "slideDown 20s ease-in-out infinite",
        slideUp: "slideUp 20s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
