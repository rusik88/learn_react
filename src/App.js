import './App.css';
import PetInfo from './Components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="Cat11" hasPet={ true } />
      <PetInfo animal="Cat11" hasPet={ false } />
    </div>
  );
}

export default App;
