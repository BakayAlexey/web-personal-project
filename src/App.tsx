import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { stores } from './stores'
import { ProtectedRoute, ProtectedRouteProps } from './components/common';
import { Header } from './components/header';
import { Home, Login, OAuth, Gallery, Error } from './components/routes';

@inject('stores')
@observer
export class App extends Component {
  render() {
    const isAuthenticated:boolean = !!stores.auth.token;

    const defaultProtectedRouteProps: ProtectedRouteProps = {
      isAuthenticated,
      authenticationPath: '/login',
    };

    return (
      <Fragment>
        <Header isAuthenticated={isAuthenticated} />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} />
            <Route path="/oauth" component={OAuth} />
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              path="/gallery/:id"
              component={Gallery}
            />
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              path="/gallery"
              component={Gallery}
            />
            <Route path="/404" component={Error} />
            <Redirect to="/404" />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}
