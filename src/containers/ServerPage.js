import React, { Component } from 'react';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';

import { Head, SubHead, StyledSyntaxHighlighter } from '../components/shared';

const code1 = `sudo /etc/init.d/nginx start
// stop чтобы остановить
`;

class ServerPage extends Component {
  render () {
    return (
      <div>
        <Head>WEB Server</Head>
        <p>
          <b>Apache</b> - самый старый и самый распространенный unix сервер<br/>
          <b>Nginx</b> - Быстрый надёжный unix сервер<br/>
          <b>Light TPD</b> - аналог Nginx<br/>
          <b>IIS7</b> - microsoft сервер
        </p>
        <p>
          Daemon - это программа, которая висит в памяти и обрабатывает данные,
          которые приходят по сети.<br/>
          В Unix сервера являются демонами!<br/>
          Запускаются с помощью init скрипта.
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code1}
        </StyledSyntaxHighlighter>
        <p>
          чтение файла конфигурации<br/>
          получение порта 80 (порты ниже 1024 - нужен sudo)<br/>
          открытие (создание) логов (sudo)<br/>
          понижение привилегий (запросы обрабатываются от обычного пользователя)<br/>
          запуск дочерних процессов/потоков (воркеры)<br/>
          готов к обработке запроса
         </p>
        <SubHead>Процессы веб сервера (основные)</SubHead>
        <p>
          <b>Master</b> - под root! мониторинг. При инициализации + запуск workers
          <b>Worker</b> - не root! может быть много
        </p>
      </div>
    );
  }
}

export default ServerPage;