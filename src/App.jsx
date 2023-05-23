import { useReducer } from "react";


function App() {
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
    
  </div>
)
}

export default App
