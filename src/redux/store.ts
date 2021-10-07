import { createStore, combineReducers } from 'redux';
import msgReducer from './reducers/msg.reducer'

export const store = createStore(combineReducers({
    data: msgReducer
}))

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch