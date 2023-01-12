import './App.css';
import { useState } from "react";
import Button from "./Components/Button";
import Counter from "./Components/Counter";

function App() {
  const [counterState, setCounterState] = useState(10)

  const incrementCount = () => {
    setCounterState(counterState + 1)
  }

  const resetCounter = () => {
      setCounterState(0)
  }

  return (
    <div className="App">
      <Counter count={counterState} />
      <Button funcCount={ incrementCount } />
      <Button funcCount={ incrementCount } />
      <Button funcCount={ incrementCount } />
      <Button funcCount={ incrementCount } />
        {counterState > 0 && (
            <div><button onClick={resetCounter}>Reset</button></div>
        )}
    </div>
  );
}

export default App;
