import React, { Component } from 'react';
import axios from 'axios';

const withFetch = (url) => (WrappedComponent) => {
  return class WithFetch extends Component {
    state = {
      data: [],
      loading: false,
      error: null,
    };

    componentDidMount() {
      this.setState({ loading: true });

      axios
        .get(url)
        .then(({ data }) => this.setState({ data }))
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
};

export default withFetch;
