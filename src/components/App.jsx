// core
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Content from './Content';

// routes
import routes from './routes';

// context
import UserContext from '../context/UserContext';

// styles
import './App.styles.scss';

const initialState = {
  user: {
    name: 'John Doe',
    avatar: '/img/avatar.jpeg',
    age: 35,
  },
};

class App extends Component {
  handleLogIn = () => {
    this.setState(initialState);
  };

  handleLogOut = () => {
    this.setState({
      user: null,
    });
  };

  state = {
    user: null,
    // user: {
    //   name: 'John Doe',
    //   avatar: '/img/avatar.jpeg',
    //   age: 35,
    // },

    onLogIn: this.handleLogIn, // undefined
    onLogOut: this.handleLogOut, // undefined
  };

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <UserContext.Provider value={this.state}>
            <Navbar routes={routes} />
            <Content routes={routes} />
          </UserContext.Provider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
