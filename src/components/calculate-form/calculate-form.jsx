import React, {useRef, useState} from 'react';
import CurrencyInput from 'react-currency-input-field';
import {SalaryRange} from '../../const';
import Button from '../button/button';
import PropTypes from 'prop-types';
import CalculateList from '../calculate-list/calculate-list';
import './calculate-form.css';

const CalculateForm = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    reduceType: `payment`,
    salary: ``,
    acceptedSalary: ``,
    isCalculate: false,
    reduceYears: []
  });

  const salaryInput = useRef();
  const formRef = useRef();

  const handlePaymentCalculation = () => {
    if (formData.salary < SalaryRange.MIN || formData.salary > SalaryRange.MAX || formData.salary === undefined) {
      salaryInput.current.classList.add(`calculate__salary-input--error`);
      setFormData((prevValue) => ({
        ...prevValue,
        isCalculate: false
      }));
    } else {
      setFormData((prevValue) => ({
        ...prevValue,
        isCalculate: true,
        acceptedSalary: prevValue.salary
      }));
    }
  };

  const handleSalaryChange = (value) => {
    salaryInput.current.classList.remove(`calculate__salary-input--error`);
    setFormData((prevValue) => ({
      ...prevValue,
      salary: value
    }));
  };

  const handleReduceChange = (evt) => {
    setFormData((prevValue) => ({
      ...prevValue,
      reduceType: evt.target.id
    }));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setFormData((prevValue) => ({
      ...prevValue,
      reduceType: `payment`,
      salary: ``,
      acceptedSalary: ``,
      isCalculate: false,
      reduceYears: []
    }));
    onSubmit();
  };

  const handleReduceYearsChange = (evt) => {
    setFormData((prevValue) => {
      const value = evt.target.value;
      if (!prevValue.reduceYears.includes(value)) {
        return {
          ...prevValue,
          reduceYears: [...prevValue.reduceYears, value]
        };
      } else {
        return {
          ...prevValue,
          reduceYears: prevValue.reduceYears.filter((year) => year !== value)
        };
      }
    });
  };

  return (
    <form action="#" className="calculate__form" onSubmit={handleFormSubmit} ref={formRef}>
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
            allowNegativeValue={false}
            max={9999999}
            min={0}
            required={true}
            ref={salaryInput}
            value={formData.salary}
            allowDecimals={false}
          />
          <small className="calculate__required">{formData.salary === `` || formData.salary === undefined ? `Поле обязательно для заполнения` : `Введите значение от ${SalaryRange.MIN}₽ до ${SalaryRange.MAX}₽`}</small>
          <button type="button" className="calculate__info js-calc" onClick={handlePaymentCalculation} disabled={false}>Рассчитать</button>
          <div className="calculate__place">
            {formData.isCalculate ? <CalculateList onChange={handleReduceYearsChange} salary={formData.acceptedSalary} reduceYears={formData.reduceYears}/> : `` }
          </div>
        </div>
      </fieldset>
      <fieldset className="calculate__fieldset calculate__fieldset--set">
        <legend className="visualy-hidden">Настройка рассчета</legend>
        <div className="calculate__data calculate__data--payment">
          <p className="calculate__label calculate__label--payment">Что уменьшаем?</p>
          <div className="calculate__radio-wrapper">
            <input className="visualy-hidden calulate__type-input" type="radio" name="decrease-type" id="payment" onChange={handleReduceChange} checked={formData.reduceType === `payment`} />
            <label htmlFor="payment" className="calculate__type tag tag--payment" id="payment-label">Платёж</label>
            <input className="visualy-hidden calulate__type-input" type="radio" name="decrease-type" onChange={handleReduceChange} id="term" checked={formData.reduceType === `term`}/>
            <label htmlFor="term" className="calculate__type tag tag--term" id="term-label">Срок</label>
          </div>
        </div>
      </fieldset>
      <Button type={`submit`} name={`Добавить`} classes={`calculate__submit button--submit`} disabled={!formData.isCalculate} onClick={handleFormSubmit}/>
    </form>
  );
};

CalculateForm.propTypes = {
  onSubmit: PropTypes.func
};

export default CalculateForm;
