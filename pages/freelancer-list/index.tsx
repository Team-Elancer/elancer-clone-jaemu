import React, { useEffect, useState } from 'react';

import InfinityScroll from '@components/InfinityScroll';
import BaseLayout from 'layouts/BaseLayout';
import { axios } from 'module/client';

const index = () => {
  const [items, setItems] = useState([]);

  const [hasMore, setHasMore] = useState(true);

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(`posts?_page=${page}&_limit=20`);

    setItems([...items, ...res.data] as []);
    if (res.data.length === 0 || res.data.length < 20) {
      setHasMore(false);
    }
    setPage(page + 1);
  };

  return (
    <BaseLayout>
      <InfinityScroll
        dataLength={items.length}
        throttle={1000}
        next={fetchData}
        hasMore={hasMore}
        loader={
          <svg
            className="loadimage"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            width={60}
            height={60}
            y="0px"
            viewBox="0 0 50 50"
            xmlSpace="preserve"
          >
            <path
              fill="#FF6700"
              d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        }
      >
        {items.map((item: any) => (
          <div key={item.body}>{item.body}</div>
        ))}
      </InfinityScroll>
    </BaseLayout>
  );
};

export default index;
