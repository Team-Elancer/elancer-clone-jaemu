import { Container, Box, Flex, VStack, Text, Divider, HStack } from '@chakra-ui/react';

import CKImage from '@components/CKImage';
import { H1 } from '@components/Heading';
import mainBannerImg from '@images/20220308.png';
import Footer from 'layouts/BaseLayout/Footer';
import Header from 'layouts/BaseLayout/Header';

import ArticleList from './ArticleList';
import LinkGrid from './LinkGrid';
import MultipleSlider from './MultipleSlider';
import Search from './Search';

const Home = () => (
  <>
    <Box
      as="section"
      bgImage="url('/assets/images/main-bg20220126.png')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      {/* header */}
      <Header type="home" />
      <Container overflow="hidden">
        {/* search */}
        <Search h="60px" placeholder="어떤 프로젝트 찾으세요?" rightSpacing={6} />
        {/* main banner */}
        <Flex gap={{ base: 4, sm: 6 }} py="16">
          <CKImage
            src={mainBannerImg}
            w={{ base: '200px', sm: '420px' }}
            h={{ base: '200px', sm: '420px' }}
            borderRadius="12px"
          />

          <VStack align="flex-start" justify="flex-end" mb="2" fontSize={{ base: 'lg', sm: '3xl' }} spacing={0}>
            <Text>#3월8일</Text>
            <Text>#세계여성의날</Text>
            <Text>#에이다러브레이스</Text>
          </VStack>
        </Flex>
      </Container>
      <Divider borderColor="gray.300" />
    </Box>

    <Box as="main">
      <Container py={{ base: 4, md: 9 }}>
        {/* 총 프리랜서 수 / 총 프로젝트 금액 / 총 프로젝트 수 */}
        <HStack
          justify="space-between"
          flexWrap={{ base: 'wrap', sm: 'nowrap' }}
          my={{ base: 6, sm: 8 }}
          textAlign="center"
          divider={
            <Divider
              d={{ base: 'none', sm: 'block' }}
              h="82px"
              color="red"
              borderColor="gray.500"
              orientation="vertical"
            />
          }
        >
          <Box w={{ base: 'full', sm: '25%' }} my="3" fontSize={{ base: '18px', sm: '16px' }}>
            <Text color="gray.500">총 프리랜서 수</Text>
            <HStack justify="center" mt="1">
              <Text color="gray.900" fontSize={{ base: '32px', sm: '28px' }}>
                391,365
              </Text>
              <Text pt="1" color="gray.500">
                명
              </Text>
            </HStack>
          </Box>
          <Box w={{ base: 'full', sm: '50%' }} my="3">
            <Text color="gray.500">총 프로젝트 금액</Text>
            <HStack justify="center" mt="1">
              <Text color="gray.900" fontSize={{ base: '32px', sm: '28px' }}>
                725,850,600,000
              </Text>
              <Text pt="1" color="gray.500">
                명
              </Text>
            </HStack>
          </Box>
          <Box w={{ base: 'full', sm: '25%' }} my="3">
            <Text color="gray.500">총 프로젝트 수</Text>
            <HStack justify="center" mt="1">
              <Text color="gray.900" fontSize={{ base: '32px', sm: '28px' }}>
                48,913
              </Text>
              <Text pt="1" color="gray.500">
                명
              </Text>
            </HStack>
          </Box>
        </HStack>

        {/* h1 프로젝트 둘러보기 */}
        <H1>프로젝트 둘러보기</H1>
        <LinkGrid />

        {/* h1 추천 프로젝트 (multiple swiper) */}
        <H1 mb="0">추천 프로젝트</H1>
        <MultipleSlider
          badgeList={[
            { styleType: 'highlight', text: '마감12일전' },
            { styleType: 'outline', text: 'Javascript' },
            { text: 'Ui기획' },
          ]}
        />

        {/* filter article list */}
        <ArticleList mt={{ base: 20, sm: 36 }} />

        {/* h1 프리랜서 (multiple swiper) */}
        <H1 mb="0">프리랜서</H1>
        <MultipleSlider
          badgeList={[
            { styleType: 'highlight', text: '마감12일전' },
            { styleType: 'outline', text: 'Javascript' },
            { text: 'Ui기획' },
          ]}
          moreLink="/"
        />
      </Container>
    </Box>

    {/* footer */}
    <Footer />
  </>
);

export default Home;
