import React, { Component } from 'react';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';

import Important from '../components/Important';
import { Head, SubHead, StyledSyntaxHighlighter } from '../components/shared';

const code1 = `console.log()
`;

class ApiPage extends Component {
  render () {
    return (
      <div>
        <Head>Application Programming Interface (API)</Head>
        <p>
          Позволяет компонентам ПО взаимодействовать между собой
        </p>
        <Important>
          Браузер предоставляет библиотеки и объекты, которые позволяют Вам
          контролировать web страницу
        </Important>




        {/*<StyledSyntaxHighlighter language='javascript' style={tomorrow}>*/}
          {/*{code1}*/}
        {/*</StyledSyntaxHighlighter>*/}

      </div>
    );
  }
}

export default ApiPage;