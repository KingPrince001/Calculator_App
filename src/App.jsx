
const App = () => {
  
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