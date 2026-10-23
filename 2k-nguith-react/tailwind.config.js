/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A192F', // bleu nuit : textes importants et boutons principaux uniquement
          soft: '#172A46',
          muted: '#4B5563', // texte secondaire (contraste 7:1 sur le fond teinté)
        },
        mist: '#F3F4F1', // pierre claire : fond teinté de la page
        line: '#E3E4E0', // filets d'un pixel
        copper: {
          DEFAULT: '#D97706', // accent : CTA de l'en-tête et états actifs uniquement
          light: '#F59E0B',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        air: '0 20px 50px rgba(0, 0, 0, 0.02)',
        'air-lg': '0 30px 70px rgba(10, 25, 47, 0.07)',
        glow: '0 0 0 1px rgb(217 119 6 / 0.35), 0 8px 28px -4px rgb(217 119 6 / 0.45)',
      },
      letterSpacing: {
        label: '0.18em',
      },
      maxWidth: {
        site: '80rem',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        heroZoom: {
          from: { transform: 'scale(1.08)' },
          to: { transform: 'scale(1)' },
        },
        rise: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
