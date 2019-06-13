import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 *  Factory function to create a shallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component prop specific to this setup
 * @param {object} state - Component initial state specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Returns ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper  to search within
 * @param {*} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without errors", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const title = findByTestAttr(wrapper, "counter-display");
  expect(title.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("counter");
  expect(initialCounterState).toBe(0);
});

test("clicking button increments counter display", () => {
  const counter = 9;
  const wrapper = setup(null, { counter });

  const button = findByTestAttr(wrapper, "increment-button");
  button.simulate("click");
  wrapper.update();

  const title = findByTestAttr(wrapper, "counter-display");
  expect(title.text()).toContain(counter + 1);
});

test("renders decrement button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  expect(button.length).toBe(1);
});

test("clicking button decrements counter display", () => {
  const counter = 9;
  const wrapper = setup(null, { counter });

  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate("click");
  wrapper.update();
  const title = findByTestAttr(wrapper, "counter-display");
  expect(title.text()).toContain(counter - 1);
});

test("clicking button decrements when counter is 0", () => {
  const counter = 0;
  const errorMsg = "Error counter can not be less than 0";
  const wrapper = setup(null, { counter: counter });

  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate("click");
  wrapper.update();

  const title = findByTestAttr(wrapper, "counter-display");
  const error = findByTestAttr(wrapper, "error-msg");
  expect(title.text()).toContain(counter);
  expect(error.text()).toBe(errorMsg);
});
