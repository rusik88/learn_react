import {createReducer, createAction} from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    todos: []
}

export const incrementAction = createAction('INCREMENT')
export const decrementAction = createAction('DECREMENT')

export default createReducer(initialState, {
    [incrementAction]: (state) => {
        state.count = state.count + 1
    },
    [decrementAction]: (state) => {
        state.count = state.count - 1
    },
})