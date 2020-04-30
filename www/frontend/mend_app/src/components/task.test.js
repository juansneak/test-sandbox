import React from 'react';
import { render } from '@testing-library/react';
import Task from './task';

test('renders the task', () => {
  const { getByText } = render(<Task title="New Task" description="Description goes here"/>);
  const linkElement = getByText(/New Task/i);
  expect(linkElement).toBeInTheDocument();
});