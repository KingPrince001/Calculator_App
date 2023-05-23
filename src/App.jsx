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
        expression: `Math.pow(${state.expression}, 2)`,
      };
    case 'SQUARE_ROOT':
      const evaluatedSqrt = Math.sqrt(eval(state.expression));
      return {
        ...state,
        expression: `sqrt(${state.expression})`,
        result: evaluatedSqrt.toString()
      };
    case 'SIN':
      const evaluatedSin = Math.sin(eval(state.expression));
      return {
        ...state,
        expression: `sin(${state.expression})`,
        result: evaluatedSin.toString()
      };
    case 'COS':
      const evaluatedCos = Math.cos(eval(state.expression));
      return {
        ...state,
        expression: `cos(${state.expression})`,
        result: evaluatedCos.toString()
      };
    case 'TAN':
      const evaluatedTan = Math.tan(eval(state.expression));
      return {
        ...state,
        expression: `tan(${state.expression})`,
        result: evaluatedTan.toString()
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
    <div>
      <input type="text" value={state.expression} readOnly />
      <input type="text" value={state.result} readOnly />

      <button onClick={() => handleDigitInput('1')}>1</button>
      <button onClick={() => handleDigitInput('2')}>2</button>
      {/* ... more digit buttons ... */}

      <button onClick={() => handleOperatorInput('+')}>+</button>
      <button onClick={() => handleOperatorInput('-')}>-</button>
      {/* ... more operator buttons ... */}

      <button onClick={handleDecimalInput}>.</button>
      <button onClick={handleClearInput}>Clear</button>
      <button onClick={handleEvaluateInput}>=</button>

      <button onClick={handleSquareInput}>Square</button>
      <button onClick={handleSquareRootInput}>√</button>
      <button onClick={handleSinInput}>sin</button>
      <button onClick={handleCosInput}>cos</button>
      <button onClick={handleTanInput}>tan</button>
    </div>
  );
};

export default App;
