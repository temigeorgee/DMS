import React from 'react';

import './Input.css';

const Input = ({ type, placeholder, style, onChange }) => {
  return (
    <div className="form-group">
      <input
        className="form-control"
        type={type}
        style={style}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
