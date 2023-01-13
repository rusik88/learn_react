import './App.css';
import Info from './components/Info'

function App() {
  return (
    <div className="App">
      <Info />
        <div className="info">
            <h1>Hello from the Info component</h1>
            <button className="myButton">Click me from App component</button>
        </div>
    </div>
  );
}

export default App;
