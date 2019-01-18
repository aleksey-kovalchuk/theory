import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';


const Head = styled.h1`
  font-size: 26px;
  font-weight: 600;
`;

const SubHead = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  border-radius: 4px;
  margin: 20px 0!important;
  font-size: 14px;
  padding: 20px!important;
`;

const code1 = `$font-stack: Helvetica, sans-serif;
body {
  font: 100% $font-stack;
}
`;

const code2 = `nav {
  ul {
    li {
      font-size: 16px;
    }
  }
}
`;

const code3 = ` // _partial.scss
// если стоит _ - тогда не компилируется в css а только импортируется
@import partial
`;

const code4 = `@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
          border-radius: $radius;
}

.box {
  @include border-radius(10px);
}
`;

const code5 = `%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
}
.message {
  @extend %message-shared;
  border-color: green;
}
`;

const code6 = `// + - * / %
...
width: 300px / 960px * 100% // конвертируем пикселы в проценты
`;

const code7 = `.sidebar {
  width: 300px;
  @media screen and (max-width: 500px) { ... }
}
`;

const code8 = `@for $i from 1 through 3 {
  .item-#{$i} { // класс .item-1 .item-2 и.т.д.
    width: 2em * $i;
  }
}
`;

class ScssPage extends Component {

  render () {
    return (
      <div>
        <Head>SCSS</Head>

        <SubHead>Переменные</SubHead>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code1}
        </StyledSyntaxHighlighter>

        <SubHead>Вложенности</SubHead>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code2}
        </StyledSyntaxHighlighter>

        <SubHead>Фрагменты</SubHead>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code3}
        </StyledSyntaxHighlighter>

        <SubHead>Миксины</SubHead>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code4}
        </StyledSyntaxHighlighter>

        <SubHead>Расширение/Наследование</SubHead>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code5}
        </StyledSyntaxHighlighter>

        <SubHead>Математические операторы</SubHead>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code6}
        </StyledSyntaxHighlighter>

        <SubHead>Media</SubHead>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code7}
        </StyledSyntaxHighlighter>

        <SubHead>Функции</SubHead>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code8}
        </StyledSyntaxHighlighter>

      </div>
    );
  }
}

export default ScssPage;