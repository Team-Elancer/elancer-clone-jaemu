import React, { useEffect, useState } from 'react';

import axios from 'axios';

import InfinityScroll from '@components/InfinityScroll';
import BaseLayout from 'layouts/BaseLayout';

const baseURL = 'https://jsonplaceholder.typicode.com/posts';

const index = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const loadMore = async () => {
    try {
      const response = await axios.get(`${baseURL}?_page=${page}&_limit=10`);
      setData([...data, ...response.data] as any);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    const load = async (page) => {
      try {
        const response = await axios.get(`${baseURL}?_page=${page}&_limit=10`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    load(0);
  }, []);

  useEffect(() => {
    loadMore();
  }, [page]);

  return (
    <BaseLayout>
      <InfinityScroll loadMore={loadMore} page={page} setPage={setPage}>
        {data.map((item: any) => (
          <div key={item.title}>{item.title}</div>
        ))}
      </InfinityScroll>
      {page}
    </BaseLayout>
  );
};

export default index;
