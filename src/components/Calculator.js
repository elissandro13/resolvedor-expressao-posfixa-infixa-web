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

    var currentInput = input === 'Error' ? '' : input

    if (value === '=') {
      try {
        if (mode === 'postfix') {
          setInput(postFixEvaluation(currentInput).toString());
        } else if (mode === 'infix') {
          setInput(inFixEvaluation(currentInput).toString());
        }
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else if (value === 'PostFix') {
        if (mode === 'infix') {
          setMode('postfix');
          try {
            setInput(convertInfixToPostFix(currentInput));
          } catch (error) {
            setInput('Error');
          }
        } else {
          setMode('postfix');
        }
    } else if (value === 'InFix') {
      if (mode === 'postfix') {
        setMode('infix');
        try {
          setInput(convertPostfixToInfix(currentInput));
        } catch (error) {
          setInput('Error');
        }
      } else {
        setMode('infix');
      }
    } else if (value === 'Espaço') {
      setInput(currentInput + ' ');
    } else if (value === 'Backspace') {
      setInput(currentInput.slice(0, -1));
    } else {
      setInput(currentInput + value);
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
        <Button value="PostFix" onClick={handleClick} 
          className={mode === 'postfix' ? 'active' : ''}/>
        <Button value="InFix" onClick={handleClick} 
          className={mode === 'infix' ? 'active' : ''} />
        <Button value="Backspace" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
