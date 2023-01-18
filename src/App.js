import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import {incrementAction, decrementAction, setTokenAction} from "./toolkitRedux/toolkitSlice";
import {appAsyncUsers} from "./toolkitRedux/asyncRequests";
import {useState} from "react";
import {decrementOtherAction, incrementOtherAction, setTokenOtherAction} from "./toolkitRedux/otherSlice";

function App() {
  const stateAuth = useSelector(state => state.toolkit)
  const stateOther = useSelector(state => state.other)
  const dispatch = useDispatch()
  const [token] = useState('asgdhasgdjhasgsdjhasgdj2713jeqbwdyy3bh')

  /*const appAsyncUsers = () => {
      return async (dispatch) => {
          fetch('https://jsonplaceholder.typicode.com/todos/1')
              .then(response => response.json())
              .then(json => {
                  console.log(json);
                  dispatch(addTodoAction(json))
              })
      }
  }*/


  return (
    <div className="App">
        {console.log(stateAuth, stateOther)}
        <button onClick={() => dispatch(incrementAction())}>Increment</button><br />
        <button onClick={() => dispatch(decrementAction())}>Decrement</button><br />
        <button onClick={() => dispatch(appAsyncUsers(dispatch))}>Get users</button><br />
        <button onClick={() => dispatch(setTokenAction(token))}>Set Token Auth</button><br /><br /><br /><br /><br /><br /><br />
        <button onClick={() => dispatch(incrementOtherAction())}>Increment</button><br />
        <button onClick={() => dispatch(decrementOtherAction())}>Decrement</button><br />
        <button onClick={() => dispatch(setTokenOtherAction(token))}>Set Token</button>
    </div>
  );
}

export default App;
