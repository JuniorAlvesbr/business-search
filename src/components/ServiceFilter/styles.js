import styled from 'styled-components';
import IconMenu from '../IconMenu';

export const ServiceFilterStyle = styled.nav`
  display: flex;
  align-items: center;
  background-color: #3a4042;
  padding: 8px 16px;

  & > ${IconMenu} {
    margin-right: 16px;
  }
`;

export const Label = styled.p`
  font-family: 'Comfortaa', cursive;
  font-size: 20px;
  color: white;
`;
