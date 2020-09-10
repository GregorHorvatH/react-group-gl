import axios from 'axios';

export const search = (query, page) =>
  axios
    .get(
      `https://hn.algolia.com/api/v1/search?query=${query}&page=${page}&hitsPerPage=5`,
    )
    .then((res) => res.data);
