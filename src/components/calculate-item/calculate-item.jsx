import React from 'react';
import { calculateExp } from '../../utils';
import './calculate-item.css';

const CalculateItem = ({count, year}) => {

  return (
    <li className="calculate__item">
      <input className="visually-hidden calculate__checkbox" type="checkbox" name="accept__payment" id={`payment-${year}`} onChange={() => {}} value={`${year} year`} />
      <label className="calculate__payment" htmlFor={`payment-${year}`}>
        <span className="calculate__label-description">{count} рублей </span>
        <span className="calculate__exp">{calculateExp(year)}</span>
      </label>
    </li>
  )
};

export default CalculateItem;
