import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('renderiza a calculadora corretamente', () => {
  const { getByText } = render(<Calculator />);
  expect(getByText(/0/i)).toBeInTheDocument();
});
