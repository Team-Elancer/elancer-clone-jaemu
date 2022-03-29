import { FC } from 'react';

import { Button, ButtonProps, ChakraProps, Link as ChackraLink } from '@chakra-ui/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

export interface CKLinkProps extends Omit<NextLinkProps, 'as'>, ChakraProps, ButtonProps {
  href: string;
  component?: 'button';
}

const CKLink: FC<CKLinkProps> = (props: any) => {
  const { href, component, children, ...rest } = props;

  if (component === 'button') {
    return (
      <NextLink href={href}>
        <Button {...rest}>{children}</Button>
      </NextLink>
    );
  }

  return (
    <NextLink href={href}>
      <ChackraLink {...rest}>{children}</ChackraLink>
    </NextLink>
  );
};

export default CKLink;

CKLink.defaultProps = {
  component: undefined,
};
