import React from "react";
import BodySection from "./BodySection";
import { shallow } from "enzyme";

describe("BodySection", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<BodySection />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders with correct children", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    expect(wrapper.find("h2").text()).toEqual("test title");
    expect(wrapper.find("p").text()).toEqual("test children node");
  });
});
