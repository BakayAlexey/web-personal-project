import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { stores } from '../../stores';

@inject('stores')
export class GalleryList extends Component {
  async componentDidMount() {
    const url = `https://unsplash.com/photos`;
    try {
      const response = await fetch(url, { method: 'GET', headers: { 'Authorization': `Bearer ${stores.auth.token}` } });
      const res = await response.json();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        GalleryList
      </div>
    );
  }
}
