import React from 'react';
import PropTypes from 'prop-types';
import {calculateExp} from '../../utils';
import './calculate-item.css';

const CalculateItem = ({count, year, onChange, reduceYears}) => {
  const value = `${year} year`;
  return (
    <li className="calculate__item">
      <input className="visually-hidden calculate__checkbox" type="checkbox" name="accept__payment" id={`payment-${year}`} onChange={onChange} value={value} checked={reduceYears.includes(value)}/>
      <label className="calculate__payment" htmlFor={`payment-${year}`}>
        <span className="calculate__label-description">{count} рублей </span>
        <span className="calculate__exp">{calculateExp(year)}</span>
      </label>
    </li>
  );
};

CalculateItem.propTypes = {
  count: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  reduceYears: PropTypes.object.isRequired
};

export default CalculateItem;
