import React from 'react';
import NewsItem from '../NewsItem';

const NewsItems = ({ items }) => {
  return (
    <ul className="news-items">
      {items.map((item) => (
        <NewsItem key={item.objectID} item={item} />
      ))}
    </ul>
  );
};

export default NewsItems;
