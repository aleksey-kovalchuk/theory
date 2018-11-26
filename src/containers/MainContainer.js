import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FuncProg from './FuncProg.js';
import StartPage from './StartPage';
import AsyncPage from './AsyncPage';

import styled from 'styled-components';

const Wrap = styled.div`
  padding-top: 40px;
`;

const Container = styled.div`
  max-width: 800px;
  padding: 10px;
  margin: 0 auto;
`;

const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;


const AppRouter = () => (
  <Wrap>
    <Container>
      <Route path="/" exact component={StartPage} />
      <Route path="/async" exact component={AsyncPage} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
      <Route path="/funcprog/" component={FuncProg} />
    </Container>
  </Wrap>
);

export default AppRouter;