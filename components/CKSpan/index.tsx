import React from 'react';

import { chakra, ChakraProps } from '@chakra-ui/react';

export interface CKSpanProps extends ChakraProps {
  children: React.ReactNode;
}

const CoverSpan = chakra('span', {
  shouldForwardProp: () => true,
});

const CKSpan = (props: CKSpanProps) => {
  const { children, ...rest } = props;

  return <CoverSpan {...rest}>{children}</CoverSpan>;
};
export default CKSpan;
