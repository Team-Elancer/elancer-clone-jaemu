import { useEffect, useState } from 'react';

interface IProps {
  offsetY: number;
}

const throttle = (callback: () => void, delay: number) => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return () => {
    if (timer) return;
    timer = setTimeout(() => {
      callback();
      timer = null;
    }, delay);
  };
};

function useScrollingUp({ offsetY }: IProps) {
  const [isScrolledUp, setIsScrolledUp] = useState(true);

  const updateScroll = () => {
    const { scrollY } = window;
    const isFixedTop = scrollY < offsetY;

    setIsScrolledUp(isFixedTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', throttle(updateScroll, 100));
    return () => {
      window.removeEventListener('scroll', () => throttle(updateScroll, 100));
    };
  }, [updateScroll]);

  return { isScrolledUp };
}

export default useScrollingUp;
