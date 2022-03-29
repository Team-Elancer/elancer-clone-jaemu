import { FC } from 'react';

import { Box } from '@chakra-ui/react';

import Footer from './Footer';
import Header from './Header';

const BaseLayout: FC = ({ children }) => (
  <>
    <Header />
    <Box as="main">{children}</Box>
    <Footer />
  </>
);
export default BaseLayout;
