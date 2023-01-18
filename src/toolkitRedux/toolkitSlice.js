import {createSlice} from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        count: 0,
        token: '',
        todos: [],
        users: []
    },
    reducers: {
        incrementAction(state) {
            state.count = state.count + 1
        },
        decrementAction(state) {
            state.count = state.count - 1
        },
        addTodoAction(state, action) {
            console.log('Test tes1111111')
            state.users.push(action.payload)
        },
        setTokenAction(state, action) {
            state.token = action.payload
        }
    }
})

export default toolkitSlice.reducer
export const {incrementAction, decrementAction, addTodoAction, setTokenAction} = toolkitSlice.actions