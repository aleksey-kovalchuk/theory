import React, { Component } from 'react';
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
    promise.then(res => console.log(res)).catch(err => console.log(err));
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

    const codeString3 = `
    'use strict';

    let p = new Promise((resolve, reject) => {
      // то же что reject(new Error("o_O"))
      throw new Error("o_O");
    })
    
    p.catch(alert); // Error: o_O
    `;

    const codeString4 = `
    'use strict';

    // сделать запрос
    myAsyncFunction('/some/address/user.json')
      // 1. Получить данные о пользователе в JSON и передать дальше
      .then(response => {
        console.log(response);
        let user = JSON.parse(response);
        return user;
      })
      // 2. Получить информацию с github
      .then(user => {
        console.log(user);
        return myAsyncFunction(\`https://api.github.com/users/\${user.name}\`);
        // Здесь будет ждать пока в myAsyncFunction сработает resolve()
      })
      // 3. Вывести аватар на 3 секунды (можно с анимацией)
      .then(githubUser => {
        console.log(githubUser);
        githubUser = JSON.parse(githubUser);

        let img = new Image();
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.appendChild(img);

        setTimeout(() => img.remove(), 3000); // (*)
    });
    `;

    const codeString5 = `
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({data: 'result'});
      }, 3000);
    });
    
    promise.then((res) => {
      console.log(res);
    })
    .then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(777);
        }, 2000);
      })
    })
    .then((res) => {
      console.log('IAM LAST!!!!', res);
    })
    .catch((err) => {
      console.log('ERROR1: ', err);
      return err;
    })
    .then((res) => {
      console.log('Res after catch: ', res);
    })
    .then((res) => {
      throw new Error('One more error')
    })
    .catch((err) => {
      console.log('ERROR2: ', err);
    });
    `;

    const codeString6 = `
    Promise.all([
      myAsyncFunction('/article/promise/user.json'),
      myAsyncFunction('/article/promise/guest.json')
    ]).then(results => {
      alert(results);
    });
    `;

    const codeString7 = `
    // Этот вызов создаёт успешно выполнившийся промис с результатом value
    Promise.resolve(value)
    // Это все равно что записать так:
    new Promise((resolve) => resolve(value))
    
    // Аналогично Promise.reject(error) создаёт уже выполнившийся промис, 
    // но не с успешным результатом, а с ошибкой error
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

        <p>
          Синхронный <b>throw</b> – то же самое, что <b>reject</b>. Если в функции промиса происходит синхронный
          throw (или иная ошибка), то вызывается reject
        </p>

        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { codeString3 }
        </StyledSyntaxHighlighter>

        <p>
          Функции resolve/reject принимают ровно один аргумент – результат/ошибку.
          Именно он передаётся обработчикам в .then
        </p>
        <p>
          Заметим, что после вызова resolve/reject промис уже не может «передумать».
          Когда промис переходит в состояние «выполнен» – с результатом (resolve)
          или ошибкой (reject) – это навсегда. Если следом встретится второй
          resolve например - он будет проигнорирован.
        </p>

        <p>
          <b>Chaining</b> - это возможность строить асинхронные цепочки из промисов.
          В каждый следующий then переходит результат от предыдущего!<br/>
          <b>
            Если очередной then вернул промис, то далее по цепочке будет передан не
            сам этот промис, а его результат!
          </b>
        </p>

        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { codeString4 }
        </StyledSyntaxHighlighter>

        <p>
          При возникновении ошибка передается в ближайший catch. После catch можно поставить then
          и тогда выполнение пойдет дальше по цепочке. Если в catch вернуть ошибку - ее
          можно обработать в then.
        </p>

        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { codeString5 }
        </StyledSyntaxHighlighter>

        <br/>

        <SubHead>Параллельное выполнение Promise.all</SubHead>

        <p>
          Вызов Promise.all(iterable) получает массив (или другой итерируемый объект) промисов и
          возвращает промис, который ждёт, пока все переданные промисы завершатся, и переходит в
          состояние «выполнено» с массивом их результатов.<br/>
          Если какой-то из промисов завершился с ошибкой, то результатом Promise.all будет эта ошибка.
          При этом остальные промисы игнорируются.
        </p>

        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { codeString6 }
        </StyledSyntaxHighlighter>

        <p>
          Вызов <b>Promise.race</b>, как и Promise.all, получает итерируемый объект с промисами, которые нужно
          выполнить, и возвращает новый промис. Но, в отличие от Promise.all, результатом будет только
          первый успешно выполнившийся промис из списка. Остальные игнорируются.
        </p>

        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { codeString7 }
        </StyledSyntaxHighlighter>

      </div>
    );
  }
}

export default AsyncPage;