import React from "react";
import { AppSwiper } from "../app_swiper/app_swiper";
import AppSwiperSlide from "../app_swiper/components/app_swiper_slide";
import AppTitle from "../app_title/app_title";
import AppCard from "../app_card/app_card";
import { sizes } from "../../constants";
import { useFavorites } from "../../hooks/useFavorites";

/* 
    https://www.npmjs.com/package/react-loading-skeleton
*/

const AppCarouselSection = ({ title, data }) => {
  const { addFavorite, isFavorite, removeFavorite } = useFavorites();

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
              onClick={() => {
                if (isFavorite(e)) {
                  removeFavorite(e);
                } else {
                  addFavorite(e);
                }
              }}
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
