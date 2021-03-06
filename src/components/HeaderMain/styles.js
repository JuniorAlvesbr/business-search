import styled from 'styled-components';
import LogoMain from '../LogoMain';
import IconSearch from '../IconSearch';

const HeaderMainStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--gap-small) var(--gap-small) 24px;

  & > ${LogoMain}, & > ${IconSearch} {
    width: 24px;
  }
`;

export default HeaderMainStyle;
