import React from 'react';
import PropTypes from 'prop-types';
import './popup.css';
import CalculateForm from '../calculate-form/calculate-form';

const Popup = ({onCloseClick}) => {

  return (
    <section className="calculate">
      <div className="calculate__inner">
        <h2 className="calculate__title">Налоговый вычет</h2>
        <button type="button" className="calculate__close-button" onClick={onCloseClick}>Закрыть рассчёт</button>
        <p className="calculate__description">Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p>
        <CalculateForm onSubmit={onCloseClick}/>
      </div>
    </section>
  );
};

Popup.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
};

export default Popup;
