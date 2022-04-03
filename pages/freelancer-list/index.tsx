import React, { useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';

import CKImage from '@components/CKImage';
import InfinityScroll from '@components/InfinityScroll';
import BaseLayout from 'layouts/BaseLayout';
import { axios } from 'module/client';

const index = () => {
  const [items, setItems] = useState([]);

  const [hasMore, setHasMore] = useState(true);

  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const res = await axios.get(`posts?_page=${page}&_limit=20`);

    setPage((prev) => prev + 1);
    setItems((items) => [...items, ...res.data] as []);
    if (res.data.length === 0 || res.data.length < 20) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BaseLayout>
      <InfinityScroll
        dataLength={items.length}
        throttle={1000}
        next={fetchData}
        hasMore={hasMore}
        loader={<CKImage src="/assets/images/svg/loading.svg" width={200} height={100} />}
      >
        {items.map((item: any) => (
          <Box key={Math.random()} mb={20}>
            {item.body}
          </Box>
        ))}
      </InfinityScroll>
    </BaseLayout>
  );
};

export default index;
