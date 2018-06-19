import expect from "expect";
import * as courseActions from "./courseActions";

import thunk from "redux-thunk";
import nock from "nock";
import configuireMockStore from "redux-mock-store";
import { debug } from "util";

describe("Course Actions", () => {
  it("should create a SAVE COURSE course action", () => {
    const savedCourse = {
      id: "1",
      title: "Some course name"
    };

    const expectedAction = {
      type: "SAVE_COURSE_SUCCESS",
      savedCourse
    };

    const action = courseActions.saveCourseSuccess(savedCourse);

    expect(action).toEqual(expectedAction);
  });
});
const middleware = [thunk];
const mockStore = configuireMockStore(middleware);

describe("Aysnc Actions", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it("should dispatch the correct actions on loadcourses", done => {
    const store = mockStore({ courses: [] });

    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual("AJAX_CALLED");
      expect(actions[1].type).toEqual("LOAD_COURSES_SUCCESS");
      expect(actions[1].courses[0].id).toEqual(
        "react-flux-building-applications"
      );
    });
    done();
  });

  it("should dispatch the correct actions on saveCourse", done => {
    //Given
    const course = {
      title: "Clean coder"
    };

    const store = mockStore({ courses: [] });

    store.dispatch(courseActions.saveCourse(course)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({ type: "AJAX_CALLED" });
      expect(actions[1].type).toEqual("SAVE_COURSE_SUCCESS");
      expect(actions[1].savedCourse).toEqual({
        title: "Clean coder",
        id: "Clean-coder",
        watchHref: "http://www.pluralsight.com/courses/Clean-coder"
      });
    });

    done();
  });
});

//arrange
//act
//Assert

//Given
//When
//Then
