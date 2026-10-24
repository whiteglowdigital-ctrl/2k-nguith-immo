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
        soft: '0 20px 50px rgba(0, 0, 0, 0.03)',
        lift: '0 30px 60px -10px rgba(15, 23, 42, 0.12)',
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
        // Écran d'entrée Jëfya
        logoIn: {
          from: { opacity: '0', transform: 'scale(0.92)', filter: 'blur(6px)' },
          to: { opacity: '1', transform: 'scale(1)', filter: 'blur(0)' },
        },
        halo: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(0.9)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        letter: {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'none' },
        },
        heroZoom: {
          from: { transform: 'scale(1.08)' },
          to: { transform: 'scale(1)' },
        },
        rise: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'none' },
        },
        // Ouverture douce des pages et des fenêtres
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        // Écran d'entrée : trait du toit, mots du slogan, ligne de balayage
        draw: { to: { strokeDashoffset: '0' } },
        word: {
          from: { opacity: '0', transform: 'translateY(100%)' },
          to: { opacity: '1', transform: 'none' },
        },
        grow: { to: { width: '6rem' } },
        scan: {
          from: { transform: 'translateY(0)', opacity: '0' },
          '15%': { opacity: '1' },
          to: { transform: 'translateY(100vh)', opacity: '0' },
        },
        // Reflet doré qui glisse sur le mot mis en avant
        shimmer: { to: { backgroundPosition: '-200% center' } },
        // Zoom lent et continu de la photo d'accueil
        kenburns: {
          from: { transform: 'scale(1.12)' },
          to: { transform: 'scale(1)' },
        },
      },
      animation: {
        pulseGold: 'pulseGold 2.4s ease-in-out infinite',
        glowEmerald: 'glowEmerald 3s ease-in-out infinite',
        heroZoom: 'heroZoom 12s ease-out both',
        logoIn: 'logoIn 1.1s ease-out both',
        halo: 'halo 2.4s ease-in-out infinite',
        letter: 'letter 0.5s ease-out forwards',
        rise: 'rise 1s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fadeIn 0.5s ease-in-out backwards',
        draw: 'draw 1.2s cubic-bezier(0.65,0,0.35,1) forwards',
        word: 'word 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        grow: 'grow 0.8s ease-out forwards',
        scan: 'scan 2.6s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
        kenburns: 'kenburns 18s ease-out both',
      },
    },
  },
  plugins: [],
};
