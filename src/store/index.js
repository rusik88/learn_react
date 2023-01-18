import {createStore, combineReducers, applyMiddleware} from "redux";
import {reducerFirst} from "./reducerFirst";
import {reducerSecond} from "./reducerSecond";
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    first: reducerFirst,
    second: reducerSecond
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store