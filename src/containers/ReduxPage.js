import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';


const Head = styled.h1`
  font-size: 20px;
  font-weight: 500;
`;

const Point = styled.div`
  font-size: 18px;
  color: #518e11;
  margin-bottom: 5px;
`;

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  border-radius: 4px;
  margin: 20px 0!important;
  font-size: 14px;
  padding: 20px!important;
`;

const code1 = `{
  type: 'ЗАГРУЗИ_ФОТО',
  payload: 2018
}
`;

const code2 = `function getPhotos(year) {
  return {
    type: GET_PHOTOS,
    payload: year
  }
}
`;

const code3 = `function page(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTO_SUCCESS:
      return Object.assign({}, state, {
        photos: action.payload
      })
      ...
      default ...
  }
}
`;

const code4 = `const mapDispatchToProps = dispatch => ({
  setYearAction: year => dispatch(setYear(year))
})
// setYear - это action creator
`;

class ReduxPage extends Component {

  render () {

    return (
      <div>
        <Head>Redux</Head>

        <p>
          <Point>Action</Point>
          это просто объект<br/>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            { code1 }
          </StyledSyntaxHighlighter>
        </p>

        <p>
          <Point>Action Creator</Point>
          это функция для вызова action<br/>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            { code2 }
          </StyledSyntaxHighlighter>
        </p>

        <p>
          <Point>Reducer</Point>
          это функция, которая принимает предыдущее состояние и действие (state и action)
          и возвращает новую версию предыдущего состояния (следующее состояние).<br/>
          Разбиваем приложение на кусочки и за каждый кусочек отвечает редьюсер.<br/>
          <b>В редьюсере всегда возвращаем новый объект!</b><br/>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            { code3 }
          </StyledSyntaxHighlighter>
        </p>

        <p>
          <Point>mapDispatchToProps</Point>
          <StyledSyntaxHighlighter language='javascript' style={tomorrow}>
            { code4 }
          </StyledSyntaxHighlighter>
        </p>


      </div>
    );
  }
}

export default ReduxPage;