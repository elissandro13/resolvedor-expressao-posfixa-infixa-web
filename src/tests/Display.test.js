import React from 'react';
import { render } from '@testing-library/react';
import Display from '../components/Display';

test('renderiza o visor corretamente', () => {
  const { getByText } = render(<Display value="123" />);
  expect(getByText(/123/i)).toBeInTheDocument();
});
