import { useRef, useEffect, useState } from "react";

export const AppSwiper = ({ children }) => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    // TODO hay que sacarlo afuera
    const reziseHandler = () => {
      if (window.innerWidth < 768) {
        //
        setSlidesPerView(1);
      } else if (window.innerWidth < 992) {
        setSlidesPerView(2);
      } else {
        //
        setSlidesPerView(3);
      }
    };

    window.addEventListener("resize", reziseHandler);

    reziseHandler();

    return () => {
      window.removeEventListener("resize", reziseHandler);
    };
  }, []);

  const swiperElRef = useRef(null);

  return (
    <swiper-container
      ref={swiperElRef}
      loop
      slides-per-view={slidesPerView}
      navigation="true"
    >
      {children}
    </swiper-container>
  );
};
