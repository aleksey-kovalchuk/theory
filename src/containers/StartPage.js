import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Wrap = styled.div`
  padding: 50px;
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 10px;
  text-decoration: none;
  margin-bottom: 2px;
  color: #333333;
  border-radius: 2px;
  &:hover {
    background: rgba(0,0,0,0.1);
  }
`;


class StartPage extends Component {
  render () {
    return (
      <Wrap>
        <StyledLink to="/async">Асинхронное программирование</StyledLink>
        <StyledLink to="/tasks">Задачи на собеседовании</StyledLink>
        <StyledLink to="/react">React основы</StyledLink>
        <StyledLink to="/redux">Redux основы</StyledLink>
        <StyledLink to="/js">Javascript общие вопросы</StyledLink>
      </Wrap>
    );
  }
}

export default StartPage;