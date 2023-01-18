import {combineReducers, configureStore} from "@reduxjs/toolkit";
//import toolkitReducer from "./toolkitReducer";
import toolkitSlice from "./toolkitSlice";

const rootReduser = combineReducers({
    toolkit: toolkitSlice
})

export const store = configureStore({
    reducer: rootReduser
})