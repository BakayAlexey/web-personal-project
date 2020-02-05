import React, { Component, Fragment } from 'react';
import { Redirect, RouteChildrenProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { ACCESS_KEY, SECRET_KEY, REDIRECT_URL } from '../../../global-constants';
import { RootStore } from '../../stores';

interface OAuthProps extends RouteChildrenProps {
  stores: RootStore,
}

@inject('stores')
@observer
export class OAuth extends Component<OAuthProps> {
  async componentDidMount() {
    const { stores, location: { search } } = this.props;
    if (!stores.auth.token && search) {
      const code = search.split('=')[1];
      const url = `https://unsplash.com/oauth/token?client_id=${ACCESS_KEY}&client_secret=${SECRET_KEY}&redirect_uri=${REDIRECT_URL}&code=${code}&grant_type=authorization_code`;

      try {
        const response = await fetch(url, { method: 'POST' });
        const res = await response.json();
        console.log(res);
        stores.auth.setToken(res.access_token);
      } catch (e) {
        console.log(e);
      }
    }
  }

  render() {
    return (
      <Fragment>
        {this.props.stores.auth.token ? <Redirect to="/gallery" /> : <div>OAuth</div>}
      </Fragment>
    );
  }
}
