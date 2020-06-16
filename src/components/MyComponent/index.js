import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return (
      <div className="my-component">
        <button onClick={this.props.onClick}>Push me</button>
      </div>
    );
  }
}

export default MyComponent;
