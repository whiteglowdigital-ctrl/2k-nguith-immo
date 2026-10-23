/** @type {import('tailwindcss').Config} */
// Palette stricte : noir profond pour le texte, blanc pour le fond,
// ambre uniquement pour les petits éléments importants (numéros, liens actifs).
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    // Le conteneur s'arrête à 1280 px : rien ne s'étale sur les grands écrans.
    container: {
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0F172A',
          muted: '#475569', // texte secondaire (7,5:1 sur blanc)
        },
        mist: '#F9FAFB', // fond gris très clair des sections de transition
        amber: {
          DEFAULT: '#D97706',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
