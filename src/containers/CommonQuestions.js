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

const code1 = `// Объявляем:
:root {
  --red: #ff6f69;
}

// Использовать так:
#title {
  color: var(--red);
}

// Или
color: var(--red, black); // black используется если переменная не передана

// Доступ из Javascript:
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var mainColor = rootStyles.getPropertyValue('--main-color');
console.log(mainColor);
`;

const code2 = `<section>
    <h2>...</h2>
    <p>...</p>
</section>

<figure>
  <img src="..." alt="...">
  <figcaption>...</figcaption>
</figure>

<time>1957-10-04</time>
`;

class CommonQuestions extends Component {
  render () {
    return (
      <div>
        <Head>Общие вопросы</Head>

        <SubHead>HTML5 новые теги</SubHead>
        <p>
          1. Header, footer, section, article, video, audio, progress, nav, meter, time,
          aside, canvas<br/>
          2. Новые значения атрибута <b>type</b><br/>
          3. Новые атрибуты элементов: dragable, contenteditable, hidden, contextmenu, data-*, dropzone,
          role, spellcheck[8] ...
        </p>
        <SubHead>Преимущества</SubHead>
        <p>
          Поисковые системы лучше индексируют сайт. Лучше работают речевые браузеры (для слепых).
          Всё предназначено для роботов, интерпретирующих код.
        </p>
        <p><b>Header</b> - определяет шапку сайта или раздела</p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code2}
        </StyledSyntaxHighlighter>

        <SubHead>CSS переменные</SubHead>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code1}
        </StyledSyntaxHighlighter>

        <SubHead>Функциональное программирование</SubHead>
        <p>
          1. Все функции - чистые. Функции, вызываемые от одних и тех же аргументов всегда возвращают
          одинаковые значения. Нет обращений к переменным вне функции. Нет побочных эффектов
          (не меняем ничего вне функции).<br/>
          2. Функции высшего порядка - это те, которые принимают другую функцию как
          аргумент или возвращают функцию (например .filter и .map).<br/>
          3. Переменные неизменяемы (const)
          4. ...
        </p>


      </div>
    );
  }
}

export default CommonQuestions;