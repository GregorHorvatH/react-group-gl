import React, { Component } from 'react';
import { connect } from 'react-redux';

const withAuth = (showWhenAuthorized = false) => (WithHOCComponent) => {
  class WithAuth extends Component {
    conditionalRedirect = () => {
      if (
        showWhenAuthorized ? !this.props.isAuthorized : this.props.isAuthorized
      ) {
        this.props.history.replace('/');
      }
    };

    componentDidMount() {
      this.conditionalRedirect();
    }

    componentDidUpdate() {
      this.conditionalRedirect();
    }

    render() {
      return <WithHOCComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ session: { isAuthorized } }) => ({
    isAuthorized,
  });

  return connect(mapStateToProps)(WithAuth);
};

export default withAuth;

// ---------------
// f | a | s | ? |
// ---------------
// l | - | + | ? |
// ---------------
// p | + | - | ? |
// ---------------
