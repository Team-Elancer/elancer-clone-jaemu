import { mode } from '@chakra-ui/theme-tools';

const global = (props) => ({
  html: { fontSize: { sm: '16px' }, fontWeight: 500 },
  header: { bg: mode('white', '#333')(props) },
  body: {
    bg: mode('white', '#222')(props),
  },
  main: {
    minHeight: { sm: '516px' },
  },
  a: {
    _hover: {
      textDecoration: 'none !important',
    },
  },
  svg: { display: 'inline-block', verticalAlign: 'middle', margin: '0 auto' },
});

export default global;
