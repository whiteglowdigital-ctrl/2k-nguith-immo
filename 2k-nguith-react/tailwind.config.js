/** @type {import('tailwindcss').Config} */
// « Luxury Dark Mode » : noir mat, ardoise satinée, or lumineux en touches.
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
        void: '#0A0E17', // fond principal sombre
        ink: '#0F172A', // texte des sections blanches
        panel: { DEFAULT: '#111827', raised: '#1E293B' }, // cartes et sections
        silver: '#94A3B8', // petits détails (contraste 7:1 sur le fond)
        gold: { DEFAULT: '#F59E0B', light: '#FBBF24', dark: '#D97706' },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(245, 158, 11, 0.25), 0 10px 40px -10px rgba(245, 158, 11, 0.45)',
        deep: '0 30px 60px -20px rgba(0, 0, 0, 0.7)',
      },
      keyframes: {
        // Pulsation douce du bouton de recherche
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(245, 158, 11, 0.45)' },
          '50%': { boxShadow: '0 0 0 10px rgba(245, 158, 11, 0)' },
        },
        // Lueur continue du bouton WhatsApp
        glowEmerald: {
          '0%, 100%': { boxShadow: '0 8px 20px -4px rgba(16, 185, 129, 0.35)' },
          '50%': { boxShadow: '0 10px 32px 2px rgba(16, 185, 129, 0.5)' },
        },
        heroZoom: {
          from: { transform: 'scale(1.08)' },
          to: { transform: 'scale(1)' },
        },
        rise: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        pulseGold: 'pulseGold 2.4s ease-in-out infinite',
        glowEmerald: 'glowEmerald 3s ease-in-out infinite',
        heroZoom: 'heroZoom 12s ease-out both',
        rise: 'rise 1s ease-out both',
      },
    },
  },
  plugins: [],
};
