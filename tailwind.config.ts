import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "mainWidth": '1440px'
      },
      screens: {
        xs: '400px'
      },
      colors: {
        neutural: {
          'white': '#f8f9ff',
          'alto': '#808080',
          'black': '#2c2e33',
        },
        cta: {
          'lilac': '#ac6cff',
          'orange': '#ff9900',
          'sweet-potato': '#ffdeb5',
          'indigo-dark': '#2b2038',
        },
        primary: {
          'honey': '#f8d57e',
          'lilac': '#ac6cff',
          'indigo-light': '#2f1c48',
          'indigo-dark': '#2b2038',
        },
        secondary: {
          'dark-lilac': '#873eac',
          'cream': '#fbebd7',
          'lilac-light': '#eadaff',
          'dark-blue': '#473eac',
        }


      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
