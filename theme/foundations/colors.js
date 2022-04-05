import { shadeColor } from '@utils/shadeColor';

export default {
  primary: { 500: '#000' },
  gray: {
    500: '#8c8c8c',
  },
  buttonBlack: {
    500: '#333',
    600: '#111',
    777: '#000',
  },
  'text-gray': '#797979',
  border: '#e6e6e6',
  purple: {
    500: '#7485C9',
    600: shadeColor('#7485C9', -20),
    700: shadeColor('#7485C9', -40),
  },
  rosyBrown: {
    500: '#9D7985',
    600: shadeColor('#9D7985', -20),
  },
  orange: {
    600: '#F16300',
    700: shadeColor('#F16300', -20),
  },
  darkOrange: {
    500: '#D56B2D',
    600: shadeColor('#D56B2D', -20),
  },
};
