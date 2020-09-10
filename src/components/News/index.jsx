import React, { useState, useEffect } from 'react';
import NewsForm from './NewsForm';
import NewsItems from './NewsItems';

import { search } from '../../api/news';

const News = ({ someData }) => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleFilterChange = (text) => {
    setIsLoading(true);
    setQuery(text);
    setPage(0);
    search(text, page)
      .then((data) => setItems(data.hits))
      .finally(() => setIsLoading(false));
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setPage(page + 1);
    search(query, page + 1)
      .then((data) => setItems([...items, ...data.hits]))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    handleFilterChange('react');
  }, []); // component did mount

  return (
    <div className="news">
      <h2>News</h2>

      <NewsForm onSubmit={handleFilterChange} />
      {isLoading ? <p>Loading...</p> : <NewsItems items={items} />}

      <button onClick={handleLoadMore}>Load more</button>
    </div>
  );
};

export default News;
