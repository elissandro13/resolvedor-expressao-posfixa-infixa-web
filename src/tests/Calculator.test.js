import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

const clickButtons = (text, getByText) => {
  for (let i = 0; i < text.length; i++) {
    var button = getByText((text[i] === ' ' ? 'Espaço' : text[i]));
    if (button) {
      fireEvent.click(button);
    } else {
      console.warn(`Button with label '${text[i]}' not found.`);
    }
  }
};

const clickButton = (text, getByText) => {
  var button = getByText(text);
  if (button) {
    fireEvent.click(button);
  } else {
    console.warn(`Button with label '${text}' not found.`);
  }
}


test('has numeric buttons from 0 to 9', () => {
  const { getByText } = render(<Calculator />);

  for (let i = 0; i <= 9; i++) {
    expect(getByText(i.toString())).toBeInTheDocument();
  }
});

test('renders calculator component', () => {
  const { getByText } = render(<Calculator />);
  expect(getByText('/')).toBeInTheDocument();
  expect(getByText('+')).toBeInTheDocument();
  expect(getByText('*')).toBeInTheDocument();
  expect(getByText('-')).toBeInTheDocument();
  expect(getByText('=')).toBeInTheDocument();
  expect(getByText('C')).toBeInTheDocument();
  expect(getByText('Espaço')).toBeInTheDocument();
  expect(getByText('Backspace')).toBeInTheDocument();
  expect(getByText('PostFix')).toBeInTheDocument();
  expect(getByText('InFix')).toBeInTheDocument();
  expect(getByText('(')).toBeInTheDocument();
  expect(getByText(')')).toBeInTheDocument();
  expect(getByText('.')).toBeInTheDocument();
});

test('button click updates display', () => {
  const { getByTestId,getByText } = render(<Calculator />);
  const display = getByTestId('display');
  clickButtons('123',getByText)
  expect(display).toHaveTextContent('123');
});

test('evaluate InFix expression', () => {
  const { getByTestId,getByText } = render(<Calculator />);
  const display = getByTestId('display');
  clickButtons('1+2*3',getByText);
  clickButton('=',getByText);
  expect(display).toHaveTextContent('7');
});

test('evaluate PostFix expression', () => {
  const { getByTestId,getByText } = render(<Calculator />);
  const display = getByTestId('display');
  clickButton('PostFix',getByText);
  clickButtons('1 2 3 * +',getByText);
  clickButton('=',getByText);
  expect(display).toHaveTextContent('7');
});

test('convert infix expression to postfix', () => {
  const { getByTestId,getByText } = render(<Calculator />);
  const display = getByTestId('display');
  clickButtons('1+2*3',getByText);
  clickButton('PostFix',getByText);
  expect(display).toHaveTextContent('1 2 3 * +');
});

test('convert postfix expression to infix', () => {
  const { getByTestId,getByText } = render(<Calculator />);
  const display = getByTestId('display');
  clickButton('PostFix',getByText);
  clickButtons('1 2 3 * +',getByText);
  clickButton('InFix',getByText);
  expect(display).toHaveTextContent('( 1 + ( 2 * 3 ) )');
});

test('checking error evaluating wrong postfix expression', () => {
  const { getByTestId,getByText } = render(<Calculator />);
  const display = getByTestId('display');
  clickButton('PostFix',getByText);
  clickButtons('2+2',getByText);
  clickButton('=',getByText);
  expect(display).toHaveTextContent('Error');
});

test('checking that backspace removes last character', () => {
  const { getByTestId,getByText } = render(<Calculator />);
  const display = getByTestId('display');
  clickButtons('12345',getByText);
  clickButton('Backspace',getByText);
  expect(display).toHaveTextContent('1234');
});

test('checking that C removes all characters', () => {
  const { getByTestId,getByText } = render(<Calculator />);
  const display = getByTestId('display');
  clickButtons('12345',getByText);
  clickButton('C',getByText);
  expect(display).toHaveTextContent('');
});