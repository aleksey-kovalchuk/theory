import React, { Component } from 'react';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';
import styled from 'styled-components';

import Important from '../components/Important';
import { Head, SubHead, StyledSyntaxHighlighter } from '../components/shared';
import loopImg from '../images/eventloop.png';

const Image = styled.img`
  display: block;
  max-width: 400px;
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
        <SubHead>Как работает Javascript</SubHead>
        <p>
          На движке V8 от google, js - однопоточный язык. Использует очередь функций
          обратного вызова.
        </p>
        <Image src={loopImg} alt=""/>
        <p>
          Куча - место, где происходит выделение памяти.<br/>
          Стек вызовов содержит стековые кадры.<br/>
          Event loop - механизм, который поддерживает выполнение программы, вызывая JS движок.
        </p>
        <p>
          JS - однопоточный язык. У него один стек вызовов, в один моментвремени он может только
          одну какую-то задачу.<br/>
          Пока в стеке вызовов имеется выполняющая функция - браузер не может выполнять другие
          задачи (он заблокирован). Решение этой проблемы - асинхронные функции обратного вызова.
        </p>
        <p>
          JS - движок - это программа (интерпретатор), выполняющий код JS.
          V8 написан на C++. Внутри движка используется несколько потоков.
        </p>
        <p>
          JS выделяет память когда нечто (объект, строка итд) создается и автоматически, когда
          созданное больше не используется, освобождает её - это "очистка мусора".
        </p>
        <p>
          Цикл событий (Event loop) наблюдает за стеком вызовов и очередью колбеков (callback queue)
          и если стек вызовов пуст - он берет первое событие из очереди колбеков и помещает его в стек,
          что приводит к запуску этого события.
        </p>
        <p>
          Куча - это специализированная структура данных типа дерево, которая удовлетворяет
          свойству кучи: если В является узлом-потомком узла А, то ключ(А) >= ключ(В). Элемент
          с наибольшим ключем всегда является корневым узлом кучи. Куча используется для
          эффективной реализации очереди с приоритетом.
        </p>

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