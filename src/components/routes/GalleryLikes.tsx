import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { GalleryList } from '../gallery';
import { RootStore } from '../../stores';
import { Btn, BtnWrapper } from '../gallery/styledComponent';

interface GalleryProps {
  stores?: RootStore,
}

@inject('stores')
@observer
export class GalleryLikes extends Component<GalleryProps> {
  componentDidMount() {
    const { loadEntities, isLoaded } = this.props.stores!.galleryLikes;
    if (!isLoaded) {
      loadEntities();
    }
  }

  btnHandler = () => {
    const {loadEntities} = this.props.stores!.galleryLikes;
    loadEntities();
  };

  render() {
    const { entities } = this.props.stores!.galleryLikes;

    const galleryList = entities && Object.values(entities);

    if (galleryList && galleryList.length > 0) {
      return (
        <Fragment>
          <GalleryList list={galleryList} />
          <BtnWrapper>
            <Btn onClick={this.btnHandler}>
              Load more ...
            </Btn>
          </BtnWrapper>
        </Fragment>
      );
    }

    return (
      <div>No data</div>
    );
  }
}
