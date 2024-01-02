import type { Config } from 'tailwindcss';

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
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'profile-picture': "url('https://avatars.githubusercontent.com/u/61645475?v=4')",
      },
      scale: {
        '200': '2.0',
      },
      height: {
        '116': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      },
      spacing: {
        '18': '4.5rem',
      },
      dropShadow: {
        'lgCustom': '5px 10px 10px rgba(0, 0, 0, 0.4)',
        'xlCustom': '5px 10px 10px rgba(0, 0, 0, 0.6)',
        glow: [
          "0 0px 20px rgba(13, 148, 136, 0.35)",
          "0 0px 65px rgba(13, 148, 136, 0.2)"
        ],
        glowOrange: [
          "0 0px 20px rgba(249, 115, 22, 0.35)",
          "0 0px 65px rgba(249, 115, 22, 0.2)"
        ]
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
          '0%': {transform: 'translate(0)'},
          '10%': {transform: 'translate(3px, 4px)'},
          '20%': {transform: 'translate(5px, 3px)'},
          '30%': {transform: 'translate(2px, 7px)'},
          '40%': {transform: 'translate(8px, 3px)'},
          '50%': {transform: 'translate(5px, 8px)'},
          '60%': {transform: 'translate(7px, 4px)'},
          '70%': {transform: 'translate(2px, 3px)'},
          '80%': {transform: 'translate(7px, 9px)'},
          '90%': {transform: 'translate(4px, 5px)'},
          '100%': {transform: 'translate(0)'},
        },
        slideInFromLeft: {
          '0%': {transform: 'translateX(-100%)', opacity: '0'},
          '100%': {transform: 'translateX(0%)', opacity: '1'}
        },
        slideInFromRight: {
          '0%': {transform: 'translateX(100%)', opacity: '0'},
          '100%': {transform: 'translateX(0%)', opacity: '1'}
        },
        slideInFromTop: {
          '0%': {transform: 'translateY(-100%)', opacity: '0'},
          '100%': {transform: 'translateY(0%)', opacity: '1'}
        },
        slideInFromTopWithRotation: {
          '0%': {
            transform: 'translateY(-100%) rotateZ(120deg)', 
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0%) rotateZ(0deg)', 
            opacity: '1'
          }
        },
        slideInFromBottom: {
          '0%': {transform: 'translateY(100%)', opacity: '0'},
          '100%': {transform: 'translateY(0%)', opacity: '1'}
        },
      },
      animation: {
        logo: 'fullLogo 3s cubic-bezier(0.50,-0.5, 0.5, 1.5) infinite',
        logoPulse: 'pulseLogo 3s cubic-bezier(0.50,-0.5, 0.5, 1.5) infinite',
        cameraMoves: 'cameraMovement 15s ease-in-out infinite',
        slideInLeft: 'slideInFromLeft 1.5s ease-in-out',
        slideInRight: 'slideInFromRight 1.5s ease-in-out',
        slideInTop: 'slideInFromTop 1.5s ease-in-out',
        slideInTopWithRotation: 'slideInFromTopWithRotation 1.5s cubic-bezier(0,.71,.14,1)',
        slideInBottom: 'slideInFromBottom 1.5s ease-in-out',
      }
    },
  },
  plugins: [],
}

export default config;
