import React, { useEffect, useState } from 'react';

import { useTheme } from '@chakra-ui/react';
import { chakra, ChakraProps } from '@chakra-ui/system';

import icons from './icons';

interface CKIconProp extends ChakraProps {
  name?: string;
  icon?: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

const CKIcon = (props: CKIconProp) => {
  const { name = '', icon, color = '', style, size = '16', ...svgProps } = props;

  const [extractedColor, setExtractedColor] = useState();

  const theme = useTheme();

  const Svg = icons[name as keyof typeof icons];

  useEffect(() => {
    const [colorName, colorVariant] = color.split('.');
    if (colorName) {
      const colorValue = theme.colors[colorName as keyof typeof theme.colors][colorVariant];
      setExtractedColor(colorValue);
    }
  }, [theme, color]);

  const CoverSvg = chakra(Svg || icon, {
    shouldForwardProp: () => true,
  });

  return (
    <CoverSvg
      style={{ color: extractedColor, ...style, width: size, height: size }}
      viewBox="0 0 16 16"
      {...svgProps}
    />
  );
};

CKIcon.defaultProps = {
  name: undefined,
  icon: undefined,
  size: undefined,
  color: '',
  style: undefined,
};

export default CKIcon;
