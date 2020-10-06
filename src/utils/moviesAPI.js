import axios from 'axios';

const apiKey = 'd05f5f872f0f74667bcdb4179984cab2';

export function getPopular() {
  return axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then(({ data }) => data.results);
}
