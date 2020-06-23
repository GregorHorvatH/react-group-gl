import React from 'react';

import withHigherOrderComponent from '../../../hoc/withHigherOrderComponent';

const MyComponent1 = ({ extraProp }) => (
  <div className="my-component">
    <h4>My Component 1</h4>
    {extraProp ? (
      <p className="extra-props">{extraProp}</p>
    ) : (
      <p>No Extra Props</p>
    )}
  </div>
);

export default withHigherOrderComponent(MyComponent1);
