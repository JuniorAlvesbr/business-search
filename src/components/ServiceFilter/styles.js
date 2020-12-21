import styled from 'styled-components';
import IconMenu from '../IconMenu';

export const ServiceFilterStyle = styled.nav`
  display: flex;
  background-color: #3a4042;

  & > ${IconMenu} {
    margin-right: 16px;
  }
`;

export const Label = styled.p`
  font-family: 'Comfortaa', cursive;
  font-size: 20px;
  color: white;
`;
