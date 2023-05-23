
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
    case 'ln':
      const evaluatedLn = Math.log(eval(state.expression));
      return {
        ...state,
        expression: `ln(${state.expression})`,
        result: evaluatedLn.toString()
      };
      case 'ln10':
      const evaluatedLn10 = Math.log10(eval(state.expression));
      return {
        ...state,
        expression: `Log10(${state.expression})`,
        result: evaluatedLn10.toString()
      };
      case 'e':
      const evaluatedE = Math.E(eval(state.expression));
      return {
        ...state,
        expression: `e(${state.expression})`,
        result: evaluatedE.toString()
      };
      case 'ln2':
      const evaluatedLn2 = Math.log2(eval(state.expression));
      return {
        ...state,
        expression: `log2(${state.expression})`,
        result: evaluatedLn2.toString()
      };
      case 'SINH':
      const evaluatedSinh = Math.sinh(eval(state.expression));
      return {
        ...state,
        expression: `sinh(${state.expression})`,
        result: evaluatedSinh.toString()
      };
      case 'COSH':
      const evaluatedCosh = Math.cosh(eval(state.expression));
      return {
        ...state,
        expression: `cosh(${state.expression})`,
        result: evaluatedCosh.toString()
      };
      case 'TANH':
      const evaluatedTanh = Math.tanh(eval(state.expression));
      return {
        ...state,
        expression: `tanh(${state.expression})`,
        result: evaluatedTanh.toString()
      };
      case 'PI':
      const evaluatedPi = Math.PI(eval(state.expression));
      return {
        ...state,
        expression: `pi(${state.expression})`,
        result: evaluatedPi.toString()
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
    document.body.style.background = 'rgb(2,0,36)';
    document.body.style.background = 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(172,127,149,1) 35%, rgba(0,212,255,1) 100%)';
    document.body.style.animation = 'backgroundAnimation 30s linear infinite alternate';
  };
  
  // Define the keyframe animation
  const styleSheet = document.createElement('style');
  styleSheet.innerHTML = `
  @keyframes backgroundAnimation {
    0% {
      background: rgb(2,0,36);
    }
    25% {
      background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(172,127,149,1) 35%, rgba(0,212,255,1) 100%);
    }
    50% {
      background: rgb(2,0,36);
    }
    100% {
      background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(172,127,149,1) 35%, rgba(0,212,255,1) 100%);
    }
  }
  `;
  document.head.appendChild(styleSheet);
  
  

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

  const handleNaturalLog = () => {
    dispatch({ type: 'ln' });
  };
  const handleLogBase10 = () => {
    dispatch({ type: 'ln10' });
  };
  const handleExponential = () => {
    dispatch({ type: 'e' });
  };
  const handleLogBase2 = () => {
    dispatch({ type: 'ln2' });
  };
  const handleSinh = () => {
    dispatch({ type: 'SINH' });
  };
  const handleCosh = () => {
    dispatch({ type: 'COSH' });
  };
  const handleTanh = () => {
    dispatch({ type: 'TANH' });
  };
  const handlePI = () => {
    dispatch({ type: 'PI' });
  };

    return (
      <div className="container">
      <div className="input-container">
        <input type="text" value={state.expression} className="input-field" />
        <input type="text" value={state.result} readOnly className="result-field" />
      </div>

      <div className="button-container">
        <button onClick={() => handleDigitInput('1')} className="button">1</button>
        <button onClick={() => handleDigitInput('2')} className="button">2</button>
        <button onClick={() => handleDigitInput('3')} className="button">3</button>
        <button onClick={() => handleDigitInput('4')} className="button">4</button>
        <button onClick={() => handleDigitInput('5')} className="button">5</button>
      </div>

      <div className="button-container">
        <button onClick={() => handleDigitInput('6')} className="button">6</button>
        <button onClick={() => handleDigitInput('7')} className="button">7</button>
        <button onClick={() => handleDigitInput('8')} className="button">8</button>
        <button onClick={() => handleDigitInput('9')} className="button">9</button>
        <button onClick={() => handleDigitInput('0')} className="button">0</button>
      </div>

      <div className="button-container">
        <button onClick={() => handleOperatorInput('+')} className="button math-button">+</button>
        <button onClick={() => handleOperatorInput('-')} className="button math-button">-</button>
        <button onClick={() => handleOperatorInput('*')} className="button math-button">x</button>
        <button onClick={() => handleOperatorInput('/')} className="button math-button">/</button>
        <button onClick={handleDecimalInput} className="button math-button">.</button>
      </div>

      <div className="button-container">
        <button onClick={handleEvaluateInput} className="button evaluate-button">=</button>
        <button onClick={handleClearInput} className="button clear-button">AC</button>
        <button onClick={handleSquareInput} className="button function-button">^2</button>
        <button onClick={handleSquareRootInput} className="button function-button">√</button>
        <button onClick={handleSinInput} className="button function-button">sin</button>
      </div>

      <div className="button-container">
        <button onClick={handleCosInput} className="button function-button">cos</button>
        <button onClick={handleTanInput} className="button function-button">tan</button>
        <button onClick={handleNaturalLog} className="button function-button">ln</button>
        <button onClick={handleLogBase10} className="button function-button">log10</button>
        <button onClick={handleExponential} className="button function-button">e</button>
      </div>

      <div className="button-container">
        <button onClick={handleLogBase2} className="button function-button">log2</button>
        <button onClick={handleSinh} className="button function-button">sinh</button>
        <button onClick={handleCosh} className="button function-button">cosh</button>
        <button onClick={handleTanh} className="button function-button">tanh</button>
        <button onClick={handlePI} className="button function-button">PI</button>
      </div>
    </div>
    );
    }
    
export default App;    

