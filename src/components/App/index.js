import React, { Component, Fragment } from 'react';
import List from 'components/List';
import { Wrapper, Title } from './styles';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <Title>Hacker News Reader</Title>
          <List />
        </Wrapper>
      </Fragment>
    );
  }
}

export default App;
