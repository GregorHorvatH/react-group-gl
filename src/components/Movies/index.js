import React, { useEffect, useState } from 'react';
import Loader from '../Loader';
import MovieList from '../MovieList';
import { getPopular } from '../../utils/moviesAPI';
import withAuth from '../../hoc/withAuth';

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    getPopular()
      .then(setMovies)
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="movies">
      <h3>Popular Movies</h3>
      <MovieList movies={movies} />
    </div>
  );
};

export default withAuth(true)(Movies);
