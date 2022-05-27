import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import store from './store';
import { Container, H4 } from './components/ui';
import Tournaments from './components/Tournaments';
import strings from './constants/strings';

const App: React.FC = () => {
  return (
    <Container>
      <H4>{strings.faceitTournaments}</H4>
      <Tournaments />
    </Container>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
