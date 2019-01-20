import React, { Component } from 'react';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';

import Important from '../components/Important';
import { Head, SubHead, StyledSyntaxHighlighter } from '../components/shared';

const code1 = `var worker = new Worker('task.js');
`;

const code2 = `if ('serviceWorker' in navigator) {
  // регистрируем, если поддерживается
  navigator.serviceWorker.register('sw.js').then((reg) => {...})
  
  navigator.serviceWorker.register('sw.js', { scope: '/test/' });
  navigator.serviceWorker.register('/test/sw.js');
  // в обоих случаях скоупом будет папка 'test' (выше неё работать не будет)
}
`;

class WorkerPage extends Component {
  render () {
    return (
      <div>
        <Head>Head</Head>
        <Important>
          Javascript однопоточный язык, однако, он поддерживает и возможности асинхронного
          выполнения кода
        </Important>
        <p>
          <b>Веб воркеры</b> - это часть API браузера, которую дал нам HTML5. Это потоки,
          принадлежащие браузеру, которые можно использовать для выполнения JS кода без блокировки
          цикла событий!
        </p>
        <p>
          То есть с помощью воркеров можно запускать фоновые потоки! У каждого воркера есть
          свой stack, heap и event loop.
        </p>
        <p>
          Можно размещать ресурсоемкие задачи в фоновых потоках
        </p>
        <Important>Веб воркеры не реализованы в Node.js</Important>
        <SubHead>Три типа воркеров</SubHead>
        <p>
          1. <b>Выделенные воркеры</b> - создаются главным процессом<br/>
          2. <b>Разделенные воркеры</b> - доступ может получить любой процесс, имеющий тот же источник (разные
          вкладки браузера, iframe, другие разделяемые воркеры)<br/>
          3. <b>Сервис воркеры</b>
        </p>
        <p>
          Веб воркеры реализованы с помощью js файлов. Код, который они выполняют, должен быть
          включен в отдельный файл.
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code1}
        </StyledSyntaxHighlighter>
        <p>
          Если файл <b>task.js</b> существует и к нему есть доступ, браузер создаст
          новый поток, который асинхронно загрузит этот файл. После того, как загрузка завершена,
          начнется выполнение кода воркера.<br/>
          Для запуска только что созданного воркера, нужно вызвать его метод <b>worker.postMessage();</b>
        </p>
        <p>
          Послать сообщение в веб воркер (например, передать данные для расчетов) можно с помощью
          метода <b>postMessage()</b>. Аналогично, результаты вычисленийи прочие данные воркер может
          отправить в главный поток с помощью метода <b>postMessage()</b> - добавит событие типа
          <b>message</b> в очередь событий главного потока.
        </p>
        <Important>Web workers (в том числе и сервис воркеры) не имеют доступа к DOM</Important>
        <SubHead>Service Worker</SubHead>
        <p>
          Это технология API браузера<br/>
          Пример использования - отдает ресурсы из кэша.
          Или нажал на кнопку - запрос сохраняется в воркере и отправляется только когда
          появилось интернет соединение.<br/>
          Работа в оффлайн<br/>
          Работа с кэшем<br/>
          Фоновая синхронизация<br/>
          Пуш уведомления<br/>
          Можно регистрировать несколько сервис-воркеров!
        </p>
        <p>
          Это обыкновенный sw.js файл. Это что-то типа проксимежду браузером и интернетом. Он
          может принимать запросы, перенаправлять, модифицировать и т.д.
        </p>
        <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
          {code2}
        </StyledSyntaxHighlighter>
        <Important>Работает только по https (+localhost)</Important>
      </div>
    );
  }
}

export default WorkerPage;