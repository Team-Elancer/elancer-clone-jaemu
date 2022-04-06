import { Box, Breadcrumb, BreadcrumbItem, Center, Container, Flex, useColorMode } from '@chakra-ui/react';

import CKImage from '@components/CKImage';
import CKLink from '@components/CKLink';
import logoWhiteImg from '@images/logo-white.png';
import logoImg from '@images/logo.png';
import Search from '@views/Home/Search';
import useScrollUp from 'hooks/useScrollUp';

import Profile from './Profile';

const Header = ({ type }: { type?: 'home' }) => {
  const { isScrolledUp } = useScrollUp({ offsetY: 100 });
  const isHome = type === 'home';

  const { colorMode } = useColorMode();

  return (
    <Box
      sx={{
        '.stickyHeader': {
          position: 'fixed',
          top: '0',
          width: '100%',
          shadow: 'md',
        },
      }}
    >
      <Box
        className={isHome ? `` : `${isScrolledUp ? '' : 'stickyHeader'}`}
        as="header"
        pos="relative"
        zIndex={10}
        // eslint-disable-next-line no-nested-ternary
        shadow={isHome ? 'undefined' : colorMode === 'dark' ? 'lg' : 'md'}
        // shadow="shadows.md"
      >
        <Container py={{ base: 4, sm: isScrolledUp ? 8 : 4 }}>
          <Flex align="center" justify="space-between">
            <CKLink href="/home">
              <CKImage
                src={colorMode === 'light' ? logoImg : logoWhiteImg}
                width={{ base: '96px', sm: '186px' }}
                height={{ base: '4', sm: '8' }}
              />
            </CKLink>
            <Center>
              {isScrolledUp ? (
                <Breadcrumb fontSize={{ base: '10px', sm: 'md' }} separator="|">
                  <BreadcrumbItem>
                    <CKLink href="/freelancers">프리랜서 보기</CKLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <CKLink href="/projects">프로젝트 보기</CKLink>
                  </BreadcrumbItem>
                </Breadcrumb>
              ) : (
                !isHome && (
                  <Search
                    h={12}
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
