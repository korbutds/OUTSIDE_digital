import React from 'react';
import './calculate-list.css';
import PropTypes from 'prop-types';
import {calculatePaymentArray} from '../../utils';
import CalculateItem from '../calculate-item/calculate-item';


const CalculateList = ({salary, onChange, reduceYears}) => {
  const payments = calculatePaymentArray(salary);
  return (
    <div className="calculate__zone">
      <p className="calculate__legend">Итого можете внести в качестве досрочных:</p>
      <ul className="calculate__list">
        {payments.map((payment, index) => <CalculateItem count={payment} year={index + 1} key={payment + index + Math.random()} onChange={onChange} reduceYears={reduceYears}/>) }
      </ul>
    </div>
  );
};

CalculateList.propTypes = {
  salary: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  reduceYears: PropTypes.object.isRequired
};

export default CalculateList;
