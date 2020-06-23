import React, { Component } from 'react';

const withHigherOrderComponent = (WithHOCComponent) =>
  class WithHigherOrderComponent extends Component {
    render() {
      return <WithHOCComponent {...this.props} extraProp="123" />;
    }
  };

export default withHigherOrderComponent;
