import React from 'react';
import {render, screen} from '@testing-library/react';
import Popup from './popup';

it(`Renders Calculate form correctly`, () => {
  render(<Popup onCloseClick={jest.fn()}/>);
  expect(screen.getByText(`Налоговый вычет`)).toBeInTheDocument();
});
