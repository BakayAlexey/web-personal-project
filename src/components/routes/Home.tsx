import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { stores } from '../../stores';

@inject('stores')
@observer
export class Home extends Component {
  render() {
    return (
      <Fragment>
        {stores.auth.token ?
          <Redirect to="/gallery" /> :
          <Redirect to="/login" />
        }
      </Fragment>
    );
  }
}
