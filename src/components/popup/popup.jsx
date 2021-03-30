import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import CurrencyInput from 'react-currency-input-field';
import Button from '../button/button';
import './popup.css';
import { Salary } from '../../const';

const Popup = ({onCloseClick}) => {
  const [reduce, setReduce] = useState(`payment`);
  const [salary, setSalary] = useState(``);
  const salaryInput = useRef()

  const handlePaymentCalculation = () => {
    if (salary < Salary.MIN || salary > Salary.MAX || salary === undefined) {
      salaryInput.current.classList.add(`calculate__salary-input--error`)
    }
  }

  const handleSalaryChange = (value) => {
    salaryInput.current.classList.remove(`calculate__salary-input--error`)
    setSalary(value);
    console.log(value)
  }
  const handleReduceChange = (evt) => {
    setReduce(evt.target.id);
  }
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (salary < Salary.MIN || salary > Salary.MAX || salary === undefined) {
      salaryInput.current.classList.add(`calculate__salary-input--error`)
    }
    console.log(`Submit form`);
  }
    return (
      <section className="calculate">
        <div className="calculate__inner">
          <h2 className="calculate__title">Налоговый вычет</h2>
          <button type="button" className="calculate__close-button" onClick={onCloseClick}>Закрыть рассчёт</button>
          <p className="calculate__description">Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p>
          <form action="#" className="calculate__form" onSubmit={handleFormSubmit}>
            <fieldset className="calculate__fieldset calculate__fieldset--salary">
              <legend className="visualy-hidden">Введите данные</legend>
              <div className="calculate__data">
                <label htmlFor="salary" className="calculate__label calculate__label--salary">Ваша зарплата в месяц</label>
                <CurrencyInput
                  id="salary"
                  name="salary"
                  placeholder="Введите данные"
                  onValueChange={(value, name) => handleSalaryChange(value, name)}
                  suffix={` ₽`}
                  maxLength={7}
                  step={1000}
                  className="calculate__salary-input"
                  required={true}
                  ref={salaryInput}
                  value={salary}
                />
                <small className="calculate__required">{salary === `` || salary === undefined ? `Поле обязательно для заполнения` : `Введите значение от ${Salary.MIN}₽ до ${Salary.MAX}`}</small>
                <button type="button" className="calculate__info js-calc" onClick={handlePaymentCalculation} disabled={false}>Рассчитать</button>
                <div className="calculate__place"></div>
              </div>
            </fieldset>
            <fieldset className="calculate__fieldset calculate__fieldset--set">
              <legend className="visualy-hidden">Настройка рассчета</legend>
              <div className="calculate__data calculate__data--payment">
                <p className="calculate__label calculate__label--payment">Что уменьшаем?</p>
                <div className="calculate__radio-wrapper">
                  <input className="visualy-hidden calulate__type-input" type="radio" name="type" id="payment" onChange={handleReduceChange} checked={reduce === `payment`} />
                  <label htmlFor="payment" className="calculate__type tag tag--payment" id="payment-label">Платёж</label>
                  <input className="visualy-hidden calulate__type-input" type="radio" name="type" onChange={handleReduceChange} id="term" checked={reduce === `term`}/>
                  <label htmlFor="term" className="calculate__type tag tag--term" id="term-label">Срок</label>
                </div>
            </div>
            </fieldset>
            <Button type={`submit`} name={`Добавить`} classes={`calculate__submit button--submit`} onClick={handleFormSubmit}/>
          </form>
        </div>
      </section>
    )
};

Popup.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
  active: PropTypes.bool
};

export default Popup;
