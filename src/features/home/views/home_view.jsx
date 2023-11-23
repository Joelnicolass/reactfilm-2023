import AppCard from "../../../core/components/app_card/app_card";
import AppCarouselSection from "../../../core/components/app_carousel_section/app_carousel_section";
import { AppSwiper } from "../../../core/components/app_swiper/app_swiper";
import AppSwiperSlide from "../../../core/components/app_swiper/components/app_swiper_slide";
import {
  getPopularMovies,
  getTopRatedMovies,
} from "../services/movies.services";

import useSWR from "swr";

const HomeView = () => {
  const {
    data: popularMovies,
    error: popularMoviesError,
    isLoading: popularMoviesIsLoading,
  } = useSWR("getPopularMovies", getPopularMovies);

  const {
    data: topRatedMovies,
    error: topRatedMoviesError,
    isLoading: topRatedMoviesIsLoading,
  } = useSWR("getTopRatedMovies", getTopRatedMovies);

  return (
    <div>
      <AppCarouselSection title={"Popular Movies"} data={popularMovies} />

      <AppCard
        height="150px"
        width="300px"
        backgroundImageSrc={"https://picsum.photos/400/200?random=1"}
      >
        <AppCard.Header>HOLAA</AppCard.Header>
      </AppCard>
    </div>
  );
};

export default HomeView;
