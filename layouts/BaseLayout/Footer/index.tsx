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
  Button,
  ButtonGroup,
} from '@chakra-ui/react';

import CKIcon from '@components/CKIcon';
import cardTextIcon from '@components/CKIcon/svgs/card-text.svg';
import heartIcon from '@components/CKIcon/svgs/heart.svg';
import peopleIcon from '@components/CKIcon/svgs/people.svg';
import PersonCircleIcon from '@components/CKIcon/svgs/person-circle.svg';
import searchIcon from '@components/CKIcon/svgs/search.svg';
import CKImage from '@components/CKImage';
import footerLogoImg from '@images/footer-logo.png';

const MOBILE_BOTTOM_MENU = [
  { text: '검색', icon: searchIcon, href: '/' },
  { text: '찜목록', icon: heartIcon, href: '/' },
  { text: '프리랜서', icon: peopleIcon, href: '/' },
  { text: '프로젝트', icon: cardTextIcon, href: '/' },
  { text: '마이보드', icon: PersonCircleIcon, href: '/' },
];

const Footer = () => (
  <Box as="footer" pos="relative" zIndex="10" color="#b7b7b7" bg="#333">
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

    {/* mobile bottom nav */}
    <ButtonGroup pos="fixed" bottom="0" d={{ base: 'block', sm: 'none' }} w="full" py="3" bg="white" spacing={0}>
      {MOBILE_BOTTOM_MENU.map((item) => (
        <Button key={item.text} w="20%" color="#888" fontSize="xs" variant="unstyled">
          <CKIcon icon={item.icon} display="block" mb="1.5" />
          {item.text}
        </Button>
      ))}
    </ButtonGroup>
  </Box>
);

export default Footer;
