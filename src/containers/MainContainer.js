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

const AppRouter = () => (
  <Wrap>
    <Container>
      <Route path="/" exact component={StartPage} />
      <Route path="/async" exact component={AsyncPage} />
      <Route path="/funcprog/" component={FuncProg} />
    </Container>
  </Wrap>
);

export default AppRouter;