import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Wrap = styled.div`
  padding: 50px;
`;

class StartPage extends Component {
  render () {
    return (
      <Wrap>
        <div><Link to="/async">Асинхронное программирование</Link></div>
        <div><Link to="/about/">about</Link></div>
        <div><Link to="/users/">users</Link></div>
        <div><Link to="/funcprog">FUNC</Link></div>
      </Wrap>
    );
  }
}

export default StartPage;