import {THE_MOVIE_DB_KEY} from '@env';
import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    // api_key: '87b223920db55b5c401e7525287da1bd',
    api_key: THE_MOVIE_DB_KEY ?? 'no-key',
    language: 'es',
  },
});
