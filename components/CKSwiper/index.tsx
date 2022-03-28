import React from 'react';

import { chakra, ChakraProps } from '@chakra-ui/react';
import { Swiper, SwiperProps } from 'swiper/react';

export interface CKSwiperProps extends Omit<SwiperProps, 'color' | 'width' | 'height'>, ChakraProps {
  children: React.ReactNode;
}

const CoverSwiper = chakra(Swiper, {
  shouldForwardProp: (prop) => ![''].includes(prop),
});

export const CKSwiper = (props: CKSwiperProps) => {
  const { children, ...rest } = props;
  return <CoverSwiper {...rest}>{children}</CoverSwiper>;
};

export default CKSwiper;
