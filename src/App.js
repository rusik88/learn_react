import './App.css';
<<<<<<< HEAD
import {useEffect, useState} from "react";
=======
import Posts from "./components/Posts";
>>>>>>> master

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
<<<<<<< HEAD
      {
        placeState
          ? (<h1>{placeState.title}</h1>)
          : (<div>Loading...</div>)
      }
=======
      <Posts />
>>>>>>> master
    </div>
  );
}

export default App;
