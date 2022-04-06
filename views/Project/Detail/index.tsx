import React, { useEffect } from 'react';

import {
  useTheme,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  HStack,
  Text,
  useBreakpointValue,
  useColorMode,
  ListItem,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import { BsHeart } from 'react-icons/bs';

import CKImage from '@components/CKImage';
import { H1, H2 } from '@components/Heading';
import placeImg from '@images/company-logo-none.png';
import MultipleSlider from '@views/Home/MultipleSlider';
import BaseLayout from 'layouts/BaseLayout';

const ProjectDetail = () => {
  const theme = useTheme();

  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode('dark');

    return () => setColorMode('light');
  }, []);

  return (
    <BaseLayout>
      <Box px={{ base: 0, sm: 8 }} py={{ base: 0, sm: 9 }} bg="#252525">
        <Container px={{ base: 0, sm: 8 }}>
          <Center
            h={{ base: '200px', sm: '220px' }}
            mx={{ base: -3, sm: 0 }}
            bg="#181818"
            rounded={{ base: 0, sm: 'xl' }}
          >
            <CKImage w="60%" h="70px" src={placeImg} />
          </Center>
        </Container>
      </Box>
      <Container px={{ base: 0, sm: 8 }}>
        <Badge
          w="40"
          h="12"
          mt="8"
          color="#ff6b6b"
          fontSize="2xl"
          lineHeight="10"
          textAlign="center"
          border="1px solid #ff6b6b"
        >
          마감 16일전
        </Badge>
        <H1 fontSize={{ base: '20px', sm: '36px' }} mt="2" mb={{ base: 1.5, sm: 2.5 }}>
          [고급/React.js/4개월/서울역] CJ 마케팅 플랫폼 웹개발 프로젝트
        </H1>
        <HStack flexWrap="wrap" mt="5" mb="10">
          <Text mr="2" fontSize="4xl">
            2,800 ~ 3,400만원 (협의가능)
          </Text>
          <Text color="#999" fontSize="2xl">
            월단가 : 700 ~ 850만원
          </Text>
        </HStack>
        <HStack flexWrap="wrap" gap={{ base: 1, sm: 2 }} mb={{ base: 3, md: 5 }} spacing="0">
          {['고급 개발자', '4개월'].map((item, index) => (
            <Badge key={item + Number(index)} color="white" bg="#e6b222" size="lg">
              {item}
            </Badge>
          ))}
        </HStack>
        <HStack flexWrap="wrap" gap={{ base: 1, sm: 2 }} mb={{ base: 3, md: 5 }} spacing="0">
          {['JAVA', 'Spring'].map((item, index) => (
            <Badge key={item + Number(index)} color="white" bg="#e6b222" size="lg">
              {item}
            </Badge>
          ))}
        </HStack>
        <HStack flexWrap="wrap" gap={{ base: 1, sm: 2 }} mb={{ base: 3, md: 5 }} spacing="0">
          {['모집인원', '총 투입'].map((item, index) => (
            <Badge key={item + Number(index)} color="white" bg="#e6b222" size="lg">
              {item}
            </Badge>
          ))}
        </HStack>

        <H2 fontSize="2xl" mb="5" mt={{ base: 10, sm: 20 }}>
          프로젝트 내용
        </H2>
        <OrderedList spacing="6">
          <ListItem>프로젝트명 : [고급/React.js/4개월/서울역] CJ 마케팅 플랫폼 웹개발 프로젝트</ListItem>
          <ListItem>
            현재개발진행사항
            <UnorderedList>
              <ListItem>총투입인력 : 00명</ListItem>
              <ListItem>현재설계개발상태 : 개발 초기</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            현재개발진행사항
            <UnorderedList>
              <ListItem>총투입인력 : 00명</ListItem>
              <ListItem>현재설계개발상태 : 개발 초기</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            현재개발진행사항
            <UnorderedList>
              <ListItem>총투입인력 : 00명</ListItem>
              <ListItem>현재설계개발상태 : 개발 초기</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            현재개발진행사항
            <UnorderedList>
              <ListItem>총투입인력 : 00명</ListItem>
              <ListItem>현재설계개발상태 : 개발 초기</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            현재개발진행사항
            <UnorderedList>
              <ListItem>총투입인력 : 00명</ListItem>
              <ListItem>현재설계개발상태 : 개발 초기</ListItem>
            </UnorderedList>
          </ListItem>
        </OrderedList>
        <H2 fontSize="2xl" mb="5" mt={{ base: 10, sm: 20 }}>
          프로젝트 참여 신청 [ :0명 ]
        </H2>
        <Text>참여 신청자가 없습니다</Text>

        <H2 fontSize="2xl" mb="5" mt={{ base: 10, sm: 20 }}>
          스마트 프로젝트 추천
        </H2>
        <MultipleSlider
          badgeList={[
            { styleType: 'highlight', text: '마감12일전' },
            { styleType: 'outline', text: 'Javascript' },
            { text: 'Ui기획' },
          ]}
        />

        <ButtonGroup
          justifyContent="center"
          w="full"
          mt={{ base: 12, sm: 32 }}
          mb={{ base: 32, sm: 60 }}
          size={useBreakpointValue({ base: 'sm', sm: 'lg' })}
        >
          <Button bg="primary.500" border="1px solid white" leftIcon={<BsHeart />}>
            인재 스크랩
          </Button>
          <Button bg="primary.500" border="1px solid white">
            프리랜서 공유
          </Button>
        </ButtonGroup>

        <Box
          pos="fixed"
          zIndex={20}
          bottom="5"
          left="50%"
          w={{ base: 'full', sm: theme.breakpoints.md }}
          px={{ base: 0, sm: 8 }}
          transform="translateX(-50%)"
        >
          <Container py={{ base: 3, sm: 5 }} bg="primary.500" rounded={{ base: 0, sm: 'lg' }}>
            <ButtonGroup justifyContent="flex-end" w="full" size={useBreakpointValue({ base: 'sm', sm: 'lg' })}>
              <Button bg="black">상세 이력서 보기</Button>
              <Button bg="red">인터뷰 요청하기</Button>
            </ButtonGroup>
          </Container>
        </Box>
      </Container>
    </BaseLayout>
  );
};

export default ProjectDetail;
