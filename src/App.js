import React, { component } from "react";
import './App.css';
// import render  from '@testing-library/react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import {Router, Route} from 'react-router-dom'
import HomePage from './component/HomePage'

class App extends component {
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