import { useRef, useEffect } from "react";

export const AppSwiper = ({ children }) => {
  const swiperElRef = useRef(null);

  return (
    <swiper-container
      ref={swiperElRef}
      loop
      slides-per-view="3"
      navigation="true"
    >
      {children}
    </swiper-container>
  );
};
