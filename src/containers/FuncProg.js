import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';


const Head = styled.h1`
  font-size: 20px;
  font-weight: 500;
`;

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  border-radius: 4px;
  padding: 0!important;
  margin: 20px 0!important;
  font-size: 14px;
`;


class FuncProg extends Component {

  render () {


    const codeString = `
      import React from "react";
      import uniquePropHOC from "./lib/unique-prop-hoc";
      
      class Expire extends React.Component {
          constructor(props) {
              super(props);
              this.state = { component: props.children }
          }
          
          // test
          componentDidMount() {
              setTimeout(() => {
                  this.setState({
                      component: null
                  });
              }, this.props.time || this.props.seconds * 1000);
          }
          render() {
              return this.state.component;
          }
      }
      
      export default uniquePropHOC(["time", "seconds"])(Expire);
    `;


    return (
      <div>
        <Head>Функциональное программирование</Head>

        <div><a href="https://github.com/conorhastings/react-syntax-highlighter" target="_blank" >
          Highlighter
        </a></div>

        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {codeString}
        </StyledSyntaxHighlighter>

      </div>
    );
  }
}

export default FuncProg;