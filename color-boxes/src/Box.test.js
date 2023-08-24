import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

test('renders without crash', () => {
  render(<Box />);
});

test('matches snapshot',() => {
  const {asFragment} = render(<Box/>)
  expect(asFragment).toMatchSnapshot();
});
