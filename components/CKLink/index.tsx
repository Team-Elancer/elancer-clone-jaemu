import { FC } from 'react';

import { Button, ButtonProps, ChakraProps, Link as ChackraLink } from '@chakra-ui/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

export interface CKDefaultLinkProps extends Omit<NextLinkProps, 'as'>, ChakraProps {
  href: string;
}

export interface CKButtonLinkProps extends Omit<NextLinkProps, 'as'>, ButtonProps {
  href: string;
  component: 'button';
}

type CKLinkProps = CKDefaultLinkProps | CKButtonLinkProps;

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
