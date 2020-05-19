import React from 'react';
import ReactDOM from 'react-dom';

import { render, getAllByTestId } from '@testing-library/react';

import App from './App';
import Header from './components/Header';
import Card from './components/About/Card';

test('Testing to see if tests works', () => {
  const { getByTestId } = render(<Card />);
  getByTestId(`followers`);
});

test('Testing the header for Software', () => {
  const { getByText } = render(<Header />);
  getByText(/Mexico/);
});
