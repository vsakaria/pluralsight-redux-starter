import React from "react";
import expect from "expect";
import { mount } from "enzyme";
import { ManageCoursePage, handleAuthorDropDown } from "./ManageCoursePage";

describe("Manage Course Page", () => {
  const props = {
    authors: [],
    course: {
      id: "",
      title: "",
      watchHref: "",
      authorId: "",
      length: "",
      category: ""
    },
    actions: {
      saveCourse: () => Promise.resolve()
    }
  };

  it("sets error message", () => {
    const wrapper = mount(<ManageCoursePage {...props} />);
    const saveButton = wrapper.find("input").last();
    expect(saveButton.prop("type")).toBe("submit");
    saveButton.simulate("click");
    expect(wrapper.state().errors.title).toBe("Some error");
  });

  it("should return formatted data for the drop down", () => {
    const state = {
      authors: [
        {
          id: "some-id",
          firstName: "SOME_FIRSTNAME",
          lastName: "SOME_LASTNAME"
        }
      ]
    };
    const authorsDropDownData = [
      { value: "some-id", text: "SOME_FIRSTNAME SOME_LASTNAME" }
    ];
    expect(handleAuthorDropDown(state)).toEqual(authorsDropDownData);
  });
});
