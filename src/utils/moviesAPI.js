import axios from 'axios';

export function getPopular() {
  return axios
    .get(
      'https://api.themoviedb.org/3/movie/popular?api_key=d05f5f872f0f74667bcdb4179984cab2',
    )
    .then(({ data }) => data.results);
}
