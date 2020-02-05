import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { RootStore } from '../../stores';
import { GalleryItem } from './Gallery-Item';
import { StGalleryList, BtnWrapper, Btn } from './styledComponent';

interface GalleryListProps {
  stores?: RootStore,
}

@inject('stores')
@observer
export class GalleryList extends Component<GalleryListProps> {
  componentDidMount() {
    const { loadEntities } = this.props.stores!.gallery;
    loadEntities();
  }

  btnHandler = () => {
    const { loadEntities } = this.props.stores!.gallery;
    loadEntities();
  };

  render() {
    const { entities } = this.props.stores!.gallery;
    const galleryList = [];
    for (let [_, item] of entities) {
      galleryList.push(
        <GalleryItem key={item.id} srcImg={item.urls.regular} />
      );
    }

    if (entities.size === 0) {
      return (
        <div>No data</div>
      );
    }

    return (
      <StGalleryList>
        {galleryList}
        <BtnWrapper>
          <Btn onClick={this.btnHandler}>Load more...</Btn>
        </BtnWrapper>
      </StGalleryList>
    );
  }
}
