import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

test('renderiza o botão corretamente', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button value="1" onClick={handleClick} />);
  const button = getByText(/1/i);
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
