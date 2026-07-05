/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 24px 80px rgba(15, 23, 42, 0.18)',
        innerline: 'inset 0 1px 0 rgba(255, 255, 255, 0.65)',
      },
      keyframes: {
        modalIn: {
          '0%': { opacity: '0', transform: 'translateY(16px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        modalOut: {
          '0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(12px) scale(0.98)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        modalIn: 'modalIn 180ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
        modalOut: 'modalOut 150ms ease forwards',
        fadeIn: 'fadeIn 160ms ease forwards',
        fadeOut: 'fadeOut 150ms ease forwards',
      },
    },
  },
  plugins: [],
};
