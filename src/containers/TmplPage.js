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

const code1 = `function Observable {
  var observers = [];
  
  this.sendMessage = function(msg) {
    for(var i = 0, len = observers.length; i < len; i++) {
      observers[i].notify(msg);
    }
  }
  
  this.addObserver(observer) {
    observers.push(observer);
  };
}

function Observer(behavior) {
  this.notify = function(msg) {
    behavior(msg);
  }
}

var observable = new Observable();
var obs1 = new Observer(function(msg) {
  console.log(msg);
});
var obs2 = ...
...

observable.addObserver(obs1);
observable.addObserver(obs2);
...
`;

const code2 = `var Person = function { ... };
Person.prototype.greet = function() { ... };

var bob = new Person('Bob', 22, 'Programmer');
`;

const code3 = `var myModule = (function() {
  var memes = []; // Приватные
  var getMemes = function() {...}; // Приватные
  return {
    getMemes: getMemes
  };
})();

console.log(myModule.getMemes());
`;

const code4 = `const Singleton = {
  foo: 123,
  getInstance() { return this }
}

let obj1 = Singleton.getInstance();
let obj2 = Singleton.getInstance();
obj1 = 456;
console.log(obj1 === obj2); // true

// ------------------------

var Singleton = new function() {
  var instance = this;
  // ...
  return function() {
    return instance;
  }
}

console.log(new Singleton === new Singleton); // true
`;

const code5 = `var Person = function(name) { ... };
Person.prototype.greet = function() {...};

// или

var Person = function(name) { ... };
var CoolPerson = function() { ... };
CoolPerson.prototype = Object.create(Person.prototype);
`;

const code6 = `function MemeQuery(target) {
  this.target = document.querySelector(target);
}

var $ = function(target) {
  return new MemeQuery(target);
};
`;

const code7 = `var Adam = new User(chatMediator, 'Adam');
// и, например, Adam.sendMessage дёргает chatMediator.notifyAll();
`;

const code8 = `carManager.execute('requestInfo', 'Ford', 'k759px');
`;

class TmplPage extends Component {

  render () {
    return (
      <div>
        <Head>Шаблоны проектирования</Head>
        <p>Это проверенный способ решения проблем</p>

        <SubHead>Порождающие шаблоны (Creational)</SubHead>
        <p>
          Cоздание новых объектов<br/>
          1. Конструктор (Constructor)<br/>
          2. Модульный (Module)<br/>
          3. Фабричный метод (Factory)<br/>
          4. Одиночка (Singletone)
        </p>

        <SubHead>Структурные шаблоны</SubHead>
        <p>
          1. Декоратор (Decorator)<br/>
          2. Фасад (Facade)
        </p>

        <SubHead>Поведенческие шаблоны (Behavioral)</SubHead>
        <p>
          Определяют, как объекты соотносятся друг с другом<br/>
          1. Наблюдатель (Observer)<br/>
          2. Посредник (Mediator)<br/>
          3. Команда (Command)
        </p>

        <SubHead>Конструктор</SubHead>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code2}
        </StyledSyntaxHighlighter>

        <SubHead>Модуль</SubHead>
        <p>
          Используется для инкапсуляции методов (сокрытия состояния объекта от прямого доступа)
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code3}
        </StyledSyntaxHighlighter>

        <SubHead>Фабрика</SubHead>
        <p>
          Используется, чтобы упростить создание объектов. Проще генерировать экземпляры
          объектов, не требует использования конструктора. Функция возвращает разные классы
          в зависимости от какого-то аргумента.
        </p>

        <SubHead>Singleton</SubHead>
        <p>
          Это класс с одним единственным экземпляром! Одна глобальная точка доступа и только
          один объект в приложении. (Создать глобальную переменную с присвоением объекта)
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code4}
        </StyledSyntaxHighlighter>
        <Important>
          Два объекта равны, если относятся к одному и тому же объекту.
          (Сравнение объекта истинно лишь в том случае, если оба операнда
          ссылаются на один и тот же объект в памяти)
        </Important>

        <SubHead>Декоратор</SubHead>
        <p>
          Используется чтобы добавлять новую функциональность объектам
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code5}
        </StyledSyntaxHighlighter>
        <Important>
          Object.create() - создает объект, который не имеет прототипа
        </Important>

        <SubHead>Фасад (Facade)</SubHead>
        <p>
          Используется для создания простого интерфейса (упрощает функциональность, как, например jQuery).
          Создаем объект - и доступ к его методам через этот объект.
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code6}
        </StyledSyntaxHighlighter>

        <SubHead>Observer</SubHead>
        <p>
          Позволяет объектам наблюдать за объектами и быть оповещенными об изменениях.
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code1}
        </StyledSyntaxHighlighter>

        <SubHead>Посредник (Mediator)</SubHead>
        <p>
          Один объект контролирует сообщение между объектами, поэтому объекты
          не сообщаются друг с другом напрямую. Это похоже на Observer, только каждому объекту
          при создании передается этот управляющий объект.
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code7}
        </StyledSyntaxHighlighter>

        <SubHead>Command</SubHead>
        <p>
          Инкапсулирует вызов метода в один объект. Все методы в одном объекте и обращаемся к ним
          через один метод, в который передаем имя необходимого метода.
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code8}
        </StyledSyntaxHighlighter>

      </div>
    );
  }
}

export default TmplPage;