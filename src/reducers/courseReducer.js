import initState from './initState';

export default function courseReducer(state = initState.courses, action) {
    switch(action.type) {
        case 'LOAD_COURSES_SUCCESS':
            return action.courses;
        default:
            return state;
    }
}