import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StGalleryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

export const StGalleryItem = styled.div`
  display: flex;
  width: 25%;
  padding: 10px;
`;

export const GalleryItemContent = styled.div`
  position: relative;
  width: 100%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .2);
`;

export const ImgWrap = styled(Link)`
  display: block;
  width: 100%;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
`;

interface GalleryItemLikeProps {
  liked: boolean,
}

export const GalleryItemLike = styled.div<GalleryItemLikeProps>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 5px 10px;
  background-color: ${({ liked }) => liked ? 'rgba(241, 81, 81, .5)' : 'rgba(255, 255, 255, .5)'};
  font-size: 14px;
  font-weight: bold;
  color: ${({ liked }) => liked ? '#ffffff' : '#000000'};
  text-align: center;
  transition: background-color .3s;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ liked }) => liked ? 'rgba(241, 81, 81, 1)' : 'rgba(255, 255, 255, 1)'};
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content:center;
  width: 100%;
  margin-top: 40px;
`;

export const Btn = styled.button`
  display: inline-block;
  padding: 10px 25px;
  background-color: #00aa80;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  font-weight:bold;
  color: #ffffff;
  text-decoration: none;
  transition: background-color .3s;
  cursor: pointer;
  
  &:hover {
    background-color: #00c393;
  }
`;
