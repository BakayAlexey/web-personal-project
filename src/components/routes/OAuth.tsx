import React, { Component, Fragment } from 'react';
import { Redirect, RouteChildrenProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { ACCESS_KEY, SECRET_KEY, REDIRECT_URL } from '../../../global-constants';
import { stores } from '../../stores';

@inject('stores')
@observer
export class OAuth extends Component<RouteChildrenProps> {
  async componentDidMount() {
    const { search } = this.props.location;
    if (!stores.auth.token && search) {
      const code = search.split('=')[1];
      const url = `https://unsplash.com/oauth/token?client_id=${ACCESS_KEY}&client_secret=${SECRET_KEY}&redirect_uri=${REDIRECT_URL}&code=${code}&grant_type=authorization_code`;

      try {
        const response = await fetch(url, { method: 'POST' });
        const res = await response.json();
        stores.auth.setToken(res.access_token);
      } catch (e) {
        console.log(e);
      }
    }
  }

  render() {
    return (
      <Fragment>
        {stores.auth.token ? <Redirect to="/gallery" /> : <div>OAuth</div>}
      </Fragment>
    );
  }
}
