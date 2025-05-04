/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' },
        },
      },
      colors: {
        "primary": "#050816",
        "secondary": "#aaa6c3",
        "tertiary": "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "cyan-400": "#81F4E1",
        "cyan-500": "#56F0D7",
        "cyan-600": "#1EEBC9",
        "red-400": "#FF8585",
        "red-500": "#FF5C5C",
        "red-600": "#FF3333",
        "dark-1": "#141414",
        "dark-2": "#292929",
        "dark-3": "#3D3D3D",
        "dark-4": "#474747",
        "gray-1": "#5C5C5C",
        "gray-2": "#999999",
        "light-1": "#FFFFFF",
        "light-2": "#F5F5F5",
        "light-3": "#EBEBEB",
        "light-4": "#D9D9D9",
      },
      translate: {
        '101': '101%',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
