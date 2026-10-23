/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0F172A', // bleu nuit : textes, en-tête, sections d'autorité
          soft: '#1E293B',
          muted: '#475569', // texte secondaire (contraste 7,5:1 sur blanc)
        },
        mist: '#F8F9FA', // gris architectural : fond général du site
        line: '#E5E7EB',
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
        soft: '0 8px 30px rgb(0 0 0 / 0.04)',
        lift: '0 24px 50px -12px rgb(15 23 42 / 0.14)',
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
