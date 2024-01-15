import React from "react";
import { shallow } from "enzyme";
import WithLogging from "./WithLogging";
import Login from "../Login/Login";

describe("WithLogging", () => {
  it("should log mount and unmount", () => {
    const spy = jest.spyOn(console, "log");
    const Component = () => <p>Test</p>;
    const ComponentWithLogging = WithLogging(Component);
    const wrapper = shallow(<ComponentWithLogging />);
    expect(spy).toHaveBeenCalledWith("Component Component is mounted");
    spy.mockClear();
    wrapper.unmount();
    expect(spy).toHaveBeenCalledWith("Component Component is going to unmount");
    spy.mockReset();
    spy.mockRestore();
  });

  it("should log mount and unmount for Login", () => {
    const spy = jest.spyOn(console, "log");
    const ComponentWithLogging = WithLogging(Login);
    const wrapper = shallow(<ComponentWithLogging />);
    expect(spy).toHaveBeenCalledWith("Component Login is mounted");
    spy.mockClear();
    wrapper.unmount();
    expect(spy).toHaveBeenCalledWith("Component Login is going to unmount");
    spy.mockReset();
    spy.mockRestore();
  });

});