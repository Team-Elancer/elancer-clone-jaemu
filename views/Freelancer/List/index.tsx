import React from 'react';

import { Box, Container, Text } from '@chakra-ui/react';

import { H1 } from '@components/Heading';
import BaseLayout from 'layouts/BaseLayout';

import ArticleList from './ArticleList';

const FreelancerList = () => (
  <BaseLayout>
    <Container mb={{ base: 20, sm: 36 }}>
      <Box mt={{ base: 6, sm: 28 }}>
        <Text fontSize={{ base: 'xs', sm: 'lg' }}>이랜서가 보증하는 IT 파트너스 38만명</Text>
        <H1 mt="1" lineHeight="36px">
          프로젝트 등록하면
          <br />더 정확한 추천을 받을 수 있어요
        </H1>
      </Box>

      {/* filter article list */}
      <ArticleList />
    </Container>
  </BaseLayout>
);

export default FreelancerList;
