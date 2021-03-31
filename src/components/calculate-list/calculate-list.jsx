import React from 'react';
import './calculate-list.css'

const CalculateList = ({salary}) => {
  return (
    <div className="calculate__zone">
      <p className="calculate__legend">Итого можете внести в качестве досрочных:</p>
      <ul className="calculate__list"></ul>
    </div>
  )
}

export default CalculateList;
