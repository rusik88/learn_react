import './App.css';
import { useState } from "react";
import Button from "./Components/Button";
import Counter from "./Components/Counter";

function App() {
  const [counterState, setCounterState] = useState(10)

  const incrementCount = () => {
    setCounterState(counterState + 1)
  }

  const texts = ["Click Me 1", "Click Me 2", "Click Me 10", "Click Me 4"]

  return (
    <div className="App">
      <Counter count={counterState} />
        {texts.map(text => {
            return (
                <div>
                    <Button funcCount={ incrementCount } text={text} />
                </div>
            )
        })}
    </div>
  );
}

export default App;
