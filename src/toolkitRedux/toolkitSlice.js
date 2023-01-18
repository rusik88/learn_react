import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        count: 0,
        todos: [],
        users: []
    },
    reducers: {
        incrementAction(state) {
            console.log('Test')
            state.count = state.count + 1
        },
        decrementAction(state) {
            state.count = state.count - 1
        },
        addTodoAction(state, action) {
            console.log('Test tes1111111')
            state.users.push(action.payload)
        }
    }
})

export default toolkitSlice.reducer
export const {incrementAction, decrementAction, addTodoAction} = toolkitSlice.actions