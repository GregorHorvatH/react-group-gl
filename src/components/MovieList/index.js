import React, { useEffect } from 'react';

import withFetch from '../../hoc/withFetch';
import withToggle from '../../hoc/withToggle';

const MovieList = ({ data, loading, error }) => {
  useEffect(() => console.log('is loading:', loading), [loading]);

  return (
    <ul className="movie-list">
      {data.results &&
        data.results.map(({ id, title, poster_path, overview }) => (
          <div key={id} className="movie-item">
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
            <div className="movie-info">
              <h4 className="title">{title}</h4>
              <p>{overview}</p>
            </div>
          </div>
        ))}
    </ul>
  );
};

export default withToggle(
  withFetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=d05f5f872f0f74667bcdb4179984cab2',
  )(MovieList),
);
