import React, { Component } from 'react';
import styled from 'styled-components';
import { StGalleryItem, GalleryItemContent, StImg, GalleryItemLike } from './styledComponent';

interface GalleryItemProps {
  srcImg: string,
  liked: boolean,
}

export class GalleryItem extends Component<GalleryItemProps> {
  render() {
    return (
      <StGalleryItem>
        <GalleryItemContent>
          <StImg src={this.props.srcImg} alt="img" />
          <GalleryItemLike liked={this.props.liked}>Like</GalleryItemLike>
        </GalleryItemContent>
      </StGalleryItem>
    );
  }
}
