import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import {incrementAction, decrementAction} from "./toolkitRedux/toolkitReducer";

function App() {
  const count = useSelector(state => state.toolkit.count)
  const dispatch = useDispatch()


  return (
    <div className="App">
        {console.log('count', count)}
        <button onClick={() => dispatch(incrementAction())}>Increment</button><br />
        <button onClick={() => dispatch(decrementAction())}>Decrement</button>

    </div>
  );
}

export default App;
