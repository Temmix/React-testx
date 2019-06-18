import { actionTypes } from "../actions";
import successReducer from "./successReducer";

describe("Success Reducer", () => {
  test("returns default initial state of `false` when no action is passed", () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
  });

  test("returns default initial state of `true` when action `CORRECT_GUESS` is passed", () => {
    const newState = successReducer(undefined, {
      type: actionTypes.CORRECT_GUESS
    });
    expect(newState).toBe(true);
  });
});
