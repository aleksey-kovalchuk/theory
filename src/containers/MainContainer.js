import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StartPage from './StartPage';
import AsyncPage from './AsyncPage';
import TasksPage from './TasksPage';
import ReactPage from './ReactPage';
import ReduxPage from './ReduxPage';
import JsPage from './JsPage';
import ProtoPage from './ProtoPage';
import ScssPage from './ScssPage';
import TmplPage from './TmplPage';
import CommonQuestions from './CommonQuestions';
import SolidPage from './SolidPage';

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
      <Route path="/common/" component={CommonQuestions} />
      <Route path="/async" exact component={AsyncPage} />
      <Route path="/tasks/" component={TasksPage} />
      <Route path="/react/" component={ReactPage} />
      <Route path="/redux/" component={ReduxPage} />
      <Route path="/js/" component={JsPage} />
      <Route path="/proto/" component={ProtoPage} />
      <Route path="/scss/" component={ScssPage} />
      <Route path="/template/" component={TmplPage} />
      <Route path="/solid/" component={SolidPage} />
    </Container>
  </Wrap>
);

export default AppRouter;