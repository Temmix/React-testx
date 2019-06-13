import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component for congratulatory message
 * @function
 * @returns {JSX.Element} - Renders component (or null if 'success' prop is falsy)
 */
const Congrats = props => {
  return (
    <div data-test="component-congrats">
      {props.success && (
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      )}
    </div>
  );
};
Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};
export default Congrats;