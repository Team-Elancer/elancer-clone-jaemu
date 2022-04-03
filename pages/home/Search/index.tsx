import {
  Box,
  chakra,
  ChakraProps,
  Input,
  InputGroup,
  InputRightElement,
  LayoutProps,
  SpaceProps,
} from '@chakra-ui/react';

import CKImage from '@components/CKImage';
import SearchImg from '@images/search.png';

export interface IProps extends ChakraProps {
  placeholder: string;
  iconSize?: LayoutProps['w'];
  rightSpacing?: SpaceProps['mr'];
}

const CoverBox = chakra(Box, {
  shouldForwardProp: () => true,
});

const Search = (props: IProps) => {
  const { placeholder, iconSize = { base: 6, sm: 8 }, rightSpacing = 4, ...rest } = props;

  return (
    <CoverBox
      mt={{ base: 3, sm: 1 }}
      p={{ base: '2.2px', sm: 1 }}
      bgImage="-webkit-gradient(linear,left top,right bottom,color-stop(0, #7485c9),color-stop(1, #f16300))"
      borderRadius="full"
      {...rest}
    >
      <InputGroup h="full" borderRadius="full" bgColor="white">
        <Input
          mt={1}
          pr={{ base: 6, sm: 8 }}
          pl={{ base: 6, sm: 8 }}
          borderRadius="full"
          _placeholder={{ color: 'gray.500', fontSize: { base: '14px', sm: '22px' }, fontWeight: '500' }}
          placeholder={placeholder}
          variant="unstyled"
        />
        <InputRightElement w={{ base: '6', sm: '8' }} h="full" mr={rightSpacing}>
          <CKImage w={iconSize} h={iconSize} src={SearchImg} />
        </InputRightElement>
      </InputGroup>
    </CoverBox>
  );
};
export default Search;
