import React from 'react';

const NewsItem = ({ item }) => (
  <li>
    <a href={item.url}>{item.title}</a>
  </li>
);

export default NewsItem;
