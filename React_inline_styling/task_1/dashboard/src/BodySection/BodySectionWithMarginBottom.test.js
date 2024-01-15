import React from "react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import { shallow } from "enzyme";

describe("BodySectionWithMarginBottom", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<BodySectionWithMarginBottom />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders with correct children", () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find("BodySection").exists()).toBe(true);
    expect(wrapper.find("BodySection").prop("title")).toEqual("test title");
    expect(wrapper.find("BodySection").prop("children")).toEqual(
      <p>test children node</p>
    );
  });
});
