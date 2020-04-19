import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders DustinGuillen.dev', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/DustinGuillen.dev/i);
  expect(linkElement).toBeInTheDocument();
});
