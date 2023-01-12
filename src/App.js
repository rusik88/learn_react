import './App.css';
import persons from './data/persons'
import Persons from './components/Persons'

function App() {
  return (
    <div className="App">
      <Persons persons={persons} />
    </div>
  );
}

export default App;
