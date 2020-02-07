import React, { Component } from 'react';
import { StHeader, LoginLink, LogoutBtn } from './styledComponent';
import { ACCESS_KEY, REDIRECT_URL } from '../../../global-constants';
import { RootStore } from '../../stores';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isAuthenticated: boolean,
  stores: RootStore,
}

export class Header extends Component<HeaderProps>{
  getLoginUrl = () => {
    return `https://unsplash.com/oauth/authorize?client_id=${ACCESS_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections`;
  };

  logoutHandler = () => {
    const { stores } = this.props;
    stores.auth.removeToken();
  };

  render() {
    const { isAuthenticated } = this.props;

    if (!isAuthenticated) {
      return (
        <StHeader>
          <LoginLink href={this.getLoginUrl()}>Login</LoginLink>
        </StHeader>
      );
    }

    return (
      <StHeader>
        <Link to="/gallery">Gallery</Link>
        <Link to="/galleryLikes">Liked</Link>
        <LogoutBtn onClick={this.logoutHandler}>Logout</LogoutBtn>
      </StHeader>
    );
  };
}
