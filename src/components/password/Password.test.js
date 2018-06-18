import React from "react";
import expect from "expect";
import { mount } from "enzyme";
import Password from "./Password";

describe("Password Compontent", () => {
  it("should render a password input field", () => {
    const wrapper = mount(<Password />);
    const inputField = wrapper.find("input");
    expect(inputField.prop("type")).toBe("password");
  });

  it("should set the password into the state", () => {
    const wrapper = mount(<Password />);
    wrapper.find("input").simulate("change", { target: { value: "abc" } });
    expect(wrapper.state().password).toBe("abc");
  });

  it("should validate the field based one RegEx rule", () => {
    const rules = [
      {
        name: "min chars",
        rule: /^.{6,}$/,
        message: "Minimum of six characters",
        valid: false
      }
    ];
    const wrapper = mount(<Password rules={rules} />);
    wrapper.find("input").simulate("change", { target: { value: "abc" } });
    let valid = wrapper.state().rules[0].valid;
    expect(valid).toBe(false);
  });

  it("should validate the field based one RegEx rule", () => {
    const rules = [
      {
        name: "min chars",
        rule: /^.{6,}$/,
        message: "Minimum of six characters",
        valid: false
      }
    ];
    const wrapper = mount(<Password rules={rules} />);
    wrapper.find("input").simulate("change", { target: { value: "abcdef" } });
    let valid = wrapper.state().rules[0].valid;
    expect(valid).toBe(true);
  });

  it("should validate the field based more that one RegEx rule", () => {
    const rules = [
      {
        name: "min chars",
        rule: /^.{6,}$/,
        message: "Minimum of six characters",
        valid: false
      },
      {
        name: "Capital letter",
        rule: /[A-Z]/,
        message: "You need at least one capital letter",
        valid: false
      }
    ];
    const wrapper = mount(<Password rules={rules} />);
    wrapper.find("input").simulate("change", { target: { value: "abDdsds" } });

    let valid = wrapper.state().rules.map(ruleData => {
      return ruleData.valid;
    });
    expect(valid).toEqual([true, true]);
  });
});
