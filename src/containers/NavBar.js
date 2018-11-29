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

const Inner = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const StyledLink = styled(Link)`
  color: #333333;
  text-decoration: none;
`;

class NavBar extends Component {
  render () {
    return (
      <Wrap>
        <Inner>
          <StyledLink to="/">Home</StyledLink>
        </Inner>
      </Wrap>
    );
  }
}

export default NavBar;