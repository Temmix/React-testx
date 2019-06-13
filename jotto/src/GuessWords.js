import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component for Guess words table and message
 * @function
 * @returns {JSX.Element} - Renders component (or null if 'success' prop is falsy)
 */
const GuessWords = props => {
  return (
    <React.Fragment>
      <div data-test="component-guessed-words">
        {props.guessedWords.length === 0 && (
          <span data-test="guess-instruction">
            Try to guess the secret word!
          </span>
        )}
        <div className="mt-3">
          {props.guessedWords.length !== 0 && (
            <div data-test="guessed-words">
              <h3> Guessed Words</h3>
              <table className="table table-sm">
                <thead className="thead-light">
                  <tr>
                    <th>Guess</th>
                    <th>Matching Letters</th>
                  </tr>
                </thead>
                <tbody>
                  {props.guessedWords.map((word, index) => (
                    <tr data-test="guessed-word" key={index}>
                      <td>{word.guessedWord}</td>
                      <td>{word.letterMatchCount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
GuessWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};
export default GuessWords;
