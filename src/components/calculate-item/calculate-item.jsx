import React from 'react';
import './calculate-item.css';

const CalculateItem = ({count, index}) => {
  return (
    <li className="calculate__item">
      <input className="visually-hidden calculate__checkbox" type="checkbox" name="accept__payment" id="payment" checked />
      <label className="calculate__payment" htmlFor="accept__payment">
        <span className="calculate__label-description">{count}</span>
        <span className="calculate__exp">{index}</span>
      </label>
    </li>
  )
};

export default CalculateItem;
