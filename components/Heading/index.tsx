import { chakra, forwardRef, omitThemingProps, ThemingProps, useStyleConfig, HTMLChakraProps } from '@chakra-ui/system';
import { cx, __DEV__ } from '@chakra-ui/utils';

type HeadingProps = ThemingProps<'Heading'>;
export interface H1Props extends HTMLChakraProps<'h1'>, HeadingProps {}
export interface H2Props extends HTMLChakraProps<'h2'>, HeadingProps {}
export interface H3Props extends HTMLChakraProps<'h3'>, HeadingProps {}
export interface H4Props extends HTMLChakraProps<'h4'>, HeadingProps {}
export interface H5Props extends HTMLChakraProps<'h5'>, HeadingProps {}
export interface H6Props extends HTMLChakraProps<'h6'>, HeadingProps {}

const headingBaseStyles = {
  fontFamily: 'heading',
  fontWeight: 'bold',
};

export const H1 = forwardRef<H1Props, 'h1'>((props, ref) => {
  const styles = useStyleConfig('H1', props);
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { className, ...rest } = omitThemingProps(props);

  return (
    <chakra.h1
      ref={ref}
      className={cx('chakra-heading', props.className)}
      {...headingBaseStyles}
      {...rest}
      __css={styles}
    />
  );
});

export const H2 = forwardRef<H2Props, 'h2'>((props, ref) => {
  const styles = useStyleConfig('H2', props);
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { className, ...rest } = omitThemingProps(props);

  return (
    <chakra.h2
      ref={ref}
      className={cx('chakra-heading', props.className)}
      {...headingBaseStyles}
      {...rest}
      __css={styles}
    />
  );
});

export const H3 = forwardRef<H3Props, 'h3'>((props, ref) => {
  const styles = useStyleConfig('H3', props);
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { className, ...rest } = omitThemingProps(props);

  return (
    <chakra.h3
      ref={ref}
      className={cx('chakra-heading', props.className)}
      {...headingBaseStyles}
      {...rest}
      __css={styles}
    />
  );
});

export const H4 = forwardRef<H4Props, 'h4'>((props, ref) => {
  const styles = useStyleConfig('H4', props);
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { className, ...rest } = omitThemingProps(props);

  return (
    <chakra.h4
      ref={ref}
      className={cx('chakra-heading', props.className)}
      {...headingBaseStyles}
      {...rest}
      __css={styles}
    />
  );
});

export const H5 = forwardRef<H5Props, 'h5'>((props, ref) => {
  const styles = useStyleConfig('H5', props);
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { className, ...rest } = omitThemingProps(props);

  return (
    <chakra.h5
      ref={ref}
      className={cx('chakra-heading', props.className)}
      {...headingBaseStyles}
      {...rest}
      __css={styles}
    />
  );
});

export const H6 = forwardRef<H6Props, 'h6'>((props, ref) => {
  const styles = useStyleConfig('H6', props);
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { className, ...rest } = omitThemingProps(props);

  return (
    <chakra.h6
      ref={ref}
      className={cx('chakra-heading', props.className)}
      {...headingBaseStyles}
      {...rest}
      __css={styles}
    />
  );
});

if (__DEV__) H1.displayName = 'H1';
if (__DEV__) H2.displayName = 'H2';
if (__DEV__) H3.displayName = 'H3';
if (__DEV__) H4.displayName = 'H4';
if (__DEV__) H5.displayName = 'H5';
if (__DEV__) H6.displayName = 'H6';

export default H2;
