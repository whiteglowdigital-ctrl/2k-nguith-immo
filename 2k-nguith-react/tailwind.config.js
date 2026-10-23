/** @type {import('tailwindcss').Config} */
// Contraste fort : blanc pur en alternance avec vert forêt et bleu nuit profonds.
// Doré vibrant réservé aux boutons d'action et aux icônes mises en avant.
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
        ink: { DEFAULT: '#111827', muted: '#4B5563' },
        forest: { DEFAULT: '#064E3B', deep: '#022C22', soft: '#ECFDF5' },
        night: { DEFAULT: '#0F172A', soft: '#1E293B' },
        gold: { DEFAULT: '#F59E0B', dark: '#D97706', soft: '#FEF3C7' },
        cloud: '#F9FAFB',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(17, 24, 39, 0.18)',
        lift: '0 24px 48px -16px rgba(17, 24, 39, 0.28)',
      },
    },
  },
  plugins: [],
};
