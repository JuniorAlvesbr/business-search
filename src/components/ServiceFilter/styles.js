import styled from 'styled-components';
import IconMenu from '../IconMenu';

export const ServiceFilterStyle = styled.nav`
  display: flex;
  align-items: center;
  background-color: rgba(58, 64, 66, 0.4);
  padding: 8px var(--gap-small);
  cursor: pointer;

  & > ${IconMenu} {
    margin-right: var(--gap-small);
  }
`;

export const Label = styled.p`
  font-size: 20px;
  color: white;
`;
