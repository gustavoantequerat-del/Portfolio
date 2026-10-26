/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#235750',
        'primary-container': '#3d7068',
        'primary-fixed': '#b7ede3',
        secondary: '#994619',
        'secondary-container': '#ff9561',
        'secondary-fixed': '#ffdbcc',
        tertiary: '#43543e',
        background: '#fbf9f5',
        surface: '#fff8f4',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#faf2ed',
        'surface-container': '#f4ece7',
        'surface-container-high': '#eee7e1',
        'on-surface': '#1e1b18',
        'on-surface-variant': '#404946',
        'outline-variant': '#bfc8c5',
        line: '#e8e2d9',
        'line-soft': '#f0ebe5'
      },
      fontFamily: {
        heading: ['"DM Sans"', 'sans-serif'],
        body: ['Manrope', 'sans-serif']
      },
      boxShadow: {
        soft: '0 8px 30px rgb(0 0 0 / 0.04)',
        card: '0 12px 40px rgb(0 0 0 / 0.05)'
      }
    }
  },
  plugins: []
}
