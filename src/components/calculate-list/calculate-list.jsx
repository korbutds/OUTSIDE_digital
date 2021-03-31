import React from 'react';
import './calculate-list.css'
import {calculatePaymentArray} from '../../utils'
import CalculateItem from '../calculate-item/calculate-item';


const CalculateList = ({salary}) => {
  const payments = calculatePaymentArray(salary)
  return (
    <div className="calculate__zone">
      <p className="calculate__legend">Итого можете внести в качестве досрочных:</p>
      <ul className="calculate__list">
        {payments.map((payment, index) => <CalculateItem count={payment} year={index + 1} key={payment + index + Math.random()} />)}
      </ul>
    </div>
  )
}

export default CalculateList;
