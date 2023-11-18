import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      scale: {
        '200': '2.0',
      },
      keyframes: {
        fullLogo: {
          '0%': {transform: 'rotate(0deg)'},
          '20%': {transform: 'rotate(0deg)'},
          '50%': {transform: 'rotate(360deg)'},
          '100%': {transform: 'rotate(360deg)'}
        },
        pulseLogo: {
          '0%': {transform: 'translate(0)'},
          '50%': {transform: 'translate(0)'},
          '70%': {transform: 'translate(0, -5px)'},
          '90%': {transform: 'translate(0)'}
        },
        cameraMovement: {
          '0%': {transform: 'translate(0) scale(1.2)'},
          '10%': {transform: 'translate(3px, 4px) scale(1.2)'},
          '20%': {transform: 'translate(5px, 3px) scale(1.2)'},
          '30%': {transform: 'translate(2px, 7px) scale(1.2)'},
          '40%': {transform: 'translate(8px, 3px) scale(1.2)'},
          '50%': {transform: 'translate(5px, 8px) scale(1.2)'},
          '60%': {transform: 'translate(7px, 4px) scale(1.2)'},
          '70%': {transform: 'translate(2px, 3px) scale(1.2)'},
          '80%': {transform: 'translate(7px, 9px) scale(1.2)'},
          '90%': {transform: 'translate(4px, 5px) scale(1.2)'},
          '100%': {transform: 'translate(0) scale(1.2)'},
        }
      },
      animation: {
        logo: 'fullLogo 3s cubic-bezier(0.50,-0.5, 0.5, 1.5) infinite',
        logoPulse: 'pulseLogo 3s cubic-bezier(0.50,-0.5, 0.5, 1.5) infinite',
        cameraMoves: 'cameraMovement 15s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
export default config
