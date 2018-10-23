import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import { colorsDark } from 'styles/theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={colorsDark}>
        <Fragment>
          <div className="App">App component</div>
          <GlobalStyles />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
