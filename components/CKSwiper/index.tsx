import React from 'react';

import { chakra, ChakraProps } from '@chakra-ui/react';
import { Swiper, SwiperProps } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

export interface CKSwiperProps extends Omit<SwiperProps, 'color' | 'width' | 'height'>, ChakraProps {
  children: React.ReactNode;
}

const CoverSwiper = chakra(Swiper, {
  shouldForwardProp: (prop) => ![''].includes(prop),
});

export const CKSwiper = (props: CKSwiperProps) => {
  const { children, ...rest } = props;

  return (
    <CoverSwiper
      {...rest}
      sx={{
        '.swiper-button-prev, .swiper-button-next': {
          d: 'none',
          color: '#000',
          fontSize: '14px',
          borderRadius: 'full',
          minWidth: '9',
          h: '9',
          background: 'white',
        },
        '.swiper-button-prev:after, .swiper-button-next:after': {
          color: '#000',
          fontSize: '18px',
        },
        '&:hover .swiper-button-prev, &:hover .swiper-button-next': { display: 'flex' },
        '.swiper-pagination-bullet': { background: '#fff' },
        '.swiper-pagination-bullet-active': { background: '#2b6cb0' },
      }}
    >
      {children}
    </CoverSwiper>
  );
};

export default CKSwiper;
