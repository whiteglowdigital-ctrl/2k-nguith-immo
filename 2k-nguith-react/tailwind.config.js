/** @type {import('tailwindcss').Config} */
// Palette alignée sur le logo : blanc pur et bleu marine très profond.
// Orange/or en petites touches seulement (un mot, un bouton actif, une icône).
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', md: '2rem', lg: '3rem' },
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    },
    extend: {
      colors: {
        ink: { DEFAULT: '#111827', muted: '#64748B' }, // muted = slate-500 (4,8:1 sur blanc)
        navy: { DEFAULT: '#0B1A30', soft: '#EEF2F8' }, // sections sombres, boutons principaux
        brand: '#1E3A8A', // bleu du logo : prix, liens, petites étiquettes
        night: { DEFAULT: '#0F172A', soft: '#1E293B' },
        gold: { DEFAULT: '#F59E0B', dark: '#D97706', soft: '#FEF3C7' },
        cloud: '#F9FAFB',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 60px rgba(0, 0, 0, 0.025)', // ombre presque invisible : les cartes flottent
        lift: '0 24px 60px -12px rgba(11, 26, 48, 0.12)',
      },
      keyframes: {
        // Vague douce autour du bouton WhatsApp
        wave: {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '70%, 100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        wave: 'wave 2.6s ease-out infinite',
      },
    },
  },
  plugins: [],
};
