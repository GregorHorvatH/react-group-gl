import React, { Fragment, Component } from 'react';
import Counter from './Counter';
import Users from './Users';
import './App.css';

const Wrapper = ({ children }) => <div className="wrapper">{children}</div>;

class App extends Component {
  handleClick = () => {
    console.log('hello');
  };

  render() {
    return (
      <Fragment>
        <h1>Hello from react!</h1>
        <br />
        <p>lorem ipsum</p>

        <Users
          users={[
            {
              id: 'id-1',
              firstName: 'John',
              lastName: 'Doe',
              age: 15,
            },
            {
              id: 'id-2',
              firstName: 'Peter',
              lastName: 'Parker',
              age: 20,
            },
          ]}
        />

        <Wrapper>
          <Counter
            title="Counter 1"
            isVisible
            onButtonClick={this.handleClick}
          />
        </Wrapper>
        <Wrapper>
          <Counter title="Counter 2" isVisible />
        </Wrapper>
        <Wrapper>
          <Counter title="Counter 3" />
        </Wrapper>
      </Fragment>
    );
  }
}

export default App;
