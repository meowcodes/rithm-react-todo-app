import React from "react";
import { mount } from "enzyme";
import Todo from "./Todo";
import toJson from "enzyme-to-json";

let wrapper;

beforeEach(function () {
    wrapper = mount(<Todo text="need to test" />);
})


it("renders without crashing", function () {
    mount(<Todo />);
});

it("matches snapshot", function () {
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});

it("renders with correct text", function () {
    let p_elem = wrapper.find("p");
    expect(p_elem.text()).toBe("need to test");
})

it("renders a button", function () {
    expect(wrapper.exists("button")).toEqual(true);
});