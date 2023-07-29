import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


it.each`a b c d`('should find', (num) => {
  expect(num).toEqual('a');

})


