import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the app correctly', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Task List/i);
  expect(titleElement).toBeInTheDocument();
});
