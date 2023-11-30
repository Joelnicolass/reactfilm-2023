import React from "react";
import { AppSwiper } from "../app_swiper/app_swiper";
import AppSwiperSlide from "../app_swiper/components/app_swiper_slide";
import AppTitle from "../app_title/app_title";
import AppCard from "../app_card/app_card";
import { sizes } from "../../constants";

/* 
    https://www.npmjs.com/package/react-loading-skeleton
*/

const AppCarouselSection = ({ title, data }) => {
  return (
    <>
      <AppTitle>{title}</AppTitle>
      <AppSwiper>
        {data?.map((e) => (
          <AppSwiperSlide key={e.id}>
            <AppCard
              height="150px"
              width="300px"
              backgroundImageSrc={e.backdrop}
            >
              <AppCard.Header>
                <AppTitle size={sizes.sm}>{e.title}</AppTitle>
              </AppCard.Header>
              <AppCard.Footer>Footer</AppCard.Footer>
            </AppCard>
          </AppSwiperSlide>
        ))}
      </AppSwiper>
    </>
  );
};

export default AppCarouselSection;

/* 
    const sliderRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
*/
