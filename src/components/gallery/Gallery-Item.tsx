import React, { Component } from 'react';
import styled from 'styled-components';
import { StGalleryItem, StImg } from './styledComponent';

interface GalleryItemProps {
  srcImg: string,
}

export class GalleryItem extends Component<GalleryItemProps> {
  render() {
    return (
      <StGalleryItem>
        <StImg src={this.props.srcImg} alt="img" />
      </StGalleryItem>
    );
  }
}
