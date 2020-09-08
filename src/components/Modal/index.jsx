import React, { Component } from 'react';
import './styles.scss';

class Modal extends Component {
  handleCloseModal = (e) => {
    console.log(e);

    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  componentDidMount() {
    console.log('modal did unmount');

    window.addEventListener('keydown', this.handleCloseModal);
  }

  componentWillUnmount() {
    console.log('modal will unmount');

    window.removeEventListener('keydown', this.handleCloseModal);
  }

  render() {
    return <div className="modal">{this.props.children}</div>;
  }
}

export default Modal;
