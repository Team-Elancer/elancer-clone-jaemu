import React, { FC, useCallback, useRef } from 'react';

import { Item } from 'framer-motion/types/components/Reorder/Item';

interface IProps {
  loading?: any;
  loadMore: (page: number) => void;
  hasMore?: boolean;
  children: any;
  setPage: any;
  page: any;
}

const InfinityScroll: FC<IProps> = ({ loading, setPage, page, loadMore, hasMore, children }) => {
  const observer = useRef<any>(null);

  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
          console.log('detected');
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );

  return (
    <div>
      {React.Children.map(children, (child, index) =>
        children.length === index + 1
          ? React.cloneElement(child, {
              ref: lastBookElementRef,
              style: { border: '1px solid red' },
              key: child.title,
            })
          : React.cloneElement(child, {
              style: { marginBottom: '100px' },
              key: child.title,
            }),
      )}
    </div>
  );
};

InfinityScroll.defaultProps = {
  loading: undefined,
  hasMore: true,
};

export default InfinityScroll;
