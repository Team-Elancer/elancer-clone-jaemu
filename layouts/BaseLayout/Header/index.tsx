import { Box, Breadcrumb, BreadcrumbItem, Center, Container, Flex } from '@chakra-ui/react';

import CKImage from '@components/CKImage';
import CKLink from '@components/CKLink';
import logoImg from '@images/logo.png';
import Search from '@pages/home/Search';
import useScrollUp from 'hooks/useScrollUp';

import Profile from './Profile';

const Header = ({ type }: { type?: 'home' }) => {
  const { isScrolledUp } = useScrollUp({ offsetY: 100 });
  const isHome = type === 'home';
  return (
    <Box
      sx={{
        '.stickyHeader': {
          position: 'fixed',
          width: '100%',
        },
      }}
    >
      <Box
        className={isHome ? `` : `${isScrolledUp ? '' : 'stickyHeader'}`}
        as="header"
        sx={isHome ? undefined : { background: 'white', shadow: 'md' }}
        zIndex={10}
      >
        <Container py={{ base: 4, md: isScrolledUp && !isHome ? 8 : 4 }}>
          <Flex align="center" justify="space-between">
            <CKLink href="/home">
              <CKImage src={logoImg} width={{ base: '96px', sm: '186px' }} height={{ base: '4', sm: '8' }} />
            </CKLink>
            <Center>
              {isScrolledUp ? (
                <Breadcrumb fontSize={{ base: '10px', sm: 'md' }} separator="|">
                  <BreadcrumbItem>
                    <CKLink href="freelancer-list">프리랜서 보기</CKLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <CKLink href="project-list">프리랜서 보기</CKLink>
                  </BreadcrumbItem>
                </Breadcrumb>
              ) : (
                !isHome && (
                  <Search
                    h={10}
                    placeholder="어떤 프리랜서를 찾으세요?"
                    iconSize={{ base: 4, sm: 6 }}
                    sx={{ input: { marginTop: '0', _placeholder: { fontSize: '14px' } } }}
                  />
                )
              )}
            </Center>

            {/* profile */}
            <Profile />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
