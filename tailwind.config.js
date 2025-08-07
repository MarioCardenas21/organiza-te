/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Activar modo oscuro por clase
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a', // azul oscuro
        foreground: '#e2e8f0', // texto claro
        primary: '#6366f1',    // violeta moderno
        secondary: '#334155',  // gris oscuro
        accent: '#3b82f6'      // azul fuerte
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 15px rgba(0,0,0,0.2)',
      }
    },
  },
  plugins: [],
}





