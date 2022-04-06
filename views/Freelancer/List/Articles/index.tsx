import { useState } from 'react';

import { Box, ChakraProps, Icon } from '@chakra-ui/react';

import ArticleListFilter from '@components/ArticleListFilter';
import loading from '@images/svg/loading.svg';
import { useSimpleInfiniteScroll } from 'hooks/useInfiniteScroll';
import { axios } from 'module/client';

import ArticleListItem from './Article';

const Articles = (props: ChakraProps) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [page, setPage] = useState(1);

  const fetchMore = async () => {
    setIsLoading(true);
    const res = await axios.get(`posts?_page=${page}&_limit=5`);
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

  return (
    <>
      <Box {...props}>
        <ArticleListFilter />
        <Box p="0">
          {items.map((item, index) => (
            <ArticleListItem className="item" key={Math.random()} />
          ))}
        </Box>

        <Box ref={targetRef}>{isLoading && <Icon as={loading} w={52} h={20} />}</Box>
      </Box>
    </>
  );
};

export default Articles;
