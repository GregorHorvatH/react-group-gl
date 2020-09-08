import React from 'react';
import './styles.scss';

const Filter = ({ value, onChange }) => (
  <div className="filter">
    <label className="filter-label">
      <span>Filter</span>
      <input
        className="filter-input"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

export default Filter;
