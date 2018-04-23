import initState from './initState';

export default function courseReducer(state = initState.courses, action) {
    switch(action.type) {
        case 'LOAD_COURSES_SUCCESS':
            return action.courses;
        case 'SAVE_COURSE_SUCCESS':
            return [...state, Object.assign({}, action.course)];
        case 'UPDATE_COURSE_SUCCESS': {
            let foo = [...state.filter(course => course.id !== action.savedCourse.id),
                Object.assign({}, action.savedCourse)];
            return foo;
        }
        default:
            return state;
    }
}