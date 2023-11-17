import React from "react";

const AppSwiperSlide = ({ children, ...props }) => {
  return <swiper-slide {...props}>{children}</swiper-slide>;
};

export default AppSwiperSlide;
