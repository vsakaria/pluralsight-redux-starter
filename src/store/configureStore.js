import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';
//redux-immutable-state-invariant is an error handler for redux in dev.

export default function confirgureStore(initState) {
    return createStore(
        rootReducer,
        initState,
        applyMiddleware(immutableStateInvariantMiddleware())
    );
}