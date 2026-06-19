/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#050816',
        surface: {
          DEFAULT: '#0B1020',
          raised: '#0E1426',
          card: '#10172B',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          soft: 'rgba(255,255,255,0.05)',
          strong: 'rgba(255,255,255,0.14)',
        },
        ink: {
          DEFAULT: '#F4F6FC',
          muted: '#94A0BD',
          faint: '#5C6680',
        },
        brand: {
          blue: '#4C7CFF',
          violet: '#9B5CFF',
          cyan: '#27D9D2',
          green: '#3DDC97',
          amber: '#F2B84B',
          rose: '#FB7299',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        '10': ['0.625rem', { lineHeight: '1rem' }],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(76,124,255,0.15), 0 8px 40px -8px rgba(76,124,255,0.35)',
        'glow-violet': '0 0 0 1px rgba(155,92,255,0.15), 0 8px 40px -8px rgba(155,92,255,0.35)',
        'glow-cyan': '0 0 0 1px rgba(39,217,210,0.15), 0 8px 40px -8px rgba(39,217,210,0.35)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 48px -24px rgba(0,0,0,0.6)',
        'inner-line': 'inset 0 1px 0 0 rgba(255,255,255,0.06)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'radial-fade': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        grid: '44px 44px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-sm': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.55 },
          '50%': { opacity: 1 },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        'mesh-shift': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(3%, -4%) scale(1.05)' },
          '66%': { transform: 'translate(-3%, 3%) scale(0.98)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        rise: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-sm': 'float-sm 5s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        'mesh-shift': 'mesh-shift 18s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        rise: 'rise 0.6s ease-out both',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
