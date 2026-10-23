/** @type {import('tailwindcss').Config} */
// Direction « magazine d'architecture » : noir profond, blanc pur, angles droits,
// filets d'un pixel. L'ambre ne sert qu'aux micro-détails (un point, une ligne active).
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0F172A', // noir profond : textes, boutons, sections inversées
          muted: '#475569', // texte secondaire (7,5:1 sur blanc)
          faint: '#64748B', // légendes sur fond noir uniquement en clair
        },
        amber: {
          DEFAULT: '#D97706', // micro-détails seulement, jamais pour du texte courant
        },
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Didot', 'Georgia', 'serif'],
        sans: ['Jost', 'Futura', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        caps: '0.22em',
        display: '-0.035em',
      },
      maxWidth: {
        site: '88rem',
      },
      keyframes: {
        unveil: {
          from: { clipPath: 'inset(0 0 0 100%)' },
          to: { clipPath: 'inset(0 0 0 0)' },
        },
        rise: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        unveil: 'unveil 1.6s cubic-bezier(0.65, 0, 0.35, 1) both',
        rise: 'rise 1.2s cubic-bezier(0, 0, 0.2, 1) both',
      },
    },
  },
  plugins: [],
};
