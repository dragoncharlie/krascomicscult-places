module.exports = {
  mode: 'jit',
  purge: ['./apps/**/*.{js,ts,jsx,tsx}', './libs/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        line: '#EEEEEE',
        border: '#E0E0E0',
        icon: '#C7C7C7',
        label: '#8B8B8B',
        text: '#212121',
        accent: '#3B59F5',
        'accent-hover': '#2C43B8',
        'accent-focus': '#D8DEFD',
        error: '#FF4545',
        success: '#00CA99',
        background: '#FFFFFF',
        
        'dark-line': '#383838',
        'dark-border': '#7A7A7A',
        'dark-icon': '#424242',
        'dark-label': '#8B8B8B',
        'dark-text': '#E0E0E0',
        'dark-accent': '#334396',
        'dark-accent-hover': '#5570FA',
        'dark-accent-focus': '#323753',
        'dark-error': '#CF6666',
        'dark-success': '#00BA8D',
        'dark-background': '#292929',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
