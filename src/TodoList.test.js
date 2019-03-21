import React from "react";
import { mount } from "enzyme";
import TodoList from "./TodoList";
import toJson from "enzyme-to-json";

let wrapper;

beforeEach(function () {
    wrapper = mount(<TodoList />);
})

it("renders without crashing", function () {
    mount(<TodoList />);
});

it("matches snapshot", function () {
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});

it("adds todo items", function() {
    wrapper.setState({
        todoArr: [{
            text: "need to test",
            id: 1
        }]
    });

    expect(wrapper.state().todoArr).toEqual(
        [{ text: "need to test", id: 1}]
    );
    
    wrapper.instance().createTodo({
        text: "need to test more"
    });

    expect(wrapper.state().todoArr).toEqual(
        [
            { text: "need to test", id: 1},
            { text: "need to test more", id: expect.any(String)}
        ]
    );
});

it("renders a form and successfully creates a todo", function() {
    const textInput = wrapper.find("#text");
    textInput.instance().value = "need to test";
    textInput.simulate("change");

    const form = wrapper.find("form");
    form.simulate("submit");

    expect(wrapper.state().todoArr.length).toEqual(1);

    expect(
        wrapper.find("p").last().text()
    ).toEqual("need to test")
});

// deletes when delete btn clicked