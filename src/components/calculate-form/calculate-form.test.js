import React from 'react';
import {render, screen} from '@testing-library/react';
import CalculateForm from './calculate-form';

it(`Renders Calculate form correctly`, () => {
  render(<CalculateForm />);
  expect(screen.getByText(`Введите данные`)).toBeInTheDocument();
});
