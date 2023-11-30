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
import AppModal from "../../../core/components/app_modal/app_modal";
import { useModal } from "../../../core/components/app_modal/hook/use_modal";

const HomeView = () => {
  const { isOpen, closeModal, openModal } = useModal();

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
      </div>

      <button onClick={openModal}>ABRIR</button>

      <AppModal open={isOpen} onClickedOut={closeModal}>
        <div
          style={{
            height: "300px",
            width: "300px",
            backgroundColor: "white",
            color: "red",
          }}
        >
          hola soy un modal
          <button onClick={closeModal}>Cerrar</button>
        </div>
      </AppModal>
    </div>
  );
};

export default HomeView;
