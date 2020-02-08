import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { GalleryItem } from './Gallery-Item';
import { StGalleryList } from './styledComponent';
import { Image } from '../../types';
import { RootStore } from '../../stores';

interface GalleryListProps {
  list: Array<Image>,
  stores?: RootStore,
}

@inject('stores')
@observer
export class GalleryList extends Component<GalleryListProps> {

  handleLikes = (id: string) => {
    const { likePhoto } = this.props.stores!.galleryLikes;
    likePhoto(id);
  };

  render() {
    const { list } = this.props;
    const galleryList = list.map(item => (
      <GalleryItem
        key={item.id}
        id={item.id}
        srcImg={item.urls.regular}
        liked={item.liked_by_user}
        handerLike={this.handleLikes}
      />
    ));

    return (
      <StGalleryList>
        {galleryList}
      </StGalleryList>
    );
  }
}
