import * as React from 'react';

import { Box, BoxProps, chakra } from '@chakra-ui/react';
import StaticImageData from 'next';
import NextImage from 'next/image';

import placeImg from '@images/place.jpg';

export interface IProps extends BoxProps {
  src: string | StaticImageData;
  alt?: string;
}

const CoverImg = chakra(NextImage, {
  shouldForwardProp: (prop) => ['width', 'height', 'layout', 'src', 'alt', 'borderRadius'].includes(prop),
});

const CKImage = (props: IProps) => {
  const { src, alt = '', width, height, borderRadius, ...rest } = props;
  return (
    <Box pos="relative" w={width || '100%'} h={height || '100%'} borderRadius={borderRadius} {...rest}>
      <CoverImg src={src || placeImg} alt={alt} layout={width || !src ? 'fill' : undefined} rounded={borderRadius} />
    </Box>
  );
};

CKImage.defaultProps = {
  alt: '',
};
export default CKImage;
