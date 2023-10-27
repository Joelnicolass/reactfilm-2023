import { useRef, useEffect } from 'react';

export const AppSwiper = ({ children, ...props }) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    swiperElRef.current.addEventListener('swiperprogress', (e) => {});
    swiperElRef.current.addEventListener('swiperslidechange', (e) => {});
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view='3'
      navigation='true'
      loop
      space-between={30}
      {...props}
    >
      {children}
    </swiper-container>
  );
};
