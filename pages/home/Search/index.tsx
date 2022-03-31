import { Box, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import CKImage from '@components/CKImage';
import SearchImg from '@images/search.png';

const Search = () => (
  <Box
    mt={{ base: 3, sm: 1 }}
    p={{ base: '2.2px', sm: 1 }}
    bgImage="-webkit-gradient(linear,left top,right bottom,color-stop(0, #7485c9),color-stop(1, #f16300))"
    borderRadius="full"
  >
    <InputGroup h={{ base: 10, sm: '60px' }} borderRadius="full" bgColor="white">
      <Input
        mt={1}
        pr={{ base: 6, sm: 8 }}
        pl={{ base: 6, sm: 8 }}
        borderRadius="full"
        _placeholder={{ color: 'gray.500', fontSize: { base: '14px', sm: '22px' }, fontWeight: '500' }}
        placeholder="어떤 프로젝트 찾으세요?"
        variant="unstyled"
      />
      <InputRightElement w={{ base: '6', sm: '8' }} h="full" mr="6">
        <CKImage w={{ base: 6, sm: 8 }} h={{ base: 6, sm: 8 }} src={SearchImg} />
      </InputRightElement>
    </InputGroup>
  </Box>
);
export default Search;
