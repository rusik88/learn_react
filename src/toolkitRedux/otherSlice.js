import {createSlice} from "@reduxjs/toolkit";


const otherSlice = createSlice({
    name: "other",
    initialState: {
        count: 1,
        token: '',
    },
    reducers: {
        incrementOtherAction(state) {
            state.count = state.count + 1
        },
        decrementOtherAction(state) {
            state.count = state.count - 1
        },
        setTokenOtherAction(state, action) {
            state.token_other = action.payload
        }
    }
})

export default otherSlice.reducer
export const {incrementOtherAction, decrementOtherAction, setTokenOtherAction} = otherSlice.actions