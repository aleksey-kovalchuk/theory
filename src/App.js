import React, { Component } from 'react';
import AppRouter from './containers/MainContainer.js';
import NavBar from './containers/NavBar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <AppRouter />
        </div>
      </Router>
    );
  }
}

export default App;
