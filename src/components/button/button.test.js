import React from 'react';
import {render, screen} from '@testing-library/react';
import Button from './button';

it(`Renders Button component correctly`, () => {
  render(<Button name={`Some text`} onClick={jest.fn()}/>);
  expect(screen.getByText(`Some text`)).toBeInTheDocument();
});
