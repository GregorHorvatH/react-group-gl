import React from 'react';
import { uuid } from 'uuidv4';

import styles from './styles.module.scss';

const CASES = Object.freeze({
  UPPER: 'UPPER',
  LOWER: 'LOWER',
  AS_IS: 'AS_IS',
});

class Form extends React.Component {
  // constructor() {
  //   super();

  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  state = {
    text: '',
    case: CASES.AS_IS,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.text) {
      return;
    }

    let text = this.state.text;

    if (this.state.case === CASES.UPPER) {
      text = text.toUpperCase();
    }
    if (this.state.case === CASES.LOWER) {
      text = text.toLowerCase();
    }

    this.props.onSubmit({
      id: uuid(),
      isChecked: false,
      text,
    });
    this.setState({ text: '' });
  };

  handleInputChange = (e) => this.setState({ text: e.target.value });

  handleRadioChange = (e) => {
    this.setState({
      case: e.target.value,
    });
  };

  render() {
    return (
      <form className={styles.inputForm} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          <span>Enter text</span>
          <input
            className={styles.input}
            name="text"
            type="text"
            value={this.state.text}
            onChange={this.handleInputChange}
          />
        </label>
        <div className="radios">
          <label>
            <span>As is</span>
            <input
              type="radio"
              value={CASES.AS_IS}
              checked={this.state.case === CASES.AS_IS}
              onChange={this.handleRadioChange}
            />
          </label>
          <label>
            <span>Upper case</span>
            <input
              type="radio"
              value={CASES.UPPER}
              checked={this.state.case === CASES.UPPER}
              onChange={this.handleRadioChange}
            />
          </label>
          <label>
            <span>Lower case</span>
            <input
              type="radio"
              value={CASES.LOWER}
              checked={this.state.case === CASES.LOWER}
              onChange={this.handleRadioChange}
            />
          </label>
        </div>

        <button className="button">+ Add</button>
      </form>
    );
  }
}

export default Form;
