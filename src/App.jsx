import './App.css'

import React, { useReducer } from 'react';

const initialState = {
  expression: '',
  result: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_DIGIT':
      return {
        ...state,
        expression: state.expression + action.payload
      };
    case 'INPUT_OPERATOR':
      return {
        ...state,
        expression: state.expression + action.payload
      };
    case 'INPUT_DECIMAL':
      return {
        ...state,
        expression: state.expression + '.'
      };
    case 'CLEAR':
      return {
        ...state,
        expression: '',
        result: ''
      };
    case 'EVALUATE':
      try {
        const evaluatedResult = eval(state.expression);
        return {
          ...state,
          result: evaluatedResult.toString()
        };
      } catch (error) {
        return {
          ...state,
          result: 'Error'
        };
      }
    case 'SQUARE':
      return {
        ...state,
        expression: `Math.pow(${state.expression}, 2)`
      };
    case 'SQUARE_ROOT':
      return {
        ...state,
        expression: `Math.sqrt(${state.expression})`
      };
    case 'SIN':
      return {
        ...state,
        expression: Math.sin(state.expression)
      };
    case 'COS':
      return {
        ...state,
        expression: `Math.cos(${state.expression})`
      };
    case 'TAN':
      return {
        ...state,
        expression: `Math.tan(${state.expression})`
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDigitInput = (digit) => {
    dispatch({ type: 'INPUT_DIGIT', payload: digit });
  };

  const handleOperatorInput = (operator) => {
    dispatch({ type: 'INPUT_OPERATOR', payload: operator });
  };

  const handleDecimalInput = () => {
    dispatch({ type: 'INPUT_DECIMAL' });
  };

  const handleClearInput = () => {
    dispatch({ type: 'CLEAR' });
  };

  const handleEvaluateInput = () => {
    dispatch({ type: 'EVALUATE' });
  };

  const handleSquareInput = () => {
    dispatch({ type: 'SQUARE' });
  };

  const handleSquareRootInput = () => {
    dispatch({ type: 'SQUARE_ROOT' });
  };

  const handleSinInput = () => {
    dispatch({ type: 'SIN' });
  };

  const handleCosInput = () => {
    dispatch({ type: 'COS' });
  };

  const handleTanInput = () => {
    dispatch({ type: 'TAN' });
  };

  return (
    <>
    <div>
      <input type="text" value={state.expression} />
      <input type="text" value={state.result} readOnly />
    </div>

    <div style={{marginTop: "2rem"}}>
      <button onClick={() => handleDigitInput('1')}>1</button>
      <button onClick={() => handleDigitInput('2')}>2</button>
      <button onClick={() => handleDigitInput('3')}>3</button>
      <button onClick={() => handleDigitInput('4')}>4</button>
      <button onClick={() => handleDigitInput('5')}>5</button>
    </div>

    <div>
      <button onClick={() => handleDigitInput('6')}>6</button>
      <button onClick={() => handleDigitInput('7')}>7</button>
      <button onClick={() => handleDigitInput('8')}>8</button>
      <button onClick={() => handleDigitInput('9')}>9</button>
      <button onClick={() => handleDigitInput('0')}>0</button>
    </div>

    <div>
       <button onClick={() => handleOperatorInput('+')}>+</button>
      <button onClick={() => handleOperatorInput('-')}>-</button>
      <button onClick={handleDecimalInput}>.</button>
      <button onClick={handleEvaluateInput}>=</button>
      <button onClick={handleClearInput}>AC</button>
    </div>
  
    <div> 
      <button onClick={handleSquareInput}>^2</button>
      <button onClick={handleSquareRootInput}>√</button>
      <button onClick={handleSinInput}>sin</button>
      <button onClick={handleCosInput}>cos</button>
      <button onClick={handleTanInput}>tan</button>
    </div>
    </>
    
  );
};

export default App;