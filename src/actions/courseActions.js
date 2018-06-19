import courseApi from "../api/mockCourseApi";
import { ajaxCalled, ajaxFalied } from "./ajaxActions";

export function loadCoursesSuccess(courses) {
  return { type: "LOAD_COURSES_SUCCESS", courses };
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(ajaxCalled());
    return courseApi
      .getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(err => {
        throw err;
      });
  };
}

export function saveCourseSuccess(savedCourse) {
  return { type: "SAVE_COURSE_SUCCESS", savedCourse };
}

export function updateCourseSuccess(savedCourse) {
  return { type: "UPDATE_COURSE_SUCCESS", savedCourse };
}

export function saveCourse(course) {
  return function(dispatch) {
    dispatch(ajaxCalled());
    return courseApi
      .saveCourse(course)
      .then(savedCourses => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourses))
          : dispatch(saveCourseSuccess(savedCourses));
      })
      .catch(err => {
        dispatch(ajaxFalied());
        throw err;
      });
  };
}

/*
Make a aysnc call
Using a promise
Dispatch an action once NavigationCompletedEvent.
*/
