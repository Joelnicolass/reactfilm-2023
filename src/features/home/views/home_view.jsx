import { AppSwiper } from '../../../core/components/app_swiper/app_swiper';

import useSWR from 'swr';
import { getPopularMovies } from '../../../core/services/mvoies/get_popular_movies';

const HomeView = () => {
  const {
    data: popularMovies,
    error: errorPopularMovies,
    isLoading: isLoadingPopularMovies,
  } = useSWR('getPopularMovies', async () => (await getPopularMovies()).results);

  console.log(popularMovies);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}
    >
      <article
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '400px',
          width: '100%',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '40px',
          padding: '20px',
          backgroundImage: `url('https://picsum.photos/1000/400')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1>Lorem Ipsum </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, non. Eos, explicabo
          repellendus sint ipsum, numquam ullam temporibus expedita mollitia unde harum neque, enim
          incidunt ipsa reiciendis recusandae exercitationem aut.
        </p>
      </article>

      <AppSwiper>
        {popularMovies?.map((popularMovie, index) => (
          <swiper-slide key={index}>
            <article
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '300px',
                borderRadius: '40px',
                padding: '20px',
                backgroundImage: `url('https://image.tmdb.org/t/p/w500${popularMovie.backdrop_path}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h1>
                {popularMovie.title} - {popularMovie.vote_average}
              </h1>

              <p>{popularMovie.overview}</p>
            </article>
          </swiper-slide>
        ))}
      </AppSwiper>
    </div>
  );
};

export default HomeView;
