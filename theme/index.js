import { extendTheme } from '@chakra-ui/react';

import Badge from './components/Badge';
import Button from './components/Button';
import Container from './components/Container';
import Heading, { H1, H2 } from './components/Heading';
import Link from './components/Link';
import colors from './foundations/colors';
import fonts from './foundations/fonts';
import shadows from './foundations/shadows';
import { breakpoints, sizes } from './foundations/sizes';
import global from './global';

const overrides = {
  config: { initialColorMode: 'light' },
  colors,
  fonts,
  shadows,
  styles: {
    global,
  },
  breakpoints,
  sizes,
  components: {
    Container,
    Link,
    Heading,
    H1,
    H2,
    Button,
    Badge,
  },
};

export default extendTheme(overrides);
