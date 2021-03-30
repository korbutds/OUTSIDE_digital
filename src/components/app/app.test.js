import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('Renders welcome button', () => {
  render(<App />);
  expect(screen.getByText('Налоговый вычет')).toBeInTheDocument();
});
