import React from 'react';
import { compose } from 'recompose';

import withLog from '../../../hoc/withLog';
import withToggle from '../../../hoc/withToggle';

const MyComponent2 = ({ extraProp }) => (
  <div className="my-component">
    <h4>My Component 2</h4>
    {extraProp ? (
      <p className="extra-props">{extraProp}</p>
    ) : (
      <p>No Extra Props</p>
    )}
  </div>
);

// export default MyComponent2;
// export default withToggle(withLog(MyComponent2));
export default compose(withLog, withToggle)(MyComponent2);
