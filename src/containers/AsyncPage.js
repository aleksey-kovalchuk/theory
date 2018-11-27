import React, { PureComponent } from 'react';
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

class AsyncPage extends PureComponent {

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

    const codeString8 = `
    let promise = fetch(url[, options]);
    `;

    const codeString9 = `
    const url = 'https://randomuser.me/api';
    
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');
    
    let data = {
        name: 'Sara'
    } 
    
    let fetchData = { 
        method: 'POST', 
        body: data,
        headers: myHeaders
    }
    
    fetch(url, fetchData)
    .then((response) => {
      // Объект response можно прочитать в разных форматах
      // response.arrayBuffer()
      // response.blob()
      // response.formData()
      // response.json()
      // response.text()
      // эти вызовы возвращают промис
    })
    .then(function(res) {
        // Здесь мы имеем результат операции например response.json()
    })
    .catch( alert );
    `;

    const codeString10 = `
    // unicorn возвращает промис
    // getRainbow возвращает промис
    // в rainbow записывается результат промиса
    async function unicorn() {
      try {
        let rainbow = await getRainbow();
        return rainbow.data.colors;
      } catch(e) {
        return {
          message: e.data.message,
          someText: 'Custom error message'
        }
      }
    }
    `;

    const codeString11 = `
    async function unicorn() {
      let [rainbow, food] = await Promise.all([getRainbow(), getFood()]);
      return {rainbow, food}
    }
    `;

    const codeString12 = `
    async function getAllUnicorns(names) {
      return await Promise.all(names.map(async function(name) {
        var unicorn = await getUnicorn(name);
        return unicorn;
      }));
    }
    `;

    const codeString13 = `
    async function throwsValue() {
      throw new Error('oops');
    }

    throwsValue()
    .then((resolve) => {
      console.log('resolve:' + resolve);
    })
    .catch((reject) => {
      console.log('reject:' + reject);
    });
    //prints 'reject:Error: oops'
    `;

    const codeString14 = `
    async getPost = () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      console.log(data);
    }
    `;

    const codeString15 = `
    const load = async () => {
      const a = await Promise.resolve(5);
      const b = await Promise.resolve(10);
      return a + b;
    };
    load().then(value => console.log(value)); // 15
    `;

    const codeString16 = `
    function* generatorCreator () {
      const response = yield fetch('https://jsonplaceholder.typicode.com/posts/1'); 
      const data = yield response.json();
      console.log(data);
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

        <br/>
        <SubHead>Fetch</SubHead>

        <p>Метод <b>fetch</b> – это XMLHttpRequest нового поколения.</p>
        <p>Если передаем только url - по умолчанию выполняется GET запрос</p>

        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { codeString8 }
        </StyledSyntaxHighlighter>

        <p>
          url – URL, на который сделать запрос,
          options – необязательный объект с настройками запроса.
        </p>
        <p>
          Свойства options:<br/>
          <b>method</b> – метод запроса,<br/>
          <b>headers</b> – заголовки запроса (объект),<br/>
          <b>body</b> – тело запроса: FormData, Blob, строка и т.п.<br/>
          <b>mode</b> – одно из: «same-origin», «no-cors», «cors», указывает, в каком режиме кросс-доменности предполагается делать запрос.<br/>
          <b>credentials</b> – одно из: «omit», «same-origin», «include», указывает, пересылать ли куки и заголовки авторизации вместе с запросом.<br/>
          <b>cache</b> – одно из «default», «no-store», «reload», «no-cache», «force-cache», «only-if-cached», указывает, как кешировать запрос.<br/>
          <b>redirect</b> – можно поставить «follow» для обычного поведения при коде 30x (следовать редиректу) или «error» для интерпретации редиректа как ошибки.<br/>
        </p>

        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { codeString9 }
        </StyledSyntaxHighlighter>

        <br/>
        <SubHead>ASYNC / AWAIT</SubHead>

        <p>
          Говоря общедоступным языком <b>async/await</b> — это <b>Promise</b>.<br/>
          Когда вы объявляете функцию как асинхронную, через волшебное слово <b>async</b>,
          вы говорите, что данная функция возвращает <b>Promise</b>. Каждая вещь которую вы ожидаете
          внутри этой функции, используя волшебное слово <b>await</b>, то же возвращает <b>Promise</b>.
        </p>

        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { codeString10 }
        </StyledSyntaxHighlighter>

        <p>
          Код следующий после <b>await</b>, продолжает свое выполнение только тогда, когда функция используемая с
          await вернет <b>resolve</b> или <b>reject</b>
        </p>

        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { codeString11 }
        </StyledSyntaxHighlighter>

        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { codeString12 }
        </StyledSyntaxHighlighter>

        <p>Когда функция async выбрасывает исключение</p>

        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { codeString13 }
        </StyledSyntaxHighlighter>

        <p>Использование вместе с fetch</p>

        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { codeString14 }
        </StyledSyntaxHighlighter>

        <p>Использование async/await очень похоже на то, как мы работаем с генераторами:</p>

        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { codeString15 }
        </StyledSyntaxHighlighter>

        <p>
          Async/Await действительно позволяет писать асинхронный код синхронно, не блокируя стек вызовов.
          Мы замораживаем код и ждем пока выполнится промис, а затем продолжаем.
        </p>


        <br/>
        <SubHead>Генераторы</SubHead>

        <p>
          Функция генератор сама по себе не выполняется, она лишь создает специальный итерируемый объект знающий
          о своем состоянии. Этот объект имеет метод <b>next()</b> который позволяет запускать выполнение функции до
          ключевого слова <b>yield</b>. Инструкция <b>yield</b>, на мой взгляд, похожа на return, возвращает промежуточный
          результат и приостанавливает выполнение кода.
        </p>

        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          { codeString16 }
        </StyledSyntaxHighlighter>

        
        {/* TODO: Observables RxJS*/}


      </div>
    );
  }
}

export default AsyncPage;