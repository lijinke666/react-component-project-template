/*eslint-disable */
import React from "react";
import assert from "power-assert";
import { shallow } from "enzyme";

import YourComponent from "../../src";

describe("<YourComponent/>", () => {
  it("should render <YourComponent/> components", () => {
    const wrapper = shallow(<YourComponent />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should find <h2> for <YourComponent/>", () => {
    const wrapper = shallow(<YourComponent />);
    assert(wrapper.find("h2").length === 1);
  });
  it("should find <p> for <YourComponent/>", () => {
    const wrapper = shallow(<YourComponent />);
    assert(wrapper.find("p").length === 1);
  });
});
