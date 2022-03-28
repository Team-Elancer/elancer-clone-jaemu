import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center, Container, Flex } from '@chakra-ui/react';

import CKImage from '@components/CKImage';
import CKLink from '@components/CKLink';
import logoImg from '@images/logo.png';

import Profile from './Profile';

const Header = () => (
  <Box as="header">
    <Container py={{ base: 4, md: 9 }}>
      <Flex align="center" justify="space-between">
        <CKLink href="/home">
          <CKImage src={logoImg} width={{ base: '96px', sm: '186px' }} height={{ base: '4', sm: '8' }} />
        </CKLink>
        <Center>
          <Breadcrumb fontSize={{ base: '10px', sm: 'md' }} separator="|">
            <BreadcrumbItem>
              <BreadcrumbLink href="/freelancer-list">프리랜서 보기</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="project-list">프로젝트 보기</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Center>

        {/* profile */}
        <Profile />
      </Flex>
    </Container>
  </Box>
);

export default Header;
