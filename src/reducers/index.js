//This is a combinder for multiple reducers
import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorsReducer';
import ajaxCalls from './ajaxReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCalls
});

export default rootReducer;