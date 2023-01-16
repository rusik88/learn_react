import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";

const defaultState = {
    counter: 10
}

const reducer = (state = defaultState, payload) => {
    switch(payload.type) {
        case "SET_COUNTER":
            return {...state, counter: state.counter + 5}

        default:
            return state
    }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
