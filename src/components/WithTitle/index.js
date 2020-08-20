import React from 'react';

const WithTitle = ({ children, title }) => {
  return (
    <div className="some-component">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default WithTitle;
