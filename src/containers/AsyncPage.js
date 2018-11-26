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
  padding: 0!important;
  margin: 20px 0!important;
  font-size: 14px;
`;

class AsyncPage extends Component {

  render () {


    const codeString1 = `
      const promise = new Promise((resolve, reject) => {
        // Эта функция будет вызвана автоматически
      
        // В ней можно делать любые асинхронные операции,
        // А когда они завершатся — нужно вызвать одно из:
        // resolve(результат) при успешном выполнении
        // reject(ошибка) при ошибке
      })
      
      promise.then(onFulfilled, onRejected);
      // или
      promise.then(res => console.log(res)).catch(err => console.log(err))ж
    `;

    const codeString2 = `
      function myAsyncFunction(url) {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open("GET", url);
          xhr.onload = () => resolve(xhr.responseText);
          xhr.onerror = () => reject(xhr.statusText);
          xhr.send();
        });
      }
    `;


    return (
      <div>
        <Head>Асинхронное программирование</Head>
        <SubHead>Promise</SubHead>

        <p>
          Promise – это специальный объект, который содержит своё состояние. Вначале pending (ожидание),
          затем – одно из: fulfilled (выполнено успешно) или rejected (выполнено с ошибкой).
        </p>

        <p>
          Использование: Код, которому надо сделать что-то асинхронно, создаёт объект promise и возвращает его.
          Внешний код, получив promise, навешивает на него обработчики. По завершении процесса асинхронный код
          переводит promise в состояние fulfilled (с результатом) или rejected (с ошибкой). При этом автоматически
          вызываются соответствующие обработчики во внешнем коде.
        </p>

        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { codeString1 }
        </StyledSyntaxHighlighter>

        <p>
          Чтобы снабдить функцию функционалом обещаний, нужно просто вернуть в ней объект Promise:
        </p>

        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { codeString2 }
        </StyledSyntaxHighlighter>

      </div>
    );
  }
}

export default AsyncPage;