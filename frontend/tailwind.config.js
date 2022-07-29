/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#0F8D38',
        red: '#EC1E38',
        myBlue: {
          500: '#69ADFF',
          300: '#7BB0F0',
          100: '#B7D6FC'
        },
        myPink: {
          300: '#F18FB8',
          100: '#FCBBD6'
        },
        myPurple: {
          300: '#C1ADEB',
          100: '#DED1FB'
        },
        myYellow: {
          300: '#F8DEBB',
          100: '#FBEBD4'
        },
        myCyan: {
          300: '#26C3D2',
          100: '#A3EBEE'
        },
        myGray: {
          500: '#484964',
          300: '#8C8D9C',
          100: '#BDBDCB'
        }
      },
      spacing: {
        xxs: '4px',
        xs: '8px',
        s: '14px',
        m: '16px',
        l: '32px',
        xl: '40px',
        xxl: '50px'
      },
      borderRadius: {
        ll: '8px',
        xl: '15px'
      },
      fontSize: {
        h0: 40,
        h1: 36,
        h2: 28,
        h3: 24,

        p1: 20,
        p2: 16,
        p3: 14
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
