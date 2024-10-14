import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        charcoal: {
          800: '#333333', // Adjust as needed
          900: '#222222', // Adjust as needed
        },
        'old-gold': {
          500: '#CFB53B', // Adjust as needed
          200: '#D4AF37', // Adjust as needed
        },
      },
    },
  },
  plugins: [],
};
export default config;