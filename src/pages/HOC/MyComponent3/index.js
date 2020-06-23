import React from 'react';

const MyComponent3 = ({ extraProp }) => (
  <div className="my-component">
    <h4>My Component 3</h4>
    {extraProp ? (
      <p className="extra-props">{extraProp}</p>
    ) : (
      <p>No Extra Props</p>
    )}
  </div>
);

export default MyComponent3;
