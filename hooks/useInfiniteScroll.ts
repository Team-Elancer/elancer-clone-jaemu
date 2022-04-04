import { useRef, useEffect, useCallback } from 'react';

type Options = {
  hasMore: boolean;
  loadMore: () => void;
} & Omit<IntersectionObserverInit, 'root'>;

export const useSimpleInfiniteScroll = ({
  hasMore,
  loadMore,
  rootMargin,
  threshold,
}: // eslint-disable-next-line no-unused-vars
Options): [(target: Element | null) => void, (root: Element | null) => void] => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const loadMoreRef = useRef(() => {});
  const rootMarginRef = useRef(rootMargin);
  const thresholdRef = useRef(threshold);
  const targetRef = useRef<Element | null>();
  const rootRef = useRef<Element | null>();
  const unobserveRef = useRef<() => void>();

  useEffect(() => {
    loadMoreRef.current = loadMore;
  }, [loadMore]);

  const observeTarget = useCallback(() => {
    if (unobserveRef.current) {
      unobserveRef.current();
      unobserveRef.current = undefined;
    }

    const target = targetRef.current;
    if (!target || !hasMore) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting }) => isIntersecting && loadMoreRef.current());
      },
      {
        root: rootRef.current,
        rootMargin: rootMarginRef.current,
        threshold: thresholdRef.current,
      },
    );
    observer.observe(target);
    unobserveRef.current = () => observer.unobserve(target);
  }, [hasMore]);

  const setTargetRef = useCallback(
    (target: Element | null) => {
      targetRef.current = target;
      observeTarget();
    },
    [observeTarget],
  );

  const setRootRef = useCallback(
    (root: Element | null) => {
      rootRef.current = root;
      observeTarget();
    },
    [observeTarget],
  );

  return [setTargetRef, setRootRef];
};
