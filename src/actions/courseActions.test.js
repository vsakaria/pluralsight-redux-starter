import expect from "expect";
import * as courseActions from "./courseActions";

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
