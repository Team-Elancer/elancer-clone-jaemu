import React, { useState } from 'react';

import { Box, Button, HStack, Badge, Text } from '@chakra-ui/react';

import CKIcon from '@components/CKIcon';
import CKSpan from '@components/CKSpan';

const HomeArticleListItem = ({ className }: { className?: string }) => {
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
      py={{ base: 3, sm: 7 }}
      fontWeight="500"
      bg="white"
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
        {isLiked ? <CKIcon name="heart-fill" fill="black" /> : <CKIcon name="heart" fill="black" />}
      </Button>
      <HStack flexWrap="wrap" gap={{ base: 1, sm: 2 }} w={{ base: '84%', sm: '100%' }} spacing="0">
        {['개발자', '재택', '#3개월', '#재택', '1,395만원'].map((item, index) => (
          <Badge key={item + Number(index)} color="white" bg="black">
            {item}
          </Badge>
        ))}
        {['중급', 'Java', '#Spring'].map((item, index) => (
          <Badge key={item + Number(index)} color="white" bg="rgba(255, 107, 107, 1)">
            {item}
          </Badge>
        ))}
      </HStack>
      <Text my={{ base: 3, sm: 4 }} color="black" fontSize={{ base: 'md', sm: 'lg' }}>
        [재택] [중급/JAVA/3개월/재택] 프롭테크 플랫폼 스마트워킹 백엔드 개발
      </Text>
      <Text color="blackAlpha.600" fontSize={{ base: 'xs', sm: 'md' }} noOfLines={4}>
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
      <HStack justify="flex-end" fontSize={{ base: 'xs', sm: 'md' }}>
        <Text color="blackAlpha.600">
          <CKSpan color="rgba(255,107,107,1)">0명</CKSpan>이 찜했습니다!
        </Text>
        <Badge color="white" bg="#E85656">
          마감1일전
        </Badge>
      </HStack>
    </Box>
  );
};

export default HomeArticleListItem;
