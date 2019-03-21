import React from "react";
import { mount } from "enzyme";
import NewTodoForm from "./NewTodoForm";
import toJson from "enzyme-to-json";

let wrapper;

beforeEach(function () {

    wrapper = mount(<NewTodoForm />);
})


it("renders without crashing", function() {
    mount(<NewTodoForm />);
});

//snapshot

it("matches snapshot", function() {
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});

it("updates state when input changes", function() {

    const textInput = wrapper.find("#text");
    textInput.instance().value = "need to test";
    textInput.simulate("change");

    expect(wrapper.state().text).toEqual("need to test");

});

it("runs a mocked fn on submit", function() {
    const submitFn = jest.fn();
    wrapper = mount(<NewTodoForm notifySubmit = { submitFn }/>);

    const form = wrapper.find("form");

    form.simulate("submit");

    expect(submitFn).toHaveBeenCalled();
});

it("resets state on submit", function() {
    const submitFn = jest.fn();
    wrapper = mount(<NewTodoForm notifySubmit = { submitFn }/>);

    const textInput = wrapper.find("#text");
    textInput.instance().value = "need to test";
    textInput.simulate("change");

    expect(wrapper.state().text).toEqual("need to test");

    const form = wrapper.find("form");

    form.simulate("submit");

    expect(wrapper.state()).toEqual({
        text: ""
    });
});

