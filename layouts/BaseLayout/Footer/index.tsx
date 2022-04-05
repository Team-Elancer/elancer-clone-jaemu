import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Text,
  VStack,
  Stack,
} from '@chakra-ui/react';

import CKImage from '@components/CKImage';
import footerLogoImg from '@images/footer-logo.png';

const Footer = () => (
  <Box as="footer" color="#b7b7b7" bg="blackAlpha.800">
    <Container py={{ base: 12, sm: 14 }}>
      <Flex justify="space-between" wrap={{ base: 'wrap', sm: 'nowrap' }}>
        <VStack align="flex-start" w={{ base: 'full', sm: 'auto' }} spacing="0">
          <CKImage w={{ base: 24, sm: 32 }} src={footerLogoImg} />
          <Text color="#8c8c8c" fontSize="xs">
            Copyright © 2000 - 2022 ELANCER All Rights Reserved.
          </Text>
        </VStack>
        <Breadcrumb
          my={{ base: 10, sm: 0 }}
          color="whiteAlpha.800"
          fontSize="sm"
          separator=""
          spacing={{ base: '10px', sm: '18px' }}
        >
          <BreadcrumbItem>
            <BreadcrumbLink shadow="none" href="#">
              (주)이랜서
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">이용약관</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">개인정보처리방침</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Box mt={{ base: 0, sm: 16 }} fontSize="xs">
        <Text>
          (주)이랜서 <br />
          대표이사 | 박우진
        </Text>
        <Stack direction={{ base: 'column', sm: 'row' }} spacing={{ base: 0, sm: '100px' }}>
          <Text>
            주소 | 서울 강남구 테헤란로 410.금강타워 11층 <br />
            전화 | 02-545-0042 <br />
            팩스 | 02-6008-2059
          </Text>
          <Text>
            주소 | 서울 강남구 테헤란로 410.금강타워 11층 <br />
            전화 | 02-545-0042 <br />
            팩스 | 02-6008-2059
          </Text>
        </Stack>
      </Box>
    </Container>
  </Box>
);

export default Footer;
