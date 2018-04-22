import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

//redux-immutable-state-invariant is an error handler for redux in dev.
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';

export default function confirgureStore(initState) {
    return createStore(
        rootReducer,
        initState,
        applyMiddleware(thunk, immutableStateInvariantMiddleware())
    );
}