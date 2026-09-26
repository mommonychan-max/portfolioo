/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',      // background
        surface: '#141414',  // panels
        line: '#262626',     // hairline borders
        bone: '#F2F0EC',     // primary text
        smoke: '#8A8A8A',    // muted text
        blood: '#E11D2E',    // accent red
        'blood-dim': '#7A1019',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'Impact', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        none: '0px',
      },
    },
  },
  plugins: [],
}
