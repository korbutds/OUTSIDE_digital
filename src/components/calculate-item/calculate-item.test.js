import React from 'react';
import { render, screen } from '@testing-library/react';
import CalculateItem from './calculate-item';

it('Renders Calculate form correctly', () => {
  const mockProps = {
    count: 10000,
    year: 1,
    onChange: jest.fn(),
    reduceYears: []
  }
  render(<CalculateItem  count={mockProps.count} year={mockProps.year} onChange={mockProps.onChange} reduceYears={mockProps.reduceYears}/>);
  expect(screen.getByText(`${mockProps.count} рублей`)).toBeInTheDocument();
});
