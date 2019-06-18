import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <Input
          data-test="input-box"
          className="mb-2 mx-xm-3"
          id="word-guess"
          type="text"
          placeholder="enter guess word"
        />
        <button
          data-test="submit-btn"
          className="btn btn-primary mb-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
