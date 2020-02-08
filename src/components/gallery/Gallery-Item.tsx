import React, { Component } from 'react';
import styled from 'styled-components';
import { StGalleryItem, GalleryItemContent, ImgWrap, Img, GalleryItemLike } from './styledComponent';

interface GalleryItemProps {
  id: string,
  srcImg: string,
  liked: boolean,
  handerLike: (id: string) => void
}

export class GalleryItem extends Component<GalleryItemProps> {

  handleClick = () => {
    const { id, handerLike } = this.props;
    handerLike(id);
  };

  render() {
    return (
      <StGalleryItem>
        <GalleryItemContent>
          <ImgWrap to={`/gallery/${this.props.id}`}>
            <Img src={this.props.srcImg} alt="img" />
          </ImgWrap>
          <GalleryItemLike
            liked={this.props.liked}
            onClick={this.handleClick}
          >
            Like
          </GalleryItemLike>
        </GalleryItemContent>
      </StGalleryItem>
    );
  }
}
