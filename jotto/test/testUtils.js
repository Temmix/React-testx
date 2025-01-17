import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "../src/reducers";
import { middlewares } from "../src/configureStore";

/**
 * Create a  testing store with imported reducers, middleware and initial state
 * globals: rootreducer
 * @param {objct} initialState  - initial state for the store
 * @function storeFactory - storeFactory
 * @returns {Store} - Redux store
 */
export const storeFactory = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};

/**
 * Returns ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper  to search within
 * @param {*} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
