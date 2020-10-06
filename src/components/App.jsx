// core
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Content from './Content';

import { getCurrentUser } from '../redux/session/sessionOperations';

// styles
import './App.styles.scss';

const App = ({ isAuthorizing, getCurrentUser }) => {
  useEffect(getCurrentUser, []); // componentDidMount

  return isAuthorizing ? (
    <p>Loading...</p>
  ) : (
    <div className="app">
      <Navbar />
      <Content />
    </div>
  );
};

const mapStateToProps = ({ session }) => ({
  isAuthorizing: session.isAuthorizing,
});

export default connect(mapStateToProps, { getCurrentUser })(App);
