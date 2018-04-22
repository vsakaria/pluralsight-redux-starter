//This is a combinder for multiple reducers
import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorsReducer';

const rootReducer = combineReducers({
    courses,
    authors
});

export default rootReducer;