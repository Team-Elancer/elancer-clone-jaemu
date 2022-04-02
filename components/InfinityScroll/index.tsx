import React, { FC, useEffect, useRef, useState } from 'react';

import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

interface IProps {
  next: () => void;
  throttle?: number;
  hasMore?: boolean;
  loader?: React.ReactNode;
  children: React.ReactNode[];
  dataLength: number;
}

const InfinityScroll: FC<IProps> = ({ next, dataLength, loader, throttle = 2000, hasMore, children }) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(false);
  }, [dataLength]);

  const observer = useRef<any>(null);
  console.log(dataLength);

  const lastBookElementRef = (node: ReactJSXElement) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      setLoading(true);
      setTimeout(() => {
        if (entries[0].isIntersecting && hasMore) {
          console.log('execute next');
          next();
        }
      }, throttle);
    });
    if (node) observer.current.observe(node);
  };

  return (
    <div>
      {children &&
        React.Children.map(children, (child, index) =>
          children.length === index + 1
            ? React.cloneElement(child as ReactJSXElement, {
                ref: lastBookElementRef,
                key: Math.random(),
              })
            : React.cloneElement(child as ReactJSXElement, {
                style: { marginTop: '100px' },
                key: Math.random(),
              }),
        )}
      {loading && hasMore && loader}
    </div>
  );
};

InfinityScroll.defaultProps = {
  hasMore: true,
  throttle: 2000,
  loader: <div>loading...</div>,
};

export default InfinityScroll;
