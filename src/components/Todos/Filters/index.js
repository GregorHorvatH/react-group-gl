import React from 'react';

const FIlters = ({ value, onAsc, onDesc }) => {
  return (
    <div className="filters">
      <label>
        <span>asc</span>
        <input
          className="button"
          type="radio"
          value="asc"
          checked={value === 'asc'}
          onChange={onAsc}
        />
      </label>
      <label>
        <span>desc</span>
        <input
          className="button"
          type="radio"
          value="desc"
          checked={value === 'desc'}
          onChange={onDesc}
        />
      </label>
    </div>
  );
};

export default FIlters;
