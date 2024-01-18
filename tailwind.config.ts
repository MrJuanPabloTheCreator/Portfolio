import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'pwhite':'#FFFAFF',
        'pgray':'#303036',
        'plightgray':'#868784',
        'ppink':'#DB3069',
        'gold' : '#FFD60A',
        'navy': '#275DAD',
        'custom-red':'#D81159',
        'custom-gray':'#5B616A',
      },
    },
  },
  plugins: [],
}
export default config
