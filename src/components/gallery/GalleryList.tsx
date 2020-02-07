import React, { Component } from 'react';
import { GalleryItem } from './Gallery-Item';
import { StGalleryList } from './styledComponent';
import { Image } from '../../types';

interface GalleryListProps {
  list: Array<Image>,
}

export class GalleryList extends Component<GalleryListProps> {
  render() {
    const { list } = this.props;
    const galleryList = list.map(item => (
      <GalleryItem key={item.id} srcImg={item.urls.regular} liked={item.liked_by_user} />
    ));

    return (
      <StGalleryList>
        {galleryList}
      </StGalleryList>
    );
  }
}
