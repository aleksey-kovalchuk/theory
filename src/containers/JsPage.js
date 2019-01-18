import React, { Component } from 'react';
import Important from '../components/Important';
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

const code1 = `sayHi.[[scope]] = window
`;

const code2 = `(function() {
  'use strict'
  
  var test = function() {
    console.log(this); // undefined
  }
  
  test();
})(); 
`;

const code3 = `var myFunc = function(a, b, c) {
  console.log(arguments.reverse()); // Здесь будет ошибка
}

// Чтобы сделать из arguments обычный массив:
Array.prototype.slice.call(arguments);
// Можно короче (но тут создается массив):
[].slice.call(arguments);

// Или
const myFunc = function(...rest) {
  rest.reverse();
}

Array.from(arguments).reverse();
`;

class JsPage extends Component {
  render () {
    return (
      <div>
        <Head>Javascript общие вопросы</Head>

        <SubHead>Lexical Environment</SubHead>
        <p>
          Lexical Environment - это объект со всеми аргументами, функциями и переменными
          внутри какой-то функции.
        </p>
        <p>
          При создании функция получает скрытое свойство <b>[[scope]]</b> которое
          ссылается на лексическое окружение в котором она была создана.
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code1}
        </StyledSyntaxHighlighter>
        <p>
          <b>Область видимости</b> определяет доступ к переменным при вызове функции.<br/>
          <b>Контекст выполнения</b> содержит и область видимости и аргумены функции
          и переменную this.
        </p>

        <Important>Функция в Javascript является объектом</Important>

        <SubHead>Переменная this</SubHead>
        <p>
          Определяется тем, как вызывается функция.
        </p>
        <p>
          1. Если функция вызывается как метод объекта - тогда <b>this</b> приобретает
          значение ссылки на объект.<br/>
          2. При создании экземпляра объекта через <b>new</b>, тогда <b>this</b> - ссылка на вновь
          созданный объект.<br/>
          3. Если вызываем функцию как функцию а не конструктор - ссылается на глобальный
          объект window (в <b>use strict</b> будет <b>undefined</b>)
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code2}
        </StyledSyntaxHighlighter>

        <SubHead>Модульный подход к разработке</SubHead>
        <p>
          1. RequireJS (AMD) и Dependency Injection<br/>
          2. Module pattern<br/>
          3. CommonJS<br/>
          4. ES6 Modules (import, export, export default)
        </p>

        <SubHead>Псевдомассив Arguments</SubHead>
        <p>
          Это подобный массиву объект, который содержит аргументы, переданные в функцию. Попытка
          вызвать на нем некоторые методы массива вызовет ошибку.
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code3}
        </StyledSyntaxHighlighter>

      </div>
    );
  }
}

export default JsPage;