import React from "react";
import { shallow } from "enzyme";

import Congrats from "./Congrats";
import { findByTestAttr, checkProps } from "../test/testUtils";

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {Object } props  - Component props specific for this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = { success: false }) => {
  return shallow(<Congrats {...props} />);
};

test("renders without errors", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test('renders no text when "success" prop is falsy', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test('renders non-empty congrats message when "success" prop is truthy', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
