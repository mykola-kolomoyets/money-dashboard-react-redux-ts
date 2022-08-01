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
          300: '#2A86F4',
          100: '#56A3FF'
        },
        myPink: {
          300: '#e865a1',
          100: '#ed8cb8'
        },
        myPurple: {
          300: '#9873e1',
          100: '#a48dd7'
        },
        myYellow: {
          300: '#F8DEBB',
          100: '#FBEBD4'
        },
        myCyan: {
          300: '#00C5E0',
          100: '#3DF9FF'
        },
        myGray: {
          500: '#484964',
          300: '#8C8D9C',
          100: '#BDBDCB',
          50: '#D9D9D9'
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
      },
      gridTemplateColumns: {
        statistic: ' repeat(auto-fit, minmax(300px, 1fr))'
      }
    }
  },
  plugins: []
};
