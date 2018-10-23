import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from 'store';
import App from 'components/App';
import GlobalStyles from 'styles/global';
import { colorsDark } from 'styles/palette';
import * as serviceWorker from 'serviceWorker';

const initialState = {};
const store = configureStore(initialState);

store.dispatch({ type: '@@INIT' });

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={colorsDark}>
      <Fragment>
        <App />
        <GlobalStyles />
      </Fragment>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
