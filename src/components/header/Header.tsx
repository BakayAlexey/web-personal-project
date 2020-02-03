import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { stores } from '../../stores';
import { StHeader, LoginLink, LogoutBtn } from './styledComponent';
import { ACCESS_KEY, SECRET_KEY, REDIRECT_URL } from '../../../global-constants';

interface HeaderProps {
  isAuthenticated: boolean,
}

@inject('stores')
@observer
export class Header extends Component<HeaderProps>{
  getLoginUrl = () => {
    return `https://unsplash.com/oauth/authorize?client_id=${ACCESS_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections`;
  };

  logoutHandler = () => {
    stores.auth.removeToken();
  };

  render() {
    const { isAuthenticated } = this.props;

    return (
      <StHeader>
        {isAuthenticated ?
          <LogoutBtn onClick={this.logoutHandler}>Logout</LogoutBtn> :
          <LoginLink href={this.getLoginUrl()}>Login</LoginLink>
        }
      </StHeader>
    );
  };
}
