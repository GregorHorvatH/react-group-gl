import { Component } from 'react';

class Toggler extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

  render() {
    const { isOpen } = this.state;

    return this.props.children({
      onToggle: this.toggle,
      isOpen,
    });
  }
}

export default Toggler;
