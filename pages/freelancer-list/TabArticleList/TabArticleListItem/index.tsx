import React, { useState } from 'react';

import { Box, Button, HStack, Badge, Text, Flex, Center } from '@chakra-ui/react';
import { EffectFade, Navigation, Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import CKIcon from '@components/CKIcon';
import CKSpan from '@components/CKSpan';
import CKSwiper from '@components/CKSwiper';

const TabArticleListItem = ({ className }: { className: string }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked((prev) => !prev);
  };
  return (
    <Box
      className={className}
      pos="relative"
      mb="5"
      px={{ base: 3, sm: 9 }}
      py={{ base: 3, sm: 6 }}
      fontWeight="500"
      border="2px solid #ccc"
      rounded="lg"
    >
      <Button
        pos="absolute"
        top={{ base: 3, sm: 7 }}
        right={{ base: 3, sm: 9 }}
        w="8"
        minW="0"
        h="8"
        p="0"
        bg="blackAlpha.50"
        onClick={handleLike}
        rounded="full"
      >
        {isLiked ? <CKIcon name="heart-fill" fill="black" /> : <CKIcon name="heart" />}
      </Button>
      <Flex gap={5}>
        <Box w={{ base: 'full', sm: '40%' }}>
          <CKSwiper
            pagination={{
              clickable: true,
            }}
            effect="fade"
            navigation
            modules={[EffectFade, Navigation, Pagination]}
          >
            <SwiperSlide>
              <Center h="224px" color="#fff" fontSize="27px" fontWeight="500" bg="#8a7fa4" rounded="xl">
                개발자 조*래
              </Center>
            </SwiperSlide>
            <SwiperSlide>
              <Center h="224px" color="#fff" fontSize="27px" fontWeight="500" bg="rgba(116, 133, 201, 1)" rounded="xl">
                개발자 조*래
              </Center>
            </SwiperSlide>
          </CKSwiper>
        </Box>
        <Box>
          <Text mb={3} fontSize={{ base: 'md', sm: 'lg' }}>
            조*래 | 10년 경력 개발자
          </Text>
          <Text mb={3} fontSize={{ base: 'md', sm: '2xl' }}>
            준비된 개발자 조*래입니다.
          </Text>
          <HStack flexWrap="wrap" gap={1} w={{ base: '84%', sm: '100%' }} spacing="0">
            {['중급', 'Java', '#Spring'].map((item, index) => (
              <Badge key={item + Number(index)} color="white" bg="rgba(255, 107, 107, 1)">
                {item}
              </Badge>
            ))}
          </HStack>
          <Text my={3} color="blackAlpha.600" fontSize={{ base: 'xs', sm: 'md' }} noOfLines={3}>
            프로젝트명중급/JAVA/개월/재택프롭테크플랫폼스마트워킹백엔드개발
            <br />
            현재진행상황
            <br />
            총투입인력
            <br />
            현재설계개발상태리뉴얼개
            <br />
            현재설계개발상태리뉴얼개
          </Text>
          <HStack justify="flex-start" fontSize={{ base: 'xs', sm: 'md' }}>
            <Text color="blackAlpha.600">
              <CKSpan color="black"> ★ 5.0 </CKSpan>
              <CKSpan>(조회수 1974)</CKSpan>
            </Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default TabArticleListItem;
