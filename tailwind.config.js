/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],

  theme: {
    extend: {
       backgroundImage: {
        gradP_S:
          "linear-gradient(90deg, hsla(186, 34%, 73%, 1) 0%, hsla(55, 50%, 91%, 1) 100%);",
      },

      colors: {
        primary: "#A1CCD1",
        secondary: "#F4F2DE",
        tertiary: "#3559E0",
        textColorPrimary: "#092635",
      },
    },
  },
 
}
