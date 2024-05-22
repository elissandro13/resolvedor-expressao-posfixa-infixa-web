import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import Display from './Display';
import './Calculator.css';
import { postFixEvaluation, inFixEvaluation } from '../utils/resolveExpressoes';
import { convertPostfixToInfix, convertInfixToPostFix} from '../utils/converteExpressoes';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState('infix');
  const displayRef = useRef(null);

  useEffect(() => {
    const display = displayRef.current;
    if (display) {
      if (display.scrollWidth > display.clientWidth) {
        display.scrollTo(display.scrollWidth, 0);
      }
    }
  }, [input]);  

  const handleClick = (value) => {
    if (value === '=') {
      try {
        if (mode === 'postfix') {
          setInput(postFixEvaluation(input).toString());
        } else if (mode === 'infix') {
          setInput(inFixEvaluation(input).toString());
        }
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else if (value === 'PostFix') {
        if (mode === 'infix') {
          try {
            setInput(convertInfixToPostFix(input));
            setMode('postfix');
          } catch (error) {
            setInput('Error');
          }
        } else {
          setMode('postfix');
        }
    } else if (value === 'InFix') {
      if (mode === 'postfix') {
        try {
          setInput(convertPostfixToInfix(input));
          setMode('infix');
        } catch (error) {
          setInput('Error');
        }
      } else {
        setMode('infix');
      }
    } else if (value === 'Espaço') {
      setInput(input + ' ');
    } else if (value === 'Backspace') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display value={input} ref={displayRef} />
      <div className="buttons">
        {['7', '8', '9', '/'].map((val) => (
          <Button key={val} value={val} onClick={handleClick} />
        ))}
        {['4', '5', '6', '*'].map((val) => (
          <Button key={val} value={val} onClick={handleClick} />
        ))}
        {['1', '2', '3', '-'].map((val) => (
          <Button key={val} value={val} onClick={handleClick} />
        ))}
        {['0', '.', '=', '+'].map((val) => (
          <Button key={val} value={val} onClick={handleClick} />
        ))}
        {['(', ')', 'C', 'Espaço'].map((val) => (
          <Button key={val} value={val} onClick={handleClick} />
        ))}
        <Button value="PostFix" onClick={handleClick} />
        <Button value="InFix" onClick={handleClick} />
        <Button value="Backspace" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
