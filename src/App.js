import React, { Component } from 'react';
import AppRouter from './containers/MainContainer.js';
import NavBar from './containers/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <AppRouter />
      </div>
    );
  }
}

export default App;
