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

const Point = styled.div`
  font-size: 18px;
  color: #518e11;
  margin-bottom: 5px;
`;

const Mark = styled.span`
  color: red;
  font-size: 16px;
  font-weight: 300;
`;

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  border-radius: 4px;
  margin: 20px 0!important;
  font-size: 14px;
  padding: 20px!important;
`;

const code1 = `static getDerivedStateFromProps(nextProps, prevState) {...}
  // нет доступа к this.props и this.state!
  // должен возвращать новое состояние или return null если не меняем состояние
`;

const code2 = `shouldComponentUpdate(nextProps,nextState) {
  return !shallowEqual(nextProps, this.props) || !shallowEqual(nextState, this.state);
}
// В обычном компоненте просто { return true; }
`;

const code3 = `ComponentWillReceiveProps(newProps) {
  if (this.props.visible === true && next.props.visible === false) {
    console.log('HIDDEN');
  }
}
`;

const code4 = `class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
// Раньше так:
<input value="456" ref={(node) => { this.inputEl = node; }} />
`;

class ReactPage extends Component {

  render () {

    return (
      <div>
        <Head>React</Head>
        <SubHead>Жизненный цикл компонентов</SubHead>
        <p>
          <Point>ComponentWillMount <Mark>(deprecated)</Mark></Point>
          Компонент будет примонтирован
        </p>
        <p>
          <Point>ComponentDidMount</Point>
          Можно использовать refs, указать установку фокуса, таймауты,
          ajax запросы, взаимодействия с другими библиотеками.
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            { code4 }
          </StyledSyntaxHighlighter>
        </p>
        <p>
          <Point>ComponentWillReceiveProps <Mark>(deprecated)</Mark></Point>
          Здесь компонент получает новые props. Старые доступны как this.props
          а новые ComponentWillReceiveProps(nextProps) {'{...}'}<br/>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            { code3 }
          </StyledSyntaxHighlighter>
          Новый метод getDerivedStateFormProps:
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            { code1 }
          </StyledSyntaxHighlighter>
        </p>
        <p>
          <Point>ShouldComponentUpdate</Point>
          Можно отменить обновление компонента
        </p>
        <p>
          <Point>ComponentWillUpdate <Mark>(deprecated)</Mark></Point>
          Вызывается прямо перед <b>render</b> когда новые props и state получены.
        </p>
        <p>
          <Point>componentDidUpdate</Point>
          Вызывается сразу после <b>render</b>. Не вызывается в момент первого рендера!
        </p>
        <p>
          <Point>componentWillUnmount</Point>
          Вызывается перед тем, как компонент будет удален из DOM.
          Здесь можно отписаться от прослушивания событий.
        </p>

        <SubHead>Pure Component</SubHead>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { code2 }
        </StyledSyntaxHighlighter>




      </div>
    );
  }
}

export default ReactPage;