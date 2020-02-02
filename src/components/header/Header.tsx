import React, { Component } from 'react';
import { StHeader, LoginLink, LogoutBtn } from './styledComponent';
import { ACCESS_KEY, SECRET_KEY, REDIRECT_URL } from '../../../global-constants';

interface HeaderProps {
  isAuthenticated: boolean,
}

export class Header extends Component<HeaderProps>{
  getLoginUrl = () => {
    return `https://unsplash.com/oauth/authorize?client_id=${ACCESS_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections`;
  };

  render() {
    const { isAuthenticated } = this.props;

    return (
      <StHeader>
        {isAuthenticated ?
          <LogoutBtn>Logout</LogoutBtn> :
          <LoginLink href={this.getLoginUrl()}>Login</LoginLink>
        }
      </StHeader>
    );
  };
}
