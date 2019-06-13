import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,
    error: ""
  };

  handleDecrement = () => {
    const { counter } = this.state;
    if (counter >= 1) this.setState({ counter: counter - 1 });
    else {
      this.setState({
        counter: 0,
        error: "Error counter can not be less than 0"
      });
    }
  };

  handleIncrement = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1, error: null });
  };

  render() {
    const { counter, error } = this.state;
    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-display">The Count is {counter}</h1>
        <input
          type="button"
          value="Increment counter"
          data-test="increment-button"
          onClick={() => this.setState({ counter: counter + 1 })}
        />
        <input
          type="button"
          value="Decrement counter"
          data-test="decrement-button"
          onClick={this.handleDecrement}
        />
        <p data-test="error-msg">{error}</p>
      </div>
    );
  }
}

export default App;
