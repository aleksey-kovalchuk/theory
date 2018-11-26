import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background: #cccccc;
`;

class NavBar extends Component {
  render () {
    return (
      <Wrap>
        <span><Link to="/">Home</Link></span>
      </Wrap>
    );
  }
}

export default NavBar;