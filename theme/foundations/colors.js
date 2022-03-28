import { shadeColor } from '@utils/shadeColor';

export default {
  primary: { 500: '#000' },
  gray: {
    500: '#8c8c8c',
  },
  black: {
    800: '#3c3c3c',
  },
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
    500: '#F16300',
    600: shadeColor('#F16300', -20),
  },
  darkOrange: {
    500: '#D56B2D',
    600: shadeColor('#D56B2D', -20),
  },
};
