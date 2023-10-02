import React, { Component, useState } from 'react';
import './App.css'

class CounterCombined extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h2>Pengenalan React Tingkat Dasar</h2>
        <p style={{  fontSize: 28 }}>Counter: {this.state.count}</p>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}

export default CounterCombined;