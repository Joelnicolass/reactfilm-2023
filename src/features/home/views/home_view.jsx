import { createPortal } from "react-dom";
import AppCard from "../../../core/components/app_card/app_card";
import AppCarouselSection from "../../../core/components/app_carousel_section/app_carousel_section";
import { AppSwiper } from "../../../core/components/app_swiper/app_swiper";
import AppSwiperSlide from "../../../core/components/app_swiper/components/app_swiper_slide";
import {
  getPopularMovies,
  getTopRatedMovies,
} from "../services/movies.services";

import useSWR from "swr";
import { useFavorites } from "../../../core/hooks/useFavorites";
import { useAuth } from "../../auth/hook/use_auth";

const HomeView = () => {
  const { logout } = useAuth();
  const { favorites } = useFavorites();

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
      <div>
        <AppCarouselSection title={"Popular Movies"} data={popularMovies} />

        <AppCarouselSection title={"Top Rated Movies"} data={topRatedMovies} />

        <AppCarouselSection
          key={`favorites-${favorites.length}`}
          title={"Favorites"}
          data={favorites}
        />
      </div>

      <button onClick={logout}>LOGOUT</button>
    </div>
  );
};

export default HomeView;
