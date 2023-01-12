import './App.css';
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper color={"lightblue"}>
        <h2>Inside App Wrapper</h2>
          <button>Click me</button>
      </Wrapper>
        <Wrapper  color={"lightgreen"}>
            <h2>Inside App Wrapper 222</h2>
            <button>Click me 222</button>
        </Wrapper>
    </div>
  );
}

export default App;
