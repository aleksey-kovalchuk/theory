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

const code1 = `var animal = {
  eats: true;
}

function Rabbit(name) {
  this.name = name;
  this.__proto__ = animal; // наследование
}

// Или так:
Rabbit.prototype = animal;
Rabbit.prototype.fuck = function() {
  console.log('Ouyeah!');
}

// Прототип:
{
  constructor: Rabbit,
  __proto__: {}, // <--
  fuck: function() {...}
}

// Объекты:
var a = {};
var b = {};
b.__proto__ = a;

// Функции конструкторы
function a() {...}
var b = new a();
// b.__proto__ === a.prototype // true 
`;


class ProtoPage extends Component {

  render () {
    return (
      <div>
        <Head>Наследование</Head>
        <p>
          При создании объекта через <b>new</b> в его прототип <b>__proto__</b> записывается
          ссылка из <b>prototype</b> родителя (то есть по сути сам prototype).<br/>
          Свойство <b>prototype</b> указывает <b>__proto__</b> для новых объектов и всё!
        </p>

        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code1}
        </StyledSyntaxHighlighter>

      </div>
    );
  }
}

export default ProtoPage;