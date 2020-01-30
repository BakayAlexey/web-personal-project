import React, { Component, Fragment } from 'react';
import { Header } from './components/header';

export class App extends Component {
  get menu() {
    return (
      <div>

      </div>
    );
  }

  render() {
    return (
      <Fragment>
        <Header />
      </Fragment>
    );
  }
}

