import React, { Component } from "react";
import './App.css';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import HomePage from '../src/Component/HomePage'
import HomePage from './Component/HomePage'

class App extends Component {
  render() {
    return (
      <div>
        <div className="">
          <Router>
            <Route exact path="/" Component={HomePage} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;