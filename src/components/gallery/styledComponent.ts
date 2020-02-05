import styled from 'styled-components';

export const StGalleryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const StGalleryItem = styled.div`
  width: 25%;
  padding: 10px;
`;

export const StImg = styled.img`
  display: block;
  width: 100%;
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
  
  &:hover {
    background-color: #00c393;
  }
`;
