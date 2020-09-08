import React from 'react';

const WithTitle = ({ children, title, width }) => (
  <div className="with-tile" style={{ maxWidth: width }}>
    <h3>{title}</h3>
    {children}
  </div>
);

export default WithTitle;
