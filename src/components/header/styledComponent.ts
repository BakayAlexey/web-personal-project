import styled from 'styled-components';

export const StHeader = styled.header`
  padding: 5px 10px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  text-align: center;
`;

export const LoginLink = styled.a`
  display: inline-block;
  padding: 10px 25px;
  background-color: #00aa80;
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

export const LogoutBtn = styled.button`
  
`;