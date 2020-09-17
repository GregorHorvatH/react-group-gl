import React, { Component } from 'react';
import { compose } from 'recompose';

import withHigherOrderComponent from '../../hoc/withHigherOrderComponent';
import withLog from '../../hoc/withLog';
// import withFetch from '../../hoc/withFetch';
import withToggle from '../../hoc/withToggle';

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

// export default Clock;
// export default withHigherOrderComponent(Clock);
// export default withLog(Clock);
// export default withFetch('http://localhost:3004/todos')(Clock);
// export default withToggle(Clock);

// export default withToggle(
//   withHigherOrderComponent(
//     withFetch('http://localhost:3004/todos')(withLog(Clock)),
//   ),
// );

export default compose(withToggle, withHigherOrderComponent, withLog)(Clock);
