import React from 'react';
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


const task1 = `function numeric() {
  let inner = 1;

  function counter (b) {
    return inner * b;
  }
  
  counter.fractal = function(val) {
    if (!val) return inner;
    inner = val;
    return counter;
  }
  
  return counter;
}

const m = numeric();

m.fractal(4);

console.log(m(5)); // 20
console.log(m.fractal()); // 4
console.log(numeric().fractal(6)(8)); // 48 
`;

const task2 = `var greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
};

var greetHello = greetCurried("Hello");
greetHello("Heidi"); //"Hello, Heidi"
greetHello("Eddie"); //"Hello, Eddie"
`;

const task3 = `console.log(typeof typeof 1); // 'string'

console.log(false == '0'); // true
console.log(false === '0'); // false

console.log(1 * 2 + '3'); // 23
console.log('1' + '2' * 3); // 16
console.log('1' + '-2' * 3); // 1-6
console.log('1' / '2' + 3); // 3.5
`;


const task4 = `// Что будет напечатано при нажатии Button 4?

for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button' + i));
  btn.addEventListener('click', function() {
    console.log(i);
  });
  document.body.appendChild(btn);
}

// Ответ: 5
// В данном случае при нажатии любой кнопки будет 5
// Потому как по сути есть переменна i вне цикла и она на момент нажатия равна 5
// Но если заменить var на let - ответ будет 4
`;

const task5 = `// Что будет напечатано?

let callbacks = [];

for (let i = 0; i < 3; i++) {
  callbacks[i] = function() {
    console.log(i);
  }
}

callbacks.forEach(function(cb) { cb(); });

// Ответ: 0 1 2
`;

const task6 = `// Что будет напечатано?

var x = 21;
var func = function() {
  console.log(x);
  var x = 20;
}
func();

// Ответ: undefined
`;

const task7 = `let arr = [1,2,3,4,5];
delete(arr[2]);
console.log(arr.length); // 5
`;

const task8 = `// напишите функцию isInteger(x)

function isInteger(x) {
  if (typeof x !== 'number') return false;
  
  return String(x).indexOf('.') === -1;
}

console.log(isInteger(2)); // true
console.log(isInteger(5.7)); // false
`;

const task9 = `// напишите функцию isPalindrome(str)

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome('level'));
`;

const task10 = `function add () {
  return
  {
    bar: 'foo';
  }
}
console.log(add()); // undefined
`;

const task11 = `// Как клонировать объект

const obj = {
  bar: 'foo',
  name: 'Alex'
};

const newObj1 = Object.assign({}, obj);
const newObj2 = { ...obj };

const newObj3 = JSON.parse(JSON.stringify(obj));

const copyObject = function(obj) {
  var copy = {};
  for (var key in obj) {
    copy[key] = obj[key];
  }
  return copy;
};

const deepCopy = function (obj) {
  if (typeof obj != "object") {
    return obj;
  }

  var copy = obj.constructor();
  for (var key in obj) {
    if (typeof obj[key] == "object") {
      copy[key] = this.deepCopy(obj[key]);
    } else {
      copy[key] = obj[key];
    }
  }
  return copy;
};
`;

const task12 = `// Как очистить массив?

const A = [1,2,3,4,5];

// A = []; - этот вариант только если let A = [...]

A.length = 0;

A.splice(0,A.length)

while(A.length > 0) {
  A.pop();
}

console.log(A);
`;

const task13 = `var user = {
  name: 'Василий',
  sayHi: function () {
    console.log( '>>>>>>' + this.name + ' !' );
  }
};
user.sayHi(); // sayHi в контексте user

// с ипользованием стрелочной функции:
(function() {
  this.name = 'Толик';

  var user = {
    name: 'Василий',
    sayHi: () => {
      console.log( '>>>>>>' + this.name + ' !' );
    }
  };

  user.sayHi(); // Толик в контексте самовызывающейся функции
})();
`;

const task14 = `this.age = 10;

function Person() {
  // В конструкторе Person() "this" указывает на себя.
  this.age = 0;

  setTimeout(function growUp() {
    // В нестрогом режиме, в функции growUp() "this" указывает 
    // на глобальный объект, который отличается от "this",
    // определяемом в конструкторе Person().
    this.age++;
    console.log('>>>>> ' + this.age); // 11
  }, 1000);
}

var p = new Person();

// Person(); - так было бы 1
`;

const task15 = `this.age = 10;

function Person() {
  this.age = 0;

  var test = function() {
    console.log(this.age); // 10 !!!
  }

  test();
}

var p = new Person();
`;

const task16 = `typeof undefined // "undefined"

typeof 0 // "number"

typeof true // "boolean"

typeof "foo" // "string"

typeof {} // "object"

typeof null // "object" - это ошибка typeof но ее оставили для совместимости

typeof function(){} // "function" - но на самом деле это объект
`;

export default function() {
  return (
    <div>
      <Head>Типичные задачи</Head>

      <SubHead>Настраиваемые функции</SubHead>
      <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
        { task1 }
      </StyledSyntaxHighlighter>

      <SubHead>Каррирование</SubHead>
      <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
        { task2 }
      </StyledSyntaxHighlighter>

      <SubHead>Задачи Tech round</SubHead>
      <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
        { task3 }
      </StyledSyntaxHighlighter>
      <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
        { task4 }
      </StyledSyntaxHighlighter>
      <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
        { task5 }
      </StyledSyntaxHighlighter>
      <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
        { task6 }
      </StyledSyntaxHighlighter>
      <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
        { task7 }
      </StyledSyntaxHighlighter>
      <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
        { task8 }
      </StyledSyntaxHighlighter>
      <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
        { task9 }
      </StyledSyntaxHighlighter>
      <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
        { task10 }
      </StyledSyntaxHighlighter>
      <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
        { task11 }
      </StyledSyntaxHighlighter>
      <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
        { task12 }
      </StyledSyntaxHighlighter>

      <SubHead>THIS</SubHead>
      <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
        { task13 }
      </StyledSyntaxHighlighter>
      <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
        { task14 }
      </StyledSyntaxHighlighter>
      <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
        { task15 }
      </StyledSyntaxHighlighter>

      <SubHead>Other</SubHead>
      <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
        { task16 }
      </StyledSyntaxHighlighter>
    </div>
  );
}