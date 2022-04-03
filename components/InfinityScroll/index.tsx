import React, { FC, useCallback, useEffect, useRef, useState } from 'react';

import { Center } from '@chakra-ui/react';

interface IProps {
  next: () => void;
  throttle?: number;
  hasMore?: boolean;
  loader?: React.ReactNode;
  children: React.ReactNode[];
  dataLength: number;
}

const InfinityScroll: FC<IProps> = ({ next, dataLength, throttle, hasMore, loader, children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const target = useRef(null);

  const handleObserver = useCallback(
    (entries) => {
      if (!dataLength) return;
      const target = entries[0];
      if (target.isIntersecting && hasMore) {
        setIsLoading(true);
        setTimeout(() => {
          next();
          setIsLoading(false);
        }, throttle);
      }
    },
    [dataLength],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver);
    if (target.current) observer.observe(target.current);

    return () => observer && observer.disconnect();
  }, [handleObserver]);

  return (
    <div>
      {children}
      <Center ref={target} mt={10}>
        {isLoading && hasMore && loader}
      </Center>
    </div>
  );
};

InfinityScroll.defaultProps = {
  hasMore: true,
  throttle: 2000,
  loader: <div>loading...</div>,
};

export default InfinityScroll;
