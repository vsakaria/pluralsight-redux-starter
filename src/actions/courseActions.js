import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess (courses) {
    return { type: 'LOAD_COURSES_SUCCESS', courses };
}

export function loadCourses () {
    return function (dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(err => {
            throw(err);
        });
    };
}

/*
Make a aysnc call
Using a promise
Dispatch an action once NavigationCompletedEvent.
*/