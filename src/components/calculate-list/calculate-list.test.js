import React from 'react';
import { render, screen } from '@testing-library/react';
import CalculateList from './calculate-list';

it('Renders Calculate form correctly', () => {
  render(<CalculateList />);
  expect(screen.getByText('Итого можете внести в качестве досрочных:')).toBeInTheDocument();
});
