import React, { useEffect, useState } from 'react';

import { Box, Container, Icon, Text } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/system';
import axios from 'axios';

import ArticleListFilter from '@components/ArticleList/Filter';
import HomeArticleListItem from '@components/ArticleList/HomeItem';
import { H1 } from '@components/Heading';
import loading from '@images/svg/loading.svg';
import { useSimpleInfiniteScroll } from 'hooks/useInfiniteScroll';
import BaseLayout from 'layouts/BaseLayout';

const ProjectList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [page, setPage] = useState(1);

  const fetchMore = async () => {
    setIsLoading(true);
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`);
    console.log(res);

    if (res.data.length === 0 || res.data.length < 5) {
      setHasMore(false);
    }
    setPage((prev) => prev + 1);
    setItems((items) => [...items, ...res.data] as []);
    setIsLoading(false);
  };

  const [targetRef] = useSimpleInfiniteScroll({
    loadMore: fetchMore,
    hasMore,
  });

  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode('dark');

    return () => setColorMode('light');
  }, []);

  return (
    <BaseLayout>
      <Container mb={{ base: 20, sm: 36 }}>
        <Box mt={{ base: 6, sm: 28 }}>
          <Text fontSize={{ base: 'xs', sm: 'lg' }}>이랜서가 보증하는 IT 파트너스 38만명</Text>
          <H1 mt="1" lineHeight="36px">
            프로젝트 등록하면
            <br />더 정확한 추천을 받을 수 있어요
          </H1>
        </Box>

        {/* article list */}
        <ArticleListFilter />
        {items.map((item, index) => (
          <HomeArticleListItem className="item" key={item} />
        ))}
        <Box ref={targetRef}>{isLoading && <Icon as={loading} w={52} h={20} />}</Box>
      </Container>
    </BaseLayout>
  );
};

export default ProjectList;
