import React, { Component } from 'react';

class Clock extends Component {
  state = {
    value: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ value: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="clock">
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default Clock;
