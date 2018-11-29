import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StartPage from './StartPage';
import AsyncPage from './AsyncPage';
import TasksPage from './TasksPage'

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
      <Route path="/tasks/" component={TasksPage} />
    </Container>
  </Wrap>
);

export default AppRouter;