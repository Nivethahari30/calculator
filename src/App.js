import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  // Append value to the input
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Clear the input
  const handleClear = () => {
    setInput('');
  };

  // Calculate the result using eval() function (warning: eval() should be avoided in real apps)
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className='text-center'style={{color:"skyblue"}}>
      <h1>CALCULATOR</h1>
    <div className="calculator">
      
      <div className="display">
        <input type="text" value={input} disabled />
      </div>
      <div className="buttons">
        <button className="btn clear" onClick={handleClear}>C</button>
        <button className="btn operator" onClick={() => handleClick('/')}>/</button>
        <button className="btn operator" onClick={() => handleClick('*')}>*</button>
        <button className="btn operator" onClick={() => handleClick('-')}>-</button>

        <button className="btn" onClick={() => handleClick('7')}>7</button>
        <button className="btn" onClick={() => handleClick('8')}>8</button>
        <button className="btn" onClick={() => handleClick('9')}>9</button>
        <button className="btn operator" onClick={() => handleClick('+')}>+</button>

        <button className="btn" onClick={() => handleClick('4')}>4</button>
        <button className="btn" onClick={() => handleClick('5')}>5</button>
        <button className="btn" onClick={() => handleClick('6')}>6</button>
        <button className="btn" onClick={() => handleClick('0')}>0</button>

        <button className="btn" onClick={() => handleClick('1')}>1</button>
        <button className="btn" onClick={() => handleClick('2')}>2</button>
        <button className="btn" onClick={() => handleClick('3')}>3</button>
        <button className="btn" onClick={() => handleClick('.')}>.</button>

        <button className="btn equal" onClick={handleCalculate}>=</button>
      </div>
    </div></div>
  );
};

export default Calculator;
