import {combineReducers, configureStore} from "@reduxjs/toolkit";
import toolkitReducer from "./toolkitReducer";


const rootReduser = combineReducers({
    toolkit: toolkitReducer
})

export const store = configureStore({
    reducer: rootReduser
})