import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import {incrementAction, decrementAction} from "./toolkitRedux/toolkitSlice";
import {appAsyncUsers} from "./toolkitRedux/asyncRequests";

function App() {
  const count = useSelector(state => state.toolkit.count)
  const dispatch = useDispatch()

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
        {console.log('count', count)}
        <button onClick={() => dispatch(incrementAction())}>Increment</button><br />
        <button onClick={() => dispatch(decrementAction())}>Decrement</button><br />
        <button onClick={() => dispatch(appAsyncUsers(dispatch))}>Get users</button>
    </div>
  );
}

export default App;
