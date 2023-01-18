import {combineReducers, configureStore} from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";
import otherSlice from "./otherSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReduser = combineReducers({
    toolkit: toolkitSlice,
    other: otherSlice
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, rootReduser)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)
