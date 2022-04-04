import { useState } from 'react';

import { Tabs, TabList, Tab, TabPanels, TabPanel, Box, ChakraProps, Icon } from '@chakra-ui/react';

import loading from '@images/svg/loading.svg';
import { useSimpleInfiniteScroll } from 'hooks/useInfiniteScroll';
import { axios } from 'module/client';

import TabArticleListItem from './TabArticleListItem';

const FilterArticleList = (props: ChakraProps) => {
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
        <Tabs colorScheme="black" variant="unstyled">
          <TabList flexWrap="wrap" gap="3" mb="7">
            {['⚙️ 개발 프로젝트', '🛠 퍼블리싱', '🎨 디자인', '📝 기획', '🕹 기타 프로젝트'].map((item, index) => (
              <Tab
                key={item + Number(index)}
                border="2px solid #ccc"
                _selected={{ borderColor: 'black', background: '#E7E7E7', shadow: 'none' }}
                rounded="full"
              >
                {item}
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {['##tabArticleList1', '##tabArticleList2', '##tabArticleList3', '##tabArticleList4'].map((item, index) => (
              <TabPanel key={item + Number(index)} p="0">
                {items.map((item, index) => (
                  <TabArticleListItem className="item" key={Math.random()} />
                ))}
              </TabPanel>
            ))}
          </TabPanels>

          <Box ref={targetRef}>{isLoading && <Icon as={loading} w={32} h={20} />}</Box>
        </Tabs>
      </Box>
    </>
  );
};

export default FilterArticleList;
