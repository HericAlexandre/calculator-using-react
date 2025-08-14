import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
   e.preventDefault();
   setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = ""; // Clear the input field
    inputRef.current.focus(); // Set focus back to the input field
  }

  function resetResult() {
    setResult(0);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Calculadora React</h1>

        <form>
          <input
            pattern="[0-9]"
            ref={inputRef}
            type="number"
            placeholder="Vamos calcular!"
          />

          <p className={result <= -1 ? "result-negative" : "result-positive"} id="resultado-mostrado" ref={resultRef}>{result}</p>

          <button type="button" onClick={plus}>
            adicionar
          </button>
          <button type="button" onClick={minus}>
            subtrair
          </button>
          <button type="button" onClick={times}>
            multiplicar
          </button>
          <button type="button" onClick={divide}>
          dividir
          </button>
          <button type="button" onClick={resetInput}>
          deletar
          </button>
          <button type="button" onClick={resetResult}>
          resetar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
