import React from 'react';
import './button.css';
import PropTypes from 'prop-types';


const Button = ({name, onClick, type = `button`, classes = ``, disabled = false}) => {
  return (
    <button type={type} className={`button ${classes}`} disabled={disabled} onClick={onClick}>{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string
};

export default Button;
