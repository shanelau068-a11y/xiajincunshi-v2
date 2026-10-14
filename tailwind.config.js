/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rice: '#f5f3ec',
        paper: '#fffdf8',
        ink: '#292722',
        brown: '#45362b',
        bark: '#6f4b33',
        gold: '#b88a3d',
        moss: '#596444',
        brick: '#8d4c32',
      },
      fontFamily: {
        serif: ['Noto Serif SC', 'Songti SC', 'SimSun', 'serif'],
        sans: ['Noto Sans SC', 'Microsoft YaHei', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        paper: '0 2px 12px rgba(49, 35, 21, 0.04)',
      },
    },
  },
  plugins: [],
};
