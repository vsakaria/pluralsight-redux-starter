import expect from "expect";
import React from "react";
import { shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import ValidationMessage from "./ValidationMessage";

function setup() {
  let props = {
    messages: [
      {
        valid: true,
        message: "Some message"
      },
      {
        valid: false,
        message: "Some other message"
      },
      {
        valid: true,
        message: "Some other other message"
      },
      {
        valid: false,
        message: "Some other other other message"
      }
    ]
  };

  return shallow(<ValidationMessage {...props} />);
}

describe("ValidationMessage", () => {
  it("should render the correct nubner of li", () => {
    const wrapper = setup();
    expect(wrapper.find("li").length).toBe(4);
  });

  it("should render the correct message", () => {
    const wrapper = setup();
    expect(
      wrapper
        .find("li")
        .first()
        .text()
    ).toEqual("Some message");
  });

  xit("should display an error if the rule is invalid", () => {
    const wrapper = setup();
    expect(
      wrapper
        .find("li")
        .first()
        .render()
        .hasClass("tick")
    ).toEqual(true);
  });
});

/*
Get some props in which should the message and weather its true or false

{
    valid: boolean,
    message: "Some message"
}

*/
