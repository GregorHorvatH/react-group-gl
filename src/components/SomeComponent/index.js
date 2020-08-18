import React from 'react';

const SomeComponent = (props) => {
  // console.log(props);

  return (
    <div className="some-component">
      <h3>Some Component Title</h3>
      {props.children}
    </div>
  );
};

export default SomeComponent;
