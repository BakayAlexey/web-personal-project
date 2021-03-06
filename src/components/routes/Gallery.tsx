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
export class Gallery extends Component<GalleryProps> {
  componentDidMount() {
    const { loadEntities, isLoaded } = this.props.stores!.gallery;
    if (!isLoaded) {
      loadEntities();
    }
  }

  btnHandler = () => {
    const {loadEntities} = this.props.stores!.gallery;
    loadEntities();
  };

  render() {
    const { entities } = this.props.stores!.gallery;
    const galleryList = Object.values(entities);

    if (galleryList.length === 0) {
      return (
        <div>No data</div>
      );
    }

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
}
