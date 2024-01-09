import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe("CourseList", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find("table#CourseList").exists()).toEqual(true);
  });

  it("renders 5 diffrent rows", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find("thead").children().length).toEqual(2);
    expect(wrapper.find("tbody").children().length).toEqual(3);
  });
});