import axios from 'axios';

export const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
    language: 'es-ES',
  },
});
