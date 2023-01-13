import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [placeState, setPlaceState] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
          setPlaceState(json)
        })
  },[])
  console.log(placeState)

  return (
    <div className="App">
      {
        placeState
          ? (<h1>{placeState.title}</h1>)
          : (<div>Loading...</div>)
      }
    </div>
  );
}

export default App;
