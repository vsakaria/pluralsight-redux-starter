import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

//redux-immutable-state-invariant is an error handler for redux in dev.
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';

export default function confirgureStore(initState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        rootReducer,
        initState,
        composeEnhancers(
            applyMiddleware(thunk, immutableStateInvariantMiddleware())
        )
    );
}