import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {Ticket1Reducer} from "./reducers";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel1,
}

const rootReducer = combineReducers({
    ticket1: Ticket1Reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

export const persistor = persistStore(store)
