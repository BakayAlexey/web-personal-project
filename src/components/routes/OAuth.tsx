import React, { Component } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { ACCESS_KEY, SECRET_KEY, REDIRECT_URL, REDIRECT_URL_APP } from '../../../global-constants';
import { stores } from '../../stores';

export class OAuth extends Component<RouteChildrenProps> {
  async componentDidMount() {
    if (!stores.auth.token) {
      const { search } = this.props.location;
      const code = search.split('=')[1];
      console.log(code);
      const url = `https://unsplash.com/oauth/token?client_id=${ACCESS_KEY}&client_secret=${SECRET_KEY}&redirect_uri=${REDIRECT_URL}&code=${code}&grant_type=authorization_code`;

      const response = await fetch(url, { method: 'POST' });
      const res = await response.json();
      console.log(res);
      stores.auth.token = '123;'
    }
  }

  render() {
    return (
      <div>
        OAuth
      </div>
    );
  }
}
